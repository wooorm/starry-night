// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/VHDL-LS/rust_hdl_vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vhdl', '.vhd', '.vhf', '.vhi', '.vho', '.vhs', '.vht', '.vhw'],
  names: ['vhdl'],
  patterns: [{include: '#syntax_highlighting'}],
  repository: {
    comments: {
      patterns: [
        {begin: '--', end: '\\n', name: 'comment.line.double-dash.vhdl'},
        {begin: '\\/\\*', end: '\\*\\/', name: 'comment.block.vhdl'}
      ]
    },
    constants_numeric: {
      patterns: [
        {
          match: '\\b([+\\-]?[\\d_]+\\.[\\d_]+([eE][+\\-]?[\\d_]+)?)\\b',
          name: 'constant.numeric.floating_point.vhdl'
        },
        {
          match: '\\b16#[0-9A-Fa-f_]+#',
          name: 'constant.numeric.integer.base_16_pound_number_pound.vhdl'
        },
        {
          match: '\\b15#[0-9A-Ea-e_]+#',
          name: 'constant.numeric.integer.base_15_pound_number_pound.vhdl'
        },
        {
          match: '\\b14#[0-9A-Da-d_]+#',
          name: 'constant.numeric.integer.base_14_pound_number_pound.vhdl'
        },
        {
          match: '\\b13#[0-9A-Ca-c_]+#',
          name: 'constant.numeric.integer.base_13_pound_number_pound.vhdl'
        },
        {
          match: '\\b12#[0-9A-Ba-b_]+#',
          name: 'constant.numeric.integer.base_12_pound_number_pound.vhdl'
        },
        {
          match: '\\b11#[0-9Aa_]+#',
          name: 'constant.numeric.integer.base_11_pound_number_pound.vhdl'
        },
        {
          match: '\\b10#[0-9_]+#',
          name: 'constant.numeric.base_10_pound_number_pound.vhdl'
        },
        {
          match: '\\b9#[0-8_]+#',
          name: 'constant.numeric.base_9_pound_number_pound.vhdl'
        },
        {
          match: '\\b8#[0-7_]+#',
          name: 'constant.numeric.base_8_pound_number_pound.vhdl'
        },
        {
          match: '\\b7#[0-6_]+#',
          name: 'constant.numeric.base_7_pound_number_pound.vhdl'
        },
        {
          match: '\\b6#[0-5_]+#',
          name: 'constant.numeric.base_6_pound_number_pound.vhdl'
        },
        {
          match: '\\b5#[0-4_]+#',
          name: 'constant.numeric.base_5_pound_number_pound.vhdl'
        },
        {
          match: '\\b4#[0-3_]+#',
          name: 'constant.numeric.base_4_pound_number_pound.vhdl'
        },
        {
          match: '\\b3#[0-2_]+#',
          name: 'constant.numeric.base_3_pound_number_pound.vhdl'
        },
        {
          match: '\\b2#[01_]+#',
          name: 'constant.numeric.base_2_pound_number_pound.vhdl'
        },
        {
          captures: {1: {name: 'invalid.illegal.bad.number.vhdl'}},
          match: '((\\d+)?#.*?#)',
          name: 'constant.numeric.base_pound_number_pound.vhdl'
        },
        {
          match: '\\b[\\d_]+([eE][\\d_]+)?\\b',
          name: 'constant.numeric.integer.vhdl'
        },
        {
          match: '(\\d+)?[sSuU]?[xX]"[0-9a-fA-F_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.hex.vhdl'
        },
        {
          match: '(\\d+)?[sSuU]?[dD]"[0-9_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.decimal.vhdl'
        },
        {
          match: '(\\d+)?[sSuU]?[oO]"[0-7_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.octal.vhdl'
        },
        {
          match: '(\\d+)?[sSuU]?[bB]?"[01_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.binary.vhdl'
        },
        {
          captures: {1: {name: 'invalid.illegal.quoted.double.string.vhdl'}},
          match: '([bBdDoOsSuUxX]".+?")',
          name: 'constant.numeric.quoted.double.string.illegal.vhdl'
        },
        {
          match: "'[01uUxXzZwWlLhH\\-]'",
          name: 'constant.numeric.quoted.single.std_logic'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            "'(?i:active|ascending|base|converse|delayed|designated_subtype|driving|element|event|high|image|index|instance|instance_name|last|left|leftof|length|low|mirror|path|path_name|pos|pred|quiet|range|record|reverse|reverse_range|right|rightof|simple|stable|succ|transaction|val|value)\\b",
          name: 'keyword.control.attributes.vhdl'
        },
        {
          match:
            '\\b(?i:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|component|configuration|constant|context|default|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|private|procedure|process|protected|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with|xnor|xor)\\b',
          name: 'keyword.control.language.vhdl'
        },
        {
          match: '\\b(?i:case)(\\?|\\b)',
          name: 'keyword.control.language.case.vhdl'
        },
        {
          match:
            '(\\+|\\-|(\\?)?<=|(\\?)?=|(\\?)?/=|=>|:=|(\\?)?>=|<>|(\\?)?>|(\\?)?<|/|\\||&|(\\*{1,2})|\\?\\?)',
          name: 'keyword.operator.vhdl'
        }
      ]
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.vhdl'},
            2: {name: 'punctuation.definition.string.end.vhdl'}
          },
          match: "(').(')",
          name: 'string.quoted.single.vhdl'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vhdl'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vhdl'}},
          name: 'string.quoted.double.vhdl',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.vhdl'}]
        },
        {begin: '\\\\', end: '\\\\', name: 'string.other.backslash.vhdl'}
      ]
    },
    support_constants: {
      patterns: [
        {
          match:
            '\\b(?i:math_1_over_e|math_1_over_pi|math_1_over_sqrt_2|math_2_pi|math_3_pi_over_2|math_deg_to_rad|math_e|math_log10_of_e|math_log2_of_e|math_log_of_10|math_log_of_2|math_pi|math_pi_over_2|math_pi_over_3|math_pi_over_4|math_rad_to_deg|math_sqrt_2|math_sqrt_pi)\\b',
          name: 'support.constant.ieee.math_real.vhdl'
        },
        {
          match:
            '\\b(?i:math_cbase_1|math_cbase_j|math_czero|positive_real|principal_value)\\b',
          name: 'support.constant.ieee.math_complex.vhdl'
        },
        {
          match: '\\b(?i:true|false)\\b',
          name: 'support.constant.std.standard.vhdl'
        },
        {
          match: '\\b(?i:ascending|descending)\\b',
          name: 'support.constant.std.direction.vhdl'
        },
        {
          match: '\\b(?i:state_(closed|open))\\b',
          name: 'support.constant.textio.state.file.vhdl'
        },
        {
          match: '\\b(?i:(read|write|read_write)_mode)\\b',
          name: 'support.constant.textio.mode.file.vhdl'
        },
        {
          match: '\\b(?i:dir_separator|file_(name|path|line))\\b',
          name: 'support.constant.std.env.vhdl'
        },
        {
          match:
            '\\b(?i:(tool_(edition|name|type|vendor|version))|(vhdl_version))',
          name: 'support.constant.std.directives.vhdl'
        },
        {
          match:
            '\\b(?i:class_(enumeration|physical|integer|floating|record|array|access|file|protected))\\b',
          name: 'support.constant.std.reflection.vhdl'
        }
      ]
    },
    support_functions: {
      patterns: [
        {
          match: '\\b(?i:getenv|finish|stop|resolution_limit)\\b',
          name: 'support.function.std.env.vhdl'
        },
        {
          match: '\\b(?i:readline|read|writeline|write|endfile|endline)\\b',
          name: 'support.function.std.textio.vhdl'
        },
        {
          match:
            '\\b(?i:rising_edge|falling_edge|to_bit|to_bitvector|to_stdulogic|to_stdlogicvector|to_stdulogicvector|is_x)\\b',
          name: 'support.function.ieee.std_logic_1164.vhdl'
        },
        {
          match:
            '\\b(?i:shift_left|shift_right|rotate_left|rotate_right|resize|to_integer|to_unsigned|to_signed)\\b',
          name: 'support.function.ieee.numeric_std.vhdl'
        },
        {
          match:
            '\\b(?i:arccos(h?)|arcsin(h?)|arctan|arctanh|cbrt|ceil|cos|cosh|exp|floor|log10|log2|log|realmax|realmin|round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\b',
          name: 'support.function.ieee.math_real.vhdl'
        },
        {
          match:
            '\\b(?i:arg|cmplx|complex_to_polar|conj|get_principal_value|polar_to_complex)\\b',
          name: 'support.function.ieee.math_complex.vhdl'
        },
        {
          match:
            '\\b(?i:file_(canseek|close|mode|open|position|rewind|seek|size|state|truncate))\\b',
          name: 'support.function.textio.file.vhdl'
        },
        {
          match: '\\b(?i:deallocate|get_call_path)\\b',
          name: 'support.function.std.vhdl'
        },
        {
          match: '\\b(?i:(local|gm)time)\\b',
          name: 'support.function.std.time.vhdl'
        },
        {
          match:
            '\\b(?i:get_subtype_mirror|to_value_mirror|pos|image|to_subtype_mirror|enumeration_literal|simple_name|left|right|low|high|length|ascending|value|unit_index|units_length|unit_name|unit_index|scale|element_(index|name|subtype)|get_value_class|is_null|to_subtype_mirror|designated_subtype|get_file_logical_name|get_file_open_kind|to_(enumeration|integer|floating|physical|record|array|access|file|protected)|get)\\b',
          name: 'support.function.std.reflection.vhdl'
        },
        {
          match:
            '\\b(?i:(ClearVhdlAssert|IsVhdlAssertFailed|[GS]etVhdlAssertCount|[GS]etVhdlAssertEnable|[GS]etVhdlAssertFormat|[GS]etVhdlReadSeverity))\\b',
          name: 'support.function.std.assert.vhdl'
        }
      ]
    },
    support_types: {
      patterns: [
        {
          match:
            '\\b(?i:boolean(_vector)?|bit(_vector)?|character|severity_level|integer(_vector)?|real(_vector)?|time(_vector)?|delay_length|now|natural|positive|string|file_open_kind|file_open_status|fs|ps|ns|us|ms|sec|min|hr|severity_level|note|warning|error|failure)\\b',
          name: 'support.type.std.standard.vhdl'
        },
        {
          match: '\\b(?i:line|text|side|width|input|output)\\b',
          name: 'support.type.std.textio.vhdl'
        },
        {
          match: '\\b(?i:std_(u)?logic(_vector)?)\\b',
          name: 'support.type.ieee.std_logic_1164.vhdl'
        },
        {
          match: '\\b(?i:(unresolved_|u_)?(signed|unsigned))\\b',
          name: 'support.type.ieee.numeric_std.vhdl'
        },
        {
          match: '\\b(?i:complex|complex_polar)\\b',
          name: 'support.type.ieee.math_complex.vhdl'
        },
        {
          match: '\\b(?i:sfixed|ufixed)\\b',
          name: 'support.type.ieee.fixed.vhdl'
        },
        {
          match: '\\b(?i:float(32|64|128)?)\\b',
          name: 'support.type.float.vhdl'
        },
        {match: '\\b(?i:time_record)\\b', name: 'support.type.std.time.vhdl'},
        {
          match:
            '\\b(?i:(access_|array_|enumeration_|file_|floating_|integer_|physical_|protected_|record_)?(subtype|value)_mirror(_pt)?|(natural_|positive_)?index|value_class)\\b',
          name: 'support.type.std.reflection.vhdl'
        }
      ]
    },
    syntax_highlighting: {
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#constants_numeric'},
        {include: '#strings'},
        {include: '#punctuation'},
        {include: '#support_constants'},
        {include: '#support_types'},
        {include: '#support_functions'}
      ]
    }
  },
  scopeName: 'source.vhdl'
}

export default grammar
