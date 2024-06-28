// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.riot'],
  names: ['riot'],
  patterns: [
    {include: '#riot-interpolations'},
    {
      begin: '(<)([a-zA-Z0-9:-]++)(?=[^>]*></\\2>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'}
      },
      end: '(>)(<)(/)(\\2)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.end.html'},
        2: {
          name: 'punctuation.definition.tag.begin.html meta.scope.between-tag-pair.html'
        },
        3: {name: 'punctuation.definition.tag.begin.html'},
        4: {name: 'entity.name.tag.html'},
        5: {name: 'punctuation.definition.tag.end.html'}
      },
      name: 'meta.tag.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(<\\?)(xml)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.xml.html'}
      },
      end: '(\\?>)',
      name: 'meta.tag.preprocessor.xml.html',
      patterns: [
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    },
    {
      begin: '<!--',
      captures: {0: {name: 'punctuation.definition.comment.html'}},
      end: '--\\s*>',
      name: 'comment.block.html',
      patterns: [
        {match: '--', name: 'invalid.illegal.bad-comments-or-CDATA.html'}
      ]
    },
    {
      begin: '<!',
      captures: {0: {name: 'punctuation.definition.tag.html'}},
      end: '>',
      name: 'meta.tag.sgml.html',
      patterns: [
        {
          begin: '(?i:DOCTYPE)',
          captures: {1: {name: 'entity.name.tag.doctype.html'}},
          end: '(?=>)',
          name: 'meta.tag.sgml.doctype.html',
          patterns: [
            {
              match: '"[^">]*"',
              name: 'string.quoted.double.doctype.identifiers-and-DTDs.html'
            }
          ]
        },
        {
          begin: '\\[CDATA\\[',
          end: ']](?=>)',
          name: 'constant.other.inline-data.html'
        },
        {
          match: '(\\s*)(?!--|>)\\S(\\s*)',
          name: 'invalid.illegal.bad-comments-or-CDATA.html'
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?=[^>]*type=([\'"])stylus\\1?)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.stylus.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.stylus'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?=[^>]*type=([\'"])postcss\\1?)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.postcss.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.postcss'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?=[^>]*type=([\'"])sass\\1?)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.sass.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.sass'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?=[^>]*type=([\'"])scss\\1?)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.scss.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.css.scss'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?=[^>]*type=([\'"])less\\1?)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.less.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.css.less'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?![^>]*/>)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.css.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
          end: '(?=</(?i:style))',
          patterns: [{include: 'source.css'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:script))\\b(?=[^>]*type=([\'"])ts\\1?)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.script.html'}
      },
      end: '(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?',
      endCaptures: {2: {name: 'punctuation.definition.tag.html'}},
      name: 'source.ts.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(?<!</(?:script|SCRIPT))(>)',
          captures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '(</)((?i:script))',
          patterns: [{include: 'source.ts'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:script))\\b(?=[^>]*type=([\'"])coffee\\1?)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.script.html'}
      },
      end: '(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?',
      endCaptures: {2: {name: 'punctuation.definition.tag.html'}},
      name: 'source.coffee.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(?<!</(?:script|SCRIPT))(>)',
          captures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '(</)((?i:script))',
          patterns: [{include: 'source.coffee'}]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:script))\\b(?=[^>]*type=([\'"])livescript\\1?)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.script.html'}
      },
      end: '(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?',
      endCaptures: {2: {name: 'punctuation.definition.tag.html'}},
      name: 'source.livescript.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(?<!</(?:script|SCRIPT))(>)',
          captures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '(</)((?i:script))',
          patterns: [{include: 'source.livescript'}]
        }
      ]
    },
    {
      begin:
        '(<)((?i:script))\\b(?![^>]*/>)(?![^>]*(?i:type.?=.?text/((?!javascript|babel|ecmascript).*)))',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.script.html'}
      },
      end: '(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?',
      endCaptures: {2: {name: 'punctuation.definition.tag.html'}},
      name: 'source.js.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(?<!</(?:script|SCRIPT))(>)',
          captures: {
            1: {name: 'punctuation.definition.tag.begin.html'},
            2: {name: 'entity.name.tag.script.html'}
          },
          end: '(</)((?i:script))',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.js'}},
              match: '(//).*?((?=</script)|$\\n?)',
              name: 'comment.line.double-slash.js'
            },
            {
              begin: '/\\*',
              captures: {0: {name: 'punctuation.definition.comment.js'}},
              end: '\\*/|(?=</script)',
              name: 'comment.block.js'
            },
            {include: 'source.js'}
          ]
        }
      ]
    },
    {
      begin: '(</?)((?i:body|head|html)\\b)',
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.structure.any.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.structure.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:address|blockquote|dd|div|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.block.any.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.block.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.inline.any.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.any.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)([a-zA-Z0-9:-]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.other.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.other.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {include: '#entities'},
    {match: '<>', name: 'invalid.illegal.incomplete.html'},
    {match: '<', name: 'invalid.illegal.bad-angle-bracket.html'}
  ],
  repository: {
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
    'riot-interpolations': {
      patterns: [
        {
          begin: '(?<!\\\\){',
          beginCaptures: {
            0: {name: 'punctuation.definition.generic.begin.html'}
          },
          end: '}',
          endCaptures: {0: {name: 'punctuation.definition.generic.end.html'}},
          name: 'expression.embbeded.riot',
          patterns: [{include: 'source.js'}]
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#riot-interpolations'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#riot-interpolations'}, {include: '#entities'}]
    },
    'tag-generic-attribute': {
      match: '\\b([a-zA-Z\\-:]+)',
      name: 'entity.other.attribute-name.html'
    },
    'tag-id-attribute': {
      begin: '\\b(id)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.id.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?<=\'|")',
      name: 'meta.attribute-with-value.id.html',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.double.html',
          patterns: [{include: '#riot-interpolations'}, {include: '#entities'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.single.html',
          patterns: [{include: '#riot-interpolations'}, {include: '#entities'}]
        }
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-id-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    }
  },
  scopeName: 'text.html.riot'
}

export default grammar
