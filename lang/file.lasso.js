// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `public domain`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lasso', '.las', '.lasso8', '.lasso9'],
  names: ['lasso', 'lassoscript'],
  patterns: [
    {
      begin: '(?m)\\A\\s*(?=<|\\[)',
      end: '\\a',
      name: 'text.html.basic',
      patterns: [{include: '#lasso-html'}]
    },
    {
      begin: '\\A',
      end: '\\a',
      name: 'source.lasso',
      patterns: [{include: '#lasso'}]
    }
  ],
  repository: {
    'embedded-code': {
      patterns: [{include: '#lasso_script'}, {include: '#lasso_brackets'}]
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
    lasso: {
      patterns: [
        {
          begin:
            '(?i)\\b(define)\\s+(?=[_a-z][_0-9a-z]*\\s*=>\\s*(type|trait|thread)\\s*\\{)',
          beginCaptures: {1: {name: 'keyword.definition.lasso'}},
          end: '(=>)\\s*(type|trait|thread)\\s*\\{',
          endCaptures: {
            1: {name: 'keyword.operator.association.lasso'},
            2: {name: 'keyword.descriptors.lasso'}
          },
          name: 'meta.definition.type_trait.start.lasso',
          patterns: [
            {match: '[_a-z][_0-9a-z]*', name: 'meta.name.type_trait.lasso'}
          ]
        },
        {
          begin: '(?i)\\b(define)\\s+(?=[_a-z][_0-9a-z]*\\s*=>|\\()',
          beginCaptures: {1: {name: 'keyword.definition.lasso'}},
          end: '\\(|(=>)',
          endCaptures: {1: {name: 'keyword.operator.association.lasso'}},
          name: 'meta.definition.method.start.lasso',
          patterns: [
            {match: '[_a-z][_0-9a-z]*', name: 'meta.name.method.lasso'}
          ]
        },
        {
          match:
            '(?i)\\b(abort|case|define|else|if|inline|iterate|loop|loop_abort|loop_continue|loop_count|loop_key|loop_value|match|protect|records|resultset|return|rows|while)\\b',
          name: 'keyword.control.lasso'
        },
        {
          match: '(?i)\\b(library|include)(_once)?\\b',
          name: 'keyword.control.import.lasso'
        },
        {
          match:
            '(?i)\\b(public|private|protected|data|type|thread|trait|import|parent|provide|require)\\b',
          name: 'keyword.descriptors.lasso'
        },
        {
          match:
            '(?i)\\b(array|action_params?|boolean|bytes|capture|curl|currency|database_registry|date|dateandtime|decimal|delve|dir|duration|eacher|file|generateForEachKeyed|generateForEachUnKeyed|generateSeries|inline_type|integer|list|list_node|literal|local|locale|map|map_node\n\t\t\t\t\t|net_tcp|net_tcpssl|net_udp|net_udppacket|object|pair|pairup|paramdesc|pdf_barcode|pdf_chunk|pdf_color|pdf_doc|pdf_font|pdf_hyphenator|pdf_image|pdf_list|pdf_paragraph|pdf_phrase|pdf_read|pdf_table|pdf_text|pdf_typebase\n\t\t\t\t\t|percent|queriable_select|queriable_groupBy|queriable_grouping|queriable_groupJoin|queriable_join|queriable_orderBy|queriable_orderByDescending|queriable_selectMany|queriable_skip|queriable_take|queriable_thenBy|queriable_thenByDescending|queriable_where\n\t\t\t\t\t|queue|repeat|serialization_element|serialization_object_identity_compare|serialization_reader|serialization_writer|serialization_writer_ref|serialization_writer_standin|set|scientific\n\t\t\t\t\t|sqlite_column|sqlite_columnScanner|sqlite_currentrow|sqlite_db|sqlite_expressionGenerator|sqlite_query_stat|sqlite_results|sqlite_table|stack|staticarray|string|tie|timeonly|tree_base|tree_node|tree_nullNode|user_registry|var(iable)?|web_request|web_response|xml_element|xml_namednodemap_attr|xml_node|xml_nodelist|zip|zip_file)\\b',
          name: 'storage.type.lasso'
        },
        {
          match:
            '(?i)\\b(jchar|jchararray|jbyte|jbytearray|jfloat|jint|jshort)\\b',
          name: 'storage.type.lasso'
        },
        {
          match: '\\b(?i:void|null|true|false)\\b',
          name: 'constant.language.lasso'
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.lasso',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.lasso'}]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.lasso',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.lasso'}]
        },
        {begin: '`', end: '`', name: 'string.quoted.backtick.lasso'},
        {
          begin: '/\\*\\*(\\!)?\\s*$',
          end: '\\*/',
          name: 'comment.block.documentation.lasso'
        },
        {begin: '/\\*', end: '\\*/', name: 'comment.block.lasso'},
        {
          match: '(//).*?($\\n?|(?=\\?>))',
          name: 'comment.line.double-slash.lasso'
        },
        {
          match: '\\$[a-zA-Z_][a-zA-Z0-9_.]*',
          name: 'variable.other.thread.lasso'
        },
        {match: '#[a-zA-Z_][a-zA-Z0-9_.]*', name: 'variable.other.local.lasso'},
        {match: '(\\s#1\\s|\\b(?i:self)\\b)', name: 'variable.language.lasso'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.lasso'
        },
        {match: '(\\-|\\+|\\*|/|%)', name: 'keyword.operator.arithmetic.lasso'},
        {
          match: '(?i)(!|&&|\\|\\||\\?|\\bnot\\b|\\band\\b|\\bor\\b)',
          name: 'keyword.operator.logical.lasso'
        },
        {
          match: '(=|:=|\\+=|\\-=|/=|%=)',
          name: 'keyword.operator.assignment.lasso'
        },
        {
          match: '(===|==|!==|!=|<=|>=|<|>|>>|!>>)',
          name: 'keyword.operator.comparison.lasso'
        },
        {match: '(->|&)', name: 'keyword.operator.target.lasso'},
        {match: '(=>)', name: 'keyword.operator.association.lasso'}
      ]
    },
    'lasso-html': {
      patterns: [
        {
          begin: '(<)([a-zA-Z0-9:]++)(?=[^>]*></\\2>)',
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
              begin: '(DOCTYPE)',
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
              patterns: [{include: '#embedded-code'}, {include: 'source.css'}]
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
        {include: '#entities'},
        {match: '<>', name: 'invalid.illegal.incomplete.html'},
        {match: '<', name: 'invalid.illegal.bad-angle-bracket.html'}
      ]
    },
    lasso_brackets: {
      begin: '\\[',
      end: '\\]',
      name: 'source.lasso.embedded.html',
      patterns: [{include: '#lasso'}]
    },
    lasso_script: {
      begin: '(<\\?)(?i:=|lasso(script)?)',
      end: '(\\?>)',
      name: 'source.lasso.embedded.html',
      patterns: [{include: '#lasso'}]
    },
    smarty: {
      patterns: [
        {
          begin: '(\\{(literal)\\})',
          captures: {
            1: {name: 'source.smarty.embedded.html'},
            2: {name: 'support.function.built-in.smarty'}
          },
          end: '(\\{/(literal)\\})'
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
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
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
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
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
        }
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-id-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'},
        {include: '#embedded-code'}
      ]
    }
  },
  scopeName: 'file.lasso'
}

export default grammar
