// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-dsv>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.csv'],
  names: ['csv'],
  patterns: [{include: '#main'}],
  repository: {
    escape: {match: '""', name: 'constant.character.escape.quote.csv'},
    header: {
      applyEndPatternLast: true,
      begin: '\\A',
      end: '(?!\\G)',
      patterns: [
        {begin: '\\G(?=\\s*$)', end: '\\s*(?=\\S)'},
        {
          applyEndPatternLast: true,
          begin: '(?=\\S)',
          end: '(?!\\G)',
          name: 'meta.table.header.csv',
          patterns: [
            {
              begin: '(?:^|\\G|(?<=,))(\\s*)(?=[^\\s,])',
              beginCaptures: {1: {name: 'punctuation.whitespace.leading.csv'}},
              end: '([ \\t\\f\\v]*)(?=,|$)',
              endCaptures: {1: {name: 'punctuation.whitespace.trailing.csv'}},
              name: 'meta.table.field.csv',
              patterns: [
                {
                  applyEndPatternLast: true,
                  begin: '\\G"',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.column.begin.csv'}
                  },
                  end: '"',
                  endCaptures: {
                    0: {name: 'punctuation.definition.column.end.csv'}
                  },
                  name: 'entity.name.column.quoted.csv',
                  patterns: [{include: '#escape'}]
                },
                {
                  begin: '\\G(?=[^\\s,"])',
                  end: '(?=\\s*(?:,|$))',
                  name: 'entity.name.column.unquoted.csv'
                }
              ]
            },
            {include: '#separator'}
          ]
        }
      ]
    },
    main: {patterns: [{include: '#header'}, {include: '#record'}]},
    record: {
      applyEndPatternLast: true,
      begin: '^(?=.*?,)',
      end: '$',
      name: 'meta.table.record.csv',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?:^|\\G|(?<=,))(\\s*)(?=[^\\s,])',
          beginCaptures: {1: {name: 'punctuation.whitespace.leading.csv'}},
          end: '([ \\t\\f\\v]*)(?=,|$)',
          endCaptures: {1: {name: 'punctuation.whitespace.trailing.csv'}},
          name: 'meta.table.field.csv',
          patterns: [
            {
              applyEndPatternLast: true,
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.csv'}
              },
              end: '"',
              endCaptures: {0: {name: 'punctuation.definition.string.end.csv'}},
              name: 'string.quoted.double.csv',
              patterns: [{include: '#escape'}]
            },
            {
              begin: '\\G(?=[^\\s,"])',
              end: '(?=\\s*(?:,|$))',
              name: 'string.unquoted.csv'
            }
          ]
        },
        {include: '#separator'}
      ]
    },
    separator: {
      captures: {0: {name: 'punctuation.separator.delimiter.comma.csv'}},
      match: ',',
      name: 'keyword.operator.separator.csv'
    }
  },
  scopeName: 'source.csv'
}

export default grammar
