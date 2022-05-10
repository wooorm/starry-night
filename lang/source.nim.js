// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nim-lang/NimLime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.nim', '.nim.cfg', '.nimble', '.nimrod', '.nims'],
  names: ['nim'],
  patterns: [
    {include: 'source.nim.comment'},
    {
      name: 'source.c.embedded.nim',
      patterns: [
        {
          begin: '\\{\\.(emit:) ?(\\"\\"\\")',
          captures: {
            1: {name: 'keyword.other.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '(\\"\\"\\")\\.?',
          endCaptures: {1: {name: 'comment.syntax.nim'}},
          patterns: [
            {begin: '\\`', end: '\\`', name: 'keyword.operator.nim'},
            {include: 'source.c'}
          ]
        }
      ]
    },
    {
      name: 'source.asm.embedded.nim',
      patterns: [
        {
          begin: '(asm )(\\"\\"\\")',
          captures: {
            1: {name: 'keyword.other.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [{begin: '\\`', end: '\\`', name: 'keyword.operator.nim'}]
        }
      ]
    },
    {
      name: 'meta.proc.nim',
      patterns: [
        {
          begin:
            '(?<![\\w\\x{80}-\\x{10FFFF}])(proc|func|method|template|macro|iterator|converter)\\s+((\\`[^\\s\\`]+\\`)|([\\w\\x{80}-\\x{10FFFF}]+))(\\*)?',
          beginCaptures: {
            1: {name: 'storage.type.proc.nim'},
            2: {name: 'entity.name.function.nim'},
            5: {name: 'keyword.operator.secondary.kw-public.nim'}
          },
          end: '(\\=)',
          endCaptures: {1: {name: 'keyword.operator.nim'}},
          patterns: [
            {match: '\\[[\\w\\x{80}-\\x{10FFFF}]+\\]'},
            {
              begin: '\\{',
              end: '\\}',
              patterns: [
                {begin: '\\"', end: '\\"', name: 'string.something.nim'},
                {
                  match: '([\\w\\x{80}-\\x{10FFFF}]+)',
                  name: 'entity.other.attribute-name.pattern.nim'
                }
              ]
            },
            {
              begin: '\\(',
              end: '\\)',
              patterns: [
                {
                  begin: '\\{',
                  end: '\\}',
                  patterns: [
                    {begin: '\\"', end: '\\"', name: 'string.something.nim'},
                    {
                      match: '([\\[\\]\\w\\x{80}-\\x{10FFFF}]+)',
                      name: 'entity.other.attribute-name.pattern.nim'
                    }
                  ]
                },
                {include: 'source.nim'}
              ]
            },
            {include: 'source.nim'}
          ]
        }
      ]
    },
    {
      begin: '\\{\\.',
      end: '\\.?\\}',
      name: 'pragma',
      patterns: [
        {begin: '\\"', end: '\\"', name: 'string.something.nim'},
        {
          match: '([\\w\\x{80}-\\x{10FFFF}]+)',
          name: 'entity.other.attribute-name.pragma.nim'
        }
      ]
    },
    {
      begin: 'discard \\"\\"\\"',
      end: '\\"\\"\\"',
      name: 'comment.line.discarded.nim'
    },
    {
      match:
        "(?<![\\w\\x{80}-\\x{10FFFF}])(\\d[_\\d]*((\\.[_\\d]+([eE][\\+\\-]?\\d[_\\d]*)?)|([eE][\\+\\-]?\\d[_\\d]*)))('?([a-zA-Z\\x{80}-\\x{10FFFF}][\\w\\x{80}-\\x{10FFFF}]*)|[fFdD])?",
      name: 'constant.numeric.float.decimal.nim'
    },
    {
      match:
        "(?<![\\w\\x{80}-\\x{10FFFF}])(0[xX][0-9A-Fa-f][_0-9A-Fa-f]*)('?(([a-zA-Z\\x{80}-\\x{10FFFF}][\\w\\x{80}-\\x{10FFFF}]*)|[uUfFdD]))?",
      name: 'constant.numeric.integer.hexadecimal.nim'
    },
    {
      match:
        "(?<![\\w\\x{80}-\\x{10FFFF}])(0[ocC][0-7][_0-7]*)('?(([a-zA-Z\\x{80}-\\x{10FFFF}][\\w\\x{80}-\\x{10FFFF}]*)|[uUfFdD]))?",
      name: 'constant.numeric.integer.octal.nim'
    },
    {
      match:
        "(?<![\\w\\x{80}-\\x{10FFFF}])(0(b|B)[01][_01]*)('?(([a-zA-Z\\x{80}-\\x{10FFFF}][\\w\\x{80}-\\x{10FFFF}]*)|[uUfFdD]))?",
      name: 'constant.numeric.integer.binary.nim'
    },
    {
      match:
        "(?<![\\w\\x{80}-\\x{10FFFF}])(\\d[_\\d]*)('?(([a-zA-Z\\x{80}-\\x{10FFFF}][\\w\\x{80}-\\x{10FFFF}]*)|[uUfFdD]))?",
      name: 'constant.numeric.integer.decimal.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(true|false|inf|nil)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'constant.language.nim'
    },
    {
      begin: '(?:^|\\s+|=)(when|if)\\b',
      captures: {1: {name: 'keyword.control.primary.nim'}},
      end: '(?=:)',
      endCaptures: {1: {name: 'control.variable.parameter.nim'}},
      patterns: [{include: 'source.nim'}]
    },
    {
      begin: '(?:^|\\s+|=)(case)\\b',
      captures: {1: {name: 'keyword.control.primary.nim'}},
      end: '(?=\\bof\\b)',
      endCaptures: {1: {name: 'control.variable.parameter.nim'}},
      patterns: [{include: 'source.nim'}]
    },
    {
      begin: '(?:^|\\s+)(of|else|elif)\\b',
      captures: {1: {name: 'keyword.control.secondary.nim'}},
      end: '(?=:)',
      endCaptures: {1: {name: 'control.variable.parameter.nim'}},
      patterns: [{include: 'source.nim'}]
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(await|block|break|continue|do|end|except|finally|raise|return|try|while|yield)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'keyword.control.nim'
    },
    {
      match:
        '((?<![\\w\\x{80}-\\x{10FFFF}])(and|in|is|isnot|not|notin|or|xor)(?![\\w\\x{80}-\\x{10FFFF}]))',
      name: 'keyword.operator.boolean.nim'
    },
    {
      match:
        '((?<![\\w\\x{80}-\\x{10FFFF}])(addr|as|bind|cast|concept|const|converter|defer|discard|distinct|div|enum|export|from|import|include|let|mixin|object|of|out|ptr|ref|shl|shr|static|type|using|var)(?![\\w\\x{80}-\\x{10FFFF}]))',
      name: 'keyword.other.nim'
    },
    {
      match: '(\\b()\\b|(=|\\+|-|\\*|/|<|>|@|\\$|~|&|%|!|\\?|\\^|\\.|:|\\\\)+)',
      name: 'keyword.operator.nim'
    },
    {
      begin: '(for)\\s+',
      captures: {1: {name: 'keyword.control.nim'}},
      end: '(?=:)',
      name: 'meta.forloop.nim',
      patterns: [
        {
          captures: {1: {name: 'keyword.control.nim'}},
          match: '\\ [\\w\\x{80}-\\x{10FFFF},]+\\s+(in)\\s+'
        },
        {include: 'source.nim'}
      ]
    },
    {
      captures: {2: {name: 'keyword.control.nim'}},
      match: '((import)\\s+[\\.|\\w|\\/]+,?)'
    },
    {
      captures: {1: {name: 'keyword.control.nim'}},
      match: '(from)\\s+[\\/\\w]+(?:\\s+(?:as)\\s+[\\/\\w]+)?\\s+(?=import)'
    },
    {
      begin: '(var|let)\\s*\\(',
      captures: {1: {name: 'keyword.other.nim'}},
      end: '\\)'
    },
    {
      match:
        '((?<![\\w\\x{80}-\\x{10FFFF}])(interface)(?![\\w\\x{80}-\\x{10FFFF}]))',
      name: 'keyword.invalid.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(new|GC_ref|GC_unref|assert|echo|defined|declared|newException|countup|countdown|len|high|low)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'keyword.other.common.function.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(((uint|int|float)(8|16|32|64)?)|clong|culong|cchar|cschar|cshort|cint|csize|clonglong|cfloat|cdouble|clongdouble|cuchar|cushort|cuint|culonglong|cstringArray|bool|string|auto|cstring|char|byte|tobject|typedesc|stmt|expr|any|untyped|typed)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'storage.type.concrete.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(range|array|seq|tuple|Natural|set|ref|ptr|pointer)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'storage.type.generic.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(proc|func|iterator|method|template|macro)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'storage.type.function.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(openarray|varargs|void)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'storage.type.generic.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])([A-Z][A-Z0-9_]+)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'support.constant.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])([A-Z]\\w+)(?![\\w\\x{80}-\\x{10FFFF}])',
      name: 'support.type.nim'
    },
    {
      match:
        '(?<![\\w\\x{80}-\\x{10FFFF}])(\\w+)(?![\\w\\x{80}-\\x{10FFFF}])(?=\\()',
      name: 'support.function.any-method.nim'
    },
    {
      begin: '\\w*\\"\\"\\"',
      end: '\\"\\"\\"[^\\"]',
      name: 'string.quoted.triple.nim'
    },
    {
      begin: '\\w+\\"',
      end: '\\"',
      name: 'string.quoted.double.raw.nim',
      patterns: [{match: '\\"\\"'}]
    },
    {
      begin: '\\"',
      end: '\\"',
      name: 'string.quoted.double.nim',
      patterns: [{include: '#escaped_char'}]
    },
    {
      match:
        "\\'([^\\\\]|\\\\x[0-9A-Fa-f][0-9A-Fa-f]|\\\\\\d+|\\\\[abceflnrtv\\\\\\\"\\'])\\'",
      name: 'string.quoted.single.nim'
    },
    {
      match: "\\'\\\\[^abceflnrtv\\\\\\\"\\']\\'",
      name: 'invalid.illegal.character.nim'
    },
    {
      match:
        "\\'[A-Fa-f0-9\\x{80}-\\x{10FFFF}][A-Fa-f0-9\\x{80}-\\x{10FFFF}]+\\'",
      name: 'invalid.illegal.character.nim'
    },
    {
      begin: '([\\w\\x{80}-\\x{10FFFF}\\`]+)\\s*(?=\\(|\\[.+?\\]\\s*\\()',
      captures: {1: {name: 'support.function.any-method.nim'}},
      end: '\\)',
      patterns: [{include: 'source.nim'}]
    },
    {
      captures: {1: {name: 'support.function.any-method.nim'}},
      match:
        '([\\w\\x{80}-\\x{10FFFF}]+)(?=\\s+[\\w](?![\\w\\x{80}-\\x{10FFFF}]+((?!\\n)\\s)+))',
      patterns: [{include: 'source.nim'}]
    },
    {
      captures: {1: {name: 'support.function.any-method.nim'}},
      match: '([\\w\\x{80}-\\x{10FFFF}]+)(?=\\s+[\\"\\\'\\`])',
      patterns: [{include: 'source.nim'}]
    },
    {
      captures: {
        1: {name: 'storage.type.function.nim'},
        2: {name: 'keyword.operator.nim'}
      },
      match: '(tmpl(i)?)(?=( (nim|html|xml|js|css|glsl|md))?\\"\\"\\")'
    },
    {
      name: 'source.nim.embedded.nim',
      patterns: [
        {
          begin: '(nim)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'source.nim'}
          ]
        }
      ]
    },
    {
      name: 'source.html.embedded.nim',
      patterns: [
        {
          begin: '(html)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'text.xml'}
          ]
        }
      ]
    },
    {
      name: 'source.xml.embedded.nim',
      patterns: [
        {
          begin: '(xml)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'text.xml'}
          ]
        }
      ]
    },
    {
      name: 'source.js.embedded.nim',
      patterns: [
        {
          begin: '(js)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'source.js'}
          ]
        }
      ]
    },
    {
      name: 'source.css.embedded.nim',
      patterns: [
        {
          begin: '(css)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'source.css'}
          ]
        }
      ]
    },
    {
      name: 'source.glsl.embedded.nim',
      patterns: [
        {
          begin: '(glsl)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'},
            {include: 'source.glsl'}
          ]
        }
      ]
    },
    {
      name: 'source.markdown.embedded.nim',
      patterns: [
        {
          begin: '(md)(\\"\\"\\")',
          captures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'comment.syntax.nim'}
          },
          end: '\\"\\"\\"',
          endCaptures: {0: {name: 'comment.syntax.nim'}},
          patterns: [
            {
              begin: '(?<!\\$)(\\$)\\(',
              captures: {1: {name: 'keyword.operator.nim'}},
              end: '\\)',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)\\{',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.operator.nim'}
              },
              end: '\\}',
              patterns: [{include: 'source.nim'}]
            },
            {
              begin: '(?<!\\$)(\\$)(for|while|case|of|when|if|else|elif)( )',
              captures: {
                1: {name: 'keyword.operator.nim'},
                2: {name: 'keyword.control.nim'}
              },
              end: '(\\{|\\n)',
              endCaptures: {1: {name: 'plain'}},
              patterns: [{include: 'source.nim'}]
            },
            {match: '(?<!\\$)(\\$[a-zA-Z0-9_]+)', name: 'keyword.operator.nim'}
          ]
        }
      ]
    }
  ],
  repository: {
    escaped_char: {
      patterns: [
        {match: '\\\\[nN]', name: 'constant.character.escape.newline.nim'},
        {
          match: '\\\\[cC]|\\\\[rR]',
          name: 'constant.character.escape.carriagereturn.nim'
        },
        {match: '\\\\[lL]', name: 'constant.character.escape.linefeed.nim'},
        {match: '\\\\[fF]', name: 'constant.character.escape.formfeed.nim'},
        {match: '\\\\[tT]', name: 'constant.character.escape.tabulator.nim'},
        {
          match: '\\\\[vV]',
          name: 'constant.character.escape.verticaltabulator.nim'
        },
        {match: '\\\\\\"', name: 'constant.character.escape.double-quote.nim'},
        {match: "\\\\'", name: 'constant.character.escape.single-quote.nim'},
        {
          match: '\\\\[0-9]+',
          name: 'constant.character.escape.chardecimalvalue.nim'
        },
        {match: '\\\\[aA]', name: 'constant.character.escape.alert.nim'},
        {match: '\\\\[bB]', name: 'constant.character.escape.backspace.nim'},
        {match: '\\\\[eE]', name: 'constant.character.escape.escape.nim'},
        {
          match: '\\\\[xX][0-9A-Fa-f]{2}',
          name: 'constant.character.escape.hex.nim'
        },
        {match: '\\\\\\\\', name: 'constant.character.escape.backslash.nim'}
      ]
    }
  },
  scopeName: 'source.nim'
}

export default grammar
