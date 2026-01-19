// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/stjude-rust-labs/sprocket-vscode>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.wdl'],
  names: ['wdl', 'workflow-description-language'],
  patterns: [
    {include: '#single-number-sign-comments'},
    {include: '#double-number-sign-comments'},
    {
      captures: {
        1: {name: 'keyword.other.version.wdl'},
        2: {name: 'entity.version.number.wdl'}
      },
      match: '(version)\\s+(.*)',
      name: 'entity.version.wdl'
    },
    {
      begin: '(struct)\\s+([A-Za-z][A-Za-z0-9_]+)?',
      beginCaptures: {
        1: {name: 'storage.type.struct.wdl'},
        2: {name: 'variable.name.struct.wdl'}
      },
      contentName: 'entity.struct.wdl',
      end: '({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.struct-start.wdl'}},
      patterns: [{include: '#atom'}]
    },
    {
      begin: '(enum)\\s+([A-Za-z][A-Za-z0-9_]+)?',
      beginCaptures: {
        1: {name: 'storage.type.enum.wdl'},
        2: {name: 'variable.name.enum.wdl'}
      },
      contentName: 'entity.enum.wdl',
      end: '({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.enum-start.wdl'}},
      patterns: [{include: '#atom'}]
    },
    {
      begin: '(task)\\s+([A-Za-z][A-Za-z0-9_]+)?',
      beginCaptures: {
        1: {name: 'storage.type.task.wdl'},
        2: {name: 'variable.name.task.wdl'}
      },
      contentName: 'entity.task.wdl',
      end: '({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.task-start.wdl'}},
      patterns: [{include: '#atom'}]
    },
    {
      begin: '(workflow)\\s+([A-Za-z][A-Za-z0-9_]+)',
      beginCaptures: {
        1: {name: 'storage.type.workflow.wdl'},
        2: {name: 'variable.name.workflow.wdl'}
      },
      end: '({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.workflow-start.wdl'}},
      patterns: [{include: '#atom'}]
    },
    {include: '#input-block'},
    {include: '#command-block-curly'},
    {include: '#command-block-heredoc'},
    {include: '#output-block'},
    {include: '#requirements-block'},
    {include: '#hints-block'},
    {include: '#runtime-block'},
    {include: '#meta-block'},
    {include: '#parameter_meta-block'},
    {include: '#atom'}
  ],
  repository: {
    atom: {
      patterns: [
        {include: '#double-number-sign-comments'},
        {include: '#single-number-sign-comments'},
        {include: '#numeric'},
        {include: '#strings'},
        {include: '#keywords'},
        {include: '#identity'}
      ]
    },
    'bash-arguments': {
      match: '\\b[a-zA-Z0-9/._][a-zA-Z0-9/._-]*\\b',
      name: 'string.unquoted.argument.shell'
    },
    'bash-arithmetic': {
      begin: '(\\(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.evaluation.begin.shell'}
      },
      end: '(\\)\\))',
      endCaptures: {1: {name: 'punctuation.definition.evaluation.end.shell'}},
      name: 'meta.expression.arithmetic.shell',
      patterns: [
        {include: '#bash-variables'},
        {include: '#bash-arithmetic-operators'},
        {include: '#bash-numeric'},
        {include: '#bash-arithmetic-variables'}
      ]
    },
    'bash-arithmetic-operators': {
      match: '\\*\\*|==|!=|<=|>=|&&|\\|\\||<<|>>|[!~+\\-*/%<>&|^=]',
      name: 'keyword.operator.arithmetic.shell'
    },
    'bash-arithmetic-variables': {
      match: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\b',
      name: 'variable.other.shell'
    },
    'bash-assignments': {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.assignment.shell'},
            2: {name: 'keyword.operator.assignment.shell'}
          },
          match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)(=)'
        }
      ]
    },
    'bash-commands': {patterns: [{name: 'entity.name.function.shell'}]},
    'bash-comments': {match: '#.*$', name: 'comment.line.number-sign.shell'},
    'bash-double-quoted-strings': {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.shell',
      patterns: [
        {include: '#bash-variables'},
        {
          match: '\\\\(["$`\\\\\\r\\n])',
          name: 'constant.character.escape.shell'
        }
      ]
    },
    'bash-heredoc-generic': {
      begin: '(<<-?)\\s*([a-zA-Z_][a-zA-Z0-9_]*)',
      beginCaptures: {
        1: {name: 'keyword.operator.heredoc.shell'},
        2: {name: 'entity.name.tag.heredoc.shell'}
      },
      end: '^\\s*(\\2)\\s*$',
      endCaptures: {1: {name: 'entity.name.tag.heredoc.shell'}},
      name: 'string.unquoted.heredoc.shell',
      patterns: [{include: '#placeholder'}]
    },
    'bash-heredoc-python': {
      begin: '(<<-?)\\s*([pP][yY][tT][hH][oO][nN])',
      beginCaptures: {
        1: {name: 'keyword.operator.heredoc.shell'},
        2: {name: 'entity.name.tag.heredoc.python.shell'}
      },
      contentName: 'source.python.embedded.shell',
      end: '^\\s*(\\2)\\s*$',
      endCaptures: {1: {name: 'entity.name.tag.heredoc.python.shell'}},
      patterns: [{include: '#placeholder'}, {include: 'source.python'}]
    },
    'bash-heredocs': {
      patterns: [
        {include: '#bash-heredoc-python'},
        {include: '#bash-heredoc-generic'}
      ]
    },
    'bash-in-wdl': {
      patterns: [
        {include: '#bash-heredocs'},
        {include: '#bash-comments'},
        {include: '#bash-strings'},
        {include: '#bash-arithmetic'},
        {include: '#bash-variables'},
        {include: '#bash-assignments'},
        {include: '#bash-options'},
        {include: '#bash-keywords'},
        {include: '#bash-commands'},
        {include: '#bash-arguments'}
      ]
    },
    'bash-keywords': {
      patterns: [
        {
          match:
            '\\b(if|then|else|fi|for|in|while|do|done|case|esac|until|select)\\b',
          name: 'keyword.control.shell'
        },
        {
          match:
            '\\b(echo|set|unset|export|readonly|shift|source|local|declare|getopts|read|let)\\b',
          name: 'support.function.builtin.shell'
        }
      ]
    },
    'bash-numeric': {
      match: '\\b(0[xX][0-9a-fA-F]+|\\d+)\\b',
      name: 'constant.numeric.shell'
    },
    'bash-options': {
      patterns: [
        {
          match: '(?<=^|\\s)(--[a-zA-Z0-9][a-zA-Z0-9-]*|-\\w+)\\b',
          name: 'constant.other.option.shell'
        }
      ]
    },
    'bash-single-quoted-strings': {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.shell'
    },
    'bash-strings': {
      patterns: [
        {include: '#bash-single-quoted-strings'},
        {include: '#bash-double-quoted-strings'}
      ]
    },
    'bash-variables': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.shell'
        },
        {
          begin: '\\$\\{',
          beginCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          name: 'variable.other.shell'
        },
        {match: '\\$([0-9@*#?$$!_])', name: 'variable.parameter.special.shell'}
      ]
    },
    'command-block-curly': {
      begin: '(?:\\s*)(command)\\s+({)',
      beginCaptures: {
        1: {name: 'storage.type.command.wdl'},
        2: {name: 'punctuation.bracket.curly.command-start.wdl'}
      },
      contentName: 'source.shell.embedded.wdl',
      end: '^(?:\\s*)(})(?:\\s*)$',
      endCaptures: {1: {name: 'punctuation.bracket.curly.command-end.wdl'}},
      patterns: [{include: '#placeholder'}, {include: '#bash-in-wdl'}]
    },
    'command-block-heredoc': {
      begin: '(?:\\s*)(command)\\s+(<<<)',
      beginCaptures: {
        1: {name: 'storage.type.command.wdl'},
        2: {name: 'punctuation.heredoc.command-start.wdl'}
      },
      contentName: 'source.shell.embedded.wdl',
      end: '^(?:\\s*)(>>>)(?:\\s*)$',
      endCaptures: {1: {name: 'punctuation.bracket.curly.command-end.wdl'}},
      patterns: [{include: '#placeholder'}, {include: '#bash-in-wdl'}]
    },
    'double-number-sign-comments': {
      begin: '(?:\\s*)(?:##) ?',
      name: 'comment.line.double-number-sign.documentation',
      patterns: [{include: 'text.md'}],
      while: '(?:^|\\G)\\s*(?:##) ?'
    },
    'double-quoted-strings': {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.wdl',
      patterns: [{include: '#placeholder'}, {include: '#escaped-character'}]
    },
    'escaped-character': {
      captures: {
        1: {name: 'constant.character.escape.backslash.wdl'},
        10: {name: 'constant.character.escape.four-byte-unicode.wdl'},
        11: {name: 'constant.character.escape.eight-byte-unicode.wdl'},
        2: {name: 'constant.character.escape.newline.wdl'},
        3: {name: 'constant.character.escape.tab.wdl'},
        4: {name: 'constant.character.escape.single-quote.wdl'},
        5: {name: 'constant.character.escape.double-quote.wdl'},
        6: {name: 'constant.character.escape.tilde.wdl'},
        7: {name: 'constant.character.escape.dollar-sign.wdl'},
        8: {name: 'constant.character.escape.octal.wdl'},
        9: {name: 'constant.character.escape.hex.wdl'}
      },
      match:
        '(\\\\\\\\)|(\\\\n)|(\\\\t)|(\\\\\')|(\\\\")|(\\\\~)|(\\\\\\$)|(\\\\[0-7]{3})|(\\\\x[0-9a-fA-F]{2})|(\\\\u[0-9a-fA-F]{4})|(\\\\U[0-9a-fA-F]{8})',
      name: 'constant.character.escape.wdl'
    },
    'hints-block': {
      begin: '(?:\\s*)(hints)\\b',
      beginCaptures: {1: {name: 'keyword.other.hints.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.hints-start.wdl'}},
      name: 'entity.hints-block.wdl',
      patterns: [{include: '#atom'}]
    },
    identity: {
      match: '\\b[A-Za-z][A-Za-z0-9_]*\\b',
      name: 'variable.other.wdl'
    },
    'input-block': {
      begin: '(?:\\s*)(input)\\b',
      beginCaptures: {1: {name: 'keyword.other.input.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.input-start.wdl'}},
      name: 'entity.input-block.wdl',
      patterns: [{include: '#atom'}]
    },
    keywords: {
      patterns: [
        {match: '\\b(import|version)\\b', name: 'keyword.other.wdl'},
        {match: '\\b(alias|as|in|scatter)\\b', name: 'storage.modifier.wdl'},
        {match: '\\b(call|else|if|then)\\b', name: 'keyword.control.wdl'},
        {
          match:
            '\\b(command|hints|inputs|meta|object|outputs|parameter_meta|requirements|runtime)\\b\\s*(?!:)',
          name: 'storage.type'
        },
        {
          match: '\\b(true|false|left|right|null)\\b',
          name: 'constant.language.wdl'
        },
        {
          match:
            '\\b(after|alias|as|call|command|else|enum|env|false|hints|if|in|import|input|meta|null|object|output|parameter_meta|requirements|runtime|scatter|then|true|version)\\b\\s*(?!:)',
          name: 'keyword.wdl'
        },
        {
          match:
            '\\b(Array|Boolean|Directory|File|Float|Int|Map|None|Object|Pair|String)\\b',
          name: 'entity.name.type.wdl'
        }
      ]
    },
    'meta-block': {
      begin: '(?:\\s*)(meta)\\b',
      beginCaptures: {1: {name: 'keyword.other.meta.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.meta-start.wdl'}},
      name: 'entity.meta-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'multi-line-strings': {
      begin: '<<<',
      end: '>>>',
      name: 'string.unquoted.multi-line.wdl',
      patterns: [{include: '#placeholder'}, {include: '#escaped-character'}]
    },
    numeric: {
      match:
        '-?(?:[0-9]+\\.[0-9]*(e|E)?|[0-9]+(e|E)?|[1-9][0-9]*|0[0-7]+|0[xX][0-9a-fA-F]|0)',
      name: 'constant.numeric.wdl'
    },
    'output-block': {
      begin: '(?:\\s*)(output)\\b',
      beginCaptures: {1: {name: 'keyword.other.output.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.output-start.wdl'}},
      name: 'entity.output-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'parameter_meta-block': {
      begin: '(?:\\s*)(parameter_meta)\\b',
      beginCaptures: {1: {name: 'keyword.other.parameter_meta.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {
        1: {name: 'punctuation.bracket.curly.parameter_meta-start.wdl'}
      },
      name: 'entity.parameter_meta-block.wdl',
      patterns: [{include: '#atom'}]
    },
    placeholder: {
      begin: '[$~]{',
      end: '}',
      name: 'meta.other.placeholder.wdl',
      patterns: [{include: 'source.wdl'}]
    },
    'requirements-block': {
      begin: '(?:\\s*)(requirements)\\b',
      beginCaptures: {1: {name: 'keyword.other.requirements.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {
        1: {name: 'punctuation.bracket.curly.requirements-start.wdl'}
      },
      name: 'entity.requirements-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'runtime-block': {
      begin: '(?:\\s*)(runtime)\\b',
      beginCaptures: {1: {name: 'keyword.other.runtime.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.runtime-start.wdl'}},
      name: 'entity.runtime-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'single-number-sign-comments': {
      begin: '(?:\\s*)(?:#(?!#))',
      name: 'comment.line.number-sign.documentation',
      while: '(?:^|\\G)(?:\\s*)(?:#(?!#))'
    },
    'single-quoted-strings': {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.wdl',
      patterns: [{include: '#placeholder'}, {include: '#escaped-character'}]
    },
    strings: {
      patterns: [
        {include: '#single-quoted-strings'},
        {include: '#double-quoted-strings'},
        {include: '#multi-line-strings'}
      ]
    }
  },
  scopeName: 'source.wdl'
}

export default grammar
