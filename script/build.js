/**
 * @typedef {import('../lib/index.js').Grammar} Grammar
 * @typedef {import('../lib/index.js').Rule} Rule
 */

import process from 'node:process'
import assert from 'node:assert'
import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import prettier from 'prettier'
import jsonStableStringify from 'json-stable-stringify'
import {common} from './common.js'

const own = {}.hasOwnProperty
const gemsBase = new URL('../gems/gems/', import.meta.url)
const languagesBase = new URL('../lang/', import.meta.url)

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
const linguistBasename = installed.find((d) => d.startsWith(prefix))

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
/** @type {Record<string, {aliases?: Array<string>, extensions?: Array<string>, tm_scope: string}>} */
// @ts-expect-error: TS is wrong, `JSON.parse` accepts buffers.
const languages = JSON.parse(await fs.readFile(languagesUrl))
/** @type {string} */
let name

/**
 * @typedef Info
 * @property {Array<string>} names
 * @property {Array<string>} extensions
 */

const ignore = new Set(
  // This one actually turns into two classes on GH, which must be a bug.
  ['source.pov-ray sdl']
)
/** @type {Map<string, Info>} */
const linguistInfo = new Map()

for (name in languages) {
  if (own.call(languages, name)) {
    const rawInfo = languages[name]
    const scope = rawInfo.tm_scope

    assert(ignore.has(scope) || /^[-a-z\d+_.]+$/.test(scope), scope)

    if (scope === 'none') {
      continue
    }

    let names = [name, ...(rawInfo.aliases || [])].map((d) => {
      const normal = d.toLowerCase().replace(/ /g, '-')
      assert(/^[-a-z\d.#+'*()/]+$/.test(normal), normal)
      return normal
    })

    let extensions = (rawInfo.extensions || []).map((d) => {
      const normal = d.toLowerCase().replace(/ /g, '-')
      assert(
        normal.charAt(0) === '.',
        'extension `' + normal + '` should start w/ a `.`'
      )
      // Same as names but w/o these values: `#'*()/`.
      assert(/^[-a-z\d.+_]+$/.test(normal), normal)
      return normal
    })

    const info = linguistInfo.get(scope)

    if (info) {
      names = [...info.names, ...names].sort()
      extensions = [...info.extensions, ...extensions].sort()
    }

    linguistInfo.set(scope, {names, extensions})
  }
}

const grammarSchema = {
  need: ['patterns', 'scopeName'],
  allow: ['injections', 'repository'],
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
    'while'
  ],
  remove: ['disabled']
}

const grammarsBase = new URL('grammars/', gemBase)
const grammarBasenames = await fs.readdir(grammarsBase)
const scopes = grammarBasenames
  .flatMap((d) => {
    const ext = path.extname(d)
    return ext === '.json' ? path.basename(d, ext) : []
  })
  .filter((d) => linguistInfo.has(d))

// Write grammars.
await Promise.all(
  scopes.map(async (scope) => {
    const inputUrl = new URL(scope + '.json', grammarsBase)
    const outputUrl = new URL(scope + '.js', languagesBase)

    /** @type {Grammar} */
    // @ts-expect-error: TS is wrong, `JSON.parse` accepts buffers.
    const grammar = cleanGrammar(JSON.parse(await fs.readFile(inputUrl)), scope)
    assert(grammar.scopeName === scope, 'expected scopes to match')

    await fs.writeFile(
      outputUrl,
      prettier.format(
        [
          "/** @type {import('../lib/index.js').Grammar} */",
          'const grammar = ' +
            jsonStableStringify({
              ...grammar,
              ...linguistInfo.get(scope)
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

// Write index files.
await Promise.all(
  ['common', 'all'].map(async (d) => {
    const list = (d === 'common' ? common : [...linguistInfo.keys()]).sort()

    await fs.writeFile(
      new URL('../lib/' + d + '.js', import.meta.url),
      prettier.format(
        [
          '/**',
          " * @typedef {import('./index.js').Grammar} Grammar",
          ' */',
          '',
          ...list.map(
            (d) => 'import ' + scopeToId(d) + ' from "../lang/' + d + '.js"'
          ),
          '',
          '/** @type {Array<Grammar>} */',
          'export const grammars = [',
          ...list.map((d) => '  ' + scopeToId(d) + ','),
          ']',
          ''
        ].join('\n'),
        {...prettierConfig, parser: 'babel'}
      )
    )
  })
)

console.log('generated indices')

/**
 * @param {Grammar} d
 * @param {string} path
 */
function cleanGrammar(d, path) {
  return cleanPatternFields(clean(d, grammarSchema, path), path)
}

/**
 * @param {Rule} d
 * @param {string} path
 * @returns {Rule}
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

  return cleaned
}

/**
 * @param {Array<Rule>} d
 * @param {string} path
 */
function cleanListOfRules(d, path) {
  return d
    .map((d, i) => cleanRule(d, path + '[' + i + ']'))
    .filter((d) => Object.keys(d).length > 0)
}

/**
 * @param {Record<string, Rule>} d
 * @param {string} path
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
 * @template {Grammar|Rule} Thing
 * @param {Thing} d
 * @param {string} path
 * @returns {Thing}
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
 * @template {Object} [Thing=any]
 * @param {Thing} value
 * @param {Object} schema
 * @param {Array<string>} [schema.need]
 * @param {Array<string>} schema.allow
 * @param {Array<string>} schema.remove
 * @param {string} path
 * @returns {Thing}
 */
function clean(value, schema, path) {
  const {need = [], allow = [], remove = []} = schema
  const keys = Object.keys(value)
    .filter((d) => !remove.includes(d))
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
  // @ts-expect-error: TypeScript is as it frequently is, wrong!
  const result = {}

  for (const d of keys) {
    // @ts-expect-error: It’s all fine!
    result[d] = value[d]
  }

  return result
}

/**
 * @param {string} value
 * @returns {string}
 */
function scopeToId(value) {
  return value
    .replace(/\+/g, 'p')
    .replace(/[. -_]([a-z\d])/g, (_, /** @type {string} */ $1) =>
      $1.toUpperCase()
    )
}
