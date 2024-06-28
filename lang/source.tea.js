// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js', 'text.html.basic', 'text.xml'],
  extensions: ['.tea'],
  names: ['tea'],
  patterns: [
    {begin: '<%', end: '%>', patterns: [{include: '#language'}]},
    {include: 'text.html.basic'},
    {include: 'source.js'},
    {include: 'text.xml'}
  ],
  repository: {
    functions: {
      patterns: [
        {
          match:
            '\\b(setLocale|getLocale|getAvailableLocales|nullFormat|getNullFormat|getDateFormat|getAvailableTimeZones|getDataFormatTimeZone|numberFormat|getNumberFormat|getNumberFormatInfinity|getNumberFormatNaN|currentDate|startsWith|endsWith|find|findFirst|substring|toLowerCase|toUpperCase|trim|trimLeading|trimTrailing|replace|replaceFirst|replaceLast|shortOrdinal|ordinal|cardinal)\\b(?=\\()',
          name: 'support.function.tea'
        }
      ]
    },
    language: {
      patterns: [
        {include: '#strings'},
        {include: '#functions'},
        {
          begin: '\\b(template)\\s+([a-zA-Z_$]\\w*)?\\s*(\\()',
          beginCaptures: {
            1: {name: 'storage.type.template.tea'},
            2: {name: 'entity.name.class.tea'}
          },
          end: '(\\))',
          name: 'meta.template.tea',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.tea'},
                2: {name: 'variable.parameter.template.tea'}
              },
              match: '\\s*([a-zA-Z_$][\\w.]*)\\s+(\\w*)(?:,\\s*)?'
            }
          ]
        },
        {
          begin: '\\b(call)\\s+(.*?)\\(.*?',
          beginCaptures: {
            1: {name: 'keyword.other.tea'},
            2: {name: 'entity.name.function.tea'}
          },
          end: '\\)',
          name: 'meta.template-call.tea',
          patterns: [{include: '#functions'}, {include: '#strings'}]
        },
        {
          match: '\\?:|\\?\\.|\\b(break|else|foreach|if|in|reverse)\\b',
          name: 'keyword.control.tea'
        },
        {match: '#|##|\\.\\.|\\.\\.\\.|&|\\*\\.', name: 'keyword.operator.tea'},
        {match: '(\\-|\\+|\\*|%)', name: 'keyword.operator.arithmetic.tea'},
        {match: '(=)', name: 'keyword.operator.assignment.tea'},
        {
          match: '(==|!=|<|>|<=|>=|<=>|\\b(and|not|or|isa)\\b)',
          name: 'keyword.operator.comparison.tea'
        },
        {match: '(!)', name: 'keyword.operator.logical.tea'},
        {match: '\\b(call|as|define)\\b', name: 'keyword.other.tea'},
        {match: '\\b(true)\\b', name: 'constant.language.boolean.true.tea'},
        {match: '\\b(false)\\b', name: 'constant.language.boolean.false.tea'},
        {match: '\\b(null)\\b', name: 'constant.language.null.tea'},
        {
          match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
          name: 'constant.numeric.tea'
        },
        {match: '(//).*$\\n?', name: 'comment.line.double-slash.tea'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.tea'},
        {match: '\\;', name: 'punctuation.terminator.statement.tea'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.tea',
          patterns: [
            {
              match:
                '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.tea'
            }
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.tea',
          patterns: [
            {
              match:
                '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.tea'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.tea'
}

export default grammar
