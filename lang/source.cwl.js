// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cwl'],
  names: ['common-workflow-language', 'cwl'],
  patterns: [
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.cwl',
      patterns: [{match: '\\.', name: 'constant.character.escape.cwl'}]
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.cwl',
      patterns: [{match: '\\.', name: 'constant.character.escape.cwl'}]
    },
    {
      match:
        '\\b(inputs|outputs|steps|id|requirements|hints|label|doc|secondaryFiles|streamable|outputBinding|format|outputSource|linkMerge|type|glob|loadContents|outputEval|merge_nested|merge_flattened|location|path|basename|dirname|nameroot|nameext|checksum|size|format|contents|listing|fields|symbols|items|in|out|run|scatter|scatterMethod|source|default|valueFrom|expressionLib|types|linkMerge|inputBinding|position|prefix|separate|itemSeparator|valueFrom|shellQuote|packages|package|version|specs|entry|entryname|writable|baseCommand|arguments|stdin|stderr|stdout|successCodes|temporaryFailCodes|permanentFailCodes|dockerLoad|dockerFile|dockerImport|dockerImageId|dockerOutputDirectory|envDef|envName|envValue|coresMin|coresMax|ramMin|ramMax|tmpdirMin|tmpdirMax|outdirMin|outdirMax)(?=:)',
      name: 'keyword.control.cwl'
    },
    {
      begin: 'cwlVersion:',
      beginCaptures: {0: {name: 'cwlVersion.keyword.control.cwl'}},
      end: '$',
      endCaptures: {0: {name: 'cwlVersion.definition.string.end.cwl'}},
      name: 'cwlVersion.cwl',
      patterns: [
        {
          match:
            '\\b(draft-2|draft-3.dev1|draft3-dev2|draft3-dev3|draft3-dev4|draft3-dev5|draft3|draft4.dev1|draft4.dev2|draft4.dev3|v1.0.dev4|v1.0)\\b',
          name: 'storage.constant.cwl'
        }
      ]
    },
    {
      begin: 'dockerPull:',
      beginCaptures: {0: {name: 'dockerPull.keyword.control.cwl'}},
      end: '$',
      endCaptures: {0: {name: 'dockerPull.definition.string.end.cwl'}},
      name: 'dockerPull.cwl',
      patterns: [{match: '\\b(.*)$', name: 'storage.variable.cwl'}]
    },
    {
      begin: 'class:',
      beginCaptures: {0: {name: 'class.keyword.control.cwl'}},
      end: '$',
      endCaptures: {0: {name: 'class.definition.string.end.cwl'}},
      name: 'class.cwl',
      patterns: [
        {
          match:
            '\\b(CommandLineTool|ExpressionTool|Workflow|InlineJavascriptRequirement|SchemaDefRequirement|DockerRequirement|SoftwareRequirement|InitialWorkDirRequirement|EnvVarRequirement|ShellCommandRequirement|ResourceRequirement)\\b',
          name: 'support.type.cwl'
        }
      ]
    },
    {
      match:
        ':\\s+(null|boolean|int|long|float|double|string|File|Directory)\\b',
      name: 'storage.type.cwl'
    },
    {match: '#.*$', name: 'comment.line.number-sign.cwl'}
  ],
  scopeName: 'source.cwl'
}

export default grammar
