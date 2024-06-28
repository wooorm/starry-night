// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fguitton/vscode-gedcom>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ged'],
  names: ['gedcom'],
  patterns: [{include: '#line'}],
  repository: {
    delim: {patterns: [{match: '(\\s)', name: 'text.gedcom'}]},
    level: {
      patterns: [
        {match: '(^\\d*)', name: 'constant.numeric.gedcom'},
        {include: '#delim'}
      ]
    },
    line: {
      patterns: [
        {include: '#level'},
        {include: '#xref'},
        {include: '#statement'}
      ]
    },
    line_name: {
      patterns: [
        {match: '([^/]*$)', name: 'text.gedcom'},
        {include: '#line_name_composite'}
      ]
    },
    line_name_composite: {
      patterns: [
        {
          begin: '(/)',
          beginCaptures: {1: {name: 'string.regexp.gedcom'}},
          contentName: 'string.regexp.gedcom',
          end: '(/)',
          endCaptures: {1: {name: 'string.regexp.gedcom'}}
        },
        {match: '(.)', name: 'string.unquoted.gedcom'}
      ]
    },
    noop: {patterns: [{match: '(.)', name: 'text.gedcom'}]},
    pointer: {
      patterns: [
        {
          begin: '(@)',
          beginCaptures: {1: {name: 'storage.type.gedcom'}},
          contentName: 'storage.type.gedcom',
          end: '(@)',
          endCaptures: {1: {name: 'storage.type.gedcom'}}
        }
      ]
    },
    statement: {
      patterns: [
        {include: '#tag_name'},
        {include: '#tag_pointers'},
        {include: '#tag_line'},
        {include: '#pointer'}
      ]
    },
    tag_line: {
      patterns: [
        {
          begin: '([A-Z]*)',
          beginCaptures: {1: {name: 'keyword.control.gedcom'}},
          end: '(^(?=.{0,1})(?:|))',
          endCaptures: {1: {name: 'text.gedcom'}},
          patterns: [{include: '#noop'}]
        }
      ]
    },
    tag_name: {
      patterns: [
        {
          begin: '(NAME)',
          beginCaptures: {1: {name: 'keyword.control.gedcom'}},
          end: '(^(?=.{0,1})(?:|))',
          endCaptures: {1: {name: 'text.gedcom'}},
          patterns: [{include: '#line_name'}]
        }
      ]
    },
    tag_pointers: {
      patterns: [
        {
          begin:
            '(FAMS|FAMC|HUSB|WIFE|CHIL|SUBM|SUMN|REPO|ALIA|ANCI|DESI|ASSO|OBJE|NOTE|SOUR)',
          beginCaptures: {1: {name: 'keyword.control.gedcom'}},
          end: '(^(?=.{0,1})(?:|))',
          endCaptures: {1: {name: 'text.gedcom'}},
          patterns: [{include: '#pointer'}]
        }
      ]
    },
    xref: {patterns: [{include: '#pointer'}]}
  },
  scopeName: 'source.gedcom'
}

export default grammar
