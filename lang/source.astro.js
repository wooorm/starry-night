// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/withastro/language-tools>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.astro'],
  names: ['astro'],
  patterns: [
    {include: '#astro:expressions'},
    {include: '#html:comment'},
    {include: '#html:comment:bogus'},
    {include: '#html:doctype'},
    {include: '#astro:fragment'},
    {include: '#astro:lang-scripts'},
    {include: '#astro:lang-styles'},
    {include: '#astro:component'},
    {include: '#html:element'},
    {include: '#html:entity'},
    {include: '#html:entity:bogus'},
    {include: '#frontmatter'}
  ],
  repository: {
    'astro:attribute': {
      patterns: [
        {include: '#html:events'},
        {include: '#html:attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#string-template-literal'},
        {include: '#astro:expressions'}
      ]
    },
    'astro:component': {
      patterns: [
        {
          begin:
            '(<)([$A-Z_][^/?!\\s<>]*|[^/?!\\s<>.]+\\.[^/?!\\s<>]+)(.+is:raw.*?)(>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.astro'},
            2: {name: 'entity.name.tag.astro support.class.component.astro'},
            3: {patterns: [{include: '#astro:attribute'}]},
            4: {name: 'punctuation.definition.tag.end.astro'}
          },
          contentName: 'source.unknown',
          end: '(</)([$A-Z_][^/?!\\s<>]*|[^/?!\\s<>.]+\\.[^/?!\\s<>]+)(?=\\s|/?>)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.begin.astro'},
            2: {name: 'entity.name.tag.astro support.class.component.astro'},
            3: {name: 'punctuation.definition.tag.end.astro'}
          },
          name: 'meta.tag.component.astro astro.component.raw'
        },
        {
          begin: '(</?)([$A-Z_][^/?!\\s<>]*|[^/?!\\s<>.]+\\.[^/?!\\s<>]+)\\b',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.astro'},
            2: {name: 'entity.name.tag.astro support.class.component.astro'}
          },
          end: '(/?>)',
          endCaptures: {1: {name: 'punctuation.definition.tag.end.astro'}},
          name: 'meta.tag.component.astro',
          patterns: [{include: '#astro:attribute'}]
        }
      ]
    },
    'astro:expressions': {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.embedded.begin.tsx'}},
          contentName: 'source.tsx',
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.tsx'}},
          name: 'expression.embedded.astro',
          patterns: [{include: 'source.tsx'}]
        }
      ]
    },
    'astro:fragment': {
      captures: {
        1: {name: 'punctuation.definition.tag.astro'},
        2: {name: 'entity.name.tag.astro support.class.fragment.astro'},
        3: {name: 'punctuation.definition.tag.astro'}
      },
      match: '(</?)(Fragment)?(\\s*>)',
      name: 'meta.tag.component.astro'
    },
    'astro:lang-scripts': {
      begin: '(<)(script)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'}
      },
      end: '(</)(script)\\s*(>)|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'},
        3: {name: 'punctuation.definition.tag.end.html'},
        4: {name: 'punctuation.definition.tag.end.html'}
      },
      patterns: [
        {
          begin:
            '\\G(?=\\s*[^>]*?type\\s*=\\s*([\'"]|)(?i:application/ld\\+json)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.json',
              end: '(?=</)',
              patterns: [{include: 'source.json'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin:
            '\\G(?=\\s*[^>]*?type\\s*=\\s*([\'"]|)(?i:module|(?:text/javascript|text/partytown|application/node|application/javascript))\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.js',
              end: '(?=</)',
              patterns: [{include: 'source.js'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?type\\s*=\\s*([\'"]|)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {begin: '(?<=>)(?!</)', end: '(?=</)', name: 'source.unknown'},
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin:
            '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:jsx?|javascript)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.js',
              end: '(?=</)',
              patterns: [{include: 'source.js'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:ts|typescript)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.ts',
              end: '(?=</)',
              patterns: [{include: 'source.ts'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:tsx)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.tsx',
              end: '(?=</)',
              patterns: [{include: 'source.tsx'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.js',
          end: '(?=</)',
          patterns: [{include: 'source.js'}]
        },
        {include: '#html:tag-attributes'}
      ]
    },
    'astro:lang-styles': {
      begin: '(<)(style)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'}
      },
      end: '(</)(style)\\s*(>)|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'},
        3: {name: 'punctuation.definition.tag.end.html'},
        4: {name: 'punctuation.definition.tag.end.html'}
      },
      patterns: [
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:css)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.css',
              end: '(?=</)',
              patterns: [{include: 'source.css'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:less)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.css.less',
              end: '(?=</)',
              patterns: [{include: 'source.css.less'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:sass)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.sass',
              end: '(?=</)',
              patterns: [{include: 'source.sass'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:scss)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.css.scss',
              end: '(?=</)',
              patterns: [{include: 'source.css.scss'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '\\G(?=\\s*[^>]*?lang\\s*=\\s*([\'"]|)(?i:styl(?:us)?)\\1)',
          end: '(?=</|/>)',
          patterns: [
            {
              begin: '(?<=>)(?!</)',
              contentName: 'source.stylus',
              end: '(?=</)',
              patterns: [{include: 'source.stylus'}]
            },
            {include: '#html:tag-attributes'}
          ]
        },
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css',
          end: '(?=</)',
          patterns: [{include: 'source.css'}]
        },
        {include: '#html:tag-attributes'}
      ]
    },
    frontmatter: {
      begin: '\\A(-{3})\\s*$',
      beginCaptures: {1: {name: 'comment'}},
      contentName: 'source.ts',
      end: '(^|\\G)(-{3})|\\.{3}\\s*$',
      endCaptures: {2: {name: 'comment'}},
      patterns: [{include: 'source.ts'}]
    },
    'html:attribute': {
      captures: {
        1: {name: 'entity.other.attribute-name.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      match: '([a-zA-Z0-9\\-:@_.]+)(=?)',
      name: 'meta.attribute.$1.html'
    },
    'html:comment': {
      begin: '<!--',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.html punctuation.definition.comment.begin.html'
        }
      },
      end: '--!?>',
      endCaptures: {
        0: {
          name: 'punctuation.definition.comment.html punctuation.definition.comment.end.html'
        }
      },
      name: 'comment.block.html'
    },
    'html:comment:bogus': {
      begin: '<\\?',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.html punctuation.definition.comment.begin.html'
        }
      },
      captures: {0: {name: 'punctuation.definition.comment.html'}},
      end: '>',
      endCaptures: {
        0: {
          name: 'punctuation.definition.comment.html punctuation.definition.comment.end.html'
        }
      },
      name: 'comment.block.html'
    },
    'html:doctype': {
      begin: '(<!)([Dd][Oo][Cc][Tt][Yy][Pp][Ee])',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.tag.html punctuation.definition.tag.begin.html'
        },
        2: {name: 'entity.name.tag.html'}
      },
      end: '>',
      endCaptures: {
        0: {
          name: 'punctuation.definition.tag.html punctuation.definition.tag.end.html'
        }
      },
      name: 'meta.tag.metadata.doctype.html',
      patterns: [
        {begin: '"', end: '"', name: 'string.quoted.double.html'},
        {match: '[^\\s>]+', name: 'entity.other.attribute-name.html'}
      ]
    },
    'html:element': {
      patterns: [
        {
          begin: '(<)([^/?!\\s<>]+)(.+is:raw.*?)(>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.html'},
            3: {patterns: [{include: '#astro:attribute'}]},
            4: {name: 'punctuation.definition.tag.end.html'}
          },
          contentName: 'source.unknown',
          end: '(</)([^/?!\\s<>]+)(?=\\s|/?>)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.html'},
            3: {name: 'punctuation.definition.tag.end.html'}
          },
          name: 'astro.element.raw'
        },
        {
          begin: '(<)([^/?!\\s<>]+)(?=\\s|/?>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.html'}
          },
          end: '/?>',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.html'}},
          name: 'meta.tag.any.$2.start.html',
          patterns: [{include: '#astro:attribute'}]
        },
        {
          begin: '(</)([^/?!\\s<>]+)(?=\\s|/?>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.html'}
          },
          end: '/?>',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.html'}},
          name: 'meta.tag.any.$2.end.html',
          patterns: [{include: '#astro:attribute'}]
        }
      ]
    },
    'html:entity': {
      captures: {
        1: {name: 'punctuation.definition.entity.html'},
        3: {name: 'punctuation.definition.entity.html'}
      },
      match: '(&)([0-9A-Za-z]+|#x[0-9A-Fa-f]+|x[0-9]+)(;)',
      name: 'constant.character.entity.html'
    },
    'html:entity:bogus': {
      captures: {
        1: {name: 'invalid.illegal.bad-ampersand.html'},
        3: {name: 'punctuation.definition.entity.html'}
      },
      match: '(&)([0-9A-Za-z]+|#x[0-9A-Fa-f]+|x[0-9]+)',
      name: 'constant.character.entity.html'
    },
    'html:events': {
      begin:
        'on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![\\w:-])',
      beginCaptures: {0: {name: 'entity.other.attribute-name.html'}},
      end: '(?=\\s*+[^=\\s])',
      name: 'meta.attribute.event-handler.$1.html',
      patterns: [
        {
          begin: '=',
          beginCaptures: {0: {name: 'punctuation.separator.key-value.html'}},
          end: '(?<=[^\\s=])(?!\\s*=)|(?=/?>)',
          patterns: [
            {
              begin: '(?=[^\\s=<>`/]|/(?!>))',
              end: '(?!\\G)',
              name: 'meta.embedded.line.js',
              patterns: [
                {
                  captures: {
                    0: {name: 'source.js'},
                    1: {patterns: [{include: 'source.js'}]}
                  },
                  match: '(([^\\s"\'=<>`/]|/(?!>))+)',
                  name: 'string.unquoted.html'
                },
                {
                  begin: '"',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.string.begin.html'}
                  },
                  contentName: 'source.js',
                  end: '(")',
                  endCaptures: {
                    0: {name: 'punctuation.definition.string.end.html'}
                  },
                  name: 'string.quoted.double.html',
                  patterns: [
                    {
                      captures: {0: {patterns: [{include: 'source.js'}]}},
                      match: '([^\\n"/]|/(?![/*]))+'
                    },
                    {
                      begin: '//',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.js'}
                      },
                      end: '(?=")|\\n',
                      name: 'comment.line.double-slash.js'
                    },
                    {
                      begin: '/\\*',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.begin.js'}
                      },
                      end: '(?=")|\\*/',
                      endCaptures: {
                        0: {name: 'punctuation.definition.comment.end.js'}
                      },
                      name: 'comment.block.js'
                    }
                  ]
                },
                {
                  begin: "'",
                  beginCaptures: {
                    0: {name: 'punctuation.definition.string.begin.html'}
                  },
                  contentName: 'source.js',
                  end: "(')",
                  endCaptures: {
                    0: {name: 'punctuation.definition.string.end.html'},
                    1: {name: 'source.js-ignored-vscode'}
                  },
                  name: 'string.quoted.single.html',
                  patterns: [
                    {
                      captures: {0: {patterns: [{include: 'source.js'}]}},
                      match: "([^\\n'/]|/(?![/*]))+"
                    },
                    {
                      begin: '//',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.js'}
                      },
                      end: "(?=')|\\n",
                      name: 'comment.line.double-slash.js'
                    },
                    {
                      begin: '/\\*',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.begin.js'}
                      },
                      end: "(?=')|\\*/",
                      endCaptures: {
                        0: {name: 'punctuation.definition.comment.end.js'}
                      },
                      name: 'comment.block.js'
                    }
                  ]
                }
              ]
            },
            {match: '=', name: 'invalid.illegal.unexpected-equals-sign.html'}
          ]
        }
      ]
    },
    'html:tag-attributes': {
      begin: '\\G',
      end: '(?=/>)|>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.html'}},
      patterns: [{include: '#astro:attribute'}]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#html:entity'}, {include: '#html:entity:bogus'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#html:entity'}, {include: '#html:entity:bogus'}]
    },
    'string-template-literal': {
      begin: '`',
      end: '`',
      name: 'string.template.html',
      patterns: [{include: 'source.tsx#template-substitution-element'}]
    }
  },
  scopeName: 'source.astro'
}

export default grammar
