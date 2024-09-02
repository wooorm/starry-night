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
  extensions: [],
  names: ['hosts-file', 'hosts'],
  patterns: [{include: '#main'}],
  repository: {
    host: {
      captures: {0: {patterns: [{include: 'etc#dot'}]}},
      match: '(?<=\\s|^|,)[^:\\s#,][^\\s#,]*',
      name: 'entity.name.host.domain.hosts'
    },
    legacy: {
      patterns: [
        {include: 'etc#commentSemi'},
        {include: '#legacy-dod'},
        {include: '#legacy-nic'}
      ]
    },
    'legacy-dod': {
      captures: {
        1: {name: 'storage.type.class.hosts'},
        10: {patterns: [{include: 'etc#colon'}]},
        11: {
          name: 'meta.list.protocols.hosts',
          patterns: [
            {
              captures: {0: {patterns: [{include: '#legacy-sym'}]}},
              match: '[^\\s,:]+',
              name: 'constant.other.protocol.hosts'
            },
            {include: 'etc#comma'}
          ]
        },
        12: {patterns: [{include: 'etc#colon'}]},
        2: {patterns: [{include: 'etc#colon'}]},
        3: {
          name: 'meta.list.addresses.hosts',
          patterns: [
            {include: 'etc#ipv4'},
            {include: 'etc#comma'},
            {include: '#legacy-host'}
          ]
        },
        4: {patterns: [{include: 'etc#colon'}]},
        5: {patterns: [{include: 'etc#comma'}, {include: '#host'}]},
        6: {patterns: [{include: 'etc#colon'}]},
        7: {
          name: 'meta.list.cpus.hosts',
          patterns: [
            {match: '[^\\s,:]+', name: 'constant.language.cpu-type.hosts'},
            {include: 'etc#comma'}
          ]
        },
        8: {patterns: [{include: 'etc#colon'}]},
        9: {
          name: 'meta.list.systems.hosts',
          patterns: [
            {
              match: '[^\\s,:]+',
              name: 'constant.language.operating-system.hosts'
            },
            {include: 'etc#comma'}
          ]
        }
      },
      match:
        '(?x) ^ \\s*\n(NET|GATEWAY|HOST|DOMAIN)              \\s*   # Record type\n(:)    \\s* ([^\\s:][^:\\r\\n]*)       \\s*   # IP address list\n(?:(:) \\s* ([^\\s:][^:\\r\\n]*)       \\s*)? # Name\n(?:(:) \\s* ([^\\s:][^:\\r\\n]*|(?=:)) \\s*)? # CPU type\n(?:(:) \\s* ([^\\s:][^:\\r\\n]*|(?=:)) \\s*)? # Operating systems\n(?:(:) \\s* ([^\\s:][^:\\r\\n]*|(?=:)) \\s*)? # Protocols\n(:)(?=\\s*(?:$|;))',
      name: 'meta.definition.${1:/downcase}.hosts.legacy'
    },
    'legacy-host': {
      patterns: [
        {
          begin: '\\s*(?=\\d)',
          end: '(?!\\G)',
          name: 'meta.host-number.unprefixed.arpa.hosts.legacy',
          patterns: [{include: '#legacy-host-innards'}]
        },
        {
          begin: '\\b(ARPA|RCC|CHAOS|LCS|SU)(?=$|\\s|;)',
          beginCaptures: {1: {name: 'entity.name.tag.network.hosts.legacy'}},
          end: '(?!\\G)',
          name: 'meta.host-number.prefixed.${1:/downcase}.hosts.legacy',
          patterns: [{include: '#legacy-host-innards'}]
        },
        {include: '#legacy-host-innards'}
      ]
    },
    'legacy-host-innards': {
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.int.octal.oct.hosts.legacy'}
          },
          match: '(?<=CHAOS)\\G\\s+([0-7]+)\\b'
        },
        {
          applyEndPatternLast: true,
          begin:
            '(?x) \\G (?=\n\t(?: (?<=LCS) \\s+ [0-7]+ (?:/[0-7]+)?   # LCS <S>/<H>\n\t|   (?<=SU)  \\s+ [0-7]+ (?:\\#[0-7]+)? # SU <S>#<H>\n\t) \\b(?!/|\\#)\n) \\s*',
          end: '(?!\\G)',
          patterns: [
            {
              match: '\\G\\d+',
              name: 'constant.numeric.integer.int.octal.oct.subnet-number.hosts.legacy'
            },
            {
              match: '(?!\\G)\\d+',
              name: 'constant.numeric.integer.int.octal.oct.host-number.hosts.legacy'
            },
            {include: '#legacy-sym'}
          ]
        },
        {
          captures: {
            1: {
              name: 'constant.numeric.integer.int.decimal.dec.host-number.hosts.legacy'
            },
            2: {patterns: [{include: '#legacy-sym'}]},
            3: {
              name: 'constant.numeric.integer.int.decimal.dec.imp-number.hosts.legacy'
            }
          },
          match:
            '(?:^|\\G|(?<!\\s),)(?:(?<=ARPA|RCC)\\s+|\\s*)\\b(\\d+)(?:(/)(\\d+))?\\b(?!/|#)'
        },
        {include: 'etc#comma'}
      ]
    },
    'legacy-nic': {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.class.hosts'},
            2: {name: 'entity.name.network.hosts'},
            3: {patterns: [{include: 'etc#comma'}]},
            4: {patterns: [{include: 'etc#intNoExp'}]}
          },
          match: '^\\s*(NET)\\s+([^\\s;,:]+)\\s*(,)\\s*(\\d+)(?=\\s*(?:$|;))',
          name: 'meta.definition.network.hosts.legacy'
        },
        {
          captures: {
            1: {name: 'storage.type.class.hosts'},
            10: {name: 'constant.language.status.hosts'},
            11: {patterns: [{include: 'etc#comma'}]},
            12: {name: 'constant.language.operating-system.hosts'},
            13: {patterns: [{include: 'etc#comma'}]},
            14: {name: 'constant.language.machine.hosts'},
            15: {patterns: [{include: 'etc#comma'}]},
            16: {name: 'meta.array.list.nicknames.hosts'},
            17: {patterns: [{include: '#legacy-sym'}]},
            18: {patterns: [{include: 'etc#comma'}, {include: '#host'}]},
            19: {patterns: [{include: '#legacy-sym'}]},
            2: {name: 'entity.name.host.hosts'},
            3: {patterns: [{include: 'etc#comma'}]},
            4: {patterns: [{include: '#legacy-host'}]},
            5: {name: 'meta.array.list.hosts'},
            6: {patterns: [{include: '#legacy-sym'}]},
            7: {patterns: [{include: '#legacy-host'}]},
            8: {patterns: [{include: '#legacy-sym'}]},
            9: {patterns: [{include: 'etc#comma'}]}
          },
          match:
            '(?x) ^\n\\s* (HOST) \\s+ ([^\\s,:]+) \\s* (,) \\s* # Name\n(?: ((?:[A-Z]+ \\s+)? \\d[^\\s,:\\[\\]]*)  # Host ID (single)\n|   ((\\[) ([^\\[\\]]+) (\\]))             # Host IDs (list)\n)\n(?:(,) ([A-Z]*))?   # Status\n(?:(,) ([^,\\s]*))? # System\n(?:(,) ([^,\\s]*))? # Machine\n(?:(,) ((\\[)([^\\[\\]]*)(\\])))? # Nicknames\n(?=\\s*(?:$|;))',
          name: 'meta.definition.host.hosts.legacy'
        }
      ]
    },
    'legacy-sym': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.slash.hosts.legacy'},
            2: {name: 'punctuation.separator.number-sign.hosts.legacy'}
          },
          match: '(/)|(#)',
          name: 'meta.separator.hosts.legacy'
        },
        {
          captures: {0: {name: 'brackethighlighter.square'}},
          match: '\\[',
          name: 'punctuation.section.square.bracket.begin.hosts.legacy'
        },
        {
          captures: {0: {name: 'brackethighlighter.square'}},
          match: '\\]',
          name: 'punctuation.section.square.bracket.end.hosts.legacy'
        }
      ]
    },
    loopback: {
      captures: {1: {name: 'punctuation.definition.ip-address.loopback'}},
      match: '(?<=\\s|^)(::)1(?=$|\\s)',
      name: 'constant.numeric.other.ip-address'
    },
    main: {patterns: [{include: '#legacy'}, {include: '#modern'}]},
    modern: {
      patterns: [
        {include: 'etc#comment'},
        {include: 'etc#ip'},
        {include: '#loopback'},
        {include: '#host'}
      ]
    }
  },
  scopeName: 'source.hosts'
}

export default grammar
