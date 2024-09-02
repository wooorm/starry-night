// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-regexp>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.regexp'],
  extensions: [],
  names: [],
  patterns: [{include: '#blockInnards'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.begin.bracket.square.sy'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.array.end.bracket.square.sy'}
      },
      name: 'meta.array.sy',
      patterns: [
        {include: '#main'},
        {
          match: '(?:[^,\\[\\]{}<>"\'`\\s:]|:(?=\\S))+',
          name: 'string.unquoted.sy'
        }
      ]
    },
    block: {
      patterns: [
        {
          begin:
            '((?:[^{}\\[\\]:\\s,]|[:#](?=\\S))(?:[^:{}]|:(?=\\S)|\\\\[{:])*?)({)',
          beginCaptures: {
            1: {name: 'entity.name.block.tag.label.sy'},
            2: {name: 'punctuation.section.scope.block.begin.bracket.curly.sy'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.scope.block.end.bracket.curly.sy'}
          },
          name: 'meta.block.tagged.sy',
          patterns: [{include: '#blockInnards'}]
        },
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.scope.block.begin.bracket.curly.sy'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.scope.block.end.bracket.curly.sy'}
          },
          name: 'meta.block.sy',
          patterns: [{include: '#blockInnards'}]
        }
      ]
    },
    blockInnards: {
      patterns: [
        {include: '#fieldQuotedEarly'},
        {include: '#main'},
        {
          captures: {1: {name: 'entity.name.tag.property.sy'}},
          match:
            '((?:[^{}\\[\\]:\\s,]|[:#](?=\\S))(?:[^:{}]|:(?=\\S)|\\\\[{:])*?)'
        }
      ]
    },
    boolean: {
      patterns: [
        {
          match:
            '(?x)\n(?:\\G|^|(?<=[\\s\\[{,]))\n(?:true|yes|on|TRUE|YES|ON)\n(?=$|[\\s\\]},])',
          name: 'constant.language.boolean.true.sy'
        },
        {
          match:
            '(?x)\n(?:\\G|^|(?<=[\\s\\[{,]))\n(?:false|no|off|TRUE|YES|ON)\n(?=$|[\\s\\]},])',
          name: 'constant.language.boolean.false.sy'
        }
      ]
    },
    brackets: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.section.scope.block.begin.bracket.round.sy'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.section.scope.block.end.bracket.round.sy'}
      },
      name: 'meta.expression.sy',
      patterns: [{include: '#operator'}, {include: '#main'}]
    },
    byteArray: {
      patterns: [
        {
          begin: '(<)(base64)(:)',
          beginCaptures: {
            1: {name: 'punctuation.section.byte-array.begin.bracket.angle.sy'},
            2: {name: 'storage.modifier.encoding.base64.sy'},
            3: {name: 'punctuation.separator.key-value.sy'}
          },
          end: '(>)\\s*([^:,}\\]]+)',
          endCaptures: {
            1: {name: 'punctuation.section.byte-array.end.bracket.angle.sy'},
            2: {name: 'invalid.illegal.characters.sy'}
          },
          name: 'meta.byte-array.base64.sy',
          patterns: [
            {
              match: '[A-Za-z0-9+/=]+',
              name: 'constant.character.encoded.base64.sy'
            },
            {include: '#comment'},
            {match: '[^\\s>]+', name: 'invalid.illegal.character.sy'}
          ]
        },
        {
          begin: '<~',
          beginCaptures: {
            0: {name: 'punctuation.section.byte-array.begin.bracket.angle.sy'}
          },
          end: '~>',
          endCaptures: {
            0: {name: 'punctuation.section.byte-array.end.bracket.angle.sy'}
          },
          name: 'meta.byte-array.base85.sy',
          patterns: [
            {match: '[!-uz]+', name: 'constant.character.encoded.base85.sy'},
            {match: '[^!-uz\\s~]', name: 'invalid.illegal.character.sy'}
          ]
        },
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.section.byte-array.begin.bracket.angle.sy'}
          },
          end: '(>)\\s*([^:,}\\]]+)',
          endCaptures: {
            1: {name: 'punctuation.section.byte-array.end.bracket.angle.sy'},
            2: {name: 'invalid.illegal.characters.sy'}
          },
          name: 'meta.byte-array.sy',
          patterns: [
            {
              match: '[A-Fa-f0-9]+',
              name: 'constant.numeric.integer.int.hexadecimal.hex.sy'
            },
            {include: '#comment'},
            {match: '[^\\s>]+', name: 'invalid.illegal.character.sy'}
          ]
        }
      ]
    },
    comma: {match: ',', name: 'punctuation.separator.delimiter.comma.sy'},
    comment: {
      patterns: [
        {
          begin: '(?:\\G|^|(?<=\\s|\\xC2\\xAD|\\xAD))(#{3,})(?=\\s|$)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.begin.sy'}},
          end: '\\1',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.sy'}},
          name: 'comment.block.sy'
        },
        {
          begin: '(?:\\G|^|(?<=\\s|\\xC2\\xAD|\\xAD))#(?=\\s|$)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.sy'}},
          end: '$',
          name: 'comment.line.number-sign.sy'
        }
      ]
    },
    date: {
      match:
        '(?x)\n# Date\n[0-9]{4} - # Year\n[0-9]{2} - # Month\n[0-9]{2}   # Day\n\n# Time\n(?:\n\t(?:T|\\s+)\n\t[0-9]{1,2} :     # Hours\n\t[0-9]{1,2} :     # Minutes\n\t[0-9]{1,2}       # Seconds\n\t(?:\\.[0-9]+)?   # Milliseconds\n\t(\\+[0-9]{4}|Z)? # Timezone\n)?\n\n# Followed by delimiter, EOL, or comment\n(?= \\s* (?:$|[,\\]}])\n|   \\s+ \\#(?:$|\\s)\n)',
      name: 'constant.other.date.sy'
    },
    escape: {
      patterns: [
        {
          begin: '\\\\$\\s*',
          beginCaptures: {
            0: {name: 'punctuation.backslash.definition.escape.sy'}
          },
          end: '^',
          name: 'constant.character.escape.newline.sy'
        },
        {
          captures: {1: {name: 'punctuation.backslash.definition.escape.sy'}},
          match: '(\\\\)x[A-Fa-f0-9]{2}',
          name: 'constant.character.escape.unicode.sy'
        },
        {
          captures: {1: {name: 'punctuation.backslash.definition.escape.sy'}},
          match: '(\\\\)u[A-Fa-f0-9]{4}',
          name: 'constant.character.escape.unicode.sy'
        },
        {
          captures: {
            1: {name: 'punctuation.backslash.definition.escape.sy'},
            2: {
              name: 'punctuation.definition.unicode-escape.begin.bracket.curly.sy'
            },
            3: {
              name: 'punctuation.definition.unicode-escape.end.bracket.curly.sy'
            }
          },
          match: '(\\\\)u({)[A-Fa-f0-9]+(})',
          name: 'constant.character.escape.unicode.sy'
        },
        {match: '\\\\u{[^}"]*}', name: 'invalid.illegal.unicode-escape.sy'},
        {
          match: '\\\\u(?![A-Fa-f0-9]{4})[^"]*',
          name: 'invalid.illegal.unicode-escape.sy'
        },
        {
          captures: {0: {name: 'punctuation.backslash.definition.escape.sy'}},
          match: '(\\\\).',
          name: 'constant.character.escape.sy'
        }
      ]
    },
    escapeVerbatim: {
      match: '``',
      name: 'constant.character.escape.backtick.sy'
    },
    expression: {
      captures: {
        1: {
          patterns: [
            {include: '#brackets'},
            {include: '#number'},
            {include: '#operator'}
          ]
        }
      },
      match:
        '(?x)\n\\G\n(\n\t(?:\\s*\\()*\n\t\\s*\n\t~? [-+]? ~?\n\t\\d\n\t[-+*/%~^&|\\(\\)eE\\s.oOxXbB\\d]*\n)\n(?=\n\t\\s*\n\t(?: $\n\t|   ,\n\t| \\]\n\t| \\}\n\t| (?<=\\s)\\#(?=\\s|$)\n\t)\n)',
      name: 'meta.expression.sy'
    },
    field: {
      begin:
        '(?x)\n(?:\n\t# Quoted property name\n\t(?<=[:{\\[]) \\s*\n\t(?: ("(?:[^"\\\\]|\\\\.)*")\n\t|   (\'(?:[^\'\\\\]|\\\\.)*\')\n\t|   (`(?:[^`]|``)*+`(?!`))\n\t) \\s* (:)\n\t\n\t|\n\t\n\t# Unquoted property name\n\t([^{}\\[\\]<>\\s][^,]*?)\n\t(?<!\\\\) (:)\n\t\n\t|\n\t\n\t# Presumably one following a multiline string\n\t(?<=["\'`]) \\s* (:)\n)\n(?=\\s|$)\n\\s*',
      beginCaptures: {
        1: {
          name: 'entity.name.tag.property.quoted.double.sy',
          patterns: [{include: '#escape'}]
        },
        2: {
          name: 'entity.name.tag.property.quoted.single.sy',
          patterns: [{include: '#escape'}]
        },
        3: {
          name: 'entity.name.tag.property.quoted.backtick.sy',
          patterns: [{include: '#escapeVerbatim'}]
        },
        4: {name: 'punctuation.separator.key-value.sy'},
        5: {
          name: 'entity.name.tag.property.sy',
          patterns: [{include: '#escape'}]
        },
        6: {name: 'punctuation.separator.key-value.sy'},
        7: {name: 'punctuation.separator.key-value.sy'}
      },
      end: '(?=\\s*})|^(?!\\G)',
      name: 'meta.field.sy',
      patterns: [{include: '#fieldInnards'}]
    },
    fieldInnards: {
      patterns: [
        {include: '#date'},
        {include: '#expression'},
        {include: '#main'},
        {
          captures: {0: {patterns: [{include: '#url'}]}},
          match:
            '(?x) \\G\n(?! ~?[-+]?[0-9]\n|  (?<=\\s)\\#(?=\\s|$)\n)\n[^\\s{}\\[\\]<:"\'`]\n\n(?: [^\\#,}\\]:]\n|   (?<=\\S) [\\#:]\n|   [:\\#] (?=\\S)\n)*\n(?!\n\t\\s*\n\t(?:[\\{:])\n)',
          name: 'string.unquoted.sy'
        }
      ]
    },
    fieldQuotedEarly: {
      begin:
        '(?x) (?:\\G|^) \\s*\n(?: ("(?:[^"\\\\]|\\\\.)*")\n|   (\'(?:[^\'\\\\]|\\\\.)*\')\n|   (`(?:[^`]|``)*+`(?!`))\n) \\s* (:)\n(?=\\s|$)\n\\s*',
      beginCaptures: {
        1: {
          name: 'entity.name.tag.property.quoted.double.sy',
          patterns: [{include: '#escape'}]
        },
        2: {
          name: 'entity.name.tag.property.quoted.single.sy',
          patterns: [{include: '#escape'}]
        },
        3: {
          name: 'entity.name.tag.property.quoted.backtick.sy',
          patterns: [{include: '#escapeVerbatim'}]
        },
        4: {name: 'punctuation.separator.key-value.sy'}
      },
      end: '(?=\\s*})|^(?!\\G)',
      name: 'meta.field.sy',
      patterns: [{include: '#fieldInnards'}]
    },
    heredoc: {
      patterns: [
        {include: '#heredocDouble'},
        {include: '#heredocSingle'},
        {include: '#heredocVerbatim'}
      ]
    },
    heredocDouble: {
      patterns: [
        {
          begin: '([-\\w]+)[ \\t]+("{3,})',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: '\\2',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.double.heredoc.hinted.${1:/scopify}.sy'
        },
        {
          begin: '("{3,})',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: '\\1',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.double.heredoc.sy',
          patterns: [{include: '#stringInnards'}]
        }
      ]
    },
    heredocSingle: {
      patterns: [
        {
          begin: "([-\\w]+)[ \\t]+('{3,})",
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: '\\2',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.single.heredoc.hinted.${1:/scopify}.sy'
        },
        {
          begin: "('{3,})",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: '\\1',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.single.heredoc.sy',
          patterns: [{include: '#stringInnards'}]
        }
      ]
    },
    heredocVerbatim: {
      patterns: [
        {
          begin: '([-\\w]+)[ \\t]+(`{3,})',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: '\\2',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.verbatim.backtick.heredoc.hinted.${1:/scopify}.sy'
        },
        {
          begin: '(`{3,})',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: '\\1',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.verbatim.backtick.heredoc.sy'
        }
      ]
    },
    injection: {
      begin: '\\A(?:\\xC2\\xAD|\\xAD){2}',
      beginCaptures: {0: {patterns: [{include: '#signature'}]}},
      end: '(?=A)B',
      patterns: [{include: '#blockInnards'}]
    },
    main: {
      patterns: [
        {include: '#signature'},
        {include: '#comment'},
        {include: '#regexp'},
        {include: '#fieldQuotedEarly'},
        {include: '#heredoc'},
        {include: '#string'},
        {include: '#stringJunk'},
        {include: '#block'},
        {include: '#field'},
        {include: '#array'},
        {include: '#byteArray'},
        {include: '#brackets'},
        {include: '#boolean'},
        {include: '#null'},
        {include: '#date'},
        {include: '#number'},
        {include: '#comma'},
        {include: '#operator'}
      ]
    },
    null: {
      match: '(?x)\n(?:\\G|^|(?<=[\\s\\[{,]))\n(?:null|NULL)\n(?=$|[\\s\\]},])',
      name: 'constant.language.null.sy'
    },
    number: {
      captures: {
        1: {name: 'constant.numeric.integer.int.hexadecimal.hex.sy'},
        2: {name: 'constant.numeric.integer.int.octal.oct.sy'},
        3: {name: 'constant.numeric.integer.int.binary.bin.sy'},
        4: {name: 'constant.numeric.float.decimal.dec.sy'},
        5: {name: 'constant.numeric.integer.int.decimal.dec.sy'}
      },
      match:
        '(?x)\n(?:^|(?<=[\\s\\[\\({,~])|\\G)\n(?: ([-+]?0[xX][A-Fa-f0-9_]+) # Hexadecimal\n|   ([-+]?0[oO][0-7_]+)       # Octal\n|   ([-+]?0[bB][0-1_]+)       # Binary\n|   ([-+]?[0-9_]+\\.(?:[0-9_]*[eE][+-]?[0-9_]+|[0-9_]+)) # Float\n|   ([-+]?[0-9_]+(?:[eE][+-]?[0-9_]+)?) # Integer\n)\n\\s*\n(?= $\n|   [-+*/%^&|\\)<>\\s\\]},]\n|   (?<=\\s)\\#(?=\\s|$)\n)'
    },
    operator: {
      patterns: [
        {match: '\\*\\*|[-+*/%]', name: 'keyword.operator.arithmetic.sy'},
        {match: '(<<|>>|>>>|[~&|^])', name: 'keyword.operator.bitwise.sy'}
      ]
    },
    regexp: {
      patterns: [
        {
          begin: '(?:([-\\w]+)[ \\t]+)?(/{3,})',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {
              patterns: [
                {
                  match: '(?:\\G|^)/{3}$',
                  name: 'punctuation.definition.string.begin.triple-slash.sy'
                },
                {match: '.+', name: 'punctuation.definition.string.begin.sy'}
              ]
            }
          },
          end: '(\\2)([A-Za-z]*)',
          endCaptures: {
            1: {
              patterns: [
                {
                  match: '(?:\\G|^)/{3}$',
                  name: 'punctuation.definition.string.end.triple-slash.sy'
                },
                {match: '.+', name: 'punctuation.definition.string.end.sy'}
              ]
            },
            2: {patterns: [{include: 'source.regexp#scopedModifiers'}]}
          },
          name: 'string.regexp.multiline.sy',
          patterns: [{include: 'source.regexp#main'}]
        },
        {
          begin: '(?:([-\\w]+)[ \\t]+)?(/)',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          end: '(/)([A-Za-z]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.sy'},
            2: {patterns: [{include: 'source.regexp#scopedModifiers'}]}
          },
          name: 'string.regexp.sy',
          patterns: [{include: 'source.regexp#main'}]
        }
      ]
    },
    signature: {
      match: '^(?:\\xC2\\xAD){2,}',
      name: 'punctuation.whitespace.shy-hyphens.signature.sy'
    },
    string: {
      patterns: [
        {include: '#stringDouble'},
        {include: '#stringSingle'},
        {include: '#stringVerbatim'}
      ]
    },
    stringDouble: {
      patterns: [
        {
          begin: '([-\\w]+)[ \\t]+(")',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.double.hinted.${1:/scopify}.sy'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.double.sy',
          patterns: [{include: '#stringInnards'}]
        }
      ]
    },
    stringInnards: {patterns: [{include: '#url'}, {include: '#escape'}]},
    stringJunk: {
      begin: '(?<=["\'`])(?!\\s*$)(?=\\s*[^:,}\\]])',
      end: '(?=[:,}\\]])',
      name: 'invalid.illegal.syntax.sy'
    },
    stringSingle: {
      patterns: [
        {
          begin: "([-\\w]+)[ \\t]+(')",
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.single.hinted.${1:/scopify}.sy'
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.single.sy',
          patterns: [{include: '#stringInnards'}]
        }
      ]
    },
    stringVerbatim: {
      patterns: [
        {
          begin: '([-\\w]+)[ \\t]+(`)',
          beginCaptures: {
            1: {name: 'storage.modifier.type.parse-hint.sy'},
            2: {name: 'punctuation.definition.string.begin.sy'}
          },
          contentName: 'embedded.${1:/scopify}',
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.verbatim.backtick.hinted.${1:/scopify}.sy'
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sy'}},
          end: '`(?!`)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sy'}},
          name: 'string.quoted.verbatim.backtick.sy',
          patterns: [{include: '#escapeVerbatim'}]
        }
      ]
    },
    url: {
      patterns: [
        {
          match:
            "(?x) \\b\n# Protocol\n( https?\n| s?ftp\n| ftps\n| file\n| wss?\n| smb\n| git (?:\\+https?)\n| ssh\n| rsync\n| afp\n| nfs\n| (?:x-)?man(?:-page)?\n| gopher\n| txmt\n| issue\n| atom\n) ://\n\n# Path specifier\n(?:\n\t(?! \\#\\w*\\#)\n\t(?: [-:\\@\\w.,~%+_/?=&\\#;|!])\n)+\n\n# Don't include trailing punctuation\n(?<![-.,?:\\#;])",
          name: 'constant.other.reference.link.underline.sy'
        },
        {
          match:
            '(?x) \\b\nmailto: (?:\n\t(?! \\#\\w*\\#)\n\t(?: [-:@\\w.,~%+_/?=&\\#;|!])\n)+\n(?<![-.,?:\\#;])',
          name: 'markup.underline.link.mailto.sy'
        }
      ]
    }
  },
  scopeName: 'source.sy'
}

export default grammar
