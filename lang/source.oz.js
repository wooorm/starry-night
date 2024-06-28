// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.oz'],
  names: ['oz'],
  patterns: [
    {match: '(%).*$\\n?', name: 'comment.line.percentage.oz'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.documentation.oz'},
    {
      match:
        '(?x)\\b(\n                andthen|at|attr|case|catch|class|choice|cond|\n                declare|define|do|dis|else|elsecase|elseif|\n                end|export|feat|finally|for|from|fun|functor|\n                if|in|import|lex|local|lock|meth|mode|not|of|\n                or|orelse|parser|prepare|proc|prod|prop|raise|require|\n                scanner|skip|syn|then|thread|token|try)\\b\n            |\n                ^\\s*\\[\\]',
      name: 'keyword.control.oz'
    },
    {match: '=|:=', name: 'keyword.operator.assignement.oz'},
    {match: '<|=<|==|\\\\=|>=|>', name: 'keyword.operator.comparison.oz'},
    {
      match: '(\\*|\\+|\\-|/|~)|\\b(div|mod)\\b',
      name: 'keyword.operator.arithmetic.oz'
    },
    {match: '\\b(\\d+)\\b', name: 'constant.numeric.oz'},
    {match: '\\b(nil|true|false)\\b', name: 'constant.language.oz'},
    {match: '\\b\\|\\b', name: 'keyword.operator.list.oz'},
    {
      captures: {
        1: {name: 'keyword.control.proc.oz'},
        2: {name: 'entity.name.function.oz'},
        3: {name: 'variable.parameter.function.oz'}
      },
      match:
        '(?x)\n\t\t\t         \\b(fun|proc)\\b\\s+\n\t\t\t         \\{(\\w+)\n\t\t\t            ((?:\\s\\w+)*)\n\t\t\t         \\}',
      name: 'meta.function.oz'
    },
    {match: '\\[|\\]', name: 'punctuation.section.array.oz'},
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.simple.oz',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.oz'}]
    },
    {match: '(@)[A-Z]\\w*', name: 'variable.other.readwrite.cell.oz'}
  ],
  scopeName: 'source.oz'
}

export default grammar
