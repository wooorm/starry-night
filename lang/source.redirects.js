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
  names: ['redirect-rules', 'redirects'],
  patterns: [{include: '#main'}],
  repository: {
    code: {
      match: '(?<==)[a-z]{2}(?:-[A-Z]{2})?(?=\\s|$)',
      name: 'string.unquoted.code.redirects'
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.redirects'}},
      end: '$',
      name: 'comment.line.hash.redirects'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#uri'},
        {include: '#query'},
        {include: '#number'},
        {include: '#code'},
        {include: '#punct'},
        {include: '#text'}
      ]
    },
    number: {
      captures: {
        1: {name: 'constant.numeric.integer.redirects'},
        2: {name: 'constant.character.force.redirects'}
      },
      match: '(\\d+)(!)?'
    },
    punct: {
      patterns: [
        {match: ':|=', name: 'punctuation.accessor.redirects'},
        {match: ',(?!\\s)', name: 'punctuation.separator.redirects'}
      ]
    },
    query: {
      match: '[^\\s]+(?==)',
      name: 'keyword.other.query-selector.redirects'
    },
    splat: {match: ':\\w+', name: 'variable.other.splat.redirects'},
    text: {match: '(?<==)[^\\s]+', name: 'string.unquoted.text.redirects'},
    uri: {
      begin: '(?:[a-z]+:)?\\/',
      end: '[\\s$]',
      name: 'string.unquoted.uri.redirects',
      patterns: [{include: '#wildcard'}, {include: '#splat'}]
    },
    wildcard: {match: '\\*', name: 'constant.character.wildcard.redirects'}
  },
  scopeName: 'source.redirects'
}

export default grammar
