// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pogo'],
  names: ['pogoscript'],
  patterns: [
    {match: '[(){}@]', name: 'variable.language.pogoscript'},
    {match: '\\b[0-9]+\\b', name: 'constant.numeric.pogoscript'},
    {match: '//[^\\n]*', name: 'comment.line.double-slash.pogoscript'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.pogoscript'},
    {match: '=>|[.:?!;,=]|self', name: 'keyword'},
    {match: '\\t', name: 'invalid'},
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.pogoscript',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pogoscript'}]
    },
    {
      begin: 'r/',
      end: '/[gim]?',
      name: 'string.regexp.pogoscript',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pogoscript'}]
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.pogoscript',
      patterns: [{include: '#interpolated'}]
    }
  ],
  repository: {
    interpolated: {
      patterns: [
        {
          begin: '#\\(',
          end: '\\)',
          name: 'source.pogoscript',
          patterns: [{include: 'source.pogoscript'}]
        }
      ]
    }
  },
  scopeName: 'source.pogoscript'
}

export default grammar
