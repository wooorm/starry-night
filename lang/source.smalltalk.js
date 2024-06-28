// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.st', '.ston'],
  names: ['smalltalk', 'squeak', 'ston'],
  patterns: [
    {match: '\\b(class)\\b', name: 'storage.type.$1.smalltalk'},
    {match: '\\b(extend|super|self)\\b', name: 'storage.modifier.$1.smalltalk'},
    {
      match: '\\b(yourself|new|Smalltalk)\\b',
      name: 'keyword.control.$1.smalltalk'
    },
    {match: ':=', name: 'keyword.operator.assignment.smalltalk'},
    {match: '/^:\\w*\\s*\\|/', name: 'constant.other.block.smalltalk'},
    {
      captures: {
        1: {name: 'punctuation.definition.instance-variables.begin.smalltalk'},
        2: {
          patterns: [
            {match: '\\w+', name: 'support.type.variable.declaration.smalltalk'}
          ]
        },
        3: {name: 'punctuation.definition.instance-variables.end.smalltalk'}
      },
      match: '(\\|)(\\s*\\w[\\w ]*)(\\|)'
    },
    {
      captures: {
        1: {
          patterns: [
            {match: ':\\w+', name: 'entity.name.function.block.smalltalk'}
          ]
        }
      },
      match: '\\[((\\s+|:\\w+)*)\\|'
    },
    {
      match: '<(?!<|=)|>(?!<|=|>)|<=|>=|=|==|~=|~~|>>|\\^',
      name: 'keyword.operator.comparison.smalltalk'
    },
    {
      match: '(\\*|\\+|\\-|/|\\\\)',
      name: 'keyword.operator.arithmetic.smalltalk'
    },
    {
      match: '(?<=[ \\t])!+|\\bnot\\b|&|\\band\\b|\\||\\bor\\b',
      name: 'keyword.operator.logical.smalltalk'
    },
    {
      match: '(?<!\\.)\\b(ensure|resume|retry|signal)\\b(?![?!])',
      name: 'keyword.control.smalltalk'
    },
    {
      match: 'ifCurtailed:|ifTrue:|ifFalse:|whileFalse:|whileTrue:',
      name: 'keyword.control.conditionals.smalltalk'
    },
    {
      captures: {
        1: {name: 'entity.other.inherited-class.smalltalk'},
        3: {name: 'keyword.control.smalltalk'},
        4: {name: 'entity.name.type.class.smalltalk'}
      },
      match: '(\\w+)(\\s+(subclass:))\\s*(\\w*)',
      name: 'meta.class.smalltalk'
    },
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.smalltalk'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.smalltalk'}},
      name: 'comment.block.smalltalk'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language.boolean.smalltalk'},
    {match: '\\b(nil)\\b', name: 'constant.language.nil.smalltalk'},
    {
      captures: {1: {name: 'punctuation.definition.constant.smalltalk'}},
      match: '(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)',
      name: 'constant.other.messages.smalltalk'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.smalltalk'}},
      match: '(#)[a-zA-Z_][a-zA-Z0-9_:]*',
      name: 'constant.other.symbol.smalltalk'
    },
    {
      begin: '#\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.constant.begin.smalltalk'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.constant.end.smalltalk'}},
      name: 'constant.other.bytearray.smalltalk'
    },
    {
      begin: '#\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.constant.begin.smalltalk'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.constant.end.smalltalk'}},
      name: 'constant.other.array.smalltalk'
    },
    {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.smalltalk'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.smalltalk'}},
      name: 'string.quoted.single.smalltalk'
    },
    {
      match:
        '\\b(0[xX][0-9A-Fa-f](?>_?[0-9A-Fa-f])*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0[bB][01]+)\\b',
      name: 'constant.numeric.smalltalk'
    },
    {match: '\\b[A-Z]\\w*\\b', name: 'variable.other.constant.smalltalk'}
  ],
  scopeName: 'source.smalltalk'
}

export default grammar
