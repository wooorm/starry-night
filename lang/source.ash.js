// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/midgleyc/vscode-kolmafia-ash>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['kolmafia-ash'],
  patterns: [
    {
      begin: '^\\s*\\b(import)\\b',
      beginCaptures: {1: {name: 'keyword.control.java'}},
      end: '(;)?\\s*$',
      endCaptures: {1: {name: 'punctuation.terminator.java'}},
      patterns: [{include: '#string-import'}, {include: '#strings'}]
    },
    {include: '#comments-javadoc'},
    {include: '#code'},
    {include: '#module'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#enumerated-types'},
        {include: '#object-types'}
      ]
    },
    annotations: {
      patterns: [
        {
          begin: '((@)\\s*([^\\s(]+))(\\()',
          beginCaptures: {
            2: {name: 'punctuation.definition.annotation.java'},
            3: {name: 'storage.type.annotation.java'},
            4: {
              name: 'punctuation.definition.annotation-arguments.begin.bracket.round.java'
            }
          },
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.annotation-arguments.end.bracket.round.java'
            }
          },
          name: 'meta.declaration.annotation.java',
          patterns: [
            {
              captures: {
                1: {name: 'constant.other.key.java'},
                2: {name: 'keyword.operator.assignment.java'}
              },
              match: '(\\w*)\\s*(=)'
            },
            {include: '#code'}
          ]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.annotation.java'},
            2: {name: 'storage.modifier.java'},
            3: {name: 'storage.type.annotation.java'},
            5: {name: 'punctuation.definition.annotation.java'},
            6: {name: 'storage.type.annotation.java'}
          },
          match: '(@)(interface)\\s+(\\w*)|((@)\\s*(\\w+))',
          name: 'meta.declaration.annotation.java'
        }
      ]
    },
    'anonymous-block-and-instance-initializer': {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.section.block.begin.bracket.curly.java'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.block.end.bracket.curly.java'}
      },
      patterns: [{include: '#code'}]
    },
    'anonymous-classes-and-new': {
      begin: '\\bnew\\b',
      beginCaptures: {0: {name: 'keyword.control.new.java'}},
      end: '(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)',
      patterns: [
        {include: '#comments'},
        {include: '#function-call'},
        {include: '#all-types'},
        {
          begin: '(?<=\\))',
          end: '(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)',
          patterns: [
            {include: '#comments'},
            {
              begin: '{',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.inner-class.begin.bracket.curly.java'
                }
              },
              end: '}',
              endCaptures: {
                0: {
                  name: 'punctuation.section.inner-class.end.bracket.curly.java'
                }
              },
              name: 'meta.inner-class.java',
              patterns: [{include: '#class-body'}]
            }
          ]
        },
        {
          begin: '(?<=\\])',
          end: '(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)',
          patterns: [
            {include: '#comments'},
            {
              begin: '{',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.array-initializer.begin.bracket.curly.java'
                }
              },
              end: '}',
              endCaptures: {
                0: {
                  name: 'punctuation.section.array-initializer.end.bracket.curly.java'
                }
              },
              name: 'meta.array-initializer.java',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {include: '#parens'}
      ]
    },
    assertions: {
      patterns: [
        {
          begin: '\\b(assert)\\s',
          beginCaptures: {1: {name: 'keyword.control.assert.java'}},
          end: '$',
          name: 'meta.declaration.assertion.java',
          patterns: [
            {
              match: ':',
              name: 'keyword.operator.assert.expression-separator.java'
            },
            {include: '#code'}
          ]
        }
      ]
    },
    'class-body': {
      patterns: [
        {include: '#comments-javadoc'},
        {include: '#comments'},
        {include: '#static-initializer'},
        {include: '#class-fields-and-methods'},
        {include: '#annotations'},
        {include: '#storage-modifiers'},
        {include: '#member-variables'},
        {include: '#code'}
      ]
    },
    'class-fields-and-methods': {
      patterns: [
        {begin: '(?=\\=)', end: '(?=;)', patterns: [{include: '#code'}]},
        {include: '#methods'}
      ]
    },
    code: {
      patterns: [
        {include: '#annotations'},
        {include: '#comments'},
        {include: '#record'},
        {include: '#anonymous-block-and-instance-initializer'},
        {include: '#try-catch-finally'},
        {include: '#assertions'},
        {include: '#parens'},
        {include: '#constants-and-special-vars'},
        {include: '#enumerated-constants'},
        {include: '#enumerated-plural-constants'},
        {include: '#numbers'},
        {include: '#anonymous-classes-and-new'},
        {include: '#lambda-expression'},
        {include: '#keywords'},
        {include: '#storage-modifiers'},
        {include: '#method-call'},
        {include: '#function-call'},
        {include: '#variables'},
        {include: '#variables-local'},
        {include: '#objects'},
        {include: '#properties'},
        {include: '#strings'},
        {include: '#all-types'},
        {match: ',', name: 'punctuation.separator.delimiter.java'},
        {match: '\\.', name: 'punctuation.separator.period.java'},
        {match: ';', name: 'punctuation.terminator.java'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.java'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.java'
        },
        {include: '#comments-inline'}
      ]
    },
    'comments-inline': {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.java'}},
          end: '\\*/',
          name: 'comment.block.java'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.java'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.java'}},
              end: '\\n',
              name: 'comment.line.double-slash.java'
            }
          ]
        },
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.java'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {0: {name: 'punctuation.definition.comment.java'}},
              end: '\\n',
              name: 'comment.line.hash.java'
            }
          ]
        }
      ]
    },
    'comments-javadoc': {
      patterns: [
        {
          begin: '^\\s*(/\\*\\*)(?!/)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.java'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.java'}},
          name: 'comment.block.javadoc.java',
          patterns: [
            {
              match: '@(author|deprecated|return|see|serial|since|version)\\b',
              name: 'keyword.other.documentation.javadoc.java'
            },
            {
              captures: {
                1: {name: 'keyword.other.documentation.javadoc.java'},
                2: {name: 'variable.parameter.java'}
              },
              match: '(@param)\\s+(\\S+)'
            },
            {
              captures: {
                1: {name: 'keyword.other.documentation.javadoc.java'},
                2: {name: 'entity.name.type.class.java'}
              },
              match: '(@(?:exception|throws))\\s+(\\S+)'
            },
            {
              captures: {
                1: {name: 'keyword.other.documentation.javadoc.java'},
                2: {name: 'entity.name.type.class.java'},
                3: {name: 'variable.parameter.java'}
              },
              match: '{(@link)\\s+(\\S+)?#([\\w$]+\\s*\\([^\\(\\)]*\\)).*?}'
            }
          ]
        }
      ]
    },
    'constants-and-special-vars': {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.java'},
        {match: '\\bthis\\b', name: 'variable.language.this.java'},
        {match: '\\bsuper\\b', name: 'variable.language.java'}
      ]
    },
    'enumerated-constants': {
      begin:
        '\\$(string|buffer|bounty|classe?|coinmaster|effect|element|familiar|item|location|monster|phylum|skill|slot|stat|thrall|matcher)\\s*\\[',
      beginCaptures: {1: {name: 'storage.type.ash'}},
      contentName: 'string.quoted.ash',
      end: '(?<!\\\\)\\]',
      name: 'constant.character.ash',
      patterns: [{match: '&[a-z]+;', name: 'constant.character.escape.ash'}]
    },
    'enumerated-plural-constants': {
      begin:
        '\\$(strings|buffers|classes|coinmasters|effects|elements|familiars|items|locations|monsters|phylums|skills|slots|stats|thralls|matchers)\\s*\\[',
      beginCaptures: {1: {name: 'storage.type.ash'}},
      contentName: 'string.quoted.ash',
      end: '(?<!\\\\)\\]',
      name: 'constant.character.ash',
      patterns: [
        {match: '&[a-z]+;', name: 'constant.character.escape.ash'},
        {include: '#comments'},
        {include: '#enumerated-constants'}
      ]
    },
    'enumerated-types': {
      match:
        '\\b(string|buffer|bounty|class|coinmaster|effect|element|familiar|item|location|monster|phylum|skill|slot|stat|thrall|matcher)\\b',
      name: 'storage.type.enumerated.ash'
    },
    'function-call': {
      begin: '([A-Za-z_$][\\w$]*)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.java'},
        2: {name: 'punctuation.definition.parameters.begin.bracket.round.java'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.parameters.end.bracket.round.java'}
      },
      name: 'meta.function-call.java',
      patterns: [{include: '#code'}]
    },
    keywords: {
      patterns: [
        {match: '\\bthrow\\b', name: 'keyword.control.throw.java'},
        {match: '\\?|:', name: 'keyword.control.ternary.java'},
        {
          match:
            '\\b(import|return|break|case|continue|default|do|while|for|switch|if|else|repeat|until|foreach|exit|sort|by|in)\\b',
          name: 'keyword.control.java'
        },
        {match: '\\b(contains)\\b', name: 'keyword.operator.contains.ash'},
        {match: '\\b(instanceof)\\b', name: 'keyword.operator.instanceof.java'},
        {match: '(<<|>>>?|~|\\^)', name: 'keyword.operator.bitwise.java'},
        {
          match: '((&|\\^|\\||<<|>>>?)=)',
          name: 'keyword.operator.assignment.bitwise.java'
        },
        {
          match: '(===?|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.java'
        },
        {
          match: '([+*/%-]=)',
          name: 'keyword.operator.assignment.arithmetic.java'
        },
        {match: '(=)', name: 'keyword.operator.assignment.java'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.java'
        },
        {
          match: '(\\-|\\+|\\*|\\/|%)',
          name: 'keyword.operator.arithmetic.java'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.java'},
        {match: '(\\||&)', name: 'keyword.operator.bitwise.java'},
        {match: '\\b(const|goto)\\b', name: 'keyword.reserved.java'}
      ]
    },
    'lambda-expression': {
      patterns: [{match: '->', name: 'storage.type.function.arrow.java'}]
    },
    'member-variables': {
      begin:
        '(?=private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final)',
      end: '(?=\\=|;)',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#variables'},
        {include: '#primitive-arrays'},
        {include: '#object-types'}
      ]
    },
    'method-call': {
      begin: '(\\.)\\s*([A-Za-z_$][\\w$]*)\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.period.java'},
        2: {name: 'entity.name.function.java'},
        3: {name: 'punctuation.definition.parameters.begin.bracket.round.java'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.parameters.end.bracket.round.java'}
      },
      name: 'meta.method-call.java',
      patterns: [{include: '#code'}]
    },
    methods: {
      begin: '(?!new)(?=[\\w<].*\\s+)(?=([^=/]|/(?!/))+\\()',
      end: '(})|(?=;)',
      endCaptures: {
        1: {name: 'punctuation.section.method.end.bracket.curly.java'}
      },
      name: 'meta.method.java',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(\\w+)\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.java'},
            2: {
              name: 'punctuation.definition.parameters.begin.bracket.round.java'
            }
          },
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.parameters.end.bracket.round.java'
            }
          },
          name: 'meta.method.identifier.java',
          patterns: [
            {include: '#parameters'},
            {include: '#parens'},
            {include: '#comments'}
          ]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\s+\\w+\\s*\\()',
          name: 'meta.method.return-type.java',
          patterns: [
            {include: '#all-types'},
            {include: '#parens'},
            {include: '#comments'}
          ]
        },
        {include: '#throws'},
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.method.begin.bracket.curly.java'}
          },
          contentName: 'meta.method.body.java',
          end: '(?=})',
          patterns: [{include: '#code'}]
        },
        {include: '#comments'}
      ]
    },
    numbers: {
      patterns: [
        {
          match:
            '(?x)\n\\b(?<!\\$)\n0(x|X)\n(\n  (?<!\\.)[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[Ll]?(?!\\.)\n  |\n  (\n    [0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?\\.?\n    |\n    ([0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?)?\\.[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?\n  )\n  [Pp][+-]?[0-9]([0-9_]*[0-9])?[FfDd]?\n)\n\\b(?!\\$)',
          name: 'constant.numeric.hex.java'
        },
        {
          match: '\\b(?<!\\$)0(b|B)[01]([01_]*[01])?[Ll]?\\b(?!\\$)',
          name: 'constant.numeric.binary.java'
        },
        {
          match: '\\b(?<!\\$)0[0-7]([0-7_]*[0-7])?[Ll]?\\b(?!\\$)',
          name: 'constant.numeric.octal.java'
        },
        {
          match:
            '(?x)\n(?<!\\$)\n(\n  \\b[0-9]([0-9_]*[0-9])?\\.\\B(?!\\.)\n  |\n  \\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b\n  |\n  \\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b\n  |\n  \\b[0-9]([0-9_]*[0-9])?\\.([0-9]([0-9_]*[0-9])?)([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b\n  |\n  (?<!\\.)\\B\\.[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b\n  |\n  \\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b\n  |\n  \\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b\n  |\n  \\b(0|[1-9]([0-9_]*[0-9])?)(?!\\.)[Ll]?\\b\n)\n(?!\\$)',
          name: 'constant.numeric.decimal.java'
        }
      ]
    },
    'object-types': {
      patterns: [
        {
          begin: '\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*)([A-Z_]\\w*)\\s*(?=\\[)',
          beginCaptures: {
            1: {
              patterns: [
                {match: '[A-Za-z_]\\w*', name: 'storage.type.java'},
                {match: '\\.', name: 'punctuation.separator.period.java'}
              ]
            },
            2: {name: 'storage.type.object.array.java'}
          },
          end: '(?!\\s*\\[)',
          patterns: [{include: '#comments'}, {include: '#parens'}]
        },
        {
          captures: {
            1: {
              patterns: [
                {match: '[A-Za-z_]\\w*', name: 'storage.type.java'},
                {match: '\\.', name: 'punctuation.separator.period.java'}
              ]
            }
          },
          match: '\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\s*(?=<)'
        },
        {
          captures: {
            1: {
              patterns: [
                {match: '[A-Za-z_]\\w*', name: 'storage.type.java'},
                {match: '\\.', name: 'punctuation.separator.period.java'}
              ]
            }
          },
          match:
            '\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\b((?=\\s*[A-Za-z$_\\n])|(?=\\s*\\.\\.\\.))'
        }
      ]
    },
    'object-types-inherited': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.separator.period.java'}},
          match: '\\b(?:[A-Z]\\w*\\s*(\\.)\\s*)*[A-Z]\\w*\\b',
          name: 'entity.other.inherited-class.java'
        },
        {match: ',', name: 'punctuation.separator.delimiter.java'}
      ]
    },
    objects: {
      match: '(?<![\\w$])[a-zA-Z_$][\\w$]*(?=\\s*\\.\\s*[\\w$]+)',
      name: 'variable.other.object.java'
    },
    parameters: {
      patterns: [
        {match: '\\bfinal\\b', name: 'storage.modifier.java'},
        {include: '#annotations'},
        {include: '#all-types'},
        {include: '#strings'},
        {match: '\\w+', name: 'variable.parameter.java'},
        {match: ',', name: 'punctuation.separator.delimiter.java'},
        {
          match: '\\.\\.\\.',
          name: 'punctuation.definition.parameters.varargs.java'
        }
      ]
    },
    parens: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.bracket.round.java'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.bracket.round.java'}},
          patterns: [{include: '#code'}]
        },
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'punctuation.bracket.square.java'}},
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.bracket.square.java'}},
          patterns: [{include: '#code'}]
        },
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.bracket.curly.java'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.bracket.curly.java'}},
          patterns: [{include: '#code'}]
        }
      ]
    },
    'primitive-arrays': {
      patterns: [
        {
          begin:
            '\\b(void|boolean|byte|char|short|int|float|long|double)\\b\\s*(?=\\[)',
          beginCaptures: {1: {name: 'storage.type.primitive.array.java'}},
          end: '(?!\\s*\\[)',
          patterns: [{include: '#comments'}, {include: '#parens'}]
        }
      ]
    },
    'primitive-types': {
      match: '\\b(void|boolean|byte|char|short|int|float|long|double)\\b',
      name: 'storage.type.primitive.java'
    },
    properties: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.period.java'},
            2: {name: 'variable.other.object.property.java'}
          },
          match: '(\\.)\\s*([a-zA-Z_$][\\w$]*)(?=\\s*\\.\\s*[a-zA-Z_$][\\w$]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.period.java'},
            2: {name: 'variable.other.object.property.java'}
          },
          match: '(\\.)\\s*([a-zA-Z_$][\\w$]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.period.java'},
            2: {name: 'invalid.illegal.identifier.java'}
          },
          match: '(\\.)\\s*([0-9][\\w$]*)'
        }
      ]
    },
    record: {
      begin: '(?=\\w?[\\w\\s]*\\b(?:record)\\s+[\\w$]+)',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.class.end.bracket.curly.java'}
      },
      name: 'meta.record.java',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#comments'},
        {
          captures: {
            1: {name: 'storage.modifier.java'},
            2: {name: 'entity.name.type.record.java'}
          },
          match: '(record)\\s+([\\w$]+)',
          name: 'meta.record.identifier.java'
        },
        {include: '#record-body'}
      ]
    },
    'record-body': {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.section.class.begin.bracket.curly.java'}
      },
      end: '(?=})',
      name: 'meta.record.body.java',
      patterns: [{include: '#record-constructor'}, {include: '#class-body'}]
    },
    'record-constructor': {
      begin: '(?!new)(?=[\\w<].*\\s+)(?=([^\\(=/]|/(?!/))+(?={))',
      end: '(})|(?=;)',
      endCaptures: {
        1: {name: 'punctuation.section.method.end.bracket.curly.java'}
      },
      name: 'meta.method.java',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(\\w+)',
          beginCaptures: {1: {name: 'entity.name.function.java'}},
          end: '(?=\\s*{)',
          name: 'meta.method.identifier.java',
          patterns: [{include: '#comments'}]
        },
        {include: '#comments'},
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.method.begin.bracket.curly.java'}
          },
          contentName: 'meta.method.body.java',
          end: '(?=})',
          patterns: [{include: '#code'}]
        }
      ]
    },
    'static-initializer': {
      patterns: [
        {include: '#anonymous-block-and-instance-initializer'},
        {match: 'static', name: 'storage.modifier.java'}
      ]
    },
    'storage-modifiers': {
      match:
        '\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient|volatile|default|strictfp)\\b',
      name: 'storage.modifier.java'
    },
    'string-import': {
      begin: '<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.java'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.java'}},
      name: 'string.quoted.double.import.java',
      patterns: [
        {match: '\\.', name: 'constant.character.escape.java'},
        {match: '&[a-z]+;', name: 'constant.character.escape.ash'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.java'}},
          name: 'string.quoted.double.java',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.java'},
            {match: '&[a-z]+;', name: 'constant.character.escape.ash'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.java'}},
          name: 'string.quoted.single.java',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.java'},
            {match: '&[a-z]+;', name: 'constant.character.escape.ash'}
          ]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.java'}},
          name: 'string.quoted.single.template.ash',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.java'},
            {
              begin: '\\{',
              beginCaptures: {0: {name: 'constant.character.escape.java'}},
              end: '\\}',
              endCaptures: {0: {name: 'constant.character.escape.java'}},
              patterns: [{include: '#code'}]
            },
            {match: '&[a-z]+;', name: 'constant.character.escape.ash'}
          ]
        }
      ]
    },
    throws: {
      begin: 'throws',
      beginCaptures: {0: {name: 'storage.modifier.java'}},
      end: '(?={|;)',
      name: 'meta.throwables.java',
      patterns: [
        {match: ',', name: 'punctuation.separator.delimiter.java'},
        {match: '[a-zA-Z$_][\\.a-zA-Z0-9$_]*', name: 'storage.type.java'}
      ]
    },
    'try-catch-finally': {
      patterns: [
        {
          begin: '\\btry\\b',
          beginCaptures: {0: {name: 'keyword.control.try.java'}},
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.try.end.bracket.curly.java'}
          },
          name: 'meta.try.java',
          patterns: [
            {
              begin: '\\(',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.try.resources.begin.bracket.round.java'
                }
              },
              end: '\\)',
              endCaptures: {
                0: {
                  name: 'punctuation.section.try.resources.end.bracket.round.java'
                }
              },
              name: 'meta.try.resources.java',
              patterns: [{include: '#code'}]
            },
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.try.begin.bracket.curly.java'}
              },
              contentName: 'meta.try.body.java',
              end: '(?=})',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {
          begin: '\\b(catch)\\b',
          beginCaptures: {1: {name: 'keyword.control.catch.java'}},
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.catch.end.bracket.curly.java'}
          },
          name: 'meta.catch.java',
          patterns: [
            {include: '#comments'},
            {
              begin: '\\(',
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.parameters.begin.bracket.round.java'
                }
              },
              contentName: 'meta.catch.parameters.java',
              end: '\\)',
              endCaptures: {
                0: {
                  name: 'punctuation.definition.parameters.end.bracket.round.java'
                }
              },
              patterns: [
                {include: '#comments'},
                {include: '#storage-modifiers'},
                {
                  begin: '[a-zA-Z$_][\\.a-zA-Z0-9$_]*',
                  beginCaptures: {0: {name: 'storage.type.java'}},
                  end: '(\\|)|(?=\\))',
                  endCaptures: {1: {name: 'punctuation.catch.separator.java'}},
                  patterns: [
                    {include: '#comments'},
                    {
                      captures: {0: {name: 'variable.parameter.java'}},
                      match: '\\w+'
                    }
                  ]
                }
              ]
            },
            {
              begin: '{',
              beginCaptures: {
                0: {name: 'punctuation.section.catch.begin.bracket.curly.java'}
              },
              contentName: 'meta.catch.body.java',
              end: '(?=})',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {
          begin: '\\bfinally\\b',
          beginCaptures: {0: {name: 'keyword.control.finally.java'}},
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.finally.end.bracket.curly.java'}
          },
          name: 'meta.finally.java',
          patterns: [
            {
              begin: '{',
              beginCaptures: {
                0: {
                  name: 'punctuation.section.finally.begin.bracket.curly.java'
                }
              },
              contentName: 'meta.finally.body.java',
              end: '(?=})',
              patterns: [{include: '#code'}]
            }
          ]
        }
      ]
    },
    variables: {
      begin:
        '(?x)\n(?=\n  (\n    \\b(void|boolean|byte|char|short|int|float|long|double)\\b\n    |\n    (?>(\\w+\\.)*[A-Z_]+\\w*) # e.g. `javax.ws.rs.Response`, or `String`\n  )\n  \\s*\n  (\n    <[\\w<>,\\.?\\s\\[\\]]*> # e.g. `HashMap<Integer, String>`, or `List<java.lang.String>`\n  )?\n  \\s*\n  (\n    (\\[\\])* # int[][]\n  )?\n  \\s+\n  [A-Za-z_$][\\w$]* # At least one identifier after space\n  ([\\w\\[\\],$][\\w\\[\\],\\s]*)? # possibly primitive array or additional identifiers\n  \\s*(=|:|;)\n)',
      end: '(?=\\=|:|;)',
      name: 'meta.definition.variable.java',
      patterns: [
        {
          captures: {1: {name: 'variable.other.definition.java'}},
          match: '([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(;|:|=|,))'
        },
        {include: '#all-types'},
        {include: '#code'}
      ]
    },
    'variables-local': {
      begin: '(?=\\b(var)\\b\\s+[A-Za-z_$][\\w$]*\\s*(=|:|;))',
      end: '(?=\\=|:|;)',
      name: 'meta.definition.variable.local.java',
      patterns: [
        {match: '\\bvar\\b', name: 'storage.type.local.java'},
        {
          captures: {1: {name: 'variable.other.definition.java'}},
          match: '([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(=|:|;))'
        },
        {include: '#code'}
      ]
    }
  },
  scopeName: 'source.ash'
}

export default grammar
