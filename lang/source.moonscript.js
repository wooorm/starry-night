// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.moon'],
  names: ['moonscript'],
  patterns: [
    {
      captures: {1: {name: 'punctuation.definition.comment.lua'}},
      match: '(--)(?!\\[\\[).*$\\n?',
      name: 'comment.line.double-dash.lua'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lua'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.lua'}},
      name: 'string.quoted.single.lua',
      patterns: [
        {match: '\\\\(\\d{1,3}|.)', name: 'constant.character.escape.lua'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lua'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lua'}},
      name: 'string.quoted.double.lua',
      patterns: [
        {match: '\\\\(\\d{1,3}|.)', name: 'constant.character.escape.lua'}
      ]
    },
    {
      begin: '(?<!--)\\[(=*)\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lua'}},
      end: '\\]\\1\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lua'}},
      name: 'string.quoted.other.multiline.lua'
    },
    {
      match:
        '(?<![\\d.])\\s0x[a-fA-F\\d]+|\\b\\d+(\\.\\d+)?([eE]-?\\d+)?|\\.\\d+([eE]-?\\d+)?',
      name: 'constant.numeric.lua'
    },
    {match: '\\b[A-Z]\\w*\\b(?!:)', name: 'support.constant'},
    {match: '=>|->', name: 'keyword.operator'},
    {match: '\\b(and|or|not)\\b', name: 'keyword.operator.lua'},
    {match: '[a-zA-Z_]\\w*\\s*(?=:)', name: 'entity.name.function'},
    {match: '\\(|\\)', name: 'entity.name.function'},
    {
      match:
        '\\+|-|%|#|\\*|\\/|\\^|==?|~=|!=|\\\\|:|,|;|\\.|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)',
      name: 'keyword.operator.lua'
    },
    {match: '{|}|\\[|\\]', name: 'storage.modifier'},
    {match: '\\b(class|extends|super)\\b', name: 'storage.type.class'},
    {
      match:
        '\\b(if|then|else|elseif|export|import|from|switch|when|with|using|do|for|in|while|return|local|unless|continue|break)\\b',
      name: 'keyword.control'
    },
    {match: '\\b(self)\\b', name: 'variable.language'},
    {match: '@@?[a-zA-Z_]\\w*\\b', name: 'variable.parameter'},
    {match: '\\b(nil)\\b', name: 'constant.language.nil'},
    {match: '\\b(true|false)\\b', name: 'constant.language.boolean'},
    {
      match: '(?<!\\.|\\\\)\\b(function|repeat|end)\\b(?!\\s*:)',
      name: 'invalid.illegal'
    },
    {
      match:
        '(?<![^.]\\.|\\\\)\\b(assert|collectgarbage|dofile|error|getfenv|getmetatable|ipairs|loadfile|loadstring|module|next|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall)\\b',
      name: 'support.function.lua'
    },
    {match: '(?<![^.]\\.|\\\\)\\b(_G)\\b', name: 'support.constant'},
    {
      match:
        '(?<![^.]\\.|\\\\)\\b(coroutine\\.(create|resume|running|status|wrap|yield)|string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\\.(concat|insert|maxn|remove|sort)|math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?)|io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\\.(cpath|loaded|loadlib|path|preload|seeall)|debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|traceback))\\b',
      name: 'support.function.library.lua'
    }
  ],
  scopeName: 'source.moonscript'
}

export default grammar
