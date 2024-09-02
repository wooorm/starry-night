// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/thejustinwalsh/textproto-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.textproto', '.pbtxt'],
  names: ['protocol-buffer-text-format', 'text-proto', 'protobuf-text-format'],
  patterns: [
    {include: '#comments'},
    {include: '#string-single'},
    {include: '#string-double'},
    {include: '#key'},
    {include: '#optional-key'},
    {include: '#field'}
  ],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.begin.textproto'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.textproto'}},
      name: 'meta.structure.array.textproto',
      patterns: [
        {include: '#comments'},
        {include: '#value'},
        {match: ',', name: 'punctuation.separator.array.textproto'},
        {
          match: '[^\\s\\]]',
          name: 'invalid.illegal.expected-array-separator.textproto'
        }
      ]
    },
    comments: {
      begin: '(^\\s+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.textproto'}
      },
      end: '(?!\\G)',
      endCaptures: {
        1: {name: 'punctuation.whitespace.comment.trailing.textproto'}
      },
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.textproto'}
          },
          end: '$',
          name: 'comment.line.number-sign.textproto'
        }
      ]
    },
    constant: {
      patterns: [
        {
          match: '\\b(?:true|false|null|Infinity|NaN)\\b',
          name: 'constant.language.textproto'
        },
        {
          match: '\\b[A-Z]+[A-Z0-9]*(?:_[A-Z0-9]+)*\\b',
          name: 'variable.other.readonly.textproto'
        }
      ]
    },
    field: {
      begin: '\\[?[a-zA-Z0-9_\\.-]+\\]?(:)',
      beginCaptures: {
        0: {
          name: 'variable.textproto meta.structure.dictionary.value.textproto'
        },
        1: {name: 'punctuation.separator.dictionary.key-value.textproto'}
      },
      end: '\\n',
      name: 'support.type.property-name.textproto',
      patterns: [{include: '#value'}]
    },
    heredoc: {
      begin: '(<<)\\s*([_a-zA-Z]+)\\s*$',
      beginCaptures: {
        1: {name: 'keyword.operator.heredoc.textproto'},
        2: {name: 'keyword.control.heredoc-token.textproto'}
      },
      end: '^\\s*(\\2)\\s*$',
      endCaptures: {1: {name: 'keyword.control.heredoc-token.textproto'}},
      name: 'string.unquoted.heredoc.no-indent.textproto'
    },
    infinity: {
      match: '(-)*\\b(?:Infinity|NaN)\\b',
      name: 'constant.language.textproto'
    },
    key: {
      begin: '[a-zA-Z0-9_\\.-]+(\\s+)',
      beginCaptures: {
        0: {
          name: 'entity.name.textproto meta.structure.dictionary.value.textproto'
        },
        1: {name: 'punctuation.separator.dictionary.key-value.textproto'}
      },
      end: '\\n',
      name: 'support.type.property-name.textproto',
      patterns: [{include: '#value'}]
    },
    number: {
      patterns: [
        {match: '(0x)[0-9a-fA-f]*', name: 'constant.numeric.hex.textproto'},
        {
          match: '[+-.]?(?=[1-9]|0(?!\\d))\\d+(\\.\\d+)?([eE][+-]?\\d+)?',
          name: 'constant.numeric.textproto'
        }
      ]
    },
    object: {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.textproto'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.dictionary.end.textproto'}
      },
      name: 'meta.structure.dictionary.textproto',
      patterns: [
        {include: '#comments'},
        {include: '#string-single'},
        {include: '#string-double'},
        {include: '#key'},
        {include: '#optional-key'},
        {include: '#field'}
      ]
    },
    'optional-key': {
      begin: '\\[[a-zA-Z0-9_\\.-]+\\](\\s+)',
      beginCaptures: {
        0: {
          name: 'entity.name.textproto meta.structure.dictionary.value.textproto'
        },
        1: {name: 'punctuation.separator.dictionary.key-value.textproto'}
      },
      end: '\\n',
      name: 'support.type.property-name.textproto',
      patterns: [{include: '#value'}]
    },
    'string-double': {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.textproto'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.textproto'}},
      name: 'string.quoted.double.textproto',
      patterns: [
        {
          match: '(?x:\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4}))',
          name: 'constant.character.escape.textproto'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.textproto'
        }
      ]
    },
    'string-single': {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.textproto'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.textproto'}},
      name: 'string.quoted.single.textproto',
      patterns: [
        {
          match: "(?x:\\\\(?:[\\'\\\\/bfnrt]|u[0-9a-fA-F]{4}))",
          name: 'constant.character.escape.textproto'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.textproto'
        }
      ]
    },
    value: {
      patterns: [
        {include: '#constant'},
        {include: '#infinity'},
        {include: '#number'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#heredoc'},
        {include: '#array'},
        {include: '#object'}
      ]
    }
  },
  scopeName: 'source.textproto'
}

export default grammar
