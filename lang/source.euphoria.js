// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/OpenEuphoria/vscode-euphoria>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['euphoria'],
  patterns: [
    {include: '#comments'},
    {include: '#entities'},
    {include: '#keywords'},
    {include: '#strings'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '((?:--).*)$', name: 'comment.line.double-dash.euphoria'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.euphoria'}
      ]
    },
    entities: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.euphoria'},
            2: {name: 'entity.name.section'}
          },
          match: '^\\s*(namespace)\\s+(\\w+)$'
        },
        {
          captures: {
            1: {name: 'invalid.deprecated'},
            2: {name: 'storage.modifier.euphoria'},
            3: {name: 'storage.type.function'},
            4: {name: 'entity.name.function'}
          },
          match:
            '^\\s*(?:(deprecate)\\s+)?(?:(public|export|global|override)\\s+)?(function|procedure)\\s+(\\w+)'
        },
        {
          captures: {
            1: {name: 'invalid.deprecated'},
            2: {name: 'storage.modifier.euphoria'},
            3: {name: 'storage.type.function'},
            4: {name: 'entity.name.type'}
          },
          match:
            '^\\s*(?:(deprecate)\\s+)?(?:(public|export|global|override)\\s+)?(type)\\s+(\\w+)'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(break|case|continue|do|else|elsif|entry|exit|for|goto|if|label|loop|retry|return|switch|then|until|while)\\b',
          name: 'keyword.control.euphoria'
        },
        {
          match: '\\b(!|\\?|and|not|or|xor)\\b',
          name: 'keyword.operator.euphoria'
        },
        {
          match:
            '\\b(as|by|constant|elsedef|elsifdef|end|enum|fallthru|ifdef|include|namespace|routine|to|with|without)\\b',
          name: 'keyword.other.euphoria'
        },
        {
          match: '\\b(deprecate|export|global|override|public)\\b',
          name: 'storage.modifier.euphoria'
        },
        {
          match: '\\b(enum|constant|function|procedure|type)\\b',
          name: 'storage.type.euphoria'
        },
        {
          match:
            '\\b(abort|and_bits|append|arctan|c_func|c_proc|call|call_func|call_proc|clear_screen|close|command_line|compare|cos|date|delete|delete_routine|equal|find|find_from|floor|get_key|getc|getenv|gets|hash|head|include_paths|insert|length|log|machine_func|machine_proc|match|match_from|mem_copy|mem_set|not_bits|open|option_switches|or_bits|peek|peek2s|peek2u|peek4s|peek4u|peek_string|peeks|platform|poke|poke2|poke4|position|power|prepend|print|printf|puts|rand|remainder|remove|repeat|replace|routine_id|sin|splice|sprintf|sqrt|system|system_exec|tail|tan|task_clock_start|task_clock_stop|task_create|task_list|task_schedule|task_self|task_status|task_suspend|task_yield|time|trace|xor_bits)\\b',
          name: 'support.function.euphoria'
        },
        {
          match: '\\b(atom|integer|object|sequence)\\b',
          name: 'support.type.euphoria'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.euphoria',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.euphoria'}
          ]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.euphoria',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.euphoria'}
          ]
        },
        {begin: '"""', end: '"""', name: 'string.quoted.triple.euphoria'},
        {begin: '`', end: '`', name: 'string.quoted.other.euphoria'}
      ]
    }
  },
  scopeName: 'source.euphoria'
}

export default grammar
