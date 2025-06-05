// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tenable/sublimetext-nasl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nasl'],
  names: ['nasl'],
  patterns: [
    {include: '#pure_string'},
    {include: '#impure_string'},
    {include: '#comment'},
    {include: '#augmented_assign_operators'},
    {include: '#arithmetic_operators'},
    {include: '#increment_decrement_operators'},
    {include: '#assignment_operator'},
    {include: '#logical_operators'},
    {include: '#comparison_operators'},
    {include: '#hexadecimal_literal'},
    {include: '#octal_literal'},
    {include: '#decimal_literal'},
    {include: '#language_constants'},
    {include: '#keywords'},
    {include: '#builtin_variable_names'},
    {include: '#builtin_constant_names'},
    {include: '#loc_keyword'},
    {include: '#glob_keyword'},
    {include: '#var_keyword'},
    {include: '#new_keyword'},
    {include: '#delete_keyword'},
    {include: '#include_keyword'},
    {include: '#this_keyword'},
    {include: '#super_keyword'},
    {include: '#block'},
    {include: '#function_call'},
    {include: '#namespace_prefix'},
    {include: '#keyword_arguments'},
    {include: '#namespace_storage_type'},
    {include: '#object_storage_type'},
    {include: '#function_definition'},
    {include: '#comment_block'}
  ],
  repository: {
    arithmetic_operators: {
      match: '\\+|\\-|\\*|\\*\\*|/|%|<<|>>|>>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.nasl'
    },
    assignment_operator: {
      match: '\\=',
      name: 'keyword.operator.assignment.nasl'
    },
    augmented_assign_operators: {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|>>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.nasl'
    },
    block: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.nasl',
      patterns: [{include: '#block_innards'}]
    },
    block_innards: {
      patterns: [
        {include: '#function_call'},
        {include: '#block'},
        {include: '$base'}
      ]
    },
    builtin_constant_names: {
      match:
        '\\b(pcap_timeout|IPPROTO_TCP|IPPROTO_ICMP|IPPROTO_IGMP|IPPROTO_UDP|ENCAPS_SSLv23|ENCAPS_SSLv2|ENCAPS_SSLv3|ENCAPS_TLSv1|ENCAPS_TLSv1_1|ENCAPS_TLSv1_2|ENCAPS_TLSv1_3|ENCAPS_VERIFY_PEER|ENCAPS_VERIFY_HOST|ENCAPS_UNSAFE_DHKEYLEN|ENCAPS_DISABLE_SSLv2|ENCAPS_DISABLE_SSLv3|ENCAPS_DISABLE_TLSv1|ENCAPS_DISABLE_TLSv1_1|ENCAPS_DISABLE_TLSv1_2|ENCAPS_DISABLE_TLSv1_3|NID_SHA1|NID_SHA256|NID_SHA512|NESSUS_3|TH_SYN|TH_RST|TH_PUSH|TH_ACK|TH_URG|IP_DF|IP_MF|IP_OFFMASK|ACT_GATHER_INFO|ACT_ATTACK|ACT_MIXED_ATTACK|ACT_DESTRUCTIVE_ATTACK|ACT_DENIAL|ACT_SCANNER|ACT_SETTINGS|ACT_KILL_HOST|ACT_FLOOD|ACT_COMPLIANCE_CHECK|ACT_PATCH_SETUP|ACT_PATCH_APPLY|ACT_PATCH_POST_APPLY|ACT_THIRD_PARTY_INFO|ACT_END|ACT_END_REPORT|ACT_END2|NOERR|ETIMEDOUT|ECONNRESET|EUNREACH|EUNKNOWN|ESSL|EINPROGRESS|ECONNREFUSED|ENOBUFS|EACCES|EADDRNOTAVAIL|EINVAL|ENOTSTARTED|EROLLEDBACK|EROLLBACKFAILED|ECOMMITFAILED|SO_PID|SO_SEND_CHUNK_SIZE|SO_RX|SO_TX|Z_RLE|Z_HUFFMAN_ONLY|Z_FILTERED|SEEK_CUR|SEEK_END|DLT_FDDI|DLT_ENC|DLT_EN10MB|DLT_IEEE802|DLT_SLIP|DLT_LINUX_SLL|DLT_LOOP|DLT_NULL|DLT_PPP_SERIAL|DLT_PPP_ETHER|DLT_PPP_BSDOS|DLT_SLIP_BSDOS|DLT_PPP|DLT_RAW|DLT_UNKNOWN|N_STATE_DIR|N_LOG_DIR|N_CONF_DIR|N_CA_PUB_DIR|N_CA_PRIV_DIR|N_WWW_DIR|N_PLUGIN_DIR|N_REPORT_ENGINE_DIR|N_AUDITS_DIR|N_TOOLS_DIR|N_WIZARDS_DIR|N_SBIN_DIR|N_BIN_DIR|N_REMOTE_DIR|N_TEMPLATES_DIR|N_LIB_DIR|N_LIBEXEC_DIR|SHUT_RD|SHUT_WR|SHUT_RDWR|XMLRPC_CTRL_SCAN_STOP|XMLRPC_CTRL_SCAN_PAUSE|XMLRPC_CTRL_SCAN_RESUME|XMLRPC_CTRL_SCAN_KILL|AF_INET|AF_INET6|NC_ENCODE_XML|NC_ENCODE_JSON|NC_ENCODE_RAW|DB_ACL_ATTACH|DB_ACL_DETACH|DB_ACL_ANALYZE|DB_ACL_CREATE_VTABLE|DB_ACL_DROP_VTABLE|DB_ACL_FUNCTION|DB_ACL_SAVEPOINT|JCS_UNKNOWN|JCS_GRAYSCALE|JCS_RGB|JCS_YCbCr|JCS_CMYK|JCS_YCCK|XML_PARSE_NOENT|XML_PARSE_DTDLOAD|XML_PARSE_DTDATTR|XML_PARSE_DTDVALID|XML_PARSE_NOERROR|XML_PARSE_NOWARNING|XML_PARSE_PEDANTIC|XML_PARSE_NOBLANKS|XML_PARSE_SAX1|XML_PARSE_XINCLUDE|XML_PARSE_NONET|XML_PARSE_NODICT|XML_PARSE_NSCLEAN|XML_PARSE_NOCDATA|XML_PARSE_NOXINCNODE|XML_PARSE_COMPACT|XML_PARSE_OLD10|XML_PARSE_NOBASEFIX|XML_PARSE_HUGE|XML_PARSE_OLDSAX|XML_PARSE_IGNORE_ENC|XML_PARSE_BIG_LINES|XMLSEC_KEY_FORMAT_BINARY|XMLSEC_KEY_FORMAT_PEM|XMLSEC_KEY_FORMAT_DER|XMLSEC_KEY_FORMAT_PKCS8_PEM|XMLSEC_KEY_FORMAT_PKCS8_DER|XMLSEC_KEY_FORMAT_PKCS12|XMLSEC_KEY_FORMAT_CERT_PEM|XMLSEC_KEY_FORMAT_CERT_DER|SHARED_OBJECTS|FORK_SHARED_GLOBALS|FORK_SHARED_OBJECTS|FORK_TERM_ON_RELOAD|ENV_APP|ENV_SCRIPT|ENV_RUNTIME|ENV_OS|ENV_HOST|ENV_SYSTEM|ENV_PLUGIN|ENV_SCAN|PRODUCT_NESSUSD|PRODUCT_WIN_AGENT|PRODUCT_UNIX_AGENT|PRODUCT_NESSUSD_NSX|SERIALIZE_NONE|SERIALIZE_JSON|SERIALIZE_XML|SERIALIZE_URL|SERIALIZE_URL_QUERY|SERIALIZE_URL_PATH|SERIALIZE_ZIP|SERIALIZE_FORMAT|SERIALIZE_OBJECT|SERIALIZE_STRICT|SERIALIZE_FLOATS_TO_STRING|SKTEX_KDC|SKTEX_PROXY|SKTEX_TCP|SKTEX_UDP|SKTEX_NOBLOCK|SKTEX_SSH|SKTEX_SMB|NOGEX_DFLT|DB_ENC_NONE|DB_ENC_MASTER_KEY|DB_ENC_DEFAULT_KEY|DB_ENC_RAW_KEY|DB_ENC_PASSWORD|DB_COMP_NONE|DB_COMP_ZLIB|DB_COMP_SNAPPY|OP_MODE_OFB128|OP_MODE_XTS128|TIME_OFDAY|TIME_UNIX|TIME_UTC|TIME_LOCAL|Z_NO_FLUSH|Z_FINISH|Z_PARTIAL_FLUSH|RSA_PKCS1_PADDING|RSA_PKCS1_OAEP_PADDING|RSA_NO_PADDING|NASL_TYPE_UNSET|NASL_TYPE_INT|NASL_TYPE_UINT|NASL_TYPE_NUMBER|NASL_TYPE_STRING|NASL_TYPE_DATA|NASL_TYPE_STRDATA|NASL_TYPE_BOOL|NASL_TYPE_ARRAY|NASL_TYPE_LIST|NASL_TYPE_FUNCTION|NASL_TYPE_OBJECT|SCAN_ERROR_UNRESOLVEABLE_TARGET|SCAN_ERROR_UNPARSEABLE_TARGET|SCAN_ERROR_RESTRICTED_TARGET|SCAN_ERROR_DISALLOWED_TARGET|SCAN_ERROR_ESSENTIALS_SCAN_TARGET_LIMIT|SCAN_ERROR_LICENSE_SCAN_TARGET_LIMIT|SCAN_ERROR_ESSENTIALS_OVERALL_TARGET_LIMIT|SCAN_ERROR_EVAL_OVERALL_TARGET_LIMIT|SCAN_ERROR_LICENSE_OVERALL_TARGET_LIMIT|SCAN_ERROR_INTERFACE_PACKET_FORGERY_UNAVAILABLE|SCAN_ERROR_VM_PACKET_FORGERY_UNAVAILABLE|SCAN_ERROR_INTERFACE_PACKET_FORGERY_UNRELIABLE|SCAN_ERROR_PACKET_CAPTURE_TRUNCATION|SCAN_ERROR_TARGET_UNREACHABLE|SCAN_ERROR_TARGET_CONGESTION|SCAN_ERROR_AGENT_SCAN_NOT_STARTED|SCAN_ERROR_AGENT_SCANS_NOT_STARTED|SCAN_ERROR_AGENT_SCAN_NOT_COMPLETED|SCAN_ERROR_AGENT_SCANS_NOT_COMPLETED|SCAN_ERROR_AGENT_SCANS_ABORTED|SCAN_ERROR_SCANNER_IMPORT_FAILURE|SCAN_ERROR_AGENT_IMPORT_FAILURE|SCAN_ERROR_NODE_IMPORT_FAILURE|SCAN_ERROR_ATTACHMENT_NOT_FOUND|SCAN_ERROR_ATTACHMENT_TOO_LARGE|SCAN_ERROR_AUDIT_DEPRECATED|SCAN_ERROR_EMAIL_FAILURE|SCAN_ERROR_PLUGIN_GENERIC|SCAN_ERROR_PORTSCANNER_PORT_LIMIT|SCAN_ERROR_REPORT_PORT_LIMIT|SCAN_ERROR_SCRATCHPAD_SIZE_LIMIT|IPFMT_IP6_NO_SCOPE|OP_APPEND|OP_DELETE|OP_INSERT|NID_X25519|NID_X448|NID_ED25519|NID_ED448|SUCCESS|E_EXEC_FAILED|E_TRUNCATED|E_TIMEOUT|E_OOM|E_IO|E_INVAL|ON_OVERFLOW_ABORT|ON_OVERFLOW_FAIL|ON_OVERFLOW_TRUNCATE|FUNCTION_NAME|SCRIPT_NAME|ACT_INIT|ENCAPS_IP|MSG_OOB|IPPROTO_IP|TH_FIN|description|COMMAND_LINE|NASL_LEVEL|LINE_NUMBER)\\b',
      name: 'support.constant.builtin.nasl'
    },
    builtin_variable_names: {
      match: '\\b(__FCT_ANON_ARGS|_FCT_ANON_ARGS)\\b',
      name: 'support.variable.builtin.nasl'
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.nasl'}},
      match: '(#|//).*$\\n?',
      name: 'comment.line.single.nasl'
    },
    comment_block: {
      begin: '\\s*/\\*',
      captures: {1: {name: 'punctuation.definition.comment.nasl'}},
      end: '\\*/',
      name: 'comment.block.nasl'
    },
    comparison_operators: {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=|><|>\\!<|\\!~|\\=~',
      name: 'keyword.operator.comparison.nasl'
    },
    decimal_literal: {
      match: '\\b([1-9]+[0-9]*|0)',
      name: 'constant.numeric.integer.decimal.nasl'
    },
    delete_keyword: {match: '\\b(delete)\\b(?!:)', name: 'keyword.delete.nasl'},
    entity_name_function: {
      patterns: [{include: '#illegal_names'}, {include: '#identifier'}]
    },
    escaped_char: {
      captures: {
        1: {name: 'constant.character.escape.hex.nasl'},
        10: {name: 'constant.character.escape.linefeed.nasl'},
        11: {name: 'constant.character.escape.return.nasl'},
        12: {name: 'constant.character.escape.tab.nasl'},
        13: {name: 'constant.character.escape.vertical-tab.nasl'},
        2: {name: 'constant.character.escape.octal.nasl'},
        3: {name: 'constant.character.escape.newline.nasl'},
        4: {name: 'constant.character.escape.backlash.nasl'},
        5: {name: 'constant.character.escape.double-quote.nasl'},
        6: {name: 'constant.character.escape.single-quote.nasl'},
        7: {name: 'constant.character.escape.bell.nasl'},
        8: {name: 'constant.character.escape.backspace.nasl'},
        9: {name: 'constant.character.escape.formfeed.nasl'}
      },
      match:
        '(\\\\x[0-9A-Fa-f]{2})|(\\\\[0-7]{3})|(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    function_call: {
      captures: {
        1: {name: 'punctuation.whitespace.function-call.leading.nasl'},
        2: {name: 'support.function.any-method.nasl'},
        3: {name: 'punctuation.definition.parameters.nasl'}
      },
      match:
        '(?x) (?: (?= \\s )  (?:(?<=else|return) | (?<!\\w)) (\\s+))?(\\b(?!(while|for|foreach|repeat|if|else|return|switch)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b )++  ) \\s*(\\()',
      name: 'meta.function-call.nasl'
    },
    function_definition: {
      begin:
        '^\\s*((?:private\\s+|public\\s+|protected\\s+)?function)\\s+(?=~?[A-Za-z_][A-Za-z0-9_]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.function.nasl'}},
      end: '(\\))\\s*',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasl'}},
      name: 'meta.function.nasl',
      patterns: [
        {
          begin: '(?=~?[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.nasl',
          end: '(?![A-Za-z0-9_~])',
          patterns: [{include: '#entity_name_function'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.nasl'}
          },
          contentName: 'meta.function.parameters.nasl',
          end: '(?=\\)\\s*)',
          patterns: [
            {
              captures: {
                1: {name: 'variable.parameter.function.nasl'},
                2: {name: 'punctuation.separator.parameters.nasl'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)]))'
            }
          ]
        }
      ]
    },
    glob_keyword: {
      match: '\\b(global_var)\\b',
      name: 'storage.modifier.global.nasl'
    },
    hexadecimal_literal: {
      match: '\\b(?i:(0x[[:xdigit:]]*))',
      name: 'constant.numeric.integer.hexadecimal.nasl'
    },
    identifier: {match: '~?[A-Za-z_][A-Za-z0-9_]*'},
    illegal_names: {
      match:
        '\\b(and|or|break|continue|else|for|foreach|global_var|local_var|if|return|while|until|in|of)\\b',
      name: 'invalid.illegal.name.nasl'
    },
    impure_string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasl'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasl'}},
      name: 'string.quoted.double.nasl'
    },
    include_keyword: {match: '\\b(include)\\b', name: 'keyword.include.nasl'},
    increment_decrement_operators: {
      match: '(\\-\\-|\\+\\+)',
      name: 'keyword.operator.increment-decrement.nasl'
    },
    keyword_arguments: {
      begin: '(?<!:)\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(\\:)(?!=|\\:)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.nasl'},
        2: {name: 'keyword.operator.assignment.nasl'}
      },
      end: '\\s*(?:(,)|(?=$\\n?|[\\)]))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.nasl'}},
      patterns: [{include: '$self'}]
    },
    keywords: {
      match:
        '\\b(if|else|for|while|do|repeat|until|foreach|break|continue|return|switch|case|in|of)\\b',
      name: 'keyword.control.flow.nasl'
    },
    language_constants: {
      match: '\\b(NULL|TRUE|FALSE|true|false)\\b',
      name: 'constant.language.nasl'
    },
    loc_keyword: {
      match: '\\b(local_var)\\b',
      name: 'storage.modifier.local.nasl'
    },
    logical_operators: {
      match: '\\b(and|or|\\|\\||&&)\\b|\\!',
      name: 'keyword.operator.logical.nasl'
    },
    namespace_prefix: {
      captures: {
        1: {name: 'entity.name.namespace.nasl'},
        2: {name: 'punctuation.accessor.namespace.nasl'}
      },
      match: '\\b([A-Za-z_][A-Za-z0-9_]*)(\\:\\:)\\b(?=[A-Za-z_][A-Za-z0-9_]*)'
    },
    namespace_storage_type: {
      captures: {
        1: {name: 'storage.type.namespace.nasl'},
        2: {name: 'entity.name.namespace.nasl'}
      },
      match: '\\b(namespace)\\b\\s+([a-zA-Z0-9_]+)'
    },
    new_keyword: {match: '\\b(new)\\b(?!:)', name: 'keyword.new.nasl'},
    object_storage_type: {
      begin: '^\\s*(object)\\s+([a-zA-Z0-9_]+)',
      captures: {
        1: {name: 'storage.type.modifier.nasl'},
        2: {name: 'entity.name.class.nasl'}
      },
      end: '\\{',
      name: 'meta.class.nasl'
    },
    octal_literal: {
      match: '\\b(0[0-7]+)',
      name: 'constant.numeric.integer.octal.nasl'
    },
    pure_string: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasl'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasl'}},
      name: 'string.quoted.single.js',
      patterns: [{include: '#escaped_char'}]
    },
    super_keyword: {match: '\\b(super)\\b', name: 'keyword.super.nasl'},
    this_keyword: {match: '\\b(this)\\b', name: 'keyword.this.nasl'},
    var_keyword: {match: '\\b(var)\\b(?!:)', name: 'storage.type.variable.nasl'}
  },
  scopeName: 'source.nasl'
}

export default grammar
