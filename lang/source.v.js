// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/0x9ef/vscode-vlang>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.carbon'],
  names: ['carbon', 'v', 'vlang'],
  patterns: [
    {include: '#comments'},
    {include: '#function-decl'},
    {include: '#as-is'},
    {include: '#attributes'},
    {include: '#assignment'},
    {include: '#module-decl'},
    {include: '#import-decl'},
    {include: '#hash-decl'},
    {include: '#brackets'},
    {include: '#builtin-fix'},
    {include: '#escaped-fix'},
    {include: '#operators'},
    {include: '#function-limited-overload-decl'},
    {include: '#function-extend-decl'},
    {include: '#function-exist'},
    {include: '#generic'},
    {include: '#constants'},
    {include: '#type'},
    {include: '#enum'},
    {include: '#interface'},
    {include: '#struct'},
    {include: '#keywords'},
    {include: '#storage'},
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#types'},
    {include: '#punctuations'},
    {include: '#variable-assign'},
    {include: '#function-decl'}
  ],
  repository: {
    'as-is': {
      begin: '\\s+(as|is)\\s+',
      beginCaptures: {1: {name: 'keyword.$1.v'}},
      end: '([\\w.]*)',
      endCaptures: {1: {name: 'entity.name.alias.v'}}
    },
    assignment: {
      captures: {1: {patterns: [{include: '#operators'}]}},
      match: '\\s+((?:\\:|\\+|\\-|\\*|/|\\%|\\&|\\||\\^)?=)\\s+',
      name: 'meta.definition.variable.v'
    },
    attributes: {
      captures: {
        1: {name: 'meta.function.attribute.v'},
        2: {name: 'punctuation.definition.begin.bracket.square.v'},
        3: {name: 'storage.modifier.attribute.v'},
        4: {name: 'punctuation.definition.end.bracket.square.v'}
      },
      match:
        '^\\s*((\\[)(deprecated|unsafe|console|heap|manualfree|typedef|live|inline|flag|ref_only|direct_array_access|callconv)(\\]))',
      name: 'meta.definition.attribute.v'
    },
    brackets: {
      patterns: [
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.begin.v'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.end.v'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.begin.v'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.round.end.v'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.begin.v'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.square.end.v'}
          },
          patterns: [{include: '$self'}]
        }
      ]
    },
    'builtin-fix': {
      patterns: [
        {
          patterns: [
            {match: '(const)(?=\\s*\\()', name: 'storage.modifier.v'},
            {
              match:
                '\\b(fn|type|enum|struct|union|interface|map|assert|sizeof|typeof|__offsetof)\\b(?=\\s*\\()',
              name: 'keyword.$1.v'
            }
          ]
        },
        {
          patterns: [
            {match: '(\\$if|\\$else)(?=\\s*\\()', name: 'keyword.control.v'},
            {
              match:
                '\\b(as|in|is|or|break|continue|default|unsafe|match|if|else|for|go|spawn|goto|defer|return|shared|select|rlock|lock|atomic|asm)\\b(?=\\s*\\()',
              name: 'keyword.control.v'
            }
          ]
        },
        {
          patterns: [
            {
              captures: {1: {name: 'storage.type.numeric.v'}},
              match:
                '(?<!.)(i?(?:8|16|nt|64|128)|u?(?:16|32|64|128)|f?(?:32|64))(?=\\s*\\()',
              name: 'meta.expr.numeric.cast.v'
            },
            {
              captures: {1: {name: 'storage.type.$1.v'}},
              match:
                '(bool|byte|byteptr|charptr|voidptr|string|rune|size_t|[ui]size)(?=\\s*\\()',
              name: 'meta.expr.bool.cast.v'
            }
          ]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.v'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.v'}},
          name: 'comment.block.documentation.v',
          patterns: [{include: '#comments'}]
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.v'}},
          end: '$',
          name: 'comment.line.double-slash.v'
        }
      ]
    },
    constants: {match: '\\b(true|false|none)\\b', name: 'constant.language.v'},
    enum: {
      captures: {
        1: {name: 'storage.modifier.$1.v'},
        2: {name: 'storage.type.enum.v'},
        3: {name: 'entity.name.enum.v'}
      },
      match: '^\\s*(?:(pub)?\\s+)?(enum)\\s+(?:\\w+\\.)?(\\w*)',
      name: 'meta.definition.enum.v'
    },
    'function-decl': {
      captures: {
        1: {name: 'storage.modifier.v'},
        2: {name: 'keyword.fn.v'},
        3: {name: 'entity.name.function.v'},
        4: {patterns: [{include: '#generic'}]}
      },
      match:
        '^(\\bpub\\b\\s+)?(\\bfn\\b)\\s+(?:\\([^\\)]+\\)\\s+)?(?:(?:C\\.)?)(\\w+)\\s*((?<=[\\w\\s+])(\\<)(\\w+)(\\>))?',
      name: 'meta.definition.function.v'
    },
    'function-exist': {
      captures: {
        0: {name: 'meta.function.call.v'},
        1: {
          patterns: [
            {include: '#illegal-name'},
            {match: '\\w+', name: 'entity.name.function.v'}
          ]
        },
        2: {patterns: [{include: '#generic'}]}
      },
      match: '(\\w+)((?<=[\\w\\s+])(\\<)(\\w+)(\\>))?(?=\\s*\\()',
      name: 'meta.support.function.v'
    },
    'function-extend-decl': {
      captures: {
        1: {name: 'storage.modifier.v'},
        2: {name: 'keyword.fn.v'},
        3: {name: 'punctuation.definition.bracket.round.begin.v'},
        4: {
          patterns: [
            {include: '#brackets'},
            {include: '#storage'},
            {include: '#generic'},
            {include: '#types'},
            {include: '#punctuation'}
          ]
        },
        5: {name: 'punctuation.definition.bracket.round.end.v'},
        6: {
          patterns: [
            {include: '#illegal-name'},
            {match: '\\w+', name: 'entity.name.function.v'}
          ]
        },
        7: {patterns: [{include: '#generic'}]}
      },
      match:
        '^\\s*(pub)?\\s*(fn)\\s*(\\()([^\\)]*)(\\))\\s*(?:(?:C\\.)?)(\\w+)\\s*((?<=[\\w\\s+])(\\<)(\\w+)(\\>))?',
      name: 'meta.definition.function.v'
    },
    'function-limited-overload-decl': {
      captures: {
        1: {name: 'storage.modifier.v'},
        10: {
          patterns: [
            {include: '#illegal-name'},
            {match: '\\w+', name: 'entity.name.function.v'}
          ]
        },
        2: {name: 'keyword.fn.v'},
        3: {name: 'punctuation.definition.bracket.round.begin.v'},
        4: {
          patterns: [
            {include: '#brackets'},
            {include: '#storage'},
            {include: '#generic'},
            {include: '#types'},
            {include: '#punctuation'}
          ]
        },
        5: {name: 'punctuation.definition.bracket.round.end.v'},
        6: {patterns: [{include: '#operators'}]},
        7: {name: 'punctuation.definition.bracket.round.begin.v'},
        8: {
          patterns: [
            {include: '#brackets'},
            {include: '#storage'},
            {include: '#generic'},
            {include: '#types'},
            {include: '#punctuation'}
          ]
        },
        9: {name: 'punctuation.definition.bracket.round.end.v'}
      },
      match:
        '^\\s*(pub)?\\s*(fn)\\s*(\\()([^\\)]*)(\\))\\s*([\\+\\-\\*\\/])?\\s*(\\()([^\\)]*)(\\))\\s*(?:(?:C\\.)?)(\\w+)',
      name: 'meta.definition.function.v'
    },
    generic: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.angle.begin.v'},
            2: {
              patterns: [
                {include: '#illegal-name'},
                {match: '\\w+', name: 'entity.name.generic.v'}
              ]
            },
            3: {name: 'punctuation.definition.bracket.angle.end.v'}
          },
          match: '(?<=[\\w\\s+])(\\<)(\\w+)(\\>)',
          name: 'meta.definition.generic.v'
        }
      ]
    },
    'hash-decl': {begin: '^\\s*(#)', end: '$', name: 'markup.bold.v'},
    'illegal-name': {match: '\\d\\w+', name: 'invalid.illegal.v'},
    'import-decl': {
      begin: '^\\s*(import)\\s+',
      beginCaptures: {1: {name: 'keyword.import.v'}},
      end: '([\\w.]+)',
      endCaptures: {1: {name: 'entity.name.import.v'}},
      name: 'meta.import.v'
    },
    interface: {
      captures: {
        1: {name: 'storage.modifier.$1.v'},
        2: {name: 'keyword.interface.v'},
        3: {
          patterns: [
            {include: '#illegal-name'},
            {match: '\\w+', name: 'entity.name.interface.v'}
          ]
        }
      },
      match: '^\\s*(?:(pub)?\\s+)?(interface)\\s+(\\w*)',
      name: 'meta.definition.interface.v'
    },
    keywords: {
      patterns: [
        {match: '(\\$if|\\$else)', name: 'keyword.control.v'},
        {
          match:
            '(?<!@)\\b(as|it|is|in|or|break|continue|default|unsafe|match|if|else|for|go|spawn|goto|defer|return|shared|select|rlock|lock|atomic|asm)\\b',
          name: 'keyword.control.v'
        },
        {
          match:
            '(?<!@)\\b(fn|type|typeof|enum|struct|interface|map|assert|sizeof|__offsetof)\\b',
          name: 'keyword.$1.v'
        }
      ]
    },
    'module-decl': {
      begin: '^\\s*(module)\\s+',
      beginCaptures: {1: {name: 'keyword.module.v'}},
      end: '([\\w.]+)',
      endCaptures: {1: {name: 'entity.name.module.v'}},
      name: 'meta.module.v'
    },
    numbers: {
      patterns: [
        {
          match: '([0-9]+(_?))+(\\.)([0-9]+[eE][-+]?[0-9]+)',
          name: 'constant.numeric.exponential.v'
        },
        {match: '([0-9]+(_?))+(\\.)([0-9]+)', name: 'constant.numeric.float.v'},
        {
          match: '(?:0b)(?:(?:[0-1]+)(?:_?))+',
          name: 'constant.numeric.binary.v'
        },
        {
          match: '(?:0o)(?:(?:[0-7]+)(?:_?))+',
          name: 'constant.numeric.octal.v'
        },
        {
          match: '(?:0x)(?:(?:[0-9a-fA-F]+)(?:_?))+',
          name: 'constant.numeric.hex.v'
        },
        {match: '(?:(?:[0-9]+)(?:[_]?))+', name: 'constant.numeric.integer.v'}
      ]
    },
    operators: {
      patterns: [
        {
          match: '(\\+|\\-|\\*|\\/|\\%|\\+\\+|\\-\\-|\\>\\>|\\<\\<)',
          name: 'keyword.operator.arithmetic.v'
        },
        {
          match: '(\\=\\=|\\!\\=|\\>|\\<|\\>\\=|\\<\\=)',
          name: 'keyword.operator.relation.v'
        },
        {
          match:
            '(\\:\\=|\\=|\\+\\=|\\-\\=|\\*\\=|\\/\\=|\\%\\=|\\&\\=|\\|\\=|\\^\\=|\\~\\=|\\&\\&\\=|\\|\\|\\=|\\>\\>\\=|\\<\\<\\=)',
          name: 'keyword.operator.assignment.v'
        },
        {
          match: '(\\&|\\||\\^|\\~|<(?!<)|>(?!>))',
          name: 'keyword.operator.bitwise.v'
        },
        {match: '(\\&\\&|\\|\\||\\!)', name: 'keyword.operator.logical.v'},
        {match: '\\?', name: 'keyword.operator.optional.v'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '\\.', name: 'punctuation.delimiter.period.dot.v'},
        {match: ',', name: 'punctuation.delimiter.comma.v'},
        {match: ':', name: 'punctuation.separator.key-value.colon.v'},
        {match: ';', name: 'punctuation.definition.other.semicolon.v'},
        {match: '\\?', name: 'punctuation.definition.other.questionmark.v'},
        {match: '#', name: 'punctuation.hash.v'}
      ]
    },
    punctuations: {
      patterns: [
        {match: '(?:\\.)', name: 'punctuation.accessor.v'},
        {match: '(?:,)', name: 'punctuation.separator.comma.v'}
      ]
    },
    storage: {match: '\\b(const|mut|pub)\\b', name: 'storage.modifier.v'},
    'string-escaped-char': {
      patterns: [
        {
          match:
            '\\\\([0-7]{3}|[\\$abfnrtv\\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})',
          name: 'constant.character.escape.v'
        },
        {
          match: '\\\\[^0-7\\$xuUabfnrtv\\\'"]',
          name: 'invalid.illegal.unknown-escape.v'
        }
      ]
    },
    'string-interpolation': {
      captures: {
        1: {
          patterns: [
            {match: '\\$\\d[\\.\\w]+', name: 'invalid.illegal.v'},
            {
              match: '\\$([\\.\\w]+|\\{.*?\\})',
              name: 'variable.other.interpolated.v'
            }
          ]
        }
      },
      match: '(\\$([\\w.]+|\\{.*?\\}))',
      name: 'meta.string.interpolation.v'
    },
    'string-placeholder': {
      match:
        '%(\\[\\d+\\])?([\\+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGsp]',
      name: 'constant.other.placeholder.v'
    },
    strings: {
      patterns: [
        {
          begin: '`',
          end: '`',
          name: 'string.quoted.rune.v',
          patterns: [
            {include: '#string-escaped-char'},
            {include: '#string-interpolation'},
            {include: '#string-placeholder'}
          ]
        },
        {
          begin: "(r)'",
          beginCaptures: {1: {name: 'storage.type.string.v'}},
          end: "'",
          name: 'string.quoted.raw.v',
          patterns: [
            {include: '#string-interpolation'},
            {include: '#string-placeholder'}
          ]
        },
        {
          begin: '(r)"',
          beginCaptures: {1: {name: 'storage.type.string.v'}},
          end: '"',
          name: 'string.quoted.raw.v',
          patterns: [
            {include: '#string-interpolation'},
            {include: '#string-placeholder'}
          ]
        },
        {
          begin: "(c?)'",
          beginCaptures: {1: {name: 'storage.type.string.v'}},
          end: "'",
          name: 'string.quoted.v',
          patterns: [
            {include: '#string-escaped-char'},
            {include: '#string-interpolation'},
            {include: '#string-placeholder'}
          ]
        },
        {
          begin: '(c?)"',
          beginCaptures: {1: {name: 'storage.type.string.v'}},
          end: '"',
          name: 'string.quoted.v',
          patterns: [
            {include: '#string-escaped-char'},
            {include: '#string-interpolation'},
            {include: '#string-placeholder'}
          ]
        }
      ]
    },
    struct: {
      patterns: [
        {
          begin:
            '^\\s*(?:(mut|pub(?:\\s+mut)?|__global)\\s+)?(struct|union)\\s+([\\w.]+)\\s*|({)',
          beginCaptures: {
            1: {name: 'storage.modifier.$1.v'},
            2: {name: 'storage.type.struct.v'},
            3: {name: 'entity.name.type.v'},
            4: {name: 'punctuation.definition.bracket.curly.begin.v'}
          },
          end: '\\s*|(})',
          endCaptures: {
            1: {name: 'punctuation.definition.bracket.curly.end.v'}
          },
          name: 'meta.definition.struct.v',
          patterns: [
            {include: '#struct-access-modifier'},
            {
              captures: {
                1: {name: 'variable.other.property.v'},
                2: {
                  patterns: [
                    {include: '#numbers'},
                    {include: '#brackets'},
                    {include: '#types'},
                    {match: '\\w+', name: 'storage.type.other.v'}
                  ]
                },
                3: {name: 'keyword.operator.assignment.v'},
                4: {patterns: [{include: '$self'}]}
              },
              match:
                '\\b(\\w+)\\s+([\\w\\[\\]\\*&.]+)(?:\\s*(=)\\s*((?:.(?=$|//|/\\*))*+))?'
            },
            {include: '#types'},
            {include: '$self'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.modifier.$1.v'},
            2: {name: 'storage.type.struct.v'},
            3: {name: 'entity.name.struct.v'}
          },
          match:
            '^\\s*(?:(mut|pub(?:\\s+mut)?|__global))\\s+?(struct)\\s+(?:\\s+([\\w.]+))?',
          name: 'meta.definition.struct.v'
        }
      ]
    },
    'struct-access-modifier': {
      captures: {
        1: {name: 'storage.modifier.$1.v'},
        2: {name: 'punctuation.separator.struct.key-value.v'}
      },
      match: '(?<=\\s|^)(mut|pub(?:\\s+mut)?|__global)(:|\\b)'
    },
    type: {
      captures: {
        1: {name: 'storage.modifier.$1.v'},
        2: {name: 'storage.type.type.v'},
        3: {
          patterns: [
            {include: '#illegal-name'},
            {include: '#types'},
            {match: '\\w+', name: 'entity.name.type.v'}
          ]
        },
        4: {
          patterns: [
            {include: '#illegal-name'},
            {include: '#types'},
            {match: '\\w+', name: 'entity.name.type.v'}
          ]
        }
      },
      match: '^\\s*(?:(pub)?\\s+)?(type)\\s+(\\w*)\\s+(?:\\w+\\.+)?(\\w*)',
      name: 'meta.definition.type.v'
    },
    types: {
      patterns: [
        {
          match: '(?<!\\.)\\b(i(8|16|nt|64|128)|u(8|16|32|64|128)|f(32|64))\\b',
          name: 'storage.type.numeric.v'
        },
        {
          match:
            '(?<!\\.)\\b(bool|byte|byteptr|charptr|voidptr|string|ustring|rune)\\b',
          name: 'storage.type.$1.v'
        }
      ]
    },
    'variable-assign': {
      captures: {
        0: {
          patterns: [
            {match: '[a-zA-Z_]\\w*', name: 'variable.other.assignment.v'},
            {include: '#punctuation'}
          ]
        }
      },
      match: '[a-zA-Z_]\\w*(?:,\\s*[a-zA-Z_]\\w*)*(?=\\s*(?:=|:=))'
    }
  },
  scopeName: 'source.v'
}

export default grammar
