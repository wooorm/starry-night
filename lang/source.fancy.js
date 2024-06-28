// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fancy-lang/fancy-tmbundle>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fy', '.fancypack'],
  names: ['fancy'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.control.class.fancy'},
        2: {name: 'variable.other.constant.fancy'},
        4: {name: 'entity.other.inherited-class.fancy'},
        5: {name: 'punctuation.separator.inheritance.fancy'},
        6: {name: 'variable.other.object.fancy'}
      },
      match:
        '^\\s*(class)\\s+(([.a-zA-Z0-9_:]+(\\s*(:)\\s*[.a-zA-Z0-9_:\\s]+)?))',
      name: 'meta.class.fancy'
    },
    {
      begin:
        '(?x)\n              (?=def\\b)                                                     # an optimization to help Oniguruma fail fast\n            (?<=^|\\s)(def)\\s+                                            # the def keyword\n            (self)\\s+                                                       # a method definition prefix in this case self\n            (([a-z]?\\w+[?!]?:?)\n            |===|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]|=\\?)\\s+       # the method name\n              ',
      beginCaptures: {
        1: {name: 'keyword.control.def.fancy'},
        2: {name: 'variable.language.fancy'},
        3: {name: 'entity.name.function.fancy'}
      },
      end: '$',
      name: 'meta.function.method.fancy.self',
      patterns: [{include: '$self'}, {include: '#arg_name'}]
    },
    {
      begin:
        '(?x)\n              (?=def\\b)                                     # an optimization to help Oniguruma fail fast\n              (?<=^|\\s)(def)\\s+                          # the def keyword\n              (((?>[A-Z_-]\\w*(?>\\s+))?)+)              # a method definition prefix\n              (([a-z]?\\w+[?!]?:?)\n              |===|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]|=\\?)\\s+   # the method name\n              ',
      beginCaptures: {
        1: {name: 'keyword.control.def.fancy'},
        2: {name: 'variable.other.constant.fancy'},
        4: {name: 'entity.name.function.fancy'}
      },
      end: '$',
      name: 'meta.function.method.fancy',
      patterns: [{include: '$self'}, {include: '#arg_name'}]
    },
    {
      begin: '\\b(require:)',
      captures: {1: {name: 'keyword.other.special-method.fancy'}},
      end: '$|(?=#)',
      name: 'meta.require.fancy',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(include:)',
      captures: {1: {name: 'keyword.other.special-method.fancy'}},
      end: '$|(?=#)',
      name: 'meta.include.fancy',
      patterns: [{include: '$self'}]
    },
    {
      match: '\\b(return|return_local|match|case|try|catch|finally|retry)\\b:?',
      name: 'keyword.control.fancy'
    },
    {
      captures: {0: {name: 'entity.name.function.fancy'}},
      match: '([a-z_-]\\w*[?!]?:)',
      name: 'meta.message.fancy'
    },
    {match: '\\b(false|nil|true)\\b(?![?!])', name: 'constant.language.fancy'},
    {
      captures: {0: {name: 'punctuation.definition.constant.fancy'}},
      match: "'([^'\\s\\[\\]\\(\\)\\{\\},]+|\\[\\])",
      name: 'constant.other.symbol.fancy'
    },
    {
      captures: {0: {name: 'punctuation.definition.constant.fancy'}},
      match: '\\*[a-zA-Z0-9_-]+\\*',
      name: 'constant.other.dynvar.fancy'
    },
    {
      match: '\\b(__(FILE|LINE)__|self|super)\\b(?![?!])',
      name: 'constant.language.fancy'
    },
    {match: '\\b[A-Z]\\w*\\b', name: 'variable.other.constant.fancy'},
    {
      captures: {1: {name: 'punctuation.definition.variable.fancy'}},
      match: '(@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.instance.fancy'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.fancy'}},
      match: '(@@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.class.fancy'
    },
    {
      captures: {1: {name: 'punctuation.section.array.fancy'}},
      match: '(<\\[|\\]>)',
      name: 'punctuation.section.hash.fancy'
    },
    {
      captures: {1: {name: 'string.regexp.classic.fancy'}},
      match: '(/[^/]*/)',
      name: 'string.regexp.classic.fancy'
    },
    {
      match: '<<=|%=|&=|\\*=|\\*\\*=|\\+=|\\-=|\\^=|\\|{1,2}=|<<',
      name: 'keyword.operator.assignment.augmented.fancy'
    },
    {
      match: '<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?',
      name: 'keyword.operator.comparison.fancy'
    },
    {
      match: '\\b(not|and|or)\\b:|(?<=[ \\t])!+|&&|\\|\\||\\^',
      name: 'keyword.operator.logical.fancy'
    },
    {
      match: '(%|&|\\*\\*|\\*|\\+|\\-|/)',
      name: 'keyword.operator.arithmetic.fancy'
    },
    {match: '=', name: 'keyword.operator.assignment.fancy'},
    {match: '\\;', name: 'punctuation.separator.statement.fancy'},
    {match: ',', name: 'punctuation.separator.object.fancy'},
    {match: '\\s', name: 'punctuation.separator.method.ruby'},
    {match: '\\[|\\]', name: 'punctuation.section.array.fancy'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.fancy',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.fancy'}]
    },
    {match: '(?:^[ \\t]+)?(#).*$\\n?', name: 'comment.line.number-sign.fancy'},
    {
      match:
        '\\b(0[xX][0-9A-Fa-f](?>_?[0-9A-Fa-f])*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0[bB][01]+)\\b',
      name: 'constant.numeric.fancy'
    }
  ],
  repository: {
    arg_name: {match: '([a-z_-]\\w*:)', name: 'entity.name.function.fancy'}
  },
  scopeName: 'source.fancy'
}

export default grammar
