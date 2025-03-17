// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/omnetpp/omnetpp-textmate-ned>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ned'],
  names: ['omnet++-ned', 'omnetpp-ned'],
  patterns: [
    {include: '#comment'},
    {include: '#property'},
    {include: '#type'},
    {include: '#string'},
    {include: '#expr'},
    {include: '#non_expr'}
  ],
  repository: {
    comment: {
      patterns: [{match: '//.*$', name: 'comment.line.double-slash.ned'}]
    },
    expr: {
      patterns: [
        {
          match: '\\b(?:sizeof|const|default|ask|this|index|typename)\\b',
          name: 'keyword.other.ned'
        }
      ]
    },
    non_expr: {
      patterns: [
        {
          match:
            '\\b(?:channel|channelinterface|simple|module|network|moduleinterface|parameters|gates|types|submodules|connections|allowunconnected|extends|for|if|import|like|package|property)\\b',
          name: 'keyword.other.ned'
        }
      ]
    },
    property: {patterns: [{match: '@[a-zA-Z]+', name: 'entity.name.tag.ned'}]},
    string: {patterns: [{match: '"[^"]*"', name: 'string.quoted.msg'}]},
    type: {
      patterns: [
        {
          match:
            '\\b(?:inout|input|output|bool|double|int|string|object|xml|-->|<--|<-->|\\.\\.|volatile|false|true|undefined|nan|inf|null|nullptr)\\b',
          name: 'storage.type.common.ned'
        }
      ]
    }
  },
  scopeName: 'source.ned'
}

export default grammar
