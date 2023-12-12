// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/lifeart/vsc-ember-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  dependencies: ['source.js'],
  extensions: ['.gjs'],
  names: ['glimmer-js'],
  patterns: [{include: 'source.js'}],
  scopeName: 'source.gjs'
}

export default grammar
