// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/micha4w/PowerBuilder.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pbt', '.sra', '.sru', '.srw'],
  names: ['powerbuilder'],
  patterns: [
    {include: '#strings'},
    {include: '#comments'},
    {include: '#general_rules'},
    {include: '#keywords'},
    {include: '#literals'},
    {include: '#special_rules'},
    {include: '#final'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '//.*$', name: 'comment.line.double-slash.powerbuilder'},
        {
          begin: '/\\*',
          end: '\\*/',
          name: 'comment.block.documentation.powerbuilder'
        },
        {
          begin: '\\A(HA)?(?=\\$)',
          captures: {
            1: {name: 'comment.block.documentation.headers.powerbuilder'}
          },
          end: '^(?!\\$)',
          name: 'meta.header.powerbuilder',
          patterns: [
            {
              captures: {
                1: {name: 'comment.block.documentation.headers.powerbuilder'},
                2: {name: 'variable.other.header.name.powerbuilder'},
                3: {name: 'comment.block.documentation.headers.powerbuilder'},
                4: {
                  name: 'string.unquoted.header.description.powerbuilder',
                  patterns: [{include: '#string-escapes'}]
                }
              },
              match: '(\\$)(.*?)(\\$)(.*)',
              name: 'meta.header.line.powerbuilder'
            }
          ]
        }
      ]
    },
    final: {
      patterns: [
        {
          match: '([\\w$#%][\\w\\d$#%\\-]*)',
          name: 'variable.other.local.powerbuilder'
        },
        {include: '#operators'}
      ]
    },
    general_rules: {
      patterns: [
        {
          begin:
            '(?i)^\\s*(close|commit|connect|declare|delete|describe|disconnect|execute|fetch|insert|open|prepare|rollback|select|selectblob|update|updateblob)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(?!\\s*\\()',
          captures: {
            1: {name: 'keyword.operator.sql.powerbuilder'},
            2: {name: 'keyword.operator.sql.powerbuilder'}
          },
          end: '(;)',
          name: 'meta.sql.statement.powerbuilder',
          patterns: [
            {include: '#strings'},
            {include: '#sql_keywords'},
            {include: '#literals'},
            {include: '#operators'},
            {
              match: '(?<=::|\\.)[\\w$#%][\\w\\d$#%\\-]*',
              name: 'variable.other.local.powerbuilder'
            },
            {
              match: ':?([\\w$#%][\\w\\d$#%\\-]*)',
              name: 'variable.other.local.powerbuilder'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.types.powerbuilder'},
            2: {patterns: [{include: '#types'}]}
          },
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(create)\\s+(?!using(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`])))([\\w$#%][\\w\\d$#%\\-`]*)',
          name: 'meta.variable.create.powerbuilder'
        },
        {
          captures: {
            1: {name: 'keyword.other.types.powerbuilder'},
            2: {name: 'entity.type.name.complex.powerbuilder'},
            3: {name: 'keyword.other.types.powerbuilder'},
            4: {name: 'entity.other.inherited-class.powerbuilder'},
            6: {name: 'keyword.other.types.powerbuilder'},
            7: {name: 'entity.other.inherited-class.powerbuilder'}
          },
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(type)\\s+([\\w$#%][\\w\\d$#%\\-]*)\\s+(from)\\s+([\\w$#%][\\w\\d$#%\\-`]*)(\\s+(within)\\s+([\\w$#%][\\w\\d$#%\\-`]*))?',
          name: 'meta.type.declaration.powerbuilder'
        },
        {
          captures: {
            1: {name: 'keyword.other.functions.powerbuilder'},
            2: {patterns: [{include: '#types'}]}
          },
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(throws)\\s+([\\w$#%][\\w\\d$#%\\-`]*(,\\s*[\\w$#%][\\w\\d$#%\\-`]*)*)',
          name: 'meta.function.throws_clause.powerbuilder'
        },
        {
          captures: {
            1: {name: 'keyword.other.functions.powerbuilder'},
            3: {name: 'keyword.other.types.powerbuilder'},
            4: {patterns: [{include: '#types'}]},
            5: {name: 'entity.name.function.event.powerbuilder'},
            7: {name: 'entity.name.tag.event.powerbuilder'}
          },
          match:
            '(?i)(event)(\\s+(type)\\s+([\\w$#%][\\w\\d$#%\\-`]*))?\\s+([\\w$#%][\\w\\d$#%\\-]*)\\s*(\\s([\\w$#%][\\w\\d$#%\\-]*)\\s*($|;)|(?=\\())',
          name: 'meta.event.declaration_definition.powerbuilder'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(or|and|not)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.operator.boolean.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(constant|readonly|ref)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.variable.modifier.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(public|private|protected|privatewrite|privateread|protectedread|protectedwrite|systemread|systemwrite)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.access.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(super|this|sqlca|parent)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'variable.language.powerbuiler'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(indirect|variables|end\\s+variables|forward|end\\s+forward|destroy|create|using|type|end\\s+type|prototypes|within|autoinstantiate|system)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.types.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(global|shared)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.scope.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(return|function|end\\s+function|subroutine|end\\s+subroutine|throw|throws|event|end\\s+event|on|end\\s+on|call|dynamic|post|trigger|open|static|alias\\s+for|alias|library|rpcfunc)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.functions.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(if|then|else|elseif|case|choose|exit|continue|for|to|step|next|do|while|loop|until|try|catch|finally|release|end|goto|halt)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.control.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(namespace|intrinsic|with|_debug|enumerated|external|native)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.other.reserved.powerbuilder'
        },
        {include: '#sql_keywords'}
      ]
    },
    literals: {
      patterns: [
        {
          match:
            '(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))\\d{4}-\\d{2}-\\d{2}(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'constant.numeric.date.powerbuilder'
        },
        {
          match:
            '(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))\\d{2}:\\d{2}:\\d{2}(.\\d+)?(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'constant.numeric.time.powerbuilder'
        },
        {
          match:
            '((?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))|\\+|-)(\\d+(\\.\\d+)?|(\\.\\d+))([eE][+\\-]?\\d+)?(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'constant.numeric.number.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(true|false)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'constant.language.boolean.powerbuilder'
        },
        {
          match: '([\\w$#%][\\w\\d$#%\\-]*!)',
          name: 'constant.language.enumerated.powerbuilder'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '(\\+|\\-|\\*|\\/|\\^|=|>|<|&)',
          name: 'keyword.operator.symbols.powerbuilder'
        }
      ]
    },
    primitives: {
      patterns: [
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(any|blob|boolean|byte|char|character|date|datetime|dec|decimal|double|int|integer|long|longlong|longptr|real|string|time|uint|ulong|unsignedinteger|unsignedlong)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'entity.name.type.primitives.powerbuilder'
        }
      ]
    },
    special_rules: {
      patterns: [
        {
          match: '[\\w$#%][\\w\\d$#%\\-]*(?=\\s*\\()',
          name: 'entity.name.function.powerbuilder'
        },
        {
          match: '(?<=::|\\.)[\\w$#%][\\w\\d$#%\\-]*',
          name: 'variable.other.member.powerbuilder'
        },
        {
          captures: {
            1: {patterns: [{include: '#types'}]},
            2: {name: 'entity.name.function.powerbuilder'}
          },
          match:
            '([\\w$#%][\\w\\d$#%\\-]*)\\s+([\\w$#%][\\w\\d$#%\\-]*)(?=\\s*\\()',
          name: 'meta.function.declaration.powerbuilder'
        },
        {
          captures: {
            1: {patterns: [{include: '#types'}]},
            3: {name: 'constant.numeric.number.powerbuilder'},
            5: {name: 'variable.other.local.powerbuilder'}
          },
          match:
            '(?i)([\\w$#%][\\w\\d$#%\\-`]*)\\s*(\\{(\\d+)\\}|\\s)\\s*(?!(or|and|then)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`])))([\\w$#%][\\w\\d$#%\\-]*)',
          name: 'meta.variable.declaration.powerbuilder'
        }
      ]
    },
    sql_keywords: {
      patterns: [
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(or|and|xor|not)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.operator.sql.boolean.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(close|commit|connect|declare|delete|describe|disconnect|execute|fetch|insert|open|prepare|rollback|select|selectblob|update|updateblob)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.operator.sql.powerbuilder'
        },
        {
          match:
            '(?i)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))(set|current|of|is|null|from|into|using|values|where|first|prior|last|rollback|immediate|descriptor|cursor|procedure|for|of)(?:^(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])$|(?<![\\w\\d$#%\\-`])(?=[\\w\\d$#%\\-`])|(?<=[\\w\\d$#%\\-`])(?![\\w\\d$#%\\-`]))',
          name: 'keyword.operator.sql.powerbuilder'
        }
      ]
    },
    'string-escapes': {
      patterns: [
        {match: '~o?\\d{3}', name: 'constant.character.escape.powerbuilder'},
        {
          match: '~h[0-9a-fA-F]{2}',
          name: 'constant.character.escape.powerbuilder'
        },
        {match: '~.', name: 'constant.character.escape.powerbuilder'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '\\"',
          end: '\\"',
          name: 'string.quoted.double.powerbuilder',
          patterns: [{include: '#string-escapes'}]
        },
        {
          begin: "\\'",
          end: "\\'",
          name: 'string.quoted.single.powerbuilder',
          patterns: [{include: '#string-escapes'}]
        }
      ]
    },
    types: {
      patterns: [
        {include: '#primitives'},
        {
          match: '([\\w$#%][\\w\\d$#%\\-`]*)',
          name: 'entity.name.type.complex.powerbuilder'
        }
      ]
    }
  },
  scopeName: 'source.powerbuilder'
}

export default grammar
