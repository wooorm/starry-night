// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/newgrammars/m3>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.i3', '.ig', '.m3', '.mg'],
  names: ['modula-3'],
  patterns: [
    {
      match:
        '\\b(AND|ANY|ARRAY|AS|BEGIN|BITS|BRANDED|BY|CASE|CONST|DIV|DO|ELSE|ELSIF|END|EVAL|EXCEPT|EXCEPTION|EXIT|EXPORTS|FINALLY|FOR|FROM|GENERIC|IF|IMPORT|IN|INTERFACE|LOCK|LOOP|METHODS|MOD|MODULE|NOT|OBJECT|OF|OR|OVERRIDES|PROCEDURE|RAISE|RAISES|READONLY|RECORD|REF|REPEAT|RETURN|REVEAL|SET|THEN|TO|TRY|TYPE|TYPECASE|UNSAFE|UNTIL|UNTRACED|VALUE|VAR|WHILE|WITH)\\b',
      name: 'keyword.modula-3'
    },
    {
      match:
        '\\b(ABS|ADDRESS|ADR|ADRSIZE|ANY|BITSIZE|BOOLEAN|BYTESIZE|CARDINAL|CEILING|CHAR|DEC|DISPOSE|EXTENDED|FALSE|FIRST|FLOAT|FLOOR|INC|INTEGER|ISTYPE|LAST|LONGREAL|LOOPHOLE|MAX|MIN|MUTEX|NARROW|NEW|NIL|NULL|NUMBER|ORD|REAL|REFANY|ROOT|ROUND|SUBARRAY|TEXT|TRUE|TRUNC|TYPECODE|VAL)\\b',
      name: 'constant.language.modula-3'
    },
    {
      match: '\\b(LONGCARD|LONGINT)\\b',
      name: 'constant.language.modula-3._cm3'
    },
    {
      match: '\\b[0-9]+\\.[0-9]+([DdEeXx][\\+\\-]?[0-9]+)?\\b',
      name: 'constant.numeric.float.modula-3'
    },
    {
      match: '\\b[0-9]+(\\_[0-9a-fA-F]+)?L?\\b',
      name: 'constant.numeric.integer.modula-3'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.modula-3',
      patterns: [{include: '#escape_sequence'}]
    },
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.modula-3',
      patterns: [{include: '#escape_sequence'}]
    },
    {
      begin: '<\\*\\s*ASSERT\\b',
      end: '\\*>',
      name: 'keyword.control.assert.modula-3._cm3',
      patterns: [{include: '#pragma'}]
    },
    {
      begin: '<\\*\\s*DEBUG\\b',
      end: '\\*>',
      name: 'keyword.control.debug.modula-3._cm3',
      patterns: [{include: '#pragma'}]
    },
    {include: '#comment'},
    {include: '#pragma'}
  ],
  repository: {
    comment: {
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block.modula-3',
      patterns: [{include: '#comment'}]
    },
    escape_sequence: {
      match: '\\\\[0-7]{3}|\\\\[\\\\fnrt\\"\\\']',
      name: 'constant.character.escape.modula-3'
    },
    pragma: {
      begin: '\\<\\*',
      end: '\\*\\>',
      name: 'keyword.control.directive.pragma.modula-3',
      patterns: [{include: '#pragma'}]
    }
  },
  scopeName: 'source.modula-3'
}

export default grammar
