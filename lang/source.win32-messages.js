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
  names: ['win32-message-file'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: ';',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.win32-messages'}
      },
      end: '$',
      name: 'meta.comment.line.semicolon.win32-messages',
      patterns: [{include: 'source.c'}]
    },
    delim: {match: '^\\.$', name: 'meta.separator.win32-messages'},
    insert: {
      captures: {
        1: {name: 'constant.language.insert.win32-messages'},
        2: {name: 'entity.name.tag.insert.format.win32-messages'},
        3: {name: 'punctuation.definition.insert.format.begin.win32-messages'},
        4: {name: 'punctuation.definition.insert.format.end.win32-messages'}
      },
      match: '(?x) (%(?:.|\\d{1,2})) ((!)(\\w+)(!))? ',
      name: 'meta.line.insert.win32-messages'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#insert'},
        {include: '#message'},
        {include: '#statement'}
      ]
    },
    message: {match: '^[^=]+$', name: 'string.unquoted.message.win32-messages'},
    statement: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.statement.win32-messages'}
          },
          match: '[^=()]+(?=(=))',
          name: 'keyword.control.statement.win32-messages'
        },
        {match: '(?:0\\w)?\\d+', name: 'constant.numeric.win32-messages'},
        {
          begin: '(?<==)(?!\\()',
          beginCaptures: {
            0: {name: 'punctuation.definition.statement.win32-messages'}
          },
          end: '$',
          name: 'string.unquoted.value.win32-messages'
        },
        {
          begin: '(?<==)\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.block.group.begin.win32-messages'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.block.group.end.win32-messages'}
          },
          name: 'meta.block.statement.value.win32-messages',
          patterns: [{include: '#statement'}]
        }
      ]
    }
  },
  scopeName: 'source.win32-messages'
}

export default grammar
