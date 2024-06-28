// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/BobDotCom/Nasal.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['nasal'],
  patterns: [
    {match: '\\.{3}', name: 'support.type.ellipsis.nasal'},
    {include: '#comment'},
    {
      match: '\\b([[:upper:]_][[:upper:][:digit:]_]*)\\b(?![\\.\\(\\\'\\"])',
      name: 'constant.other.allcaps.nasal'
    },
    {
      match: '\\b(0x(?i:[[:xdigit:]])+)',
      name: 'constant.numeric.integer.hexadecimal.nasal'
    },
    {match: '\\b(0o[0-7]+)', name: 'constant.numeric.integer.octal.nasal'},
    {
      match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^[:alpha:]_])',
      name: 'constant.numeric.float.nasal'
    },
    {
      match: '(?<=[^[:alnum:]_])(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))',
      name: 'constant.numeric.float.nasal'
    },
    {
      match: '\\b(?i:(\\d+e[\\-\\+]?\\d+))',
      name: 'constant.numeric.float.nasal'
    },
    {match: '\\b\\d+', name: 'constant.numeric.integer.decimal.nasal'},
    {match: '\\b(nil)\\b', name: 'constant.language.nil.nasal'},
    {
      begin:
        '([a-zA-Z_?.$][\\w?.$]*)\\.([a-zA-Z_?.$][\\w?.$]*)\\s*(=)\\s*(func)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.class.nasal'},
        2: {name: 'entity.name.function.nasal'},
        3: {name: 'keyword.operator.nasal'},
        4: {name: 'storage.type.function.nasal'},
        5: {name: 'punctuation.definition.parameters.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasal'}},
      name: 'meta.function.nasal',
      patterns: [{include: '#function_parameters'}]
    },
    {
      captures: {
        1: {name: 'support.class.nasal'},
        2: {name: 'entity.name.function.nasal'},
        3: {name: 'keyword.operator.nasal'},
        4: {name: 'storage.type.function.nasal'}
      },
      match:
        '([a-zA-Z_?.$][\\w?.$]*)\\.([a-zA-Z_?.$][\\w?.$]*)\\s*(=)\\s*(func)\\b',
      name: 'meta.function.nasal'
    },
    {
      begin: '([a-zA-Z_?$][\\w?$]*)\\s*(=)\\s*(func)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'keyword.operator.nasal'},
        3: {name: 'storage.type.function.nasal'},
        4: {name: 'punctuation.definition.parameters.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasal'}},
      name: 'meta.function.nasal',
      patterns: [{include: '#function_parameters'}]
    },
    {
      captures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'keyword.operator.nasal'},
        3: {name: 'storage.type.function.nasal'}
      },
      match: '([a-zA-Z_?$][\\w?$]*)\\s*(=)\\s*(func)\\b',
      name: 'meta.function.nasal'
    },
    {
      begin: '([a-zA-Z_?$][\\w?$]*)\\s*(=)\\s*\\(\\s*(func)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'keyword.operator.nasal'},
        3: {name: 'storage.type.function.nasal'},
        4: {name: 'punctuation.definition.parameters.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasal'}},
      name: 'meta.function.nasal',
      patterns: [{include: '#function_parameters'}]
    },
    {
      captures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'keyword.operator.nasal'},
        3: {name: 'storage.type.function.nasal'}
      },
      match: '([a-zA-Z_?$][\\w?$]*)\\s*(=)\\s*\\(\\s*(func)\\b',
      name: 'meta.function.nasal'
    },
    {
      begin: '\\b([a-zA-Z_?.$][\\w?.$]*)\\s*:\\s*\\b(func)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'storage.type.function.nasal'},
        3: {name: 'punctuation.definition.parameters.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasal'}},
      name: 'meta.function.hash.nasal',
      patterns: [{include: '#function_parameters'}]
    },
    {
      captures: {
        1: {name: 'entity.name.function.nasal'},
        2: {name: 'storage.type.function.nasal'}
      },
      match: '\\b([a-zA-Z_?.$][\\w?.$]*)\\s*:\\s*\\b(func)\\b',
      name: 'meta.function.hash.nasal'
    },
    {
      begin: '\\b(func)\\s*(\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.nasal'},
        2: {name: 'punctuation.definition.parameters.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.nasal'}},
      name: 'meta.function.nasal',
      patterns: [{include: '#function_parameters'}]
    },
    {
      captures: {1: {name: 'storage.type.function.nasal'}},
      match: '\\b(func)\\b',
      name: 'meta.function.nasal'
    },
    {
      captures: {
        1: {name: 'keyword.operator.new.nasal'},
        2: {name: 'entity.name.type.instance.nasal'}
      },
      match: '(new)\\s+(\\w+(?:\\.\\w*)?)',
      name: 'meta.class.instance.constructor'
    },
    {
      match: '\\b(if|else|elsif|while|for|foreach|forindex)\\b',
      name: 'keyword.control.nasal'
    },
    {
      match:
        '\\b(break(\\s+[A-Z]{2,16})?(?=\\s*(;|\\}))|continue(\\s+[A-Z]{2,16})?(?=\\s*(;|\\}))|([A-Z]{2,16})(?=\\s*;([^\\)#;]*?;){0,2}[^\\)#;]*?\\)))\\b',
      name: 'keyword.control.nasal'
    },
    {
      match:
        '!|\\*|\\-|\\+|~|/|==|=|!=|<=|>=|<|>|!|\\?|\\:|\\*=|/=|\\+=|\\-=|~=|\\.\\.\\.|\\b(and|or)\\b',
      name: 'keyword.operator.nasal'
    },
    {match: '\\b(me|arg|parents|obj)\\b', name: 'variable.language.nasal'},
    {match: '\\b(return|var)\\b', name: 'storage.type.nasal'},
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasal'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasal'}},
      name: 'string.quoted.single.nasal',
      patterns: [{match: "\\\\'", name: 'constant.character.escape.nasal'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasal'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasal'}},
      name: 'string.quoted.double.nasal',
      patterns: [
        {
          match:
            '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|r|n|t|\\\\|")',
          name: 'constant.character.escape.nasal'
        },
        {
          match:
            "%(?:%|(?:\\d+\\$)?[+-]?(?:[ 0]|'.{1})?-?\\d*(?:\\.\\d+)?[bcdeEufFgGosxX])",
          name: 'constant.character.escape.nasal'
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.string.begin.nasal'},
        2: {name: 'punctuation.definition.string.end.nasal'}
      },
      match: '(`).(`)',
      name: 'string.other'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.nasal'},
    {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.nasal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.scope.end.nasal'}},
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.nasal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.nasal'}},
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.nasal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.scope.end.nasal'}},
      patterns: [{include: '$self'}]
    },
    {include: '#illegal'},
    {include: '#builtins'},
    {include: '#function_call'}
  ],
  repository: {
    builtins: {
      patterns: [
        {
          match:
            '\\b(append|bind|call|caller|chr|closure|cmp|compile|contains|delete|die|find|ghosttype|id|int|keys|left|num|pop|right|setsize|size|sort|split|sprintf|streq|substr|subvec|typeof|readline)\\b',
          name: 'variable.language.nasal'
        },
        {
          match:
            '\\b(abort|abs|aircraftToCart|addcommand|airportinfo|airwaysRoute|assert|carttogeod|cmdarg|courseAndDistance|createDiscontinuity|createViaTo|createWP|createWPFrom|defined|directory|fgcommand|findAirportsByICAO|findAirportsWithinRange|findFixesByID|findNavaidByFrequency|findNavaidsByFrequency|findNavaidsByID|findNavaidsWithinRange|finddata|flightplan|geodinfo|geodtocart|get_cart_ground_intersection|getprop|greatCircleMove|interpolate|isa|logprint|magvar|maketimer|start|stop|restart|maketimestamp|md5|navinfo|parse_markdown|parsexml|print|printf|printlog|rand|registerFlightPlanDelegate|removecommand|removelistener|resolvepath|setlistener|_setlistener|setprop|srand|systime|thisfunc|tileIndex|tilePath|values)\\b',
          name: 'variable.language.nasal'
        },
        {
          match: '\\b(singleShot|isRunning|simulatedTime)\\b',
          name: 'variable.language.nasal'
        },
        {
          match:
            '\\b(D2R|FPS2KT|FT2M|GAL2L|IN2M|KG2LB|KT2FPS|KT2MPS|LG2GAL|LB2KG|M2FT|M2IN|M2NM|MPS2KT|NM2M|R2D)\\b',
          name: 'constant.language.nasal'
        },
        {
          match:
            '\\b(addChild|addChildren|alias|clearValue|equals|getAliasTarget|getAttribute|getBoolValue|getChild|getChildren|getIndex|getName|getNode|getParent|getPath|getType|getValue|getValues|initNode|remove|removeAllChildren|removeChild|removeChildren|setAttribute|setBoolValue|setDoubleValue|setIntValue|setValue|setValues|unalias|compileCondition|condition|copy|dump|getNode|nodeList|runBinding|setAll|wrap|wrapNode)\\b',
          name: 'support.function.nasal'
        },
        {match: '\\b(Node)\\b', name: 'support.class.nasal'},
        {match: '\\b(props|globals)\\b', name: 'variable.language.nasal'}
      ]
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.nasal'}},
      match: '(#).*$\\n?',
      name: 'comment.line.hash.nasal'
    },
    expressions: {patterns: [{include: '#illegal'}, {include: '#builtins'}]},
    function_call: {
      begin: '\\b([a-zA-Z_?$][\\w?$]*)(\\()',
      beginCaptures: {
        1: {name: 'support.function.nasal'},
        2: {name: 'punctuation.definition.arguments.begin.nasal'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.nasal'}},
      name: 'meta.function-call.nasal',
      patterns: [{include: '$self'}]
    },
    function_parameters: {
      patterns: [
        {include: '#keyword_arguments'},
        {include: '#comment'},
        {
          captures: {
            1: {name: 'variable.parameter.function.nasal'},
            2: {name: 'punctuation.separator.parameters.nasal'}
          },
          match: '\\b(?:(\\w*))\\s*(?:(,)|(?=[\\n\\)]))'
        }
      ]
    },
    illegal: {match: '%|\\$|@|&|\\^|\\||\\\\|`', name: 'invalid.illegal'},
    keyword_arguments: {
      begin: '\\b(\\w*)\\s*(=)(?!=)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.keyword.nasal'},
        2: {name: 'keyword.operator.assignment.nasal'}
      },
      end: '\\s*(?:(,)|(?=\\)))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.nasal'}},
      patterns: [{include: '$self'}]
    }
  },
  scopeName: 'source.nasal'
}

export default grammar
