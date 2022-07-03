// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [
    '.crc32',
    '.md2',
    '.md4',
    '.md5',
    '.sha1',
    '.sha2',
    '.sha224',
    '.sha256',
    '.sha256sum',
    '.sha3',
    '.sha384',
    '.sha512'
  ],
  names: ['checksums', 'checksum', 'hash', 'hashes', 'sum', 'sums'],
  patterns: [{include: '#main'}],
  repository: {
    'bsd-style': {
      captures: {
        1: {name: 'keyword.operator.hash-function.${1:/downcase}.checksum'},
        2: {name: 'string.quoted.other.filename.checksum'},
        3: {name: 'punctuation.definition.string.begin.checksum'},
        4: {name: 'punctuation.definition.string.end.checksum'},
        5: {patterns: [{include: 'etc#eql'}]},
        6: {patterns: [{include: '#digest'}]}
      },
      match: '^\\s*(\\S+) ((\\().+(\\))) (=) (\\S+)\\s*$',
      name: 'meta.bsd-style.checksum'
    },
    digest: {
      patterns: [
        {include: 'etc#base64'},
        {include: 'etc#hexNoSign'},
        {match: '\\S+', name: 'invalid.illegal.bad-character.checksum'}
      ]
    },
    'gnu-style': {
      captures: {
        1: {patterns: [{include: '#digest'}]},
        2: {name: 'storage.modifier.binary-mode.checksum'},
        3: {name: 'string.unquoted.other.filename.checksum'}
      },
      match:
        '^\\s*(?=\\S{24})([A-Za-z0-9+/]=*|[A-Fa-f0-9]+) (?: |(\\*))(\\S.*)',
      name: 'meta.gnu-style.checksum'
    },
    isolated: {
      match:
        '(?ix) (?:^|\\G)\n( [A-F0-9]{32}  # MD5\n| [A-F0-9]{40}  # SHA-1\n| [A-F0-9]{56}  # SHA-224\n| [A-F0-9]{64}  # SHA-256\n| [A-F0-9]{96}  # SHA-384\n| [A-F0-9]{128} # SHA-512\n) \\s*$',
      name: 'constant.numeric.integer.int.hexadecimal.hex.checksum'
    },
    main: {
      patterns: [
        {include: '#bsd-style'},
        {include: '#gnu-style'},
        {include: '#isolated'}
      ]
    }
  },
  scopeName: 'text.checksums'
}

export default grammar
