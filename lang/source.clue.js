// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ClueLang/Clue-for-VSCode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.clue'],
  names: ['clue'],
  patterns: [
    {
      captures: {
        0: {name: 'constant.numeric.integer.clue'},
        1: {name: 'keyword.control.directive.clue'}
      },
      match: '(@version) (.+?(?=\n))'
    },
    {
      captures: {
        0: {name: 'meta.preprocessor.macro.clue'},
        1: {name: 'keyword.control.macro.clue'}
      },
      match: '(@macro) ([A-Za-z_][0-9A-Za-z_]*)'
    },
    {
      captures: {1: {name: 'keyword.control.import.clue'}, 2: {name: 'string'}},
      match: '(@import) (".*")'
    },
    {
      match: '\\$[A-Za-z_][0-9A-Za-z_]*!',
      name: 'meta.preprocessor.macro.invocation.clue'
    },
    {
      match:
        '@(?:(?:(?:else_)?(?:ifos|iflua|ifdef|ifndef|ifcmp|ifos|iflua|ifdef|ifcmp|if))|else|define|macro|error|print)',
      name: 'keyword.control.directive.clue'
    },
    {
      match: '(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(?![pPeE.0-9])',
      name: 'constant.numeric.integer.hexadecimal.clue'
    },
    {
      match:
        '(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(\\.[0-9A-Fa-f]+)?([eE]-?\\d*)?([pP][-+]\\d+)?',
      name: 'constant.numeric.float.hexadecimal.clue'
    },
    {
      match: '(?<![\\w\\d.])\\d+(?![pPeE.0-9])',
      name: 'constant.numeric.integer.clue'
    },
    {
      match: '(?<![\\w\\d.])\\d+(\\.\\d+)?([eE]-?\\d*)?',
      name: 'constant.numeric.float.clue'
    },
    {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.multilined.begin.clue'}
      },
      end: "'",
      endCaptures: {
        0: {name: 'punctuation.definition.string.multilined.end.clue'}
      },
      name: 'string.quoted.single.clue',
      patterns: [{include: '#escaped_char'}]
    },
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.multilined.begin.clue'}
      },
      end: '"',
      endCaptures: {
        0: {name: 'punctuation.definition.string.multilined.end.clue'}
      },
      name: 'string.quoted.double.clue',
      patterns: [{include: '#escaped_char'}]
    },
    {
      begin: '`',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.multilined.begin.clue'}
      },
      end: '`',
      endCaptures: {
        0: {name: 'punctuation.definition.string.multilined.end.clue'}
      },
      name: 'string.multiline.clue',
      patterns: [{include: '#escaped_char'}]
    },
    {match: '//.*', name: 'comment.line.double-dash.clue'},
    {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.clue'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.clue'}},
      name: 'comment.block.clue',
      patterns: [{include: '#escaped_char'}]
    },
    {
      match:
        '\\b(if|elseif|else|for|of|in|with|while|meta|until|fn|method|return|loop|enum|goto|continue|break|try|catch|match|default|macro)\\b',
      name: 'keyword.control.clue'
    },
    {match: '\\b(local|global|static)\\b', name: 'keyword.scope.clue'},
    {
      match:
        '(?<![^.]\\.|::)\\b(false|nil|true|_G|_VERSION|math\\.(pi|huge))\\b',
      name: 'constant.language.clue'
    },
    {match: '\\.{3}(?!\\.)', name: 'constant.language.ellipsis.clue'},
    {match: '(?<![^.]\\.|::)\\b(self)\\b', name: 'variable.language.self.clue'},
    {
      end: '\\)',
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\(\\s*)',
      name: 'support.function.any-method.clue'
    },
    {match: '[A-Za-z_][0-9A-Za-z_]*', name: 'variable.other.clue'},
    {
      match:
        '\\/_|\\&|\\||\\!|\\~|\\?|\\.|\\$|@|:|\\+|-|%|#|\\*|\\/|\\^|==?|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)|\\?\\?=?|(&&|\\|\\|)=?',
      name: 'keyword.operator.clue'
    }
  ],
  repository: {
    escaped_char: {
      patterns: [
        {
          match: '\\\\[abfnrtvz\\\\"\'\\n]',
          name: 'constant.character.escape.clue'
        },
        {match: '\\\\\\d{1,3}', name: 'constant.character.escape.byte.clue'},
        {
          match: '\\\\x[0-9A-Fa-f][0-9A-Fa-f]',
          name: 'constant.character.escape.byte.clue'
        },
        {
          match: '\\\\u\\{[0-9A-Fa-f]+\\}',
          name: 'constant.character.escape.unicode.clue'
        },
        {match: '\\\\.', name: 'invalid.illegal.character.escape.clue'}
      ]
    }
  },
  scopeName: 'source.clue'
}

export default grammar
