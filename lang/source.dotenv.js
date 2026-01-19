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
    }
  },
  names: ['dotenv'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.dotenv'}},
      end: '$',
      name: 'comment.line.number-sign.dotenv'
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
          begin: '\\G[ \\t]*(?=["\'`])',
          end: '(?!\\G)',
          patterns: [{include: '#strings'}]
        },
        {
          begin: '\\G[ \\t]*(?!"|\')(?=[^#\\s])',
          contentName: 'string.unquoted.field.dotenv',
          end: '([ \\t]*)(?=$|#)',
          endCaptures: {1: {name: 'punctuation.whitespace.trailing.dotenv'}}
        }
      ]
    },
    main: {patterns: [{include: '#comment'}, {include: '#field'}]},
    stringBackticks: {
      begin: '\\G`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dotenv'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dotenv'}},
      name: 'string.quoted.backticks.dotenv',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.dotenv'}
          },
          match: '(\\\\)`',
          name: 'constant.character.escape.quote.dotenv'
        }
      ]
    },
    stringDoubleQuoted: {
      begin: '\\G"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dotenv'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dotenv'}},
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
    stringSingleQuoted: {
      begin: "\\G'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dotenv'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.dotenv'}},
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
    },
    strings: {
      patterns: [
        {include: '#stringDoubleQuoted'},
        {include: '#stringSingleQuoted'},
        {include: '#stringBackticks'}
      ]
    }
  },
  scopeName: 'source.dotenv'
}

export default grammar
