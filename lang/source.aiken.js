// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/aiken-lang/vscode-aiken>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ak'],
  names: ['aiken'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#constant'},
    {include: '#entity'}
  ],
  repository: {
    binary_number: {
      match: '\\b0b[0-1]+\\b',
      name: 'constant.numeric.binary.aiken'
    },
    boolean: {
      match: '\\b(True|False)\\b',
      name: 'constant.language.boolean.aiken'
    },
    comments: {patterns: [{match: '//.*', name: 'comment.line.aiken'}]},
    constant: {
      patterns: [
        {include: '#binary_number'},
        {include: '#octal_number'},
        {include: '#hexadecimal_number'},
        {include: '#decimal_number'},
        {include: '#boolean'},
        {match: '[[:upper:]][[:word:]]*', name: 'entity.name.type.aiken'}
      ]
    },
    decimal_number: {
      match: '\\b[[:digit:]][[:digit:]_]*(\\.[[:digit:]]*)?\\b',
      name: 'constant.numeric.decimal.aiken'
    },
    entity: {
      patterns: [
        {
          begin: '\\b([[:lower:]][[:word:]]*)([[:space:]]*)?\\(',
          captures: {1: {name: 'entity.name.function.aiken'}},
          end: '\\)',
          patterns: [{include: '$self'}]
        },
        {
          match: '\\b([[:lower:]][[:word:]]*):\\s',
          name: 'variable.parameter.aiken'
        },
        {
          match: '\\b([[:lower:]][[:word:]]*):',
          name: 'entity.name.namespace.aiken'
        }
      ]
    },
    hexadecimal_number: {
      match: '\\b0x[[:xdigit:]]+\\b',
      name: 'constant.numeric.hexadecimal.aiken'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(if|else|when|is|fn|use|let|pub|type|opaque|const|todo|expect|test|bench|trace|fail|validator|and|or|as|via|once)\\b',
          name: 'keyword.control.aiken'
        },
        {match: '->', name: 'keyword.operator.arrow.aiken'},
        {match: '<-', name: 'keyword.operator.back_arrow.aiken'},
        {match: '\\|>', name: 'keyword.operator.pipe.aiken'},
        {match: '\\.\\.', name: 'keyword.operator.splat.aiken'},
        {match: '(<=|>=|==|!=|<|>)', name: 'keyword.operator.comparison.aiken'},
        {match: '(&&|\\|\\|)', name: 'keyword.operator.logical.aiken'},
        {match: '\\|', name: 'keyword.operator.other.aiken'},
        {match: '(\\+|\\-|/|\\*|%)', name: 'keyword.operator.arithmetic.aiken'},
        {match: '=', name: 'keyword.operator.assignment.aiken'}
      ]
    },
    octal_number: {
      match: '\\b0o[0-7]+\\b',
      name: 'constant.numeric.octal.aiken'
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.aiken',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.aiken'}]
    }
  },
  scopeName: 'source.aiken'
}

export default grammar
