// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/withastro/language-tools>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.astro'],
  injections: {
    'L:(meta.script.astro) (meta.lang.js | meta.lang.javascript | meta.lang.partytown | meta.lang.node) - (meta source)':
      {
        patterns: [
          {
            begin: '(?<=>)(?!</)',
            contentName: 'source.js',
            end: '(?=</)',
            name: 'meta.embedded.block.astro',
            patterns: [{include: 'source.js'}]
          }
        ]
      },
    'L:(meta.script.astro) (meta.lang.json) - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.json',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.json'}]
        }
      ]
    },
    'L:(meta.script.astro) (meta.lang.ts | meta.lang.typescript) - (meta source)':
      {
        patterns: [
          {
            begin: '(?<=>)(?!</)',
            contentName: 'source.ts',
            end: '(?=</)',
            name: 'meta.embedded.block.astro',
            patterns: [{include: 'source.ts'}]
          }
        ]
      },
    'L:meta.script.astro - meta.lang - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.js',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.js'}]
        }
      ]
    },
    'L:meta.style.astro - meta.lang - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.css'}]
        }
      ]
    },
    'L:meta.style.astro meta.lang.css - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.css'}]
        }
      ]
    },
    'L:meta.style.astro meta.lang.less - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css.less',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.css.less'}]
        }
      ]
    },
    'L:meta.style.astro meta.lang.postcss - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css.postcss',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: []
        }
      ]
    },
    'L:meta.style.astro meta.lang.sass - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.sass',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.sass'}]
        }
      ]
    },
    'L:meta.style.astro meta.lang.scss - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.css.scss',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.css.scss'}]
        }
      ]
    },
    'L:meta.style.astro meta.lang.stylus - (meta source)': {
      patterns: [
        {
          begin: '(?<=>)(?!</)',
          contentName: 'source.stylus',
          end: '(?=</)',
          name: 'meta.embedded.block.astro',
          patterns: [{include: 'source.stylus'}]
        }
      ]
    }
  },
  names: ['astro'],
  patterns: [{include: '#scope'}, {include: '#frontmatter'}],
  repository: {
    attributes: {
      patterns: [
        {include: '#attributes-events'},
        {include: '#attributes-keyvalue'},
        {include: '#attributes-interpolated'}
      ]
    },
    'attributes-events': {
      begin:
        '(on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur)))(?![\\\\w:-])',
      beginCaptures: {
        0: {
          patterns: [{match: '.*', name: 'entity.other.attribute-name.astro'}]
        }
      },
      end: '(?=\\s*+[^=\\s])',
      name: 'meta.attribute.$1.astro',
      patterns: [
        {
          begin: '=',
          beginCaptures: {0: {name: 'punctuation.separator.key-value.astro'}},
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
                  match: '(([^\\s\\"\'=<>`/]|/(?!>))+)',
                  name: 'string.unquoted.astro'
                },
                {
                  begin: '([\'"])',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.string.begin.astro'}
                  },
                  end: '\\1',
                  endCaptures: {
                    0: {name: 'punctuation.definition.string.end.astro'}
                  },
                  name: 'string.quoted.astro',
                  patterns: [
                    {
                      captures: {0: {patterns: [{include: 'source.js'}]}},
                      match: '([^\\n\\"/]|/(?![/*]))+'
                    },
                    {
                      begin: '//',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.js'}
                      },
                      end: '(?=\\")|\\n',
                      name: 'comment.line.double-slash.js'
                    },
                    {
                      begin: '/\\*',
                      beginCaptures: {
                        0: {name: 'punctuation.definition.comment.begin.js'}
                      },
                      end: '(?=\\")|\\*/',
                      endCaptures: {
                        0: {name: 'punctuation.definition.comment.end.js'}
                      },
                      name: 'comment.block.js'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'attributes-interpolated': {
      begin: '(?<!:|=)\\s*({)',
      contentName: 'meta.embedded.expression.astro source.tsx',
      end: '(\\})',
      patterns: [{include: 'source.tsx'}]
    },
    'attributes-keyvalue': {
      begin: '([_@$[:alpha:]][:._\\-$[:alnum:]]*)',
      beginCaptures: {
        0: {
          patterns: [{match: '.*', name: 'entity.other.attribute-name.astro'}]
        }
      },
      end: '(?=\\s*+[^=\\s])',
      name: 'meta.attribute.$1.astro',
      patterns: [
        {
          begin: '=',
          beginCaptures: {0: {name: 'punctuation.separator.key-value.astro'}},
          end: '(?<=[^\\s=])(?!\\s*=)|(?=/?>)',
          patterns: [{include: '#attributes-value'}]
        }
      ]
    },
    'attributes-value': {
      patterns: [
        {include: '#interpolation'},
        {match: '([^\\s"\'=<>`/]|/(?!>))+', name: 'string.unquoted.astro'},
        {
          begin: '([\'"])',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.astro'}
          },
          end: '\\1',
          endCaptures: {0: {name: 'punctuation.definition.string.end.astro'}},
          name: 'string.quoted.astro'
        },
        {
          begin: '(`)',
          end: '\\1',
          name: 'string.template.astro',
          patterns: [{include: 'source.tsx#template-substitution-element'}]
        }
      ]
    },
    comments: {
      begin: '<!--',
      captures: {0: {name: 'punctuation.definition.comment.astro'}},
      end: '-->',
      name: 'comment.block.astro',
      patterns: [
        {
          match: '\\G-?>|<!--(?!>)|<!-(?=-->)|--!>',
          name: 'invalid.illegal.characters-not-allowed-here.astro'
        }
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
    interpolation: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.astro'}
          },
          contentName: 'meta.embedded.expression.astro source.tsx',
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.astro'}},
          patterns: [
            {
              begin: '\\G\\s*(?={)',
              end: '(?<=})',
              patterns: [{include: 'source.tsx#object-literal'}]
            },
            {include: 'source.tsx'}
          ]
        }
      ]
    },
    scope: {
      patterns: [
        {include: '#comments'},
        {include: '#tags'},
        {include: '#interpolation'},
        {begin: '(?<=>|})', end: '(?=<|{)', name: 'text.astro'}
      ]
    },
    tags: {
      patterns: [
        {include: '#tags-raw'},
        {include: '#tags-lang'},
        {include: '#tags-void'},
        {include: '#tags-general-end'},
        {include: '#tags-general-start'}
      ]
    },
    'tags-end-node': {
      captures: {
        1: {name: 'meta.tag.end.astro punctuation.definition.tag.begin.astro'},
        2: {name: 'meta.tag.end.astro', patterns: [{include: '#tags-name'}]},
        3: {name: 'meta.tag.end.astro punctuation.definition.tag.end.astro'},
        4: {name: 'meta.tag.start.astro punctuation.definition.tag.end.astro'}
      },
      match: '(</)(.*?)\\s*(>)|(/>)'
    },
    'tags-general-end': {
      begin: '(</)([^/\\s>]*)',
      beginCaptures: {
        1: {name: 'meta.tag.end.astro punctuation.definition.tag.begin.astro'},
        2: {name: 'meta.tag.end.astro', patterns: [{include: '#tags-name'}]}
      },
      end: '(>)',
      endCaptures: {
        1: {name: 'meta.tag.end.astro punctuation.definition.tag.end.astro'}
      },
      name: 'meta.scope.tag.$2.astro'
    },
    'tags-general-start': {
      begin: '(<)([^/\\s>/]*)',
      beginCaptures: {0: {patterns: [{include: '#tags-start-node'}]}},
      end: '(/?>)',
      endCaptures: {
        1: {name: 'meta.tag.start.astro punctuation.definition.tag.end.astro'}
      },
      name: 'meta.scope.tag.$2.astro',
      patterns: [{include: '#tags-start-attributes'}]
    },
    'tags-lang': {
      begin: '<(script|style)',
      beginCaptures: {0: {patterns: [{include: '#tags-start-node'}]}},
      end: '</\\1\\s*>|/>',
      endCaptures: {0: {patterns: [{include: '#tags-end-node'}]}},
      name: 'meta.scope.tag.$1.astro meta.$1.astro',
      patterns: [
        {
          begin:
            '\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*([\'"]|)(?:text\\/)?(application\\/ld\\+json)\\2)',
          end: '(?=</|/>)',
          name: 'meta.lang.json.astro',
          patterns: [{include: '#tags-lang-start-attributes'}]
        },
        {
          begin: '\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*([\'"]|)(module)\\2)',
          end: '(?=</|/>)',
          name: 'meta.lang.javascript.astro',
          patterns: [{include: '#tags-lang-start-attributes'}]
        },
        {
          begin:
            '\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*([\'"]|)(?:text/|application/)?([\\w\\/+]+)\\2)',
          end: '(?=</|/>)',
          name: 'meta.lang.$3.astro',
          patterns: [{include: '#tags-lang-start-attributes'}]
        },
        {include: '#tags-lang-start-attributes'}
      ]
    },
    'tags-lang-start-attributes': {
      begin: '\\G',
      end: '(?=/>)|>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.astro'}},
      name: 'meta.tag.start.astro',
      patterns: [{include: '#attributes'}]
    },
    'tags-name': {
      patterns: [
        {match: '[A-Z][a-zA-Z0-9_]*', name: 'support.class.component.astro'},
        {
          match: '[a-z][\\w0-9:]*-[\\w0-9:-]*',
          name: 'meta.tag.custom.astro entity.name.tag.astro'
        },
        {match: '[a-z][\\w0-9:-]*', name: 'entity.name.tag.astro'}
      ]
    },
    'tags-raw': {
      begin: '<([^/?!\\s<>]+)(?=[^>]+is:raw).*?',
      beginCaptures: {0: {patterns: [{include: '#tags-start-node'}]}},
      contentName: 'source.unknown',
      end: '</\\1\\s*>|/>',
      endCaptures: {0: {patterns: [{include: '#tags-end-node'}]}},
      name: 'meta.scope.tag.$1.astro meta.raw.astro',
      patterns: [{include: '#tags-lang-start-attributes'}]
    },
    'tags-start-attributes': {
      begin: '\\G',
      end: '(?=/?>)',
      name: 'meta.tag.start.astro',
      patterns: [{include: '#attributes'}]
    },
    'tags-start-node': {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.astro'},
        2: {patterns: [{include: '#tags-name'}]}
      },
      match: '(<)([^/\\s>/]*)',
      name: 'meta.tag.start.astro'
    },
    'tags-void': {
      begin:
        '(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.astro'},
        2: {name: 'entity.name.tag.astro'}
      },
      end: '/?>',
      endCaptures: {0: {name: 'punctuation.definition.tag.begin.astro'}},
      name: 'meta.tag.void.astro',
      patterns: [{include: '#attributes'}]
    }
  },
  scopeName: 'source.astro'
}

export default grammar
