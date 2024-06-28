// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/onnovalkering/vscode-singularity>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['singularity'],
  patterns: [
    {include: '#interpolation'},
    {include: '#keyword'},
    {include: '#string'},
    {include: '#variable'},
    {
      captures: {
        1: {name: 'keyword.other.special-method.singularity'},
        3: {name: 'keyword.other.special-method.singularity'}
      },
      match: '^\\s*\\b(?i:(bootstrap))\\b:.*?(.+?\\b(as)\\b.*)?'
    },
    {
      captures: {
        1: {name: 'keyword.other.special-method.singularity'},
        3: {name: 'keyword.other.special-method.singularity'}
      },
      match: '^\\s*\\b(?i:(from|registry|namespace))\\b:.*?(.+?\\b(as)\\b.*)?'
    },
    {
      captures: {1: {name: 'keyword.other.special-method.singularity'}},
      match: '^\\s*\\b(?i:(stage|osversion|mirrorurl|include))\\b:'
    },
    {
      captures: {
        1: {name: 'keyword.control.singularity'},
        2: {name: 'keyword.other.special-method.singularity'}
      },
      match:
        '^\\s*(%)\\b(post|setup|environment|help|labels|test|runscript|files|startscript)\\b'
    },
    {
      captures: {
        1: {name: 'keyword.control.singularity'},
        2: {name: 'keyword.other.special-method.singularity'}
      },
      match:
        '^\\s*(%)\\b(apprun|applabels|appinstall|appenv|apphelp|appfiles)\\b'
    },
    {
      begin: "'",
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.singularity'}
      },
      end: "'",
      endCaptures: {1: {name: 'punctuation.definition.string.end.singularity'}},
      name: 'string.quoted.single.singularity',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escaped.singularity'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.singularity'}
      },
      end: '"',
      endCaptures: {1: {name: 'punctuation.definition.string.end.singularity'}},
      name: 'string.quoted.double.singularity',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escaped.singularity'}
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.singularity'},
        2: {name: 'comment.line.number-sign.singularity'},
        3: {name: 'punctuation.definition.comment.singularity'}
      },
      match: '^(\\s*)((#).*$\\n?)'
    }
  ],
  repository: {
    interpolation: {
      patterns: [
        {
          begin: '\\$\\({2}',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\){2}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.other.math.shell',
          patterns: [{include: '#math'}]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.interpolated.backtick.shell',
          patterns: [
            {match: '\\\\[`\\\\$]', name: 'constant.character.escape.shell'},
            {
              begin: '(?<=\\W)(?=#)(?!#{)',
              beginCaptures: {
                1: {name: 'punctuation.whitespace.comment.leading.shell'}
              },
              end: '(?!\\G)',
              patterns: [
                {
                  begin: '#',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.comment.shell'}
                  },
                  end: '(?=`)',
                  name: 'comment.line.number-sign.shell'
                }
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\$\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.interpolated.dollar.shell',
          patterns: [{include: '$self'}]
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '(?<=^|;|&|\\s)(if|then|else|elif|fi|for|in|do|done|select|case|continue|esac|while|until|return)(?=\\s|;|&|$)',
          name: 'keyword.control.shell'
        },
        {
          match:
            '(?<=^|;|&|\\s)(?:export|declare|typeset|local|readonly)(?=\\s|;|&|$)',
          name: 'storage.modifier.shell'
        }
      ]
    },
    string: {
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.shell'},
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.single.shell'
        },
        {
          begin: '\\$?"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.double.shell',
          patterns: [
            {
              match: '\\\\[\\$`"\\\\\\n]',
              name: 'constant.character.escape.shell'
            },
            {include: '#variable'},
            {include: '#interpolation'}
          ]
        },
        {
          begin: "\\$'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.shell'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.shell'}},
          name: 'string.quoted.single.dollar.shell',
          patterns: [
            {
              match: "\\\\(a|b|e|f|n|r|t|v|\\\\|')",
              name: 'constant.character.escape.ansi-c.shell'
            },
            {
              match: '\\\\[0-9]{3}',
              name: 'constant.character.escape.octal.shell'
            },
            {
              match: '\\\\x[0-9a-fA-F]{2}',
              name: 'constant.character.escape.hex.shell'
            },
            {
              match: '\\\\c.',
              name: 'constant.character.escape.control-char.shell'
            }
          ]
        }
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[a-zA-Z_][a-zA-Z0-9_]*',
          name: 'variable.other.normal.shell'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[-*@#?$!0_]',
          name: 'variable.other.special.shell'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.shell'}},
          match: '(\\$)[1-9]',
          name: 'variable.other.positional.shell'
        },
        {
          begin: '\\${',
          beginCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.definition.variable.shell'}},
          name: 'variable.other.bracket.shell',
          patterns: [
            {
              match: '!|:[-=?]?|\\*|@|#{1,2}|%{1,2}|/',
              name: 'keyword.operator.expansion.shell'
            },
            {
              captures: {
                1: {name: 'punctuation.section.array.shell'},
                3: {name: 'punctuation.section.array.shell'}
              },
              match: '(\\[)([^\\]]+)(\\])'
            },
            {include: '#variable'},
            {include: '#string'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.singularity'
}

export default grammar
