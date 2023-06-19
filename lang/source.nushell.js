// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/hustcer/nu-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['nushell', 'nu-script', 'nushell-script'],
  patterns: [
    {include: '#define-variable'},
    {include: '#define-alias'},
    {include: '#function'},
    {include: '#extern'},
    {include: '#module'},
    {include: '#use-module'},
    {include: '#expression'},
    {include: '#comment'}
  ],
  repository: {
    binary: {
      begin: '\\b(0x)(\\[)',
      beginCaptures: {
        1: {name: 'constant.numeric.nushell'},
        2: {name: 'meta.brace.square.begin.nushell'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.begin.nushell'}},
      name: 'constant.binary.nushell',
      patterns: [{match: '[0-9a-fA-F]{2}', name: 'constant.numeric.nushell'}]
    },
    'braced-expression': {
      begin: '(\\{)(?:\\s*\\|([\\w, ]*)\\|)?',
      beginCaptures: {
        1: {name: 'punctuation.section.block.begin.bracket.curly.nushell'},
        2: {
          patterns: [
            {include: '#function-parameter'},
            {match: ',', name: 'punctuation.separator.nushell'}
          ]
        }
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.section.block.end.bracket.curly.nushell'}
      },
      name: 'meta.expression.braced.nushell',
      patterns: [
        {
          begin:
            '((?:(?:[^$\\(\\{\\["\'#\\s][^\\(\\{\\["\'#\\s]*)|\\$?(?:"[^"]+"|\'[^\']+\')))\\s*(:)\\s*',
          beginCaptures: {
            1: {
              name: 'variable.other.nushell',
              patterns: [{include: '#paren-expression'}]
            },
            2: {patterns: [{include: '#operators'}]}
          },
          end: '(?=,|\\s|\\})',
          name: 'meta.record-entry.nushell',
          patterns: [{include: '#value'}]
        },
        {include: 'source.nushell'}
      ]
    },
    command: {
      beginCaptures: {
        1: {name: 'keyword.operator.nushell'},
        2: {
          patterns: [
            {include: '#control-keywords'},
            {
              captures: {0: {name: 'keyword.other.builtin.nushell'}},
              match: '(?:ansi|char) \\w+'
            },
            {
              captures: {
                1: {name: 'keyword.other.builtin.nushell'},
                2: {patterns: [{include: '#value'}]}
              },
              match:
                '(a(?:l(?:ias|l)|n(?:si(?: (?:gradient|link|strip))?|y)|ppend|st)|b(?:its(?: (?:and|not|or|ro(?:l|r)|sh(?:l|r)|xor))?|reak|ytes(?: (?:a(?:dd|t)|build|collect|ends-with|index-of|length|re(?:move|place|verse)|starts-with))?)|c(?:al|d|har|lear|o(?:l(?:lect|umns)|m(?:mandline|p(?:act|lete))|n(?:fig(?: (?:env|nu|reset))?|st|tinue))|p)|d(?:ate(?: (?:format|humanize|list-timezone|now|to-(?:record|t(?:able|imezone))))?|e(?:bug|code(?: (?:base64|hex))?|f(?:-env|ault)?|scribe|tect columns)|fr (?:a(?:gg(?:-groups)?|ll-(?:false|true)|ppend|rg-(?:m(?:ax|in)|sort|true|unique|where)|s(?:-date(?:time)?)?)|c(?:ache|o(?:l(?:lect|umns)?|n(?:cat(?:-str|enate)|tains)|unt(?:-null)?)|umulative)|d(?:rop(?:-(?:duplicates|nulls))?|types|ummies)|exp(?:lode|r-not)|f(?:etch|i(?:l(?:l-n(?:an|ull)|ter(?:-with)?)|rst)|latten)|g(?:et(?:-(?:day|hour|m(?:inute|onth)|nanosecond|ordinal|second|week(?:day)?|year))?|roup-by)|i(?:nto-(?:df|lazy|nu)|s-(?:duplicated|in|n(?:ot-null|ull)|unique))|join|l(?:ast|i(?:st|t)|owercase|s)|m(?:ax|e(?:an|dian|lt)|in)|n(?:-unique|ot)|o(?:pen|therwise)|qu(?:antile|ery)|r(?:e(?:name|place(?:-all)?|verse)|olling)|s(?:ample|e(?:lect|t(?:-with-idx)?)|h(?:ape|ift)|lice|ort-by|t(?:d|r(?:-(?:lengths|slice)|ftime))|um(?:mary)?)|t(?:ake|o-(?:arrow|csv|parquet))|u(?:nique|ppercase)|va(?:lue-counts|r)|w(?:hen|ith-column))|o|rop(?: (?:column|nth))?|u)|e(?:ach(?: while)?|cho|n(?:code(?: (?:base64|hex))?|ter|umerate)|rror make|very|x(?:ec|it|p(?:l(?:ain|ore)|ort(?: (?:alias|def(?:-env)?|extern|old-alias|use)|-env)?)|tern))|f(?:i(?:l(?:l|ter)|nd|rst)|latten|mt|or(?:mat(?: filesize)?)?|rom(?: (?:csv|eml|i(?:cs|ni)|json|nuon|ods|p(?:arquet|list)|ssv|t(?:oml|sv)|url|vcf|x(?:lsx|ml)|y(?:aml|ml)))?)|g(?:et|lob|r(?:id|oup(?:-by)?)|stat)?|h(?:ash(?: (?:base64|md5|sha256))?|e(?:aders|lp(?: (?:aliases|commands|externs|modules|operators))?)|i(?:de(?:-env)?|st(?:o(?:gram|ry(?: session)?))?)|ttp(?: (?:delete|get|head|p(?:atch|ost|ut)))?)|i(?:f|gnore|n(?:c|put|s(?:ert|pect)|to(?: (?:b(?:inary|ool)|d(?:atetime|ecimal|uration)|filesize|int|record|s(?:qlite|tring)))?)|s-(?:admin|empty)|tems)|j(?:oin|son path)|k(?:eybindings(?: (?:default|list(?:en)?))?|ill)|l(?:ast|e(?:ngth|t(?:-env)?)|ines|o(?:ad-env|op)|s)|m(?:at(?:ch|h(?: (?:a(?:bs|rc(?:cos(?:h)?|sin(?:h)?|tan(?:h)?)|vg)|c(?:eil|os(?:h)?)|e(?:val|xp)?|floor|l(?:n|og)|m(?:ax|edian|in|ode)|p(?:i|roduct)|round|s(?:in(?:h)?|qrt|tddev|um)|ta(?:n(?:h)?|u)|variance))?)|e(?:rge|tadata)|kdir|o(?:dule|ve)|ut|v)|n(?:u-(?:check|highlight))?|o(?:ld-alias|pen|verlay(?: (?:hide|list|new|use))?)|p(?:a(?:r(?:-each|se)|th(?: (?:basename|dirname|ex(?:ists|pand)|join|parse|relative-to|split|type))?)|eriodic-table|lot|net|ort|r(?:epend|int|ofile)|s)?|query(?: (?:db|json|web|xml))?|r(?:an(?:dom(?: (?:bool|chars|d(?:ecimal|ice)|integer|uuid))?|ge)|e(?:duce|g(?:ex|ist(?:er|ry query))|ject|name|turn|verse)|m|o(?:ll(?: (?:down|left|right|up))?|tate)|un-external)|s(?:ave|chema|e(?:lect|q(?: (?:char|date))?)|h(?:ells|uffle)|ize|kip(?: (?:until|while))?|leep|o(?:rt(?:-by)?|urce(?:-env)?)|plit(?: (?:c(?:hars|olumn)|list|row|words)|-by)?|t(?:art|r(?: (?:c(?:a(?:mel-case|pitalize)|o(?:llect|ntains))|d(?:istance|owncase)|ends-with|find-replace|index-of|join|kebab-case|l(?:ength|pad)|pascal-case|r(?:e(?:place|verse)|pad)|s(?:creaming-snake-case|nake-case|tarts-with|ubstring)|t(?:itle-case|o-(?:d(?:atetime|ecimal)|int)|rim)|upcase))?)|ys)|t(?:a(?:ble|ke(?: (?:until|while))?)|erm size|imeit|o(?: (?:csv|html|json|md|nuon|t(?:ext|oml|sv)|xml|yaml)|uch)?|r(?:anspose|y)|utor)|u(?:niq(?:-by)?|p(?:date(?: cells)?|sert)|rl(?: (?:build-query|encode|join|parse))?|se)|v(?:alues|ersion|iew(?: (?:files|s(?:ource|pan)))?)|w(?:atch|h(?:ere|i(?:ch|le))|i(?:ndow|th-env)|rap)|xyplot|zip)(?![\\w-])( (.*))?'
            },
            {
              captures: {1: {patterns: [{include: '#paren-expression'}]}},
              match: '(?<=\\^)(?:\\$("[^"]+"|\'[^\']+\')|"[^"]+"|\'[^\']+\')',
              name: 'entity.name.type.external.nushell'
            },
            {
              captures: {
                1: {name: 'entity.name.type.external.nushell'},
                2: {patterns: [{include: '#value'}]}
              },
              match: '([\\w.]+(?:-[\\w.!]+)*)(?: (.*))?'
            },
            {include: '#value'}
          ]
        }
      },
      end: '(?=\\||\\)|\\}|;)|$',
      name: 'meta.command.nushell',
      patterns: [{include: '#value'}]
    },
    comment: {match: '(#.*)$', name: 'comment.nushell'},
    'constant-keywords': {
      match: '\\b(?:true|false|null)\\b',
      name: 'constant.language.nushell'
    },
    'constant-value': {
      patterns: [
        {include: '#constant-keywords'},
        {include: '#numbers'},
        {include: '#numbers-hexa'},
        {include: '#datetime'},
        {include: '#binary'}
      ]
    },
    'control-keywords': {
      match:
        '(?<![0-9a-zA-Z_\\-.\\/:\\\\])(?:break|continue|else(?: if)?|for|if|loop|mut|return|try|while)(?![0-9a-zA-Z_\\-.\\/:\\\\])',
      name: 'keyword.control.nushell'
    },
    datetime: {
      match:
        '\\b\\d{4}-\\d{2}-\\d{2}(?:T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d{1,3})?(?:\\+\\d{2}:?\\d{2}|Z)?)?\\b',
      name: 'constant.numeric.nushell'
    },
    'define-alias': {
      captures: {
        1: {name: 'entity.name.function.nushell'},
        2: {name: 'entity.name.type.nushell'},
        3: {patterns: [{include: '#operators'}]}
      },
      match: '((?:export )?alias)\\s+([\\w\\-!]+)\\s*(=)'
    },
    'define-extern': {
      captures: {
        1: {name: 'entity.name.function.nushell'},
        2: {name: 'entity.name.type.nushell'}
      },
      match: '((?:export\\s+)?extern)\\s+([\\w\\-!]+|"[\\w\\-! ]+")'
    },
    'define-function': {
      captures: {
        1: {name: 'entity.name.function.nushell'},
        2: {name: 'entity.name.type.nushell'}
      },
      match: '((?:export\\s+)?def(?:-env)?)\\s+([\\w\\-!]+|"[\\w\\-! ]+")'
    },
    'define-variable': {
      captures: {
        1: {name: 'keyword.other.nushell'},
        2: {name: 'variable.other.nushell'},
        3: {patterns: [{include: '#operators'}]}
      },
      match: '(let(?:-env)?|mut|const)\\s+(\\w+)\\s*(=)'
    },
    expression: {
      patterns: [
        {include: '#pre-command'},
        {include: '#for-loop'},
        {include: '#operators'},
        {include: '#control-keywords'},
        {include: '#constant-value'},
        {include: '#command'},
        {include: '#value'}
      ]
    },
    extern: {
      begin: '((?:export\\s+)?extern)\\s+([\\w\\-]+|"[\\w\\- ]+")',
      beginCaptures: {0: {patterns: [{include: '#define-extern'}]}},
      end: '(?<=\\])',
      endCaptures: {0: {name: 'punctuation.definition.function.end.nushell'}},
      patterns: [{include: '#function-parameters'}]
    },
    'for-loop': {
      begin: '(for)\\s+(\\$?\\w+)\\s+(in)\\s+(.+)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.other.nushell'},
        2: {name: 'variable.other.nushell'},
        3: {name: 'keyword.other.nushell'},
        4: {patterns: [{include: '#value'}]},
        5: {name: 'punctuation.section.block.begin.bracket.curly.nushell'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.section.block.end.bracket.curly.nushell'}
      },
      name: 'meta.for-loop.nushell',
      patterns: [{include: 'source.nushell'}]
    },
    function: {
      begin: '((?:export\\s+)?def(?:-env)?)\\s+([\\w\\-]+|"[\\w\\- ]+")',
      beginCaptures: {
        0: {
          patterns: [{include: '#define-function'}, {include: '#define-extern'}]
        }
      },
      end: '(?<=\\})',
      endCaptures: {0: {name: 'punctuation.definition.function.end.nushell'}},
      patterns: [{include: '#function-parameters'}, {include: '#function-body'}]
    },
    'function-body': {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.function.begin.nushell'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.function.end.nushell'}},
      name: 'meta.function.body.nushell',
      patterns: [{include: 'source.nushell'}]
    },
    'function-parameter': {
      patterns: [
        {include: '#function-parameter-declare'},
        {include: '#function-parameter-default-value'}
      ]
    },
    'function-parameter-declare': {
      captures: {
        1: {name: 'variable.parameter.nushell'},
        2: {name: 'variable.parameter.nushell'},
        3: {name: 'keyword.operator.nushell'},
        4: {name: 'entity.name.type.nushell'},
        5: {name: 'string.quoted.nushell'}
      },
      match:
        '(-{0,2}[\\w-]+|\\.{3})(?:\\((-[\\w?])\\))?(?:\\s*(\\??:)\\s*(\\w+)(?:@((?:"[^"]+")|(?:\'[^\']+\')))?)?'
    },
    'function-parameter-default-value': {
      begin: '=\\s*',
      captures: {
        1: {name: 'variable.parameter.nushell'},
        2: {name: 'variable.parameter.nushell'},
        3: {name: 'keyword.operator.nushell'},
        4: {name: 'entity.name.type.nushell'}
      },
      end: '(?=\\])|,|$',
      patterns: [{include: '#value'}]
    },
    'function-parameters': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.begin.nushell'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.end.nushell'}},
      name: 'meta.function.parameters.nushell',
      patterns: [{include: '#function-parameter'}, {include: '#comment'}]
    },
    'internal-variables': {
      match: '\\$(?:nu|env)\\b',
      name: 'variable.language.nushell'
    },
    keyword: {match: '(?:def(?:-env)?)', name: 'keyword.other.nushell'},
    module: {
      begin: '(module)\\s+([\\w\\-]+)\\s*\\{',
      beginCaptures: {
        1: {name: 'entity.name.function.nushell'},
        2: {name: 'entity.name.namespace.nushell'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.module.end.nushell'}},
      name: 'meta.module.nushell',
      patterns: [{include: 'source.nushell'}]
    },
    numbers: {
      match:
        '(?<![\\w-])[-+]?(?:\\d+|\\d{1,3}(?:_\\d{3})*)(?:\\.\\d*)?(?i:ns|us|ms|sec|min|hr|day|wk|b|kb|mb|gb|tb|pt|eb|zb|kib|mib|gib|tib|pit|eib|zib)?(?:(?![\\w.])|(?=\\.\\.))',
      name: 'constant.numeric.nushell'
    },
    'numbers-hexa': {
      match: '(?<![\\w-])0x[0-9a-fA-F]+(?![\\w.])',
      name: 'constant.numeric.nushell'
    },
    operators: {
      patterns: [
        {include: '#operators-word'},
        {include: '#operators-symbols'},
        {include: '#ranges'}
      ]
    },
    'operators-symbols': {
      match:
        '(?<= )(?:\\+|\\-|\\*|\\/|\\/\\/|\\*\\*|!=|[<>=]=?|[!=]~|&&|\\|\\||\\||\\+\\+=?)(?= |$)',
      name: 'keyword.control.nushell'
    },
    'operators-word': {
      match:
        '(?<= |\\()(?:mod|in|not-in|not|and|or|xor|bit-or|bit-and|bit-xor|bit-shl|bit-shr|starts-with|ends-with)(?= |\\)|$)',
      name: 'keyword.control.nushell'
    },
    parameters: {match: '\\b-{1,2}[\\w-]*', name: 'variable.parameter.nushell'},
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.begin.nushell'}},
      end: '\\)',
      endCaptures: {0: {name: 'meta.brace.round.end.nushell'}},
      name: 'meta.expression.parenthesis.nushell',
      patterns: [{include: '#expression'}]
    },
    'pre-command': {
      begin: '(\\w+)(=)',
      beginCaptures: {
        1: {name: 'variable.other.nushell'},
        2: {patterns: [{include: '#operators'}]}
      },
      end: '(?=\\s+)',
      patterns: [{include: '#value'}]
    },
    ranges: {match: '\\.\\.<?|:', name: 'keyword.control.nushell'},
    string: {
      patterns: [
        {include: '#string-single-quote'},
        {include: '#string-backtick'},
        {include: '#string-double-quote'},
        {include: '#string-interpolated-double'},
        {include: '#string-interpolated-single'},
        {include: '#string-bare'}
      ]
    },
    'string-backtick': {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nushell'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nushell'}},
      name: 'string.quoted.single.nushell'
    },
    'string-bare': {
      match: '[^$\\[{("\',|#\\s|][^\\[\\]{}()"\'\\s#,|]*',
      name: 'string.bare.nushell'
    },
    'string-double-quote': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nushell'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nushell'}},
      name: 'string.quoted.double.nushell',
      patterns: [{match: '\\w+'}, {include: '#string-escape'}]
    },
    'string-escape': {
      match: '\\\\(?:[bfrnt\\\\\'"/]|u[0-9a-fA-F]{4})',
      name: 'constant.character.escape.nushell'
    },
    'string-interpolated-double': {
      begin: '\\$"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nushell'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nushell'}},
      name: 'string.interpolated.double.nushell',
      patterns: [
        {match: '\\\\[()]', name: 'constant.character.escape.nushell'},
        {include: '#string-escape'},
        {include: '#paren-expression'}
      ]
    },
    'string-interpolated-single': {
      begin: "\\$'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nushell'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nushell'}},
      name: 'string.interpolated.single.nushell',
      patterns: [{include: '#paren-expression'}]
    },
    'string-single-quote': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nushell'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nushell'}},
      name: 'string.quoted.single.nushell'
    },
    table: {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.begin.nushell'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.end.nushell'}},
      name: 'meta.table.nushell',
      patterns: [
        {include: '#value'},
        {match: ',', name: 'punctuation.separator.nushell'},
        {include: '#comment'}
      ]
    },
    'use-module': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.nushell'},
            2: {name: 'entity.name.namespace.nushell'},
            3: {name: 'keyword.other.nushell'}
          },
          match:
            '^\\s*((?:export )?use)\\s+([\\w\\-]+|"[\\w\\- ]+"|\'[\\w\\- ]+\')(?:\\s+([\\w\\-]+|"[\\w\\- ]+"|\'[\\w\\- ]+\'|\\*))?\\s*;?$'
        },
        {
          begin:
            '^\\s*((?:export )?use)\\s+([\\w\\-]+|"[\\w\\- ]+"|\'[\\w\\- ]+\')\\s*\\[',
          beginCaptures: {
            1: {name: 'entity.name.function.nushell'},
            2: {name: 'entity.name.namespace.nushell'}
          },
          end: '(\\])\\s*;?\\s*$',
          endCaptures: {1: {name: 'meta.brace.square.end.nushell'}},
          patterns: [
            {
              captures: {1: {name: 'keyword.other.nushell'}},
              match: '([\\w\\-]+|"[\\w\\- ]+"|\'[\\w\\- ]+\'|\\*),?'
            },
            {include: '#comment'}
          ]
        },
        {
          captures: {
            2: {name: 'entity.name.function.nushell'},
            3: {
              name: 'string.bare.nushell',
              patterns: [
                {
                  captures: {1: {name: 'entity.name.namespace.nushell'}},
                  match: '([\\w\\- ]+)(?:\\.nu)?(?=$|"|\')'
                }
              ]
            },
            4: {name: 'keyword.other.nushell'}
          },
          match:
            "(?<path>(?:/|\\\\|~[\\/\\\\]|\\.\\.?[\\/\\\\])?(?:[^\\/\\\\]+[\\/\\\\])*[\\w\\- ]+(?:\\.nu)?){0}^\\s*((?:export )?use)\\s+(\"\\g<path>\"|'\\g<path>\\'|(?![\"'])\\g<path>)(?:\\s+([\\w\\-]+|\"[\\w\\- ]+\"|'[^']+'|\\*))?\\s*;?$"
        },
        {
          begin:
            '(?<path>(?:/|\\\\|~[\\/\\\\]|\\.\\.?[\\/\\\\])?(?:[^\\/\\\\]+[\\/\\\\])*[\\w\\- ]+(?:\\.nu)?){0}^\\s*((?:export )?use)\\s+("\\g<path>"|\'\\g<path>\\\'|(?!["\'])\\g<path>)\\s+\\[',
          beginCaptures: {
            2: {name: 'entity.name.function.nushell'},
            3: {
              name: 'string.bare.nushell',
              patterns: [
                {
                  captures: {1: {name: 'entity.name.namespace.nushell'}},
                  match: '([\\w\\- ]+)(?:\\.nu)?(?=$|"|\')'
                }
              ]
            }
          },
          end: '(\\])\\s*;?\\s*$',
          endCaptures: {1: {name: 'meta.brace.square.end.nushell'}},
          patterns: [
            {
              captures: {0: {name: 'keyword.other.nushell'}},
              match: '([\\w\\-]+|"[\\w\\- ]+"|\'[\\w\\- ]+\'|\\*),?'
            },
            {include: '#comment'}
          ]
        },
        {
          captures: {0: {name: 'entity.name.function.nushell'}},
          match: '^\\s*(?:export )?use\\b'
        }
      ]
    },
    value: {
      patterns: [
        {include: '#variables'},
        {include: '#variable-fields'},
        {include: '#control-keywords'},
        {include: '#constant-value'},
        {include: '#table'},
        {include: '#parameters'},
        {include: '#operators'},
        {include: '#paren-expression'},
        {include: '#braced-expression'},
        {include: '#string'},
        {include: '#comment'}
      ]
    },
    'variable-fields': {name: 'variable.other.nushell'},
    variables: {
      captures: {
        1: {
          patterns: [
            {include: '#internal-variables'},
            {match: '\\$.+', name: 'variable.other.nushell'}
          ]
        }
      },
      match: '(\\$[a-zA-Z0-9_]+)'
    }
  },
  scopeName: 'source.nushell'
}

export default grammar
