/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.shell'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    bitmap: {
      begin: '^[ \\t]*(B)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.display-bitmap.context',
      patterns: [
        {
          begin: '\\G(\\d+)(?:\\s+(\\d+))?',
          captures: {
            1: {name: 'constant.numeric.bitmap-width.context'},
            2: {name: 'constant.numeric.bitmap-height.context'}
          },
          contentName: 'string.unquoted.filename.context',
          end: '[ \\t]*$'
        }
      ]
    },
    commands: {
      patterns: [
        {include: '#comment'},
        {include: '#text'},
        {include: '#bitmap'},
        {include: '#drawing'},
        {include: '#escape-interpretation'},
        {include: '#escape-to-device'},
        {include: '#font'},
        {include: '#indent'},
        {include: '#kerning'},
        {include: '#line-length'},
        {include: '#motion'},
        {include: '#offset'},
        {include: '#shift'},
        {include: '#vertical-spacing'},
        {include: '#sentence-space'},
        {include: '#extra-space'},
        {include: '#embolden'},
        {include: '#constant-space'},
        {include: '#slant'},
        {include: '#height'},
        {include: '#zero-width-print'},
        {include: '#unknown-line'}
      ]
    },
    comment: {
      begin: '%',
      beginCaptures: {0: {name: 'punctuation.definition.comment.context'}},
      end: '$',
      name: 'comment.line.percentage.context',
      patterns: [
        {
          begin: '\\G\\s*([DETW])(?=[ \\t])',
          beginCaptures: {
            1: {name: 'storage.modifier.message-category.context'}
          },
          end: '$',
          patterns: [
            {
              begin: '(?<=E)\\G[ \\t]*',
              contentName: 'message.error.context',
              end: '[ \\t]*$'
            },
            {
              begin: '(?<=W)\\G[ \\t]*',
              contentName: 'sublimelinter.mark.warning.context',
              end: '[ \\t]*$'
            },
            {
              begin: '\\G[ \\t]*',
              end: '[ \\t]*$',
              name: 'constant.other.debug-message.context'
            }
          ]
        },
        {
          captures: {
            1: {name: 'storage.modifier.message-category.context'},
            2: {name: 'entity.name.tag.request.context'},
            3: {name: 'constant.character.numeric.font-position.context'},
            4: {name: 'variable.reference.typeface-name.context'},
            5: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match:
            '\\G\\s*(I)[ \\t]+(fp)\\s+(\\d+)\\s+(\\S+)(?:[ \\t]+(\\S.*?))?[ \\t]*$'
        }
      ]
    },
    'constant-space': {
      begin: '^[ \\t]*(x)\\s+(cs)(?=$|\\s)[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.operator.command.context'},
        2: {name: 'keyword.operator.subcommand.context'}
      },
      end: '$',
      name: 'meta.command.fixed-pitch.context',
      patterns: [
        {
          captures: {
            1: {
              name: 'constant.numeric.integer.decimal.width.current-font.context'
            },
            2: {
              name: 'constant.numeric.integer.decimal.width.search-fonts.context'
            },
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    drawing: {
      begin: '^[ \\t]*(D)\\s+(?=\\S)',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.line-drawing.context',
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.drawing.draw-arc.context'},
            2: {name: 'constant.numeric.integer.decimal.x-coordinate.context'},
            3: {name: 'constant.numeric.integer.decimal.y-coordinate.context'},
            4: {name: 'constant.numeric.integer.decimal.dx-coordinate.context'},
            5: {name: 'constant.numeric.integer.decimal.dy-coordinate.context'},
            6: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match:
            '\\G(a)\\s+(-?\\d+)\\s+(-?\\d+)\\s+(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.draw-box.context'},
            2: {name: 'constant.numeric.integer.decimal.x-coordinate.context'},
            3: {name: 'constant.numeric.integer.decimal.y-coordinate.context'},
            4: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(b)\\s+(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.draw-circle.context'},
            2: {name: 'constant.numeric.integer.decimal.radius.context'},
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(c)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.draw-ellipse.context'},
            2: {name: 'constant.numeric.integer.decimal.x-coordinate.context'},
            3: {name: 'constant.numeric.integer.decimal.y-coordinate.context'},
            4: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(e)\\s+(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.figure-fill-pattern.context'},
            2: {name: 'constant.numeric.integer.decimal.context'},
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(f)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.draw-line.context'},
            2: {name: 'constant.numeric.integer.decimal.x-coordinate.context'},
            3: {name: 'constant.numeric.integer.decimal.y-coordinate.context'},
            4: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(l)\\s+(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.line-thickness.context'},
            2: {name: 'constant.numeric.integer.decimal.thickness.context'},
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(t)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          captures: {
            1: {name: 'storage.type.drawing.greyscale-value.context'},
            2: {name: 'constant.numeric.integer.decimal.darkness.context'},
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(w)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {
          applyEndPatternLast: true,
          begin: '\\G(~)(?=$|\\s)',
          beginCaptures: {
            1: {name: 'storage.type.drawing.draw-spline.context'}
          },
          end: '(?=\\s*$)|(\\S.*?)[ \\t]*$',
          endCaptures: {1: {name: 'invalid.illegal.bad-argument.context'}},
          patterns: [
            {
              captures: {
                1: {
                  name: 'constant.numeric.integer.decimal.x-coordinate.context'
                },
                2: {
                  name: 'constant.numeric.integer.decimal.y-coordinate.context'
                }
              },
              match: '(?:\\G|(?<=\\s))(-?\\d+)\\s+(-?\\d+)(?=$|\\s)'
            }
          ]
        }
      ]
    },
    embolden: {
      begin: '^[ \\t]*(x)\\s+(bd)(?=$|\\s)[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.operator.command.context'},
        2: {name: 'keyword.operator.subcommand.context'}
      },
      end: '$',
      name: 'meta.command.embolden-font.context',
      patterns: [
        {
          captures: {
            1: {
              name: 'constant.numeric.integer.decimal.boldness.current-font.context'
            },
            2: {
              name: 'constant.numeric.integer.decimal.boldness.search-fonts.context'
            },
            3: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)\\s+(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    'escape-interpretation': {
      begin: '^[ \\t]*(E)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.escape-interpretation.context',
      patterns: [
        {
          match: '\\G\\s*(cmd|nl|oc|<)(?=$|\\s)',
          name: 'storage.type.$1-escape.context'
        },
        {
          captures: {
            1: {
              name: 'source.embedded.shell',
              patterns: [{include: 'source.shell'}]
            }
          },
          match: '(?<=cmd)\\s+(\\S.*?)(?=\\s*$)'
        },
        {
          captures: {1: {name: 'constant.language.boolean.$1.context'}},
          match: '(?<=nl)\\s+(on|off)(?=\\s*$)',
          name: 'meta.set-newline-mode.context'
        },
        {
          captures: {1: {name: 'constant.character.single.context'}},
          match: '(?<=oc)\\s+(\\S)(?=\\s*$)',
          name: 'meta.set-octal-indicator.context'
        },
        {
          captures: {
            1: {name: 'constant.other.reference.link.filename.context'}
          },
          match: '(?<=<)\\s+(\\S.*?)[ \\t]*$',
          name: 'meta.transparent-passthrough.context'
        }
      ]
    },
    'escape-to-device': {
      begin: '^[ \\t]*(e)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      contentName: 'markup.raw.verbatim.context',
      end: '[ \\t]*$',
      name: 'meta.command.escape-to-device.context'
    },
    'extra-space': {
      patterns: [
        {
          begin: '^[ \\t]*(x)\\s+(a)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.command.context'},
            2: {name: 'keyword.operator.subcommand.context'}
          },
          end: '$',
          name: 'meta.command.extra-space.after-next-line.context',
          patterns: [{include: '#extra-space-arg'}]
        },
        {
          begin: '^[ \\t]*(x)\\s+(b)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.command.context'},
            2: {name: 'keyword.operator.subcommand.context'}
          },
          end: '$',
          name: 'meta.command.extra-space.before-next-line.context',
          patterns: [{include: '#extra-space-arg'}]
        }
      ]
    },
    'extra-space-arg': {
      captures: {
        1: {name: 'constant.numeric.integer.decimal.offset.context'},
        2: {name: 'invalid.illegal.superfluous-arguments.context'}
      },
      match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
    },
    font: {
      begin: '^[ \\t]*(f)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-font.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.point-size.context'},
            2: {name: 'variable.reference.typeface-name.context'}
          },
          match: '\\G(-?\\d+)\\s+(\\S.*?)[ \\t]*$'
        }
      ]
    },
    height: {
      begin: '^[ \\t]*(x)\\s+(Height)(?=$|\\s)[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.operator.command.context'},
        2: {name: 'keyword.operator.subcommand.context'}
      },
      end: '$',
      name: 'meta.command.character-height.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.height.context'},
            2: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    indent: {
      begin: '^[ \\t]*(I)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-indentation.context',
      patterns: [
        {
          match: '\\G-?\\d+(?=$|\\s)',
          name: 'constant.numeric.integer.decimal.indent-size.context'
        }
      ]
    },
    init: {
      begin: '^[ \\t]*(X)\\s+((?!-)[-\\w]+)(?=\\s|\\()',
      beginCaptures: {
        1: {name: 'keyword.control.initialise-device.context'},
        2: {name: 'entity.name.device.context'}
      },
      end: '$',
      name: 'meta.command.initialise-device.context',
      patterns: [
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.parameters.begin.bracket.round.context'
            }
          },
          end: '(\\))|([^)]*?)$',
          endCaptures: {
            1: {
              name: 'punctuation.definition.parameters.end.bracket.round.context'
            },
            2: {name: 'invalid.illegal.missing-bracket.context'}
          },
          name: 'meta.parameters.context',
          patterns: [
            {
              match: '[^\\s)]+',
              name: 'entity.other.available-physical-font-prefix.context'
            }
          ]
        },
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.resolution.context'},
            2: {
              name: 'constant.numeric.integer.decimal.minimum-horizontal-motion.context'
            },
            3: {
              name: 'constant.numeric.integer.decimal.minimum-vertical-motion.context'
            },
            4: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '(?<=\\s)(\\d+)\\s+(\\d+)\\s+(\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    kerning: {
      begin: '^[ \\t]*(k)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-kerning.context',
      patterns: [
        {
          captures: {
            1: {
              name: 'constant.numeric.integer.decimal.overall-character-spacing.context'
            },
            2: {name: 'constant.numeric.boolean.false.enable-kerning.context'},
            3: {name: 'constant.numeric.boolean.true.enable-kerning.context'}
          },
          match: '\\G(-?\\d+)\\s+(?:(0)|(1))(?=$|\\$)'
        }
      ]
    },
    line: {
      begin: '^[ \\t]*(N)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.control.start.line.context'}},
      end: '^[ \\t]*(n)(?=$|\\s)',
      endCaptures: {1: {name: 'keyword.control.end.line.context'}},
      name: 'meta.line.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.language.fill-mode.context'},
            2: {name: 'constant.language.adjustment-mode.context'},
            3: {
              name: 'constant.numeric.integer.decimal.paddable-spaces.context'
            },
            4: {
              name: 'constant.numeric.integer.decimal.slack-available.context'
            },
            5: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match:
            '\\G(f|b|n)\\s+(l|j|c|r)\\s+(\\d+)\\s+(\\d+)(?=$|\\s)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        },
        {include: '#rule'},
        {include: '#commands'}
      ]
    },
    'line-length': {
      begin: '^[ \\t]*(L)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-line-length.context',
      patterns: [
        {
          match: '\\G-?\\d+(?=$|\\s)',
          name: 'constant.numeric.integer.decimal.line-length.context'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#line'},
        {include: '#page'},
        {include: '#init'},
        {include: '#pageinfo'},
        {include: '#commands'}
      ]
    },
    motion: {
      patterns: [
        {
          begin: '^[ \\t]*(h)(?=$|\\s)[ \\t]*',
          beginCaptures: {1: {name: 'keyword.operator.command.context'}},
          end: '[ \\t]*$',
          name: 'meta.command.horizontal.local-motion.context',
          patterns: [
            {
              match: '\\G-?\\d+(?=$|\\s)',
              name: 'constant.numeric.integer.decimal.x-offset.context'
            }
          ]
        },
        {
          begin: '^[ \\t]*(v)(?=$|\\s)[ \\t]*',
          beginCaptures: {1: {name: 'keyword.operator.command.context'}},
          end: '[ \\t]*$',
          name: 'meta.command.vertical.local-motion.context',
          patterns: [
            {
              match: '\\G-?\\d+(?=$|\\s)',
              name: 'constant.numeric.integer.decimal.y-offset.context'
            }
          ]
        }
      ]
    },
    offset: {
      begin: '^[ \\t]*(O)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-page-offset.context',
      patterns: [
        {
          match: '\\G-?\\d+(?=$|\\s)',
          name: 'constant.numeric.integer.decimal.page-offset.context'
        }
      ]
    },
    page: {
      begin: '^[ \\t]*(P)(?:\\s+(\\d+))?(?=$|\\s)(?:[ \\t]+(\\S.*))?[ \\t]*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.page.context'},
        2: {name: 'constant.numeric.integer.decimal.page-number.context'},
        3: {name: 'invalid.illegal.superfluous-arguments.context'}
      },
      end: '^[ \\t]*(p)(?:\\s+(\\d+))?(?=$|\\s)(?:[ \\t]+(\\S.*))?[ \\t]*$',
      endCaptures: {
        1: {name: 'keyword.control.end.page.context'},
        2: {name: 'constant.numeric.integer.decimal.page-length.context'},
        3: {name: 'invalid.illegal.superfluous-arguments.context'}
      },
      name: 'meta.page.context',
      patterns: [{include: '#line'}, {include: '#commands'}]
    },
    pageinfo: {
      begin: '^[ \\t]*(Y)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.control.initialise-device.context'}},
      end: '$',
      name: 'meta.command.define-paper.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.language.page-orientation.context'},
            10: {name: 'constant.numeric.integer.decimal.sx.context'},
            11: {name: 'constant.numeric.integer.decimal.sy.context'},
            12: {name: 'comment.ignored.unused-argument.context'},
            2: {name: 'entity.name.paper-type.context'},
            3: {name: 'entity.other.paper-size.context'},
            4: {name: 'constant.numeric.integer.decimal.px.context'},
            5: {name: 'constant.numeric.integer.decimal.py.context'},
            6: {name: 'constant.numeric.integer.decimal.bx.context'},
            7: {name: 'constant.numeric.integer.decimal.by.context'},
            8: {name: 'constant.numeric.integer.decimal.dx.context'},
            9: {name: 'constant.numeric.integer.decimal.dy.context'}
          },
          match:
            '(?x)\n\\G  (P|L)      # Orientation (paper/landscape)\n\\s+ ([-\\w]+)  # Paper type\n\\s+ ([-\\w]+)  # Paper size\n\\s+ (-?\\d+)   # Px\n\\s+ (-?\\d+)   # Py\n\\s+ (-?\\d+)   # Bx\n\\s+ (-?\\d+)   # By\n\\s+ (-?\\d+)   # Dx\n\\s+ (-?\\d+)   # Dy\n\\s+ (-?\\d+)   # Sx\n\\s+ (-?\\d+)   # Sy\n(?:\\s+\\S.*?)? # Anything (reserved for extensions)\n[ \\t]* $'
        }
      ]
    },
    rule: {
      patterns: [
        {
          begin: '^[ \\t]*(R)\\s+(h)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.command.context'},
            2: {name: 'keyword.operator.drawing-direction.context'}
          },
          end: '$',
          name: 'meta.command.draw-rule.horizontal.context',
          patterns: [
            {
              captures: {
                1: {
                  name: 'constant.numeric.integer.decimal.rule-length.context'
                },
                2: {patterns: [{include: '#rule-character'}]},
                3: {name: 'invalid.illegal.superfluous-arguments.context'}
              },
              match: '\\G(-?\\d+)\\s+(\\S+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
            }
          ]
        },
        {
          begin: '^[ \\t]*(R)\\s+(v)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.command.context'},
            2: {name: 'keyword.operator.drawing-direction.context'}
          },
          end: '$',
          name: 'meta.command.draw-rule.horizontal.context',
          patterns: [
            {
              captures: {
                1: {
                  name: 'constant.numeric.integer.decimal.rule-length.context'
                },
                2: {patterns: [{include: '#rule-character'}]},
                3: {name: 'invalid.illegal.superfluous-arguments.context'}
              },
              match: '\\G(-?\\d+)\\s+(\\S+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
            }
          ]
        },
        {
          begin: '^[ \\t]*(R)\\s+(t)\\s+(h|v)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.command.context'},
            2: {name: 'keyword.operator.subcommand.context'},
            3: {name: 'keyword.operator.drawing-direction.context'}
          },
          end: '$',
          name: 'meta.command.set-rule-thickness.context',
          patterns: [
            {
              captures: {
                1: {name: 'constant.numeric.integer.decimal.thickness.context'},
                2: {name: 'invalid.illegal.superfluous-arguments.context'}
              },
              match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
            }
          ]
        }
      ]
    },
    'rule-character': {
      patterns: [
        {
          match: '(?:^|\\G)(?:ru|rn|ul|bv|br)(?=$|\\s)',
          name: 'support.constant.continuation-character.context'
        },
        {
          match: '(?:^|\\G)\\S+',
          name: 'string.unquoted.repetition-character.context'
        }
      ]
    },
    'sentence-space': {
      begin: '^[ \\t]*(w)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '[ \\t]*$',
      name: 'meta.command.set-sentence-space-width.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.space-width.context'},
            2: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    shift: {
      begin: '^[ \\t]*(s)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.shift-baseline.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.offset.context'},
            2: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    slant: {
      begin: '^[ \\t]*(x)\\s+(Slant)(?=$|\\s)[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.operator.command.context'},
        2: {name: 'keyword.operator.subcommand.context'}
      },
      end: '$',
      name: 'meta.command.slant.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.slant-angle.context'},
            2: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    text: {
      begin: '^[ \\t]*(=)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.display-text.context',
      patterns: [
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.context'}
          },
          end: '\\)|(?=$)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.context'}},
          name: 'string.quoted.other.context',
          patterns: [{include: '#text-escapes'}]
        }
      ]
    },
    'text-escapes': {
      patterns: [
        {
          match: '(\\\\)\\\\',
          name: 'constant.character.escape.backslash.context'
        },
        {
          match: '(\\\\)[()]',
          name: 'constant.character.escape.bracket.context'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.begin.context'},
            2: {name: 'entity.name.character.other.context'},
            3: {name: 'punctuation.definition.entity.end.context'}
          },
          match: '(\\()([^()]+)(\\))',
          name: 'constant.character.entity.named.context'
        }
      ]
    },
    'unknown-line': {
      begin: '\\S+',
      end: '(?=[ \\t]*$)',
      name: 'invalid.unimplemented.command.context'
    },
    'vertical-spacing': {
      begin: '^[ \\t]*(V)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.vertical-spacing.context',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.decimal.offset.context'},
            2: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G(-?\\d+)(?:[ \\t]+(\\S.*))?[ \\t]*$'
        }
      ]
    },
    'zero-width-print': {
      begin: '^[ \\t]*(z)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.command.context'}},
      end: '$',
      name: 'meta.command.zero-width-print.context',
      patterns: [
        {
          captures: {
            0: {name: 'invalid.illegal.superfluous-arguments.context'}
          },
          match: '\\G\\S.*?(?=\\s*$)'
        }
      ]
    }
  },
  scopeName: 'source.context'
}

export default grammar
