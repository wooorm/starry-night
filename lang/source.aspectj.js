// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.aj'],
  names: ['aspectj'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.other.package.java'},
        2: {name: 'storage.modifier.package.java'},
        3: {name: 'punctuation.terminator.java'}
      },
      match: '^\\s*(package)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.package.java'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.java'},
        2: {name: 'storage.modifier.import.java'},
        3: {name: 'punctuation.terminator.java'}
      },
      match: '^\\s*(import)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.import.java'
    },
    {include: '#code'}
  ],
  repository: {
    advice: {
      begin: '(?!new)(?!.*pointcut)(?=[^=:]+\\([^\\)]*\\)[^=]*:)',
      end: '}|(?=;)',
      name: 'meta.advice.aspectj',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(around|after|before|throwing|returning)\\s*\\(',
          beginCaptures: {1: {name: 'keyword.other.advice.aspectj'}},
          end: '\\)',
          name: 'meta.method.identifier.java',
          patterns: [{include: '#parameters'}]
        },
        {
          match: '(throwing|returning)(?=\\s*:)',
          name: 'keyword.other.advice.aspectj'
        },
        {
          begin: ':',
          end: '(?={)',
          name: 'meta.advice.identifier.aspectj',
          patterns: [{include: '#pointcut-definitions'}]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\w+\\s*\\()',
          name: 'meta.method.return-type.java',
          patterns: [{include: '#all-types'}]
        },
        {include: '#throws'},
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.java',
          patterns: [{include: '#code'}]
        }
      ]
    },
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
            1: {name: 'storage.type.annotation.java'},
            2: {name: 'punctuation.definition.annotation-arguments.begin.java'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.annotation-arguments.end.java'}
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
            {include: '#code'},
            {match: ',', name: 'punctuation.seperator.property.java'}
          ]
        },
        {match: '@\\w*', name: 'storage.type.annotation.java'}
      ]
    },
    'anonymous-classes-and-new': {
      begin: '\\bnew\\b',
      beginCaptures: {0: {name: 'keyword.control.new.java'}},
      end: '(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)',
      patterns: [
        {
          begin: '(\\w+)\\s*(?=\\[)',
          beginCaptures: {1: {name: 'storage.type.java'}},
          end: '}|(?=;|\\))',
          patterns: [
            {begin: '\\[', end: '\\]', patterns: [{include: '#code'}]},
            {begin: '{', end: '(?=})', patterns: [{include: '#code'}]}
          ]
        },
        {
          begin: '(?=\\w.*\\()',
          end: '(?<=\\))',
          patterns: [
            {include: '#object-types'},
            {
              begin: '\\(',
              beginCaptures: {1: {name: 'storage.type.java'}},
              end: '\\)',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {
          begin: '{',
          end: '}',
          name: 'meta.inner-class.java',
          patterns: [{include: '#class-body'}]
        }
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
              name: 'keyword.operator.assert.expression-seperator.java'
            },
            {include: '#code'}
          ]
        }
      ]
    },
    class: {
      begin: '(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum|aspect)\\s+\\w+)',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.class.end.java'}},
      name: 'meta.class.aspectj',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#comments'},
        {
          captures: {
            1: {name: 'storage.type.java'},
            2: {name: 'entity.name.type.class.java'}
          },
          match: '(class|(?:@)?interface|enum|aspect)\\s+(\\w+)',
          name: 'meta.class.identifier.aspectj'
        },
        {
          begin: 'extends',
          beginCaptures: {0: {name: 'storage.modifier.extends.java'}},
          end: '(?={|implements)',
          name: 'meta.definition.class.inherited.classes.java',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '(implements)\\s',
          beginCaptures: {1: {name: 'storage.modifier.implements.java'}},
          end: '(?=\\s*extends|\\{)',
          name: 'meta.definition.class.implemented.interfaces.java',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.class.body.java',
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
        {include: '#pointcuts'},
        {include: '#advice'},
        {include: '#annotations'},
        {include: '#storage-modifiers'},
        {include: '#code'},
        {include: '#declare-precedence'},
        {include: '#declare-parents'},
        {include: '#declare-constructs'},
        {include: '#declare-warnings-errors'}
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
        {include: '#anonymous-classes-and-new'},
        {include: '#keywords'},
        {include: '#storage-modifiers'},
        {include: '#strings'},
        {include: '#all-types'},
        {match: '\\b(proceed)\\b', name: 'support.function.builtin.aspectj'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.java'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.java'
        },
        {include: 'text.html.javadoc'},
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
          captures: {
            1: {name: 'comment.line.double-slash.java'},
            2: {name: 'punctuation.definition.comment.java'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    'constants-and-special-vars': {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.java'},
        {match: '\\b(this|super)\\b', name: 'variable.language.java'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.java'
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.java'}},
          match: '(\\.)?\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b',
          name: 'constant.other.java'
        }
      ]
    },
    'declare-constructs': {
      begin: '(declare)\\s+(@(?:type|method|field|package|constructor))\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.declare.aspectj'},
        2: {name: 'storage.type.declare.construct.aspectj'}
      },
      end: ';',
      name: 'meta.declare.construct.aspectj',
      patterns: [
        {include: '#keywords'},
        {include: '#all-types'},
        {include: '#storage-modifiers'},
        {include: '#strings'}
      ]
    },
    'declare-parents': {
      begin: '(declare)\\s+(parents)\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.declare.aspectj'},
        2: {name: 'storage.type.declare.parents.aspectj'}
      },
      end: ';',
      name: 'meta.declare.precedence.aspectj',
      patterns: [
        {include: '#keywords'},
        {
          match: '\\b(implements|extends)\\b',
          name: 'storage.modifier.class.aspectj'
        }
      ]
    },
    'declare-precedence': {
      begin: '(declare)\\s+(precedence)\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.declare.aspectj'},
        2: {name: 'storage.type.declare.precedence.aspectj'}
      },
      end: ';',
      name: 'meta.declare.precedence.aspectj'
    },
    'declare-warnings-errors': {
      begin: '(declare)\\s+(warning|error)\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.declare.aspectj'},
        2: {name: 'storage.type.declare.alerts.aspectj'}
      },
      end: ';',
      name: 'meta.declare.alerts.aspectj',
      patterns: [{include: '#pointcut-definitions'}, {include: '#strings'}]
    },
    enums: {
      begin: '^(?=\\s*[A-Z0-9_]+\\s*({|\\(|,))',
      end: '(?=;|})',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {0: {name: 'constant.other.enum.java'}},
          end: '(?=,|;|})',
          name: 'meta.enum.java',
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
          name: 'keyword.control.catch-exception.java'
        },
        {match: '\\?|:', name: 'keyword.control.java'},
        {
          match:
            '\\b(return|break|case|continue|default|do|while|for|switch|if|else)\\b',
          name: 'keyword.control.java'
        },
        {match: '\\b(instanceof)\\b', name: 'keyword.operator.java'},
        {
          match: '(==|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.java'
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
        {
          match: '(?<=\\S)\\.(?=\\S)',
          name: 'keyword.operator.dereference.java'
        },
        {match: ';', name: 'punctuation.terminator.java'}
      ]
    },
    methods: {
      begin: '(?!new)(?!.*pointcut)(?=\\w[^=:]*\\s+)(?=[^=:]+\\()(?!.*:)',
      end: '}|(?=;)',
      name: 'meta.method.java',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '([\\w\\.]+)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.java'}},
          end: '\\)',
          name: 'meta.method.identifier.java',
          patterns: [{include: '#parameters'}]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\w+\\s*\\()',
          name: 'meta.method.return-type.java',
          patterns: [{include: '#all-types'}]
        },
        {include: '#throws'},
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.java',
          patterns: [{include: '#code'}]
        }
      ]
    },
    'object-types': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,\\?<\\[\\]]',
          name: 'storage.type.generic.java',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,\\[\\]<]',
              name: 'storage.type.generic.java'
            }
          ]
        },
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)(?=\\[)',
          end: '(?=[^\\]\\s])',
          name: 'storage.type.object.array.java',
          patterns: [{begin: '\\[', end: '\\]', patterns: [{include: '#code'}]}]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.java'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*\\b',
          name: 'storage.type.java'
        }
      ]
    },
    'object-types-inherited': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,<]',
          name: 'entity.other.inherited-class.java',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,<]',
              name: 'storage.type.generic.java'
            }
          ]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.java'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*',
          name: 'entity.other.inherited-class.java'
        }
      ]
    },
    parameters: {
      patterns: [
        {match: 'final', name: 'storage.modifier.java'},
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'},
        {match: '\\w+', name: 'variable.parameter.java'}
      ]
    },
    parens: {begin: '\\(', end: '\\)', patterns: [{include: '#code'}]},
    'pointcut-definitions': {
      patterns: [
        {include: '#keywords'},
        {include: '#all-types'},
        {
          match:
            '(@annotation|\\b(get|set|adviceexecution|execution|call|target|args|within|withincode|handler|cflow|cflowbelow|this|if|preinitialization|staticinitialization|initialization)\\b)',
          name: 'support.function.builtin.aspectj'
        }
      ]
    },
    pointcuts: {
      begin: '(?=\\w?.*\\s+)(pointcut)(?=\\s+[^=]+\\()',
      beginCaptures: {1: {name: 'storage.type.aspectj'}},
      end: ';',
      name: 'meta.pointcut.aspectj',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(\\w+)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.aspectj'}},
          end: '\\)',
          name: 'meta.pointcut.identifier.aspectj',
          patterns: [{include: '#parameters'}]
        },
        {
          begin: ':',
          end: '(?=;)',
          name: 'meta.pointcut.body.aspectj',
          patterns: [{include: '#pointcut-definitions'}]
        }
      ]
    },
    'primitive-arrays': {
      patterns: [
        {
          match:
            '\\b(?:void|boolean|byte|char|short|int|float|long|double)(\\[\\])*\\b',
          name: 'storage.type.primitive.array.java'
        }
      ]
    },
    'primitive-types': {
      patterns: [
        {
          match: '\\b(?:void|boolean|byte|char|short|int|float|long|double)\\b',
          name: 'storage.type.primitive.java'
        }
      ]
    },
    'storage-modifiers': {
      patterns: [
        {
          match:
            '\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient)\\b',
          name: 'storage.modifier.java'
        },
        {match: '\\b(privileged)\\b', name: 'storage.modifier.aspectj'}
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
          patterns: [{match: '\\\\.', name: 'constant.character.escape.java'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.java'}},
          name: 'string.quoted.single.java',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.java'}]
        }
      ]
    },
    throws: {
      begin: 'throws',
      beginCaptures: {0: {name: 'storage.modifier.java'}},
      end: '(?={|;)',
      name: 'meta.throwables.java',
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
  scopeName: 'source.aspectj'
}

export default grammar
