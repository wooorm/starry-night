// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pig'],
  names: ['piglatin'],
  patterns: [
    {match: '--.*$', name: 'comment.line.double-dash.pig_latin'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.pig_latin'},
    {
      match: '(?i)\\b(null|true|false|stdin|stdout|stderr)\\b',
      name: 'constant.language.pig_latin'
    },
    {
      match: '(?i)\\b[\\d]+(\\.[\\d]+)?(e[\\d]+)?[LF]?\\b',
      name: 'constant.numeric.pig_latin'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.pig_latin',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pig_latin'}]
    },
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.pig_latin',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pig_latin'}]
    },
    {
      begin: '`',
      end: '`',
      name: 'string.quoted.other.pig_latin',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pig_latin'}]
    },
    {match: '(\\+|-|\\*|/|%)', name: 'keyword.operator.arithmetic.pig_latin'},
    {match: '(?:\\?|:)', name: 'keyword.operator.bincond.pig_latin'},
    {
      match: '(==|!=|<=|>=|<|>|\\b(?i:matches)\\b)',
      name: 'keyword.operator.comparison.pig_latin'
    },
    {
      match: '(?i)\\b(is\\s+null|is\\s+not\\s+null)\\b',
      name: 'keyword.operator.null.pig_latin'
    },
    {
      match: '(?i)\\b(and|or|not)\\b',
      name: 'keyword.operator.boolean.pig_latin'
    },
    {match: '\\b::\\b', name: 'keyword.operator.relation.pig_latin'},
    {match: '\\b(\\.|#)\\b', name: 'keyword.operator.dereference.pig_latin'},
    {
      match: '(?i)\\b(CASE|WHEN|THEN|ELSE|END)\\b',
      name: 'keyword.control.conditional.pig_latin'
    },
    {
      match:
        '(?i)\\b(ASSERT|COGROUP|CROSS|CUBE|distinct|filter|foreach|generate|group|join|limit|load|order|sample|split|store|stream|union)\\b',
      name: 'keyword.control.relational.pig_latin'
    },
    {
      match: '(?i)\\b(describe|dump|explain|illustrate)\\b',
      name: 'keyword.control.diagnostic.pig_latin'
    },
    {
      match: '(?i)\\b(define|import|register)\\b',
      name: 'keyword.control.macro.pig_latin'
    },
    {
      match:
        '(?i)\\b(any|all|asc|arrange|as|asc|by|desc|full|if|inner|into|left|outer|parallel|returns|right|through|using)\\b',
      name: 'keyword.control.clause.pig_latin'
    },
    {match: '(?i)\\b(FLATTEN)\\b', name: 'support.function.operator.pig_latin'},
    {
      match: '(?i)\\b(CUBE|ROLLUP)\\b',
      name: 'support.function.operation.pig_latin'
    },
    {
      match:
        '\\b(AVG|CONCAT|COUNT|COUNT_STAR|DIFF|IsEmpty|MAX|MIN|PluckTuple|SIZE|SUBTRACT|SUM|Terms|TOKENIZE|Usage)\\b',
      name: 'support.function.eval.pig_latin'
    },
    {
      match:
        '\\b(ABS|ACOS|ASIN|ATAN|CBRT|CEIL|COS|COSH|EXP|FLOOR|LOG|LOG10|RANDOM|ROUND|SIN|SINH|SORT|TAN|TANH)\\b',
      name: 'support.function.math.pig_latin'
    },
    {
      match:
        '\\b(ENDSWITH|EqualsIgnoreCase|INDEXOF|LAST_INDEX_OF|LCFIRST|LOWER|LTRIM|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|RTRIM|STARTSWITH|STRSPLIT|SUBSTRING|TRIM|UCFIRST|UPPER)\\b',
      name: 'support.function.string.pig_latin'
    },
    {
      match:
        '\\b(AddDuration|CurrentTime|DaysBetween|GetDay|GetHour|GetMilliSecond|GetMinute|GetMonth|GetSecond|GetWeek|GetWeekYear|GetYear|HoursBetween|MilliSecondsBetween|MinutesBetween|MonthsBetween|SecondsBetween|SubtractDuration|ToDate|ToMilliSeconds|ToString|ToUnixTime|WeeksBetween|YearsBetween)\\b',
      name: 'support.function.datetime.pig_latin'
    },
    {
      match: '(?i)\\b(TOTUPLE|TOBAG|TOMAP|TOP)\\b',
      name: 'support.function.tuple.pig_latin'
    },
    {
      match: '(?i)\\b(input|output|ship|cache)\\b',
      name: 'support.function.macro.pig_latin'
    },
    {
      match:
        '(?i)\\b(AvroStorage|BinStorage|BinaryStorage|HBaseStorage|JsonLoader|JsonStorage|PigDump|PigStorage|PigStreaming|TextLoader|TrevniStorage)\\b',
      name: 'support.function.storage.pig_latin'
    },
    {match: '(?i)\\b(fs|sh)\\b', name: 'keyword.other.command.shell.pig_latin'},
    {
      match:
        '(?i)\\b(cat|cd|copyFromLocal|copyToLocal|cp|ls|mkdir|mv|pwd|rm|rmf)\\b',
      name: 'keyword.other.command.shell.file.pig_latin'
    },
    {
      match: '(?i)\\b(clear|exec|help|history|kill|quit|run|set)\\b',
      name: 'keyword.other.command.shell.utility.pig_latin'
    },
    {
      match:
        '(?i)\\b(int|long|float|double|chararray|bytearray|boolean|datetime|biginteger|bigdecimal)\\b',
      name: 'storage.type.simple.pig_latin'
    },
    {
      match: '(?i)\\b(tuple|bag|map)\\b',
      name: 'storage.type.complex.pig_latin'
    },
    {match: '\\$[0-9_]+', name: 'variable.other.positional.pig_latin'},
    {match: '\\b(?i)[a-z][a-z0-9_]*\\b', name: 'variable.other.alias.pig_latin'}
  ],
  scopeName: 'source.pig_latin'
}

export default grammar
