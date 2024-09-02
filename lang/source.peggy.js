// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/peggyjs/code-peggy-language>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js'],
  extensions: ['.pegjs', '.peggy'],
  names: ['peg.js'],
  patterns: [
    {include: '#comment'},
    {include: '#label'},
    {include: '#defRule'},
    {include: '#rule'},
    {include: '#literal'},
    {include: '#charclass'},
    {include: '#operators'},
    {include: '#inlinejs'}
  ],
  repository: {
    charclass: {
      begin: '\\[',
      end: '\\]',
      name: 'declaration.keyword.peggy',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.peggy'}]
    },
    comment: {
      patterns: [
        {begin: '/\\*', end: '\\*/', name: 'comment.block.peggy'},
        {match: '//.*$\\n?', name: 'comment.line.double-slash.peggy'}
      ]
    },
    defRule: {
      captures: {1: {name: 'entity.name.function.peggy'}},
      match: '(\\w+)\\s*(?=\\=)'
    },
    inlinejs: {
      begin: '{',
      end: '}',
      name: 'meta.embedded.block.javascript',
      patterns: [{include: 'source.js'}]
    },
    label: {
      captures: {1: {name: 'entity.other.attribute-name.attribute.peggy'}},
      match: '(\\w+)\\s*(?=:)'
    },
    literal: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.peggy',
          patterns: [
            {
              match:
                '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.peggy'
            },
            {
              match: '[^"]*[^\\n\\r"\\\\]$',
              name: 'invalid.illegal.string.peggy'
            }
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.peggy',
          patterns: [
            {
              match:
                '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
              name: 'constant.character.escape.peggy'
            },
            {
              match: "[^']*[^\\n\\r'\\\\]$",
              name: 'invalid.illegal.string.peggy'
            }
          ]
        }
      ]
    },
    operators: {match: '[*?/.!=+&@]', name: 'keyword.operator.peggy'},
    rule: {match: '[a-zA-Z_][a-zA-Z_0-9$]*', name: 'entity.name.function.peggy'}
  },
  scopeName: 'source.peggy'
}

export default grammar
