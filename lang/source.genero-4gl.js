// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/FourjsGenero/GeneroFgl.tmbundle>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.4gl'],
  names: ['genero-4gl'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#numerics'},
    {
      match: '^\\s*&\\s*(elif|else|endif|ifdef|ifndef|include|undef)\\b',
      name: 'meta.preprocessor'
    },
    {
      begin: '^\\s*&\\s*define\\b',
      beginCaptures: {0: {name: 'meta.preprocessor'}},
      end: '[^\\\\\\{]$',
      patterns: [
        {include: '#keywords'},
        {include: '#strings'},
        {include: '#numerics'},
        {match: '#', name: 'meta.preprocessor'},
        {include: '#comments'},
        {captures: {1: {name: 'meta.preprocessor'}}, match: '(\\\\)[ \\t]*\\n'}
      ]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {match: '#.*$', name: 'comment.line.number-sign.4gl'},
        {match: '--.*$', name: 'comment.line.double-dash.4gl'},
        {begin: '{', end: '}', name: 'comment.block.4gl'}
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(?i)(AND|OR|MOD|NOT)\\b', name: 'keyword.operator.4gl'},
        {
          match:
            '\\b(?i)(BOOLEAN|BYTE|CHAR|VARCHAR|NVARCHAR|LVARCHAR|FLOAT|INTEGER|INT|INT8|SMALLINT|BIGINT|TINYINT|SMALLFLOAT|DECIMAL|MONEY|DATE|DATETIME|INTERVAL|SERIAL8|SERIAL|STRING|TEXT)\\b',
          name: 'storage.type.4gl'
        },
        {
          match:
            '\\b(?i)(ABSOLUTE|ACCELERATOR|ACCEPT|ACCESSORYTYPE|ACTION|ADD|AFTER|ALL|ALTER|AND|ANSI|ANY|APPEND|APPLICATION|ARRAY|AS|ASC|ASCENDING|ASCII|AT|ATTRIBUTE|ATTRIBUTES|AUDIT|AUTHORIZATION|AUTO|AVG)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(BEFORE|BEGIN|BETWEEN|BIGINT|BIGSERIAL|BLACK|BLINK|BLUE|BOLD|BOOLEAN|BORDER|BOTTOM|BREAKPOINT|BUFFER|BUFFERED|BY|BYTE)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(CACHE|CALL|CANCEL|CASCADE|CASE|CAST|CATCH|CENTURY|CHANGE|CHAR|CHARACTER|CHECK|CHECKMARK|CIRCUIT|CLEAR|CLIPPED|CLOSE|CLUSTER|COLLAPSE|COLUMN|COLUMNS|COMMAND|COMMENT|COMMIT|COMMITTED|CONCURRENT|CONNECT|CONNECTION|CONSTANT|CONSTRAINED|CONSTRAINT|CONSTRUCT|CONTEXTMENU|CONTINUE|CONTROL|COUNT|CREATE|CROSS|CURRENT|CURSOR|CYAN|CYCLE)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(DATABASE|DATE|DATETIME|DAY|DBA|DBSERVERNAME|DEC|DECIMAL|DECLARE|DEFAULT|DEFAULTS|DEFAULTVIEW|DEFER|DEFINE|DELETE|DELIMITER|DESC|DESCENDING|DESCRIBE|DESTINATION|DETAILACTION|DETAILBUTTON|DIALOG|DICTIONARY|DIM|DIMENSION|DIRTY|DISCLOSUREINDICATOR|DISCONNECT|DISPLAY|DISTINCT|DORMANT|DOUBLE|DOUBLECLICK|DOWN|DRAG_ENTER|DRAG_FINISHED|DRAG_OVER|DRAG_START|DROP|DYNAMIC)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(ELSE|END|ERROR|ESCAPE|EVERY|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXPAND|EXPLAIN|EXTEND|EXTENT|EXTERNAL)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(FALSE|FETCH|FGL|FGL_DRAWBOX|FIELD|FIELD_TOUCHED|FILE|FILL|FINISH|FIRST|FLOAT|FLUSH|FOCUSONFIELD|FOR|FOREACH|FOREIGN|FORM|FORMAT|FOUND|FRACTION|FREE|FROM|FULL|FUNCTION)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match: '\\b(?i)(GET_FLDBUF|GLOBALS|GO|GOTO|GRANT|GREEN|GROUP)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match: '\\b(?i)(HANDLER|HAVING|HEADER|HELP|HIDE|HOLD|HOUR)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(IDLE|IF|IIF|IMAGE|IMMEDIATE|IMPORT|IN|INCREMENT|INDEX|INFIELD|INITIALIZE|INNER|INOUT|INPUT|INSERT|INSTANCEOF|INT|INT8|INTEGER|INTERFACE|INTERRUPT|INTERVAL|INTO|INVISIBLE|IS|ISOLATION)\\b',
          name: 'keyword.control.4gl'
        },
        {match: '\\b(?i)(JAVA|JOIN)\\b', name: 'keyword.control.4gl'},
        {match: '\\b(?i)(KEEP|KEY)\\b', name: 'keyword.control.4gl'},
        {
          match:
            '\\b(?i)(LABEL|LAST|LEFT|LENGTH|LET|LIKE|LIMIT|LINE|LINENO|LINES|LOAD|LOCATE|LOCK|LOCKS|LOG|LSTR|LVARCHAR)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(MAGENTA|MAIN|MARGIN|MATCHES|MAX|MAXCOUNT|MAXVALUE|MDY|MEMORY|MENU|MESSAGE|MIDDLE|MIN|MINUTE|MINVALUE|MOD|MODE|MODIFY|MONEY|MONTH)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(NAME|NATURAL|NAVIGATOR|NCHAR|NEED|NEXT|NO|NOCACHE|NOCYCLE|NOMAXVALUE|NOMINVALUE|NOORDER|NORMAL|NOT|NOTFOUND|NULL|NUMERIC|NVARCHAR|NVL)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(OF|OFF|ON|OPEN|OPTION|OPTIONS|OR|ORD|ORDER|OTHERWISE|OUT|OUTER|OUTPUT)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(PACKAGE|PAGE|PAGENO|PAUSE|PERCENT|PICTURE|PIPE|POPUP|PRECISION|PREPARE|PREVIOUS|PRIMARY|PRINT|PRINTER|PRINTX|PRIOR|PRIVATE|PRIVILEGES|PROCEDURE|PROGRAM|PROMPT|PUBLIC|PUT)\\b',
          name: 'keyword.control.4gl'
        },
        {match: '\\b(?i)(QUIT)\\b', name: 'keyword.control.4gl'},
        {
          match:
            '\\b(?i)(RAISE|READ|REAL|RECORD|RECOVER|RED|REFERENCES|RELATIVE|RELEASE|RENAME|REOPTIMIZATION|REPEATABLE|REPORT|RESOURCE|RESTART|RETAIN|RETURN|RETURNING|RETURNS|REVERSE|REVOKE|RIGHT|ROLLBACK|ROLLFORWARD|ROW|ROWBOUND|ROWS|RUN)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(SAVEPOINT|SCHEMA|SCREEN|SCROLL|SECOND|SELECT|SELECTION|SEQUENCE|SERIAL|SERIAL8|SESSION|SET|SFMT|SHARE|SHIFT|SHORT|SHOW|SIGNAL|SITENAME|SIZE|SKIP|SLEEP|SMALLFLOAT|SMALLINT|SOME|SORT|SPACE|SPACES|SQL|SQLERRMESSAGE|SQLERROR|SQLSTATE|STABILITY|START|STATISTICS|STEP|STOP|STRING|STYLE|SUBDIALOG|SUM|SYNONYM)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(TABLE|TEMP|TERMINATE|TEXT|THEN|THROUGH|THRU|TIME|TIMER|TINYINT|TO|TODAY|TOP|TRAILER|TRANSACTION|TRUE|TRUNCATE|TRUSTED|TRY|TYPE)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(UNBUFFERED|UNCONSTRAINED|UNDERLINE|UNION|UNIQUE|UNITS|UNLOAD|UNLOCK|UP|UPDATE|USER|USING)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match: '\\b(?i)(VALIDATE|VALUES|VAR|VARCHAR|VIEW)\\b',
          name: 'keyword.control.4gl'
        },
        {
          match:
            '\\b(?i)(WAIT|WAITING|WARNING|WEEKDAY|WHEN|WHENEVER|WHERE|WHILE|WHITE|WINDOW|WITH|WITHOUT|WORDWRAP|WORK|WRAP)\\b',
          name: 'keyword.control.4gl'
        },
        {match: '\\b(?i)(XML)\\b', name: 'keyword.control.4gl'},
        {match: '\\b(?i)(YEAR|YELLOW|YES)\\b', name: 'keyword.control.4gl'}
      ]
    },
    numerics: {
      patterns: [
        {
          match:
            '(\\+|\\-)?((\\b\\d+(\\.\\d+)?)|(\\.\\d+))([e|E](\\+|\\-)?\\d+)?',
          name: 'constant.numeric.4gl'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          end: "'(?!')",
          name: 'string.quoted.single.4gl',
          patterns: [
            {
              match: "\\\\[\\\\btnfr'\"]|\\\\$|''",
              name: 'constant.character.escape.untitled'
            },
            {
              match: '\\\\x[0-9a-fA-F]{1,2}',
              name: 'constant.character.escape.untitled'
            },
            {match: '\\\\.', name: 'invalid.illegal'}
          ]
        },
        {
          begin: '"',
          end: '"(?!")',
          name: 'string.quoted.double.4gl',
          patterns: [
            {
              match: '\\\\[\\\\btnfr\'"]|\\\\$|""',
              name: 'constant.character.escape.untitled'
            },
            {
              match: '\\\\x[0-9a-fA-F]{1,2}',
              name: 'constant.character.escape.untitled'
            },
            {match: '\\\\.', name: 'invalid.illegal'}
          ]
        },
        {begin: '`', end: '`', name: 'string.quoted.raw.4gl'}
      ]
    }
  },
  scopeName: 'source.genero-4gl'
}

export default grammar
