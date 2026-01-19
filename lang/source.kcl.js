// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kcl-lang/vscode-kcl>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.k'],
  names: ['kcl'],
  patterns: [
    {include: '#keywords'},
    {include: '#types'},
    {include: '#builtin-literals'},
    {include: '#triple-double-quoted-strings'},
    {include: '#triple-single-quoted-strings'},
    {include: '#single-quoted-strings'},
    {include: '#double-quoted-strings'},
    {include: '#comment'},
    {include: '#number'}
  ],
  repository: {
    'builtin-literals': {
      patterns: [
        {
          match: '\\b(True|False|None|Undefined)\\b',
          name: 'constant.language.KCL'
        }
      ]
    },
    comment: {
      name: 'comment.line.number-sign.KCL',
      patterns: [{match: '#.*', name: 'comment.line.number-sign.KCL'}]
    },
    'double-quoted-strings': {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.KCL'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(as|assert|if|elif|else|lambda|for|import|schema|protocol|rule|mixin|check|and|in|is|not|or|all|any|map|filter|type)\\b',
          name: 'keyword.control.KCL'
        }
      ]
    },
    number: {
      name: 'constant.numeric.KCL',
      patterns: [
        {match: '\\-?[1-9]\\d*', name: 'constant.numeric.list.number.KCL'},
        {
          match: '\\-?0[xX][0-9a-fA-F]+',
          name: 'constant.numeric.list.number.KCL'
        },
        {match: '\\-?0[oO][0-7]+', name: 'constant.numeric.list.number.KCL'},
        {match: '\\-?0[bB][0-1]+', name: 'constant.numeric.list.number.KCL'},
        {
          match:
            '([-+]?\\d+\\.\\d*|\\.\\d+)([eE][-+]?\\d+)?|\\d+([eE][-+]?\\d+)',
          name: 'constant.numeric.list.number.KCL'
        }
      ]
    },
    'single-quoted-strings': {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.KCL'
    },
    'triple-double-quoted-strings': {
      begin: '"""',
      end: '"""',
      name: 'string.quoted.double.triple.KCL'
    },
    'triple-single-quoted-strings': {
      begin: "'''",
      end: "'''",
      name: 'string.quoted.single.triple.KCL'
    },
    types: {
      patterns: [
        {match: '\\b(str|int|float|bool)\\b', name: 'entity.name.type.KCL'}
      ]
    }
  },
  scopeName: 'source.kcl'
}

export default grammar
