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
  dependencies: [
    'source.ditroff',
    'source.gremlin',
    'source.ideal',
    'source.pic'
  ],
  extensions: [
    '.1',
    '.1',
    '.1in',
    '.1in',
    '.1m',
    '.1m',
    '.1x',
    '.1x',
    '.2',
    '.2',
    '.3',
    '.3',
    '.3in',
    '.3in',
    '.3m',
    '.3m',
    '.3p',
    '.3p',
    '.3pm',
    '.3pm',
    '.3qt',
    '.3qt',
    '.3x',
    '.3x',
    '.4',
    '.4',
    '.5',
    '.5',
    '.6',
    '.6',
    '.7',
    '.7',
    '.8',
    '.8',
    '.9',
    '.9',
    '.man',
    '.man',
    '.mdoc',
    '.mdoc',
    '.me',
    '.roff',
    '.tmac'
  ],
  injections: {
    'L:meta.device-control.roff, L:meta.function.request.transparent-output & source.embedded.ditroff':
      {patterns: [{match: "[.']"}, {include: '#escapes-copymode'}]},
    'L:meta.function.request.external-command.*.roff source.embedded.shell': {
      patterns: [{include: '#escapes'}]
    },
    'L:text.roff': {patterns: [{include: '#c0'}]}
  },
  names: [
    'groff',
    'man',
    'man-page',
    'man-page',
    'manpage',
    'mdoc',
    'nroff',
    'roff',
    'roff-manpage',
    'troff'
  ],
  patterns: [
    {
      begin: '\\A(?=x\\s*T\\s+(?:[a-z][-a-zA-Z0-9]*)\\s*$)',
      end: '(?=A)B',
      name: 'source.embedded.ditroff',
      patterns: [{include: 'source.ditroff'}]
    },
    {
      begin: '\\A(?=X\\s+(?:495|crt|hp|impr|ps)(?:\\s+\\d+){3}[ \\t]*$)',
      end: '(?=A)B',
      name: 'source.embedded.context',
      patterns: [{include: 'source.context'}]
    },
    {include: '#main'}
  ],
  repository: {
    '2-part-string': {
      captures: {
        1: {
          name: 'punctuation.definition.string.begin.roff',
          patterns: [{include: '#c0'}]
        },
        2: {
          name: 'meta.segment.1.left.roff',
          patterns: [{include: '#escapes'}]
        },
        3: {
          name: 'punctuation.definition.string.middle.roff',
          patterns: [{include: '#c0'}]
        },
        4: {
          name: 'meta.segment.2.right.roff',
          patterns: [{include: '#escapes'}]
        },
        5: {
          name: 'punctuation.definition.string.end.roff',
          patterns: [{include: '#c0'}]
        }
      },
      match: '\\G(.)((?:(?!\\1).)*)(\\1)((?:(?!\\1).)*)(\\1)',
      name: 'string.quoted.other.arbitrary-delimiter.2-part.roff'
    },
    '3-part-title': {
      captures: {
        1: {
          name: 'punctuation.definition.string.outer.begin.roff',
          patterns: [{include: '#c0'}]
        },
        2: {
          name: 'meta.segment.1.left.roff',
          patterns: [{include: '#escapes'}]
        },
        3: {
          name: 'punctuation.definition.string.inner.begin.roff',
          patterns: [{include: '#c0'}]
        },
        4: {
          name: 'meta.segment.2.centre.roff',
          patterns: [{include: '#escapes'}]
        },
        5: {
          name: 'punctuation.definition.string.inner.end.roff',
          patterns: [{include: '#c0'}]
        },
        6: {
          name: 'meta.segment.3.right.roff',
          patterns: [{include: '#escapes'}]
        },
        7: {
          name: 'punctuation.definition.string.outer.end.roff',
          patterns: [{include: '#c0'}]
        }
      },
      match:
        '\\G[ \\t]*(.)((?:(?!\\1).)*)(\\1)((?:(?!\\1).)*)(\\1)((?:(?!\\1).)*)(\\1)',
      name: 'string.quoted.other.arbitrary-delimiter.3-part.roff'
    },
    'alternating-fonts': {
      patterns: [
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(BI)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-bold'},
            {include: '#even-italic-after-bold'},
            {include: '#even-italic'},
            {include: '#bridge-escapes'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(BR)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-bold'},
            {include: '#even-roman-after-bold'},
            {include: '#even-roman'},
            {include: '#bridge-escapes'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(IB)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-italic'},
            {include: '#even-bold-after-italic'},
            {include: '#even-bold'},
            {include: '#bridge-escapes'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(IR)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-italic'},
            {include: '#even-roman-after-italic'},
            {include: '#even-roman'},
            {include: '#bridge-escapes'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(RB)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-roman'},
            {include: '#even-bold-after-roman'},
            {include: '#even-bold'},
            {include: '#bridge-escapes'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(RI)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\")',
          patterns: [
            {include: '#odd-roman'},
            {include: '#even-italic-after-roman'},
            {include: '#even-italic'},
            {include: '#bridge-escapes'}
          ]
        }
      ]
    },
    arithmetic: {
      patterns: [
        {include: '#escapes'},
        {
          captures: {
            1: {name: 'punctuation.arithmetic.begin.roff'},
            2: {patterns: [{include: '#arithmetic'}]},
            3: {name: 'punctuation.arithmetic.end.roff'}
          },
          match: '(\\()(.*?)(\\))',
          name: 'meta.brackets.roff'
        },
        {include: '#number'},
        {match: '<\\?', name: 'keyword.operator.minimum.gnu.roff'},
        {match: '>\\?', name: 'keyword.operator.maximum.gnu.roff'},
        {match: '[-/+*%]', name: 'keyword.operator.arithmetic.roff'},
        {match: ':|&|[<=>]=?', name: 'keyword.operator.logical.roff'},
        {match: '\\|', name: 'keyword.operator.absolute.roff'},
        {
          captures: {
            1: {patterns: [{include: '#units'}]},
            2: {name: 'punctuation.separator.semicolon.roff'}
          },
          match: '(?:\\G|(?<=^|\\())([CDMPTcimnpstuvz])(;)',
          name: 'meta.scaling-indicator.gnu.roff'
        }
      ]
    },
    'bold-first': {
      patterns: [
        {
          begin: '\\G[ \\t]*(?!")(?=(?:[^\\s\\\\]|\\\\(?!E?").)+)',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=\\s|$)|(?=\\\\E?")',
          name: 'markup.bold.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {
            0: {name: 'string.quoted.double.empty.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'},
            2: {name: 'punctuation.definition.string.end.roff'}
          },
          match: '(")(")',
          name: 'markup.bold.roff'
        },
        {
          begin: '\\G[ \\t]*(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'string.quoted.double.roff',
          end: '((?:"")*)"(?!")|(?<!\\\\)(?:$|(?!R)\\R)|(?=\\\\E?")',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.roff'},
            1: {
              name: 'markup.bold.roff',
              patterns: [{include: '#string-escapes'}]
            }
          },
          name: 'markup.bold.roff',
          patterns: [{include: '#string-escapes'}]
        },
        {include: '#escapes'},
        {include: '#string'}
      ]
    },
    'bold-italic-first': {
      patterns: [
        {
          begin: '\\G[ \\t]*(?!")(?=(?:[^\\s\\\\]|\\\\(?!E?").)+)',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=\\s|$)|(?=\\\\E?")',
          name: 'markup.bold.italic.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {
            0: {name: 'string.quoted.double.empty.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'},
            2: {name: 'punctuation.definition.string.end.roff'}
          },
          match: '(")(")',
          name: 'markup.bold.italic.roff'
        },
        {
          begin: '\\G[ \\t]*(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'string.quoted.double.roff',
          end: '((?:"")*)"(?!")|(?<!\\\\)(?:$|(?!R)\\R)|(?=\\\\E?")',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.roff'},
            1: {
              name: 'markup.bold.italic.roff',
              patterns: [{include: '#string-escapes'}]
            }
          },
          name: 'markup.bold.italic.roff',
          patterns: [{include: '#string-escapes'}]
        },
        {include: '#escapes'},
        {include: '#string'}
      ]
    },
    'bold-italic-word': {
      match: '\\S+?(?=\\\\|$|\\s)',
      name: 'markup.bold.italic.roff'
    },
    'bold-word': {match: '\\S+?(?=\\\\|$|\\s)', name: 'markup.bold.roff'},
    'bridge-escapes': {
      patterns: [
        {
          begin: '[ \\t]+(\\\\)$(?!R)\\R?',
          beginCaptures: {1: {name: 'punctuation.definition.escape.roff'}},
          end: '^',
          name: 'constant.character.escape.newline.roff'
        },
        {
          begin: '(\\\\)$(?!R)\\R?',
          beginCaptures: {1: {name: 'punctuation.definition.escape.roff'}},
          end: '^[ \\t]*',
          name: 'constant.character.escape.newline.roff'
        }
      ]
    },
    c0: {
      patterns: [
        {match: '\\x02', name: 'punctuation.c0.ctrl-char.start-of-text.roff'},
        {match: '\\x03', name: 'punctuation.c0.ctrl-char.end-of-text.roff'},
        {
          match: '\\x04',
          name: 'punctuation.c0.ctrl-char.end-of-transmission.roff'
        },
        {match: '\\x05', name: 'punctuation.c0.ctrl-char.enquiry.roff'},
        {match: '\\x06', name: 'punctuation.c0.ctrl-char.acknowledge.roff'},
        {match: '\\a', name: 'punctuation.c0.ctrl-char.alarm.bell.roff'},
        {match: '\\f', name: 'punctuation.whitespace.form-feed.roff'},
        {match: '\\x7F', name: 'punctuation.c0.ctrl-char.delete.roff'}
      ]
    },
    'continuous-newline': {
      begin: '(\\\\)?(\\\\)$(?!R)\\R?',
      beginCaptures: {
        0: {name: 'constant.character.escape.newline.roff'},
        1: {name: 'punctuation.definition.concealed.escape.backslash.roff'},
        2: {name: 'punctuation.definition.escape.roff'}
      },
      end: "^(?:[.'])?"
    },
    definition: {
      patterns: [
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?((?:de|am)i?1?)\\s+(\\S+?)?\\s*(\\\\E?["#].*)?$',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.function.roff'},
            4: {
              name: 'entity.name.function.roff',
              patterns: [{include: '#escapes'}]
            },
            5: {patterns: [{include: '#escapes'}]}
          },
          end: '^(?:[ \\t]*\\x5C{2})?\\.[ \\t]*\\.',
          endCaptures: {0: {name: 'punctuation.definition.request.roff'}},
          name: 'meta.macro.definition.$3.roff',
          patterns: [{include: '$self'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?((?:de|am)i?1?)\\s+(\\S+)\\s*("[^"]+"?|\\S+?(?=\\s|\\\\E?["#]))?(.*)$',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.function.roff'},
            4: {
              name: 'entity.name.function.roff',
              patterns: [{include: '#escapes'}]
            },
            5: {
              name: 'keyword.control.terminator.roff',
              patterns: [{include: '#string'}]
            },
            6: {patterns: [{include: '#param-group'}]}
          },
          end: '^(\\.)[ \\t]*((\\5)(?=$|\\s|\\\\(?:$|")))',
          endCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'keyword.control.terminator.roff'},
            3: {patterns: [{include: '#string'}]}
          },
          name: 'meta.macro.definition.with-terminator.$3.roff',
          patterns: [{include: '$self'}]
        }
      ]
    },
    eqn: {
      patterns: [
        {
          match:
            '(?x)\\b\n(DELTA|GAMMA|LAMBDA|OMEGA|PHI|PI|PSI|SIGMA|THETA|UPSILON|XI|alpha|beta|chi\n|delta|epsilon|eta|gamma|iota|kappa|lambda|mu|nu|omega|omicron|phi|pi|psi\n|rho|sigma|tau|theta|upsilon|xi|zeta)\\b',
          name: 'constant.language.greek-letter.eqn.roff'
        },
        {
          match:
            '\\b(and|arc|cos|cosh|det|exp|for|if|Im|lim|ln|log|max|min|Re|sin|sinh|tan|tanh)\\b',
          name: 'constant.language.math-function.eqn.roff'
        },
        {
          match:
            '(?x)\n(?:[><=!]=|\\+-|->|<-|<<|>>|\\.{3}|,\\.+,|[-+=](?!\\d)|[*/<>])\n|\\b(?:approx|cdot|ceiling|del|grad|half|inf|inter|int|floor\n|nothing|partial|prime|prod|sum|times|union)\\b',
          name: 'constant.character.math-symbol.eqn.roff'
        },
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.bracket.curly.begin.eqn.roff'}
          },
          end: '}|(?=\\.EN)',
          endCaptures: {
            0: {name: 'punctuation.section.bracket.curly.end.eqn.roff'}
          },
          patterns: [{include: '#eqn'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.spacing.eqn.roff'},
            2: {name: 'punctuation.separator.delimiter.comma.eqn.roff'}
          },
          match: '(~|\\^)|(,)'
        },
        {
          begin: '\\b([nts]?define)\\s*(\\S+)\\s*(\\S)',
          beginCaptures: {
            1: {name: 'storage.type.function.definition.eqn.roff'},
            2: {name: 'entity.name.function.eqn.roff'},
            3: {name: 'punctuation.section.definition.begin.eqn.roff'}
          },
          end: '((?:(?!\\3).)*+)(\\3)|(?=\\.EN)',
          endCaptures: {
            1: {patterns: [{include: '#eqn'}]},
            2: {name: 'punctuation.section.definition.end.eqn.roff'}
          },
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.section.bracket.curly.begin.eqn.roff'},
                2: {patterns: [{include: '#eqn'}, {include: '#main'}]},
                3: {name: 'punctuation.section.bracket.curly.end.eqn.roff'}
              },
              match: '(\\{)([^}]*)(\\})'
            },
            {include: '#eqn'},
            {include: '#main'}
          ]
        },
        {
          begin: '\\b(ifdef)\\s*(\\S+)\\s*(\\S)',
          beginCaptures: {
            1: {name: 'keyword.control.flow.if-defined.eqn.roff'},
            2: {name: 'entity.name.function.eqn.roff'},
            3: {name: 'punctuation.section.definition.begin.eqn.roff'}
          },
          end: '((?:(?!\\3).)*+)(\\3)|(?=\\.EN)',
          endCaptures: {
            1: {patterns: [{include: '#eqn'}]},
            2: {name: 'punctuation.section.definition.end.eqn.roff'}
          },
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.section.bracket.curly.begin.eqn.roff'},
                2: {patterns: [{include: '#eqn'}, {include: '#main'}]},
                3: {name: 'punctuation.section.bracket.curly.end.eqn.roff'}
              },
              match: '(\\{)([^}]*)(\\})'
            },
            {include: '#eqn'},
            {include: '#main'}
          ]
        },
        {
          match:
            '(?x)\\b\n(above|back|bar|bold|ccol|col|cpile|delim|dot|dotdot|down|dyad|fat|font|from\n|fwd|gfont|gsize|hat|italic|lcol|left|lineup|lpile|mark|matrix|over|pile\n|rcol|right|roman|rpile|size|sqrt|sub|sup|tilde|to|under|up|vec)\\b',
          name: 'keyword.language.eqn.roff'
        },
        {
          match:
            '(?x)\\b\n(accent|big|chartype|smallover|type|vcenter|uaccent|split|nosplit\n|opprime|special|include|ifdef|undef|g[rb]font|space)\\b',
          name: 'keyword.language.eqn.gnu.roff'
        },
        {
          match:
            '(?x)\\b\n(Alpha|Beta|Chi|Delta|Epsilon|Eta|Gamma|Iota|Kappa|Lambda|Mu|Nu\n|Omega|Omicron|Phi|Pi|Psi|Rho|Sigma|Tau|Theta|Upsilon|Xi|Zeta\n|ldots|dollar)\\b',
          name: 'constant.language.eqn.gnu.roff'
        },
        {
          captures: {
            1: {name: 'storage.type.var.eqn.roff'},
            2: {name: 'variable.other.mathml.eqn.roff'}
          },
          match:
            '(?x)\\b(set)[ \\t]+\n(accent_width|axis_height|baseline_sep|big_op_spacing[1-5]|body_depth|body_height|column_sep\n|default_rule_thickness|delimiter_factor|delimiter_shortfall|denom[12]|draw_lines|fat_offset\n|matrix_side_sep|medium_space|minimum_size|nroff|null_delimiter_space|num[12]|over_hang\n|script_space|shift_down|su[bp]_drop|sub[12]|sup[1-3]|thick_space|thin_space|x_height)\\b',
          name: 'meta.set-variable.eqn.gnu.roff'
        },
        {
          match: '(?![\\d\\\\"])[^-,!.{}\\[\\]*/^+<=>~\\s"]+',
          name: 'string.unquoted.parameter.eqn.roff'
        },
        {
          captures: {
            1: {name: 'constant.language.boolean.logical.true.eqn.roff'},
            2: {name: 'constant.language.boolean.logical.false.eqn.roff'}
          },
          match: '(?<=delim)\\s*(?:(on)|(off))\\b'
        },
        {include: '#escapes'},
        {include: '#number'},
        {include: '#string'}
      ]
    },
    escapes: {
      patterns: [{include: '#escapes-copymode'}, {include: '#escapes-full'}]
    },
    'escapes-clipped': {
      patterns: [
        {
          begin: '\\\\E?f(?:[I2]|\\(CI|\\[\\s*(?:[I2]|CI)\\s*\\])',
          beginCaptures: {0: {patterns: [{include: '#escapes'}]}},
          end: '$|(?=\\\\E?f[\\[A-Za-z0-9])',
          patterns: [
            {include: '#escaped-newline'},
            {include: '$self'},
            {include: '#italic-word'}
          ]
        },
        {
          begin: '\\\\E?f(?:[B3]|\\(CB|\\[\\s*(?:[B3]|CB)\\s*\\])',
          beginCaptures: {0: {patterns: [{include: '#escapes'}]}},
          end: '$|(?=\\\\E?f[\\[A-Za-z0-9])',
          patterns: [
            {include: '#escaped-newline'},
            {include: '$self'},
            {include: '#bold-word'}
          ]
        },
        {
          begin: '\\\\E?f(?:4|\\(BI|\\[\\s*BI\\s*\\])',
          beginCaptures: {0: {patterns: [{include: '#escapes'}]}},
          end: '$|(?=\\\\E?f[\\[A-Za-z0-9])',
          patterns: [
            {include: '#escaped-newline'},
            {include: '$self'},
            {include: '#bold-italic-word'}
          ]
        },
        {
          begin: '\\\\E?f(?:\\(C[WR]|\\[\\s*C[WR]\\s*\\])',
          beginCaptures: {0: {patterns: [{include: '#escapes'}]}},
          end: '$|(?=\\\\E?f[\\[A-Za-z0-9])',
          patterns: [
            {include: '#escaped-newline'},
            {include: '$self'},
            {include: '#monospace-word'}
          ]
        }
      ]
    },
    'escapes-copymode': {
      patterns: [
        {
          match: '(\\\\+?)(?=\\1\\S)',
          name: 'punctuation.definition.concealed.escape.backslash.roff'
        },
        {
          begin: '(?:(?:(?<=\\n)\\G|^)(\\.|\'+)\\s*)?(\\\\E?")',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.roff'},
            2: {name: 'punctuation.definition.comment.roff'}
          },
          end: '$',
          name: 'comment.line.roff'
        },
        {
          begin: "(?:(?:(?<=\\n)\\G|^)(\\.|'+)\\s*)?(\\\\E?#).*$(?!R)\\R?",
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.roff'},
            2: {name: 'punctuation.definition.comment.roff'}
          },
          end: '^',
          name: 'comment.line.number-sign.gnu.roff'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.roff'}},
          match: "(?:(?<=\\n)\\G|^)(\\.|'+)[ \\t]*$",
          name: 'comment.empty.roff'
        },
        {include: '#continuous-newline'},
        {include: '#register-expansion'},
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))\\\\',
          name: 'constant.character.escape.backslash.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))t',
          name: 'constant.character.escape.tab.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))a',
          name: 'constant.character.escape.leader-char.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))\\.',
          name: 'constant.character.escape.dot.roff'
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))\\*(\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.interpolate-string.gnu.roff',
          patterns: [{include: '#long-name'}]
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            10: {name: 'punctuation.definition.escape.roff'},
            11: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            7: {name: 'entity.name.roff'},
            8: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            9: {name: 'punctuation.definition.escape.roff'}
          },
          match:
            '((?:((\\\\)E)|(\\\\))\\*(\\())(\\S{2})|((?:((\\\\)E)|(\\\\))\\*)(\\S)',
          name: 'constant.character.escape.function.interpolate-string.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))\\$\\d)',
          name: 'constant.character.escape.function.interpolate-argument.roff'
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))[Mm](\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'variable.parameter.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.set-colour.gnu.roff',
          patterns: [{include: '#long-params'}]
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            10: {name: 'punctuation.definition.escape.roff'},
            11: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            7: {name: 'entity.name.roff'},
            8: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            9: {name: 'punctuation.definition.escape.roff'}
          },
          match:
            '((?:((\\\\)E)|(\\\\))[Mm](\\())(\\S{2})|((?:((\\\\)E)|(\\\\))[Mm])(\\S)',
          name: 'constant.character.escape.function.set-colour.gnu.roff'
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))s([-+])?(\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'keyword.operator.arithmetic.roff'},
            6: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'variable.parameter.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.point-size.gnu.roff',
          patterns: [{include: '#long-params'}]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))s([-+])?)((.))',
          beginCaptures: {
            1: {name: 'entity.name.function.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'keyword.operator.arithmetic.roff'},
            6: {name: 'string.other.roff'},
            7: {name: 'punctuation.definition.begin.roff'}
          },
          contentName: 'variable.parameter.roff',
          end: '(\\6)|(?<!\\\\)(?=$)',
          endCaptures: {
            0: {name: 'string.other.roff'},
            1: {name: 'punctuation.definition.end.roff'}
          },
          name: 'constant.character.escape.function.point-size.gnu.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))(?!s[-+]?\\(?[-+]?\\d)[ABRZ])((.))',
          beginCaptures: {
            1: {name: 'entity.name.function.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'string.other.roff'},
            6: {name: 'punctuation.definition.begin.roff'}
          },
          contentName: 'string.other.roff',
          end: '(\\6)|(?<!\\\\)(?=$)',
          endCaptures: {
            0: {name: 'string.other.roff'},
            1: {name: 'punctuation.definition.end.roff'}
          },
          name: 'constant.character.escape.function.check-identifier.gnu.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'constant.numeric.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))O([0-4]))',
          name: 'constant.character.escape.internal.gnu.roff'
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))O(5)(\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'constant.numeric.roff'},
            6: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'string.unquoted.filename.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.internal.stderr-write-file.gnu.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))[VY](\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.interpolate-variable.gnu.roff',
          patterns: [{include: '#long-name'}]
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            10: {name: 'punctuation.definition.escape.roff'},
            11: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            7: {name: 'entity.name.roff'},
            8: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            9: {name: 'punctuation.definition.escape.roff'}
          },
          match:
            '((?:((\\\\)E)|(\\\\))[VY](\\())(\\S{2})|((?:((\\\\)E)|(\\\\))[VY])(\\S)',
          name: 'constant.character.escape.function.interpolate-variable.gnu.roff'
        },
        {
          captures: {
            1: {
              name: 'constant.character.escape.embed-diversion.start.gnu.roff'
            },
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.script.roff'},
            6: {
              name: 'string.interpolated.roff',
              patterns: [{include: '$self'}]
            },
            7: {
              name: 'constant.character.escape.embed-diversion.start.gnu.roff'
            },
            8: {name: 'punctuation.definition.escape.roff'},
            9: {name: 'punctuation.definition.script.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))(\\?))(.*?)((\\\\)(\\?))'
        },
        {
          captures: {
            1: {name: 'variable.language.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))\\$[*@^])',
          name: 'constant.character.escape.function.concatenated-arguments.gnu.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))\\$(\\())(\\S{2})',
          name: 'constant.character.escape.function.interpolate-argument.gnu.roff'
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))\\$(\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'variable.parameter.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.interpolate-argument.gnu.roff',
          patterns: [{include: '#long-name'}]
        },
        {include: '#c0'}
      ]
    },
    'escapes-full': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.roff'}},
          match: '(\\\\)E?e',
          name: 'constant.character.escape.current-escape-char.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))´',
          name: 'constant.character.escape.acute-accent.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))`',
          name: 'constant.character.escape.grave-accent.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))-',
          name: 'constant.character.escape.minus.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\)) ',
          name: 'constant.character.escape.space.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))0',
          name: 'constant.character.escape.space.digit-width.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))\\|',
          name: 'constant.character.escape.space.one-sixth-em.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))\\^',
          name: 'constant.character.escape.space.one-twelfth-em.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))&',
          name: 'constant.character.escape.zero-width-marker.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))%',
          name: 'constant.character.escape.hyphenation-char.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))c',
          name: 'constant.character.escape.connect.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))d',
          name: 'constant.character.escape.downwards.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))p',
          name: 'constant.character.escape.spread-line.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))r',
          name: 'constant.character.escape.reverse.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))u',
          name: 'constant.character.escape.upwards.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.brace.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]}
          },
          match: '(?:((\\\\)E)|(\\\\))(\\()(\\S{2})',
          name: 'constant.character.escape.function.named-char.roff'
        },
        {
          begin: '(?:((\\\\)E)|(\\\\))(\\[)',
          beginCaptures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          end: '(\\S*?)(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {patterns: [{include: '#long-params'}]},
            2: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.named-char.gnu.roff',
          patterns: [
            {include: '#long-params'},
            {
              match: '(?:[^\\s\\]\\\\]|\\\\(?!E?["#]).)+',
              name: 'variable.parameter.roff'
            }
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'constant.character.escape.conditional.block.roff'},
            3: {name: 'punctuation.section.conditional.begin.roff'}
          },
          match: "(?:(?:^|\\G)(\\.|'+)[ \\t]*)?(\\\\\\{(?:\\\\(?=(?!R)\\R|$))?)"
        },
        {
          captures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'constant.character.escape.conditional.block.roff'},
            3: {name: 'punctuation.section.conditional.end.roff'}
          },
          match:
            "(?:(?:^|\\G)(\\.|'+)[ \\t]*)?((\\\\\\}(?:\\\\(?=(?!R)\\R|$))?))"
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))X)(.)',
          beginCaptures: {
            1: {name: 'entity.name.function.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {
              name: 'punctuation.section.embedded.begin.roff',
              patterns: [{include: '#c0'}]
            }
          },
          end: '(.*?)(?:(\\5)|(?<!\\\\)(?=$))',
          endCaptures: {
            1: {
              name: 'source.embedded.ditroff',
              patterns: [{include: 'source.ditroff#xCommands'}]
            },
            2: {
              name: 'punctuation.section.embedded.end.roff',
              patterns: [{include: '#c0'}]
            }
          },
          name: 'meta.device-control.roff',
          patterns: [
            {
              captures: {
                0: {patterns: [{include: 'source.ditroff#xCommands'}]}
              },
              match: '.+',
              name: 'source.embedded.ditroff'
            },
            {include: '#escapes'}
          ]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))[bCDhHSlLovwxXN])((.))',
          beginCaptures: {
            1: {name: 'entity.name.function.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'string.other.roff'},
            6: {
              name: 'punctuation.definition.begin.roff',
              patterns: [{include: '#c0'}]
            }
          },
          contentName: 'string.other.roff',
          end: '(\\6)|(?<!\\\\)(?=$)',
          endCaptures: {
            0: {name: 'string.other.roff'},
            1: {
              name: 'punctuation.definition.end.roff',
              patterns: [{include: '#c0'}]
            }
          },
          name: 'constant.character.escape.function.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: '(?:((\\\\)E)|(\\\\))!',
          beginCaptures: {
            0: {name: 'constant.character.escape.transparent-line.roff'},
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.throughput.roff',
          patterns: [{include: '#escapes-copymode'}]
        },
        {
          captures: {
            0: {name: 'entity.name.roff'},
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))f[RP1]',
          name: 'constant.character.escape.font.roff'
        },
        {
          begin:
            '((?:((\\\\)E)|(\\\\))f(?:[I2]|(\\()CI|(\\[)\\s*(?:[I2]|CI)\\s*(\\])))',
          beginCaptures: {
            0: {name: 'constant.character.escape.font.roff'},
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'},
            6: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          end: "(?=\\\\E?f[\\[A-Za-z0-9])|^(?=[.']\\s*(?:(?:SH|SS|P|[HILPT]P|di)\\b)|\\.)",
          patterns: [{include: '$self'}, {include: '#italic-word'}]
        },
        {
          begin:
            '((?:((\\\\)E)|(\\\\))f(?:[B3]|(\\()CB|(\\[)\\s*(?:[B3]|CB)\\s*(\\])))',
          beginCaptures: {
            0: {name: 'constant.character.escape.font.roff'},
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'punctuation.section.begin.bracket.square.roff'},
            7: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          end: "(?=\\\\E?f[\\[A-Za-z0-9])|^(?=[.']\\s*(?:(?:SH|SS|P|[HILPT]P|di)\\b)|\\.)",
          patterns: [{include: '$self'}, {include: '#bold-word'}]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))f(?:4|(\\()BI|(\\[)\\s*BI\\s*(\\])))',
          beginCaptures: {
            0: {name: 'constant.character.escape.font.roff'},
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'punctuation.section.begin.bracket.square.roff'},
            7: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          end: "(?=\\\\E?f[\\[A-Za-z0-9])|^(?=[.']\\s*(?:(?:SH|SS|P|[HILPT]P|di)\\b)|\\.)",
          patterns: [{include: '$self'}, {include: '#bold-italic-word'}]
        },
        {
          begin:
            '((?:((\\\\)E)|(\\\\))f(?:(\\()C[WR]|(\\[)\\s*C[WR]\\s*(\\])))',
          beginCaptures: {
            0: {name: 'constant.character.escape.font.roff'},
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'punctuation.section.begin.bracket.square.roff'},
            7: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          end: "(?=\\\\E?f[\\[A-Za-z0-9])|^(?=[.']\\s*(?:(?:SH|SS|P|[HILPT]P|di)\\b)|\\.)",
          patterns: [{include: '$self'}, {include: '#monospace-word'}]
        },
        {
          begin: '((?:((\\\\)E)|(\\\\))[Ff](\\[))',
          beginCaptures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          contentName: 'variable.parameter.roff',
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.font.gnu.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            10: {name: 'punctuation.definition.escape.roff'},
            11: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            7: {name: 'entity.name.roff'},
            8: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            9: {name: 'punctuation.definition.escape.roff'}
          },
          match:
            '((?:((\\\\)E)|(\\\\))[Ff](\\())(\\S{2})|((?:((\\\\)E)|(\\\\))[Ff])(\\S)',
          name: 'constant.character.escape.function.font.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            10: {name: 'punctuation.definition.escape.roff'},
            11: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.brace.roff'},
            6: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            7: {name: 'entity.name.roff'},
            8: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            9: {name: 'punctuation.definition.escape.roff'}
          },
          match:
            '((?:((\\\\)E)|(\\\\))g(\\())(\\S{2})|((?:((\\\\)E)|(\\\\))g)(\\S)',
          name: 'constant.character.escape.function.format-register.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]}
          },
          match: '((?:((\\\\)E)|(\\\\))k)(\\S)',
          name: 'constant.character.escape.function.mark-input.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'keyword.operator.arithmetic.roff'},
            6: {name: 'punctuation.definition.brace.roff'},
            7: {name: 'keyword.operator.arithmetic.roff'},
            8: {name: 'variable.parameter.roff'}
          },
          match: '((?:((\\\\)E)|(\\\\))s([-+]?)(\\()?)((?<=s\\()[-+])?(\\d+)',
          name: 'constant.character.escape.function.point-size.roff'
        },
        {
          captures: {
            1: {name: 'entity.name.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]}
          },
          match: '((?:((\\\\)E)|(\\\\))z)([^\\s\\\\])',
          name: 'constant.character.escape.function.zero-width-print.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {
              name: 'punctuation.definition.string.begin.roff',
              patterns: [{include: '#c0'}]
            },
            5: {name: 'constant.numeric.integer.int.hexadecimal.roff'},
            6: {
              name: 'punctuation.definition.string.end.roff',
              patterns: [{include: '#c0'}]
            }
          },
          match: '(?:((\\\\)E)|(\\\\))U([^0-9A-Fa-f ])([0-9A-Fa-f]+)(\\4)',
          name: 'constant.character.escape.function.unicode-codepoint.heirloom.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.function.roff'},
            10: {
              name: 'entity.name.link-text.unquoted.roff',
              patterns: [{include: '#escapes'}]
            },
            11: {name: 'constant.character.escape.function.roff'},
            12: {
              name: 'constant.character.escape.current-escape-char.gnu.roff'
            },
            13: {name: 'punctuation.definition.escape.roff'},
            14: {name: 'punctuation.definition.escape.roff'},
            2: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            3: {name: 'punctuation.definition.escape.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            6: {name: 'meta.link-destination.anchor.roff'},
            7: {
              name: 'punctuation.definition.string.begin.roff',
              patterns: [{include: '#c0'}]
            },
            8: {
              name: 'string.other.link.destination.roff',
              patterns: [{include: '#escapes'}]
            },
            9: {
              name: 'punctuation.definition.string.end.roff',
              patterns: [{include: '#c0'}]
            }
          },
          match:
            '((?:((\\\\)E)|(\\\\))(T|W))((.)((?:(?!\\7).)++)(\\7))(.+?)((?:((\\\\)E)|(\\\\))\\5)',
          name: 'markup.link.inline.escape.heirloom.roff'
        },
        {
          captures: {
            1: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(?:((\\\\)E)|(\\\\))\\S',
          name: 'constant.character.escape.misc.roff'
        }
      ]
    },
    'even-bold': {
      patterns: [
        {
          begin: '(?<=^|\\s|")(?!"|\\\\E?")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?=[ \\t])|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.bold.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'even-bold-after-italic': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.bold.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.bold.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.bold.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.italic.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'even-bold-after-roman': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.bold.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.bold.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.bold.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.plain.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'even-italic': {
      patterns: [
        {
          begin: '(?<=^|\\s|")(?!"|\\\\E?")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?=[ \\t])|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.italic.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'even-italic-after-bold': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.italic.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.italic.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.italic.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.bold.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'even-italic-after-roman': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.italic.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.italic.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.italic.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.plain.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'even-roman': {
      patterns: [
        {
          begin: '(?<=^|\\s|")(?!"|\\\\E?")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?=[ \\t])|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.plain.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'even-roman-after-bold': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.plain.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.plain.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.plain.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.bold.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'even-roman-after-italic': {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'markup.plain.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.plain.roff',
          end: '(("))([^"\\s]+[ \\t]*)?|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {
            1: {name: 'markup.plain.roff'},
            2: {name: 'punctuation.definition.string.end.roff'},
            3: {name: 'markup.italic.roff'}
          },
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        }
      ]
    },
    'generic-parameter': {
      captures: {0: {patterns: [{include: '#c0'}]}},
      match: '[^\\s\\\\]+',
      name: 'variable.parameter.roff'
    },
    ignore: {
      patterns: [
        {
          begin:
            '(?:^|\\G)(?!.*?\\\\*})([.\'])[ \\t]*(?:(do)[ \\t]+)?(ig)[ \\t]+(?!\\\\E?["#]|\\\\+\\$\\d+)(("[^"]+")|\\S+?(?=\\s|\\\\E?["#]))(.*)$',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {
              name: 'keyword.control.terminator.roff',
              patterns: [{include: '#escapes'}]
            },
            5: {patterns: [{include: '#string'}]},
            6: {patterns: [{include: '#params'}]}
          },
          contentName: 'comment.block.ignored-input.with-terminator.roff',
          end: "^([.'])[ \\t]*(\\4)(?=\\s|$|\\\\)|^(?=[.']?[ \\t]*\\\\*})",
          endCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {
              name: 'keyword.control.terminator.roff',
              patterns: [{include: '#string'}]
            }
          },
          patterns: [{include: '#register-expansion'}]
        },
        {
          begin:
            '(?:^|\\G)(?!.*?\\\\*})([.\'])[ \\t]*(?:(do)[ \\t]+)?(ig)(?=\\s|\\\\E?["#])(.*)$',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {patterns: [{include: '#params'}]}
          },
          contentName: 'comment.block.ignored-input.roff',
          end: "^([.'])[ \\t]*\\.(?=\\s|\\\\E?[\"#])|^(?=[.']?[ \\t]*\\\\*})",
          endCaptures: {0: {name: 'punctuation.definition.request.roff'}},
          patterns: [{include: '#register-expansion'}]
        }
      ]
    },
    'italic-first': {
      patterns: [
        {
          begin: '\\G[ \\t]*(?!")(?=(?:[^\\s\\\\]|\\\\(?!E?").)+)',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=\\s|$)|(?=\\\\E?")',
          name: 'markup.italic.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {
            0: {name: 'string.quoted.double.empty.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'},
            2: {name: 'punctuation.definition.string.end.roff'}
          },
          match: '(")(")',
          name: 'markup.italic.roff'
        },
        {
          begin: '\\G[ \\t]*(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.roff'},
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'string.quoted.double.roff',
          end: '((?:"")*)"(?!")|(?<!\\\\)(?:$|(?!R)\\R)|(?=\\\\E?")',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.roff'},
            1: {
              name: 'markup.italic.roff',
              patterns: [{include: '#string-escapes'}]
            }
          },
          name: 'markup.italic.roff',
          patterns: [{include: '#string-escapes'}]
        },
        {include: '#escapes'},
        {include: '#string'}
      ]
    },
    'italic-word': {match: '\\S+?(?=\\\\|$|\\s)', name: 'markup.italic.roff'},
    'long-name': {
      patterns: [
        {
          begin: '\\G\\s*',
          end: '(?=\\]|\\s)',
          name: 'variable.parameter.other.roff',
          patterns: [{include: '#escapes'}]
        },
        {include: '#escapes'},
        {include: '#string'},
        {include: '#number'}
      ]
    },
    'long-params': {
      patterns: [
        {include: '#escapes'},
        {include: '#string'},
        {include: '#number'},
        {include: '#arithmetic'},
        {
          captures: {0: {patterns: [{include: '#c0'}]}},
          match: '[^\\\\\\s\\]]+',
          name: 'variable.parameter.roff'
        }
      ]
    },
    macros: {
      patterns: [
        {include: '#man'},
        {include: '#mdoc'},
        {include: '#mono'},
        {include: '#ms'},
        {include: '#mm'},
        {include: '#me'},
        {include: '#www'},
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*((?:[^\\s\\\\]|\\\\(?!E?[#"]).)+)',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {
              name: 'entity.function.name.roff',
              patterns: [{include: '#escapes'}]
            }
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.macro.roff',
          patterns: [{include: '#param-group'}]
        }
      ]
    },
    main: {
      patterns: [
        {match: "(?<!^|\\A)\\G[.']"},
        {include: '#preprocessors'},
        {include: '#escapes'},
        {include: '#requests'},
        {include: '#macros'}
      ]
    },
    man: {
      patterns: [
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(RE|RS|SM|BT|PT)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.man.macro.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*((AT|DT|PD|UC))(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'invalid.deprecated.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.deprecated.function.${2:/downcase}.man.macro.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(TH)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'markup.heading.title.function.man.macro.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(SH)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'markup.heading.section.function.man.macro.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(SS)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'markup.heading.subsection.function.man.macro.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(EX)\\s*(\\\\E?[#"].*)?$',
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'},
            3: {patterns: [{include: '#escapes-copymode'}]}
          },
          contentName: 'markup.raw.roff',
          end: '^([.\'])[ \\t]*(EE)(?=\\s|\\\\E?[#"])',
          endCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(LP|PP?)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.paragraph.man.macro.roff',
          patterns: [{include: '#params'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(IP)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.indented-paragraph.man.macro.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(TP|TQ)(?=\\s|\\\\E?["#])(.*)?$(?!R)\\R?',
          beginCaptures: {
            0: {name: 'meta.function.titled-paragraph.man.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#param-group'}]}
          },
          end: '^(.*)(?<!\\\\)$',
          endCaptures: {
            0: {name: 'markup.heading.paragraph.roff'},
            1: {patterns: [{include: '$self'}]}
          },
          patterns: [
            {captures: {0: {patterns: [{include: '$self'}]}}, match: '.+'}
          ]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*((HP))(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'invalid.deprecated.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.deprecated.function.hanging-paragraph.man.macro.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(MT)(?=\\s|\\\\E?["#])\\s*',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'}
          },
          end: '^([.\'])[ \\t]*(ME)(?=\\s|\\\\E?["#])(.*)\\s*(\\\\E?["#].*)?$',
          endCaptures: {
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'},
            3: {patterns: [{include: '#param-group'}]},
            4: {patterns: [{include: '#escapes'}]}
          },
          name: 'meta.function.mailto.hyperlink.man.macro.gnu.roff',
          patterns: [{include: '#underline-first'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(MR)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.cross-reference.man.macro.gnu.roff',
          patterns: [
            {
              captures: {
                1: {name: 'variable.reference.page-title.roff'},
                2: {name: 'constant.numeric.manual-section.roff'},
                3: {name: 'string.unquoted.trailing-text.roff'}
              },
              match:
                '(?x)\n\\G \\s+ ([^\\s\\\\]+)    # Page title\n(?: \\s+ ([^\\s\\\\]+))?  # Manual section\n(?: \\s+ ([^\\s\\\\]+))?  # Trailing text'
            },
            {include: '#param-group'}
          ]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(UR)(?=\\s|\\\\E?["#])\\s*',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'}
          },
          end: '^([.\'])[ \\t]*(UE)(?=\\s|\\\\E?["#])(.*)\\s*(\\\\E?["#].*)?$',
          endCaptures: {
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'},
            3: {patterns: [{include: '#param-group'}]},
            4: {patterns: [{include: '#escapes'}]}
          },
          name: 'meta.function.hyperlink.man.macro.gnu.roff',
          patterns: [{include: '#underline-first'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(SY)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            0: {name: 'meta.function.begin.synopsis.man.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'}
          },
          end: '^([.\'])[ \\t]*(YS)(?=\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.synopsis.man.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.gnu.roff'},
            2: {name: 'entity.function.name.gnu.roff'}
          },
          name: 'meta.command-synopsis.roff',
          patterns: [
            {include: '#bold-first'},
            {
              begin: "(?:^|\\G)([.'])[ \\t]*(OP)(?=\\s)",
              beginCaptures: {
                1: {name: 'punctuation.definition.macro.gnu.roff'},
                2: {name: 'entity.function.name.gnu.roff'}
              },
              end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
              name: 'meta.function.option-description.man.macro.gnu.roff',
              patterns: [
                {
                  begin: '\\G',
                  end: '(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
                  name: 'function-call.arguments.roff',
                  patterns: [
                    {include: '#odd-bold'},
                    {include: '#even-italic-after-bold'},
                    {include: '#even-italic'},
                    {include: '#bridge-escapes'}
                  ]
                },
                {include: '#escapes'}
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(S?B)(\\s*\\\\E?[#"].*$)?(?=$|[ \\t]+|\\\\)',
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'},
            3: {patterns: [{include: '#escapes-copymode'}]}
          },
          end: '^(?=[.\'])|(?=\\\\E?")|(?!\\\\E?#)((\\S+[ \\t]*)(?<![^\\\\]\\\\)(?:(?!R)\\R|$))',
          endCaptures: {
            1: {name: 'markup.bold.roff'},
            2: {patterns: [{include: '#escapes'}]}
          },
          patterns: [
            {include: '$self'},
            {match: '\\S+', name: 'markup.bold.roff'}
          ]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(I)(\\s*\\\\E?[#"].*$)?(?=$|[ \\t]+|\\\\)',
          beginCaptures: {
            0: {name: 'meta.function.man.macro.roff'},
            1: {name: 'punctuation.definition.function.macro.roff'},
            2: {name: 'entity.name.function.roff'},
            3: {patterns: [{include: '#escapes-copymode'}]}
          },
          end: '^(?=[.\'])|(?=\\\\E?")|(?!\\\\E?#)((\\S+[ \\t]*)(?<![^\\\\]\\\\)(?:(?!R)\\R|$))',
          endCaptures: {
            1: {name: 'markup.italic.roff'},
            2: {patterns: [{include: '#escapes'}]}
          },
          patterns: [
            {include: '$self'},
            {match: '\\S+', name: 'markup.italic.roff'}
          ]
        },
        {include: '#alternating-fonts'}
      ]
    },
    mdoc: {
      patterns: [
        {
          begin: "(?:^|\\G)([.'])\\s*(Bf)[ \\t]+(-emphasis|Em)(?=\\s)(.*)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.option.mdoc.macro.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          end: "^(?=[.']\\s*[BE]f\\s)",
          name: 'meta.function.begin-emphasis.unparsed.macro.mdoc.roff',
          patterns: [{include: '$self'}, {include: '#italic-word'}]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Bf)[ \\t]+(-literal|Li)(?=\\s)(.*)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.option.mdoc.macro.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          end: "^(?=[.']\\s*[BE]f\\s)",
          name: 'meta.function.begin-literal.unparsed.macro.mdoc.roff',
          patterns: [{include: '$self'}, {include: '#monospace-word'}]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Bf)[ \\t]+(-symbolic|Sy)(?=\\s)(.*)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.option.mdoc.macro.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          end: "^(?=[.']\\s*[BE]f\\s)",
          name: 'meta.function.begin-symbolic.unparsed.macro.mdoc.roff',
          patterns: [{include: '$self'}, {include: '#bold-word'}]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Rs)(?=\\s)(.*)$",
          beginCaptures: {
            0: {name: 'meta.function.unparsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.macro.mdoc.roff'},
            2: {name: 'entity.function.name.mdoc.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'meta.citation.mdoc.roff',
          end: "^([.'])\\s*(Re)(?=\\s)",
          endCaptures: {
            0: {name: 'meta.function.unparsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.mdoc.macro.roff'},
            2: {name: 'entity.function.name.mdoc.roff'}
          },
          patterns: [{include: '#refer'}]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Bd)\\s+(-literal)(?=\\s|$)(.*)",
          beginCaptures: {
            0: {name: 'meta.function.$2.unparsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#mdoc-args'}]},
            4: {patterns: [{include: '#mdoc-unparsed'}]}
          },
          end: "^([.'])\\s*(Ed)(?=\\s|$)",
          endCaptures: {
            0: {name: 'meta.function.$2.unparsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          patterns: [
            {
              begin: '(?:^|\\G)(?:\\S*.*?\\s+)?HTML:\\s*$(?!R)\\R?',
              beginCaptures: {0: {patterns: [{include: '#main'}]}},
              end: '^(?!\\t|\\s*$)',
              name: 'meta.html-snippet.mdoc.roff',
              patterns: [
                {
                  captures: {0: {patterns: [{include: 'text.html.basic'}]}},
                  match: '.+',
                  name: 'text.embedded.html.basic'
                }
              ]
            },
            {
              begin: '(?:^|\\G)(?:\\S*.*?\\s+)?JavaScript:\\s*$(?!R)\\R?',
              beginCaptures: {0: {patterns: [{include: '#main'}]}},
              end: '^(?!\\t|\\s*$)',
              name: 'meta.js-snippet.mdoc.roff',
              patterns: [
                {
                  captures: {0: {patterns: [{include: 'source.js'}]}},
                  match: '.+'
                }
              ]
            },
            {
              begin: '(?:^|\\G)(?:\\S*.*?\\s+)?CSS:\\s*$(?!R)\\R?',
              beginCaptures: {0: {patterns: [{include: '#main'}]}},
              end: '^(?!\\t|\\s*$)',
              name: 'meta.css-snippet.mdoc.roff',
              patterns: [{include: 'source.css'}]
            },
            {
              begin:
                '(?:^|\\G)(?:\\S*.*?\\s+)?(?i:Bash|(?:Bourne[\\s-]?)?Shell(?:[\\s-]?Script)?):\\s*$(?!R)\\R?',
              beginCaptures: {0: {patterns: [{include: '#main'}]}},
              end: '^(?!\\t|\\s*$)',
              name: 'meta.shell-snippet.mdoc.roff',
              patterns: [
                {
                  captures: {0: {patterns: [{include: 'source.shell'}]}},
                  match: '.+'
                }
              ]
            },
            {include: '#main'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Dt)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.$2.unparsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'markup.heading.title.function.mdoc.macro.roff',
          patterns: [{include: '#mdoc-delimiters'}, {include: '#mdoc-args'}]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Dd)(?:[ \\t]+|(?=$))",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'string.unquoted.other.roff',
          end: '(?<!\\\\)$',
          name: 'meta.function.document-date.unparsed.mdoc.macro.roff',
          patterns: [
            {include: '#mdoc-date-auto'},
            {include: '#mdoc-date-manual'},
            {include: '#mdoc-args'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])\\s*(Sh)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.$2.parsed.macro.mdoc.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'markup.heading.section.function.mdoc.macro.roff',
          patterns: [{include: '#mdoc-callables'}, {include: '#mdoc-args'}]
        },
        {
          begin:
            "(?:^|\\G)([.'])\\s*(%[ABCDIJNOPQRTUV]|B[dfklt]|br|D[bdt]|E[dfklx]|F[do]|Hf|In|L[bp]|Nd|Os|Pp|R[esv]|Sm|sp|Ud)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.function.$2.unparsed.macro.mdoc.roff',
          patterns: [{include: '#mdoc-unparsed'}]
        },
        {
          begin:
            "(?x)(?:^|\\G)([.'])\\s*\n(Ac|Ad|An|Ao|Ap|Aq|Ar|At|Bc|Bo|Bq|Brc|Bro|Brq|Bsx|Bx|Cd|Cm|D1|Dc\n|Dl|Do|Dq|Dv|Dx|Ec|Em|En|Eo|Eq|Er|Es|Ev|Fa|Fc|Fl|Fn|Fr|Ft|Fx|Ic\n|It|Li|Lk|Me|Ms|Mt|Nm|No|Ns|Nx|Oc|Oo|Op|Ot|Ox|Pa|Pc|Pf|Po|Pq|Qc\n|Ql|Qo|Qq|Rd|Sc|Sh|So|Sq|Ss|St|Sx|Sy|Ta|Tn|Ux|Va|Vt|Xc|Xo|Xr)\n(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.function.$2.parsed.macro.mdoc.roff',
          patterns: [
            {include: '#mdoc-callables'},
            {include: '#mdoc-args'},
            {include: '#generic-parameter'}
          ]
        }
      ]
    },
    'mdoc-args': {
      patterns: [
        {include: '#escapes'},
        {include: '#string'},
        {
          match: '(?<=\\s)[(\\[.,:|;)\\]?!](?=\\s|$)',
          name: 'punctuation.delimiter.mdoc.macro.roff'
        },
        {
          captures: {1: {name: 'punctuation.definition.dash.roff'}},
          match:
            '(?x)\n(?<=\\s) (-)\n(alpha|beta|bullet|centered|column|compact|dash|devel|diag|emphasis|enum|file|filled|hang\n|hyphen|inset|item|literal|nested|nosplit|ohang|ragged|split|std|symbolic|tag|type|unfilled\n|width|words|offset(?:\\s+(?:left|center|indent|indent-two|right))?)(?=\\s)',
          name: 'constant.language.option.mdoc.macro.roff'
        }
      ]
    },
    'mdoc-callables': {
      patterns: [
        {
          begin: '(?<=Em|Ar)\\G|(?<=\\s)(Em|Ar)(?=\\s)',
          beginCaptures: {1: {name: 'entity.function.name.roff'}},
          end: '(?x)\n(?<!\\\\)$ |\n(?=\n\t\\s+\n\t(?:Ac|Ad|An|Ao|Ap|Aq|Ar|At|Bc|Bo|Bq|Brc|Bro|Brq|Bsx|Bx|Cd|Cm|Dc|Do|Dq|Dv|Dx|Ec|Em\n\t|En|Eo|Er|Es|Ev|Fa|Fc|Fl|Fn|Fr|Ft|Fx|Ic|Li|Lk|Ms|Mt|Nm|No|Ns|Nx|Oc|Oo|Op|Ot|Ox|Pa\n\t|Pc|Pf|Po|Pq|Qc|Ql|Qo|Qq|Sc|So|Sq|Sx|Sy|Ta|Tn|Ux|Va|Vt|Xc|Xo|Xr)\n\t\\s | \\\\E? (?:"|f[\\[A-Za-z0-9])\n)',
          name: 'meta.function.$1.callable.macro.mdoc.roff',
          patterns: [
            {include: '#mdoc-args'},
            {include: '$self'},
            {include: '#italic-word'}
          ]
        },
        {
          begin: '(?<=Sy|Fl|Cm)\\G|(?<=\\s)(Sy|Fl|Cm)(?=\\s)',
          beginCaptures: {1: {name: 'entity.function.name.roff'}},
          end: '(?x)\n(?<!\\\\)$ |\n(?=\n\t\\s+\n\t(?:Ac|Ad|An|Ao|Ap|Aq|Ar|At|Bc|Bo|Bq|Brc|Bro|Brq|Bsx|Bx|Cd|Cm|Dc|Do|Dq|Dv|Dx|Ec|Em\n\t|En|Eo|Er|Es|Ev|Fa|Fc|Fl|Fn|Fr|Ft|Fx|Ic|Li|Lk|Ms|Mt|Nm|No|Ns|Nx|Oc|Oo|Op|Ot|Ox|Pa\n\t|Pc|Pf|Po|Pq|Qc|Ql|Qo|Qq|Sc|So|Sq|Sx|Sy|Ta|Tn|Ux|Va|Vt|Xc|Xo|Xr)\n\t\\s | \\\\E? (?:"|f[\\[A-Za-z0-9])\n)',
          name: 'meta.function.$1.callable.macro.mdoc.roff',
          patterns: [
            {include: '#mdoc-args'},
            {include: '$self'},
            {include: '#bold-word'}
          ]
        },
        {
          begin: '(?<=Li)\\G|(?<=\\s)(Li)(?=\\s)',
          beginCaptures: {1: {name: 'entity.function.name.roff'}},
          end: '(?x)\n(?<!\\\\)$ |\n(?=\n\t\\s+\n\t(?:Ac|Ad|An|Ao|Ap|Aq|Ar|At|Bc|Bo|Bq|Brc|Bro|Brq|Bsx|Bx|Cd|Cm|Dc|Do|Dq|Dv|Dx|Ec|Em\n\t|En|Eo|Er|Es|Ev|Fa|Fc|Fl|Fn|Fr|Ft|Fx|Ic|Li|Lk|Ms|Mt|Nm|No|Ns|Nx|Oc|Oo|Op|Ot|Ox|Pa\n\t|Pc|Pf|Po|Pq|Qc|Ql|Qo|Qq|Sc|So|Sq|Sx|Sy|Ta|Tn|Ux|Va|Vt|Xc|Xo|Xr)\n\t\\s | \\\\E? (?:"|f[\\[A-Za-z0-9])\n)',
          name: 'meta.function.$1.callable.macro.mdoc.roff',
          patterns: [
            {include: '#mdoc-args'},
            {include: '$self'},
            {include: '#monospace-word'}
          ]
        },
        {
          begin: '(?<=Lk|Mt)\\G|(?<=\\s)(Lk|Mt)(?=\\s|$)\\s*',
          beginCaptures: {1: {name: 'entity.function.name.roff'}},
          end: '$|(?=\\\\E?")|(\\S+?)(?=$|\\s|\\\\E?")',
          endCaptures: {
            0: {name: 'string.other.link.roff'},
            1: {
              name: 'markup.underline.link.hyperlink.mdoc.roff',
              patterns: [{include: '#escapes'}]
            }
          },
          name: 'meta.function.$1.callable.macro.mdoc.roff'
        },
        {
          captures: {1: {name: 'entity.function.name.roff'}},
          match:
            '(?x) (?<=[ \\t])\n(Ac|Ad|An|Ao|Ap|Aq|Ar|At|Bc|Bo|Bq|Brc|Bro|Brq|Bsx|Bx|Cd|Cm|Dc|Do|Dq|Dv|Dx|Ec|En\n|Eo|Er|Es|Ev|Fa|Fc|Fl|Fn|Fr|Ft|Fx|Ic|Li|Lk|Ms|Mt|Nm|No|Ns|Nx|Oc|Oo|Op|Ot|Ox|Pa|Pc\n|Pf|Po|Pq|Qc|Ql|Qo|Qq|Sc|So|Sq|Sx|Ta|Tn|Ux|Va|Vt|Xc|Xo|Xr)(?=\\s)',
          name: 'meta.function.$1.callable.macro.mdoc.roff'
        }
      ]
    },
    'mdoc-date-auto': {
      begin: '(?:\\G|^)((\\$)Mdocdate)(?=[:$]|$)',
      beginCaptures: {
        1: {name: 'keyword.rcs-like.section.begin.roff'},
        2: {name: 'punctuation.section.begin.roff'}
      },
      end: '\\s*((\\$))|(?=$)',
      endCaptures: {
        1: {name: 'keyword.rcs-like.section.end.roff'},
        2: {name: 'punctuation.section.end.roff'}
      },
      name: 'meta.document-date.automatic.roff',
      patterns: [
        {
          begin: '\\G(:)\\s*',
          beginCaptures: {1: {name: 'punctuation.separator.key-value.roff'}},
          contentName: 'constant.other.date.roff',
          end: '\\s*(?=\\$|(?<!\\\\)$)',
          patterns: [{include: '#mdoc-date-manual'}, {include: '#mdoc-args'}]
        }
      ]
    },
    'mdoc-date-manual': {
      captures: {
        1: {name: 'constant.other.date.roff'},
        2: {name: 'punctuation.separator.comma.roff'}
      },
      match: '(?:\\G|^)([A-Za-z]+\\s+\\d{1,2}(,)?\\s+\\d{4})\\b',
      name: 'meta.document-date.hardcoded.roff'
    },
    'mdoc-unparsed': {
      patterns: [
        {include: '#mdoc-delimiters'},
        {include: '#mdoc-args'},
        {include: '#generic-parameter'}
      ]
    },
    me: {
      patterns: [
        {
          begin:
            "(?x) (?:^|\\G)([.'])[ \\t]*\n((?:[()][cdfqxz]|\\+\\+|\\+c)|\n(1c|2c|EN|EQ|GE|GS|PE|PS|TE|TH|TS|ba|bc|bu|bx|hx\n|hl|ip|lp|np|pd|pp|r|re|sk|sm|sz|tp|uh|xp)(?=\\s))",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.${3:/downcase}.me.macro.roff',
          patterns: [{include: '#params'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(PF|ld)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.me.macro.gnu.roff',
          patterns: [{include: '#params'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(\\(l)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.list.begin.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'markup.list.unnumbered.roff',
          end: "^([.'])[ \\t]*(\\)l)(?=\\s)",
          endCaptures: {
            0: {name: 'meta.function.list.end.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(b)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.bold-text.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=$|(?!R)\\R)|(?=\\\\E?")',
          patterns: [{include: '#bold-first'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(i)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.italic-text.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=$|(?!R)\\R)|(?=\\\\E?")',
          patterns: [{include: '#italic-first'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(bi)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.bold-italic-text.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=$|(?!R)\\R)|(?=\\\\E?")',
          patterns: [{include: '#bold-italic-first'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(u)(?=\\s|$)\\s*",
          beginCaptures: {
            0: {name: 'meta.function.underline-text.me.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=$|(?!R)\\R)|(?=\\\\E?")',
          patterns: [{include: '#underline-first'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(sh)[ \\t]+((?!")\\S+)\\b[ \\t]*(?!$|(?!R)\\R|\\\\E?")',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {
              name: 'variable.parameter.roff',
              patterns: [{include: '#params'}]
            }
          },
          end: '(?<![^\\\\]\\\\|^\\\\)(?=$|(?!R)\\R)|(?=\\\\E?")',
          name: 'markup.heading.section.function.me.macro.roff',
          patterns: [{include: '#bold-first'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(of|oh|he|eh|fo|ef)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.me.macro.roff',
          patterns: [
            {include: '#3-part-title'},
            {include: '#escapes'},
            {include: '#string'}
          ]
        }
      ]
    },
    mm: {
      patterns: [
        {
          begin:
            "(?x) (?:^|\\G)([.'])[ \\t]*\n(1C|2C|AE|AF|AL|APP|APPSK|AS|AST|AT|AU|AV|AVL|B1|B2|BE|BL|BS|BVL\n|COVER|COVEND|DE|DF|DL|DS|EC|EF|EH|EN|EOP|EPIC|EQ|EX|FC|FD|FE|FG\n|FS|GETHN|GETPN|GETR|GETST|H|HC|HM|HU|HX|HY|HZ|IA|IE|INITI|INITR\n|IND|INDP|ISODATE|LB|LC|LE|LI|LT|LO|MC|ML|MT|MOVE|MULB|MULN|MULE\n|nP|NCOL|NS|ND|OF|OH|OP|PGFORM|PGNH|PIC|PE|PF|PH|PS|PX?|RD|RF|RL\n|RP|RS|S|SA|SETR|SG|SK|SM|SP|TA?B|TC|TE|TL|TM|TP|TS|TX|TY|VERBON\n|VERBOFF|VL|VM|WA|WE|WC|\\)E)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.mm.macro.roff',
          patterns: [{include: '#params'}]
        }
      ]
    },
    mono: {
      patterns: [
        {
          begin:
            '(?x) (?:^|\\G)([.\'])[ \\t]*\n# Displayed text\n(\n\t# .[ Text ]( … )\n\t(\\[) \\s+\n\t(?: ((")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(")) | ((?:[^\\\\\\s]|\\\\.)++))\n\t\\s+ (\\])\n\t(?! \\(\\) | <>)\n\t|\n\t# .[ Destination ][]\n\t(\\[) \\s+\n\t(?: (")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(") | ((?:[^\\\\\\s]|\\\\.)++))\n\t\\s+ (\\])\n\t(?= \\(\\) | <>)\n)\n(?=\n\t(?: \\( \\)\n\t|   \\[ \\]\n\t|     < >\n\t|   \\( \\s .*? \\s \\)\n\t|   \\[ \\s .*? \\s \\]\n\t|     < \\s .*? \\s >\n\t)? (?:\\s|$|\\\\E?["\\#])\n)',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            10: {name: 'punctuation.definition.square.bracket.begin.roff'},
            11: {name: 'punctuation.definition.string.begin.roff'},
            12: {patterns: [{include: '#mono-link-destination'}]},
            13: {name: 'punctuation.definition.string.end.roff'},
            14: {patterns: [{include: '#mono-link-destination'}]},
            15: {name: 'punctuation.definition.square.bracket.end.roff'},
            2: {name: 'meta.link-destination.displayed.roff'},
            3: {name: 'punctuation.definition.square.bracket.begin.roff'},
            4: {name: 'entity.name.link-text.quoted.roff'},
            5: {name: 'punctuation.definition.string.begin.roff'},
            6: {patterns: [{include: '#string-escapes'}]},
            7: {name: 'punctuation.definition.string.end.roff'},
            8: {
              name: 'entity.name.link-text.unquoted.roff',
              patterns: [{include: '#escapes'}]
            },
            9: {name: 'punctuation.definition.square.bracket.end.roff'}
          },
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.link.inline.function.mono.macro.roff',
          patterns: [
            {
              captures: {
                1: {name: 'meta.link-destination.roff'},
                10: {name: 'punctuation.definition.string.end.roff'},
                11: {patterns: [{include: '#mono-link-destination'}]},
                12: {
                  name: 'string.quoted.double.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                13: {
                  name: 'string.unquoted.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                14: {name: 'punctuation.definition.round.bracket.end.roff'},
                15: {name: 'punctuation.definition.square.bracket.begin.roff'},
                16: {
                  name: 'string.quoted.double.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                17: {
                  name: 'string.unquoted.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                18: {name: 'punctuation.definition.string.begin.roff'},
                19: {patterns: [{include: '#mono-link-destination'}]},
                2: {name: 'punctuation.definition.round.bracket.empty.roff'},
                20: {name: 'punctuation.definition.string.end.roff'},
                21: {patterns: [{include: '#mono-link-destination'}]},
                22: {
                  name: 'string.quoted.double.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                23: {
                  name: 'string.unquoted.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                24: {name: 'punctuation.definition.square.bracket.end.roff'},
                25: {name: 'punctuation.definition.angle.bracket.begin.roff'},
                26: {
                  name: 'string.quoted.double.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                27: {
                  name: 'string.unquoted.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                28: {name: 'punctuation.definition.string.begin.roff'},
                29: {patterns: [{include: '#mono-link-destination'}]},
                3: {name: 'punctuation.definition.square.bracket.empty.roff'},
                30: {name: 'punctuation.definition.string.end.roff'},
                31: {patterns: [{include: '#mono-link-destination'}]},
                32: {
                  name: 'string.quoted.double.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                33: {
                  name: 'string.unquoted.link-affix.roff',
                  patterns: [{include: '#string'}]
                },
                34: {name: 'punctuation.definition.square.bracket.end.roff'},
                35: {name: 'punctuation.definition.round.bracket.begin.roff'},
                36: {name: 'punctuation.definition.string.begin.roff'},
                37: {patterns: [{include: '#mono-link-destination'}]},
                38: {name: 'punctuation.definition.string.end.roff'},
                39: {patterns: [{include: '#mono-link-destination'}]},
                4: {name: 'punctuation.definition.angle.bracket.empty.roff'},
                40: {name: 'punctuation.definition.round.bracket.end.roff'},
                41: {name: 'punctuation.definition.square.bracket.begin.roff'},
                42: {name: 'punctuation.definition.string.begin.roff'},
                43: {patterns: [{include: '#mono-link-destination'}]},
                44: {name: 'punctuation.definition.string.end.roff'},
                45: {patterns: [{include: '#mono-link-destination'}]},
                46: {name: 'punctuation.definition.square.bracket.end.roff'},
                47: {name: 'punctuation.definition.angle.bracket.begin.roff'},
                48: {name: 'punctuation.definition.string.begin.roff'},
                49: {patterns: [{include: '#mono-link-destination'}]},
                5: {name: 'punctuation.definition.round.bracket.begin.roff'},
                50: {name: 'punctuation.definition.string.end.roff'},
                51: {patterns: [{include: '#mono-link-destination'}]},
                52: {name: 'punctuation.definition.angle.bracket.end.roff'},
                53: {name: 'punctuation.terminator.mono.macro.roff'},
                6: {
                  name: 'string.quoted.double.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                7: {
                  name: 'string.unquoted.link-prefix.roff',
                  patterns: [{include: '#string'}]
                },
                8: {name: 'punctuation.definition.string.begin.roff'},
                9: {patterns: [{include: '#mono-link-destination'}]}
              },
              match:
                '(?x) \\G\n# Destination\n(\n\t# .[ Text ] is another way to write .[ Text ][]\n\t(?=\\s)\n\t|\n\t# Shorthand for links with identical text/URL parameters\n\t(?:(\\(\\)) | (\\[\\]) | (<>))\n\t(?=\\s|$)\n\t|\n\t# 6-argument form to customise rendering of non-interactive links\n\t(?:\n\t\t# .[ Details ]( “ (visit ” http://url “ for more information” )\n\t\t(\\() \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:(")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(\\))\n\t\t|\n\t\t# …[ Term ][ “ (q.v. ” term-id “, section 3.2)” ]\n\t\t(\\[) \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:(")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(\\])\n\t\t|\n\t\t# …[ “send an e-mail” ]< “ to ” email@address.com “” >\n\t\t(<) \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:(")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(?:("  (?:[^\\\\"]|\\\\[^"\\#]|"")*+  ")|((?:[^\\\\\\s]|\\\\.)++)) \\s+\n\t\t(>)\n\t)\n\t|\n\t# Normal form\n\t(?: (\\() \\s+ (?: (")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(") | ((?:[^\\\\\\s]|\\\\.)++)) \\s+ (\\)) # .[ Text ]( http://url.com )\n\t|   (\\[) \\s+ (?: (")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(") | ((?:[^\\\\\\s]|\\\\.)++)) \\s+ (\\]) # .[ Text ][ anchor-id ]\n\t|     (<) \\s+ (?: (")((?:[^\\\\"]|\\\\[^"\\#]|"")*+)(") | ((?:[^\\\\\\s]|\\\\.)++)) \\s+ (>)   # .[ Text ]< email@address >\n\t)\n)\n(?:\\s+([(\\[`"\'.,:<|>;)\\]?!]))?\n(?=\\s*(?:$|\\\\[^\\#]))'
            },
            {include: '#params'}
          ]
        }
      ]
    },
    'mono-link-destination': {
      captures: {
        0: {name: 'markup.underline.link.hyperlink.roff'},
        1: {patterns: [{include: '#string-escapes'}]}
      },
      match: '(.+)',
      name: 'string.other.link.destination.roff'
    },
    'monospace-word': {
      match: '\\S+?(?=\\\\|$|\\s)',
      name: 'markup.raw.monospaced.roff'
    },
    ms: {
      patterns: [
        {
          begin:
            "(?x) (?:^|\\G)([.'])[ \\t]*\n(1C|2C|AB|AE|AI|AU|B1|B2|BT|BX|DA|DE|DS|EN|EQ|FE|FS|IP|KE|KF|KS|LG\n|LP|MC|ND|NH|NL|P1|PE|PP|PS|PT|PX|QP|RP|SH|SM|TA|TC|TE|TL|TS|XA|XE\n|XP|XS)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.ms.macro.roff',
          patterns: [{include: '#params'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*([EO][FH])(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.ms.macro.roff',
          patterns: [
            {include: '#3-part-title'},
            {include: '#escapes'},
            {include: '#string'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*((De|Ds))(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'invalid.deprecated.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<!\\\\)$|(?=\\s*\\\\E?")',
          name: 'meta.deprecated.function.${2:/downcase}.ms.macro.roff',
          patterns: [{include: '#escapes'}, {include: '#string'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(CW)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.cw.ms.macro.roff',
          patterns: [
            {
              begin: '\\G[ \\t]*(?!")(?=(?:[^\\s\\\\]|\\\\(?!E?").)+)',
              end: '(?<![^\\\\]\\\\|^\\\\)(?=\\s|$)|(?=\\\\E?")',
              name: 'markup.raw.roff',
              patterns: [{include: '#escapes'}]
            },
            {
              captures: {
                0: {name: 'string.quoted.double.empty.roff'},
                1: {name: 'punctuation.definition.string.begin.roff'},
                2: {name: 'punctuation.definition.string.end.roff'}
              },
              match: '(")(")',
              name: 'markup.raw.roff'
            },
            {
              begin: '\\G[ \\t]*(")',
              beginCaptures: {
                1: {name: 'punctuation.definition.string.begin.roff'}
              },
              contentName: 'markup.raw.roff',
              end: '((?:"")*)"(?!")|(?<!\\\\)$|(?=\\\\E?")',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.roff'},
                1: {
                  name: 'markup.raw.roff',
                  patterns: [{include: '#string-escapes'}]
                }
              },
              name: 'string.quoted.double.roff',
              patterns: [{include: '#string-escapes'}]
            },
            {include: '#escapes'},
            {include: '#string'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(UL)(?=\\s|$)\\s*",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.ul.ms.macro.roff',
          patterns: [{include: '#underline-first'}]
        }
      ]
    },
    number: {
      captures: {
        1: {name: 'keyword.operator.absolute.roff'},
        2: {patterns: [{include: '#units'}]}
      },
      match:
        '(?!\\d+(?:/|[CDMPTcimnpstuvz]\\w))(\\|)?(?:(?<!\\w)[-+])?(?:\\d+(?:\\.\\d*)?|\\.\\d+|(?<=[-+])\\.)([CDMPTcimnpstuvz])?',
      name: 'constant.numeric.roff'
    },
    'odd-bold': {
      patterns: [
        {
          begin: '[ \\t]+(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          end: '(")[ \\t]*|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.roff'}},
          name: 'markup.bold.roff',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        },
        {
          begin: '[ \\t]+(\\\\$(?!R)\\R?)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?<!^)[ \\t]+|(?=\\\\E?")|(?<!\\\\)(?=(?!R)\\R|$)',
          name: 'markup.bold.roff',
          patterns: [
            {include: '#escapes'},
            {begin: '^[ \\t]+', end: '(?=\\S)|(?<!\\\\)(?:$|(?!R)\\R)'}
          ]
        },
        {
          begin: '[ \\t]+(?!")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '[ \\t]+|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.bold.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'odd-italic': {
      patterns: [
        {
          begin: '[ \\t]+(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          end: '(")[ \\t]*|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.roff'}},
          name: 'markup.italic.roff',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        },
        {
          begin: '[ \\t]+(\\\\$(?!R)\\R?)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?<!^)[ \\t]+|(?=\\\\E?")|(?<!\\\\)(?=(?!R)\\R|$)',
          name: 'markup.italic.roff',
          patterns: [
            {include: '#escapes'},
            {begin: '^[ \\t]+', end: '(?=\\S)|(?<!\\\\)(?:$|(?!R)\\R)'}
          ]
        },
        {
          begin: '[ \\t]+(?!")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '[ \\t]+|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.italic.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'odd-roman': {
      patterns: [
        {
          begin: '[ \\t]+(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          end: '(")[ \\t]*|(?=\\\\E?")|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.roff'}},
          name: 'markup.plain.roff',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#string-escapes'}]}},
              match: '((?:[^"\\\\]|""|\\\\(?!E?").)+)(?!$)'
            },
            {include: '#string-escapes'}
          ]
        },
        {
          begin: '[ \\t]+(\\\\$(?!R)\\R?)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '(?<!^)[ \\t]+|(?=\\\\E?")|(?<!\\\\)(?=(?!R)\\R|$)',
          name: 'markup.plain.roff',
          patterns: [
            {include: '#escapes'},
            {begin: '^[ \\t]+', end: '(?=\\S)|(?<!\\\\)(?:$|(?!R)\\R)'}
          ]
        },
        {
          begin: '[ \\t]+(?!")((?:[^\\s"\\\\]|\\\\(?!E?").)+)',
          beginCaptures: {1: {patterns: [{include: '#escapes'}]}},
          end: '[ \\t]+|(?<![^\\\\]\\\\|^\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'markup.plain.roff',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    'param-group': {
      begin: '\\G|^',
      end: '\\Z|$',
      name: 'function-call.arguments.roff',
      patterns: [{include: '#params'}]
    },
    params: {
      patterns: [
        {include: '#escapes'},
        {include: '#string'},
        {include: '#number'},
        {include: '#generic-parameter'}
      ]
    },
    preprocessors: {
      patterns: [
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(TS)(?=$|\\s|\\\\E?["#])(.*)',
          beginCaptures: {
            0: {name: 'meta.function.begin.table.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'markup.other.table.preprocessor.tbl.roff',
          end: '^([.\'])[ \\t]*(TE)(?=$|\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.table.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          patterns: [{include: '#tbl'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(EQ)(?=$|\\s|\\\\E?["#])[ \\t]*([LIC]\\b)?\\s*([^\\\\"]+|\\\\[^"])*(\\\\E?".*)?$',
          beginCaptures: {
            0: {name: 'meta.function.begin.math.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.alignment-mode.eqn.roff'},
            4: {name: 'string.unquoted.equation-label.eqn.roff'},
            5: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'markup.other.math.preprocessor.eqn.roff',
          end: '^([.\'])[ \\t]*(EN)(?=$|\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.math.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          patterns: [{include: '#eqn'}]
        },
        {
          begin:
            "(?:^|\\G)([.'])[ \\t]*(\\[)\\s*([-$'\\w.\\\\]*?)\\s*(\\\\E?[\"#].*)?$",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'punctuation.section.function.begin.roff'},
            3: {
              name: 'string.unquoted.opening-text.refer.roff',
              patterns: [{include: '#escapes'}]
            },
            4: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'meta.citation.roff',
          end: "^([.'])[ \\t]*(\\])\\s*([-$'\\w.\\\\]*?)(?=\\s|$|\\\\E?\")|(?=^[.'][ \\t]*(?:\\.|\\\\}))",
          endCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'punctuation.section.function.end.roff'},
            3: {
              name: 'string.unquoted.closing-text.refer.roff',
              patterns: [{include: '#escapes'}]
            }
          },
          patterns: [
            {
              begin: '\\G',
              end: '$|(?=\\\\E?[#"])',
              patterns: [
                {
                  match: '(?:^|\\G)[#\\[\\]]+',
                  name: 'constant.character.flags.refer.gnu.roff'
                },
                {include: '#params'}
              ]
            },
            {include: '#refer'}
          ]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(Perl)[ \\t]+(begin|start)(?=$|\\s|\\\\E?["#])(.*)$',
          beginCaptures: {
            0: {name: 'meta.function.begin.perl.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'source.embedded.perl.gnu.roff',
          end: '^([.\'])[ \\t]*(Perl)[ \\t]+(end|stop)(?=$|\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.perl.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'}
          },
          patterns: [{include: 'source.perl'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(lilypond)[ \\t]+(begin|start)(?=$|\\s|\\\\E?["#])(.*)$',
          beginCaptures: {
            0: {name: 'meta.function.begin.lilypond.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'source.embedded.lilypond.gnu.roff',
          end: '^([.\'])[ \\t]*(lilypond)[ \\t]+(end|stop)(?=$|\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.lilypond.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'}
          },
          patterns: [{include: 'source.lilypond'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(pinyin)[ \\t]+(begin|start)(?=$|\\s|\\\\E?["#])(.*)$',
          beginCaptures: {
            0: {name: 'meta.function.begin.pinyin.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'meta.pinyin.gnu.roff',
          end: '^([.\'])[ \\t]*(pinyin)[ \\t]+(end|stop)(?=$|\\s|\\\\E?["#])',
          endCaptures: {
            0: {name: 'meta.function.end.pinyin.macro.gnu.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.language.embedding-control.roff'}
          },
          patterns: [{include: '#main'}]
        },
        {include: 'source.pic#tags'},
        {include: 'source.ideal#tags'},
        {include: 'source.gremlin'}
      ]
    },
    refer: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.refer.roff'}
          },
          end: '$',
          name: 'comment.line.refer.roff'
        },
        {match: '@', name: 'variable.other.readonly.author-names.refer.roff'},
        {
          begin: "(?:^|\\G)([.'])?\\s*(%)([A-Z])(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.mdoc.roff'},
            2: {name: 'punctuation.definition.percentage-sign.refer.roff'},
            3: {name: 'variable.other.readonly.key-letter.refer.roff'}
          },
          contentName: 'meta.structure.dictionary.value.refer.roff',
          end: '(?<!\\\\)$',
          name: 'meta.structure.dictionary.refer.roff',
          patterns: [
            {
              begin: '\\G',
              end: '(?<!\\\\)$',
              name: 'string.unquoted.refer.roff',
              patterns: [
                {
                  match: '[-+\'"<>\\].*\\[~!&?:]',
                  name: 'meta.symbol.refer.roff'
                },
                {include: '#refer'}
              ]
            },
            {include: '#escapes'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.roff'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.roff'}},
          name: 'string.quoted.single.refer.roff'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.percentage-sign.refer.roff'}
          },
          match: '(%+)[\\daiA-Z]',
          name: 'variable.other.readonly.formatted.refer.roff'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.period.full-stop.refer.roff'}
          },
          match:
            '(?x)\n(?<=\\S)(?:\\*|[-+]\\d+|(\\.)(?:[-+]?y|[lucran]))(?=\\s|$) |\n(?<=\\S)[~!&?:](?=\\S)',
          name: 'keyword.operator.label-expression.refer.roff'
        },
        {
          begin: '<',
          beginCaptures: {0: {name: 'punctuation.bracket.angle.refer.roff'}},
          end: '>|^(?=\\.\\])',
          endCaptures: {0: {name: 'punctuation.bracket.angle.refer.roff'}},
          patterns: [{include: '#refer'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.bracket.round.refer.roff'}},
          end: '\\)|^(?=\\.\\])',
          endCaptures: {0: {name: 'punctuation.bracket.round.refer.roff'}},
          patterns: [{include: '#refer'}]
        },
        {
          captures: {0: {name: 'entity.function.name.refer.roff'}},
          match:
            '(?x)\\b\n(?:no-)?\n(?:abbreviate|abbreviate-label-ranges|accumulate|annotate|compatible|date-as-label\n|default-database|discard|et-al|label-in-reference|label-in-text|move-punctuation\n|reverse|search-ignore|search-truncate|short-label|sort|sort-adjacent-labels)\\b',
          name: 'keyword.operator.negatable.refer.roff'
        },
        {
          captures: {0: {name: 'entity.function.name.refer.roff'}},
          match:
            '\\b(articles|bibliography|capitalize|join-authors|label|separate-label-second-parts)\\b',
          name: 'keyword.operator.refer.roff'
        },
        {
          begin: '(?:^|\\G)\\s*\\b(database|include)\\b',
          beginCaptures: {
            0: {name: 'keyword.operator.refer.roff'},
            1: {name: 'entity.function.name.refer.roff'}
          },
          end: '(?<!\\\\)$',
          patterns: [
            {include: '#escapes'},
            {
              captures: {
                0: {name: 'markup.link.underline.refer.roff'},
                1: {patterns: [{include: '#escapes'}]}
              },
              match: '((?:[^\\\\\\s]|\\\\(?!E?").)+)',
              name: 'string.other.link.filename.refer.roff'
            }
          ]
        },
        {include: '#string'},
        {include: '#escapes'}
      ]
    },
    'register-expansion': {
      patterns: [
        {
          begin: '(\\|)?((?:((\\\\)E)|((?:(?<=\\|)\\\\*?)?\\\\))n([-+])?(\\[))',
          beginCaptures: {
            1: {name: 'keyword.operator.absolute.roff'},
            2: {name: 'entity.name.roff'},
            3: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.escape.roff'},
            6: {name: 'keyword.operator.arithmetic.roff'},
            7: {name: 'punctuation.section.begin.bracket.square.roff'}
          },
          end: '(\\])|(?<!\\\\)(?=$)',
          endCaptures: {
            1: {name: 'punctuation.section.end.bracket.square.roff'}
          },
          name: 'constant.character.escape.function.expand-register.gnu.roff',
          patterns: [{include: '#long-name'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.absolute.roff'},
            10: {name: 'constant.language.predefined.register.readonly.roff'},
            11: {
              name: 'constant.language.predefined.register.readonly.gnu.roff'
            },
            12: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            13: {name: 'keyword.operator.absolute.roff'},
            14: {name: 'entity.name.roff'},
            15: {
              name: 'constant.character.escape.current-escape-char.gnu.roff'
            },
            16: {name: 'punctuation.definition.escape.roff'},
            17: {name: 'punctuation.definition.escape.roff'},
            18: {name: 'keyword.operator.arithmetic.roff'},
            19: {name: 'constant.language.predefined.register.roff'},
            2: {name: 'entity.name.roff'},
            20: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            3: {name: 'constant.character.escape.current-escape-char.gnu.roff'},
            4: {name: 'punctuation.definition.escape.roff'},
            5: {name: 'punctuation.definition.escape.roff'},
            6: {name: 'keyword.operator.arithmetic.roff'},
            7: {name: 'punctuation.definition.brace.roff'},
            8: {name: 'constant.language.predefined.register.roff'},
            9: {name: 'constant.language.predefined.register.gnu.roff'}
          },
          match:
            '(?x)\n\n# 1: keyword.operator.absolute.roff\n(\\|)?\n\n# 2: entity.name.roff\n(\n\t(?:\n\t\t# 3: constant.character.escape.current-escape-char.gnu.roff\n\t\t(\n\t\t\t# 4: punctuation.definition.escape.roff\n\t\t\t(\\\\)E\n\t\t)\n\t\t|\n\t\t# 5: punctuation.definition.escape.roff\n\t\t(\n\t\t\t(?:(?<=\\|)\\\\*?)?\n\t\t\t\\\\\n\t\t)\n\t)\n\tn\n\t([-+])?   # 6: keyword.operator.arithmetic.roff\n\t(\\()     # 7: punctuation.definition.brace.roff\n)\n\n# Name of register\n(?:\n\t# 8: constant.language.predefined.register.roff\n\t(ct|dl|dn|dw|dy|ln|mo|nl|sb|st|yr)\n\t|\n\t# 9: constant.language.predefined.register.gnu.roff\n\t(c\\.)\n\t|\n\t# 10: constant.language.predefined.register.readonly.roff\n\t(\\${2}  |  \\.[$aAbcdfFhHijklLnopRTstuvVwxyz])\n\t|\n\t# 11: constant.language.predefined.register.readonly.gnu.roff\n\t(\\.[CgmMOPUxyY])\n\t|\n\t# 12: variable.parameter.roff\n\t(\\S{2})\n)\n\n|\n\n# 13: keyword.operator.absolute.roff\n(\\|)?\n\n# 14: entity.name.roff\n(\n\t(?:\n\t\t# 15: constant.character.escape.current-escape-char.gnu.roff\n\t\t(\n\t\t\t# 16: punctuation.definition.escape.roff\n\t\t\t(\\\\)E\n\t\t)\n\t\t|\n\t\t# 17: punctuation.definition.escape.roff\n\t\t(\n\t\t\t(?:(?<=\\|)\\\\*?)?\n\t\t\t\\\\\n\t\t)\n\t)\n\tn\n)\n\n# 18: keyword.operator.arithmetic.roff\n([-+])?\n\n# Name of register\n(?:\n\t(%) |  # 19: constant.language.predefined.register.roff\n\t(\\S)  # 20: variable.parameter.roff\n)',
          name: 'constant.character.escape.function.expand-register.roff'
        }
      ]
    },
    requests: {
      patterns: [
        {
          begin:
            '(?x) (?:^|\\G)([.\'])[ \\t]* (?:(do)[ \\t]+)?\n(aln|als|asciify|backtrace|blm|boxa|box|brp|cflags|chop|close|composite|color\n|cp|devicem|ecs|ecr|evc|fam|fchar|fcolor|fschar|fspecial|ftr|fzoom\n|gcolor|hcode|hla|hlm|hpfa|hpfcode|hpf|hym|hys|itc|kern|length|linetabs|lsm\n|mso|m?soquiet|nroff|opena|open|pev|pnr|psbb|ptr|pvs|rchar|rfschar|rj\n|rnn|schar|shc|shift|sizes|special|spreadwarn|stringdown|stringup|sty\n|substring|tkf|tm1|tmc|trf|trin|trnt|troff|unformat|vpt|warnscale|warn\n|writec|writem|write)\n(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.request.$3.gnu.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(class)[ \\t]+(\\S+)",
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {
              name: 'variable.parameter.roff',
              patterns: [{include: '#escapes'}]
            }
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.request.assign-class.gnu.roff',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#c0'}]},
                2: {name: 'punctuation.separator.dash.roff'},
                3: {patterns: [{include: '#c0'}]}
              },
              match: '([^\\s\\\\]+)(-)([^\\s\\\\]+)',
              name: 'string.unquoted.character-range.roff'
            },
            {include: '#params'}
          ]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(char)[ \\t]*(\\S+)?[ \\t]*(.*)(?=$|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.var.roff'},
            4: {
              name: 'variable.parameter.roff',
              patterns: [{include: '#escapes'}]
            },
            5: {patterns: [{include: '#param-group'}]}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?["#])',
          name: 'meta.function.request.$3.gnu.roff',
          patterns: [{include: '$self'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(defcolor)(?=\\s)[ \\t]*((?:[^\\s\\\\]|\\\\(?!E?["#]).)*)[ \\t]*(rgb|cmyk?|gr[ae]y)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.var.roff'},
            4: {
              name: 'string.other.colour-name.roff',
              patterns: [{include: '#escapes'}]
            },
            5: {name: 'constant.language.colour-scheme.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?["#])',
          name: 'meta.function.request.define-colour.gnu.roff',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.colour.roff'}},
              match: '(#{1,2})[A-Fa-f0-9]+',
              name: 'constant.other.colour.hex.roff'
            },
            {include: '#params'}
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {
              name: 'source.embedded.ditroff',
              patterns: [{include: 'source.ditroff#xCommands'}]
            }
          },
          match:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(device)(?:[ \\t]+(.+?))?(?=\\s*(?:\\\\E?"|$))',
          name: 'meta.function.request.device-control.gnu.roff'
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(output)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          contentName: 'source.embedded.ditroff',
          end: '(.*)(?<!\\\\)(?=$)|(?=\\\\E?")|(?=^(?!\\G))',
          endCaptures: {
            0: {name: 'source.embedded.ditroff'},
            1: {patterns: [{include: 'source.ditroff'}]}
          },
          name: 'meta.function.request.transparent-output.gnu.roff',
          patterns: [
            {include: '#continuous-newline'},
            {include: 'source.ditroff'}
          ]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(pi|pso|sy)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?["#])',
          name: 'meta.function.request.external-command.$3.roff',
          patterns: [
            {include: '#escapes'},
            {
              captures: {
                0: {
                  patterns: [
                    {
                      begin: '\\G|^',
                      end: '$',
                      name: 'source.embedded.shell',
                      patterns: [
                        {include: '#escapes'},
                        {include: 'source.shell'}
                      ]
                    }
                  ]
                }
              },
              match: '(?:^|\\G).+?(?=\\\\*$|\\\\+E?(?:$|["#]))'
            }
          ]
        },
        {
          begin:
            "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(break|continue|return)(?=\\s)",
          beginCaptures: {
            0: {name: 'meta.function.request.control.gnu.roff'},
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'keyword.control.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          patterns: [{include: '#param-group'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(ab|tm)(?=\\s|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          contentName: 'string.unquoted.roff',
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.request.$3.roff',
          patterns: [{include: '#escapes-copymode'}]
        },
        {
          begin:
            '(?x) (?:^|\\G)([.\'])[ \\t]* (?:(do)[ \\t]+)?\n(ab|ad|af|bd|bp|br|c2|cc|ce|cf|ch|cs|da|di|dt|ec|em|eo|ev\n|ex|fc|fi|fl|fp|ft|hc|hw|hy|in|it|lc|lg|lf|ll|ls|lt|mc|mk\n|na|ne|nf|nh|nm|nn|ns|nx|os|pc|pi|pl|pm|pn|po|ps|rd|rm|rn\n|rr|rs|rt|so|sp|ss|sv|sy|ta|tc|ti|tm|tr|uf|vs|wh)\n(?=\\s|\\d+\\s*$|\\\\E?["#])',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=(?!R)\\R|$)|(?=\\\\E?")',
          name: 'meta.function.request.$3.roff',
          patterns: [{include: '#param-group'}]
        },
        {
          begin:
            "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?((el|ie|if|while)|(nop))(?=$|[\\s\\(\"'\\\\!\\x02-\\a\\x7F])",
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            4: {name: 'keyword.control.flow.roff'},
            5: {name: 'entity.function.name.gnu.roff'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.function.request.$3.roff',
          patterns: [
            {
              begin: '(?<=ie|if|while)\\G[ \\t]*(?>(!)[ \\t]*)?',
              beginCaptures: {1: {name: 'keyword.operator.logical.not.roff'}},
              end: '(?!\\G)',
              name: 'meta.condition.roff',
              patterns: [
                {
                  match: '\\G([notevh])',
                  name: 'constant.language.builtin-comparison.$1.roff'
                },
                {
                  captures: {
                    1: {
                      name: 'constant.language.builtin-comparison.$1.gnu.roff'
                    },
                    2: {
                      name: 'entity.name.roff',
                      patterns: [{include: '#escapes'}]
                    }
                  },
                  match:
                    '\\G([cdFmrS])[ \\t]*((?:[^ \\t\\\\]|\\\\(?!E?["#]).)+)'
                },
                {
                  begin: '\\G(?=\\|?[\\(\\d\\\\])',
                  end: "(?<=\\))[CDMPTcimnpstuvz]?(?!\\s*[-+*&:^?=/|\\d<>\\(\\)])|(?=[.']|\\\\{)|(?<!\\\\)$",
                  endCaptures: {0: {patterns: [{include: '#units'}]}},
                  name: 'meta.equation.roff',
                  patterns: [{include: '#arithmetic'}]
                },
                {
                  begin: '\\G(?=([^\\d\\s\\\\]).*?\\1.*?\\1)',
                  end: '(?!\\G)',
                  name: 'meta.string-comparison.roff',
                  patterns: [{include: '#2-part-string'}]
                },
                {
                  captures: {0: {patterns: [{include: '#continuous-newline'}]}},
                  match: '\\\\+(?=$)'
                },
                {include: '#escapes'}
              ]
            },
            {
              begin: "(?=[.'])",
              end: '(?!\\G)',
              patterns: [
                {
                  captures: {1: {patterns: [{include: '#requests'}]}},
                  match:
                    "\\G([.'][ \\t]*(?:do[ \\t]+)?(?:ig|ul|(?:de|am)i?1?)(?=$|\\s).*)"
                },
                {
                  captures: {0: {patterns: [{include: '#continuous-newline'}]}},
                  match: '\\\\+$'
                },
                {include: '#requests'},
                {include: '#macros'},
                {include: '$self'}
              ]
            },
            {
              captures: {0: {patterns: [{include: '#continuous-newline'}]}},
              match: '\\\\+$'
            },
            {include: '$self'}
          ]
        },
        {include: '#definition'},
        {include: '#ignore'},
        {include: '#underlines'},
        {
          begin:
            "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(nr)[ \\t]*(\\S*)[ \\t]*(.*)$",
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.var.roff'},
            4: {
              patterns: [
                {
                  match: '%|ct|dl|dn|dw|dy|ln|mo|nl|sb|st|yr|c\\.',
                  name: 'support.variable.predefined.register.roff'
                },
                {
                  match: '\\$\\$|\\.[$AFHLRTVa-dfh-lnops-z]\\b',
                  name: 'invalid.illegal.readonly.register.roff'
                },
                {
                  match: '\\.(?:cp|nm|[CgmMOPUxyY])\\b',
                  name: 'invalid.illegal.readonly.register.gnu.roff'
                },
                {
                  captures: {0: {patterns: [{include: '#escapes'}]}},
                  match: '.+',
                  name: 'entity.name.register.roff'
                }
              ]
            },
            5: {patterns: [{include: '#arithmetic'}, {include: '#param-group'}]}
          },
          end: '(?<!\\\\)$',
          name: 'meta.function.request.$3.roff'
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?([ad]s1?)[ \\t]+(((?:[^\\s\\\\]|\\\\(?!E?").)+))?',
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'storage.type.var.roff'},
            4: {name: 'variable.parameter.roff', patterns: [{include: '#c0'}]},
            5: {name: 'entity.name.roff', patterns: [{include: '#escapes'}]}
          },
          contentName: 'string.unquoted.roff',
          end: '(?<!\\\\)$',
          name: 'meta.function.request.$3.roff',
          patterns: [{include: '#escapes-clipped'}, {include: '#escapes'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(tl)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'}
          },
          contentName: 'function-call.arguments.roff',
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.request.$3.roff',
          patterns: [{include: '#3-part-title'}, {include: '#params'}]
        }
      ]
    },
    string: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.roff'},
            2: {name: 'punctuation.definition.string.end.roff'}
          },
          match: '(?<=(?<=[^\\\\]|\\G|^)\\s|\\G|^)(")(")(?=\\s|$)',
          name: 'string.quoted.double.empty.roff'
        },
        {
          begin: '(?<=(?<=[^\\\\]|\\G|^)\\s|\\G|^)"(?!")',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.roff'}
          },
          end: '(?<!")"(?!")|(?<!\\\\)$|(?=\\\\E?")',
          endCaptures: {0: {name: 'punctuation.definition.string.end.roff'}},
          name: 'string.quoted.double.roff',
          patterns: [{include: '#string-escapes'}]
        },
        {include: '#c0'}
      ]
    },
    'string-escapes': {
      patterns: [
        {match: '""', name: 'constant.character.escape.quote.double.roff'},
        {include: '#escapes-clipped'},
        {include: '#escapes'}
      ]
    },
    tbl: {
      patterns: [
        {
          begin: '\\G|^((\\.)T&)[ \\t]*$',
          beginCaptures: {
            1: {name: 'entity.function.name.roff'},
            2: {name: 'punctuation.definition.macro.roff'}
          },
          end: "(\\.)$(?!R)\\R?|^(?=[.'][ \\t]*TE(?=\\s))",
          endCaptures: {
            1: {patterns: [{include: '#params'}]},
            2: {name: 'punctuation.terminator.section.tbl.roff'}
          },
          name: 'meta.function-call.arguments.tbl.roff',
          patterns: [
            {
              begin: '(?:^|\\G)(?=\\.)',
              end: '^(?=[.\'][ \\t]*TE(?=\\s|\\\\E?["#]))',
              patterns: [{include: '$self'}]
            },
            {
              captures: {
                1: {
                  patterns: [
                    {match: ',', name: 'punctuation.separator.comma.tbl.roff'},
                    {
                      match:
                        '\\b(center|centre|expand|box|allbox|doublebox)\\b',
                      name: 'constant.language.$1.tbl.roff'
                    },
                    {
                      captures: {
                        1: {name: 'constant.language.$2.tbl.roff'},
                        3: {
                          name: 'punctuation.definition.arguments.begin.tbl.roff'
                        },
                        4: {patterns: [{include: '#params'}]},
                        5: {
                          name: 'punctuation.definition.arguments.end.tbl.roff'
                        }
                      },
                      match: '\\b((tab|linesize|delim)(\\()([^\\)\\s]*)(\\)))'
                    }
                  ]
                },
                2: {name: 'punctuation.terminator.line.tbl.roff'}
              },
              match: '(?:^|\\G)(.+)(;)$'
            },
            {
              match: '[ABCEFILNPRSTUVWZabcefilnprstuvwz^]',
              name: 'constant.language.key-letter.tbl.roff'
            },
            {match: '[|_=]', name: 'punctuation.keyword.tbl.roff'},
            {match: '[-+]?\\d+', name: 'constant.numeric.tbl.roff'},
            {
              match: '\\.',
              name: 'punctuation.delimiter.period.full-stop.tbl.roff'
            },
            {match: ',', name: 'punctuation.separator.comma.tbl.roff'},
            {include: '#params'}
          ]
        },
        {
          match: '(?:^|\\G)\\s*([=_]|\\\\_)\\s*$',
          name: 'punctuation.keyword.tbl.roff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.tbl.roff'},
            2: {name: 'punctuation.definition.escape.roff'},
            3: {name: 'string.unquoted.tbl.roff'}
          },
          match: '(?<!\\\\)((\\\\)R)(.)',
          name: 'constant.character.escape.repeat.tbl.roff'
        },
        {
          captures: {
            0: {name: 'keyword.operator.tbl.roff'},
            1: {name: 'punctuation.definition.escape.roff'}
          },
          match: '(\\\\)\\^',
          name: 'constant.character.escape.vertical-span.tbl.roff'
        },
        {
          begin: 'T(\\{)',
          beginCaptures: {
            0: {name: 'keyword.operator.section.begin.tbl.roff'},
            1: {name: 'punctuation.embedded.tbl.roff'}
          },
          contentName: 'string.unquoted.tbl.roff',
          end: "^T(\\})|^(?=[.'][ \\t]*TE\\b)",
          endCaptures: {
            0: {name: 'keyword.operator.section.end.tbl.roff'},
            1: {name: 'punctuation.embedded.tbl.roff'}
          },
          name: 'meta.multiline-cell.tbl.roff',
          patterns: [{include: '$self'}]
        },
        {include: '$self'}
      ]
    },
    'underline-first': {
      patterns: [
        {
          begin: '\\G[ \\t]*(?!")(?=(?:[^\\s\\\\]|\\\\(?!E?").)+)',
          contentName: 'markup.underline.roff',
          end: '(?<![^\\\\]\\\\|^\\\\)(?=\\s|$)|(?=\\\\E?")',
          name: 'string.other.link.roff',
          patterns: [{include: '#escapes'}]
        },
        {
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.roff'}
          },
          endCaptures: {0: {name: 'punctuation.definition.string.end.roff'}},
          match: '(")(")',
          name: 'string.quoted.double.empty.roff'
        },
        {
          begin: '\\G[ \\t]*(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.roff'}
          },
          contentName: 'markup.underline.roff',
          end: '((?:"")*)"(?!")|(?<!\\\\)$|(?=\\\\E?")',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.roff'},
            1: {
              name: 'markup.underline.roff',
              patterns: [{include: '#string-escapes'}]
            }
          },
          name: 'string.other.link.roff',
          patterns: [{include: '#string-escapes'}]
        },
        {include: '#escapes'},
        {include: '#string'}
      ]
    },
    underlines: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.function.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {name: 'constant.numeric.roff'},
            5: {patterns: [{include: '#params'}]}
          },
          match:
            '(?:^|\\G)([.\'])[ \\t]*(?:(do)[ \\t]+)?(ul|cu)\\s*(0+)(?:(?!\\\\E?")\\D)*(?=\\s|$)(.*)$',
          name: 'meta.function.request.$3.roff'
        },
        {
          begin:
            "(?:^|\\G)([.'])[ \\t]*(?:(do)[ \\t]+)?(ul|cu)(?=\\s|$|\\\\)(.*?)$(?!R)\\R?",
          beginCaptures: {
            0: {name: 'meta.function.request.$3.roff'},
            1: {name: 'punctuation.definition.function.request.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'entity.function.name.roff'},
            4: {patterns: [{include: '#params'}]}
          },
          end: '(?!\\G)(?<!\\\\)$',
          patterns: [
            {
              begin: "(?:^|\\G)(?=[.']|\\\\E?!)(.*)$(?!R)\\R?",
              beginCaptures: {1: {patterns: [{include: '$self'}]}},
              end: '(?!\\G)^'
            },
            {
              begin: "(?:^|\\G)(?![.'])",
              contentName: 'markup.underline.roff',
              end: '(?!\\G)(?<!\\\\)$',
              name: 'string.other.link.roff'
            }
          ]
        }
      ]
    },
    units: {
      patterns: [
        {match: '[Pcimnpuv]', name: 'keyword.other.unit.roff'},
        {match: 'z', name: 'keyword.other.unit.gnu.roff'},
        {match: '[CDMTst]', name: 'keyword.other.unit.heirloom.roff'}
      ]
    },
    www: {
      patterns: [
        {
          begin:
            "(?x) (?:^|\\G)([.'])[ \\t]*\n(ALN|BCL|BGIMG|DC|DLE|DLS|HEAD|HR|HTM?L|HX|JOBNAME\n|LI|LINKSTYLE|LK|LNE|LNS|MPIMG|NHR|P?IMG|TAG)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)$|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.www.macro.roff',
          patterns: [{include: '#params'}]
        },
        {
          begin: "(?:^|\\G)([.'])[ \\t]*(URL|FTP|MTO)(?=\\s)",
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          end: '(?<!\\\\)(?=$)|(?=\\\\E?")',
          name: 'meta.function.${2:/downcase}.www.macro.roff',
          patterns: [{include: '#underline-first'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(CDS)(?=\\s|\\\\E?["#])\\s*(\\\\E?[#"].*)?$',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'markup.raw.roff',
          end: '^([.\'])[ \\t]*(CDE)(?=\\s|\\\\E?["#])',
          endCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          name: 'meta.function.${2:/downcase}.www.macro.roff',
          patterns: [{include: '$self'}]
        },
        {
          begin:
            '(?:^|\\G)([.\'])[ \\t]*(HnS)(?=\\s)(?:\\s*(\\d+))?(?:\\s*(\\\\E?[#"].*)$)?',
          beginCaptures: {
            0: {name: 'meta.function.${2:/downcase}.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.numeric.roff'},
            4: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'string.unquoted.heading.roff',
          end: "^([.'])[ \\t]*(HnE)(?=\\s)(.*)$",
          endCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          name: 'markup.heading.$3.www.macro.roff',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(OLS)(?=\\s)\\s*(\\\\E?[#"].*)?$',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'markup.list.ordered.roff',
          end: "^([.'])[ \\t]*(OLE)(?=\\s)",
          endCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          name: 'meta.function.${2:/downcase}.www.macro.roff',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?:^|\\G)([.\'])[ \\t]*(ULS)(?=\\s)\\s*(\\\\E?[#"].*)?$',
          beginCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: '#escapes'}]}
          },
          contentName: 'markup.list.ordered.roff',
          end: "^([.'])[ \\t]*(ULE)(?=\\s)",
          endCaptures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          name: 'meta.function.${2:/downcase}.www.macro.roff',
          patterns: [{include: '$self'}]
        }
      ]
    }
  },
  scopeName: 'text.roff'
}

export default grammar
