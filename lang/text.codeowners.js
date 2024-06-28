// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: [],
  names: ['codeowners'],
  patterns: [{include: '#main'}],
  repository: {
    main: {
      patterns: [
        {include: 'etc#comment'},
        {include: 'etc#esc'},
        {include: '#pattern'}
      ]
    },
    owner: {
      captures: {
        1: {name: 'keyword.operator.mention.codeowners'},
        2: {name: 'variable.assignment.team'}
      },
      match: '(@)((?:[-.\\w]+/)?[-.\\w]+)(?=$| |#)',
      name: 'meta.owner.codeowners'
    },
    pattern: {
      begin: '^((?:[^#\\s\\\\]|\\\\[^#])++)',
      beginCaptures: {
        1: {
          patterns: [
            {
              match: '\\*\\*',
              name: 'keyword.operator.glob.wildcard.globstar.codeowners'
            },
            {match: '[*?]', name: 'keyword.operator.glob.wildcard.codeowners'},
            {
              match: '/',
              name: 'punctuation.directory.separator.meta.codeowners'
            },
            {
              match: '[^\\[\\]\\\\*?#/\\s]+',
              name: 'entity.other.file.name.codeowners'
            }
          ]
        }
      },
      end: '$|(?=#)',
      name: 'meta.pattern.codeowners',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\s',
          end: '(?=$|#)',
          patterns: [{include: 'etc#emailUnquoted'}, {include: '#owner'}]
        }
      ]
    }
  },
  scopeName: 'text.codeowners'
}

export default grammar
