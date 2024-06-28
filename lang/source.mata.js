/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mata'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mata'}},
      name: 'string.quoted.double.mata'
    },
    {
      begin: '`"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mata'}},
      end: '"\'',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mata'}},
      name: 'string.quoted.double.compound.mata',
      patterns: [{include: '#cdq_string_content'}]
    },
    {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.mata'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.mata'}},
      name: 'comment.block.mata',
      patterns: [{include: '#cb_content'}]
    },
    {
      captures: {0: {name: 'punctuation.definition.comment.mata'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.mata'
    },
    {
      match:
        '(?<![^$\\s])(version|pragma|if|else|for|while|do|break|continue|goto|return)(?=\\s)',
      name: 'keyword.control.mata'
    },
    {
      captures: {
        1: {name: 'storage.type.eltype.mata'},
        4: {name: 'storage.type.orgtype.mata'}
      },
      match:
        '\\b(transmorphic|string|numeric|real|complex|(pointer(\\([^)]+\\))?))\\s+(matrix|vector|rowvector|colvector|scalar)\\b',
      name: 'storage.type.mata'
    },
    {
      match:
        '\\b(transmorphic|string|numeric|real|complex|(pointer(\\([^)]+\\))?))\\s',
      name: 'storage.type.eltype.mata'
    },
    {
      match: '\\b(matrix|vector|rowvector|colvector|scalar)\\b',
      name: 'storage.type.orgtype.mata'
    },
    {
      match:
        "\\!|\\+\\+|\\-\\-|\\&|\\'|\\?|\\\\|\\:\\:|\\,|\\.\\.|\\||\\=|\\=\\=|\\>\\=|\\<\\=|\\<|\\>|\\!\\=|\\#|\\+|\\-|\\*|\\^|\\/",
      name: 'keyword.operator.mata'
    },
    {include: '#builtin_functions'}
  ],
  repository: {
    builtin_functions: {
      match:
        '(?x)(\n                abs|acos|acosh|acosr|ado_fromlchar|ado_intolchar|adosubdir|all|allof|\n\t\t\t  any|anyof|arg|args|ascii|asin|asinh|asinr|assert|asserteq|atan|atan2|\n\t\t\t  atanh|atanr\n\t\t\t)(?=\\()',
      name: 'support.function.builtin.mata'
    },
    cb_content: {
      begin: '/\\*',
      end: '\\*/',
      patterns: [{include: '#cb_content'}]
    },
    cdq_string_content: {
      begin: '`"',
      end: '"\'',
      patterns: [{include: '#cdq_string_content'}]
    }
  },
  scopeName: 'source.mata'
}

export default grammar
