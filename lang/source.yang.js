// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.yang'],
  names: ['yang'],
  patterns: [
    {match: '//.+', name: 'comment.line.source.yang'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.source.yang'},
    {begin: '"', end: '"', name: 'string.quoted.source.yang'},
    {begin: "'", end: "'", name: 'string.quoted.source.yang'},
    {
      captures: {2: {name: 'keyword.source.yang'}},
      match:
        '((?<=[^\\w-]|^))(anyxml|argument|augment|base|belongs-to|bit|case|choice|config|contact|container|default|description|enum|error-app-tag|error-message|extension|deviation|deviate|feature|fraction-digits|grouping|identity|if-feature|import|include|input|key|leaf|leaf-list|length|list|mandatory|max-elements|min-elements|module|must|namespace|ordered-by|organization|output|path|pattern|position|prefix|presence|range|reference|refine|require-instance|revision|revision-date|status|submodule|type|typedef|unique|units|uses|value|when|yang-version|yin-element)((?=[^\\w-]|$))'
    },
    {
      captures: {2: {name: 'keyword.other.source.yang'}},
      match:
        '((?<=[^\\w-]|^))(add|current|delete|deprecated|max|min|not-supported|obsolete|replace|system|unbounded|user)((?=[^\\w-]|$))'
    },
    {
      match:
        '\\bdecimal64|int8|int16|int32|int64|uint8|uint16|uint32|uint64|string|boolean|enumeration|bits|binary|leafref|identityref|empty|instance-identifier\\b',
      name: 'storage.type.source.yang'
    },
    {
      captures: {2: {name: 'constant.language.source.yang}'}},
      match: '(\\b)(true|false)(\\b)'
    },
    {
      captures: {
        1: {name: 'constant.numeric.source.yang'},
        2: {name: 'constant.numeric.source.yang'},
        3: {name: 'constant.numeric.source.yang'}
      },
      match: '(\\b|\\.)(\\d+)(\\b|\\.)'
    },
    {
      captures: {
        1: {name: 'keyword.source.yang'},
        3: {name: 'entity.name.function.source.yang'}
      },
      match: '(\\brpc|\\bnotification)(\\s+)([\\w_\\-\\d]+)'
    }
  ],
  scopeName: 'source.yang'
}

export default grammar
