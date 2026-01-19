// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tweag/nickel>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['nickel'],
  patterns: [
    {include: '#keywords'},
    {include: '#multiline_strings'},
    {include: '#strings'},
    {include: '#records'},
    {include: '#arrays'},
    {include: '#comments'},
    {include: '#operators'},
    {include: '#numbers'},
    {include: '#bools'},
    {include: '#storage'},
    {include: '#types'},
    {include: '#identifiers'}
  ],
  repository: {
    arrays: {begin: '\\[', end: '\\]', patterns: [{include: '$self'}]},
    bools: {
      name: 'constant.boolean',
      patterns: [{match: '\\b(true|false)\\b', name: 'constant.boolean'}]
    },
    comments: {
      name: 'comment.line.number-sign',
      patterns: [{match: '#(.+)', name: 'comment.line.number-sign'}]
    },
    identifiers: {
      patterns: [
        {
          match: "\\b[[:upper:]][[:word:]'-]*\\b",
          name: 'variable.uppercase-identifier'
        },
        {
          match: "\\b[[:lower:]_][[:word:]'-]*\\b",
          name: 'variable.lowercase-identifier'
        },
        {
          match: "\\b'[[:alpha:]][[:word:]-]*\\b",
          name: 'constant.other.enum-tag'
        },
        {
          begin: '\\b\'"',
          end: '"',
          name: 'constant.other.enum-tag',
          patterns: [{match: '\\\\.', name: 'constant.character.escape'}]
        }
      ]
    },
    keywords: {
      patterns: [{match: '\\b(if|else|then|match)\\b', name: 'keyword.control'}]
    },
    multiline_strings: {
      begin: 'm(%+)"',
      end: '"\\1',
      name: 'string.quoted.double',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape'},
        {include: '#strings_interpolation'}
      ]
    },
    null: {
      name: 'constant.null',
      patterns: [{match: '\\b(null)\\b', name: 'constant.null'}]
    },
    numbers: {
      name: 'constant.numeric',
      patterns: [{match: '(\\d+)(\\.\\d+)', name: 'constant.numeric'}]
    },
    operators: {
      name: 'keyword.operator',
      patterns: [
        {
          match:
            '(=>|==|=|\\|\\||\\||->|<|>|>=|<=|\\+\\+|\\+|\\-\\$|\\-|\\*|\\/|&&|&|\\.|\\:|@)',
          name: 'keyword.operator'
        }
      ]
    },
    records: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.embedded',
      patterns: [{include: '$self'}]
    },
    storage: {
      patterns: [
        {
          match:
            '\\b(let|in|forall|import|default|force|optional|priority|doc|rec)\\b',
          name: 'storage.modifier'
        },
        {match: '\\b(fun)\\b', name: 'storage.type'}
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape'},
        {include: '#strings_interpolation'}
      ]
    },
    strings_interpolation: {
      begin: '%\\{',
      end: '\\}',
      name: 'meta.embedded',
      patterns: [{include: '$self'}]
    },
    types: {
      patterns: [
        {match: '\\b(Number|Bool|Dyn|String|Array)\\b', name: 'support.class'}
      ]
    }
  },
  scopeName: 'source.nickel'
}

export default grammar
