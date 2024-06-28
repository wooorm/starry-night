// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ox', '.oxh', '.oxo'],
  names: ['ox'],
  patterns: [
    {include: '#comments'},
    {
      match:
        '\\b(break|case|continue|default|delete|do|else|for|new|parallel for|foreach|goto|if|_Pragma|return|switch|switch_single|while)\\b',
      name: 'keyword.control.ox'
    },
    {
      match:
        '\\b(array|char|class|const|decl|double|enum|extern|int|matrix|static|serial|string|struct)\\b',
      name: 'storage.type.ox'
    },
    {
      match: '^\\s*.\\s*(.NaN|.Inf|TRUE|FALSE)\\b',
      name: 'constant.language.ox'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.ox'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ox'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ox'}},
      name: 'string.quoted.double.ox',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: '^\\s*#\\s*(include|import|pragma)\\b\\s+',
      captures: {1: {name: 'keyword.control.import.include.ox'}},
      end: '(?=(?://|/\\*))|$'
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.ox'}},
          end: '\\*/',
          name: 'comment.block.ox'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ox'}},
          end: '$\\n?',
          name: 'comment.line.double-slash.ox',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.ox'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.ox'
}

export default grammar
