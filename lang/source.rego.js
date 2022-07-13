// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tsandall/vscode-opa>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.rego'],
  names: ['open-policy-agent'],
  patterns: [
    {include: '#comment'},
    {include: '#keyword'},
    {include: '#operator'},
    {include: '#head'},
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
    head: {
      begin: '^([[:alpha:]_][[:alnum:]_]*)',
      beginCaptures: {1: {name: 'entity.name.function.declaration'}},
      end: '(=|{|\\n)',
      name: 'meta.function.rego',
      patterns: [{include: '#term'}]
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
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.rego'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.rego'}},
      name: 'string.quoted.double.rego',
      patterns: [
        {
          match:
            '(?x:                # turn on extended mode\n\t           \\\\                # a literal backslash\n\t           (?:               # ...followed by...\n\t             ["\\\\/bfnrt]     # one of these characters\n\t             |               # ...or...\n\t             u               # a u\n\t             [0-9a-fA-F]{4}  # and four hex digits\n\t           )\n\t         )',
          name: 'constant.character.escape.rego'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.rego'
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
