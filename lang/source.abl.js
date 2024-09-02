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
        '(?i)\\s*(available|audit-enabled|asc|ambiguous|alias|add-interval|accum|absolute|absolut|absolu|absol|abso|abs)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-B': {
      begin:
        '(?i)\\s*(buffer-tenant-name|buffer-tenant-id|buffer-partition-id|buffer-group-name|buffer-group-id|box|base64-encode|base64-decode)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-C': {
      begin:
        '(?i)\\s*(current-value|current-result-row|current-language|current-languag|current-langua|current-langu|current-lang|current-changed|count-of|connected|compare|codepage-convert|chr|cast|caps|can-set|can-query|can-find|can-do)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-D': {
      begin:
        '(?i)\\s*(dynamic-property|dynamic-next-value|dynamic-invoke|dynamic-function|dynamic-functio|dynamic-functi|dynamic-funct|dynamic-func|dynamic-enum|dynamic-current-value|dynamic-cast|defined|decrypt|decimal|decima|decim|deci|dec|dbversion|dbversio|dbversi|dbvers|dbtype|dbtaskid|dbrestrictions|dbrestriction|dbrestrictio|dbrestricti|dbrestrict|dbrestric|dbrestri|dbrestr|dbrest|dbparam|dbname|dbcollation|dbcodepage|db-remote-host|day|datetime-tz|datetime|date|dataservers|data-source-modified)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-E': {
      begin:
        '(?i)\\s*(extent|exp|etime|error|entry|entered|encrypt|encode)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-F': {
      begin:
        '(?i)\\s*(frame-value|frame-valu|frame-val|frame-row|frame-name|frame-line|frame-index|frame-inde|frame-file|frame-field|frame-down|frame-db|frame-col|first-of|first|fill)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-G': {
      begin:
        '(?i)\\s*(guid|go-pending|go-pendin|go-pendi|go-pend|get-unsigned-short|get-unsigned-long|get-string|get-size|get-short|get-pointer-value|get-long|get-int64|get-float|get-effective-tenant-name|get-effective-tenant-id|get-double|get-db-client|get-collations|get-collation|get-collatio|get-collati|get-collat|get-colla|get-coll|get-codepages|get-codepage|get-class|get-bytes|get-byte-order|get-byte|get-bits|generate-uuid|generate-random-key|generate-pbe-salt|generate-pbe-key|gateways|gateway)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-H': {
      begin: '(?i)\\s*(hex-encode|hex-decode|hash-code|handle)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-I': {
      begin:
        '(?i)\\s*(iso-date|is-lead-byte|is-db-multi-tenant|is-column-codepage|is-codepage-fixed|is-attr-space|is-attr-spac|is-attr-spa|is-attr-sp|is-attr-s|is-attr-|is-attr|interval|integer|intege|integ|inte|int64|int|input|index)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-K': {
      begin:
        '(?i)\\s*(keyword-all|keyword|keylabel|keyfunction|keyfunctio|keyfuncti|keyfunct|keyfunc|keycode|kblabel)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-L': {
      begin:
        '(?i)\\s*(lower|lookup|logical|log|locked|list-widgets|list-set-attrs|list-query-attrs|list-events|line-counter|line-counte|line-count|library|length|left-trim|ldbname|lc|lastkey|last-of|last)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-M': {
      begin:
        '(?i)\\s*(mtime|month|minimum|minimu|minim|mini|min|message-lines|message-digest|member|md5-digest|maximum)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-N': {
      begin:
        '(?i)\\s*(num-results|num-entries|num-dbs|num-aliases|num-aliase|num-alias|num-alia|num-ali|now|not entered|normalize|next-value|new)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-O': {
      begin: '(?i)\\s*(os-getenv|os-error|os-drives|os-drive|opsys)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-P': {
      begin:
        '(?i)\\s*(proversion|proversio|proversi|provers|propath|promsgs|progress|program-name|process-architecture|proc-status|proc-statu|proc-stat|proc-sta|proc-st|proc-handle|proc-handl|proc-hand|proc-han|proc-ha|pdbname|page-size|page-number|page-numbe|page-numb|page-num)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-Q': {
      begin: '(?i)\\s*(quoter|query-off-end)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-R': {
      begin:
        '(?i)\\s*(rowid|row-state|round|right-trim|rgb-value|rgb-valu|rgb-val|rgb-va|rgb-v|return-value|return|retry|replace|relation-fields|relation-field|relation-fiel|relation-fie|relation-fi|rejected|record-length|recid|raw|random|r-index)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-S': {
      begin:
        '(?i)\\s*(super|substring|substrin|substri|substr|substitute|substitut|substitu|substit|substi|subst|string|ssl-server-name|sqrt|skip|sha1-digest|setuserid|setuseri|setuser|set-size|set-effective-tenant|set-db-client|seek|search|sdbname|screen-lines)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-T': {
      begin:
        '(?i)\\s*(type-of|truncate|truncat|trunca|trunc|trim|transaction|today|to-rowid|timezone|time|this-object|terminal|tenant-name-to-id|tenant-name|tenant-id)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-U': {
      begin: '(?i)\\s*(userid|unbox)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-V': {
      begin: '(?i)\\s*(value|valid-object|valid-handle|valid-event)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-W': {
      begin:
        '(?i)\\s*(widget-handle|widget-handl|widget-hand|widget-han|widget-ha|widget-h|weekday)\\s*(?=\\()',
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
        '(?i)\\s*(this-object|super|self|this-procedure|target-procedure|source-procedure|session|error-status|compiler|audit-control|audit-policy|clipboard|codebase-locator|color-table|debugger|dslog-manager|file-information|file-info|font-table|last-event|log-manager|profiler|rcode-information|rcode-info|security-policy|session|web-context)\\s*(?=:)'
    },
    'access-modifier': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\s*(package-private|private|package-protected|protected|public|static|override|abstract|final)\\b'
    },
    'analyze-suspend-resume': {
      begin: '(?i)(\\&analyze-suspend|\\&analyze-resume)\\s*',
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
      begin: '(?i)(^|\\s+)(\\@[a-z][a-z0-9#\\$-_%&]*)\\s*(?=\\()',
      beginCaptures: {2: {name: 'entity.name.tag.abl'}},
      end: '(?=\\.)',
      name: 'meta.declaration.annotation.abl',
      patterns: [
        {include: '#parens'},
        {
          captures: {1: {name: 'entity.other.attribute-name.abl'}},
          match: '(?i)\\s*([a-z][a-z0-9#\\$-_%&]+)(?=[\\=\\s$])'
        },
        {include: '#string'},
        {include: '#operator-no-space'},
        {include: '#punctuation-comma'}
      ]
    },
    'annotation-simple': {
      captures: {2: {name: 'entity.name.tag.abl'}},
      match: '(?i)(^|\\s*)(\\@[a-z][a-z0-9#\\$-_%&]*)\\s*(?=\\.)',
      name: 'meta.declaration.annotation.abl'
    },
    'argument-reference': {
      captures: {1: {name: 'support.other.argument.abl'}},
      match:
        '\\s*((\\{\\s*\\&[\\.\\w\\/-]+\\})|(\\{\\s*\\d+\\})|(\\{\\s*\\*\\}))\\s*'
    },
    'array-literal': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.abl'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.abl'}},
      name: 'meta.array.literal.abl',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'array-use': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.abl'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.abl'}},
      name: 'meta.array.literal.abl',
      patterns: [{include: '#expression'}, {include: '#punctuation-comma'}]
    },
    'as-type': {
      begin: '(?i)\\s*(as)\\s*(class)?',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '\\s*(\\.|\\,|\\s*)',
      patterns: [
        {include: '#primitive-type'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
    },
    'attribute-access': {begin: ':', end: '(?=:)|(?=\\s*)'},
    'block-label': {
      captures: {
        2: {name: 'meta.block.label.abl'},
        3: {name: 'punctuation.terminator.abl'}
      },
      match:
        '(?i)^\\s*(?!(transaction|no-lock|exclusive-lock|exclusive-loc|exclusive-lo|exclusive-l|share-lock|share-loc|share-lo|share-|share):)([a-z][a-z0-9\\-\\$\\#]*)(:)\\s'
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
          match: '(?i)\\b(transaction|stop-after)\\b',
          name: 'keyword.other.abl'
        },
        {include: '#numeric'},
        {include: '#type-member-call'},
        {include: '#abl-functions'},
        {include: '#punctuation-comma'},
        {include: '#punctuation-colon'},
        {include: '#branch-options'},
        {include: '#expression'},
        {include: '#preprocessors'}
      ]
    },
    'block-undo-leave-next-retry': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.block.label.abl'}
      },
      match:
        '(?i)\\s*(?<!,)\\s*(leave|next|retry|undo)\\s*(?!on)([a-z0-9\\-\\_\\$]*)?\\s*'
    },
    'branch-leave-next-retry-throw': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.block.label.abl'}
      },
      match:
        '(?i)\\s*(?<=,)\\s*(leave|next|retry|throw)\\s*(?!on)([a-z0-9\\-\\_\\$]*)?\\s*'
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
      end: '(?=\\:|$)',
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
        '(?i)\\s*((break)\\s+)?(by)\\s+(([\\w\\-#$%]+\\.)?([\\w\\-#$%]+\\.)([\\w\\-#$%]+)(\\[\\d+\\])?)\\b'
    },
    'break-group': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.brace.round.js'},
        3: {name: 'storage.data.table.abl'},
        4: {name: 'meta.brace.round.js'}
      },
      match:
        '(?i)\\s*(first-of|first|last-of|last)\\s*(\\()\\s*([\\w\\-#$%]+\\.[\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*(\\))\\s*'
    },
    'buffer-for-table': {
      captures: {
        1: {name: 'storage.data.table.abl'},
        2: {name: 'keyword.other.abl'},
        4: {name: 'keyword.other.abl'},
        5: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*(?!do|repeat|for)([\\w\\-#$%]+)\\s+(for)\\s+((temp-table)\\s+)?([\\w\\-#$%]+)\\s*'
    },
    'buffer-name': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\b(buffer)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)'
    },
    'can-find': {
      begin: '(?i)\\s*(can-find)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'}
      },
      end: '(?i)\\b(?=\\)|where|no-lock|share-lock|using|no-prefetch|no-wait)\\s*',
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
      match: '(?i)(?<=^|\\s|\\()(true|false|yes|no|\\?)(?!\\w|-)',
      name: 'constant.language.abl'
    },
    'copy-lob': {
      begin: '(?i)\\b(copy-lob)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\.)',
      patterns: [{include: '#code-block'}]
    },
    'create-buffer': {
      begin: '(?i)(create)\\s+(buffer)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?i)(\\b(buffer-name|in)\\b)|(?=\\.)',
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
    'db-dot-table': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match: '(?i)\\b([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
    },
    'db-dot-table-dot-field': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match:
        '(?i)(?<=^|\\s|\\(|,)(([\\w\\-#$%]+\\.)?([\\w\\-#$%]+\\.)([\\w\\-#$%]+)(\\[\\d+\\])?)'
    },
    decimals: {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.numeric.source.abl'}
      },
      match: '(?i)\\s*(decimals)\\s((0x[0-9a-f]+)|([0-9]+)?)'
    },
    declarations: {patterns: [{include: '#define'}]},
    define: {
      begin: '(?i)\\s*(define|defin|defi|def)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(new|global|glob|shared)\\s*'
        },
        {include: '#serializable'},
        {include: '#access-modifier'},
        {include: '#define-enum-member'},
        {include: '#define-variable'},
        {include: '#define-parameter'},
        {include: '#define-dataset'},
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
        {include: '#type-name-progress'},
        {include: '#abl-system-handles'},
        {include: '#property-call'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#abl-functions'},
        {include: '#function-parameter-definition'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#label-variable'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
    },
    'define-buffer': {
      begin: '(?i)\\s*(buffer)\\s*',
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
    'define-class': {
      begin:
        '(?i)\\b(?<![\\#\\$\\-\\_\\%\\&])(class)\\b(?![\\#\\$\\-\\_\\%\\&])',
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
        {include: '#type-name-generic-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name-comma-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-comma'},
        {include: '#type-name'},
        {include: '#punctuation-comma'},
        {include: '#comment'}
      ]
    },
    'define-dataset': {
      begin: '(?i)\\b(dataset)\\s+([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b',
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
            '(?i)\\b(data-relation|parent-id-relation)\\s*([a-z][a-z0-9#$\\-\\_\\%\\&]+)'
        },
        {
          captures: {1: {name: 'support.function.abl'}},
          match: '(?i)\\b(relation-fields)\\b'
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
          match: '\\b([\\w\\#\\$\\%]+)\\b'
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
          match: '(?i)\\b(enum)\\s+([\\w\\#\\$\\%\\.]+)\\s*(flags)?\\s*(:)',
          name: 'meta.define.enum.abl'
        }
      ]
    },
    'define-event': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)\\b(event)\\s+([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b'
    },
    'define-field': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\s*(field)\\s+([\\w\\-#$%]+)\\s*'
    },
    'define-frame': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      match: '(?i)\\s*(frame)\\s*([a-z][a-z0-9#$\\-_%&]*)'
    },
    'define-index': {
      begin: '(?i)\\s*(index)\\s+([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      end: '(?i)(?=\\bindex\\b|\\.)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b(AS|IS|UNIQUE|PRIMARY|WORD-INDEX|ASCENDING|DESCENDING)\\b'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match: '\\b([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b'
        }
      ]
    },
    'define-interface': {
      begin:
        '(?i)\\b(interface)\\s+([\\w\\#\\$\\%]+[\\w\\#\\$\\%\\.]*(\\s*<\\s*[\\w\\#\\$\\%\\.]+\\s*\\>)?)',
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
        {include: '#type-name-comma'},
        {include: '#punctuation-comma'}
      ]
    },
    'define-like': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\s*(like|like-sequential)\\s+([\\w\\-#$%]+)\\s*'
    },
    'define-parameter': {
      begin: '(?i)\\b(parameter|paramete|paramet|parame|param)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=\\.)|\\b(?=bgcolor|column-label|contet-help-id|dcolor|decimals|drop-target|extent|font|fgcolor|format|initial|label|mouse-pointer|no-undo|not|case-sensitive|pfcolor|view-as|triggers)\\b',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'keyword.other.abl'},
            3: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\b(table)\\s+(for)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.other.abl'}
          },
          match:
            '(?i)\\b(table-handle|dataset-handle)\\s+([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'keyword.other.abl'},
            3: {name: 'storage.data.dataset.abl'}
          },
          match:
            '(?i)\\b(dataset)\\s+(for)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
        },
        {include: '#parameter-as'},
        {include: '#keywords'},
        {include: '#expression'}
      ]
    },
    'define-property': {
      begin: '(?i)\\b(property|prop)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\s*(?=get|set)',
      patterns: [
        {include: '#property-as'},
        {include: '#comment'},
        {include: '#primitive-type'},
        {include: '#extent'},
        {include: '#decimals'},
        {include: '#array-literal'},
        {include: '#timestamp-constant'},
        {include: '#numeric'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#keywords'},
        {include: '#string'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
    },
    'define-stream': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {patterns: [{include: '#variable-name'}]}
      },
      match: '(?i)\\s*(stream)\\s*([\\w\\-]+)',
      name: 'meta.define.stream.abl'
    },
    'define-table': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)(?<=\\b)(temp-table|like|before-table)\\s*([\\w\\-#$%]+)\\s*'
    },
    'define-type': {
      patterns: [
        {include: '#define-class'},
        {include: '#define-interface'},
        {include: '#define-enum-type'}
      ]
    },
    'define-variable': {
      begin: '(?i)\\s*(variable|variabl|variab|varia|vari|var)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=\\.)|\\b(?=bgcolor|column-label|contet-help-id|dcolor|decimals|drop-target|extent|font|fgcolor|format|initial|label|mouse-pointer|no-undo|not|case-sensitive|pfcolor|view-as|triggers)\\b',
      endCaptures: {1: {name: 'keyword.other.abl'}},
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(class)\\b'
        },
        {include: '#variable-as'},
        {include: '#primitive-type'},
        {include: '#type-names'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#string'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
    },
    'define-variable-name': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'variable.other.abl'}
      },
      match:
        '(?i)(var|vari|varia|variab|variabl|variable)\\s+([a-z][a-z0-9#$-_%&])+\\s*'
    },
    'dll-type': {
      captures: {1: {name: 'storage.type.abl'}},
      match:
        '(?i)\\b(byte|unsigned-short|short|unsigned-long|long|int64|float)\\b'
    },
    'double-colon-field-name': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match: '\\s*::([\\w\\-#$%]+)\\s*'
    },
    doublequotedstring: {
      begin: '(")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.abl'}},
      end: '(?i)(")(:[L|R|T|C|U]\\d*\\b)?',
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
          match: '\\s*([\\w\\#\\$\\%\\-]+(\\.[\\w\\#\\$\\%\\-]+)+)\\s*(:)'
        },
        {
          captures: {
            1: {name: 'variable.other.abl'},
            3: {name: 'punctuation.separator.comma.abl'},
            4: {name: 'punctuation.separator.colon.abl'}
          },
          match: '\\s*([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\s*((,)|(:))\\s*'
        },
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '\\s*([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\s*'
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
      match: '(?i)\\s*(extent)\\s*((0x[0-9a-f]+)|([0-9]+)?)'
    },
    'field-as-object': {
      captures: {1: {name: 'entity.name.type.abl'}},
      match: '(?i)\\s*(progress\\.lang\\.object|object)\\s*'
    },
    'field-name': {
      patterns: [
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match: '\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?\\s*(\\[\\d+\\]))\\s*'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match: '\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
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
      patterns: [{include: '#db-dot-table-dot-field'}, {include: '#field-name'}]
    },
    'find-record': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*(find)\\s+(first|last|next|prev|current)?\\s*([\\w\\-#$%]+)\\s*'
    },
    'for-each-join': {
      begin: '(?i)(?<=,)\\s*(each|first|last)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'storage.data.table.abl'}
      },
      end: '(?i)\\s*(?=where|no-lock|exclusive-lock|exclusive-loc|exclusive-lo|exclusive-l|share-lock|share-loc|share-lo|share-|share|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction|,|:)\\s*',
      patterns: [
        {include: '#fields-except-list'},
        {include: '#of-phrase'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*(of)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
        },
        {
          captures: {1: {name: 'storage.data.table.abl'}},
          match: '\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
        }
      ]
    },
    'for-each-table': {
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\s*(?=where|no-lock|exclusive-lock|exclusive-loc|exclusive-lo|exclusive-l|share-lock|share-loc|share-lo|share-|share|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction|,|:|on)\\s*',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(each|first|last|of)\\s*'
        },
        {include: '#fields-except-list'},
        {include: '#of-phrase'},
        {include: '#field-name'},
        {include: '#db-dot-table'},
        {include: '#db-dot-table-dot-field'}
      ]
    },
    'for-join': {
      captures: {1: {name: 'storage.data.table.abl'}},
      match:
        '(?i)(?<=,|^)\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s+(?=where|no-lock|exclusive-lock|exclusive-loc|exclusive-lo|exclusive-l|share-lock|share-loc|share-lo|share-|share|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction)'
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
        '(?i)\\s*(for)\\s+([\\w\\-#$%]*)\\s*(,)?\\s*([\\w\\-#$%]*)?\\s*(,)?\\s*([\\w\\-#$%]*)?\\s*(,)?\\s*([\\w\\-#$%]*)?\\s*(,)?\\s*([\\w\\-#$%]*)?\\s*(,)?\\s*([\\w\\-#$%]*)?'
    },
    'for-table': {
      captures: {
        1: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\s*(for)\\s+((temp-table)\\s+)?([\\w\\-#$%]+)\\s*'
    },
    'format-constant': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.language.source.abl'}
      },
      match: '(?i)\\b(format)\\s+(9+\\/9+\\/9+)\\b'
    },
    'from-to-by': {
      begin: '\\s*([\\w\\$\\-\\_\\%\\&]+)\\s+(=)\\s*',
      beginCaptures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.operator.source.abl'}
      },
      end: '(?i)(?=transaction|on|\\:|with|while)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s+(to|by)\\s*'
        },
        {include: '#numeric'},
        {include: '#branch-options'},
        {include: '#abl-functions'},
        {include: '#expression'}
      ]
    },
    'function-arguments': {
      begin: '(?=\\()',
      beginCaptures: {1: {name: 'meta.brace.round.js'}},
      end: '(?=\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function.arguments.abl',
      patterns: [
        {include: '#parens'},
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\s*(input-output|input-outpu|input-outp|input-out|input-ou|input-o|output|input|table-handle|dataset-handle|APPEND|BY-VALUE|BY-REFERENCE|BIND)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.dataset.abl'}
          },
          match: '(?i)\\b(dataset)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\b(temp-table|table|buffer)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
        },
        {include: '#constant'},
        {include: '#type-reference'},
        {include: '#db-dot-table-dot-field'},
        {include: '#abl-system-handles'},
        {include: '#can-find'},
        {include: '#abl-functions'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#unqualified-method-call'},
        {include: '#expression'},
        {include: '#comment'},
        {include: '#property-call'},
        {include: '#punctuation-comma'},
        {include: '#static-object-property-call'},
        {include: '#preprocessors'}
      ]
    },
    'function-definition': {
      begin: '(?i)\\b(function)\\s+([a-z0-9][a-z0-9#$\\-_%&]+)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      end: '(\\.|\\:)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.define.function.abl',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.function.abl'}
          },
          match: '(?i)\\b(map|to)\\s+(?!to\\s+)([a-z0-9][a-z0-9#$\\-_%&]+)\\b'
        },
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(returns|private|class|extent|in|super|forward|map)\\b'
        },
        {include: '#function-parameter-definition'},
        {include: '#parens'},
        {
          begin: '(?i)(?<=\\)|in)',
          end: '(?=(\\.|\\:)\\s)',
          patterns: [
            {include: '#keywords'},
            {include: '#type-member-call'},
            {include: '#variable-name'},
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
    'generic-types': {
      patterns: [
        {include: '#type-name-comma-progress'},
        {include: '#type-name-comma'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
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
      begin: '(?i)(\\&scoped-define|\\&global-define)\\s*([\\.\\w\\\\/-]*)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.function.preprocessor.abl'}
      },
      end: '(?=(?://|/\\*))|$',
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
        '(?i)(:)(available-formats|available|availabl|availab|availa|avail|auto-zap|auto-za|auto-z|auto-validate|auto-validat|auto-valida|auto-valid|auto-vali|auto-val|auto-synchronize|auto-return|auto-retur|auto-retu|auto-ret|auto-resize|auto-indent|auto-inden|auto-inde|auto-ind|auto-go|auto-end-key|auto-delete-xml|auto-delete|auto-completion|auto-completio|auto-completi|auto-complet|auto-comple|auto-compl|auto-comp|audit-event-context|attribute-names|attr-space|attr-spac|attr-spa|attr-sp|attr-s|attr-|attr|attached-pairlist|asynchronous|async-request-handle|async-request-count|appserver-userid|appserver-password|appserver-info|appl-context-id|appl-alert-boxes|appl-alert-boxe|appl-alert-box|appl-alert-bo|appl-alert-b|appl-alert-|appl-alert|ambiguous|ambiguou|ambiguo|ambigu|ambig|always-on-top|allow-prev-deserialization|allow-column-searching|after-table|after-rowid|after-buffer|adm-data|actor|active|accelerator)\\s*'
    },
    'handle-attributes-B': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(bytes-written|bytes-read|buffer-tenant-name|buffer-tenant-id|buffer-partition-id|buffer-name|buffer-nam|buffer-na|buffer-n|buffer-lines|buffer-handle|buffer-group-name|buffer-group-id|buffer-field|buffer-chars|box-selectable|box-selectabl|box-selectab|box-selecta|box-select|box|border-top-pixels|border-top-pixel|border-top-pixe|border-top-pix|border-top-pi|border-top-p|border-top-chars|border-top-char|border-top-cha|border-top-ch|border-top-c|border-right-pixels|border-right-pixel|border-right-pixe|border-right-pix|border-right-pi|border-right-p|border-right-chars|border-right-char|border-right-cha|border-right-ch|border-right-c|border-left-pixels|border-left-pixel|border-left-pixe|border-left-pix|border-left-pi|border-left-p|border-left-chars|border-left-char|border-left-cha|border-left-ch|border-left-c|border-bottom-pixels|border-bottom-pixel|border-bottom-pixe|border-bottom-pix|border-bottom-pi|border-bottom-p|border-bottom-chars|border-bottom-char|border-bottom-cha|border-bottom-ch|border-bottom-c|block-iteration-display|blank|bgcolor|bgcolo|bgcol|bgco|bgc|before-table|before-rowid|before-buffer|batch-size|batch-mode|basic-logging|base-ade|background|backgroun|backgrou|backgro|backgr|backg|back)\\s*'
    },
    'handle-attributes-C': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(cursor-offset|cursor-line|cursor-char|current-window|current-row-modified|current-result-row|current-response-info|current-request-info|current-iteration|current-environment|current-environmen|current-environme|current-environm|current-environ|current-enviro|current-envir|current-envi|current-env|current-column|current-changed|crc-value|crc-valu|crc-val|cpterm|cpstream|cprcodeout|cprcodein|cpprint|cplog|cpinternal|cpinterna|cpintern|cpinter|cpinte|cpint|cpcoll|cpcase|coverage|convert-3d-colors|convert-3d-color|convert-3d-colo|convert-3d-col|convert-3d-co|convert-3d-c|convert-3d-|convert-3d|control-box|context-help-id|context-help-file|context-help|config-name|complete|com-handle|column-scrolling|column-scrollin|column-scrolli|column-scroll|column-scrol|column-scro|column-scr|column-sc|column-resizable|column-read-only|column-pfcolor|column-pfcolo|column-pfcol|column-pfco|column-pfc|column-movable|column-label|column-labe|column-lab|column-font|column-fgcolor|column-fgcolo|column-fgcol|column-fgco|column-fgc|column-dcolor|column-bgcolor|column-bgcolo|column-bgcol|column-bgco|column-bgc|column|codepage|code|client-workstation|client-type|client-tty|client-connection-id|class-type|child-num|child-buffer|checked|charset|centered|centere|center|case-sensitive|case-sensitiv|case-sensiti|case-sensit|case-sensi|case-sens|case-sen|careful-paint|cancelled|cancel-button|can-write|can-writ|can-read|can-do-domain-support|can-delete|can-delet|can-dele|can-create|can-creat|can-crea|call-type|call-name|cache)\\s*'
    },
    'handle-attributes-D': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(dynamic|drop-target|drag-enabled|down|domain-type|domain-name|domain-description|display-type|display-typ|display-ty|display-timezone|display-t|disable-auto-zap|directory|description|descriptio|descripti|descript|delimiter|default-value|default-string|default-commit|default-button|default-butto|default-butt|default-but|default-buffer-handle|default|decimals|debug-alert|deblank|dde-topic|dde-name|dde-item|dde-id|dde-i|dde-error|dcolor|dbname|db-references|db-list|db-context|date-format|date-forma|date-form|date-for|date-fo|date-f|dataset|data-type|data-typ|data-ty|data-t|data-source-rowid|data-source-modified|data-source-complete-map|data-source|data-entry-return|data-entry-retur|data-entry-retu|data-entry-ret)\\s*'
    },
    'handle-attributes-E': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(extent|expandable|expand|exit-code|execution-log|exclusive-id|event-type|event-typ|event-ty|event-t|event-procedure-context|event-procedure|event-handler-object|event-handler|event-group-id|error-string|error-stack-trace|error-row|error-object-detail|error-object|error-column|error-colum|error-colu|error-col|error|entry-types-list|entity-expansion-limit|end-user-prompt|encryption-salt|encoding|enabled|empty|edit-can-undo|edit-can-paste|edge-pixels|edge-pixel|edge-pixe|edge-pix|edge-pi|edge-p|edge-chars|edge-char|edge-cha|edge-ch|edge-c)\\s*'
    },
    'handle-attributes-F': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(function|full-width-pixels|full-width-pixel|full-width-pixe|full-width-pix|full-width-pi|full-width-p|full-width-chars|full-width-char|full-width-cha|full-width-ch|full-width-c|full-width-|full-width|full-pathname|full-pathnam|full-pathna|full-pathn|full-height-pixels|full-height-pixel|full-height-pixe|full-height-pix|full-height-pi|full-height-p|full-height-chars|full-height-char|full-height-cha|full-height-ch|full-height-c|frequency|frame-y|frame-x|frame-spacing|frame-spacin|frame-spaci|frame-spac|frame-spa|frame-row|frame-name|frame-col|frame|fram|fragment|fragmen|forward-only|formatted|formatte|format|forma|form-long-input|form-input|form|foreign-key-hidden|foreground|foregroun|foregrou|foregro|foregr|foreg|fore|font|focused-row-selected|focused-row|flat-button|fit-last-column|first-tab-item|first-tab-ite|first-tab-it|first-tab-i|first-socket|first-server-socket|first-server|first-serve|first-serv|first-query|first-procedure|first-procedur|first-procedu|first-proced|first-proce|first-proc|first-object|first-form|first-dataset|first-data-source|first-column|first-child|first-buffer|first-async-request|first-async-reques|first-async-reque|first-async-requ|first-async-req|first-async-re|first-async-r|first-async-|first-async|filled|fill-where-string|fill-mode|file-type|file-size|file-offset|file-offse|file-offs|file-off|file-name|file-mod-time|file-mod-tim|file-mod-ti|file-mod-t|file-mod-date|file-mod-dat|file-mod-da|file-mod-d|file-create-time|file-create-tim|file-create-ti|file-create-t|file-create-date|file-create-dat|file-create-da|file-create-d|fgcolor|fgcolo|fgcol|fgco|fgc)\\s*'
    },
    'handle-attributes-G': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(group-box|grid-visible|grid-unit-width-pixels|grid-unit-width-pixel|grid-unit-width-pixe|grid-unit-width-pix|grid-unit-width-pi|grid-unit-width-p|grid-unit-width-chars|grid-unit-width-char|grid-unit-width-cha|grid-unit-width-ch|grid-unit-width-c|grid-unit-height-pixels|grid-unit-height-pixel|grid-unit-height-pixe|grid-unit-height-pix|grid-unit-height-pi|grid-unit-height-p|grid-unit-height-chars|grid-unit-height-char|grid-unit-height-cha|grid-unit-height-ch|grid-unit-height-c|grid-snap|grid-factor-vertical|grid-factor-vertica|grid-factor-vertic|grid-factor-verti|grid-factor-vert|grid-factor-ver|grid-factor-ve|grid-factor-v|grid-factor-horizontal|grid-factor-horizonta|grid-factor-horizont|grid-factor-horizon|grid-factor-horizo|grid-factor-horiz|grid-factor-hori|grid-factor-hor|grid-factor-ho|grid-factor-h|graphic-edge|graphic-edg|graphic-ed|graphic-e)\\s*'
    },
    'handle-attributes-H': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(hwnd|html-title-end|html-title-begin|html-header-end|html-header-begin|html-frame-end|html-frame-begin|html-end-of-page|html-end-of-line|html-charset|horizontal|horizonta|horizont|horizon|horizo|horiz|hori|hidden|help|height-pixels|height-pixel|height-pixe|height-pix|height-pi|height-p|height-chars|height-char|height-cha|height-ch|height-c|has-records|has-lobs|handler|handle)\\s*'
    },
    'handle-attributes-I': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(items-per-row|is-xml|is-partitioned|is-partitione|is-parameter-set|is-open|is-multi-tenant|is-json|is-class|is-clas|internal-entries|instantiating-procedure|input-value|inner-lines|inner-chars|initial|inherit-fgcolor|inherit-fgcolo|inherit-fgcol|inherit-fgco|inherit-fgc|inherit-bgcolor|inherit-bgcolo|inherit-bgcol|inherit-bgco|inherit-bgc|index-information|index-informatio|index-informati|index-informat|index-informa|index-inform|index-infor|index-info|index|in-handle|immediate-display|image-up|image-insensitive|image-down|image|ignore-current-modified|ignore-current-modifie|ignore-current-modifi|ignore-current-modif|ignore-current-modi|ignore-current-mod|icon|icfparameter|icfparamete|icfparamet|icfparame|icfparam)\\s*'
    },
    'handle-attributes-K': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(keys|key|keep-security-cache|keep-frame-z-order|keep-frame-z-orde|keep-frame-z-ord|keep-frame-z-or|keep-frame-z-o|keep-frame-z-|keep-frame-z|keep-connection-open)\\s*'
    },
    'handle-attributes-L': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(login-state|login-host|login-expiration-timestamp|logging-level|logfile-name|log-threshold|log-entry-types|locked|locator-type|locator-system-id|locator-public-id|locator-line-number|locator-column-number|local-version-info|local-port|local-name|local-host|literal-question|listings|list-items|list-item-pairs|line|library-calling-convention|library|length|last-tab-item|last-tab-ite|last-tab-it|last-tab-i|last-socket|last-server-socket|last-server|last-serve|last-serv|last-procedure|last-procedur|last-procedu|last-proced|last-proce|last-object|last-form|last-child|last-batch|last-async-request|last-async-reques|last-async-reque|last-async-requ|last-async-req|last-async-re|last-async-r|last-async-|last-async|large-to-small|large|languages|language|labels-have-colons|labels|label-font|label-fgcolor|label-fgcolo|label-fgcol|label-fgco|label-fgc|label-dcolor|label-dcolo|label-dcol|label-dco|label-dc|label-bgcolor|label-bgcolo|label-bgcol|label-bgco|label-bgc|label)\\s*'
    },
    'handle-attributes-M': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(must-understand|multitasking-interval|multiple|multi-compile|movable|mouse-pointer|mouse-pointe|mouse-point|mouse-poin|mouse-poi|mouse-po|mouse-p|modified|min-width-pixels|min-width-pixel|min-width-pixe|min-width-pix|min-width-pi|min-width-p|min-width-chars|min-width-char|min-width-cha|min-width-ch|min-width-c|min-value|min-valu|min-val|min-schema-marshal|min-height-pixels|min-height-pixel|min-height-pixe|min-height-pix|min-height-pi|min-height-p|min-height-chars|min-height-char|min-height-cha|min-height-ch|min-height-c|min-column-width-pixels|min-column-width-pixel|min-column-width-pixe|min-column-width-pix|min-column-width-pi|min-column-width-p|min-column-width-chars|min-column-width-char|min-column-width-cha|min-column-width-ch|min-column-width-c|min-button|message-area-font|message-area|merge-by-field|menu-mouse|menu-mous|menu-mou|menu-mo|menu-m|menu-key|menu-ke|menu-k|menu-bar|maximum-level|max-width-pixels|max-width-pixel|max-width-pixe|max-width-pix|max-width-pi|max-width-p|max-width-chars|max-width-char|max-width-cha|max-width-ch|max-width-c|max-value|max-valu|max-val|max-height-pixels|max-height-pixel|max-height-pixe|max-height-pix|max-height-pi|max-height-p|max-height-chars|max-height-char|max-height-cha|max-height-ch|max-height-c|max-data-guess|max-chars|max-button|manual-highlight|mandatory)\\s*'
    },
    'handle-attributes-N': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(numeric-separator|numeric-separato|numeric-separat|numeric-separa|numeric-separ|numeric-sepa|numeric-sep|numeric-format|numeric-forma|numeric-form|numeric-for|numeric-fo|numeric-f|numeric-decimal-point|numeric-decimal-poin|numeric-decimal-poi|numeric-decimal-po|numeric-decimal-p|numeric-decimal-|numeric-decimal|numeric-decima|numeric-decim|numeric-deci|numeric-dec|num-visible-columns|num-visible-column|num-visible-colum|num-visible-colu|num-visible-col|num-top-buffers|num-to-retain|num-tabs|num-source-buffers|num-selected-widgets|num-selected-rows|num-results|num-replaced|num-replace|num-replac|num-repla|num-repl|num-relations|num-references|num-parameters|num-messages|num-log-files|num-locked-columns|num-locked-column|num-locked-colum|num-locked-colu|num-locked-col|num-lines|num-iterations|num-items|num-header-entries|num-formats|num-fields|num-entries|num-dropped-files|num-columns|num-column|num-colum|num-colu|num-col|num-children|num-child-relations|num-buttons|num-button|num-butto|num-butt|num-but|num-buffers|nonamespace-schema-location|node-value|no-validate|no-validat|no-valida|no-valid|no-vali|no-val|no-schema-marshal|no-focus|no-empty-space|no-current-value|next-tab-item|next-tab-ite|next-sibling|next-rowid|next-column|next-colum|next-colu|next-col|new-row|new|nested|needs-prompt|needs-appserver-prompt|namespace-uri|namespace-prefix|name)\\s*'
    },
    'handle-attributes-O': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(owner-document|owner|overlay|origin-rowid|origin-handle|ordinal|options|on-frame-border|on-frame-borde|on-frame-bord|on-frame-bor|on-frame-bo|on-frame-b|on-frame-|on-frame)\\s*'
    },
    'handle-attributes-P': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(published-events|public-id|proxy-userid|proxy-password|proxy|progress-source|progress-sourc|progress-sour|progress-sou|progress-so|progress-s|profiling|procedure-type|procedure-name|private-data|private-dat|private-da|private-d|printer-port|printer-name|printer-hdc|printer-control-handle|primary-passphrase|primary|prev-tab-item|prev-tab-ite|prev-tab-it|prev-tab-i|prev-sibling|prev-column|prev-colum|prev-colu|prev-col|prepared|prepare-string|prefer-dataset|position|popup-only|popup-onl|popup-on|popup-o|popup-menu|popup-men|popup-me|popup-m|pixels-per-row|pixels-per-column|pixels-per-colum|pixels-per-colu|pixels-per-col|pfcolor|pfcolo|pfcol|pfco|pfc|persistent-procedure|persistent-cache-disabled|persistent|persisten|persiste|persist|pbe-key-rounds|pbe-hash-algorithm|pbe-hash-algorith|pbe-hash-algorit|pbe-hash-algori|pbe-hash-algor|pbe-hash-algo|pbe-hash-alg|pathname|password-field|parse-status|parent-relation|parent-relatio|parent-relati|parent-relat|parent-rela|parent-rel|parent-id-relation|parent-fields-before|parent-fields-after|parent-buffer|parent|parameter|paramete|paramet|parame|param|page-top|page-bottom|page-botto|page-bott|page-bot)\\s*'
    },
    'handle-attributes-Q': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)(:)(quit|query-off-end|query|qualified-user-id)\\s*'
    },
    'handle-attributes-R': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(rowid|row-state|row-resizable|row-markers|row-marker|row-marke|row-mark|row-mar|row-ma|row-height-pixels|row-height-pixel|row-height-pixe|row-height-pix|row-height-pi|row-height-p|row-height-chars|row-height-char|row-height-cha|row-height-ch|row-height-c|row|rounded|roles|role|return-value-dll-type|return-value-data-type|return-value|return-valu|return-val|return-inserted|return-inserte|return-insert|return-inser|return-inse|return-ins|retain-shape|retain-shap|retain-sha|retain-sh|retain-s|restart-rowid|restart-row|response-info|resize|resizable|resizabl|resizab|resiza|request-info|reposition|remote-port|remote-host|remote|relations-active|relation-fields|relation-field|relation-fiel|relation-fie|relation-fi|rejected|refreshable|recursive|record-length|record-lengt|record-leng|record-len|recid|read-only|radio-buttons)\\s*'
    },
    'handle-attributes-S': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(system-id|system-alert-boxes|system-alert-boxe|system-alert-box|system-alert-bo|system-alert-b|system-alert-|system-alert|symmetric-support|symmetric-encryption-key|symmetric-encryption-iv|symmetric-encryption-algorithm|symmetric-encryption-aad|suppress-warnings-list|suppress-warnings|suppress-warning|suppress-warnin|suppress-warni|suppress-warn|suppress-war|suppress-wa|suppress-w|suppress-namespace-processing|super-procedures|super-procedure|super-procedur|super-procedu|super-proced|super-proce|super-proc|subtype|strict-entity-resolution|strict|stretch-to-fit|stream|stopped|stoppe|stop-object|stop|status-area-font|status-area|statistics|state-detail|startup-parameters|standalone|ssl-server-name|sort-number|sort-ascending|sort|soap-version|soap-fault-subcode|soap-fault-string|soap-fault-role|soap-fault-node|soap-fault-misunderstood-header|soap-fault-detail|soap-fault-code|soap-fault-actor|small-title|small-icon|skip-deleted-record|skip-deleted-recor|skip-deleted-reco|skip-deleted-rec|singleton|single-run|signature-value|side-labels|side-label-handle|side-label-handl|side-label-hand|side-label-han|side-label-ha|side-label-h|show-in-taskbar|show-in-taskba|show-in-taskb|show-in-task|session-id|session-end|server-operating-mode|server-connection-id|server-connection-context|server-connection-contex|server-connection-conte|server-connection-cont|server-connection-con|server-connection-co|server-connection-bound-request|server-connection-bound-reques|server-connection-bound-reque|server-connection-bound-requ|server-connection-bound-req|server-connection-bound-re|server-connection-bound|server-connection-boun|server-connection-bou|server-connection-bo|server|serialize-name|serialize-hidden|separators|separator-fgcolor|separator-fgcolo|separator-fgcol|separator-fgco|separator-fgc|sensitive|selection-text|selection-start|selection-end|selected|selectable|seal-timestamp|scrollbar-vertical|scrollbar-vertica|scrollbar-vertic|scrollbar-verti|scrollbar-vert|scrollbar-ver|scrollbar-ve|scrollbar-v|scrollbar-horizontal|scrollbar-horizonta|scrollbar-horizont|scrollbar-horizon|scrollbar-horizo|scrollbar-horiz|scrollbar-hori|scrollbar-hor|scrollbar-ho|scrollbar-h|scrollable|scroll-bars|screen-value|screen-valu|screen-val|screen-lines|schema-path|schema-marshal|schema-location|schema-change|save-where-string)\\s*'
    },
    'handle-attributes-T': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(type|transparent|transparen|transpare|transpar|transaction|transactio|transacti|transact|trans-init-procedure|trans-init-procedur|trans-init-procedu|trans-init-proced|trans-init-proce|trans-init-proc|tracking-changes|tracing|trace-filter|top-only|top-nav-query|tooltips|tooltip|toggle-box|title-font|title-fon|title-fo|title-fgcolor|title-fgcolo|title-fgcol|title-fgco|title-fgc|title-dcolor|title-dcolo|title-dcol|title-dco|title-dc|title-bgcolor|title-bgcolo|title-bgcol|title-bgco|title-bgc|title|timezone|time-source|tic-marks|three-d|thread-safe|text-selected|temp-directory|temp-director|temp-directo|temp-direct|temp-direc|temp-dire|temp-dir|table-number|table-numbe|table-numb|table-num|table-list|table-handle|table-crc-list|table|tab-stop|tab-position)\\s*'
    },
    'handle-attributes-U': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(user-id|url-userid|url-password|url|unique-match|unique-id|undo-throw-scope|undo)\\s*'
    },
    'handle-attributes-V': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(visible|virtual-width-pixels|virtual-width-pixel|virtual-width-pixe|virtual-width-pix|virtual-width-pi|virtual-width-p|virtual-width-chars|virtual-width-char|virtual-width-cha|virtual-width-ch|virtual-width-c|virtual-height-pixels|virtual-height-pixel|virtual-height-pixe|virtual-height-pix|virtual-height-pi|virtual-height-p|virtual-height-chars|virtual-height-char|virtual-height-cha|virtual-height-ch|virtual-height-c|view-first-column-on-reopen|view-as|version|value|validation-enabled|validate-xml|validate-message|validate-expression|validate-expressio|v6display)\\s*'
    },
    'handle-attributes-W': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(write-status|work-area-y|work-area-x|work-area-width-pixels|work-area-width-pixel|work-area-width-pixe|work-area-width-pix|work-area-width-pi|work-area-width-p|work-area-height-pixels|work-area-height-pixel|work-area-height-pixe|work-area-height-pix|work-area-height-pi|work-area-height-p|word-wrap|window-system|window-syste|window-syst|window-sys|window-state|window-stat|window-sta|window|width-pixels|width-pixel|width-pixe|width-pix|width-pi|width-p|width-chars|width-char|width-cha|width-ch|width-c|widget-leave|widget-leav|widget-lea|widget-le|widget-l|widget-id|widget-enter|widget-ente|widget-ent|widget-en|widget-e|where-string|wc-admin-app|warning)\\s*'
    },
    'handle-attributes-X': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(xml-suppress-namespace-processing|xml-strict-entity-resolution|xml-schema-path|xml-schema-pat|xml-node-type|xml-node-name|xml-entity-expansion-limit|xml-data-type|xcode-session-key|x-document|x)\\s*'
    },
    'handle-attributes-Y': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)(:)(year-offset|y)\\s*'
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
        '(?i)(:)(authentication-failed|attach-data-source|apply-callback|append-child|add-super-procedure|add-super-procedur|add-super-procedu|add-super-proced|add-super-proce|add-super-proc|add-source-buffer|add-schema-location|add-relation|add-relatio|add-relati|add-relat|add-rela|add-rel|add-parent-id-relation|add-new-index|add-new-field|add-like-index|add-like-field|add-like-column|add-like-colum|add-like-colu|add-like-col|add-last|add-index-field|add-header-entry|add-first|add-fields-from|add-events-procedure|add-events-procedur|add-events-procedu|add-events-proced|add-events-proce|add-events-proc|add-columns-from|add-calc-column|add-calc-colum|add-calc-colu|add-calc-col|add-buffer|accept-row-changes|accept-changes)\\s*(?=\\()',
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
        '(?i)(:)(buffer-value|buffer-validate|buffer-release|buffer-releas|buffer-import-fields|buffer-import|buffer-field|buffer-export-fields|buffer-export|buffer-delete|buffer-create|buffer-copy|buffer-compare|buffer-compar|buffer-compa|buffer-comp|begin-event-group)\\s*(?=\\()',
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
        '(?i)(:)(current-query|create-result-list-entry|create-node-namespace|create-node|create-like-sequential|create-like|copy-temp-table|copy-sax-attributes|copy-dataset|convert-to-offset|convert-to-offse|convert-to-offs|connected|connect|close-log|clone-node|clear-sort-arrows|clear-sort-arrow|clear-selection|clear-selectio|clear-selecti|clear-select|clear-log|clear-appl-context|clear|cancel-requests-after|cancel-requests|cancel-break)\\s*(?=\\()',
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
        '(?i)(:)(dump-logging-now|display-message|disconnect|disconnec|disconne|disconn|discon|disable-load-triggers|disable-dump-triggers|disable-connections|disable|detach-data-source|deselect-selected-row|deselect-rows|deselect-focused-row|delete-selected-rows|delete-selected-row|delete-result-list-entry|delete-node|delete-line|delete-header-entry|delete-current-row|delete-char|delete|declare-namespace|debug|debu)\\s*(?=\\()',
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
        '(?i)(:)(export-principal|export|entry|end-file-drop|end-event-group|end-element|end-document|encrypt-audit-mac-key|encode-domain-access-code|enable-events|enable-connections|enable|empty-temp-table|empty-dataset|edit-undo|edit-paste|edit-cut|edit-copy|edit-clear)\\s*(?=\\()',
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
        '(?i)(:)(first-of|find-unique|find-last|find-first|find-current|find-by-rowid|fill|fetch-selected-row)\\s*(?=\\()',
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
        '(?i)(:)(get-wait-state|get-wait-stat|get-wait-sta|get-wait-st|get-wait-s|get-wait-|get-wait|get-value-by-qname|get-value-by-namespace-name|get-value-by-index|get-uri-by-index|get-type-by-qname|get-type-by-namespace-name|get-type-by-index|get-top-buffer|get-text-width-pixels|get-text-width-pixel|get-text-width-pixe|get-text-width-pix|get-text-width-pi|get-text-width-p|get-text-width-chars|get-text-width-char|get-text-width-cha|get-text-width-ch|get-text-width-c|get-text-height-pixels|get-text-height-pixel|get-text-height-pixe|get-text-height-pix|get-text-height-pi|get-text-height-p|get-text-height-chars|get-text-height-char|get-text-height-cha|get-text-height-ch|get-text-height-c|get-tab-item|get-source-buffer|get-socket-option|get-signature|get-serialized|get-selected-widget|get-selected-widge|get-selected-widg|get-selected-wid|get-selected-wi|get-selected-w|get-selected-|get-selected|get-safe-user|get-row|get-rgb-value|get-rgb-valu|get-rgb-val|get-rgb-va|get-rgb-v|get-rgb-|get-rgb|get-repositioned-row|get-relation|get-relatio|get-relati|get-relat|get-rela|get-rel|get-red-value|get-red-valu|get-red-val|get-red-va|get-red-v|get-red-|get-red|get-qname-by-index|get-property|get-printers|get-prev|get-parent|get-number|get-node|get-next|get-message-type|get-message|get-localname-by-index|get-last|get-iteration|get-index-by-qname|get-index-by-namespace-name|get-header-entry|get-header-entr|get-green-value|get-green-valu|get-green-val|get-green-va|get-green-v|get-green-|get-green|get-first|get-firs|get-file-offset|get-file-offse|get-file-name|get-error-row|get-error-column|get-dynamic|get-dropped-file|get-document-element|get-dataset-buffer|get-current|get-curren|get-curre|get-curr|get-config-value|get-column|get-client|get-child-relation|get-child-relatio|get-child-relati|get-child-relat|get-child-rela|get-child-rel|get-child|get-changes|get-cgi-value|get-cgi-long-value|get-cgi-list|get-callback-proc-name|get-callback-proc-context|get-bytes-available|get-buffer-handle|get-browse-column|get-browse-colum|get-browse-colu|get-browse-col|get-blue-value|get-blue-valu|get-blue-val|get-blue-va|get-blue-v|get-blue-|get-blue|get-binary-data|get-attribute-node|get-attribute)\\s*(?=\\()',
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
        '(?i)(:)(is-selected|is-row-selected|invoke|insert-tab|insert-ta|insert-t|insert-string|insert-row|insert-file|insert-before|insert-backtab|insert-backta|insert-backt|insert-back|insert-bac|insert-ba|insert-b|insert-attribute|insert|initiate|initialize-document-type|initialize|index-information|increment-exclusive-id|import-principal|import-node)\\s*(?=\\()',
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
        '(?i)(:)(lookup|longchar-to-node-value|logout|log-audit-event|lock-registration|loadcontrols|load-small-icon|load-mouse-pointer|load-mouse-pointe|load-mouse-point|load-mouse-poin|load-mouse-poi|load-mouse-po|load-mouse-p|load-image-up|load-image-insensitive|load-image-down|load-image|load-icon|load-domains|load|list-property-names|last-of)\\s*(?=\\()',
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
        '(?i)(:)(move-to-top|move-to-to|move-to-t|move-to-eof|move-to-bottom|move-to-botto|move-to-bott|move-to-bot|move-to-bo|move-to-b|move-column|move-colum|move-colu|move-col|move-before-tab-item|move-before-tab-ite|move-before-tab-it|move-before-tab-i|move-before-tab-|move-before-tab|move-before-ta|move-before-t|move-before-|move-before|move-befor|move-after-tab-item|move-after-tab-ite|move-after-tab-it|move-after-tab-i|move-after-tab-|move-after-tab|move-after-ta|move-after-t|move-after-|move-after|merge-row-changes|merge-changes|memptr-to-node-value|mark-row-state|mark-new)\\s*(?=\\()',
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
        '(?i)(:)(normalize|node-value-to-memptr|node-value-to-longchar)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'handle-methods-Q': {
      begin: '(?i)(:)(query-prepare|query-open|query-close)\\s*(?=\\()',
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
        '(?i)(:)(reset|reposition-to-rowid|reposition-to-row|reposition-forward|reposition-backward|replace-selection-text|replace-child|replace|remove-super-procedure|remove-super-procedur|remove-super-procedu|remove-super-proced|remove-super-proce|remove-super-proc|remove-events-procedure|remove-events-procedur|remove-events-procedu|remove-events-proced|remove-events-proce|remove-events-proc|remove-child|remove-attribute|reject-row-changes|reject-changes|register-domain|refresh-audit-policy|refresh|read-xmlschema|read-xml|read-json|read-file|read|raw-transfer)\\s*(?=\\()',
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
        '(?i)(:)(synchronize|string-value|stop-parsing|start-element|start-document|set-wait-state|set-wait-stat|set-wait-sta|set-wait-st|set-wait-s|set-wait-|set-wait|set-sort-arrow|set-socket-option|set-serialized|set-selection|set-safe-user|set-rollback|set-role|set-rgb-value|set-rgb-valu|set-rgb-val|set-rgb-va|set-rgb-v|set-rgb-|set-rgb|set-repositioned-row|set-red-value|set-red-valu|set-red-val|set-red-va|set-red-v|set-red-|set-red|set-read-response-procedure|set-property|set-parameter|set-output-destination|set-numeric-format|set-numeric-forma|set-numeric-form|set-node|set-must-understand|set-input-source|set-green-value|set-green-valu|set-green-val|set-green-va|set-green-v|set-green-|set-green|set-dynamic|set-connect-procedure|set-commit|set-client|set-callback-procedure|set-callback|set-buffers|set-break|set-blue-value|set-blue-valu|set-blue-val|set-blue-va|set-blue-v|set-blue-|set-blue|set-attribute-node|set-attribute|set-appl-context|set-actor|serialize-row|select-row|select-prev-row|select-next-row|select-focused-row|select-all|search|seal|scroll-to-selected-row|scroll-to-item|scroll-to-ite|scroll-to-it|scroll-to-i|scroll-to-current-row|sax-parse-next|sax-parse-first|sax-parse|save-row-changes|save-file|save)\\s*(?=\\()',
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
        '(?i)(:)(tenant-name|tenant-id|temp-table-prepare|temp-table-prepar)\\s*(?=\\()',
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
        '(?i)(:)(user-data|url-encode|url-decode|update-attribute)\\s*(?=\\()',
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
        '(?i)(:)(validate-seal|validate-domain-access-code|validate)\\s*(?=\\()',
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
        '(?i)(:)(write-xmlschema|write-xml|write-processing-instruction|write-message|write-json|write-fragment|write-external-dtd|write-entity-ref|write-empty-element|write-data-element|write-data|write-comment|write-characters|write-cdata|write)\\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'support.function.abl'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      patterns: [{include: '#function-arguments'}]
    },
    'if-then': {
      begin: '(?i)\\s*(if)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\b(?=then)\\b',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\b(and|or)\\b'
        },
        {include: '#parens'},
        {include: '#function-arguments'},
        {include: '#db-dot-table-dot-field'},
        {include: '#comment'},
        {include: '#operator'},
        {include: '#code-block'},
        {include: '#property-call'},
        {include: '#handle-attributes'},
        {include: '#preprocessors'},
        {include: '#keywords'}
      ]
    },
    'include-file': {
      begin: '(?i)({)\\s*(([a-z][a-z0-9\\/\\-\\_\\\\]+)(\\.[a-z]+)?)',
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
          match: '(?<=\\s)(&[a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\.]+)\\s*(=?)',
          name: 'meta.include.argument.abl'
        },
        {include: '#string'},
        {
          captures: {
            1: {name: 'support.other.argument.abl'},
            2: {name: 'keyword.operator.source.abl'}
          },
          match: '(?<=\\s)(&[a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\.]+)\\s*(=?)',
          name: 'meta.include-named-argument'
        },
        {include: '#string'},
        {
          captures: {
            1: {name: 'support.other.argument.abl'},
            2: {name: 'keyword.operator.source.abl'}
          },
          match: '(?<=\\s)(&[a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\.]+)\\s*(=?)',
          name: 'meta.include-named-argument'
        },
        {
          captures: {1: {name: 'support.other.argument.abl'}},
          match: '(?<=\\s)([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\.\\:]+)\\b'
        }
      ]
    },
    'inherits-implements-type': {
      begin:
        '(?i)\\s*(implements|inherits)\\s*(([\\w\\#\\$\\%]+|progress)(\\.[\\w\\#\\$\\%]+)*(?<!\\.))\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.type.abl'}
      },
      end: '(?i)\\s*(serializable|abstract|final|use-widget-pool|inherits|implements+?)',
      endCaptures: {1: {name: 'keyword.other.abl'}},
      name: 'meta.define-type.implements.abl',
      patterns: [{include: '#type-name-comma'}]
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
        '(?i)\\b(avg|average|averag|avera|aver|ave|available|automatic|auto-endkey|authorization|audit-policy|audit-control|attribute-type|attachment|attach|at|assign|assembly|ask-overwrite|ascending|ascendin|ascendi|ascend|ascen|asce|asc|as-cursor|as|array-message|array-messag|array-messa|array-mess|array-mes|array-me|array-m|apply|application|append-line|append|anywhere|any-printable|any-key|any|ansi-only|and|ambiguous|alternate-key|alter|allow-replication|all|alert-box|aggregate|advise|add|active-window|active-form|across|accumulate|accumulat|accumula|accumul|accumu|accum|abstract|abort)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-B': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(byte|by-variant-pointer|by-variant-pointe|by-variant-point|by-value|by-reference|by-pointer|by|buttons|button|buffer-copy|buffer-compare|buffer|btos|browse-header|browse-column-labels|browse-column-formats|browse-column-data-types|browse|break-line|break|bottom-column|bottom|both|border-top|border-to|border-t|border-right|border-righ|border-rig|border-ri|border-r|border-left|border-lef|border-le|border-l|border-bottom|border-botto|border-bott|border-bot|border-bo|border-b|block-level|block-leve|block-lev|block|blob|bind-where|bind|binary|big-endian|between|bell|begins|before-hide|before-hid|before-hi|before-h|batch|base64|base-key|backwards|backward|backspace|back-tab)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-C': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(cut|cursor-up|cursor-right|cursor-left|cursor-down|cursor|curso|curs|current_date|current-value|current-language|current|ctos|create-test-file|create-on-add|create|count|copy-lob|copy|convert|control-frame|control-fram|control-container|control-containe|control-contain|control-contai|control-conta|control-cont|control|context-popup|context-popu|context-pop|context|contents|contains|container-event|constructor|constrained|connect|component-self|component-handle|compiler|compile|compares|compare|command|combo-box|com-self|columns|column-of|column-label-height-pixels|column-label-height-pixel|column-label-height-pixe|column-label-height-pix|column-label-height-pi|column-label-height-p|column-label-height-chars|column-label-height-char|column-label-height-cha|column-label-height-ch|column-label-height-c|column-label-font|column-label-fgcolor|column-label-fgcolo|column-label-fgcol|column-label-fgco|column-label-fgc|column-label-dcolor|column-label-bgcolor|column-label-bgcolo|column-label-bgcol|column-label-bgco|column-label-bgc|column-codepage|column|color-table|color|colon-aligned|colon-aligne|colon-align|colon|collate|col-of|col|codebase-locator|close|clob|clipboard|client-principal|clear|class|choose|choices|check-mem-stomp|check|character_length|character|characte|charact|charac|chara|char|chained|centered|cdecl|catch|case|cancel-pick|call|cache-size|cache)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-D': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(dynamic-property|dynamic-new|dynamic-current-value|dump|dslog-manager|drop-file-notify|drop-down-list|drop-down|drop|down|double|dotnet-clr-loaded|dos-end|dos|do|dll-call-type|distinct|display|displa|displ|disp|dismiss-menu|disconnect|disabled|disable|dir|dictionary|dictionar|dictiona|diction|dictio|dicti|dict|dialog-help|dialog-box|detach|destructor|deselection-extend|deselection|deselect-extend|deselect|descending|descendin|descendi|descend|descen|desce|desc|delimiter|delete-word|delete-field|delete-end-line|delete-column|delete-character|delete|delegate|del|define-user-event-manager|define|defin|defi|defer-lob-fetch|default-window|default-untranslatable|default-pop-up|default-extension|default-extensio|default-extensi|default-extens|default-exten|default-exte|default-ext|default-ex|default-action|def|declare|debugger|debug-set-tenant|debug-list|dde-notify|dde|dataset-handle|dataset|database|data-source|data-relation|data-relatio|data-relati|data-relat|data-rela|data-rel|data-refresh-page|data-refresh-line|data-bind|data-bin|data-bi|data-b)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-E': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(extract|external|extent|extended|export|explicit|expire|exit|exists|execute|exclusive-web-user|exclusive-web-use|exclusive-web-us|exclusive-web-u|exclusive-web-|exclusive-web|exclusive-lock|exclusive-loc|exclusive-lo|exclusive-l|exclusive|except|events|event-handler-context|event|escape|error-status|error-statu|error-stat|error|eq|enum|entry|enter-menubar|endkey|end-search|end-row-resize|end-resize|end-move|end-key|end-error|end-box-selection|end|enable|empty-selection|empty|else|editor-tab|editor-backtab|editor|editing|edge|echo|each)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-F': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(function-call-type|function|full-height|fromnoreorder|from-pixels|from-pixel|from-pixe|from-pix|from-pi|from-p|from-current|from-curren|from-curre|from-curr|from-cur|from-chars|from-char|from-cha|from-ch|from-c|from|frame-value|frame|forwards|forward|format|form|force-file|for|font-table|font|focus-in|focus|float|flags|fixed-only|fix-codepage|first|firehose-cursor|finder|find-wrap-around|find-select|find-previous|find-prev-occurrence|find-next-occurrence|find-next|find-global|find-case-sensitive|find|finally|final|filters|fill-in|filename|file-information|file-informatio|file-informati|file-informat|file-informa|file-inform|file-infor|file-info|file-access-time|file-access-tim|file-access-ti|file-access-t|file-access-date|file-access-dat|file-access-da|file-access-d|file|fields|field|fetch|false-leaks|false)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-G': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(gt|group|grid-unit-width|grid-unit-height|grid-set|grayed|grant-archive|grant|goto|go-on|go|global|getbyte|get-text-width|get-text-height|get-key-value|get-key-valu|get-key-val|get-file|get-dir|get-attr-call-type|get|generate-md5|ge)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-H': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(host-byte-order|horiz-scroll-drag|horiz-home|horiz-end|home|hint|hide|helpfile-name|helpfile-nam|helpfile-na|helpfile-n|help-topic|help-context|help-contex|help-conte|help-cont|help-con|height|header|having)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-I': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(iteration-changed|item|is|into|interface|insert-mode|insert-field-label|insert-field-data|insert-field|insert-column|insert|input-output|input-outpu|input-outp|input-out|input-ou|input-o|input|inner|initiate|initial-filter|initial-dir|initial|init|inherits|inherit-color-mode|information|informatio|informati|informat|informa|inform|infor|info|indicator|indexed-reposition|index-hint|in|import|implements|image-size-pixels|image-size-pixel|image-size-pixe|image-size-pix|image-size-pi|image-size-p|image-size-chars|image-size-char|image-size-cha|image-size-ch|image-size-c|image-size|image|if)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-J': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(join-on-select|join-by-sqldb|join)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-K': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(keycache-join|key-label|key-function|key-functio|key-functi|key-funct|key-func|key-code|keep-tab-order|keep-messages)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-L': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(lt|lower|lookahead|longchar|longcha|longch|long|log-manager|log-id|locked|lob-dir|load-result-into|load-picture|load-from|load|little-endian|listing|listin|listi|line-up|line-right|line-left|line-down|like-sequential|like|length|left-end|left-aligned|left-aligne|left-align|left|leave|leak-detection|leading|le|last-key|last-event|last-even|landscape|label-pfcolor|label-pfcolo|label-pfcol|label-pfco|label-pfc|label)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-M': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(must-exist|multiple-key|mpe|move|mouse|modulo|mod|min-width|min-size|min-schema-marshall|min-schema-marshal|min-height|method|message-line|message-area-msg|message|menubar|menu-item|menu-drop|menu|memptr|md5-value|maximize|max-width|max-size|max-rows|max-height|max|matches|margin-width-pixels|margin-width-pixel|margin-width-pixe|margin-width-pix|margin-width-pi|margin-width-p|margin-width-chars|margin-width-char|margin-width-cha|margin-width-ch|margin-width-c|margin-width|margin-height-pixels|margin-height-pixel|margin-height-pixe|margin-height-pix|margin-height-pi|margin-height-p|margin-height-chars|margin-height-char|margin-height-cha|margin-height-ch|margin-height-c|margin-height|margin-extra|map|main-menu|machine-class)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-N': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(numeric|num-selected|num-copies|null|not-active|not|none|non-serializable|node-type|no-word-wrap|no-wait|no-undo|no-underline|no-underlin|no-underli|no-underl|no-under|no-unde|no-und|no-tab-stop|no-tab-sto|no-tab-st|no-tab-s|no-tab-|no-tab|no-separators|no-separate-connection|no-scrolling|no-scrollbar-vertical|no-scrollbar-vertica|no-scrollbar-vertic|no-scrollbar-verti|no-scrollbar-vert|no-scrollbar-ver|no-scrollbar-ve|no-scrollbar-v|no-schema-marshall|no-schema-marshal|no-row-markers|no-return-value|no-return-valu|no-return-val|no-query-unique-added|no-query-unique-adde|no-query-unique-add|no-query-unique-ad|no-query-unique-a|no-query-unique-|no-query-unique|no-query-uniqu|no-query-uniq|no-query-uni|no-query-un|no-query-u|no-query-order-added|no-query-order-adde|no-query-order-add|no-query-order-ad|no-query-order-a|no-query-order-|no-query-order|no-query-orde|no-query-ord|no-query-or|no-query-o|no-prefetch|no-prefetc|no-prefet|no-prefe|no-pause|no-message|no-messag|no-messa|no-mess|no-mes|no-map|no-lookahead|no-lock|no-lobs|no-labels|no-label|no-keycache-join|no-join-by-sqldb|no-inherit-fgcolor|no-inherit-fgcolo|no-inherit-fgcol|no-inherit-fgco|no-inherit-fgc|no-inherit-bgcolor|no-inherit-bgcolo|no-inherit-bgcol|no-inherit-bgco|no-inherit-bgc|no-index-hint|no-hide|no-help|no-firehose-cursor|no-fill|no-fil|no-fi|no-f|no-error|no-echo|no-drag|no-debug|no-convert-3d-colors|no-convert-3d-color|no-convert-3d-colo|no-convert-3d-col|no-convert-3d-co|no-convert-3d-c|no-convert-3d-|no-convert-3d|no-convert|no-console|no-column-scrolling|no-column-scrollin|no-column-scrolli|no-column-scroll|no-column-scrol|no-column-scro|no-column-scr|no-column-sc|no-box|no-bind-where|no-auto-validate|no-auto-trim|no-auto-tri|no-attr-space|no-attr-spac|no-attr-spa|no-attr-sp|no-attr-s|no-attr-list|no-attr-lis|no-attr-li|no-attr-l|no-attr|no-assign|no-array-message|no-array-messag|no-array-messa|no-array-mess|no-array-mes|no-array-me|no-array-m|no-apply|no|next-word|next-prompt|next-frame|next-error|next|new-line|new-instance|new|nested|ne|native|namespace-uri|namespace-prefix)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-O': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(override|overlay|output|outer-join|outer|out-of-data|otherwise|os400|os2|os-rename|os-dir|os-delete|os-create-dir|os-copy|os-command|os-append|orientation|ordered-join|or|options-file|option|open-line-above|open|on|ole-names-locale|ole-names-local|ole-names-loca|ole-invoke-locale|ole-invoke-local|ole-invoke-loca|old|ok-cancel|ok|off-home|off-end|off|of|octet_length|object)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-P': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(putbyte|put-unsigned-short|put-unsigned-long|put-string|put-short|put-long|put-key-value|put-key-valu|put-key-val|put-int64|put-float|put-double|put-bytes|put-byte|put-bits|put|publish|public|protected|property|propath|promsgs|prompt-for|prompt-fo|prompt-f|prompt|profiler|profile-file|process|procedure-complete|procedure-call-type|procedure|procedur|procedu|proced|proce|privileges|private|printer-setup|printer|prev-word|prev-frame|prev|preselect|preselec|presele|presel|preprocess|preproces|preproce|preproc|precision|portrait|pixels|pick-both|pick-area|pick|performance|performanc|performan|performa|perform|perfor|perfo|perf|pause|paste|pascal|partial-key|parent-window-close|parent-id-field|parameter|paged|page-width|page-widt|page-wid|page-up|page-right-text|page-right|page-left|page-down|page|package-protected|package-private)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-Q': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(quit|question|query-tuning|query)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-R': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(run-procedure|run-procedur|run-procedu|run-proced|run-proce|run-proc|run|rule-y|rule-row|rule|row-unmodified|row-of|row-modified|row-leave|row-height|row-entry|row-display|row-deleted|row-created|row|routine-level|right-end|right-aligned|right-aligne|right-align|right|revoke|revert|reverse-from|returns|return-value|return-to-start-dir|return-to-start-di|return|retry-cancel|retain|resume-display|result|request|reposition-parent-relation|reposition-parent-relatio|reposition-parent-relati|reposition-parent-relat|reposition-parent-rela|reposition-parent-rel|reposition-forwards|reposition-forward|reposition-forwar|reposition-forwa|reposition-forw|reposition-backwards|reposition-backward|reposition-backwar|reposition-backwa|reposition-backw|reposition-back|reposition|reports|replication-write|replication-delete|replication-create|repeat|release|reinstate|reference-only|rectangle|rectangl|rectang|rectan|recta|rect|recall|real|readkey|read-response|read-exact-num|read-available|rcode-information|rcode-informatio|rcode-informati|rcode-informat|rcode-informa|rcode-inform|rcode-infor|rcode-info|raw-transfer|raw|radio-set)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-S': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(system-help|system-dialog|suspend|super|summary|sum|substring|subscribe|sub-total|sub-minimum|sub-minimu|sub-minim|sub-mini|sub-min|sub-menu-help|sub-menu|sub-maximum|sub-maximu|sub-maxim|sub-maxi|sub-max|sub-count|sub-average|sub-averag|sub-avera|sub-aver|sub-ave|string-xref|stream-io|stream-handle|stream|stored-procedure|stored-procedur|stored-procedu|stored-proced|stored-proce|stored-proc|stop-mem-check|stop-display|stop-after|stop|stomp-frequency|stomp-detection|stdcall|status-area-msg|status|static|starting|start-search|start-row-resize|start-resize|start-move|start-mem-check|start-extend-box-selection|start-box-selection|start|sql|space|source-procedure|source|some|socket|soap-header-entryref|soap-header|soap-fault|smallint|slider|skip-schema-check|skip-group-duplicates|skip|size-pixels|size-pixel|size-pixe|size-pix|size-pi|size-p|size-chars|size-char|size-cha|size-ch|size-c|size|single-run|single-character|single|simple|silent|signature|side-label|side-labe|side-lab|show-stats|show-stat|short|shared|share-lock|share-loc|share-lo|share-l|share-|share|settings|set-state|set-pointer-value|set-pointer-valu|set-pointer-val|set-option|set-event-manager-option|set-db-logging|set-contents|set-cell-focus|set-byte-order|set-attr-call-type|set|session|server-socket|server|serialize-name|serializable|separate-connection|send|self|selection-list|selection-extend|selection|selected-items|select-repositioned-row|select-on-join|select-extend|select|seek|security-policy|section|search-target|search-self|scrolling|scrolled-row-position|scrolled-row-positio|scrolled-row-positi|scrolled-row-posit|scrolled-row-posi|scrolled-row-pos|scrollbar-drag|scroll-vertical|scroll-right|scroll-notify|scroll-mode|scroll-left|scroll-horizontal|scroll|screen-io|screen|schema|sax-xml|sax-writer|sax-write-tag|sax-write-idle|sax-write-error|sax-write-element|sax-write-content|sax-write-complete|sax-write-begin|sax-uninitialized|sax-running|sax-reader|sax-parser-error|sax-complete|sax-complet|sax-comple|sax-attributes|save-as|save)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-T': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(ttcodepage|true|triggers|trigger|transaction-mode|transaction|trans|trailing|total|topic|top-column|top|to|thru|throw|through|this-procedure|this-object|then|text-seg-growth|text-seg-growt|text-seg-grow|text-seg-gro|text-seg-gr|text-seg-g|text-seg-|text-seg|text-cursor|text|terminate|terminal|term|tenant-where|tenant|temp-table|target-procedure|target|table-scan|tab)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-U': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(utc-offset|using|user|use-widget-pool|use-underline|use-text|use-revvideo|use-index|use-filename|use-dict-exps|use-dict-exp|use-dict-ex|use-dict-e|use-dict-|use-dict|use-dic|use|upper|update|up|unsubscribe|unsigned-short|unsigned-long|unsigned-integer|unsigned-int64|unsigned-byte|unload|unless-hidden|unix-end|unix|unique|union|unformatted|unformatte|unformatt|unformat|unforma|unform|undo|underline|underlin|underli|underl|unbuffered|unbuffere|unbuffer|unbuffe|unbuff)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-V': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(void|vms|virtual-width|virtual-height|view-as|view|vertical|vertica|vertic|verti|vert|verbose|verbos|verbo|verb|variable|variabl|variab|varia|vari|var|values|value-changed|validate|v6frame)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-W': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(workfile|work-table|work-tabl|work-tab|word-index|with|window-restored|window-resized|window-normal|window-name|window-minimized|window-minimize|window-minimiz|window-minimi|window-minim|window-maximized|window-maximize|window-maximiz|window-maximi|window-maxim|window-delayed-minimize|window-delayed-minimiz|window-delayed-minimi|window-delayed-minim|window-delayed-mini|window-delayed-min|window-close|width|widget-pool|widget|while|where|when|web-notify|web-context|web-contex|web-conte|web-cont|web-con|wait-for|wait)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-X': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(xref-xml|xref|xor|xml-node-name|xcode|x-of|x-noderef|x-document)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'keywords-Y': {
      captures: {1: {name: 'keyword.other.abl'}},
      match:
        '(?i)\\b(yes-no-cancel|yes-no|yes|year-offset|year|y-of)\\b(?![\\#\\$\\-\\_\\%\\&])'
    },
    'label-variable': {
      captures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*(\\w+)\\s+(label)\\s*'
    },
    'language-functions': {
      captures: {1: {name: 'support.function.abl'}},
      match: '(?i)\\b(opsys|proversion)\\b'
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
          begin: '(?i)\\s*([a-z_]+[\\w\\-{}#$%&]*)\\s*(\\()\\s*',
          beginCaptures: {
            1: {name: 'entity.name.function.abl'},
            2: {name: 'meta.brace.round.js'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'meta.brace.round.js'}},
          patterns: [{include: '#parameter-definition'}]
        },
        {include: '#string'},
        {include: '#extent'},
        {include: '#primitive-type'},
        {include: '#dll-type'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name'},
        {include: '#comment'}
      ]
    },
    multilinecomment: {
      begin: '(?<!=)\\/\\*',
      contentName: 'comment',
      end: '\\*\\/',
      name: 'comment.block.source.abl',
      patterns: [
        {include: '#multilinecomment', name: 'comment.block.source.abl'}
      ]
    },
    'new-class': {
      begin: '(?i)\\b(new)\\b(?!\\-)',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\()',
      patterns: [
        {include: '#type-name-generic-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name-comma-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-comma'},
        {include: '#type-name'},
        {include: '#string'}
      ]
    },
    numeric: {
      match: '(?<![\\w-])((0(x|X)[0-9a-fA-F]+)|(\\-?[0-9]+(\\.[0-9]+)?))',
      name: 'constant.numeric.source.abl'
    },
    'of-phrase': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*(of)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
        },
        {
          captures: {
            1: {name: 'storage.data.table.abl'},
            3: {name: 'keyword.other.abl'},
            4: {name: 'storage.data.table.abl'}
          },
          match:
            '(?i)\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s+(of)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
        }
      ]
    },
    'on-error-endkey-stop': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'meta.block.label.abl'}
      },
      match:
        '(?i)\\s*(on)\\s+(endkey|error|stop|quit)\\s+(undo)\\s*(?!leave|next|retry|return|throw)([a-z0-9\\-\\_\\$]*)?\\s*'
    },
    operator: {
      patterns: [
        {include: '#operator-no-space'},
        {include: '#operator-with-space'}
      ]
    },
    'operator-no-space': {
      captures: {1: {name: 'keyword.operator.source.abl'}},
      match: '(\\+=|-=|\\\\=|\\*=|<=|<>|>=|=|\\+|\\-|/|<|>|\\*)'
    },
    'operator-with-space': {
      captures: {1: {name: 'keyword.operator.source.abl'}},
      match:
        '(?i)(?<=\\s)(not|contains|begins|matches|eq|le|lt|ge|gt|ne)(?=\\s|\\()'
    },
    ordinal: {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'constant.numeric.source.abl'}
      },
      match: '(?i)\\s*(ordinal)\\s((0x[0-9a-f]+)|([0-9]+)?)'
    },
    'parameter-as': {
      begin: '(?i)\\s*([\\w\\-]+)\\s+(as)\\s+',
      beginCaptures: {
        1: {name: 'variable.parameter.abl'},
        2: {name: 'keyword.other.abl'}
      },
      end: '(?=\\s|\\)|\\.)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(class)\\s*'
        },
        {include: '#primitive-type'},
        {include: '#dll-type'},
        {include: '#type-name-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name'},
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
            '(?i)\\s*(input-output|input-outpu|input-outp|input-out|input-ou|input-o|input|output|append|bind|by-value|preselect|buffer|parameter|param|no-undo)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'variable.parameter.abl'}
          },
          match: '(?i)\\s*(dataset-handle|table-handle)\\s+([\\w\\-]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.dataset.abl'}
          },
          match: '(?i)\\s*(dataset)\\s+([\\w\\-]+)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*(table)\\s+([\\w\\-]+)\\s*'
        },
        {include: '#parameter-as'},
        {
          captures: {
            1: {name: 'storage.type.abl'},
            2: {name: 'punctuation.separator.comma.abl'}
          },
          match:
            '(?i)\\s*(character|characte|charact|charac|chara|char|com-handle|date|datetime-tz|datetime|decimal|decima|decim|deci|dec|handle|int64|integer|intege|integ|inte|int|logical|logica|logic|logi|log|longchar|longcha|longch|memptr|raw|recid|rowid|widget-handle|widget-h?)(?![=\\w-])\\s*(,*)'
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
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#abl-system-handles'},
        {include: '#keywords'},
        {include: '#handle-attributes'},
        {include: '#handle-methods'},
        {include: '#type-name-generic'},
        {include: '#type-name'},
        {include: '#string'},
        {include: '#comment'},
        {include: '#preprocessors'}
      ]
    },
    'parameter-name': {
      match: '(?<=^|\\s)(\\w|-)+(?=\\s)',
      name: 'variable.parameter.abl'
    },
    parens: {match: '\\(|\\)', name: 'meta.brace.round.js'},
    preprocessors: {
      captures: {
        1: {name: 'storage.type.function.abl'},
        2: {name: 'storage.type.function.abl'}
      },
      match:
        '(?i)(\\&[\\w-]*)|({\\&[\\w-]*})|(&window-system|&text-height|&line-number|&batch-mode|&file-name|&undefine|&sequence|&message|defined|&elseif|&scoped|&global|&opsys|&endif|&else|&scop|&then|&glob|&if)'
    },
    'primitive-type': {
      captures: {1: {name: 'storage.type.abl'}},
      match:
        '(?i)(?<=^|\\s)(blob|character|characte|charact|charac|chara|char|cha|ch|c|clob|com-handle|date|da|datetime|datetime-tz|decimal|decima|decim|deci|dec|de|handle|int64|integer|intege|integ|inte|int|in|i|logical|logica|logic|logi|log|lo|l|longchar|longcha|longch|memptr|raw|recid|rowid|widget-handle)(?![=\\w-])'
    },
    'procedure-definition': {
      begin:
        '(?i)\\s*(procedure|procedur|procedu|proced|proce)\\s+(?=[\\w\'"#\\$_])',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=:|\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.procedure.abl',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match:
            '(?i)\\b(external|cdecl|pascal|stdcall|ordinal|persistent|thread-safe|in|super)\\b'
        },
        {include: '#string'},
        {
          captures: {1: {name: 'entity.name.function.abl'}},
          match: '([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&\\.]+)(?<!\\.)'
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
      match: '(?i)\\s*([\\w\\-]+)\\s+(as)\\s*'
    },
    'property-call': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(:)([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b'
    },
    'property-get-set-block': {
      begin: '(?i)\\s*(?<!\\:)\\s*(get|set)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)\\s*(end)\\s*(get|set)?\\s*(?=\\.)\\s*',
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
      match: '\\b(get|set)\\s*(?=\\.)'
    },
    'property-get-set-super': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '\\b(get|set)\\s+(super)\\s*(?=\\.)'
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
          match: '(\\:)'
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
        '(?i)\\b(available|locked|ambiguous)\\s*(\\()?\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*(\\))?'
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
    'run-statement': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'entity.name.procedure.abl'}
      },
      match:
        '(?i)\\s*(run)\\s+(?!value)(([a-z][a-z0-9\\/\\-\\_\\\\]+)(\\.[a-z]+)?)'
    },
    serializable: {
      captures: {1: {name: 'keyword.other.abl'}},
      match: '(?i)\\b(non-serializable|serializable)\\b'
    },
    singlelinecomment: {
      match: '\\/\\/.*$',
      name: 'comment.line.double-slash.abl'
    },
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
        {include: '#function-definition'},
        {include: '#record-buffer-functions'},
        {include: '#can-find'},
        {include: '#release'},
        {include: '#copy-lob'},
        {include: '#event-un-subscribe'},
        {include: '#create-buffer'},
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
        {include: '#singlelinecomment'},
        {include: '#multilinecomment'},
        {include: '#declarations'},
        {include: '#decimals'},
        {include: '#numeric'},
        {include: '#constant'},
        {include: '#timestamp-constant'},
        {include: '#break-by'},
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
        {include: '#type-reference'},
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
        '(?i)\\s*(([\\w\\#\\$\\%\\-]+|progress)(\\.[\\w\\#\\$\\%\\-]+)+)\\s*(:)([\\w-]+)\\s*'
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
      match: '(?i)\\b(temp-table)\\s+([\\w\\-#$%]+)'
    },
    'timestamp-constant': {name: 'constant.language.abl'},
    'translation-attribute': {
      captures: {1: {name: 'support.other.abl'}},
      match: '(?i)(:[L|R|T|C|U]\\d*)\\b'
    },
    'type-argument-function': {
      begin: '(?i)\\s*(cast|type-of)\\s*(\\()',
      beginCaptures: {
        1: {name: 'support.function.abl'},
        2: {name: 'meta.brace.round.js'}
      },
      end: '(?<=\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [
        {
          captures: {
            1: {name: 'storage.data.table.abl'},
            4: {name: 'punctuation.separator.comma.abl'}
          },
          match: '\\s*(([\\w\\-#$%]+)\\.([\\w\\-#$%]+))\\s*(,)'
        },
        {
          captures: {
            1: {name: 'variable.other.abl'},
            3: {name: 'punctuation.separator.comma.abl'}
          },
          match: '\\s*([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\s*((,)|(?=:))'
        },
        {
          captures: {
            1: {name: 'entity.name.function.abl'},
            2: {name: 'punctuation.separator.comma.abl'}
          },
          match: '\\s*:([\\w-]+)\\s*(,)'
        },
        {include: '#type-argument-function'},
        {include: '#expression'},
        {include: '#property-call'},
        {include: '#static-object-property-call'},
        {include: '#doublequotedstring'},
        {include: '#singlequotedstring'},
        {include: '#translation-attribute'},
        {include: '#type-name-generic-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name-comma-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-comma'},
        {include: '#type-name'},
        {include: '#parens'},
        {include: '#punctuation-comma'}
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
      match: '(?i)\\b([\\w\\#\\$\\%\\-]+(\\.[\\w\\#\\$\\%\\-]+)*)\\b'
    },
    'type-name-comma': {
      captures: {
        1: {name: 'punctuation.separator.comma.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'entity.name.type.abl'},
        6: {name: 'punctuation.separator.comma.abl'}
      },
      match:
        '(?i)\\s*(,*)\\s*(class)?\\s+(([\\w\\#\\$\\%]+)(\\.?[\\w\\#\\$\\%]*)*(?<!\\.))\\s*(,*)\\s*'
    },
    'type-name-comma-progress': {
      captures: {
        1: {name: 'punctuation.separator.comma.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'entity.name.type.abl'},
        6: {name: 'punctuation.separator.comma.abl'}
      },
      match:
        '(?i)\\s*(,*)\\s*(class)?\\s*((progress\\.|map|set)(\\.?[\\w\\#\\$\\%]*)*(?<!\\.))\\s*(,*)\\s*'
    },
    'type-name-generic': {
      begin: '(?i)\\s*(([\\w\\#\\$\\%\\-]+)(\\.[\\w\\#\\$\\%\\-]+)*\\s*)\\s*<',
      beginCaptures: {1: {name: 'entity.name.type.abl'}},
      end: '\\>',
      name: 'entity.name.type.generic.abl',
      patterns: [{include: '#generic-types'}]
    },
    'type-name-generic-progress': {
      begin: '(?i)\\s*((progress)(\\.[\\w\\#\\$\\%\\-]+)*)\\s*<',
      beginCaptures: {1: {name: 'entity.name.type.abl'}},
      end: '\\>',
      name: 'entity.name.type.generic.abl',
      patterns: [{include: '#generic-types'}]
    },
    'type-name-progress': {
      captures: {1: {name: 'entity.name.type.abl'}},
      match: '(?i)\\s*((progress\\.)([\\.\\w\\#\\$\\%]+)*)\\s*(?<!\\.)'
    },
    'type-names': {
      patterns: [
        {include: '#type-name-generic-progress'},
        {include: '#type-name-progress'},
        {include: '#type-name-generic'},
        {include: '#type-name'}
      ]
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
      begin: '(?i)\\s*(undo)\\s*([a-z0-9\\-\\_\\$]*)?\\s*(,)',
      beginCaptures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.block.label.abl'},
        3: {name: 'punctuation.separator.comma.abl'}
      },
      end: '(?=\\.|\\:)',
      patterns: [
        {include: '#string'},
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'meta.block.label.abl'}
          },
          match: '(?i)\\s*(leave|next|retry)\\s([a-z0-9\\-\\_\\$]*)?'
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
      match: '\\b([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b(?=\\()'
    },
    'use-index': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.table.abl'}
      },
      match: '(?i)\\b(use-index)\\s+([a-z][a-z0-9\\-\\_\\$]*)\\b'
    },
    using: {
      begin: '(?i)\\s*(using)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(\\.)',
      endCaptures: {1: {name: 'punctuation.terminator.abl'}},
      name: 'meta.using.abl',
      patterns: [
        {
          captures: {1: {name: 'entity.name.package.abl'}},
          match:
            '(?i)\\s*((([\\w\\#\\$\\%]+|progress)(\\.[\\w\\#\\$\\%]+)*)\\.\\*)\\s*'
        },
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s*(from|propath|assembly)\\s*'
        },
        {include: '#type-name'}
      ]
    },
    'variable-as': {
      captures: {
        1: {name: 'variable.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*([\\w\\-]+)\\s+(as)\\s*'
    },
    'variable-name': {
      match:
        '(?<=^|\\s|\\[|\\(|,)([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)(?=\\.\\s|\\.$|,|:|\\s|\\)|\\]|\\[|$)',
      name: 'variable.other.abl'
    },
    'while-expression': {
      begin: '(?i)\\s*(while)\\b',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?i)(?=transaction|on|\\:|with)',
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
