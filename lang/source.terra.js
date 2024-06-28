// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['terra'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.control.terra'},
        2: {name: 'entity.name.function.scope.terra'},
        3: {name: 'entity.name.function.terra'},
        4: {name: 'punctuation.definition.parameters.begin.terra'},
        5: {name: 'variable.parameter.function.terra'},
        6: {name: 'punctuation.definition.parameters.end.terra'}
      },
      match:
        '\\b(terra|function)\\s+([a-zA-Z_.:]+[.:])?([a-zA-Z_]\\w*)\\s*(\\()([^)]*)(\\))',
      name: 'meta.function.terra'
    },
    {
      match:
        '(?<![\\d.])\\s0x[a-fA-F\\d]+|\\b\\d+(\\.\\d+)?([eE]-?\\d+)?|\\.\\d+([eE]-?\\d+)?',
      name: 'constant.numeric.terra'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.terra'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.terra'}},
      name: 'string.quoted.single.terra',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.terra'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.terra'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.terra'}},
      name: 'string.quoted.double.terra',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.terra'}]
    },
    {
      begin: '(?<!--)\\[(=*)\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.terra'}},
      end: '\\]\\1\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.terra'}},
      name: 'string.quoted.other.multiline.terra'
    },
    {
      begin: '--\\[(=*)\\[',
      captures: {0: {name: 'punctuation.definition.comment.terra'}},
      end: '\\]\\1\\]',
      name: 'comment.block.terra'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.terra'}},
      match: '(--)(?!\\[\\[).*$\\n?',
      name: 'comment.line.double-dash.terra'
    },
    {
      match:
        '\\b(break|do|else|for|if|elseif|return|then|repeat|while|until|end|function|local|in)\\b',
      name: 'keyword.control.terra'
    },
    {
      match:
        '(?<![^.]\\.|:)\\b(false|nil|true|_G|_VERSION|math\\.(pi|huge))\\b|(?<![.])\\.{3}(?!\\.)',
      name: 'constant.language.terra'
    },
    {match: '(?<![^.]\\.|:)\\b(self)\\b', name: 'variable.language.self.terra'},
    {
      match:
        '(?<![^.]\\.|:)\\b(assert|collectgarbage|dofile|error|getfenv|getmetatable|ipairs|loadfile|loadstring|module|next|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall)\\b(?=[( {])',
      name: 'support.function.terra'
    },
    {
      match:
        '(?<![^.]\\.|:)\\b(coroutine\\.(create|resume|running|status|wrap|yield)|string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\\.(concat|insert|maxn|remove|sort)|math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?)|io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\\.(cpath|loaded|loadlib|path|preload|seeall)|debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|traceback))\\b(?=[( {])',
      name: 'support.function.library.terra'
    },
    {match: '\\b(and|or|not)\\b', name: 'keyword.operator.terra'},
    {
      match: '\\+|-|%|#|\\*|\\/|\\^|==?|~=|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)',
      name: 'keyword.operator.terra'
    }
  ],
  scopeName: 'source.terra'
}

export default grammar
