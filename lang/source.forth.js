// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fth', '.4th', '.f', '.for', '.forth', '.fr', '.frt'],
  names: ['forth'],
  patterns: [
    {
      match: '(?i:(?<=^|\\s)(TRUE|FALSE|BL|PI|CELL|C/L|R/O|W/O|R/W)(?=\\s))',
      name: 'constant.language.forth'
    },
    {
      match:
        '(?<=^|\\s)([$#%]?[-+]?[0-9]+(\\.[0-9]*e(-?[0-9]+)|\\.?[0-9a-fA-F]*))(?=\\s)',
      name: 'constant.numeric.forth'
    },
    {
      match: '(?<=^|\\s)(([&^]\\S)|(("|\')\\S("|\')))(?=\\s)',
      name: 'constant.character.forth'
    },
    {match: '(?<=^|\\s)(-- .*$)', name: 'comment.line.double-dash.forth'},
    {match: '(?<=^|\\s)(\\\\ .*$)', name: 'comment.line.backslash.forth'},
    {match: '(?<=^|\\s)(\\\\[Gg] .*$)', name: 'comment.line.backslash-g.forth'},
    {
      begin: '(?<=^|\\s)(\\(\\*)(?=\\s)',
      end: '(?<=^|\\s)(\\*\\))(?=\\s)',
      name: 'comment.block.forth'
    },
    {
      begin: '\\b(?i:DOC)\\b',
      end: '\\b(?i:ENDDOC)\\b',
      name: 'comment.block.documentation.forth'
    },
    {
      match: '(?<=^|\\s)(\\.?\\( [^)]*\\))',
      name: 'comment.line.parentheses.forth'
    },
    {
      match:
        '(?i:((?<=ABORT" )|(?<=BREAK" )|(?<=\\." )|(C" )|(S\\\\?" )))[^"]+"',
      name: 'string.quoted.double.forth'
    },
    {
      match:
        '(?i:((?<=INCLUDE)|(?<=NEEDS)|(?<=REQUIRE)|(?<=USE)))[ ]\\S+(?=\\s)',
      name: 'string.unquoted.forth'
    },
    {
      match:
        '(?<=^|\\s)\\[(?i:(\\?DO|\\+LOOP|AGAIN|BEGIN|DO|ELSE|ENDIF|FOR|IF|IFDEF|IFUNDEF|LOOP|NEXT|REPEAT|THEN|UNTIL|WHILE))\\](?=\\s)',
      name: 'keyword.control.immediate.forth'
    },
    {
      match:
        "(?<=^|\\s)(?i:(COMPILE-ONLY|IMMEDIATE|IS|RESTRICT|TO|WHAT'S))(?=\\s)",
      name: 'keyword.other.immediate.forth'
    },
    {
      match:
        '(?<=^|\\s)(?i:(-DO|\\-LOOP|\\?DO|\\?LEAVE|\\+DO|\\+LOOP|ABORT\\"|AGAIN|AHEAD|BEGIN|CASE|DO|ELSE|ENDCASE|ENDIF|ENDOF|ENDTRY\\-IFERROR|ENDTRY|FOR|IF|IFERROR|LEAVE|LOOP|NEXT|RECOVER|REPEAT|RESTORE|THEN|TRY|U\\-DO|U\\+DO|UNTIL|WHILE))(?=\\s)',
      name: 'keyword.control.compile-only.forth'
    },
    {
      match:
        "(?<=^|\\s)(?i:(\\?DUP-0=-IF|\\?DUP-IF|\\)|\\['\\]|\\[CHAR\\]|\\[COMPILE\\]|\\[IS\\]|\\[TO\\]|<COMPILATION|<INTERPRETATION|ASSERT\\(|ASSERT0\\(|ASSERT1\\(|ASSERT2\\(|ASSERT3\\(|COMPILATION>|DEFERS|DOES>|INTERPRETATION>|OF|POSTPONE))(?=\\s)",
      name: 'keyword.other.compile-only.forth'
    },
    {
      match:
        "(?<=^|\\s)(?i:('|<IS>|<TO>|CHAR|END-STRUCT|INCLUDE[D]?|LOAD|NEEDS|REQUIRE[D]?|REVISION|SEE|STRUCT|THRU|USE))(?=\\s)",
      name: 'keyword.other.non-immediate.forth'
    },
    {
      match: '(?<=^|\\s)(?i:(~~|BREAK:|BREAK"|DBG))(?=\\s)',
      name: 'keyword.other.warning.forth'
    },
    {match: '\\b(?i:I|J)\\b', name: 'variable.language.forth'},
    {
      match:
        '(?<=^|\\s)(?i:(2CONSTANT|2VARIABLE|ALIAS|CONSTANT|CREATE-INTERPRET/COMPILE[:]?|CREATE|DEFER|FCONSTANT|FIELD|FVARIABLE|USER|VALUE|VARIABLE|VOCABULARY))(?=\\s)',
      name: 'storage.type.forth'
    }
  ],
  scopeName: 'source.forth'
}

export default grammar
