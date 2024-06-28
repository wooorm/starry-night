// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-ruby>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.ruby', 'text.html.basic'],
  extensions: ['.erb', '.erb.deface', '.rhtml'],
  injections: {
    'text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | meta.tag | comment), meta.tag string.quoted, L:source.js.embedded.html':
      {
        patterns: [
          {
            begin: '(^\\s*)(?=<%+#(?![^%]*%>))',
            beginCaptures: {
              0: {name: 'punctuation.whitespace.comment.leading.erb'}
            },
            end: '(?!\\G)(\\s*$\\n)?',
            endCaptures: {
              0: {name: 'punctuation.whitespace.comment.trailing.erb'}
            },
            patterns: [{include: '#comment'}]
          },
          {
            begin: '(^\\s*)(?=<%(?![^%]*%>))',
            beginCaptures: {
              0: {name: 'punctuation.whitespace.embedded.leading.erb'}
            },
            end: '(?!\\G)(\\s*$\\n)?',
            endCaptures: {
              0: {name: 'punctuation.whitespace.embedded.trailing.erb'}
            },
            patterns: [{include: '#tags'}]
          },
          {include: '#comment'},
          {include: '#tags'}
        ]
      }
  },
  names: ['html+erb', 'erb', 'rhtml', 'html+ruby'],
  patterns: [{include: 'text.html.basic'}],
  repository: {
    comment: {
      patterns: [
        {
          begin: '<%+#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.erb'}
          },
          end: '%>',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.erb'}},
          name: 'comment.block.erb'
        }
      ]
    },
    tags: {
      patterns: [
        {
          begin: '<%+(?!>)[-=]?(?![^%]*%>)',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.erb'}},
          contentName: 'source.ruby.embedded.erb',
          end: '-?%>',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.erb'},
            1: {name: 'source.ruby'}
          },
          name: 'meta.embedded.block.erb',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.erb'}},
              match: '(#).*?(?=-?%>)',
              name: 'comment.line.number-sign.erb'
            },
            {include: 'source.ruby'}
          ]
        },
        {
          begin: '<%+(?!>)[-=]?',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.erb'}},
          contentName: 'source.ruby.embedded.erb',
          end: '-?%>',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.erb'},
            1: {name: 'source.ruby'}
          },
          name: 'meta.embedded.line.erb',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.erb'}},
              match: '(#).*?(?=-?%>)',
              name: 'comment.line.number-sign.erb'
            },
            {include: 'source.ruby'}
          ]
        }
      ]
    }
  },
  scopeName: 'text.html.erb'
}

export default grammar
