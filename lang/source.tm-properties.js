// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/textmate.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['textmate-properties', 'tm-properties'],
  patterns: [
    {
      begin: '^([a-zA-Z0-9][a-zA-Z0-9_+\\-]*)\\s*(=)\\s*',
      captures: {
        1: {name: 'support.constant.tm-properties'},
        2: {name: 'punctuation.separator.key-value.tm-properties'}
      },
      end: '$',
      patterns: [{include: '#string'}]
    },
    {
      begin: '^\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.section.begin.tm-properties'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.section.end.tm-properties'}
      },
      name: 'meta.section.tm-properties',
      patterns: [{include: '#string'}]
    },
    {include: '#comment'}
  ],
  repository: {
    comment: {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.tm-properties'}
      },
      captures: {1: {name: 'punctuation.definition.comment.tm-properties'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.tm-properties'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.tm-properties'
        }
      ]
    },
    string: {
      patterns: [
        {
          match: '[a-zA-Z0-9][a-zA-Z0-9_+\\-]*',
          name: 'string.unquoted.tm-properties'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.tm-properties'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.tm-properties'}
          },
          name: 'string.quoted.double.tm-properties',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.tm-properties'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.tm-properties'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.tm-properties'}
          },
          name: 'string.quoted.single.tm-properties'
        }
      ]
    }
  },
  scopeName: 'source.tm-properties'
}

export default grammar
