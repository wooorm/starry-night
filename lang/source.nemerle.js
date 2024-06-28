// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.n'],
  names: ['nemerle'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.nemerle'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.nemerle'}},
          end: '\\n',
          name: 'comment.line.double-slash.nemerle'
        }
      ]
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.nemerle'}},
      end: '\\*/',
      name: 'comment.block.nemerle'
    },
    {match: '\\b(|false|null|true)\\b', name: 'constant.language.nemerle'},
    {
      match:
        '\\b(([0-9]+(\\.|\\_)?[0-9]*(b|bu|d|f|L|LU|m|u|ub|UL)?)|(0(b|o|x)[0-9]+))\\b',
      name: 'constant.numeric.nemerle'
    },
    {
      match:
        '\\b(catch|else|finally|for|foreach|if|match|repeat|try|unless|when|while)\\b',
      name: 'keyword.control.nemerle'
    },
    {match: '(\\+|\\-|\\*|\\/|\\%)\\=?', name: 'keyword.operator.nemerle'},
    {
      match:
        '\\b(\\_|as|assert|base|checked|do|fun|get|ignore|implements|in|is|lock|namespace|out|params|ref|set|syntax|throw|typeof|unchecked|using|with)\\b',
      name: 'keyword.other.nemerle'
    },
    {
      match:
        '\\b(array|bool|byte|char|class|decimal|double|enum|float|int|interface|list|long|macro|module|object|sbyte|short|string|struct|type|uint|ulong|ushort|variant|void)\\b',
      name: 'storage.type.nemerle'
    },
    {
      match:
        '\\b(abstract|def|delegate|event|extern|internal|mutable|override|public|private|protected|sealed|static|volatile|virtual|new)\\b',
      name: 'storage.modifier.nemerle'
    },
    {match: 'this', name: 'variable.language.nemerle'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nemerle'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nemerle'}},
      name: 'string.quoted.double.nemerle',
      patterns: [
        {
          match: '\\\\(\\\\|\'|\\"|a|b|c[A-Z]+|e|f|n|r|u0+[0-9,A-Z]+|v)',
          name: 'constant.character.escape.nemerle'
        }
      ]
    },
    {
      begin: '\\$"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nemerle'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nemerle'}},
      name: 'string.interpolated.nemerle',
      patterns: [
        {
          match: '\\$[a-z,A-Z]+[a-z,A-Z,0-9]*( |\\+|\\-|\\*|\\/|\\%)',
          name: 'constant.character.escape'
        }
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nemerle'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nemerle'}},
      name: 'string.quoted.single.nemerle',
      patterns: [
        {
          match: '\\\\(\\\\|\'|\\"|a|b|c[A-Z]+|e|f|n|r|u0+[0-9,A-Z]+|v)',
          name: 'constant.character.escape'
        }
      ]
    }
  ],
  scopeName: 'source.nemerle'
}

export default grammar
