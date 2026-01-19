// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jinliming2/vscode-go-template>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gohtml', '.gotmpl', '.html.tmpl', '.tmpl', '.tpl'],
  names: ['go-template', 'gotmpl'],
  patterns: [
    {include: '#comments'},
    {include: '#operators'},
    {include: '#variables'},
    {include: '#keywords'},
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.go-template'}
      },
      end: '(?<!(?<!\\\\)\\\\)"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.go-template'}},
      name: 'string.quoted.double.go-template',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: '`',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.go-template'}
      },
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.go-template'}},
      name: 'string.quoted.raw.go-template',
      patterns: [{include: '#string_placeholder'}]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.go-template'}},
          end: '\\*/',
          name: 'comment.block.go-template'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(if|else|range|template|with|end|nil|with|define|block)\\b',
          name: 'keyword.control.go-template'
        },
        {
          match:
            '\\b(and|call|html|index|slice|js|len|not|or|print(f|ln)?|urlquery|eq|ne|lt|le|gt|ge)\\b',
          name: 'support.function.builtin.go-template'
        }
      ]
    },
    operators: {
      patterns: [
        {match: ':?=', name: 'keyword.operator.assignment.go-template'},
        {match: '\\|', name: 'keyword.operator.pipe.go-template'}
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\([0-7]{3}|[abfnrtv\\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})',
          name: 'constant.character.escape.go-template'
        },
        {
          match: '\\\\[^0-7xuUabfnrtv\\\'"]',
          name: 'invalid.illegal.unknown-escape.go-template'
        }
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            '%(\\[\\d+\\])?([+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGspw]',
          name: 'constant.other.placeholder.go-template'
        }
      ]
    },
    variables: {
      patterns: [
        {match: '\\.\\w*', name: 'variable.sub.property.go-template'},
        {match: '\\$\\w*', name: 'variable.other.readwrite.go-template'}
      ]
    }
  },
  scopeName: 'source.go-template'
}

export default grammar
