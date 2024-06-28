// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/p0lygun/kivy-language-grammer>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.python'],
  extensions: ['.kv'],
  names: ['kvlang'],
  patterns: [
    {match: '#:.*?$', name: 'support.type.kivy'},
    {match: '#.*?$', name: 'comment.kivy'},
    {match: '\\<.+\\>', name: 'support.class.kivy'},
    {match: '[A-Za-z][A-Za-z0-9]+$', name: 'support.function.kivy'},
    {match: '.*?:$', name: 'support.function.kivy'},
    {match: '(.*?):$', name: 'entity.name.section.kivy'},
    {include: 'source.python'}
  ],
  scopeName: 'source.python.kivy'
}

export default grammar
