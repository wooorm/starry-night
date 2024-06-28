// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.xlfd'],
  extensions: [],
  names: ['x-font-directory-index'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '^!',
      beginCaptures: {0: {name: 'punctuation.definition.comment.fontdir'}},
      end: '(?=$)',
      name: 'comment.line.bang.exclamation-mark.fontdir'
    },
    entryCount: {
      match: '\\A([0-9]+)(?=\\s|$)',
      name: 'constant.numeric.integer.int.decimal.fontdir'
    },
    entryName: {
      patterns: [
        {include: '#string'},
        {
          match: '^(?:[^-\\s]|\\s(?!-|\\S+$)|(?<!\\s)-)+',
          name: 'string.unquoted.font-name.fontdir'
        }
      ]
    },
    keywords: {
      match: '^(FILE_NAMES_ALIASES)(?=\\s|$)',
      name: 'keyword.control.directive.font-name-aliases.fontdir'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#keywords'},
        {include: '#entryCount'},
        {include: '#entryName'},
        {include: 'source.xlfd#name'},
        {include: '#otherField'}
      ]
    },
    otherField: {
      patterns: [
        {include: '#string'},
        {match: '(?<=\\s)\\S+$', name: 'constant.language.other.fontdir'}
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.fontdir'}},
      end: '"|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.fontdir'}},
      name: 'string.quoted.double.font-name.fontdir',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.fontdir'}
          },
          match: '(\\\\).',
          name: 'constant.character.escape.backslash.fontdir'
        }
      ]
    }
  },
  scopeName: 'source.fontdir'
}

export default grammar
