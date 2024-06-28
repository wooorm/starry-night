// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pike', '.pmod'],
  names: ['pike'],
  patterns: [
    {
      match: '\\b(public|nomask|private|optional|local|final|static)\\b',
      name: 'storage.modifier.pike'
    },
    {
      match:
        '\\b(import|inherit|this|foreach|break|continue|while|do|return|if|else|case|switch)\\b',
      name: 'keyword.control.pike'
    },
    {
      match:
        '\\b(constant|int|float|string|array|mapping|multiset|program|class|object|mixed|void)\\b',
      name: 'storage.type.pike'
    },
    {match: '\\b(UNDEFINED)\\b', name: 'constant.language.pike'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.pike'
    },
    {begin: '"', end: '"', name: 'string.quoted.double.pike'},
    {begin: "'", end: "'", name: 'string.quoted.single.pike'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.pike'},
    {match: '//.*$', name: 'comment.line.double-slash.pike'},
    {match: '^[ \\t]*#[a-zA-Z]+', name: 'other.preprocessor.pike'}
  ],
  scopeName: 'source.pike'
}

export default grammar
