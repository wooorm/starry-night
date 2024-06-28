// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-shellscript>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.shell'],
  extensions: ['.sh-session'],
  names: ['shellsession', 'bash-session', 'console'],
  patterns: [
    {
      captures: {
        1: {name: 'entity.other.prompt-prefix.shell-session'},
        2: {name: 'punctuation.separator.prompt.shell-session'},
        3: {name: 'source.shell', patterns: [{include: 'source.shell'}]}
      },
      match:
        '(?x) ^ (?: ( (?:\\(\\S+\\)\\s*)? (?: sh\\S*?                       | \\w+\\S+[@:]\\S+(?:\\s+\\S+)? | \\[\\S+?[@:][^\\n]+?\\].*? ) ) \\s* )? ( [>$#%❯➜] | \\p{Greek} ) \\s+ (.*) $'
    },
    {match: '^.+$', name: 'meta.output.shell-session'}
  ],
  scopeName: 'text.shell-session'
}

export default grammar
