// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ADawesomeguy/witcherscript-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ws'],
  names: ['witcher-script'],
  patterns: [
    {begin: '/\\*', end: '\\*/', name: 'comment.block.witcherscript'},
    {match: '//.*', name: 'comment.double-slash.witcherscript'},
    {begin: '"', end: '"', name: 'string.quoted.double.witcherscript'},
    {begin: "'", end: "'", name: 'string.quoted.single.witcherscript'},
    {
      match: '\\b(break|case|continue|else|for|if|return|switch|while)\\b',
      name: 'keyword.control.witcherscript'
    },
    {
      match:
        '\\b(out|inlined|autobind|editable|entry|exec|hint|import|latent|optional|out|quest|saved|statemachine|timer)\\b',
      name: 'keyword.other.witcherscript'
    },
    {
      match: '\\b(=|!|<|>|&|\\+|-|\\^|\\*|\\/|\\|)\\b',
      name: 'keyword.operator.new.witcherscript'
    },
    {match: '\\b(\\d+|\\d+.?(f)?)\\b', name: 'constant.numeric.witcherscript'},
    {
      match: '(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b(?!.*?(?<!@){)',
      name: 'constant.rgb-value.witcherscript'
    },
    {match: '\\b(false|NULL|true)\\b', name: 'constant.language.witcherscript'},
    {
      match: '\\b(enum|struct|state|array)\\b',
      name: 'storage.type.witcherscript'
    },
    {
      match: '\\b(abstract|const|final|private|protected|public)\\b',
      name: 'storage.modifier.witcherscript'
    },
    {
      match: '\\b(theGame|theInput|thePlayer|theSound)\\b',
      name: 'support.class.witcherscript'
    },
    {
      match: '\\b(this|parent|super)\\b',
      name: 'variable.language.witcherscript'
    },
    {
      begin: '(function|event)\\s*(\\/\\*.*\\*\\/)?\\s*(\\w+)\\s*\\(',
      beginCaptures: {
        1: {name: 'support.type.witcherscript'},
        2: {name: 'comment.block.witcherscript'},
        3: {name: 'support.function.witcherscript'}
      },
      end: '\\)(\\s*:\\s*(array\\s*<\\s*\\w+\\s*>|\\w*))?',
      endCaptures: {2: {patterns: [{include: '#witcherscript-var-types'}]}},
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.witcherscript'},
            2: {name: 'support.variable.witcherscript'},
            3: {patterns: [{include: '#witcherscript-var-types'}]}
          },
          match:
            '\\s*(out|optional)?\\s*(\\w+)\\s*:\\s*(array\\s*<\\s*\\w+\\s*>|\\w*|),?'
        }
      ]
    },
    {
      begin: '\\b(var)\\b\\s*',
      beginCaptures: {1: {name: 'storage.type.witcherscript'}},
      end: ':\\s*(array\\s*<\\s*\\w+\\s*>|\\w*)\\s*;',
      endCaptures: {1: {patterns: [{include: '#witcherscript-var-types'}]}},
      patterns: [
        {match: '(\\w+)\\s*,?', name: 'support.variable.witcherscript'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.control.witcherscript'},
        2: {name: 'support.variable'}
      },
      match: '(default)\\s*(\\w+)'
    },
    {
      captures: {
        1: {name: 'keyword.other.witcherscript'},
        2: {name: 'support.class.witcherscript'}
      },
      match: '(extends|class)\\s*(\\w*)'
    },
    {
      captures: {1: {name: 'support.class.witcherscript'}},
      match: '\\(\\s*(\\s*[A-Z]\\w+\\s*)\\s*\\)\\s*\\('
    },
    {
      captures: {1: {name: 'support.class.witcherscript'}},
      match: '\\(\\s*\\(\\s*([A-Z]\\w+)\\s*\\)'
    },
    {
      captures: {
        1: {name: 'variable.language.witcherscript'},
        2: {name: 'support.class.witcherscript'},
        3: {name: 'variable.language.witcherscript'},
        4: {name: 'variable.language.witcherscript'}
      },
      match: '(new)\\s*(\\w+)\\s*(in)\\s*(this)'
    },
    {include: '#witcherscript-data-types'}
  ],
  repository: {
    'witcherscript-data-types': {
      patterns: [
        {
          match: '\\b(string|int|integer|bool|float|name|range)\\b',
          name: 'storage.type.witcherscript'
        }
      ]
    },
    'witcherscript-object-types': {
      patterns: [{match: '[A-Z]\\w+', name: 'support.class.witcherscript'}]
    },
    'witcherscript-var-types': {
      patterns: [
        {include: '#witcherscript-object-types'},
        {
          captures: {
            1: {name: 'storage.type.witcherscript'},
            2: {
              patterns: [
                {include: '#witcherscript-object-types'},
                {include: '#witcherscript-data-types'}
              ]
            }
          },
          match: '(array)\\s*<\\s*(\\w+)\\s*>'
        },
        {include: '#witcherscript-data-types'}
      ]
    }
  },
  scopeName: 'source.witcherscript'
}

export default grammar
