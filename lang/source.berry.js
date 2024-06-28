// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/berry-lang/berry-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.be'],
  names: ['berry', 'be'],
  patterns: [
    {include: '#controls'},
    {include: '#strings'},
    {include: '#comment-block'},
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#function'},
    {include: '#member'},
    {include: '#identifier'},
    {include: '#number'},
    {include: '#operator'}
  ],
  repository: {
    'comment-block': {
      begin: '\\#\\-',
      end: '\\-#',
      name: 'comment.berry',
      patterns: []
    },
    comments: {
      begin: '\\#',
      end: '\\n',
      name: 'comment.line.berry',
      patterns: []
    },
    controls: {
      patterns: [
        {
          match:
            '\\b(if|elif|else|for|while|do|end|break|continue|return|try|except|raise)\\b',
          name: 'keyword.control.berry'
        }
      ]
    },
    function: {
      patterns: [
        {
          match: '\\b([a-zA-Z_][a-zA-Z0-9_]*(?=\\s*\\())',
          name: 'entity.name.function.berry'
        }
      ]
    },
    identifier: {
      patterns: [{match: '\\b[_A-Za-z]\\w+\\b', name: 'identifier.berry'}]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(var|static|def|class|true|false|nil|self|super|import|as)\\b',
          name: 'keyword.berry'
        }
      ]
    },
    member: {
      patterns: [
        {
          captures: {0: {name: 'entity.other.attribute-name.berry'}},
          match: '\\.([a-zA-Z_][a-zA-Z0-9_]*)'
        }
      ]
    },
    number: {
      patterns: [
        {
          match: '0x[a-fA-F0-9]+|\\d+|(\\d+\\.?|\\.\\d)\\d*([eE][+-]?\\d+)?',
          name: 'constant.numeric.berry'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match: '\\(|\\)|\\[|\\]|\\.|-|\\!|~|\\*|/|%|\\+|&|\\^|\\||<|>|=|:',
          name: 'keyword.operator.berry'
        }
      ]
    },
    strings: {
      patterns: [
        {match: '"(\\\\.|[^"])*"', name: 'string.quoted.double.berry'},
        {match: "'(\\\\.|[^'])*'", name: 'string.quoted.single.berry'}
      ]
    }
  },
  scopeName: 'source.berry'
}

export default grammar
