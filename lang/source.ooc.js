// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ooc'],
  names: ['ooc'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#imports'},
    {include: '#literals'},
    {include: '#block'},
    {include: '#function_decl'},
    {include: '#class_decl'},
    {include: '#interface_decl'},
    {include: '#cover_decl'},
    {include: '#function_call'},
    {include: '#variable_decl'},
    {include: '#member_access'}
  ],
  repository: {
    block: {
      begin: '\\{',
      end: '}',
      name: 'meta.block.ooc',
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#literals'},
        {include: '#block'},
        {include: '#function_decl'},
        {include: '#variable_decl'},
        {include: '#function_call'},
        {include: '#member_access'}
      ]
    },
    class_decl: {
      captures: {
        1: {name: 'entity.name.type.class.ooc'},
        2: {name: 'storage.modifier.abstract.ooc'},
        3: {name: 'storage.type.class.ooc'},
        4: {name: 'support.type.generic.ooc'},
        5: {name: 'storage.modifier.extends.class.ooc'},
        6: {name: 'entity.other.inherited-class.ooc'}
      },
      match:
        '(?mx)\n            ([_A-Z]\\w* \\s*) : \\s* (abstract\\s+)? (class)\n            (?:\n                \\s*<\\s*([^<]+)\\s*>\\s*\n            )?\n\t\t   (?:\n                \\s* (extends)\n            )?\n            ',
      name: 'meta.class.ooc'
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.ooc'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.ooc'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.ooc'}},
          end: '\\*/',
          name: 'comment.block.ooc'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.ooc'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.ooc'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.ooc'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ooc'}},
          end: '$\\n?',
          name: 'comment.line.double-slash.ooc',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.ooc'
            }
          ]
        }
      ]
    },
    cover_decl: {
      captures: {
        1: {name: 'entity.name.type.cover.ooc'},
        2: {name: 'storage.type.cover.ooc'},
        3: {name: 'storage.modifier.extends.from.ooc'},
        4: {name: 'entity.other.inherited-class.overtype.ooc'},
        5: {name: 'storage.modifier.extends.cover.ooc'},
        6: {name: 'entity.other.inherited-class.supertype.ooc'}
      },
      match:
        '(?mx)\n            ([_A-Z]\\w* \\s*) : \\s* (cover)\n            (?:\n            (?:\n                \\s+(from)\\s+(?:([\\s\\w\\d_\\*]+?)\\s*(?= \\s extends | [/{;] | $) )\n            )\n            |\n            (?:\n                \\s+(extends)\\s+([_A-Z]\\w*)\\s*\n            )\n            )*\n            ',
      name: 'meta.definition.cover.ooc'
    },
    escaped_char: {match: '\\\\.', name: 'constant.character.escape.ooc'},
    function_call: {
      begin: '(?:((?:\\.[a-z_]\\w*)|(?:[a-z_]\\w*)(?:~[a-z_]\\w*)?))\\(',
      beginCaptures: {
        1: {name: 'support.function.any-method.ooc'},
        2: {name: 'support.function.any-method.ooc'}
      },
      end: '\\)',
      name: 'meta.function.call.ooc',
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#literals'},
        {include: '#block'},
        {include: '#function_call'},
        {include: '#member_access'}
      ]
    },
    function_decl: {
      patterns: [
        {
          begin:
            '(?mx)\n            \t        (operator\\s+(?:(?:[+\\-/\\*=!<>]|\\[\\])=?|\\[\\]|[<>=]|=|as))\n        \t            [\\s\\w~]*?\n        \t            \\(',
          beginCaptures: {1: {name: 'entity.name.function.ooc'}},
          end: '(?mx)\\)\n\n        \t\t\t(?:\\s*(->) \\s*\n        \t\t    (?:\n\t\t\t\t\t\t(?:(This) |\n        \t\t        ([A-Z_]\\w*))\n        \t\t        ([@*]*)\n        \t\t    ))?',
          endCaptures: {
            1: {name: 'keyword.other.return-type.ooc'},
            2: {name: 'storage.type.class.this.ooc'},
            3: {name: 'storage.type.ooc'},
            4: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          name: 'meta.function.operator.ooc',
          patterns: [
            {include: '#comments'},
            {include: '#keywords'},
            {include: '#parameters'}
          ]
        },
        {
          begin:
            '(?mx)\n        \t\t        ([_a-z]\\w*) \\s* : \\s*\n        \t\t            ((?:(?:static|proto|inline|final|abstract)\\s+)*)\n        \t\t            (?:(extern|unmangled)(?:\\s*\\(([^\\)]+)\\))?\\s+\n        \t\t                ((?:(?:static|proto|inline|final|abstract)\\s+)*)\n        \t\t            )?\n        \t\t            \n        \t\t            (func)\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t(?:\\s*@)?\n\t\t\t\t\t\t\t\n        \t\t            (?:\\s*(~[A-Za-z_]\\w*))?\n                        \n                            (?:\n                                \\s*<\\s*([^<]+)\\s*>\n                            )?\n                            \n        \t\t            \\s* \\(',
          beginCaptures: {
            1: {name: 'entity.name.function.ooc'},
            10: {name: 'storage.type.ooc'},
            11: {name: 'storage.modifier.pointer-arith.ooc'},
            2: {name: 'keyword.other.ooc'},
            3: {name: 'keyword.other.extern.ooc'},
            4: {name: 'support.function.c'},
            5: {name: 'keyword.other.ooc'},
            6: {name: 'storage.type.function.ooc'},
            7: {name: 'storage.modifier.func-tag.ooc'},
            8: {name: 'support.type.generic.ooc'},
            9: {name: 'keyword.other.return-type.ooc'}
          },
          end: '(?mx)\\)\n\t\t\t\t\t(?:\\s*(->) \\s*\n        \t\t    (?:\n\t\t\t\t\t\t(?:(This) | \n        \t\t        ([A-Z_]\\w*))\n        \t\t        ([@*]*)\n        \t\t    ))?',
          endCaptures: {
            1: {name: 'keyword.other.ooc'},
            2: {name: 'storage.type.class.this.ooc'},
            3: {name: 'storage.type.ooc'},
            4: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          name: 'meta.function.params.ooc',
          patterns: [
            {include: '#comments'},
            {include: '#keywords'},
            {include: '#parameters'}
          ]
        },
        {
          captures: {
            1: {name: 'entity.name.function.ooc'},
            10: {name: 'storage.type.class.this.ooc'},
            11: {name: 'storage.type.ooc'},
            12: {name: 'storage.modifier.pointer-arith.ooc'},
            2: {name: 'keyword.other.ooc'},
            3: {name: 'keyword.other.extern.ooc'},
            4: {name: 'support.function.c'},
            5: {name: 'keyword.other.ooc'},
            6: {name: 'storage.type.function.ooc'},
            7: {name: 'storage.modifier.func-tag.ooc'},
            8: {name: 'support.type.generic.ooc'},
            9: {name: 'keyword.other.return-type.ooc'}
          },
          match:
            '(?mx)\n        \t\t        ([_a-z]\\w*) \\s* : \\s*\n        \t\t            \n        \t\t            ((?:(?:static|proto|inline|final|abstract)\\s+)*)\n        \t\t            (?:(extern|unmangled)(?:\\s*\\(([^\\)]+)\\))?\\s+\n        \t\t                ((?:(?:static|proto|inline|final|abstract)\\s+)*)\n        \t\t            )?\n        \t\t            \n        \t\t            (func)\n\n        \t\t            (?:\\s*(~[A-Za-z_]\\w*))?\n                        \n                            (?:\n                                \\s*<\\s*([^<]+)\\s*>\n                            )?\n                            \n                            (?:\\s*(->) \\s*\n                \t\t    (?:\n\t\t\t\t\t\t\t\t(?:(This) |\n                \t\t        ([A-Z_]\\w*))\n                \t\t        ([@*]*)\n                \t\t    ))?\n        \t\t            ',
          name: 'meta.function.noparams.ooc'
        }
      ]
    },
    imports: {
      begin: '\\b(?:use|include|import)\\b',
      end: ';|$',
      name: 'keyword.control.import.ooc',
      patterns: [{include: '#comments'}]
    },
    interface_decl: {
      captures: {
        1: {name: 'entity.name.type.class.ooc'},
        2: {name: 'storage.modifier.abstract.ooc'},
        3: {name: 'storage.type.class.ooc'},
        4: {name: 'support.type.generic.ooc'},
        5: {name: 'storage.modifier.extends.class.ooc'},
        6: {name: 'entity.other.inherited-class.ooc'}
      },
      match:
        '(?mx)\n            ([_A-Z]\\w* \\s*) : \\s* (interface)\n            (?:\n                \\s*<\\s*([^<]+)\\s*>\\s*\n            )?\n            ',
      name: 'meta.interface.ooc'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(?:if|else|while|do|for|in|switch|match|case|return|break|continue|default)\\b',
          name: 'keyword.control.ooc'
        },
        {match: '\\bthis\\b', name: 'variable.language.this.ooc'},
        {
          captures: {
            1: {name: 'storage.type.class.this.ooc'},
            2: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          match: '\\b(This)([@&*]*|\\b)',
          name: 'meta.type.class.this.ooc'
        },
        {match: '(?:&&|\\|\\||\\#|!)', name: 'keyword.operator.logical.ooc'},
        {include: '#return_type'},
        {match: '(?:[<>!=]=|=>|[><])', name: 'keyword.operator.comparison.ooc'},
        {
          match: '(?:[\\*+\\-/|&:]|<{2,3}|>{2,3})?=',
          name: 'keyword.operator.assignment.ooc'
        },
        {
          match: '(?:[\\*\\-\\+/|&]|<{2,3}|>{2,3})',
          name: 'keyword.operator.arithmetic.ooc'
        },
        {match: '\\b(?:true|false)\\b', name: 'constant.language.boolean.ooc'},
        {match: '\\bnull\\b', name: 'constant.language.null.ooc'},
        {match: '\\bconst\\b', name: 'keyword.other.directive.const.ooc'},
        {match: '\\bstatic\\b', name: 'keyword.other.directive.static.ooc'},
        {
          captures: {
            1: {name: 'keyword.operator.logical.as.ooc'},
            2: {name: 'storage.type.ooc'},
            3: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          match: '\\b(as)\\s*([A-Z_]\\w*)([@&]*)',
          name: 'meta.operator.as.ooc'
        },
        {
          begin: '\\b(Func)\\s*\\(',
          beginCaptures: {1: {name: 'storage.type.function.pointer.ooc'}},
          end: '\\)',
          name: 'meta.function.pointer.ooc',
          patterns: [{include: '#keywords'}, {include: '#parameters'}]
        },
        {
          captures: {1: {name: 'storage.type.function.pointer.ooc'}},
          match: '(?mx)\\bFunc\\b',
          name: 'meta.function.pointer.ooc'
        }
      ]
    },
    literals: {
      patterns: [
        {include: '#ooc_numbers'},
        {include: '#ooc_char'},
        {include: '#ooc_string'}
      ]
    },
    member_access: {
      match: '([a-zA-Z_]\\w*)\\s+(?=[a-zA-Z_])',
      name: 'variable.other.accessed.ooc'
    },
    ooc_char: {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.ooc',
      patterns: [{include: '#escaped_char'}]
    },
    ooc_numbers: {
      patterns: [
        {match: '(0c[0-7]+)', name: 'constant.numeric.integer.octal.ooc'},
        {
          match: '(0x[0-9a-fA-F]+)',
          name: 'constant.numeric.integer.hexadecimal.ooc'
        },
        {match: '(0b[01]+)', name: 'constant.numeric.integer.binary.ooc'},
        {
          match:
            '(?x) (?<! 0[bcx] ) (\n                            (?: (?:[0-9]*)\\.(?:[0-9]+) | (?:[0-9]+)\\.(?:[0-9]*) )\n                            (?: [eE][+\\-]?\\d+)?\n                        )',
          name: 'constant.numeric.float.ooc'
        },
        {
          match: '(?x)\\b([0-9]+)(?: [eE][+\\-]?\\d+)?',
          name: 'constant.numeric.integer.ooc'
        }
      ]
    },
    ooc_string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.ooc',
      patterns: [{include: '#escaped_char'}]
    },
    parameters: {
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {
          captures: {
            1: {name: 'storage.type.ooc'},
            2: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          match: '([_A-Z]\\w*)([&@*]*)',
          name: 'meta.function.nameless-typed.ooc'
        },
        {
          captures: {
            1: {name: 'storage.type.ooc'},
            2: {name: 'storage.modifier.pointer-arith.ooc'}
          },
          match: ':\\s*([A-Z_]\\w*([@&*]*))',
          name: 'meta.function.parameter.type.ooc'
        },
        {
          captures: {
            1: {name: 'keyword.operator.assignment.parameter.ooc'},
            2: {name: 'variable.parameter.ooc'}
          },
          match: '([=.])?([a-zA-Z_]\\w*)',
          name: 'meta.function.parameter.name.ooc'
        }
      ]
    },
    return_type: {
      captures: {
        1: {name: 'keyword.other.return-type.ooc'},
        2: {name: 'storage.type.class.this.ooc'},
        3: {name: 'storage.type.ooc'},
        4: {name: 'storage.modifier.pointer-arith.ooc'}
      },
      match:
        '(?mx)\n\t\t    (\\-\\>) \\s*\n\t\t    (?:\n\t\t\t\t(?:(This) |\n\t\t        ([A-Z_]\\w*))\n\t\t        ([@*]*)\n\t\t    )',
      name: 'meta.function.return-type.ooc'
    },
    var_explicit_decl: {
      begin: '[_a-zA-Z]\\w*\\s*(?=,|:[^=])',
      beginCaptures: {0: {name: 'variable.other.ooc'}},
      end: '(?mx)(?:\n\t\t\t(?:\n\t\t\t    :\\s*\n\t\t\t    (?:\n\t\t\t        (?:\n\t\t\t            (?:\n\t\t\t                (static) |\n\t\t\t                (const) |\n\t\t\t                (extern) (?:\\s* \\( \\s* ([^\\)]+) \\s* \\) )?\n\t\t\t            ) \\s+\n\t\t\t        )*\n                )\n\t\t\t    (?: (?: (This) | ([A-Z_]\\w*)) ([@&]*) )\n\t\t\t\t(?: \\s* \\<\\s*([A-Z_]\\w*)\\s*\\> )?\n\t\t\t) | ; | $ )',
      endCaptures: {
        1: {name: 'keyword.other.ooc'},
        2: {name: 'keyword.other.ooc'},
        3: {name: 'keyword.other.ooc'},
        4: {name: 'storage.type.c'},
        5: {name: 'storage.type.class.this.ooc'},
        6: {name: 'storage.type.ooc'},
        7: {name: 'storage.modifier.pointer-arith.ooc'},
        8: {name: 'support.type.generic.ooc'}
      },
      name: 'meta.definition.variable.explicit.ooc',
      patterns: [
        {include: '#comments'},
        {match: '[_a-zA-Z]\\w*', name: 'variable.other.ooc'}
      ]
    },
    var_inferred_decl: {
      captures: {
        1: {name: 'variable.other.ooc'},
        2: {name: 'storage.type.ooc'}
      },
      match: '(?x)([a-zA-Z_]\\w*)\\s*(?= := )',
      name: 'meta.definition.variable.inferred.ooc'
    },
    variable_decl: {
      patterns: [
        {include: '#var_inferred_decl'},
        {include: '#var_explicit_decl'}
      ]
    }
  },
  scopeName: 'source.ooc'
}

export default grammar
