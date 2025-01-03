// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wronex/sublime-angelscript>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.angelscript'],
  names: ['angelscript'],
  patterns: [
    {
      captures: {1: {name: 'punctuation.definition.comment.angelscript'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.angelscript'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.angelscript'}},
      end: '\\*/',
      name: 'comment.block.angelscript'
    },
    {
      begin: '"""',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.angelscript'}
      },
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.angelscript'}},
      name: 'string.quoted.double.angelscript'
    },
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.angelscript'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.angelscript'}},
      name: 'string.quoted.double.angelscript',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.angelscript'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.angelscript'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.angelscript'}},
      name: 'string.quoted.single.angelscript',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.angelscript'}
      ]
    },
    {match: '(~|!|&&|\\|\\|)', name: 'keyword.operator.logical.angelscript'},
    {
      match:
        '\\b(for|foreach|in|break|continue|while|do|return|if|else|case|switch|namespace|try|catch)\\b',
      name: 'keyword.control.angelscript'
    },
    {
      captures: {
        1: {name: 'keyword.other.angelscript'},
        2: {name: 'punctuation.definition.generic.begin.angelscript'},
        3: {name: 'storage.type.angelscript'},
        4: {name: 'punctuation.definition.generic.end.angelscript'}
      },
      match: '\\b(cast)(<)([A-Za-z_][A-Za-z_0-9]*)(>)'
    },
    {
      captures: {
        1: {name: 'storage.type.angelscript'},
        2: {name: 'variable.other.angelscript'}
      },
      match:
        '(?x:\n  ^\\s*\n  ([A-Za-z_][A-Za-z_0-9]*)\n  \\s+\n  ([A-Za-z_][A-Za-z_0-9]*)\n  \\s*[=;]\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.angelscript'},
        2: {name: 'storage.type.angelscript'},
        3: {name: 'storage.type.angelscript'},
        4: {name: 'storage.type.angelscript'},
        5: {name: 'storage.type.angelscript'},
        6: {name: 'storage.type.angelscript'},
        7: {name: 'variable.other.angelscript'}
      },
      match:
        '(?x:\n  ^\\s*\n  ([A-Za-z_][A-Za-z_0-9]*)\n  <(?:\n    (.*?)\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n  )>\n  \\s+\n  ([A-Za-z_][A-Za-z_0-9]*)\n  \\s*[=;]\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.angelscript'},
        2: {name: 'meta.function entity.name.function.angelscript'}
      },
      match: '^\\s*([A-Za-z_][A-Za-z_0-9]*)\\s+([A-Za-z_][A-Za-z_0-9]*)\\('
    },
    {
      captures: {
        1: {name: 'keyword.other.angelscript'},
        2: {name: 'variable.other.angelscript'}
      },
      match: '(@)([A-Za-z_][A-Za-z_0-9]*)\\b'
    },
    {
      captures: {
        1: {name: 'variable.other.angelscript'},
        2: {name: 'keyword.operator.assignment.angelscript'}
      },
      match: '\\b([A-Za-z_][A-Za-z_0-9]*)\\s*([-+/*%]?=)'
    },
    {
      captures: {
        1: {name: 'entity.name.namespace'},
        2: {name: 'keyword.operator.symbolic.angelscript'}
      },
      match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)(::)'
    },
    {match: '[=]', name: 'keyword.operator.assignment.angelscript'},
    {match: '[%*+\\-/]', name: 'keyword.operator.arithmetic.angelscript'},
    {match: '[|&><]', name: 'keyword.operator.bitwise.angelscript'},
    {match: '[!@?:]', name: 'keyword.operator.symbolic.angelscript'},
    {match: '\\b(is)\\b', name: 'keyword.other.angelscript'},
    {
      match: '\\b(or|and|xor|not)\\b',
      name: 'keyword.operator.logical.angelscript'
    },
    {
      match:
        '\\b(get|in|inout|out|override|explicit|set|private|public|protected|const|default|final|shared|external|mixin|abstract|property)\\b',
      name: 'storage.modifier.angelscript'
    },
    {
      match:
        '\\b(enum|void|bool|typedef|funcdef|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)\\b',
      name: 'storage.type.angelscript'
    },
    {
      captures: {
        1: {name: 'storage.type.angelscript'},
        2: {name: 'keyword.other.angelscript'},
        3: {name: 'variable.other.angelscript'}
      },
      match: '([A-Za-z_][A-Za-z_0-9]*)(@)\\s+([A-Za-z_][A-Za-z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'storage.type.angelscript'},
        2: {name: 'keyword.other.angelscript'}
      },
      match: '([A-Za-z_][A-Za-z_0-9]*)(@)'
    },
    {match: '\\b(null|true|false)\\b', name: 'constant.language.angelscript'},
    {match: '\\b(this|super)\\b', name: 'variable.language.angelscript'},
    {match: '\\b(import|from)\\b', name: 'keyword.control.import.angelscript'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.angelscript'
    },
    {
      match: '^\\s*\\#([a-zA-Z_0-9]*)?',
      name: 'meta.preprocessor keyword.control.import.angelscript'
    },
    {
      captures: {1: {name: 'markup.heading.angelscript'}},
      match: '^\\s*\\[(.*)\\]\\s*?',
      name: 'meta.metadata.angelscript'
    },
    {
      match: '\\.[a-zA-Z_][a-zA-Z_0-9]*\\b(?!\\s*[<\\(])',
      name: 'variable.other.dot-access.angelscript'
    },
    {
      captures: {
        1: {name: 'storage.type.class.angelscript'},
        2: {name: 'entity.name.type.class.angelscript'},
        3: {name: 'entity.other.inherited-class.angelscript'},
        4: {name: 'entity.other.inherited-class.angelscript'},
        5: {name: 'entity.other.inherited-class.angelscript'},
        6: {name: 'entity.other.inherited-class.angelscript'},
        7: {name: 'entity.other.inherited-class.angelscript'}
      },
      match:
        '(?x:\n  \\b(class|interface)\n  \\s+([a-zA-Z_0-9]*)\n  (?:\n    \\s*:\\s*([a-zA-Z_0-9]*)\n    (?:\\s*,\\s*([a-zA-Z_0-9]*))?\n    (?:\\s*,\\s*([a-zA-Z_0-9]*))?\n    (?:\\s*,\\s*([a-zA-Z_0-9]*))?\n    (?:\\s*,\\s*([a-zA-Z_0-9]*))?\n  )?\n)',
      name: 'meta.class.angelscript'
    },
    {
      captures: {
        1: {
          name: 'meta.function-call.angelscript variable.function.angelscript'
        }
      },
      match:
        '(?x:\n  (?:\\b|\\.)\n  ([a-zA-Z_][a-zA-Z_0-9]*)\n  \\b(?:\\s*\\()\n)'
    },
    {
      captures: {
        1: {
          name: 'meta.function-call.angelscript variable.function.angelscript'
        },
        2: {name: 'storage.type.angelscript'},
        3: {name: 'storage.type.angelscript'},
        4: {name: 'storage.type.angelscript'},
        5: {name: 'storage.type.angelscript'},
        6: {name: 'storage.type.angelscript'}
      },
      match:
        '(?x:\n  (?:\\b|\\.)\n  ([a-zA-Z_][a-zA-Z_0-9]*)\n  <(?:\n    (.*?)\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n    (?:,\\s*(.*?))?\n  )>\\(\n)'
    },
    {match: '\\b([A-Z][A-Z0-9_]+)\\b', name: 'constant.other.angelscript'}
  ],
  scopeName: 'source.angelscript'
}

export default grammar
