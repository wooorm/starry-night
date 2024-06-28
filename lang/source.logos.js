// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Cykey/Sublime-Logos>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c++', 'source.objc'],
  extensions: ['.xm', '.x', '.xi'],
  names: ['logos'],
  patterns: [
    {
      match:
        '%(init|hook|subclass|group|class|new|ctor|end|config|orig|log|hookf|dtor|property|c)',
      name: 'keyword.source.logos'
    },
    {
      captures: {1: {name: 'keyword.source.logos'}},
      match: '%c\\(([A-Za-z$_]+)\\)'
    },
    {include: 'source.objc'},
    {include: 'source.c++'}
  ],
  scopeName: 'source.logos'
}

export default grammar
