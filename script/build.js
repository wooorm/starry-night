/**
 * @typedef {import('../lib/index.js').Grammar} Grammar
 * @typedef {import('../lib/index.js').Rule} Rule
 */

/**
 * @typedef Info
 *   Info about a language.
 * @property {ReadonlyArray<string>} extensions
 *   List of extensions.
 * @property {ReadonlyArray<string>} names
 *   List of names.
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {fileURLToPath} from 'node:url'
import jsonStableStringify from 'json-stable-stringify'
import prettier from 'prettier'
import {parse as parseYaml} from 'yaml'
import {common} from './common.js'

/**
 * List of scopes renamed in `github-linguist`.
 *
 * Occasionally, delete all files in `lang/`, see what’s removed,
 * see if there’s a new scope, and add them here.
 *
 * This prevents having to introduce breaking changes in `starry-night`.
 *
 * To do: is this a major? drop the ones here.
 *
 * @type {Record<string, string>}
 */
const aliases = {
  // Old names to new names.
  // Example: 'source.brightscript': 'source.brs'
}

const gemsBase = new URL('../gems/gems/', import.meta.url)
const languagesBase = new URL('../lang/', import.meta.url)

await fs.mkdir(languagesBase, {recursive: true})

// Human-maintained database of which language needs what language.
/** @type {Record<string, Record<string, boolean>>} */
const graph = parseYaml(
  String(await fs.readFile(new URL('graph.yml', import.meta.url)))
)

/** @type {Array<string>} */
let installed = []

try {
  installed = await fs.readdir(gemsBase)
} catch (error) {
  const exception = /** @type {NodeJS.ErrnoException} */ (error)
  if (exception.code !== 'ENOENT') {
    throw exception
  }
}

const prefix = 'github-linguist-'
const linguistBasename = installed.find(function (d) {
  return d.startsWith(prefix)
})

if (!linguistBasename) {
  console.log(
    'Linguist gem is missing. To rebuild all languages, with ruby installed, run `npm run generate-crawl` first. Note that it can take minutes to do so.'
  )

  // Fine 🙂
  /* eslint-disable-next-line unicorn/no-process-exit */
  process.exit()
}

const version = linguistBasename.slice(prefix.length)
assert(version, 'expected version to be found for `linguist`')

console.log('generating from linguist %s', version)

const prettierConfig = await prettier.resolveConfig(
  fileURLToPath(languagesBase)
)

const gemBase = new URL(linguistBasename + '/', gemsBase)
const languagesUrl = new URL('lib/linguist/languages.json', gemBase)

/** @type {Record<string, {aliases?: ReadonlyArray<string>, extensions?: ReadonlyArray<string>, tm_scope: string}>} */
const languages = JSON.parse(String(await fs.readFile(languagesUrl)))
/** @type {string} */
let name

/** @type {Map<string, string>} */
const uniqueIdentifiers = new Map()
/** @type {Map<string, Set<string>>} */
const duplicates = new Map()

// Order is important, so we need to run it several times.
for (const [name, language] of Object.entries(languages)) {
  const scope = language.tm_scope

  if (scope === 'none') {
    continue
  }

  const names = (language.aliases || []).map(function (d) {
    return normalizeLinguistName(d)
  })
  const defaultId = normalizeLinguistName(name)

  if (!names.includes(defaultId)) {
    names.push(defaultId)
  }

  for (const alias of names) {
    const existing = uniqueIdentifiers.get(alias)

    if (existing) {
      assert(
        existing === scope,
        'expected duplicate names to refer to same language'
      )
    }

    uniqueIdentifiers.set(alias, scope)
  }
}

// Order is important, so we need to run it several times.
for (const [name, language] of Object.entries(languages)) {
  const scope = language.tm_scope

  if (scope === 'none') {
    continue
  }

  const extnames = (language.extensions || []).map(function (d) {
    return normalizeLinguistExtension(d)
  })

  for (const extname of extnames) {
    const existing = uniqueIdentifiers.get(extname)

    if (existing) {
      const dupes = duplicates.get(extname) || new Set()
      dupes.add(existing)
      dupes.add(name)
      duplicates.set(extname, dupes)
    } else {
      uniqueIdentifiers.set(extname, scope)
    }
  }
}

/** @type {Map<string, Info>} */
const linguistInfo = new Map()

for (name in languages) {
  if (Object.hasOwn(languages, name)) {
    const rawInfo = languages[name]
    const scope = rawInfo.tm_scope

    assert(
      // This one actually turns into two classes on GH, which must be a bug.
      scope === 'source.pov-ray sdl' || /^[-a-z\d+_.]+$/.test(scope),
      scope
    )

    if (scope === 'none') {
      continue
    }

    let names = [name, ...(rawInfo.aliases || [])].map(function (d) {
      return normalizeLinguistName(d)
    })

    let extensions = (rawInfo.extensions || []).map(function (d) {
      return normalizeLinguistExtension(d)
    })

    const info = linguistInfo.get(scope)

    if (info) {
      names = [...info.names, ...names].sort()
      extensions = [...info.extensions, ...extensions].sort()
    }

    linguistInfo.set(scope, {extensions, names})
  }
}

const grammarSchema = {
  allow: ['injections', 'repository'],
  need: ['patterns', 'scopeName'],
  remove: ['name']
}

const ruleSchema = {
  allow: [
    'applyEndPatternLast',
    'begin',
    'beginCaptures',
    'captures',
    'contentName',
    'end',
    'endCaptures',
    'include',
    'injections',
    'match',
    'name',
    'patterns',
    'repository',
    'while',
    'whileCaptures'
  ],
  remove: ['disabled']
}

const grammarsBase = new URL('grammars/', gemBase)
const grammarBasenames = await fs.readdir(grammarsBase)
const scopes = grammarBasenames.flatMap(function (d) {
  const ext = path.extname(d)

  if (ext === '.json') {
    return path.basename(d, ext)
  }

  assert(d === 'version', d)
  return []
})

/** @type {Map<string, ReturnType<typeof analyze>>} */
const dependencyInfo = new Map()

// Write grammars.
await Promise.all(
  scopes.map(async function (scope) {
    const inputUrl = new URL(scope + '.json', grammarsBase)
    const outputUrl = new URL(scope + '.js', languagesBase)

    const grammar = cleanGrammar(
      /** @type {Grammar} */
      (JSON.parse(String(await fs.readFile(inputUrl)))),
      scope
    )
    assert(grammar.scopeName === scope, 'expected scopes to match')

    const result = analyze(grammar)
    dependencyInfo.set(scope, result)

    const info = linguistInfo.get(scope) || {extensions: [], names: []}

    for (const name of info.names) {
      const mappedScope = uniqueIdentifiers.get(name)
      assert(mappedScope, 'expected mapping')
      assert(mappedScope === scope, 'expected names to be unique')
    }

    /**
     * List of extensions that can be used with and without dots.
     *
     * To illustrate, `yaml` can be used like ` ```yaml ` and like ` ```.yaml `.
     *
     * @type {Array<string>}
     */
    const extensions = []

    /**
     * List of extensions that can only be used with a dot.
     *
     * To illustrate, ` ```adb ` maps to `Adblock Filter List`, whereas
     * ` ```.adb ` maps to `Ada`.
     *
     * @type {Array<string>}
     */
    const extensionsWithDot = []

    for (const name of info.extensions) {
      const mappedScopeDot = uniqueIdentifiers.get(name)
      const short = name.slice(1)
      assert(mappedScopeDot, 'expected mapping')
      const mappedScopeDotless = uniqueIdentifiers.get(short) || mappedScopeDot

      if (mappedScopeDot === scope) {
        if (mappedScopeDotless === scope) {
          extensions.push(name)
        } else {
          extensionsWithDot.push(name)
        }
      } else if (mappedScopeDotless === scope) {
        // Only allowed without a dot (`html`), because with a dot, it maps to
        // something else (`.html` weirdly maps to `ecmarkup`).
        // That means, the short form must be in names.
        // It might not currently be though, because we’re still looping!
        assert(
          info.names.includes(short),
          'expected extension (w/o dot) in names'
        )
        // Otherwise, ignore the extension: it maps to something else in all cases!
      }
    }

    const dependencies = Object.hasOwn(graph, scope) ? graph[scope] : {}
    /** @type {Array<string>} */
    const required = []

    for (const dep of Object.keys(dependencies)) {
      if (dependencies[dep]) {
        required.push(dep)
      }
    }

    await fs.writeFile(
      outputUrl,
      await prettier.format(
        [
          "/** @type {import('../lib/index.js').Grammar} */",
          'const grammar = ' +
            jsonStableStringify({
              ...grammar,
              dependencies: required.length === 0 ? undefined : required,
              extensions,
              extensionsWithDot:
                extensionsWithDot.length === 0 ? undefined : extensionsWithDot,
              names: info.names
            }),
          '',
          'export default grammar',
          ''
        ].join('\n'),
        {...prettierConfig, parser: 'babel'}
      )
    )
  })
)

console.log('generated %s grammars', scopes.length)

console.log()
console.log('analyzing…')

/** @type {Map<string, Set<string>>} */
const dependencies = new Map()

for (const [scope, {defined, referenced}] of dependencyInfo) {
  /** @type {Set<string>} */
  const deps = new Set()

  for (const reference of referenced) {
    if (reference.charAt(0) === '$') {
      if (reference === '$self' || reference === '$base') {
        // Fine.
      } else {
        console.warn(
          '%s: found unknown dollar reference `%s`',
          scope,
          reference
        )
      }
    } else if (reference.charAt(0) === '#') {
      if (!defined.has(reference.slice(1))) {
        console.warn('%s: undefined internal reference `%s`', scope, reference)
      }
    } else {
      const index = reference.indexOf('#')
      const [externalScope, externalReference] =
        index === -1
          ? [reference]
          : [reference.slice(0, index), reference.slice(index + 1)]
      const externalInfo = dependencyInfo.get(externalScope)

      if (externalInfo) {
        // A reference deep into a different grammar.
        if (externalReference) {
          const has = externalInfo.defined.has(externalReference)

          if (has) {
            deps.add(externalScope)
          } else {
            console.warn(
              '%s: undefined reference to `%s#%s`',
              scope,
              externalScope,
              externalReference
            )
          }
        } else {
          // A reference to a different grammar, which exists.
          deps.add(externalScope)
        }
      } else {
        console.warn(
          '%s: missing grammar for scope name `%s`',
          scope,
          externalScope
        )
      }
    }
  }

  // Sometimes `$self` is included as a full name.
  deps.delete(scope)

  dependencies.set(scope, deps)
}

console.log()

/** @type {Set<string>} */
const used = new Set()

for (const [scope] of linguistInfo) {
  add(scope)
}

/** @param {string} scope */
function add(scope) {
  if (used.has(scope)) return
  used.add(scope)
  const deps = dependencies.get(scope)
  assert(deps, scope)
  for (const dep of deps) {
    add(dep)
  }
}

const unneeded = scopes.filter(function (d) {
  return !used.has(d)
})

await Promise.all(
  unneeded.map(async function (d) {
    await fs.unlink(new URL(d + '.js', languagesBase))
  })
)

console.log('unlinked %s unused grammars', unneeded.length)

const usedScopes = [...used].sort()

for (const scope of usedScopes) {
  const deps = dependencies.get(scope)
  assert(deps, scope)

  if (deps.size > 0) {
    const manifest = Object.hasOwn(graph, scope) ? graph[scope] : undefined

    if (manifest) {
      /** @type {Set<string>} */
      const missing = new Set()
      /** @type {Set<string>} */
      const superfluous = new Set()

      for (const dep of deps) {
        if (!Object.hasOwn(manifest, dep)) {
          missing.add(dep)
        }
      }

      for (const dep of Object.keys(manifest)) {
        if (!deps.has(dep)) {
          superfluous.add(dep)
        }
      }

      if (missing.size > 0) {
        console.warn(
          `Missing entries in \`graph.yml\` for \`${scope}\`, here’s the fields to add:
${[...missing]
  .sort()
  .map(function (d) {
    return `  ${d}: false`
  })
  .join('\n')}
`
        )
      }

      if (superfluous.size > 0) {
        console.warn(
          `Superfluous entries in \`graph.yml\` for ${scope}, here’s the fields to remove:
\`${[...superfluous].sort().join('`, `')}\`
`
        )
      }
    } else {
      console.warn(
        `Missing entry in \`graph.yml\`, here’s a template you can fill out:
${scope}:
${[...deps]
  .sort()
  .map(function (d) {
    return `  ${d}: false`
  })
  .join('\n')}
`
      )
    }
  } else if (Object.hasOwn(graph, scope)) {
    console.warn(
      'Superfluous entry in `graph.yml` for `%s`, it has no dependencies',
      scope
    )
  }
}

const indices = ['common', 'all']

// Write index files.
await Promise.all(
  indices.map(async function (d) {
    /** @type {Array<string>} */
    const list = []

    const scopes = d === 'common' ? common : [...linguistInfo.keys()]

    /** @param {Array<string>} scopes */
    for (const scope of scopes) {
      add(scope)
    }

    list.sort()

    /** @param {string} scope */
    function add(scope) {
      if (!list.includes(scope)) {
        list.push(scope)

        const dependencies = Object.hasOwn(graph, scope) ? graph[scope] : {}

        for (const dep of Object.keys(dependencies)) {
          if (dependencies[dep]) {
            add(dep)
          }
        }
      }
    }

    await fs.writeFile(
      new URL('../lib/' + d + '.js', import.meta.url),
      await prettier.format(
        [
          '/**',
          " * @typedef {import('./index.js').Grammar} Grammar",
          ' */',
          '',
          ...list.map(function (d) {
            return 'import ' + scopeToId(d) + ' from "../lang/' + d + '.js"'
          }),
          '',
          '/** @type {ReadonlyArray<Grammar>} */',
          'export const grammars = [',
          ...list.map(function (d) {
            return '  ' + scopeToId(d) + ','
          }),
          ']',
          ''
        ].join('\n'),
        {...prettierConfig, parser: 'babel'}
      )
    )
  })
)

console.log('generated %s indices', indices.length)

// Write grammars.
await Promise.all(
  Object.keys(aliases).map(async function (from) {
    const to = aliases[from]

    await fs.writeFile(
      new URL('../lang/' + from + '.js', import.meta.url),
      await prettier.format(
        [
          '// This is an alias, please use `' + to + '.js` instead.',
          'export {default} from "./' + to + '.js"',
          ''
        ].join('\n'),
        {...prettierConfig, parser: 'babel'}
      )
    )
  })
)

console.log('generated %s aliases', Object.keys(aliases).length)

/**
 * @param {Grammar} d
 *   Grammar to clean.
 * @param {string} path
 *   Path.
 * @returns {Grammar}
 *   Cleaned grammar.
 */
function cleanGrammar(d, path) {
  return cleanPatternFields(clean(d, grammarSchema, path), path)
}

/**
 * @param {Rule} d
 *   Rule to clean.
 * @param {string} path
 *   Path.
 * @returns {Rule}
 *   Cleaned rule.
 */
function cleanRule(d, path) {
  // @ts-expect-error: sometimes used in custom grammars.
  if (d.disabled) return {}

  const cleaned = cleanPatternFields(clean(d, ruleSchema, path), path)

  if ('captures' in cleaned && cleaned.captures) {
    cleaned.captures = cleanMapOfRules(cleaned.captures, path + '.captures')
  }

  if ('beginCaptures' in cleaned && cleaned.beginCaptures) {
    cleaned.beginCaptures = cleanMapOfRules(
      cleaned.beginCaptures,
      path + '.beginCaptures'
    )
  }

  if ('endCaptures' in cleaned && cleaned.endCaptures) {
    cleaned.endCaptures = cleanMapOfRules(
      cleaned.endCaptures,
      path + '.endCaptures'
    )
  }

  if ('whileCaptures' in cleaned && cleaned.whileCaptures) {
    cleaned.whileCaptures = cleanMapOfRules(
      cleaned.whileCaptures,
      path + '.whileCaptures'
    )
  }

  return cleaned
}

/**
 * @param {ReadonlyArray<Rule>} d
 *   List of rules to clean.
 * @param {string} path
 *   Path.
 * @returns {Array<Rule>}
 *   Cleaned list of rules.
 */
function cleanListOfRules(d, path) {
  return d
    .map(function (d, i) {
      return cleanRule(d, path + '[' + i + ']')
    })
    .filter(function (d) {
      return Object.keys(d).length > 0
    })
}

/**
 * @param {Record<string, Rule>} d
 *   Map of rules to clean.
 * @param {string} path
 *   Path.
 * @returns {Record<string, Rule>}
 *   Cleaned map of rules.
 */
function cleanMapOfRules(d, path) {
  /** @type {Record<string, Rule>} */
  const copy = {}

  for (const key of Object.keys(d)) {
    const cleaned = cleanRule(d[key], path + '.' + key)
    if (Object.keys(cleaned).length > 0) {
      copy[key] = cleaned
    }
  }

  return copy
}

/**
 * @template {Grammar | Rule} Thing
 *   Kind.
 * @param {Thing} d
 *   Thing to clean.
 * @param {string} path
 *   Path.
 * @returns {Thing}
 *   Cleaned thing.
 */
function cleanPatternFields(d, path) {
  if ('patterns' in d && d.patterns) {
    d.patterns = cleanListOfRules(d.patterns, path + '.patterns')
  }

  if ('repository' in d && d.repository) {
    d.repository = cleanMapOfRules(d.repository, path + '.repository')
  }

  if ('injections' in d && d.injections) {
    d.injections = cleanMapOfRules(d.injections, path + '.injections')
  }

  return d
}

/**
 * @template {Object} Thing
 *   Kind.
 * @param {Thing} value
 *   Value to clean.
 * @param {Object} schema
 *   Schema to clean against.
 * @param {ReadonlyArray<string>} [schema.need]
 *   Fields to require.
 * @param {ReadonlyArray<string>} schema.allow
 *   Fields to allow.
 * @param {ReadonlyArray<string>} schema.remove
 *   Fields to remove.
 * @param {string} path
 *   Path.
 * @returns {Thing}
 *   Clone.
 */
function clean(value, schema, path) {
  const {need = [], allow = [], remove = []} = schema
  const keys = Object.keys(value)
    .filter(function (d) {
      return !remove.includes(d)
    })
    .sort()
  const allAllowed = new Set([...allow, ...need])

  for (const d of need) {
    assert(
      keys.includes(d),
      'expected field `' + d + '` in `' + value + '` at `' + path + '`'
    )
  }

  for (const d of keys) {
    assert(
      allAllowed.has(d),
      'unexpected field `' + d + '` in `' + value + '` at `' + path + '`'
    )
  }

  /** @type {Thing} */
  // @ts-expect-error: clone.
  const result = {}

  for (const d of keys) {
    // @ts-expect-error: clone.
    result[d] = value[d]
  }

  return result
}

/**
 * @param {Rule} rule
 *   Rule to analyze.
 * @param {boolean | null | undefined} [local=false]
 *   Whether to include only local references (default: `false`).
 * @returns {{defined: Set<string>, referenced: Set<string>}}
 *   Info about the rule.
 */
function analyze(rule, local) {
  /** @type {Set<string>} */
  const defined = new Set()
  /** @type {Set<string>} */
  const referenced = new Set()

  visit(
    rule,
    /** @returns {undefined} */
    function (rule) {
      if ('repository' in rule && rule.repository) {
        for (const key of Object.keys(rule.repository)) {
          defined.add(key)
        }
      }

      if (
        'include' in rule &&
        rule.include &&
        (!local || rule.include.startsWith('#'))
      ) {
        referenced.add(rule.include)
      }
    }
  )

  return {defined, referenced}
}

/**
 * @param {Rule} rule
 *   Rule to visit.
 * @param {(rule: Rule) => boolean | undefined} callback
 *   Callback called for each rule.
 * @returns {boolean}
 *   Whether to keep the rule.
 */
function visit(rule, callback) {
  const result = callback(rule)

  if (result === false) {
    return result
  }

  if ('captures' in rule && rule.captures) map(rule.captures)
  if ('beginCaptures' in rule && rule.beginCaptures) map(rule.beginCaptures)
  if ('endCaptures' in rule && rule.endCaptures) map(rule.endCaptures)
  if ('whileCaptures' in rule && rule.whileCaptures) map(rule.whileCaptures)
  if ('repository' in rule && rule.repository) map(rule.repository)
  if ('injections' in rule && rule.injections) map(rule.injections)
  if ('patterns' in rule && rule.patterns) set(rule.patterns)

  // Keep.
  return true

  /**
   * @param {Array<Rule>} values
   *   List of rules to visit.
   */
  function set(values) {
    let index = -1
    while (++index < values.length) {
      const result = visit(values[index], callback)
      if (result === false) {
        values.splice(index, 1)
        index--
      }
    }
  }

  /**
   * @param {Record<string, Rule>} values
   *   Map of rules to visit.
   */
  function map(values) {
    /** @type {string} */
    let key

    for (key in values) {
      if (Object.hasOwn(values, key)) {
        const result = visit(values[key], callback)
        if (result === false) {
          delete values[key]
        }
      }
    }
  }
}

/**
 * @param {string} value
 *   Value to convert.
 * @returns {string}
 *   Converted value.
 */
function scopeToId(value) {
  const id = value
    // For `c++`
    .replace(/\+/g, 'p')
    .replace(/[. -_]([a-z\d])/g, function (_, /** @type {string} */ $1) {
      return $1.toUpperCase()
    })
  assert(/^[A-Za-z\d.]+$/.test(id), value)
  return id
}

/**
 * @param {string} d
 *   Name to normalize.
 * @returns {string}
 *   Normalized name.
 */
function normalizeLinguistName(d) {
  // Names are case-insensitive, so we lowercase.
  // For an example, see `SnipMate` which is included as an alias, but using
  // `snipmate` or `SNIPMATE` also highlights.
  //
  // Spaces in names are turned into dashes.
  // For example `DNS zone` can be used as `dns-zone`, not as `dns`, `dns_zone`,
  // or `dnszone`.
  const normal = d.toLowerCase().replace(/ /g, '-')
  assert(/^[-a-z\d.#+'*()/]+$/.test(normal), normal)
  return normal
}

/**
 * @param {string} d
 *   Extension to normalize.
 * @returns {string}
 *   Normalized extension.
 */
function normalizeLinguistExtension(d) {
  // Extensions are case-insensitive (example: for `.OutJob`, `.outjob` also works).
  // They can also contain dots, dashes, plusses, etc.
  const normal = d.toLowerCase()
  assert(/^\.[\w+.-]+$/.test(normal), normal)
  return normal
}
