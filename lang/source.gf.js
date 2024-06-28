// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/johnjcamilleri/language-gf>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gf'],
  names: ['grammatical-framework', 'gf'],
  patterns: [
    {
      match:
        '\\b(abstract|concrete|interface|instance|resource|incomplete|of|with|open|in)\\b',
      name: 'keyword.module.gf'
    },
    {
      match:
        '\\b(cat|fun|def|data|lincat|lin|lindef|linref|printname|printname|param|oper|flags)\\b',
      name: 'keyword.judgement.gf'
    },
    {
      match: '\\b(table|pre|case|variants|let|in|where)\\b',
      name: 'keyword.other.gf'
    },
    {match: '(=>|->|:|=|\\.|\\+|\\*|!|\\||\\\\)', name: 'constant.gf'},
    {match: '(;|,)', name: 'constant.gf'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.string.begin.gf'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.string.end.gf'}},
      name: 'string.quoted.double.gf'
    },
    {begin: '--', end: '$', name: 'comment.line.gf'},
    {begin: '{-', end: '-}', name: 'comment.block.gf'}
  ],
  scopeName: 'source.gf'
}

export default grammar
