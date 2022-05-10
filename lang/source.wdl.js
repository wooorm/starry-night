// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/broadinstitute/wdl-sublime-syntax-highlighter>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.wdl'],
  names: ['wdl'],
  patterns: [
    {match: '\\=', name: 'keyword.operator.assignment.wdl'},
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.wdl'
    },
    {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.wdl'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.wdl'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language.wdl'},
    {include: '#builtin_types'},
    {include: '#comments'},
    {include: '#input_output'},
    {include: '#keywords'},
    {include: '#string_quoted_single'},
    {include: '#string_quoted_double'},
    {include: '#command_block'}
  ],
  repository: {
    builtin_types: {
      match:
        '(?<!\\.)\\b(Array|Boolean|File|Float|Int|Map|Object|String|Pair)\\b',
      name: 'support.type.wdl'
    },
    command_block: {
      patterns: [
        {
          begin: '(command)\\s*\\{(\\n|\\s)*',
          beginCaptures: {1: {name: 'keyword.other.wdl'}},
          end: '(^|\\s+)\\}',
          name: 'command.block.wdl'
        },
        {
          begin: '(command)\\s*<{3}(\\n|\\s)*',
          beginCaptures: {1: {name: 'keyword.other.wdl'}},
          end: '(^|\\s+)>{3}',
          name: 'command.block.wdl'
        }
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.wdl'}},
          match: '(#).*$\\n?',
          name: 'comment.line.number-sign.wdl'
        }
      ]
    },
    constant_placeholder: {
      match:
        '(?i:%(\\([a-z_]+\\))?#?0?\\-?[ ]?\\+?([0-9]*|\\*)(\\.([0-9]*|\\*))?[hL]?[a-z%])',
      name: 'constant.other.placeholder.wdl'
    },
    escaped_char: {
      captures: {
        1: {name: 'constant.character.escape.hex.wdl'},
        10: {name: 'constant.character.escape.linefeed.wdl'},
        11: {name: 'constant.character.escape.return.wdl'},
        12: {name: 'constant.character.escape.tab.wdl'},
        13: {name: 'constant.character.escape.vertical-tab.wdl'},
        2: {name: 'constant.character.escape.octal.wdl'},
        3: {name: 'constant.character.escape.newline.wdl'},
        4: {name: 'constant.character.escape.backlash.wdl'},
        5: {name: 'constant.character.escape.double-quote.wdl'},
        6: {name: 'constant.character.escape.single-quote.wdl'},
        7: {name: 'constant.character.escape.bell.wdl'},
        8: {name: 'constant.character.escape.backspace.wdl'},
        9: {name: 'constant.character.escape.formfeed.wdl'}
      },
      match:
        '(\\\\x[0-9a-fA-F]{2})|(\\\\[0-7]{3})|(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    escaped_unicode_char: {
      captures: {
        1: {name: 'constant.character.escape.unicode.16-bit-hex.wdl'},
        2: {name: 'constant.character.escape.unicode.32-bit-hex.wdl'},
        3: {name: 'constant.character.escape.unicode.name.wdl'}
      },
      match:
        '(\\\\U[0-9A-Fa-f]{8})|(\\\\u[0-9A-Fa-f]{4})|(\\\\N\\{[a-zA-Z0-9\\, ]+\\})'
    },
    keywords: {
      patterns: [
        {
          match:
            '(^|\\s)(call|runtime|task|workflow|if|then|else|import|as|input|output|meta|parameter_meta|scatter)[^A-Za-z_]',
          name: 'keyword.other.wdl'
        }
      ]
    },
    string_quoted_double: {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.wdl'}},
          end: '(")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.wdl'},
            2: {name: 'invalid.illegal.unclosed-string.wdl'}
          },
          name: 'string.quoted.double.single-line.wdl',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    string_quoted_single: {
      patterns: [
        {
          begin: "(')",
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.wdl'}},
          end: "(')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.wdl'},
            2: {name: 'invalid.illegal.unclosed-string.wdl'}
          },
          name: 'string.quoted.single.single-line.wdl',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.wdl'
}

export default grammar
