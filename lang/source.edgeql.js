// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/edgedb/edgedb-editor-plugin>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.edgeql', '.esdl'],
  names: ['edgeql', 'esdl'],
  patterns: [{include: '#all'}],
  repository: {
    all: {
      patterns: [
        {include: '#fnstatement'},
        {include: '#expressions'},
        {match: '(;)', name: 'punctuation.statement.delimiter.edgeql'}
      ]
    },
    'array-dimensions': {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.parenthesis.begin.edgeql'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.parenthesis.end.edgeql'}},
      patterns: [
        {match: '(\\d+)', name: 'constant.numeric.edgeql'},
        {match: '\\S+', name: 'invalid.illegal.type.edgeql'}
      ]
    },
    'builtin-indexes': {
      match:
        '(?x) \\b(?<!\\.|\\.<|\\.>) (\n  brin | btree | gin | gist |\n  hash | index | spgist\n)\\b\n',
      name: 'support.other.index.builtin.edgeql'
    },
    'builtin-modules': {
      match:
        '(?x) \\b(?<!::|\\.|\\.<|\\.>)(\n  cal | cfg | enc | ext |\n  fts | math | pg | schema |\n  std | sys\n)\\b\n',
      name: 'support.other.module.builtin.edgeql'
    },
    'builtin-types': {
      match:
        '(?x) \\b(?<!\\.|\\.<|\\.>) (\n  Base64Alphabet | BaseObject | ElasticLanguage | FreeObject |\n  JsonEmpty | Language | LuceneLanguage | Object |\n  PGLanguage | Weight | anycontiguous | anydiscrete |\n  anyenum | anyfloat | anyint | anynumeric |\n  anypoint | anyreal | anyscalar | anytype |\n  array | bigint | bool | bytes |\n  date_duration | datetime | decimal | document |\n  duration | enum | float32 | float64 |\n  int16 | int32 | int64 | json |\n  local_date | local_datetime | local_time | multirange |\n  range | relative_duration | sequence | str |\n  tuple | uuid\n)\\b\n',
      name: 'support.type.builtin.edgeql'
    },
    builtins: {
      patterns: [
        {
          match:
            '(?x) \\b(?<!\\.|\\.<|\\.>) (\n  abs | adjacent | all |\n  any | array_agg | array_fill |\n  array_get | array_join | array_replace |\n  array_unpack | assert | assert_distinct |\n  assert_exists | assert_single | bit_and |\n  bit_lshift | bit_not | bit_or |\n  bit_rshift | bit_xor | bounded_above |\n  bounded_below | bytes_get_bit | ceil |\n  contains | count | date_get |\n  datetime_current | datetime_get | datetime_of_statement |\n  datetime_of_transaction | datetime_truncate | duration_get |\n  duration_normalize_days | duration_normalize_hours | duration_to_seconds |\n  duration_truncate | enumerate | find |\n  floor | get_current_database | get_instance_name |\n  get_transaction_isolation | get_version | get_version_as_str |\n  json_array_unpack | json_get | json_object_pack |\n  json_object_unpack | json_set | json_typeof |\n  len | lg | ln |\n  log | max | mean |\n  min | multirange | multirange_unpack |\n  overlaps | random | range |\n  range_get_lower | range_get_upper | range_is_empty |\n  range_is_inclusive_lower | range_is_inclusive_upper | range_unpack |\n  re_match | re_match_all | re_replace |\n  re_test | round | search |\n  sequence_next | sequence_reset | sqrt |\n  stddev | stddev_pop | str_lower |\n  str_lpad | str_ltrim | str_pad_end |\n  str_pad_start | str_repeat | str_replace |\n  str_reverse | str_rpad | str_rtrim |\n  str_split | str_title | str_trim |\n  str_trim_end | str_trim_start | str_upper |\n  strictly_above | strictly_below | sum |\n  time_get | to_bigint | to_bytes |\n  to_date_duration | to_datetime | to_decimal |\n  to_duration | to_float32 | to_float64 |\n  to_int16 | to_int32 | to_int64 |\n  to_json | to_local_date | to_local_datetime |\n  to_local_time | to_relative_duration | to_str |\n  uuid_generate_v1mc | uuid_generate_v4 | var |\n  var_pop | with_options\n)(?=\\s*\\()\\b\n',
          name: 'support.function.builtin.edgeql'
        },
        {
          match:
            '(?x) \\b(?<!\\.|\\.<|\\.>) (\n  constraint | exclusive | expression |\n  len_value | max_ex_value | max_len_value |\n  max_value | min_ex_value | min_len_value |\n  min_value | one_of | regexp\n)\\b\n',
          name: 'support.function.constraint.builtin.edgeql'
        },
        {include: '#builtin-modules'},
        {
          match:
            '(?x) \\b(\n  __edgedbsys__ | __edgedbtpl__ | __new__ |\n  __old__ | __source__ | __specified__ |\n  __std__ | __subject__ | __type__\n)\\b\n',
          name: 'support.other.link.builtin.edgeql'
        }
      ]
    },
    bytes: {
      patterns: [
        {
          begin: "(b)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.edgeql'},
            2: {name: 'punctuation.definition.string.begin.edgeql'}
          },
          end: '(\\2)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.edgeql'}},
          name: 'string.quoted.bytes.edgeql',
          patterns: [
            {include: '#bytes-escapes'},
            {match: '([\\n -&(-\\[\\]-~])+'},
            {
              match: '(\\\\x.{1,2})|(\\\\.)|(.)',
              name: 'invalid.illegal.bytes.edgeql'
            }
          ]
        },
        {
          begin: '(b)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.edgeql'},
            2: {name: 'punctuation.definition.string.begin.edgeql'}
          },
          end: '(\\2)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.edgeql'}},
          name: 'string.quoted.bytes.edgeql',
          patterns: [
            {include: '#bytes-escapes'},
            {match: '([\\n -!#-\\[\\]-~])+'},
            {
              match: '(\\\\x.{1,2})|(\\\\.)|(.)',
              name: 'invalid.illegal.bytes.edgeql'
            }
          ]
        }
      ]
    },
    'bytes-escapes': {
      match:
        '(?x)\n  (\n    \\\\[\\\\\'"bfnrt] |\n    \\\\x[0-9a-fA-F]{2}\n  )\n',
      name: 'constant.character.escape.edgeql'
    },
    casts: {
      begin:
        '(?xi)\n  (?:\n    (?<= ^ | [@~+\\-*/%^<>=?,:(\\[{])\n    |\n    (?<=\n      AND | OR | NOT | LIKE | ILIKE | IS | IN | IF | ELSE |\n      UNION | ALL | EXISTS |\n\n      SELECT | GROUP | UPDATE | BY | THEN | LIMIT |\n      # there are some ligature-related issues with "fi" and "ff"\n      F[Ii]LTER | OF[Ff]SET\n    )\n  ) \\s* (\\<)\n',
      beginCaptures: {1: {name: 'keyword.operator.cast.begin.edgeql'}},
      contentName: 'meta.typecast.edgeql',
      end: '(\\>)',
      endCaptures: {1: {name: 'keyword.operator.cast.end.edgeql'}},
      patterns: [{include: '#types'}, {include: '#types-common'}]
    },
    code: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.declaration.edgeql'},
            3: {name: 'keyword.declaration.edgeql'}
          },
          match: '(?xi)\n  \\b(FROM) \\s+ (EDGEQL | SQL) \\s+ (EXPRESSION)\n'
        },
        {
          begin: '(?xi)\n  \\b(FROM) \\s+\n  (SQL) \\s+\n  (\\$\\w?\\$)\n',
          beginCaptures: {
            1: {name: 'keyword.declaration.edgeql'},
            3: {name: 'string.quoted.edgeql'}
          },
          end: '(\\3)',
          endCaptures: {1: {name: 'string.quoted.edgeql'}},
          patterns: [{include: 'source.sql'}]
        },
        {
          begin: '(?xi)\n  \\b(FROM) \\s+\n  (EDGEQL) \\s+\n  (\\$\\w?\\$)\n',
          beginCaptures: {
            1: {name: 'keyword.declaration.edgeql'},
            3: {name: 'string.quoted.edgeql'}
          },
          end: '(\\3)',
          endCaptures: {1: {name: 'string.quoted.edgeql'}},
          patterns: [{include: 'source.edgeql'}]
        }
      ]
    },
    commandblock: {
      begin: '(?=SET|CREATE|ALTER|DROP|RENAME|FROM)',
      end: '(?=\\})',
      patterns: [{include: '#all'}]
    },
    comments: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.comment.edgeql'},
            2: {name: 'comment.line.note.notation.edgeql'},
            3: {name: 'comment.line.note.edgeql'}
          },
          match: '(#)\\s*((BUG|FIXME|TODO|XXX)).*$\\n?',
          name: 'comment.line.number-sign.edgeql'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.edgeql'}},
          match: '(#).*$\\n?',
          name: 'comment.line.number-sign.edgeql'
        }
      ]
    },
    curlybraces: {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'punctuation.parenthesis.begin.edgeql'}},
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.parenthesis.end.edgeql'}},
      patterns: [
        {include: '#comments'},
        {include: '#commandblock'},
        {include: '#shape'}
      ]
    },
    definition: {
      captures: {
        1: {name: 'variable.parameter.definition.edgeql'},
        2: {name: 'invalid.illegal.definition.edgeql'}
      },
      match:
        '(?x)\n  (?:\n    ([[:alpha:]_][[:alnum:]_]*)\n    |\n    ([\\.\\d]\\S*?)\n  ) (?=\\s*:=)\n'
    },
    expressions: {
      patterns: [
        {include: '#comments'},
        {include: '#code'},
        {include: '#keywords'},
        {include: '#fncalls'},
        {include: '#operators'},
        {include: '#builtins'},
        {include: '#types'},
        {include: '#quoted-name'},
        {include: '#values'},
        {include: '#link-properties'},
        {include: '#variables'},
        {include: '#parentheses'},
        {include: '#squarebraces'},
        {include: '#curlybraces'},
        {include: '#casts'}
      ]
    },
    fncallargs: {
      patterns: [
        {include: '#definition'},
        {include: '#expressions'},
        {match: '(,)', name: 'punctuation.separator.arguments.edgeql'},
        {match: '(;)', name: 'invalid.illegal.delimiter.edgeql'}
      ]
    },
    fncalls: {
      patterns: [
        {
          begin:
            '(?x)\n  \\b(?<!\\.|\\.<|\\.>)\n  # function name\n  (?:\n    (\n      # functions\n      abs | adjacent | all |\n      any | array_agg | array_fill |\n      array_get | array_join | array_replace |\n      array_unpack | assert | assert_distinct |\n      assert_exists | assert_single | bit_and |\n      bit_lshift | bit_not | bit_or |\n      bit_rshift | bit_xor | bounded_above |\n      bounded_below | bytes_get_bit | ceil |\n      contains | count | date_get |\n      datetime_current | datetime_get | datetime_of_statement |\n      datetime_of_transaction | datetime_truncate | duration_get |\n      duration_normalize_days | duration_normalize_hours | duration_to_seconds |\n      duration_truncate | enumerate | find |\n      floor | get_current_database | get_instance_name |\n      get_transaction_isolation | get_version | get_version_as_str |\n      json_array_unpack | json_get | json_object_pack |\n      json_object_unpack | json_set | json_typeof |\n      len | lg | ln |\n      log | max | mean |\n      min | multirange | multirange_unpack |\n      overlaps | random | range |\n      range_get_lower | range_get_upper | range_is_empty |\n      range_is_inclusive_lower | range_is_inclusive_upper | range_unpack |\n      re_match | re_match_all | re_replace |\n      re_test | round | search |\n      sequence_next | sequence_reset | sqrt |\n      stddev | stddev_pop | str_lower |\n      str_lpad | str_ltrim | str_pad_end |\n      str_pad_start | str_repeat | str_replace |\n      str_reverse | str_rpad | str_rtrim |\n      str_split | str_title | str_trim |\n      str_trim_end | str_trim_start | str_upper |\n      strictly_above | strictly_below | sum |\n      time_get | to_bigint | to_bytes |\n      to_date_duration | to_datetime | to_decimal |\n      to_duration | to_float32 | to_float64 |\n      to_int16 | to_int32 | to_int64 |\n      to_json | to_local_date | to_local_datetime |\n      to_local_time | to_relative_duration | to_str |\n      uuid_generate_v1mc | uuid_generate_v4 | var |\n      var_pop | with_options\n    |\n      # constraints\n      constraint | exclusive | expression |\n      len_value | max_ex_value | max_len_value |\n      max_value | min_ex_value | min_len_value |\n      min_value | one_of | regexp\n    )\n    |\n    ([[:alpha:]_][[:alnum:]_]*)\n    |\n    (`.*?`)\n  ) \\s*(\\()\n',
          beginCaptures: {
            1: {name: 'support.function.builtin.edgeql'},
            2: {name: 'entity.name.function.edgeql'},
            3: {name: 'string.interpolated.edgeql'},
            4: {name: 'punctuation.definition.arguments.begin.edgeql'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.arguments.end.edgeql'}
          },
          name: 'meta.function-call.edgeql',
          patterns: [{include: '#fncallargs'}]
        },
        {
          begin:
            '(?x)\n  \\b(?<!\\.|\\.<|\\.>)\n  # module\n  (?:\n    (\n      cal | cfg | enc |\n      ext | fts | math |\n      pg | schema | std |\n      sys\n    )\n    |\n    (?# masking built-ins in odd ways)\n    (\n      #functions\n      abs | adjacent | all |\n      any | array_agg | array_fill |\n      array_get | array_join | array_replace |\n      array_unpack | assert | assert_distinct |\n      assert_exists | assert_single | bit_and |\n      bit_lshift | bit_not | bit_or |\n      bit_rshift | bit_xor | bounded_above |\n      bounded_below | bytes_get_bit | ceil |\n      contains | count | date_get |\n      datetime_current | datetime_get | datetime_of_statement |\n      datetime_of_transaction | datetime_truncate | duration_get |\n      duration_normalize_days | duration_normalize_hours | duration_to_seconds |\n      duration_truncate | enumerate | find |\n      floor | get_current_database | get_instance_name |\n      get_transaction_isolation | get_version | get_version_as_str |\n      json_array_unpack | json_get | json_object_pack |\n      json_object_unpack | json_set | json_typeof |\n      len | lg | ln |\n      log | max | mean |\n      min | multirange | multirange_unpack |\n      overlaps | random | range |\n      range_get_lower | range_get_upper | range_is_empty |\n      range_is_inclusive_lower | range_is_inclusive_upper | range_unpack |\n      re_match | re_match_all | re_replace |\n      re_test | round | search |\n      sequence_next | sequence_reset | sqrt |\n      stddev | stddev_pop | str_lower |\n      str_lpad | str_ltrim | str_pad_end |\n      str_pad_start | str_repeat | str_replace |\n      str_reverse | str_rpad | str_rtrim |\n      str_split | str_title | str_trim |\n      str_trim_end | str_trim_start | str_upper |\n      strictly_above | strictly_below | sum |\n      time_get | to_bigint | to_bytes |\n      to_date_duration | to_datetime | to_decimal |\n      to_duration | to_float32 | to_float64 |\n      to_int16 | to_int32 | to_int64 |\n      to_json | to_local_date | to_local_datetime |\n      to_local_time | to_relative_duration | to_str |\n      uuid_generate_v1mc | uuid_generate_v4 | var |\n      var_pop | with_options\n      |\n      #constraints\n      constraint | exclusive | expression |\n      len_value | max_ex_value | max_len_value |\n      max_value | min_ex_value | min_len_value |\n      min_value | one_of | regexp\n    )\n    |\n    ([[:alpha:]_][[:alnum:]_]*)\n    |\n    (`.*?`)\n  )\n\n  \\s*(::)\\s*\n\n  # function name\n  (?:\n    (\n      #functions\n      abs | adjacent | all |\n      any | array_agg | array_fill |\n      array_get | array_join | array_replace |\n      array_unpack | assert | assert_distinct |\n      assert_exists | assert_single | bit_and |\n      bit_lshift | bit_not | bit_or |\n      bit_rshift | bit_xor | bounded_above |\n      bounded_below | bytes_get_bit | ceil |\n      contains | count | date_get |\n      datetime_current | datetime_get | datetime_of_statement |\n      datetime_of_transaction | datetime_truncate | duration_get |\n      duration_normalize_days | duration_normalize_hours | duration_to_seconds |\n      duration_truncate | enumerate | find |\n      floor | get_current_database | get_instance_name |\n      get_transaction_isolation | get_version | get_version_as_str |\n      json_array_unpack | json_get | json_object_pack |\n      json_object_unpack | json_set | json_typeof |\n      len | lg | ln |\n      log | max | mean |\n      min | multirange | multirange_unpack |\n      overlaps | random | range |\n      range_get_lower | range_get_upper | range_is_empty |\n      range_is_inclusive_lower | range_is_inclusive_upper | range_unpack |\n      re_match | re_match_all | re_replace |\n      re_test | round | search |\n      sequence_next | sequence_reset | sqrt |\n      stddev | stddev_pop | str_lower |\n      str_lpad | str_ltrim | str_pad_end |\n      str_pad_start | str_repeat | str_replace |\n      str_reverse | str_rpad | str_rtrim |\n      str_split | str_title | str_trim |\n      str_trim_end | str_trim_start | str_upper |\n      strictly_above | strictly_below | sum |\n      time_get | to_bigint | to_bytes |\n      to_date_duration | to_datetime | to_decimal |\n      to_duration | to_float32 | to_float64 |\n      to_int16 | to_int32 | to_int64 |\n      to_json | to_local_date | to_local_datetime |\n      to_local_time | to_relative_duration | to_str |\n      uuid_generate_v1mc | uuid_generate_v4 | var |\n      var_pop | with_options\n      |\n      #constraints\n      constraint | exclusive | expression |\n      len_value | max_ex_value | max_len_value |\n      max_value | min_ex_value | min_len_value |\n      min_value | one_of | regexp\n    )\n    |\n    ([[:alpha:]_][[:alnum:]_]*)\n    |\n    (`.*?`)\n  ) \\s*(\\()\n',
          beginCaptures: {
            1: {name: 'support.other.module.builtin.edgeql'},
            2: {name: 'support.function.builtin.edgeql'},
            3: {name: 'entity.name.function.edgeql'},
            4: {name: 'string.interpolated.edgeql'},
            5: {name: 'keyword.operator.namespace.edgeql'},
            6: {name: 'support.function.builtin.edgeql'},
            7: {name: 'entity.name.function.edgeql'},
            8: {name: 'string.interpolated.edgeql'},
            9: {name: 'punctuation.definition.arguments.begin.edgeql'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.arguments.end.edgeql'}
          },
          name: 'meta.function-call.edgeql',
          patterns: [{include: '#fncallargs'}]
        }
      ]
    },
    fnstatement: {
      begin: '(?ix) \\b(?<![:\\.])(FUNCTION|AGGREGATE|ABSTRACT CONSTRAINT)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.edgeql'}},
      end: '(?=[^\\s\\w:]|\\bEXTENDING\\b|$)',
      patterns: [
        {include: '#builtins'},
        {include: '#identifier'},
        {match: '(::)', name: 'keyword.operator.namespace.edgeql'}
      ]
    },
    identifier: {match: '([[:alpha:]_][[:alnum:]_]*)'},
    keywords: {
      patterns: [
        {
          match: '(?i)\\b(TRUE)\\b',
          name: 'constant.language.boolean.true.edgeql'
        },
        {
          match: '(?i)\\b(FALSE)\\b',
          name: 'constant.language.boolean.false.edgeql'
        },
        {match: '(?i)\\b(EMPTY)\\b', name: 'constant.language.empty.edgeql'},
        {
          match: '(?i)\\b(?<!::|\\.|\\.<|\\.>)(CONSTRAINT)\\b(?!=\\s+\\()',
          name: 'keyword.declaration.edgeql'
        },
        {
          match:
            '(?ix) \\b(?<!::|\\.|\\.<|\\.>)(\n  (?# special case)\n  (named \\s+ only)\n  |\n  (as \\s+ text)\n  |\n  (all (?!\\s*\\())\n  |\n\n  (?# unreserved)\n  abort | abstract | access | after | alias |\n  allow | annotation | applied | as | asc |\n  assignment | before | cardinality | cast | committed |\n  config | conflict | cube | current | database |\n  ddl | declare | default | deferrable | deferred |\n  delegated | deny | desc | each | empty |\n  extension | final | first | from | function |\n  future | implicit | index | infix | inheritable |\n  instance | into | isolation | last | link |\n  migration | multi | object | of | only |\n  onto | operator | optionality | order | orphan |\n  overloaded | owned | package | policy | populate |\n  postfix | prefix | property | proposed | pseudo |\n  read | reject | release | rename | required |\n  reset | restrict | rewrite | role | roles |\n  rollup | savepoint | scalar | schema | sdl |\n  serializable | session | source | superuser | system |\n  target | ternary | then | to | transaction |\n  trigger | type | unless | using | verbose |\n  version | view | write\n  |\n  (?# reserved)\n  administer | alter | analyze | and | anyarray |\n  anyobject | anytuple | begin | by | case |\n  check | commit | configure | create | deallocate |\n  delete | describe | detached | discard | distinct |\n  do | drop | else | end | except |\n  exists | explain | extending | fetch | filter |\n  for | get | global | grant | group |\n  if | ilike | import | in | insert |\n  intersect | introspect | is | like | limit |\n  listen | load | lock | match | module |\n  move | never | not | notify | offset |\n  on | optional | or | over | partition |\n  prepare | raise | refresh | revoke | rollback |\n  select | set | single | start | typeof |\n  union | update | variadic | when | window |\n  with\n)\\b\n',
          name: 'keyword.declaration.edgeql'
        }
      ]
    },
    'link-properties': {
      begin: '(\\@)',
      end: '(?<=[[:alnum:]_`])',
      name: 'support.other.linkproperty.edgeql',
      patterns: [{include: '#identifier'}, {include: '#quoted-name'}]
    },
    number: {
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.dec.edgeql'},
            2: {name: 'invalid.illegal.dec.edgeql'},
            4: {name: 'invalid.illegal.dec.edgeql'},
            5: {name: 'storage.type.number.edgeql'},
            6: {name: 'invalid.illegal.dec.edgeql'},
            7: {name: 'invalid.illegal.dec.edgeql'}
          },
          match:
            '(?x)\n  (?:\n    #decimal part\n    \\.(_*)(?:[0-9](?:[0-9_]*[0-9])?)\n    |\n    # integer part\n    \\b(?: [1-9](?: [0-9_]*[0-9] )? | 0 )\n      (?:\\.(_*)[0-9](?:[0-9_]*[0-9])?)\n  )\n  ((_*)([eE][\\+\\-]?)(_*)[0-9](?:[0-9_]*[0-9])?)?\n\n  (_*)\n  \\b\n',
          name: 'constant.numeric.float.edgeql'
        },
        {
          captures: {
            2: {name: 'invalid.illegal.dec.edgeql'},
            3: {name: 'storage.type.number.edgeql'},
            4: {name: 'invalid.illegal.dec.edgeql'},
            5: {name: 'invalid.illegal.dec.edgeql'}
          },
          match:
            '(?x)\n  (?:\n    # integer part\n    \\b(?:[1-9](?:[0-9_]*[0-9])?|0)\n  )\n  ((_*)([eE][\\+\\-]?)(_*)[0-9](?:[0-9_]*[0-9])?)\n\n  (_*)\n  \\b\n',
          name: 'constant.numeric.float.edgeql'
        },
        {
          captures: {
            1: {name: 'invalid.illegal.dec.edgeql'},
            2: {name: 'invalid.illegal.dec.edgeql'},
            4: {name: 'invalid.illegal.dec.edgeql'},
            5: {name: 'storage.type.number.edgeql'},
            6: {name: 'invalid.illegal.dec.edgeql'},
            7: {name: 'invalid.illegal.dec.edgeql'},
            8: {name: 'storage.type.number.edgeql'}
          },
          match:
            '(?x)\n  (?:\n    #decimal part\n    \\.(_*)(?:[0-9](?:[0-9_]*[0-9])?)\n    |\n    # integer part\n    \\b(?:[1-9](?:[0-9_]*[0-9])?|0)\n      (?:\\.(_*)[0-9](?:[0-9_]*[0-9])?)?\n  )\n  ((_*)([eE][\\+\\-]?)(_*)[0-9](?:[0-9_]*[0-9])?)?\n\n  (_*)\n  (n)\n',
          name: 'constant.numeric.decimal.edgeql'
        },
        {
          captures: {
            1: {name: 'invalid.illegal.dec.edgeql'},
            2: {name: 'invalid.illegal.dec.edgeql'}
          },
          match:
            '(?x)\n  (?:\n    # integer part\n    \\b(?:[1-9](?:[0-9_]*[0-9])?|0)\n  )\n  (_*)\n  \\b\n',
          name: 'constant.numeric.integer.edgeql'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '(\\.[<>])', name: 'keyword.operator.navigation.edgeql'},
        {match: '(::)', name: 'keyword.operator.namespace.edgeql'},
        {match: '->', name: 'keyword.declaration.edgeql'},
        {match: '(:(?!=))', name: 'punctuation.declaration.delimiter.edgeql'},
        {
          match:
            '(?x)\n  \\?\\!\\= | \\?\\? | \\?\\= | \\>\\= | \\<\\= | \\:\\= | \\/\\/ | \\+\\+ |\n  \\!\\= | \\^ | \\> | \\= | \\< | \\/ | \\- | \\+ |\n  \\* | \\%\n',
          name: 'keyword.operator.edgeql'
        }
      ]
    },
    parencommon: {
      patterns: [
        {match: '(,)', name: 'punctuation.separator.element.edgeql'},
        {match: '(;)', name: 'invalid.illegal.delimiter.edgeql'}
      ]
    },
    parentheses: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.parenthesis.begin.edgeql'}},
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.parenthesis.end.edgeql'}},
      patterns: [{include: '#expressions'}, {include: '#parencommon'}]
    },
    'quoted-name': {match: '(`.*?`)', name: 'string.interpolated.edgeql'},
    shape: {
      begin: '(?=\\S)',
      end: '(?=\\})',
      patterns: [
        {match: '(;)', name: 'punctuation.statement.delimiter.edgeql'},
        {include: '#expressions'},
        {include: '#parencommon'}
      ]
    },
    squarebraces: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.parenthesis.begin.edgeql'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.parenthesis.end.edgeql'}},
      patterns: [
        {match: '(^|\\b|\\s)(->)($|\\b|\\s)', name: 'keyword.operator.edgeql'},
        {include: '#expressions'},
        {include: '#parencommon'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '(r)([\'"])',
          beginCaptures: {
            1: {name: 'storage.type.string.edgeql'},
            2: {name: 'punctuation.definition.string.begin.edgeql'}
          },
          end: '(\\2)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.edgeql'}},
          name: 'string.quoted.raw.edgeql'
        },
        {
          begin: '([\'"])',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.edgeql'}
          },
          end: '(\\1)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.edgeql'}},
          name: 'string.quoted.edgeql',
          patterns: [
            {include: '#string-escapes'},
            {include: '#string-invalid-escapes'}
          ]
        },
        {
          begin: '(\\$([[:alpha:]_][[:alnum:]]*)*\\$)',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.edgeql'}
          },
          end: '(\\1)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.edgeql'}},
          name: 'string.dollar.edgeql'
        }
      ]
    },
    'string-escapes': {
      match:
        '(?x)\n  (\n    \\\\(?=\\s*\\n) |\n    \\\\[\\\\\'"bfnrt] |\n    \\\\x[0-7][0-9a-fA-F] |\n    \\\\u[0-9a-fA-F]{4} |\n    \\\\U[0-9a-fA-F]{8}\n  )\n',
      name: 'constant.character.escape.edgeql'
    },
    'string-invalid-escapes': {
      match: '(\\\\.)',
      name: 'invalid.illegal.escapes.edgeql'
    },
    types: {
      patterns: [
        {
          begin: '\\b(?<!::|\\.)(tuple)\\s*(<)',
          beginCaptures: {
            1: {name: 'storage.type.edgeql'},
            2: {name: 'storage.type.placeholder.begin.edgeql'}
          },
          end: '(>)',
          endCaptures: {1: {name: 'storage.type.placeholder.end.edgeql'}},
          patterns: [
            {include: '#types'},
            {match: '(,)', name: 'punctuation.separator.type.edgeql'},
            {match: '(:)'},
            {include: '#types-common'}
          ]
        },
        {
          begin: '\\b(?<!::|\\.)(array)\\s*(<)',
          beginCaptures: {
            1: {name: 'storage.type.edgeql'},
            2: {name: 'storage.type.placeholder.begin.edgeql'}
          },
          end: '(>)',
          endCaptures: {1: {name: 'storage.type.placeholder.end.edgeql'}},
          patterns: [
            {match: 'array', name: 'invalid.illegal.type.edgeql'},
            {include: '#types'},
            {include: '#array-dimensions'},
            {include: '#types-common'}
          ]
        },
        {
          match: '(?x) \\b(?<!::|\\.)(\n  array | tuple\n)\\b\n',
          name: 'storage.type.edgeql'
        },
        {include: '#builtin-modules'},
        {include: '#builtin-types'},
        {include: '#builtin-indexes'}
      ]
    },
    'types-common': {
      patterns: [
        {include: '#identifier'},
        {match: '(::)', name: 'keyword.operator.namespace.edgeql'}
      ]
    },
    values: {
      patterns: [
        {include: '#number'},
        {include: '#bytes'},
        {include: '#string'}
      ]
    },
    variables: {
      begin: '(\\$)(?=[[:alnum:]_]|`)',
      end: '(?<=[[:alnum:]_`])',
      name: 'constant.language.variable.edgeql',
      patterns: [
        {include: '#identifier'},
        {include: '#quoted-name'},
        {match: '(\\d)+'}
      ]
    }
  },
  scopeName: 'source.edgeql'
}

export default grammar
