// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nixinova/NovaGrammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['robots.txt', 'robots', 'robots-txt'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.robots-txt'}},
      end: '$',
      name: 'comment.line.hash.robots-txt'
    },
    directive: {
      begin: '^[A-Z][a-z-]*',
      end: '\\s*:',
      name: 'keyword.control.directive.robots-txt'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#directive'},
        {include: '#wildcard'},
        {include: '#uri'},
        {include: '#text'},
        {include: '#number'}
      ]
    },
    number: {match: '\\d+', name: 'constant.numeric.integer.robots-txt'},
    text: {match: '[A-Za-z-]+', name: 'string.unquoted.text.robots-txt'},
    uri: {
      begin: '(?:[a-z]+:)?\\/',
      end: '$',
      name: 'string.unquoted.uri.robots-txt'
    },
    wildcard: {match: '\\*', name: 'constant.character.wildcard.robots-txt'}
  },
  scopeName: 'text.robots-txt'
}

export default grammar
