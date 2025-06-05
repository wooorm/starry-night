// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/chriscamicas/abl-tmlanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.w'],
  names: ['openedge-abl', 'progress', 'openedge', 'abl'],
  patterns: [{include: '#statements'}],
  repository: {
    'abl-function-variable-arg': {
      begin: '(?i)\\s*(set-size)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [
        {include: '#parens'},
        {include: '#type-member-call'},
        {include: '#variable-name'}
      ]
    },
    'abl-functions': {
      patterns: [
        {include: '#abl-functions-A'},
        {include: '#abl-functions-B'},
        {include: '#abl-functions-C'},
        {include: '#abl-functions-D'},
        {include: '#abl-functions-E'},
        {include: '#abl-functions-F'},
        {include: '#abl-functions-G'},
        {include: '#abl-functions-H'},
        {include: '#abl-functions-I'},
        {include: '#abl-functions-K'},
        {include: '#abl-functions-L'},
        {include: '#abl-functions-M'},
        {include: '#abl-functions-N'},
        {include: '#abl-functions-O'},
        {include: '#abl-functions-P'},
        {include: '#abl-functions-Q'},
        {include: '#abl-functions-R'},
        {include: '#abl-functions-S'},
        {include: '#abl-functions-T'},
        {include: '#abl-functions-U'},
        {include: '#abl-functions-V'},
        {include: '#abl-functions-W'},
        {include: '#abl-functions-Y'}
      ]
    },
    'abl-functions-A': {
      begin:
        '(?i)\\s*((abs(?:olute|olut|olu|ol|o)?)|(accum(?:ulate|ulat|ula|ul|u)?)|(ambig(?:uous|uou|uo|u)?)|(asc(?:ending|endin|endi|end|en|e)?)|(avail(?:able|abl|ab|a)?)|add-interval|alias|audit-enabled)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-B': {
      begin:
        '(?i)\\s*(base64-decode|base64-encode|box|buffer-group-id|buffer-group-name|buffer-partition-id|buffer-tenant-id|buffer-tenant-name)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-C': {
      begin:
        '(?i)\\s*((compare(?:s)?)|(current-lang(?:uage|uag|ua|u)?)|can-do|can-find|can-query|can-set|caps|cast|chr|codepage-convert|connected|count-of|current-changed|current-result-row|current-value)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-D': {
      begin:
        '(?i)\\s*((dbrest(?:rictions|riction|rictio|ricti|rict|ric|ri|r)?)|(dbvers(?:ion|io|i)?)|(dec(?:imal|ima|im|i)?)|(dynamic-func(?:tion|tio|ti|t)?)|data-source-modified|dataservers|date|datetime|datetime-tz|day|db-remote-host|dbcodepage|dbcollation|dbname|dbparam|dbtaskid|dbtype|decrypt|defined|dynamic-cast|dynamic-current-value|dynamic-enum|dynamic-invoke|dynamic-next-value|dynamic-property)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-E': {
      begin:
        '(?i)\\s*(encode|encrypt|entered|entry|error|etime|exp|extent)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-F': {
      begin:
        '(?i)\\s*((frame-inde(?:x)?)|(frame-val(?:ue|u)?)|fill|first|first-of|frame-col|frame-db|frame-down|frame-field|frame-file|frame-line|frame-name|frame-row)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-G': {
      begin:
        '(?i)\\s*((gateway(?:s)?)|(get-codepage(?:s)?)|(get-codepage(?:s)?)|(get-coll(?:ations|ation|atio|ati|at|a)?)|(go-pend(?:ing|in|i)?)|generate-pbe-key|generate-pbe-salt|generate-random-key|generate-uuid|get-bits|get-byte|get-byte-order|get-bytes|get-class|get-collation|get-db-client|get-double|get-effective-tenant-id|get-effective-tenant-name|get-float|get-int64|get-long|get-pointer-value|get-short|get-size|get-string|get-unsigned-long|get-unsigned-short|guid)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-H': {
      begin: '(?i)\\s*(handle|hash-code|hex-decode|hex-encode)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-I': {
      begin:
        '(?i)\\s*((int(?:eger|ege|eg|e)?)|(is-attr(?:-space|-spac|-spa|-sp|-s|-)?)|index|input|int64|interval|is-codepage-fixed|is-column-codepage|is-db-multi-tenant|is-lead-byte|iso-date)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-K': {
      begin:
        '(?i)\\s*((keyfunc(?:tion|tio|ti|t)?)|kblabel|keycode|keylabel|keyword|keyword-all)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-L': {
      begin:
        '(?i)\\s*((line-count(?:er|e)?)|last|last-of|lastkey|lc|ldbname|left-trim|length|library|list-events|list-query-attrs|list-set-attrs|list-widgets|locked|log|logical|lookup|lower)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-M': {
      begin:
        '(?i)\\s*((min(?:imum|imu|im|i)?)|maximum|md5-digest|member|message-digest|message-lines|month|mtime)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-N': {
      begin:
        '(?i)\\s*((num-ali(?:ases|ase|as|a)?)|new|next-value|normalize|not|now|num-dbs|num-entries|num-results)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-O': {
      begin:
        '(?i)\\s*((os-drive(?:s)?)|opsys|os-dir|os-error|os-getenv)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-P': {
      begin:
        '(?i)\\s*((page-num(?:ber|be|b)?)|(proc-ha(?:ndle|ndl|nd|n)?)|(proc-st(?:atus|atu|at|a)?)|(provers(?:ion|io|i)?)|page-size|pdbname|process-architecture|program-name|progress|promsgs|propath)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-Q': {
      begin: '(?i)\\s*(query-off-end|quoter)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-R': {
      begin:
        '(?i)\\s*((record-len(?:gth|gt|g)?)|(relation-fi(?:elds|eld|el|e)?)|(return-val(?:ue|u)?)|(rgb-v(?:alue|alu|al|a)?)|r-index|random|raw|recid|rejected|replace|retry|return|right-trim|round|row-state|rowid)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-S': {
      begin:
        '(?i)\\s*((setuser(?:id|i)?)|(subst(?:itute|itut|itu|it|i)?)|(substr(?:ing|in|i)?)|screen-lines|sdbname|search|seek|set-db-client|set-effective-tenant|set-size|sha1-digest|skip|sqrt|ssl-server-name|string|super)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-T': {
      begin:
        '(?i)\\s*((transact(?:ion|io|i)?)|(trunc(?:ate|at|a)?)|tenant-id|tenant-name|tenant-name-to-id|terminal|this-object|time|timezone|to-rowid|today|trim|type-of)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-U': {
      begin: '(?i)\\s*(unbox|userid)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-V': {
      begin: '(?i)\\s*(valid-event|valid-handle|valid-object|value)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-W': {
      begin: '(?i)\\s*((widget-h(?:andle|andl|and|an|a)?)|weekday)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-Y': {
      begin: '(?i)\\s*(year)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-system-handles': {
      captures: {
        1: {name: 'variable.language.abl'},
        2: {name: 'punctuation.separator.colon.abl'}
      },
      match:
        '(?i)\\b(active-window|audit-control|audit-policy|clipboard|codebase-locator|color-table|compiler|current-window|debugger|default-window|dslog-manager|(error-stat(?:us|u)?)|(file-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|font-table|(last-even(?:t)?)|log-manager|profiler|(rcode-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|security-policy|self|session|source-procedure|super|target-procedure|this-object|this-procedure|web-context)\\b(?![#$\\-_%&])'
    },
    'access-modifier': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\s*(package-private|private|package-protected|protected|public|static|override|abstract|final)\\s+'
    },
    'analyze-suspend-resume': {
      begin: '(?i)(&analyze-suspend|&analyze-resume)\\s*',
      end: '(?=(?://|/\\*))|$',
      name: 'comment.preprocessor.analyze-suspend.abl'
    },
    annotation: {
      patterns: [
        {include: '#annotation-simple'},
        {include: '#annotation-attributes'}
      ]
    },
    'annotation-attributes': {
      begin: '(^|\\s+)(\\@[a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*(?=\\()',
      beginCaptures: {2: {name: 'entity.name.tag.abl'}},
      end: '(?=\\.)',
      name: 'meta.declaration.annotation.abl',
      patterns: [
        {include: '#parens'},
        {
          captures: {1: {name: 'entity.other.attribute-name.abl'}},
          match: '\\s*([a-zA-Z_][a-zA-Z0-9_#$\\-%&]+)(?=[\\=\\s$])'
        },
        {include: '#string'},
        {include: '#operator-no-space'},
        {include: '#punctuation-comma'}
      ]
    },
    'annotation-simple': {
      captures: {2: {name: 'entity.name.tag.abl'}},
      match: '(^|\\s*)(\\@[a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*(?=\\.)',
      name: 'meta.declaration.annotation.abl'
    },
    'argument-reference': {
      captures: {1: {name: 'support.other.argument.abl'}},
      match:
        '\\s*((\\{\\s*&[\\.a-zA-Z0-9_\\-#$%\\/]+\\})|(\\{\\s*\\d+\\})|(\\{\\s*\\*\\}))\\s*'
    },
    'array-literal': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.square.begin.abl'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.bracket.square.end.abl'}},
      name: 'meta.array.literal.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s+(for)\\s+'
        },
        {include: '#expression'},
        {include: '#preprocessors'},
        {include: '#comment'},
        {include: '#punctuation-comma'}
      ]
    },
    'array-use': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.square.begin.abl'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.bracket.square.end.abl'}},
      name: 'meta.array.literal.abl',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'as-type': {
      begin: '\\s*([Aa][Ss])\\s*([Cc][Ll][Aa][Ss]{2})?',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '\\s*(\\.|\\,|\\s*)',
      patterns: [{include: '#primitive-type'}, {include: '#type-names'}]
    },
    'attribute-access': {begin: ':', end: '(?=:)|(?=\\s*)'},
    'block-label': {
      captures: {
        2: {name: 'entity.name.label.abl'},
        3: {name: 'punctuation.terminator.abl'}
      },
      match:
        '(?i)^\\s*(?!((?:transact(?:ion|io|i)?)|no-lock|(?:exclusive-l(?:ock|oc|o)?)|(?:share(?:-lock|-loc|-lo|-l|-)?)):)([a-zA-Z][a-zA-Z0-9_\\-#$%\\-$#]*)(:)\\s'
    },
    'block-statement': {
      begin: '(?i)(?<!end)\\s*(do|repeat|finally)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '\\s*(?=:)|(?<=:)|(?=\\.)|(?<=\\.)\\s*',
      name: 'meta.block.abl',
      patterns: [
        {include: '#comment'},
        {include: '#for-record'},
        {include: '#operator'},
        {include: '#from-to-by'},
        {include: '#while-expression'},
        {
          match: '(?i)\\b((transact(?:ion|io|i)?)|stop-after)\\b',
          name: 'keyword.other.abl'
        },
        {include: '#numeric'},
        {include: '#type-member-call'},
        {include: '#language-functions'},
        {include: '#abl-functions'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-colon'},
        {include: '#branch-options'},
        {include: '#keywords'},
        {include: '#expression'},
        {include: '#preprocessors'}
      ]
    },
    'block-undo-leave-next-retry': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.label.abl'}
      },
      match:
        '(?i)\\s*(?<!,)\\s*(leave|next|retry|undo)\\s*(?!on)([a-zA-Z0-9_\\-#$%\\-$]*)?\\s*'
    },
    'branch-leave-next-retry-throw': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.label.abl'}
      },
      match:
        '(?i)\\s*(?<=,)\\s*(leave|next|retry|throw)\\s*(?!on)([a-zA-Z0-9_\\-#$%\\-$]*)?\\s*'
    },
    'branch-options': {
      patterns: [
        {include: '#on-error-endkey-stop'},
        {include: '#branch-leave-next-retry-throw'},
        {include: '#branch-return-value-double'},
        {include: '#branch-return-value-single'},
        {include: '#branch-return-no-apply'},
        {include: '#branch-return-error-expression'},
        {include: '#punctuation-comma'}
      ]
    },
    'branch-return-error-expression': {
      begin: '(?i)\\s*(return)\\s+(error)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?=:|$)',
      patterns: [
        {include: '#new-class'},
        {include: '#function-arguments'},
        {include: '#parens'},
        {include: '#property-call'},
        {include: '#preprocessors'},
        {include: '#expression'}
      ]
    },
    'branch-return-no-apply': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*(return)\\s+(no-apply)\\s*'
    },
    'branch-return-value-double': {
      begin: '(?i)\\s*(return)(\\s+(error))?\\s+(")',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'punctuation.definition.string.begin.abl'}
      },
      end: '(")',
      endCaptures: {1: {name: 'punctuation.definition.string.end.abl'}},
      patterns: [{include: '#escape-char'}]
    },
    'branch-return-value-single': {
      begin: "(?i)\\s*(return)(\\s+(error))?\\s+(')",
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'punctuation.definition.string.begin.abl'}
      },
      end: "(')",
      endCaptures: {1: {name: 'punctuation.definition.string.end.abl'}},
      name: 'string.single.complex.abl',
      patterns: [{include: '#escape-char'}]
    },
    'break-by': {
      captures: {
        2: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*((break)\\s+)?(by)\\s+(([a-zA-Z][a-zA-Z_\\-#$%]*\\.)?([a-zA-Z][a-zA-Z_\\-#$%]*\\.)([a-zA-Z][a-zA-Z_\\-#$%]*)(\\[\\d+\\])?)\\b'
    },
    'break-group': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.brace.round.js'},
        3: {name: 'storage.data.table.abl'},
        4: {name: 'meta.brace.round.js'}
      },
      match:
        '(?i)\\s*(first-of|first|last-of|last)\\s*(\\()\\s*([a-zA-Z][a-zA-Z#$\\-_%&]*\\.[a-zA-Z_][a-zA-Z#$\\-_%&]*(\\.[a-zA-Z_][a-zA-Z#$\\-_%&]*)?)\\s*(\\))\\s*'
    },
    'buffer-for-table': {
      captures: {
        1: {name: 'storage.data.table.abl'},
        2: {name: 'keyword.other.abl'},
        4: {name: 'keyword.other.abl'},
        5: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*(?!do|repeat|for)([a-zA-Z_\\-#$%]+)\\s+(for)\\s+((temp-table)\\s+)?([a-zA-Z][a-zA-Z0-9_\\-#$%]*)\\s*'
    },
    'buffer-name': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\b(buffer)\\s+([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)'
    },
    'cache-value': {
      captures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'constant.numeric.source.abl'}
      },
      match:
        '\\b([Cc][Aa][Cc][Hh][Ee])\\s+(0[xX][[:xdigit:]]+)?|(\\-?[0-9]+(\\.[0-9]+)?)\\b'
    },
    'can-find': {
      begin: '(?i)\\s*(can-find)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'}
      },
      end: '(?i)\\b(?=\\)|where|no-lock|(share(?:-lock|-loc|-lo|-l|-)?)|using|(no-prefe(?:tch|tc|t)?)|no-wait)\\s*',
      patterns: [
        {include: '#parens'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#numeric'},
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(first|last)\\b'
        },
        {include: '#use-index'},
        {include: '#of-phrase'},
        {include: '#db-dot-table'},
        {include: '#db-dot-table-dot-field'}
      ]
    },
    'code-block': {
      patterns: [
        {include: '#create-statement'},
        {include: '#record-buffer-functions'},
        {include: '#can-find'},
        {include: '#comment'},
        {include: '#break-group'},
        {include: '#block-undo-leave-next-retry'},
        {include: '#operator'},
        {include: '#string'},
        {include: '#language-functions'},
        {include: '#numeric'},
        {include: '#constant'},
        {include: '#operator'},
        {include: '#include-file'},
        {include: '#run-statement'},
        {include: '#define'},
        {include: '#block-statement'},
        {include: '#end-block'},
        {include: '#property-call'},
        {include: '#new-record'},
        {include: '#type-reference'},
        {include: '#abl-functions'},
        {include: '#abl-system-handles'},
        {include: '#handle-methods'},
        {include: '#handle-attributes'},
        {include: '#keywords'},
        {include: '#variable-name'},
        {include: '#static-object-property-call'},
        {include: '#punctuation-period'},
        {include: '#punctuation-colon'}
      ]
    },
    comment: {
      patterns: [
        {include: '#singlelinecomment'},
        {include: '#multilinecomment'}
      ]
    },
    constant: {
      match:
        '(?i)(?<=^|\\b|\\s|\\()(true|false|yes|no|\\?)(?![a-zA-Z0-9_\\-#$%])',
      name: 'constant.language.abl'
    },
    'copy-lob': {
      begin: '(?i)\\b(copy-lob)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\.)',
      patterns: [{include: '#code-block'}]
    },
    'create-alias': {
      begin: '(?i)\\s*(create)\\s+(alias)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?=\\.)',
      patterns: [
        {include: '#keywords'},
        {include: '#abl-functions'},
        {
          captures: {1: {name: 'storage.data.database.abl'}},
          match: '\\b([a-zA-Z0-9][a-zA-Z0-9_\\-]*)\\b'
        },
        {include: '#expression'}
      ]
    },
    'create-buffer': {
      begin: '(?i)(create)\\s+(buffer)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?i)(\\b((buffer-n(?:ame|am|a)?)|in)\\b)|(?=\\.)',
      endCaptures: {1: {name: 'keyword.other.abl'}},
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(for|table)\\s*'
        },
        {include: '#define-table'},
        {include: '#buffer-name'},
        {include: '#temp-table-name'},
        {include: '#expression'},
        {include: '#keywords'},
        {include: '#string'},
        {include: '#comment'},
        {include: '#handle-attributes'},
        {include: '#variable-name'}
      ]
    },
    'create-record': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'},
        5: {name: 'keyword.other.abl'},
        6: {name: 'keyword.other.abl'}
      },
      match:
        '(?i)\\s*(create)\\s+([a-zA-Z][a-zA-Z_\\-#$%]*(\\.[a-zA-Z][a-zA-Z_\\-#$%]*)?)\\s*((for)\\s+(tenant))?\\s*'
    },
    'create-statement': {
      patterns: [
        {include: '#create-buffer'},
        {include: '#create-alias'},
        {include: '#create-widget'},
        {include: '#create-with-expression'},
        {include: '#create-record'}
      ]
    },
    'create-widget': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'variable.other.abl'}
      },
      match:
        '(?i)\\s*(create)\\s+(button|combo-box|(?:control-fram(?:e)?)|dialog-box|editor|fill-in|(?:fram(?:e)?)|image|menu|menu-item|radio-set|(?:rect(?:angle|angl|ang|an|a)?)|selection-list|slider|sub-menu|text|toggle-box|window)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b'
    },
    'create-with-expression': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match:
        '(?i)\\s*(create)\\s+(browse|call|client-principal|database|dataset|data-source|query|sax-attributes|sax-reader|sax-writer|server|server-socket|soap-header|soap-header-entryref|socket|temp-table|widget-pool|x-document|x-noderef)\\s*'
    },
    'db-dot-table': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match:
        '(?i)\\b([a-zA-Z_][a-zA-Z0-9#$\\-_%&]*(\\.[a-zA-Z_][a-zA-Z0-9#$\\-_%&]*)?)\\b'
    },
    'db-dot-table-dot-field': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match:
        '(?i)(?<=^|\\s|\\(|,)(([a-zA-Z][a-zA-Z0-9#$\\-_%&]*\\.)?([a-zA-Z_][a-zA-Z0-9#$\\-_%&]*\\.)([a-zA-Z_][a-zA-Z0-9#$\\-_%&]*)(\\[\\d+\\])?)'
    },
    decimals: {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.numeric.source.abl'}
      },
      match: '(?i)\\s*(decimals)\\s((0x)?[[:xdigit:]]+)?'
    },
    declarations: {patterns: [{include: '#define'}]},
    define: {
      begin: '(?i)\\s*(def(?:ine|in|i)?)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(new|(glob(?:al|a|)?)|shared)\\s*'
        },
        {include: '#serializable'},
        {include: '#access-modifier'},
        {include: '#define-enum-member'},
        {include: '#define-variable'},
        {include: '#define-parameter'},
        {include: '#define-button'},
        {include: '#define-dataset'},
        {include: '#define-query'},
        {include: '#define-browse'},
        {include: '#fields-except-list'},
        {include: '#define-event'},
        {include: '#define-property'},
        {include: '#property-accessor'},
        {include: '#array-literal'},
        {include: '#define-field'},
        {include: '#parameter-as'},
        {include: '#define-stream'},
        {include: '#define-buffer'},
        {include: '#define-frame'},
        {include: '#for-table'},
        {include: '#buffer-for-table'},
        {include: '#define-table'},
        {include: '#define-index'},
        {include: '#define-like'},
        {include: '#field-as-object'},
        {include: '#preprocessors'},
        {include: '#extent'},
        {include: '#decimals'},
        {include: '#format-constant'},
        {include: '#timestamp-constant'},
        {include: '#constant'},
        {include: '#numeric'},
        {include: '#string'},
        {include: '#primitive-type'},
        {include: '#dll-type'},
        {include: '#abl-system-handles'},
        {include: '#property-call'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#abl-functions'},
        {include: '#function-parameter-definition'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#label-variable'},
        {include: '#type-names'}
      ]
    },
    'define-browse': {
      begin: '(?i)\\b(browse)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      end: '(?i)\\b(?=\\.)',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.other.abl'}
          },
          match:
            '\\b([Qq][Uu][Ee][Rr][Yy])\\s+([a-zA-Z][a-zA-Z0-9\\-_#$%\\&]+)\\b'
        },
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b((share(?:-lock|-loc|-lo|-l|-)?)|(exclusive-l(?:ock|oc|o)?)|no-lock|no-wait|(disp(?:lay|la|l)?))\\b'
        },
        {include: '#comment'},
        {include: '#db-dot-table-dot-field'},
        {include: '#keywords'},
        {include: '#expression'}
      ]
    },
    'define-buffer': {
      begin: '(?i)\\s*(buffer)\\b(?![#$\\-_%&])',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\.)',
      patterns: [
        {include: '#for-table'},
        {include: '#buffer-for-table'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#string'}
      ]
    },
    'define-button': {
      begin: '(?i)\\s*(button)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      end: '(?=\\.)',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#from-x-and-y'},
        {include: '#numeric'},
        {include: '#keywords'},
        {include: '#expression'}
      ]
    },
    'define-class': {
      begin: '\\b(?<![#$\\-_%&])([Cc][Ll][Aa][Ss]{2})\\b(?![#$\\-_%&])',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '\\s*(:)\\s*',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.class.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\s*(serializable|abstract|final|use-widget-pool|inherits|implements)\\s*'
        },
        {include: '#type-names'},
        {include: '#punctuation-comma'},
        {include: '#comment'}
      ]
    },
    'define-dataset': {
      begin: '(?i)\\b(dataset)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.dataset.abl'}
      },
      end: '(?=\\.)',
      patterns: [
        {include: '#parens'},
        {include: '#punctuation-comma'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.dataset.abl'}
          },
          match:
            '(?i)\\b((?:data-rel(?:ation|atio|ati|at|a)?)|parent-id-relation)\\s*([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)'
        },
        {
          captures: {1: {name: 'support.function.abl'}},
          match: '(?i)\\b(relation-fi(?:elds|eld|el|e)?)\\b'
        },
        {include: '#keywords'},
        {include: '#preprocessors'},
        {include: '#db-dot-table'},
        {include: '#comment'},
        {include: '#string'}
      ]
    },
    'define-enum-member': {
      begin: '(?i)\\b(enum)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\.)',
      patterns: [
        {include: '#comment'},
        {include: '#operator'},
        {include: '#numeric'},
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '\\b([a-zA-Z][a-zA-Z0-9_#$%]*)\\b'
        }
      ]
    },
    'define-enum-type': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.type.abl'},
            3: {name: 'keyword.other.abl'},
            4: {name: 'punctuation.terminator.abl'}
          },
          match: '(?i)\\b(enum)\\s+([\\w#$%\\.]+)\\s*(flags)?\\s*(:)',
          name: 'meta.define.enum.abl'
        }
      ]
    },
    'define-event': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)\\b(event)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b'
    },
    'define-field': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\s*(field)\\s+([a-zA-Z][a-zA-Z0-9_\\-#$%]*)\\s*'
    },
    'define-frame': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      match: '(?i)\\s*((?:fram(?:e)?))\\s*([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)'
    },
    'define-index': {
      begin: '(?i)\\s*(index)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      end: '(?i)(?=\\bindex\\b|\\.)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b(AS|IS|UNIQUE|PRIMARY|WORD-INDEX|(asc(?:ending|endin|endi|end|en|e)?)|(desc(?:ending|endin|endi|end|en|e)?))\\b'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match: '\\b([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b'
        }
      ]
    },
    'define-interface': {
      begin:
        '(?i)\\b(interface)\\s+([\\w#$%]+[\\w#$%\\.]*(\\s*<\\s*[\\w#$%\\.]+\\s*\\>)?)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.type.abl'}
      },
      end: '\\s*(:)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.interface.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(inherits|implements)\\s*'
        },
        {include: '#type-names'},
        {include: '#punctuation-comma'}
      ]
    },
    'define-like': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*(like|like-sequential)\\s+(([a-zA-Z][a-zA-Z_\\-#$%]*\\.)?([a-zA-Z][a-zA-Z0-9_\\-#$%]*\\.)?([a-zA-Z][a-zA-Z0-9_\\-#$%]*))'
    },
    'define-parameter': {
      begin: '(?i)\\b(param(?:eter|ete|et|e)?)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=\\.)|\\b(?=(bgc(?:olor|olo|ol|o)?)|(column-lab(?:el|e)?)|context-help-id|dcolor|decimals|drop-target|extent|font|(fgc(?:olor|olo|ol|o)?)|(form(?:at|a)?)|initial|label|(mouse-p(?:ointer|ointe|oint|oin|oi|o)?)|no-undo|not|(case-sen(?:sitive|sitiv|siti|sit|si|s)?)|(pfc(?:olor|olo|ol|o)?)|view-as|triggers)\\b',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'keyword.other.abl'},
            3: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\b(table)\\s+(for)\\s+([a-zA-Z][a-zA-Z_\\-#$%]*(\\.[a-zA-Z][a-zA-Z_\\-#$%]*)?)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.other.abl'}
          },
          match:
            '(?i)\\b(table-handle|dataset-handle)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'keyword.other.abl'},
            3: {name: 'storage.data.dataset.abl'}
          },
          match:
            '(?i)\\b(dataset)\\s+(for)\\s+([a-zA-Z_\\-#$%]+(\\.[a-zA-Z_\\-#$%]+)?)\\b'
        },
        {include: '#parameter-as'},
        {include: '#keywords'},
        {include: '#expression'}
      ]
    },
    'define-property': {
      begin: '(?i)\\b(property)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '\\s*(?=[Gg][Ee][Tt]|[Ss][Ee][Tt])',
      patterns: [
        {include: '#property-as'},
        {include: '#comment'},
        {include: '#primitive-type'},
        {include: '#extent'},
        {include: '#decimals'},
        {include: '#array-literal'},
        {include: '#timestamp-constant'},
        {include: '#numeric'},
        {include: '#keywords'},
        {include: '#string'},
        {include: '#type-names'}
      ]
    },
    'define-query': {
      begin: '(?i)\\b(query)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      end: '(?i)\\b(?=\\.)\\b',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b(for|scrolling|(rcode-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?))\\b'
        },
        {include: '#cache-value'},
        {include: '#db-dot-table'},
        {include: '#fields-except-list'},
        {include: '#punctuation-comma'},
        {include: '#expression'},
        {include: '#keywords'}
      ]
    },
    'define-stream': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {patterns: [{include: '#variable-name'}]}
      },
      match: '(?i)\\s*(stream)\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%\\-]*)',
      name: 'meta.define.stream.abl'
    },
    'define-table': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)(?<=\\b)(temp-table|before-table)\\s*([a-zA-Z_][a-zA-Z0-9_\\-#$%]*)\\s*'
    },
    'define-type': {
      patterns: [
        {include: '#define-class'},
        {include: '#define-interface'},
        {include: '#define-enum-type'}
      ]
    },
    'define-variable': {
      begin: '(?i)\\s*(var(?:iable|iabl|iab|ia|i)?)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=\\.)|\\b(?=(bgc(?:olor|olo|ol|o)?)|(column-lab(?:el|e)?)|contet-help-id|dcolor|decimals|drop-target|extent|font|(fgc(?:olor|olo|ol|o)?)|(form(?:at|a)?)|initial|label|(mouse-p(?:ointer|ointe|oint|oin|oi|o)?)|no-undo|not|(case-sen(?:sitive|sitiv|siti|sit|si|s)?)|(pfc(?:olor|olo|ol|o)?)|view-as|triggers)\\b',
      endCaptures: {1: {name: 'keyword.other.abl'}},
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '\\b([Cc][Ll][Aa][Ss][Ss])\\b'
        },
        {include: '#variable-as'},
        {include: '#variable-like'},
        {include: '#primitive-type'},
        {include: '#define-like'},
        {include: '#type-names'},
        {include: '#string'}
      ]
    },
    'define-variable-name': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      match:
        '(?i)(var(?:iable|iabl|iab|ia|i)?)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*'
    },
    'dll-type': {
      captures: {1: {name: 'storage.type.abl'}},
      match:
        '(?i)\\b(byte|unsigned-short|short|unsigned-long|long|int64|float)\\b'
    },
    'double-colon-field-name': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match: '\\s*::([a-zA-Z_\\-#$%]+)\\s*'
    },
    doublequotedstring: {
      begin: '(")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.abl'}},
      end: '(?i)(")(:[LlRrTtCcUu]\\d*\\b)?',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.abl'},
        2: {name: 'support.other.abl'}
      },
      name: 'string.double.complex.abl',
      patterns: [{include: '#escape-char'}]
    },
    'end-block': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match:
        '(?i)\\s*(end)\\s+(CASE|CATCH|CLASS|CONSTRUCTOR|DESTRUCTOR|ENUM|FINALLY|FUNCTION|GET|INTERFACE|METHOD|PROCEDURE|SET|TRIGGERS)\\s*'
    },
    'end-function-procedure-method-block': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*(end)\\s*(method|procedure|function)?\\s*(?=\\.)\\s*'
    },
    'escape-char': {match: '~.', name: 'constant.character.escape.abl'},
    'event-un-subscribe': {
      begin: '(?i)(:)(unsubscribe|subscribe)\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'},
        3: {name: 'meta.brace.round.js'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.abl'},
            3: {name: 'punctuation.separator.colon.abl'}
          },
          match: '\\s*([\\w#$%\\-]+(\\.[\\w#$%\\-]+)+)\\s*(:)'
        },
        {
          captures: {
            1: {name: 'variable.other.abl'},
            3: {name: 'punctuation.separator.comma.abl'},
            4: {name: 'punctuation.separator.colon.abl'}
          },
          match: '\\s*([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*((,)|(:))\\s*'
        },
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '\\s*([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s*'
        },
        {include: '#string'}
      ]
    },
    expression: {
      patterns: [
        {include: '#string'},
        {include: '#timestamp-constant'},
        {include: '#constant'},
        {include: '#numeric'},
        {include: '#variable-name'},
        {include: '#double-colon-field-name'}
      ]
    },
    extent: {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.numeric.source.abl'}
      },
      match: '(?i)\\s*(extent)\\s*((0x)?[[:xdigit:]]+)?'
    },
    'field-as-object': {
      captures: {1: {name: 'entity.name.type.abl'}},
      match: '(?i)\\s*((progress\\.lang\\.)?object)\\s*'
    },
    'field-name': {
      patterns: [
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match:
            '\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?\\s*(\\[\\d+\\]))\\s*'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match:
            '\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)\\s*'
        }
      ]
    },
    'fields-except-list': {
      begin: '(?i)\\s*(fields|except)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.brace.round.js'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [
        {include: '#db-dot-table-dot-field'},
        {include: '#field-name'},
        {include: '#punctuation-comma'}
      ]
    },
    'find-record': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*(find)\\s+(first|last|next|prev|current)?\\s*([a-zA-Z_][a-zA-Z0-9#$\\-_%&]+(\\.[a-zA-Z_][a-zA-Z0-9#$\\-_%&]*)?)\\s*'
    },
    'for-each-join': {
      begin: '(?i)(?<=,)\\s*(each|first|last)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'storage.data.table.abl'}
      },
      end: '(?i)\\s*(?=where|no-lock|(exclusive-l(?:ock|oc|o)?)|(share(?:-lock|-loc|-lo|-l|-)?)|tenant-where|use-index|table-scan|using|(no-prefe(?:tch|tc|t)?)|left|outer-join|break|by|(transact(?:ion|io|i)?)|,|:)\\s*',
      patterns: [
        {include: '#fields-except-list'},
        {include: '#of-phrase'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\s*(of)\\s+([a-zA-Z][a-zA-Z_\\-#$%]*(\\.[a-zA-Z][a-zA-Z_\\-#$%]*)?)\\s*'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match:
            '\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)\\s*'
        }
      ]
    },
    'for-each-table': {
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\s*(?=where|no-lock|(exclusive-l(?:ock|oc|o)?)|(share(?:-lock|-loc|-lo|-l|-)?)|tenant-where|use-index|table-scan|using|(no-prefe(?:tch|tc|t)?)|left|outer-join|break|by|(transact(?:ion|io|i)?)|,|:|on)\\s*',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(each|first|last|of)\\s*'
        },
        {include: '#fields-except-list'},
        {include: '#of-phrase'},
        {include: '#field-name'},
        {include: '#db-dot-table'},
        {include: '#db-dot-table-dot-field'},
        {include: '#while-expression'},
        {include: '#comment'}
      ]
    },
    'for-join': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match:
        '(?i)(?<=,|^)\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z_][a-zA-Z0-9_\\-#$%]*)?)\\s+(?=where|no-lock|(exclusive-l(?:ock|oc|o)?)|(share(?:-lock|-loc|-lo|-l|-)?)|tenant-where|use-index|table-scan|using|(no-prefe(?:tch|tc|t)?)|left|outer-join|break|by|(transact(?:ion|io|i)?))\\s*'
    },
    'for-record': {
      captures: {
        1: {name: 'keyword.other.abl'},
        10: {name: 'storage.data.table.abl'},
        11: {name: 'punctuation.separator.comma.abl'},
        12: {name: 'storage.data.table.abl'},
        2: {name: 'storage.data.table.abl'},
        3: {name: 'punctuation.separator.comma.abl'},
        4: {name: 'storage.data.table.abl'},
        5: {name: 'punctuation.separator.comma.abl'},
        6: {name: 'storage.data.table.abl'},
        7: {name: 'punctuation.separator.comma.abl'},
        8: {name: 'storage.data.table.abl'},
        9: {name: 'punctuation.separator.comma.abl'}
      },
      match:
        '(?i)\\s*(for)\\s+([a-zA-Z_\\-#$%]*)\\s*(,)?\\s*([a-zA-Z_\\-#$%]*)?\\s*(,)?\\s*([a-zA-Z_\\-#$%]*)?\\s*(,)?\\s*([a-zA-Z_\\-#$%]*)?\\s*(,)?\\s*([a-zA-Z_\\-#$%]*)?\\s*(,)?\\s*([a-zA-Z_\\-#$%]*)?'
    },
    'for-table': {
      captures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\s*(for)\\s+((temp-table)\\s+)?([a-zA-Z_\\-#$%]+)\\s*'
    },
    'format-constant': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.language.source.abl'}
      },
      match: '(?i)\\b((?:form(?:at|a)?))\\s+(9+/9+/9+)\\b'
    },
    'from-to-by': {
      begin: '\\s*([a-zA-Z0-9_\\-#$%$\\-_%&]+)\\s+(=)\\s*',
      beginCaptures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.operator.source.abl'}
      },
      end: '(?i)(?=(transact(?:ion|io|i)?)|on|:|with|while)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s+(to|by)\\s*'
        },
        {include: '#numeric'},
        {include: '#branch-options'},
        {include: '#abl-functions'},
        {include: '#db-dot-table-dot-field'},
        {include: '#expression'}
      ]
    },
    'from-x-and-y': {
      captures: {
        1: {name: 'keyword.other.abl'},
        12: {name: 'constant.numeric.source.abl'},
        2: {name: 'keyword.other.abl'},
        6: {name: 'constant.numeric.source.abl'},
        8: {name: 'keyword.other.abl'}
      },
      match:
        '(?i)\\b(from)\\s+(X)\\s+((0(x)[[[:xdigit:]]]+)|(\\-?[[0-9]]+(\\.[[0-9]]+)?))\\s+(y)\\s+((0(x)[[[:xdigit:]]]+)|(\\-?[[0-9]]+(\\.[[0-9]]+)?))\\s+ '
    },
    'function-arguments': {
      begin: '(?=\\()',
      beginCaptures: {1: {name: 'meta.brace.round.js'}},
      end: '(?=\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function.arguments.abl',
      patterns: [
        {include: '#parens'},
        {include: '#function-arguments-no-parens'}
      ]
    },
    'function-arguments-no-parens': {
      name: 'meta.function.arguments.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\s*((input-o(?:utput|utpu|utp|u)?)|output|input|table-handle|dataset-handle|append|by-value|by-reference|bind)\\b(?![#$\\-_%&])'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.dataset.abl'}
          },
          match:
            '(?i)\\b(dataset)\\s+([a-zA-Z_\\-#$%]+(\\.[a-zA-Z_\\-#$%]+)?)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\b(temp-table|table|buffer)\\s+([a-zA-Z_\\-#$%]+(\\.[a-zA-Z_\\-#$%]+)?)\\b'
        },
        {include: '#function-arguments'},
        {include: '#constant'},
        {include: '#type-reference'},
        {include: '#abl-system-handles'},
        {include: '#can-find'},
        {include: '#language-functions'},
        {include: '#abl-functions'},
        {include: '#type-member-call'},
        {include: '#db-dot-table-dot-field'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#keywords'},
        {include: '#expression'},
        {include: '#comment'},
        {include: '#array-literal'},
        {include: '#punctuation-comma'},
        {include: '#preprocessors'}
      ]
    },
    'function-definition': {
      begin: '(?i)\\b(function)\\s+([a-zA-Z0-9_][a-zA-Z0-9_#$\\-%&]+)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      end: '(\\.|:)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.function.abl',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.function.abl'}
          },
          match:
            '(?i)\\b(map|to)\\s+(?!to\\s+)([a-zA-Z_][a-zA-Z0-9_#$\\-%&]+)\\b'
        },
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(returns|private|class|extent|in|super|forward|map)\\b'
        },
        {include: '#function-parameter-definition'},
        {include: '#parens'},
        {
          begin: '(?i)(?<=\\)|in)',
          end: '(?=(\\.|:)\\s)',
          patterns: [
            {
              captures: {1: {name: 'keyword.other.abl'}},
              match: '\\b([Ii][Nn])\\b'
            },
            {
              captures: {1: {name: 'keyword.other.abl'}},
              match: '\\b([Ss][Uu][Pp][Ee][Rr])\\b'
            },
            {include: '#type-member-call'},
            {include: '#variable-name'},
            {include: '#keywords'},
            {include: '#comment'},
            {include: '#string'},
            {include: '#preprocessors'}
          ]
        },
        {include: '#primitive-type'},
        {include: '#type-name'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#preprocessors'}
      ]
    },
    'function-parameter-definition': {
      begin: '(\\()',
      beginCaptures: {1: {name: 'meta.brace.round.js'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function.parameters',
      patterns: [{include: '#parameter-definition'}]
    },
    'get-class': {
      begin: '(?i)\\s*(get-class)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#string'}, {include: '#type-names'}]
    },
    'global-scoped-define': {
      begin:
        '(?i)((?:&scop(?:ed-define|ed-defin|ed-defi|ed-def|ed-de|ed-d|ed-|ed|e)?)|(?:&glob(?:al-define|al-defin|al-defi|al-def|al-de|al-d|al-|al|a)?))\\s*([\\.a-zA-Z0-9_\\-#$%\\\\/]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.preprocessor.abl'}
      },
      end: '(?=//|/\\*)|$',
      name: 'meta.preprocessor.define.abl',
      patterns: [{include: '#string'}]
    },
    'handle-attributes': {
      patterns: [
        {include: '#handle-attributes-A'},
        {include: '#handle-attributes-B'},
        {include: '#handle-attributes-C'},
        {include: '#handle-attributes-D'},
        {include: '#handle-attributes-E'},
        {include: '#handle-attributes-F'},
        {include: '#handle-attributes-G'},
        {include: '#handle-attributes-H'},
        {include: '#handle-attributes-I'},
        {include: '#handle-attributes-K'},
        {include: '#handle-attributes-L'},
        {include: '#handle-attributes-M'},
        {include: '#handle-attributes-N'},
        {include: '#handle-attributes-O'},
        {include: '#handle-attributes-P'},
        {include: '#handle-attributes-Q'},
        {include: '#handle-attributes-R'},
        {include: '#handle-attributes-S'},
        {include: '#handle-attributes-T'},
        {include: '#handle-attributes-U'},
        {include: '#handle-attributes-V'},
        {include: '#handle-attributes-W'},
        {include: '#handle-attributes-X'},
        {include: '#handle-attributes-Y'}
      ]
    },
    'handle-attributes-A': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((ambig(?:uous|uou|uo|u)?)|(appl-alert(?:-boxes|-boxe|-box|-bo|-b|-)?)|(attr(?:-space|-spac|-spa|-sp|-s|-)?)|(auto-comp(?:letion|letio|leti|let|le|l)?)|(auto-ind(?:ent|en|e)?)|(auto-ret(?:urn|ur|u)?)|(auto-val(?:idate|idat|ida|id|i)?)|(auto-z(?:ap|a)?)|(avail(?:able|abl|ab|a)?)|accelerator|active|actor|adm-data|after-buffer|after-rowid|after-table|allow-column-searching|allow-prev-deserialization|always-on-top|appl-context-id|appserver-info|appserver-password|appserver-userid|async-request-count|async-request-handle|asynchronous|attached-pairlist|attribute-names|audit-event-context|auto-delete|auto-delete-xml|auto-end-key|auto-go|auto-resize|auto-synchronize|available-formats)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-B': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((back(?:ground|groun|grou|gro|gr|g)?)|(bgc(?:olor|olo|ol|o)?)|(border-bottom-c(?:hars|har|ha|h)?)|(border-bottom-p(?:ixels|ixel|ixe|ix|i)?)|(border-left-c(?:hars|har|ha|h)?)|(border-left-p(?:ixels|ixel|ixe|ix|i)?)|(border-right-c(?:hars|har|ha|h)?)|(border-right-p(?:ixels|ixel|ixe|ix|i)?)|(border-top-c(?:hars|har|ha|h)?)|(border-top-p(?:ixels|ixel|ixe|ix|i)?)|(box-select(?:able|abl|ab|a)?)|(buffer-n(?:ame|am|a)?)|base-ade|basic-logging|batch-mode|batch-size|before-buffer|before-rowid|before-table|blank|block-iteration-display|box|buffer-chars|buffer-field|buffer-group-id|buffer-group-name|buffer-handle|buffer-lines|buffer-partition-id|buffer-tenant-id|buffer-tenant-name|bytes-read|bytes-written)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-C': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((can-crea(?:te|t)?)|(can-dele(?:te|t)?)|(can-writ(?:e)?)|(case-sen(?:sitive|sitiv|siti|sit|si|s)?)|(center(?:ed|e)?)|(column(?:s)?)|(column-bgc(?:olor|olo|ol|o)?)|(column-fgc(?:olor|olo|ol|o)?)|(column-lab(?:el|e)?)|(column-pfc(?:olor|olo|ol|o)?)|(column-sc(?:rolling|rollin|rolli|roll|rol|ro|r)?)|(convert-3d(?:-colors|-color|-colo|-col|-co|-c|-)?)|(cpint(?:ernal|erna|ern|er|e)?)|(crc-val(?:ue|u)?)|(current-env(?:ironment|ironmen|ironme|ironm|iron|iro|ir|i)?)|cache|call-name|call-type|can-do-domain-support|can-read|cancel-button|cancelled|careful-paint|charset|checked|child-buffer|child-num|class-type|client-connection-id|client-tty|client-type|client-workstation|code|codepage|column-dcolor|column-font|column-movable|column-read-only|column-resizable|com-handle|complete|config-name|context-help|context-help-file|context-help-id|control-box|coverage|cpcase|cpcoll|cplog|cpprint|cprcodein|cprcodeout|cpstream|cpterm|current-changed|current-column|current-iteration|current-request-info|current-response-info|current-result-row|current-row-modified|current-window|cursor-char|cursor-line|cursor-offset)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-D': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((data-entry-ret(?:urn|ur|u)?)|(data-t(?:ype|yp|y)?)|(date-f(?:ormat|orma|orm|or|o)?)|(dde-i(?:d)?)|(default-but(?:ton|to|t)?)|(descript(?:ion|io|i)?)|(display-t(?:ype|yp|y)?)|data-source|data-source-complete-map|data-source-modified|data-source-rowid|dataset|db-context|db-list|db-references|dbname|dcolor|dde-error|dde-item|dde-name|dde-topic|deblank|debug-alert|decimals|default|default-buffer-handle|default-commit|default-string|default-value|delimiter|directory|disable-auto-zap|display-timezone|domain-description|domain-name|domain-type|down|drag-enabled|drop-target|dynamic)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-E': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((edge-c(?:hars|har|ha|h)?)|(edge-p(?:ixels|ixel|ixe|ix|i)?)|(error-col(?:umn|um|u)?)|(event-t(?:ype|yp|y)?)|edit-can-paste|edit-can-undo|empty|enabled|encoding|encryption-salt|end-user-prompt|entity-expansion-limit|entry-types-list|error|error-object|error-object-detail|error-row|error-stack-trace|error-string|event-group-id|event-handler|event-handler-object|event-procedure|event-procedure-context|exclusive-id|execution-log|exit-code|expand|expandable|extent)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-F': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((fgc(?:olor|olo|ol|o)?)|(file-create-d(?:ate|at|a)?)|(file-create-t(?:ime|im|i)?)|(file-mod-d(?:ate|at|a)?)|(file-mod-t(?:ime|im|i)?)|(file-off(?:set|se|s)?)|(first-async(?:-request|-reques|-reque|-requ|-req|-re|-r|-)?)|(first-proc(?:edure|edur|edu|ed|e)?)|(first-serv(?:er|e)?)|(first-tab-i(?:tem|te|t)?)|(fore(?:ground|groun|grou|gro|gr|g)?)|(form(?:at|a)?)|(formatte(?:d)?)|(fragmen(?:t)?)|(fram(?:e)?)|(frame-spa(?:cing|cin|ci|c)?)|(full-height-c(?:hars|har|ha|h)?)|(full-height-p(?:ixels|ixel|ixe|ix|i)?)|(full-pathn(?:ame|am|a)?)|(full-width(?:-chars|-char|-cha|-ch|-c|-)?)|(full-width-p(?:ixels|ixel|ixe|ix|i)?)|file-name|file-size|file-type|fill-mode|fill-where-string|filled|first-buffer|first-child|first-column|first-data-source|first-dataset|first-form|first-object|first-query|first-server-socket|first-socket|fit-last-column|flat-button|focused-row|focused-row-selected|font|foreign-key-hidden|form-input|form-long-input|forward-only|frame-col|frame-name|frame-row|frame-x|frame-y|frequency|function)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-G': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((graphic-e(?:dge|dg|d)?)|(grid-factor-h(?:orizontal|orizonta|orizont|orizon|orizo|oriz|ori|or|o)?)|(grid-factor-v(?:ertical|ertica|ertic|erti|ert|er|e)?)|(grid-unit-height-c(?:hars|har|ha|h)?)|(grid-unit-height-p(?:ixels|ixel|ixe|ix|i)?)|(grid-unit-width-c(?:hars|har|ha|h)?)|(grid-unit-width-p(?:ixels|ixel|ixe|ix|i)?)|grid-snap|grid-visible|group-box)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-H': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((height-c(?:hars|har|ha|h)?)|(height-p(?:ixels|ixel|ixe|ix|i)?)|(hori(?:zontal|zonta|zont|zon|zo|z)?)|handle|handler|has-lobs|has-records|help|hidden|html-charset|html-end-of-line|html-end-of-page|html-frame-begin|html-frame-end|html-header-begin|html-header-end|html-title-begin|html-title-end|hwnd)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-I': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((icfparam(?:eter|ete|et|e)?)|(ignore-current-mod(?:ified|ifie|ifi|if|i)?)|(index-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|(inherit-bgc(?:olor|olo|ol|o)?)|(inherit-fgc(?:olor|olo|ol|o)?)|(is-clas(?:s)?)|(is-partitione(?:d)?)|icon|image|image-down|image-insensitive|image-up|immediate-display|in-handle|index|initial|inner-chars|inner-lines|input-value|instantiating-procedure|internal-entries|is-json|is-multi-tenant|is-open|is-parameter-set|is-xml|items-per-row)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-K': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((keep-frame-z(?:-order|-orde|-ord|-or|-o|-)?)|keep-connection-open|keep-security-cache|key|keys)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-L': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((label-bgc(?:olor|olo|ol|o)?)|(label-dc(?:olor|olo|ol|o)?)|(label-fgc(?:olor|olo|ol|o)?)|(language(?:s)?)|(last-async(?:-request|-reques|-reque|-requ|-req|-re|-r|-)?)|(last-proce(?:dure|dur|du|d)?)|(last-serv(?:er|e)?)|(last-tab-i(?:tem|te|t)?)|label|label-font|labels|labels-have-colons|large|large-to-small|last-batch|last-child|last-form|last-object|last-server-socket|last-socket|length|library|library-calling-convention|line|list-item-pairs|list-items|listings|literal-question|local-host|local-name|local-port|local-version-info|locator-column-number|locator-line-number|locator-public-id|locator-system-id|locator-type|locked|log-entry-types|log-threshold|logfile-name|logging-level|login-expiration-timestamp|login-host|login-state)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-M': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((max-height-c(?:hars|har|ha|h)?)|(max-height-p(?:ixels|ixel|ixe|ix|i)?)|(max-val(?:ue|u)?)|(max-width-c(?:hars|har|ha|h)?)|(max-width-p(?:ixels|ixel|ixe|ix|i)?)|(menu-k(?:ey|e)?)|(menu-m(?:ouse|ous|ou|o)?)|(min-column-width-c(?:hars|har|ha|h)?)|(min-column-width-p(?:ixels|ixel|ixe|ix|i)?)|(min-height-c(?:hars|har|ha|h)?)|(min-height-p(?:ixels|ixel|ixe|ix|i)?)|(min-schema-marshal(?:l)?)|(min-val(?:ue|u)?)|(min-width-c(?:hars|har|ha|h)?)|(min-width-p(?:ixels|ixel|ixe|ix|i)?)|(mouse-p(?:ointer|ointe|oint|oin|oi|o)?)|mandatory|manual-highlight|max-button|max-chars|max-data-guess|maximum-level|menu-bar|merge-by-field|message-area|message-area-font|min-button|modified|movable|multi-compile|multiple|multitasking-interval|must-understand)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-N': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((next-col(?:umn|um|u)?)|(next-tab-ite(?:m)?)|(no-schema-marshal(?:l)?)|(no-val(?:idate|idat|ida|id|i)?)|(num-but(?:tons|ton|to|t)?)|(num-col(?:umns|umn|um|u)?)|(num-locked-col(?:umns|umn|um|u)?)|(num-repl(?:aced|ace|ac|a)?)|(num-visible-col(?:umns|umn|um|u)?)|(numeric-dec(?:imal-point|imal-poin|imal-poi|imal-po|imal-p|imal-|imal|ima|im|i)?)|(numeric-f(?:ormat|orma|orm|or|o)?)|(numeric-sep(?:arator|arato|arat|ara|ar|a)?)|name|namespace-prefix|namespace-uri|needs-appserver-prompt|needs-prompt|nested|new|new-row|next-rowid|next-sibling|no-current-value|no-empty-space|no-focus|node-value|nonamespace-schema-location|num-buffers|num-child-relations|num-children|num-dropped-files|num-entries|num-fields|num-formats|num-header-entries|num-items|num-iterations|num-lines|num-log-files|num-messages|num-parameters|num-references|num-relations|num-results|num-selected-rows|num-selected-widgets|num-source-buffers|num-tabs|num-to-retain|num-top-buffers)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-O': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((on-frame(?:-border|-borde|-bord|-bor|-bo|-b|-)?)|options|ordinal|origin-handle|origin-rowid|overlay|owner|owner-document)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-P': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((page-bot(?:tom|to|t)?)|(param(?:eter|ete|et|e)?)|(parent-rel(?:ation|atio|ati|at|a)?)|(pbe-hash-alg(?:orithm|orith|orit|ori|or|o)?)|(persist(?:ent|en|e)?)|(pfc(?:olor|olo|ol|o)?)|(pixels-per-col(?:umn|um|u)?)|(popup-m(?:enu|en|e)?)|(popup-o(?:nly|nl|n)?)|(prev-col(?:umn|um|u)?)|(prev-tab-i(?:tem|te|t)?)|(private-d(?:ata|at|a)?)|(progress-s(?:ource|ourc|our|ou|o)?)|page-top|parent|parent-buffer|parent-fields-after|parent-fields-before|parent-id-relation|parse-status|password-field|pathname|pbe-key-rounds|persistent-cache-disabled|persistent-procedure|pixels-per-row|position|prefer-dataset|prepare-string|prepared|prev-sibling|primary|primary-passphrase|printer-control-handle|printer-hdc|printer-name|printer-port|procedure-name|procedure-type|profiling|proxy|proxy-password|proxy-userid|public-id|published-events)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-Q': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(qualified-user-id|query|query-off-end|quit)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-R': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((record-len(?:gth|gt|g)?)|(relation-fi(?:elds|eld|el|e)?)|(resiza(?:ble|bl|b)?)|(retain-s(?:hape|hap|ha|h)?)|(return-ins(?:erted|erte|ert|er|e)?)|(return-val(?:ue|u)?)|(row-height-c(?:hars|har|ha|h)?)|(row-height-p(?:ixels|ixel|ixe|ix|i)?)|(row-ma(?:rkers|rker|rke|rk|r)?)|radio-buttons|read-only|recid|recursive|refreshable|rejected|relations-active|remote|remote-host|remote-port|reposition|request-info|resize|response-info|restart-row|restart-rowid|return-value-data-type|return-value-dll-type|role|roles|rounded|row|row-resizable|row-state|rowid)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-S': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((screen-val(?:ue|u)?)|(scrollbar-h(?:orizontal|orizonta|orizont|orizon|orizo|oriz|ori|or|o)?)|(scrollbar-v(?:ertical|ertica|ertic|erti|ert|er|e)?)|(separator-fgc(?:olor|olo|ol|o)?)|(server-connection-bo(?:und|un|u)?)|(server-connection-bound-re(?:quest|ques|que|qu|q)?)|(server-connection-co(?:ntext|ntex|nte|nt|n)?)|(show-in-task(?:bar|ba|b)?)|(side-label-h(?:andle|andl|and|an|a)?)|(skip-deleted-rec(?:ord|or|o)?)|(stoppe(?:d)?)|(super-proc(?:edures|edure|edur|edu|ed|e)?)|(suppress-w(?:arnings|arning|arnin|arni|arn|ar|a)?)|(system-alert(?:-boxes|-boxe|-box|-bo|-b|-)?)|save-where-string|schema-change|schema-location|schema-marshal|schema-path|screen-lines|scroll-bars|scrollable|seal-timestamp|selectable|selected|selection-end|selection-start|selection-text|sensitive|separators|serialize-hidden|serialize-name|server|server-connection-id|server-operating-mode|session-end|session-id|side-labels|signature-value|single-run|singleton|small-icon|small-title|soap-fault-actor|soap-fault-code|soap-fault-detail|soap-fault-misunderstood-header|soap-fault-node|soap-fault-role|soap-fault-string|soap-fault-subcode|soap-version|sort|sort-ascending|sort-number|ssl-server-name|standalone|startup-parameters|state-detail|statistics|status-area|status-area-font|stop|stop-object|stream|stretch-to-fit|strict|strict-entity-resolution|subtype|suppress-namespace-processing|suppress-warnings-list|symmetric-encryption-aad|symmetric-encryption-algorithm|symmetric-encryption-iv|symmetric-encryption-key|symmetric-support|system-id)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-T': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((table-num(?:ber|be|b)?)|(temp-dir(?:ectory|ector|ecto|ect|ec|e)?)|(title-bgc(?:olor|olo|ol|o)?)|(title-dc(?:olor|olo|ol|o)?)|(title-fgc(?:olor|olo|ol|o)?)|(title-fo(?:nt|n)?)|(trans-init-proc(?:edure|edur|edu|ed|e)?)|(transact(?:ion|io|i)?)|(transpar(?:ent|en|e)?)|tab-position|tab-stop|table|table-crc-list|table-handle|table-list|text-selected|thread-safe|three-d|tic-marks|time-source|timezone|title|toggle-box|tooltip|tooltips|top-nav-query|top-only|trace-filter|tracing|tracking-changes|type)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-U': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(undo|undo-throw-scope|unique-id|unique-match|url|url-password|url-userid|user-id)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-V': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((validate-expressio(?:n)?)|(virtual-height-c(?:hars|har|ha|h)?)|(virtual-height-p(?:ixels|ixel|ixe|ix|i)?)|(virtual-width-c(?:hars|har|ha|h)?)|(virtual-width-p(?:ixels|ixel|ixe|ix|i)?)|v6display|validate-message|validate-xml|validation-enabled|value|version|view-as|view-first-column-on-reopen|visible)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-W': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((widget-e(?:nter|nte|nt|n)?)|(widget-l(?:eave|eav|ea|e)?)|(width-c(?:hars|har|ha|h)?)|(width-p(?:ixels|ixel|ixe|ix|i)?)|(window-sta(?:te|t)?)|(window-sys(?:tem|te|t)?)|(work-area-height-p(?:ixels|ixel|ixe|ix|i)?)|(work-area-width-p(?:ixels|ixel|ixe|ix|i)?)|warning|wc-admin-app|where-string|widget-id|window|word-wrap|work-area-x|work-area-y|write-status)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-X': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)((xml-schema-pat(?:h)?)|x|x-document|xcode-session-key|xml-data-type|xml-entity-expansion-limit|xml-node-name|xml-node-type|xml-strict-entity-resolution|xml-suppress-namespace-processing)\\b(?![#$\\-_%&])'
    },
    'handle-attributes-Y': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)(:)(y|year-offset)\\b(?![#$\\-_%&])'
    },
    'handle-methods': {
      patterns: [
        {include: '#handle-methods-A'},
        {include: '#handle-methods-B'},
        {include: '#handle-methods-C'},
        {include: '#handle-methods-D'},
        {include: '#handle-methods-E'},
        {include: '#handle-methods-F'},
        {include: '#handle-methods-G'},
        {include: '#handle-methods-I'},
        {include: '#handle-methods-L'},
        {include: '#handle-methods-M'},
        {include: '#handle-methods-N'},
        {include: '#handle-methods-Q'},
        {include: '#handle-methods-R'},
        {include: '#handle-methods-S'},
        {include: '#handle-methods-T'},
        {include: '#handle-methods-U'},
        {include: '#handle-methods-V'},
        {include: '#handle-methods-W'}
      ]
    },
    'handle-methods-A': {
      begin:
        '(?i)(:)((add-calc-col(?:umn|um|u)?)|(add-events-proc(?:edure|edur|edu|ed|e)?)|(add-like-col(?:umn|um|u)?)|(add-rel(?:ation|atio|ati|at|a)?)|(add-super-proc(?:edure|edur|edu|ed|e)?)|accept-changes|accept-row-changes|add-buffer|add-columns-from|add-fields-from|add-first|add-header-entry|add-index-field|add-last|add-like-field|add-like-index|add-new-field|add-new-index|add-parent-id-relation|add-schema-location|add-source-buffer|append-child|apply-callback|attach-data-source|authentication-failed)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-B': {
      begin:
        '(?i)(:)((buffer-comp(?:are|ar|a)?)|(buffer-releas(?:e)?)|begin-event-group|buffer-copy|buffer-create|buffer-delete|buffer-export|buffer-export-fields|buffer-field|buffer-import|buffer-import-fields|buffer-validate|buffer-value)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-C': {
      begin:
        '(?i)(:)((clear-select(?:ion|io|i)?)|(clear-sort-arrow(?:s)?)|(convert-to-offs(?:et|e)?)|cancel-break|cancel-requests|cancel-requests-after|clear|clear-appl-context|clear-log|clone-node|close-log|connect|connected|copy-dataset|copy-sax-attributes|copy-temp-table|create-like|create-like-sequential|create-node|create-node-namespace|create-result-list-entry|current-query)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-D': {
      begin:
        '(?i)(:)((debu(?:g)?)|(discon(?:nect|nec|ne|n)?)|declare-namespace|delete|delete-char|delete-current-row|delete-header-entry|delete-line|delete-node|delete-result-list-entry|delete-selected-row|delete-selected-rows|deselect-focused-row|deselect-rows|deselect-selected-row|detach-data-source|disable|disable-connections|disable-dump-triggers|disable-load-triggers|display-message|dump-logging-now)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-E': {
      begin:
        '(?i)(:)(edit-clear|edit-copy|edit-cut|edit-paste|edit-undo|empty-dataset|empty-temp-table|enable|enable-connections|encode-domain-access-code|encrypt-audit-mac-key|end-document|end-element|end-event-group|end-file-drop|entry|export|export-principal|)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-F': {
      begin:
        '(?i)(:)(fetch-selected-row|fill|find-by-rowid|find-current|find-first|find-last|find-unique|first-of)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-G': {
      begin:
        '(?i)(:)((get-blue(?:-value|-valu|-val|-va|-v|-)?)|(get-browse-col(?:umn|um|u)?)|(get-child-rel(?:ation|atio|ati|at|a)?)|(get-curr(?:ent|en|e)?)|(get-file-offse(?:t)?)|(get-firs(?:t)?)|(get-green(?:-value|-valu|-val|-va|-v|-)?)|(get-header-entr(?:y)?)|(get-red(?:-value|-valu|-val|-va|-v|-)?)|(get-rel(?:ation|atio|ati|at|a)?)|(get-rgb(?:-value|-valu|-val|-va|-v|-)?)|(get-selected(?:-widget|-widge|-widg|-wid|-wi|-w|-)?)|(get-text-height-c(?:hars|har|ha|h)?)|(get-text-height-p(?:ixels|ixel|ixe|ix|i)?)|(get-text-width-c(?:hars|har|ha|h)?)|(get-text-width-p(?:ixels|ixel|ixe|ix|i)?)|(get-wait(?:-state|-stat|-sta|-st|-s|-)?)|get-attribute|get-attribute-node|get-binary-data|get-buffer-handle|get-bytes-available|get-callback-proc-context|get-callback-proc-name|get-cgi-list|get-cgi-long-value|get-cgi-value|get-changes|get-child|get-client|get-column|get-config-value|get-dataset-buffer|get-document-element|get-dropped-file|get-dynamic|get-error-column|get-error-row|get-file-name|get-index-by-namespace-name|get-index-by-qname|get-iteration|get-last|get-localname-by-index|get-message|get-message-type|get-next|get-node|get-number|get-parent|get-prev|get-printers|get-property|get-qname-by-index|get-repositioned-row|get-row|get-safe-user|get-serialized|get-signature|get-socket-option|get-source-buffer|get-tab-item|get-top-buffer|get-type-by-index|get-type-by-namespace-name|get-type-by-qname|get-uri-by-index|get-value-by-index|get-value-by-namespace-name|get-value-by-qname)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-I': {
      begin:
        '(?i)(:)((index-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|(insert-b(?:acktab|ackta|ackt|ack|ac|a)?)|(insert-t(?:ab|a)?)|import-node|import-principal|increment-exclusive-id|initialize|initialize-document-type|initiate|insert|insert-attribute|insert-before|insert-file|insert-row|insert-string|invoke|is-row-selected|is-selected)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-L': {
      begin:
        '(?i)(:)((load-mouse-p(?:ointer|ointe|oint|oin|oi|o)?)|last-of|list-property-names|load|load-domains|load-icon|load-image|load-image-down|load-image-insensitive|load-image-up|load-small-icon|lock-registration|log-audit-event|logout|longchar-to-node-value|lookup|)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-M': {
      begin:
        '(?i)(:)((move-after(?:-tab-item|-tab-ite|-tab-it|-tab-i|-tab-|-tab|-ta|-t|-)?)|(move-befor(?:e-tab-item|e-tab-ite|e-tab-it|e-tab-i|e-tab-|e-tab|e-ta|e-t|e-|e)?)|(move-col(?:umn|um|u)?)|(move-to-b(?:ottom|otto|ott|ot|o)?)|(move-to-t(?:op|o)?)|mark-new|mark-row-state|memptr-to-node-value|merge-changes|merge-row-changes|move-to-eof)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-N': {
      begin:
        '(?i)(:)(node-value-to-longchar|node-value-to-memptr|normalize)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-Q': {
      begin: '(?i)(:)(query-close|query-open|query-prepare)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-R': {
      begin:
        '(?i)(:)((remove-events-proc(?:edure|edur|edu|ed|e)?)|(remove-super-proc(?:edure|edur|edu|ed|e)?)|raw-transfer|read|read-file|read-json|read-xml|read-xmlschema|refresh|refresh-audit-policy|register-domain|reject-changes|reject-row-changes|remove-attribute|remove-child|replace|replace-child|replace-selection-text|reposition-to-row|reposition-to-rowid|reset||)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-S': {
      begin:
        '(?i)(:)((scroll-to-i(?:tem|te|t)?)|(set-blue(?:-value|-valu|-val|-va|-v|-)?)|(set-green(?:-value|-valu|-val|-va|-v|-)?)|(set-numeric-form(?:at|a)?)|(set-red(?:-value|-valu|-val|-va|-v|-)?)|(set-rgb(?:-value|-valu|-val|-va|-v|-)?)|(set-wait(?:-state|-stat|-sta|-st|-s|-)?)|save|save-file|save-row-changes|sax-parse|sax-parse-first|sax-parse-next|scroll-to-current-row|scroll-to-selected-row|seal|search|select-all|select-focused-row|select-next-row|select-prev-row|select-row|serialize-row|set-actor|set-appl-context|set-attribute|set-attribute-node|set-break|set-buffers|set-callback|set-callback-procedure|set-client|set-commit|set-connect-procedure|set-dynamic|set-input-source|set-must-understand|set-node|set-output-destination|set-parameter|set-property|set-read-response-procedure|set-repositioned-row|set-role|set-rollback|set-safe-user|set-selection|set-serialized|set-socket-option|set-sort-arrow|start-document|start-element|stop-parsing|string-value|synchronize)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-T': {
      begin:
        '(?i)(:)((temp-table-prepar(?:e)?)|tenant-id|tenant-name)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-U': {
      begin:
        '(?i)(:)(update-attribute|url-decode|url-encode|user-data)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-V': {
      begin:
        '(?i)(:)(validate|validate-domain-access-code|validate-seal)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-W': {
      begin:
        '(?i)(:)(write|write-cdata|write-characters|write-comment|write-data|write-data-element|write-empty-element|write-entity-ref|write-external-dtd|write-fragment|write-json|write-message|write-processing-instruction|write-xml|write-xmlschema)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'if-then': {
      begin: '(?i)\\b(if)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\b(?=then)\\b',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(and|or)\\b'
        },
        {include: '#parens'},
        {include: '#function-arguments'},
        {include: '#property-call'},
        {include: '#static-object-property-call'},
        {include: '#db-dot-table-dot-field'},
        {include: '#comment'},
        {include: '#operator'},
        {include: '#code-block'},
        {include: '#handle-attributes'},
        {include: '#preprocessors'},
        {include: '#abl-system-handles'},
        {include: '#keywords'}
      ]
    },
    'include-file': {
      begin: '({)\\s*([\'"]?([\\\\\\/\\w$\\-]+)(\\.[\\w]+[\'"]?)?)',
      beginCaptures: {
        1: {name: 'punctuation.section.abl'},
        2: {name: 'entity.name.include.abl'}
      },
      end: '\\s*(})\\s*',
      endCaptures: {1: {name: 'punctuation.section.abl'}},
      name: 'meta.include.abl',
      patterns: [
        {include: '#argument-reference'},
        {
          captures: {
            1: {name: 'support.other.argument.abl'},
            2: {name: 'keyword.operator.source.abl'}
          },
          match: '(?<=\\s)(&[a-zA-Z0-9][a-zA-Z0-9_\\-#$%#$\\-%\\.]+)\\s*(=)?',
          name: 'meta.include.argument.abl'
        },
        {include: '#string'},
        {
          captures: {1: {name: 'support.other.argument.abl'}},
          match: '([a-zA-Z0-9][a-zA-Z0-9_\\-#$%#$\\-%\\.:]+)\\b'
        },
        {
          captures: {0: {name: 'support.other.argument.abl'}},
          match: '(?<=\\=)(/\\*+)|(\\*+/)|(//)'
        },
        {include: '#argument-reference'},
        {include: '#comment'}
      ]
    },
    'inherits-implements-type': {
      begin:
        '(?i)\\s*(implements|inherits)\\s*(([\\w#$%]+|progress)(\\.[\\w#$%]+)*(?<!\\.))\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.type.abl'}
      },
      end: '(?i)\\s*(serializable|abstract|final|use-widget-pool|inherits|implements+?)',
      endCaptures: {1: {name: 'keyword.other.abl'}},
      name: 'meta.define-type.implements.abl',
      patterns: [{include: '#type-names'}]
    },
    'input-output-from-to': {
      begin:
        '(?i)\\b(input|output)\\s+((stream|stream-handle)\\s+([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\s+)?(from|to)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {patterns: [{include: '#variable-name'}]},
        5: {name: 'keyword.other.abl'}
      },
      end: '(?i)(?=\\.|target|source)',
      patterns: [
        {include: '#type-member-call'},
        {include: '#abl-functions'},
        {include: '#abl-system-handles'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#array-literal'},
        {include: '#preprocessors'},
        {include: '#opsys-device-name'},
        {include: '#expression'}
      ]
    },
    keywords: {
      patterns: [
        {include: '#keywords-A'},
        {include: '#keywords-B'},
        {include: '#keywords-C'},
        {include: '#keywords-D'},
        {include: '#keywords-E'},
        {include: '#keywords-F'},
        {include: '#keywords-G'},
        {include: '#keywords-H'},
        {include: '#keywords-I'},
        {include: '#keywords-J'},
        {include: '#keywords-K'},
        {include: '#keywords-L'},
        {include: '#keywords-M'},
        {include: '#keywords-N'},
        {include: '#keywords-O'},
        {include: '#keywords-P'},
        {include: '#keywords-Q'},
        {include: '#keywords-R'},
        {include: '#keywords-S'},
        {include: '#keywords-T'},
        {include: '#keywords-U'},
        {include: '#keywords-V'},
        {include: '#keywords-W'},
        {include: '#keywords-X'},
        {include: '#keywords-Y'}
      ]
    },
    'keywords-A': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((accum(?:ulate|ulat|ula|ul|u)?)|(ambig(?:uous|uou|uo|u)?)|(array-m(?:essage|essag|essa|ess|es|e)?)|(asc(?:ending|endin|endi|end|en|e)?)|(avail(?:able|abl|ab|a)?)|(ave(?:rage|rag|ra|r)?)|abort|abstract|across|active-form|active-window|add|advise|aggregate|alert-box|all|allow-replication|alter|alternate-key|and|ansi-only|any|any-key|any-printable|anywhere|append|append-line|application|apply|as|as-cursor|ask-overwrite|assembly|assign|at|attach|attachment|attribute-type|audit-control|audit-policy|authorization|auto-endkey|auto-go|automatic|avg)\\b(?![#$\\-_%&])'
    },
    'keywords-B': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((backward(?:s)?)|(before-h(?:ide|id|i)?)|(bgc(?:olor|olo|ol|o)?)|(block-lev(?:el|e)?)|(border-b(?:ottom|otto|ott|ot|o)?)|(border-l(?:eft|ef|e)?)|(border-r(?:ight|igh|ig|i)?)|(border-t(?:op|o)?)|(buffer-comp(?:are|ar|a)?)|(button(?:s)?)|(button(?:s)?)|(by-variant-point(?:er|e)?)|back-tab|backspace|base-key|base64|batch|begins|bell|between|big-endian|binary|bind|bind-where|blob|block|both|bottom|bottom-column|break|break-line|browse|browse-column-data-types|browse-column-formats|browse-column-labels|browse-header|btos|buffer|buffer-copy|by|by-pointer|by-reference|by-value|byte)\\b(?![#$\\-_%&])'
    },
    'keywords-C': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((center(?:ed|e)?)|(char(?:acter|acte|act|ac|a)?)|(colon-align(?:ed|e)?)|(column(?:s)?)|(column-lab(?:el|e)?)|(column-label-bgc(?:olor|olo|ol|o)?)|(column-label-fgc(?:olor|olo|ol|o)?)|(column-label-height-c(?:hars|har|ha|h)?)|(column-label-height-p(?:ixels|ixel|ixe|ix|i)?)|(compare(?:s)?)|(context-pop(?:up|u)?)|(control-cont(?:ainer|aine|ain|ai|a)?)|(control-fram(?:e)?)|(current-lang(?:uage|uag|ua|u)?)|(curs(?:or|o)?)|cache|cache-size|call|cancel-pick|case|catch|cdecl|chained|character_length|check|check-mem-stomp|choices|choose|class|clear|client-principal|clipboard|clob|close|codebase-locator|col|col-of|collate|colon|color|color-table|column-codepage|column-label-dcolor|column-label-font|column-of|com-self|combo-box|command|compile|compiler|component-handle|component-self|connect|constrained|constructor|container-event|contains|contents|context|context-help-id|control|convert|copy|copy-lob|count|create|create-on-add|create-test-file|ctos|current|current-value|current_date|cursor-down|cursor-left|cursor-right|cursor-up|cut)\\b(?![#$\\-_%&])'
    },
    'keywords-D': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((data-b(?:ind|in|i)?)|(data-rel(?:ation|atio|ati|at|a)?)|(def(?:ine|in|i)?)|(default-ex(?:tension|tensio|tensi|tens|ten|te|t)?)|(desc(?:ending|endin|endi|end|en|e)?)|(dict(?:ionary|ionar|iona|ion|io|i)?)|(discon(?:nect|nec|ne|n)?)|(disp(?:lay|la|l)?)|data-refresh-line|data-refresh-page|data-source|database|dataset|dataset-handle|dcolor|dde|dde-notify|debug-list|debug-set-tenant|debugger|declare|default|default-action|default-pop-up|default-untranslatable|default-window|defer-lob-fetch|define-user-event-manager|del|delegate|delete|delete-character|delete-column|delete-end-line|delete-field|delete-word|delimiter|deselect|deselect-extend|deselection|deselection-extend|destructor|detach|dialog-box|dialog-help|dir|disable|disabled|dismiss-menu|distinct|dll-call-type|do|dos|dos-end|dotnet-clr-loaded|double|down|drop|drop-down|drop-down-list|drop-file-notify|drop-target|dslog-manager|dump|dynamic-current-value|dynamic-new|dynamic-property)\\b(?![#$\\-_%&])'
    },
    'keywords-E': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((error-stat(?:us|u)?)|(exclusive-l(?:ock|oc|o)?)|(exclusive-web(?:-user|-use|-us|-u|-)?)|each|echo|edge|editing|editor|editor-backtab|editor-tab|else|empty|empty-selection|enable|end|end-box-selection|end-error|end-key|end-move|end-resize|end-row-resize|end-search|endkey|enter-menubar|entry|enum|eq|error|escape|event|event-handler-context|events|except|exclusive|execute|exists|exit|expire|explicit|export|extended|extent|external|extract)\\b(?![#$\\-_%&])'
    },
    'keywords-F': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((fgc(?:olor|olo|ol|o)?)|(field(?:s)?)|(file-access-d(?:ate|at|a)?)|(file-access-t(?:ime|im|i)?)|(file-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|(form(?:at|a)?)|(form(?:at|a)?)|(forward(?:s)?)|(fram(?:e)?)|(frame-val(?:ue|u)?)|(from-c(?:hars|har|ha|h)?)|(from-cur(?:rent|ren|re|r)?)|(from-p(?:ixels|ixel|ixe|ix|i)?)|false|false-leaks|fetch|file|filename|fill-in|filters|final|finally|find|find-case-sensitive|find-global|find-next|find-next-occurrence|find-prev-occurrence|find-previous|find-select|find-wrap-around|finder|firehose-cursor|first|fix-codepage|fixed-only|flags|flat-button|float|focus|focus-in|font|font-table|for|force-file|foreign-key-hidden|from|fromnoreorder|full-height|function|function-call-type)\\b(?![#$\\-_%&])'
    },
    'keywords-G': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((get-key-val(?:ue|u)?)|ge|generate-md5|get|get-attr-call-type|get-dir|get-file|get-text-height|get-text-width|getbyte|global|go|go-on|goto|grant|grant-archive|grayed|grid-set|grid-unit-height|grid-unit-width|group|gt)\\b(?![#$\\-_%&])'
    },
    'keywords-H': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((help-con(?:text|tex|te|t)?)|(helpfile-n(?:ame|am|a)?)|having|header|height|help-topic|hidden|hide|hint|home|horiz-end|horiz-home|horiz-scroll-drag|host-byte-order)\\b(?![#$\\-_%&])'
    },
    'keywords-I': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((image-size-c(?:hars|har|ha|h)?)|(image-size-p(?:ixels|ixel|ixe|ix|i)?)|(info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|(input-o(?:utput|utpu|utp|ut|u)?)|if|image|image-down|image-insensitive|image-size|image-up|implements|import|in|index-hint|indexed-reposition|indicator|inherit-color-mode|inherits|init|initial|initial-dir|initial-filter|initiate|inner|input|insert|insert-column|insert-field|insert-field-data|insert-field-label|insert-mode|interface|into|is|item|iteration-changed)\\b(?![#$\\-_%&])'
    },
    'keywords-J': {
      captures: {1: {name: 'keyword.other.abl'}},
      match: '(?i)\\b(join|join-by-sqldb|join-on-select)\\b(?![#$\\-_%&])'
    },
    'keywords-K': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((keep-frame-z(?:-order|-orde|-ord|-or|-o|-)?)|(key-func(?:tion|tio|ti|t)?)|keep-messages|keep-tab-order|key-code|key-label|keycache-join)\\b(?![#$\\-_%&])'
    },
    'keywords-L': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((label-pfc(?:olor|olo|ol|o)?)|(last-even(?:t)?)|(left-align(?:ed|e)?)|(listi(?:ng|n)?)|(longch(?:ar|a)?)|label|landscape|last-key|le|leading|leak-detection|leave|left|left-end|length|like|like-sequential|line-down|line-left|line-right|line-up|little-endian|load|load-from|load-picture|load-result-into|lob-dir|locked|log-id|log-manager|long|lookahead|lower|lt)\\b(?![#$\\-_%&])'
    },
    'keywords-M': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((margin-height-c(?:hars|har|ha|h)?)|(margin-height-p(?:ixels|ixel|ixe|ix|i)?)|(margin-width-c(?:hars|har|ha|h)?)|(margin-width-p(?:ixels|ixel|ixe|ix|i)?)|(min-schema-marshal(?:l)?)|(mouse-p(?:ointer|ointe|oint|oin|oi|o)?)|machine-class|main-menu|map|margin-extra|margin-height|margin-width|matches|max|max-button|max-height|max-rows|max-size|max-width|maximize|md5-value|memptr|menu|menu-drop|menu-item|menubar|message|message-area|message-area-msg|message-line|method|min-height|min-size|min-width|mod|modulo|mouse|move|mpe|multiple-key|must-exist)\\b(?![#$\\-_%&])'
    },
    'keywords-N': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((no-array-m(?:essage|essag|essa|ess|es|e)?)|(no-attr-l(?:ist|is|i)?)|(no-attr-s(?:pace|pac|pa|p)?)|(no-auto-tri(?:m)?)|(no-column-sc(?:rolling|rollin|rolli|roll|rol|ro|r)?)|(no-convert-3d(?:-colors|-color|-colo|-col|-co|-c|-)?)|(no-f(?:ill|il|i)?)|(no-inherit-bgc(?:olor|olo|ol|o)?)|(no-inherit-fgc(?:olor|olo|ol|o)?)|(no-label(?:s)?)|(no-mes(?:sage|sag|sa|s)?)|(no-prefe(?:tch|tc|t)?)|(no-query-o(?:rder-added|rder-adde|rder-add|rder-ad|rder-a|rder-|rder|rde|rd|r)?)|(no-query-u(?:nique-added|nique-adde|nique-add|nique-ad|nique-a|nique-|nique|niqu|niq|ni|n)?)|(no-return-val(?:ue|u)?)|(no-schema-marshal(?:l)?)|(no-scrollbar-v(?:ertical|ertica|ertic|erti|ert|er|e)?)|(no-tab(?:-stop|-sto|-st|-s|-)?)|(no-und(?:erline|erlin|erli|erl|er|e)?)|namespace-prefix|namespace-uri|native|ne|nested|new|new-instance|new-line|next|next-error|next-frame|next-prompt|next-word|no|no-apply|no-assign|no-attr|no-auto-validate|no-bind-where|no-box|no-console|no-convert|no-debug|no-drag|no-echo|no-error|no-firehose-cursor|no-focus|no-help|no-hide|no-index-hint|no-join-by-sqldb|no-keycache-join|no-lobs|no-lock|no-lookahead|no-map|no-pause|no-row-markers|no-scrolling|no-separate-connection|no-separators|no-undo|no-wait|no-word-wrap|node-type|non-serializable|none|not-active|null|num-copies|num-selected|numeric)\\b(?![#$\\-_%&])'
    },
    'keywords-O': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((ole-invoke-loca(?:le|l)?)|(ole-names-loca(?:le|l)?)|object|octet_length|of|off|off-end|off-home|ok|ok-cancel|old|on|open|open-line-above|option|options-file|or|ordered-join|orientation|os-append|os-command|os-copy|os-create-dir|os-delete|os-dir|os-rename|os2|os400|otherwise|out-of-data|outer|outer-join|output|overlay|override)\\b(?![#$\\-_%&])'
    },
    'keywords-P': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((page-wid(?:th|t)?)|(param(?:eter|ete|et|e)?)|(perf(?:ormance|ormanc|orman|orma|orm|or|o)?)|(pfc(?:olor|olo|ol|o)?)|(preproc(?:ess|es|e)?)|(presel(?:ect|ec|e)?)|(proce(?:dure|dur|du|d)?)|(prompt-f(?:or|o)?)|(put-key-val(?:ue|u)?)|package-private|package-protected|page|page-down|page-left|page-right|page-right-text|page-up|paged|parent-id-field|parent-window-close|partial-key|pascal|paste|pause|pick|pick-area|pick-both|pixels|portrait|precision|prev|prev-frame|prev-word|printer|printer-setup|private|privileges|procedure-call-type|procedure-complete|process|profile-file|profiler|prompt|promsgs|propath|property|protected|public|publish|put|put-bits|put-byte|put-bytes|put-double|put-float|put-int64|put-long|put-short|put-string|put-unsigned-long|put-unsigned-short|putbyte)\\b(?![#$\\-_%&])'
    },
    'keywords-Q': {
      captures: {1: {name: 'keyword.other.abl'}},
      match: '(?i)\\b(query|query-tuning|question|quit)\\b(?![#$\\-_%&])'
    },
    'keywords-R': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((rcode-info(?:rmation|rmatio|rmati|rmat|rma|rm|r)?)|(rect(?:angle|angl|ang|an|a)?)|(reposition-back(?:wards|ward|war|wa|w)?)|(reposition-forw(?:ards|ard|ar|a)?)|(reposition-parent-rel(?:ation|atio|ati|at|a)?)|(return-to-start-di(?:r)?)|(return-val(?:ue|u)?)|(right-align(?:ed|e)?)|(run-proc(?:edure|edur|edu|ed|e)?)|radio-set|raw|raw-transfer|read-available|read-exact-num|read-response|readkey|real|recall|recursive|reference-only|reinstate|release|repeat|replication-create|replication-delete|replication-write|reports|reposition|request|resize|result|resume-display|retain|retry-cancel|return|returns|reverse-from|revert|revoke|right|right-end|routine-level|row|row-created|row-deleted|row-display|row-entry|row-height|row-leave|row-modified|row-of|row-unmodified|rule|rule-row|rule-y|run)\\b(?![#$\\-_%&])'
    },
    'keywords-S': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((sax-comple(?:te|t)?)|(scrolled-row-pos(?:ition|itio|iti|it|i)?)|(set-pointer-val(?:ue|u)?)|(share(?:-lock|-loc|-lo|-l|-)?)|(show-stat(?:s)?)|(side-lab(?:el|e)?)|(size-c(?:hars|har|ha|h)?)|(size-p(?:ixels|ixel|ixe|ix|i)?)|(stored-proc(?:edure|edur|edu|ed|e)?)|(sub-ave(?:rage|rag|ra|r)?)|(sub-max(?:imum|imu|im|i)?)|(sub-min(?:imum|imu|im|i)?)|(substr(?:ing|in|i)?)|save|save-as|sax-attributes|sax-parser-error|sax-reader|sax-running|sax-uninitialized|sax-write-begin|sax-write-complete|sax-write-content|sax-write-element|sax-write-error|sax-write-idle|sax-write-tag|sax-writer|sax-xml|schema|screen|screen-io|scroll|scroll-bars|scroll-horizontal|scroll-left|scroll-mode|scroll-notify|scroll-right|scroll-vertical|scrollbar-drag|scrolling|search-self|search-target|section|security-policy|seek|select|select-extend|select-on-join|select-repositioned-row|selected-items|selection|selection-extend|selection-list|self|send|sensitive|separate-connection|separators|serializable|serialize-hidden|serialize-name|server|server-socket|session|set|set-attr-call-type|set-byte-order|set-cell-focus|set-contents|set-db-logging|set-event-manager-option|set-option|set-state|settings|shared|short|signature|silent|simple|single|single-character|single-run|size|skip|skip-group-duplicates|skip-schema-check|slider|smallint|soap-fault|soap-header|soap-header-entryref|socket|some|source|source-procedure|space|sql|start|start-box-selection|start-extend-box-selection|start-mem-check|start-move|start-resize|start-row-resize|start-search|starting|static|status|status-area|status-area-msg|stdcall|stomp-detection|stomp-frequency|stop|stop-after|stop-display|stop-mem-check|stream|stream-handle|stream-io|string-xref|sub-count|sub-menu|sub-menu-help|sub-total|subscribe|sum|summary|super|suspend|system-dialog|system-help)\\b(?![#$\\-_%&])'
    },
    'keywords-T': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((text-seg(?:-growth|-growt|-grow|-gro|-gr|-g|-)?)|(transact(?:ion|io|i)?)|tab|table-scan|target|target-procedure|temp-table|tenant|tenant-where|term|terminal|terminate|text|text-cursor|then|this-object|this-procedure|three-d|through|throw|thru|title|to|tooltip|top|top-column|topic|total|trailing|trans|transaction-mode|trigger|triggers|true|ttcodepage)\\b(?![#$\\-_%&])'
    },
    'keywords-U': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((unbuff(?:ered|ere|er|e)?)|(underl(?:ine|in|i)?)|(unform(?:atted|atte|att|at|a)?)|(use-dic(?:t-exps|t-exp|t-ex|t-e|t-|t)?)|undo|union|unique|unix|unix-end|unless-hidden|unload|unsigned-byte|unsigned-int64|unsigned-integer|unsigned-long|unsigned-short|unsubscribe|up|update|upper|use|use-filename|use-index|use-revvideo|use-text|use-underline|use-widget-pool|user|using|utc-offset)\\b(?![#$\\-_%&])'
    },
    'keywords-V': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((vari(?:able|abl|ab|a)?)|(verb(?:ose|os|o)?)|(vert(?:ical|ica|ic|i)?)|v6frame|validate|value-changed|values|var|view|view-as|virtual-height|virtual-width|vms|void)\\b(?![#$\\-_%&])'
    },
    'keywords-W': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b((web-con(?:text|tex|te|t)?)|(window-delayed-min(?:imize|imiz|imi|im|i)?)|(work-tab(?:le|l)?)|wait|wait-for|warning|web-notify|when|where|while|widget|widget-pool|width|window-close|window-maximized|window-minimized|window-name|window-normal|window-resized|window-restored|with|word-index|workfile)\\b(?![#$\\-_%&])'
    },
    'keywords-X': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(x-document|x-noderef|x-of|xcode|xml-data-type|xml-node-name|xml-node-type|xor|xref|xref-xml)\\b(?![#$\\-_%&])'
    },
    'keywords-Y': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(y-of|year|year-offset|yes|yes-no|yes-no-cancel)\\b(?![#$\\-_%&])'
    },
    'label-variable': {
      captures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*([a-zA-Z0-9_\\-#$%]+)\\s+(label)\\s*'
    },
    'language-functions': {
      captures: {1: {name: 'support.function.abl'}},
      match: '(?i)\\b(opsys|(provers(?:ion|io|i)?)|guid|generate-uuid)\\b'
    },
    'method-definition': {
      begin: '(?i)^\\s*(method|constructor|destructor)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=:|\\.)',
      name: 'meta.define.method.abl',
      patterns: [
        {include: '#access-modifier'},
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(void)\\s*'
        },
        {
          begin: '(?i)\\s*([a-zA-Z0-9_]+[a-zA-Z0-9_\\-{}#$%&]*)?\\s*(\\()\\s*',
          beginCaptures: {
            1: {name: 'entity.name.function.abl'},
            2: {name: 'meta.brace.round.js'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'meta.brace.round.js'}},
          patterns: [{include: '#parameter-definition'}]
        },
        {include: '#parameter-as'},
        {include: '#string'},
        {include: '#extent'},
        {include: '#primitive-type'},
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '(?i)\\b([a-zA-Z0-9_]+[a-zA-Z0-9_\\-{}#$%&]*)\\b\\R'
        },
        {include: '#dll-type'},
        {include: '#type-names'},
        {include: '#comment'}
      ]
    },
    multilinecomment: {
      begin: '/\\*',
      contentName: 'comment',
      end: '\\*/',
      name: 'comment.block.source.abl',
      patterns: [
        {include: '#multilinecomment', name: 'comment.block.source.abl'}
      ]
    },
    'new-class': {
      begin: '(?i)\\b(new)\\b(?!\\-)',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\()',
      patterns: [{include: '#type-names'}, {include: '#string'}]
    },
    'new-record': {
      patterns: [
        {
          captures: {
            1: {name: 'support.function.abl'},
            2: {name: 'meta.brace.round.js'},
            3: {name: 'storage.data.table.abl'},
            5: {name: 'meta.brace.round.js'}
          },
          match:
            '(?i)\\s*(new)\\s+(\\()\\s*([a-zA-Z_][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)\\s*(\\))'
        },
        {
          captures: {
            2: {name: 'support.function.abl'},
            3: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*((new)\\s+(?!.*\\()([a-zA-Z_][a-zA-Z0-9_\\-#$%\\.]*))'
        }
      ]
    },
    numeric: {
      match:
        '(?<![a-zA-Z0-9_\\-#$%-])(0[xX][[:xdigit:]]+)|(\\-?[0-9]+(\\.[0-9]+)?)',
      name: 'constant.numeric.source.abl'
    },
    'of-phrase': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match:
            '\\s*([Oo][Ff])\\s+([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z_][a-zA-Z0-9_\\-#$%]*)?)\\s*'
        },
        {
          captures: {
            1: {name: 'storage.data.table.abl'},
            3: {name: 'keyword.other.abl'},
            4: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z_][a-zA-Z0-9_\\-#$%]*)?)\\s+(of)\\s+([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z_][a-zA-Z0-9_\\-#$%]*)?)\\s*'
        }
      ]
    },
    'on-error-endkey-stop': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'entity.name.label.abl'}
      },
      match:
        '(?i)\\s*(on)\\s+(endkey|error|stop|quit)\\s+(undo)\\s*(?!leave|next|retry|return|throw)([a-zA-Z0-9_\\-#$%\\-$]*)?\\s*'
    },
    operator: {
      patterns: [
        {include: '#operator-no-space'},
        {include: '#operator-with-space'},
        {include: '#operator-with-trailing-space'}
      ]
    },
    'operator-no-space': {
      captures: {1: {name: 'keyword.operator.source.abl'}},
      match: '(\\+=|-=|\\\\=|\\*=|<=|<>|>=|=|\\+|-|/|<|>|\\*)'
    },
    'operator-with-space': {
      captures: {1: {name: 'keyword.operator.source.abl'}},
      match:
        '(?i)(?<=\\s)(contains|begins|matches|eq|le|lt|ge|gt|ne)(?=\\s|\\()'
    },
    'operator-with-trailing-space': {
      captures: {1: {name: 'keyword.operator.source.abl'}},
      match: '\\b([Nn][Oo][Tt])(?=\\s|\\()'
    },
    'opsys-device-name': {
      captures: {1: {name: 'storage.other.opsys-device.abl'}},
      match: '([_\\w\\/\\-\\\\$:\\.]+)(?<!\\.)'
    },
    ordinal: {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.numeric.source.abl'}
      },
      match: '(?i)\\s*(ordinal)\\s((0x)?[[:xdigit:]]+)?'
    },
    'parameter-as': {
      begin: '\\s*([a-zA-Z0-9_\\-#$%]+)\\s+([Aa][Ss])\\s+',
      beginCaptures: {
        1: {name: 'variable.parameter.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?=\\s|\\)|\\.|,)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '\\s*([Cc][Ll][Aa][Ss]{2})\\s*'
        },
        {include: '#primitive-type'},
        {include: '#dll-type'},
        {include: '#type-names'},
        {include: '#parens'},
        {include: '#string'},
        {include: '#punctuation-period'},
        {include: '#punctuation-comma'}
      ]
    },
    'parameter-definition': {
      name: 'meta.define.parameter.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\s*((input-o(?:utput|utpu|utp|u)?)|input|output|append|bind|by-value|(presel(?:ect|ec|e)?)|buffer|(param(?:eter|ete|et|e)?)|no-undo)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.parameter.abl'}
          },
          match:
            '(?i)\\s*(dataset-handle|table-handle)\\s+([a-zA-Z][a-zA-Z0-9_\\-]*)'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.dataset.abl'}
          },
          match: '(?i)\\s*(dataset)\\s+([a-zA-Z][a-zA-Z0-9_\\-]*)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*(table)\\s+([a-zA-Z][a-zA-Z0-9_\\-]*)\\s*'
        },
        {include: '#parameter-as'},
        {
          captures: {
            1: {name: 'storage.type.abl'},
            2: {name: 'punctuation.separator.comma.abl'}
          },
          match:
            '(?i)\\s*((char(?:acter|acte|act|ac|a)?)|com-handle|date|datetime-tz|datetime|(dec(?:imal|ima|im|i)?)|handle|int64|(int(?:eger|ege|eg|e)?)|(log(?:ical|ica|ic|i)?)|(longch(?:ar|a)?)|memptr|raw|recid|rowid|(widget-h(?:andle|andl|and|an|a)?))(?![=a-zA-Z0-9_\\-])\\s*(,*)'
        },
        {
          captures: {1: {name: 'punctuation.separator.comma.abl'}},
          match: '\\s*(,)\\s*'
        },
        {include: '#buffer-for-table'},
        {include: '#extent'},
        {include: '#property-call'},
        {include: '#abl-functions'},
        {include: '#array-literal'},
        {include: '#decimals'},
        {include: '#constant'},
        {include: '#abl-system-handles'},
        {include: '#keywords'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#type-names'},
        {include: '#string'},
        {include: '#comment'},
        {include: '#preprocessors'}
      ]
    },
    'parameter-name': {
      match: '(?<=^|\\s)(a-zA-Z0-9_\\-#$%|-)+(?=\\s)',
      name: 'variable.parameter.abl'
    },
    parens: {match: '\\(|\\)', name: 'meta.brace.round.js'},
    preprocessors: {
      captures: {
        1: {name: 'storage.type.function.abl'},
        2: {name: 'storage.type.function.abl'}
      },
      match:
        '(?i)(&window-system|&text-height|&line-number|&batch-mode|&file-name|&undefine|&sequence|&message|defined|&elseif|(?:&scop(?:ed-define|ed-defin|ed-defi|ed-def|ed-de|ed-d|ed-|ed|e)?)|(?:&glob(?:al-define|al-defin|al-defi|al-def|al-de|al-d|al-|al|a)?)|&opsys|&endif|&else|&then|&if)|({&[a-zA-Z0-9_\\-#$%\\s\\(\\)]+})|(&[a-zA-Z0-9_\\-#$%]+)'
    },
    'primitive-type': {
      captures: {1: {name: 'storage.type.abl'}},
      match:
        '(?i)(?<=^|\\s)(blob|(char(?:acter|acte|act|ac|a)?)|cha|ch|c|clob|com-handle|date|da|datetime|datetime-tz|(dec(?:imal|ima|im|i)?)|de|handle|int64|(int(?:eger|ege|eg|e)?)|in|i|(log(?:ical|ica|ic|i)?)|lo|l|(longch(?:ar|a)?)|memptr|raw|recid|rowid|widget-handle)(?![=a-zA-Z0-9_\\-#$%\\-])'
    },
    'procedure-definition': {
      begin: '(?i)\\s*(proce(?:dure|dur|du|d)?)\\s+(?=[a-zA-Z_])',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=:|\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.procedure.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b(external|cdecl|pascal|stdcall|ordinal|(persist(?:ent|en|e)?)|thread-safe|in|super)\\b'
        },
        {include: '#string'},
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '([a-zA-Z_][a-zA-Z0-9_#$\\-%&\\.]+)(?<!\\.)'
        },
        {include: '#argument-reference'},
        {include: '#numeric'},
        {include: '#comment'}
      ]
    },
    'property-accessor': {
      patterns: [
        {include: '#property-get-set-super'},
        {include: '#property-get-set-empty'},
        {include: '#property-get-set-block'}
      ]
    },
    'property-as': {
      captures: {
        1: {name: 'entity.name.function.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '\\s*([a-zA-Z0-9_\\-#$%]+)\\s+([Aa][Ss])\\s*'
    },
    'property-call': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(:)([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b'
    },
    'property-get-set-block': {
      begin: '\\s*(?<!:)\\s*([Gg][Ee][Tt]|[Ss][Ee][Tt])\\b(?![#$\\-_%&])',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '\\s*([Ee][Nn][Dd])\\s*([Gg][Ee][Tt]|[Ss][Ee][Tt])?\\s*(?=\\.)\\s*',
      endCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      patterns: [
        {include: '#function-parameter-definition'},
        {include: '#code-block'},
        {include: '#punctuation-colon'}
      ]
    },
    'property-get-set-empty': {
      captures: {1: {name: 'keyword.other.abl'}},
      match: '\\b([Gg][Ee][Tt]|[Ss][Ee][Tt])\\s*(?=\\.)'
    },
    'property-get-set-super': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\b(get|set)\\s+(super)\\s*(?=\\.)'
    },
    'punctuation-colon': {match: ':', name: 'punctuation.terminator.abl'},
    'punctuation-comma': {
      captures: {1: {name: 'punctuation.separator.comma.abl'}},
      match: '(,)'
    },
    'punctuation-period': {
      captures: {1: {name: 'punctuation.terminator.abl'}},
      match: '(\\.)'
    },
    'punctuation-semicolon': {
      captures: {1: {name: 'punctuation.terminator.abl'}},
      match: '(;)'
    },
    'punctuation-separator': {
      name: 'punctuation.separator.abl',
      patterns: [
        {include: '#punctuation-comma'},
        {
          captures: {1: {name: 'punctuation.separator.colon.abl'}},
          match: '(:)'
        },
        {
          captures: {1: {name: 'punctuation.separator.period.abl'}},
          match: '(\\.)'
        }
      ]
    },
    'record-buffer-functions': {
      captures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'},
        3: {name: 'support.data.table.abl'},
        5: {name: 'meta.brace.round.js'}
      },
      match:
        '(?i)\\b((?:avail(?:able|abl|ab|a)?)|locked|ambiguous)\\s*(\\()?\\s*([a-zA-Z][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)\\s*(\\))?'
    },
    release: {
      begin: '(?i)\\s*(release)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\.)',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.other.abl'}
          },
          match: '(?i)\\s*(object)\\s+(.*)\\b'
        },
        {include: '#keywords'},
        {include: '#db-dot-table'}
      ]
    },
    'rowid-function': {
      captures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'},
        3: {name: 'storage.data.table.abl'},
        5: {name: 'meta.brace.round.js'}
      },
      match:
        '(?i)\\s*(rowid)\\s*(\\()\\s*([a-zA-Z_][a-zA-Z0-9_\\-#$%]*(\\.[a-zA-Z][a-zA-Z0-9_\\-#$%]*)?)\\s*(\\))'
    },
    'run-quoted': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.procedure.abl'}
      },
      match: '(?i)\\s*(run)\\s+(?!value)\\s*([\'"].*[\'"])'
    },
    'run-statement': {
      patterns: [{include: '#run-unquoted'}, {include: '#run-quoted'}]
    },
    'run-unquoted': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.procedure.abl'}
      },
      match:
        '(?i)\\s*(run)\\s+(?!value)\\s*([\\w\\-$\\@\\/\\\\]{1,253}(\\.[\\w@$\\-]{1,2})?)'
    },
    serializable: {
      captures: {1: {name: 'keyword.other.abl'}},
      match: '(?i)\\b(non-serializable|serializable)\\b'
    },
    singlelinecomment: {match: '//.*$', name: 'comment.line.double-slash.abl'},
    singlequotedstring: {
      begin: "(')",
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.abl'}},
      end: "(?i)(')(:[L|R|T|C|U]\\d*\\b)?",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.abl'},
        2: {name: 'support.other.abl'}
      },
      name: 'string.single.complex.abl',
      patterns: [{include: '#escape-char'}]
    },
    statements: {
      name: 'meta.statements.abl',
      patterns: [
        {include: '#comment'},
        {include: '#abl-function-variable-arg'},
        {include: '#while-expression'},
        {include: '#rowid-function'},
        {include: '#var-statement'},
        {include: '#input-output-from-to'},
        {include: '#function-definition'},
        {include: '#record-buffer-functions'},
        {include: '#create-statement'},
        {include: '#can-find'},
        {include: '#release'},
        {include: '#copy-lob'},
        {include: '#event-un-subscribe'},
        {include: '#buffer-name'},
        {include: '#temp-table-name'},
        {include: '#annotation'},
        {include: '#undo-statement'},
        {include: '#block-statement'},
        {include: '#block-label'},
        {include: '#end-block'},
        {include: '#end-function-procedure-method-block'},
        {include: '#find-record'},
        {include: '#type-argument-function'},
        {include: '#get-class'},
        {include: '#if-then'},
        {include: '#string'},
        {include: '#translation-attribute'},
        {include: '#break-group'},
        {include: '#event-un-subscribe'},
        {include: '#property-call'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#abl-functions'},
        {include: '#unqualified-method-call'},
        {include: '#function-arguments'},
        {include: '#method-definition'},
        {include: '#access-modifier'},
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(void)\\s*'
        },
        {include: '#parens'},
        {include: '#declarations'},
        {include: '#decimals'},
        {include: '#numeric'},
        {include: '#constant'},
        {include: '#timestamp-constant'},
        {include: '#break-by'},
        {include: '#new-record'},
        {include: '#type-reference'},
        {include: '#for-join'},
        {include: '#operator'},
        {include: '#analyze-suspend-resume'},
        {include: '#global-scoped-define'},
        {include: '#label-variable'},
        {include: '#define-field'},
        {include: '#define-like'},
        {include: '#format-constant'},
        {include: '#preprocessors'},
        {include: '#procedure-definition'},
        {include: '#dll-type'},
        {include: '#parameter-as'},
        {include: '#buffer-for-table'},
        {include: '#primitive-type'},
        {include: '#property-accessor'},
        {include: '#for-each-table'},
        {include: '#for-each-join'},
        {include: '#of-phrase'},
        {include: '#db-dot-table-dot-field'},
        {include: '#code-block'},
        {include: '#language-functions'},
        {include: '#comment'},
        {include: '#array-literal'},
        {include: '#punctuation-semicolon'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-colon'},
        {include: '#parens'},
        {include: '#keywords'},
        {include: '#variable-name'},
        {include: '#punctuation-period'},
        {include: '#punctuation-colon'}
      ]
    },
    'static-object-property-call': {
      captures: {
        1: {name: 'entity.name.type.abl'},
        4: {name: 'punctuation.separator.colon.abl'},
        5: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)\\s*(([\\w#$%\\-]+|progress)(\\.[\\w#$%\\-]+)+)\\s*(:)([\\w\\-]+)\\s*'
    },
    string: {
      patterns: [
        {include: '#singlequotedstring'},
        {include: '#doublequotedstring'},
        {include: '#translation-attribute'}
      ]
    },
    'temp-table-name': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\b(temp-table)\\s+([a-zA-Z][a-zA-Z0-9_\\-#$%]*)'
    },
    'timestamp-constant': {name: 'constant.language.abl'},
    'translation-attribute': {
      captures: {1: {name: 'support.other.abl'}},
      match: '(:[LlRrTtCcUu]\\d*)\\b'
    },
    'type-argument-function': {
      begin: '(?i)\\s*(cast|type-of)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(?<=\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [
        {
          begin: '(?<=\\()',
          end: '(,)',
          endCaptures: {1: {name: 'punctuation.separator.comma.abl'}},
          patterns: [
            {include: '#function-arguments-no-parens'},
            {include: '#parens'}
          ]
        },
        {include: '#type-names'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#parens'},
        {include: '#punctuation-comma'},
        {include: '#preprocessors'}
      ]
    },
    'type-member-call': {
      patterns: [
        {include: '#property-call'},
        {include: '#unqualified-method-call'},
        {include: '#static-object-property-call'}
      ]
    },
    'type-name': {
      captures: {1: {name: 'entity.name.type.abl'}},
      match: '(?i)\\b([\\w#$%\\-]+(\\.[\\w#$%\\-]+)*)\\b'
    },
    'type-name-generic': {
      begin: '(?i)\\s*(([\\w#$%\\-]+)(\\.[\\w#$%\\-]+)*\\s*)\\s*(<)',
      beginCaptures: {
        1: {name: 'entity.name.type.abl'},
        4: {name: 'punctuation.definition.generic.begin.abl'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.generic.end.abl'}},
      name: 'meta.generic.abl',
      patterns: [
        {include: '#type-name-generic'},
        {include: '#punctuation-comma'},
        {include: '#type-name'}
      ]
    },
    'type-names': {
      patterns: [{include: '#type-name-generic'}, {include: '#type-name'}]
    },
    'type-reference': {
      patterns: [
        {include: '#define-type'},
        {include: '#get-class'},
        {include: '#new-class'},
        {include: '#using'},
        {include: '#type-argument-function'}
      ]
    },
    'undo-statement': {
      begin: '(?i)\\s*(undo)\\s*([a-zA-Z0-9_\\-#$%\\-$]*)?\\s*(,)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.label.abl'},
        3: {name: 'punctuation.separator.comma.abl'}
      },
      end: '(?=\\.|:)',
      patterns: [
        {include: '#string'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.label.abl'}
          },
          match: '(?i)\\s*(leave|next|retry)\\s([a-zA-Z0-9_\\-#$%\\-$]*)?'
        },
        {include: '#new-class'},
        {include: '#keywords'},
        {include: '#code-block'},
        {include: '#property-call'},
        {include: '#function-arguments'},
        {include: '#expression'},
        {include: '#punctuation-colon'}
      ]
    },
    'unqualified-method-call': {
      captures: {1: {name: 'entity.name.function.abl'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)\\b(?=\\()'
    },
    'use-index': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\b(use-index)\\s+([a-zA-Z_][a-zA-Z0-9_\\-$]*)\\b'
    },
    using: {
      begin: '(?i)\\s*(using)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.using.abl',
      patterns: [
        {
          captures: {2: {name: 'entity.name.package.abl'}},
          match: '(?i)\\s*((([\\w#$%]+|progress)(\\.[\\w#$%]+)*)\\.\\*)\\s*'
        },
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(from|propath|assembly)\\s*'
        },
        {include: '#type-name'}
      ]
    },
    'var-statement': {
      begin: '^\\s*(var)\\s+',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(\\s([a-zA-Z][a-zA-Z0-9_\\-#$%]*))',
      endCaptures: {2: {name: 'variable.other.abl'}},
      name: 'meta.define.abl',
      patterns: [
        {include: '#access-modifier'},
        {include: '#serializable'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.type.abl'}
          },
          match:
            '(?i)\\s*(class)\\s*(blob|character|char|clob|com-handle|date|datetime|datetime-tz|decimal|handle|int64|integer|int|logical|longchar|memptr|raw|recid|rowid|widget-handle)?'
        },
        {include: '#primitive-type'},
        {include: '#type-names'},
        {include: '#array-literal'},
        {include: '#string'},
        {include: '#comment'},
        {include: '#preprocessors'}
      ]
    },
    'variable-as': {
      captures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '\\s*([a-zA-Z0-9_\\-#$%\\-]+)\\s+([Aa][Ss])\\s*'
    },
    'variable-like': {
      captures: {1: {name: 'variable.other.abl'}},
      match: '(?i)\\s*([a-zA-Z0-9_\\-#$%\\-]+)\\s+(?=like)\\s*'
    },
    'variable-name': {
      match:
        '(?<=^|\\s|\\[|\\(|,)([a-zA-Z_][a-zA-Z0-9_#$\\-%&]*)(?=\\.\\s|\\.$|,|:|\\s|\\)|\\]|\\[|$)',
      name: 'variable.other.abl'
    },
    'while-expression': {
      begin: '(?i)\\s*(while)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=(transact(?:ion|io|i)?)|on|:|with)',
      patterns: [
        {include: '#comment'},
        {include: '#operator'},
        {include: '#property-call'},
        {include: '#branch-options'},
        {include: '#expression'}
      ]
    }
  },
  scopeName: 'source.abl'
}

export default grammar
