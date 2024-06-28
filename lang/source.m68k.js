// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.s', '.x68'],
  names: ['motorola-68k-assembly', 'm68k'],
  patterns: [
    {match: '(;|\\B\\*).*$', name: 'comment.m68k'},
    {begin: '"', end: '"', name: 'string.quoted.m68k'},
    {match: '^[a-zA-Z_][a-zA-Z0-9_]*:', name: 'entity.name.function.m68k'},
    {
      match: '^(\\.|_)[a-zA-Z_][a-zA-Z0-9_]*:?',
      name: 'entity.name.section.m68k'
    },
    {match: '^[a-zA-Z_][a-zA-Z0-9_]*', name: 'entity.variable.m68k'},
    {match: "\\'\\S\\'", name: 'string.char.m68k'},
    {match: '-?\\b[0-9]+\\b', name: 'constant.numeric.dec.m68k'},
    {match: '-?\\$[0-9a-fA-F]+\\b', name: 'constant.numeric.hex.m68k'},
    {
      match: '\\b(?i)([ad]([0-7])|sr|sp|pc)(?-i)\\b',
      name: 'storage.other.register.m68k'
    },
    {
      match: '\\b(?i)(usp|dfc|sfc|vbr|cacr|caar|msp|isp)(?-i)\\b',
      name: 'storage.other.register.privileged.m68k'
    },
    {
      captures: {
        2: {name: 'support.mnemonic.privileged.m68k'},
        3: {name: 'support.mnemonic.size.m68k'},
        4: {name: 'storage.other.register.m68k'},
        6: {name: 'entity.name.function.m68k'},
        7: {name: 'entity.name.function.m68k'},
        8: {name: 'storage.other.register.privileged.m68k'}
      },
      match:
        '\\b(?i)((moves|movec)(\\.[bwl])?)\\s+([ad]([0-7])|(.+)),((usp|dfc|sfc|vbr|cacr|caar|msp|isp)|(.+))?(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        3: {name: 'support.mnemonic.immediate.m68k'}
      },
      match: '\\b(?i)(reset|rte|stop(\\s+(#.+)?))(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        4: {name: 'support.mnemonic.immediate.m68k'},
        5: {name: 'entity.name.function.m68k'},
        6: {name: 'storage.other.register.privileged.m68k'}
      },
      match: '\\b(?i)(move(\\.[bwl])?\\s+((#.+)?(.+)?,(sr|usp)))(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'storage.other.register.m68k'},
        4: {name: 'storage.other.register.privileged.m68k'}
      },
      match: '\\b(?i)(move(\\.[bwl])?\\s+(sr|usp),([^\\s]+))(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'storage.other.register.privileged.m68k'},
        3: {name: 'storage.other.register.m68k'}
      },
      match: '\\b(?i)(cinv[lp]|cpush[lp])\\s+(dc|ic|bc),\\((a[0-7])(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'storage.other.register.privileged.m68k'}
      },
      match: '\\b(?i)(cinva|cpusha)\\s+(dc|ic|bc)(?-i)\\b'
    },
    {
      captures: {
        2: {name: 'support.mnemonic.privileged.m68k'},
        3: {name: 'support.mnemonic.size.m68k'},
        5: {name: 'support.mnemonic.immediate.m68k'},
        6: {name: 'storage.other.register.privileged.m68k'}
      },
      match: '\\b(?i)((andi|eori|ori)(\\.w)?(\\s+(.+),(sr)))(?-i)\\b'
    },
    {
      captures: {1: {name: 'support.mnemonic.privileged.m68k'}},
      match: '\\b(?i)(pflusha|pflushan)(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'storage.other.register.m68k'}
      },
      match: '\\b(?i)(pflush|pflushn)\\s+\\((a[0-7]|sp)(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'entity.name.function.m68k'},
        3: {name: 'storage.other.register.privileged.m68k'},
        4: {name: 'entity.name.function.m68k'},
        5: {name: 'storage.other.register.privileged.m68k'}
      },
      match:
        '\\b(?i)(pmove)\\s+((crp|srp|tc|tt0|tt1)|.+),((crp|srp|tc|tt0|tt1)|.+)(?-i)\\b'
    },
    {
      match:
        '\\b(?i)([as]bcd(\\.b)?|(add|sub)[iqx]?(\\.[bwl])?|adda(\\.[wl])?|(and|eor|or)(i)?(\\.[bwl])?|(rox?|[al]s)[lr](\\.[bwl])?|b(chg|clr|set|tst)(\\.[bl])?|bf(chg|clr|extu|exts|ffo|ins|set|tst)|chk(\\.[wl])?|chk2(\\.[bwl])?|clr(\\.[bwl])?|cas(\\.[bwl])?|cas2(\\.[wl])?|cmp[im2]?(\\.[bwl])?|cmpa(\\.[wl])?|divs|divu|exg(\\.l)?|ext(\\.[wl])?|extb.l|illegal|lea(\\.l)?|link|muls|mulu|nbcd(\\.b)?|(negx?|not)(\\.[bwl])?|nop|pea(\\.l)?|reset|rte|rtri|rtd|rts|s(f|t|cc|hs|cs|lo|eq|ge|gt|hi|le|ls|lt|mi|ne|pl|vc|vs)(\\.b)?|stop|swap(\\.l)?|tas(\\.b)?|trap|trapv|trap(f|t|cc|hs|cs|lo|eq|ge|gt|hi|le|ls|lt|mi|ne|pl|vc|vs)|tst|tst\\.b|tst\\.w|tst\\.l|unlk|pack|unpk)(?-i)\\b',
      name: 'support.mnemonic.m68k'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'support.mnemonic.size.m68k'}
      },
      match: '\\b(?i)(move(\\.[bwl])?|movea(\\.[wl])?)(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'entity.name.function.m68k'}
      },
      match: '\\b(?i)(movem|movep)(\\.[wl])?|(move16)(\\.l)?(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'support.mnemonic.operand.source.constant.m68k'},
        4: {name: 'support.mnemonic.operand.source.constant.hex.m68k'},
        5: {name: 'support.mnemonic.operand.source.constant.binary.m68k'},
        6: {name: 'support.mnemonic.operand.source.constant.decimal.m68k'},
        7: {name: 'storage.other.register.m68k'}
      },
      match:
        '\\b(?i)(moveq)(\\.l)?\\s+#((\\$-?[0-9a-f]{1,3})|(%[0-1]{1,8})|-?([0-9]{1,3})),(d[0-7])(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.branch.m68k'},
        4: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(b(ra|cc|hs|cs|lo|eq|ge|gt|hi|le|ls|lt|mi|ne|pl|vc|vs|sr)(\\.[sw])?)(?-i)\\s+(\\.?[a-zA-Z_][a-zA-Z0-9_]*)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.branch.m68k'},
        3: {name: 'storage.other.register.m68k'},
        4: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(j(sr|mp))(?-i)\\s+((\\.?[a-zA-Z_][a-zA-Z0-9_]*)|\\$?\\d*\\((sp|pc|a[0-7])(,(d|a)[0-7](.(w|l))?(\\*[248])?)?\\))'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.loop.m68k'},
        3: {name: 'storage.other.register.m68k'},
        4: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(db(ra|f|t|cc|hs|cs|lo|eq|ge|gt|hi|le|ls|lt|mi|ne|pl|vc|vs))(?-i)\\s+(d[0-7])\\s*,\\s*\\.*([a-zA-Z_][a-zA-Z0-9_]*)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        4: {name: 'support.mnemonic.size.m68k'},
        5: {name: 'support.mnemonic.operand.source'},
        6: {name: 'entity.name.function.m68k'},
        7: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(f(s|d)?(abs|acos|add|atan|atanh|asin|sub|asub|tst|cmp|div|mul|move|neg|sqrt|int|intrz|getexp|getman|mod|rem|scale|sgldiv|sglmul|etox|etoxm1|logn|lognp1|log10|log2|tentox|twotox|cos|sin|cosh|sinh|sincos|tan|tanh|))(\\.[xbwlsd])?\\s+((fp[0-7])|.+)(,((fp[0-7])|.+))?(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'support.mnemonic.operand.source'},
        4: {name: 'entity.name.function.m68k'}
      },
      match: '\\b(?i)(fmovem)(\\.[xl])?\\s+(.+),(.+)(?-i)\\b'
    },
    {match: '\\b(?i)fnop(?-i)\\b', name: 'support.mnemonic.m68k'},
    {
      captures: {
        1: {name: 'support.mnemonic.m68k'},
        2: {name: 'support.mnemonic.size.m68k'},
        3: {name: 'support.mnemonic.operand.source'},
        4: {name: 'entity.name.function.m68k'}
      },
      match: '\\b(?i)(fmovecr)(\\.x)?\\s+(#.+),(fp[0-7])(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.privileged.m68k'},
        2: {name: 'support.mnemonic.operand.source'}
      },
      match: '\\b(?i)(fsave|frestore)\\s+((\\(a[0-7]|sp]\\))|.+)(?-i)\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.branch.m68k'},
        4: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(f([bs])?(f|eq|ogt|oge|olt|ole|ogl|or|un|ueq|ugt|uge|ult|ule|ne|t|seq|gt|ge|lt|le|gl|gle|ngle|ngl|nle|nlt|nge|ngt|sne|st|sf|seq|sogt))(?-i)\\s+(\\.?([a-zA-Z_][a-zA-Z0-9_]*))\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.branch.m68k'},
        5: {name: 'storage.other.register.m68k'},
        6: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(fd([bs])?(f|eq|ogt|oge|olt|ole|ogl|or|un|ueq|ugt|uge|ult|ule|ne|t|seq|gt|ge|lt|le|gl|gle|ngle|ngl|nle|nlt|nge|ngt|sne|st|sf|seq|sogt))(?-i)\\s+((d[0-7])),(\\.?([a-zA-Z_][a-zA-Z0-9_]*))\\b'
    },
    {
      captures: {
        1: {name: 'support.mnemonic.branch.m68k'},
        3: {name: 'storage.other.register.m68k'},
        4: {name: 'entity.name.function.m68k'}
      },
      match:
        '\\b(?i)(ftrap(f|eq|ogt|oge|olt|ole|ogl|or|un|ueq|ugt|uge|ult|ule|ne|t|seq|gt|ge|lt|le|gl|gle|ngle|ngl|nle|nlt|nge|ngt|sne|st|sf|seq|sogt))(?-i)\\s+(fp[0-7]),(\\.?[a-zA-Z_][a-zA-Z0-9_]*)\\b'
    },
    {
      match:
        '\\b(?i)(rsreset|rsset|rs(.[bwl])?|equ|fequ|include|incbin|set|reg|cargs|fequ|xref|xdef)(?-i)\\b',
      name: 'keyword.control.define.m68k'
    },
    {
      match:
        '\\b(?i)((d[cs]|dcb)(.[sbwl])?|even|ifeq|ifne|ifgt|ifge|iflt|ifle|endif|endc|rept|endr|macro|endm|section|text|data|bss|end|cnop|opt|machine|fpu|comment)(?-i)\\b',
      name: 'keyword.control.directive.m68k'
    }
  ],
  scopeName: 'source.m68k'
}

export default grammar
