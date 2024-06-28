// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/boogie-org/boogie-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bpl'],
  names: ['boogie'],
  patterns: [
    {include: '#constants'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#comments'},
    {
      begin: '{\\s*:',
      end: '}',
      name: 'string.other.attribute.boogie',
      patterns: [{include: '$self'}]
    },
    {match: '(\\s*([^: ]+):(\n|\r))', name: 'entity.name.block.boogie'},
    {match: ';', name: 'punctuation.terminator.boogie'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '(//).*$\\n?', name: 'comment.line.double-slash.boogie'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.boogie'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '(?<![\\w$.])(true|false)(?![\\w$.])',
          name: 'constant.language.boolean.boogie'
        },
        {
          match: '(?<![\\w$.])[0-9]+(?![\\w$.])',
          name: 'constant.numeric.integer.boogie'
        },
        {
          match: '(?<![\\w$.])[0-9]+bv[0-9]+(?![\\w$.])',
          name: 'constant.numeric.bitvector.boogie'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(axiom|const|function|implementation|procedure|type|var)\\b',
          name: 'storage.type.declaration.boogie'
        },
        {
          match:
            '(?<![\\w$.])(complete|extends|finite|free|unique|where)(?![\\w$.])',
          name: 'storage.modifier.boogie'
        },
        {
          match: '\\b(requires|ensures|modifies|returns|invariant)\\b',
          name: 'keyword.other.specification.boogie'
        },
        {
          match: '\\b(break|call|async|par|while|goto|return)\\b',
          name: 'keyword.control.boogie'
        },
        {
          match: '\\b(if|then|else)\\b',
          name: 'keyword.control.conditional.boogie'
        },
        {
          match: '\\b(assert|assume|havoc|yield)\\b',
          name: 'keyword.control.statement.boogie'
        },
        {match: '(:=)', name: 'keyword.operator.assignment.boogie'},
        {match: '\\bold\\b', name: 'keyword.other.old.boogie'},
        {
          match: '\\b(forall|exists|lambda)\\b',
          name: 'keyword.other.logical.quantifier.boogie'
        },
        {match: '::', name: 'keyword.operator.logical.boogie'},
        {match: '!', name: 'keyword.operator.logical.unary.boogie'},
        {
          match: '<==>|==>|<==|&&|\\|\\|',
          name: 'keyword.operator.logical.binary.boogie'
        },
        {
          match: '==|!=|<=|>=|<:|<|>',
          name: 'keyword.operator.comparison.boogie'
        }
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.boogie',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.boogie'}]
    }
  },
  scopeName: 'source.boogie'
}

export default grammar
