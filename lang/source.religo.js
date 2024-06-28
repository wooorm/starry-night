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
  extensions: ['.religo'],
  names: ['reasonligo'],
  patterns: [
    {include: '#string'},
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#attribute'},
    {include: '#macro'},
    {include: '#letbinding'},
    {include: '#typedefinition'},
    {include: '#controlkeywords'},
    {include: '#numericliterals'},
    {include: '#operators'},
    {include: '#identifierconstructor'},
    {include: '#module'}
  ],
  repository: {
    attribute: {match: '\\[@.*\\]', name: 'keyword.control.attribute.religo'},
    block_comment: {begin: '/\\*', end: '\\*\\/', name: 'comment.block.religo'},
    controlkeywords: {
      match: '\\b(switch|if|else|assert|failwith)\\b',
      name: 'keyword.control.religo'
    },
    identifierconstructor: {
      captures: {1: {name: 'variable.other.enummember.religo'}},
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\s+'
    },
    letbinding: {
      captures: {
        1: {name: 'keyword.other.religo'},
        2: {name: 'storage.modifier.religo'},
        3: {name: 'entity.name.function.religo'}
      },
      match: '\\b(let)\\b\\s*\\b(rec|)\\s*\\b([a-zA-Z$_][a-zA-Z0-9$_]*)'
    },
    line_comment: {match: '\\/\\/.*$', name: 'comment.block.religo'},
    macro: {match: '^\\#[a-zA-Z]+', name: 'meta.preprocessor.religo'},
    module: {
      captures: {
        1: {name: 'storage.class.religo'},
        2: {name: 'storage.var.religo'}
      },
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\.([a-z][a-zA-Z0-9_$]*)'
    },
    numericliterals: {
      match: '(\\+|\\-)?[0-9]+(n|tz|tez|mutez|)\\b',
      name: 'constant.numeric.religo'
    },
    operators: {
      match:
        '\\s+(\\-|\\+|mod|land|lor|lxor|lsl|lsr|&&|\\|\\||>|!=|<=|=>|<|>)\\s+',
      name: 'keyword.operator.religo'
    },
    string: {begin: '\\"', end: '\\"', name: 'string.quoted.double.religo'},
    typedefinition: {match: '\\b(type)\\b', name: 'entity.name.type.religo'}
  },
  scopeName: 'source.religo'
}

export default grammar
