// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/MikeHoffert/Sublime-Text-TXL-syntax>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.txl'],
  names: ['txl'],
  patterns: [
    {
      match:
        "\\b(?<!')(define|end|function|keys|compounds|tokens|comments|replace|construct|by|replace|rule|deconstruct|not|where|all|not|assert|export|import|redefine|external|match|skipping|include|then)\\b",
      name: 'keyword.control'
    },
    {
      captures: {1: {name: 'keyword.control'}},
      match:
        "(?<!')#\\s*(pragma|endif|else|define|undef|undefine|ifn|elifn|elifdef|elifndef|ifndef|ifdef|if|end)",
      name: 'meta.preprocessor'
    },
    {begin: "(?<!')%[\\({]", end: "(?<!')[\\)}]%", name: 'comment'},
    {match: "(?<!')%.*", name: 'comment'},
    {
      match:
        "(?<!')\\[(not|opt|repeat|list|see|push|pop|\\+|-|/|\\*|=|<|>|\\^|\\.|div|rem|:|#|index|_|length|select|head|tail|,|~=|>=|<=|grep|\\$|quote|unquote|parse|unparse|reparse|typeof|istype|read|write|fget|getp|fput|putp|fputp|fputs|fclose|fopen|fgets|message|pragma|quit|system|pipe|attr) .+?\\]",
      name: 'entity.name.function'
    },
    {
      match:
        "(?<!')\\[(NL|EX(_\\d+)?|IN(_\\d+)?|SP(_\\d+)?|TAB(_\\d+)?|SPON|SPOFF|\\!|round|trunc|toupper|tolower|get|put|gets|print|printattr|debug|breakpoint)\\]",
      name: 'constant.language'
    },
    {match: "(?<!')\\[.+?\\]", name: 'storage.type'},
    {
      match: '\\b(\\d+)|(\\d+\\.\\d+([\\+-][Ee]\\d+)?)\\b',
      name: 'constant.numeric'
    },
    {match: '".*"', name: 'string.quoted.double'}
  ],
  scopeName: 'source.txl'
}

export default grammar
