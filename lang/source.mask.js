// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js', 'text.html.basic'],
  extensions: ['.mask'],
  names: ['mask'],
  patterns: [
    {include: '#comments'},
    {include: '#punctuation'},
    {include: '#literal-string'},
    {include: '#decorator'},
    {include: '#import'},
    {include: '#xml_markdown'},
    {include: '#xml_style'},
    {include: '#xml_script'},
    {include: '#xml'},
    {include: '#define'},
    {include: '#tag_javascript'},
    {include: '#tag_var'},
    {include: '#tag_style'},
    {include: '#tag_markdown'},
    {include: '#tag'},
    {include: '#statement'},
    {include: '#node_klass_id'},
    {include: '#node_template'},
    {include: '#node'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.js'}},
          end: '\\*/',
          name: 'comment.block.js'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.js'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.js'
        }
      ]
    },
    decorator: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'keyword'}},
      end: '(\\])',
      endCaptures: {1: {name: 'keyword'}},
      patterns: [{include: 'source.js'}]
    },
    define: {
      begin: '((define|let)\\b)',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'define.mask',
      patterns: [
        {match: '(as|extends)\\b', name: 'keyword'},
        {match: '(,)', name: 'punctuation'},
        {match: '([\\w_\\-:]+)', name: 'entity.other.attribute-name'},
        {match: '(\\([^\\)]*\\))', name: 'variable.parameter'}
      ]
    },
    expression: {
      patterns: [
        {
          begin: '(\\()',
          beginCaptures: {0: {name: 'variable.parameter'}},
          end: '\\)',
          endCaptures: {0: {name: 'variable.parameter'}},
          name: 'markup.italic',
          patterns: [{include: '#js-expression'}, {include: 'source.js'}]
        }
      ]
    },
    html: {
      patterns: [
        {
          begin: '((\\{|>)\\s*(\'\'\'|"""))',
          beginCaptures: {1: {name: 'variable.parameter'}},
          end: '((\'\'\'|"""))',
          endCaptures: {1: {name: 'variable.parameter'}},
          name: 'syntax.html.mask',
          patterns: [{include: 'text.html.basic'}]
        }
      ]
    },
    import: {
      begin: '(import)\\b',
      beginCaptures: {1: {name: 'keyword'}},
      end: '(;|(?<=[\'|"]))',
      name: 'import.mask',
      patterns: [
        {match: '\\b(sync|async|as|from)\\b', name: 'keyword'},
        {match: '(,)', name: 'punctuation'},
        {include: '#literal-string'}
      ]
    },
    interpolation: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter'},
            2: {name: 'other.interpolated.mask'}
          },
          match: '(?<!\\\\)(~)([\\w\\.]+)',
          name: 'markup.italic'
        },
        {
          begin: '(~\\[)',
          beginCaptures: {0: {name: 'variable.parameter'}},
          end: '\\]',
          endCaptures: {0: {name: 'variable.parameter'}},
          name: 'markup.italic',
          patterns: [
            {match: '(\\s*\\w*\\s*:)', name: 'keyword.util.mask'},
            {include: '#js-interpolation'},
            {include: 'source.js'}
          ]
        }
      ]
    },
    javascript: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'variable.parameter'}},
          end: '\\}',
          endCaptures: {0: {name: 'variable.parameter'}},
          name: 'syntax.js.mask',
          patterns: [{include: '#js-block'}, {include: 'source.js'}]
        }
      ]
    },
    'js-block': {
      patterns: [
        {
          begin: '\\{',
          end: '\\}',
          name: 'other.interpolated.mask',
          patterns: [{include: '#js-block'}, {include: 'source.js'}]
        }
      ]
    },
    'js-expression': {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'other.interpolated.mask',
          patterns: [{include: '#js-expression'}, {include: 'source.js'}]
        }
      ]
    },
    'js-interpolation': {
      patterns: [
        {
          begin: '\\[',
          end: '\\]',
          name: 'other.interpolated.mask',
          patterns: [{include: '#js-interpolation'}, {include: 'source.js'}]
        }
      ]
    },
    klass_id: {
      begin: '([\\.#][\\w_\\-$:]*)',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.markup.bold.mask'}
      },
      end: '(?=[\\s\\.#])',
      name: 'node-head.attribute.mask',
      patterns: [
        {include: '#interpolation'},
        {
          match: '(([\\w_\\-$]+)(?=[\\s.#]))',
          name: 'entity.other.attribute-name.mask'
        }
      ]
    },
    'literal-string': {
      patterns: [
        {
          begin: "(''')",
          beginCaptures: {0: {name: 'string.quoted.single.js'}},
          end: "(''')",
          endCaptures: {0: {name: 'string.quoted.single.js'}},
          name: 'literal-string',
          patterns: [{include: '#string-content'}]
        },
        {
          begin: '(""")',
          beginCaptures: {0: {name: 'string.quoted.single.js'}},
          end: '(""")',
          endCaptures: {0: {name: 'string.quoted.single.js'}},
          name: 'literal-string',
          patterns: [{include: '#string-content'}]
        },
        {
          begin: "(')",
          beginCaptures: {0: {name: 'string.quoted.single.js'}},
          end: "(')",
          endCaptures: {0: {name: 'string.quoted.single.js'}},
          name: 'literal-string',
          patterns: [{include: '#string-content'}]
        },
        {
          begin: '(")',
          beginCaptures: {0: {name: 'string.quoted.single.js'}},
          end: '(")',
          endCaptures: {0: {name: 'string.quoted.single.js'}},
          name: 'literal-string',
          patterns: [{include: '#string-content'}]
        }
      ]
    },
    markdown: {
      begin: '((\\{|>)\\s*(\'\'\'|"""))',
      beginCaptures: {1: {name: 'variable.parameter'}},
      end: '(\'\'\'|""")',
      endCaptures: {1: {name: 'variable.parameter'}},
      name: 'syntax.markdown.mask',
      patterns: [{include: 'source.gfm'}]
    },
    node: {
      begin: '([^\\s\\.#;>\\{\\(]+)',
      beginCaptures: {0: {name: 'entity.name.tag.mask'}},
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'node.mask',
      patterns: [{include: '#node_attributes'}]
    },
    node_attribute: {
      name: 'node.attribute.mask',
      patterns: [
        {include: '#comments'},
        {include: '#expression', name: 'attribute-expression'},
        {
          begin: '([\\w_\\-$]+)(\\s*=\\s*)',
          beginCaptures: {
            1: {name: 'entity.other.attribute-name'},
            2: {name: 'keyword.operator.assignment'}
          },
          end: '([\\s;>\\{])',
          name: 'attribute-key-value',
          patterns: [{include: '#node_attribute_value'}]
        },
        {
          match: '([\\w_\\-$:]+)(?=([\\s;>\\{])|$)',
          name: 'entity.other.attribute-name'
        }
      ]
    },
    node_attribute_expression: {
      begin: '(\\()',
      end: '(\\))',
      name: 'meta.group.braces.round',
      patterns: [{include: '#js-expression'}]
    },
    node_attribute_value: {
      patterns: [
        {match: '(true|false)(?=[\\s>;\\{])', name: 'constant.character'},
        {match: '([\\d\\.]+)(?=[\\s>;\\{])', name: 'constant.numeric'},
        {include: '#literal-string'},
        {match: '((\\s*)[^\\s>;\\{]+)', name: 'string.quoted'}
      ]
    },
    node_attributes: {
      end: '(?<=[>;\\{\\}])',
      name: 'node.attributes.mask',
      patterns: [{include: '#klass_id'}, {include: '#node_attribute'}]
    },
    node_klass_id: {
      begin: '(?=[\\.#])',
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'node.head.mask',
      patterns: [{include: '#klass_id'}, {include: '#node_attribute'}]
    },
    node_template: {
      begin: '(@[^\\s\\.#;>\\{]+)',
      beginCaptures: {0: {name: 'variable.parameter.mask'}},
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'node.mask',
      patterns: [{include: '#klass_id'}, {include: '#node_attribute'}]
    },
    punctuation: {
      match: '([>;\\{\\}])',
      name: 'meta.group.braces',
      patterns: [{include: '$self'}]
    },
    statement: {
      begin:
        '(if|else|with|each|for|switch|case|\\+if|\\+with|\\+each|\\+for|debugger|log|script|\\:import|\\:template|include)(?=[\\s.#;\\{\\}]|$)',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'tag.mask',
      patterns: [{include: '#node_attributes'}]
    },
    'string-content': {
      patterns: [
        {
          match: '\\\\(x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|.)',
          name: 'constant.character.escape.js'
        },
        {include: '#interpolation'},
        {match: '(.)', name: 'string'}
      ]
    },
    style: {
      patterns: [
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'variable.parameter'}},
          end: '(\\})',
          endCaptures: {1: {name: 'variable.parameter'}},
          name: 'syntax.style.mask',
          patterns: [{include: 'source.css'}]
        }
      ]
    },
    tag: {
      begin:
        '(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|video|wbr|xmp)(?=[\\s.#;\\{\\}]|$)',
      beginCaptures: {1: {name: 'storage.type.mask'}},
      end: '(?<=[>;\\{\\}])|(?=[>;\\{\\}])|([>;\\{\\}])',
      name: 'tag.mask',
      patterns: [{include: '#node_attributes'}]
    },
    tag_javascript: {
      begin: '(slot|pipe|event|function|script)\\b',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '(\\})|(?<=\\})',
      name: 'slot.mask',
      patterns: [
        {match: '\\b(static|private|public|async|self)\\b', name: 'keyword'},
        {include: '#klass_id'},
        {include: '#node_attribute'},
        {include: '#javascript'}
      ]
    },
    tag_markdown: {
      begin: '(md|markdown)\\b',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '(?<=\\})|(\\})',
      name: 'syntax.markdown.mask',
      patterns: [
        {include: '#klass_id'},
        {include: '#node_attribute'},
        {include: '#markdown'}
      ]
    },
    tag_style: {
      begin: '(style)\\b',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '(?<=\\})|(\\})',
      name: 'syntax.style.mask',
      patterns: [
        {include: '#klass_id'},
        {include: '#node_attribute'},
        {include: '#style'}
      ]
    },
    tag_var: {
      begin: '(var)\\b',
      beginCaptures: {1: {name: 'support.constant'}},
      end: '([\\};\\]])|(?<=[\\};\\]])',
      name: 'var.mask',
      patterns: [{include: 'source.js'}]
    },
    xml: {
      begin: '(?=</?\\s*(\\w+))',
      end: '(?<=</\\1>)',
      name: 'syntax.html.mask',
      patterns: [
        {
          begin: '(<mask>)',
          end: '(</mask>)',
          patterns: [{include: 'source.mask'}]
        },
        {include: 'text.html.basic'},
        {include: '#xml'}
      ]
    },
    xml_markdown: {
      begin: '(?i)<markdown[^\\>]*>',
      beginCaptures: {0: {name: 'variable.parameter'}},
      end: '(?i)</markdown[^\\>]*>',
      endCaptures: {0: {name: 'variable.parameter'}},
      name: 'syntax.markdown.mask',
      patterns: [{include: 'source.gfm'}]
    },
    xml_script: {
      begin: '(?i)<script[^\\>]*>',
      beginCaptures: {0: {name: 'variable.parameter'}},
      end: '(?i)</script[^\\>]*>',
      endCaptures: {0: {name: 'variable.parameter'}},
      name: 'syntax.markdown.mask',
      patterns: [{include: 'source.js'}]
    },
    xml_style: {
      begin: '(?i)<style[^\\>]*>',
      beginCaptures: {0: {name: 'variable.parameter'}},
      end: '(?i)</style[^\\>]*>',
      endCaptures: {0: {name: 'variable.parameter'}},
      name: 'syntax.markdown.mask',
      patterns: [{include: 'source.css'}]
    }
  },
  scopeName: 'source.mask'
}

export default grammar
