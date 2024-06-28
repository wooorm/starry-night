// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/dhowden/gap-tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gap', '.gd', '.gi', '.tst'],
  names: ['gap'],
  patterns: [
    {match: '^\\s*(end|fi|od)$', name: 'invalid.illegal.end-statement.gap'},
    {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.gap'}},
      end: '$\\n?',
      name: 'comment.line.gap',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.gap'
        }
      ]
    },
    {
      match:
        '\\b(local|quit|QUIT|rec|IsBound|Unbind|TryNextMethod|Info|Assert|SaveWorkspace)\\b',
      name: 'support.function.statement'
    },
    {match: '(\\[(\\*|)|(\\*|)\\]|\\{|\\})', name: 'storage.type'},
    {
      match:
        '\\b(in|and|or|not|mod|div)\\b|\\->|\\+|\\-|\\*|\\/|\\^|\\~|\\!\\.|\\=|<>|<|>|\\.\\.|:',
      name: 'keyword.operator'
    },
    {
      match:
        '\\b(if|then|elif|else|while|for|return|where|do|case|when|repeat|until|break|continue|fi|od|atomic|readonly|readwrite)\\b',
      name: 'keyword.control'
    },
    {
      begin:
        '(\\b(function)\\b\\b([A-Za-z_][A-Za-z0-9_]*)?|(\\b([A-Za-z_][A-Za-z0-9_]*)\\b\\s*(:=)\\s*\\b(function|procedure)\\b))\\s*\\(([^\\)]*)\\)',
      beginCaptures: {
        2: {name: 'keyword.function.gap'},
        3: {name: 'entity.name.function.gap'},
        5: {name: 'entity.name.function.gap'},
        6: {name: 'keyword.operator'},
        7: {name: 'keyword.function.gap'},
        8: {name: 'variable'}
      },
      end: '\\bend\\b',
      endCaptures: {0: {name: 'keyword.function.gap'}},
      name: 'meta.function.gap',
      patterns: [{include: '$base'}]
    },
    {match: '\\b(true|false|fail)\\b', name: 'constant.language.gap'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.gap'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gap'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.gap'}},
      name: 'string.quoted.double.gap',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gap'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.gap'}},
      name: 'string.quoted.single.gap',
      patterns: [{include: '#string_escaped_char'}]
    },
    {name: 'support.function'},
    {name: 'support.function'},
    {name: 'support.function'}
  ],
  repository: {
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2})',
          name: 'constant.character.escape.gap'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.gap'}
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                           # flags\n    \t\t\t\t\t\t[,;:_]?                              # separator character (AltiVec)\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\n    \t\t\t\t\t\t[diouxXDOUeEfFgGaACcSspn%]           # conversion type\n    \t\t\t\t\t",
          name: 'constant.other.placeholder.c'
        },
        {match: '%', name: 'invalid.illegal.placeholder.c'}
      ]
    }
  },
  scopeName: 'source.gap'
}

export default grammar
