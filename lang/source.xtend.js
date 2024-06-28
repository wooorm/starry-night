// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.xtend'],
  names: ['xtend'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.other.package.xtend'},
        2: {name: 'entity.name.package.xtend'},
        3: {name: 'punctuation.terminator.xtend'}
      },
      match: '^\\s*(package)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.package.xtend'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.xtend'},
        2: {name: 'entity.name.package.xtend'},
        3: {name: 'punctuation.terminator.xtend'}
      },
      match: '^\\s*(import)\\s+(?:\\s*([^ ;$]+)\\s*(;)?)?$',
      name: 'meta.import.xtend'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.xtend'},
        2: {name: 'keyword.other.static.xtend'},
        3: {name: 'entity.name.package.xtend'},
        4: {name: 'punctuation.terminator.xtend'}
      },
      match: '^\\s*(import)\\s+(static)\\s+(?:\\s*([^ ;$]+)\\s*(;)?)?$',
      name: 'meta.import.static.xtend'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.xtend'},
        2: {name: 'keyword.other.static.xtend'},
        3: {name: 'variable.language.extension.xtend'},
        4: {name: 'entity.name.package.xtend'},
        5: {name: 'punctuation.terminator.xtend'}
      },
      match:
        '^\\s*(import)\\s+(static)\\s+(extension)\\s+(?:\\s*([^ ;$]+)\\s*(;)?)?$',
      name: 'meta.import.static.extension.xtend'
    },
    {include: '#code'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'}
      ]
    },
    annotations: {
      patterns: [
        {
          begin: '(@[^ (]+)(\\()',
          beginCaptures: {
            1: {name: 'meta.tag.annotation.name.xtend'},
            2: {name: 'meta.tag.annotation-arguments.begin.xtend'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'meta.tag.annotation-arguments.end.xtend'}},
          name: 'meta.tag.annotation.xtend',
          patterns: [
            {
              captures: {
                1: {name: 'constant.other.key.xtend'},
                2: {name: 'keyword.operator.assignment.xtend'}
              },
              match: '(\\w*)\\s*(=)'
            },
            {include: '#code'},
            {match: ',', name: 'punctuation.seperator.property.xtend'}
          ]
        },
        {match: '@\\w*', name: 'meta.tag.annotation.xtend'}
      ]
    },
    assertions: {
      patterns: [
        {
          begin: '\\b(assert)\\s',
          beginCaptures: {1: {name: 'keyword.control.assert.xtend'}},
          end: '$',
          name: 'meta.declaration.assertion.xtend',
          patterns: [
            {
              match: ':',
              name: 'keyword.operator.assert.expression-seperator.xtend'
            },
            {include: '#code'}
          ]
        }
      ]
    },
    class: {
      begin: '(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum)\\s+\\w+)',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.class.end.xtend'}},
      name: 'meta.class.xtend',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#comments'},
        {
          captures: {
            1: {name: 'storage.modifier.xtend'},
            2: {name: 'entity.name.type.class.xtend'}
          },
          match: '(class|(?:@)?interface|enum)\\s+(\\w+)',
          name: 'meta.class.identifier.xtend'
        },
        {
          begin: 'extends',
          beginCaptures: {0: {name: 'storage.modifier.extends.xtend'}},
          end: '(?={|implements)',
          name: 'meta.definition.class.inherited.classes.xtend',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '(implements)\\s',
          beginCaptures: {1: {name: 'storage.modifier.implements.xtend'}},
          end: '(?=\\s*extends|\\{)',
          name: 'meta.definition.class.implemented.interfaces.xtend',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.class.body.xtend',
          patterns: [{include: '#class-body'}]
        }
      ]
    },
    'class-body': {
      patterns: [
        {include: '#comments'},
        {include: '#class'},
        {include: '#enums'},
        {include: '#methods'},
        {include: '#annotations'},
        {include: '#storage-modifiers'},
        {include: '#code'}
      ]
    },
    code: {
      patterns: [
        {include: '#comments'},
        {include: '#class'},
        {begin: '{', end: '}', patterns: [{include: '#code'}]},
        {include: '#assertions'},
        {include: '#parens'},
        {include: '#constants-and-special-vars'},
        {include: '#keywords'},
        {include: '#storage-modifiers'},
        {include: '#strings'},
        {include: '#all-types'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.xtend'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.xtend'
        },
        {include: 'text.html.javadoc'},
        {include: '#comments-inline'}
      ]
    },
    'comments-inline': {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.xtend'}},
          end: '\\*/',
          name: 'comment.block.xtend'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.xtend'},
            2: {name: 'punctuation.definition.comment.xtend'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    'constants-and-special-vars': {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.xtend'},
        {match: '\\b(this|new|super|it)\\b', name: 'variable.language.xtend'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.xtend'
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.xtend'}},
          match: '(\\.)?\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b',
          name: 'constant.other.xtend'
        }
      ]
    },
    enums: {
      begin: '^(?=\\s*[A-Z0-9_]+\\s*({|\\(|,))',
      end: '(?=;|})',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {0: {name: 'constant.other.enum.xtend'}},
          end: '(?=,|;|})',
          name: 'meta.enum.xtend',
          patterns: [
            {include: '#parens'},
            {begin: '{', end: '}', patterns: [{include: '#class-body'}]}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(try|catch|finally|throw)\\b',
          name: 'keyword.control.catch-exception.xtend'
        },
        {match: '\\?|:', name: 'keyword.control.xtend'},
        {
          match:
            '\\b(return|break|case|continue|default|do|while|for|switch|if|else)\\b',
          name: 'keyword.control.xtend'
        },
        {match: '\\b(instanceof)\\b', name: 'keyword.operator.xtend'},
        {
          match: '(==|===|!==|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.xtend'
        },
        {match: '(=)', name: 'keyword.operator.assignment.xtend'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.xtend'
        },
        {
          match: '(\\-|\\+|\\*|\\/|%)',
          name: 'keyword.operator.arithmetic.xtend'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.xtend'},
        {
          match: '(?<=\\S)\\.(?=\\S)',
          name: 'keyword.operator.dereference.xtend'
        },
        {match: ';', name: 'punctuation.terminator.xtend'}
      ]
    },
    lambdas: {
      patterns: [
        {match: '(\\[)(?:\\s)', name: 'meta.tag.lambda-start.xtend'},
        {match: '(?:\\s)(\\[)', name: 'meta.tag.lambda-end.xtend'}
      ]
    },
    methods: {
      begin: '(def|override)\\s+(?!new)(?=\\w.*\\s+)(?=[^=]+\\()',
      beginCaptures: {1: {name: 'entity.name.function.keyword.xtend'}},
      end: '}|(?=;)',
      name: 'meta.method.xtend',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(\\w+)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.xtend'}},
          end: '\\)',
          name: 'meta.method.identifier.xtend',
          patterns: [{include: '#parameters'}]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\w+\\s*\\()',
          name: 'meta.method.return-type.xtend',
          patterns: [{include: '#all-types'}]
        },
        {include: '#throws'},
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.xtend',
          patterns: [{include: '#code'}]
        }
      ]
    },
    'object-types': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,\\?<\\[\\]]',
          name: 'storage.type.generic.xtend',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,\\[\\]<]',
              name: 'storage.type.generic.xtend'
            }
          ]
        },
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)(?=\\[)',
          end: '(?=[^\\]\\s])',
          name: 'storage.type.object.array.xtend',
          patterns: [{begin: '\\[', end: '\\]', patterns: [{include: '#code'}]}]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.xtend'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*\\b',
          name: 'entity.name.type.class.xtend'
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.xtend'}},
          match: '^\\s*(\\.)(?=\\w+\\b)',
          name: 'storage.type.xtend'
        }
      ]
    },
    'object-types-inherited': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,<]',
          name: 'entity.other.inherited-class.xtend',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,<]',
              name: 'storage.type.generic.xtend'
            }
          ]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.xtend'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*',
          name: 'entity.other.inherited-class.xtend'
        }
      ]
    },
    parameters: {
      patterns: [
        {match: '(final|var|val)', name: 'storage.modifier.xtend'},
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'},
        {match: '\\w+', name: 'variable.parameter.xtend'}
      ]
    },
    parens: {begin: '\\(', end: '\\)', patterns: [{include: '#code'}]},
    'primitive-arrays': {
      patterns: [
        {
          match:
            '\\b(?:void|boolean|byte|char|short|int|float|long|double)(\\[\\])*\\b',
          name: 'storage.type.primitive.array.xtend'
        }
      ]
    },
    'primitive-types': {
      patterns: [
        {
          match: '\\b(?:void|boolean|byte|char|short|int|float|long|double)\\b',
          name: 'storage.type.primitive.xtend'
        }
      ]
    },
    'storage-modifiers': {
      captures: {1: {name: 'storage.modifier.xtend'}},
      match:
        '\\b(public|private|protected|package|static|var|val|final|native|synchronized|abstract|threadsafe|transient)\\b'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xtend'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.xtend'}},
          name: 'string.quoted.double.xtend',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.xtend'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xtend'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.xtend'}},
          name: 'string.quoted.single.xtend',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.xtend'}]
        }
      ]
    },
    throws: {
      begin: 'throws',
      beginCaptures: {0: {name: 'storage.modifier.xtend'}},
      end: '(?={|;)',
      name: 'meta.throwables.xtend',
      patterns: [{include: '#object-types'}]
    },
    values: {
      patterns: [
        {include: '#strings'},
        {include: '#object-types'},
        {include: '#constants-and-special-vars'}
      ]
    }
  },
  scopeName: 'source.xtend'
}

export default grammar
