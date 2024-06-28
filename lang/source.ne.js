// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Hardmath123/sublime-nearley>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ne', '.nearley'],
  names: ['nearley'],
  patterns: [
    {match: '@include|@builtin|@lexer', name: 'keyword.control.ne'},
    {
      captures: {
        1: {name: 'entity.name.type.ne'},
        2: {name: 'variable.parameter.ne'},
        3: {name: 'keyword.operator.ne'}
      },
      match: '([\\w+?]+)(\\[.+\\])?\\s+((-|=)+>)'
    },
    {match: '\\$[\\w+?]+', name: 'variable.parameter.ne'},
    {match: '%[\\w+?]+', name: 'storage.type.ne'},
    {match: 'null', name: 'constant.language.ne'},
    {
      begin: '([\\w+?]+\\[)',
      captures: {
        1: {name: 'entity.name.function'},
        2: {name: 'entity.name.function'}
      },
      end: '(\\])',
      patterns: [{include: '$self'}]
    },
    {match: '[\\w+?]+', name: 'entity.name.type.ne'},
    {
      match: '(\\|)|(:\\+)|(:\\*)|(:\\?)|(\\()|(\\))',
      name: 'keyword.operator.ne'
    },
    {begin: '#', end: '\\n', name: 'comment.line.ne'},
    {
      begin: '\\[',
      end: '\\]',
      name: 'string.regex.ne',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.ne'}]
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.ne',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.ne'}]
    },
    {
      begin: '(@?{%)',
      captures: {1: {name: 'comment.block.ne'}, 2: {name: 'comment.block.ne'}},
      end: '(%})',
      patterns: [{include: 'source.js'}]
    }
  ],
  scopeName: 'source.ne'
}

export default grammar
