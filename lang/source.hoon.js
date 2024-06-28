// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/pkova/hoon-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hoon'],
  names: ['hoon'],
  patterns: [
    {begin: '::', end: '\\n', name: 'comment.line.hoon'},
    {begin: '\\s*"""', end: '\\s*"""', name: 'string.double.hoon'},
    {begin: "\\s*'''", end: "\\s*'''", name: 'string.double.hoon'},
    {
      begin: '\\"',
      end: '\\"',
      name: 'string.double.hoon',
      patterns: [{match: '\\\\.|[^"]'}]
    },
    {
      begin: "\\'",
      end: "\\'",
      name: 'string.single.hoon',
      patterns: [{match: "\\\\.|[^']"}]
    },
    {
      match: '[a-z]([a-z0-9-]*[a-z0-9])?(?=\\=)',
      name: 'constant.character.hoon'
    },
    {
      begin: '\\+[-+]  (?=[a-z]([a-z0-9-]*[a-z0-9])?)',
      contentName: 'entity.name.function.hoon',
      end: '(?![a-z0-9-])'
    },
    {match: '%[a-z]([a-z0-9-]*[a-z0-9])?', name: 'constant.character.hoon'},
    {match: '@(?:[a-z0-9-]*[a-z0-9])?|\\*', name: 'storage.type.hoon'},
    {
      match:
        '\\.[\\^\\+\\*=\\?]|![><:\\.=\\?!]|=[>|:,\\.\\-\\^<+;/~\\*\\?]|\\?[>|:\\.\\-\\^<\\+&~=@!]|\\|[\\$_%:\\.\\-\\^~\\*=@\\?]|\\+[|\\$\\+\\*]|:[_\\-\\^\\+~\\*]|%[_:\\.\\-\\^\\+~\\*=]|\\^[|:\\.\\-\\+&~\\*=\\?]|\\$[|_%:<>\\-\\^&~@=\\?]|;[:<\\+;\\/~\\*=]|~[>|\\$_%<\\+\\/&=\\?!]|--|==',
      name: 'keyword.control.hoon'
    },
    {
      begin: ';script(type "text/coffeescript")',
      end: '==',
      name: 'keyword.control.hoon'
    }
  ],
  scopeName: 'source.hoon'
}

export default grammar
