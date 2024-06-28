// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/janet-lang/vscode-janet>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.janet'],
  names: ['janet'],
  patterns: [{include: '#all'}],
  repository: {
    all: {
      patterns: [
        {include: '#comment'},
        {include: '#parens'},
        {include: '#brackets'},
        {include: '#braces'},
        {include: '#readermac'},
        {include: '#string'},
        {include: '#longstring'},
        {include: '#literal'},
        {include: '#corelib'},
        {include: '#r-number'},
        {include: '#dec-number'},
        {include: '#hex-number'},
        {include: '#keysym'},
        {include: '#symbol'}
      ]
    },
    braces: {
      begin: '(@?{)',
      captures: {1: {name: 'punctuation.definition.braces.end.janet'}},
      end: '(})',
      patterns: [{include: '#all'}]
    },
    brackets: {
      begin: '(@?\\[)',
      captures: {1: {name: 'punctuation.definition.brackets.end.janet'}},
      end: '(\\])',
      patterns: [{include: '#all'}]
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.janet'}},
      match: '(#).*$',
      name: 'comment.line.janet'
    },
    corelib: {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])(break|def|do|var|set|fn|while|if|quote|quasiquote|unquote|splice|%|%=|\\*|\\*=|\\+|\\+\\+|\\+=|\\-|\\-\\-|\\-=|\\->|\\->>|\\-\\?>|\\-\\?>>|/|/=|<|<=|=|>|>=|abstract\\?|accumulate|accumulate2|all|all\\-bindings|all\\-dynamics|and|any\\?|apply|array|array/concat|array/ensure|array/fill|array/insert|array/new|array/new\\-filled|array/peek|array/pop|array/push|array/remove|array/slice|array/trim|array\\?|as\\->|as\\?\\->|asm|assert|bad\\-compile|bad\\-parse|band|blshift|bnot|boolean\\?|bor|brshift|brushift|buffer|buffer/bit|buffer/bit\\-clear|buffer/bit\\-set|buffer/bit\\-toggle|buffer/blit|buffer/clear|buffer/fill|buffer/format|buffer/new|buffer/new\\-filled|buffer/popn|buffer/push|buffer/push\\-byte|buffer/push\\-string|buffer/push\\-word|buffer/slice|buffer/trim|buffer\\?|bxor|bytes\\?|cancel|case|cfunction\\?|chr|cli\\-main|cmp|comment|comp|compare|compare<|compare<=|compare=|compare>|compare>=|compif|compile|complement|comptime|compwhen|cond|coro|count|curenv|debug|debug/arg\\-stack|debug/break|debug/fbreak|debug/lineage|debug/stack|debug/stacktrace|debug/step|debug/unbreak|debug/unfbreak|debugger\\-env|dec|deep\\-not=|deep=|def\\-|default|default\\-peg\\-grammar|defer|defglobal|defmacro|defmacro\\-|defn|defn\\-|describe|dictionary\\?|disasm|distinct|doc|doc\\*|doc\\-format|dofile|drop|drop\\-until|drop\\-while|dyn|each|eachk|eachp|eachy|edefer|eflush|empty\\?|env\\-lookup|eprin|eprinf|eprint|eprintf|error|errorf|ev/call|ev/cancel|ev/capacity|ev/chan|ev/chunk|ev/close|ev/count|ev/deadline|ev/full|ev/give|ev/go|ev/read|ev/rselect|ev/select|ev/sleep|ev/spawn|ev/take|ev/with\\-deadline|ev/write|eval|eval\\-string|even\\?|every\\?|extreme|false\\?|fiber/can\\-resume\\?|fiber/current|fiber/getenv|fiber/maxstack|fiber/new|fiber/root|fiber/setenv|fiber/setmaxstack|fiber/status|fiber\\?|file/close|file/flush|file/open|file/popen|file/read|file/seek|file/temp|file/write|filter|find|find\\-index|first|flatten|flatten\\-into|flush|for|forever|forv|freeze|frequencies|function\\?|gccollect|gcinterval|gcsetinterval|generate|gensym|get|get\\-in|getline|hash|idempotent\\?|identity|if\\-let|if\\-not|if\\-with|import|import\\*|in|inc|index\\-of|indexed\\?|int/s64|int/u64|int\\?|interleave|interpose|invert|janet/build|janet/config\\-bits|janet/version|juxt|juxt\\*|keep|keys|keyword|keyword/slice|keyword\\?|kvs|label|last|length|let|load\\-image|load\\-image\\-dict|loop|macex|macex1|make\\-env|make\\-image|make\\-image\\-dict|map|mapcat|marshal|match|math/\\-inf|math/abs|math/acos|math/acosh|math/asin|math/asinh|math/atan|math/atan2|math/atanh|math/cbrt|math/ceil|math/cos|math/cosh|math/e|math/erf|math/erfc|math/exp|math/exp2|math/expm1|math/floor|math/gamma|math/hypot|math/inf|math/int\\-max|math/int\\-min|math/int32\\-max|math/int32\\-min|math/log|math/log10|math/log1p|math/log2|math/nan|math/next|math/pi|math/pow|math/random|math/rng|math/rng\\-buffer|math/rng\\-int|math/rng\\-uniform|math/round|math/seedrandom|math/sin|math/sinh|math/sqrt|math/tan|math/tanh|math/trunc|max|mean|merge|merge\\-into|merge\\-module|min|mod|module/add\\-paths|module/cache|module/expand\\-path|module/find|module/loaders|module/loading|module/paths|nan\\?|nat\\?|native|neg\\?|net/accept|net/accept\\-loop|net/address|net/chunk|net/close|net/connect|net/flush|net/listen|net/read|net/recv\\-from|net/send\\-to|net/server|net/write|next|nil\\?|not|not=|number\\?|odd\\?|one\\?|or|os/arch|os/cd|os/chmod|os/clock|os/cryptorand|os/cwd|os/date|os/dir|os/environ|os/execute|os/exit|os/getenv|os/link|os/lstat|os/mkdir|os/mktime|os/open|os/perm\\-int|os/perm\\-string|os/pipe|os/proc\\-kill|os/proc\\-wait|os/readlink|os/realpath|os/rename|os/rm|os/rmdir|os/setenv|os/shell|os/sleep|os/spawn|os/stat|os/symlink|os/time|os/touch|os/umask|os/which|pairs|parse|parser/byte|parser/clone|parser/consume|parser/eof|parser/error|parser/flush|parser/has\\-more|parser/insert|parser/new|parser/produce|parser/state|parser/status|parser/where|partial|partition|peg/compile|peg/find|peg/find\\-all|peg/match|peg/replace|peg/replace\\-all|pos\\?|postwalk|pp|prewalk|prin|prinf|print|printf|product|prompt|propagate|protect|put|put\\-in|quit|range|reduce|reduce2|repeat|repl|require|resume|return|reverse|reverse!|root\\-env|run\\-context|scan\\-number|seq|setdyn|short\\-fn|signal|slice|slurp|some|sort|sort\\-by|sorted|sorted\\-by|spit|stderr|stdin|stdout|string|string/ascii\\-lower|string/ascii\\-upper|string/bytes|string/check\\-set|string/find|string/find\\-all|string/format|string/from\\-bytes|string/has\\-prefix\\?|string/has\\-suffix\\?|string/join|string/repeat|string/replace|string/replace\\-all|string/reverse|string/slice|string/split|string/trim|string/triml|string/trimr|string\\?|struct|struct\\?|sum|symbol|symbol/slice|symbol\\?|table|table/clone|table/getproto|table/new|table/rawget|table/setproto|table/to\\-struct|table\\?|take|take\\-until|take\\-while|tarray/buffer|tarray/copy\\-bytes|tarray/length|tarray/new|tarray/properties|tarray/slice|tarray/swap\\-bytes|thread/close|thread/current|thread/exit|thread/new|thread/receive|thread/send|trace|tracev|true\\?|truthy\\?|try|tuple|tuple/brackets|tuple/setmap|tuple/slice|tuple/sourcemap|tuple/type|tuple\\?|type|unless|unmarshal|untrace|update|update\\-in|use|values|var\\-|varfn|varglobal|walk|when|when\\-let|when\\-with|with|with\\-dyns|with\\-syms|with\\-vars|xprin|xprinf|xprint|xprintf|yield|zero\\?|zipcoll)(?![\\.:\\w_\\-=!@\\$%^&?/<>*])',
      name: 'keyword.control.janet'
    },
    'dec-number': {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])[-+]?([_\\d]+|[_\\d]+\\.[_\\d]*|\\.[_\\d]+)([eE&][+-]?[\\d]+)?(?![\\.:\\w_\\-=!@\\$%^&?/<>*])',
      name: 'constant.numeric.decimal.janet'
    },
    'hex-number': {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])[-+]?0x([_\\da-fA-F]+|[_\\da-fA-F]+\\.[_\\da-fA-F]*|\\.[_\\da-fA-F]+)(&[+-]?[\\da-fA-F]+)?(?![\\.:\\w_\\-=!@\\$%^&?/<>*])',
      name: 'constant.numeric.hex.janet'
    },
    keysym: {
      match: '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*]):[\\.:\\w_\\-=!@\\$%^&?/<>*]*',
      name: 'constant.keyword.janet'
    },
    literal: {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])(true|false|nil)(?![\\.:\\w_\\-=!@\\$%^&?/<>*])',
      name: 'constant.language.janet'
    },
    longstring: {
      begin: '(@?)(`+)',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.janet'},
        2: {name: 'punctuation.definition.string.begin.janet'}
      },
      end: '\\2',
      endCaptures: {1: {name: 'punctuation.definition.string.end.janet'}},
      name: 'string.quoted.triple.janet'
    },
    nomatch: {match: '\\S+', name: 'invalid.illegal.janet'},
    parens: {
      begin: '(@?\\()',
      captures: {1: {name: 'punctuation.definition.parens.end.janet'}},
      end: '(\\))',
      patterns: [{include: '#all'}]
    },
    'r-number': {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])[-+]?\\d\\d?r([_\\w]+|[_\\w]+\\.[_\\w]*|\\.[_\\w]+)(&[+-]?[\\w]+)?(?![\\.:\\w_\\-=!@\\$%^&?/<>*])',
      name: 'constant.numeric.decimal.janet'
    },
    readermac: {match: "[\\'\\~\\;\\,]", name: 'punctuation.other.janet'},
    string: {
      begin: '(@?")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.janet'}},
      end: '(")',
      endCaptures: {1: {name: 'punctuation.definition.string.end.janet'}},
      name: 'string.quoted.double.janet',
      patterns: [
        {
          match:
            '(\\\\[nevr0zft"\\\\\']|\\\\x[0-9a-fA-F]{2}|\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{6})',
          name: 'constant.character.escape.janet'
        }
      ]
    },
    symbol: {
      match:
        '(?<![\\.:\\w_\\-=!@\\$%^&?/<>*])[\\.a-zA-Z_\\-=!@\\$%^&?/<>*][\\.:\\w_\\-=!@\\$%^&?/<>*]*',
      name: 'variable.other.janet'
    }
  },
  scopeName: 'source.janet'
}

export default grammar
