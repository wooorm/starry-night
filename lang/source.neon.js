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
  extensions: ['.neon'],
  names: ['neon', 'nette-object-notation', 'ne-on'],
  patterns: [{include: '#main'}],
  repository: {
    boolean: {
      patterns: [
        {
          match: '\\b(TRUE|True|true|YES|Yes|yes|ON|On|on)\\b',
          name: 'constant.language.boolean.true.neon'
        },
        {
          match: '\\b(FALSE|False|false|NO|No|no|OFF|Off|off)\\b',
          name: 'constant.language.boolean.false.neon'
        }
      ]
    },
    brackets: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.begin.neon'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.square.end.neon'}
          },
          patterns: [{include: '#main'}]
        },
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.brace.begin.neon'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.brace.end.neon'}
          },
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.bracket.round.parenthesis.begin.neon'
            }
          },
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.bracket.round.parenthesis.end.neon'
            }
          },
          patterns: [{include: '#main'}]
        }
      ]
    },
    comma: {match: ',', name: 'punctuation.separator.delimiter.comma.neon'},
    comment: {
      begin: '(?<=\\s|^)#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.neon'}},
      end: '$',
      name: 'comment.line.number-sign.neon'
    },
    datetime: {
      captures: {
        1: {name: 'constant.numeric.date.neon'},
        10: {name: 'punctuation.delimiter.separator.colon.neon'},
        11: {name: 'constant.numeric.time.minute.neon'},
        12: {name: 'punctuation.delimiter.separator.colon.neon'},
        13: {name: 'constant.numeric.time.second.neon'},
        14: {name: 'constant.numeric.time.timezone.tz.neon'},
        15: {name: 'punctuation.separator.timezone.neon'},
        2: {name: 'constant.numeric.date.year.neon'},
        3: {name: 'punctuation.delimiter.separator.dash.hyphen.neon'},
        4: {name: 'constant.numeric.date.month.neon'},
        5: {name: 'punctuation.delimiter.separator.dash.hyphen.neon'},
        6: {name: 'constant.numeric.date.day.neon'},
        7: {name: 'constant.numeric.time.neon'},
        8: {name: 'punctuation.separator.datetime.neon'},
        9: {name: 'constant.numeric.time.hour.neon'}
      },
      match:
        '(?x)\n\n# Date\n(\n\t(\\d{4})   (-)  # Year\n\t(\\d{1,2}) (-)  # Month\n\t(\\d{1,2})      # Day\n)\n\n# Time\n(\n\t([Tt]|\\s++)          # Separator\n\t(\\d{1,2}) (:)        # Hour\n\t(\\d{2})   (:)        # Minute\n\t(\\d{2}(?:\\.\\d*+)?) # Second\n\t\\s*+\n\t\n\t# 10: Timezone\n\t((Z)|[-+]\\d{1,2}(?::?\\d{2})?)?\n)?\n\\s*$',
      name: 'constant.numeric.datetime.neon'
    },
    entity: {
      begin:
        '(?x)\n(\n\t[^\\#"\',:=@\\[\\]{}()\\s!`]\n\t(?: [^\\#,:=\\]})(]\n\t| : [^\\s,\\]})]\n\t| \\S\\#\n\t)*\n) \\s* (\\()',
      beginCaptures: {
        1: {name: 'entity.name.type.neon'},
        2: {name: 'punctuation.definition.entity.begin.neon'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.entity.end.neon'}},
      name: 'meta.entity.definition.neon',
      patterns: [{include: '#main'}]
    },
    int: {
      patterns: [
        {
          match: '0x[0-9a-fA-F]++(?=\\s*$)',
          name: 'constant.numeric.integer.int.hexadecimal.hex.neon'
        },
        {
          match: '0o[0-7]++(?=\\s$)',
          name: 'constant.numeric.integer.int.octal.oct.neon'
        },
        {
          match: '0b[0-1]++(?=\\s$)',
          name: 'constant.numeric.integer.int.binary.bin.neon'
        }
      ]
    },
    kv: {
      captures: {
        1: {name: 'entity.name.tag.neon'},
        2: {name: 'keyword.operator.assignment.key-value.neon'}
      },
      match:
        '(?x)\n(\n\t[^\\#"\',:=@\\[\\]{}()\\s!`]\n\t(?: [^\\#,:=\\]})(]\n\t| : [^\\s,\\]})]\n\t| \\S\\#\n\t)*+\n)\n(:|=)'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#kv'},
        {include: '#boolean'},
        {include: '#brackets'},
        {include: '#datetime'},
        {include: '#int'},
        {include: '#null'},
        {include: '#strings'},
        {include: '#comma'},
        {include: '#number'},
        {include: '#entity'},
        {include: '#unquoted'}
      ]
    },
    null: {
      match: '\\b(NULL|Null|null)\\b(?=\\s*(?:$|[\\]}),]|(?<=\\s)#))',
      name: 'constant.language.null.neon'
    },
    number: {
      patterns: [
        {
          match:
            '[-+]?(?:[0-9]*\\.[0-9]+|[0-9]+\\.)(?:[eE][-+]?[0-9]+)++(?=\\s*(?:$|[\\]}),]|(?<=\\s)#))',
          name: 'constant.numeric.float.real.decimal.dec.exponential.scientific.neon'
        },
        {
          match:
            '[-+]?(?:[0-9]*\\.[0-9]+|[0-9]+\\.)++(?=\\s*(?:$|[\\]}),]|(?<=\\s)#))',
          name: 'constant.numeric.float.real.decimal.dec.neon'
        },
        {
          match: '[-+]?[0-9]+[eE][-+]?[0-9]+(?=\\s*(?:$|[\\]}),]|(?<=\\s)#))',
          name: 'constant.numeric.integer.int.decimal.dec.exponential.scientific.neon'
        },
        {
          match: '[-+]?[0-9]+(?=\\s*(?:$|[\\]}),]|(?<=\\s)#))',
          name: 'constant.numeric.integer.int.decimal.dec.neon'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "(''')\\s*$",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.neon'}
          },
          end: "^\\s*(''')",
          endCaptures: {1: {name: 'punctuation.definition.string.end.neon'}},
          name: 'string.quoted.single.heredoc.neon'
        },
        {
          begin: '(""")\\s*$',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.neon'}
          },
          end: '^\\s*(""")',
          endCaptures: {1: {name: 'punctuation.definition.string.end.neon'}},
          name: 'string.quoted.double.heredoc.neon'
        },
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.neon'}
          },
          end: "(')|([^']*)$",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.neon'},
            2: {name: 'invalid.illegal.unclosed.string.neon'}
          },
          name: 'string.quoted.single.neon',
          patterns: [
            {
              match: "''(?!')",
              name: 'constant.character.escape.quote.single.neon'
            }
          ]
        },
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.neon'}
          },
          end: '(")|([^"]*)$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.neon'},
            2: {name: 'invalid.illegal.unclosed.string.neon'}
          },
          name: 'string.quoted.double.neon',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.neon'}
              },
              match: '(\\\\)u[A-Fa-f0-9]+',
              name: 'constant.character.escape.unicode.codepoint.long.neon'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.neon'}
              },
              match: '(\\\\)x[A-Fa-f0-9]{2}',
              name: 'constant.character.escape.unicode.codepoint.short.neon'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.neon'}
              },
              match: '(\\\\)[tnrfb"\\\\/_]',
              name: 'constant.character.escape.neon'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.escape.backslash.neon'}
              },
              match: '(\\\\).',
              name: 'invalid.illegal.unknown-escape.neon'
            }
          ]
        }
      ]
    },
    unquoted: {
      match:
        '(?x)\n[^\\#"\',:=@\\[\\]{}()\\s!`]\n(?: [^\\#,:=\\]})(]\n| : [^\\s,\\]})]\n| \\S\\#\n)*',
      name: 'string.unquoted.literal.neon'
    }
  },
  scopeName: 'source.neon'
}

export default grammar
