// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/godotengine/godot-vscode-plugin>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.gd'],
  names: ['gdscript'],
  patterns: [
    {include: '#base_expression'},
    {include: '#logic_op'},
    {include: '#compare_op'},
    {include: '#arithmetic_op'},
    {include: '#assignment_op'},
    {include: '#keywords'},
    {include: '#self'},
    {include: '#const_def'},
    {include: '#type_declear'},
    {include: '#class_def'},
    {include: '#class_name'},
    {include: '#builtin_func'},
    {include: '#builtin_get_node_shorthand'},
    {include: '#builtin_classes'},
    {include: '#const_vars'},
    {include: '#class_new'},
    {include: '#class_is'},
    {include: '#class_enum'},
    {include: '#function-declaration'},
    {include: '#function-return-type'},
    {include: '#any-method'},
    {include: '#any-property'},
    {include: '#extends'},
    {include: '#pascal_case_class'}
  ],
  repository: {
    'annotated-parameter': {
      begin: '(?x)\n  \\b\n  ([[:alpha:]_]\\w*) \\s* (:)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.gdscript'},
        2: {name: 'punctuation.separator.annotation.gdscript'}
      },
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.gdscript'}},
      patterns: [
        {match: '=(?!=)', name: 'keyword.operator.assignment.gdscript'}
      ]
    },
    'any-method': {
      match: '\\b([A-Za-z_]\\w*)\\b(?=\\s*(?:[(]))',
      name: 'support.function.any-method.gdscript'
    },
    'any-property': {
      match: '(?<=[^.]\\.)\\b([A-Za-z_]\\w*)\\b(?![(])',
      name: 'variable.other.property.gdscript'
    },
    arithmetic_op: {
      match: '\\+=|-=|\\*=|/=|%=|&=|\\|=|\\*|/|%|\\+|-|<<|>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.gdscript'
    },
    assignment_op: {match: '=', name: 'keyword.operator.assignment.gdscript'},
    base_expression: {
      patterns: [
        {include: '#strings'},
        {include: '#comment'},
        {include: '#letter'},
        {include: '#numbers'},
        {include: '#line-continuation'}
      ]
    },
    builtin_classes: {
      match:
        '(?<![^.]\\.|:)\\b(Vector2|Vector3|Color|Rect2|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|AABB|String|Color|NodePath|RID|Object|Dictionary|Array|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray)\\b',
      name: 'support.class.library.gdscript'
    },
    builtin_func: {
      match:
        '(?<![^.]\\.|:)\\b(sin|cos|tan|sinh|cosh|tanh|asin|acos|atan|atan2|sqrt|fmod|fposmod|floor|ceil|round|abs|sign|pow|log|exp|is_nan|is_inf|ease|decimals|stepify|lerp|dectime|randomize|randi|randf|rand_range|seed|rand_seed|deg2rad|rad2deg|linear2db|db2linear|max|min|clamp|nearest_po2|weakref|funcref|convert|typeof|type_exists|char|str|print|printt|prints|printerr|printraw|var2str|str2var|var2bytes|bytes2var|range|load|inst2dict|dict2inst|hash|Color8|print_stack|instance_from_id|preload|yield|assert)\\b(?=(\\()([^)]*)(\\)))',
      name: 'support.function.builtin.gdscript'
    },
    builtin_get_node_shorthand: {
      match:
        '\\$((\\"(\\.\\.\\/)+|\\"\\/|\\"[0-9]+|\\")([0-9A-Za-z\\_]+\\/)*[A-Za-z0-9\\_]+\\"|[A-Za-z\\_]+(\\/[A-Za-z\\_]+)*)',
      name: 'support.function.builtin.shorthand.gdscript'
    },
    class_def: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'class.other.gdscript'}
      },
      match: '(?<=^class)\\s+([a-zA-Z_]\\w*)\\s*(?=:)'
    },
    class_enum: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'constant.language.gdscript'}
      },
      match: '\\b([A-Z][a-zA-Z_0-9]*)\\.([A-Z_0-9]+)'
    },
    class_is: {
      captures: {
        1: {name: 'storage.type.is.gdscript'},
        2: {name: 'entity.name.type.class.gdscript'}
      },
      match: '\\s+(is)\\s+([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    class_name: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'class.other.gdscript'}
      },
      match:
        '(?<=class_name)\\s+([a-zA-Z_][a-zA-Z_0-9]*(\\.([a-zA-Z_][a-zA-Z_0-9]*))?)'
    },
    class_new: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'storage.type.new.gdscript'}
      },
      match: '\\b([a-zA-Z_][a-zA-Z_0-9]*).(new)\\('
    },
    comment: {
      captures: {
        1: {name: 'punctuation.definition.comment.number-sign.gdscript'}
      },
      match: '(#).*$\\n?',
      name: 'comment.line.number-sign.gdscript'
    },
    compare_op: {
      match: '<=|>=|==|<|>|!=',
      name: 'keyword.operator.comparison.gdscript'
    },
    const_def: {
      captures: {
        1: {name: 'storage.type.const.gdscript'},
        2: {name: 'constant.language.gdscript'}
      },
      match: '\\b(?i:(const))\\s+([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    const_vars: {
      match: '\\b([A-Z_0-9]+)\\b',
      name: 'constant.language.gdscript'
    },
    extends: {
      match:
        '(?<=extends)\\s+[a-zA-Z_][a-zA-Z_0-9]*(\\.([a-zA-Z_][a-zA-Z_0-9]*))?',
      name: 'entity.other.inherited-class.gdscript'
    },
    'function-declaration': {
      begin:
        '(?x)\n  \\s*\n  (?:\\b(static) \\s+)? \\b(func|signal)\\s+\n    (?=\n      [[:alpha:]_][[:word:]]* \\s* \\(\n    )\n',
      beginCaptures: {
        1: {name: 'storage.type.function.static.gdscript'},
        2: {name: 'storage.type.function.gdscript'}
      },
      end: '(:|(?=[#\'"\\n]))',
      endCaptures: {1: {name: 'punctuation.section.function.begin.gdscript'}},
      name: 'meta.function.gdscript',
      patterns: [
        {include: '#function-def-name'},
        {include: '#parameters'},
        {include: '#line-continuation'},
        {include: '#return-annotation'}
      ]
    },
    'function-def-name': {
      patterns: [
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'entity.name.function.gdscript'
        }
      ]
    },
    'function-return-type': {
      captures: {1: {name: 'entity.name.type.class.gdscript'}},
      match: '\\)\\s*\\-\\>\\s*([a-zA-Z_][a-zA-Z_0-9]*)\\s*\\:'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(?i:func|class|class_name|extends|is|in|onready|tool|static|export|setget|const|var|as|void|enum|preload|assert|yield|signal|breakpoint|rpc|sync|remote|master|puppet|slave|remotesync|mastersync|puppetsync|in)\\b',
          name: 'keyword.language.gdscript'
        },
        {
          match:
            '\\b(?i:if|elif|else|for|while|break|continue|pass|return|match)\\b',
          name: 'keyword.control'
        }
      ]
    },
    letter: {
      match: '\\b(?i:true|false|null)\\b',
      name: 'constant.language.gdscript'
    },
    'line-continuation': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.continuation.line.gdscript'},
            2: {name: 'invalid.illegal.line.continuation.gdscript'}
          },
          match: '(\\\\)\\s*(\\S.*$\\n?)'
        },
        {
          begin: '(\\\\)\\s*$\\n?',
          beginCaptures: {
            1: {name: 'punctuation.separator.continuation.line.gdscript'}
          },
          end: "(?x)\n  (?=^\\s*$)\n  |\n  (?! (\\s* [rR]? (\\'\\'\\'|\\\"\\\"\\\"|\\'|\\\"))\n      |\n      (\\G $)  (?# '\\G' is necessary for ST)\n  )\n",
          patterns: [{include: '#base_expression'}]
        }
      ]
    },
    logic_op: {
      match: '\\b(and|or|not)\\b',
      name: 'keyword.operator.wordlike.gdscript'
    },
    'loose-default': {
      begin: '(=)',
      beginCaptures: {1: {name: 'keyword.operator.gdscript'}},
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.gdscript'}},
      patterns: [{include: '#base_expression'}]
    },
    numbers: {
      patterns: [
        {
          match: '\\b(?i:0x[[:xdigit:]]*)\\b',
          name: 'constant.numeric.integer.hexadecimal.gdscript'
        },
        {
          match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))\\b',
          name: 'constant.numeric.float.gdscript'
        },
        {
          match: '\\b(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))\\b',
          name: 'constant.numeric.float.gdscript'
        },
        {
          match: '\\b(?i:(\\d+e[\\-\\+]?\\d+))\\b',
          name: 'constant.numeric.float.gdscript'
        },
        {match: '\\b\\d+\\b', name: 'constant.numeric.integer.gdscript'}
      ]
    },
    'parameter-special': {
      captures: {
        1: {name: 'variable.parameter.function.language.gdscript'},
        2: {name: 'variable.parameter.function.language.special.self.gdscript'},
        3: {name: 'variable.parameter.function.language.special.cls.gdscript'},
        4: {name: 'punctuation.separator.parameters.gdscript'}
      },
      match: '(?x)\n  \\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))\n'
    },
    parameters: {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.gdscript'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.gdscript'}
      },
      name: 'meta.function.parameters.gdscript',
      patterns: [
        {
          match: '(\\*\\*|\\*)',
          name: 'keyword.operator.unpacking.parameter.gdscript'
        },
        {include: '#parameter-special'},
        {
          captures: {
            1: {name: 'variable.parameter.function.language.gdscript'},
            2: {name: 'punctuation.separator.parameters.gdscript'}
          },
          match:
            '(?x)\n  ([[:alpha:]_]\\w*)\n    \\s* (?: (,) | (?=[)#\\n=]))\n'
        },
        {include: '#comment'},
        {include: '#loose-default'},
        {include: '#annotated-parameter'}
      ]
    },
    pascal_case_class: {
      captures: {1: {name: 'entity.name.type.class.gdscript'}},
      match: '\\b([A-Z][a-zA-Z_0-9]*)\\b'
    },
    self: {match: '\\bself\\b', name: 'variable.language.gdscript'},
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.gdscript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.untitled'}
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.gdscript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.untitled'}
          ]
        },
        {
          begin: '@"',
          end: '"',
          name: 'string.nodepath.gdscript',
          patterns: [{match: '\\.', name: 'constant.character.escape.untitled'}]
        }
      ]
    },
    type_declear: {
      captures: {1: {name: 'entity.name.type.class.gdscript'}},
      match: '\\:\\s*([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    var_def: {
      captures: {
        1: {name: 'storage.type.var.gdscript'},
        2: {name: 'variable.language.gdscript'}
      },
      match: '\\b(?i:(var))\\s+([a-zA-Z_][a-zA-Z_0-9]*)'
    }
  },
  scopeName: 'source.gdscript'
}

export default grammar
