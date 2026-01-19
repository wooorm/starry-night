// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Zxilly/playground-cj>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cj'],
  names: ['cangjie'],
  patterns: [
    {include: '#strings'},
    {include: '#mark'},
    {include: '#package'},
    {include: '#import'},
    {include: '#quoteToken'},
    {include: '#originStrings'},
    {include: '#comments'},
    {include: '#code'},
    {include: '#module'},
    {include: '#forStruct'},
    {include: '#at'},
    {include: '#function'},
    {include: '#macro'},
    {include: '#classlike-declaration'},
    {include: '#variable'},
    {include: '#qualified-type'},
    {include: '#type'}
  ],
  repository: {
    at: {patterns: [{match: '@', name: 'keyword.control.Cangjie'}]},
    block: {
      begin: '\\{',
      end: '\\}',
      patterns: [
        {include: '#comments'},
        {include: '#strings'},
        {include: '#keywords'},
        {include: '#function'},
        {include: '#variable'},
        {include: '#constants'},
        {include: '#block'}
      ]
    },
    'classlike-declaration': {
      patterns: [
        {
          begin: '\\b(class|interface|struct|enum|extend|type)\\s+',
          end: '(?=\\b[0-9])|(?=\\b(VArray|const|differentiable|grad|vjp|valWithGrad|adjoint|adjointOf|when|except|include|primal|stage|main|false|IntNative|mut|Nothing|prop|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|as|in|match|where|spawn|synchronized|macro|quote|static|internal|external|operator|foreign|inout)\\s)|`[a-zA-Z_][a-zA-Z0-9_]*`|(?=[^\\w\\s])|\\b[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'support.class.Cangjie'
        },
        {
          begin: '\\b(func)\\s+',
          end: '(?=\\b[0-9])|(?=\\b(VArray|const|differentiable|grad|vjp|valWithGrad|adjoint|adjointOf|when|except|include|primal|stage|main|false|IntNative|mut|Nothing|prop|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|as|in|match|where|spawn|synchronized|macro|quote|static|internal|external|operator|foreign|inout)\\s)|`[a-zA-Z_][a-zA-Z0-9_]*`|(?=[^\\w\\s])|\\b[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'support.function.Cangjie'
        },
        {
          begin: '\\b(let|var)\\s+',
          end: '(?=\\b[0-9])|(?=\\b(VArray|const|differentiable|grad|vjp|valWithGrad|adjoint|adjointOf|when|except|include|primal|stage|main|false|IntNative|mut|Nothing|prop|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|as|in|match|where|spawn|synchronized|macro|quote|static|internal|external|operator|foreign|inout)\\s)|`[a-zA-Z_][a-zA-Z0-9_]*`|(?=[^\\w\\s])|\\b[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'support.variable.Cangjie'
        },
        {
          match: '\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\s*\\<[\\*\\<\\,\\w\\s]*\\>)',
          name: 'support.class.Cangjie'
        },
        {
          match:
            '\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\s*<:[\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*&\\s*]*)',
          name: 'support.class.Cangjie'
        },
        {
          begin: '\\b(case)\\s+',
          end: '(?=(\\=\\>))|[\\n\\r]',
          name: 'keyword.operator.Cangjie',
          patterns: [
            {include: '#memberAccess'},
            {include: '#classlike-declaration'},
            {include: '#function'},
            {include: '#strings'},
            {include: '#keywords'},
            {include: '#qualified-type'},
            {include: '#constants'},
            {include: '#type'},
            {include: '#variable'}
          ]
        }
      ]
    },
    code: {
      patterns: [
        {include: '#keywords'},
        {include: '#constants'},
        {include: '#strings'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '(/\\*)|(/\\*/\\*)',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.Cangjie'}
          },
          end: '(\\*/)',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.Cangjie'}
          },
          name: 'comment.block.Cangjie',
          patterns: [
            {
              begin: '(/\\*)|(/\\*/\\*)',
              end: '(\\*/)',
              name: 'comment.block.Cangjie'
            }
          ]
        },
        {begin: '//', end: '\n', name: 'comment.line.Cangjie'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b0[bB][01]([01_]*)?(u8|u16|u32|u64|i8|i16|i32|i64)?\\b',
          name: 'constant.numeric.binary.integer.Cangjie'
        },
        {
          match: '\\b0[oO][0-7]([0-7_]*)?(u8|u16|u32|u64|i8|i16|i32|i64)?\\b',
          name: 'constant.numeric.octal.integer.Cangjie'
        },
        {
          match: '\\b[0-9]([0-9_]*)?(u8|u16|u32|u64|i8|i16|i32|i64)?\\b',
          name: 'constant.numeric.decimal.integer.Cangjie'
        },
        {
          match:
            '\\b0[xX][0-9a-fA-F]([0-9a-fA-F_]*)?(u8|u16|u32|u64|i8|i16|i32|i64)?(?!\\.)\\b',
          name: 'constant.numeric.hexadecimal.integer.Cangjie'
        },
        {
          match:
            '(\\b([0-9]([0-9_]*)?[eE][-]?[0-9]([0-9_]*)?)|((?<!\\.)\\.[0-9]([0-9_]*)?([eE][-]?[0-9]([0-9_]*)?)?)|\\b([0-9]([0-9_]*)?\\.[0-9]([0-9_]*)?([eE][-]?[0-9]([0-9_]*)?)?))(f16|f32|f64)?',
          name: 'constant.numeric.decimal.float.Cangjie'
        },
        {
          match:
            '\\b0[xX](\\.[0-9a-fA-F]([0-9a-fA-F_]*)?|[0-9a-fA-F]([0-9a-fA-F_]*)?\\.[0-9a-fA-F]([0-9a-fA-F_]*)?|[0-9a-fA-F]([0-9a-fA-F_]*)?)([pP][-]?[0-9]([0-9_]*)?)',
          name: 'constant.numeric.hexadecimal.float.Cangjie'
        },
        {
          match:
            "\\bb'([^'\\\\]|\\\\[tbrn'\\\\\"fv0]|\\\\u\\{[0-9a-fA-F]{1,2}\\})'",
          name: 'constant.character.escape.string.byte.Cangjie'
        },
        {
          match:
            '\\bb"([^"\\\\]|\\\\[tbrn\'\\\\"fv0]|\\\\u\\{[0-9a-fA-F]{1,2}\\})*"',
          name: 'constant.character.escape.string.byteArray.Cangjie'
        }
      ]
    },
    escape_string: {
      match:
        '(\\\\\\\\)|(\\\\u\\{[0-9a-fA-F]{1,8}\\})|(\\\\[a|b|t|r|n|"|\\\'|f|v|\\$|0])',
      name: 'constant.character.escape.string.byteArray.Cangjie'
    },
    function: {
      patterns: [
        {
          match: '\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\s*\\(.*)',
          name: 'support.function.Cangjie'
        },
        {
          match:
            '\\b[a-zA-Z_][a-zA-Z0-9_]*(?=\\s*\\<[\\*\\<\\,\\w\\s]*\\>\\s*\\(.*)',
          name: 'support.function.Cangjie'
        },
        {
          match:
            '\\boperator\\s+func\\s+((\\(\\))|(\\[\\])|(\\*\\*)|(\\<\\<)|(\\>\\>)|(\\>\\=)|(\\<\\=)|(\\!\\=)|(\\=\\=)|\\!|\\-|\\*|\\/|\\%|\\+|\\<|\\>|\\&|\\^|\\|)',
          name: 'support.function.Cangjie'
        },
        {
          match:
            '\\b(grad|@vjp|adjointOf|valWithGrad)\\([a-zA-Z_][a-zA-Z0-9_]*',
          name: 'support.function.Cangjie'
        }
      ]
    },
    import: {
      patterns: [
        {
          begin: '\\b(import)\\b\\s*\\b\\s',
          beginCaptures: {1: {name: 'keyword.control.import.Cangjie'}},
          contentName: 'storage.type.import.Cangjie',
          end: '(?=\\b[0-9])|(?=[^\\w\\s.,`*{}])|(?=\\b(public|internal|protected|private|override|abstract|open|redef|sealed)\\b(\\x20)*[^.,\\s])|(?=\\b(VArray|const|differentiable|grad|vjp|valWithGrad|adjoint|adjointOf|when|except|include|primal|stage|main|false|IntNative|mut|Nothing|prop|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|in|match|where|spawn|synchronized|macro|quote|static|external|operator|foreign|inout)\\s)',
          endCaptures: {1: {name: 'punctuation.terminator.Cangjie'}},
          name: 'keyword.control.Cangjie',
          patterns: [
            {
              begin: '^(import)',
              end: '\\n|[^(\\s(as)\\s)]',
              name: 'keyword.control.char',
              patterns: [
                {
                  begin: '(\\s)',
                  end: '(\\s)',
                  name: 'constant.character.escape.char'
                }
              ]
            },
            {include: '#comments'},
            {
              match: '(?<=\\.)\\s*\\.|\\.(?=\\s*;)',
              name: 'invalid.illegal.character_not_allowed_here.Cangjie'
            },
            {
              match: '(?<!\\.)\\s*\\*',
              name: 'invalid.illegal.character_not_allowed_here.Cangjie'
            },
            {
              match: '(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+',
              name: 'invalid.illegal.character_not_allowed_here.Cangjie'
            },
            {
              match:
                '(?x)\\b(?<!\\$)\n(false|IntNative|mut|Nothing|prop|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|in|match|where|spawn|synchronized|macro|quote|static|external|operator|foreign)\\b',
              name: 'invalid.illegal.character_not_allowed_here.Cangjie'
            },
            {match: '\\.|\\*', name: 'punctuation.separator.Cangjie'},
            {match: '\\*', name: 'variable.language.wildcard.Cangjie'},
            {include: '#keywords_to_identifier'},
            {include: '#keywords'}
          ]
        }
      ]
    },
    insertValue: {
      patterns: [
        {
          begin: '\\$\\{',
          end: '\\}|\\n|\\r',
          name: 'keyword.operator.Cangjie',
          patterns: [
            {include: '#comments'},
            {include: '#strings'},
            {include: '#keywords'},
            {include: '#function'},
            {include: '#variable'},
            {include: '#constants'},
            {include: '#block'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(VArray|const|differentiable|grad|vjp|valWithGrad|adjoint|adjointOf|when|except|include|primal|stage|main|false|IntNative|mut|Nothing|prop|redef|true|UIntNative|unsafe|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float16|Float32|Float64|Rune|Bool|Unit|struct|enum|This|package|import|class|interface|extend|func|let|var|sealed|type|init|this|super|if|else|case|try|catch|finally|for|do|while|throw|return|continue|break|is|as|in|match|where|spawn|synchronized|macro|quote|static|public|internal|private|protected|internal|external|override|abstract|open|operator|foreign|inout)\\b',
          name: 'keyword.control.Cangjie'
        },
        {match: '(\\;|!in)', name: 'keyword.control.Cangjie'},
        {
          match: '(\\b(Option|String)\\b)',
          name: 'support.class.Cangjie.keyword'
        }
      ]
    },
    keywords_to_identifier: {
      patterns: [
        {
          match:
            '\\b(public|internal|private|protected|override|abstract|open|redef|sealed)\\b'
        }
      ]
    },
    macro: {
      patterns: [
        {
          match: '(?<=(@))[A-Za-z_][A-Za-z0-9_.]*',
          name: 'support.function.Cangjie.macro'
        }
      ]
    },
    mark: {match: '\\b(`?\\w+`?)(?=\\s*:)', name: 'support.variable.Cangjie'},
    memberAccess: {
      patterns: [
        {
          match:
            '\\b(([a-zA-Z_][a-zA-Z0-9_]*)|(`[a-zA-Z_][a-zA-Z0-9_]*`))(?=\\.)',
          name: 'support.class.Cangjie'
        }
      ]
    },
    originStrings: {
      patterns: [
        {
          begin: '(?<!#)(#{2})+"',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.Cangjie'}
          },
          contentName: 'punctuation.definition.string.begin.Cangjie',
          end: '"(?<!#)(#{2})+',
          endCaptures: {1: {name: 'punctuation.definition.string.end.Cangjie'}},
          name: 'string.quoted.double.Cangjie'
        },
        {
          begin: '(?<!#)#(#{2})*"',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.Cangjie'}
          },
          contentName: 'punctuation.definition.string.begin.Cangjie',
          end: '"(?<!#)#(#{2})*',
          endCaptures: {1: {name: 'punctuation.definition.string.end.Cangjie'}},
          name: 'string.quoted.double.Cangjie'
        }
      ]
    },
    package: {
      patterns: [
        {
          begin: '\\b(package)\\b\\s*',
          beginCaptures: {1: {name: 'keyword.control.package.Cangjie'}},
          contentName: 'storage.type.package.Cangjie',
          end: '(?=[^.\\w\\s])|\\R|\\Z|\n',
          endCaptures: {1: {name: 'punctuation.terminator.Cangjie'}},
          name: 'keyword.control.Cangjie',
          patterns: [
            {include: '#keywords_to_identifier'},
            {include: '#comments'},
            {include: '#keywords'}
          ]
        }
      ]
    },
    'qualified-type': {
      patterns: [
        {
          begin: ':',
          end: '(?=[^*\\<,\\|\\w\\s]|\\R|\\n)',
          patterns: [
            {include: '#mark'},
            {include: '#keywords'},
            {include: '#constants'},
            {
              match: '(?<=,)\\s*([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?=(!?)\\s*:)',
              name: 'support.variable.Cangjie'
            },
            {
              match: '`[a-zA-Z_][a-zA-Z0-9_]*`|[a-zA-Z_][a-zA-Z0-9_]*',
              name: 'support.class.Cangjie'
            }
          ]
        }
      ]
    },
    quoteToken: {
      begin: '\\bquote\\s*\\(',
      end: '(?<!\\\\)\\)',
      patterns: [
        {include: '#quoteToken_inside'},
        {include: '#quoteToken_content'}
      ]
    },
    quoteToken_content: {
      match: '.',
      name: 'string.quoted.single.Cangjie',
      patterns: [{include: '#quoteToken_inside'}]
    },
    quoteToken_inside: {
      begin: '(?<!\\\\)\\(',
      end: '(?<!\\\\)\\)',
      name: 'string.quoted.single.Cangjie',
      patterns: [{include: '#quoteToken_inside'}]
    },
    string_mutil: {
      patterns: [
        {
          begin: '(?<!\\\\)"""',
          end: '"""',
          name: 'string.quoted.double.Cangjie',
          patterns: [{include: '#insertValue'}, {include: '#escape_string'}]
        }
      ]
    },
    string_single: {
      patterns: [
        {
          begin: "(?<!\\\\)(r)?\\'",
          end: "\\'|\\n|\\r",
          name: 'string.quoted.single.Cangjie',
          patterns: [{include: '#escape_string'}, {include: '#insertValue'}]
        },
        {
          match: "(r)?\\'(?<!\\\\)[\\s\\S](?<!\\\\)\\'",
          name: 'string.quoted.single.Cangjie'
        },
        {
          begin: '(?<!\\\\)(r)?"',
          end: '"|\\n|\\r',
          name: 'string.quoted.double.Cangjie',
          patterns: [{include: '#insertValue'}, {include: '#escape_string'}]
        },
        {
          begin: '(?<!\\\\)J"',
          end: '"|\\n|\\r',
          name: 'string.quoted.double.Cangjie',
          patterns: [{include: '#escape_string'}]
        },
        {
          begin: '(?<!\\\\)b"',
          end: '"|\\n|\\r',
          name: 'constant.character.escape.string.byteArray.Cangjie',
          patterns: [{include: '#escape_string'}]
        },
        {
          begin: "(?<!\\\\)b'",
          end: "'|\\n|\\r",
          name: 'constant.character.escape.string.byteArray.Cangjie',
          patterns: [{include: '#escape_string'}]
        }
      ]
    },
    strings: {
      patterns: [{include: '#string_mutil'}, {include: '#string_single'}]
    },
    type: {
      patterns: [
        {
          begin: '(?<!<)<',
          end: '(?=[^,*\\<\\>\\w\\s]|[\\n\\r])',
          patterns: [
            {include: '#keywords'},
            {include: '#strings'},
            {
              match: '[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=[\\)|\\||\\&|\\n|;])',
              name: 'support.variable.Cangjie'
            },
            {
              match: '`[a-zA-Z_][a-zA-Z0-9_]*`|[a-zA-Z_][a-zA-Z0-9_]*',
              name: 'support.class.Cangjie'
            },
            {include: '#function'},
            {include: '#constants'}
          ]
        }
      ]
    },
    variable: {
      patterns: [
        {
          match: '\\b([a-zA-Z_][a-zA-Z0-9_]*|`[a-zA-Z_][a-zA-Z0-9_]*`)',
          name: 'support.variable.Cangjie'
        }
      ]
    }
  },
  scopeName: 'source.cj'
}

export default grammar
