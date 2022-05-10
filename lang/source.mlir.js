// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jpienaar/mlir-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.mlir'],
  names: ['mlir'],
  patterns: [
    {include: '#comment'},
    {include: '#string'},
    {
      captures: {
        1: {name: 'keyword.function.mlir'},
        2: {name: 'keyword.function.mlir'},
        3: {name: 'entity.name.function.mlir'}
      },
      match: '\\b(func)\\b\\s*(|private|public)\\s*(@[\\w_][\\w\\d_.$]*)',
      name: 'support.function.mlir'
    },
    {
      match: '\\b(attributes|br|call|constant|loc|return)\\b',
      name: 'keyword.module.mlir'
    },
    {include: '#identifier'},
    {include: '#branch_target'},
    {include: '#attribute'},
    {include: '#types'},
    {include: '#integer'}
  ],
  repository: {
    attribute: {
      match: '\\W[\\w_][\\w\\d_.$]*\\s*=',
      name: 'meta.attribute.mlir'
    },
    branch_target: {
      match: '\\^bb[\\w\\d_$\\.-]+',
      name: 'entity.name.label.mlir'
    },
    comment: {match: '//.*$', name: 'comment.line.double-slash.mlir'},
    identifier: {
      captures: {0: {name: 'variable.mlir'}},
      match: '[\\%#@][\\w_][\\w\\d_.$]*',
      name: 'meta.identifier.mlir'
    },
    integer: {
      captures: {1: {name: 'constant.numeric.mlir'}},
      match: '[\\Wx]([0-9]+)',
      name: 'meta.identifier.mlir'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mlir'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mlir'}},
      name: 'string.quoted.double.mlir',
      patterns: [
        {match: '\\\\[nt"]', name: 'constant.character.escape.mlir'},
        {match: '\\\\.', name: 'invalid.illegal.mlir'}
      ]
    },
    types: {
      captures: {1: {name: 'storage.type.mlir'}},
      match:
        '[\\Wx](index|i[1-9][0-9]*|f16|bf16|f32|f64|memref|tensor|vector)\\b',
      name: 'meta.types.simple.mlir'
    }
  },
  scopeName: 'source.mlir'
}

export default grammar
