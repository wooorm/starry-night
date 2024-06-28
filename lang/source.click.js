// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.click'],
  names: ['click'],
  patterns: [
    {
      match: '\\b(\\d{1,3}\\.){3}\\d{1,3}\\b',
      name: 'constant.other.ipv4.click'
    },
    {
      match: '\\b(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\\b',
      name: 'constant.other.ipv6.click'
    },
    {
      match: '\\b(?:[a-fA-F0-9]{1,2}:){5}[a-fA-F0-9]{1,2}\\b',
      name: 'constant.other.eth.click'
    },
    {
      captures: {
        1: {name: 'constant.numeric.click'},
        2: {name: 'constant.numeric.click'}
      },
      match: '\\b([0-9a-fA-F]+)/([0-9a-fA-F]+)\\b'
    },
    {match: '\\b[\\+-]?\\d+(\\.?\\d+)?\\b', name: 'constant.numeric.click'},
    {match: '\\b0x[0-9a-fA-F]+\\b', name: 'constant.numeric.click'},
    {
      match: '\\b(define|input|library|output|read|require|write)\\b',
      name: 'keyword.other.click'
    },
    {
      captures: {
        1: {name: 'storage.type.class.click'},
        2: {name: 'entity.name.type.class.click'}
      },
      match: '\\b(elementclass)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)'
    },
    {match: '->', name: 'keyword.operator.click'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.click'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.click'}},
      name: 'string.quoted.double.click'
    },
    {
      match: '[\\b]*\\$[_]*[a-zA-Z][_a-zA-Z0-9]*\\b',
      name: 'variable.language.click'
    },
    {match: '\\/\\/.*', name: 'comment.click'},
    {
      captures: {2: {name: 'entity.name.type.instance.click'}},
      match: '(::)?\\s*(\\w+)\\s*\\('
    },
    {
      captures: {1: {name: 'entity.name.type.instance.click'}},
      match: '::\\s*(\\w+)'
    },
    {captures: {1: {name: 'constant.language.click'}}, match: ',\\s*(-)'},
    {match: '\\b(no|false|true|yes)\\b', name: 'constant.language.click'}
  ],
  scopeName: 'source.click'
}

export default grammar
