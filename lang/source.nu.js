// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nu'],
  names: ['nu', 'nush'],
  patterns: [
    {
      match: '\\b(t|nil|self|super|YES|NO|margs)\\b',
      name: 'constant.language.nu'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|-?(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.nu'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.constant.nu'},
        4: {name: 'punctuation.definition.constant.nu'}
      },
      match:
        "(')(.|\\\\[nrfbaes]|\\\\[0-7]{3}|\\\\x[0-9A-Fa-f]{2}|\\\\u[0-9A-Fa-f]{4})(')",
      name: 'constant.character.nu'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.nu'}},
      match: '(@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.instance.nu'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.nu'}},
      match: '(\\$)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.global.nu'
    },
    {match: '\\b[A-Z]\\w*\\b', name: 'support.class.nu'},
    {
      captures: {
        1: {name: 'punctuation.definition.comment.nudoc.nu'},
        2: {name: 'support.comment.nudoc.nu'}
      },
      match: '(;.*|#.*)(@(abstract|copyright|discussion|file|header|info).*)',
      name: 'comment.nudoc.nu'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.nu'}},
      match: '(;).*$\\n?',
      name: 'comment.line.semicolon.nu'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.nu'}},
      match: '(#).*$\\n?',
      name: 'comment.line.hash.nu'
    },
    {
      begin: '-"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nu'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nu'}},
      name: 'string.quoted.double.unescaped.nu',
      patterns: [{include: '#interpolated_nu'}]
    },
    {
      begin: '\\+?"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nu'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nu'}},
      name: 'string.quoted.double.escaped.nu',
      patterns: [{include: '#escaped_char'}, {include: '#interpolated_nu'}]
    },
    {
      begin: '<<[+](.*)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nu'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nu'}},
      name: 'string.unquoted.heredoc.escaped.nu',
      patterns: [{include: '#escaped_char'}, {include: '#interpolated_nu'}]
    },
    {
      begin: '<<[-](.*)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nu'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nu'}},
      name: 'string.unquoted.heredoc.unescaped.nu',
      patterns: [{include: '#interpolated_nu'}]
    },
    {
      begin: '(/)(?=[^ ])',
      beginCaptures: {1: {name: 'punctuation.definition.regex.begin.nu'}},
      end: '/[isxlm]*',
      endCaptures: {0: {name: 'punctuation.definition.regex.end.nu'}},
      name: 'string.regexp.nu',
      patterns: [{match: '\\\\/', name: 'constant.character.escape.nu'}]
    },
    {
      captures: {
        1: {name: 'keyword.control.class.nu'},
        2: {name: 'entity.name.function.nu'},
        5: {name: 'keyword.control.is.nu'},
        6: {name: 'entity.name.function.nu'}
      },
      match:
        '\\b(class)\\s+((\\w|\\-|\\!|\\?)*)(\\s+(is)\\s+((\\w|\\-|\\!|\\?)*))?',
      name: 'meta.class.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.protocol.nu'},
        2: {name: 'entity.name.function.nu'}
      },
      match: '\\b(protocol)\\s+((\\w)*)',
      name: 'meta.protocol.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.import.nu'},
        2: {name: 'entity.name.type.class.nu'}
      },
      match: '\\((import)\\s+(\\w*)',
      name: 'meta.import.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.global.nu'},
        2: {name: 'variable.other.readwrite.global.nu'}
      },
      match: '\\((global)\\s+([\\w\\-]*)',
      name: 'meta.global.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.method.nu'},
        2: {name: 'storage.type.class.nu'},
        3: {name: 'entity.name.function.nu'},
        4: {name: 'keyword.control.is.nu'}
      },
      match: '\\(([+-]|[ic]method)\\s+\\((\\w+)\\)\\s+(\\w+)\\s+(is)',
      name: 'meta.method.nu.zero-args'
    },
    {
      captures: {
        1: {name: 'keyword.control.method.nu'},
        2: {name: 'storage.type.class.nu'},
        3: {name: 'entity.name.function.nu'},
        4: {name: 'storage.type.class.nu'},
        5: {name: 'variable.parameter.function.nu'},
        6: {name: 'keyword.control.is.nu'}
      },
      match:
        '\\(([+-]|[ic]method)\\s+\\((\\w+)\\)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(is)',
      name: 'meta.method.nu.one-arg'
    },
    {
      captures: {
        1: {name: 'keyword.control.method.nu'},
        2: {name: 'storage.type.class.nu'},
        3: {name: 'entity.name.function.nu'},
        4: {name: 'storage.type.class.nu'},
        5: {name: 'variable.parameter.function.nu'},
        6: {name: 'entity.name.function.nu'},
        7: {name: 'storage.type.class.nu'},
        8: {name: 'variable.parameter.function.nu'},
        9: {name: 'keyword.control.is.nu'}
      },
      match:
        '\\(([+-]|[ic]method)\\s+\\((\\w+)\\)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(is)',
      name: 'meta.method.nu.two-args'
    },
    {
      captures: {
        1: {name: 'keyword.control.method.nu'},
        10: {name: 'storage.type.class.nu'},
        11: {name: 'variable.parameter.function.nu'},
        12: {name: 'keyword.control.is.nu'},
        2: {name: 'storage.type.class.nu'},
        3: {name: 'entity.name.function.nu'},
        4: {name: 'storage.type.class.nu'},
        5: {name: 'variable.parameter.function.nu'},
        6: {name: 'entity.name.function.nu'},
        7: {name: 'storage.type.class.nu'},
        8: {name: 'variable.parameter.function.nu'},
        9: {name: 'entity.name.function.nu'}
      },
      match:
        '\\(([+-]|[ic]method)\\s+\\((\\w+)\\)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(\\w+\\:)\\s*\\((\\w+)\\)\\s+(\\w+)\\s+(is)',
      name: 'meta.method.nu.three-args'
    },
    {
      captures: {
        1: {name: 'keyword.control.class.nu'},
        2: {name: 'entity.name.function.nu'},
        5: {name: 'keyword.control.class.nu'},
        6: {name: 'entity.name.function.nu'}
      },
      match:
        '\\b((ivar)\\s+((\\w|\\-|\\!|\\?)*)(\\s+(is)\\s+((\\w|\\-|\\!|\\?)*))?|ivars|ivar-accessors)',
      name: 'meta.ivars.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.function-type.nu'},
        2: {name: 'entity.name.function.nu'}
      },
      match: '\\b(function|macro|macro-0|macro-1)\\s+((\\w|\\-|\\!|\\?)*)',
      name: 'meta.function.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.task.nu'},
        2: {name: 'entity.name.task.nu'},
        3: {name: 'keyword.control.colon.nu'},
        4: {name: 'storage.description.task.nu'},
        5: {name: 'keyword.control.is.nu'}
      },
      match: '(task)\\s+(\\"\\w+")\\s?(:?)\\s?(\\"[\\w\\s]+\\")?\\s+(is)',
      name: 'meta.nukefile.task.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.task.nu'},
        2: {name: 'entity.name.task.nu'},
        3: {name: 'keyword.control.colon.nu'},
        4: {name: 'storage.description.task.nu'},
        5: {name: 'keyword.control.arrow.nu'},
        6: {name: 'support.dependency.task.nu'},
        7: {name: 'keyword.control.is.nu'}
      },
      match:
        '(task)\\s+(\\"\\w+\\")\\s?(:)?\\s?(\\"[\\w\\s]+\\")?\\s?(=>?)\\s?(\\"[\\"\\w\\s]+\\")?\\s+(is)',
      name: 'meta.nukefile.task.with-dependencies.nu'
    },
    {
      captures: {
        1: {name: 'keyword.control.task.nu'},
        2: {name: 'entity.name.task.nu'},
        3: {name: 'keyword.control.arrow.nu'},
        4: {name: 'support.name.task.nu'},
        5: {name: 'keyword.control.is.nu'}
      },
      match: '(task)\\s+(\\"default\\")\\s+(=>)\\s+(\\"\\w+\\")',
      name: 'meta.nukefile.default.task.nu'
    },
    {
      match:
        '\\b(let|set|cond|case|do|loop|until|while|for|break|continue|if|else|elseif|then|unless|try|throw|catch|array|dict|list|return)\\b',
      name: 'keyword.control.nu'
    },
    {
      match: '\\b(eq|neq|and|or|synchronized|not)\\b',
      name: 'keyword.operator.nu'
    },
    {match: '[/*+-/&|><=!`@]', name: 'keyword.operator.symbolic.nu'},
    {
      match:
        '\\b(append|atom|cons|car|cdr|context|eval|head|quote|parse|progn|send|tail|load|system|puts|help|version|beep|first|rest|macrox|print)\\b',
      name: 'support.function.nu'
    },
    {
      match:
        '\\b(assert_equal|assert_not_equal|assert_throws|assert_in_delta|assert_true|assert_false|assert_less_than|assert_greater_than)\\b',
      name: 'support.function.testing.nu'
    },
    {
      match:
        '\\b(task|application-tasks|bundle-tasks|compilation-tasks|dylib-tasks|framework-tasks|library-tasks)\\b',
      name: 'keyword.nukefile.nu'
    }
  ],
  repository: {
    escaped_char: {
      match: '\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|.)',
      name: 'constant.character.escape.nu'
    },
    interpolated_nu: {
      patterns: [
        {
          captures: {
            0: {name: 'punctuation.section.embedded.nu'},
            1: {name: 'source.nu.embedded.source.empty'}
          },
          match: '#\\{(\\})',
          name: 'source.nu.embedded.source'
        },
        {
          begin: '#\\{',
          captures: {0: {name: 'punctuation.section.embedded.nu'}},
          end: '\\}',
          name: 'source.nu.embedded.source',
          patterns: [{include: '$self'}]
        }
      ]
    }
  },
  scopeName: 'source.nu'
}

export default grammar
