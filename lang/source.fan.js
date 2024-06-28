// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fan'],
  names: ['fantom'],
  patterns: [{include: '#main'}],
  repository: {
    comments: {
      patterns: [
        {include: '#line-comment'},
        {include: '#fandoc-comment'},
        {include: '#multiline-comment'}
      ]
    },
    'double-quoted-string': {
      patterns: [
        {
          begin: '(")',
          end: '(")',
          name: 'string.quoted.double.fan',
          patterns: [
            {include: '#escaped-unicode'},
            {include: '#escaped-char'},
            {include: '#interpolation'}
          ]
        }
      ]
    },
    'escaped-char': {
      patterns: [
        {
          match: '(\\\\[bfnrt"\'`$\\\\])',
          name: 'constant.character.escape.char.fan'
        },
        {match: '(\\\\.)', name: 'invalid.illegal.escape.char.fan'}
      ]
    },
    'escaped-unicode': {
      patterns: [
        {
          match: '(\\\\u[0-9A-Fa-f]{4})',
          name: 'constant.character.escape.unicode.fan'
        },
        {
          match: '(\\\\u[0-9A-Fa-f]{0,3})',
          name: 'invalid.illegal.escape.unicode.fan'
        }
      ]
    },
    'fandoc-comment': {
      patterns: [{match: '(^\\s*\\*\\*.*$)', name: 'comment.line.fandoc.fan'}]
    },
    interpolation: {
      patterns: [
        {match: '(\\$\\{.+?\\})', name: 'variable.other.interpolated-expr.fan'},
        {
          match: '(\\$([A-Za-z_][A-Za-z0-9_]*(\\.[A-Za-z_][A-Za-z0-9_]*)*))',
          name: 'variable.other.interpolated-dotcall.fan'
        },
        {match: '(\\$\\{\\w*)', name: 'invalid.illegal.interpolation.fan'}
      ]
    },
    keywords: {
      patterns: [
        {match: '(\\b(true|false|null)\\b)', name: 'constant.language.fan'},
        {
          match:
            '(\\b(abstract|const|enum|facet|final|internal|native|once|override|private|protected|public|readonly|static|virtual|volatile)\\b)',
          name: 'storage.modifier.fan'
        },
        {
          match: '(\\b(return|break|continue)\\b)',
          name: 'keyword.control.block.fan'
        },
        {
          match: '(\\b(try|catch|finally|throw|assert)\\b)',
          name: 'keyword.control.exceptions.fan'
        },
        {
          match: '(\\b(for|while|do|foreach)\\b)',
          name: 'keyword.control.loop.fan'
        },
        {
          match: '(\\b(if|else|switch|case|default)\\b)',
          name: 'keyword.control.flow.fan'
        },
        {match: '(\\b(new|void)\\b)', name: 'keyword.other.fan'},
        {match: '(\\b(using)\\b)', name: 'storage.modifier.global.fan'},
        {match: '(\\b(this|super|it)\\b)', name: 'variable.language.self.fan'},
        {
          match:
            '(\\b(Void|Bool|Int|Float|Decimal|Duration|Str|Uri|Type|Slot|Range|List|Map|This)\\b)',
          name: 'support.type.sys.fan'
        }
      ]
    },
    'line-comment': {
      patterns: [{match: '((//).*$)', name: 'comment.line.double-slash.fan'}]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#strings'},
        {include: '#uris'},
        {include: '#numbers'},
        {include: '#keywords'},
        {include: '#operators'},
        {include: '#typedef'}
      ]
    },
    'multiline-comment': {
      patterns: [{begin: '(/\\*)', end: '(\\*/)', name: 'comment.block'}]
    },
    numbers: {
      patterns: [
        {
          match: '(\\b0x[0-9A-Fa-f][_0-9A-Fa-f]*)',
          name: 'constant.numeric.hex.fan'
        },
        {match: '(0x)', name: 'invalid.illegal.hex.fan'},
        {
          match: '(\\\\u[0-9A-Fa-f]{4})',
          name: 'constant.numeric.escape.unicode.fan'
        },
        {
          match: '(\\\\(u[0-9A-Fa-f]{0,3})?)',
          name: 'invalid.illegal.escape.unicode.fan'
        },
        {
          match: "(\\'\\\\[bfnrt\"'$\\\\]\\')",
          name: 'constant.numeric.escape.char.fan'
        },
        {match: "(\\'[^\\\\]\\')", name: 'constant.numeric.char.fan'},
        {
          match:
            '((\\B\\.[0-9][0-9_]*|\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?)([eE][-+]?[0-9][0-9_]*)?(ns|ms|sec|min|hr|day))',
          name: 'constant.other.duration.fan'
        },
        {
          match:
            '((\\B\\.[0-9][0-9_]*|\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?)([eE][-+]?[0-9][0-9_]*)?[fdFD]?)',
          name: 'constant.numeric.number.fan'
        }
      ]
    },
    operators: {
      patterns: [
        {match: '(===?|!==?)', name: 'keyword.operator.equality.fan'},
        {
          match: '(<(=|=>)?|>=?)',
          name: 'keyword.operator.relational.symbol.fan'
        },
        {match: '(:?=)', name: 'keyword.operator.assign.fan'},
        {match: '([+*/%-]=?)', name: 'keyword.operator.math.fan'},
        {
          match: '(!|&&|(\\?\\:)|(\\|\\|))',
          name: 'keyword.operator.logical.fan'
        },
        {
          match: '(\\b(is|isnot|as)\\b)',
          name: 'keyword.operator.relational.named.fan'
        },
        {match: '(\\->|\\?\\->|\\?\\.)', name: 'keyword.operator.call.fan'},
        {match: '(\\+\\+|\\-\\-)', name: 'keyword.operator.inc-dec.fan'},
        {match: '(\\.\\.<?)', name: 'keyword.operator.range.fan'},
        {match: '(\\?|:)', name: 'keyword.operator.tertiary.fan'},
        {match: '(;)', name: 'punctuation.terminator.fan'}
      ]
    },
    'string-dsl': {
      patterns: [
        {
          begin: '((Str)<\\|)',
          captures: {1: {name: 'support.type.sys.fan'}},
          end: '(\\|>)',
          name: 'string.quoted.other.fan'
        }
      ]
    },
    strings: {
      patterns: [
        {include: '#triple-quoted-string'},
        {include: '#double-quoted-string'},
        {include: '#string-dsl'}
      ]
    },
    'triple-quoted-string': {
      patterns: [
        {
          begin: '"""',
          end: '"""',
          name: 'string.quoted.triple.fan',
          patterns: [
            {match: '\\\\"', name: 'invalid.illegal.escape.char.fan'},
            {include: '#escaped-unicode'},
            {include: '#escaped-char'},
            {include: '#interpolation'}
          ]
        }
      ]
    },
    typedef: {
      patterns: [
        {
          match: '(class|mixin)(?=\\s+([A-Za-z_][A-Za-z0-9_]*))',
          name: 'storage.modifier.fan'
        }
      ]
    },
    uris: {
      patterns: [
        {
          begin: '(`)',
          end: '(`)',
          name: 'string.quoted.other.uri.fan',
          patterns: [
            {include: '#escaped-unicode'},
            {include: '#escaped-char'},
            {include: '#interpolation'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.fan'
}

export default grammar
