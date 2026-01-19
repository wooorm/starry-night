// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/borama/vscode-ruby-slim>
// and licensed `mit`.
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
      name: 'meta.filter.slim source.ruby.embedded.slim',
      patterns: [{include: 'source.ruby'}]
    },
    {
      begin: '^(\\s*)(javascript).*:$',
      beginCaptures: {
        2: {name: 'constant.language.name.javascript.filter.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.js.embedded.slim',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(\\s*)(coffee).*:$',
      beginCaptures: {
        2: {name: 'constant.language.name.coffeescript.filter.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.coffee.embedded.slim',
      patterns: [{include: 'source.coffee'}]
    },
    {
      begin: '^(\\s*)(markdown):$',
      beginCaptures: {2: {name: 'constant.language.name.markdown.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim text.html.markdown.embedded.slim',
      patterns: [{include: 'text.md'}]
    },
    {
      begin: '^(\\s*)(css).*:$',
      beginCaptures: {2: {name: 'constant.language.name.css.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.css.embedded.slim',
      patterns: [{include: 'source.css'}]
    },
    {
      begin: '^(\\s*)(sass).*:$',
      beginCaptures: {2: {name: 'constant.language.name.sass.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.sass.embedded.slim',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*)(scss).*:$',
      beginCaptures: {2: {name: 'constant.language.name.scss.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.scss.embedded.slim',
      patterns: [{include: 'source.css.scss'}]
    },
    {
      begin: '^(\\s*)(less).*:$',
      beginCaptures: {2: {name: 'constant.language.name.less.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim source.less.embedded.slim',
      patterns: [{include: 'source.css.less'}]
    },
    {
      begin: '^(\\s*)(erb):$',
      beginCaptures: {2: {name: 'constant.language.name.erb.filter.slim'}},
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'meta.filter.slim text.html.erb.embedded.slim',
      patterns: [{include: 'text.html.erb'}]
    },
    {
      begin: '^(\\s*)((/!)\\s*.*)$',
      beginCaptures: {
        2: {name: 'comment.line.slash.slim'},
        3: {name: 'punctuation.definition.comment.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'comment.block.html.slim'
    },
    {
      begin: '^(\\s*)((/)((\\[).*(\\])).*)$',
      beginCaptures: {
        2: {name: 'comment.line.slash.slim'},
        3: {name: 'punctuation.definition.comment.slim'},
        4: {name: 'meta.brackets.slim'},
        5: {name: 'punctuation.section.brackets.begin.slim'},
        6: {name: 'punctuation.section.brackets.end.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'comment.block.slim'
    },
    {
      begin: '^(\\s*)((/)\\s*.*)$',
      beginCaptures: {
        2: {name: 'comment.line.slash.slim'},
        3: {name: 'punctuation.definition.comment.slim'}
      },
      end: '^(?!(\\1\\s)|\\s*$)',
      name: 'comment.block.slim'
    },
    {begin: '^\\s*(?=-)', end: '$', patterns: [{include: '#rubyline'}]},
    {begin: '^\\s*(?==+|~)', end: '$', patterns: [{include: '#rubyline'}]},
    {include: '#splat-attribute'},
    {include: '#interpolated-ruby'},
    {include: '#verbatim-text'},
    {
      captures: {0: {name: 'meta.tag.sgml.doctype.slim'}},
      match: '^\\s*(doctype)\\s+.*(\\n|$)'
    },
    {
      begin:
        '(\\s*)(?:([\\w-]+)|(\\.)((?:[\\w-]|(?::(?!\\s)))+(?:/\\d+)?)|(#)((?:[\\w-]|(?::(?!\\s)))+(?:/\\d+)?))',
      beginCaptures: {
        2: {name: 'entity.name.tag.slim'},
        3: {name: 'punctuation.definition.attribute.class.slim'},
        4: {name: 'entity.other.attribute-name.class.html'},
        5: {name: 'punctuation.definition.attribute.id.slim'},
        6: {name: 'entity.other.attribute-name.id.html'}
      },
      end: '$|(:)(?=\\s)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.slim'}},
      name: 'meta.tag.slim',
      patterns: [
        {include: '#xml-namespace'},
        {include: '#class-id-shortcut'},
        {include: '#attribute-wrapper'},
        {include: '#splat-attribute'},
        {include: '#whitespace-modifier'},
        {include: '#rubyline'},
        {include: '#tag-attribute'},
        {include: '#whitespace'},
        {include: '#closed-tag-terminator'},
        {include: '#inline-text'}
      ]
    },
    {captures: {1: {name: 'meta.escape.slim'}}, match: '^\\s*(\\\\.)'},
    {include: '#inline-text'}
  ],
  repository: {
    'attribute-wrapper': {
      patterns: [
        {include: '#attribute-wrapper-parens'},
        {include: '#attribute-wrapper-brackets'},
        {include: '#attribute-wrapper-braces'}
      ]
    },
    'attribute-wrapper-braces': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.braces.begin.slim'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.braces.end.slim'}},
      name: 'meta.braces.slim',
      patterns: [
        {include: '#tag-attribute-wrapped'},
        {include: '#tag-boolean-attribute'}
      ]
    },
    'attribute-wrapper-brackets': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.brackets.begin.slim'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.brackets.end.slim'}},
      name: 'meta.brackets.slim',
      patterns: [
        {include: '#tag-attribute-wrapped'},
        {include: '#tag-boolean-attribute'}
      ]
    },
    'attribute-wrapper-parens': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.parens.begin.slim'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.parens.end.slim'}},
      name: 'meta.parens.slim',
      patterns: [
        {include: '#tag-attribute-wrapped'},
        {include: '#tag-boolean-attribute'}
      ]
    },
    'boolean-attribute-value': {
      begin: 'true|false|nil',
      end: '(?=\\s)|$',
      name: 'constant.language.slim'
    },
    'class-id-shortcut': {
      patterns: [{include: '#class-shortcut'}, {include: '#id-shortcut'}]
    },
    'class-shortcut': {
      captures: {
        1: {name: 'punctuation.definition.attribute.class.slim'},
        2: {name: 'entity.other.attribute-name.class.html'}
      },
      match: '(\\.)((?:[\\w-]|(?::(?!\\s)))+(?:/\\d+)?)'
    },
    'closed-tag-terminator': {
      match: '\\s*/\\s*',
      name: 'punctuation.terminator.tag.slim'
    },
    continuation: {
      captures: {1: {name: 'punctuation.separator.continuation.slim'}},
      match: '([\\\\,])\\s*\\n'
    },
    'delimited-ruby-group': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.slim'}},
      contentName: 'meta.source.ruby',
      end: '(\\))(?=(\\s|\\]|\\}$))',
      endCaptures: {1: {name: 'punctuation.definition.group.end.slim'}},
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-delimited',
      patterns: [{include: 'source.ruby'}]
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
    'id-shortcut': {
      captures: {
        1: {name: 'punctuation.definition.attribute.id.slim'},
        2: {name: 'entity.other.attribute-name.id.html'}
      },
      match: '(#)((?:[\\w-]|(?::(?!\\s)))+(?:/\\d+)?)'
    },
    'inline-text': {
      begin: '(?=.)',
      end: '(?<!\\\\\\n)$',
      name: 'meta.embedded.slim text.html.embedded.slim entity.other.slim.inline-text',
      patterns: [
        {include: 'text.html.basic'},
        {include: '#interpolated-ruby'},
        {match: '([^#<]|\\\\#|\\\\\\<)*\\n'}
      ]
    },
    'interpolated-ruby': {
      begin: '(?<!\\\\)#\\{{1,2}',
      beginCaptures: {
        0: {name: 'punctuation.section.interpolation.begin.slim'}
      },
      end: '\\}{1,2}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.slim'}},
      name: 'meta.interpolation.slim meta.string.ruby source.ruby.embedded.slim',
      patterns: [{include: 'source.ruby'}]
    },
    'ruby-attribute-array': {
      begin: '(?=\\[)',
      end: '(?<=\\])',
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-array',
      patterns: [{include: 'source.ruby'}]
    },
    'ruby-attribute-hash': {
      begin: '(?=\\{)',
      end: '(?<=\\})',
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-hash',
      patterns: [{include: 'source.ruby'}]
    },
    'ruby-attribute-symbol-array': {
      begin: '=?(?=:)',
      end: '(?=\\s|\\)|\\]|\\})|$',
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-symbol-array',
      patterns: [{include: 'source.ruby'}]
    },
    'ruby-attribute-value': {
      begin: '(?=\\b)',
      beginCaptures: {1: {name: 'punctuation.separator.key-value.slim'}},
      end: '(?=\\s)|$',
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-value',
      patterns: [{include: 'source.ruby'}]
    },
    'ruby-attribute-value-wrapped': {
      begin: '(?=\\b)',
      beginCaptures: {1: {name: 'punctuation.separator.key-value.slim'}},
      end: '(?=\\)|\\]|\\})|$',
      name: 'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-attribute-value-wrapped',
      patterns: [{include: 'source.ruby'}]
    },
    rubyline: {
      begin: "(==|=)(<>|><|<'|'<|<|>)?|-\\s*",
      beginCaptures: {
        0: {name: 'punctuation.section.embedded.slim'},
        2: {name: 'keyword.operator.whitespace.slim'}
      },
      contentName:
        'meta.embedded.slim meta.string.ruby source.ruby.embedded.slim entity.other.slim.ruby-line',
      end: '(do\\s*\\n$)|(?<!\\\\|,|,\\n|\\\\\\n)$',
      endCaptures: {1: {name: 'keyword.control.start-block.ruby'}},
      name: 'meta.embedded.slim meta.line.ruby.slim',
      patterns: [
        {match: '#.*$', name: 'comment.line.number-sign.ruby'},
        {include: '#continuation'},
        {include: 'source.ruby'}
      ]
    },
    'splat-attribute': {
      patterns: [
        {include: '#splat-attribute-hash'},
        {include: '#splat-attribute-direct'}
      ]
    },
    'splat-attribute-direct': {
      begin: '\\*',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.ruby'}},
      end: '(?=\\s)|$',
      name: 'meta.embedded.slim source.ruby.embedded.slim entity.other.slim.splat-attribute',
      patterns: [{include: 'source.ruby'}]
    },
    'splat-attribute-hash': {
      begin: '\\*\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.ruby'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.ruby'}},
      name: 'meta.embedded.slim source.ruby.embedded.slim entity.other.slim.splat-attribute',
      patterns: [{include: 'source.ruby'}]
    },
    'string-double-quoted': {
      begin: '(")(?=.*("|\\\\?$))',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'meta.string.html string.quoted.double.html',
      patterns: [{include: '#interpolated-ruby'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "(')(?=.*('|\\\\$))",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'meta.string.html string.quoted.single.html',
      patterns: [{include: '#interpolated-ruby'}, {include: '#entities'}]
    },
    'tag-attribute': {
      begin: '([\\w-]+)\\s*(==?)\\s*',
      captures: {
        1: {name: 'entity.other.attribute-name.slim'},
        2: {name: 'punctuation.separator.key-value.slim'}
      },
      end: '(?=(?::?\\s))|$',
      name: 'meta.attribute-with-value.slim',
      patterns: [
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#boolean-attribute-value'},
        {include: '#delimited-ruby-group'},
        {include: '#ruby-attribute-array'},
        {include: '#ruby-attribute-hash'},
        {include: '#ruby-attribute-symbol-array'},
        {include: '#ruby-attribute-value'}
      ]
    },
    'tag-attribute-wrapped': {
      begin: '([\\w-]+)\\s*(==?)\\s*',
      captures: {
        1: {name: 'entity.other.attribute-name.slim'},
        2: {name: 'punctuation.separator.key-value.slim'}
      },
      end: '(?=(?:\\)|\\]|\\}))|$',
      name: 'meta.attribute-with-value.slim',
      patterns: [
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#boolean-attribute-value'},
        {include: '#delimited-ruby-group'},
        {include: '#ruby-attribute-array'},
        {include: '#ruby-attribute-hash'},
        {include: '#ruby-attribute-symbol-array'},
        {include: '#ruby-attribute-value-wrapped'}
      ]
    },
    'tag-boolean-attribute': {
      begin: '([\\w-]+)\\s*',
      end: '(?=(?::?\\s|\\)|\\]|\\}))|$',
      name: 'meta.attribute-with-value.slim entity.other.attribute-name.slim'
    },
    'verbatim-text': {
      begin: "^(\\s*)([|'](< |> |<> |>< )?)\\s*",
      beginCaptures: {2: {name: 'punctuation.section.verbatim.slim'}},
      contentName: 'text.html.embedded.slim',
      end: '^(?!(\\1\\s)|\\s*$)',
      patterns: [{include: 'text.html.basic'}, {include: '#interpolated-ruby'}]
    },
    whitespace: {match: '\\s+', name: 'text.html.embedded.whitespace.slim'},
    'whitespace-modifier': {
      match: '(?<!\\s)(?:\\>|\\<|\\<\\>|\\>\\<)',
      name: 'keyword.operator.whitespace.slim'
    },
    'xml-namespace': {match: '(:[\\w-]+)+', name: 'entity.name.tag.slim'}
  },
  scopeName: 'text.slim'
}

export default grammar
