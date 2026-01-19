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
  extensions: ['.tsv', '.vcf'],
  names: ['tsv', 'tab-seperated-values'],
  patterns: [{include: '#main'}],
  repository: {
    escapes: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.tsv'}},
          match: '(\\\\)t',
          name: 'constant.character.escape.tab.tsv'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.tsv'}},
          match: '(\\\\)\\\\',
          name: 'constant.character.escape.backslash.tsv'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.tsv'}},
          match: '(\\\\)n',
          name: 'constant.character.escape.line-feed.tsv'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.tsv'}},
          match: '(\\\\)r',
          name: 'constant.character.escape.carriage-return.tsv'
        }
      ]
    },
    field: {
      patterns: [
        {
          match: '^[-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)$',
          name: 'constant.numeric.decimal.tsv'
        },
        {
          captures: {
            1: {name: 'constant.language.boolean.true.tsv'},
            2: {name: 'constant.language.boolean.false.tsv'}
          },
          match: '(?i)^(?:(true|yes|on)|(false|no|off))$'
        },
        {
          captures: {1: {name: 'punctuation.definition.null.backslash.tsv'}},
          match: '^(\\\\)N$',
          name: 'support.constant.language.null.tsv'
        },
        {
          captures: {0: {patterns: [{include: '#escapes'}]}},
          match: '^.+$',
          name: 'string.unquoted.other.tsv'
        }
      ]
    },
    header: {
      applyEndPatternLast: true,
      begin: '\\A',
      end: '(?!\\G)',
      patterns: [
        {begin: '\\G(?=\\s*$)', end: '\\s*(?=\\S)'},
        {
          begin: '(?=\\S)(?=.*\\t)',
          end: '$',
          name: 'meta.table.header.tsv',
          patterns: [
            {match: '[^\\t\\r\\n]+', name: 'entity.name.column.tsv'},
            {include: '#separator'}
          ]
        }
      ]
    },
    main: {patterns: [{include: '#header'}, {include: '#record'}]},
    record: {
      begin: '^(?=.*\\t)',
      end: '$',
      name: 'meta.table.record.tsv',
      patterns: [
        {
          captures: {0: {patterns: [{include: '#field'}]}},
          match: '[^\\t\\r\\n]+'
        },
        {include: '#separator'}
      ]
    },
    separator: {match: '\\t', name: 'punctuation.whitespace.separator.tab.tsv'}
  },
  scopeName: 'source.tsv'
}

export default grammar
