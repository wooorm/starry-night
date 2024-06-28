// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['monkey-c'],
  patterns: [{include: '#statements'}],
  repository: {
    'access-modifier': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\b(hidden|static)\\b(?!\\$)',
          name: 'storage.modifier.mc'
        }
      ]
    },
    'after-operator-block': {
      begin:
        '(?<=[=(,\\[?+!]|return|throw|in|of|typeof|&&|\\|\\||\\*)\\s*(\\{)',
      beginCaptures: {1: {name: 'punctuation.definition.block.mc'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      name: 'meta.objectliteral.mc',
      patterns: [{include: '#object-member'}]
    },
    'array-literal': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.mc'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.mc'}},
      name: 'meta.array.literal.mc',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'boolean-literal': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\btrue\\b(?!\\$)',
          name: 'constant.language.boolean.true.mc'
        },
        {
          match: '(?<!\\.|\\$)\\bfalse\\b(?!\\$)',
          name: 'constant.language.boolean.false.mc'
        }
      ]
    },
    'case-clause': {
      begin: '(?<!\\.|\\$)\\b(case|default(?=:))\\b(?!\\$)',
      beginCaptures: {1: {name: 'keyword.control.switch.mc'}},
      end: ':',
      endCaptures: {
        0: {name: 'punctuation.definition.section.case-statement.mc'}
      },
      name: 'case-clause.expr.mc',
      patterns: [{include: '#expression'}]
    },
    'class-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#decorator'},
        {include: '#method-declaration'},
        {include: '#enum-declaration'},
        {include: '#field-declaration'},
        {include: '#access-modifier'},
        {include: '#after-operator-block'},
        {include: '#decl-block'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'class-declaration': {
      begin: '(?<!\\.|\\$)\\b(?:(class))\\b',
      beginCaptures: {1: {name: 'storage.type.class.mc'}},
      end: '(?<=\\})',
      endCaptures: {1: {name: 'punctuation.definition.block.mc'}},
      name: 'meta.class.mc',
      patterns: [
        {include: '#comment'},
        {include: '#class-heritage'},
        {
          captures: {0: {name: 'entity.name.type.class.mc'}},
          match: '[_$[:alpha:]][_$[:alnum:]]*'
        },
        {include: '#class-body'}
      ]
    },
    'class-heritage': {
      begin: '(?<!\\.|\\$)(?:\\b(extends)\\b)(?!\\$)',
      beginCaptures: {1: {name: 'storage.modifier.mc'}},
      end: '(?=\\{)',
      endCaptures: {1: {name: 'punctuation.definition.block.mc'}},
      patterns: [
        {include: '#comment'},
        {include: '#class-heritage'},
        {
          captures: {
            1: {name: 'entity.name.type.module.mc'},
            2: {name: 'punctuation.accessor.mc'}
          },
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*([,<{]|extends|//|/\\*))'
        },
        {
          captures: {1: {name: 'entity.other.inherited-class.mc'}},
          match: '([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*([,<{]|extends|//|/\\*))'
        },
        {include: '#expression'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*\\*(?!/)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.mc'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.mc'}},
          name: 'comment.block.documentation.mc'
        },
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.mc'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.mc'}},
          name: 'comment.block.mc'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.mc'}
          },
          end: '(?=$)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.mc'}},
              end: '(?=$)',
              name: 'comment.line.double-slash.mc'
            }
          ]
        }
      ]
    },
    'control-statement': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\b(catch|finally|throw|try)\\b(?!\\$)',
          name: 'keyword.control.trycatch.mc'
        },
        {
          match: '(?<!\\.|\\$)\\b(break|continue|do|while)\\b(?!\\$)',
          name: 'keyword.control.loop.mc'
        },
        {
          match: '(?<!\\.|\\$)\\b(return)\\b(?!\\$)',
          name: 'keyword.control.flow.mc'
        },
        {
          match: '(?<!\\.|\\$)\\b(case|default|switch)\\b(?!\\$)',
          name: 'keyword.control.switch.mc'
        },
        {
          match: '(?<!\\.|\\$)\\b(else|if)\\b(?!\\$)',
          name: 'keyword.control.conditional.mc'
        }
      ]
    },
    'decl-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      name: 'meta.block.mc',
      patterns: [{include: '#statements'}]
    },
    declaration: {
      name: 'meta.declaration.mc',
      patterns: [
        {include: '#decorator'},
        {include: '#var-expr'},
        {include: '#function-declaration'},
        {include: '#class-declaration'},
        {include: '#enum-declaration'},
        {include: '#namespace-declaration'},
        {include: '#import-declaration'}
      ]
    },
    decorator: {
      name: 'meta.decorator.mc',
      patterns: [
        {
          captures: {0: {name: 'storage.type.decorator.mc'}},
          match: '(?<!\\.|\\$)(\\(:([_$[:alpha:]][_$[:alnum:]]*)\\))'
        }
      ]
    },
    'enum-declaration': {
      begin: '(?<!\\.|\\$)\\b(enum)\\b',
      beginCaptures: {1: {name: 'storage.type.enum.mc'}},
      end: '(?<=\\})',
      name: 'meta.enum.declaration.mc',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.definition.block.mc'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
          patterns: [
            {include: '#comment'},
            {
              begin: '([_$[:alpha:]][_$[:alnum:]]*)',
              beginCaptures: {0: {name: 'variable.other.enummember.mc'}},
              end: '(?=,|\\}|$)',
              patterns: [
                {include: '#comment'},
                {include: '#variable-initializer'}
              ]
            },
            {
              begin:
                '(?=((\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))',
              end: '(?=,|\\}|$)',
              patterns: [
                {include: '#string'},
                {include: '#array-literal'},
                {include: '#comment'},
                {include: '#variable-initializer'}
              ]
            },
            {include: '#punctuation-comma'}
          ]
        }
      ]
    },
    expression: {
      name: 'meta.expression.mc',
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#literal'},
        {include: '#function-declaration'},
        {include: '#class-declaration'},
        {include: '#ternary-expression'},
        {include: '#new-expr'},
        {include: '#object-literal'},
        {include: '#expression-operators'},
        {include: '#function-call'},
        {include: '#support-objects'},
        {include: '#identifiers'},
        {include: '#paren-expression'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-accessor'}
      ]
    },
    'expression-operators': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\binstanceof\\b(?!\\$)',
          name: 'keyword.operator.expression.instanceof.mc'
        },
        {
          match: '(?<!\\.|\\$)\\bhas\\b(?!\\$)',
          name: 'keyword.operator.expression.has.mc'
        },
        {
          match: '(?<!\\.|\\$)\\bnew\\b(?!\\$)',
          name: 'keyword.operator.new.mc'
        },
        {
          match: '(?<!\\.|\\$)\\bvoid\\b(?!\\$)',
          name: 'keyword.operator.expression.void.mc'
        },
        {
          match: '\\*=|(?<!\\()/=|%=|\\+=|\\-=',
          name: 'keyword.operator.assignment.compound.mc'
        },
        {
          match: '\\&=|\\^=|<<=|>>=|\\|=',
          name: 'keyword.operator.assignment.compound.bitwise.mc'
        },
        {match: '<<|>>', name: 'keyword.operator.bitwise.shift.mc'},
        {match: '==|!=', name: 'keyword.operator.comparison.mc'},
        {match: '<=|>=|<>|<|>', name: 'keyword.operator.relational.mc'},
        {match: '\\!|&&|\\|\\|', name: 'keyword.operator.logical.mc'},
        {
          match: '(?<!\\.|\\$)\\band|or|not\\b(?!\\$)',
          name: 'keyword.operator.expression.logical.mc'
        },
        {match: '\\&|~|\\^|\\|', name: 'keyword.operator.bitwise.mc'},
        {match: '\\=', name: 'keyword.operator.assignment.mc'},
        {match: '--', name: 'keyword.operator.decrement.mc'},
        {match: '\\+\\+', name: 'keyword.operator.increment.mc'},
        {match: '%|\\*|/|-|\\+', name: 'keyword.operator.arithmetic.mc'},
        {
          captures: {1: {name: 'keyword.operator.arithmetic.mc'}},
          match: '(?<=[_$[:alnum:])])\\s*(/)(?![/*])'
        }
      ]
    },
    'field-declaration': {
      begin:
        '(?<!\\()(?:(?<!\\.|\\$)\\b(const|var)\\s+)(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\?\\s*)?(=)?)',
      beginCaptures: {1: {name: 'storage.type.mc'}},
      end: '(?=\\}|;|,|$)|(?<=\\})',
      name: 'meta.field.declaration.mc',
      patterns: [{include: '#variable-initializer'}]
    },
    'for-loop': {
      begin: '(?<!\\.|\\$)\\b(for)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.loop.mc'},
        2: {name: 'meta.brace.round.mc'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.mc'}},
      patterns: [
        {include: '#var-expr'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'function-call': {
      begin:
        '(?=(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()',
      end: '(?<=\\))(?!(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()',
      patterns: [
        {include: '#support-objects'},
        {include: '#punctuation-accessor'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.function.mc'
        },
        {include: '#comment'},
        {include: '#paren-expression'}
      ]
    },
    'function-declaration': {
      begin:
        '(?<!\\.|\\$)\\b(function\\b)(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*',
      beginCaptures: {
        1: {name: 'storage.type.function.mc'},
        2: {name: 'entity.name.function.mc'}
      },
      end: '(?=$|;|\\})|(?<=\\})',
      name: 'meta.function.mc',
      patterns: [
        {include: '#comment'},
        {include: '#function-parameters'},
        {include: '#decl-block'}
      ]
    },
    'function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.parameters.begin.mc'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.mc'}},
      name: 'meta.parameters.mc',
      patterns: [
        {include: '#comment'},
        {include: '#decorator'},
        {include: '#parameter-name'},
        {include: '#variable-initializer'},
        {match: ',', name: 'punctuation.separator.parameter.mc'}
      ]
    },
    identifiers: {
      patterns: [
        {
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\.\\s*prototype\\b(?!\\$))',
          name: 'support.class.mc'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.mc'},
            2: {name: 'variable.other.constant.object.property.mc'},
            3: {name: 'variable.other.object.property.mc'}
          },
          match:
            '(?x)(\\.)\\s*(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.mc'},
            2: {name: 'entity.name.function.mc'}
          },
          match:
            '(?x)(?:(\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(\n  (function\\s*[(<])|(function\\s+)|\n  ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)|\n  ([(]\\s*(([)]\\s*:)|([_$[:alpha:]][_$[:alnum:]]*\\s*:) )) |\n  ([<]\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s*[^=>])|(\\s*[,]))) |\n  ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)))'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.mc'},
            2: {name: 'variable.other.constant.property.mc'}
          },
          match:
            '(\\.)\\s*([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.mc'},
            2: {name: 'variable.other.property.mc'}
          },
          match: '(\\.)\\s*([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          captures: {
            1: {name: 'variable.other.constant.object.mc'},
            2: {name: 'variable.other.object.mc'}
          },
          match:
            '(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          match: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
          name: 'variable.other.constant.mc'
        },
        {
          match: '[_$[:alpha:]][_$[:alnum:]]*',
          name: 'variable.other.readwrite.mc'
        }
      ]
    },
    'import-declaration': {
      begin: '(?<!\\.|\\$)\\b(using)(?!(\\s*:)|(\\$))\\b',
      beginCaptures: {1: {name: 'keyword.control.import.mc'}},
      end: '(?=;|$)',
      name: 'meta.import.mc',
      patterns: [{include: '#import-export-declaration'}]
    },
    'import-export-clause': {
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'variable.other.readwrite.mc'},
            2: {name: 'keyword.control.as.mc'},
            3: {name: 'entity.name.type.alias.mc'}
          },
          match:
            '(?x) ([_$[:alpha:]][_$[:alnum:]]*) \\s+ \n  (as) \\s+ ([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {include: '#punctuation-comma'},
        {match: '\\*', name: 'constant.language.import-export-all.mc'},
        {match: '\\b(default)\\b', name: 'keyword.control.default.mc'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'variable.other.readwrite.alias.mc'
        }
      ]
    },
    'import-export-declaration': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#import-export-clause'}
      ]
    },
    literal: {
      name: 'literal.mc',
      patterns: [
        {include: '#numeric-literal'},
        {include: '#boolean-literal'},
        {include: '#null-literal'},
        {include: '#numericConstant-literal'},
        {include: '#array-literal'}
      ]
    },
    'method-declaration': {
      begin:
        '(?<!\\.|\\$)(?:\\b(hidden)\\s+)?(?:\\b(function)\\s+)(?:(?:\\b(?:(initialize)|(initialize))\\b(?!\\$|:))|(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))?\\s*[\\(\\<]))',
      beginCaptures: {
        1: {name: 'storage.modifier.mc'},
        2: {name: 'storage.type.function.mc'},
        3: {name: 'keyword.operator.new.mc'},
        4: {name: 'storage.type.mc'},
        5: {name: 'keyword.generator.asterisk.mc'}
      },
      end: '(?=\\}|;|,|$)|(?<=\\})',
      name: 'meta.method.declaration.mc',
      patterns: [
        {include: '#method-declaration-name'},
        {include: '#comment'},
        {include: '#function-parameters'},
        {include: '#decl-block'}
      ]
    },
    'method-declaration-name': {
      begin:
        '(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])',
      end: '(?=\\(|\\<)',
      patterns: [
        {include: '#string'},
        {include: '#array-literal'},
        {match: '[_$[:alpha:]][_$[:alnum:]]*', name: 'entity.name.function.mc'}
      ]
    },
    'namespace-declaration': {
      begin: '(?<!\\.|\\$)\\b(module)\\s+(?=[_$[:alpha:]"\'`])',
      beginCaptures: {1: {name: 'storage.type.namespace.mc'}},
      end: '(?=$|\\{)',
      name: 'meta.namespace.declaration.mc',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.type.module.mc'
        },
        {include: '#punctuation-accessor'}
      ]
    },
    'new-expr': {
      begin: '(?<!\\.|\\$)\\b(new)\\b(?!\\$)',
      beginCaptures: {1: {name: 'keyword.operator.new.mc'}},
      end: '(?<=\\))|(?=[;),}]|$|((?<!\\.|\\$)\\bnew\\b(?!\\$)))',
      name: 'new.expr.mc',
      patterns: [
        {include: '#paren-expression'},
        {include: '#class-declaration'},
        {include: '#type'}
      ]
    },
    'null-literal': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\bnull\\b(?!\\$)',
          name: 'constant.language.null.mc'
        }
      ]
    },
    'numeric-literal': {
      patterns: [
        {
          match: '\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)',
          name: 'constant.numeric.hex.mc'
        },
        {
          match: '\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)',
          name: 'constant.numeric.binary.mc'
        },
        {
          match: '\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)',
          name: 'constant.numeric.octal.mc'
        },
        {
          captures: {
            0: {name: 'constant.numeric.decimal.mc'},
            1: {name: 'meta.delimiter.decimal.period.mc'},
            2: {name: 'meta.delimiter.decimal.period.mc'},
            3: {name: 'meta.delimiter.decimal.period.mc'},
            4: {name: 'meta.delimiter.decimal.period.mc'},
            5: {name: 'meta.delimiter.decimal.period.mc'},
            6: {name: 'meta.delimiter.decimal.period.mc'}
          },
          match:
            '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+[ld]?\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+[ld]?\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+[ld]?\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+[ld]?\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+[ld]?\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)[ld]?\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+[ld]?\\b)|                      # .1\n  (?:\\b[0-9]+[ld]?\\b(?!\\.))                     # 1\n)(?!\\$)'
        }
      ]
    },
    'numericConstant-literal': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\bNaN\\b(?!\\$)',
          name: 'constant.language.nan.mc'
        }
      ]
    },
    'object-literal': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      name: 'meta.objectliteral.mc',
      patterns: [{include: '#object-member'}]
    },
    'object-member': {
      patterns: [
        {include: '#comment'},
        {
          begin: '(?:[:_$[:alpha:]][_$[:alnum:]]*)\\s*(=>)',
          beginCaptures: {
            0: {name: 'meta.object-literal.key.mc'},
            1: {name: 'punctuation.separator.key-value.mc'}
          },
          end: '(?=,|\\})',
          name: 'meta.object.member.mc',
          patterns: [{include: '#expression'}]
        },
        {include: '#punctuation-comma'}
      ]
    },
    'parameter-name': {
      patterns: [
        {
          captures: {1: {name: 'storage.modifier.mc'}},
          match: '\\s*\\b(hidden)(?=\\s+(hidden)\\s+)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.mc'},
            2: {name: 'keyword.operator.rest.mc'},
            3: {name: 'entity.name.function.mc'},
            4: {name: 'keyword.operator.optional.mc'}
          },
          match:
            '(?x)(?:\\s*\\b(hidden|static)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)(?=\\s*\n  (=\\s*(\n    (function\\s*[(<]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) |\n    ([(]\\s*(([)]\\s*:)|([_$[:alpha:]][_$[:alnum:]]*\\s*:)|(\\.\\.\\.) )) |\n    ([<]\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s*[^=>])|(\\s*[,]))) |\n    ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))\n  ) |\n  (:\\s*(\n    (<) |\n    ([(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )))\n  )\n)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.mc'},
            2: {name: 'keyword.operator.rest.mc'},
            3: {name: 'variable.parameter.mc'}
          },
          match:
            '(?:\\s*\\b(hidden|static)\\s+)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*'
        }
      ]
    },
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.mc'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.mc'}},
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'punctuation-accessor': {match: '\\.', name: 'punctuation.accessor.mc'},
    'punctuation-comma': {match: ',', name: 'punctuation.separator.comma.mc'},
    'punctuation-semicolon': {
      match: ';',
      name: 'punctuation.terminator.statement.mc'
    },
    'qstring-double': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mc'}},
      end: '(")|((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mc'},
        2: {name: 'invalid.illegal.newline.mc'}
      },
      name: 'string.quoted.double.mc',
      patterns: [{include: '#string-character-escape'}]
    },
    'qstring-single': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mc'}},
      end: "(\\')|((?:[^\\\\\\n])$)",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mc'},
        2: {name: 'invalid.illegal.newline.mc'}
      },
      name: 'string.quoted.single.mc',
      patterns: [{include: '#string-character-escape'}]
    },
    statements: {
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#literal'},
        {include: '#declaration'},
        {include: '#switch-statement'},
        {include: '#for-loop'},
        {include: '#after-operator-block'},
        {include: '#decl-block'},
        {include: '#control-statement'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'}
      ]
    },
    string: {
      patterns: [{include: '#qstring-single'}, {include: '#qstring-double'}]
    },
    'string-character-escape': {
      match:
        '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.mc'
    },
    'support-objects': {
      patterns: [
        {
          captures: {
            1: {name: 'support.constant.math.mc'},
            2: {name: 'punctuation.accessor.mc'},
            3: {name: 'support.function.math.mc'},
            4: {name: 'support.constant.property.math.mc'}
          },
          match:
            '(?x)(?<!\\.|\\$)\\b(Math)(?:\\s*(\\.)\\s*(?:\n  (abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|\n  expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|\n  round|sign|sin|sinh|sqrt|tan|tanh|trunc)\n  |\n  (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.class.system.mc'},
            2: {name: 'punctuation.accessor.mc'},
            3: {name: 'support.function.system.mc'}
          },
          match:
            '(?x)(?<!\\.|\\$)\\b(System)(?:\\s*(\\.)\\s*(\n  print|println|getTimer|getClockTime|getSystemStats|trap|exit|error))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.js'},
            2: {name: 'support.function.js'}
          },
          match: '(?x) (\\.) \\s* \n(?:\n (method)\n)(?=\\s*\\()'
        }
      ]
    },
    'switch-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      end: '(?=\\})',
      name: 'switch-block.expr.mc',
      patterns: [{include: '#case-clause'}, {include: '#statements'}]
    },
    'switch-expression': {
      begin: '(?<!\\.|\\$)\\b(switch)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.switch.mc'},
        2: {name: 'meta.brace.round.mc'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.mc'}},
      name: 'switch-expression.expr.mc',
      patterns: [{include: '#expression'}]
    },
    'switch-statement': {
      begin: '(?<!\\.|\\$)(?=\\bswitch\\s*\\()',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.mc'}},
      name: 'switch-statement.expr.mc',
      patterns: [{include: '#switch-expression'}, {include: '#switch-block'}]
    },
    'ternary-expression': {
      begin: '(\\?)',
      beginCaptures: {0: {name: 'keyword.operator.ternary.mc'}},
      end: '(:)',
      endCaptures: {0: {name: 'keyword.operator.ternary.mc'}},
      patterns: [{include: '#expression'}]
    },
    type: {
      name: 'meta.type.mc',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric-literal'},
        {include: '#type-builtin-literals'},
        {include: '#type-fn-type-parameters'},
        {include: '#type-paren-or-function-parameters'},
        {include: '#type-name'}
      ]
    },
    'type-builtin-literals': {
      match: '(?<!\\.|\\$)\\b(this|true|false|null)\\b(?!\\$)',
      name: 'support.type.builtin.mc'
    },
    'type-fn-type-parameters': {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.new.mc'}},
          match: '(?<!\\.|\\$)\\b(new)\\b(?=\\s*\\<)',
          name: 'meta.type.constructor.mc'
        },
        {
          begin: '(?<!\\.|\\$)\\b(new)\\b\\s*(?=\\()',
          beginCaptures: {1: {name: 'keyword.control.new.mc'}},
          end: '(?<=\\))',
          name: 'meta.type.constructor.mc',
          patterns: [{include: '#function-parameters'}]
        },
        {
          begin: '(?<=\\>)\\s*(?=\\()',
          end: '(?<=\\))',
          name: 'meta.type.function.mc',
          patterns: [{include: '#function-parameters'}]
        },
        {
          begin:
            '(?x)(\n  (?=\n    [(]\\s*(\n      ([)]) | \n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )\n  )\n)',
          end: '(?<=\\))',
          name: 'meta.type.function.mc',
          patterns: [{include: '#function-parameters'}]
        }
      ]
    },
    'type-name': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.module.mc'},
            2: {name: 'punctuation.accessor.mc'}
          },
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)'
        },
        {match: '[_$[:alpha:]][_$[:alnum:]]*', name: 'entity.name.type.mc'}
      ]
    },
    'type-paren-or-function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.mc'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.mc'}},
      name: 'meta.type.paren.cover.mc',
      patterns: [{include: '#type'}, {include: '#function-parameters'}]
    },
    'var-expr': {
      begin: '(?<!\\.|\\$)\\b(var|const(?!\\s+enum\\b))\\b(?!\\$)',
      beginCaptures: {1: {name: 'storage.type.mc'}},
      end: '(?=$|;|})',
      name: 'meta.var.expr.mc',
      patterns: [
        {include: '#var-single-variable'},
        {include: '#variable-initializer'},
        {include: '#comment'},
        {include: '#punctuation-comma'}
      ]
    },
    'var-single-variable': {
      patterns: [
        {
          begin:
            '(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\n  (=\\s*(\n    (function\\s*[(<]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) |\n    ([(]\\s*(([)]\\s*:)|([_$[:alpha:]][_$[:alnum:]]*\\s*:)|(\\.\\.\\.) )) |\n    ([<]\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s*[^=>])|(\\s*[,]))) |\n    ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))\n  ) |\n  (:\\s*(\n    (<) |\n    ([(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )))\n  )\n)',
          beginCaptures: {1: {name: 'entity.name.function.mc'}},
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.var-single-variable.expr.mc',
          patterns: [{include: '#string'}, {include: '#comment'}]
        },
        {
          begin: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
          beginCaptures: {1: {name: 'variable.other.constant.mc'}},
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.var-single-variable.expr.mc'
        },
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)',
          beginCaptures: {1: {name: 'variable.other.readwrite.mc'}},
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.var-single-variable.expr.mc',
          patterns: [{include: '#string'}, {include: '#comment'}]
        }
      ]
    },
    'variable-initializer': {
      patterns: [
        {
          begin: '(?<!=|!)(=)(?!=)(?=\\s*\\S)',
          beginCaptures: {1: {name: 'keyword.operator.assignment.mc'}},
          end: '(?=$|[,);}\\]])',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?<!=|!)(=)(?!=)',
          beginCaptures: {1: {name: 'keyword.operator.assignment.mc'}},
          end: '(?=[,);}\\]])|(?=^\\s*$)',
          patterns: [{include: '#expression'}]
        }
      ]
    }
  },
  scopeName: 'source.mc'
}

export default grammar
