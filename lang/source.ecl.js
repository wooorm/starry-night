// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/hpcc-systems/ecl-tmLanguage>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ecl', '.eclxml'],
  names: ['ecl'],
  patterns: [
    {include: '#expression'},
    {
      match:
        '\\b(?i:(std).(file|date|str|math|metaphone|metaphone3|uni|audit|blas|system.(debug|email|job|log|thorlib|util|workunit)))\\b',
      name: 'support.class.ecl'
    }
  ],
  repository: {
    'array-literal': {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.ecl'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.ecl'}},
      name: 'meta.array.literal.ecl',
      patterns: [{include: '#expression'}]
    },
    'boolean-literal': {
      match: '\\b(?i:(false|true))\\b',
      name: 'constant.language.boolean.ecl'
    },
    comment: {
      name: 'comment.ecl',
      patterns: [
        {include: '#comment-block-doc'},
        {include: '#comment-block'},
        {include: '#comment-line'}
      ]
    },
    'comment-block': {begin: '/\\*', end: '\\*/', name: 'comment.block.ecl'},
    'comment-block-doc': {
      begin: '/\\*\\*(?!/)',
      end: '\\*/',
      name: 'comment.block.documentation.ecl'
    },
    'comment-line': {match: '(//).*$\\n?', name: 'comment.line.ecl'},
    decimal: {
      match: '\\b(?i)(u?)decimal(\\d+(_\\d+)?)\\b',
      name: 'entity.name.type.ecl'
    },
    'digital-signature': {
      name: 'digital-signature.ecl',
      patterns: [
        {include: '#digital-signature-header'},
        {include: '#digital-signature-footer'}
      ]
    },
    'digital-signature-footer': {
      begin: '-----BEGIN PGP SIGNATURE-----',
      end: '-----END PGP SIGNATURE-----',
      name: 'keyword.control.ecl'
    },
    'digital-signature-header': {
      begin: '-----BEGIN PGP SIGNED MESSAGE-----',
      end: 'Hash: SHA512',
      name: 'keyword.control.ecl'
    },
    'embedded-any': {
      begin: '((?i:(embed)))\\s*(\\()',
      beginCaptures: {0: {name: 'entity.name.function.ecl'}},
      end: '(?i:(endembed))',
      endCaptures: {0: {name: 'entity.name.function.ecl'}},
      name: 'entity.other.ecl'
    },
    'embedded-cpp': {
      begin: '(?i:(beginc))\\+\\+',
      beginCaptures: {0: {name: 'entity.name.function.ecl'}},
      end: '(?i:(endc))\\+\\+',
      endCaptures: {0: {name: 'entity.name.function.ecl'}},
      name: 'entity.other.ecl'
    },
    'embedded-single': {
      captures: {1: {name: 'entity.name.function.ecl'}},
      match: '(?i:(embed))\\s*(\\([^\\)]+\\));'
    },
    expression: {
      name: 'meta.expression.ecl',
      patterns: [
        {include: '#comment'},
        {include: '#special-structures'},
        {include: '#embedded-single'},
        {include: '#embedded-any'},
        {include: '#embedded-cpp'},
        {include: '#function-call'},
        {include: '#operators'},
        {include: '#logicals'},
        {include: '#types'},
        {include: '#keywords-pound'},
        {include: '#keywords-workflow'},
        {include: '#keywords'},
        {include: '#digital-signature'},
        {include: '#string'},
        {include: '#literal'}
      ]
    },
    'function-call': {
      captures: {
        1: {
          patterns: [
            {include: '#functions'},
            {include: '#functions-pound'},
            {include: '#functions-hash'},
            {include: '#functions-hash2'},
            {include: '#functions-action'},
            {include: '#functions-workflow'}
          ]
        }
      },
      match: '([#A-Za-z_0-9]+)\\s*(\\()'
    },
    functions: {
      match:
        '\\b(?i:(abs|acos|aggregate|allnodes|apply|apply|ascii|asin|assert|asstring|atan|atan2|ave|build|buildindex|case|catch|choose|choosen|choosesets|clustersize|combine|correlation|cos|cosh|count|covariance|cron|dataset|dedup|define|denormalize|deprecated|dictionary|distribute|distributed|distribution|ebcdic|enth|evaluate|evaluate|event|eventextra|eventname|exists|exp|fail|failcode|failmessage|fetch|fromunicode|fromxml|getenv|getisvalid|graph|group|hashcrc|hashmd5|having|httpcall|httpheader|if|iff|index|interface|intformat|isvalid|iterate|join|keydiff|keypatch|keyunicode|length|library|limit|ln|loadxml|local|log|loop|map|matched|matchlength|matchposition|matchtext|matchunicode|max|merge|mergejoin|min|nofold|nolocal|nonempty|normalize|nothor|notify|opt|output|parse|pattern|penalty|pipe|power|preload|process|project|pull|random|range|rank|ranked|realformat|record|recordof|regexfind|regexfindset|regexreplace|regroup|rejected|rollup|round|roundup|row|rowdiff|rule|sample|sequential|sin|sinh|sizeof|soapcall|sort|sorted|sqrt|stepped|stored|sum|table|tan|tanh|thisnode|topn|tounicode|toxml|transfer|transform|trim|truncate|typeof|ungroup|unicodeorder|use|validate|variance|wait|when|which|xmldecode|xmlencode|xmltext|xmlunicode))\\b',
      name: 'entity.name.function.ecl'
    },
    'functions-action': {
      match:
        '\\b(?i:(algorithm|cluster|escape|encrypt|expire|heading|keyed|maxlength|module|named|ordered|parallel|quote|terminator|threshold|timelimit|timeout|separator|set|skew|virtual|wild))\\b',
      name: 'keyword.other.ecl'
    },
    'functions-hash': {
      match: '\\b(?i:hash(32|64|crc)?)\\b',
      name: 'entity.name.function.ecl'
    },
    'functions-hash2': {
      match: '\\b(?i:hashmd(5))\\b',
      name: 'entity.name.function.ecl'
    },
    'functions-pound': {
      match:
        '#(?i:(append|constant|declare|demangle|end|else|elseif|error|expand|export|exportXML|for|getdatatype|if|inmodule|mangle|onwarning|option|set|stored|text|uniquename|warning|webservice|workunit))\\b',
      name: 'keyword.other.ecl'
    },
    'functions-workflow': {
      match:
        '\\b(?i:(checkpoint|deprecated|failmessage|failure|global|onwarning|persist|priority|recovery|stored|success|when))\\b',
      name: 'keyword.control.ecl'
    },
    integer: {
      match: '\\b(?i:(integer|unsigned))[1-8]\\b',
      name: 'entity.name.type.ecl'
    },
    keywords: {
      match:
        '\\b(?i:(after|all|andor|any|as|atmost|before|best|between|case|compressed|compression|const|counter|csv|default|descend|distributed|encoding|end|endmacro|enum|error|except|exclusive|expand|export|exportxml|extend|fail|failcode|few|fileposition|first|flat|for|forward|from|full|group|grouped|hole|if|ifblock|import|inmodule|inner|internal|joined|keep|keyed|last|left|limit|linkcounted|literal|little_endian|load|local|locale|lookup|lzw|mangle|many|maxcount|maxlength|min skew|mofn|multiple|named|namespace|nocase|noroot|noscan|nosort|noxpath|of|onfail|only|opt|option|outer|overwrite|packed|partition|physicallength|pipe|prefetch|repeat|retry|return|right|right1|right2|rows|rowset|scan|scope|self|service|set|shared|skip|smart|soapaction|sql|stable|store|stored|success|thor|token|trim|type|unicodeorder|uniquename|unordered|unsorted|unstable|update|virtual|warning|whole|width|within|wnotrim|xml|xpath|__compressed_))\\b',
      name: 'keyword.other.ecl'
    },
    'keywords-pound': {
      match: '#(?i:(break|else|end|loop))\\b',
      name: 'keyword.other.ecl'
    },
    'keywords-workflow': {
      match: '\\b(?i:(global|independent|once))\\b',
      name: 'keyword.control.ecl'
    },
    literal: {
      name: 'literal.ecl',
      patterns: [
        {include: '#numeric-literal'},
        {include: '#boolean-literal'},
        {include: '#array-literal'},
        {include: '#self-literal'}
      ]
    },
    logicals: {match: '\\b(?i:(and|in|not|or))\\b', name: 'keyword.other.ecl'},
    'numeric-literal': {
      match:
        '\\b(?<=[^$])((0(x|X)[0-9a-fA-F]+)|([0-9a-fA-F]+(x|X))|(0(o|O)[0-7]+)|(0(b|B)(0|1)+)|((0|1)+(b|B))|(([0-9]+(\\.[0-9]+)?))([eE]([+-]?)[0-9]+(\\.[0-9]+)?)?)\\b',
      name: 'constant.numeric.ecl'
    },
    operators: {
      match: '(>|>=|<|<=|<>|/|\\|+|-|=)',
      name: 'keyword.operator.ecl'
    },
    'qstring-single': {
      begin: "'",
      end: "\\'|(?:[^\\\\\\n]$)",
      name: 'string.single.ecl',
      patterns: [{include: '#string-character-escape'}]
    },
    real: {match: '\\b(?i)real(?-i)(4|8)\\b', name: 'entity.name.type.ecl'},
    'self-literal': {
      match: '\\b(?i:(self))\\b',
      name: 'constant.language.this.ecl'
    },
    'special-structures': {
      match:
        '\\b(?i:(endmacro|function|functionmacro|interface|macro|module|record|transform))\\b',
      name: 'entity.name.function.ecl'
    },
    string: {name: 'string.ecl', patterns: [{include: '#qstring-single'}]},
    'string-character-escape': {
      match:
        '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.ecl'
    },
    'type-number': {
      match:
        '\\b(?i:(data|string|qstring|varstring|varunicode|unicode|utf8))\\d+\\b',
      name: 'entity.name.type.ecl'
    },
    'type-rest': {
      match:
        '\\b(?i:(ascii|big_endian|boolean|data|decimal|ebcdic|grouped|integer|linkcounted|pattern|qstring|real|rule|set of|streamed|string|token|udecimal|unicode|utf8|unsigned|varstring|varunicode))\\b',
      name: 'entity.name.type.ecl'
    },
    types: {
      name: 'entity.name.type.ecl',
      patterns: [
        {include: '#real'},
        {include: '#decimal'},
        {include: '#unicode'},
        {include: '#integer'},
        {include: '#type-number'},
        {include: '#type-rest'}
      ]
    },
    unicode: {
      match: "\\b(?i:(d|u|q|v|x))(8)?(?='.*')",
      name: 'entity.name.type.ecl'
    }
  },
  scopeName: 'source.ecl'
}

export default grammar
