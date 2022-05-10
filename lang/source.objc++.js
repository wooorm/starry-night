// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.mm'],
  names: ['objective-c++', 'obj-c++', 'objc++', 'objectivec++'],
  patterns: [{include: 'source.c++'}, {include: 'source.objc'}],
  scopeName: 'source.objc++'
}

export default grammar
