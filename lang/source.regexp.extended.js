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
  patterns: [{include: '#main'}],
  repository: {
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
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.regexp'}},
      end: '$',
      name: 'comment.line.number-sign.regexp'
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
              match: "\\G(?:(<)([^>]+)(>)|(')([^>]+)('))"
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
    group: {
      patterns: [
        {include: 'source.regexp#fixedGroups'},
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
          begin: '(\\(\\?)((?:y{[\\w]+}|[-A-Za-z^])*)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {patterns: [{include: 'source.regexp#scopedModifiers'}]},
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
    injection: {
      begin:
        '(?:\\A|\\G)\\s*(?:/\\s*)?(\\(\\?\\^?[A-Za-wyz]*x[A-Za-z]*[-A-Za-wyz]*\\))',
      beginCaptures: {1: {patterns: [{include: '#group'}]}},
      contentName: 'source.embedded.regexp.extended',
      end: '(?=A)B',
      patterns: [{include: 'source.regexp.extended'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: 'source.regexp#comment'},
        {include: 'source.regexp#variable'},
        {include: 'source.regexp#anchor'},
        {include: 'source.regexp#escape'},
        {include: 'source.regexp#wildcard'},
        {include: 'source.regexp#alternation'},
        {include: 'source.regexp#quantifier'},
        {include: '#assertion'},
        {include: '#conditional'},
        {include: '#group'},
        {include: 'source.regexp#class'}
      ]
    }
  },
  scopeName: 'source.regexp.extended'
}

export default grammar
