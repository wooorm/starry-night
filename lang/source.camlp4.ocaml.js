// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.ocaml'],
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '(\\[<)(?=.*?>])',
      beginCaptures: {1: {name: 'punctuation.definition.camlp4-stream.ocaml'}},
      end: '(?=>])',
      endCaptures: {1: {name: 'punctuation.definition.camlp4-stream.ocaml'}},
      name: 'meta.camlp4-stream.ocaml',
      patterns: [{include: '#camlpppp-streams'}]
    },
    {match: '\\[<|>]', name: 'punctuation.definition.camlp4-stream.ocaml'},
    {
      match: '\\bparser\\b|<(<|:)|>>|\\$(:|\\${0,1})',
      name: 'keyword.other.camlp4.ocaml'
    }
  ],
  repository: {
    'camlpppp-streams': {
      patterns: [
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.camlp4.simple-element.ocaml'}
          },
          end: "(;)(?=\\s*')|(?=\\s*>])",
          endCaptures: {1: {name: 'punctuation.separator.camlp4.ocaml'}},
          name: 'meta.camlp4-stream.element.ocaml',
          patterns: [{include: 'source.ocaml'}]
        }
      ]
    }
  },
  scopeName: 'source.camlp4.ocaml'
}

export default grammar
