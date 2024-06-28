// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.env'],
  injections: {
    'source.dotenv meta.field.rhs string - string.quoted.single': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.section.embedded.begin.dotenv'},
            2: {name: 'constant.language.environment.variable.dotenv'},
            3: {name: 'punctuation.section.embedded.end.dotenv'}
          },
          match: '(?<!\\\\)(\\${)(.*?)(?<!\\\\)(})',
          name: 'source.shell.embedded.dotenv'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.dotenv'}},
          match: '(?<!\\\\)(\\$)[a-zA-Z0-9_]+',
          name: 'entity.name.variable.dotenv'
        },
        {
          captures: {
            1: {name: 'punctuation.section.embedded.begin.dotenv'},
            2: {patterns: [{include: 'source.shell'}]},
            3: {name: 'punctuation.section.embedded.end.dotenv'}
          },
          match: '(?<!\\\\)(\\$\\()(.*?)(?<!\\\\)(\\))',
          name: 'source.shell.embedded.dotenv'
        }
      ]
    },
    'source.dotenv meta.field.rhs string.unquoted': {
      patterns: [
        {
          begin: '(?<=\\S)[ \\t]+(#)',
          captures: {1: {name: 'punctuation.definition.comment.dotenv'}},
          end: '(?=$)',
          name: 'comment.line.number-sign.inline.dotenv'
        }
      ]
    }
  },
  names: ['dotenv'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '^([ \\t]*)(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.comment.dotenv'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '\\G(#)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.dotenv'}},
          end: '$',
          name: 'comment.line.number-sign.dotenv'
        }
      ]
    },
    field: {
      begin: '^(([ \\t]*)(?:(export)\\s+)?([-\\w.]+)\\s*)(=|:)',
      beginCaptures: {
        1: {name: 'meta.field.lhs.dotenv'},
        2: {name: 'punctuation.whitespace.leading.field.dotenv'},
        3: {name: 'storage.modifier.export.dotenv'},
        4: {name: 'variable.assignment.environment.dotenv'},
        5: {name: 'keyword.operator.assignment.key-value.dotenv'}
      },
      contentName: 'meta.field.rhs.dotenv',
      end: '(?!\\G)',
      name: 'meta.field.dotenv',
      patterns: [
        {
          match: '\\G[ \\t]+$',
          name: 'punctuation.whitespace.trailing.empty-value.dotenv'
        },
        {
          begin: '\\G[ \\t]*(?=("|\')(?:[^\\\\"\']|(?!\\1)["\']|\\\\.)*+\\1$)',
          end: '(?!\\G)',
          patterns: [{include: '#strings'}]
        },
        {
          begin: '\\G[ \\t]*(?!"|\')(?=\\S)',
          contentName: 'string.unquoted.field.dotenv',
          end: '([ \\t]*)$',
          endCaptures: {1: {name: 'punctuation.whitespace.trailing.dotenv'}}
        }
      ]
    },
    main: {patterns: [{include: '#comment'}, {include: '#field'}]},
    strings: {
      patterns: [
        {
          begin: '\\G"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.dotenv'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.env.dotenv'}},
          name: 'string.quoted.double.dotenv',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.dotenv'}
              },
              match: '(\\\\)n',
              name: 'constant.character.escape.newline.dotenv'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.dotenv'}
              },
              match: '(\\\\)"',
              name: 'constant.character.escape.quote.dotenv'
            }
          ]
        },
        {
          begin: "\\G'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.dotenv'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.env.dotenv'}},
          name: 'string.quoted.single.dotenv',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.dotenv'}
              },
              match: "(\\\\)'",
              name: 'constant.character.escape.quote.dotenv'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.dotenv'
}

export default grammar
