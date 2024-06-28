// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Cirru/sublime-cirru>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cirru'],
  names: ['cirru'],
  patterns: [
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.cirru',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.cirru'}]
    },
    {match: '-?\\b\\d\\S*\\b', name: 'constant.numeric.cirru'},
    {match: '(?=^)\\s*\\,', name: 'keyword.operator.cirru'},
    {match: '\\s\\$\\s*$', name: 'keyword.operator.cirru'},
    {
      match: '(?=^)\\s*[^\\(\\)\\s][^\\(\\)\\s]*',
      name: 'support.function.cirru'
    },
    {
      match: '(?<=\\()[^\\(\\)\\s][^\\(\\)\\s]*',
      name: 'support.function.cirru'
    },
    {
      match: '(?=\\$\\s+)[^\\(\\)\\s][^\\(\\)\\s]*',
      name: 'support.function.cirru'
    },
    {
      captures: {
        1: {name: 'keyword.operator.cirru'},
        3: {name: 'support.function.cirru'}
      },
      match: '\\s+((\\$\\s+)+)([^\\(\\)\\s][^\\(\\)\\s]*)',
      name: 'entity.cirru'
    },
    {match: '[\\)\\(]', name: 'keyword.operator.cirru'},
    {
      match: '(?!=($\\s+))[^\\(\\)\\s][^\\(\\)\\s]*',
      name: 'variable.parameter.cirru'
    }
  ],
  scopeName: 'source.cirru'
}

export default grammar
