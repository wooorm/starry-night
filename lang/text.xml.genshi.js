/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.kid'],
  names: ['genshi', 'xml+genshi', 'xml+kid'],
  patterns: [
    {begin: '<!--\\s*!', end: '-->', name: 'comment.block.xml.genshi'},
    {
      begin: '(?<!\\$)\\$\\{',
      end: '\\}',
      name: 'source.python.embedded.genshi.expression.full',
      patterns: [{include: 'source.python'}]
    },
    {
      match: '(?<!\\$)\\$([a-zA-Z][a-zA-Z0-9_\\.]*)',
      name: 'source.python.embedded.genshi.expression.short'
    },
    {include: 'text.xml'}
  ],
  scopeName: 'text.xml.genshi'
}

export default grammar
