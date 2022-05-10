// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.tsv'],
  names: ['tsv'],
  patterns: [{include: '#main'}],
  repository: {
    field: {
      match: '(?:[^#:\\s]|(?<=\\t|:)#)[^:\\t]*',
      name: 'constant.other.field.generic-db'
    },
    main: {patterns: [{include: 'etc#comment'}, {include: '#record'}]},
    record: {
      begin: '^(?=\\s*[^#:\\s])',
      end: '$',
      name: 'meta.record.generic-db',
      patterns: [
        {include: 'etc#colon'},
        {include: 'etc#tab'},
        {include: '#field'}
      ]
    }
  },
  scopeName: 'source.generic-db'
}

export default grammar
