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
    {include: '#single-number-sign-comment'},
    {include: '#double-number-sign-comment'},
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
    'command-block-curly': {
      begin: '(?:\\s*)(command)\\s+({)',
      beginCaptures: {
        1: {name: 'storage.type.command.wdl'},
        2: {name: 'punctuation.bracket.curly.command-start.wdl'}
      },
      contentName: 'meta.embedded.block.shellscript',
      end: '(?:^|\\G)(?:\\s*)(})(?:\\s*)$',
      endCaptures: {1: {name: 'punctuation.bracket.curly.command-end.wdl'}},
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.bracket.curly.inner',
          patterns: [{include: '$self'}]
        },
        {include: 'source.shell'}
      ]
    },
    'command-block-heredoc': {
      begin: '(?:\\s*)(command)\\s+(<<<)',
      beginCaptures: {
        1: {name: 'storage.type.command.wdl'},
        2: {name: 'punctuation.heredoc.command-start.wdl'}
      },
      contentName: 'meta.embedded.block.shellscript',
      end: '(?:^|\\G)(?:\\s*)(>>>)(?:\\s*)$',
      endCaptures: {1: {name: 'punctuation.bracket.curly.command-end.wdl'}},
      patterns: [
        {
          begin: '<<<',
          end: '>>>',
          name: 'meta.brace.command',
          patterns: [{include: '$self'}]
        },
        {include: 'source.shell'}
      ]
    },
    'double-number-sign-comments': {
      begin: '(?:\\s*)(?:##) ?',
      name: 'comment.line.double-number-sign.documentation',
      patterns: [{include: 'source.gfm'}],
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
      begin: '(?:\\s*)(hints)\b',
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
      begin: '(?:\\s*)(input)\b',
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
            '\\b(after|alias|as|call|command|else|env|false|hints|if|in|import|input|meta|null|object|output|parameter_meta|requirements|runtime|scatter|then|true|version)\\b\\s*(?!:)',
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
      begin: '(?:\\s*)(meta)\b',
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
      begin: '(?:\\s*)(output)\b',
      beginCaptures: {1: {name: 'keyword.other.output.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {1: {name: 'punctuation.bracket.curly.output-start.wdl'}},
      name: 'entity.output-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'parameter_meta-block': {
      begin: '(?:\\s*)(parameter_meta)\b',
      beginCaptures: {1: {name: 'keyword.other.parameter_meta.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {
        1: {name: 'punctuation.bracket.curly.parameter_meta-start.wdl'}
      },
      name: 'entity.parameter_meta-block.wdl',
      patterns: [{include: '#atom'}]
    },
    placeholder: {
      match: '[$~]{\\s*([A-Za-z][A-Za-z0-9_]*)\\s*}',
      name: 'constant.other.placeholder.wdl'
    },
    'requirements-block': {
      begin: '(?:\\s*)(requirements)\b',
      beginCaptures: {1: {name: 'keyword.other.requirements.wdl'}},
      end: '(?:\\s*)({)',
      endCaptures: {
        1: {name: 'punctuation.bracket.curly.requirements-start.wdl'}
      },
      name: 'entity.requirements-block.wdl',
      patterns: [{include: '#atom'}]
    },
    'runtime-block': {
      begin: '(?:\\s*)(runtime)\b',
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
