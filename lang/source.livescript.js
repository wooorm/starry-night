// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/paulmillr/LiveScript.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ls', '._ls'],
  names: ['livescript', 'live-script', 'ls'],
  patterns: [
    {
      match:
        '(?x)\n\t\t\t\t!?[~-]{1,2}>\\*?\n\t\t\t\t|<[~-]{1,2}!?\n\t\t\t\t|\\(\\s* (?=    instanceof[\\s)]|and[\\s)]|or[\\s)]|is[\\s)]|isnt[\\s)]|in[\\s)]|import[\\s)]|import\\ all[\\s)]     |\\.|[-+/*%^&<>=|][\\b\\s)\\w$]|\\*\\*|\\%\\%)\n\t\t\t\t|      (?<=[\\s(]instanceof|[\\s(]and|[\\s(]or|[\\s(]is|[\\s(]isnt|[\\s(]in|[\\s(]import|[\\s(]import\\ all|[\\s(]do|\\.|\\*\\*|\\%\\%|[\\b\\s(\\w$][-+/*%^&<>=|]) \\s*\\)\n\t\t\t',
      name: 'storage.type.function.livescript'
    },
    {
      begin: '\\/\\*',
      captures: {0: {name: 'punctuation.definition.comment.livescript'}},
      end: '\\*\\/',
      name: 'comment.block.livescript',
      patterns: [
        {match: '@\\w*', name: 'storage.type.annotation.livescriptscript'}
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.livescript'}},
      match: '(#)(?!\\{).*$\\n?',
      name: 'comment.line.number-sign.livescript'
    },
    {
      captures: {
        1: {name: 'storage.type.function.livescript'},
        2: {name: 'entity.name.function.livescript'}
      },
      match: '((?:!|~|!~|~!)?function\\*?)\\s+([$\\w\\-]*[$\\w]+)'
    },
    {
      captures: {
        1: {name: 'keyword.operator.new.livescript'},
        2: {name: 'entity.name.type.instance.livescript'}
      },
      match: '(new)\\s+(\\w+(?:\\.\\w*)*)'
    },
    {
      match:
        '\\b(package|private|protected|public|interface|enum|static)(?!-)\\b',
      name: 'keyword.illegal.livescript'
    },
    {
      begin: "'''",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.livescript'}
      },
      end: "'''",
      endCaptures: {0: {name: 'punctuation.definition.string.end.livescript'}},
      name: 'string.quoted.heredoc.livescript'
    },
    {
      begin: '"""',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.livescript'}
      },
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.livescript'}},
      name: 'string.quoted.double.heredoc.livescript',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.livescript'},
        {include: '#interpolated_livescript'}
      ]
    },
    {
      begin: '``',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.livescript'}
      },
      end: '``',
      endCaptures: {0: {name: 'punctuation.definition.string.end.livescript'}},
      name: 'string.quoted.script.livescript',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.livescript'
        }
      ]
    },
    {begin: '<\\[', end: '\\]>', name: 'string.array-literal.livescript'},
    {
      match: '/{2}(?![\\s=/*+{}?]).*?[^\\\\]/[igmy]{0,4}(?![a-zA-Z0-9])/{2}',
      name: 'string.regexp.livescript'
    },
    {
      begin: '/{2}\\n',
      end: '/{2}[imgy]{0,4}',
      name: 'string.regexp.livescript',
      patterns: [
        {include: '#embedded_spaced_comment'},
        {include: '#interpolated_livescript'}
      ]
    },
    {
      begin: '/{2}',
      end: '/{2}[imgy]{0,4}',
      name: 'string.regexp.livescript',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.livescript'
        },
        {include: '#interpolated_livescript'}
      ]
    },
    {
      match: '/(?![\\s=/*+{}?]).*?[^\\\\]/[igmy]{0,4}(?![a-zA-Z0-9])',
      name: 'string.regexp.livescript'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(?<![\\.\\$\\-@])(\n\t\t\t\t\tinstanceof|new|delete|typeof|and|or|is|isnt|not\n\t\t\t\t)(?!\\-|\\s*:)\\b\n\t\t\t',
      name: 'keyword.operator.livescript'
    },
    {match: '<\\||\\|>', name: 'keyword.operator.livescript'},
    {match: '=>', name: 'keyword.control.livescript'},
    {
      match:
        '(?x)\n\t\t\t\t\\b(?<![\\.\\$\\-@])(?:\n\t\t\t\treturn|break|continue|throw\n\t\t\t\t|try|if|while|for|for\\s+own|switch|unless|until\n\t\t\t\t|catch|finally|else|nobreak|case|default|fallthrough|when|otherwise|then\n\t\t\t\t|yield\n\t\t\t\t)(?!\\-|\\s*:)\\b\n\t\t\t',
      name: 'keyword.control.livescript'
    },
    {
      match:
        '(?x)\n\t\t\t\tand=|or=|%|&|\\^|\\*|\\/|(?<![a-zA-Z$_])(\\-)?\\-(?!\\-?>)|\\+\\+|\\+|\n\t\t\t\t~(?!~?>)|==|=|!=|<=|>=|<<=|>>=|\n\t\t\t\t>>>=|<>|<(?!\\[)|(?<!\\])>|(?<!\\w)!(?!([~\\-]+)?>)|&&|\\.\\.(\\.)?|\\s\\.\\s|\\?|\\|\\||\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|\\.=|&=\n\t\t\t\t|\\^=\n\t\t\t',
      name: 'keyword.operator.livescript'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(?<![\\.\\$\\-@])(?:\n\t\t\t\tfunction\n\t\t\t\t)(?!\\-|\\s*:)\\b\n\t\t\t',
      name: 'storage.type.function.livescript'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(?<![\\.\\$\\-@])(?:\n\t\t\t\tthis|throw|then|try|typeof!?|til|to\n\t\t\t\t|continue|const|case|catch|class\n\t\t\t\t|in|instanceof|import|import\\s+all|implements|if|is\n\t\t\t\t|default|delete|debugger|do\n\t\t\t\t|for|for\\s+own|finally|function|from|fallthrough\n\t\t\t\t|super|switch\n\t\t\t\t|else|nobreak|extends|export|eval\n\t\t\t\t|and|arguments\n\t\t\t\t|new|not\n\t\t\t\t|unless|until\n\t\t\t\t|while|with|when\n\t\t\t\t|of|or|otherwise\n\t\t\t\t|let|var|loop\n\t\t\t\t|match\n\t\t\t\t|by|yield\n\t\t\t\t)(?!\\-|\\s*:)\\b\n\t\t\t',
      name: 'keyword.other.livescript'
    },
    {
      captures: {
        1: {name: 'variable.assignment.livescript'},
        3: {
          name: 'punctuation.separator.key-value, keyword.operator.livescript'
        },
        4: {name: 'keyword.operator.livescript'}
      },
      match:
        '([a-zA-Z\\$_](?:[\\w$.-])*)\\s*(?!\\::)((:)|(=(?!>)))\\s*(?!(\\s*!?\\s*\\(.*\\))?\\s*(!?[~-]{1,2}>\\*?))'
    },
    {
      begin: '(?<=\\s|^)([\\[\\{])(?=.*?[\\]\\}]\\s+[:=])',
      beginCaptures: {0: {name: 'keyword.operator.livescript'}},
      end: '([\\]\\}]\\s*[:=])',
      endCaptures: {0: {name: 'keyword.operator.livescript'}},
      name: 'meta.variable.assignment.destructured.livescript',
      patterns: [
        {include: '#variable_name'},
        {include: '#instance_variable'},
        {include: '#single_quoted_string'},
        {include: '#double_quoted_string'},
        {include: '#numeric'}
      ]
    },
    {
      captures: {
        2: {name: 'entity.name.function.livescript'},
        3: {name: 'entity.name.function.livescript'},
        4: {name: 'variable.parameter.function.livescript'},
        5: {name: 'storage.type.function.livescript'}
      },
      match:
        '(?x)\n\t\t\t\t(\\s*)\n\t\t\t\t(?=[a-zA-Z\\$_])\n\t\t\t\t([a-zA-Z\\$_]([\\w$.:-])*)\\s*\n\t\t\t\t(?=[:=](\\s*!?\\s*\\(.*\\))?\\s*(!?[~-]{1,2}>\\*?))\n\t\t\t',
      name: 'meta.function.livescript'
    },
    {
      match: '\\b(?<!\\.)(true|on|yes)(?!\\s*:)\\b',
      name: 'constant.language.boolean.true.livescript'
    },
    {
      match: '\\b(?<!\\.)(false|off|no)(?!\\s*:)\\b',
      name: 'constant.language.boolean.false.livescript'
    },
    {
      match: '\\b(?<!\\.)(null|void)(?!\\s*:)\\b',
      name: 'constant.language.null.livescript'
    },
    {
      match: '\\b(?<!\\.)(super|this|extends)(?!\\s*:)\\b',
      name: 'variable.language.livescript'
    },
    {
      captures: {
        1: {name: 'storage.type.class.livescript'},
        2: {name: 'entity.name.type.class.livescript'},
        3: {name: 'keyword.control.inheritance.livescript'},
        4: {name: 'entity.other.inherited-class.livescript'}
      },
      match:
        '(class\\b)\\s+(@?[a-zA-Z$_][\\w$.-]*)?(?:\\s+(extends)\\s+(@?[a-zA-Z$_][\\w$.-]*))?',
      name: 'meta.class.livescript'
    },
    {match: '\\b(debugger|\\\\)\\b', name: 'keyword.other.livescript'},
    {
      match:
        '(?x)\\b(\n\t\t\t\tArray|ArrayBuffer|Blob|Boolean|Date|document|event|Function|\n\t\t\t\tInt(8|16|32|64)Array|Math|Map|Number|\n\t\t\t\tObject|Proxy|RegExp|Set|String|WeakMap|\n\t\t\t\twindow|Uint(8|16|32|64)Array|XMLHttpRequest\n\t\t\t)\\b',
      name: 'support.class.livescript'
    },
    {match: '\\b(console)\\b', name: 'entity.name.type.object.livescript'},
    {
      match: '\\b(Infinity|NaN|undefined)\\b',
      name: 'constant.language.livescript'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.livescript'},
    {match: ',[ |\\t]*', name: 'meta.delimiter.object.comma.livescript'},
    {match: '\\.', name: 'meta.delimiter.method.period.livescript'},
    {match: '\\{|\\}', name: 'meta.brace.curly.livescript'},
    {match: '\\(|\\)', name: 'meta.brace.round.livescript'},
    {match: '\\[|\\]\\s*', name: 'meta.brace.square.livescript'},
    {include: '#instance_variable'},
    {include: '#backslash_string'},
    {include: '#single_quoted_string'},
    {include: '#double_quoted_string'},
    {include: '#numeric'},
    {
      captures: {
        1: {name: 'keyword.operator.livescript'},
        2: {name: 'meta.function-call.livescript'},
        3: {name: 'keyword.operator.livescript'}
      },
      match: '()(@|@@|[$\\w\\-]*[$\\w]+)\\s*(`)'
    },
    {match: '`', name: 'keyword.operator.livescript'},
    {
      captures: {
        1: {name: 'keyword.operator.livescript'},
        2: {name: 'meta.function-call.livescript'},
        3: {name: 'keyword.operator.livescript'}
      },
      match: '()(@|@@|[$\\w\\-]*[$\\w]+)(?:(\\??\\!)|[(])'
    },
    {
      captures: {
        1: {name: 'meta.function-call.livescript'},
        2: {name: 'keyword.operator.livescript'}
      },
      match:
        '(@|@@|[$\\w\\-]*[$\\w]+)(\\?)? (?!\\s*(((by|of|and|or|with|when|unless|if|is|isnt|else|nobreak|for|from|not in|in|catch|til|to|then|import|extends|implements|instanceof)\\b)|[=:.*\\/+\\-%\\^<>][ =)]|[`}%*)]|/(?!.*?/)|&&|[.][^.]|=>|\\/ +|\\||\\|\\||\\-\\-|\\+\\+|\\|>|<|\\||$|\\n|\\#|/\\*))'
    },
    {match: '\\| _', name: 'keyword.control.livescript'},
    {match: '\\|(?![.])', name: 'keyword.control.livescript'},
    {match: '\\|', name: 'keyword.operator.livescript'},
    {
      match:
        '((?<=console\\.)(debug|warn|info|log|error|time(End|-end)|assert))\\b',
      name: 'support.function.console.livescript'
    },
    {
      match:
        '(?x)\\b(\n\t\t\t\tdecodeURI(Component)?|encodeURI(Component)?|eval|parse(Float|Int)|require\n\t\t\t)\\b',
      name: 'support.function.livescript'
    },
    {
      match:
        '(?x)(?<![.-])\\b(\n\t\t\t\tmap|filter|reject|partition|find|each|head|tail|last|initial|empty|\n\t\t\t\tvalues|keys|length|cons|append|join|reverse|fold(l|r)?1?|unfoldr|\n\t\t\t\tand(List|-list)|or(List|-list)|any|all|unique|sum|product|mean|compact|\n\t\t\t\tconcat(Map|-map)?|maximum|minimum|scan(l|r)?1?|replicate|slice|apply|\n\t\t\t\tsplit(At|-at)?|take(While|-while)?|drop(While|-while)?|span|first|\n\t\t\t\tbreak(It|-it)|list(ToObj|-to-obj)|obj(ToFunc|-to-func)|\n\t\t\t\tpairs(ToObj|-to-obj)|obj(ToPairs|-to-pairs|ToLists|-to-lists)|\n\t\t\t\tzip(All|-all)?(With|-with)?|compose|curry|partial|flip|fix|\n\t\t\t\tsort(With|-with|By|-by)?|group(By|-by)|break(List|-list|Str|-str)|\n\t\t\t\tdifference|intersection|union|average|flatten|chars|unchars|repeat|\n\t\t\t\tlines|unlines|words|unwords|max|min|negate|abs|signum|quot|rem|div|mod|\n\t\t\t\trecip|pi|tau|exp|sqrt|ln|pow|sin|cos|tan|asin|acos|atan|atan2|truncate|\n\t\t\t\tround|ceiling|floor|is(It|-it)NaN|even|odd|gcd|lcm|disabled__id\n\t\t\t)\\b(?![.-])',
      name: 'support.function.prelude.livescript'
    },
    {
      match: '(?x)(?<![.-])\\b(that|it|e|_)\\b',
      name: 'support.function.semireserved.livescript'
    },
    {
      match:
        '(?x)((?<=(\\.|\\]|\\)))(\n\t\t\t\tapply|call|concat|every|filter|for(Each|-each)|\n\t\t\t\tfrom|has(Own|-own)(Property|-property)|index(Of|-of)|\n\t\t\t\tis(Prototype|-prototype)(Of|-of)|join|last(Index|-index)(Of|-of)|\n\t\t\t\tmap|of|pop|property(Is|-is)(Enumerable|-enumerable)|push|\n\t\t\t\treduce(Right|-right)?|reverse|shift|slice|some|sort|\n\t\t\t\tsplice|to(Locale|-locale)?(String|-string)|unshift|valueOf\n\t\t\t))\\b(?!-) ',
      name: 'support.function.method.array.livescript'
    },
    {
      match: '(?x)((?<=Array\\.)(\n\t\t\t\tisArray\n\t\t\t))\\b',
      name: 'support.function.static.array.livescript'
    },
    {
      match:
        '(?x)((?<=Object\\.)(\n\t\t\t\tcreate|define(Propert|-propert)(ies|y)|freeze|\n\t\t\t\tget(Own|-own)(Property|-property)(Descriptors?|Names)|\n\t\t\t\tget(Property|-property)(Descriptor|Names)|getPrototypeOf|\n\t\t\t\tis((Extensible|-extensible)|(Frozen|-frozen)|(Sealed|-sealed))?|\n\t\t\t\tkeys|prevent(Extensions|-extensions)|seal\n\t\t\t))\\b',
      name: 'support.function.static.object.livescript'
    },
    {
      match:
        '(?x)((?<=Math\\.)(\n\t\t\t\tabs|acos|acosh|asin|asinh|atan|atan2|atanh|ceil|cos|cosh|exp|expm1|floor|\n\t\t\t\thypot|log|log10|log1p|log2|max|min|pow|random|round|sign|sin|sinh|sqrt|\n\t\t\t\ttan|tanh|trunc\n\t\t\t))\\b',
      name: 'support.function.static.math.livescript'
    },
    {
      match:
        '(?x)((?<=Number\\.)(\n\t\t\t\tis(Finite|Integer|NaN)|to(Integer|-integer)\n\t\t\t))\\b',
      name: 'support.function.static.number.livescript'
    },
    {match: '[\\$\\w][\\w-]*', name: 'variable.other.livescript'}
  ],
  repository: {
    backslash_string: {
      patterns: [
        {
          begin: '\\\\([\\\\)\\s,\\};\\]])?',
          beginCaptures: {0: {name: 'string.quoted.single.livescript'}},
          contentName: 'string.quoted.single.livescript',
          end: '(?=[\\\\)\\s,\\};\\]])',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.livescript'}
          }
        }
      ]
    },
    constructor_variable: {
      patterns: [
        {
          match: '([a-zA-Z$_][\\w$-]*)(@{2})([a-zA-Z$_][\\w$-]*)?',
          name: 'variable.other.readwrite.constructor.livescript'
        }
      ]
    },
    double_quoted_string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.livescript'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.livescript'}
          },
          name: 'string.quoted.double.livescript',
          patterns: [
            {
              match:
                '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.livescript'
            },
            {include: '#interpolated_livescript'}
          ]
        }
      ]
    },
    embedded_comment: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.livescript'}},
          match: '(?<!\\\\)(#).*$\\n',
          name: 'comment.line.number-sign.livescript'
        }
      ]
    },
    embedded_spaced_comment: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.livescript'}},
          match: '(?<!\\\\)(#\\s).*$\\n',
          name: 'comment.line.number-sign.livescript'
        }
      ]
    },
    instance_variable: {
      patterns: [
        {
          match: '(?<![$\\w\\-])(@)',
          name: 'variable.other.readwrite.instance.livescript'
        }
      ]
    },
    interpolated_livescript: {
      patterns: [
        {
          begin: '\\#\\{',
          captures: {0: {name: 'punctuation.section.embedded.livescript'}},
          end: '\\}',
          name: 'source.livescript.embedded.source',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\#',
          match: '#([a-zA-Z$_-]+|@)',
          name: 'source.livescript.embedded.source.simple',
          patterns: [{include: '$self'}]
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match:
            '(?<![\\$@a-zA-Z_])(([0-9]+r[0-9_]+)|((16r|0[xX])[0-9a-fA-F_]+)|([0-9]+(\\.[0-9]+[0-9_]*)?(e[+\\-]?[0-9_]+)?)[_a-zA-Z0-9]*)',
          name: 'constant.numeric.livescript'
        }
      ]
    },
    single_quoted_string: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.livescript'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.livescript'}
          },
          name: 'string.quoted.single.livescript',
          patterns: [
            {
              match:
                '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.livescript'
            }
          ]
        }
      ]
    },
    variable_name: {
      patterns: [
        {
          captures: {1: {name: 'variable.assignment.livescript'}},
          match: '([a-zA-Z\\$_][\\w$-]*(\\.\\w+)*)(?!\\-)',
          name: 'variable.assignment.livescript'
        }
      ]
    }
  },
  scopeName: 'source.livescript'
}

export default grammar
