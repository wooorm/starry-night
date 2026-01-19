// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/LucianCumpata/K-VSCode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['kframework'],
  patterns: [
    {begin: '/\\*', end: '\\*/', name: 'comment.block.k'},
    {begin: '//', end: '$\\n?', name: 'comment.line.k'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.k',
      patterns: [
        {
          begin: '\\\\\\(',
          captures: {0: {name: 'keyword.operator.k'}},
          end: '\\)',
          name: 'string-interpolation',
          patterns: [{match: '\\+', name: 'keyword.operator.k'}]
        }
      ]
    },
    {
      match: '\\b(syntax(\\s)+([a-z]|[a-z]\\S+|[0-9]|[0-9]\\S+))\\b',
      name: 'error-token'
    },
    {
      match: '(!\\b[A-Z]+(\\w)*\\b)|(\\$\\b[A-Z]+(\\w)*\\b)',
      name: 'support.type.property-name.k'
    },
    {match: 'HOLE', name: 'support.type.property-name.k'},
    {
      match:
        '\\b(strict|avoid|prefer|bracket|non-assoc|seqstrict|left|right|macro|token|notInRules|autoReject|structural|latex|binder)\\b',
      name: 'string.regexp.k'
    },
    {
      match:
        '\\b(syntax|rule|Id|Int|Bool|String|configuration|imports|Token|Lexer|Float|requires|Kresult|context)\\b',
      name: 'keyword.reserved.k'
    },
    {match: '\\b(module|endmodule)\\b', name: 'keyword.module.k'},
    {match: '(-|\\.)?\\b[0-9]+(\\.[0-9]+)?\\b', name: 'constant.numeric.k'},
    {
      begin: '(<)\\s*([\\w\\d\\-\\_]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.k'},
        2: {name: 'entity.name.tag.k'}
      },
      end: '\\s*(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.k'}},
      patterns: [
        {
          captures: {
            1: {name: 'constant.regexp.emphasis.strong.tags.k'},
            2: {name: 'string.quoted.double.k'}
          },
          match: '([\\w\\d\\-\\_]+)\\s*\\=\\s*(\\".+?\\")'
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.tag.k'},
        2: {name: 'entity.name.tag.k'},
        3: {name: 'punctuation.definition.tag.k'}
      },
      match: '(<)\\s*\\/([\\w\\d\\-\\_]+?)\\s*(>)'
    },
    {match: '\\+|-|/|\\*|%|=|\\^|~|\\||\\?|<|>|&', name: 'keyword.operator.k'},
    {
      match: '(?<=\\.)\\w+(?=\\.|\\s|,|;|\\)|\\?|\\+|\\-|=)',
      name: 'support.constant.k'
    }
  ],
  scopeName: 'text.k'
}

export default grammar
