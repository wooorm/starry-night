// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.wlk'],
  names: ['wollok'],
  patterns: [{include: '#general'}],
  repository: {
    commentBlock: {
      patterns: [
        {match: '(//).*', name: 'comment.line.double-slash.source.wollok'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.source.wollok'}
      ]
    },
    general: {
      patterns: [
        {include: '#commentBlock'},
        {include: '#operators'},
        {include: '#keywords'},
        {include: '#numbers'},
        {include: '#stringSingleQuote'},
        {include: '#stringDoubleQuote'}
      ]
    },
    keywords: {
      match:
        '\\b(object|class|package|program|test|describe|method|override|constructor|native|var|const|property|inherits|new|if|else|self|super|import|null|true|false|return|throw|then always|try|catch|mixed with|with|mixin|fixture)\\b',
      name: 'keyword.source.wollok'
    },
    numbers: {
      match:
        '(?<![\\d.])\\s0x[a-fA-F\\d]+|\\b\\d+(\\.\\d+)?([eE]-?\\d+)?|\\.\\d+([eE]-?\\d+)?',
      name: 'constant.numeric.source.wollok'
    },
    operators: {
      match:
        '(\\b(and|or|not)\\b)|(\\+|-|%|#|\\*|\\/|\\^|==?|~=|<=?|>=?|(?<!\\.)\\.{2}(?!\\.))',
      name: 'keyword.operator.source.wollok'
    },
    stringDoubleQuote: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.source.wollok'}
      },
      end: '"',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.source.wollok'}
      },
      name: 'string.quoted.double.source.wollok',
      patterns: [
        {
          match: '\\\\(\\d{1,3}|.)',
          name: 'constant.character.escape.source.wollok'
        }
      ]
    },
    stringSingleQuote: {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.source.wollok'}
      },
      end: "'",
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.source.wollok'}
      },
      name: 'string.quoted.single.source.wollok',
      patterns: [
        {
          match: '\\\\(\\d{1,3}|.)',
          name: 'constant.character.escape.source.wollok'
        }
      ]
    }
  },
  scopeName: 'source.wollok'
}

export default grammar
