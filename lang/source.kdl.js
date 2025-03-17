// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kdl-org/vscode-kdl>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.kdl'],
  names: ['kdl'],
  patterns: [
    {include: '#forbidden_ident'},
    {include: '#null'},
    {include: '#boolean'},
    {include: '#float_keyword'},
    {include: '#float_fraction'},
    {include: '#float_exp'},
    {include: '#decimal'},
    {include: '#hexadecimal'},
    {include: '#octal'},
    {include: '#binary'},
    {include: '#raw-string'},
    {include: '#string_multi_line'},
    {include: '#string_single_line'},
    {include: '#block_comment'},
    {include: '#block_doc_comment'},
    {include: '#slashdash_block_comment'},
    {include: '#slashdash_comment'},
    {include: '#slashdash_node_comment'},
    {include: '#slashdash_node_with_children_comment'},
    {include: '#line_comment'},
    {include: '#attribute'},
    {include: '#node_name'},
    {include: '#ident_string'}
  ],
  repository: {
    attribute: {
      captures: {1: {name: 'punctuation.separator.key-value.kdl'}},
      match:
        "(?![/\\\\{\\}#;\\[\\]\\=])[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]+\\d*[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]*(=)",
      name: 'entity.other.attribute-name.kdl'
    },
    binary: {
      match: '\\b0b[01][01_]*\\b',
      name: 'constant.numeric.integer.binary.rust'
    },
    block_comment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.kdl',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    block_doc_comment: {
      begin: '/\\*[\\*!](?![\\*/])',
      end: '\\*/',
      name: 'comment.block.documentation.kdl',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    boolean: {match: '#true|#false', name: 'constant.language.boolean.kdl'},
    decimal: {
      match: '\\b[0-9\\-\\+][0-9_]*\\b',
      name: 'constant.numeric.integer.decimal.rust'
    },
    float_exp: {
      match: '\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?[eE][+-]?[0-9_]+\\b',
      name: 'constant.numeric.float.rust'
    },
    float_fraction: {
      match:
        '\\b([0-9\\-\\+]|\\-|\\+)[0-9_]*\\.[0-9][0-9_]*([eE][+-]?[0-9_]+)?\\b',
      name: 'constant.numeric.float.rust'
    },
    float_keyword: {
      match: '#nan|#inf|#-inf',
      name: 'constant.language.other.kdl'
    },
    forbidden_ident: {
      match: '(?<!#)(?:true|false|null|nan|[-]?inf)',
      name: 'invalid.illegal.kdl.bad-ident'
    },
    hexadecimal: {
      match: '\\b0x[a-fA-F0-9][a-fA-F0-9_]*\\b',
      name: 'constant.numeric.integer.hexadecimal.rust'
    },
    ident_string: {
      match:
        "(?![/\\\\{\\}#;\\[\\]\\=])[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]+\\d*[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]*",
      name: 'string.unquoted'
    },
    line_comment: {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.kdl'
    },
    node_name: {
      match:
        "((?<={|;)|^)\\s*(?![/\\\\{\\}#;\\[\\]\\=])[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]+\\d*[<>:\\w\\-_~,'`!\\?@\\$%^&*+|.\\(\\)]*",
      name: 'entity.name.tag'
    },
    null: {match: '#null', name: 'constant.language.null.kdl'},
    octal: {
      match: '\\b0o[0-7][0-7_]*\\b',
      name: 'constant.numeric.integer.octal.rust'
    },
    'raw-string': {
      begin: '(#+)("""|")',
      end: '\\2\\1',
      name: 'string.quoted.other.raw.kdl'
    },
    slashdash_block_comment: {
      begin: '/-\\s*{',
      end: '\\}',
      name: 'comment.block.slashdash.kdl'
    },
    slashdash_comment: {
      begin: '(?<!^)\\s*/-\\s*',
      end: '\\s',
      name: 'comment.block.slashdash.kdl'
    },
    slashdash_node_comment: {
      begin: '(?<=^)\\s*/-[^{]+$',
      end: '(?:;|(?<!\\\\)$)',
      name: 'comment.block.slashdash.kdl'
    },
    slashdash_node_with_children_comment: {
      begin: '(?<=^)\\s*/-[^{]+{',
      end: '\\}',
      name: 'comment.block.slashdash.kdl'
    },
    string_multi_line: {
      begin: '"""',
      end: '"""',
      name: 'string.quoted.triple.kdl',
      patterns: [
        {
          match: '\\\\(:?[nrtbfs\\\\"]|u\\{[a-fA-F0-9]{1,6}\\})',
          name: 'constant.character.escape.kdl'
        }
      ]
    },
    string_single_line: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.kdl',
      patterns: [
        {
          match: '\\\\(:?[nrtbfs\\\\"]|u\\{[a-fA-F0-9]{1,6}\\})',
          name: 'constant.character.escape.kdl'
        }
      ]
    }
  },
  scopeName: 'source.kdl'
}

export default grammar
