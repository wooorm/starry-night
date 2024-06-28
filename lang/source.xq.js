// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wcandillon/language-jsoniq>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.xquery', '.xq', '.xql', '.xqm', '.xqy'],
  names: ['xquery'],
  patterns: [
    {
      begin: '^(?=jsoniq\\s+version\\s+)',
      end: '\\z',
      patterns: [{include: 'source.jsoniq'}]
    },
    {begin: '\\(#', end: '#\\)', name: 'constant.xquery'},
    {
      begin: '\\(:~',
      end: ':\\)',
      name: 'comment.doc.xquery',
      patterns: [
        {match: '@[a-zA-Z0-9_\\.\\-]+', name: 'constant.language.xquery'}
      ]
    },
    {include: '#XMLComment'},
    {include: '#CDATA'},
    {include: '#PredefinedEntityRef'},
    {include: '#CharRef'},
    {begin: '<\\?', end: '\\?>', name: 'comment.xquery'},
    {begin: '\\(:', end: ':\\)', name: 'comment.xquery'},
    {
      begin: '"',
      end: '"(?!")',
      name: 'string.xquery',
      patterns: [
        {match: '""', name: 'constant.xquery'},
        {include: '#PredefinedEntityRef'},
        {include: '#CharRef'}
      ]
    },
    {
      begin: "'",
      end: "'(?!')",
      name: 'string.xquery',
      patterns: [
        {match: "''", name: 'constant.xquery'},
        {include: '#PredefinedEntityRef'},
        {include: '#CharRef'}
      ]
    },
    {
      match:
        '%([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*)',
      name: 'meta.declaration.annotation.xquery'
    },
    {
      match:
        '@(\\* | ([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*))',
      name: 'support.type.xquery'
    },
    {
      match:
        '\\$([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*)',
      name: 'meta.definition.variable.name.xquery'
    },
    {
      match: '\\b(\\.[0-9]+|[0-9]+(\\.[0-9]*)?)[Ee][+#x002D]?[0-9]+\\b',
      name: 'constant.numeric.jsoniq'
    },
    {
      match: '\\b(\\.[0-9]+|[0-9]+\\.[0-9]*)\\b',
      name: 'constant.numeric.jsoniq'
    },
    {match: '\\b[0-9]+\\b', name: 'constant.numeric.jsoniq'},
    {
      match:
        '\\b(NaN|after|allowing|ancestor|ancestor-or-self|and|append|array|as|ascending|at|attribute|base-uri|before|boundary-space|break|by|case|cast|castable|catch|child|collation|comment|constraint|construction|contains|context|continue|copy|copy-namespaces|count|decimal-format|decimal-separator|declare|default|delete|descendant|descendant-or-self|descending|digit|div|document|document-node|element|else|empty|empty-sequence|encoding|end|eq|every|except|exit|external|false|first|following|following-sibling|for|from|ft-option|function|ge|greatest|group|grouping-separator|gt|idiv|if|import|in|index|infinity|insert|instance|integrity|intersect|into|is|item|json|json-item|jsoniq|last|lax|le|least|let|loop|lt|minus-sign|mod|modify|module|namespace|namespace-node|ne|next|node|nodes|not|null|object|of|only|option|or|order|ordered|ordering|paragraphs|parent|pattern-separator|per-mille|percent|preceding|preceding-sibling|previous|processing-instruction|rename|replace|return|returning|revalidation|satisfies|schema|schema-attribute|schema-element|score|select|self|sentences|sliding|some|stable|start|strict|switch|text|then|times|to|treat|true|try|tumbling|type|typeswitch|union|unordered|updating|validate|value|variable|version|when|where|while|window|with|words|xquery|zero-digit)(?!(:|\\-))\\b',
      name: 'keyword.xquery'
    },
    {
      match:
        '([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-_a-zA-Z0-9]*)(?=\\s*\\()',
      name: 'support.function.xquery'
    },
    {match: '\\(', name: 'lparen.xquery'},
    {match: '\\)', name: 'rparent.xquery'},
    {include: '#OpenTag'},
    {include: '#CloseTag'}
  ],
  repository: {
    CDATA: {
      begin: '<!\\[CDATA\\[',
      end: '\\]\\]>',
      name: 'constant.language.xquery'
    },
    CharRef: {
      match: '&#([0-9]+|x[0-9A-Fa-f]+);',
      name: 'constant.language.escape.xquery'
    },
    CloseTag: {
      match:
        '<\\/([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-_a-zA-Z0-9]*)>',
      name: 'punctuation.definition.tag.xquery'
    },
    EnclosedExpr: {
      begin: '{',
      end: '}',
      name: 'source.xq',
      patterns: [{include: '$self'}]
    },
    OpenTag: {
      begin:
        '<([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-_a-zA-Z0-9]*)',
      end: '(\\/>|>)',
      name: 'punctuation.definition.tag.xquery',
      patterns: [
        {
          match:
            '([\\-_a-zA-Z0-9][\\-\\._a-zA-Z0-9]*:)?([\\-_a-zA-Z0-9][\\-_a-zA-Z0-9]*)',
          name: 'entity.other.attribute-name.xquery'
        },
        {match: '=', name: 'source.jsoniq'},
        {
          begin: "'",
          end: "'(?!')",
          name: 'string.xquery',
          patterns: [
            {match: "''", name: 'constant.xquery'},
            {include: '#PredefinedEntityRef'},
            {include: '#CharRef'},
            {match: '({{|}})', name: 'string.xquery'},
            {include: '#EnclosedExpr'}
          ]
        },
        {
          begin: '"',
          end: '"(?!")',
          name: 'string.xquery',
          patterns: [
            {match: '""', name: 'constant.xquery'},
            {include: '#PredefinedEntityRef'},
            {include: '#CharRef'},
            {match: '({{|}})', name: 'constant.xquery'},
            {include: '#EnclosedExpr'}
          ]
        }
      ]
    },
    PredefinedEntityRef: {
      match: '&(lt|gt|amp|quot|apos);',
      name: 'constant.language.escape.xquery'
    },
    XMLComment: {begin: '<!--', end: '-->', name: 'comment.xquery'}
  },
  scopeName: 'source.xq'
}

export default grammar
