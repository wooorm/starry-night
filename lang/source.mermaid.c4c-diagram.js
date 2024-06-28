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
  dependencies: ['source.mermaid', 'source.mermaid.user-journey', 'source.wsd'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#direction'},
        {include: 'source.mermaid.user-journey#title'},
        {include: 'source.wsd'}
      ]
    }
  },
  scopeName: 'source.mermaid.c4c-diagram'
}

export default grammar
