// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/donno2048/Linker.tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c'],
  extensions: ['.ld', '.lds', '.x'],
  names: ['linker-script'],
  patterns: [
    {include: 'source.c'},
    {
      match:
        '\\b(?:S(?:E(?:ARCH_DIR|CTIONS)|IZEOF(?:_HEADERS)?|TARTUP)|IN(?:HIBIT_COMMON_ALLOCATION|CLUDE|PUT)|D(?:ATA_SEGMENT_(?:ALIGN|END)|EFINED)|O(?:UTPUT(?:_(?:FORMAT|ARCH))?|RIGIN)|C(?:REATE_OBJECT_SYMBOL|ONSTRUCTOR)S|(?:FORCE_COMMON_ALLOCATIO|HIDDE)N|E(?:X(?:CLUDE_FILE|TERN)|NTRY)|P(?:ROVIDE(?:_HIDDEN)?|HDRS)|A(?:BSOLUTE|SSERT|LIGN|DDR)|N(?:OCROSSREFS|EXT)|L(?:OADADDR|ENGTH)|M(?:EMORY|AX|IN)|sizeof_headers|l(?:en)?|o(?:rg)?|TARGET|BLOCK|GROUP)\\b',
      name: 'support.function.ld'
    },
    {
      captures: {
        1: {name: 'storage.type.ld'},
        2: {name: 'constant.numeric.ld'}
      },
      match: '(BYTE|SHORT|LONG|S?QUAD)\\s*\\(([^\\)]*)\\)'
    },
    {
      captures: {
        1: {name: 'variable.other.source.ld'},
        2: {name: 'constant.other.section.ld'}
      },
      match: '((?=.*[^A-Z])[^\\s\\(;\\:\\{\\}]*)\\s*\\(([^\\),"]*)\\)'
    },
    {
      captures: {
        1: {name: 'constant.other.section.ld'},
        2: {name: 'constant.numeric.address.ld'},
        3: {name: 'keyword.other.at.ld'}
      },
      match:
        '([^\\s\\(;\\:\\{\\}]*)(\\s+[^\\(\\s\\:\\}]+|\\s*\\([^\\)]*\\))?\\s*\\:\\s*(AT\\s*\\([^\\)]*\\))?'
    },
    {
      captures: {
        1: {name: 'constant.numeric.memory.ld'},
        2: {name: 'keyword.other.at.ld'},
        4: {name: 'constant.numeric.memory.ld'},
        5: {name: 'constant.numeric.address.ld'}
      },
      match:
        '\\}\\s*\\>\\s*([^\\s\\>\\:]*)\\s*(AT\\s*)?(?:\\>\\s*)?([^\\=\\>]*)?\\=\\s*([^\\s;\\}]*)'
    },
    {
      captures: {
        1: {name: 'constant.numeric.memory.ld'},
        2: {name: 'support.constant.permissions.ld'}
      },
      match: '([^\\s\\(;\\{\\}]*)\\s*\\(\\s*([RrWwXx\\!]{,4})\\s*\\)'
    }
  ],
  scopeName: 'source.c.linker'
}

export default grammar
