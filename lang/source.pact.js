// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kadena-io/pact-atom>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pact'],
  names: ['pact'],
  patterns: [
    {include: '#comment'},
    {include: '#sexp'},
    {include: '#reserved'},
    {include: '#type'},
    {include: '#string'},
    {include: '#list'},
    {include: '#object'},
    {include: '#literal'},
    {include: '#symbol'},
    {include: '#metas'},
    {include: '#let'}
  ],
  repository: {
    arglist: {
      begin: '(?<=\\()',
      end: '(?=\\))',
      patterns: [
        {
          match: '([\\w%#+\\-_&\\$@<>=\\?\\*!\\|/]+)',
          name: 'variable.name.arg.pact'
        },
        {include: '#type'}
      ]
    },
    atom: {patterns: [{match: '([\\w%#+-_&\\$@<>=\\?\\*!\\|/]+)'}]},
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.pact'}},
      match: '(;).*$\\n?',
      name: 'comment.line.semicolon.pact'
    },
    deflam: {
      begin:
        '(?<=\\()(defun|defpact|defcap)\\s+([\\w%#+\\-_&\\$@<>=\\?\\*!\\|/]+)',
      beginCaptures: {
        1: {name: 'keyword.reserved.pact'},
        2: {name: 'entity.function.name.pact'}
      },
      end: '\\)',
      name: 'meta.definition.global.pact',
      patterns: [{include: '#arglist'}, {include: '#type'}]
    },
    defsimple: {
      begin:
        '(?<=\\()(defconst|defschema|deftable|module|interface)\\s+([\\w%#+-_&\\$@<>=\\?\\*!\\|/]+)\\b',
      beginCaptures: {
        1: {name: 'keyword.reserved.pact'},
        2: {name: 'entity.function.name.pact'}
      },
      end: '(?=\\))',
      name: 'meta.definition.global.pact',
      patterns: [{include: '$self'}]
    },
    let: {
      begin: '\\((let\\*?)\\s',
      beginCaptures: {1: {name: 'keyword.let.pact'}},
      end: '\\)',
      name: 'meta.let.declaration.pact',
      patterns: [
        {
          begin: '\\(',
          end: '(?=\\))',
          name: 'meta.let.bindings.pact',
          patterns: [
            {
              begin: '\\(([\\w%#+\\-_&\\$@<>=\\?\\*!\\|/]+)\\b',
              beginCaptures: {1: {name: 'variable.let.pact'}},
              end: '\\)',
              name: 'meta.let.binding.pact',
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    list: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.section.list.begin.pact'}},
      end: '(\\](?=[\\}\\]\\)\\s]*(?:;|$)))|(\\])',
      endCaptures: {
        1: {name: 'punctuation.section.list.end.trailing.pact'},
        2: {name: 'punctuation.section.list.end.pact'}
      },
      name: 'meta.list.pact',
      patterns: [{include: '$self'}]
    },
    literal: {
      patterns: [
        {match: '(true|false)', name: 'constant.language.boolean.pact'},
        {match: '\\b(-?\\d+\\.\\d+)\\b', name: 'constant.numeric.double.pact'},
        {match: '\\b(-?\\d+)\\b', name: 'constant.numeric.integer.pact'},
        {match: '(:=?)', name: 'constant.language.binder.pact'}
      ]
    },
    metas: {patterns: [{match: '@\\w+', name: 'variable.language.metas.pact'}]},
    object: {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'punctuation.section.object.begin.pact'}},
      end: '(\\}(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\})',
      endCaptures: {
        1: {name: 'punctuation.section.object.end.trailing.pact'},
        2: {name: 'punctuation.section.object.end.pact'}
      },
      name: 'meta.object.pact',
      patterns: [
        {
          begin: '(:=)',
          beginCaptures: {1: {name: 'constant.binder.pact'}},
          end: '([\\w%#+\\-_&\\$@<>=\\?\\*!\\|/]+)',
          endCaptures: {1: {name: 'variable.binder.pact'}}
        },
        {include: '$self'}
      ]
    },
    reserved: {
      patterns: [
        {
          match:
            '\\b(module|interface|list|let|let\\*|defun|defpact|defconst|defschema|deftable|defcap|step|use|step-with-rollback|invariants?|properties|property|defproperty|bless|implements)\\b',
          name: 'keyword.reserved.pact'
        }
      ]
    },
    sexp: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.section.expression.begin.pact'}},
      end: '(\\))(\\n)|(\\)(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.expression.end.trailing.pact'},
        2: {name: 'meta.after-expression.pact'},
        3: {name: 'punctuation.section.expression.end.trailing.pact'},
        4: {name: 'punctuation.section.expression.end.pact'}
      },
      name: 'meta.expression.pact',
      patterns: [
        {include: '#deflam'},
        {include: '#defsimple'},
        {include: '#string'},
        {include: '#reserved'},
        {include: '#literal'},
        {include: '#list'},
        {include: '#object'},
        {include: '#let'},
        {include: '#sexp'},
        {
          captures: {1: {name: 'entity.name.function.pact'}},
          match: '(?<=\\()(.+?)(?=\\s|\\))',
          patterns: [{include: '$self'}]
        },
        {include: '$self'}
      ]
    },
    string: {
      begin: '(?<!\\\\)(")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.pact'}},
      end: '(?<!\\\\)(")',
      endCaptures: {1: {name: 'punctuation.definition.string.end.pact'}},
      name: 'string.quoted.double.pact'
    },
    symbol: {
      patterns: [
        {
          begin: "'",
          end: '(?=\\s|[],:"\'.)])',
          name: 'string.quoted.symbol.pact'
        }
      ]
    },
    type: {
      patterns: [
        {
          captures: {1: {name: 'keyword.reserved.type.pact'}},
          match:
            '(?:[:])(integer|decimal|time|bool|string|list|value|keyset|guard|(object|table)?\\{[\\w%#+\\-\\._&\\$@<>=\\?\\*!\\|/]+\\}|object|table)'
        }
      ]
    }
  },
  scopeName: 'source.pact'
}

export default grammar
