// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/DafnyVSCode/Dafny-VSCode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dfy'],
  names: ['dafny'],
  patterns: [
    {
      begin: '(class)\\s*(\\w+)\\s*',
      beginCaptures: {
        1: {name: 'keyword.control.dafny'},
        2: {name: 'entity.name.function.dafny'}
      },
      end: '\\{',
      name: 'meta.class.identifier.dafny'
    },
    {
      match:
        '\\b(class|trait|datatype|codatatype|type|newtype|function|ghost|var|const|method|constructor|colemma|abstract|module|import|export|lemma|as|opened|static|protected|twostate|refines|witness|extends|returns|break|then|else|if|label|return|while|print|where|new|in|fresh|allocated|match|case|assert|by|assume|expect|reveal|modify|predicate|inductive|copredicate|forall|exists|false|true|null|old|unchanged|calc|iterator|yields|yield)\\b',
      name: 'keyword.control.dafny'
    },
    {
      begin: '(\\w+)\\s*\\(',
      beginCaptures: {1: {name: 'entity.name.function.dafny'}},
      end: '\\)',
      name: 'meta.method.identifier.dafny',
      patterns: [{include: '#parameters'}]
    },
    {include: '#code'}
  ],
  repository: {
    code: {
      patterns: [
        {include: '#comments'},
        {include: '#comments-inline'},
        {include: '#keywords'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.dafny'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.dafny'
        },
        {include: '#comments-inline'}
      ]
    },
    'comments-inline': {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.dafny'}},
          end: '\\*/',
          name: 'comment.block.dafny'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.dafny'},
            2: {name: 'punctuation.definition.comment.dafny'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    generics: {
      patterns: [
        {
          begin: '<(\\w+)',
          beginCaptures: {1: {name: 'storage.type.dafny'}},
          end: '>',
          name: 'meta.type.identifier.dafny'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(class|trait|datatype|codatatype|type|newtype|function|include|ghost|var|const|method|constructor|colemma|abstract|module|import|export|lemma|as|opened|static|protected|twostate|refines|witness|extends|returns|break|then|else|if|label|return|while|print|where|new|in|fresh|allocated|match|case|assert|by|assume|reveal|modify|predicate|inductive|copredicate|forall|exists|false|true|null|old|unchanged|calc|iterator|yields|yield)\\b',
          name: 'keyword.control.dafny'
        },
        {match: '\\b(function)\\b', name: 'entity.name.function'},
        {match: ';', name: 'punctuation.terminator.dafny'},
        {
          match:
            '\\b(requires|ensures|modifies|reads|invariant|decreases|reveals|provides)\\b',
          name: 'keyword.control.verify.dafny'
        },
        {
          match:
            '\\b(bool|char|real|multiset|map|imap|nat|int|ORDINAL|object|string|set|iset|seq|array|array[1-9]\\d*|bv0|bv[1-9]\\d*)\\b',
          name: 'keyword.type.dafny'
        },
        {match: 'this', name: 'storage.type.dafny'},
        {
          match: '\\b(try|catch|finally|throw)\\b',
          name: 'keyword.control.catch-exception.dafny'
        },
        {match: '\\|:', name: 'keyword.control.dafny'},
        {
          match: '(==|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.dafny'
        },
        {match: '(:=)', name: 'keyword.operator.assignment.dafny'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.dafny'
        },
        {
          match: '(\\-|\\+|\\*|\\/|%)',
          name: 'keyword.operator.arithmetic.dafny'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.dafny'},
        {
          match: '(?<=\\S)\\.(?=\\S)',
          name: 'keyword.operator.dereference.dafny'
        }
      ]
    },
    parameters: {
      patterns: [
        {
          begin: ':\\s*(\\w+)',
          beginCaptures: {1: {name: 'storage.type.dafny'}},
          end: '\\s*|,|\\)|\\}|requires|ensures|modifies',
          name: 'meta.type.identifier.dafny'
        },
        {include: '#generics'}
      ]
    }
  },
  scopeName: 'text.dfy.dafny'
}

export default grammar
