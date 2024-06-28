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
  dependencies: ['source.shell', 'text.html.basic', 'text.roff'],
  extensions: ['.pic', '.chem'],
  names: ['pic', 'pikchr'],
  patterns: [
    {include: '#binary'},
    {include: '#tags'},
    {include: '#embedded-roff'},
    {include: '#embedded-latex'},
    {include: '#main'}
  ],
  repository: {
    attributes: {
      patterns: [
        {
          match: '\\bsame\\s+as\\b',
          name: 'entity.other.attribute-name.same-as.pikchr.pic'
        },
        {
          match:
            '(?x)\\b (chop|cw|dashed|diameter|diam|dotted|down|height|ht|invisible |invis|left|radius|rad|right|same|up|width|wid)\\b',
          name: 'entity.other.attribute-name.$1.pic'
        },
        {
          applyEndPatternLast: true,
          begin: '\\b(colou?r(?:ed)?|outlined?|shaded|fill)\\b[ \\t]*(?=\\w)',
          end: '(?=\\S)|(?<=\\S)',
          name: 'entity.other.attribute-name.$1.pic',
          patterns: [
            {
              match: '\\G0[Xx][0-9A-Fa-f]{6}',
              name: 'constant.numeric.hexadecimal.hex.pikchr.pic'
            },
            {
              match: '(?i)\\G(None|Off)\\b',
              name: 'support.constant.no-colour.pikchr.pic'
            },
            {
              match:
                '(?xi)\\G (AliceBlue|AntiqueWhite|Aquamarine|Aqua|Azure|Beige|Bisque|Black|BlanchedAlmond|BlueViolet|Blue|Brown|BurlyWood|CadetBlue |Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGreen|DarkGr[ae]y |DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y |DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|Firebrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro |GhostWhite|Goldenrod|Gold|Gr[ae]y|GreenYellow|Green|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|LavenderBlush|Lavender |LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenrodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon |LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|LimeGreen|Lime|Linen|Magenta|Maroon|MediumAquamarine |MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed |MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|OliveDrab|Olive|OrangeRed|Orange|Orchid |PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple |Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow |SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|WhiteSmoke|White|YellowGreen|Yellow)\\b',
              name: 'support.constant.colour.pikchr.pic'
            }
          ]
        },
        {
          match:
            '\\b(aligned|big|bold|fit|italic|mono(?:space)?|small|(?:thickness|color|fill)(?!\\s*(?:[-:+/*%=!<>]?=|<|>))|thick|thin)\\b',
          name: 'entity.other.attribute-name.$1.pikchr.pic'
        },
        {
          match: '\\b(scaled)\\b',
          name: 'entity.other.attribute-name.$1.dpic.pic'
        }
      ]
    },
    backref: {
      patterns: [
        {
          match:
            '\\b(last|(?:\\d*1[1-3]th|\\d*0th|(?:(?!11st)\\d)*1st|\\d*2nd|(?:(?!13rd)\\d*)3rd|\\d*[4-9]th)(?:[ \\t]+last)?)\\b',
          name: 'variable.language.backreference.pic'
        },
        {
          captures: {
            1: {name: 'string.quoted.single.pic'},
            2: {name: 'punctuation.definition.string.begin.pic'},
            3: {name: 'meta.expression.pic', patterns: [{include: '#main'}]},
            4: {name: 'punctuation.definition.string.end.pic'},
            5: {name: 'constant.language.ordinal-suffix.pic'}
          },
          match: "((')([^']*)('))(th)",
          name: 'meta.backreference.computed.pic'
        },
        {
          match: '\\b(first|previous)\\b',
          name: 'variable.language.backreference.pikchr.pic'
        }
      ]
    },
    binary: {
      begin: '^(?=.*(?![\\x02-\\x07\\f\\x7F])[\\x00-\\x06\\x{FFFD}])',
      end: '(?=A)B',
      name: 'raw.binary.data'
    },
    boolean: {
      match: '\\b(true|false|on|off)\\b',
      name: 'constant.boolean.$1.dformat.pic'
    },
    brackets: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.pic'}
          },
          end: '(?=\\))|^(?=\\.P[EF]\\b)',
          patterns: [
            {
              match: '\\b(?:color|fill|thickness)\\b',
              name: 'variable.language.global.pikchr.pic'
            },
            {include: '#main'}
          ]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.pic'}
          },
          end: '(?=\\])|^(?=\\.P[EF]\\b)',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.pic'}
          },
          end: '(?=\\})|^(?=\\.P[EF]\\b)',
          patterns: [{include: '#main'}]
        }
      ]
    },
    chem: {
      patterns: [
        {include: '#label'},
        {
          captures: {
            1: {name: 'storage.modifier.$1.pic.chem'},
            2: {name: 'storage.type.bond.pic.chem'}
          },
          match: '\\b(?:(?:(double|triple|front|back)[ \\t]+)?\\b(bond))\\b'
        },
        {
          captures: {
            1: {name: 'storage.modifier.aromatic.pic.chem'},
            2: {name: 'storage.type.ring.pic.chem'}
          },
          match: '(?:\\b(aromatic)[ \\t]+)?\\b(benzene|(?:flat)?ring\\d*)'
        },
        {
          match: '\\b(pointing)\\b',
          name: 'storage.modifier.direction.pic.chem'
        },
        {
          captures: {
            1: {name: 'entity.other.attribute-name.size.pic.chem'},
            2: {name: 'constant.numeric.parameter.pic.chem'}
          },
          match: '\\b(size)\\b[ \\t]*(\\d+)',
          name: 'meta.set-size.pic.chem'
        },
        {match: '\\bBP\\b', name: 'keyword.control.branch-point.pic.chem'},
        {
          captures: {
            1: {
              patterns: [
                {include: '#punctuation'},
                {
                  match: '\\.',
                  name: 'punctuation.delimiter.period.full-stop.chem.pic'
                }
              ]
            }
          },
          match: '(?=[A-Z])(?!BP)([\\w\\(\\).]+)',
          name: 'string.unquoted.group-name.pic.chem'
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.chem.pic'}
          },
          end: "(?=\\))|^(?=\\.P[EF]\\b|^[.']\\s*cend\\b)",
          patterns: [{include: '#chem'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.chem.pic'}
          },
          end: "(?=\\])|^(?=\\.P[EF]\\b|^[.']\\s*cend\\b)",
          patterns: [{include: '#chem'}]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.chem.pic'}
          },
          end: "(?=\\})|^(?=\\.P[EF]\\b|^[.']\\s*cend\\b)",
          patterns: [{include: '#chem'}]
        },
        {include: '$self'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.pic'}},
          end: '$',
          name: 'comment.line.number-sign.pic'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.pic'}},
          end: '$',
          name: 'comment.line.double-slash.non-standard.pikchr.pic'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.pic'}
          },
          end: "\\*/|^(?=\\.P[EF]\\b|^[.']\\s*cend\\b)",
          endCaptures: {0: {name: 'punctuation.definition.comment.end.pic'}},
          name: 'comment.block.non-standard.pikchr.pic'
        }
      ]
    },
    dformat: {
      patterns: [
        {include: '#pic-line'},
        {
          begin: '^style\\b',
          beginCaptures: {
            0: {name: 'entity.other.attribute-name.style.dformat.pic'}
          },
          end: '$',
          name: 'meta.format.dformat.pic',
          patterns: [
            {include: '#boolean'},
            {
              match:
                '(?x)\\b\n(addr|addrdelta|addrht|bitwid|charwid|fill|linedisp\n|linethrutext|recht|recspread|reset|textht)\\b',
              name: 'constant.language.dformat.pic'
            },
            {include: '#number'}
          ]
        },
        {
          begin: '^\\S.*$\\R?',
          beginCaptures: {0: {name: 'markup.bold.heading.dformat.pic'}},
          end: '^(?=\\S)',
          name: 'meta.record.dformat.pic',
          patterns: [
            {
              captures: {
                0: {name: 'markup.list.unnumbered.dformat.pic'},
                1: {patterns: [{include: '#main'}]},
                2: {
                  patterns: [
                    {
                      match: '-',
                      name: 'punctuation.separator.dash.dformat.pic'
                    },
                    {include: '#number'}
                  ]
                },
                3: {
                  patterns: [
                    {
                      begin: '@',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.section.begin.eqn'}
                      },
                      contentName: 'source.embedded.eqn.roff',
                      end: '@',
                      endCaptures: {
                        0: {name: 'punctuation.definition.section.end.eqn'}
                      },
                      patterns: [{include: 'text.roff#eqn'}]
                    }
                  ]
                }
              },
              match: '^([ \\t]+[^:\\s]+:)?(?:(?<=:)|[ \\t]+)(\\S+)\\s+(.*)$'
            }
          ]
        }
      ]
    },
    'embedded-latex': {
      captures: {0: {patterns: [{include: 'text.tex'}]}},
      match: '^(?:\\\\\\w|%).*$',
      name: 'source.embedded.tex.pic'
    },
    'embedded-roff': {
      begin: "^(?=[.'][ \\t]*(?:\\w|\\\\))",
      end: '(?<!\\\\)$|(\\\\".*)$',
      endCaptures: {1: {patterns: [{include: 'text.roff'}]}},
      patterns: [{include: 'text.roff'}]
    },
    'escaped-newline': {
      begin: '\\\\$\\R?',
      beginCaptures: {0: {name: 'punctuation.definition.escape.pic'}},
      end: "^(?:[.'])?",
      name: 'constant.character.escape.newline.pic'
    },
    'function-call': {
      begin: '\\b(?!\\d)(\\w+)(?=\\()',
      beginCaptures: {1: {patterns: [{include: '#function-name'}]}},
      contentName: 'meta.function-call.pic',
      end: '(?!\\G)',
      patterns: [
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.arguments.begin.pic'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.arguments.end.pic'}},
          name: 'meta.arguments.pic',
          patterns: [{include: '#main'}]
        }
      ]
    },
    'function-name': {
      patterns: [
        {
          match:
            '(?:\\G|^)(atan2|cos|exp|int|log|max|min|s?rand|sin|sqrt|sprintf)$',
          name: 'support.function.$1.pic'
        },
        {match: '(?:\\G|^)\\S+', name: 'entity.name.function.user-defined.pic'}
      ]
    },
    globals: {
      patterns: [
        {
          match:
            '(?x)\\b\n(arcrad|arrowhead|arrowht|arrowwid|boxht|boxwid|circlerad|dashwid\n|ellipseht|ellipsewid|fillval|lineht|linewid|maxpsht|maxpswid\n|moveht|movewid|scale|textht|textwid)\\b',
          name: 'variable.language.global.pic'
        },
        {
          match:
            '\\b((?:left|right|top|bottom)?margin|charht|charwid|color|fill|fontscale|thickness)\\b',
          name: 'variable.language.global.pikchr.pic'
        }
      ]
    },
    grap: {
      patterns: [
        {match: '\\bpid\\b', name: 'variable.language.process-id.pic.grap'},
        {match: '\\bthen\\b', name: 'keyword.control.then.pic.grap'},
        {match: '\\b(in|out|through)\\b', name: 'keyword.operator.pic.grap'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#number'},
        {include: '#boolean'},
        {include: '#punctuation'},
        {include: '#operators'},
        {include: '#function-call'},
        {include: '#macros'},
        {include: '#pic-line'},
        {
          captures: {0: {name: 'entity.function.name.pic.grap'}},
          match:
            '(?x)\\b\n(assignment|circle|coord|copy|draw|for|frame|graph|grid|if|label\n|line|new|next|numberlist|pic|plot|print|sh|ticks?)\\b',
          name: 'keyword.function.pic.grap'
        },
        {
          match:
            '(?x)\\b\n(above|arrow|below|bot|bottom|dashed|dotted|down|ht|invis\n|left|log|radius|right|[lr]just|size|solid|top|up|wid|x|y)\\b',
          name: 'variable.other.property.$1.pic.grap'
        },
        {
          match:
            '(?x)\\b\n(atan2|cos|exp|int|log|max|min|rand|sin|sqrt|bullet\n|plus|box|star|dot|times|htick|vtick|square|delta)\\b',
          name: 'support.function.grap.pic'
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.chem.pic'}
          },
          end: "(?=\\))|^(?=\\.P[EF]\\b|^[.']\\s*G2\\b)",
          patterns: [{include: '#grap'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.chem.pic'}
          },
          end: "(?=\\])|^(?=\\.P[EF]\\b|^[.']\\s*G2\\b)",
          patterns: [{include: '#grap'}]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.chem.pic'}
          },
          end: "(?=\\})|^(?=\\.P[EF]\\b|^[.']\\s*G2\\b)",
          patterns: [{include: '#grap'}]
        },
        {include: '#keywords'}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(for|do|if|then(?=\\s*\\{)|else)\\b',
          name: 'keyword.control.$1.pic'
        },
        {
          match:
            '\\b(and|at|by|copy|from|reset|sh|then|thru|to|with|of(?:\\s+the\\s+way\\s+between)?)\\b',
          name: 'keyword.operator.$1.pic'
        },
        {match: '\\b(continue|exec)\\b', name: 'keyword.operator.$1.dpic.pic'},
        {
          match:
            '\\b(above|below|close|go|heading|until\\s+even\\s+with|vertex\\s+of)\\b',
          name: 'keyword.operator.$1.pikchr.pic'
        }
      ]
    },
    label: {
      captures: {
        1: {name: 'storage.type.label.pic'},
        2: {name: 'punctuation.separator.key-value.pic'}
      },
      match: '([A-Z][^#("\\s:]*)(:)'
    },
    macros: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.function.pic'},
            2: {name: 'entity.name.function.pic'}
          },
          match: '(define|undef)\\b\\s*(\\w*)',
          name: 'meta.function.$1.pic'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable'}},
          match: '(\\$)\\d+',
          name: 'variable.other.positional.pic'
        },
        {
          begin: '(until)[ \\t]+((")([^"]+)("))\\s*$\\R?',
          beginCaptures: {
            1: {name: 'keyword.control.until.pic'},
            2: {name: 'string.quoted.double.pic'},
            3: {name: 'punctuation.definition.string.begin.pic'},
            5: {name: 'punctuation.definition.string.end.pic'}
          },
          end: '^[ ]*(\\4)\\b',
          endCaptures: {1: {name: 'keyword.control.terminator.pic'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#shell-command'},
        {include: '#keywords'},
        {include: '#positions'},
        {include: '#backref'},
        {include: '#macros'},
        {include: '#string'},
        {include: '#number'},
        {include: '#escaped-newline'},
        {include: '#operators'},
        {include: '#brackets'},
        {include: '#punctuation'},
        {include: '#primitives'},
        {include: '#attributes'},
        {include: '#globals'},
        {include: '#function-call'},
        {include: '#label'},
        {include: '#name'}
      ]
    },
    name: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.pic'}},
          match: '(\\$)(?!0)\\d+\\b',
          name: 'variable.positional.other.pic'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.pikchr.pic'}},
          match: '([$@])\\w+',
          name: 'variable.other.user-defined.non-standard.pikchr.pic'
        },
        {match: '(?!\\d)\\w+\\b', name: 'variable.other.user-defined.pic'}
      ]
    },
    number: {
      captures: {
        1: {name: 'constant.other.unit.percentage.pikchr.pic'},
        2: {name: 'constant.other.unit.$2.pikchr.pic'}
      },
      match:
        '(?:(?<!\\d)-)?(?:\\d+(?:\\.(?:\\d+|(?=[Ee][-+]?\\d)))?)(?:[Ee][-+]?\\d+)?(?:(%)|(cm|in|mm|pc|pt|px)\\b)?',
      name: 'constant.numeric.pic'
    },
    operators: {
      patterns: [
        {match: '<->|<-|->', name: 'keyword.operator.arrow.pic'},
        {match: '←|→|↔', name: 'keyword.operator.arrow.unicode.pikchr.pic'},
        {match: '&&|\\|{2}', name: 'keyword.operator.logical.boolean.pic'},
        {
          match: '[<>]=?',
          name: 'keyword.operator.comparison.relational.numeric.pic'
        },
        {
          match: '[!=]=',
          name: 'keyword.operator.comparison.relational.boolean.pic'
        },
        {match: '[-+*/]=', name: 'keyword.operator.assignment.compound.pic'},
        {match: ':?=', name: 'keyword.operator.assignment.pic'},
        {match: '[-/+*%^]', name: 'keyword.operator.arithmetic.pic'},
        {match: '!', name: 'keyword.operator.logical.not.negation.pic'},
        {
          captures: {
            0: {patterns: [{include: 'text.html.basic#character-reference'}]}
          },
          match: '&(?:(?:left|right|leftright)arrow|[lr]arr);',
          name: 'keyword.operator.arrow.html-entity.pikchr.pic'
        }
      ]
    },
    'pic-line': {
      begin: '^(pic)\\b',
      beginCaptures: {1: {name: 'keyword.control.dformat.pic'}},
      end: '$',
      patterns: [{include: '#main'}]
    },
    positions: {
      patterns: [
        {
          match:
            '(?<=\\.)(?:bottom|bot|center|end|left|right|start|top|[ns][ew]|[bcelnrstw])\\b',
          name: 'entity.other.attribute-name.corner.pic'
        },
        {
          match:
            '(?x) \\b\n( (?:bottom|center|east|end|north|south|start|top|west|Here)\n| (?:lower|upper) \\s+ (?:left|right)\n| (?:left|right) (?=\\s+ of \\b)\n) \\b',
          name: 'variable.language.placement.pic'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  match: '<',
                  name: 'punctuation.definition.position.bracket.angle.begin.pic'
                },
                {
                  match: '>',
                  name: 'punctuation.definition.position.bracket.angle.end.pic'
                },
                {
                  match: ',',
                  name: 'punctuation.separator.coordinates.comma.pic'
                },
                {include: '#main'}
              ]
            }
          },
          match: '(?<balance><([^<>]++|\\g<balance>)*+>){0}\\g<balance>',
          name: 'meta.position.pic'
        }
      ]
    },
    primitives: {
      patterns: [
        {
          match:
            '\\b(box|line|arrow|circle|ellipse|arc|move|spline|print|command|plot)\\b',
          name: 'storage.type.primitive.$1.pic'
        },
        {
          match: '\\b(oval|cylinder|file|dot|text)\\b',
          name: 'storage.type.primitive.$1.pikchr.pic'
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: '\\}', name: 'punctuation.definition.bracket.curly.pic'},
        {match: '\\)', name: 'punctuation.definition.bracket.round.pic'},
        {match: '\\]', name: 'punctuation.definition.bracket.square.pic'},
        {match: ';', name: 'punctuation.terminator.statement.pic'},
        {match: ',', name: 'punctuation.separator.comma.pic'},
        {match: '<|>', name: 'punctuation.definition.bracket.angle.pic'},
        {
          match: '\\.(?!\\d)',
          name: 'punctuation.delimiter.period.full-stop.pic'
        }
      ]
    },
    'shell-braces': {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.group.shell.begin.shell'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.group.shell.end.shell'}},
      name: 'meta.scope.group.shell',
      patterns: [{include: '#shell-braces'}, {include: 'source.shell'}]
    },
    'shell-command': {
      begin: '\\b(sh)\\b[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.$1.pic'}},
      end: '(?!\\G)',
      name: 'meta.shell-command.pic',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\G{',
          beginCaptures: {
            0: {
              name: 'punctuation.section.embedded.balanced-text.brace.begin.pic'
            }
          },
          contentName: 'source.embedded.shell',
          end: '}',
          endCaptures: {
            0: {
              name: 'punctuation.section.embedded.balanced-text.brace.end.pic'
            }
          },
          patterns: [{include: '#shell-braces'}, {include: 'source.shell'}]
        },
        {
          begin: '\\G(.)',
          beginCaptures: {
            0: {
              name: 'punctuation.section.embedded.balanced-text.arbitrary-delimiter.begin.pic'
            }
          },
          contentName: 'source.embedded.shell',
          end: '\\1',
          endCaptures: {
            0: {
              name: 'punctuation.section.embedded.balanced-text.arbitrary-delimiter.end.pic'
            }
          },
          patterns: [{include: 'source.shell'}]
        }
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.pic'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.pic'}},
      name: 'string.quoted.double.pic',
      patterns: [{include: '#string-escapes'}]
    },
    'string-escapes': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.pic'}},
          match: '(\\\\)[\\\\"]',
          name: 'constant.character.escape.pic'
        },
        {
          captures: {0: {patterns: [{include: 'text.roff#escapes'}]}},
          match: '(?:[^"\\\\]|\\\\[^"])+'
        }
      ]
    },
    tags: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'punctuation.definition.filename.roff'},
            4: {patterns: [{include: 'text.roff#params'}]}
          },
          match: '^([.\'])[ \\t]*(PS)[ \\t]*(<)(.*)(?=$|\\\\")',
          name: 'invalid.deprecated.function.picture.macro.roff'
        },
        {
          begin: '^([.\'])[ \\t]*(PS)\\b([\\d \\t]*(?:#.*)?)?(\\\\[#"].*)?$',
          beginCaptures: {
            0: {name: 'meta.function.begin.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'},
            3: {patterns: [{include: 'source.pic'}]},
            4: {patterns: [{include: 'text.roff#escapes'}]}
          },
          contentName: 'source.embedded.pic',
          end: "^([.'])[ \\t]*(P[EFY])\\b",
          endCaptures: {
            0: {name: 'meta.function.end.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.name.function.roff'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: "^([.'])[ \\t]*(cstart)\\b\\s*(\\S.*)?",
          beginCaptures: {
            0: {
              name: 'meta.function.begin.chemical.picture.section.macro.roff'
            },
            1: {name: 'punctuation.definition.macro.pic.chem'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'invalid.illegal.unexpected-characters.pic.chem'}
          },
          contentName: 'source.embedded.chem.pic',
          end: "^([.'])[ \\t]*(cend)\\b",
          endCaptures: {
            0: {name: 'meta.function.end.chemical.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          patterns: [{include: '#chem'}]
        },
        {
          begin: "^([.'])[ \\t]*(begin[ \\t]+dformat)\\b",
          beginCaptures: {
            0: {name: 'meta.function.begin.dformat.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.pic.dformat'},
            2: {name: 'entity.function.name.roff'}
          },
          contentName: 'source.embedded.dformat.pic',
          end: "^([.'])[ \\t]*(end)\\b",
          endCaptures: {
            0: {name: 'meta.function.end.dformat.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.roff'},
            2: {name: 'entity.function.name.roff'}
          },
          patterns: [{include: '#dformat'}]
        },
        {
          begin: '^([.\'])[ \\t]*(G1)\\b(\\s*\\d+)?(\\s*\\\\".*$)?',
          beginCaptures: {
            0: {name: 'meta.function.begin.graph.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.pic.grap'},
            2: {name: 'entity.function.name.roff'},
            3: {name: 'constant.numeric.parameter.pic.grap'},
            4: {patterns: [{include: 'text.roff#escapes'}]}
          },
          contentName: 'source.embedded.grap.pic',
          end: "^([.'])[ \\t]*(G2)\\b",
          endCaptures: {
            0: {name: 'meta.function.end.graph.picture.section.macro.roff'},
            1: {name: 'punctuation.definition.macro.pic.grap'},
            2: {name: 'entity.function.name.roff'}
          },
          patterns: [{include: '#grap'}]
        }
      ]
    }
  },
  scopeName: 'source.pic'
}

export default grammar
