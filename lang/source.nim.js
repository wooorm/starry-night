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
    {include: '#type-defs'},
    {include: '#const-defs'},
    {include: '#var-let-using-defs'},
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
            '\\b(?x: abs|add(?:[Ee]scapedChar|Float|Int|QuitProc|Quoted)?|alignof|allocCStringArray|arrayWith |ashr|astToStr|assert |atomic(?:AddFetch|AlwaysLockFree|(?:And|Nand|Or|Sub|Xor)Fetch|Clear |(?:Compare)?ExchangeN?|Dec|Fetch(?:A[dn]d|Nand|Or|Sub|Xor)|Inc |IsLockFree|LoadN?|(?:Signal|Thread)Fence|StoreN?|TestAndSet) |card|cas|chr|clamp|close|cmp(?:Mem)?|compile(?:Option|s)|contains|copyMem |cpuRelax|create(?:(?:Shared)?U?|Thread)|cstringArrayToSeq |dealloc(?:CStringArray|Heap|(?:Shared)?(?:Impl)?)|debugEcho|dec |declared(?:InScope)?|deepCopy|default|defined|del(?:ete)?|dispose|doAssert(?:Raises)?|echo|endOfFile |equalMem|excl|failedAssertImpl|field(?:s|Pairs)|find|finished|flushFile|freeShared |GC_(?:collectZct|disable(?:MarkAndSweep)?|fullCollect|getStatistics|(?:un)?ref) |gcInvariant|getAllocStats |get(?:CurrentException(?:Msg)?|File(?:Pos|Size)|Frame(?:State)? |(?:(?:Free|Occupied|Total)(?:Shared)?|Max)Mem|GCFrame|OsFileHandle |StackTrace(?:Entries)?|TypeInfo|ThreadId) |gorge(?:Ex)?|handle|high|incl?|insert|instantiationInfo|internalNew |isNil|isNotForeign|iterToProc|joinThreads?|len|lines|locals|low|max|min |m?(?:items|pairs)|move(?:Mem)? |new(?:Seq(?:OfCap|Uninitialized)?|String(?:OfCap)?|Exception|WideCString)? |onFailedAssert|onThreadDestruction|open|ord|peek|pinToCpu|pop(?:GcFrame)?|pred |prepareMutation|procCall|protect|pushGcFrame|quit|raiseAssert|raw(?:Env|Proc) |ready|read(?:All|Buffer|Bytes|Chars?|File|Lines?) |(?:re)?alloc(?:Shared)?0?(?:Impl)?|recv|repr(?:Discriminant)?|reset |resize(?:Shared)?|runnableExamples |set(?:ControlCHook|CurrentException|FilePos|Frame(?:State)?|GcFrame|Inheritable|Len|StdIoUnbuffered|upForeignThreadGc) |shallow(?:Copy)?|sizeof|slurp|stackTraceAvailable|static(?:Exec|Read)|stdmsg |substr|succ|swap|tearDownForeignThreadGc |to(?:Biggest?(?:Float|Int)|OpenArray(?:Byte)?|U(?:8|16|32))|try(?:Recv|Send) |typeof|unsafe(?:Addr|New)|unsetControlCHook|wasMoved|writeStackTrace |ze(?:64)?|zero(?:Default|Mem)|count(?:down|up)|varargsLen|closureScope |currentSourcePath|disarm|dumpAllocStats|excl|fence|format(?:ErrorIndexBound|FieldDefect) |incl|offsetOf|once|rangeCheck|(?:un)?likely|unown|write(?:Buffer|Bytes|Chars|File|Line)? )\\b',
          name: 'support.function.builtin.expl'
        },
        {
          match:
            '`(?:addr|and|div|is(?:not)?|mod|not|of|sh[lr]|x?or|(?:not)?in|=(?:copy|destroy|sink|trace)|\\$|%%|[-*+/<]%?=?|<=%|[&=]=?|\\.\\.|@|\\[]=?)`',
          name: 'support.function.builtin.expl'
        },
        {
          match:
            '\\b(?x:any|array|auto|bool|byte |c(?:double|float|u?(?:long(?:long)?|char|int|short)|longdouble|schar |size(?:_t)?|string(?:[Aa]rray)?) |char|float(?:32|64)?|iterable|lent|open[Aa]rray|owned|pointer|ptr|range|ref|se[qt] |sink|static|string|typed?|type[Dd]esc|u?int(?:8|16|32|64)?|untyped|varargs|void)\\b',
          name: 'storage.type.primitive.expl'
        },
        {
          match:
            '\\b(?x:appType|Compile(?:Date|Time)|(?:big|cpu|little)Endian |fm(Append|Read(?:Write(?:Existing)?)?|Write)|fsp(?:Set|Cur|End) |gc(?:Throughput|Responsiveness|Optimize(?:Space|Time))|host(?:CPU|OS) |isMainModule|NaN|(?:Neg)?Inf|Nim(?:Major|Minor|Patch|Version)|nimvm|off|on |Quit(?:Failure|Success)|typeOf(?:Iter|Proc))\\b',
          name: 'support.constant.builtin.expl'
        },
        {
          match:
            '\\b(?x: ATOMIC_(?:ACQ_REL|ACQUIRE|CONSUME|RELAXED|RELEASE|SEQ_CST)|errorMessageWriter |(?:global|local)RaiseHook|nimThreadDestructionHandlers|onUnhandledException |outOfMemHook|programResult|std(?:err|out|in)|unhandledExceptionHook )\\b',
          name: 'support.variable.builtin.expl'
        }
      ]
    },
    calls: {
      patterns: [
        {
          begin:
            '(?x: (?= (?: (?!(?:out|ptr|ref|tuple)\\b) [A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+` ) (?:\\[.*])? (?: \\( |" |[ ]+ (?: [_\\d"\'`\\[\\(] |(?!\\.|(?:\\*?[ ]*)[:=]|=[^=])[-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔]+[^\\-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔\\s] |(?!as|asm|and|bind|break|concept|const|continue|converter |defer|discard|distinct|div|elif|else|end|except|export|finally|from|import |include|interface|is(?:not)?|let|macro|method|mixin|mod|(?:not)?in|of |raise|sh[lr]|template|using|while|yield|x?or)[A-Za-z\\x80-\\xff] |\\{(?!\\.) ) ) ) )',
          end: '(?=[^\\[\\(`\\w\\x{80}-\\x{ff}])|(?<=["\\)])',
          patterns: [
            {
              begin: '(?=[`_A-Za-z\\x80-\\xff])',
              end: '(?=[^`_A-Za-z\\x80-\\xff])',
              name: 'variable.function.nim',
              patterns: [
                {include: '#builtins'},
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
              patterns: [
                {
                  captures: {
                    1: {name: 'variable.parameter.nim'},
                    2: {name: 'punctuation.separator.key-value.nim'}
                  },
                  match:
                    '(?x: (?= (?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`) [ ]* [:=](?![-=+*/<>@$~&%|!?^.:\\\\∙∘×★⊗⊘⊙⊛⊠⊡∩∧⊓±⊕⊖⊞⊟∪∨⊔]) ) (?!(?x:addr|asm|bind|block|break|case|cast|concept|const|continue|converter |defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for |from|func|if|import|include|interface|iterator|let|macro|method|mixin |object|of|out|proc|ptr|raise|ref|return|static|template|try|tuple|type |using|var|when|while|yield)\\b ) ([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?:[ ]*(:))? )'
                },
                {include: '$self'}
              ]
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
    'const-defs': {
      patterns: [
        {
          begin: '\\b(const) +(?=[A-Za-z\\x80-\\xff]|\\(|`|_\\b)',
          beginCaptures: {1: {name: 'storage.modifier.nim'}},
          end: '([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?|(?=[^\\(])',
          endCaptures: {
            1: {name: 'entity.name.constant.expl'},
            2: {name: 'storage.modifier.expl'}
          },
          patterns: [{include: '#const-name'}]
        },
        {
          begin: '^const\\b',
          beginCaptures: {
            0: {name: 'storage.modifier.nim keyword.declaration.constant.nim'}
          },
          end: '^(?!  |$)',
          patterns: [
            {
              begin: '^  (?=[A-Za-z\\x80-\\xff]|\\(|`|_\\b)',
              end: '([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?|(?=[^\\(])',
              endCaptures: {
                1: {name: 'entity.name.constant.expl'},
                2: {name: 'storage.modifier.expl'}
              },
              patterns: [{include: '#const-name'}]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    'const-name': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.parens.begin.nim'}},
          end: '(\\))|(?=[^{_`,#A-Za-z\\x80-\\xff\\s])',
          endCaptures: {1: {name: 'punctuation.section.parens.end.nim'}},
          patterns: [
            {
              captures: {
                1: {name: 'entity.name.constant.expl'},
                2: {name: 'storage.modifier.expl'}
              },
              match:
                '([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?'
            },
            {match: ',', name: 'punctuation.separator.nim'},
            {include: '#pragmas'},
            {include: '#doc-comments'},
            {include: '#comments'}
          ]
        }
      ]
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
              name: 'meta.embedded.nim',
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
              name: 'meta.embedded.nim',
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
              name: 'meta.embedded.nim',
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
        {
          match:
            '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`',
          name: 'variable.parameter.nim'
        },
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
        {match: '[A-Z](_?[A-Z\\d_])+\\b', name: 'support.constant.expl'},
        {match: '[A-Z][\\dA-Za-z]+\\b', name: 'support.type.expl'},
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
    'invalid-names': {
      patterns: [
        {
          match:
            '(?x:addr|asm|bind|block|break|case|cast|concept|const|continue|converter |defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for |from|func|if|import|include|interface|iterator|let|macro|method|mixin |object|of|out|proc|ptr|raise|ref|return|static|template|try|tuple|type |using|var|when|while|yield)\\b',
          name: 'invalid.illegal.nim'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(?:addr|cast)\\b', name: 'keyword.operator.word.expl'},
        {
          begin: '\\bdiscard +"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.expl'}
          },
          end: '"""(?!")',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.expl'}},
          name: 'comment.block.expl'
        },
        {match: '\\b(?:distinct|discard)\\b', name: 'keyword.other.expl'},
        {
          match: '\\b(?:asm|end|break|continue|raise|return|yield)\\b',
          name: 'keyword.control.flow.expl'
        },
        {match: '\\b(?:concept|enum|interface)\\b', name: 'storage.type.expl'},
        {
          captures: {
            1: {name: 'storage.type.expl'},
            2: {name: 'keyword.other.expl'}
          },
          match: '\\b(object)\\b(?: *(of)\\b)?'
        },
        {match: '\\bwhile\\b', name: 'keyword.control.loop.while.expl'},
        {match: '\\bcase\\b', name: 'keyword.control.conditional.switch.expl'},
        {match: '^ *(of)\\b', name: 'keyword.control.conditional.case.expl'},
        {match: '\\bif\\b', name: 'keyword.control.conditional.if.expl'},
        {match: '\\bwhen\\b', name: 'keyword.control.conditional.when.expl'},
        {match: '\\belif\\b', name: 'keyword.control.conditional.elseif.expl'},
        {
          captures: {
            0: {name: 'meta.statement.conditional.else.expl'},
            1: {name: 'keyword.control.conditional.else.expl'},
            2: {name: 'punctuation.section.block.conditional.else.expl'}
          },
          match: '\\b(else)\\b(?: *(:))?'
        },
        {
          captures: {
            0: {name: 'meta.statement.exception.try.expl'},
            1: {name: 'keyword.control.exception.try.expl'},
            2: {name: 'punctuation.section.block.exception.expl'}
          },
          match: '\\b(try)\\b(?: *(:))?'
        },
        {
          captures: {
            0: {name: 'meta.statement.exception.finally.expl'},
            1: {name: 'keyword.control.exception.finally.expl'},
            2: {name: 'punctuation.section.block.exception.finally.expl'}
          },
          match: '\\b(finally)\\b(?: *(:))?'
        },
        {
          captures: {
            1: {name: 'keyword.control.flow.defer.expl'},
            2: {name: 'punctuation.section.block.begin.expl'}
          },
          match: '\\b(defer)\\b(?: *(:))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.block.expl'},
            2: {name: 'punctuation.section.block.begin.expl'}
          },
          match:
            '\\b(block)\\b(?:(?: *(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`))? *(:))?'
        },
        {
          match: '\\b(?:as|(?:ex|im)port|include|bind|mixin|from|except)\\b',
          name: 'keyword.control.expl'
        },
        {
          match: '\\b(?:const|let|using)\\b',
          name: 'storage.modifier.expl keyword.declaration.expl'
        },
        {match: '\\bvar\\b', name: 'storage.modifier.expl'}
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
            {
              match:
                '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`',
              name: 'variable.parameter.nim'
            },
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
            {
              match:
                '[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`',
              name: 'entity.other.attribute-name.pragma.nim'
            },
            {include: '#square-brackets'},
            {
              begin: '(?=\\S)',
              end: '(,)|(?=\\S)',
              endCaptures: {1: {name: 'punctuation.separator.sequence.nim'}},
              patterns: [
                {
                  begin: ':',
                  beginCaptures: {
                    0: {name: 'punctuation.separator.key-value.nim'}
                  },
                  end: '(,)|(?=\\.?})',
                  endCaptures: {
                    1: {name: 'punctuation.separator.sequence.nim'}
                  },
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
    'type-defs': {
      patterns: [
        {
          begin:
            '^ *(type) +(?:(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`) *(\\.))?([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?',
          beginCaptures: {
            1: {name: 'storage.modifier.nim'},
            2: {name: 'punctuation.accessor.dot.nim'},
            3: {name: 'entity.name.type.nim'},
            4: {name: 'storage.modifier.nim'}
          },
          end: '(?=[^\\[ ])',
          patterns: [{include: '#generic-param-list'}]
        },
        {
          begin: '^type\\b',
          beginCaptures: {0: {name: 'keyword.declaration.type.nim'}},
          end: '^(?!  |$)',
          patterns: [
            {
              begin:
                '^  (?:(?:[A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`) *(\\.))?([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?',
              beginCaptures: {
                1: {name: 'punctuation.accessor.dot.nim'},
                2: {name: 'entity.name.type.nim'},
                3: {name: 'storage.modifier.nim'}
              },
              end: '(?![\\[\\s])',
              patterns: [{include: '#generic-param-list'}]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    types: {
      patterns: [
        {
          begin: '\\btuple(?=\\[)',
          beginCaptures: {0: {name: 'storage.type.primitive.nim'}},
          end: '(?=[^\\[ ])',
          patterns: [{include: '#generic-param-list'}]
        },
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
          name: 'storage.type.primitive.expl'
        }
      ]
    },
    'var-let-using-defs': {
      patterns: [
        {
          begin: '(?:^|(;)) *(var|let|using) +(?=[\\(`A-Za-z\\x80-\\xff]|_\\b)',
          beginCaptures: {
            1: {name: 'punctuation.terminator.nim'},
            2: {name: 'storage.modifier.nim keyword.declaration.variable.nim'}
          },
          end: '(?=[^\\({_`,#A-Za-z\\x80-\\xff\\s])',
          patterns: [{include: '#var-name'}]
        },
        {
          begin: '^(?:var|let|using)\\b',
          beginCaptures: {0: {name: 'storage.type.nim'}},
          end: '^(?!  |$)',
          patterns: [
            {
              begin: '^  (?=[\\(`A-Za-z\\x80-\\xff]|_\\b)',
              end: '(?=[^\\({_`,#A-Za-z\\x80-\\xff\\s])',
              patterns: [{include: '#var-name'}]
            },
            {include: '$self'}
          ]
        }
      ]
    },
    'var-name': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.parens.begin.nim'}},
          end: '(\\))|(?=[^{_`,#A-Za-z\\x80-\\xff\\s])',
          endCaptures: {1: {name: 'punctuation.section.parens.end.nim'}},
          patterns: [{include: '#var-name-0'}]
        },
        {include: '#var-name-0'}
      ]
    },
    'var-name-0': {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.expl'},
            2: {name: 'storage.modifier.expl'}
          },
          match:
            '([A-Za-z\\x80-\\xff](?:_?[\\dA-Za-z\\x80-\\xff])*|_|`[^;,\\n`]+`)(?: *(\\*))?'
        },
        {match: ',', name: 'punctuation.separator.nim'},
        {include: '#pragmas'},
        {include: '#doc-comments'},
        {include: '#comments'}
      ]
    }
  },
  scopeName: 'source.nim'
}

export default grammar
