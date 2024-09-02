// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/osohq/polar-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.polar'],
  names: ['polar'],
  patterns: [
    {include: '#comment'},
    {include: '#rule'},
    {include: '#rule-type'},
    {include: '#inline-query'},
    {include: '#resource-block'},
    {include: '#test-block'}
  ],
  repository: {
    boolean: {match: '\\b(true|false)\\b', name: 'constant.language.boolean'},
    comment: {match: '#.*', name: 'comment.line.number-sign'},
    'inline-query': {
      begin: '\\?=',
      beginCaptures: {0: {name: 'keyword.control'}},
      end: ';',
      name: 'meta.inline-query',
      patterns: [{include: '#term'}]
    },
    keyword: {
      patterns: [
        {
          match:
            '\\b(cut|or|debug|print|in|forall|if|and|of|not|matches|type|on|global)\\b',
          name: 'constant.character'
        }
      ]
    },
    number: {
      patterns: [
        {
          match: '\\b[+-]?\\d+(?:(\\.)\\d+(?:e[+-]?\\d+)?|(?:e[+-]?\\d+))\\b',
          name: 'constant.numeric.float'
        },
        {match: '\\b(\\+|\\-)[\\d]+\\b', name: 'constant.numeric.integer'},
        {match: '\\b[\\d]+\\b', name: 'constant.numeric.natural'}
      ]
    },
    'object-literal': {
      begin: '([a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*)\\s*\\{',
      beginCaptures: {1: {name: 'entity.name.type.resource'}},
      end: '\\}',
      name: 'constant.other.object-literal',
      patterns: [
        {include: '#string'},
        {include: '#number'},
        {include: '#boolean'}
      ]
    },
    operator: {
      captures: {1: {name: 'keyword.control'}},
      match: '(\\+|-|\\*|\\/|<|>|=|!)'
    },
    'resource-block': {
      begin:
        '(?<resourceType>[a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*){0}((?:(resource|actor)\\s+(\\g<resourceType>)(?:\\s+(extends)\\s+(\\g<resourceType>(?:\\s*,\\s*\\g<resourceType>)*)\\s*,?\\s*)?)|(global))\\s*{',
      beginCaptures: {
        3: {name: 'keyword.control'},
        4: {name: 'entity.name.type'},
        5: {name: 'keyword.control'},
        6: {
          patterns: [
            {
              match: '([a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*)',
              name: 'entity.name.type'
            }
          ]
        },
        7: {name: 'keyword.control'}
      },
      end: '\\}',
      name: 'meta.resource-block',
      patterns: [
        {match: ';', name: 'punctuation.separator.sequence.declarations'},
        {
          begin: '\\{',
          end: '\\}',
          name: 'meta.relation-declaration',
          patterns: [
            {include: '#specializer'},
            {include: '#comment'},
            {match: ',', name: 'punctuation.separator.sequence.dict'}
          ]
        },
        {include: '#term'}
      ]
    },
    rule: {
      name: 'meta.rule',
      patterns: [
        {include: '#rule-functor'},
        {
          begin: '\\bif\\b',
          beginCaptures: {0: {name: 'keyword.control.if'}},
          end: ';',
          patterns: [{include: '#term'}]
        },
        {match: ';'}
      ]
    },
    'rule-functor': {
      begin: '([a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*)\\s*\\(',
      beginCaptures: {1: {name: 'support.function.rule'}},
      end: '\\)',
      patterns: [
        {include: '#specializer'},
        {match: ',', name: 'punctuation.separator.sequence.list'},
        {include: '#term'}
      ]
    },
    'rule-type': {
      begin: '\\btype\\b',
      beginCaptures: {0: {name: 'keyword.other.type-decl'}},
      end: ';',
      name: 'meta.rule-type',
      patterns: [{include: '#rule-functor'}]
    },
    specializer: {
      captures: {1: {name: 'entity.name.type.resource'}},
      match:
        '[a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*(?:::[a-zA-Z0-9_]+)*)'
    },
    string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double',
      patterns: [{match: '\\\\.', name: 'constant.character.escape'}]
    },
    term: {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#number'},
        {include: '#keyword'},
        {include: '#operator'},
        {include: '#boolean'},
        {include: '#object-literal'},
        {
          begin: '\\[',
          end: '\\]',
          name: 'meta.bracket.list',
          patterns: [
            {include: '#term'},
            {match: ',', name: 'punctuation.separator.sequence.list'}
          ]
        },
        {
          begin: '\\{',
          end: '\\}',
          name: 'meta.bracket.dict',
          patterns: [
            {include: '#term'},
            {match: ',', name: 'punctuation.separator.sequence.dict'}
          ]
        },
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.parens',
          patterns: [{include: '#term'}]
        }
      ]
    },
    'test-block': {
      begin: '(test)\\s+("[^"]*")\\s*\\{',
      beginCaptures: {
        1: {name: 'keyword.control'},
        2: {name: 'string.quoted.double'}
      },
      end: '\\}',
      name: 'meta.test-block',
      patterns: [
        {
          begin: '(setup)\\s*\\{',
          beginCaptures: {1: {name: 'keyword.control'}},
          end: '\\}',
          name: 'meta.test-setup',
          patterns: [{include: '#rule'}, {include: '#comment'}]
        },
        {include: '#rule'},
        {match: '\\b(assert|assert_not)\\b', name: 'keyword.other'},
        {include: '#comment'}
      ]
    }
  },
  scopeName: 'source.polar'
}

export default grammar
