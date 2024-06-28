// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/toitware/ide-tools>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.toit'],
  names: ['toit'],
  patterns: [
    {include: '#comment'},
    {include: '#import-section'},
    {include: '#export-section'},
    {include: '#class-section'},
    {include: '#toplevel-section'}
  ],
  repository: {
    character: {
      patterns: [
        {
          match:
            "\\'[^'\\\\]'|'\\\\[0abfnrtv$\\\\\\\"'nr]'|'\\\\x[a-fA-F0-9]{2}'|'\\\\u[a-fA-F0-9]{4}'",
          name: 'constant.numeric.character.toit'
        },
        {match: "\\'\\\\?..+\\'", name: 'invalid.illegal.character.toit'}
      ]
    },
    'class-section': {
      begin: '^(?:(abstract)[ ]+)?(class|interface|mixin|monitor)(?!-)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.toit'},
        2: {name: 'keyword.control.toit'}
      },
      end: '^(?=[^\\s/]|/[^/*])',
      name: 'meta.class.toit',
      patterns: [
        {include: '#comment'},
        {
          begin: '^(?=\\s\\s[^\\s])',
          end: '^(?=[^\\s/]|/[^/*])',
          name: 'meta.class.members',
          patterns: [{include: '#comment'}, {include: '#member-section'}]
        },
        {
          begin: '(\\b(?<!-)[\\w-]+(?!-)\\b)',
          beginCaptures: {1: {name: 'storage.type.class.toit'}},
          end: ':',
          name: 'meta.class.signature',
          patterns: [
            {include: '#comment'},
            {
              captures: {
                1: {name: 'keyword.control.extends.toit'},
                2: {name: 'entity.other.inherited-class'}
              },
              match: '\\b(?<!-)(extends)\\s+([\\p{L}_][\\w-]*)(?!-)\\b',
              name: 'meta.extends.clause.toit'
            },
            {
              match: '\\b(?<!-)extends(?!-)\\b',
              name: 'keyword.control.extends.toit'
            },
            {
              match: '\\b(?<!-)implements(?!-)\\b',
              name: 'keyword.control.implements.toit'
            },
            {match: '\\bwith\\b', name: 'keyword.control.with.toit'},
            {include: '#type-name'}
          ]
        }
      ]
    },
    comment: {
      patterns: [
        {include: '#multi-line-comment'},
        {include: '#single-line-comment'}
      ]
    },
    constant: {
      patterns: [
        {
          match: '\\b(?<!-)(null|true|false)(?!-)\\b',
          name: 'constant.language.toit'
        },
        {
          match: '\\b(?<!-)_*[A-Z](-?[A-Z0-9_])+(?!-)\\b',
          name: 'constant.numeric.capitalized_user_constants.toit'
        }
      ]
    },
    control: {patterns: [{match: '(:|\\?|;)', name: 'keyword.control.toit'}]},
    delimited: {
      patterns: [
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'keyword.operator.toit'}},
          end: '(\\))',
          endCaptures: {1: {name: 'keyword.operator.toit'}},
          name: 'meta.delimited.parenthesis',
          patterns: [{include: '#expressions'}]
        },
        {
          begin: '(#?\\[)',
          beginCaptures: {1: {name: 'keyword.operator.toit'}},
          end: '(\\])',
          endCaptures: {1: {name: 'keyword.operator.toit'}},
          name: 'meta.delimited.brackets',
          patterns: [{include: '#expressions'}]
        },
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'keyword.operator.toit'}},
          end: '(\\})',
          endCaptures: {1: {name: 'keyword.operator.toit'}},
          name: 'meta.delimited.braces',
          patterns: [{include: '#expressions'}]
        }
      ]
    },
    'empty-string': {
      patterns: [{match: '""(?!")', name: 'string.quoted.double.toit'}]
    },
    'export-section': {
      begin: '^export(?!-)\\b',
      beginCaptures: {
        0: {name: 'constant.language.import-export-all.export.toit'}
      },
      end: '^(?!\\s)',
      name: 'meta.export.toit',
      patterns: [
        {include: '#comment'},
        {
          match: '\\*',
          name: 'constant.language.import-export-all.export_all.toit'
        }
      ]
    },
    expressions: {
      patterns: [
        {include: '#variable-declaration'},
        {include: '#named-arg'},
        {include: '#delimited'},
        {include: '#comment'},
        {include: '#character'},
        {include: '#number'},
        {include: '#operator-assignment'},
        {include: '#operator'},
        {include: '#control'},
        {include: '#keyword'},
        {include: '#constant'},
        {include: '#string'},
        {include: '#primitive'},
        {include: '#special-variable'},
        {include: '#type-name'},
        {include: '#variable'}
      ]
    },
    'import-section': {
      begin: '^import(?!-)\\b',
      beginCaptures: {
        0: {name: 'constant.language.import-export-all.import.toit'}
      },
      end: '^(?!\\s)',
      name: 'meta.import.toit',
      patterns: [
        {include: '#comment'},
        {
          match: '\\b(?<!-)show(?!-)\\b',
          name: 'constant.language.import-export-all.show.toit'
        },
        {
          match: '\\b(?<!-)as(?!-)\\b',
          name: 'constant.language.import-export-all.as.toit'
        },
        {
          match: '\\*',
          name: 'constant.language.import-export-all.import_all.toit'
        }
      ]
    },
    interpolated: {
      name: 'meta.string.interpolated.delimited.toit',
      patterns: [
        {
          begin: '(\\$\\()',
          beginCaptures: {
            1: {name: 'keyword.control.string_interpolation.toit'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'keyword.control.string_interpolation.toit'}},
          name: 'variable.other.interpolated.delimited.color_hack.toit',
          patterns: [{include: '#expressions'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.string_interpolation.toit'},
            2: {name: 'meta.interpolated.expression'},
            3: {
              name: 'meta.interpolated.expression',
              patterns: [{include: '#expressions'}]
            }
          },
          match:
            '(\\$)([\\p{L}_][\\w-]*(?:\\.[\\p{L}_][\\w-]*|\\[([^]]*)\\])*)',
          name: 'variable.other.interpolated.color_hack.toit'
        }
      ]
    },
    invalid_non_expression: {
      patterns: [
        {
          match:
            '\\b(?<!-)(assert|and|or|not|if|for|else|try|finally|call|while|break|continue|throw|static|abstract|return)(?!-)\\b',
          name: 'invalid.illegal.non_expression.toit'
        },
        {
          match: '\\b(?<!-)(is|as)(?!-)\\b',
          name: 'invalid.illegal.non_expression.toit'
        },
        {
          match: '\\b(?<!-)(super|this)(?!-)\\b',
          name: 'invalid.illegal.non_expression.toit'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '\\b(?<!-)(assert|and|or|not|if|for|else|try|finally|call|while|break|continue|throw|static|abstract|return)(?!-)\\b',
          name: 'keyword.control.toit'
        },
        {
          match: '\\b(?<!-)unreachable(?!-)\\b',
          name: 'keyword.control.pseudo.toit'
        },
        {
          match: '\\b(?<!-)(is|as)(?!-)\\b',
          name: 'keyword.control.type_check.toit'
        }
      ]
    },
    'member-section': {
      name: 'meta.member.toit',
      patterns: [
        {include: '#comment'},
        {
          match: '\\b(?<!-)(static|abstract|operator)(?!-)\\b',
          name: 'keyword.control.toit'
        },
        {
          begin:
            '(?<!-)\\b(constructor)(?!-)\\b(\\.[\\p{L}_][\\w-]*)?|([\\p{L}_][\\w-]*[=]?|==|<<|>>>|>>|<=|>=|<|>|\\+|-|\\*|/|%|\\^|&|\\||\\[\\]\\=|\\[\\]|\\[\\.\\.\\])',
          beginCaptures: {
            1: {name: 'keyword.control.toit'},
            2: {name: 'storage.type.function'},
            3: {name: 'storage.type.function'}
          },
          end: '(?=\\:(?![\\p{L}_])|^\\s{0,4}(?:[^\\s/]|/[^/*]))',
          name: 'meta.member.signature',
          patterns: [{include: '#signature-part2'}]
        },
        {include: '#type-annotation'},
        {
          begin: '(:=|::=)|(:)|^\\s{4}(?=[^\\s/])',
          beginCaptures: {1: {name: 'keyword.control.toit'}},
          end: '(?=^\\s{0,2}([^\\s/]|/[^/*]))',
          name: 'meta.member.body',
          patterns: [{include: '#expressions'}]
        }
      ]
    },
    'multi-line-comment': {
      patterns: [
        {
          begin: '\\s*(/\\*)(?!\\*)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.toit'}},
          end: '(\\*/)',
          endCaptures: {0: {name: 'punctuation.definition.comment.toit'}},
          name: 'comment.block.toit',
          patterns: [{include: '#multi-line-comment'}]
        },
        {
          captures: {0: {name: 'punctuation.definition.comment.toit'}},
          match: '\\s*(/\\*\\*/)',
          name: 'comment.block.toit'
        },
        {
          begin: '\\s*(/\\*\\*)(?!/)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.toit'}},
          end: '(\\*/)',
          endCaptures: {0: {name: 'punctuation.definition.comment.toit'}},
          name: 'comment.block.documentation.toit',
          patterns: [{include: '#multi-line-comment'}]
        }
      ]
    },
    'multi-line-string': {
      begin: '"""',
      end: '"""(?!")|"""""',
      name: 'string.quoted.double.toit',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.toit'},
        {include: '#interpolated'}
      ]
    },
    'named-arg': {
      patterns: [
        {
          match: '--no-[\\p{L}_][\\w-]*',
          name: 'variable.language.special.named.toit'
        },
        {
          match: '--[\\p{L}_][\\w-]*',
          name: 'variable.language.special.named.toit'
        }
      ]
    },
    number: {
      name: 'constant.numeric.toit',
      patterns: [{include: '#number-double'}, {include: '#number-decimal'}]
    },
    'number-decimal': {
      patterns: [
        {
          match: '(?<!\\w)-?([0-9](_(?=[0-9]))?)+(?!-)\\b',
          name: 'constant.numeric.dec.toit'
        },
        {
          match: '(?<!\\w)-?0[xX]([0-9a-fA-F](_(?=[0-9a-fA-F]))?)+(?!-)\\b',
          name: 'constant.numeric.dec.hex.toit'
        },
        {
          match: '(?<!\\w)-?0[bB]([01](_(?=[01]))?)+(?!-)\\b',
          name: 'constant.numeric.dec.bin.toit'
        }
      ]
    },
    'number-double': {
      patterns: [
        {
          match:
            '(?<!\\w)-?([0-9](_(?=[0-9]))?)+[eE][+-]?([0-9](_(?=[0-9]))?)+',
          name: 'constant.numeric.float.toit'
        },
        {
          match:
            '(?<!\\w)-?([0-9](_(?=[0-9]))?)+\\.([0-9](_(?=[0-9]))?)+([eE][+-]?([0-9](_(?=[0-9]))?)+)?',
          name: 'constant.numeric.float.toit'
        },
        {
          match:
            '(?<!\\w)-?\\.([0-9](_(?=[0-9]))?)+([eE][+-]?([0-9](_(?=[0-9]))?)+)?',
          name: 'constant.numeric.float.toit'
        },
        {
          match:
            '(?<!\\w)-?0[xX]([0-9a-fA-F](_(?=[0-9a-fA-F]))?)+[pP][+-]?([0-9](_(?=[0-9]))?)+',
          name: 'constant.numeric.float.hex.toit'
        },
        {
          match:
            '(?<!\\w)-?0[xX]([0-9a-fA-F](_(?=[0-9a-fA-F]))?)+\\.([0-9a-fA-F](_(?=[0-9a-fA-F]))?)+[pP][+-]?([0-9](_(?=[0-9]))?)+',
          name: 'constant.numeric.float.hex.toit'
        },
        {
          match:
            '(?<!\\w)-?0[xX]\\.([0-9a-fA-F](_(?=[0-9a-fA-F]))?)+[pP][+-]?([0-9](_(?=[0-9]))?)+',
          name: 'constant.numeric.float.hex.toit'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match:
            '(!=|==|>=|<=|<|>|\\*|\\+|-|%|//|/|<<|>>>|>>|&|\\||\\^|~|[.][.])',
          name: 'keyword.control.toit'
        }
      ]
    },
    'operator-assignment': {
      patterns: [
        {
          match: '(=|<<=|>>>=|>>=|//=|\\+=|-=|/=|\\*=|%=|~=|\\^=|&=)',
          name: 'keyword.control.toit'
        }
      ]
    },
    primitive: {
      patterns: [
        {match: '\\#primitive(?!-)\\b', name: 'support.function.builtin.toit'}
      ]
    },
    'signature-part2': {
      name: 'meta.member.signature.part2.toit',
      patterns: [
        {include: '#type-annotation'},
        {include: '#comment'},
        {
          captures: {
            1: {name: 'variable.parameter.named.setting.toit'},
            2: {patterns: [{include: '#special-variable'}]},
            3: {
              name: 'variable.parameter.named.setting.toit',
              patterns: [{include: '#invalid_non_expression'}]
            }
          },
          match: '(--)?(this)?\\.([\\p{L}_][\\w-]*)',
          name: 'meta.parameter.setting.toit'
        },
        {
          captures: {
            2: {name: 'keyword.control.block_marker.toit'},
            3: {patterns: [{include: '#invalid_non_expression'}]}
          },
          match: '(--)?(:)?([\\p{L}_][\\w-]*)',
          name: 'variable.parameter.toit'
        },
        {
          begin: '(=)\\s*',
          beginCaptures: {1: {name: 'keyword.control.toit'}},
          end: '^|\\s|:',
          name: 'meta.parameter.default_value.toit',
          patterns: [
            {include: '#comment'},
            {include: '#character'},
            {include: '#number'},
            {include: '#constant'},
            {include: '#string'},
            {include: '#type-name'},
            {include: '#delimited'},
            {include: '#keyword'}
          ]
        }
      ]
    },
    'single-line-comment': {
      patterns: [
        {
          begin: '\\s*(//)',
          beginCaptures: {1: {name: 'comment.line.double-slash.toit'}},
          contentName: 'comment.line.double-slash.toit',
          end: '(?=^)'
        }
      ]
    },
    'single-line-string': {
      begin: '"(?!")',
      end: '"',
      name: 'string.quoted.double.toit',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.toit'},
        {include: '#interpolated'}
      ]
    },
    'special-variable': {
      patterns: [
        {
          match: '\\b(?<!-)(this|it|super)(?!-)\\b',
          name: 'variable.language.special.toit'
        }
      ]
    },
    string: {
      patterns: [
        {include: '#empty-string'},
        {include: '#single-line-string'},
        {include: '#multi-line-string'}
      ]
    },
    'toplevel-section': {
      name: 'meta.toplevel.toit',
      patterns: [
        {include: '#comment'},
        {include: '#type-annotation'},
        {
          begin: '([\\p{L}_][\\w-]*[=]?)',
          beginCaptures: {1: {name: 'storage.type.function'}},
          end: '(?=\\:(?![\\p{L}_])|^\\s{0,2}(?:[^\\s/]|/[^/*]))',
          name: 'meta.toplevel.signature',
          patterns: [{include: '#signature-part2'}]
        },
        {
          begin: '(:=|::=)|(:)|^\\s{2}(?=[^\\s/])',
          beginCaptures: {1: {name: 'keyword.control.toit'}},
          end: '(?=^([^\\s/]|/[^/*]))',
          name: 'meta.toplevel.body',
          patterns: [{include: '#expressions'}]
        }
      ]
    },
    'type-annotation': {
      patterns: [
        {
          begin: '(/|->) *(?=[\\p{L}_])',
          beginCaptures: {1: {name: 'keyword.control.return_type.toit'}},
          end: '(?=[^\\w\\-.?])',
          name: 'entity.name.type.annotation.toit'
        }
      ]
    },
    'type-name': {
      patterns: [
        {
          match: '\\b(?<!-)_?[A-Z][A-Z_-]*[a-z][\\w-]*(?<!-)\\b[?]?',
          name: 'entity.name.type.toit'
        },
        {
          match: '\\b(?<!-)_?[A-Z][0-9]*_?(?<!-)\\b[?]?',
          name: 'entity.name.type.toit'
        },
        {
          match: '\\b(?<!-)(int|bool|float|string)(?<!-)\\b[?]?',
          name: 'entity.name.type.shorts.toit'
        },
        {
          match: '\\b(?<!-)(any|none)(?<!-)\\b',
          name: 'entity.name.type.any_none.toit'
        }
      ]
    },
    variable: {
      patterns: [
        {
          match: '\\b(?<!-)[\\p{L}_][\\w-]*(?<!-)\\b',
          name: 'entity.name.function.call.toit'
        }
      ]
    },
    'variable-declaration': {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.toit'},
            2: {name: 'keyword.control.toit'}
          },
          match: '([\\p{L}_][\\w-]*)\\s*(\\:=|\\:\\:=)',
          name: 'meta.variable.toit'
        },
        {
          captures: {
            1: {name: 'variable.other.toit'},
            2: {name: 'keyword.control.toit'},
            3: {
              name: 'meta.variable.type.toit',
              patterns: [{include: '#type-name'}]
            },
            4: {name: 'keyword.control.toit'}
          },
          match:
            '([\\p{L}_][\\w-]*)\\s*(\\/)\\s*([_\\w.]+[?]?)\\s*(\\:=|\\:\\:=)',
          name: 'meta.variable.toit'
        }
      ]
    }
  },
  scopeName: 'source.toit'
}

export default grammar
