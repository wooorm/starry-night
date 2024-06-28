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
  dependencies: ['source.regexp.posix'],
  extensions: [],
  names: [],
  patterns: [
    {include: '#comma'},
    {include: '#comment'},
    {include: '#esc'},
    {include: '#float'},
    {include: '#int'},
    {include: '#str'},
    {include: '#colon'},
    {include: '#eql'},
    {include: '#dot'}
  ],
  repository: {
    bareword: {match: '[^"\\s][\\S]*', name: 'string.unquoted.bareword'},
    base64: {match: '[A-Za-z0-9+/=]{4,}', name: 'constant.numeric.base64'},
    bool: {
      match: '\\b(true|false|TRUE|FALSE)\\b',
      name: 'constant.logical.bool.boolean.${1:/downcase}'
    },
    bracket: {
      patterns: [
        {
          match: '\\{',
          name: 'punctuation.definition.bracket.curly.brace.begin'
        },
        {match: '\\}', name: 'punctuation.definition.bracket.curly.brace.end'},
        {match: '\\[', name: 'punctuation.definition.bracket.square.begin'},
        {match: '\\]', name: 'punctuation.definition.bracket.square.end'},
        {
          match: '\\(',
          name: 'punctuation.definition.bracket.round.parenthesis.begin'
        },
        {
          match: '\\)',
          name: 'punctuation.definition.bracket.round.parenthesis.end'
        },
        {match: '<', name: 'punctuation.definition.bracket.angle.ascii.begin'},
        {match: '>', name: 'punctuation.definition.bracket.angle.ascii.end'},
        {
          match: '⟨',
          name: 'punctuation.definition.bracket.angle.unicode.begin'
        },
        {match: '⟩', name: 'punctuation.definition.bracket.angle.unicode.end'}
      ]
    },
    colon: {match: ':', name: 'punctuation.delimiter.separator.colon'},
    comma: {match: ',', name: 'punctuation.separator.delimiter.comma'},
    comment: {patterns: [{include: '#commentHash'}]},
    commentHash: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment'}},
      end: '$',
      name: 'comment.line.number-sign'
    },
    commentSemi: {
      begin: ';+',
      beginCaptures: {0: {name: 'punctuation.definition.comment'}},
      end: '$',
      name: 'comment.line.semicolon'
    },
    commentSlash: {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment'}},
      end: '$',
      name: 'comment.line.double-slash'
    },
    dash: {match: '-', name: 'punctuation.delimiter.separator.dash.hyphen'},
    dot: {
      match: '\\.',
      name: 'punctuation.delimiter.separator.property.period.dot'
    },
    dotDec: {
      match: '(?:\\G|(?<!\\.)\\b)\\d+(?:\\.\\d+)+\\b(?!\\.)',
      name: 'constant.numeric.other.dot-decimal'
    },
    dotPair: {
      match: '\\.\\.|‥',
      name: 'keyword.operator.punctuation.dots.splat.range.spread.rest'
    },
    dotTrail: {
      match: '\\.{4,}',
      name: 'punctuation.delimiter.separator.dotted.border.leader.dots'
    },
    dots: {
      patterns: [
        {include: '#ellipsis'},
        {include: '#dotPair'},
        {include: '#dot'}
      ]
    },
    ellipsis: {
      match: '\\.{3}|…',
      name: 'keyword.operator.punctuation.ellipsis.splat.range.spread.rest'
    },
    email: {
      patterns: [
        {include: '#emailBracketed'},
        {include: '#emailQuoted'},
        {include: '#emailUnquoted'}
      ]
    },
    emailBracketed: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '(<)\\s*([^>@\\s]+@[^>@\\s]+)\\s*(>)',
          name: 'meta.email-address.bracketed.ascii.angle-brackets'
        },
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '(⟨)\\s*([^⟩@\\s]+@[^⟩@\\s]+)\\s*(⟩)',
          name: 'meta.email-address.bracketed.unicode.angle-brackets'
        },
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '(«)\\s*([^»@\\s]+@[^»@\\s]+)\\s*(»)',
          name: 'meta.email-address.bracketed.guillemots'
        },
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '(\\()\\s*([^\\)@\\s]+@[^\\)@\\s]+)\\s*(\\))',
          name: 'meta.email-address.bracketed.round-brackets'
        },
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '({)\\s*([^}@\\s]+@[^}@\\s]+)\\s*(})',
          name: 'meta.email-address.bracketed.curly-brackets'
        },
        {
          captures: {
            1: {patterns: [{include: '#bracket'}]},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {patterns: [{include: '#bracket'}]}
          },
          match: '(\\[)\\s*([^\\]@\\s]+@[^\\]@\\s]+)\\s*(\\])',
          name: 'meta.email-address.bracketed.square-brackets'
        }
      ]
    },
    emailInnards: {
      captures: {
        0: {
          patterns: [
            {
              captures: {
                1: {name: 'meta.local-part'},
                2: {name: 'punctuation.separator.at-sign.email'},
                3: {name: 'meta.domain'}
              },
              match: '\\G([^@]*)(@)(.*)'
            }
          ]
        }
      },
      match: '(?:\\G|^|(?<=\\n)).+',
      name: 'constant.other.reference.link.underline.email'
    },
    emailQuoted: {
      patterns: [
        {
          captures: {
            0: {name: 'string.quoted.double'},
            1: {name: 'punctuation.definition.string.begin.email-address'},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {name: 'punctuation.definition.string.end.email-address'}
          },
          match: '(")\\s*([^"@\\s]+@[^"@\\s]+)\\s*(")',
          name: 'meta.email-address.quoted.ascii.double-quotes'
        },
        {
          captures: {
            0: {name: 'string.quoted.double'},
            1: {name: 'punctuation.definition.string.begin.email-address'},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {name: 'punctuation.definition.string.end.email-address'}
          },
          match: '(“)\\s*([^”@\\s]+@[^”@\\s]+)\\s*(”)',
          name: 'meta.email-address.quoted.unicode.double-quotes'
        },
        {
          captures: {
            0: {name: 'string.quoted.single'},
            1: {name: 'punctuation.definition.string.begin.email-address'},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {name: 'punctuation.definition.string.end.email-address'}
          },
          match: '(‘)\\s*([^’@\\s]+@[^’@\\s]+)\\s*(’)',
          name: 'meta.email-address.quoted.unicode.single-quotes'
        },
        {
          captures: {
            0: {name: 'string.quoted.template.backticks'},
            1: {name: 'punctuation.definition.string.begin.email-address'},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {name: 'punctuation.definition.string.end.email-address'}
          },
          match: '(`)\\s*([^`@\\s]+@[^`@\\s]+)\\s*(`)',
          name: 'meta.email-address.quoted.backticks'
        },
        {
          captures: {
            0: {name: 'string.quoted.single'},
            1: {name: 'punctuation.definition.string.begin.email-address'},
            2: {patterns: [{include: '#emailInnards'}]},
            3: {name: 'punctuation.definition.string.end.email-address'}
          },
          match: "(`|')\\s*([^'@\\s]+@[^'@\\s]+)\\s*(')",
          name: 'meta.email-address.quoted.single-quotes'
        }
      ]
    },
    emailUnquoted: {
      captures: {
        1: {
          name: 'string.unquoted.email-address',
          patterns: [{include: '#emailInnards'}]
        }
      },
      match:
        '(?x)\n((?!\\.) (?:[^\\[\\(<⟨«"\'\\s@.]|\\.(?!\\.))++ @\n([^\\[\\(<⟨«"\'\\s@.]+?\\.(?=[^\\.\\s])(?:[^\\[\\(<⟨«"\'\\s@.]|\\.(?!\\.))++))',
      name: 'meta.email-address.unquoted'
    },
    eql: {
      match: '=',
      name: 'keyword.operator.assignment.key-value.equals-sign'
    },
    esc: {
      captures: {1: {name: 'punctuation.definition.escape.backslash'}},
      match: '(\\\\).',
      name: 'constant.character.escape.backslash'
    },
    float: {patterns: [{include: '#floatExp'}, {include: '#floatNoExp'}]},
    floatExp: {
      match: '[-+]?(?:[0-9]*\\.[0-9]+|[0-9]+\\.)(?:[eE][-+]?[0-9]+)++',
      name: 'constant.numeric.float.real.decimal.dec.exponential.scientific'
    },
    floatNoExp: {
      match: '[-+]?(?:[0-9]*\\.[0-9]+|[0-9]+\\.)++',
      name: 'constant.numeric.float.real.decimal.dec'
    },
    glob: {
      patterns: [
        {include: '#globSimple'},
        {include: '#globSet'},
        {include: '#globBraces'}
      ]
    },
    globBraces: {
      patterns: [{include: '#globBracesSeq'}, {include: '#globBracesAlt'}]
    },
    globBracesAlt: {
      captures: {
        0: {
          patterns: [
            {include: '#globBracesSeq'},
            {
              captures: {0: {patterns: [{include: '#esc'}]}},
              match: '{(?:\\.?+(?:[^{},.\\\\]|\\\\.))*+}'
            },
            {include: '#esc'},
            {include: '#globSet'},
            {include: '#globSimple'},
            {
              captures: {
                1: {patterns: [{include: '#bracket'}]},
                2: {patterns: [{include: '#comma'}]}
              },
              match: '({|})|(,)'
            }
          ]
        }
      },
      match:
        '(?x)\n(?<char>[^\\s{,}\\\\]|\\\\[{,}\\\\]|\\g<braced>){0}\n(?<braced>{(?:[^{},\\\\]|\\\\.)*+}){0}\n(?<alt>\\g<char>*+,\\g<char>*+|\\g<char>++){0}\n(?<seq>{(?:-?\\d+\\.\\.-?\\d+|[a-zA-Z]\\.\\.[a-zA-Z])(?:\\.\\.-?\\d+)?}){0}\n(?<entry> \\g<char>*+ (?:\n\t\\g<seq>+\n\t|\n\t(?!\\g<braced>)\n\t{\n\t\t(?<braces>\n\t\t\t\\g<alt>*+\n\t\t\t(?:(?!\\g<braced>) { \\g<braces>*+ } | \\g<seq>++)\n\t\t\t\\g<alt>*+\n\t\t\t|\n\t\t\t\\g<alt>++\n\t\t)\n\t}\n) \\g<char>*+)',
      name: 'meta.brace-expansion.alternation'
    },
    globBracesSeq: {
      captures: {
        1: {patterns: [{include: 'etc#bracket'}]},
        2: {
          name: 'meta.range.numeric',
          patterns: [{include: '#dots'}, {include: '#intNoExp'}]
        },
        3: {
          name: 'meta.range.alphabetic',
          patterns: [
            {include: '#dots'},
            {match: '\\w', name: 'constant.character.letter'}
          ]
        },
        4: {
          name: 'meta.increment',
          patterns: [{include: '#dots'}, {include: '#intNoExp'}]
        },
        5: {patterns: [{include: 'etc#bracket'}]}
      },
      match:
        '({)(?:(-?\\d+\\.\\.-?\\d+)|([a-zA-Z]\\.\\.[a-zA-Z]))(\\.\\.-?\\d+)?(})',
      name: 'meta.brace-expansion.sequence'
    },
    globSet: {
      captures: {
        1: {
          name: 'brackethighlighter.square.punctuation.definition.character-class.set.begin'
        },
        2: {name: 'keyword.operator.logical.not'},
        3: {
          patterns: [
            {include: '#esc'},
            {
              captures: {
                1: {patterns: [{include: '#dash'}]},
                2: {name: 'constant.character.single'}
              },
              match: '(?!^|\\G)(-)(?!\\])(-)?'
            },
            {include: 'source.regexp.posix#charClass'},
            {include: 'source.regexp.posix#localeClasses'},
            {match: '.', name: 'constant.character.single'}
          ]
        },
        4: {
          name: 'brackethighlighter.square.punctuation.definition.character-class.set.end'
        }
      },
      match:
        '(?x)\n(\\[) (!|\\^)?\n(\n\t(?: [^\\\\\\[\\]]\n\t|   \\\\.\n\t|   \\[ (?::[!^]?\\w+:|\\..+?\\.|=.+?=) \\]\n\t)*+\n)(\\])',
      name: 'meta.character-class.set'
    },
    globSimple: {
      patterns: [
        {match: '\\*{2}', name: 'keyword.operator.glob.wildcard.globstar'},
        {match: '[*?]', name: 'keyword.operator.glob.wildcard'}
      ]
    },
    hex: {
      match: '[-+]?[A-Fa-f0-9]+',
      name: 'constant.numeric.integer.int.hexadecimal.hex'
    },
    hexNoSign: {
      match: '[A-Fa-f0-9]+',
      name: 'constant.numeric.integer.int.hexadecimal.hex'
    },
    int: {patterns: [{include: '#intExp'}, {include: '#intNoExp'}]},
    intExp: {
      match: '[-+]?[0-9]+[eE][-+]?[0-9]+',
      name: 'constant.numeric.integer.int.decimal.dec.exponential.scientific'
    },
    intNoExp: {
      match: '[-+]?[0-9]+',
      name: 'constant.numeric.integer.int.decimal.dec'
    },
    ip: {patterns: [{include: '#ipv6'}, {include: '#ipv4'}]},
    ipv4: {
      captures: {
        1: {patterns: [{include: '#dot'}]},
        2: {name: 'meta.cidr-notation'},
        3: {name: 'keyword.operator.assignment.cidr'},
        4: {patterns: [{include: '#intNoExp'}]}
      },
      match:
        '(?x) (?:\\G|^|(?<!\\.)\\b)\n(?!\\.)\n((?:\n\t\\.?\n\t(?: 25[0-5]    # 250-255\n\t|   2[0-4]\\d  # 200-249\n\t|   1\\d\\d    # 100-199\n\t|   [1-9]?\\d  # 0-99\n\t)\\b\n){4})\n\n# CIDR notation: “/[0-32]”\n((/)(3[0-2]|[12]?\\d)\\b)?\n\n(?=$|\\s|(?!\\.)\\b)',
      name: 'constant.numeric.other.ip-address.v4'
    },
    ipv6: {
      captures: {
        0: {
          patterns: [
            {
              captures: {
                1: {name: 'meta.zone-id'},
                2: {name: 'keyword.operator.assignment.zone-id'},
                3: {name: 'entity.other.zone-index'},
                4: {name: 'meta.cidr-notation'},
                5: {name: 'keyword.operator.assignment.cidr'},
                6: {patterns: [{include: '#intNoExp'}]}
              },
              match: '(?!$)((%)([^/%]+))?((/)([0-9]+))?$'
            },
            {include: '#colon'}
          ]
        }
      },
      match:
        '(?mix) (?:\\G|^|(?<!\\.|:|\\w))\n(?<dec>25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d){0}\n(?<hex>[A-F0-9]{1,4}){0}\n(?<v4>\\g<dec>(?:\\.\\g<dec>){3}){0}\n(?<v6>\\g<hex>:){0}\n\n# Address\n(?: \\g<v6>{7} (?:                               \\g<hex>      |:)\n|   \\g<v6>{6} (?:                   \\g<v4>|   :\\g<hex>      |:)\n|   \\g<v6>{5} (?:                  :\\g<v4>|(?::\\g<hex>){1,2}|:)\n|   \\g<v6>{4} (?:(?::\\g<hex>)?    :\\g<v4>|(?::\\g<hex>){1,3}|:)\n|   \\g<v6>{3} (?:(?::\\g<hex>){0,2}:\\g<v4>|(?::\\g<hex>){1,4}|:)\n|   \\g<v6>{2} (?:(?::\\g<hex>){0,3}:\\g<v4>|(?::\\g<hex>){1,5}|:)\n|   \\g<v6>    (?:(?::\\g<hex>){0,4}:\\g<v4>|(?::\\g<hex>){1,6}|:)\n|          (?::(?:(?::\\g<hex>){0,5}:\\g<v4>|(?::\\g<hex>){1,7}|:))\n) (?:(?<!:)\\b|(?<=:)(?!\\w|:))\n\n# Zone ID (RFC 4007): “%ne0”\n(?:\n\t%\n\t(?!\\$)\n\t[^\\s();"/]+\n)?\n\n# CIDR notation: “/[0-128]”\n(?:\n\t/\n\t(?: 12[0-8]   # 120-128\n\t|   1[01]\\d  # 100-119\n\t|   [1-9]?\\d # 0-99\n\t) \\b\n)?\n\n(?=$|\\s|[^.:%/\\s])',
      name: 'constant.numeric.other.ip-address.v6'
    },
    kolon: {match: ':', name: 'keyword.operator.assignment.key-value.colon'},
    mime: {
      captures: {
        1: {name: 'entity.name.type.standard.${1:/downcase}.media-type'},
        2: {name: 'entity.name.type.nonstandard.${2:/downcase}.media-type'},
        3: {name: 'entity.name.type.extension.media-type'},
        4: {name: 'punctuation.separator.slash.media-type'},
        5: {
          patterns: [
            {
              begin:
                '(?i)(?:^|\\G)(?:(([-a-z0-9_]+)(\\.))((?:[-a-z0-9_]+\\.)*+))?',
              beginCaptures: {
                1: {name: 'entity.other.tree.${2:/downcase}.media-type'},
                3: {name: 'punctuation.separator.dot.media-type'},
                4: {
                  patterns: [
                    {
                      captures: {
                        2: {name: 'punctuation.separator.dot.media-type'}
                      },
                      match: '([^.]+)(\\.)',
                      name: 'entity.other.subtree.${1:/downcase}.media-type'
                    }
                  ]
                }
              },
              contentName: 'entity.name.subtype.media-type',
              end: '((\\+)[-a-z0-9_.]+)?$',
              endCaptures: {
                1: {name: 'entity.other.suffix.media-type'},
                2: {name: 'punctuation.separator.plus.media-type'}
              }
            }
          ]
        },
        6: {
          name: 'meta.parameters.media-type',
          patterns: [
            {
              begin: '\\s*((;))\\s*([^;=]+)\\s*(=)[ \\t]*',
              beginCaptures: {
                1: {name: 'punctuation.delimiter.semicolon.media-type'},
                2: {name: 'sublimelinter.gutter-mark'},
                3: {name: 'variable.parameter.media-type'},
                4: {patterns: [{include: '#eql'}]}
              },
              end: '(?!\\G)',
              name: 'meta.parameter.media-type',
              patterns: [
                {
                  captures: {
                    1: {name: 'punctuation.definition.string.begin.media-type'},
                    2: {
                      patterns: [
                        {
                          match: '\\\\"',
                          name: 'constant.character.escape.quote.media-type'
                        }
                      ]
                    },
                    3: {name: 'punctuation.definition.string.end.media-type'}
                  },
                  match: '\\G(")((?:[^"\\\\]|\\\\")*+)(")',
                  name: 'string.quoted.double.media-type'
                },
                {
                  match: '\\G[^;\\r\\n]+',
                  name: 'string.unquoted.parameter.media-type'
                }
              ]
            }
          ]
        }
      },
      match:
        '(?xi) (?<!-|\\.)\\b\n(?: (application|audio|example|font|image|message|model|multipart|text|video)\n|   (chemical|drawing|magnus-internal|paleovu|xgl|inode(?=/(?:blockdevice|chardevice|directory|door|fifo|mount-point|socket|symlink)))\n|   (x-[-a-z0-9+_.]{1,125})\n) (/) (?![.+])([-a-z0-9+_.]{1,127})(?<![.+])\n\\b (?!-|\\.)\n((?:\n\t# LHS: “; name=”\n\t\\s* ; \\s* [^;=]+ \\s* = [ \\t]*\n\t\n\t# RHS\n\t(?: "(?:[^"\\\\]|\\\\")*+" # Quoted value\n\t|   (?=\\S)[^;\\r\\n]+     # Unquoted value\n\t)?\n)++)?',
      name: 'constant.other.media-type'
    },
    num: {patterns: [{include: '#float'}, {include: '#int'}]},
    op: {
      patterns: [
        {include: '#opBitAssign'},
        {include: '#opMathAssign'},
        {include: '#opBit'},
        {include: '#opFix'},
        {include: '#opCmp'},
        {include: '#opLog'},
        {include: '#opMath'}
      ]
    },
    opBit: {
      patterns: [
        {match: '\\^', name: 'keyword.operator.bitwise.xor'},
        {match: '~', name: 'keyword.operator.bitwise.not'},
        {match: '&', name: 'keyword.operator.bitwise.and'},
        {match: '\\|', name: 'keyword.operator.bitwise.or'},
        {match: '<<', name: 'keyword.operator.bitwise.shift.left'},
        {match: '>>>', name: 'keyword.operator.bitwise.shift.right.unsigned'},
        {match: '>>', name: 'keyword.operator.bitwise.shift.right.signed'}
      ]
    },
    opBitAssign: {
      patterns: [
        {match: '\\^=', name: 'keyword.operator.assignment.bitwise.xor'},
        {match: '~=', name: 'keyword.operator.assignment.bitwise.not'},
        {match: '&=', name: 'keyword.operator.assignment.bitwise.and'},
        {match: '\\|=', name: 'keyword.operator.assignment.bitwise.or'},
        {match: '<<=', name: 'keyword.operator.assignment.bitwise.shift.left'},
        {
          match: '>>>=',
          name: 'keyword.operator.assignment.bitwise.shift.right.unsigned'
        },
        {
          match: '>>=',
          name: 'keyword.operator.assignment.bitwise.shift.right.signed'
        }
      ]
    },
    opCmp: {
      patterns: [
        {
          match: '<=>',
          name: 'keyword.operator.logical.comparison.starship.spaceship'
        },
        {
          match: '<=',
          name: 'keyword.operator.logical.comparison.less-than-or-equal-to.lte'
        },
        {match: '<', name: 'keyword.operator.logical.comparison.less-than.lt'},
        {
          match: '>=',
          name: 'keyword.operator.logical.comparison.greater-than-or-equal-to.gte'
        },
        {
          match: '>',
          name: 'keyword.operator.logical.comparison.greater-than.gt'
        },
        {
          match: '===',
          name: 'keyword.operator.logical.comparison.equal-to.equals.equal.eql.eq.strict'
        },
        {
          match: '==',
          name: 'keyword.operator.logical.comparison.equal-to.equals.equal.eql.eq'
        },
        {
          match: '!==',
          name: 'keyword.operator.logical.comparison.not-equal-to.not-equal.unequal.neql.ne.strict'
        },
        {
          match: '!=',
          name: 'keyword.operator.logical.comparison.not-equal-to.not-equal.unequal.neql.ne'
        }
      ]
    },
    opFix: {
      patterns: [
        {match: '\\+{2}', name: 'keyword.operator.increment'},
        {match: '-{2}', name: 'keyword.operator.decrement'}
      ]
    },
    opLog: {
      patterns: [
        {match: '!!', name: 'keyword.operator.logical.boolean.cast'},
        {
          match: '!',
          name: 'keyword.operator.logical.boolean.not.negation.negate'
        },
        {match: '&&', name: 'keyword.operator.logical.boolean.and'},
        {match: '\\|{2}', name: 'keyword.operator.logical.boolean.or'},
        {match: '\\?{2}', name: 'keyword.operator.logical.boolean.or.nullish'}
      ]
    },
    opMath: {
      patterns: [
        {
          match: '\\*{2}|\\^',
          name: 'keyword.operator.arithmetic.exponentiation.exponent.exp.power'
        },
        {match: '\\+', name: 'keyword.operator.arithmetic.addition.add.plus'},
        {
          match: '\\*',
          name: 'keyword.operator.arithmetic.multiplication.multiply.times'
        },
        {match: '/', name: 'keyword.operator.arithmetic.division.divide'},
        {
          match: '%',
          name: 'keyword.operator.arithmetic.remainder.modulo.modulus.mod'
        },
        {
          match: '[-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－]',
          name: 'keyword.operator.arithmetic.subtraction.subtract.minus'
        }
      ]
    },
    opMathAssign: {
      patterns: [
        {
          match: '\\*{2}=|\\^=',
          name: 'keyword.operator.assignment.arithmetic.exponentiation.exponent.exp.power'
        },
        {
          match: '\\+=',
          name: 'keyword.operator.assignment.arithmetic.addition.add.plus'
        },
        {
          match: '\\*=',
          name: 'keyword.operator.assignment.arithmetic.multiplication.multiply.times'
        },
        {
          match: '/=',
          name: 'keyword.operator.assignment.arithmetic.division.divide'
        },
        {
          match: '%=',
          name: 'keyword.operator.assignment.arithmetic.remainder.modulo.modulus.mod'
        },
        {
          match: '[-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－]=',
          name: 'keyword.operator.assignment.arithmetic.subtraction.subtract.minus'
        }
      ]
    },
    semi: {match: ';', name: 'punctuation.delimiter.separator.semicolon'},
    str: {patterns: [{include: '#strDouble'}, {include: '#strSingle'}]},
    strDouble: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin'}},
      end: '"|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end'}},
      name: 'string.quoted.double',
      patterns: [{include: '#esc'}]
    },
    strSingle: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin'}},
      end: "'|(?=$)",
      endCaptures: {0: {name: 'punctuation.definition.string.end'}},
      name: 'string.quoted.single',
      patterns: [{include: '#esc'}]
    },
    tab: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {
                  match: '\\t',
                  name: 'punctuation.whitespace.leading.tab.hard-tab'
                }
              ]
            }
          },
          match: '^\\t+'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  match: '\\t',
                  name: 'punctuation.whitespace.trailing.tab.hard-tab'
                }
              ]
            }
          },
          match: '\\t+$'
        },
        {match: '\\t', name: 'punctuation.whitespace.tab.hard-tab'}
      ]
    },
    url: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.link.begin.url'},
            2: {name: 'constant.other.reference.link.underline.$3.url'},
            4: {name: 'punctuation.definition.link.end.url'}
          },
          match:
            "(?x)\n(\"|'|\\b)\n(\n\t# Not part of official URL schemes, included here for convenience\n\t(?: (?:jdbc|mvn|odbc|view-source) :)?\n\n\t# Common protocols/URI schemes\n\t( https?\n\t| s?ftp\n\t| ftps\n\t| file\n\t| wss?\n\t| (?:git|svn) (?:\\+(?:https?|ssh))?\n\t| ssh\n\t\n\t# Less common URI schemes\n\t| aaas?\n\t| acap\n\t| adiumxtra\n\t| admin\n\t| afp\n\t| app\n\t| atom\n\t| aurora\n\t| aw\n\t| beshare\n\t| bolo\n\t| cassandra\n\t| chrome(?:-extension)?\n\t| coaps?\n\t| cockroach\n\t| content\n\t| couchbase\n\t| crid\n\t| cvs\n\t| dict\n\t| dns\n\t| docker\n\t| ed2k\n\t| facetime\n\t| feed\n\t| finger\n\t| fish\n\t| gemini\n\t| github(?:-(?:mac|linux|windows))?\n\t| gizmoproject\n\t| gopher\n\t| go\n\t| hcp\n\t| imap\n\t| irc[6s]?\n\t| issue\n\t| keyparc\n\t| lastfm\n\t| ldaps?\n\t| man(?:-?page)?\n\t| maria(?:db)?\n\t| market\n\t| message\n\t| mms\n\t| modern-?sqlite\n\t| mongodb\n\t| ms-help\n\t| mssql\n\t| mumble\n\t| my?sql\n\t| netezza\n\t| nfs\n\t| ni\n\t| nntp\n\t| notes\n\t| oleodbc\n\t| oracle\n\t| payto\n\t| pgsql\n\t| pg\n\t| pop\n\t| postgres(?:ql)?\n\t| postgresql\n\t| presto(?:dbs?|s)\n\t| reload\n\t| resource\n\t| res\n\t| rmi\n\t| rsync\n\t| rtmf?p\n\t| rtmp\n\t| s3\n\t| saphana\n\t| secondlife\n\t| sgn\n\t| shttp\n\t| slack\n\t| smb\n\t| snmp\n\t| soldat\n\t| sqlite3?\n\t| sqlserver\n\t| steam\n\t| stratum\\+[a-z]+\n\t| stuns?\n\t| teamspeak\n\t| telnet\n\t| turns?\n\t| txmt\n\t| udp\n\t| unreal\n\t| ut2004\n\t| ventrilo\n\t| vnc\n\t| wais\n\t| web\\+[a-z]+\n\t| webcal\n\t| wtai\n\t| wyciwyg\n\t| xmpp\n\t| xri\n\t| z39\\.50[rs]\n\t| zoommtg\n\t\n\t# User-defined/arbitrary URI scheme starting with `x-`\n\t| x(?:-[a-z][a-z0-9]*)++\n\t) ://\n\t\n\t# Path specifier\n\t(?:\n\t\t(?! \\#\\w*\\#)\n\t\t(?: [-:\\@\\w.,~%+_/?=&\\#;|!])\n\t)+\n\t\n\t# Don't include trailing punctuation\n\t(?<![-.,?:\\#;])\n)\n(\\1)"
        },
        {
          captures: {
            1: {name: 'punctuation.definition.link.begin.url'},
            2: {name: 'constant.other.reference.link.underline.mailto.url'},
            3: {name: 'punctuation.separator.delimiter.scheme.url'},
            4: {name: 'punctuation.definition.link.end.url'}
          },
          match:
            '(?x)\n("|\'|\\b)\n(\n\tmailto (:)\n\t(?:\n\t\t(?! \\#\\w*\\#)\n\t\t(?: [-:@\\w.,~%+_/?=&\\#;|!])\n\t)+\n\t(?<![-.,?:\\#;])\n)\n(\\1)'
        }
      ]
    },
    version: {
      captures: {
        1: {name: 'punctuation.definition.version-string.begin'},
        10: {name: 'punctuation.delimiter.separator.plus'},
        11: {name: 'meta.build-metadata', patterns: [{include: '#dot'}]},
        12: {name: 'punctuation.definition.version-string.end'},
        2: {name: 'punctuation.definition.version-prefix'},
        3: {name: 'meta.major.release-number'},
        4: {patterns: [{include: '#dot'}]},
        5: {name: 'meta.minor.release-number'},
        6: {patterns: [{include: '#dot'}]},
        7: {name: 'meta.patch.release-number'},
        8: {patterns: [{include: '#dash'}]},
        9: {
          name: 'meta.prerelease.release-number',
          patterns: [{include: '#dot'}]
        }
      },
      match:
        '(?x)\n("|\'|\\b)\n([vV]?)\n(0 | [1-9]\\d*) (\\.)\n(0 | [1-9]\\d*) (\\.)\n(0 | [1-9]\\d*)\n(?:\n\t(-)\n\t(\n\t\t(?: 0\n\t\t| [1-9]\\d*\n\t\t| \\d*[a-zA-Z-][0-9a-zA-Z-]*\n\t\t)\n\t\t\n\t\t(?:\n\t\t\t\\.\n\t\t\t(?: 0\n\t\t\t| [1-9]\\d*\n\t\t\t| \\d*[a-zA-Z-][0-9a-zA-Z-]*\n\t\t\t)\n\t\t)*\n\t)\n)?\n(?:\n\t(\\+)\n\t(\n\t\t[0-9a-zA-Z-]+\n\t\t(?:\\.[0-9a-zA-Z-]+)*\n\t)\n)?\n(\\1)',
      name: 'constant.other.version-string'
    }
  },
  scopeName: 'etc'
}

export default grammar
