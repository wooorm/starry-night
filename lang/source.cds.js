// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/SAP/cds-textmate-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.cds'],
  names: ['cap-cds', 'cds'],
  patterns: [
    {
      match: '"[^"]*(""[^"]*)*"|!\\[[^\\]]*(\\]\\][^\\]]*)*\\]',
      name: 'identifier.cds'
    },
    {
      captures: {
        1: {name: 'keyword.strong.control.import.cds'},
        2: {name: 'keyword.strong.control.import.cds'}
      },
      match: '(?<!\\.)\\b(annotate)\\b\\s*[\\w.]+\\b\\s*\\b(with)?\\b'
    },
    {
      begin: '(?<!\\.)\\b(import|using)(?!\\s*:)\\b',
      beginCaptures: {1: {name: 'keyword.strong.control.import.cds'}},
      end: '(;)|\\n',
      endCaptures: {1: {name: 'punctuation.terminator.statement.cds'}},
      name: 'meta.import.cds',
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.modules.begin.cds'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.modules.end.cds'}},
          patterns: [
            {
              captures: {
                1: {name: 'variable.language.default.cds'},
                2: {name: 'variable.other.module.cds'},
                3: {name: 'keyword.strong.cds'},
                4: {name: 'invalid.illegal.cds'},
                5: {name: 'variable.other.module-alias.cds'}
              },
              match:
                '(?x)\n                              (?: \\b(default)\\b | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\n                              \\s*\n                              (\\b as \\b)\n                              \\s*\n                              (?: (\\b default \\b | \\*) | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)'
            },
            {match: ',', name: 'punctuation.separator.object.cds'},
            {include: '#comments'},
            {
              match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b',
              name: 'variable.other.module.cds'
            }
          ]
        },
        {
          captures: {
            1: {name: 'variable.language.import-all.cds'},
            2: {name: 'variable.other.module.cds'},
            3: {name: 'keyword.strong.control.cds'},
            4: {name: 'variable.other.module-alias.cds'}
          },
          match:
            '(?x) (?:\n    (\\*)  |\n    (?=\\D)(\\b[\\$\\.\\w]+\\b)\n)\n\\s* (\\b as \\b) \\s*\n(?=\\D)(\\b[\\$\\.\\w]+\\b)\n'
        },
        {match: '\\*', name: 'variable.language.import-all.cds'},
        {match: '\\b(default)\\b', name: 'variable.language.default.cds'},
        {include: '#strings'},
        {include: '#comments'},
        {match: '(?i)\\b(from)\\b', name: 'keyword.strong.control.cds'},
        {
          match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b(?=.*\\bfrom\\b)',
          name: 'variable.other.module.cds'
        },
        {match: ',', name: 'punctuation.separator.object.cds'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.control.cds'},
        2: {name: 'variable.language.default.cds'},
        3: {name: 'variable.other.module.cds'}
      },
      match:
        '(?x) \\b(export)\\b \\s* \\b(default)\\b (?:\\s*) \\b((?!\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b)[$_a-zA-Z][$_a-zA-Z0-9]*)?\\b',
      name: 'meta.export.cds'
    },
    {
      begin: '(?<!\\.)\\b(export)(?!\\s*:)\\b',
      beginCaptures: {1: {name: 'keyword.control.export.cds'}},
      end: '(?=;|\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|$)',
      name: 'meta.export.cds',
      patterns: [
        {include: '#numbers'},
        {
          begin: '\\{(?=.*\\bfrom\\b)',
          beginCaptures: {
            0: {name: 'punctuation.definition.modules.begin.cds'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.modules.end.cds'}},
          patterns: [
            {
              captures: {
                1: {name: 'variable.language.default.cds'},
                2: {name: 'variable.other.module.cds'},
                3: {name: 'keyword.control.cds'},
                4: {name: 'variable.language.default.cds'},
                5: {name: 'invalid.illegal.cds'},
                6: {name: 'variable.other.module-alias.cds'}
              },
              match:
                '(?x)\n                                (?: \\b(default)\\b | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\n                                \\s*\n                                (\\b as \\b)\n                                \\s*\n                                (?: \\b(default)\\b | (\\*) | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\n                            '
            },
            {match: ',', name: 'meta.delimiter.object.comma.cds'},
            {
              match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b',
              name: 'variable.other.module.cds'
            }
          ]
        },
        {
          begin: '(?![\\p{L}$_])\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.modules.begin.cds'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.modules.end.cds'}},
          patterns: [
            {
              captures: {
                1: {name: 'invalid.illegal.cds'},
                2: {name: 'variable.other.module.cds'},
                3: {name: 'keyword.control.cds'},
                4: {name: 'variable.language.default.cds'},
                5: {name: 'invalid.illegal.cds'},
                6: {name: 'variable.other.module-alias.cds'}
              },
              match:
                '(?x)\n                                (?: \\b(default)\\b | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\n                                \\s*\n                                (\\b as \\b)\n                                \\s*\n                                (?: \\b(default)\\b | (\\*) | \\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\n                            '
            },
            {match: ',', name: 'meta.delimiter.object.comma.cds'},
            {
              match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b',
              name: 'variable.other.module.cds'
            }
          ]
        },
        {
          match: '\\*(?=.*\\bfrom\\b)',
          name: 'variable.language.import-all.cds'
        },
        {match: '\\b(default)\\b', name: 'variable.language.default.cds'},
        {include: '#strings'},
        {include: '#comments'},
        {match: '(?i)\\b(from)\\b', name: 'keyword.control.cds'},
        {
          match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b',
          name: 'variable.other.module.cds'
        },
        {match: ',', name: 'meta.delimiter.object.comma.cds'},
        {include: '#operators'}
      ]
    },
    {
      begin:
        '(?x)\n                \\b\n                (?: (static) \\s+ )?                                             # Optional static keyword\n                (?!                                                             # Dont match known keywords\n                    (?:break|case|catch|continue|do|else|finally|for|if|\n                        export|import|using|package|return|switch|throw|try|while|with)\n                    [\\s\\(]\n                )\n                ([$_a-zA-Z][$_a-zA-Z0-9]*)\n                \\s*\n                (\\()\n                (?=(?:[^\\(\\)]*)?\\)\\s*\\{)\n            ',
      beginCaptures: {
        1: {name: 'storage.modifier.static.cds'},
        2: {name: 'entity.name.function.cds'},
        3: {name: 'punctuation.definition.parameters.begin.cds'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.begin.cds'}},
      name: 'meta.method.cds',
      patterns: [{include: '#function-params'}]
    },
    {
      captures: {
        1: {name: 'storage.type.class.cds'},
        2: {name: 'entity.name.type.class.cds'},
        3: {name: 'storage.modifier.cds'},
        4: {name: 'entity.other.inherited-class.cds'}
      },
      match:
        '(?x)\n                \\b(class)\n                (?:\n                    \\s+\n                    ([$_a-zA-Z][$_a-zA-Z0-9]*)\n                )?\n                (?:\n                    \\s+\n                    (extends)\n                    \\s+\n                    ([$_a-zA-Z][$_a-zA-Z0-9]*)\n                )?\n                \\s*($|(?=\\{))\n            ',
      name: 'meta.class.cds'
    },
    {
      begin: '(?<=[\\[=(?:+,!]|^|return|=>|&&|\\|\\|)\\s*(?=/[^/*+?].*/)',
      end: '(?<=[/igmuy])',
      patterns: [
        {
          begin: '/',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.cds'}},
          end: '(/)[igmuy]*',
          endCaptures: {1: {name: 'punctuation.definition.string.end.cds'}},
          name: 'string.regexp.cds'
        }
      ]
    },
    {
      match:
        '(?<!\\w|entity\\s|aspect\\s|projection\\son\\s)[$_a-zA-Z][$_a-zA-Z0-9]*(\\s*:\\s*[$_a-zA-Z][$_a-zA-Z0-9]*)?(?=\\s*([:{]|as\\b))',
      name: 'entity.name.type.attribute-name.cds'
    },
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#comments'},
    {include: '#operators'},
    {match: '=>', name: 'storage.type.arrow.cds'},
    {match: '(?<!\\.|\\$)\\b(let|var)\\b(?!\\$)', name: 'storage.type.var.cds'},
    {
      match: '(?<!\\.|\\$)\\b(get|set|const)\\b(?!\\$)',
      name: 'storage.modifier.cds'
    },
    {
      captures: {
        1: {name: 'keyword.control.cds'},
        2: {name: 'storage.modifier.cds'}
      },
      match: '(?<!\\.)\\b(yield)(?!\\s*:)\\b(?:\\s*(\\*))?',
      name: 'meta.control.yield.cds'
    },
    {
      match:
        '(?<!\\.|\\$)\\b(Association\\s*(?:\\[[0-9.eE+, *-]*\\]\\s*)?to\\s*(?:(many|one)\\s*)?|Composition\\s*(?:\\[[0-9.eE+, *-]*\\]\\s*)?of\\s*(?:(many|one)\\s*)?|(Boolean|Date|Time|DateTime|Timestamp|Number|Integer|Decimal|String)\\s*(\\([^()]*\\))?)(?!\\$)',
      name: 'support.class.cds'
    },
    {match: '(?<!\\.|\\$)\\b(await)\\b(?!\\$)', name: 'invalid.illegal.cds'},
    {
      match:
        '(?<!\\.|\\$)\\b(implements|interface|package|private|protected|public)\\b(?!\\$)',
      name: 'invalid.deprecated.cds'
    },
    {
      match: '(?<!\\.|\\$)\\b(class|static|extends)\\b(?!\\$)',
      name: 'invalid.illegal.cds'
    },
    {
      match: '\\b(false|Infinity|NaN|null|true|undefined)\\b',
      name: 'constant.language.cds'
    },
    {
      match: '(?<!\\.)\\b(super|this)(?!\\s*:)\\b',
      name: 'variable.language.cds'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.cds'},
    {
      captures: {
        1: {name: 'punctuation.section.scope.begin.cds'},
        2: {name: 'punctuation.section.scope.end.cds'}
      },
      match: '(\\[)(\\])'
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [{include: '$self'}]
    },
    {match: '\\[|\\]', name: 'meta.brace.square.cds'},
    {
      match: '(?<=new )([$_a-zA-Z][$_a-zA-Z0-9]*)(?!\\w)',
      name: 'support.class.cds'
    },
    {
      match: '(?<= instanceof )([$_a-zA-Z][$_a-zA-Z0-9]*)(?!\\w)',
      name: 'support.class.cds'
    },
    {
      match: '(?<!\\w)([$_a-zA-Z][$_a-zA-Z0-9]*)(?=\\.prototype\\b)',
      name: 'support.class.cds'
    },
    {match: '(?i)(?<=\\.)(prototype)\\b', name: 'keyword.other.cds'},
    {
      match: '(?<!\\w)([$_a-zA-Z][$_a-zA-Z0-9]*)(?=\\()',
      name: 'meta.function-call.cds'
    },
    {
      match:
        '(?i)(?<!\\.|\\$)\\b(all|and|any|asc|between|by|case|cast|cross|desc|distinct|element|escape|except|excluding|exists|first|from|full|group|group by|having|in|inner|intersect|into|is|join|last|left|like|limit|many|minus|mixin|not null|not|null|nulls|offset|one|or|order by|outer|redirected to|select|some|top|type of|union|where|with)\\b(?!\\$)',
      name: 'keyword.cds'
    },
    {
      match: '(?i)(?<!\\.|\\$)\\b(as|key|on|type)\\b(?!\\$)',
      name: 'keyword.strong.cds'
    },
    {
      match:
        '(?<!\\.|\\$)\\b(after|always|analysis|array of|async|asynchronous|auto|both|cache|column|columns|configuration|current|cycle|day|default|depends|detection|disabled|documents|else|enabled|end|every|existing|export|extended|extract|fast|flush|fulltext|fuzzy|generated|getnumservers|hana|hash|hour|identity|import|increment|index|keeping|language|layout|leading|masked|maxvalue|merge|migration|mime|mining|minute|minutes|minvalue|mode|month|name|new|no|off|only|others|overlay|parameters|partition|partitioning|partitions|phrase|preprocess|priority|projection|projection on|queue|range|ratio|reset|returns|right|roundrobin|row|search|second|separators|start|storage|store|subtype|sync|synchronous|table|technical|temporary|text|then|token|trailing|trim|unique|unload|value|values|virtual|when|with parameters|year)\\b(?!\\$)',
      name: 'keyword.cds'
    },
    {
      match:
        '(?<!\\.|\\$)\\b(abstract|action|actions|annotation|aspect|context|define|entity|enum|event|expose|extend|facet|function|namespace|service|view)\\b(?!\\$)',
      name: 'keyword.strong.cds'
    },
    {match: '[$_a-zA-Z][$_a-zA-Z0-9]*', name: 'identifier.cds'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '@\\(?[\\w.]+\\b', name: 'entity.other.attribute-name'},
        {
          begin: '/\\*\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cds'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.cds'}},
          name: 'comment.block.documentation.cds'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cds'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.cds'}},
          name: 'comment.block.cds'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.cds'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.cds'}},
              end: '\\n',
              name: 'comment.line.double-slash.cds'
            }
          ]
        }
      ]
    },
    'function-params': {
      patterns: [
        {
          begin: '(?=[\\p{L}$_])',
          end: '(?=[,)/])',
          patterns: [
            {
              match: '\\G[$_a-zA-Z][$_a-zA-Z0-9]*',
              name: 'variable.parameter.function.cds'
            }
          ]
        },
        {include: '#comments'}
      ]
    },
    numbers: {
      patterns: [
        {
          match: '(?<!\\w|\\$)0[xX][[:xdigit:]]+\\b',
          name: 'constant.numeric.hex.cds'
        },
        {
          match: '(?<!\\w|\\$)0[bB][01]+\\b',
          name: 'constant.numeric.binary.cds'
        },
        {
          match: '(?<!\\w|\\$)0[oO][0-7]+\\b',
          name: 'constant.numeric.octal.cds'
        },
        {
          match:
            '(?x)\n    (?<!\\w|\\$)\t\t\t\t\t\t\t    # Ensure word boundry\n    [+-]?                                           # Optional sign\n    (?>;\n        (\n            (0|[1-9][0-9]*)(\\.[0-9]*)?\t    # 0 or 1 or 1. or 1.0\n            | \\.[0-9]+\t\t\t\t\t\t        # .1\n        )\n        ([eE][+-]?[0-9]+)?\t\t\t\t\t    # Exponent\n    )\n    (?!\\w)\t\t\t\t\t\t\t\t\t            # Ensure word boundry\n',
          name: 'constant.numeric.cds'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '%=|\\+=|\\-=|\\*=|(?<!\\()/=',
          name: 'keyword.operator.assignment.compound.cds'
        },
        {
          match: '&=|\\^=|<<=|>>=|>>>=|\\|=',
          name: 'keyword.operator.assignment.compound.bitwise.cds'
        },
        {
          match: '!==|!=|<=|>=|===|==|<|>',
          name: 'keyword.operator.comparison.cds'
        },
        {match: '&&|!|\\|\\|', name: 'keyword.operator.logical.cds'},
        {match: '&|\\||\\^|~', name: 'keyword.operator.bitwise.cds'},
        {match: '\\:\\s*(localized)\\s+', name: 'keyword.cds'},
        {match: '\\:', name: 'keyword.operator.cds'},
        {match: '!', name: 'keyword.operator.logical.cds'},
        {match: '=|\\:', name: 'keyword.operator.assignment.cds'},
        {match: '\\-\\-', name: 'keyword.operator.decrement.cds'},
        {match: '\\+\\+', name: 'keyword.operator.increment.cds'},
        {match: '%|\\*|/|\\-|\\+', name: 'keyword.operator.arithmetic.cds'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cds'}},
          end: "'(?!')",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cds'}},
          name: 'string.quoted.single.cds',
          patterns: [{match: "''", name: 'meta.single-quote.doubled.cds'}]
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cds'}},
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cds'}},
          name: 'string.quoted.other.template.cds',
          patterns: [{include: '#interpolation'}]
        }
      ],
      repository: {
        interpolation: {
          begin: '\\$\\{',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.cds'}},
          contentName: 'source.cds',
          end: '(\\})',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.cds'},
            1: {name: 'source.cds'}
          },
          name: 'meta.embedded.line.cds',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {0: {name: 'meta.brace.curly.cds'}},
              end: '\\}',
              endCaptures: {0: {name: 'meta.brace.curly.cds'}},
              patterns: [{include: '$self'}]
            },
            {include: '$self'}
          ]
        }
      }
    }
  },
  scopeName: 'source.cds'
}

export default grammar
