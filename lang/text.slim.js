// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.slim'],
  names: ['slim'],
  patterns: [
    {
      begin: '^(\\s*)(ruby):$',
      beginCaptures: {2: {name: 'constant.language.name.ruby.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.ruby.filter.slim',
      patterns: [{include: 'source.ruby'}]
    },
    {
      begin: '^(\\s*)(javascript):$',
      beginCaptures: {
        2: {name: 'constant.language.name.javascript.filter.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'source.js.filter.slim',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(---)\\s*\\n',
      beginCaptures: {1: {name: 'storage.frontmatter.slim'}},
      end: '^(---)\\s*\\n',
      endCaptures: {1: {name: 'storage.frontmatter.slim'}},
      name: 'source.yaml.meta.slim',
      patterns: [{include: 'source.yaml'}]
    },
    {
      begin: '^(\\s*)(coffee):$',
      beginCaptures: {
        2: {name: 'constant.language.name.coffeescript.filter.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.coffeescript.filter.slim',
      patterns: [{include: 'source.coffee'}]
    },
    {
      begin: '^(\\s*)(markdown):$',
      beginCaptures: {2: {name: 'constant.language.name.markdown.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.markdown.filter.slim',
      patterns: [{include: 'source.gfm'}]
    },
    {
      begin: '^(\\s*)(css):$',
      beginCaptures: {2: {name: 'constant.language.name.css.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.css.filter.slim',
      patterns: [{include: 'source.css'}]
    },
    {
      begin: '^(\\s*)(sass):$',
      beginCaptures: {2: {name: 'constant.language.name.sass.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.sass.filter.slim',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*)(scss):$',
      beginCaptures: {2: {name: 'constant.language.name.scss.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.scss.filter.slim',
      patterns: [{include: 'source.css.scss'}]
    },
    {
      begin: '^(\\s*)(less):$',
      beginCaptures: {2: {name: 'constant.language.name.less.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.less.filter.slim',
      patterns: [{include: 'source.css.less'}]
    },
    {
      begin: '^(\\s*)(erb):$',
      beginCaptures: {2: {name: 'constant.language.name.erb.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'text.erb.filter.slim',
      patterns: [{include: 'text.html.erb'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.prolog.slim'}},
      match: '^(! )($|\\s.*)',
      name: 'meta.prolog.slim'
    },
    {
      begin: '^(\\s*)(/)\\s*.*$',
      beginCaptures: {2: {name: 'comment.line.slash.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'comment.block.slim'
    },
    {begin: '^\\s*(?=-)', end: '$', patterns: [{include: '#rubyline'}]},
    {begin: '(?==+|~)', end: '$', patterns: [{include: '#rubyline'}]},
    {include: '#tag-attribute'},
    {include: '#embedded-ruby'},
    {
      begin: "^(\\s*)(\\||')\\s*",
      end: '^(?!(\\1\\s)|\\s*$)',
      patterns: [{include: 'text.html.basic'}, {include: '#embedded-ruby'}]
    },
    {
      begin: '^\\s*(\\.|#|[-a-zA-Z0-9]+)([\\w-]+)?',
      captures: {
        1: {name: 'entity.name.tag.slim'},
        2: {name: 'entity.other.attribute-name.event.slim'}
      },
      end: '$|(?!\\.|#|:|-|~|/|\\}|\\]|\\*|\\s?[\\*\\{])',
      name: 'meta.tag',
      patterns: [
        {begin: '(:[\\w\\d]+)+', end: '$|\\s', name: 'entity.name.tag.slim'},
        {
          begin: '(:\\s)(\\.|#|[a-zA-Z0-9]+)([\\w-]+)?',
          captures: {
            1: {name: 'punctuation.definition.tag.end.slim'},
            2: {name: 'entity.name.tag.slim'},
            3: {name: 'entity.other.attribute-name.event.slim'}
          },
          end: '$|(?!\\.|#|=|-|~|/|\\}|\\]|\\*|\\s?[\\*\\{])',
          patterns: [
            {include: '#root-class-id-tag'},
            {include: '#tag-attribute'}
          ]
        },
        {
          begin: '(\\*\\{)(?=.*\\}|.*\\|\\s*$)',
          beginCaptures: {1: {name: 'punctuation.section.embedded.ruby'}},
          end: '(\\})|$|^(?!.*\\|\\s*$)',
          endCaptures: {1: {name: 'punctuation.section.embedded.ruby'}},
          name: 'source.ruby.embedded.slim',
          patterns: [{include: '#embedded-ruby'}]
        },
        {include: '#root-class-id-tag'},
        {include: '#rubyline'},
        {match: '/', name: 'punctuation.terminator.tag.slim'}
      ]
    },
    {captures: {1: {name: 'meta.escape.slim'}}, match: '^\\s*(\\\\.)'},
    {
      begin: "^\\s*(?=\\||')",
      end: '$',
      patterns: [{include: '#embedded-ruby'}, {include: 'text.html.basic'}]
    },
    {
      begin: '(?=<[\\w\\d\\:]+)',
      end: '$|\\/\\>',
      patterns: [{include: 'text.html.basic'}]
    }
  ],
  repository: {
    continuation: {
      captures: {1: {name: 'punctuation.separator.continuation.slim'}},
      match: '([\\\\,])\\s*\\n'
    },
    'delimited-ruby-a': {
      begin: '=\\(',
      end: '\\)(?=( \\w|$))',
      name: 'source.ruby.embedded.slim',
      patterns: []
    },
    'delimited-ruby-b': {
      begin: '=\\[',
      end: '\\](?=( \\w|$))',
      name: 'source.ruby.embedded.slim',
      patterns: []
    },
    'delimited-ruby-c': {
      begin: '=\\{',
      end: '\\}(?=( \\w|$))',
      name: 'source.ruby.embedded.slim',
      patterns: []
    },
    'embedded-ruby': {
      begin: '(?<!\\\\)#\\{{1,2}',
      beginCaptures: {0: {name: 'punctuation.section.embedded.ruby'}},
      end: '\\}{1,2}',
      endCaptures: {0: {name: 'punctuation.section.embedded.ruby'}},
      name: 'source.ruby.embedded.html',
      patterns: []
    },
    entities: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.html'},
            3: {name: 'punctuation.definition.entity.html'}
          },
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          name: 'constant.character.entity.html'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.html'}
      ]
    },
    'interpolated-ruby': {
      begin: '=(?=\\b)',
      end: '\\s|\\w$',
      name: 'source.ruby.embedded.html'
    },
    'root-class-id-tag': {
      captures: {
        1: {name: 'punctuation.separator.key-value.html'},
        2: {name: 'entity.other.attribute-name.html'}
      },
      match: '(\\.|#)([\\w\\d\\-]+)'
    },
    rubyline: {
      begin: "(==|=)(<>|><|<'|'<|<|>)?|-",
      contentName: 'source.ruby.embedded.slim',
      end: '(do\\s*\\n$)|(?<!\\\\|,|,\\n|\\\\\\n)$',
      endCaptures: {1: {name: 'keyword.control.start-block.ruby'}},
      name: 'meta.line.ruby.slim',
      patterns: [
        {match: '#.*$', name: 'comment.line.number-sign.ruby'},
        {include: '#continuation'}
      ]
    },
    'string-double-quoted': {
      begin: '(")(?=.*")',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      contentName: 'meta.toc-list.id.html',
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#embedded-ruby'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "(')(?=.*')",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      contentName: 'meta.toc-list.id.html',
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#embedded-ruby'}, {include: '#entities'}]
    },
    'tag-attribute': {
      begin: '([\\w.#_-]+)(=)(?!\\s)(true|false|nil)?(\\s*\\(|\\{)?',
      captures: {
        1: {name: 'entity.other.attribute-name.event.slim'},
        2: {name: 'punctuation.separator.key-value.html'},
        3: {name: 'constant.language.slim'}
      },
      end: '\\}|\\)|$',
      name: 'meta.attribute-with-value.slim',
      patterns: [
        {include: '#tag-stuff'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-attribute'},
        {include: '#interpolated-ruby'},
        {include: '#delimited-ruby-a'},
        {include: '#delimited-ruby-b'},
        {include: '#delimited-ruby-c'},
        {include: '#rubyline'},
        {include: '#embedded-ruby'}
      ]
    }
  },
  scopeName: 'text.slim'
}

export default grammar
