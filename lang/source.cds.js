// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/SAP/cds-textmate-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cds'],
  names: ['cap-cds', 'cds'],
  patterns: [
    {
      begin: '\\b(aspect|(abstract\\s+)?entity|type|event)\\b',
      beginCaptures: {1: {name: 'keyword.strong.cds'}},
      end: '(?<=})(;)?|(;)',
      endCaptures: {
        1: {name: 'punctuation.terminator.statement.cds'},
        2: {name: 'punctuation.terminator.statement.cds'}
      },
      patterns: [
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {
          begin: ':',
          beginCaptures: {0: {name: 'keyword.operator.cds'}},
          end: '(?=[{;@])',
          patterns: [
            {include: '#identifiers'},
            {match: ',', name: 'punctuation.separator.object.cds'}
          ]
        },
        {include: '#bracedElementDef'},
        {include: '#keywords'},
        {include: '#identifiers'}
      ]
    },
    {
      begin:
        '(?i)\\b(extend)\\s+((context|service|aspect|entity|projection|type)\\s+)?((?!@)\\S+)(\\s+(with)(\\s+(actions|definitions|columns|elements|enum))?|(?=\\s*{))',
      beginCaptures: {
        1: {name: 'keyword.strong.cds'},
        3: {name: 'keyword.cds'},
        4: {name: 'entity.name.type.cds'},
        6: {name: 'keyword.cds'},
        8: {name: 'keyword.cds'}
      },
      end: '(?<=})(;)?|(;)',
      endCaptures: {
        1: {name: 'punctuation.terminator.statement.cds'},
        2: {name: 'punctuation.terminator.statement.cds'}
      },
      patterns: [
        {include: '#bracedElementDef'},
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {include: '#keywords'},
        {include: '#identifiers'},
        {match: ',', name: 'punctuation.separator.object.cds'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.strong.control.import.cds'},
        2: {name: 'entity.name.type.cds'},
        3: {name: 'keyword.strong.control.import.cds'}
      },
      match: '(?<!\\.)\\b(annotate)\\b\\s*([\\w.]+)\\b\\s*\\b(with)?\\b'
    },
    {
      begin: '(?<!\\.)\\b(using)(?!\\s*:)\\b',
      beginCaptures: {1: {name: 'keyword.strong.control.import.cds'}},
      end: '(;)|\\n',
      endCaptures: {1: {name: 'punctuation.terminator.statement.cds'}},
      patterns: [
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.definition.modules.begin.cds'}
          },
          end: '}',
          endCaptures: {0: {name: 'punctuation.definition.modules.end.cds'}},
          patterns: [
            {
              captures: {
                1: {name: 'variable.language.default.cds'},
                2: {name: 'entity.name.type.cds'},
                3: {name: 'keyword.strong.cds'},
                4: {name: 'entity.name.type.cds'}
              },
              match:
                '(?:\\b(default)\\b|\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)\\s*(\\bas\\b)\\s*(?:\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b)'
            },
            {match: ',', name: 'punctuation.separator.object.cds'},
            {include: '#comments'},
            {
              match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b',
              name: 'entity.name.type.cds'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.operator.asterisk'},
            2: {name: 'entity.name.type.cds'},
            3: {name: 'keyword.strong.control.cds'},
            4: {name: 'entity.name.type.cds'}
          },
          match:
            '(?:(\\*)|(?=\\D)(\\b[\\$\\.\\w]+\\b))\\s*(\\bas\\b)\\s*(?=\\D)(\\b[\\$\\.\\w]+\\b)'
        },
        {match: '\\*', name: 'keyword.operator.asterisk'},
        {match: '\\b(default)\\b', name: 'variable.language.default.cds'},
        {include: '#strings'},
        {include: '#comments'},
        {match: '(?i)\\b(from)\\b', name: 'keyword.strong.control.cds'},
        {
          match: '\\b([$_a-zA-Z][$_a-zA-Z0-9]*)\\b(?=.*\\bfrom\\b)',
          name: 'entity.name.type.cds'
        },
        {match: ',', name: 'punctuation.separator.object.cds'}
      ]
    },
    {
      captures: {
        1: {name: 'keyword.control.cds'},
        2: {name: 'variable.language.default.cds'},
        3: {name: 'variable.other.module.cds'}
      },
      match:
        '(?i)\\b(export)\\b\\s*\\b(default)\\b(?:\\s*)\\b((?!\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b)[$_a-zA-Z][$_a-zA-Z0-9]*)?\\b',
      name: 'meta.export.cds'
    },
    {
      begin: '(?i)\\b(action|function)\\s+([$_a-zA-Z][$_a-zA-Z0-9]*)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.strong.cds'},
        2: {name: 'entity.name.function.cds'},
        3: {name: 'punctuation.definition.parameters.begin.cds'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.cds'}},
      patterns: [{include: '#function-params'}]
    },
    {
      captures: {
        1: {name: 'storage.type.class.cds'},
        2: {name: 'entity.name.type.class.cds'},
        3: {name: 'storage.modifier.cds'},
        4: {name: 'entity.other.inherited-class.cds'}
      },
      match:
        '\\b(class)(?:\\s+([$_a-zA-Z][$_a-zA-Z0-9]*))?(?:\\s+(extends)\\s+([$_a-zA-Z][$_a-zA-Z0-9]*))?\\s*($|(?={))',
      name: 'meta.class.cds'
    },
    {match: '=>', name: 'storage.type.arrow.cds'},
    {match: '(?<!\\.|\\$)\\b(let|var)\\b(?!\\$)', name: 'storage.type.var.cds'},
    {
      match: '(?<!\\.|\\$)\\b(get|set|const)\\b(?!\\$)',
      name: 'storage.modifier.cds'
    },
    {
      captures: {
        1: {name: 'keyword.control.cds'},
        2: {name: 'storage.modifier.cds'}
      },
      match: '(?<!\\.)\\b(yield)(?!\\s*:)\\b(?:\\s*(\\*))?',
      name: 'meta.control.yield.cds'
    },
    {
      match: '\\b(false|Infinity|NaN|null|true|undefined)\\b',
      name: 'constant.language.cds'
    },
    {
      match: '(?<!\\.)\\b(super|this)(?!\\s*:)\\b',
      name: 'variable.language.cds'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.cds'},
    {
      captures: {
        1: {name: 'punctuation.section.scope.begin.cds'},
        2: {name: 'punctuation.section.scope.end.cds'}
      },
      match: '(\\[)(\\])'
    },
    {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [{include: '$self'}]
    },
    {match: '\\[|\\]', name: 'meta.brace.square.cds'},
    {
      match: '(?<=new )([$_a-zA-Z][$_a-zA-Z0-9]*)(?!\\w)',
      name: 'support.class.cds'
    },
    {
      match: '(?<= instanceof )([$_a-zA-Z][$_a-zA-Z0-9]*)(?!\\w)',
      name: 'support.class.cds'
    },
    {
      match: '(?<!\\w)([$_a-zA-Z][$_a-zA-Z0-9]*)(?=\\.prototype\\b)',
      name: 'support.class.cds'
    },
    {match: '(?i)(?<=\\.)(prototype)\\b', name: 'keyword.other.cds'},
    {include: '#atAnnoParen'},
    {include: '#atAnnoNoParen'},
    {include: '#keywords'},
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#comments'},
    {include: '#operators'},
    {include: '#identifiers'}
  ],
  repository: {
    annotationName: {
      begin: '(?=[$_"!a-zA-Z0-9])',
      end: '(?:(?<=[$"\\]])(?=\\s*[@:;])|(?<=[_a-zA-Z0-9])\\b)(?!\\s*[#.])',
      patterns: [
        {
          match:
            '[$_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\]',
          name: 'entity.name.tag.cds'
        },
        {
          captures: {
            1: {name: 'entity.name.tag.dot.cds'},
            2: {name: 'entity.name.tag.at.cds'}
          },
          match: '\\s*(\\.)\\s*(@)?'
        },
        {
          captures: {1: {name: 'entity.name.tag.hash.cds'}},
          match: '\\s*(#)\\s*'
        }
      ]
    },
    atAnnoName: {
      begin: '(@)',
      beginCaptures: {1: {name: 'entity.name.tag.at.cds'}},
      end: '(?:(?<=[$"\\]])(?=\\s*[@:;])|(?<=[_a-zA-Z0-9])\\b)(?![#.])',
      patterns: [{include: '#annotationName'}]
    },
    atAnnoNoParen: {
      begin: '(@)(?!\\s*\\()',
      captures: {1: {name: 'entity.name.tag.at.cds'}},
      end: "(?<=[}\\]'`])(?=\\s*($|[@;]))|(?<![@:])(?!\\s*:)(?=$|[\\s@,;(){}\\[\\]'`/\"!]|\\b[$_a-zA-Z])",
      patterns: [
        {include: '#annotationName'},
        {include: '#optColonAndStructure'},
        {include: '#optColonAndArray'},
        {include: '#colonAndNumber'},
        {include: '#colonAndString'},
        {include: '#colonAndTemplateString'},
        {include: '#colonAndHashIdent'},
        {include: '#colonAndConstant'},
        {include: '#comments'}
      ]
    },
    atAnnoParen: {
      begin: '(@)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.tag.at.cds'},
        2: {name: 'punctuation.section.scope.begin.cds'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [
        {include: '#annotationName'},
        {include: '#optColonAndStructure'},
        {include: '#optColonAndArray'},
        {include: '#colonAndNumber'},
        {include: '#colonAndString'},
        {include: '#colonAndTemplateString'},
        {include: '#colonAndHashIdent'},
        {include: '#colonAndConstant'},
        {match: ',', name: 'punctuation.separator.object.cds'},
        {include: '#comments'}
      ]
    },
    bracedElementDef: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [
        {include: '#comments'},
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {include: '#extendElement'},
        {include: '#selectItemDef'},
        {include: '#elementDef'}
      ]
    },
    bracketedExpression: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [
        {include: '#bracedElementDef'},
        {include: '#keywords'},
        {
          captures: {0: {name: 'entity.other.attribute-name.cds'}},
          match:
            '(?i)(?<!@|select from )(?:\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])'
        },
        {include: '#identifiers'},
        {include: '#operators'}
      ]
    },
    colonAndConstant: {
      captures: {
        1: {name: 'keyword.operator.colon'},
        2: {name: 'constant.language.cds'}
      },
      match: '(?i)(:)\\s*(null|true|false)\\b',
      patterns: [{include: '#comments'}]
    },
    colonAndHashIdent: {
      captures: {
        1: {name: 'keyword.operator.colon'},
        2: {name: 'entity.name.tag.hash.cds'},
        3: {name: 'entity.name.tag.cds'}
      },
      match:
        '(:)\\s*(#)\\s*([$_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])',
      patterns: [{include: '#comments'}]
    },
    colonAndNumber: {
      begin: '(:)\\s*(?=[0-9+-])',
      beginCaptures: {1: {name: 'keyword.operator.colon'}},
      end: '(?<=[[[:xdigit:]]0-9])\\b',
      patterns: [{include: '#numbers'}, {include: '#comments'}]
    },
    colonAndString: {
      begin: "(:)\\s*(x|date|time(?:stamp)?)?\\s*(')",
      beginCaptures: {
        1: {name: 'keyword.operator.colon'},
        2: {name: 'support.class.cds'},
        3: {
          name: 'string.quoted.single.cds punctuation.definition.string.begin.cds'
        }
      },
      end: "'(?!')",
      endCaptures: {
        0: {
          name: 'string.quoted.single.cds punctuation.definition.string.end.cds'
        }
      },
      patterns: [
        {
          match: "''",
          name: 'string.quoted.single.cds meta.single-quote.doubled.cds'
        },
        {match: '.', name: 'string.quoted.single.cds'},
        {include: '#comments'}
      ]
    },
    colonAndTemplateString: {
      begin: '(:)\\s*(?=`)',
      beginCaptures: {1: {name: 'keyword.operator.colon'}},
      end: '(?<=`)',
      patterns: [{include: '#strings'}, {include: '#comments'}]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*\\*(?!/)',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cds'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.cds'}},
          name: 'comment.block.documentation.cds'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.cds'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.cds'}},
          name: 'comment.block.cds'
        },
        {match: '//.*', name: 'comment.line.double-slash.cds'}
      ]
    },
    elementDef: {
      begin:
        '(?!\\s*@)(?:(?=\\()|\\b(virtual(?:\\s+))?(key(?:\\s+))?(masked(?:\\s+))?(element(?:\\s+))?)',
      beginCaptures: {
        1: {name: 'keyword.cds'},
        2: {name: 'keyword.strong.cds'},
        3: {name: 'keyword.cds'},
        4: {name: 'keyword.cds'}
      },
      end: '(?=})|(;)',
      endCaptures: {1: {name: 'punctuation.terminator.statement.cds'}},
      patterns: [
        {include: '#bracedElementDef'},
        {include: '#strings'},
        {include: '#comments'},
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {include: '#keywords'},
        {include: '#bracketedExpression'},
        {
          match:
            '(?<!@)(?:\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])(?=\\s*[:{,@])',
          name: 'entity.other.attribute-name.cds'
        },
        {
          captures: {1: {name: 'entity.other.attribute-name.cds'}},
          match:
            '^\\s*([$_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])\\s*$'
        },
        {include: '#identifiers'},
        {include: '#operators'},
        {include: '#numbers'},
        {match: ',', name: 'punctuation.separator.object.cds'}
      ]
    },
    escapes: {
      match: '\\\\([xu$]\\{?[0-9a-fA-F]+}?|.|$)',
      name: 'constant.character.escape.cds'
    },
    extendElement: {
      begin: '\\b(?=extend\\b.*\\bwith\\b)',
      end: '(?<=})(;)?|(;)',
      endCaptures: {
        1: {name: 'punctuation.terminator.statement.cds'},
        2: {name: 'punctuation.terminator.statement.cds'}
      },
      patterns: [
        {
          begin: '\\bextend\\b',
          beginCaptures: {0: {name: 'keyword.strong.cds'}},
          end: '\\bwith\\b',
          endCaptures: {0: {name: 'keyword.cds'}},
          patterns: [
            {
              match: 'element(?!(?:\\s*/\\*.*\\*/\\s*|\\s+)?with\\b)',
              name: 'keyword.cds'
            },
            {
              match:
                '(?<!@)(?:\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])',
              name: 'entity.other.attribute-name.cds'
            },
            {include: '#comments'}
          ]
        },
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.section.scope.begin.cds'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
          patterns: [{include: '#extendElement'}, {include: '#elementDef'}]
        },
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#identifiers'},
        {include: '#operators'},
        {match: '\\(', name: 'punctuation.section.scope.begin.cds'},
        {match: '\\)', name: 'punctuation.section.scope.end.cds'},
        {include: '#numbers'}
      ]
    },
    'function-params': {
      patterns: [
        {
          match:
            '\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\]',
          name: 'variable.parameter.function.cds'
        },
        {match: ',', name: 'punctuation.separator.object.cds'},
        {include: '#comments'},
        {include: '#operators'}
      ]
    },
    identifiers: {
      patterns: [
        {
          match:
            '(?<!@)(?:\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])',
          name: 'entity.name.type.cds'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          captures: {
            1: {name: 'support.class.cds'},
            2: {name: 'entity.name.type.cds'}
          },
          match:
            '(?<!\\.|\\$)\\b(Association\\b\\s*(?:\\[[0-9.eE+, *-]*\\]\\s*)?to\\b\\s*(?:many\\s*|one\\s*)?|Composition\\b\\s*(?:\\[[0-9.eE+, *-]*\\]\\s*)?of\\b\\s*(?:many\\s*|one\\s*)?)(?:(?=\\s*{)|([$_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\]))'
        },
        {
          match:
            '(?<!\\.|\\$)\\b(Binary|Boolean|DateTime|Date|DecimalFloat|Decimal|Double|Int(16|32|64)|Integer64|Integer|LargeBinary|LargeString|Number|String|Timestamp|Time|UInt8|UUID)\\b\\s*(\\([^()]*\\))?(?!\\$|\\s*:)',
          name: 'support.class.cds'
        },
        {
          match:
            '(?i)(?<!\\.|\\$)\\b(all|and|any|asc|between|by|case|cast|cross|desc|distinct|element|elements|escape|except|excluding|exists|first|from|full|group|group by|having|in|inner|intersect|into|is|join|last|left|like|limit|many|minus|mixin|not null|not|null|nulls|offset|one|or|order by|outer|redirected to|select|some|top|type of|union|where|with)\\b(?!\\$|\\s*:)',
          name: 'keyword.cds'
        },
        {
          match: '(?i)(?<!\\.|\\$)\\b(as|key|on|type)\\b(?!\\$|\\s*:)',
          name: 'keyword.strong.cds'
        },
        {
          match:
            '(?<!\\.|\\$)\\b(array of|column|columns|current|day|default|depends|else|enabled|end|generated|hana|hour|identity|import|index|language|layout|leading|masked|merge|minute|minutes|mode|month|name|new|no|off|only|others|parameters|partition|partitions|priority|projection|projection on|queue|range|ratio|reset|returns|right|row|search|second|start|storage|store|table|technical|then|trailing|trim|unique|unload|value|values|virtual|when|with parameters|year)\\b(?!\\$|\\s*:)',
          name: 'keyword.cds'
        },
        {
          match:
            '(?<!\\.|\\$)\\b(abstract|action|actions|annotation|aspect|context|define|entity|enum|event|extend|function|namespace|service|view)\\b(?!\\$|\\s*:)',
          name: 'keyword.strong.cds'
        }
      ]
    },
    literalValue: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.tag.hash.cds'},
            2: {name: 'entity.name.tag.cds'}
          },
          match:
            '(#)\\s*([$_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])'
        },
        {match: '(?i)\\b(?:null|true|false)\\b', name: 'constant.language.cds'},
        {include: '#numbers'},
        {include: '#strings'},
        {
          captures: {
            1: {name: 'support.class.cds'},
            2: {name: 'string.quoted.single.cds'},
            3: {name: 'punctuation.definition.string.begin.cds'},
            4: {name: 'punctuation.definition.string.end.cds'}
          },
          match: "(?i)\\b(x|date|time(?:stamp)?)\\s*((')[^']*('))"
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match: '(?<!\\w|\\$)0[xX][[:xdigit:]]+\\b',
          name: 'constant.numeric.hex.cds'
        },
        {
          match: '(?<!\\w|\\$)0[bB][01]+\\b',
          name: 'constant.numeric.binary.cds'
        },
        {
          match: '(?<!\\w|\\$)0[oO][0-7]+\\b',
          name: 'constant.numeric.octal.cds'
        },
        {
          match: "(?<!\\w|\\$)[+-]?[0-9]+('.'[0-9]+)?([eE][+-]?[0-9]+)?(?!\\w)",
          name: 'constant.numeric.cds'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '!=|<=|>=|<>|<|>', name: 'keyword.operator.comparison.cds'},
        {match: '\\|\\|', name: 'keyword.operator.concatenator.cds'},
        {match: '&|\\||\\^|~', name: 'keyword.operator.bitwise.cds'},
        {captures: {1: {name: 'keyword.cds'}}, match: '\\:\\s*(localized)\\s+'},
        {match: '[?:]', name: 'keyword.operator.cds'},
        {match: '!', name: 'keyword.operator.logical.cds'},
        {match: '=|\\:', name: 'keyword.operator.assignment.cds'},
        {match: '%|\\*|/|\\-|\\+', name: 'keyword.operator.arithmetic.cds'}
      ]
    },
    optColonAndArray: {
      begin: '(:)?\\s*(\\[)',
      beginCaptures: {
        1: {name: 'keyword.operator.colon'},
        2: {name: 'punctuation.section.scope.begin.cds'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [
        {include: '#atAnnoNoParen'},
        {include: '#annotationName'},
        {captures: {0: {name: 'keyword.operator.ellipsis'}}, match: '\\.{3}'},
        {
          captures: {1: {name: 'keyword.cds'}, 2: {name: 'keyword.cds'}},
          match: '(?i)(up)\\s+(to)\\b'
        },
        {include: '#optColonAndStructure'},
        {include: '#optColonAndArray'},
        {include: '#literalValue'},
        {match: ',', name: 'punctuation.separator.object.cds'},
        {include: '#comments'}
      ]
    },
    optColonAndStructure: {
      begin: '(:)?\\s*({)',
      beginCaptures: {
        1: {name: 'keyword.operator.colon'},
        2: {name: 'punctuation.section.scope.begin.cds'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.cds'}},
      patterns: [
        {include: '#atAnnoNoParen'},
        {include: '#annotationName'},
        {include: '#optColonAndStructure'},
        {include: '#optColonAndArray'},
        {include: '#colonAndNumber'},
        {include: '#colonAndString'},
        {include: '#colonAndTemplateString'},
        {include: '#colonAndHashIdent'},
        {include: '#colonAndConstant'},
        {match: ',', name: 'punctuation.separator.object.cds'},
        {include: '#comments'}
      ]
    },
    selectItemDef: {
      begin: '^\\s*(?=\\*|.+\\s+as\\s+)',
      end: '(?=})|(,)',
      patterns: [
        {include: '#bracedElementDef'},
        {include: '#strings'},
        {include: '#comments'},
        {include: '#atAnnoParen'},
        {include: '#atAnnoNoParen'},
        {include: '#keywords'},
        {include: '#bracketedExpression'},
        {
          match:
            '(?<!@)(?:\\$?\\b[_a-zA-Z][$_a-zA-Z0-9]*|"[^"]*(?:""[^"]*)*"|!\\[[^\\]]*(?:\\]\\][^\\]]*)*\\])',
          name: 'entity.other.attribute-name.cds'
        },
        {include: '#operators'},
        {include: '#numbers'},
        {match: ',', name: 'punctuation.separator.object.cds'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cds'}},
          end: "'(?!')",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cds'}},
          name: 'string.quoted.single.cds',
          patterns: [{match: "''", name: 'meta.single-quote.doubled.cds'}]
        },
        {
          begin: '`',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.cds'}},
          end: '`(?!`)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cds'}},
          name: 'string.quoted.other.template.cds',
          patterns: [
            {match: '``', name: 'string.quoted.other.template.block.cds'},
            {include: '#interpolation'},
            {include: '#escapes'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.cds'
}

export default grammar
