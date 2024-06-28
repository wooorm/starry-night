// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/whitequark/llvm.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ll'],
  names: ['llvm'],
  patterns: [
    {
      match:
        '\\b(add|alloca|and|ashr|atomic|atomicrmw|bitcast|br|call|cmpxchg|eq|exact|extractelement|extractvalue|fadd|fcmp|fdiv|fence|fmul|fpext|fptosi|fptoui|fptrunc|frem|fsub|getelementptr|icmp|inbounds|indirectbr|insertelement|insertvalue|inttoptr|invoke|landingpad|load|lshr|mul|ne|nsw|nuw|oeq|oge|ogt|ole|olt|one|or|ord|phi|ptrtoint|resume|ret|sdiv|select|sext|sge|sgt|shl|shufflevector|sitofp|sle|slt|srem|store|sub|switch|to|trunc|udiv|ueq|uge|uge|ugt|ugt|uitofp|ule|ule|ult|ult|une|uno|unreachable|unwind|urem|va_arg|xor|zext)\\b(?!\\s*:)',
      name: 'keyword.instruction.llvm'
    },
    {
      match:
        '\\b(acq_rel|acquire|addrspace|alias|align|alignstack|alwaysinline|appending|argmemonly|attributes|asm|blockaddress|byval|c|cc|ccc|coldcc|common|constant|convergent|datalayout|declare|default|define|deplibs|dereferenceable|dereferenceable_or_null|dllexport|dllimport|except|extern_weak|external|false|fastcc|gc|global|hidden|inalloca|inaccessiblememonly|inaccessiblemem_or_argmemonly|inlinehint|inreg|internal|jumptable|linkonce|linkonce_odr|local_unnamed_addr|metadata|minsize|module|monotonic|naked|nest|noalias|nobuiltin|noduplicate|nonnull|nocapture|noimplicitfloat|noinline|nonlazybind|noredzone|noreturn|norecurse|nounwind|null|opaque|optnone|optsize|personality|prefix|prologue|private|protected|ptx_device|ptx_kernel|readnone|readonly|release|returned|returns_twice|safestack|sanitize_address|sanitize_memory|sanitize_thread|section|seq_cst|sideeffect|signext|sret|ssp|sspreq|sspstrong|swiftself|swifterror|tail|target|thread_local|triple|true|type|undef|unnamed_addr|unordered|uwtable|volatile|weak|weak_odr|writeonly|x86_fastcallcc|x86_stdcallcc|zeroext|zeroinitializer)\\b(?!\\s*:)',
      name: 'storage.modifier.llvm'
    },
    {
      match: '([%@][-a-zA-Z$._][-a-zA-Z$._0-9]*(\\s*\\*)+)',
      name: 'storage.type.llvm'
    },
    {
      match:
        '\\b(void|i\\d+\\**|half|float|double|fp128|x86_fp80|ppc_fp128|x86mmx|ptr|label|metadata)',
      name: 'storage.type.language.llvm'
    },
    {
      match: '([%@][-a-zA-Z$._][-a-zA-Z$._0-9]*)',
      name: 'variable.language.llvm'
    },
    {match: '([%]\\d+)', name: 'variable.language.llvm'},
    {match: '(!\\d+)', name: 'variable.metadata.llvm'},
    {match: '(![-a-zA-Z$._][-a-zA-Z$._0-9]*)', name: 'variable.metadata.llvm'},
    {match: ';.*$', name: 'comment.llvm'},
    {match: '\\b\\d+\\.\\d+(e-?\\d+)\\b', name: 'constant.numeric.float.llvm'},
    {
      match: '\\b(\\d+|0(x|X)[a-fA-F0-9]+)\\b',
      name: 'constant.numeric.integer.llvm'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.llvm',
      patterns: [{match: '\\\\..', name: 'constant.character.escape.lvvm'}]
    }
  ],
  scopeName: 'source.llvm'
}

export default grammar
