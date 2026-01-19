// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Deducteam/sublime-lambdapi>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['lambdapi'],
  patterns: [
    {include: '#comments'},
    {include: '#tactics'},
    {include: '#signature-commands'},
    {include: '#warning'},
    {include: '#misc'},
    {include: '#keywords'},
    {include: '#external'}
  ],
  repository: {
    comments: {
      patterns: [
        {begin: '//', end: '$', name: 'comment.line.double-slash.lp'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.lp'}
      ]
    },
    external: {
      captures: {
        1: {name: 'storage.type.lp'},
        2: {name: 'entity.name.function.theorem.lp'}
      },
      match: '(open|require)\\s+(([^\\s+]*\\s+)*$)'
    },
    keywords: {
      match:
        '\\b(as|associative|begin|builtin|coerce_rule|commutative|constant|debug|end|flag|in|infix|injective|left|notation|off|on|opaque|postfix|prefix|private|protected|prover|prover_timeout|quantifier|right|sequential|TYPE|unif_rule)\\b',
      name: 'storage.modifier.lp'
    },
    misc: {
      match: '\\b(assert|assertnot|compute|print|proofterm|search|type)\\b',
      name: 'keyword.control.query.lp'
    },
    'signature-commands': {
      captures: {
        1: {name: 'storage.type.lp'},
        2: {name: 'entity.name.function.theorem.lp'}
      },
      match: '(coerce_rule|inductive|rule|symbol|unif_rule|with)\\s+([^\\s+]*)'
    },
    tactics: {
      match:
        '\\b(apply|assume|change|eval|focus|generalize|have|induction|orelse|refine|reflexivity|remove|repeat|rewrite|set|simplify|solve|symmetry|try|why3)\\b',
      name: 'keyword.control.tactics.lp'
    },
    warning: {
      match: '\\b(abort|admit|admitted|fail)\\b',
      name: 'keyword.control.warning.lp'
    }
  },
  scopeName: 'source.lp'
}

export default grammar
