// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Whiley/WhileySyntaxBundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.whiley'],
  names: ['whiley'],
  patterns: [
    {begin: '//[^/]*', end: '$\\n?', name: 'comment.line.whiley'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.whiley'},
    {match: '\\b(false|true|null)\\b', name: 'constant.language.whiley'},
    {
      match: '\\b(function|method|property|type|variant)\\b',
      name: 'entity.name.function.whiley'
    },
    {
      captures: {
        1: {name: 'entity.name.class.whiley'},
        2: {name: 'variable.whiley'},
        3: {name: 'entity.name.class.whiley'},
        4: {name: 'variable.whiley'}
      },
      match: '^(import)\\s*([a-zA-Z0-9:]+)\\s*(with)\\s*([a-zA-Z_0-9]+)'
    },
    {
      captures: {
        1: {name: 'entity.name.class.whiley'},
        2: {name: 'variable.whiley'},
        3: {name: 'entity.name.class.whiley'},
        4: {name: 'variable.whiley'}
      },
      match: '^(import)\\s*([a-zA-Z0-9_]+)\\s*(from)\\s*([a-zA-Z0-9:]+)'
    },
    {
      captures: {
        1: {name: 'entity.name.class.whiley'},
        2: {name: 'variable.whiley'}
      },
      match: '^(import)\\s*([a-zA-Z0-9:]+)'
    },
    {
      match:
        '\\b(assert|assume|break|case|continue|debug|default|do|else|ensures|fail|for|if|requires|return|skip|switch|where|while)\\b',
      name: 'keyword.control.whiley'
    },
    {
      match: '\\b(all|in|is|new|no|old|some)\\b',
      name: 'keyword.operator.word.whiley'
    },
    {
      match:
        '\\b(bool|byte|export|final|int|native|private|protected|public|unsafe|void)\\b',
      name: 'keyword.other.whiley'
    },
    {match: '\\b(-)?[0-9.]+\\b', name: 'constant.numeric.whiley'},
    {match: '(&&|\\|\\||!|==>|<==>)', name: 'keyword.operator.logical.whiley'},
    {
      match: '(<=|<|>=|>|==|!=|\\+|-|\\*|/)',
      name: 'keyword.operator.arithmetic.whiley'
    },
    {match: '^package\\b', name: 'entity.name.class.whiley'},
    {
      begin: '"',
      end: '"',
      name: 'punctuation.definition.string.whiley',
      patterns: [{include: '#escaped-char'}]
    },
    {match: '\\b[_A-Z][_A-Z0-9]+\\b', name: 'variable.constant.whiley'},
    {match: '\\b[_a-zA-Z][_a-zA-Z0-9]*_t\\b', name: 'entity.name.type.whiley'},
    {match: '\\b[_a-zA-Z][_a-zA-Z0-9]*\\b', name: 'variable.whiley'}
  ],
  repository: {'escaped-char': {match: '\\\\.'}},
  scopeName: 'source.whiley'
}

export default grammar
