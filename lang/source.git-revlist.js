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
  names: ['git-revision-list', 'git-blame-ignore-revs'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.git-revlist'}},
      end: '$',
      name: 'comment.line.number-sign.git-revlist'
    },
    invalid: {match: '\\S.*?(?=\\s*$)', name: 'invalid.illegal.git-revlist'},
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#sha'},
        {include: '#invalid'}
      ]
    },
    sha: {
      match: '[0-9a-fA-F]{40}(?=\\s*$)',
      name: 'constant.numeric.sha.git-revlist'
    }
  },
  scopeName: 'source.git-revlist'
}

export default grammar
