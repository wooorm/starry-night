// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['loomscript'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#strings'},
    {
      begin: 'import',
      beginCaptures: {0: {name: 'keyword.other.import.loomscript'}},
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.loomscript'}},
      name: 'meta.declaration.loomscript'
    },
    {
      begin: '(package)\\s+',
      beginCaptures: {1: {name: 'storage.modifier.loomscript'}},
      end: '([\\w\\.]+)?',
      endCaptures: {1: {name: 'entity.name.type.package.loomscript'}},
      name: 'meta.package.loomscript'
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.loomscript'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.loomscript'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.loomscript'}},
          end: '\\*/',
          name: 'comment.block.loomscript'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(true|false|null)\\b',
          name: 'constant.language.loomscript'
        },
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
          name: 'constant.numeric.loomscript'
        },
        {match: '\\bas\\b', name: 'keyword.cast.loomscript'},
        {
          match:
            '\\b(if|else|while|do|for|each|in|case|switch|do|default|with|return)\\b',
          name: 'keyword.control.loomscript'
        },
        {
          match: '\\b(exit|return|break|continue)\\b',
          name: 'keyword.control.end.loomscript'
        },
        {match: '\\b(new)\\b', name: 'keyword.control.new.loomscript'},
        {match: '\\?|:', name: 'keyword.control.ternary.loomscript'},
        {
          match:
            '\\b(\\.\\.\\.|class|const|extends|function|get|implements|interface|package|set|namespace|var)\\b',
          name: 'keyword.declaration.loomscript'
        },
        {
          match: '\\b(delete|is|typeof)\\b',
          name: 'keyword.operator.loomscript'
        },
        {
          match: '(\\-|\\+|\\*|\\/|\\~\\/|%)',
          name: 'keyword.operator.arithmetic.loomscript'
        },
        {match: '(=)', name: 'keyword.operator.assignment.loomscript'},
        {
          match: '(([+*/%-]|\\~)=)',
          name: 'keyword.operator.assignment.arithmetic.loomscript'
        },
        {
          match: '(<<|>>>?|~|\\^|\\||&)',
          name: 'keyword.operator.bitwise.loomscript'
        },
        {
          match: '(===?|!==?|<=?|>=?)',
          name: 'keyword.operator.comparison.loomscript'
        },
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.loomscript'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.loomscript'},
        {
          match: '((&|\\^|\\||<<|>>>?)=)',
          name: 'keyword.operator.assignment.bitwise.loomscript'
        },
        {match: '\\b(\\*|Null)\\b', name: 'keyword.special-type.loomscript'},
        {match: ';', name: 'punctuation.terminator.loomscript'},
        {
          match:
            '\\b(dynamic|final|internal|native|override|private|protected|public|static)\\b',
          name: 'storage.modifier.loomscript'
        },
        {
          match: '\\b(?:void|bool|int)\\b',
          name: 'storage.type.primitive.loomscript'
        },
        {match: '\\b(this|super)\\b', name: 'variable.language.loomscript'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.loomscript'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.loomscript'}
          },
          name: 'string.quoted.double.loomscript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.loomscript'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.loomscript'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.loomscript'}
          },
          name: 'string.quoted.single.loomscript',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.loomscript'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.loomscript'
}

export default grammar
