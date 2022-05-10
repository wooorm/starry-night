// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/hirosystems/clarity.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.clar'],
  names: ['clarity'],
  patterns: [
    {include: '#comment'},
    {include: '#datatype'},
    {include: '#keyword'},
    {include: '#number'},
    {include: '#string'},
    {include: '#define'},
    {include: '#lang-func'},
    {include: '#tuple-key'}
  ],
  repository: {
    args: {
      begin: '(?x)\n  (?<=^|[(]) \\s*\n  ([a-z][a-zA-Z0-9_-]+) \\s*\n',
      beginCaptures: {0: {name: 'variable.parameter.clarity'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.end.clarity'}},
      patterns: [
        {include: '#datatype'},
        {include: '#tuple-key'},
        {include: '#number'}
      ]
    },
    comment: {
      match: '(?x) (?<=^|[()\\[\\]{}",\'`;\\s]) (;) .* $',
      name: 'comment.line.semicolon.clarity'
    },
    datatype: {
      match:
        '(?x)\n(?<=^|[\\s:(){},])\n(tuple|list|response|optional|buff|string-ascii|string-utf8|principal|bool|int|uint)\n(?=[\\s(){},])',
      name: 'storage.type.clarity'
    },
    define: {
      patterns: [
        {include: '#define-func'},
        {include: '#define-var'},
        {include: '#set-func'}
      ]
    },
    'define-func': {
      begin:
        '(?x)\n  (?<=^|[(]) \\s*\n  (define-(?:public|private|read-only)) \\s+\n  (\\() \\s*\n  ([a-z][a-zA-Z0-9_-]+) \\s*\n',
      beginCaptures: {
        1: {name: 'storage.type.clarity'},
        2: {name: 'punctuation.section.begin.clarity'},
        3: {name: 'entity.name.function.clarity'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.end.clarity'}},
      patterns: [{include: '#args'}]
    },
    'define-var': {
      captures: {
        1: {name: 'storage.type.clarity'},
        2: {name: 'variable.other.clarity'}
      },
      match:
        '(?x)\n  (?<=^[(]) \\s*\n  (define-(?:constant|data-var|map|fungible-token|non-fungible-token|trait)) \\s+\n  ([a-zA-Z][a-zA-Z0-9_-]+)\n'
    },
    'escape-char': {match: '\\\\.', name: 'constant.character.escape.clarity'},
    keyword: {
      match:
        '(?x)\n  (?<=^|[\\s:(){},]) \n  (?:block-height|burn-block-height|contract-caller|false|is-in-regtest|none|stx-liquid-supply|true|tx-sender)\n  (?=[\\s(){},])\n',
      name: 'constant.language.clarity'
    },
    'lang-func': {
      match:
        '(?x)\n  (?<=^|[(]) \\s*\n  (\n    and|append|as-contract|as-max-len\\?|asserts!|at-block|begin|concat|contract-call\\?|contract-of|\n    default-to|element-at|err|filter|fold|ft-burn\\?|ft-get-balance|ft-get-supply|ft-mint\\?|ft-transfer\\?|\n    get|get-block-info\\?|hash160|if|impl-trait|index-of|is-eq|is-err|is-none|is-ok|is-some|keccak256|\n    len|let|list|log2|map|map-delete|map-get\\?|map-insert|map-set|match|merge|mod|nft-burn\\?|nft-get-owner\\?|\n    nft-mint\\?|nft-transfer\\?|not|ok|or|pow|principal-of\\?|print|secp256k1-recover\\?|secp256k1-verify|sha256|\n    sha512|sha512/256|some|sqrti|stx-burn\\?|stx-get-balance|stx-transfer\\?|to-int|to-uint|try!|unwrap-err-panic|\n    unwrap-err!|unwrap-panic|unwrap!|var-get|var-set|xor\n  ) \\s+\n',
      name: 'keyword.control.clarity'
    },
    number: {
      match:
        "(?x)\n  (?<=^|[\\s:(){},])\n  \\'[0-9A-Z]{28,41}(:?\\.[a-zA-Z][a-zA-Z0-9\\-]+){0,2}|\n  0x[0-9a-f]{2,}|\n  u[0-9]+|\n  [0-9]+\n  (?=[\\s(){},]|$)\n",
      name: 'constant.numeric.clarity'
    },
    'set-func': {
      begin:
        '(?x)\n  (?<=^|[(]) \\s*\n  (var-get|var-set|map-get\\?|map-set|map-insert|get) \\s+\n  ([a-z][a-zA-Z0-9_-]+) \\s*\n',
      beginCaptures: {
        1: {name: 'keyword.control.clarity'},
        2: {name: 'variable.other.clarity'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.end.clarity'}},
      patterns: [
        {include: '#lang-func'},
        {include: '#tuple-key'},
        {include: '#number'}
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.clarity'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.clarity'}},
      name: 'string.quoted.double.clarity',
      patterns: [{include: '#escape-char'}]
    },
    'tuple-key': {
      match: '(?x)\n  ([a-z][a-zA-Z0-9_-]+)(?=:)\n',
      name: 'entity.name.type.clarity'
    }
  },
  scopeName: 'source.clar'
}

export default grammar
