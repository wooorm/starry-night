// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/open-policy-agent/vscode-opa>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rego'],
  names: ['open-policy-agent'],
  patterns: [
    {include: '#comment'},
    {include: '#keyword'},
    {include: '#operator'},
    {include: '#term'}
  ],
  repository: {
    call: {
      captures: {1: {name: 'support.function.any-method.rego'}},
      match: '([a-zA-Z_][a-zA-Z0-9_]*)\\(',
      name: 'meta.function-call.rego'
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.rego'}},
      match: '(#).*$\\n?',
      name: 'comment.line.number-sign.rego'
    },
    constant: {
      match: '\\b(?:true|false|null)\\b',
      name: 'constant.language.rego'
    },
    keyword: {
      match:
        '(^|\\s+)(?:(default|not|package|import|as|with|else|some|in|every|if|contains))\\s+',
      name: 'keyword.other.rego'
    },
    number: {
      match:
        '(?x:         # turn on extended mode\n                             -?         # an optional minus\n                             (?:\n                               0        # a zero\n                               |        # ...or...\n                               [1-9]    # a 1-9 character\n                               \\d*      # followed by zero or more digits\n                             )\n                             (?:\n                               (?:\n                                 \\.     # a period\n                                 \\d+    # followed by one or more digits\n                               )?\n                               (?:\n                                 [eE]   # an e character\n                                 [+-]?  # followed by an option +/-\n                                 \\d+    # followed by one or more digits\n                               )?       # make exponent optional\n                             )?         # make decimal portion optional\n                           )',
      name: 'constant.numeric.rego'
    },
    operator: {
      patterns: [
        {
          match: '\\=|\\!\\=|>|<|<\\=|>\\=|\\+|-|\\*|%|/|\\||&|:\\=',
          name: 'keyword.operator.comparison.rego'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.rego'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.rego'}},
          name: 'string.quoted.double.rego',
          patterns: [
            {
              match:
                '(?x:                # turn on extended mode\n\t\t\t\t\t\\\\                # a literal backslash\n\t\t\t\t\t(?:               # ...followed by...\n\t\t\t\t\t\t["\\\\/bfnrt]     # one of these characters\n\t\t\t\t\t\t|               # ...or...\n\t\t\t\t\t\tu               # a u\n\t\t\t\t\t\t[0-9a-fA-F]{4}  # and four hex digits\n\t\t\t\t\t)\n\t\t\t\t\t)',
              name: 'constant.character.escape.rego'
            },
            {
              match: '\\\\.',
              name: 'invalid.illegal.unrecognized-string-escape.rego'
            }
          ]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.rego'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.rego'}},
          name: 'string.other.raw.rego'
        }
      ]
    },
    term: {
      patterns: [
        {include: '#constant'},
        {include: '#string'},
        {include: '#number'},
        {include: '#call'},
        {include: '#variable'}
      ]
    },
    variable: {
      match: '\\b[[:alpha:]_][[:alnum:]_]*\\b',
      name: 'meta.identifier.rego'
    }
  },
  scopeName: 'source.rego'
}

export default grammar
