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
  extensions: ['.star'],
  names: ['star'],
  patterns: [{include: '#main'}],
  repository: {
    alarm: {match: '\\x07', name: 'punctuation.c0.ctrl-char.alarm.bell.star'},
    badChar: {
      captures: {0: {patterns: [{include: '#alarm'}]}},
      match: '[^\t\n\r -퟿-�\\x{10000}-\\x{10FFF}]+',
      name: 'invalid.illegal.bad-character.star'
    },
    bareword: {
      match:
        '(?i)(?:^|\\G|(?<=\\s))(?![\'"#_;]|(?:loop|global|save|stop|data)_)[--Z!-+\\\\^-z|~]+',
      name: 'constant.other.bareword.star'
    },
    comma: {match: ',', name: 'punctuation.separator.delimiter.comma.star'},
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.star'}},
      end: '$',
      name: 'comment.line.number-sign.star',
      patterns: [{include: '#badChar'}]
    },
    data: {
      begin: '(?:^|\\G|(?<=\\s))(data)((_))([--Z!-+\\\\^-z|~]+)?(?=$|#|\\s)',
      beginCaptures: {
        1: {name: 'storage.type.data.block.star'},
        2: {name: 'meta.separator.block.name.star'},
        3: {name: 'punctuation.definition.block.star'},
        4: {name: 'entity.name.block.star'}
      },
      end: '(?i)(?=(?:^[ \\t]*|\\s+)(?:data|global)_)',
      name: 'meta.data.block.star',
      patterns: [{include: '#comment'}, {include: '#save'}, {include: '#item'}]
    },
    global: {
      begin: '(?:^|\\G|(?<=\\s))global(_)(?=$|#|\\s)',
      beginCaptures: {
        0: {name: 'keyword.control.global.star'},
        1: {name: 'punctuation.section.global.begin.star'}
      },
      end: '(?i)(?=(?:^[ \\t]*|\\s+)(?:data|save|global)_)',
      name: 'meta.global.block.star',
      patterns: [
        {include: '#comment'},
        {include: '#data'},
        {include: '#loop'},
        {include: '#item'}
      ]
    },
    item: {
      applyEndPatternLast: true,
      begin: '(?:^|\\G|(?<=\\s))((_)[--Z!-+\\\\^-z|~]+)(?=$|#|\\s)',
      beginCaptures: {
        0: {name: 'meta.key.star'},
        1: {name: 'entity.name.tag.key.star'},
        2: {name: 'punctuation.definition.name.star'}
      },
      contentName: 'meta.value.star',
      end: '(?!\\G)',
      name: 'meta.entry.star',
      patterns: [{include: '#skipSpace'}, {include: '#value'}]
    },
    list: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.list.begin.star'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.list.end.star'}},
      name: 'meta.list.array.star',
      patterns: [{include: '#comma'}, {include: '#value'}]
    },
    loop: {
      begin: '(?i)(?:^|\\G|(?<=\\s))(?=loop_(?:$|\\s))',
      end: '(?i)(?=^[ \\t]*(?:save|data|global)_)',
      name: 'meta.loop.star',
      patterns: [
        {include: '#loopHeader'},
        {
          begin:
            '(?i)(?:^|\\G|(?<=\\s))(?!(?:save|data|global|loop)_)(?=[--Z!-+\\\\^-z|~]+)',
          end: '(?i)(?=^[ \\t]*(?:save|data|global)_)',
          name: 'meta.packets.star',
          patterns: [
            {include: '#value'},
            {
              match: '(?:^|\\G|(?<=\\s))stop(_)(?=$|\\s)',
              name: 'keyword.operator.stop.star'
            }
          ]
        }
      ]
    },
    loopHeader: {
      applyEndPatternLast: true,
      begin: '(?i)\\Gloop(_)',
      beginCaptures: {
        0: {name: 'keyword.control.loop.star'},
        1: {name: 'punctuation.section.loop.begin.star'}
      },
      end: '(?i)(?=[ \\t]*(?!_|loop_(?:$|\\s))\\S)',
      name: 'meta.header.star',
      patterns: [
        {include: '#skipSpace'},
        {
          captures: {1: {name: 'punctuation.definition.variable.star'}},
          match: '(?:^|\\G|(?<=\\s))(_)[--Z!-+\\\\^-z|~]+(?=$|#|\\s)',
          name: 'variable.reference.data-name.star'
        },
        {include: '#loopNested'},
        {include: '#comment'}
      ]
    },
    loopNested: {
      begin: '(?i)(?:^|\\G|(?<=\\s))(?=loop_(?:$|\\s))',
      end: '(?!\\G)',
      name: 'meta.loop.nested.star',
      patterns: [{include: '#loopHeader'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#item'},
        {include: '#loop'},
        {include: '#data'},
        {include: '#global'},
        {include: '#value'}
      ]
    },
    raw: {
      begin: '^;',
      beginCaptures: {0: {name: 'keyword.operator.section.begin.star'}},
      end: '^;',
      endCaptures: {0: {name: 'keyword.operator.section.end.star'}},
      name: 'string.unquoted.heredoc.star',
      patterns: [{include: '#badChar'}]
    },
    ref: {patterns: [{include: '#refCode'}, {include: '#refTable'}]},
    refCode: {
      captures: {1: {name: 'punctuation.definition.variable.reference.star'}},
      match: '(?:^|\\G|(?<=\\s))(\\$)[--Z!-+\\\\^-z|~]+(?=$|#|\\s)',
      name: 'variable.reference.framecode.star'
    },
    refTable: {
      begin: '\\${',
      beginCaptures: {
        0: {name: 'punctuation.definition.reference.table.begin.star'}
      },
      end: '}\\$',
      endCaptures: {
        0: {name: 'punctuation.definition.reference.table.end.star'}
      },
      name: 'meta.table.reference.star',
      patterns: [{include: '#tableEntry'}, {include: '#comma'}]
    },
    save: {
      begin: '(?:^|\\G|(?<=\\s))(save)((_))([--Z!-+\\\\^-z|~]+)?(?=$|#|\\s)',
      beginCaptures: {
        1: {name: 'storage.type.save.block.star'},
        2: {name: 'meta.separator.block.name.star'},
        3: {name: 'punctuation.definition.block.star'},
        4: {name: 'entity.name.block.framecode.star'}
      },
      end: '(?i)(?=(?:^[ \\t]*|\\s+)(?:save|global)_)',
      name: 'meta.save.block.star',
      patterns: [
        {include: '#comment'},
        {include: '#save'},
        {include: '#loop'},
        {include: '#item'}
      ]
    },
    skipSpace: {begin: '\\G(?:[ \\t]+(?=\\S)|[ \\t]*$)', end: '(?=\\S)'},
    string: {
      patterns: [
        {
          begin: '"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.star'}
          },
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.star'}},
          name: 'string.quoted.double.multi.heredoc.star',
          patterns: [{include: '#stringInnards'}]
        },
        {
          begin: "'''",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.star'}
          },
          end: "'''",
          endCaptures: {0: {name: 'punctuation.definition.string.end.star'}},
          name: 'string.quoted.single.multi.heredoc.star',
          patterns: [{include: '#stringInnards'}]
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.star'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.star'}},
          name: 'string.quoted.double.star',
          patterns: [{include: '#stringInnards'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.star'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.star'}},
          name: 'string.quoted.single.star',
          patterns: [{include: '#stringInnards'}]
        }
      ]
    },
    stringInnards: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#alarm'}]}},
          match: '(\\x07).',
          name: 'constant.character.escape.string.star'
        },
        {include: '#badChar'}
      ]
    },
    table: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.definition.table.begin.star'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.table.end.star'}},
      name: 'meta.table.star',
      patterns: [{include: '#tableEntry'}, {include: '#comma'}]
    },
    tableEntry: {
      applyEndPatternLast: true,
      begin: '("(?:[^"]|\\x07.)*+"|\'(?:[^\']|\\x07.)*+\')(:)',
      beginCaptures: {
        1: {name: 'meta.key.star', patterns: [{include: '#string'}]},
        2: {name: 'keyword.operator.assignment.dictionary.key-value.star'}
      },
      contentName: 'meta.value.star',
      end: '(?!\\G)',
      name: 'meta.entry.table.star',
      patterns: [{include: '#skipSpace'}, {include: '#value'}]
    },
    value: {
      patterns: [
        {include: '#ref'},
        {include: '#string'},
        {include: '#raw'},
        {include: '#list'},
        {include: '#table'},
        {include: '#bareword'},
        {include: '#badChar'},
        {include: '#comment'}
      ]
    }
  },
  scopeName: 'source.star'
}

export default grammar
