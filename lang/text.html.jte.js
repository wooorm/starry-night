// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/maj2c/jte-template-syntax-highlight>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.java', 'text.html.basic'],
  extensions: ['.jte'],
  names: ['java-template-engine', 'jte'],
  patterns: [
    {include: '#jte-comment'},
    {include: '#jte-statement'},
    {include: '#jte-declaration'},
    {include: '#jte-comparison'},
    {include: '#html_tags'},
    {include: 'text.html.basic'}
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
    'escaped-double-quote': {
      match: '\\\\"',
      name: 'constant.character.escape.js'
    },
    'escaped-single-quote': {
      match: "\\\\'",
      name: 'constant.character.escape.js'
    },
    html_tags: {
      patterns: [
        {
          begin: '(<)([a-zA-Z0-9:-]+)(?=[^>]*></\\2>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.html'}
          },
          end: '(>(<)/)(\\2)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'meta.scope.between-tag-pair.html'},
            3: {name: 'entity.name.tag.html'},
            4: {name: 'punctuation.definition.tag.html'}
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
          patterns: [{include: '#tag_generic_attribute'}, {include: '#string'}]
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
              begin: '(DOCTYPE|doctype)',
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
              patterns: [{include: 'source.css'}]
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
                {include: 'source.js'}
              ]
            }
          ]
        },
        {
          begin: '(</?)((?i:body|head|html)\\b)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.structure.any.html'}
          },
          end: '(>)',
          name: 'meta.tag.structure.any.html',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin:
            '(</?)((?i:address|blockquote|dd|div|header|section|footer|aside|nav|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)\\b)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.block.any.html'}
          },
          end: '(>)',
          name: 'meta.tag.block.any.html',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin:
            '(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)\\b)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.inline.any.html'}
          },
          end: '((?: ?/)?>)',
          name: 'meta.tag.inline.any.html',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(</?)([a-zA-Z0-9:-]+)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.other.html'}
          },
          end: '(>)',
          name: 'meta.tag.other.html',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(</?)([a-zA-Z0-9{}:-]+)',
          captures: {
            1: {name: 'punctuation.definition.tag.html'},
            2: {name: 'entity.name.tag.tokenised.html'}
          },
          end: '(>)',
          name: 'meta.tag.tokenised.html',
          patterns: [{include: '#tag-stuff'}]
        },
        {include: '#entities'},
        {match: '<>', name: 'invalid.illegal.incomplete.html'},
        {match: '<', name: 'invalid.illegal.bad-angle-bracket.html'}
      ]
    },
    'jte-comment': {
      begin: '<%--',
      captures: {0: {name: 'punctuation.definition.block.comment.jte'}},
      end: '--%>',
      name: 'comment.jte'
    },
    'jte-comparison': {
      begin: '@(if|elseif|for)',
      contentName: 'source.java',
      end: '\n',
      name: 'comparison.jte',
      patterns: [{include: 'source.java'}]
    },
    'jte-declaration': {
      begin: '@(import|param)',
      contentName: 'source.java',
      end: '\n',
      name: 'declaration.jte',
      patterns: [{include: 'source.java'}]
    },
    'jte-statement': {
      begin: '\\${',
      contentName: 'source.java',
      end: '}',
      name: 'statement.jte',
      patterns: [{include: 'source.java'}]
    },
    string: {
      patterns: [
        {include: '#string-single-quoted'},
        {include: '#string-double-quoted'}
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.jte',
      patterns: [
        {include: '#escaped-double-quote'},
        {include: '#jte-comment'},
        {include: '#jte-statement'}
      ]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.jte',
      patterns: [
        {include: '#escaped-single-quote'},
        {include: '#jte-comment'},
        {include: '#jte-statement'}
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag_id_attribute'},
        {include: '#tag_generic_attribute'},
        {include: '#string'},
        {include: '#jte-comment'}
      ]
    },
    tag_generic_attribute: {
      begin: '\\b([a-zA-Z0-9_-]+)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.generic.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?<=\'|"|)',
      name: 'entity.other.attribute-name.html',
      patterns: [{include: '#string'}, {include: '#jte-statement'}]
    },
    tag_id_attribute: {
      begin: '\\b(id)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.id.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?<=\'|"|)',
      name: 'meta.attribute-with-value.id.html',
      patterns: [{include: '#string'}]
    }
  },
  scopeName: 'text.html.jte'
}

export default grammar
