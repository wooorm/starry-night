// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/JuliaEditorSupport/atom-language-julia>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.julia', 'source.shell'],
  extensions: [],
  names: ['julia-repl'],
  patterns: [
    {
      captures: {
        1: {name: 'punctuation.separator.prompt.julia.console'},
        2: {patterns: [{include: 'source.julia'}]}
      },
      match: '^(julia>|\\.{3}|In \\[\\d+\\]:) (.+)$'
    },
    {
      captures: {
        1: {name: 'punctuation.separator.prompt.shell.julia.console'},
        2: {patterns: [{include: 'source.shell'}]}
      },
      match: '^(shell>) (.+)$'
    },
    {
      captures: {
        1: {name: 'punctuation.separator.prompt.help.julia.console'},
        2: {patterns: [{include: 'source.julia'}]}
      },
      match: '^(help\\?>) (.+)$'
    }
  ],
  scopeName: 'source.julia.console'
}

export default grammar
