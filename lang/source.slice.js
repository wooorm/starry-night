// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zeroc-ice/vscode-slice>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['slice'],
  patterns: [{include: '#slice'}],
  repository: {
    attribute: {
      patterns: [{include: '#attribute.file'}, {include: '#attribute.local'}]
    },
    'attribute.directive': {
      begin: '[\\w]+(?:(::)\\w+)*',
      beginCaptures: {
        0: {name: 'entity.name.function.attribute.slice'},
        1: {name: 'punctuation.separator.double-colon.slice'}
      },
      end: '(?=\\])|$',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.parenthesis.open.attribute.slice'}
          },
          end: '(?=\\])|$',
          name: 'meta.attribute.arguments.slice',
          patterns: [
            {include: '#comment'},
            {include: '#string-literal'},
            {
              match: '\\b\\w+\\b',
              name: 'variable.other.constant.attribute.slice'
            },
            {match: ',', name: 'punctuation.separator.comma.slice'},
            {
              begin: '\\)',
              beginCaptures: {
                0: {name: 'punctuation.parenthesis.close.attribute.slice'}
              },
              end: '(?=\\])|$',
              patterns: [{include: '#comment'}, {include: '#error'}]
            },
            {include: '#error'}
          ]
        },
        {include: '#error'}
      ]
    },
    'attribute.file': {
      begin: '\\[\\[',
      beginCaptures: {
        0: {name: 'punctuation.double-bracket.open.attribute.slice'}
      },
      end: '(\\]\\])|$',
      endCaptures: {
        1: {name: 'punctuation.double-bracket.close.attribute.slice'}
      },
      name: 'meta.attribute.file.slice',
      patterns: [
        {include: '#comment'},
        {include: '#attribute.directive'},
        {include: '#error'}
      ]
    },
    'attribute.local': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.bracket.open.attribute.slice'}},
      end: '(\\]|$)',
      endCaptures: {1: {name: 'punctuation.bracket.close.attribute.slice'}},
      name: 'meta.attribute.local.slice',
      patterns: [
        {include: '#comment'},
        {include: '#attribute.directive'},
        {include: '#error'}
      ]
    },
    class: {
      begin: '(?<!\\\\)\\bclass\\b',
      beginCaptures: {0: {name: 'storage.type.class.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.slice'}},
      name: 'meta.class.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '(?=})',
          patterns: [
            {include: '#standard'},
            {include: '#id-value'},
            {include: '#field-container-inheritance'},
            {include: '#field-container'},
            {include: '#error'}
          ]
        },
        {include: '#field-container'},
        {include: '#error'}
      ]
    },
    comment: {
      patterns: [
        {include: '#doc-comment.line'},
        {include: '#comment.line'},
        {include: '#comment.block'}
      ]
    },
    'comment.block': {
      begin: '\\/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.slice'}
      },
      contentName: 'text.slice',
      end: '\\*\\/',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.block.end.slice'}
      },
      name: 'comment.block.slice'
    },
    'comment.line': {
      begin: '\\/\\/',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.line.double-slash.begin.slice'
        }
      },
      contentName: 'text.slice',
      end: '$',
      name: 'comment.line.double-slash.slice'
    },
    'compilation-mode': {
      begin: '(?<!\\\\)\\bmode\\b',
      beginCaptures: {0: {name: 'keyword.other.mode.slice'}},
      end: '$',
      name: 'meta.mode.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '=',
          beginCaptures: {0: {name: 'keyword.operator.assignment.slice'}},
          end: '$',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?(\\w+)',
              beginCaptures: {
                1: {
                  patterns: [
                    {
                      match: 'Slice1|Slice2',
                      name: 'variable.other.constant.mode.slice'
                    },
                    {include: '#error'}
                  ]
                }
              },
              end: '$',
              patterns: [{include: '#standard'}]
            },
            {include: '#error'}
          ]
        },
        {include: '#error'}
      ]
    },
    'custom-type': {
      begin: '(?<!\\\\)\\bcustom\\b',
      beginCaptures: {0: {name: 'storage.type.custom.slice'}},
      end: '$',
      name: 'meta.custom.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '$',
          patterns: [{include: '#standard'}]
        },
        {include: '#error'}
      ]
    },
    'doc-comment.line': {
      begin: '\\/\\/\\/',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.line.documentation.begin.slice'
        }
      },
      end: '$',
      name: 'comment.line.documentation.slice',
      patterns: [
        {include: '#documentation.param-tag'},
        {include: '#documentation.returns-tag'},
        {include: '#documentation.throws-tag'},
        {include: '#documentation.see-tag'},
        {include: '#documentation.text'}
      ]
    },
    'documentation.identifier': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.double-colon.slice'},
            2: {name: 'punctuation.separator.double-colon.slice'}
          },
          match: '(?:\\b|(::))(?:[a-zA-Z_]\\w*(::)?)+\\b',
          name: 'variable.link.slice'
        },
        {include: '#error'}
      ]
    },
    'documentation.identifier-with-section': {
      begin: '\\b\\w+\\b',
      beginCaptures: {0: {patterns: [{include: '#documentation.identifier'}]}},
      end: '$',
      patterns: [{include: '#documentation.section'}, {include: '#error'}]
    },
    'documentation.inline-tags': {
      begin: '{(?=\\s*@)',
      beginCaptures: {0: {name: 'punctuation.brace.open.documentation.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.documentation.slice'}},
      patterns: [{include: '#documentation.link-tag'}, {include: '#error'}]
    },
    'documentation.link-tag': {
      begin: '(@)link\\b',
      beginCaptures: {
        0: {name: 'keyword.other.documentation.link.slice'},
        1: {name: 'punctuation.definition.annotation.documentation.slice'}
      },
      end: '(?=})',
      name: 'meta.documentation.link.slice',
      patterns: [
        {
          begin: '(?:\\b|::)(?:\\w+(?:::)?)+\\b',
          beginCaptures: {
            0: {patterns: [{include: '#documentation.identifier'}]}
          },
          end: '(?=})',
          patterns: [{include: '#error'}]
        },
        {include: '#error'}
      ]
    },
    'documentation.param-tag': {
      begin: '(@)param\\b',
      beginCaptures: {
        0: {name: 'keyword.other.documentation.param.slice'},
        1: {name: 'punctuation.definition.annotation.documentation.slice'}
      },
      end: '$',
      name: 'meta.documentation.param.slice',
      patterns: [
        {include: '#documentation.identifier-with-section'},
        {include: '#error'}
      ]
    },
    'documentation.returns-tag': {
      begin: '(@)returns\\b',
      beginCaptures: {
        0: {name: 'keyword.other.documentation.returns.slice'},
        1: {name: 'punctuation.definition.annotation.documentation.slice'}
      },
      end: '$',
      name: 'meta.documentation.returns.slice',
      patterns: [
        {include: '#documentation.identifier-with-section'},
        {include: '#documentation.section'},
        {include: '#error'}
      ]
    },
    'documentation.section': {
      begin: ':',
      beginCaptures: {
        0: {name: 'punctuation.separator.colon.documentation.slice'}
      },
      end: '$',
      patterns: [{include: '#documentation.text'}]
    },
    'documentation.see-tag': {
      begin: '(@)see\\b',
      beginCaptures: {
        0: {name: 'keyword.other.documentation.see.slice'},
        1: {name: 'punctuation.definition.annotation.documentation.slice'}
      },
      end: '$',
      name: 'meta.documentation.see.slice',
      patterns: [
        {
          begin: '(?:\\b|::)(?:\\w+(?:::)?)+\\b',
          beginCaptures: {
            0: {patterns: [{include: '#documentation.identifier'}]}
          },
          end: '$',
          patterns: [{include: '#error'}]
        },
        {include: '#error'}
      ]
    },
    'documentation.text': {
      begin: '(?=\\S)',
      end: '$',
      patterns: [
        {include: '#documentation.inline-tags'},
        {match: '.', name: 'text.slice'}
      ]
    },
    'documentation.throws-tag': {
      begin: '(@)throws\\b',
      beginCaptures: {
        0: {name: 'keyword.other.documentation.throws.slice'},
        1: {name: 'punctuation.definition.annotation.documentation.slice'}
      },
      end: '$',
      name: 'meta.documentation.throws.slice',
      patterns: [
        {
          begin: '(?:\\b|::)(?:\\w+(?:::)?)+\\b',
          beginCaptures: {
            0: {patterns: [{include: '#documentation.identifier'}]}
          },
          end: '$',
          patterns: [{include: '#documentation.section'}, {include: '#error'}]
        },
        {include: '#error'}
      ]
    },
    enum: {
      begin: '(?<!\\\\)\\benum\\b',
      beginCaptures: {0: {name: 'storage.type.enum.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.slice'}},
      name: 'meta.enum.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '(?=})',
          patterns: [
            {include: '#standard'},
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.colon.slice'}},
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {include: '#enumerator-container'},
                {include: '#type.identifier'},
                {include: '#error'}
              ]
            },
            {include: '#enumerator-container'},
            {include: '#error'}
          ]
        },
        {include: '#enumerator-container'},
        {include: '#error'}
      ]
    },
    enumerator: {
      begin: '\\\\?\\w+',
      beginCaptures: {
        0: {
          name: 'variable.other.constant.enum.slice',
          patterns: [{include: '#field.identifier'}]
        }
      },
      end: '(?=[,}])|$',
      name: 'meta.enumerator.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.slice'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.slice'}},
          patterns: [
            {include: '#tag'},
            {include: '#field'},
            {match: ',', name: 'punctuation.separator.comma.slice'},
            {include: '#slice'}
          ]
        },
        {include: '#enumerator-value'}
      ]
    },
    'enumerator-container': {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.brace.open.slice'}},
      end: '(?=})',
      patterns: [
        {include: '#enumerator'},
        {match: ',', name: 'punctuation.separator.comma.slice'},
        {include: '#slice'}
      ]
    },
    'enumerator-value': {
      begin: '=',
      beginCaptures: {0: {name: 'keyword.operator.assignment.slice'}},
      end: '(?=[,}])|$',
      patterns: [
        {include: '#standard'},
        {
          begin: '(?=-|\\b)[\\w-]+\\b',
          beginCaptures: {0: {patterns: [{include: '#integer-literal'}]}},
          end: '(?=[,}])|$',
          patterns: [{include: '#standard'}]
        },
        {include: '#error'}
      ]
    },
    error: {match: '\\S', name: 'invalid'},
    exception: {
      begin: '(?<!\\\\)\\bexception\\b',
      beginCaptures: {0: {name: 'storage.type.exception.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.slice'}},
      name: 'meta.exception.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '(?=})',
          patterns: [
            {include: '#standard'},
            {include: '#field-container-inheritance'},
            {include: '#field-container'},
            {include: '#error'}
          ]
        },
        {include: '#field-container'},
        {include: '#error'}
      ]
    },
    field: {
      begin: '\\\\?\\w+',
      beginCaptures: {
        0: {
          name: 'entity.name.variable.slice',
          patterns: [{include: '#field.identifier'}]
        }
      },
      end: '(?=[,}\\)])|$',
      name: 'meta.field.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: ':',
          beginCaptures: {0: {name: 'punctuation.separator.colon.slice'}},
          end: '(?=[,}\\)])|$',
          patterns: [
            {include: '#standard'},
            {include: '#type.identifier'},
            {include: '#error'}
          ]
        },
        {include: '#error'}
      ]
    },
    'field-container': {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.brace.open.slice'}},
      end: '(?=})',
      patterns: [
        {include: '#tag'},
        {include: '#field'},
        {match: ',', name: 'punctuation.separator.comma.slice'},
        {include: '#slice'}
      ]
    },
    'field-container-inheritance': {
      begin: ':',
      beginCaptures: {0: {name: 'punctuation.separator.colon.slice'}},
      end: '(?=})',
      patterns: [
        {include: '#standard'},
        {include: '#field-container'},
        {include: '#type.identifier'},
        {include: '#error'}
      ]
    },
    'field.identifier': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.identifier.escape.slice'},
            2: {patterns: [{include: '#reserved-identifiers'}]}
          },
          match: '(\\\\?)\\b([a-zA-Z_]\\w*)\\b'
        },
        {include: '#error'}
      ]
    },
    'id-value': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.open.slice'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.close.slice'}},
      patterns: [
        {include: '#standard'},
        {
          begin: '[^\\s\\)]+',
          beginCaptures: {0: {patterns: [{include: '#integer-literal'}]}},
          end: '(?=\\))',
          patterns: [{include: '#standard'}, {include: '#error'}]
        },
        {include: '#error'}
      ]
    },
    'integer-literal': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.numeric.negative.slice'},
            2: {name: 'punctuation.definition.numeric.bin.slice'}
          },
          match: '(-)?\\b(0b)(?:[0-1_]+)\\b',
          name: 'constant.numeric.bin.slice'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.numeric.negative.slice'}
          },
          match: '(-)?\\b(?:[\\d_]+)\\b',
          name: 'constant.numeric.dec.slice'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.numeric.negative.slice'},
            2: {name: 'punctuation.definition.numeric.hex.slice'}
          },
          match: '(-)?\\b(0x)(?:[\\da-fA-F_]+)\\b',
          name: 'constant.numeric.hex.slice'
        },
        {include: '#error'}
      ]
    },
    interface: {
      begin: '(?<!\\\\)\\binterface\\b',
      beginCaptures: {0: {name: 'storage.type.interface.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.slice'}},
      name: 'meta.interface.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '(?=})',
          patterns: [
            {include: '#standard'},
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.colon.slice'}},
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {include: '#operation-container'},
                {match: ',', name: 'punctuation.separator.comma.slice'},
                {include: '#type.identifier'},
                {include: '#error'}
              ]
            },
            {include: '#operation-container'},
            {include: '#error'}
          ]
        },
        {include: '#operation-container'},
        {include: '#error'}
      ]
    },
    'modifier-keywords': {
      captures: {
        1: {name: 'storage.modifier.compact.slice'},
        2: {name: 'storage.modifier.idempotent.slice'},
        3: {name: 'storage.modifier.stream.slice'},
        4: {name: 'meta.tag.slice', patterns: [{include: '#tag'}]},
        5: {name: 'storage.modifier.throws.slice'},
        6: {name: 'storage.modifier.unchecked.slice'}
      },
      match:
        '(?<!\\\\)\\b(?:(compact)|(idempotent)|(stream)|(tag\\([-\\w]+\\))|(throws)|(unchecked))(\\b|(?<=\\W))'
    },
    'module-declaration': {
      begin: '(?<!\\\\)\\bmodule\\b',
      beginCaptures: {0: {name: 'keyword.other.module.slice'}},
      end: '$',
      name: 'meta.module.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '(?=\\b|\\\\)[\\\\\\w:]+(?<=\\b|\\W)',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '$',
          patterns: [{include: '#standard'}]
        },
        {include: '#error'}
      ]
    },
    'operation-container': {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.brace.open.slice'}},
      end: '(?=})',
      patterns: [
        {include: '#tag'},
        {match: '\\bstream\\b', name: 'storage.modifier.stream.slice'},
        {
          begin: '\\b(throws)\\b\\s*(\\()',
          beginCaptures: {
            1: {name: 'storage.modifier.throws.slice'},
            2: {name: 'punctuation.parenthesis.open.slice'}
          },
          contentName: 'meta.exception-list.slice',
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.slice'}},
          patterns: [
            {include: '#standard'},
            {match: ',', name: 'punctuation.separator.comma.slice'},
            {include: '#storage.identifier'},
            {include: '#slice'}
          ]
        },
        {match: '\\bthrows\\b', name: 'storage.modifier.throws.slice'},
        {match: '->', name: 'punctuation.definition.returns.slice'},
        {match: ',', name: 'punctuation.separator.comma.slice'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.open.slice'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.close.slice'}},
          name: 'meta.parameter-list.slice',
          patterns: [
            {include: '#tag'},
            {include: '#parameter'},
            {match: ',', name: 'punctuation.separator.comma.slice'},
            {include: '#slice'}
          ]
        },
        {
          captures: {
            0: {
              name: 'entity.name.function.slice',
              patterns: [{include: '#field.identifier'}]
            }
          },
          match: '\\\\?\\w+(?=\\s*\\()'
        },
        {include: '#slice'}
      ]
    },
    parameter: {
      begin: '\\\\?\\w+',
      beginCaptures: {
        0: {
          name: 'entity.name.variable.slice',
          patterns: [{include: '#field.identifier'}]
        }
      },
      end: '(?=[,\\)])|$',
      name: 'meta.parameter.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: ':',
          beginCaptures: {0: {name: 'punctuation.separator.colon.slice'}},
          end: '(?=[,\\)])|$',
          patterns: [
            {include: '#standard'},
            {match: '\\bstream\\b', name: 'storage.modifier.stream.slice'},
            {include: '#type.identifier'},
            {include: '#error'}
          ]
        },
        {include: '#error'}
      ]
    },
    preprocessor: {
      patterns: [
        {include: '#preprocessor.define'},
        {include: '#preprocessor.undef'},
        {include: '#preprocessor.if'},
        {include: '#preprocessor.elif'},
        {include: '#preprocessor.else'},
        {include: '#preprocessor.endif'},
        {include: '#preprocessor.unknown'},
        {include: '#preprocessor.unknown'}
      ]
    },
    'preprocessor.define': {
      begin: '^\\s*((#)\\s*define)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.undef.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.define.slice',
      patterns: [
        {include: '#comment.line'},
        {include: '#preprocessor.single-identifier'},
        {include: '#error'}
      ]
    },
    'preprocessor.elif': {
      begin: '^\\s*((#)\\s*elif)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.elif.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.elif.slice',
      patterns: [{include: '#preprocessor.expression'}]
    },
    'preprocessor.else': {
      begin: '^\\s*((#)\\s*else)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.else.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.else.slice',
      patterns: [{include: '#comment.line'}, {include: '#error'}]
    },
    'preprocessor.endif': {
      begin: '^\\s*((#)\\s*endif)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.endif.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.endif.slice',
      patterns: [{include: '#comment.line'}, {include: '#error'}]
    },
    'preprocessor.expression': {
      patterns: [
        {include: '#comment.line'},
        {
          captures: {
            1: {name: 'keyword.operator.logical.not.slice'},
            2: {name: 'keyword.operator.logical.and.slice'},
            3: {name: 'keyword.operator.logical.or.slice'},
            4: {name: 'punctuation.parenthesis.open.slice'},
            5: {name: 'punctuation.parenthesis.close.slice'}
          },
          match: '(!)|(&&)|(\\|\\|)|(\\()|(\\))'
        },
        {include: '#preprocessor.identifier'},
        {include: '#error'}
      ]
    },
    'preprocessor.identifier': {
      patterns: [
        {
          match: '\\b[a-zA-Z_]\\w*\\b',
          name: 'constant.other.symbol.preprocessor.slice'
        },
        {include: '#error'}
      ]
    },
    'preprocessor.if': {
      begin: '^\\s*((#)\\s*if)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.if.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.if.slice',
      patterns: [{include: '#preprocessor.expression'}]
    },
    'preprocessor.single-identifier': {
      begin: '\\b\\w+\\b',
      beginCaptures: {0: {patterns: [{include: '#preprocessor.identifier'}]}},
      end: '$',
      patterns: [{include: '#comment.line'}, {include: '#error'}]
    },
    'preprocessor.undef': {
      begin: '^\\s*((#)\\s*undef)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.undef.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.undef.slice',
      patterns: [
        {include: '#comment.line'},
        {include: '#preprocessor.single-identifier'},
        {include: '#error'}
      ]
    },
    'preprocessor.unknown': {
      begin: '^\\s*((#)\\s*\\w*)\\b',
      beginCaptures: {
        1: {name: 'invalid.illegal.slice'},
        2: {name: 'punctuation.definition.preprocessor.slice'}
      },
      end: '$',
      name: 'meta.preprocessor.unknown.slice',
      patterns: [{include: '#comment.line'}, {include: '#error'}]
    },
    'reserved-identifiers': {
      match:
        '(?<!\\\\)\\b(?:module|struct|exception|class|interface|enum|custom|typealias|Sequence|Dictionary|bool|int8|uint8|int16|uint16|int32|uint32|varint32|varuint32|int64|uint64|varint62|varuint62|float32|float64|string|AnyClass|compact|idempotent|mode|stream|tag|throws|unchecked)\\b',
      name: 'invalid.illegal.identifier.slice'
    },
    slice: {
      patterns: [
        {include: '#standard'},
        {include: '#compilation-mode'},
        {include: '#module-declaration'},
        {include: '#struct'},
        {include: '#class'},
        {include: '#exception'},
        {include: '#enum'},
        {include: '#interface'},
        {include: '#custom-type'},
        {include: '#type-alias'},
        {include: '#modifier-keywords'},
        {include: '#type.identifier'}
      ]
    },
    standard: {
      patterns: [
        {include: '#comment'},
        {include: '#preprocessor'},
        {include: '#attribute'}
      ]
    },
    'storage.identifier': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.double-colon.slice'},
            2: {name: 'punctuation.definition.identifier.escape.slice'},
            3: {patterns: [{include: '#reserved-identifiers'}]},
            4: {name: 'punctuation.separator.double-colon.slice'}
          },
          match: '(?:\\b|(::)|(?=\\\\))(?:(\\\\?)([a-zA-Z_]\\w*)(::)?)+\\b',
          name: 'entity.name.class.slice'
        },
        {include: '#error'}
      ]
    },
    'string-literal': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.slice'}},
      end: '(")|$',
      endCaptures: {1: {name: 'punctuation.definition.string.end.slice'}},
      name: 'string.quoted.double.slice',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.slice'}]
    },
    struct: {
      begin: '(?<!\\\\)\\bstruct\\b',
      beginCaptures: {0: {name: 'storage.type.struct.slice'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.brace.close.slice'}},
      name: 'meta.struct.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '(?=})',
          patterns: [
            {include: '#standard'},
            {include: '#field-container'},
            {include: '#error'}
          ]
        },
        {include: '#field-container'},
        {include: '#error'}
      ]
    },
    tag: {
      begin: '\\b(tag)\\s*(?=\\()',
      beginCaptures: {1: {name: 'storage.modifier.tag.slice'}},
      end: '(?<=\\))',
      patterns: [{include: '#id-value'}]
    },
    'type-alias': {
      begin: '(?<!\\\\)\\btypealias\\b',
      beginCaptures: {0: {name: 'storage.type.alias.slice'}},
      end: '$',
      name: 'meta.typealias.slice',
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.identifier'}]}},
          end: '$',
          patterns: [
            {include: '#standard'},
            {
              begin: '=',
              beginCaptures: {0: {name: 'keyword.operator.assignment.slice'}},
              end: '$',
              patterns: [
                {include: '#standard'},
                {include: '#type.identifier'},
                {include: '#error'}
              ]
            },
            {include: '#error'}
          ]
        },
        {include: '#error'}
      ]
    },
    'type-keywords': {
      captures: {
        1: {name: 'storage.type.bool.slice'},
        10: {name: 'storage.type.int64.slice'},
        11: {name: 'storage.type.uint64.slice'},
        12: {name: 'storage.type.varint62.slice'},
        13: {name: 'storage.type.varuint62.slice'},
        14: {name: 'storage.type.float32.slice'},
        15: {name: 'storage.type.float64.slice'},
        16: {name: 'storage.type.string.slice'},
        17: {name: 'storage.type.AnyClass.slice'},
        18: {name: 'storage.type.sequence.slice'},
        19: {name: 'storage.type.dictionary.slice'},
        2: {name: 'storage.type.int8.slice'},
        3: {name: 'storage.type.uint8.slice'},
        4: {name: 'storage.type.int16.slice'},
        5: {name: 'storage.type.uint16.slice'},
        6: {name: 'storage.type.int32.slice'},
        7: {name: 'storage.type.uint32.slice'},
        8: {name: 'storage.type.varint32.slice'},
        9: {name: 'storage.type.varuint32.slice'}
      },
      match:
        '(?<!\\\\)\\b(?:(bool)|(int8)|(uint8)|(int16)|(uint16)|(int32)|(uint32)|(varint32)|(varuint32)|(int64)|(uint64)|(varint62)|(varuint62)|(float32)|(float64)|(string)|(AnyClass)|(Sequence)|(Dictionary))\\b'
    },
    'type-name': {
      patterns: [{include: '#type-keywords'}, {include: '#storage.identifier'}]
    },
    'type.identifier': {
      patterns: [
        {
          begin: '(?=\\b|\\W)([\\\\\\w:]+)\\s*(\\<)',
          beginCaptures: {
            1: {patterns: [{include: '#type-name'}]},
            2: {name: 'punctuation.angle.open.slice'}
          },
          end: '(\\>)\\s*(\\?)?',
          endCaptures: {
            1: {name: 'punctuation.angle.close.slice'},
            2: {name: 'punctuation.definition.optional.slice'}
          },
          name: 'meta.generic.parameters.slice',
          patterns: [
            {include: '#standard'},
            {match: ',', name: 'punctuation.separator.comma.slice'},
            {include: '#type.identifier'},
            {include: '#error'}
          ]
        },
        {
          captures: {
            1: {patterns: [{include: '#type-name'}]},
            2: {name: 'punctuation.definition.optional.slice'}
          },
          match: '(?=\\b|\\W)([\\\\\\w:]+)\\s*(\\?)?(?<=\\b|\\W)'
        }
      ]
    }
  },
  scopeName: 'source.slice'
}

export default grammar
