// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mblocker/rexx-sublime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rexx', '.pprx', '.rex'],
  names: ['rexx', 'arexx'],
  patterns: [
    {begin: '/\\*', end: '\\*/', name: 'comment.rexx'},
    {match: '([\'"])[01 ]+\\1(?i:b)', name: 'constant.rexx'},
    {match: '([\'"])[0-9a-fA-F ]+\\1(?i:x)', name: 'constant.rexx'},
    {begin: '([\'"])', end: '\\1', name: 'string.rexx'},
    {
      match: '\\b[A-Za-z@#$!?_][A-Za-z@#$!?_0-9]*:',
      name: 'entity.name.function.rexx'
    },
    {
      match:
        '([0-9]+(\\.)?[0-9]*(?i:e[-+]?[0-9]+)?|[0-9]*(\\.)?[0-9]+)(?i:e[-+]?[0-9]+)?\\b',
      name: 'constant.numeric.rexx'
    },
    {match: '[0-9\\.][A-Za-z0-9@#$¢.!?_]*', name: 'constant.other.rexx'},
    {match: '([\\+-/*%&|()¬\\\\=<>])', name: 'keyword.operator.rexx'},
    {
      match:
        '\\b(?i:do|forever|while|until|to|by|for|end|exit|if|then|else|iterate|leave|nop|return|select|when|otherwise|call(\\s+(off|on)\\s+(error|failure(\\s+name)?|halt))?|signal(\\s+(off|on)\\s+(error|failure(\\s+name)?|halt|novalue|syntax))|address\\s+\\w+|arg|drop|interpret|numeric\\s+(digits|form(\\s+(scientific|engineering|value))?|fuzz)|options|parse(\\s+upper)?\\s+(external|numeric|source|value|var|version)?|with|procedure(\\s+expose)?|pull|push|queue|say|trace\\s+\\w+|upper)\\b(?!\\.)',
      name: 'keyword.rexx'
    },
    {match: '\\b[A-Za-z@#$!?_0-9]+(?=\\()', name: 'support.function.rexx'},
    {match: '\\b[A-Za-z@#$¢!?_][A-Za-z0-9@#$¢.!?_]*', name: 'variable.rexx'}
  ],
  scopeName: 'source.rexx'
}

export default grammar
