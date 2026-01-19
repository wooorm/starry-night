// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Akzestia/cqlTextMate>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cql'],
  names: ['cql'],
  patterns: [
    {include: '#comments'},
    {include: '#strings'},
    {include: '#constants'},
    {include: '#keywords'},
    {include: '#types'},
    {include: '#functions'},
    {include: '#operators'},
    {include: '#identifiers'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '(//|--).*', name: 'comment.line.double-slash.cql'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.cql'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b(true|false|null)\\b',
          name: 'constant.language.boolean.cql'
        },
        {
          match: '\\b[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}\\b',
          name: 'constant.numeric.uuid.cql'
        },
        {
          match: '-?\\d+\\.\\d+([eE][+-]?\\d+)?',
          name: 'constant.numeric.float.cql'
        },
        {match: '\\b-?\\d+\\b', name: 'constant.numeric.integer.cql'}
      ]
    },
    functions: {
      patterns: [
        {
          match: '\\b(COUNT|MAX|MIN|SUM|AVG|TOKEN|WRITETIME|TTL|FULL)\\b',
          name: 'support.function.cql'
        }
      ]
    },
    identifiers: {
      patterns: [
        {match: '@[A-Za-z_][\\w-]*', name: 'variable.other.outline.cql'}
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(SELECT|INSERT|UPDATE|DELETE|USE|CREATE|ALTER|DROP|TRUNCATE|RENAME|BEGIN|APPLY|BATCH|COMMIT|FROM|INTO|WHERE|SET|VALUES|IF|AND|OR|NOT|EXISTS|WITH|ORDER|BY|GROUP|HAVING|LIMIT|ALLOW|FILTERING|PRIMARY|KEY|ADD|TO|AS|IN|ON|USING|JSON|DISTINCT)\\b',
          name: 'keyword.control.cql'
        },
        {
          match:
            '\\b(KEYSPACE|TABLE|TYPE|VIEW|MATERIALIZED|INDEX|FUNCTION|AGGREGATE|ROLE|ALL|MODIFY|IS|USER|PASSWORD|SUPERUSER|NOSUPERUSER|GRANT|REVOKE|AUTHORIZE|PERMISSIONS|LOGIN|OPTIONS|REPLICATION|DURABLE_WRITES|CONSISTENCY|LEVEL|QUORUM|LOCAL_ONE|LOCAL_QUORUM|EACH_QUORUM|ONE|TWO|THREE|SEARCH|DESCRIBE|CLUSTERING|PARTITION|STATIC|CUSTOM|REPLACE|CALLED|RETURNS|LANGUAGE|SFUNC|STYPE|FINALFUNC|INITCOND|EXECUTE|ACCESS|PROFILES|CONFIG|ROWS|COLUMNS|KEYSPACES|USERS|ROLES|FUNCTIONS|MBEAN|MBEANS|PATTERN|PROXY|ID|LIKE|ANN|OFFSET|VERTEX|EDGE|LABEL)\\b',
          name: 'keyword.other.cql'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '(=|!=|<|>|<=|>=)', name: 'keyword.operator.comparison.cql'},
        {
          match: '(\\+=|-=|\\*=|/=|%=|=)',
          name: 'keyword.operator.assignment.cql'
        },
        {match: '(\\+|-|\\*|/|%)', name: 'keyword.operator.arithmetic.cql'}
      ]
    },
    strings: {
      patterns: [
        {match: "'(?:[^'\\\\]|\\\\.)*'", name: 'string.quoted.single.cql'},
        {match: '"(?:[^"\\\\]|\\\\.)*"', name: 'string.quoted.double.cql'}
      ]
    },
    types: {
      patterns: [
        {
          match:
            '(?i)\\b(ASCII|BIGINT|BLOB|BOOLEAN|COUNTER|DATE|DECIMAL|DOUBLE|FLOAT|FROZEN|INET|INT|LIST|MAP|SET|SMALLINT|TEXT|TIME|TIMESTAMP|TIMEUUID|TINYINT|TUPLE|UUID|VARCHAR|VARINT|NULL|graph_engine)\\b',
          name: 'storage.type.cql'
        }
      ]
    }
  },
  scopeName: 'source.cql'
}

export default grammar
