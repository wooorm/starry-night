// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/alienriver49/genero.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.4gl'],
  names: ['genero'],
  patterns: [
    {include: '#CharacterOperators'},
    {include: '#Comments'},
    {include: '#ComparisonOperators'},
    {include: '#DateOperators'},
    {include: '#EscapeCharacters'},
    {include: '#FlowControl'},
    {include: '#Functions'},
    {include: '#GeneroControlBlocks'},
    {include: '#KeywordsControl'},
    {include: '#KeywordsOther'},
    {include: '#KeywordsSupport'},
    {include: '#KeywordsOtherUnsorted'},
    {include: '#KeywordsString'},
    {include: '#KeywordsSql'},
    {include: '#LogicalOperators'},
    {include: '#MathOperators'},
    {include: '#Numbers'},
    {include: '#Parens'},
    {include: '#StringDoubleQuote'},
    {include: '#StringSingleQuote'},
    {include: '#Support'},
    {include: '#SupportConstant'},
    {include: '#Types'},
    {include: '#TypeModifiers'}
  ],
  repository: {
    CharacterOperators: {
      match: '\\b(?i)(USING|CLIPPED|COLUMN|ASCII|LSTR|ORD|SFMT|SPACES)\\b',
      name: 'keyword.operator.char.4gl'
    },
    Comments: {
      patterns: [
        {match: '#\\+.*$', name: 'comment.block.document.4gl'},
        {match: '#.*', name: 'comment.line.number-sign.4gl'},
        {match: '--.*', name: 'comment.line.double-dash.4gl'},
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'comment.block.4gl'}},
          end: '\\}',
          endCaptures: {0: {name: 'comment.block.4gl'}},
          name: 'comment.block.4gl'
        }
      ]
    },
    ComparisonOperators: {
      patterns: [
        {match: '(?i)(\\=|\\<|\\>|\\!)', name: 'keyword.operator.4gl'},
        {match: '(?i)(LIKE|MATCHES|IIF|NVL)', name: 'keyword.operator.4gl'}
      ]
    },
    DateOperators: {
      match:
        '\\b(?i)(DATE|UNITS|CURRENT|TODAY|DAY|YEAR|TIME|EXTEND|WEEKDAY|MONTH|MDY)\\b',
      name: 'support.type.4gl'
    },
    DialogOperators: {
      match:
        '\\b(?i)(FIELD_TOUCHED|GET_FLDBUF|INFIELD|ARG_VAL|ARR_COUNT|ARR_CURR|CURSOR_NAME|DOWNSHIFT|ERR_GET|ERR_PRINT|ERR_QUIT|ERRORLOG|FGL_DRAWBOX|FGL_DYNARR_EXTENTSIZE|FGL_GETENV|FGL_GETKEY|FGL_ISDYNARR_ALLOCATED|FGL_KEYVAL|FGL_LASTKEY|FGL_SCR_SIZE|FGL_SETCURRLINE|LENGTH|NUM_ARGS|ORD|SRC_LINE|SET_COUNT|SHOWHELP|STARTLOG|UPSHIFT|MDY|LOAD|UNLOAD)\\b',
      name: 'support.function.4gl'
    },
    EscapeCharacters: {
      match: '\\\\.{1}',
      name: 'constant.character.escape.4gl'
    },
    FlowControl: {
      patterns: [
        {
          match:
            '\\b(?i)(IF|CALL|FOR|WHILE|RETURNING|EXIT|RETURN|CONTINUE|CASE|LABEL|SLEEP|TRY|CATCH|GOTO)\\b',
          name: 'keyword.other.flowcontrol.4gl'
        }
      ]
    },
    Functions: {
      patterns: [
        {
          captures: {1: {name: 'storage.type.function.4gl'}},
          match: '(?i)(?:^\\s*)\\b(MAIN)\\b',
          name: 'meta.function.4gl'
        },
        {
          captures: {
            1: {name: 'storage.type.modifier.4gl'},
            2: {name: 'keyword.other.4gl'},
            3: {name: 'entity.name.function.4gl'}
          },
          match:
            '(?xi)^(PUBLIC|PRIVATE|\\s*)?(?:\\s*)(?:\\b(FUNCTION|REPORT|DIALOG)\\b\\s+)((?:\\w+))',
          name: 'meta.function.4gl'
        }
      ]
    },
    GeneroControlBlocks: {
      captures: {1: {name: 'keyword.control.4gl'}},
      match:
        '\\b(?i)(menu\\s|input\\sby\\sname|construct\\sby\\sname|display\\sarray)\\b',
      name: 'meta.name.section.4gl'
    },
    KeywordsControl: {
      match:
        '\\b(?i)(IF|CALL|FOR|ELSE|WHILE|RETURNING|EXIT|RETURN|CONTINUE|CASE|WHEN|AFTER|FOREACH|THEN|END MAIN|END REPORT|END|RUN|LABEL|CHANGE|ON|ACTION|END IF|IIF|GOTO|BREAK|NAME|IDLE|DISPLAY|SLEEP|BREAKPOINT|BEFORE|CONSTRUCT|INPUT)\\b',
      name: 'keyword.control.4gl'
    },
    KeywordsOther: {
      match:
        '\\b(?i)(LET|INTO|FUNCTION|CURSOR|DEFINE|ERROR|INITIALIZE|KEY|TABLE|DEFAULT|UP|ROWS|SCREEN|LEFT|FORM|TABLES|GLOBAL|FIELD|MORE|CLEAR|INSTRUCTIONS|INTERRUPT|ESCAPE|MENU|COMMENT|DATABASE|COLUMN|COMMENTS|ATTRIBUTE|SQL|DEFER|GLOBALS|COLUMNS|DELIMITERS|RIGHT|TAB|WINDOW|ROW|DEFAULTS|DELIMITER|DOWN|ESC|COLOR|ATTRIBUTES|ASCENDING|DESCENDINGSQLAWARN|SQLERRM|SQLERROR|SQLERRP|SQLSTATE|SQLWARNING|OPTION|OPTIONS|ALL|HIDE|SPACE|SPACES|WRAP|STEP|SKIP|SIZE|LINE|LINES|MARGIN|MESSAGE|INVISIBLE|BLACK|BLINK|BLUE|BOLD|BORDER|BOTTOM|CYAN|UNDERLINE|WHITE|YELLOW|RED|PROMPT|NOENTRY|MAGENTO|MODULE)\\b',
      name: 'keyword.other.4gl'
    },
    KeywordsOtherUnsorted: {
      patterns: [
        {
          match:
            '\\b(?i)(INT_FLAG|CHECK|VERIFY|NUMBER|SCROLL|HEADER|INDEX|TEMP|READ|START|SET|NEED|ONLY|AS|INCLUDE|TYPE|CONSTANT|AVERAGE|NEW|PROGRAM|AUDIT|LOG|REMOVE|STOP|PRIOR|LOCK|OUTPUT|PRINT|EACH|REVERSE|TOP|PERCENT|MODULE|FOUND|MIN|DATA|AVG|SOME|WORK|VARIABLES|USER|TOTAL|SUM|ADD|OLD|WHENEVER|ENTRY|PRECISION|DBA|GREEN|RESTRICT|ROLLFORWARD|COBOL|REPEATABLE|PLI|DISCONNECT|SYSTEM|COMMAND|READONLY|RECOVER|ENABLED|ATTACH|FILE|TRIGGER|EVERY|BEGIN|TYPEDEF|CLASS_ORIGIN|DEBUG|ROWID|COMPRESS|IMMEDIATE|SYSDEPEND|ROOT|RESUME|TRIM|VARIANCE|REOPTIMIZATION|SYSFRAGMENTS|MODIFY|LONG|RETURNED_SQLSTATE|REAL|PRINTER|SYSFRAGAUTH|PAUSE|EXTERNAL|FORTRAN|CHARACTER_LENGTH|UNSIGNED|CONTROL|SCHEMA|TRAILER|FORMAT|REMAINDER|SERIAL|SYSCONSTRAINTS|EXPLAIN|SYSUSERS|SERVER_NAME|SYSTABLES|ASCII|ABORT|NOCR|RENAME|SHARE|REFERENCES|FRAGMENT|ROUND|MEMORY|BETWEEN|DIAGNOSTICS|EXPRESSION|SYSCOLUMNS|MESSAGE_LENGTH|SESSION|PROCEDURE|SYSPROCPLAN|ROWIDS|BUFFERED|WRITE|FINISH|LOCATE|DIALOG|SUBDIALOG|BOTH|OCTET_LENGTH|DEC|ITYPE|PASCAL|CONSTRAINED|SYSREFERENCES|STATISTICS|SYSCOLDEPEND|PRIMARY|EXP|TRANSACTION|SQRT|DETACH|WARNING|HEX|SECTION|CHAR_LENGTH|ABSOLUTE|EXTENT|ATAN|PAGE|AUTONEXT|SYSPROCEDURES|SITENAME|QUIT|FIELD_TOUCHED|SCALE|COMMIT|PDQPRIORITY|RELATIVE|FOREIGN|DBINFO|AUTO|SYSSYNTABLE|SHORT|ISOLATION|DEALLOCATE|HELP|PIPE|SYSROLEAUTH|LOGN|SYSTRIGBODY|INDICATOR|ASIN|DBSERVERNAME|REVOKE|DEFERRED|RAISE|ROLLBACK|FILTERING|DORMANT|SYSVIEWS|MODE|CASCADE|CLUSTER|EXCLUSIVE|ATAN2|ROLE|MEDIUM|SIZEOF|NULLABLE|WAIT|DIRTY|STATIC|VIOLATIONS|PICTURE|WAITING|SWITCH|ANSI|ACCEPT|UNCOMMITTED|DESCRIPTOR|FILLFACTOR|SYSOPCLSTR|OPTIMIZATION|AUTHORIZATION|QUIT_FLAG|STABILITY|DISTINCT|ISAM|ALLOCATE|PREVPAGE|COS|REQUIRED|ABS|RESOLUTION|TRAILING|SYSTRIGGERS|NEXTPAGE|HIGH|DISABLED|LEADING|EXCEPTION|CHARACTER|COMPOSITES|RESOURCE|DISTRIBUTIONS|SYSTABAUTH|STRUCT|SYSPROCBODY|TRACE|SERIALIZABLE|CONNECTION|GO|COMMITTED|ILENGHT|REFERENCING|ZEROFILL|SYSDISTRIB|SYSCHECKS|SYNONYM|LOW|SYSPROCAUTH|INDEXES|POW|ACCESS|STDEV|OFF|ROBIN|CONSTRAINT|TRUNC|NONE|SYSVIOLATIONS|PRIVILEGES|DESCRIBE|UNCONSTRAINED|CONNECTION_ALIAS|LINENO|EXTERN|VARYING|ADA|PAGENO|ROW_COUNT|LANGUAGE|SYSDEFAULTS|APPEND|VIEW|LOG10|SYSINDEXES|TAN|ACOS|INIT|CONNECT|UNLOCK|GRANT|NUMERIC|DATASKIP|VALIDATE|SYSCOLAUTH|MESSAGE_TEXT|DIM|SYSSYNONYMS|SYSBLOBS|FRACTION|TRIGGERS|EXEC|CONCURRENT|REGISTER|SYSOBJSTATE|RANGE|SUBCLASS_ORIGIN|NORMAL|IDATA|CONSTRAINTS|NEXT|SHOW|ADD|SCR_LINE)\\b',
          name: 'keyword.other.unsorted.4gl'
        },
        {match: '\\&', name: 'keyword.other.unsorted'}
      ]
    },
    KeywordsSql: {
      match:
        '\\b(?i)(USING|FROM|CLOSE|OPEN|FETCH|PREPARE|DECLARE|EXECUTE|SELECT|WHERE|CREATE|UPDATE|DELETE|INSERT|FOREACH|COUNT|FREE|FLUSH|PUT|ALTER|ASC|DESC|DROP|ORDER|UNION|UNIQUE|OUTER|MAX|EXISTS|GROUP|HAVING|VALUES|VALUE|IN|BY)\\b',
      name: 'keyword.control.sql.4gl'
    },
    KeywordsString: {
      patterns: [
        {
          match:
            '\\b(?i)(IS|THRU|WITH|HOLD|TO|PREVIOUS|NO|LAST|AT|WITHOUT|OF|ANY|OTHERWISE|THROUGH|FORMONLY|CLIPPED|INFIELD|FIRST)\\b',
          name: 'keyword.operator.string.4gl'
        },
        {match: '(\\,|\\.|\\|\\|)', name: 'keyword.operator.string.4gl'}
      ]
    },
    KeywordsSupport: {
      match:
        '\\b(?i)(SECOND|YEAR|DAY|HOUR|TIME|TODAY|SQLERRD|SQLCA|MINUTE|SQLCODE|WEEKDAY|STATUS|MONTH)\\b',
      name: 'support.type.4gl'
    },
    LogicalOperators: {
      match: '\\b(?i)(AND|NOT|OR)\\b',
      name: 'keyword.operator.logical.4gl'
    },
    MathOperators: {
      patterns: [
        {
          match: '(\\;|\\:|\\+|\\-|\\/|\\*\\*)',
          name: 'keyword.operator.math.4gl'
        },
        {match: '(?i)\\b(MOD)\\b', name: 'keyword.operator.math.4gl'}
      ]
    },
    Numbers: {match: '\\b\\d+\\b', name: 'constant.numeric.4gl'},
    Parens: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'keyword.control.4gl'}},
          end: '\\)',
          endCaptures: {0: {name: 'keyword.control.4gl'}},
          name: 'variable.parameter.4gl',
          patterns: [
            {include: '#StringDoubleQuote'},
            {include: '#SupportConstant'},
            {include: '$self'}
          ]
        }
      ]
    },
    SQLPlaceHolder: {
      patterns: [
        {match: '\\?', name: 'constant.character.placeholder.4gl'},
        {match: '\\,', name: 'keyword.sql.comma.4gl'},
        {
          match:
            '(?i)\\b(AND|OR|ORDER BY|GROUP BY|PARTITION BY|ON|SELECT|UPDATE|INSERT|DELETE|FROM|WHERE|LEFT JOIN|INNER JOIN|RIGHT JOIN|DECLARE|SET)\\b',
          name: 'entity.name.tag.4gl'
        },
        {
          match: '(?i)\\b(COUNT|ROW_NUMBER|OVER|MIN|MAX|AVG|SUM)\\b',
          name: 'support.function.sql.4gl'
        },
        {match: '(?i)\\b(ASC|DESC)\\b', name: 'support.type.sql.4gl'},
        {
          match: '(?i)@\\b([a-z0-9\\-]+)\\b',
          name: 'constant.character.placeholder.4gl'
        },
        {
          captures: {1: {name: 'constant.character.placeholder.4gl'}},
          match: '(?i)(?:\\()?\\s*(\\*)\\s*(?:\\))?'
        }
      ]
    },
    StringDoubleQuote: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'string.quoted.double.4gl'}},
          end: '"',
          endCaptures: {0: {name: 'string.quoted.double.4gl'}},
          name: 'string.quoted.double.content.4gl',
          patterns: [
            {include: '#EscapeCharacters'},
            {include: '#SQLPlaceHolder'},
            {include: '#LogicalOperators'},
            {include: '#SupportConstant'},
            {include: '#ComparisonOperators'}
          ]
        }
      ]
    },
    StringSingleQuote: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'string.quoted.single.4gl'}},
          end: "'",
          endCaptures: {0: {name: 'string.quoted.single.4gl'}},
          name: 'string.quoted.single.content.4gl',
          patterns: [
            {include: '#EscapeCharacters'},
            {include: '#SQLPlaceHolder'},
            {include: '#LogicalOperators'},
            {include: '#SupportConstant'},
            {include: '#ComparisonOperators'}
          ]
        }
      ]
    },
    Support: {
      captures: {
        1: {name: 'support.function.4gl'},
        2: {name: 'support.class.4gl'},
        3: {name: 'support.type.4gl'}
      },
      match: '\\b(?i)(import)\\s*([a-z0-9]+)(\\s+\\w+)?\\b'
    },
    SupportConstant: {
      patterns: [
        {
          match: '(?i)\\b(NULL|FALSE|NOTFOUND|TRUE)\\b',
          name: 'support.constant.4gl'
        }
      ]
    },
    TypeModifiers: {
      match: '\\b(?i)(DYNAMIC|PRIVATE|PUBLIC)\\b',
      name: 'storage.type.modifier.4gl'
    },
    Types: {
      match:
        '\\b(?i)(RECORD|SMALLINT|ARRAY|DATE|DECIMAL|INTEGER|PRECISION|FLOAT|VARCHAR|BOOLEAN|MONEY|BYTE|DATETIME|TEXT|INT|INTERVAL|NUMERIC|CHARGETYPE|DEC|SMALLFLOAT|CHARACTER|CHAR|STRING|DO|DOUBLE|NCHAR|NVARCHAR|TINYINT)\\b',
      name: 'storage.type.4gl'
    }
  },
  scopeName: 'source.genero'
}

export default grammar
