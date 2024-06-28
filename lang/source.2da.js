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
  extensions: ['.2da'],
  names: ['2-dimensional-array'],
  patterns: [
    {
      begin:
        '(?x) \\A\n[ \\t]* (2DA\\s+V(?:\\d+\\.\\d+)) # Format signature\n[ \\t]* (?:(\\S.*?) [ \\t]*)?     # Unexpected junk\n$ \\s*',
      beginCaptures: {
        0: {name: 'meta.file-signature.2da'},
        1: {name: 'keyword.control.format-version.2da'},
        2: {name: 'invalid.illegal.unexpected-characters.2da'}
      },
      end: '(?!\\G)$',
      name: 'meta.header.2da',
      patterns: [{include: '#default'}]
    },
    {
      begin: '\\A[ \\t]*(\\S+)[ \\t]*$',
      beginCaptures: {1: {patterns: [{include: '#default'}]}},
      end: '(?!\\G)',
      name: 'meta.header.2da'
    },
    {
      begin: '^',
      end: '(?=A)B',
      name: 'meta.body.2da',
      patterns: [
        {
          begin: '\\G',
          contentName: 'constant.other.reference.link',
          end: '$',
          name: 'meta.column-headers.2da',
          patterns: [{include: '#headers'}]
        },
        {
          begin: '(?!\\G)^',
          end: '(?=A)B',
          name: 'meta.records.2da',
          patterns: [{include: '#row'}]
        }
      ]
    }
  ],
  repository: {
    blankEntry: {
      match: '(?:\\G|^|(?<=\\s))\\*{4}(?=\\s|$)',
      name: 'keyword.operator.null-value.2da'
    },
    default: {
      begin: '(?:\\G|^)[ \\t]*(?:(DEFAULT(:))[ \\t]*)?',
      beginCaptures: {
        1: {name: 'variable.assignment.default-value.2da'},
        2: {name: 'keyword.operator.assignment.colon.2da'}
      },
      end: '(?=[ \\t]*$)',
      name: 'meta.default-value.2da',
      patterns: [{include: '#value'}]
    },
    float: {
      match: '[-+]?(?:[0-9]+\\.[0-9]+|\\.[0-9]+)(?=\\s|$)',
      name: 'constant.numeric.float.decimal.2da'
    },
    headers: {
      patterns: [
        {match: '[^"\\s]+', name: 'entity.name.column.header.unquoted.2da'},
        {
          captures: {
            1: {name: 'punctuation.definition.header.begin.2da'},
            2: {name: 'punctuation.definition.header.end.2da'}
          },
          match: '(")(?=\\w)[^"]+(")',
          name: 'entity.name.column.header.quoted.2da'
        }
      ]
    },
    integer: {
      patterns: [
        {
          match: '[-+]?[0-9]+(?=\\s|$)',
          name: 'constant.numeric.integer.dec.decimal.2da'
        },
        {
          match: '[-+]?0[Xx][A-Fa-f0-9]+(?=\\s|$)',
          name: 'constant.numeric.integer.hex.hexadecimal.2da'
        }
      ]
    },
    row: {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.integer.row-index.2da'}},
          match: '(?:\\G|^)[ \\t]*(\\d+)(?=\\s|$)'
        },
        {match: '[ \\t]+', name: 'punctuation.whitespace.column-separator.2da'},
        {include: '#value'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.2da'}},
          end: '(")|([^"]*?)(?=[ \\t]*$)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.2da'},
            2: {name: 'invalid.illegal.unclosed-string.2da'}
          },
          name: 'string.quoted.double.2da'
        },
        {match: '(?![-+]?\\d)[^\\s"]+', name: 'string.unquoted.2da'}
      ]
    },
    value: {
      patterns: [
        {include: '#blankEntry'},
        {include: '#float'},
        {include: '#integer'},
        {include: '#string'}
      ]
    }
  },
  scopeName: 'source.2da'
}

export default grammar
