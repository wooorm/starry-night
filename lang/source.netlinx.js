// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.axs', '.axi'],
  names: ['netlinx'],
  patterns: [
    {include: '#preprocessor-rule-enabled'},
    {include: '#preprocessor-rule-disabled'},
    {include: '#preprocessor-rule-other'},
    {include: '#comments'},
    {
      captures: {
        1: {name: 'constant.numeric.dps.device.netlinx'},
        2: {name: 'punctuation.colon.dps.netlinx'},
        3: {name: 'constant.numeric.dps.port.netlinx'},
        4: {name: 'punctuation.colon.dps.netlinx'},
        5: {name: 'constant.numeric.dps.system.netlinx'}
      },
      match: '(\\d{1,5})(:)(\\d{1,5})(:)(\\d{1,5})',
      name: 'meta.dps.netlinx'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.netlinx'
    },
    {match: '(\\$[0-9a-fA-F]+)', name: 'constant.numeric.hex.netlinx'},
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.netlinx'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.netlinx'}},
      name: 'string.quoted.single.netlinx'
    },
    {
      begin:
        '(?ix)\n        \t\t^\\s*(\\#(define))\\s+             # define\n        \t\t((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name\n        \t\t(?:                              # and optionally:\n        \t\t    (\\()                         # an open parenthesis\n        \t\t        (\n        \t\t            \\s* \\g<id> \\s*       # first argument\n        \t\t            ((,) \\s* \\g<id> \\s*)*  # additional arguments\n        \t\t            (?:\\.\\.\\.)?          # varargs ellipsis?\n        \t\t        )\n        \t\t    (\\))                         # a close parenthesis\n        \t\t)?\n        \t',
      beginCaptures: {
        1: {name: 'keyword.control.import.define.netlinx'},
        2: {name: 'keyword.control.import.define.netlinx'},
        3: {name: 'entity.name.function.preprocessor.netlinx'},
        5: {name: 'punctuation.definition.parameters.netlinx'},
        6: {name: 'variable.parameter.preprocessor.netlinx'},
        8: {name: 'punctuation.separator.parameters.netlinx'},
        9: {name: 'punctuation.definition.parameters.netlinx'}
      },
      end: '(?=(?://|/\\*))|$',
      name: 'meta.preprocessor.macro.netlinx',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.netlinx'
        },
        {include: '$base'}
      ]
    },
    {include: '#pragma-mark'},
    {include: '#block'},
    {
      begin: '(?i)\\s*\\b(define_function)\\b\\s+',
      beginCaptures: {1: {name: 'keyword.control.define.netlinx'}},
      end: '\\)',
      patterns: [
        {
          match: '(?i)\\b([a-z_]\\w*)\\b(?=\\s*\\()',
          name: 'entity.name.function.netlinx'
        },
        {include: '#netlinx_keywords'},
        {
          match: '(?i)([a-z_][a-z0-9_]*)(?=\\s+)',
          name: 'support.type.user.netlinx'
        },
        {include: '#netlinx_variables'}
      ]
    },
    {include: '#netlinx_keywords'},
    {
      match: '(?i)(?i)\\b([a-z_][a-z0-9_]*)\\b(?=\\s*\\()',
      name: 'support.function.user.netlinx'
    },
    {include: '#netlinx_variables'}
  ],
  repository: {
    access: {
      match: '(?i)\\.[a-zA-Z_][a-zA-Z_0-9]*\\b(?!\\s*\\()',
      name: 'variable.other.dot-access.netlinx'
    },
    block: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.netlinx',
      patterns: [{include: '#block_innards'}]
    },
    block_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-block'},
        {include: '#preprocessor-rule-disabled-block'},
        {include: '#preprocessor-rule-other-block'},
        {include: '#access'},
        {
          captures: {
            1: {name: 'variable.other.netlinx'},
            2: {name: 'punctuation.definition.parameters.netlinx'}
          },
          match:
            '(?x)\n\t\t\t        (?x)\n\t\t\t(?:\n\t\t\t     (?: (?= \\s )           (?<!else|return) (?<=\\w)\\s+      #  or word + space before name\n\t\t\t     )\n\t\t\t)\n\t\t\t(\n\t\t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++    |              # actual name\n\t\t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )?  # if it is a NetLinx operator\n\t\t\t)\n\t\t\t \\s*(\\()',
          name: 'meta.initialization.netlinx'
        },
        {include: '#block'},
        {include: '$base'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.netlinx'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.netlinx'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.netlinx'}},
          end: '\\*/',
          name: 'comment.block.netlinx'
        },
        {
          begin: '\\(\\*',
          captures: {0: {name: 'punctuation.definition.comment.netlinx'}},
          end: '\\*\\)',
          name: 'comment.block.netlinx'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.netlinx'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.netlinx'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.netlinx'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.netlinx'}},
          end: '$\\n?',
          name: 'comment.line.double-slash.netlinx',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.netlinx'
            }
          ]
        }
      ]
    },
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b.*$',
      patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
    },
    dps_variables: {
      captures: {1: {name: 'support.variable.system.dps.dot-access.netlinx'}},
      match: '(?i)[a-z0-9_]+\\.\\b(number|port|system)\\b'
    },
    netlinx_constants: {
      match: '\\b(dv|vdv|btn|lvl|ch|adr)?([A-Z0-9_]+)\\b',
      name: 'constant.other.netlinx'
    },
    netlinx_keywords: {
      patterns: [
        {
          match:
            '(?i)(\\s*#\\b(define|disable_warning|else|end_if|if_defined|if_not_defined|include|warn)\\b)',
          name: 'keyword.control.netlinx'
        },
        {
          match: '(?i)\\b(call|define_call|system_call)\\b',
          name: 'keyword.control.netlinx'
        },
        {
          match: '(?i)\\b(length_array|max_length_array|set_length_array)\\b',
          name: 'support.function.netlinx'
        },
        {
          match: '(?i)\\b(clear_buffer|create_buffer|create_multi_buffer)\\b',
          name: 'keyword.control.netlinx'
        },
        {
          match: '(?i)\\b(on|off|total_off)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(clkmgr_set_daylightsavings_offset|clkmgr_delete_userdefined_timeserver|clkmgr_get_active_timeserver|clkmgr_get_daylightsavings_offset|clkmgr_get_end_daylightsavings_rule|clkmgr_get_resync_period|clkmgr_get_start_daylightsavings_rule|clkmgr_get_timeservers|clkmgr_get_timezone|clkmgr_is_daylightsavings_on|clkmgr_is_network_sourced|clkmgr_set_active_timeserver|clkmgr_set_clk_source|clkmgr_set_daylightsavings_mode|clkmgr_set_daylightsavings_offset|clkmgr_set_end_daylightsavings_rule|clkmgr_set_resync_period|clkmgr_set_start_daylightsavings_rule|clkmgr_set_timezone|)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(combine_channels|combine_devices|combine_levels|uncombine_channels|uncombine_devices|uncombine_levels)\\b',
          name: 'support.function.combine.netlinx'
        },
        {
          match:
            '(?i)\\b(__DATE__|__FILE__|__LDATE__|__LINE__|__NAME__|__TIME__)\\b',
          name: 'support.function.compiler.netlinx'
        },
        {
          match:
            '(?i)\\b(break|return|default|else|for|if|include|select|active|switch|case|while|medium_while|long_while)\\b',
          name: 'keyword.control.netlinx'
        },
        {match: '(?i)\\b(true|false)\\b', name: 'constant.language.netlinx'},
        {
          match:
            '(?i)\\b(atoi|atof|atol|ch_to_wc|ftoa|hextoi|itoa|format|itohex|raw_be|raw_le)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(awake|command|hold|onerror|offline|online|standby)\\b',
          name: 'keyword.control.event.data.netlinx'
        },
        {
          captures: {
            1: {name: 'support.type.system.netlinx'},
            2: {name: 'support.variable.system.netlinx'}
          },
          match:
            '(?i)\\b(char|widechar|integer|sinteger|long|slong|float|double|dev|devchan)\\b\\s+([a-z_]\\w*)\\b(?!\\()'
        },
        {
          match:
            '(?i)\\b(char|widechar|integer|sinteger|long|slong|float|double|dev|devchan)\\b',
          name: 'support.type.system.netlinx'
        },
        {
          match:
            '(?i)\\b(device_id|device_id_string|device_info|device_standby|device_wake|dynamic_application_device|master_slot|master_sn|reboot|send_command|system_number)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(length_variable_to_string|variable_to_xml|xml_to_variable|length_variable_to_xml)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(button_event|channel_event|data_event|level_event|rebuild_event)\\b',
          name: 'keyword.control.event.netlinx'
        },
        {
          match:
            '(?i)\\b(file_close|file_copy|file_createdir|file_delete|file_dir|file_getdir|file_open|file_read|file_read_line|file_removedir|file_rename|file_seek|file_setdir|file_write|file_write_line)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(get_last|get_multi_buffer_string|get_pulse_time|get_serial_number|get_system_number|get_timer|get_unique_id|get_url_list)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(add_url_entry|delete_url_entry|get_dns_list|get_ip_address|ip_bound_client_open|ip_client_close|ip_client_open|ip_mc_server_open|ip_server_close|ip_server_open|ip_set_option|set_ip_address|set_dns_list)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(~levsyncon|~levsyncoff|create_level|send_level|set_virtual_level_count)\\b',
          name: 'support.function.netlinx'
        },
        {
          match: '(?i)\\b(set_log_level|get_log_level|amx_log)\\b',
          name: 'support.function.log.netlinx'
        },
        {
          match:
            '(?i)\\b(exp_value|log_value|log10_value|power_value|sqrt_value)\\b',
          name: 'support.function.netlinx'
        },
        {
          match: '(?i)\\b(duet_mem_size_get|duet_mem_size_set|module_name)\\b',
          name: 'support.function.netlinx'
        },
        {
          match: '(\\&|~|\\||\\^|<|\\%|\\!|>|=|\\")',
          name: 'keyword.operator.netlinx'
        },
        {
          match:
            '(?i)\\b(dynamic_polled_port|first_local_port|static_port_binding)\\b',
          name: 'support.function.netlinx'
        },
        {match: '(?i)\\b(push|release)\\b', name: 'keyword.control.netlinx'},
        {
          match:
            '(?i)\\b(repeat|do_push|do_push_timed|do_release|min_to|push|push_channel|push_devchan|push_device|release|release_channel|release_devchan|release_device|to)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(set_outdoor_temperature|set_pulse_time|pulse|set_system_number|set_timer|set_virtual_channel_count|set_virtual_port_count)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(smtp_server_config_set|smtp_server_config_get|smtp_send)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(chard|chardm|compare_string|find_string|left_string|length_string|lower_string|max_length_string|mid_string|redirect_string|remove_string|right_string|send_string|set_length_string|string|string_to_variable|upper_string|variable_to_string)\\b',
          name: 'support.function.netlinx'
        },
        {
          match: '(?i)\\b(struct|structure)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(astro_clock|clock|date|date_to_day|date_to_month|date_to_year|day|day_of_week|ldate|time|time_to_hour|time_to_minute|time_to_second)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(timeline_active|timeline_create|timeline_event|timeline_get|timeline_kill|timeline_pause|timeline_reload|timeline_restart|timeline_set)\\b',
          name: 'support.function.timeline.netlinx'
        },
        {
          match:
            '(?i)\\b(_wc|wc_compare_string|wc_concat_string|wc_decode|wc_encode|wc_file_close|wc_file_open|wc_file_read|wc_file_read_line|wc_file_write|wc_file_write_line|wc_find_string|wc_get_buffer_char|wc_get_buffer_string|wc_left_string|wc_length_string|wc_lower_string|wc_max_length_string|wc_mid_string|wc_remove_string|wc_right_string|wc_set_length_string|wc_to_ch|wc_tp_encode|wc_upper_string)\\b',
          name: 'support.function.netlinx'
        },
        {
          match:
            '(?i)\\b(abs_value|max_value|min_value|random_number|type_cast)\\b',
          name: 'support.function.variable.netlinx'
        },
        {
          match:
            '(?i)\\b(constant|non_volatile|persistent|local_var|stack_var|volatile)\\b',
          name: 'storage.modifier.netlinx'
        },
        {
          match:
            '(?i)\\b(cancel_all_wait|cancel_all_wait_until|cancel_wait|cancel_wait_until|pause_all_wait|pause_wait|restart_all_wait|restart_wait|wait|wait_until|timed_wait_until)\\b',
          name: 'support.function.wait.netlinx'
        },
        {include: '#dps_variables'},
        {include: '#netlinx_constants'}
      ]
    },
    netlinx_variables: {match: '\\w+', name: 'variable.other.netlinx'},
    parens: {
      begin: '\\(',
      end: '\\)',
      name: 'meta.parens.netlinx',
      patterns: [{include: '$base'}]
    },
    'pragma-mark': {
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.pragma.netlinx'},
        3: {name: 'meta.toc-list.pragma-mark.netlinx'}
      },
      match: '^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))',
      name: 'meta.section'
    },
    'preprocessor-rule-disabled': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.if.netlinx'},
        3: {name: 'constant.numeric.preprocessor.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.netlinx'},
            2: {name: 'keyword.control.import.else.netlinx'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '$base'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          name: 'comment.block.preprocessor.if-branch',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-disabled-block': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.if.netlinx'},
        3: {name: 'constant.numeric.preprocessor.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.netlinx'},
            2: {name: 'keyword.control.import.else.netlinx'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#block_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          name: 'comment.block.preprocessor.if-branch.in-block',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-enabled': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.if.netlinx'},
        3: {name: 'constant.numeric.preprocessor.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.netlinx'},
            2: {name: 'keyword.control.import.else.netlinx'}
          },
          contentName: 'comment.block.preprocessor.else-branch',
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          patterns: [{include: '$base'}]
        }
      ]
    },
    'preprocessor-rule-enabled-block': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.if.netlinx'},
        3: {name: 'constant.numeric.preprocessor.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.netlinx'},
            2: {name: 'keyword.control.import.else.netlinx'}
          },
          contentName: 'comment.block.preprocessor.else-branch.in-block',
          end: '(?=^\\s*#\\s*endif\\b.*$)',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*$)',
          patterns: [{include: '#block_innards'}]
        }
      ]
    },
    'preprocessor-rule-other': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*$',
      patterns: [{include: '$base'}]
    },
    'preprocessor-rule-other-block': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.netlinx'},
        2: {name: 'keyword.control.import.netlinx'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*$',
      patterns: [{include: '#block_innards'}]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                           # flags\n    \t\t\t\t\t\t[,;:_]?                              # separator character (AltiVec)\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\n    \t\t\t\t\t\t[diouxXDOUeEfFgGaACcSspn%]           # conversion type\n    \t\t\t\t\t",
          name: 'constant.other.placeholder.netlinx'
        },
        {match: '%', name: 'invalid.illegal.placeholder.netlinx'}
      ]
    }
  },
  scopeName: 'source.netlinx'
}

export default grammar
