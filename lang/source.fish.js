// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fish'],
  names: ['fish'],
  patterns: [
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.fish'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.fish'}},
      name: 'string.quoted.double.fish',
      patterns: [
        {
          match: '\\\\\\"|\\\\\\$|\\\\\\\\',
          name: 'constant.character.escape.fish'
        },
        {include: '#variable'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.fish'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.fish'}},
      name: 'string.quoted.single.fish',
      patterns: [
        {match: "\\\\'|\\\\", name: 'constant.character.escape.fish'},
        {include: '#variable'},
        {include: '#escape'}
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.fish'}},
      match: '(?<!\\$)(#)(?!\\{).*$\\n?',
      name: 'comment.line.number-sign.fish'
    },
    {
      match: '(?<!\\.)\\b(function|while|if|else|switch|for|in|end)\\b(?![?!])',
      name: 'keyword.control.fish'
    },
    {match: '(?<!\\.)\\bfunction\\b(?![?!])', name: 'storage.type.fish'},
    {match: '\\|', name: 'keyword.operator.pipe.fish'},
    {
      match:
        '(?x:\n\t\t\t<|\t\t\t\t# Standard Input\n\t\t\t(>|\\^|>>|\\^\\^)(&[012\\-])?| # Redirection of stdout/stderr\n\t\t\t[012](<|>|>>)(&[012\\-])? # Redirect input/output of file descriptors\n\t\t\t)',
      name: 'keyword.operator.redirect.fish'
    },
    {match: '&', name: 'keyword.operator.background.fish'},
    {match: '\\*\\*|\\*|\\?', name: 'keyword.operator.glob.fish'},
    {
      captures: {1: {name: 'string.other.option.fish'}},
      match: '\\s(-{1,2}[a-zA-Z_\\-0-9]+|-\\w)\\b'
    },
    {
      match:
        '(?x)\\b(\n\t\t\t_|__fish_append|__fish_bind_test1|__fish_bind_test2|__fish_commandline_test|\n\t\t\t__fish_complete_ant_targets|__fish_complete_bittorrent|__fish_complete_cd|\n\t\t\t__fish_complete_command|__fish_complete_directories|__fish_complete_file_url|\n\t\t\t__fish_complete_groups|__fish_complete_ls|__fish_complete_man|\n\t\t\t__fish_complete_mime|__fish_complete_pids|__fish_complete_ssh|\n\t\t\t__fish_complete_subcommand|__fish_complete_subcommand_root|\n\t\t\t__fish_complete_suffix|__fish_complete_tar|__fish_complete_tex|\n\t\t\t__fish_complete_unrar|__fish_complete_users|__fish_complete_vi|\n\t\t\t__fish_config_interactive|__fish_contains_opt|__fish_crux_packages|\n\t\t\t__fish_describe_command|__fish_filter_ant_targets|__fish_filter_mime|\n\t\t\t__fish_gnu_complete|__fish_is_first_token|__fish_list_current_token|\n\t\t\t__fish_move_last|__fish_no_arguments|__fish_not_contain_opt|__fish_paginate|\n\t\t\t__fish_ports_dirs|__fish_print_addresses|__fish_print_encodings|\n\t\t\t__fish_print_filesystems|__fish_print_function_prototypes|__fish_print_help|\n\t\t\t__fish_print_hostnames|__fish_print_interfaces|__fish_print_make_targets|\n\t\t\t__fish_print_packages|__fish_print_users|__fish_prt_no_subcommand|\n\t\t\t__fish_prt_packages|__fish_prt_ports|__fish_prt_use_package|\n\t\t\t__fish_prt_use_port|__fish_reload_key_bindings|__fish_repaint|\n\t\t\t__fish_repaint_root|__fish_seen_subcommand_from|__fish_test_arg|\n\t\t\t__fish_use_subcommand|__fish_winch_handler|alias|cd|delete-or-exit|dirh|\n\t\t\tdirs|down-or-search|eval|fish_default_key_bindings|fish_on_exit|\n\t\t\tfish_prompt|fish_sigtrap_handler|funced|funcsave|grep|help|isatty|la|ll|\n\t\t\tls|math|N_|nextd|nextd-or-forward-word|open|popd|prevd|\n\t\t\tprevd-or-backward-word|prompt_pwd|psub|pushd|pwd|setenv|sgrep|trap|type|\n\t\t\tumask|up-or-search|vared\n\t\t\t)\\b',
      name: 'support.function.script.fish'
    },
    {
      match:
        '(?x)\\b(\n\t\t\t\\s\\.\\s|and|begin|bg|bind|block|break|breakpoint|builtin|case|cd|command|\n\t\t\tcommandline|complete|contains|continue|count|else|emit|end|exec|exit|\n\t\t\tfg|for|function|functions|if|jobs|not|or|random|read|return|set|\n\t\t\tstatus|switch|ulimit|while\n\t\t\t)\\b',
      name: 'support.function.builtin.fish'
    },
    {
      match:
        '(?x)\\b(\n\t\t\tadmin|alias|ar|asa|at|awk|basename|batch|bc|bg|break|c99|cal|cat|\n\t\t\tcd|cflow|chgrp|chmod|chown|cksum|cmp|colon|comm|command|compress|\n\t\t\tcontinue|cp|crontab|csplit|ctags|cut|cxref|date|dd|delta|df|diff|\n\t\t\tdirname|dot|du|echo|ed|env|eval|ex|exec|exit|expand|export|expr|\n\t\t\tfalse|fc|fg|file|find|fold|fort77|fuser|gencat|get|getconf|getopts|\n\t\t\tgrep|hash|head|iconv|id|ipcrm|ipcs|jobs|join|kill|lex|link|ln|\n\t\t\tlocale|localedef|logger|logname|lp|ls|m4|mailx|make|man|mesg|mkdir|\n\t\t\tmkfifo|more|mv|newgrp|nice|nl|nm|nohup|od|paste|patch|pathchk|pax|\n\t\t\tpr|printf|prs|ps|pwd|qalter|qdel|qhold|qmove|qmsg|qrerun|qrls|\n\t\t\tqselect|qsig|qstat|qsub|read|readonly|renice|return|rm|rmdel|rmdir|\n\t\t\tsact|sccs|sed|set|sh|shift|sleep|sort|split|strings|strip|stty|tabs|\n\t\t\ttail|talk|tee|test|time|times|touch|tput|tr|trap|true|tsort|tty|\n\t\t\ttype|ulimit|umask|unalias|uname|uncompress|unexpand|unget|uniq|unlink|\n\t\t\tunset|uucp|uudecode|uuencode|uustat|uux|val|vi|wait|wc|what|who|\n\t\t\twrite|xargs|yacc|zcat\n\t\t\t)\\b',
      name: 'support.function.unix.fish'
    },
    {include: '#variable'},
    {include: '#escape'}
  ],
  repository: {
    escape: {
      patterns: [
        {
          match:
            '\\\\(a|b|e|f|n|r|t|v|\\s|\\$|\\\\|\\*|\\?|~|\\%|#|(|)|{|}|\\[|\\]|<|>|\\^)',
          name: 'constant.character.escape.single.fish'
        },
        {
          match: '\\\\x[0-9a-fA-F]{2}',
          name: 'constant.character.escape.hex-ascii.fish'
        },
        {
          match: '\\\\X[0-9a-fA-F]{2}',
          name: 'constant.character.escape.hex-byte.fish'
        },
        {match: '\\\\[0-9]{3}', name: 'constant.character.escape.octal.fish'},
        {
          match: '\\\\u[0-9a-fA-F]{4}',
          name: 'constant.character.escape.unicode-16-bit.fish'
        },
        {
          match: '\\\\U[0-9a-fA-F]{8}',
          name: 'constant.character.escape.unicode-32-bit.fish'
        },
        {match: '\\\\c[a-zA-Z]', name: 'constant.character.escape.control.fish'}
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.fish'}},
          match:
            '(?x)(\\$)(BROWSER|CDPATH|fish_greeting|LANG|LC_ALL|LC_COLLATE|\n\t\t\t\t\t\t\t\t\tLC_CTYPE|LC_MESSAGES|LC_MONETARY|LC_NUMERIC|LC_TIME|PATH|\n\t\t\t\t\t\t\t\t\tumask|fish_color_command|fish_color_comment|fish_color_cwd|fish_color_cwd_root|\n\t\t\t\t\t\t\t\t\tfish_color_error|fish_color_escape|fish_color_history_current|\n\t\t\t\t\t\t\t\t\tfish_color_match|fish_color_normal|fish_color_operator|fish_color_quote|\n\t\t\t\t\t\t\t\t\tfish_color_redirection|fish_color_search_match|fish_color_valid_path|\n\t\t\t\t\t\t\t\t\tfish_complete_path|fish_function_path|fish_greeting|fish_key_bindings|\n\t\t\t\t\t\t\t\t\tfish_pager_color_completion|fish_pager_color_description|\n\t\t\t\t\t\t\t\t\tfish_pager_color_prefix|fish_pager_color_progress)',
          name: 'variable.other.special.fish'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fish'}},
          match: '(\\$)(_|argv|history|HOME|PWD|status|USER)',
          name: 'variable.other.fixed.fish'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fish'}},
          match: '(\\$)__(fish|FISH)[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.fish.fish'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fish'}},
          match: '(\\$)[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.normal.fish'
        }
      ]
    }
  },
  scopeName: 'source.fish'
}

export default grammar
