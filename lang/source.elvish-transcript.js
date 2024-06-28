// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elves/elvish>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.elvish'],
  extensions: [],
  names: ['elvish-transcript'],
  patterns: [
    {
      begin: '(^|\\G)[~/][^ ]*> ',
      contentName: 'meta.embedded.block.elvish',
      patterns: [{include: 'source.elvish'}],
      while: '(^|\\G)   '
    },
    {match: '(^|\\G)# .* #$', name: 'markup.heading.1.elvish-transcript'},
    {match: '(^|\\G)## .* ##$', name: 'markup.heading.2.elvish-transcript'},
    {match: '(^|\\G)//.*$', name: 'comment.line.double-slash.elvish-transcript'}
  ],
  scopeName: 'source.elvish-transcript'
}

export default grammar
