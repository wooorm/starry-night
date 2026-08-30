// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/qsharp>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.qs'],
  names: ['q#', 'qsharp'],
  patterns: [
    {include: '#comments'},
    {include: '#attributes'},
    {include: '#namespace-declaration'},
    {include: '#import-export-directive'},
    {include: '#new-expression'},
    {include: '#struct-declaration'},
    {include: '#member-access'},
    {include: '#tuple-binding'},
    {include: '#keywords'},
    {include: '#library-invocation'},
    {include: '#library'},
    {include: '#operations'},
    {include: '#types'},
    {include: '#literals'},
    {include: '#strings'},
    {include: '#callable-invocation'},
    {include: '#callable-declaration'},
    {include: '#udt-declaration'},
    {include: '#array-creation-expression'},
    {include: '#local-declaration'},
    {include: '#array-assignment'},
    {include: '#local-assignment'},
    {include: '#quantum-declaration'},
    {include: '#if-statement'},
    {include: '#parenthesized-expression'},
    {include: '#expression-operators'},
    {include: '#declaration-keywords'},
    {include: '#identifier'}
  ],
  repository: {
    argument: {patterns: [{include: '#expression'}]},
    'argument-list': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.qsharp'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.qsharp'}},
      patterns: [{include: '#argument'}, {include: '#punctuation-comma'}]
    },
    'array-assignment': {
      begin:
        '(?x)\n\\b(set)\\b\\s*\n([_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?:(=)\\s*([_[:alpha:]][_[:alnum:]]*)\\b\\s*(w\\/)|(w\\/=))',
      beginCaptures: {
        1: {name: 'keyword.other.set.qsharp'},
        2: {name: 'entity.name.variable.local.qsharp'},
        3: {name: 'keyword.operator.assignment.qsharp'},
        4: {name: 'entity.name.variable.local.qsharp'},
        5: {name: 'keyword.operator.assignment.qsharp'},
        6: {name: 'keyword.operator.assignment.qsharp'}
      },
      end: '(?=;|\\)|})',
      patterns: [
        {match: '<-', name: 'keyword.operator.assignment.qsharp'},
        {include: '#expression'}
      ]
    },
    'array-creation-expression': {
      begin: '(?<!\\w)\\[',
      beginCaptures: {0: {name: 'punctuation.squarebracket.open.qsharp'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.squarebracket.close.qsharp'}},
      patterns: [
        {
          begin: '\\b(size)\\s*(?=\\=)',
          beginCaptures: {1: {name: 'keyword.other.size.qsharp'}},
          end: '(?=\\])',
          patterns: [{include: '#expression'}]
        },
        {include: '#argument'},
        {include: '#punctuation-comma'}
      ]
    },
    attributes: {
      patterns: [
        {
          begin: '(@)([_[:alpha:]][_[:alnum:]]*)\\s*(?=\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.attribute.qsharp'},
            2: {name: 'entity.name.function.attribute.qsharp'}
          },
          end: '(?<=\\))',
          patterns: [{include: '#argument-list'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.attribute.qsharp'},
            2: {name: 'entity.name.function.attribute.qsharp'}
          },
          match: '(@)([_[:alpha:]][_[:alnum:]]*)'
        }
      ]
    },
    'boolean-literal': {
      patterns: [
        {
          match: '(?<!\\.)\\btrue\\b',
          name: 'constant.language.boolean.true.qsharp'
        },
        {
          match: '(?<!\\.)\\bfalse\\b',
          name: 'constant.language.boolean.false.qsharp'
        }
      ]
    },
    'callable-declaration': {
      begin:
        '(?x)\n\\b(operation|function)\\b\\s+\n([_[:alpha:]][_[:alnum:]]*)\\s*                      # callable name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s*    # type arguments\n(?=\\()                                              # open parentheses of argument list',
      beginCaptures: {
        1: {name: 'keyword.other.callable.qsharp'},
        2: {name: 'entity.name.function.qsharp'},
        3: {patterns: [{include: '#type-parameter-list'}]}
      },
      end: '(?<=\\))',
      patterns: [{include: '#parameter-list'}]
    },
    'callable-invocation': {
      begin:
        '(?x)\n(?:(\\:\\:|\\.)\\s*)?                                   # preceding member access (:: or .)\n(?!(?:let|mutable|set|use|borrow|new|fixup|for|in|while|repeat|until|return|fail|within|apply|if|elif|else|not|and|or|namespace|import|export|open|operation|function|struct|newtype|internal|is)\\b)\n([_[:alpha:]][_[:alnum:]]*)\\s*                      # callable name (not a keyword)\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s*    # type arguments\n(?=\\()                                              # open parentheses of argument list',
      beginCaptures: {
        1: {name: 'punctuation.accessor.qsharp'},
        2: {name: 'entity.name.function.qsharp'},
        3: {patterns: [{include: '#type-parameter-list'}]}
      },
      end: '(?<=\\))',
      patterns: [{include: '#argument-list'}]
    },
    comments: {
      patterns: [
        {
          begin: '(^\\s+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.qsharp'}
          },
          end: '(?=$)',
          patterns: [
            {
              begin: '(?<!/)///(?!/)',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.qsharp'}
              },
              end: '(?=$)',
              name: 'comment.block.documentation.qsharp'
            },
            {
              begin: '(?<!/)//(?:(?!/))',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.qsharp'}
              },
              end: '(?=$)',
              name: 'comment.line.double-slash.qsharp'
            }
          ]
        }
      ]
    },
    'declaration-keywords': {
      patterns: [
        {
          match: '\\b(operation|function)\\b',
          name: 'keyword.other.callable.qsharp'
        },
        {match: '\\b(let)\\b', name: 'keyword.other.let.qsharp'},
        {match: '\\b(mutable)\\b', name: 'keyword.other.mutable.qsharp'},
        {match: '\\b(set)\\b', name: 'keyword.other.set.qsharp'},
        {match: '\\b(use)\\b', name: 'keyword.other.use.qsharp'},
        {match: '\\b(borrow)\\b', name: 'keyword.other.borrow.qsharp'}
      ]
    },
    expression: {
      patterns: [
        {include: '#comments'},
        {include: '#if-statement'},
        {include: '#new-expression'},
        {include: '#keywords'},
        {include: '#strings'},
        {include: '#member-access'},
        {include: '#library-invocation'},
        {include: '#callable-invocation'},
        {include: '#library'},
        {include: '#types'},
        {include: '#literals'},
        {include: '#parenthesized-expression'},
        {include: '#array-creation-expression'},
        {include: '#expression-operators'},
        {include: '#identifier'}
      ]
    },
    'expression-operators': {
      patterns: [
        {match: '\\b(not|and|or)\\b', name: 'keyword.operator.logical.qsharp'},
        {match: '(->|=>)', name: 'keyword.operator.lambda.qsharp'},
        {
          match:
            '(\\+=|-=|\\*=|/=|%=|\\^=|&&&=|\\|\\|\\|=|\\^\\^\\^=|<<<=|>>>=|\\bw/=)',
          name: 'keyword.operator.assignment.compound.qsharp'
        },
        {match: '(\\bw/|<-)', name: 'keyword.operator.copy-update.qsharp'},
        {
          match: '(?<![=<>!+\\-*/%^&|~])=(?![=>])',
          name: 'keyword.operator.assignment.qsharp'
        },
        {match: '(\\.\\.\\.|\\.\\.)', name: 'keyword.operator.range.qsharp'},
        {
          match: '(&&&|\\|\\|\\||\\^\\^\\^|~~~|<<<|>>>)',
          name: 'keyword.operator.bitwise.qsharp'
        },
        {
          match: '(==|!=|<=|>=|<|>)',
          name: 'keyword.operator.comparison.qsharp'
        },
        {
          match: '(\\+|\\-|\\*|/|%|\\^)',
          name: 'keyword.operator.arithmetic.qsharp'
        },
        {match: '(\\?|\\|)', name: 'keyword.operator.ternary.qsharp'}
      ]
    },
    'field-initializer': {
      begin: '([_[:alpha:]][_[:alnum:]]*)\\s*(=)(?![=>])',
      beginCaptures: {
        1: {name: 'variable.other.property.qsharp'},
        2: {name: 'keyword.operator.assignment.qsharp'}
      },
      end: '(?=(,|\\}))',
      patterns: [{include: '#expression'}]
    },
    identifier: {
      patterns: [
        {
          match: '\\b[_[:alpha:]][_[:alnum:]]*\\b',
          name: 'variable.other.readwrite.qsharp'
        }
      ]
    },
    'if-statement': {
      begin: '(?<!\\.)\\b(if)\\b\\s*(?=\\S)',
      beginCaptures: {1: {name: 'keyword.control.conditional.if.qsharp'}},
      end: '(?<=})(?!\\s*\\b(?:elif|else)\\b)|(?=;)',
      patterns: [
        {
          match: '\\b(elif|else)\\b',
          name: 'keyword.control.conditional.qsharp'
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.qsharp'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.qsharp'}},
          patterns: [{include: '#statements'}]
        },
        {include: '#expression'}
      ]
    },
    'import-export-directive': {
      begin: '\\b(import|export)\\b',
      beginCaptures: {1: {name: 'keyword.other.import.qsharp'}},
      end: '(?=;)|$',
      patterns: [
        {include: '#comments'},
        {
          begin: '\\b(as)\\b\\s*',
          beginCaptures: {1: {name: 'keyword.other.qsharp'}},
          end: '(?=(,|;)|$)',
          patterns: [
            {include: '#comments'},
            {
              match: '[_[:alpha:]][_[:alnum:]]*',
              name: 'entity.name.type.alias.qsharp'
            }
          ]
        },
        {match: '\\*', name: 'keyword.operator.wildcard.qsharp'},
        {
          match: '[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.namespace.qsharp'
        },
        {include: '#punctuation-accessor'},
        {include: '#punctuation-comma'}
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(elif|else|repeat|until|fixup|for|in|while|break|continue|return|fail|within|apply|parallel)\\b',
          name: 'keyword.control.qsharp'
        },
        {match: '\\b(using|borrowing)\\b', name: 'keyword.other.qsharp'},
        {match: '\\b(new)\\b', name: 'keyword.other.qsharp'}
      ]
    },
    library: {
      patterns: [
        {
          match:
            '\\b(CCNOT|CNOT|CX|CY|CZ|SWAP|SX|H|S|T|I|X|Y|Z|Rxx|Ryy|Rzz|Rx|Ry|Rz|R1Frac|R1|RFrac|R|ExpFrac|Exp|MResetEachZ|MResetX|MResetY|MResetZ|MeasureEachZ|MeasureAllZ|Measure|M|ResetAll|Reset)\\b',
          name: 'support.function.quantum.qsharp'
        }
      ]
    },
    'library-invocation': {
      begin:
        '(?x)\n\\b(CCNOT|CNOT|CX|CY|CZ|SWAP|SX|H|S|T|I|X|Y|Z|Rxx|Ryy|Rzz|Rx|Ry|Rz|R1Frac|R1|RFrac|R|ExpFrac|Exp|MResetEachZ|MResetX|MResetY|MResetZ|MeasureEachZ|MeasureAllZ|Measure|M|ResetAll|Reset)\\b\\s*\n(?=\\()',
      beginCaptures: {1: {name: 'support.function.quantum.qsharp'}},
      end: '(?<=\\))',
      patterns: [{include: '#argument-list'}]
    },
    literals: {
      patterns: [
        {include: '#boolean-literal'},
        {include: '#result-literal'},
        {include: '#pauli-literal'},
        {include: '#numeric-literal'}
      ]
    },
    'local-assignment': {
      begin:
        '(?x)\n(?:\\b(set)\\b\\s*)\n([_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?=;|\\+=|-=|=|\\))',
      beginCaptures: {
        1: {name: 'keyword.other.set.qsharp'},
        2: {name: 'entity.name.variable.local.qsharp'}
      },
      end: '(?=;|\\)|})',
      patterns: [{include: '#variable-initializer'}]
    },
    'local-declaration': {
      begin:
        '(?x)\n(?:\\b(?:(let)|(mutable))\\b\\s*)\n([_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?=;|=|\\))',
      beginCaptures: {
        1: {name: 'keyword.other.let.qsharp'},
        2: {name: 'keyword.other.mutable.qsharp'},
        3: {name: 'entity.name.variable.local.qsharp'}
      },
      end: '(?=;|\\)|})',
      patterns: [{include: '#variable-initializer'}]
    },
    'member-access': {
      captures: {
        1: {name: 'punctuation.accessor.qsharp'},
        2: {name: 'variable.other.property.qsharp'}
      },
      match: '(?x)\n(\\.)\\s*\n([_[:alpha:]][_[:alnum:]]*)\\b\n(?!\\s*\\()'
    },
    'namespace-declaration': {
      begin: '\\b(namespace)\\s+',
      beginCaptures: {1: {name: 'keyword.other.namespace.qsharp'}},
      end: '(?<=\\})',
      patterns: [
        {
          match: '[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.type.namespace.qsharp'
        },
        {include: '#punctuation-accessor'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.qsharp'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.qsharp'}},
          patterns: [
            {include: '#comments'},
            {include: '#attributes'},
            {include: '#import-export-directive'},
            {include: '#new-expression'},
            {include: '#struct-declaration'},
            {include: '#member-access'},
            {include: '#tuple-binding'},
            {include: '#keywords'},
            {include: '#library-invocation'},
            {include: '#library'},
            {include: '#operations'},
            {include: '#types'},
            {include: '#literals'},
            {include: '#strings'},
            {include: '#callable-invocation'},
            {include: '#callable-declaration'},
            {include: '#udt-declaration'},
            {include: '#open-directive'},
            {include: '#array-creation-expression'},
            {include: '#local-declaration'},
            {include: '#array-assignment'},
            {include: '#local-assignment'},
            {include: '#quantum-declaration'},
            {include: '#if-statement'},
            {include: '#parenthesized-expression'},
            {include: '#expression-operators'},
            {include: '#declaration-keywords'},
            {include: '#identifier'}
          ]
        }
      ]
    },
    'new-expression': {
      begin: '(?x)\n\\b(new)\\b\\s+\n([_[:alpha:]][_[:alnum:]]*)\\s*\n(?=\\{)',
      beginCaptures: {
        1: {name: 'keyword.other.new.qsharp'},
        2: {name: 'entity.name.type.struct.qsharp'}
      },
      end: '(?<=\\})',
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.qsharp'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.qsharp'}},
          patterns: [
            {include: '#comments'},
            {include: '#spread-operator'},
            {include: '#field-initializer'},
            {include: '#punctuation-comma'},
            {include: '#expression'}
          ]
        }
      ]
    },
    'numeric-literal': {
      patterns: [
        {
          match: '\\b0[xX][0-9a-fA-F][0-9a-fA-F_]*[lL]?\\b',
          name: 'constant.numeric.hexadecimal.qsharp'
        },
        {
          match: '\\b0[bB][01][01_]*[lL]?\\b',
          name: 'constant.numeric.binary.qsharp'
        },
        {
          match: '\\b0[oO][0-7][0-7_]*[lL]?\\b',
          name: 'constant.numeric.octal.qsharp'
        },
        {
          match:
            '(?x)\n\\b\\d[\\d_]* \\. \\d[\\d_]* (?:[eE][+-]?\\d+)?    # 1.0   3.14   1.0e-3\n| \\b\\d[\\d_]* [eE][+-]?\\d+                    # 1e10\n| \\b\\d[\\d_]* [lL]?                           # 42   42L   1_000',
          name: 'constant.numeric.decimal.qsharp'
        }
      ]
    },
    'open-directive': {
      patterns: [
        {
          begin: '\\b(open)\\s*',
          beginCaptures: {1: {name: 'keyword.other.open.qsharp'}},
          end: '(?=;)',
          patterns: [
            {include: '#comments'},
            {
              begin: '\\b(as)\\s+(?<alias>[_[:alpha:]][_[:alnum:]]*)',
              beginCaptures: {
                1: {name: 'keyword.other.alias.qsharp'},
                2: {name: 'entity.name.type.alias.qsharp'}
              },
              end: '(?=;)'
            },
            {
              match: '[_[:alpha:]][_[:alnum:]]*',
              name: 'entity.name.type.namespace.qsharp'
            },
            {include: '#punctuation-accessor'}
          ]
        }
      ]
    },
    operations: {
      patterns: [
        {
          match:
            '\\b(as|internal|body|(a|A)djoint|(c|C)ontrolled|self|auto|distribute|invert|intrinsic|is)\\b',
          name: 'keyword.other.qsharp'
        }
      ]
    },
    parameter: {
      begin: '([_[:alpha:]][_[:alnum:]]*)\\s*(:)',
      beginCaptures: {
        1: {name: 'entity.name.variable.parameter.qsharp'},
        2: {name: 'punctuation.separator.colon.qsharp'}
      },
      end: '(?=(,|\\)|\\]))',
      patterns: [
        {include: '#comments'},
        {include: '#literals'},
        {include: '#types'},
        {include: '#library'},
        {include: '#expression-operators'}
      ]
    },
    'parameter-list': {
      begin: '(\\()',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.qsharp'}},
      end: '(\\))',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.qsharp'}},
      patterns: [
        {include: '#comments'},
        {include: '#parameter'},
        {include: '#punctuation-comma'}
      ]
    },
    'parenthesized-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.qsharp'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.qsharp'}},
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'pauli-literal': {
      patterns: [
        {
          match: '\\b(Pauli(I|X|Y|Z))\\b',
          name: 'constant.language.pauli.qsharp'
        }
      ]
    },
    'punctuation-accessor': {match: '\\.', name: 'punctuation.accessor.qsharp'},
    'punctuation-comma': {
      match: ',',
      name: 'punctuation.separator.comma.qsharp'
    },
    'quantum-declaration': {
      begin:
        '(?x)\n(?:\\b(?:(use)|(borrow))\\b\\s*)\n([_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?=;|=|\\))',
      beginCaptures: {
        1: {name: 'keyword.other.use.qsharp'},
        2: {name: 'keyword.other.borrow.qsharp'},
        3: {name: 'entity.name.variable.local.qsharp'}
      },
      end: '(?=;|\\)|})',
      patterns: [{include: '#quantum-initializer'}]
    },
    'quantum-initializer': {
      begin: '(?<!=|!)(=)(?!=|>)',
      beginCaptures: {1: {name: 'keyword.operator.assignment.qsharp'}},
      end: '(?=[,\\)\\];}])',
      patterns: [{include: '#expression'}]
    },
    'result-literal': {
      patterns: [
        {
          match: '(?<!\\.)\\bZero\\b',
          name: 'constant.language.result.zero.qsharp'
        },
        {
          match: '(?<!\\.)\\bOne\\b',
          name: 'constant.language.result.one.qsharp'
        }
      ]
    },
    'spread-operator': {
      match: '\\.\\.\\.',
      name: 'keyword.operator.spread.qsharp'
    },
    statements: {
      patterns: [
        {include: '#comments'},
        {include: '#attributes'},
        {include: '#import-export-directive'},
        {include: '#open-directive'},
        {include: '#new-expression'},
        {include: '#struct-declaration'},
        {include: '#member-access'},
        {include: '#tuple-binding'},
        {include: '#keywords'},
        {include: '#library-invocation'},
        {include: '#library'},
        {include: '#operations'},
        {include: '#types'},
        {include: '#literals'},
        {include: '#strings'},
        {include: '#callable-invocation'},
        {include: '#callable-declaration'},
        {include: '#udt-declaration'},
        {include: '#array-creation-expression'},
        {include: '#local-declaration'},
        {include: '#array-assignment'},
        {include: '#local-assignment'},
        {include: '#quantum-declaration'},
        {include: '#if-statement'},
        {include: '#parenthesized-expression'},
        {include: '#expression-operators'},
        {include: '#declaration-keywords'},
        {include: '#identifier'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '\\$"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.qsharp'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.qsharp'}},
          name: 'string.quoted.double.interpolated.qsharp',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.qsharp'},
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'punctuation.section.interpolation.begin.qsharp'}
              },
              end: '\\}',
              endCaptures: {
                0: {name: 'punctuation.section.interpolation.end.qsharp'}
              },
              name: 'meta.interpolation.qsharp',
              patterns: [{include: '#expression'}]
            }
          ]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.qsharp',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.qsharp'}]
        }
      ]
    },
    'struct-declaration': {
      begin: '(?x)\n\\b(struct)\\b\\s+\n([_[:alpha:]][_[:alnum:]]*)',
      beginCaptures: {
        1: {name: 'keyword.other.struct.qsharp'},
        2: {name: 'entity.name.type.struct.qsharp'}
      },
      end: '(?<=\\})',
      patterns: [
        {include: '#comments'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.qsharp'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.qsharp'}},
          patterns: [
            {include: '#comments'},
            {include: '#struct-field'},
            {include: '#punctuation-comma'},
            {include: '#types'},
            {include: '#library'}
          ]
        }
      ]
    },
    'struct-field': {
      begin: '([_[:alpha:]][_[:alnum:]]*)\\s*(:)',
      beginCaptures: {
        1: {name: 'variable.other.property.qsharp'},
        2: {name: 'punctuation.separator.colon.qsharp'}
      },
      end: '(?=(,|\\}))',
      patterns: [
        {include: '#comments'},
        {include: '#type-parameter'},
        {include: '#types'},
        {include: '#library'}
      ]
    },
    'tuple-binding': {
      begin:
        '(?x)\n\\b(?:(let)|(mutable)|(set)|(use)|(borrow))\\b\\s*\n(?=\\()',
      beginCaptures: {
        1: {name: 'keyword.other.let.qsharp'},
        2: {name: 'keyword.other.mutable.qsharp'},
        3: {name: 'keyword.other.set.qsharp'},
        4: {name: 'keyword.other.use.qsharp'},
        5: {name: 'keyword.other.borrow.qsharp'}
      },
      end: '(?=;|\\bin\\b)',
      patterns: [
        {include: '#tuple-pattern'},
        {include: '#variable-initializer'},
        {include: '#expression'}
      ]
    },
    'tuple-pattern': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.qsharp'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.qsharp'}},
      patterns: [
        {include: '#comments'},
        {include: '#tuple-pattern'},
        {
          match: '\\b[_[:alpha:]][_[:alnum:]]*\\b',
          name: 'entity.name.variable.local.qsharp'
        },
        {include: '#punctuation-comma'}
      ]
    },
    'type-array-suffix': {
      begin: '\\b\\[',
      beginCaptures: {0: {name: 'punctuation.squarebracket.open.qsharp'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.squarebracket.close.qsharp'}},
      patterns: [{include: '#punctuation-comma'}, {include: '#expression'}]
    },
    'type-parameter': {
      match: "'[_[:alpha:]][_[:alnum:]]*",
      name: 'entity.name.type.type-parameter.qsharp'
    },
    'type-parameter-list': {
      begin: '\\<',
      beginCaptures: {
        0: {name: 'punctuation.definition.typeparameters.begin.qsharp'}
      },
      end: '\\>',
      endCaptures: {
        0: {name: 'punctuation.definition.typeparameters.end.qsharp'}
      },
      patterns: [
        {include: '#comments'},
        {
          captures: {1: {name: 'entity.name.type.type-parameter.qsharp'}},
          match: "('[_[:alpha:]][_[:alnum:]]*)\\b"
        },
        {match: ':', name: 'punctuation.separator.colon.qsharp'},
        {match: '\\+', name: 'keyword.operator.qsharp'},
        {
          match:
            '\\b(Eq|Add|Sub|Mul|Div|Mod|Signed|Ord|Show|Integral|Iterable|Exp)\\b',
          name: 'support.type.constraint.qsharp'
        },
        {match: '\\[', name: 'punctuation.squarebracket.open.qsharp'},
        {match: '\\]', name: 'punctuation.squarebracket.close.qsharp'},
        {include: '#punctuation-comma'}
      ]
    },
    types: {
      patterns: [
        {include: '#type-parameter'},
        {
          match:
            '\\b(Int|BigInt|Double|Bool|Qubit|Pauli|Result|Range|String|Unit|Ctl|Adj)\\b',
          name: 'storage.type.qsharp'
        },
        {include: '#type-array-suffix'}
      ]
    },
    'udt-declaration': {
      begin: '(?=\\bnewtype\\b)',
      end: '(?<=\\)|;)',
      patterns: [
        {
          begin: '(?x)\n(newtype)\\b\\s+\n([_[:alpha:]][_[:alnum:]]*)',
          beginCaptures: {
            1: {name: 'keyword.other.udt.qsharp'},
            2: {name: 'entity.name.type.udt.qsharp'}
          },
          end: '(?=\\s*=)'
        },
        {
          begin: '(?:\\s*=\\s*)(\\()',
          beginCaptures: {1: {name: 'punctuation.parenthesis.open.qsharp'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.qsharp'}},
          patterns: [
            {include: '#comments'},
            {include: '#literals'},
            {include: '#punctuation-comma'},
            {include: '#types'},
            {include: '#library'}
          ]
        },
        {
          begin: '(?:\\s*=\\s*)',
          end: '(?=;)',
          patterns: [
            {include: '#comments'},
            {include: '#literals'},
            {include: '#punctuation-comma'},
            {include: '#types'},
            {include: '#library'}
          ]
        }
      ]
    },
    'variable-initializer': {
      begin: '(?<!=|!)(?:(\\+=)|(-=)|(=)|(<-))(?!=|>)',
      beginCaptures: {
        1: {name: 'keyword.operator.assignment.increment.qsharp'},
        2: {name: 'keyword.operator.assignment.decrement.qsharp'},
        3: {name: 'keyword.operator.assignment.qsharp'}
      },
      end: '(?=[,\\)\\];}])',
      patterns: [{include: '#expression'}]
    }
  },
  scopeName: 'source.qsharp'
}

export default grammar
