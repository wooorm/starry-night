// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/animecyc/AtomLanguageVelocity>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vtl'],
  names: ['velocity-template-language', 'vtl', 'velocity'],
  patterns: [
    {include: '#operators'},
    {include: '#comments'},
    {include: '#constants'},
    {include: '#blocks'},
    {include: '#variables'}
  ],
  repository: {
    blocks: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          patterns: [
            {include: '#strings_double_quote'},
            {include: '#strings_single_quote'},
            {include: '$self'}
          ]
        },
        {
          captures: {1: {name: 'keyword.control.velocity'}},
          match:
            '(#\\{?(?:set|foreach|if|else(?:if)?|define|end|include|parse|evaluate|stop|break)\\}?)'
        },
        {
          captures: {
            1: {name: 'keyword.control.velocity'},
            2: {name: 'entity.name.function.velocity'}
          },
          match: '(#macro)[\\s]?\\([\\s]?([a-zA-Z_]*)'
        },
        {
          match: '#@?([a-zA-Z_][a-zA-Z0-9_]*)',
          name: 'entity.name.function.velocity'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '#\\*\\*(?!#)',
          captures: {0: {name: 'punctuation.definition.comment.velocity'}},
          end: '\\*#',
          name: 'punctuation.definition.comment.velocity',
          patterns: [
            {
              captures: {
                1: {name: 'keyword.other.documentation.param.javadoc'},
                2: {name: 'punctuation.definition.keyword.javadoc'}
              },
              match: '\\*\\s+?(?:(@)([a-zA-Z]*))\\s'
            }
          ]
        },
        {
          begin: '#\\*',
          captures: {0: {name: 'punctuation.definition.comment.velocity'}},
          end: '\\*#',
          name: 'punctuation.definition.comment.velocity'
        },
        {match: '##(.+)?', name: 'punctuation.definition.comment.velocity'}
      ]
    },
    constants: {
      patterns: [
        {match: '(false|true)', name: 'constant.language.java'},
        {
          match:
            '((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)',
          name: 'constant.numeric.java'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.java'},
        {match: '(\\-|\\+|\\*|/|%)', name: 'keyword.operator.arithmetic.java'},
        {
          match: '(==|!=|<=|>=|<[^a-zA-Z/]|[^a-zA-Z/]>|<>)',
          name: 'keyword.operator.comparison.java'
        },
        {match: '(=|\\s+in\\s+)', name: 'keyword.operator.assignment.java'}
      ]
    },
    strings_double_quote: {
      patterns: [
        {
          begin: '\\"',
          end: '\\"',
          name: 'string.quoted.double.velocity',
          patterns: [
            {match: '\\\\"', name: 'constant.character.escape.velocity'},
            {include: '#variables'}
          ]
        }
      ]
    },
    strings_single_quote: {
      patterns: [
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.velocity',
          patterns: [{match: "\\'", name: 'constant.character.escape.velocity'}]
        }
      ]
    },
    variables: {
      patterns: [
        {
          begin: '\\$(!?)\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.variable.velocity'},
            1: {name: 'keyword.operator.silent'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.variable.velocity'}},
          patterns: [
            {
              captures: {
                1: {name: 'variable.other.velocity'},
                2: {name: 'keyword.operator.dereference.velocity'},
                3: {name: 'entity.name.function.velocity'},
                4: {name: 'entity.other.attribute-name.velocity'}
              },
              match:
                '(?:([a-zA-Z_][a-zA-Z_\\-0-9]*)|(\\.)(?:((?:[a-zA-Z_][a-zA-Z_\\-0-9]*)(?=\\())|((?:[a-zA-Z_][a-zA-Z_\\-0-9]*))))'
            },
            {
              begin: '\\(',
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.method-parameters.begin.velocity'
                }
              },
              end: '\\)',
              endCaptures: {
                0: {
                  name: 'punctuation.definition.method-parameters.end.velocity'
                }
              },
              patterns: [
                {include: '#strings_double_quote'},
                {include: '#strings_single_quote'},
                {include: '$self'}
              ]
            }
          ]
        },
        {
          match:
            '((\\$)[a-zA-Z][a-zA-Z0-9_]*)\\b(?:((\\.)[a-zA-Z][a-zA-Z0-9]*))*',
          name: 'variable.other.velocity'
        },
        {
          match: '\\$[a-zA-Z\\-_][a-zA-Z\\-_0-9]*',
          name: 'variable.other.velocity'
        }
      ]
    }
  },
  scopeName: 'source.velocity'
}

export default grammar
