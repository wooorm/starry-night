// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nixinova/NovaGrammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['git-commit', 'commit'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '^#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.git-commit'}},
      end: '$',
      name: 'comment.line.git-commit',
      patterns: [
        {
          captures: {
            1: {name: 'markup.changed.git-commit'},
            3: {name: 'markup.bold.filename.git-commit'}
          },
          match: '(modified)(:) +(.+)',
          name: 'meta.generic.variable.other.modified.git-commit'
        },
        {
          captures: {
            1: {name: 'markup.changed.git-commit'},
            3: {name: 'markup.bold.filename.git-commit'},
            4: {name: 'markup.raw.token.git-commit'},
            5: {name: 'markup.bold.filename.git-commit'}
          },
          match: '(renamed)(:) +(.+)(->)(.+)',
          name: 'meta.generic.variable.other.renamed.git-commit'
        },
        {
          captures: {
            1: {name: 'markup.deleted.git-commit'},
            3: {name: 'markup.bold.filename.git-commit'}
          },
          match: '(deleted)(:) +(.+)',
          name: 'meta.generic.variable.other.deleted.git-commit'
        },
        {
          captures: {
            1: {name: 'markup.inserted.git-commit'},
            3: {name: 'markup.bold.filename.git-commit'}
          },
          match: '(new file)(:) +(.+)',
          name: 'meta.generic.variable.other.new-file.git-commit'
        }
      ]
    },
    main: {patterns: [{include: '#comment'}]}
  },
  scopeName: 'text.git-commit'
}

export default grammar
