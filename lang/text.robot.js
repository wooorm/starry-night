// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/shellderp/sublime-robot-plugin>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.robot', '.resource'],
  names: ['robotframework'],
  patterns: [
    {
      begin:
        '(?i)^\\*+\\s*(settings?|metadata|(user )?keywords?|test ?cases?|variables?)',
      end: '$',
      name: 'string.robot.header'
    },
    {
      begin: '(?i)^\\s*\\[?Documentation\\]?',
      end: '^(?!\\s*+\\.\\.\\.)',
      name: 'comment'
    },
    {
      match:
        '(?i)\\[(Arguments|Setup|Teardown|Precondition|Postcondition|Template|Return|Timeout)\\]',
      name: 'storage.type.method.robot'
    },
    {
      begin: '(?i)\\[Tags\\]',
      end: '^(?!\\s*+\\.\\.\\.)',
      name: 'storage.type.method.robot',
      patterns: [{match: '^\\s*\\.\\.\\.', name: 'comment'}]
    },
    {match: '\\b([0-9]*(\\.[0-9]+)?)\\b', name: 'constant.numeric.robot'},
    {
      begin: '((?<!\\\\)|(?<=\\\\\\\\))[$@&%]\\{',
      end: '\\}',
      name: 'entity.name.class',
      patterns: [{include: '$self'}, {match: '.', name: 'entity.name.class'}]
    },
    {begin: '(^| {2,}|\t|\\| {1,})(?<!\\\\)#', end: '$', name: 'comment.robot'},
    {
      begin: '(^[^ \\t\\*\\n\\|]+)|((?<=^\\|)\\s+[^ \\t\\*\\n\\|]+)',
      end: '(?=\\s{2})|\\t|$|\\s+(?=\\|)',
      name: 'keyword.control.robot'
    },
    {match: '(?i)^\\s*(Given|And|Then|When|But)', name: 'keyword.control.robot'}
  ],
  scopeName: 'text.robot'
}

export default grammar
