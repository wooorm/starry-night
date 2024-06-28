// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fredbenenson/sublime-cypher>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cyp', '.cypher'],
  names: ['cypher'],
  patterns: [
    {include: '#comments'},
    {include: '#constants'},
    {include: '#keywords'},
    {include: '#functions'},
    {include: '#path-patterns'},
    {include: '#operators'},
    {include: '#identifiers'},
    {include: '#properties_literal'},
    {include: '#numbers'},
    {include: '#strings'}
  ],
  repository: {
    comments: {
      patterns: [{match: '//.*$\\n?', name: 'comment.line.double-slash.cypher'}]
    },
    constants: {
      patterns: [
        {
          match: '\\bTRUE|true|FALSE|false\\b',
          name: 'constant.language.bool.cypher'
        }
      ]
    },
    functions: {
      patterns: [
        {
          match: '(?i)\\b(NOT)(?=\\s*\\()',
          name: 'keyword.control.function.boolean.cypher'
        },
        {
          match: '(?i)\\b(ALL|ANY|NONE|SINGLE)(?=\\s*\\()',
          name: 'support.function.predicate.cypher'
        },
        {
          match: '(?i)\\b(LENGTH|TYPE|ID|COALESCE|HEAD|LAST)(?=\\s*\\()',
          name: 'support.function.scalar.cypher'
        },
        {
          match:
            '(?i)\\b(NODES|RELATIONSHIPS|EXTRACT|FILTER|TAIL|RANGE|REDUCE)(?=\\s*\\()',
          name: 'support.function.collection.cypher'
        },
        {
          match: '(?i)\\b(ABS|ROUND|SQRT|SIGN)(?=\\s*\\()',
          name: 'support.function.math.cypher'
        },
        {
          match:
            '(?i)\\b(count|sum|avg|max|min|percentile_disc|percentile_cont|collect)(?=\\s*\\()',
          name: 'support.function.aggregation.cypher'
        },
        {
          match:
            '(?i)\\b(STR|REPLACE|SUBSTRING|LEFT|RIGHT|LTRIM|RTRIM|TRIM|LOWER|UPPER)(?=\\s*\\()',
          name: 'support.function.string.cypher'
        }
      ]
    },
    identifiers: {
      patterns: [
        {match: '`.+?`', name: 'variable.other.quoted-identifier.cypher'},
        {
          match: '[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.identifier.cypher'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i)\\b(START|MATCH|WHERE|RETURN|CREATE|DELETE|SET|FOREACH|WITH|CYPHER|DISTINCT|AS|LIMIT|SKIP|UNIQUE|ORDER\\s+BY)\\b',
          name: 'keyword.control.clause.cypher'
        },
        {match: '(?i)\\b(DESC|ASC)\\b', name: 'keyword.other.order.cypher'},
        {
          begin:
            '(?i)\\b(node|relationship|rel)((:)([a-zA-Z_-][a-zA-Z0-9_]*))?(?=\\s*\\()',
          beginCaptures: {
            1: {name: 'support.class.starting-functions-point.cypher'},
            2: {name: 'keyword.control.index-seperator.cypher'},
            3: {name: 'keyword.control.index-seperator.cypher'},
            4: {name: 'support.class.index.cypher'}
          },
          end: '\\)',
          name: 'source.starting-functions.cypher',
          patterns: [
            {
              match: '((?:`.+?`)|(?:[a-zA-Z_][a-zA-Z0-9_]*))',
              name: 'variable.parameter.relationship-name.cypher'
            },
            {
              match: '(\\*)',
              name: 'keyword.control.starting-function-params,cypher'
            },
            {include: '#comments'},
            {include: '#numbers'},
            {include: '#strings'}
          ]
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b\\d+(\\.\\d+)?\\b', name: 'constant.numeric.cypher'}
      ]
    },
    operators: {
      patterns: [
        {
          match: '(\\+|\\-|\\/|\\*|\\%|\\?|!)',
          name: 'keyword.operator.math.cypher'
        },
        {match: '(<=|=>|<>|<|>|=~|=)', name: 'keyword.operator.compare.cypher'},
        {match: '(?i)\\b(OR|AND)\\b', name: 'keyword.operator.logical.cypher'},
        {match: '(?i)\\b(IN)\\b', name: 'keyword.operator.in.cypher'}
      ]
    },
    'path-patterns': {
      patterns: [
        {
          match: '(<--|-->|--)',
          name: 'support.function.relationship-pattern.cypher'
        },
        {
          begin: '(<-|-)(\\[)',
          beginCaptures: {
            1: {name: 'support.function.relationship-pattern-start.cypher'},
            2: {name: 'keyword.operator.relationship-pattern-start.cypher'}
          },
          end: '(])(->|-)',
          endCaptures: {
            1: {name: 'keyword.operator.relationship-patern-end.cypher'},
            2: {name: 'support.function.relationship-pattern-start.cypher'}
          },
          name: 'path-pattern.cypher',
          patterns: [
            {include: '#identifiers'},
            {
              captures: {
                1: {name: 'keyword.operator.relationship-type-start.cypher'},
                2: {name: 'entity.name.class.relationship.type.cypher'}
              },
              match: '(:)((?:`.+?`)|(?:[a-zA-Z_][a-zA-Z0-9_]*))',
              name: 'entity.name.class.relationship-type.cypher'
            },
            {
              captures: {
                1: {name: 'support.type.operator.relationship-type-or.cypher'},
                2: {name: 'entity.name.class.relationship.type-or.cypher'}
              },
              match: '(\\|)(\\s*)((?:`.+?`)|(?:[a-zA-Z_][a-zA-Z0-9_]*))',
              name: 'entity.name.class.relationship-type-ored.cypher'
            },
            {
              match: '(?:\\?\\*|\\?|\\*)\\s*(?:\\d+\\s*(?:\\.\\.\\s*\\d+)?)?',
              name: 'support.function.relationship-pattern.quant.cypher'
            },
            {include: '#properties_literal'}
          ]
        }
      ]
    },
    properties_literal: {
      patterns: [
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'keyword.control.properties_literal.cypher'}
          },
          end: '}',
          endCaptures: {0: {name: 'keyword.control.properties_literal.cypher'}},
          name: 'source.cypher',
          patterns: [
            {
              match: ':|,',
              name: 'keyword.control.properties_literal.seperator.cypher'
            },
            {include: '#comments'},
            {include: '#constants'},
            {include: '#functions'},
            {include: '#operators'},
            {include: '#identifiers'},
            {include: '#numbers'},
            {include: '#strings'}
          ]
        }
      ]
    },
    string_escape: {
      captures: {2: {name: 'string.quoted.double.cypher'}},
      match: '(\\\\\\\\|\\\\[tbnrf])|(\\\\\'|\\\\")',
      name: 'constant.character.escape.cypher'
    },
    strings: {
      patterns: [
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.cypher',
          patterns: [{include: '#string_escape'}]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.cypher',
          patterns: [{include: '#string_escape'}]
        }
      ]
    }
  },
  scopeName: 'source.cypher'
}

export default grammar
