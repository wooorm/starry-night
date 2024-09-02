// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/golang/vscode-go>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [
    'go-mod',
    'go-module',
    'go-work',
    'go-workspace',
    'go.mod',
    'go.work'
  ],
  patterns: [
    {include: '#comments'},
    {include: '#directive'},
    {include: '#invalid'}
  ],
  repository: {
    arguments: {
      patterns: [
        {include: '#comments'},
        {include: '#double_quoted_string'},
        {include: '#raw_quoted_string'},
        {include: '#operator'},
        {include: '#semver'},
        {include: '#unquoted_string'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.go.mod'}},
          end: '$',
          name: 'comment.line.double-slash.go.mod'
        }
      ]
    },
    directive: {
      patterns: [
        {
          begin: '(\\w+)\\s*\\(',
          beginCaptures: {1: {name: 'keyword.go.mod'}},
          end: '\\)',
          patterns: [{include: '#arguments'}]
        },
        {
          captures: {
            1: {name: 'keyword.go.mod'},
            2: {patterns: [{include: '#arguments'}]}
          },
          match: '(\\w+)\\s*(.*)'
        }
      ]
    },
    double_quoted_string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.go.mod'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.go.mod'}},
      name: 'string.quoted.double',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    invalid: {match: '.*', name: 'invalid.illegal.unknown.go.mod'},
    operator: {match: '(=>)', name: 'operator.go.mod'},
    raw_quoted_string: {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.go.mod'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.go.mod'}},
      name: 'string.quoted.raw',
      patterns: [{include: '#string_placeholder'}]
    },
    semver: {
      match:
        'v(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)(?:-[\\da-z-]+(?:\\.[\\da-z-]+)*)?(?:\\+[\\da-z-]+(?:\\.[\\da-z-]+)*)?',
      name: 'constant.language.go.mod'
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\([0-7]{3}|[abfnrtv\\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})',
          name: 'constant.character.escape.go.mod'
        },
        {
          match: '\\\\[^0-7xuUabfnrtv\\\'"]',
          name: 'invalid.illegal.unknown-escape.go.mod'
        }
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            '%(\\[\\d+\\])?([\\+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGsp]',
          name: 'constant.other.placeholder.go.mod'
        }
      ]
    },
    unquoted_string: {
      match: '([^\\s/]|/(?!/))+',
      name: 'string.unquoted.go.mod'
    }
  },
  scopeName: 'go.mod'
}

export default grammar
