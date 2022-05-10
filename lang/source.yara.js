// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/infosec-intern/vscode-yara>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.yar', '.yara'],
  names: ['yara'],
  patterns: [
    {match: '//.*\\n', name: 'comment.line.double-slash.yara'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.yara'},
    {
      match: '(\\btrue\\b|\\bfalse\\b)',
      name: 'constant.language.boolean.true.yara'
    },
    {match: '\\b0x[a-fA-F0-9]+\\b', name: 'constant.numeric.hex.yara'},
    {match: '\\b[0-9]+(MB|KB)?\\b', name: 'constant.numeric.decimal.yara'},
    {match: '\\ball\\b', name: 'keyword.other.all.yara'},
    {match: '\\band\\b', name: 'keyword.other.logical.and.yara'},
    {match: '\\bany\\b', name: 'keyword.other.any.yara'},
    {match: '\\bat\\b', name: 'keyword.other.at.yara'},
    {
      match: '(\\&|\\||\\>\\>|\\<\\<|~|\\^)',
      name: 'keyword.operator.bitwise.yara'
    },
    {end: ':', match: '\\bcondition\\b', name: 'keyword.other.condition.yara'},
    {match: '\\bcontains\\b', name: 'keyword.other.contains.yara'},
    {match: '\\bdefined\\b', name: 'keyword.other.defined.yara'},
    {match: '\\bicontains\\b', name: 'keyword.other.icontains.yara'},
    {match: '\\biequals\\b', name: 'keyword.other.iequals.yara'},
    {match: '\\bstartswith\\b', name: 'keyword.other.startswith.yara'},
    {match: '\\bistartswith\\b', name: 'keyword.other.istartswith.yara'},
    {match: '\\bendswith\\b', name: 'keyword.other.endswith.yara'},
    {match: '\\biendswith\\b', name: 'keyword.other.iendswith.yara'},
    {match: '\\bfilesize\\b', name: 'keyword.other.filesize.yara'},
    {match: '\\bfor\\b', name: 'keyword.other.for.yara'},
    {match: '\\bimport\\b', name: 'keyword.other.import.yara'},
    {match: '\\bin\\b', name: 'keyword.other.in.yara'},
    {match: '\\binclude\\b', name: 'keyword.other.include.yara'},
    {match: '\\bmatches\\b', name: 'keyword.other.matches.yara'},
    {end: ':', match: '\\bmeta\\b', name: 'keyword.other.meta.yara'},
    {match: '\\bnone\\b', name: 'keyword.other.none.yara'},
    {match: '\\bnot\\b', name: 'keyword.other.logical.not.yara'},
    {match: '\\bof\\b', name: 'keyword.other.of.yara'},
    {match: '\\bor\\b', name: 'keyword.other.logical.or.yara'},
    {match: '(\\<=?|\\>=?|==|\\!=)', name: 'keyword.operator.relational.yara'},
    {match: '\\brule\\b', name: 'keyword.other.rule.yara'},
    {end: ':', match: '\\bstrings\\b', name: 'keyword.other.strings.yara'},
    {match: '\\bthem\\b', name: 'keyword.other.them.yara'},
    {
      match: '(\\$|\\#|\\@)[a-zA-Z0-9_]*',
      name: 'variable.parameter.source.yara'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.yara',
      patterns: [
        {match: '\\\\["\\\\nrt]', name: 'constant.character.escape.yara'},
        {match: '\\\\x[a-fA-F0-9]{2}', name: 'string.quoted.double.hex.yara'},
        {match: '\\\\.', name: 'invalid.illegal.missing.escape.yara'}
      ]
    },
    {
      match: '/.*?[^\\\\]/(i|c|x|t|s|m|p|w|n|J|U|d|b|e|q|x)*',
      name: 'string.regexp.yara'
    },
    {
      begin: '=\\s*?{',
      contentName: 'entity.name.hex.yara',
      end: '}',
      patterns: [
        {match: '//.*\\n', name: 'comment.line.double-slash.hex.yara'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.hex.yara'},
        {
          begin: '\\[',
          end: '\\]',
          name: 'entity.name.jump.hex.yara',
          patterns: [
            {match: '[0-9]', name: 'constant.numeric.jump.hex.yara'},
            {match: '\\-', name: 'entity.other.dash.jump.hex.yara'},
            {match: '.', name: 'invalid.illegal.jump.yara'}
          ]
        },
        {match: '[a-fA-F0-9]', name: 'string.other.hex.yara'},
        {match: '\\?', name: 'constant.other.placeholder.hex.yara'},
        {match: '[\\[\\]\\(\\)\\s|]', name: 'entity.other.special.hex.yara'},
        {match: '[^\\[\\]\\s]', name: 'invalid.illegal.hex.yara'}
      ]
    },
    {match: '(\\bascii\\b|\\bentrypoint\\b)', name: 'storage.type.other.yara'},
    {
      match:
        '(\\bbase64\\b|\\bbase64wide\\b|\\bfullword\\b|\\bglobal\\b|\\bnocase\\b|\\bprivate\\b|\\bwide\\b|\\bxor\\b)',
      name: 'storage.modifier.yara'
    },
    {
      match: '(\\bint8\\b|\\bint16\\b|\\bint32\\b)',
      name: 'storage.type.int.yara'
    },
    {
      match: '(\\bint8be\\b|\\bint16be\\b|\\bint32be\\b)',
      name: 'storage.type.intbe.yara'
    },
    {
      match: '(\\buint8\\b|\\buint16\\b|\\buint32\\b)',
      name: 'storage.type.uint.yara'
    },
    {
      match: '(\\buint8be\\b|\\buint16be\\b|\\buint32be\\b)',
      name: 'storage.type.uintbe.yara'
    }
  ],
  scopeName: 'source.yara'
}

export default grammar
