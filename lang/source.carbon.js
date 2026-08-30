// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/carbon-language/carbon.tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.carbon'],
  names: ['carbon'],
  patterns: [
    {include: '#comments'},
    {include: '#cpp-inline'},
    {include: '#strings'},
    {include: '#types'},
    {include: '#functions'},
    {include: '#variables'},
    {include: '#operators'},
    {include: '#special-keywords'},
    {include: '#introducer-keywords'},
    {include: '#modifier-keywords'},
    {include: '#misc-keywords'},
    {include: '#self-keywords'},
    {include: '#underscore'},
    {include: '#true-false'},
    {include: '#type-literals'},
    {include: '#numbers'},
    {include: '#parameter-bindings'},
    {include: '#customs'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '^\\s*(?=//\\s).*$', name: 'comment.line.carbon'},
        {
          match: '^\\s*//@dump-sem-ir-(begin|end)\\s*$',
          name: 'comment.line.carbon'
        },
        {match: '^\\s*//@include-in-dumps\\s*$', name: 'comment.line.carbon'}
      ]
    },
    common: {
      patterns: [
        {include: '#comments'},
        {include: '#strings'},
        {include: '#operators'},
        {include: '#special-keywords'},
        {include: '#introducer-keywords'},
        {include: '#modifier-keywords'},
        {include: '#misc-keywords'},
        {include: '#self-keywords'},
        {include: '#true-false'},
        {include: '#type-literals'},
        {include: '#numbers'}
      ]
    },
    'cpp-inline': {
      patterns: [
        {
          begin:
            "\\b(import)\\b\\s+\\b(Cpp)\\b\\s+\\b(inline)\\b\\s*(''')([^\\s'#]*\\n)?",
          beginCaptures: {
            1: {name: 'storage.type.carbon'},
            2: {name: 'support.type.property-name.carbon'},
            3: {name: 'storage.type.carbon'},
            4: {name: 'string.quoted.triple.carbon'},
            5: {name: 'constant.character.escape.carbon'}
          },
          contentName: 'meta.embedded.block.cpp',
          end: "(''')\\s*(;)",
          endCaptures: {
            1: {name: 'string.quoted.triple.carbon'},
            2: {name: 'punctuation.terminator.carbon'}
          },
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '\\b(import)\\b\\s+\\b(Cpp)\\b\\s+\\b(inline)\\b\\s*(")',
          beginCaptures: {
            1: {name: 'storage.type.carbon'},
            2: {name: 'support.type.property-name.carbon'},
            3: {name: 'storage.type.carbon'},
            4: {name: 'string.quoted.double.carbon'}
          },
          contentName: 'meta.embedded.inline.cpp',
          end: '(")\\s*(;)',
          endCaptures: {
            1: {name: 'string.quoted.double.carbon'},
            2: {name: 'punctuation.terminator.carbon'}
          },
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: "\\b(inline)\\b\\s+\\b(Cpp)\\b\\s*(''')([^\\s'#]*\\n)?",
          beginCaptures: {
            1: {name: 'storage.type.carbon'},
            2: {name: 'support.type.property-name.carbon'},
            3: {name: 'string.quoted.triple.carbon'},
            4: {name: 'constant.character.escape.carbon'}
          },
          contentName: 'meta.embedded.block.cpp',
          end: "(''')\\s*(;)",
          endCaptures: {
            1: {name: 'string.quoted.triple.carbon'},
            2: {name: 'punctuation.terminator.carbon'}
          },
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '\\b(inline)\\b\\s+\\b(Cpp)\\b\\s*(")',
          beginCaptures: {
            1: {name: 'storage.type.carbon'},
            2: {name: 'support.type.property-name.carbon'},
            3: {name: 'string.quoted.double.carbon'}
          },
          contentName: 'meta.embedded.inline.cpp',
          end: '(")\\s*(;)',
          endCaptures: {
            1: {name: 'string.quoted.double.carbon'},
            2: {name: 'punctuation.terminator.carbon'}
          },
          patterns: [{include: 'source.c++'}]
        }
      ]
    },
    customs: {
      patterns: [
        {match: '(?<=\\bpackage\\s)\\w+', name: 'support.class.carbon'},
        {match: '(?<=\\bCore\\s)\\w+', name: 'support.class.carbon'},
        {
          match: '(?<=\\bimport\\s)\\w+',
          name: 'support.type.property-name.carbon'
        },
        {match: '\\b\\w+\\s*\\(', name: 'support.function.carbon'},
        {match: '\\b\\w+\\b', name: 'support.variable.carbon'}
      ]
    },
    functions: {
      name: 'meta.function.carbon',
      patterns: [
        {
          begin: '\\bfn\\b',
          beginCaptures: {0: {name: 'storage.type.carbon'}},
          end: '(?=[\\[\\(])',
          patterns: [
            {include: '#common'},
            {match: '\\w+', name: 'support.function.carbon'}
          ]
        }
      ]
    },
    'introducer-keywords': {
      patterns: [
        {
          match:
            '\\b(adapt|alias|choice|class|constraint|fn|import|inline|interface|let|library|namespace|var)\\b',
          name: 'storage.type.carbon'
        },
        {match: '\\b(base)\\b(?!\\s*class\\b)', name: 'storage.type.carbon'},
        {match: '\\b(export)\\b(?!\\s*import\\b)', name: 'storage.type.carbon'},
        {
          match: '\\b(impl)\\b(?!\\s*(fn|library|package)\\b)',
          name: 'storage.type.carbon'
        },
        {match: '\\b(package)\\b(?!\\.)', name: 'storage.type.carbon'}
      ]
    },
    'misc-keywords': {
      patterns: [
        {
          match:
            '\\b(auto|destructor|forall|friend|observe|override|require)\\b',
          name: 'keyword.other.carbon'
        },
        {match: '(?<=\\.)\\b(base)\\b', name: 'keyword.other.carbon'}
      ]
    },
    'modifier-keywords': {
      patterns: [
        {
          match:
            '\\b(abstract|const|extend|extern|final|private|protected|static|virtual)\\b',
          name: 'storage.modifier.carbon'
        },
        {
          match: '\\b(base)\\b(?=\\s*class\\b)',
          name: 'storage.modifier.carbon'
        },
        {match: '\\b(default)\\b(?!\\s*=>)', name: 'storage.modifier.carbon'},
        {
          match: '\\b(export)\\b(?=\\s*import\\b)',
          name: 'storage.modifier.carbon'
        },
        {
          match: '\\b(impl)\\b(?=\\s*(fn|library|package)\\b)',
          name: 'storage.modifier.carbon'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match: '0x[_0-9a-fA-F]*(\\.[_0-9a-fA-F]+(p[-+]?[0-9]+)?)?',
          name: 'constant.numeric.carbon'
        },
        {match: '0b[_01]*', name: 'constant.numeric.carbon'},
        {
          match: '[0-9][_0-9]*(\\.[_0-9]+(e[-+]?[0-9]+)?)?',
          name: 'constant.numeric.carbon'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match:
            '\\b(>>=|<=>|<<=|\\&=|==|!=|>=|>>|<=|<<|-=|->|--|%=|\\|=|\\+=|\\+\\+|/=|\\*=|\\&|\\^|=|>|<|-|%|\\.|\\||\\+|/|\\*)\\b',
          name: 'keyword.operator.carbon'
        },
        {
          match:
            '\\b(and|as|generic|impls|in|like|not|or|partial|ref|runtime|template|unused|where)\\b',
          name: 'keyword.control.carbon'
        }
      ]
    },
    'parameter-bindings': {
      patterns: [
        {
          captures: {1: {name: 'support.variable.carbon'}},
          match: '\\b(\\w+)\\s*(?=:)'
        }
      ]
    },
    'self-keywords': {
      patterns: [{match: '\\b(self|Self)\\b', name: 'variable.language.carbon'}]
    },
    'special-keywords': {
      patterns: [
        {
          match:
            '\\b(break|case|continue|else|if|for|match|return|returned|then|while)\\b',
          name: 'keyword.control.carbon'
        },
        {match: '\\b(default)\\b(?=\\s*=>)', name: 'keyword.control.carbon'}
      ]
    },
    string_escapes: {
      patterns: [
        {
          match: '\\\\([tnr\'"0\\0]|x[0-9A-F]{2}|u\\{[0-9A-F]{4,}\\})',
          name: 'constant.character.escape.carbon'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'''([^\\s'#]*\\n)?",
          beginCaptures: {1: {name: 'constant.character.escape.carbon'}},
          end: "'''",
          name: 'string.quoted.triple.carbon',
          patterns: [{include: '#string_escapes'}]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.carbon',
          patterns: [{include: '#string_escapes'}]
        }
      ]
    },
    'true-false': {
      patterns: [
        {match: '\\b(true|false)\\b', name: 'constant.language.carbon'}
      ]
    },
    'type-literals': {
      patterns: [
        {
          match: '\\b(array|bool|char|str|type)\\b',
          name: 'constant.language.carbon'
        },
        {match: '\\b[iuf](8|16|32|64|128)\\b', name: 'constant.language.carbon'}
      ]
    },
    types: {
      name: 'meta.type.carbon',
      patterns: [
        {
          begin:
            '\\b((adapt|alias|class|constraint|interface|impl)|(as|impls))\\b',
          beginCaptures: {
            2: {name: 'storage.type.carbon'},
            3: {name: 'keyword.control.carbon'}
          },
          end: '(?=[;{])',
          patterns: [
            {include: '#common'},
            {include: '#parameter-bindings'},
            {match: '\\w+', name: 'support.type.carbon'}
          ]
        },
        {
          begin: ':',
          end: '(?=([;{=,]|->|in|where))',
          patterns: [
            {include: '#common'},
            {include: '#variables'},
            {include: '#parameter-bindings'},
            {match: '\\w+', name: 'support.type.carbon'}
          ]
        },
        {
          begin: '->',
          end: '(?=([;{]|=>))',
          patterns: [
            {include: '#common'},
            {match: '\\w+', name: 'support.type.carbon'}
          ]
        },
        {
          begin: '\\bwhere\\b',
          beginCaptures: {0: {name: 'keyword.control.carbon'}},
          end: '(?=[;{])',
          patterns: [
            {include: '#common'},
            {include: '#variables'},
            {include: '#parameter-bindings'},
            {match: '\\w+', name: 'support.type.carbon'}
          ]
        },
        {
          begin: '\\bchoice\\b',
          beginCaptures: {0: {name: 'storage.type.carbon'}},
          end: '(?=[;}])',
          patterns: [
            {include: '#common'},
            {include: '#variables'},
            {include: '#parameter-bindings'},
            {match: '\\w+', name: 'support.type.carbon'},
            {
              begin: '\\{',
              end: '(?=})',
              patterns: [
                {include: '#common'},
                {match: '\\w+', name: 'variable.other.enummember.carbon'}
              ]
            }
          ]
        }
      ]
    },
    underscore: {
      patterns: [{match: '\\b(_)\\b', name: 'variable.language.carbon'}]
    },
    variables: {
      name: 'meta.variable.carbon',
      patterns: [
        {
          begin: '\\b(var|let)\\b',
          beginCaptures: {0: {name: 'storage.type.carbon'}},
          end: '(?=:)',
          patterns: [
            {include: '#common'},
            {match: '\\w+', name: 'support.variable.carbon'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.carbon'
}

export default grammar
