// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/MinecraftCommands/syntax-mcfunction>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mcfunction'],
  names: ['mcfunction'],
  patterns: [{include: '#root'}],
  repository: {
    comments: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '^\\s*(#[>!#])(.+)$',
          beginCaptures: {
            1: {name: 'comment.block.mcfunction'},
            2: {name: 'markup.bold.mcfunction'}
          },
          captures: {0: {name: 'comment.block.mcfunction'}},
          end: '^(?!#)',
          name: 'meta.comments',
          patterns: [{include: '#comments_block'}]
        },
        {
          captures: {0: {name: 'comment.line.mcfunction'}},
          match: '^\\s*#.*$',
          name: 'meta.comments'
        }
      ]
    },
    comments_block: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '^\\s*#[>!]',
          captures: {0: {name: 'comment.block.mcfunction'}},
          end: '$',
          name: 'meta.comments_block',
          patterns: [{include: '#comments_block_emphasized'}]
        },
        {
          applyEndPatternLast: true,
          begin: '^\\s*#',
          captures: {0: {name: 'comment.block.mcfunction'}},
          end: '$',
          name: 'meta.comments_block',
          patterns: [{include: '#comments_block_normal'}]
        }
      ]
    },
    comments_block_emphasized: {
      patterns: [
        {include: '#comments_block_special'},
        {
          captures: {0: {name: 'markup.bold.mcfunction'}},
          match: '\\S+',
          name: 'meta.comments_block_emphasized'
        }
      ]
    },
    comments_block_normal: {
      patterns: [
        {include: '#comments_block_special'},
        {
          captures: {0: {name: 'comment.block.mcfunction'}},
          match: '\\S+',
          name: 'meta.comments_block_normal'
        },
        {include: '#whitespace'}
      ]
    },
    comments_block_special: {
      patterns: [
        {
          captures: {0: {name: 'markup.heading.mcfunction'}},
          match: '@\\S+',
          name: 'meta.comments_block_special'
        },
        {include: '#resource-name'},
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '[#%$][A-Za-z0-9_.#%$]+',
          name: 'meta.comments_block_special'
        }
      ]
    },
    comments_inline: {
      patterns: [
        {
          captures: {0: {name: 'comment.line.mcfunction'}},
          match: '#.*$',
          name: 'meta.comments'
        }
      ]
    },
    literals: {
      patterns: [
        {
          captures: {0: {name: 'constant.numeric.boolean.mcfunction'}},
          match: '\\b(true|false|True|False)\\b',
          name: 'meta.literals'
        },
        {
          captures: {0: {name: 'variable.uuid.mcfunction'}},
          match: '\\b[0-9a-fA-F]+(?:-[0-9a-fA-F]+){4}\\b',
          name: 'meta.names'
        },
        {
          captures: {0: {name: 'constant.numeric.float.mcfunction'}},
          match: '[+-]?\\d*\\.?\\d+([eE]?[+-]?\\d+)?[df]?\\b',
          name: 'meta.literals'
        },
        {
          captures: {0: {name: 'constant.numeric.integer.mcfunction'}},
          match: '[+-]?\\d+(b|B|L|l|s|S)?\\b',
          name: 'meta.literals'
        },
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '\\.\\.',
          name: 'meta.ellipse.literals'
        },
        {
          applyEndPatternLast: true,
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mcfunction'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.mcfunction'}
          },
          name: 'string.quoted.double.mcfunction',
          patterns: [{include: '#literals_string-double'}]
        },
        {
          applyEndPatternLast: true,
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mcfunction'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.begin.mcfunction'}
          },
          name: 'string.quoted.single.mcfunction',
          patterns: [{include: '#literals_string-single'}]
        }
      ]
    },
    'literals_string-double': {
      patterns: [
        {
          captures: {0: {name: 'constant.character.escape.mcfunction'}},
          match: '\\\\.',
          name: 'meta.literals_string-double'
        },
        {
          captures: {0: {name: 'constant.character.escape.mcfunction'}},
          match: '\\\\',
          name: 'meta.literals_string-double'
        },
        {include: '#macro-name'},
        {
          captures: {0: {name: 'string.quoted.double.mcfunction'}},
          match: '[^\\\\"]',
          name: 'meta.literals_string-double'
        }
      ]
    },
    'literals_string-single': {
      patterns: [
        {
          captures: {0: {name: 'constant.character.escape.mcfunction'}},
          match: '\\\\.',
          name: 'meta.literals_string-single'
        },
        {
          captures: {0: {name: 'constant.character.escape.mcfunction'}},
          match: '\\\\',
          name: 'meta.literals_string-double'
        },
        {include: '#macro-name'},
        {
          captures: {0: {name: 'string.quoted.single.mcfunction'}},
          match: "[^\\\\']",
          name: 'meta.literals_string-single'
        }
      ]
    },
    'macro-name': {
      patterns: [
        {
          captures: {
            1: {
              name: 'punctuation.definition.template-expression.begin.mcfunction'
            },
            2: {name: 'variable.other.mcfunction'},
            3: {
              name: 'punctuation.definition.template-expression.end.mcfunction'
            }
          },
          match: '(\\$\\()([A-Za-z0-9_]*)(\\))',
          name: 'meta.macro-name'
        }
      ]
    },
    names: {
      patterns: [
        {
          captures: {
            1: {name: 'whitespace.mcfunction'},
            2: {name: 'keyword.control.flow.mcfunction'}
          },
          match: '^(\\s*)([a-z_]+)(?=\\s)',
          name: 'meta.names'
        },
        {
          captures: {
            1: {name: 'whitespace.mcfunction'},
            2: {name: 'markup.italic.mcfunction'},
            3: {name: 'whitespace.mcfunction'},
            4: {name: 'keyword.control.flow.mcfunction'}
          },
          match: '^(\\s*)(\\$)( ?)([a-z_]*)',
          name: 'meta.names'
        },
        {
          captures: {
            1: {name: 'entity.name.mcfunction'},
            2: {name: 'whitespace.mcfunction'},
            3: {name: 'keyword.control.flow.mcfunction'}
          },
          match: '(run)(\\s+)([a-z_]+)',
          name: 'meta.names'
        },
        {include: '#resource-name'},
        {
          captures: {0: {name: 'entity.name.mcfunction'}},
          match: '[A-Za-z]+(?=\\W)',
          name: 'meta.names'
        },
        {
          captures: {0: {name: 'string.unquoted.mcfunction'}},
          match: '[A-Za-z_][A-Za-z0-9_.#%$]*',
          name: 'meta.names'
        },
        {include: '#macro-name'},
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '([#%$]|((?<=\\s)\\.))[A-Za-z0-9_.#%$\\-]+',
          name: 'meta.names'
        }
      ]
    },
    operators: {
      patterns: [
        {
          captures: {0: {name: 'constant.numeric.mcfunction'}},
          match: '[~^]',
          name: 'meta.operators'
        },
        {
          captures: {0: {name: 'keyword.operator.mcfunction'}},
          match: '[\\-%?!+*<>\\\\/|&=.:,;]',
          name: 'meta.operators'
        }
      ]
    },
    property: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\{',
          captures: {0: {name: 'punctuation.mcfunction'}},
          end: '\\}',
          name: 'meta.property.curly',
          patterns: [
            {include: '#resource-name'},
            {include: '#literals'},
            {include: '#property_key'},
            {include: '#operators'},
            {include: '#property_value'},
            {include: '$self'}
          ]
        },
        {
          applyEndPatternLast: true,
          begin: '\\[',
          captures: {0: {name: 'variable.other.mcfunction'}},
          end: '\\]',
          name: 'meta.property.square',
          patterns: [
            {include: '#resource-name'},
            {include: '#literals'},
            {include: '#property_key'},
            {include: '#operators'},
            {include: '#property_value'},
            {include: '$self'}
          ]
        },
        {
          applyEndPatternLast: true,
          begin: '\\(',
          captures: {0: {name: 'punctuation.mcfunction'}},
          end: '\\)',
          name: 'meta.property.paren',
          patterns: [
            {include: '#resource-name'},
            {include: '#literals'},
            {include: '#property_key'},
            {include: '#operators'},
            {include: '#property_value'},
            {include: '$self'}
          ]
        }
      ]
    },
    property_key: {
      patterns: [
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '#?[a-z_][a-z_\\.\\-]*\\:[a-z0-9_\\.\\-/]+(?=\\s*\\=:)',
          name: 'meta.property_key'
        },
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '#?[a-z_][a-z0-9_\\.\\-/]+',
          name: 'meta.property_key'
        },
        {
          captures: {0: {name: 'variable.other.mcfunction'}},
          match: '[A-Za-z_]+[A-Za-z_\\-\\+]*',
          name: 'meta.property_key'
        }
      ]
    },
    property_value: {
      patterns: [
        {
          captures: {0: {name: 'string.unquoted.mcfunction'}},
          match: '#?[a-z_][a-z_\\.\\-]*\\:[a-z0-9_\\.\\-/]+',
          name: 'meta.property_value'
        },
        {
          captures: {0: {name: 'string.unquoted.mcfunction'}},
          match: '#?[a-z_][a-z0-9_\\.\\-/]+',
          name: 'meta.property_value'
        }
      ]
    },
    'resource-name': {
      patterns: [
        {
          captures: {0: {name: 'entity.name.function.mcfunction'}},
          match: '#?[a-z_][a-z0-9_.-]*:[a-z0-9_./-]+',
          name: 'meta.resource-name'
        },
        {
          captures: {0: {name: 'entity.name.function.mcfunction'}},
          match: '#?[a-z0-9_\\.\\-]+\\/[a-z0-9_\\.\\-\\/]+',
          name: 'meta.resource-name'
        }
      ]
    },
    root: {
      patterns: [
        {include: '#literals'},
        {include: '#comments'},
        {include: '#say'},
        {include: '#names'},
        {include: '#comments_inline'},
        {include: '#subcommands'},
        {include: '#property'},
        {include: '#operators'},
        {include: '#selectors'}
      ]
    },
    say: {
      patterns: [
        {
          begin: '^(\\s*)(say)',
          beginCaptures: {
            1: {name: 'whitespace.mcfunction'},
            2: {name: 'keyword.control.flow.mcfunction'}
          },
          end: '\\n',
          name: 'meta.say.mcfunction',
          patterns: [
            {
              captures: {0: {name: 'constant.character.escape.mcfunction'}},
              match: '\\\\\\s*\\n'
            },
            {include: '#literals_string-double'},
            {include: '#literals_string-single'}
          ]
        },
        {
          begin: '(run)(\\s+)(say)',
          beginCaptures: {
            1: {name: 'entity.name.mcfunction'},
            2: {name: 'whitespace.mcfunction'},
            3: {name: 'keyword.control.flow.mcfunction'}
          },
          end: '\\n',
          name: 'meta.say.mcfunction',
          patterns: [
            {
              captures: {0: {name: 'constant.character.escape.mcfunction'}},
              match: '\\\\\\s*\\n'
            },
            {include: '#literals_string-double'},
            {include: '#literals_string-single'}
          ]
        }
      ]
    },
    selectors: {
      patterns: [
        {
          captures: {0: {name: 'support.class.mcfunction'}},
          match: '@[a-z]+',
          name: 'meta.selectors'
        }
      ]
    },
    subcommands: {
      patterns: [
        {
          captures: {0: {name: 'entity.name.class.mcfunction'}},
          match: '[a-z_]+',
          name: 'meta.literals'
        }
      ]
    }
  },
  scopeName: 'source.mcfunction'
}

export default grammar
