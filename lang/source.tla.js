// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tla'],
  names: ['tla'],
  patterns: [
    {match: '\\\\\\*.*$', name: 'comment.line.slash-star'},
    {begin: '\\(\\*', end: '\\*\\)', name: 'comment.block'},
    {match: '\\={4,}', name: 'markup.other.startbreak'},
    {match: '={4,}', name: 'markup.other.endbreak'},
    {
      match:
        '\\b(\\\\h[0-9a-fA-F]+|\\\\o[0-9]+|\\\\b[01]+|\\d+\\.\\d+|\\d+)\\b',
      name: 'constant.numeric'
    },
    {match: '\\b(BOOLEAN|FALSE|STRING|TRUE)\\b', name: 'constant.language.tla'},
    {match: '\\b==\\b', name: 'keyword.operator.definition.tla'},
    {
      match: '(\\/\\\\|\\\\\\/|\\=>|<\\=>|\\|\\=|\\=\\||\\|\\-|\\-\\||~)',
      name: 'keyword.operator.logic.tla'
    },
    {
      match: '<\\=|>\\=|\\=|<|>|\\/\\=|\\#',
      name: 'keyword.operator.comparison.tla'
    },
    {match: '\\b=\\b', name: 'keyword.operator.assignment.tla'},
    {
      match: '(\\\\EE|\\\\AA)',
      name: 'keyword.operator.temporal.quantification.tla'
    },
    {match: '(\\\\E|\\\\A)', name: 'keyword.operator.quantification.tla'},
    {match: '(\\\\notin|:)', name: 'keyword.operator.sets.tla'},
    {match: '(\\|\\->|\\->)', name: 'keyword.operator.functions.tla'},
    {
      match:
        '\\\\(approx|asymp|bigcirc|bullet|cap|cdot|circ|cong|cup|div|doteq|equiv|geq|gg|in|intersect|land|leq|ll|lor|o|odot|ominus|oplus|oslash|otimes|prec|preceq|propto|sim|simeq|sqcap|sqcup|sqsubset|sqsubseteq|sqsupset|sqsupseteq|star|subset|subseteq|succ|succeq|supset|supseteq|union|uplus|wr)\\b',
      name: 'keyword.operator.latex.tla'
    },
    {
      match: '\\b(\\+|\\-|\\*|\\/){1}\\b',
      name: 'keyword.operator.arithmetic.tla'
    },
    {
      match: '(\\[\\]|\\<\\>|\\-\\+\\->)',
      name: 'keyword.operator.temporal.tla'
    },
    {include: '#reserved-words'},
    {begin: '"', end: '"', name: 'string.quoted.double.tla'},
    {begin: "';\n\t\t\tend = '", name: 'string.quoted.single.tla'},
    {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.definition.list.begin.tla'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.list.end.tla'}},
      name: 'meta.structure.list.tla',
      patterns: [
        {
          begin: '(?<=\\[|\\,)\\s*(?![\\],])',
          contentName: 'meta.structure.list.item.tla',
          end: '\\s*(?:(,)|(?=\\]))',
          endCaptures: {1: {name: 'punctuation.separator.list.tla'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.tuple.begin.tla'},
        2: {name: 'meta.empty-tuple.tla'},
        3: {name: 'punctuation.definition.tuple.end.tla'}
      },
      match: '(<<)(\\s*(>>))',
      name: 'meta.structure.tuple.tla'
    }
  ],
  repository: {
    'reserved-words': {
      match:
        '\\b(ACTION|ASSUME|ASSUMPTION|AXIOM|BY|CASE|CHOOSE|CONSTANT|CONSTANTS|COROLLARY|DEF|DEFINE|DEFS|DOMAIN|ELSE|ENABLED|EXCEPT|EXTENDS|HAVE|HIDE|IF|IN|INSTANCE|LAMBDA|LEMMA|LET|LOCAL|MODULE|NEW|OBVIOUS|OMITTED|ONLY|OTHER|PICK|PROOF|PROPOSITION|PROVE|QED|RECURSIVE|SF_|STATE|SUBSET|SUFFICES|TAKE|TEMPORAL|THEN|THEOREM|UNCHANGED|UNION|USE|VARIABLE|VARIABLES|WF_|WITH|WITNESS)\\b',
      name: 'keyword.control.tla'
    }
  },
  scopeName: 'source.tla'
}

export default grammar
