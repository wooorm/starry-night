// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/supercollider/language-supercollider>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['supercollider'],
  patterns: [
    {
      match:
        '\\b(arg|var|classvar|const|this|thisThread|thisMethod|thisFunction|thisFunctionDef|thisProcess|true|false|inf|nil)\\b',
      name: 'keyword.control.supercollider'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.supercollider',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.supercollider'}
      ]
    },
    {
      begin: "'",
      end: "'",
      name: 'entity.name.symbol.supercollider',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.supercollider'}
      ]
    },
    {match: '[a-z][a-zA-Z0-9_]*\\:', name: 'support.name.tag.supercollider'},
    {
      captures: {1: {name: 'entity.name.class.supercollider'}},
      match:
        '^\\s*\\+*\\s*([A-Z]{1}[a-zA-Z0-9_]*)\\s*\\:{1}\\s*([A-Z]{1}[a-zA-Z0-9_]*)\\s*\\{'
    },
    {
      captures: {1: {name: 'entity.name.class.supercollider'}},
      match: '^([A-Z_]{1}[a-zA-Z0-9_]*)[^a-zA-Z0-9_]'
    },
    {
      match: '\\|[a-zA-Z0-9\\#\\[\\]\\"\\_\\=\\.\\(\\)[[:space:]]\\,]+\\|',
      name: 'variable.parameter.function.supercollider'
    },
    {
      captures: {1: {name: 'entity.name.class.supercollider'}},
      match: '[^a-zA-Z0-9\\\\]([A-Z_]{1}[a-zA-Z0-9_]*)[^a-zA-Z0-9_]'
    },
    {match: '\\\\[a-zA-Z0-9\\_]+', name: 'entity.name.symbol.supercollider'},
    {
      captures: {1: {name: 'entity.name.function.supercollider'}},
      match: '^\\s*(\\**[a-z]{1}[a-zA-Z0-9_]+)\\s*\\{'
    },
    {match: '\\~[a-z][a-zA-Z0-9_]*', name: 'variable.language.supercollider'},
    {match: '\\/\\/.*', name: 'comment.single.supercollider'},
    {begin: '\\/\\*', end: '\\*\\/', name: 'comment.multiline.supercollider'},
    {
      match:
        '\\b(0[xX][0-9A-Fa-f](?>_?[0-9A-Fa-f])*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0[bB][01]+)\\b',
      name: 'constant.numeric.supercollider'
    }
  ],
  scopeName: 'source.supercollider'
}

export default grammar
