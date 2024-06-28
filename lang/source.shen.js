// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.shen'],
  names: ['shen'],
  patterns: [{include: '#expressions'}],
  repository: {
    atoms: {
      patterns: [
        {
          begin: '(\\")',
          end: '(\\")',
          name: 'string.quoted.double',
          patterns: [
            {match: '(~A|~R|~S|~%|c#\\d+;)', name: 'constant.character.escape'},
            {match: '(c#[^;]*;)', name: 'invalid.illegal'}
          ]
        },
        {
          match: '(?<=^|[\\s()\\[\\]])[+-]*\\d+\\.?\\d*(?=$|[\\s;()\\[\\]])',
          name: 'constant.numeric'
        },
        {
          match:
            '(?<=^|[\\s()\\[\\]])[+-]*\\d+\\.?\\d*[^\\s;()\\[\\]]+(?=$|[\\s;()\\[\\]])',
          name: 'invalid.illegal'
        },
        {
          match:
            '(?<=\\()(and|or|if|do|lambda|freeze|let|cond|cases|trap-error|where|package|defun|/.|define|defmacro|defcc|defprolog|datatype)(?=$|[\\s;()\\[\\]{}])',
          name: 'keyword.control'
        },
        {
          match:
            '(?<=^|[\\s()\\[\\]{}])(->|<-|-->|<--|==>|<==|:=|__+)(?=$|[\\s;()\\[\\]{}])',
          name: 'keyword.control'
        },
        {
          match:
            '(?<=^|[\\s()\\[\\]{}])(=|==|<|>|<=|>=|\\+|-|\\*|/)(?=$|[\\s;()\\[\\]{}])',
          name: 'keyword.operator'
        },
        {
          match: '(?<=\\(define\\s)([^\\s()\\[\\]{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'entity.name.function'
        },
        {
          match: '(?<=\\(defmacro\\s)([^\\s()\\[\\]{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'entity.name.function'
        },
        {
          match:
            '(?<=\\(defprolog\\s)([^\\s()\\[\\]{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'entity.name.function'
        },
        {
          match: '(?<=\\(package\\s)([^\\s()\\[\\]{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'entity.name.section'
        },
        {
          match: '(?<=\\(datatype\\s)([^\\s()\\[\\]{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'entity.name.type'
        },
        {
          match:
            '(?<=^|[\\s()\\[\\]{}])([A-Z][^\\s()\\[\\];{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'variable.language'
        },
        {
          match: '(?<=^|[\\s()\\[\\]])(<[^\\s()\\[\\]]*>)(?=$|[\\s;()\\[\\]])',
          name: 'entity.name.tag'
        },
        {
          match:
            '(?<=^|[\\s)\\[\\]{}])([^A-Z\\s()\\[\\]:;\\|{}][^\\s()\\[\\];{}]*)(?=$|[\\s;()\\[\\]{}])',
          name: 'constant.language'
        },
        {match: '(\\(\\)|\\[\\])', name: 'constant.language'}
      ]
    },
    comments: {
      patterns: [
        {match: '(\\\\\\\\.*$)', name: 'comment.line'},
        {begin: '(\\\\\\*)', end: '(\\*\\\\)', name: 'comment.block'}
      ]
    },
    expressions: {
      patterns: [
        {include: '#comments'},
        {include: '#atoms'},
        {include: '#parens'},
        {include: '#squares'}
      ]
    },
    parens: {
      patterns: [
        {
          begin: '(\\()',
          end: '(\\))',
          name: 'meta.group',
          patterns: [{include: '#expressions'}]
        }
      ]
    },
    squares: {
      patterns: [
        {
          begin: '(\\[)',
          end: '(\\])',
          name: 'meta.group',
          patterns: [{include: '#expressions'}]
        }
      ]
    }
  },
  scopeName: 'source.shen'
}

export default grammar
