// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jtbandes/ros-tmlanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.action', '.srv'],
  names: ['ros-interface', 'rosmsg'],
  patterns: [
    {include: '#separators'},
    {include: '#lines'},
    {include: '#comments'}
  ],
  repository: {
    attributes: {
      match: '@optional\\b',
      name: 'storage.modifier.attribute.rosmsg'
    },
    'builtin-types': {
      match:
        '\\b(?:bool|byte|char|u?int(?:8|16|32|64)|float(?:32|64)|w?string|time|duration)\\b',
      name: 'storage.type.rosmsg'
    },
    comments: {match: '#.*', name: 'comment.line.number-sign.rosmsg'},
    'field-other': {
      begin: '(?=\\b[a-zA-Z_])',
      end: '$|(?=#)',
      patterns: [
        {
          captures: {0: {patterns: [{include: '#builtin-types'}]}},
          match: '\\G[a-zA-Z0-9_/]+',
          name: 'support.type.rosmsg'
        },
        {match: '\\d+', name: 'constant.numeric.integer.rosmsg'},
        {
          begin: '(?=[a-zA-Z_])',
          end: '$|(?=#)',
          patterns: [{include: '#field-other-after-type'}]
        }
      ]
    },
    'field-other-after-type': {
      patterns: [
        {match: '\\G[a-zA-Z0-9_]+', name: 'variable.other.field.rosmsg'},
        {
          end: '$|(?=#)',
          patterns: [
            {include: '#literal-other'},
            {include: '#literal-other-array'}
          ]
        }
      ]
    },
    'field-string': {
      begin: '(?=\\bw?string\\b)',
      end: '$|(?=#)',
      patterns: [
        {captures: {0: {name: 'storage.type.rosmsg'}}, match: '\\Gw?string\\b'},
        {match: '\\d+', name: 'constant.numeric.integer.rosmsg'},
        {
          begin: '(?=[a-zA-Z_])',
          end: '$|(?=#)',
          patterns: [{include: '#field-string-after-type'}]
        }
      ]
    },
    'field-string-after-type': {
      patterns: [
        {match: '\\G[a-zA-Z0-9_]+', name: 'variable.other.field.rosmsg'},
        {
          begin: '=|(?<=\\s)',
          end: '$|(?=#)',
          patterns: [{include: '#literal-string'}]
        }
      ]
    },
    'field-string-array': {
      begin: '(?=\\bw?string[<=\\d]*\\[)',
      end: '$|(?=#)',
      patterns: [
        {
          captures: {0: {name: 'storage.type.rosmsg'}},
          match: '\\Gw?string\\b',
          name: 'support.type.rosmsg'
        },
        {match: '\\d+', name: 'constant.numeric.integer.rosmsg'},
        {
          begin: '(?=[a-zA-Z_])',
          end: '$|(?=#)',
          patterns: [{include: '#field-string-array-after-type'}]
        }
      ]
    },
    'field-string-array-after-type': {
      patterns: [
        {match: '\\G[a-zA-Z0-9_]+', name: 'variable.other.field.rosmsg'},
        {
          begin: '(?<=\\s)',
          end: '$|(?=#)',
          name: 'meta.default-value.rosmsg',
          patterns: [{include: '#literal-string-array'}]
        }
      ]
    },
    lines: {
      patterns: [
        {include: '#attributes'},
        {include: '#field-string-array'},
        {include: '#field-string'},
        {include: '#field-other'}
      ]
    },
    'literal-other': {
      patterns: [
        {
          match:
            '[-+]?(?:(?:\\d+(?:_\\d+)*)?\\.\\d+(?:_\\d+)*|\\d+(?:_\\d+)*\\.)(?:[eE][-+]?\\d+(?:_\\d+)*)?',
          name: 'constant.numeric.float.rosmsg'
        },
        {match: '[-+]?\\d+(?:_\\d+)*', name: 'constant.numeric.integer.rosmsg'},
        {
          match: '(?i)\\b(?:true|false)\\b',
          name: 'constant.language.boolean.rosmsg'
        }
      ]
    },
    'literal-other-array': {
      patterns: [
        {
          begin: '\\[',
          end: '\\]|$|(?=#)',
          name: 'meta.array.rosmsg',
          patterns: [{include: '#literal-other'}]
        }
      ]
    },
    'literal-string': {
      patterns: [
        {include: '#literal-string-quoted'},
        {include: '#literal-string-unquoted'}
      ]
    },
    'literal-string-array': {
      patterns: [
        {
          begin: '\\[',
          end: '\\]|$|(?=#)',
          name: 'meta.array.rosmsg',
          patterns: [
            {include: '#literal-string-quoted'},
            {include: '#literal-string-unquoted-in-array'}
          ]
        }
      ]
    },
    'literal-string-escape': {
      patterns: [
        {
          match:
            '\\\\[0-7]{3}|\\\\x[0-9a-fA-F]{2}|\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}|\\\\.',
          name: 'constant.character.escape.rosmsg'
        }
      ]
    },
    'literal-string-quoted': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.rosmsg'}
          },
          end: '"|$',
          endCaptures: {0: {name: 'punctuation.definition.string.end.rosmsg'}},
          name: 'string.quoted.double.rosmsg',
          patterns: [{include: '#literal-string-escape'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.rosmsg'}
          },
          end: "'|$",
          endCaptures: {0: {name: 'punctuation.definition.string.end.rosmsg'}},
          name: 'string.quoted.single.rosmsg',
          patterns: [{include: '#literal-string-escape'}]
        }
      ]
    },
    'literal-string-unquoted': {
      begin: '(?=[^\\s"\'])',
      end: '(?=\\s*(?:#|$))',
      name: 'string.unquoted.rosmsg',
      patterns: [{include: '#literal-string-escape'}]
    },
    'literal-string-unquoted-in-array': {
      begin: '(?=[^\\s"\',\\]])',
      end: '(?=\\s*(?:$|[,\\]]))',
      name: 'string.unquoted.rosmsg',
      patterns: [{include: '#literal-string-escape'}]
    },
    separators: {
      patterns: [
        {match: '^---\\s*$\\n?', name: 'meta.separator.rosmsg'},
        {match: '^={3,}\\s*$\\n?', name: 'meta.separator.rosmsg'},
        {
          captures: {1: {name: 'entity.name.type.class.rosmsg'}},
          match: '^MSG:\\s+([a-zA-Z0-9_/]+)\\s*$\\n?',
          name: 'meta.separator.rosmsg'
        }
      ]
    }
  },
  scopeName: 'source.rosmsg'
}

export default grammar
