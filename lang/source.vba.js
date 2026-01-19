// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/serkonda7/vscode-vba>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.vb6'],
  extensions: ['.bas', '.bas', '.bas', '.ctl', '.dsr', '.vba'],
  names: [
    'b4x',
    'basic-for-android',
    'classic-visual-basic',
    'vb-6',
    'vb6',
    'vba',
    'visual-basic-6',
    'visual-basic-6.0',
    'visual-basic-classic',
    'visual-basic-for-applications'
  ],
  patterns: [
    {include: '#keywords'},
    {include: '#types'},
    {include: 'source.vb6'}
  ],
  repository: {
    keywords: {
      patterns: [
        {match: '(?i)\\bPtrSafe\\b', name: 'keyword.other.vba'},
        {
          match: '(?i)\\bOption (Compare Database|Private Module)\\b',
          name: 'keyword.other.option.vba'
        }
      ]
    },
    types: {
      patterns: [
        {
          match: '(?i)(?<= As )(LongLong|LongPtr)\\b',
          name: 'support.type.builtin.vba'
        }
      ]
    }
  },
  scopeName: 'source.vba'
}

export default grammar
