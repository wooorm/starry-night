// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.njk'],
  names: ['nunjucks', 'njk'],
  patterns: [{include: 'source.nunjucks'}, {include: 'text.html.basic'}],
  scopeName: 'text.html.nunjucks'
}

export default grammar
