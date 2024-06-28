// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/davidhq/SublimeEthereum>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vy'],
  names: ['vyper'],
  patterns: [
    {match: '\\#.*', name: 'comment'},
    {begin: '(\\"\\"\\")', end: '(\\"\\"\\")', name: 'comment'},
    {match: '\\b(event|indexed)\\b', name: 'keyword.control'},
    {
      captures: {
        2: {name: 'entity.name.function'},
        3: {name: 'entity.name.function'}
      },
      match:
        '\\b(contract|interface|library|using|struct|constructor|modifier)(\\s+[A-Za-z_]\\w*)?(?:\\s+is\\s+((?:[A-Za-z_][\\,\\s]*)*))?\\b',
      name: 'keyword.control'
    },
    {
      captures: {
        2: {name: 'entity.name.function'},
        3: {name: 'entity.name.function'}
      },
      match: '\\b(def)(\\s+[A-Za-z_]\\w*)?\\b',
      name: 'keyword'
    },
    {match: '\\b(True|False)\\b', name: 'constant.language'},
    {match: '\\bself\\b', name: 'markup.italic'},
    {
      match:
        '\\b(address(?:\\s+payable)?|string|bytes?\\d*|int\\d*|uint\\d*|bool|u?fixed\\d+x\\d+)\\b',
      name: 'support.type'
    },
    {
      match:
        '\\b(import|constant|map|raise|payable|storage|memory|calldata|if|else|for|while|do|break|continue|return|private|public|immutable|pure|view|internal|external|this|suicide|selfdestruct|delegatecall|emit|new|is|throw|revert|assert|require|\\_)\\b',
      name: 'keyword.control'
    },
    {match: '\\b(not|and|or|pass|from|import|as)\\b', name: 'keyword'},
    {match: '(@[A-Za-z_]\\w*)\\b', name: 'markup.italic'},
    {
      match: '(=|!|>|<|\\||&|\\?|\\^|~|\\*|\\+|\\-|\\/|\\%|\\bhex\\b)',
      name: 'keyword.operator'
    },
    {
      captures: {1: {name: 'support.type'}, 2: {name: 'support.type'}},
      match: '\\b(msg|block|tx)\\.([A-Za-z_]\\w*)\\b'
    },
    {
      captures: {1: {name: 'markup.italic'}},
      match: '\\b(blockhash|gasleft)\\s*\\('
    },
    {
      captures: {
        1: {name: 'entity.name.function'},
        2: {name: 'constant.numeric'},
        3: {name: 'constant.numeric'}
      },
      match: '\\b([A-Za-z_]\\w*)(?:\\[(\\d*)\\])?(?:\\[(\\d*)\\])?\\('
    },
    {
      match: '\\b(?:[+-]?\\.?\\d[\\d_eE]*)(?:\\.\\d+[\\deE]*)?\\b',
      name: 'constant.numeric'
    },
    {match: '\\b(0[xX][a-fA-F0-9]+)\\b', name: 'constant.numeric'},
    {
      begin: '(?<!\\\\)[\\"\\\']',
      end: '(?<!\\\\)[\\"\\\']',
      name: 'string.quoted',
      patterns: [{include: '#string'}]
    }
  ],
  repository: {
    string: {
      patterns: [
        {match: '\\\\"', name: 'constant.character.escape'},
        {match: "\\\\'", name: 'constant.character.escape'},
        {match: '.', name: 'string.quoted'}
      ]
    }
  },
  scopeName: 'source.vyper'
}

export default grammar
