// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/omnetpp/omnetpp-textmate-msg>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.msg'],
  names: ['omnet++-msg', 'omnetpp-msg'],
  patterns: [
    {include: '#keyword'},
    {include: '#comment'},
    {include: '#property'},
    {include: '#types'}
  ],
  repository: {
    comment: {
      patterns: [{match: '//.*$', name: 'comment.line.double-slash.msg'}]
    },
    keyword: {
      patterns: [
        {
          match:
            '\\b(?:cplusplus|namespace|struct|message|packet|class|enum|extends|import)\\b',
          name: 'keyword.other.msg'
        }
      ]
    },
    property: {patterns: [{match: '@[a-zA-Z]+', name: 'entity.name.tag.msg'}]},
    string: {patterns: [{match: '"[^"]*"', name: 'string.quoted.msg'}]},
    types: {
      patterns: [
        {
          match:
            '\\b(?:abstract|bool|char|short|int|long|float|double|unsigned|string|simtime_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int16|int32|int64|uint8|uint16|uint32|uint64)\\b',
          name: 'storage.type.common'
        }
      ]
    }
  },
  scopeName: 'source.msg'
}

export default grammar
