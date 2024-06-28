// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/AlanQuatermain/go-tmbundle>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.go'],
  names: ['go', 'golang'],
  patterns: [
    {include: '#receiver_function_declaration'},
    {include: '#plain_function_declaration'},
    {include: '#basic_things'},
    {include: '#exported_variables'},
    {
      begin: '^[[:blank:]]*(import)\\b\\s+',
      beginCaptures: {1: {name: 'keyword.control.import.go'}},
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.go.import',
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.go'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.go'}},
          name: 'string.quoted.double.import.go'
        }
      ]
    },
    {include: '#block'},
    {include: '#root_parens'},
    {include: '#function_calls'}
  ],
  repository: {
    access: {
      match: '(?<=\\.)[[:alpha:]_][[:alnum:]_]*\\b(?!\\s*\\()',
      name: 'variable.other.dot-access.go'
    },
    basic_things: {
      patterns: [
        {include: '#comments'},
        {include: '#initializers'},
        {include: '#access'},
        {include: '#strings'},
        {include: '#keywords'}
      ]
    },
    block: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.go'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.block.end.go'}},
      name: 'meta.block.go',
      patterns: [{include: '#block_innards'}]
    },
    block_innards: {
      patterns: [
        {include: '#function_block_innards'},
        {include: '#exported_variables'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.go'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.go'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.go'}},
          end: '\\*/',
          name: 'comment.block.go'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.go'},
        {
          captures: {
            1: {name: 'punctuation.definition.comment.go'},
            2: {name: 'meta.toc-list.banner.line.go'}
          },
          match: '^(//) =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.double-slash.banner.go'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.go'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.go'}},
              end: '\\n',
              name: 'comment.line.double-slash.go',
              patterns: [
                {
                  match: '(?>\\\\\\s*\\n)',
                  name: 'punctuation.separator.continuation.go'
                }
              ]
            }
          ]
        }
      ]
    },
    exported_variables: {
      match: '(?<=\\s|\\[\\])([[:upper:]][[:alnum:]_]*)(?=\\W+)',
      name: 'variable.exported.go'
    },
    fn_parens: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.parens.begin.go'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.parens.end.go'}},
      name: 'meta.parens.go',
      patterns: [{include: '#basic_things'}, {include: '#function_calls'}]
    },
    function_block: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.function-block.begin.go'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.function-block.end.go'}},
      name: 'meta.block.go',
      patterns: [{include: '#function_block_innards'}]
    },
    function_block_innards: {
      patterns: [
        {include: '#basic_things'},
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading.go'},
            2: {name: 'support.function.builtin.go'}
          },
          match:
            '(\\s*)\\b(new|c(lose|ap)|p(anic|rint(ln)?)|len|make|append)(?:\\b|\\()'
        },
        {include: '#function_block'},
        {include: '#function_calls'},
        {include: '#fn_parens'}
      ]
    },
    function_calls: {
      captures: {
        1: {name: 'punctuation.whitespace.function-call.leading.go'},
        2: {name: 'support.function.any-method.go'},
        3: {name: 'punctuation.definition.parameters.go'}
      },
      match:
        '(?x)\n                (?: (?= \\s ) (?:(?<=else|new|return) | (?<!\\w)) (\\s+) )?\n                (\\b\n                    (?!(for|if|else|switch|return)\\s*\\()\n                    (?:[[:alpha:]_][[:alnum:]_]*+\\b)            # method name\n                )\n                \\s*(\\()\n            ',
      name: 'meta.function-call.go'
    },
    initializers: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.go'},
            2: {
              patterns: [
                {match: '[[:alpha:]_][[:alnum:]_]*', name: 'variable.other.go'}
              ]
            }
          },
          match:
            '^[[:blank:]]*(var)\\s+((?:[[:alpha:]_][[:alnum:]_]*)(?:,\\s+[[:alpha:]_][[:alnum:]_]*)*)',
          name: 'meta.initialization.explicit.go'
        },
        {
          captures: {
            1: {
              patterns: [
                {match: '[[:alpha:]_][[:alnum:]_]*', name: 'variable.other.go'}
              ]
            },
            2: {name: 'keyword.operator.go'}
          },
          match:
            '((?:[[:alpha:]_][[:alnum:]_]*)(?:\\s*,\\s+[[:alpha:]_][[:alnum:]_]*)*)\\s*(:=)',
          name: 'meta.initialization.short.go'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(s(elect|witch)|c(ontinue|ase)|type|i(nterface|f|mport)|def(er|ault)|package|else|var|f(or|unc|allthrough)|r(eturn|ange)|go(to)?|break)\\b',
          name: 'keyword.control.go'
        },
        {
          match:
            '(\\b|(?<=\\]))(int(16|8|32|64)?|uint(16|8|32|64|ptr)?|float(32|64)|complex(64|128)|b(yte|ool)|string|error|struct)\\b',
          name: 'storage.type.go'
        },
        {match: '\\b(c(onst|han)|map)\\b', name: 'storage.modifier.go'},
        {match: '\\b(nil|true|false|iota)\\b', name: 'constant.language.go'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
          name: 'constant.numeric.go'
        },
        {match: '\\<\\-', name: 'keyword.operator.channel.go'}
      ]
    },
    plain_function_declaration: {
      begin:
        '(?x)\n    \t            (^[[:blank:]]*(func)\\s*\n    \t             (?: ([[:alpha:]_][[:alnum:]_]*)? )          # name of function is optional\n    \t             (?: \\( ((?:[\\[\\]\\w\\d\\s\\/,._*&<>-]|(?:interface\\{\\}))*)? \\) )             # required braces for parameters (even if empty)\n    \t             \\s*\n    \t             (?: \\(? ((?:[\\[\\]\\w\\d\\s,._*&<>-]|(?:interface\\{\\}))*) \\)? )?             # optional return types, optionally within braces\n                    )\n    \t    ',
      beginCaptures: {
        1: {name: 'meta.function.declaration.go'},
        2: {name: 'keyword.control.go'},
        3: {name: 'entity.name.function.go'},
        4: {
          patterns: [
            {match: '[[:alpha:]_][[:alnum:]_]*', name: 'variable.parameters.go'}
          ]
        },
        5: {
          patterns: [
            {
              match: '[[:alpha:]_][[:alnum:]_]*',
              name: 'variable.return-types.go'
            }
          ]
        }
      },
      end: '(?<=\\})',
      name: 'meta.function.plain.go',
      patterns: [
        {include: '#comments'},
        {include: '#storage_type'},
        {include: '#storage_modifier'},
        {include: '#function_block'}
      ]
    },
    receiver_function_declaration: {
      begin:
        '(?x)\n    \t            (\n                     (func)\\s*\n    \t             (\n    \t             (?: \\( ((?:[\\[\\]\\w\\d\\s,._*&<>-]|(?:interface\\{\\}))*) \\)\\s+ )                # receiver variable declarations, in brackets\n    \t             (?: ([[:alpha:]_][[:alnum:]_]*)? )          # name of function is optional\n    \t             )\n    \t             (?: \\( ((?:[\\[\\]\\w\\d\\s,._*&<>-]|(?:interface\\{\\}))*)? \\) )               # required braces for parameters (even if empty)\n    \t             \\s*\n    \t             (?: \\(? ((?:[\\[\\]\\w\\d\\s,._*&<>-]|(?:interface\\{\\}))*) \\)? )?             # optional return types, optionally within braces\n                    )\n    \t    ',
      beginCaptures: {
        1: {name: 'meta.function.receiver.declaration.go'},
        2: {name: 'keyword.control.go'},
        3: {name: 'entity.name.function.go.full-name'},
        4: {
          patterns: [
            {match: '[[:alpha:]_][[:alnum:]_]*', name: 'variable.receiver.go'}
          ]
        },
        5: {name: 'entity.name.function.go.name'},
        6: {
          patterns: [
            {match: '[[:alpha:]_][[:alnum:]_]*', name: 'variable.parameters.go'}
          ]
        },
        7: {
          patterns: [
            {
              match: '[[:alpha:]_][[:alnum:]_]*',
              name: 'variable.return-types.go'
            }
          ]
        }
      },
      end: '(?<=\\})',
      name: 'meta.function.receiver.go',
      patterns: [
        {include: '#comments'},
        {include: '#storage_type'},
        {include: '#storage_modifier'},
        {include: '#function_block'}
      ]
    },
    root_parens: {
      begin: '\\(',
      end: '(?<=\\()(\\))?|(?:\\))',
      endCaptures: {1: {name: 'meta.parens.empty.go'}},
      name: 'meta.parens.go',
      patterns: [
        {include: '#basic_things'},
        {include: '#exported_variables'},
        {include: '#function_calls'}
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abfnrutv\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8}|[0-7]{3})',
          name: 'constant.character.escape.go'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.go'}
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n                        (\\d+\\$)?                                    # field (argument #)\n                        [#0\\- +']*                                  # flags\n                        [,;:_]?                                     # separator character (AltiVec)\n                        ((-?\\d+)|\\*(-?\\d+\\$)?)?                     # minimum field width\n                        (\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?                # precision\n                        [diouxXDOUeEfFgGaAcCsSpnvtTbyYhHmMzZq%]      # conversion type\n                    ",
          name: 'constant.other.placeholder.go'
        },
        {match: '%', name: 'invalid.illegal.placeholder.go'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.go'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.go'}},
          name: 'string.quoted.double.go',
          patterns: [
            {include: '#string_placeholder'},
            {include: '#string_escaped_char'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.go'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.go'}},
          name: 'string.quoted.single.go',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.go'}},
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.go'}},
          name: 'string.quoted.raw.go'
        }
      ]
    }
  },
  scopeName: 'source.go'
}

export default grammar
