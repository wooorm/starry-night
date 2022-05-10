// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.graphql', '.gql', '.graphqls'],
  names: ['graphql'],
  patterns: [{include: '#graphql'}],
  repository: {
    graphql: {
      patterns: [
        {include: '#graphql-fragment-definition'},
        {include: '#graphql-type-interface'},
        {include: '#graphql-enum'},
        {include: '#graphql-scalar'},
        {include: '#graphql-union'},
        {include: '#graphql-schema'},
        {include: '#graphql-operation-def'},
        {include: '#graphql-comment'},
        {include: '#graphql-directive'},
        {include: '#graphql-blockstring-value'},
        {include: '#graphql-string-value'}
      ]
    },
    'graphql-arguments': {
      begin: '\\s*(\\()',
      beginCaptures: {1: {name: 'meta.brace.round.directive.graphql'}},
      end: '\\s*(\\))',
      endCaptures: {1: {name: 'meta.brace.round.directive.graphql'}},
      name: 'meta.arguments.graphql',
      patterns: [
        {include: '#graphql-comment'},
        {
          begin: '\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(:))?',
          beginCaptures: {
            1: {name: 'variable.arguments.graphql'},
            2: {name: 'punctuation.colon.graphql'}
          },
          end: '(?=\\s*(?:(?:([_A-Za-z][_0-9A-Za-z]*)\\s*(:))|\\)))|\\s*(,)',
          endCaptures: {3: {name: 'punctuation.comma.graphql'}},
          patterns: [
            {include: '#graphql-value'},
            {include: '#graphql-comment'},
            {include: '#graphql-skip-newlines'}
          ]
        }
      ]
    },
    'graphql-blockstring-value': {
      begin: '\\s*+(("""))',
      beginCaptures: {
        1: {name: 'string.quoted.block.graphql'},
        2: {name: 'punctuation.definition.string.begin.graphql'}
      },
      contentName: 'string.quoted.block.graphql',
      end: '\\s*+(?:((""")))',
      endCaptures: {
        1: {name: 'string.quoted.block.graphql'},
        2: {name: 'punctuation.definition.string.end.graphql'}
      },
      patterns: [{include: '#graphql-string-content'}]
    },
    'graphql-boolean-value': {
      captures: {1: {name: 'constant.boolean.graphql'}},
      match: '\\s*\\b(true|false)\\b'
    },
    'graphql-colon': {
      captures: {1: {name: 'punctuation.colon.graphql'}},
      match: '\\s*(:)'
    },
    'graphql-comma': {
      captures: {1: {name: 'punctuation.comma.graphql'}},
      match: '\\s*(,)'
    },
    'graphql-comment': {
      captures: {1: {name: 'punctuation.whitespace.comment.leading.graphql'}},
      match: '(\\s*)(#).*',
      name: 'comment.line.graphql.js'
    },
    'graphql-directive': {
      applyEndPatternLast: true,
      begin: '\\s*((@)\\s*([_A-Za-z][_0-9A-Za-z]*))',
      beginCaptures: {1: {name: 'entity.name.function.directive.graphql'}},
      end: '(?=.)',
      patterns: [
        {include: '#graphql-arguments'},
        {include: '#graphql-comment'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-enum': {
      begin: '\\s*+\\b(enum)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)',
      beginCaptures: {
        1: {name: 'keyword.enum.graphql'},
        2: {name: 'support.type.enum.graphql'}
      },
      end: '(?<=})',
      name: 'meta.enum.graphql',
      patterns: [
        {
          begin: '\\s*({)',
          beginCaptures: {1: {name: 'punctuation.operation.graphql'}},
          end: '\\s*(})',
          endCaptures: {1: {name: 'punctuation.operation.graphql'}},
          name: 'meta.type.object.graphql',
          patterns: [
            {include: '#graphql-object-type'},
            {include: '#graphql-comment'},
            {include: '#graphql-enum-value'},
            {include: '#graphql-blockstring-value'},
            {include: '#graphql-string-value'}
          ]
        }
      ]
    },
    'graphql-enum-value': {
      match: '\\s*(?!=\\b(true|false|null)\\b)([_A-Za-z][_0-9A-Za-z]*)',
      name: 'constant.character.enum.graphql'
    },
    'graphql-field': {
      patterns: [
        {
          captures: {
            1: {name: 'string.unquoted.alias.graphql'},
            2: {name: 'punctuation.colon.graphql'}
          },
          match: '\\s*([_A-Za-z][_0-9A-Za-z]*)\\s*(:)'
        },
        {
          captures: {1: {name: 'variable.graphql'}},
          match: '\\s*([_A-Za-z][_0-9A-Za-z]*)'
        },
        {include: '#graphql-arguments'},
        {include: '#graphql-directive'},
        {include: '#graphql-selection-set'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-float-value': {
      captures: {1: {name: 'constant.float.graphql'}},
      match: '\\s*((-)?(0|([1-9]\\d*)(\\.\\d*)?((e|E)(\\+|-)?\\d*)?))'
    },
    'graphql-fragment-definition': {
      begin:
        '\\s*(?:(\\bfragment\\b)\\s*(?!\\bon\\b)([_A-Za-z][_0-9A-Za-z]*)\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*)))',
      captures: {
        1: {name: 'keyword.fragment.graphql'},
        2: {name: 'entity.name.fragment.graphql'},
        3: {name: 'keyword.on.graphql'},
        4: {name: 'support.type.graphql'}
      },
      end: '(?<=})',
      name: 'meta.fragment.graphql',
      patterns: [
        {include: '#graphql-comment'},
        {include: '#graphql-selection-set'},
        {include: '#graphql-directive'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-fragment-spread': {
      applyEndPatternLast: true,
      begin: '\\s*(\\.\\.\\.)\\s*(?!\\bon\\b)([_A-Za-z][_0-9A-Za-z]*)',
      captures: {
        1: {name: 'keyword.operator.spread.graphql'},
        2: {name: 'variable.fragment.graphql'}
      },
      end: '(?=.)',
      patterns: [
        {include: '#graphql-comment'},
        {include: '#graphql-selection-set'},
        {include: '#graphql-directive'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-inline-fragment': {
      applyEndPatternLast: true,
      begin: '\\s*(\\.\\.\\.)\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*))?',
      captures: {
        1: {name: 'keyword.operator.spread.graphql'},
        2: {name: 'keyword.on.graphql'},
        3: {name: 'support.type.graphql'}
      },
      end: '(?=.)',
      patterns: [
        {include: '#graphql-comment'},
        {include: '#graphql-selection-set'},
        {include: '#graphql-directive'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-input-types': {
      patterns: [
        {include: '#graphql-scalar-type'},
        {
          captures: {
            1: {name: 'support.type.graphql'},
            2: {name: 'keyword.operator.nulltype.graphql'}
          },
          match: '\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(!))?'
        },
        {
          begin: '\\s*(\\[)',
          captures: {
            1: {name: 'meta.brace.squart.graphql'},
            2: {name: 'keyword.operator.nulltype.graphql'}
          },
          end: '\\s*(\\])(?:\\s*(!))?',
          name: 'meta.type.list.graphql',
          patterns: [
            {include: '#graphql-input-types'},
            {include: '#graphql-comment'},
            {include: '#graphql-comma'}
          ]
        }
      ]
    },
    'graphql-int-value': {
      captures: {1: {name: 'constant.int.graphql'}},
      match: '\\s*((-)?(0|[1-9][0-9]*))'
    },
    'graphql-list-value': {
      patterns: [
        {
          begin: '\\s*+(\\[)',
          beginCaptures: {1: {name: 'meta.brace.square.graphql'}},
          end: '\\s*(\\])',
          endCaptures: {1: {name: 'meta.brace.square.graphql'}},
          name: 'meta.listvalues.graphql',
          patterns: [{include: '#graphql-value'}]
        }
      ]
    },
    'graphql-name': {
      captures: {1: {name: 'entity.name.function.graphql'}},
      match: '\\s*([_A-Za-z][_0-9A-Za-z]*)'
    },
    'graphql-object-field': {
      captures: {
        1: {name: 'constant.object.key.graphql'},
        2: {name: 'string.unquoted.graphql'},
        3: {name: 'punctuation.graphql'}
      },
      match: '\\s*(([_A-Za-z][_0-9A-Za-z]*))\\s*(:)'
    },
    'graphql-object-value': {
      patterns: [
        {
          begin: '\\s*+({)',
          beginCaptures: {1: {name: 'meta.brace.curly.graphql'}},
          end: '\\s*(})',
          endCaptures: {1: {name: 'meta.brace.curly.graphql'}},
          name: 'meta.objectvalues.graphql',
          patterns: [
            {include: '#graphql-object-field'},
            {include: '#graphql-value'}
          ]
        }
      ]
    },
    'graphql-operation-def': {
      patterns: [
        {include: '#graphql-query-mutation'},
        {include: '#graphql-name'},
        {include: '#graphql-variable-definitions'},
        {include: '#graphql-directive'},
        {include: '#graphql-selection-set'}
      ]
    },
    'graphql-query-mutation': {
      captures: {1: {name: 'keyword.operation.graphql'}},
      match: '\\s*\\b(query|mutation)\\b'
    },
    'graphql-scalar': {
      captures: {
        1: {name: 'keyword.scalar.graphql'},
        2: {name: 'entity.scalar.graphql'}
      },
      match: '\\s*\\b(scalar)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)'
    },
    'graphql-scalar-type': {
      captures: {
        1: {name: 'support.type.builtin.graphql'},
        2: {name: 'keyword.operator.nulltype.graphql'}
      },
      match: '\\s*\\b(Int|Float|String|Boolean|ID)\\b(?:\\s*(!))?'
    },
    'graphql-schema': {
      begin: '\\s*\\b(schema)\\b',
      beginCaptures: {1: {name: 'keyword.schema.graphql'}},
      end: '(?<=})',
      patterns: [
        {
          begin: '\\s*({)',
          beginCaptures: {1: {name: 'punctuation.operation.graphql'}},
          end: '\\s*(})',
          endCaptures: {1: {name: 'punctuation.operation.graphql'}},
          patterns: [
            {
              begin: '\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)',
              beginCaptures: {1: {name: 'variable.arguments.graphql'}},
              end: '(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)',
              endCaptures: {5: {name: 'punctuation.comma.graphql'}},
              patterns: [
                {
                  captures: {1: {name: 'support.type.graphql'}},
                  match: '\\s*([_A-Za-z][_0-9A-Za-z]*)'
                },
                {include: '#graphql-colon'},
                {include: '#graphql-comment'},
                {include: '#graphql-directive'},
                {include: '#graphql-skip-newlines'}
              ]
            },
            {include: '#graphql-comment'},
            {include: '#graphql-skip-newlines'}
          ]
        },
        {include: '#graphql-directive'},
        {include: '#graphql-comment'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-selection-set': {
      begin: '\\s*({)',
      beginCaptures: {1: {name: 'punctuation.operation.graphql'}},
      end: '\\s*(})',
      endCaptures: {1: {name: 'punctuation.operation.graphql'}},
      name: 'meta.selectionset.graphql',
      patterns: [
        {include: '#graphql-field'},
        {include: '#graphql-fragment-spread'},
        {include: '#graphql-inline-fragment'},
        {include: '#graphql-comma'},
        {include: '#graphql-comment'}
      ]
    },
    'graphql-skip-newlines': {match: '\\s*\n'},
    'graphql-string-content': {
      patterns: [
        {
          match: '\\\\[/\'"\\\\nrtbf]',
          name: 'constant.character.escape.graphql'
        },
        {
          match: '\\\\u([0-9a-fA-F]{4})',
          name: 'constant.character.escape.graphql'
        }
      ]
    },
    'graphql-string-value': {
      begin: '\\s*+(("))',
      beginCaptures: {
        1: {name: 'string.quoted.double.graphql'},
        2: {name: 'punctuation.definition.string.begin.graphql'}
      },
      contentName: 'string.quoted.double.graphql',
      end: '\\s*+(?:(("))|(\n))',
      endCaptures: {
        1: {name: 'string.quoted.double.graphql'},
        2: {name: 'punctuation.definition.string.end.graphql'},
        3: {name: 'invalid.illegal.newline.graphql'}
      },
      patterns: [{include: '#graphql-string-content'}]
    },
    'graphql-type-definition': {
      begin: '\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)',
      beginCaptures: {1: {name: 'variable.graphql'}},
      end: '(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)',
      endCaptures: {5: {name: 'punctuation.comma.graphql'}},
      patterns: [
        {include: '#graphql-directive'},
        {include: '#graphql-comment'},
        {include: '#graphql-variable-definitions'},
        {include: '#graphql-type-object'},
        {include: '#graphql-colon'},
        {include: '#graphql-input-types'}
      ]
    },
    'graphql-type-interface': {
      begin:
        '\\s*\\b(?:(extends)?\\b\\s*\\b(type)|(interface)|(input))\\b\\s*([_A-Za-z][_0-9A-Za-z]*)?',
      captures: {
        1: {name: 'keyword.type.graphql'},
        2: {name: 'keyword.type.graphql'},
        3: {name: 'keyword.interface.graphql'},
        4: {name: 'keyword.input.graphql'},
        5: {name: 'support.type.graphql'}
      },
      end: '(?<=})',
      name: 'meta.type.interface.graphql',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.implements.graphql'},
            2: {name: 'keyword.implements.graphql'},
            3: {name: 'support.type.graphql'}
          },
          match: '\\s*(?:\\b(implements)\\b|(&))\\s*([_A-Za-z][_0-9A-Za-z]*)'
        },
        {include: '#graphql-comment'},
        {include: '#graphql-directive'},
        {include: '#graphql-type-object'}
      ]
    },
    'graphql-type-object': {
      begin: '\\s*({)',
      beginCaptures: {1: {name: 'punctuation.operation.graphql'}},
      end: '\\s*(})',
      endCaptures: {1: {name: 'punctuation.operation.graphql'}},
      name: 'meta.type.object.graphql',
      patterns: [
        {include: '#graphql-object-type'},
        {include: '#graphql-comment'},
        {include: '#graphql-type-definition'},
        {include: '#graphql-blockstring-value'},
        {include: '#graphql-string-value'}
      ]
    },
    'graphql-union': {
      applyEndPatternLast: true,
      begin: '\\s*\\b(union)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)',
      captures: {
        1: {name: 'keyword.union.graphql'},
        2: {name: 'support.type.graphql'}
      },
      end: '(?=.)',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\s*(=)\\s*([_A-Za-z][_0-9A-Za-z]*)',
          captures: {
            1: {name: 'punctuation.assignment.graphql'},
            2: {name: 'support.type.graphql'}
          },
          end: '(?=.)',
          patterns: [
            {include: '#graphql-skip-newlines'},
            {include: '#graphql-comment'},
            {
              captures: {
                1: {name: 'punctuation.or.graphql'},
                2: {name: 'support.type.graphql'}
              },
              match: '\\s*(\\|)\\s*([_A-Za-z][_0-9A-Za-z]*)'
            }
          ]
        },
        {include: '#graphql-skip-newlines'},
        {include: '#graphql-comment'},
        {include: '#literal-quasi-embedded'}
      ]
    },
    'graphql-union-mark': {
      captures: {1: {name: 'punctuation.union.graphql'}},
      match: '\\s*(\\|)'
    },
    'graphql-value': {
      patterns: [
        {include: '#graphql-variable-name'},
        {include: '#graphql-float-value'},
        {include: '#graphql-int-value'},
        {include: '#graphql-blockstring-value'},
        {include: '#graphql-string-value'},
        {include: '#graphql-boolean-value'},
        {include: '#graphql-enum-value'},
        {include: '#graphql-list-value'},
        {include: '#graphql-object-value'},
        {include: '#graphql-comment'},
        {include: '#literal-quasi-embedded'}
      ]
    },
    'graphql-variable-assignment': {
      applyEndPatternLast: true,
      begin: '\\s(=)',
      beginCaptures: {1: {name: 'punctuation.assignment.graphql'}},
      end: '(?=.)',
      patterns: [{include: '#graphql-value'}]
    },
    'graphql-variable-definition': {
      begin: '\\s*(\\$?[_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)',
      beginCaptures: {1: {name: 'variable.graphql'}},
      end: '(?=\\s*((\\$?[_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(}|\\))))|\\s*(,)',
      endCaptures: {5: {name: 'punctuation.comma.graphql'}},
      name: 'meta.variables.graphql',
      patterns: [
        {include: '#graphql-comment'},
        {include: '#graphql-colon'},
        {include: '#graphql-input-types'},
        {include: '#graphql-variable-assignment'},
        {include: '#graphql-skip-newlines'}
      ]
    },
    'graphql-variable-definitions': {
      begin: '\\s*(\\()',
      captures: {1: {name: 'meta.brace.round.graphql'}},
      end: '\\s*(\\))',
      patterns: [
        {include: '#graphql-comment'},
        {include: '#graphql-variable-definition'},
        {include: '#graphql-blockstring-value'},
        {include: '#graphql-string-value'}
      ]
    },
    'graphql-variable-name': {
      captures: {1: {name: 'variable.graphql'}},
      match: '\\s*(\\$[_A-Za-z][_0-9A-Za-z]*)'
    }
  },
  scopeName: 'source.graphql'
}

export default grammar
