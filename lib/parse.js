/**
 * @import {Element, Root} from 'hast'
 * @import {IGrammar, StateStack} from 'vscode-textmate'
 */

import {classes, grandparents, transparent} from './theme.js'

// Source: <https://github.com/microsoft/vscode-textmate/blob/9157c7f/src/metadata.ts#L33-L35>
//   Also: <https://github.com/microsoft/vscode/blob/8ca37ee/src/vs/editor/common/encodedTokenAttributes.ts#L71>
const FONT_STYLE_MASK = 0b0000_0000_0000_0000_0111_1000_0000_0000
const FOREGROUND_MASK = 0b0000_0000_1111_1111_1000_0000_0000_0000
const BACKGROUND_MASK = 0b1111_1111_0000_0000_0000_0000_0000_0000

// Source: <https://github.com/microsoft/vscode-textmate/blob/9157c7f/src/metadata.ts#L37-L42>
//   Also: <https://github.com/microsoft/vscode/blob/8ca37ee/src/vs/editor/common/encodedTokenAttributes.ts#L92-L94>
const FONT_STYLE_OFFSET = 11
const FOREGROUND_OFFSET = 15
const BACKGROUND_OFFSET = 24

/**
 * @param {string} value
 *   Code to highlight.
 * @param {Readonly<IGrammar>} grammar
 *   Grammar instance to use.
 * @param {ReadonlyArray<string>} colors
 *   Colors that are in the theme.
 * @returns {Root}
 *   A hast root that includes basic `<span>`s and text nodes.
 */
export function parse(value, grammar, colors) {
  /** @type {Root} */
  const tree = {type: 'root', children: []}
  const search = /\r?\n|\r/g
  /** @type {StateStack | null} */
  let stack = null
  let start = 0

  while (start < value.length) {
    const match = search.exec(value)
    const end = match ? match.index : value.length

    // > 👉 **Important**: empty lines have to be tokenized, as some patterns
    // > look for them.
    const {ruleStack, tokens} = grammar.tokenizeLine2(
      value.slice(start, end),
      stack
    )
    let index = 0

    while (index < tokens.length) {
      const tokenStart = start + tokens[index++]
      const metadata = tokens[index++]
      const tokenEnd = index < tokens.length ? start + tokens[index] : end
      // Source: <https://github.com/microsoft/vscode-textmate/blob/9157c7f/src/metadata.ts#L71-L93>
      const fg = (metadata & FOREGROUND_MASK) >>> FOREGROUND_OFFSET
      const bg = (metadata & BACKGROUND_MASK) >>> BACKGROUND_OFFSET
      const fs = (metadata & FONT_STYLE_MASK) >>> FONT_STYLE_OFFSET

      /** @type {Element | Root} */
      let scope = tree
      scope = delveIfClassName(scope, fontStyleToClass(fs))
      scope = delveIfClassName(scope, colorToClass(colors[bg]))
      scope = delveIfClassName(scope, colorToClass(colors[fg]))
      appendText(scope, value.slice(tokenStart, tokenEnd))
    }

    stack = ruleStack

    start = end

    if (match) {
      appendText(tree, match[0])
      start += match[0].length
    }
  }

  return tree
}

/**
 * @param {Element | Root} scope
 *   Node to work in.
 * @param {string | undefined} className
 *   Class to add.
 * @returns {Element | Root}
 *   The new element, if with `className`, or the given `scope`.
 */
function delveIfClassName(scope, className) {
  if (!className) return scope

  let tail = scope.children[scope.children.length - 1]

  if (
    !tail ||
    tail.type !== 'element' ||
    !tail.properties ||
    !Array.isArray(tail.properties.className) ||
    !tail.properties.className.includes(className)
  ) {
    tail = {
      type: 'element',
      tagName: 'span',
      properties: {className: [className]},
      children: []
    }
    scope.children.push(tail)
  }

  return tail
}

/**
 * @param {Element | Root} scope
 *   Node to work in.
 * @param {string} value
 *   Text to add.
 * @returns {undefined}
 *   Nothing.
 */
function appendText(scope, value) {
  let tail = scope.children[scope.children.length - 1]

  if (!tail || tail.type !== 'text') {
    tail = {type: 'text', value: ''}
    scope.children.push(tail)
  }

  tail.value += value
}

/**
 * Note: there’s only one grandparent.
 * We could encode more grandparents in `fontStyle` if needed.
 *
 * @param {number} fontStyle
 *   Font style to convert..
 * @returns {string | undefined}
 *   Class name.
 */
function fontStyleToClass(fontStyle) {
  return fontStyle ? grandparents[0] : undefined
}

/**
 * @param {string} color
 *   Color to convert.
 * @returns {string | undefined}
 *   Class name.
 */
function colorToClass(color) {
  if (color === transparent) return undefined
  return classes[Number.parseInt(color.slice(1), 10)]
}
