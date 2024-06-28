// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/BorisChumichev/modelicaSublimeTextPackage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mo'],
  names: ['modelica'],
  patterns: [
    {begin: '/\\*', end: '\\*/', name: 'comment.block'},
    {match: '(//).*$\\n?', name: 'comment.line'},
    {match: '\\b(true|false)\\b', name: 'constant.language'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric'
    },
    {match: '\\b(Real|Integer|Boolean|String)\\b', name: 'storage.type'},
    {
      match:
        '\\b(constant|final|parameter|expandable|replaceable|redeclare|constrainedby|import|flow|stream|input|output|discrete|connector)\\b',
      name: 'storage.modifier'
    },
    {
      match:
        '\\b\\s*([A-Z])(?:([^ ;$]+)(;)?)([.]([A-Z])(?:([^ ;$]+)(;)?)?)++\\b',
      name: 'keyword'
    },
    {
      match:
        '\\b(for|if|when|while|then|loop|end if|end when|end for|end while|else|elsewhen|and|break|each|elseif)\\b',
      name: 'keyword.control'
    },
    {match: '\\b(and|or|not)\\b', name: 'keyword.operator.logical'},
    {match: '<|<\\=|>|>\\=|\\=\\=|<>', name: 'keyword.operator.comparison'},
    {
      match: '\\+|\\-|\\.\\+|\\.\\-|\\*|\\.\\*|/|\\./|\\^',
      name: 'keyword.operator.arithmetic'
    },
    {match: '\\=|\\:\\=', name: 'keyword.operator.assignment'},
    {
      match:
        '\\b(algorithm|equation|initial equation|protected|public|register|end)\\b',
      name: 'keyword'
    },
    {match: '\\b(inner|outer)\\b', name: 'keyword.other'},
    {
      match:
        '\\b(acos|asin|atan|atan2|cos|cosh|exp|log|log10|sin|sinh|tan|tanh|abs|sign|sqrt|max|min|product|sum)\\b',
      name: 'support.function.mathematical'
    },
    {
      match:
        '\\b(scalar|vector|matrix|identity|diagonal|zeros|ones|fill|linspace|transpose|outerProduct|symmetric|cross|skew)\\b',
      name: 'support.function.array'
    },
    {
      match:
        '\\b(ceil|div|fill|floor|integer|max|min|mod|rem|pre|noEvent|change|edge|initial|terminal|reinit|sample|smooth|terminate)\\b',
      name: 'support.function.event'
    },
    {
      match:
        '\\b(connect|der|inStream|actualStream|semiLinear|spatialDistribution|getInstanceName|homotopy|delay|assert|ndims|size|cardinality|isPresent)\\b',
      name: 'support.function.special'
    },
    {match: '\\b(extends|partial|within)\\b', name: 'support.type'},
    {
      captures: {
        1: {name: 'entity.name.type'},
        2: {name: 'keyword'},
        3: {name: 'comment.line'}
      },
      match: '\\b((model|class|record|block|package)\\s+\\w+\\s*(".*")*)'
    },
    {
      captures: {
        1: {name: 'entity.name.function'},
        2: {name: 'keyword'},
        3: {name: 'comment.line'}
      },
      match: '((function)\\s+\\w+\\s*(".*")*)'
    },
    {
      begin: 'annotation',
      end: ';\\s*\\n',
      name: 'comment.block',
      patterns: [{begin: '"', end: '"', name: 'comment.block'}]
    },
    {
      captures: {1: {name: 'constant.string'}},
      match: '["\\w\\)](\\s+".*"\\s*);'
    },
    {
      begin: '"',
      end: '"',
      name: 'constant.string',
      patterns: [{match: '\\\\.', name: 'constant.character.escaped'}]
    }
  ],
  scopeName: 'source.modelica'
}

export default grammar
