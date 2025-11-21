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
