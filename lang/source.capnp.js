// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.capnp'],
  names: ["cap'n-proto"],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.other.struct.capnp'},
        2: {name: 'entity.name.type.capnp'}
      },
      match: '\\b(struct)(?:\\s+([A-Za-z]+))?'
    },
    {
      match: '\\b(using|import|union|enum|const|interface|annotation)\\b',
      name: 'keyword.other.capnp'
    },
    {
      match:
        ':(Void|Bool|U?Int(8|16|32|64)|Float(32|64)|Text|Data|List\\([.a-zA-Z0-9()]*\\)|Object|union|group)',
      name: 'storage.type.builtin.capnp'
    },
    {match: ':[.a-zA-Z0-9()]+', name: 'storage.type.custom.capnp'},
    {match: '\\b(true|false|void)\\b', name: 'constant.language.capnp'},
    {
      match: '\\b(0x[0-9A-Fa-f]+|\\d+(\\.\\d+)?)\\b',
      name: 'constant.numeric.capnp'
    },
    {match: '@0x[0-9A-Fa-f]+', name: 'constant.numeric.unique-id.capnp'},
    {match: '@\\d+', name: 'constant.numeric.ordinal.capnp'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.capnp',
      patterns: [{match: '\\.', name: 'constant.character.escape.capnp'}]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.capnp'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.capnp'}},
          end: '\\n',
          name: 'comment.line.number-sign.capnp'
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.section.block.begin.capnp'},
        2: {name: 'punctuation.section.block.end.capnp'}
      },
      match: '(\\{)(\\})'
    }
  ],
  scopeName: 'source.capnp'
}

export default grammar
