// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jest-community/vscode-jest>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.snap'],
  names: ['jest-snapshot'],
  patterns: [
    {include: '#directives'},
    {include: '#statements'},
    {
      captures: {1: {name: 'punctuation.definition.comment.ts'}},
      match: '\\A(#!).*(?=$)',
      name: 'comment.line.shebang.ts'
    }
  ],
  repository: {
    'access-modifier': {
      match:
        '(?<!\\.|\\$)\\b(abstract|public|protected|private|readonly|static)\\b(?!\\$)',
      name: 'storage.modifier.tsx'
    },
    'after-operator-block': {
      begin:
        '(?<=[=(,\\[?+!]|await|return|yield|throw|in|of|typeof|&&|\\|\\||\\*)\\s*(\\{)',
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
    'array-literal': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.tsx'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.tsx'}},
      name: 'meta.array.literal.tsx',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'arrow-function': {
      patterns: [
        {
          captures: {1: {name: 'storage.modifier.async.tsx'}},
          match: '(?<!\\.|\\$)(\\basync)(?=\\s*[<(])',
          name: 'meta.arrow.tsx'
        },
        {
          captures: {
            1: {name: 'storage.modifier.async.tsx'},
            2: {name: 'variable.parameter.tsx'}
          },
          match:
            '(?:(?<!\\.|\\$)(\\basync)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)',
          name: 'meta.arrow.tsx'
        },
        {
          begin:
            '(?x)\\s*(?=(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)',
          end: '(?==>)',
          name: 'meta.arrow.tsx',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameters'},
            {include: '#function-parameters'},
            {include: '#arrow-return-type'}
          ]
        },
        {
          begin: '=>',
          beginCaptures: {0: {name: 'storage.type.function.arrow.tsx'}},
          end: '(?<=\\})|((?!\\{)(?=\\S))',
          name: 'meta.arrow.tsx',
          patterns: [{include: '#decl-block'}, {include: '#expression'}]
        }
      ]
    },
    'arrow-return-type': {
      begin: '(?<=\\))\\s*(:)',
      beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
      end: '(?<!:)((?=$)|(?==>|;|//))',
      name: 'meta.return.type.arrow.tsx',
      patterns: [{include: '#type-predicate-operator'}, {include: '#type'}]
    },
    'binding-element': {
      patterns: [
        {include: '#comment'},
        {include: '#object-binding-pattern'},
        {include: '#array-binding-pattern'},
        {include: '#destructuring-variable-rest'},
        {include: '#variable-initializer'}
      ]
    },
    'boolean-literal': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\btrue\\b(?!\\$)',
          name: 'constant.language.boolean.true.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bfalse\\b(?!\\$)',
          name: 'constant.language.boolean.false.tsx'
        }
      ]
    },
    'case-clause': {
      begin: '(?<!\\.|\\$)\\b(case|default(?=:))\\b(?!\\$)',
      beginCaptures: {1: {name: 'keyword.control.switch.tsx'}},
      end: ':',
      endCaptures: {
        0: {name: 'punctuation.definition.section.case-statement.tsx'}
      },
      name: 'case-clause.expr.tsx',
      patterns: [{include: '#expression'}]
    },
    cast: {patterns: [{include: '#jsx'}]},
    'class-or-interface-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#decorator'},
        {include: '#method-declaration'},
        {include: '#indexer-declaration'},
        {include: '#field-declaration'},
        {include: '#type-annotation'},
        {include: '#variable-initializer'},
        {include: '#access-modifier'},
        {include: '#property-accessor'},
        {include: '#expression'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'class-or-interface-declaration': {
      begin:
        '(?<!\\.|\\$)\\b(?:(export)\\s+)?\\b(?:(abstract)\\s+)?\\b(?:(class)|(interface))\\b',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.type.class.tsx'},
        4: {name: 'storage.type.interface.tsx'}
      },
      end: '(?<=\\})',
      endCaptures: {1: {name: 'punctuation.definition.block.tsx'}},
      name: 'meta.class.tsx',
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
    'class-or-interface-heritage': {
      begin: '(?<!\\.|\\$)(?:\\b(extends|implements)\\b)(?!\\$)',
      beginCaptures: {1: {name: 'storage.modifier.tsx'}},
      end: '(?=\\{)',
      endCaptures: {1: {name: 'punctuation.definition.block.tsx'}},
      patterns: [
        {include: '#comment'},
        {include: '#class-or-interface-heritage'},
        {include: '#type-parameters'},
        {
          captures: {
            1: {name: 'entity.name.type.module.tsx'},
            2: {name: 'punctuation.accessor.tsx'}
          },
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*([,<{]|extends|implements|//|/\\*))'
        },
        {
          captures: {1: {name: 'entity.other.inherited-class.tsx'}},
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*([,<{]|extends|implements|//|/\\*))'
        },
        {include: '#expression'}
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
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
          name: 'comment.block.tsx'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.tsx'}
          },
          end: '(?=$)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.tsx'}},
              end: '(?=$)',
              name: 'comment.line.double-slash.tsx'
            }
          ]
        }
      ]
    },
    'control-statement': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\b(catch|finally|throw|try)\\b(?!\\$)',
          name: 'keyword.control.trycatch.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(break|continue|do|goto|while)\\b(?!\\$)',
          name: 'keyword.control.loop.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(return)\\b(?!\\$)',
          name: 'keyword.control.flow.tsx'
        },
        {
          captures: {
            1: {name: 'keyword.control.flow.tsx'},
            2: {name: 'keyword.generator.asterisk.tsx'}
          },
          match: '(?<!\\.|\\$)\\b(yield)\\b(?!\\$)(?:\\s*(\\*))?'
        },
        {
          match: '(?<!\\.|\\$)\\b(case|default|switch)\\b(?!\\$)',
          name: 'keyword.control.switch.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(else|if)\\b(?!\\$)',
          name: 'keyword.control.conditional.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(with)\\b(?!\\$)',
          name: 'keyword.control.with.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(debugger)\\b(?!\\$)',
          name: 'keyword.other.debugger.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\b(declare)\\b(?!\\$)',
          name: 'storage.modifier.tsx'
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
      name: 'meta.declaration.tsx',
      patterns: [
        {include: '#decorator'},
        {include: '#var-expr'},
        {include: '#function-declaration'},
        {include: '#class-or-interface-declaration'},
        {include: '#type-declaration'},
        {include: '#enum-declaration'},
        {include: '#namespace-declaration'},
        {include: '#import-equals-declaration'},
        {include: '#import-declaration'},
        {include: '#export-declaration'}
      ]
    },
    decorator: {
      begin: '(?<!\\.|\\$)\\@',
      beginCaptures: {0: {name: 'punctuation.decorator.tsx'}},
      end: '(?=\\s)',
      name: 'meta.decorator.tsx',
      patterns: [{include: '#expression'}]
    },
    'destructuring-parameter': {
      patterns: [
        {
          begin: '(?<!=|:)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'punctuation.definition.binding-pattern.object.tsx'}
          },
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.binding-pattern.object.tsx'}
          },
          name: 'meta.parameter.object-binding-pattern.tsx',
          patterns: [{include: '#parameter-object-binding-element'}]
        },
        {
          begin: '(?<!=|:)\\s*(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.binding-pattern.array.tsx'}
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
          begin: '(?<!=|:|of|in)\\s*(?=\\{)',
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.object-binding-pattern-variable.tsx',
          patterns: [
            {include: '#object-binding-pattern'},
            {include: '#type-annotation'},
            {include: '#comment'}
          ]
        },
        {
          begin: '(?<!=|:|of|in)\\s*(?=\\[)',
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
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
    directives: {
      begin:
        '^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|name)\\s*=\\s*((\\\'[^\']*\\\')|(\\"[^"]*\\")))+\\s*/>\\s*$)',
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
              match: 'path|types|no-default-lib|name',
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
          match:
            '(?x)(?<!\\w)@(\n  abstract|access|alias|arg|argument|async|attribute|augments|author|beta|borrows|bubbes|callback|chainable|class\n  |classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc\n  |description|dict|emits|enum|event|example|exports?|extends|extension|extension_for|extensionfor|external|file\n  |fileoverview|final|fires|for|function|global|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance\n  |interface|kind|lends|license|listens|main|member|memberof|method|mixex|mixins?|modifies|module|name|namespace\n  |noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|preserve|private|prop|property\n  |protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress\n  |template|this|throws|todo|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce)\\b',
          name: 'storage.type.class.jsdoc'
        },
        {
          captures: {
            0: {name: 'entity.name.type.instance.jsdoc'},
            1: {name: 'constant.other.description.jsdoc'},
            2: {name: 'storage.type.class.jsdoc'},
            3: {name: 'variable.other.description.jsdoc'}
          },
          match:
            '(?x)\n(\n  \\[\n    [^\\]]+            # Optional [link text] preceding {@link syntax}\n  \\]\n\n  (?!                  # Check to avoid highlighting two sets of link text\n    {\n      @\\w+            # Tagname\n      \\s+\n      [^\\s|}]+        # Namepath/URL\n      [\\s|]           # Whitespace or bar delimiting description\n      [^}]*\n    }\n  )\n)?\n\n(?:\n  {\n    (\n      @\n      (?: link         # Name of tag\n        | linkcode\n        | linkplain\n        | tutorial\n      )\n    )\n\n    \\s+\n\n    ([^\\s|}]+)        # Namepath or URL\n\n    (?:                # Optional link text following link target\n      [\\s|]           # Bar or space separating target and text\n      [^}]*            # Actual text\n    )?\n  }\n)',
          name: 'other.meta.jsdoc'
        },
        {
          captures: {
            0: {name: 'other.meta.jsdoc'},
            1: {name: 'entity.name.type.instance.jsdoc'},
            2: {name: 'variable.other.jsdoc'},
            3: {name: 'other.description.jsdoc'}
          },
          match:
            '(?x)\n\n(?:(?<=@param)|(?<=@arg)|(?<=@argument)|(?<=@type)|(?<=@property)|(?<=@prop))\n\n\\s+\n\n({(?:\n  \\* |                                       # {*} any type\n  \\? |                                       # {?} unknown type\n\n  (?:\n    (?:                                       # Check for a prefix\n      \\? |                                   # {?string} nullable type\n      !   |                                   # {!string} non-nullable type\n      \\.{3}                                  # {...string} variable number of parameters\n    )?\n\n    (?:\n      (?:\n        function                              # {function(string, number)} function type\n        \\s*\n        \\(\n        \\s*\n        (?:\n          [a-zA-Z_$][\\w$]*\n          (?:\n            \\s*,\\s*\n            [a-zA-Z_$][\\w$]*\n          )*\n        )?\n        \\s*\n        \\)\n        (?:                                   # {function(): string} function return type\n          \\s*:\\s*\n          [a-zA-Z_$][\\w$]*\n        )?\n      )?\n      |\n      (?:\n        \\(                                   # Opening bracket of multiple types with parenthesis {(string|number)}\n          [a-zA-Z_$]+\n          (?:\n            (?:\n              [\\w$]*\n              (?:\\[\\])?                     # {(string[]|number)} type application, an array of strings or a number\n            ) |\n            \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>    # {Array<string>} or {Object<string, number>} type application (optional .)\n          )\n          (?:\n            [\\.|~]                           # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n            [a-zA-Z_$]+\n            (?:\n              (?:\n                [\\w$]*\n                (?:\\[\\])?                   # {(string|number[])} type application, a string or an array of numbers\n              ) |\n              \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>  # {Array<string>} or {Object<string, number>} type application (optional .)\n            )\n          )*\n        \\) |\n        [a-zA-Z_$]+\n        (?:\n          (?:\n            [\\w$]*\n            (?:\\[\\])?                       # {(string|number[])} type application, a string or an array of numbers\n          ) |\n          \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>      # {Array<string>} or {Object<string, number>} type application (optional .)\n        )\n        (?:\n          [\\.|~]                             # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n          [a-zA-Z_$]+\n          (?:\n            [\\w$]* |\n            \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>    # {Array<string>} or {Object<string, number>} type application (optional .)\n          )\n        )*\n      )\n    )\n                                              # Check for suffix\n    (?:\\[\\])?                               # {string[]} type application, an array of strings\n    =?                                        # {string=} optional parameter\n  )\n)})\n\n\\s+\n\n(\n  \\[                                         # [foo] optional parameter\n    \\s*\n    (?:\n      [a-zA-Z_$][\\w$]*\n      (?:\n        (?:\\[\\])?                           # Foo[].bar properties within an array\n        \\.                                   # Foo.Bar namespaced parameter\n        [a-zA-Z_$][\\w$]*\n      )*\n      (?:\n        \\s*\n        =                                     # [foo=bar] Default parameter value\n        \\s*\n        [\\w$\\s]*\n      )?\n    )\n    \\s*\n  \\] |\n  (?:\n    [a-zA-Z_$][\\w$]*\n    (?:\n      (?:\\[\\])?                             # Foo[].bar properties within an array\n      \\.                                     # Foo.Bar namespaced parameter\n      [a-zA-Z_$][\\w$]*\n    )*\n  )?\n)\n\n\\s+\n\n(?:-\\s+)?                                     # optional hyphen before the description\n\n((?:(?!\\*\\/).)*)                             # The type description'
        },
        {
          captures: {
            0: {name: 'other.meta.jsdoc'},
            1: {name: 'entity.name.type.instance.jsdoc'},
            2: {name: 'other.description.jsdoc'}
          },
          match:
            '(?x)\n\n({(?:\n  \\* |                                       # {*} any type\n  \\? |                                       # {?} unknown type\n\n  (?:\n    (?:                                       # Check for a prefix\n      \\? |                                   # {?string} nullable type\n      !   |                                   # {!string} non-nullable type\n      \\.{3}                                  # {...string} variable number of parameters\n    )?\n\n    (?:\n      (?:\n        function                              # {function(string, number)} function type\n        \\s*\n        \\(\n        \\s*\n        (?:\n          [a-zA-Z_$][\\w$]*\n          (?:\n            \\s*,\\s*\n            [a-zA-Z_$][\\w$]*\n          )*\n        )?\n        \\s*\n        \\)\n        (?:                                   # {function(): string} function return type\n          \\s*:\\s*\n          [a-zA-Z_$][\\w$]*\n        )?\n      )?\n      |\n      (?:\n        \\(                                   # Opening bracket of multiple types with parenthesis {(string|number)}\n          [a-zA-Z_$]+\n          (?:\n            [\\w$]* |\n            \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>    # {Array<string>} or {Object<string, number>} type application (optional .)\n          )\n          (?:\n            [\\.|~]                           # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n            [a-zA-Z_$]+\n            (?:\n              [\\w$]* |\n              \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>  # {Array<string>} or {Object<string, number>} type application (optional .)\n            )\n          )*\n        \\) |\n        [a-zA-Z_$]+\n        (?:\n          [\\w$]* |\n          \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>      # {Array<string>} or {Object<string, number>} type application (optional .)\n        )\n        (?:\n          [\\.|~]                             # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n          [a-zA-Z_$]+\n          (?:\n            [\\w$]* |\n            \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>    # {Array<string>} or {Object<string, number>} type application (optional .)\n          )\n        )*\n      )\n    )\n                                              # Check for suffix\n    (?:\\[\\])?                               # {string[]} type application, an array of strings\n    =?                                        # {string=} optional parameter\n  )\n)})\n\n\\s+\n\n(?:-\\s+)?                                    # optional hyphen before the description\n\n((?:(?!\\*\\/).)*)                            # The type description'
        }
      ]
    },
    'enum-declaration': {
      begin:
        '(?<!\\.|\\$)(?:(\\bexport)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.type.enum.tsx'},
        4: {name: 'entity.name.type.enum.tsx'}
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
            '(?<!\\.|\\$)\\b(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          begin:
            '(?<!\\.|\\$)\\b(export)(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.operator.assignment.tsx'},
            3: {name: 'keyword.control.default.tsx'}
          },
          end: '(?=;|\\bexport\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|\\bimport\\b|\\benum\\b|\\bnamespace\\b|\\bmodule\\b|\\btype\\b|\\babstract\\b|\\bdeclare\\b|\\basync\\b|$)',
          name: 'meta.export.default.tsx',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?<!\\.|\\$)\\b(export)(?!(\\s*:)|(\\$))\\b',
          beginCaptures: {0: {name: 'keyword.control.export.tsx'}},
          end: '(?=;|\\bexport\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|\\bimport\\b|\\benum\\b|\\bnamespace\\b|\\bmodule\\b|\\btype\\b|\\babstract\\b|\\bdeclare\\b|\\basync\\b|$)',
          name: 'meta.export.tsx',
          patterns: [{include: '#import-export-declaration'}]
        }
      ]
    },
    expression: {
      name: 'meta.expression.tsx',
      patterns: [
        {include: '#jsx'},
        {include: '#string'},
        {include: '#regex'},
        {include: '#template'},
        {include: '#comment'},
        {include: '#literal'},
        {include: '#function-declaration'},
        {include: '#class-or-interface-declaration'},
        {include: '#arrow-function'},
        {include: '#cast'},
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
          match: '(?<!\\.|\\$)\\b(await)\\b(?!\\$)',
          name: 'keyword.control.flow.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bdelete\\b(?!\\$)',
          name: 'keyword.operator.expression.delete.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bin\\b(?!\\$)',
          name: 'keyword.operator.expression.in.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bof\\b(?!\\$)',
          name: 'keyword.operator.expression.of.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\binstanceof\\b(?!\\$)',
          name: 'keyword.operator.expression.instanceof.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bnew\\b(?!\\$)',
          name: 'keyword.operator.new.tsx'
        },
        {include: '#typeof-operator'},
        {
          match: '(?<!\\.|\\$)\\bvoid\\b(?!\\$)',
          name: 'keyword.operator.expression.void.tsx'
        },
        {
          begin: '(?<!\\.|\\$)\\bas\\b(?!\\$)',
          beginCaptures: {0: {name: 'keyword.control.as.tsx'}},
          end: '(?=$|[;,:})\\]])',
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
        {match: '\\!|&&|\\|\\|', name: 'keyword.operator.logical.tsx'},
        {match: '\\&|~|\\^|\\|', name: 'keyword.operator.bitwise.tsx'},
        {match: '\\=', name: 'keyword.operator.assignment.tsx'},
        {match: '--', name: 'keyword.operator.decrement.tsx'},
        {match: '\\+\\+', name: 'keyword.operator.increment.tsx'},
        {match: '%|\\*|/|-|\\+', name: 'keyword.operator.arithmetic.tsx'},
        {
          captures: {1: {name: 'keyword.operator.arithmetic.tsx'}},
          match: '(?<=[_$[:alnum:]])\\s*(/)(?![/*])'
        }
      ]
    },
    'field-declaration': {
      begin:
        '(?<!\\()(?:(?<!\\.|\\$)\\b(readonly)\\s+)?(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\?\\s*)?(=|:))',
      beginCaptures: {1: {name: 'storage.modifier.tsx'}},
      end: '(?=\\}|;|,|$)|(?<=\\})',
      name: 'meta.field.declaration.tsx',
      patterns: [
        {include: '#variable-initializer'},
        {
          begin:
            '(?=((?:[_$[:alpha:]][_$[:alnum:]]*)|(?:\\\'[^\']*\\\')|(?:\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\?\\s*)?(=|:))',
          end: '(?=[};,=]|$)|(?<=\\})',
          patterns: [
            {include: '#type-annotation'},
            {include: '#string'},
            {include: '#array-literal'},
            {include: '#comment'},
            {
              match:
                '(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=(\\?\\s*)?\\s*\n  (=\\s*(\n    (async\\s+) |\n    (function\\s*[(<]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) |\n    ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))\n  ) |\n  (:\\s*(\n    (<) |\n    ([(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )))\n  )\n)',
              name: 'meta.definition.property.tsx entity.name.function.tsx'
            },
            {
              match: '[_$[:alpha:]][_$[:alnum:]]*',
              name: 'meta.definition.property.tsx variable.object.property.tsx'
            },
            {match: '\\?', name: 'keyword.operator.optional.tsx'}
          ]
        }
      ]
    },
    'for-loop': {
      begin: '(?<!\\.|\\$)\\b(for)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.loop.tsx'},
        2: {name: 'meta.brace.round.tsx'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
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
        {match: '\\.', name: 'punctuation.accessor.tsx'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.function.tsx'
        },
        {include: '#comment'},
        {
          begin: '\\<',
          beginCaptures: {
            0: {name: 'punctuation.definition.typeparameters.begin.tsx'}
          },
          end: '\\>',
          endCaptures: {
            0: {name: 'punctuation.definition.typeparameters.end.tsx'}
          },
          name: 'meta.type.parameters.tsx',
          patterns: [{include: '#type'}, {include: '#punctuation-comma'}]
        },
        {include: '#paren-expression'}
      ]
    },
    'function-declaration': {
      begin:
        '(?<!\\.|\\$)\\b(?:(export)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.async.tsx'},
        3: {name: 'storage.type.function.tsx'},
        4: {name: 'keyword.generator.asterisk.tsx'},
        5: {name: 'meta.definition.function.tsx entity.name.function.tsx'}
      },
      end: '(?=;|\\})|(?<=\\})',
      name: 'meta.function.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#type-parameters'},
        {include: '#function-parameters'},
        {include: '#return-type'},
        {include: '#function-overload-declaration'},
        {include: '#decl-block'}
      ]
    },
    'function-overload-declaration': {
      captures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.modifier.async.tsx'},
        3: {name: 'storage.type.function.tsx'},
        4: {name: 'keyword.generator.asterisk.tsx'},
        5: {name: 'meta.definition.function.tsx entity.name.function.tsx'}
      },
      match:
        '(?<!\\.|\\$)\\b(?:(export)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*',
      name: 'meta.function.overload.tsx'
    },
    'function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.parameters.begin.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.tsx'}},
      name: 'meta.parameters.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#decorator'},
        {include: '#destructuring-parameter'},
        {include: '#parameter-name'},
        {include: '#type-annotation'},
        {include: '#variable-initializer'},
        {match: ',', name: 'punctuation.separator.parameter.tsx'}
      ]
    },
    identifiers: {
      patterns: [
        {
          match:
            '([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\.\\s*prototype\\b(?!\\$))',
          name: 'support.class.tsx'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'constant.other.object.property.tsx'},
            3: {name: 'variable.other.object.property.tsx'}
          },
          match:
            '(?x)(\\.)\\s*(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'entity.name.function.tsx'}
          },
          match:
            '(?x)(?:(\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(\n  (async\\s+)|(function\\s*[(<])|(function\\s+)|\n  ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)|\n  ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)))'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'constant.other.property.tsx'}
          },
          match:
            '(\\.)\\s*([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'variable.other.property.tsx'}
          },
          match: '(\\.)\\s*([_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          captures: {
            1: {name: 'constant.other.object.tsx'},
            2: {name: 'variable.other.object.tsx'}
          },
          match:
            '(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)'
        },
        {
          match: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
          name: 'constant.other.tsx'
        },
        {
          match: '[_$[:alpha:]][_$[:alnum:]]*',
          name: 'variable.other.readwrite.tsx'
        }
      ]
    },
    'import-declaration': {
      begin: '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)(?!(\\s*:)|(\\$))\\b',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'keyword.control.import.tsx'}
      },
      end: '(?=;|$)',
      name: 'meta.import.tsx',
      patterns: [{include: '#import-export-declaration'}]
    },
    'import-equals-declaration': {
      patterns: [
        {
          begin:
            '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.control.import.tsx'},
            3: {name: 'variable.other.readwrite.alias.tsx'},
            4: {name: 'keyword.operator.assignment.tsx'},
            5: {name: 'keyword.control.require.tsx'},
            6: {name: 'meta.brace.round.tsx'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'meta.brace.round.tsx'}},
          name: 'meta.import-equals.external.tsx',
          patterns: [{include: '#comment'}, {include: '#string'}]
        },
        {
          begin:
            '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)',
          beginCaptures: {
            1: {name: 'keyword.control.export.tsx'},
            2: {name: 'keyword.control.import.tsx'},
            3: {name: 'variable.other.readwrite.alias.tsx'},
            4: {name: 'keyword.operator.assignment.tsx'}
          },
          end: '(?=;|$)',
          name: 'meta.import-equals.internal.tsx',
          patterns: [
            {include: '#comment'},
            {
              captures: {
                1: {name: 'entity.name.type.module.tsx'},
                2: {name: 'punctuation.accessor.tsx'}
              },
              match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)'
            },
            {
              match: '([_$[:alpha:]][_$[:alnum:]]*)',
              name: 'variable.other.readwrite.tsx'
            }
          ]
        }
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
            1: {name: 'keyword.control.default.tsx'},
            2: {name: 'constant.language.import-export-all.tsx'},
            3: {name: 'variable.other.readwrite.tsx'},
            4: {name: 'keyword.control.as.tsx'},
            5: {name: 'invalid.illegal.tsx'},
            6: {name: 'variable.other.readwrite.alias.tsx'}
          },
          match:
            '(?x) (?: \\b(default)\\b | (\\*) | ([_$[:alpha:]][_$[:alnum:]]*)) \\s+ \n  (as) \\s+ (?: (\\b default \\b | \\*) | ([_$[:alpha:]][_$[:alnum:]]*))'
        },
        {include: '#punctuation-comma'},
        {match: '\\*', name: 'constant.language.import-export-all.tsx'},
        {match: '\\b(default)\\b', name: 'keyword.control.default.tsx'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'variable.other.readwrite.alias.tsx'
        }
      ]
    },
    'import-export-declaration': {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#import-export-block'},
        {match: '\\bfrom\\b', name: 'keyword.control.from.tsx'},
        {include: '#import-export-clause'}
      ]
    },
    'indexer-declaration': {
      begin:
        '(?:(?<!\\.|\\$)\\b(readonly)\\s*)?(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)',
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
        '(?:(?<!\\.|\\$)\\b(readonly)\\s*)?(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+',
      beginCaptures: {
        1: {name: 'storage.modifier.tsx'},
        2: {name: 'meta.brace.square.tsx'},
        3: {name: 'entity.name.type.tsx'},
        4: {name: 'keyword.operator.expression.in.tsx'}
      },
      end: '(\\])\\s*(\\?\\s*)?|$',
      endCaptures: {
        1: {name: 'meta.brace.square.tsx'},
        2: {name: 'keyword.operator.optional.tsx'}
      },
      name: 'meta.indexer.mappedtype.declaration.tsx',
      patterns: [{include: '#type'}]
    },
    jsx: {
      patterns: [
        {include: '#jsx-tag-without-attributes'},
        {include: '#jsx-tag-in-expression'},
        {include: '#jsx-tag-invalid'}
      ]
    },
    'jsx-child-tag': {
      begin:
        '(?x)\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))',
      end: '(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>))',
      endCaptures: {
        0: {name: 'meta.tag.tsx'},
        1: {name: 'punctuation.definition.tag.end.tsx'},
        2: {name: 'punctuation.definition.tag.begin.tsx'},
        3: {name: 'entity.name.tag.tsx'},
        4: {name: 'punctuation.definition.tag.end.tsx'}
      },
      patterns: [{include: '#jsx-tag'}]
    },
    'jsx-children': {
      patterns: [
        {include: '#jsx-tag-without-attributes'},
        {include: '#jsx-child-tag'},
        {include: '#jsx-tag-invalid'},
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
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.tsx'}
      ]
    },
    'jsx-evaluated-code': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.tsx'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.tsx'}},
      name: 'meta.embedded.expression.tsx',
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
        '(?x)\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))',
      end: '(?=(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)))',
      name: 'meta.tag.tsx',
      patterns: [
        {
          begin:
            '(?x)\n  (<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.tsx'},
            2: {name: 'entity.name.tag.tsx'}
          },
          end: '(?=[/]?>)',
          patterns: [
            {include: '#comment'},
            {include: '#jsx-tag-attributes'},
            {include: '#jsx-tag-attributes-illegal'}
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
      captures: {1: {name: 'entity.other.attribute-name.tsx'}},
      match: '(?x)\n  \\s*\n  ([_$a-zA-Z][-$\\w]*)\n  (?=\\s|=|/?>|/\\*|//)'
    },
    'jsx-tag-attributes': {
      patterns: [
        {include: '#jsx-tag-attribute-name'},
        {include: '#jsx-tag-attribute-assignment'},
        {include: '#jsx-string-double-quoted'},
        {include: '#jsx-string-single-quoted'},
        {include: '#jsx-evaluated-code'}
      ]
    },
    'jsx-tag-attributes-illegal': {
      match: '\\S+',
      name: 'invalid.illegal.attribute.tsx'
    },
    'jsx-tag-in-expression': {
      begin:
        '(?x)\n  (?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\Wreturn|^return|\\Wdefault|^)\\s*\n  (?!(<)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)) #look ahead is not start of tag without attributes\n  (?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,)) # look ahead is not type parameter of arrow\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))',
      end: '(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>))',
      endCaptures: {
        0: {name: 'meta.tag.tsx'},
        1: {name: 'punctuation.definition.tag.end.tsx'},
        2: {name: 'punctuation.definition.tag.begin.tsx'},
        3: {name: 'entity.name.tag.tsx'},
        4: {name: 'punctuation.definition.tag.end.tsx'}
      },
      patterns: [{include: '#jsx-tag'}]
    },
    'jsx-tag-invalid': {
      match: '<\\s*>',
      name: 'invalid.illegal.tag.incomplete.tsx'
    },
    'jsx-tag-without-attributes': {
      begin: '(<)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.tsx'},
        2: {name: 'entity.name.tag.tsx'},
        3: {name: 'punctuation.definition.tag.end.tsx'}
      },
      contentName: 'meta.jsx.children.tsx',
      end: '(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.begin.tsx'},
        2: {name: 'entity.name.tag.tsx'},
        3: {name: 'punctuation.definition.tag.end.tsx'}
      },
      name: 'meta.tag.without-attributes.tsx',
      patterns: [{include: '#jsx-children'}]
    },
    literal: {
      name: 'literal.tsx',
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
      begin:
        '(?<!\\.|\\$)(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(?:\\b(?:(new)|(constructor))\\b(?!\\$|:))|(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))?\\s*[\\(\\<]))',
      beginCaptures: {
        1: {name: 'storage.modifier.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.async.tsx'},
        4: {name: 'storage.type.property.tsx'},
        5: {name: 'keyword.operator.new.tsx'},
        6: {name: 'storage.type.tsx'},
        7: {name: 'keyword.generator.asterisk.tsx'}
      },
      end: '(?=\\}|;|,)|(?<=\\})',
      name: 'meta.method.declaration.tsx',
      patterns: [
        {include: '#method-declaration-name'},
        {include: '#comment'},
        {include: '#type-parameters'},
        {include: '#function-parameters'},
        {include: '#return-type'},
        {include: '#method-overload-declaration'},
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
        {
          match: '[_$[:alpha:]][_$[:alnum:]]*',
          name: 'meta.definition.method.tsx entity.name.function.tsx'
        },
        {match: '\\?', name: 'keyword.operator.optional.tsx'}
      ]
    },
    'method-overload-declaration': {
      begin:
        '(?<!\\.|\\$)(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(?:\\b(?:(new)|(constructor))\\b(?!\\$|:))|(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))?\\s*[\\(\\<]))',
      beginCaptures: {
        1: {name: 'storage.modifier.tsx'},
        2: {name: 'storage.modifier.tsx'},
        3: {name: 'storage.modifier.async.tsx'},
        4: {name: 'storage.type.property.tsx'},
        5: {name: 'keyword.operator.new.tsx'},
        6: {name: 'storage.type.tsx'},
        7: {name: 'keyword.generator.asterisk.tsx'}
      },
      end: '(?=\\(|\\<)',
      patterns: [{include: '#method-declaration-name'}]
    },
    'namespace-declaration': {
      begin: '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(namespace|module)\\s+',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.type.namespace.tsx'}
      },
      end: '(?=$|\\{)',
      name: 'meta.namespace.declaration.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          match: '([_$[:alpha:]][_$[:alnum:]]*)',
          name: 'entity.name.type.module.tsx'
        },
        {match: '\\.', name: 'punctuation.accessor.tsx'}
      ]
    },
    'new-expr': {
      begin: '(?<!\\.|\\$)\\b(new)\\b(?!\\$)',
      beginCaptures: {1: {name: 'keyword.operator.new.tsx'}},
      end: '(?<=\\))|(?=[;),]|$|((?<!\\.|\\$)\\bnew\\b(?!\\$)))',
      name: 'new.expr.tsx',
      patterns: [
        {include: '#paren-expression'},
        {include: '#class-or-interface-declaration'},
        {include: '#type'}
      ]
    },
    'null-literal': {
      match: '(?<!\\.|\\$)\\bnull\\b(?!\\$)',
      name: 'constant.language.null.tsx'
    },
    'numeric-literal': {
      patterns: [
        {
          match: '\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)',
          name: 'constant.numeric.hex.tsx'
        },
        {
          match: '\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)',
          name: 'constant.numeric.binary.tsx'
        },
        {
          match: '\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)',
          name: 'constant.numeric.octal.tsx'
        },
        {
          captures: {
            0: {name: 'constant.numeric.decimal.tsx'},
            1: {name: 'meta.delimiter.decimal.period.tsx'},
            2: {name: 'meta.delimiter.decimal.period.tsx'},
            3: {name: 'meta.delimiter.decimal.period.tsx'},
            4: {name: 'meta.delimiter.decimal.period.tsx'},
            5: {name: 'meta.delimiter.decimal.period.tsx'},
            6: {name: 'meta.delimiter.decimal.period.tsx'}
          },
          match:
            '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)'
        }
      ]
    },
    'numericConstant-literal': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\bNaN\\b(?!\\$)',
          name: 'constant.language.nan.tsx'
        },
        {
          match: '(?<!\\.|\\$)\\bInfinity\\b(?!\\$)',
          name: 'constant.language.infinity.tsx'
        }
      ]
    },
    'object-binding-element': {
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
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
    'object-binding-element-propertyName': {
      begin:
        '(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
      end: '(:)',
      endCaptures: {0: {name: 'punctuation.destructuring.tsx'}},
      patterns: [
        {include: '#string'},
        {include: '#array-literal'},
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
        '(?<!\\.|\\$)(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))?\\s*[\\(\\<])',
      beginCaptures: {
        1: {name: 'storage.modifier.async.tsx'},
        2: {name: 'storage.type.property.tsx'},
        3: {name: 'keyword.generator.asterisk.tsx'}
      },
      end: '(?=\\}|;|,)|(?<=\\})',
      name: 'meta.method.declaration.tsx',
      patterns: [
        {include: '#method-declaration-name'},
        {include: '#comment'},
        {include: '#type-parameters'},
        {include: '#function-parameters'},
        {include: '#return-type'},
        {include: '#method-overload-declaration'},
        {include: '#decl-block'}
      ]
    },
    'object-literal-method-overload-declaration': {
      begin:
        '(?<!\\.|\\$)(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))?\\s*[\\(\\<])',
      beginCaptures: {
        1: {name: 'storage.modifier.async.tsx'},
        2: {name: 'storage.type.property.tsx'},
        3: {name: 'keyword.generator.asterisk.tsx'}
      },
      end: '(?=\\(|\\<)',
      patterns: [{include: '#method-declaration-name'}]
    },
    'object-member': {
      patterns: [
        {include: '#comment'},
        {include: '#object-literal-method-declaration'},
        {
          begin:
            '(?=(?:(?:\\\'[^\']*\\\')|(?:\\"[^"]*\\")|(?:\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*:)',
          end: '(?=,|\\})',
          name: 'meta.object.member.tsx',
          patterns: [
            {
              begin:
                '(?=(?:(?:\\\'[^\']*\\\')|(?:\\"[^"]*\\")|(?:\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*:)',
              end: ':',
              endCaptures: {0: {name: 'punctuation.separator.key-value.tsx'}},
              name: 'meta.object-literal.key.tsx',
              patterns: [{include: '#string'}, {include: '#array-literal'}]
            },
            {include: '#expression'}
          ]
        },
        {
          begin:
            '(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*(\n  (async\\s+)|(function\\s*[(<])|(function\\s+)|\n  ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)|\n  ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))))',
          beginCaptures: {
            0: {name: 'meta.object-literal.key.tsx'},
            1: {name: 'entity.name.function.tsx'},
            2: {name: 'punctuation.separator.key-value.tsx'}
          },
          end: '(?=,|\\})',
          name: 'meta.object.member.tsx',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(:)',
          beginCaptures: {
            0: {name: 'meta.object-literal.key.tsx'},
            1: {name: 'punctuation.separator.key-value.tsx'}
          },
          end: '(?=,|\\})',
          name: 'meta.object.member.tsx',
          patterns: [{include: '#expression'}]
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
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$)',
          name: 'meta.object.member.tsx'
        },
        {include: '#punctuation-comma'}
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
            '\\s*\\b(public|protected|private|readonly)(?=\\s+(public|protected|private|readonly)\\s+)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'entity.name.function.tsx'},
            4: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?x)(?:\\s*\\b(public|private|protected|readonly)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)(?=\\s*\n  (=\\s*(\n    (async\\s+) |\n    (function\\s*[(<]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) |\n    ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))\n  ) |\n  (:\\s*(\n    (<) |\n    ([(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )))\n  )\n)'
        },
        {
          captures: {
            1: {name: 'storage.modifier.tsx'},
            2: {name: 'keyword.operator.rest.tsx'},
            3: {name: 'variable.parameter.tsx'},
            4: {name: 'keyword.operator.optional.tsx'}
          },
          match:
            '(?:\\s*\\b(public|private|protected|readonly)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)'
        }
      ]
    },
    'parameter-object-binding-element': {
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\\'[^\']*\\\')|(\\"[^"]*\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))',
          end: '(?=,|\\})',
          patterns: [
            {include: '#object-binding-element-propertyName'},
            {include: '#parameter-binding-element'}
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
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'property-accessor': {
      match: '(?<!\\.|\\$)\\b(get|set)\\b(?!\\$)',
      name: 'storage.type.property.tsx'
    },
    'punctuation-accessor': {match: '\\.', name: 'punctuation.accessor.tsx'},
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
            '(?<=[=(:,\\[?+!]|return|case|=>|&&|\\|\\||\\*\\/)\\s*(/)(?![/*])(?=(?:[^/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+/(?![/*])[gimy]*(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.tsx'}},
          end: '(/)([gimuy]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.tsx'},
            2: {name: 'keyword.other.tsx'}
          },
          name: 'string.regex.tsx',
          patterns: [{include: '#regexp'}]
        },
        {
          begin:
            '(?<![_$[:alnum:]])/(?![/*])(?=(?:[^/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+/(?![/*])[gimy]*(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.tsx'}},
          end: '(/)([gimuy]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.tsx'},
            2: {name: 'keyword.other.tsx'}
          },
          name: 'string.regex.tsx',
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
          match:
            '\\\\([0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]])',
          name: 'constant.character.numeric.regexp'
        },
        {match: '\\\\c[A-Z]', name: 'constant.character.control.regexp'},
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    regexp: {
      patterns: [
        {match: '\\\\[bB]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
        {match: '\\\\[1-9]\\d*', name: 'keyword.other.back-reference.regexp'},
        {
          match: '[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
          name: 'keyword.operator.quantifier.regexp'
        },
        {match: '\\|', name: 'keyword.operator.or.regexp'},
        {
          begin: '(\\()((\\?=)|(\\?!))',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.regexp'},
            2: {name: 'punctuation.definition.group.assertion.regexp'},
            3: {name: 'meta.assertion.look-ahead.regexp'},
            4: {name: 'meta.assertion.negative-look-ahead.regexp'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.assertion.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\((\\?:)?',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.regexp'},
            1: {name: 'punctuation.definition.group.capture.regexp'}
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
                '(?:.|(\\\\(?:[0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]))|(\\\\c[A-Z])|(\\\\.))',
              name: 'constant.other.character-class.range.regexp'
            },
            {include: '#regex-character-class'}
          ]
        },
        {include: '#regex-character-class'}
      ]
    },
    'return-type': {
      begin: '(?<=\\))\\s*(:)',
      beginCaptures: {1: {name: 'keyword.operator.type.annotation.tsx'}},
      end: '(?<!:)((?=$)|(?=\\{|;|//|\\}))',
      name: 'meta.return.type.tsx',
      patterns: [
        {include: '#comment'},
        {
          begin: '(?<=:)\\s*(\\{)',
          beginCaptures: {1: {name: 'punctuation.definition.block.tsx'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
          name: 'meta.object.type.tsx',
          patterns: [{include: '#type-object-members'}]
        },
        {include: '#type-predicate-operator'},
        {include: '#type'}
      ]
    },
    statements: {
      patterns: [
        {include: '#string'},
        {include: '#template'},
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
      name: 'constant.character.escape.tsx'
    },
    'super-literal': {
      match: '(?<!\\.|\\$)\\bsuper\\b(?!\\$)',
      name: 'variable.language.super.tsx'
    },
    'support-objects': {
      patterns: [
        {
          match: '(?<!\\.|\\$)\\b(arguments)\\b(?!\\$)',
          name: 'variable.language.arguments.tsx'
        },
        {
          match:
            '(?x)(?<!\\.|\\$)\\b(Array|ArrayBuffer|Atomics|Boolean|DataView|Date|Float32Array|Float64Array|Function|Generator\n  |GeneratorFunction|Int8Array|Int16Array|Int32Array|Intl|Map|Number|Object|Promise|Proxy\n  |Reflect|RegExp|Set|SharedArrayBuffer|SIMD|String|Symbol|TypedArray\n  |Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|WeakMap|WeakSet)\\b(?!\\$)',
          name: 'support.class.builtin.tsx'
        },
        {
          match:
            '(?<!\\.|\\$)\\b((Eval|Internal|Range|Reference|Syntax|Type|URI)?Error)\\b(?!\\$)',
          name: 'support.class.error.tsx'
        },
        {
          match:
            '(?x)(?<!\\.|\\$)\\b(clear(Interval|Timeout)|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|\n  isFinite|isNaN|parseFloat|parseInt|require|set(Interval|Timeout)|super|unescape|uneval)(?=\\s*\\() ',
          name: 'support.function.tsx'
        },
        {
          captures: {
            1: {name: 'support.constant.math.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'support.function.math.tsx'},
            4: {name: 'support.constant.property.math.tsx'}
          },
          match:
            '(?x)(?<!\\.|\\$)\\b(Math)(?:\\s*(\\.)\\s*(?:\n  (abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|\n  expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|\n  round|sign|sin|sinh|sqrt|tan|tanh|trunc)\n  |\n  (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.class.console.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'support.function.console.tsx'}
          },
          match:
            '(?x)(?<!\\.|\\$)\\b(console)(?:\\s*(\\.)\\s*(\n  assert|clear|count|debug|dir|error|group|groupCollapsed|groupEnd|info|log\n  |profile|profileEnd|table|time|timeEnd|timeStamp|trace|warn))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.constant.json.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'support.function.json.tsx'}
          },
          match:
            '(?<!\\.|\\$)\\b(JSON)(?:\\s*(\\.)\\s*(parse|stringify))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'support.variable.property.tsx'},
            3: {name: 'support.constant.tsx'}
          },
          match:
            '(?x) (\\.) \\s* (?:\n  (constructor|length|prototype|__proto__) \n  |\n  (EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY))\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.variable.dom.tsx'},
            2: {name: 'support.class.dom.tsx'}
          },
          match:
            '(?x) (?<!\\.|\\$) \\b (?:\n  (document|event|navigator|performance|screen|window) \n  |\n  (AnalyserNode|ArrayBufferView|Attr|AudioBuffer|AudioBufferSourceNode|AudioContext|AudioDestinationNode|AudioListener\n  |AudioNode|AudioParam|BatteryManager|BeforeUnloadEvent|BiquadFilterNode|Blob|BufferSource|ByteString|CSS|CSSConditionRule\n  |CSSCounterStyleRule|CSSGroupingRule|CSSMatrix|CSSMediaRule|CSSPageRule|CSSPrimitiveValue|CSSRule|CSSRuleList|CSSStyleDeclaration\n  |CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSValue|CSSValueList|CanvasGradient|CanvasImageSource|CanvasPattern\n  |CanvasRenderingContext2D|ChannelMergerNode|ChannelSplitterNode|CharacterData|ChromeWorker|CloseEvent|Comment|CompositionEvent\n  |Console|ConvolverNode|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|CustomEvent|DOMError|DOMException\n  |DOMHighResTimeStamp|DOMImplementation|DOMString|DOMStringList|DOMStringMap|DOMTimeStamp|DOMTokenList|DataTransfer\n  |DataTransferItem|DataTransferItemList|DedicatedWorkerGlobalScope|DelayNode|DeviceProximityEvent|DirectoryEntry\n  |DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|Document|DocumentFragment|DocumentTouch|DocumentType|DragEvent\n  |DynamicsCompressorNode|Element|Entry|EntrySync|ErrorEvent|Event|EventListener|EventSource|EventTarget|FederatedCredential\n  |FetchEvent|File|FileEntry|FileEntrySync|FileException|FileList|FileReader|FileReaderSync|FileSystem|FileSystemSync\n  |FontFace|FormData|GainNode|Gamepad|GamepadButton|GamepadEvent|Geolocation|GlobalEventHandlers|HTMLAnchorElement\n  |HTMLAreaElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement\n  |HTMLCollection|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDialogElement|HTMLDivElement\n  |HTMLDocument|HTMLElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormControlsCollection|HTMLFormElement\n  |HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement\n  |HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMediaElement\n  |HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement\n  |HTMLOptionsCollection|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement\n  |HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement\n  |HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement\n  |HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement\n  |HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|HashChangeEvent|History|IDBCursor|IDBCursorWithValue|IDBDatabase\n  |IDBEnvironment|IDBFactory|IDBIndex|IDBKeyRange|IDBMutableFile|IDBObjectStore|IDBOpenDBRequest|IDBRequest|IDBTransaction\n  |IDBVersionChangeEvent|IIRFilterNode|IdentityManager|ImageBitmap|ImageBitmapFactories|ImageData|Index|InputDeviceCapabilities\n  |InputEvent|InstallEvent|InstallTrigger|KeyboardEvent|LinkStyle|LocalFileSystem|LocalFileSystemSync|Location|MIDIAccess\n  |MIDIConnectionEvent|MIDIInput|MIDIInputMap|MIDIOutputMap|MediaElementAudioSourceNode|MediaError|MediaKeyMessageEvent\n  |MediaKeySession|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeySystemConfiguration|MediaKeys|MediaRecorder|MediaStream\n  |MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessageChannel|MessageEvent|MessagePort|MouseEvent\n  |MutationObserver|MutationRecord|NamedNodeMap|Navigator|NavigatorConcurrentHardware|NavigatorGeolocation|NavigatorID\n  |NavigatorLanguage|NavigatorOnLine|Node|NodeFilter|NodeIterator|NodeList|NonDocumentTypeChildNode|Notification\n  |OfflineAudioCompletionEvent|OfflineAudioContext|OscillatorNode|PageTransitionEvent|PannerNode|ParentNode|PasswordCredential\n  |Path2D|PaymentAddress|PaymentRequest|PaymentResponse|Performance|PerformanceEntry|PerformanceFrameTiming|PerformanceMark\n  |PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList\n  |PerformanceResourceTiming|PerformanceTiming|PeriodicSyncEvent|PeriodicWave|Plugin|Point|PointerEvent|PopStateEvent\n  |PortCollection|Position|PositionError|PositionOptions|PresentationConnectionClosedEvent|PresentationConnectionList\n  |PresentationReceiver|ProcessingInstruction|ProgressEvent|PromiseRejectionEvent|PushEvent|PushRegistrationManager\n  |RTCCertificate|RTCConfiguration|RTCPeerConnection|RTCSessionDescriptionCallback|RTCStatsReport|RadioNodeList|RandomSource\n  |Range|ReadableByteStream|RenderingContext|SVGAElement|SVGAngle|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement\n  |SVGAnimateTransformElement|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength\n  |SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPoints|SVGAnimatedPreserveAspectRatio\n  |SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGAnimationElement|SVGCircleElement|SVGClipPathElement\n  |SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGEvent|SVGFilterElement|SVGFontElement\n  |SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement\n  |SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGradientElement|SVGHKernElement|SVGImageElement|SVGLength\n  |SVGLengthList|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMaskElement|SVGMatrix|SVGMissingGlyphElement\n  |SVGNumber|SVGNumberList|SVGPathElement|SVGPatternElement|SVGPoint|SVGPolygonElement|SVGPolylineElement|SVGPreserveAspectRatio\n  |SVGRadialGradientElement|SVGRect|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStringList\n  |SVGStylable|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTests|SVGTextElement\n  |SVGTextPositioningElement|SVGTitleElement|SVGTransform|SVGTransformList|SVGTransformable|SVGUseElement|SVGVKernElement\n  |SVGViewElement|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|ServiceWorkerState\n  |ShadowRoot|SharedWorker|SharedWorkerGlobalScope|SourceBufferList|StereoPannerNode|Storage|StorageEvent|StyleSheet\n  |StyleSheetList|SubtleCrypto|SyncEvent|Text|TextMetrics|TimeEvent|TimeRanges|Touch|TouchEvent|TouchList|Transferable\n  |TreeWalker|UIEvent|USVString|VRDisplayCapabilities|ValidityState|WaveShaperNode|WebGL|WebGLActiveInfo|WebGLBuffer\n  |WebGLContextEvent|WebGLFramebuffer|WebGLProgram|WebGLRenderbuffer|WebGLRenderingContext|WebGLShader|WebGLShaderPrecisionFormat\n  |WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES\n  |WebSocket|WebSockets|WebVTT|WheelEvent|Window|WindowBase64|WindowEventHandlers|WindowTimers|Worker|WorkerGlobalScope\n  |WorkerLocation|WorkerNavigator|XMLHttpRequest|XMLHttpRequestEventTarget|XMLSerializer|XPathExpression|XPathResult\n  |XSLTProcessor))\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'support.constant.dom.tsx'},
            3: {name: 'support.variable.property.dom.tsx'}
          },
          match:
            '(?x) (\\.) \\s* (?:\n  (ATTRIBUTE_NODE|CDATA_SECTION_NODE|COMMENT_NODE|DOCUMENT_FRAGMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE\n  |DOMSTRING_SIZE_ERR|ELEMENT_NODE|ENTITY_NODE|ENTITY_REFERENCE_NODE|HIERARCHY_REQUEST_ERR|INDEX_SIZE_ERR\n  |INUSE_ATTRIBUTE_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR\n  |NOT_SUPPORTED_ERR|NOTATION_NODE|PROCESSING_INSTRUCTION_NODE|TEXT_NODE|WRONG_DOCUMENT_ERR)\n  |\n  (_content|[xyz]|abbr|above|accept|acceptCharset|accessKey|action|align|[av]Link(?:color)?|all|alt|anchors|appCodeName\n  |appCore|applets|appMinorVersion|appName|appVersion|archive|areas|arguments|attributes|availHeight|availLeft|availTop\n  |availWidth|axis|background|backgroundColor|backgroundImage|below|bgColor|body|border|borderBottomWidth|borderColor\n  |borderLeftWidth|borderRightWidth|borderStyle|borderTopWidth|borderWidth|bottom|bufferDepth|callee|caller|caption\n  |cellPadding|cells|cellSpacing|ch|characterSet|charset|checked|childNodes|chOff|cite|classes|className|clear\n  |clientInformation|clip|clipBoardData|closed|code|codeBase|codeType|color|colorDepth|cols|colSpan|compact|complete\n  |components|content|controllers|cookie|cookieEnabled|cords|cpuClass|crypto|current|data|dateTime|declare|defaultCharset\n  |defaultChecked|defaultSelected|defaultStatus|defaultValue|defaultView|defer|description|dialogArguments|dialogHeight\n  |dialogLeft|dialogTop|dialogWidth|dir|directories|disabled|display|docmain|doctype|documentElement|elements|embeds\n  |enabledPlugin|encoding|enctype|entities|event|expando|external|face|fgColor|filename|firstChild|fontFamily|fontSize\n  |fontWeight|form|formName|forms|frame|frameBorder|frameElement|frames|hasFocus|hash|headers|height|history|host\n  |hostname|href|hreflang|hspace|htmlFor|httpEquiv|id|ids|ignoreCase|images|implementation|index|innerHeight|innerWidth\n  |input|isMap|label|lang|language|lastChild|lastIndex|lastMatch|lastModified|lastParen|layer[sXY]|left|leftContext\n  |lineHeight|link|linkColor|links|listStyleType|localName|location|locationbar|longDesc|lowsrc|lowSrc|marginBottom\n  |marginHeight|marginLeft|marginRight|marginTop|marginWidth|maxLength|media|menubar|method|mimeTypes|multiline|multiple\n  |name|nameProp|namespaces|namespaceURI|next|nextSibling|nodeName|nodeType|nodeValue|noHref|noResize|noShade|notationName\n  |notations|noWrap|object|offscreenBuffering|onLine|onreadystatechange|opener|opsProfile|options|oscpu|outerHeight\n  |outerWidth|ownerDocument|paddingBottom|paddingLeft|paddingRight|paddingTop|page[XY]|page[XY]Offset|parent|parentLayer\n  |parentNode|parentWindow|pathname|personalbar|pixelDepth|pkcs11|platform|plugins|port|prefix|previous|previousDibling\n  |product|productSub|profile|profileend|prompt|prompter|protocol|publicId|readOnly|readyState|referrer|rel|responseText\n  |responseXML|rev|right|rightContext|rowIndex|rows|rowSpan|rules|scheme|scope|screen[XY]|screenLeft|screenTop|scripts\n  |scrollbars|scrolling|sectionRowIndex|security|securityPolicy|selected|selectedIndex|selection|self|shape|siblingAbove\n  |siblingBelow|size|source|specified|standby|start|status|statusbar|statusText|style|styleSheets|suffixes|summary\n  |systemId|systemLanguage|tagName|tags|target|tBodies|text|textAlign|textDecoration|textIndent|textTransform|tFoot|tHead\n  |title|toolbar|top|type|undefined|uniqueID|updateInterval|URL|URLUnencoded|useMap|userAgent|userLanguage|userProfile\n  |vAlign|value|valueType|vendor|vendorSub|version|visibility|vspace|whiteSpace|width|X[MS]LDocument|zIndex))\\b(?!\\$|\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()'
        },
        {
          match:
            '(?x)(?<!\\.|\\$)\\b(Buffer|EventEmitter|Server|Pipe|Socket|REPLServer|ReadStream|WriteStream|Stream\n  |Inflate|Deflate|InflateRaw|DeflateRaw|GZip|GUnzip|Unzip|Zip)\\b(?!\\$)',
          name: 'support.class.node.tsx'
        },
        {
          match:
            '(?x)(?<!\\.|\\$)\\b(assert|buffer|child_process|cluster|constants|crypto|dgram|dns|domain|events|fs|http|https|net\n  |os|path|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|tty|url|util|vm|zlib)\\b(?!\\$)',
          name: 'support.module.node.tsx'
        },
        {
          captures: {
            1: {name: 'support.variable.object.process.tsx'},
            2: {name: 'punctuation.accessor.tsx'},
            3: {name: 'support.variable.property.process.tsx'},
            4: {name: 'support.function.process.tsx'}
          },
          match:
            '(?x)(?<!\\.|\\$)\\b(process)(?:(\\.)(?:\n  (arch|argv|config|connected|env|execArgv|execPath|exitCode|mainModule|pid|platform|release|stderr|stdin|stdout|title|version|versions)\n  |\n  (abort|chdir|cwd|disconnect|exit|[sg]ete?[gu]id|send|[sg]etgroups|initgroups|kill|memoryUsage|nextTick|umask|uptime|hrtime)\n))?\\b(?!\\$)'
        },
        {
          captures: {
            1: {name: 'support.type.object.module.tsx'},
            2: {name: 'support.type.object.module.tsx'},
            3: {name: 'punctuation.accessor.tsx'},
            4: {name: 'support.type.object.module.tsx'}
          },
          match:
            '(?<!\\.|\\$)\\b(?:(exports)|(module)(?:(\\.)(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)'
        },
        {
          match:
            '(?<!\\.|\\$)\\b(global|GLOBAL|root|__dirname|__filename)\\b(?!\\$)',
          name: 'support.variable.object.node.tsx'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tsx'},
            2: {name: 'support.function.event-handler.tsx'},
            3: {name: 'support.function.tsx'},
            4: {name: 'support.function.dom.tsx'}
          },
          match:
            '(?x) (\\.) \\s* \n(?:\n (on(?:Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\n   Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\n   Before(?:cut|deactivate|unload|update|paste|print|editfocus|activate)|\n   Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\n   Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\n   Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\n   Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\n   Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\n ) |\n (shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\n   scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|\n   sup|sub|substr|substring|splice|split|send|set(?:Milliseconds|Seconds|Minutes|Hours|\n   Month|Year|FullYear|Date|UTC(?:Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\n   Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|\n   savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|\n   contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|\n   createEventObject|to(?:GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\n   test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\n   untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|\n   print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|\n   fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|\n   forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|\n   abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|\n   releaseCapture|releaseEvents|go|get(?:Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\n   Time|Date|TimezoneOffset|UTC(?:Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\n   Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|\n   moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back\n ) |\n (acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|\n   appendChild|appendData|before|blur|canPlayType|captureStream|\n   caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|\n   cloneContents|cloneNode|cloneRange|close|closest|collapse|\n   compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|\n   convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|\n   createAttributeNS|createCaption|createCDATASection|createComment|\n   createContextualFragment|createDocument|createDocumentFragment|\n   createDocumentType|createElement|createElementNS|createEntityReference|\n   createEvent|createExpression|createHTMLDocument|createNodeIterator|\n   createNSResolver|createProcessingInstruction|createRange|createShadowRoot|\n   createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|\n   deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|\n   deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|\n   enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|\n   exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|\n   getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|\n   getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|\n   getClientRects|getContext|getDestinationInsertionPoints|getElementById|\n   getElementsByClassName|getElementsByName|getElementsByTagName|\n   getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|\n   getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|\n   hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|\n   insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|\n   insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|\n   isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|\n   lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|\n   moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|\n   parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|\n   previousSibling|probablySupportsContext|queryCommandEnabled|\n   queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|\n   querySelector|querySelectorAll|registerContentHandler|registerElement|\n   registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|\n   removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|\n   removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|\n   requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|\n   scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|\n   setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|\n   setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|\n   setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|\n   slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|\n   submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|\n   toDataURL|toggle|toString|values|write|writeln\n )\n)(?=\\s*\\()'
        }
      ]
    },
    'switch-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      end: '(?=\\})',
      name: 'switch-block.expr.tsx',
      patterns: [{include: '#case-clause'}, {include: '#statements'}]
    },
    'switch-expression': {
      begin: '(?<!\\.|\\$)\\b(switch)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.switch.tsx'},
        2: {name: 'meta.brace.round.tsx'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
      name: 'switch-expression.expr.tsx',
      patterns: [{include: '#expression'}]
    },
    'switch-statement': {
      begin: '(?<!\\.|\\$)(?=\\bswitch\\s*\\()',
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
      name: 'switch-statement.expr.tsx',
      patterns: [{include: '#switch-expression'}, {include: '#switch-block'}]
    },
    template: {
      begin: '([_$[:alpha:]][_$[:alnum:]]*)?(`)',
      beginCaptures: {
        1: {name: 'entity.name.function.tagged-template.tsx'},
        2: {name: 'punctuation.definition.string.template.begin.tsx'}
      },
      end: '`',
      endCaptures: {
        0: {name: 'punctuation.definition.string.template.end.tsx'}
      },
      name: 'string.template.tsx',
      patterns: [
        {include: '#template-substitution-element'},
        {include: '#string-character-escape'},
        {include: '#jsx-tag-without-attributes'},
        {include: '#jsx-child-tag'},
        {include: '#jsx-tag-invalid'},
        {include: '#jsx-evaluated-code'},
        {include: '#jsx-entities'}
      ]
    },
    'template-substitution-element': {
      begin: '\\$\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.tsx'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.tsx'}
      },
      name: 'meta.template.expression.tsx',
      patterns: [{include: '#expression'}]
    },
    'ternary-expression': {
      begin: '(\\?)',
      beginCaptures: {0: {name: 'keyword.operator.ternary.tsx'}},
      end: '(:)',
      endCaptures: {0: {name: 'keyword.operator.ternary.tsx'}},
      patterns: [{include: '#expression'}]
    },
    'this-literal': {
      match: '(?<!\\.|\\$)\\bthis\\b(?!\\$)',
      name: 'variable.language.this.tsx'
    },
    type: {
      name: 'meta.type.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric-literal'},
        {include: '#type-primitive'},
        {include: '#type-builtin-literals'},
        {include: '#type-parameters'},
        {include: '#type-tuple'},
        {include: '#type-object'},
        {include: '#type-operators'},
        {include: '#type-fn-type-parameters'},
        {include: '#type-paren-or-function-parameters'},
        {include: '#type-function-return-type'},
        {include: '#type-name'}
      ]
    },
    'type-annotation': {
      begin: ':',
      beginCaptures: {0: {name: 'keyword.operator.type.annotation.tsx'}},
      end: '(?=$|[,);\\}\\]]|//)|(?==[^>])|(?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)',
      name: 'meta.type.annotation.tsx',
      patterns: [{include: '#comment'}, {include: '#type'}]
    },
    'type-builtin-literals': {
      match: '(?<!\\.|\\$)\\b(this|true|false|undefined|null)\\b(?!\\$)',
      name: 'support.type.builtin.tsx'
    },
    'type-declaration': {
      begin:
        '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.type.type.tsx'},
        3: {name: 'entity.name.type.tsx'}
      },
      end: '(?=[};]|\\bvar\\b|\\blet\\b|\\bconst\\b|\\btype\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\bnamespace\\b|\\bmodule\\b|\\bimport\\b|\\benum\\b|\\bdeclare\\b|\\bexport\\b|\\babstract\\b|\\basync\\b)',
      name: 'meta.type.declaration.tsx',
      patterns: [
        {include: '#comment'},
        {include: '#type-parameters'},
        {include: '#type'},
        {
          captures: {1: {name: 'keyword.operator.assignment.tsx'}},
          match: '(=)\\s*'
        }
      ]
    },
    'type-fn-type-parameters': {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.new.tsx'}},
          match: '(?<!\\.|\\$)\\b(new)\\b(?=\\s*\\<)',
          name: 'meta.type.constructor.tsx'
        },
        {
          begin: '(?<!\\.|\\$)\\b(new)\\b\\s*(?=\\()',
          beginCaptures: {1: {name: 'keyword.control.new.tsx'}},
          end: '(?<=\\))',
          name: 'meta.type.constructor.tsx',
          patterns: [{include: '#function-parameters'}]
        },
        {
          begin: '(?<=\\>)\\s*(?=\\()',
          end: '(?<=\\))',
          name: 'meta.type.function.tsx',
          patterns: [{include: '#function-parameters'}]
        },
        {
          begin:
            '(?x)(\n  (?=\n    [(]\\s*(\n      ([)]) | \n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )\n  )\n)',
          end: '(?<=\\))',
          name: 'meta.type.function.tsx',
          patterns: [{include: '#function-parameters'}]
        }
      ]
    },
    'type-function-return-type': {
      begin: '=>',
      beginCaptures: {0: {name: 'storage.type.function.arrow.tsx'}},
      end: '(?<!=>)(?=[,\\]\\)\\{\\}=;>]|//|$)',
      name: 'meta.type.function.return.tsx',
      patterns: [
        {include: '#comment'},
        {
          begin: '(?<==>)\\s*(\\{)',
          beginCaptures: {1: {name: 'punctuation.definition.block.tsx'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.block.tsx'}},
          name: 'meta.object.type.tsx',
          patterns: [{include: '#type-object-members'}]
        },
        {include: '#type-predicate-operator'},
        {include: '#type'}
      ]
    },
    'type-name': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.module.tsx'},
            2: {name: 'punctuation.accessor.tsx'}
          },
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)'
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
      patterns: [{include: '#type-object-members'}]
    },
    'type-object-members': {
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
        {include: '#punctuation-semicolon'}
      ]
    },
    'type-operators': {
      patterns: [
        {include: '#typeof-operator'},
        {match: '[&|]', name: 'keyword.operator.type.tsx'},
        {
          match: '(?<!\\.|\\$)\\bkeyof\\b(?!\\$)',
          name: 'keyword.operator.expression.keyof.tsx'
        }
      ]
    },
    'type-parameters': {
      begin: '(<)',
      beginCaptures: {
        1: {name: 'punctuation.definition.typeparameters.begin.tsx'}
      },
      end: '(?=$)|(>)',
      endCaptures: {1: {name: 'punctuation.definition.typeparameters.end.tsx'}},
      name: 'meta.type.parameters.tsx',
      patterns: [
        {include: '#comment'},
        {
          match: '(?<!\\.|\\$)\\b(extends)\\b(?!\\$)',
          name: 'storage.modifier.tsx'
        },
        {include: '#type'},
        {include: '#punctuation-comma'}
      ]
    },
    'type-paren-or-function-parameters': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.tsx'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.tsx'}},
      name: 'meta.type.paren.cover.tsx',
      patterns: [{include: '#type'}, {include: '#function-parameters'}]
    },
    'type-predicate-operator': {
      match: '(?<!\\.|\\$)\\bis\\b(?!\\$)',
      name: 'keyword.operator.expression.is.tsx'
    },
    'type-primitive': {
      match:
        '(?<!\\.|\\$)\\b(string|number|boolean|symbol|any|void|never)\\b(?!\\$)',
      name: 'support.type.primitive.tsx'
    },
    'type-tuple': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.tsx'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.tsx'}},
      name: 'meta.type.tuple.tsx',
      patterns: [{include: '#type'}, {include: '#punctuation-comma'}]
    },
    'typeof-operator': {
      match: '(?<!\\.|\\$)\\btypeof\\b(?!\\$)',
      name: 'keyword.operator.expression.typeof.tsx'
    },
    'undefined-literal': {
      match: '(?<!\\.|\\$)\\bundefined\\b(?!\\$)',
      name: 'constant.language.undefined.tsx'
    },
    'var-expr': {
      begin:
        '(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(var|let|const(?!\\s+enum\\b))\\b(?!\\$)',
      beginCaptures: {
        1: {name: 'keyword.control.export.tsx'},
        2: {name: 'storage.type.tsx'}
      },
      end: '(?=$|;|}|(\\s+(of|in)\\s+))',
      name: 'meta.var.expr.tsx',
      patterns: [
        {include: '#destructuring-variable'},
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
            '(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\n  (=\\s*(\n    (async\\s+) |\n    (function\\s*[(<]) |\n    (function\\s+) |\n    ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) |\n    ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))\n  ) |\n  (:\\s*(\n    (<) |\n    ([(]\\s*(\n      ([)]) |\n      (\\.\\.\\.) |\n      ([_$[:alnum:]]+\\s*(\n        ([:,?=])|\n        ([)]\\s*=>)\n      ))\n    )))\n  )\n)',
          beginCaptures: {
            1: {name: 'meta.definition.variable.tsx entity.name.function.tsx'}
          },
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [
            {include: '#type-annotation'},
            {include: '#string'},
            {include: '#comment'}
          ]
        },
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)',
          beginCaptures: {
            1: {
              name: 'meta.definition.variable.tsx variable.other.readwrite.tsx'
            }
          },
          end: '(?=$|[;,=}]|(\\s+(of|in)\\s+))',
          name: 'meta.var-single-variable.expr.tsx',
          patterns: [
            {include: '#type-annotation'},
            {include: '#string'},
            {include: '#comment'}
          ]
        }
      ]
    },
    'variable-initializer': {
      begin: '(?<!=|!)(=)(?!=)',
      beginCaptures: {1: {name: 'keyword.operator.assignment.tsx'}},
      end: '(?=$|[,);}\\]])',
      patterns: [{include: '#expression'}]
    }
  },
  scopeName: 'source.jest.snap'
}

export default grammar
