// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/qsharp>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.qs'],
  names: ['q#', 'qsharp'],
  patterns: [
    {include: '#comments'},
    {include: '#functions'},
    {include: '#keywords'},
    {include: '#operators'},
    {include: '#types'},
    {include: '#constants'},
    {include: '#strings'},
    {include: '#variables'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '\\/\\/.*$', name: 'comment.line.double-slash'},
        {match: '\\/\\/\\/.*$', name: 'comment.documentation'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b(true|false|Pauli(I|X|Y|Z))\\b',
          name: 'constant.language.qsharp'
        },
        {match: '\\b(One|Zero)\\b', name: 'constant.other.result.qsharp'},
        {match: '\\b[\\d_]*\\.?[\\d_]\\b', name: 'constant.numeric.qsharp'}
      ]
    },
    functions: {
      patterns: [
        {
          begin: '\\b(function)\\s+([A-Za-z0-9_]+)(\\()',
          beginCaptures: {
            1: {name: 'keyword.other.qsharp'},
            2: {name: 'entity.name.function.qsharp'},
            3: {name: 'punctuation.brackets.round.qsharp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.qsharp'}},
          name: 'meta.function.definition.qsharp',
          patterns: [
            {include: '#comments'},
            {include: '#functions'},
            {include: '#keywords'},
            {include: '#operators'},
            {include: '#types'},
            {include: '#constants'},
            {include: '#strings'},
            {include: '#variables'}
          ]
        },
        {
          begin: '\\b(?<!@)([A-Za-z0-9_]+)(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.qsharp'},
            2: {name: 'punctuation.brackets.round.qsharp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.qsharp'}},
          name: 'meta.function.call.qsharp',
          patterns: [
            {include: '#comments'},
            {include: '#functions'},
            {include: '#keywords'},
            {include: '#operators'},
            {include: '#types'},
            {include: '#constants'},
            {include: '#strings'},
            {include: '#variables'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(use|borrow|mutable|let|set|if|elif|else|repeat|until|fixup|for|in|while|return|fail|within|apply)\\b',
          name: 'keyword.control.qsharp'
        },
        {
          match:
            '\\b(namespace|open|import|export|as|internal|newtype|struct|operation|function|new|body|(a|A)djoint|(c|C)ontrolled|self|auto|distribute|invert|intrinsic)\\b',
          name: 'keyword.other.qsharp'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match:
            '\\b(not|and|or)\\b|\\b(w/)|(=)|(!)|(<)|(>)|(\\+)|(-)|(\\*)|(\\/)|(\\^)|(%)|(\\|)|(\\&\\&\\&)|(\\~\\~\\~)|(\\.\\.\\.)|(\\.\\.)|(\\?)',
          name: 'keyword.other.operator.qsharp'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '(\\$|)"',
          end: '"',
          name: 'string.quoted.double.qsharp',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.qsharp'}]
        }
      ]
    },
    types: {
      patterns: [
        {
          match:
            '\\b(Int|BigInt|Double|Bool|Qubit|Pauli|Result|Range|String|Unit|Ctl|Adj|is)\\b',
          name: 'storage.type.qsharp'
        }
      ]
    },
    variables: {
      patterns: [
        {match: '\\b(?<!@)[A-Za-z0-9_]+\\b', name: 'variable.other.qsharp'}
      ]
    }
  },
  scopeName: 'source.qsharp'
}

export default grammar
