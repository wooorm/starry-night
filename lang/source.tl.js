// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tl'],
  names: ['type-language', 'tl'],
  patterns: [
    {include: '#comments'},
    {include: '#triple-statement'},
    {include: '#combinator-declaration'}
  ],
  repository: {
    'combinator-args': {patterns: [{include: '#combinator-args-member'}]},
    'combinator-args-member': {
      begin:
        '([_$[:alpha:]][_$[:alnum:]]*)(\\:)(([_$[:alpha:]][_$[:alnum:]]*)|(#))',
      beginCaptures: {
        1: {name: 'meta.definition.combinator.arg.tl variable.other.tl'},
        2: {name: 'punctuation.separator.key-value.tl'},
        4: {name: 'entity.name.type.tl'},
        5: {name: 'keyword.other.hash.tl'}
      },
      name: 'meta.combinator.arg.tl'
    },
    'combinator-declaration': {
      patterns: [
        {include: '#combinator-declaration-with-hash'},
        {include: '#combinator-declaration-without-hash'}
      ]
    },
    'combinator-declaration-with-hash': {
      begin: '(([_$\\w]+)(\\b\\.))?([_$\\w]*)(\\b#)([[:alpha:][:alnum:]]*)\\s*',
      beginCaptures: {
        2: {name: 'meta.definition.combinator.tl variable.other.tl'},
        4: {name: 'meta.definition.combinator.tl variable.other.tl'},
        5: {name: 'storage.type.tl'},
        6: {name: 'storage.type.tl'}
      },
      end: '\\;\\s*',
      name: 'meta.combinator.declaration.tl',
      patterns: [
        {match: '\\.', name: 'punctuation.namespace.tl'},
        {include: '#keywords'},
        {include: '#comments'},
        {include: '#combinator-opt-args'},
        {include: '#combinator-args'},
        {include: '#combinator-result-type'},
        {
          captures: {1: {name: 'keyword.operator.assignment.tl'}},
          match: '(=)\\s*'
        }
      ]
    },
    'combinator-declaration-without-hash': {
      begin: '(([_$\\w]+)(\b\\.))?([_$\\w]*)(?= )',
      beginCaptures: {
        2: {name: 'meta.definition.combinator.tl variable.other.tl'},
        4: {name: 'meta.definition.combinator.tl variable.other.tl'}
      },
      end: '\\;\\s*',
      name: 'meta.combinator.declaration.tl',
      patterns: [
        {match: '\\.', name: 'punctuation.namespace.tl'},
        {include: '#keywords'},
        {include: '#comments'},
        {include: '#combinator-opt-args'},
        {include: '#combinator-args'},
        {include: '#combinator-result-type'},
        {
          captures: {1: {name: 'keyword.operator.assignment.tl'}},
          match: '(=)\\s*'
        }
      ]
    },
    'combinator-opt-args': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.tl'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.tl'}},
      name: 'meta.object.type.tl',
      patterns: [{include: '#combinator-args-member'}]
    },
    'combinator-result-type': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.module.tl'},
            2: {name: 'punctuation.accessor.tl'}
          },
          match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)'
        },
        {match: '[_$[:alpha:]][_$[:alnum:]]*', name: 'entity.name.type.tl'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*\\*',
          captures: {0: {name: 'punctuation.definition.comment.tl'}},
          end: '\\*/',
          name: 'comment.block.documentation.tl'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.tl'}},
          end: '\\*/',
          name: 'comment.block.tl'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.tl'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.tl'
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\#', name: 'keyword.other.hash.tl'},
        {match: '\\?', name: 'keyword.other.questionmark.tl'},
        {match: '\\%', name: 'keyword.other.percent.tl'}
      ]
    },
    'triple-statement': {
      patterns: [
        {
          begin: '\\-\\-\\-',
          beginCaptures: {0: {name: 'punctuation.triple.open.tl'}},
          end: '\\-\\-\\-',
          endCaptures: {0: {name: 'punctuation.triple.close.tl'}},
          name: 'keyword.control.triple.tl',
          patterns: [
            {
              match: '\\b(types|functions)\\b',
              name: 'keyword.control.triple.name.tl'
            },
            {match: '\\b(.*)\\b', name: 'invalid.illegal'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.tl'
}

export default grammar
