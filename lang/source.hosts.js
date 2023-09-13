// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: [],
  names: ['hosts-file', 'hosts'],
  patterns: [{include: '#main'}],
  repository: {
    host: {
      captures: {0: {patterns: [{include: 'etc#dot'}]}},
      match: '(?<=\\s|^)[^:\\s#][^\\s#]*',
      name: 'entity.name.host.domain.hosts'
    },
    loopback: {
      captures: {1: {name: 'punctuation.definition.ip-address.loopback'}},
      match: '(?<=\\s|^)(::)1(?=$|\\s)',
      name: 'constant.numeric.other.ip-address'
    },
    main: {
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
