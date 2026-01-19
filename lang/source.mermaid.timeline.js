// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    'desc-innards': {
      patterns: [
        {include: 'source.mermaid#entity'},
        {include: 'source.mermaid#br'}
      ]
    },
    event: {
      patterns: [
        {
          begin: '\\G\\s*(:)\\s*(?=$|%%)',
          beginCaptures: {1: {patterns: [{include: 'source.mermaid#colon'}]}},
          end: '^\\s*((?:[^:\\r\\n]|:(?!\\s))+)',
          endCaptures: {
            0: {name: 'entity.name.event.mermaid'},
            1: {patterns: [{include: '#desc-innards'}]}
          },
          patterns: [{include: 'source.mermaid#comment'}]
        },
        {
          begin: '(:)\\s+',
          beginCaptures: {1: {patterns: [{include: 'source.mermaid#colon'}]}},
          contentName: 'entity.name.event.mermaid',
          end: '(?=\\s*(?:$|%%)|:(?=\\s))',
          name: 'meta.event.mermaid',
          patterns: [{include: '#desc-innards'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#title'},
        {include: '#section'},
        {include: '#period'}
      ]
    },
    period: {
      begin: '^\\s*((?=\\S)(?:[^:%]|%(?!%))++)',
      beginCaptures: {1: {name: 'entity.name.tag.period.era.mermaid'}},
      end: '(?=^\\s*[^#:\\s]+)',
      patterns: [{include: '#event'}]
    },
    section: {
      begin: '(?i)^[ \\t]*(section)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.section.mermaid'}},
      end: '(?i)(?=^[ \\t]*(?:section|(?:`{3,}|~{3,})\\s*$))',
      name: 'meta.section.mermaid',
      patterns: [
        {
          begin: '\\G(?=\\S)',
          end: '(?=\\s*$)',
          name: 'string.unquoted.section-description.mermaid',
          patterns: [{include: '#desc-innards'}]
        },
        {include: '#period'},
        {include: '#main'}
      ]
    },
    title: {
      begin: '(?i)(?=^\\s*title(?:$|\\s))',
      end: '(?!\\G)',
      patterns: [{include: 'source.mermaid#title'}]
    }
  },
  scopeName: 'source.mermaid.timeline'
}

export default grammar
