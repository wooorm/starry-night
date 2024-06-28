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
  extensions: ['.vdf'],
  names: ['valve-data-format', 'keyvalues', 'vdf'],
  patterns: [{include: '#main'}],
  repository: {
    block: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.block.begin.keyvalues'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.keyvalues'}},
      name: 'meta.structure.block.keyvalues',
      patterns: [{include: '#main'}]
    },
    comment: {
      begin: '/',
      beginCaptures: {0: {name: 'punctuation.definition.comment.keyvalues'}},
      end: '$',
      name: 'comment.line.slash.keyvalues'
    },
    main: {
      patterns: [
        {include: '#block'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#number'}
      ]
    },
    number: {match: '\\b\\d+\\b$', name: 'constant.numeric.integer.keyvalues'},
    string: {
      patterns: [
        {include: '#string_parts'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.keyvalues'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.keyvalues'}
          },
          name: 'string.quoted.double.keyvalues',
          patterns: [{include: '#string_parts'}]
        },
        {
          match: '[^\\s{}]+',
          name: 'string.unquoted.keyvalues',
          patterns: [{include: '#string_parts'}]
        }
      ]
    },
    string_parts: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.include.keyvalues'}},
          match: '(?<!\\w)(#)\\w+',
          name: 'entity.name.tag.include.keyvalues'
        },
        {
          captures: {
            0: {name: 'constant.language.directory.keyvalues'},
            1: {name: 'punctuation.definition.directory.begin.keyvalues'},
            3: {name: 'punctuation.definition.directory.end.keyvalues'}
          },
          match: '(\\|)(\\S+)(\\|)',
          name: 'string.unquoted.file-path.keyvalues'
        },
        {match: '\\\\[\\\\nt"]', name: 'constant.character.escape.keyvalues'}
      ]
    }
  },
  scopeName: 'source.keyvalues'
}

export default grammar
