// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rkt', '.rktd', '.rktl', '.scrbl'],
  names: ['racket'],
  patterns: [
    {include: '#multilinecomment'},
    {
      begin: '(\\#px|\\#rx)?(\\#)?\\"',
      end: '\\"',
      name: 'constant',
      patterns: [{match: '([^"\\\\]|\\\\.|\\\\\\\\)*', name: 'constant'}]
    },
    {
      match:
        '((\\#[tT])|(\\#[fF])|(\\#true)|(\\#false))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {
      match:
        '((((?i)((\\#\\\\null)|(\\#\\\\nul)|(\\#\\\\backspace)|(\\#\\\\tab)|(\\#\\\\newline)|(\\#\\\\linefeed)|(\\#\\\\vtab)|(\\#\\\\page)|(\\#\\\\return)|(\\#\\\\space)|(\\#\\\\rubout))(?-i)))|(\\#\\\\(([0-7]){1,3}))|(\\#\\\\u(([0-9abcdefABCDEF]){1,4}))|(\\#\\\\U(([0-9abcdefABCDEF]){1,8}))|(\\#\\\\.(?=[^[:alpha:]])))',
      name: 'constant'
    },
    {
      match:
        '((\\#[bBeEiI])*(\\#[ei])?(((((((\\+)|(\\-)))?((([0-1])+)|(([0-1])+\\/([0-1])+)))|(((((\\+)|(\\-)))?((([0-1])+)|(([0-1])+\\/([0-1])+)))?((\\+)|(\\-))(((([0-1])+)|(([0-1])+\\/([0-1])+)))?i)))|((((((((\\+)|(\\-)))?((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-1])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))|(((((((((\\+)|(\\-)))?((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-1])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?((\\+)|(\\-))(((((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-1])+))?)|((((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?i)|((((((\\+)|(\\-)))?((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-1])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f)))))@(((((\\+)|(\\-)))?((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-1])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))))))))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {
      match:
        '((\\#[oOeEiI])*(\\#[ei])?(((((((\\+)|(\\-)))?((([0-7])+)|(([0-7])+\\/([0-7])+)))|(((((\\+)|(\\-)))?((([0-7])+)|(([0-7])+\\/([0-7])+)))?((\\+)|(\\-))(((([0-7])+)|(([0-7])+\\/([0-7])+)))?i)))|((((((((\\+)|(\\-)))?((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-7])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))|(((((((((\\+)|(\\-)))?((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-7])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?((\\+)|(\\-))(((((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-7])+))?)|((((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?i)|((((((\\+)|(\\-)))?((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-7])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f)))))@(((((\\+)|(\\-)))?((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-7])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))))))))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {
      match:
        '((\\#[dDeEiI])*(\\#[ei])?(((((((\\+)|(\\-)))?((([0-9])+)|(([0-9])+\\/([0-9])+)))|(((((\\+)|(\\-)))?((([0-9])+)|(([0-9])+\\/([0-9])+)))?((\\+)|(\\-))(((([0-9])+)|(([0-9])+\\/([0-9])+)))?i)))|((((((((\\+)|(\\-)))?((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-9])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))|(((((((((\\+)|(\\-)))?((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-9])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?((\\+)|(\\-))(((((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-9])+))?)|((((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))?i)|((((((\\+)|(\\-)))?((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-9])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f)))))@(((((\\+)|(\\-)))?((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([sldef](((\\+)|(\\-)))?([0-9])+))?)|(((\\+)|(\\-))(((inf\\.0)|(nan\\.0)|(inf\\.f)|(nan\\.f))))))))))))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {
      match:
        '(\\#([xXeEiI])*(\\#[ei])?(((((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+)|(([0-9abcdefABCDEF])+\\/([0-9abcdefABCDEF])+)))|(((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+)|(([0-9abcdefABCDEF])+\\/([0-9abcdefABCDEF])+)))?((\\+)|(\\-))(((([0-9abcdefABCDEF])+)|(([0-9abcdefABCDEF])+\\/([0-9abcdefABCDEF])+)))?i)))|((((((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([sl](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))|(((((((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([sl](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))?((\\+)|(\\-))(((((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([sl](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|((((inf\\.)|(nan\\.))[0ftT]))))?i)|((((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([sl](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT])))@(((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([sl](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))))))))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {
      match:
        '(((\\#[bB](((((\\+)|(\\-)))?((([0-1])+(\\#)*(\\.)?(\\#)*)|((([0-1])+)?\\.([0-1])+(\\#)*)|(([0-1])+(\\#)*\\/([0-1])+(\\#)*))(([tT](((\\+)|(\\-)))?([0-1])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))|(\\#[oO](((((\\+)|(\\-)))?((([0-7])+(\\#)*(\\.)?(\\#)*)|((([0-7])+)?\\.([0-7])+(\\#)*)|(([0-7])+(\\#)*\\/([0-7])+(\\#)*))(([tT](((\\+)|(\\-)))?([0-7])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))|(\\#[xX](((((\\+)|(\\-)))?((([0-9abcdefABCDEF])+(\\#)*(\\.)?(\\#)*)|((([0-9abcdefABCDEF])+)?\\.([0-9abcdefABCDEF])+(\\#)*)|(([0-9abcdefABCDEF])+(\\#)*\\/([0-9abcdefABCDEF])+(\\#)*))(([tT](((\\+)|(\\-)))?([0-9abcdefABCDEF])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))|((\\#[bB])?(((((\\+)|(\\-)))?((([0-9])+(\\#)*(\\.)?(\\#)*)|((([0-9])+)?\\.([0-9])+(\\#)*)|(([0-9])+(\\#)*\\/([0-9])+(\\#)*))(([tT](((\\+)|(\\-)))?([0-9])+))?)|(((\\+)|(\\-))(((inf\\.)|(nan\\.))[0ftT]))))))(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'constant'
    },
    {match: '\\#void(?=[()\\[\\]{}",\'`;\\ \\s])', name: 'constant'},
    {
      match: "\\'([^#()\\[\\]{}\",'`; \\s]([^()\\[\\]{}\",'`;\\ \\s])*)",
      name: 'constant'
    },
    {match: "\\'\\(\\)", name: 'constant'},
    {
      match: '\\#\\:([^#()\\[\\]{}",\'`; \\s]([^()\\[\\]{}",\'`;\\ \\s])*)',
      name: 'constant'
    },
    {
      match: "\\#\\'([^#()\\[\\]{}\",'`; \\s]([^()\\[\\]{}\",'`;\\ \\s])*)",
      name: 'constant'
    },
    {
      match:
        '(\\#\\%app|\\#\\%datum|\\#\\%declare|\\#\\%expression|\\#\\%module\\-begin|\\#\\%plain\\-app|\\#\\%plain\\-lambda|\\#\\%plain\\-module\\-begin|\\#\\%printing\\-module\\-begin|\\#\\%provide|\\#\\%require|\\#\\%stratified\\-body|\\#\\%top|\\#\\%top\\-interaction|\\#\\%variable\\-reference|\\->|\\->\\*|\\->\\*m|\\->d|\\->dm|\\->i|\\->m|\\.\\.\\.|\\:do\\-in|==|=>|_|absent|abstract|all\\-defined\\-out|all\\-from\\-out|and|any|augment|augment\\*|augment\\-final|augment\\-final\\*|augride|augride\\*|begin|begin\\-for\\-syntax|begin0|case|case\\->|case\\->m|case\\-lambda|class|class\\*|class\\-field\\-accessor|class\\-field\\-mutator|class/c|class/derived|combine\\-in|combine\\-out|command\\-line|compound\\-unit|compound\\-unit/infer|cond|contract|contract\\-out|contract\\-struct|contracted|define|define\\-compound\\-unit|define\\-compound\\-unit/infer|define\\-contract\\-struct|define\\-custom\\-hash\\-types|define\\-custom\\-set\\-types|define\\-for\\-syntax|define\\-local\\-member\\-name|define\\-logger|define\\-match\\-expander|define\\-member\\-name|define\\-module\\-boundary\\-contract|define\\-namespace\\-anchor|define\\-opt/c|define\\-sequence\\-syntax|define\\-serializable\\-class|define\\-serializable\\-class\\*|define\\-signature|define\\-signature\\-form|define\\-struct|define\\-struct/contract|define\\-struct/derived|define\\-syntax|define\\-syntax\\-rule|define\\-syntaxes|define\\-unit|define\\-unit\\-binding|define\\-unit\\-from\\-context|define\\-unit/contract|define\\-unit/new\\-import\\-export|define\\-unit/s|define\\-values|define\\-values\\-for\\-export|define\\-values\\-for\\-syntax|define\\-values/invoke\\-unit|define\\-values/invoke\\-unit/infer|define/augment|define/augment\\-final|define/augride|define/contract|define/final\\-prop|define/match|define/overment|define/override|define/override\\-final|define/private|define/public|define/public\\-final|define/pubment|define/subexpression\\-pos\\-prop|delay|delay/idle|delay/name|delay/strict|delay/sync|delay/thread|do|else|except|except\\-in|except\\-out|export|extends|failure\\-cont|false|false/c|field|field\\-bound\\?|file|flat\\-murec\\-contract|flat\\-rec\\-contract|for|for\\*|for\\*/and|for\\*/first|for\\*/fold|for\\*/fold/derived|for\\*/hash|for\\*/hasheq|for\\*/hasheqv|for\\*/last|for\\*/list|for\\*/lists|for\\*/mutable\\-set|for\\*/mutable\\-seteq|for\\*/mutable\\-seteqv|for\\*/or|for\\*/product|for\\*/set|for\\*/seteq|for\\*/seteqv|for\\*/sum|for\\*/vector|for\\*/weak\\-set|for\\*/weak\\-seteq|for\\*/weak\\-seteqv|for\\-label|for\\-meta|for\\-syntax|for\\-template|for/and|for/first|for/fold|for/fold/derived|for/hash|for/hasheq|for/hasheqv|for/last|for/list|for/lists|for/mutable\\-set|for/mutable\\-seteq|for/mutable\\-seteqv|for/or|for/product|for/set|for/seteq|for/seteqv|for/sum|for/vector|for/weak\\-set|for/weak\\-seteq|for/weak\\-seteqv|gen\\:custom\\-write|gen\\:dict|gen\\:equal\\+hash|gen\\:set|gen\\:stream|generic|get\\-field|if|implies|import|include|include\\-at/relative\\-to|include\\-at/relative\\-to/reader|include/reader|inherit|inherit\\-field|inherit/inner|inherit/super|init|init\\-depend|init\\-field|init\\-rest|inner|inspect|instantiate|interface|interface\\*|invariant\\-assertion|invoke\\-unit|invoke\\-unit/infer|lambda|lazy|let|let\\*|let\\*\\-values|let\\-syntax|let\\-syntaxes|let\\-values|let/cc|let/ec|letrec|letrec\\-syntax|letrec\\-syntaxes|letrec\\-syntaxes\\+values|letrec\\-values|lib|link|local|local\\-require|log\\-debug|log\\-error|log\\-fatal|log\\-info|log\\-warning|match|match\\*|match\\*/derived|match\\-define|match\\-define\\-values|match\\-lambda|match\\-lambda\\*|match\\-lambda\\*\\*|match\\-let|match\\-let\\*|match\\-let\\*\\-values|match\\-let\\-values|match\\-letrec|match/derived|match/values|member\\-name\\-key|method\\-contract\\?|mixin|module|module\\*|module\\+|nand|new|nor|object\\-contract|object/c|only|only\\-in|only\\-meta\\-in|open|opt/c|or|overment|overment\\*|override|override\\*|override\\-final|override\\-final\\*|parameterize|parameterize\\*|parameterize\\-break|parametric\\->/c|place|place\\*|planet|prefix|prefix\\-in|prefix\\-out|private|private\\*|prompt\\-tag/c|protect\\-out|provide|provide\\-signature\\-elements|provide/contract|public|public\\*|public\\-final|public\\-final\\*|pubment|pubment\\*|quasiquote|quasisyntax|quasisyntax/loc|quote|quote\\-syntax|quote\\-syntax/prune|recontract\\-out|recursive\\-contract|relative\\-in|rename|rename\\-in|rename\\-inner|rename\\-out|rename\\-super|require|send|send\\*|send\\+|send\\-generic|send/apply|send/keyword\\-apply|set!|set!\\-values|set\\-field!|shared|stream|stream\\-cons|struct|struct\\*|struct\\-copy|struct\\-field\\-index|struct\\-out|struct/c|struct/ctc|struct/dc|submod|super|super\\-instantiate|super\\-make\\-object|super\\-new|syntax|syntax\\-case|syntax\\-case\\*|syntax\\-id\\-rules|syntax\\-rules|syntax/loc|tag|this|this\\%|thunk|thunk\\*|time|unconstrained\\-domain\\->|unit|unit\\-from\\-context|unit/c|unit/new\\-import\\-export|unit/s|unless|unquote|unquote\\-splicing|unsyntax|unsyntax\\-splicing|values/drop|when|with\\-continuation\\-mark|with\\-contract|with\\-handlers|with\\-handlers\\*|with\\-method|with\\-syntax|λ)(?=[()\\[\\]{}",\'`;\\ \\s])',
      name: 'entity.name'
    },
    {
      match: '([^#()\\[\\]{}",\'`; \\s]([^()\\[\\]{}",\'`;\\ \\s])*)',
      name: 'none'
    },
    {match: ';.*$', name: 'comment'},
    {match: '\\#;', name: 'comment'}
  ],
  repository: {
    multilinecomment: {
      begin: '\\#\\|',
      contentName: 'comment',
      end: '\\|\\#',
      name: 'comment',
      patterns: [{include: '#multilinecomment', name: 'comment'}]
    }
  },
  scopeName: 'source.racket'
}

export default grammar
