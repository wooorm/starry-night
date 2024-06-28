// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c++', 'source.objc'],
  extensions: ['.mm'],
  names: ['objective-c++', 'obj-c++', 'objc++', 'objectivec++'],
  patterns: [{include: 'source.c++'}, {include: 'source.objc'}],
  scopeName: 'source.objc++'
}

export default grammar
