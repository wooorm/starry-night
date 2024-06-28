// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['quake'],
  patterns: [
    {
      match:
        '\\b(and|contains|else|end|for|foreach|if|in|is|local|not|or|proc|readonly|return)\\b',
      name: 'keyword.quake'
    },
    {match: '\\b[0-9]+\\b', name: 'constant.numeric.integer.quake'},
    {match: '%.*$', name: 'comment.line.percentage.quake'},
    {include: '#block_comment'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.quake',
      patterns: [
        {
          match: '\\\\[0-7]{3}|\\\\[\\\\fnrt\\"\\\']',
          name: 'constant.character.escape.quake'
        }
      ]
    }
  ],
  repository: {
    block_comment: {
      begin: '\\/\\*',
      end: '\\*\\/',
      name: 'comment.block.quake',
      patterns: [{include: '#block_comment'}]
    }
  },
  scopeName: 'source.quake'
}

export default grammar
