// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/elves/elvish>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.elv'],
  names: ['elvish'],
  patterns: [
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.elvish',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.elvish'}]
    },
    {begin: "'", end: "'", name: 'string.quoted.single.elvish'},
    {begin: '#', end: '$', name: 'comment.line.number-sign.elvish'},
    {match: '\\$[\\w\\d_:~-]*', name: 'variable.other.elvish'},
    {
      captures: {
        1: {name: 'keyword.other.elvish'},
        2: {name: 'variable.other.elvish'}
      },
      match:
        '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(var|set|tmp|with|del)((\\s+[\\w\\d_:~-]+)+)'
    },
    {
      captures: {
        1: {name: 'keyword.control.elvish'},
        2: {name: 'variable.other.elvish'}
      },
      match: '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(for)\\s+([\\w\\d_:~-]+)'
    },
    {
      captures: {
        1: {name: 'keyword.control.elvish'},
        2: {name: 'variable.other.elvish'}
      },
      match: '(?<=})\\s+(catch)\\s+([\\w\\d_:~-]+)'
    },
    {
      captures: {1: {name: 'support.function.elvish'}},
      match:
        '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(nop|!=|!=s|%|\\*|\\+|-gc|-ifaddrs|-log|-override-wcwidth|-stack|-|/|<|<=|<=s|<s|==|==s|>|>=|>=s|>s|all|assoc|base|bool|break|call|cd|compare|constantly|continue|count|defer|deprecate|dissoc|drop|each|eawk|echo|eq|eval|exact-num|exec|exit|external|fail|fg|float64|from-json|from-lines|from-terminated|get-env|has-env|has-external|has-key|has-value|is|keys|kind-of|make-map|multi-error|nop|not-eq|not|ns|num|one|only-bytes|only-values|order|peach|pprint|print|printf|put|rand|randint|range|read-line|read-upto|repeat|repr|resolve|return|run-parallel|search-external|set-env|show|sleep|slurp|src|styled|styled-segment|take|tilde-abbr|time|to-json|to-lines|to-string|to-terminated|unset-env|use-mod|wcswidth)(?=[\\s)}<>;|&])'
    },
    {
      captures: {1: {name: 'keyword.operator.elvish'}},
      match:
        '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(and|or|coalesce)(?=[\\s)}<>;|&])'
    },
    {
      captures: {1: {name: 'keyword.other.elvish'}},
      match:
        '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(use|var|set|tmp|with|del|pragma|fn)(?=[\\s)}<>;|&])'
    },
    {
      captures: {1: {name: 'keyword.control.elvish'}},
      match:
        '(?<=\\G|^|\\{ |\\{\t|\\(|\\||\\;)\\s*(while|for|try|if)(?=[\\s)}<>;|&])'
    },
    {
      captures: {1: {name: 'keyword.control.elvish'}},
      match: '(?<=})\\s+(elif|else|catch|finally)(?=[\\s)}<>;|&])'
    },
    {match: '[*?|&;<>()\\[\\]{}]', name: 'keyword.operator.elvish'}
  ],
  scopeName: 'source.elvish'
}

export default grammar
