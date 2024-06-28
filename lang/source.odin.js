// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/odin-lang/sublime-odin>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['odin', 'odinlang', 'odin-lang'],
  patterns: [
    {include: '#comments'},
    {include: '#types'},
    {include: '#keywords'},
    {include: '#functions_and_declarations'},
    {include: '#strings'},
    {include: '#string_escaped_char'}
  ],
  repository: {
    block_comment: {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.odin'}},
      end: '\\*/',
      name: 'comment.block.odin'
    },
    comments: {
      patterns: [
        {include: '#block_comment'},
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.odin'},
        {include: '#line_comment'}
      ]
    },
    functions_and_declarations: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.function.odin entity.name.function.odin'},
            2: {name: 'storage.type.odin'}
          },
          match: '\\b(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[:]\\s*[:]\\s*(proc)'
        },
        {
          captures: {
            1: {name: 'meta.function.odin entity.name.function.odin'},
            2: {name: 'keyword.control.odin'},
            3: {name: 'storage.type.odin'}
          },
          match:
            '\\b(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[:]\\s*[:]\\s*([#]force_inline|[#]force_no_inline)\\s+(proc)'
        },
        {captures: {1: {name: 'storage.type.odin'}}, match: '(proc)\\s*[\\(]'},
        {
          captures: {1: {name: 'support.function.odin'}},
          match: '(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[!]?\\s*[\\(]'
        },
        {
          captures: {
            1: {name: 'meta.type.odin entity.name.type.odin'},
            2: {name: 'storage.type.odin'}
          },
          match:
            '\\b(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[:]\\s*[:]\\s*(struct|union|enum|bit_field|bit_set)'
        },
        {
          captures: {
            1: {name: 'meta.type.odin entity.name.type.odin'},
            2: {name: 'keyword.tag.odin'}
          },
          match:
            '\\b(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[:]\\s*[:]\\s*([#]\\s*type)'
        },
        {
          captures: {1: {name: 'meta.constant.odin entity.name.type.odin'}},
          match: '\\b(\\b[[:alpha:]_]+[[:alnum:]_]*\\b)\\s*[:]\\s*[:]\\s*'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(import|foreign|package)\\b', name: 'keyword.control.odin'},
        {
          match:
            '\\b(if|else|when|for|in|not_in|defer|switch|return|const|do|where)\\b',
          name: 'keyword.control.odin'
        },
        {
          match: '\\b(fallthrough|break|continue|case)\\b',
          name: 'keyword.control.odin'
        },
        {match: '\\b(using)\\b', name: 'keyword.control.odin'},
        {
          match: '\\b(asm|or_return|or_else|or_break|or_continue)\\b',
          name: 'keyword.control.odin'
        },
        {match: '\\b(distinct)\\b', name: 'keyword.operator.odin'},
        {match: '\\b(context)\\b', name: 'keyword.operator.odin'},
        {match: '\\b(nil|true|false)\\b', name: 'constant.language.odin'},
        {
          match: '\\b(\\d(\\d|_)*(.\\d(\\d|_)*)?)((e|E)(\\+|-)?\\d+)?[ijk]?\\b',
          name: 'constant.numeric.odin'
        },
        {
          match:
            '\\b((0b(0|1|_)+)|(0o(\\d|_)+)|(0d(\\d|_)+)|(0[xXh]([[:xdigit:]]|_)+))[ijk]?\\b',
          name: 'constant.numeric.odin'
        },
        {match: '---', name: 'constant.numeric.odin'},
        {
          match: '\\b(struct|enum|union|map|bit_set|bit_field|dynamic)\\b',
          name: 'storage.type.odin'
        },
        {
          match: '\\b(cast|transmute|auto_cast)\\b',
          name: 'keyword.function.odin'
        },
        {
          match: '([#]\\s*\\b([[:alpha:]_]+[[:alnum:]_]*)\\b)',
          name: 'keyword.tag.odin'
        },
        {
          match: '(\\x40\\s*\\b([[:alpha:]_]+[[:alnum:]_]*)\\b)',
          name: 'keyword.tag.odin'
        },
        {
          match: '(\\x40\\s*[(]\\s*\\b([[:alpha:]_]+[[:alnum:]_]*)\\b)\\s*[)]',
          name: 'keyword.tag.odin'
        },
        {match: '@', name: 'keyword.operator.odin'}
      ]
    },
    line_comment: {
      begin: '(^[ \\t]+)?((?=//)|(?=#!))',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.odin'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.odin'}},
          end: '\\n',
          name: 'comment.line.double-slash.odin',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.odin'
            }
          ]
        },
        {
          begin: '#!',
          beginCaptures: {0: {name: 'punctuation.definition.comment.odin'}},
          end: '\\n',
          name: 'comment.line.double-slash.odin',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.odin'
            }
          ]
        }
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnrutv\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8}|[0-7]{3})',
          name: 'constant.character.escape.odin'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.odin'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.odin'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.odin'}},
          name: 'string.quoted.double.odin',
          patterns: [
            {include: '#string_placeholder'},
            {include: '#string_escaped_char'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.odin'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.odin'}},
          name: 'string.quoted.single.odin',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.odin'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.odin'}},
          name: 'string.quoted.raw.odin'
        }
      ]
    },
    types: {
      patterns: [
        {
          match: '\\b(struct|enum|union|bit_field|bit_set)\\b(?:(\\{)(\\}))?',
          name: 'storage.type.odin'
        },
        {match: '\\b(proc)\\b', name: 'storage.type.odin'},
        {
          match: '\\$\\s*(\\b([[:alpha:]_]+[[:alnum:]_]*)\\b)',
          name: 'storage.type.odin'
        },
        {match: '\\b(i8|i16|i32|i64|i128|int)\\b', name: 'storage.type.odin'},
        {
          match: '\\b(u8|u16|u32|u64|u128|uint|uintptr)\\b',
          name: 'storage.type.odin'
        },
        {match: '\\b(f16|f32|f64|f128)\\b', name: 'storage.type.odin'},
        {match: '\\b(f16le|f32le|f64le|f128le)\\b', name: 'storage.type.odin'},
        {match: '\\b(f16be|f32be|f64be|f128be)\\b', name: 'storage.type.odin'},
        {
          match: '\\b(complex32|complex64|complex128)\\b',
          name: 'storage.type.odin'
        },
        {
          match: '\\b(quaternion64|quaternion128|quaternion256)\\b',
          name: 'storage.type.odin'
        },
        {match: '\\b(bool|b8|b16|b32|b64)\\b', name: 'storage.type.odin'},
        {match: '\\b(string|cstring|rune)\\b', name: 'storage.type.odin'},
        {match: '\\b(rawptr)\\b', name: 'storage.type.odin'},
        {match: '\\b(any|typeid)\\b', name: 'storage.type.odin'},
        {match: '\\b(byte)\\b', name: 'storage.type.odin'},
        {
          match: '\\b(u16le|u32le|u64le|u128le|i16le|i32le|i64le|i128le)\\b',
          name: 'storage.type.odin'
        },
        {
          match: '\\b(i16be|i32be|i64be|i128be|u16be|u32be|u64be|u128be)\\b',
          name: 'storage.type.odin'
        }
      ]
    }
  },
  scopeName: 'source.odin'
}

export default grammar
