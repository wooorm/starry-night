// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nickswalker/asp-syntax-highlight>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lp'],
  names: ['answer-set-programming'],
  patterns: [{include: '#keywords'}],
  repository: {
    keywords: {
      patterns: [
        {begin: '%\\*', end: '\\*%', name: 'comment.asp'},
        {match: '%.*', name: 'comment.asp'},
        {match: '\\bnot\\b', name: 'constant.language.asp'},
        {match: ':-', name: 'punctuation.section.embedded.asp'},
        {match: ',', name: 'punctuation.separator.and.asp'},
        {match: ';', name: 'punctuation.separator.or.asp'},
        {match: '!=', name: 'support.constant.cut.asp'},
        {match: '>>', name: 'support.constant.cut.asp'},
        {match: '#(count|max|min|sum)\\b', name: 'keyword.asp'},
        {
          match:
            '(object|value|node|highway|robot|shelf|pickingStation|product|order|carries|occurs|pickup|putdown|move|deliver|action|grid)\\b',
          name: 'keyword.control.flow.asp'
        },
        {
          match:
            '(less\\s*\\(\\s*cardinality\\s*\\)|more\\s*\\(\\s*cardinality\\s*\\)|less\\s*\\(\\s*weight\\s*\\)|more\\s*\\(\\s*weight\\s*\\)|preference|pareto|subset|superset|minmax|maxmin|aso|poset|cp|#(preference|optimize))\\b',
          name: 'keyword.control.flow.asp'
        },
        {match: '@[a-z][A-Za-z0-9_]*\\b', name: 'support.function.asp'},
        {
          match: '&(sum|dom|distinct|minimize|maximize)\\b',
          name: 'support.function.asp'
        },
        {
          match:
            '#(maximize|minimize|show|hide|heuristic|showsig|sup|inf|true|false|forget|external|cumulative|disjoint|const|base)\\b',
          name: 'support.function.asp'
        },
        {
          match: '#include\\s([<](incmode|csp)[>][.])?',
          name: 'support.function.asp'
        },
        {match: 'init\\b', name: 'support.function.asp'},
        {
          match:
            '#program\\s((base|step\\(\\w\\)*|check\\(\\s*\\w\\s*\\)*)[.])?',
          name: 'support.function.asp'
        },
        {
          begin: '#script\\s*\\(\\s*python\\s*\\)',
          beginCaptures: {0: {name: 'support.function.asp'}},
          end: '#end[.]',
          endCaptures: {0: {name: 'support.function.asp'}},
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '#script\\s*\\(\\s*lua\\s*\\)',
          beginCaptures: {0: {name: 'support.function.asp'}},
          end: '#end[.]',
          endCaptures: {0: {name: 'support.function.asp'}},
          patterns: [{include: 'source.lua'}]
        },
        {match: '[a-z][A-Za-z0-9_]*', name: 'entity.name.tag.asp'},
        {match: '\\b[A-Z][A-Za-z0-9_]*', name: 'variable.asp'},
        {begin: '"', end: '"', name: 'string.asp'},
        {match: '0|[1-9][0-9]*', name: 'constant.numeric.asp'}
      ]
    }
  },
  scopeName: 'source.answersetprogramming'
}

export default grammar
