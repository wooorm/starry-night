// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/pewulfman/Ligo-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mligo'],
  names: ['cameligo'],
  patterns: [
    {include: '#string'},
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#attribute'},
    {include: '#macro'},
    {include: '#letbinding'},
    {include: '#lambda'},
    {include: '#typedefinition'},
    {include: '#controlkeywords'},
    {include: '#numericliterals'},
    {include: '#operators'},
    {include: '#identifierconstructor'},
    {include: '#module'}
  ],
  repository: {
    attribute: {match: '\\[@.*\\]', name: 'keyword.control.attribute.mligo'},
    block_comment: {
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block.mligo'
    },
    controlkeywords: {
      match: '\\b(match|with|if|then|else|assert|failwith|begin|end|in)\\b',
      name: 'keyword.control.mligo'
    },
    identifierconstructor: {
      captures: {1: {name: 'variable.other.enummember.mligo'}},
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\s+'
    },
    lambda: {
      begin: '\\b(fun)\\b',
      beginCaptures: {1: {name: 'keyword.other.mligo'}},
      end: '(->)',
      endCaptures: {1: {name: 'keyword.operator.mligo'}}
    },
    letbinding: {
      captures: {
        1: {name: 'keyword.other.mligo'},
        2: {name: 'storage.modifier.mligo'},
        3: {name: 'entity.name.function.mligo'}
      },
      match: '\\b(let)\\b\\s*\\b(rec|)\\s*\\b([a-zA-Z$_][a-zA-Z0-9$_]*)'
    },
    line_comment: {match: '\\/\\/.*$', name: 'comment.block.mligo'},
    macro: {match: '^\\#[a-zA-Z]+', name: 'meta.preprocessor.mligo'},
    module: {
      captures: {
        1: {name: 'storage.class.mligo'},
        2: {name: 'storage.var.mligo'}
      },
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\.([a-z][a-zA-Z0-9_$]*)'
    },
    numericliterals: {
      match: '(\\+|\\-)?[0-9]+(n|tz|tez|mutez|)\\b',
      name: 'constant.numeric.mligo'
    },
    operators: {
      match:
        '\\s+(::|\\-|\\+|mod|land|lor|lxor|lsl|lsr|&&|\\|\\||>|<>|<=|=>|<|>)\\s+',
      name: 'keyword.operator.mligo'
    },
    string: {begin: '\\"', end: '\\"', name: 'string.quoted.double.mligo'},
    typedefinition: {match: '\\b(type)\\b', name: 'entity.name.type.mligo'}
  },
  scopeName: 'source.mligo'
}

export default grammar
