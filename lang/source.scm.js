// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jrieken/vscode-tree-sitter-query>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['tree-sitter-query', 'tsq'],
  patterns: [{include: '#expression'}],
  repository: {
    'bracket-expression': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.paren.open'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.paren.close'}},
      name: 'expression.group',
      patterns: [{include: '#expression'}]
    },
    capture: {
      patterns: [
        {match: '\\@[a-zA-Z_.]+', name: 'variable.other.readwrite.scm'}
      ]
    },
    comment: {
      begin: ';;',
      beginCaptures: {0: {name: 'comment.line.scm'}},
      end: '\\n',
      name: 'comment.line.scm'
    },
    expression: {
      patterns: [
        {include: '#comment'},
        {include: '#field'},
        {include: '#capture'},
        {include: '#node'},
        {include: '#parent-expression'},
        {include: '#bracket-expression'}
      ]
    },
    field: {patterns: [{match: '[a-zA-Z_]+:', name: 'entity.name.scm'}]},
    node: {patterns: [{match: '[a-zA-Z_]+', name: 'node.scm'}]},
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.paren.open'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.paren.close'}},
      name: 'expression.group',
      patterns: [{include: '#expression'}]
    }
  },
  scopeName: 'source.scm'
}

export default grammar
