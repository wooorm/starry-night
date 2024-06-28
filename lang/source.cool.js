// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['cool'],
  patterns: [
    {match: '--(.*)\\n', name: 'comment.line.double-dash'},
    {
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block.documentation',
      patterns: [{include: '#comment.block.documentation'}]
    },
    {match: '(Int|String|Bool|Object|IO)', name: 'support.class'},
    {
      match: '(abort\\(\\)|type_name\\(\\)|copy\\(\\))',
      name: 'support.function'
    },
    {
      match: '\\b(if|fi|else|then|loop|pool|while|case|esac)\\b',
      name: 'keyword.control'
    },
    {
      match: '\\b(in|inherits|isvoid|let|new|of|new|not)\\b',
      name: 'keyword.operator'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language'},
    {match: "(?x)\\b((?i:( [0-9]+ ( ' [0-9]+ )* )))", name: 'constant.numeric'},
    {
      match: '\\b([A-Z]([A-Z]|[a-z]|[0-9]|_)*|SELF_TYPE)\\b',
      name: 'entity.name.type'
    },
    {match: '\\b(class)\\b', name: 'storage.modifier'},
    {match: '\\b(self)\\b', name: 'variable.language'},
    {match: '\\b[a-z]([A-z]|[a-z]|[0-9]|_)*\\b', name: 'variable.parameter'},
    {match: '\\b[a-z]*\\(.*\\)\\b', name: 'entity.name.function'},
    {
      begin: '"',
      beginCaptures: {},
      end: '"',
      endCaptures: {},
      name: 'string.quoted.double',
      patterns: [{include: '#string_placeholder'}]
    }
  ],
  repository: {
    formal_param: {
      patterns: [{match: '\\s#variable.parameter : entity.name.type\\s'}]
    },
    formals: {
      patterns: [{match: '\\s(#formal_param, #formals|#formal_param|)\\s'}]
    }
  },
  scopeName: 'source.cool'
}

export default grammar
