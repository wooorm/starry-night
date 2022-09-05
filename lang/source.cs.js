// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/dotnet/csharp-tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.bf', '.cake', '.cs', '.csx', '.eq', '.linq', '.uno'],
  names: ['beef', 'c#', 'cake', 'cakescript', 'csharp', 'eq', 'uno'],
  patterns: [
    {include: '#preprocessor'},
    {include: '#comment'},
    {include: '#directives'},
    {include: '#declarations'},
    {include: '#script-top-level'}
  ],
  repository: {
    'anonymous-method-expression': {
      patterns: [
        {
          begin:
            '(?x)\n(?:\\b(async)\\b\\s*)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(=>)',
          beginCaptures: {
            1: {name: 'storage.modifier.cs'},
            2: {name: 'entity.name.variable.parameter.cs'},
            3: {name: 'keyword.operator.arrow.cs'}
          },
          end: '(?=\\)|;|}|,)',
          patterns: [
            {include: '#block'},
            {include: '#ref-modifier'},
            {include: '#expression'}
          ]
        },
        {
          begin: '(?x)\n(?:\\b(async)\\b\\s*)?\n(\\(.*?\\))\\s*\n(=>)',
          beginCaptures: {
            1: {name: 'storage.modifier.cs'},
            2: {patterns: [{include: '#lambda-parameter-list'}]},
            3: {name: 'keyword.operator.arrow.cs'}
          },
          end: '(?=\\)|;|}|,)',
          patterns: [
            {include: '#block'},
            {include: '#ref-modifier'},
            {include: '#expression'}
          ]
        },
        {
          begin: '(?x)\n(?:\\b(async)\\b\\s*)?\n(?:\\b(delegate)\\b\\s*)',
          beginCaptures: {
            1: {name: 'storage.modifier.cs'},
            2: {name: 'keyword.other.delegate.cs'}
          },
          end: '(?=\\)|;|}|,)',
          patterns: [
            {include: '#parenthesized-parameter-list'},
            {include: '#block'},
            {include: '#expression'}
          ]
        }
      ]
    },
    'anonymous-object-creation-expression': {
      begin: '\\b(new)\\b\\s*(?=\\{|$)',
      beginCaptures: {1: {name: 'keyword.other.new.cs'}},
      end: '(?<=\\})',
      patterns: [{include: '#initializer-expression'}]
    },
    argument: {
      patterns: [
        {match: '\\b(ref|out|in)\\b', name: 'storage.modifier.cs'},
        {include: '#declaration-expression-local'},
        {include: '#expression'}
      ]
    },
    'argument-list': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#named-argument'},
        {include: '#argument'},
        {include: '#punctuation-comma'}
      ]
    },
    'array-creation-expression': {
      begin:
        '(?x)\n\\b(new|stackalloc)\\b\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?\\s*\n(?=\\[)',
      beginCaptures: {
        1: {name: 'keyword.other.new.cs'},
        2: {patterns: [{include: '#type'}]}
      },
      end: '(?<=\\])',
      patterns: [{include: '#bracketed-argument-list'}]
    },
    'as-expression': {
      captures: {
        1: {name: 'keyword.other.as.cs'},
        2: {patterns: [{include: '#type'}]}
      },
      match:
        '(?x)\n(?<!\\.)\\b(as)\\b\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?'
    },
    attribute: {
      patterns: [{include: '#type-name'}, {include: '#attribute-arguments'}]
    },
    'attribute-arguments': {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.parenthesis.open.cs'}},
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#attribute-named-argument'},
        {include: '#expression'},
        {include: '#punctuation-comma'}
      ]
    },
    'attribute-named-argument': {
      begin: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?==)',
      beginCaptures: {1: {name: 'entity.name.variable.property.cs'}},
      end: '(?=(,|\\)))',
      patterns: [{include: '#operator-assignment'}, {include: '#expression'}]
    },
    'attribute-section': {
      begin:
        '(\\[)(assembly|module|field|event|method|param|property|return|type)?(\\:)?',
      beginCaptures: {
        1: {name: 'punctuation.squarebracket.open.cs'},
        2: {name: 'keyword.other.attribute-specifier.cs'},
        3: {name: 'punctuation.separator.colon.cs'}
      },
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.squarebracket.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#attribute'},
        {include: '#punctuation-comma'}
      ]
    },
    'await-expression': {
      match: '(?!\\.)\\b(await)\\b',
      name: 'keyword.other.await.cs'
    },
    'await-statement': {
      begin: '(?<!\\.)\\b(await)\\b',
      beginCaptures: {1: {name: 'keyword.other.await.cs'}},
      end: '(?=;)',
      patterns: [{include: '#statement'}]
    },
    'base-types': {
      begin: ':',
      beginCaptures: {0: {name: 'punctuation.separator.colon.cs'}},
      end: '(?=\\{|where)',
      patterns: [
        {include: '#type'},
        {include: '#punctuation-comma'},
        {include: '#preprocessor'}
      ]
    },
    block: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [{include: '#statement'}]
    },
    'boolean-literal': {
      patterns: [
        {
          match: '(?<!\\.)\\btrue\\b',
          name: 'constant.language.boolean.true.cs'
        },
        {
          match: '(?<!\\.)\\bfalse\\b',
          name: 'constant.language.boolean.false.cs'
        }
      ]
    },
    'bracketed-argument-list': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.squarebracket.open.cs'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.squarebracket.close.cs'}},
      patterns: [
        {include: '#named-argument'},
        {include: '#argument'},
        {include: '#punctuation-comma'}
      ]
    },
    'bracketed-parameter-list': {
      begin: '(?=(\\[))',
      beginCaptures: {1: {name: 'punctuation.squarebracket.open.cs'}},
      end: '(?=(\\]))',
      endCaptures: {1: {name: 'punctuation.squarebracket.close.cs'}},
      patterns: [
        {
          begin: '(?<=\\[)',
          end: '(?=\\])',
          patterns: [
            {include: '#comment'},
            {include: '#attribute-section'},
            {include: '#parameter'},
            {include: '#punctuation-comma'},
            {include: '#variable-initializer'}
          ]
        }
      ]
    },
    'break-or-continue-statement': {
      captures: {
        1: {name: 'keyword.control.flow.break.cs'},
        2: {name: 'keyword.control.flow.continue.cs'}
      },
      match: '(?<!\\.)\\b(?:(break)|(continue))\\b'
    },
    'cast-expression': {
      captures: {
        1: {name: 'punctuation.parenthesis.open.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'punctuation.parenthesis.close.cs'}
      },
      match:
        '(?x)\n(\\()\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(\\))(?=\\s*-*!*@?[_[:alnum:]\\(])'
    },
    'catch-clause': {
      begin: '(?<!\\.)\\b(catch)\\b',
      beginCaptures: {1: {name: 'keyword.control.try.catch.cs'}},
      end: '(?<=\\})',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#type'}]},
                6: {name: 'entity.name.variable.local.cs'}
              },
              match:
                '(?x)\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(?:(\\g<identifier>)\\b)?'
            }
          ]
        },
        {include: '#when-clause'},
        {include: '#comment'},
        {include: '#block'}
      ]
    },
    'char-character-escape': {
      match: '\\\\([\'"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|u[0-9a-fA-F]{4})',
      name: 'constant.character.escape.cs'
    },
    'char-literal': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.char.begin.cs'}},
      end: "(\\')|((?:[^\\\\\\n])$)",
      endCaptures: {
        1: {name: 'punctuation.definition.char.end.cs'},
        2: {name: 'invalid.illegal.newline.cs'}
      },
      name: 'string.quoted.single.cs',
      patterns: [{include: '#char-character-escape'}]
    },
    'checked-unchecked-expression': {
      begin: '(?<!\\.)\\b(?:(checked)|(unchecked))\\b\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.other.checked.cs'},
        2: {name: 'keyword.other.unchecked.cs'},
        3: {name: 'punctuation.parenthesis.open.cs'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#expression'}]
    },
    'checked-unchecked-statement': {
      begin: '(?<!\\.)\\b(?:(checked)|(unchecked))\\b\\s*(?!\\()',
      beginCaptures: {
        1: {name: 'keyword.other.checked.cs'},
        2: {name: 'keyword.other.unchecked.cs'}
      },
      end: '(?<=\\})',
      patterns: [{include: '#block'}, {include: '#comment'}]
    },
    'class-declaration': {
      begin: '(?=\\bclass\\b)',
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?x)\n\\b(class)\\b\\s+\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*',
          beginCaptures: {
            1: {name: 'keyword.other.class.cs'},
            2: {name: 'entity.name.type.class.cs'}
          },
          end: '(?=\\{)',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameter-list'},
            {include: '#base-types'},
            {include: '#generic-constraints'}
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [{include: '#class-or-struct-members'}]
        },
        {include: '#preprocessor'},
        {include: '#comment'}
      ]
    },
    'class-or-struct-members': {
      patterns: [
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#storage-modifier'},
        {include: '#type-declarations'},
        {include: '#property-declaration'},
        {include: '#field-declaration'},
        {include: '#event-declaration'},
        {include: '#indexer-declaration'},
        {include: '#variable-initializer'},
        {include: '#constructor-declaration'},
        {include: '#destructor-declaration'},
        {include: '#operator-declaration'},
        {include: '#conversion-operator-declaration'},
        {include: '#method-declaration'},
        {include: '#attribute-section'},
        {include: '#punctuation-semicolon'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
          name: 'comment.block.cs'
        },
        {
          begin: '(^\\s+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.cs'}
          },
          end: '(?=$)',
          patterns: [
            {
              begin: '(?<!/)///(?!/)',
              beginCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
              end: '(?=$)',
              name: 'comment.block.documentation.cs',
              patterns: [{include: '#xml-doc-comment'}]
            },
            {
              begin: '(?<!/)//(?:(?!/)|(?=//))',
              beginCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
              end: '(?=$)',
              name: 'comment.line.double-slash.cs'
            }
          ]
        }
      ]
    },
    'conditional-operator': {
      begin: '\\?(?!\\s*[?.\\[]|\\s*$)',
      beginCaptures: {
        0: {name: 'keyword.operator.conditional.question-mark.cs'}
      },
      end: ':',
      endCaptures: {0: {name: 'keyword.operator.conditional.colon.cs'}},
      patterns: [{include: '#expression'}]
    },
    'constructor-declaration': {
      begin: '(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()',
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.cs'}},
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\b'
        },
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'punctuation.separator.colon.cs'}},
          end: '(?=\\{|=>)',
          patterns: [{include: '#constructor-initializer'}]
        },
        {include: '#parenthesized-parameter-list'},
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#expression-body'},
        {include: '#block'}
      ]
    },
    'constructor-initializer': {
      begin: '\\b(?:(base)|(this))\\b\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'keyword.other.base.cs'},
        2: {name: 'keyword.other.this.cs'}
      },
      end: '(?<=\\))',
      patterns: [{include: '#argument-list'}]
    },
    'conversion-operator-declaration': {
      begin:
        '(?x)\n(?<explicit_or_implicit_keyword>(?:\\b(?:explicit|implicit)))\\s*\n(?<operator_keyword>(?:\\b(?:operator)))\\s*\n(?<type_name>\n  (?:\n    (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(?=\\()',
      beginCaptures: {
        1: {
          patterns: [
            {
              captures: {1: {name: 'keyword.other.explicit.cs'}},
              match: '\\b(explicit)\\b'
            },
            {
              captures: {1: {name: 'keyword.other.implicit.cs'}},
              match: '\\b(implicit)\\b'
            }
          ]
        },
        2: {name: 'keyword.other.operator-decl.cs'},
        3: {patterns: [{include: '#type'}]}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#parenthesized-parameter-list'},
        {include: '#expression-body'},
        {include: '#block'}
      ]
    },
    'declaration-expression-local': {
      captures: {
        1: {name: 'keyword.other.var.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.local.cs'}
      },
      match:
        '(?x) # e.g. int x OR var x\n(?:\n  \\b(var)\\b|\n  (?<type_name>\n    (?:\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\b\\s*\n(?=[,)\\]])'
    },
    'declaration-expression-tuple': {
      captures: {
        1: {name: 'keyword.other.var.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.tuple-element.cs'}
      },
      match:
        '(?x) # e.g. int x OR var x\n(?:\n  \\b(var)\\b|\n  (?<type_name>\n    (?:\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n                (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\b\\s*\n(?=[,)])'
    },
    declarations: {
      patterns: [
        {include: '#namespace-declaration'},
        {include: '#type-declarations'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'delegate-declaration': {
      begin:
        '(?x)\n(?:\\b(delegate)\\b)\\s+\n(?<type_name>\n  (?:\n    (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
      beginCaptures: {
        1: {name: 'keyword.other.delegate.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.type.delegate.cs'},
        8: {patterns: [{include: '#type-parameter-list'}]}
      },
      end: '(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#parenthesized-parameter-list'},
        {include: '#generic-constraints'}
      ]
    },
    'destructor-declaration': {
      begin: '(~)(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.tilde.cs'},
        2: {name: 'entity.name.function.cs'}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#parenthesized-parameter-list'},
        {include: '#expression-body'},
        {include: '#block'}
      ]
    },
    directives: {
      patterns: [
        {include: '#extern-alias-directive'},
        {include: '#using-directive'},
        {include: '#attribute-section'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'do-statement': {
      begin: '(?<!\\.)\\b(do)\\b',
      beginCaptures: {1: {name: 'keyword.control.loop.do.cs'}},
      end: '(?=;|})',
      patterns: [{include: '#statement'}]
    },
    'double-raw-interpolation': {
      begin: '(?<=[^\\{][^\\{]|^)((?:\\{)*)(\\{\\{)(?=[^\\{])',
      beginCaptures: {
        1: {name: 'string.quoted.double.cs'},
        2: {name: 'punctuation.definition.interpolation.begin.cs'}
      },
      end: '\\}\\}',
      endCaptures: {0: {name: 'punctuation.definition.interpolation.end.cs'}},
      name: 'meta.interpolation.cs',
      patterns: [{include: '#expression'}]
    },
    'element-access-expression': {
      begin:
        '(?x)\n(?:(\\?)\\s*)?                        # preceding null-conditional operator?\n(?:(\\.)\\s*)?                        # preceding dot?\n(?:(@?[_[:alpha:]][_[:alnum:]]*)\\s*)? # property name\n(?:(\\?)\\s*)?                        # null-conditional operator?\n(?=\\[)                              # open bracket of argument list',
      beginCaptures: {
        1: {name: 'keyword.operator.null-conditional.cs'},
        2: {name: 'punctuation.accessor.cs'},
        3: {name: 'variable.other.object.property.cs'},
        4: {name: 'keyword.operator.null-conditional.cs'}
      },
      end: '(?<=\\])(?!\\s*\\[)',
      patterns: [{include: '#bracketed-argument-list'}]
    },
    'else-part': {
      begin: '(?<!\\.)\\b(else)\\b',
      beginCaptures: {1: {name: 'keyword.control.conditional.else.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [{include: '#statement'}]
    },
    'enum-declaration': {
      begin: '(?=\\benum\\b)',
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?=enum)',
          end: '(?=\\{)',
          patterns: [
            {include: '#comment'},
            {
              captures: {
                1: {name: 'keyword.other.enum.cs'},
                2: {name: 'entity.name.type.enum.cs'}
              },
              match: '(enum)\\s+(@?[_[:alpha:]][_[:alnum:]]*)'
            },
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.colon.cs'}},
              end: '(?=\\{)',
              patterns: [{include: '#type'}]
            }
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [
            {include: '#preprocessor'},
            {include: '#comment'},
            {include: '#attribute-section'},
            {include: '#punctuation-comma'},
            {
              begin: '@?[_[:alpha:]][_[:alnum:]]*',
              beginCaptures: {0: {name: 'entity.name.variable.enum-member.cs'}},
              end: '(?=(,|\\}))',
              patterns: [
                {include: '#comment'},
                {include: '#variable-initializer'}
              ]
            }
          ]
        },
        {include: '#preprocessor'},
        {include: '#comment'}
      ]
    },
    'event-accessors': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [
        {match: '\\b(add)\\b', name: 'keyword.other.add.cs'},
        {match: '\\b(remove)\\b', name: 'keyword.other.remove.cs'},
        {include: '#comment'},
        {include: '#attribute-section'},
        {include: '#expression-body'},
        {include: '#block'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'event-declaration': {
      begin:
        '(?x)\n\\b(event)\\b\\s*\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<event_names>\\g<identifier>(?:\\s*,\\s*\\g<identifier>)*)\\s*\n(?=\\{|;|$)',
      beginCaptures: {
        1: {name: 'keyword.other.event.cs'},
        2: {patterns: [{include: '#type'}]},
        8: {patterns: [{include: '#type'}, {include: '#punctuation-accessor'}]},
        9: {
          patterns: [
            {
              match: '@?[_[:alpha:]][_[:alnum:]]*',
              name: 'entity.name.variable.event.cs'
            },
            {include: '#punctuation-comma'}
          ]
        }
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#event-accessors'},
        {include: '#punctuation-comma'}
      ]
    },
    expression: {
      patterns: [
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#checked-unchecked-expression'},
        {include: '#typeof-or-default-expression'},
        {include: '#nameof-expression'},
        {include: '#throw-expression'},
        {include: '#raw-interpolated-string'},
        {include: '#interpolated-string'},
        {include: '#verbatim-interpolated-string'},
        {include: '#this-or-base-expression'},
        {include: '#switch-expression'},
        {include: '#conditional-operator'},
        {include: '#expression-operators'},
        {include: '#await-expression'},
        {include: '#query-expression'},
        {include: '#as-expression'},
        {include: '#is-expression'},
        {include: '#anonymous-method-expression'},
        {include: '#object-creation-expression'},
        {include: '#array-creation-expression'},
        {include: '#anonymous-object-creation-expression'},
        {include: '#invocation-expression'},
        {include: '#member-access-expression'},
        {include: '#element-access-expression'},
        {include: '#cast-expression'},
        {include: '#literal'},
        {include: '#parenthesized-expression'},
        {include: '#tuple-deconstruction-assignment'},
        {include: '#initializer-expression'},
        {include: '#identifier'}
      ]
    },
    'expression-body': {
      begin: '=>',
      beginCaptures: {0: {name: 'keyword.operator.arrow.cs'}},
      end: '(?=[,\\);}])',
      patterns: [{include: '#ref-modifier'}, {include: '#expression'}]
    },
    'expression-operators': {
      patterns: [
        {
          match: '\\*=|/=|%=|\\+=|-=|\\?\\?=',
          name: 'keyword.operator.assignment.compound.cs'
        },
        {
          match: '\\&=|\\^=|<<=|>>=|\\|=',
          name: 'keyword.operator.assignment.compound.bitwise.cs'
        },
        {match: '<<|>>', name: 'keyword.operator.bitwise.shift.cs'},
        {match: '==|!=', name: 'keyword.operator.comparison.cs'},
        {match: '<=|>=|<|>', name: 'keyword.operator.relational.cs'},
        {match: '\\!|&&|\\|\\|', name: 'keyword.operator.logical.cs'},
        {match: '\\&|~|\\^|\\|', name: 'keyword.operator.bitwise.cs'},
        {match: '\\=', name: 'keyword.operator.assignment.cs'},
        {match: '--', name: 'keyword.operator.decrement.cs'},
        {match: '\\+\\+', name: 'keyword.operator.increment.cs'},
        {match: '%|\\*|/|-|\\+', name: 'keyword.operator.arithmetic.cs'},
        {match: '\\?\\?', name: 'keyword.operator.null-coalescing.cs'}
      ]
    },
    'extern-alias-directive': {
      begin: '\\s*(extern)\\b\\s*(alias)\\b\\s*(@?[_[:alpha:]][_[:alnum:]]*)',
      beginCaptures: {
        1: {name: 'keyword.other.extern.cs'},
        2: {name: 'keyword.other.alias.cs'},
        3: {name: 'variable.other.alias.cs'}
      },
      end: '(?=;)'
    },
    'field-declaration': {
      begin:
        '(?x)\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)\\s* # first field name\n(?!=>|==)(?=,|;|=|$)',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        6: {name: 'entity.name.variable.field.cs'}
      },
      end: '(?=;)',
      patterns: [
        {
          match: '@?[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.variable.field.cs'
        },
        {include: '#punctuation-comma'},
        {include: '#comment'},
        {include: '#variable-initializer'},
        {include: '#class-or-struct-members'}
      ]
    },
    'finally-clause': {
      begin: '(?<!\\.)\\b(finally)\\b',
      beginCaptures: {1: {name: 'keyword.control.try.finally.cs'}},
      end: '(?<=\\})',
      patterns: [{include: '#comment'}, {include: '#block'}]
    },
    'for-statement': {
      begin: '(?<!\\.)\\b(for)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.loop.for.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [
            {include: '#local-variable-declaration'},
            {include: '#expression'},
            {include: '#punctuation-comma'},
            {include: '#punctuation-semicolon'}
          ]
        },
        {include: '#statement'}
      ]
    },
    'foreach-statement': {
      begin: '(?<!\\.)\\b(foreach)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.loop.foreach.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [
            {
              captures: {
                1: {name: 'keyword.other.var.cs'},
                2: {patterns: [{include: '#type'}]},
                7: {name: 'entity.name.variable.local.cs'},
                8: {name: 'keyword.control.loop.in.cs'}
              },
              match:
                '(?x)\n(?:\n  (\\bvar\\b)|\n  (?<type_name>\n    (?:\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s+\n\\b(in)\\b'
            },
            {
              captures: {
                1: {name: 'keyword.other.var.cs'},
                2: {
                  patterns: [
                    {include: '#tuple-declaration-deconstruction-element-list'}
                  ]
                },
                3: {name: 'keyword.control.loop.in.cs'}
              },
              match:
                '(?x) # match foreach (var (x, y) in ...)\n(?:\\b(var)\\b\\s*)?\n(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s+\n\\b(in)\\b'
            },
            {include: '#expression'}
          ]
        },
        {include: '#statement'}
      ]
    },
    'generic-constraints': {
      begin: '(where)\\s+(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)',
      beginCaptures: {
        1: {name: 'keyword.other.where.cs'},
        2: {name: 'entity.name.type.type-parameter.cs'},
        3: {name: 'punctuation.separator.colon.cs'}
      },
      end: '(?=\\{|where|;|=>)',
      patterns: [
        {match: '\\bclass\\b', name: 'keyword.other.class.cs'},
        {match: '\\bstruct\\b', name: 'keyword.other.struct.cs'},
        {
          captures: {
            1: {name: 'keyword.other.new.cs'},
            2: {name: 'punctuation.parenthesis.open.cs'},
            3: {name: 'punctuation.parenthesis.close.cs'}
          },
          match: '(new)\\s*(\\()\\s*(\\))'
        },
        {include: '#type'},
        {include: '#punctuation-comma'},
        {include: '#generic-constraints'}
      ]
    },
    'goto-statement': {
      begin: '(?<!\\.)\\b(goto)\\b',
      beginCaptures: {1: {name: 'keyword.control.goto.cs'}},
      end: '(?=;)',
      patterns: [
        {
          begin: '\\b(case)\\b',
          beginCaptures: {1: {name: 'keyword.control.case.cs'}},
          end: '(?=;)',
          patterns: [{include: '#expression'}]
        },
        {
          captures: {1: {name: 'keyword.control.default.cs'}},
          match: '\\b(default)\\b'
        },
        {match: '@?[_[:alpha:]][_[:alnum:]]*', name: 'entity.name.label.cs'}
      ]
    },
    'group-by': {
      captures: {1: {name: 'keyword.query.by.cs'}},
      match: '\\b(by)\\b\\s*'
    },
    'group-clause': {
      begin: '\\b(group)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.query.group.cs'}},
      end: '(?=;|\\))',
      patterns: [
        {include: '#group-by'},
        {include: '#group-into'},
        {include: '#query-body'},
        {include: '#expression'}
      ]
    },
    'group-into': {
      captures: {
        1: {name: 'keyword.query.into.cs'},
        2: {name: 'entity.name.variable.range-variable.cs'}
      },
      match: '(?x)\n\\b(into)\\b\\s*\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*'
    },
    identifier: {
      match: '@?[_[:alpha:]][_[:alnum:]]*',
      name: 'variable.other.readwrite.cs'
    },
    'if-statement': {
      begin: '(?<!\\.)\\b(if)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.conditional.if.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [{include: '#expression'}]
        },
        {include: '#statement'}
      ]
    },
    'indexer-declaration': {
      begin:
        '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<indexer_name>this)\\s*\n(?=\\[)',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        7: {patterns: [{include: '#type'}, {include: '#punctuation-accessor'}]},
        8: {name: 'keyword.other.this.cs'}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#bracketed-parameter-list'},
        {include: '#property-accessors'},
        {include: '#expression-body'},
        {include: '#variable-initializer'}
      ]
    },
    'initializer-expression': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'interface-declaration': {
      begin: '(?=\\binterface\\b)',
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?x)\n(interface)\\b\\s+\n(@?[_[:alpha:]][_[:alnum:]]*)',
          beginCaptures: {
            1: {name: 'keyword.other.interface.cs'},
            2: {name: 'entity.name.type.interface.cs'}
          },
          end: '(?=\\{)',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameter-list'},
            {include: '#base-types'},
            {include: '#generic-constraints'}
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [{include: '#interface-members'}]
        },
        {include: '#preprocessor'},
        {include: '#comment'}
      ]
    },
    'interface-members': {
      patterns: [
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#property-declaration'},
        {include: '#event-declaration'},
        {include: '#indexer-declaration'},
        {include: '#method-declaration'},
        {include: '#attribute-section'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'interpolated-string': {
      begin: '\\$"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '(")|((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.cs'},
        2: {name: 'invalid.illegal.newline.cs'}
      },
      name: 'string.quoted.double.cs',
      patterns: [
        {include: '#string-character-escape'},
        {include: '#interpolation'}
      ]
    },
    interpolation: {
      begin: '(?<=[^\\{]|^)((?:\\{\\{)*)(\\{)(?=[^\\{])',
      beginCaptures: {
        1: {name: 'string.quoted.double.cs'},
        2: {name: 'punctuation.definition.interpolation.begin.cs'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.interpolation.end.cs'}},
      name: 'meta.interpolation.cs',
      patterns: [{include: '#expression'}]
    },
    'invocation-expression': {
      begin:
        '(?x)\n(?:(\\?)\\s*)?                                     # preceding null-conditional operator?\n(?:(\\.)\\s*)?                                     # preceding dot?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                   # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
      beginCaptures: {
        1: {name: 'keyword.operator.null-conditional.cs'},
        2: {name: 'punctuation.accessor.cs'},
        3: {name: 'entity.name.function.cs'},
        4: {patterns: [{include: '#type-arguments'}]}
      },
      end: '(?<=\\))',
      patterns: [{include: '#argument-list'}]
    },
    'is-expression': {
      captures: {
        1: {name: 'keyword.other.is.cs'},
        2: {patterns: [{include: '#type'}]}
      },
      match:
        '(?x)\n(?<!\\.)\\b(is)\\b\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?'
    },
    'join-clause': {
      begin:
        '(?x)\n\\b(join)\\b\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?\n\\s+(\\g<identifier>)\\b\\s*\n\\b(in)\\b\\s*',
      beginCaptures: {
        1: {name: 'keyword.query.join.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.range-variable.cs'},
        8: {name: 'keyword.query.in.cs'}
      },
      end: '(?=;|\\))',
      patterns: [
        {include: '#join-on'},
        {include: '#join-equals'},
        {include: '#join-into'},
        {include: '#query-body'},
        {include: '#expression'}
      ]
    },
    'join-equals': {
      captures: {1: {name: 'keyword.query.equals.cs'}},
      match: '\\b(equals)\\b\\s*'
    },
    'join-into': {
      captures: {
        1: {name: 'keyword.query.into.cs'},
        2: {name: 'entity.name.variable.range-variable.cs'}
      },
      match: '(?x)\n\\b(into)\\b\\s*\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*'
    },
    'join-on': {
      captures: {1: {name: 'keyword.query.on.cs'}},
      match: '\\b(on)\\b\\s*'
    },
    'labeled-statement': {
      captures: {
        1: {name: 'entity.name.label.cs'},
        2: {name: 'punctuation.separator.colon.cs'}
      },
      match: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)'
    },
    'lambda-parameter': {
      captures: {
        1: {name: 'storage.modifier.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.parameter.cs'}
      },
      match:
        '(?x)\n(?:\\b(ref|out|in)\\b)?\\s*\n(?:(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+)?\n(\\g<identifier>)\\b\\s*\n(?=[,)])'
    },
    'lambda-parameter-list': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#attribute-section'},
        {include: '#lambda-parameter'},
        {include: '#punctuation-comma'}
      ]
    },
    'let-clause': {
      begin:
        '(?x)\n\\b(let)\\b\\s*\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(=)\\s*',
      beginCaptures: {
        1: {name: 'keyword.query.let.cs'},
        2: {name: 'entity.name.variable.range-variable.cs'},
        3: {name: 'keyword.operator.assignment.cs'}
      },
      end: '(?=;|\\))',
      patterns: [{include: '#query-body'}, {include: '#expression'}]
    },
    literal: {
      patterns: [
        {include: '#boolean-literal'},
        {include: '#null-literal'},
        {include: '#numeric-literal'},
        {include: '#char-literal'},
        {include: '#raw-string-literal'},
        {include: '#string-literal'},
        {include: '#verbatim-string-literal'},
        {include: '#tuple-literal'}
      ]
    },
    'local-constant-declaration': {
      begin:
        '(?x)\n(?<const_keyword>\\b(?:const)\\b)\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=)',
      beginCaptures: {
        1: {name: 'storage.modifier.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.local.cs'}
      },
      end: '(?=;)',
      patterns: [
        {
          match: '@?[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.variable.local.cs'
        },
        {include: '#punctuation-comma'},
        {include: '#comment'},
        {include: '#variable-initializer'}
      ]
    },
    'local-declaration': {
      patterns: [
        {include: '#local-constant-declaration'},
        {include: '#local-variable-declaration'},
        {include: '#local-function-declaration'},
        {include: '#local-tuple-var-deconstruction'}
      ]
    },
    'local-function-declaration': {
      patterns: [{include: '#method-declaration'}]
    },
    'local-tuple-var-deconstruction': {
      begin:
        '(?x) # e.g. var (x, y) = GetPoint();\n(?:\\b(var)\\b\\s*)\n(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*\n(?=;|=|\\))',
      beginCaptures: {
        1: {name: 'keyword.other.var.cs'},
        2: {
          patterns: [
            {include: '#tuple-declaration-deconstruction-element-list'}
          ]
        }
      },
      end: '(?=;|\\))',
      patterns: [{include: '#comment'}, {include: '#variable-initializer'}]
    },
    'local-variable-declaration': {
      begin:
        '(?x)\n(?:\n  (?:(\\busing)\\s+)?\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
      beginCaptures: {
        1: {name: 'keyword.other.using.cs'},
        10: {name: 'entity.name.variable.local.cs'},
        2: {name: 'storage.modifier.cs'},
        3: {name: 'storage.modifier.cs'},
        4: {name: 'keyword.other.var.cs'},
        5: {patterns: [{include: '#type'}]}
      },
      end: '(?=;|\\))',
      patterns: [
        {
          match: '@?[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.variable.local.cs'
        },
        {include: '#punctuation-comma'},
        {include: '#comment'},
        {include: '#variable-initializer'}
      ]
    },
    'lock-statement': {
      begin: '(?<!\\.)\\b(lock)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.other.lock.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [{include: '#expression'}]
        },
        {include: '#statement'}
      ]
    },
    'member-access-expression': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.null-conditional.cs'},
            2: {name: 'punctuation.accessor.cs'},
            3: {name: 'variable.other.object.property.cs'}
          },
          match:
            '(?x)\n(?:(\\?)\\s*)?                   # preceding null-conditional operator?\n(\\.)\\s*                        # preceding dot\n(@?[_[:alpha:]][_[:alnum:]]*)\\s* # property name\n(?![_[:alnum:]]|\\(|(\\?)?\\[|<)  # next character is not alpha-numeric, nor a (, [, or <. Also, test for ?['
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.cs'},
            2: {name: 'variable.other.object.cs'},
            3: {patterns: [{include: '#type-arguments'}]}
          },
          match:
            '(?x)\n(\\.)?\\s*\n(@?[_[:alpha:]][_[:alnum:]]*)\n(?<type_params>\\s*<([^<>]|\\g<type_params>)+>\\s*)\n(?=\n  (\\s*\\?)?\n  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*\n)'
        },
        {
          captures: {1: {name: 'variable.other.object.cs'}},
          match:
            '(?x)\n(@?[_[:alpha:]][_[:alnum:]]*)\n(?=\n  (\\s*\\?)?\n  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*\n)'
        }
      ]
    },
    'method-declaration': {
      begin:
        '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        7: {patterns: [{include: '#type'}, {include: '#punctuation-accessor'}]},
        8: {name: 'entity.name.function.cs'},
        9: {patterns: [{include: '#type-parameter-list'}]}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#parenthesized-parameter-list'},
        {include: '#generic-constraints'},
        {include: '#expression-body'},
        {include: '#block'}
      ]
    },
    'named-argument': {
      begin: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)',
      beginCaptures: {
        1: {name: 'entity.name.variable.parameter.cs'},
        2: {name: 'punctuation.separator.colon.cs'}
      },
      end: '(?=(,|\\)|\\]))',
      patterns: [{include: '#argument'}]
    },
    'nameof-expression': {
      begin: '(?<!\\.)\\b(nameof)\\b\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.other.nameof.cs'},
        2: {name: 'punctuation.parenthesis.open.cs'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#expression'}]
    },
    'namespace-declaration': {
      begin: '\\b(namespace)\\s+',
      beginCaptures: {1: {name: 'keyword.other.namespace.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {
          match: '@?[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.type.namespace.cs'
        },
        {include: '#punctuation-accessor'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [
            {include: '#declarations'},
            {include: '#using-directive'},
            {include: '#punctuation-semicolon'}
          ]
        }
      ]
    },
    'null-literal': {
      match: '(?<!\\.)\\bnull\\b',
      name: 'constant.language.null.cs'
    },
    'numeric-literal': {
      captures: {
        0: {
          patterns: [
            {
              begin: '(?=.)',
              end: '$',
              patterns: [
                {
                  captures: {
                    10: {name: 'keyword.operator.arithmetic.cs'},
                    11: {
                      name: 'constant.numeric.decimal.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    12: {name: 'constant.numeric.other.suffix.cs'},
                    2: {
                      name: 'constant.numeric.decimal.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    3: {name: 'constant.numeric.other.separator.thousands.cs'},
                    4: {name: 'constant.numeric.other.separator.decimals.cs'},
                    5: {
                      name: 'constant.numeric.decimal.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    6: {name: 'constant.numeric.other.separator.thousands.cs'},
                    8: {name: 'constant.numeric.other.exponent.cs'},
                    9: {name: 'keyword.operator.arithmetic.cs'}
                  },
                  match:
                    '(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?([fFdDmM](?!\\w))?$'
                },
                {
                  captures: {
                    1: {name: 'constant.numeric.other.preffix.binary.cs'},
                    2: {
                      name: 'constant.numeric.binary.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    3: {name: 'constant.numeric.other.separator.thousands.cs'},
                    4: {name: 'constant.numeric.other.suffix.cs'}
                  },
                  match:
                    '(\\G0[bB])([01_](?:[01_]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  captures: {
                    1: {name: 'constant.numeric.other.preffix.hex.cs'},
                    2: {
                      name: 'constant.numeric.hex.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    3: {name: 'constant.numeric.other.separator.thousands.cs'},
                    4: {name: 'constant.numeric.other.suffix.cs'}
                  },
                  match:
                    '(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  captures: {
                    2: {
                      name: 'constant.numeric.decimal.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    3: {name: 'constant.numeric.other.separator.thousands.cs'},
                    5: {name: 'constant.numeric.other.exponent.cs'},
                    6: {name: 'keyword.operator.arithmetic.cs'},
                    7: {name: 'keyword.operator.arithmetic.cs'},
                    8: {
                      name: 'constant.numeric.decimal.cs',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.cs'
                        }
                      ]
                    },
                    9: {name: 'constant.numeric.other.suffix.cs'}
                  },
                  match:
                    '(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  match: '(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])+',
                  name: 'invalid.illegal.constant.numeric.cs'
                }
              ]
            }
          ]
        }
      },
      match: '(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])*'
    },
    'object-creation-expression': {
      patterns: [
        {include: '#object-creation-expression-with-parameters'},
        {include: '#object-creation-expression-with-no-parameters'}
      ]
    },
    'object-creation-expression-with-no-parameters': {
      captures: {
        1: {name: 'keyword.other.new.cs'},
        2: {patterns: [{include: '#type'}]}
      },
      match:
        '(?x)\n(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(?=\\{|$)'
    },
    'object-creation-expression-with-parameters': {
      begin:
        '(?x)\n(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(?=\\()',
      beginCaptures: {
        1: {name: 'keyword.other.new.cs'},
        2: {patterns: [{include: '#type'}]}
      },
      end: '(?<=\\))',
      patterns: [{include: '#argument-list'}]
    },
    'operator-assignment': {
      match: '(?<!=|!)(=)(?!=)',
      name: 'keyword.operator.assignment.cs'
    },
    'operator-declaration': {
      begin:
        '(?x)\n(?<type_name>\n  (?:\n    (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s*\n(?<operator_keyword>(?:\\b(?:operator)))\\s*\n(?<operator>(?:\\+|-|\\*|/|%|&|\\||\\^|\\<\\<|\\>\\>|==|!=|\\>|\\<|\\>=|\\<=|!|~|\\+\\+|--|true|false))\\s*\n(?=\\()',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        6: {name: 'keyword.other.operator-decl.cs'},
        7: {name: 'entity.name.function.cs'}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#parenthesized-parameter-list'},
        {include: '#expression-body'},
        {include: '#block'}
      ]
    },
    'orderby-clause': {
      begin: '\\b(orderby)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.query.orderby.cs'}},
      end: '(?=;|\\))',
      patterns: [
        {include: '#ordering-direction'},
        {include: '#query-body'},
        {include: '#expression'},
        {include: '#punctuation-comma'}
      ]
    },
    'ordering-direction': {
      captures: {
        1: {name: 'keyword.query.ascending.cs'},
        2: {name: 'keyword.query.descending.cs'}
      },
      match: '\\b(?:(ascending)|(descending))\\b'
    },
    parameter: {
      captures: {
        1: {name: 'storage.modifier.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.parameter.cs'}
      },
      match:
        '(?x)\n(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)'
    },
    'parenthesized-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#expression'}]
    },
    'parenthesized-parameter-list': {
      begin: '(\\()',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '(\\))',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#attribute-section'},
        {include: '#parameter'},
        {include: '#punctuation-comma'},
        {include: '#variable-initializer'}
      ]
    },
    preprocessor: {
      begin: '^\\s*(\\#)\\s*',
      beginCaptures: {1: {name: 'punctuation.separator.hash.cs'}},
      end: '(?<=$)',
      name: 'meta.preprocessor.cs',
      patterns: [
        {include: '#comment'},
        {include: '#preprocessor-define-or-undef'},
        {include: '#preprocessor-if-or-elif'},
        {include: '#preprocessor-else-or-endif'},
        {include: '#preprocessor-warning-or-error'},
        {include: '#preprocessor-region'},
        {include: '#preprocessor-endregion'},
        {include: '#preprocessor-load'},
        {include: '#preprocessor-r'},
        {include: '#preprocessor-line'},
        {include: '#preprocessor-pragma-warning'},
        {include: '#preprocessor-pragma-checksum'}
      ]
    },
    'preprocessor-define-or-undef': {
      captures: {
        1: {name: 'keyword.preprocessor.define.cs'},
        2: {name: 'keyword.preprocessor.undef.cs'},
        3: {name: 'entity.name.variable.preprocessor.symbol.cs'}
      },
      match: '\\b(?:(define)|(undef))\\b\\s*\\b([_[:alpha:]][_[:alnum:]]*)\\b'
    },
    'preprocessor-else-or-endif': {
      captures: {
        1: {name: 'keyword.preprocessor.else.cs'},
        2: {name: 'keyword.preprocessor.endif.cs'}
      },
      match: '\\b(?:(else)|(endif))\\b'
    },
    'preprocessor-endregion': {
      captures: {1: {name: 'keyword.preprocessor.endregion.cs'}},
      match: '\\b(endregion)\\b'
    },
    'preprocessor-expression': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [{include: '#preprocessor-expression'}]
        },
        {
          captures: {
            1: {name: 'constant.language.boolean.true.cs'},
            2: {name: 'constant.language.boolean.false.cs'},
            3: {name: 'entity.name.variable.preprocessor.symbol.cs'}
          },
          match: '\\b(?:(true)|(false)|([_[:alpha:]][_[:alnum:]]*))\\b'
        },
        {
          captures: {
            1: {name: 'keyword.operator.comparison.cs'},
            2: {name: 'keyword.operator.logical.cs'}
          },
          match: '(==|!=)|(\\!|&&|\\|\\|)'
        }
      ]
    },
    'preprocessor-if-or-elif': {
      begin: '\\b(?:(if)|(elif))\\b',
      beginCaptures: {
        1: {name: 'keyword.preprocessor.if.cs'},
        2: {name: 'keyword.preprocessor.elif.cs'}
      },
      end: '(?=$)',
      patterns: [{include: '#comment'}, {include: '#preprocessor-expression'}]
    },
    'preprocessor-line': {
      begin: '\\b(line)\\b',
      beginCaptures: {1: {name: 'keyword.preprocessor.line.cs'}},
      end: '(?=$)',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.preprocessor.default.cs'},
            2: {name: 'keyword.preprocessor.hidden.cs'}
          },
          match: '\\b(?:(default|hidden))'
        },
        {captures: {0: {name: 'constant.numeric.decimal.cs'}}, match: '[0-9]+'},
        {captures: {0: {name: 'string.quoted.double.cs'}}, match: '\\"[^"]*\\"'}
      ]
    },
    'preprocessor-load': {
      begin: '\\b(load)\\b',
      beginCaptures: {1: {name: 'keyword.preprocessor.load.cs'}},
      end: '(?=$)',
      patterns: [
        {captures: {0: {name: 'string.quoted.double.cs'}}, match: '\\"[^"]*\\"'}
      ]
    },
    'preprocessor-pragma-checksum': {
      captures: {
        1: {name: 'keyword.preprocessor.pragma.cs'},
        2: {name: 'keyword.preprocessor.checksum.cs'},
        3: {name: 'string.quoted.double.cs'},
        4: {name: 'string.quoted.double.cs'},
        5: {name: 'string.quoted.double.cs'}
      },
      match:
        '\\b(pragma)\\b\\s*\\b(checksum)\\b\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")'
    },
    'preprocessor-pragma-warning': {
      captures: {
        1: {name: 'keyword.preprocessor.pragma.cs'},
        2: {name: 'keyword.preprocessor.warning.cs'},
        3: {name: 'keyword.preprocessor.disable.cs'},
        4: {name: 'keyword.preprocessor.restore.cs'},
        5: {
          patterns: [
            {
              captures: {0: {name: 'constant.numeric.decimal.cs'}},
              match: '[0-9]+'
            },
            {include: '#punctuation-comma'}
          ]
        }
      },
      match:
        '\\b(pragma)\\b\\s*\\b(warning)\\b\\s*\\b(?:(disable)|(restore))\\b(\\s*[0-9]+(?:\\s*,\\s*[0-9]+)?)?'
    },
    'preprocessor-r': {
      begin: '\\b(r)\\b',
      beginCaptures: {1: {name: 'keyword.preprocessor.r.cs'}},
      end: '(?=$)',
      patterns: [
        {captures: {0: {name: 'string.quoted.double.cs'}}, match: '\\"[^"]*\\"'}
      ]
    },
    'preprocessor-region': {
      captures: {
        1: {name: 'keyword.preprocessor.region.cs'},
        2: {name: 'string.unquoted.preprocessor.message.cs'}
      },
      match: '\\b(region)\\b\\s*(.*)(?=$)'
    },
    'preprocessor-warning-or-error': {
      captures: {
        1: {name: 'keyword.preprocessor.warning.cs'},
        2: {name: 'keyword.preprocessor.error.cs'},
        3: {name: 'string.unquoted.preprocessor.message.cs'}
      },
      match: '\\b(?:(warning)|(error))\\b\\s*(.*)(?=$)'
    },
    'property-accessors': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [
        {
          match: '\\b(private|protected|internal)\\b',
          name: 'storage.modifier.cs'
        },
        {match: '\\b(get)\\b', name: 'keyword.other.get.cs'},
        {match: '\\b(set)\\b', name: 'keyword.other.set.cs'},
        {match: '\\b(init)\\b', name: 'keyword.other.init.cs'},
        {include: '#comment'},
        {include: '#attribute-section'},
        {include: '#expression-body'},
        {include: '#block'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'property-declaration': {
      begin:
        "(?x)\n\n# The negative lookahead below ensures that we don't match nested types\n# or other declarations as properties.\n(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)\n\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<property_name>\\g<identifier>)\\s*\n(?=\\{|=>|$)",
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        7: {patterns: [{include: '#type'}, {include: '#punctuation-accessor'}]},
        8: {name: 'entity.name.variable.property.cs'}
      },
      end: '(?<=\\})|(?=;)',
      patterns: [
        {include: '#comment'},
        {include: '#property-accessors'},
        {include: '#expression-body'},
        {include: '#variable-initializer'},
        {include: '#class-or-struct-members'}
      ]
    },
    'punctuation-accessor': {match: '\\.', name: 'punctuation.accessor.cs'},
    'punctuation-comma': {match: ',', name: 'punctuation.separator.comma.cs'},
    'punctuation-semicolon': {
      match: ';',
      name: 'punctuation.terminator.statement.cs'
    },
    'query-body': {
      patterns: [
        {include: '#let-clause'},
        {include: '#where-clause'},
        {include: '#join-clause'},
        {include: '#orderby-clause'},
        {include: '#select-clause'},
        {include: '#group-clause'}
      ]
    },
    'query-expression': {
      begin:
        '(?x)\n\\b(from)\\b\\s*\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?\n\\s+(\\g<identifier>)\\b\\s*\n\\b(in)\\b\\s*',
      beginCaptures: {
        1: {name: 'keyword.query.from.cs'},
        2: {patterns: [{include: '#type'}]},
        7: {name: 'entity.name.variable.range-variable.cs'},
        8: {name: 'keyword.query.in.cs'}
      },
      end: '(?=;|\\))',
      patterns: [{include: '#query-body'}, {include: '#expression'}]
    },
    'raw-interpolated-string': {
      patterns: [
        {
          include:
            '#raw-interpolated-string-five-or-more-quote-one-or-more-interpolation'
        },
        {
          include:
            '#raw-interpolated-string-three-or-more-quote-three-or-more-interpolation'
        },
        {
          include:
            '#raw-interpolated-string-quadruple-quote-double-interpolation'
        },
        {
          include:
            '#raw-interpolated-string-quadruple-quote-single-interpolation'
        },
        {include: '#raw-interpolated-string-triple-quote-double-interpolation'},
        {include: '#raw-interpolated-string-triple-quote-single-interpolation'}
      ]
    },
    'raw-interpolated-string-five-or-more-quote-one-or-more-interpolation': {
      begin: '\\$+"""""+',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""""+',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs'
    },
    'raw-interpolated-string-quadruple-quote-double-interpolation': {
      begin: '\\$\\$""""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '""""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [{include: '#double-raw-interpolation'}]
    },
    'raw-interpolated-string-quadruple-quote-single-interpolation': {
      begin: '\\$""""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '""""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [{include: '#raw-interpolation'}]
    },
    'raw-interpolated-string-three-or-more-quote-three-or-more-interpolation': {
      begin: '\\$\\$\\$+"""+',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""+',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs'
    },
    'raw-interpolated-string-triple-quote-double-interpolation': {
      begin: '\\$\\$"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [{include: '#double-raw-interpolation'}]
    },
    'raw-interpolated-string-triple-quote-single-interpolation': {
      begin: '\\$"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [{include: '#raw-interpolation'}]
    },
    'raw-interpolation': {
      begin: '(?<=[^\\{]|^)((?:\\{)*)(\\{)(?=[^\\{])',
      beginCaptures: {
        1: {name: 'string.quoted.double.cs'},
        2: {name: 'punctuation.definition.interpolation.begin.cs'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.interpolation.end.cs'}},
      name: 'meta.interpolation.cs',
      patterns: [{include: '#expression'}]
    },
    'raw-string-literal': {
      patterns: [
        {include: '#raw-string-literal-more'},
        {include: '#raw-string-literal-quadruple'},
        {include: '#raw-string-literal-triple'}
      ]
    },
    'raw-string-literal-more': {
      begin: '"""""+',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""""+',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs'
    },
    'raw-string-literal-quadruple': {
      begin: '""""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '""""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs'
    },
    'raw-string-literal-triple': {
      begin: '"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs'
    },
    'readonly-modifier': {
      match: '\\b(readonly)\\b',
      name: 'storage.modifier.cs'
    },
    'record-declaration': {
      begin: '(?=\\brecord\\b)',
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?x)\n(record)\\b\\s+\n(@?[_[:alpha:]][_[:alnum:]]*)',
          beginCaptures: {
            1: {name: 'keyword.other.record.cs'},
            2: {name: 'entity.name.type.record.cs'}
          },
          end: '(?=\\{)',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameter-list'},
            {include: '#base-types'},
            {include: '#generic-constraints'}
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [{include: '#class-or-struct-members'}]
        },
        {include: '#preprocessor'},
        {include: '#comment'}
      ]
    },
    'ref-modifier': {match: '\\b(ref)\\b', name: 'storage.modifier.cs'},
    'return-statement': {
      begin: '(?<!\\.)\\b(return)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.return.cs'}},
      end: '(?=;)',
      patterns: [{include: '#ref-modifier'}, {include: '#expression'}]
    },
    'script-top-level': {
      patterns: [
        {include: '#method-declaration'},
        {include: '#statement'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'select-clause': {
      begin: '\\b(select)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.query.select.cs'}},
      end: '(?=;|\\))',
      patterns: [{include: '#query-body'}, {include: '#expression'}]
    },
    statement: {
      patterns: [
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#while-statement'},
        {include: '#do-statement'},
        {include: '#for-statement'},
        {include: '#foreach-statement'},
        {include: '#if-statement'},
        {include: '#else-part'},
        {include: '#switch-statement'},
        {include: '#goto-statement'},
        {include: '#return-statement'},
        {include: '#break-or-continue-statement'},
        {include: '#throw-statement'},
        {include: '#yield-statement'},
        {include: '#await-statement'},
        {include: '#try-statement'},
        {include: '#checked-unchecked-statement'},
        {include: '#lock-statement'},
        {include: '#using-statement'},
        {include: '#labeled-statement'},
        {include: '#object-creation-expression'},
        {include: '#array-creation-expression'},
        {include: '#anonymous-object-creation-expression'},
        {include: '#local-declaration'},
        {include: '#block'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'storage-modifier': {
      match:
        '(?<!\\.)\\b(new|public|protected|internal|private|abstract|virtual|override|sealed|static|partial|readonly|volatile|const|extern|async|unsafe|ref|required)\\b',
      name: 'storage.modifier.cs'
    },
    'string-character-escape': {
      match:
        '\\\\([\'"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4})',
      name: 'constant.character.escape.cs'
    },
    'string-literal': {
      begin: '(?<!@)"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '(")|((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.cs'},
        2: {name: 'invalid.illegal.newline.cs'}
      },
      name: 'string.quoted.double.cs',
      patterns: [{include: '#string-character-escape'}]
    },
    'struct-declaration': {
      begin: '(?=\\bstruct\\b)',
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?x)\n(struct)\\b\\s+\n(@?[_[:alpha:]][_[:alnum:]]*)',
          beginCaptures: {
            1: {name: 'keyword.other.struct.cs'},
            2: {name: 'entity.name.type.struct.cs'}
          },
          end: '(?=\\{)',
          patterns: [
            {include: '#comment'},
            {include: '#type-parameter-list'},
            {include: '#base-types'},
            {include: '#generic-constraints'}
          ]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [{include: '#class-or-struct-members'}]
        },
        {include: '#preprocessor'},
        {include: '#comment'}
      ]
    },
    'switch-expression': {
      begin: '(?x) (?<!\\.)\\b(switch)\\b',
      beginCaptures: {1: {name: 'keyword.control.switch.cs'}},
      end: '(?<=\\})',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [
            {include: '#comment'},
            {include: '#literal'},
            {include: '#switch-var-pattern'},
            {include: '#switch-property-expression'},
            {include: '#member-access-expression'},
            {include: '#switch-pattern'},
            {include: '#expression-body'},
            {include: '#punctuation-comma'}
          ]
        }
      ]
    },
    'switch-label': {
      patterns: [
        {
          begin: '(?<!\\.)\\b(case)\\b\\s+',
          beginCaptures: {1: {name: 'keyword.control.case.cs'}},
          end: ':',
          endCaptures: {0: {name: 'punctuation.separator.colon.cs'}},
          patterns: [{include: '#expression'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.default.cs'},
            2: {name: 'punctuation.separator.colon.cs'}
          },
          match: '(?<!\\.)\\b(default)\\b\\s*(:)'
        }
      ]
    },
    'switch-literal': {
      beginCaptures: {1: {name: 'constant.language.null.cs'}},
      match: '(?<!\\.)\\bnull\\b',
      name: 'constant.language.null.cs',
      patterns: [
        {include: '#comment'},
        {include: '#punctuation-comma'},
        {include: '#expression-body'}
      ]
    },
    'switch-pattern': {
      begin:
        '(?x) # e.g. int x OR var x\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)\\b\\s*',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        2: {name: 'entity.name.variable.local.cs'}
      },
      end: '(?==>)',
      patterns: [{include: '#comment'}, {include: '#switch-when-clause'}]
    },
    'switch-property-expression': {
      begin:
        '(?x) # e.g. int x OR var x\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)?\\s*\n(\\{)',
      beginCaptures: {
        1: {patterns: [{include: '#type'}]},
        6: {name: 'punctuation.curlybrace.open.cs'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'switch-statement': {
      begin: '(?<!\\.)\\b(switch)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.switch.cs'}},
      end: '(?<=\\})',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.curlybrace.open.cs'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.curlybrace.close.cs'}},
          patterns: [{include: '#switch-label'}, {include: '#statement'}]
        }
      ]
    },
    'switch-var-pattern': {
      begin:
        '(?x) # match foreach (var (x, y) in ...)\n(?:\\b(var)\\b\\s*)\n(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.var.cs'},
        2: {
          patterns: [
            {include: '#tuple-declaration-deconstruction-element-list'}
          ]
        }
      },
      end: '(?==>)',
      patterns: [{include: '#comment'}, {include: '#switch-when-clause'}]
    },
    'switch-when-clause': {
      begin: '(?<!\\.)\\b(when)\\b\\s*(\\()?',
      beginCaptures: {
        1: {name: 'keyword.control.try.when.cs'},
        2: {name: 'punctuation.parenthesis.open.cs'}
      },
      end: '(?==>)',
      patterns: [
        {include: '#comment'},
        {include: '#expression'},
        {include: '#punctuation-comma'},
        {
          captures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          match: '\\('
        },
        {
          captures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          match: '\\)'
        }
      ]
    },
    'this-or-base-expression': {
      captures: {
        1: {name: 'keyword.other.base.cs'},
        2: {name: 'keyword.other.this.cs'}
      },
      match: '\\b(?:(base)|(this))\\b'
    },
    'throw-expression': {
      captures: {1: {name: 'keyword.control.flow.throw.cs'}},
      match: '(?<!\\.)\\b(throw)\\b'
    },
    'throw-statement': {
      begin: '(?<!\\.)\\b(throw)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.throw.cs'}},
      end: '(?=;)',
      patterns: [{include: '#expression'}]
    },
    'try-block': {
      begin: '(?<!\\.)\\b(try)\\b',
      beginCaptures: {1: {name: 'keyword.control.try.cs'}},
      end: '(?<=\\})',
      patterns: [{include: '#comment'}, {include: '#block'}]
    },
    'try-statement': {
      patterns: [
        {include: '#try-block'},
        {include: '#catch-clause'},
        {include: '#finally-clause'}
      ]
    },
    'tuple-declaration-deconstruction-element-list': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#tuple-declaration-deconstruction-element-list'},
        {include: '#declaration-expression-tuple'},
        {include: '#punctuation-comma'},
        {
          captures: {1: {name: 'entity.name.variable.tuple-element.cs'}},
          match: '(?x) # e.g. x\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?=[,)])'
        }
      ]
    },
    'tuple-deconstruction-assignment': {
      captures: {
        1: {patterns: [{include: '#tuple-deconstruction-element-list'}]}
      },
      match:
        '(?x)\n(?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*\n(?!=>|==)(?==)'
    },
    'tuple-deconstruction-element-list': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#tuple-deconstruction-element-list'},
        {include: '#declaration-expression-tuple'},
        {include: '#punctuation-comma'},
        {
          captures: {1: {name: 'variable.other.readwrite.cs'}},
          match: '(?x) # e.g. x\n(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*\n(?=[,)])'
        }
      ]
    },
    'tuple-element': {
      captures: {
        1: {patterns: [{include: '#type'}]},
        6: {name: 'entity.name.variable.tuple-element.cs'}
      },
      match:
        '(?x)\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\n(?:(?<tuple_name>\\g<identifier>)\\b)?'
    },
    'tuple-literal': {
      begin: '(\\()(?=.*[:,])',
      beginCaptures: {1: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#tuple-literal-element'},
        {include: '#expression'},
        {include: '#punctuation-comma'}
      ]
    },
    'tuple-literal-element': {
      begin: '(?x)\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*\n(?=:)',
      beginCaptures: {1: {name: 'entity.name.variable.tuple-element.cs'}},
      end: '(:)',
      endCaptures: {0: {name: 'punctuation.separator.colon.cs'}}
    },
    'tuple-type': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#tuple-element'}, {include: '#punctuation-comma'}]
    },
    type: {
      name: 'meta.type.cs',
      patterns: [
        {include: '#comment'},
        {include: '#ref-modifier'},
        {include: '#readonly-modifier'},
        {include: '#tuple-type'},
        {include: '#type-builtin'},
        {include: '#type-name'},
        {include: '#type-arguments'},
        {include: '#type-array-suffix'},
        {include: '#type-nullable-suffix'}
      ]
    },
    'type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.typeparameters.begin.cs'}
      },
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.typeparameters.end.cs'}},
      patterns: [
        {include: '#comment'},
        {include: '#type'},
        {include: '#punctuation-comma'}
      ]
    },
    'type-array-suffix': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.squarebracket.open.cs'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.squarebracket.close.cs'}},
      patterns: [{include: '#punctuation-comma'}]
    },
    'type-builtin': {
      captures: {1: {name: 'keyword.type.cs'}},
      match:
        '\\b(bool|byte|char|decimal|double|float|int|long|object|sbyte|short|string|uint|ulong|ushort|void|dynamic)\\b'
    },
    'type-declarations': {
      patterns: [
        {include: '#preprocessor'},
        {include: '#comment'},
        {include: '#storage-modifier'},
        {include: '#class-declaration'},
        {include: '#delegate-declaration'},
        {include: '#enum-declaration'},
        {include: '#interface-declaration'},
        {include: '#record-declaration'},
        {include: '#struct-declaration'},
        {include: '#attribute-section'},
        {include: '#punctuation-semicolon'}
      ]
    },
    'type-name': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.alias.cs'},
            2: {name: 'punctuation.separator.coloncolon.cs'}
          },
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)'
        },
        {
          captures: {
            1: {name: 'entity.name.type.cs'},
            2: {name: 'punctuation.accessor.cs'}
          },
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.cs'},
            2: {name: 'entity.name.type.cs'}
          },
          match: '(\\.)\\s*(@?[_[:alpha:]][_[:alnum:]]*)'
        },
        {match: '@?[_[:alpha:]][_[:alnum:]]*', name: 'entity.name.type.cs'}
      ]
    },
    'type-nullable-suffix': {
      captures: {0: {name: 'punctuation.separator.question-mark.cs'}},
      match: '\\?'
    },
    'type-parameter-list': {
      begin: '\\<',
      beginCaptures: {
        0: {name: 'punctuation.definition.typeparameters.begin.cs'}
      },
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.typeparameters.end.cs'}},
      patterns: [
        {captures: {1: {name: 'storage.modifier.cs'}}, match: '\\b(in|out)\\b'},
        {
          captures: {1: {name: 'entity.name.type.type-parameter.cs'}},
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\b'
        },
        {include: '#comment'},
        {include: '#punctuation-comma'},
        {include: '#attribute-section'}
      ]
    },
    'typeof-or-default-expression': {
      begin: '(?<!\\.)\\b(?:(typeof)|(default))\\b\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.other.typeof.cs'},
        2: {name: 'keyword.other.default.cs'},
        3: {name: 'punctuation.parenthesis.open.cs'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#type'}]
    },
    'using-directive': {
      patterns: [
        {
          begin: '\\b(using)\\b\\s+(static)\\s+',
          beginCaptures: {
            1: {name: 'keyword.other.using.cs'},
            2: {name: 'keyword.other.static.cs'}
          },
          end: '(?=;)',
          patterns: [{include: '#type'}]
        },
        {
          begin: '\\b(using)\\s+(?=(@?[_[:alpha:]][_[:alnum:]]*)\\s*=)',
          beginCaptures: {
            1: {name: 'keyword.other.using.cs'},
            2: {name: 'entity.name.type.alias.cs'}
          },
          end: '(?=;)',
          patterns: [
            {include: '#comment'},
            {include: '#type'},
            {include: '#operator-assignment'}
          ]
        },
        {
          begin: '\\b(using)\\s*',
          beginCaptures: {1: {name: 'keyword.other.using.cs'}},
          end: '(?=;)',
          patterns: [
            {include: '#comment'},
            {
              match: '@?[_[:alpha:]][_[:alnum:]]*',
              name: 'entity.name.type.namespace.cs'
            },
            {include: '#operator-assignment'}
          ]
        }
      ]
    },
    'using-statement': {
      begin: '(?<!\\.)\\b(using)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.other.using.cs'}},
      end: '(?=\\;|})',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [
            {include: '#local-variable-declaration'},
            {include: '#expression'}
          ]
        },
        {include: '#statement'}
      ]
    },
    'variable-initializer': {
      begin: '(?<!=|!)(=)(?!=|>)',
      beginCaptures: {1: {name: 'keyword.operator.assignment.cs'}},
      end: '(?=[,\\)\\];}])',
      patterns: [{include: '#ref-modifier'}, {include: '#expression'}]
    },
    'verbatim-interpolated-string': {
      begin: '(?:\\$@|@\\$)"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"(?=[^"])',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [
        {include: '#verbatim-string-character-escape'},
        {include: '#interpolation'}
      ]
    },
    'verbatim-string-character-escape': {
      match: '""',
      name: 'constant.character.escape.cs'
    },
    'verbatim-string-literal': {
      begin: '@"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '"(?=[^"])',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.quoted.double.cs',
      patterns: [{include: '#verbatim-string-character-escape'}]
    },
    'when-clause': {
      begin: '(?<!\\.)\\b(when)\\b\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.try.when.cs'},
        2: {name: 'punctuation.parenthesis.open.cs'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
      patterns: [{include: '#expression'}, {include: '#comment'}]
    },
    'where-clause': {
      begin: '(?x)\n\\b(where)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.query.where.cs'}},
      end: '(?=;|\\))',
      patterns: [{include: '#query-body'}, {include: '#expression'}]
    },
    'while-statement': {
      begin: '(?<!\\.)\\b(while)\\b\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.loop.while.cs'}},
      end: '(?<=\\})|(?=;)',
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.cs'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.cs'}},
          patterns: [{include: '#expression'}]
        },
        {include: '#statement'}
      ]
    },
    'xml-attribute': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name.cs'},
            2: {name: 'entity.other.attribute-name.namespace.cs'},
            3: {name: 'punctuation.separator.colon.cs'},
            4: {name: 'entity.other.attribute-name.localname.cs'},
            5: {name: 'punctuation.separator.equals.cs'}
          },
          match:
            '(?x)\n(?:^|\\s+)\n(\n  (?:\n    ([-_[:alnum:]]+)\n    (:)\n  )?\n  ([-_[:alnum:]]+)\n)\n(=)'
        },
        {include: '#xml-string'}
      ]
    },
    'xml-cdata': {
      begin: '<!\\[CDATA\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
      end: '\\]\\]>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
      name: 'string.unquoted.cdata.cs'
    },
    'xml-character-entity': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.constant.cs'},
            3: {name: 'punctuation.definition.constant.cs'}
          },
          match:
            '(?x)\n(&)\n(\n  (?:[[:alpha:]:_][[:alnum:]:_.-]*)|\n  (?:\\#[[:digit:]]+)|\n  (?:\\#x[[:xdigit:]]+)\n)\n(;)',
          name: 'constant.character.entity.cs'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.cs'}
      ]
    },
    'xml-comment': {
      begin: '<!--',
      beginCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
      end: '-->',
      endCaptures: {0: {name: 'punctuation.definition.comment.cs'}},
      name: 'comment.block.cs'
    },
    'xml-doc-comment': {
      patterns: [
        {include: '#xml-comment'},
        {include: '#xml-character-entity'},
        {include: '#xml-cdata'},
        {include: '#xml-tag'}
      ]
    },
    'xml-string': {
      patterns: [
        {
          begin: "\\'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
          end: "\\'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
          name: 'string.quoted.single.cs',
          patterns: [{include: '#xml-character-entity'}]
        },
        {
          begin: '\\"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cs'}},
          end: '\\"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cs'}},
          name: 'string.quoted.double.cs',
          patterns: [{include: '#xml-character-entity'}]
        }
      ]
    },
    'xml-tag': {
      begin:
        '(?x)\n(</?)\n(\n  (?:\n    ([-_[:alnum:]]+)\n    (:)\n  )?\n  ([-_[:alnum:]]+)\n)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.cs'},
        2: {name: 'entity.name.tag.cs'},
        3: {name: 'entity.name.tag.namespace.cs'},
        4: {name: 'punctuation.separator.colon.cs'},
        5: {name: 'entity.name.tag.localname.cs'}
      },
      end: '(/?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.cs'}},
      name: 'meta.tag.cs',
      patterns: [{include: '#xml-attribute'}]
    },
    'yield-break-statement': {
      captures: {
        1: {name: 'keyword.control.flow.yield.cs'},
        2: {name: 'keyword.control.flow.break.cs'}
      },
      match: '(?<!\\.)\\b(yield)\\b\\s*\\b(break)\\b'
    },
    'yield-return-statement': {
      begin: '(?<!\\.)\\b(yield)\\b\\s*\\b(return)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.flow.yield.cs'},
        2: {name: 'keyword.control.flow.return.cs'}
      },
      end: '(?=;)',
      patterns: [{include: '#expression'}]
    },
    'yield-statement': {
      patterns: [
        {include: '#yield-return-statement'},
        {include: '#yield-break-statement'}
      ]
    }
  },
  scopeName: 'source.cs'
}

export default grammar
