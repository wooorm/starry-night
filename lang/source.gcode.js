// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/appliedengdesign/vscode-gcode-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
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
          match: '([xX])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'string.gcode'
        },
        {
          match: '([yY])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'string.gcode'
        },
        {
          match: '([zZ])\\s?(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'invalid.gcode'
        },
        {
          match: '([aAbBcC])\\s?(\\-*\\d?\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'constant.character.escape.gcode'
        }
      ]
    },
    gcodes: {
      patterns: [
        {
          match: '[gG](1)?5[4-9](.1)?\\s?(P[0-9]{1,3})?',
          name: 'constant.numeric.gcode'
        },
        {match: '[gG]1[1-2][0-9]', name: 'constant.numeric.gcode'},
        {match: '[gG]15\\s?(H[0-9]{1,2})?', name: 'constant.numeric.gcode'},
        {match: '[gG][0-9]{1,3}(\\.[0-9])?', name: 'markup.bold.gcode'}
      ]
    },
    macrovars: {patterns: [{match: '[#][0-9]*', name: 'variable.other.gcode'}]},
    mcodes: {
      patterns: [
        {
          match: '[mM][0-9]{1,3}',
          name: 'keyword.operator.quantifier.regexp.gcode'
        }
      ]
    },
    modifiers: {
      patterns: [
        {
          match: '([iIjJkK])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]))',
          name: 'constant.character.escape.gcode'
        },
        {
          match: '([qQrR])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]]))',
          name: 'support.constant.math.gcode'
        },
        {
          match: '([uUwW])(\\-?\\d*\\.?\\d+\\.?|\\-?\\.?(?=[#\\[]]))',
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
        {match: '(^[nN])(\\d+)', name: 'constant.numeric.gcode'},
        {match: '(^[oO])(\\d+)?', name: 'string.regexp.gcode'},
        {
          match: '([pP])\\s?(\\d?\\.?\\d+\\.?|\\.?(?=[#\\[]))',
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
        {match: '([sS])\\s?(\\d+|(?=[#\\[]))', name: 'constant.language.gcode'},
        {
          match: '([eEfF])\\s?\\.?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.language.gcode'
        }
      ]
    },
    tools: {
      patterns: [
        {
          match: '([dD])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '([hH])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '([tT])\\s?(\\d+(\\.\\d*)?|(?=[#\\[]))',
          name: 'constant.character.gcode'
        }
      ]
    }
  },
  scopeName: 'source.gcode'
}

export default grammar
