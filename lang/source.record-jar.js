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
  names: ['record-jar'],
  patterns: [{include: '#main'}],
  repository: {
    escape: {
      patterns: [
        {
          begin: '\\\\$\\s*',
          beginCaptures: {
            0: {name: 'constant.character.escape.newline.record-jar'}
          },
          end: '(?<=[^\\s#%"\'])(?!\\G)'
        },
        {match: '\\\\.', name: 'constant.character.escape.backslash.record-jar'}
      ]
    },
    field: {
      begin: '(?:\\G|^)(\\s*)((?!%%|#)\\S.*?)\\s*(:)\\s*',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.field.record-jar'},
        2: {name: 'variable.assignment.field-name.record-jar'},
        3: {patterns: [{include: 'etc#kolon'}]}
      },
      end: '(?!\\G)^(?!\\1\\s)(?=\\S)',
      name: 'meta.field.record-jar',
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.year.record-jar'},
            2: {patterns: [{include: 'etc#dash'}]},
            3: {name: 'constant.numeric.integer.month.record-jar'},
            4: {patterns: [{include: 'etc#dash'}]},
            5: {name: 'constant.numeric.integer.day.record-jar'}
          },
          match:
            '\\G([0-9]{4})(-)(0[0-9]|1[0-2])(-)([0-2][0-9]|3[01])(?=\\s|$)',
          name: 'constant.other.date.record-jar'
        },
        {
          begin: '\\G\\s*(?="|\')',
          end: '(?=^)(?! |\\t)',
          name: 'meta.list.record-jar',
          patterns: [
            {include: '#string'},
            {include: 'etc#comma'},
            {include: '#lineContinuation'}
          ]
        },
        {
          begin: '\\G\\s*(?=[^"\'#%\\s])',
          contentName: 'string.unquoted.record-jar',
          end: '(?=^)(?! |\\t)',
          patterns: [{include: '#escape'}]
        },
        {include: '#comment'}
      ]
    },
    main: {patterns: [{include: '#record'}, {include: 'etc#commentHash'}]},
    record: {
      begin: '\\A|(?:^|\\G)(%%)(?:\\s*(\\S.*?))?[ \\t]*$',
      beginCaptures: {
        1: {name: 'meta.separator.record-jar'},
        2: {name: 'comment.line.ignored.record-jar'}
      },
      end: '(?=^%%)(?!\\G)',
      name: 'meta.record.record-jar',
      patterns: [{include: '#field'}, {include: 'etc#commentHash'}]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.record-jar'}
          },
          end: '"|(?=\\s*(?<!\\\\)$)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.record-jar'}
          },
          name: 'string.quoted.double.record-jar',
          patterns: [{include: '#escape'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.record-jar'}
          },
          end: "'(?=\\s*(?<!\\\\)$)",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.record-jar'}
          },
          name: 'string.quoted.single.record-jar',
          patterns: [{include: '#escape'}]
        }
      ]
    }
  },
  scopeName: 'source.record-jar'
}

export default grammar
