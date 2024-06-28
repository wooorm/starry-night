// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/CausalityLtd/sublime-pony>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pony'],
  names: ['pony'],
  patterns: [
    {include: '#block-comments'},
    {include: '#line-comments'},
    {include: '#typedeclarations'},
    {include: '#methoddeclarations'},
    {include: '#keywords'},
    {include: '#constants'},
    {include: '#identifiers'},
    {include: '#strings'}
  ],
  repository: {
    'block-comments': {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.pony',
      patterns: [{include: '#block-comments'}]
    },
    constants: {
      patterns: [
        {match: '\\b(this)\\b', name: 'constant.other.pony'},
        {match: '\\b(true|false)\\b', name: 'constant.language.pony'},
        {
          match:
            '\\b((0b[0-1_]*)|(0x[0-9a-fA-F_]*)|([0-9][0-9_]*(\\.[0-9][0-9_]*)?((e|E)(\\+|-)?[0-9_]+)?))\\b',
          name: 'constant.numeric.pony'
        }
      ]
    },
    identifiers: {
      patterns: [
        {
          captures: {1: {name: 'support.function.pony'}},
          match: '\\b([_a-z][_a-zA-Z0-9]*)\\b(\\(|\\[)'
        },
        {
          captures: {1: {name: 'variable.parameter.pony'}},
          match: '\\.\\s*([_a-z][_a-zA-Z0-9]*)\\b[^\\(\\[]'
        },
        {
          captures: {1: {name: 'support.function.pony'}},
          match: '@\\s*([_a-zA-z][_a-zA-Z0-9]*)\\s*(\\(|\\[)'
        },
        {match: '\\b(_*[A-Z][_a-zA-Z0-9]*)\\b', name: 'entity.name.class.pony'},
        {match: "\\b(_*[a-z][_a-zA-Z0-9']*)"}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(compile_intrinsic|compile_error)\\b',
          name: 'keyword.other.intrinsic.pony'
        },
        {match: '\\b(use)\\b', name: 'keyword.other.import.pony'},
        {
          match: '\\b(var|let|embed)\\b',
          name: 'keyword.other.declaration.pony'
        },
        {
          match: '\\b(iso|trn|ref|val|box|tag)\\b',
          name: 'entity.other.attribute-name.pony'
        },
        {
          match: '\\b(break|continue|return|error)\\b',
          name: 'keyword.control.jump.pony'
        },
        {
          match:
            '\\b(if|ifdef|then|elseif|else|end|match|where|try|with|as|recover|consume|object|digestof)\\b',
          name: 'keyword.control.pony'
        },
        {
          match: '\\b(while|do|repeat|until|for|in)\\b',
          name: 'keyword.control.loop.pony'
        },
        {match: '(\\?|[-=]>)'},
        {match: '(\\-|\\+|\\*|/(?![/*])|%|<<|>>)'},
        {match: '(==|!=|<=|>=|<|>)'},
        {match: '\\b(is|isnt|not|and|or|xor)\\b'},
        {match: '='},
        {match: '(\\||\\&|\\,|\\^)'}
      ]
    },
    'line-comments': {
      begin: '//',
      end: '\\n',
      name: 'comment.line.double-slash.pony'
    },
    methoddeclarations: {
      captures: {
        1: {name: 'keyword.declaration.pony'},
        2: {name: 'support.other.annotation.pony'},
        3: {name: 'keyword.other.capability.pony'},
        4: {name: 'entity.name.function.pony'}
      },
      match:
        '\\b(new|be|fun)\\s+(\\\\[_a-z][_a-zA-Z0-9]*\\\\)?\\s*(iso|trn|ref|val|box|tag)?\\b\\s*([_a-z][_a-zA-Z0-9]*)'
    },
    strings: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.character.begin.pony'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.character.end.pony'}},
          name: 'constant.character.pony',
          patterns: [
            {
              match: '\\\\(?:[abfnrtv\\\\"0]|x[0-9A-Fa-f]{2})',
              name: 'constant.character.escape.pony'
            },
            {match: '\\\\.', name: 'invalid.illegal.pony'}
          ]
        },
        {
          begin: '"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.pony'}
          },
          end: '"""(?!")',
          endCaptures: {0: {name: 'punctuation.definition.string.end.pony'}},
          name: 'variable.parameter.pony'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.pony'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.pony'}},
          name: 'string.quoted.double.pony',
          patterns: [
            {
              match:
                '\\\\(?:[abfnrtv\\\\"0]|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{6})',
              name: 'constant.string.escape.pony'
            },
            {match: '\\\\.', name: 'invalid.illegal.pony'}
          ]
        }
      ]
    },
    typedeclarations: {
      captures: {
        1: {name: 'keyword.declaration.pony'},
        2: {name: 'support.other.annotation.pony'},
        3: {name: 'keyword.other.capability.pony'},
        4: {name: 'entity.name.type.pony'}
      },
      match:
        '\\b(type|interface|trait|primitive|struct|class|actor)\\s+(\\\\[_a-z][_a-zA-Z0-9]*\\\\)?\\s*(iso|trn|ref|val|box|tag)?@?\\s*([_A-Z][_a-zA-Z0-9]*)'
    }
  },
  scopeName: 'source.pony'
}

export default grammar
