// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dircolors'],
  names: ['dircolors'],
  patterns: [
    {
      begin: '(^\\s+)?(?<!\\S)(?=#)(?!#\\{)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.dircolors'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.dircolors'
        }
      ]
    },
    {
      match: '\\b[0-3]?[0-9]#[0-9a-zA-Z]+\\b',
      name: 'constant.numeric.radix.dircolors'
    },
    {match: '\\b\\d+?\\b', name: 'constant.numeric.dircolors'},
    {match: ';', name: 'punctuation.delimiter.semicolon.dircolors'},
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'},
        2: {name: 'keyword.other.dircolors'},
        3: {name: 'variable.parameter.function.terminal-type.dircolors'}
      },
      match: '(?i)^(\\s*)(TERM)\\s+((?:[^\\s#\\\\]|\\\\.)+)'
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'},
        2: {name: 'keyword.other.dircolors'},
        3: {name: 'constant.language.${3:/downcase}.dircolors'}
      },
      match: '(?i)^(\\s*)(COLOR|EIGHTBIT)\\s+(all|none|no|tty|yes)\\b'
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'},
        2: {name: 'keyword.other.dircolors'},
        3: {patterns: [{include: 'source.opts'}]}
      },
      match: '(?i)^(\\s*)(OPTIONS)\\s+((?:[^\\s#\\\\]|\\\\.)+)'
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'},
        2: {name: 'keyword.other.dircolors'}
      },
      match:
        '(?ix)\n^ (\\s*)\n(TERM|COLOR|EIGHTBIT|OPTION|NORMAL|NORM|FILE|RESET|DIR|LNK|LINK|SYMLINK|ORPHAN|MISSING\n|FIFO|PIPE|SOCK|BLK|BLOCK|CHR|CHAR|DOOR|EXEC|LEFT|LEFTCODE|RIGHT|RIGHTCODE|END|ENDCODE\n|SUID|SETUID|SGID|SETGID|STICKY|OTHER_WRITABLE|OWR|STICKY_OTHER_WRITABLE|OWT|CAPABILITY\n|MULTIHARDLINK|CLRTOEOL)\n(?=\\s|\\#|$)'
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dircolors'},
        2: {
          name: 'keyword.other.extension.dircolors',
          patterns: [{include: '#escape'}]
        }
      },
      match: '^(\\s*)((?:[^\\s#\\\\]|\\\\.)+)'
    },
    {include: '#escape'}
  ],
  repository: {
    escape: {
      patterns: [
        {
          match: '\\^[?@A-Za-z\\[\\\\\\]^_]',
          name: 'constant.character.escape.caret-notation.dircolors'
        },
        {
          match: '\\\\x[0-9A-Fa-f]{1,3}',
          name: 'constant.character.escape.codepoint.hexadecimal.dircolors'
        },
        {
          match: '\\\\[0-7]{1,3}',
          name: 'constant.character.escape.codepoint.octal.dircolors'
        },
        {
          match: '(?i)\\\\[abefnrtv?\\_^#]',
          name: 'constant.character.escape.dircolors'
        }
      ]
    }
  },
  scopeName: 'source.dircolors'
}

export default grammar
