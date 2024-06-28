// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.prolog'],
  extensions: [],
  names: ['eclipse'],
  patterns: [
    {include: '#comments'},
    {
      begin: '(?<=:-)\\s*',
      end: '(\\.)[^(\\.\\.)]',
      endCaptures: {1: {name: 'keyword.control.clause.bodyend.prolog'}},
      name: 'meta.clause.body.prolog',
      patterns: [
        {include: '#comments'},
        {include: '#builtin'},
        {include: '#controlandkeywords'},
        {include: '#atom'},
        {include: '#variable'},
        {include: '#constants'},
        {match: '.', name: 'meta.clause.body.prolog'}
      ]
    },
    {
      begin: '(?<=-->)\\s*',
      end: '(\\.)[^(\\.\\.)]',
      endCaptures: {1: {name: 'keyword.control.dcg.bodyend.prolog'}},
      name: 'meta.dcg.body.prolog',
      patterns: [
        {include: '#comments'},
        {include: '#controlandkeywords'},
        {include: '#atom'},
        {include: '#variable'},
        {include: '#constants'},
        {match: '.', name: 'meta.dcg.body.prolog'}
      ]
    },
    {include: 'source.prolog'}
  ],
  repository: {
    atom: {
      patterns: [
        {
          match: '(?<![a-zA-Z0-9_])[a-z][a-zA-Z0-9_]*(?!\\s*\\(|[a-zA-Z0-9_])',
          name: 'constant.other.atom.simple.prolog'
        },
        {match: "'.*?'", name: 'constant.other.atom.quoted.prolog'},
        {match: '\\[\\]', name: 'constant.other.atom.emptylist.prolog'}
      ]
    },
    builtin: {
      patterns: [
        {
          match: '\\b(op|findall|write|nl|writeln|fail|lib)\\b',
          name: 'keyword.other.prolog'
        },
        {
          match: '\\b(for(each(elem)?)?|fromto|do|param|dim)\\b',
          name: 'keyword.other.prolog.eclipse'
        }
      ]
    },
    comments: {
      patterns: [
        {match: '%.*', name: 'comment.line.percent-sign.prolog'},
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.prolog'}},
          end: '\\*/',
          name: 'comment.block.prolog'
        }
      ]
    },
    constants: {
      patterns: [
        {
          match: '(?<![a-zA-Z]|/)(\\d+|(\\d+\\.\\d+))',
          name: 'constant.numeric.integer.prolog'
        },
        {match: '".*?"', name: 'string.quoted.double.prolog'}
      ]
    },
    controlandkeywords: {
      patterns: [
        {
          begin: '(->)',
          beginCaptures: {1: {name: 'keyword.control.if.prolog'}},
          end: '(;)',
          endCaptures: {1: {name: 'keyword.control.else.prolog'}},
          name: 'meta.if.prolog',
          patterns: [
            {include: '$self'},
            {include: '#builtin'},
            {include: '#comments'},
            {include: '#atom'},
            {include: '#variable'},
            {match: '.', name: 'meta.if.body.prolog'}
          ]
        },
        {match: '!', name: 'keyword.control.cut.prolog'},
        {
          match: '(\\s(is)\\s)|=:=|=?\\\\?=|\\\\\\+|@?>|@?=?<|\\+|\\*|\\-',
          name: 'keyword.operator.prolog'
        },
        {
          match: '(#|&|\\$)(<|>|=)|(#|&|\\$)?(::)|\\.\\.|or|and|(#|&|\\$)\\\\=',
          name: 'keyword.operator.prolog.eclipse'
        }
      ]
    },
    variable: {
      patterns: [
        {
          match: '(?<![a-zA-Z0-9_])[A-Z][a-zA-Z0-9_]*',
          name: 'variable.parameter.uppercase.prolog'
        },
        {match: '(?<!\\w)_', name: 'variable.language.anonymous.prolog'}
      ]
    }
  },
  scopeName: 'source.prolog.eclipse'
}

export default grammar
