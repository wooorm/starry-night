// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/sharktide/livescript-vscode>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ls', '._ls'],
  names: ['livescript', 'live-script', 'ls'],
  patterns: [
    {include: '#storage'},
    {include: '#keywords'},
    {include: '#functions'},
    {include: '#variables'},
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#comments'},
    {include: '#braces'},
    {include: '#parentheses'}
  ],
  repository: {
    braces: {
      patterns: [
        {match: '[{}]', name: 'punctuation.definition.block.livescript'}
      ]
    },
    comments: {
      patterns: [
        {begin: '#', end: '$', name: 'comment.line.livescript'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.livescript'}
      ]
    },
    functions: {
      patterns: [
        {
          match: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=[:=]\\s*->)',
          name: 'entity.name.function.livescript'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(and|or|is|isnt|not|instanceof|typeof|in|of)\\b',
          name: 'keyword.operator.livescript'
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b\\d+(\\.\\d+)?\\b', name: 'constant.numeric.livescript'}
      ]
    },
    parentheses: {
      patterns: [
        {match: '[()]', name: 'punctuation.definition.group.livescript'}
      ]
    },
    storage: {
      patterns: [
        {
          match:
            '\\b(if|else|unless|switch|case|default|for|while|loop|break|continue|return|do|try|catch|finally|throw|import|export|yield)\\b',
          name: 'storage.control.livescript'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.livescript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.livescript'}
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.livescript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.livescript'}
          ]
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '(?<!\\.|\\d)\\b[a-zA-Z_][a-zA-Z0-9_]*\\b(?!\\s*\\()',
          name: 'variable.livescript'
        }
      ]
    }
  },
  scopeName: 'source.livescript'
}

export default grammar
