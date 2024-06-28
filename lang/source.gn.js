// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/devoncarew/language-gn>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gn', '.gni'],
  names: ['gn'],
  patterns: [{include: '#main'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.begin.bracket.square.gn'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.end.bracket.square.gn'}},
      name: 'meta.array.gn',
      patterns: [
        {include: '$self'},
        {match: '\\w+', name: 'variable.reference.gn'}
      ]
    },
    brackets: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.begin.bracket.round.gn'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.end.bracket.round.gn'}},
      patterns: [
        {include: '$self'},
        {match: '\\w+', name: 'variable.reference.gn'}
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.gn'}},
      end: '$',
      name: 'comment.line.number-sign.gn',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.section.begin.bracket.round.todo'},
            2: {name: 'storage.type.class.assignee.todo'},
            3: {name: 'punctuation.section.end.bracket.round.todo'}
          },
          match: '(?<=TODO)(\\()\\s*(\\w+)\\s*(\\))\\s*:'
        }
      ]
    },
    condition: {
      begin: '(if|else)\\s*(?=\\()',
      beginCaptures: {1: {name: 'keyword.control.$1.gn'}},
      end: '(?<=\\))',
      name: 'meta.condition.gn',
      patterns: [
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.condition.begin.bracket.round.gn'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.condition.end.bracket.round.gn'}
          },
          patterns: [
            {include: '$self'},
            {match: '\\w+', name: 'variable.reference.gn'}
          ]
        }
      ]
    },
    'function-call': {
      begin: '\\s*(?!if|else|foreach|true|false)(\\w+)\\s*(?=\\()',
      beginCaptures: {1: {name: 'entity.name.function.gn'}},
      end: '(?<=\\))',
      name: 'meta.function-call.gn',
      patterns: [
        {
          begin: '\\G\\(',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.parameters.begin.bracket.round.gn'
            }
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.bracket.round.gn'}
          },
          name: 'meta.parameters.gn',
          patterns: [
            {include: '$self'},
            {match: '\\w+', name: 'variable.argument.parameter.gn'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(true|false)\\b', name: 'constant.language.boolean.$1.gn'},
        {match: '\\b(if|else|foreach)\\b', name: 'keyword.control.$1.gn'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#number'},
        {include: '#condition'},
        {include: '#function-call'},
        {include: '#keywords'},
        {include: '#string'},
        {include: '#variable'},
        {include: '#operators'},
        {include: '#array'},
        {include: '#brackets'},
        {include: '#separators'},
        {include: '#scope'}
      ]
    },
    number: {
      patterns: [
        {match: '-0+|0+(?=[1-9])', name: 'invalid.illegal.number.gn'},
        {match: '-?\\d+', name: 'constant.numeric.gn'}
      ]
    },
    operators: {
      patterns: [
        {match: '==|!=|[><]=?', name: 'keyword.operator.comparison.gn'},
        {match: '!|[|&]{2}', name: 'keyword.operator.logical.gn'},
        {match: '[-+]?=', name: 'keyword.operator.assignment.gn'},
        {match: '-|\\+', name: 'keyword.operator.arithmetic.gn'}
      ]
    },
    scope: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.scope.begin.bracket.curly.gn'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.scope.begin.bracket.curly.gn'}},
      name: 'meta.scope.gn',
      patterns: [{include: '$self'}]
    },
    separators: {
      patterns: [
        {match: ',', name: 'punctuation.separator.list.comma.gn'},
        {match: '\\.', name: 'punctuation.delimiter.property.period.gn'}
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gn'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.gn'}},
      name: 'string.quoted.double.gn',
      patterns: [
        {match: '\\\\["$\\\\]', name: 'constant.character.escape.gn'},
        {
          match: '\\$0x[0-9A-Fa-f]{2}',
          name: 'constant.character.escape.hex.gn'
        },
        {match: ':(?=\\w+")', name: 'punctuation.separator.build-path.gn'},
        {match: '\\G//', name: 'punctuation.definition.build-path.gn'},
        {
          begin: '\\${',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.gn'}},
          contentName: 'variable.interpolated.embedded.gn',
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.gn'}},
          name: 'source.gn.embedded'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.embedded.gn'}},
          match: '(\\$)\\w+',
          name: 'variable.interpolated.embedded.gn'
        }
      ]
    },
    variable: {
      patterns: [
        {
          match: '\\w+(?=\\s*[-+]?=|\\s*[\\[.])',
          name: 'variable.assignment.gn'
        },
        {
          captures: {1: {name: 'variable.reference.gn'}},
          match: '(?<==)\\s*(?!\\d|if|else|foreach|true|false)(\\w+)\\s*(?!\\()'
        }
      ]
    }
  },
  scopeName: 'source.gn'
}

export default grammar
