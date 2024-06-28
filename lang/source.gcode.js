// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/appliedengdesign/vscode-gcode-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.g', '.cnc', '.gco', '.gcode'],
  names: ['g-code'],
  patterns: [{include: '#all'}],
  repository: {
    all: {
      patterns: [
        {include: '#comments'},
        {include: '#control'},
        {include: '#gcodes'},
        {include: '#mcodes'},
        {include: '#operators'},
        {include: '#speedsfeeds'},
        {include: '#prognumbers'},
        {include: '#coords'},
        {include: '#tools'},
        {include: '#modifiers'},
        {include: '#macrovars'},
        {include: '#rs274ngc'}
      ]
    },
    comments: {
      patterns: [
        {match: '(\\(.+\\))', name: 'comment.gcode'},
        {begin: ';', end: '\\n', name: 'comment.gcode'}
      ]
    },
    control: {
      patterns: [
        {match: '(?i)(GOTO\\s?\\d+)', name: 'keyword.control.gcode'},
        {
          match: '(?i)(EQ|NE|LT|GT|LE|GE|AND|OR|XOR)',
          name: 'keyword.control.gcode'
        },
        {
          match: '(?i)(DO\\s?\\d*|WHILE|WH|END|IF|THEN|ELSE|ENDIF)',
          name: 'keyword.control.gcode'
        },
        {match: '([\\%])', name: 'string.gcode'}
      ]
    },
    coords: {
      patterns: [
        {
          match: '(?i)([X])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'string.gcode'
        },
        {
          match: '(?i)([Y])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'string.gcode'
        },
        {
          match: '(?i)([Z])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'invalid.gcode'
        },
        {
          match: '(?i)([ABC])\\s?(\\-*\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'constant.character.escape.gcode'
        }
      ]
    },
    gcodes: {
      patterns: [
        {
          match: '(?i)[G](1)?5[4-9](.1)?\\s?(P[0-9]{1,3})?',
          name: 'constant.numeric.gcode'
        },
        {match: '(?i)[G]1[1-2][0-9]', name: 'constant.numeric.gcode'},
        {match: '(?i)[G]15\\s?(H[0-9]{1,2})?', name: 'constant.numeric.gcode'},
        {match: '(?i)[G][0-9]{1,3}(\\.[0-9])?', name: 'markup.bold.gcode'}
      ]
    },
    macrovars: {patterns: [{match: '[#][0-9]*', name: 'variable.other.gcode'}]},
    mcodes: {
      patterns: [
        {
          match: '(?i)[M][0-9]{1,3}',
          name: 'keyword.operator.quantifier.regexp.gcode'
        }
      ]
    },
    modifiers: {
      patterns: [
        {
          match: '(?i)([IJK])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'constant.character.escape.gcode'
        },
        {
          match: '(?i)([QR])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]]))',
          name: 'support.constant.math.gcode'
        },
        {
          match: '(?i)([UW])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]]))',
          name: 'support.constant.math.gcode'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '(?i)(SIN|COS|TAN|ASIN|ACOS|ATAN|FIX|FUP|LN|ROUND|SQRT)',
          name: 'support.constant.math.gcode'
        },
        {
          match: '(?i)(FIX|FUP|ROUND|ABS|MOD)',
          name: 'support.constant.math.gcode'
        },
        {match: '(\\+|\\*|\\/|\\*\\*)', name: 'support.constant.math.gcode'},
        {match: '(\\-)', name: 'invalid.gcode'}
      ]
    },
    prognumbers: {
      patterns: [
        {match: '(?i)(^[N])(\\d+)', name: 'constant.numeric.gcode'},
        {match: '(?i)(^[O])(\\d+)?', name: 'string.regexp.gcode'},
        {
          match: '(?i)([P])\\s?(\\d?\\.?\\d+\\.?|\\.?(?=[#\\[]))',
          name: 'string.regexp.gcode'
        }
      ]
    },
    rs274ngc: {
      patterns: [
        {match: '(?i)(ENDSUB|SUB)', name: 'keyword.control.gcode'},
        {
          begin: '<',
          beginCaptures: {0: {name: 'markup.bold.gcode'}},
          end: '>',
          endCaptures: {0: {name: 'markup.bold.gcode'}},
          name: 'support.type.gcode'
        }
      ]
    },
    speedsfeeds: {
      patterns: [
        {
          match: '(?i)([S])\\s?(\\d+|(?=[#\\[]))',
          name: 'constant.language.gcode'
        },
        {
          match: '(?i)([EF])\\s?\\.?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.language.gcode'
        }
      ]
    },
    tools: {
      patterns: [
        {
          match: '(?i)([D])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '(?i)([H])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '(?i)([T])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        }
      ]
    }
  },
  scopeName: 'source.gcode'
}

export default grammar
