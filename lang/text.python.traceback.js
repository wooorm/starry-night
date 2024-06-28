// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/MagicStack/MagicPython>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.python'],
  extensions: ['.pytb'],
  names: ['python-traceback'],
  patterns: [
    {
      captures: {
        1: {name: 'string.python.traceback'},
        2: {name: 'constant.numeric.python.traceback'},
        3: {name: 'entity.name.function.python.traceback'}
      },
      match: '^  File ("[^"]+"), line (\\d+)(?:, in (.+))?$'
    },
    {
      captures: {1: {patterns: [{include: 'source.python'}]}},
      match: '^    (.+)$'
    },
    {
      captures: {
        1: {name: 'entity.name.type.class.python.traceback'},
        2: {name: 'string.python.traceback'}
      },
      match: '^([^\\s:]+):(?: (.+))?$'
    }
  ],
  scopeName: 'text.python.traceback'
}

export default grammar
