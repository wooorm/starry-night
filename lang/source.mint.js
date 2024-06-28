// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mint-lang/mint-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.css', 'source.css.scss', 'source.js'],
  extensions: ['.mint'],
  names: ['mint'],
  patterns: [
    {include: '#comments'},
    {include: '#html'},
    {include: '#regex'},
    {include: '#style'},
    {include: '#js'},
    {include: '#routes'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#directives'}
  ],
  repository: {
    comments: {
      patterns: [
        {begin: '/\\*', end: '\\*/', name: 'comment.block.mint'},
        {
          captures: {1: {name: 'comment.line.double-slash.mint'}},
          match: '((//).*)$'
        }
      ]
    },
    css: {
      patterns: [
        {match: '//'},
        {include: '#style-nesting'},
        {include: 'source.css#pseudo-classes'},
        {include: 'source.css#pseudo-elements'},
        {include: 'source.css.scss#general'},
        {include: 'source.css.scss#selectors'},
        {include: 'source.css.scss#properties'},
        {include: 'source.css.scss#at_rule_import'},
        {include: 'source.css.scss#at_rule_media'},
        {include: 'source.css.scss#at_rule_charset'},
        {include: 'source.css.scss#at_rule_namespace'},
        {include: 'source.css.scss#at_rule_fontface'},
        {include: 'source.css.scss#at_rule_page'},
        {include: 'source.css.scss#at_rule_supports'},
        {
          begin: '(?<=^|\\s)(@)(?:-(?:webkit|moz)-)?keyframes\\b',
          beginCaptures: {
            0: {name: 'keyword.control.at-rule.keyframes.scss'},
            1: {name: 'punctuation.definition.keyword.scss'}
          },
          end: '(?<=})',
          name: 'meta.at-rule.keyframes.scss',
          patterns: [
            {
              captures: {1: {name: 'entity.name.function.scss'}},
              match:
                '(?<=@keyframes)\\s+((?:[_A-Za-z][-\\w]|-[_A-Za-z])[-\\w]*)'
            },
            {
              begin: '(?<=@keyframes)\\s+(")',
              beginCaptures: {
                1: {name: 'punctuation.definition.string.begin.scss'}
              },
              contentName: 'entity.name.function.scss',
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.scss'}
              },
              name: 'string.quoted.double.scss',
              patterns: [
                {
                  match: '\\\\([[:xdigit:]]{1,6}|.)',
                  name: 'constant.character.escape.scss'
                },
                {include: 'source.css.scss#interpolation'}
              ]
            },
            {
              begin: "(?<=@keyframes)\\s+(')",
              beginCaptures: {
                1: {name: 'punctuation.definition.string.begin.scss'}
              },
              contentName: 'entity.name.function.scss',
              end: "'",
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.scss'}
              },
              name: 'string.quoted.single.scss',
              patterns: [
                {
                  match: '\\\\([[:xdigit:]]{1,6}|.)',
                  name: 'constant.character.escape.scss'
                },
                {include: 'source.css.scss#interpolation'}
              ]
            },
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.keyframes.begin.scss'}
              },
              end: '}',
              endCaptures: {
                0: {name: 'punctuation.section.keyframes.end.scss'}
              },
              patterns: [
                {include: '#comments'},
                {
                  match: '\\b(?:(?:100|[1-9]\\d|\\d)%|from|to)(?=\\s*{)',
                  name: 'entity.other.attribute-name.scss'
                },
                {include: '#style-nesting'}
              ]
            }
          ]
        }
      ]
    },
    directives: {
      begin: '(@(svg|format|documentation))((\\().*\\))?',
      beginCaptures: {
        0: {
          name: 'keyword.directive.mint',
          patterns: [
            {match: '(?<=@svg\\()[^\\)]*', name: 'string.unquoted.mint'},
            {
              match: '(?<=@documentation\\()[^\\)]*',
              name: 'entity.name.class.mint'
            }
          ]
        }
      },
      end: '\\G'
    },
    html: {
      begin: '<{?',
      beginCaptures: {0: {name: 'punctuation.definition.tag.html.mint'}},
      end: '}?>',
      endCaptures: {0: {name: 'punctuation.definition.tag.html.mint'}},
      name: 'meta.tag.html.mint',
      patterns: [
        {match: '(?<=<)/|/(?=>)', name: 'punctuation.definition.tag.html.mint'},
        {
          match: '(?<=<|</)[^A-Z|{][a-z]*[^\\s|:|>|/]*',
          name: 'entity.name.tag.block.any.html.mint'
        },
        {
          match: '(?![A-Z][a-z]*)(?<=::)[^\\s|>|::|\\(|/]*',
          name: 'entity.name.tag.css.mint'
        },
        {include: '#html'},
        {include: '#directives'},
        {include: '#regex'},
        {include: '#js'},
        {include: '#strings'},
        {include: '#keywords'}
      ]
    },
    interpolation: {
      begin: '#{',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.mint'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.mint'}
      },
      name: 'meta.embedded.line.mint',
      patterns: [
        {match: '\\.', name: 'punctuation.accessor.mint'},
        {include: '#keywords'}
      ]
    },
    js: {
      begin: '`',
      end: '`',
      name: 'meta.embedded.block.js.mint',
      patterns: [{include: 'source.js'}]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?<!\\.|[a-zA-Z0-9])\\b(global|state|encode|decode|for|module|provider|suite|test|parallel|sequence|case|try|catch|finally|next|with|component|property|fun|style|routes|get|connect|exposing|record|store|use|when|if|else|where|enum|using|const|as|or)\\b(?![a-zA-Z0-9]|\\.|\\s*(=|}))',
          name: 'keyword.control.mint'
        },
        {
          match: '\\b[A-Z][A-Za-z0-9]*\\b|\\b[A-Z_]+\\b',
          name: 'entity.name.class.mint'
        },
        {match: '\\d\\.?', name: 'constant.numeric.mint'},
        {match: '=>', name: 'storage.type.function.arrow.mint'},
        {match: '(?<!\\.)\\.(?!\\.)', name: 'punctuation.accessor.mint'},
        {match: '{', name: 'punctuation.block.open.mint'},
        {match: '}', name: 'punctuation.block.close.mint'},
        {match: '(?<!:):(?!:)', name: 'punctuation.separator.mint'},
        {match: '(?<!:|\\s)::(?!:|\\s)', name: 'keyword.operator.class.mint'},
        {match: '\\(', name: 'punctuation.params.open.mint'},
        {match: '\\)', name: 'punctuation.params.close.mint'},
        {match: '\\[', name: 'punctuation.array.open.mint'},
        {match: '\\]', name: 'punctuation.array.close.mint'},
        {match: ',', name: 'punctuation.separator.comma.mint'},
        {match: '\\+|-|/|\\*', name: 'keyword.operator.arithmetic.mint'},
        {
          match: '(?<=\\w|\\d|\\s)>=?|<=?(?=\\s|\\d|\\w)',
          name: 'keyword.operator.relational.mint'
        },
        {match: '(?<!=)=(?!=)', name: 'keyword.operator.assignment.mint'},
        {match: '(?<!=)==(?!=)', name: 'keyword.operator.equality.mint'},
        {match: '\\.\\.\\.', name: 'keyword.operator.spread.mint'},
        {match: '\\|>', name: 'keyword.operator.pipe.mint'},
        {match: '\\|(?!>)', name: 'keyword.operator.copy.mint'},
        {match: '\\b(true|false)\\b', name: 'constant.language.boolean.mint'},
        {
          match: '(?<!\\.)\\bof\\b',
          name: 'keyword.operator.expression.of.mint'
        },
        {
          match: '(?<=\\s\\bfun\\b\\s)[^\\(|:|{]*',
          name: 'entity.name.function.mint'
        },
        {
          match: '\\b(?<=[^A-Za-z]|\\.|\\s)[a-z][a-zA-Z0-9]*\\b(?=\\()',
          name: 'entity.name.function.mint'
        },
        {match: '@[A-Z]+', name: 'keyword.other.env.mint'},
        {
          match: '\\b[a-z][a-zA-Z0-9\\-]*\\b',
          name: 'support.type.property-name.mint'
        }
      ]
    },
    regex: {
      patterns: [
        {match: '/(?:\\\\/|[^/])+/', name: 'string.regexp.mint'},
        {match: '(?<=/)(g|i|m|y|u|s)', name: 'constant.regexp'}
      ]
    },
    routes: {
      begin: '(?<=routes\\s{)',
      beginCaptures: {0: {name: 'meta.block.open.routes.mint'}},
      end: '}',
      endCaptures: {0: {name: 'meta.block.close.routes.mint'}},
      name: 'meta.block.routes.mint',
      patterns: [
        {include: '#comments'},
        {match: '(/|\\*)[^{]*', name: 'string.route.name.mint'},
        {include: '#routes-nesting'},
        {include: '#keywords'}
      ]
    },
    'routes-nesting': {
      begin: '{',
      beginCaptures: {0: {name: 'meta.block.open.nested.routes.mint'}},
      end: '}',
      endCaptures: {0: {name: 'meta.block.close.nested.routes.mint'}},
      name: 'meta.block.nested.routes.mint',
      patterns: [
        {include: '#comments'},
        {include: '#routes-nesting'},
        {include: '#keywords'}
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.mint',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.mint'},
        {include: '#interpolation'}
      ]
    },
    style: {
      begin: '(?<=style\\s)[^{]*\\s{',
      beginCaptures: {
        0: {
          name: 'meta.block.open.style.mint',
          patterns: [
            {
              begin: '\\(',
              end: '\\)',
              name: 'punctuation.params.style.mint',
              patterns: [{include: '#keywords'}]
            },
            {match: '\\b[^\\s|\\(|\\:]*\\b', name: 'entity.name.tag.css.mint'}
          ]
        }
      },
      end: '}',
      endCaptures: {0: {name: 'meta.block.close.style.mint'}},
      name: 'meta.block.style.mint',
      patterns: [{include: '#style-conditionals'}, {include: '#css'}]
    },
    'style-conditionals': {
      begin:
        '((?:else\\s*)?if\\s*\\(.*\\)\\s*{|(?<=})\\s*else\\s*(?!if){|case\\s*\\(.*\\)\\s*{)',
      beginCaptures: {
        0: {
          name: 'meta.block.open.style.conditional.mint',
          patterns: [{include: '#keywords'}]
        }
      },
      end: '}',
      endCaptures: {
        0: {
          name: 'meta.block.close.style.conditional.mint',
          patterns: [{include: '#keywords'}]
        }
      },
      patterns: [
        {include: '#comments'},
        {
          begin: '(?=:\\s[^A-Z])',
          end: '[^;]*$',
          name: 'meta.embedded.line.scss.mint',
          patterns: [{include: '#css'}]
        },
        {include: '#strings'},
        {include: '#keywords'}
      ]
    },
    'style-nesting': {
      begin: '{',
      beginCaptures: {0: {name: 'meta.block.open.nested.style.mint'}},
      end: '}',
      endCaptures: {0: {name: 'meta.block.close.nested.style.mint'}},
      name: 'meta.block.nested.style.mint',
      patterns: [{include: '#style-conditionals'}, {include: '#css'}]
    }
  },
  scopeName: 'source.mint'
}

export default grammar
