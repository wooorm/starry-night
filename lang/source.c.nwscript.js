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
  dependencies: ['source.c'],
  extensions: ['.nss'],
  injections: {
    'R:source.c.nwscript - (string | comment)': {
      patterns: [
        {
          match:
            '\\b(?:effect|itemproperty|location|object|string|talent|vector)\\b',
          name: 'support.type.nwscript.c'
        },
        {match: '\\b[A-Z_][A-Z0-9_]*\\b', name: 'support.constant.nwscript.c'}
      ]
    }
  },
  names: ['nwscript'],
  patterns: [{include: 'source.c'}],
  scopeName: 'source.c.nwscript'
}

export default grammar
