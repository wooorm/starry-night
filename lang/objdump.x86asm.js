// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c', 'source.c++'],
  extensions: [
    '.c++-objdump',
    '.c++objdump',
    '.c-objdump',
    '.cpp-objdump',
    '.cppobjdump',
    '.cxx-objdump',
    '.d-objdump',
    '.objdump'
  ],
  names: ['c++-objdump', 'c-objdump', 'cpp-objdump', 'd-objdump', 'objdump'],
  patterns: [
    {
      begin: '^(.*):\\s+file format (.*)$',
      beginCaptures: {
        0: {name: 'comment.x86.assembly'},
        1: {name: 'entity.name.type.x86.assembly'}
      },
      end: '^',
      name: 'meta.embedded.x86asm'
    },
    {
      begin: '^Disassembly of section (.*):$',
      beginCaptures: {
        0: {name: 'comment.x86.assembly'},
        1: {name: 'entity.name.tag.x86.assembly'}
      },
      end: '^',
      name: 'meta.embedded.x86asm'
    },
    {
      begin: '^[0-9A-Za-z]+ <(.*)>:$',
      beginCaptures: {
        0: {name: 'comment.x86.assembly'},
        1: {name: 'entity.name.function.x86.assembly'}
      },
      end: '^',
      name: 'meta.embedded.x86asm'
    },
    {
      begin: '^\\s*[0-9A-Za-z]+:(?:\\t[0-9A-Za-z]{2}\\s+){0,1}(?:\\t|$)',
      beginCaptures: {0: {name: 'comment.x86.assembly'}},
      end: '^',
      name: 'meta.embedded.x86asm',
      patterns: [{include: 'source.x86asm'}]
    },
    {include: '#special_block'},
    {include: 'source.c'},
    {include: 'source.c++'}
  ],
  scopeName: 'objdump.x86asm'
}

export default grammar
