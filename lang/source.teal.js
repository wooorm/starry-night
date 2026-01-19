// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/teal-language/vscode-teal>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  extensionsWithDot: ['.tl'],
  names: ['teal'],
  patterns: [{include: '#expression'}, {include: '#statement'}],
  repository: {
    attribute: {
      match: '<\\s*(const|close|total)\\s*>',
      name: 'storage.modifier.teal'
    },
    base: {
      patterns: [
        {include: '#pragma'},
        {include: '#comment'},
        {include: '#constant'},
        {include: '#number'},
        {include: '#string'},
        {include: '#long-string'},
        {include: '#attribute'}
      ]
    },
    brackets: {
      patterns: [
        {
          begin: '\\[',
          end: '\\]',
          name: 'teal.brackets',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    break: {match: '\\b(break)\\b', name: 'keyword.control.teal'},
    'builtin-function': {
      patterns: [
        {
          match:
            '(?<![^.]\\.|:)\\b(assert|collectgarbage|dofile|error|getfenv|getmetatable|ipairs|loadfile|loadstring|module|next|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall)\\b(?=\\s*(?:[({"\']|\\[\\[))',
          name: 'support.function.teal'
        },
        {
          match:
            '(?<![^.]\\.|:)\\b(coroutine\\.(create|resume|running|status|wrap|yield)|string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\\.(concat|insert|maxn|remove|sort)|math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?)|io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\\.(cpath|loaded|loadlib|path|preload|seeall)|debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|traceback))\\b(?=\\s*(?:[({"\']|\\[\\[))',
          name: 'support.function.library.teal'
        }
      ]
    },
    comment: {
      patterns: [{include: '#long-comment'}, {include: '#short-comment'}]
    },
    constant: {
      patterns: [
        {match: '\\b(nil|true|false)\\b', name: 'constant.language.teal'}
      ]
    },
    'do-block': {
      begin: '\\bdo\\b',
      captures: {0: {name: 'keyword.control.teal'}},
      end: '\\bend\\b',
      name: 'statement.do-block.teal',
      patterns: [{include: '#statement'}]
    },
    'enum-block': {
      begin: '\\benum\\b',
      captures: {0: {name: 'storage.type.enum.teal'}},
      end: '\\bend\\b',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {match: '[a-zA-Z_][a-zA-Z0-9_]*', name: 'support.type.teal'}
      ]
    },
    'escaped-char': {
      patterns: [
        {
          match: '\\\\[abfnrtvz\\\\"\'\\n]',
          name: 'constant.character.escape.teal'
        },
        {match: '\\\\\\d{1,3}', name: 'constant.character.escape.byte.teal'},
        {
          match: '\\\\x[0-9A-Fa-f][0-9A-Fa-f]',
          name: 'constant.character.escape.byte.teal'
        },
        {
          match: '\\\\u\\{[0-9A-Fa-f]+\\}',
          name: 'constant.character.escape.unicode.teal'
        },
        {match: '\\\\.', name: 'invalid.illegal.character.escape.teal'}
      ]
    },
    expression: {
      patterns: [
        {include: '#base'},
        {include: '#parentheses'},
        {include: '#brackets'},
        {include: '#operator'},
        {include: '#builtin-function'},
        {include: '#function-block'},
        {include: '#function-call'},
        {include: '#table-constructor'},
        {include: '#record-or-interface-block'},
        {include: '#enum-block'},
        {include: '#self'},
        {include: '#field-access'}
      ]
    },
    'field-access': {
      match: '(?<=[^.]\\.|:)\\b([a-zA-Z_][a-zA-Z0-9_]*)',
      name: 'variable.other.teal'
    },
    'for-block': {
      begin: '\\bfor\\b',
      captures: {0: {name: 'keyword.control.teal'}},
      end: '\\bend\\b',
      name: 'statement.for.teal',
      patterns: [
        {
          begin: '(?<=\\bfor\\b)',
          end: '\\bdo\\b',
          endCaptures: {0: {name: 'keyword.control.do.teal'}},
          name: 'teal.for.expression',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?<=\\bdo\\b)',
          end: '(?=\\bend\\b)',
          name: 'teal.for.body',
          patterns: [{include: '#statement'}]
        }
      ]
    },
    'function-arg-name': {
      patterns: [
        {
          begin: '(?<=\\()',
          end: '(?=:|\\))',
          name: 'function.argument.teal',
          patterns: [{include: '#comment'}]
        },
        {
          begin: ',',
          end: '(?=:|\\))',
          name: 'function.argument.teal',
          patterns: [{include: '#comment'}]
        }
      ]
    },
    'function-arg-type': {
      patterns: [
        {
          begin: ':',
          end: '(?=,|\\))',
          patterns: [{include: '#comment'}, {include: '#type'}]
        }
      ]
    },
    'function-args': {
      patterns: [
        {
          begin: '\\(',
          end: '(?=\\))',
          name: 'function.arguments.teal',
          patterns: [
            {include: '#comment'},
            {include: '#function-arg-name'},
            {include: '#function-arg-type'}
          ]
        }
      ]
    },
    'function-block': {
      patterns: [
        {
          begin: '\\bfunction\\b',
          captures: {0: {name: 'keyword.declaration.function.teal'}},
          end: '\\bend\\b',
          patterns: [
            {include: '#function-signature'},
            {include: '#function-body'}
          ]
        }
      ]
    },
    'function-body': {
      begin: '(?<=\\))',
      end: '(?=\\bend\\b)',
      name: 'teal.function.body',
      patterns: [{include: '#statement'}]
    },
    'function-call': {
      patterns: [
        {
          begin:
            '\\b((?!\\bfunction\\b|\\breturn\\b|\\bif\\b|\\belseif\\b|\\bwhile\\b|\\buntil\\b|\\bin\\b)[a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*(?:\\())',
          beginCaptures: {1: {name: 'support.function.any-method.teal'}},
          end: '(?<=\\))',
          name: 'function-call',
          patterns: [{include: '#parentheses'}]
        },
        {
          begin:
            '\\b((?!\\bfunction\\b|\\breturn\\b|\\bif\\b|\\belseif\\b|\\bwhile\\b|\\buntil\\b|\\bin\\b)[a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*(?:\\{))',
          beginCaptures: {1: {name: 'support.function.any-method.teal'}},
          end: '(?<=})',
          name: 'function-call',
          patterns: [{include: '#table-constructor'}]
        },
        {
          begin:
            '\\b((?!\\bfunction\\b|\\breturn\\b|\\bif\\b|\\belseif\\b|\\bwhile\\b|\\buntil\\b|\\bin\\b)[a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*("|\'))',
          beginCaptures: {1: {name: 'support.function.any-method.teal'}},
          end: '(?<=\\2)',
          name: 'function-call',
          patterns: [{include: '#string'}]
        },
        {
          begin:
            '\\b((?!\\bfunction\\b|\\breturn\\b|\\bif\\b|\\belseif\\b|\\bwhile\\b|\\buntil\\b|\\bin\\b)[a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*(\\[(=*)\\[))',
          beginCaptures: {1: {name: 'support.function.any-method.teal'}},
          end: '(?<=\\]\\3\\])',
          name: 'function-call',
          patterns: [{include: '#long-string'}]
        }
      ]
    },
    'function-name': {
      patterns: [
        {match: '([a-zA-Z_][a-zA-Z0-9_]*)', name: 'support.function.name.teal'}
      ]
    },
    'function-signature': {
      patterns: [
        {
          begin: '(?<=\\bfunction\\b)',
          end: '\\)',
          name: 'function.signature.teal',
          patterns: [
            {include: '#comment'},
            {include: '#function-name'},
            {include: '#generics'},
            {include: '#function-args'}
          ]
        }
      ]
    },
    'function-type': {
      patterns: [
        {
          begin:
            '(\\bfunction\\b)\\s*(<\\s*)?([a-zA-Z_][a-zA-Z0-9_, ]*\\s*)?(>\\s*)?\\(',
          beginCaptures: {
            1: {name: 'keyword.declaration.function.teal'},
            3: {name: 'support.type.teal'}
          },
          end: '\\)',
          patterns: [
            {include: '#comment'},
            {
              match: '[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=:)',
              name: 'function.argument.teal'
            },
            {include: '#type'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.declaration.function.teal'},
            3: {name: 'support.type.teal'}
          },
          match:
            '(\\bfunction\\b)\\s*(<\\s*)?([a-zA-Z_][a-zA-Z0-9_, ]*\\s*)?(>\\s*)?'
        }
      ]
    },
    generics: {
      patterns: [
        {
          begin: '<',
          end: '>',
          name: 'type.arguments.teal',
          patterns: [{include: '#comment'}, {include: '#type-arg'}]
        }
      ]
    },
    goto: {match: '\\b(goto)\\b', name: 'keyword.control.teal'},
    'if-block': {
      begin: '\\bif\\b',
      captures: {0: {name: 'keyword.control.teal'}},
      end: '\\bend\\b',
      name: 'statement.if-block.teal',
      patterns: [
        {include: '#expression'},
        {match: '\\bthen\\b', name: 'keyword.control.if-then.teal'},
        {
          begin: '\\belseif\\b',
          captures: {0: {name: 'keyword.control.teal'}},
          end: '\\bthen\\b',
          name: 'statement.elseif.teal',
          patterns: [{include: '#expression'}]
        },
        {match: '\\belse\\b', name: 'keyword.control.else.teal'},
        {include: '#statement'}
      ]
    },
    label: {
      match: '::([a-zA-Z_][a-zA-Z0-9_]*)::',
      name: 'entity.name.label.teal'
    },
    'long-comment': {
      patterns: [
        {
          begin: '--\\[(=*)\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.teal'}
          },
          end: '\\]\\1\\]',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.teal'}},
          name: 'comment.block.teal'
        }
      ]
    },
    'long-string': {
      begin: '\\[(=*)\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.teal'}},
      end: '\\]\\1\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.teal'}},
      name: 'string.multiline.teal'
    },
    'new-type-declaration': {
      begin: '\\b(type)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.type.teal'}},
      end: '$',
      patterns: [
        {
          begin: '[a-zA-Z_][a-zA-Z0-9_]*',
          beginCaptures: {0: {name: 'support.type.teal'}},
          end: '(=|$)',
          patterns: [{include: '#comment'}]
        },
        {
          begin: '(?<==)',
          end: '$',
          patterns: [
            {include: '#comment'},
            {include: '#function-call'},
            {include: '#record-or-interface-block'},
            {include: '#enum-block'},
            {include: '#type'}
          ]
        }
      ]
    },
    number: {
      patterns: [
        {
          match: '(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(?![pPeE.0-9])',
          name: 'constant.numeric.integer.hexadecimal.teal'
        },
        {
          match:
            '(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(\\.[0-9A-Fa-f]+)?([eE]-?\\d*)?([pP][-+]\\d+)?',
          name: 'constant.numeric.float.hexadecimal.teal'
        },
        {
          match: '(?<![\\w\\d.])\\d+(?![pPeE.0-9])',
          name: 'constant.numeric.integer.teal'
        },
        {
          match: '(?<![\\w\\d.])\\d+(\\.\\d+)?([eE]-?\\d*)?',
          name: 'constant.numeric.float.teal'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match: '\\+|-|%|#|\\*|\\/|\\^|==?|~=|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)',
          name: 'keyword.operator.teal'
        },
        {match: '\\b(and|or|not)\\b', name: 'keyword.operator.logical.teal'},
        {match: '\\b(as|is|in)\\b', name: 'keyword.other.teal'}
      ]
    },
    parentheses: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'teal.parentheses',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    pragma: {
      patterns: [
        {
          begin: '--#pragma',
          beginCaptures: {0: {name: 'keyword.control.directive.pragma.teal'}},
          end: '.*$',
          endCaptures: {
            0: {name: 'entity.other.attribute-name.pragma.preprocessor.teal'}
          }
        }
      ]
    },
    'record-or-interface-block': {
      begin: '\\b(record|interface)\\b',
      captures: {0: {name: 'storage.type.record.teal'}},
      end: '\\bend\\b',
      name: 'statement.record-or-interface-block.teal',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\b(is)\\b',
          captures: {0: {name: 'keyword.other.teal'}},
          end: '(?=\\bend\\b|\\bwhere\\b|\\brecord\\b|\\benum\\b|^\\s*\\buserdata\\b|^\\s*\\bmetamethod\\b|\\[|^\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*:)',
          patterns: [{include: '#comment'}, {include: '#type'}]
        },
        {
          begin: '\\b(where)\\b',
          captures: {0: {name: 'keyword.control.teal'}},
          end: '(?=\\bend\\b|\\brecord\\b|\\benum\\b|^\\s*\\buserdata\\b|^\\s*\\bmetamethod\\b|\\[|^\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*:)',
          name: 'where-clause.teal',
          patterns: [{include: '#comment'}, {include: '#expression'}]
        },
        {include: '#brackets'},
        {include: '#enum-block'},
        {include: '#record-or-interface-block'},
        {include: '#new-type-declaration'},
        {match: '^\\s*\\buserdata\\b', name: 'storage.type.userdata.teal'},
        {
          begin: '^\\s*\\bmetamethod\\b',
          beginCaptures: {0: {name: 'storage.type.metamethod.teal'}},
          end: ':',
          patterns: [{include: '#function-name'}]
        },
        {
          captures: {1: {name: 'variable.other.teal'}},
          match: '^\\s*([a-zA-Z_][a-zA-Z0-9_]*)\\s*:'
        },
        {include: '#type'}
      ]
    },
    'repeat-block': {
      begin: '\\brepeat\\b',
      captures: {0: {name: 'keyword.control.teal'}},
      end: '\\buntil\\b',
      name: 'statement.repeat-block.teal',
      patterns: [{include: '#statement'}]
    },
    return: {match: '\\b(return)\\b', name: 'keyword.control.teal'},
    'scope-modifier': {
      match: '\\b(local|global)\\b',
      name: 'storage.modifier.teal'
    },
    self: {
      match: '(?<![^.]\\.|:)\\b(self)\\b',
      name: 'variable.language.self.teal'
    },
    'short-comment': {patterns: [{match: '--.*$', name: 'comment.teal'}]},
    statement: {
      patterns: [
        {include: '#expression'},
        {include: '#if-block'},
        {include: '#do-block'},
        {include: '#repeat-block'},
        {include: '#while-block'},
        {include: '#for-block'},
        {include: '#goto'},
        {include: '#label'},
        {include: '#break'},
        {include: '#return'},
        {include: '#scope-modifier'},
        {include: '#type-annotation'},
        {include: '#new-type-declaration'}
      ]
    },
    string: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.teal'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.teal'}},
          name: 'string.quoted.single.teal',
          patterns: [{include: '#escaped-char'}]
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.teal'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.teal'}},
          name: 'string.quoted.double.teal',
          patterns: [{include: '#escaped-char'}]
        }
      ]
    },
    'table-constructor': {
      begin: '{',
      end: '}',
      name: 'teal.table-constructor',
      patterns: [
        {include: '#comment'},
        {begin: '=', end: ';|,|(?=})', patterns: [{include: '#expression'}]},
        {
          begin: '\\[',
          end: '\\]',
          name: 'teal.brackets',
          patterns: [{include: '#expression'}]
        },
        {
          begin: ':',
          end: '(?<=\\))|(?=[=,};])',
          patterns: [
            {include: '#comment'},
            {include: '#function-call'},
            {include: '#type'}
          ]
        },
        {
          match: '[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=.*=)',
          name: 'variable.other.teal'
        },
        {include: '#expression'}
      ]
    },
    'table-type': {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'support.tabletype.teal',
          patterns: [{include: '#comment'}, {include: '#type'}]
        }
      ]
    },
    type: {
      patterns: [
        {include: '#function-type'},
        {include: '#table-type'},
        {include: '#type-name'},
        {include: '#generics'}
      ]
    },
    'type-annotation': {
      patterns: [
        {
          begin: ':',
          end: '(?<=\\))|=|;|$|(?=\\breturn\\b)',
          patterns: [
            {include: '#comment'},
            {include: '#function-call'},
            {include: '#type'}
          ]
        }
      ]
    },
    'type-arg': {
      patterns: [{match: '[a-zA-Z_][a-zA-Z0-9_]*', name: 'support.type.teal'}]
    },
    'type-name': {
      patterns: [
        {match: '[a-zA-Z_][a-zA-Z0-9_]*', name: 'support.type.teal'},
        {match: '\\.', name: 'punctuation.accessor.teal'}
      ]
    },
    'while-block': {
      begin: '\\bwhile\\b',
      captures: {0: {name: 'keyword.control.teal'}},
      end: '\\bend\\b',
      name: 'statement.while-block.teal',
      patterns: [
        {
          begin: '(?<=\\bwhile\\b)',
          end: '\\bdo\\b',
          endCaptures: {0: {name: 'keyword.control.do.teal'}},
          name: 'teal.while.expression',
          patterns: [{include: '#expression'}]
        },
        {
          begin: '(?<=\\bdo\\b)',
          end: '(?=\\bend\\b)',
          name: 'teal.while.body',
          patterns: [{include: '#statement'}]
        }
      ]
    }
  },
  scopeName: 'source.teal'
}

export default grammar
