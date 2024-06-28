// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.prolog', '.yap'],
  names: ['prolog'],
  patterns: [
    {include: '#comments'},
    {
      begin: '(?<=:-)\\s*',
      end: '(\\.)',
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
      begin: '^\\s*([a-z][a-zA-Z0-9_]*)(\\(?)(?=.*:-.*)',
      beginCaptures: {
        1: {name: 'entity.name.function.clause.prolog'},
        2: {name: 'punctuation.definition.parameters.begin'}
      },
      end: '((\\)?))\\s*(:-)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end'},
        3: {name: 'keyword.control.clause.bodybegin.prolog'}
      },
      name: 'meta.clause.head.prolog',
      patterns: [
        {include: '#atom'},
        {include: '#variable'},
        {include: '#constants'}
      ]
    },
    {
      begin: '^\\s*([a-z][a-zA-Z0-9_]*)(\\(?)(?=.*-->.*)',
      beginCaptures: {
        1: {name: 'entity.name.function.dcg.prolog'},
        2: {name: 'punctuation.definition.parameters.begin'}
      },
      end: '((\\)?))\\s*(-->)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end'},
        3: {name: 'keyword.control.dcg.bodybegin.prolog'}
      },
      name: 'meta.dcg.head.prolog',
      patterns: [
        {include: '#atom'},
        {include: '#variable'},
        {include: '#constants'}
      ]
    },
    {
      begin: '(?<=-->)\\s*',
      end: '(\\.)',
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
    {
      begin: '^\\s*([a-zA-Z][a-zA-Z0-9_]*)(\\(?)(?!.*(:-|-->).*)',
      beginCaptures: {
        1: {name: 'entity.name.function.fact.prolog'},
        2: {name: 'punctuation.definition.parameters.begin'}
      },
      end: '((\\)?))\\s*(\\.)(?!\\d+)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end'},
        3: {name: 'keyword.control.fact.end.prolog'}
      },
      name: 'meta.fact.prolog',
      patterns: [
        {include: '#atom'},
        {include: '#variable'},
        {include: '#constants'}
      ]
    }
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
          match: '\\b(op|findall|write|nl|writeln|fail|use_module|module)\\b',
          name: 'keyword.other'
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
        }
      ]
    },
    variable: {
      patterns: [
        {
          match: '(?<![a-zA-Z0-9_])[_A-Z][a-zA-Z0-9_]*',
          name: 'variable.parameter.uppercase.prolog'
        },
        {match: '(?<!\\w)_', name: 'variable.language.anonymous.prolog'}
      ]
    }
  },
  scopeName: 'source.prolog'
}

export default grammar
