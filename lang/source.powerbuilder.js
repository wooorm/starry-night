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
    {include: '#general_rules'},
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#sql_keywords'},
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
          begin: '\\A(HA)?',
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
        {match: '[\\w\\d$#%\\-]+', name: 'variable.other.local.powerbuilder'},
        {
          match: '(\\+|\\-|\\*|\\/|\\^|=|>|<|&)',
          name: 'keyword.operator.symbols.powerbuilder'
        }
      ]
    },
    general_rules: {
      patterns: [
        {
          begin:
            '(?i)^\\s*(close|commit|connect|declare|delete|describe|disconnect|execute|fetch|insert|open|prepare|rollback|select|selectblob|update|updateblob)\\b(?!\\s*\\()',
          captures: {1: {name: 'keyword.operator.sql.powerbuilder'}},
          end: ';',
          name: 'meta.sql.statement.powerbuilder',
          patterns: [
            {include: '#sql_keywords'},
            {include: '#literals'},
            {
              match: '(?<=::|\\.)[\\w\\d$#%\\-]+',
              name: 'variable.other.local.powerbuilder'
            },
            {
              match: ':?([\\w\\d$#%\\-]+)',
              name: 'variable.other.local.powerbuilder'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.types.powerbuilder'},
            2: {name: 'entity.type.name.complex.powerbuilder'}
          },
          match: '(?i)\\b(create)\\s+([\\w\\d$#%\\-`]+)',
          name: 'meta.variable.create.powerbuilder'
        },
        {
          captures: {
            1: {name: 'keyword.other.types.powerbuilder'},
            2: {name: 'variable.other.local.powerbuilder'}
          },
          match: '(?i)\\b(create\\s+using)(\\s+[\\w\\d$#%\\-]+)?',
          name: 'meta.variable.create_using.powerbuilder'
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
            '(?i)\\b(type)\\s+([\\w\\d$#%\\-]+)\\s+(from)\\s+([\\w\\d$#%\\-`]+)(\\s+(within)\\s+([\\w\\d$#%\\-`]+))?',
          name: 'meta.type.declaration.powerbuilder'
        },
        {
          captures: {
            1: {name: 'keyword.other.functions.powerbuilder'},
            2: {patterns: [{include: '#types'}]}
          },
          match:
            '(?i)\\b(throws)\\s+([\\w\\d$#%\\-`]+(,\\s*[\\w\\d$#%\\-`]+)*)',
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
            '(?i)(event)(\\s+(type)\\s+([\\w\\d$#%\\-`]+))?\\s+([\\w\\d$#%\\-]+)\\s*(\\s([\\w\\d$#%\\-]+)\\s*($|;)|(?=\\())',
          name: 'meta.event.declaration_definition.powerbuilder'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '(?i)\\b(or|and|not)\\b',
          name: 'keyword.operator.boolean.powerbuilder'
        },
        {
          match: '(?i)\\b(constant|readonly|ref)\\b',
          name: 'keyword.other.variable.modifier.powerbuilder'
        },
        {
          match:
            '(?i)\\b(public|private|protected|privatewrite|privateread|protectedread|protectedwrite|systemread|systemwrite)\\b',
          name: 'keyword.other.access.powerbuilder'
        },
        {
          match: '(?i)\\b(super|this|sqlca|parent)\\b',
          name: 'variable.language.powerbuiler'
        },
        {
          match:
            '(?i)\\b(indirect|variables|end\\s+variables|forward|end\\s+forward|destroy|create|type|end\\s+type|prototypes|within|autoinstantiate|system)\\b',
          name: 'keyword.other.types.powerbuilder'
        },
        {
          match: '(?i)\\b(global|shared)\\b',
          name: 'keyword.other.scope.powerbuilder'
        },
        {
          match:
            '(?i)\\b(return|function|end\\s+function|subroutine|end\\s+subroutine|throw|throws|event|end\\s+event|on|end\\s+on|call|dynamic|post|trigger|open|static|alias\\s+for|alias|library|rpcfunc)\\b',
          name: 'keyword.other.functions.powerbuilder'
        },
        {
          match:
            '(?i)\\b(if|then|else|elseif|case|choose|exit|continue|for|to|step|next|do|while|loop|until|try|catch|finally|release|end|goto|halt)\\b',
          name: 'keyword.control.powerbuilder'
        },
        {
          match:
            '(?i)\\b(namespace|intrinsic|with|_debug|enumerated|external|native)\\b',
          name: 'keyword.other.reserved.powerbuilder'
        }
      ]
    },
    literals: {
      patterns: [
        {
          match: '\\b\\d{4}-\\d{2}-\\d{2}\\b',
          name: 'constant.numeric.date.powerbuilder'
        },
        {
          match: '\\b\\d{2}:\\d{2}:\\d{2}(.\\d+)?\\b',
          name: 'constant.numeric.time.powerbuilder'
        },
        {
          match: '\\b(\\d+(\\.\\d+)?|(\\.\\d+))([eE][+\\-]\\d+)?\\b',
          name: 'constant.numeric.number.powerbuilder'
        },
        {
          match: '(?i)\\b(true|false)\\b',
          name: 'constant.language.boolean.powerbuilder'
        },
        {
          match: '[\\w\\d$#%\\-]+!',
          name: 'constant.language.enumerated.powerbuilder'
        }
      ]
    },
    primitives: {
      patterns: [
        {
          match:
            '(?i)\\b(any|blob|boolean|byte|char|character|date|datetime|dec|decimal|double|int|integer|long|longlong|longptr|real|string|time|uint|ulong|unsignedinteger|unsignedlong)\\b',
          name: 'entity.name.type.primitives.powerbuilder'
        }
      ]
    },
    special_rules: {
      patterns: [
        {
          match: '[\\w\\d$#%\\-]+(?=\\s*\\()',
          name: 'entity.name.function.powerbuilder'
        },
        {
          match: '(?<=::|\\.)[\\w\\d$#%\\-]+',
          name: 'variable.other.member.powerbuilder'
        },
        {
          captures: {
            1: {patterns: [{include: '#types'}]},
            2: {name: 'entity.name.function.powerbuilder'}
          },
          match: '([\\w\\d$#%\\-]+)\\s+([\\w\\d$#%\\-]+)(?=\\s*\\()',
          name: 'meta.function.declaration.powerbuilder'
        },
        {
          captures: {
            1: {patterns: [{include: '#types'}]},
            3: {name: 'constant.numeric.number.powerbuilder'},
            4: {name: 'variable.other.local.powerbuilder'}
          },
          match:
            '(?i)([\\w\\d$#%\\-`]+)\\s*(\\{(\\d+)\\}|\\s)\\s*(?!or|and|then)([\\w\\d$#%\\-]+)',
          name: 'meta.variable.declaration.powerbuilder'
        }
      ]
    },
    sql_keywords: {
      patterns: [
        {
          match: '(?i)\\b(or|and|xor|not)\\b',
          name: 'keyword.operator.sql.boolean.powerbuilder'
        },
        {
          match:
            '(?i)\\b(close|commit|connect|declare|delete|describe|disconnect|execute|fetch|insert|open|prepare|rollback|select|selectblob|update|updateblob)\\b',
          name: 'keyword.operator.sql.powerbuilder'
        },
        {
          match:
            '(?i)\\b(set|current|of|is|using|null|from|into|values|where|first|prior|last|rollback|immediate|descriptor|cursor|procedure|for|of)\\b',
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
          match: '([\\w\\d$#%\\-`]+)',
          name: 'entity.name.type.complex.powerbuilder'
        }
      ]
    }
  },
  scopeName: 'source.powerbuilder'
}

export default grammar
