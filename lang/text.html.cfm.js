// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.cfscript', 'text.cfml.basic'],
  extensions: ['.cfm', '.cfml'],
  names: ['coldfusion', 'cfm', 'cfml', 'coldfusion-html'],
  patterns: [
    {include: 'text.cfml.basic'},
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
      begin: '<!--+',
      captures: {0: {name: 'punctuation.definition.comment.html'}},
      end: '--+\\s*>',
      name: 'comment.block.html',
      patterns: [
        {match: '--', name: 'invalid.illegal.bad-comments-or-CDATA.html'},
        {include: '#embedded-code'}
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
    {include: '#embedded-code'},
    {
      begin: '(?:^\\s+)?(<)((?i:style))\\b(?![^>]*/>)',
      captures: {
        1: {name: 'punctuation.definition.tag.html'},
        2: {name: 'entity.name.tag.style.html'},
        3: {name: 'punctuation.definition.tag.html'}
      },
      end: '(</)((?i:style))(>)(?:\\s*\\n)?',
      name: 'source.css.embedded.html',
      patterns: [
        {include: '#tag-stuff'},
        {
          begin: '(>)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.html'}},
          end: '(?=</(?i:style))',
          patterns: [
            {include: 'text.html.cfm'},
            {include: '#embedded-code'},
            {include: 'source.css'}
          ]
        }
      ]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:script))\\b(?![^>]*/>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.html'},
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
            1: {name: 'punctuation.definition.tag.html'},
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
            {include: 'text.cfml.basic'},
            {include: '#php'},
            {include: '#nest-hash'},
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
      begin: '(</?)((?i:form|fieldset|textarea)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.block.form.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.block.form.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)((?i:object|applet)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.block.object.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.block.object.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:address|blockquote|dd|div|dl|dt|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|ol|p|ul|center|dir|hr|menu|pre)\\b)',
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
      begin: '(</?)((?i:img|area|map|param)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.img.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.img.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)((?i:a|base)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.link.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.link.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:table|tr|td|th|tbody|thead|tfoot|col|colgroup|caption)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.table.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.table.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(</?)((?i:input|select|option|optgroup|button|label|legend)\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.form.html'}
      },
      end: '((?: ?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.inline.form.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin:
        '(</?)((?i:abbr|acronym|b|basefont|bdo|big|br|cite|code|del|dfn|em|font|head|html|i|ins|isindex|kbd|li|link|meta|noscript|q|s|samp|script|small|span|strike|strong|style|sub|sup|title|tt|u|var)\\b)',
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
      begin: '(</?)([a-zA-Z0-9:]+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.other.html'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.other.html',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(<)([a-zA-Z0-9:]++)(?=[^>]*></\\2>)',
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
    {include: '#entities'},
    {match: '<>', name: 'invalid.illegal.incomplete.html'},
    {match: '<', name: 'invalid.illegal.bad-angle-bracket.html'}
  ],
  repository: {
    cfcomments: {
      patterns: [
        {match: '<!---.*?--->', name: 'comment.line.cfml'},
        {
          begin: '<!---',
          captures: {0: {name: 'punctuation.definition.comment.cfml'}},
          end: '--->',
          name: 'comment.block.cfml',
          patterns: [{include: '#cfcomments'}]
        }
      ]
    },
    'embedded-code': {
      patterns: [{include: '#ruby'}, {include: '#php'}, {include: '#python'}]
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
    'nest-hash': {
      patterns: [
        {match: '##', name: 'string.escaped.hash.html'},
        {
          match:
            '(?x)\n\t\t\t\t\t\t\t(\\#)\n\t\t\t\t\t\t\t(?!\t\t# zero width negative lookahead assertion\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t([\\w$]+\t# assertion for plain variables or function names including currency symbol "$"\n\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t(\\[.*\\])\t\t\t\t# asserts a match for anything in square brackets\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\(.*\\))\t\t\t\t# or anything in parens\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\.[\\w$]+)\t\t\t\t# or zero or more "dot" notated variables\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*[\\+\\-\\*\\/&]\\s*[\\w$]+)\t# or simple arithmentic operators + concatenation\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*&\\s*["|\'].+["|\']) \t# or concatenation with a quoted string\n\t\t\t\t\t\t\t\t\t\t)*\t\t# asserts preceeding square brackets, parens, dot notated vars or arithmetic zero or more times\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t(\\(.*\\))\t # asserts a match for anything in parens\n\t\t\t\t\t\t\t\t)\\#\t\t# asserts closing hash\n\t\t\t\t\t\t\t)',
          name: 'invalid.illegal.unescaped.hash.html'
        },
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t(\\#)\n\t\t\t\t\t\t\t(?=\t\t# zero width negative lookahead assertion\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t([\\w$]+\t# assertion for plain variables or function names including currency symbol "$"\n\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t(\\[.*\\])\t\t\t\t# asserts a match for anything in square brackets\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\(.*\\))\t\t\t\t# or anything in parens\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\.[\\w$]+)\t\t\t\t# or zero or more "dot" notated variables\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*[\\+\\-\\*\\/&]\\s*[\\w$]+)\t# or simple arithmentic operators + concatenation\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*&\\s*["|\'].+["|\']) \t# or concatenation with a quoted string\n\t\t\t\t\t\t\t\t\t\t)*\t\t# asserts preceeding square brackets, parens, dot notated vars or arithmetic zero or more times\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t(\\(.*\\))\t # asserts a match for anything in parens\n\t\t\t\t\t\t\t\t)\\#\t\t# asserts closing hash\n\t\t\t\t\t\t\t)',
          beginCaptures: {1: {name: 'punctuation.definition.hash.begin.html'}},
          contentName: 'source.cfscript.embedded.html',
          end: '(#)',
          endCaptures: {1: {name: 'punctuation.definition.hash.end.html'}},
          name: 'meta.name.interpolated.hash.html',
          patterns: [{include: 'source.cfscript'}]
        }
      ]
    },
    php: {
      begin: '(?=(^\\s*)?<\\?)',
      end: '(?!(^\\s*)?<\\?)',
      patterns: [{include: 'text.html.php'}]
    },
    python: {
      begin: '(?:^\\s*)<\\?python(?!.*\\?>)',
      end: '\\?>(?:\\s*$\\n)?',
      name: 'source.python.embedded.html',
      patterns: [{include: 'source.python'}]
    },
    ruby: {
      patterns: [
        {
          begin: '<%+#',
          captures: {0: {name: 'punctuation.definition.comment.erb'}},
          end: '%>',
          name: 'comment.block.erb'
        },
        {
          begin: '<%+(?!>)=?',
          captures: {0: {name: 'punctuation.section.embedded.ruby'}},
          end: '-?%>',
          name: 'source.ruby.embedded.html',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.ruby'}},
              match: '(#).*?(?=-?%>)',
              name: 'comment.line.number-sign.ruby'
            },
            {include: 'source.ruby'}
          ]
        },
        {
          begin: '<\\?r(?!>)=?',
          captures: {0: {name: 'punctuation.section.embedded.ruby.nitro'}},
          end: '-?\\?>',
          name: 'source.ruby.nitro.embedded.html',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.comment.ruby.nitro'}
              },
              match: '(#).*?(?=-?\\?>)',
              name: 'comment.line.number-sign.ruby.nitro'
            },
            {include: 'source.ruby'}
          ]
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [
        {include: '#embedded-code'},
        {include: '#entities'},
        {include: '#nest-hash'}
      ]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [
        {include: '#embedded-code'},
        {include: '#entities'},
        {include: '#nest-hash'}
      ]
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
          patterns: [
            {include: '#embedded-code'},
            {include: '#entities'},
            {include: '#nest-hash'}
          ]
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
          patterns: [
            {include: '#embedded-code'},
            {include: '#entities'},
            {include: '#nest-hash'}
          ]
        }
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#nest-hash'},
        {include: '#cfcomments'},
        {include: 'text.cfml.basic'},
        {include: '#tag-id-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#embedded-code'}
      ]
    }
  },
  scopeName: 'text.html.cfm'
}

export default grammar
