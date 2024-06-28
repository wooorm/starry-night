// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elm-community/Elm.tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.elm'],
  names: ['elm'],
  patterns: [
    {
      captures: {
        1: {name: 'punctuation.definition.entity.elm'},
        2: {name: 'punctuation.definition.entity.elm'}
      },
      match: "(`)[a-zA-Z_']*?(`)",
      name: 'keyword.operator.function.infix.elm'
    },
    {match: '\\(\\)', name: 'constant.language.unit.elm'},
    {
      begin: '^\\b((effect|port)\\s+)?(module)\\s+',
      beginCaptures: {
        1: {name: 'keyword.other.elm'},
        3: {name: 'keyword.other.elm'}
      },
      end: '$|;',
      endCaptures: {1: {name: 'keyword.other.elm'}},
      name: 'meta.declaration.module.elm',
      patterns: [
        {include: '#module_name'},
        {
          begin: '(where)\\s*\\{',
          beginCaptures: {1: {name: 'keyword.other.elm'}},
          end: '\\}',
          patterns: [{include: '#type_signature'}]
        },
        {match: '(exposing)', name: 'keyword.other.elm'},
        {include: '#module_exports'},
        {match: '(where)', name: 'keyword.other.elm'},
        {match: '[a-z]+', name: 'invalid'}
      ]
    },
    {
      begin: '^\\b(import)\\s+((open)\\s+)?',
      beginCaptures: {1: {name: 'keyword.other.elm'}, 3: {name: 'invalid'}},
      end: '($|;)',
      name: 'meta.import.elm',
      patterns: [
        {match: '(as|exposing)', name: 'keyword.import.elm'},
        {include: '#module_name'},
        {include: '#module_exports'}
      ]
    },
    {
      begin: '(\\[)(glsl)(\\|)',
      beginCaptures: {
        1: {name: 'keyword.other.elm'},
        2: {name: 'support.function.prelude.elm'},
        3: {name: 'keyword.other.elm'}
      },
      end: '(\\|\\])',
      endCaptures: {1: {name: 'keyword.other.elm'}},
      name: 'entity.glsl.elm',
      patterns: [{include: 'source.glsl'}]
    },
    {
      match: '\\b(type alias|type|case|of|let|in|as)\\s+',
      name: 'keyword.other.elm'
    },
    {match: '\\b(if|then|else)\\s+', name: 'keyword.control.elm'},
    {
      match: '\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b',
      name: 'constant.numeric.float.elm'
    },
    {match: '\\b([0-9]+)\\b', name: 'constant.numeric.elm'},
    {
      begin: '"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.elm'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.elm'}},
      name: 'string.quoted.double.elm',
      patterns: [
        {
          match:
            "\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\'\\&])",
          name: 'constant.character.escape.elm'
        },
        {
          match: '\\^[A-Z@\\[\\]\\\\\\^_]',
          name: 'constant.character.escape.control.elm'
        }
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.elm'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.elm'}},
      name: 'string.quoted.double.elm',
      patterns: [
        {
          match:
            '\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])',
          name: 'constant.character.escape.elm'
        },
        {
          match: '\\^[A-Z@\\[\\]\\\\\\^_]',
          name: 'constant.character.escape.control.elm'
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.string.begin.elm'},
        2: {name: 'constant.character.escape.elm'},
        3: {name: 'punctuation.definition.string.end.elm'}
      },
      match:
        "(?x)\n(')\n(?:\n\t[\\ -\\[\\]-~]\t\t\t\t\t\t\t\t# Basic Char\n  | (\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE\n\t\t|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS\n\t\t|US|SP|DEL|[abfnrtv\\\\\\\"'\\&]))\t\t# Escapes\n  | (\\^[A-Z@\\[\\]\\\\\\^_])\t\t\t\t\t\t# Control Chars\n)\n(')",
      name: 'string.quoted.single.elm'
    },
    {
      begin:
        "^(port\\s+)?([a-z_][a-zA-Z0-9_']*|\\([|!%$+\\-.,=</>]+\\))\\s*((:)([:]+)?)",
      beginCaptures: {
        1: {name: 'keyword.other.port.elm'},
        2: {name: 'entity.name.function.elm'},
        4: {name: 'keyword.other.colon.elm'},
        5: {name: 'invalid'}
      },
      end: '$\\n?',
      name: 'meta.function.type-declaration.elm',
      patterns: [{include: '#type_signature'}]
    },
    {match: '\\bport\\s+', name: 'keyword.other.port.elm'},
    {match: '\\b[A-Z]\\w*\\b', name: 'constant.other.elm'},
    {include: '#comments'},
    {match: "^[a-z][A-Za-z0-9_']*\\s+", name: 'entity.name.function.elm'},
    {include: '#infix_op'},
    {match: '[|!%$?~+:\\-.=</>&\\\\*^]+', name: 'keyword.operator.elm'},
    {
      captures: {1: {name: 'support.function.delimiter.elm'}},
      match: '([\\[\\]\\{\\},])',
      name: 'constant.language.delimiter.elm'
    },
    {match: '([\\(\\)])', name: 'keyword.other.parenthesis.elm'}
  ],
  repository: {
    block_comment: {
      applyEndPatternLast: true,
      begin: '\\{-(?!#)',
      captures: {0: {name: 'punctuation.definition.comment.elm'}},
      end: '-\\}',
      name: 'comment.block.elm',
      patterns: [{include: '#block_comment'}]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.elm'}},
          match: '(--).*$\\n?',
          name: 'comment.line.double-dash.elm'
        },
        {include: '#block_comment'}
      ]
    },
    infix_op: {
      match: '(\\([|!%$+:\\-.=</>]+\\)|\\(,+\\))',
      name: 'entity.name.function.infix.elm'
    },
    module_exports: {
      begin: '\\(',
      end: '\\)',
      name: 'meta.declaration.exports.elm',
      patterns: [
        {match: "\\b[a-z][a-zA-Z_'0-9]*", name: 'entity.name.function.elm'},
        {match: "\\b[A-Z][A-Za-z_'0-9]*", name: 'storage.type.elm'},
        {match: ',', name: 'punctuation.separator.comma.elm'},
        {include: '#infix_op'},
        {match: '\\(.*?\\)', name: 'meta.other.unknown.elm'}
      ]
    },
    module_name: {
      match: "[A-Z][A-Za-z0-9._']*",
      name: 'support.other.module.elm'
    },
    type_signature: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.inherited-class.elm'},
            2: {name: 'variable.other.generic-type.elm'},
            3: {name: 'keyword.other.big-arrow.elm'}
          },
          match: "\\(\\s*([A-Z][A-Za-z]*)\\s+([a-z][A-Za-z_']*)\\)\\s*(=>)",
          name: 'meta.class-constraint.elm'
        },
        {match: '->', name: 'keyword.other.arrow.elm'},
        {match: '=>', name: 'keyword.other.big-arrow.elm'},
        {
          match: "\\b[a-z][a-zA-Z0-9_']*\\b",
          name: 'variable.other.generic-type.elm'
        },
        {match: "\\b[A-Z][a-zA-Z0-9_']*\\b", name: 'storage.type.elm'},
        {match: '\\(\\)', name: 'support.constant.unit.elm'},
        {include: '#comments'}
      ]
    }
  },
  scopeName: 'source.elm'
}

export default grammar
