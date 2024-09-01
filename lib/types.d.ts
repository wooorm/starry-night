/**
 * Get a URL to the oniguruma WASM.
 *
 * > **Note**: this must currently result in a version 2 URL of
 * > `onig.wasm` from `vscode-oniguruma`.
 *
 * > **Danger**: when you use this functionality, your project might break at
 * > any time (when reinstalling dependencies), except when you make sure that
 * > the WASM binary you load manually is what our internally used
 * > `vscode-oniguruma` dependency expects.
 * > To solve this, you could for example use an npm script called `dependencies`
 * > (which runs everytime `node_modules` is changed) which copies
 * > `vscode-oniguruma/release/onig.wasm` to the place you want to host it.
 *
 * @returns
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
 */
export type GetOnigurumaUrl = () => Promise<Readonly<URL>> | Readonly<URL>

/**
 * TextMate grammar with some extra info.
 */
export interface Grammar {
  /**
   * List of scopes that are needed for this grammar to work (optional,
   * example: `['source.tsx']`).
   */
  dependencies?: Array<string>
  /**
   *   List of extensions (example: `['.mdx']`).
   */
  extensions: Array<string>
  /**
   * List of extensions that only match if used w/ a dot (optional, example:
   * `['.php']`).
   */
  extensionsWithDot?: Array<string>
  /**
   * TextMate injections (optional).
   */
  injections?: Record<string, Rule>
  /**
   *   List of names (example: `['mdx']`).
   */
  names: Array<string>
  /**
   *   TextMate patterns.
   */
  patterns: Array<Rule>
  /**
   * TextMate repository (optional).
   */
  repository?: Record<string, Rule>
  /**
   *   Scope (example: `source.mdx`).
   */
  scopeName: string
}

/**
 * Configuration (optional).
 */
export interface Options {
  /**
   * Get a URL to the oniguruma WASM, typically used in browsers (optional).
   */
  getOnigurumaUrlFetch?: GetOnigurumaUrl | null | undefined

  /**
   * Get a URL to the oniguruma WASM, typically used in Node.js (optional).
   */
  getOnigurumaUrlFs?: GetOnigurumaUrl | null | undefined
}

/**
 * TextMate rule.
 */
export type Rule = RuleDefinition | RuleInclude | RuleName

export interface RuleDefinition {
  applyEndPatternLast?: boolean
  begin?: string
  beginCaptures?: Record<string, Rule>
  captures?: Record<string, Rule>
  contentName?: string
  end?: string
  endCaptures?: Record<string, Rule>
  injections?: Record<string, Rule>
  match?: string
  name?: string
  patterns?: Array<Rule>
  repository?: Record<string, Rule>
  while?: string
  whileCaptures?: Record<string, Rule>
}

export interface RuleInclude {
  begin?: string
  end?: string
  include: string
  match?: string
  name?: string
}

export interface RuleName {
  begin?: never
  include?: never
  match?: never
  name: string
}
