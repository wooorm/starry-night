// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zyoshoka/bst.tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bst'],
  names: ['bibtex-style'],
  patterns: [
    {include: '#comments'},
    {include: '#function-declaration'},
    {include: '#command-keywords'},
    {include: '#operators'},
    {include: '#builtin-objects'},
    {include: '#string'},
    {include: '#number'}
  ],
  repository: {
    'builtin-objects': {
      patterns: [
        {
          match: '\\b(?<!\\.)(if\\$|while\\$)(?!(\\w|\\.))',
          name: 'keyword.control.bst'
        },
        {
          match:
            '\\b(?<!\\.)(add\\.period\\$|call\\.type\\$|change\\.case\\$|chr\\.to\\.int\\$|cite\\$|duplicate\\$|empty\\$|format\\.name\\$|int\\.to\\.chr\\$|int\\.to\\.chr\\$|int\\.to\\.str\\$|missing\\$|newline\\$|num\\.names\\$|pop\\$|preamble\\$|purify\\$|quote\\$|skip\\$|stack\\$|substring\\$|swap\\$|text\\.length\\$|text\\.prefix\\$|top\\$|type\\$|warning\\$|width\\$|write\\$)(?!(\\w|\\.))',
          name: 'support.function.bst'
        },
        {
          match: '\\b(?<!\\.)(entry\\.max\\$|global\\.max\\$)(?!(\\w|\\.))',
          name: 'support.constant.bst'
        },
        {
          match: '\\b(?<!\\.)sort\\.key\\$(?!(\\w|\\.))',
          name: 'support.variable.bst'
        }
      ]
    },
    'command-keywords': {
      patterns: [
        {match: '\\b(?<!\\.)INTEGERS\\b(?!\\.)', name: 'storage.type.int.bst'},
        {
          match: '\\b(?<!\\.)(ENTRY|MACRO|STRINGS)\\b(?!\\.)',
          name: 'storage.type.var.bst'
        },
        {
          match: '\\b(?<!\\.)(READ|EXECUTE|ITERATE|REVERSE|SORT)\\b(?!\\.)',
          name: 'support.function.bst'
        }
      ]
    },
    comments: {begin: '%', end: '$', name: 'comment.line.percentage.bst'},
    'function-declaration': {
      begin: '\\b(FUNCTION)\\s*\\{\\s*([[:alpha:]_.\\$]*\\$?)',
      beginCaptures: {
        1: {name: 'storage.type.function.bst'},
        2: {name: 'entity.name.function.bst'}
      },
      end: '\\}',
      name: 'meta.function.bst'
    },
    number: {match: '#-?\\d+\\b', name: 'constant.numeric.bst'},
    operators: {
      patterns: [
        {match: '<|>', name: 'keyword.operator.relational.bst'},
        {match: '\\=', name: 'keyword.operator.comparison.bst'},
        {match: '\\+|-|\\*', name: 'keyword.operator.arithmetic.bst'},
        {match: ':\\=', name: 'keyword.operator.assignment.bst'},
        {
          match: '\\b(?<!\\.)(and|or|not)(?!(\\w|\\.))',
          name: 'keyword.operator.logic.bst'
        }
      ]
    },
    string: {begin: '"', end: '"', name: 'string.quoted.double.bst'}
  },
  scopeName: 'source.bst'
}

export default grammar
