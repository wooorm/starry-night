// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zeroc-ice/vscode-slice>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['slice'],
  patterns: [
    {include: '#comment'},
    {include: '#preprocessor'},
    {include: '#metadata.global'},
    {include: '#storage.module'}
  ],
  repository: {
    annotation: {
      captures: {1: {name: 'punctuation.definition.annotation.ice'}},
      match: '(@)\\S*\\b',
      name: 'storage.type.annotation.ice'
    },
    comment: {
      patterns: [{include: '#comment.line'}, {include: '#comment.block'}]
    },
    'comment.block': {
      begin: '\\/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.ice'}
      },
      contentName: 'text.ice',
      end: '\\*\\/',
      endCaptures: {0: {name: 'punctuation.definition.comment.block.end.ice'}},
      name: 'comment.block.ice',
      patterns: [
        {include: '#annotation'},
        {include: '#link'},
        {include: '#line.continuation'}
      ]
    },
    'comment.line': {
      begin: '\\/\\/',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.line.begin.ice'}
      },
      contentName: 'text.ice',
      end: '$',
      name: 'comment.line.ice',
      patterns: [
        {include: '#annotation'},
        {include: '#link'},
        {include: '#line.continuation'}
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
      captures: {
        0: {name: 'constant.language.ice'},
        1: {name: 'constant.boolean.true.ice'},
        2: {name: 'constant.boolean.false.ice'}
      },
      match: '\\b(?:(true)|(false))\\b'
    },
    'constant.numeric.dec': {
      captures: {1: {name: 'punctuation.definition.numeric.sign.ice'}},
      match: '(-|\\+)?\\b(?:0|[1-9]\\d*)\\b',
      name: 'constant.numeric.integer.ice'
    },
    'constant.numeric.float': {
      captures: {
        1: {name: 'punctuation.numeric.sign.ice'},
        2: {name: 'punctuation.separator.decimal.ice'},
        3: {name: 'punctuation.separator.decimal.ice'},
        4: {name: 'punctuation.numeric.exponent.ice'},
        5: {name: 'punctuation.definition.float.ice'}
      },
      match:
        '(-|\\+)?(?:\\d+(\\.)\\d*|\\d*(\\.)\\d+|\\d+(?=e|E|f|F))(?:(e|E)-?\\d+)?(f|F)?',
      name: 'constant.numeric.float.ice'
    },
    'constant.numeric.hex': {
      captures: {
        1: {name: 'punctuation.definition.numeric.sign.ice'},
        2: {name: 'punctuation.definition.numeric.hex.ice'}
      },
      match: '(-|\\+)?\\b(0x)[\\da-fA-F]+\\b',
      name: 'constant.numeric.hex.ice'
    },
    'constant.numeric.oct': {
      captures: {
        1: {name: 'punctuation.definition.numeric.sign.ice'},
        2: {name: 'punctuation.definition.numeric.oct.ice'},
        3: {patterns: [{match: '[8-9]', name: 'invalid.illegal.oct.ice'}]}
      },
      match: '(-|\\+)?\\b(0)(\\d+)\\b',
      name: 'constant.numeric.octal.ice'
    },
    'constant.string': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ice'}},
      end: '(")|$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.ice'},
        2: {name: 'invalid.illegal.mismatched-quotes.ice'}
      },
      name: 'string.quoted.double.ice',
      patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
    },
    invalid: {match: '\\S', name: 'invalid.illegal'},
    'line.continuation': {
      begin: '(\\\\)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.separator.continuation.backslash.ice'}
      },
      end: '^'
    },
    link: {
      captures: {1: {name: 'punctuation.definition.link.ice'}},
      match: '(\\b\\S*)?(#)\\S*\\b',
      name: 'variable.link.ice'
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
            0: {name: 'string.quoted.double.ice'},
            1: {name: 'punctuation.definition.string.begin.ice'}
          },
          end: '(?=\\])|(?<=,)',
          patterns: [
            {include: '#line.continuation'},
            {
              captures: {1: {patterns: [{include: '#metadata.identifier'}]}},
              match: '((?:[^\\\\"]|\\\\.)+)',
              name: 'string.quoted.double.ice'
            },
            {
              begin: '(")',
              beginCaptures: {
                0: {name: 'string.quoted.double.ice'},
                1: {name: 'punctuation.definition.string.end.ice'}
              },
              end: '(?=\\])|(,)',
              endCaptures: {1: {name: 'punctuation.separator.metadata.ice'}},
              patterns: [{include: '#standard'}]
            }
          ]
        }
      ]
    },
    'metadata.global': {
      begin: '\\[\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.metadata.global.begin.ice'}
      },
      end: '\\]\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.metadata.global.end.ice'}
      },
      name: 'meta.metadata.global.ice',
      patterns: [{include: '#metadata.content'}]
    },
    'metadata.identifier': {
      match: '\\S+',
      name: 'entity.metadata.directive.ice'
    },
    'metadata.local': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.metadata.local.begin.ice'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.metadata.local.end.ice'}},
      name: 'meta.metadata.local.ice',
      patterns: [{include: '#metadata.content'}]
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
      begin: '(#)\\s*define\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.define.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.define.ice',
      patterns: [
        {include: '#standardP'},
        {
          begin: '\\b(\\w+)((\\())',
          beginCaptures: {
            1: {patterns: [{include: '#preprocessor.identifier'}]},
            2: {name: 'meta.group.parameters.preprocessor.ice'},
            3: {name: 'punctuation.section.group.parameters.begin.ice'}
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
                1: {name: 'punctuation.separator.parameter.preprocessor.ice'},
                2: {name: 'invalid.mismatched.parenthesis.ice'}
              },
              patterns: [{include: '#standardP'}]
            },
            {
              begin: '\\b\\w+\\b',
              beginCaptures: {
                0: {name: 'punctuation.variable.parameter.preprocessor.ice'}
              },
              end: '(?=\\))|((,))|($)',
              endCaptures: {
                1: {name: 'punctuation.separator.parameter.preprocessor.ice'},
                2: {name: 'invalid.trailing-comma.ice'},
                3: {name: 'invalid.mismatched.parenthesis.ice'}
              },
              patterns: [{include: '#standardP'}]
            },
            {
              begin: '(\\))',
              beginCaptures: {
                0: {name: 'meta.group.parameters.preprocessor.ice'},
                1: {name: 'punctuation.section.group.parameters.end.ice'}
              },
              end: '$',
              patterns: [
                {include: '#standardP'},
                {match: '\\S', name: 'constant.preprocessor.ice'}
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
            {match: '\\S', name: 'constant.preprocessor.ice'}
          ]
        }
      ]
    },
    'preprocessor.elif': {
      begin: '(#)\\s*elif\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.elif.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.elif.ice',
      patterns: [{include: '#standardP'}]
    },
    'preprocessor.else': {
      begin: '(#)\\s*else\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.else.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.endif.ice',
      patterns: [{include: '#standardP'}]
    },
    'preprocessor.endif': {
      begin: '(#)\\s*endif\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.endif.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.endif.ice',
      patterns: [{include: '#standardP'}]
    },
    'preprocessor.error': {
      begin: '((#)\\s*error)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.error.ice'},
        2: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.error.ice',
      patterns: [{include: '#standardP'}, {match: '.', name: 'text.error.ice'}]
    },
    'preprocessor.identifier': {
      patterns: [
        {
          match: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\b',
          name: 'entity.identifier.preprocessor.ice'
        },
        {include: '#invalid'}
      ]
    },
    'preprocessor.if': {
      begin: '(#)\\s*if\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.if.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.if.ice',
      patterns: [{include: '#standardP'}]
    },
    'preprocessor.ifdef': {
      begin: '(#)\\s*ifdef\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.ifdef.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.ifdef.ice',
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
    },
    'preprocessor.ifndef': {
      begin: '(#)\\s*ifndef\\b',
      beginCaptures: {
        0: {name: 'keyword.control.preprocessor.ifndef.ice'},
        1: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.ifndef.ice',
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
    },
    'preprocessor.include': {
      begin: '((#)\\s*include)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.include.ice'},
        2: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.include.ice',
      patterns: [
        {include: '#standardP'},
        {begin: '(?<="|>)', end: '$', patterns: [{include: '#standardP'}]},
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.ice'}},
          contentName: 'entity.name.header.ice',
          end: '(")|($)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.ice'},
            2: {name: 'invalid.illegal.mismatched-quotes.ice'}
          },
          name: 'string.quoted.double.ice',
          patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
        },
        {
          begin: '<',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.ice'}},
          contentName: 'entity.name.header.ice',
          end: '(>)|($)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.ice'},
            2: {name: 'invalid.illegal.mismatched-quotes.ice'}
          },
          name: 'string.quoted.other.angle.ice',
          patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
        }
      ]
    },
    'preprocessor.line': {
      begin: '((#)\\s*line)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.line.ice'},
        2: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.line.ice',
      patterns: [
        {include: '#standardP'},
        {
          begin: '\\b[\\d]+\\b',
          beginCaptures: {0: {patterns: [{include: '#constant.numeric.dec'}]}},
          end: '$',
          patterns: [
            {include: '#standardP'},
            {begin: '(?<=")', end: '$', patterns: [{include: '#standardP'}]},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.ice'}
              },
              contentName: 'entity.name.file.ice',
              end: '(")|($)',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.ice'},
                2: {name: 'invalid.illegal.mismatched-quotes.ice'}
              },
              name: 'string.quoted.double.ice',
              patterns: [{match: '\\\\.'}, {include: '#line.continuation'}]
            }
          ]
        }
      ]
    },
    'preprocessor.null': {
      begin: '(#)',
      beginCaptures: {
        0: {name: 'punctuation.definition.preprocessor.ice'},
        1: {name: 'keyword.control.preprocessor.null.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.null.ice',
      patterns: [{include: '#standardP'}]
    },
    'preprocessor.pragma': {
      begin: '((#)\\s*pragma)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.pragma.ice'},
        2: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.pragma.ice',
      patterns: [
        {include: '#standardP'},
        {
          begin: '\\b\\S+\\b',
          beginCaptures: {
            0: {name: 'keyword.control.preprocessor.pragma.other.ice'}
          },
          end: '$',
          patterns: [{include: '#standardP'}]
        }
      ]
    },
    'preprocessor.undef': {
      begin: '((#)\\s*undef)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.preprocessor.undef.ice'},
        2: {name: 'punctuation.definition.preprocessor.ice'}
      },
      end: '$',
      name: 'meta.preprocessor.undef.ice',
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
          begin: '\\\\?\\bbool\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.bool.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.bool.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bbyte\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.byte.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.byte.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bshort\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.short.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.short.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bint\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.int.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.int.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\blong\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.long.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.long.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bfloat\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.float.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.float.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bdouble\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.double.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.double.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\bstring\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.string.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.string.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=;|})',
              patterns: [{include: '#storage.basic.assignment'}]
            }
          ]
        },
        {
          begin: '\\\\?\\b[:\\w]+\\b',
          beginCaptures: {0: {patterns: [{include: '#storage.types.custom'}]}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.type.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.ice',
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
          beginCaptures: {0: {name: 'keyword.operator.assignment.ice'}},
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
          beginCaptures: {0: {name: 'storage.type.class.ice'}},
          end: '(})|(;)',
          endCaptures: {
            1: {name: 'punctuation.section.block.end.ice'},
            2: {name: 'punctuation.terminator.semicolon.ice'}
          },
          name: 'meta.class.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.class.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=}|;)',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)\\bextends\\b',
                  beginCaptures: {0: {name: 'storage.modifier.extends.ice'}},
                  end: '(?=})|((?=;))',
                  endCaptures: {1: {name: 'invalid.illegal.missing-brace.ice'}},
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
                      name: 'invalid.illegal.missing-types.ice'
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
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.ice'}},
      end: '(?=})',
      patterns: [{include: '#standard'}, {include: '#storage.basic'}]
    },
    'storage.class.implements': {
      patterns: [
        {
          begin: '(?<!\\\\)\\bimplements\\b',
          beginCaptures: {0: {name: 'storage.modifier.implements.ice'}},
          end: '(?=})|((?=;))',
          endCaptures: {1: {name: 'invalid.illegal.missing-brace.ice'}},
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?[:\\w]+',
              beginCaptures: {0: {patterns: [{include: '#storage.types'}]}},
              end: '(?={|}|;)|(,)',
              endCaptures: {
                1: {name: 'punctuation.separator.class.implements.ice'}
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
          beginCaptures: {0: {name: 'storage.type.dictionary.ice'}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.dictionary.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '(\\<)',
              beginCaptures: {
                0: {name: 'meta.generic.dictionary.ice'},
                1: {name: 'punctuation.definition.generic.begin.ice'}
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {include: '#storage.modifier'},
                {
                  begin: '(\\\\?[:\\w]+)|(?=\\>)',
                  beginCaptures: {
                    1: {
                      name: 'meta.generic.dictionary.ice',
                      patterns: [{include: '#storage.types'}]
                    },
                    2: {name: 'invalid.illegal.missing-type.ice'}
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(,)|(?=\\>)',
                      beginCaptures: {
                        0: {name: 'meta.generic.dictionary.ice'},
                        1: {name: 'punctuation.separator.dictionary.ice'},
                        2: {name: 'invalid.illegal.missing-type.ice'}
                      },
                      end: '(?=;|{|})',
                      patterns: [
                        {include: '#standard'},
                        {include: '#storage.modifier'},
                        {
                          begin: '(\\\\?[:\\w]+)|(?=\\>)',
                          beginCaptures: {
                            1: {
                              name: 'meta.generic.dictionary.ice',
                              patterns: [{include: '#storage.types'}]
                            },
                            2: {name: 'invalid.illegal.missing-type.ice'}
                          },
                          end: '(?=;|})',
                          patterns: [
                            {include: '#standard'},
                            {
                              begin: '(\\>)',
                              beginCaptures: {
                                0: {name: 'meta.generic.dictionary.ice'},
                                1: {
                                  name: 'punctuation.definition.generic.end.ice'
                                }
                              },
                              end: '(?=;|})',
                              patterns: [
                                {include: '#standard'},
                                {
                                  begin: '\\\\?\\b\\w+\\b',
                                  beginCaptures: {
                                    0: {
                                      name: 'entity.name.dictionary.ice',
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
          beginCaptures: {0: {name: 'storage.type.enum.ice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.ice'}},
          name: 'meta.enum.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.enum.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.ice'}
                  },
                  end: '(?=})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(?=\\[)',
                      end: '(?<=])',
                      patterns: [
                        {include: '#standard'},
                        {include: '#metadata.local'}
                      ]
                    },
                    {
                      begin: '\\\\?\\b\\w+\\b',
                      beginCaptures: {
                        0: {
                          name: 'constant.other.enum.ice',
                          patterns: [{include: '#identifier'}]
                        }
                      },
                      end: '(?=})|(,)',
                      endCaptures: {
                        1: {name: 'punctuation.separator.enum.ice'}
                      },
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '=',
                          beginCaptures: {
                            0: {name: 'keyword.operator.assignment.ice'}
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
          beginCaptures: {0: {name: 'storage.type.exception.ice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.ice'}},
          name: 'meta.exception.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.exception.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)\\bextends\\b',
                  beginCaptures: {0: {name: 'storage.modifier.extends.ice'}},
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
                        1: {name: 'punctuation.separator.exception.extends.ice'}
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
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.ice'}},
      end: '(?=})',
      patterns: [{include: '#standard'}, {include: '#storage.basic'}]
    },
    'storage.identifier': {
      patterns: [
        {
          match:
            '(?<!\\\\)\\b(?:bool|byte|class|const|dictionary|double|enum|exception|extends|false|float|idempotent|implements|int|interface|local|LocalObject|long|module|Object|optional|out|sequence|short|string|struct|throws|true|Value|void)\\b',
          name: 'invalid.illegal.reserved.identifier.ice'
        },
        {
          captures: {
            1: {name: 'punctuation.escape.backslash.ice'},
            2: {
              patterns: [
                {match: '__+|\\b_|_\\b', name: 'invalid.illegal.underscore.ice'}
              ]
            }
          },
          match: '(\\\\)?\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        },
        {match: '.', name: 'invalid.illegal.identifier.ice'}
      ]
    },
    'storage.interface': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\binterface\\b',
          beginCaptures: {0: {name: 'storage.type.interface.ice'}},
          end: '(})|(;)',
          endCaptures: {
            1: {name: 'punctuation.section.block.end.ice'},
            2: {name: 'punctuation.terminator.semicolon.ice'}
          },
          name: 'meta.interface.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.interface.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=}|;)',
              patterns: [
                {include: '#standard'},
                {
                  begin: '(?<!\\\\)\\bextends\\b',
                  beginCaptures: {0: {name: 'storage.modifier.extends.ice'}},
                  end: '(?=})|((?=;))',
                  endCaptures: {1: {name: 'invalid.illegal.missing-brace.ice'}},
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\\\?[:\\w]+',
                      beginCaptures: {
                        0: {patterns: [{include: '#storage.types'}]}
                      },
                      end: '(?={|}|;)|(,)',
                      endCaptures: {
                        1: {name: 'punctuation.separator.interface.extends.ice'}
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
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.ice'}},
      end: '(?=})',
      patterns: [{include: '#standard'}, {include: '#storage.operation'}]
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
            1: {name: 'storage.modifier.local.ice'},
            2: {name: 'storage.modifier.const.ice'},
            3: {name: 'storage.modifier.idempotent.ice'},
            4: {name: 'storage.modifier.out.ice'},
            5: {
              patterns: [
                {
                  captures: {
                    1: {name: 'storage.modifier.optional.ice'},
                    2: {name: 'punctuation.section.group.optional.begin.ice'},
                    3: {
                      patterns: [
                        {include: '#constant.numeric.oct'},
                        {include: '#constant.numeric.dec'},
                        {include: '#constant.numeric.hex'},
                        {include: '#storage.types.custom'}
                      ]
                    },
                    4: {name: 'punctuation.section.group.optional.end.ice'}
                  },
                  match: '(optional)(\\()([-a-zA-Z0-9_:]*)(\\))'
                }
              ]
            }
          },
          match:
            '(?<!\\\\)\\b(?:(local)|(const)|(idempotent)|(out)|(optional\\([-a-zA-Z0-9_:]*\\)))(?:\\b|(?<=\\)))'
        }
      ]
    },
    'storage.module': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bmodule\\b',
          beginCaptures: {0: {name: 'storage.type.module.ice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.ice'}},
          name: 'meta.module.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.module.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.ice'}
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
          begin: '\\\\?[:\\w]+',
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
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing-brace.ice'}
          },
          name: 'meta.operation.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.function.ice',
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
                      name: 'punctuation.section.group.operation.parameters.begin.ice'
                    }
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '\\)',
                      beginCaptures: {
                        0: {
                          name: 'punctuation.section.group.operation.parameters.end.ice'
                        }
                      },
                      end: '(?=;|})',
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '(?<!\\\\)\\bthrows\\b',
                          beginCaptures: {
                            0: {name: 'storage.modifier.throws.ice'}
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
                                  name: 'punctuation.separator.operation.throws.ice'
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
                      begin: '\\\\?[:\\w]+',
                      beginCaptures: {
                        0: {patterns: [{include: '#storage.types'}]}
                      },
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
                              name: 'punctuation.separator.operation.parameter.ice'
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
        }
      ]
    },
    'storage.sequence': {
      patterns: [
        {include: '#storage.modifier'},
        {
          begin: '(?<!\\\\)\\bsequence\\b',
          beginCaptures: {0: {name: 'storage.type.sequence.ice'}},
          end: '(;)|((?=}))',
          endCaptures: {
            1: {name: 'punctuation.terminator.semicolon.ice'},
            2: {name: 'invalid.illegal.missing.semicolon.ice'}
          },
          name: 'meta.sequence.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '(\\<)',
              beginCaptures: {
                0: {name: 'meta.generic.sequence.ice'},
                1: {name: 'punctuation.definition.generic.begin.ice'}
              },
              end: '(?=;|})',
              patterns: [
                {include: '#standard'},
                {include: '#storage.modifier'},
                {
                  begin: '(\\\\?[:\\w]+)|(?=\\>)',
                  beginCaptures: {
                    1: {
                      name: 'meta.generic.sequence.ice',
                      patterns: [{include: '#storage.types'}]
                    },
                    2: {name: 'invalid.illegal.missing-type.ice'}
                  },
                  end: '(?=;|})',
                  patterns: [
                    {include: '#standard'},
                    {
                      begin: '(\\>)',
                      beginCaptures: {
                        0: {name: 'meta.generic.sequence.ice'},
                        1: {name: 'punctuation.definition.generic.end.ice'}
                      },
                      end: '(?=;|})',
                      patterns: [
                        {include: '#standard'},
                        {
                          begin: '\\\\?\\b\\w+\\b',
                          beginCaptures: {
                            0: {
                              name: 'entity.name.sequence.ice',
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
          beginCaptures: {0: {name: 'storage.type.struct.ice'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.ice'}},
          name: 'meta.struct.ice',
          patterns: [
            {include: '#standard'},
            {
              begin: '\\\\?\\b\\w+\\b',
              beginCaptures: {
                0: {
                  name: 'entity.name.struct.ice',
                  patterns: [{include: '#storage.identifier'}]
                }
              },
              end: '(?=})',
              patterns: [
                {include: '#standard'},
                {
                  begin: '{',
                  beginCaptures: {
                    0: {name: 'punctuation.section.block.begin.ice'}
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
            1: {name: 'punctuation.escape.backslash.ice'},
            10: {name: 'storage.type.object.ice'},
            11: {name: 'storage.type.localobject.ice'},
            12: {name: 'storage.type.value.ice'},
            2: {name: 'storage.type.bool.ice'},
            3: {name: 'storage.type.byte.ice'},
            4: {name: 'storage.type.short.ice'},
            5: {name: 'storage.type.int.ice'},
            6: {name: 'storage.type.long.ice'},
            7: {name: 'storage.type.float.ice'},
            8: {name: 'storage.type.double.ice'},
            9: {name: 'storage.type.string.ice'}
          },
          match:
            '(\\\\)?\\b(?:(bool)|(byte)|(short)|(int)|(long)|(float)|(double)|(string)|(Object)|(LocalObject)|(Value))\\b'
        },
        {include: '#storage.types.custom'}
      ]
    },
    'storage.types.custom': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.escape.backslash.ice'},
            2: {
              patterns: [
                {match: '\\w+', name: 'variable.type.ice'},
                {match: '::', name: 'punctuation.accessor.ice'},
                {match: ':', name: 'invalid.illegal.accessor.ice'}
              ]
            }
          },
          match: '(\\\\)?([:\\w]+)'
        },
        {include: '#invalid'}
      ]
    },
    'storage.types.void': {
      captures: {1: {name: 'punctuation.escape.backslash.ice'}},
      match: '(\\\\)?\\bvoid\\b',
      name: 'storage.type.void.ice'
    }
  },
  scopeName: 'source.ice'
}

export default grammar
