// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nefrob/vscode-just>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.just'],
  names: ['just', 'justfile'],
  patterns: [
    {include: '#comments'},
    {include: '#import'},
    {include: '#module'},
    {include: '#alias'},
    {include: '#assignment'},
    {include: '#builtins'},
    {include: '#keywords'},
    {include: '#expression-operators'},
    {include: '#backtick'},
    {include: '#strings'},
    {include: '#parenthesis'},
    {include: '#recipes'},
    {include: '#recipe-operators'},
    {include: '#embedded-languages'},
    {include: '#escaping'}
  ],
  repository: {
    alias: {
      captures: {
        1: {name: 'keyword.other.reserved.just'},
        2: {name: 'variable.name.alias.just'},
        3: {name: 'keyword.operator.assignment.just'},
        4: {name: 'variable.other.just'}
      },
      match:
        '(?x)\n  ^\n  (alias) \\s+ \n  ([a-zA-Z_][a-zA-Z0-9_-]*) \\s* \n  (:=) \\s* \n  ([a-zA-Z_][a-zA-Z0-9_-]*)\n'
    },
    assignment: {
      patterns: [
        {include: '#variable-assignment'},
        {include: '#setting-assignment'}
      ]
    },
    backtick: {
      patterns: [
        {
          begin: '(```)',
          beginCaptures: {1: {name: 'string.interpolated.just'}},
          contentName: 'source.shell',
          end: '(```)',
          endCaptures: {1: {name: 'string.interpolated.just'}},
          patterns: [{include: 'source.shell'}]
        },
        {
          captures: {
            1: {name: 'string.interpolated.just'},
            2: {name: 'source.shell', patterns: [{include: 'source.shell'}]},
            3: {name: 'string.interpolated.just'}
          },
          match: '(`)([^`]*)(`)'
        }
      ]
    },
    boolean: {
      patterns: [
        {match: '\\b(true|false)\\b', name: 'constant.language.boolean.just'}
      ]
    },
    'builtin-functions': {
      patterns: [
        {
          match:
            '(?x) \\b(\n  arch|num_cpus|os|os_family|shell|env_var|env_var_or_default|env|\n  is_dependency|invocation_directory|invocation_dir|invocation_directory_native|\n  invocation_dir_native|justfile|justfile_directory|justfile_dir|just_executable|\n  just_pid|source_file|source_directory|source_dir|module_file|module_directory|\n  module_dir|append|prepend|encode_uri_component|quote|replace|replace_regex|\n  trim|trim_end|trim_end_match|trim_end_matches|trim_start|trim_start_match|\n  trim_start_matches|capitalize|kebabcase|lowercamelcase|lowercase|\n  shoutykebabcase|shoutysnakecase|snakecase|titlecase|uppercamelcase|\n  uppercase|absolute_path|blake3|blake3_file|canonicalize|extension|\n  file_name|file_stem|parent_directory|parent_dir|without_extension|clean|join|\n  path_exists|error|assert|sha256|sha256_file|uuid|choose|datetime|\n  datetime_utc|semver_matches|cache_directory|cache_dir|config_directory|config_dir|\n  config_local_directory|config_local_dir|data_directory|data_dir|data_local_directory|\n  data_local_dir|executable_directory|executable_dir|home_directory|home_dir\n)\\b\n',
          name: 'support.function.builtin.just'
        }
      ]
    },
    builtins: {
      patterns: [
        {
          match: '\\b(HEX|HEXLOWER|HEXUPPER)\\b',
          name: 'constant.language.hex.just'
        },
        {include: '#builtin-functions'},
        {include: '#literal'}
      ]
    },
    comments: {
      patterns: [{match: '#([^!].*)$', name: 'comment.line.number-sign.just'}]
    },
    'control-keywords': {
      patterns: [
        {match: '\\b(if|else)\\b', name: 'keyword.control.conditional.just'}
      ]
    },
    'embedded-languages': {
      patterns: [
        {
          begin: '^\\s+(#!/usr/bin/env\\s+node.*)$',
          beginCaptures: {1: {name: 'comment.line.number-sign.shebang.just'}},
          contentName: 'source.js',
          end: '^$',
          patterns: [{include: 'source.js'}]
        },
        {
          begin: '^\\s+(#!/usr/bin/env\\s+perl.*)$',
          beginCaptures: {1: {name: 'comment.line.number-sign.shebang.just'}},
          contentName: 'source.perl',
          end: '^$',
          patterns: [{include: 'source.perl'}]
        },
        {
          begin: '^\\s+(#!/usr/bin/env\\s+python.*)$',
          beginCaptures: {1: {name: 'comment.line.number-sign.shebang.just'}},
          contentName: 'source.python',
          end: '^$',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '^\\s+(#!/usr/bin/env\\s+ruby.*)$',
          beginCaptures: {1: {name: 'comment.line.number-sign.shebang.just'}},
          contentName: 'source.ruby',
          end: '^$',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin: '^\\s+(#!/usr/bin/env\\s+(?:sh|bash|zsh|fish).*)$',
          beginCaptures: {1: {name: 'comment.line.number-sign.shebang.just'}},
          contentName: 'source.shell',
          end: '^$',
          patterns: [{include: 'source.shell'}]
        }
      ]
    },
    escaping: {
      patterns: [
        {
          captures: {
            1: {name: 'string.interpolated.escape.just'},
            2: {patterns: [{include: '#expression'}]},
            3: {name: 'string.interpolated.escape.just'}
          },
          match:
            '(?x)\n  (?<!\\{)\n  (\\{\\{)\n    \\{? (?!\\{)\n    (.*?)\n  (\\}\\})\n',
          name: 'string.interpolated.escaping.just'
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#backtick'},
        {include: '#builtins'},
        {include: '#control-keywords'},
        {include: '#expression-operators'},
        {include: '#parenthesis'},
        {include: '#strings'}
      ]
    },
    'expression-operators': {
      patterns: [
        {match: '\\/', name: 'keyword.operator.path-join.just'},
        {match: '\\+', name: 'keyword.operator.concat.just'},
        {match: '&&', name: 'keyword.operator.and.just'},
        {
          match: '(\\=\\=|\\=\\~|\\!\\=)',
          name: 'keyword.operator.equality.just'
        }
      ]
    },
    import: {
      begin: '(?x)\n  ^\n  (import)\n  (\\?)? \\s+\n',
      beginCaptures: {
        1: {name: 'keyword.other.reserved.just'},
        2: {name: 'punctuation.optional.just'}
      },
      end: '$',
      patterns: [{include: '#strings'}]
    },
    keywords: {
      patterns: [
        {include: '#reserved-keywords'},
        {include: '#control-keywords'}
      ]
    },
    literal: {patterns: [{include: '#boolean'}, {include: '#number'}]},
    module: {
      begin:
        '(?x)\n  ^\n  (mod)\n  (\\?)? \\s+\n  ([a-zA-Z_][a-zA-Z0-9_-]*)\n  (?=[$\\s])\n',
      beginCaptures: {
        1: {name: 'keyword.other.reserved.just'},
        2: {name: 'punctuation.optional.just'},
        3: {name: 'variable.name.module.just'}
      },
      end: '$',
      patterns: [{include: '#strings'}]
    },
    number: {
      patterns: [
        {
          match:
            '(?x)\n  (?<! [a-zA-Z_\\-])(?:\n    \\. \\d+\n    |\n    \\d+ \\. \\d+\n    |\n    \\d+ \\.\n    |\n    [1-9] \\d*\n  )\n',
          name: 'constant.numeric.just'
        },
        {match: '\\b[0-9]+[a-zA-Z_\\-]+\\b', name: 'invalid.illegal.name.just'}
      ]
    },
    parenthesis: {
      begin: '\\(',
      end: '\\)',
      patterns: [{include: '#expression'}, {include: '#parenthesis'}]
    },
    'recipe-attributes': {
      patterns: [
        {
          captures: {
            1: {name: 'support.function.system.just'},
            2: {name: 'support.function.system.just'}
          },
          match:
            '(?x)\n  ^\n  \\[ \n    ([a-zA-z\\-]+) \\s*\n    (?: , ( \\s* [a-zA-z\\-]+ \\s* ) )*\n  ] \\s*\n  $\n'
        },
        {
          captures: {
            1: {name: 'support.function.system.just'},
            2: {name: 'keyword.operator.attribute.end.just'},
            3: {patterns: [{include: '#strings'}]},
            4: {patterns: [{include: '#strings'}]}
          },
          match:
            '(?x)\n  ^\n  \\[\n    ([a-zA-z\\-]+)\n    (?: \n      (?: (:) (.*?) ) | (\\( (.*?) \\))\n    )?\n  ] \\s*\n  $\n'
        }
      ]
    },
    'recipe-dependencies': {
      captures: {
        1: {name: 'entity.name.function.just'},
        2: {
          patterns: [
            {
              captures: {
                1: {name: 'entity.name.function.just'},
                2: {patterns: [{include: '#expression'}]}
              },
              match:
                '(?x)\n  \\( \n    (?: \n      ([a-zA-Z_][a-zA-Z0-9_\\-]*)\n      (.*)\n    )\n  \\)\n'
            }
          ]
        },
        3: {name: 'keyword.operator.and.just'}
      },
      match:
        '(?x)\n  (?:\n    ([a-zA-Z_][a-zA-Z0-9_\\-]*)\n    | ( \\( \n        (?: [^\\(\\)]+ | \\( [^\\)]* \\))* \n      \\) )\n    | (&&)\n  )\n'
    },
    'recipe-operators': {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.quiet.just'}},
          match: '^\\s+(@)'
        },
        {
          captures: {1: {name: 'keyword.operator.error-suppression.just'}},
          match: '^\\s+(\\-)'
        }
      ]
    },
    'recipe-params': {
      captures: {
        1: {name: 'keyword.other.recipe.variadic.just'},
        2: {name: 'variable.parameter.recipe.just'},
        3: {name: 'keyword.operator.default.just'},
        4: {patterns: [{include: '#strings'}]},
        5: {patterns: [{include: '#backtick'}]},
        6: {patterns: [{include: '#parenthesis'}]}
      },
      match:
        '(?x)\n  (?: \n    (\\+|\\*|\\$)?\n    ([a-zA-Z_][a-zA-Z_0-9]*\n  )\n  (?:\n    (=)\n    (?: \n      [a-zA-Z_][a-zA-Z_0-9]* \n      | (\\".*?\\" | \'.*?\') \n      | (`.*?`) \n      | ( \\( \n          (?: \n            [^\\(\\)]+ \n            | \\( [^)]* \\)\n          )* \\) ) \n        ) \n    )?\n  )\n'
    },
    recipes: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.recipe.prefix.just'},
            2: {name: 'entity.name.function.just'},
            3: {patterns: [{include: '#recipe-params'}]},
            4: {name: 'keyword.operator.recipe.end.just'},
            5: {patterns: [{include: '#recipe-dependencies'}]}
          },
          match:
            '(?x)\n  ^\n  (@_|_@|@|_)?\n  ([a-zA-Z][a-zA-Z0-9_\\-]*)\n  (?: \\s+ (.*?) )?\n  \\s* (:)\n  (.*)\n'
        },
        {include: '#recipe-operators'},
        {include: '#recipe-attributes'},
        {include: '#embedded-languages'}
      ]
    },
    'reserved-keywords': {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.reserved.just'}},
          match: '^(alias|export|import|mod|set)\\s+'
        }
      ]
    },
    'setting-assignment': {
      patterns: [
        {
          begin:
            '(?x) \n  ^\n  (set) \\s+\n  ([a-zA-Z_][a-zA-Z0-9_-]*) \\s*\n  (:=)?\n',
          beginCaptures: {
            1: {name: 'keyword.other.reserved.just'},
            2: {name: 'variable.other.just'},
            3: {name: 'keyword.operator.assignment.just'}
          },
          end: '$',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    strings: {
      patterns: [
        {
          match: '([\\"\']{1,3})[\\{]+(\\1)',
          name: 'string.quoted.double.indented.just'
        },
        {
          begin: '(x)?(""")',
          beginCaptures: {
            1: {name: 'constant.character.expanded.just'},
            2: {name: 'string.quoted.double.indented.just'}
          },
          end: '"""',
          name: 'string.quoted.double.indented.just',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.just'},
            {include: '#escaping'}
          ]
        },
        {
          begin: '(x)?(")',
          beginCaptures: {
            1: {name: 'constant.character.expanded.just'},
            2: {name: 'string.quoted.double.just'}
          },
          end: '"',
          name: 'string.quoted.double.just',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.just'},
            {include: '#escaping'}
          ]
        },
        {
          begin: "(x)?(''')",
          beginCaptures: {
            1: {name: 'constant.character.expanded.just'},
            2: {name: 'string.quoted.single.indented.just'}
          },
          end: "'''",
          name: 'string.quoted.single.indented.just',
          patterns: [{include: '#escaping'}]
        },
        {
          begin: "(x)?(')",
          beginCaptures: {
            1: {name: 'constant.character.expanded.just'},
            2: {name: 'string.quoted.single.just'}
          },
          end: "'",
          name: 'string.quoted.single.just',
          patterns: [{include: '#escaping'}]
        }
      ]
    },
    'variable-assignment': {
      patterns: [
        {
          begin:
            '(?x) \n  ^\n  (?: (export) \\s+)?\n  ([a-zA-Z_][a-zA-Z0-9_-]*) \\s*\n  (:=)\n',
          beginCaptures: {
            1: {name: 'keyword.other.reserved.just'},
            2: {name: 'variable.other.just'},
            3: {name: 'keyword.operator.assignment.just'}
          },
          end: '$',
          patterns: [{include: '#expression'}]
        }
      ]
    }
  },
  scopeName: 'source.just'
}

export default grammar
