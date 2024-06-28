// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ninja'],
  names: ['ninja'],
  patterns: [
    {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.ninja'}},
      end: '$',
      name: 'comment.line.number-sign.ninja'
    },
    {
      begin: '^(rule|pool)\\s+(\\S+)',
      beginCaptures: {
        1: {name: 'storage.type.$1.ninja'},
        2: {
          name: 'entity.name.function.$1.ninja',
          patterns: [{include: '#escapes'}]
        }
      },
      end: '^(?=\\S)',
      name: 'meta.$1.ninja',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?x)\n^ (build) \\s+\n((?:[^\\s:|$]|\\$.)+)\n(?:\n  (\\|{1,2})\n  ((?:[^:$]|\\$.)*)\n  (?=:)\n)?',
      beginCaptures: {
        1: {name: 'storage.type.build.ninja'},
        2: {
          name: 'entity.name.function.build.ninja',
          patterns: [{include: '#escapes'}]
        },
        3: {name: 'keyword.operator.build.ninja'},
        4: {
          patterns: [
            {include: '#escapes'},
            {
              captures: {0: {patterns: [{include: '#escapes'}]}},
              match: '(?:[^\\s:|$]|\\$.)+',
              name: 'variable.reference.ninja'
            }
          ]
        }
      },
      end: '(?<!\\$)$',
      name: 'meta.build.ninja',
      patterns: [
        {match: '\\|{2}', name: 'keyword.operator.build.ninja'},
        {match: '(?:[^\\s:|$]|\\$.)+', name: 'variable.reference.ninja'},
        {include: '$self'}
      ]
    },
    {
      captures: {1: {name: 'storage.modifier.phony.build.ninja'}},
      match: '(?<=:)\\s*(phony)\\b'
    },
    {
      captures: {1: {name: 'constant.numeric.ninja'}},
      match: '(?<==)\\s*(\\.\\d+|\\d+(?:\\.\\d+)?)'
    },
    {
      begin: '^(default)(?=\\s|$)',
      beginCaptures: {1: {name: 'storage.type.build.default.ninja'}},
      end: '(?<!\\$)$',
      name: 'meta.default.ninja',
      patterns: [
        {match: '\\S+', name: 'entity.name.function.build.ninja'},
        {include: '$self'}
      ]
    },
    {
      begin: '^\\s*(command)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.language.rule.ninja'},
        2: {name: 'keyword.operator.assignment.ninja'}
      },
      end: '(?<!\\$)$',
      name: 'meta.command.ninja',
      patterns: [
        {include: '$self'},
        {
          captures: {
            1: {
              name: 'embedded.source.shell',
              patterns: [{include: 'source.shell'}]
            }
          },
          match: '(?:\\G|^)(.+)(?=$)'
        }
      ]
    },
    {
      captures: {
        1: {name: 'support.variable.language.rule.ninja'},
        2: {name: 'keyword.operator.assignment.ninja'}
      },
      match:
        '(?x) ^ \\s* (depfile|deps|msvc_deps_prefix|description|generator|in |in_newline|out|restat|rspfile|rspfile_content) \\s* (=)',
      name: 'meta.property.ninja'
    },
    {
      begin: '^(subninja|include)\\s+',
      beginCaptures: {1: {name: 'keyword.operator.$1.ninja'}},
      contentName: 'string.unquoted.filename.ninja',
      end: '(?<!\\$)$',
      name: 'meta.$1.ninja',
      patterns: [{include: '$self'}]
    },
    {match: ':', name: 'punctuation.separator.dictionary.key-value.ninja'},
    {
      captures: {
        1: {name: 'variable.parameter.reference.ninja'},
        2: {name: 'keyword.operator.assignment.ninja'}
      },
      match: '^\\s*(\\w+)\\s*(=)'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.ninja'}},
      match: '(\\$)\\w+',
      name: 'variable.parameter.reference.ninja'
    },
    {match: '\\$$\\n?', name: 'constant.character.escape.newline.ninja'},
    {
      captures: {
        1: {name: 'punctuation.definition.variable.begin.ninja'},
        2: {name: 'punctuation.definition.variable.end.ninja'}
      },
      match: '(\\${)\\s*[^{}]+\\s*(})',
      name: 'variable.other.bracket.ninja'
    },
    {include: '#escapes'}
  ],
  repository: {
    escapes: {
      patterns: [
        {match: '\\${2}', name: 'constant.character.escape.dollar-sign.ninja'},
        {
          match: '\\$[ \\t]',
          name: 'constant.character.escape.whitespace.ninja'
        },
        {match: '\\$:', name: 'constant.character.escape.colon.ninja'}
      ]
    }
  },
  scopeName: 'source.ninja'
}

export default grammar
