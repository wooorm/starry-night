// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ton-blockchain/ton-language-server>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tolk'],
  names: ['tolk'],
  patterns: [
    {match: '//(.*)', name: 'comment.line.double-slash'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block'},
    {
      begin: '"""',
      end: '"""',
      name: 'string.quoted.triple.tolk',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.tolk'}]
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.tolk',
      patterns: [
        {match: '\\\\([nrt\\\\\'"])', name: 'constant.character.escape.tolk'}
      ]
    },
    {
      match: '\\b(-?(0x[0-9a-fA-F_]*|0b[01_]*|[0-9][0-9_]*))\\b',
      name: 'constant.numeric'
    },
    {
      match:
        '\\b(do|if|try|else|while|for|break|throw|catch|return|assert|repeat|continue|asm|builtin|match|lazy)\\b',
      name: 'keyword.control'
    },
    {
      match:
        '\\+|-|\\*|/|%|\\?|:|,|;|\\(|\\)|\\[|\\]|{|}|=|<|>|!|&|\\||\\^|==|!=|<=|>=|<<|>>|&&|\\|\\||~/|\\^/|\\+=|-=|\\*=|/=|%=|&=|\\|=|\\^=|->|<=>|~>>|\\^>>|<<=|>>=|=>|\\?\\?',
      name: 'keyword.operator'
    },
    {
      match:
        '\\b(import|export|namespace|true|false|null|mutate|tolk|as|is|private|readonly)\\b',
      name: 'keyword.other'
    },
    {match: '\\bself\\b', name: 'keyword.other'},
    {match: '(?<!\\.)\\b[TUKV]\\b', name: 'entity.name.type.parameter'},
    {
      captures: {1: {name: 'storage.modifier'}},
      match:
        '\\b(val|var)\\s+(?:type|enum|int|map|array|cell|Cell|void|dict|bool|any_address|slice|string|tuple|builder|continuation|never|unknown|coins|address|varint16|varint32|varuint16|varuint32|int\\d+|uint\\d+|bits\\d+|bytes\\d+)\\b'
    },
    {match: '\\b[A-Z][A-Z0-9_]{2,}\\b', name: 'constant.other'},
    {
      match:
        '(?<!\\.)\\b(type|enum|int|map|array|cell|Cell|void|dict|bool|any_address|slice|string|tuple|builder|continuation|never|unknown|coins|varint16|varint32|varuint16|varuint32|int\\d+|uint\\d+|bits\\d+|bytes\\d+)\\b',
      name: 'storage.type'
    },
    {match: '(?<!\\.)\\baddress\\b(?!\\s*:)', name: 'storage.type'},
    {
      match: '\\b(global|const|var|val|fun|get|struct|contract)\\b',
      name: 'storage.modifier'
    },
    {
      begin: '(@)(?=[A-Za-z0-9_])',
      beginCaptures: {1: {name: 'entity.name.function.decorator'}},
      end: '(?![A-Za-z0-9_.])',
      patterns: [
        {match: '[A-Za-z0-9_]+', name: 'entity.name.function.decorator'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.operator.accessor'},
        2: {name: 'entity.name.function'}
      },
      match:
        '(\\.)?(`[^`]+`|[a-zA-Z$_][a-zA-Z0-9$_]*)(?=\\s*(?:<[^()\\n]*>)?\\s*\\()'
    },
    {
      captures: {
        1: {name: 'keyword.operator.accessor'},
        2: {name: 'variable.other.property'}
      },
      match: '(\\.)(`[^`]+`|[a-zA-Z$_][a-zA-Z0-9$_]*)'
    },
    {match: '(?<!\\.)\\b[A-Z][a-zA-Z0-9]*\\b', name: 'entity.name.type'}
  ],
  scopeName: 'source.tolk'
}

export default grammar
