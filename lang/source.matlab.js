// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mathworks/MATLAB-Language-grammar>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.matlab', '.m'],
  injections: {
    'source.matlab -comment -entity -support -string -variable -interpolation -source.shell':
      {patterns: [{include: '#readwrite_operations'}]}
  },
  names: ['matlab', 'octave'],
  patterns: [
    {include: '#rules_before_command_dual'},
    {include: '#command_dual'},
    {include: '#rules_after_command_dual'}
  ],
  repository: {
    anonymous_function: {
      begin: '(@)[^\\S\\n]*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.function.anonymous.matlab'}
      },
      name: 'meta.function.anonymous.matlab',
      patterns: [
        {
          begin: '\\G(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.matlab'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.matlab'}
          },
          name: 'meta.parameters.matlab',
          patterns: [
            {
              match: '[a-zA-Z][a-zA-Z0-9_]*',
              name: 'variable.parameter.input.matlab'
            },
            {match: ',', name: 'punctuation.separator.parameter.comma.matlab'},
            {include: '#line_continuation'}
          ]
        },
        {
          begin: '(?<=\\))[^\\S\\n]*(\\()?',
          beginCaptures: {1: {name: 'punctuation.section.group.begin.matlab'}},
          endCaptures: {1: {name: 'punctuation.section.group.end.matlab'}},
          name: 'meta.parameters.matlab',
          patterns: [{include: '$self'}, {include: '#line_continuation'}]
        },
        {include: '#line_continuation'}
      ]
    },
    blocks: {
      patterns: [
        {
          begin: '\\s*(?<=^|[\\s,;])(for)\\b',
          beginCaptures: {1: {name: 'keyword.control.for.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {1: {name: 'keyword.control.end.for.matlab'}},
          name: 'meta.for.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.for.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(if)\\b',
          beginCaptures: {1: {name: 'keyword.control.if.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {
            1: {name: 'keyword.control.end.if.matlab'},
            2: {patterns: [{include: '$self'}]}
          },
          name: 'meta.if.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.if.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {
              begin: '\\s*(?<=^|[\\s,;])(elseif)\\b',
              beginCaptures: {1: {name: 'keyword.control.elseif.matlab'}},
              end: '\\s*(?<=^|[\\s,;])(?=elseif|else|end)\\b',
              name: 'meta.elseif.matlab',
              patterns: [
                {
                  begin: '\\G(?!$)',
                  name: 'meta.elseif.declaration.matlab',
                  patterns: [{include: '$self'}]
                },
                {include: '$self'}
              ]
            },
            {
              begin: '\\s*(?<=^|[\\s,;])(else)\\b',
              beginCaptures: {1: {name: 'keyword.control.else.matlab'}},
              end: '\\s*(?<=^|[\\s,;])(?=end)\\b',
              name: 'meta.else.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(parfor)\\b',
          beginCaptures: {1: {name: 'keyword.control.for.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {1: {name: 'keyword.control.end.for.matlab'}},
          name: 'meta.for.parallel.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.for.parallel.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(spmd)\\b',
          beginCaptures: {1: {name: 'keyword.control.repeat.parallel.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {
            1: {name: 'keyword.control.end.repeat.parallel.matlab'}
          },
          name: 'meta.repeat.parallel.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.repeat.parallel.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(switch)\\b',
          beginCaptures: {1: {name: 'keyword.control.switch.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {
            1: {name: 'keyword.control.end.switch.matlab'},
            2: {patterns: [{include: '$self'}]}
          },
          name: 'meta.switch.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.switch.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {
              begin: '\\s*(?<=^|[\\s,;])(case)\\b',
              beginCaptures: {1: {name: 'keyword.control.switch.case.matlab'}},
              end: '\\s*(?<=^|[\\s,;])(?=case|otherwise|end)\\b',
              name: 'meta.case.matlab',
              patterns: [
                {
                  begin: '\\G(?!$)',
                  name: 'meta.case.declaration.matlab',
                  patterns: [{include: '$self'}]
                },
                {include: '$self'}
              ]
            },
            {
              begin: '\\s*(?<=^|[\\s,;])(otherwise)\\b',
              beginCaptures: {
                1: {name: 'keyword.control.switch.otherwise.matlab'}
              },
              end: '\\s*(?<=^|[\\s,;])(?=end)\\b',
              name: 'meta.otherwise.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(try)\\b',
          beginCaptures: {1: {name: 'keyword.control.try.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {1: {name: 'keyword.control.end.try.matlab'}},
          name: 'meta.try.matlab',
          patterns: [
            {
              captures: {
                2: {name: 'keyword.control.catch.matlab'},
                3: {name: 'variable.other.constant.matlab'}
              },
              match: '(\\s*)(?<=^|[\\s,;])(catch)\\b\\s*(\\w+)?',
              name: 'meta.catch.matlab'
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\s*(?<=^|[\\s,;])(while)\\b',
          beginCaptures: {1: {name: 'keyword.control.while.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {1: {name: 'keyword.control.end.while.matlab'}},
          name: 'meta.while.matlab',
          patterns: [
            {
              begin: '\\G(?!$)',
              name: 'meta.while.declaration.matlab',
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    braced_validator_list: {
      begin: '\\s*({)\\s*',
      beginCaptures: {1: {name: 'punctuation.section.block.begin.matlab'}},
      contentName: 'meta.block.validation.matlab',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.block.end.matlab'}},
      patterns: [
        {include: '#function_call'},
        {include: '#braced_validator_list'},
        {include: '#validator_strings'},
        {include: '#line_continuation'},
        {match: '\\.', name: 'punctuation.accessor.dot.matlab'}
      ]
    },
    classdef: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t^\\s*    \t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t(classdef)\n\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t',
          beginCaptures: {1: {name: 'storage.type.class.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b',
          endCaptures: {1: {name: 'storage.type.class.end.matlab'}},
          name: 'meta.class.matlab',
          patterns: [
            {
              begin: '\\G',
              end: '(?<!\\.{3})(?=\\n)',
              name: 'meta.class.declaration.matlab',
              patterns: [
                {
                  begin: '\\G\\(',
                  end: '\\)(?=\\s*\\w+)',
                  name: 'storage.modifier.section.class.matlab',
                  patterns: [
                    {
                      match: ',',
                      name: 'punctuation.separator.modifier.comma.matlab'
                    },
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'storage.modifier.class.matlab'
                    },
                    {
                      begin: '(=)\\s*',
                      beginCaptures: {
                        1: {name: 'keyword.operator.assignment.matlab'}
                      },
                      end: '(?=\\)|,)',
                      patterns: [
                        {
                          match: 'true|false',
                          name: 'constant.language.boolean.matlab'
                        },
                        {
                          match: '(?<!\\w)\\?(?=\\w)',
                          name: 'keyword.operator.other.question.matlab'
                        },
                        {include: '#metaclass_literal'},
                        {include: '#string'},
                        {include: '#curly_brackets'},
                        {include: '#line_continuation'}
                      ]
                    },
                    {include: '#comments'},
                    {include: '#line_continuation'}
                  ]
                },
                {
                  begin: '\\s*(\\w+)',
                  beginCaptures: {1: {name: 'entity.name.type.class.matlab'}},
                  end: '(?<!\\.{3})(?=\\s*%|\\n)',
                  patterns: [
                    {
                      begin: '\\G',
                      end: '(?<!\\.{3})(?=\\n)',
                      patterns: [
                        {include: '#comments'},
                        {include: '#line_continuation'},
                        {
                          match: '<',
                          name: 'punctuation.separator.lt.inheritance.matlab'
                        },
                        {
                          begin: '(?<!\\.)\\b(?=[a-zA-Z])',
                          end: '(?<=[a-zA-Z0-9_])(?!\\.)',
                          name: 'meta.inherited-class.matlab',
                          patterns: [
                            {
                              match:
                                '(?<=[\\s.<])[a-zA-Z][a-zA-Z0-9_]*(?=\\s|$)',
                              name: 'entity.other.inherited-class.matlab'
                            },
                            {
                              match: '[a-zA-Z][a-zA-Z0-9_]*',
                              name: 'entity.name.namespace.matlab'
                            },
                            {
                              match: '\\.',
                              name: 'punctuation.accessor.dot.matlab'
                            }
                          ]
                        },
                        {match: '&', name: 'keyword.operator.type.matlab'}
                      ]
                    },
                    {include: '#comments'},
                    {include: '#line_continuation'}
                  ]
                },
                {include: '#comments'}
              ]
            },
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t\t\t(properties)\\b([^%]*)\n\t\t\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t\t\t\t(\t\t\t\t\t\t\t\t\t# Optional attributes\n\t\t\t\t\t\t\t\t\t\t\\( [^)]* \\)\n\t\t\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t\t\t\t\\s*($|(?=%))\n\t\t\t\t\t\t\t',
              beginCaptures: {
                2: {name: 'keyword.control.properties.matlab'},
                3: {
                  patterns: [
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'storage.modifier.properties.matlab'
                    },
                    {
                      begin: '(=)\\s*',
                      beginCaptures: {
                        1: {name: 'keyword.operator.assignment.matlab'}
                      },
                      end: ',|(?=\\))',
                      patterns: [
                        {
                          match: 'true|false',
                          name: 'constant.language.boolean.matlab'
                        },
                        {
                          match: 'public|protected|private',
                          name: 'storage.modifier.access.matlab'
                        }
                      ]
                    }
                  ]
                }
              },
              end: '\\s*(?<=^|[\\s,;])(end)\\b',
              endCaptures: {1: {name: 'keyword.control.end.properties.matlab'}},
              name: 'meta.properties.matlab',
              patterns: [{include: '#validators'}, {include: '$self'}]
            },
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t\t\t(methods)\\b([^%]*)\n\t\t\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t\t\t\t(\t\t\t\t\t\t\t\t\t# Optional attributes\n\t\t\t\t\t\t\t\t\t\t\\( [^)]* \\)\n\t\t\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t\t\t\t\\s*($|(?=%))\n\t\t\t\t\t\t\t',
              beginCaptures: {
                2: {name: 'keyword.control.methods.matlab'},
                3: {
                  patterns: [
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'storage.modifier.methods.matlab'
                    },
                    {
                      begin: '=\\s*',
                      end: ',|(?=\\))',
                      patterns: [
                        {
                          match: 'true|false',
                          name: 'constant.language.boolean.matlab'
                        },
                        {
                          match: 'public|protected|private',
                          name: 'storage.modifier.access.matlab'
                        }
                      ]
                    }
                  ]
                }
              },
              end: '\\s*(?<=^|[\\s,;])(end)\\b',
              endCaptures: {1: {name: 'keyword.control.end.methods.matlab'}},
              name: 'meta.methods.matlab',
              patterns: [{include: '$self'}]
            },
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t\t\t(events)\\b([^%]*)\n\t\t\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t\t\t\t(\t\t\t\t\t\t\t\t\t# Optional attributes\n\t\t\t\t\t\t\t\t\t\t\\( [^)]* \\)\n\t\t\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t\t\t\t\\s*($|(?=%))\n\t\t\t\t\t\t\t',
              beginCaptures: {
                2: {name: 'keyword.control.events.matlab'},
                3: {
                  patterns: [
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'variable.parameter.events.matlab'
                    },
                    {
                      begin: '=\\s*',
                      end: ',|(?=\\))',
                      patterns: [
                        {
                          match: 'true|false',
                          name: 'constant.language.boolean.matlab'
                        },
                        {
                          match: 'public|protected|private',
                          name: 'storage.modifier.access.matlab'
                        }
                      ]
                    }
                  ]
                }
              },
              end: '\\s*(?<=^|[\\s,;])(end)\\b',
              endCaptures: {1: {name: 'keyword.control.end.events.matlab'}},
              name: 'meta.events.matlab',
              patterns: [
                {
                  captures: {1: {name: 'entity.name.type.event.matlab'}},
                  match: '(?:^\\s*|,\\s*)([a-zA-Z0-9_]+)',
                  name: 'meta.assignment.definition.event.matlab'
                },
                {include: '$self'}
              ]
            },
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t\t\t(enumeration)\\b([^%]*)\n\t\t\t\t\t\t\t\t\t\\s*($|(?=%))\n\t\t\t\t\t\t\t',
              beginCaptures: {2: {name: 'keyword.control.enum.matlab'}},
              end: '\\s*(?<=^|[\\s,;])(end)\\b',
              endCaptures: {1: {name: 'keyword.control.end.enum.matlab'}},
              name: 'meta.enum.matlab',
              patterns: [
                {
                  captures: {1: {name: 'variable.other.enummember.matlab'}},
                  match: '(?:^\\s*|,\\s*)([a-zA-Z0-9_]+)',
                  name: 'meta.assignment.definition.enummember.matlab'
                },
                {match: ',', name: 'punctuation.separator.comma.matlab'},
                {include: '#parentheses'},
                {include: '#comments'}
              ]
            },
            {include: '#comments'}
          ]
        }
      ]
    },
    command_dual: {
      captures: {
        2: {
          name: 'entity.name.function.command.matlab',
          patterns: [{include: '$self'}]
        },
        4: {
          name: 'string.unquoted.matlab',
          patterns: [{include: '#string_quoted_single'}]
        }
      },
      match:
        '(?<=^|[^.]\\n|;|,|=)([^\\S\\n]*)(?# A> )(\\b\\w+\\b)([^\\S\\n]+)(?# B> )((?!(\\+|-|\\*|\\.\\*|\\/|\\.\\/|\\\\|\\.\\\\|\\^|\\.\\^|==|~=|&|&&|\\||\\|\\||=|:|>|>=|<|<=|\\.{3})[^\\S\\n]?)[^\\s({=;%][^\\n;%]*)',
      name: 'meta.function-call.command.matlab'
    },
    comment_block: {
      begin: '(^[\\s]*)(%\\{)[^\\S\\n]*+\\n',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.matlab'},
        2: {name: 'punctuation.definition.comment.begin.matlab'}
      },
      end: '(^[\\s]*)(%\\})[^\\S\\n]*+(?:\\n|$)',
      endCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.matlab'},
        2: {name: 'punctuation.definition.comment.end.matlab'}
      },
      name: 'comment.block.percentage.matlab',
      patterns: [{include: '#comment_block'}, {match: '^[^\\n]*\\n'}]
    },
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=%%\\s)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.matlab'}
          },
          end: '\\Z',
          patterns: [
            {
              begin: '%%',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.matlab'}
              },
              end: '\\n',
              name: 'comment.line.double-percentage.matlab',
              patterns: [
                {
                  begin: '\\G[^\\S\\n]*(?![\\n\\s])',
                  beginCaptures: {
                    0: {name: 'punctuation.whitespace.comment.leading.matlab'}
                  },
                  contentName: 'entity.name.section.matlab',
                  end: '(?=\\n)'
                }
              ]
            }
          ]
        },
        {include: '#comment_block'},
        {
          begin: '(^[ \\t]+)?(?=%)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.matlab'}
          },
          end: '\\Z',
          patterns: [
            {
              begin: '%',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.matlab'}
              },
              end: '\\Z',
              name: 'comment.line.percentage.matlab'
            }
          ]
        }
      ]
    },
    conjugate_transpose: {
      match: "((?<=[^\\s])|(?<=\\])|(?<=\\))|(?<=\\}))'",
      name: 'keyword.operator.transpose.matlab'
    },
    constants: {
      patterns: [
        {
          match:
            '(?<!\\.)\\b(eps|Inf|inf|intmax|intmin|namelengthmax|realmax|realmin|pi)\\b',
          name: 'constant.numeric.matlab'
        },
        {
          match: '(?<!\\.)\\b(NaN|nan|NaT|nat)\\b',
          name: 'constant.language.nan.matlab'
        },
        {
          match: '(?<!\\.)\\b(on|off|false|true)\\b',
          name: 'constant.language.boolean.matlab'
        }
      ]
    },
    control_statements: {
      captures: {1: {name: 'keyword.control.flow.matlab'}},
      match: '\\s*(?<=^|[\\s,;])(break|continue|return)\\b',
      name: 'meta.control.matlab'
    },
    curly_brackets: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.braces.begin.matlab'}},
      contentName: 'meta.cell.literal.matlab',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.braces.end.matlab'}},
      patterns: [
        {include: '#end_in_parentheses'},
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    end_in_parentheses: {
      match: '\\bend\\b',
      name: 'keyword.operator.word.matlab'
    },
    function: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t(function)\n\t\t\t\t\t\t\t\\s+\n\t\t\t\t\t',
          beginCaptures: {2: {name: 'storage.type.function.matlab'}},
          end: '\\s*(?<=^|[\\s,;])(end)\\b(\\s*\\n)?',
          endCaptures: {1: {name: 'storage.type.function.end.matlab'}},
          name: 'meta.function.matlab',
          patterns: [
            {
              begin: '\\G',
              name: 'meta.function.declaration.matlab',
              patterns: [
                {
                  begin: '\\G(?=[^\\(]*?(?:=|\\[|\\.{3}))',
                  contentName: 'meta.assignment.variable.output.matlab',
                  end: '\\s*(=)\\s*',
                  endCaptures: {
                    1: {name: 'keyword.operator.assignment.matlab'}
                  },
                  patterns: [
                    {
                      match: '\\G\\[',
                      name: 'punctuation.section.assignment.group.begin.matlab'
                    },
                    {
                      captures: {
                        1: {
                          name: 'punctuation.section.assignment.group.end.matlab'
                        }
                      },
                      match: '(\\])\\s*'
                    },
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'variable.parameter.output.matlab'
                    },
                    {
                      match: ',',
                      name: 'punctuation.separator.parameter.comma.matlab'
                    },
                    {include: '#line_continuation'},
                    {include: '#comments'}
                  ]
                },
                {
                  match: '[a-zA-Z][a-zA-Z0-9_]*(?>\\.[a-zA-Z0-9_]+)*',
                  name: 'entity.name.function.matlab',
                  patterns: [
                    {match: '\\.', name: 'punctuation.accessor.dot.matlab'},
                    {include: '#line_continuation'}
                  ]
                },
                {
                  begin: '\\s*\\(',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.parameters.begin.matlab'}
                  },
                  end: '\\)',
                  endCaptures: {
                    0: {name: 'punctuation.definition.parameters.end.matlab'}
                  },
                  name: 'meta.parameters.matlab',
                  patterns: [
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'variable.parameter.input.matlab'
                    },
                    {match: '~', name: 'variable.language.anonymous.matlab'},
                    {
                      match: ',',
                      name: 'punctuation.separator.parameter.comma.matlab'
                    },
                    {include: '#comments'},
                    {include: '#line_continuation'}
                  ]
                },
                {include: '#line_continuation'},
                {include: '#comments'}
              ]
            },
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t\t(^\\s*)\t\t\t\t\t\t\t\t# Leading whitespace\n\t\t\t\t\t\t\t\t\t(arguments)\\b([^%]*)\n\t\t\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t\t\t\t(\t\t\t\t\t\t\t\t\t# Optional attributes\n\t\t\t\t\t\t\t\t\t\t\\( [^)]* \\)\n\t\t\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t\t\t\t\\s*($|(?=%))\n\t\t\t\t\t\t\t\t',
              beginCaptures: {
                2: {name: 'keyword.control.arguments.matlab'},
                3: {
                  name: 'meta.arguments.declaration.matlab',
                  patterns: [
                    {
                      match: '\\(',
                      name: 'punctuation.section.parens.begin.matlab'
                    },
                    {
                      match: '[a-zA-Z][a-zA-Z0-9_]*',
                      name: 'storage.modifier.arguments.matlab'
                    },
                    {
                      match: '\\)',
                      name: 'punctuation.section.parens.end.matlab'
                    }
                  ]
                }
              },
              end: '\\s*(?<=^|[\\s,;])(end)\\b',
              endCaptures: {1: {name: 'keyword.control.end.arguments.matlab'}},
              name: 'meta.arguments.matlab',
              patterns: [
                {
                  match: '(?<=\\w)\\.\\?(?=\\w)',
                  name: 'keyword.operator.other.matlab'
                },
                {include: '#validators'},
                {include: '$self'}
              ]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    function_call: {
      begin: '([a-zA-Z][a-zA-Z0-9_]*)\\s*(\\()',
      beginCaptures: {
        1: {
          name: 'entity.name.function.matlab',
          patterns: [{include: '$self'}]
        },
        2: {name: 'punctuation.section.parens.begin.matlab'}
      },
      endCaptures: {0: {name: 'punctuation.section.parens.end.matlab'}},
      name: 'meta.function-call.parens.matlab',
      patterns: [
        {include: '#end_in_parentheses'},
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    global_persistent: {
      captures: {1: {name: 'storage.modifier.matlab'}},
      match: '^\\s*(global|persistent)\\b'
    },
    import: {
      captures: {
        1: {name: 'keyword.other.import.matlab'},
        2: {
          name: 'entity.name.namespace.matlab',
          patterns: [
            {match: '\\w+', name: 'entity.name.module.matlab'},
            {match: '\\.', name: 'punctuation.separator.matlab'},
            {match: '\\*', name: 'variable.language.wildcard.matlab'}
          ]
        }
      },
      match:
        '[^\\S\\r\\n]*\\b(import)\\b[^\\S\\n]+([a-zA-Z0-9.\\*]*)[^\\S\\n]*(?=;|%|$)',
      name: 'meta.import.matlab'
    },
    indexing_by_expression: {
      begin: '([a-zA-Z][a-zA-Z0-9_]*)\\s*(\\.)(\\()',
      beginCaptures: {
        1: {name: 'variable.other.readwrite.matlab'},
        2: {name: 'punctuation.accessor.dot.matlab'},
        3: {name: 'punctuation.section.parens.begin.matlab'}
      },
      contentName: 'meta.parens.matlab',
      endCaptures: {0: {name: 'punctuation.section.parens.end.matlab'}},
      patterns: [
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    indexing_curly_brackets: {
      begin: '([a-zA-Z][a-zA-Z0-9_\\.]*\\s*)\\{',
      beginCaptures: {1: {patterns: [{include: '#variables'}]}},
      patterns: [
        {include: '#end_in_parentheses'},
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    line_continuation: {
      captures: {
        1: {name: 'punctuation.separator.continuation.line.matlab'},
        2: {name: 'comment.continuation.line.matlab'}
      },
      match: '(\\.{3})(.*)$',
      name: 'meta.continuation.line.matlab'
    },
    metaclass_literal: {
      begin: '(?<=\\?)(?=[a-zA-Z])',
      end: '(?<=[a-zA-Z0-9_])(?![a-zA-Z0-9_]|\\.|\\(|{)',
      name: 'meta.metaclass.matlab',
      patterns: [
        {
          match: '(?<=[.\\?])[a-zA-Z][a-zA-Z0-9_]*(?![a-zA-Z0-9_.])',
          name: 'entity.other.class.matlab'
        },
        {match: '[a-zA-Z][a-zA-Z0-9_]*', name: 'entity.name.namespace.matlab'}
      ]
    },
    multiple_assignment: {
      begin: '\\[(?=[^\\]]+\\]\\s*=[a-zA-Z0-9_\\s(])',
      beginCaptures: {
        0: {name: 'punctuation.section.assignment.group.begin.matlab'}
      },
      contentName: 'meta.assignment.variable.group.matlab',
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.section.assignment.group.end.matlab'}
      },
      patterns: [
        {
          match: '(?<=[\\[,])\\s{0,4}~\\s{0,4}(?=[\\],])',
          name: 'variable.language.anonymous.matlab'
        },
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    numbers: {
      patterns: [
        {
          captures: {3: {name: 'storage.type.number.imaginary.matlab'}},
          match:
            '(?<=[\\s\\+\\-\\*\\/\\\\=:\\[\\(\\{,^]|^)\\d*\\.?\\d+([eE][+-]?\\d)?([0-9&&[^\\.]])*(i|j)?\\b',
          name: 'constant.numeric.decimal.matlab'
        },
        {
          captures: {1: {name: 'storage.type.number.hex.matlab'}},
          match:
            '(?<=[\\s\\+\\-\\*\\/\\\\=:\\[\\(\\{,^]|^)0[xX][[:xdigit:]]+([su](?:8|16|32|64))?\\b',
          name: 'constant.numeric.hex.matlab'
        },
        {
          captures: {1: {name: 'storage.type.number.binary.matlab'}},
          match:
            '(?<=[\\s\\+\\-\\*\\/\\\\=:\\[\\(\\{,^]|^)0[bB][10]+([su](?:8|16|32|64))?\\b',
          name: 'constant.numeric.binary.matlab'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '(?<!\\w)@(?=\\s{,4}\\w)',
          name: 'keyword.operator.storage.at.matlab'
        },
        {
          match: '(?<!\\w)\\?(?=\\w)',
          name: 'keyword.operator.other.question.matlab'
        },
        {
          match:
            '(?<=[a-zA-Z0-9\\s])(\\+|-|\\*|\\.\\*|/|\\./|\\\\|\\.\\\\|\\^|\\.\\^)(?=[a-zA-Z0-9\\s]|(?:\\.{3}))',
          name: 'keyword.operator.arithmetic.matlab'
        },
        {
          match:
            '(?<=[a-zA-Z0-9\\s])(==|~=|&|&&|\\||\\|\\|)(?=[a-zA-Z0-9\\s]|(?:\\.{3}))',
          name: 'keyword.operator.logical.matlab'
        },
        {
          match: '(?<=[a-zA-Z0-9\\s])(=)(?!=)',
          name: 'keyword.operator.assignment.matlab'
        },
        {
          match:
            '(?<=[a-zA-Z0-9_\\s(){,]|^):(?=[a-zA-Z0-9_\\s()},]|$||(?:\\.{3}))',
          name: 'keyword.operator.vector.colon.matlab'
        },
        {
          match: '(?<=[a-zA-Z0-9\\s])(>|>=|<|<=)(?=[a-zA-Z0-9\\s]|(?:\\.{3}))',
          name: 'keyword.operator.relational.matlab'
        }
      ]
    },
    parentheses: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.parens.begin.matlab'}},
      contentName: 'meta.parens.matlab',
      endCaptures: {0: {name: 'punctuation.section.parens.end.matlab'}},
      patterns: [
        {include: '#end_in_parentheses'},
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    property: {
      match: '(?<=\\.)[a-zA-Z][a-zA-Z0-9_]*(?![a-zA-Z0-9_]|(?:\\(|\\{|\\.\\())',
      name: 'variable.other.property.matlab'
    },
    property_access: {match: '\\.', name: 'punctuation.accessor.dot.matlab'},
    punctuation: {
      patterns: [
        {match: '(?<=\\w)\\.(?!\\()', name: 'punctuation.accessor.dot.matlab'},
        {match: ',', name: 'punctuation.separator.comma.matlab'},
        {match: ';(?=\\s|$)', name: 'punctuation.terminator.semicolon.matlab'}
      ]
    },
    readwrite_operations: {
      captures: {
        0: {
          patterns: [
            {include: '#property'},
            {include: '#readwrite_variable'},
            {include: '#property_access'}
          ]
        }
      },
      match:
        '(?<![a-zA-Z0-9_]|\\.)[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*(?![a-zA-Z0-9_]|(?:\\(|\\{|\\.\\())'
    },
    readwrite_variable: {
      match:
        '(?<![a-zA-Z0-9_]|\\.|\\?)[a-zA-Z][a-zA-Z0-9_]*(?![a-zA-Z0-9_]|(?:\\(|\\{|\\.\\())',
      name: 'variable.other.readwrite.matlab'
    },
    rules_after_command_dual: {
      patterns: [
        {include: '#string'},
        {include: '#line_continuation'},
        {include: '#comments'},
        {include: '#conjugate_transpose'},
        {include: '#transpose'},
        {include: '#constants'},
        {include: '#variables'},
        {include: '#numbers'},
        {include: '#operators'},
        {include: '#punctuation'}
      ]
    },
    rules_before_command_dual: {
      patterns: [
        {include: '#classdef'},
        {include: '#function'},
        {include: '#blocks'},
        {include: '#control_statements'},
        {include: '#global_persistent'},
        {include: '#import'},
        {include: '#superclass_method_call'},
        {include: '#anonymous_function'},
        {include: '#function_call'},
        {include: '#parentheses'},
        {include: '#indexing_curly_brackets'},
        {include: '#indexing_by_expression'},
        {include: '#multiple_assignment'},
        {include: '#single_assignment'},
        {include: '#square_brackets'},
        {include: '#curly_brackets'},
        {include: '#metaclass_literal'}
      ]
    },
    shell_string: {
      captures: {
        1: {name: 'meta.interpolation.shell.matlab'},
        2: {name: 'punctuation.section.interpolation.begin.matlab'},
        3: {
          name: 'source.shell.embedded.matlab',
          patterns: [{include: 'source.shell'}]
        }
      },
      match: '^\\s*((!)(.*)$\\n?)'
    },
    single_assignment: {
      captures: {
        1: {
          name: 'meta.assignment.variable.single.matlab',
          patterns: [
            {include: '#rules_before_command_dual'},
            {include: '#rules_after_command_dual'}
          ]
        }
      },
      match: '(?<=^|,|;|for)\\s*([a-zA-Z][a-zA-Z0-9_.]*)(?=\\s*=)'
    },
    square_brackets: {
      begin: '\\[(?![^\\]]+\\]\\s{,4}=)',
      beginCaptures: {0: {name: 'punctuation.section.brackets.begin.matlab'}},
      contentName: 'meta.brackets.matlab',
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.brackets.end.matlab'}},
      patterns: [
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    string: {
      patterns: [
        {include: '#shell_string'},
        {include: '#string_quoted_single'},
        {include: '#string_quoted_double'}
      ]
    },
    string_quoted_double: {
      begin:
        '((?<=(\\[|\\(|\\{|=|\\s|;|:|,|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^))|^)"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.matlab'}},
      end: '"(?=(\\[|\\(|\\{|\\]|\\)|\\}|=|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^|\\||\\s|;|:|,)|$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.matlab'}},
      name: 'string.quoted.double.matlab',
      patterns: [
        {match: '""', name: 'constant.character.escape.matlab'},
        {match: '"(?=.)', name: 'invalid.illegal.unescaped-quote.matlab'}
      ]
    },
    string_quoted_single: {
      begin:
        "((?<=(\\[|\\(|\\{|=|\\s|;|:|,|~|<|>|&|\\||-|\\+|\\*|/|\\\\|\\.|\\^))|^)'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.matlab'}},
      end: "'(?=(\\[|\\(|\\{|\\]|\\)|\\}|=|~|<|>|&|\\||-|\\+|\\*|/|\\\\|\\.|\\^|\\s|;|:|,)|$)",
      endCaptures: {0: {name: 'punctuation.definition.string.end.matlab'}},
      name: 'string.quoted.single.matlab',
      patterns: [
        {match: "''", name: 'constant.character.escape.matlab'},
        {match: "'(?=.)", name: 'invalid.illegal.unescaped-quote.matlab'},
        {
          match:
            '((\\%([\\+\\-0]?\\d{0,3}(\\.\\d{1,3})?)(c|d|e|E|f|g|i|G|s|((b|t)?(o|u|x|X))))|\\%\\%|\\\\(b|f|n|r|t|\\\\))',
          name: 'constant.character.escape.matlab'
        }
      ]
    },
    superclass_method_call: {
      begin:
        '([a-zA-Z][a-zA-Z0-9_]*)(@)\\s*([a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*)(\\()',
      beginCaptures: {
        1: {
          name: 'entity.name.function.matlab',
          patterns: [{include: '$self'}]
        },
        2: {name: 'punctuation.accessor.scope-resolution.superclass.matlab'},
        3: {
          patterns: [
            {match: '(\\w+)(?=\\s*\\z)', name: 'entity.name.type.class.matlab'},
            {
              captures: {
                1: {name: 'entity.name.module.matlab'},
                2: {name: 'punctuation.accessor.dot.matlab'}
              },
              match: '([a-zA-Z][a-zA-Z0-9_]*)(\\.)'
            },
            {include: '$self'}
          ]
        },
        4: {name: 'punctuation.section.parens.begin.matlab'}
      },
      endCaptures: {0: {name: 'punctuation.section.parens.end.matlab'}},
      name: 'meta.method-call.parens.matlab',
      patterns: [
        {include: '#end_in_parentheses'},
        {include: '#rules_before_command_dual'},
        {include: '#rules_after_command_dual'}
      ]
    },
    transpose: {match: "\\.'", name: 'keyword.operator.transpose.matlab'},
    validator_strings: {
      patterns: [
        {
          patterns: [
            {
              begin:
                "((?<=(\\[|\\(|\\{|=|\\s|;|:|,|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^))|^)'",
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.matlab'}
              },
              end: "'(?=(\\[|\\(|\\{|\\]|\\)|\\}|=|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^|\\s|;|:|,)|$)",
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.matlab'}
              },
              name: 'string.quoted.single.matlab',
              patterns: [{match: "''"}, {match: "'(?=.)"}, {match: "([^']+)"}]
            },
            {
              begin:
                '((?<=(\\[|\\(|\\{|=|\\s|;|:|,|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^))|^)"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.matlab'}
              },
              end: '"(?=(\\[|\\(|\\{|\\]|\\)|\\}|=|~|<|>|&|\\||-|\\+|\\*|\\/|\\\\|\\.|\\^|\\||\\s|;|:|,)|$|\\z)',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.matlab'}
              },
              name: 'string.quoted.double.matlab',
              patterns: [{match: '""'}, {match: '"(?=.)'}, {match: '[^"]+'}]
            }
          ]
        }
      ]
    },
    validators: {
      begin: '\\s*[;]?\\s*([a-zA-Z][a-zA-Z0-9_\\.\\?]*)',
      beginCaptures: {1: {name: 'variable.object.property.matlab'}},
      end: '([;\\n%=].*)',
      endCaptures: {
        1: {
          patterns: [
            {captures: {1: {patterns: [{include: '$self'}]}}, match: '([%].*)'},
            {
              captures: {1: {patterns: [{include: '$self'}]}},
              match: '(=[^;]*)'
            },
            {
              captures: {1: {patterns: [{include: '#validators'}]}},
              match: '([\\n;]\\s*[a-zA-Z].*)'
            },
            {include: '$self'}
          ]
        }
      },
      name: 'meta.assignment.definition.property.matlab',
      patterns: [
        {include: '#line_continuation'},
        {
          captures: {
            1: {name: 'punctuation.section.parens.begin.matlab'},
            2: {
              name: 'meta.parens.size.matlab',
              patterns: [
                {include: '#numbers'},
                {include: '#operators'},
                {include: '#punctuation'}
              ]
            },
            3: {name: 'punctuation.section.parens.end.matlab'}
          },
          match: '\\s*(\\()([^\\)]*)(\\))'
        },
        {match: '[a-zA-Z][a-zA-Z0-9_\\.]*', name: 'storage.type.matlab'},
        {include: '#braced_validator_list'}
      ]
    },
    variables: {
      match: '(?<!\\.)\\b(nargin|nargout|varargin|varargout)\\b',
      name: 'variable.language.function.matlab'
    }
  },
  scopeName: 'source.matlab'
}

export default grammar
