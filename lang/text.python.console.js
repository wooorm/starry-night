// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/MagicStack/MagicPython>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['python-console', 'pycon'],
  patterns: [
    {
      captures: {
        1: {name: 'punctuation.separator.prompt.python.console'},
        2: {patterns: [{include: 'source.python'}]}
      },
      match: '^(>{3}|\\.{3}|In \\[\\d+\\]:) (.+)$'
    }
  ],
  scopeName: 'text.python.console'
}

export default grammar
