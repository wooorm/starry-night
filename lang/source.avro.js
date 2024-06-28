// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Jason3S/avro.tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.avdl'],
  names: ['avro-idl'],
  patterns: [
    {include: '#comments'},
    {include: '#decorators'},
    {include: '#protocol'},
    {include: '#contents'}
  ],
  repository: {
    collections: {
      name: 'meta.collection',
      patterns: [
        {
          begin: '\\b(array|map)\\s*<',
          beginCaptures: {1: {name: 'storage.type.collection.avro'}},
          contentName: 'meta.type.collection.avro',
          end: '>',
          patterns: [
            {include: '#types'},
            {include: '#comments'},
            {include: '#decorators'},
            {include: '#declared_type'}
          ]
        }
      ]
    },
    comments: {
      name: 'meta.comments',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.avro'}},
          end: '$',
          name: 'comment.line.double-slash.avro'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.avro'}},
          end: '\\*/',
          name: 'comment.block.avro'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.avro'},
        {match: '\\b[A-Z][A-Z0-9_]*\\b', name: 'constant.language.avro'},
        {match: '\\b-?[0-9]+(\\.[0-9]*)?\\b', name: 'constant.numeric.avro'}
      ]
    },
    contents: {
      patterns: [
        {include: '#decorators'},
        {include: '#record'},
        {include: '#error'},
        {include: '#declaration'},
        {include: '#comments'},
        {include: '#import'},
        {include: '#union'},
        {include: '#fixed'},
        {include: '#function'},
        {include: '#keywords'},
        {include: '#strings'},
        {include: '#collections'},
        {include: '#throws'},
        {include: '#constants'},
        {include: '#declared_type'}
      ]
    },
    decimal: {
      captures: {
        1: {name: 'support.type.logical.avro'},
        2: {
          name: 'meta.decimal.length',
          patterns: [
            {include: '#comments'},
            {match: '\\b[0-9]+\\b', name: 'constant.numeric.avro'}
          ]
        },
        3: {
          name: 'meta.decimal.avro',
          patterns: [
            {include: '#comments'},
            {include: '#decorators'},
            {include: '#variable'}
          ]
        }
      },
      match: '\\b(decimal)\\s*\\(([^)]+)\\)([^;]*)'
    },
    declaration: {
      patterns: [
        {
          begin: '\\b(enum)\\s+(\\w+)\\s*{',
          beginCaptures: {
            1: {name: 'keyword.struct.enum.avro'},
            2: {name: 'entity.name.type.avro'}
          },
          contentName: 'meta.enum.declaration.avro',
          end: '}',
          patterns: [
            {include: '#comments'},
            {include: '#decorators'},
            {match: '\\b\\w+\\b', name: 'variable.other.enummember.avro'}
          ]
        }
      ]
    },
    declared_type: {match: '\\w+', name: 'entity.name.type'},
    decorators: {
      patterns: [
        {
          begin: '(@[-\\w]+)\\s*\\(',
          beginCaptures: {
            1: {
              name: 'meta.decorator.name.avro',
              patterns: [
                {
                  match: '@(aliases|namespace|order)',
                  name: 'keyword.control.avro'
                },
                {match: '@[-\\w]+', name: 'entity.name.tag.avro'}
              ]
            }
          },
          contentName: 'meta.decorator.avro',
          end: '\\)',
          name: 'meta.decorator',
          patterns: [{include: '#object'}]
        }
      ]
    },
    error: {
      patterns: [
        {
          begin: '\\b(error)\\s+(\\w*)\\s*{',
          beginCaptures: {
            1: {name: 'keyword.struct.error.avro'},
            2: {name: 'entity.name.type.avro'}
          },
          contentName: 'meta.error.avro',
          end: '}',
          patterns: [
            {include: '#comments'},
            {include: '#decorators'},
            {include: '#field'}
          ]
        }
      ]
    },
    field: {
      begin: '(?=\\S)',
      end: ';',
      name: 'meta.field',
      patterns: [
        {include: '#decorators'},
        {include: '#field_base_type_entry'},
        {include: '#field_user_type_entry'}
      ]
    },
    field_base_type_entry: {
      begin:
        '(?=(?:map|array|union|int|long|string|boolean|float|double|null|bytes|decimal|date|time_ms|timestamp_ms))',
      end: '(?=;)',
      name: 'meta.field.base.avro',
      patterns: [
        {include: '#types'},
        {include: '#decorators'},
        {include: '#variable'},
        {include: '#comments'},
        {include: '#field_default_value'}
      ]
    },
    field_default_value: {
      begin: '=',
      end: '(?=;)',
      name: 'meta.default.avro',
      patterns: [
        {include: '#strings'},
        {include: '#object'},
        {include: '#constants'}
      ]
    },
    field_user_type_entry: {
      begin: '\\b\\w+',
      beginCaptures: {0: {name: 'entity.name.type.avro'}},
      end: '(?=;)',
      name: 'meta.field.user.avro',
      patterns: [
        {include: '#decorators'},
        {include: '#variable'},
        {include: '#comments'},
        {include: '#field_default_value'}
      ]
    },
    fixed: {
      captures: {
        1: {name: 'support.type.logical.avro'},
        2: {
          name: 'meta.fixed.avro',
          patterns: [
            {include: '#comments'},
            {include: '#decorators'},
            {match: '\\w+', name: 'entity.name.type.avro'}
          ]
        },
        3: {
          name: 'meta.fixed.length',
          patterns: [
            {include: '#comments'},
            {match: '\\b[0-9]+\\b', name: 'constant.numeric.avro'}
          ]
        }
      },
      match: '\\b(fixed)\\b([^(]+)\\(([^)]+)\\)'
    },
    function: {
      begin: '\\b([\\w`]+)\\s*\\(',
      beginCaptures: {
        1: {
          name: 'meta.function.name.avro',
          patterns: [{match: '\\w+', name: 'entity.name.function.avro'}]
        }
      },
      contentName: 'meta.function.parameters.avro',
      end: '\\)',
      name: 'meta.function',
      patterns: [{include: '#function_param'}]
    },
    function_param: {
      begin: '(?!=\\))',
      end: ',|(?=\\))',
      name: 'meta.function.param',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {
            0: {
              name: 'meta.function.param.type',
              patterns: [{include: '#types'}, {include: '#declared_type'}]
            }
          },
          end: ',|(?=\\))',
          patterns: [
            {include: '#decorators'},
            {include: '#variable'},
            {include: '#comments'},
            {include: '#function_param_default_value'}
          ]
        },
        {include: '#comments'},
        {include: '#decorators'}
      ]
    },
    function_param_default_value: {
      begin: '=',
      end: '(?=[,)])',
      name: 'meta.default.avro',
      patterns: [
        {include: '#strings'},
        {include: '#object'},
        {include: '#constants'}
      ]
    },
    import: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.avro'},
            2: {name: 'keyword.avro'},
            3: {patterns: [{include: '#strings'}]}
          },
          match: '\\b(import)\\s+(idl|protocol|schema)\\s+([^;]+);'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(protocol|record)\\b', name: 'keyword.struct.avro'},
        {match: '\\b(oneway)\\b', name: 'keyword.other.avro'},
        {
          match: '(@namespace|@extends|@import)\\b',
          name: 'keyword.control.avro'
        },
        {include: '#types'},
        {match: '\\b(true|false|null)\\b', name: 'constant.language.avro'},
        {match: '\\b[A-Z][A-Z0-9_]*\\b', name: 'constant.language.avro'}
      ]
    },
    object: {
      patterns: [
        {begin: '\\[', end: '\\]', patterns: [{include: '#object'}]},
        {begin: '{', end: '}', patterns: [{include: '#object'}]},
        {include: '#strings'},
        {include: '#constants'},
        {include: '#comments'}
      ]
    },
    protocol: {
      patterns: [
        {
          begin: '\\b(protocol)\\s+(\\w+)\\s*{',
          beginCaptures: {
            1: {name: 'keyword.struct.avro'},
            2: {name: 'entity.name.type.avro'}
          },
          end: '}',
          patterns: [{include: '#contents'}]
        }
      ]
    },
    record: {
      patterns: [
        {
          begin: '\\b(record)\\s+(\\w+)\\s*{',
          beginCaptures: {
            1: {name: 'keyword.struct.record.avro'},
            2: {name: 'entity.name.type.avro'}
          },
          contentName: 'meta.record.avro',
          end: '}',
          patterns: [{include: '#comments'}, {include: '#field'}]
        }
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.avro',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.avro'}]
    },
    throws: {
      begin: '\\bthrows\\b',
      beginCaptures: {0: {name: 'keyword.control.avro'}},
      end: '(?=;)',
      name: 'meta.throws',
      patterns: [
        {include: '#comments'},
        {match: '\\b\\w+\\b', name: 'entity.name.type.avro'}
      ]
    },
    types: {
      patterns: [
        {include: '#union'},
        {include: '#decimal'},
        {include: '#collections'},
        {
          match: '\\b(int|long|string|boolean|float|double|null|bytes)\\b',
          name: 'support.type.primitive.avro'
        },
        {
          match: '\\b(date|time_ms|timestamp_ms|uuid)\\b',
          name: 'support.type.logical.avro'
        },
        {match: '\\b(uint|void)\\b', name: 'support.type.primitive.avro'}
      ]
    },
    union: {
      patterns: [
        {
          begin: '\\b(union)\\s*{',
          beginCaptures: {1: {name: 'keyword.struct.union.avro'}},
          contentName: 'meta.type.union.avro',
          end: '}',
          patterns: [
            {include: '#comments'},
            {include: '#types'},
            {include: '#declared_type'}
          ]
        }
      ]
    },
    variable: {
      captures: {
        1: {name: 'variable.name.escape.avro'},
        2: {name: 'variable.name.avro'},
        3: {name: 'variable.name.escape.avro'}
      },
      match: '(`?)(\\w+)(`?)'
    }
  },
  scopeName: 'source.avro'
}

export default grammar
