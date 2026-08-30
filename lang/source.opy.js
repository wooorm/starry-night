// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Zezombye/overpy-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.opy'],
  names: ['overpy', 'opy'],
  patterns: [
    {include: '#comments'},
    {include: '#multiline-comments'},
    {include: '#macros'},
    {include: '#fstrings'},
    {include: '#strings'},
    {include: '#apos-fstrings'},
    {include: '#apos-strings'},
    {include: '#string-modifiers'},
    {include: '#labels'},
    {include: '#keywords'},
    {include: '#invalid'},
    {include: '#numbers'},
    {include: '#enums'},
    {include: '#classes'},
    {include: '#functions'}
  ],
  repository: {
    'apos-fstrings': {
      begin: "((?<=f)|(?<=f\\w)|(?<=f\\w\\w))'",
      end: "'",
      name: 'string.quoted.double.overpy',
      patterns: [
        {
          match: '\\\\([\\\\"\'nrtzbf]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|&\\w+;)',
          name: 'constant.character.escape.overpy'
        },
        {
          begin: '\\{',
          contentName: 'meta.embedded.overpy',
          end: "[\\}']",
          name: 'constant.character.escape.overpy',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'apos-strings': {
      begin: "'",
      end: "'",
      name: 'string.quoted.double.overpy',
      patterns: [
        {
          match:
            '(\\\\([\\\\"\'nrtzbf]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|&\\w+;))|(\\{\\d*\\})',
          name: 'constant.character.escape.overpy'
        }
      ]
    },
    classes: {patterns: [{match: '\\b[A-Z][a-z_]\\w*\\b', name: 'variable'}]},
    comments: {
      patterns: [{match: '#[^!].*$', name: 'comment.line.number-sign'}]
    },
    enums: {patterns: [{match: '\\b[A-Z_\\d]+\\b', name: 'constant'}]},
    fstrings: {
      begin: '((?<=f)|(?<=f\\w)|(?<=f\\w\\w))"',
      end: '"',
      name: 'string.quoted.double.overpy',
      patterns: [
        {
          match: '\\\\([\\\\"\'nrtzbf]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|&\\w+;)',
          name: 'constant.character.escape.overpy'
        },
        {
          begin: '\\{',
          contentName: 'meta.embedded.overpy',
          end: '[\\}"]',
          name: 'constant.character.escape.overpy',
          patterns: [{include: '$self'}]
        }
      ]
    },
    functions: {patterns: [{match: '\\b\\w+(?=\\()', name: 'entity'}]},
    invalid: {
      patterns: [
        {
          match:
            '\\b(False|True|None|Null|class|finally|is|try|from|nonlocal|with|as|yield|assert|except|raise|disabled|import)\\b',
          name: 'invalid.illegal'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(if|else|elif|do|while|for|return|continue|false|true|null|goto|lambda|pass|del|break|switch|case|default|def|rule|settings|globalvar|playervar|subroutine|unsigned|signed|int|float|bool|enum|const|macro|self)\\b',
          name: 'keyword'
        },
        {
          match:
            '\\b(and|or|not|in)\\b|((\\+|\\-|\\*\\*|\\/|\\%|\\*|<|>)=?)|(\\=)|\\.|((min|max|\\!)\\=)',
          name: 'constant'
        },
        {
          match:
            '\\b(eventPlayer|attacker|victim|eventDamage|eventHealing|eventWasCriticalHit|eventWasEnvironment|eventWasHealthPack|eventAbility|eventDirection|healee|healer|hostPlayer|localPlayer|loc|RULE_CONDITION|ruleCondition|RULE_START|__\\w+__|[A-Z]|[A-D][A-Z])\\b',
          name: 'entity.name.tag'
        },
        {match: '\\@\\w+\\b', name: 'markup.list'},
        {match: '(?<=\\@Event )\\w+\\b', name: 'meta.diff.range'},
        {match: '(?<=\\@Team )\\w+\\b', name: 'meta.diff.range'},
        {match: '(?<=\\@Slot )\\w+\\b', name: 'meta.diff.range'},
        {match: '(?<=\\@Hero )\\w+\\b', name: 'meta.diff.range'}
      ]
    },
    labels: {
      patterns: [
        {
          match: '^[ \\t]*(?!(do|else|elif|default)\\b)[A-Za-z\\d_]+(?=:)',
          name: 'markup.italic'
        },
        {match: '(?<=goto )[A-Za-z\\d_]+', name: 'markup.italic'}
      ]
    },
    macros: {begin: '#!', end: '(?<!\\\\)\\n', name: 'markup.heading'},
    'multiline-comments': {
      begin: '\\/\\*',
      end: '\\*\\/',
      name: 'comment.line'
    },
    numbers: {
      patterns: [
        {
          match: '\\b[+-]?((\\d*\\.)?\\d+|0x[0-9a-fA-F]+)\\b',
          name: 'constant.numeric'
        }
      ]
    },
    'string-modifiers': {
      patterns: [{match: '\\b[a-z]+(?=["\'])', name: 'entity.name.tag'}]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.overpy',
      patterns: [
        {
          match:
            '(\\\\([\\\\"\'nrtzbf]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|&\\w+;))|(\\{\\d*\\})',
          name: 'constant.character.escape.overpy'
        }
      ]
    }
  },
  scopeName: 'source.opy'
}

export default grammar
