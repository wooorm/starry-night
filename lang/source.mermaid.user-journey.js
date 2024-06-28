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
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#title'},
        {include: '#section'}
      ]
    },
    section: {
      begin: '(?i)section(?=$|\\s)[ \\t]*',
      beginCaptures: {0: {name: 'storage.type.section.mermaid'}},
      end: '(?=\\s*section(?:$|\\s))|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.section.mermaid',
      patterns: [
        {
          begin: '\\G(?=\\S)',
          end: '(?=\\s*$)',
          name: 'string.unquoted.section-description.mermaid',
          patterns: [{include: 'source.mermaid#entity'}]
        },
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#task'}
      ]
    },
    task: {
      begin:
        '(?x)\n((?=\\S)(?:[^:%]|%(?!%))+?)\n\\s* (:) \\s* ([-+]?\\d+(?:\\.\\d+)?)?\n\\s* (:) [ \\t]*',
      beginCaptures: {
        1: {name: 'entity.name.task.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]},
        3: {name: 'constant.numeric.decimal.score.mermaid'},
        4: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      contentName: 'meta.actors.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.task.mermaid',
      patterns: [
        {match: '(?=\\S)[^,\\r\\n]+', name: 'variable.parameter.actor.mermaid'},
        {include: 'source.mermaid#comma'}
      ]
    },
    title: {
      begin: '(?i)title(?=$|\\s)[ \\t]*',
      beginCaptures: {0: {name: 'storage.type.title.mermaid'}},
      contentName: 'string.unquoted.diagram-title.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.title.mermaid',
      patterns: [{include: 'source.mermaid#entity'}]
    }
  },
  scopeName: 'source.mermaid.user-journey'
}

export default grammar
