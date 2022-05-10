// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.axs.erb', '.axi.erb'],
  names: ['netlinx+erb'],
  patterns: [{include: '#erb'}, {include: 'source.netlinx'}],
  repository: {
    erb: {
      begin: '<%',
      beginCaptures: {0: {name: 'punctuation.section.scope.netlinx.erb'}},
      end: '%>',
      endCaptures: {0: {name: 'punctuation.section.scope.netlinx.erb'}},
      name: 'meta.block.netlinx.erb',
      patterns: [{include: 'source.ruby'}]
    }
  },
  scopeName: 'source.netlinx.erb'
}

export default grammar
