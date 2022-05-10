// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elixir-lang/elixir-tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.eex', '.html.heex', '.html.leex'],
  injections: {
    'R:text.html.elixir meta.tag meta.attribute string.quoted': {
      patterns: [{include: 'text.elixir'}]
    }
  },
  names: ['html+eex', 'eex', 'heex', 'leex'],
  patterns: [{include: 'text.elixir'}, {include: 'text.html.basic'}],
  scopeName: 'text.html.elixir'
}

export default grammar
