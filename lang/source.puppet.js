// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/russCloak/SublimePuppet>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['puppet'],
  patterns: [
    {include: '#line_comment'},
    {begin: '^\\s*/\\*', end: '\\*/', name: 'comment.block.puppet'},
    {
      begin:
        '(?x)^\\s*\n\t\t\t\t\t(node|class)\\s+\n\t\t\t\t\t((?:[-_A-Za-z0-9".]+::)*[-_A-Za-z0-9".]+)\\s* # identifier',
      captures: {
        1: {name: 'storage.type.puppet'},
        2: {name: 'entity.name.type.class.puppet'}
      },
      end: '(?={)',
      name: 'meta.definition.class.puppet',
      patterns: [
        {include: '#variables'},
        {include: '#constants'},
        {include: '#strings'},
        {include: '#numbers'},
        {
          begin: '\\b(inherits)\\b\\s+',
          captures: {1: {name: 'storage.modifier.puppet'}},
          end: '(?={)',
          name: 'meta.definition.class.inherits.puppet',
          patterns: [
            {
              match: '\\b((?:[-_A-Za-z0-9".]+::)*[-_A-Za-z0-9".]+)\\b',
              name: 'support.type.puppet'
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(define)\\s+([a-zA-Z0-9_:]+)\\s*(\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.puppet'},
        2: {name: 'entity.name.function.puppet'},
        3: {name: 'punctuation.definition.parameters.begin.puppet'}
      },
      contentName: 'meta.function.arguments.puppet',
      end: '\\)',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.puppet'}},
      name: 'meta.function.puppet',
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.puppet'},
            2: {name: 'punctuation.definition.variable.puppet'}
          },
          match:
            '((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\\s*(?=,|\\))',
          name: 'meta.function.argument.no-default.puppet'
        },
        {
          begin:
            '((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(?:\\s*(=)\\s*)\\s*',
          captures: {
            1: {name: 'variable.other.puppet'},
            2: {name: 'punctuation.definition.variable.puppet'},
            3: {name: 'keyword.operator.assignment.puppet'}
          },
          end: '(?=,|\\))',
          name: 'meta.function.argument.default.puppet',
          patterns: [{include: '#parameter-default-types'}]
        }
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.puppet'},
        2: {name: 'entity.name.section.puppet'}
      },
      match: '^\\s*(\\S+)\\s*{\\s*([\'"].+[\'"]):',
      name: 'meta.definition.resource.puppet'
    },
    {
      match: '\\b(case|if|unless|else|elsif)(?!::)',
      name: 'keyword.control.puppet'
    },
    {
      match:
        '((\\$?)"?[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*"?):(?=\\s+|$)',
      name: 'entity.name.section.puppet'
    },
    {include: '#strings'},
    {include: '#variable'},
    {include: '#constants'},
    {
      begin: '(?i)\\b(import|include)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.include.puppet'}},
      end: '(?=\\s|$)',
      name: 'meta.include.puppet'
    },
    {match: '\\b\\w+\\s*(?==>)\\s*', name: 'constant.other.key.puppet'},
    {match: '(?<={)\\s*\\w+\\s*(?=})', name: 'constant.other.bareword.puppet'},
    {
      match:
        '\\b(escape|gsub|alert|crit|debug|notice|defined|emerg|err|failed|file|generate|include|info|realize|search|tag|tagged|template|warning)\\b',
      name: 'support.function.puppet'
    }
  ],
  repository: {
    constants: {
      patterns: [
        {
          match:
            '(?i)\\b(false|true|running|undef|present|absent|file|directory)\\b',
          name: 'constant.language.puppet'
        }
      ]
    },
    'double-quoted-string': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.puppet'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.puppet'}},
      name: 'string.quoted.double.puppet',
      patterns: [{include: '#escaped_char'}, {include: '#variable'}]
    },
    escaped_char: {match: '\\\\.', name: 'constant.character.escape.puppet'},
    line_comment: {
      patterns: [
        {
          captures: {
            1: {name: 'comment.line.number-sign.puppet'},
            2: {name: 'punctuation.definition.comment.puppet'}
          },
          match: '^((#).*$\\n?)',
          name: 'meta.comment.full-line.puppet'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.puppet'}},
          match: '(#).*$\\n?',
          name: 'comment.line.number-sign.puppet'
        }
      ]
    },
    nested_braces: {
      begin: '\\{',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\}',
      patterns: [{include: '#escaped_char'}, {include: '#nested_braces'}]
    },
    nested_braces_interpolated: {
      begin: '\\{',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\}',
      patterns: [
        {include: '#escaped_char'},
        {include: '#variable'},
        {include: '#nested_braces_interpolated'}
      ]
    },
    nested_brackets: {
      begin: '\\[',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\]',
      patterns: [{include: '#escaped_char'}, {include: '#nested_brackets'}]
    },
    nested_brackets_interpolated: {
      begin: '\\[',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\]',
      patterns: [
        {include: '#escaped_char'},
        {include: '#variable'},
        {include: '#nested_brackets_interpolated'}
      ]
    },
    nested_parens: {
      begin: '\\(',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\)',
      patterns: [{include: '#escaped_char'}, {include: '#nested_parens'}]
    },
    nested_parens_interpolated: {
      begin: '\\(',
      captures: {1: {name: 'punctuation.section.scope.puppet'}},
      end: '\\)',
      patterns: [
        {include: '#escaped_char'},
        {include: '#variable'},
        {include: '#nested_parens_interpolated'}
      ]
    },
    'parameter-default-types': {
      patterns: [
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#variables'},
        {match: '=', name: 'keyword.operator.assignment.php'},
        {
          begin: '(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.array.begin.puppet'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.definition.array.end.puppet'}},
          name: 'meta.array.php',
          patterns: [{include: '#parameter-default-types'}]
        },
        {include: '#constants'}
      ]
    },
    'single-quoted-string': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.puppet'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.puppet'}},
      name: 'string.quoted.single.puppet',
      patterns: [{include: '#escaped_char'}]
    },
    strings: {
      patterns: [
        {include: '#double-quoted-string'},
        {include: '#single-quoted-string'}
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.puppet'}},
          match: '(\\$)([a-zA-Zx7f-xff\\$]|::)([a-zA-Z0-9_x7f-xff\\$]|::)*\\b',
          name: 'variable.other.readwrite.global.puppet'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.puppet'},
            2: {name: 'punctuation.definition.variable.puppet'}
          },
          match:
            '(\\$\\{)(?:[a-zA-Zx7f-xff\\$]|::)(?:[a-zA-Z0-9_x7f-xff\\$]|::)*(\\})',
          name: 'variable.other.readwrite.global.puppet'
        }
      ]
    }
  },
  scopeName: 'source.puppet'
}

export default grammar
