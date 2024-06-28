// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ur', '.urs'],
  names: ['urweb', 'ur/web', 'ur'],
  patterns: [
    {
      match:
        '\\b(EQUAL|GREATER|LESS|NONE|SOME|abstraction|abstype|and|andalso|array|as|before|bool|case|char|datatype|do|else|end|eqtype|exception|exn|false|fn|fun|functor|handle|if|in|include|infix|infixr|int|let|list|local|nil|nonfix|not|o|of|op|open|option|orelse|overload|print|raise|real|rec|ref|sharing|sig|signature|string|struct|structure|substring|then|true|type|unit|val|vector|where|while|with|withtype|word)\\b',
      name: 'keyword.source.ur'
    },
    {match: '\\b[0-9]+\\b', name: 'constant.numeric.ur'},
    {match: '\\b[A-Z]([A-z0-9]*)\\b', name: 'support.type.ur'},
    {match: '"(\\\\"|[^"])*"', name: 'string.ur'},
    {begin: '\\(\\*', end: '\\*\\)', name: 'comment.ur'},
    {match: '(\\(\\)|=>|::|\\[\\]|->|:>)', name: 'constant.character.ur'}
  ],
  scopeName: 'source.ur'
}

export default grammar
