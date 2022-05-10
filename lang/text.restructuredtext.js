// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.rst', '.rest', '.rest.txt', '.rst.txt'],
  names: ['restructuredtext', 'rst'],
  patterns: [{include: '#all'}],
  repository: {
    all: {
      patterns: [
        {include: '#escape'},
        {include: '#line-blocks'},
        {include: '#tables'},
        {include: '#headings'},
        {include: '#substitution-definition'},
        {include: '#directives'},
        {include: '#raw-blocks'},
        {include: '#inlines'},
        {include: '#tag-name'},
        {include: '#doctests'},
        {include: '#domains'},
        {include: '#comments'}
      ]
    },
    'anonymous-link': {
      captures: {
        1: {name: 'punctuation.definition.link.restructuredtext'},
        2: {name: 'markup.underline.link.restructuredtext'}
      },
      match: '\\s*(__)\\s+(.+)',
      name: 'meta.link.restructuredtext'
    },
    citations: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.link.restructuredtext'},
            2: {name: 'constant.other.citation.link.restructuredtext'},
            3: {name: 'punctuation.definition.constant.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'},
            5: {name: 'punctuation.definition.constant.restructuredtext'},
            6: {name: 'string.other.citation.restructuredtext'}
          },
          match: '^(\\.\\.)\\s+((\\[)[A-z][A-z0-9]*(\\]))(_)\\s+(.*)',
          name: 'meta.link.citation.def.restructuredtext'
        },
        {
          captures: {
            1: {name: 'constant.other.citation.link.restructuredtext'},
            2: {name: 'punctuation.definition.constant.restructuredtext'},
            3: {name: 'punctuation.definition.constant.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'}
          },
          match: '((\\[)[A-z][A-z0-9_-]*(\\]))(_)',
          name: 'meta.link.citation.restructuredtext'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '^(\\.\\.)[\\t ]*$\\n?',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '^(?<=\\G)\\s*$\\n?|^(?=\\S)',
          name: 'comment.block.empty-start.double-dot.restructuredtext',
          patterns: [
            {begin: '^(\\s+).*?\\S+\\s*$\\n', end: '^\\s*$\\n|^(?=\\S)'}
          ]
        },
        {
          begin: '^([\\t ]*)(\\.\\.)[\\t ]*$\\n?',
          beginCaptures: {
            2: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '^(?!\\1\\s*\\S)|^(?<!\\G)\\s*$\\n?|^(?=\\S)',
          name: 'comment.block.empty-start.double-dot.restructuredtext',
          patterns: [
            {begin: '^(\\s+).*?\\S+\\s*$\\n', end: '^\\s*$\\n|^\\s*(?=\\S)'}
          ]
        },
        {
          begin: '^(\\s*)(\\.\\.)(?=\\s|$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '^(?!\\1[\\t\\s]+\\S|\\s*$)|^(?=\\S)',
          name: 'comment.block.double-dot.restructuredtext'
        }
      ]
    },
    'directive-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.tag-value.restructuredtext'}
          },
          match: '(:[^:]+:)\\s*(.*)',
          name: 'meta.directive-option.restructuredtext'
        }
      ]
    },
    directives: {
      patterns: [
        {
          begin: '^(\\s*)(\\.\\.)\\s(image)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {patterns: [{include: '#uri'}]}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.image.restructuredtext',
          patterns: [{include: '#image-options'}]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s(figure)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {patterns: [{include: '#uri'}]}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.figure.restructuredtext',
          patterns: [{include: '#image-options'}, {include: '#all'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(raw)(::)\\s+(html)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(coffee-?script)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.coffee',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.coffee'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(js|javascript)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.js',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.js'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(typescript)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ts',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.ts'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(json)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.json',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.json'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(css)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.css',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.css'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(xml)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.xml',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.xml'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(ruby)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ruby',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(java)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.java',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.java'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(erlang)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.erlang',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.erlang'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(csharp|c#)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.cs',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.cs'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(php[3-5]?)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.php',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.html.php'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(shell|(ba|k)?sh)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.shell',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(py(thon)?|sage)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(ipython)(::)\\s+(py(thon)?)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(stata)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.stata',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.stata'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(sas)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(objective-?c|obj-?c)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.objc',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.objc'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(code(?:-block)?)(::)\\s+(yaml)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.yaml',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.yaml'}]
        },
        {
          begin: '^([ \\t]*)(\\.\\.)\\s(math)(::)\\s*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'markup.math.block.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'source.embedded.latex',
          patterns: [{include: 'text.tex#math'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'},
            4: {
              patterns: [
                {
                  match: '<|>',
                  name: 'punctuation.definition.bracket.angle.restructuredtext'
                },
                {
                  match: ',',
                  name: 'punctuation.delimiter.comma.restructuredtext'
                },
                {
                  match: '[^\\s<>,]+',
                  name: 'entity.name.directive.restructuredtext'
                }
              ]
            }
          },
          match: '^\\s*(\\.\\.)\\s(option)(::)\\s*(.+)?$',
          name: 'meta.option.directive.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          match: '^\\s*(\\.\\.)\\s([A-z][-A-z0-9_]+)(::)\\s*$',
          name: 'meta.other.directive.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'},
            4: {name: 'entity.name.directive.restructuredtext'}
          },
          match: '^\\s*(\\.\\.)\\s([A-z][-A-z0-9_]+)(::)\\s+(.+?)\\s*$',
          name: 'meta.other.directive.restructuredtext'
        }
      ]
    },
    doctests: {
      begin: '^(\\s*)(>>>)\\s+(.*)$\\n',
      beginCaptures: {
        2: {name: 'punctuation.separator.prompt.doctest.restructuredtext'},
        3: {patterns: [{include: 'source.python'}]}
      },
      contentName: 'markup.raw.restructuredtext',
      end: '^\\s*$|^(?=\\1>>> )|^(?=>>>)|^(?!\\1)\\s+\\S',
      name: 'meta.doctest.restructuredtext'
    },
    'doctree-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.class-list.restructuredtext'}
          },
          match: '(:class:)\\s*(.*)',
          name: 'meta.doctree-option.class.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.name.restructuredtext'}
          },
          match: '(:name:)\\s*(.*)',
          name: 'meta.doctree-option.name.restructuredtext'
        }
      ]
    },
    domains: {
      patterns: [
        {
          begin: '^(\\s*)(\\.\\.)\\s+(py)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]{6,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: 'source.python'}]},
                2: {name: 'punctuation.parenthesis.begin.python'},
                3: {
                  patterns: [
                    {
                      match: '\\\\.',
                      name: 'constant.character.escape.restructuredtext'
                    },
                    {include: 'source.python'}
                  ]
                },
                4: {name: 'punctuation.parenthesis.end.python'}
              },
              match: '(?:\\G|^)([^(]*)(\\()([^\\\\)]*\\\\[^)]*)(\\))'
            },
            {include: 'source.python'}
          ]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s+(c)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'source.embedded.c',
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [{include: 'source.c'}]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s+(cpp)(::?)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {
                  name: 'source.embedded.cpp',
                  patterns: [{include: 'source.c++'}]
                },
                2: {name: 'constant.character.escape.newline.restructuredtext'}
              },
              match: '(.+)(\\\\?)$'
            }
          ]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s+(js)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {
                  name: 'source.embedded.js',
                  patterns: [{include: 'source.js'}]
                },
                2: {name: 'constant.character.escape.newline.restructuredtext'}
              },
              match: '(.+)(\\\\?)$'
            }
          ]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s+([^:]+)(::?)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'string.unquoted.domain.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext'
        }
      ]
    },
    emphasis: {
      patterns: [
        {
          begin: '\\*\\*(?=[^\\*\\s])',
          beginCaptures: {
            0: {name: 'punctuation.definition.bold.begin.restructuredtext'}
          },
          end: '\\*\\*|^(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.bold.end.restructuredtext'}
          },
          name: 'markup.bold.restructuredtext',
          patterns: [{include: '#inlines'}]
        },
        {
          begin: '(?<!\\\\)\\*(?=[^\\*\\s])',
          beginCaptures: {
            0: {name: 'punctuation.definition.italic.begin.restructuredtext'}
          },
          end: '(?<!\\\\)\\*|^(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.italic.end.restructuredtext'}
          },
          name: 'markup.italic.restructuredtext',
          patterns: [{include: '#inlines'}]
        }
      ]
    },
    escape: {
      match: '\\\\.',
      name: 'constant.character.escape.backslash.restructuredtext'
    },
    footnotes: {
      patterns: [
        {
          begin: '^(\\s*)(\\.\\.)\\s+((\\[)(((#?)[^\\]]*?)|\\*)(\\]))\\s+',
          captures: {
            2: {name: 'punctuation.definition.link.restructuredtext'},
            3: {name: 'constant.other.footnote.link.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'},
            7: {name: 'punctuation.definition.constant.restructuredtext'},
            8: {name: 'punctuation.definition.constant.restructuredtext'}
          },
          contentName: 'string.other.footnote.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.link.footnote.def.restructuredtext',
          patterns: [{include: '#inlines'}]
        },
        {
          captures: {
            1: {name: 'constant.other.footnote.link'},
            2: {name: 'punctuation.definition.constant.restructuredtext'},
            3: {name: 'punctuation.definition.constant.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'}
          },
          match: '((\\[)[0-9]+(\\]))(_)',
          name: 'meta.link.footnote.numeric.restructuredtext'
        },
        {
          captures: {
            1: {name: 'constant.other.footnote.link'},
            2: {name: 'punctuation.definition.constant.restructuredtext'},
            3: {name: 'punctuation.definition.constant.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'}
          },
          match: '((\\[#)[A-z0-9_]*(\\]))(_)',
          name: 'meta.link.footnote.auto.restructuredtext'
        },
        {
          captures: {
            1: {name: 'constant.other.footnote.link.restructuredtext'},
            2: {name: 'punctuation.definition.constant.restructuredtext'},
            3: {name: 'punctuation.definition.constant.restructuredtext'},
            4: {name: 'punctuation.definition.constant.restructuredtext'}
          },
          match: '((\\[)\\*(\\]))(_)',
          name: 'meta.link.footnote.symbol.auto.restructuredtext'
        }
      ]
    },
    headings: {
      captures: {1: {name: 'punctuation.definition.heading.restructuredtext'}},
      match: '^(([-=~`#"^+*:.\'_])\\2{2,})(?=\\s*$)',
      name: 'markup.heading.restructuredtext'
    },
    'image-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.tag-value.restructuredtext'}
          },
          match: '(:alt:)\\s*(.*)',
          name: 'meta.image-option.alt.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(:height:)\\s*(.*)',
          name: 'meta.image-option.height.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(:width:)\\s*(.*)',
          name: 'meta.image-option.width.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(:scale:)\\s*(.*)',
          name: 'meta.image-option.scale.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'keyword.language.image-alignment.restructuredtext'}
          },
          match: '(:align:)\\s*(?:(top|middle|bottom|left|center|right)\\b)?',
          name: 'meta.image-option.align.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.target.restructuredtext'}
          },
          match: '(:target:)\\s*(.*)?',
          name: 'meta.image-option.target.restructuredtext'
        },
        {include: '#doctree-options'},
        {include: '#directive-options'}
      ]
    },
    inlines: {
      patterns: [
        {include: '#escape'},
        {include: '#emphasis'},
        {include: '#link-definition'},
        {include: '#substitution'},
        {include: '#literal'},
        {include: '#math-inline'},
        {include: '#interpreted-line'},
        {include: '#anonymous-link'},
        {include: '#link-reference'},
        {include: '#interpreted-block'},
        {include: '#link-text'},
        {include: '#footnotes'},
        {include: '#citations'}
      ]
    },
    'interpreted-block': {
      begin: '(:)([-A-z0-9:_.]*?)(:)(`)',
      beginCaptures: {
        1: {name: 'punctuation.definition.intepreted.restructuredtext'},
        2: {name: 'entity.name.role.restructuredtext'},
        3: {name: 'punctuation.definition.intepreted.restructuredtext'},
        4: {name: 'punctuation.definition.intepreted.restructuredtext'}
      },
      contentName: 'string.other.interpreted.restructuredtext',
      end: '(`)',
      endCaptures: {
        1: {name: 'punctuation.definition.intepreted.restructuredtext'}
      },
      name: 'markup.other.command.restructuredtext',
      patterns: [
        {
          captures: {
            1: {name: 'markup.bold.manpage-name.restructuredtext'},
            2: {
              name: 'punctuation.definition.round.bracket.begin.restructuredtext'
            },
            3: {name: 'constant.numeric.integer.restructuredtext'},
            4: {
              name: 'punctuation.definition.round.bracket.begin.restructuredtext'
            }
          },
          match: '(?<=:manpage:`)\\G([-.\\w]+)(\\()(\\d+)(\\))',
          name: 'meta.manpage.link.inline.restructuredtext'
        }
      ]
    },
    'interpreted-line': {
      captures: {
        1: {name: 'punctuation.definition.intepreted.restructuredtext'},
        2: {name: 'punctuation.definition.intepreted.restructuredtext'}
      },
      match: '(`)[^`]+(`)(?!_)',
      name: 'markup.other.command.restructuredtext'
    },
    length: {
      captures: {
        1: {name: 'keyword.other.${1:/downcase}-unit.restructuredtext'},
        2: {name: 'keyword.other.percentile-unit.restructuredtext'}
      },
      match: '[\\d.]+\\s*(?i:(em|ex|px|in|cm|mm|pt|pc)|(%))?',
      name: 'constant.numeric.length.restructuredtext'
    },
    'line-blocks': {
      begin: '^(\\s*)(\\|)(?!.*?(?<=\\S)\\|)',
      beginCaptures: {
        2: {name: 'punctuation.separator.line-block.restructuredtext'}
      },
      end: '^(?=\\s*$\\n?)',
      name: 'meta.line-block.restructuredtext',
      patterns: [
        {
          captures: {
            0: {name: 'punctuation.separator.line-block.restructuredtext'}
          },
          match: '^\\s*(\\|)'
        },
        {include: '#inlines'}
      ]
    },
    'link-definition': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.link.restructuredtext'},
            2: {name: 'punctuation.definition.string.restructuredtext'},
            3: {name: 'string.other.link.title.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {patterns: [{include: '#uri'}]}
          },
          match: '(\\.\\.)\\s+(_)([-.:+\\d\\w\\s()/]+?)(:)\\s+(.*)',
          name: 'meta.link.reference.def.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.link.restructuredtext'},
            2: {name: 'punctuation.definition.string.restructuredtext'},
            3: {name: 'string.other.link.title.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {patterns: [{include: '#uri'}]}
          },
          match: '(\\.\\.)\\s+(_`)([^`]+)(`:)\\s+(.*)',
          name: 'meta.link.reference.def.restructuredtext'
        }
      ]
    },
    'link-reference': {
      patterns: [
        {
          captures: {
            1: {name: 'string.other.link.title.restructuredtext'},
            2: {name: 'punctuation.definition.link.restructuredtext'}
          },
          match: '\\b([-.:+_\\d\\w]+)(_)\\b',
          name: 'meta.link.reference'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.link.restructuredtext'},
            2: {name: 'string.other.link.title.restructuredtext'},
            3: {name: 'punctuation.definition.link.restructuredtext'}
          },
          match: '(`)(.*?)(`__?)',
          name: 'meta.link.reference'
        }
      ]
    },
    'link-text': {
      captures: {
        1: {name: 'punctuation.definition.link.restructuredtext'},
        2: {name: 'string.other.link.title.restructuredtext'},
        3: {name: 'punctuation.definition.location.restructuredtext'},
        4: {name: 'markup.underline.link.restructuredtext'},
        5: {name: 'punctuation.definition.location.restructuredtext'},
        6: {name: 'punctuation.definition.link.restructuredtext'}
      },
      match: '(`)([^<`]+)\\s+(<)(.*?)(>)(`_)',
      name: 'meta.link.inline.restructuredtext'
    },
    literal: {
      begin: '``',
      beginCaptures: {
        0: {name: 'punctuation.definition.raw.begin.restructuredtext'}
      },
      end: '``((?=[^`\\w\\d])|$)',
      endCaptures: {
        0: {name: 'punctuation.definition.raw.end.restructuredtext'}
      },
      name: 'markup.raw.restructuredtext'
    },
    'math-inline': {
      begin: '(:)(math)(:)(`)',
      beginCaptures: {
        1: {name: 'punctuation.definition.intepreted.restructuredtext'},
        2: {name: 'entity.name.role.restructuredtext'},
        3: {name: 'punctuation.definition.intepreted.restructuredtext'},
        4: {name: 'punctuation.definition.intepreted.restructuredtext'}
      },
      contentName: 'markup.math.inline.restructuredtext',
      end: '(`)',
      endCaptures: {
        1: {name: 'punctuation.definition.intepreted.restructuredtext'}
      },
      name: 'markup.other.command.restructuredtext',
      patterns: [{include: 'text.tex#math'}]
    },
    'raw-blocks': {
      begin: '^(?!\\s*\\.\\.\\s\\w+)(\\s*)(.*)(::)$',
      beginCaptures: {
        2: {patterns: [{include: '#inlines'}]},
        3: {name: 'punctuation.section.raw.restructuredtext'}
      },
      contentName: 'meta.raw.block.restructuredtext',
      end: '^(?!\\s*$|\\1[ \\t]+\\S)',
      patterns: [{match: '.+', name: 'markup.raw.inner.restructuredtext'}]
    },
    substitution: {
      captures: {
        1: {name: 'punctuation.definition.substitution.restructuredtext'},
        2: {name: 'punctuation.definition.substitution.restructuredtext'}
      },
      match: '(?<!\\\\)(\\|)[^|]+(?<!\\\\)(\\|_{0,2})',
      name: 'support.variable.substitution.restructuredtext'
    },
    'substitution-definition': {
      patterns: [
        {
          begin:
            '^(\\s*)(\\.\\.)\\s(\\|)(?=\\S)([^\\|]+)((?<=\\S)\\|)\\s+(image)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {
              name: 'punctuation.definition.substitution.start.restructuredtext'
            },
            4: {name: 'entity.name.substitution.restructuredtext'},
            5: {
              name: 'punctuation.definition.substitution.end.restructuredtext'
            },
            6: {name: 'support.directive.restructuredtext'},
            7: {name: 'punctuation.separator.key-value.restructuredtext'},
            8: {patterns: [{include: '#uri'}]}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.substitution-definition.image.restructuredtext',
          patterns: [{include: '#image-options'}]
        },
        {
          begin:
            '^(\\s*)(\\.\\.)\\s(\\|)(?=\\S)([^\\|]+)((?<=\\S)\\|)\\s+(\\S+.*(?=::))(::)(.*)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {
              name: 'punctuation.definition.substitution.start.restructuredtext'
            },
            4: {name: 'entity.name.substitution.restructuredtext'},
            5: {
              name: 'punctuation.definition.substitution.end.restructuredtext'
            },
            6: {name: 'support.directive.restructuredtext'},
            7: {name: 'punctuation.separator.key-value.restructuredtext'},
            8: {name: 'string.unquoted.substitution.data.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.substitution-definition.restructuredtext',
          patterns: [{include: '#directive-options'}]
        }
      ]
    },
    'table-borders': {
      patterns: [
        {
          begin: '\\+(?=-+(?=\\+|$))',
          beginCaptures: {
            0: {name: 'punctuation.definition.table.joint.restructuredtext'}
          },
          contentName:
            'punctuation.definition.table.row-divider.restructuredtext',
          end: '(?=\\+(?=-)|$)|\\+(?=\\s|$)',
          endCaptures: {
            0: {name: 'punctuation.definition.table.joint.restructuredtext'}
          }
        },
        {
          begin: '\\+(?==+(?=\\+|$))',
          beginCaptures: {
            0: {name: 'punctuation.definition.table.joint.restructuredtext'}
          },
          contentName:
            'punctuation.definition.table.header.row-divider.restructuredtext',
          end: '(?=\\+(?==)|$)|\\+\\s*$',
          endCaptures: {
            0: {name: 'punctuation.definition.table.joint.restructuredtext'}
          }
        },
        {
          match: '\\|',
          name: 'punctuation.definition.table.header.column-divider.restructuredtext'
        }
      ]
    },
    tables: {
      patterns: [
        {
          begin: '(?=((\\+-[+-]+))|((\\+=[+=]+))\\s*$)',
          contentName: 'markup.other.table.restructuredtext',
          end: '^\\s*$',
          name: 'meta.table.grid-table.restructuredtext',
          patterns: [{include: '#table-borders'}, {include: '#inlines'}]
        },
        {
          match:
            '(?x)\n^\\s*-{2,}\\s+-{2,}(?:\\s+-{2,})*\\s*$\n|\n^\\s*={2,}\\s+={2,}(?:\\s+={2,})*\\s*$',
          name: 'punctuation.definition.table.simple-divider.restructuredtext'
        }
      ]
    },
    'tag-name': {
      captures: {
        1: {name: 'punctuation.definition.field.restructuredtext'},
        2: {name: 'punctuation.definition.field.restructuredtext'}
      },
      match: '(:)[A-Za-z][\\w\\s=.-]*(:)',
      name: 'entity.name.tag.restructuredtext'
    },
    uri: {
      captures: {0: {name: 'markup.link.underline.restructuredtext'}},
      match: '\\S+',
      name: 'string.other.uri.restructuredtext'
    }
  },
  scopeName: 'text.restructuredtext'
}

export default grammar
