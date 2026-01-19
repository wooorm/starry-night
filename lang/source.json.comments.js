// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/DecimalTurn/vscode-jsonc-syntax-highlighting>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.jsonc',
    '.code-snippets',
    '.code-workspace',
    '.sublime-build',
    '.sublime-color-scheme',
    '.sublime-commands',
    '.sublime-completions',
    '.sublime-keymap',
    '.sublime-macro',
    '.sublime-menu',
    '.sublime-mousemap',
    '.sublime-project',
    '.sublime-settings',
    '.sublime-theme',
    '.sublime-workspace',
    '.sublime_metrics',
    '.sublime_session',
    '.tsconfig.json'
  ],
  names: ['json-with-comments', 'jsonc'],
  patterns: [{include: '#value'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.begin.json.comments'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.array.end.json.comments'}
      },
      name: 'meta.structure.array.json.comments',
      patterns: [
        {include: '#value'},
        {match: ',', name: 'punctuation.separator.array.json.comments'},
        {
          match: '[^\\s\\]]',
          name: 'invalid.illegal.expected-array-separator.json.comments'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*\\*(?!/)',
          captures: {0: {name: 'punctuation.definition.comment.json.comments'}},
          end: '\\*/',
          name: 'comment.block.documentation.json.comments'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.json.comments'}},
          end: '\\*/',
          name: 'comment.block.json.comments'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.json.comments'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.js'
        }
      ]
    },
    constant: {
      match: '\\b(?:true|false|null)\\b',
      name: 'constant.language.json.comments'
    },
    number: {
      match:
        '(?x)        # turn on extended mode\n  -?        # an optional minus\n  (?:\n    0       # a zero\n    |       # ...or...\n    [1-9]   # a 1-9 character\n    \\d*     # followed by zero or more digits\n  )\n  (?:\n    (?:\n      \\.    # a period\n      \\d+   # followed by one or more digits\n    )?\n    (?:\n      [eE]  # an e character\n      [+-]? # followed by an option +/-\n      \\d+   # followed by one or more digits\n    )?      # make exponent optional\n  )?        # make decimal portion optional',
      name: 'constant.numeric.json.comments'
    },
    object: {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.json.comments'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.dictionary.end.json.comments'}
      },
      name: 'meta.structure.dictionary.json.comments',
      patterns: [
        {include: '#objectkey'},
        {include: '#comments'},
        {
          begin: ':',
          beginCaptures: {
            0: {
              name: 'punctuation.separator.dictionary.key-value.json.comments'
            }
          },
          end: '(,)|(?=\\})',
          endCaptures: {
            1: {name: 'punctuation.separator.dictionary.pair.json.comments'}
          },
          name: 'meta.structure.dictionary.value.json.comments',
          patterns: [
            {include: '#value'},
            {
              match: '[^\\s,]',
              name: 'invalid.illegal.expected-dictionary-separator.json.comments'
            }
          ]
        },
        {
          match: '[^\\s\\}]',
          name: 'invalid.illegal.expected-dictionary-separator.json.comments'
        }
      ]
    },
    objectkey: {
      begin: '"',
      beginCaptures: {
        0: {
          name: 'punctuation.entity.name.tag.property-name.begin.json.comments'
        }
      },
      end: '"',
      endCaptures: {
        0: {name: 'punctuation.entity.name.tag.property-name.end.json.comments'}
      },
      name: 'entity.name.tag.property-name.json.comments string.json.comments',
      patterns: [{include: '#stringcontent'}]
    },
    string: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.json.comments'}
      },
      end: '"',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.json.comments'}
      },
      name: 'string.quoted.double.json.comments',
      patterns: [{include: '#stringcontent'}]
    },
    stringcontent: {
      patterns: [
        {
          match:
            '(?x)                # turn on extended mode\n  \\\\                # a literal backslash\n  (?:               # ...followed by...\n    ["\\\\/bfnrt]     # one of these characters\n    |               # ...or...\n    u               # a u\n    [0-9a-fA-F]{4}) # and four hex digits',
          name: 'constant.character.escape.json.comments'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.json.comments'
        }
      ]
    },
    value: {
      patterns: [
        {include: '#constant'},
        {include: '#number'},
        {include: '#string'},
        {include: '#array'},
        {include: '#object'},
        {include: '#comments'}
      ]
    }
  },
  scopeName: 'source.json.comments'
}

export default grammar
