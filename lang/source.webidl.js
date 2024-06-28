// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/andik/IDL-Syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.webidl'],
  names: ['webidl'],
  patterns: [
    {include: '#preprocessor-rule-enabled'},
    {include: '#preprocessor-rule-disabled'},
    {include: '#preprocessor-rule-other'},
    {include: '#comments'},
    {include: '#modblock'},
    {
      begin: '(cpp_quote)\\b\\(',
      beginCaptures: {1: {name: 'keyword.cpp_quote.webidl'}},
      end: '\\)',
      name: 'meta.modblock.webidl',
      patterns: [{include: '$base'}]
    },
    {
      begin: '(SAFEARRAY)\\b\\(',
      beginCaptures: {1: {name: 'storage.type.safearray.webidl'}},
      end: '\\)',
      name: 'meta.safearray.webidl',
      patterns: [{include: '$base'}]
    },
    {
      match:
        '\\b(break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while)\\b',
      name: 'keyword.control.webidl'
    },
    {
      match:
        '\\b(asm|__asm__|auto|bool|_Bool|char|_Complex|double|float|_Imaginary|int|long|short|signed|typedef|union|unsigned|void|VARIANT|BSTR)\\b',
      name: 'storage.type.webidl'
    },
    {
      match: '\\b(const|extern|register|restrict|static|volatile|inline)\\b',
      name: 'storage.modifier.webidl'
    },
    {
      match: '\\bk[A-Z]\\w*\\b',
      name: 'constant.other.variable.mac-classic.webidl'
    },
    {
      match: '\\bg[A-Z]\\w*\\b',
      name: 'variable.other.readwrite.global.mac-classic.webidl'
    },
    {
      match: '\\bs[A-Z]\\w*\\b',
      name: 'variable.other.readwrite.static.mac-classic.webidl'
    },
    {
      match: '\\b(NULL|true|false|TRUE|FALSE)\\b',
      name: 'constant.language.webidl'
    },
    {include: '#sizeof'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.webidl'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.webidl'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.webidl'}},
      name: 'string.quoted.double.webidl',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.webidl'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.webidl'}},
      name: 'string.quoted.single.webidl',
      patterns: [{include: '#string_escaped_char'}]
    },
    {
      begin:
        '(?x)\n        \t\t^\\s*\\#\\s*(define)\\s+             # define\n        \t\t((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name\n        \t\t(?:                              # and optionally:\n        \t\t    (\\()                         # an open parenthesis\n        \t\t        (\n        \t\t            \\s* \\g<id> \\s*       # first argument\n        \t\t            ((,) \\s* \\g<id> \\s*)*  # additional arguments\n        \t\t            (?:\\.\\.\\.)?          # varargs ellipsis?\n        \t\t        )\n        \t\t    (\\))                         # a close parenthesis\n        \t\t)?\n        \t',
      beginCaptures: {
        1: {name: 'keyword.control.import.define.webidl'},
        2: {name: 'entity.name.function.preprocessor.webidl'},
        4: {name: 'punctuation.definition.parameters.webidl'},
        5: {name: 'variable.parameter.preprocessor.webidl'},
        7: {name: 'punctuation.separator.parameters.webidl'},
        8: {name: 'punctuation.definition.parameters.webidl'}
      },
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.macro.webidl',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.webidl'
        },
        {include: '$base'}
      ]
    },
    {
      begin: '^\\s*#\\s*(error|warning)\\b',
      captures: {1: {name: 'keyword.control.import.error.webidl'}},
      end: '$',
      name: 'meta.preprocessor.diagnostic.webidl',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.webidl'
        }
      ]
    },
    {
      begin: '^\\s*#\\s*(include|import)\\b\\s+',
      captures: {1: {name: 'keyword.control.import.include.webidl'}},
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.c.include',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.webidl'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.webidl'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.webidl'}},
          name: 'string.quoted.double.include.webidl'
        },
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.webidl'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.string.end.webidl'}},
          name: 'string.quoted.other.lt-gt.include.webidl'
        }
      ]
    },
    {include: '#pragma-mark'},
    {
      begin:
        '^\\s*#\\s*(define|defined|elif|else|if|ifdef|ifndef|line|pragma|undef)\\b',
      captures: {1: {name: 'keyword.control.import.webidl'}},
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.webidl',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.webidl'
        }
      ]
    },
    {
      match:
        '\\b(u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t)\\b',
      name: 'support.type.sys-types.webidl'
    },
    {
      match:
        '\\b(pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t)\\b',
      name: 'support.type.pthread.webidl'
    },
    {
      match:
        '\\b(int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t)\\b',
      name: 'support.type.stdint.webidl'
    },
    {
      match: '\\b(noErr|kNilOptions|kInvalidID|kVariableLengthArray)\\b',
      name: 'support.constant.mac-classic.webidl'
    },
    {
      match:
        '\\b(AbsoluteTime|Boolean|Byte|ByteCount|ByteOffset|BytePtr|CompTimeValue|ConstLogicalAddress|ConstStrFileNameParam|ConstStringPtr|Duration|Fixed|FixedPtr|Float32|Float32Point|Float64|Float80|Float96|FourCharCode|Fract|FractPtr|Handle|ItemCount|LogicalAddress|OptionBits|OSErr|OSStatus|OSType|OSTypePtr|PhysicalAddress|ProcessSerialNumber|ProcessSerialNumberPtr|ProcHandle|Ptr|ResType|ResTypePtr|ShortFixed|ShortFixedPtr|SignedByte|SInt16|SInt32|SInt64|SInt8|Size|StrFileName|StringHandle|StringPtr|TimeBase|TimeRecord|TimeScale|TimeValue|TimeValue64|UInt16|UInt32|UInt64|UInt8|UniChar|UniCharCount|UniCharCountPtr|UniCharPtr|UnicodeScalarValue|UniversalProcHandle|UniversalProcPtr|UnsignedFixed|UnsignedFixedPtr|UnsignedWide|UTF16Char|UTF32Char|UTF8Char)\\b',
      name: 'support.type.mac-classic.webidl'
    },
    {
      match: '\\b(DISPID_NEWENUM|DISPID_VALUE)\\b',
      name: 'constant.language.windows.webidl'
    },
    {
      match:
        '\\b(__int32|BOOL|BYTE|CLSID|COLORREF|DECIMAL|DOUBLE|DWORD|FLOAT|GUID|HDC|HRESULT|HWND|IDispatch|INT|IUnknown|IWeakReference|LONG|LPSTR|LPWSTR|MSG|OLE_COLOR|RECT|REFIID|SHORT|TCHAR|UINT|UINT_PTR|ULONG|ULONGLONG|VARIANT_BOOL)\\b',
      name: 'storage.type.windows.webidl'
    },
    {include: '#block'},
    {include: '#function'},
    {
      begin:
        '\\b(coclass|dispinterface|library|struct|interface|enum)\\s+([_A-Za-z][_A-Za-z0-9]*\\b)',
      beginCaptures: {
        1: {name: 'storage.type.webidl'},
        2: {name: 'entity.name.type.webidl'}
      },
      end: '([_A-Za-z][_A-Za-z0-9]*\\b)? (?<=\\})|(?=(;|,|\\(|\\)|>|\\[|\\]))',
      name: 'meta.class-struct-block.webidl',
      patterns: [
        {include: '#angle_brackets'},
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'punctuation.definition.scope.webidl'}},
          end: '(\\})(\\s*\\n)?',
          endCaptures: {
            1: {name: 'punctuation.definition.invalid.webidl'},
            2: {name: 'invalid.illegal.you-forgot-semicolon.webidl'}
          },
          patterns: [
            {include: '#function'},
            {include: '#modblock'},
            {include: '#special_block'},
            {include: '#constructor'},
            {include: '$base'}
          ]
        },
        {include: '$base'}
      ]
    }
  ],
  repository: {
    access: {
      match: '\\.[a-zA-Z_][a-zA-Z_0-9]*\\b(?!\\s*\\()',
      name: 'variable.other.dot-access.webidl'
    },
    block: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.webidl',
      patterns: [{include: '#block_innards'}]
    },
    block_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-block'},
        {include: '#preprocessor-rule-disabled-block'},
        {include: '#preprocessor-rule-other-block'},
        {include: '#sizeof'},
        {include: '#access'},
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading.webidl'},
            2: {name: 'support.function.C99.webidl'}
          },
          match:
            '(\\s*)\\b(hypot(f|l)?|s(scanf|ystem|nprintf|ca(nf|lb(n(f|l)?|ln(f|l)?))|i(n(h(f|l)?|f|l)?|gn(al|bit))|tr(s(tr|pn)|nc(py|at|mp)|c(spn|hr|oll|py|at|mp)|to(imax|d|u(l(l)?|max)|k|f|l(d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(jmp|vbuf|locale|buf)|qrt(f|l)?|w(scanf|printf)|rand)|n(e(arbyint(f|l)?|xt(toward(f|l)?|after(f|l)?))|an(f|l)?)|c(s(in(h(f|l)?|f|l)?|qrt(f|l)?)|cos(h(f)?|f|l)?|imag(f|l)?|t(ime|an(h(f|l)?|f|l)?)|o(s(h(f|l)?|f|l)?|nj(f|l)?|pysign(f|l)?)|p(ow(f|l)?|roj(f|l)?)|e(il(f|l)?|xp(f|l)?)|l(o(ck|g(f|l)?)|earerr)|a(sin(h(f|l)?|f|l)?|cos(h(f|l)?|f|l)?|tan(h(f|l)?|f|l)?|lloc|rg(f|l)?|bs(f|l)?)|real(f|l)?|brt(f|l)?)|t(ime|o(upper|lower)|an(h(f|l)?|f|l)?|runc(f|l)?|gamma(f|l)?|mp(nam|file))|i(s(space|n(ormal|an)|cntrl|inf|digit|u(nordered|pper)|p(unct|rint)|finite|w(space|c(ntrl|type)|digit|upper|p(unct|rint)|lower|al(num|pha)|graph|xdigit|blank)|l(ower|ess(equal|greater)?)|al(num|pha)|gr(eater(equal)?|aph)|xdigit|blank)|logb(f|l)?|max(div|abs))|di(v|fftime)|_Exit|unget(c|wc)|p(ow(f|l)?|ut(s|c(har)?|wc(har)?)|error|rintf)|e(rf(c(f|l)?|f|l)?|x(it|p(2(f|l)?|f|l|m1(f|l)?)?))|v(s(scanf|nprintf|canf|printf|w(scanf|printf))|printf|f(scanf|printf|w(scanf|printf))|w(scanf|printf)|a_(start|copy|end|arg))|qsort|f(s(canf|e(tpos|ek))|close|tell|open|dim(f|l)?|p(classify|ut(s|c|w(s|c))|rintf)|e(holdexcept|set(e(nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(aiseexcept|ror)|get(e(nv|xceptflag)|round))|flush|w(scanf|ide|printf|rite)|loor(f|l)?|abs(f|l)?|get(s|c|pos|w(s|c))|re(open|e|ad|xp(f|l)?)|m(in(f|l)?|od(f|l)?|a(f|l|x(f|l)?)?))|l(d(iv|exp(f|l)?)|o(ngjmp|cal(time|econv)|g(1(p(f|l)?|0(f|l)?)|2(f|l)?|f|l|b(f|l)?)?)|abs|l(div|abs|r(int(f|l)?|ound(f|l)?))|r(int(f|l)?|ound(f|l)?)|gamma(f|l)?)|w(scanf|c(s(s(tr|pn)|nc(py|at|mp)|c(spn|hr|oll|py|at|mp)|to(imax|d|u(l(l)?|max)|k|f|l(d|l)?|mbs)|pbrk|ftime|len|r(chr|tombs)|xfrm)|to(b|mb)|rtomb)|printf|mem(set|c(hr|py|mp)|move))|a(s(sert|ctime|in(h(f|l)?|f|l)?)|cos(h(f|l)?|f|l)?|t(o(i|f|l(l)?)|exit|an(h(f|l)?|2(f|l)?|f|l)?)|b(s|ort))|g(et(s|c(har)?|env|wc(har)?)|mtime)|r(int(f|l)?|ound(f|l)?|e(name|alloc|wind|m(ove|quo(f|l)?|ainder(f|l)?))|a(nd|ise))|b(search|towc)|m(odf(f|l)?|em(set|c(hr|py|mp)|move)|ktime|alloc|b(s(init|towcs|rtowcs)|towc|len|r(towc|len))))\\b'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.function-call.leading.webidl'},
            2: {name: 'support.function.any-method.webidl'},
            3: {name: 'punctuation.definition.parameters.webidl'}
          },
          match:
            '(?x) (?: (?= \\s )  (?:(?<=else|new|return) | (?<!\\w)) (\\s+))?\n\t\t\t(\\b\n\t\t\t\t(?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b | :: )++                  # actual name\n\t\t\t)\n\t\t\t \\s*(\\()',
          name: 'meta.function-call.webidl'
        },
        {
          captures: {
            1: {name: 'variable.other.webidl'},
            2: {name: 'punctuation.definition.parameters.webidl'}
          },
          match:
            '(?x)\n\t\t\t        (?x)\n\t\t\t(?:\n\t\t\t     (?: (?= \\s )           (?<!else|new|return) (?<=\\w)\\s+      #  or word + space before name\n\t\t\t     )\n\t\t\t)\n\t\t\t(\n\t\t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++    |              # actual name\n\t\t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )?  # if it is a C++ operator\n\t\t\t)\n\t\t\t \\s*(\\()',
          name: 'meta.initialization.webidl'
        },
        {include: '#block'},
        {include: '$base'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.webidl'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.webidl'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.webidl'}},
          end: '\\*/',
          name: 'comment.block.webidl'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.webidl'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.webidl'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.webidl'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.webidl'}},
          end: '$\\n?',
          name: 'comment.line.double-slash.webidl',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.webidl'
            }
          ]
        }
      ]
    },
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b.*$',
      patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
    },
    function: {
      begin:
        '(?x)\n\t  \t\t(?:  ^                                 # begin-of-line\n\t  \t\t  |\n\t  \t\t     (?: (?= \\s )           (?<!else|new|return) (?<=\\w)      #  or word + space before name\n\t  \t\t       | (?= \\s*[A-Za-z_] ) (?<!&&)       (?<=[*&>])   #  or type modifier before name\n\t  \t\t     )\n\t  \t\t)\n\t  \t\t(\\s*) (?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()\n\t  \t\t(\n\t  \t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++ |                  # actual name\n\t  \t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )  # if it is a C++ operator\n\t  \t\t)\n\t  \t\t \\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.function.leading.webidl'},
        3: {name: 'entity.name.function.webidl'},
        4: {name: 'punctuation.definition.parameters.webidl'}
      },
      end: '(?<=\\})|(?=#)|(;)',
      name: 'meta.function.webidl',
      patterns: [
        {include: '#comments'},
        {include: '#modblock'},
        {include: '#parens'},
        {match: '\\b(const|override)\\b', name: 'storage.modifier.webidl'},
        {include: '#block'}
      ]
    },
    modblock: {
      begin: '\\[',
      end: '\\]',
      name: 'meta.modblock.webidl',
      patterns: [
        {
          begin: '([A-Za-z_][A-Za-z0-9_]*+)\\b\\s*\\(',
          beginCaptures: {1: {name: 'storage.modifier.modblock.key.webidl'}},
          end: '\\)',
          name: 'meta.modblock.webidl',
          patterns: [{include: '$base'}]
        },
        {
          match: '[A-Za-z_][A-Za-z0-9_]*+',
          name: 'storage.modifier.modblock.key.webidl'
        }
      ]
    },
    parens: {
      begin: '\\(',
      end: '\\)',
      name: 'meta.parens.webidl',
      patterns: [{include: '$base'}]
    },
    'pragma-mark': {
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.pragma.webidl'},
        3: {name: 'meta.toc-list.pragma-mark.webidl'}
      },
      match: '^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))',
      name: 'meta.section'
    },
    'preprocessor-rule-disabled': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.if.webidl'},
        3: {name: 'constant.numeric.preprocessor.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.webidl'},
            2: {name: 'keyword.control.import.else.webidl'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '$base'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          name: 'comment.block.preprocessor.if-branch',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-disabled-block': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.if.webidl'},
        3: {name: 'constant.numeric.preprocessor.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.webidl'},
            2: {name: 'keyword.control.import.else.webidl'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#block_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          name: 'comment.block.preprocessor.if-branch.in-block',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-enabled': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.if.webidl'},
        3: {name: 'constant.numeric.preprocessor.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.webidl'},
            2: {name: 'keyword.control.import.else.webidl'}
          },
          contentName: 'comment.block.preprocessor.else-branch',
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          patterns: [{include: '$base'}]
        }
      ]
    },
    'preprocessor-rule-enabled-block': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.if.webidl'},
        3: {name: 'constant.numeric.preprocessor.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.webidl'},
            2: {name: 'keyword.control.import.else.webidl'}
          },
          contentName: 'comment.block.preprocessor.else-branch.in-block',
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          patterns: [{include: '#block_innards'}]
        }
      ]
    },
    'preprocessor-rule-other': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*$',
      patterns: [{include: '$base'}]
    },
    'preprocessor-rule-other-block': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.webidl'},
        2: {name: 'keyword.control.import.webidl'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*$',
      patterns: [{include: '#block_innards'}]
    },
    sizeof: {match: '\\b(sizeof)\\b', name: 'keyword.operator.sizeof.webidl'},
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8})',
          name: 'constant.character.escape.webidl'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.webidl'}
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                           # flags\n    \t\t\t\t\t\t[,;:_]?                              # separator character (AltiVec)\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\n    \t\t\t\t\t\t[diouxXDOUeEfFgGaACcSspn%]           # conversion type\n    \t\t\t\t\t",
          name: 'constant.other.placeholder.webidl'
        },
        {match: '%', name: 'invalid.illegal.placeholder.webidl'}
      ]
    }
  },
  scopeName: 'source.webidl'
}

export default grammar
