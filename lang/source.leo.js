// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ProvableHQ/leo-linguist>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.leo'],
  names: ['leo'],
  patterns: [
    {include: '#function_declaration'},
    {include: '#import_file'},
    {include: '#program_file'},
    {include: '#program_keyword'},
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#string_literal'},
    {include: '#integer_literal'},
    {include: '#built-in_core_assign'},
    {include: '#boolean_constant'},
    {include: '#import_keyword'},
    {include: '#control_keyword'},
    {include: '#storage_type_public'},
    {include: '#storage_type_private'},
    {include: '#storage_type_constant'},
    {include: '#storage_type_const'},
    {include: '#storage_type_record'},
    {include: '#storage_type_let'},
    {include: '#storage_type_mapping'},
    {include: '#inside_braces'},
    {include: '#type_params'},
    {include: '#function_parameters'},
    {include: '#console_methods'},
    {include: '#script_keyword'}
  ],
  repository: {
    address_literal: {
      match: '\\baleo1[A-z0-9]*',
      name: 'constant.other.address.leo'
    },
    async_keyword: {
      captures: {
        1: {name: 'storage.type.async.leo'},
        3: {name: 'storage.type.transition.leo'},
        4: {name: 'storage.type.function.leo'},
        5: {name: 'storage.type.inline.leo'}
      },
      match:
        '\\b(async)\\s+((\\btransition\\b)|(\\bfunction\\b)|(\\binline\\b))\\b\\s+\\w+\\s*\\('
    },
    block_comment: {begin: '/\\*', end: '\\*/', name: 'comment.block.leo'},
    boolean_constant: {
      match: '\\b(true|false)\\b',
      name: 'constant.language.boolean.leo'
    },
    'built-in_core_assign': {
      match: '\\b(([0-9][0-9_]*)(group|field|scalar))',
      name: 'storage.type.assign.leo'
    },
    circuit_attribute: {
      captures: {1: {name: 'entity.other.attribute.name'}},
      match: '\\b([a-zA-Z_]\\w*)\\s*:(?!:)'
    },
    circuit_call: {
      begin: '(?<=^|\\s)([a-zA-Z_]\\w*)\\s*\\{',
      beginCaptures: {1: {name: 'entity.name.struct.leo'}},
      end: '\\}',
      patterns: [
        {include: '#circuit_attribute'},
        {include: '#inside_braces'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#core_types'},
        {include: '#integer_literal'},
        {include: '#address_literal'},
        {include: '#built-in_core_assign'},
        {include: '#boolean_constant'},
        {include: '#control_keyword'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#storage_type_record'},
        {include: '#storage_type_let'},
        {include: '#string_literal'},
        {include: '#invoking_attribute'},
        {include: '#console_methods'},
        {include: '#future_type'},
        {include: '#future_type_parameters'}
      ]
    },
    circuit_static_call: {
      captures: {
        1: {name: 'entity.name.struct.leo'},
        2: {name: 'entity.name.function.static.leo'}
      },
      match: '(\\w+)\\s*::\\s*(\\w+)'
    },
    conditional_statement: {
      begin: '(?<=^|\\s)(if|else\\s*if)\\s+\\w+',
      beginCaptures: {1: {name: 'keyword.control.leo'}},
      end: '\\}',
      patterns: [
        {include: '#conditional_statement'},
        {include: '#statement_return'},
        {include: '#variable_declaration'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#core_types'},
        {include: '#integer_literal'},
        {include: '#address_literal'},
        {include: '#built-in_core_assign'},
        {include: '#boolean_constant'},
        {include: '#control_keyword'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#storage_type_record'},
        {include: '#storage_type_let'}
      ]
    },
    console_methods: {
      captures: {1: {name: 'support.function.console.leo'}},
      match: '\\b(assert|assert_eq|assert_neq)\\b'
    },
    control_keyword: {
      match: '\\b(else|if|in|for|as)\\b',
      name: 'keyword.control.leo'
    },
    core_types: {
      match:
        '\\b(bool|field|scalar|u8|u16|u32|u64|u128|i8|i16|i32|i64|i128|string|address|signature|group|integer)\\b',
      name: 'storage.type.core.leo'
    },
    custom_type_identifier: {
      captures: {1: {name: 'entity.name.type.custom.leo'}},
      match: '\\b([a-zA-Z_]\\w*)(?=\\s*[\\],;)=\\{])'
    },
    function_attribute: {
      captures: {1: {name: 'variable.parameter.leo'}},
      match: '\\b(\\w*)\\b\\s*:'
    },
    function_call: {
      captures: {1: {name: 'entity.name.function.call.leo'}},
      match: '\\b([a-zA-Z_]\\w*)\\s*(?=\\()'
    },
    function_declaration: {
      captures: {
        1: {name: 'entity.name.function.leo'},
        2: {name: 'entity.name.function.leo'}
      },
      match:
        '(?:(?<=\\btransition\\b)|(?<=\\bfunction\\b)|(?<=\\binline\\b))\\s+(\\w+)\\s*\\(',
      name: 'function.declaration.leo'
    },
    function_keyword: {
      match: '\\b(function)\\b',
      name: 'storage.type.function.leo'
    },
    function_parameters: {
      begin:
        '(?:(async)\\s*(function|transition|inline))\\s+(\\w+)\\s*\\(|(?:(function|transition|inline))\\s+(\\w+)\\s*\\(',
      beginCaptures: {
        1: {name: 'storage.type.async.leo'},
        2: {name: 'storage.type.function.leo'},
        3: {name: 'entity.name.function.leo'},
        4: {name: 'storage.type.function.leo'},
        5: {name: 'entity.name.function.leo'}
      },
      end: '\\)',
      patterns: [
        {include: '#function_attribute'},
        {include: '#integer_literal'},
        {include: '#boolean_constant'},
        {include: '#core_types'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#storage_type_record'},
        {include: '#line_comment'},
        {include: '#block_comment'},
        {include: '#future_type'},
        {include: '#future_type_parameters'},
        {include: '#custom_type_identifier'}
      ]
    },
    future_type: {
      captures: {1: {name: 'storage.type.future.leo'}},
      match: '\\b(Future)\\b'
    },
    future_type_parameters: {
      begin: '(?<=Future)\\s*(\\<)',
      beginCaptures: {1: {name: 'storage.type.future.angle.brackets.leo'}},
      end: '(\\>)',
      endCaptures: {1: {name: 'storage.type.future.angle.brackets.leo'}},
      patterns: [
        {
          begin: '(Fn)',
          beginCaptures: {1: {name: 'storage.type.future.leo'}},
          end: '(\\))',
          endCaptures: {1: {name: 'storage.type.future.parantesis.leo'}},
          patterns: [
            {
              begin: '(\\()',
              beginCaptures: {1: {name: 'storage.type.future.parantesis.leo'}},
              end: '(?=\\))',
              patterns: [
                {include: '#core_types'},
                {include: '#integer_literal'},
                {include: '#future_type'},
                {include: '#future_type_parameters'}
              ]
            }
          ]
        }
      ]
    },
    import_file: {
      match: '(?<=\\bimport\\b)\\s+\\b\\w+\\b\\s*\\.\\s*\\b\\w+\\b\\s*(?=;)',
      name: 'entity.name.type.import.leo'
    },
    import_keyword: {
      match: '\\b(import)\\b',
      name: 'keyword.control.import.leo'
    },
    inline_keyword: {match: '\\b(inline)\\b', name: 'storage.type.inline.leo'},
    inside_braces: {
      begin: '\\{',
      end: '\\}',
      name: 'punctuation.braces.leo',
      patterns: [
        {include: '#conditional_statement'},
        {include: '#control_keyword'},
        {include: '#variable_declaration'},
        {include: '#statement_for_iterator_type'},
        {include: '#return_type'},
        {include: '#statement_return'},
        {include: '#function_call'},
        {include: '#mapping_declaration'},
        {include: '#function_parameters'},
        {include: '#function_declaration'},
        {include: '#async_keyword'},
        {include: '#function_keyword'},
        {include: '#struct_keyword'},
        {include: '#program_keyword'},
        {include: '#transition_keyword'},
        {include: '#script_keyword'},
        {include: '#inline_keyword'},
        {include: '#record_strucut_definition'},
        {include: '#storage_type_mapping'},
        {include: '#import_file'},
        {include: '#program_file'},
        {include: '#inside_braces'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#integer_literal'},
        {include: '#circuit_static_call'},
        {include: '#circuit_call'},
        {include: '#core_types'},
        {include: '#address_literal'},
        {include: '#built-in_core_assign'},
        {include: '#boolean_constant'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#storage_type_const'},
        {include: '#storage_type_record'},
        {include: '#storage_type_let'},
        {include: '#string_literal'},
        {include: '#invoking_attribute'},
        {include: '#console_methods'},
        {include: '#type_params'},
        {include: '#method_name_call'},
        {include: '#console_methods'},
        {include: '#future_type'},
        {include: '#future_type_parameters'},
        {match: '@[a-zA-Z][a-zA-Z0-9_]*', name: 'support.other.annotation.leo'}
      ]
    },
    integer_literal: {
      match:
        '\\b([0-9][0-9_]*|0b[0-1_]+|0o[0-7_]+|0x[0-9A-F_]+)([ui](8|16|32|64|128))?\\b',
      name: 'constant.numeric.decimal.leo'
    },
    invoking_attribute: {
      captures: {1: {name: 'entity.other.attribute.name'}},
      match: '(?<=\\.)(?<!\\.\\.)(\\w+(?=\\.)|\\b\\w+\\b(?!\\())'
    },
    line_comment: {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.leo'
    },
    mapping_declaration: {
      begin: '(?<=\\bmapping\\b)\\s+\\w+\\:s*',
      end: '$',
      patterns: [
        {include: '#core_types'},
        {include: '#integer_literal'},
        {include: '#future_type'},
        {include: '#future_type_parameters'},
        {include: '#block_comment'},
        {include: '#line_comment'}
      ]
    },
    method_name_call: {
      captures: {1: {name: 'entity.name.struct.attribute.leo'}},
      match: '\\w+\\s*\\.\\s*([a-zA-Z][a-zA-Z0-9_]*)\\s*'
    },
    program_file: {
      match: '(?<=\\bprogram\\b)\\s+\\b\\w+\\b\\s*\\.\\s*\\baleo\\b\\s*(?={)',
      name: 'entity.name.type.program.leo'
    },
    program_keyword: {
      match: '\\b(program)\\b',
      name: 'storage.type.program.leo'
    },
    record_strucut_definition: {
      begin: '(?:(?<=\\brecord\\b)|(?<=\\bstruct\\b))\\s+\\b\\w+\\b\\s*\\{',
      end: '\\}',
      patterns: [
        {include: '#circuit_attribute'},
        {include: '#inside_braces'},
        {include: '#core_types'},
        {include: '#integer_literal'},
        {include: '#built-in_core_assign'},
        {include: '#boolean_constant'},
        {include: '#control_keyword'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#storage_type_let'},
        {include: '#string_literal'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#invoking_attribute'},
        {include: '#type_params'},
        {include: '#circuit_static_call'},
        {include: '#circuit_call'},
        {include: '#function_parameters'},
        {include: '#console_methods'},
        {include: '#future_type'},
        {include: '#future_type_parameters'}
      ]
    },
    return_type: {
      begin: '->',
      end: '(?={)',
      patterns: [
        {include: '#core_types'},
        {include: '#storage_type_public'},
        {include: '#storage_type_private'},
        {include: '#storage_type_constant'},
        {include: '#integer_literal'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#future_type'},
        {include: '#future_type_parameters'},
        {include: '#custom_type_identifier'}
      ]
    },
    script_keyword: {match: '\\b(script)\\b', name: 'storage.type.script.leo'},
    statement_for_iterator_type: {
      begin: '(?<=for)\\s*\\w+:\\s*',
      end: '(?=in)',
      patterns: [
        {include: '#core_types'},
        {include: '#future_type'},
        {include: '#future_type_parameters'}
      ]
    },
    statement_return: {
      begin: '\\b(return)\\b',
      beginCaptures: {1: {name: 'keyword.control.leo'}},
      end: ';',
      patterns: [
        {include: '#integer_literal'},
        {include: '#address_literal'},
        {include: '#built-in_core_assign'},
        {include: '#boolean_constant'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#method_name_call'},
        {include: '#invoking_attribute'},
        {include: '#circuit_call'},
        {include: '#function_call'}
      ]
    },
    storage_type_const: {
      match: '\\b(const)\\b',
      name: 'storage.type.const.leo'
    },
    storage_type_constant: {
      match: '\\b(constant)\\b',
      name: 'storage.type.constant.leo'
    },
    storage_type_let: {match: '\\b(let)\\b', name: 'storage.type.let.leo'},
    storage_type_mapping: {
      match: '\\b(mapping)\\b',
      name: 'storage.type.mapping.leo'
    },
    storage_type_private: {
      match: '\\b(private)\\b',
      name: 'storage.type.private.leo'
    },
    storage_type_public: {
      match: '\\b(public)\\b',
      name: 'storage.type.public.leo'
    },
    storage_type_record: {
      match: '\\b(record)\\b',
      name: 'storage.type.record.leo'
    },
    string_literal: {begin: '"', end: '"', name: 'string.quoted.double.leo'},
    struct_keyword: {match: '\\b(struct)\\b', name: 'storage.type.struct.leo'},
    transition_keyword: {
      match: '\\b(transition)\\b',
      name: 'storage.type.transition.leo'
    },
    variable_declaration: {
      begin: '(?:(?<=\\blet|const\\b))\\s*\\w+\\s*\\:\\s*',
      end: '\\=',
      patterns: [
        {include: '#core_types'},
        {include: '#integer_literal'},
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#future_type'},
        {include: '#future_type_parameters'},
        {include: '#custom_type_identifier'}
      ]
    }
  },
  scopeName: 'source.leo'
}

export default grammar
