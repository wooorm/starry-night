// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Stillat/vscode-antlers-language-server>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.antlers.html', '.antlers.php', '.antlers.xml'],
  injections: {
    'text.html.statamic': {
      patterns: [{include: '#statamic-comments'}, {include: '#antlers-tags'}]
    },
    'text.html.statamic - (meta.embedded | meta.tag | comment.block.html | comment.block.statamic), L:(text.html.statamic meta.tag - (comment.block.statamic | meta.embedded.statamic | comment.block.html))':
      {patterns: [{include: 'text.html.basic'}]},
    'text.html.statamic - (meta.embedded | meta.tag), L:((text.html.statamic meta.tag) - (meta.embedded.block.php | meta.embedded.line.php)), L:(source.js - (meta.embedded.block.php | meta.embedded.line.php)), L:(source.css - (meta.embedded.block.php | meta.embedded.line.php))':
      {patterns: [{include: '#php-tag'}]}
  },
  names: ['antlers'],
  patterns: [
    {include: '#php-tag'},
    {include: '#statamic-comments'},
    {include: '#frontMatter'},
    {include: '#antlers-tags'}
  ],
  repository: {
    'antlers-conditionals': {
      match:
        '(?<!:)(/?else|/?elseif|/?if|/?unless|endif|endunless|unlesselse|stop)',
      name: 'keyword.control.statamic'
    },
    'antlers-constants': {
      captures: {2: {name: 'constant.language.statamic'}},
      match: '(\\G|\\s|\\b)(true|TRUE|false|FALSE|yes|YES|no|NO|null|as)\\s'
    },
    'antlers-expression': {
      patterns: [
        {match: ';', name: 'punctuation.terminator.expression.statamic'},
        {include: '#antlers-strings'},
        {include: '#antlers-numbers'},
        {match: '=>', name: 'keyword.operator.key.statamic'},
        {match: '->', name: 'keyword.operator.class.statamic'},
        {include: '#statamic-explicit-tags'},
        {include: '#statamic-core-tags'},
        {
          match: '===|==|!==|!=|<>',
          name: 'keyword.operator.comparison.statamic'
        },
        {match: '\\&=?', name: 'keyword.operator.string.statamic'},
        {
          match: '=|\\+=|\\-=|\\*\\*?=|/=|%=|\\|=|\\^=|<<=|>>=',
          name: 'keyword.operator.assignment.statamic'
        },
        {
          match:
            '(?<!-)\\b(?i)(!|\\?\\?|\\?=|\\?|&&|&|\\|\\|)|\\b(and|or|xor)\\b',
          name: 'keyword.operator.logical.statamic'
        },
        {
          match: '(?i)\\b(bwa|bwo|bxor|bnot|bsl|bsr)\\b',
          name: 'keyword.operator.bitwise.statamic'
        },
        {match: '<=>|<=|>=|<|>', name: 'keyword.operator.comparison.statamic'},
        {
          match: '\\-|\\+|\\*\\*?|/|%',
          name: 'keyword.operator.arithmetic.statamic'
        },
        {
          begin: '(arr|list|switch)\\s*(\\()',
          beginCaptures: {
            1: {name: 'support.function.construct.statamic'},
            2: {
              name: 'punctuation.definition.array.begin.bracket.round.statamic'
            }
          },
          end: '\\)|(?=\\?>)',
          endCaptures: {
            0: {name: 'punctuation.definition.array.end.bracket.round.statamic'}
          },
          name: 'meta.array.statamic',
          patterns: [{include: '#antlers-expression'}]
        },
        {
          begin: '(?<!@){(\\s?)',
          end: '(\\s?)}',
          patterns: [{include: '#antlers-expression'}]
        },
        {include: '#antlers-tag-parameter-variable'},
        {include: '#antlers-language-operators'},
        {include: '#antlers-variable'},
        {include: '#antlers-modifier-pipe'},
        {include: '#antlers-variable-modifier-name'},
        {include: '#antlers-variable-modifiers'},
        {include: '#antlers-constants'}
      ]
    },
    'antlers-language-operators': {
      captures: {
        1: {
          name: 'variable.statamic',
          patterns: [
            {include: '#antlers-numbers'},
            {include: '#language-operators'}
          ]
        }
      },
      match: '(\\w+)[\\s]'
    },
    'antlers-modifier-pipe': {
      match: '(\\|)',
      name: 'keyword.operator.other.statamic'
    },
    'antlers-numbers': {
      match: '0|[1-9](?:_?[0-9]+)*',
      name: 'constant.numeric.statamic'
    },
    'antlers-strings': {
      patterns: [
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    },
    'antlers-tag-parameter-variable': {
      captures: {
        1: {
          patterns: [
            {
              captures: {
                1: {name: 'entity.other.attribute-name.html'},
                2: {name: 'punctuation.separator.key-value.html'},
                3: {name: 'punctuation.definition.string.begin.html'},
                4: {patterns: [{include: 'source.js'}]},
                5: {name: 'punctuation.definition.string.end.html'}
              },
              match: '\\\\([\\S:]+?)(=)(\'|")([({].*?[}])(\'|")'
            },
            {
              captures: {
                1: {name: 'entity.other.attribute-name.html'},
                2: {name: 'punctuation.separator.key-value.html'},
                3: {name: 'punctuation.definition.string.begin.html'},
                4: {name: 'string.quoted.double.html'},
                5: {name: 'punctuation.definition.string.end.html'}
              },
              match: '\\\\([\\S:]+?)(=)(\'|")(.*?)(\\3)'
            },
            {
              captures: {
                1: {name: 'entity.other.attribute-name'},
                2: {name: 'keyword.operator.assignment.statamic'},
                3: {name: 'punctuation.definition.string.begin.statamic'},
                4: {patterns: [{include: '#antlers-expression'}]},
                5: {name: 'punctuation.definition.string.end.statamic'}
              },
              match: ':([\\S:]+?)(=)(\'|")(.*?)(\\3)'
            },
            {
              captures: {
                1: {name: 'entity.other.attribute-name'},
                2: {name: 'keyword.operator.assignment.statamic'},
                3: {
                  patterns: [
                    {include: '#string-single-quoted'},
                    {include: '#string-double-quoted'}
                  ]
                }
              },
              match: '([\\S]+?)(=)((\'|")(.*?)(\\4))'
            }
          ]
        }
      },
      match: '(:?([\\S:]+?)(=)(\'|")([^\\4]*?)(\\4))'
    },
    'antlers-tags': {
      begin: '(?<!@){{(?!\\$)(\\s?)',
      end: '(\\s?)}}',
      name: 'meta.embedded.block.statamic',
      patterns: [
        {include: '#statamic-comments'},
        {include: '#php-tag'},
        {include: '#antlers-conditionals'},
        {include: '#antlers-expression'}
      ]
    },
    'antlers-variable': {
      captures: {
        1: {name: 'variable.statamic'},
        2: {name: 'keyword.operator.statamic'},
        3: {name: 'variable.statamic', patterns: [{include: '$self'}]}
      },
      match: '(/?\\w+)(:)?(\\w+)?'
    },
    'antlers-variable-modifier-name': {
      captures: {
        2: {name: 'keyword.operator.statamic'},
        4: {name: 'support.function.statamic'}
      },
      match:
        '(\\s)?(\\|)(\\s)?(\\w+((^:([a-zA-Z0-9-_/-@]+)){1,2})?|((-|\\+|\\*|/|\\^|\\%):(\\d*)?\\.?(\\d+)))+'
    },
    'antlers-variable-modifiers': {
      captures: {
        2: {name: 'keyword.operator.statamic'},
        4: {
          name: 'support.function.statamic',
          patterns: [{include: '#antlers-expression'}]
        }
      },
      match:
        '(\\s)?(\\|)(\\s)?(\\w+((:([a-zA-Z0-9-_/-@]+)){1,2})?|((-|\\+|\\*|/|\\^|\\%):(\\d*)?\\.?(\\d+)))+'
    },
    'core-tag-names': {
      patterns: [
        {
          match:
            '(?i)\\b(taxonomy|cookie|user_groups|user_roles|get_site|collection|asset|nocache|vite|mount_url|form|assets|cache|can|dd|ddd|dump|get_content|get_error|get_errors|get_files|glide|in|increment|installed|is|iterate|foreach|link|locales|markdown|member|mix|nav|not_found|404|obfuscate|parent|partial|path|query|range|loop|redirect|relate|rotate|route|scope|section|session|set|structure|svg|theme|trans|trans_choice|user|users|widont|yields|yield|slot|once|noparse|view|stack|push)\\b',
          name: 'entity.name.tag.statamic'
        }
      ]
    },
    frontMatter: {
      begin: '\\A-{3}\\s*$',
      contentName: 'meta.embedded.block.frontmatter',
      end: '(^|\\G)-{3}|\\.{3}\\s*$',
      patterns: [{include: 'source.yaml'}]
    },
    'language-operators': {
      patterns: [
        {
          match:
            '(?i)\\b(pluck|take|skip|arr|orderby|groupby|merge|where|switch|bwa|bwo|bxor|bnot|bsl|bsr|if|elseif|else|void)(\\b)',
          name: 'support.function.array.statamic'
        }
      ]
    },
    'php-tag': {
      patterns: [
        {
          begin: '<\\?(?i:php|=)?(?![^?]*\\?>)',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.statamic'}
          },
          contentName: 'source.php',
          end: '(\\?)>',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.statamic'},
            1: {name: 'source.php'}
          },
          name: 'meta.embedded.block.statamic',
          patterns: [{include: 'text.html.php'}]
        },
        {
          begin: '(?<!@){{([\\$\\?]\\s?)',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.statamic'}
          },
          contentName: 'source.php',
          end: '(\\s?)[\\$\\?]}}',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.statamic'},
            1: {name: 'source.php'}
          },
          name: 'meta.embedded.line.statamic',
          patterns: [{include: 'text.html.php'}]
        },
        {
          begin: '<\\?(?i:php|=)?',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.statamic'}
          },
          contentName: 'source.php',
          end: '(\\?)>',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.statamic'},
            1: {name: 'source.php'}
          },
          name: 'meta.embedded.line.statamic',
          patterns: [{include: 'text.html.php'}]
        }
      ]
    },
    'statamic-comments': {
      begin: '{{#',
      end: '#}}',
      name: 'comment.block.statamic'
    },
    'statamic-core-closing-tags': {
      captures: {
        1: {name: 'variable.statamic', patterns: [{include: '#core-tag-names'}]}
      },
      match: '\\/(\\w+)+'
    },
    'statamic-core-tags': {
      captures: {
        1: {name: 'variable.statamic', patterns: [{include: '#core-tag-names'}]}
      },
      match: '\\G(/?\\w+)+'
    },
    'statamic-explicit-tags': {
      captures: {1: {name: 'entity.name.tag.statamic'}},
      match: '\\G(/?%\\w+)+'
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.statamic'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.statamic'}},
      name: 'string.quoted.double.statamic',
      patterns: [
        {
          begin: '(?<!@){(\\s?)',
          end: '(\\s?)}',
          patterns: [{include: '#antlers-expression'}]
        }
      ]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.statamic'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.statamic'}},
      name: 'string.quoted.single.statamic',
      patterns: [
        {match: "\\\\[\\\\']", name: 'constant.character.escape.statamic'},
        {
          begin: '(?<!@){(\\s?)',
          end: '(\\s?)}',
          patterns: [{include: '#antlers-expression'}]
        }
      ]
    }
  },
  scopeName: 'text.html.statamic'
}

export default grammar
