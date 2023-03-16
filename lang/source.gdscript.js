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
    {include: '#nodepath_object'},
    {include: '#nodepath_function'},
    {include: '#base_expression'},
    {include: '#logic_op'},
    {include: '#in_keyword'},
    {include: '#getter_setter_godot4'},
    {include: '#compare_op'},
    {include: '#arithmetic_op'},
    {include: '#assignment_op'},
    {include: '#lambda_declaration'},
    {include: '#control_flow'},
    {include: '#annotations'},
    {include: '#keywords'},
    {include: '#self'},
    {include: '#class_definition'},
    {include: '#variable_definition'},
    {include: '#class_name'},
    {include: '#builtin_func'},
    {include: '#builtin_get_node_shorthand'},
    {include: '#builtin_classes'},
    {include: '#const_vars'},
    {include: '#pascal_case_class'},
    {include: '#class_new'},
    {include: '#class_is'},
    {include: '#class_enum'},
    {include: '#signal_declaration_bare'},
    {include: '#signal_declaration'},
    {include: '#function_declaration'},
    {include: '#function_keyword'},
    {include: '#any_method'},
    {include: '#any_property'},
    {include: '#extends'}
  ],
  repository: {
    annotated_parameter: {
      begin: '(?x)\n  \\b\n  ([a-zA-Z_]\\w*) \\s* (:)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.gdscript'},
        2: {name: 'punctuation.separator.annotation.gdscript'}
      },
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.gdscript'}},
      patterns: [
        {include: '#base_expression'},
        {match: '=(?!=)', name: 'keyword.operator.assignment.gdscript'}
      ]
    },
    annotations: {
      captures: {
        1: {name: 'entity.name.function.decorator.gdscript'},
        2: {name: 'entity.name.function.decorator.gdscript'}
      },
      match:
        '(@)(export|export_color_no_alpha|export_dir|export_enum|export_exp_easing|export_file|export_flags|export_flags_2d_navigation|export_flags_2d_physics|export_flags_2d_render|export_flags_3d_navigation|export_flags_3d_physics|export_flags_3d_render|export_global_dir|export_global_file|export_multiline|export_node_path|export_placeholder|export_range|icon|onready|rpc|tool|warning_ignore)\\b'
    },
    any_method: {
      match: '\\b([A-Za-z_]\\w*)\\b(?=\\s*(?:[(]))',
      name: 'support.function.any-method.gdscript'
    },
    any_property: {
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
        {include: '#builtin_get_node_shorthand'},
        {include: '#nodepath_object'},
        {include: '#nodepath_function'},
        {include: '#strings'},
        {include: '#keywords'},
        {include: '#logic_op'},
        {include: '#lambda_declaration'},
        {include: '#in_keyword'},
        {include: '#control_flow'},
        {include: '#function_call'},
        {include: '#comment'},
        {include: '#self'},
        {include: '#letter'},
        {include: '#numbers'},
        {include: '#builtin_func'},
        {include: '#builtin_classes'},
        {include: '#const_vars'},
        {include: '#pascal_case_class'},
        {include: '#line_continuation'}
      ]
    },
    builtin_classes: {
      match:
        '(?<![^.]\\.|:)\\b(OS|GDScript|Vector2|Vector2i|Vector3|Vector3i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|Object|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|StringName|Quaternion|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedColorArray|super)\\b',
      name: 'support.class.library.gdscript'
    },
    builtin_func: {
      match:
        '(?<![^.]\\.|:)\\b(abs|absf|absi|acos|asin|assert|atan|atan2|bytes2var|bytes2var_with_objects|ceil|char|clamp|clampf|clampi|Color8|convert|cos|cosh|cubic_interpolate|db2linear|decimals|dectime|deg2rad|dict2inst|ease|error_string|exp|floor|fmod|fposmod|funcref|get_stack|hash|inst2dict|instance_from_id|inverse_lerp|is_equal_approx|is_inf|is_instance_id_valid|is_instance_valid|is_nan|is_zero_approx|len|lerp|lerp_angle|linear2db|load|log|max|maxf|maxi|min|minf|mini|move_toward|nearest_po2|pingpong|posmod|pow|preload|print|printerr|printraw|prints|printt|print_debug|print_stack|print_verbose|push_error|push_warning|rad2deg|randf|randfn|randf_range|randi|randi_range|randomize|rand_from_seed|rand_range|rand_seed|range|range_lerp|range_step_decimals|rid_allocate_id|rid_from_int64|round|seed|sign|signf|signi|sin|sinh|smoothstep|snapped|sqrt|stepify|step_decimals|str|str2var|tan|tanh|typeof|type_exists|var2bytes|var2bytes_with_objects|var2str|weakref|wrapf|wrapi|yield)\\b(?=(\\()([^)]*)(\\)))',
      name: 'support.function.builtin.gdscript'
    },
    builtin_get_node_shorthand: {
      patterns: [
        {include: '#builtin_get_node_shorthand_quoted'},
        {include: '#builtin_get_node_shorthand_bare'}
      ]
    },
    builtin_get_node_shorthand_bare: {
      begin: '(\\$)',
      beginCaptures: {1: {name: 'keyword.control.flow'}},
      end: '[^\\w%]',
      name: 'support.function.builtin.shorthand.gdscript',
      patterns: [
        {match: '[a-zA-Z_]\\w*/?', name: 'constant.character.escape'},
        {match: '%[a-zA-Z_]\\w*/?', name: 'invalid.illegal.escape.gdscript'}
      ]
    },
    builtin_get_node_shorthand_quoted: {
      begin: '(\\$)(["\'])',
      beginCaptures: {
        1: {name: 'keyword.control.flow'},
        2: {name: 'constant.character.escape'}
      },
      end: '(["\'])',
      endCaptures: {1: {name: 'constant.character.escape'}},
      name: 'support.function.builtin.shorthand.gdscript',
      patterns: [
        {match: '%', name: 'keyword.control.flow'},
        {match: '[^%^"^\']*', name: 'constant.character.escape'}
      ]
    },
    class_definition: {
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
      match: '\\s+(is)\\s+([a-zA-Z_]\\w*)'
    },
    class_name: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'class.other.gdscript'}
      },
      match: '(?<=class_name)\\s+([a-zA-Z_]\\w*(\\.([a-zA-Z_]\\w*))?)'
    },
    class_new: {
      captures: {
        1: {name: 'entity.name.type.class.gdscript'},
        2: {name: 'storage.type.new.gdscript'}
      },
      match: '\\b([a-zA-Z_]\\w*).(new)\\('
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
    const_vars: {
      match: '\\b([A-Z_][A-Z_0-9]*)\\b',
      name: 'constant.language.gdscript'
    },
    control_flow: {
      match:
        '\\b(?i:if|elif|else|for|while|break|continue|pass|return|match|yield|await)\\b',
      name: 'keyword.control.gdscript'
    },
    extends: {
      match: '(?<=extends)\\s+[a-zA-Z_]\\w*(\\.([a-zA-Z_]\\w*))?',
      name: 'entity.other.inherited-class.gdscript'
    },
    function_arguments: {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.gdscript'}
      },
      contentName: 'meta.function-call.arguments.gdscript',
      end: '(?=\\))(?!\\)\\s*\\()',
      patterns: [
        {match: '(,)', name: 'punctuation.separator.arguments.gdscript'},
        {
          captures: {
            1: {name: 'variable.parameter.function-call.gdscript'},
            2: {name: 'keyword.operator.assignment.gdscript'}
          },
          match: '\\b([a-zA-Z_]\\w*)\\s*(=)(?!=)'
        },
        {match: '=(?!=)', name: 'keyword.operator.assignment.gdscript'},
        {include: '#base_expression'},
        {
          captures: {
            1: {name: 'punctuation.definition.arguments.end.gdscript'},
            2: {name: 'punctuation.definition.arguments.begin.gdscript'}
          },
          match: '\\s*(\\))\\s*(\\()'
        }
      ]
    },
    function_call: {
      begin: '(?x)\n  \\b(?=\n    ([a-zA-Z_]\\w*) \\s* (\\()\n  )\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.gdscript'}},
      name: 'meta.function-call.gdscript',
      patterns: [{include: '#function_name'}, {include: '#function_arguments'}]
    },
    function_declaration: {
      begin: '(?x) \\s*\n (func) \\s+\n ([a-zA-Z_]\\w*) \\s*\n (?=\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.gdscript'},
        2: {name: 'entity.name.function.gdscript'}
      },
      end: '((:)|(?=[#\'"\\n]))',
      endCaptures: {1: {name: 'punctuation.section.function.begin.gdscript'}},
      name: 'meta.function.gdscript',
      patterns: [
        {include: '#parameters'},
        {include: '#line_continuation'},
        {
          captures: {2: {name: 'entity.name.type.class.gdscript'}},
          match: '\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:'
        },
        {include: '#base_expression'}
      ]
    },
    function_keyword: {match: 'func', name: 'keyword.language.gdscript'},
    function_name: {
      patterns: [
        {include: '#builtin_func'},
        {include: '#builtin_classes'},
        {
          match: '(?x)\n  \\b ([a-zA-Z_]\\w*) \\b\n',
          name: 'support.function.any-method.gdscript'
        }
      ]
    },
    getter_setter_godot4: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.gdscript'}},
          match: '\\b(get):'
        },
        {
          begin: '(?x) \\s+\n (set) \\s*\n (?=\\()',
          beginCaptures: {1: {name: 'entity.name.function.gdscript'}},
          end: '(:|(?=[#\'"\\n]))',
          name: 'meta.function.gdscript',
          patterns: [
            {include: '#parameters'},
            {include: '#line_continuation'},
            {
              captures: {2: {name: 'entity.name.type.class.gdscript'}},
              match: '\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:'
            }
          ]
        }
      ]
    },
    in_keyword: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.gdscript'},
            2: {name: 'keyword.control.gdscript'}
          },
          match: '\\b(for)\\s+[a-zA-Z_]\\w*\\s+(in)\\b'
        },
        {match: '\\bin\\b', name: 'keyword.operator.wordlike.gdscript'}
      ]
    },
    keywords: {
      match:
        '\\b(?i:class|class_name|extends|is|onready|tool|static|export|as|void|enum|preload|assert|breakpoint|rpc|sync|remote|master|puppet|slave|remotesync|mastersync|puppetsync|trait|namespace)\\b',
      name: 'keyword.language.gdscript'
    },
    lambda_declaration: {
      begin: '(func)(?=\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.gdscript'},
        2: {name: 'entity.name.function.gdscript'}
      },
      end: '(:|(?=[#\'"\\n]))',
      name: 'meta.function.gdscript',
      patterns: [{include: '#parameters'}, {include: '#line_continuation'}]
    },
    letter: {
      match: '\\b(?i:true|false|null)\\b',
      name: 'constant.language.gdscript'
    },
    line_continuation: {
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
    loose_default: {
      begin: '(=)',
      beginCaptures: {1: {name: 'keyword.operator.gdscript'}},
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.gdscript'}},
      patterns: [{include: '#base_expression'}]
    },
    nodepath_function: {
      begin:
        '(get_node_or_null|has_node|has_node_and_resource|find_node|get_node)\\s*(?:\\()',
      beginCaptures: {1: {name: 'entity.name.function.gdscript'}},
      end: '(?:\\))',
      name: 'meta.literal.nodepath.gdscript',
      patterns: [
        {
          begin: '["\']',
          end: '["\']',
          name: 'constant.character.escape',
          patterns: [{match: '%', name: 'keyword.control.flow'}]
        }
      ]
    },
    nodepath_object: {
      begin: '(NodePath)\\s*(?:\\()',
      beginCaptures: {1: {name: 'support.class.library.gdscript'}},
      end: '(?:\\))',
      name: 'meta.literal.nodepath.gdscript',
      patterns: [
        {
          begin: '["\']',
          end: '["\']',
          name: 'constant.character.escape',
          patterns: [{match: '%', name: 'keyword.control.flow'}]
        }
      ]
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
        {include: '#annotated_parameter'},
        {
          captures: {
            1: {name: 'variable.parameter.function.language.gdscript'},
            2: {name: 'punctuation.separator.parameters.gdscript'}
          },
          match: '(?x)\n  ([a-zA-Z_]\\w*)\n    \\s* (?: (,) | (?=[)#\\n=]))\n'
        },
        {include: '#comment'},
        {include: '#loose_default'}
      ]
    },
    pascal_case_class: {
      match: '\\b([A-Z][a-z_0-9]*([A-Z]?[a-z_0-9]+)*[A-Z]?)\\b',
      name: 'support.class.library.gdscript'
    },
    self: {match: '\\bself\\b', name: 'variable.language.gdscript'},
    signal_declaration: {
      begin: '(?x) \\s*\n (signal) \\s+\n ([a-zA-Z_]\\w*) \\s*\n (?=\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.gdscript'},
        2: {name: 'entity.name.function.gdscript'}
      },
      end: '((?=[#\'"\\n]))',
      name: 'meta.signal.gdscript',
      patterns: [
        {include: '#parameters'},
        {include: '#line_continuation'},
        {
          captures: {2: {name: 'entity.name.type.class.gdscript'}},
          match: '\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:'
        }
      ]
    },
    signal_declaration_bare: {
      captures: {
        1: {name: 'storage.type.function.gdscript'},
        2: {name: 'entity.name.function.gdscript'}
      },
      match: '(?x) \\s*\n (signal) \\s+\n ([a-zA-Z_]\\w*)(?=[\\n\\s])'
    },
    strings: {
      patterns: [
        {
          begin:
            '(?:(?<=get_node|has_node|find_node|get_node_or_null|NodePath)\\s*\\(\\s*)',
          end: '(?:\\s*\\))',
          patterns: [
            {begin: '["\']', end: '["\']', name: 'constant.character.escape'},
            {include: '#base_expression'}
          ]
        },
        {begin: "'''", end: "'''", name: 'invalid.illegal.escape.gdscript'},
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
    variable_definition: {
      begin: '\\b(?:(var)|(const))\\s+',
      beginCaptures: {
        1: {name: 'storage.type.var.gdscript'},
        2: {name: 'storage.type.const.gdscript'}
      },
      end: '$|;',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.annotation.gdscript'},
            2: {name: 'entity.name.type.class.gdscript'}
          },
          match: '(:)\\s*([a-zA-Z_]\\w*)?'
        },
        {match: '=(?!=)', name: 'keyword.operator.assignment.gdscript'},
        {
          captures: {
            1: {name: 'storage.type.const.gdscript'},
            2: {name: 'entity.name.function.gdscript'},
            3: {name: 'entity.name.function.gdscript'}
          },
          match: '(setget)\\s+([a-zA-Z_]\\w*)(?:[,]\\s*([a-zA-Z_]\\w*))?'
        },
        {include: '#base_expression'}
      ]
    }
  },
  scopeName: 'source.gdscript'
}

export default grammar
