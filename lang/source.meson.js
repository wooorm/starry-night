// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/TingPing/language-meson>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['meson'],
  patterns: [
    {match: '\\#.*$', name: 'comment.line.meson'},
    {include: '#string_quoted_single'},
    {
      match: '\\b(elif|else|if|endif)\\b',
      name: 'keyword.control.conditional.meson'
    },
    {match: '\\b(foreach|endforeach)\\b', name: 'keyword.control.repeat.meson'},
    {match: '\\b(continue|break)\\b', name: 'keyword.control.statement.meson'},
    {match: '\\b(and|not|or|in)\\b', name: 'keyword.operator.logical.meson'},
    {match: '\\b(true|false)\\b', name: 'constant.language.meson'},
    {
      match: '\\b(?i:(0x[[:xdigit:]]+))',
      name: 'constant.numeric.integer.hexadecimal.meson'
    },
    {
      match: '\\b(?i:(0o?[0-7]+))',
      name: 'constant.numeric.integer.octal.meson'
    },
    {match: '\\b(?i:(0b[01]+))', name: 'constant.numeric.integer.binary.meson'},
    {
      match: '\\b([1-9]+[0-9]*|0)',
      name: 'constant.numeric.integer.decimal.meson'
    },
    {
      match: '\\b(meson|build_machine|host_machine|target_machine)\\b',
      name: 'support.variable.meson'
    },
    {
      match: '\\b([\\w_]+)\\s*(?=:)',
      name: 'variable.parameter.function.keyword.meson'
    },
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.meson'
    },
    {match: '\\+\\=', name: 'keyword.operator.assignment.augmented.meson'},
    {match: '\\=', name: 'keyword.operator.assignment.meson'},
    {match: '\\+|\\-|\\*|%|\\/', name: 'keyword.operator.arithmetic.meson'},
    {
      match:
        '(?x)\n\\b(add_global_arguments|add_global_link_arguments|add_languages|\nadd_project_arguments|add_project_link_arguments|add_test_setup|\nalias_target|assert|benchmark|both_libraries|build_target|\nconfiguration_data|configure_file|custom_target|declare_dependency|\ndependency|disabler|environment|error|executable|files|find_library|\nfind_program|generator|get_option|get_variable|gettext|import|\ninclude_directories|install_data|install_headers|install_man|\ninstall_subdir|is_disabler|is_variable|jar|join_paths|library|message|\noption|project|run_command|run_target|set_variable|shared_library|\nshared_module|static_library|subdir|subdir_done|subproject|summary|test|\nvcs_tag|warning)\\b\\s*(?=\\()',
      name: 'support.function.builtin.meson'
    }
  ],
  repository: {
    escaped_character: {
      captures: {
        1: {name: 'constant.character.escape.backlash.meson'},
        10: {name: 'constant.character.escape.octal.meson'},
        11: {name: 'constant.character.escape.hex.meson'},
        12: {name: 'constant.character.escape.unicode.16-bit-hex.meson'},
        13: {name: 'constant.character.escape.unicode.32-bit-hex.meson'},
        14: {name: 'constant.character.escape.unicode.name.meson'},
        2: {name: 'constant.character.escape.single-quote.meson'},
        3: {name: 'constant.character.escape.bell.meson'},
        4: {name: 'constant.character.escape.backspace.meson'},
        5: {name: 'constant.character.escape.formfeed.meson'},
        6: {name: 'constant.character.escape.linefeed.meson'},
        7: {name: 'constant.character.escape.return.meson'},
        8: {name: 'constant.character.escape.tab.meson'},
        9: {name: 'constant.character.escape.vertical-tab.meson'}
      },
      match:
        "(?x)\n(\\\\\\\\)|\n(\\\\')|\n(\\\\a)|\n(\\\\b)|\n(\\\\f)|\n(\\\\n)|\n(\\\\r)|\n(\\\\t)|\n(\\\\v)|\n(\\\\[0-7]{1,3})|\n(\\\\x[[:xdigit:]]{2})|\n(\\\\u[[:xdigit:]]{4})|\n(\\\\U[[:xdigit:]]{8})|\n(\\\\N\\{[[:alpha:] ]+\\})"
    },
    string_quoted_single: {
      patterns: [
        {
          captures: {
            1: {name: 'puncutation.definition.string.begin.meson'},
            2: {name: 'puncutation.definition.string.end.meson'},
            3: {name: 'meta.empty-string.single.meson'}
          },
          match: "(?<!')(')(('))(?!')",
          name: 'string.quoted.single.single-line.meson'
        },
        {
          begin: "(''')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.meson'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.meson'},
            2: {name: 'meta.empty-string.single.meson'}
          },
          name: 'string.quoted.single.block.meson',
          patterns: [{include: '#escaped_character'}]
        },
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.meson'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.meson'},
            2: {name: 'invalid.illegal.unclosed-string.meson'}
          },
          name: 'string.quoted.single.single-line.meson',
          patterns: [{include: '#escaped_character'}]
        }
      ]
    }
  },
  scopeName: 'source.meson'
}

export default grammar
