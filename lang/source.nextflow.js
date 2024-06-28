// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.nextflow-groovy'],
  extensions: ['.nf'],
  names: ['nextflow'],
  patterns: [{include: '#nfl-rules'}],
  repository: {
    'code-block': {
      begin: '{',
      end: '}',
      name: 'code.block.nextflow',
      patterns: [{include: '#nfl-rules'}]
    },
    'nfl-rules': {
      patterns: [
        {include: '#process-def'},
        {include: '#code-block'},
        {include: 'source.nextflow-groovy'}
      ]
    },
    'process-body': {
      begin: '{',
      end: '(?=})',
      name: 'process.body.nextflow',
      patterns: [
        {
          match:
            '(?:accelerator|afterScript|beforeScript|cache|cpus|conda|container|containerOptions|clusterOptions|disk|echo|errorStrategy|executor|ext|label|machineType|maxErrors|maxForks|maxRetries|memory|module|penv|pod|publishDir|queue|scratch|stageInMode|stageOutMode|storeDir|tag|time|validExitStatus)\\b',
          name: 'process.directive.type.nextflow'
        },
        {
          match: '(?:input|output|when|script|shell|exec):',
          name: 'constant.block.nextflow'
        },
        {include: 'source.nextflow-groovy#comments'},
        {include: 'source.nextflow-groovy#support-functions'},
        {include: 'source.nextflow-groovy#keyword'},
        {include: 'source.nextflow-groovy#values'},
        {include: 'source.nextflow-groovy#anonymous-classes-and-new'},
        {include: 'source.nextflow-groovy#types'},
        {include: 'source.nextflow-groovy#parens'},
        {include: 'source.nextflow-groovy#closures'},
        {include: 'source.nextflow-groovy#braces'}
      ]
    },
    'process-def': {
      begin: '^\\s*(process)\\s+(\\w+|"[^"]+"|\'[^\']+\')\\s*',
      beginCaptures: {
        1: {name: 'keyword.nextflow'},
        2: {name: 'function.nextflow'}
      },
      end: '}',
      name: 'process.nextflow',
      patterns: [{include: '#process-body'}]
    }
  },
  scopeName: 'source.nextflow'
}

export default grammar
