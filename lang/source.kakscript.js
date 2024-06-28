// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kakoune-editor/language-kak>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.kak'],
  names: ['kakounescript', 'kak', 'kakscript'],
  patterns: [{include: '#kakscript'}],
  repository: {
    boolean: {
      match: '\\b(yes|no|false|true)\\b',
      name: 'constant.language.boolean.$1.kakscript'
    },
    builtinOption: {
      match:
        '\\b(tabstop|indentwidth|scrolloff|eolformat|BOM|readonly|incsearch|aligntab|autoinfo|autocomplete|ignored_files|disabled_hooks|filetype|path|completers|static_words|extra_word_chars|matching_pairs|autoreload|writemethod|debug|idle_timeout|fs_check_timeout|modelinefmt|ui_options|startup_info_version)\\b',
      name: 'support.variable.kakscript'
    },
    builtinVariable: {
      match:
        '\\b(bufname|buffile|buflist|buf_line_count|timestamp|history_id|selection|selections|runtime|config|version|session|client|client_pid|client_list|modified|cursor_line|cursor_column|cursor_char_value|cursor_char_column|cursor_display_column|cursor_byte_offset|selection_desc|selections_desc|selections_char_desc|selections_display_column_desc|selection_length|selections_length|window_width|window_height|user_modes|window_range|history|uncommitted_modifications|(?:opt_|main_reg_|reg_|client_env_)\\w+)\\b',
      name: 'support.constant.kakscript'
    },
    colour: {
      match:
        '\\b(default|(?:bright-)?(?:black|red|green|yellow|blue|magenta|cyan|white))\\b',
      name: 'support.constant.colour.color.$1.kakscript'
    },
    command: {
      patterns: [
        {
          match: '\\b(edit|write|kill|quit|write-quit|delete-buffer)!',
          name: 'support.function.command.$1-force.kakscript'
        },
        {
          match:
            '\\b(edit|write|write-all|kill|quit|write-quit|write-all-quit|map|unmap|alias|unalias|buffer|buffer-next|buffer-previous|delete-buffer|add-highlighter|remove-highlighter|hook|trigger-user-hook|remove-hooks|define-command|echo|debug|source|try|catch|fail|nop|set-option|unset-option|update-option|declare-option|execute-keys|evaluate-commands|prompt|menu|on-key|info|set-face|unset-face|rename-client|set-register|select|change-directory|rename-session|colorscheme|declare-user-mode|enter-user-mode|provide-module|require-module)\\b',
          name: 'support.function.command.$1.kakscript'
        },
        {
          match: '\\b(e|w|q|wq|db)!',
          name: 'support.function.command.alias.$1-force.kakscript'
        },
        {
          match:
            '\\b(help|cd|e|w|wa|q|wq|waq|b|bn|bp|db|decl|set|unset|def|eval|exec|rmhooks|face|addhl|rmhl|reg)\\b',
          name: 'support.function.command.alias.$1.kakscript'
        }
      ]
    },
    comment: {match: '#.+', name: 'comment.line.number-sign.kakscript'},
    hookType: {
      match:
        '\\b(NormalIdle|NormalKey|InsertIdle|InsertKey|InsertChar|InsertDelete|InsertMove|PromptIdle|WinCreate|WinClose|WinResize|WinDisplay|WinSetOption|GlobalSetOption|BufSetOption|BufNewFile|BufOpenFile|BufCreate|BufWritePre|BufWritePost|BufReload|BufClose|BufOpenFifo|BufReadFifo|BufCloseFifo|ClientCreate|ClientClose|RuntimeError|ModeChange|KakBegin|KakEnd|FocusIn|FocusOut|InsertCompletionShow|InsertCompletionHide|RawKey|RegisterModified|ModuleLoaded|User)\\b',
      name: 'support.function.hook.kakscript'
    },
    kakscript: {
      patterns: [
        {include: '#boolean'},
        {include: '#builtinOption'},
        {include: '#builtinVariable'},
        {include: '#comment'},
        {include: '#colour'},
        {include: '#command'},
        {include: '#hookType'},
        {include: '#namedKeys'},
        {include: '#number'},
        {include: '#optionType'},
        {include: '#scopeexpansion'},
        {include: '#shellExpansion'},
        {include: '#scopeType'},
        {include: '#string'}
      ]
    },
    namedKeys: {
      match:
        '<(ret|space|tab|lt|gt|backspace|esc|up|down|left|right|pageup|pagedown|home|end|ins|del|plus|minus|semicolon|percent)>',
      name: 'constant.character.kakscript'
    },
    number: {match: '\\b(\\d+)\\b', name: 'constant.numeric.integer.kakscript'},
    optionType: {
      match:
        '\\b(int|bool|str|regex|int-list|str-list|completions|line-specs|range-specs|str-to-str-map)\\b',
      name: 'storage.type.kakscript'
    },
    scopeExpansion: {
      match: '%(arg|val|opt|reg)\\{[w-]+\\}',
      name: 'string.interpolated.kakscript'
    },
    scopeType: {
      match: '\\b(current|global|buffer|window)\\b',
      name: 'entity.name.type.kakscript'
    },
    shellExpansion: {
      begin: '%sh\\{',
      end: '}',
      name: 'source.shell.embedded.kakscript',
      patterns: [{include: 'source.shell'}]
    },
    string: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.kakscript'},
            2: {name: 'punctuation.definition.string.end.kakscript'}
          },
          match: '(").*?(")',
          name: 'string.quoted.double.kakscript'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.kakscript'},
            2: {name: 'punctuation.definition.string.end.kakscript'}
          },
          match: "(').*?(')",
          name: 'string.quoted.single.kakscript'
        }
      ]
    }
  },
  scopeName: 'source.kakscript'
}

export default grammar
