// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.ejs', '.ect', '.ejs.t', '.jst'],
  names: ['ejs'],
  patterns: [
    {
      begin: '<%=?',
      captures: {0: {name: 'punctuation.section.embedded.js'}},
      end: '%>',
      name: 'source.js.embedded.html',
      patterns: [{include: 'source.js'}]
    },
    {include: 'text.html.basic'}
  ],
  scopeName: 'text.html.js'
}

export default grammar
