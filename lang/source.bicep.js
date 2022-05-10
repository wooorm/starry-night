// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/azure/bicep>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.bicep'],
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
        {include: '#decorator'}
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
        '\\b(targetScope|resource|module|param|var|output|for|in|if|existing|import|from)\\b',
      name: 'keyword.control.declaration.bicep'
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
      patterns: [{include: '#object-property'}, {include: '#comments'}]
    },
    'object-property': {
      begin: '(?<=^)(?!(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*})',
      end: '(?=$)',
      name: 'meta.object-property.bicep',
      patterns: [
        {include: '#object-property-key-identifier'},
        {include: '#string-literal'},
        {include: '#object-property-end'},
        {include: '#comments'}
      ]
    },
    'object-property-end': {
      begin: ':((?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*)',
      beginCaptures: {
        1: {patterns: [{include: '#line-comment'}, {include: '#block-comment'}]}
      },
      end: '(?=(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*$)',
      name: 'meta.object-property-end.bicep',
      patterns: [{include: '#expression'}, {include: '#comments'}]
    },
    'object-property-key-identifier': {
      captures: {1: {name: 'variable.other.property.bicep'}},
      match: '(\\b[_$[:alpha:]][_$[:alnum:]]*\\b)',
      name: 'meta.object-property-key-identifier.bicep'
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
      end: "'''",
      name: 'string.quoted.multi.bicep'
    }
  },
  scopeName: 'source.bicep'
}

export default grammar
