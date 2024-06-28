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
  extensions: ['.ligo'],
  names: ['ligolang'],
  patterns: [
    {include: '#string'},
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#attribute'},
    {include: '#macro'},
    {include: '#controlkeywords'},
    {include: '#function'},
    {include: '#operators'},
    {include: '#typedefinition'},
    {include: '#module'},
    {include: '#identifierconstructor'},
    {include: '#constorvar'},
    {include: '#numericliterals'}
  ],
  repository: {
    attribute: {match: '\\[@.*\\]', name: 'keyword.control.attribute.ligo'},
    block_comment: {begin: '\\(\\*', end: '\\*\\)', name: 'comment.block.ligo'},
    constorvar: {
      captures: {1: {name: 'keyword.other.ligo'}},
      match: '\\b(const|var)\\b'
    },
    controlkeywords: {
      match:
        '\\b(case|with|if|then|else|assert|failwith|begin|end|in|is|from|skip|block|contains|to|step|of|while|for|remove)\\b',
      name: 'keyword.control.ligo'
    },
    function: {
      captures: {
        1: {name: 'keyword.other.ligo'},
        2: {name: 'entity.name.function.ligo'}
      },
      match: '\\b(function)\\b\\s*\\b([a-zA-Z$_][a-zA-Z0-9$_]*)'
    },
    identifierconstructor: {
      captures: {1: {name: 'variable.other.enummember.ligo'}},
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\s+'
    },
    line_comment: {match: '\\/\\/.*$', name: 'comment.block.ligo'},
    macro: {match: '^\\#[a-zA-Z]+', name: 'meta.preprocessor.ligo'},
    module: {
      captures: {
        1: {name: 'storage.class.ligo'},
        2: {name: 'storage.var.ligo'}
      },
      match: '\\b([A-Z][a-zA-Z0-9_$]*)\\.([a-z][a-zA-Z0-9_$]*)'
    },
    numericliterals: {
      match: '(\\+|\\-)?[0-9]+(n|tz|tez|mutez|)\\b',
      name: 'constant.numeric.ligo'
    },
    operators: {
      match:
        '\\s+(\\-|\\+|mod|land|lor|lxor|lsl|lsr|&&|\\|\\||>|=/=|<=|=>|<|>)\\s+',
      name: 'keyword.operator.ligo'
    },
    string: {begin: '\\"', end: '\\"', name: 'string.quoted.double.ligo'},
    typedefinition: {match: '\\b(type)\\b', name: 'entity.name.type.ligo'}
  },
  scopeName: 'source.ligo'
}

export default grammar
