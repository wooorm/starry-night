// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '({%-?)\\s*(raw)\\s*(-?%})',
      captures: {
        1: {name: 'entity.other.nunjucks.delimiter.tag'},
        2: {name: 'keyword.control.nunjucks'},
        3: {name: 'entity.other.nunjucks.delimiter.tag'}
      },
      end: '({%-?)\\s*(endraw)\\s*(-?%})',
      name: 'comment.block.nunjucks.raw'
    },
    {
      begin: '{#-?',
      captures: {0: {name: 'entity.other.nunjucks.delimiter.comment'}},
      end: '-?#}',
      name: 'comment.block.nunjucks'
    },
    {
      begin: '{{-?',
      captures: {0: {name: 'entity.other.nunjucks.delimiter.variable'}},
      end: '-?}}',
      name: 'meta.scope.nunjucks.variable',
      patterns: [{include: '#expression'}]
    },
    {
      begin: '{%-?',
      captures: {0: {name: 'entity.other.nunjucks.delimiter.tag'}},
      end: '-?%}',
      name: 'meta.scope.nunjucks.tag',
      patterns: [{include: '#expression'}]
    }
  ],
  repository: {
    escaped_char: {
      match: '\\\\x[0-9A-F]{2}',
      name: 'constant.character.escape.hex.nunjucks'
    },
    escaped_unicode_char: {
      captures: {
        1: {name: 'constant.character.escape.unicode.16-bit-hex.nunjucks'},
        2: {name: 'constant.character.escape.unicode.32-bit-hex.nunjucks'},
        3: {name: 'constant.character.escape.unicode.name.nunjucks'}
      },
      match:
        '(\\\\U[0-9A-Fa-f]{8})|(\\\\u[0-9A-Fa-f]{4})|(\\\\N\\{[a-zA-Z ]+\\})'
    },
    expression: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.nunjucks'},
            2: {name: 'variable.other.nunjucks.block'}
          },
          match: '\\s*\\b(block)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.control.nunjucks'},
            2: {name: 'variable.other.nunjucks.filter'}
          },
          match: '\\s*\\b(filter)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.control.nunjucks'},
            2: {name: 'variable.other.nunjucks.test'}
          },
          match: '\\s*\\b(is)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\b'
        },
        {
          captures: {1: {name: 'keyword.control.nunjucks'}},
          match:
            '(?<=\\{\\%-|\\{\\%)\\s*\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?!\\s*[,=])'
        },
        {
          match:
            '\\b(and|else|if|in|import|not|or|recursive|with(out)?\\s+context)\\b',
          name: 'keyword.control.nunjucks'
        },
        {match: '\\b(true|false|none)\\b', name: 'constant.language.nunjucks'},
        {
          match: '\\b(loop|super|self|varargs|kwargs)\\b',
          name: 'variable.language.nunjucks'
        },
        {match: '[a-zA-Z_][a-zA-Z0-9_]*', name: 'variable.other.nunjucks'},
        {
          match: '(\\+|\\-|\\*\\*|\\*|//|/|%)',
          name: 'keyword.operator.arithmetic.nunjucks'
        },
        {
          captures: {
            1: {name: 'punctuation.other.nunjucks'},
            2: {name: 'variable.other.nunjucks.filter'}
          },
          match: '(\\|)([a-zA-Z_][a-zA-Z0-9_]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.other.nunjucks'},
            2: {name: 'variable.other.nunjucks.attribute'}
          },
          match: '(\\.)([a-zA-Z_][a-zA-Z0-9_]*)'
        },
        {
          begin: '\\[',
          captures: {0: {name: 'punctuation.other.nunjucks'}},
          end: '\\]',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '\\(',
          captures: {0: {name: 'punctuation.other.nunjucks'}},
          end: '\\)',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.other.nunjucks'}},
          end: '\\}',
          patterns: [{include: '#expression'}]
        },
        {match: '(\\.|:|\\||,)', name: 'punctuation.other.nunjucks'},
        {
          match: '(==|<=|=>|<|>|!=)',
          name: 'keyword.operator.comparison.nunjucks'
        },
        {match: '=', name: 'keyword.operator.assignment.nunjucks'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.nunjucks'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.nunjucks'}
          },
          name: 'string.quoted.double.nunjucks',
          patterns: [{include: '#string'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.nunjucks'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.nunjucks'}
          },
          name: 'string.quoted.single.nunjucks',
          patterns: [{include: '#string'}]
        },
        {
          begin: '@/',
          beginCaptures: {
            0: {name: 'punctuation.definition.regexp.begin.nunjucks'}
          },
          end: '/',
          endCaptures: {
            0: {name: 'punctuation.definition.regexp.end.nunjucks'}
          },
          name: 'string.regexp.nunjucks',
          patterns: [{include: '#simple_escapes'}]
        }
      ]
    },
    simple_escapes: {
      captures: {
        1: {name: 'constant.character.escape.newline.nunjucks'},
        10: {name: 'constant.character.escape.tab.nunjucks'},
        11: {name: 'constant.character.escape.vertical-tab.nunjucks'},
        2: {name: 'constant.character.escape.backlash.nunjucks'},
        3: {name: 'constant.character.escape.double-quote.nunjucks'},
        4: {name: 'constant.character.escape.single-quote.nunjucks'},
        5: {name: 'constant.character.escape.bell.nunjucks'},
        6: {name: 'constant.character.escape.backspace.nunjucks'},
        7: {name: 'constant.character.escape.formfeed.nunjucks'},
        8: {name: 'constant.character.escape.linefeed.nunjucks'},
        9: {name: 'constant.character.escape.return.nunjucks'}
      },
      match:
        '(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    string: {
      patterns: [
        {include: '#simple_escapes'},
        {include: '#escaped_char'},
        {include: '#escaped_unicode_char'}
      ]
    }
  },
  scopeName: 'source.nunjucks'
}

export default grammar
