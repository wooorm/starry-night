// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jpienaar/mlir-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mlir'],
  names: ['mlir'],
  patterns: [
    {include: '#comment'},
    {include: '#string'},
    {include: '#top_level_entity'}
  ],
  repository: {
    attribute_alias_def: {
      captures: {1: {name: 'constant.language.mlir'}},
      match: '^\\s*(\\#\\w+)\\b\\s+\\='
    },
    attribute_dictionary_body: {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#attribute_value'},
        {
          match: '(\\%)?\\b([\\w\\.\\-\\$\\:0-9]+)\\b\\s*(?=\\=|\\,|\\})',
          name: 'variable.other.mlir'
        }
      ]
    },
    attribute_value: {
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#number'},
        {match: '\\b(false|true|unit)\\b', name: 'constant.language.mlir'},
        {
          begin: '\\b(affine_map|affine_set)\\s*\\<',
          beginCaptures: {1: {name: 'constant.language.mlir'}},
          end: '\\)\\>',
          patterns: [
            {
              match: '\\b(ceildiv|floordiv|mod|symbol)\\b',
              name: 'entity.name.function.mlir'
            },
            {match: '\\b([\\w\\.\\$\\-]+)\\b', name: 'variable.mlir'},
            {include: '#number'}
          ]
        },
        {
          begin: '\\b(dense|opaque|sparse)\\s*\\<',
          beginCaptures: {1: {name: 'constant.language.mlir'}},
          end: '\\>',
          patterns: [{include: '#attribute_value'}]
        },
        {
          begin: '\\[',
          end: '\\]',
          patterns: [
            {include: '#attribute_value'},
            {include: '#operation_body'}
          ]
        },
        {
          begin: '\\{',
          end: '\\}',
          patterns: [{include: '#attribute_dictionary_body'}]
        },
        {match: '(\\@[\\w+\\$\\-\\.]*)', name: 'entity.name.function.mlir'},
        {
          begin: '(\\#[\\w\\$\\-\\.]+)\\<',
          beginCaptures: {1: {name: 'constant.language.mlir'}},
          end: '\\>',
          patterns: [
            {include: '#attribute_value'},
            {match: '\\-\\>|\\>\\='},
            {include: '#bare_identifier'}
          ]
        },
        {match: '\\#[\\w\\$\\-\\.]+\\b', name: 'constant.language.mlir'},
        {include: '#type_value'},
        {
          begin: '\\<',
          end: '\\>',
          patterns: [
            {include: '#attribute_value'},
            {include: '#bare_identifier'}
          ]
        }
      ]
    },
    bare_identifier: {
      match: '\\b([\\w\\.\\$\\-]+)\\b',
      name: 'keyword.other.mlir'
    },
    block: {match: '\\^[\\w\\d_$\\.-]+', name: 'keyword.control.mlir'},
    comment: {match: '//.*$', name: 'comment.line.double-slash.mlir'},
    number: {
      patterns: [
        {
          match: '(\\W)?([0-9]+\\.[0-9]*)([eE][+-]?[0-9]+)?',
          name: 'constant.numeric.mlir'
        },
        {
          captures: {2: {name: 'constant.numeric.mlir'}},
          match: '([\\W])?(0x[0-9a-zA-Z]+)'
        },
        {
          captures: {2: {name: 'constant.numeric.mlir'}},
          match: '([\\Wx])?([0-9]+)'
        }
      ]
    },
    operation: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#ssa_value'}]},
            2: {name: 'variable.other.enummember.mlir'}
          },
          match: '^\\s*(\\%[\\%\\w\\:\\,\\s]+)\\s+\\=\\s+([\\w\\.\\$\\-]+)\\b'
        },
        {
          match: '^\\s*([\\w\\.\\$\\-]+)\\b(?=[^\\<\\:])',
          name: 'variable.other.enummember.mlir'
        }
      ]
    },
    operation_body: {
      patterns: [
        {include: '#operation'},
        {include: '#region_body_or_attr_dict'},
        {include: '#comment'},
        {include: '#ssa_value'},
        {include: '#block'},
        {include: '#attribute_value'},
        {include: '#bare_identifier'}
      ]
    },
    region_body_or_attr_dict: {
      patterns: [
        {
          begin: '\\{\\s*(?=\\%|\\/|\\^)',
          end: '\\}',
          patterns: [{include: '#operation_body'}]
        },
        {
          begin: '\\{\\s*(?=[^\\}]*$)',
          end: '\\}',
          patterns: [{include: '#operation_body'}]
        },
        {
          begin: '\\{\\s*(?=\\%)',
          end: '\\}',
          patterns: [{include: '#operation_body'}]
        },
        {
          begin: '\\{\\s*(?=.*$)',
          end: '\\}',
          patterns: [{include: '#attribute_dictionary_body'}]
        }
      ]
    },
    ssa_value: {match: '\\%[\\w\\.\\$\\:\\#]+', name: 'variable.other.mlir'},
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mlir'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mlir'}},
      name: 'string.quoted.double.mlir',
      patterns: [{match: '\\\\[nt"]', name: 'constant.character.escape.mlir'}]
    },
    top_level_entity: {
      patterns: [
        {include: '#attribute_alias_def'},
        {include: '#type_alias_def'},
        {include: '#operation_body'}
      ]
    },
    type_alias_def: {
      captures: {1: {name: 'entity.name.type.mlir'}},
      match: '^\\s*(\\!\\w+)\\b\\s+\\='
    },
    type_value: {
      patterns: [
        {
          begin: '(\\![\\w\\$\\-\\.]+)\\<',
          beginCaptures: {1: {name: 'entity.name.type.mlir'}},
          end: '\\>',
          patterns: [
            {include: '#attribute_value'},
            {match: '\\-\\>|\\>\\=', name: 'punctuation.other.mlir'},
            {include: '#bare_identifier'}
          ]
        },
        {match: '\\![\\w\\$\\-\\.]+\\b', name: 'entity.name.type.mlir'},
        {
          begin: '(complex|memref|tensor|tuple|vector)\\<',
          beginCaptures: {1: {name: 'entity.name.type.mlir'}},
          end: '\\>',
          patterns: [
            {
              captures: {0: {patterns: [{include: '#number'}]}},
              match: '[\\?x0-9\\[\\]]+'
            },
            {include: '#attribute_value'},
            {match: '\\-\\>|\\>\\=', name: 'punctuation.other.mlir'},
            {include: '#bare_identifier'}
          ]
        },
        {
          match: 'bf16|f16|f32|f64|f80|f128|index|none|(u|s)?i[0-9]+',
          name: 'entity.name.type.mlir'
        }
      ]
    }
  },
  scopeName: 'source.mlir'
}

export default grammar
