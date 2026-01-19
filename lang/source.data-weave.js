// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mulesoft-labs/data-weave-tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dwl'],
  names: ['dataweave'],
  patterns: [
    {include: '#namespace'},
    {include: '#comment'},
    {include: '#document'},
    {include: '#constant'},
    {include: '#keyword'},
    {include: '#directive'},
    {include: '#identifier'},
    {include: '#selector'}
  ],
  repository: {
    comment: {
      patterns: [
        {begin: '/\\*', end: '\\*/', name: 'comment.block.dw'},
        {
          captures: {
            1: {name: 'comment.line.double-slash.dw'},
            2: {name: 'punctuation.definition.comment.dw'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    constant: {
      patterns: [
        {include: '#regex'},
        {include: '#string-constants'},
        {include: '#number-constants'},
        {
          match: '(?<![[:alnum:]])(?:true|false|null)(?![[:alnum:]_])',
          name: 'constant.language.dw'
        }
      ]
    },
    directive: {
      patterns: [
        {
          begin: '(%dw)\\s+([0-9]+\\.[0-9]+)(?!\\$|\\.)',
          beginCaptures: {
            1: {name: 'keyword.directive.version.dw'},
            2: {name: 'constant.numeric.version.dw'}
          },
          end: '(?=\\n)',
          name: 'meta.directive.version.dw'
        },
        {
          match:
            '(?<![[:alnum:]_])(?:import|fun|ns|input|var|type|annotation|output|from)(?![[:alnum:]_])',
          name: 'storage.type.dw'
        }
      ]
    },
    document: {
      patterns: [{match: '(---)', name: 'keyword.operator.body-marker.dw'}]
    },
    identifier: {
      patterns: [
        {match: '[[:alpha:]][[:alnum:]_]*', name: 'entity.name.variable.dw'}
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '(?<![[:alnum:]])(?:if|else|unless|do|using|default|match|case|update)(?![[:alnum:]_])',
          name: 'keyword.control.dw'
        },
        {
          match: '(?<![[:alnum:]_])(?:and|or|not|as|is)(?![[:alnum:]_])',
          name: 'keyword.operator.dw'
        },
        {match: '(->)', name: 'keyword.operator.case.dw'},
        {match: '(<~)', name: 'keyword.operator.assignment.metadata.dw'},
        {
          match: '(~=|==|!=|!=|<=|>=|<|>)',
          name: 'keyword.operator.comparison.dw'
        },
        {match: '(=)', name: 'keyword.operator.assignment.dw'},
        {match: '(:)', name: 'keyword.operator.declaration.dw'},
        {match: '(\\-|\\+|\\*|\\/)', name: 'keyword.operator.arithmetic.dw'},
        {match: '\\?\\?\\?', name: 'keyword.operator.implement.dw'}
      ]
    },
    namespace: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.dw'},
            2: {name: 'entity.name.variable.dw'},
            3: {name: 'markup.underline.link'}
          },
          match: '(ns)\\s+([[:alpha:]][[:alnum:]_]*)\\s+([^\\s]*)'
        }
      ]
    },
    'number-constants': {
      patterns: [
        {
          match: '(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][0-9]*)?',
          name: 'constant.numeric.dw'
        }
      ]
    },
    regex: {patterns: [{match: '\\/.*\\/', name: 'string.regexp.dw'}]},
    selector: {
      patterns: [
        {match: '\\.\\.|\\.\\*|\\.\\^|\\.\\@|\\.', name: 'storage.type.dw'},
        {
          begin: '\\[',
          end: '\\]',
          name: 'storage.type.dw',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'string-constants': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.dw'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.dw'}},
          name: 'string.quoted.double.dw',
          patterns: [{include: '#string-interpolation'}]
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.dw'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.dw'}},
          name: 'string.quoted.single.dw',
          patterns: [{include: '#string-interpolation'}]
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.dw'}},
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.dw'}},
          name: 'string.quoted.backtick.dw',
          patterns: [{include: '#string-interpolation'}]
        }
      ]
    },
    'string-interpolation': {
      patterns: [
        {
          begin: '\\$\\(',
          beginCaptures: {0: {name: 'keyword.other.dw'}},
          end: '\\)',
          endCaptures: {0: {name: 'keyword.other.dw'}},
          patterns: [{include: '#selector'}, {include: '$self'}]
        },
        {
          captures: {
            1: {name: 'keyword.other.dw'},
            2: {name: 'entity.name.variable.dw'}
          },
          match: '(\\$)([[:alpha:]][[:alnum:]_]*)'
        }
      ]
    }
  },
  scopeName: 'source.data-weave'
}

export default grammar
