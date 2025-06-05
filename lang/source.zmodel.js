// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zenstackhq/zenstack>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zmodel'],
  names: ['zmodel'],
  patterns: [
    {include: '#comments'},
    {
      match:
        '\\b(Any|BigInt|Boolean|Bytes|ContextType|DateTime|Decimal|FieldReference|Float|Int|Json|Null|Object|String|TransitiveFieldReference|Unsupported|abstract|attribute|datasource|enum|extends|false|function|generator|import|in|model|null|plugin|this|true|type|view)\\b',
      name: 'keyword.control.zmodel'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.zmodel',
      patterns: [{include: '#string-character-escape'}]
    },
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.zmodel',
      patterns: [{include: '#string-character-escape'}]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.zmodel'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.zmodel'}},
          name: 'comment.block.zmodel'
        },
        {
          begin: '//',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.zmodel'}
          },
          end: '(?=$)',
          name: 'comment.line.zmodel'
        }
      ]
    },
    'string-character-escape': {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.zmodel'
    }
  },
  scopeName: 'source.zmodel'
}

export default grammar
