// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Timmmm/sail_vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sail'],
  names: ['sail'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#operators'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#typevariables'},
    {include: '#variables'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '(?:^)(?>\\s*)(\\/\\/[!\\/]+)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.documentation.sail'}
          },
          end: '(?<=\\n)(?<!\\\\\\n)',
          name: 'comment.line.double-slash.documentation.sail',
          patterns: [{include: '#line_continuation_character'}]
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.comment.begin.documentation.sail'
            },
            3: {name: 'punctuation.definition.comment.end.documentation.sail'}
          },
          match: '(\\/\\*[!*]+(?=\\s))(.+)([!*]*\\*\\/)',
          name: 'comment.block.documentation.sail'
        },
        {
          begin: '((?>\\s*)\\/\\*[!*]+(?:(?:\\n|$)|(?=\\s)))',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.begin.documentation.sail'}
          },
          end: '([!*]*\\*\\/)',
          endCaptures: {
            1: {name: 'punctuation.definition.comment.end.documentation.sail'}
          },
          name: 'comment.block.documentation.sail'
        },
        {
          captures: {1: {name: 'meta.toc-list.banner.block.sail'}},
          match: '^\\/\\* =(\\s*.*?)\\s*= \\*\\/$\\n?',
          name: 'comment.block.banner.sail'
        },
        {
          begin: '(\\/\\*)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.begin.sail'}
          },
          end: '(\\*\\/)',
          endCaptures: {1: {name: 'punctuation.definition.comment.end.sail'}},
          name: 'comment.block.sail'
        },
        {
          captures: {1: {name: 'meta.toc-list.banner.line.sail'}},
          match: '^\\/\\/ =(\\s*.*?)\\s*=$\\n?',
          name: 'comment.line.banner.sail'
        },
        {
          begin: '((?:^[ \\t]+)?)(?=\\/\\/)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.sail'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '(\\/\\/)',
              beginCaptures: {1: {name: 'punctuation.definition.comment.sail'}},
              end: '(?=\\n)',
              name: 'comment.line.double-slash.sail',
              patterns: [{include: '#line_continuation_character'}]
            }
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(if|then|while|for|foreach|return|match|else)\\b',
          name: 'keyword.control.sail'
        },
        {match: '\\b(atom|int)\\b', name: 'keyword.type.sail'},
        {
          match:
            '\\b(type|val|var|let|in|function|scattered|enum|union|clause|default|order|dec|register|vector|bitfield)\\b',
          name: 'keyword.other.sail'
        },
        {match: '\\b(forall)\\b', name: 'keyword.other.sail'},
        {match: '\\b(effect)\\b', name: 'keyword.other.sail'},
        {match: '\\b(infix|overload|operator)\\b', name: 'keyword.other.sail'},
        {match: '\\b(\\$include)\\b', name: 'keyword.other.sail'},
        {
          match: '(=>|>=|<=|=|->|-|:|,|\\+|\\*|\\.|@)',
          name: 'keyword.other.sail'
        },
        {match: '\\b_\\b', name: 'keyword.other.sail'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.paren.open'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.paren.close'}},
          patterns: [{include: '$self'}]
        },
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.curly.open'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.curly.close'}},
          patterns: [{include: '$self'}]
        },
        {
          begin: '^\\s*((\\$)\\s*(include|import))\\b\\s*',
          beginCaptures: {
            1: {name: 'keyword.control.directive.$3.sail'},
            2: {name: 'punctuation.definition.directive.sail'}
          },
          end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
          name: 'meta.preprocessor.include.sail',
          patterns: [
            {include: '#line_continuation_character'},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.sail'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.sail'}
              },
              name: 'string.quoted.double.include.sail'
            },
            {
              begin: '<',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.sail'}
              },
              end: '>',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.sail'}
              },
              name: 'string.quoted.other.lt-gt.include.sail'
            }
          ]
        },
        {include: '#comments'}
      ]
    },
    line_continuation_character: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.escape.line-continuation.c'}
          },
          match: '(\\\\)\\n'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(0(b|B)[01]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
          name: 'constant.numeric.sail'
        }
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.sail',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.sail'}]
    },
    typevariables: {
      patterns: [
        {match: "'([A-Za-z][A-Za-z_0-9]*)\\b", name: 'variable.parameter'}
      ]
    },
    variables: {
      patterns: [
        {match: '\\b([A-Za-z][A-Za-z_0-9]*)\\b', name: 'variable.other'}
      ]
    }
  },
  scopeName: 'source.sail'
}

export default grammar
