// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dylan', '.dyl', '.intr', '.lid'],
  names: ['dylan'],
  patterns: [
    {
      begin: '(?<=^|\\s|\\()/\\*',
      end: '\\*/',
      name: 'comment.block.dylan',
      patterns: [{include: '#comment-block'}]
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.dylan'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.dylan'}},
          end: '\\n',
          name: 'comment.line.double-slash.dylan'
        }
      ]
    },
    {
      begin:
        '^(module|synopsis|author|copyright|version|files|executable|library):',
      contentName: 'meta.preprocessor.dylan',
      end: '^\\s*$',
      name: 'keyword.control.preprocessor.dylan',
      patterns: [
        {
          match:
            '^(module|synopsis|author|copyright|version|files|executable|library):',
          name: 'keyword.control.preprocessor.dylan'
        }
      ]
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'storage.modifier.dylan'},
        3: {name: 'storage.modifier.dylan'},
        4: {name: 'storage.type.function.dylan'},
        5: {name: 'entity.name.function.dylan'}
      },
      match:
        '^(define)\\s+((?:(?:sealed|open|inline[-a-z]*)\\s+)+)?(?:(domain)|(method|function|generic)\\s+)([\\\\_A-Za-z0-9/!?*%$\\-\\<\\>=]*)',
      name: 'meta.function.dylan'
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'storage.modifier.dylan'},
        3: {name: 'storage.type.class.dylan'},
        4: {name: 'entity.name.type.dylan'}
      },
      match:
        '^(define)\\s+((?:(?:sealed|open|abstract|concrete|primary|free)\\s+)+)?(class)\\s+([_A-Za-z0-9/!?*%$\\-\\<\\>]*)',
      name: 'meta.class.dylan'
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'entity.name.other.dylan'},
        3: {name: 'storage.type.namespace.dylan'}
      },
      match: '^(define)\\s+((library|module)\\s+[_A-Za-z0-9/!?*%$\\-\\<\\>]+)',
      name: 'meta.namespace.dylan'
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'storage.type.dylan'},
        3: {name: 'entity.name.other.dylan'}
      },
      match:
        '^(define)\\s+(constant|variable)\\s+([_A-Za-z0-9/!?*%$\\-\\<\\>]+)',
      name: 'meta.variable.dylan'
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'storage.type.dylan'},
        3: {name: 'entity.name.other.dylan'}
      },
      match: '^(define)\\s+(macro)\\s+([_A-Za-z0-9/!?*%$\\-\\<\\>]+)',
      name: 'meta.macro.dylan'
    },
    {
      captures: {
        1: {name: 'keyword.other.dylan'},
        2: {name: 'entity.name.other.dylan'}
      },
      match: '^(define)\\s+([_A-Za-z0-9/!?*%$\\-\\<\\>\\s]+)',
      name: 'meta.definition.dylan'
    },
    {
      match: '(#t|#f|#next|#rest|#key|#all-keys|#include)',
      name: 'constant.language.dylan'
    },
    {
      match:
        '\\b((#x[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.dylan'
    },
    {match: "'(\\\\<[0-9a-fA-F]*>|\\\\.|.)'", name: 'constant.character.dylan'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.dylan',
      patterns: [{include: '#escape'}]
    },
    {
      begin: '(#)"',
      beginCaptures: {1: {name: 'keyword.operator.dylan'}},
      end: '"',
      name: 'string.quoted.other.dylan',
      patterns: [{include: '#escape'}]
    },
    {
      match:
        '(?<=^|[,.()\\s])(above|afterwards|begin|below|block|by|case|cleanup|else|elseif|exception|finally|for|from|keyed-by|if|in|otherwise|select|then|to|unless|until:?|using|when|while:?)(?=$|[;,()\\s])',
      name: 'keyword.control.dylan'
    },
    {match: '(?<=^|[,;\\s])end(?=$|[;,)\\s])', name: 'keyword.control.dylan'},
    {
      match:
        '(?<=^|[,.(\\s])(class|constant|create|default:|define|each-subclass|exclude:|export|export:|function|generic|import:|inherited|init-function:|init-keyword:|init-value:|instance|keyword|let(\\s+handler)?|library|local|macro|method|module|prefix:|rename:|required|required-init-keyword:|sealed|setter:|slot|type:|use|variable|virtual)(?=$|[;,.()\\s])',
      name: 'keyword.other.dylan'
    },
    {
      match:
        '<(abort|array|boolean|byte-string|character|class|collection|complex|condition|deque|double-float|empty-list|error|explicit-key-collection|extended-float|float|function|generic-function|integer|list|method|mutable-collection|mutable-explicit-key-collection|mutable-sequence|number|object-table|object|pair|range|rational|real|restart|sealed-object-error|sequence|serious-condition|simple-error|simple-object-vector|simple-restart|simple-vector|simple-warning|single-float|singleton|stretchy-collection|stretchy-vector|string|symbol|table|type-error|type|unicode-string|vector|warning)>',
      name: 'support.class.dylan'
    },
    {
      match:
        '(?<=^|[~,.(\\[\\s])(abort|abs|add|add!|add-method|add-new|add-new!|all-superclasses|always|any\\?|applicable-method\\?|apply|aref|aref-setter|as|as-lowercase|as-lowercase!|as-uppercase|as-uppercase!|ash|backward-iteration-protocol|break|ceiling|ceiling/|cerror|check-type|choose|choose-by|complement|compose|concatenate|concatenate-as|condition-format-arguments|condition-format-string|conjoin|copy-sequence|curry|default-handler|dimension|dimensions|direct-subclasses|direct-superclasses|disjoin|do|do-handlers|element|element-setter|empty\\?|error|even\\?|every\\?|false-or|fill!|find-key|find-method|first|first-setter|floor|floor/|forward-iteration-protocol|function-arguments|function-return-values|function-specializers|gcd|generic-function-mandatory-keywords|generic-function-methods|head|head-setter|identity|initialize|instance\\?|integral\\?|intersection|key-sequence|key-test|last|last-setter|lcm|limited|list|logand|logbit\\?|logior|lognot|logxor|make|map|map-as|map-into|max|member\\?|merge-hash-codes|min|modulo|negative|negative\\?|next-method|object-class|object-hash|odd\\?|one-of|pair|pop|pop-last|positive\\?|push|push-last|range|rank|rcurry|reduce|reduce1|remainder|remove|remove!|remove-duplicates|remove-duplicates!|remove-key!|remove-method|replace-elements!|replace-subsequence!|restart-query|return-allowed\\?|return-description|return-query|reverse|reverse!|round|round/|row-major-index|second|second-setter|shallow-copy|signal|singleton|size|size-setter|slot-initialized\\?|sort|sort!|sorted-applicable-methods|subsequence-position|subtype\\?|table-protocol|tail|tail-setter|third|third-setter|truncate|truncate/|type-error-expected-type|type-error-value|type-for-copy|type-union|union|values|vector|zero\\?)(?=$|[;,.()\\s\\]])',
      name: 'support.function.dylan'
    }
  ],
  repository: {
    'comment-block': {begin: '(?<=^|\\s|\\()/\\*', end: '\\*/'},
    escape: {
      match: '\\\\(<[0-9a-fA-F]*>|.)',
      name: 'constant.character.escape.dylan'
    }
  },
  scopeName: 'source.dylan'
}

export default grammar
