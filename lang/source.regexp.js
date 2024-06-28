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
  dependencies: ['source.regexp.extended', 'source.regexp.posix', 'source.sy'],
  extensions: ['.regexp', '.regex'],
  names: ['regular-expression', 'regexp', 'regex'],
  patterns: [
    {include: 'source.regexp.extended#injection'},
    {include: 'source.sy#injection'},
    {include: '#main'}
  ],
  repository: {
    alternation: {match: '\\|', name: 'keyword.operator.logical.or.regexp'},
    anchor: {
      patterns: [
        {match: '\\^', name: 'keyword.control.anchor.line-start.regexp'},
        {match: '\\$', name: 'keyword.control.anchor.line-end.regexp'},
        {match: '\\\\A', name: 'keyword.control.anchor.string-start.regexp'},
        {match: '\\\\Z', name: 'keyword.control.anchor.string-end-line.regexp'},
        {match: '\\\\z', name: 'keyword.control.anchor.string-end.regexp'},
        {match: '\\\\G', name: 'keyword.control.anchor.search-start.regexp'},
        {
          captures: {
            1: {name: 'keyword.control.anchor.word-boundary.regexp'},
            2: {name: 'keyword.control.anchor.non-word-boundary.regexp'},
            3: {
              name: 'punctuation.definition.unicode-boundary.bracket.curly.begin.regexp'
            },
            4: {name: 'entity.property.name.regexp'},
            5: {
              name: 'punctuation.definition.unicode-boundary.bracket.curly.end.regexp'
            }
          },
          match: '(?:(\\\\b)|(\\\\B))(\\{)(\\w+)(})',
          name: 'meta.unicode-boundary.regexp'
        },
        {match: '\\\\b', name: 'keyword.control.anchor.word-boundary.regexp'},
        {
          match: '\\\\B',
          name: 'keyword.control.anchor.non-word-boundary.regexp'
        }
      ]
    },
    assertion: {
      patterns: [
        {
          begin: '\\(\\?=',
          beginCaptures: {
            0: {name: 'punctuation.definition.assertion.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.assertion.end.regexp'}
          },
          name: 'meta.assertion.positive.look-ahead.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(\\?!',
          beginCaptures: {
            0: {name: 'punctuation.definition.assertion.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.assertion.end.regexp'}
          },
          name: 'meta.assertion.negative.look-ahead.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(\\?<!',
          beginCaptures: {
            0: {name: 'punctuation.definition.assertion.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.assertion.end.regexp'}
          },
          name: 'meta.assertion.negative.look-behind.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(\\?<=',
          beginCaptures: {
            0: {name: 'punctuation.definition.assertion.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.assertion.end.regexp'}
          },
          name: 'meta.assertion.positive.look-behind.regexp',
          patterns: [{include: '#main'}]
        }
      ]
    },
    calloutBrackets: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.curly.begin.regexp'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.bracket.curly.end.regexp'}
      },
      patterns: [{include: '#calloutBrackets'}, {include: '#main'}]
    },
    class: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.character-class.set.begin.regexp'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.character-class.set.end.regexp'}
      },
      name: 'meta.character-class.set.regexp',
      patterns: [{include: '#classInnards'}]
    },
    classInnards: {
      patterns: [
        {match: '\\G\\^', name: 'keyword.operator.logical.not.regexp'},
        {match: '\\\\b', name: 'constant.character.escape.backspace.regexp'},
        {
          begin: '(&&)(\\[)',
          beginCaptures: {
            1: {name: 'keyword.operator.logical.intersect.regexp'},
            2: {name: 'punctuation.definition.character-class.set.begin.regexp'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.character-class.set.end.regexp'}
          },
          patterns: [{include: '#classInnards'}]
        },
        {match: '&&', name: 'keyword.operator.logical.intersect.regexp'},
        {
          match: '(?<!\\G|\\\\[dwshDWSHN])-(?!\\])',
          name: 'punctuation.separator.range.dash.regexp'
        },
        {include: 'source.regexp.posix#charClass'},
        {
          match: '\\\\\\[|\\\\\\]',
          name: 'constant.character.escape.backslash.regexp'
        },
        {match: '\\^|\\$|\\(|\\)|\\['},
        {include: '#escape'},
        {include: '#main'},
        {
          match: '[^\\]]',
          name: 'constant.single.character.character-class.regexp'
        }
      ]
    },
    comment: {
      begin: '\\(\\?#',
      end: '\\)',
      name: 'comment.block.regexp',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    conditional: {
      begin: '(\\()(\\?)(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.section.condition.begin.regexp'},
        2: {name: 'keyword.control.flow.regexp'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.condition.end.regexp'}},
      name: 'meta.conditional.regexp',
      patterns: [
        {match: '\\|', name: 'punctuation.separator.condition.if-else.regexp'},
        {include: '#assertion'},
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.condition.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.condition.end.regexp'}},
          name: 'meta.condition.function-call.regexp',
          patterns: [
            {
              match: '\\GDEFINE',
              name: 'storage.type.function.subpattern.regexp'
            },
            {match: '\\Gassert', name: 'keyword.other.assertion.regexp'},
            {
              captures: {
                1: {
                  name: 'punctuation.definition.group-reference.bracket.angle.begin.regexp'
                },
                2: {name: 'entity.group.name.regexp'},
                3: {
                  name: 'punctuation.definition.group-reference.bracket.angle.end.regexp'
                },
                4: {
                  name: 'punctuation.definition.group-reference.quote.single.begin.regexp'
                },
                5: {name: 'entity.group.name.regexp'},
                6: {
                  name: 'punctuation.definition.group-reference.quote.single.end.regexp'
                }
              },
              match: "\\G(?:(<)([^>]+)(>)|(')(['>]+)('))"
            },
            {
              captures: {
                1: {name: 'keyword.other.recursion.specific.regexp'},
                2: {name: 'punctuation.definition.reference.regexp'},
                3: {name: 'entity.group.name.regexp'}
              },
              match: '\\G(R(&))(\\w+)'
            },
            {
              match: '\\GR\\d+',
              name: 'keyword.other.recursion.specific-group.regexp'
            },
            {match: '\\GR', name: 'keyword.other.recursion.overall.regexp'},
            {match: '\\G\\d+', name: 'keyword.other.reference.absolute.regexp'},
            {
              match: '\\G[-+]\\d+',
              name: 'keyword.other.reference.relative.regexp'
            },
            {match: '\\G\\w+', name: 'entity.group.name.regexp'}
          ]
        },
        {include: '#main'}
      ]
    },
    escape: {
      patterns: [
        {match: '\\\\d', name: 'constant.character.escape.decimal.regexp'},
        {match: '\\\\s', name: 'constant.character.escape.whitespace.regexp'},
        {match: '\\\\w', name: 'constant.character.escape.word-char.regexp'},
        {match: '\\\\n', name: 'constant.character.escape.newline.regexp'},
        {match: '\\\\t', name: 'constant.character.escape.tab.regexp'},
        {match: '\\\\r', name: 'constant.character.escape.return.regexp'},
        {match: '\\\\D', name: 'constant.character.escape.non-decimal.regexp'},
        {
          match: '\\\\S',
          name: 'constant.character.escape.non-whitespace.regexp'
        },
        {
          match: '\\\\W',
          name: 'constant.character.escape.non-word-char.regexp'
        },
        {match: '\\\\a', name: 'constant.character.escape.alarm.regexp'},
        {match: '\\\\e', name: 'constant.character.escape.escape-char.regexp'},
        {match: '\\\\f', name: 'constant.character.escape.form-feed.regexp'},
        {match: '\\\\v', name: 'constant.character.escape.vertical-tab.regexp'},
        {
          match: '\\\\x[0-9A-Fa-f]{2}',
          name: 'constant.character.escape.numeric.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.unicode-escape.hex.regexp'},
            2: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.begin.regexp'
            },
            3: {
              patterns: [
                {match: '\\S+', name: 'constant.numeric.codepoint.hex.regexp'}
              ]
            },
            4: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.end.regexp'
            }
          },
          match: '(\\\\x)({)([0-9A-Fa-f]+(?>\\s+[0-9A-Fa-f]+)*)\\s*(})',
          name: 'meta.character-escape.hex.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.unicode-escape.octal.regexp'},
            2: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.begin.regexp'
            },
            3: {
              patterns: [
                {match: '\\S+', name: 'constant.numeric.codepoint.octal.regexp'}
              ]
            },
            4: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.end.regexp'
            }
          },
          match: '(\\\\o)({)([0-7]+(?>\\s+[0-7]+)*)\\s*(})',
          name: 'meta.character-escape.octal.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.unicode-property.regexp'},
            2: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.begin.regexp'
            },
            3: {name: 'keyword.operator.logical.not.regexp'},
            4: {
              name: 'entity.property.name.regexp',
              patterns: [{include: '#propInnards'}]
            },
            5: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.end.regexp'
            }
          },
          match: '(\\\\[Pp])(\\{)(\\^?)([^{}]+)(\\})',
          name: 'meta.unicode-property.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.unicode-property.regexp'},
            2: {name: 'entity.property.name.regexp'}
          },
          match: '(\\\\[Pp])(\\w)',
          name: 'meta.unicode-property.single-letter.regexp'
        },
        {
          begin: '(\\\\[kg])(<)',
          beginCaptures: {
            1: {name: 'keyword.operator.group-reference.regexp'},
            2: {
              name: 'punctuation.definition.group-reference.bracket.angle.begin.regexp'
            }
          },
          contentName: 'entity.group.name.regexp',
          end: '>',
          endCaptures: {
            0: {
              name: 'punctuation.definition.group-reference.bracket.angle.end.regexp'
            }
          },
          name: 'meta.group-reference.regexp',
          patterns: [{include: '#groupRefInnards'}]
        },
        {
          begin: "(\\\\[kg])(')",
          beginCaptures: {
            1: {name: 'keyword.operator.group-reference.regexp'},
            2: {
              name: 'punctuation.definition.group-reference.quote.single.begin.regexp'
            }
          },
          contentName: 'entity.group.name.regexp',
          end: "'",
          endCaptures: {
            0: {
              name: 'punctuation.definition.group-reference.quote.single.end.regexp'
            }
          },
          name: 'meta.group-reference.regexp',
          patterns: [{include: '#groupRefInnards'}]
        },
        {
          begin: '(\\\\[kg])({)',
          beginCaptures: {
            1: {name: 'keyword.operator.group-reference.regexp'},
            2: {
              name: 'punctuation.definition.group-reference.bracket.curly.begin.regexp'
            }
          },
          contentName: 'entity.group.name.regexp',
          end: '}',
          endCaptures: {
            0: {
              name: 'punctuation.definition.group-reference.bracket.curly.end.regexp'
            }
          },
          name: 'meta.group-reference.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.group-reference.regexp'},
            2: {name: 'entity.group.name.regexp'}
          },
          match: '(\\\\g)(\\d)',
          name: 'meta.group-reference.single-letter.regexp'
        },
        {
          captures: {
            1: {name: 'keyword.operator.named-char.regexp'},
            2: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.begin.regexp'
            },
            3: {
              name: 'entity.character.name.regexp',
              patterns: [
                {match: ':', name: 'punctuation.separator.colon.regexp'},
                {
                  match: '(?<=U)\\+(?=[A-Fa-f0-9])',
                  name: 'punctuation.separator.codepoint.regexp'
                }
              ]
            },
            4: {
              name: 'punctuation.definition.unicode-escape.bracket.curly.end.regexp'
            }
          },
          match: '(\\\\N)(\\{)([^{}]+)(\\})',
          name: 'meta.named-char.regexp'
        },
        {
          begin: '\\\\Q(?=.*?\\\\E)',
          beginCaptures: {0: {name: 'keyword.control.quote-mode.begin.regexp'}},
          contentName: 'markup.raw.verbatim.string.regexp',
          end: '\\\\E',
          endCaptures: {0: {name: 'keyword.control.quote-mode.end.regexp'}},
          name: 'meta.quoted-chars.regexp'
        },
        {
          match: '\\\\(?:\\d{3}|0\\d)',
          name: 'constant.character.escape.octal.numeric.regexp'
        },
        {
          match: '\\\\0',
          name: 'constant.character.escape.null-byte.numeric.regexp'
        },
        {
          match: '\\\\(\\d{1,2})',
          name: 'keyword.other.back-reference.$1.regexp'
        },
        {
          match: '\\\\(?:c|C-)[?-_]',
          name: 'constant.character.escape.control-char.regexp'
        },
        {match: '\\\\h', name: 'constant.character.escape.hex-digit.regexp'},
        {
          match: '\\\\H',
          name: 'constant.character.escape.non-hex-digit.regexp'
        },
        {match: '\\\\E', name: 'keyword.control.end-mode.regexp'},
        {match: '\\\\Q', name: 'keyword.control.quote-mode.regexp'},
        {match: '\\\\F', name: 'keyword.control.foldcase-mode.regexp'},
        {match: '\\\\L', name: 'keyword.control.lowercase-mode.regexp'},
        {match: '\\\\U', name: 'keyword.control.titlecase-mode.regexp'},
        {match: '\\\\K', name: 'keyword.control.keep-out.regexp'},
        {
          match: '\\\\l',
          name: 'constant.character.escape.lowercase-next.regexp'
        },
        {
          match: '\\\\u',
          name: 'constant.character.escape.titlecase-next.regexp'
        },
        {match: '\\\\N', name: 'constant.character.escape.non-newline.regexp'},
        {
          match: '\\\\X',
          name: 'constant.character.escape.extended-grapheme.regexp'
        },
        {
          match: '\\\\R',
          name: 'constant.character.escape.linebreak-grapheme.regexp'
        },
        {
          match: '\\\\V',
          name: 'constant.character.escape.non-vertical-whitespace.regexp'
        },
        {
          match: '\\\\M-\\\\C-[?-_]',
          name: 'constant.character.escape.meta-control.regexp'
        },
        {match: '\\\\M-.', name: 'constant.character.escape.meta-char.regexp'},
        {match: '\\\\O', name: 'constant.character.escape.any-char.regexp'},
        {
          match: '\\\\[yY]',
          name: 'keyword.control.anchor.text-boundary.regexp'
        },
        {match: '\\\\.', name: 'constant.character.escape.misc.regexp'}
      ]
    },
    fixedGroups: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.other.back-reference.regexp'},
            3: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?[R0])(\\))',
          name: 'meta.group-reference.reset.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {patterns: [{include: '#scopedModifiers'}]},
            3: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\(\\?)((?:y{[\\w]+}|[-A-Za-z^])*)(\\))',
          name: 'meta.group.scoped-modifiers.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.verb.regexp'},
            3: {name: 'punctuation.separator.key-value.regexp'},
            4: {name: 'variable.parameter.control-verb.regexp'},
            5: {name: 'punctuation.definition.group.begin.regexp'}
          },
          match: '(\\(\\*)(\\w*)(?:([:=])([^\\s()]*))?(\\))',
          name: 'meta.control-verb.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.other.back-reference.regexp'},
            3: {name: 'entity.group.name.regexp'},
            4: {name: 'punctuation.definition.group.begin.regexp'}
          },
          match: '(\\()(\\?(?:&|P[>=]))(\\w+)(\\))',
          name: 'meta.group-reference.named.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.other.back-reference.regexp'},
            3: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?[-+]\\d+)(\\))',
          name: 'meta.group-reference.relative.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.callout.regexp'},
            3: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?C\\d*)(\\))',
          name: 'meta.callout.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'entity.name.callout.regexp'},
            3: {name: 'entity.name.tag.callout-tag.regexp'},
            4: {name: 'punctuation.definition.callout-tag.begin.regexp'},
            5: {name: 'callout-tag.constant.other.regexp'},
            6: {name: 'punctuation.definition.callout-tag.end.regexp'},
            7: {name: 'punctuation.definition.group.end.regexp'}
          },
          match:
            '(?x)\n(\\(\\*)\n([_A-Za-z][_A-Za-z0-9]*)              # Name\n((\\[)([_A-Za-z][_A-Za-z0-9]*)(\\]))  # [tag]\n(\\))',
          name: 'meta.callout.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.flow.regexp'},
            3: {name: 'punctuation.separator.delimiter.pipe.regexp'},
            4: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?~)(\\|)(\\))',
          name: 'meta.absent-function.clear-range.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.flow.regexp'},
            3: {name: 'punctuation.separator.delimiter.pipe.regexp'},
            4: {
              name: 'variable.parameter.absent-function.regexp',
              patterns: [{include: '#main'}]
            },
            5: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?~)(\\|)([^|\\)]*)(\\))',
          name: 'meta.absent-stopper.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.flow.regexp'},
            3: {name: 'punctuation.separator.delimiter.pipe.regexp'},
            4: {
              name: 'variable.parameter.absent-function.regexp',
              patterns: [{include: '#main'}]
            },
            5: {name: 'punctuation.separator.delimiter.pipe.regexp'},
            6: {
              name: 'variable.parameter.absent-function.regexp',
              patterns: [{include: '#main'}]
            },
            7: {name: 'punctuation.definition.group.end.regexp'}
          },
          match:
            '(?x)\n(\\()\n(\\?~)\n(\\|) ([^|\\)]*)\n(\\|) ([^|\\)]*)\n(\\))',
          name: 'meta.absent-expression.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.flow.regexp'},
            3: {
              name: 'variable.parameter.absent-function.regexp',
              patterns: [{include: '#main'}]
            },
            4: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\?~)([^|\\)]*)(\\))',
          name: 'meta.absent-repeater.regexp'
        }
      ]
    },
    group: {
      patterns: [
        {include: '#fixedGroups'},
        {
          begin: "\\(\\?(?=P?[<'])",
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.named.regexp',
          patterns: [
            {
              begin: '\\G(P?)(<)',
              beginCaptures: {
                1: {name: 'storage.type.function.named-group.regexp'},
                2: {
                  name: 'punctuation.definition.named-group.bracket.angle.begin.regexp'
                }
              },
              contentName: 'entity.group.name.regexp',
              end: '>',
              endCaptures: {
                0: {
                  name: 'punctuation.definition.named-group.bracket.angle.end.regexp'
                }
              }
            },
            {
              begin: "\\G'",
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.named-group.quote.single.begin.regexp'
                }
              },
              contentName: 'entity.group.name.regexp',
              end: "'",
              endCaptures: {
                0: {
                  name: 'punctuation.definition.named-group.quote.single.end.regexp'
                }
              }
            },
            {include: '#main'}
          ]
        },
        {
          begin: '(\\(\\?)([A-Za-wyz]*x[A-Za-z]*[-A-Za-wyz]*)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {patterns: [{include: '#scopedModifiers'}]},
            3: {name: 'punctuation.separator.colon.regexp'}
          },
          contentName: 'source.embedded.regexp.extended',
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.non-capturing.regexp.extended',
          patterns: [{include: 'source.regexp.extended#main'}]
        },
        {
          begin: '(\\(\\?)((?:y{[\\w]+}|[-A-Za-z^])*)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {patterns: [{include: '#scopedModifiers'}]},
            3: {name: 'punctuation.separator.colon.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.non-capturing.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(\\?>',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.atomic.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '(\\(\\*)((?:atomic_)?script_run|a?sr)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.verb.regexp'},
            3: {name: 'punctuation.separator.colon.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.script-run.regexp',
          patterns: [{include: '#main'}]
        },
        {
          begin: '(\\(\\?{1,2})({)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'punctuation.definition.bracket.curly.begin.regexp'}
          },
          end: '(?x)\n(})                                    # Last closing bracket\n((\\[)([_A-Za-z][_A-Za-z0-9]*)(\\]))?  # [tag]\n(X|<|>)?                               # Callout direction\n(?:[^\\)]*)                            # Silently skip unexpected characters\n(\\))                                  # Closing bracket',
          endCaptures: {
            1: {name: 'punctuation.definition.bracket.curly.end.regexp'},
            2: {name: 'entity.name.tag.callout-tag.regexp'},
            3: {name: 'punctuation.definition.callout-tag.begin.regexp'},
            4: {name: 'callout-tag.constant.other.regexp'},
            5: {name: 'punctuation.definition.callout-tag.end.regexp'},
            6: {name: 'constant.language.callout-direction.regexp'},
            7: {name: 'punctuation.definition.group.end.regexp'}
          },
          name: 'meta.group.callout.contents.regexp',
          patterns: [{include: '#calloutBrackets'}, {include: '#main'}]
        },
        {
          begin:
            '(?x)\n(\\(\\*)\n([_A-Za-z][_A-Za-z0-9]*)               # Name\n((\\[)([_A-Za-z][_A-Za-z0-9]*)(\\]))?  # [tag]\n({)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'entity.name.callout.regexp'},
            3: {name: 'entity.name.tag.callout-tag.regexp'},
            4: {name: 'punctuation.definition.callout-tag.begin.regexp'},
            5: {name: 'callout-tag.constant.other.regexp'},
            6: {name: 'punctuation.definition.callout-tag.end.regexp'},
            7: {name: 'punctuation.definition.arguments.begin.regexp'}
          },
          end: '(?x)\n(})\n(?:[^\\)]*)\n(?:(\\))|(?=$))',
          endCaptures: {
            1: {name: 'punctuation.definition.arguments.end.regexp'},
            2: {name: 'punctuation.definition.group.end.regexp'}
          },
          name: 'meta.group.callout.regexp',
          patterns: [
            {include: '#main'},
            {match: '[-\\w]+', name: 'variable.parameter.argument.regexp'}
          ]
        },
        {
          begin: '(\\()(\\?~)(\\|)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'keyword.control.flow.regexp'},
            3: {name: 'punctuation.separator.delimiter.pipe.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.absent-function.regexp',
          patterns: [
            {match: '\\|', name: 'punctuation.separator.delimiter.pipe.regexp'},
            {match: '[-\\w]+', name: 'variable.parameter.argument.regexp'},
            {include: '#main'}
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\))',
          name: 'meta.group.empty.regexp'
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#main'}]
        }
      ]
    },
    groupRefInnards: {
      patterns: [
        {match: '\\-(?=\\d)', name: 'keyword.operator.arithmetic.minus.regexp'},
        {match: '\\+(?=\\d)', name: 'keyword.operator.arithmetic.plus.regexp'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#variable'},
        {include: '#anchor'},
        {include: '#escape'},
        {include: '#wildcard'},
        {include: '#alternation'},
        {include: '#quantifier'},
        {include: '#assertion'},
        {include: '#conditional'},
        {include: '#group'},
        {include: '#class'}
      ]
    },
    propInnards: {
      patterns: [
        {match: '=', name: 'keyword.operator.comparison.regexp'},
        {
          match: 'True|False',
          name: 'constant.language.boolean.${0:/downcase}.regexp'
        }
      ]
    },
    quantifier: {
      patterns: [
        {include: '#quantifierSymbolic'},
        {include: '#quantifierNumeric'}
      ]
    },
    quantifierNumeric: {
      captures: {
        1: {
          name: 'punctuation.definition.quantifier.bracket.curly.begin.regexp'
        },
        2: {name: 'keyword.operator.quantifier.min.regexp'},
        3: {name: 'punctuation.delimiter.comma.regexp'},
        4: {name: 'keyword.operator.quantifier.max.regexp'},
        5: {name: 'punctuation.delimiter.comma.regexp'},
        6: {name: 'keyword.operator.quantifier.max.regexp'},
        7: {name: 'punctuation.definition.quantifier.bracket.curly.end.regexp'}
      },
      match: '(\\{)(?:(\\d+)(,?)(\\d*)|(,)(\\d+))(\\})',
      name: 'keyword.operator.quantifier.specific.unescaped.regexp'
    },
    quantifierNumericOld: {
      captures: {
        1: {
          name: 'punctuation.definition.quantifier.bracket.curly.begin.regexp'
        },
        2: {name: 'keyword.operator.quantifier.min.regexp'},
        3: {name: 'punctuation.delimiter.comma.regexp'},
        4: {name: 'keyword.operator.quantifier.max.regexp'},
        5: {name: 'punctuation.delimiter.comma.regexp'},
        6: {name: 'keyword.operator.quantifier.max.regexp'},
        7: {name: 'punctuation.definition.quantifier.bracket.curly.end.regexp'}
      },
      match: '(\\\\{)(?:(\\d+)(,?)(\\d*)|(,)(\\d+))(\\\\})',
      name: 'keyword.operator.quantifier.specific.escaped.regexp'
    },
    quantifierSymbolic: {
      match: '[*+?]',
      name: 'keyword.operator.quantifier.regexp'
    },
    scopedModifiers: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.modifier.flag.y.regexp'},
            2: {
              name: 'punctuation.definition.option.bracket.curly.begin.regexp'
            },
            3: {name: 'variable.parameter.option-mode.regexp'},
            4: {name: 'punctuation.definition.option.bracket.curly.end.regexp'}
          },
          match: '(y)({)(\\w+)(})',
          name: 'meta.text-segment-mode.regexp'
        },
        {
          match: '(?:(?<=\\?)|\\G|^)\\^',
          name: 'keyword.operator.modifier.reset.regexp'
        },
        {match: '-', name: 'keyword.operator.modifier.negate.regexp'},
        {match: '[A-Za-z]', name: 'storage.modifier.flag.$0.regexp'}
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.regexp'}},
          match: '(?<![^\\\\]\\\\|^\\\\)\\$(?!\\d|-)[-\\w]+',
          name: 'variable.other.regexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.begin.regexp'},
            2: {name: 'punctuation.definition.variable.end.regexp'}
          },
          match: '(?<![^\\\\]\\\\|^\\\\)(\\$\\{)\\s*(?!\\d|-)[-\\w]+\\s*(\\})',
          name: 'variable.other.bracket.regexp'
        }
      ]
    },
    wildcard: {
      match: '\\.',
      name: 'constant.character.wildcard.dot.match.any.regexp'
    }
  },
  scopeName: 'source.regexp'
}

export default grammar
