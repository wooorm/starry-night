// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.nunjucks', 'text.html.basic'],
  extensions: ['.njk'],
  names: ['nunjucks', 'njk'],
  patterns: [{include: 'source.nunjucks'}, {include: 'text.html.basic'}],
  scopeName: 'text.html.nunjucks'
}

export default grammar
