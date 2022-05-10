// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/peta/turtle.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.sparql', '.rq'],
  names: ['sparql'],
  patterns: [
    {include: 'source.turtle#sparqlKeywords'},
    {include: 'source.turtle#sparqlFilterFns'},
    {include: 'source.turtle#sparqlLangConsts'},
    {include: 'source.turtle'}
  ],
  scopeName: 'source.sparql'
}

export default grammar
