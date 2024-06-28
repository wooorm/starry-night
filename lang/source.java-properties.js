// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/java.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['java-properties'],
  patterns: [
    {match: '^\\s*$'},
    {include: '#comment-line'},
    {include: '#property-name'},
    {include: '#property-definition'}
  ],
  repository: {
    'comment-line': {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.java-properties'},
        2: {name: 'punctuation.definition.comment.java-properties'}
      },
      match: '^(\\s*)([#!])(.+)?$\\n?',
      name: 'comment.line.java-properties'
    },
    'property-definition': {
      begin: '^(\\s*)((?:\\\\[ \\t]|\\\\:|\\\\=|[^:=\\s])+)(?:\\s*([:=]))?\\s*',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.java-properties'},
        2: {
          name: 'support.constant.java-properties',
          patterns: [
            {
              match: '\\\\(?:[ \\t:=\\\\ntfr\\"\']|u[0-9A-Fa-f]{4})',
              name: 'constant.character.escape.java-properties'
            }
          ]
        },
        3: {name: 'punctuation.separator.key-value.java-properties'}
      },
      contentName: 'string.unquoted.java-properties',
      end: '(?<!\\\\{1})$\\n',
      name: 'meta.key-value.java-properties',
      patterns: [
        {
          match: '^\\s*',
          name: 'punctuation.whitespace.leading.java-properties'
        },
        {
          match: '(\\\\{1})(?=$\\n)',
          name: 'punctuation.separator.continuation.java-properties'
        },
        {
          match: '\\\\(?:[\\\\ntfr\\"\']|u[0-9A-Fa-f]{4})',
          name: 'constant.character.escape.java-properties'
        }
      ]
    },
    'property-name': {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.java-properties'},
        2: {
          name: 'support.constant.java-properties',
          patterns: [
            {
              match: '\\\\(?:[ \\t:=\\\\ntfr\\"\']|u[0-9A-Fa-f]{4})',
              name: 'constant.character.escape.java-properties'
            }
          ]
        }
      },
      match:
        '^(\\s*)((?:\\\\[ \\t]|\\\\:|\\\\=|[^:=\\s])+)(?:\\s*([:=]))?\\s*$\\n',
      name: 'meta.key-value.java-properties'
    }
  },
  scopeName: 'source.java-properties'
}

export default grammar
