// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Arcensoth/language-mcfunction>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.mcfunction'],
  names: ['mcfunction'],
  patterns: [
    {include: '#comment'},
    {include: '#command'},
    {include: '#unknown'}
  ],
  repository: {
    block_predicate: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.mcfunction'},
            2: {name: 'entity.name.function.mcfunction'},
            3: {name: 'entity.name.function.mcfunction'},
            4: {name: 'entity.name.function.mcfunction'}
          },
          match: '(\\#)([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.mcfunction'},
            2: {name: 'entity.name.function.mcfunction'},
            3: {name: 'entity.name.function.mcfunction'}
          },
          match: '([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)'
        },
        {
          captures: {1: {name: 'entity.name.function.mcfunction'}},
          match: '([a-z0-9_\\.\\-\\/]+)'
        },
        {
          begin: '(\\[)',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: '(\\])',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#block_predicate.arguments'}]
        },
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: '(\\})',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#nbt.compound'}]
        }
      ]
    },
    'block_predicate.argument.boolean': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(true|false)(?= *[\\,\\]\\n])',
      name: 'meta.block_predicate.argument.boolean.mcfunction'
    },
    'block_predicate.argument.literal': {
      captures: {1: {name: 'entity.name.mcfunction'}},
      match: '([a-z_][a-z0-9_]*)(?= *[\\,\\]\\n])',
      name: 'meta.block_predicate.argument.literal.mcfunction'
    },
    'block_predicate.argument.number': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(\\-?\\d*\\.?\\d+)(?= *[\\,\\]\\n])',
      name: 'meta.block_predicate.argument.number.mcfunction'
    },
    'block_predicate.arguments': {
      patterns: [
        {match: ' +', name: 'meta.block_predicate.argument_spacing.mcfunction'},
        {
          begin: '([a-z_][a-z0-9_]*) *(\\=) *',
          beginCaptures: {
            1: {name: 'variable.other.mcfunction'},
            2: {name: 'variable.language.mcfunction'}
          },
          end: '(\\,)(?=[\\]\\n])|(\\,)|(?=[\\]\\n])',
          endCaptures: {
            1: {name: 'invalid.illegal.mcfunction'},
            2: {name: 'variable.language.mcfunction'}
          },
          name: 'meta.block_predicate.argument.mcfunction',
          patterns: [
            {include: '#block_predicate.argument.number'},
            {include: '#block_predicate.argument.boolean'},
            {include: '#block_predicate.argument.literal'}
          ]
        }
      ]
    },
    command: {
      patterns: [
        {
          begin: '^\\s*([a-z_][a-z0-9_]*)[ \\n]',
          beginCaptures: {1: {name: 'keyword.control.mcfunction'}},
          end: '$',
          name: 'meta.command.mcfunction',
          patterns: [
            {
              begin: '(?<= )',
              contentName: 'meta.command.token.mcfunction',
              end: '[ \\n]',
              patterns: [{include: '#command.tokens'}]
            }
          ]
        }
      ]
    },
    'command.token.block_predicate': {
      begin:
        '(?<= )(?=(\\#)?([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)(\\[|\\{))',
      end: '(?=\\n)|(?:(?<=\\])(?!\\{)|(?<=\\}))([^ \\n]*)',
      endCaptures: {1: {name: 'invalid.illegal.mcfunction'}},
      name: 'meta.command.token.block_predicate.mcfunction',
      patterns: [{include: '#block_predicate'}]
    },
    'command.token.block_predicate_without_namespace': {
      begin:
        '(?<= )(?=(\\#)?([a-z0-9_\\.\\-\\/]+)(\\[ *([a-z_][a-z0-9_]*) *\\=))',
      end: '(?=\\n)|(?:(?<=\\])(?!\\{)|(?<=\\}))([^ \\n]*)',
      endCaptures: {1: {name: 'invalid.illegal.mcfunction'}},
      name: 'meta.command.token.block_predicate_without_namespace.mcfunction',
      patterns: [{include: '#block_predicate'}]
    },
    'command.token.boolean': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(?<= )(true|false)(?=[ \\n]|$)',
      name: 'meta.command.token.boolean.mcfunction'
    },
    'command.token.coordinate': {
      captures: {
        1: {name: 'constant.numeric.mcfunction'},
        2: {name: 'constant.numeric.mcfunction'}
      },
      match: '(?<= )([\\~\\^])(\\-?\\d*\\.?\\d+)?(?=[ \\n]|$)',
      name: 'meta.command.token.coordinate.mcfunction'
    },
    'command.token.fakeplayer': {
      captures: {1: {name: 'support.class.mcfunction'}},
      match: '(?<= )([\\#\\$\\%]\\S+)(?=[ \\n]|$)',
      name: 'meta.command.token.fakeplayer.mcfunction'
    },
    'command.token.greedy_parent': {
      captures: {
        1: {name: 'entity.name.mcfunction'},
        2: {name: 'string.quoted.mcfunction'}
      },
      match: '((?<=^say | say ))(.*)$',
      name: 'meta.command.token.greedy_parent.mcfunction'
    },
    'command.token.literal': {
      captures: {1: {name: 'entity.name.mcfunction'}},
      match: '(?<= )([a-z_][a-z0-9_]*)(?=[ \\n]|$)',
      name: 'meta.command.token.literal.mcfunction'
    },
    'command.token.nbt_compound': {
      begin: '(?<= )(\\{)',
      beginCaptures: {1: {name: 'variable.language.mcfunction'}},
      end: '(?=\\n)|(\\})([^ \\n]*)',
      endCaptures: {
        1: {name: 'variable.language.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.command.token.nbt_compound.mcfunction',
      patterns: [{include: '#nbt.compound'}]
    },
    'command.token.nbt_list': {
      begin: '(?<= )(\\[)(\\w*;)?',
      beginCaptures: {
        1: {name: 'variable.language.mcfunction'},
        2: {name: 'variable.language.mcfunction'}
      },
      end: '(?=\\n)|(\\])([^ \\n]*)',
      endCaptures: {
        1: {name: 'variable.language.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.command.token.nbt_list.mcfunction',
      patterns: [{include: '#nbt.list'}]
    },
    'command.token.nbt_path': {
      begin: '(?<= )(?=\\w+[\\.\\[\\{])',
      end: '(?=[ \\n]|$)',
      name: 'meta.command.token.nbt_path.mcfunction',
      patterns: [{include: '#nbt_path.property'}]
    },
    'command.token.number': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(?<= )(\\-?\\d*\\.?\\d+)(?=[ \\n]|$)',
      name: 'meta.command.token.number.mcfunction'
    },
    'command.token.operation': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match:
        '(?<= )(\\%\\=|\\*\\=|\\+\\=|\\-\\=|\\/\\=|\\<|\\=|\\>|\\>\\<|\\<\\=|\\>\\=)(?=[ \\n]|$)',
      name: 'meta.command.token.operation.mcfunction'
    },
    'command.token.quoted_string': {
      begin: '(?<= )(\\")',
      beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
      end: '(?=\\n)|(\\")([^ \\n]*)',
      endCaptures: {
        1: {name: 'string.quoted.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.command.token.quoted_string.mcfunction',
      patterns: [{include: '#common.quoted_string'}]
    },
    'command.token.range': {
      captures: {
        1: {name: 'constant.numeric.mcfunction'},
        2: {name: 'keyword.control.mcfunction'},
        3: {name: 'constant.numeric.mcfunction'}
      },
      match: '(?<= )(\\-?\\d*\\.?\\d+)?(\\.\\.)(\\-?\\d*\\.?\\d+)?(?=[ \\n]|$)',
      name: 'meta.command.token.range.mcfunction'
    },
    'command.token.resource_location': {
      captures: {
        1: {name: 'entity.name.function.mcfunction'},
        2: {name: 'entity.name.function.mcfunction'},
        3: {name: 'entity.name.function.mcfunction'}
      },
      match: '(?<= )([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)(?=[ \\n]|$)',
      name: 'meta.command.token.resource_location.mcfunction'
    },
    'command.token.root_redirect': {
      captures: {
        1: {name: 'entity.name.mcfunction'},
        2: {name: 'keyword.control.mcfunction'}
      },
      match: '(?<= )(run) ([a-z_][a-z0-9_]*)?(?=[ \\n]|$)',
      name: 'meta.command.token.root_redirect.mcfunction'
    },
    'command.token.selector_with_arguments': {
      begin: '(?<= )(\\@[a-z])(\\[)',
      beginCaptures: {
        1: {name: 'support.class.mcfunction'},
        2: {name: 'support.class.mcfunction'}
      },
      end: '(?=\\n)|(\\])([^ \\n]*)',
      endCaptures: {
        1: {name: 'support.class.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.command.token.selector_with_arguments.mcfunction',
      patterns: [
        {match: ' +', name: 'meta.selector.argument_spacing.mcfunction'},
        {
          begin:
            '((?:[a-z_][a-z0-9_]*)|(?:"[^"\n]*")|(?:\\\'[^\\\'\n]*\\\')) *(\\=) *(\\!)? *',
          beginCaptures: {
            1: {name: 'variable.other.mcfunction'},
            2: {name: 'support.class.mcfunction'},
            3: {name: 'keyword.control.mcfunction'}
          },
          end: '( *\\,)(?=[\\]\\n])|( *\\,)|(?= *[\\]\\n])',
          endCaptures: {
            1: {name: 'invalid.illegal.mcfunction'},
            2: {name: 'support.class.mcfunction'}
          },
          name: 'meta.selector.argument.mcfunction',
          patterns: [
            {include: '#selector.argument.resource_location'},
            {include: '#selector.argument.tagged_resource_location'},
            {include: '#selector.argument.range'},
            {include: '#selector.argument.number'},
            {include: '#selector.argument.boolean'},
            {include: '#selector.argument.property_map'},
            {include: '#selector.argument.nbt_compound'},
            {include: '#selector.argument.quoted_string'},
            {include: '#selector.argument.single_quoted_string'},
            {include: '#selector.argument.unquoted_string'},
            {include: '#selector.argument.unknown'}
          ]
        },
        {match: '[^\\]\\n]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'command.token.selector_without_arguments': {
      captures: {1: {name: 'support.class.mcfunction'}},
      match: '(?<= )(\\@[a-z])(?=[ \\n]|$)',
      name: 'meta.command.token.selector_without_arguments.mcfunction'
    },
    'command.token.single_quoted_string': {
      begin: "(?<= )(\\')",
      beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
      end: "(?=\\n)|(\\')([^ \\n]*)",
      endCaptures: {
        1: {name: 'string.quoted.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.command.token.single_quoted_string.mcfunction',
      patterns: [{include: '#common.single_quoted_string'}]
    },
    'command.token.tagged_resource_location': {
      captures: {
        1: {name: 'entity.name.function.mcfunction'},
        2: {name: 'entity.name.function.mcfunction'},
        3: {name: 'entity.name.function.mcfunction'},
        4: {name: 'entity.name.function.mcfunction'}
      },
      match:
        '(?<= )(\\#)([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)(?=[ \\n]|$)',
      name: 'meta.command.token.tagged_resource_location.mcfunction'
    },
    'command.token.unknown': {
      captures: {1: {name: 'invalid.illegal.mcfunction'}},
      match: '(?<= )([^ \\n]*)(?=[ \\n]|$)',
      name: 'meta.command.token.unknown.mcfunction'
    },
    'command.token.unquoted_string': {
      captures: {1: {name: 'string.unquoted.mcfunction'}},
      match: '(?<= )(\\S+)(?=[ \\n]|$)',
      name: 'meta.command.token.unquoted_string.mcfunction'
    },
    'command.token.uuid': {
      captures: {1: {name: 'support.class.mcfunction'}},
      match: '(?<= )([0-9a-fA-F]+(?:(-)[0-9a-fA-F]+){4})(?=[ \\n]|$)',
      name: 'meta.command.token.uuid.mcfunction'
    },
    'command.tokens': {
      patterns: [
        {include: '#command.token.nbt_compound'},
        {include: '#command.token.nbt_list'},
        {include: '#command.token.selector_with_arguments'},
        {include: '#command.token.selector_without_arguments'},
        {include: '#command.token.block_predicate'},
        {include: '#command.token.block_predicate_without_namespace'},
        {include: '#command.token.resource_location'},
        {include: '#command.token.tagged_resource_location'},
        {include: '#command.token.range'},
        {include: '#command.token.number'},
        {include: '#command.token.coordinate'},
        {include: '#command.token.boolean'},
        {include: '#command.token.operation'},
        {include: '#command.token.root_redirect'},
        {include: '#command.token.greedy_parent'},
        {include: '#command.token.literal'},
        {include: '#command.token.uuid'},
        {include: '#command.token.fakeplayer'},
        {include: '#command.token.nbt_path'},
        {include: '#command.token.quoted_string'},
        {include: '#command.token.single_quoted_string'},
        {include: '#command.token.unquoted_string'},
        {include: '#command.token.unknown'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '^[ \\t]*((#)([\\#\\>\\~\\!\\@\\$\\%\\^\\*]+)((.*)))$',
          beginCaptures: {
            1: {name: 'comment.block.mcfunction'},
            2: {name: 'markup.list.mcfunction'},
            3: {name: 'markup.list.mcfunction'},
            4: {name: 'markup.bold.mcfunction'},
            5: {name: 'markup.list.mcfunction'}
          },
          end: '^(?![ \\t]*#)',
          name: 'meta.comment.block.mcfunction',
          patterns: [{include: '#comment.block'}]
        },
        {
          captures: {1: {name: 'comment.line.mcfunction'}},
          match: '^[ \\t]*(#.*)$',
          name: 'meta.comment.line.mcfunction'
        }
      ]
    },
    'comment.block': {
      patterns: [
        {
          begin: '^[ \\t]*((#)[ \\t]*)',
          beginCaptures: {
            1: {name: 'comment.block.mcfunction'},
            2: {name: 'markup.list.mcfunction'}
          },
          end: '$',
          name: 'meta.comment.block_line.mcfunction',
          patterns: [{include: '#comment.block.line'}]
        }
      ]
    },
    'comment.block.line': {
      patterns: [
        {
          captures: {
            1: {name: 'comment.block.mcfunction'},
            2: {name: 'markup.heading.mcfunction'},
            3: {name: 'comment.block.mcfunction'}
          },
          match: '((\\@\\w*)\\b(.*))$',
          name: 'meta.comment.block.annotation.mcfunction'
        },
        {
          captures: {
            1: {name: 'comment.block.mcfunction'},
            2: {name: 'markup.list.mcfunction'},
            3: {name: 'markup.bold.mcfunction'},
            4: {name: 'markup.list.mcfunction'}
          },
          match: '(([\\#\\>\\~\\!\\@\\$\\%\\^\\*]+)((.*)))$',
          name: 'meta.comment.block.heading.mcfunction'
        },
        {
          captures: {1: {name: 'comment.block.mcfunction'}},
          match: '(.*)$',
          name: 'meta.comment.block.text.mcfunction'
        }
      ]
    },
    'common.quoted_string': {
      patterns: [
        {match: '[^\\\\\\"\\n]', name: 'string.quoted.mcfunction'},
        {match: '\\\\[^\\n]', name: 'constant.character.escape.mcfunction'},
        {match: '\\\\', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'common.single_quoted_string': {
      patterns: [
        {match: "[^\\\\\\'\\n]", name: 'string.quoted.mcfunction'},
        {match: '\\\\[^\\n]', name: 'constant.character.escape.mcfunction'},
        {match: '\\\\', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'nbt.compound': {
      patterns: [
        {match: ' +'},
        {
          begin: '(,)? *([A-Za-z0-9_\\.\\-]+|\\"[^\\n\\"]+\\") *(\\:) *',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'string.interpolated.mcfunction'},
            3: {name: 'variable.language.mcfunction'}
          },
          end: ' *(?=[\\n\\}\\,])',
          patterns: [{include: '#nbt.value'}]
        },
        {match: '[^\\n\\}\\,]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'nbt.list': {
      patterns: [
        {match: ' +'},
        {
          begin: '(,)? *(?=[^\\n\\]\\,])',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: ' *(?=[\\n\\]\\,])',
          patterns: [{include: '#nbt.value'}]
        },
        {match: '[^\\n\\]\\,]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'nbt.value': {
      patterns: [
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: '(?=\\n)|(\\})',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#nbt.compound'}]
        },
        {
          begin: '(\\[)(\\w*;)?',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'variable.language.mcfunction'}
          },
          end: '(?=\\n)|(\\])',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#nbt.list'}]
        },
        {
          begin: '(\\")',
          beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
          end: '(?=\\n)|(\\")',
          endCaptures: {1: {name: 'string.quoted.mcfunction'}},
          patterns: [{include: '#common.quoted_string'}]
        },
        {
          begin: "(\\')",
          beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
          end: "(?=\\n)|(\\')",
          endCaptures: {1: {name: 'string.quoted.mcfunction'}},
          patterns: [{include: '#common.single_quoted_string'}]
        },
        {match: '(true|false)', name: 'constant.numeric.mcfunction'},
        {match: '(\\-?\\d*\\.?\\d+)', name: 'constant.numeric.mcfunction'},
        {
          match: '([^\\s\\{\\}\\[\\]\\,\\:\\=]+)',
          name: 'string.unquoted.mcfunction'
        },
        {match: '[^\\n\\,\\]\\}]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'nbt_path.index': {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.mcfunction'}},
          match: '(?<=\\[)(\\-?\\d+)(?=\\])'
        },
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: '(?=\\n)|(\\})([^\\]\\,\\n]*)',
          endCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'invalid.illegal.mcfunction'}
          },
          patterns: [{include: '#nbt.compound'}]
        },
        {match: '[^\\n\\]]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'nbt_path.property': {
      patterns: [
        {
          begin: '(\\.)?(\\w+)?(\\[)',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'string.interpolated.mcfunction'},
            3: {name: 'variable.language.mcfunction'}
          },
          end: '(\\])|(?=\\n)',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#nbt_path.index'}]
        },
        {
          begin: '(\\.)?(\\w+)(\\{)',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'string.interpolated.mcfunction'},
            3: {name: 'variable.language.mcfunction'}
          },
          end: '(\\})|(?=\\n)',
          endCaptures: {1: {name: 'variable.language.mcfunction'}},
          patterns: [{include: '#nbt.compound'}]
        },
        {
          begin: '(\\")',
          beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
          end: '(?=\\n)|(\\")([^\\. \\n]*)',
          endCaptures: {
            1: {name: 'string.quoted.mcfunction'},
            2: {name: 'invalid.illegal.mcfunction'}
          },
          patterns: [{include: '#common.quoted_string'}]
        },
        {
          captures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'string.interpolated.mcfunction'}
          },
          match: '(\\.)?(\\w+)'
        },
        {
          captures: {1: {name: 'invalid.illegal.mcfunction'}},
          match: '(\\.)(?=\\.)'
        },
        {match: '[^\\.\\s]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    property_map: {
      patterns: [
        {match: ' +'},
        {
          begin: '(,)? *([A-Za-z0-9_\\.\\-]+) *(\\=) *',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'entity.name.function.mcfunction'},
            3: {name: 'variable.language.mcfunction'}
          },
          end: ' *(?=[\\n\\}\\,])',
          patterns: [{include: '#property_map.values'}]
        },
        {
          begin:
            '(,)? *([a-z0-9_\\.\\-]+\\:[a-z0-9_\\.\\-\\/]+|[a-z0-9_\\.\\-\\/]+) *(\\=) *',
          beginCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'entity.name.function.mcfunction'},
            3: {name: 'variable.language.mcfunction'}
          },
          end: ' *(?=[\\n\\}\\,])',
          patterns: [{include: '#property_map.values'}]
        },
        {match: '[^\\n\\}\\,]+', name: 'invalid.illegal.mcfunction'}
      ]
    },
    'property_map.values': {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.mcfunction'}},
          match: '(true|false)'
        },
        {
          captures: {
            1: {name: 'constant.numeric.mcfunction'},
            2: {name: 'keyword.control.mcfunction'},
            3: {name: 'constant.numeric.mcfunction'}
          },
          match: '(\\-?\\d*\\.?\\d+)?(\\.\\.)(\\-?\\d*\\.?\\d+)?'
        },
        {
          captures: {1: {name: 'constant.numeric.mcfunction'}},
          match: '(\\-?\\d*\\.?\\d+)'
        },
        {
          begin: '(\\{) *',
          beginCaptures: {1: {name: 'variable.language.mcfunction'}},
          end: '(?=\\n)|(\\}) *([^\\}\\,\\n]*)',
          endCaptures: {
            1: {name: 'variable.language.mcfunction'},
            2: {name: 'invalid.illegal.mcfunction'}
          },
          patterns: [{include: '#property_map'}]
        }
      ]
    },
    'selector.argument.boolean': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(true|false)(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.boolean.mcfunction'
    },
    'selector.argument.nbt_compound': {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'variable.language.mcfunction'}},
      end: '(?=\\n)|(\\}) *([^\\]\\,\\n]*)',
      endCaptures: {
        1: {name: 'variable.language.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.selector.argument.nbt_compound.mcfunction',
      patterns: [{include: '#nbt.compound'}]
    },
    'selector.argument.number': {
      captures: {1: {name: 'constant.numeric.mcfunction'}},
      match: '(\\-?\\d*\\.?\\d+)(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.number.mcfunction'
    },
    'selector.argument.property_map': {
      begin:
        '(\\{)(?= *([a-z0-9_\\.\\-]+\\:[a-z0-9_\\.\\-\\/]+|[a-z0-9_\\.\\-\\/]+|([A-Za-z0-9_\\.\\-]+)) *(\\=))',
      beginCaptures: {1: {name: 'variable.language.mcfunction'}},
      end: '(?=\\n)|(\\}) *([^\\]\\,\\n]*)',
      endCaptures: {
        1: {name: 'variable.language.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.selector.argument.property_map.mcfunction',
      patterns: [{include: '#property_map'}]
    },
    'selector.argument.quoted_string': {
      begin: '(\\")',
      beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
      end: '(?=\\n)|(\\") *([^\\]\\,\\n]*)',
      endCaptures: {
        1: {name: 'string.quoted.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.selector.argument.quoted_string.mcfunction',
      patterns: [{include: '#common.quoted_string'}]
    },
    'selector.argument.range': {
      captures: {
        1: {name: 'constant.numeric.mcfunction'},
        2: {name: 'keyword.control.mcfunction'},
        3: {name: 'constant.numeric.mcfunction'}
      },
      match: '(\\-?\\d*\\.?\\d+)?(\\.\\.)(\\-?\\d*\\.?\\d+)?(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.range.mcfunction'
    },
    'selector.argument.resource_location': {
      captures: {
        1: {name: 'entity.name.function.mcfunction'},
        2: {name: 'entity.name.function.mcfunction'},
        3: {name: 'entity.name.function.mcfunction'}
      },
      match: '([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.resource_location.mcfunction'
    },
    'selector.argument.single_quoted_string': {
      begin: "(\\')",
      beginCaptures: {1: {name: 'string.quoted.mcfunction'}},
      end: "(?=\\n)|(\\') *([^\\]\\,\\n]*)",
      endCaptures: {
        1: {name: 'string.quoted.mcfunction'},
        2: {name: 'invalid.illegal.mcfunction'}
      },
      name: 'meta.selector.argument.single_quoted_string.mcfunction',
      patterns: [{include: '#common.single_quoted_string'}]
    },
    'selector.argument.tagged_resource_location': {
      captures: {
        1: {name: 'entity.name.function.mcfunction'},
        2: {name: 'entity.name.function.mcfunction'},
        3: {name: 'entity.name.function.mcfunction'},
        4: {name: 'entity.name.function.mcfunction'}
      },
      match:
        '(\\#)([a-z0-9_\\.\\-]+)(\\:)([a-z0-9_\\.\\-\\/]+)(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.tagged_resource_location.mcfunction'
    },
    'selector.argument.unknown': {
      captures: {1: {name: 'invalid.illegal.mcfunction'}},
      match: '([^\\]\\n\\,]+)',
      name: 'meta.selector.argument.unknown.mcfunction'
    },
    'selector.argument.unquoted_string': {
      captures: {1: {name: 'string.unquoted.mcfunction'}},
      match: '([^\\s\\{\\}\\[\\]\\,\\:\\=\\!]+)(?= *[\\,\\]\\n])',
      name: 'meta.selector.argument.unquoted_string.mcfunction'
    },
    unknown: {
      patterns: [
        {
          captures: {1: {name: 'invalid.illegal.mcfunction'}},
          match: '^(.*)$',
          name: 'meta.unknown.mcfunction'
        }
      ]
    }
  },
  scopeName: 'source.mcfunction'
}

export default grammar
