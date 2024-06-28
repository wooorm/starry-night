// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zap', '.xzap'],
  names: ['zap'],
  patterns: [
    {include: '#whitespace'},
    {include: '#comment'},
    {include: '#number'},
    {include: '#string'},
    {include: '#labels'},
    {include: '#instruction'},
    {include: '#debug_directive'},
    {include: '#directive'}
  ],
  repository: {
    branch: {
      captures: {
        1: {name: 'keyword.control.branch.positive.zap'},
        2: {name: 'keyword.control.branch.negative.zap'},
        3: {name: 'keyword.control.branch.${3:/downcase}.zap'},
        4: {name: 'keyword.control.branch.label.name.zap'}
      },
      match:
        '(?x)\n(?: (/) | (\\\\) )\n\\s*\n(?:\n    (TRUE | FALSE)\n|   ( [A-Za-z?$#&] [A-Za-z0-9\\-?$#&.]* )\n)',
      name: 'meta.branch.zap'
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.line.zap'}},
      match: '(;).*$',
      name: 'comment.line.zap'
    },
    debug_directive: {
      begin: '(?x)\n(?<=\\s|:|^)\n(\\.)(DEBUG-[-A-Z]+)\n(?= \\s | ; | $)',
      beginCaptures: {
        0: {name: 'keyword.directive.debug.${2:/downcase}.zap'},
        1: {name: 'punctuation.directive.debug.zap'}
      },
      end: '(?=;|$)',
      name: 'meta.directive.debug.zap',
      patterns: [{include: '#operands'}]
    },
    directive: {
      begin:
        '(?x)\n(?<=\\s|:|^)\n(?!\\.DEBUG-)\n(?:\n    ((\\.)(FUNCT))\n    \\s+\n    ([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)\n    (?= \\s | [,;] | $)\n|\n    ((\\.)([A-Z]+))\n    (?= \\s | ; | $)\n)',
      beginCaptures: {
        1: {name: 'keyword.directive.${3:/downcase}.zap'},
        2: {name: 'punctuation.directive.zap'},
        4: {name: 'entity.name.function.zap'},
        5: {name: 'keyword.directive.${7:/downcase}.zap'},
        6: {name: 'punctuation.directive.zap'}
      },
      end: '(?=;|$)',
      name: 'meta.directive.zap',
      patterns: [{include: '#operands'}]
    },
    global_label: {
      captures: {
        1: {name: 'keyword.control.definition.label.global.name.zap'},
        2: {name: 'punctuation.definition.label.global.zap'}
      },
      match: '([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)(::)',
      name: 'meta.label.global.zap'
    },
    identifier: {
      captures: {
        1: {name: 'variable.language.stack.zap'},
        2: {name: 'variable.zap'}
      },
      match: '(STACK\\b)|([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)',
      name: 'meta.variable.zap'
    },
    instruction: {
      begin:
        '(?x)\n\\b\n(?:\n    (JUMP)\n    \\s+\n    ([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)\n    (?= \\s* (?: ; | $ ) )\n|\n    (\n        ADD | ASHIFT | ASSIGNED\\? | BAND | BCOM | BOR | BTST | BUFOUT | CALL | CALL1 | CALL2 |\n        CATCH | CHECKU | CLEAR | COLOR | COPYT | CRLF | CURGET | CURSET | DCLEAR | DEC |\n        DIRIN | DIROUT | DISPLAY | DIV | DLESS\\? | EQUAL\\? | ERASE | FCLEAR | FIRST\\? | FONT |\n        FSET\\?? | FSTACK | GET | GETB | GETP | GETPT | GRTR\\? | HLIGHT | ICALL | ICALL1 |\n        ICALL2 | IGRTR\\? | IN\\? | INC | INPUT | INTBL\\? | IRESTORE | ISAVE | IXCALL | JUMP |\n        LESS\\? | LEX | LOC | MARGIN | MENU | MOD | MOUSE-INFO | MOUSE-LIMIT | MOVE | MUL |\n        NEXT\\? | NEXTP | NOOP | ORIGINAL\\? | PICINF | PICSET | POP | PRINT | PRINTB | PRINTC |\n        PRINTD | PRINTF | PRINTI | PRINTN | PRINTR | PRINTT | PRINTU | PTSIZE | PUSH | PUT |\n        PUTB | PUTP | QUIT | RANDOM | READ | REMOVE | RESTART | RESTORE | RETURN | RFALSE |\n        RSTACK | RTRUE | SAVE | SCREEN | SCROLL | SET | SHIFT | SOUND | SPLIT | SUB | THROW |\n        USL | VALUE | VERIFY | WINATTR | WINGET | WINPOS | WINPUT | WINSIZE | XCALL | XPUSH |\n        ZERO\\? | XWSTR\n    )\n    (?= \\s | ; | $)\n)',
      beginCaptures: {
        1: {name: 'keyword.opcode.zap'},
        2: {name: 'keyword.control.branch.label.name.zap'},
        3: {name: 'keyword.opcode.zap'}
      },
      end: '(?=;|$)',
      name: 'meta.instruction.zap',
      patterns: [
        {include: '#opcode'},
        {include: '#operands'},
        {include: '#store'},
        {include: '#branch'}
      ]
    },
    labels: {patterns: [{include: '#global_label'}, {include: '#local_label'}]},
    local_label: {
      captures: {
        1: {name: 'keyword.control.definition.label.local.name.zap'},
        2: {name: 'punctuation.definition.label.local.zap'}
      },
      match: '([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)(:)(?!:)',
      name: 'meta.label.local.zap'
    },
    number: {match: '[0-9]+', name: 'constant.numeric.decimal.zap'},
    operands: {
      patterns: [
        {include: '#summation'},
        {include: '#number'},
        {include: '#identifier'},
        {include: '#string'}
      ]
    },
    store: {
      captures: {
        1: {name: 'punctuation.definition.storage.zap'},
        2: {name: 'storage.stack.zap'},
        3: {name: 'entity.name.variable.zap'}
      },
      match: '(>)\\s*(?:(STACK)|([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*))',
      name: 'meta.store.zap'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.zap'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.zap'}},
      name: 'string.quoted.double.zap',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.zap'}]
    },
    summation: {
      captures: {
        1: {name: 'constant.numeric.decimal.zap'},
        2: {name: 'entity.name.variable.zap'},
        3: {name: 'keyword.operator.plus.zap'},
        4: {name: 'constant.numeric.decimal.zap'},
        5: {name: 'entity.name.variable.zap'}
      },
      match:
        '(?:([0-9]+)|([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*))(?:\\s*(\\+)\\s*(?:([0-9]+)|([A-Za-z?$#&][A-Za-z0-9\\-?$#&.]*)))+',
      name: 'meta.operand.summation.zap'
    },
    whitespace: {match: '\\s+'}
  },
  scopeName: 'source.zap'
}

export default grammar
