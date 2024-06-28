// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.sl'],
  names: ['slash'],
  patterns: [
    {
      begin: '<%+#',
      captures: {0: {name: 'punctuation.definition.comment.slash'}},
      end: '%>',
      name: 'comment.block.slash'
    },
    {
      begin: '<%!!',
      captures: {0: {name: 'invalid'}},
      end: '%>',
      name: 'source.slash.raw-echo.html',
      patterns: [{include: '#slash-language'}]
    },
    {
      begin: '<%(?!>!)=?',
      captures: {0: {name: 'punctuation.section.embedded.slash'}},
      end: '%>',
      name: 'source.slash.embedded.html',
      patterns: [{include: '#slash-language'}]
    },
    {include: 'text.html.basic'}
  ],
  repository: {
    'escaped-char': {
      match: '\\\\(?:x[\\da-fA-F]{2}|.)',
      name: 'constant.character.escape.slash'
    },
    'interpolated-slash': {
      begin: '#\\{',
      captures: {0: {name: 'punctuation.section.embedded.slash'}},
      end: '\\}',
      patterns: [{include: '#slash-language'}]
    },
    nest_curly_r: {
      begin: '\\{',
      captures: {0: {name: 'punctuation.section.scope.slash'}},
      end: '\\}',
      patterns: [{include: '#nest_curly_r'}]
    },
    'slash-language': {
      patterns: [
        {begin: '#', end: '$', name: 'comment.line.hash.slash'},
        {begin: '//', end: '$', name: 'comment.line.c-style.slash'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.slash'},
        {
          captures: {
            1: {name: 'keyword.class.slash'},
            2: {name: 'entity.name.type.class.slash'}
          },
          match: "^\\s*(class)\\s+([A-Z][A-Za-z0-9_']*)",
          name: 'meta.class.slash'
        },
        {
          captures: {
            1: {name: 'keyword.class.slash'},
            2: {name: 'entity.name.type.class.slash'},
            3: {name: 'keyword.extends.slash'},
            4: {name: 'entity.other.inherited-class.slash'}
          },
          match:
            "^\\s*(class)\\s+([A-Z][A-Za-z0-9_']*)\\s+(extends)\\s+([A-Z][A-Za-z0-9_']*)",
          name: 'meta.class.extends.slash'
        },
        {
          captures: {
            1: {name: 'keyword.def.slash'},
            2: {name: 'variable.language.slash'},
            3: {name: 'keyword.punctuation.slash'},
            4: {name: 'entity.name.method-name.slash'}
          },
          match:
            '^\\s*(def)\\s+(self)(\\.)([A-Za-z_][A-Za-z0-9_]*|\\[\\]=?|<<|>>|\\+|-|\\*\\*|\\*|/|%|==|!=|<=>|<=|<|>=|>|\\^|&|\\||~)',
          name: 'meta.def.sing-self.slash'
        },
        {
          captures: {
            1: {name: 'keyword.def.slash'},
            2: {name: 'storage.ivar.slash'},
            3: {name: 'keyword.punctuation.slash'},
            4: {name: 'entity.name.method-name.slash'}
          },
          match:
            "^\\s*(def)\\s+(@@?[A-Za-z0-9_']+)(\\.)([A-Za-z_][A-Za-z0-9_']*|\\[\\]=?|<<|>>|\\+|-|\\*\\*|\\*|/|%|==|!=|<=>|<=|<|>=|>|\\^|&|\\||~)",
          name: 'meta.def.sing-icvar.slash'
        },
        {
          captures: {
            1: {name: 'keyword.def.slash'},
            2: {name: 'support.class.slash'},
            3: {name: 'keyword.punctuation.slash'},
            4: {name: 'entity.name.method-name.slash'}
          },
          match:
            "^\\s*(def)\\s+([A-Z][a-zA-Z0-9_']*)(\\.)([A-Za-z_][A-Za-z0-9_']*|\\[\\]=?|<<|>>|\\+|-|\\*\\*|\\*|/|%|==|!=|<=>|<=|<|>=|>|\\^|&|\\||~)",
          name: 'meta.def.sing-constant.slash'
        },
        {
          captures: {
            1: {name: 'keyword.def.slash'},
            2: {name: 'entity.name.method-name.slash'}
          },
          match:
            "^\\s*(def)\\s+([A-Za-z_][A-Za-z0-9_']*|\\[\\]=?|<<|>>|\\+|-|\\*\\*|\\*|/|%|==|!=|<=>|<=|<|>=|>|\\^|&|\\||~)",
          name: 'meta.def.slash'
        },
        {
          match:
            '\\b(class|extends|def|if|elsif|else|unless|for|in|while|until|and|or|not|lambda|try|catch|return|next|last|throw|use)\\b',
          name: 'keyword.language.slash'
        },
        {match: '\\bself\\b', name: 'variable.language.slash'},
        {match: '\\b(nil|true|false)\\b', name: 'constant.language.slash'},
        {
          match: '-?[0-9]+e[+-]?[0-9]+',
          name: 'constant.integer-with-exponent.slash'
        },
        {
          match: '-?[0-9]+(\\.[0-9]+)(e[+-]?[0-9]+)?',
          name: 'constant.float.slash'
        },
        {match: '-?[0-9]+', name: 'constant.integer.slash'},
        {match: "\\b([A-Z][a-zA-Z0-9_']*)\\b", name: 'support.class.slash'},
        {
          captures: {1: {name: 'meta.function-call'}},
          match: "([a-z_][a-zA-Z0-9_']*)\\s*(?:\\()",
          name: 'method-call.implicit-self.slash'
        },
        {
          captures: {1: {name: 'meta.function-call'}},
          match: "(?<=[.:])([a-z_][a-zA-Z0-9_']*)",
          name: 'method-call.explicit-self.slash'
        },
        {match: "[a-z_][a-zA-Z_0-9']*", name: 'variable.slash'},
        {
          captures: {0: {name: 'storage.ivar.slash'}},
          match: "@[a-zA-Z_0-9']+",
          name: 'variable.ivar.slash'
        },
        {
          captures: {0: {name: 'storage.cvar.slash'}},
          match: "@@[a-zA-Z_0-9']+",
          name: 'variable.cvar.slash'
        },
        {
          begin: '"',
          end: '"',
          name: 'string.double-quoted.slash',
          patterns: [
            {include: '#escaped-char'},
            {include: '#interpolated-slash'}
          ]
        },
        {match: "'[A-Za-z0-9_]+", name: 'string.single-quoted.slash'},
        {
          begin: '%r\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.slash'}
          },
          end: '\\}[a-z]*',
          endCaptures: {0: {name: 'punctuation.definition.string.end.slash'}},
          name: 'string.regexp.slash',
          patterns: [{include: '#nest_curly_r'}]
        },
        {
          match:
            '<<=|>>=|<<|>>|==|!=|=>|=|<=>|<=|<|>=|>|\\+\\+|--|\\+=|-=|\\*\\*=|\\*=|/=|%=|\\+|-|\\*\\*|\\*|/|%|\\^=|&=|&&=|\\|=|\\|\\|=|\\^|~|&|&&|\\||\\|\\||!|\\.\\.\\.|\\.\\.|\\.|::|:|λ|\\\\',
          name: 'keyword.punctuation.language.slash'
        }
      ]
    }
  },
  scopeName: 'text.html.slash'
}

export default grammar
