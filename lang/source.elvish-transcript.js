// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elves/elvish>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['elvish-transcript'],
  patterns: [
    {
      begin: '(^|\\G)[~/][^ ]*> ',
      contentName: 'meta.embedded.block.elvish',
      patterns: [{include: 'source.elvish'}],
      while: '(^|\\G)   '
    }
  ],
  scopeName: 'source.elvish-transcript'
}

export default grammar
