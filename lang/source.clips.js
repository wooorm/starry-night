// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.clp'],
  names: ['clips'],
  patterns: [
    {
      begin: ';',
      captures: {0: {name: 'punctuation.definition.comment.clips'}},
      end: '$\n?',
      name: 'comment.line.double-slash.clips'
    },
    {
      match:
        '\\b(type|default|allowed-values|slot|not|or|and|assert|retract|gensym|printout|declare|salience|modify|export)\\b',
      name: 'keyword.control.clips'
    },
    {match: '=>', name: 'constant.language.clips'},
    {
      captures: {1: {name: 'keyword.clips'}, 2: {name: 'variable.parameter'}},
      match: '(\\?)([a-zA-Z0-9_\\-]*)',
      name: 'meta.function.clips'
    },
    {
      captures: {
        2: {name: 'entity.name.function.clips'},
        3: {name: 'variable.clips'}
      },
      match:
        '(^.*(defrule|deffacts|defmodule|deftemplate)[ \\t]+)([a-zA-Z0-9_\\-]+)'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.other.color.rgb-value.css'
    },
    {match: '(<-|~|%)', name: 'constant.language.clips'},
    {
      match: '(|=|>|\\+|\\*|\\/|~|%|neq|eq)',
      name: 'entity.name.function.clips'
    },
    {captures: {2: {name: 'entity.name.function.clips'}}, match: '(\\()(\\-)'}
  ],
  scopeName: 'source.clips'
}

export default grammar
