// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Microsoft/TypeScript-TmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tsx'],
  names: ['tsx'],
  patterns: [
    {include: '#directives'},
    {include: '#statements'},
    {include: '#shebang'}
  ],
  repository: {
    'access-modifier': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'storage.modifier.tsx'
    },
    'after-operator-block-as-object-literal': {
      begin:
        '(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)',
      beginCaptures: {1: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.objectliteral.tsx',
      patterns: [{include: '#object-member'}]
    },
    'array-binding-pattern': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\[)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      patterns: [{include: '#binding-element'}, {include: '#punctuation-comma'}]
    },
    'array-binding-pattern-const': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\[)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      patterns: [
        {include: '#binding-element-const'},
        {include: '#punctuation-comma'}
      ]
    },
    'array-literal': {
      begin: '\\s*(\\[)',
      beginCaptures: {1: {name: 'meta.brace.square.tsx'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.tsx'}},
      name: 'meta.array.literal.tsx',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'arrow-function': {
      patterns: [
        {
          captures: {
            1: {name: 'storage.modifier.async.tsx'},
            2: {name: 'variable.parameter.tsx'}
          },
          match:
            '(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)',
          name: 'meta.arrow.tsx'
        },
        {
          begin:
            '(?x) (?:\n  (?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\n)? ((?<![})!\\]])\\s*\n  (?=\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  )\n)',
          beginCaptures: {1: {name: 'storage.modifier.async.tsx'}},
          end: '(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))',
          name: 'meta.arrow.tsx',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameters'},
            {include: '#function-parameters'},
            {include: '#arrow-return-type'},
            {include: '#possibly-arrow-return-type'}
          ]
        },
        {
          begin: '=>',
          beginCaptures: {0: {name: 'storage.type.function.arrow.tsx'}},
          end: '((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])',
          name: 'meta.arrow.tsx',
          patterns: [
            {include: '#single-line-comment-consuming-line-ending'},
            {include: '#decl-block'},
            {include: '#expression'}
          ]
        }
      ]
    },
    'arrow-return-type': {
      begin: '(?<=\\))\\s*(:)',
      beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
      end: '(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))',
      name: 'meta.return.type.arrow.tsx',
      patterns: [{include: '#arrow-return-type-body'}]
    },
    'arrow-return-type-body': {
      patterns: [
        {
          begin: '(?<=[:])(?=\\s*\\{)',
          end: '(?<=\\})',
          patterns: [{include: '#type-object'}]
        },
        {include: '#type-predicate-operator'},
        {include: '#type'}
      ]
    },
    'async-modifier': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'storage.modifier.async.tsx'
    },
    'binding-element': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric-literal'},
        {include: '#regex'},
        {include: '#object-binding-pattern'},
        {include: '#array-binding-pattern'},
        {include: '#destructuring-variable-rest'},
        {include: '#variable-initializer'}
      ]
    },
    'binding-element-const': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric-literal'},
        {include: '#regex'},
        {include: '#object-binding-pattern-const'},
        {include: '#array-binding-pattern-const'},
        {include: '#destructuring-variable-rest-const'},
        {include: '#variable-initializer'}
      ]
    },
    'boolean-literal': {
      patterns: [
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'constant.language.boolean.true.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'constant.language.boolean.false.tsx'
        }
      ]
    },
    brackets: {
      patterns: [
        {begin: '{', end: '}|(?=\\*/)', patterns: [{include: '#brackets'}]},
        {begin: '\\[', end: '\\]|(?=\\*/)', patterns: [{include: '#brackets'}]}
      ]
    },
    cast: {patterns: [{include: '#jsx'}]},
    'class-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.tsx'},
        4: {name: 'storage.type.class.tsx'}
      },
      end: '(?<=\\})',
      name: 'meta.class.tsx',
      patterns: [{include: '#class-declaration-or-expression-patterns'}]
    },
    'class-declaration-or-expression-patterns': {
      patterns: [
        {include: '#comment'},
        {include: '#class-or-interface-heritage'},
        {
          captures: {0: {name: 'entity.name.type.class.tsx'}},
          match: '[_$[:alpha:]][_$[:alnum:]]*'
        },
        {include: '#type-parameters'},
        {include: '#class-or-interface-body'}
      ]
    },
    'class-expression': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])',
      beginCaptures: {
        1: {name: 'storage.modifier.tsx'},
        2: {name: 'storage.type.class.tsx'}
      },
      end: '(?<=\\})',
      name: 'meta.class.tsx',
      patterns: [{include: '#class-declaration-or-expression-patterns'}]
    },
    'class-or-interface-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      patterns: [
        {include: '#comment'},
        {include: '#decorator'},
        {
          begin: '(?<=:)\\s*',
          end: '(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          patterns: [{include: '#expression'}]
        },
        {include: '#method-declaration'},
        {include: '#indexer-declaration'},
        {include: '#field-declaration'},
        {include: '#string'},
        {include: '#type-annotation'},
        {include: '#variable-initializer'},
        {include: '#access-modifier'},
        {include: '#property-accessor'},
        {include: '#async-modifier'},
        {include: '#after-operator-block-as-object-literal'},
        {include: '#decl-block'},
        {include: '#expression'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'class-or-interface-heritage': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      beginCaptures: {1: {name: 'storage.modifier.tsx'}},
      end: '(?=\\{)',
      patterns: [
        {include: '#comment'},
        {include: '#class-or-interface-heritage'},
        {include: '#type-parameters'},
        {include: '#expressionWithoutIdentifiers'},
        {
          captures: {
            1: {name: 'entity.name.type.module.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'}
          },
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)'
        },
        {
          captures: {1: {name: 'entity.other.inherited-class.tsx'}},
          match: '([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {include: '#expressionPunctuations'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*\\*(?!/)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
          name: 'comment.block.documentation.tsx',
          patterns: [{include: '#docblock'}]
        },
        {
          begin: '(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.tsx'},
            2: {name: 'storage.type.internaldeclaration.tsx'},
            3: {name: 'punctuation.decorator.internaldeclaration.tsx'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
          name: 'comment.block.tsx'
        },
        {
          begin: '(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.tsx'},
            2: {name: 'comment.line.double-slash.tsx'},
            3: {name: 'punctuation.definition.comment.tsx'},
            4: {name: 'storage.type.internaldeclaration.tsx'},
            5: {name: 'punctuation.decorator.internaldeclaration.tsx'}
          },
          contentName: 'comment.line.double-slash.tsx',
          end: '(?=$)'
        }
      ]
    },
    'control-statement': {
      patterns: [
        {include: '#switch-statement'},
        {include: '#for-loop'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.trycatch.tsx'
        },
        {
          captures: {
            1: {name: 'keyword.control.loop.tsx'},
            2: {name: 'entity.name.label.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.loop.tsx'
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          beginCaptures: {0: {name: 'keyword.control.flow.tsx'}},
          end: '(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          patterns: [{include: '#expression'}]
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.switch.tsx'
        },
        {include: '#if-statement'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.conditional.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.with.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.other.debugger.tsx'
        }
      ]
    },
    'decl-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.block.tsx',
      patterns: [{include: '#statements'}]
    },
    declaration: {
      patterns: [
        {include: '#decorator'},
        {include: '#var-expr'},
        {include: '#function-declaration'},
        {include: '#class-declaration'},
        {include: '#interface-declaration'},
        {include: '#enum-declaration'},
        {include: '#namespace-declaration'},
        {include: '#type-alias-declaration'},
        {include: '#import-equals-declaration'},
        {include: '#import-declaration'},
        {include: '#export-declaration'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'storage.modifier.tsx'
        }
      ]
    },
    decorator: {
      begin: '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@',
      beginCaptures: {0: {name: 'punctuation.decorator.tsx'}},
      end: '(?=\\s)',
      name: 'meta.decorator.tsx',
      patterns: [{include: '#expression'}]
    },
    'destructuring-const': {
      patterns: [
        {
          begin:
            '(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)',
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))',
          name: 'meta.object-binding-pattern-variable.tsx',
          patterns: [
            {include: '#object-binding-pattern-const'},
            {include: '#type-annotation'},
            {include: '#comment'}
          ]
        },
        {
          begin:
            '(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)',
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))',
          name: 'meta.array-binding-pattern-variable.tsx',
          patterns: [
            {include: '#array-binding-pattern-const'},
            {include: '#type-annotation'},
            {include: '#comment'}
          ]
        }
      ]
    },
    'destructuring-parameter': {
      patterns: [
        {
          begin: '(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)',
          beginCaptures: {
            1: {name: 'keyword.operator.rest.tsx'},
            2: {name: 'punctuation.definition.binding-pattern.object.tsx'}
          },
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.binding-pattern.object.tsx'}
          },
          name: 'meta.parameter.object-binding-pattern.tsx',
          patterns: [{include: '#parameter-object-binding-element'}]
        },
        {
          begin: '(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)',
          beginCaptures: {
            1: {name: 'keyword.operator.rest.tsx'},
            2: {name: 'punctuation.definition.binding-pattern.array.tsx'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.binding-pattern.array.tsx'}
          },
          name: 'meta.paramter.array-binding-pattern.tsx',
          patterns: [
            {include: '#parameter-binding-element'},
            {include: '#punctuation-comma'}
          ]
        }
      ]
    },
    'destructuring-parameter-rest': {
      captures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'variable.parameter.tsx'}
      },
      match: '(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)'
    },
    'destructuring-variable': {
      patterns: [
        {
          begin:
            '(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)',
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))',
          name: 'meta.object-binding-pattern-variable.tsx',
          patterns: [
            {include: '#object-binding-pattern'},
            {include: '#type-annotation'},
            {include: '#comment'}
          ]
        },
        {
          begin:
            '(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)',
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))',
          name: 'meta.array-binding-pattern-variable.tsx',
          patterns: [
            {include: '#array-binding-pattern'},
            {include: '#type-annotation'},
            {include: '#comment'}
          ]
        }
      ]
    },
    'destructuring-variable-rest': {
      captures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'meta.definition.variable.tsx variable.other.readwrite.tsx'}
      },
      match: '(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)'
    },
    'destructuring-variable-rest-const': {
      captures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'meta.definition.variable.tsx variable.other.constant.tsx'}
      },
      match: '(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)'
    },
    directives: {
      begin:
        '^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.tsx'}},
      end: '(?=$)',
      name: 'comment.line.triple-slash.directive.tsx',
      patterns: [
        {
          begin: '(<)(reference|amd-dependency|amd-module)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.directive.tsx'},
            2: {name: 'entity.name.tag.directive.tsx'}
          },
          end: '/>',
          endCaptures: {0: {name: 'punctuation.definition.tag.directive.tsx'}},
          name: 'meta.tag.tsx',
          patterns: [
            {
              match: 'path|types|no-default-lib|lib|name|resolution-mode',
              name: 'entity.other.attribute-name.directive.tsx'
            },
            {match: '=', name: 'keyword.operator.assignment.tsx'},
            {include: '#string'}
          ]
        }
      ]
    },
    docblock: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'constant.language.access-type.jsdoc'}
          },
          match:
            '(?x)\n((@)(?:access|api))\n\\s+\n(private|protected|public)\n\\b'
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'entity.name.type.instance.jsdoc'},
            4: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
            5: {name: 'constant.other.email.link.underline.jsdoc'},
            6: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
          },
          match:
            '(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?'
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'entity.name.type.instance.jsdoc'},
            4: {name: 'keyword.operator.control.jsdoc'},
            5: {name: 'entity.name.type.instance.jsdoc'}
          },
          match:
            '(?x)\n((@)borrows) \\s+\n((?:[^@\\s*/]|\\*[^/])+)    # <that namepath>\n\\s+ (as) \\s+              # as\n((?:[^@\\s*/]|\\*[^/])+)    # <this namepath>'
        },
        {
          begin: '((@)example)\\s+',
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          end: '(?=@|\\*/)',
          name: 'meta.example.jsdoc',
          patterns: [
            {match: '^\\s\\*\\s+'},
            {
              begin: '\\G(<)caption(>)',
              beginCaptures: {
                0: {name: 'entity.name.tag.inline.jsdoc'},
                1: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
                2: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
              },
              contentName: 'constant.other.description.jsdoc',
              end: '(</)caption(>)|(?=\\*/)',
              endCaptures: {
                0: {name: 'entity.name.tag.inline.jsdoc'},
                1: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
                2: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
              }
            },
            {
              captures: {0: {name: 'source.embedded.tsx'}},
              match: '[^\\s@*](?:[^*]|\\*[^/])*'
            }
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'constant.language.symbol-type.jsdoc'}
          },
          match:
            '(?x) ((@)kind) \\s+ (class|constant|event|external|file|function|member|mixin|module|namespace|typedef) \\b'
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'variable.other.link.underline.jsdoc'},
            4: {name: 'entity.name.type.instance.jsdoc'}
          },
          match:
            '(?x)\n((@)see)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n  |\n  # JSDoc namepath\n  (\n    (?!\n      # Avoid matching bare URIs (also acceptable as links)\n      https?://\n      |\n      # Avoid matching {@inline tags}; we match those below\n      (?:\\[[^\\[\\]]*\\])? # Possible description [preceding]{@tag}\n      {@(?:link|linkcode|linkplain|tutorial)\\b\n    )\n    # Matched namepath\n    (?:[^@\\s*/]|\\*[^/])+\n  )\n)'
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'variable.other.jsdoc'}
          },
          match:
            '(?x)\n((@)template)\n\\s+\n# One or more valid identifiers\n(\n  [A-Za-z_$]         # First character: non-numeric word character\n  [\\w$.\\[\\]]*        # Rest of identifier\n  (?:                # Possible list of additional identifiers\n    \\s* , \\s*\n    [A-Za-z_$]\n    [\\w$.\\[\\]]*\n  )*\n)'
        },
        {
          begin: '(?x)((@)template)\\s+(?={)',
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
          patterns: [
            {include: '#jsdoctype'},
            {match: '([A-Za-z_$][\\w$.\\[\\]]*)', name: 'variable.other.jsdoc'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'variable.other.jsdoc'}
          },
          match:
            '(?x)\n(\n  (@)\n  (?:arg|argument|const|constant|member|namespace|param|var)\n)\n\\s+\n(\n  [A-Za-z_$]\n  [\\w$.\\[\\]]*\n)'
        },
        {
          begin: '((@)typedef)\\s+(?={)',
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
          patterns: [
            {include: '#jsdoctype'},
            {
              match: '(?:[^@\\s*/]|\\*[^/])+',
              name: 'entity.name.type.instance.jsdoc'
            }
          ]
        },
        {
          begin:
            '((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)',
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
          patterns: [
            {include: '#jsdoctype'},
            {match: '([A-Za-z_$][\\w$.\\[\\]]*)', name: 'variable.other.jsdoc'},
            {
              captures: {
                1: {
                  name: 'punctuation.definition.optional-value.begin.bracket.square.jsdoc'
                },
                2: {name: 'keyword.operator.assignment.jsdoc'},
                3: {name: 'source.embedded.tsx'},
                4: {
                  name: 'punctuation.definition.optional-value.end.bracket.square.jsdoc'
                },
                5: {name: 'invalid.illegal.syntax.jsdoc'}
              },
              match:
                '(?x)\n(\\[)\\s*\n[\\w$]+\n(?:\n  (?:\\[\\])?                                        # Foo[ ].bar properties within an array\n  \\.                                                # Foo.Bar namespaced parameter\n  [\\w$]+\n)*\n(?:\n  \\s*\n  (=)                                                # [foo=bar] Default parameter value\n  \\s*\n  (\n    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes\n    (?>\n      "(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |                      # [foo="bar"] Double-quoted\n      \'(?:(?:\\*(?!/))|(?:\\\\(?!\'))|[^*\\\\])*?\' |                      # [foo=\'bar\'] Single-quoted\n      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |                                # [foo=[1,2]] Array literal\n      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*   # Everything else\n    )*\n  )\n)?\n\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))',
              name: 'variable.other.jsdoc'
            }
          ]
        },
        {
          begin:
            '(?x)\n(\n  (@)\n  (?:define|enum|exception|export|extends|lends|implements|modifies\n  |namespace|private|protected|returns?|satisfies|suppress|this|throws|type\n  |yields?)\n)\n\\s+(?={)',
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
          patterns: [{include: '#jsdoctype'}]
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'entity.name.type.instance.jsdoc'}
          },
          match:
            '(?x)\n(\n  (@)\n  (?:alias|augments|callback|constructs|emits|event|fires|exports?\n  |extends|external|function|func|host|lends|listens|interface|memberof!?\n  |method|module|mixes|mixin|name|requires|see|this|typedef|uses)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)'
        },
        {
          begin: "((@)(?:default(?:value)?|license|version))\\s+(([''\"]))",
          beginCaptures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'variable.other.jsdoc'},
            4: {name: 'punctuation.definition.string.begin.jsdoc'}
          },
          contentName: 'variable.other.jsdoc',
          end: '(\\3)|(?=$|\\*/)',
          endCaptures: {
            0: {name: 'variable.other.jsdoc'},
            1: {name: 'punctuation.definition.string.end.jsdoc'}
          }
        },
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'},
            3: {name: 'variable.other.jsdoc'}
          },
          match:
            '((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)'
        },
        {
          captures: {1: {name: 'punctuation.definition.block.tag.jsdoc'}},
          match:
            '(?x) (@) (?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles |callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright |default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception |exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func |function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc |inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method |mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects |override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected |public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary |suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation |version|virtual|writeOnce|yields?) \\b',
          name: 'storage.type.class.jsdoc'
        },
        {include: '#inline-tags'},
        {
          captures: {
            1: {name: 'storage.type.class.jsdoc'},
            2: {name: 'punctuation.definition.block.tag.jsdoc'}
          },
          match: '((@)(?:[_$[:alpha:]][_$[:alnum:]]*))(?=\\s+)'
        }
      ]
    },
    'enum-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.tsx'},
        4: {name: 'storage.type.enum.tsx'},
        5: {name: 'entity.name.type.enum.tsx'}
      },
      end: '(?<=\\})',
      name: 'meta.enum.declaration.tsx',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
          patterns: [
            {include: '#comment'},
            {
              begin: '([_$[:alpha:]][_$[:alnum:]]*)',
              beginCaptures: {0: {name: 'variable.other.enummember.tsx'}},
              end: '(?=,|\\}|$)',
              patterns: [
                {include: '#comment'},
                {include: '#variable-initializer'}
              ]
            },
            {
              begin:
                '(?=((\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))',
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
    'export-declaration': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.control.as.tsx'},
            3: {name: 'storage.type.namespace.tsx'},
            4: {name: 'entity.name.type.module.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.control.type.tsx'},
            3: {name: 'keyword.operator.assignment.tsx'},
            4: {name: 'keyword.control.default.tsx'}
          },
          end: '(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          name: 'meta.export.default.tsx',
          patterns: [
            {include: '#interface-declaration'},
            {include: '#expression'}
          ]
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.control.type.tsx'}
          },
          end: '(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          name: 'meta.export.tsx',
          patterns: [{include: '#import-export-declaration'}]
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#expressionWithoutIdentifiers'},
        {include: '#identifiers'},
        {include: '#expressionPunctuations'}
      ]
    },
    'expression-inside-possibly-arrow-parens': {
      patterns: [
        {include: '#expressionWithoutIdentifiers'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#decorator'},
        {include: '#destructuring-parameter'},
        {
          captures: {1: {name: 'storage.modifier.tsx'}},
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'entity.name.function.tsx variable.language.this.tsx'},
            4: {name: 'entity.name.function.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'variable.parameter.tsx variable.language.this.tsx'},
            4: {name: 'variable.parameter.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)'
        },
        {include: '#type-annotation'},
        {include: '#variable-initializer'},
        {match: ',', name: 'punctuation.separator.parameter.tsx'},
        {include: '#identifiers'},
        {include: '#expressionPunctuations'}
      ]
    },
    'expression-operators': {
      patterns: [
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.control.flow.tsx'
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)',
          beginCaptures: {1: {name: 'keyword.control.flow.tsx'}},
          end: '\\*',
          endCaptures: {0: {name: 'keyword.generator.asterisk.tsx'}},
          patterns: [{include: '#comment'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.flow.tsx'},
            2: {name: 'keyword.generator.asterisk.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.expression.delete.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
          name: 'keyword.operator.expression.in.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
          name: 'keyword.operator.expression.of.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.expression.instanceof.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.new.tsx'
        },
        {include: '#typeof-operator'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.expression.void.tsx'
        },
        {
          captures: {
            1: {name: 'keyword.control.as.tsx'},
            2: {name: 'storage.modifier.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))'
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+',
          beginCaptures: {
            1: {name: 'keyword.control.as.tsx'},
            2: {name: 'keyword.control.satisfies.tsx'}
          },
          end: '(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))',
          patterns: [{include: '#type'}]
        },
        {match: '\\.\\.\\.', name: 'keyword.operator.spread.tsx'},
        {
          match: '\\*=|(?<!\\()/=|%=|\\+=|\\-=',
          name: 'keyword.operator.assignment.compound.tsx'
        },
        {
          match: '\\&=|\\^=|<<=|>>=|>>>=|\\|=',
          name: 'keyword.operator.assignment.compound.bitwise.tsx'
        },
        {match: '<<|>>>|>>', name: 'keyword.operator.bitwise.shift.tsx'},
        {match: '===|!==|==|!=', name: 'keyword.operator.comparison.tsx'},
        {match: '<=|>=|<>|<|>', name: 'keyword.operator.relational.tsx'},
        {
          captures: {
            1: {name: 'keyword.operator.logical.tsx'},
            2: {name: 'keyword.operator.assignment.compound.tsx'},
            3: {name: 'keyword.operator.arithmetic.tsx'}
          },
          match: '(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))'
        },
        {match: '\\!|&&|\\|\\||\\?\\?', name: 'keyword.operator.logical.tsx'},
        {match: '\\&|~|\\^|\\|', name: 'keyword.operator.bitwise.tsx'},
        {match: '\\=', name: 'keyword.operator.assignment.tsx'},
        {match: '--', name: 'keyword.operator.decrement.tsx'},
        {match: '\\+\\+', name: 'keyword.operator.increment.tsx'},
        {match: '%|\\*|/|-|\\+', name: 'keyword.operator.arithmetic.tsx'},
        {
          begin:
            '(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))',
          end: '(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))',
          endCaptures: {
            1: {name: 'keyword.operator.assignment.compound.tsx'},
            2: {name: 'keyword.operator.arithmetic.tsx'}
          },
          patterns: [{include: '#comment'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.assignment.compound.tsx'},
            2: {name: 'keyword.operator.arithmetic.tsx'}
          },
          match: '(?<=[_$[:alnum:])\\]])\\s*(?:(/=)|(?:(/)(?![/*])))'
        }
      ]
    },
    expressionPunctuations: {
      patterns: [
        {include: '#punctuation-comma'},
        {include: '#punctuation-accessor'}
      ]
    },
    expressionWithoutIdentifiers: {
      patterns: [
        {include: '#jsx'},
        {include: '#string'},
        {include: '#regex'},
        {include: '#comment'},
        {include: '#function-expression'},
        {include: '#class-expression'},
        {include: '#arrow-function'},
        {include: '#paren-expression-possibly-arrow'},
        {include: '#cast'},
        {include: '#ternary-expression'},
        {include: '#new-expr'},
        {include: '#instanceof-expr'},
        {include: '#object-literal'},
        {include: '#expression-operators'},
        {include: '#function-call'},
        {include: '#literal'},
        {include: '#support-objects'},
        {include: '#paren-expression'}
      ]
    },
    'field-declaration': {
      begin:
        '(?x)(?<!\\()(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))',
      beginCaptures: {1: {name: 'storage.modifier.tsx'}},
      end: '(?x)(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})',
      name: 'meta.field.declaration.tsx',
      patterns: [
        {include: '#variable-initializer'},
        {include: '#type-annotation'},
        {include: '#string'},
        {include: '#array-literal'},
        {include: '#numeric-literal'},
        {include: '#comment'},
        {
          captures: {
            1: {name: 'meta.definition.property.tsx entity.name.function.tsx'},
            2: {name: 'keyword.operator.optional.tsx'},
            3: {name: 'keyword.operator.definiteassignment.tsx'}
          },
          match:
            '(?x)(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))'
        },
        {
          match: '\\#?[_$[:alpha:]][_$[:alnum:]]*',
          name: 'meta.definition.property.tsx variable.object.property.tsx'
        },
        {match: '\\?', name: 'keyword.operator.optional.tsx'},
        {match: '\\!', name: 'keyword.operator.definiteassignment.tsx'}
      ]
    },
    'for-loop': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())',
      beginCaptures: {0: {name: 'keyword.control.loop.tsx'}},
      end: '(?<=\\))',
      patterns: [
        {include: '#comment'},
        {match: 'await', name: 'keyword.control.loop.tsx'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
          end: '\\)',
          endCaptures: {0: {name: 'meta.brace.round.tsx'}},
          patterns: [
            {include: '#var-expr'},
            {include: '#expression'},
            {include: '#punctuation-semicolon'}
          ]
        }
      ]
    },
    'function-body': {
      patterns: [
        {include: '#comment'},
        {include: '#type-parameters'},
        {include: '#function-parameters'},
        {include: '#return-type'},
        {include: '#type-function-return-type'},
        {include: '#decl-block'},
        {match: '\\*', name: 'keyword.generator.asterisk.tsx'}
      ]
    },
    'function-call': {
      patterns: [
        {
          begin:
            '(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())',
          end: '(?<=\\))(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())',
          patterns: [
            {
              begin:
                '(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))',
              end: '(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())',
              name: 'meta.function-call.tsx',
              patterns: [{include: '#function-call-target'}]
            },
            {include: '#comment'},
            {include: '#function-call-optionals'},
            {include: '#type-arguments'},
            {include: '#paren-expression'}
          ]
        },
        {
          begin:
            '(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))',
          end: '(?<=\\>)(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))',
          patterns: [
            {
              begin:
                '(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))',
              end: '(?=(<\\s*[\\{\\[\\(]\\s*$))',
              name: 'meta.function-call.tsx',
              patterns: [{include: '#function-call-target'}]
            },
            {include: '#comment'},
            {include: '#function-call-optionals'},
            {include: '#type-arguments'}
          ]
        }
      ]
    },
    'function-call-optionals': {
      patterns: [
        {
          match: '\\?\\.',
          name: 'meta.function-call.tsx punctuation.accessor.optional.tsx'
        },
        {
          match: '\\!',
          name: 'meta.function-call.tsx keyword.operator.definiteassignment.tsx'
        }
      ]
    },
    'function-call-target': {
      patterns: [
        {include: '#support-function-call-identifiers'},
        {
          match: '(\\#?[_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.function.tsx'
        }
      ]
    },
    'function-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.async.tsx'},
        4: {name: 'storage.type.function.tsx'},
        5: {name: 'keyword.generator.asterisk.tsx'},
        6: {name: 'meta.definition.function.tsx entity.name.function.tsx'}
      },
      end: '(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|(?<=\\})',
      name: 'meta.function.tsx',
      patterns: [{include: '#function-name'}, {include: '#function-body'}]
    },
    'function-expression': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*',
      beginCaptures: {
        1: {name: 'storage.modifier.async.tsx'},
        2: {name: 'storage.type.function.tsx'},
        3: {name: 'keyword.generator.asterisk.tsx'},
        4: {name: 'meta.definition.function.tsx entity.name.function.tsx'}
      },
      end: '(?=;)|(?<=\\})',
      name: 'meta.function.expression.tsx',
      patterns: [
        {include: '#function-name'},
        {include: '#single-line-comment-consuming-line-ending'},
        {include: '#function-body'}
      ]
    },
    'function-name': {
      match: '[_$[:alpha:]][_$[:alnum:]]*',
      name: 'meta.definition.function.tsx entity.name.function.tsx'
    },
    'function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.parameters.begin.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.tsx'}},
      name: 'meta.parameters.tsx',
      patterns: [{include: '#function-parameters-body'}]
    },
    'function-parameters-body': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#decorator'},
        {include: '#destructuring-parameter'},
        {include: '#parameter-name'},
        {include: '#parameter-type-annotation'},
        {include: '#variable-initializer'},
        {match: ',', name: 'punctuation.separator.parameter.tsx'}
      ]
    },
    identifiers: {
      patterns: [
        {include: '#object-identifiers'},
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'entity.name.function.tsx'}
          },
          match:
            '(?x)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n))'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'variable.other.constant.property.tsx'}
          },
          match:
            '(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'variable.other.property.tsx'}
          },
          match:
            '(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          match: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
          name: 'variable.other.constant.tsx'
        },
        {
          match: '[_$[:alpha:]][_$[:alnum:]]*',
          name: 'variable.other.readwrite.tsx'
        }
      ]
    },
    'if-statement': {
      patterns: [
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))',
          end: '(?=;|$|\\})',
          patterns: [
            {include: '#comment'},
            {
              begin:
                '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()',
              beginCaptures: {
                1: {name: 'keyword.control.conditional.tsx'},
                2: {name: 'meta.brace.round.tsx'}
              },
              end: '\\)',
              endCaptures: {0: {name: 'meta.brace.round.tsx'}},
              patterns: [{include: '#expression'}]
            },
            {
              begin:
                '(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.tsx'}
              },
              end: '(/)([dgimsuvy]*)',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.tsx'},
                2: {name: 'keyword.other.tsx'}
              },
              name: 'string.regexp.tsx',
              patterns: [{include: '#regexp'}]
            },
            {include: '#statements'}
          ]
        }
      ]
    },
    'import-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'keyword.control.import.tsx'},
        4: {name: 'keyword.control.type.tsx'}
      },
      end: '(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)',
      name: 'meta.import.tsx',
      patterns: [
        {include: '#single-line-comment-consuming-line-ending'},
        {include: '#comment'},
        {include: '#string'},
        {
          begin: '(?<=^import|[^\\._$[:alnum:]]import)(?!\\s*["\'])',
          end: '\\bfrom\\b',
          endCaptures: {0: {name: 'keyword.control.from.tsx'}},
          patterns: [{include: '#import-export-declaration'}]
        },
        {include: '#import-export-declaration'}
      ]
    },
    'import-equals-declaration': {
      patterns: [
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'keyword.control.import.tsx'},
            4: {name: 'keyword.control.type.tsx'},
            5: {name: 'variable.other.readwrite.alias.tsx'},
            6: {name: 'keyword.operator.assignment.tsx'},
            7: {name: 'keyword.control.require.tsx'},
            8: {name: 'meta.brace.round.tsx'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'meta.brace.round.tsx'}},
          name: 'meta.import-equals.external.tsx',
          patterns: [{include: '#comment'}, {include: '#string'}]
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'keyword.control.import.tsx'},
            4: {name: 'keyword.control.type.tsx'},
            5: {name: 'variable.other.readwrite.alias.tsx'},
            6: {name: 'keyword.operator.assignment.tsx'}
          },
          end: '(?=;|$|^)',
          name: 'meta.import-equals.internal.tsx',
          patterns: [
            {include: '#single-line-comment-consuming-line-ending'},
            {include: '#comment'},
            {
              captures: {
                1: {name: 'entity.name.type.module.tsx'},
                2: {name: 'punctuation.accessor.tsx'},
                3: {name: 'punctuation.accessor.optional.tsx'}
              },
              match:
                '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))'
            },
            {
              match: '([_$[:alpha:]][_$[:alnum:]]*)',
              name: 'variable.other.readwrite.tsx'
            }
          ]
        }
      ]
    },
    'import-export-assert-clause': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.with.tsx'},
        2: {name: 'keyword.control.assert.tsx'},
        3: {name: 'punctuation.definition.block.tsx'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          match:
            '(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)',
          name: 'meta.object-literal.key.tsx'
        },
        {match: ':', name: 'punctuation.separator.key-value.tsx'}
      ]
    },
    'import-export-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.block.tsx',
      patterns: [{include: '#import-export-clause'}]
    },
    'import-export-clause': {
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'keyword.control.type.tsx'},
            12: {name: 'keyword.control.as.tsx'},
            13: {name: 'keyword.control.default.tsx'},
            14: {name: 'variable.other.readwrite.alias.tsx'},
            15: {name: 'string.quoted.alias.tsx'},
            2: {name: 'keyword.control.default.tsx'},
            3: {name: 'constant.language.import-export-all.tsx'},
            4: {name: 'variable.other.readwrite.tsx'},
            5: {name: 'string.quoted.alias.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)|((\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*)|((\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))'
        },
        {include: '#punctuation-comma'},
        {match: '\\*', name: 'constant.language.import-export-all.tsx'},
        {match: '\\b(default)\\b', name: 'keyword.control.default.tsx'},
        {
          captures: {
            1: {name: 'keyword.control.type.tsx'},
            2: {name: 'variable.other.readwrite.alias.tsx'},
            3: {name: 'string.quoted.alias.tsx'}
          },
          match:
            '(?:(\\btype)\\s+)?(?:([_$[:alpha:]][_$[:alnum:]]*)|((\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))'
        }
      ]
    },
    'import-export-declaration': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#import-export-block'},
        {match: '\\bfrom\\b', name: 'keyword.control.from.tsx'},
        {include: '#import-export-assert-clause'},
        {include: '#import-export-clause'}
      ]
    },
    'indexer-declaration': {
      begin:
        '(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)',
      beginCaptures: {
        1: {name: 'storage.modifier.tsx'},
        2: {name: 'meta.brace.square.tsx'},
        3: {name: 'variable.parameter.tsx'}
      },
      end: '(\\])\\s*(\\?\\s*)?|$',
      endCaptures: {
        1: {name: 'meta.brace.square.tsx'},
        2: {name: 'keyword.operator.optional.tsx'}
      },
      name: 'meta.indexer.declaration.tsx',
      patterns: [{include: '#type-annotation'}]
    },
    'indexer-mapped-type-declaration': {
      begin:
        '(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+',
      beginCaptures: {
        1: {name: 'keyword.operator.type.modifier.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'meta.brace.square.tsx'},
        4: {name: 'entity.name.type.tsx'},
        5: {name: 'keyword.operator.expression.in.tsx'}
      },
      end: '(\\])([+-])?\\s*(\\?\\s*)?|$',
      endCaptures: {
        1: {name: 'meta.brace.square.tsx'},
        2: {name: 'keyword.operator.type.modifier.tsx'},
        3: {name: 'keyword.operator.optional.tsx'}
      },
      name: 'meta.indexer.mappedtype.declaration.tsx',
      patterns: [
        {
          captures: {1: {name: 'keyword.control.as.tsx'}},
          match: '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+'
        },
        {include: '#type'}
      ]
    },
    'inline-tags': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.square.begin.jsdoc'},
            2: {name: 'punctuation.definition.bracket.square.end.jsdoc'}
          },
          match: '(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))',
          name: 'constant.other.description.jsdoc'
        },
        {
          begin: '({)((@)(?:link(?:code|plain)?|tutorial))\\s*',
          beginCaptures: {
            1: {name: 'punctuation.definition.bracket.curly.begin.jsdoc'},
            2: {name: 'storage.type.class.jsdoc'},
            3: {name: 'punctuation.definition.inline.tag.jsdoc'}
          },
          end: '}|(?=\\*/)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.end.jsdoc'}
          },
          name: 'entity.name.type.instance.jsdoc',
          patterns: [
            {
              captures: {
                1: {name: 'variable.other.link.underline.jsdoc'},
                2: {name: 'punctuation.separator.pipe.jsdoc'}
              },
              match: '\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?'
            },
            {
              captures: {
                1: {name: 'variable.other.description.jsdoc'},
                2: {name: 'punctuation.separator.pipe.jsdoc'}
              },
              match: '\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?'
            }
          ]
        }
      ]
    },
    'instanceof-expr': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      beginCaptures: {1: {name: 'keyword.operator.expression.instanceof.tsx'}},
      end: '(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s+instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))',
      patterns: [{include: '#type'}]
    },
    'interface-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.tsx'},
        4: {name: 'storage.type.interface.tsx'}
      },
      end: '(?<=\\})',
      name: 'meta.interface.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#class-or-interface-heritage'},
        {
          captures: {0: {name: 'entity.name.type.interface.tsx'}},
          match: '[_$[:alpha:]][_$[:alnum:]]*'
        },
        {include: '#type-parameters'},
        {include: '#class-or-interface-body'}
      ]
    },
    jsdoctype: {
      patterns: [
        {match: '\\G{(?:[^}*]|\\*[^/}])+$', name: 'invalid.illegal.type.jsdoc'},
        {
          begin: '\\G({)',
          beginCaptures: {
            0: {name: 'entity.name.type.instance.jsdoc'},
            1: {name: 'punctuation.definition.bracket.curly.begin.jsdoc'}
          },
          contentName: 'entity.name.type.instance.jsdoc',
          end: '((}))\\s*|(?=\\*/)',
          endCaptures: {
            1: {name: 'entity.name.type.instance.jsdoc'},
            2: {name: 'punctuation.definition.bracket.curly.end.jsdoc'}
          },
          patterns: [{include: '#brackets'}]
        }
      ]
    },
    jsx: {
      patterns: [
        {include: '#jsx-tag-without-attributes-in-expression'},
        {include: '#jsx-tag-in-expression'}
      ]
    },
    'jsx-children': {
      patterns: [
        {include: '#jsx-tag-without-attributes'},
        {include: '#jsx-tag'},
        {include: '#jsx-evaluated-code'},
        {include: '#jsx-entities'}
      ]
    },
    'jsx-entities': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.tsx'},
            3: {name: 'punctuation.definition.entity.tsx'}
          },
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          name: 'constant.character.entity.tsx'
        }
      ]
    },
    'jsx-evaluated-code': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.tsx'}},
      contentName: 'meta.embedded.expression.tsx',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.tsx'}},
      patterns: [{include: '#expression'}]
    },
    'jsx-string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.tsx'}},
      name: 'string.quoted.double.tsx',
      patterns: [{include: '#jsx-entities'}]
    },
    'jsx-string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.tsx'}},
      name: 'string.quoted.single.tsx',
      patterns: [{include: '#jsx-entities'}]
    },
    'jsx-tag': {
      begin:
        '(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))',
      end: '(/>)|(?:(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.end.tsx'},
        2: {name: 'punctuation.definition.tag.begin.tsx'},
        3: {name: 'entity.name.tag.namespace.tsx'},
        4: {name: 'punctuation.separator.namespace.tsx'},
        5: {name: 'entity.name.tag.tsx'},
        6: {name: 'support.class.component.tsx'},
        7: {name: 'punctuation.definition.tag.end.tsx'}
      },
      name: 'meta.tag.tsx',
      patterns: [
        {
          begin:
            '(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.tsx'},
            2: {name: 'entity.name.tag.namespace.tsx'},
            3: {name: 'punctuation.separator.namespace.tsx'},
            4: {name: 'entity.name.tag.tsx'},
            5: {name: 'support.class.component.tsx'}
          },
          end: '(?=[/]?>)',
          patterns: [
            {include: '#comment'},
            {include: '#type-arguments'},
            {include: '#jsx-tag-attributes'}
          ]
        },
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.tsx'}},
          contentName: 'meta.jsx.children.tsx',
          end: '(?=</)',
          patterns: [{include: '#jsx-children'}]
        }
      ]
    },
    'jsx-tag-attribute-assignment': {
      match: '=(?=\\s*(?:\'|"|{|/\\*|//|\\n))',
      name: 'keyword.operator.assignment.tsx'
    },
    'jsx-tag-attribute-name': {
      captures: {
        1: {name: 'entity.other.attribute-name.namespace.tsx'},
        2: {name: 'punctuation.separator.namespace.tsx'},
        3: {name: 'entity.other.attribute-name.tsx'}
      },
      match:
        '(?x)\n  \\s*\n  (?:([_$[:alpha:]][-_$[:alnum:].]*)(:))?\n  ([_$[:alpha:]][-_$[:alnum:]]*)\n  (?=\\s|=|/?>|/\\*|//)'
    },
    'jsx-tag-attributes': {
      begin: '\\s+',
      end: '(?=[/]?>)',
      name: 'meta.tag.attributes.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#jsx-tag-attribute-name'},
        {include: '#jsx-tag-attribute-assignment'},
        {include: '#jsx-string-double-quoted'},
        {include: '#jsx-string-single-quoted'},
        {include: '#jsx-evaluated-code'},
        {include: '#jsx-tag-attributes-illegal'}
      ]
    },
    'jsx-tag-attributes-illegal': {
      match: '\\S+',
      name: 'invalid.illegal.attribute.tsx'
    },
    'jsx-tag-in-expression': {
      begin:
        '(?x)\n  (?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*\n  (?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,)) # look ahead is not type parameter of arrow\n  (?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))',
      end: '(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))',
      patterns: [{include: '#jsx-tag'}]
    },
    'jsx-tag-without-attributes': {
      begin:
        '(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.tsx'},
        2: {name: 'entity.name.tag.namespace.tsx'},
        3: {name: 'punctuation.separator.namespace.tsx'},
        4: {name: 'entity.name.tag.tsx'},
        5: {name: 'support.class.component.tsx'},
        6: {name: 'punctuation.definition.tag.end.tsx'}
      },
      contentName: 'meta.jsx.children.tsx',
      end: '(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.begin.tsx'},
        2: {name: 'entity.name.tag.namespace.tsx'},
        3: {name: 'punctuation.separator.namespace.tsx'},
        4: {name: 'entity.name.tag.tsx'},
        5: {name: 'support.class.component.tsx'},
        6: {name: 'punctuation.definition.tag.end.tsx'}
      },
      name: 'meta.tag.without-attributes.tsx',
      patterns: [{include: '#jsx-children'}]
    },
    'jsx-tag-without-attributes-in-expression': {
      begin:
        '(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))',
      end: '(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))',
      patterns: [{include: '#jsx-tag-without-attributes'}]
    },
    label: {
      patterns: [
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)',
          beginCaptures: {
            1: {name: 'entity.name.label.tsx'},
            2: {name: 'punctuation.separator.label.tsx'}
          },
          end: '(?<=\\})',
          patterns: [{include: '#decl-block'}]
        },
        {
          captures: {
            1: {name: 'entity.name.label.tsx'},
            2: {name: 'punctuation.separator.label.tsx'}
          },
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)'
        }
      ]
    },
    literal: {
      patterns: [
        {include: '#numeric-literal'},
        {include: '#boolean-literal'},
        {include: '#null-literal'},
        {include: '#undefined-literal'},
        {include: '#numericConstant-literal'},
        {include: '#array-literal'},
        {include: '#this-literal'},
        {include: '#super-literal'}
      ]
    },
    'method-declaration': {
      patterns: [
        {
          begin:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          beginCaptures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'storage.modifier.tsx'},
            4: {name: 'storage.modifier.async.tsx'},
            5: {name: 'storage.type.tsx'}
          },
          end: '(?=\\}|;|,|$)|(?<=\\})',
          name: 'meta.method.declaration.tsx',
          patterns: [
            {include: '#method-declaration-name'},
            {include: '#function-body'}
          ]
        },
        {
          begin:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])',
          beginCaptures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'storage.modifier.tsx'},
            4: {name: 'storage.modifier.async.tsx'},
            5: {name: 'keyword.operator.new.tsx'},
            6: {name: 'keyword.generator.asterisk.tsx'}
          },
          end: '(?=\\}|;|,|$)|(?<=\\})',
          name: 'meta.method.declaration.tsx',
          patterns: [
            {include: '#method-declaration-name'},
            {include: '#function-body'}
          ]
        },
        {
          begin:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])',
          beginCaptures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'storage.modifier.tsx'},
            4: {name: 'storage.modifier.async.tsx'},
            5: {name: 'storage.type.property.tsx'},
            6: {name: 'keyword.generator.asterisk.tsx'}
          },
          end: '(?=\\}|;|,|$)|(?<=\\})',
          name: 'meta.method.declaration.tsx',
          patterns: [
            {include: '#method-declaration-name'},
            {include: '#function-body'}
          ]
        }
      ]
    },
    'method-declaration-name': {
      begin:
        '(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])',
      end: '(?=\\(|\\<)',
      patterns: [
        {include: '#string'},
        {include: '#array-literal'},
        {include: '#numeric-literal'},
        {
          match: '[_$[:alpha:]][_$[:alnum:]]*',
          name: 'meta.definition.method.tsx entity.name.function.tsx'
        },
        {match: '\\?', name: 'keyword.operator.optional.tsx'}
      ]
    },
    'namespace-declaration': {
      begin:
        '(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]"\'`]))',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.type.namespace.tsx'}
      },
      end: '(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
      name: 'meta.namespace.declaration.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.type.module.tsx'
        },
        {include: '#punctuation-accessor'},
        {include: '#decl-block'}
      ]
    },
    'new-expr': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      beginCaptures: {1: {name: 'keyword.operator.new.tsx'}},
      end: '(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))',
      name: 'new.expr.tsx',
      patterns: [{include: '#expression'}]
    },
    'null-literal': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'constant.language.null.tsx'
    },
    'numeric-literal': {
      patterns: [
        {
          captures: {1: {name: 'storage.type.numeric.bigint.tsx'}},
          match: '\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.hex.tsx'
        },
        {
          captures: {1: {name: 'storage.type.numeric.bigint.tsx'}},
          match: '\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.binary.tsx'
        },
        {
          captures: {1: {name: 'storage.type.numeric.bigint.tsx'}},
          match: '\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.octal.tsx'
        },
        {
          captures: {
            0: {name: 'constant.numeric.decimal.tsx'},
            1: {name: 'meta.delimiter.decimal.period.tsx'},
            10: {name: 'meta.delimiter.decimal.period.tsx'},
            11: {name: 'storage.type.numeric.bigint.tsx'},
            12: {name: 'meta.delimiter.decimal.period.tsx'},
            13: {name: 'storage.type.numeric.bigint.tsx'},
            14: {name: 'storage.type.numeric.bigint.tsx'},
            2: {name: 'storage.type.numeric.bigint.tsx'},
            3: {name: 'meta.delimiter.decimal.period.tsx'},
            4: {name: 'storage.type.numeric.bigint.tsx'},
            5: {name: 'meta.delimiter.decimal.period.tsx'},
            6: {name: 'storage.type.numeric.bigint.tsx'},
            7: {name: 'storage.type.numeric.bigint.tsx'},
            8: {name: 'meta.delimiter.decimal.period.tsx'},
            9: {name: 'storage.type.numeric.bigint.tsx'}
          },
          match:
            '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)'
        }
      ]
    },
    'numericConstant-literal': {
      patterns: [
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'constant.language.nan.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'constant.language.infinity.tsx'
        }
      ]
    },
    'object-binding-element': {
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
          end: '(?=,|\\})',
          patterns: [
            {include: '#object-binding-element-propertyName'},
            {include: '#binding-element'}
          ]
        },
        {include: '#object-binding-pattern'},
        {include: '#destructuring-variable-rest'},
        {include: '#variable-initializer'},
        {include: '#punctuation-comma'}
      ]
    },
    'object-binding-element-const': {
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
          end: '(?=,|\\})',
          patterns: [
            {include: '#object-binding-element-propertyName'},
            {include: '#binding-element-const'}
          ]
        },
        {include: '#object-binding-pattern-const'},
        {include: '#destructuring-variable-rest-const'},
        {include: '#variable-initializer'},
        {include: '#punctuation-comma'}
      ]
    },
    'object-binding-element-propertyName': {
      begin:
        '(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
      end: '(:)',
      endCaptures: {0: {name: 'punctuation.destructuring.tsx'}},
      patterns: [
        {include: '#string'},
        {include: '#array-literal'},
        {include: '#numeric-literal'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'variable.object.property.tsx'
        }
      ]
    },
    'object-binding-pattern': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      patterns: [{include: '#object-binding-element'}]
    },
    'object-binding-pattern-const': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      patterns: [{include: '#object-binding-element-const'}]
    },
    'object-identifiers': {
      patterns: [
        {
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))',
          name: 'support.class.tsx'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'variable.other.constant.object.property.tsx'},
            4: {name: 'variable.other.object.property.tsx'}
          },
          match:
            '(?x)(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:\n  (\\#?[[:upper:]][_$[:digit:][:upper:]]*) |\n  (\\#?[_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          captures: {
            1: {name: 'variable.other.constant.object.tsx'},
            2: {name: 'variable.other.object.tsx'}
          },
          match:
            '(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)'
        }
      ]
    },
    'object-literal': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.objectliteral.tsx',
      patterns: [{include: '#object-member'}]
    },
    'object-literal-method-declaration': {
      begin:
        '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])',
      beginCaptures: {
        1: {name: 'storage.modifier.async.tsx'},
        2: {name: 'storage.type.property.tsx'},
        3: {name: 'keyword.generator.asterisk.tsx'}
      },
      end: '(?=\\}|;|,)|(?<=\\})',
      name: 'meta.method.declaration.tsx',
      patterns: [
        {include: '#method-declaration-name'},
        {include: '#function-body'},
        {
          begin:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])',
          beginCaptures: {
            1: {name: 'storage.modifier.async.tsx'},
            2: {name: 'storage.type.property.tsx'},
            3: {name: 'keyword.generator.asterisk.tsx'}
          },
          end: '(?=\\(|\\<)',
          patterns: [{include: '#method-declaration-name'}]
        }
      ]
    },
    'object-member': {
      patterns: [
        {include: '#comment'},
        {include: '#object-literal-method-declaration'},
        {
          begin: '(?=\\[)',
          end: '(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))',
          name: 'meta.object.member.tsx meta.object-literal.key.tsx',
          patterns: [{include: '#comment'}, {include: '#array-literal'}]
        },
        {
          begin: '(?=[\\\'\\"\\`])',
          end: '(?=:)|((?<=[\\\'\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))',
          name: 'meta.object.member.tsx meta.object-literal.key.tsx',
          patterns: [{include: '#comment'}, {include: '#string'}]
        },
        {
          begin:
            '(?x)(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)))',
          end: '(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))',
          name: 'meta.object.member.tsx meta.object-literal.key.tsx',
          patterns: [{include: '#comment'}, {include: '#numeric-literal'}]
        },
        {
          begin: '(?<=[\\]\\\'\\"\\`])(?=\\s*[\\(\\<])',
          end: '(?=\\}|;|,)|(?<=\\})',
          name: 'meta.method.declaration.tsx',
          patterns: [{include: '#function-body'}]
        },
        {
          captures: {
            0: {name: 'meta.object-literal.key.tsx'},
            1: {name: 'constant.numeric.decimal.tsx'}
          },
          match:
            '(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)',
          name: 'meta.object.member.tsx'
        },
        {
          captures: {
            0: {name: 'meta.object-literal.key.tsx'},
            1: {name: 'entity.name.function.tsx'}
          },
          match:
            '(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))',
          name: 'meta.object.member.tsx'
        },
        {
          captures: {0: {name: 'meta.object-literal.key.tsx'}},
          match:
            '(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)',
          name: 'meta.object.member.tsx'
        },
        {
          begin: '\\.\\.\\.',
          beginCaptures: {0: {name: 'keyword.operator.spread.tsx'}},
          end: '(?=,|\\})',
          name: 'meta.object.member.tsx',
          patterns: [{include: '#expression'}]
        },
        {
          captures: {1: {name: 'variable.other.readwrite.tsx'}},
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)',
          name: 'meta.object.member.tsx'
        },
        {
          captures: {
            1: {name: 'keyword.control.as.tsx'},
            2: {name: 'storage.modifier.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))',
          name: 'meta.object.member.tsx'
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+',
          beginCaptures: {
            1: {name: 'keyword.control.as.tsx'},
            2: {name: 'keyword.control.satisfies.tsx'}
          },
          end: '(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))',
          name: 'meta.object.member.tsx',
          patterns: [{include: '#type'}]
        },
        {
          begin: '(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)',
          end: '(?=,|\\}|$|\\/\\/|\\/\\*)',
          name: 'meta.object.member.tsx',
          patterns: [{include: '#expression'}]
        },
        {
          begin: ':',
          beginCaptures: {
            0: {
              name: 'meta.object-literal.key.tsx punctuation.separator.key-value.tsx'
            }
          },
          end: '(?=,|\\})',
          name: 'meta.object.member.tsx',
          patterns: [
            {
              begin:
                '(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))',
              beginCaptures: {1: {name: 'storage.modifier.async.tsx'}},
              end: '(?<=\\))',
              patterns: [
                {include: '#type-parameters'},
                {
                  begin: '\\(',
                  beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
                  end: '\\)',
                  endCaptures: {0: {name: 'meta.brace.round.tsx'}},
                  patterns: [
                    {include: '#expression-inside-possibly-arrow-parens'}
                  ]
                }
              ]
            },
            {
              begin:
                '(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))',
              beginCaptures: {
                1: {name: 'storage.modifier.async.tsx'},
                2: {name: 'meta.brace.round.tsx'}
              },
              end: '\\)',
              endCaptures: {0: {name: 'meta.brace.round.tsx'}},
              patterns: [{include: '#expression-inside-possibly-arrow-parens'}]
            },
            {
              begin: '(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)',
              beginCaptures: {1: {name: 'storage.modifier.async.tsx'}},
              end: '(?<=\\>)',
              patterns: [{include: '#type-parameters'}]
            },
            {
              begin:
                '(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))',
              beginCaptures: {1: {name: 'meta.brace.round.tsx'}},
              end: '\\)',
              endCaptures: {0: {name: 'meta.brace.round.tsx'}},
              patterns: [{include: '#expression-inside-possibly-arrow-parens'}]
            },
            {include: '#possibly-arrow-return-type'},
            {include: '#expression'}
          ]
        },
        {include: '#punctuation-comma'},
        {include: '#decl-block'}
      ]
    },
    'parameter-array-binding-pattern': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\[)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.array.tsx'}
      },
      patterns: [
        {include: '#parameter-binding-element'},
        {include: '#punctuation-comma'}
      ]
    },
    'parameter-binding-element': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric-literal'},
        {include: '#regex'},
        {include: '#parameter-object-binding-pattern'},
        {include: '#parameter-array-binding-pattern'},
        {include: '#destructuring-parameter-rest'},
        {include: '#variable-initializer'}
      ]
    },
    'parameter-name': {
      patterns: [
        {
          captures: {1: {name: 'storage.modifier.tsx'}},
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'entity.name.function.tsx variable.language.this.tsx'},
            4: {name: 'entity.name.function.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'variable.parameter.tsx variable.language.this.tsx'},
            4: {name: 'variable.parameter.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)'
        }
      ]
    },
    'parameter-object-binding-element': {
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?x)(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
          end: '(?=,|\\})',
          patterns: [
            {include: '#object-binding-element-propertyName'},
            {include: '#parameter-binding-element'},
            {include: '#paren-expression'}
          ]
        },
        {include: '#parameter-object-binding-pattern'},
        {include: '#destructuring-parameter-rest'},
        {include: '#variable-initializer'},
        {include: '#punctuation-comma'}
      ]
    },
    'parameter-object-binding-pattern': {
      begin: '(?:(\\.\\.\\.)\\s*)?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.operator.rest.tsx'},
        2: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.binding-pattern.object.tsx'}
      },
      patterns: [{include: '#parameter-object-binding-element'}]
    },
    'parameter-type-annotation': {
      patterns: [
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
          end: '(?=[,)])|(?==[^>])',
          name: 'meta.type.annotation.tsx',
          patterns: [{include: '#type'}]
        }
      ]
    },
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
      patterns: [{include: '#expression'}]
    },
    'paren-expression-possibly-arrow': {
      patterns: [
        {
          begin:
            '(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))',
          beginCaptures: {1: {name: 'storage.modifier.async.tsx'}},
          end: '(?<=\\))',
          patterns: [
            {include: '#paren-expression-possibly-arrow-with-typeparameters'}
          ]
        },
        {
          begin:
            '(?<=[(=,]|=>|^return|[^\\._$[:alnum:]]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)',
          beginCaptures: {1: {name: 'storage.modifier.async.tsx'}},
          end: '(?<=\\))',
          patterns: [
            {include: '#paren-expression-possibly-arrow-with-typeparameters'}
          ]
        },
        {include: '#possibly-arrow-return-type'}
      ]
    },
    'paren-expression-possibly-arrow-with-typeparameters': {
      patterns: [
        {include: '#type-parameters'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
          end: '\\)',
          endCaptures: {0: {name: 'meta.brace.round.tsx'}},
          patterns: [{include: '#expression-inside-possibly-arrow-parens'}]
        }
      ]
    },
    'possibly-arrow-return-type': {
      begin:
        '(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)',
      beginCaptures: {
        1: {
          name: 'meta.arrow.tsx meta.return.type.arrow.tsx keyword.operator.type.annotation.tsx'
        }
      },
      contentName: 'meta.arrow.tsx meta.return.type.arrow.tsx',
      end: '(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))',
      patterns: [{include: '#arrow-return-type-body'}]
    },
    'property-accessor': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'storage.type.property.tsx'
    },
    'punctuation-accessor': {
      captures: {
        1: {name: 'punctuation.accessor.tsx'},
        2: {name: 'punctuation.accessor.optional.tsx'}
      },
      match: '(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))'
    },
    'punctuation-comma': {match: ',', name: 'punctuation.separator.comma.tsx'},
    'punctuation-semicolon': {
      match: ';',
      name: 'punctuation.terminator.statement.tsx'
    },
    'qstring-double': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
      end: '(")|((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.tsx'},
        2: {name: 'invalid.illegal.newline.tsx'}
      },
      name: 'string.quoted.double.tsx',
      patterns: [{include: '#string-character-escape'}]
    },
    'qstring-single': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
      end: "(\\')|((?:[^\\\\\\n])$)",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.tsx'},
        2: {name: 'invalid.illegal.newline.tsx'}
      },
      name: 'string.quoted.single.tsx',
      patterns: [{include: '#string-character-escape'}]
    },
    regex: {
      patterns: [
        {
          begin:
            '(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.tsx'}},
          end: '(/)([dgimsuvy]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.tsx'},
            2: {name: 'keyword.other.tsx'}
          },
          name: 'string.regexp.tsx',
          patterns: [{include: '#regexp'}]
        },
        {
          begin:
            '((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
          end: '(/)([dgimsuvy]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.tsx'},
            2: {name: 'keyword.other.tsx'}
          },
          name: 'string.regexp.tsx',
          patterns: [{include: '#regexp'}]
        }
      ]
    },
    'regex-character-class': {
      patterns: [
        {
          match: '\\\\[wWsSdDtrnvf]|\\.',
          name: 'constant.other.character-class.regexp'
        },
        {
          match: '\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})',
          name: 'constant.character.numeric.regexp'
        },
        {match: '\\\\c[A-Z]', name: 'constant.character.control.regexp'},
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    regexp: {
      patterns: [
        {match: '\\\\[bB]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
        {
          captures: {
            0: {name: 'keyword.other.back-reference.regexp'},
            1: {name: 'variable.other.regexp'}
          },
          match: '\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>'
        },
        {
          match: '[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
          name: 'keyword.operator.quantifier.regexp'
        },
        {match: '\\|', name: 'keyword.operator.or.regexp'},
        {
          begin: '(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.regexp'},
            2: {name: 'punctuation.definition.group.assertion.regexp'},
            3: {name: 'meta.assertion.look-ahead.regexp'},
            4: {name: 'meta.assertion.negative-look-ahead.regexp'},
            5: {name: 'meta.assertion.look-behind.regexp'},
            6: {name: 'meta.assertion.negative-look-behind.regexp'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.assertion.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.regexp'},
            1: {name: 'punctuation.definition.group.no-capture.regexp'},
            2: {name: 'variable.other.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'},
            2: {name: 'keyword.operator.negation.regexp'}
          },
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'}
          },
          name: 'constant.other.character-class.set.regexp',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.numeric.regexp'},
                2: {name: 'constant.character.control.regexp'},
                3: {name: 'constant.character.escape.backslash.regexp'},
                4: {name: 'constant.character.numeric.regexp'},
                5: {name: 'constant.character.control.regexp'},
                6: {name: 'constant.character.escape.backslash.regexp'}
              },
              match:
                '(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))',
              name: 'constant.other.character-class.range.regexp'
            },
            {include: '#regex-character-class'}
          ]
        },
        {include: '#regex-character-class'}
      ]
    },
    'return-type': {
      patterns: [
        {
          begin: '(?<=\\))\\s*(:)(?=\\s*\\S)',
          beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
          end: '(?<![:|&])(?=$|^|[{};,]|//)',
          name: 'meta.return.type.tsx',
          patterns: [{include: '#return-type-core'}]
        },
        {
          begin: '(?<=\\))\\s*(:)',
          beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
          end: '(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))',
          name: 'meta.return.type.tsx',
          patterns: [{include: '#return-type-core'}]
        }
      ]
    },
    'return-type-core': {
      patterns: [
        {include: '#comment'},
        {
          begin: '(?<=[:|&])(?=\\s*\\{)',
          end: '(?<=\\})',
          patterns: [{include: '#type-object'}]
        },
        {include: '#type-predicate-operator'},
        {include: '#type'}
      ]
    },
    shebang: {
      captures: {1: {name: 'punctuation.definition.comment.tsx'}},
      match: '\\A(#!).*(?=$)',
      name: 'comment.line.shebang.tsx'
    },
    'single-line-comment-consuming-line-ending': {
      begin: '(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.tsx'},
        2: {name: 'comment.line.double-slash.tsx'},
        3: {name: 'punctuation.definition.comment.tsx'},
        4: {name: 'storage.type.internaldeclaration.tsx'},
        5: {name: 'punctuation.decorator.internaldeclaration.tsx'}
      },
      contentName: 'comment.line.double-slash.tsx',
      end: '(?=^)'
    },
    statements: {
      patterns: [
        {include: '#declaration'},
        {include: '#control-statement'},
        {include: '#after-operator-block-as-object-literal'},
        {include: '#decl-block'},
        {include: '#label'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'},
        {include: '#string'},
        {include: '#comment'}
      ]
    },
    string: {
      patterns: [
        {include: '#qstring-single'},
        {include: '#qstring-double'},
        {include: '#template'}
      ]
    },
    'string-character-escape': {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.tsx'
    },
    'super-literal': {
      match: '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)',
      name: 'variable.language.super.tsx'
    },
    'support-function-call-identifiers': {
      patterns: [
        {include: '#literal'},
        {include: '#support-objects'},
        {include: '#object-identifiers'},
        {include: '#punctuation-accessor'},
        {
          match:
            '(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\"\\\'\\`]))',
          name: 'keyword.operator.expression.import.tsx'
        }
      ]
    },
    'support-objects': {
      patterns: [
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)',
          name: 'variable.language.arguments.tsx'
        },
        {
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Array|ArrayBuffer|Atomics|BigInt|BigInt64Array|BigUint64Array|Boolean|DataView|Date|Float32Array\n  |Float64Array|Function|Generator|GeneratorFunction|Int8Array|Int16Array|Int32Array|Intl|Map|Number|Object|Proxy\n  |Reflect|RegExp|Set|SharedArrayBuffer|SIMD|String|Symbol|TypedArray\n  |Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|WeakMap|WeakSet)\\b(?!\\$)',
          name: 'support.class.builtin.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))((Eval|Internal|Range|Reference|Syntax|Type|URI)?Error)\\b(?!\\$)',
          name: 'support.class.error.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)',
          name: 'support.class.promise.tsx'
        },
        {
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(clear(Interval|Timeout)|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|\n  isFinite|isNaN|parseFloat|parseInt|require|set(Interval|Timeout)|super|unescape|uneval)(?=\\s*\\()',
          name: 'support.function.tsx'
        },
        {
          captures: {
            1: {name: 'support.constant.math.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.function.math.tsx'},
            5: {name: 'support.constant.property.math.tsx'}
          },
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Math)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:\n  (abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|\n  expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|\n  round|sign|sin|sinh|sqrt|tan|tanh|trunc)\n  |\n  (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.class.console.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.function.console.tsx'}
          },
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(console)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\n  assert|clear|count|debug|dir|error|group|groupCollapsed|groupEnd|info|log\n  |profile|profileEnd|table|time|timeEnd|timeStamp|trace|warn))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.constant.json.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.function.json.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(JSON)(?:\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(parse|stringify))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'keyword.control.import.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.variable.property.importmeta.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'keyword.operator.new.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.variable.property.target.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'support.variable.property.tsx'},
            4: {name: 'support.constant.tsx'}
          },
          match:
            '(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:\n  (?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())\n  |\n  (?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))'
        },
        {
          captures: {
            1: {name: 'support.variable.dom.tsx'},
            2: {name: 'support.class.dom.tsx'}
          },
          match:
            '(?x) (?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.)) \\b (?:\n  (document|event|navigator|performance|screen|window)\n  |\n  (AnalyserNode|ArrayBufferView|Attr|AudioBuffer|AudioBufferSourceNode|AudioContext|AudioDestinationNode|AudioListener\n  |AudioNode|AudioParam|BatteryManager|BeforeUnloadEvent|BiquadFilterNode|Blob|BufferSource|ByteString|CSS|CSSConditionRule\n  |CSSCounterStyleRule|CSSGroupingRule|CSSMatrix|CSSMediaRule|CSSPageRule|CSSPrimitiveValue|CSSRule|CSSRuleList|CSSStyleDeclaration\n  |CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSValue|CSSValueList|CanvasGradient|CanvasImageSource|CanvasPattern\n  |CanvasRenderingContext2D|ChannelMergerNode|ChannelSplitterNode|CharacterData|ChromeWorker|CloseEvent|Comment|CompositionEvent\n  |Console|ConvolverNode|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|CustomEvent|DOMError|DOMException\n  |DOMHighResTimeStamp|DOMImplementation|DOMString|DOMStringList|DOMStringMap|DOMTimeStamp|DOMTokenList|DataTransfer\n  |DataTransferItem|DataTransferItemList|DedicatedWorkerGlobalScope|DelayNode|DeviceProximityEvent|DirectoryEntry\n  |DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|Document|DocumentFragment|DocumentTouch|DocumentType|DragEvent\n  |DynamicsCompressorNode|Element|Entry|EntrySync|ErrorEvent|Event|EventListener|EventSource|EventTarget|FederatedCredential\n  |FetchEvent|File|FileEntry|FileEntrySync|FileException|FileList|FileReader|FileReaderSync|FileSystem|FileSystemSync\n  |FontFace|FormData|GainNode|Gamepad|GamepadButton|GamepadEvent|Geolocation|GlobalEventHandlers|HTMLAnchorElement\n  |HTMLAreaElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement\n  |HTMLCollection|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDialogElement|HTMLDivElement\n  |HTMLDocument|HTMLElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormControlsCollection|HTMLFormElement\n  |HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement\n  |HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMediaElement\n  |HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement\n  |HTMLOptionsCollection|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement\n  |HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement\n  |HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement\n  |HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement\n  |HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|HashChangeEvent|History|IDBCursor|IDBCursorWithValue|IDBDatabase\n  |IDBEnvironment|IDBFactory|IDBIndex|IDBKeyRange|IDBMutableFile|IDBObjectStore|IDBOpenDBRequest|IDBRequest|IDBTransaction\n  |IDBVersionChangeEvent|IIRFilterNode|IdentityManager|ImageBitmap|ImageBitmapFactories|ImageData|Index|InputDeviceCapabilities\n  |InputEvent|InstallEvent|InstallTrigger|KeyboardEvent|LinkStyle|LocalFileSystem|LocalFileSystemSync|Location|MIDIAccess\n  |MIDIConnectionEvent|MIDIInput|MIDIInputMap|MIDIOutputMap|MediaElementAudioSourceNode|MediaError|MediaKeyMessageEvent\n  |MediaKeySession|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeySystemConfiguration|MediaKeys|MediaRecorder|MediaStream\n  |MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessageChannel|MessageEvent|MessagePort|MouseEvent\n  |MutationObserver|MutationRecord|NamedNodeMap|Navigator|NavigatorConcurrentHardware|NavigatorGeolocation|NavigatorID\n  |NavigatorLanguage|NavigatorOnLine|Node|NodeFilter|NodeIterator|NodeList|NonDocumentTypeChildNode|Notification\n  |OfflineAudioCompletionEvent|OfflineAudioContext|OscillatorNode|PageTransitionEvent|PannerNode|ParentNode|PasswordCredential\n  |Path2D|PaymentAddress|PaymentRequest|PaymentResponse|Performance|PerformanceEntry|PerformanceFrameTiming|PerformanceMark\n  |PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList\n  |PerformanceResourceTiming|PerformanceTiming|PeriodicSyncEvent|PeriodicWave|Plugin|Point|PointerEvent|PopStateEvent\n  |PortCollection|Position|PositionError|PositionOptions|PresentationConnectionClosedEvent|PresentationConnectionList\n  |PresentationReceiver|ProcessingInstruction|ProgressEvent|PromiseRejectionEvent|PushEvent|PushRegistrationManager\n  |RTCCertificate|RTCConfiguration|RTCPeerConnection|RTCSessionDescriptionCallback|RTCStatsReport|RadioNodeList|RandomSource\n  |Range|ReadableByteStream|RenderingContext|SVGAElement|SVGAngle|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement\n  |SVGAnimateTransformElement|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength\n  |SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPoints|SVGAnimatedPreserveAspectRatio\n  |SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGAnimationElement|SVGCircleElement|SVGClipPathElement\n  |SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGEvent|SVGFilterElement|SVGFontElement\n  |SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement\n  |SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGradientElement|SVGHKernElement|SVGImageElement|SVGLength\n  |SVGLengthList|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMaskElement|SVGMatrix|SVGMissingGlyphElement\n  |SVGNumber|SVGNumberList|SVGPathElement|SVGPatternElement|SVGPoint|SVGPolygonElement|SVGPolylineElement|SVGPreserveAspectRatio\n  |SVGRadialGradientElement|SVGRect|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStringList\n  |SVGStylable|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTests|SVGTextElement\n  |SVGTextPositioningElement|SVGTitleElement|SVGTransform|SVGTransformList|SVGTransformable|SVGUseElement|SVGVKernElement\n  |SVGViewElement|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|ServiceWorkerState\n  |ShadowRoot|SharedWorker|SharedWorkerGlobalScope|SourceBufferList|StereoPannerNode|Storage|StorageEvent|StyleSheet\n  |StyleSheetList|SubtleCrypto|SyncEvent|Text|TextMetrics|TimeEvent|TimeRanges|Touch|TouchEvent|TouchList|Transferable\n  |TreeWalker|UIEvent|USVString|VRDisplayCapabilities|ValidityState|WaveShaperNode|WebGL|WebGLActiveInfo|WebGLBuffer\n  |WebGLContextEvent|WebGLFramebuffer|WebGLProgram|WebGLRenderbuffer|WebGLRenderingContext|WebGLShader|WebGLShaderPrecisionFormat\n  |WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES\n  |WebSocket|WebSockets|WebVTT|WheelEvent|Window|WindowBase64|WindowEventHandlers|WindowTimers|Worker|WorkerGlobalScope\n  |WorkerLocation|WorkerNavigator|XMLHttpRequest|XMLHttpRequestEventTarget|XMLSerializer|XPathExpression|XPathResult\n  |XSLTProcessor))\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'support.constant.dom.tsx'},
            4: {name: 'support.variable.property.dom.tsx'}
          },
          match:
            '(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s* (?:\n  (ATTRIBUTE_NODE|CDATA_SECTION_NODE|COMMENT_NODE|DOCUMENT_FRAGMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE\n  |DOMSTRING_SIZE_ERR|ELEMENT_NODE|ENTITY_NODE|ENTITY_REFERENCE_NODE|HIERARCHY_REQUEST_ERR|INDEX_SIZE_ERR\n  |INUSE_ATTRIBUTE_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR\n  |NOT_SUPPORTED_ERR|NOTATION_NODE|PROCESSING_INSTRUCTION_NODE|TEXT_NODE|WRONG_DOCUMENT_ERR)\n  |\n  (_content|[xyz]|abbr|above|accept|acceptCharset|accessKey|action|align|[av]Link(?:color)?|all|alt|anchors|appCodeName\n  |appCore|applets|appMinorVersion|appName|appVersion|archive|areas|arguments|attributes|availHeight|availLeft|availTop\n  |availWidth|axis|background|backgroundColor|backgroundImage|below|bgColor|body|border|borderBottomWidth|borderColor\n  |borderLeftWidth|borderRightWidth|borderStyle|borderTopWidth|borderWidth|bottom|bufferDepth|callee|caller|caption\n  |cellPadding|cells|cellSpacing|ch|characterSet|charset|checked|childNodes|chOff|cite|classes|className|clear\n  |clientInformation|clip|clipBoardData|closed|code|codeBase|codeType|color|colorDepth|cols|colSpan|compact|complete\n  |components|content|controllers|cookie|cookieEnabled|cords|cpuClass|crypto|current|data|dateTime|declare|defaultCharset\n  |defaultChecked|defaultSelected|defaultStatus|defaultValue|defaultView|defer|description|dialogArguments|dialogHeight\n  |dialogLeft|dialogTop|dialogWidth|dir|directories|disabled|display|docmain|doctype|documentElement|elements|embeds\n  |enabledPlugin|encoding|enctype|entities|event|expando|external|face|fgColor|filename|firstChild|fontFamily|fontSize\n  |fontWeight|form|formName|forms|frame|frameBorder|frameElement|frames|hasFocus|hash|headers|height|history|host\n  |hostname|href|hreflang|hspace|htmlFor|httpEquiv|id|ids|ignoreCase|images|implementation|index|innerHeight|innerWidth\n  |input|isMap|label|lang|language|lastChild|lastIndex|lastMatch|lastModified|lastParen|layer[sXY]|left|leftContext\n  |lineHeight|link|linkColor|links|listStyleType|localName|location|locationbar|longDesc|lowsrc|lowSrc|marginBottom\n  |marginHeight|marginLeft|marginRight|marginTop|marginWidth|maxLength|media|menubar|method|mimeTypes|multiline|multiple\n  |name|nameProp|namespaces|namespaceURI|next|nextSibling|nodeName|nodeType|nodeValue|noHref|noResize|noShade|notationName\n  |notations|noWrap|object|offscreenBuffering|onLine|onreadystatechange|opener|opsProfile|options|oscpu|outerHeight\n  |outerWidth|ownerDocument|paddingBottom|paddingLeft|paddingRight|paddingTop|page[XY]|page[XY]Offset|parent|parentLayer\n  |parentNode|parentWindow|pathname|personalbar|pixelDepth|pkcs11|platform|plugins|port|prefix|previous|previousDibling\n  |product|productSub|profile|profileend|prompt|prompter|protocol|publicId|readOnly|readyState|referrer|rel|responseText\n  |responseXML|rev|right|rightContext|rowIndex|rows|rowSpan|rules|scheme|scope|screen[XY]|screenLeft|screenTop|scripts\n  |scrollbars|scrolling|sectionRowIndex|security|securityPolicy|selected|selectedIndex|selection|self|shape|siblingAbove\n  |siblingBelow|size|source|specified|standby|start|status|statusbar|statusText|style|styleSheets|suffixes|summary\n  |systemId|systemLanguage|tagName|tags|target|tBodies|text|textAlign|textDecoration|textIndent|textTransform|tFoot|tHead\n  |title|toolbar|top|type|undefined|uniqueID|updateInterval|URL|URLUnencoded|useMap|userAgent|userLanguage|userProfile\n  |vAlign|value|valueType|vendor|vendorSub|version|visibility|vspace|whiteSpace|width|X[MS]LDocument|zIndex))\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\()'
        },
        {
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Buffer|EventEmitter|Server|Pipe|Socket|REPLServer|ReadStream|WriteStream|Stream\n  |Inflate|Deflate|InflateRaw|DeflateRaw|GZip|GUnzip|Unzip|Zip)\\b(?!\\$)',
          name: 'support.class.node.tsx'
        },
        {
          captures: {
            1: {name: 'support.variable.object.process.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {name: 'support.variable.property.process.tsx'},
            5: {name: 'support.function.process.tsx'}
          },
          match:
            '(?x)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(process)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?:\n  (arch|argv|config|connected|env|execArgv|execPath|exitCode|mainModule|pid|platform|release|stderr|stdin|stdout|title|version|versions)\n  |\n  (abort|chdir|cwd|disconnect|exit|[sg]ete?[gu]id|send|[sg]etgroups|initgroups|kill|memoryUsage|nextTick|umask|uptime|hrtime)\n))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.type.object.module.tsx'},
            2: {name: 'support.type.object.module.tsx'},
            3: {name: 'punctuation.accessor.tsx'},
            4: {name: 'punctuation.accessor.optional.tsx'},
            5: {name: 'support.type.object.module.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(global|GLOBAL|root|__dirname|__filename)\\b(?!\\$)',
          name: 'support.variable.object.node.tsx'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'punctuation.accessor.optional.tsx'},
            3: {name: 'support.function.event-handler.tsx'},
            4: {name: 'support.function.tsx'},
            5: {name: 'support.function.dom.tsx'},
            6: {name: 'support.function.promise.tsx'}
          },
          match:
            '(?x) (?:(\\.)|(\\?\\.(?!\\s*[[:digit:]]))) \\s*\n(?:\n (on(?:Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\n   Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\n   Before(?:cut|deactivate|unload|update|paste|print|editfocus|activate)|\n   Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\n   Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\n   Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\n   Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\n   Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\n ) |\n (shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\n   scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|\n   sup|sub|substr|substring|splice|split|send|set(?:Milliseconds|Seconds|Minutes|Hours|\n   Month|Year|FullYear|Date|UTC(?:Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\n   Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|\n   savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|\n   contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|\n   createEventObject|to(?:GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\n   test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\n   untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|\n   print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|\n   fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|\n   forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|\n   abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|\n   releaseCapture|releaseEvents|go|get(?:Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\n   Time|Date|TimezoneOffset|UTC(?:Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\n   Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|\n   moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back\n ) |\n (acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|\n   appendChild|appendData|before|blur|canPlayType|captureStream|\n   caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|\n   cloneContents|cloneNode|cloneRange|close|closest|collapse|\n   compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|\n   convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|\n   createAttributeNS|createCaption|createCDATASection|createComment|\n   createContextualFragment|createDocument|createDocumentFragment|\n   createDocumentType|createElement|createElementNS|createEntityReference|\n   createEvent|createExpression|createHTMLDocument|createNodeIterator|\n   createNSResolver|createProcessingInstruction|createRange|createShadowRoot|\n   createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|\n   deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|\n   deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|\n   enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|\n   exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|\n   getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|\n   getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|\n   getClientRects|getContext|getDestinationInsertionPoints|getElementById|\n   getElementsByClassName|getElementsByName|getElementsByTagName|\n   getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|\n   getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|\n   hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|\n   insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|\n   insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|\n   isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|\n   lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|\n   moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|\n   parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|\n   previousSibling|probablySupportsContext|queryCommandEnabled|\n   queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|\n   querySelector|querySelectorAll|registerContentHandler|registerElement|\n   registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|\n   removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|\n   removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|\n   requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|\n   scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|\n   setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|\n   setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|\n   setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|\n   slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|\n   submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|\n   toDataURL|toggle|toString|values|write|writeln\n ) |\n (all|catch|finally|race|reject|resolve|then\n )\n)(?=\\s*\\()'
        }
      ]
    },
    'switch-statement': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'switch-statement.expr.tsx',
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.control.switch.tsx'},
            2: {name: 'meta.brace.round.tsx'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'meta.brace.round.tsx'}},
          name: 'switch-expression.expr.tsx',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
          end: '(?=\\})',
          name: 'switch-block.expr.tsx',
          patterns: [
            {
              begin:
                '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
              beginCaptures: {1: {name: 'keyword.control.switch.tsx'}},
              end: '(?=:)',
              name: 'case-clause.expr.tsx',
              patterns: [{include: '#expression'}]
            },
            {
              begin: '(:)\\s*(\\{)',
              beginCaptures: {
                1: {
                  name: 'case-clause.expr.tsx punctuation.definition.section.case-statement.tsx'
                },
                2: {name: 'meta.block.tsx punctuation.definition.block.tsx'}
              },
              contentName: 'meta.block.tsx',
              end: '\\}',
              endCaptures: {
                0: {name: 'meta.block.tsx punctuation.definition.block.tsx'}
              },
              patterns: [{include: '#statements'}]
            },
            {
              captures: {
                0: {
                  name: 'case-clause.expr.tsx punctuation.definition.section.case-statement.tsx'
                }
              },
              match: '(:)'
            },
            {include: '#statements'}
          ]
        }
      ]
    },
    template: {
      patterns: [
        {include: '#template-call'},
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)?(`)',
          beginCaptures: {
            1: {name: 'entity.name.function.tagged-template.tsx'},
            2: {
              name: 'string.template.tsx punctuation.definition.string.template.begin.tsx'
            }
          },
          contentName: 'string.template.tsx',
          end: '`',
          endCaptures: {
            0: {
              name: 'string.template.tsx punctuation.definition.string.template.end.tsx'
            }
          },
          patterns: [
            {include: '#template-substitution-element'},
            {include: '#string-character-escape'}
          ]
        }
      ]
    },
    'template-call': {
      patterns: [
        {
          begin:
            '(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)',
          end: '(?=`)',
          patterns: [
            {
              begin:
                '(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*))',
              end: '(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)',
              patterns: [
                {include: '#support-function-call-identifiers'},
                {
                  match: '([_$[:alpha:]][_$[:alnum:]]*)',
                  name: 'entity.name.function.tagged-template.tsx'
                }
              ]
            },
            {include: '#type-arguments'}
          ]
        },
        {
          begin:
            '([_$[:alpha:]][_$[:alnum:]]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)',
          beginCaptures: {
            1: {name: 'entity.name.function.tagged-template.tsx'}
          },
          end: '(?=`)',
          patterns: [{include: '#type-arguments'}]
        }
      ]
    },
    'template-substitution-element': {
      begin: '\\$\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.tsx'}
      },
      contentName: 'meta.embedded.line.tsx',
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.tsx'}
      },
      name: 'meta.template.expression.tsx',
      patterns: [{include: '#expression'}]
    },
    'template-type': {
      patterns: [
        {include: '#template-call'},
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)?(`)',
          beginCaptures: {
            1: {name: 'entity.name.function.tagged-template.tsx'},
            2: {
              name: 'string.template.tsx punctuation.definition.string.template.begin.tsx'
            }
          },
          contentName: 'string.template.tsx',
          end: '`',
          endCaptures: {
            0: {
              name: 'string.template.tsx punctuation.definition.string.template.end.tsx'
            }
          },
          patterns: [
            {include: '#template-type-substitution-element'},
            {include: '#string-character-escape'}
          ]
        }
      ]
    },
    'template-type-substitution-element': {
      begin: '\\$\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.tsx'}
      },
      contentName: 'meta.embedded.line.tsx',
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.tsx'}
      },
      name: 'meta.template.expression.tsx',
      patterns: [{include: '#type'}]
    },
    'ternary-expression': {
      begin: '(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)',
      beginCaptures: {1: {name: 'keyword.operator.ternary.tsx'}},
      end: '\\s*(:)',
      endCaptures: {1: {name: 'keyword.operator.ternary.tsx'}},
      patterns: [{include: '#expression'}]
    },
    'this-literal': {
      match: '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)',
      name: 'variable.language.this.tsx'
    },
    type: {
      patterns: [
        {include: '#comment'},
        {include: '#type-string'},
        {include: '#numeric-literal'},
        {include: '#type-primitive'},
        {include: '#type-builtin-literals'},
        {include: '#type-parameters'},
        {include: '#type-tuple'},
        {include: '#type-object'},
        {include: '#type-operators'},
        {include: '#type-conditional'},
        {include: '#type-fn-type-parameters'},
        {include: '#type-paren-or-function-parameters'},
        {include: '#type-function-return-type'},
        {
          captures: {1: {name: 'storage.modifier.tsx'}},
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*'
        },
        {include: '#type-name'}
      ]
    },
    'type-alias-declaration': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.type.type.tsx'},
        4: {name: 'entity.name.type.alias.tsx'}
      },
      end: '(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
      name: 'meta.type.declaration.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#type-parameters'},
        {
          begin: '(=)\\s*(intrinsic)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          beginCaptures: {
            1: {name: 'keyword.operator.assignment.tsx'},
            2: {name: 'keyword.control.intrinsic.tsx'}
          },
          end: '(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          patterns: [{include: '#type'}]
        },
        {
          begin: '(=)\\s*',
          beginCaptures: {1: {name: 'keyword.operator.assignment.tsx'}},
          end: '(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
          patterns: [{include: '#type'}]
        }
      ]
    },
    'type-annotation': {
      patterns: [
        {
          begin: '(:)(?=\\s*\\S)',
          beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
          end: '(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))',
          name: 'meta.type.annotation.tsx',
          patterns: [{include: '#type'}]
        },
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
          end: '(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))',
          name: 'meta.type.annotation.tsx',
          patterns: [{include: '#type'}]
        }
      ]
    },
    'type-arguments': {
      begin: '\\<',
      beginCaptures: {
        0: {name: 'punctuation.definition.typeparameters.begin.tsx'}
      },
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.typeparameters.end.tsx'}},
      name: 'meta.type.parameters.tsx',
      patterns: [{include: '#type-arguments-body'}]
    },
    'type-arguments-body': {
      patterns: [
        {
          captures: {0: {name: 'keyword.operator.type.tsx'}},
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))'
        },
        {include: '#type'},
        {include: '#punctuation-comma'}
      ]
    },
    'type-builtin-literals': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'support.type.builtin.tsx'
    },
    'type-conditional': {
      patterns: [
        {
          begin: '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+',
          beginCaptures: {1: {name: 'storage.modifier.tsx'}},
          end: '(?<=:)',
          patterns: [
            {
              begin: '\\?',
              beginCaptures: {0: {name: 'keyword.operator.ternary.tsx'}},
              end: ':',
              endCaptures: {0: {name: 'keyword.operator.ternary.tsx'}},
              patterns: [{include: '#type'}]
            },
            {include: '#type'}
          ]
        }
      ]
    },
    'type-fn-type-parameters': {
      patterns: [
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)',
          beginCaptures: {
            1: {name: 'meta.type.constructor.tsx storage.modifier.tsx'},
            2: {name: 'meta.type.constructor.tsx keyword.control.new.tsx'}
          },
          end: '(?<=>)',
          patterns: [{include: '#comment'}, {include: '#type-parameters'}]
        },
        {
          begin:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()',
          beginCaptures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.control.new.tsx'}
          },
          end: '(?<=\\))',
          name: 'meta.type.constructor.tsx',
          patterns: [{include: '#function-parameters'}]
        },
        {
          begin:
            '(?x)(\n  (?=\n    [(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )\n  )\n)',
          end: '(?<=\\))',
          name: 'meta.type.function.tsx',
          patterns: [{include: '#function-parameters'}]
        }
      ]
    },
    'type-function-return-type': {
      patterns: [
        {
          begin: '(=>)(?=\\s*\\S)',
          beginCaptures: {1: {name: 'storage.type.function.arrow.tsx'}},
          end: '(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)',
          name: 'meta.type.function.return.tsx',
          patterns: [{include: '#type-function-return-type-core'}]
        },
        {
          begin: '=>',
          beginCaptures: {0: {name: 'storage.type.function.arrow.tsx'}},
          end: '(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))',
          name: 'meta.type.function.return.tsx',
          patterns: [{include: '#type-function-return-type-core'}]
        }
      ]
    },
    'type-function-return-type-core': {
      patterns: [
        {include: '#comment'},
        {
          begin: '(?<==>)(?=\\s*\\{)',
          end: '(?<=\\})',
          patterns: [{include: '#type-object'}]
        },
        {include: '#type-predicate-operator'},
        {include: '#type'}
      ]
    },
    'type-infer': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.expression.infer.tsx'},
            2: {name: 'entity.name.type.tsx'},
            3: {name: 'keyword.operator.expression.extends.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))?',
          name: 'meta.type.infer.tsx'
        }
      ]
    },
    'type-name': {
      patterns: [
        {
          begin:
            '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)',
          captures: {
            1: {name: 'entity.name.type.module.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'},
            4: {
              name: 'meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx'
            }
          },
          contentName: 'meta.type.parameters.tsx',
          end: '(>)',
          endCaptures: {
            1: {
              name: 'meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx'
            }
          },
          patterns: [{include: '#type-arguments-body'}]
        },
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(<)',
          beginCaptures: {
            1: {name: 'entity.name.type.tsx'},
            2: {
              name: 'meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx'
            }
          },
          contentName: 'meta.type.parameters.tsx',
          end: '(>)',
          endCaptures: {
            1: {
              name: 'meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx'
            }
          },
          patterns: [{include: '#type-arguments-body'}]
        },
        {
          captures: {
            1: {name: 'entity.name.type.module.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'punctuation.accessor.optional.tsx'}
          },
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))'
        },
        {match: '[_$[:alpha:]][_$[:alnum:]]*', name: 'entity.name.type.tsx'}
      ]
    },
    'type-object': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.object.type.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#method-declaration'},
        {include: '#indexer-declaration'},
        {include: '#indexer-mapped-type-declaration'},
        {include: '#field-declaration'},
        {include: '#type-annotation'},
        {
          begin: '\\.\\.\\.',
          beginCaptures: {0: {name: 'keyword.operator.spread.tsx'}},
          end: '(?=\\}|;|,|$)|(?<=\\})',
          patterns: [{include: '#type'}]
        },
        {include: '#punctuation-comma'},
        {include: '#punctuation-semicolon'},
        {include: '#type'}
      ]
    },
    'type-operators': {
      patterns: [
        {include: '#typeof-operator'},
        {include: '#type-infer'},
        {
          begin: '([&|])(?=\\s*\\{)',
          beginCaptures: {0: {name: 'keyword.operator.type.tsx'}},
          end: '(?<=\\})',
          patterns: [{include: '#type-object'}]
        },
        {
          begin: '[&|]',
          beginCaptures: {0: {name: 'keyword.operator.type.tsx'}},
          end: '(?=\\S)'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.expression.keyof.tsx'
        },
        {match: '(\\?|\\:)', name: 'keyword.operator.ternary.tsx'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()',
          name: 'keyword.operator.expression.import.tsx'
        }
      ]
    },
    'type-parameters': {
      begin: '(<)',
      beginCaptures: {
        1: {name: 'punctuation.definition.typeparameters.begin.tsx'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.typeparameters.end.tsx'}},
      name: 'meta.type.parameters.tsx',
      patterns: [
        {include: '#comment'},
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'storage.modifier.tsx'
        },
        {include: '#type'},
        {include: '#punctuation-comma'},
        {match: '(=)(?!>)', name: 'keyword.operator.assignment.tsx'}
      ]
    },
    'type-paren-or-function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
      name: 'meta.type.paren.cover.tsx',
      patterns: [
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'entity.name.function.tsx variable.language.this.tsx'},
            4: {name: 'entity.name.function.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'variable.parameter.tsx variable.language.this.tsx'},
            4: {name: 'variable.parameter.tsx'},
            5: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)'
        },
        {include: '#type-annotation'},
        {match: ',', name: 'punctuation.separator.parameter.tsx'},
        {include: '#type'}
      ]
    },
    'type-predicate-operator': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.type.asserts.tsx'},
            2: {name: 'variable.parameter.tsx variable.language.this.tsx'},
            3: {name: 'variable.parameter.tsx'},
            4: {name: 'keyword.operator.expression.is.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))'
        },
        {
          captures: {
            1: {name: 'keyword.operator.type.asserts.tsx'},
            2: {name: 'variable.parameter.tsx variable.language.this.tsx'},
            3: {name: 'variable.parameter.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.type.asserts.tsx'
        },
        {
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
          name: 'keyword.operator.expression.is.tsx'
        }
      ]
    },
    'type-primitive': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'support.type.primitive.tsx'
    },
    'type-string': {
      patterns: [
        {include: '#qstring-single'},
        {include: '#qstring-double'},
        {include: '#template-type'}
      ]
    },
    'type-tuple': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.tsx'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.tsx'}},
      name: 'meta.type.tuple.tsx',
      patterns: [
        {match: '\\.\\.\\.', name: 'keyword.operator.rest.tsx'},
        {
          captures: {
            1: {name: 'entity.name.label.tsx'},
            2: {name: 'keyword.operator.optional.tsx'},
            3: {name: 'punctuation.separator.label.tsx'}
          },
          match:
            '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\?)?\\s*(:)'
        },
        {include: '#type'},
        {include: '#punctuation-comma'}
      ]
    },
    'typeof-operator': {
      begin:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      beginCaptures: {0: {name: 'keyword.operator.expression.typeof.tsx'}},
      end: '(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))',
      patterns: [{include: '#type-arguments'}, {include: '#expression'}]
    },
    'undefined-literal': {
      match:
        '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))',
      name: 'constant.language.undefined.tsx'
    },
    'var-expr': {
      patterns: [
        {
          begin:
            '(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))',
          end: '(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))',
          name: 'meta.var.expr.tsx',
          patterns: [
            {
              begin:
                '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*',
              beginCaptures: {
                1: {name: 'keyword.control.export.tsx'},
                2: {name: 'storage.modifier.tsx'},
                3: {name: 'storage.type.tsx'}
              },
              end: '(?=\\S)'
            },
            {include: '#destructuring-variable'},
            {include: '#var-single-variable'},
            {include: '#variable-initializer'},
            {include: '#comment'},
            {
              begin: '(,)\\s*(?=$|\\/\\/)',
              beginCaptures: {1: {name: 'punctuation.separator.comma.tsx'}},
              end: '(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))',
              patterns: [
                {include: '#single-line-comment-consuming-line-ending'},
                {include: '#comment'},
                {include: '#destructuring-variable'},
                {include: '#var-single-variable'},
                {include: '#punctuation-comma'}
              ]
            },
            {include: '#punctuation-comma'}
          ]
        },
        {
          begin:
            '(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'storage.type.tsx'}
          },
          end: '(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))',
          name: 'meta.var.expr.tsx',
          patterns: [
            {
              begin:
                '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*',
              beginCaptures: {
                1: {name: 'keyword.control.export.tsx'},
                2: {name: 'storage.modifier.tsx'},
                3: {name: 'storage.type.tsx'}
              },
              end: '(?=\\S)'
            },
            {include: '#destructuring-const'},
            {include: '#var-single-const'},
            {include: '#variable-initializer'},
            {include: '#comment'},
            {
              begin: '(,)\\s*(?=$|\\/\\/)',
              beginCaptures: {1: {name: 'punctuation.separator.comma.tsx'}},
              end: '(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))',
              patterns: [
                {include: '#single-line-comment-consuming-line-ending'},
                {include: '#comment'},
                {include: '#destructuring-const'},
                {include: '#var-single-const'},
                {include: '#punctuation-comma'}
              ]
            },
            {include: '#punctuation-comma'}
          ]
        },
        {
          begin:
            '(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'storage.modifier.tsx'},
            3: {name: 'storage.type.tsx'}
          },
          name: 'meta.var.expr.tsx',
          patterns: [
            {
              begin:
                '(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*',
              beginCaptures: {
                1: {name: 'keyword.control.export.tsx'},
                2: {name: 'storage.modifier.tsx'},
                3: {name: 'storage.type.tsx'}
              },
              end: '(?=\\S)'
            },
            {include: '#var-single-const'},
            {include: '#variable-initializer'},
            {include: '#comment'},
            {
              begin: '(,)\\s*((?!\\S)|(?=\\/\\/))',
              beginCaptures: {1: {name: 'punctuation.separator.comma.tsx'}},
              end: '(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))',
              patterns: [
                {include: '#single-line-comment-consuming-line-ending'},
                {include: '#comment'},
                {include: '#var-single-const'},
                {include: '#punctuation-comma'}
              ]
            },
            {include: '#punctuation-comma'}
          ]
        }
      ]
    },
    'var-single-const': {
      patterns: [
        {
          begin:
            '(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))',
          beginCaptures: {
            1: {
              name: 'meta.definition.variable.tsx variable.other.constant.tsx entity.name.function.tsx'
            }
          },
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [{include: '#var-single-variable-type-annotation'}]
        },
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)',
          beginCaptures: {
            1: {
              name: 'meta.definition.variable.tsx variable.other.constant.tsx'
            }
          },
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [{include: '#var-single-variable-type-annotation'}]
        }
      ]
    },
    'var-single-variable': {
      patterns: [
        {
          begin:
            '(?x)([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*\n# function assignment |\n(=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)) |\n# typeannotation is fn type: < | () | (... | (param: | (param, | (param? | (param= | (param) =>\n(:\\s*(\n  (<) |\n  ([(]\\s*(\n    ([)]) |\n    (\\.\\.\\.) |\n    ([_$[:alnum:]]+\\s*(\n      ([:,?=])|\n      ([)]\\s*=>)\n    ))\n  ))\n)) |\n(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))) |\n(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))) |\n(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(\n  ((async\\s+)?(\n    (function\\s*[(<*]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)\n  )) |\n  ((async\\s*)?(\n    ((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))) |\n    # sure shot arrow functions even if => is on new line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\n  [(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*\n  (\n    ([)]\\s*:) |                                                                                       # ():\n    ((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)                                                                  # [(]param: | [(]...param:\n  )\n) |\n(\n  [<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>]                                                              # < typeparam extends\n) |\n# arrow function possible to detect only with => on same line\n(\n  (<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?                                                                                 # typeparameters\n  \\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\\'\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\\'([^\\\'\\\\]|\\\\.)*\\\')|(\\"([^\\"\\\\]|\\\\.)*\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)   # parameters\n  (\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?                                                                        # return type\n  \\s*=>                                                                                               # arrow operator\n)\n  ))\n)))',
          beginCaptures: {
            1: {name: 'meta.definition.variable.tsx entity.name.function.tsx'},
            2: {name: 'keyword.operator.definiteassignment.tsx'}
          },
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [{include: '#var-single-variable-type-annotation'}]
        },
        {
          begin: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])(\\!)?',
          beginCaptures: {
            1: {
              name: 'meta.definition.variable.tsx variable.other.constant.tsx'
            },
            2: {name: 'keyword.operator.definiteassignment.tsx'}
          },
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [{include: '#var-single-variable-type-annotation'}]
        },
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)(\\!)?',
          beginCaptures: {
            1: {
              name: 'meta.definition.variable.tsx variable.other.readwrite.tsx'
            },
            2: {name: 'keyword.operator.definiteassignment.tsx'}
          },
          end: '(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [{include: '#var-single-variable-type-annotation'}]
        }
      ]
    },
    'var-single-variable-type-annotation': {
      patterns: [
        {include: '#type-annotation'},
        {include: '#string'},
        {include: '#comment'}
      ]
    },
    'variable-initializer': {
      patterns: [
        {
          begin: '(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)',
          beginCaptures: {1: {name: 'keyword.operator.assignment.tsx'}},
          end: '(?=$|^|[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?<!=|!)(=)(?!=)',
          beginCaptures: {1: {name: 'keyword.operator.assignment.tsx'}},
          end: '(?=[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)',
          patterns: [{include: '#expression'}]
        }
      ]
    }
  },
  scopeName: 'source.tsx'
}

export default grammar
