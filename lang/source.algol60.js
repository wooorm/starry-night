// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/PolariTOON/language-algol60>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.alg'],
  names: ['algol'],
  patterns: [
    {include: '#comments'},
    {include: '#operators'},
    {include: '#separators'},
    {include: '#groups'},
    {include: '#keywords'},
    {include: '#constants'},
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#identifiers'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '\\bcomment\\b',
          beginCaptures: {0: {name: 'keyword.control.algol60'}},
          contentName: 'comment.block.algol60',
          end: '(?=;)'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '\\bfalse\\b', name: 'constant.language.false.algol60'},
        {match: '\\btrue\\b', name: 'constant.language.true.algol60'},
        {match: '\\bBoolean\\b', name: 'storage.type.bool.algol60'},
        {match: '\\binteger\\b', name: 'storage.type.int.algol60'},
        {match: '\\breal\\b', name: 'storage.type.re.algol60'},
        {match: '\\bstring\\b', name: 'storage.type.str.algol60'},
        {match: '\\blabel\\b', name: 'storage.type.lbl.algol60'},
        {
          match:
            '\\b(abs|arctan|cos|entier|epsilon|exp|fault|iabs|inchar|ininteger|inreal|length|ln|maxint|maxreal|minreal|outchar|outinteger|outreal|outstring|outterminator|sign|sin|sqrt|stop)\\b',
          name: 'variable.language.function.algol60'
        }
      ]
    },
    groups: {
      patterns: [
        {match: '\\(|\\)', name: 'meta.brace.round.algol60'},
        {match: '\\[|\\]', name: 'meta.brace.square.algol60'}
      ]
    },
    identifiers: {
      patterns: [
        {
          match: '\\b[A-Za-z][0-9A-Za-z]*\\b',
          name: 'variable.other.identifier.algol60'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(array|begin|do|else|end|for|go|goto|if|own|procedure|step|switch|then|to|until|value|while)\\b',
          name: 'keyword.control.algol60'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match:
            '\\b(\\+|−|-)?([0-9]+(\\.[0-9]+)?((⏨|e)(\\+|−|-)?[0-9]+)?|\\.[0-9]+((⏨|e)(\\+|−|-)?[0-9]+)?|⏨(\\+|−|-)?[0-9]+)\\b',
          name: 'constant.numeric.decimal.algol60'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '=|≠|<>|<|≥|>=|>|≤|<=',
          name: 'keyword.operator.relational.algol60'
        },
        {
          match: '≡|<=>|⊃|=>|∨|\\\\/|∧|/\\\\|¬|~',
          name: 'keyword.operator.logical.algol60'
        },
        {match: '≔|:=', name: 'keyword.operator.assignment.algol60'},
        {
          match: '\\+|−|-|×|\\*|/|÷|//|↑|\\*\\*',
          name: 'keyword.operator.arithmetic.algol60'
        }
      ]
    },
    separators: {
      patterns: [
        {match: ';', name: 'punctuation.separator.semicolon.algol60'},
        {match: ',', name: 'punctuation.separator.comma.algol60'},
        {match: ':', name: 'punctuation.separator.colon.algol60'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '⸢|`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.algol60'}
          },
          end: "⸣|'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.algol60'}},
          name: 'string.quoted.compound.algol60',
          patterns: [{include: '#strings'}]
        }
      ]
    }
  },
  scopeName: 'source.algol60'
}

export default grammar
