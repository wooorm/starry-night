// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nim-lang/NimLime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nim', '.nim.cfg', '.nimble', '.nimrod', '.nims'],
  names: ['nim'],
  patterns: [
    {include: '#pragmas'},
    {include: '#brackets'},
    {include: '#punctuations'},
    {include: '#block-doc-comments'},
    {include: '#comments'},
    {include: '#for-stmts'},
    {include: '#asm-stmts'},
    {include: '#routines'},
    {include: '#fmt-strs'},
    {include: '#operators'},
    {include: '#literals'},
    {include: '#keywords'},
    {include: '#do-stmts'},
    {include: '#calls'},
    {include: '#types'},
    {include: '#builtins'},
    {include: '#generic-symbols'}
  ],
  repository: {
    'asm-stmt-1': {
      patterns: [
        {
          begin: '([Rr])?(""")',
          captures: {
            1: {name: 'storage.type.string.nim'},
            2: {
              name: 'string.quoted.triple.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.triple.nim',
          end: '"""(?!")',
          endCaptures: {
            0: {
              name: 'string.quoted.triple.nim punctuation.definition.string.end.nim'
            }
          },
          patterns: [{include: '#interpolation'}]
        },
        {
          begin: '([Rr])(")',
          beginCaptures: {
            1: {name: 'storage.type.string.nim'},
            2: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.double.nim',
          end: '(")|(\\n)',
          endCaptures: {
            1: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            },
            2: {name: 'invalid.illegal.nim'}
          },
          patterns: [{include: '#interpolation'}]
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.nim'}},
          end: '(")|(\\n)',
          endCaptures: {
            1: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            },
            2: {name: 'invalid.illegal.nim'}
          },
          name: 'string.quoted.double.nim',
          patterns: [
            {
              match:
                '\\\\(?:[ABCEFLNPRTVabceflnprtv"\'\\\\]|\\d+|[Xx][[:xdigit:]]{2}|[Uu](?:[[:xdigit:]]{4}|\\{[[:xdigit:]]+}))',
              name: 'constant.character.escape.nim'
            },
            {match: '\\\\', name: 'invalid.illegal.lone-escape.nim'},
            {include: '#interpolation'}
          ]
        }
      ]
    },
    'asm-stmts': {
      patterns: [
        {
          begin: 'asm\\b',
          beginCaptures: {0: {name: 'keyword.control.flow.nim'}},
          end: '(?=[^"Rr{\\s])|(?<=")',
          patterns: [{include: '#pragmas'}, {include: '#asm-stmt-1'}]
        }
      ]
    },
    'block-comments': {
      patterns: [
        {
          begin: '#\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.nim'}
          },
          end: ']#',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.nim'}},
          name: 'comment.block.number-sign.nim',
          patterns: [{include: '#block-comments'}]
        }
      ]
    },
    'block-doc-comments': {
      patterns: [
        {
          begin: '##\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.nim'}
          },
          end: ']##',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.nim'}},
          name: 'comment.block.documentation.nim',
          patterns: [{include: '#block-doc-comments'}]
        }
      ]
    },
    brackets: {
      patterns: [
        {include: '#square-brackets'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.braces.begin.nim'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.braces.end.nim'}},
          name: 'meta.braces.nim',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.parens.begin.nim'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.parens.end.nim'}},
          name: 'meta.parens.nim',
          patterns: [{include: '$self'}]
        }
      ]
    },
    builtins: {
      patterns: [
        {match: '\\bresult\\b', name: 'variable.language.nim'},
        {
          match:
            '\\b(?x:any|array|auto|bool|byte |c(?:double|float|u?(?:long(?:long)?|char|int|short)|longdouble|schar |size(?:_t)?|string(?:[Aa]rray)?) |char|float(?:32|64)?|iterable|lent|open[Aa]rray|owned|pointer|ptr|range|ref|se[qt] |sink|static|string|typed?|type[Dd]esc|u?int(?:8|16|32|64)?|untyped|varargs|void)\\b',
          name: 'storage.type.primitive.nim'
        },
        {
          match:
            '\\b(?x:appType|Compile(?:Date|Time)|cpuEndian |host(?:CPU|OS) |isMainModule|NaN|(?:Neg)?Inf|Nim(?:Major|Minor|Patch|Version)|nimvm|off|on |Quit(?:Failure|Success))\\b',
          name: 'support.constant.builtin.nim'
        }
      ]
    },
    calls: {
      patterns: [
        {
          begin:
            '(?x: (?= (?: (?!(?:out|ptr|ref|tuple)\\b) [A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+` ) (?:\\[.*])? (?: \\( |" |[ ]+ (?: [_\\d"\'`\\[\\(] |(?!\\.|(?:\\*?[ ]*)[:=]|=[^=])[-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔]+[^\\-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔\\s] |(?!(as|asm|and|bind|break|concept|const|continue|converter |defer|discard|distinct|div|elif|else|end|except|export|finally|from|import |include|interface|is(?:not)?|let|macro|method|mixin|mod|(?:not)?in|of |raise|sh[lr]|template|using|while|yield|x?or)\\b)[A-Za-z\\x80-\\xff] |\\{(?!\\.) ) ) ) )',
          end: '(?=[^\\[\\(`\\w\\x{80}-\\x{ff}])|(?<=["\\)])',
          patterns: [
            {
              begin: '(?=[`_A-Za-z\\x80-\\xff])',
              end: '(?=[^`_A-Za-z\\x80-\\xff])',
              name: 'entity.name.function.nim',
              patterns: [
                {include: '#builtins'},
                {match: '[A-Z][\\dA-Za-z]+\\b', name: 'support.type.nim'},
                {
                  match:
                    '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`'
                }
              ]
            },
            {
              begin: '\\[:?',
              beginCaptures: {
                0: {name: 'punctuation.section.generic.begin.nim'}
              },
              end: ']',
              endCaptures: {0: {name: 'punctuation.section.generic.end.nim'}},
              name: 'meta.function-call.nim meta.generic.nim',
              patterns: [{include: '$self'}]
            },
            {
              begin: '\\(',
              beginCaptures: {
                0: {name: 'punctuation.section.arguments.begin.nim'}
              },
              end: '(\\))',
              endCaptures: {1: {name: 'punctuation.section.arguments.end.nim'}},
              name: 'meta.function-call.arguments.nim',
              patterns: [{include: '$self'}]
            },
            {include: '#triplestr_lit'},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.nim'}
              },
              end: '("(?!"))|(\\n)',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.nim'},
                2: {name: 'invalid.illegal.unclosed-string.nim'}
              },
              name: 'string.quoted.double.nim',
              patterns: [{match: '""', name: 'constant.character.escape.nim'}]
            }
          ]
        }
      ]
    },
    characters: {
      patterns: [
        {
          captures: {
            0: {name: 'constant.character.nim'},
            1: {name: 'constant.character.escape.nim'}
          },
          match:
            "'(?:[^\\\\']|(\\\\(?:[ABCEFLNRTVabceflnrtv\"'\\\\]|\\d+|[Xx][[:xdigit:]]{2})))'"
        },
        {match: "'[^']+'", name: 'invalid.illegal.nim'}
      ]
    },
    comments: {
      patterns: [{include: '#block-comments'}, {include: '#line-comments'}]
    },
    'do-stmts': {
      patterns: [
        {
          begin: '\\bdo\\b',
          beginCaptures: {0: {name: 'storage.type.function.nim'}},
          end: '(->)|(?=[^\\-\\( ])',
          endCaptures: {
            1: {name: 'punctuation.separator.annotation.return.nim'}
          },
          patterns: [{include: '#param-list'}]
        }
      ]
    },
    'doc-comments': {
      patterns: [
        {include: '#block-doc-comments'},
        {include: '#line-doc-comments'}
      ]
    },
    'fmt-strs': {
      patterns: [
        {
          begin: '(?:(fmt)|(&))(""")',
          beginCaptures: {
            1: {name: 'meta.function-call.nim variable.function.nim'},
            2: {name: 'keyword.operator.nim'},
            3: {
              name: 'string.quoted.triple.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.triple.nim',
          end: '"""(?!")',
          endCaptures: {
            0: {
              name: 'string.quoted.triple.nim punctuation.definition.string.end.nim'
            }
          },
          patterns: [
            {match: '{{|}}', name: 'constant.character.escape.nim'},
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.embedded.begin.nim'}
              },
              end: '(=?(?: *:[^}]*)?) *(})|(?="""[^"])',
              endCaptures: {
                1: {name: 'constant.other.format-spec.nim'},
                2: {name: 'punctuation.section.embedded.end.nim'}
              },
              name: 'source.nim',
              patterns: [{include: '$self'}]
            }
          ]
        },
        {
          begin: '(fmt)(")',
          beginCaptures: {
            1: {name: 'meta.function-call.nim variable.function.nim'},
            2: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.triple.nim',
          end: '("(?!"))|(\\n)',
          endCaptures: {
            1: {
              name: 'string.quoted.double.nim punctuation.definition.string.end.nim'
            },
            2: {name: 'invalid.illegal.nim'}
          },
          patterns: [
            {match: '{{|}}|""', name: 'constant.character.escape.nim'},
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.embedded.begin.nim'}
              },
              end: '(=?(?: *:[^}]*)?) *(})|(\\n)|(?=")',
              endCaptures: {
                1: {name: 'constant.other.format-spec.nim'},
                2: {name: 'punctuation.section.embedded.end.nim'},
                3: {name: 'invalid.illegal.nim'}
              },
              name: 'source.nim',
              patterns: [{include: '$self'}]
            }
          ]
        },
        {
          begin: '(&)(")',
          beginCaptures: {
            1: {name: 'keyword.operator.nim'},
            2: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.double.nim',
          end: '(")|(\\n)',
          endCaptures: {
            1: {
              name: 'string.quoted.double.nim punctuation.definition.string.end.nim'
            },
            2: {name: 'invalid.illegal.nim'}
          },
          patterns: [
            {match: '{{|}}', name: 'constant.character.escape.nim'},
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.embedded.begin.nim'}
              },
              end: '(=?(?: *:[^}]*)?) *(})|(\\n)|(?=")',
              endCaptures: {
                1: {name: 'constant.other.format-spec.nim'},
                2: {name: 'punctuation.section.embedded.end.nim'},
                3: {name: 'invalid.illegal.nim'}
              },
              name: 'source.nim',
              patterns: [
                {
                  match:
                    '\\\\(?:[ABCEFLNPRTVabceflnprtv"\'\\\\]|\\d+|[Xx][[:xdigit:]]{2}|[Uu](?:[[:xdigit:]]{4}|\\{[[:xdigit:]]+}))',
                  name: 'constant.character.escape.nim'
                },
                {match: '\\\\', name: 'invalid.illegal.lone-escape.nim'},
                {include: '$self'}
              ]
            },
            {
              match:
                '\\\\(?:[ABCEFLNPRTVabceflnprtv"\'\\\\]|\\d+|[Xx][[:xdigit:]]{2}|[Uu](?:[[:xdigit:]]{4}|\\{[[:xdigit:]]+}))',
              name: 'constant.character.escape.nim'
            },
            {match: '\\\\', name: 'invalid.illegal.lone-escape.nim'}
          ]
        }
      ]
    },
    'for-stmt-1': {
      patterns: [
        {match: ',', name: 'punctuation.separator.nim'},
        {
          match:
            '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`'
        },
        {include: '#pragmas'},
        {include: '#comments'}
      ]
    },
    'for-stmts': {
      patterns: [
        {
          begin: 'for\\b',
          beginCaptures: {0: {name: 'keyword.control.loop.for.nim'}},
          end: '(in\\b)|(?=[^#,{_`A-Za-z\\x80-\\xff\\s])',
          endCaptures: {1: {name: 'keyword.control.loop.for.in.nim'}},
          patterns: [
            {
              begin: '\\(',
              beginCaptures: {
                0: {name: 'punctuation.section.parens.begin.nim'}
              },
              end: '(in\\b)|(\\))|(?=[^#,{_`A-Za-z\\x80-\\xff\\s])',
              endCaptures: {
                1: {name: 'keyword.control.loop.for.in.nim'},
                2: {name: 'punctuation.section.parens.end.nim'}
              },
              patterns: [{include: '#for-stmt-1'}]
            },
            {include: '#for-stmt-1'}
          ]
        }
      ]
    },
    'generic-param-list': {
      patterns: [
        {
          begin: '(?<=[`*\\w\\x{80}-\\x{ff}]) *(\\[)',
          beginCaptures: {1: {name: 'punctuation.section.generic.begin.nim'}},
          end: '(])|(?=[^#_`:=,;A-Za-z\\x80-\\xff\\s])',
          endCaptures: {1: {name: 'punctuation.section.generic.end.nim'}},
          name: 'meta.generic.nim',
          patterns: [{include: '#generic-param-list-0'}]
        }
      ]
    },
    'generic-param-list-0': {
      patterns: [
        {match: '[,;]', name: 'punctuation.separator.nim'},
        {
          begin: '(:)|(=)',
          beginCaptures: {
            1: {name: 'punctuation.separator.annotation.nim'},
            2: {name: 'keyword.operator.assignment.nim'}
          },
          end: '([,;])|(?=\\])',
          endCaptures: {1: {name: 'punctuation.separator.nim'}},
          patterns: [{include: '$self'}]
        },
        {include: '#comments'}
      ]
    },
    'generic-symbols': {
      patterns: [
        {match: '[A-Z](_?[A-Z\\d_])+\\b', name: 'support.constant.nim'},
        {match: '[A-Z][\\dA-Za-z]+\\b', name: 'support.type.nim'},
        {
          match:
            '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`'
        }
      ]
    },
    interpolation: {
      patterns: [
        {
          captures: {
            0: {name: 'source.nim.embedded'},
            1: {name: 'punctuation.section.embedded.begin.nim'},
            2: {name: 'punctuation.section.embedded.end.nim'}
          },
          match:
            '(`) *(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_) *(`)'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(?:addr|cast)\\b', name: 'keyword.operator.word.nim'},
        {
          begin: '\\bdiscard +"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.nim'}
          },
          end: '"""(?!")',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.nim'}},
          name: 'comment.block.nim'
        },
        {match: '\\b(?:distinct|discard)\\b', name: 'keyword.other.nim'},
        {
          match: '\\b(?:asm|end|break|continue|raise|return|yield)\\b',
          name: 'keyword.control.flow.nim'
        },
        {match: '\\b(?:concept|enum|interface)\\b', name: 'storage.type.nim'},
        {
          captures: {
            1: {name: 'storage.type.nim'},
            2: {name: 'keyword.other.nim'}
          },
          match: '\\b(object)\\b(?: *(of)\\b)?'
        },
        {match: '\\bwhile\\b', name: 'keyword.control.loop.while.nim'},
        {match: '\\bcase\\b', name: 'keyword.control.conditional.switch.nim'},
        {match: '^ *(of)\\b', name: 'keyword.control.conditional.case.nim'},
        {match: '\\bif\\b', name: 'keyword.control.conditional.if.nim'},
        {match: '\\bwhen\\b', name: 'keyword.control.conditional.when.nim'},
        {match: '\\belif\\b', name: 'keyword.control.conditional.elseif.nim'},
        {
          captures: {
            0: {name: 'meta.statement.conditional.else.nim'},
            1: {name: 'keyword.control.conditional.else.nim'},
            2: {name: 'punctuation.section.block.conditional.else.nim'}
          },
          match: '\\b(else)\\b(?: *(:))?'
        },
        {
          captures: {
            0: {name: 'meta.statement.exception.try.nim'},
            1: {name: 'keyword.control.exception.try.nim'},
            2: {name: 'punctuation.section.block.exception.nim'}
          },
          match: '\\b(try)\\b(?: *(:))?'
        },
        {
          captures: {
            0: {name: 'meta.statement.exception.finally.nim'},
            1: {name: 'keyword.control.exception.finally.nim'},
            2: {name: 'punctuation.section.block.exception.finally.nim'}
          },
          match: '\\b(finally)\\b(?: *(:))?'
        },
        {
          captures: {
            1: {name: 'keyword.control.flow.defer.nim'},
            2: {name: 'punctuation.section.block.begin.nim'}
          },
          match: '\\b(defer)\\b(?: *(:))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.block.nim'},
            2: {name: 'punctuation.section.block.begin.nim'}
          },
          match:
            '\\b(block)\\b(?:(?: *(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`))? *(:))?'
        },
        {
          match: '\\b(?:as|(?:ex|im)port|include|bind|mixin|from|except)\\b',
          name: 'keyword.control.nim'
        },
        {match: '\\b(?:const|let|var|using)\\b', name: 'storage.modifier.nim'}
      ]
    },
    'language-constants': {
      patterns: [
        {match: '\\b(?:true|false|nil)\\b', name: 'constant.language.nim'}
      ]
    },
    'line-comments': {
      patterns: [
        {
          begin: '(#)(?: *(TODO|todo)\\b)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.nim'},
            2: {name: 'invalid.deprecated.nim'}
          },
          end: '$\\n?',
          name: 'comment.line.number-sign.nim'
        }
      ]
    },
    'line-doc-comments': {
      patterns: [
        {
          begin: '##',
          beginCaptures: {0: {name: 'punctuation.definition.comment.nim'}},
          end: '$\\n?',
          name: 'comment.line.documentation.nim'
        }
      ]
    },
    literals: {
      patterns: [
        {include: '#str_lits'},
        {include: '#numbers'},
        {include: '#characters'},
        {include: '#language-constants'}
      ]
    },
    numbers: {
      patterns: [
        {
          captures: {
            0: {name: 'meta.number.float.decimal.nim'},
            1: {name: 'constant.numeric.value.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'punctuation.separator.decimal.nim'},
            4: {name: 'constant.numeric.value.exponent.nim'},
            5: {name: 'constant.numeric.value.exponent.nim'},
            6: {name: 'constant.numeric.suffix.nim'},
            7: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(\\d(?:_?\\d)*) (?: (?: ((\\.)\\d(?:_?\\d)*) ([Ee][-+]?\\d(?:_?\\d)*)? |([Ee][-+]?\\d(?:_?\\d)*) ) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[Ff](?:32|64)|[Dd]))? |('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[Ff](?:32|64)|[Dd])) ) )"
        },
        {
          captures: {
            0: {name: 'meta.number.float.hexadecimal.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0[Xx]) ([[:xdigit:]](?:_?[[:xdigit:]])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|[Ff](?:32|64)) )"
        },
        {
          captures: {
            0: {name: 'meta.number.float.octal.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0o) ([0-7](?:_?[0-7])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[Ff](?:32|64)|[Dd])) )"
        },
        {
          captures: {
            0: {name: 'meta.number.float.binary.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0[Bb]) ([01](?:_?[01])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[Ff](?:32|64)|[Dd])) )"
        },
        {
          captures: {
            0: {name: 'meta.number.integer.hexadecimal.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0[Xx]) ([[:xdigit:]](?:_?[[:xdigit:]])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[IUiu](?:8|16|32|64)|[Uu]))? )"
        },
        {
          captures: {
            0: {name: 'meta.number.integer.octal.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0o) ([0-7](?:_?[0-7])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[IUiu](?:8|16|32|64)|[Uu]))? )"
        },
        {
          captures: {
            0: {name: 'meta.number.integer.binary.nim'},
            1: {name: 'constant.numeric.base.nim'},
            2: {name: 'constant.numeric.value.nim'},
            3: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(0[Bb]) ([01](?:_?[01])*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[IUiu](?:8|16|32|64)|[Uu]))? )"
        },
        {
          captures: {
            0: {name: 'meta.number.integer.decimal.nim'},
            1: {name: 'constant.numeric.value.nim'},
            2: {name: 'constant.numeric.suffix.nim'}
          },
          match:
            "(?x: \\b(\\d(?:_?\\d)*) ('(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_)|(?:[IUiu](?:8|16|32|64)|[Uu]))? )"
        }
      ]
    },
    operators: {
      patterns: [
        {match: '\\b(?:and|not|x?or)\\b', name: 'keyword.operator.logical.nim'},
        {match: '^of\\b', name: 'keyword.control.conditional.case.nim'},
        {
          match: '\\b(?:of|(?:not)?in|is(?:not)?)\\b',
          name: 'keyword.operator.word.nim'
        },
        {match: '\\bsh[lr]\\b', name: 'keyword.operator.bitwise.nim'},
        {match: '\\b(?:div|mod)\\b', name: 'keyword.operator.arithmetic.nim'},
        {match: '==|<=?|>=?|!=', name: 'keyword.operator.comparison.nim'},
        {
          match:
            '(?:[-+*/@$&%|^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔][-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔]*)?=(?![-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔])',
          name: 'keyword.operator.assignment.nim'
        },
        {
          match: '[-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔]+',
          name: 'keyword.operator.nim'
        }
      ]
    },
    'param-list': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.parameters.begin.nim'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.parameters.end.nim'}},
          name: 'meta.function.parameters',
          patterns: [
            {match: '[,;]', name: 'punctuation.separator.nim'},
            {
              begin: '(:)|(=)',
              beginCaptures: {
                1: {name: 'punctuation.separator.annotation.nim'},
                2: {name: 'keyword.operator.assignment.nim'}
              },
              end: '(?=[,;\\)])',
              patterns: [{include: '$self'}]
            },
            {include: '#comments'}
          ]
        }
      ]
    },
    patterns: {
      patterns: [
        {
          begin: '\\{(?!\\.)',
          beginCaptures: {0: {name: 'punctuation.section.pattern.begin.nim'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.pattern.end.nim'}},
          name: 'meta.pattern.nim',
          patterns: [{include: '$self'}]
        }
      ]
    },
    pragmas: {
      patterns: [
        {
          begin: '\\{\\.(?!\\.})',
          beginCaptures: {
            0: {name: 'punctuation.section.annotation.begin.nim'}
          },
          end: '\\.?}',
          endCaptures: {0: {name: 'punctuation.section.annotation.end.nim'}},
          name: 'meta.annotation.nim',
          patterns: [
            {include: '#calls'},
            {
              match:
                '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`',
              name: 'entity.other.attribute-name.pragma.nim'
            },
            {include: '#square-brackets'},
            {
              begin: '(?=\\S)',
              end: '(,)|(?=\\.?})',
              endCaptures: {1: {name: 'punctuation.separator.sequence.nim'}},
              patterns: [
                {
                  begin: ':',
                  beginCaptures: {
                    0: {name: 'punctuation.separator.key-value.nim'}
                  },
                  end: '(?=,|\\.?})',
                  patterns: [{include: '$self'}]
                }
              ]
            }
          ]
        }
      ]
    },
    punctuations: {
      patterns: [
        {match: ';', name: 'punctuation.terminator.statement.nim'},
        {match: ',', name: 'punctuation.separator.nim'},
        {match: ':', name: 'punctuation.section.block.begin.nim'},
        {
          match: '\\.(?![-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔])',
          name: 'punctuation.accessor.dot.nim'
        },
        {
          captures: {
            1: {name: 'storage.modifier.nim'},
            2: {name: 'punctuation.separator.annotation.nim'}
          },
          match: '(\\*) *(:|(?=,|#|\\{\\.))'
        },
        {match: '\\)|]|}', name: 'invalid.illegal.nim'}
      ]
    },
    routines: {
      patterns: [
        {
          begin:
            '(?x: (proc|template|iterator|func|method|macro|converter)\\b (?:[ ]*([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?:[ ]*(\\*))?)? )',
          beginCaptures: {
            1: {name: 'storage.type.function.nim'},
            2: {name: 'entity.name.function.nim'},
            3: {name: 'storage.modifier.nim'}
          },
          end: '(:)|(?=[^#\\(\\[:\\s]|##)',
          endCaptures: {1: {name: 'punctuation.separator.annotation.nim'}},
          name: 'meta.function.nim',
          patterns: [
            {include: '#comments'},
            {include: '#patterns'},
            {include: '#generic-param-list'},
            {include: '#param-list'}
          ]
        }
      ]
    },
    rstr_lit: {
      patterns: [
        {
          begin: '([Rr])(")',
          beginCaptures: {
            1: {name: 'storage.type.nim'},
            2: {
              name: 'string.quoted.double.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.double.nim',
          end: '("(?!"))|(\\n)',
          endCaptures: {
            1: {
              name: 'string.quoted.double.nim punctuation.definition.string.end.nim'
            },
            2: {
              name: 'string.quoted.double.nim invalid.illegal.unclosed-string.nim'
            }
          },
          patterns: [{match: '""', name: 'constant.character.escape.nim'}]
        }
      ]
    },
    'square-brackets': {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'punctuation.section.brackets.begin.nim'}},
          end: ']',
          endCaptures: {0: {name: 'punctuation.section.brackets.end.nim'}},
          name: 'meta.brackets.nim',
          patterns: [{include: '$self'}]
        }
      ]
    },
    str_lit: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.nim'}},
          end: '(")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.nim'},
            2: {name: 'invalid.illegal.nim'}
          },
          name: 'string.quoted.double.nim',
          patterns: [
            {
              match:
                '\\\\(?:[ABCEFLNPRTVabceflnprtv"\'\\\\]|\\d+|[Xx][[:xdigit:]]{2}|[Uu](?:[[:xdigit:]]{4}|\\{[[:xdigit:]]+}))',
              name: 'constant.character.escape.nim'
            },
            {match: '\\\\', name: 'invalid.illegal.lone-escape.nim'}
          ]
        }
      ]
    },
    str_lits: {
      patterns: [
        {include: '#triplestr_lit'},
        {include: '#rstr_lit'},
        {include: '#str_lit'}
      ]
    },
    triplestr_lit: {
      patterns: [
        {
          begin: '([Rr])?(""")',
          beginCaptures: {
            1: {name: 'storage.type.nim'},
            2: {
              name: 'string.quoted.triple.nim punctuation.definition.string.begin.nim'
            }
          },
          contentName: 'string.quoted.triple.nim',
          end: '"""(?!")',
          endCaptures: {
            0: {
              name: 'string.quoted.triple.nim punctuation.definition.string.end.nim'
            }
          }
        }
      ]
    },
    types: {
      patterns: [
        {
          begin:
            '(?=(?:[A-Za-z](?:_?[\\dA-Za-z])*)\\[)(?x:(out|ptr|ref|array |cstring[Aa]rray|iterable|lent|open[Aa]rray|owned|ptr|range|ref|se[qt] |sink|static|type(?:[Dd]esc)?|varargs)|([A-Z][\\dA-Za-z]+))(\\[)',
          beginCaptures: {
            1: {name: 'storage.type.primitive.nim'},
            2: {name: 'support.type.nim'},
            3: {name: 'meta.generic.nim punctuation.section.generic.begin.nim'}
          },
          contentName: 'meta.generic.nim',
          end: ']',
          endCaptures: {
            0: {name: 'meta.generic.nim punctuation.section.generic.nim'}
          },
          patterns: [{include: '$self'}]
        },
        {
          match: '\\b(?:out|tuple|ref|ptr)\\b',
          name: 'storage.type.primitive.nim'
        }
      ]
    }
  },
  scopeName: 'source.nim'
}

export default grammar
