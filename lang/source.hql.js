// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hql'],
  extensionsWithDot: ['.q'],
  names: ['hiveql'],
  patterns: [
    {include: '#comments'},
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.hql'},
        5: {name: 'entity.name.function.hql'}
      },
      match:
        '(?i:^\\s*(create(?:\\s+or\\s+replace)?(?:\\s+external)?)\\s+(aggregate|intersect|IF\\sNOT\\sEXISTS|except|USE|conversion|database|domain|function|group|partition|cluster|(unique\\s+)?index|language|operator\\s+class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)',
      name: 'meta.create.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.hql'}
      },
      match:
        '(?i:^\\s*(drop)\\s+(aggregate|conversion|IF\\sEXISTS|database|domain|function|group|cluster|partition|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))',
      name: 'meta.drop.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.hql'}
      },
      match:
        '(?i:^\\s*(create)\\s+(aggregate|conversion|database|domain|IF\\sNOT\\sEXISTS|function|group|cluster|partition|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))',
      name: 'meta.create.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'},
        3: {name: 'entity.name.function.hql'},
        4: {name: 'keyword.other.cascade.hql'}
      },
      match: '(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)',
      name: 'meta.drop.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'},
        3: {name: 'entity.name.function.hql'},
        4: {name: 'keyword.other.cascade.hql'},
        5: {name: 'meta.show.hql'}
      }
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'}
      },
      match:
        '(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|intersect|except|USE|function|group|partition|cluster|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)',
      name: 'meta.alter.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'}
      },
      match:
        '(?i:^\\s*(truncate)\\s+(aggregate|conversion|database|domain|intersect|except|USE|function|group|partition|cluster|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)',
      name: 'meta.truncate.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'}
      },
      match:
        '(?i:^\\s*(show)\\s+(DATABASES|SCHEMAS|TABLES|TBLPROPERTIES|PARTITIONS|FUNCTIONS|INDEX(ES)?\\sCOLUMNS|CREATE\\sTABLE)\\s+)',
      name: 'meta.show.hql'
    },
    {
      captures: {
        1: {name: 'keyword.other.create.hql'},
        2: {name: 'keyword.other.table.hql'}
      },
      match: '(?i:^\\s*(desc(ribe)?)\\s+(DATABASE|SCHEMA)\\s+)',
      name: 'meta.describe.hql'
    },
    {
      captures: {
        1: {name: 'storage.type.hql'},
        10: {name: 'constant.numeric.hql'},
        11: {name: 'storage.type.hql'},
        12: {name: 'storage.type.hql'},
        13: {name: 'storage.type.hql'},
        14: {name: 'constant.numeric.hql'},
        15: {name: 'storage.type.hql'},
        2: {name: 'storage.type.hql'},
        3: {name: 'constant.numeric.hql'},
        4: {name: 'storage.type.hql'},
        5: {name: 'constant.numeric.hql'},
        6: {name: 'storage.type.hql'},
        7: {name: 'constant.numeric.hql'},
        8: {name: 'constant.numeric.hql'},
        9: {name: 'storage.type.hql'}
      },
      match:
        '(?xi)\n\n\t\t\t\t# normal stuff, capture 1\n\t\t\t\t \\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|tablesample|explain|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b\n\n\t\t\t\t# numeric suffix, capture 2 + 3i\n\t\t\t\t|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)\n\n\t\t\t\t# optional numeric suffix, capture 4 + 5i\n\t\t\t\t|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?\n\n\t\t\t\t# special case, capture 6 + 7i + 8i\n\t\t\t\t|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?\n\n\t\t\t\t# special case, captures 9, 10i, 11\n\t\t\t\t|\\b(times)(?:\\((\\d+)\\))(\\swithoutstimeszone\\b)?\n\n\t\t\t\t# special case, captures 12, 13, 14i, 15\n\t\t\t\t|\\b(timestamp)(?:(s)\\((\\d+)\\)(\\swithoutstimeszone\\b)?)?\n\n\t\t\t'
    },
    {
      match:
        '(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|check|constraint)\\b)',
      name: 'storage.modifier.hql'
    },
    {match: '\\b\\d+\\b', name: 'constant.numeric.hql'},
    {
      match:
        '(?i:\\b(select(\\s+distinct)?|insert\\s+(ignore\\s+)?into|update|MAPJOIN|ROLLUP|CUBE|cast|intersect|except|between|to_date|from_unixtime|unix_timestamp|year|hour|month|day|dayofmonth|minute|second|weekofyear|datediff|from_utc_timestamp|to_utc_timestamp|if(\\s+not)?\\s+exists|if|USE|explode|inline|json_tuple|parse_url_tuple|posexplode|add_days|add_months|append_array|array_freq_count|array_index|assert_equals|assert_less_than|assert_true|bloom|bloom_and|bloom_contains|bloom_not|bloom_or|booking_week|cast_array|cast_map|ceiling|collect|collect_freq_count|collect_max|collect_merge_max|combine|combine_hyperloglog|combine_previous_sketch|combine_sketch|combine_unique|compute_stats|conditional_emit|convert_to_sketch|current_database|date_range|date_to_start_quarter|date_to_start_week|distributed_bloom|distributed_map|div|elt|estimated_reach|event_parser|ewah_bitmap|ewah_bitmap_and|ewah_bitmap_empty|ewah_bitmap_or|experiments|field|first_index|flatten_array|from_camel_case|from_json|geturl|greatest|group_concat|group_count|grouped_rank|hash_md5|hbase_balanced_key|hbase_batch_get|hbase_batch_put|hbase_cached_get|hbase_get|hbase_put|hll_est_cardinality|hyperloglog|index|inet_aton|inet_ntoa|initcap|intersect_array|ip2country|ip2latlon|ip2timezone|ipcountry|isnotnull|isnull|join_array|json_map|json_split|label|last_day|last_index|lcase|least|length|map_filter_keys|map_index|map_key_values|map_mode|matchpath|md5|moving_avg|multiday_count|negative|next_day|noop|noopstreaming|noopwithmap|noopwithmapstreaming|not|now|numeric_range|nvl|percentile|percentile_approx|pi|pmod|positive|pow|power|quarter|ranked_long_diff|ranked_long_sum|row_sequence|running_count|running_sum|salted_bigint|salted_bigint_key|set_difference|set_similarity|sha1|sha2|sign|sin|sketch_hashes|sketch_set|std|stddev|stddev_pop|stddev_samp|sum_array|throw_error|to_camel_case|to_json|to_unix_timestamp|truncate_array|ucase|unhex|union_hyperloglog|union_map|union_max|union_sketch|union_vector_sum|vector_add|vector_cross_product|vector_dot_product|vector_magnitude|vector_scalar_mult|windowingtablefunction|write_to_graphite|write_to_tsdb|xpath_boolean|xpath_double|xpath_float|xpath_int|xpath_long|xpath_number|xpath_short|xpath_string|date_add|date_sub|stack|java_method|rename|reflect|hash|xpath|get_json_object|size|map_keys|map_values|array_contains|sort_array|delete|from|set|where|group\\sby|partition\\sby|cluster\\sby|clustered\\sby|distribute\\sby|or|like|and|union(\\s+all)?|having|order\\sby|limit|offset|(inner|cross)\\s+join|join|straight_join|(left|right)(\\s+outer)?\\s+join|natural(\\s+(left|right)(\\s+outer)?)?\\s+join)\\b)',
      name: 'keyword.other.DML.hql'
    },
    {match: '(?i:\\b(rename\\s+)?to\\b)', name: 'keyword.other.DML.hql'},
    {
      match: '(?i:\\b(on|((is\\s+)not\\s+)?null)\\b)',
      name: 'keyword.other.DDL.create.II.hql'
    },
    {match: '(?i:\\bvalues\\b)', name: 'keyword.other.DML.II.hql'},
    {
      match:
        '(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)',
      name: 'keyword.other.LUW.hql'
    },
    {
      match: '(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)',
      name: 'keyword.other.authorization.hql'
    },
    {
      match: '(?i:(\\bnot\\s+)?\\bin\\b)',
      name: 'keyword.other.data-integrity.hql'
    },
    {
      match:
        '(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)',
      name: 'keyword.other.object-comments.hql'
    },
    {match: '(?i)\\bAS\\b', name: 'keyword.other.alias.hql'},
    {match: '(?i)\\b(DESC|ASC)\\b', name: 'keyword.other.order.hql'},
    {
      match: '(?i)\\b(case|when|then|else|end)\\b',
      name: 'keyword.other.case.hql'
    },
    {match: '\\*', name: 'keyword.operator.star.hql'},
    {match: '[!<>]?=|<>|<|>', name: 'keyword.operator.comparison.hql'},
    {
      match:
        '(?i)\\b(COMMENT|STORED|LOAD|rlike|regexp|map|struct|named_struct|array|create_union|OVERWRITE|LOCATION|STREAMTABLE|ROW FORMAT|WINDOW|LEAD|LAG|FIRST_VALUE|LAST_VALUE|OVER|ROWS|UNBOUNDED|PRECEDING|FOLLOWING|RANK|ROW_NUMBER|DENSE_RANK|CUME_DIST|PERCENT_RANK|NTILE|COALESCE|CLUSTERED|PARTITIONED|BUCKETED)\\b',
      name: 'storage.type.II.hql'
    },
    {match: '-|\\+|/', name: 'keyword.operator.math.hql'},
    {match: '\\|\\|', name: 'keyword.operator.concatenator.hql'},
    {
      match:
        '(?i)\\b(CURRENT_(DATE|TIME(STAMP)?|USER)|(SESSION|SYSTEM)_USER)\\b',
      name: 'support.function.scalar.hql'
    },
    {
      match:
        '(?i)\\b(AVG|COUNT|MIN|MAX|SUM|DISTINCT|VARIANCE|var_pop|var_samp|stddev_pop|stddev_samp|covar_pop|covar_samp|corr|percentile|percentile_approx|histogram_numeric|collect_set|collect_list|ntile|round|floor|ceil|rand|exp|ln|log10|log2|log|pow|power|sqrt|bin|hex|unhex|conv|from_base|abs|pmod|sin|asin|cos|acos|tan|atan|degrees|radians|positive|negative|sign|e|pi)(?=\\s*\\()',
      name: 'entity.function.name.hql'
    },
    {
      match:
        '(?i)\\b(CONCATENATE|CONVERT|LOWER|SUBSTRING|TRANSLATE|TRIM|UPPER|ascii|base64|concat|context_ngrams|histogram_numeric|concat_ws|decode|encode|find_in_set|format_number|get_json_object|in_file|instr|lenght|locate|lower|lpad|ltrim|ngrams|parse_url|printf|regexp_extract|regexp_replace|repeat|reverse|rpad|rtrim|sentences|space|split|str_to_map|substr|translate|trim|unbase64|upper)\\b',
      name: 'support.function.string.hql'
    },
    {
      captures: {
        1: {name: 'constant.other.database-name.hql'},
        2: {name: 'constant.other.table-name.hql'}
      },
      match: '(\\w+?)\\.(\\w+)'
    },
    {include: '#strings'},
    {include: '#regexps'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=--)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.hql'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '--',
              beginCaptures: {0: {name: 'punctuation.definition.comment.hql'}},
              end: '\\n',
              name: 'comment.line.double-dash.hql'
            }
          ]
        }
      ]
    },
    regexps: {
      patterns: [
        {
          begin: '/(?=\\S.*/)',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: '/',
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.regexp.hql',
          patterns: [
            {include: '#string_interpolation'},
            {match: '\\\\/', name: 'constant.character.escape.slash.hql'}
          ]
        },
        {
          begin: '%r\\{',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.regexp.modr.hql',
          patterns: [{include: '#string_interpolation'}]
        }
      ]
    },
    string_escape: {match: '\\\\.', name: 'constant.character.escape.hql'},
    string_interpolation: {
      captures: {1: {name: 'punctuation.definition.string.end.hql'}},
      match: '(#\\{)([^\\}]*)(\\})',
      name: 'string.interpolated.hql'
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.hql'},
            3: {name: 'punctuation.definition.string.end.hql'}
          },
          match: "(')[^'\\\\]*(')",
          name: 'string.quoted.single.hql'
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.quoted.single.hql',
          patterns: [{include: '#string_escape'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.hql'},
            3: {name: 'punctuation.definition.string.end.hql'}
          },
          match: '(`)[^`\\\\]*(`)',
          name: 'string.quoted.other.backtick.hql'
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.quoted.other.backtick.hql',
          patterns: [{include: '#string_escape'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.hql'},
            3: {name: 'punctuation.definition.string.end.hql'}
          },
          match: '(")[^"#]*(")',
          name: 'string.quoted.double.hql'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.quoted.double.hql',
          patterns: [{include: '#string_interpolation'}]
        },
        {
          begin: '%\\{',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.hql'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.hql'}},
          name: 'string.other.quoted.brackets.hql',
          patterns: [{include: '#string_interpolation'}]
        }
      ]
    }
  },
  scopeName: 'source.hql'
}

export default grammar
