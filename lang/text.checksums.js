// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
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
      begin:
        '(?ix) (?:^|\\G) \\s*\n(?=[-/A-Z0-9]+\\s*\\(.+?\\)\\s*=\\s*(?:[A-F0-9]+|[A-Za-z0-9+/=]{4,})\\s*$)\n(?=\n\t(?:CRC-?32            \\b .+?=\\s* (?:[A-F0-9]{8}   | [A-Za-z0-9+/=]{12}  )\n\t| MD[245]             \\b .+?=\\s* (?:[A-F0-9]{32}  | [A-Za-z0-9+/=]{44}  )\n\t| MD6                 \\b .+?=\\s* (?:[A-F0-9]{128} | [A-Za-z0-9+/=]{172} )\n\t| SHA-?[01]           \\b .+?=\\s* (?:[A-F0-9]{40}  | [A-Za-z0-9+/=]{56}  )\n\t| SHA-?224            \\b .+?=\\s* (?:[A-F0-9]{56}  | [A-Za-z0-9+/=]{76}  )\n\t| SHA-?256            \\b .+?=\\s* (?:[A-F0-9]{64}  | [A-Za-z0-9+/=]{88}  )\n\t| SHA-?384            \\b .+?=\\s* (?:[A-F0-9]{96}  | [A-Za-z0-9+/=]{128} )\n\t| SHA-?512            \\b .+?=\\s* (?:[A-F0-9]{128} | [A-Za-z0-9+/=]{172} )\n\t| SHA-?512/224        \\b .+?=\\s* (?:[A-F0-9]{56}  | [A-Za-z0-9+/=]{76}  )\n\t| SHA-?512/256        \\b .+?=\\s* (?:[A-F0-9]{64}  | [A-Za-z0-9+/=]{88}  )\n\t| SHA3-?224           \\b .+?=\\s* (?:[A-F0-9]{56}  | [A-Za-z0-9+/=]{76}  )\n\t| SHA3-?256           \\b .+?=\\s* (?:[A-F0-9]{64}  | [A-Za-z0-9+/=]{88}  )\n\t| SHA3-?384           \\b .+?=\\s* (?:[A-F0-9]{96}  | [A-Za-z0-9+/=]{128} )\n\t| SHA3-?512           \\b .+?=\\s* (?:[A-F0-9]{128} | [A-Za-z0-9+/=]{172} )\n\t| SHAKE-?128          \\b .+?=\\s* (?:[A-F0-9]{64}  | [A-Za-z0-9+/=]{88}  )\n\t| SHAKE-?256          \\b .+?=\\s* (?:[A-F0-9]{128} | [A-Za-z0-9+/=]{172} )\n\t| (?:RMD|RIPEMD-?)128 \\b .+?=\\s* (?:[A-F0-9]{32}  | [A-Za-z0-9+/=]{44}  )\n\t| (?:RMD|RIPEMD-?)160 \\b .+?=\\s* (?:[A-F0-9]{40}  | [A-Za-z0-9+/=]{56}  )\n\t| (?:RMD|RIPEMD-?)256 \\b .+?=\\s* (?:[A-F0-9]{64}  | [A-Za-z0-9+/=]{88}  )\n\t| (?:RMD|RIPEMD-?)320 \\b .+?=\\s* (?:[A-F0-9]{80}  | [A-Za-z0-9+/=]{108} )\n\t| SHA-?2              \\b .*? \\b  (?:[A-F0-9]{56}  | [A-F0-9]{64}|[A-F0-9]{96}|[A-F0-9]{128})\n\t| SHA-?3              \\b .*? \\b [A-F0-9]+\n\t) \\s* $\n) ',
      end: '\\b([A-Fa-f0-9]+)(?=\\s*$)|(?=$)',
      endCaptures: {
        1: {name: 'constant.numeric.integer.int.hexadecimal.hex.checksum'}
      },
      name: 'meta.bsd-style.checksum',
      patterns: [
        {
          match: '\\G([-/A-Za-f0-9]+)(?=\\s|\\()',
          name: 'keyword.operator.hash-function.${1:/downcase}.checksum'
        },
        {
          begin: '(\\()',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.checksum'},
            1: {name: 'brackethighlighter.round.checksum'}
          },
          end: '(\\))(?=\\s*=\\s*[A-Fa-f0-9]+\\s*$)|(?=$)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.checksum'},
            1: {name: 'brackethighlighter.round.checksum'}
          },
          name: 'string.quoted.other.filename.checksum'
        },
        {include: 'etc#eql'}
      ]
    },
    digest: {
      patterns: [
        {include: 'etc#base64'},
        {include: 'etc#hexNoSign'},
        {match: '\\S+', name: 'invalid.illegal.bad-character.checksum'}
      ]
    },
    'geo-style': {
      captures: {
        1: {name: 'keyword.operator.encryption-prefix.${2:/downcase}.checksum'},
        3: {patterns: [{include: 'etc#colon'}]},
        4: {patterns: [{include: 'etc#base64'}]},
        5: {name: 'constant.other.password.checksum'}
      },
      match:
        '(?:^|\\G)\\s*(((?:crypt|digest)[1-9]|plain)(:))(?:(?<=\\d:)([A-Za-z0-9+/=]{4,})|(?<=n:)(\\S+))(?=\\s|$)',
      name: 'meta.geo-style.checksum'
    },
    'gnu-style': {
      captures: {
        1: {patterns: [{include: '#digest'}]},
        2: {name: 'storage.modifier.binary-mode.checksum'},
        3: {name: 'storage.modifier.bitwise-mode.checksum'},
        4: {name: 'string.unquoted.other.filename.checksum'}
      },
      match:
        '^\\s*(?=\\S{24})([A-Za-z0-9+/]=*|[A-Fa-f0-9]+)(?:[ \\t](?: |(\\*)|(\\^))?|(?:\\t* \\t*){3,}+)(\\S.*)',
      name: 'meta.gnu-style.checksum'
    },
    isolated: {
      match:
        '(?ix) (?:^|\\G)\n( [A-F0-9]{8}   # CRC-32\n| [A-F0-9]{32}  # MD2 MD4 MD5 RMD128\n| [A-F0-9]{40}  # SHA-1 RMD160\n| [A-F0-9]{56}  # SHA-224 SHA-512/224 SHA3-224\n| [A-F0-9]{64}  # SHA-256 SHA-512/256 SHA3-256 SHAKE128 RMD256\n| [A-F0-9]{80}  # RMD320\n| [A-F0-9]{96}  # SHA-384 SHA3-384\n| [A-F0-9]{128} # SHA-512 SHA3-512 SHAKE256 MD6\n) \\s*$',
      name: 'constant.numeric.integer.int.hexadecimal.hex.checksum'
    },
    main: {
      patterns: [
        {include: '#bsd-style'},
        {include: '#gnu-style'},
        {include: '#geo-style'},
        {include: '#isolated'}
      ]
    }
  },
  scopeName: 'text.checksums'
}

export default grammar
