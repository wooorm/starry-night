// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.desktop', '.desktop.in', '.service'],
  names: ['desktop'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.desktop'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.defdesktoption.comment.desktop'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.desktop'
        }
      ]
    },
    {
      captures: {
        1: {name: 'keyword.other.defdesktoption.desktop'},
        2: {name: 'punctuation.separator.key-value.desktop'}
      },
      match: '\\b([a-zA-Z0-9_.-]+)\\b\\s*(=)'
    },
    {
      captures: {
        1: {name: 'punctuation.defdesktoption.entity.desktop'},
        3: {name: 'punctuation.defdesktoption.entity.desktop'}
      },
      match: '^(\\[)(.*?)(\\])',
      name: 'entity.name.section.group-title.desktop'
    },
    {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.defdesktoption.string.begin.desktop'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.defdesktoption.string.end.desktop'}},
      name: 'string.quoted.single.desktop',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.desktop'}]
    },
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.defdesktoption.string.begin.desktop'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.defdesktoption.string.end.desktop'}},
      name: 'string.quoted.double.desktop'
    }
  ],
  scopeName: 'source.desktop'
}

export default grammar
