// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/KrazIvan/LOLCODE-grammar-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lol'],
  names: ['lolcode'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#variables'},
    {include: '#operators'},
    {include: '#parentheses'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '(?<!\\S)BTW(?:[^\\n]*)', name: 'comment.line.lolcode'},
        {
          begin: '(?<!\\S)OBTW(?!\\S)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.lolcode'}},
          end: '(?<!\\S)TLDR(?!\\S)',
          endCaptures: {0: {name: 'punctuation.definition.comment.lolcode'}},
          name: 'comment.block.lolcode'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?:(?<=[^a-zA-Z0-9\\?])|(?:^))(O HAI IM|HAI|AWSUM THX|O NOES|KTHX|KTHXBYE|ITZ LIEK|IS NOW A|BOTH SAEM|BIGGR OF|SMALLR OF|UPPIN YR|NERFIN YR|TIL|WILE|DIFFRINT|ITZ A|ITZ|IS|IZ|AN|BIGGR|SMALLR|EITHER|MAEK|WON|NOT|ALL|ANY|MKAY|IF U SAY SO|OIC|I HAS A|IM OUTTA YR|GTFO|WTF\\?|YA RLY|O RLY\\?|MEBBE|IM IN YR|YR|HAS A|NO WAI|FOUND|OF|R|I IZ|OMG|OMGWTF|A)(?:(?=[^a-zA-Z0-9\\?])|(?:$))',
          name: 'keyword.control.lolcode'
        },
        {
          captures: {
            1: {name: 'keyword.control.lolcode'},
            2: {name: 'entity.name.class.lolcode'},
            3: {name: 'keyword.control.lolcode'}
          },
          match: '(CAN HAS )(.*?)(\\?)'
        },
        {
          captures: {
            1: {name: 'keyword.control.lolcode'},
            2: {name: 'variable.other.lolcode'},
            3: {name: 'keyword.control.lolcode'}
          },
          match: '(PLZ OPEN FILE )(.*?)(\\?)'
        },
        {
          match:
            '\\b(?:VISIBLE|GIMMEH|SUM|DIFF|SRS|PRODUKT|QUOSHUNT|MOD|BIGGER THAN|SMALLER THAN|SMOOSH|INVISIBLE)\\b',
          name: 'support.function.lolcode'
        },
        {
          match: '\\b(?:HOW IZ I|HOW DUZ I)\\b',
          name: 'storage.type.function.lolcode'
        },
        {
          match: '\\b(?:TROOF|NUMBR|NUMBAR|YARN|BUKKIT|NOOB)\\b',
          name: 'storage.type.lolcode'
        },
        {match: '\\b(?:WIN|FAIL)\\b', name: 'constant.language.boolean.lolcode'}
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b\\d+\\.\\d+\\b', name: 'constant.numeric.float.lolcode'},
        {match: '\\b\\d+\\b', name: 'constant.numeric.integer.lolcode'}
      ]
    },
    operators: {
      patterns: [
        {
          match: '\\+|-|\\*|/|%|>|<|=|!|\\?|:',
          name: 'keyword.operator.lolcode'
        },
        {include: '#parentheses'}
      ]
    },
    parentheses: {
      patterns: [{match: '\\(|\\)', name: 'punctuation.parenthesis.lolcode'}]
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'string.quoted.double.lolcode'},
            2: {name: 'string.quoted.single.lolcode'}
          },
          match: '("(?:\\\\.|[^"\\\\])*")|(\'(?:\\\\.|[^\'\\\\])*\')'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '(?<=\\b)([A-Za-z][A-Za-z0-9_]*)\\b',
          name: 'variable.other.lolcode'
        },
        {match: '(?<=CAN HAS )(\\w*)(?=\\?)', name: 'variable.other.lolcode'}
      ]
    }
  },
  scopeName: 'source.lolcode'
}

export default grammar
