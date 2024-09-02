// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/azure/bicep>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bicep', '.bicepparam'],
  names: ['bicep'],
  patterns: [{include: '#expression'}, {include: '#comments'}],
  repository: {
    'array-literal': {
      begin:
        '\\[(?!(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\bfor\\b)',
      end: ']',
      name: 'meta.array-literal.bicep',
      patterns: [{include: '#expression'}, {include: '#comments'}]
    },
    'block-comment': {begin: '/\\*', end: '\\*/', name: 'comment.block.bicep'},
    comments: {
      patterns: [{include: '#line-comment'}, {include: '#block-comment'}]
    },
    decorator: {
      begin:
        '@(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*(?=\\b[_$[:alpha:]][_$[:alnum:]]*\\b)',
      name: 'meta.decorator.bicep',
      patterns: [{include: '#expression'}, {include: '#comments'}]
    },
    directive: {
      begin: '#\\b[_a-zA-Z-0-9]+\\b',
      end: '$',
      name: 'meta.directive.bicep',
      patterns: [{include: '#directive-variable'}, {include: '#comments'}]
    },
    'directive-variable': {
      match: '\\b[_a-zA-Z-0-9]+\\b',
      name: 'keyword.control.declaration.bicep'
    },
    'escape-character': {
      match: "\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",
      name: 'constant.character.escape.bicep'
    },
    expression: {
      patterns: [
        {include: '#string-literal'},
        {include: '#string-verbatim'},
        {include: '#numeric-literal'},
        {include: '#named-literal'},
        {include: '#object-literal'},
        {include: '#array-literal'},
        {include: '#keyword'},
        {include: '#identifier'},
        {include: '#function-call'},
        {include: '#decorator'},
        {include: '#lambda-start'},
        {include: '#directive'}
      ]
    },
    'function-call': {
      begin:
        '(\\b[_$[:alpha:]][_$[:alnum:]]*\\b)(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\(',
      beginCaptures: {1: {name: 'entity.name.function.bicep'}},
      end: '\\)',
      name: 'meta.function-call.bicep',
      patterns: [{include: '#expression'}, {include: '#comments'}]
    },
    identifier: {
      match:
        '\\b[_$[:alpha:]][_$[:alnum:]]*\\b(?!(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\()',
      name: 'variable.other.readwrite.bicep'
    },
    keyword: {
      match:
        '\\b(metadata|targetScope|resource|module|param|var|output|for|in|if|existing|import|as|type|with|using|extends|func|assert|extension)\\b',
      name: 'keyword.control.declaration.bicep'
    },
    'lambda-start': {
      begin:
        '(\\((?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\b[_$[:alpha:]][_$[:alnum:]]*\\b(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*(,(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\b[_$[:alpha:]][_$[:alnum:]]*\\b(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*)*\\)|\\((?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\)|(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*\\b[_$[:alpha:]][_$[:alnum:]]*\\b(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*)(?=(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*=>)',
      beginCaptures: {
        1: {
          name: 'meta.undefined.bicep',
          patterns: [{include: '#identifier'}, {include: '#comments'}]
        }
      },
      end: '(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*=>',
      name: 'meta.lambda-start.bicep'
    },
    'line-comment': {
      match: '//.*(?=$)',
      name: 'comment.line.double-slash.bicep'
    },
    'named-literal': {
      match: '\\b(true|false|null)\\b',
      name: 'constant.language.bicep'
    },
    'numeric-literal': {match: '[0-9]+', name: 'constant.numeric.bicep'},
    'object-literal': {
      begin: '{',
      end: '}',
      name: 'meta.object-literal.bicep',
      patterns: [
        {include: '#object-property-key'},
        {include: '#expression'},
        {include: '#comments'}
      ]
    },
    'object-property-key': {
      match:
        '\\b[_$[:alpha:]][_$[:alnum:]]*\\b(?=(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*:)',
      name: 'variable.other.property.bicep'
    },
    'string-literal': {
      begin: "'(?!'')",
      end: "'",
      name: 'string.quoted.single.bicep',
      patterns: [
        {include: '#escape-character'},
        {include: '#string-literal-subst'}
      ]
    },
    'string-literal-subst': {
      begin: '(?<!\\\\)(\\${)',
      beginCaptures: {
        1: {name: 'punctuation.definition.template-expression.begin.bicep'}
      },
      end: '(})',
      endCaptures: {
        1: {name: 'punctuation.definition.template-expression.end.bicep'}
      },
      name: 'meta.string-literal-subst.bicep',
      patterns: [{include: '#expression'}, {include: '#comments'}]
    },
    'string-verbatim': {
      begin: "'''",
      end: "'''(?!')",
      name: 'string.quoted.multi.bicep'
    }
  },
  scopeName: 'source.bicep'
}

export default grammar
