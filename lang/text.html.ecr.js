// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom-crystal/language-crystal>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.crystal', 'text.html.basic'],
  extensions: ['.ecr'],
  injections: {'text.html.ecr': {patterns: [{include: '#tags'}]}},
  names: ['html+ecr', 'ecr'],
  patterns: [{include: 'text.html.basic'}],
  repository: {
    tags: {
      patterns: [
        {
          begin: '(<%)(=)?',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.ecr'},
            2: {name: 'punctuation.section.embedded.return.ecr'}
          },
          contentName: 'source.crystal.embedded.ecr',
          end: '%>',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.ecr'}},
          name: 'meta.embedded.line.ecr',
          patterns: [{include: 'source.crystal'}]
        }
      ]
    }
  },
  scopeName: 'text.html.ecr'
}

export default grammar
