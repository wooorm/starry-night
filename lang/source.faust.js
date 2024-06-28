// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dsp'],
  names: ['faust'],
  patterns: [
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.faust'}},
      end: '\\*/',
      name: 'comment.block.faust'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.faust'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.faust'
    },
    {match: '(\\.\\d+([Ee][-+]\\d+)?i?)\\b', name: 'constant.numeric.faust'},
    {
      match: '\\b\\d+\\.\\d*(([Ee][-+]\\d+)?i?\\b)?',
      name: 'constant.numeric.faust'
    },
    {
      match:
        '\\b((0x[0-9a-fA-F]+)|(0[0-7]+i?)|(\\d+([Ee]\\d+)?i?)|(\\d+[Ee][-+]\\d+i?))\\b',
      name: 'constant.numeric.faust'
    },
    {
      match:
        '\\b(mem|prefix|int|float|rdtable|rwtable|select2|select3|ffunction|fconstant|fvariable|button|checkbox|vslider|hslider|nentry|vgroup|hgroup|tgroup|vbargraph|hbargraph|attach|acos|asin|atan|atan2|cos|sin|tan|exp|log|log10|pow|sqrt|abs|min|max|fmod|remainder|floor|ceil|rint)\\b',
      name: 'constant.symbol.faust'
    },
    {
      match:
        '\\b(import|component|declare|library|environment|with|letrec|process|seq|par|sum|prod|inputs|outputs)\\b',
      name: 'keyword.control.faust'
    },
    {match: '(,|:>|<:|:|~)', name: 'keyword.algebra.faust'},
    {match: '(;|=)', name: 'constant.numeric.faust'},
    {include: '#string_escaped_char'},
    {include: '#strings'},
    {include: '#operators'}
  ],
  repository: {
    operators: {
      patterns: [
        {
          match:
            '(\\+|&|==|!=|\\(|\\)|\\-|\\||\\-=|\\|=|\\|\\||<|<=|\\[|\\]|\\*|\\^|\\*=|\\^=|<\\-|>|>=|\\{|\\}|/|<<|/=|<<=|\\+\\+|=|:=|,|;|%|>>|%=|>>=|\\-\\-|!|\\.\\.\\.|\\.|:|&\\^|&\\^=)',
          name: 'keyword.operator.faust'
        }
      ]
    },
    printf_verbs: {
      patterns: [
        {
          match:
            '%(\\[\\d+\\])?([\\+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGsp]',
          name: 'constant.escape.format-verb.faust'
        }
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\([0-7]{3}|[abfnrtv\\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})',
          name: 'constant.character.escape.faust'
        },
        {
          match: '\\\\[^0-7xuUabfnrtv\\\'"]',
          name: 'invalid.illegal.unknown-escape.faust'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.faust'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.faust'}},
          name: 'string.quoted.double.faust',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#printf_verbs'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.faust'
}

export default grammar
