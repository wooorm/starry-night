// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/noir-lang/vscode-noir>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nr'],
  names: ['noir', 'nargo'],
  patterns: [{include: '#code'}],
  repository: {
    '--struct-content': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.nr'},
            2: {name: 'support.type.property-name.nr'},
            3: {name: 'support.type.nr'}
          },
          match:
            '(pub|pub\\(crate\\))?\\s*([a-zA-Z_][a-zA-Z0-9_]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*)',
          patterns: [{include: '#comments'}]
        },
        {begin: '<', end: '>', patterns: [{include: '#--struct-types'}]},
        {include: '#comments'}
      ]
    },
    '--struct-types': {
      patterns: [
        {match: '[a-zA-Z_][a-zA-Z0-9_]*', name: 'support.type.nr'},
        {begin: '<', end: '>', patterns: [{include: '#--struct-types'}]},
        {include: '#comments'}
      ]
    },
    attribute: {
      begin: '#\\[',
      end: '\\]',
      patterns: [
        {begin: '[a-zA-Z_][a-zA-Z0-9_]\\s*\\(', end: '\\)'},
        {match: '[a-zA-Z_][a-zA-Z0-9_]'}
      ]
    },
    code: {
      patterns: [
        {include: '#comments'},
        {include: '#strings'},
        {include: '#numeric'},
        {include: '#syntax'},
        {include: '#attribute'},
        {include: '#keywords'},
        {include: '#input'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '\\/\\*',
          end: '\\*\\/',
          name: 'comment.block.nr',
          patterns: [{include: '#comments'}]
        },
        {match: '\\/\\/.*\n', name: 'comment.line.double-slash.nr'}
      ]
    },
    input: {
      patterns: [
        {
          match: '\\b((u|i)\\d+|str|bool|field|Field)\\b',
          name: 'support.type.nr'
        },
        {
          match: '\\b(_*[A-Z][a-zA-Z0-9_]*|[a-zA-Z_][a-zA-Z0-9_]*::)\\b',
          name: 'support.type.nr'
        },
        {
          begin: '\\b([a-z_][a-zA-Z0-9_]*)\\s*(::<(.*)>\\s*)?\\(',
          beginCaptures: {
            1: {name: 'support.function.nr'},
            2: {patterns: [{include: '#code'}]}
          },
          end: '\\)',
          patterns: [{include: '#code'}]
        },
        {match: '\\b[a-z_][a-zA-Z0-9_]*\\b', name: 'variable.nr'}
      ]
    },
    'interpolated-string-escapes': {
      match: '\\\\.|{{|}}',
      name: 'constant.character.escape.nr'
    },
    interpolations: {
      captures: {
        1: {name: 'constant.character.nr'},
        2: {name: 'constant.character.nr'}
      },
      match: '({)[^"{}]*(})',
      name: 'variable.other.nr'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(fn|impl|trait|type|mod|use|struct|if|else|for|loop|enum|match)\\b',
          name: 'keyword.control.nr'
        },
        {
          match:
            '\\b(global|comptime|quote|unsafe|unconstrained|pub|crate|&mut|mut|self|in|as|let)\\b',
          name: 'keyword.nr'
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match: '(\\-)?\\d+\\.\\d+(\\.|[a-zA-Z])',
          name: 'token.error-token.nr'
        },
        {match: '(\\-)?0x[0-9a-fA-F]+', name: 'constant.numeric.nr'},
        {match: '(\\-)?\\d+(\\.\\d+)?', name: 'constant.numeric.nr'},
        {match: '\\b(true|false)\\b', name: 'constant.language.nr'}
      ]
    },
    'string-escapes': {match: '\\\\.', name: 'constant.character.escape.nr'},
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.nr',
          patterns: [{include: '#string-escapes'}]
        },
        {
          begin: 'r(#*)"',
          beginCaptures: {1: {name: 'string.quoted.byte.raw.nr'}},
          end: '"(\\1)',
          endCaptures: {1: {name: 'string.quoted.byte.raw.nr'}},
          name: 'string.quoted.double.nr'
        },
        {
          begin: 'f"',
          end: '"',
          name: 'string.interpolated.nr',
          patterns: [
            {include: '#interpolated-string-escapes'},
            {include: '#interpolations'}
          ]
        }
      ]
    },
    syntax: {
      patterns: [
        {
          begin:
            '\\b(mod|use)\\s+([a-zA-Z_][a-zA-Z0-9_]*(::[a-zA-Z_][a-zA-Z0-9_]*)*::)\\{',
          beginCaptures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          end: '\\}',
          patterns: [{include: '#code'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          match:
            '\\b(mod|use)\\s+([a-zA-Z_][a-zA-Z0-9_]*(::[a-zA-Z_][a-zA-Z0-9_]*)*)'
        },
        {
          captures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.function.nr'}
          },
          match: '\\b(fn)\\s+([a-zA-Z_][a-zA-Z0-9_]*)'
        },
        {
          captures: {
            1: {name: 'keyword.nr'},
            2: {name: 'keyword.nr'},
            3: {name: 'variable.nr'}
          },
          match: '\\b(let)\\s+(mut\\s+)?([a-zA-Z_][a-zA-Z0-9_]*)'
        },
        {
          captures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'variable.nr'},
            3: {name: 'keyword.nr'}
          },
          match: '\\b(for)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s+(in)\\b'
        },
        {
          begin: '\\b(struct)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\{',
          beginCaptures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          end: '\\}',
          patterns: [{include: '#--struct-content'}]
        },
        {
          begin: '\\b(struct)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(',
          beginCaptures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          end: '\\)',
          patterns: [{include: '#--struct-content'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          match: '\\b(struct)\\s+([a-zA-Z_][a-zA-Z0-9_]*)'
        },
        {
          captures: {
            1: {name: 'keyword.control.nr'},
            2: {name: 'support.type.nr'}
          },
          match: '(\\->)\\s*([a-zA-Z_][a-zA-Z0-9_]*)'
        }
      ]
    }
  },
  scopeName: 'source.nr'
}

export default grammar
