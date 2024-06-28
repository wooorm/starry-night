// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-roff>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rnh', '.rno'],
  names: ['runoff'],
  patterns: [{include: '#main'}],
  repository: {
    arguments: {
      patterns: [
        {match: '[-+]?\\d+(?:\\.\\d+)?', name: 'constant.numeric.runoff'},
        {match: ',', name: 'punctuation.separator.comma.runoff'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.runoff'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.runoff'}},
          name: 'string.quoted.runoff'
        },
        {
          captures: {
            0: {name: 'string.unquoted.runoff'},
            1: {patterns: [{include: '#name-innards'}]}
          },
          match: '(?!\\.)([^\\s;,]+)',
          name: 'variable.parameter.runoff'
        }
      ]
    },
    commands: {
      begin: '^\f*(?=\\.)',
      end: '$|;(?!\\.)',
      endCaptures: {0: {name: 'punctuation.terminator.statement.runoff'}},
      name: 'meta.control-line.runoff',
      patterns: [
        {
          begin: '!',
          beginCaptures: {0: {name: 'punctuation.definition.comment.runoff'}},
          end: '$',
          name: 'comment.line.runoff'
        },
        {
          begin: '(?i)(?:^|(?<=;))((\\.)(?:IF|ELSE|ENDIF))(?=$|\\s|;)',
          beginCaptures: {
            1: {name: 'keyword.control.runoff'},
            2: {name: 'punctuation.definition.function.runoff'}
          },
          end: '$|(;)|(?=!)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.runoff'}},
          name: 'meta.condition.runoff',
          patterns: [{include: '#arguments'}]
        },
        {
          begin: '(?i)((\\.)LITERAL\\s*)(?:$|\\R)',
          beginCaptures: {
            0: {name: 'keyword.function.name.runoff'},
            1: {name: 'entity.name.function.runoff'},
            2: {name: 'punctuation.definition.function.runoff'}
          },
          contentName: 'markup.raw.runoff',
          end: '(?i)((\\.)END\\s+LITERAL)\\b',
          endCaptures: {
            0: {name: 'keyword.function.name.runoff'},
            1: {name: 'entity.name.function.runoff'},
            2: {name: 'punctuation.definition.function.runoff'}
          }
        },
        {
          begin: '(?i)((\\.)LIT)\\s*(?:$|\\R)',
          beginCaptures: {
            0: {name: 'keyword.function.name.runoff'},
            1: {name: 'entity.name.function.runoff'},
            2: {name: 'punctuation.definition.function.runoff'}
          },
          contentName: 'markup.raw.runoff',
          end: '(?i)^(?=\\.(?:EL|END\\s+LIT)(?:$|[\\s;!]))'
        },
        {
          begin: '(?i)((\\.)COMMENT)\\b',
          beginCaptures: {
            0: {name: 'keyword.function.name.runoff'},
            1: {name: 'entity.name.function.runoff'},
            2: {name: 'punctuation.definition.function.runoff'}
          },
          contentName: 'string.unquoted.runoff',
          end: '$|(;)|(?=!)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.runoff'}},
          name: 'meta.function.debugging-comment.runoff'
        },
        {
          begin: '(?i)((\\.)(?:END\\s+)?([^;\\s\\-+]+))',
          beginCaptures: {
            0: {name: 'keyword.function.name.runoff'},
            1: {name: 'entity.name.function.runoff'},
            2: {name: 'punctuation.definition.function.runoff'},
            3: {patterns: [{include: '#name-innards'}]}
          },
          end: '(?x)\n$               | # EOL\n(;)?\\s*(?=\\.) | # Followed by another command\n(?=;\\s*[^.])     # No more commands, don’t highlight trailing text as arguments',
          endCaptures: {1: {name: 'punctuation.terminator.statement.runoff'}},
          name: 'meta.function.runoff',
          patterns: [{include: '#arguments'}]
        }
      ]
    },
    comment: {
      begin: '^\\.[!*~]',
      beginCaptures: {0: {name: 'punctuation.definition.comment.runoff'}},
      end: '$',
      name: 'comment.line.runoff'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#underline'},
        {include: '#commands'},
        {include: '#special-characters'}
      ]
    },
    'name-innards': {
      patterns: [
        {include: '#special-characters'},
        {match: '\\.', name: 'punctuation.delimiter.period.full-stop.runoff'},
        {match: '\\,', name: 'punctuation.separator.comma.runoff'},
        {match: '\\d+(?=$|\\R|,|\\.(?!\\d))', name: 'constant.numeric.runoff'}
      ]
    },
    'special-characters': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.runoff'}},
          match: '(_)[!^\\\\#&_.]',
          name: 'constant.character.escape.special-character.runoff'
        },
        {match: '^!', name: 'keyword.operator.end-footnote.runoff'},
        {
          captures: {0: {name: 'punctuation.definition.escape.runoff'}},
          match: '\\^{1,2}',
          name: 'constant.character.escape.uppercase.runoff'
        },
        {
          captures: {0: {name: 'punctuation.definition.escape.runoff'}},
          match: '\\\\{1,2}',
          name: 'constant.character.escape.lowercase.runoff'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.runoff'},
            2: {patterns: [{include: '#special-characters'}]},
            3: {name: 'markup.underline.link.runoff'}
          },
          match: '(&)([!^\\\\#&_.]*)(\\S+)'
        },
        {
          captures: {0: {name: 'punctuation.definition.escape.runoff'}},
          match: '#',
          name: 'constant.character.escape.space.runoff'
        }
      ]
    },
    underline: {
      match: '[^_]\b(?=_)|(?<=_)\b[^_]',
      name: 'markup.underline.link.runoff'
    }
  },
  scopeName: 'text.runoff'
}

export default grammar
