// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/rescript-lang/rescript-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.res'],
  names: ['rescript'],
  patterns: [
    {include: '#ffi-single'},
    {include: '#ffi'},
    {include: '#constant'},
    {include: '#commentLine'},
    {include: '#commentBlock'},
    {include: '#character'},
    {include: '#typeParameter'},
    {include: '#string'},
    {include: '#attribute'},
    {include: '#function'},
    {include: '#list'},
    {include: '#jsx'},
    {include: '#operator'},
    {include: '#number'},
    {include: '#openOrIncludeModule'},
    {include: '#moduleDeclaration'},
    {include: '#moduleAccess'},
    {include: '#constructor'},
    {include: '#keyword'},
    {include: '#punctuation'},
    {include: '#defaultIdIsVariable'}
  ],
  repository: {
    RE_CONSTANTS_BOOL: {
      match: '\\b(false|true)\\b',
      name: 'constant.language.boolean'
    },
    RE_KEYWORD: {
      match: '\\b(include|let|module|of|open|type)\\b',
      name: 'storage.type'
    },
    RE_KEYWORD_CONTROL: {
      match:
        '\\b(and|as|assert|async|await|catch|constraint|downto|else|exception|external|for|if|in|lazy|mutable|rec|switch|to|try|when|while|with|private)\\b',
      name: 'keyword.control'
    },
    RE_TO_DOWNTO_AS_LABELS: {
      patterns: [
        {
          captures: {
            1: {name: 'variable'},
            2: {name: 'keyword.operator keyword'}
          },
          match: '(to|downto)\\s*(=)'
        },
        {
          captures: {1: {name: 'variable'}, 2: {name: 'keyword.control'}},
          match: '(to|downto)\\s*(as)'
        }
      ]
    },
    attribute: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.decorator'},
            2: {
              patterns: [
                {match: 'bs\\.send\\.pipe', name: 'invalid.deprecated'},
                {match: 'splice', name: 'invalid.illegal'},
                {
                  captures: {
                    1: {name: 'invalid.deprecated'},
                    2: {name: 'entity.name.function'}
                  },
                  match: '(bs\\.)?([A-Za-z_][A-Za-z0-9_\\.]*)'
                },
                {
                  match: '[A-Za-z_][A-Za-z0-9_\\.]*',
                  name: 'entity.name.function'
                }
              ]
            }
          },
          match: '(%%?|@@?)([A-Za-z_][A-Za-z0-9_\\.]*)'
        }
      ]
    },
    character: {
      patterns: [{match: "'[\\x00-\\x7F]'", name: 'string.quoted.single'}]
    },
    commentBlock: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block',
      patterns: [{include: '#commentBlock'}]
    },
    commentLine: {match: '//.*', name: 'comment.line'},
    constant: {patterns: [{include: '#RE_CONSTANTS_BOOL'}]},
    constructor: {
      patterns: [
        {match: '\\b[A-Z][0-9a-zA-Z_]*\\b', name: 'variable.other.enummember'},
        {
          captures: {
            1: {name: 'variable.other.enummember'},
            2: {name: 'variable.other.enummember'}
          },
          match: '(#)\\s*([a-zA-Z][0-9a-zA-Z_]*)\\b'
        },
        {
          captures: {
            1: {name: 'variable.other.enummember'},
            2: {name: 'variable.other.enummember'}
          },
          match: '(#)\\s*(\\.\\.\\.)\\b'
        },
        {captures: {1: {name: 'variable.other.enummember'}}, match: '(#)'}
      ]
    },
    defaultIdIsVariable: {
      patterns: [{match: '[A-Za-z_][A-Za-z0-9_]*', name: 'variable'}]
    },
    ffi: {
      begin: '(%|%%)(raw|ffi)(\\()(`)',
      beginCaptures: {
        1: {name: 'punctuation.decorator'},
        2: {name: 'entity.name.function'},
        4: {name: 'punctuation.definition.string.template.begin.embedded-js'}
      },
      contentName: 'meta.embedded.block.javascript',
      end: '(`)(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.string.template.end.embedded-js'}
      },
      name: 'source.embedded.javascript',
      patterns: [{include: 'source.js'}]
    },
    'ffi-single': {
      captures: {
        1: {name: 'punctuation.decorator'},
        2: {name: 'entity.name.function'},
        4: {name: 'punctuation.definition.string.template.begin.embedded-js'},
        5: {patterns: [{include: 'source.js'}]},
        6: {name: 'punctuation.definition.string.template.end.embedded-js'}
      },
      match: '(%|%%)(raw|ffi)(\\()(`)(.*?)(`)(\\))',
      name: 'source.embedded.javascript.single'
    },
    function: {
      patterns: [
        {
          match: '=>',
          name: 'storage.type.function keyword.declaration.function'
        }
      ]
    },
    jsx: {
      patterns: [
        {match: '<>|</>|</|/>', name: 'punctuation.definition.tag'},
        {
          captures: {
            0: {name: 'punctuation.definition.tag'},
            1: {name: 'entity.name.class'}
          },
          match: '</([A-Z_][0-9a-zA-Z_]*)'
        },
        {
          captures: {
            0: {name: 'punctuation.definition.tag'},
            1: {name: 'variable'}
          },
          match: '</([a-z_][0-9a-zA-Z_]*)'
        },
        {
          captures: {
            0: {name: 'punctuation.definition.tag'},
            1: {name: 'entity.name.class'}
          },
          match: '<([A-Z_][0-9a-zA-Z_]*)'
        }
      ]
    },
    keyword: {
      patterns: [
        {include: '#RE_TO_DOWNTO_AS_LABELS'},
        {include: '#RE_KEYWORD_CONTROL'},
        {include: '#RE_KEYWORD'}
      ]
    },
    list: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword'},
            2: {name: 'punctuation.section.braces.begin'}
          },
          match: '\\b(list)(\\{)'
        },
        {match: '\\}', name: 'punctuation.section.braces.end'}
      ]
    },
    moduleAccess: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.class'},
            2: {name: 'punctuation.accessor'}
          },
          match: '\\b([A-Z_][0-9a-zA-Z_]*)(\\.)'
        }
      ]
    },
    moduleAccessEndsWithModule: {
      patterns: [
        {match: '[A-Z_][0-9a-zA-Z_]*', name: 'entity.name.class'},
        {
          captures: {
            1: {name: 'punctuation.accessor'},
            2: {name: 'entity.name.class'}
          },
          match: '(\\.)([A-Z_][0-9a-zA-Z_]*)'
        }
      ]
    },
    moduleDeclaration: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword'},
            2: {name: 'keyword'},
            3: {name: 'keyword'},
            4: {name: 'entity.name.class'}
          },
          match: '\\b(module)\\s+(type\\s+)?(of\\s+)?([A-Z_][0-9a-zA-Z_]*)',
          patterns: [
            {
              captures: {1: {name: 'entity.name.class'}},
              match: '\\s*:\\s*([A-Z_][0-9a-zA-Z_]*)'
            }
          ]
        }
      ]
    },
    number: {
      patterns: [
        {
          match:
            '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]+)?([eE][-+]?[0-9_]+)?)?)\\b',
          name: 'constant.numeric'
        }
      ]
    },
    openOrIncludeModule: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword'},
            2: {patterns: [{include: '#moduleAccessEndsWithModule'}]}
          },
          match:
            '\\b(open|include)\\s+([A-Z_][0-9a-zA-Z_]*((\\.)([A-Z_][0-9a-zA-Z_]*))*)'
        },
        {match: '\\b(open|include)\\s+', name: 'keyword'}
      ]
    },
    operator: {
      patterns: [
        {
          match:
            '->|\\|\\||&&|\\+\\+|\\*\\*|\\+\\.|\\+|-\\.|-|\\*\\.|\\*|/\\.|/|\\.\\.\\.|\\.\\.|===|==|\\^|:=|!|>=(?! *\\?)|<=|=',
          name: 'keyword.operator'
        },
        {match: '\\|>', name: 'invalid.deprecated'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '~', name: 'punctuation.definition.keyword'},
        {match: ';', name: 'punctuation.terminator'},
        {match: '\\.', name: 'punctuation.accessor'},
        {match: '\\,', name: 'punctuation.separator'},
        {match: '\\?|:', name: 'punctuation.separator'},
        {match: '\\|(?!\\|)', name: 'punctuation.separator'},
        {match: '\\{', name: 'punctuation.section.braces.begin'},
        {match: '\\}', name: 'punctuation.section.braces.end'},
        {match: '\\[', name: 'punctuation.section.brackets.begin'},
        {match: '\\]', name: 'punctuation.section.brackets.end'},
        {match: '\\(', name: 'punctuation.section.parens.begin'},
        {match: '\\)', name: 'punctuation.section.parens.end'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin'}},
          end: '"',
          endCaptures: {1: {name: 'punctuation.definition.string.end'}},
          name: 'string.quoted.double',
          patterns: [{include: '#string-character-escape'}]
        },
        {
          begin: '([a-z_][0-9a-zA-Z_]*)?(`)',
          beginCaptures: {
            1: {name: 'entity.name.function'},
            2: {name: 'punctuation.definition.string.template.begin'}
          },
          end: '(?<!\\\\)`',
          endCaptures: {
            1: {name: 'punctuation.definition.string.template.end'}
          },
          name: 'string.template',
          patterns: [
            {include: '#string-character-escape'},
            {
              begin: '\\$\\{',
              beginCaptures: {
                0: {name: 'punctuation.definition.template-expression.begin'}
              },
              end: '\\}',
              endCaptures: {
                0: {name: 'punctuation.definition.template-expression.end'}
              },
              name: 'meta.template.expression',
              patterns: [
                {match: '[a-z_][0-9a-zA-Z_]*'},
                {include: '#operator'},
                {include: '#punctuation'},
                {include: '#string'}
              ]
            }
          ]
        }
      ]
    },
    'string-character-escape': {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u{[0-9A-Fa-f]+}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape'
    },
    typeParameter: {
      patterns: [{match: "'[A-Za-z][A-Za-z0-9_]*", name: 'support.type'}]
    }
  },
  scopeName: 'source.rescript'
}

export default grammar
