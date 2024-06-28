// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/d.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.javadoc'],
  extensions: ['.d', '.di', '.volt'],
  names: ['d', 'dlang', 'volt'],
  patterns: [
    {match: '\\A#!.+', name: 'comment.line.number-sign.shebang.d'},
    {
      captures: {0: {name: 'punctuation.definition.comment.d'}},
      match: '/\\*\\*/',
      name: 'comment.block.empty.d'
    },
    {include: 'text.html.javadoc'},
    {
      captures: {
        2: {name: 'keyword.other.debug.d'},
        4: {name: 'keyword.other.debug.d'},
        5: {name: 'keyword.other.debug.d'}
      },
      match:
        '\\s*(\\b(deprecated|unittest|debug)\\b|(\\b(static)\\b\\s+)?\\b(assert)\\b)',
      name: 'meta.other.debug.d'
    },
    {
      captures: {
        1: {name: 'keyword.control.version.d'},
        2: {name: 'keyword.control.version.d'},
        3: {name: 'constant.language.version.d'},
        4: {name: 'invalid.deprecated.version.d'}
      },
      match:
        '(?x)(?<=^|\\}|:)\\s*\n\t\t\t\t\t(else\\s+)?(version)\\s*\n\t\t\t\t\t(?:\n            \\(\\s*\n            (?:\n              (\n                DigitalMars|\n                GNU|\n                LDC|\n                SDC|\n                Windows|\n                Win32|\n                Win64|\n                linux|\n                OSX|\n                FreeBSD|\n                OpenBSD|\n                NetBSD|\n                DragonFlyBSD|\n                BSD|\n                Solaris|\n                Posix|\n                AIX|\n                Haiku|\n                SkyOS|\n                SysV3|\n                SysV4|\n                Hurd|\n                Android|\n                Emscripten|\n                PlayStation|\n                PlayStation4|\n                Cygwin|\n                MinGW|\n                FreeStanding|\n                CppRuntime_Clang|\n                CppRuntime_DigitalMars|\n                CppRuntime_Gcc|\n                CppRuntime_Microsoft|\n                CppRuntime_Sun|\n                CRuntime_Bionic|\n                CRuntime_DigitalMars|\n                CRuntime_Glibc|\n                CRuntime_Microsoft|\n                CRuntime_Musl|\n                CRuntime_UClibc|\n                CRuntime_WASI|\n                X86|\n                X86_64|\n                ARM|\n                ARM_Thumb|\n                ARM_SoftFloat|\n                ARM_SoftFP|\n                ARM_HardFloat|\n                AArch64|\n                AsmJS|\n                Epiphany|\n                PPC|\n                PPC_SoftFloat|\n                PPC_HardFloat|\n                PPC64|\n                IA64|\n                MIPS32|\n                MIPS64|\n                MIPS_O32|\n                MIPS_N32|\n                MIPS_O64|\n                MIPS_N64|\n                MIPS_EABI|\n                MIPS_SoftFloat|\n                MIPS_HardFloat|\n                NVPTX|\n                NVPTX64|\n                RISCV32|\n                RISCV64|\n                SPARC|\n                SPARC_V8Plus|\n                SPARC_SoftFloat|\n                SPARC_HardFloat|\n                SPARC64|\n                S390|\n                SystemZ|\n                HPPA|\n                HPPA64|\n                SH|\n                WebAssembly|\n                WASI|\n                Alpha|\n                Alpha_SoftFloat|\n                Alpha_HardFloat|\n                LittleEndian|\n                BigEndian|\n                ELFv1|\n                ELFv2|\n                D_BetterC|\n                D_Coverage|\n                D_Ddoc|\n                D_InlineAsm_X86|\n                D_InlineAsm_X86_64|\n                D_LP64|\n                D_X32|\n                D_HardFloat|\n                D_SoftFloat|\n                D_PIC|\n                D_SIMD|\n                D_AVX|\n                D_AVX2|\n                D_Version2|\n                D_NoBoundsChecks|\n                D_ObjectiveC|\n                unittest|\n                assert|\n                none|\n                all\n              )|\n              (darwin|Thumb|S390X)|\n              (?:[A-Za-z_][A-Za-z0-9_]*)\n            )\n            \\s*\\)\n          )?',
      name: 'meta.version.d'
    },
    {
      captures: {
        2: {name: 'keyword.control.conditional.d'},
        4: {name: 'keyword.control.conditional.d'},
        5: {name: 'keyword.control.conditional.d'}
      },
      match: '\\s*\\b((else|switch)|((static)\\s+)?(if))\\b',
      name: 'meta.control.conditional.d'
    },
    {
      begin:
        '(?x)(?<=^|\\}|;)\\s*\n\t\t\t\t\t(?<meta_modifier>\n\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\t(?:(?:\\b(?:public|private|protected|static|final|synchronized|abstract|export|shared)\\b)) |\n\t\t\t\t\t\t\t\t(?:\\b(?:extern)\\b(?:\\s*\\(\\s*(?:(?:(?:C\\+\\+)(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9._]*)?)|\\b(?:C|D|Windows|Pascal|System|Objective-C)\\b)\\s*\\))?)\n\t\t\t\t\t\t\t)\\s*\n\t\t\t\t\t\t)*\n\t\t\t\t\t)\n\t\t\t\t\t(?<structure>class|interface)\\s+\n\t\t\t\t\t(?<identifier>\\w+)\\s* # identifier\n\t\t\t\t\t(?:\\(\\s*(?<template_params>[^\\)]+)\\s*\\)|)\\s* # Template type\n\t\t\t\t\t(?:\n\t\t\t\t\t  \\s*(?<inheritance_separator>:)\\s*\n\t\t\t\t\t  (?<inherited>\\w+)\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t  (?:\\s*,\\s*(?<inherited>\\w+))?\n\t\t\t\t\t)? # super class\n\t\t\t\t\t',
      beginCaptures: {
        identifier: {name: 'entity.name.type.class.d'},
        inheritance_separator: {name: 'punctuation.separator.inheritance.d'},
        inherited: {name: 'entity.other.inherited-class.d'},
        meta_modifier: {patterns: [{include: '#meta-modifier'}]},
        structure: {name: 'storage.type.structure.d'},
        template_params: {patterns: [{include: '$base'}]}
      },
      end: '(?={|;)',
      name: 'meta.definition.class.d',
      patterns: [
        {
          begin: '\\b(_|:)\\b',
          captures: {1: {name: 'storage.modifier.d'}},
          end: '(?={)',
          name: 'meta.definition.class.extends.d',
          patterns: [{include: '#all-types'}]
        },
        {include: '#template-constraint-d'}
      ]
    },
    {
      begin:
        '(?x)(?<=^|\\}|;)\\s*\n\t\t\t\t\t(?<meta_modifier>\n\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\t(?:(?:\\b(?:public|private|protected|static|final|synchronized|abstract|export|shared)\\b)) |\n\t\t\t\t\t\t\t\t(?:\\b(?:extern)\\b(?:\\s*\\(\\s*(?:(?:(?:C\\+\\+)(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9._]*)?)|\\b(?:C|D|Windows|Pascal|System|Objective-C)\\b)\\s*\\))?)\n\t\t\t\t\t\t\t)\\s*\n\t\t\t\t\t\t)*\n\t\t\t\t\t)\n\t\t\t\t\t(?<structure>struct)\\s+\n\t\t\t\t\t(?<identifier>\\w+)\\s*\n\t\t\t\t\t(?:\\(\\s*(?<template_params>[^\\)]+)\\s*\\)|)\\s*\n\t\t\t\t\t',
      beginCaptures: {
        identifier: {name: 'entity.name.type.struct.d'},
        meta_modifier: {patterns: [{include: '#meta-modifier'}]},
        structure: {name: 'storage.type.structure.d'},
        template_params: {patterns: [{include: '$base'}]}
      },
      end: '(?={|;)',
      name: 'meta.definition.struct.d',
      patterns: [
        {
          begin: '\\b(_|:)\\b',
          captures: {1: {name: 'storage.modifier.d'}},
          end: '(?={)',
          name: 'meta.definition.class.extends.d',
          patterns: [{include: '#all-types'}]
        },
        {include: '#template-constraint-d'}
      ]
    },
    {
      begin:
        '(?x)(?<=^|\\}|;)\\s*\n\t\t\t\t\t((?:\\b(public|private|protected|static|final|synchronized|abstract|export)\\b\\s*)*) # modifier\n\t\t\t\t\t(\\b(this))\\s* # identifier\n\t\t\t\t\t(?=\\()',
      captures: {
        1: {name: 'storage.modifier.d'},
        3: {name: 'entity.name.function.constructor.d'}
      },
      end: '(?={|;)',
      name: 'meta.definition.constructor.d',
      patterns: [{include: '$base'}]
    },
    {
      begin:
        '(?x)\n    \t\t\t\t(?:  ^                                 # begin-of-line\n    \t\t\t\t  |  (?: (?<!else|new|=) )             #  or word + space before name\n    \t\t\t\t)\n\t\t\t\t\t((?:\\b(?:public|private|protected|static|final|synchronized|abstract|export)\\b\\s*)*) # modifier\n    \t\t\t\t(~this) # actual name\n    \t\t\t\t \\s*(\\()                           # start bracket or end-of-line\n    \t\t\t',
      captures: {
        1: {name: 'storage.modifier.d'},
        2: {name: 'entity.name.function.destructor.d'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.d'}},
      name: 'meta.definition.destructor.d',
      patterns: [{include: '$base'}]
    },
    {
      begin:
        '(?x)(?<=^|\\}|;)\\s*\n\t\t\t\t\t((?:\\b(?:public|private|protected|static|final|synchronized|abstract|export|override|auto|nothrow|immutable|const|inout|ref|shared)\\b\\s*)*) # modifier\n\t\t\t\t\t(?:(_|\\w[^"\'`\\s]*))\\s+ # return type\n\t\t\t\t\t(\\w+)\\s* # identifier\n\t\t\t\t\t(?=\\()',
      beginCaptures: {
        1: {name: 'storage.modifier.d'},
        2: {patterns: [{include: '$base'}]},
        3: {name: 'entity.name.function.d'}
      },
      end: '(?={|;)',
      name: 'meta.definition.method.d',
      patterns: [{include: '$base'}, {include: '#block'}]
    },
    {
      begin:
        '(?x)(?<=^|;)\\s*\n\t\t\t\t\t(__traits)\n\t\t\t\t\t\\(\n\t\t\t\t\t(isAbstractClass|\n\t\t\t\t\tisArithmetic|\n\t\t\t\t\tisAssociativeArray|\n\t\t\t\t\tisFinalClass|\n\t\t\t\t\tisPOD|\n\t\t\t\t\tisNested|\n\t\t\t\t\tisFloating|\n\t\t\t\t\tisIntegral|\n\t\t\t\t\tisScalar|\n\t\t\t\t\tisStaticArray|\n\t\t\t\t\tisUnsigned|\n\t\t\t\t\tisVirtualFunction|\n\t\t\t\t\tisVirtualMethod|\n\t\t\t\t\tisAbstractFunction|\n\t\t\t\t\tisFinalFunction|\n\t\t\t\t\tisStaticFunction|\n\t\t\t\t\tisOverrideFunction|\n\t\t\t\t\tisRef|\n\t\t\t\t\tisOut|\n\t\t\t\t\tisLazy|\n\t\t\t\t\thasMember|\n\t\t\t\t\tidentifier|\n\t\t\t\t\tgetAliasThis|\n\t\t\t\t\tgetAttributes|\n\t\t\t\t\tgetFunctionAttributes|\n\t\t\t\t\tgetMember|\n\t\t\t\t\tgetOverloads|\n\t\t\t\t\tgetPointerBitmap|\n\t\t\t\t\tgetProtection|\n\t\t\t\t\tgetVirtualFunctions|\n\t\t\t\t\tgetVirtualMethods|\n\t\t\t\t\tgetUnitTests|\n\t\t\t\t\tparent|\n\t\t\t\t\tclassInstanceSize|\n\t\t\t\t\tgetVirtualIndex|\n\t\t\t\t\tallMembers|\n\t\t\t\t\tderivedMembers|\n\t\t\t\t\tisSame|\n\t\t\t\t\tcompiles)\n\t\t\t\t\t',
      beginCaptures: {
        1: {name: 'keyword.other.special.d'},
        2: {name: 'constant.language.traits.d'}
      },
      end: '\\);',
      name: 'meta.traits.d',
      patterns: [{include: '$base'}]
    },
    {
      captures: {1: {patterns: [{include: '#meta-external'}]}},
      match:
        '(\\b(?:extern)\\b(?:\\s*\\(\\s*(?:(?:(?:C\\+\\+)(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9._]*)?)|\\b(?:C|D|Windows|Pascal|System|Objective-C)\\b)\\s*\\))?)',
      name: 'meta.external.d'
    },
    {match: '\\b([A-Z][A-Z0-9_]+)\\b', name: 'constant.other.d'},
    {include: '#comments'},
    {include: '#all-types'},
    {
      match: '\\b(private|protected|public|export|package)\\b',
      name: 'storage.modifier.access-control.d'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tauto|\n\t\t\t\t\tstatic|\n\t\t\t\t\toverride|\n\t\t\t\t\tfinal|\n\t\t\t\t\tabstract|\n\t\t\t\t\tvolatile|\n\t\t\t\t\tsynchronized|\n\t\t\t\t\tlazy|\n\t\t\t\t\tnothrow|\n\t\t\t\t\timmutable|\n\t\t\t\t\tconst|\n\t\t\t\t\tinout|\n\t\t\t\t\tref|\n\t\t\t\t\tin|\n\t\t\t\t\tscope|\n\t\t\t\t\t__gshared|\n\t\t\t\t\tshared|\n\t\t\t\t\tpure\n\t\t\t\t)\n\t\t\t\t\\b|\n\t\t\t\t(@)(\n\t\t\t\t\tproperty|\n\t\t\t\t\tdisable|\n\t\t\t\t\tnogc|\n\t\t\t\t\tlive|\n\t\t\t\t\tsafe|\n\t\t\t\t\ttrusted|\n\t\t\t\t\tsystem\n\t\t\t\t)\\b',
      name: 'storage.modifier.d'
    },
    {
      match: '\\b(template|interface|class|enum|struct|union)\\b',
      name: 'storage.type.structure.d'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tushort|\n\t\t\t\t\tint|\n\t\t\t\t\tuint|\n\t\t\t\t\tlong|\n\t\t\t\t\tulong|\n\t\t\t\t\tfloat|\n\t\t\t\t\tvoid|\n\t\t\t\t\tbyte|\n\t\t\t\t\tubyte|\n\t\t\t\t\tdouble|\n\t\t\t\t\tchar|\n\t\t\t\t\twchar|\n\t\t\t\t\tucent|\n\t\t\t\t\tcent|\n\t\t\t\t\tshort|\n\t\t\t\t\tbool|\n\t\t\t\t\tdchar|\n\t\t\t\t\treal|\n\t\t\t\t\tireal|\n\t\t\t\t\tifloat|\n\t\t\t\t\tidouble|\n\t\t\t\t\tcreal|\n\t\t\t\t\tcfloat|\n\t\t\t\t\tcdouble|\n\t\t\t\t\tlazy|\n\t\t\t\t\t__vector\n\t\t\t\t)\\b',
      name: 'storage.type.d'
    },
    {
      match: '\\b(try|catch|finally|throw)\\b',
      name: 'keyword.control.exception.d'
    },
    {
      match:
        '\\b(return|break|case|continue|default|do|while|for|switch|if|else)\\b',
      name: 'keyword.control.d'
    },
    {match: '\\b(goto|break|continue)\\b', name: 'keyword.control.branch.d'},
    {
      match: '\\b(while|for|do|foreach(_reverse)?)\\b',
      name: 'keyword.control.repeat.d'
    },
    {
      match:
        '\\b(return|with|invariant|body|scope|asm|mixin|function|delegate|out|in)\\b',
      name: 'keyword.control.statement.d'
    },
    {match: '\\b(pragma)\\b', name: 'keyword.control.pragma.d'},
    {match: '\\b(alias|typedef)\\b', name: 'keyword.control.alias.d'},
    {match: '\\b(import)\\b', name: 'keyword.control.import.d'},
    {
      captures: {
        1: {name: 'keyword.control.module.d'},
        2: {name: 'entity.name.function.package.d'}
      },
      match: '^\\s*(module)\\s+([^ ;]+?);',
      name: 'meta.module.d'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language.boolean.d'},
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\t__FILE__|\n\t\t\t\t\t__LINE__|\n\t\t\t\t\t__DATE__|\n\t\t\t\t\t__TIME__|\n\t\t\t\t\t__TIMESTAMP__|\n\t\t\t\t\t__MODULE__|\n\t\t\t\t\t__FUNCTION__|\n\t\t\t\t\t__PRETTY_FUNCTION__|\n\t\t\t\t\t__VENDOR__|\n\t\t\t\t\t__VERSION__|\n\t\t\t\t\tnull\n\t\t\t\t)\\b',
      name: 'constant.language.d'
    },
    {match: '\\b(this|super)\\b', name: 'variable.language.d'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
      name: 'constant.numeric.d'
    },
    {include: '#string_escaped_char'},
    {include: '#strings'},
    {match: '(==|!=|<=|>=|<>|<|>)', name: 'keyword.operator.comparison.d'},
    {match: '(\\-\\-|\\+\\+)', name: 'keyword.operator.increment-decrement.d'},
    {
      match: '(\\-|\\+|\\*|\\/|~|%|\\^|\\^\\^)=?',
      name: 'keyword.operator.arithmetic.d'
    },
    {match: '(\\.\\.\\.)', name: 'keyword.operator.variadic.d'},
    {match: '(\\.\\.)', name: 'keyword.operator.slice.d'},
    {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.d'},
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\topNeg|\n\t\t\t\t\topCom|\n\t\t\t\t\topPostInc|\n\t\t\t\t\topPostDec|\n\t\t\t\t\topCast|\n\t\t\t\t\topAdd|\n\t\t\t\t\topSub|\n\t\t\t\t\topSub_r|\n\t\t\t\t\topMul|\n\t\t\t\t\topDiv|\n\t\t\t\t\topDiv_r|\n\t\t\t\t\topMod|\n\t\t\t\t\topMod_r|\n\t\t\t\t\topAnd|\n\t\t\t\t\topOr|\n\t\t\t\t\topXor|\n\t\t\t\t\topShl|\n\t\t\t\t\topShl_r|\n\t\t\t\t\topShr|\n\t\t\t\t\topShr_r|\n\t\t\t\t\topUShr|\n\t\t\t\t\topUShr_r|\n\t\t\t\t\topCat|\n\t\t\t\t\topCat_r|\n\t\t\t\t\topEquals|\n\t\t\t\t\topEquals|\n\t\t\t\t\topCmp|\n\t\t\t\t\topCmp|\n\t\t\t\t\topCmp|\n\t\t\t\t\topCmp|\n\t\t\t\t\topAddAssign|\n\t\t\t\t\topSubAssign|\n\t\t\t\t\topMulAssign|\n\t\t\t\t\topDivAssign|\n\t\t\t\t\topModAssign|\n\t\t\t\t\topAndAssign|\n\t\t\t\t\topOrAssign|\n\t\t\t\t\topXorAssign|\n\t\t\t\t\topShlAssign|\n\t\t\t\t\topShrAssign|\n\t\t\t\t\topUShrAssign|\n\t\t\t\t\topCatAssign|\n\t\t\t\t\topIndex|\n\t\t\t\t\topIndexAssign|\n\t\t\t\t\topCall|\n\t\t\t\t\topSlice|\n\t\t\t\t\topSliceAssign|\n\t\t\t\t\topPos|\n\t\t\t\t\topAdd_r|\n\t\t\t\t\topMul_r|\n\t\t\t\t\topAnd_r|\n\t\t\t\t\topOr_r|\n\t\t\t\t\topXor_r|\n\t\t\t\t\topDispatch\n\t\t\t\t)\\b',
      name: 'keyword.operator.overload.d'
    },
    {match: '=>', name: 'keyword.operator.lambda.d'},
    {
      match: '\\b(new|delete|typeof|typeid|cast|align|is)\\b',
      name: 'keyword.operator.d'
    },
    {match: '\\b(new)\\b', name: 'keyword.other.class-fns.d'},
    {match: '\\b(__parameters)\\b|(#)line\\b', name: 'keyword.other.special.d'},
    {match: '\\b(macro)\\b', name: 'keyword.other.reserved.d'},
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tu_char|\n\t\t\t\t\tu_short|\n\t\t\t\t\tu_int|\n\t\t\t\t\tu_long|\n\t\t\t\t\tushort|\n\t\t\t\t\tuint|\n\t\t\t\t\tu_quad_t|\n\t\t\t\t\tquad_t|\n\t\t\t\t\tqaddr_t|\n\t\t\t\t\tcaddr_t|\n\t\t\t\t\tdaddr_t|\n\t\t\t\t\tdev_t|\n\t\t\t\t\tfixpt_t|\n\t\t\t\t\tblkcnt_t|\n\t\t\t\t\tblksize_t|\n\t\t\t\t\tgid_t|\n\t\t\t\t\tin_addr_t|\n\t\t\t\t\tin_port_t|\n\t\t\t\t\tino_t|\n\t\t\t\t\tkey_t|\n\t\t\t\t\tmode_t|\n\t\t\t\t\tnlink_t|\n\t\t\t\t\tid_t|\n\t\t\t\t\tpid_t|\n\t\t\t\t\toff_t|\n\t\t\t\t\tsegsz_t|\n\t\t\t\t\tswblk_t|\n\t\t\t\t\tuid_t|\n\t\t\t\t\tid_t|\n\t\t\t\t\tclock_t|\n\t\t\t\t\tsize_t|\n\t\t\t\t\tssize_t|\n\t\t\t\t\ttime_t|\n\t\t\t\t\tuseconds_t|\n\t\t\t\t\tsuseconds_t\n\t\t\t\t)\\b',
      name: 'support.type.sys-types.c'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tpthread_attr_t|\n\t\t\t\t\tpthread_cond_t|\n\t\t\t\t\tpthread_condattr_t|\n\t\t\t\t\tpthread_mutex_t|\n\t\t\t\t\tpthread_mutexattr_t|\n\t\t\t\t\tpthread_once_t|\n\t\t\t\t\tpthread_rwlock_t|\n\t\t\t\t\tpthread_rwlockattr_t|\n\t\t\t\t\tpthread_t|\n\t\t\t\t\tpthread_key_t\n\t\t\t\t)\\b',
      name: 'support.type.pthread.c'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tint8_t|\n\t\t\t\t\tint16_t|\n\t\t\t\t\tint32_t|\n\t\t\t\t\tint64_t|\n\t\t\t\t\tuint8_t|\n\t\t\t\t\tuint16_t|\n\t\t\t\t\tuint32_t|\n\t\t\t\t\tuint64_t|\n\t\t\t\t\tint_least8_t|\n\t\t\t\t\tint_least16_t|\n\t\t\t\t\tint_least32_t|\n\t\t\t\t\tint_least64_t|\n\t\t\t\t\tuint_least8_t|\n\t\t\t\t\tuint_least16_t|\n\t\t\t\t\tuint_least32_t|\n\t\t\t\t\tuint_least64_t|\n\t\t\t\t\tint_fast8_t|\n\t\t\t\t\tint_fast16_t|\n\t\t\t\t\tint_fast32_t|\n\t\t\t\t\tint_fast64_t|\n\t\t\t\t\tuint_fast8_t|\n\t\t\t\t\tuint_fast16_t|\n\t\t\t\t\tuint_fast32_t|\n\t\t\t\t\tuint_fast64_t|\n\t\t\t\t\tintptr_t|\n\t\t\t\t\tuintptr_t|\n\t\t\t\t\tintmax_t|\n\t\t\t\t\tintmax_t|\n\t\t\t\t\tuintmax_t|\n\t\t\t\t\tuintmax_t\n\t\t\t\t)\\b',
      name: 'support.type.stdint.c'
    },
    {include: '#block'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#support-type-built-ins-d'},
        {include: '#support-type-d'},
        {include: '#storage-type-d'}
      ]
    },
    block: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.d'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.block.end.d'}},
          name: 'meta.block.d',
          patterns: [{include: '$base'}]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.d'}},
          end: '\\*/',
          name: 'comment.block.d'
        },
        {include: '#nested_comment'},
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.d'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.d'}},
              end: '\\n',
              name: 'comment.line.double-slash.d'
            }
          ]
        }
      ]
    },
    constant_placeholder: {
      match:
        '(?i:%(\\([a-z_]+\\))?#?0?\\-?[ ]?\\+?([0-9]*|\\*)(\\.([0-9]*|\\*))?[hL]?[a-z%])',
      name: 'constant.other.placeholder.d'
    },
    'meta-external': {
      captures: {
        identifier: {name: 'constant.language.external.d'},
        keyword: {name: 'keyword.other.external.d'}
      },
      match:
        '\\b(?<keyword>extern)\\b(\\s*\\(\\s*(?:(?:(?<identifier>C\\+\\+)(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9._]*)?)|(?<identifier>C|D|Windows|Pascal|System|Objective-C))\\s*\\))?',
      name: 'meta.external.d'
    },
    'meta-modifier': {
      captures: {
        meta_external: {patterns: [{include: '#meta-external'}]},
        modifier: {name: 'storage.modifier.d'}
      },
      match:
        '(?x)\n\t\t\t\t(?:\n\t\t\t\t\t(?<modifier>\\b(?:public|private|protected|static|final|synchronized|abstract|export|shared)\\b) |\n\t\t\t\t\t(?<meta_external>\\b(?:extern)\\b(?:\\s*\\(\\s*(?:(?:(?:C\\+\\+)(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9._]*)?)|\\b(?:C|D|Windows|Pascal|System|Objective-C)\\b)\\s*\\))?)\n\t\t\t\t)\\s*\n\t\t\t',
      name: 'meta.modifier.d'
    },
    nested_comment: {
      patterns: [
        {
          begin: '/\\+',
          captures: {0: {name: 'punctuation.definition.comment.d'}},
          end: '\\+/',
          name: 'comment.block.nested.d',
          patterns: [{include: '#nested_comment'}]
        }
      ]
    },
    'statement-remainder': {
      patterns: [
        {
          begin: '\\(',
          end: '(?=\\))',
          name: 'meta.definition.param-list.d',
          patterns: [{include: '#all-types'}]
        }
      ]
    },
    'storage-type-d': {
      match: '\\b(void|byte|short|char|int|long|float|double)\\b',
      name: 'storage.type.d'
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8}|&\\w+;)',
          name: 'constant.character.escape.d'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.d'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.d'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.d'}},
          name: 'string.quoted.double.d',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(r)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.d'},
            2: {name: 'punctuation.definition.string.begin.d'}
          },
          end: '((?<=")(")|")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.d'},
            2: {name: 'meta.empty-string.double.d'}
          },
          name: 'string.quoted.double.raw.d',
          patterns: [{include: '#regular_expressions'}]
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.d'}},
          end: '((?<=`)(`)|`)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.d'},
            2: {name: 'meta.empty-string.double.d'}
          },
          name: 'string.quoted.double.raw.backtick.d'
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.d'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.d'}},
          name: 'string.quoted.single.d',
          patterns: [{include: '#string_escaped_char'}]
        }
      ]
    },
    'support-type-built-ins-aliases-d': {
      match:
        '\\b(dstring|equals_t|hash_t|ptrdiff_t|sizediff_t|size_t|string|wstring)\\b',
      name: 'support.type.built-ins.aliases.d'
    },
    'support-type-built-ins-classes-d': {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tAbstractServer|\n\t\t\t\t\tArchiveMember|\n\t\t\t\t\tArgParser|\n\t\t\t\t\tBarrier|\n\t\t\t\t\tBomSniffer|\n\t\t\t\t\tBuffer|\n\t\t\t\t\tBufferInput|\n\t\t\t\t\tBufferOutput|\n\t\t\t\t\tBufferSlice|\n\t\t\t\t\tBufferedFile|\n\t\t\t\t\tBufferedStream|\n\t\t\t\t\tBzipInput|\n\t\t\t\t\tBzipOutput|\n\t\t\t\t\tCFile|\n\t\t\t\t\tCacheInvalidatee|\n\t\t\t\t\tCacheInvalidator|\n\t\t\t\t\tCacheServer|\n\t\t\t\t\tCacheThread|\n\t\t\t\t\tCertificate|\n\t\t\t\t\tCertificateStore|\n\t\t\t\t\tCertificateStoreCtx|\n\t\t\t\t\tChunkInput|\n\t\t\t\t\tChunkOutput|\n\t\t\t\t\tClassInfo|\n\t\t\t\t\tCluster|\n\t\t\t\t\tClusterCache|\n\t\t\t\t\tClusterQueue|\n\t\t\t\t\tClusterThread|\n\t\t\t\t\tCmdParser|\n\t\t\t\t\tComObject|\n\t\t\t\t\tCompress|\n\t\t\t\t\tCondition|\n\t\t\t\t\tConduit|\n\t\t\t\t\tCookie|\n\t\t\t\t\tCookieParser|\n\t\t\t\t\tCookieStack|\n\t\t\t\t\tCounterInput|\n\t\t\t\t\tCounterOutput|\n\t\t\t\t\tDataFileInput|\n\t\t\t\t\tDataFileOutput|\n\t\t\t\t\tDataInput|\n\t\t\t\t\tDataOutput|\n\t\t\t\t\tDatabase|\n\t\t\t\t\tDatagramConduit|\n\t\t\t\t\tDeviceConduit|\n\t\t\t\t\tDigestInput|\n\t\t\t\t\tDigestOutput|\n\t\t\t\t\tDocPrinter|\n\t\t\t\t\tDocument|\n\t\t\t\t\tDummyInputStream|\n\t\t\t\t\tDummyOutputStream|\n\t\t\t\t\tEndianInput|\n\t\t\t\t\tEndianOutput|\n\t\t\t\t\tEndianProtocol|\n\t\t\t\t\tEndianStream|\n\t\t\t\t\tEventSeekInputStream|\n\t\t\t\t\tEventSeekOutputStream|\n\t\t\t\t\tFTPConnection|\n\t\t\t\t\tFiber|\n\t\t\t\t\tField|\n\t\t\t\t\tFile|\n\t\t\t\t\tFileConduit|\n\t\t\t\t\tFileFolder|\n\t\t\t\t\tFileGroup|\n\t\t\t\t\tFileInput|\n\t\t\t\t\tFileOutput|\n\t\t\t\t\tFilePath|\n\t\t\t\t\tFileScan|\n\t\t\t\t\tFilterStream|\n\t\t\t\t\tFoo|\n\t\t\t\t\tFormatOutput|\n\t\t\t\t\tGreedyInput|\n\t\t\t\t\tGreedyOutput|\n\t\t\t\t\tGregorian|\n\t\t\t\t\tGrowBuffer|\n\t\t\t\t\tHeapCopy|\n\t\t\t\t\tHeapSlice|\n\t\t\t\t\tHierarchy|\n\t\t\t\t\tHttpClient|\n\t\t\t\t\tHttpCookies|\n\t\t\t\t\tHttpCookiesView|\n\t\t\t\t\tHttpGet|\n\t\t\t\t\tHttpHeaders|\n\t\t\t\t\tHttpHeadersView|\n\t\t\t\t\tHttpParams|\n\t\t\t\t\tHttpPost|\n\t\t\t\t\tHttpStack|\n\t\t\t\t\tHttpTokens|\n\t\t\t\t\tHttpTriplet|\n\t\t\t\t\tIPv4Address|\n\t\t\t\t\tIUnknown|\n\t\t\t\t\tInputFilter|\n\t\t\t\t\tInternetAddress|\n\t\t\t\t\tInternetHost|\n\t\t\t\t\tLayout|\n\t\t\t\t\tLineInput|\n\t\t\t\t\tLineIterator|\n\t\t\t\t\tLinkedFolder|\n\t\t\t\t\tLog|\n\t\t\t\t\tMapInput|\n\t\t\t\t\tMapOutput|\n\t\t\t\t\tMappedBuffer|\n\t\t\t\t\tMd2|\n\t\t\t\t\tMd4|\n\t\t\t\t\tMemoryQueue|\n\t\t\t\t\tMemoryStream|\n\t\t\t\t\tMmFile|\n\t\t\t\t\tMmFileStream|\n\t\t\t\t\tModuleInfo|\n\t\t\t\t\tMulticastConduit|\n\t\t\t\t\tMutex|\n\t\t\t\t\tNativeProtocol|\n\t\t\t\t\tNetCall|\n\t\t\t\t\tNetHost|\n\t\t\t\t\tNetworkAlert|\n\t\t\t\t\tNetworkCache|\n\t\t\t\t\tNetworkCall|\n\t\t\t\t\tNetworkClient|\n\t\t\t\t\tNetworkCombo|\n\t\t\t\t\tNetworkMessage|\n\t\t\t\t\tNetworkQueue|\n\t\t\t\t\tNetworkRegistry|\n\t\t\t\t\tNetworkTask|\n\t\t\t\t\tNotImplemented|\n\t\t\t\t\tObject|\n\t\t\t\t\tObserver|\n\t\t\t\t\tOutBuffer|\n\t\t\t\t\tOutputFilter|\n\t\t\t\t\tPersistQueue|\n\t\t\t\t\tPipe|\n\t\t\t\t\tPipeConduit|\n\t\t\t\t\tPrint|\n\t\t\t\t\tPrivateKey|\n\t\t\t\t\tProcess|\n\t\t\t\t\tProperties|\n\t\t\t\t\tProtocol|\n\t\t\t\t\tProtocolReader|\n\t\t\t\t\tProtocolWriter|\n\t\t\t\t\tPublicKey|\n\t\t\t\t\tPullParser|\n\t\t\t\t\tQueueFile|\n\t\t\t\t\tQueueServer|\n\t\t\t\t\tQueueThread|\n\t\t\t\t\tQueuedCache|\n\t\t\t\t\tQuoteIterator|\n\t\t\t\t\tRandom|\n\t\t\t\t\tRange|\n\t\t\t\t\tReadWriteMutex|\n\t\t\t\t\tReader|\n\t\t\t\t\tRecord|\n\t\t\t\t\tRegExp|\n\t\t\t\t\tRegExpT|\n\t\t\t\t\tRegexIterator|\n\t\t\t\t\tRollCall|\n\t\t\t\t\tSSLCtx|\n\t\t\t\t\tSSLServerSocket|\n\t\t\t\t\tSSLSocketConduit|\n\t\t\t\t\tSaxParser|\n\t\t\t\t\tSelectionKey|\n\t\t\t\t\tSemaphore|\n\t\t\t\t\tServerSocket|\n\t\t\t\t\tServerThread|\n\t\t\t\t\tService|\n\t\t\t\t\tSimpleIterator|\n\t\t\t\t\tSliceInputStream|\n\t\t\t\t\tSliceSeekInputStream|\n\t\t\t\t\tSliceSeekOutputStream|\n\t\t\t\t\tSliceStream|\n\t\t\t\t\tSnoopInput|\n\t\t\t\t\tSnoopOutput|\n\t\t\t\t\tSocket|\n\t\t\t\t\tSocketConduit|\n\t\t\t\t\tSocketListener|\n\t\t\t\t\tSocketSet|\n\t\t\t\t\tSocketStream|\n\t\t\t\t\tSprint|\n\t\t\t\t\tStream|\n\t\t\t\t\tStreamIterator|\n\t\t\t\t\tTArrayStream|\n\t\t\t\t\tTaskServer|\n\t\t\t\t\tTaskThread|\n\t\t\t\t\tTcpSocket|\n\t\t\t\t\tTelnet|\n\t\t\t\t\tTempFile|\n\t\t\t\t\tText|\n\t\t\t\t\tTextFileInput|\n\t\t\t\t\tTextFileOutput|\n\t\t\t\t\tTextView|\n\t\t\t\t\tThread|\n\t\t\t\t\tThreadGroup|\n\t\t\t\t\tThreadLocal|\n\t\t\t\t\tThreadPool|\n\t\t\t\t\tToken|\n\t\t\t\t\tTypeInfo|\n\t\t\t\t\tTypeInfo_AC|\n\t\t\t\t\tTypeInfo_Aa|\n\t\t\t\t\tTypeInfo_Ab|\n\t\t\t\t\tTypeInfo_Ac|\n\t\t\t\t\tTypeInfo_Ad|\n\t\t\t\t\tTypeInfo_Ae|\n\t\t\t\t\tTypeInfo_Af|\n\t\t\t\t\tTypeInfo_Ag|\n\t\t\t\t\tTypeInfo_Ah|\n\t\t\t\t\tTypeInfo_Ai|\n\t\t\t\t\tTypeInfo_Aj|\n\t\t\t\t\tTypeInfo_Ak|\n\t\t\t\t\tTypeInfo_Al|\n\t\t\t\t\tTypeInfo_Am|\n\t\t\t\t\tTypeInfo_Ao|\n\t\t\t\t\tTypeInfo_Ap|\n\t\t\t\t\tTypeInfo_Aq|\n\t\t\t\t\tTypeInfo_Ar|\n\t\t\t\t\tTypeInfo_Array|\n\t\t\t\t\tTypeInfo_As|\n\t\t\t\t\tTypeInfo_AssociativeArray|\n\t\t\t\t\tTypeInfo_At|\n\t\t\t\t\tTypeInfo_Au|\n\t\t\t\t\tTypeInfo_Av|\n\t\t\t\t\tTypeInfo_Aw|\n\t\t\t\t\tTypeInfo_C|\n\t\t\t\t\tTypeInfo_Class|\n\t\t\t\t\tTypeInfo_D|\n\t\t\t\t\tTypeInfo_Delegate|\n\t\t\t\t\tTypeInfo_Enum|\n\t\t\t\t\tTypeInfo_Function|\n\t\t\t\t\tTypeInfo_Interface|\n\t\t\t\t\tTypeInfo_P|\n\t\t\t\t\tTypeInfo_Pointer|\n\t\t\t\t\tTypeInfo_StaticArray|\n\t\t\t\t\tTypeInfo_Struct|\n\t\t\t\t\tTypeInfo_Tuple|\n\t\t\t\t\tTypeInfo_Typedef|\n\t\t\t\t\tTypeInfo_a|\n\t\t\t\t\tTypeInfo_b|\n\t\t\t\t\tTypeInfo_c|\n\t\t\t\t\tTypeInfo_d|\n\t\t\t\t\tTypeInfo_e|\n\t\t\t\t\tTypeInfo_f|\n\t\t\t\t\tTypeInfo_g|\n\t\t\t\t\tTypeInfo_h|\n\t\t\t\t\tTypeInfo_i|\n\t\t\t\t\tTypeInfo_j|\n\t\t\t\t\tTypeInfo_k|\n\t\t\t\t\tTypeInfo_l|\n\t\t\t\t\tTypeInfo_m|\n\t\t\t\t\tTypeInfo_o|\n\t\t\t\t\tTypeInfo_p|\n\t\t\t\t\tTypeInfo_q|\n\t\t\t\t\tTypeInfo_r|\n\t\t\t\t\tTypeInfo_s|\n\t\t\t\t\tTypeInfo_t|\n\t\t\t\t\tTypeInfo_u|\n\t\t\t\t\tTypeInfo_v|\n\t\t\t\t\tTypeInfo_w|\n\t\t\t\t\tTypedInput|\n\t\t\t\t\tTypedOutput|\n\t\t\t\t\tURIerror|\n\t\t\t\t\tUdpSocket|\n\t\t\t\t\tUnCompress|\n\t\t\t\t\tUniText|\n\t\t\t\t\tUnicodeBom|\n\t\t\t\t\tUnicodeFile|\n\t\t\t\t\tUnknownAddress|\n\t\t\t\t\tUri|\n\t\t\t\t\tUtfInput|\n\t\t\t\t\tUtfOutput|\n\t\t\t\t\tVirtualFolder|\n\t\t\t\t\tWrapSeekInputStream|\n\t\t\t\t\tWrapSeekOutputStream|\n\t\t\t\t\tWriter|\n\t\t\t\t\tXmlPrinter|\n\t\t\t\t\tZipArchive|\n\t\t\t\t\tZipBlockReader|\n\t\t\t\t\tZipBlockWriter|\n\t\t\t\t\tZipEntry|\n\t\t\t\t\tZipEntryVerifier|\n\t\t\t\t\tZipFile|\n\t\t\t\t\tZipFileGroup|\n\t\t\t\t\tZipFolder|\n\t\t\t\t\tZipSubFolder|\n\t\t\t\t\tZipSubFolderEntry|\n\t\t\t\t\tZipSubFolderGroup|\n\t\t\t\t\tZlibInput|\n\t\t\t\t\tZlibOutput\n\t\t\t\t)\\b',
      name: 'support.type.built-ins.classes.d'
    },
    'support-type-built-ins-d': {
      patterns: [
        {include: '#support-type-built-ins-exceptions-d'},
        {include: '#support-type-built-ins-classes-d'},
        {include: '#support-type-built-ins-interfaces-d'},
        {include: '#support-type-built-ins-structs-d'},
        {include: '#support-type-built-ins-aliases-d'},
        {include: '#support-type-built-ins-functions-d'},
        {include: '#support-type-built-ins-templates-d'}
      ]
    },
    'support-type-built-ins-exceptions-d': {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tAddressException|\n\t\t\t\t\tArrayBoundsError|\n\t\t\t\t\tArrayBoundsException|\n\t\t\t\t\tAssertError|\n\t\t\t\t\tAssertException|\n\t\t\t\t\tBase64CharException|\n\t\t\t\t\tBase64Exception|\n\t\t\t\t\tBzipClosedException|\n\t\t\t\t\tBzipException|\n\t\t\t\t\tClusterEmptyException|\n\t\t\t\t\tClusterFullException|\n\t\t\t\t\tConvError|\n\t\t\t\t\tConvOverflowError|\n\t\t\t\t\tConversionException|\n\t\t\t\t\tCorruptedIteratorException|\n\t\t\t\t\tDatabaseException|\n\t\t\t\t\tDateParseError|\n\t\t\t\t\tException|\n\t\t\t\t\tFTPException|\n\t\t\t\t\tFiberException|\n\t\t\t\t\tFileException|\n\t\t\t\t\tFinalizeException|\n\t\t\t\t\tFormatError|\n\t\t\t\t\tHostException|\n\t\t\t\t\tIOException|\n\t\t\t\t\tIllegalArgumentException|\n\t\t\t\t\tIllegalElementException|\n\t\t\t\t\tInvalidKeyException|\n\t\t\t\t\tInvalidTypeException|\n\t\t\t\t\tLocaleException|\n\t\t\t\t\tModuleCtorError|\n\t\t\t\t\tNoSuchElementException|\n\t\t\t\t\tOpenException|\n\t\t\t\t\tOpenRJException|\n\t\t\t\t\tOutOfMemoryException|\n\t\t\t\t\tPlatformException|\n\t\t\t\t\tProcessCreateException|\n\t\t\t\t\tProcessException|\n\t\t\t\t\tProcessForkException|\n\t\t\t\t\tProcessKillException|\n\t\t\t\t\tProcessWaitException|\n\t\t\t\t\tReadException|\n\t\t\t\t\tRegExpException|\n\t\t\t\t\tRegexException|\n\t\t\t\t\tRegistryException|\n\t\t\t\t\tSeekException|\n\t\t\t\t\tSharedLibException|\n\t\t\t\t\tSocketAcceptException|\n\t\t\t\t\tSocketException|\n\t\t\t\t\tStdioException|\n\t\t\t\t\tStreamException|\n\t\t\t\t\tStreamFileException|\n\t\t\t\t\tStringException|\n\t\t\t\t\tSwitchError|\n\t\t\t\t\tSwitchException|\n\t\t\t\t\tSyncException|\n\t\t\t\t\tTextException|\n\t\t\t\t\tThreadError|\n\t\t\t\t\tThreadException|\n\t\t\t\t\tUnboxException|\n\t\t\t\t\tUnicodeException|\n\t\t\t\t\tUtfException|\n\t\t\t\t\tVariantTypeMismatchException|\n\t\t\t\t\tWin32Exception|\n\t\t\t\t\tWriteException|\n\t\t\t\t\tXmlException|\n\t\t\t\t\tZipChecksumException|\n\t\t\t\t\tZipException|\n\t\t\t\t\tZipExhaustedException|\n\t\t\t\t\tZipNotSupportedException|\n\t\t\t\t\tZlibClosedException|\n\t\t\t\t\tZlibException|\n\t\t\t\t\tOurUnwindException|\n\t\t\t\t\tSysError\n\t\t\t\t)\\b',
      name: 'support.type.built-ins.exceptions.d'
    },
    'support-type-built-ins-functions-d': {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\taaLiteral|\n\t\t\t\t\tassumeSafeAppend|\n\t\t\t\t\tbyKey|\n\t\t\t\t\tbyKeyValue|\n\t\t\t\t\tbyValue|\n\t\t\t\t\tcapacity|\n\t\t\t\t\tdestroy|\n\t\t\t\t\tdup|\n\t\t\t\t\tget|\n\t\t\t\t\tkeys|\n\t\t\t\t\trehash|\n\t\t\t\t\treserve|\n\t\t\t\t\tvalues\n\t\t\t\t)\\b',
      name: 'support.type.built-ins.functions.d'
    },
    'support-type-built-ins-interfaces-d': {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tBuffered|\n\t\t\t\t\tHttpParamsView|\n\t\t\t\t\tICache|\n\t\t\t\t\tIChannel|\n\t\t\t\t\tIClassFactory|\n\t\t\t\t\tICluster|\n\t\t\t\t\tIConduit|\n\t\t\t\t\tIConsumer|\n\t\t\t\t\tIEvent|\n\t\t\t\t\tIHierarchy|\n\t\t\t\t\tILevel|\n\t\t\t\t\tIListener|\n\t\t\t\t\tIMessage|\n\t\t\t\t\tIMessageLoader|\n\t\t\t\t\tIOStream|\n\t\t\t\t\tIReadable|\n\t\t\t\t\tISelectable|\n\t\t\t\t\tISelectionSet|\n\t\t\t\t\tISelector|\n\t\t\t\t\tIServer|\n\t\t\t\t\tIUnknown|\n\t\t\t\t\tIWritable|\n\t\t\t\t\tIXmlPrinter|\n\t\t\t\t\tInputStream|\n\t\t\t\t\tOutputStream|\n\t\t\t\t\tPathView|\n\t\t\t\t\tVfsFile|\n\t\t\t\t\tVfsFiles|\n\t\t\t\t\tVfsFolder|\n\t\t\t\t\tVfsFolderEntry|\n\t\t\t\t\tVfsFolders|\n\t\t\t\t\tVfsHost|\n\t\t\t\t\tVfsSync|\n\t\t\t\t\tZipReader|\n\t\t\t\t\tZipWriter\n\t\t\t\t)\\b',
      name: 'support.type.built-ins.interfaces.d'
    },
    'support-type-built-ins-structs-d': {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tABC|\n\t\t\t\t\tABCFLOAT|\n\t\t\t\t\tACCEL|\n\t\t\t\t\tACCESSTIMEOUT|\n\t\t\t\t\tACCESS_ALLOWED_ACE|\n\t\t\t\t\tACCESS_DENIED_ACE|\n\t\t\t\t\tACE_HEADER|\n\t\t\t\t\tACL|\n\t\t\t\t\tACL_REVISION_INFORMATION|\n\t\t\t\t\tACL_SIZE_INFORMATION|\n\t\t\t\t\tACTION_HEADER|\n\t\t\t\t\tADAPTER_STATUS|\n\t\t\t\t\tADDJOB_INFO_1|\n\t\t\t\t\tANIMATIONINFO|\n\t\t\t\t\tAPPBARDATA|\n\t\t\t\t\tArgument|\n\t\t\t\t\tAtomic|\n\t\t\t\t\tAttribute|\n\t\t\t\t\tBITMAP|\n\t\t\t\t\tBITMAPCOREHEADER|\n\t\t\t\t\tBITMAPCOREINFO|\n\t\t\t\t\tBITMAPINFO|\n\t\t\t\t\tBITMAPINFOHEADER|\n\t\t\t\t\tBITMAPV4HEADER|\n\t\t\t\t\tBLOB|\n\t\t\t\t\tBROWSEINFO|\n\t\t\t\t\tBY_HANDLE_FILE_INFORMATION|\n\t\t\t\t\tBar|\n\t\t\t\t\tBaz|\n\t\t\t\t\tBitArray|\n\t\t\t\t\tBox|\n\t\t\t\t\tBracketResult|\n\t\t\t\t\tByteSwap|\n\t\t\t\t\tCANDIDATEFORM|\n\t\t\t\t\tCANDIDATELIST|\n\t\t\t\t\tCBTACTIVATESTRUCT|\n\t\t\t\t\tCBT_CREATEWND|\n\t\t\t\t\tCHARFORMAT|\n\t\t\t\t\tCHARRANGE|\n\t\t\t\t\tCHARSET|\n\t\t\t\t\tCHARSETINFO|\n\t\t\t\t\tCHAR_INFO|\n\t\t\t\t\tCIDA|\n\t\t\t\t\tCIEXYZ|\n\t\t\t\t\tCIEXYZTRIPLE|\n\t\t\t\t\tCLIENTCREATESTRUCT|\n\t\t\t\t\tCMINVOKECOMMANDINFO|\n\t\t\t\t\tCOLORADJUSTMENT|\n\t\t\t\t\tCOLORMAP|\n\t\t\t\t\tCOMMCONFIG|\n\t\t\t\t\tCOMMPROP|\n\t\t\t\t\tCOMMTIMEOUTS|\n\t\t\t\t\tCOMPAREITEMSTRUCT|\n\t\t\t\t\tCOMPCOLOR|\n\t\t\t\t\tCOMPOSITIONFORM|\n\t\t\t\t\tCOMSTAT|\n\t\t\t\t\tCONNECTDLGSTRUCT|\n\t\t\t\t\tCONSOLE_CURSOR_INFO|\n\t\t\t\t\tCONTEXT|\n\t\t\t\t\tCONVCONTEXT|\n\t\t\t\t\tCONVINFO|\n\t\t\t\t\tCOORD|\n\t\t\t\t\tCOPYDATASTRUCT|\n\t\t\t\t\tCPINFO|\n\t\t\t\t\tCPLINFO|\n\t\t\t\t\tCREATESTRUCT|\n\t\t\t\t\tCREATE_PROCESS_DEBUG_INFO|\n\t\t\t\t\tCREATE_THREAD_DEBUG_INFO|\n\t\t\t\t\tCRITICAL_SECTION|\n\t\t\t\t\tCRITICAL_SECTION_DEBUG|\n\t\t\t\t\tCURRENCYFMT|\n\t\t\t\t\tCURSORSHAPE|\n\t\t\t\t\tCWPRETSTRUCT|\n\t\t\t\t\tCWPSTRUCT|\n\t\t\t\t\tCharClass|\n\t\t\t\t\tCharRange|\n\t\t\t\t\tClock|\n\t\t\t\t\tCodePage|\n\t\t\t\t\tConsole|\n\t\t\t\t\tDATATYPES_INFO_1|\n\t\t\t\t\tDCB|\n\t\t\t\t\tDDEACK|\n\t\t\t\t\tDDEADVISE|\n\t\t\t\t\tDDEDATA|\n\t\t\t\t\tDDELN|\n\t\t\t\t\tDDEML_MSG_HOOK_DATA|\n\t\t\t\t\tDDEPOKE|\n\t\t\t\t\tDDEUP|\n\t\t\t\t\tDEBUGHOOKINFO|\n\t\t\t\t\tDEBUG_EVENT|\n\t\t\t\t\tDELETEITEMSTRUCT|\n\t\t\t\t\tDEVMODE|\n\t\t\t\t\tDEVNAMES|\n\t\t\t\t\tDEV_BROADCAST_HDR|\n\t\t\t\t\tDEV_BROADCAST_OEM|\n\t\t\t\t\tDEV_BROADCAST_PORT|\n\t\t\t\t\tDEV_BROADCAST_VOLUME|\n\t\t\t\t\tDIBSECTION|\n\t\t\t\t\tDIR|\n\t\t\t\t\tDISCDLGSTRUCT|\n\t\t\t\t\tDISK_GEOMETRY|\n\t\t\t\t\tDISK_PERFORMANCE|\n\t\t\t\t\tDOCINFO|\n\t\t\t\t\tDOC_INFO_1|\n\t\t\t\t\tDOC_INFO_2|\n\t\t\t\t\tDRAGLISTINFO|\n\t\t\t\t\tDRAWITEMSTRUCT|\n\t\t\t\t\tDRAWTEXTPARAMS|\n\t\t\t\t\tDRIVER_INFO_1|\n\t\t\t\t\tDRIVER_INFO_2|\n\t\t\t\t\tDRIVER_INFO_3|\n\t\t\t\t\tDRIVE_LAYOUT_INFORMATION|\n\t\t\t\t\tDate|\n\t\t\t\t\tDateParse|\n\t\t\t\t\tDateTime|\n\t\t\t\t\tDirEntry|\n\t\t\t\t\tDynArg|\n\t\t\t\t\tEDITSTREAM|\n\t\t\t\t\tEMPTYRECORD|\n\t\t\t\t\tEMR|\n\t\t\t\t\tEMRABORTPATH|\n\t\t\t\t\tEMRANGLEARC|\n\t\t\t\t\tEMRARC|\n\t\t\t\t\tEMRBITBLT|\n\t\t\t\t\tEMRCREATEBRUSHINDIRECT|\n\t\t\t\t\tEMRCREATECOLORSPACE|\n\t\t\t\t\tEMRCREATEDIBPATTERNBRUSHPT|\n\t\t\t\t\tEMRCREATEMONOBRUSH|\n\t\t\t\t\tEMRCREATEPALETTE|\n\t\t\t\t\tEMRCREATEPEN|\n\t\t\t\t\tEMRELLIPSE|\n\t\t\t\t\tEMREOF|\n\t\t\t\t\tEMREXCLUDECLIPRECT|\n\t\t\t\t\tEMREXTCREATEFONTINDIRECTW|\n\t\t\t\t\tEMREXTCREATEPEN|\n\t\t\t\t\tEMREXTFLOODFILL|\n\t\t\t\t\tEMREXTSELECTCLIPRGN|\n\t\t\t\t\tEMREXTTEXTOUTA|\n\t\t\t\t\tEMRFILLPATH|\n\t\t\t\t\tEMRFILLRGN|\n\t\t\t\t\tEMRFORMAT|\n\t\t\t\t\tEMRFRAMERGN|\n\t\t\t\t\tEMRGDICOMMENT|\n\t\t\t\t\tEMRINVERTRGN|\n\t\t\t\t\tEMRLINETO|\n\t\t\t\t\tEMRMASKBLT|\n\t\t\t\t\tEMRMODIFYWORLDTRANSFORM|\n\t\t\t\t\tEMROFFSETCLIPRGN|\n\t\t\t\t\tEMRPLGBLT|\n\t\t\t\t\tEMRPOLYDRAW|\n\t\t\t\t\tEMRPOLYDRAW16|\n\t\t\t\t\tEMRPOLYLINE|\n\t\t\t\t\tEMRPOLYLINE16|\n\t\t\t\t\tEMRPOLYPOLYLINE|\n\t\t\t\t\tEMRPOLYPOLYLINE16|\n\t\t\t\t\tEMRPOLYTEXTOUTA|\n\t\t\t\t\tEMRRESIZEPALETTE|\n\t\t\t\t\tEMRRESTOREDC|\n\t\t\t\t\tEMRROUNDRECT|\n\t\t\t\t\tEMRSCALEVIEWPORTEXTEX|\n\t\t\t\t\tEMRSELECTCLIPPATH|\n\t\t\t\t\tEMRSELECTCOLORSPACE|\n\t\t\t\t\tEMRSELECTOBJECT|\n\t\t\t\t\tEMRSELECTPALETTE|\n\t\t\t\t\tEMRSETARCDIRECTION|\n\t\t\t\t\tEMRSETBKCOLOR|\n\t\t\t\t\tEMRSETCOLORADJUSTMENT|\n\t\t\t\t\tEMRSETDIBITSTODEVICE|\n\t\t\t\t\tEMRSETMAPPERFLAGS|\n\t\t\t\t\tEMRSETMITERLIMIT|\n\t\t\t\t\tEMRSETPALETTEENTRIES|\n\t\t\t\t\tEMRSETPIXELV|\n\t\t\t\t\tEMRSETVIEWPORTEXTEX|\n\t\t\t\t\tEMRSETVIEWPORTORGEX|\n\t\t\t\t\tEMRSETWORLDTRANSFORM|\n\t\t\t\t\tEMRSTRETCHBLT|\n\t\t\t\t\tEMRSTRETCHDIBITS|\n\t\t\t\t\tEMRTEXT|\n\t\t\t\t\tENCORRECTTEXT|\n\t\t\t\t\tENDROPFILES|\n\t\t\t\t\tENHMETAHEADER|\n\t\t\t\t\tENHMETARECORD|\n\t\t\t\t\tENOLEOPFAILED|\n\t\t\t\t\tENPROTECTED|\n\t\t\t\t\tENSAVECLIPBOARD|\n\t\t\t\t\tENUMLOGFONT|\n\t\t\t\t\tENUMLOGFONTEX|\n\t\t\t\t\tENUM_SERVICE_STATUS|\n\t\t\t\t\tEVENTLOGRECORD|\n\t\t\t\t\tEVENTMSG|\n\t\t\t\t\tEXCEPTION_DEBUG_INFO|\n\t\t\t\t\tEXCEPTION_POINTERS|\n\t\t\t\t\tEXCEPTION_RECORD|\n\t\t\t\t\tEXIT_PROCESS_DEBUG_INFO|\n\t\t\t\t\tEXIT_THREAD_DEBUG_INFO|\n\t\t\t\t\tEXTLOGFONT|\n\t\t\t\t\tEXTLOGPEN|\n\t\t\t\t\tEXT_BUTTON|\n\t\t\t\t\tEmptySlot|\n\t\t\t\t\tEndOfCDRecord|\n\t\t\t\t\tEnvironment|\n\t\t\t\t\tFILETIME|\n\t\t\t\t\tFILTERKEYS|\n\t\t\t\t\tFINDREPLACE|\n\t\t\t\t\tFINDTEXTEX|\n\t\t\t\t\tFIND_NAME_BUFFER|\n\t\t\t\t\tFIND_NAME_HEADER|\n\t\t\t\t\tFIXED|\n\t\t\t\t\tFLOATING_SAVE_AREA|\n\t\t\t\t\tFMS_GETDRIVEINFO|\n\t\t\t\t\tFMS_GETFILESEL|\n\t\t\t\t\tFMS_LOAD|\n\t\t\t\t\tFMS_TOOLBARLOAD|\n\t\t\t\t\tFOCUS_EVENT_RECORD|\n\t\t\t\t\tFONTSIGNATURE|\n\t\t\t\t\tFORMATRANGE|\n\t\t\t\t\tFORMAT_PARAMETERS|\n\t\t\t\t\tFORM_INFO_1|\n\t\t\t\t\tFileConst|\n\t\t\t\t\tFileHeader|\n\t\t\t\t\tFileRoots|\n\t\t\t\t\tFileSystem|\n\t\t\t\t\tFoldingCaseData|\n\t\t\t\t\tFoo|\n\t\t\t\t\tFtpConnectionDetail|\n\t\t\t\t\tFtpFeature|\n\t\t\t\t\tFtpFileInfo|\n\t\t\t\t\tFtpResponse|\n\t\t\t\t\tGC|\n\t\t\t\t\tGCP_RESULTS|\n\t\t\t\t\tGCStats|\n\t\t\t\t\tGENERIC_MAPPING|\n\t\t\t\t\tGLYPHMETRICS|\n\t\t\t\t\tGLYPHMETRICSFLOAT|\n\t\t\t\t\tGROUP_INFO_2|\n\t\t\t\t\tGUID|\n\t\t\t\t\tHANDLETABLE|\n\t\t\t\t\tHD_HITTESTINFO|\n\t\t\t\t\tHD_ITEM|\n\t\t\t\t\tHD_LAYOUT|\n\t\t\t\t\tHD_NOTIFY|\n\t\t\t\t\tHELPINFO|\n\t\t\t\t\tHELPWININFO|\n\t\t\t\t\tHIGHCONTRAST|\n\t\t\t\t\tHSZPAIR|\n\t\t\t\t\tHeaderElement|\n\t\t\t\t\tHttpConst|\n\t\t\t\t\tHttpHeader|\n\t\t\t\t\tHttpHeaderName|\n\t\t\t\t\tHttpResponses|\n\t\t\t\t\tHttpStatus|\n\t\t\t\t\tHttpToken|\n\t\t\t\t\tICONINFO|\n\t\t\t\t\tICONMETRICS|\n\t\t\t\t\tIMAGEINFO|\n\t\t\t\t\tIMAGE_DOS_HEADER|\n\t\t\t\t\tINPUT_RECORD|\n\t\t\t\t\tITEMIDLIST|\n\t\t\t\t\tIeeeFlags|\n\t\t\t\t\tInterface|\n\t\t\t\t\tJOB_INFO_1|\n\t\t\t\t\tJOB_INFO_2|\n\t\t\t\t\tKERNINGPAIR|\n\t\t\t\t\tLANA_ENUM|\n\t\t\t\t\tLAYERPLANEDESCRIPTOR|\n\t\t\t\t\tLDT_ENTRY|\n\t\t\t\t\tLIST_ENTRY|\n\t\t\t\t\tLOAD_DLL_DEBUG_INFO|\n\t\t\t\t\tLOCALESIGNATURE|\n\t\t\t\t\tLOCALGROUP_INFO_0|\n\t\t\t\t\tLOCALGROUP_MEMBERS_INFO_0|\n\t\t\t\t\tLOCALGROUP_MEMBERS_INFO_3|\n\t\t\t\t\tLOGBRUSH|\n\t\t\t\t\tLOGCOLORSPACE|\n\t\t\t\t\tLOGFONT|\n\t\t\t\t\tLOGFONTA|\n\t\t\t\t\tLOGFONTW|\n\t\t\t\t\tLOGPALETTE|\n\t\t\t\t\tLOGPEN|\n\t\t\t\t\tLUID_AND_ATTRIBUTES|\n\t\t\t\t\tLV_COLUMN|\n\t\t\t\t\tLV_DISPINFO|\n\t\t\t\t\tLV_FINDINFO|\n\t\t\t\t\tLV_HITTESTINFO|\n\t\t\t\t\tLV_ITEM|\n\t\t\t\t\tLV_KEYDOWN|\n\t\t\t\t\tLocalFileHeader|\n\t\t\t\t\tMAT2|\n\t\t\t\t\tMD5_CTX|\n\t\t\t\t\tMDICREATESTRUCT|\n\t\t\t\t\tMEASUREITEMSTRUCT|\n\t\t\t\t\tMEMORYSTATUS|\n\t\t\t\t\tMEMORY_BASIC_INFORMATION|\n\t\t\t\t\tMENUEX_TEMPLATE_HEADER|\n\t\t\t\t\tMENUEX_TEMPLATE_ITEM|\n\t\t\t\t\tMENUITEMINFO|\n\t\t\t\t\tMENUITEMTEMPLATE|\n\t\t\t\t\tMENUITEMTEMPLATEHEADER|\n\t\t\t\t\tMENUTEMPLATE|\n\t\t\t\t\tMENU_EVENT_RECORD|\n\t\t\t\t\tMETAFILEPICT|\n\t\t\t\t\tMETARECORD|\n\t\t\t\t\tMINIMIZEDMETRICS|\n\t\t\t\t\tMINMAXINFO|\n\t\t\t\t\tMODEMDEVCAPS|\n\t\t\t\t\tMODEMSETTINGS|\n\t\t\t\t\tMONCBSTRUCT|\n\t\t\t\t\tMONCONVSTRUCT|\n\t\t\t\t\tMONERRSTRUCT|\n\t\t\t\t\tMONHSZSTRUCT|\n\t\t\t\t\tMONITOR_INFO_1|\n\t\t\t\t\tMONITOR_INFO_2|\n\t\t\t\t\tMONLINKSTRUCT|\n\t\t\t\t\tMONMSGSTRUCT|\n\t\t\t\t\tMOUSEHOOKSTRUCT|\n\t\t\t\t\tMOUSEKEYS|\n\t\t\t\t\tMOUSE_EVENT_RECORD|\n\t\t\t\t\tMSG|\n\t\t\t\t\tMSGBOXPARAMS|\n\t\t\t\t\tMSGFILTER|\n\t\t\t\t\tMULTIKEYHELP|\n\t\t\t\t\tNAME_BUFFER|\n\t\t\t\t\tNCB|\n\t\t\t\t\tNCCALCSIZE_PARAMS|\n\t\t\t\t\tNDDESHAREINFO|\n\t\t\t\t\tNETCONNECTINFOSTRUCT|\n\t\t\t\t\tNETINFOSTRUCT|\n\t\t\t\t\tNETRESOURCE|\n\t\t\t\t\tNEWCPLINFO|\n\t\t\t\t\tNEWTEXTMETRIC|\n\t\t\t\t\tNEWTEXTMETRICEX|\n\t\t\t\t\tNMHDR|\n\t\t\t\t\tNM_LISTVIEW|\n\t\t\t\t\tNM_TREEVIEW|\n\t\t\t\t\tNM_UPDOWNW|\n\t\t\t\t\tNONCLIENTMETRICS|\n\t\t\t\t\tNS_SERVICE_INFO|\n\t\t\t\t\tNUMBERFMT|\n\t\t\t\t\tOFNOTIFY|\n\t\t\t\t\tOFSTRUCT|\n\t\t\t\t\tOPENFILENAME|\n\t\t\t\t\tOPENFILENAMEA|\n\t\t\t\t\tOPENFILENAMEW|\n\t\t\t\t\tOSVERSIONINFO|\n\t\t\t\t\tOUTLINETEXTMETRIC|\n\t\t\t\t\tOUTPUT_DEBUG_STRING_INFO|\n\t\t\t\t\tOVERLAPPED|\n\t\t\t\t\tOffsetTypeInfo|\n\t\t\t\t\tPAINTSTRUCT|\n\t\t\t\t\tPALETTEENTRY|\n\t\t\t\t\tPANOSE|\n\t\t\t\t\tPARAFORMAT|\n\t\t\t\t\tPARTITION_INFORMATION|\n\t\t\t\t\tPERF_COUNTER_BLOCK|\n\t\t\t\t\tPERF_COUNTER_DEFINITION|\n\t\t\t\t\tPERF_DATA_BLOCK|\n\t\t\t\t\tPERF_INSTANCE_DEFINITION|\n\t\t\t\t\tPERF_OBJECT_TYPE|\n\t\t\t\t\tPIXELFORMATDESCRIPTOR|\n\t\t\t\t\tPOINT|\n\t\t\t\t\tPOINTFLOAT|\n\t\t\t\t\tPOINTFX|\n\t\t\t\t\tPOINTL|\n\t\t\t\t\tPOINTS|\n\t\t\t\t\tPOLYTEXT|\n\t\t\t\t\tPORT_INFO_1|\n\t\t\t\t\tPORT_INFO_2|\n\t\t\t\t\tPREVENT_MEDIA_REMOVAL|\n\t\t\t\t\tPRINTER_DEFAULTS|\n\t\t\t\t\tPRINTER_INFO_1|\n\t\t\t\t\tPRINTER_INFO_2|\n\t\t\t\t\tPRINTER_INFO_3|\n\t\t\t\t\tPRINTER_INFO_4|\n\t\t\t\t\tPRINTER_INFO_5|\n\t\t\t\t\tPRINTER_NOTIFY_INFO|\n\t\t\t\t\tPRINTER_NOTIFY_INFO_DATA|\n\t\t\t\t\tPRINTER_NOTIFY_OPTIONS|\n\t\t\t\t\tPRINTER_NOTIFY_OPTIONS_TYPE|\n\t\t\t\t\tPRINTPROCESSOR_INFO_1|\n\t\t\t\t\tPRIVILEGE_SET|\n\t\t\t\t\tPROCESS_HEAPENTRY|\n\t\t\t\t\tPROCESS_INFORMATION|\n\t\t\t\t\tPROPSHEETHEADER|\n\t\t\t\t\tPROPSHEETHEADER_U1|\n\t\t\t\t\tPROPSHEETHEADER_U2|\n\t\t\t\t\tPROPSHEETHEADER_U3|\n\t\t\t\t\tPROPSHEETPAGE|\n\t\t\t\t\tPROPSHEETPAGE_U1|\n\t\t\t\t\tPROPSHEETPAGE_U2|\n\t\t\t\t\tPROTOCOL_INFO|\n\t\t\t\t\tPROVIDOR_INFO_1|\n\t\t\t\t\tPSHNOTIFY|\n\t\t\t\t\tPUNCTUATION|\n\t\t\t\t\tPassByCopy|\n\t\t\t\t\tPassByRef|\n\t\t\t\t\tPhase1Info|\n\t\t\t\t\tPropertyConfigurator|\n\t\t\t\t\tQUERY_SERVICE_CONFIG|\n\t\t\t\t\tQUERY_SERVICE_LOCK_STATUS|\n\t\t\t\t\tRASAMB|\n\t\t\t\t\tRASCONN|\n\t\t\t\t\tRASCONNSTATUS|\n\t\t\t\t\tRASDIALEXTENSIONS|\n\t\t\t\t\tRASDIALPARAMS|\n\t\t\t\t\tRASENTRYNAME|\n\t\t\t\t\tRASPPPIP|\n\t\t\t\t\tRASPPPIPX|\n\t\t\t\t\tRASPPPNBF|\n\t\t\t\t\tRASTERIZER_STATUS|\n\t\t\t\t\tREASSIGN_BLOCKS|\n\t\t\t\t\tRECT|\n\t\t\t\t\tRECTL|\n\t\t\t\t\tREMOTE_NAME_INFO|\n\t\t\t\t\tREPASTESPECIAL|\n\t\t\t\t\tREQRESIZE|\n\t\t\t\t\tRGBQUAD|\n\t\t\t\t\tRGBTRIPLE|\n\t\t\t\t\tRGNDATA|\n\t\t\t\t\tRGNDATAHEADER|\n\t\t\t\t\tRIP_INFO|\n\t\t\t\t\tRuntime|\n\t\t\t\t\tSCROLLINFO|\n\t\t\t\t\tSECURITY_ATTRIBUTES|\n\t\t\t\t\tSECURITY_DESCRIPTOR|\n\t\t\t\t\tSECURITY_QUALITY_OF_SERVICE|\n\t\t\t\t\tSELCHANGE|\n\t\t\t\t\tSERIALKEYS|\n\t\t\t\t\tSERVICE_ADDRESS|\n\t\t\t\t\tSERVICE_ADDRESSES|\n\t\t\t\t\tSERVICE_INFO|\n\t\t\t\t\tSERVICE_STATUS|\n\t\t\t\t\tSERVICE_TABLE_ENTRY|\n\t\t\t\t\tSERVICE_TYPE_INFO_ABS|\n\t\t\t\t\tSERVICE_TYPE_VALUE_ABS|\n\t\t\t\t\tSESSION_BUFFER|\n\t\t\t\t\tSESSION_HEADER|\n\t\t\t\t\tSET_PARTITION_INFORMATION|\n\t\t\t\t\tSHFILEINFO|\n\t\t\t\t\tSHFILEOPSTRUCT|\n\t\t\t\t\tSHITEMID|\n\t\t\t\t\tSHNAMEMAPPING|\n\t\t\t\t\tSID|\n\t\t\t\t\tSID_AND_ATTRIBUTES|\n\t\t\t\t\tSID_IDENTIFIER_AUTHORITY|\n\t\t\t\t\tSINGLE_LIST_ENTRY|\n\t\t\t\t\tSIZE|\n\t\t\t\t\tSMALL_RECT|\n\t\t\t\t\tSOUNDSENTRY|\n\t\t\t\t\tSTARTUPINFO|\n\t\t\t\t\tSTICKYKEYS|\n\t\t\t\t\tSTRRET|\n\t\t\t\t\tSTYLEBUF|\n\t\t\t\t\tSTYLESTRUCT|\n\t\t\t\t\tSYSTEMTIME|\n\t\t\t\t\tSYSTEM_AUDIT_ACE|\n\t\t\t\t\tSYSTEM_INFO|\n\t\t\t\t\tSYSTEM_INFO_U|\n\t\t\t\t\tSYSTEM_POWER_STATUS|\n\t\t\t\t\tSignal|\n\t\t\t\t\tSjLj_Function_Context|\n\t\t\t\t\tSpecialCaseData|\n\t\t\t\t\tTAPE_ERASE|\n\t\t\t\t\tTAPE_GET_DRIVE_PARAMETERS|\n\t\t\t\t\tTAPE_GET_MEDIA_PARAMETERS|\n\t\t\t\t\tTAPE_GET_POSITION|\n\t\t\t\t\tTAPE_PREPARE|\n\t\t\t\t\tTAPE_SET_DRIVE_PARAMETERS|\n\t\t\t\t\tTAPE_SET_MEDIA_PARAMETERS|\n\t\t\t\t\tTAPE_SET_POSITION|\n\t\t\t\t\tTAPE_WRITE_MARKS|\n\t\t\t\t\tTBADDBITMAP|\n\t\t\t\t\tTBBUTTON|\n\t\t\t\t\tTBNOTIFY|\n\t\t\t\t\tTBSAVEPARAMS|\n\t\t\t\t\tTCHOOSECOLOR|\n\t\t\t\t\tTCHOOSEFONT|\n\t\t\t\t\tTC_HITTESTINFO|\n\t\t\t\t\tTC_ITEM|\n\t\t\t\t\tTC_ITEMHEADER|\n\t\t\t\t\tTC_KEYDOWN|\n\t\t\t\t\tTEXTMETRIC|\n\t\t\t\t\tTEXTMETRICA|\n\t\t\t\t\tTEXTRANGE|\n\t\t\t\t\tTFINDTEXT|\n\t\t\t\t\tTIME_ZONE_INFORMATION|\n\t\t\t\t\tTOGGLEKEYS|\n\t\t\t\t\tTOKEN_CONTROL|\n\t\t\t\t\tTOKEN_DEFAULT_DACL|\n\t\t\t\t\tTOKEN_GROUPS|\n\t\t\t\t\tTOKEN_OWNER|\n\t\t\t\t\tTOKEN_PRIMARY_GROUP|\n\t\t\t\t\tTOKEN_PRIVILEGES|\n\t\t\t\t\tTOKEN_SOURCE|\n\t\t\t\t\tTOKEN_STATISTICS|\n\t\t\t\t\tTOKEN_USER|\n\t\t\t\t\tTOOLINFO|\n\t\t\t\t\tTOOLTIPTEXT|\n\t\t\t\t\tTPAGESETUPDLG|\n\t\t\t\t\tTPMPARAMS|\n\t\t\t\t\tTRANSMIT_FILE_BUFFERS|\n\t\t\t\t\tTREEITEM|\n\t\t\t\t\tTSMALLPOINT|\n\t\t\t\t\tTTHITTESTINFO|\n\t\t\t\t\tTTPOLYCURVE|\n\t\t\t\t\tTTPOLYGONHEADER|\n\t\t\t\t\tTVARIANT|\n\t\t\t\t\tTV_DISPINFO|\n\t\t\t\t\tTV_HITTESTINFO|\n\t\t\t\t\tTV_INSERTSTRUCT|\n\t\t\t\t\tTV_ITEM|\n\t\t\t\t\tTV_KEYDOWN|\n\t\t\t\t\tTV_SORTCB|\n\t\t\t\t\tTime|\n\t\t\t\t\tTimeOfDay|\n\t\t\t\t\tTimeSpan|\n\t\t\t\t\tTuple|\n\t\t\t\t\tUDACCEL|\n\t\t\t\t\tULARGE_INTEGER|\n\t\t\t\t\tUNIVERSAL_NAME_INFO|\n\t\t\t\t\tUNLOAD_DLL_DEBUG_INFO|\n\t\t\t\t\tUSEROBJECTFLAGS|\n\t\t\t\t\tUSER_INFO_0|\n\t\t\t\t\tUSER_INFO_2|\n\t\t\t\t\tUSER_INFO_3|\n\t\t\t\t\tUnicodeData|\n\t\t\t\t\tVALENT|\n\t\t\t\t\tVA_LIST|\n\t\t\t\t\tVERIFY_INFORMATION|\n\t\t\t\t\tVS_FIXEDFILEINFO|\n\t\t\t\t\tVariant|\n\t\t\t\t\tVfsFilterInfo|\n\t\t\t\t\tWIN32_FILE_ATTRIBUTE_DATA|\n\t\t\t\t\tWIN32_FIND_DATA|\n\t\t\t\t\tWIN32_FIND_DATAW|\n\t\t\t\t\tWIN32_STREAM_ID|\n\t\t\t\t\tWINDOWINFO|\n\t\t\t\t\tWINDOWPLACEMENT|\n\t\t\t\t\tWINDOWPOS|\n\t\t\t\t\tWINDOW_BUFFER_SIZE_RECORD|\n\t\t\t\t\tWNDCLASS|\n\t\t\t\t\tWNDCLASSA|\n\t\t\t\t\tWNDCLASSEX|\n\t\t\t\t\tWNDCLASSEXA|\n\t\t\t\t\tWSADATA|\n\t\t\t\t\tWallClock|\n\t\t\t\t\tXFORM|\n\t\t\t\t\tZipEntryInfo\n\t\t\t\t)\\b',
      name: 'support.type.built-ins.structs.d'
    },
    'support-type-built-ins-templates-d': {
      match: '\\b(AssociativeArray|RTInfo)\\b',
      name: 'support.type.built-ins.templates.d'
    },
    'support-type-d': {
      match: '\\b((?:core|std)\\.[\\w\\.]+)\\b',
      name: 'support.type.d'
    },
    'template-constraint-d': {
      patterns: [
        {
          captures: {1: {patterns: [{include: '$base'}]}},
          match: '\\s*(if\\s*\\(\\s*([^\\)]+)\\s*\\)|)',
          name: 'meta.definition.template-constraint.d'
        }
      ]
    }
  },
  scopeName: 'source.d'
}

export default grammar
