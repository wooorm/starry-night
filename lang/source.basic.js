// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/telnet23/language-basic>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['basic'],
  patterns: [
    {match: '^\\s*\\d+', name: 'entity.name.tag.basic'},
    {
      captures: {
        1: {name: 'keyword.control.basic'},
        2: {name: 'entity.name.tag.basic'}
      },
      match: '\\b((?i)THEN|ELSE|GO\\s*TO|GOSUB)\\s*(\\d+)'
    },
    {
      match: '\\b(?:\\d\\.|\\d+\\.\\d+|\\.\\d+|\\d+)(?:[Ee][-+]?\\d+)?\\b',
      name: 'constant.numeric.basic'
    },
    {match: '"[^"]*"', name: 'string.quoted.double.basic'},
    {match: "(?i:\bREM\b.*|^'.*| '.*)", name: 'comment.line.basic'},
    {
      match: '\\b(?i:FOR|TO|NEXT|IF|THEN|ELSE|GO\\s*TO|GOSUB|RETURN)\\b',
      name: 'keyword.control.basic'
    },
    {
      match:
        '\\b(?i:\\?|\\&|\\!|ABSOLUTE|ACCESS|AS|BASE|BEEP|BLOAD|BSAVE|CALL|CASE|CHAIN|CHDIR|CIRCLE|CLEAR|CLOSE|CLS|COLOR|COM|COMMON|CONST|DATA|DECLARE|DEF|DEFDBL|DEFINT|DEFLNG|DEFSNG|DEFSTR|DIM|DO|DRAW|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FUNCTION|GET|HOME|IF|INPUT|INPUT#|IOCTL|KEY|KILL|LET|LINE|LOCATE|LOCK|LOOP|LPRINT|LSET|MKDIR|NAME|NEW|ON|OPEN|OPTION|OUT|PAINT|PALETTE|PCLEAR0|PCLEAR1|PCOPY|PEN|PLAY|PMAP|PMODE0|POKE|PRESET|PRINT|PRINT#|PSET|PUT|RANDOMIZE|READ|REDIM|REM|RESET|RESTORE|RESUME|RMDIR|RSET|RUN|SCREEN|SEEK|SELECT|SHARED|SHELL|SLEEP|SOUND|SOUNDRND|STATIC|STOP|STRIG|SUB|SWAP|SYSTEM|TIMER|TROFF|TRON|TYPE|UNLOCK|USING|VIEW|WAIT|WEND|WHILE|WINDOW|WRITE)\\b',
      name: 'entity.name.type.basic'
    },
    {
      match:
        '\\b(?i:BIN|CHR|COMMAND|DATE|ENVIRON|ERDEV|HEX|INKEY|INPUT|IOCTL|LAFT|LCASES|LEFT|LTRIM|MID|MKD|MKDMBF|MKI|MKL|MKS|MKSMBF|OCT|RIGHT|RTRIM|SPACE|SPC|STR|STRING|TAB|TIME|UCASE|UPS|VARPTR)\\$',
      name: 'entity.name.function.basic'
    },
    {
      match:
        '\\b(?i:ABS|ASC|ATN|BRK|CDBL|CINT|CLNG|COS|CSNG|CSRLIN|CTL|CVD|CVDMBF|CVI|CVL|CVS|CVSMBF|D2R|EOF|ERDEV|ERL|ERR|EXP|FILEATTR|FIX|FRE|FREEFILE|HEIGHT|INP|INSTR|INT|ITM|LBOUND|LEN|LG|LIN|LN|LOC|LOF|LOG|LOG10|LPOS|NINT|NUM|PEEK|PEN|POINT|POS|R2D|REC|RND|SADD|SCREEN|SEEK|SETMEM|SGN|SIN|SPA|SPC|SQR|SQRT|STICK|STRIG|SYS|TAB|TAN|TIM|TIMER|TYP|UBOUND|VAL|VALPTR|VALSEG|VARPTR|VARSEG|WIDTH)\\b',
      name: 'entity.name.function.basic'
    },
    {
      match:
        '\\^|\\+|-|\\*\\*|\\*|/|=|<>|<=|=<|>=|=>|<|>|\\b(?i:MOD|NOT|AND|OR)\\b',
      name: 'keyword.operator.basic'
    }
  ],
  scopeName: 'source.basic'
}

export default grammar
