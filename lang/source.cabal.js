// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom-haskell/language-haskell>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cabal'],
  names: ['cabal-config', 'cabal'],
  patterns: [
    {
      captures: {1: {name: 'keyword.other'}, 2: {name: 'constant.numeric'}},
      match: '(version)\\W*:\\W*([\\d.]+)',
      name: 'version'
    },
    {
      captures: {1: {name: 'keyword.other'}},
      match: '(\\S+):[^/]',
      name: 'cabal-keyword'
    },
    {match: '&&', name: 'keyword.other'},
    {
      captures: {1: {name: 'keyword.other'}, 2: {name: 'constant.numeric'}},
      match: '([><=]+)\\s*([\\d.]+)',
      name: 'cabal-keyword'
    },
    {
      captures: {1: {name: 'entity.name.function'}, 2: {name: 'support.other'}},
      match:
        '(benchmark|common|executable|flag|source-repository|test-suite)\\s+(\\S+)',
      name: 'module-type'
    },
    {match: 'library', name: 'entity.name.function'},
    {match: '--.*\\n', name: 'comment'}
  ],
  scopeName: 'source.cabal'
}

export default grammar
