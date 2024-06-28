// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c', 'source.c.platform', 'source.objc.platform'],
  extensions: [],
  names: ['objective-c', 'obj-c', 'objc', 'objectivec'],
  patterns: [
    {
      begin:
        '((@)(interface|protocol))(?!.+;)\\s+([A-Za-z_][A-Za-z0-9_]*)\\s*((:)(?:\\s*)([A-Za-z][A-Za-z0-9]*))?(\\s|\\n)?',
      captures: {
        1: {name: 'storage.type.objc'},
        2: {name: 'punctuation.definition.storage.type.objc'},
        4: {name: 'entity.name.type.objc'},
        6: {name: 'punctuation.definition.entity.other.inherited-class.objc'},
        7: {name: 'entity.other.inherited-class.objc'},
        8: {name: 'meta.divider.objc'},
        9: {name: 'meta.inherited-class.objc'}
      },
      contentName: 'meta.scope.interface.objc',
      end: '((@)end)\\b',
      name: 'meta.interface-or-protocol.objc',
      patterns: [{include: '#interface_innards'}]
    },
    {
      begin:
        '((@)(implementation))\\s+([A-Za-z_][A-Za-z0-9_]*)\\s*(?::\\s*([A-Za-z][A-Za-z0-9]*))?',
      captures: {
        1: {name: 'storage.type.objc'},
        2: {name: 'punctuation.definition.storage.type.objc'},
        4: {name: 'entity.name.type.objc'},
        5: {name: 'entity.other.inherited-class.objc'}
      },
      contentName: 'meta.scope.implementation.objc',
      end: '((@)end)\\b',
      name: 'meta.implementation.objc',
      patterns: [{include: '#implementation_innards'}]
    },
    {
      applyEndPatternLast: true,
      begin: '(?=@")',
      end: '(?=\\S)',
      patterns: [
        {
          begin: '@?"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.objc'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.objc'}},
          name: 'string.quoted.double.objc',
          patterns: [
            {include: 'source.c#string_escaped_char'},
            {
              match:
                "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                          # flags\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t[@]                                  # conversion type\n    \t\t\t\t\t",
              name: 'constant.other.placeholder.objc'
            },
            {include: 'source.c#string_placeholder'}
          ]
        }
      ]
    },
    {
      begin: '\\b(id)\\s*(?=<)',
      beginCaptures: {1: {name: 'storage.type.objc'}},
      end: '(?<=>)',
      name: 'meta.id-with-protocol.objc',
      patterns: [{include: '#protocol_list'}]
    },
    {
      match: '\\b(NS_DURING|NS_HANDLER|NS_ENDHANDLER)\\b',
      name: 'keyword.control.macro.objc'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.objc'}},
      match: '(@)(try|catch|finally|throw)\\b',
      name: 'keyword.control.exception.objc'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.objc'}},
      match: '(@)(synchronized)\\b',
      name: 'keyword.control.synchronize.objc'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.objc'}},
      match: '(@)(required|optional)\\b',
      name: 'keyword.control.protocol-specification.objc'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.objc'}},
      match: '(@)(defs|encode)\\b',
      name: 'keyword.other.objc'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.type.objc'}},
      match: '(@)(class|protocol)\\b',
      name: 'storage.type.objc'
    },
    {
      begin: '((@)selector)\\s*(\\()',
      beginCaptures: {
        1: {name: 'storage.type.objc'},
        2: {name: 'punctuation.definition.storage.type.objc'},
        3: {name: 'punctuation.definition.storage.type.objc'}
      },
      contentName: 'meta.selector.method-name.objc',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.storage.type.objc'}},
      name: 'meta.selector.objc',
      patterns: [
        {
          captures: {1: {name: 'punctuation.separator.arguments.objc'}},
          match: '\\b(?:[a-zA-Z_:][\\w]*)+',
          name: 'support.function.any-method.name-of-parameter.objc'
        }
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.modifier.objc'}},
      match: '(@)(synchronized|public|package|private|protected)\\b',
      name: 'storage.modifier.objc'
    },
    {match: '\\b(YES|NO|Nil|nil)\\b', name: 'constant.language.objc'},
    {include: 'source.objc.platform'},
    {include: 'source.objc.platform#functions'},
    {include: 'source.c'},
    {include: '#bracketed_content'}
  ],
  repository: {
    bracketed_content: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.objc'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.scope.end.objc'}},
      name: 'meta.bracketed.objc',
      patterns: [
        {
          begin:
            '(?=predicateWithFormat:)(?<=NSPredicate )(predicateWithFormat:)',
          beginCaptures: {
            1: {name: 'support.function.any-method.objc'},
            2: {name: 'punctuation.separator.arguments.objc'}
          },
          end: '(?=\\])',
          name: 'meta.function-call.predicate.objc',
          patterns: [
            {
              captures: {1: {name: 'punctuation.separator.arguments.objc'}},
              match: '\\bargument(Array|s)(:)',
              name: 'support.function.any-method.name-of-parameter.objc'
            },
            {
              captures: {1: {name: 'punctuation.separator.arguments.objc'}},
              match: '\\b\\w+(:)',
              name: 'invalid.illegal.unknown-method.objc'
            },
            {
              begin: '@"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.objc'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.objc'}
              },
              name: 'string.quoted.double.objc',
              patterns: [
                {
                  match: '\\b(AND|OR|NOT|IN)\\b',
                  name: 'keyword.operator.logical.predicate.cocoa'
                },
                {
                  match: '\\b(ALL|ANY|SOME|NONE)\\b',
                  name: 'constant.language.predicate.cocoa'
                },
                {
                  match:
                    '\\b(NULL|NIL|SELF|TRUE|YES|FALSE|NO|FIRST|LAST|SIZE)\\b',
                  name: 'constant.language.predicate.cocoa'
                },
                {
                  match: '\\b(MATCHES|CONTAINS|BEGINSWITH|ENDSWITH|BETWEEN)\\b',
                  name: 'keyword.operator.comparison.predicate.cocoa'
                },
                {
                  match: '\\bC(ASEINSENSITIVE|I)\\b',
                  name: 'keyword.other.modifier.predicate.cocoa'
                },
                {
                  match:
                    '\\b(ANYKEY|SUBQUERY|CAST|TRUEPREDICATE|FALSEPREDICATE)\\b',
                  name: 'keyword.other.predicate.cocoa'
                },
                {
                  match:
                    '\\\\(\\\\|[abefnrtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-zA-Z0-9]+)',
                  name: 'constant.character.escape.objc'
                },
                {match: '\\\\.', name: 'invalid.illegal.unknown-escape.objc'}
              ]
            },
            {include: '#special_variables'},
            {include: '#c_functions'},
            {include: '$base'}
          ]
        },
        {
          begin: '(?=\\w)(?<=[\\w\\]\\s)"]\\s)(\\w+(?:(:)|(?=\\])))',
          beginCaptures: {
            1: {name: 'support.function.any-method.objc'},
            2: {name: 'punctuation.separator.arguments.objc'}
          },
          end: '(?=\\])',
          name: 'meta.function-call.objc',
          patterns: [
            {
              captures: {1: {name: 'punctuation.separator.arguments.objc'}},
              match: '\\b\\w+(:)',
              name: 'support.function.any-method.name-of-parameter.objc'
            },
            {include: '#special_variables'},
            {include: '#c_functions'},
            {include: '$base'}
          ]
        },
        {include: '#special_variables'},
        {include: '#c_functions'},
        {include: '$self'}
      ]
    },
    c_functions: {
      patterns: [
        {include: 'source.c.platform#functions'},
        {
          captures: {
            1: {name: 'punctuation.whitespace.function-call.leading.c'},
            2: {name: 'support.function.any-method.c'},
            3: {name: 'punctuation.definition.parameters.c'}
          },
          match:
            '(?x) (?: (?= \\s )  (?:(?<=else|new|return) | (?<!\\w)) (\\s+))?\n            \t\t\t(\\b \n            \t\t\t\t(?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b | :: )++                  # actual name\n            \t\t\t)\n            \t\t\t \\s*(\\()',
          name: 'meta.function-call.c'
        }
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.objc'}},
          end: '\\*/',
          name: 'comment.block.objc'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.objc'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.objc'}},
              end: '\\n',
              name: 'comment.line.double-slash.objc',
              patterns: [
                {
                  match: '(?>\\\\\\s*\\n)',
                  name: 'punctuation.separator.continuation.objc'
                }
              ]
            }
          ]
        }
      ]
    },
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b.*$',
      patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
    },
    implementation_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-implementation'},
        {include: '#preprocessor-rule-disabled-implementation'},
        {include: '#preprocessor-rule-other-implementation'},
        {include: '#property_directive'},
        {include: '#special_variables'},
        {include: '#method_super'},
        {include: '$base'}
      ]
    },
    interface_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-interface'},
        {include: '#preprocessor-rule-disabled-interface'},
        {include: '#preprocessor-rule-other-interface'},
        {include: '#properties'},
        {include: '#protocol_list'},
        {include: '#method'},
        {include: '$base'}
      ]
    },
    method: {
      begin: '^(-|\\+)\\s*',
      end: '(?=\\{|#)|;',
      name: 'meta.function.objc',
      patterns: [
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'punctuation.definition.type.begin.objc'}},
          end: '(\\))\\s*(\\w+\\b)',
          endCaptures: {
            1: {name: 'punctuation.definition.type.end.objc'},
            2: {name: 'entity.name.function.objc'}
          },
          name: 'meta.return-type.objc',
          patterns: [
            {include: '#protocol_list'},
            {include: '#protocol_type_qualifier'},
            {include: '$base'}
          ]
        },
        {
          match: '\\b\\w+(?=:)',
          name: 'entity.name.function.name-of-parameter.objc'
        },
        {
          begin: '((:))\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.name-of-parameter.objc'},
            2: {name: 'punctuation.separator.arguments.objc'},
            3: {name: 'punctuation.definition.type.begin.objc'}
          },
          end: '(\\))\\s*(\\w+\\b)?',
          endCaptures: {
            1: {name: 'punctuation.definition.type.end.objc'},
            2: {name: 'variable.parameter.function.objc'}
          },
          name: 'meta.argument-type.objc',
          patterns: [
            {include: '#protocol_list'},
            {include: '#protocol_type_qualifier'},
            {include: '$base'}
          ]
        },
        {include: '#comment'}
      ]
    },
    method_super: {
      begin: '^(?=-|\\+)',
      end: '(?<=\\})|(?=#)',
      name: 'meta.function-with-body.objc',
      patterns: [{include: '#method'}, {include: '$base'}]
    },
    'pragma-mark': {
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.pragma.c'},
        3: {name: 'meta.toc-list.pragma-mark.c'}
      },
      match: '^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))',
      name: 'meta.section'
    },
    'preprocessor-rule-disabled-implementation': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#interface_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))',
          name: 'comment.block.preprocessor.if-branch.c',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-disabled-interface': {
      begin: '^\\s*(#(if)\\s+(0)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          end: '(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#interface_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))',
          name: 'comment.block.preprocessor.if-branch.c',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        }
      ]
    },
    'preprocessor-rule-enabled-implementation': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          contentName: 'comment.block.preprocessor.else-branch.c',
          end: '(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#implementation_innards'}]
        }
      ]
    },
    'preprocessor-rule-enabled-interface': {
      begin: '^\\s*(#(if)\\s+(0*1)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.if.c'},
        3: {name: 'constant.numeric.preprocessor.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.c'},
            2: {name: 'keyword.control.import.else.c'}
          },
          contentName: 'comment.block.preprocessor.else-branch.c',
          end: '(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#disabled'}, {include: '#pragma-mark'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))',
          patterns: [{include: '#interface_innards'}]
        }
      ]
    },
    'preprocessor-rule-other-implementation': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*?(?:(?=(?://|/\\*))|$)',
      patterns: [{include: '#implementation_innards'}]
    },
    'preprocessor-rule-other-interface': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.c'},
        2: {name: 'keyword.control.import.c'}
      },
      end: '^\\s*(#\\s*(endif)\\b).*?(?:(?=(?://|/\\*))|$)',
      patterns: [{include: '#interface_innards'}]
    },
    properties: {
      patterns: [
        {
          begin: '((@)property)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.other.property.objc'},
            2: {name: 'punctuation.definition.keyword.objc'},
            3: {name: 'punctuation.section.scope.begin.objc'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.scope.end.objc'}},
          name: 'meta.property-with-attributes.objc',
          patterns: [
            {
              match:
                '\\b(getter|setter|readonly|readwrite|assign|retain|copy|atomic|nonatomic|strong|weak|nullable|nonnull|class)\\b',
              name: 'keyword.other.property.attribute'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.property.objc'},
            2: {name: 'punctuation.definition.keyword.objc'}
          },
          match: '((@)property)\\b',
          name: 'meta.property.objc'
        }
      ]
    },
    property_directive: {
      captures: {1: {name: 'punctuation.definition.keyword.objc'}},
      match: '(@)(dynamic|synthesize)\\b',
      name: 'keyword.other.property.directive.objc'
    },
    protocol_list: {
      begin: '(<)',
      beginCaptures: {1: {name: 'punctuation.section.scope.begin.objc'}},
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.section.scope.end.objc'}},
      name: 'meta.protocol-list.objc',
      patterns: [{include: 'source.objc.platform#protocols'}]
    },
    protocol_type_qualifier: {
      match: '\\b(in|out|inout|oneway|bycopy|byref)\\b',
      name: 'storage.modifier.protocol.objc'
    },
    special_variables: {
      patterns: [
        {match: '\\b_cmd\\b', name: 'variable.other.selector.objc'},
        {match: '\\b(self|super)\\b', name: 'variable.language.objc'}
      ]
    }
  },
  scopeName: 'source.objc'
}

export default grammar
