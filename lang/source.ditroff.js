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
  dependencies: ['source.ditroff.desc', 'text.roff'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    colourMode: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.function.ditroff'},
            3: {name: 'keyword.operator.subcommand.ditroff'},
            4: {name: 'constant.language.colour-scheme.ditroff'}
          },
          match: '(?:(m)|(D)\\s*(F))\\s*(d)',
          name: 'meta.colour-mode.default.gnu.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.function.ditroff'},
            3: {name: 'keyword.operator.subcommand.ditroff'},
            4: {name: 'constant.language.colour-scheme.ditroff'},
            5: {patterns: [{include: 'text.roff#number'}]}
          },
          match: '(?:(m)|(D)\\s*(F))\\s*(r)((?:\\s*\\d+){3})',
          name: 'meta.colour-mode.rgb.gnu.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.function.ditroff'},
            3: {name: 'keyword.operator.subcommand.ditroff'},
            4: {name: 'constant.language.colour-scheme.ditroff'},
            5: {patterns: [{include: 'text.roff#number'}]}
          },
          match: '(?:(m)|(D)\\s*(F))\\s*(k)((?:\\s*\\d+){4})',
          name: 'meta.colour-mode.cmyk.gnu.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.function.ditroff'},
            3: {name: 'keyword.operator.subcommand.ditroff'},
            4: {name: 'constant.language.colour-scheme.ditroff'},
            5: {patterns: [{include: 'text.roff#number'}]}
          },
          match: '(?:(m)|(D)\\s*(F))\\s*(c)((?:\\s*\\d+){3})',
          name: 'meta.colour-mode.cmy.gnu.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.function.ditroff'},
            3: {name: 'keyword.operator.subcommand.ditroff'},
            4: {name: 'constant.language.colour-scheme.ditroff'},
            5: {patterns: [{include: 'text.roff#number'}]}
          },
          match: '(?:(m)|(D)\\s*(F))\\s*(g)\\s*(\\d+)',
          name: 'meta.colour-mode.grey.gnu.ditroff'
        }
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.ditroff'}},
      end: '$',
      name: 'comment.line.number-sign.ditroff'
    },
    continueLine: {
      match: '^\\+',
      name: 'keyword.operator.line-continuation.gnu.ditroff'
    },
    deviceControl: {
      patterns: [
        {
          begin: '(x)\\s*(X\\S*)[ \\t]*',
          beginCaptures: {
            0: {name: 'meta.device-control.lhs.ditroff'},
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.device.control.ditroff'}
          },
          end: '(?=^(?!\\+))(?!\\G)',
          name: 'meta.device-control.x-command.ditroff',
          patterns: [{include: '#xCommands'}]
        },
        {
          begin: '(x)\\s*',
          beginCaptures: {
            0: {name: 'meta.device-control.lhs.ditroff'},
            1: {name: 'keyword.operator.function.ditroff'}
          },
          end: '(?=$|#)',
          name: 'meta.device-control.ditroff',
          patterns: [
            {
              match: '\\G([ipst]\\S*)\\s*?(?=$|#)',
              name: 'keyword.device.control.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'constant.numeric.integer.ditroff'},
                3: {name: 'invalid.illegal.argument.ditroff'}
              },
              match: '\\G(u\\S*)\\s+(?:(1|0)|(\\d+))\\s*?(?=$|#)',
              name: 'meta.space-underlining.gnu.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'string.other.link.filename.ditroff'}
              },
              match: '\\G(F\\S*)\\s+(\\S+)\\s*?(?=$|#)',
              name: 'meta.source-filename.gnu.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'support.constant.device-name.ditroff'}
              },
              match: '\\G(T\\S*)\\s+(\\S+)',
              name: 'meta.typesetter-device.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {patterns: [{include: 'text.roff#number'}]}
              },
              match: '\\G(r\\S*)((?:\\s+(\\d+)){1,3})\\s*?(?=$|#)',
              name: 'meta.device-resolution.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'constant.numeric.integer.position.ditroff'},
                3: {name: 'entity.name.font.ditroff'},
                4: {name: 'string.other.link.filename.ditroff'},
                5: {name: 'constant.numeric.integer.flags.ditroff'}
              },
              match:
                '\\G(f\\S*)(?:\\s+(\\d+))?(?:\\s+([-\\w]+))?(?:\\s+(\\S.*?)\\s+(\\d+)[ \\t]*$)?[ \\t]*?(?=$|#)',
              name: 'meta.mount-font.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'constant.numeric.integer.ditroff'},
                3: {name: 'variable.parameter.ditroff'}
              },
              match: '\\G(f\\S*)(?:\\s+(\\d+))?(?:\\s+([-\\w]+))?\\s*?(?=$|#)',
              name: 'meta.mount-font.ditroff'
            },
            {
              captures: {
                1: {name: 'keyword.device.control.ditroff'},
                2: {name: 'comment.dummy.argument.ditroff'},
                3: {name: 'constant.numeric.float.ditroff'},
                4: {name: 'constant.numeric.integer.ditroff'}
              },
              match:
                '\\G([HS]\\S*)\\s+(?:(-23)\\s+(-?[\\d.]+)|(-?\\d+))?\\s*?(?=$|#)',
              name: 'meta.set-character-property.ditroff'
            },
            {
              begin: '\\G(\\S+)',
              beginCaptures: {1: {name: 'keyword.device.control.ditroff'}},
              end: '(?=$|#)',
              name: 'meta.unknown-command.ditroff'
            }
          ]
        }
      ]
    },
    eol: {
      captures: {
        1: {name: 'keyword.operator.function.ditroff'},
        2: {patterns: [{include: 'text.roff#number'}]}
      },
      match: '(n)((?:\\s*\\d+){2})',
      name: 'meta.end-of-line.ditroff'
    },
    font: {
      captures: {
        1: {name: 'keyword.operator.function.ditroff'},
        2: {name: 'constant.numeric.integer.ditroff'}
      },
      match: '(f)\\s*(\\d+)',
      name: 'meta.change-font.ditroff'
    },
    graphics: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.subcommand.ditrof'},
            3: {name: 'constant.numeric.integer.ditroff'},
            4: {name: 'comment.dummy.argument.ditroff'}
          },
          match: '(D)\\s*(C)\\s*(\\d+)(?:\\s+(\\d+))?',
          name: 'meta.graphics.gnu.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.subcommand.ditroff'},
            3: {patterns: [{include: 'text.roff#number'}]}
          },
          match: '(D)\\s*(E)((?:\\s*(\\d+)){1,2})',
          name: 'meta.graphics.gnu.ditroff'
        },
        {
          begin: '(D)\\s*([lceafptPR~])',
          beginCaptures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.subcommand.ditroff'}
          },
          end: '(?=$|#)',
          name: 'meta.graphics.ditroff',
          patterns: [{include: 'text.roff#number'}]
        },
        {
          begin: '(D)\\s*([^\\s\\\\])',
          beginCaptures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'keyword.operator.subcommand.ditroff'}
          },
          contentName: 'variable.parameter.ditroff',
          end: '(?=$|#)',
          name: 'meta.graphics.unknown-command.ditroff'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#deviceControl'},
        {include: '#colourMode'},
        {include: '#print'},
        {include: '#font'},
        {include: '#eol'},
        {include: '#move'},
        {include: '#size'},
        {include: '#page'},
        {include: '#graphics'},
        {include: '#movePrint'},
        {include: '#wordSpace'}
      ]
    },
    move: {
      captures: {
        1: {name: 'keyword.operator.function.ditroff'},
        2: {name: 'constant.numeric.integer.ditroff'}
      },
      match: '([HhVv])\\s*(-?\\d+)',
      name: 'meta.move.ditroff'
    },
    movePrint: {
      captures: {
        1: {name: 'keyword.operator.function.ditroff'},
        2: {name: 'constant.character.ditroff'}
      },
      match: '(\\d{2})(.)',
      name: 'meta.move-and-print.ditroff'
    },
    page: {
      captures: {
        1: {name: 'keyword.control.page.ditroff'},
        2: {name: 'constant.numeric.integer.ditroff'}
      },
      match: '(p)\\s*(\\d+)',
      name: 'meta.start-page.ditroff'
    },
    print: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'constant.numeric.integer.ditroff'}
          },
          match: '(N)\\s*(-?\\d+)',
          name: 'meta.print-character.indexed.ditroff'
        },
        {
          captures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'constant.character.ditroff'},
            3: {name: 'constant.character.whitespace.ditroff'},
            4: {name: 'keyword.operator.function.ditroff'},
            5: {name: 'string.unquoted.ditroff'}
          },
          match: '(c)(?:\\s*(\\S)|(\\s))|(CPS|C)\\s*(\\S+)',
          name: 'meta.print-character.ditroff'
        },
        {
          begin: '(t)\\s*',
          beginCaptures: {
            0: {name: 'keyword.operator.function.ditroff'},
            1: {name: 'punctuation.definition.entity.ditroff'}
          },
          contentName: 'string.quoted.double.ditroff',
          end: '(?=$)|\\s+(\\d*)',
          endCaptures: {1: {name: 'comment.dummy.argument.ditroff'}},
          name: 'meta.print-text.gnu.ditroff'
        },
        {
          begin: '(u)\\s*(-?\\d+)\\s*',
          beginCaptures: {
            1: {name: 'keyword.operator.function.ditroff'},
            2: {name: 'constant.numeric.integer.ditroff'}
          },
          contentName: 'string.quoted.double.ditroff',
          end: '(?=\\s|$)',
          name: 'meta.print-text.track-kerned.gnu.ditroff'
        }
      ]
    },
    size: {
      captures: {
        1: {name: 'keyword.operator.function.ditroff'},
        2: {name: 'comment.dummy.argument.ditroff'},
        3: {name: 'constant.numeric.float.ditroff'},
        4: {name: 'constant.numeric.integer.ditroff'}
      },
      match: '(s)\\s*(?:(-23)\\s+(-?[\\d.]+)|(-?\\d+))'
    },
    wordSpace: {
      match: '(?<=^|[\\s\\d])w',
      name: 'keyword.operator.function.word-space.ditroff'
    },
    xCommands: {
      patterns: [
        {
          begin:
            '(?:\\G|^)(?:(ps)\\s*(:)(?=\\s*(?:exec|m?def)\\b)|(PSSetup|PS)\\s*(:)?)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.gnu.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'},
            3: {name: 'keyword.device.control.subcommand.heirloom.ditroff'},
            4: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              begin:
                '\\G(?:(?<=:)\\s*(?:(exec|def)|(mdef)(?:\\s+(\\d+))?)\\b)?\\s*',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'},
                2: {name: 'keyword.control.directive.gnu.ditroff'},
                3: {name: 'constant.numeric.integer.ditroff'}
              },
              end: '(?=^(?!\\+))',
              patterns: [
                {include: '#continueLine'},
                {
                  captures: {0: {patterns: [{include: 'source.postscript'}]}},
                  match: '.+',
                  name: 'source.embedded.postscript'
                }
              ]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(ps)\\s*(:)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.gnu.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              captures: {
                1: {name: 'keyword.control.suppress-output.begin.gnu.ditroff'},
                2: {name: 'keyword.control.suppress-output.end.gnu.ditroff'}
              },
              match: '\\G\\s*(?:(invis)|(endinvis))\\b'
            },
            {
              begin: '\\G\\s*(file)(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              contentName: 'string.other.link.filename.ditroff',
              end: '(?=^(?!\\+))(?!\\G)',
              patterns: [{include: '#continueLine'}]
            },
            {
              begin: '\\G\\s*(import)(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              end: '(?=^(?!\\+))(?!\\G)',
              patterns: [{include: '#xImportParams'}]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(pdf)\\s*(:)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.gnu.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              match: '\\G\\s*(xrev)\\b',
              name: 'keyword.control.directive.gnu.ditroff'
            },
            {
              begin: '\\G\\s*(pdfpic)(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              end: '(?=^(?!\\+))',
              patterns: [{include: '#xImportParams'}]
            },
            {
              begin:
                '\\G\\s*(mark(start|end|suspend|restart))\\b(\\s+(\\S.*))?',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'},
                3: {name: 'source.embedded.postscript'},
                4: {patterns: [{include: 'source.postscript'}]}
              },
              end: '(?=^(?!\\+))',
              name: 'meta.pdfmark.$2.ditroff',
              patterns: [{include: '#continueLine'}]
            },
            {
              begin: '\\G\\s*(transition)(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              end: '(?=^(?!\\+))',
              name: 'meta.transition-settings.ditroff',
              patterns: [
                {
                  match:
                    '\\b(Blinds|Box|Cover|Dissolve|Fade|Fly|Glitter|Push|R|Split|Uncover|Wipe)\\b',
                  name: 'support.constant.other.mode.ditroff'
                },
                {
                  match: '\\b(true|false)\\b',
                  name: 'constant.language.boolean.$1.ditroff'
                },
                {
                  match: '\\b(?:None)\\b',
                  name: 'constant.language.null.ditroff'
                },
                {
                  match: '\\b(?:SLIDE|BLOCK)\\b',
                  name: 'support.constant.feature.ditroff'
                },
                {
                  match: '\\b(?:H|V)\\b',
                  name: 'support.constant.dimension.ditroff'
                },
                {
                  match: '\\b(?:I|O)\\b',
                  name: 'support.constant.motion.ditroff'
                },
                {match: '[-+]?[\\d.]+', name: 'constant.numeric.ditroff'},
                {include: '#continueLine'}
              ]
            },
            {
              begin: '\\G\\s*(pagename)(?:$|\\s+)[ \\t]*',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              end: '(?=^(?!\\+))',
              name: 'meta.page-name.ditroff',
              patterns: [
                {
                  match: '\\G(\\S.*?)(?=[ \\t]*$)',
                  name: 'entity.name.page.ditroff'
                },
                {include: '#continueLine'}
              ]
            },
            {
              begin:
                '\\G\\s*(switchtopage)(?:\\s+(after|before))?(?=$|\\s)[ \\t]*',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'},
                2: {
                  name: 'support.constant.other.insertion-location.gnu.ditroff'
                }
              },
              end: '(?=^(?!\\+))',
              name: 'meta.switch-to-page.ditroff',
              patterns: [
                {
                  match: '\\G(\\S.*?)(?=[ \\t]*$)',
                  name: 'entity.name.page.ditroff'
                },
                {include: '#continueLine'}
              ]
            },
            {
              begin: '\\G\\s*(background)(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'}
              },
              end: '(?=^(?!\\+))',
              name: 'meta.background-rectangle.ditroff',
              patterns: [
                {
                  captures: {
                    1: {name: 'keyword.control.subcommand.$1.gnu.ditroff'},
                    2: {
                      name: 'support.constant.other.background-type.gnu.ditroff'
                    }
                  },
                  match: '\\G\\s*(?:(off|footnote)|((?:page|fill|box)+))\\b'
                },
                {match: '[-+]?[\\d.]+', name: 'constant.numeric.ditroff'},
                {include: '#continueLine'}
              ]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(PDFMark)\\b(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          name: 'meta.pdfmark.ditroff',
          patterns: [
            {
              begin: '\\G\\s*(Bookmark(?:Closed)?)(?:\\s+(\\d+))?(?:\\s+|$)',
              beginCaptures: {
                1: {name: 'storage.type.bookmark.ditroff'},
                2: {name: 'constant.numeric.integer.level.ditroff'}
              },
              contentName: 'string.unquoted.ditroff',
              end: '(?=^(?!\\+))',
              name: 'meta.bookmark.ditroff',
              patterns: [{include: '#continueLine'}]
            },
            {
              begin: '\\G\\s*(\\S+)(?:\\s+|$)',
              beginCaptures: {1: {name: 'entity.name.field.ditroff'}},
              contentName: 'string.unquoted.ditroff',
              end: '(?=^(?!\\+))',
              name: 'meta.pdfmark.ditroff',
              patterns: [{include: '#continueLine'}]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(tty)s*(:)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.gnu.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              begin: '\\G\\s*(link)(?=\\s|$)',
              beginCaptures: {1: {name: 'storage.type.link.ditroff'}},
              end: '(?=^(?!\\+))',
              name: 'meta.osc8-link.ditroff',
              patterns: [
                {
                  captures: {1: {name: 'string.other.link.ditroff'}},
                  match: '\\G\\s*(\\S+)',
                  name: 'meta.link-destination.ditroff'
                },
                {
                  begin: '(?!\\G)([^\\s=]+)(=)',
                  beginCaptures: {
                    1: {name: 'entity.other.attribute-name.ditroff'},
                    2: {name: 'punctuation.separator.key-value.ditroff'}
                  },
                  contentName: 'string.unquoted.ditroff',
                  end: '(?=\\s|$)',
                  name: 'meta.link-parameter.ditroff'
                }
              ]
            },
            {
              captures: {
                1: {name: 'keyword.control.directive.gnu.ditroff'},
                2: {name: 'constant.numeric.ditroff'}
              },
              match: '\\G\\s*(sgr)\\b(?:\\s+([-+]?[\\d.0]+))?'
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(papersize)\\s*(=)',
          beginCaptures: {
            1: {name: 'storage.type.paper-size.ditroff'},
            2: {name: 'punctuation.separator.key-value.equals-sign.ditroff'}
          },
          end: '(?=^(?!\\+))',
          name: 'meta.set-paper-size.ditroff',
          patterns: [
            {include: 'source.ditroff.desc#paperSizes'},
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(devtag)\\s*(:)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          name: 'meta.devtag.ditroff',
          patterns: [
            {include: '#continueLine'},
            {match: '[-+]?\\d+(?:\\.\\d+)?', name: 'constant.numeric.ditroff'},
            {
              captures: {
                0: {
                  patterns: [
                    {match: '\\.', name: 'punctuation.definition.tag.ditroff'}
                  ]
                }
              },
              match: '\\.?[^\\s.]+(?:\\.[^\\s.]+)*+',
              name: 'entity.name.tag.ditroff'
            }
          ]
        },
        {
          begin: '(?:\\G|^)(infer)\\s*(:)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          name: 'meta.infer.ditroff',
          patterns: [
            {include: '#continueLine'},
            {
              begin: '\\G\\s*(start|end)\\s+(\\S+)(?=\\s|$)',
              beginCaptures: {
                1: {name: 'keyword.control.$1-scope.ditroff'},
                2: {name: 'entity.name.type.ditroff'}
              },
              end: '(?=^(?!\\+))',
              name: 'meta.$1-$2.ditroff',
              patterns: [
                {include: '#continueLine'},
                {match: '.+', name: 'support.constant.other.ditroff'}
              ]
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'keyword.control.end-reference.ditroff'},
            3: {name: 'keyword.control.start-reference.ditroff'},
            4: {name: 'entity.name.subject.ditroff'},
            5: {name: 'punctuation.definition.bracket.round.begin.ditroff'},
            6: {name: 'constant.numeric.section.ditroff'},
            7: {name: 'punctuation.definition.bracket.round.end.ditroff'},
            8: {name: 'constant.numeric.section.ditroff'}
          },
          match:
            '(?:\\G|^)(html)\\s+(?:(manref\\s+end)|(manref(?:\\s+start)?))(?:\\s+((?!#)\\S+))(?:\\s+(?:(\\()([0-9])(\\))|((?!#)\\S+)))',
          name: 'meta.manpage-reference.ditroff'
        },
        {
          begin: '(?:\\G|^)(index)\\s*(:)(?:\\s*(\\d+)(?=\\s))?.*',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'},
            3: {name: 'constant.numeric.integer.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [{include: '#continueLine'}]
        },
        {
          begin: '(?:\\G|^)(assertion)\\s*(:)(?=\\s*\\[)',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          name: 'meta.assertion.ditroff',
          patterns: [
            {
              begin: '\\G\\s*(\\[)(x|y)?',
              beginCaptures: {
                1: {name: 'punctuation.section.bracket.square.begin.ditroff'},
                2: {name: 'variable.parameter.assertion-type.$2.ditroff'}
              },
              contentName: 'string.raw.unquoted.heredoc.ditroff',
              end: '\\s*(\\])|(?=^(?!\\+))',
              endCaptures: {
                1: {name: 'punctuation.section.bracket.square.end.ditroff'}
              },
              patterns: [{include: '#continueLine'}]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)((?:html|math)\\b(?:<[/?]p>)?)(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              begin: '\\G[ \\t]*',
              end: '(?=^(?!\\+))',
              patterns: [
                {include: '#continueLine'},
                {
                  captures: {0: {patterns: [{include: 'text.html.basic'}]}},
                  match: '.+',
                  name: 'text.embedded.html.basic'
                }
              ]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(Anchor|U?Link)\\b(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              begin: '\\G(?:\\s+([+-]?\\d+(?:,[+-]?\\d+)*+)(?=\\s))?\\s*',
              beginCaptures: {
                1: {
                  patterns: [
                    {match: '\\d+', name: 'constant.numeric.integer.ditroff'},
                    {match: ',', name: 'punctuation.separator.comma.ditroff'}
                  ]
                }
              },
              contentName: 'string.other.link.ditroff',
              end: '(?=^(?!\\+))',
              patterns: [{include: '#continueLine'}]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin:
            '(?:\\G|^)(BleedAt|CropAt|HorScale|PaperSize|Track|TrimAt)\\b(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {match: '[-+]?\\d+(?:\\.\\d+)?', name: 'constant.numeric.ditroff'},
            {include: '#continueLine'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'},
            3: {name: 'entity.name.locale.ditroff'},
            4: {patterns: [{include: '#comment'}]}
          },
          match: '(?:\\G|^)(LC_CTYPE)\\b(?:\\s*(:))?\\s+((?!#)\\S+)(.*)'
        },
        {
          begin: '(?:\\G|^)(SupplyFont)\\b(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              begin: '\\G\\s*(\\S+)[ \\t]*',
              beginCaptures: {1: {name: 'entity.name.font.ditroff'}},
              contentName: 'string.other.link.filename.ditroff',
              end: '(?=^(?!\\+))',
              patterns: [{include: '#continueLine'}]
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)(SetColor)\\b(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          end: '(?=^(?!\\+))',
          patterns: [
            {
              captures: {
                1: {
                  patterns: [
                    {match: '[\\d.]+', name: 'constant.numeric.ditroff'}
                  ]
                },
                2: {name: 'constant.language.colour-scheme.ditroff'},
                3: {name: 'variable.other.named-colour.ditroff'}
              },
              match:
                '(?:\\G|^)\\s*(?:([\\s\\d.]+)(?<=\\s)(rgb|hsb|cmyk|setgray|setcolor)|(\\S+))'
            },
            {include: '#continueLine'}
          ]
        },
        {
          begin: '(?:\\G|^)([^\\s:#]+)(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'keyword.device.control.subcommand.ditroff'},
            2: {name: 'punctuation.separator.key-value.colon.ditroff'}
          },
          contentName: 'string.raw.unquoted.heredoc.ditroff',
          end: '(?=^(?!\\+))',
          patterns: [{include: '#continueLine'}]
        },
        {include: '#continueLine'}
      ]
    },
    xImportParams: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#continueLine'}]},
            2: {name: 'string.other.link.filename.ditroff'},
            3: {name: 'constant.language.alignment-type.ditroff'},
            4: {name: 'punctuation.definition.dash.ditroff'}
          },
          match: '(?:\\G|^(\\+[ \\t]+)?)(\\S+)(?:\\s+((-)[LCR]))?'
        },
        {match: '[-+]?(?:\\d*\\.\\d+|\\d+)', name: 'constant.numeric.ditroff'},
        {include: '#continueLine'}
      ]
    }
  },
  scopeName: 'source.ditroff'
}

export default grammar
