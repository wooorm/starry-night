// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/samuela/language-pyret>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.arr'],
  names: ['pyret'],
  patterns: [
    {
      match: '(!|->|=>|:=|\\[|\\]|{|}|:\\s)',
      name: 'keyword.other.delimiters.arr'
    },
    {match: '(\\(|\\)|\\.|::|=)', name: 'variable.arr'},
    {match: '(\\|)', name: 'storage.type.delimiters.arr'},
    {
      match: '(?<!-)(\\b|^)[A-Z][A-Za-z]*(?!-)(\\b|$)',
      name: 'entity.name.type.arr'
    },
    {
      match:
        '(?x)(?<!-)(\\b|^) (end|block:|type|type-let|newtype|include|import|provide|provide-types|as| fun|lam|doc:|where:|check:|examples:| is==|is=~|is<=>|is-not==|is-not=~|is-not<=>|is|is-not|satisfies|violates| raises|does-not-raise|raises-violates|raises-satisfies|raises-other-than| data|with:|sharing:|deriving| for|from|and|or|not| if|else|when|cases|ask|then:|otherwise:) (?!-)(\\b|$)',
      name: 'keyword.operators.arr'
    },
    {
      match:
        '(?x)(?<!-)(\\b|^) (var|ref|shadow|let|letrec|rec|method) (?!-)(\\b|$)',
      name: 'storage.modifier.arr'
    },
    {
      match: '(?<!-)(\\b|^)(true|false|nothing)(?!-)(\\b|$)',
      name: 'constant.language'
    },
    {
      match: '( \\+ | - | \\/ | \\* | > | < | >= | <= | <> )',
      name: 'keyword.operator.arr'
    },
    {begin: '(#\\|)', end: '(\\|#)', name: 'comment.block.arr'},
    {match: '#.*$', name: 'comment.line.number-sign.arr'},
    {match: "'[^']*'", name: 'string.quoted.single.arr'},
    {match: '"[^"]*"', name: 'string.quoted.double.arr'},
    {begin: '```', end: '```', name: 'string.quoted.triple.arr'},
    {match: "'[^']*$", name: 'invalid.illegal'},
    {match: '"[^"]*$', name: 'invalid.illegal'},
    {
      match: '(?<![a-zA-Z0-9_-])-?[0-9]+([/.][0-9]+)?',
      name: 'constant.numeric.arr'
    },
    {
      match: '(?<![a-zA-Z0-9_-])~-?[0-9]+(\\.[0-9]+)?',
      name: 'constant.other.arr'
    }
  ],
  scopeName: 'source.arr'
}

export default grammar
