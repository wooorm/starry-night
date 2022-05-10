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
        {include: '#bracket-expression'},
        {include: '#keywords'},
        {include: '#operators'},
        {include: '#speedsfeeds'},
        {include: '#prognumbers'},
        {include: '#coords'},
        {include: '#tools'},
        {include: '#modifiers'},
        {include: '#macrovars'}
      ]
    },
    'bracket-expression': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.paren.open'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.paren.close'}},
      name: 'expression.group',
      patterns: [{include: '#all'}]
    },
    comments: {
      patterns: [
        {match: '(\\(.+\\))', name: 'comment.gcode'},
        {begin: ';', end: '\\n', name: 'comment.gcode'}
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
    keywords: {
      patterns: [
        {
          match:
            '(GOTO(?>\\d+))|(IF)|(EQ)|(NE)|(LT)|(GT)|(LE)|(GE)|(DO ?(?>\\d+))|(WHILE)|(WH)|(END ?(?>\\d+))|(AND)|(OR)|(XOR)|(THEN)|(ELSE)|(ENDIF)',
          name: 'keyword.control.gcode'
        },
        {
          match: '[gG](1)?5[4-9](.1)?\\s?(P[0-9]{1,3})?',
          name: 'constant.numeric.gcode'
        },
        {match: '[gG]1[1-2][0-9]', name: 'constant.numeric.gcode'},
        {match: '[gG]15\\s?(H[0-9]{1,2})?', name: 'constant.numeric.gcode'},
        {match: '[gG][0-9]{1,3}(\\.[0-9])?', name: 'markup.bold.gcode'},
        {
          match: '[mM][0-9]{1,3}',
          name: 'keyword.operator.quantifier.regexp.gcode'
        },
        {match: '([\\%])', name: 'string.gcode'}
      ]
    },
    macrovars: {
      patterns: [
        {match: '[#][0-9]+', name: 'variable.other.gcode'},
        {match: '[#][\\[].+[\\]]', name: 'variable.other.gcode'}
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
          match:
            '(SIN)|(COS)|(TAN)|(ASIN)|(ACOS)|(ATAN)|(FIX)|(FUP)|(LN)|(ROUND)|(SQRT)',
          name: 'support.constant.math.gcode'
        },
        {
          match: '(FIX)|(FUP)|(ROUND)|(ABS)|(MOD)',
          name: 'support.constant.math.gcode'
        },
        {
          match: '(\\+)|(\\*)|(\\/)|(\\*\\*)',
          name: 'support.constant.math.gcode'
        },
        {match: '(\\-)', name: 'invalid.gcode'}
      ]
    },
    prognumbers: {
      patterns: [
        {match: '(^[nN])(\\d+)', name: 'constant.numeric.gcode'},
        {match: '(^[oO])(\\d+)', name: 'string.regexp.gcode'},
        {
          match: '([pP])\\s?(\\d?\\.?\\d+\\.?|\\.?(?=[#\\[]))',
          name: 'string.regexp.gcode'
        }
      ]
    },
    speedsfeeds: {
      patterns: [
        {match: '([sS])\\s?(\\d+|(?=[#\\[]))', name: 'constant.language.gcode'},
        {
          match: '([eEfF])\\s?(\\d*\\.?\\d+\\.?|\\.?(?=[#\\[]))',
          name: 'constant.language.gcode'
        }
      ]
    },
    tools: {
      patterns: [
        {
          match: '([dD])\\s?(\\d*\\.?\\d*|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '([hH])\\s?(\\d*\\.?\\d*|(?=[#\\[]))',
          name: 'constant.character.gcode'
        },
        {
          match: '([tT])\\s?(\\d*\\.?\\d*|(?=[#\\[]))',
          name: 'constant.character.gcode'
        }
      ]
    }
  },
  scopeName: 'source.gcode'
}

export default grammar
