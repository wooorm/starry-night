// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Sarrus1/sourcepawn-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sp'],
  names: ['sourcepawn', 'sourcemod'],
  patterns: [
    {include: '#line_continuation_character'},
    {include: '#literals'},
    {include: '#comments'},
    {include: '#operators'},
    {include: '#preproc'},
    {
      captures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type'}]}
      },
      match: '(new)\\s+(\\w+)\\s*\\('
    },
    {
      captures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type'}, {include: '#old-type'}]}
      },
      match: '(view_as)\\s*<\\s*(\\w+)\\s*>'
    },
    {
      captures: {
        1: {patterns: [{include: '#old-type'}]},
        2: {patterns: [{include: '#literals'}, {include: '#variable_name'}]}
      },
      match: '(\\w+)\\:\\s*(\\w+)'
    },
    {
      captures: {
        1: {patterns: [{include: '#type_name'}]},
        2: {patterns: [{include: '#variable_name'}]}
      },
      match: '(\\w+)\\:\\:(\\w*)'
    },
    {
      match:
        '\\b(?:if|else|for|while|do|switch|case|default|return|break|continue)\\b',
      name: 'keyword.control.statement.sourcepawn'
    },
    {include: '#other-keywords'},
    {include: '#methodmap'},
    {include: '#typedef'},
    {include: '#typeset'},
    {include: '#functag'},
    {include: '#funcenum'},
    {include: '#enum_struct'},
    {include: '#enum'},
    {include: '#struct'},
    {include: '#old-function-declaration'},
    {include: '#function-declaration'},
    {include: '#old-variable-declaration'},
    {include: '#variable-declaration'},
    {include: '#function-call'},
    {match: '\\bthis\\b', name: 'variable.language.sourcepawn'},
    {
      captures: {1: {patterns: [{include: '#variable_name'}]}},
      match: '\\b(\\w+)\\b'
    }
  ],
  repository: {
    'array-indexed-access': {
      patterns: [
        {
          captures: {
            1: {
              patterns: [
                {include: '#literals'},
                {include: '#other-keywords'},
                {include: '#function-call'},
                {include: '#variable_name'}
              ]
            }
          },
          match: '\\[([^\\]]+)\\]'
        }
      ]
    },
    'boolean-literal': {
      patterns: [
        {
          match: '\\b(?:true|false)\\b',
          name: 'constant.language.boolean.sourcepawn'
        }
      ]
    },
    comments: {
      patterns: [
        {
          captures: {
            1: {name: 'comment.sourcepawn'},
            2: {name: 'storage.type.class.single-line.spdoc'},
            3: {name: 'support.variable.single-line.spdoc'},
            4: {name: 'comment.sourcepawn'}
          },
          match: '(\\/\\/)\\s*(@param)\\s+([\\w\\.]+)\\s+(.*)'
        },
        {
          captures: {
            1: {name: 'comment.sourcepawn'},
            2: {name: 'keyword.control.single-line.spdoc'},
            3: {name: 'comment.sourcepawn'}
          },
          match: '(\\/\\/)\\s*(@return|@noreturn)\\s+(.*)'
        },
        {
          captures: {
            1: {name: 'comment.sourcepawn'},
            2: {name: 'string.regexp.single-line.spdoc'},
            3: {name: 'comment.sourcepawn'}
          },
          match: '(\\/\\/)\\s*(@error)\\s+(.*)'
        },
        {
          captures: {
            1: {name: 'comment.sourcepawn'},
            2: {name: 'support.function.single-line.spdoc'},
            3: {name: 'comment.sourcepawn'}
          },
          match: '(\\/\\/)\\s*(@(?:note|deprecated))\\s+(.*)'
        },
        {match: '\\/\\/.*', name: 'comment.sourcepawn'},
        {
          begin: '/\\*',
          captures: {0: {name: 'comment.sourcepawn'}},
          end: '\\*/',
          name: 'comment.block.sourcepawn'
        }
      ]
    },
    enum: {
      begin: '(enum)\\s+(?:(\\w+(?:\\:)?)?(?:\\s*(\\([^\\(]*\\)))?)?',
      beginCaptures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]},
        3: {patterns: [{include: '#literals'}]}
      },
      end: '(?<=\\})',
      patterns: [
        {include: '#literals'},
        {include: '#comments'},
        {include: '#preproc'},
        {
          captures: {1: {patterns: [{include: '#variable_name'}]}},
          match: '(\\w+)'
        }
      ]
    },
    enum_struct: {
      captures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]}
      },
      match: '(enum\\s+struct\\s+)(\\w+)'
    },
    funcenum: {
      begin: '(funcenum)\\s+(\\w+)',
      beginCaptures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {name: 'support.type.core.funcenum.sourcepawn'}
      },
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(?:(\\w+)\\:)?\\s*(public)\\s*\\(',
          beginCaptures: {
            1: {patterns: [{include: '#old-type'}]},
            2: {patterns: [{include: '#keywords'}]}
          },
          end: '\\)',
          patterns: [{include: '#parameters'}]
        },
        {include: '#comments'},
        {include: '#preproc'}
      ]
    },
    functag: {
      begin:
        '(functag)\\s+(\\w+)\\s+(?:([a-zA-Z_]\\w*)\\:\\s*)?(?:(public|stock)\\s*)?\\(',
      beginCaptures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]},
        3: {patterns: [{include: '#old-type'}]},
        4: {patterns: [{include: '#keywords'}]}
      },
      end: '\\)',
      patterns: [
        {include: '#comments'},
        {include: '#preproc'},
        {include: '#parameters'}
      ]
    },
    'function-call': {
      captures: {1: {name: 'entity.name.function.function_call.sourcepawn'}},
      match: '\\b([A-Za-z_][A-Za-z0-9_]*)\\s*\\('
    },
    'function-declaration': {
      patterns: [
        {
          begin:
            '(?:(stock|public|static)\\s+)?(?:(native|forward)\\s+)?(\\w+)(\\s*(?:\\[[^\\]]*\\]\\s*)*)\\s+([a-zA-Z_]\\w*)\\(',
          beginCaptures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#keywords'}]},
            3: {patterns: [{include: '#type'}]},
            4: {patterns: [{include: '#array-indexed-access'}]},
            5: {name: 'entity.name.function.sourcepawn'}
          },
          end: '\\)',
          patterns: [
            {include: '#parameters'},
            {include: '#comments'},
            {include: '#preproc'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(public|stock)\\b', name: 'keyword.visibility.sourcepawn'},
        {
          match: '\\b(const|static)\\b',
          name: 'keyword.storage_class.sourcepawn'
        },
        {
          match: '\\b(typeset|typedef|funcenum|functag)\\b',
          name: 'keyword.type_declarator.sourcepawn'
        },
        {match: '\\b(view_as)\\b', name: 'keyword.view_as.sourcepawn'},
        {
          match: '\\b(new|decl)\\b',
          name: 'keyword.variable_declarator.sourcepawn'
        },
        {match: '\\b(function)\\b', name: 'keyword.function.sourcepawn'},
        {match: '\\b(enum)\\b', name: 'keyword.enum.sourcepawn'},
        {match: '\\b(struct)\\b', name: 'keyword.struct.sourcepawn'},
        {match: '\\b(methodmap)\\b', name: 'keyword.methodmap.sourcepawn'}
      ]
    },
    line_continuation_character: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.escape.line-continuation.sourcepawn'}
          },
          match: '(\\\\)\\n'
        }
      ]
    },
    literals: {
      patterns: [
        {include: '#boolean-literal'},
        {include: '#null-literal'},
        {include: '#numeric-literal'},
        {include: '#string-literal'}
      ]
    },
    methodmap: {
      captures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {
          patterns: [
            {match: '[A-Z]\\w*', name: 'support.type.core.sourcepawn'},
            {
              captures: {
                1: {name: 'invalid.illegal.constant.sourcepawn'},
                2: {name: 'support.type.core.sourcepawn'}
              },
              match: '([^A-Z])(\\w*)'
            }
          ]
        },
        3: {
          patterns: [
            {match: '[A-Z]\\w*', name: 'support.type.core.sourcepawn'},
            {
              captures: {
                1: {name: 'invalid.illegal.constant.sourcepawn'},
                2: {name: 'support.type.core.sourcepawn'}
              },
              match: '([^A-Z])(\\w*)'
            }
          ]
        },
        4: {name: 'keyword.__nullable__.sourcepawn'}
      },
      match:
        '(methodmap)\\s+([a-zA-Z_]\\w*)\\s*(?:(?:\\<\\s*([a-zA-Z_]\\w*)|(__nullable__)))?'
    },
    'null-literal': {
      patterns: [{match: '\\bnull\\b', name: 'constant.language.sourcepawn'}]
    },
    'numeric-literal': {
      patterns: [
        {match: '[0-9]+\\.[0-9]+', name: 'constant.numeric.float.sourcepawn'},
        {match: '\\b0b[0-1]+\\b', name: 'constant.numeric.sourcepawn'},
        {match: '\\b0o[0-7]+\\b', name: 'constant.numeric.sourcepawn'},
        {
          match: '\\b(0x(?:(?:(?:[0-9a-fA-F]{2}_?)+)|(?:[0-9a-fA-F]+)))\\b',
          name: 'constant.numeric.sourcepawn'
        },
        {
          match: '\\b((?:\\d|_)+)\\b',
          name: 'constant.numeric.integer.sourcepawn'
        },
        {match: '\\b\\d+\\w+\\b', name: 'invalid.illegal.constant.sourcepawn'}
      ]
    },
    'old-function-declaration': {
      patterns: [
        {
          begin:
            '(?:(stock|public|static)\\s+)?(?:(native|forward)\\s+)?(\\w+)\\:\\s*([a-zA-Z_]\\w*)\\(',
          beginCaptures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#keywords'}]},
            3: {patterns: [{include: '#old-type'}]},
            4: {name: 'entity.name.function.sourcepawn'}
          },
          end: '\\)',
          patterns: [
            {include: '#parameters'},
            {include: '#comments'},
            {include: '#preproc'}
          ]
        }
      ]
    },
    'old-parameter-declaration': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#old-type'}]},
            2: {patterns: [{include: '#variable_name'}]},
            3: {patterns: [{include: '#array-indexed-access'}]}
          },
          match: '(?:(\\w+)\\:\\s*)?(\\w+)\\s*((?:\\[[^\\]]*\\]\\s*)+)?'
        }
      ]
    },
    'old-type': {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.old.built-in.primitive.sourcepawn'},
            2: {patterns: [{include: '#type_name'}]}
          },
          match: '(bool|any|String|Float)|(\\w+)'
        }
      ]
    },
    'old-variable-declaration': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#keywords'}]},
            3: {patterns: [{include: '#keywords'}]},
            4: {patterns: [{include: '#old-type'}]},
            5: {patterns: [{include: '#variable_name'}]},
            6: {patterns: [{include: '#array-indexed-access'}]}
          },
          match:
            '(?:(stock|public)\\s+)?((?:(?:const|static)\\s+)*)(new|decl)\\s+(?:(\\w+)\\:\\s*)?(\\w+)(\\s*(?:\\[[^\\]]*\\]\\s*)*)'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '%|&|\\*|/(?!\\*|/)|\\+|\\-|~|=|<|>|!|\\||\\?|:|\\^',
          name: 'keyword.operator.sourcepawn'
        }
      ]
    },
    'other-keywords': {
      match:
        '\\b(?:decl|delete|forward|native|public|const|stock|this|sizeof|static|property)\\b',
      name: 'keyword.sourcepawn'
    },
    'parameter-declaration': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#type'}]},
            2: {patterns: [{include: '#variable_name'}]},
            3: {patterns: [{include: '#array-indexed-access'}]}
          },
          match:
            '(\\w+)(?:\\s+|(?:\\s*(?:&|(?:\\[\\s*\\])+)\\s*))(\\w+)(?:\\s*((?:\\[[^\\]]*\\]\\s*)+))?'
        }
      ]
    },
    parameters: {
      patterns: [
        {include: '#keywords'},
        {include: '#literals'},
        {include: '#parameter-declaration'},
        {include: '#old-parameter-declaration'}
      ]
    },
    preproc: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.sourcepawn'},
            2: {name: 'string.sourcepawn'}
          },
          match: '(\\#include|\\#tryinclude)\\s*((?:\\<|").+(?:\\>|"))',
          name: 'meta.include.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.pragma.sourcepawn'},
            2: {name: 'entity.other.attribute-name.sourcepawn'}
          },
          match: '(\\#pragma)\\s+(.+?(?=//))',
          name: 'meta.pragma.line-comment.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.pragma.sourcepawn'},
            2: {name: 'entity.other.attribute-name.sourcepawn'},
            3: {name: 'string.deprecated.sourcepawn'}
          },
          match: '(\\#pragma)\\s+(deprecated)(.*)',
          name: 'meta.pragma.deprecated.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.pragma.sourcepawn'},
            2: {name: 'entity.other.attribute-name.sourcepawn'}
          },
          match: '(\\#pragma)\\s+([A-Za-z _0-9]+)',
          name: 'meta.pragma.block-comment.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.define.sourcepawn'},
            2: {name: 'meta.preprocessor.macro.sourcepawn'}
          },
          match: '(\\#define)\\s*(\\w*)',
          name: 'meta.define.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.undef.sourcepawn'},
            2: {name: 'meta.preprocessor.macro.sourcepawn'}
          },
          match: '(\\#undef)\\s*(\\w*)',
          name: 'meta.undef.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.misc.sourcepawn'},
            2: {name: 'string.warning.sourcepawn'}
          },
          match: '(#\\b(?:warning|error)\\b)\\s*(.+?)(?=/(?:/|\\*))',
          name: 'meta.undef.sourcepawn'
        },
        {
          captures: {
            1: {name: 'keyword.control.misc.sourcepawn'},
            2: {name: 'string.warning.sourcepawn'}
          },
          match: '(#\\b(?:warning|error)\\b)\\s*(.*)',
          name: 'meta.undef.sourcepawn'
        },
        {
          match:
            '#\\b(if|else|endif|emit|deprecated|undef|endinput|endscript|assert|define|file)\\b\\s*',
          name: 'keyword.control.misc.sourcepawn'
        },
        {
          captures: {
            1: {name: 'meta.preprocessor.conditional.sourcepawn'},
            2: {name: 'meta.preprocessor.macro.sourcepawn'}
          },
          match: '(defined)\\s+([A-Za-z_]\\w*)'
        }
      ]
    },
    'string-literal': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.sourcepawn'}
          },
          end: '(")|((?:[^\\\\\\n])$)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.sourcepawn'},
            2: {name: 'invalid.illegal.newline.sourcepawn'}
          },
          name: 'string.quoted.double.sourcepawn',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_format_char'},
            {include: '#string_placeholder'},
            {include: '#line_continuation_character'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.sourcepawn'}
          },
          end: "(\\')|((?:[^\\\\\\n])$)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.sourcepawn'},
            2: {name: 'invalid.illegal.newline.sourcepawn'}
          },
          name: 'string.quoted.single.c',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_format_char'},
            {include: '#string_placeholder'},
            {include: '#line_continuation_character'}
          ]
        }
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match: '\\\\(?:[abefnrt\'"\\\\]|(?:x[a-zA-Z0-9]{0,2}|\\d+);?)',
          name: 'constant.character.escape.sourcepawn'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.sourcepawn'}
      ]
    },
    string_format_char: {
      match:
        '%(?:a|A|b|B|c|C|d|D|e|F|g|G|h|H|I|j|m|M|n|i|p|r|R|S|t|T|u|U|V|u|w|W|x|X|y|Y|z|Z|f|L|N|s|T|t|%|(?:\\d+)?\\.?\\d*(?:b|d|i|u|f|s|X|x))',
      name: 'constant.character.format.sourcepawn'
    },
    string_placeholder: {
      captures: {1: {name: 'constant.character.escape.sp-translations'}},
      match: '\\{(\\w+)\\}',
      name: 'constant.character.sp-translations'
    },
    struct: {
      captures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]}
      },
      match: '(struct)\\s+(\\w+)'
    },
    type: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.built-in.primitive.sourcepawn'},
            2: {patterns: [{include: '#type_name'}]}
          },
          match: '(bool|float|int|char|any|void)|(\\w+)'
        }
      ]
    },
    type_name: {
      patterns: [
        {match: '\\b\\d\\b', name: 'constant.numeric.integer.sourcepawn'},
        {match: '[a-zA-Z_]\\w*', name: 'support.type.core.sourcepawn'},
        {
          captures: {
            1: {name: 'invalid.illegal.constant.sourcepawn'},
            2: {name: 'support.type.core.sourcepawn'}
          },
          match: '([0-9])(\\w*)'
        }
      ]
    },
    typedef: {
      begin:
        '(typedef)\\s+(\\w+)\\s*\\=\\s*(function)\\s*(\\w+)\\s*((?:\\[[^\\]]*\\]\\s*)*)\\(',
      beginCaptures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]},
        3: {patterns: [{include: '#keywords'}]},
        4: {patterns: [{include: '#type'}]},
        5: {patterns: [{include: '#array-indexed-access'}]}
      },
      end: '\\)',
      patterns: [
        {include: '#parameters'},
        {include: '#comments'},
        {include: '#preproc'}
      ]
    },
    typeset: {
      begin: '(typeset)\\s+(\\w+)',
      beginCaptures: {
        1: {patterns: [{include: '#keywords'}]},
        2: {patterns: [{include: '#type_name'}]}
      },
      end: '(?<=\\})',
      patterns: [
        {
          begin: '(function)\\s+(\\w+)\\s*((?:\\[[^\\]]*\\]\\s*)*)\\(',
          beginCaptures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#type'}]},
            3: {patterns: [{include: '#array-indexed-access'}]}
          },
          end: '\\)',
          patterns: [{include: '#parameters'}]
        },
        {include: '#comments'},
        {include: '#preproc'}
      ]
    },
    'variable-declaration': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#keywords'}]},
            3: {patterns: [{include: '#type'}]},
            4: {patterns: [{include: '#array-indexed-access'}]},
            5: {patterns: [{include: '#variable_name'}]},
            6: {patterns: [{include: '#array-indexed-access'}]}
          },
          match:
            '(?:(stock|public)\\s+)?((?:(?:const|static)\\s+)*)(\\w+)(\\s*(?:\\[[^\\]]*\\]\\s*)*)(?:(?:\\s*&\\s*)|\\s+)(\\w+)\\s*(\\s*(?:\\[[^\\]]*\\]\\s*)*)'
        }
      ]
    },
    variable_name: {
      patterns: [
        {match: '\\b\\d\\b', name: 'constant.numeric.integer.sourcepawn'},
        {match: '[a-zA-Z_]\\w*', name: 'variable.sourcepawn'},
        {
          captures: {
            1: {name: 'invalid.illegal.constant.sourcepawn'},
            2: {name: 'variable.sourcepawn'}
          },
          match: '([0-9])(\\w*)'
        }
      ]
    }
  },
  scopeName: 'source.sourcepawn'
}

export default grammar
