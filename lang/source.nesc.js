// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c'],
  extensions: ['.nc'],
  names: ['nesc'],
  patterns: [
    {include: 'source.c'},
    {
      match:
        '\\b(abstract|as|async|atomic|call|command|components|configuration|event|implementation|includes|interface|generic|module|new|norace|post|provides|signal|task|uses|nx_struct)\\b',
      name: 'keyword.control.nesc'
    },
    {
      match:
        '\\b(result_t|error_t|nx_uint8_t|nx_uint16_t|nx_uint32_t|nx_int8_t|nx_int16_t|nx_int32_t|message_t|void)\\b',
      name: 'storage.type.nesc'
    },
    {match: '\\b(SUCCESS|FAIL)\\b', name: 'constant.language.nesc'}
  ],
  scopeName: 'source.nesc'
}

export default grammar
