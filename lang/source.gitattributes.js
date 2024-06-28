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
  dependencies: ['etc', 'source.gitignore'],
  extensions: [],
  names: ['git-attributes', 'gitattributes'],
  patterns: [{include: '#main'}],
  repository: {
    attribute: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#attributePrefix'}]},
            2: {name: 'invalid.illegal.syntax.bad-name.gitattributes'},
            3: {name: 'invalid.illegal.syntax.bad-name.gitattributes'}
          },
          match: '([-!](?=\\S))?+([^-A-Za-z0-9_.\\s]\\S*)|([-!])(?=\\s|$)',
          name: 'meta.attribute.gitattributes'
        },
        {
          captures: {
            1: {patterns: [{include: '#attributePrefix'}]},
            2: {name: 'variable.parameter.attribute.gitattributes'},
            3: {
              name: 'punctuation.definition.assignment.equals-sign.gitattributes'
            },
            4: {name: 'constant.language.other.gitattributes'}
          },
          match: '(-|!)?([^\\s=]+)(?:(=)([^\\s]*))?',
          name: 'meta.attribute.gitattributes'
        }
      ]
    },
    attributePrefix: {
      patterns: [
        {
          match: '-',
          name: 'keyword.operator.logical.not.negation.gitattributes'
        },
        {match: '!', name: 'keyword.operator.unset.delete.gitattributes'}
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.gitattributes'}
      },
      end: '$',
      name: 'comment.line.number-sign.gitattributes'
    },
    macro: {
      begin: '(?:^|\\G)(\\[)(attr)(\\])([-\\w.]+)',
      beginCaptures: {
        1: {patterns: [{include: 'etc#bracket'}]},
        2: {name: 'storage.type.attribute.gitattributes'},
        3: {patterns: [{include: 'etc#bracket'}]},
        4: {name: 'entity.name.attribute.gitattributes'}
      },
      contentName: 'meta.attribute-list.gitattributes',
      end: '$',
      name: 'meta.definition.gitattributes',
      patterns: [{include: '#attribute'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#macro'},
        {include: '#pattern'},
        {include: 'source.gitignore#escape'}
      ]
    },
    pattern: {
      begin: '(?=[^#\\s])',
      end: '$|(?=#)',
      name: 'meta.pattern.gitattributes',
      patterns: [
        {include: 'source.gitignore#patternInnards'},
        {
          begin: '\\s',
          end: '(?=$)',
          name: 'meta.attribute-list.gitattributes',
          patterns: [{include: '#attribute'}]
        }
      ]
    }
  },
  scopeName: 'source.gitattributes'
}

export default grammar
