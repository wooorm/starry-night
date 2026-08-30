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
    {include: '#comments'},
    {include: '#annotations'},
    {include: '#program_declaration'},
    {include: '#import_declaration'},
    {include: '#function_declaration'},
    {include: '#type_declaration'},
    {include: '#address_literal'},
    {include: '#suffix_literal'},
    {include: '#numeric_literal'},
    {include: '#string_literal'},
    {include: '#identifier_literal'},
    {include: '#language_constants'},
    {include: '#language_variables'},
    {include: '#assertions'},
    {include: '#declaration_keywords'},
    {include: '#modifier_keywords'},
    {include: '#control_keywords'},
    {include: '#special_types'},
    {include: '#primitive_types'},
    {include: '#program_id'},
    {include: '#function_call'},
    {include: '#operators'}
  ],
  repository: {
    address_literal: {
      match: '\\baleo1[a-z0-9]+\\b',
      name: 'constant.other.address.leo'
    },
    annotations: {
      captures: {
        1: {name: 'punctuation.definition.annotation.leo'},
        2: {name: 'entity.name.decorator.leo'}
      },
      match: '(@)\\s*([A-Za-z_][A-Za-z0-9_]*)'
    },
    assertions: {
      match: '(?<!\\.)\\b(assert_eq|assert_neq|assert)\\b',
      name: 'support.function.builtin.leo'
    },
    comments: {
      patterns: [
        {match: '//.*$', name: 'comment.line.double-slash.leo'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.leo'}
      ]
    },
    control_keywords: {
      patterns: [
        {
          match: '(?<!\\.)\\b(if|else|for|in|return)\\b',
          name: 'keyword.control.leo'
        },
        {match: '(?<!\\.)\\b(as)\\b', name: 'keyword.operator.cast.leo'}
      ]
    },
    declaration_keywords: {
      match:
        '(?<!\\.)\\b(fn|struct|record|interface|mapping|storage|const|let|constructor)\\b',
      name: 'storage.type.leo'
    },
    function_call: {
      captures: {1: {name: 'entity.name.function.call.leo'}},
      match: '\\b([A-Za-z_][A-Za-z0-9_]*)\\s*(?=\\()'
    },
    function_declaration: {
      captures: {
        1: {name: 'storage.type.function.leo'},
        2: {name: 'entity.name.function.leo'}
      },
      match: '\\b(fn)\\s+([A-Za-z][A-Za-z0-9_]*)'
    },
    identifier_literal: {
      match: "'[A-Za-z][A-Za-z0-9_]*'",
      name: 'string.quoted.single.leo'
    },
    import_declaration: {
      captures: {
        1: {name: 'keyword.control.import.leo'},
        2: {name: 'entity.name.namespace.leo'},
        3: {name: 'punctuation.accessor.leo'},
        4: {name: 'keyword.other.network.leo'}
      },
      match: '\\b(import)\\s+([A-Za-z][A-Za-z0-9_]*)\\s*(\\.)\\s*(aleo)\\b'
    },
    language_constants: {
      match: '(?<!\\.)\\b(true|false|none)\\b',
      name: 'constant.language.leo'
    },
    language_variables: {
      match: '(?<!\\.)\\b(self|block|network)\\b',
      name: 'variable.language.leo'
    },
    modifier_keywords: {
      match: '(?<!\\.)\\b(export|final|view|public|private|constant|dyn)\\b',
      name: 'storage.modifier.leo'
    },
    numeric_literal: {
      match:
        '\\b(0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*)(u8|u16|u32|u64|u128|i8|i16|i32|i64|i128)?\\b',
      name: 'constant.numeric.leo'
    },
    operators: {
      match:
        '->|=>|::|\\.\\.=?|\\*\\*=?|<<=?|>>=?|&&=?|\\|\\|=?|==|!=|<=|>=|[+\\-*/%&|^]=?|[<>!?=]',
      name: 'keyword.operator.leo'
    },
    primitive_types: {
      match:
        '(?<!\\.)\\b(address|bool|field|group|scalar|signature|string|identifier|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128)\\b',
      name: 'support.type.leo'
    },
    program_declaration: {
      captures: {
        1: {name: 'keyword.other.program.leo'},
        2: {name: 'entity.name.namespace.leo'},
        3: {name: 'punctuation.accessor.leo'},
        4: {name: 'keyword.other.network.leo'}
      },
      match: '\\b(program)\\s+([A-Za-z][A-Za-z0-9_]*)\\s*(\\.)\\s*(aleo)\\b'
    },
    program_id: {
      captures: {
        1: {name: 'entity.name.namespace.leo'},
        2: {name: 'punctuation.accessor.leo'},
        3: {name: 'keyword.other.network.leo'}
      },
      match: '\\b([A-Za-z][A-Za-z0-9_]*)\\s*(\\.)\\s*(aleo)\\b'
    },
    special_types: {
      match: '(?<!\\.)\\b(Final|Fn|Future)\\b',
      name: 'support.type.leo'
    },
    string_literal: {begin: '"', end: '"', name: 'string.quoted.double.leo'},
    suffix_literal: {
      match:
        '\\b(0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*)(field|group|scalar)\\b',
      name: 'constant.numeric.leo'
    },
    type_declaration: {
      captures: {
        1: {name: 'storage.type.leo'},
        2: {name: 'entity.name.type.leo'}
      },
      match: '\\b(struct|record|interface)\\s+([A-Za-z][A-Za-z0-9_]*)'
    }
  },
  scopeName: 'source.leo'
}

export default grammar
