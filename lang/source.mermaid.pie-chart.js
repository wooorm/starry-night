// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#show-data'},
        {include: '#title'},
        {include: '#slice'}
      ]
    },
    'show-data': {
      captures: {1: {name: 'keyword.operator.show-data.mermaid'}},
      match: '(?i)(?:\\G|(?<=pie))\\s+(showData)(?=$|\\s)'
    },
    slice: {
      captures: {
        1: {name: 'string.quoted.double.data-key.mermaid'},
        2: {patterns: [{include: 'source.mermaid#entity'}]},
        4: {name: 'punctuation.definition.string.end.mermaid'},
        5: {patterns: [{include: 'source.mermaid#colon'}]},
        6: {name: 'constant.numeric.decimal.data-value.mermaid'}
      },
      match: '^\\s*((")([^"]*)("))\\s*(:)[ \\t]*(?:([-+]?\\d+(?:\\.\\d+)?))?',
      name: 'meta.data-set.mermaid'
    },
    title: {
      begin: '(?i)(?:^|\\G|(?<=\\s))\\s*(title)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.title.mermaid'}},
      contentName: 'string.unquoted.diagram-title.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.title.mermaid',
      patterns: [{include: 'source.mermaid#entity'}]
    }
  },
  scopeName: 'source.mermaid.pie-chart'
}

export default grammar
