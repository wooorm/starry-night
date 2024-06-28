// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/luisgbr1el/portugol-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.por'],
  names: ['portugol'],
  patterns: [
    {begin: '/\\*', end: '\\*/', name: 'comment.block.portugol'},
    {match: '//.*', name: 'comment.double-slash.portugol'},
    {begin: '"', end: '"', name: 'string.quoted.double.portugol'},
    {begin: "'", end: "'", name: 'string.quoted.single.portugol'},
    {
      match: '\\b(para|caso|continue|senao|para|se|escolha|enquanto|e|ou)\\b',
      name: 'keyword.control.portugol'
    },
    {
      match: '\\b(inclua|biblioteca|programa)\\b',
      name: 'keyword.other.portugol'
    },
    {
      match: '\\b(=|!|<|>|&|\\+|raiz|sen|cos|mod|div|-|\\^|\\*|\\/|\\|)\\b',
      name: 'keyword.operator.new.portugol'
    },
    {match: '\\b(\\d+|\\d+.?(f)?)\\b', name: 'constant.numeric.portugol'},
    {
      match: '(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b(?!.*?(?<!@){)',
      name: 'constant.rgb-value.portugol'
    },
    {
      match: '\\b(falso|NULL|verdadeiro)\\b',
      name: 'constant.language.portugol'
    },
    {match: '\\b(enum|struct|state|array)\\b', name: 'storage.type.portugol'},
    {match: '\\b(this|parent|super)\\b', name: 'variable.language.portugol'},
    {
      begin: '(funcao)\\s*(\\/\\*.*\\*\\/)?\\s*(\\w+)\\s*\\(',
      beginCaptures: {
        1: {name: 'support.type.portugol'},
        2: {name: 'comment.block.portugol'},
        3: {name: 'support.function.portugol'}
      },
      end: '\\)(\\s*:\\s*(array\\s*<\\s*\\w+\\s*>|\\w*))?',
      endCaptures: {2: {patterns: [{include: '#witcherscript-var-types'}]}},
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.portugol'},
            2: {name: 'support.variable.portugol'},
            3: {patterns: [{include: '#witcherscript-var-types'}]}
          },
          match:
            '\\s*(out|optional)?\\s*(\\w+)\\s*:\\s*(array\\s*<\\s*\\w+\\s*>|\\w*|),?'
        }
      ]
    },
    {
      begin: '\\b(variavel)\\b\\s*',
      beginCaptures: {1: {name: 'storage.type.portugol'}},
      end: ':\\s*(array\\s*<\\s*\\w+\\s*>|\\w*)\\s*;',
      endCaptures: {1: {patterns: [{include: '#witcherscript-var-types'}]}},
      patterns: [{match: '(\\w+)\\s*,?', name: 'support.variable.portugol'}]
    },
    {
      captures: {
        1: {name: 'keyword.control.portugol'},
        2: {name: 'support.variable'}
      },
      match: '(default)\\s*(\\w+)'
    },
    {
      captures: {
        1: {name: 'keyword.other.portugol'},
        2: {name: 'support.class.portugol'}
      },
      match: '(escreva|leia)\\s*(\\w*)'
    },
    {
      captures: {1: {name: 'support.class.portugol'}},
      match: '\\(\\s*(\\s*[A-Z]\\w+\\s*)\\s*\\)\\s*\\('
    },
    {
      captures: {1: {name: 'support.class.portugol'}},
      match: '\\(\\s*\\(\\s*([A-Z]\\w+)\\s*\\)'
    },
    {
      captures: {
        1: {name: 'variable.language.portugol'},
        2: {name: 'support.class.portugol'},
        3: {name: 'variable.language.portugol'},
        4: {name: 'variable.language.portugol'}
      },
      match: '(novo|nova)\\s*(\\w+)\\s*(in)\\s*(this)'
    },
    {include: '#witcherscript-data-types'}
  ],
  repository: {
    'witcherscript-data-types': {
      patterns: [
        {
          match: '\\b(cadeia|inteiro|caractere|logico|real)\\b',
          name: 'storage.type.portugol'
        }
      ]
    },
    'witcherscript-object-types': {
      patterns: [{match: '[A-Z]\\w+', name: 'support.class.portugol'}]
    },
    'witcherscript-var-types': {
      patterns: [
        {include: '#witcherscript-object-types'},
        {
          captures: {
            1: {name: 'storage.type.portugol'},
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
  scopeName: 'source.portugol'
}

export default grammar
