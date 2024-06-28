// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/harogaston/Sublime-Modula-2>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ob2'],
  names: ['modula-2', 'oberon'],
  patterns: [
    {
      captures: {
        1: {name: 'storage.type.function.modula2'},
        2: {name: 'entity.name.function.modula2'}
      },
      match:
        '\\b(PROCEDURE|DEFINITION MODULE|IMPLEMENTATION MODULE|MODULE)\\b\\s+(\\w+(\\.\\w+)?)'
    },
    {
      captures: {
        1: {name: 'keyword.control.modula2'},
        2: {name: 'entity.name.function.end.modula2'}
      },
      match: '\\b(END)\\b\\s+(\\w+(\\.\\w+)?)'
    },
    {
      captures: {
        1: {name: 'storage.type.function.modula2'},
        2: {name: 'entity.name.function.modula2'}
      },
      match:
        '\\b(ABS|ADDRES|ADR|BITSET|BOOLEAN|BYTE|CAP|CARDINAL|CHAR|CHR|DEC|DISPOSE|EXCL|FALSE|FLOAT|HALT|HIGH|INC|INCL|INTEGER|LONGCARD|LONGINT|LONGREAL|LONGWORD|NEW|NULLPROC|ODD|ORD|PROC|REAL|SHORTADDR|SHORTCARD|SHORTINT|SIZE|TRUE|TRUNC|VAL|VSIZE|WORD)\\b',
      name: 'meta.function.modula2'
    },
    {
      match:
        '\\b(AND|ARRAY|BEGIN|BY|CASE|CONST|DIV|DO|ELSE|ELSIF|END|EXIT|EXPORT|FOR|FORWARD|FROM|GOTO|IF|IMPORT|IN|LABEL|LOOP|MOD|NOT|OF|OR|POINTER|QUALIFIED|RECORD|REPEAT|RETURN|SET|THEN|TO|DOWNTO|TYPE|UNTIL|VAR|WHILE|WITH|NIL)\\b',
      name: 'keyword.control.modula2'
    },
    {include: '#block_comment'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.modula2'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.modula2'}},
      name: 'string.quoted.double.modula2',
      patterns: [{match: '\\.', name: 'constant.character.escape.modula2'}]
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.modula2'
    },
    {
      match: '(\\(|\\)|\\+|-|\\*|/|:|;|\\.|\\^|=|:=|<|>|#)',
      name: 'variable.parameter.function.modula2'
    }
  ],
  repository: {
    block_comment: {
      applyEndPatternLast: true,
      begin: '\\(\\*',
      captures: {0: {name: 'punctuation.definition.comment.modula2'}},
      end: '\\*\\)',
      name: 'comment.block.modula2.one',
      patterns: [{include: '#block_comment'}]
    }
  },
  scopeName: 'source.modula2'
}

export default grammar
