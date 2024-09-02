// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/cylc/Cylc.tmbundle>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cylc'],
  names: ['cylc'],
  patterns: [
    {include: '#comments'},
    {include: '#jinja2'},
    {include: '#graphSections'},
    {include: '#headers'},
    {include: '#settings'},
    {include: '#includeFiles'},
    {include: '#keywords'},
    {include: '#strings'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.cylc'}},
          end: '(?=[\\n\\r])',
          name: 'comment.line.cylc',
          patterns: [{include: '#jinja2'}]
        }
      ]
    },
    graphSections: {
      patterns: [
        {
          begin: '\\b(graph)[\\t ]*(=)[\\t ]*',
          beginCaptures: {
            1: {name: 'keyword.graph.cylc'},
            2: {name: 'keyword.operator.assignment.cylc'}
          },
          end: '(?=[#\\n\\r])',
          patterns: [
            {include: '#graphStrings'},
            {
              captures: {1: {name: 'invalid.illegal.string.cylc'}},
              match: '(?:^|(?<="))[\\t ]*+([^#\\n\\r]+)'
            }
          ]
        },
        {
          begin: '\\[{2}[\\t ]*graph[\\t ]*\\]{2}',
          beginCaptures: {0: {patterns: [{include: '#headers'}]}},
          contentName: 'meta.graph-section.cylc',
          end: '(?=^[\\t ]*\\[)',
          patterns: [
            {include: '#comments'},
            {
              begin: '(\\S[^=#]*)(=)[\\t ]*',
              beginCaptures: {
                1: {
                  patterns: [
                    {include: '#jinja2'},
                    {
                      match: '[\\w\\+\\^\\$][\\w\\+\\-\\^\\$\\/\\t ,:]*',
                      name: 'keyword.graph.cylc'
                    }
                  ]
                },
                2: {name: 'keyword.operator.assignment.cylc'}
              },
              end: '(?=[#\\n\\r])',
              patterns: [
                {include: '#graphStrings'},
                {
                  captures: {1: {name: 'invalid.illegal.string.cylc'}},
                  match: '(?:^|(?<="))[\\t ]*+([^#\\n\\r]+)'
                }
              ]
            }
          ]
        }
      ]
    },
    graphStrings: {
      patterns: [
        {
          begin: '\\G("{3})',
          beginCaptures: {
            0: {name: 'string.quoted.triple.cylc'},
            1: {name: 'punctuation.definition.string.begin.cylc'}
          },
          end: '("{3})',
          endCaptures: {
            0: {name: 'string.quoted.triple.cylc'},
            1: {name: 'punctuation.definition.string.end.cylc'}
          },
          name: 'meta.graph-syntax.quoted.triple.cylc',
          patterns: [{include: '#graphSyntax'}]
        },
        {
          begin: '\\G(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.cylc'},
            1: {name: 'punctuation.definition.string.begin.cylc'}
          },
          end: '(["\\n\\r])',
          endCaptures: {
            0: {name: 'string.quoted.double.cylc'},
            1: {name: 'punctuation.definition.string.end.cylc'}
          },
          name: 'meta.graph-syntax.quoted.double.cylc',
          patterns: [{include: '#graphSyntax'}]
        },
        {
          captures: {0: {patterns: [{include: '#graphSyntax'}]}},
          match: '\\G[^#\\n\\r"]+',
          name: 'meta.graph-syntax.unquoted.cylc'
        }
      ]
    },
    graphSyntax: {
      patterns: [
        {include: '#comments'},
        {include: '#parameterizations'},
        {include: '#jinja2'},
        {
          captures: {
            1: {name: 'meta.variable.task.cylc'},
            2: {name: 'meta.annotation.inter-cycle.cylc'},
            3: {name: 'punctuation.section.brackets.begin.cylc'},
            4: {
              name: 'meta.annotation.inter-cycle.cylc',
              patterns: [
                {include: '#jinja2'},
                {include: '#intervals'},
                {include: '#isodatetimes'},
                {
                  captures: {0: {name: 'constant.language.cycle-point.cylc'}},
                  match: '\\^'
                },
                {match: '[\\+\\-]', name: 'keyword.operator.arithmetic.cylc'},
                {
                  match: '\\b\\d+\\b',
                  name: 'constant.numeric.integer-point.cylc'
                }
              ]
            },
            5: {name: 'punctuation.section.brackets.end.cylc'},
            6: {name: 'meta.annotation.qualifier.cylc'},
            7: {name: 'punctuation.definition.annotation.cylc'},
            8: {name: 'variable.annotation.cylc'},
            9: {name: 'keyword.other.optional-output.cylc'}
          },
          match:
            '(\\b\\w[\\w\\+\\-@%]*)((\\[)([^\\]]+)(\\]))?((:)([\\w\\-]+))?\\s*(\\?(?![:\\w]))?'
        },
        {match: '=>', name: 'keyword.control.trigger.cylc'},
        {match: '[\\|&]', name: 'keyword.other.logical.cylc'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.parens.begin.cylc'}},
          end: '[\\)\\n\\r]',
          endCaptures: {0: {name: 'punctuation.section.parens.end.cylc'}},
          name: 'meta.parens.cylc',
          patterns: [{include: '#graphSyntax'}]
        },
        {
          captures: {
            1: {name: 'keyword.other.suicide.cylc'},
            2: {name: 'meta.variable.task.cylc'}
          },
          match: '(?<=^|[\\s&>])(!)(\\b\\w[\\w\\+\\-@%]*)',
          name: 'meta.variable.suicide.cylc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.cylc'}},
          match: '(@)[\\w\\-]+',
          name: 'variable.other.xtrigger.cylc'
        },
        {match: '\\\\', name: 'constant.character.escape.continuation.cylc'}
      ]
    },
    headers: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.tag.begin.cylc'},
            2: {
              name: 'entity.name.tag.cylc',
              patterns: [{include: '#parameterizations'}, {include: '#jinja2'}]
            },
            3: {name: 'punctuation.definition.tag.end.cylc'}
          },
          match: '(\\[+)([^\\[\\]]+?)(\\]+)',
          name: 'meta.section.cylc'
        }
      ]
    },
    includeFiles: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.include.cylc'},
            2: {
              name: 'string.cylc',
              patterns: [{include: '#comments'}, {include: '#jinja2'}]
            }
          },
          match: '(%include)[\\t ]*(.*)',
          name: 'meta.include.cylc'
        }
      ]
    },
    intervals: {
      patterns: [
        {match: '\\bP\\d+[HS]', name: 'invalid.illegal.interval.cylc'},
        {
          captures: {1: {name: 'punctuation.definition.period.cylc'}},
          match: '\\b(P)\\d+\\b',
          name: 'constant.numeric.interval.integer.cylc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.period.cylc'},
            2: {name: 'punctuation.definition.week.cylc'}
          },
          match: '\\b(P)\\d+(W)\\b',
          name: 'constant.numeric.interval.iso.cylc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.period.cylc'},
            2: {name: 'punctuation.definition.year.cylc'},
            3: {name: 'punctuation.definition.month.cylc'},
            4: {name: 'punctuation.definition.day.cylc'},
            5: {name: 'punctuation.definition.time.cylc'},
            6: {name: 'punctuation.definition.hour.cylc'},
            7: {name: 'punctuation.definition.min.cylc'},
            8: {name: 'punctuation.definition.sec.cylc'}
          },
          match:
            '\\b(P(?=(?:\\d|T\\d)))(?:\\d+(Y))?(?:\\d+(M))?(?:\\d+(D))?(?:(T)(?:\\d+(H))?(?:\\d+(M))?(?:\\d+(S))?)?\\b',
          name: 'constant.numeric.interval.iso.cylc'
        }
      ]
    },
    isodatetimes: {
      patterns: [
        {
          match: '\\b\\d{3,7}T\\d{2,}Z?\\b',
          name: 'invalid.illegal.isodatetime.cylc'
        },
        {
          match: '\\b(\\d{4})(?:(\\-)(\\d{2}))?(?:(\\-)(\\d{2}))?T\\d{3,}\\b',
          name: 'invalid.illegal.isodatetime.cylc'
        },
        {
          match:
            '\\b(\\d{4})(\\d{2})?(\\d{2})?T\\d{2,}(?:[\\+\\-]\\d+)?\\:\\d*\\b',
          name: 'invalid.illegal.isodatetime.cylc'
        },
        {
          captures: {
            1: {name: 'constant.numeric.year.cylc'},
            10: {name: 'punctuation.separator.time.cylc'},
            11: {name: 'constant.numeric.sec.cylc'},
            12: {name: 'constant.numeric.timezone.long.cylc'},
            13: {name: 'punctuation.definition.timezone.cylc'},
            14: {name: 'punctuation.definition.timezone.cylc'},
            15: {name: 'constant.numeric.hour.cylc'},
            16: {name: 'punctuation.separator.time.cylc'},
            17: {name: 'constant.numeric.min.cylc'},
            2: {name: 'punctuation.separator.date.cylc'},
            3: {name: 'constant.numeric.month.cylc'},
            4: {name: 'punctuation.separator.date.cylc'},
            5: {name: 'constant.numeric.day.cylc'},
            6: {name: 'punctuation.definition.time.cylc'},
            7: {name: 'constant.numeric.hour.cylc'},
            8: {name: 'punctuation.separator.time.cylc'},
            9: {name: 'constant.numeric.min.cylc'}
          },
          match:
            '\\b(\\d{4})(?:(\\-)(\\d{2}))?(?:(\\-)(\\d{2}))?(?:(T)(\\d{2})(?:(:)(\\d{2}))?(?:(:)(\\d{2}))?((Z)|(?:([\\+\\-])(\\d{2})(?:(\\:)(\\d{2}))?))?)?\\b',
          name: 'constant.numeric.isodatetime.long.cylc'
        },
        {
          captures: {
            1: {name: 'constant.numeric.year.cylc'},
            10: {name: 'punctuation.definition.timezone.cylc'},
            11: {name: 'constant.numeric.hour.cylc'},
            12: {name: 'constant.numeric.min.cylc'},
            2: {name: 'constant.numeric.month.cylc'},
            3: {name: 'constant.numeric.day.cylc'},
            4: {name: 'punctuation.definition.time.cylc'},
            5: {name: 'constant.numeric.hour.cylc'},
            6: {name: 'constant.numeric.min.cylc'},
            7: {name: 'constant.numeric.sec.cylc'},
            8: {name: 'constant.numeric.isotimezone.short.cylc'},
            9: {name: 'punctuation.definition.timezone.cylc'}
          },
          match:
            '\\b(\\d{4})(\\d{2})?(\\d{2})?(?:(T)(\\d{2})(\\d{2})?(\\d{2})?((Z)|(?:([\\+\\-])(\\d{2})(\\d{2})?))?)?\\b',
          name: 'constant.numeric.isodatetime.short.cylc'
        }
      ]
    },
    jinja2: {
      patterns: [
        {
          begin: '(?={%)',
          contentName: 'source.jinja',
          end: '(?<=%})',
          name: 'meta.embedded.block.jinja',
          patterns: [
            {
              match: '\\G{%[\\+\\-]?',
              name: 'punctuation.definition.template-expression.begin.jinja'
            },
            {
              match: '\\-?%}',
              name: 'punctuation.definition.template-expression.end.jinja'
            }
          ]
        },
        {
          begin: '(?={{)',
          contentName: 'source.jinja',
          end: '(?<=}})',
          name: 'meta.embedded.block.jinja',
          patterns: [
            {
              match: '\\G{{',
              name: 'punctuation.definition.template-expression.begin.jinja'
            },
            {
              match: '}}',
              name: 'punctuation.definition.template-expression.end.jinja'
            }
          ]
        },
        {
          begin: '{#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.jinja'}
          },
          end: '#}',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.jinja'}},
          name: 'comment.block.jinja'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(if|for|while|return)\\b', name: 'keyword.control.cylc'}
      ]
    },
    parameterizations: {
      patterns: [
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.definition.annotation.begin.cylc'}
          },
          end: '(>)((\\[)([^\\]]+)(\\]))?((:)([\\w\\-]+))?\\s*(\\?(?![:\\w]))?',
          endCaptures: {
            1: {name: 'punctuation.definition.annotation.end.cylc'},
            2: {name: 'meta.annotation.inter-cycle.cylc'},
            3: {name: 'punctuation.section.brackets.begin.cylc'},
            4: {
              name: 'meta.annotation.inter-cycle.cylc',
              patterns: [
                {include: '#jinja2'},
                {include: '#intervals'},
                {include: '#isodatetimes'},
                {
                  captures: {0: {name: 'constant.language.cycle-point.cylc'}},
                  match: '\\^'
                },
                {match: '[\\+\\-]', name: 'keyword.operator.arithmetic.cylc'},
                {
                  match: '\\b\\d+\\b',
                  name: 'constant.numeric.integer-point.cylc'
                }
              ]
            },
            5: {name: 'punctuation.section.brackets.end.cylc'},
            6: {name: 'meta.annotation.qualifier.cylc'},
            7: {name: 'punctuation.definition.annotation.cylc'},
            8: {name: 'variable.annotation.cylc'},
            9: {name: 'keyword.other.optional-output.cylc'}
          },
          name: 'meta.annotation.parameterization.cylc',
          patterns: [
            {include: '#jinja2'},
            {
              name: 'meta.polling.cylc',
              patterns: [
                {
                  captures: {1: {name: 'entity.name.namespace.suite.cylc'}},
                  match: '([^\\s<>]+)(?=::)'
                },
                {match: '(?<=\\S)::(?=\\S)', name: 'punctuation.accessor.cylc'},
                {
                  captures: {1: {name: 'meta.variable.task.cylc'}},
                  match: '(?<=::)(\\b\\w[\\w\\+\\-@%]*)'
                },
                {
                  captures: {
                    1: {name: 'meta.annotation.qualifier.cylc'},
                    2: {name: 'punctuation.definition.annotation.cylc'},
                    3: {name: 'variable.annotation.cylc'}
                  },
                  match: '(?<!^|[\\s:])((:)([\\w\\-]+))'
                }
              ]
            },
            {
              captures: {
                1: {name: 'variable.parameter.cylc'},
                2: {name: 'keyword.operator.assignment.cylc'},
                3: {
                  patterns: [
                    {match: '\\d+$', name: 'constant.numeric.cylc'},
                    {match: '\\w+', name: 'variable.other.cylc'}
                  ]
                }
              },
              match: '(\\w+)[\\t ]*(=)[\\t ]*(\\w+)'
            },
            {
              captures: {
                1: {name: 'keyword.operator.arithmetic.cylc'},
                2: {name: 'constant.numeric.cylc'}
              },
              match: '([\\+\\-])[\\t ]*(\\d+)(?!\\w)'
            },
            {match: '\\w+', name: 'variable.parameter.cylc'},
            {match: ',', name: 'punctuation.separator.parameter.cylc'}
          ]
        }
      ]
    },
    settings: {
      patterns: [
        {
          begin: '([^=#\\s][^=#\\n\\r]*?)?[\\t ]*(=)[\\t ]*',
          beginCaptures: {
            1: {
              patterns: [
                {include: '#jinja2'},
                {match: '[\\w\\-\\t ]+', name: 'variable.other.key.cylc'}
              ]
            },
            2: {name: 'keyword.operator.assignment.cylc'}
          },
          contentName: 'meta.value.cylc',
          end: '(?=[#\\n\\r])',
          name: 'meta.setting.cylc',
          patterns: [
            {include: '#strings'},
            {
              captures: {1: {name: 'invalid.illegal.string.cylc'}},
              match: '(?:^|(?<="))[\\t ]*+([^#\\n\\r]+)'
            },
            {include: '#jinja2'},
            {
              captures: {
                1: {
                  name: 'string.unquoted.value.cylc',
                  patterns: [{include: '#jinja2'}]
                }
              },
              match: '([^#\\n\\r]+)'
            }
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '("{3})',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cylc'}
          },
          end: '("{3})',
          endCaptures: {1: {name: 'punctuation.definition.string.end.cylc'}},
          name: 'string.quoted.triple.cylc',
          patterns: [
            {include: '#jinja2'},
            {match: '\\\\.', name: 'constant.character.escape.cylc'}
          ]
        },
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cylc'}
          },
          end: '(["\\n\\r])',
          endCaptures: {1: {name: 'punctuation.definition.string.end.cylc'}},
          name: 'string.quoted.double.cylc',
          patterns: [
            {include: '#jinja2'},
            {match: '\\\\.', name: 'constant.character.escape.cylc'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.cylc'
}

export default grammar
