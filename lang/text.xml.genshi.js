/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.python', 'text.xml'],
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
