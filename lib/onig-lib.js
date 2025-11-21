/**
 * @import {IOnigMatch, OnigScanner, OnigString} from 'vscode-textmate'
 */

import {toRegExp} from 'oniguruma-to-es'

/** @type {boolean} */
const forgiving = true

const MAX = 2 ** 32 - 1

/**
 * Create an oniguruma scanner compatible with `vscode-textmate`.
 *
 * This is based on https://github.com/shikijs/shiki/blob/main/packages/engine-javascript/src/scanner.ts
 *
 * @param {Array<string>} sources
 *   The regular expressions to compile.
 * @returns {OnigScanner}
 *   The oniguruma scanner.
 */
export function createOnigScanner(sources) {
  /** @type {Map<string, RegExp | Error>} */
  const cache = new Map()
  const regexps = sources.map((pattern) => {
    if (typeof pattern !== 'string') {
      return pattern
    }

    // Cache
    const cached = cache.get(pattern)
    if (cached) {
      if (cached instanceof RegExp) {
        return cached
      }

      if (forgiving) {
        return null
      }

      throw cached
    }

    try {
      const regex = toRegExp(pattern, {
        global: true,
        hasIndices: true,
        // This has no benefit for the standard JS engine, but it avoids a perf penalty for
        // precompiled grammars when constructing extremely long patterns that aren't always used
        lazyCompileLength: 3000,
        rules: {
          // Needed since TextMate grammars merge backrefs across patterns
          allowOrphanBackrefs: true,
          // Improves search performance for generated regexes
          asciiWordBoundaries: true,
          // Follow `vscode-oniguruma` which enables this Oniguruma option by default
          captureGroup: true,
          // Oniguruma uses depth limit `20`; lowered here to keep regexes shorter and maybe
          // sometimes faster, but can be increased if issues reported due to low limit
          recursionLimit: 5,
          // Oniguruma option for `^`->`\A`, `$`->`\Z`; improves search performance without any
          // change in meaning since TM grammars search line by line
          singleline: true
        }
      })
      cache.set(pattern, regex)
      return regex
    } catch (error_) {
      const error =
        error_ instanceof Error
          ? error_
          : new Error('Unexpected error', {cause: error_})
      cache.set(pattern, error)
      if (forgiving) {
        return null
      }

      throw error
    }
  })

  return {
    findNextMatchSync(onigString, startPosition) {
      const string =
        typeof onigString === 'string' ? onigString : onigString.content
      /** @type {Array<[index: number, match: RegExpExecArray]>} */
      const pending = []

      for (const [index, regexp] of regexps.entries()) {
        if (!regexp) {
          continue
        }

        try {
          regexp.lastIndex = startPosition
          const match = regexp.exec(string)

          if (!match) {
            continue
          }

          // If the match is at the start position, return it immediately
          if (match.index === startPosition) {
            return toResult(index, match)
          }

          // Otherwise, store it for later
          pending.push([index, match])
        } catch (error) {
          if (!forgiving) {
            throw error
          }
        }
      }

      // Find the closest match to the start position
      if (pending.length > 0) {
        const minIndex = Math.min(...pending.map((match) => match[1].index))
        for (const [index, match] of pending) {
          if (match.index === minIndex) {
            return toResult(index, match)
          }
        }
      }

      return null
    },
    dispose: noop
  }
}

/**
 * Create an oniguruma string object compatible with `vscode-textmate`.
 *
 * @param {string} content
 *   The string content to wrap.
 * @returns {OnigString}
 *   The oniguruma string object.
 */
export function createOnigString(content) {
  return {
    content,
    dispose: noop
  }
}

/**
 * Do nothing
 *
 * @returns {undefined}
 */
function noop() {}

/**
 * Convert a RegExp match to an oniguruma match.
 *
 * @param {number} index
 *   The index of the match.
 * @param {RegExpExecArray} match
 *   The actual match
 * @returns {IOnigMatch}
 *   The oniguruma match.
 */
function toResult(index, match) {
  return {
    index,
    captureIndices:
      match.indices?.map((indice) => {
        if (indice === undefined) {
          return {
            start: MAX,
            end: MAX,
            length: 0
          }
        }

        return {
          start: indice[0],
          end: indice[1],
          length: indice[1] - indice[0]
        }
      }) || []
  }
}
