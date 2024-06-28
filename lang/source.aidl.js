// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/google/aidl-language>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.aidl'],
  names: ['aidl'],
  patterns: [{include: '#main'}],
  repository: {
    annotation: {
      patterns: [
        {
          begin: '(@)([_a-zA-Z][_a-zA-Z0-9]*)\\s*(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.annotation.aidl'},
            2: {name: 'meta.annotation.identifier.aidl'},
            3: {name: 'punctuation.definition.parameters.begin.aidl'}
          },
          contentName: 'meta.annotation.parameters.aidl',
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.end.aidl'}
          },
          name: 'storage.type.annotation.aidl',
          patterns: [
            {include: '#comments'},
            {match: ',', name: 'punctuation.separator.parameter.method.aidl'},
            {match: '=', name: 'keyword.operator.assignment.aidl'},
            {include: '#const_expr'},
            {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.parameter.aidl'}
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.annotation.aidl'},
            2: {name: 'meta.annotation.identifier.aidl'}
          },
          match: '(@)([_a-zA-Z][_a-zA-Z0-9]*)',
          name: 'storage.type.annotation.aidl'
        }
      ]
    },
    comments: {
      patterns: [
        {include: '#multi_line_comment'},
        {
          captures: {1: {name: 'punctuation.definition.comment.aidl'}},
          match: '(//).*',
          name: 'comment.line.double-slash.aidl'
        }
      ]
    },
    const_expr: {
      patterns: [
        {include: '#numeric'},
        {match: "('.')", name: 'constant.character.aidl'},
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.aidl'},
            2: {name: 'string.quoted.double.aidl'},
            3: {name: 'punctuation.definition.string.end.aidl'}
          },
          match: '(")([^\\"]*)(")',
          name: 'meta.string.aidl'
        },
        {match: '(true|false)', name: 'constant.language.aidl'},
        {
          match: '([!<>]|&&|\\|\\||<=|>=|==|!=)',
          name: 'keyword.operator.logical.aidl'
        },
        {match: '([&|~\\^]|<<|>>)', name: 'keyword.operator.bitwise.aidl'},
        {match: '([+*/%\\-])', name: 'keyword.operator.arithmetic.aidl'},
        {
          begin: '(\\{})',
          beginCaptures: {1: {name: 'punctuation.section.braces.begin.aidl'}},
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.section.braces.end.aidl'}},
          name: 'meta.braces.aidl',
          patterns: [
            {match: ',', name: 'punctuation.separator.aidl'},
            {include: '#const_expr'}
          ]
        }
      ]
    },
    constant_decl: {
      patterns: [
        {
          begin: '(const)',
          beginCaptures: {1: {name: 'storage.type.constant.aidl'}},
          end: '(;)',
          endCaptures: {1: {name: 'punctuation.terminator.aidl'}},
          name: 'meta.constant.aidl',
          patterns: [
            {match: '=', name: 'keyword.operator.assignment.aidl'},
            {include: '#comments'},
            {include: '#type'},
            {include: '#const_expr'},
            {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'entity.name.constant.aidl'}
          ]
        }
      ]
    },
    decls: {
      patterns: [
        {include: '#annotation'},
        {match: '(\\})', name: 'punctuation.section.braces.end.aidl'},
        {
          captures: {
            1: {name: 'storage.modifier.aidl'},
            2: {name: 'storage.type.interface.aidl'},
            3: {name: 'entity.name.type.interface.aidl'},
            4: {name: 'punctuation.section.braces.begin.aidl'}
          },
          match:
            '(?:(oneway)\\s+)?(interface)\\s+([_a-zA-Z][_a-zA-Z0-9]*)\\s*(\\{)',
          name: 'meta.interface.aidl'
        },
        {
          captures: {
            1: {name: 'storage.type.parcelable.aidl'},
            2: {name: 'entity.name.type.parcelable.aidl'},
            3: {name: 'punctuation.definition.generic.begin.aidl'},
            4: {name: 'entity.name.other.aidl'},
            5: {name: 'punctuation.definition.generic.end.aidl'},
            6: {name: 'punctuation.section.braces.begin.aidl'}
          },
          match:
            '(parcelable)\\s+((?:[_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))*)\\s*(?:(<)((:?[_a-zA-Z][_a-zA-Z0-9]*)(:?,\\s+[_a-zA-Z][_a-zA-Z0-9]*)*)(>)\\s*)?(\\{)',
          name: 'meta.parcelable.aidl'
        },
        {
          captures: {
            1: {name: 'storage.type.parcelable.aidl'},
            2: {name: 'entity.name.type.parcelable.aidl'},
            3: {name: 'punctuation.definition.generic.begin.aidl'},
            4: {name: 'entity.name.other.aidl'},
            5: {name: 'punctuation.definition.generic.end.aidl'},
            6: {name: 'punctuation.terminator.aidl'}
          },
          match:
            '(parcelable)\\s+((?:[_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))*)\\s*(?:(<)((:?[_a-zA-Z][_a-zA-Z0-9]*)(:?,\\s+[_a-zA-Z][_a-zA-Z0-9]*)*)(>)\\s*)?(;)',
          name: 'meta.parcelable.aidl'
        },
        {
          captures: {
            1: {name: 'storage.type.parcelable.aidl'},
            2: {name: 'entity.name.type.parcelable.aidl'},
            3: {name: 'punctuation.terminator.aidl'}
          },
          match:
            '(parcelable)\\s+((?:[_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))*)\\s*(;)?',
          name: 'meta.parcelable.aidl'
        },
        {
          captures: {
            1: {name: 'keyword.aidl'},
            2: {name: 'punctuation.definition.string.begin.aidl'},
            3: {name: 'string.quoted.double.aidl'},
            4: {name: 'punctuation.definition.string.end.aidl'}
          },
          match: '(cpp_header|ndk_header|rust_type)\\s*(")([^\\"]*)(")',
          name: 'meta.parcelable.aidl'
        },
        {match: ';', name: 'punctuation.terminator.aidl'},
        {
          begin: '(enum)\\s+([_a-zA-Z][_a-zA-Z0-9]*)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'storage.type.enum.aidl'},
            2: {name: 'entity.name.type.enum.aidl'},
            3: {name: 'punctuation.section.braces.begin.aidl'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.section.braces.end.aidl'}},
          name: 'meta.enum.aidl',
          patterns: [{include: '#enum_decl_body'}]
        },
        {
          captures: {
            1: {name: 'storage.type.union.aidl'},
            2: {name: 'entity.name.type.union.aidl'},
            3: {name: 'punctuation.definition.generic.begin.aidl'},
            4: {name: 'entity.name.other.aidl'},
            5: {name: 'punctuation.definition.generic.end.aidl'},
            6: {name: 'punctuation.section.braces.begin.aidl'}
          },
          match:
            '(union)\\s+((?:[_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))*)\\s*(?:(<)((:?[_a-zA-Z][_a-zA-Z0-9]*)(:?,\\s+[_a-zA-Z][_a-zA-Z0-9]*)*)(>)\\s*)?(\\{)',
          name: 'meta.union.aidl'
        },
        {include: '#comments'},
        {include: '#constant_decl'},
        {include: '#method_decl'},
        {include: '#variable_decl'}
      ]
    },
    enum_decl_body: {
      patterns: [
        {include: '#comments'},
        {match: '=', name: 'keyword.operator.assignment.aidl'},
        {include: '#const_expr'},
        {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.other.aidl'}
      ]
    },
    import: {
      patterns: [
        {
          begin: '(import)',
          beginCaptures: {1: {name: 'keyword.aidl'}},
          end: '(;)',
          endCaptures: {1: {name: 'punctuation.terminator.aidl'}},
          patterns: [
            {
              match:
                '(([_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))*)',
              name: 'entity.name.type.aidl'
            }
          ]
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#package'},
        {include: '#import'},
        {include: '#decls'},
        {match: '([^\\s])', name: 'invalid.illegal.aidl'}
      ]
    },
    method_decl: {
      patterns: [
        {include: '#annotation'},
        {include: '#type'},
        {match: 'oneway', name: 'storage.modifier.aidl'},
        {match: '=', name: 'keyword.operator.assignment.aidl'},
        {match: ';', name: 'punctuation.terminator.aidl'},
        {
          begin: '([_a-zA-Z][_a-zA-Z0-9]*)\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.aidl'},
            2: {name: 'punctuation.definition.parameters.begin.aidl'}
          },
          contentName: 'meta.function.parameters.aidl',
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.end.aidl'}
          },
          patterns: [
            {match: ',', name: 'punctuation.separator.parameter.method.aidl'},
            {match: '\\b(in|out|inout)\\b', name: 'storage.modifier.aidl'},
            {include: '#type'},
            {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.parameter.aidl'}
          ]
        }
      ]
    },
    multi_line_comment: {
      patterns: [
        {
          begin: '(/\\*\\*)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.aidl'}},
          end: '(\\*/)',
          endCaptures: {1: {name: 'punctuation.definition.comment.aidl'}},
          name: 'comment.block.documentation.aidl'
        },
        {
          begin: '(/\\*)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.aidl'}},
          end: '(\\*/)',
          endCaptures: {1: {name: 'punctuation.definition.comment.aidl'}},
          name: 'comment.block.aidl'
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match: '(0[x\\x{007c}X][0-9a-fA-F]+[lL]?)',
          name: 'constant.numeric.hex.aidl'
        },
        {
          match:
            '([0-9]*\\.[0-9]+([eE][-\\x{002b}]?[0-9]+)?f?|[0-9]*\\.?[0-9]+([eE][-\\x{002b}]?[0-9]+)?f)',
          name: 'constant.numeric.float.aidl'
        },
        {match: '([0-9]+[lL]?)', name: 'constant.numeric.decimal.aidl'}
      ]
    },
    package: {
      patterns: [
        {
          begin: '(package)',
          beginCaptures: {1: {name: 'keyword.aidl'}},
          end: '(;)',
          endCaptures: {1: {name: 'punctuation.terminator.aidl'}},
          patterns: [
            {
              match:
                '(([_a-zA-Z][_a-zA-Z0-9]*)(?:\\.([_a-zA-Z][_a-zA-Z0-9]*))+)',
              name: 'entity.name.namespace.aidl'
            }
          ]
        }
      ]
    },
    type: {
      patterns: [
        {include: '#annotation'},
        {
          match: '\\b(void|boolean|byte|char|int|long|float|double)\\b',
          name: 'storage.type.aidl'
        },
        {
          match:
            '\\b(CharSequence|FileDescriptor|IBinder|List|Map|ParcelableHolder|ParcelFileDescriptor|String)\\b',
          name: 'support.class.aidl'
        },
        {match: '\\[\\]', name: 'punctuation.aidl'},
        {
          begin: '(\\<)',
          beginCaptures: {
            1: {name: 'punctuation.definition.generic.begin.aidl'}
          },
          end: '(\\>)',
          endCaptures: {1: {name: 'punctuation.definition.generic.end.aidl'}},
          name: 'meta.generic.aidl',
          patterns: [{include: '#type'}]
        }
      ]
    },
    variable_decl: {
      patterns: [
        {match: '=', name: 'keyword.operator.assignment.aidl'},
        {include: '#type'},
        {include: '#const_expr'},
        {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.other.aidl'},
        {match: ';', name: 'punctuation.terminator.aidl'}
      ]
    }
  },
  scopeName: 'source.aidl'
}

export default grammar
