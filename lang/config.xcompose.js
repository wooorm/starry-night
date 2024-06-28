// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['xcompose'],
  patterns: [
    {include: '#comment'},
    {include: '#multikey'},
    {include: '#key'},
    {include: '#quoted'},
    {include: '#function'},
    {include: '#colon'},
    {include: '#unicode'},
    {include: '#keyword'}
  ],
  repository: {
    colon: {match: ':', name: 'entity.function.xcompose'},
    comment: {match: '#.*', name: 'comment.block.xcompose'},
    key: {
      captures: {
        1: {name: 'entity.function.xcompose'},
        2: {name: 'keyword.xcompose.xcompose'},
        3: {name: 'entity.function.xcompose'}
      },
      match: '(?x) ( < ) ( \\S+ ) ( > )'
    },
    keyword: {match: '\binclude\b', name: 'entity.function.xcompose'},
    multikey: {
      captures: {
        1: {name: 'entity.function.xcompose'},
        2: {name: 'declaror.class.xcompose'},
        3: {name: 'entity.function.xcompose'}
      },
      match: '(?x) ( < ) ( Multi_key ) ( > )'
    },
    quoted: {match: '".*"', name: 'string.quoted.double.xcompose'},
    unicode: {match: 'U[0-9A-Fa-f]+', name: 'storage.modifier.unicode.xcompose'}
  },
  scopeName: 'config.xcompose'
}

export default grammar
