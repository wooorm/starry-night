// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.x10'],
  names: ['x10', 'xten'],
  patterns: [
    {
      match:
        '\\b(assert|async|at|athome|ateach|atomic|break|case|catch|clocked|continue|def|default|do|else|finally|finish|for|goto|if|in|new|offer|operator|return|switch|throw|try|val|var|when|while)\\b',
      name: 'keyword.control.x10'
    },
    {
      match: '\\b(as|haszero|instanceof|isref)\\b',
      name: 'keyword.operator.x10'
    },
    {match: '\\b(false|null|true)\\b', name: 'constant.language.x10'},
    {match: '\\b(here|self|super|this)\\b', name: 'variable.language.x10:'},
    {
      match: '\\b(class|interface|struct|type)\\b',
      name: 'entity.name.type.x10'
    },
    {match: '\\b(void)\\b', name: 'storage.type.primitive.x10'},
    {
      match:
        '\\b(abstract|extends|final|implements|native|offers|private|property|protected|public|static|throws|transient)\\b',
      name: 'storage.modifier.x10'
    },
    {match: '\\b(import|package)\\b', name: 'keyword.other.x10'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.x10',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.x10'}]
    },
    {begin: '//', end: '\\n', name: 'comment.line.double-slash.x10'},
    {begin: '/\\*\\*', end: '\\*/', name: 'comment.block.documentationx10'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.x10'}
  ],
  scopeName: 'source.x10'
}

export default grammar
