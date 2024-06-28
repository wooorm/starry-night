// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.groovy'],
  extensions: ['.gradle'],
  names: ['gradle'],
  patterns: [{include: '#gradle'}],
  repository: {
    blocks: {
      patterns: [
        {
          begin: '(?!<project\\.)(\\w+)\\s*{',
          beginCaptures: {1: {name: 'entity.name.block.groovy.gradle'}},
          end: '}',
          name: 'meta.definition.block.groovy.gradle',
          patterns: [{include: '#gradle-groovy'}]
        }
      ]
    },
    gradle: {
      patterns: [
        {include: '#tasks'},
        {include: '#blocks'},
        {include: 'source.groovy'}
      ]
    },
    'gradle-groovy': {patterns: [{include: 'source.groovy'}]},
    tasks: {
      patterns: [
        {
          begin: 'task\\s+(\\w+)\\s*(?=[\\({])',
          beginCaptures: {1: {name: 'entity.name.task.groovy.gradle'}},
          end: '^',
          name: 'meta.definition.task.groovy.gradle',
          patterns: [{include: '#gradle-groovy'}]
        }
      ]
    }
  },
  scopeName: 'source.groovy.gradle'
}

export default grammar
