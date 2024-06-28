// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.cql',
    '.db2',
    '.ddl',
    '.mysql',
    '.pgsql',
    '.prc',
    '.sql',
    '.sql',
    '.sql',
    '.tab',
    '.udf',
    '.viw'
  ],
  names: ['plpgsql', 'sql', 'sqlpl'],
  patterns: [
    {include: '#comments'},
    {
      captures: {
        1: {name: 'keyword.other.create.sql'},
        2: {name: 'keyword.other.sql'},
        5: {name: 'entity.name.function.sql'}
      },
      match:
        '(?i:^\\s*(create(?:\\s+or\\s+replace)?)\\s+(aggregate|conversion|database|domain|function|group|(unique\\s+)?index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)([\'"`]?)(\\w+)\\4',
      name: 'meta.create.sql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.sql'},
        2: {name: 'keyword.other.sql'}
      },
      match:
        '(?i:^\\s*(drop)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))',
      name: 'meta.drop.sql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.sql'},
        2: {name: 'keyword.other.table.sql'},
        3: {name: 'entity.name.function.sql'},
        4: {name: 'keyword.other.cascade.sql'}
      },
      match: '(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)',
      name: 'meta.drop.sql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.sql'},
        2: {name: 'keyword.other.table.sql'}
      },
      match:
        '(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)',
      name: 'meta.alter.sql'
    },
    {
      captures: {
        1: {name: 'storage.type.sql'},
        10: {name: 'constant.numeric.sql'},
        11: {name: 'storage.type.sql'},
        12: {name: 'storage.type.sql'},
        13: {name: 'storage.type.sql'},
        14: {name: 'constant.numeric.sql'},
        15: {name: 'storage.type.sql'},
        2: {name: 'storage.type.sql'},
        3: {name: 'constant.numeric.sql'},
        4: {name: 'storage.type.sql'},
        5: {name: 'constant.numeric.sql'},
        6: {name: 'storage.type.sql'},
        7: {name: 'constant.numeric.sql'},
        8: {name: 'constant.numeric.sql'},
        9: {name: 'storage.type.sql'}
      },
      match:
        '(?xi)\n\n\t\t\t\t# normal stuff, capture 1\n\t\t\t\t \\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b\n\n\t\t\t\t# numeric suffix, capture 2 + 3i\n\t\t\t\t|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)\n\n\t\t\t\t# optional numeric suffix, capture 4 + 5i\n\t\t\t\t|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?\n\n\t\t\t\t# special case, capture 6 + 7i + 8i\n\t\t\t\t|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?\n\n\t\t\t\t# special case, captures 9, 10i, 11\n\t\t\t\t|\\b(times?)\\b(?:\\((\\d+)\\))?(\\swith(?:out)?\\stime\\szone\\b)?\n\n\t\t\t\t# special case, captures 12, 13, 14i, 15\n\t\t\t\t|\\b(timestamp)(?:(s|tz))?\\b(?:\\((\\d+)\\))?(\\s(with|without)\\stime\\szone\\b)?\n\n\t\t\t'
    },
    {
      match:
        '(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|check|constraint)\\b)',
      name: 'storage.modifier.sql'
    },
    {match: '\\b\\d+\\b', name: 'constant.numeric.sql'},
    {
      match:
        '(?i:\\b(select(\\s+distinct)?|insert\\s+(ignore\\s+)?into|update|delete|from|set|where|group\\sby|or|like|and|union(\\s+all)?|having|order\\sby|limit|(inner|cross)\\s+join|join|straight_join|(left|right)(\\s+outer)?\\s+join|natural(\\s+(left|right)(\\s+outer)?)?\\s+join)\\b)',
      name: 'keyword.other.DML.sql'
    },
    {
      match: '(?i:\\b(on|((is\\s+)?not\\s+)?null)\\b)',
      name: 'keyword.other.DDL.create.II.sql'
    },
    {match: '(?i:\\bvalues\\b)', name: 'keyword.other.DML.II.sql'},
    {
      match:
        '(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)',
      name: 'keyword.other.LUW.sql'
    },
    {
      match: '(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)',
      name: 'keyword.other.authorization.sql'
    },
    {match: '(?i:\\bin\\b)', name: 'keyword.other.data-integrity.sql'},
    {
      match:
        '(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)',
      name: 'keyword.other.object-comments.sql'
    },
    {match: '(?i)\\bAS\\b', name: 'keyword.other.alias.sql'},
    {match: '(?i)\\b(DESC|ASC)\\b', name: 'keyword.other.order.sql'},
    {match: '\\*', name: 'keyword.operator.star.sql'},
    {match: '[!<>]?=|<>|<|>', name: 'keyword.operator.comparison.sql'},
    {match: '-|\\+|/', name: 'keyword.operator.math.sql'},
    {match: '\\|\\|', name: 'keyword.operator.concatenator.sql'},
    {
      match:
        '(?i)\\b(CURRENT_(DATE|TIME(STAMP)?|USER)|(SESSION|SYSTEM)_USER)\\b',
      name: 'support.function.scalar.sql'
    },
    {
      match: '(?i)\\b(AVG|COUNT|MIN|MAX|SUM)(?=\\s*\\()',
      name: 'support.function.aggregate.sql'
    },
    {
      match:
        '(?i)\\b(CONCATENATE|CONVERT|LOWER|SUBSTRING|TRANSLATE|TRIM|UPPER)\\b',
      name: 'support.function.string.sql'
    },
    {
      captures: {
        1: {name: 'constant.other.database-name.sql'},
        2: {name: 'constant.other.table-name.sql'}
      },
      match: '(\\w+?)\\.(\\w+)'
    },
    {include: '#strings'},
    {include: '#regexps'},
    {
      captures: {
        1: {name: 'punctuation.section.scope.begin.sql'},
        2: {name: 'punctuation.section.scope.end.sql'}
      },
      match: '(\\()(\\))',
      name: 'meta.block.sql'
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=--)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.sql'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '--',
              beginCaptures: {0: {name: 'punctuation.definition.comment.sql'}},
              end: '\\n',
              name: 'comment.line.double-dash.sql'
            }
          ]
        },
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.sql'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {0: {name: 'punctuation.definition.comment.sql'}},
              end: '\\n',
              name: 'comment.line.number-sign.sql'
            }
          ]
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.sql'}},
          end: '\\*/',
          name: 'comment.block.c'
        }
      ]
    },
    regexps: {
      patterns: [
        {
          begin: '/(?=\\S.*/)',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: '/',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.regexp.sql',
          patterns: [
            {include: '#string_interpolation'},
            {match: '\\\\/', name: 'constant.character.escape.slash.sql'}
          ]
        },
        {
          begin: '%r\\{',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.regexp.modr.sql',
          patterns: [{include: '#string_interpolation'}]
        }
      ]
    },
    string_escape: {match: '\\\\.', name: 'constant.character.escape.sql'},
    string_interpolation: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.sql'},
        3: {name: 'punctuation.definition.string.end.sql'}
      },
      match: '(#\\{)([^\\}]*)(\\})',
      name: 'string.interpolated.sql'
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.sql'},
            2: {name: 'punctuation.definition.string.end.sql'}
          },
          match: "(')[^'\\\\]*(')",
          name: 'string.quoted.single.sql'
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.quoted.single.sql',
          patterns: [{include: '#string_escape'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.sql'},
            2: {name: 'punctuation.definition.string.end.sql'}
          },
          match: '(`)[^`\\\\]*(`)',
          name: 'string.quoted.other.backtick.sql'
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.quoted.other.backtick.sql',
          patterns: [{include: '#string_escape'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.sql'},
            2: {name: 'punctuation.definition.string.end.sql'}
          },
          match: '(")[^"#]*(")',
          name: 'string.quoted.double.sql'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.quoted.double.sql',
          patterns: [{include: '#string_interpolation'}]
        },
        {
          begin: '%\\{',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.sql'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.sql'}},
          name: 'string.other.quoted.brackets.sql',
          patterns: [{include: '#string_interpolation'}]
        }
      ]
    }
  },
  scopeName: 'source.sql'
}

export default grammar
