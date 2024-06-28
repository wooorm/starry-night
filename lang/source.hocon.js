// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jacobwgillespie/language-hocon>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hocon'],
  names: ['hocon'],
  patterns: [
    {include: '#duration-long'},
    {include: '#bytesize-long'},
    {include: '#duration-short'},
    {include: '#bytesize-short'},
    {include: '#variables'},
    {include: '#constant'},
    {include: '#mstring'},
    {include: '#string'},
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#number'},
    {include: '#ustring'},
    {
      captures: {
        1: {name: 'entity.name.tag.hocon'},
        2: {name: 'punctuation.separator.key-value.hocon'}
      },
      match: '(?:[ \t]*([\\w-]+)\\s*?({|=|:))'
    }
  ],
  repository: {
    'bytesize-long': {
      match:
        '\\b\\d+((kilo|mega|giga|tera|peta|exa|zetta|yotta|kibi|mebi|gibi|tebi|pebi|exbi|zebo|yobi)?byte[s]?)\\b',
      name: 'constant.numeric.byte.long.hocon'
    },
    'bytesize-short': {
      match:
        '\\b\\d+(([kMGTPEZY]B)|([KMGTPEZY]B?)|([KMGTPEZY]iB?)|([kmgtpezybB]))\\b',
      name: 'constant.numeric.byte.short.hocon'
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.hocon'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.hocon'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.hocon'}},
          match: '(#).*$\\n?',
          name: 'comment.line.pound.hocon'
        }
      ]
    },
    constant: {
      captures: {1: {name: 'constant.language.hocon'}},
      match: '[^-]\\b((?:true|false|null|on|off|yes|no))\\b[^-]'
    },
    'duration-long': {
      match:
        '\\b\\d+(day|hour|minute|millisecond|microsecond|nanosecond|second)[s]?\\b',
      name: 'constant.numeric.duration.long.hocon'
    },
    'duration-short': {
      match: '\\b(\\d+)(d|h|ns|ms|us|s)\\b',
      name: 'constant.numeric.duration.short.hocon'
    },
    keywords: {
      patterns: [
        {
          match: '\\b(include|url|file|classpath)\\b',
          name: 'keyword.other.source.hocon'
        }
      ]
    },
    mstring: {begin: '"""', end: '"""', name: 'string.quoted.triple.hocon'},
    number: {
      match: '(\\b\\-?\\d+(\\.\\d+)?([eE]\\d+)?\\b)',
      name: 'constant.numeric.zzz.simple.numbers.hocon'
    },
    string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.hocon',
      patterns: [
        {
          match: '(\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4}))',
          name: 'constant.character.escape.hocon'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.hocon'
        }
      ]
    },
    ustring: {
      captures: {1: {name: 'entity.name.tag.hocon'}},
      match:
        '([^:=\\{\\}\\[\\]\\s,][^0-9:=\\{\\}\\[\\],][^=:\\{\\}\\[\\]\\s,]*)',
      name: 'string.other.zzz.unquoted.hocon'
    },
    variables: {match: '\\$\\{[^\\}]*\\}', name: 'storage.type.source.hocon'}
  },
  scopeName: 'source.hocon'
}

export default grammar
