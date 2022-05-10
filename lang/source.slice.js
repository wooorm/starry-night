// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zeroc-ice/vscode-slice>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.ice'],
  names: ['slice'],
  patterns: [
    {include: '#comment'},
    {include: '#preprocessor'},
    {include: '#metadata.global'},
    {include: '#storage.module'}
  ],
  repository: {
    annotation: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.annotation.slice'}},
          match: '(@)\\S*\\b',
          name: 'storage.type.annotation.slice'
        }
      ]
    },
    comment: {
      patterns: [{include: '#comment.line'}, {include: '#comment.block'}]
    },
    'comment.block': {
      patterns: [
        {
          begin: '\\/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.block.begin.slice'}
          },
          contentName: 'text.slice',
          end: '\\*\\/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.block.end.slice'}
          },
          name: 'comment.block.slice',
          patterns: [
            {include: '#annotation'},
            {include: '#link'},
            {include: '#line.continuation'}
          ]
        }
      ]
    },
    'comment.line': {
      patterns: [
        {
          begin: '\\/\\/',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.line.begin.slice'}
          },
          contentName: 'text.slice',
          end: '$',
          name: 'comment.line.slice',
          patterns: [
            {include: '#annotation'},
            {include: '#link'},
            {include: '#line.continuation'}
          ]
        }
      ]
    },
    constant: {
      patterns: [
        {include: '#constant.boolean'},
        {include: '#constant.string'},
        {include: '#constant.numeric.float'},
        {include: '#constant.numeric.hex'},
        {include: '#constant.numeric.oct'},
        {include: '#constant.numeric.dec'}
      ]
    },
    'constant.boolean': {
      patterns: [
        {
          captures: {
            0: {name: 'constant.langauge.slice'},
            1: {name: 'constant.boolean.true.slice'},
            2: {name: 'constant.boolean.false.slice'}
          },
          match: '\\b(?:(true)|(false))\\b'
        }
      ]
    },
    'constant.numeric.dec': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.numeric.sign.slice'}},
          match: '(-|\\+)?\\b(?:0|[1-9]\\d*)\\b',
          name: 'constant.numeric.integer.slice'
        }
      ]
    },
    'constant.numeric.float': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.numeric.sign.slice'},
            2: {name: 'punctuation.separator.decimal.slice'},
            3: {name: 'punctuation.separator.decimal.slice'},
            4: {name: 'punctuation.numeric.exponent.slice'},
            5: {name: 'punctuation.definition.float.slice'}
          },
          match:
            '(-|\\+)?(?:\\d+(\\.)\\d*|\\d*(\\.)\\d+|\\d+(?=e|E|f|F))(?:(e|E)-?\\d+)?(f|F)?',
          name: 'constant.numeric.float.slice'
        }
      ]
    },
    'constant.numeric.hex': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.numeric.sign.slice'},
            2: {name: 'punctuation.definition.numeric.hex.slice'}
          },
          match: '(-|\\+)?\\b(0x)[\\da-fA-F]+\\b',
          name: 'constant.numeric.hex.slice'
        }
      ]
    },
    'constant.numeric.oct': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.numeric.sign.slice'},
            2: {name: 'punctuation.definition.numeric.oct.slice'},
            3: {patterns: [{match: '[8-9]', name: 'invalid.illegal.oct.slice'}]}
          },
          match: '(-|\\+)?\\b(0)(\\d+)\\b',
          name: 'constant.numeric.octal.slice'
        }
      ]
    },
    'constant.string': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.slice'}
          },
          end: '(")|$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.slice'},
            2: {name: 'invalid.illegal.mismatched-quotes.slice'}
          },
          name: 'string.quoted.double.slice',
          patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
        }
      ]
    },
    invalid: {patterns: [{match: '\\S', name: 'invalid.illegal'}]},
    'line.continuation': {
      patterns: [
        {
          begin: '(\\\\)\\s*$',
          beginCaptures: {
            1: {name: 'punctuation.separator.continuation.backslash.slice'}
          },
          end: '^'
        }
      ]
    },
    link: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.link.slice'}},
          match: '(\\b\\S*)?(#)\\S*\\b',
          name: 'variable.link.slice'
        }
      ]
    },
    metadata: {
      patterns: [{include: '#metadata.global'}, {include: '#metadata.local'}]
    },
    'metadata.content': {
      patterns: [
        {include: '#standard'},
        {
          begin: '(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.slice'},
            1: {name: 'punctuation.definition.string.begin.slice'}
          },
          end: '(?=\\])|(?<=,)',
          patterns: [
            {include: '#line.continuation'},
            {
              captures: {1: {patterns: [{include: '#metadata.identifier'}]}},
              match: '((?:[^\\\\"]|\\\\.)+)',
              name: 'string.quoted.double.slice'
            },
            {
              begin: '(")',
              beginCaptures: {
                0: {name: 'string.quoted.double.slice'},
                1: {name: 'punctuation.definition.string.end.slice'}
              },
              end: '(?=\\])|(,)',
              endCaptures: {1: {name: 'punctuation.separator.metadata.slice'}},
              patterns: [{include: '#standard'}]
            }
          ]
        },
        {
          end: '(?=\\])',
          patterns: [
            {include: '#line.continuation'},
            {
              captures: {1: {patterns: [{include: '#metadata.identifier'}]}},
              match: '((?:[^\\\\"\\]]|\\\\.)+)',
              name: 'string.unquoted.slice'
            },
            {
              match: '"',
              name: 'invalid.illegal.punctuation.definition.string.slice'
            }
          ]
        }
      ]
    },
    'metadata.global': {
      patterns: [
        {
          begin: '\\[\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.metadata.global.begin.slice'}
          },
          end: '\\]\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.metadata.global.end.slice'}
          },
          name: 'meta.metadata.global.slice',
          patterns: [{include: '#metadata.content'}]
        }
      ]
    },
    'metadata.identifier': {
      patterns: [{match: '\\S+', name: 'entity.metadata.directive.slice'}]
    },
    'metadata.local': {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.metadata.local.begin.slice'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.metadata.local.end.slice'}
          },
          name: 'meta.metadata.local.slice',
          patterns: [{include: '#metadata.content'}]
        }
      ]
    },
    preprocessor: {
      patterns: [
        {include: '#preprocessor.if'},
        {include: '#preprocessor.ifdef'},
        {include: '#preprocessor.ifndef'},
        {include: '#preprocessor.elif'},
        {include: '#preprocessor.else'},
        {include: '#preprocessor.endif'},
        {include: '#preprocessor.define'},
        {include: '#preprocessor.undef'},
        {include: '#preprocessor.include'},
        {include: '#preprocessor.pragma'},
        {include: '#preprocessor.line'},
        {include: '#preprocessor.error'},
        {include: '#preprocessor.null'}
      ]
    },
    'preprocessor.define': {
      patterns: [
        {
          begin: '(#)\\s*define\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.define.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.define.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b(\\w+)((\\())',
              beginCaptures: {
                1: {patterns: [{include: '#preprocessor.identifier'}]},
                2: {name: 'meta.group.parameters.preprocessor.slice'},
                3: {name: 'punctuation.section.group.parameters.begin.slice'}
              },
              end: '$',
              patterns: [
                {include: '#standardP'},
                {
                  begin: '\\b\\w+\\b',
                  beginCaptures: {
                    0: {patterns: [{include: '#preprocessor.identifier'}]}
                  },
                  end: '(?=\\))|(,)|($)',
                  endCaptures: {
                    1: {
                      name: 'punctuation.separator.parameter.preprocessor.slice'
                    },
                    2: {name: 'invalid.mismatched.parenthesis.slice'}
                  },
                  patterns: [{include: '#standardP'}]
                },
                {
                  begin: '\\b\\w+\\b',
                  beginCaptures: {
                    0: {
                      name: 'punctuation.variable.parameter.preprocessor.slice'
                    }
                  },
                  end: '(?=\\))|((,))|($)',
                  endCaptures: {
                    1: {
                      name: 'punctuation.separator.parameter.preprocessor.slice'
                    },
                    2: {name: 'invalid.trailing-comma.slice'},
                    3: {name: 'invalid.mismatched.parenthesis.slice'}
                  },
                  patterns: [{include: '#standardP'}]
                },
                {
                  begin: '(\\))',
                  beginCaptures: {
                    0: {name: 'meta.group.parameters.preprocessor.slice'},
                    1: {name: 'punctuation.section.group.parameters.end.slice'}
                  },
                  end: '$',
                  patterns: [
                    {include: '#standardP'},
                    {match: '\\S', name: 'constant.preprocessor.slice'}
                  ]
                }
              ]
            },
            {
              begin: '\\b\\w+\\b',
              beginCaptures: {
                0: {patterns: [{include: '#preprocessor.identifier'}]}
              },
              end: '$',
              patterns: [
                {include: '#standardP'},
                {match: '\\S', name: 'constant.preprocessor.slice'}
              ]
            }
          ]
        }
      ]
    },
    'preprocessor.elif': {
      patterns: [
        {
          begin: '(#)\\s*elif\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.elif.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.elif.slice',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.else': {
      patterns: [
        {
          begin: '(#)\\s*else\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.else.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.endif.slice',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.endif': {
      patterns: [
        {
          begin: '(#)\\s*endif\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.endif.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.endif.slice',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.error': {
      patterns: [
        {
          begin: '((#)\\s*error)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.preprocessor.error.slice'},
            2: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.error.slice',
          patterns: [
            {include: '#standardP'},
            {match: '.', name: 'text.error.slice'}
          ]
        }
      ]
    },
    'preprocessor.identifier': {
      patterns: [
        {
          match: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\b',
          name: 'entity.identifier.preproprocessor.slice'
        },
        {include: '#invalid'}
      ]
    },
    'preprocessor.if': {
      patterns: [
        {
          begin: '(#)\\s*if\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.if.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.if.slice',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.ifdef': {
      patterns: [
        {
          begin: '(#)\\s*ifdef\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.ifdef.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.ifdef.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b\\w+\\b',
              beginCaptures: {
                0: {patterns: [{include: '#preprocessor.identifier'}]}
              },
              end: '$',
              patterns: [{include: '#standardP'}]
            }
          ]
        }
      ]
    },
    'preprocessor.ifndef': {
      patterns: [
        {
          begin: '(#)\\s*ifndef\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.ifndef.slice'},
            1: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.ifndef.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b\\w+\\b',
              beginCaptures: {
                0: {patterns: [{include: '#preprocessor.identifier'}]}
              },
              end: '$',
              patterns: [{include: '#standardP'}]
            }
          ]
        }
      ]
    },
    'preprocessor.include': {
      patterns: [
        {
          begin: '((#)\\s*include)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.preprocessor.include.slice'},
            2: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.include.slice',
          patterns: [
            {include: '#standardP'},
            {begin: '(?<="|>)', end: '$', patterns: [{include: '#standardP'}]},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.slice'}
              },
              contentName: 'entity.name.header.slice',
              end: '(")|($)',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.slice'},
                2: {name: 'invalid.illegal.mismatched-quotes.slice'}
              },
              name: 'string.quoted.double.slice',
              patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
            },
            {
              begin: '<',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.slice'}
              },
              contentName: 'entity.name.header.slice',
              end: '(>)|($)',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.slice'},
                2: {name: 'invalid.illegal.mismatched-quotes.slice'}
              },
              name: 'string.quoted.other.angle.slice',
              patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
            }
          ]
        }
      ]
    },
    'preprocessor.line': {
      patterns: [
        {
          begin: '((#)\\s*line)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.preprocessor.line.slice'},
            2: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.line.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b[\\d]+\\b',
              beginCaptures: {
                0: {patterns: [{include: '#constant.numeric.dec'}]}
              },
              end: '$',
              patterns: [
                {include: '#standardP'},
                {
                  begin: '(?<=")',
                  end: '$',
                  patterns: [{include: '#standardP'}]
                },
                {
                  begin: '"',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.string.begin.slice'}
                  },
                  contentName: 'entity.name.file.slice',
                  end: '(")|($)',
                  endCaptures: {
                    1: {name: 'punctuation.definition.string.end.slice'},
                    2: {name: 'invalid.illegal.mismatched-quotes.slice'}
                  },
                  name: 'string.quoted.double.slice',
                  patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
                }
              ]
            }
          ]
        }
      ]
    },
    'preprocessor.null': {
      patterns: [
        {
          begin: '(#)',
          beginCaptures: {
            0: {name: 'punctuation.definition.preprocessor.slice'},
            1: {name: 'keyword.control.preprocessor.null.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.null.slice',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.pragma': {
      patterns: [
        {
          begin: '((#)\\s*pragma)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.preprocessor.pragma.slice'},
            2: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.pragma.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b\\S+\\b',
              beginCaptures: {
                0: {name: 'keyword.control.preprocessor.pragma.other.slice'}
              },
              end: '$',
              patterns: [{include: '#standardP'}]
            }
          ]
        }
      ]
    },
    'preprocessor.undef': {
      patterns: [
        {
          begin: '((#)\\s*undef)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.preprocessor.undef.slice'},
            2: {name: 'punctuation.definition.preprocessor.slice'}
          },
          end: '$',
          name: 'meta.preprocessor.undef.slice',
          patterns: [
            {include: '#standardP'},
            {
              begin: '\\b\\w+\\b',
              beginCaptures: {
                0: {patterns: [{include: '#preprocessor.identifier'}]}
              },
              end: '$',
              patterns: [{include: '#standardP'}]
            }
          ]
        }
      ]
    },
    standard: {
      patterns: [
        {include: '#comment'},
        {include: '#preprocessor'},
        {include: '#line.continuation'}
      ]
    },
    standardP: {
      patterns: [{include: '#comment'}, {include: '#line.continuation'}]
    },
    storage: {
      patterns: [
        {include: '#storage.module'},
        {include: '#storage.enum'},
        {include: '#storage.struct'},
        {include: '#storage.sequence'},
        {include: '#storage.dictionary'},
        {include: '#storage.interface'},
        {include: '#storage.exception'},
        {include: '#storage.class'},
        {include: '#storage.basic'}
      ]
    },
    'storage.basic': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '\\\\?\\bbool\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.bool.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.bool.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bbyte\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.byte.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.byte.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bshort\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.short.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.short.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bushort\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.ushort.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.ushort.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bint\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.int.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.int.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\buint\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.uint.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.uint.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bvarint\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.varint.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.varint.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bvaruint\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.varuint.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.varuint.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\blong\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.long.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.long.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bulong\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.ulong.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.ulong.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bvarlong\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.varlong.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.varlong.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bvarulong\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.varulong.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.varulong.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bfloat\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.float.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.float.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bdouble\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.double.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.double.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bstring\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.string.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.string.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\b[:\\w]+\\b\\s*\\??',
          beginCaptures: {0: {patterns: [{include: '#storage.types.custom'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.type.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        }
      ]
    },
    'storage.basic.assignment': {
      patterns: [
        {include: '#standard'},
        {
          begin: '=',
          beginCaptures: {0: {name: 'keyword.operator.assignment.slice'}},
          end: '(?=;|})',
          patterns: [{include: '#standard'}, {include: '#constant'}]
        }
      ]
    },
    'storage.class': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bclass\\b',
          beginCaptures: {0: {name: 'storage.type.class.slice'}},
          end: '(})|(;)',
          endCaptures: {
            1: {name: 'punctuation.section.block.end.slice'},
            2: {name: 'punctuation.terminator.semicolon.slice'}
          },
          name: 'meta.class.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.class.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=}|;)',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)(?:(\\bextends\\b)|(:))',
                  beginCaptures: {
                    1: {name: 'storage.modifier.extends.slice'},
                    2: {name: 'punctuation.storage.modifier.extends.slice'}
                  },
                  end: '(?=})|((?=;))',
                  endCaptures: {
                    1: {name: 'invalid.illegal.missing-brace.slice'}
                  },
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\\\?[:\\w]+',
                      beginCaptures: {
                        0: {patterns: [{include: '#storage.types'}]}
                      },
                      end: '(?=}|;)',
                      patterns: [
                        {include: '#standard'},
                        {include: '#storage.class.implements'}
                      ]
                    },
                    {
                      include: '#storage.class.implements',
                      name: 'invalid.illegal.missing-types.slice'
                    }
                  ]
                },
                {include: '#storage.class.implements'}
              ]
            }
          ]
        }
      ]
    },
    'storage.class.body': {
      patterns: [
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.slice'}},
          end: '(?=})',
          patterns: [{include: '#standard'}, {include: '#storage.basic'}]
        }
      ]
    },
    'storage.class.implements': {
      patterns: [
        {
          begin: '(?<!\\\\)\\bimplements\\b',
          beginCaptures: {0: {name: 'storage.modifier.implements.slice'}},
          end: '(?=})|((?=;))',
          endCaptures: {1: {name: 'invalid.illegal.missing-brace.slice'}},
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?[:\\w]+',
              beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
              end: '(?={|}|;)|(,)',
              endCaptures: {
                1: {name: 'punctuation.separator.class.implements.slice'}
              },
              patterns: [{include: '#standard'}]
            },
            {include: '#storage.class.body'}
          ]
        },
        {include: '#storage.class.body'}
      ]
    },
    'storage.dictionary': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bdictionary\\b',
          beginCaptures: {0: {name: 'storage.type.dictionary.slice'}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.dictionary.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '(\\<)',
              beginCaptures: {
                0: {name: 'meta.generic.dictionary.slice'},
                1: {name: 'punctuation.definition.generic.begin.slice'}
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(\\\\?[:\\w]+)|(?=\\>)',
                  beginCaptures: {
                    1: {
                      name: 'meta.generic.dictionary.slice',
                      patterns: [{include: '#storage.types'}]
                    },
                    2: {name: 'invalid.illegal.missing-type.slice'}
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(,)|(?=\\>)',
                      beginCaptures: {
                        0: {name: 'meta.generic.dictionary.slice'},
                        1: {name: 'punctuation.separator.dictionary.slice'},
                        2: {name: 'invalid.illegal.missing-type.slice'}
                      },
                      end: '(?=;|{|})',
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '(\\\\?[:\\w]+)|(?=\\>)',
                          beginCaptures: {
                            1: {
                              name: 'meta.generic.dictionary.slice',
                              patterns: [{include: '#storage.types'}]
                            },
                            2: {name: 'invalid.illegal.missing-type.slice'}
                          },
                          end: '(?=;|})',
                          patterns: [
                            {include: '#standard'},
                            {
                              begin: '(\\>)',
                              beginCaptures: {
                                0: {name: 'meta.generic.dictionary.slice'},
                                1: {
                                  name: 'punctuation.definition.generic.end.slice'
                                }
                              },
                              end: '(?=;|})',
                              patterns: [
                                {include: '#standard'},
                                {
                                  begin: '\\\\?\\b\\w+\\b',
                                  beginCaptures: {
                                    0: {
                                      name: 'entity.name.dictionary.slice',
                                      patterns: [
                                        {include: '#storage.identifier'}
                                      ]
                                    }
                                  },
                                  end: '(?=;|})'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.enum': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\benum\\b',
          beginCaptures: {0: {name: 'storage.type.enum.slice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.slice'}},
          name: 'meta.enum.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.enum.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(:)\\s*(\\w*)',
                  beginCaptures: {
                    1: {name: 'punctuation.storage.modifier.extends.slice'},
                    2: {patterns: [{include: '#storage.types'}]}
                  },
                  end: '(?=({|;))'
                },
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.slice'}
                  },
                  end: '(?=})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\\\?\\b\\w+\\b',
                      beginCaptures: {
                        0: {
                          name: 'constant.other.enum.slice',
                          patterns: [{include: '#identifier'}]
                        }
                      },
                      end: '(?=})|(,)',
                      endCaptures: {
                        1: {name: 'punctuation.separator.enum.slice'}
                      },
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '=',
                          beginCaptures: {
                            0: {name: 'keyword.operator.assignment.slice'}
                          },
                          end: '(?=})|(?=,)',
                          patterns: [
                            {include: '#standard'},
                            {include: '#constant'}
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.exception': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bexception\\b',
          beginCaptures: {0: {name: 'storage.type.exception.slice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.slice'}},
          name: 'meta.exception.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.exception.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)(?:(\\bextends\\b)|(:))',
                  beginCaptures: {
                    1: {name: 'storage.modifier.extends.slice'},
                    2: {name: 'punctuation.storage.modifier.extends.slice'}
                  },
                  end: '(?=})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\\\?[:\\w]+',
                      beginCaptures: {
                        0: {patterns: [{include: '#storage.types'}]}
                      },
                      end: '(?={|})|(,)',
                      endCaptures: {
                        1: {
                          name: 'punctuation.separator.exception.extends.slice'
                        }
                      },
                      patterns: [{include: '#standard'}]
                    },
                    {include: '#storage.exception.body'}
                  ]
                },
                {include: '#storage.exception.body'}
              ]
            }
          ]
        }
      ]
    },
    'storage.exception.body': {
      patterns: [
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.slice'}},
          end: '(?=})',
          patterns: [{include: '#standard'}, {include: '#storage.basic'}]
        }
      ]
    },
    'storage.identifier': {
      patterns: [
        {
          match:
            '(?<!\\\\)\\b(?:bool|byte|class|const|dictionary|double|enum|exception|extends|false|float|idempotent|implements|int|interface|local|LocalObject|long|module|Object|optional|out|sequence|short|string|struct|tag|throws|true|uint|ulong|ushort|Value|varuint|varulong|void)\\b',
          name: 'invalid.illegal.reserved.identifier.slice'
        },
        {
          captures: {
            1: {name: 'punctuation.escape.backslash.slice'},
            2: {
              patterns: [
                {
                  match: '__+|\\b_|_\\b',
                  name: 'invalid.illegal.underscore.slice'
                }
              ]
            }
          },
          match: '(\\\\)?\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        },
        {match: '.', name: 'invalid.illegal.identifier.slice'}
      ]
    },
    'storage.interface': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\binterface\\b',
          beginCaptures: {0: {name: 'storage.type.interface.slice'}},
          end: '(})|(;)',
          endCaptures: {
            1: {name: 'punctuation.section.block.end.slice'},
            2: {name: 'punctuation.terminator.semicolon.slice'}
          },
          name: 'meta.interface.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.interface.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=}|;)',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)(?:(\\bextends\\b)|(:))',
                  beginCaptures: {
                    1: {name: 'storage.modifier.extends.slice'},
                    2: {name: 'punctuation.storage.modifier.extends.slice'}
                  },
                  end: '(?=})|((?=;))',
                  endCaptures: {
                    1: {name: 'invalid.illegal.missing-brace.slice'}
                  },
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\\\?[:\\w]+',
                      beginCaptures: {
                        0: {patterns: [{include: '#storage.types'}]}
                      },
                      end: '(?={|}|;)|(,)',
                      endCaptures: {
                        1: {
                          name: 'punctuation.separator.interface.extends.slice'
                        }
                      },
                      patterns: [{include: '#standard'}]
                    },
                    {include: '#storage.interface.body'}
                  ]
                },
                {include: '#storage.interface.body'}
              ]
            }
          ]
        }
      ]
    },
    'storage.interface.body': {
      patterns: [
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.slice'}},
          end: '(?=})',
          patterns: [{include: '#standard'}, {include: '#storage.operation'}]
        }
      ]
    },
    'storage.modifier': {
      patterns: [
        {
          begin: '(?=\\[)',
          end: '(?<=])',
          patterns: [{include: '#standard'}, {include: '#metadata.local'}]
        },
        {
          captures: {
            1: {name: 'storage.modifier.local.slice'},
            2: {name: 'storage.modifier.const.slice'},
            3: {name: 'storage.modifier.idempotent.slice'},
            4: {name: 'storage.modifier.out.slice'},
            5: {name: 'storage.modifier.unchecked.slice'},
            6: {
              patterns: [
                {
                  captures: {
                    1: {name: 'storage.modifier.tagged.slice'},
                    2: {name: 'punctuation.section.group.tagged.begin.slice'},
                    3: {
                      patterns: [
                        {include: '#constant.numeric.oct'},
                        {include: '#constant.numeric.dec'},
                        {include: '#constant.numeric.hex'},
                        {include: '#storage.types.custom'}
                      ]
                    },
                    4: {name: 'punctuation.section.group.tagged.end.slice'}
                  },
                  match: '(optional|tag)(\\()([-a-zA-Z0-9:]*)(\\))'
                }
              ]
            }
          },
          match:
            '(?<!\\\\)\\b(?:(local)|(const)|(idempotent)|(out)|(unchecked)|((?:optional|tag)\\([-a-zA-Z0-9:]*\\)))(?:\\b|(?<=\\)))'
        }
      ]
    },
    'storage.module': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bmodule\\b',
          beginCaptures: {0: {name: 'storage.type.module.slice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.slice'}},
          name: 'meta.module.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.module.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.slice'}
                  },
                  end: '(?=})',
                  patterns: [{include: '#standard'}, {include: '#storage'}]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.operation': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '\\\\?[:\\w]+\\s*\\??',
          beginCaptures: {
            0: {
              patterns: [
                {include: '#storage.types.void'},
                {include: '#storage.types'}
              ]
            }
          },
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing-brace.slice'}
          },
          name: 'meta.operation.slice',
          patterns: [{include: '#storage.operation.body'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {
              name: 'punctuation.section.group.operation.return-tuple.begin.slice'
            }
          },
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing-brace.slice'}
          },
          name: 'meta.operation.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\)',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.group.operation.return-tuple.end.slice'
                }
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {include: '#storage.operation.body'}
              ]
            },
            {include: '#storage.modifier'},
            {
              begin: '\\\\?[:\\w]+\\s*\\??',
              beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
              end: '(?=\\))|(?<=,)',
              patterns: [
                {
                  begin: '\\\\?\\b\\w+\\b',
                  beginCaptures: {
                    0: {
                      name: 'entity.name.operation.return-member',
                      patterns: [{include: '#storage.identifier'}]
                    }
                  },
                  end: '(?=\\))|(,)',
                  endCaptures: {
                    1: {
                      name: 'punctuation.separator.operation.return-tuple.slice'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.operation.body': {
      patterns: [
        {include: '#standard'},
        {
          begin: '\\\\?\\b\\w+\\b',
          beginCaptures: {
            0: {
              name: 'entity.name.function.slice',
              patterns: [{include: '#storage.identifier'}]
            }
          },
          end: '(?=;|})',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\(',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.group.operation.parameters.begin.slice'
                }
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '\\)',
                  beginCaptures: {
                    0: {
                      name: 'punctuation.section.group.operation.parameters.end.slice'
                    }
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(?<!\\\\)\\bthrows\\b',
                      beginCaptures: {
                        0: {name: 'storage.modifier.throws.slice'}
                      },
                      end: '(?=;|})',
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '\\\\?[:\\w]+',
                          beginCaptures: {
                            0: {patterns: [{include: '#storage.types'}]}
                          },
                          end: '(?=;|})|(,)',
                          endCaptures: {
                            1: {
                              name: 'punctuation.separator.operation.throws.slice'
                            }
                          },
                          patterns: [{include: '#standard'}]
                        }
                      ]
                    }
                  ]
                },
                {include: '#storage.modifier'},
                {
                  begin: '\\\\?[:\\w]+\\s*\\??',
                  beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
                  end: '(?=\\))|(?<=,)',
                  patterns: [
                    {
                      begin: '\\\\?\\b\\w+\\b',
                      beginCaptures: {
                        0: {
                          name: 'entity.name.operation.parameter',
                          patterns: [{include: '#storage.identifier'}]
                        }
                      },
                      end: '(?=\\))|(,)',
                      endCaptures: {
                        1: {
                          name: 'punctuation.separator.operation.parameter.slice'
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.sequence': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bsequence\\b',
          beginCaptures: {0: {name: 'storage.type.sequence.slice'}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.slice'},
            2: {name: 'invalid.illegal.missing.semicolon.slice'}
          },
          name: 'meta.sequence.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '(\\<)',
              beginCaptures: {
                0: {name: 'meta.generic.sequence.slice'},
                1: {name: 'punctuation.definition.generic.begin.slice'}
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(\\\\?[:\\w]+)|(?=\\>)',
                  beginCaptures: {
                    1: {
                      name: 'meta.generic.sequence.slice',
                      patterns: [{include: '#storage.types'}]
                    },
                    2: {name: 'invalid.illegal.missing-type.slice'}
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(\\>)',
                      beginCaptures: {
                        0: {name: 'meta.generic.sequence.slice'},
                        1: {name: 'punctuation.definition.generic.end.slice'}
                      },
                      end: '(?=;|})',
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '\\\\?\\b\\w+\\b',
                          beginCaptures: {
                            0: {
                              name: 'entity.name.sequence.slice',
                              patterns: [{include: '#storage.identifier'}]
                            }
                          },
                          end: '(?=;|})'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.struct': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bstruct\\b',
          beginCaptures: {0: {name: 'storage.type.struct.slice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.slice'}},
          name: 'meta.struct.slice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.struct.slice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.slice'}
                  },
                  end: '(?=})',
                  patterns: [
                    {include: '#standard'},
                    {include: '#storage.basic'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'storage.types': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.escape.backslash.slice'},
            10: {name: 'storage.type.long.slice'},
            11: {name: 'storage.type.ulong.slice'},
            12: {name: 'storage.type.varlong.slice'},
            13: {name: 'storage.type.varulong.slice'},
            14: {name: 'storage.type.float.slice'},
            15: {name: 'storage.type.double.slice'},
            16: {name: 'storage.type.string.slice'},
            17: {name: 'storage.type.object.slice'},
            18: {name: 'storage.type.localobject.slice'},
            19: {name: 'storage.type.value.slice'},
            2: {name: 'storage.type.bool.slice'},
            20: {name: 'punctuation.storage.modifier.optional.slice'},
            3: {name: 'storage.type.byte.slice'},
            4: {name: 'storage.type.short.slice'},
            5: {name: 'storage.type.ushort.slice'},
            6: {name: 'storage.type.int.slice'},
            7: {name: 'storage.type.uint.slice'},
            8: {name: 'storage.type.varint.slice'},
            9: {name: 'storage.type.varuint.slice'}
          },
          match:
            '(\\\\)?\\b(?:(bool)|(byte)|(short)|(ushort)|(int)|(uint)|(varint)|(varuint)|(long)|(ulong)|(varlong)|(varulong)|(float)|(double)|(string)|(Object)|(LocalObject)|(Value))\\b\\s*(\\?)?'
        },
        {include: '#storage.types.custom'}
      ]
    },
    'storage.types.custom': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.escape.backslash.slice'},
            2: {
              patterns: [
                {match: '\\w+', name: 'variable.type.slice'},
                {match: '::', name: 'punctuation.accessor.slice'},
                {match: ':', name: 'invalid.illegal.accessor.slice'}
              ]
            },
            3: {name: 'punctuation.storage.modifier.optional.slice'}
          },
          match: '(\\\\)?([:\\w]+)\\s*(\\?)?'
        },
        {include: '#invalid'}
      ]
    },
    'storage.types.void': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.escape.backslash.slice'}},
          match: '(\\\\)?\\bvoid\\b',
          name: 'storage.type.void.slice'
        }
      ]
    }
  },
  scopeName: 'source.slice'
}

export default grammar
