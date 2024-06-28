// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elixir-lang/elixir-tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.elixir'],
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '<%+#',
      captures: {0: {name: 'punctuation.definition.comment.eex'}},
      end: '%>',
      name: 'comment.block.elixir'
    },
    {
      begin: '<%+(?!>)[-=]*',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.elixir'}},
      contentName: 'source.elixir',
      end: '(-)%>|(%)>',
      endCaptures: {
        0: {name: 'punctuation.section.embedded.end.elixir'},
        1: {name: 'source.elixir'},
        2: {name: 'source.elixir'}
      },
      name: 'meta.embedded.line.elixir',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.elixir'}},
          match: '(#).*?(?=-?%>)',
          name: 'comment.line.number-sign.elixir'
        },
        {include: 'source.elixir'}
      ]
    }
  ],
  scopeName: 'text.elixir'
}

export default grammar
