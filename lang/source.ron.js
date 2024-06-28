// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/a5huynh/vscode-ron>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ron'],
  names: ['ron'],
  patterns: [{include: '#expression'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.ron'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.ron'}},
      patterns: [{include: '#value'}, {include: '#object-name'}]
    },
    block_comment: {begin: '/\\*', end: '\\*/', name: 'comment.block.ron'},
    character: {
      begin: "'",
      contentName: 'constant.character.ron',
      end: "'",
      name: 'string.quoted.single'
    },
    constant: {match: '\\b(true|false)\\b', name: 'constant.language.ron'},
    dictionary: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.dictionary.begin.ron'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.dictionary.end.ron'}},
      patterns: [
        {include: '#value'},
        {include: '#object-name'},
        {include: '#object'},
        {include: '#tag-name'},
        {match: ',', name: 'punctuation.separator.dictionary.ron'},
        {match: ':', name: 'punctuation.separator.dictionary.key-value.ron'}
      ]
    },
    escapes: {
      captures: {
        1: {name: 'constant.character.escape.backslash.ron'},
        2: {name: 'constant.character.escape.bit.ron'},
        3: {name: 'constant.character.escape.unicode.ron'},
        4: {name: 'constant.character.escape.unicode.punctuation.ron'},
        5: {name: 'constant.character.escape.unicode.punctuation.ron'}
      },
      match:
        '(\\\\)(?:(?:(x[0-7][0-7a-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))',
      name: 'constant.character.escape.ron'
    },
    expression: {
      patterns: [
        {include: '#array'},
        {include: '#block_comment'},
        {include: '#constant'},
        {include: '#dictionary'},
        {include: '#line_comment'},
        {include: '#number'},
        {include: '#object-name'},
        {include: '#object'},
        {include: '#string'},
        {include: '#character'},
        {include: '#tag-name'}
      ]
    },
    line_comment: {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.ron'
    },
    number: {
      match: '(?x:-?(?:0|[1-9]\\d*)(?:(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)?)',
      name: 'constant.numeric.ron'
    },
    object: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.dictionary.begin.ron'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.dictionary.end.ron'}},
      patterns: [
        {include: '#value'},
        {include: '#dictionary'},
        {include: '#tag-name'},
        {include: '#object-name'},
        {include: '#object'}
      ]
    },
    'object-name': {
      match: '[A-Za-z_][A-Za-z_0-9]*',
      name: 'entity.name.class.ron'
    },
    string: {
      begin: '(b?)(")',
      end: '"',
      name: 'string.quoted.double',
      patterns: [{include: '#escapes'}]
    },
    'tag-name': {match: '[a-z_][A-Za-z_0-9]*', name: 'entity.name.tag.ron'},
    value: {
      patterns: [
        {include: '#array'},
        {include: '#block_comment'},
        {include: '#constant'},
        {include: '#dictionary'},
        {include: '#line_comment'},
        {include: '#number'},
        {include: '#object'},
        {include: '#string'},
        {include: '#character'}
      ]
    }
  },
  scopeName: 'source.ron'
}

export default grammar
