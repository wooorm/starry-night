// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/joshraphael/rascript-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rascript'],
  names: ['rascript'],
  patterns: [{include: '#statements'}],
  repository: {
    booleans: {
      patterns: [
        {
          match: '\\b(true|false)\\b',
          name: 'constant.language.boolean.rascript'
        }
      ]
    },
    'class-definitions': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.class.rascript'},
            3: {name: 'entity.name.class.rascript'},
            4: {name: 'invalid.illegal.identifier.rascript'}
          },
          match: '(\\bclass\\b)[\\t ]*(([a-zA-Z_][\\w]*)|(.+))'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {
            0: {name: 'punctuation.definition.comment.block.rascript'}
          },
          end: '\\*/',
          name: 'comment.block.rascript'
        },
        {
          begin: '//',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.single.rascript'}
          },
          end: '$',
          name: 'comment.line.double-slash.rascript'
        }
      ]
    },
    controls: {
      patterns: [
        {
          match: '\\b(if|else|for|in|return)\\b',
          name: 'keyword.control.rascript'
        }
      ]
    },
    'function-definitions': {
      patterns: [
        {
          begin: '(\\bfunction\\b)[\\t ]*(([a-zA-Z_][\\w]*)|(.+))\\(',
          beginCaptures: {
            1: {name: 'keyword.function.rascript'},
            3: {name: 'entity.name.function.rascript'},
            4: {name: 'invalid.illegal.identifier.rascript'}
          },
          end: '\\)',
          patterns: [
            {
              match: '(?:[\\w]+\\s+[\\w]+)',
              name: 'invalid.illegal.identifier.rascript'
            },
            {
              match:
                '(?:[^\\s\\,!]*[\\%\\!\\@\\#\\$\\%\\^\\&\\*\\-\\=\\+\\[\\]\\{\\}\\;\\:\\\'"\\.\\<\\>\\/\\?]+[^\\s\\,]*)',
              name: 'invalid.illegal.identifier.rascript'
            },
            {match: '(?:[a-zA-Z_][\\w]*)', name: 'variable.parameter.rascript'},
            {match: '(?:\\w+)', name: 'invalid.illegal.identifier.rascript'}
          ]
        }
      ]
    },
    'function-names': {
      patterns: [
        {
          captures: {
            2: {name: 'invalid.illegal.identifier.rascript'},
            3: {name: 'entity.name.function.rascript'}
          },
          match: '(([0-9][\\w+]*)|(\\w+))\\('
        }
      ]
    },
    header: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.id.rascript'},
            2: {name: 'constant.numeric.id.rascript'}
          },
          match: '^//\\s*(#ID)\\s*=\\s*(\\d+)$',
          name: 'comment.line.double-slash.rascript'
        },
        {
          captures: {
            1: {name: 'keyword.other.version.rascript'},
            2: {name: 'constant.numeric.version.rascript'}
          },
          match: '^//\\s*(#MinimumVersion)\\s*=\\s*(\\d+(\\.\\d)?)$',
          name: 'comment.line.double-slash.rascript'
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b[0-9]+\\b', name: 'constant.numeric.decimal.rascript'},
        {
          match: '(?i)\\$\\b[[:xdigit:]]+\\b|\\b0x[[:xdigit:]]+\\b',
          name: 'constant.numeric.hexadecimal.rascript'
        }
      ]
    },
    statements: {
      patterns: [
        {include: '#controls'},
        {include: '#booleans'},
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#class-definitions'},
        {include: '#function-definitions'},
        {include: '#function-names'},
        {include: '#header'},
        {include: '#comments'},
        {include: '#variable-language-this'},
        {include: '#variable-assignment'},
        {include: '#variable-other'}
      ]
    },
    strings: {
      patterns: [{match: '(?:".*?")', name: 'string.quoted.double.rascript'}]
    },
    'variable-assignment': {
      patterns: [
        {
          captures: {1: {name: 'variable.other.assignment.rascript'}},
          match: '([a-zA-Z_][\\w]*)[\\t ]*='
        }
      ]
    },
    'variable-language-this': {
      patterns: [
        {match: '\\b(this)\\b', name: 'variable.language.this.rascript'}
      ]
    },
    'variable-other': {
      patterns: [
        {
          captures: {1: {name: 'variable.other.rascript'}},
          match: '([a-zA-Z_][\\w]*)'
        }
      ]
    }
  },
  scopeName: 'source.rascript'
}

export default grammar
