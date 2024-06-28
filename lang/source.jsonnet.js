// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/google/language-jsonnet>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.jsonnet', '.libsonnet'],
  names: ['jsonnet'],
  patterns: [
    {match: '\\b(\\d+([Ee][+-]?\\d+)?)\\b', name: 'constant.numeric.jsonnet'},
    {
      match: '\\b\\d+[.]\\d*([Ee][+-]?\\d+)?\\b',
      name: 'constant.numeric.jsonnet'
    },
    {match: '\\b[.]\\d+([Ee][+-]?\\d+)?\\b', name: 'constant.numeric.jsonnet'},
    {
      match: '\\bstd[.]is(String|Number|Boolean|Object|Array|Function)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](acos|asin|atan|ceil|char|codepoint|cos|exp|exponent)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](filter|floor|force|length|log|makeArray|mantissa|sign)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.](objectFields(All)?|objectHas(All)?|equals|prune)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.](pow|sin|sqrt|tan|type|max|min|mod|thisFile)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](abs|assertEqual|escapeString(Bash|Dollars|Json|Python))\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.](filterMap|flattenArrays|foldl|foldr|format|join)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.](mapWithIndex|mapWithKey|deepJoin|mergePatch)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.]manifest(Ini|Python(Vars)?|Json(Ex)?|Yaml(Doc|Stream)|XmlJsonml)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](lines|map|find|findSubstr|splitLimit|strReplace|ascii(Upper|Lower))\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.](set|set(Diff|Inter|Member|Union)|sort|resolvePath)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match: '\\bstd[.]base64(Decode(Bytes)?)?\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](split|stringChars|substr|toString|startsWith|endsWith)\\b',
      name: 'support.function.jsonnet'
    },
    {
      match:
        '\\bstd[.](parseInt|parseOctal|parseHex|range|uniq|slice|count)\\b',
      name: 'support.function.jsonnet'
    },
    {match: '\\b[$]\\b', name: 'variable.language.jsonnet'},
    {
      begin: '"',
      end: '"',
      name: 'string.double.jsonnet',
      patterns: [
        {
          match: '\\\\[\'"\\\\/bfnrt]',
          name: 'constant.character.escape.jsonnet'
        },
        {
          match: '\\\\u[0-9a-fA-F]{4}',
          name: 'constant.character.escape.jsonnet'
        },
        {match: '\\\\[^\'"\\\\/bfnrtu]', name: 'invalid.illegal.jsonnet'}
      ]
    },
    {
      begin: "'",
      end: "'",
      name: 'string.single.jsonnet',
      patterns: [
        {
          match: '\\\\[\'"\\\\/bfnrt]',
          name: 'constant.character.escape.jsonnet'
        },
        {
          match: '\\\\u[0-9a-fA-F]{4}',
          name: 'constant.character.escape.jsonnet'
        },
        {match: '\\\\[^\'"\\\\/bfnrtu]', name: 'invalid.illegal.jsonnet'}
      ]
    },
    {
      begin: '@"',
      end: '"(?!")',
      name: 'string.double.verbatim.jsonnet',
      patterns: [{match: '""', name: 'constant.character.escape.jsonnet'}]
    },
    {
      begin: "@'",
      end: "'(?!')",
      name: 'string.single.verbatim.jsonnet',
      patterns: [{match: "''", name: 'constant.character.escape.jsonnet'}]
    },
    {
      begin: '^(\\s*)(.*)(\\|\\|\\|)',
      beginCaptures: {3: {name: 'string.block.jsonnet'}},
      contentName: 'string.block.jsonnet',
      end: '^(?!$)(\\1)(\\|\\|\\|)',
      endCaptures: {2: {name: 'string.block.jsonnet'}}
    },
    {begin: '/\\*', end: '\\*/', name: 'comment.block.jsonnet'},
    {match: '//.*$', name: 'comment.line.jsonnet'},
    {match: '#.*$', name: 'comment.block.jsonnet'},
    {
      match: '\\b[a-zA-Z_][a-z0-9A-Z_]*\\s*(\\([^)]*\\))?\\s*\\+?::?:?',
      name: 'entity.name.function.jsonnet'
    },
    {match: '\\b(import|importstr)\\b', name: 'storage.type.jsonnet'},
    {match: '\\b(function)\\b', name: 'keyword.other.jsonnet'},
    {match: '\\b(self|super)\\b', name: 'variable.language.jsonnet'},
    {match: '\\b(if|then|else|for|in)\\b', name: 'keyword.control.jsonnet'},
    {match: '\\b(local|tailstrict)\\b', name: 'keyword.other.jsonnet'},
    {match: '\\b(true|false|null)\\b', name: 'constant.language.jsonnet'},
    {match: '\\b(error|assert)\\b', name: 'keyword.control.jsonnet'}
  ],
  scopeName: 'source.jsonnet'
}

export default grammar
