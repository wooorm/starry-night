// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/sharktide/mps-vscode>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mps'],
  names: ['mathematical-programming-system'],
  patterns: [
    {include: '#sections'},
    {include: '#constraints'},
    {include: '#bounds'},
    {include: '#columns'},
    {include: '#infinity'},
    {include: '#variables'},
    {include: '#numbers'},
    {include: '#comments'},
    {include: '#braces'},
    {include: '#parentheses'}
  ],
  repository: {
    bounds: {
      patterns: [
        {match: '(?i)\\b(UP|LO|FX|FR|MI|PL)\\b', name: 'keyword.bound.mps'}
      ]
    },
    braces: {
      patterns: [{match: '[{}]', name: 'punctuation.definition.block.mps'}]
    },
    columns: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.mps'},
            2: {name: 'keyword.constraint.mps'},
            3: {name: 'constant.numeric.mps'}
          },
          match:
            '^(\\s{0,2}[A-Za-z0-9]+)\\s+([A-Za-z0-9_]+)\\s+(-?\\d+(\\.\\d+)?|Infinity)\\b',
          name: 'meta.column.mps'
        }
      ]
    },
    comments: {patterns: [{begin: '\\*', end: '$', name: 'comment.line.mps'}]},
    constraints: {
      patterns: [{match: '(?i)\\b(E|L|G|N)\\b', name: 'keyword.constraint.mps'}]
    },
    infinity: {
      patterns: [
        {match: '(?i)\\bInfinity\\b', name: 'constant.language.infinity.mps'}
      ]
    },
    numbers: {
      patterns: [{match: '\\b\\d+(\\.\\d+)?\\b', name: 'constant.numeric.mps'}]
    },
    parentheses: {
      patterns: [{match: '[()]', name: 'punctuation.definition.group.mps'}]
    },
    sections: {
      patterns: [
        {
          match: '(?i)\\b(NAME|ROWS|COLUMNS|RHS|BOUNDS|ENDATA|RANGES)\\b',
          name: 'keyword.section.mps'
        }
      ]
    },
    variables: {
      patterns: [{match: '\\b[A-Za-z_][A-Za-z0-9_]*\\b', name: 'variable.mps'}]
    }
  },
  scopeName: 'text.source.mps'
}

export default grammar
