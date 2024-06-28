// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/flimberger/android-system-tools>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['soong'],
  patterns: [
    {include: '#comments'},
    {include: '#variables'},
    {include: '#module'}
  ],
  repository: {
    bool: {match: '\\b(true|false)\\b', name: 'constant.language.bp'},
    comments: {
      patterns: [
        {match: '(//).*$\\n?', name: 'comment.line.double-slash.bp'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.bp'}
      ]
    },
    lists: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'punctuation.definition.array.begin.bp'}},
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.definition.array.end.bp'}},
          name: 'meta.structure.array.bp',
          patterns: [
            {match: ',', name: 'punctuation.separator.array.json'},
            {include: '#strings'},
            {include: '#comments'}
          ]
        }
      ]
    },
    map: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.dictionary.begin.bp'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.dictionary.end.bp'}},
          name: 'meta.structure.dictionary.bp',
          patterns: [
            {include: '#comments'},
            {match: '\\w+', name: 'support.variable'},
            {
              begin: ':',
              beginCaptures: {
                0: {name: 'punctuation.separator.dictionary.key-value.bp'}
              },
              end: '(,)|(?=\\})',
              endCaptures: {
                1: {name: 'punctuation.separator.dictionary.pair.bp'}
              },
              name: 'meta.structure.dictionary.value.bp',
              patterns: [{include: '#values'}]
            }
          ]
        }
      ]
    },
    module: {
      begin: '\\b(\\w+)\\b',
      beginCaptures: {1: {name: 'support.variable.bp'}},
      end: '\\n',
      name: 'meta.structure.module.bp',
      patterns: [{include: '#map'}]
    },
    strings: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.bp'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.bp'}},
      name: 'string.quoted.double.bp'
    },
    values: {
      patterns: [
        {include: '#bool'},
        {include: '#lists'},
        {include: '#map'},
        {include: '#strings'},
        {include: '#comments'}
      ]
    },
    variables: {
      patterns: [
        {
          begin: '(\\w+)\\s*(=)',
          beginCaptures: {
            1: {name: 'variable.other.bp'},
            2: {name: 'punctuation.definition.assignment.bp'}
          },
          end: '\\n',
          name: 'meta.assignment',
          patterns: [{include: '#values'}]
        }
      ]
    }
  },
  scopeName: 'source.bp'
}

export default grammar
