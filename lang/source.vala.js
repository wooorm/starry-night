// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/technosophos/Vala-TMBundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vala', '.vapi'],
  names: ['vala'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.other.using.vala'},
        2: {name: 'storage.modifier.using.vala'},
        3: {name: 'punctuation.terminator.vala'}
      },
      match: '^\\s*(using)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.using.vala'
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
            1: {name: 'storage.type.annotation.vala'},
            2: {name: 'punctuation.definition.annotation-arguments.begin.vala'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.annotation-arguments.end.vala'}
          },
          name: 'meta.declaration.annotation.vala',
          patterns: [
            {
              captures: {
                1: {name: 'constant.other.key.vala'},
                2: {name: 'keyword.operator.assignment.vala'}
              },
              match: '(\\w*)\\s*(=)'
            },
            {include: '#code'},
            {match: ',', name: 'punctuation.seperator.property.vala'}
          ]
        },
        {match: '@\\w*', name: 'storage.type.annotation.vala'}
      ]
    },
    'anonymous-classes-and-new': {
      begin: '\\bnew\\b',
      beginCaptures: {0: {name: 'keyword.control.new.vala'}},
      end: '(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)',
      patterns: [
        {
          begin: '(\\w+)\\s*(?=\\[)',
          beginCaptures: {1: {name: 'storage.type.vala'}},
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
              beginCaptures: {1: {name: 'storage.type.vala'}},
              end: '\\)',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {
          begin: '{',
          end: '}',
          name: 'meta.inner-class.vala',
          patterns: [{include: '#class-body'}]
        }
      ]
    },
    assertions: {
      patterns: [
        {
          begin: '\\b(assert|requires|ensures)\\s',
          beginCaptures: {1: {name: 'keyword.control.assert.vala'}},
          end: '$',
          name: 'meta.declaration.assertion.vala',
          patterns: [
            {
              match: ':',
              name: 'keyword.operator.assert.expression-seperator.vala'
            },
            {include: '#code'}
          ]
        }
      ]
    },
    class: {
      begin:
        '(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum|struct|namespace)\\s+\\w+)',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.class.end.vala'}},
      name: 'meta.class.vala',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#comments'},
        {
          captures: {
            1: {name: 'storage.modifier.vala'},
            2: {name: 'entity.name.type.class.vala'}
          },
          match: '(class|(?:@)?interface|enum|struct|namespace)\\s+([\\w\\.]+)',
          name: 'meta.class.identifier.vala'
        },
        {
          begin: ':',
          beginCaptures: {0: {name: 'storage.modifier.extends.vala'}},
          end: '(?={|,)',
          name: 'meta.definition.class.inherited.classes.vala',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '(,)\\s',
          beginCaptures: {1: {name: 'storage.modifier.implements.vala'}},
          end: '(?=\\{)',
          name: 'meta.definition.class.implemented.interfaces.vala',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.class.body.vala',
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
        {include: '#anonymous-classes-and-new'},
        {include: '#keywords'},
        {include: '#storage-modifiers'},
        {include: '#strings'},
        {include: '#all-types'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.vala'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.vala'
        },
        {include: 'text.html.javadoc'},
        {include: '#comments-inline'}
      ]
    },
    'comments-inline': {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.vala'}},
          end: '\\*/',
          name: 'comment.block.vala'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.vala'},
            2: {name: 'punctuation.definition.comment.vala'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    'constants-and-special-vars': {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.vala'},
        {match: '\\b(this|base)\\b', name: 'variable.language.vala'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.vala'
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.vala'}},
          match: '(\\.)?\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b',
          name: 'constant.other.vala'
        }
      ]
    },
    enums: {
      begin: '^(?=\\s*[A-Z0-9_]+\\s*({|\\(|,))',
      end: '(?=;|})',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {0: {name: 'constant.other.enum.vala'}},
          end: '(?=,|;|})',
          name: 'meta.enum.vala',
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
          name: 'keyword.control.catch-exception.vala'
        },
        {match: '\\?|:|\\?\\?', name: 'keyword.control.vala'},
        {
          match:
            '\\b(return|break|case|continue|default|do|while|for|foreach|switch|if|else|in|yield|get|set|value)\\b',
          name: 'keyword.control.vala'
        },
        {match: '\\b(typeof|is|as)\\b', name: 'keyword.operator.vala'},
        {
          match: '(==|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.vala'
        },
        {match: '(=)', name: 'keyword.operator.assignment.vala'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.vala'
        },
        {
          match: '(\\-|\\+|\\*|\\/|%)',
          name: 'keyword.operator.arithmetic.vala'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.vala'},
        {
          match: '(?<=\\S)\\.(?=\\S)',
          name: 'keyword.operator.dereference.vala'
        },
        {match: ';', name: 'punctuation.terminator.vala'},
        {match: '(owned|unowned)', name: 'keyword.operator.ownership'}
      ]
    },
    methods: {
      begin: '(?!new)(?=\\w.*\\s+)(?=[^=]+\\()',
      end: '}|(?=;)',
      name: 'meta.method.vala',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '([\\~\\w\\.]+)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.vala'}},
          end: '\\)',
          name: 'meta.method.identifier.vala',
          patterns: [{include: '#parameters'}]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\w+\\s*\\()',
          name: 'meta.method.return-type.vala',
          patterns: [{include: '#all-types'}]
        },
        {include: '#throws'},
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.vala',
          patterns: [{include: '#code'}]
        }
      ]
    },
    namespace: {
      begin: '^(?=\\s*[A-Z0-9_]+\\s*({|\\(|,))',
      end: '(?=;|})',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {0: {name: 'constant.other.namespace.vala'}},
          end: '(?=,|;|})',
          name: 'meta.namespace.vala',
          patterns: [
            {include: '#parens'},
            {begin: '{', end: '}', patterns: [{include: '#code'}]}
          ]
        }
      ]
    },
    'object-types': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,\\?<\\[\\]]',
          name: 'storage.type.generic.vala',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,\\[\\]<]',
              name: 'storage.type.generic.vala'
            }
          ]
        },
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)(?=\\[)',
          end: '(?=[^\\]\\s])',
          name: 'storage.type.object.array.vala',
          patterns: [{begin: '\\[', end: '\\]', patterns: [{include: '#code'}]}]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.vala'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*\\b',
          name: 'storage.type.vala'
        }
      ]
    },
    'object-types-inherited': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,<]',
          name: 'entity.other.inherited-class.vala',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,<]',
              name: 'storage.type.generic.vala'
            }
          ]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.vala'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*',
          name: 'entity.other.inherited-class.vala'
        }
      ]
    },
    parameters: {
      patterns: [
        {match: 'final', name: 'storage.modifier.vala'},
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'},
        {match: '\\w+', name: 'variable.parameter.vala'}
      ]
    },
    parens: {begin: '\\(', end: '\\)', patterns: [{include: '#code'}]},
    'primitive-arrays': {
      patterns: [
        {
          match:
            '\\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|int8|int16|int32|int64|uint8|uint16|uint32|uint64)(\\[\\])*\\b',
          name: 'storage.type.primitive.array.vala'
        }
      ]
    },
    'primitive-types': {
      patterns: [
        {
          match:
            '\\b(?:var|bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64)\\b',
          name: 'storage.type.primitive.vala'
        }
      ]
    },
    'storage-modifiers': {
      captures: {1: {name: 'storage.modifier.vala'}},
      match:
        '\\b(public|private|protected|internal|static|final|sealed|virtual|override|abstract|readonly|volatile|dynamic|async|unsafe|out|ref|weak|owned|unowned|const)\\b'
    },
    strings: {
      patterns: [
        {
          begin: '@"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vala'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vala'}},
          name: 'string.quoted.interpolated.vala',
          patterns: [
            {
              match:
                '\\\\.|%[\\w\\.\\-]+|\\$(\\w+|\\([\\w\\s\\+\\-\\*\\/]+\\))',
              name: 'constant.character.escape.vala'
            }
          ]
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vala'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vala'}},
          name: 'string.quoted.double.vala',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.vala'},
            {match: '%[\\w\\.\\-]+', name: 'constant.character.escape.vala'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vala'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.vala'}},
          name: 'string.quoted.single.vala',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.vala'}]
        },
        {
          begin: '"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vala'}
          },
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vala'}},
          name: 'string.quoted.triple.vala',
          patterns: [
            {match: '%[\\w\\.\\-]+', name: 'constant.character.escape.vala'}
          ]
        }
      ]
    },
    throws: {
      begin: 'throws',
      beginCaptures: {0: {name: 'storage.modifier.vala'}},
      end: '(?={|;)',
      name: 'meta.throwables.vala',
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
  scopeName: 'source.vala'
}

export default grammar
