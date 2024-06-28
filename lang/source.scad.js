// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tbuser/openscad.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.scad'],
  names: ['openscad'],
  patterns: [
    {
      captures: {1: {name: 'keyword.control.scad'}},
      match: '^(module)\\s.*$',
      name: 'meta.function.scad'
    },
    {
      match:
        '\\b(if|else|for|intersection_for|assign|render|function|include|use)\\b',
      name: 'keyword.control.scad'
    },
    {
      begin: '/\\*\\*(?!/)',
      captures: {0: {name: 'punctuation.definition.comment.scad'}},
      end: '\\*/',
      name: 'comment.block.documentation.scad'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.scad'}},
      end: '\\*/',
      name: 'comment.block.scad'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.scad'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.scad'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.scad',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.scad'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.scad'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.scad'}},
      name: 'string.quoted.single.scad',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.scad'
        }
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.scad'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.scad'}},
      name: 'string.quoted.double.scad',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.scad'
        }
      ]
    },
    {
      match:
        '\\b(abs|acos|asun|atan|atan2|ceil|cos|exp|floor|ln|log|lookup|max|min|pow|rands|round|sign|sin|sqrt|tan|str|cube|sphere|cylinder|polyhedron|scale|rotate|translate|mirror|multimatrix|color|minkowski|hull|union|difference|intersection|echo)\\b',
      name: 'support.function.scad'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.scad'},
    {match: ',[ |\\t]*', name: 'meta.delimiter.object.comma.scad'},
    {match: '\\.', name: 'meta.delimiter.method.period.scad'},
    {match: '\\{|\\}', name: 'meta.brace.curly.scad'},
    {match: '\\(|\\)', name: 'meta.brace.round.scad'},
    {match: '\\[|\\]', name: 'meta.brace.square.scad'},
    {
      match:
        '!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|\\^=|\\b(in|instanceof|new|delete|typeof|void)\\b',
      name: 'keyword.operator.scad'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.scad'
    },
    {match: '\\btrue\\b', name: 'constant.language.boolean.true.scad'},
    {match: '\\bfalse\\b', name: 'constant.language.boolean.false.scad'}
  ],
  scopeName: 'source.scad'
}

export default grammar
