// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Drake53/language-jass>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  extensionsWithDot: ['.j'],
  names: ['jass', 'jass2'],
  patterns: [
    {include: '#type-declaration'},
    {include: '#globals-block'},
    {include: '#function-declaration'},
    {include: '#local-declaration'},
    {include: '#set-statement'},
    {include: '#call-statement'},
    {include: '#expression'}
  ],
  repository: {
    'call-statement': {
      captures: {
        1: {name: 'keyword.control.debug.jass'},
        2: {name: 'keyword.control.jass'},
        3: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.function.jass'}
          ]
        }
      },
      match:
        '^[ \\t]*(?:(debug)(?![0-9A-Za-z_])[ \\t]+)?(call)(?![0-9A-Za-z_])(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?',
      name: 'meta.statement.call.jass'
    },
    'character-literal': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.constant.begin.jass'},
            2: {patterns: [{include: '#escape-sequence'}]},
            3: {name: 'punctuation.definition.constant.end.jass'}
          },
          match:
            "(')((?:(?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}]){4}|(?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}]){2}\\\\?[\\x{80}-\\x{7FF}]|(?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}])\\\\?[\\x{80}-\\x{7FF}](?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}])|\\\\?[\\x{80}-\\x{7FF}](?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}]){2}|(?:\\\\?[\\x{80}-\\x{7FF}]){2}|(?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}])\\\\?[\\x{800}-\\x{FFFF}]|\\\\?[\\x{800}-\\x{FFFF}](?:[^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}])|\\\\?[\\x{10000}-\\x{10FFFF}]))(')",
          name: 'constant.numeric.integer.other.fourcc.jass'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.constant.begin.jass'},
            2: {patterns: [{include: '#escape-sequence'}]},
            3: {name: 'punctuation.definition.constant.end.jass'}
          },
          match:
            "(')([^'\\\\\\r\\n\\x{80}-\\x{10FFFF}]|\\\\[^\\r\\n\\x{80}-\\x{10FFFF}])(')",
          name: 'constant.character.jass'
        },
        {
          match: "'(?:[^'\\\\\\r\\n]|\\\\.)*'",
          name: 'invalid.illegal.character-literal-length.jass'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.constant.begin.jass'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.constant.end.jass'}},
          name: 'constant.character.jass',
          patterns: [{include: '#escape-sequence'}]
        }
      ]
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.jass'}},
      match: '(//)[^\\r\\n]*',
      name: 'comment.line.double-slash.jass'
    },
    'escape-sequence': {
      patterns: [
        {match: '\\\\[\\\\"\'nrtbf]', name: 'constant.character.escape.jass'},
        {match: '\\\\[^\\r\\n]', name: 'invalid.illegal.unknown-escape.jass'},
        {match: '\\\\', name: 'invalid.illegal.unknown-escape.jass'}
      ]
    },
    expression: {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#character-literal'},
        {include: '#function-reference'},
        {include: '#keywords'},
        {include: '#numbers'},
        {include: '#function-call'},
        {include: '#identifier'},
        {include: '#operators'},
        {include: '#punctuation'},
        {include: '#illegal'}
      ]
    },
    'function-call': {
      match: '[A-Za-z_][0-9A-Za-z_]*(?=[ \\t]*\\()',
      name: 'variable.function.jass'
    },
    'function-declaration': {
      begin:
        '^[ \\t]*((?:(constant)(?![0-9A-Za-z_])[ \\t]+)?(function|native)(?![0-9A-Za-z_])(?:[ \\t]+(?!(?:takes|returns)(?![0-9A-Za-z_]))([A-Za-z_][0-9A-Za-z_]*))?[ \\t]*)',
      beginCaptures: {
        1: {name: 'meta.function.jass'},
        2: {name: 'storage.modifier.constant.jass'},
        3: {
          name: 'storage.type.function.jass keyword.declaration.function.jass'
        },
        4: {
          name: 'meta.function.jass',
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'entity.name.function.jass'}
          ]
        }
      },
      end: '(?=$)',
      patterns: [
        {include: '#comment'},
        {include: '#function-parameters'},
        {include: '#function-return-type'},
        {include: '#keywords'},
        {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'support.type.jass'},
        {include: '#illegal'}
      ]
    },
    'function-parameters': {
      begin: '(takes)(?![0-9A-Za-z_])',
      beginCaptures: {1: {name: 'keyword.other.jass'}},
      end: '(?=returns(?![0-9A-Za-z_])|[ \\t]*(?://|$))',
      name: 'meta.function.parameters.jass',
      patterns: [
        {include: '#parameter'},
        {match: ',', name: 'punctuation.separator.comma.jass'},
        {include: '#keywords'},
        {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'support.type.jass'},
        {include: '#illegal'}
      ]
    },
    'function-reference': {
      captures: {
        1: {name: 'storage.type.function.jass'},
        2: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.function.jass'}
          ]
        }
      },
      match: '(function)(?![0-9A-Za-z_])[ \\t]+([A-Za-z_][0-9A-Za-z_]*)'
    },
    'function-return-type': {
      begin: '(returns)(?![0-9A-Za-z_])',
      beginCaptures: {1: {name: 'keyword.other.jass'}},
      end: '(?=[ \\t]*(?://|$))',
      name: 'meta.function.return-type.jass',
      patterns: [
        {include: '#keywords'},
        {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'support.type.jass'},
        {include: '#illegal'}
      ]
    },
    'global-declaration': {
      patterns: [
        {
          captures: {
            1: {name: 'storage.modifier.constant.jass'},
            2: {patterns: [{include: '#type-slot'}]},
            3: {name: 'storage.modifier.array.jass'},
            4: {
              patterns: [
                {include: '#keywords'},
                {
                  match: '[A-Za-z_][0-9A-Za-z_]*',
                  name: 'variable.other.constant.global.jass'
                }
              ]
            }
          },
          match:
            '^[ \\t]*(constant)(?![0-9A-Za-z_])[ \\t]+([A-Za-z_][0-9A-Za-z_]*)[ \\t]+(?:(array)(?![0-9A-Za-z_])[ \\t]+)?([A-Za-z_][0-9A-Za-z_]*)',
          name: 'meta.declaration.global.jass'
        },
        {
          captures: {
            1: {patterns: [{include: '#type-slot'}]},
            2: {name: 'storage.modifier.array.jass'},
            3: {
              patterns: [
                {include: '#keywords'},
                {
                  match: '[A-Za-z_][0-9A-Za-z_]*',
                  name: 'variable.other.global.jass'
                }
              ]
            }
          },
          match:
            '^[ \\t]*([A-Za-z_][0-9A-Za-z_]*)[ \\t]+(?:(array)(?![0-9A-Za-z_])[ \\t]+)?([A-Za-z_][0-9A-Za-z_]*)',
          name: 'meta.declaration.global.jass'
        }
      ]
    },
    'globals-block': {
      begin: '^[ \\t]*(globals)(?![0-9A-Za-z_])',
      beginCaptures: {1: {name: 'storage.type.globals.jass'}},
      end: '^[ \\t]*(endglobals)(?![0-9A-Za-z_])|(?=^[ \\t]*(?:globals|type|(?:constant[ \\t]+)?(?:function|native)|local|set|call|return|exitwhen|if|elseif|else|endif|loop|endloop|endfunction|debug)(?![0-9A-Za-z_]))',
      endCaptures: {1: {name: 'storage.type.globals.jass'}},
      name: 'meta.block.globals.jass',
      patterns: [{include: '#global-declaration'}, {include: '#expression'}]
    },
    identifier: {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.other.jass'},
    illegal: {match: '[^ \\t\\r\\n]', name: 'invalid.illegal.character.jass'},
    keywords: {
      patterns: [
        {
          match: '(?:elseif|endif|else|then|if)(?![0-9A-Za-z_])',
          name: 'keyword.control.conditional.jass'
        },
        {
          match: '(?:endloop|exitwhen|loop)(?![0-9A-Za-z_])',
          name: 'keyword.control.loop.jass'
        },
        {match: 'return(?![0-9A-Za-z_])', name: 'keyword.control.flow.jass'},
        {match: '(?:call|set)(?![0-9A-Za-z_])', name: 'keyword.control.jass'},
        {match: 'debug(?![0-9A-Za-z_])', name: 'keyword.control.debug.jass'},
        {
          match: '(?:and|not|or)(?![0-9A-Za-z_])',
          name: 'keyword.operator.word.jass keyword.operator.logical.jass'
        },
        {
          match: '(?:true|false)(?![0-9A-Za-z_])',
          name: 'constant.language.boolean.jass'
        },
        {match: 'null(?![0-9A-Za-z_])', name: 'constant.language.null.jass'},
        {
          match:
            '(?:boolean|integer|nothing|handle|string|code|real)(?![0-9A-Za-z_])',
          name: 'storage.type.primitive.jass'
        },
        {
          match: '(?:endfunction|function|native)(?![0-9A-Za-z_])',
          name: 'storage.type.function.jass'
        },
        {
          match: '(?:endglobals|globals)(?![0-9A-Za-z_])',
          name: 'storage.type.globals.jass'
        },
        {match: 'type(?![0-9A-Za-z_])', name: 'storage.type.jass'},
        {
          match: 'constant(?![0-9A-Za-z_])',
          name: 'storage.modifier.constant.jass'
        },
        {match: 'array(?![0-9A-Za-z_])', name: 'storage.modifier.array.jass'},
        {match: 'local(?![0-9A-Za-z_])', name: 'storage.modifier.local.jass'},
        {
          match: '(?:extends|returns|takes|alias)(?![0-9A-Za-z_])',
          name: 'keyword.other.jass'
        }
      ]
    },
    'local-declaration': {
      captures: {
        1: {name: 'storage.modifier.local.jass'},
        2: {patterns: [{include: '#type-slot'}]},
        3: {name: 'storage.modifier.array.jass'},
        4: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.other.local.jass'}
          ]
        }
      },
      match:
        '^[ \\t]*(local)(?![0-9A-Za-z_])(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?(?:[ \\t]+(array)(?![0-9A-Za-z_]))?(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?',
      name: 'meta.declaration.local.jass'
    },
    numbers: {
      patterns: [
        {
          match: '(?:\\$|0[xX])[0-9A-Fa-f]+',
          name: 'constant.numeric.integer.hexadecimal.jass'
        },
        {
          match: '(?:\\$|0[xX])(?![0-9A-Fa-f])',
          name: 'invalid.illegal.number.jass'
        },
        {match: '[0-9]+\\.[0-9]*', name: 'constant.numeric.float.real.jass'},
        {match: '0[0-9]*[89][0-9]*', name: 'invalid.illegal.number.jass'},
        {match: '0[0-7]+', name: 'constant.numeric.integer.octal.jass'},
        {match: '[0-9]+', name: 'constant.numeric.integer.decimal.jass'},
        {match: '\\.[0-9]+', name: 'constant.numeric.float.real.jass'},
        {match: '\\.(?![0-9])', name: 'invalid.illegal.number.jass'}
      ]
    },
    operators: {
      patterns: [
        {match: '==|!=|<=|>=|<|>', name: 'keyword.operator.comparison.jass'},
        {match: '=', name: 'keyword.operator.assignment.jass'},
        {match: '[-+*/]', name: 'keyword.operator.arithmetic.jass'}
      ]
    },
    parameter: {
      captures: {
        1: {patterns: [{include: '#type-slot'}]},
        2: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.parameter.jass'}
          ]
        }
      },
      match:
        '([A-Za-z_][0-9A-Za-z_]*)[ \\t]+(?!returns(?![0-9A-Za-z_]))([A-Za-z_][0-9A-Za-z_]*)'
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.separator.comma.jass'},
        {match: '\\(', name: 'punctuation.section.parens.begin.jass'},
        {match: '\\)', name: 'punctuation.section.parens.end.jass'},
        {match: '\\[', name: 'punctuation.section.brackets.begin.jass'},
        {match: '\\]', name: 'punctuation.section.brackets.end.jass'}
      ]
    },
    'set-statement': {
      captures: {
        1: {name: 'keyword.control.debug.jass'},
        2: {name: 'keyword.control.jass'},
        3: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.other.jass'}
          ]
        }
      },
      match:
        '^[ \\t]*(?:(debug)(?![0-9A-Za-z_])[ \\t]+)?(set)(?![0-9A-Za-z_])(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?',
      name: 'meta.statement.set.jass'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.jass'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.jass'}},
      name: 'meta.string.jass string.quoted.double.jass',
      patterns: [{include: '#escape-sequence'}]
    },
    'type-declaration': {
      captures: {
        1: {name: 'storage.type.jass keyword.declaration.type.jass'},
        2: {
          patterns: [
            {include: '#keywords'},
            {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'entity.name.type.jass'}
          ]
        },
        3: {name: 'keyword.other.jass'},
        4: {
          patterns: [
            {include: '#keywords'},
            {
              match: '[A-Za-z_][0-9A-Za-z_]*',
              name: 'entity.other.inherited-class.jass'
            }
          ]
        }
      },
      match:
        '^[ \\t]*(type)(?![0-9A-Za-z_])(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?(?:[ \\t]+(extends)(?![0-9A-Za-z_])(?:[ \\t]+([A-Za-z_][0-9A-Za-z_]*))?)?',
      name: 'meta.declaration.type.jass'
    },
    'type-slot': {
      patterns: [
        {include: '#keywords'},
        {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'support.type.jass'}
      ]
    }
  },
  scopeName: 'source.jass'
}

export default grammar
