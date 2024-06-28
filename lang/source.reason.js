// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/reasonml-editor/language-reason>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rei'],
  names: ['reason'],
  patterns: [
    {include: '#structure-expression-block-item'},
    {include: '#value-expression'}
  ],
  repository: {
    attribute: {
      begin: '(?=\\[(@{1,3})[[:space:]]*[[:alpha:]])',
      end: '\\]',
      patterns: [
        {
          begin: '\\[(@{1,3})',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: "(?=[^_\\.'[:word:]])",
          patterns: [{include: '#attribute-identifier'}]
        },
        {include: '#attribute-payload'}
      ]
    },
    'attribute-identifier': {
      patterns: [
        {
          captures: {
            1: {name: 'support.class entity.name.class'},
            2: {name: 'keyword.control.less'}
          },
          match: '\\b([[:alpha:]][[:word:]]*)\\b[[:space:]]*(?:(\\.))'
        },
        {
          match: '\\b([[:alpha:]][[:word:]]*)\\b',
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      ]
    },
    'attribute-payload': {
      patterns: [
        {
          begin: '(:)',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=\\])',
          patterns: [
            {include: '#structure-expression'},
            {include: '#module-item-type'},
            {include: '#type-expression'}
          ]
        },
        {
          begin: '([\\?])',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?=\\])',
          patterns: [{include: '#pattern-guard'}, {include: '#pattern'}]
        },
        {include: '#structure-expression-block-item'},
        {include: '#value-expression'}
      ]
    },
    'class-item-inherit': {
      begin: '\\b(inherit)\\b',
      beginCaptures: {1: {name: 'keyword.other'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#value-expression'}]
    },
    'class-item-method': {
      begin: '\\b(method)\\b',
      beginCaptures: {1: {name: 'storage.type'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#module-item-let-value-bind-name-params-type-body'}]
    },
    comment: {
      patterns: [
        {include: '#comment-line'},
        {include: '#comment-block-doc'},
        {include: '#comment-block'}
      ]
    },
    'comment-block': {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end'}},
      name: 'comment.block'
    },
    'comment-block-doc': {
      begin: '/\\*\\*(?!/)',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end'}},
      name: 'comment.block.documentation'
    },
    'comment-line': {
      begin: '(^[ \\t]+)?(//)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading'},
        2: {name: 'punctuation.definition.comment'}
      },
      end: '$',
      name: 'comment.line.double-slash'
    },
    'condition-lhs': {
      begin:
        '(?<![#\\-:!?.@*/&%^+<=>|~$\\\\])([\\?])(?![#\\-:!?.@*/&%^+<=>|~$\\\\])',
      beginCaptures: {
        1: {name: 'keyword.control message.error variable.interpolation'}
      },
      end: '(?=[\\)])',
      patterns: [
        {
          match: '(?:\\b|[[:space:]]+)([?])(?:\\b|[[:space:]]+)',
          name: 'keyword.control message.error variable.interpolation'
        },
        {include: '#value-expression'}
      ]
    },
    'extension-node': {
      begin: '(?=\\[(%{1,3})[[:space:]]*[[:alpha:]])',
      end: '\\]',
      patterns: [
        {
          begin: '\\[(%{1,3})',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: "(?=[^_\\.'[:word:]])",
          patterns: [{include: '#attribute-identifier'}]
        },
        {include: '#attribute-payload'}
      ]
    },
    jsx: {patterns: [{include: '#jsx-head'}, {include: '#jsx-tail'}]},
    'jsx-attributes': {
      patterns: [
        {
          begin: '\\b([[:lower:]][[:word:]]*)\\b[[:space:]]*(=)',
          beginCaptures: {
            1: {
              name: 'markup.inserted constant.language support.property-value entity.name.filename'
            },
            2: {name: 'keyword.control.less'}
          },
          end: '(?<![=])(?=[/>[:lower:]])',
          patterns: [{include: '#value-expression-atomic-with-paths'}]
        },
        {
          captures: {
            2: {
              name: 'markup.inserted constant.language support.property-value entity.name.filename'
            }
          },
          match: '(\\b([[:lower:]][[:word:]]*)\\b[[:space:]]*+)'
        }
      ]
    },
    'jsx-body': {
      begin: '((>))',
      beginCaptures: {2: {name: 'punctuation.definition.tag.end.js'}},
      end: '(?=</)',
      patterns: [
        {match: '[[:lower:]][[:word:]]*'},
        {include: '#value-expression'}
      ]
    },
    'jsx-head': {
      applyEndPatternLast: true,
      begin: '((<))(?=[_[:alpha:]])',
      beginCaptures: {2: {name: 'punctuation.definition.tag.begin.js'}},
      end: '((/>))|(?=</)',
      endCaptures: {2: {name: 'punctuation.definition.tag.end.js'}},
      patterns: [
        {
          begin: '\\G',
          end: '(?=[[:space:]/>])[[:space:]]*+',
          patterns: [
            {include: '#module-path-simple'},
            {
              match: '\\b[[:lower:]][[:word:]]*\\b',
              name: 'entity.name.tag.inline.any.html'
            }
          ]
        },
        {include: '#jsx-attributes'},
        {include: '#jsx-body'},
        {include: '#comment'}
      ]
    },
    'jsx-tail': {
      applyEndPatternLast: true,
      begin: '\\G(/>)|(</)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.end.js'},
        2: {name: 'punctuation.definition.tag.begin.js'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.js'}},
      patterns: [
        {include: '#module-path-simple'},
        {
          match: '\\b[[:lower:]][[:word:]]*\\b',
          name: 'entity.name.tag.inline.any.html'
        }
      ]
    },
    'module-item-class-type': {
      begin: '\\b(class)\\b',
      beginCaptures: {1: {name: 'keyword.other'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {
          begin: '(?:\\G|^)[[:space:]]*\\b(type)\\b',
          beginCaptures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '(?==)',
          patterns: [{include: '#module-item-type-bind-name-tyvars'}]
        },
        {
          begin: '(=)',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?=;)',
          patterns: [
            {include: '#attribute'},
            {include: '#comment'},
            {include: '#class-item-inherit'},
            {include: '#class-item-method'}
          ]
        }
      ]
    },
    'module-item-exception': {
      begin: '\\b(exception)\\b',
      beginCaptures: {1: {name: 'keyword.other'}},
      end: '(;)|(?=}|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#module-item-type-bind-body-item'}]
    },
    'module-item-external': {
      begin: '\\b(external)\\b',
      beginCaptures: {1: {name: 'storage.type'}},
      end: '(;)|(?=}|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#module-item-let-value-bind-name-or-pattern'},
        {include: '#module-item-let-value-bind-type'},
        {
          begin: '(=)',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#attribute'},
            {
              begin: '"',
              end: '"',
              name: 'string.double string.regexp',
              patterns: [
                {include: '#value-literal-string-escape'},
                {
                  captures: {
                    1: {
                      name: 'entity.other.attribute-name.css constant.language constant.numeric'
                    },
                    2: {
                      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                    },
                    3: {
                      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                    }
                  },
                  match: '(?:(%)(.*?)|(caml.*?))(?="|(?:[^\\\\\\n]$))'
                }
              ]
            }
          ]
        }
      ]
    },
    'module-item-include': {
      begin: '\\b(include)\\b',
      beginCaptures: {1: {name: 'keyword.control.include'}},
      end: '(;)|(?=}|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#signature-expression'}]
    },
    'module-item-let': {
      begin: '\\b(let)\\b',
      beginCaptures: {1: {name: 'storage.type'}},
      end: '(;)|(?=}|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#module-item-let-module'},
        {include: '#module-item-let-value'}
      ]
    },
    'module-item-let-module': {
      begin: '(?:\\G|^)[[:space:]]*\\b(module)\\b',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.control storage.type message.error'
        }
      },
      end: '(?=[;}]|\\b(class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#module-item-let-module-and'},
        {include: '#module-item-let-module-rec'},
        {include: '#module-item-let-module-bind-name-params-type-body'}
      ]
    },
    'module-item-let-module-and': {
      begin: '\\b(and)\\b',
      beginCaptures: {1: {name: 'storage.type'}},
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#module-item-let-module-bind-name-params-type-body'}
      ]
    },
    'module-item-let-module-bind-body': {
      begin: '(=>?)',
      beginCaptures: {1: {name: 'keyword.control.less'}},
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#structure-expression'}]
    },
    'module-item-let-module-bind-name-params': {
      begin: '\\b([[:upper:]][[:word:]]*)\\b',
      beginCaptures: {1: {name: 'support.class entity.name.class'}},
      end: '(?=[;:}=]|\\b(class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#module-item-let-module-param'}
      ]
    },
    'module-item-let-module-bind-name-params-type-body': {
      begin: '(?:\\G|^)',
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#module-item-let-module-bind-name-params'},
        {include: '#module-item-let-module-bind-type'},
        {include: '#module-item-let-module-bind-body'}
      ]
    },
    'module-item-let-module-bind-type': {
      begin: '(:)',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?=[;}=]|\\b(and|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val)\\b)',
      patterns: [{include: '#signature-expression'}]
    },
    'module-item-let-module-param': {
      begin: '(?=\\()',
      end: '\\)',
      patterns: [
        {
          begin: '\\(',
          end: '(?=[:])',
          patterns: [{include: '#comment'}, {include: '#module-name-simple'}]
        },
        {
          begin: '(:)',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=\\))',
          patterns: [{include: '#signature-expression'}]
        }
      ]
    },
    'module-item-let-module-rec': {
      begin: '(?:\\G|^)[[:space:]]*\\b(rec)\\b',
      beginCaptures: {1: {name: 'keyword.control storage.modifier.rec'}},
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#module-item-let-module-bind-name-params-type-body'}
      ]
    },
    'module-item-let-value': {
      patterns: [
        {include: '#module-item-let-value-and'},
        {include: '#module-item-let-value-rec'},
        {include: '#module-item-let-value-bind-name-params-type-body'}
      ]
    },
    'module-item-let-value-and': {
      begin: '\\b(and)\\b',
      beginCaptures: {1: {name: 'storage.type'}},
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#module-item-let-value-bind-name-params-type-body'}]
    },
    'module-item-let-value-bind-body': {
      begin: '(=>?)',
      beginCaptures: {1: {name: 'keyword.control.less'}},
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#value-expression'}]
    },
    'module-item-let-value-bind-name-or-pattern': {
      begin:
        '(?<=[^[:word:]]and|^and|[^[:word:]]external|^external|[^[:word:]]let|^let|[^[:word:]]method|^method|[^[:word:]]rec|^rec)[[:space:]]*',
      end: '(?<=[^[:space:]])|(?=[[:space:]]|[;:}=]|\\b(and|as|class|constraint|exception|external|for|include|inherit|let|method|module|nonrec|open|private|rec|switch|try|type|val|while|with)\\b)',
      patterns: [
        {include: '#comment'},
        {
          captures: {1: {name: 'comment'}, 2: {name: 'entity.name.function'}},
          match: '\\b(?:([_][[:word:]]+)|([[:lower:]][[:word:]]*))\\b'
        },
        {include: '#module-item-let-value-bind-parens-params'},
        {include: '#pattern'}
      ]
    },
    'module-item-let-value-bind-name-params-type-body': {
      begin:
        '(?<=[^[:word:]]and|^and|[^[:word:]]external|^external|[^[:word:]]let|^let|[^[:word:]]method|^method|[^[:word:]]rec|^rec)',
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {
          begin: '(::)',
          beginCaptures: {1: {name: 'keyword.control'}},
          end: '(?<=[[:space:]])',
          patterns: [
            {include: '#pattern'},
            {
              begin: '(=)',
              beginCaptures: {
                1: {name: 'markup.inserted keyword.control.less message.error'}
              },
              end: '(\\?)|(?<=[^[:space:]=][[:space:]])(?=[[:space:]]*+[^\\.])',
              endCaptures: {1: {name: 'storage.type'}},
              patterns: [{include: '#value-expression-atomic-with-paths'}]
            }
          ]
        },
        {include: '#module-item-let-value-bind-name-or-pattern'},
        {include: '#module-item-let-value-bind-params-type'},
        {include: '#module-item-let-value-bind-type'},
        {include: '#module-item-let-value-bind-body'}
      ]
    },
    'module-item-let-value-bind-params-type': {
      begin: '(?=[^[:space:]:=])',
      end: '(?=[;}=]|\\b(class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#module-item-let-value-param'},
        {
          begin: '(?<![:])(:)[[:space:]]*(?![[:space:]]*[:\\)])',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=[;}=]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|val|with)\\b)',
          patterns: [{include: '#type-expression-atomic'}]
        }
      ]
    },
    'module-item-let-value-bind-parens-params': {
      begin: '\\((?![\\)])',
      end: '\\)',
      patterns: [
        {include: '#operator'},
        {include: '#pattern-parens-lhs'},
        {include: '#type-annotation-rhs'},
        {include: '#pattern'}
      ]
    },
    'module-item-let-value-bind-pattern': {
      begin:
        '(?<=[^[:word:]]and|^and|[^[:word:]]external|^external|[^[:word:]]let|^let|[^[:word:]]method|^method|[^[:word:]]rec|^rec)',
      end: '(?=[;:}=]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#module-item-let-value-bind-parens-params'},
        {include: '#pattern'}
      ]
    },
    'module-item-let-value-bind-type': {
      begin: '(?<![:])(:)(?![[:space:]]*[:\\)])',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?==[^>]|[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|val|with)\\b)',
      patterns: [
        {
          begin: '\\b(type)\\b',
          beginCaptures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '([\\.])',
          endCaptures: {1: {name: 'entity.name.function'}},
          patterns: [{include: '#pattern-variable'}]
        },
        {include: '#type-expression'}
      ]
    },
    'module-item-let-value-param': {
      patterns: [
        {include: '#module-item-let-value-param-label'},
        {include: '#module-item-let-value-param-type'},
        {include: '#module-item-let-value-param-module'},
        {include: '#pattern'}
      ]
    },
    'module-item-let-value-param-label': {
      patterns: [
        {
          begin: '(\\b[[:lower:]][[:word:]]*\\b)?[[:space:]]*(::)',
          beginCaptures: {
            1: {
              name: 'markup.inserted constant.language support.property-value entity.name.filename'
            },
            2: {name: 'keyword.control'}
          },
          end: '(?<=[[:space:]])',
          patterns: [
            {include: '#pattern'},
            {
              begin: '(=)',
              beginCaptures: {
                1: {name: 'markup.inserted keyword.control.less message.error'}
              },
              end: '(\\?)|(?<=[^[:space:]=][[:space:]])(?=[[:space:]]*+[^\\.])',
              endCaptures: {1: {name: 'storage.type'}},
              patterns: [{include: '#value-expression-atomic-with-paths'}]
            }
          ]
        }
      ]
    },
    'module-item-let-value-param-module': {
      begin: '\\([[:space:]]*(?=\\b(module)\\b)',
      end: '\\)',
      patterns: [
        {
          begin: '\\b(module)\\b',
          beginCaptures: {1: {name: 'keyword.other message.error'}},
          end: '(?=\\))',
          patterns: [
            {
              match: '\\b[[:upper:]][[:word:]]*\\b',
              name: 'support.class entity.name.class'
            }
          ]
        }
      ]
    },
    'module-item-let-value-param-type': {
      begin: '\\((?=\\b(type)\\b)',
      end: '\\)',
      patterns: [
        {
          begin: '\\b(type)\\b',
          beginCaptures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '(?=\\))',
          patterns: [{include: '#pattern-variable'}]
        }
      ]
    },
    'module-item-let-value-rec': {
      begin: '(?:\\G|^)[[:space:]]*\\b(rec)\\b',
      beginCaptures: {
        1: {name: 'keyword.control storage.modifier message.error'}
      },
      end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#module-item-let-value-bind-name-params-type-body'}]
    },
    'module-item-module': {
      begin: '\\b(module)\\b[[:space:]]*(?!\\b(type)\\b|$)',
      beginCaptures: {1: {name: 'storage.type message.error'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#module-item-let-module-and'},
        {include: '#module-item-let-module-rec'},
        {include: '#module-item-let-module-bind-name-params-type-body'}
      ]
    },
    'module-item-module-type': {
      begin: '\\b(module)\\b[[:space:]]*(?=\\b(type)\\b|$)',
      beginCaptures: {1: {name: 'keyword.control message.error'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {
          begin: '(?:\\G|^)[[:space:]]*\\b(type)\\b',
          beginCaptures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '(?==)',
          patterns: [
            {include: '#comment'},
            {
              captures: {1: {name: 'support.class entity.name.class'}},
              match: '([[:upper:]][[:word:]]*)'
            }
          ]
        },
        {
          begin: '(=)',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?=;)',
          patterns: [{include: '#comment'}, {include: '#signature-expression'}]
        }
      ]
    },
    'module-item-open': {
      begin: '\\b(open)\\b',
      beginCaptures: {1: {name: 'keyword.control.open'}},
      end: '(;)|(?=}|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#comment'}, {include: '#module-path-simple'}]
    },
    'module-item-type': {
      begin: '\\b(type)\\b',
      beginCaptures: {1: {name: 'keyword.other'}},
      end: '(;)|(?=[\\)}]|\\b(class|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#module-item-type-and'},
        {include: '#module-item-type-constraint'},
        {include: '#module-item-type-bind'}
      ]
    },
    'module-item-type-and': {
      begin: '\\b(and)\\b([[:space:]]*type)?',
      beginCaptures: {
        1: {name: 'keyword.other'},
        2: {
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      },
      end: '(?=[;\\)}]|\\b(class|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
      patterns: [{include: '#module-item-type-bind-name-tyvars-body'}]
    },
    'module-item-type-bind': {
      patterns: [
        {include: '#module-item-type-bind-nonrec'},
        {include: '#module-item-type-bind-name-tyvars-body'}
      ]
    },
    'module-item-type-bind-body': {
      begin: '(\\+?=)',
      beginCaptures: {1: {name: 'keyword.control.less'}},
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|rec|type|val|with)\\b)',
      patterns: [{include: '#module-item-type-bind-body-item'}]
    },
    'module-item-type-bind-body-item': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {
              name: 'variable.other.class.js variable.interpolation storage.modifier message.error'
            }
          },
          match: '(=)(?!>)|\\b(private)\\b'
        },
        {
          captures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          match: '\\b([[:upper:]][[:word:]]*)\\b(?![[:space:]]*[\\.\\(])'
        },
        {
          begin: '(\\.\\.)',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)'
        },
        {
          begin: '(\\|)(?![#\\-:!?.@*/&%^+<=>|~$\\\\])[[:space:]]*',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=[;\\)}]|\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\])|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#value-expression-constructor'},
            {
              captures: {
                1: {name: 'keyword.control.less'},
                2: {name: 'keyword.other'}
              },
              match: '([:])|\\b(of)\\b'
            },
            {include: '#type-expression'}
          ]
        },
        {
          captures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            2: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            3: {name: 'keyword.other'}
          },
          match: '(:)|(\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))|\\b(of)\\b'
        },
        {include: '#type-expression'}
      ]
    },
    'module-item-type-bind-name-tyvars': {
      begin: '(?<=\\G|^|\\.)[[:space:]]*\\b([[:lower:]][[:word:]]*)\\b',
      beginCaptures: {1: {name: 'entity.name.function'}},
      end: '(?=\\+?=|[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#attribute'},
        {match: '_', name: 'comment'},
        {
          captures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            2: {name: 'comment'},
            3: {name: 'comment'},
            4: {name: 'variable.parameter string.other.link variable.language'}
          },
          match:
            "([+\\-])?(?:(_)|(')([[:lower:]][[:word:]]*)\\b)(?!\\.[[:upper:]])"
        }
      ]
    },
    'module-item-type-bind-name-tyvars-body': {
      begin: '(?=(\\G|^)[[:space:]]*\\b[[:alpha:]])',
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#module-path-simple-prefix'},
        {include: '#module-item-type-bind-name-tyvars'},
        {include: '#module-item-type-bind-body'}
      ]
    },
    'module-item-type-bind-nonrec': {
      begin: '(?:\\G|^)[[:space:]]*\\b(nonrec)\\b',
      beginCaptures: {
        1: {name: 'keyword.control storage.modifier message.error'}
      },
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#module-item-type-bind-name-tyvars-body'}]
    },
    'module-item-type-constraint': {
      begin: '\\b(constraint)\\b',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation storage.modifier message.error'
        }
      },
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {
          captures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            2: {name: 'comment'},
            3: {name: 'variable.parameter string.other.link variable.language'}
          },
          match: "([+\\-])?(')([_[:lower:]][[:word:]]*)\\b(?!\\.[[:upper:]])"
        },
        {match: '=', name: 'keyword.control.less'},
        {include: '#type-expression'}
      ]
    },
    'module-name-extended': {
      patterns: [
        {include: '#module-name-simple'},
        {
          begin: '([\\(])',
          captures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '([\\)])',
          patterns: [{include: '#module-path-extended'}]
        }
      ]
    },
    'module-name-simple': {
      match: '\\b[[:upper:]][[:word:]]*\\b',
      name: 'support.class entity.name.class'
    },
    'module-path-extended': {
      patterns: [
        {include: '#module-name-extended'},
        {include: '#comment'},
        {
          begin: '([\\.])',
          beginCaptures: {1: {name: 'keyword.control.less'}},
          end: '(?<=[[:word:]\\)])|(?=[^\\.[:upper:]/])',
          patterns: [
            {
              begin: '(?<=[\\.])',
              end: '(?<=[[:word:]\\)])|(?=[^\\.[:upper:]/])',
              patterns: [
                {include: '#comment'},
                {include: '#module-name-extended'}
              ]
            }
          ]
        }
      ]
    },
    'module-path-extended-prefix': {
      begin: '(?=\\b[[:upper:]])',
      end: '([\\.])|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#module-path-extended'}]
    },
    'module-path-simple': {
      patterns: [
        {include: '#module-name-simple'},
        {include: '#comment'},
        {
          begin: '([\\.])',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?<=[[:word:]\\)])|(?=[^\\.[:upper:]/])',
          patterns: [
            {
              begin: '(?<=[\\.])',
              end: '(?<=[[:word:]\\)])|(?=[^\\.[:upper:]/])',
              patterns: [
                {include: '#comment'},
                {include: '#module-name-simple'}
              ]
            }
          ]
        }
      ]
    },
    'module-path-simple-prefix': {
      begin: '(?=\\b[[:upper:]])',
      end: '([\\.])|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#module-path-simple'}]
    },
    'object-item': {
      begin: '\\G|(;)',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?=[;}]|\\b(class|constraint|exception|external|include|let|module|nonrec|open|private|type|val|with)\\b)',
      patterns: [{include: '#class-item-method'}]
    },
    operator: {
      patterns: [{include: '#operator-infix'}, {include: '#operator-prefix'}]
    },
    'operator-infix': {
      patterns: [
        {
          match: ';',
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        },
        {include: '#operator-infix-assign'},
        {include: '#operator-infix-builtin'},
        {include: '#operator-infix-custom'}
      ]
    },
    'operator-infix-assign': {
      match:
        '(?<![#\\-:!?.@*/&%^+<=>|~$\\\\])(=)(?![#\\-:!?.@*/&%^+<=>|~$\\\\])',
      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control.less message.error'
    },
    'operator-infix-builtin': {
      match: ':=',
      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control.less message.error'
    },
    'operator-infix-custom': {
      captures: {
        2: {name: 'punctuation.definition.tag.begin.js'},
        3: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      match:
        '(?:(?<![#\\-:!?.@*/&%^+<=>|~$\\\\])((<>))(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))|([#\\-@*/&%^+<=>$\\\\][#\\-:!?.@*/&%^+<=>|~$\\\\]*|[|][#\\-:!?.@*/&%^+<=>|~$\\\\]+)'
    },
    'operator-infix-custom-hash': {
      match: '#[\\-:!?.@*/&%^+<=>|~$]+',
      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
    },
    'operator-prefix': {
      patterns: [
        {include: '#operator-prefix-bang'},
        {include: '#operator-prefix-label-token'}
      ]
    },
    'operator-prefix-bang': {
      match: '![\\-:!?.@*/&%^+<=>|~$]*',
      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
    },
    'operator-prefix-label-token': {
      match: '[?~][\\-:!?.@*/&%^+<=>|~$]+',
      name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
    },
    pattern: {
      patterns: [
        {include: '#attribute'},
        {include: '#comment'},
        {include: '#pattern-atomic'},
        {
          captures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            2: {name: 'keyword.other'},
            3: {name: 'keyword.control'}
          },
          match:
            '[[:space:]]*+(?:(\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))|\\b(as)\\b|(\\.\\.\\.?))[[:space:]]*+'
        }
      ]
    },
    'pattern-atomic': {
      patterns: [
        {match: '\\b(exception)\\b', name: 'keyword.other'},
        {include: '#value-expression-literal'},
        {include: '#module-path-simple-prefix'},
        {include: '#pattern-list-or-array'},
        {include: '#pattern-record'},
        {include: '#pattern-variable'},
        {include: '#pattern-parens'}
      ]
    },
    'pattern-guard': {
      begin: '\\b(when)\\b',
      beginCaptures: {1: {name: 'keyword.other'}},
      end: '(?==>)',
      patterns: [{include: '#value-expression'}]
    },
    'pattern-list-or-array': {
      begin: '(\\[\\|?)(?![@%])',
      beginCaptures: {
        1: {
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      },
      end: '(\\|?\\])',
      endCaptures: {
        1: {
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      },
      patterns: [
        {include: '#value-expression-literal-list-or-array-separator'},
        {include: '#pattern'}
      ]
    },
    'pattern-parens': {
      begin: '(?=\\()',
      end: '\\)|(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#pattern-parens-lhs'},
        {include: '#type-annotation-rhs'}
      ]
    },
    'pattern-parens-lhs': {
      begin: '\\(|(,)',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?=(?:[,:\\)]))|(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#pattern'}]
    },
    'pattern-record': {
      begin: '{',
      end: '}',
      patterns: [{include: '#comment'}, {include: '#pattern-record-item'}]
    },
    'pattern-record-field': {
      begin: '\\b([_][[:word:]]*)\\b|\\b([[:lower:]][[:word:]]*)\\b',
      beginCaptures: {
        1: {name: 'comment'},
        2: {
          name: 'markup.inserted constant.language support.property-value entity.name.filename'
        }
      },
      end: '(,)|(?=})',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#comment'},
        {
          begin: '\\G(:)',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=[,}])',
          patterns: [{include: '#pattern'}]
        }
      ]
    },
    'pattern-record-item': {
      patterns: [
        {include: '#module-path-simple-prefix'},
        {include: '#pattern-record-field'}
      ]
    },
    'pattern-variable': {
      patterns: [
        {
          captures: {1: {name: 'comment'}},
          match: '\\b(_(?:[[:lower:]][[:word:]]*)?)\\b(?!\\.[[:upper:]])'
        },
        {
          captures: {1: {name: 'variable.language string.other.link'}},
          match: '\\b([[:lower:]][[:word:]]*)\\b(?!\\.[[:upper:]])'
        }
      ]
    },
    'record-path': {
      begin: '\\b[[:lower:]][[:word:]]*\\b',
      end: '(?=[^[:space:]\\.])(?!/\\*)',
      patterns: [{include: '#comment'}, {include: '#record-path-suffix'}]
    },
    'record-path-suffix': {
      begin: '(\\.)',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(\\))|\\b([[:upper:]][[:word:]]*)\\b|\\b([[:lower:]][[:word:]]*)\\b|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|with)\\b)',
      endCaptures: {
        1: {name: 'keyword.control'},
        2: {name: 'support.class entity.name.class'},
        3: {
          name: 'markup.inserted constant.language support.property-value entity.name.filename'
        }
      },
      patterns: [
        {include: '#comment'},
        {
          begin: '([\\(])',
          beginCaptures: {1: {name: 'keyword.control'}},
          end: '(?=[\\)])',
          patterns: [
            {include: '#comment'},
            {
              captures: {
                1: {
                  name: 'markup.inserted constant.language support.property-value entity.name.filename'
                },
                2: {name: 'keyword.other'}
              },
              match: '\\b([[:lower:]][[:word:]]*)\\b(?=[^\\)]*([\\.]))'
            },
            {match: '([\\.])', name: 'keyword.control.less'},
            {
              captures: {
                1: {
                  name: 'variable.parameter string.other.link variable.language'
                }
              },
              match: '\\b([[:lower:]][[:word:]]*)\\b[[:space:]]*'
            },
            {include: '#value-expression'}
          ]
        }
      ]
    },
    'signature-expression': {
      patterns: [
        {
          begin: '(?=\\([[:space:]]*[[:upper:]][[:word:]]*[[:space:]]*:)',
          end: '(?=[;])',
          patterns: [
            {
              begin: '(?=\\()',
              end: '(?=[;]|=>)',
              patterns: [{include: '#module-item-let-module-param'}]
            },
            {
              begin: '(=>)',
              beginCaptures: {
                1: {name: 'markup.inserted keyword.control.less'}
              },
              end: '(?=[;\\(])',
              patterns: [{include: '#structure-expression'}]
            }
          ]
        },
        {
          begin:
            '\\b(module)\\b[[:space:]]*\\b(type)\\b([[:space:]]*\\b(of)\\b)?',
          beginCaptures: {
            1: {
              name: 'markup.inserted keyword.other variable.other.readwrite.instance'
            },
            2: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            },
            3: {
              name: 'markup.inserted keyword.other variable.other.readwrite.instance'
            }
          },
          end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#comment'},
            {include: '#module-path-simple'},
            {
              match: '\\b([[:upper:]][[:word:]]*)\\b',
              name: 'support.class entity.name.class'
            }
          ]
        },
        {include: '#signature-expression-constraints'},
        {include: '#structure-expression'}
      ]
    },
    'signature-expression-constraints': {
      begin: '(?=\\b(with))',
      end: '(?=[;\\)}]|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|val)\\b)',
      patterns: [
        {
          begin: '\\b(and|with)\\b',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation storage.modifier message.error'
            }
          },
          end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|val|with)\\b)',
          patterns: [
            {include: '#comment'},
            {
              begin: '\\b(type)\\b',
              beginCaptures: {
                1: {
                  name: 'entity.other.attribute-name.css constant.language constant.numeric'
                }
              },
              end: '(?=[;\\)}]|\\b(class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|val|with)\\b)',
              patterns: [
                {include: '#module-item-type-and'},
                {include: '#module-item-type-constraint'},
                {include: '#module-item-type-bind'}
              ]
            },
            {
              begin: '(?=\\b(module)\\b)',
              end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|val|with)\\b)',
              patterns: [
                {
                  begin: '\\b(module)\\b',
                  beginCaptures: {
                    1: {
                      name: 'markup.inserted keyword.control storage.type variable.other.readwrite.instance'
                    }
                  },
                  end: '(?=:?=|[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
                  patterns: [
                    {include: '#comment'},
                    {include: '#module-path-simple'},
                    {
                      match: '[[:upper:]][[:word:]]*',
                      name: 'support.class entity.name.class'
                    }
                  ]
                },
                {
                  begin: '(:=)|(=)',
                  beginCaptures: {
                    1: {
                      name: 'markup.inserted keyword.control.less message.error'
                    },
                    2: {name: 'markup.inserted keyword.control.less'}
                  },
                  end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|type|val|with)\\b)',
                  patterns: [{include: '#structure-expression'}]
                }
              ]
            }
          ]
        }
      ]
    },
    'structure-expression': {
      patterns: [
        {include: '#comment'},
        {
          begin: "\\((?=[[:space:]]*(\\b(val)\\b|[^'\\[<[:lower:]]))",
          end: '\\)|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|with)\\b)',
          patterns: [
            {include: '#comment'},
            {include: '#structure-expression-block'},
            {
              begin: '\\b(val)\\b',
              beginCaptures: {1: {name: 'keyword.other'}},
              end: '(?=\\))|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
              patterns: [
                {include: '#comment'},
                {
                  match: '\\b([[:lower:]][[:word:]]*)\\b',
                  name: 'support.class entity.name.class'
                }
              ]
            },
            {include: '#module-path-simple'},
            {
              begin: '(:)',
              beginCaptures: {
                1: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              end: '(?=[\\)])|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val)\\b)',
              patterns: [{include: '#signature-expression'}]
            }
          ]
        },
        {include: '#module-path-simple'},
        {include: '#structure-expression-block'}
      ]
    },
    'structure-expression-block': {
      begin: '{',
      end: '}',
      patterns: [{include: '#structure-expression-block-item'}]
    },
    'structure-expression-block-item': {
      patterns: [
        {include: '#attribute'},
        {include: '#comment'},
        {include: '#module-item-exception'},
        {include: '#module-item-external'},
        {include: '#module-item-include'},
        {include: '#module-item-let'},
        {include: '#module-item-class-type'},
        {include: '#module-item-module-type'},
        {include: '#module-item-module'},
        {include: '#module-item-open'},
        {include: '#module-item-type'}
      ]
    },
    'type-annotation-rhs': {
      begin:
        '(?<![#\\-:!?.@*/&%^+<=>|~$\\\\])([:])(?![#\\-:!?.@*/&%^+<=>|~$\\\\])',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?=\\))|(?=[,;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [{include: '#type-expression'}]
    },
    'type-expression': {
      patterns: [
        {match: '([\\.])', name: 'entity.name.function'},
        {include: '#type-expression-atomic'},
        {include: '#type-expression-arrow'}
      ]
    },
    'type-expression-arrow': {
      match: '=>',
      name: 'markup.inserted keyword.control.less'
    },
    'type-expression-atomic': {
      patterns: [
        {include: '#attribute'},
        {include: '#comment'},
        {include: '#module-path-extended-prefix'},
        {include: '#type-expression-label'},
        {
          match: '\\b(as)\\b',
          name: 'variable.other.class.js variable.interpolation storage.modifier message.error'
        },
        {include: '#type-expression-constructor'},
        {include: '#type-expression-object'},
        {include: '#type-expression-parens'},
        {include: '#type-expression-polymorphic-variant'},
        {include: '#type-expression-record'},
        {include: '#type-expression-variable'}
      ]
    },
    'type-expression-constructor': {
      captures: {1: {name: 'comment'}, 2: {name: 'support.type string.regexp'}},
      match:
        '(_)(?![[:alnum:]])|\\b([_[:lower:]][[:word:]]*)\\b(?!\\.[[:upper:]])'
    },
    'type-expression-label': {
      begin: '\\b([_[:lower:]][[:word:]]*)\\b(::)',
      beginCaptures: {
        1: {
          name: 'markup.inserted constant.language support.property-value entity.name.filename'
        },
        2: {name: 'keyword.control'}
      },
      end: '(?<==>)',
      patterns: [
        {include: '#type-expression'},
        {captures: {1: {name: 'keyword.control.less'}}, match: '(\\?)'}
      ]
    },
    'type-expression-object': {
      begin: '(<)',
      captures: {1: {name: 'entity.name.function'}},
      end: '(>)',
      patterns: [
        {
          begin: '(\\.\\.)',
          beginCaptures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          end: '(?=>)'
        },
        {
          begin: '(?=[_[:lower:]])',
          end: '(,)|(?=>)',
          endCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          patterns: [
            {
              begin: '(?=[_[:lower:]])',
              end: '(?=:)',
              patterns: [
                {
                  captures: {
                    1: {
                      name: 'markup.inserted constant.language support.property-value entity.name.filename'
                    }
                  },
                  match: '\\b([_[:lower:]][[:word:]]*)\\b'
                }
              ]
            },
            {
              begin: '(:)',
              beginCaptures: {
                1: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              end: '(?=[,>])',
              patterns: [{include: '#type-expression'}]
            }
          ]
        }
      ]
    },
    'type-expression-parens': {
      begin: '\\(',
      end: '\\)',
      patterns: [
        {
          begin: '\\b(module)\\b',
          beginCaptures: {1: {name: 'keyword.other message.error'}},
          end: '(?=[\\)])',
          patterns: [
            {include: '#module-path-extended'},
            {include: '#signature-expression-constraints'}
          ]
        },
        {match: ',', name: 'keyword.control.less'},
        {include: '#type-expression'}
      ]
    },
    'type-expression-polymorphic-variant': {
      begin: '(\\[)([<>])?',
      captures: {
        1: {name: 'entity.name.function'},
        2: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(\\])',
      patterns: [
        {
          begin: '(\\|)?(?![#\\-:!?.@*/&%^+<=>|~$\\\\])[[:space:]]*',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=[;)}\\]]|\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\])|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#value-expression-constructor'},
            {
              captures: {
                1: {name: 'keyword.control.less'},
                2: {name: 'keyword.other'},
                3: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              match: '([:])|\\b(of)\\b|([&])'
            },
            {include: '#value-expression-constructor-polymorphic'},
            {include: '#type-expression'}
          ]
        }
      ]
    },
    'type-expression-record': {
      begin: '{',
      end: '}',
      patterns: [{include: '#type-expression-record-item'}]
    },
    'type-expression-record-field': {
      patterns: [
        {
          begin: '\\b(mutable)\\b',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation storage.modifier message.error'
            }
          },
          end: '(?<=[,])|(?=})',
          patterns: [{include: '#type-expression-record-field-sans-modifier'}]
        },
        {include: '#type-expression-record-field-sans-modifier'}
      ]
    },
    'type-expression-record-field-sans-modifier': {
      begin: '\\b([_[:lower:]][[:word:]]*)\\b',
      beginCaptures: {
        1: {
          name: 'markup.inserted constant.language support.property-value entity.name.filename'
        }
      },
      end: '(,)|(?=[,}])',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [
        {include: '#comment'},
        {
          begin: '(:)',
          beginCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          end: '(?=[,}])',
          patterns: [{include: '#type-expression'}]
        }
      ]
    },
    'type-expression-record-item': {
      patterns: [
        {include: '#comment'},
        {include: '#module-path-simple-prefix'},
        {include: '#type-expression-record-field'}
      ]
    },
    'type-expression-variable': {
      captures: {
        1: {name: 'comment'},
        2: {name: 'variable.parameter string.other.link variable.language'}
      },
      match: "(')([_[:lower:]][[:word:]]*)\\b(?!\\.[[:upper:]])"
    },
    'value-expression': {
      patterns: [
        {include: '#attribute'},
        {include: '#comment'},
        {include: '#extension-node'},
        {include: '#jsx'},
        {include: '#operator'},
        {include: '#value-expression-builtin'},
        {include: '#value-expression-if-then-else'},
        {include: '#value-expression-atomic'},
        {include: '#module-path-simple-prefix'},
        {
          match: '[:?]',
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        },
        {include: '#record-path'}
      ]
    },
    'value-expression-atomic': {
      patterns: [
        {include: '#value-expression-literal'},
        {include: '#value-expression-literal-list-or-array'},
        {include: '#value-expression-for'},
        {include: '#value-expression-fun'},
        {include: '#value-expression-block-or-record-or-object'},
        {include: '#value-expression-label'},
        {include: '#value-expression-parens'},
        {include: '#value-expression-switch'},
        {include: '#value-expression-try'},
        {include: '#value-expression-while'}
      ]
    },
    'value-expression-atomic-with-paths': {
      patterns: [
        {include: '#value-expression-atomic'},
        {include: '#module-path-simple-prefix'},
        {include: '#record-path-suffix'}
      ]
    },
    'value-expression-block': {
      begin: '{',
      end: '}',
      patterns: [{include: '#value-expression-block-item'}]
    },
    'value-expression-block-item': {
      patterns: [
        {include: '#module-item-let'},
        {include: '#module-item-open'},
        {include: '#value-expression'}
      ]
    },
    'value-expression-block-look': {
      begin:
        '(?![[:space:]]*($|\\.\\.\\.|([[:upper:]][[:word:]]*\\.)*([[:lower:]][[:word:]]*)[[:space:]]*(?:,|:(?![=]))))',
      end: '(?=})',
      patterns: [{include: '#value-expression-block-item'}]
    },
    'value-expression-block-or-record-or-object': {
      begin: '{',
      end: '}',
      patterns: [
        {include: '#comment'},
        {include: '#module-path-simple-prefix'},
        {include: '#value-expression-object-look'},
        {include: '#value-expression-record-look'},
        {include: '#value-expression-block-look'}
      ]
    },
    'value-expression-builtin': {
      captures: {
        1: {name: 'keyword.control message.error'},
        2: {name: 'keyword.control.trycatch'}
      },
      match:
        '\\b(assert|decr|failwith|fprintf|ignore|incr|land|lazy|lor|lsl|lsr|lxor|mod|new|not|printf|ref)\\b|\\b(raise)\\b'
    },
    'value-expression-constructor': {
      captures: {
        1: {
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      },
      match: '\\b([[:upper:]][[:word:]]*)\\b(?![[:space:]]*[\\.])'
    },
    'value-expression-constructor-polymorphic': {
      captures: {
        1: {
          name: 'constant.other.symbol keyword.control.less variable.parameter'
        },
        2: {
          name: 'entity.other.attribute-name.css constant.language constant.numeric'
        }
      },
      match: '(`)([[:alpha:]][[:word:]]*)\\b(?!\\.)'
    },
    'value-expression-for': {
      begin: '(?=\\b(for)\\b)',
      end: '(?<=})|(?=[;]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#value-expression-for-head'},
        {include: '#value-expression-block'}
      ]
    },
    'value-expression-for-head': {
      begin: '(?=\\b(for)\\b)',
      end: '(?={)|(?=[;]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {
          begin: '\\b(for)\\b',
          beginCaptures: {1: {name: 'keyword.control.loop'}},
          end: '(?=\\b(in)\\b)|(?=[;]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [{include: '#comment'}, {include: '#pattern-variable'}]
        },
        {
          begin: '\\b(in)\\b',
          beginCaptures: {1: {name: 'keyword.control.loop'}},
          end: '(?=\\b(to)\\b)|(?=[;]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#comment'},
            {include: '#value-expression-atomic-with-paths'}
          ]
        },
        {
          begin: '\\b(to)\\b',
          beginCaptures: {1: {name: 'keyword.control.loop'}},
          end: '(?={)|(?=[;]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
          patterns: [
            {include: '#comment'},
            {include: '#value-expression-atomic-with-paths'}
          ]
        },
        {include: '#value-expression-block'}
      ]
    },
    'value-expression-fun': {
      begin: '\\b(fun)\\b',
      beginCaptures: {1: {name: 'keyword.control'}},
      end: '(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#value-expression-fun-pattern-match-rule-lhs'},
        {include: '#value-expression-fun-pattern-match-rule-rhs'}
      ]
    },
    'value-expression-fun-pattern-match-rule-lhs': {
      applyEndPatternLast: true,
      begin: '(?=\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))|(?<=fun)',
      beginCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))|(?==>)|(?=[;\\)}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      endCaptures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      patterns: [{include: '#module-item-let-value-param'}]
    },
    'value-expression-fun-pattern-match-rule-rhs': {
      begin: '(=>)',
      beginCaptures: {1: {name: 'keyword.control.less'}},
      end: '(?=[;\\)}]|\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\])|\\b(and)\\b)',
      patterns: [{include: '#value-expression'}]
    },
    'value-expression-if-then-else': {
      applyEndPatternLast: true,
      begin: '\\b(if)\\b',
      beginCaptures: {1: {name: 'keyword.control.conditional'}},
      end: '(?=[;\\)\\]}])',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\b(else)\\b',
          beginCaptures: {1: {name: 'keyword.control.conditional'}},
          end: '(?=[;\\)\\]}])',
          patterns: [{include: '#value-expression'}]
        },
        {include: '#value-expression-atomic-with-paths'}
      ]
    },
    'value-expression-label': {
      begin: '\\b([_[:lower:]][[:word:]]*)\\b[[:space:]]*(::)(\\?)?',
      beginCaptures: {
        1: {
          name: 'markup.inserted constant.language support.property-value entity.name.filename'
        },
        2: {name: 'keyword.control'},
        3: {name: 'storage.type'}
      },
      end: '(?![[:space:]])',
      patterns: [{include: '#value-expression'}]
    },
    'value-expression-lazy': {
      captures: {1: {name: 'keyword.other'}},
      match: '\\b(lazy)\\b'
    },
    'value-expression-literal': {
      patterns: [
        {include: '#value-expression-literal-boolean'},
        {include: '#value-expression-literal-character'},
        {include: '#value-expression-constructor'},
        {include: '#value-expression-constructor-polymorphic'},
        {include: '#value-expression-lazy'},
        {include: '#value-expression-literal-numeric'},
        {include: '#value-expression-literal-string'},
        {include: '#value-expression-literal-unit'}
      ]
    },
    'value-expression-literal-boolean': {
      match: '\\b(false|true)\\b',
      name: 'entity.other.attribute-name.css constant.language constant.numeric'
    },
    'value-expression-literal-character': {
      match:
        "(')([[:space:]]|[[:graph:]]|\\\\[\\\\\"'ntbr]|\\\\[[:digit:]][[:digit:]][[:digit:]]|\\\\x[[:xdigit:]][[:xdigit:]]|\\\\o[0-3][0-7][0-7])(')",
      name: 'constant.character'
    },
    'value-expression-literal-list-or-array': {
      begin: '(\\[\\|?)(?![@%])',
      beginCaptures: {1: {name: 'constant.language.list'}},
      end: '(\\|?\\])',
      endCaptures: {1: {name: 'constant.language.list'}},
      patterns: [
        {include: '#value-expression-literal-list-or-array-separator'},
        {include: '#value-expression'},
        {include: '#value-expression-literal-list-or-array'}
      ]
    },
    'value-expression-literal-list-or-array-separator': {
      captures: {
        1: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        },
        2: {name: 'keyword.control'}
      },
      match: '(,)|(\\.\\.\\.)'
    },
    'value-expression-literal-numeric': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {name: 'constant.numeric'},
            3: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            4: {name: 'constant.numeric'},
            5: {name: 'keyword.control.less'},
            6: {name: 'keyword.control.less'},
            7: {name: 'constant.numeric'}
          },
          match:
            '([-])?([[:digit:]][_[:digit:]]*)(?:(\\.)([_[:digit:]]*))?(?:([eE])([\\-\\+])?([[:digit:]][_[:digit:]]*))?(?![bBoOxX])'
        },
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {name: 'keyword.control.less'},
            3: {name: 'constant.numeric'},
            4: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            },
            5: {name: 'constant.numeric'},
            6: {name: 'keyword.control.less'},
            7: {name: 'keyword.control.less'},
            8: {name: 'constant.numeric'}
          },
          match:
            '([-])?(0[xX])([[:xdigit:]][_[:xdigit:]]*)(?:(\\.)([_[:xdigit:]]*))?(?:([pP])([\\-\\+])?([[:digit:]][_[:digit:]]*))?'
        },
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {name: 'keyword.control.less'},
            3: {name: 'constant.numeric'}
          },
          match: '([-])?(0[oO])([0-7][_0-7]*)'
        },
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {name: 'keyword.control.less'},
            3: {name: 'constant.numeric'}
          },
          match: '([-])?(0[bB])([0-1][_0-1]*)'
        }
      ]
    },
    'value-expression-literal-string': {
      patterns: [
        {
          begin: '(?<![[:alpha:]])js_expr(?!=[[:word:]])',
          end: '(?<=")|(\\|)([_[:lower:]]*)?(})|(?=[^[:space:]"{])',
          endCaptures: {
            1: {name: 'keyword.control.flow message.error'},
            2: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            },
            3: {name: 'keyword.control.flow message.error'}
          },
          patterns: [
            {
              begin: '({)([_[:lower:]]*)?(\\|)',
              beginCaptures: {
                1: {name: 'keyword.control.flow message.error'},
                2: {
                  name: 'entity.other.attribute-name.css constant.language constant.numeric'
                },
                3: {name: 'keyword.control.flow message.error'}
              },
              end: '(?=\\|\\2})',
              patterns: [{include: 'source.js'}]
            },
            {begin: '"', end: '"', patterns: [{include: 'source.js'}]}
          ]
        },
        {
          begin: '({)([_[:lower:]]*)?(\\|)',
          beginCaptures: {
            1: {name: 'keyword.control.flow message.error'},
            2: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            },
            3: {name: 'keyword.control.flow message.error'}
          },
          end: '(\\|)(\\2)(})',
          endCaptures: {
            1: {name: 'keyword.control.flow message.error'},
            2: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            },
            3: {name: 'keyword.control.flow message.error'}
          },
          name: 'string.double string.regexp'
        },
        {
          begin: '"',
          end: '"',
          name: 'string.double string.regexp',
          patterns: [{include: '#value-expression-literal-string-escape'}]
        }
      ]
    },
    'value-expression-literal-string-escape': {
      patterns: [
        {
          match:
            '\\\\[\\\\"\'ntbr ]|\\\\[[:digit:]][[:digit:]][[:digit:]]|\\\\x[[:xdigit:]][[:xdigit:]]|\\\\o[0-3][0-7][0-7]',
          name: 'constant.character'
        },
        {
          captures: {
            1: {name: 'keyword.control.less'},
            2: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            }
          },
          match: '(@)([ \\[\\],.]|\\\\n)'
        },
        {
          captures: {
            1: {
              name: 'entity.other.attribute-name.css constant.language constant.numeric'
            },
            2: {
              name: 'variable.other.readwrite.instance string.other.link variable.language'
            }
          },
          match: '(%)([ads])?'
        }
      ]
    },
    'value-expression-literal-unit': {
      match: '\\(\\)',
      name: 'constant.language.unit'
    },
    'value-expression-object-look': {
      begin: '(?:\\G|^)[[:space:]]*(?=method)',
      end: '(?=})',
      patterns: [{include: '#object-item'}]
    },
    'value-expression-parens': {
      begin: '(?=\\()',
      end: '(\\))|(?=[;}]|\\b(and|class|constraint|exception|external|include|inherit|let|method|module|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#condition-lhs'},
        {include: '#value-expression-parens-lhs'},
        {include: '#type-annotation-rhs'}
      ]
    },
    'value-expression-parens-lhs': {
      begin: '(\\()|(,)',
      beginCaptures: {
        2: {
          name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
        }
      },
      end: '(?=[?,:\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {
          begin: '\\b(module)\\b',
          beginCaptures: {1: {name: 'keyword.other message.error'}},
          end: '(?=\\))',
          patterns: [{include: '#module-path-simple'}]
        },
        {include: '#value-expression'}
      ]
    },
    'value-expression-record-field': {
      patterns: [
        {
          begin: '(\\.\\.\\.)',
          beginCaptures: {1: {name: 'keyword.control'}},
          end: '(,)|(?=})',
          endCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          patterns: [
            {include: '#comment'},
            {include: '#module-path-simple-prefix'},
            {
              begin: '(?=[\\.])',
              end: '(?=[:,])',
              patterns: [
                {
                  match: '\\b[[:lower:]][[:word:]]*\\b',
                  name: 'markup.inserted constant.language support.property-value entity.name.filename'
                }
              ]
            },
            {
              begin: '(:)',
              beginCaptures: {
                1: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              end: '(?=[,}])',
              patterns: [{include: '#value-expression'}]
            }
          ]
        },
        {
          begin: '\\b[[:upper:]][[:word:]]*\\b',
          beginCaptures: {1: {name: 'support.class entity.name.class'}},
          end: '(,)|(?=})',
          endCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          patterns: [
            {include: '#module-path-simple-prefix'},
            {
              begin: '(:)',
              beginCaptures: {
                1: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              end: '(?=[,}])',
              patterns: [{include: '#value-expression'}]
            }
          ]
        },
        {
          begin: '\\b([[:lower:]][[:word:]]*)\\b',
          beginCaptures: {
            1: {
              name: 'markup.inserted constant.language support.property-value entity.name.filename'
            }
          },
          end: '(,)|(?=})',
          endCaptures: {
            1: {
              name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
            }
          },
          patterns: [
            {
              begin: '(:)',
              beginCaptures: {
                1: {
                  name: 'variable.other.class.js variable.interpolation keyword.operator keyword.control message.error'
                }
              },
              end: '(?=[,}])',
              patterns: [{include: '#value-expression'}]
            }
          ]
        }
      ]
    },
    'value-expression-record-item': {
      patterns: [
        {include: '#comment'},
        {include: '#module-path-simple-prefix'},
        {include: '#value-expression-record-field'}
      ]
    },
    'value-expression-record-look': {
      begin:
        '(?=\\.\\.\\.|([[:upper:]][[:word:]]*\\.)*([[:lower:]][[:word:]]*)[[:space:]]*[,:}])',
      end: '(?=})',
      patterns: [{include: '#value-expression-record-item'}]
    },
    'value-expression-switch': {
      begin: '\\b(switch)\\b',
      beginCaptures: {1: {name: 'keyword.control.switch'}},
      end: '(?<=})',
      patterns: [
        {include: '#value-expression-switch-head'},
        {include: '#value-expression-switch-body'}
      ]
    },
    'value-expression-switch-body': {
      begin: '{',
      end: '}',
      patterns: [
        {include: '#comment'},
        {include: '#value-expression-switch-pattern-match-rule'}
      ]
    },
    'value-expression-switch-head': {
      begin: '(?<=switch)',
      end: '(?<!switch)(?={)|(?=[;\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\G[[:space:]]*+{',
          end: '}[[:space:]]*+',
          patterns: [{include: '#value-expression-block-item'}]
        },
        {include: '#value-expression-atomic-with-paths'}
      ]
    },
    'value-expression-switch-pattern-match-rule': {
      patterns: [
        {include: '#value-expression-switch-pattern-match-rule-lhs'},
        {include: '#value-expression-switch-pattern-match-rule-rhs'}
      ]
    },
    'value-expression-switch-pattern-match-rule-lhs': {
      begin: '(?=\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))',
      end: '(?==>|[;\\)}])',
      patterns: [{include: '#pattern-guard'}, {include: '#pattern'}]
    },
    'value-expression-switch-pattern-match-rule-rhs': {
      begin: '(=>)',
      beginCaptures: {1: {name: 'keyword.control.less'}},
      end: '(?=}|\\|(?![#\\-:!?.@*/&%^+<=>|~$\\\\]))',
      patterns: [{include: '#value-expression-block-item'}]
    },
    'value-expression-try': {
      begin: '\\b(try)\\b',
      beginCaptures: {1: {name: 'keyword.control.trycatch'}},
      end: '(?<=})|(?=[;\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#value-expression-try-head'},
        {include: '#value-expression-switch-body'}
      ]
    },
    'value-expression-try-head': {
      begin: '(?<=try)',
      beginCaptures: {1: {name: 'keyword.control'}},
      end: '(?<!try)(?={)|(?=[;\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\G[[:space:]]*+{',
          end: '}[[:space:]]*+',
          patterns: [{include: '#value-expression-block-item'}]
        },
        {include: '#value-expression-atomic-with-paths'}
      ]
    },
    'value-expression-while': {
      begin: '\\b(while)\\b',
      beginCaptures: {1: {name: 'keyword.control.loop'}},
      end: '(?<=})|(?=[;\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#value-expression-while-head'},
        {include: '#value-expression-block'}
      ]
    },
    'value-expression-while-head': {
      begin: '(?<=while)[[:space:]]*+',
      end: '(?={)|(?=[;\\)]|\\b(and|as|class|constraint|exception|external|include|inherit|let|method|nonrec|open|private|rec|type|val|with)\\b)',
      patterns: [
        {include: '#comment'},
        {include: '#value-expression-atomic-with-paths'}
      ]
    }
  },
  scopeName: 'source.reason'
}

export default grammar
