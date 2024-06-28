// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.ruby'],
  extensions: ['.haml', '.haml.deface'],
  names: ['haml'],
  patterns: [
    {
      begin: '^\\s*==',
      captures: {1: {name: 'string.quoted.double.ruby'}},
      end: '$\\n?',
      patterns: [{include: '#interpolated_ruby'}]
    },
    {include: '#continuation'},
    {
      captures: {1: {name: 'punctuation.definition.prolog.haml'}},
      match: '^(!!!)($|\\s.*)',
      name: 'meta.prolog.haml'
    },
    {
      captures: {1: {patterns: []}},
      match: '(?<=\\#\\{)([^#]+)(?=\\})',
      name: 'meta.embedded.ruby'
    },
    {
      captures: {1: {name: 'punctuation.section.comment.haml'}},
      match: '^(\\s*)(\\/\\[[^\\]].*?$\\n?)',
      name: 'comment.line.slash.haml'
    },
    {
      begin: '^(\\s*)(\\-\\#|\\/|\\-\\s*\\/\\*+)',
      captures: {2: {name: 'punctuation.section.comment.haml'}},
      end: '^(?!\\1\\s+|$\\n?)',
      name: 'comment.line.slash.haml'
    },
    {
      begin: '^\\s*(?:((%)([-\\w:]+))|(?=\\.|#))',
      captures: {
        1: {name: 'meta.tag.haml'},
        2: {name: 'punctuation.definition.tag.haml'},
        3: {name: 'entity.name.tag.haml'}
      },
      end: '$|(?!\\.|#|\\{|\\(|\\[|&amp;|=|-|~|!=|&=|/)',
      patterns: [
        {
          begin: '==',
          contentName: 'string.quoted.double.ruby',
          end: '$\\n?',
          name: 'string.quoted.double.ruby',
          patterns: [{include: '#interpolated_ruby'}]
        },
        {match: '\\.[\\w-]+', name: 'entity.name.tag.class.haml'},
        {match: '#[\\w-]+', name: 'entity.name.tag.id.haml'},
        {
          begin: '(?<!\\#)\\{(?=.+(,|(do)|\\{|\\}|\\||(\\#.*))\\s*)',
          end: '\\s*\\}(?!,)',
          name: 'meta.section.attributes.haml',
          patterns: [{include: '#continuation'}, {include: '#rubyline'}]
        },
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.section.attributes.haml',
          patterns: [
            {match: '([\\w-]+)', name: 'constant.other.symbol.ruby'},
            {match: '\\=', name: 'punctuation'},
            {include: '#variables'},
            {
              begin: '"',
              end: '"',
              name: 'string.quoted.double.ruby',
              patterns: [
                {
                  match:
                    '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
                  name: 'constant.character.escape.ruby'
                },
                {include: '#interpolated_ruby'}
              ]
            },
            {
              begin: "'",
              end: "'",
              name: 'string.quoted.double.ruby',
              patterns: [
                {
                  match:
                    '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
                  name: 'constant.character.escape.ruby'
                },
                {include: '#interpolated_ruby'}
              ]
            },
            {include: '#interpolated_ruby'}
          ]
        },
        {
          begin: '\\[(?=.+(,|\\[|\\]|\\||(\\#.*))\\s*)',
          end: '\\s*\\](?!.*(?!\\#\\[)\\])',
          name: 'meta.section.object.haml',
          patterns: [{include: '#continuation'}, {include: '#rubyline'}]
        },
        {include: '#rubyline'},
        {match: '/', name: 'punctuation.terminator.tag.haml'}
      ]
    },
    {captures: {1: {name: 'meta.escape.haml'}}, match: '^\\s*(\\.)'},
    {
      begin: '^\\s*(?==|-|~|!=|&=)',
      end: '$',
      patterns: [{include: '#rubyline'}]
    },
    {
      begin: '^(\\s*)(:php)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.php',
      patterns: [{include: 'text.html.php#language'}]
    },
    {
      begin: '^(\\s*)(:ruby)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.ruby',
      patterns: [{include: 'source.ruby'}]
    },
    {
      begin: '^(\\s*)(:markdown)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.markdown',
      patterns: []
    },
    {
      begin: '^(\\s*)(:coffee(script)?)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.coffee',
      patterns: [{include: 'source.coffee'}]
    },
    {
      begin: '^(\\s*)(:(javascript|es6))$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.js',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(\\s*)(:(css|styles?))$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.css',
      patterns: [{include: 'source.css'}]
    },
    {
      begin: '^(\\s*)(:ruby2js)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.ruby2js',
      patterns: [{include: 'source.ruby'}]
    },
    {
      begin: '^(\\s*)(:sass)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.sass',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*)(:scss)$',
      captures: {2: {name: 'entity.name.tag.haml'}},
      end: '^(?!\\1\\s+|\\n)',
      name: 'meta.embedded.scss',
      patterns: [{include: 'source.css.scss'}]
    }
  ],
  repository: {
    continuation: {
      captures: {1: {name: 'punctuation.separator.continuation.haml'}},
      match: '(\\|)\\s*$\\n?'
    },
    interpolated_ruby: {
      patterns: [
        {
          begin: '\\#\\{',
          captures: {1: {name: 'punctuation.section.embedded.ruby'}},
          end: '\\}',
          name: 'meta.section.object.haml',
          patterns: [
            {include: '#nest_curly_and_self'},
            {include: 'source.ruby'}
          ]
        },
        {include: '#variables'}
      ]
    },
    nest_curly_and_self: {
      patterns: [
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.section.scope.ruby'}},
          end: '\\}',
          name: 'meta.section.object.haml',
          patterns: [
            {include: '#nest_curly_and_self'},
            {include: 'source.ruby'}
          ]
        }
      ]
    },
    rubyline: {
      begin: '(&amp|!)?(=|-|~)',
      contentName: 'source.ruby.embedded.haml',
      end: '((do|\\{)( \\|[.*]+\\|)?)$|$|^(?!.*\\|\\s*)$\\n?',
      endCaptures: {
        1: {name: 'source.ruby.embedded.haml'},
        2: {name: 'keyword.control.ruby.start-block'}
      },
      name: 'meta.line.ruby.haml',
      patterns: [
        {
          captures: {1: {name: 'keyword.control.php'}},
          match: '\\s+((elseif|foreach|switch|declare|default|use))(?=\\s|\\()'
        },
        {
          captures: {1: {name: 'keyword.control.import.include.php'}},
          match: '\\s+(require_once|include_once)(?=\\s|\\()'
        },
        {
          match: '\\s+(catch|try|throw|exception|finally|die)(?=\\s|\\(|\\n)',
          name: 'keyword.control.exception.php'
        },
        {
          captures: {1: {name: 'storage.type.function.php'}},
          match: '\\s+(function\\s*)((?=\\())'
        },
        {
          captures: {1: {name: 'keyword.control.php'}},
          match: '\\s+(use\\s*)((?=\\())'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ruby'}},
          name: 'string.quoted.double.ruby',
          patterns: [
            {include: 'source.ruby#interpolated_ruby'},
            {include: 'source.ruby#escaped_char'}
          ]
        },
        {
          captures: {0: {patterns: [{include: '#rubyline'}]}},
          match: '(\\||,|<|do|\\{)\\s*(\\#.*)?$\\n?',
          name: 'source.ruby'
        },
        {match: '#.*$', name: 'comment.line.number-sign.ruby'},
        {include: '#continuation'}
      ]
    },
    variables: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(@)[a-zA-Z_]\\w+',
          name: 'variable.other.readwrite.instance.ruby'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(@@)[a-zA-Z_]\\w+',
          name: 'variable.other.readwrite.class.ruby'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.ruby'}},
          match: '(\\$)[a-zA-Z_]\\w+',
          name: 'variable.other.readwrite.global.ruby'
        }
      ]
    }
  },
  scopeName: 'text.haml'
}

export default grammar
