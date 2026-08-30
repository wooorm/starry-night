// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ayecue/miniscript-textmate-linguist>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['miniscript'],
  patterns: [
    {include: '#string'},
    {include: '#numeric'},
    {include: '#comment'},
    {include: '#constant'},
    {include: '#keyword'},
    {include: '#function'},
    {include: '#type'},
    {include: '#general-functions'},
    {include: '#type-methods'},
    {patterns: [{include: '#variables'}, {include: '#identifier'}]}
  ],
  repository: {
    comment: {
      patterns: [
        {begin: '//(?!(include|import))', end: '\\n', name: 'comment.line'}
      ]
    },
    constant: {
      match: '\\b(true|false|null)\\b',
      name: 'constant.language.miniscript'
    },
    function: {
      begin: '(?<=function\\()',
      end: '\\)',
      patterns: [
        {include: '#string'},
        {
          captures: {
            1: {
              patterns: [
                {
                  match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
                  name: 'variable.parameter.miniscript'
                }
              ]
            },
            2: {
              patterns: [
                {include: '#string'},
                {include: '#numeric'},
                {include: '#constant'}
              ]
            }
          },
          match: '([^=\\),]+)(=[^\\),"]+)?'
        }
      ]
    },
    'general-functions': {
      match:
        "\\b(abs|acos|asin|atan|bitAnd|bitOr|bitXor|ceil|char|code|cos|floor|funcRef|hasIndex|hash|indexOf|indexes|insert|join|len|list|log|lower|map|number|pi|pop|print|pull|push|range|refEquals|remove|replace|rnd|round|shuffle|sign|sin|slice|sort|split|sqrt|stackTrace|str|string|sum|tan|time|upper|val|values|version|wait|yield')\\b",
      name: 'support.function.miniscript'
    },
    identifier: {
      patterns: [
        {
          match: '(?<=[^.]\\.)\\b([a-zA-Z_][\\w]*)',
          name: 'entity.other.attribute.miniscript'
        },
        {match: '\\b([A-Z_]+)\\b', name: 'constant.other.miniscript'},
        {match: '\\b([A-Z][\\w]*)\\b', name: 'entity.name.type.miniscript'},
        {match: '\\b([a-z_][\\w]*)\\b', name: 'variable.other.miniscript'}
      ]
    },
    keyword: {
      patterns: [
        {
          match: '\\b(if|then|end|else|function|in|while|for|from)\\b',
          name: 'keyword.control.block.miniscript'
        },
        {
          match: '\\b(return|continue|break)\\b',
          name: 'keyword.control.statement.miniscript'
        },
        {
          match: '\\b(and|or|isa)\\b',
          name: 'keyword.control.logical.miniscript'
        },
        {match: '\\b(not|new)\\b', name: 'keyword.control.unary.miniscript'},
        {match: '\\b(repeat)\\b', name: 'keyword.control.notused.miniscript'},
        {
          match: '#(include|import|envar|inject)\\b',
          name: 'keyword.control.greybel.miniscript'
        },
        {
          match: '//(include|import)\\b',
          name: 'keyword.control.greybel.miniscript'
        },
        {match: '\\b(debugger)\\b', name: 'keyword.control.greybel.miniscript'},
        {
          match: '([\\^|\\&]|<<|>>>?)',
          name: 'keyword.operator.binary.miniscript'
        },
        {
          match: '([+\\-*\\/%])',
          name: 'keyword.operator.arithmetic.miniscript'
        },
        {
          match: '([<>=!]=|[<>])',
          name: 'keyword.operator.comparison.miniscript'
        },
        {
          match: '([+\\-*\\/%]?=)',
          name: 'keyword.operator.assignment.miniscript'
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match: '(?<![\\w\\d.])\\d+(\\.\\d+)?([eE]-?\\d*)?',
          name: 'constant.numeric'
        }
      ]
    },
    string: {begin: '"', end: '"', name: 'string.quoted.double.miniscript'},
    type: {
      match: '\\b(list|map|number|string|funcRef)\\b',
      name: 'support.class.miniscript'
    },
    'type-methods': {
      patterns: [
        {
          match:
            '\\.(remove|push|pop|pull|shuffle|sum|hasIndex|indexOf|sort|join|indexes|len|values)\\b',
          name: 'support.function.miniscript'
        },
        {
          match:
            '\\.(remove|push|pop|pull|shuffle|sum|sum|hasIndex|indexOf|indexes|len|values)\\b',
          name: 'support.function.miniscript'
        },
        {
          match:
            '\\.(remove|hasIndex|indexOf|split|replace|trim|indexes|code|len|lower|upper|val|values)\\b',
          name: 'support.function.miniscript'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '\\b(params|locals|globals|outer)\\b',
          name: 'support.variable.miniscript'
        },
        {match: '\\b(self)\\b', name: 'variable.language.self.miniscript'},
        {match: '\\b(super)\\b', name: 'variable.language.super.miniscript'}
      ]
    }
  },
  scopeName: 'source.ms'
}

export default grammar
