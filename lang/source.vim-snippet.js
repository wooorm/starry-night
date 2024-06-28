// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-viml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.snip', '.snippets'],
  extensionsWithDot: ['.snippet'],
  names: ['vim-snippet', 'snipmate', 'ultisnip', 'ultisnips', 'neosnippet'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '^#',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.number-sign.vim-snippet'}
      },
      end: '$',
      name: 'comment.line.number-sign.vim-snippet'
    },
    escape: {
      captures: {1: {name: 'punctuation.definition.escape.vim-snippet'}},
      match: '(\\\\).',
      name: 'constant.character.escape.dollar-sign.vim-snippet'
    },
    expression: {
      patterns: [
        {
          begin: '(`)(!p)',
          beginCaptures: {
            1: {name: 'punctuation.section.begin.embedded.vim-snippet'},
            2: {name: 'keyword.operator.use-python.vim-snippet'}
          },
          end: '`',
          endCaptures: {
            0: {name: 'punctuation.section.end.embedded.vim-snippet'}
          },
          name: 'string.interpolated.python-code.vim-snippet',
          patterns: [
            {
              captures: {0: {patterns: [{include: 'source.python'}]}},
              match: '(?:[^\\\\`]|\\\\.)+',
              name: 'source.embedded.python'
            }
          ]
        },
        {
          begin: '(`)(!v)',
          beginCaptures: {
            1: {name: 'punctuation.section.begin.embedded.vim-snippet'},
            2: {name: 'keyword.operator.use-viml.vim-snippet'}
          },
          end: '`',
          endCaptures: {
            0: {name: 'punctuation.section.end.embedded.vim-snippet'}
          },
          name: 'string.interpolated.viml-code.vim-snippet',
          patterns: [
            {
              captures: {0: {patterns: [{include: 'source.viml'}]}},
              match: '(?:[^\\\\`]|\\\\.)+',
              name: 'source.embedded.viml'
            }
          ]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.section.begin.embedded.vim-snippet'}
          },
          end: '`',
          endCaptures: {
            0: {name: 'punctuation.section.end.embedded.vim-snippet'}
          },
          name: 'string.interpolated.vim-snippet',
          patterns: [
            {
              captures: {0: {patterns: [{include: 'source.viml'}]}},
              match: '(?:[^\\\\`]|\\\\.)+',
              name: 'source.embedded.viml'
            }
          ]
        }
      ]
    },
    extends: {
      begin: '^(extends|include|source)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.control.$1.directive.vim-snippet'}},
      end: '$',
      name: 'meta.$1.directive.vim-snippet',
      patterns: [
        {match: ',', name: 'punctuation.separator.delimiter.comma.vim-snippet'},
        {match: '[^,\\s]+', name: 'entity.other.inherited-class.vim-snippet'}
      ]
    },
    global: {
      begin: '^(global)\\s+(!p)[ \\t]*$',
      beginCaptures: {
        1: {name: 'keyword.control.global.begin.vim-snippet'},
        2: {name: 'keyword.operator.use-python.vim-snippet'}
      },
      contentName: 'source.embedded.python',
      end: '^(endglobal)(?=\\s|$)',
      endCaptures: {1: {name: 'keyword.control.global.end.vim-snippet'}},
      name: 'meta.ultisnip.global.vim-snippet',
      patterns: [{include: 'source.python'}]
    },
    main: {
      patterns: [
        {include: '#snippet'},
        {include: '#comment'},
        {include: '#extends'},
        {include: '#global'},
        {include: '#priority'},
        {include: '#expression'},
        {include: '#version'},
        {include: '#ultisnips'},
        {include: '#neosnippet'}
      ]
    },
    neosnippet: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.$1.vim-snippet'},
            2: {name: 'entity.other.neosnippet-keyword.vim-snippet'}
          },
          match: '(?:\\G|^)(abbr|alias|delete|options)\\s+(\\S.*)',
          name: 'meta.neosnippet-field.vim-snippet'
        },
        {
          captures: {
            1: {name: 'keyword.operator.regex.vim-snippet'},
            2: {name: 'string.regexp.quoted.single.vim-snippet'},
            3: {name: 'punctuation.definition.string.regexp.begin.vim-snippet'},
            4: {patterns: [{include: 'source.regexp'}]},
            5: {name: 'punctuation.definition.string.regexp.end.vim-snippet'},
            6: {name: 'punctuation.definition.string.regexp.begin.vim-snippet'},
            7: {patterns: [{include: 'source.regexp'}]},
            8: {name: 'punctuation.definition.string.regexp.end.vim-snippet'},
            9: {patterns: [{include: 'source.regexp'}]}
          },
          match:
            '(?x) (?:\\G|^)\n(regexp) \\s+\n( (\')([^\']*)(\') # Single-quoted\n| (")([^"]*)(") # Double-quoted\n| ([^\'"\\s]\\.) # Unquoted (?)\n)',
          name: 'meta.neosnippet-field.vim-snippet'
        }
      ]
    },
    priority: {
      begin: '^priority(?=\\s|$)',
      beginCaptures: {
        0: {name: 'keyword.control.version.directive.vim-snippet'}
      },
      end: '$',
      patterns: [
        {
          match: '[-+]?[\\d.]+',
          name: 'constant.numeric.integer.int.vim-snippet'
        }
      ]
    },
    snippet: {
      begin: '^(snippet)(!{0,2})(?=[ \\t]|$)',
      beginCaptures: {
        1: {name: 'storage.type.class.vim-snippet'},
        2: {name: 'keyword.operator.scope.modifier.vim-snippet'}
      },
      end: '^(endsnippet)\\s*$|(?=^\\S)|(?<=endsnippet)(?=\\s|$)',
      endCaptures: {1: {name: 'storage.type.class.end.vim-snippet'}},
      name: 'meta.snippet.vim-snippet',
      patterns: [
        {include: '#snippetHead'},
        {include: '#snippetNeck'},
        {include: '#snippetBody'}
      ]
    },
    snippetBody: {
      patterns: [
        {include: '#escape'},
        {include: '#expression'},
        {include: '#tabStop'}
      ]
    },
    snippetHead: {
      begin: '\\G',
      end: '(?=^)|(?=\\s*$)',
      patterns: [
        {
          begin: '\\G\\s*((\\S+))',
          beginCaptures: {
            1: {name: 'entity.name.trigger.vim-snippet'},
            2: {name: 'markup.heading.vim-snippet'}
          },
          end: '(?=^|\\S)',
          patterns: [{include: '#snippetNeck'}]
        },
        {
          begin: '(?<=\\s)(")[^"]*(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.description.vim-snippet'},
            1: {name: 'punctuation.definition.string.begin.vim-snippet'},
            2: {name: 'punctuation.definition.string.end.vim-snippet'}
          },
          end: '(?=^|\\S)',
          patterns: [{include: '#snippetNeck'}]
        },
        {
          begin: '(?<=\\s)[Abeimrstw]+(?=\\s*$)',
          beginCaptures: {
            0: {name: 'constant.language.other.options.vim-snippet'}
          },
          end: '(?=^|\\S)',
          patterns: [{include: '#snippetNeck'}]
        },
        {
          begin: '(?<=\\s)\\S+',
          beginCaptures: {0: {name: 'entity.other.description.vim-snippet'}},
          end: '(?=^|\\S)',
          patterns: [{include: '#snippetNeck'}]
        },
        {include: '#snippetNeck'}
      ]
    },
    snippetNeck: {
      begin: '\\G\\s*$\\s*',
      contentName: 'meta.snippet-body.vim-snippet',
      end: '^(endsnippet)\\s*$|(?=^\\s)|(?<=endsnippet)(?=\\s|$)',
      endCaptures: {1: {name: 'storage.type.class.end.vim-snippet'}},
      patterns: [
        {
          begin:
            '(?<=^)(?=\\S)(?!endsnippet|(?:abbr|alias|regexp|options)\\s+\\S)',
          end: '^(endsnippet)(?=$|[ \\t])',
          endCaptures: {1: {name: 'storage.type.class.end.vim-snippet'}},
          patterns: [{include: '#snippetBody'}]
        },
        {
          begin: '(?<=^)(?=(?:abbr|alias|regexp|options)\\s+\\S)',
          end: '(?=^\\s)',
          patterns: [{include: '#neosnippet'}]
        }
      ]
    },
    tabStop: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.vim-snippet'}},
          match: '(\\$)([0-9]+)',
          name: 'variable.language.tab-stop.$2-nth.vim-snippet'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.begin.vim-snippet'},
            3: {name: 'punctuation.definition.variable.end.vim-snippet'}
          },
          match: '(\\${)([0-9]+)(})',
          name: 'variable.language.tab-stop.$2-nth.vim-snippet'
        },
        {
          begin: '(\\${)([0-9]+)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.variable.begin.vim-snippet'},
            3: {name: 'keyword.operator.assignment.key-value.vim-snippet'}
          },
          contentName: 'markup.inserted.placeholder.vim-snippet',
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.variable.end.vim-snippet'}
          },
          name: 'variable.language.tab-stop.$2-nth.placeholder.vim-snippet',
          patterns: [
            {include: '#visual'},
            {include: '#escape'},
            {include: '#tabStop'}
          ]
        },
        {
          begin: '(\\${)([0-9]+)(?=/)',
          beginCaptures: {
            1: {name: 'punctuation.definition.variable.begin.vim-snippet'},
            2: {name: 'variable.language.tab-stop.vim-snippet'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.variable.end.vim-snippet'}
          },
          name: 'meta.transform.tab-stop.$2-nth.vim-snippet',
          patterns: [
            {
              begin: '\\G/',
              beginCaptures: {
                0: {name: 'keyword.control.transform.begin.vim-snippet'}
              },
              contentName: 'markup.deleted.transform.vim-snippet',
              end: '/',
              endCaptures: {
                0: {name: 'keyword.control.transform.middle.vim-snippet'}
              },
              name: 'string.regexp.transform.vim-snippet',
              patterns: [{include: 'source.regexp'}]
            },
            {
              begin: '(?<=/)',
              contentName: 'markup.inserted.transform.vim-snippet',
              end: '(/)([gima]*)',
              endCaptures: {
                1: {name: 'keyword.control.transform.end.vim-snippet'},
                2: {name: 'storage.modifier.transform.option.vim-snippet'}
              },
              patterns: [{include: 'source.regexp'}]
            }
          ]
        }
      ]
    },
    ultisnips: {
      patterns: [
        {
          begin: '^(clearsnippets)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.clearsnippets.directive.vim-snippet'}
          },
          end: '$',
          name: 'meta.clear.directive.vim-snippet',
          patterns: [
            {match: '[^\\s]+', name: 'variable.parameter.function.vim-snippet'}
          ]
        },
        {
          begin: '^(context|pre_expand|post_expand|post_jump)(?=[ \\t]|$)',
          beginCaptures: {
            1: {name: 'keyword.control.$1.directive.vim-snippet'}
          },
          end: '$',
          name: 'meta.$1.directive.vim-snippet',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.string.begin.vim-snippet'},
                2: {patterns: [{include: 'source.python'}]},
                3: {name: 'punctuation.definition.string.end.vim-snippet'}
              },
              match: '(")([^"]*)(")',
              name: 'string.quoted.double.python-code.vim-snippet'
            }
          ]
        }
      ]
    },
    version: {
      captures: {
        1: {name: 'keyword.control.version.directive.vim-snippet'},
        2: {name: 'constant.numeric.integer.int.vim-snippet'}
      },
      match: '^(version)\\s+(\\d)'
    },
    visual: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.vim-snippet'}},
          match: '(\\$)VISUAL',
          name: 'constant.language.visual-content.unbraced.vim-snippet'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.vim-snippet'},
            2: {name: 'punctuation.definition.end.vim-snippet'}
          },
          match: '(\\${)VISUAL(})',
          name: 'constant.language.visual-content.braced.vim-snippet'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.vim-snippet'},
            2: {name: 'punctuation.definition.end.vim-snippet'}
          },
          match: '({)VISUAL(})',
          name: 'constant.language.visual-content.v0-syntax.vim-snippet'
        }
      ]
    }
  },
  scopeName: 'source.vim-snippet'
}

export default grammar
