/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('vscode-textmate').IGrammar} IGrammar
 * @typedef {import('vscode-textmate').IRawGrammar} IRawGrammar
 */

/**
 * @typedef {Record<string, Rule>} Captures
 *   Rule `captures` field.
 *
 * @callback GetOnigurumaUrl
 *   Get a URL to the oniguruma WASM.
 *
 *   > 👉 **Note**: this must currently result in a version 1 URL of
 *   > `onig.wasm` from `vscode-oniguruma`.
 *
 *   > ⚠️ **Danger**: when you use this functionality, your project might break at
 *   > any time (when reinstalling dependencies), except when you make sure that
 *   > the WASM binary you load manually is what our internally used
 *   > `vscode-oniguruma` dependency expects.
 *   > To solve this, you could for example use an npm script called `dependencies`
 *   > (which runs everytime `node_modules` is changed) which copies
 *   > `vscode-oniguruma/release/onig.wasm` to the place you want to host it.
 * @returns {Promise<Readonly<URL>> | Readonly<URL>}
 *   URL object to a WASM binary.
 * @example
 *   ```js
 *   import {common, createStarryNight} from '@wooorm/starry-night'
 *
 *   const starryNight = await createStarryNight(common, {
 *     getOnigurumaUrlFetch() {
 *       return new URL('/onig.wasm', window.location.href);
 *     }
 *   })
 *   ```
 *
 * @typedef Grammar
 *   TextMate grammar with some extra info.
 * @property {Array<string>} [dependencies]
 *   List of scopes that are needed for this grammar to work (optional,
 *   example: `['source.tsx']`).
 * @property {Array<string>} extensions
 *   List of extensions (example: `['.mdx']`).
 * @property {Array<string>} [extensionsWithDot]
 *   List of extensions that only match if used w/ a dot (optional, example:
 *   `['.php']`).
 * @property {Record<string, Rule>} [injections]
 *   TextMate injections (optional).
 * @property {Array<string>} names
 *   List of names (example: `['mdx']`).
 * @property {Array<Rule>} patterns
 *   TextMate patterns.
 * @property {Record<string, Rule>} [repository]
 *   TextMate repository (optional).
 * @property {string} scopeName
 *   Scope (example: `source.mdx`).
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {GetOnigurumaUrl | null | undefined} [getOnigurumaUrlFetch]
 *   Get a URL to the oniguruma WASM, typically used in browsers (optional).
 * @property {GetOnigurumaUrl | null | undefined} [getOnigurumaUrlFs]
 *   Get a URL to the oniguruma WASM, typically used in Node.js (optional).
 *
 * @typedef {RuleDefinition | RuleInclude | RuleName} Rule
 *   TextMate rule.
 *
 * @typedef RuleDefinition
 * @property {boolean} [applyEndPatternLast]
 * @property {string} [begin]
 * @property {Captures} [beginCaptures]
 * @property {Captures} [captures]
 * @property {string} [contentName]
 * @property {string} [end]
 * @property {Captures} [endCaptures]
 * @property {Record<string, Rule>} [injections]
 * @property {string} [match]
 * @property {string} [name]
 * @property {Array<Rule>} [patterns]
 * @property {Record<string, Rule>} [repository]
 * @property {string} [while]
 * @property {Captures} [whileCaptures]
 *
 * @typedef RuleInclude
 * @property {string} [begin]
 * @property {string} [end]
 * @property {string} include
 * @property {string} [match]
 * @property {string} [name]
 *
 * @typedef RuleName
 * @property {never} [begin]
 * @property {never} [include]
 * @property {never} [match]
 * @property {string} name
 */

import vscodeOniguruma from 'vscode-oniguruma'
import vscodeTextmate from 'vscode-textmate'
import {parse} from './parse.js'
import {theme} from './theme.js'
import {getOniguruma} from '#get-oniguruma'

/**
 * Create a `StarryNight` that can highlight things with the given
 * `grammars`.
 * This is async to allow async loading and registering, which is currently
 * only used for WASM.
 *
 * @param {ReadonlyArray<Grammar>} grammars
 *   Grammars to support.
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Promise that resolves to an instance which highlights with the bound
 *   grammars.
 */
export async function createStarryNight(grammars, options) {
  /** @type {Map<string, Readonly<Grammar>>} */
  const registered = new Map()
  /** @type {Map<string, string>} */
  const names = new Map()
  /** @type {Map<string, string>} */
  const extensions = new Map()
  /** @type {Map<string, string>} */
  const extensionsWithDot = new Map()
  let currentRegistry = await createRegistry(grammars, options)

  return {flagToScope, highlight, missingScopes, register, scopes}

  /**
   * Get the grammar scope (such as `text.md`) associated with a grammar name
   * (such as `markdown`) or grammar extension (such as `.mdwn`).
   *
   * This function uses the first word (when splitting on spaces and tabs) that
   * is used after the opening of a fenced code block:
   *
   * ````markdown
   * ```js
   * console.log(1)
   * ```
   * ````
   *
   * To match GitHub, this also accepts entire paths:
   *
   * ````markdown
   * ```path/to/example.js
   * console.log(1)
   * ```
   * ````
   *
   * > **Note**: languages can use the same extensions.
   * > For example, `.h` is reused by many languages.
   * > In those cases, you will get one scope back, but it might not be the
   * > most popular language associated with an extension.
   *
   * @param {string} flag
   *   Grammar name (such as `'markdown'`), grammar extension (such as
   *   `'.mdwn'`), or path ending in extension.
   * @returns {string | undefined}
   *   Grammar scope (such as `'text.md'`).
   * @example
   *   ```js
   *   import {common, createStarryNight} from '@wooorm/starry-night'
   *
   *   const starryNight = await createStarryNight(common)
   *
   *   console.log(starryNight.flagToScope('pandoc')) // `'text.md'`
   *   console.log(starryNight.flagToScope('workbook')) // `'text.md'`
   *   console.log(starryNight.flagToScope('.workbook')) // `'text.md'`
   *   console.log(starryNight.flagToScope('path/to/example.js')) // `'source.js'`
   *   console.log(starryNight.flagToScope('whatever')) // `undefined`
   *   ```
   */
  function flagToScope(flag) {
    if (typeof flag !== 'string') {
      throw new TypeError('Expected `string` for `flag`, got `' + flag + '`')
    }

    const normal = flag
      .toLowerCase()
      .replace(/^[ \t]+/, '')
      .replace(/\/*[ \t]*$/g, '')

    const scopeByName = names.get(normal)

    if (scopeByName) {
      return scopeByName
    }

    const dot = normal.lastIndexOf('.')

    if (dot === -1) {
      return extensions.get('.' + normal)
    }

    const extension = normal.slice(dot)
    return extensions.get(extension) || extensionsWithDot.get(extension)
  }

  /**
   * Highlight programming code.
   *
   * @param {string} value
   *   Code to highlight.
   * @param {string} scope
   *   Registered grammar scope to highlight as (such as `'text.md'`).
   * @returns {Root}
   *   Node representing highlighted code.
   * @example
   *   ```js
   *   import {createStarryNight} from '@wooorm/starry-night'
   *   import sourceCss from '@wooorm/starry-night/source.css'
   *
   *   const starryNight = await createStarryNight([sourceCss])
   *
   *   console.log(starryNight.highlight('em { color: red }', 'source.css'))
   *   ```
   *
   *   Yields:
   *
   *   ```js
   *   {
   *     type: 'root',
   *     children: [
   *       {type: 'element', tagName: 'span', properties: [Object], children: [Array]},
   *       {type: 'text', value: ' { '},
   *       {type: 'element', tagName: 'span', properties: [Object], children: [Array]},
   *       {type: 'text', value: ': '},
   *       {type: 'element', tagName: 'span', properties: [Object], children: [Array]},
   *       {type: 'text', value: ' }'}
   *     ]
   *   }
   *   ```
   */
  function highlight(value, scope) {
    if (typeof value !== 'string') {
      throw new TypeError('Expected `string` for `value`, got `' + value + '`')
    }

    if (typeof scope !== 'string') {
      throw new TypeError('Expected `string` for `scope`, got `' + scope + '`')
    }

    // Use the private API so we don’t need to cache again.
    /** @type {unknown} */
    // @ts-expect-error: untyped internals of `vscode-textmate`.
    // type-coverage:ignore-next-line
    const map = currentRegistry._syncRegistry._grammars
    /** @type {IGrammar} */
    // @ts-expect-error: untyped internals of `vscode-textmate`.
    // type-coverage:ignore-next-line
    const grammar = map.get(scope)

    if (!grammar) {
      throw new Error('Expected grammar `' + scope + '` to be registered')
    }

    return parse(value, grammar, currentRegistry.getColorMap())
  }

  /**
   * List scopes that are needed by the registered grammars but that are
   * missing.
   *
   * To illustrate, the `text.xml.svg` grammar needs the `text.xml` grammar.
   * When you register `text.xml.svg` without `text.xml`, it will be listed
   * here.
   *
   * @returns {ReadonlyArray<string>}
   *   List of grammar scopes, such as `'text.md'`.
   * @example
   *   ```js
   *   import {createStarryNight} from '@wooorm/starry-night'
   *   import textXml from '@wooorm/starry-night/text.xml'
   *   import textXmlSvg from '@wooorm/starry-night/text.xml.svg'
   *
   *   const svg = await createStarryNight([textXmlSvg])
   *   console.log(svg.missingScopes()) //=> ['text.xml']
   *
   *   const svgAndXml = await createStarryNight([textXmlSvg, textXml])
   *   console.log(svgAndXml.missingScopes()) //=> []
   *   ```
   */
  function missingScopes() {
    /** @type {Set<string>} */
    const available = new Set()
    /** @type {Set<string>} */
    const needed = new Set()

    for (const [scopeName, grammar] of registered) {
      available.add(scopeName)
      if (grammar.dependencies) {
        for (const dep of grammar.dependencies) {
          needed.add(dep)
        }
      }
    }

    return [...needed]
      .filter(function (d) {
        return !available.has(d)
      })
      .sort()
  }

  /**
   * Add more grammars.
   *
   * @param {ReadonlyArray<Readonly<Grammar>>} grammars
   *   Grammars to support.
   * @returns {Promise<undefined>}
   *   Promise resolving to nothing.
   * @example
   *   ````js
   *   import {createStarryNight} from '@wooorm/starry-night'
   *   import sourceCss from '@wooorm/starry-night/source.css'
   *   import textMd from '@wooorm/starry-night/text.md'
   *   import {toHtml} from 'hast-util-to-html'
   *
   *   const markdown = '```css\nem { color: red }\n```'
   *
   *   const starryNight = await createStarryNight([textMd])
   *
   *   console.log(toHtml(starryNight.highlight(markdown, 'text.md')))
   *
   *   await starryNight.register([sourceCss])
   *
   *   console.log(toHtml(starryNight.highlight(markdown, 'text.md')))
   *   ````
   *
   *   Yields:
   *
   *   ````html
   *   <span class="pl-s">```</span><span class="pl-en">css</span>
   *   <span class="pl-c1">em { color: red }</span>
   *   <span class="pl-s">```</span>
   *   ````
   *
   *   ````html
   *   <span class="pl-s">```</span><span class="pl-en">css</span>
   *   <span class="pl-ent">em</span> { <span class="pl-c1">color</span>: <span class="pl-c1">red</span> }
   *   <span class="pl-s">```</span>
   *   ````
   */
  async function register(grammars) {
    currentRegistry = await createRegistry(grammars)
  }

  /**
   * List all registered scopes.
   *
   * @returns {ReadonlyArray<string>}
   *   List of grammar scopes, such as `'text.md'`.
   * @example
   *   ```js
   *   import {common, createStarryNight} from '@wooorm/starry-night'
   *
   *   const starryNight = await createStarryNight(common)
   *
   *   console.log(starryNight.scopes())
   *   ```
   *
   *   Yields:
   *
   *   ```js
   *   [
   *     'source.c',
   *     'source.c++',
   *     // …
   *     'text.xml',
   *     'text.xml.svg'
   *   ]
   *   ```
   */
  function scopes() {
    return [...registered.keys()].sort()
  }

  /**
   * @param {ReadonlyArray<Readonly<Grammar>>} grammars
   *   Grammars.
   * @param {Readonly<Options> | null | undefined} [options]
   *   Configuration (optional).
   * @returns
   *   Registry.
   */
  async function createRegistry(grammars, options) {
    for (const grammar of grammars) {
      const scope = grammar.scopeName
      for (const d of grammar.extensions) extensions.set(d, scope)
      if (grammar.extensionsWithDot)
        for (const d of grammar.extensionsWithDot)
          extensionsWithDot.set(d, scope)
      for (const d of grammar.names) names.set(d, scope)
      registered.set(scope, grammar)
    }

    const registry = new vscodeTextmate.Registry({
      async loadGrammar(scopeName) {
        // Cast because `vscode-textmate` has much stricter types that needed by
        // textmate, or by what they actually support.
        // Given that we can’t fix the grammars provided by the world here, and
        // given that `vscode-textmate` is crying without a reason, we tell it to
        // shut up instead.
        const grammar = /** @type {IRawGrammar | undefined} */ (
          registered.get(scopeName)
        )
        return grammar
      },
      onigLib: createOniguruma(options)
    })

    registry.setTheme(theme)

    await Promise.all(
      [...registered.keys()].map(function (d) {
        return registry.loadGrammar(d)
      })
    )

    return registry
  }
}

/**
 * Small function needed for oniguruma to work.
 *
 * Idea: as this seems to be a singleton, would it help if we call it once and
 * keep the promise?
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   `vscode-oniguruma`.
 */
async function createOniguruma(options) {
  const wasmBin = await getOniguruma(options || undefined)
  await vscodeOniguruma.loadWASM(wasmBin)
  return vscodeOniguruma
}
