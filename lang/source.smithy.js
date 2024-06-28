// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/awslabs/smithy-vscode>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.smithy'],
  names: ['smithy'],
  patterns: [
    {include: '#comment'},
    {
      begin: '^(\\$)([A-Z-a-z_][A-Z-a-z0-9_]*)(:)\\s*',
      beginCaptures: {
        1: {name: 'keyword.statement.control.smithy'},
        2: {name: 'support.type.property-name.smithy'},
        3: {name: 'punctuation.separator.dictionary.pair.smithy'}
      },
      end: '\\n',
      name: 'meta.keyword.statement.control.smithy',
      patterns: [
        {include: '#value'},
        {match: '[^\\n]', name: 'invalid.illegal.control.smithy'}
      ]
    },
    {
      begin: '^(metadata)\\s+(.+)\\s*(=)\\s*',
      beginCaptures: {
        1: {name: 'keyword.statement.smithy'},
        2: {name: 'variable.other.smithy'},
        3: {name: 'keyword.operator.smithy'}
      },
      end: '\\n',
      name: 'meta.keyword.statement.metadata.smithy',
      patterns: [{include: '#value'}]
    },
    {
      begin: '^(namespace)\\s+',
      beginCaptures: {1: {name: 'keyword.statement.smithy'}},
      end: '\\n',
      name: 'meta.keyword.statement.namespace.smithy',
      patterns: [
        {
          match: '[A-Z-a-z_][A-Z-a-z0-9_]*(\\.[A-Z-a-z_][A-Z-a-z0-9_]*)*',
          name: 'entity.name.type.smithy'
        },
        {match: '[^\\n]', name: 'invalid.illegal.namespace.smithy'}
      ]
    },
    {
      begin: '^(use)\\s+',
      beginCaptures: {1: {name: 'keyword.statement.smithy'}},
      end: '\\n',
      name: 'meta.keyword.statement.use.smithy',
      patterns: [
        {
          match:
            '[A-Z-a-z_][A-Z-a-z0-9_]*(\\.[A-Z-a-z_][A-Z-a-z0-9_]*)*#[A-Z-a-z_][A-Z-a-z0-9_]*(\\.[A-Z-a-z_][A-Z-a-z0-9_]*)*',
          name: 'entity.name.type.smithy'
        },
        {match: '[^\\n]', name: 'invalid.illegal.use.smithy'}
      ]
    },
    {include: '#trait'},
    {
      begin:
        '^(byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|document|list|set|map|union|service|operation|resource|enum|intEnum)\\s+([A-Z-a-z_][A-Z-a-z0-9_]*)\\s+(with)\\s+(\\[)',
      beginCaptures: {
        1: {name: 'keyword.statement.smithy'},
        2: {name: 'entity.name.type.smithy'},
        3: {name: 'keyword.statement.with.smithy'},
        4: {name: 'punctuation.definition.array.begin.smithy'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.smithy'}},
      name: 'meta.keyword.statement.shape.smithy',
      patterns: [
        {include: '#identifier', name: 'entity.name.type.smithy'},
        {include: '#comment'},
        {match: ',', name: 'punctuation.separator.array.smithy'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.statement.smithy'},
        2: {name: 'entity.name.type.smithy'}
      },
      match:
        '^(byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|document|list|set|map|union|service|operation|resource|enum|intEnum)\\s+([A-Z-a-z_][A-Z-a-z0-9_]*)',
      name: 'meta.keyword.statement.shape.smithy'
    },
    {
      begin:
        '^(structure)\\s+([A-Z-a-z_][A-Z-a-z0-9_]*)(?:\\s+(for)\\s+([0-9a-zA-Z\\.#-]+))?\\s+(with)\\s+(\\[)',
      beginCaptures: {
        1: {name: 'keyword.statement.smithy'},
        2: {name: 'entity.name.type.smithy'},
        3: {name: 'keyword.statement.for-resource.smithy'},
        4: {name: 'entity.name.type.smithy'},
        5: {name: 'keyword.statement.with.smithy'},
        6: {name: 'punctuation.definition.array.begin.smithy'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.smithy'}},
      name: 'meta.keyword.statement.shape.smithy',
      patterns: [
        {include: '#identifier', name: 'entity.name.type.smithy'},
        {include: '#comment'},
        {match: ',', name: 'punctuation.separator.array.smithy'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.statement.smithy'},
        2: {name: 'entity.name.type.smithy'},
        3: {name: 'keyword.statement.for-resource.smithy'},
        4: {name: 'entity.name.type.smithy'}
      },
      match:
        '^(structure)\\s+([A-Z-a-z_][A-Z-a-z0-9_]*)(?:\\s+(for)\\s+([0-9a-zA-Z\\.#-]+))?',
      name: 'meta.keyword.statement.shape.smithy'
    },
    {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.smithy'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.dictionary.end.smithy'}},
      patterns: [{include: '#shape_inner'}]
    },
    {
      begin: '^(apply)\\s+',
      beginCaptures: {1: {name: 'keyword.statement.smithy'}},
      end: '\\n',
      name: 'meta.keyword.statement.apply.smithy',
      patterns: [
        {include: '#trait'},
        {include: '#shapeid'},
        {match: '[^\\n]', name: 'invalid.illegal.apply.smithy'}
      ]
    }
  ],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.array.begin.smithy'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.smithy'}},
      name: 'meta.structure.array.smithy',
      patterns: [
        {include: '#value'},
        {match: ',', name: 'punctuation.separator.array.smithy'},
        {match: '[^\\s\\]]', name: 'invalid.illegal.array.smithy'}
      ]
    },
    comment: {
      patterns: [{include: '#doc_comment'}, {include: '#line_comment'}]
    },
    doc_comment: {match: '(///.*)', name: 'comment.block.documentation.smithy'},
    dquote: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.smithy'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.smithy'}},
      name: 'string.quoted.double.smithy',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.smithy'}]
    },
    dquote_key: {
      match: '".*"(?=\\s*:)',
      name: 'support.type.property-name.smithy'
    },
    elided_target: {
      captures: {
        1: {name: 'keyword.statement.elision.smithy'},
        2: {name: 'support.type.property-name.smithy'}
      },
      match: '(\\$)([A-Z-a-z0-9_\\.#$]+)'
    },
    identifier: {
      match: '[A-Z-a-z_][A-Z-a-z0-9_]*',
      name: 'entity.name.type.smithy'
    },
    identifier_key: {
      match: '[A-Z-a-z0-9_\\.#$]+(?=\\s*:)',
      name: 'support.type.property-name.smithy'
    },
    keywords: {
      match: '\\b(?:true|false|null)\\b',
      name: 'constant.language.smithy'
    },
    line_comment: {match: '(//.*)', name: 'comment.line.double-slash.smithy'},
    number: {
      match:
        '(?x:            # turn on extended mode\n                         -?         # an optional minus\n                         (?:\n                           0        # a zero\n                           |        # ...or...\n                           [1-9]    # a 1-9 character\n                           \\d*      # followed by zero or more digits\n                         )\n                         (?:\n                           (?:\n                             \\.     # a period\n                             \\d+    # followed by one or more digits\n                           )?\n                           (?:\n                             [eE]   # an e character\n                             [+-]?  # followed by an option +/-\n                             \\d+    # followed by one or more digits\n                           )?       # make exponent optional\n                         )?         # make decimal portion optional\n                       )',
      name: 'constant.numeric.smithy'
    },
    object: {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.smithy'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.dictionary.end.smithy'}},
      name: 'meta.structure.dictionary.smithy',
      patterns: [{include: '#object_inner'}]
    },
    object_inner: {
      patterns: [
        {include: '#comment'},
        {include: '#string_key'},
        {match: ':', name: 'punctuation.separator.dictionary.key-value.smithy'},
        {match: '=', name: 'keyword.operator.smithy'},
        {include: '#value', name: 'meta.structure.dictionary.value.smithy'},
        {match: ',', name: 'punctuation.separator.dictionary.pair.smithy'}
      ]
    },
    shape_inner: {
      patterns: [
        {include: '#trait'},
        {
          match: ':=',
          name: 'punctuation.separator.dictionary.inline-struct.smithy'
        },
        {include: '#with_statement'},
        {include: '#elided_target'},
        {include: '#object_inner'}
      ]
    },
    shapeid: {
      match: '[A-Z-a-z_][A-Z-a-z0-9_\\.#$]*',
      name: 'entity.name.type.smithy'
    },
    string: {
      patterns: [
        {include: '#textblock'},
        {include: '#dquote'},
        {include: '#shapeid'}
      ]
    },
    string_key: {
      patterns: [{include: '#identifier_key'}, {include: '#dquote_key'}]
    },
    textblock: {
      begin: '"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.smithy'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.smithy'}},
      name: 'string.quoted.double.smithy',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.smithy'}]
    },
    trait: {
      patterns: [
        {
          begin: '(@)([0-9a-zA-Z\\.#-]+)(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.annotation.smithy'},
            2: {name: 'storage.type.annotation.smithy'},
            3: {name: 'punctuation.definition.dictionary.begin.smithy'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.dictionary.end.smithy'}
          },
          name: 'meta.keyword.statement.trait.smithy',
          patterns: [{include: '#object_inner'}, {include: '#value'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.annotation.smithy'},
            2: {name: 'storage.type.annotation.smithy'}
          },
          match: '(@)([0-9a-zA-Z\\.#-]+)',
          name: 'meta.keyword.statement.trait.smithy'
        }
      ]
    },
    value: {
      patterns: [
        {include: '#comment'},
        {include: '#keywords'},
        {include: '#number'},
        {include: '#string'},
        {include: '#array'},
        {include: '#object'}
      ]
    },
    with_statement: {
      begin: '(with)\\s+(\\[)',
      beginCaptures: {
        1: {name: 'keyword.statement.with.smithy'},
        2: {name: 'punctuation.definition.array.begin.smithy'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.smithy'}},
      patterns: [
        {match: ',', name: 'punctuation.separator.array.smithy'},
        {include: '#identifier'},
        {include: '#comment'}
      ]
    }
  },
  scopeName: 'source.smithy'
}

export default grammar
