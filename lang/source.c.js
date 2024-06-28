// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/c.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c.platform'],
  extensions: [
    '.c',
    '.cats',
    '.h',
    '.idc',
    '.opencl',
    '.upc',
    '.xbm',
    '.xpm',
    '.xs'
  ],
  names: [
    'c',
    'dtrace',
    'dtrace-script',
    'oncrpc',
    'opencl',
    'rpc',
    'rpcgen',
    'unified-parallel-c',
    'x-bitmap',
    'x-pixmap',
    'xbm',
    'xdr',
    'xpm',
    'xs'
  ],
  patterns: [
    {include: '#preprocessor-rule-enabled'},
    {include: '#preprocessor-rule-disabled'},
    {include: '#preprocessor-rule-other'},
    {include: '#comments'},
    {include: 'source.c.platform'},
    {
      match:
        '\\b(break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while)\\b',
      name: 'keyword.control.c'
    },
    {
      match:
        '\\b(asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\b',
      name: 'storage.type.c'
    },
    {
      match: '\\b(const|extern|register|restrict|static|volatile|inline)\\b',
      name: 'storage.modifier.c'
    },
    {match: '\\bk[A-Z]\\w*\\b', name: 'constant.other.variable.mac-classic.c'},
    {
      match: '\\bg[A-Z]\\w*\\b',
      name: 'variable.other.readwrite.global.mac-classic.c'
    },
    {
      match: '\\bs[A-Z]\\w*\\b',
      name: 'variable.other.readwrite.static.mac-classic.c'
    },
    {match: '\\b(NULL|true|false|TRUE|FALSE)\\b', name: 'constant.language.c'},
    {include: '#sizeof'},
    {
      captures: {
        inc: {name: 'invalid.illegal.digit-separator-should-not-be-last.c++'}
      },
      match:
        "(?x)\\b\n\t\t\t(  (?i:\n\t\t\t      0x ( [0-9A-Fa-f]+ ( ' [0-9A-Fa-f]+ )* )?  # Hexadecimal\n\t\t\t   |  0b ( [0-1]+       ( ' [0-1]+ )* )?        # Binary\n\t\t\t   |  0  ( [0-7]+       ( ' [0-7]+ )* )         # Octal\n\t\t\t   |     ( [0-9]+       ( ' [0-9]+ )* )         # Decimal\n\t\t\t   )\n\t\t\t   ( ([uUfF] | u?ll? | U?LL?)\\b | (?<inc>') | \\b )\n\t\t\t|  ( [0-9]+ ( ' [0-9]+ )* )?\n\t\t\t   (?i:\n\t\t\t      \\. ( [0-9]+ ( ' [0-9]+ )* ) E(\\+|-)? ( [0-9]+ ( ' [0-9]+ )* )\n\t\t\t   |  \\. ( [0-9]+ ( ' [0-9]+ )* )\n\t\t\t   |  E(\\+|-)? ( [0-9]+ ( ' [0-9]+ )* )\n\t\t\t   )\n\t\t\t   ( (?<inc>') | \\b )\n\t\t\t)",
      name: 'constant.numeric.c'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.c'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.c'}},
      name: 'string.quoted.double.c',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.c'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.c'}},
      name: 'string.quoted.single.c',
      patterns: [{include: '#string_escaped_char'}]
    },
    {
      begin:
        '(?x)\n        \t\t^\\s*\\#\\s*(define)\\s+             # define\n        \t\t((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name\n        \t\t(?:                              # and optionally:\n        \t\t    (\\()                         # an open parenthesis\n        \t\t        (\n        \t\t            \\s* \\g<id> \\s*       # first argument\n        \t\t            ((,) \\s* \\g<id> \\s*)*  # additional arguments\n        \t\t            (?:\\.\\.\\.)?          # varargs ellipsis?\n        \t\t        )\n        \t\t    (\\))                         # a close parenthesis\n        \t\t)?\n        \t',
      beginCaptures: {
        1: {name: 'keyword.control.import.define.c'},
        2: {name: 'entity.name.function.preprocessor.c'},
        4: {name: 'punctuation.definition.parameters.begin.c'},
        5: {name: 'variable.parameter.preprocessor.c'},
        7: {name: 'punctuation.separator.parameters.c'},
        8: {name: 'punctuation.definition.parameters.end.c'}
      },
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.macro.c',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.c'
        },
        {include: '$base'}
      ]
    },
    {
      begin: '^\\s*#\\s*(error|warning)\\b',
      captures: {1: {name: 'keyword.control.import.error.c'}},
      end: '$',
      name: 'meta.preprocessor.diagnostic.c',
      patterns: [
        {match: '(?>\\\\\\s*\\n)', name: 'punctuation.separator.continuation.c'}
      ]
    },
    {
      begin: '^\\s*#\\s*(include|import)\\b',
      captures: {1: {name: 'keyword.control.import.include.c'}},
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.c.include',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.c'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.c'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.c'}},
          name: 'string.quoted.double.include.c'
        },
        {
          begin: '<',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.c'}},
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.string.end.c'}},
          name: 'string.quoted.other.lt-gt.include.c'
        }
      ]
    },
    {include: '#pragma-mark'},
    {
      begin:
        '^\\s*#\\s*(define|defined|elif|else|if|ifdef|ifndef|line|pragma|undef)\\b',
      captures: {1: {name: 'keyword.control.import.c'}},
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.c',
      patterns: [
        {match: '(?>\\\\\\s*\\n)', name: 'punctuation.separator.continuation.c'}
      ]
    },
    {match: '\\b([a-z0-9_]+_t)\\b', name: 'support.type.posix-reserved.c'},
    {include: '#block'},
    {
      begin:
        '(?x)\n    \t\t(?:  ^                                 # begin-of-line\n    \t\t  |  \n    \t\t     (?: (?= \\s )           (?<!else|new|return) (?<=\\w)      #  or word + space before name\n    \t\t       | (?= \\s*[A-Za-z_] ) (?<!&&)       (?<=[*&>])   #  or type modifier before name\n    \t\t     )\n    \t\t)\n    \t\t(\\s*) (?!(while|for|do|if|else|switch|catch|enumerate|return|sizeof|[cr]?iterate|(?:::)?new|(?:::)?delete)\\s*\\()\n    \t\t(\n    \t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++ |                  # actual name\n    \t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )  # if it is a C++ operator\n    \t\t)\n    \t\t \\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.function.leading.c'},
        3: {name: 'entity.name.function.c'},
        4: {name: 'punctuation.definition.parameters.c'}
      },
      end: '(?<=\\})|(?=#)|(;)',
      name: 'meta.function.c',
      patterns: [
        {include: '#comments'},
        {include: '#parens'},
        {
          match: '\\b(const|final|override|noexcept)\\b',
          name: 'storage.modifier.$1.c++'
        },
        {include: '#block'}
      ]
    }
  ],
  repository: {
    access: {
      captures: {
        1: {name: 'punctuation.separator.variable-access.c'},
        2: {name: 'storage.modifier.template.c++'},
        3: {name: 'variable.other.dot-access.c'}
      },
      match:
        '(\\.|\\->)(?:\\s*(template)\\s+)?([a-zA-Z_][a-zA-Z_0-9]*)\\b(?!\\s*\\()'
    },
    block: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.c'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.block.end.c'}},
          name: 'meta.block.c',
          patterns: [{include: '#block_innards'}]
        }
      ]
    },
    block_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-block'},
        {include: '#preprocessor-rule-disabled-block'},
        {include: '#preprocessor-rule-other-block'},
        {include: '#sizeof'},
        {include: '#access'},
        {include: 'source.c.platform#functions'},
        {include: '#c_function_call'},
        {
          captures: {
            1: {name: 'variable.other.c'},
            2: {name: 'punctuation.definition.parameters.c'}
          },
          match:
            '(?x)\n\t\t\t        (?x)\n\t\t\t(?:  \n\t\t\t     (?: (?= \\s )           (?<!else|new|return) (?<=\\w)\\s+      #  or word + space before name\n\t\t\t     )\n\t\t\t)\n\t\t\t(\n\t\t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++    |              # actual name\n\t\t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )?  # if it is a C++ operator\n\t\t\t)\n\t\t\t \\s*(\\()',
          name: 'meta.initialization.c'
        },
        {include: '#block'},
        {include: '$base'}
      ]
    },
    c_function_call: {
      captures: {
        1: {name: 'punctuation.whitespace.function-call.leading.c'},
        2: {name: 'support.function.any-method.c'},
        3: {name: 'punctuation.definition.parameters.c'}
      },
      match:
        '(?x) (?: (?= \\s )  (?:(?<=else|new|return) | (?<!\\w)) (\\s+))?\n\t\t\t(\\b \n\t\t\t\t(?!(while|for|do|if|else|switch|catch|enumerate|return|sizeof|[cr]?iterate|(?:::)?new|(?:::)?delete)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b | :: )++                  # actual name\n\t\t\t)\n\t\t\t \\s*(\\()',
      name: 'meta.function-call.c'
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.c'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.c'
        },
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.c'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.c'}},
          name: 'comment.block.c'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.c'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.c'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.c++'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.c++'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.c++'}},
              end: '\\n',
              name: 'comment.line.double-slash.c++',
              patterns: [
                {
                  match: '(?>\\\\\\s*\\n)',
                  name: 'punctuation.separator.continuation.c++'
                }
              ]
            }
          ]
        }
      ]
    },
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b',
      patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
    },
    parens: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.parens.begin.c'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.parens.end.c'}},
      name: 'meta.parens.c',
      patterns: [{include: '$base'}]
    },
    'pragma-mark': {
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.pragma.c'},
        3: {name: 'meta.toc-list.pragma-mark.c'}
      },
      match: '^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))',
      name: 'meta.section'
    },
    'preprocessor-rule-disabled': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '$base'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          name: 'comment.block.preprocessor.if-branch',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-disabled-block': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#block_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          name: 'comment.block.preprocessor.if-branch.in-block',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-enabled': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          contentName: 'comment.block.preprocessor.else-branch',
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {end: '(?=^\\s*#\\s*(else|endif)\\b)', patterns: [{include: '$base'}]}
      ]
    },
    'preprocessor-rule-enabled-block': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          contentName: 'comment.block.preprocessor.else-branch.in-block',
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          patterns: [{include: '#block_innards'}]
        }
      ]
    },
    'preprocessor-rule-other': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [{include: '$base'}]
    },
    'preprocessor-rule-other-block': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [{include: '#block_innards'}]
    },
    sizeof: {match: '\\b(sizeof)\\b', name: 'keyword.operator.sizeof.c'},
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8})',
          name: 'constant.character.escape.c'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.c'}
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                           # flags\n    \t\t\t\t\t\t[,;:_]?                              # separator character (AltiVec)\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\n    \t\t\t\t\t\t[diouxXDOUeEfFgGaACcSspn%]           # conversion type\n    \t\t\t\t\t",
          name: 'constant.other.placeholder.c'
        }
      ]
    }
  },
  scopeName: 'source.c'
}

export default grammar
