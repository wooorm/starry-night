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
        '(?i)\\s*(ABSOLUTE|ACCUM|ADD-INTERVAL|ALIAS|AMBIGUOUS|ASC|AUDIT-ENABLED|AVAILABLE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-B': {
      begin:
        '(?i)\\s*(BASE64-DECODE|BASE64-ENCODE|BOX|BUFFER-GROUP-ID|BUFFER-GROUP-NAME|BUFFER-PARTITION-ID|BUFFER-TENANT-ID|BUFFER-TENANT-NAME)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-C': {
      begin:
        '(?i)\\s*(CAN-DO|CAN-FIND|CAN-QUERY|CAN-SET|CAPS|CAST|CHR|CODEPAGE-CONVERT|COMPARE|CONNECTED|COUNT-OF|CURRENT-CHANGED|CURRENT-LANGUAGE|CURRENT-RESULT-ROW|CURRENT-VALUE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-D': {
      begin:
        '(?i)\\s*(DATASERVERS|DATA-SOURCE-MODIFIED|DATE|DATETIME|DATETIME-TZ|DAY|DBCODEPAGE|DBCOLLATION|DBNAME|DBPARAM|DB-REMOTE-HOST|DBRESTRICTIONS|DBTASKID|DBTYPE|DBVERSION|DECIMAL|DECRYPT|DEFINED|DYNAMIC-CAST|DYNAMIC-CURRENT-VALUE|DYNAMIC-ENUM|DYNAMIC-FUNCTION|DYNAMIC-INVOKE|DYNAMIC-NEXT-VALUE|DYNAMIC-PROPERTY)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-E': {
      begin:
        '(?i)\\s*(ENCODE|ENCRYPT|ENTERED|ENTRY|ERROR|ETIME|EXP|EXTENT)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-F': {
      begin:
        '(?i)\\s*(FILL|FIRST|FIRST-OF|FRAME-COL|FRAME-DB|FRAME-DOWN|FRAME-FIELD|FRAME-FILE|FRAME-INDEX|FRAME-LINE|FRAME-NAME|FRAME-ROW|FRAME-VALUE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-G': {
      begin:
        '(?i)\\s*(GATEWAYS|GENERATE-PBE-KEY|GENERATE-PBE-SALT|GENERATE-RANDOM-KEY|GENERATE-UUID|GET-BITS|GET-BYTE|GET-BYTE-ORDER|GET-BYTES|GET-CLASS|GET-CODEPAGE|GET-CODEPAGES|GET-COLLATION|GET-COLLATIONS|GET-DB-CLIENT|GET-DOUBLE|GET-EFFECTIVE-TENANT-ID|GET-EFFECTIVE-TENANT-NAME|GET-FLOAT|GET-INT64|GET-LONG|GET-POINTER-VALUE|GET-SHORT|GET-SIZE|GET-STRING|GET-UNSIGNED-LONG|GET-UNSIGNED-SHORT|GO-PENDING|GUID)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-H': {
      begin: '(?i)\\s*(HANDLE|HASH-CODE|HEX-DECODE|HEX-ENCODE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-I': {
      begin:
        '(?i)\\s*(INDEX|INPUT|INT64|INTEGER|INTERVAL|IS-ATTR-SPACE|IS-CODEPAGE-FIXED|IS-COLUMN-CODEPAGE|IS-DB-MULTI-TENANT|IS-LEAD-BYTE|ISO-DATE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-K': {
      begin:
        '(?i)\\s*(KBLABEL|KEYCODE|KEYFUNCTION|KEYLABEL|KEYWORD|KEYWORD-ALL)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-L': {
      begin:
        '(?i)\\s*(LAST|LASTKEY|LAST-OF|LC|LDBNAME|LEFT-TRIM|LENGTH|LIBRARY|LINE-COUNTER|LIST-EVENTS|LIST-QUERY-ATTRS|LIST-SET-ATTRS|LIST-WIDGETS|LOCKED|LOG|LOGICAL|LOOKUP|lower)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-M': {
      begin:
        '(?i)\\s*(MAXIMUM|MD5-DIGEST|MEMBER|MESSAGE-DIGEST|MESSAGE-LINES|MINIMUM|MONTH|MTIME)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-N': {
      begin:
        '(?i)\\s*(NEXT-VALUE|NORMALIZE|NOT ENTERED|NOW|NUM-ALIASES|NUM-DBS|NUM-ENTRIES|NUM-RESULTS)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-O': {
      begin: '(?i)\\s*(OPSYS|OS-DRIVES|OS-ERROR|OS-GETENV)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-P': {
      begin:
        '(?i)\\s*(PAGE-NUMBER|PAGE-SIZE|PDBNAME|proc-ha|proc-han|proc-hand|proc-handl|proc-handle|PROGRAM-NAME|PROGRESS|PROMSGS|PROPATH|provers|proversi|proversio|proversion)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-Q': {
      begin: '(?i)\\s*(QUERY-OFF-END|QUOTER)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-R': {
      begin:
        '(?i)\\s*(R-INDEX|RANDOM|RAW|RAW-TRANSFER|RECID|RECORD-LENGTH|REJECTED|REPLACE|RETRY|return|RETURN-VALUE|rgb-v|rgb-va|rgb-val|rgb-valu|rgb-value|RIGHT-TRIM|ROUND|ROW-STATE|ROWID)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-S': {
      begin:
        '(?i)\\s*(SCREEN-LINES|SDBNAME|SEAL|SEARCH|SEEK|set-size|SET-DB-CLIENT|SET-EFFECTIVE-TENANT|set-attribute|set-attribute-node|set-rgb|set-byte-order|set-rgb-|set-rgb-v|set-rgb-va|set-rgb-val|set-rgb-valu|set-rgb-value|setuser|setuseri|setuserid|SHA1-DIGEST|SQRT|SSL-SERVER-NAME|string|subst|substi|substit|substitu|substitut|substitute|substr|substri|substrin|substring|SUPER)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-T': {
      begin:
        '(?i)\\s*(TENANT-ID|TENANT-NAME|TENANT-NAME-TO-ID|TERMINAL|THIS-OBJECT|TIME|TIMEZONE|TODAY|TO-ROWID|TRANSACTION|TRIM|TRUNCATE|TYPE-OF)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-U': {
      begin: '(?i)\\s*(UNBOX|USERID)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-V': {
      begin: '(?i)\\s*(VALID-EVENT|VALID-HANDLE|VALID-OBJECT|VALUE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-W': {
      begin: '(?i)\\s*(WEEKDAY|WIDGET-HANDLE)\\s*(?=\\()',
      beginCaptures: {1: {name: 'support.function.abl'}},
      end: '(\\))',
      endCaptures: {1: {name: 'meta.brace.round.js'}},
      name: 'meta.function-call.abl',
      patterns: [{include: '#function-arguments'}]
    },
    'abl-functions-Y': {
      begin: '(?i)\\s*(YEAR)\\s*(?=\\()',
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
        '(?i)\\s*(package-private|private|package-protected|protected|public|static|override|abstract|final)\\s*'
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
      captures: {2: {name: 'meta.block.label.abl'}},
      match: '(?i)^\\s*(([a-z][a-z0-9\\-\\_\\$]*):)\\s+'
    },
    'block-statement': {
      begin: '(?i)(?<!end)\\s*(do|repeat|finally)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '\\s*(?=:)|(?<=:)|(?=\\.)|(?<=\\.)\\s*',
      name: 'meta.block.abl',
      patterns: [
        {include: '#for-record'},
        {include: '#preselect-phrase'},
        {include: '#query-tuning-phrase'},
        {include: '#operator'},
        {include: '#from-to-by'},
        {include: '#while-expression'},
        {
          match: '(?i)\\b(transaction|stop-after)\\b',
          name: 'keyword.other.abl'
        },
        {include: '#numeric'},
        {include: '#type-member-call'},
        {include: '#punctuation-comma'},
        {include: '#branch-options'},
        {include: '#frame-phrase'},
        {include: '#expression'},
        {include: '#preprocessors'}
      ]
    },
    'branch-leave-next-retry-throw': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'meta.block.label.abl'}
      },
      match:
        '(?i)\\s*(?<=,)\\s*(leave|next|retry|throw)\\s*(?!on)([a-z0-9\\-\\_\\$]*)?\\s*',
      name: 'meta.block.branch.abl'
    },
    'branch-options': {
      name: 'meta.block.branch.abl',
      patterns: [
        {include: '#on-error-endkey-stop'},
        {include: '#on-quit'},
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
      name: 'meta.block.branch.abl',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'entity.name.type.abl'}
          },
          match: '(?i)\\b(new)\\s+(.*)\\s*(?=\\($|)'
        },
        {include: '#property-call'},
        {include: '#expression'}
      ]
    },
    'branch-return-no-apply': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'}
      },
      match: '(?i)\\s*(return)\\s+(no-apply)\\s*',
      name: 'meta.block.branch.abl'
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
      name: 'meta.block.branch.abl',
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
    'code-block': {
      patterns: [
        {include: '#comment'},
        {include: '#break-group'},
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
        {include: '#keywords'},
        {include: '#variable-name'},
        {include: '#static-object-property-call'},
        {include: '#punctuation-period'}
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
      match: '(?i)\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
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
        {include: '#abl-functions'},
        {include: '#function-parameter-definition'},
        {include: '#keywords'},
        {include: '#comment'},
        {include: '#label-variable'},
        {include: '#type-name-generic-class'},
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
      begin: '(?i)\\b(class)\\b',
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
        {include: '#implements-type'},
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
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'storage.data.dataset.abl'}
      },
      match: '(?i)\\b(dataset)\\s+([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)\\b'
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
        {include: '#implements-type'},
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
      match: '(?i)\\b(temp-table|like|before-table)\\s*([\\w\\-#$%]+)\\s*'
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
      begin: '(?i):(unsubscribe|subscribe)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.abl'},
        2: {name: 'meta.brace.round.js'}
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
      end: '(?i)\\s*(?=where|no-lock|share-lock|exclusive-lock|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction|,|:)\\s*',
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
      end: '(?i)\\s*(?=where|no-lock|share-lock|exclusive-lock|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction|,|:|on)\\s*',
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
        '(?i)(?<=,|^)\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s+(?=where|no-lock|share-lock|exclusive-lock|tenant-where|use-index|table-scan|using|no-prefetch|left|outer-join|break|by|transaction)'
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
      end: '(?=\\R)',
      patterns: [
        {
          captures: {1: {name: 'keyword.other.abl'}},
          match: '(?i)\\s+(to|by)\\s*'
        },
        {include: '#numeric'},
        {include: '#branch-options'}
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
            '(?i)\\s*(input-output|output|input|table-handle|dataset-handle|APPEND|BY-VALUE|BY-REFERENCE|BIND)\\s*'
        },
        {
          captures: {
            1: {name: 'keyword.other.abl'},
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\b(table|dataset)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\b'
        },
        {include: '#constant'},
        {include: '#type-reference'},
        {include: '#db-dot-table-dot-field'},
        {include: '#abl-system-handles'},
        {include: '#abl-functions'},
        {include: '#unqualified-method-call'},
        {include: '#expression'},
        {include: '#comment'},
        {include: '#property-call'},
        {include: '#punctuation-comma'},
        {include: '#static-object-property-call'}
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
        '(?i)(:)(ACCELERATOR|ACCEPT-CHANGES|ACCEPT-ROW-CHANGES|ACTIVE|ACTOR|ADD-BUFFER|add-calc-col|add-calc-colu|add-calc-colum|add-calc-column|ADD-COLUMNS-FROM|add-events-proc|add-events-proce|add-events-proced|add-events-procedu|add-events-procedur|add-events-procedure|ADD-FIELDS-FROM|ADD-FIRST|ADD-HEADER-ENTRY|ADD-INDEX-FIELD|ADD-LAST|add-like-col|add-like-colu|add-like-colum|add-like-column|ADD-LIKE-FIELD|ADD-LIKE-INDEX|ADD-NEW-FIELD|ADD-NEW-INDEX|ADD-PARENT-ID-RELATION|add-rel|add-rela|add-relat|add-relati|add-relatio|add-relation|ADD-SCHEMA-LOCATION|ADD-SOURCE-BUFFER|add-super-proc|add-super-proce|add-super-proced|add-super-procedu|add-super-procedur|add-super-procedure|ADM-DATA|AFTER-BUFFER|AFTER-ROWID|AFTER-TABLE|ALLOW-COLUMN-SEARCHING|ALLOW-PREV-DESERIALIZATION|ALWAYS-ON-TOP|ambig|ambigu|ambiguo|ambiguou|ambiguous|APPEND-CHILD|appl-alert|appl-alert-|appl-alert-b|appl-alert-bo|appl-alert-box|appl-alert-boxe|appl-alert-boxes|APPL-CONTEXT-ID|APPLY-CALLBACK|APPSERVER-INFO|APPSERVER-PASSWORD|APPSERVER-USERID|ASYNCHRONOUS|ASYNC-REQUEST-COUNT|ASYNC-REQUEST-HANDLE|ATTACH-DATA-SOURCE|ATTACHED-PAIRLIST|ATTRIBUTE-NAMES|attr|attr-|attr-s|attr-sp|attr-spa|attr-spac|attr-space|AUDIT-EVENT-CONTEXT|AUTHENTICATION-FAILED|auto-comp|auto-compl|auto-comple|auto-complet|auto-completi|auto-completio|auto-completion|AUTO-DELETE|AUTO-DELETE-XML|auto-end-key|auto-endkey|AUTO-GO|auto-ind|auto-inde|auto-inden|auto-indent|AUTO-RESIZE|auto-ret|auto-retu|auto-retur|auto-return|AUTO-SYNCHRONIZE|auto-val|auto-vali|auto-valid|auto-valida|auto-validat|auto-validate|auto-z|auto-za|auto-zap|avail|availa|availab|availabl|available|AVAILABLE-FORMATS)\\s*'
    },
    'handle-attributes-B': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(back|back-tab|backg|backgr|backgro|backgrou|backgroun|background|BASE-ADE|BASIC-LOGGING|BATCH-MODE|BATCH-SIZE|BEFORE-BUFFER|BEFORE-ROWID|BEFORE-TABLE|BEGIN-EVENT-GROUP|bgc|bgco|bgcol|bgcolo|bgcolor|BLANK|BLOCK-ITERATION-DISPLAY|border-b|border-bo|border-bot|border-bott|border-botto|border-bottom|border-bottom-c|border-bottom-ch|border-bottom-cha|border-bottom-char|border-bottom-chars|border-bottom-p|border-bottom-pi|border-bottom-pix|border-bottom-pixe|border-bottom-pixel|border-bottom-pixels|border-l|border-le|border-lef|border-left|border-left-c|border-left-ch|border-left-cha|border-left-char|border-left-chars|border-left-p|border-left-pi|border-left-pix|border-left-pixe|border-left-pixel|border-left-pixels|border-r|border-ri|border-rig|border-righ|border-right|border-right-c|border-right-ch|border-right-cha|border-right-char|border-right-chars|border-right-p|border-right-pi|border-right-pix|border-right-pixe|border-right-pixel|border-right-pixels|border-t|border-to|border-top|border-top-c|border-top-ch|border-top-cha|border-top-char|border-top-chars|border-top-p|border-top-pi|border-top-pix|border-top-pixe|border-top-pixel|border-top-pixels|BOX|BOX-SELECTABLE|BUFFER-CHARS|buffer-comp|buffer-compa|buffer-compar|buffer-compare|BUFFER-COPY|BUFFER-CREATE|BUFFER-DELETE|BUFFER-FIELD|BUFFER-FIELD|BUFFER-GROUP-ID|BUFFER-GROUP-NAME|BUFFER-HANDLE|BUFFER-LINES|buffer-n|buffer-na|buffer-nam|buffer-name|BUFFER-PARTITION-ID|buffer-releas|buffer-release|BUFFER-TENANT-ID|BUFFER-TENANT-NAME|BUFFER-VALIDATE|BUFFER-VALUE|BYTES-READ|BYTES-WRITTEN)\\s*'
    },
    'handle-attributes-C': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(CACHE|CALL-NAME|CALL-TYPE|CANCEL-BREAK|CANCEL-BUTTON|CANCEL-REQUESTS|CANCEL-REQUESTS-AFTER|CANCELLED|can-crea|can-creat|can-create|can-dele|can-delet|can-delete|CAN-DO-DOMAIN-SUPPORT|CAN-READ|CAN-WRITE|CAREFUL-PAINT|case-sen|case-sens|case-sensi|case-sensit|case-sensiti|case-sensitiv|case-sensitive|center|centere|centered|CHARSET|CHECKED|CHILD-BUFFER|CHILD-NUM|CLASS-TYPE|CLEAR|CLEAR-APPL-CONTEXT|CLEAR-LOG|clear-select|clear-selecti|clear-selectio|clear-selection|clear-sort-arrow|clear-sort-arrows|CLIENT-CONNECTION-ID|CLIENT-TTY|CLIENT-TYPE|CLIENT-WORKSTATION|CLONE-NODE|CLOSE-LOG|CODE|CODEPAGE|COLUMN|column-bgc|column-bgco|column-bgcol|column-bgcolo|column-bgcolor|COLUMN-DCOLOR|column-fgc|column-fgco|column-fgcol|column-fgcolo|column-fgcolor|COLUMN-FONT|column-lab|column-labe|column-label|COLUMN-MOVABLE|column-pfc|column-pfco|column-pfcol|column-pfcolo|column-pfcolor|COLUMN-READ-ONLY|COLUMN-RESIZABLE|column-sc|column-scr|column-scro|column-scrol|column-scroll|column-scrolli|column-scrollin|column-scrolling|COM-HANDLE|COMPLETE|CONFIG-NAME|CONNECT|CONNECTED|CONTEXT-HELP|CONTEXT-HELP-FILE|CONTEXT-HELP-ID|CONTROL-BOX|convert-3d|convert-3d-|convert-3d-c|convert-3d-co|convert-3d-col|convert-3d-colo|convert-3d-color|convert-3d-colors|convert-to-offs|convert-to-offse|convert-to-offset|COPY-DATASET|COPY-SAX-ATTRIBUTES|COPY-TEMP-TABLE|COVERAGE|CPCASE|CPCOLL|cpint|cpinte|cpinter|cpintern|cpinterna|cpinternal|CPLOG|CPPRINT|CPRCODEIN|CPRCODEOUT|CPSTREAM|CPTERM|crc-val|crc-valu|crc-value|CREATE-LIKE|CREATE-LIKE-SEQUENTIAL|CREATE-NODE|CREATE-NODE-NAMESPACE|CREATE-RESULT-LIST-ENTRY|CURRENT-CHANGED|CURRENT-COLUMN|current-env|current-envi|current-envir|current-enviro|current-environ|current-environm|current-environme|current-environmen|current-environment|CURRENT-ITERATION|CURRENT-QUERY|CURRENT-REQUEST-INFO|CURRENT-RESPONSE-INFO|CURRENT-RESULT-ROW|CURRENT-ROW-MODIFIED|CURRENT-WINDOW|curs|curso|cursor|cursor-char|CURSOR-LINE|CURSOR-OFFSET)\\s*'
    },
    'handle-attributes-D': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(data-entry-ret|data-entry-retu|data-entry-retur|data-entry-return|DATA-SOURCE|DATA-SOURCE-COMPLETE-MAP|DATA-SOURCE-MODIFIED|DATA-SOURCE-ROWID|data-t|data-ty|data-typ|data-type|DATASET|date-f|date-fo|date-for|date-form|date-forma|date-format|DB-CONTEXT|DB-LIST|DB-REFERENCES|DBNAME|DCOLOR|DDE-ERROR|dde-i|dde-id|DDE-ITEM|DDE-NAME|DDE-TOPIC|DEBLANK|debu|debug|debug-alert|dec|deci|decim|decima|decimal|decimals|DECLARE-NAMESPACE|DEFAULT|DEFAULT-BUFFER-HANDLE|default-but|default-butt|default-butto|default-button|DEFAULT-COMMIT|DEFAULT-STRING|DEFAULT-VALUE|DELETE|DELETE-CHAR|DELETE-CURRENT-ROW|DELETE-HEADER-ENTRY|DELETE-LINE|DELETE-NODE|DELETE-RESULT-LIST-ENTRY|DELETE-SELECTED-ROW|DELETE-SELECTED-ROWS|DELIMITER|descript|descripti|descriptio|description|DESELECT-FOCUSED-ROW|DESELECT-ROWS|DESELECT-SELECTED-ROW|DETACH-DATA-SOURCE|dir|directory|DISABLE|DISABLE-AUTO-ZAP|DISABLE-CONNECTIONS|DISABLE-DUMP-TRIGGERS|DISABLE-LOAD-TRIGGERS|discon|disconn|disconne|disconnec|disconnect|DISPLAY-MESSAGE|display-t|display-timezone|display-ty|display-typ|display-typess|DOMAIN-DESCRIPTION|DOMAIN-NAME|DOMAIN-TYPE|DOWN|DRAG-ENABLED|DROP-TARGET|DUMP-LOGGING-NOW|DYNAMIC)\\s*'
    },
    'handle-attributes-E': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(edge-c|edge-ch|edge-cha|edge-char|edge-chars|edge-p|edge-pi|edge-pix|edge-pixe|edge-pixel|edge-pixels|EDIT-CAN-PASTE|EDIT-CAN-UNDO|EDIT-CLEAR|EDIT-COPY|EDIT-CUT|EDIT-PASTE|EDIT-UNDO|EMPTY|EMPTY-DATASET|EMPTY-TEMP-TABLE|ENABLE|ENABLE-CONNECTIONS|ENABLE-EVENTS|ENABLED|ENCODE-DOMAIN-ACCESS-CODE|ENCODING|ENCRYPT-AUDIT-MAC-KEY|ENCRYPTION-SALT|END-DOCUMENT|END-ELEMENT|END-EVENT-GROUP|END-FILE-DROP|END-USER-PROMPT|ENTITY-EXPANSION-LIMIT|ENTRY|ENTRY-TYPES-LIST|ERROR|error-col|error-colu|error-colum|error-columnsss|ERROR-OBJECT|ERROR-OBJECT-DETAIL|ERROR-ROW|ERROR-STACK-TRACE|ERROR-STRING|EVENT-GROUP-ID|EVENT-HANDLER|EVENT-HANDLER-OBJECT|EVENT-PROCEDURE|EVENT-PROCEDURE-CONTEXT|event-ty|event-typ|event-type|EXCLUSIVE-ID|EXECUTION-LOG|EXIT-CODE|EXPAND|EXPANDABLE|EXPORT|EXPORT-PRINCIPAL|EXTENT)\\s*'
    },
    'handle-attributes-F': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(FETCH-SELECTED-ROW|FGCOfgc|fgco|fgcol|fgcolo|fgcolorLOR|file-create-d|file-create-da|file-create-dat|file-create-date|file-create-t|file-create-ti|file-create-tim|file-create-time|file-mod-d|file-mod-da|file-mod-dat|file-mod-date|file-mod-t|file-mod-ti|file-mod-tim|file-mod-time|FILE-NAME|file-off|file-offs|file-offse|file-offset|FILE-SIZE|FILE-TYPE|FILL|FILLED|FILL-MODE|FILL-WHERE-STRING|FIND-BY-ROWID|FIND-CURRENT|FIND-FIRST|FIND-LAST|FIND-UNIQUE|first-async|first-async-|first-async-r|first-async-re|first-async-req|first-async-requ|first-async-reque|first-async-reques|first-async-request|FIRST-BUFFER|FIRST-CHILD|FIRST-COLUMN|FIRST-DATASET|FIRST-DATA-SOURCE|FIRST-FORM|FIRST-OBJECT|FIRST-OF|first-proc|first-proce|first-proced|first-procedu|first-procedur|first-procedure|FIRST-QUERY|first-serv|first-serve|first-server|first-server-socket|FIRST-SOCKET|first-tab-i|first-tab-it|first-tab-ite|first-tab-item|FIT-LAST-COLUMN|FLAT-BUTTON|FOCUSED-ROW|FOCUSED-ROW-SELECTED|FONT|fore|foreg|foregr|foregro|foregrou|foregroun|foreground|FOREIGN-KEY-HIDDEN|FORM-INPUT|FORM-LONG-INPUT|forma|format|formatte|formatted|FORWARD-ONLY|fragmen|fragment|fram|frame|FRAME-COL|FRAME-NAME|FRAME-ROW|frame-spa|frame-spac|frame-spaci|frame-spacin|frame-spacing|FRAME-X|FRAME-Y|FREQUENCY|full-height|full-height-c|full-height-ch|full-height-cha|full-height-char|full-height-chars|full-height-p|full-height-pi|full-height-pix|full-height-pixe|full-height-pixel|full-height-pixels|full-pathn|full-pathna|full-pathnam|full-pathname|full-width-|full-width-c|full-width-ch|full-width-cha|full-width-char|full-width-chars|full-width-p|full-width-pi|full-width-pix|full-width-pixe|full-width-pixel|full-width-pixels|FUNCTION)\\s*'
    },
    'handle-attributes-G': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(GET-ATTRIBUTE|GET-ATTRIBUTE-NODE|GET-BINARY-DATA|get-blue|get-blue-|get-blue-v|get-blue-va|get-blue-val|get-blue-valu|get-blue-value|get-browse-col|get-browse-colu|get-browse-colum|get-browse-column|GET-BUFFER-HANDLE|GET-BYTES-AVAILABLE|GET-CALLBACK-PROC-CONTEXT|GET-CALLBACK-PROC-NAME|GET-CGI-LIST|GET-CGI-VALUE|GET-CGI-LONG-VALUE|GET-CHANGES|GET-CHILD|get-child-rel|get-child-rela|get-child-relat|get-child-relati|get-child-relatio|get-child-relation|GET-CLIENT|GET-COLUMN|GET-CONFIG-VALUE|get-curr|get-curre|get-curren|get-current|GET-DATASET-BUFFER|GET-DOCUMENT-ELEMENT|GET-DROPPED-FILE|GET-DYNAMIC|GET-ERROR-COLUMN|GET-ERROR-ROW|GET-FILE-NAME|get-file-offse|get-file-offset|get-firs|get-first|get-green|get-green-|get-green-v|get-green-va|get-green-val|get-green-valu|get-green-value|get-header-entr|get-header-entry|GET-INDEX-BY-NAMESPACE-NAME|GET-INDEX-BY-QNAME|GET-ITERATION|GET-LAST|GET-LOCALNAME-BY-INDEX|GET-MESSAGE|GET-MESSAGE-TYPE|GET-NEXT|GET-NODE|GET-NUMBER|GET-PARENT|GET-PREV|GET-PRINTERS|GET-QNAME-BY-INDEX|get-red|get-red-|get-red-v|get-red-va|get-red-val|get-red-valu|get-red-value|get-rel|get-rela|get-relat|get-relati|get-relatio|get-relation|GET-REPOSITIONED-ROW|get-rgb|get-rgb-|get-rgb-v|get-rgb-va|get-rgb-val|get-rgb-valu|get-rgb-values|GET-ROW|GET-SAFE-USER|get-selected|get-selected-|get-selected-w|get-selected-wi|get-selected-wid|get-selected-widg|get-selected-widge|get-selected-widget|GET-SERIALIZED|GET-SIGNATURE|GET-SOCKET-OPTION|GET-SOURCE-BUFFER|GET-TAB-ITEM|get-text-height|get-text-height-c|get-text-height-ch|get-text-height-cha|get-text-height-char|get-text-height-chars|get-text-height-p|get-text-height-pi|get-text-height-pix|get-text-height-pixe|get-text-height-pixel|get-text-height-pixels|get-text-width|get-text-width-c|get-text-width-ch|get-text-width-cha|get-text-width-char|get-text-width-chars|get-text-width-p|get-text-width-pi|get-text-width-pix|get-text-width-pixe|get-text-width-pixel|get-text-width-pixels|GET-TOP-BUFFER|GET-TYPE-BY-INDEX|GET-TYPE-BY-NAMESPACE-NAME|GET-TYPE-BY-QNAME|GET-URI-BY-INDEX|GET-VALUE-BY-INDEX|GET-VALUE-BY-NAMESPACE-NAME|GET-VALUE-BY-QNAME|get-wait|get-wait-|get-wait-s|get-wait-st|get-wait-sta|get-wait-stat|get-wait-state|graphic-e|graphic-ed|graphic-edg|graphic-edge|grid-factor-h|grid-factor-ho|grid-factor-hor|grid-factor-hori|grid-factor-horiz|grid-factor-horizo|grid-factor-horizon|grid-factor-horizont|grid-factor-horizonta|grid-factor-horizontal|grid-factor-v|grid-factor-ve|grid-factor-ver|grid-factor-vert|grid-factor-verti|grid-factor-vertic|grid-factor-vertica|grid-factor-vertical|GRID-SNAP|grid-unit-height|grid-unit-height-c|grid-unit-height-ch|grid-unit-height-cha|grid-unit-height-char|grid-unit-height-chars|grid-unit-height-p|grid-unit-height-pi|grid-unit-height-pix|grid-unit-height-pixe|grid-unit-height-pixel|grid-unit-height-pixels|grid-unit-width|grid-unit-width-c|grid-unit-width-ch|grid-unit-width-cha|grid-unit-width-char|grid-unit-width-chars|grid-unit-width-p|grid-unit-width-pi|grid-unit-width-pix|grid-unit-width-pixe|grid-unit-width-pixel|grid-unit-width-pixels|GRID-VISIBLE|GROUP-BOX)\\s*'
    },
    'handle-attributes-H': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(HANDLE|HANDLER|HAS-LOBS|HAS-RECORDS|height|height-c|height-ch|height-cha|height-char|height-chars|height-p|height-pi|height-pix|height-pixe|height-pixel|height-pixels|HELP|HIDDEN|horizo|horizon|horizont|horizonta|horizontal|HTML-CHARSET|HTML-END-OF-LINE|HTML-END-OF-PAGE|HTML-FRAME-BEGIN|HTML-FRAME-END|HTML-HEADER-BEGIN|HTML-HEADER-END|HTML-TITLE-BEGIN|HTML-TITLE-END|HWND)\\s*'
    },
    'handle-attributes-I': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(icfparam|icfparame|icfparamet|icfparamete|icfparameter|ICON|ignore-current-mod|ignore-current-modi|ignore-current-modif|ignore-current-modifi|ignore-current-modifie|ignore-current-modified|IMAGE|IMAGE-DOWN|IMAGE-INSENSITIVE|IMAGE-UP|IMMEDIATE-DISPLAY|IMPORT-NODE|IMPORT-PRINCIPAL|INCREMENT-EXCLUSIVE-ID|INDEX|index-info|index-infor|index-inform|index-informa|index-informat|index-informati|index-informatio|index-information|IN-HANDLE|inherit-bgc|inherit-bgco|inherit-bgcol|inherit-bgcolo|inherit-bgcolor|inherit-fgc|inherit-fgco|inherit-fgcol|inherit-fgcolo|inherit-fgcolor|init|initial|INITIALIZE|INITIALIZE-DOCUMENT-TYPE|INITIATE|INNER-CHARS|INNER-LINES|INPUT-VALUE|INSERT|INSERT-ATTRIBUTE|insert-b|insert-ba|insert-bac|insert-back|insert-backt|insert-backta|insert-backtab|INSERT-BEFORE|INSERT-FILE|INSERT-ROW|INSERT-STRING|insert-t|insert-ta|insert-tab|INSTANTIATING-PROCEDURE|INTERNAL-ENTRIES|INVOKE|IS-CLASS|IS-JSON|IS-MULTI-TENANT|IS-OPEN|IS-PARAMETER-SET|is-partitione|is-partitioned|IS-ROW-SELECTED|IS-SELECTED|IS-XML|ITEMS-PER-ROW)\\s*'
    },
    'handle-attributes-K': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(KEEP-CONNECTION-OPEN|keep-frame-z|keep-frame-z-|keep-frame-z-o|keep-frame-z-or|keep-frame-z-ord|keep-frame-z-orde|keep-frame-z-order|KEEP-SECURITY-CACHE|KEY|KEYS)\\s*'
    },
    'handle-attributes-L': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(LABEL|label-bgc|label-bgco|label-bgcol|label-bgcolo|label-bgcolor|label-dc|label-dco|label-dcol|label-dcolo|label-dcolor|label-fgc|label-fgco|label-fgcol|label-fgcolo|label-fgcolor|LABEL-FONT|LABELS|LABELS-HAVE-COLONS|language|languages|LARGE|LARGE-TO-SMALL|last-async|last-async-|last-async-r|last-async-re|last-async-req|last-async-requ|last-async-reque|last-async-reques|last-async-request|LAST-BATCH|LAST-CHILD|last-even|last-event|LAST-FORM|LAST-OBJECT|LAST-OF|last-proce|last-proced|last-procedu|last-procedur|last-procedure|last-serv|last-serve|last-server|last-server-socket|LAST-SOCKET|last-tab-i|last-tab-it|last-tab-ite|last-tab-item|LENGTH|LIBRARY|LIBRARY-CALLING-CONVENTION|LINE|LIST-ITEM-PAIRS|LIST-ITEMS|LISTINGS|LITERAL-QUESTION|LOAD|LOAD-DOMAINS|LOAD-ICON|LOAD-IMAGE|LOAD-IMAGE-DOWN|LOAD-IMAGE-INSENSITIVE|LOAD-IMAGE-UP|load-mouse-p|load-mouse-po|load-mouse-poi|load-mouse-poin|load-mouse-point|load-mouse-pointe|load-mouse-pointer|LOAD-SMALL-ICON|LOCAL-HOST|LOCAL-NAME|LOCAL-PORT|LOCAL-VERSION-INFO|LOCATOR-COLUMN-NUMBER|LOCATOR-LINE-NUMBER|LOCATOR-PUBLIC-ID|LOCATOR-SYSTEM-ID|LOCATOR-TYPE|LOCKED|LOCK-REGISTRATION|LOG-AUDIT-EVENT|LOG-ENTRY-TYPES|LOG-THRESHOLD|LOGFILE-NAME|LOGGING-LEVEL|LOGIN-EXPIRATION-TIMESTAMP|LOGIN-HOST|LOGIN-STATE|LOGOUT|LONGCHAR-TO-NODE-VALUE|LOOKUP)\\s*'
    },
    'handle-attributes-M': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(MANDATORY|MANUAL-HIGHLIGHT|MARK-NEW|MARK-ROW-STATE|MAX-BUTTON|MAX-CHARS|MAX-DATA-GUESS|max-height|max-height-c|max-height-ch|max-height-cha|max-height-char|max-height-chars|max-height-p|max-height-pi|max-height-pix|max-height-pixe|max-height-pixel|max-height-pixels|MAXIMUM-LEVEL|max-val|max-valu|max-value|max-width|max-width-c|max-width-ch|max-width-cha|max-width-char|max-width-chars|max-width-p|max-width-pi|max-width-pix|max-width-pixe|max-width-pixel|max-width-pixels|MEMPTR-TO-NODE-VALUE|MENU-BAR|menu-k|menu-ke|menu-key|menu-m|menu-mo|menu-mou|menu-mous|menu-mouse|MERGE-BY-FIELD|MERGE-CHANGES|MERGE-ROW-CHANGES|MESSAGE-AREA|MESSAGE-AREA-FONT|MIN-BUTTON|min-column-width-c|min-column-width-ch|min-column-width-cha|min-column-width-char|min-column-width-chars|min-column-width-p|min-column-width-pi|min-column-width-pix|min-column-width-pixe|min-column-width-pixel|min-column-width-pixels|min-height|min-height-c|min-height-ch|min-height-cha|min-height-char|min-height-chars|min-height-p|min-height-pi|min-height-pix|min-height-pixe|min-height-pixel|min-height-pixels|min-schema-marshal|min-schema-marshall|min-val|min-valu|min-value|min-width|min-width-c|min-width-ch|min-width-cha|min-width-char|min-width-chars|min-width-p|min-width-pi|min-width-pix|min-width-pixe|min-width-pixel|min-width-pixels|mod|modified|mouse|mouse-p|mouse-po|mouse-poi|mouse-poin|mouse-point|mouse-pointe|mouse-pointer|MOVABLE|move|move-after|move-after-|move-after-t|move-after-ta|move-after-tab|move-after-tab-|move-after-tab-i|move-after-tab-it|move-after-tab-ite|move-after-tab-item|move-befor|move-before|move-before-|move-before-t|move-before-ta|move-before-tab|move-before-tab-|move-before-tab-i|move-before-tab-it|move-before-tab-ite|move-before-tab-item|move-col|move-colu|move-colum|move-column|move-to-b|move-to-bo|move-to-bot|move-to-bott|move-to-botto|move-to-bottom|move-to-eof|move-to-t|move-to-to|move-to-top|MULTI-COMPILE|MULTIPLE|MULTITASKING-INTERVAL|MUST-UNDERSTAND)\\s*'
    },
    'handle-attributes-N': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(NAME|NAMESPACE-PREFIX|NAMESPACE-URI|NEEDS-APPSERVER-PROMPT|NEEDS-PROMPT|NESTED|NEW|NEW-ROW|next-col|next-colu|next-colum|next-column|NEXT-ROWID|NEXT-SIBLING|next-tab-ite|next-tab-item|NO-CURRENT-VALUE|NO-EMPTY-SPACE|NO-FOCUS|NONAMESPACE-SCHEMA-LOCATION|no-schema-marshal|no-schema-marshall|no-val|no-vali|no-valid|no-valida|no-validat|no-validate|NODE-VALUE|NODE-VALUE-TO-LONGCHAR|NODE-VALUE-TO-MEMPTR|NORMALIZE|NUM-BUFFERS|num-but|num-butt|num-butto|num-button|num-buttons|NUM-CHILD-RELATIONS|NUM-CHILDREN|num-col|num-colu|num-colum|num-column|num-columns|NUM-DROPPED-FILES|NUM-ENTRIES|NUM-FIELDS|NUM-FORMATS|NUM-HEADER-ENTRIES|NUM-ITEMS|NUM-ITERATIONS|NUM-LINES|num-locked-col|num-locked-colu|num-locked-colum|num-locked-column|num-locked-columns|NUM-LOG-FILES|NUM-MESSAGES|NUM-PARAMETERS|NUM-REFERENCES|NUM-RELATIONS|num-repl|num-repla|num-replac|num-replace|num-replaced|NUM-RESULTS|num-selected|num-selected-rows|NUM-SELECTED-WIDGETS|NUM-SOURCE-BUFFERS|NUM-TABS|NUM-TO-RETAIN|NUM-TOP-BUFFERS|num-visible-col|num-visible-colu|num-visible-colum|num-visible-column|num-visible-columns|numeric|numeric-dec|numeric-deci|numeric-decim|numeric-decima|numeric-decimal|numeric-decimal-|numeric-decimal-p|numeric-decimal-po|numeric-decimal-poi|numeric-decimal-poin|numeric-decimal-point|numeric-f|numeric-fo|numeric-for|numeric-form|numeric-forma|numeric-format|numeric-sep|numeric-sepa|numeric-separ|numeric-separa|numeric-separat|numeric-separato|numeric-separator)\\s*'
    },
    'handle-attributes-O': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(on-frame|on-frame-|on-frame-b|on-frame-bo|on-frame-bor|on-frame-bord|on-frame-borde|on-frame-border|OPTIONS|ORDINAL|ORIGIN-HANDLE|ORIGIN-ROWID|OVERLAY|OWNER|OWNER-DOCUMENT)\\s*'
    },
    'handle-attributes-P': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(page-bot|page-bott|page-botto|page-bottom|PAGE-TOP|PARAMETER|PARENT|PARENT-BUFFER|PARENT-FIELDS-AFTER|PARENT-FIELDS-BEFORE|PARENT-ID-RELATION|parent-rel|parent-rela|parent-relat|parent-relati|parent-relatio|parent-relation|PARSE-STATUS|PASSWORD-FIELD|PATHNAME|pbe-hash-alg|pbe-hash-algo|pbe-hash-algor|pbe-hash-algori|pbe-hash-algorit|pbe-hash-algorith|pbe-hash-algorithm|PBE-KEY-ROUNDS|PERSISTENT|PERSISTENT-CACHE-DISABLED|PERSISTENT-PROCEDURE|pfc|pfco|pfcol|pfcolo|pfcolor|pixels-per-col|pixels-per-colu|pixels-per-colum|pixels-per-column|PIXELS-PER-ROW|popup-m|popup-me|popup-men|popup-menu|popup-o|popup-on|popup-onl|popup-only|POSITION|PREFER-DATASET|PREPARED|PREPARE-STRING|prev-col|prev-colu|prev-colum|prev-column|PREV-SIBLING|prev-tab-i|prev-tab-it|prev-tab-ite|prev-tab-item|PRIMARY|PRIMARY-PASSPHRASE|PRINTER-CONTROL-HANDLE|PRINTER-HDC|PRINTER-NAME|PRINTER-PORT|private-d|private-da|private-dat|private-data|PROCEDURE-NAME|PROCEDURE-TYPE|PROFILING|progress-s|progress-so|progress-sou|progress-sour|progress-sourc|progress-source|PROXY|PROXY-PASSWORD|PROXY-USERID|PUBLIC-ID|PUBLISHED-EVENTS)\\s*'
    },
    'handle-attributes-Q': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(QUALIFIED-USER-ID|QUERY|QUERY-CLOSE|QUERY-OFF-END|QUERY-OPEN|QUERY-PREPARE|QUIT)\\s*'
    },
    'handle-attributes-R': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(RADIO-BUTTONS|READ-FILE|READ-JSON|READ-ONLY|READ-XML|READ-XMLSCHEMA|READ|RECID|record-len|record-leng|record-lengt|record-length|RECURSIVE|REFRESH|REFRESHABLE|REFRESH-AUDIT-POLICY|REGISTER-DOMAIN|REJECT-CHANGES|REJECT-ROW-CHANGES|REJECTED|relation-fi|relation-fie|relation-fiel|relation-field|relation-fields|RELATIONS-ACTIVE|REMOTE|REMOTE-HOST|REMOTE-PORT|REMOVE-ATTRIBUTE|REMOVE-CHILD|remove-events-proc|remove-events-proce|remove-events-proced|remove-events-procedu|remove-events-procedur|remove-events-procedure|remove-super-proc|remove-super-proce|remove-super-proced|remove-super-procedu|remove-super-procedur|remove-super-procedure|REPLACE|REPLACE-CHILD|REPLACE-SELECTION-TEXT|REPOSITION|reposition-back|reposition-backw|reposition-backwa|reposition-backwar|reposition-backward|reposition-backwards|reposition-forw|reposition-forwa|reposition-forwar|reposition-forward|reposition-forwards|REPOSITION-TO-ROW|REPOSITION-TO-ROWID|REQUEST-INFO|RESET|resiza|resizab|resizabl|resizable|RESIZE|RESPONSE-INFO|RESTART-ROW|RESTART-ROWID|retain-s|retain-sh|retain-sha|retain-shap|retain-shape|return-ins|return-inse|return-inser|return-insert|return-inserte|return-inserted|RETURN-VALUE|RETURN-VALUE-DATA-TYPE|RETURN-VALUE-DLL-TYPE|ROLE|ROLES|ROUNDED|ROW|row-height|row-height-c|row-height-ch|row-height-cha|row-height-char|row-height-chars|row-height-p|row-height-pi|row-height-pix|row-height-pixe|row-height-pixel|row-height-pixels|ROW-STATE|ROWID|row-ma|row-mar|row-mark|row-marke|row-marker|row-markers|ROW-RESIZABLE)\\s*'
    },
    'handle-attributes-S': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(SAVE|SAVE-FILE|SAVE-ROW-CHANGES|SAVE-WHERE-STRING|SAX-PARSE|SAX-PARSE-FIRST|SAX-PARSE-NEXT|sax-parser-error|SCHEMA-CHANGE|SCHEMA-LOCATION|SCHEMA-MARSHAL|SCHEMA-PATH|SCREEN-LINES|screen-val|screen-valu|screen-value|SCROLL-BARS|SCROLL-TO-CURRENT-ROW|scroll-to-i|scroll-to-it|scroll-to-ite|scroll-to-item|SCROLL-TO-SELECTED-ROW|SCROLLABLE|scrollbar-h|scrollbar-ho|scrollbar-hor|scrollbar-hori|scrollbar-horiz|scrollbar-horizo|scrollbar-horizon|scrollbar-horizont|scrollbar-horizonta|scrollbar-horizontal|scrollbar-v|scrollbar-ve|scrollbar-ver|scrollbar-vert|scrollbar-verti|scrollbar-vertic|scrollbar-vertica|scrollbar-verticalsss|SEAL-TIMESTAMP|SEARCH|SELECT-ALL|SELECT-FOCUSED-ROW|SELECT-NEXT-ROW|SELECT-PREV-ROW|SELECT-ROW|SELECTABLE|SELECTED|SELECTION-END|SELECTION-START|SELECTION-TEXT|SENSITIVE|SEPARATORS|SEPARATOR-FGCOLOR|SERIALIZE-HIDDEN|SERIALIZE-NAME|SERIALIZE-ROW|SERVER|server-connection-bo|server-connection-bou|server-connection-boun|server-connection-bound|server-connection-bound-re|server-connection-bound-req|server-connection-bound-requ|server-connection-bound-reque|server-connection-bound-reques|server-connection-bound-request|server-connection-co|server-connection-con|server-connection-cont|server-connection-conte|server-connection-contex|server-connection-context|server-connection-id|server-operating-mode|SESSION-END|SESSION-ID|SET-ACTOR|SET-APPL-CONTEXT|SET-ATTRIBUTE|SET-ATTRIBUTE-NODE|set-blue|set-blue-|set-blue-v|set-blue-va|set-blue-val|set-blue-valu|set-blue-value|SET-BREAK|SET-BUFFERS|SET-CALLBACK|SET-CALLBACK-PROCEDURE|SET-CLIENT|SET-COMMIT|SET-CONNECT-PROCEDURE|SET-DYNAMIC|set-green|set-green-|set-green-v|set-green-va|set-green-val|set-green-valu|set-green-value|SET-INPUT-SOURCE|SET-MUST-UNDERSTAND|SET-NODE|set-numeric-form|set-numeric-forma|set-numeric-format|SET-OUTPUT-DESTINATION|SET-PARAMETER|SET-READ-RESPONSE-PROCEDURE|set-red|set-red-|set-red-v|set-red-va|set-red-val|set-red-valu|set-red-value|SET-REPOSITIONED-ROW|SET-RGB-VALUE|SET-ROLE|SET-ROLLBACK|SET-SAFE-USER|SET-SELECTION|SET-SERIALIZED|SET-SOCKET-OPTION|SET-SORT-ARROW|set-wait|set-wait-|set-wait-s|set-wait-st|set-wait-sta|set-wait-stat|set-wait-state|show-in-task|show-in-taskb|show-in-taskba|show-in-taskbar|side-label-han|side-label-hand|side-label-handl|side-label-handle|SIDE-LABELS|signature|signature-value|SINGLE-RUN|SINGLETON|skip-deleted-rec|skip-deleted-reco|skip-deleted-recor|skip-deleted-record|SMALL-ICON|SMALL-TITLE|soap-fault-actor|soap-fault-code|soap-fault-detail|soap-fault-misunderstood-header|soap-fault-node|soap-fault-role|soap-fault-string|soap-fault-subcode|SOAP-VERSION|SORT|SORT-ASCENDING|SORT-NUMBER|SSL-SERVER-NAME|STANDALONE|START-DOCUMENT|START-ELEMENT|STARTUP-PARAMETERS|STATE-DETAIL|STATISTICS|STATUS-AREA|STATUS-AREA-FONT|STOP|STOP-OBJECT|STOP-PARSING|stoppe|stopped|STREAM|STRETCH-TO-FIT|STRICT|STRICT-ENTITY-RESOLUTION|STRING-VALUE|SUBTYPE|super-proc|super-proce|super-proced|super-procedu|super-procedur|super-procedure|super-procedures|SUPPRESS-NAMESPACE-PROCESSING|suppress-w|suppress-wa|suppress-war|suppress-warn|suppress-warni|suppress-warnin|suppress-warning|suppress-warnings|suppress-warnings-list|SYMMETRIC-ENCRYPTION-AAD|SYMMETRIC-ENCRYPTION-ALGORITHM|SYMMETRIC-ENCRYPTION-IV|SYMMETRIC-ENCRYPTION-KEY|SYMMETRIC-SUPPORT|SYNCHRONIZE|system-alert|system-alert-|system-alert-b|system-alert-bo|system-alert-box|system-alert-boxe|system-alert-boxes|SYSTEM-ID)\\s*'
    },
    'handle-attributes-T': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(TAB-POSITION|TAB-STOP|TABLE|TABLE-CRC-LIST|TABLE-HANDLE|TABLE-LIST|table-num|table-numb|table-numbe|table-number|temp-dir|temp-dire|temp-direc|temp-direct|temp-directo|temp-director|temp-directory|temp-table-prepar|temp-table-prepare|TENANT-ID|TENANT-NAME|TEXT-SELECTED|THREAD-SAFE|THREE-D|TIC-MARKS|TIME-SOURCE|TIMEZONE|TITLE|title-bgc|title-bgco|title-bgcol|title-bgcolo|title-bgcolor|title-dc|title-dco|title-dcol|title-dcolo|title-dcolor|title-fgc|title-fgco|title-fgcol|title-fgcolo|title-fgcolor|title-fo|title-fon|title-font|TOGGLE-BOX|TOOLTIP|TOOLTIPS|TOP-NAV-QUERY|TOP-ONLY|TRACE-FILTER|TRACING|TRACKING-CHANGES|TRANSACTION|TRANSPARENT|trans-init-proc|trans-init-proce|trans-init-proced|trans-init-procedu|trans-init-procedur|trans-init-procedure|TYPE)\\s*'
    },
    'handle-attributes-U': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(UNDO|UNDO-THROW-SCOPE|UNIQUE-ID|UNIQUE-MATCH|UPDATE-ATTRIBUTE|URL|URL-DECODE|URL-ENCODE|URL-PASSWORD|URL-USERID|USER-DATA |USER-ID)\\s*'
    },
    'handle-attributes-V': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(V6DISPLAY|VALIDATE|VALIDATE-DOMAIN-ACCESS-CODE|validate-expressio|validate-expression|VALIDATE-MESSAGE|VALIDATE-SEAL|VALIDATE-XML|VALIDATION-ENABLED|VALUE|VERSION|VIEW-AS|VIEW-FIRST-COLUMN-ON-REOPEN|virtual-height|virtual-height-c|virtual-height-ch|virtual-height-cha|virtual-height-char|virtual-height-chars|virtual-height-p|virtual-height-pi|virtual-height-pix|virtual-height-pixe|virtual-height-pixel|virtual-height-pixels|virtual-width|virtual-width-c|virtual-width-ch|virtual-width-cha|virtual-width-char|virtual-width-chars|virtual-width-p|virtual-width-pi|virtual-width-pix|virtual-width-pixe|virtual-width-pixel|virtual-width-pixels|VISIBLE)\\s*'
    },
    'handle-attributes-W': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(WARNING|WC-ADMIN-APP|WHERE-STRING|WIDGET-ENTER|WIDGET-ID|widget-l|widget-le|widget-lea|widget-leav|widget-leave|width|width-c|width-ch|width-cha|width-char|width-chars|width-p|width-pi|width-pix|width-pixe|width-pixel|width-pixels|WINDOW|window-sta|window-stat|window-state|window-sys|window-syst|window-syste|window-system|WORD-WRAP|work-area-height-p|work-area-height-pi|work-area-height-pix|work-area-height-pixe|work-area-height-pixel|work-area-height-pixels|work-area-width-p|work-area-width-pi|work-area-width-pix|work-area-width-pixe|work-area-width-pixel|work-area-width-pixels|work-area-x|work-area-y|WRITE-CDATA|WRITE-CHARACTERS|WRITE-COMMENT|WRITE-DATA|WRITE-DATA-ELEMENT|WRITE-EMPTY-ELEMENT|WRITE-ENTITY-REF|WRITE-EXTERNAL-DTD|WRITE-FRAGMENT|WRITE-JSON|WRITE-MESSAGE|WRITE-PROCESSING-INSTRUCTION|WRITE-STATUS|WRITE-XML|WRITE-XMLSCHEMA|WRITE)\\s*'
    },
    'handle-attributes-X': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match:
        '(?i)(:)(X|X-DOCUMENT|XCODE-SESSION-KEY|XML-DATA-TYPE|XML-ENTITY-EXPANSION-LIMIT|XML-NODE-NAME|XML-NODE-TYPE|XML-SCHEMA-PATH|XML-STRICT-ENTITY-RESOLUTION|XML-SUPPRESS-NAMESPACE-PROCESSING)\\s*'
    },
    'handle-attributes-Y': {
      captures: {
        1: {name: 'punctuation.separator.colon.abl'},
        2: {name: 'entity.name.function.abl'}
      },
      match: '(?i)(:)(Y|YEAR-OFFSET)\\s*'
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
        {include: '#keywords'}
      ]
    },
    'include-file': {
      begin: '(?i)({)\\s*(([a-z][a-z0-9\\/\\-\\_\\\\]+)(\\.[a-z]+)?)',
      beginCaptures: {
        1: {name: 'punctuation.section.abl'},
        2: {name: 'meta.other.include.abl'}
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
        {include: '#keywords-a'},
        {include: '#keywords-b'},
        {include: '#keywords-c'},
        {include: '#keywords-d'},
        {include: '#keywords-e'},
        {include: '#keywords-f'},
        {include: '#keywords-g'},
        {include: '#keywords-h'},
        {include: '#keywords-i'},
        {include: '#keywords-j'},
        {include: '#keywords-k'},
        {include: '#keywords-l'},
        {include: '#keywords-m'},
        {include: '#keywords-n'},
        {include: '#keywords-o'},
        {include: '#keywords-p'},
        {include: '#keywords-q'},
        {include: '#keywords-r'},
        {include: '#keywords-s'},
        {include: '#keywords-t'},
        {include: '#keywords-u'},
        {include: '#keywords-v'},
        {include: '#keywords-w'},
        {include: '#keywords-x'},
        {include: '#keywords-y'}
      ]
    },
    'keywords-a': {
      match:
        '(?i)(?<![\\w-])(abort|abs|abso|absol|absolu|absolut|absolute|abstract|accelerator|accept-changes|accept-row-changes|accum|accumu|accumul|accumula|accumulat|accumulate|across|active|active-form|active-window|actor|add|add-buffer|add-calc-col|add-calc-colu|add-calc-colum|add-calc-column|add-columns-from|add-events-proc|add-events-proce|add-events-proced|add-events-procedu|add-events-procedur|add-events-procedure|add-fields-from|add-first|add-header-entry|add-index-field|add-interval|add-last|add-like-col|add-like-colu|add-like-colum|add-like-column|add-like-field|add-like-index|add-new-field|add-new-index|add-parent-id-relation|add-rel|add-rela|add-relat|add-relati|add-relatio|add-relation|add-schema-location|add-source-buffer|add-super-proc|add-super-proce|add-super-proced|add-super-procedu|add-super-procedur|add-super-procedure|adm-data|advise|after-buffer|after-rowid|after-table|alert-box|alias|all|allow-column-searching|allow-prev-deserialization|allow-replication|alter|alternate-key|always-on-top|ambig|ambigu|ambiguo|ambiguou|ambiguous|and|ansi-only|any|any-key|any-printable|anywhere|append|append-child|append-line|appl-alert|appl-alert-|appl-alert-b|appl-alert-bo|appl-alert-box|appl-alert-boxe|appl-alert-boxes|appl-context-id|application|apply|apply-callback|appserver-info|appserver-password|appserver-userid|array-m|array-me|array-mes|array-mess|array-messa|array-messag|array-message|as|as-cursor|asc|asce|ascen|ascend|ascendi|ascendin|ascending|ask-overwrite|assembly|assign|async-request-count|async-request-handle|asynchronous|at|attach|attach-data-source|attached-pairlist|attachment|attr|attr-|attr-s|attr-sp|attr-spa|attr-spac|attr-space|attribute-names|attribute-type|audit-control|audit-enabled|audit-event-context|audit-policy|authentication-failed|authorization|auto-comp|auto-compl|auto-comple|auto-complet|auto-completi|auto-completio|auto-completion|auto-delete|auto-delete-xml|auto-end-key|auto-endkey|auto-go|auto-ind|auto-inde|auto-inden|auto-indent|auto-resize|auto-ret|auto-retu|auto-retur|auto-return|auto-synchronize|auto-val|auto-vali|auto-valid|auto-valida|auto-validat|auto-validate|auto-z|auto-za|auto-zap|automatic|avail|availa|availab|availabl|available|available-formats|ave|aver|avera|averag|average|avg)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-b': {
      match:
        '(?i)(?<![\\w-])(back|back-tab|backg|backgr|backgro|backgrou|backgroun|background|backspace|backward|backwards|base-ade|base-key|base64|base64-decode|base64-encode|basic-logging|batch|batch-mode|batch-size|before-buffer|before-h|before-hi|before-hid|before-hide|before-rowid|before-table|begin-event-group|begins|bell|bell|between|bgc|bgco|bgcol|bgcolo|bgcolor|big-endian|binary|bind|bind-where|blank|blob|block|block-iteration-display|block-lev|block-leve|block-level|border-b|border-bo|border-bot|border-bott|border-botto|border-bottom|border-bottom-c|border-bottom-ch|border-bottom-cha|border-bottom-char|border-bottom-chars|border-bottom-p|border-bottom-pi|border-bottom-pix|border-bottom-pixe|border-bottom-pixel|border-bottom-pixels|border-l|border-le|border-lef|border-left|border-left-c|border-left-ch|border-left-cha|border-left-char|border-left-chars|border-left-p|border-left-pi|border-left-pix|border-left-pixe|border-left-pixel|border-left-pixels|border-r|border-ri|border-rig|border-righ|border-right|border-right-c|border-right-ch|border-right-cha|border-right-char|border-right-chars|border-right-p|border-right-pi|border-right-pix|border-right-pixe|border-right-pixel|border-right-pixels|border-t|border-to|border-top|border-top-c|border-top-ch|border-top-cha|border-top-char|border-top-chars|border-top-p|border-top-pi|border-top-pix|border-top-pixe|border-top-pixel|border-top-pixels|both|bottom|bottom-column|box|box-select|box-selecta|box-selectab|box-selectabl|box-selectable|break|break-line|browse|browse-column-data-types|browse-column-formats|browse-column-labels|browse-header|btos|buffer|buffer-chars|buffer-comp|buffer-compa|buffer-compar|buffer-compare|buffer-copy|buffer-create|buffer-delete|buffer-field|buffer-group-id|buffer-group-name|buffer-handle|buffer-lines|buffer-n|buffer-na|buffer-nam|buffer-name|buffer-partition-id|buffer-releas|buffer-release|buffer-tenant-id|buffer-tenant-name|buffer-validate|buffer-value|button|buttons|by|by-pointer|by-reference|by-value|by-variant-point|by-variant-pointe|by-variant-pointer|byte|bytes-read|bytes-written)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-c': {
      match:
        '(?i)(?<![\\w-])(cache|cache-size|call|call-name|call-type|can-crea|can-creat|can-create|can-dele|can-delet|can-delete|can-do|can-do-domain-support|can-find|can-query|can-read|can-set|can-writ|can-write|cancel-break|cancel-button|cancel-pick|cancel-requests|cancel-requests-after|cancelled|caps|careful-paint|case|case-sen|case-sens|case-sensi|case-sensit|case-sensiti|case-sensitiv|case-sensitive|cast|catch|cdecl|center|centere|centered|chained|char|chara|charac|charact|characte|character|character_length|charset|check|check-mem-stomp|checked|child-buffer|child-num|choices|choose|choose|chr|class|class-type|clear|clear|clear-appl-context|clear-log|clear-select|clear-selecti|clear-selectio|clear-selection|clear-sort-arrow|clear-sort-arrows|client-connection-id|client-principal|client-tty|client-type|client-workstation|clipboard|clob|clone-node|close|close|close-log|code|codebase-locator|codepage|codepage-convert|col|col-of|collate|colon|colon-align|colon-aligne|colon-aligned|color|color-table|column|column-bgc|column-bgco|column-bgcol|column-bgcolo|column-bgcolor|column-codepage|column-dcolor|column-fgc|column-fgco|column-fgcol|column-fgcolo|column-fgcolor|column-font|column-lab|column-labe|column-label|column-label-bgc|column-label-bgco|column-label-bgcol|column-label-bgcolo|column-label-bgcolor|column-label-dcolor|column-label-fgc|column-label-fgco|column-label-fgcol|column-label-fgcolo|column-label-fgcolor|column-label-font|column-label-height-c|column-label-height-ch|column-label-height-cha|column-label-height-char|column-label-height-chars|column-label-height-p|column-label-height-pi|column-label-height-pix|column-label-height-pixe|column-label-height-pixel|column-label-height-pixels|column-movable|column-of|column-pfc|column-pfco|column-pfcol|column-pfcolo|column-pfcolor|column-read-only|column-resizable|column-sc|column-scr|column-scro|column-scrol|column-scroll|column-scrolli|column-scrollin|column-scrolling|columns|com-handle|com-self|combo-box|command|compare|compares|compile|compile|compiler|complete|component-handle|component-self|config-name|connect|connect|connected|constrained|constructor|container-event|contains|contents|context|context-help|context-help-file|context-help-id|context-pop|context-popu|context-popup|control|control-box|control-cont|control-conta|control-contai|control-contain|control-containe|control-container|control-fram|control-frame|convert|convert-3d|convert-3d-|convert-3d-c|convert-3d-co|convert-3d-col|convert-3d-colo|convert-3d-color|convert-3d-colors|convert-to-offs|convert-to-offse|convert-to-offset|copy|copy-dataset|copy-lob|copy-sax-attributes|copy-temp-table|count|count-of|coverage|cpcase|cpcoll|cpint|cpinte|cpinter|cpintern|cpinterna|cpinternal|cplog|cpprint|cprcodein|cprcodeout|cpstream|cpterm|crc-val|crc-valu|crc-value|create|create-like|create-like-sequential|create-node|create-node-namespace|create-on-add|create-result-list-entry|create-test-file|ctos|current|current-changed|current-column|current-env|current-envi|current-envir|current-enviro|current-environ|current-environm|current-environme|current-environmen|current-environment|current-iteration|current-lang|current-langu|current-langua|current-languag|current-language|current-query|current-request-info|current-response-info|current-result-row|current-row-modified|current-value|current-window|current_date|curs|curso|cursor|cursor-char|cursor-down|cursor-left|cursor-line|cursor-offset|cursor-right|cursor-up|cut)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-d': {
      match:
        '(?i)(?<![\\w-])(data-b|data-bi|data-bin|data-bind|data-entry-ret|data-entry-retu|data-entry-retur|data-entry-return|data-refresh-line|data-refresh-page|data-rel|data-rela|data-relat|data-relati|data-relatio|data-relation|data-source|data-source-complete-map|data-source-modified|data-source-rowid|data-t|data-ty|data-typ|data-type|database|dataservers|dataset|dataset-handle|date|date-f|date-fo|date-for|date-form|date-forma|date-format|datetime|datetime-tz|day|db-context|db-list|db-references|db-remote-host|dbcodepage|dbcollation|dbname|dbparam|dbrest|dbrestr|dbrestri|dbrestric|dbrestrict|dbrestricti|dbrestrictio|dbrestriction|dbrestrictions|dbtaskid|dbtype|dbvers|dbversi|dbversio|dbversion|dcolor|dde|dde-error|dde-i|dde-id|dde-item|dde-name|dde-notify|dde-topic|deblank|debu|debug|debug-alert|debug-list|debug-set-tenant|debugger|dec|deci|decim|decima|decimal|decimals|declare|declare-namespace|decrypt|def|default|default-action|default-buffer-handle|default-but|default-butt|default-butto|default-button|default-commit|default-ex|default-ext|default-exte|default-exten|default-extens|default-extensi|default-extensio|default-extension|default-noxl|default-noxla|default-noxlat|default-noxlate|default-pop-up|default-string|default-value|default-window|defer-lob-fetch|defi|defin|define|define-user-event-manager|defined|del|delegate|delete|delete|delete-char|delete-char|delete-character|delete-column|delete-current-row|delete-end-line|delete-field|delete-header-entry|delete-line|delete-line|delete-node|delete-result-list-entry|delete-selected-row|delete-selected-rows|delete-word|delimiter|desc|desce|descen|descend|descendi|descendin|descending|descript|descripti|descriptio|description|deselect|deselect-extend|deselect-focused-row|deselect-rows|deselect-selected-row|deselection|deselection-extend|destructor|detach|detach-data-source|dialog-box|dialog-help|dict|dicti|dictio|diction|dictiona|dictionar|dictionary|dir|directory|disable|disable-auto-zap|disable-connections|disable-dump-triggers|disable-load-triggers|disabled|discon|disconn|disconne|disconnec|disconnect|dismiss-menu|disp|displ|displa|display|display-message|display-t|display-timezone|display-ty|display-typ|display-type|distinct|dll-call-type|do|domain-description|domain-name|domain-type|dos|dos-end|dotnet-clr-loaded|double|down|down|drag-enabled|drop|drop-down|drop-down-list|drop-file-notify|drop-target|dslog-manager|dump|dump-logging-now|dynamic|dynamic-cast|dynamic-current-value|dynamic-enum|dynamic-func|dynamic-funct|dynamic-functi|dynamic-functio|dynamic-function|dynamic-invoke|dynamic-new|dynamic-next-value|dynamic-property)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-e': {
      match:
        '(?i)(?<![\\w-])(each|echo|edge|edge-c|edge-ch|edge-cha|edge-char|edge-chars|edge-p|edge-pi|edge-pix|edge-pixe|edge-pixel|edge-pixels|edit-can-paste|edit-can-undo|edit-clear|edit-copy|edit-cut|edit-paste|edit-undo|editing|editor|editor-backtab|editor-tab|else|empty|empty-dataset|empty-selection|empty-temp-table|enable|enable-connections|enabled|encode|encode-domain-access-code|encoding|encrypt|encrypt-audit-mac-key|encryption-salt|end|end|end-box-selection|end-document|end-element|end-error|end-event-group|end-file-drop|end-key|end-move|end-resize|end-row-resize|end-search|end-user-prompt|endkey|endkey|enter-menubar|entered|entity-expansion-limit|entry|entry|entry-types-list|enum|eq|error|error|error-col|error-colu|error-colum|error-column|error-object|error-object-detail|error-row|error-stack-trace|error-stat|error-statu|error-status|error-string|escape|etime|event|event-group-id|event-procedure|event-procedure-context|event-t|event-ty|event-typ|event-type|events|except|exclusive|exclusive-id|exclusive-l|exclusive-lo|exclusive-loc|exclusive-lock|exclusive-web|exclusive-web-|exclusive-web-u|exclusive-web-us|exclusive-web-use|exclusive-web-user|execute|execution-log|exists|exit|exit-code|exp|expand|expandable|expire|explicit|export|export-principal|extended|extent|external|extract)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-f': {
      match:
        '(?i)(?<![\\w-])(false|false-leaks|fetch|fetch-selected-row|fgc|fgco|fgcol|fgcolo|fgcolor|field|fields|file|file-access-d|file-access-da|file-access-dat|file-access-date|file-access-t|file-access-ti|file-access-tim|file-access-time|file-create-d|file-create-da|file-create-dat|file-create-date|file-create-t|file-create-ti|file-create-tim|file-create-time|file-info|file-infor|file-inform|file-informa|file-informat|file-informati|file-informatio|file-information|file-mod-d|file-mod-da|file-mod-dat|file-mod-date|file-mod-t|file-mod-ti|file-mod-tim|file-mod-time|file-name|file-off|file-offs|file-offse|file-offset|file-size|file-type|filename|fill|fill-in|fill-mode|fill-where-string|filled|filters|final|finally|find|find|find-by-rowid|find-case-sensitive|find-current|find-first|find-global|find-last|find-next|find-next-occurrence|find-prev-occurrence|find-previous|find-select|find-unique|find-wrap-around|finder|firehose-cursor|first|first-async|first-async-|first-async-r|first-async-re|first-async-req|first-async-requ|first-async-reque|first-async-reques|first-async-request|first-buffer|first-child|first-column|first-data-source|first-dataset|first-form|first-object|first-of|first-proc|first-proce|first-proced|first-procedu|first-procedur|first-procedure|first-query|first-serv|first-serve|first-server|first-server-socket|first-socket|first-tab-i|first-tab-it|first-tab-ite|first-tab-item|fit-last-column|fix-codepage|fixed-only|flags|flat-button|float|focus|focus-in|focused-row|focused-row-selected|font|font-table|for|force-file|fore|foreg|foregr|foregro|foregrou|foregroun|foreground|foreign-key-hidden|form|form-input|form-long-input|forma|format|formatte|formatted|forward|forward-only|forwards|fragmen|fragment|fram|frame|frame-col|frame-db|frame-down|frame-field|frame-file|frame-inde|frame-index|frame-line|frame-name|frame-row|frame-spa|frame-spac|frame-spaci|frame-spacin|frame-spacing|frame-val|frame-valu|frame-value|frame-x|frame-y|frequency|from|from-c|from-ch|from-cha|from-char|from-chars|from-cur|from-curr|from-curre|from-curren|from-current|from-p|from-pi|from-pix|from-pixe|from-pixel|from-pixels|fromnoreorder|full-height|full-height-c|full-height-ch|full-height-cha|full-height-char|full-height-chars|full-height-p|full-height-pi|full-height-pix|full-height-pixe|full-height-pixel|full-height-pixels|full-pathn|full-pathna|full-pathnam|full-pathname|full-width|full-width-|full-width-c|full-width-ch|full-width-cha|full-width-char|full-width-chars|full-width-p|full-width-pi|full-width-pix|full-width-pixe|full-width-pixel|full-width-pixels|function|function-call-type)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-g': {
      match:
        '(?i)(?<![\\w-])(gateway|gateways|ge|generate-md5|generate-pbe-key|generate-pbe-salt|generate-random-key|generate-uuid|get|get|get-attr-call-type|get-attribute|get-attribute-node|get-binary-data|get-bits|get-blue|get-blue-|get-blue-v|get-blue-va|get-blue-val|get-blue-valu|get-blue-value|get-browse-col|get-browse-colu|get-browse-colum|get-browse-column|get-buffer-handle|get-byte|get-byte-order|get-bytes|get-bytes-available|get-callback-proc-context|get-callback-proc-name|get-cgi-list|get-cgi-long-value|get-cgi-value|get-changes|get-child|get-child-rel|get-child-rela|get-child-relat|get-child-relati|get-child-relatio|get-child-relation|get-class|get-client|get-codepage|get-codepages|get-coll|get-colla|get-collat|get-collati|get-collatio|get-collation|get-collations|get-column|get-config-value|get-curr|get-curre|get-curren|get-current|get-dataset-buffer|get-db-client|get-dir|get-document-element|get-double|get-dropped-file|get-dynamic|get-effective-tenant-id|get-effective-tenant-name|get-error-column|get-error-row|get-file|get-file-name|get-file-offse|get-file-offset|get-firs|get-first|get-float|get-green|get-green-|get-green-v|get-green-va|get-green-val|get-green-valu|get-green-value|get-header-entr|get-header-entry|get-index-by-namespace-name|get-index-by-qname|get-int64|get-iteration|get-key-val|get-key-valu|get-key-value|get-last|get-localname-by-index|get-long|get-message|get-message-type|get-next|get-node|get-number|get-parent|get-pointer-value|get-prev|get-printers|get-property|get-qname-by-index|get-red|get-red-|get-red-v|get-red-va|get-red-val|get-red-valu|get-red-value|get-rel|get-rela|get-relat|get-relati|get-relatio|get-relation|get-repositioned-row|get-rgb|get-rgb-|get-rgb-v|get-rgb-va|get-rgb-val|get-rgb-valu|get-rgb-value|get-row|get-safe-user|get-selected|get-selected-|get-selected-w|get-selected-wi|get-selected-wid|get-selected-widg|get-selected-widge|get-selected-widget|get-serialized|get-short|get-signature|get-size|get-socket-option|get-source-buffer|get-string|get-tab-item|get-text-height|get-text-height-c|get-text-height-ch|get-text-height-cha|get-text-height-char|get-text-height-chars|get-text-height-p|get-text-height-pi|get-text-height-pix|get-text-height-pixe|get-text-height-pixel|get-text-height-pixels|get-text-width|get-text-width-c|get-text-width-ch|get-text-width-cha|get-text-width-char|get-text-width-chars|get-text-width-p|get-text-width-pi|get-text-width-pix|get-text-width-pixe|get-text-width-pixel|get-text-width-pixels|get-top-buffer|get-type-by-index|get-type-by-namespace-name|get-type-by-qname|get-unsigned-long|get-unsigned-short|get-uri-by-index|get-value-by-index|get-value-by-namespace-name|get-value-by-qname|get-wait|get-wait-|get-wait-s|get-wait-st|get-wait-sta|get-wait-stat|get-wait-state|getbyte|global|go|go-on|go-pend|go-pendi|go-pendin|go-pending|goto|grant|grant-archive|graphic-e|graphic-ed|graphic-edg|graphic-edge|grayed|grid-factor-h|grid-factor-ho|grid-factor-hor|grid-factor-hori|grid-factor-horiz|grid-factor-horizo|grid-factor-horizon|grid-factor-horizont|grid-factor-horizonta|grid-factor-horizontal|grid-factor-v|grid-factor-ve|grid-factor-ver|grid-factor-vert|grid-factor-verti|grid-factor-vertic|grid-factor-vertica|grid-factor-vertical|grid-set|grid-snap|grid-unit-height|grid-unit-height-c|grid-unit-height-ch|grid-unit-height-cha|grid-unit-height-char|grid-unit-height-chars|grid-unit-height-p|grid-unit-height-pi|grid-unit-height-pix|grid-unit-height-pixe|grid-unit-height-pixel|grid-unit-height-pixels|grid-unit-width|grid-unit-width-c|grid-unit-width-ch|grid-unit-width-cha|grid-unit-width-char|grid-unit-width-chars|grid-unit-width-p|grid-unit-width-pi|grid-unit-width-pix|grid-unit-width-pixe|grid-unit-width-pixel|grid-unit-width-pixels|grid-visible|group|group-box|gt|guid)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-h': {
      match:
        '(?i)(?<![\\w-])(handle|handler|has-lobs|has-records|having|header|height|height-c|height-ch|height-cha|height-char|height-chars|height-p|height-pi|height-pix|height-pixe|height-pixel|height-pixels|help|help|help-con|help-cont|help-conte|help-contex|help-context|help-topic|helpfile-n|helpfile-na|helpfile-nam|helpfile-name|hex-decode|hex-encode|hidden|hide|hint|home|hori|horiz|horiz-end|horiz-home|horiz-scroll-drag|horizo|horizon|horizont|horizonta|horizontal|host-byte-order|html-charset|html-end-of-line|html-end-of-page|html-frame-begin|html-frame-end|html-header-begin|html-header-end|html-title-begin|html-title-end|hwnd)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-i': {
      match:
        '(?i)(?<![\\w-])(icfparam|icfparame|icfparamet|icfparamete|icfparameter|icon|if|ignore-current-mod|ignore-current-modi|ignore-current-modif|ignore-current-modifi|ignore-current-modifie|ignore-current-modified|image|image-down|image-insensitive|image-size|image-size-c|image-size-ch|image-size-cha|image-size-char|image-size-chars|image-size-p|image-size-pi|image-size-pix|image-size-pixe|image-size-pixel|image-size-pixels|image-up|immediate-display|implements|import|import-node|import-principal|in|in-handle|increment-exclusive-id|index|index-hint|index-info|index-infor|index-inform|index-informa|index-informat|index-informati|index-informatio|index-information|indexed-reposition|indicator|info|infor|inform|informa|informat|informati|informatio|information|inherit-bgc|inherit-bgco|inherit-bgcol|inherit-bgcolo|inherit-bgcolor|inherit-color-mode|inherit-fgc|inherit-fgco|inherit-fgcol|inherit-fgcolo|inherit-fgcolor|inherits|init|initial|initial-dir|initial-filter|initialize|initialize-document-type|initiate|inner|inner-chars|inner-lines|input|input-o|input-ou|input-out|input-outp|input-outpu|input-output|input-value|insert|insert-attribute|insert-b|insert-ba|insert-bac|insert-back|insert-backt|insert-backta|insert-backtab|insert-before|insert-column|insert-field|insert-field-data|insert-field-label|insert-file|insert-mode|insert-row|insert-string|insert-t|insert-ta|insert-tab|instantiating-procedure|int|int64|inte|integ|intege|integer|interface|internal-entries|interval|into|invoke|is|is-attr|is-attr-|is-attr-s|is-attr-sp|is-attr-spa|is-attr-spac|is-attr-space|is-clas|is-class|is-codepage-fixed|is-column-codepage|is-db-multi-tenant|is-json|is-lead-byte|is-multi-tenant|is-open|is-parameter-set|is-partitione|is-partitioned|is-row-selected|is-selected|is-xml|iso-date|item|items-per-row|iteration-changed)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-j': {
      match: '(?i)(?<![\\w-])(join|join-by-sqldb|join-on-select)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-k': {
      match:
        '(?i)(?<![\\w-])(kblabel|keep-connection-open|keep-frame-z|keep-frame-z-|keep-frame-z-o|keep-frame-z-or|keep-frame-z-ord|keep-frame-z-orde|keep-frame-z-order|keep-messages|keep-security-cache|keep-tab-order|key|key-code|key-func|key-funct|key-functi|key-functio|key-function|key-label|keycache-join|keycode|keyfunc|keyfunct|keyfuncti|keyfunctio|keyfunction|keylabel|keys|keyword|keyword-all)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-l': {
      match:
        '(?i)(?<![\\w-])(label|label-bgc|label-bgco|label-bgcol|label-bgcolo|label-bgcolor|label-dc|label-dco|label-dcol|label-dcolo|label-dcolor|label-fgc|label-fgco|label-fgcol|label-fgcolo|label-fgcolor|label-font|label-pfc|label-pfco|label-pfcol|label-pfcolo|label-pfcolor|labels|labels-have-colons|landscape|language|languages|large|large-to-small|last|last-async|last-async-|last-async-r|last-async-re|last-async-req|last-async-requ|last-async-reque|last-async-reques|last-async-request|last-batch|last-child|last-even|last-event|last-form|last-key|last-object|last-of|last-proce|last-proced|last-procedu|last-procedur|last-procedure|last-serv|last-serve|last-server|last-server-socket|last-socket|last-tab-i|last-tab-it|last-tab-ite|last-tab-item|lastkey|lc|ldbname|le|leading|leak-detection|leave|leave|left|left|left-align|left-aligne|left-aligned|left-end|left-trim|length|library|library-calling-convention|like|like-sequential|line|line-count|line-counte|line-counter|line-down|line-left|line-right|line-up|list-events|list-item-pairs|list-items|list-property-names|list-query-attrs|list-set-attrs|list-widgets|listi|listin|listing|listings|literal-question|little-endian|load|load-domains|load-from|load-icon|load-image|load-image-down|load-image-insensitive|load-image-up|load-mouse-p|load-mouse-po|load-mouse-poi|load-mouse-poin|load-mouse-point|load-mouse-pointe|load-mouse-pointer|load-picture|load-result-into|load-small-icon|lob-dir|local-host|local-name|local-port|local-version-info|locator-column-number|locator-line-number|locator-public-id|locator-system-id|locator-type|lock-registration|locked|log|log-audit-event|log-entry-types|log-id|log-manager|log-threshold|logfile-name|logging-level|logical|login-expiration-timestamp|login-host|login-state|logout|long|longch|longcha|longchar|longchar-to-node-value|lookahead|lookup|lower|lt)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-m': {
      match:
        '(?i)(?<![\\w-])(machine-class|main-menu|mandatory|manual-highlight|map|margin-extra|margin-height|margin-height-c|margin-height-ch|margin-height-cha|margin-height-char|margin-height-chars|margin-height-p|margin-height-pi|margin-height-pix|margin-height-pixe|margin-height-pixel|margin-height-pixels|margin-width|margin-width-c|margin-width-ch|margin-width-cha|margin-width-char|margin-width-chars|margin-width-p|margin-width-pi|margin-width-pix|margin-width-pixe|margin-width-pixel|margin-width-pixels|mark-new|mark-row-state|matches|max|max-button|max-chars|max-data-guess|max-height|max-height-c|max-height-ch|max-height-cha|max-height-char|max-height-chars|max-height-p|max-height-pi|max-height-pix|max-height-pixe|max-height-pixel|max-height-pixels|max-rows|max-size|max-val|max-valu|max-value|max-width|max-width-c|max-width-ch|max-width-cha|max-width-char|max-width-chars|max-width-p|max-width-pi|max-width-pix|max-width-pixe|max-width-pixel|max-width-pixels|maximize|maximum|maximum-level|md5-digest|md5-value|member|memptr|memptr-to-node-value|menu|menu-bar|menu-drop|menu-item|menu-k|menu-ke|menu-key|menu-m|menu-mo|menu-mou|menu-mous|menu-mouse|menubar|merge-by-field|merge-changes|merge-row-changes|message|message-area|message-area-font|message-area-msg|message-digest|message-line|message-lines|method|min|min-button|min-column-width-c|min-column-width-ch|min-column-width-cha|min-column-width-char|min-column-width-chars|min-column-width-p|min-column-width-pi|min-column-width-pix|min-column-width-pixe|min-column-width-pixel|min-column-width-pixels|min-height|min-height-c|min-height-ch|min-height-cha|min-height-char|min-height-chars|min-height-p|min-height-pi|min-height-pix|min-height-pixe|min-height-pixel|min-height-pixels|min-schema-marshal|min-schema-marshall|min-size|min-val|min-valu|min-value|min-width|min-width-c|min-width-ch|min-width-cha|min-width-char|min-width-chars|min-width-p|min-width-pi|min-width-pix|min-width-pixe|min-width-pixel|min-width-pixels|mini|minim|minimu|minimum|mod|modified|modulo|month|mouse|mouse-p|mouse-po|mouse-poi|mouse-poin|mouse-point|mouse-pointe|mouse-pointer|movable|move|move-after|move-after-|move-after-t|move-after-ta|move-after-tab|move-after-tab-|move-after-tab-i|move-after-tab-it|move-after-tab-ite|move-after-tab-item|move-befor|move-before|move-before-|move-before-t|move-before-ta|move-before-tab|move-before-tab-|move-before-tab-i|move-before-tab-it|move-before-tab-ite|move-before-tab-item|move-col|move-colu|move-colum|move-column|move-to-b|move-to-bo|move-to-bot|move-to-bott|move-to-botto|move-to-bottom|move-to-eof|move-to-t|move-to-to|move-to-top|mpe|mtime|multi-compile|multiple|multiple-key|multitasking-interval|must-exist|must-understand)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-n': {
      match:
        '(?i)(?<![\\w-])(name|namespace-prefix|namespace-uri|native|ne|needs-appserver-prompt|needs-prompt|nested|new|new|new-instance|new-line|new-row|next|next-col|next-colu|next-colum|next-column|next-error|next-frame|next-prompt|next-rowid|next-sibling|next-tab-ite|next-tab-item|next-value|next-word|no|no-apply|no-array-m|no-array-me|no-array-mes|no-array-mess|no-array-messa|no-array-messag|no-array-message|no-assign|no-attr|no-attr-l|no-attr-li|no-attr-lis|no-attr-list|no-attr-s|no-attr-sp|no-attr-spa|no-attr-spac|no-attr-space|no-auto-tri|no-auto-trim|no-auto-validate|no-bind-where|no-box|no-column-sc|no-column-scr|no-column-scro|no-column-scrol|no-column-scroll|no-column-scrolli|no-column-scrollin|no-column-scrolling|no-console|no-convert|no-convert-3d|no-convert-3d-|no-convert-3d-c|no-convert-3d-co|no-convert-3d-col|no-convert-3d-colo|no-convert-3d-color|no-convert-3d-colors|no-current-value|no-debug|no-drag|no-echo|no-empty-space|no-error|no-f|no-fi|no-fil|no-fill|no-firehose-cursor|no-focus|no-help|no-hide|no-index-hint|no-inherit-bgc|no-inherit-bgco|no-inherit-bgcol|no-inherit-bgcolo|no-inherit-bgcolor|no-inherit-fgc|no-inherit-fgco|no-inherit-fgcol|no-inherit-fgcolo|no-inherit-fgcolor|no-join-by-sqldb|no-keycache-join|no-label|no-labels|no-lobs|no-lock|no-lookahead|no-map|no-mes|no-mess|no-messa|no-messag|no-message|no-pause|no-prefe|no-prefet|no-prefetc|no-prefetch|no-query-o|no-query-or|no-query-ord|no-query-orde|no-query-order|no-query-order-|no-query-order-a|no-query-order-ad|no-query-order-add|no-query-order-adde|no-query-order-added|no-query-u|no-query-un|no-query-uni|no-query-uniq|no-query-uniqu|no-query-unique|no-query-unique-|no-query-unique-a|no-query-unique-ad|no-query-unique-add|no-query-unique-adde|no-query-unique-added|no-return-val|no-return-valu|no-return-value|no-row-markers|no-schema-marshal|no-schema-marshall|no-scrollbar-v|no-scrollbar-ve|no-scrollbar-ver|no-scrollbar-vert|no-scrollbar-verti|no-scrollbar-vertic|no-scrollbar-vertica|no-scrollbar-vertical|no-scrolling|no-separate-connection|no-separators|no-tab|no-tab-|no-tab-s|no-tab-st|no-tab-sto|no-tab-stop|no-und|no-unde|no-under|no-underl|no-underli|no-underlin|no-underline|no-undo|no-val|no-vali|no-valid|no-valida|no-validat|no-validate|no-wait|no-word-wrap|node-type|node-value|node-value-to-longchar|node-value-to-memptr|non-serializable|nonamespace-schema-location|none|normalize|not|not-active|now|null|num-ali|num-alia|num-alias|num-aliase|num-aliases|num-buffers|num-but|num-butt|num-butto|num-button|num-buttons|num-child-relations|num-children|num-col|num-colu|num-colum|num-column|num-columns|num-copies|num-dbs|num-dropped-files|num-entries|num-fields|num-formats|num-header-entries|num-items|num-iterations|num-lines|num-locked-col|num-locked-colu|num-locked-colum|num-locked-column|num-locked-columns|num-log-files|num-messages|num-parameters|num-references|num-relations|num-repl|num-repla|num-replac|num-replace|num-replaced|num-results|num-selected|num-selected-rows|num-selected-widgets|num-source-buffers|num-tabs|num-to-retain|num-top-buffers|num-visible-col|num-visible-colu|num-visible-colum|num-visible-column|num-visible-columns|numeric|numeric-dec|numeric-deci|numeric-decim|numeric-decima|numeric-decimal|numeric-decimal-|numeric-decimal-p|numeric-decimal-po|numeric-decimal-poi|numeric-decimal-poin|numeric-decimal-point|numeric-f|numeric-fo|numeric-for|numeric-form|numeric-forma|numeric-format|numeric-sep|numeric-sepa|numeric-separ|numeric-separa|numeric-separat|numeric-separato|numeric-separator)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-o': {
      match:
        '(?i)(?<![\\w-])(object|octet_length|of|off|off-end|off-home|ok|ok-cancel|old|ole-invoke-loca|ole-invoke-local|ole-invoke-locale|ole-names-loca|ole-names-local|ole-names-locale|on|on-frame|on-frame-|on-frame-b|on-frame-bo|on-frame-bor|on-frame-bord|on-frame-borde|on-frame-border|open|open-line-above|opsys|option|options|options|options-file|or|ordered-join|ordinal|orientation|origin-handle|origin-rowid|os-append|os-command|os-copy|os-create-dir|os-delete|os-dir|os-drive|os-drives|os-error|os-getenv|os-rename|os2|os400|otherwise|out-of-data|outer|outer-join|output|overlay|override|owner|owner-document)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-p': {
      match:
        '(?i)(?<![\\w-])(package-private|package-protected|page|page-bot|page-bott|page-botto|page-bottom|page-down|page-left|page-num|page-numb|page-numbe|page-number|page-right|page-right-text|page-size|page-top|page-up|page-wid|page-widt|page-width|paged|param|parame|paramet|paramete|parameter|parent|parent-buffer|parent-fields-after|parent-fields-before|parent-id-field|parent-id-relation|parent-rel|parent-rela|parent-relat|parent-relati|parent-relatio|parent-relation|parent-window-close|parse-status|partial-key|pascal|password-field|paste|pathname|pause|pbe-hash-alg|pbe-hash-algo|pbe-hash-algor|pbe-hash-algori|pbe-hash-algorit|pbe-hash-algorith|pbe-hash-algorithm|pbe-key-rounds|pdbname|perf|perfo|perfor|perform|performa|performan|performanc|performance|persist|persiste|persisten|persistent|persistent-cache-disabled|persistent-procedure|pfc|pfco|pfcol|pfcolo|pfcolor|pick|pick-area|pick-both|pixels|pixels-per-col|pixels-per-colu|pixels-per-colum|pixels-per-column|pixels-per-row|popup-m|popup-me|popup-men|popup-menu|popup-o|popup-on|popup-onl|popup-only|portrait|position|precision|prefer-dataset|prepare-string|prepared|preproc|preproce|preproces|preprocess|presel|presele|preselec|preselect|prev|prev-col|prev-colu|prev-colum|prev-column|prev-frame|prev-sibling|prev-tab-i|prev-tab-it|prev-tab-ite|prev-tab-item|prev-word|primary|primary-passphrase|printer|printer-control-handle|printer-hdc|printer-name|printer-port|printer-setup|private|private-d|private-da|private-dat|private-data|privileges|proc-ha|proc-han|proc-hand|proc-handl|proc-handle|proc-st|proc-sta|proc-stat|proc-statu|proc-status|proce|proced|procedu|procedur|procedure|procedure-call-type|procedure-complete|procedure-name|procedure-type|process|process-architecture|profile-file|profiler|profiling|program-name|progress|progress-s|progress-so|progress-sou|progress-sour|progress-sourc|progress-source|prompt|prompt-f|prompt-fo|prompt-for|promsgs|propath|property|protected|provers|proversi|proversio|proversion|proxy|proxy-password|proxy-userid|public|public-id|publish|published-events|put|put|put-bits|put-byte|put-bytes|put-double|put-float|put-int64|put-key-val|put-key-valu|put-key-value|put-long|put-short|put-string|put-unsigned-long|put-unsigned-short|putbyte)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-q': {
      match:
        '(?i)(?<![\\w-])(qualified-user-id|query|query-close|query-off-end|query-open|query-prepare|query-tuning|question|quit|quoter)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-r': {
      match:
        '(?i)(?<![\\w-])(r-index|radio-buttons|radio-set|random|raw|raw-transfer|rcode-info|rcode-infor|rcode-inform|rcode-informa|rcode-informat|rcode-informati|rcode-informatio|rcode-information|read|read-available|read-exact-num|read-file|read-json|read-only|read-response|read-xml|read-xmlschema|readkey|real|recall|recid|record-len|record-leng|record-lengt|record-length|rect|recta|rectan|rectang|rectangl|rectangle|recursive|reference-only|refresh|refresh-audit-policy|refreshable|register-domain|reinstate|reject-changes|reject-row-changes|rejected|relation-fi|relation-fie|relation-fiel|relation-field|relation-fields|relations-active|release|remote|remote-host|remote-port|remove-attribute|remove-child|remove-events-proc|remove-events-proce|remove-events-proced|remove-events-procedu|remove-events-procedur|remove-events-procedure|remove-super-proc|remove-super-proce|remove-super-proced|remove-super-procedu|remove-super-procedur|remove-super-procedure|repeat|replace|replace|replace-child|replace-selection-text|replication-create|replication-delete|replication-write|reports|reposition|reposition-back|reposition-backw|reposition-backwa|reposition-backwar|reposition-backward|reposition-backwards|reposition-forw|reposition-forwa|reposition-forwar|reposition-forward|reposition-forwards|reposition-parent-rel|reposition-parent-rela|reposition-parent-relat|reposition-parent-relati|reposition-parent-relatio|reposition-parent-relation|reposition-to-row|reposition-to-rowid|request|request-info|reset|resiza|resizab|resizabl|resizable|resize|response-info|restart-row|restart-rowid|result|resume-display|retain|retain-s|retain-sh|retain-sha|retain-shap|retain-shape|retry|retry-cancel|return|return|return-ins|return-inse|return-inser|return-insert|return-inserte|return-inserted|return-to-start-di|return-to-start-dir|return-val|return-valu|return-value|return-value-data-type|return-value-dll-type|returns|reverse-from|revert|revoke|rgb-v|rgb-va|rgb-val|rgb-valu|rgb-value|right|right|right-align|right-aligne|right-aligned|right-end|right-trim|role|roles|round|rounded|routine-level|row|row-created|row-deleted|row-display|row-entry|row-height|row-height-c|row-height-ch|row-height-cha|row-height-char|row-height-chars|row-height-p|row-height-pi|row-height-pix|row-height-pixe|row-height-pixel|row-height-pixels|row-leave|row-ma|row-mar|row-mark|row-marke|row-marker|row-markers|row-modified|row-of|row-resizable|row-state|row-unmodified|rowid|rule|rule-row|rule-y|run|run-proc|run-proce|run-proced|run-procedu|run-procedur|run-procedure)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-s': {
      match:
        '(?i)(?<![\\w-])(save|save-as|save-as|save-file|save-row-changes|save-where-string|sax-attributes|sax-comple|sax-complet|sax-complete|sax-parse|sax-parse-first|sax-parse-next|sax-parser-error|sax-reader|sax-running|sax-uninitialized|sax-write-begin|sax-write-complete|sax-write-content|sax-write-element|sax-write-error|sax-write-idle|sax-write-tag|sax-writer|sax-xml|schema|schema-change|schema-location|schema-marshal|schema-path|screen|screen-io|screen-lines|screen-val|screen-valu|screen-value|scroll|scroll-bars|scroll-horizontal|scroll-left|scroll-mode|scroll-notify|scroll-right|scroll-to-current-row|scroll-to-i|scroll-to-it|scroll-to-ite|scroll-to-item|scroll-to-selected-row|scroll-vertical|scrollable|scrollbar-drag|scrollbar-h|scrollbar-ho|scrollbar-hor|scrollbar-hori|scrollbar-horiz|scrollbar-horizo|scrollbar-horizon|scrollbar-horizont|scrollbar-horizonta|scrollbar-horizontal|scrollbar-v|scrollbar-ve|scrollbar-ver|scrollbar-vert|scrollbar-verti|scrollbar-vertic|scrollbar-vertica|scrollbar-vertical|scrolled-row-pos|scrolled-row-posi|scrolled-row-posit|scrolled-row-positi|scrolled-row-positio|scrolled-row-position|scrolling|sdbname|seal|seal-timestamp|search|search-self|search-target|section|security-policy|seek|select|select|select-all|select-extend|select-focused-row|select-next-row|select-on-join|select-prev-row|select-repositioned-row|select-row|selectable|selected|selected-items|selection|selection-end|selection-extend|selection-list|selection-start|selection-text|self|send|sensitive|separate-connection|separator-fgc|separator-fgco|separator-fgcol|separator-fgcolo|separator-fgcolor|separators|serializable|serialize-hidden|serialize-name|serialize-row|server|server-connection-bo|server-connection-bou|server-connection-boun|server-connection-bound|server-connection-bound-re|server-connection-bound-req|server-connection-bound-requ|server-connection-bound-reque|server-connection-bound-reques|server-connection-bound-request|server-connection-co|server-connection-con|server-connection-cont|server-connection-conte|server-connection-contex|server-connection-context|server-connection-id|server-operating-mode|server-socket|session|session-end|session-id|set|set-actor|set-appl-context|set-attr-call-type|set-attribute|set-attribute-node|set-blue|set-blue-|set-blue-v|set-blue-va|set-blue-val|set-blue-valu|set-blue-value|set-break|set-buffers|set-byte-order|set-callback|set-callback-procedure|set-cell-focus|set-client|set-commit|set-connect-procedure|set-contents|set-db-client|set-db-logging|set-dynamic|set-effective-tenant|set-event-manager-option|set-green|set-green-|set-green-v|set-green-va|set-green-val|set-green-valu|set-green-value|set-input-source|set-must-understand|set-node|set-numeric-form|set-numeric-forma|set-numeric-format|set-option|set-output-destination|set-parameter|set-pointer-val|set-pointer-valu|set-pointer-value|set-property|set-read-response-procedure|set-red|set-red-|set-red-v|set-red-va|set-red-val|set-red-valu|set-red-value|set-repositioned-row|set-rgb|set-rgb-|set-rgb-v|set-rgb-va|set-rgb-val|set-rgb-valu|set-rgb-value|set-role|set-rollback|set-safe-user|set-selection|set-serialized|set-size|set-socket-option|set-sort-arrow|set-state|set-wait|set-wait-|set-wait-s|set-wait-st|set-wait-sta|set-wait-stat|set-wait-state|settings|setuser|setuseri|setuserid|sha1-digest|share|share-|share-l|share-lo|share-loc|share-lock|shared|short|show-in-task|show-in-taskb|show-in-taskba|show-in-taskbar|show-stat|show-stats|side-lab|side-labe|side-label|side-label-h|side-label-ha|side-label-han|side-label-hand|side-label-handl|side-label-handle|side-labels|signature|signature-value|silent|simple|single|single-character|single-run|singleton|size|size-c|size-ch|size-cha|size-char|size-chars|size-p|size-pi|size-pix|size-pixe|size-pixel|size-pixels|skip|skip-deleted-rec|skip-deleted-reco|skip-deleted-recor|skip-deleted-record|skip-group-duplicates|skip-schema-check|slider|small-icon|small-title|smallint|soap-fault|soap-fault-actor|soap-fault-code|soap-fault-detail|soap-fault-misunderstood-header|soap-fault-node|soap-fault-role|soap-fault-string|soap-fault-subcode|soap-header|soap-header-entryref|soap-version|socket|some|sort|sort-ascending|sort-number|source|source-procedure|space|sql|sqrt|ssl-server-name|standalone|start|start-box-selection|start-document|start-element|start-extend-box-selection|start-mem-check|start-move|start-resize|start-row-resize|start-search|starting|startup-parameters|state-detail|static|statistics|status|status-area|status-area-font|status-area-msg|stdcall|stomp-detection|stomp-frequency|stop|stop|stop-after|stop-display|stop-mem-check|stop-object|stop-parsing|stoppe|stopped|stored-proc|stored-proce|stored-proced|stored-procedu|stored-procedur|stored-procedure|stream|stream-handle|stream-io|stretch-to-fit|strict|strict-entity-resolution|string|string-value|string-xref|sub-ave|sub-aver|sub-avera|sub-averag|sub-average|sub-count|sub-max|sub-maxi|sub-maxim|sub-maximu|sub-maximum|sub-menu|sub-menu-help|sub-min|sub-mini|sub-minim|sub-minimu|sub-minimum|sub-total|subscribe|subst|substi|substit|substitu|substitut|substitute|substr|substri|substrin|substring|subtype|sum|summary|super|super-proc|super-proce|super-proced|super-procedu|super-procedur|super-procedure|super-procedures|suppress-namespace-processing|suppress-w|suppress-wa|suppress-war|suppress-warn|suppress-warni|suppress-warnin|suppress-warning|suppress-warnings|suppress-warnings-list|suspend|symmetric-encryption-algorithm|symmetric-encryption-iv|symmetric-encryption-key|symmetric-support|synchronize|system-alert|system-alert-|system-alert-b|system-alert-bo|system-alert-box|system-alert-boxe|system-alert-boxes|system-dialog|system-help|system-id)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-t': {
      match:
        '(?i)(?<![\\w-])(tab|tab-position|tab-stop|table|table-crc-list|table-handle|table-list|table-num|table-numb|table-numbe|table-number|table-scan|target|target-procedure|temp-dir|temp-dire|temp-direc|temp-direct|temp-directo|temp-director|temp-directory|temp-table|temp-table-prepar|temp-table-prepare|tenant|tenant-id|tenant-name|tenant-name-to-id|tenant-where|term|terminal|terminate|text|text-cursor|text-seg|text-seg-|text-seg-g|text-seg-gr|text-seg-gro|text-seg-grow|text-seg-growt|text-seg-growth|text-selected|then|this-object|this-procedure|thread-safe|three-d|through|throw|thru|tic-marks|time|time-source|timezone|title|title-bgc|title-bgco|title-bgcol|title-bgcolo|title-bgcolor|title-dc|title-dco|title-dcol|title-dcolo|title-dcolor|title-fgc|title-fgco|title-fgcol|title-fgcolo|title-fgcolor|title-fo|title-fon|title-font|to|to-rowid|today|toggle-box|tooltip|tooltips|top|top-column|top-nav-query|top-only|topic|total|trace-filter|tracing|tracking-changes|trailing|trans|trans-init-proc|trans-init-proce|trans-init-proced|trans-init-procedu|trans-init-procedur|trans-init-procedure|transact|transacti|transactio|transaction|transaction-mode|transpar|transpare|transparen|transparent|trigger|triggers|trim|true|trunc|trunca|truncat|truncate|ttcodepage|type|type-of)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-u': {
      match:
        '(?i)(?<![\\w-])(unbox|unbuff|unbuffe|unbuffer|unbuffere|unbuffered|underl|underli|underlin|underline|undo|undo-throw-scope|unform|unforma|unformat|unformatt|unformatte|unformatted|union|unique|unique-id|unique-match|unix|unix-end|unless-hidden|unload|unsigned-byte|unsigned-int64|unsigned-integer|unsigned-long|unsigned-short|unsubscribe|up|up|update|update-attribute|upper|url|url-decode|url-encode|url-password|url-userid|use|use-dic|use-dict|use-dict-|use-dict-e|use-dict-ex|use-dict-exp|use-dict-exps|use-filename|use-index|use-revvideo|use-text|use-underline|use-widget-pool|user|user-data|user-id|userid|using|utc-offset)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-v': {
      match:
        '(?i)(?<![\\w-])(v6display|v6frame|valid-event|valid-handle|valid-object|validate|validate-domain-access-code|validate-expressio|validate-expression|validate-message|validate-seal|validate-xml|validation-enabled|value|value-changed|values|var|vari|varia|variab|variabl|variable|verb|verbo|verbos|verbose|version|vert|verti|vertic|vertica|vertical|view|view-as|view-first-column-on-reopen|virtual-height|virtual-height-c|virtual-height-ch|virtual-height-cha|virtual-height-char|virtual-height-chars|virtual-height-p|virtual-height-pi|virtual-height-pix|virtual-height-pixe|virtual-height-pixel|virtual-height-pixels|virtual-width|virtual-width-c|virtual-width-ch|virtual-width-cha|virtual-width-char|virtual-width-chars|virtual-width-p|virtual-width-pi|virtual-width-pix|virtual-width-pixe|virtual-width-pixel|virtual-width-pixels|visible|vms|void)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-w': {
      match:
        '(?i)(?<![\\w-])(wait|wait-for|warning|wc-admin-app|web-con|web-cont|web-conte|web-contex|web-context|web-notify|weekday|when|where|where-string|while|widget|widget-e|widget-en|widget-ent|widget-ente|widget-enter|widget-h|widget-ha|widget-han|widget-hand|widget-handl|widget-handle|widget-id|widget-l|widget-le|widget-lea|widget-leav|widget-leave|widget-pool|width|width-c|width-ch|width-cha|width-char|width-chars|width-p|width-pi|width-pix|width-pixe|width-pixel|width-pixels|window|window-close|window-delayed-min|window-delayed-mini|window-delayed-minim|window-delayed-minimi|window-delayed-minimiz|window-delayed-minimize|window-maxim|window-maximi|window-maximiz|window-maximize|window-maximized|window-maximized|window-minim|window-minimi|window-minimiz|window-minimize|window-minimized|window-minimized|window-name|window-normal|window-resized|window-restored|window-sta|window-stat|window-state|window-sys|window-syst|window-syste|window-system|with|word-index|word-wrap|work-area-height-p|work-area-height-pi|work-area-height-pix|work-area-height-pixe|work-area-height-pixel|work-area-height-pixels|work-area-width-p|work-area-width-pi|work-area-width-pix|work-area-width-pixe|work-area-width-pixel|work-area-width-pixels|work-area-x|work-area-y|work-tab|work-tabl|work-table|workfile|write|write-cdata|write-characters|write-comment|write-data|write-data-element|write-empty-element|write-entity-ref|write-external-dtd|write-fragment|write-json|write-message|write-processing-instruction|write-status|write-xml|write-xmlschema)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-x': {
      match:
        '(?i)(?<![\\w-])(x-document|x-noderef|x-of|xcode|xcode-session-key|xml-data-type|xml-entity-expansion-limit|xml-node-name|xml-node-type|xml-schema-pat|xml-schema-path|xml-strict-entity-resolution|xml-suppress-namespace-processing|xor|xref|xref-xml)(?![\\w-])',
      name: 'keyword.other.abl'
    },
    'keywords-y': {
      match:
        '(?i)(?<![\\w-])(y|y-of|year|year-offset|yes|yes-no|yes-no-cancel)(?![\\w-])',
      name: 'keyword.other.abl'
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
      begin: '(?i)^\\s*(method|constructor)\\s*',
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
      begin: '(?i)\\b(new)\\b',
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
      captures: {
        1: {name: 'storage.data.table.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'storage.data.table.abl'}
      },
      match:
        '(?i)\\s*([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s+(of)\\s+([\\w\\-#$%]+(\\.[\\w\\-#$%]+)?)\\s*'
    },
    'on-error-endkey-stop': {
      captures: {
        1: {name: 'keyword.other.abl'},
        2: {name: 'keyword.other.abl'},
        3: {name: 'keyword.other.abl'},
        4: {name: 'meta.block.label.abl'}
      },
      match:
        '(?i)\\s*(on)\\s+(endkey|error|stop|quit)\\s+(undo)\\s*(?!leave|next|retry|return|throw)([a-z0-9\\-\\_\\$]*)?\\s*',
      name: 'meta.block.branch.abl'
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
      match: '(?i)\\s+(contains|begins|matches|eq|le|lt|ge|gt|ne)\\s+'
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
            2: {name: 'storage.data.table.abl'}
          },
          match: '(?i)\\s*(dataset|table)\\s+([\\w\\-]+)\\s*'
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
        {include: '#abl-functions'},
        {include: '#type-name-generic'},
        {include: '#type-name'},
        {include: '#string'},
        {include: '#comment'}
      ]
    },
    'parameter-name': {
      match: '(?<=^|\\s)(\\w|-)+(?=\\s)',
      name: 'variable.parameter.abl'
    },
    parens: {match: '\\(|\\)', name: 'meta.brace.round.js'},
    preprocessors: {
      match:
        '(?i)(\\&[\\w-]*)|({\\&[\\w-]*})|(&window-system|&text-height|&line-number|&batch-mode|&file-name|&undefine|&sequence|&message|defined|&elseif|&scoped|&global|&opsys|&endif|&else|&scop|&then|&glob|&if)',
      name: 'storage.type.function.abl'
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
      begin: '(?i)\\s*(?<!\\:)\\s*(get|set)',
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
        2: {name: 'meta.other.procedure.abl'}
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
        {include: '#property-call'},
        {include: '#handle-attributes'},
        {include: '#abl-functions'},
        {include: '#unqualified-method-call'},
        {include: '#function-arguments'},
        {include: '#arguments-reference'},
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
      match: '(?<=^|\\s|\\[|\\()([a-zA-Z][a-zA-Z0-9\\#\\$\\-\\_\\%\\&]*)',
      name: 'variable.other.abl'
    },
    'while-expression': {
      begin: '(?i)\\s*(while)\\s*',
      beginCaptures: {1: {name: 'keyword.other.abl'}},
      end: '(?=\\R)',
      patterns: [
        {include: '#operator'},
        {include: '#property-call'},
        {include: '#branch-options'},
        {include: '#statements'}
      ]
    }
  },
  scopeName: 'source.abl'
}

export default grammar
