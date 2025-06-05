// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/moleium/daslang-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.das'],
  names: ['daslang'],
  patterns: [
    {include: '#comments'},
    {include: '#annotations'},
    {include: '#struct_declaration'},
    {include: '#function'},
    {include: '#variable_declaration'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#literals'},
    {include: '#builtin_types'},
    {include: '#builtin_functions_call'},
    {include: '#function_call'},
    {include: '#member_access'},
    {include: '#operators'},
    {include: '#identifiers'}
  ],
  repository: {
    annotations: {
      patterns: [
        {
          begin:
            '((?<!\\[)\\[(?!\\[))\\s*([[:alpha:]_][[:alnum:]_]+)\\s*(\\()?',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.annotation.begin.bracket.square.daslang'
            },
            2: {name: 'storage.type.annotation.daslang'},
            3: {
              name: 'punctuation.definition.annotation-arguments.begin.bracket.round.daslang'
            }
          },
          end: '(\\))?(\\])',
          endCaptures: {
            1: {
              name: 'punctuation.definition.annotation-arguments.end.bracket.round.daslang'
            },
            2: {
              name: 'punctuation.definition.annotation.end.bracket.square.daslang'
            }
          },
          name: 'meta.declaration.annotation.daslang',
          patterns: [
            {
              captures: {
                0: {name: 'keyword.operator.assignment.daslang'},
                1: {name: 'constant.other.annotation-key.daslang'}
              },
              match: '\\b([[:alpha:]_][[:alnum:]_]*)\\b\\s*='
            },
            {include: '#strings'},
            {include: '#literals'},
            {match: ',', name: 'punctuation.separator.arguments.daslang'}
          ]
        }
      ]
    },
    blocks: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.block.begin.daslang'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.end.daslang'}},
          name: 'meta.block.curly.daslang',
          patterns: [
            {include: '$self'},
            {match: ';', name: 'punctuation.terminator.statement.daslang'}
          ]
        }
      ]
    },
    builtin_functions_call: {
      begin:
        '\\b(print|terminate|stackwalk|breakpoint|assert|verify|static_assert|concept_assert|debug|memzero|invoke|push|push_clone|emplace|reserve|resize|erase|length|clear|capacity|key_exists|get|find|find_index|find_index_if|empty|keys|values|to_table_move|to_array_move|subarray)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.builtin.daslang'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.daslang'}},
      name: 'meta.function-call.builtin.daslang',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.arguments.begin.daslang'}
          },
          contentName: 'meta.function.arguments.daslang',
          end: '(?=\\))',
          patterns: [{include: '#function_arguments'}]
        }
      ]
    },
    builtin_types: {
      match:
        '\\b(bool|void|string|das_string|auto|int|int2|int3|int4|uint|bitfield|uint2|uint3|uint4|float|float2|float3|float4|range|urange|block|int64|uint64|double|function|lambda|int8|uint8|int16|uint16|tuple|variant|iterator|generator|yield|fixed_array|table|array|option|Type)\\b',
      name: 'support.type.builtin.daslang'
    },
    comments: {
      patterns: [
        {
          begin: '//',
          end: '(?=\\n)',
          name: 'comment.line.double-slash.daslang',
          patterns: [
            {
              match: '\\\\(?=\\n)',
              name: 'constant.character.escape.line-continuation.daslang'
            }
          ]
        },
        {begin: '/\\*', end: '\\*/', name: 'comment.block.daslang'}
      ]
    },
    expression: {
      patterns: [
        {include: '#strings'},
        {include: '#literals'},
        {include: '#builtin_functions_call'},
        {include: '#function_call'},
        {include: '#member_access'},
        {include: '#operators'},
        {include: '#variable_access'},
        {include: '#initializers'},
        {include: '#blocks'},
        {
          match: '\\b([[:alpha:]_][[:alnum:]_:]*)\\b',
          name: 'variable.other.daslang'
        }
      ]
    },
    function: {
      patterns: [
        {
          begin:
            '\\b(def)\\b\\s*((?:private|public|abstract|override|static)\\s+)?([[:alpha:]_][[:alnum:]_:]*)\\s*(\\()',
          beginCaptures: {
            1: {name: 'storage.type.function.daslang'},
            2: {name: 'storage.modifier.daslang'},
            3: {name: 'entity.name.function.daslang'},
            4: {name: 'punctuation.definition.parameters.begin.daslang'}
          },
          end: '(\\{|\\n(?![[:space:]]))',
          endCaptures: {
            1: {name: 'punctuation.definition.block.begin.daslang'}
          },
          name: 'meta.function.declaration.daslang',
          patterns: [
            {
              begin: '(?=\\))',
              end: '(?=\\s*[:\\{]|\\s*=>|\\s*\\n(?![[:space:]]))',
              patterns: [
                {
                  begin: '\\(',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.parameters.begin.daslang'}
                  },
                  end: '\\)',
                  endCaptures: {
                    0: {name: 'punctuation.definition.parameters.end.daslang'}
                  },
                  name: 'meta.function.parameters.daslang',
                  patterns: [
                    {
                      begin: '\\b(var|let)\\b',
                      beginCaptures: {0: {name: 'storage.modifier.daslang'}},
                      end: '(?=,|;|\\))',
                      patterns: [
                        {
                          match: '\\b([[:alpha:]_][[:alnum:]_]*)\\b',
                          name: 'variable.parameter.function.daslang'
                        },
                        {
                          match: ':',
                          name: 'punctuation.separator.annotation.daslang'
                        },
                        {include: '#builtin_types'},
                        {include: '#user_defined_types'},
                        {include: '#expression'}
                      ]
                    },
                    {
                      match: '\\b([[:alpha:]_][[:alnum:]_]*)\\b',
                      name: 'variable.parameter.function.daslang'
                    },
                    {
                      match: ':',
                      name: 'punctuation.separator.annotation.daslang'
                    },
                    {include: '#builtin_types'},
                    {include: '#user_defined_types'},
                    {include: '#expression'},
                    {
                      match: ',|;',
                      name: 'punctuation.separator.parameters.daslang'
                    }
                  ]
                },
                {match: ':', name: 'punctuation.separator.return-type.daslang'},
                {include: '#builtin_types'},
                {include: '#user_defined_types'}
              ]
            },
            {include: '#annotations'}
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.block.begin.daslang'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.end.daslang'}},
          name: 'meta.block.curly.daslang',
          patterns: [
            {include: '$self'},
            {match: ';', name: 'punctuation.terminator.statement.daslang'}
          ]
        },
        {
          begin: '\\n(?=\\s)',
          end: '(?=\\n[^\\s])|\\s*$',
          name: 'meta.block.pythonic.daslang',
          patterns: [{include: '$self'}]
        },
        {
          begin: '@',
          beginCaptures: {0: {name: 'keyword.operator.lambda-decl.daslang'}},
          end: '(?=;|$)',
          name: 'meta.lambda-expression.daslang',
          patterns: [
            {
              begin: '<\\|',
              beginCaptures: {0: {name: 'keyword.operator.pipe.daslang'}},
              end: '(?=\\n|\\s*$)',
              patterns: [
                {
                  begin: '\\(',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.parameters.begin.daslang'}
                  },
                  end: '\\)',
                  endCaptures: {
                    0: {name: 'punctuation.definition.parameters.end.daslang'}
                  },
                  patterns: [{include: '#function_arguments'}]
                },
                {
                  begin: '(?=\\{|=>|\\n)',
                  end: '(?=\\n[^\\s])|\\s*$',
                  patterns: [{include: '#expression'}, {include: '#blocks'}]
                }
              ]
            }
          ]
        },
        {
          begin: '%([[:alpha:]_][[:alnum:]_]*)~',
          beginCaptures: {
            0: {name: 'keyword.operator.reader-macro.daslang'},
            1: {name: 'entity.name.function.reader-macro.daslang'}
          },
          end: '([[:alpha:]_][[:alnum:]_]*)%',
          endCaptures: {
            0: {name: 'keyword.operator.reader-macro-terminator.daslang'},
            1: {name: 'entity.name.function.reader-macro.daslang'}
          },
          name: 'meta.reader-macro.daslang',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\$',
          beginCaptures: {0: {name: 'keyword.operator.block-decl.daslang'}},
          end: '(?=;|$)',
          name: 'meta.block-expression.daslang',
          patterns: [
            {
              begin: '<\\|',
              beginCaptures: {0: {name: 'keyword.operator.pipe.daslang'}},
              end: '(?=\\n|\\s*$)',
              patterns: [
                {
                  begin: '\\(',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.parameters.begin.daslang'}
                  },
                  end: '\\)',
                  endCaptures: {
                    0: {name: 'punctuation.definition.parameters.end.daslang'}
                  },
                  patterns: [{include: '#function_arguments'}]
                },
                {
                  begin: '(?=\\{|=>|\\n)',
                  end: '(?=\\n[^\\s])|\\s*$',
                  patterns: [{include: '#expression'}, {include: '#blocks'}]
                }
              ]
            }
          ]
        }
      ]
    },
    function_arguments: {
      patterns: [
        {
          match: '\\b([[:alpha:]_][[:alnum:]_]*)\\b(?=\\s*=)',
          name: 'variable.parameter.function.daslang'
        },
        {include: '#expression'},
        {match: ',|;', name: 'punctuation.separator.arguments.daslang'}
      ]
    },
    function_call: {
      begin:
        '(?<!\\.)\\b([[:alpha:]_][[:alnum:]_\\:]*)\\b\\s*(?=\\()|(?<=\\)|\\])\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.daslang'},
        2: {name: 'punctuation.definition.arguments.begin.daslang'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.daslang'}},
      name: 'meta.function-call.daslang',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.arguments.begin.daslang'}
          },
          contentName: 'meta.function.arguments.daslang',
          end: '(?=\\))',
          patterns: [{include: '#function_arguments'}]
        }
      ]
    },
    identifiers: {
      patterns: [
        {
          match: '\\b([_A-Za-z][A-Za-z0-9_]*)\\b',
          name: 'variable.other.daslang'
        }
      ]
    },
    initializers: {
      patterns: [
        {
          begin: '\\[\\[',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.array.begin.double-bracket.daslang'
            }
          },
          end: '\\]\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.array.end.double-bracket.daslang'}
          },
          name: 'meta.initializer.array.fixed.daslang',
          patterns: [{include: '#initializers_content'}]
        },
        {
          begin: '\\[\\{',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.array.begin.bracket-curly.daslang'
            }
          },
          end: '\\}\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.array.end.bracket-curly.daslang'}
          },
          name: 'meta.initializer.array.dynamic.daslang',
          patterns: [{include: '#initializers_content'}]
        },
        {
          begin: '\\{\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.table.begin.double-curly.daslang'}
          },
          end: '\\}\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.table.end.double-curly.daslang'}
          },
          name: 'meta.initializer.table.daslang',
          patterns: [{include: '#initializers_content'}]
        }
      ]
    },
    initializers_content: {
      patterns: [
        {include: '#builtin_types'},
        {include: '#user_defined_types'},
        {include: '#operators'},
        {include: '#strings'},
        {include: '#literals'},
        {include: '#expression'},
        {
          captures: {
            0: {name: 'keyword.operator.assignment.daslang'},
            1: {name: 'variable.other.field.daslang'}
          },
          match: '\\b([[:alpha:]_][[:alnum:]_]*)\\b\\s*='
        },
        {match: ';', name: 'punctuation.separator.statement.daslang'},
        {match: ',', name: 'punctuation.separator.element.daslang'},
        {match: '\\.\\.\\.', name: 'keyword.operator.ellipsis.daslang'},
        {match: '\\s*=>\\s*', name: 'keyword.operator.map.daslang'},
        {
          match: '\\b(where|for|in)\\b',
          name: 'keyword.control.comprehension.daslang'
        },
        {match: '\\|\\|', name: 'keyword.operator.or.daslang'},
        {
          match: '\\b(struct|class|tuple|variant|enum|bitfield)\\b',
          name: 'storage.type.declaration.daslang'
        },
        {include: '#variable_declaration'},
        {
          match: '\\b(typeinfo|type|auto)\\b',
          name: 'keyword.other.type-query.daslang'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(if|else|elif|while|for|break|continue|return|yield|try|recover|panic|finally|in|is|as)\\b',
          name: 'keyword.control.daslang'
        },
        {
          match: '\\b(operator)\\b',
          name: 'keyword.control.operator-overload.daslang'
        },
        {
          match: '\\b(struct|class|enum|variant|tuple|bitfield|typedef|def)\\b',
          name: 'storage.type.declaration.daslang'
        },
        {
          match:
            '\\b(let|var|static|public|private|shared|inscope|explicit|implicit|abstract|override|sealed|const)\\b',
          name: 'storage.modifier.daslang'
        },
        {
          match:
            '\\b(new|typeinfo|type|addr|deref|reinterpret|assume|with|cast|pass|goto|label|aka)\\b',
          name: 'keyword.other.daslang'
        },
        {match: '\\b(options)\\b', name: 'keyword.control.options.daslang'},
        {match: '\\b(require)\\b', name: 'keyword.control.module.daslang'},
        {match: '\\b(module)\\b', name: 'keyword.declaration.module.daslang'},
        {
          match: '\\b(match|match_expr|static_match|multi_match|match_type)\\b',
          name: 'keyword.control.pattern-matching.daslang'
        }
      ]
    },
    literals: {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.daslang'},
        {match: "'[[:print:]]'", name: 'constant.character.daslang'},
        {
          match: '\\b0x[\\dA-Fa-f]+u\\b',
          name: 'constant.numeric.integer.hexadecimal.unsigned.daslang'
        },
        {
          match: '\\b0x[\\dA-Fa-f]+L\\b',
          name: 'constant.numeric.integer.hexadecimal.long.daslang'
        },
        {
          match: '\\b0x[\\dA-Fa-f]+\\b',
          name: 'constant.numeric.integer.hexadecimal.daslang'
        },
        {
          match: '\\b0[0-7]+u\\b',
          name: 'constant.numeric.integer.octal.unsigned.daslang'
        },
        {
          match: '\\b0[0-7]+L\\b',
          name: 'constant.numeric.integer.octal.long.daslang'
        },
        {
          match: '\\b0[0-7]+\\b',
          name: 'constant.numeric.integer.octal.daslang'
        },
        {
          match: '\\b\\d+u\\b',
          name: 'constant.numeric.integer.decimal.unsigned.daslang'
        },
        {
          match: '\\b\\d+L\\b',
          name: 'constant.numeric.integer.decimal.long.daslang'
        },
        {
          match: '\\b\\d+\\.\\d*([eE][\\+\\-]?\\d+)?d\\b',
          name: 'constant.numeric.float.double.daslang'
        },
        {
          match: '\\b\\d+([eE][\\+\\-]?\\d+)?d\\b',
          name: 'constant.numeric.float.double.daslang'
        },
        {
          match: '\\b\\.\\d+([eE][\\+\\-]?\\d+)?d\\b',
          name: 'constant.numeric.float.double.daslang'
        },
        {
          match: '\\b\\d+\\.\\d*([eE][\\+\\-]?\\d+)?f\\b',
          name: 'constant.numeric.float.daslang'
        },
        {
          match: '\\b\\d+([eE][\\+\\-]?\\d+)?f\\b',
          name: 'constant.numeric.float.daslang'
        },
        {
          match: '\\b\\.\\d+([eE][\\+\\-]?\\d+)?f\\b',
          name: 'constant.numeric.float.daslang'
        },
        {
          match: '\\b\\d+\\.\\d*([eE][\\+\\-]?\\d+)?\\b',
          name: 'constant.numeric.float.daslang'
        },
        {match: '\\b\\d+\\b', name: 'constant.numeric.integer.decimal.daslang'}
      ]
    },
    member_access: {
      patterns: [
        {
          match: '\\.(?=[[:alpha:]_])',
          name: 'punctuation.separator.member.daslang'
        },
        {
          match: '\\?\\.(?=[[:alpha:]_])',
          name: 'punctuation.separator.safe-member.daslang'
        },
        {
          match: '\\.\\.(?=[[:alpha:]_])',
          name: 'punctuation.separator.direct-member.daslang'
        },
        {match: '->', name: 'punctuation.separator.pointer-member.daslang'},
        {match: '::', name: 'punctuation.separator.scope.daslang'}
      ]
    },
    operators: {
      patterns: [
        {
          match: '(\\+\\+|\\-\\-)',
          name: 'keyword.operator.arithmetic.increment-decrement.daslang'
        },
        {match: '(\\+|-|\\*|/|%)', name: 'keyword.operator.arithmetic.daslang'},
        {
          match: '(&&|\\|\\||\\^\\^|!)',
          name: 'keyword.operator.logical.daslang'
        },
        {
          match: '(&|\\||\\^|~|<<|>>|<<<|>>>)',
          name: 'keyword.operator.bitwise.daslang'
        },
        {
          match: '(==|!=|<|<=|>|>=)',
          name: 'keyword.operator.comparison.daslang'
        },
        {
          match:
            '(=|:=|<-|\\+=|\\-=|\\*=|/=|%=|&=|\\|=|^=|<<=|>>=|<<<=|>>>=|&&=|\\|\\|=|\\^\\^=)',
          name: 'keyword.operator.assignment.daslang'
        },
        {match: '(\\.\\.)', name: 'keyword.operator.range.daslang'},
        {match: '(\\?\\?)', name: 'keyword.operator.null-coalescing.daslang'},
        {match: '(\\?:)', name: 'keyword.operator.conditional.daslang'},
        {match: '(<\\||\\|>)', name: 'keyword.operator.pipe.daslang'},
        {match: '@\\s*<\\|', name: 'keyword.operator.lambda-decl.daslang'},
        {match: '\\$', name: 'keyword.operator.block-decl.daslang'},
        {match: '%', name: 'keyword.operator.reader-macro.daslang'},
        {match: '=', name: 'keyword.operator.assignment.daslang'},
        {
          match: '\\s*=>\\s*',
          name: 'keyword.operator.lambda-expression.daslang'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.daslang',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.daslang'},
            {
              begin: '\\{',
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.string.interpolation.begin.daslang'
                }
              },
              end: '\\}',
              endCaptures: {
                0: {
                  name: 'punctuation.definition.string.interpolation.end.daslang'
                }
              },
              patterns: [{include: '$self'}]
            }
          ]
        },
        {
          begin: '@"',
          end: '"',
          name: 'string.quoted.verbatim.daslang',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.daslang'}
          ]
        }
      ]
    },
    struct_declaration: {
      patterns: [
        {
          begin:
            '\\b(struct|class)\\b\\s*((?:private|public|sealed)\\s+)?([[:alpha:]_][[:alnum:]_]*)(?:\\s*:\\s*([[:alpha:]_][[:alnum:]_:]*))?\\s*(\\{)?',
          beginCaptures: {
            1: {name: 'storage.type.class.daslang'},
            2: {name: 'storage.modifier.daslang'},
            3: {name: 'entity.name.type.class.daslang'},
            4: {name: 'entity.other.inherited-class.daslang'},
            5: {name: 'punctuation.definition.block.begin.daslang'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.end.daslang'}},
          name: 'meta.struct.declaration.daslang',
          patterns: [
            {include: '#variable_declaration'},
            {include: '#function'},
            {include: '#comments'},
            {include: '#annotations'},
            {match: ';', name: 'punctuation.terminator.statement.daslang'}
          ]
        }
      ]
    },
    user_defined_types: {
      match: '\\b([[:alpha:]_][[:alnum:]_:]*)\\b',
      name: 'entity.name.type.daslang'
    },
    variable_access: {
      patterns: [
        {
          match: '\\b([[:alpha:]_][[:alnum:]_:]*)\\b',
          name: 'variable.other.daslang'
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.array.begin.daslang'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.definition.array.end.daslang'}},
          patterns: [{include: '#expression'}]
        }
      ]
    },
    variable_declaration: {
      patterns: [
        {
          begin:
            '\\b(let|var)\\b\\s*((?:private|public|shared|inscope)\\s+)?([[:alpha:]_][[:alnum:]_]*)(?=\\s*[:=<-]|\\s*\\[\\[|\\s*\\[\\{|\\s*\\{\\{|\\s*\\n(?![[:space:]]))',
          beginCaptures: {
            1: {name: 'storage.type.daslang'},
            2: {name: 'storage.modifier.daslang'},
            3: {name: 'entity.name.variable.daslang'}
          },
          end: '(?=;|$)',
          name: 'meta.variable.declaration.daslang',
          patterns: [
            {match: ':', name: 'punctuation.separator.type-annotation.daslang'},
            {include: '#builtin_types'},
            {include: '#user_defined_types'},
            {include: '#initializers'},
            {include: '#expression'},
            {include: '#blocks'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.daslang'
}

export default grammar
