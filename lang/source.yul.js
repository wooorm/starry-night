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
  extensions: ['.yul'],
  names: ['yul'],
  patterns: [
    {match: '\\/\\/.*', name: 'comment'},
    {begin: '(\\/\\*)', end: '(\\*\\/)', name: 'comment'},
    {
      captures: {2: {name: 'entity.name.function'}},
      match: '\\b(event|enum)\\s+([A-Za-z_]\\w*)\\b',
      name: 'keyword'
    },
    {
      begin: '\\b(object)\\s+(\\"[A-Za-z_]\\w*\\")(?:\\s+(is)\\s+)?',
      beginCaptures: {
        1: {name: 'keyword'},
        2: {name: 'string.quoted'},
        3: {name: 'keyword'}
      },
      end: '\\{',
      name: 'scope',
      patterns: [
        {match: '\\"[A-Za-z_]\\w*\\"', name: 'string.quoted'},
        {include: '#numbers'}
      ]
    },
    {
      captures: {2: {name: 'entity.name.function'}},
      match:
        '\\b(constructor|error|using|struct|type|modifier|fallback)(\\s+[A-Za-z_]\\w*)?\\b',
      name: 'keyword'
    },
    {
      captures: {2: {name: 'entity.name.function'}},
      match: '\\b(function)(\\s+[A-Za-z_]\\w*)?\\b',
      name: 'keyword'
    },
    {captures: {1: {name: 'markup.italic'}}, match: '\\.(selector)\\b'},
    {match: '\\bthis\\b', name: 'markup.italic'},
    {match: '\\bsuper\\b', name: 'markup.italic'},
    {
      captures: {
        1: {name: 'constant.language'},
        2: {name: 'constant.numeric'},
        3: {name: 'constant.numeric'},
        4: {name: 'keyword'},
        5: {name: 'variable.parameter'}
      },
      match:
        '\\b(address(?:\\s+payable)?|string|bytes?\\d*|int\\d*|uint\\d*|bool|u?fixed\\d+x\\d+)\\s*(?:\\[(\\d*)\\])?\\s*(?:\\[(\\d*)\\])?\\s*(?:(indexed|memory|storage|calldata|payable|immutable)?\\s*(\\b[A-Za-z_]\\w*)?\\s*)?(?=[,\\)\\n])'
    },
    {
      captures: {1: {name: 'keyword'}, 2: {name: 'variable.parameter'}},
      match:
        '\\b(?:(indexed|memory|storage|calldata|payable|immutable)\\s*(\\b[A-Za-z_]\\w*)?\\s*)(?=[,\\)\\n])'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language'},
    {
      captures: {
        1: {name: 'constant.language'},
        2: {name: 'constant.numeric'},
        3: {name: 'constant.numeric'},
        4: {name: 'constant.numeric'},
        5: {name: 'keyword'},
        6: {name: 'keyword'}
      },
      match:
        '\\b(address(?:\\s*payable)?|string|bytes?\\d*|int\\d*|uint\\d*|bool|u?fixed\\d+x\\d+)\\b(?:(?:\\s*\\[(\\d*)\\])?(?:\\s*\\[(\\d*)\\])?(?:\\s*\\[(\\d*)\\])?\\s*((?:private\\s|public\\s|internal\\s|external\\s|constant\\s|immutable\\s|memory\\s|storage\\s)*)\\s*(?:[A-Za-z_]\\w*)\\s*(\\=))?'
    },
    {captures: {1: {name: 'constant.language'}}, match: '\\b(payable)\\s*\\('},
    {captures: {1: {name: 'keyword'}}, match: '\\b(from)\\s*(?=[\\\'\\"])'},
    {
      captures: {1: {name: 'keyword'}},
      match: '\\b(?:[A-Za-z_]\\w*)\\s+(as)\\s+(?:[A-Za-z_]\\w*)'
    },
    {captures: {1: {name: 'keyword'}}, match: '\\b(global);'},
    {
      match:
        '\\b(var|solidity|constant|pragma\\s*(?:experimental|abicoder)?|code|data|hex|import|const|mstruct|mapping|payable|storage|memory|calldata|if|else|for|while|do|break|continue|returns?|try|catch|private|public|pure|view|internal|immutable|external|virtual|override|abstract|suicide|emit|is|throw|revert|assert|require|receive|delete)\\b',
      name: 'keyword'
    },
    {include: '#numbers'},
    {match: '\\b(0[xX][a-fA-F0-9]+)\\b', name: 'constant.numeric'},
    {
      match: '(=|:=|!|>|<|\\||&|\\?|\\^|~|\\*|\\+|\\-|\\/|\\%)',
      name: 'keyword.operator'
    },
    {match: '(\\bhex\\b|\\bunicode\\b)', name: 'markup.italic'},
    {match: '\\s\\:\\s', name: 'keyword.operator'},
    {match: '\\bnow\\b', name: 'support.type'},
    {match: '\\b_;', name: 'keyword'},
    {
      captures: {1: {name: 'support.type'}, 2: {name: 'support.type'}},
      match: '\\b(msg|block|tx)\\.([A-Za-z_]\\w*)\\b'
    },
    {match: '\\b(abi)\\.([A-Za-z_]\\w*)\\b', name: 'support.type'},
    {
      captures: {1: {name: 'support.type'}},
      match: '\\b(blockhash|gasleft)\\s*\\('
    },
    {
      captures: {
        1: {name: 'entity.name.function'},
        2: {name: 'constant.numeric'},
        3: {name: 'constant.numeric'}
      },
      match:
        '\\b([A-Za-z_]\\w*)(?:\\s*\\[(\\d*)\\]\\s*)?(?:\\s*\\[(\\d*)\\]\\s*)?\\('
    },
    {
      captures: {1: {name: 'keyword'}, 2: {name: 'entity.name.function'}},
      match: '(?:\\.|(new\\s+))([A-Za-z_]\\w*)\\{'
    },
    {
      captures: {1: {name: 'support.type'}},
      match: '\\b(wei|gwei|ether|seconds|minutes|hours|days|weeks)\\b'
    },
    {match: '\\bnew\\b', name: 'keyword'},
    {match: '\\banonymous\\b', name: 'keyword'},
    {match: '\\bunchecked\\b', name: 'keyword'},
    {match: '\\b(assembly|switch|let|case|default)\\b', name: 'keyword'},
    {
      begin: '(?<!\\\\)[\\"\\\']',
      end: '(?<!\\\\)[\\"\\\']',
      name: 'string.quoted',
      patterns: [{include: '#string'}]
    }
  ],
  repository: {
    numbers: {
      patterns: [
        {
          match: '\\b(?:[+-]?\\.?\\d[\\d_eE]*)(?:\\.\\d+[\\deE]*)?\\b',
          name: 'constant.numeric'
        }
      ]
    },
    string: {
      patterns: [
        {match: '\\\\"', name: 'constant.character.escape'},
        {match: "\\\\'", name: 'constant.character.escape'},
        {match: '.', name: 'string.quoted'}
      ]
    }
  },
  scopeName: 'source.yul'
}

export default grammar
