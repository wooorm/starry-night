// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ispc/ispc.syntax>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ispc'],
  names: ['ispc'],
  patterns: [
    {include: '#preprocessor'},
    {include: '#comments'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#keywords'},
    {include: '#operators'},
    {include: '#intrinsics'},
    {include: '#pragmas'},
    {include: '#function-calls'},
    {include: '#functions'},
    {include: '#punctuation'},
    {include: '#identifiers'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.ispc'}},
          end: '\\*/',
          name: 'comment.block.ispc'
        },
        {
          begin: '//',
          captures: {0: {name: 'punctuation.definition.comment.ispc'}},
          end: '$',
          name: 'comment.line.double-slash.ispc'
        }
      ]
    },
    'function-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.function.begin.ispc'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.function.end.ispc'}},
      name: 'meta.function.body.ispc',
      patterns: [{include: '$self'}]
    },
    'function-calls': {
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.ispc'}},
          match: '\\b([A-Za-z_][A-Za-z0-9_]*)\\s*(?=\\()'
        }
      ]
    },
    functions: {
      patterns: [
        {
          begin:
            '(?x)\n\\b(uniform|varying)?\\s*\n([A-Za-z_][A-Za-z0-9_]*\\s+)\n(\\(\\s*\\*\\s*([A-Za-z_][A-Za-z0-9_]*)\\s*\\))\\s*\\(',
          beginCaptures: {
            1: {name: 'storage.modifier.ispc'},
            2: {name: 'storage.type.ispc'},
            3: {name: 'meta.function.pointer.ispc'}
          },
          end: '\\)',
          name: 'meta.function.pointer.ispc',
          patterns: [
            {patterns: [{include: '#keywords'}]},
            {
              captures: {
                1: {name: 'storage.modifier.ispc'},
                2: {name: 'storage.type.ispc'}
              },
              match:
                '(?x)\n  (?:\\b(uniform|varying)\\s+)*\n  ([A-Za-z_][A-Za-z0-9_]*(?:<[^>]+>)?\\s+)'
            },
            {include: '#comments'}
          ]
        },
        {
          begin:
            '(?x)\n  (?:\\b(export|task|inline|noinline|uniform|varying)\\s+)*  # Optional modifiers\n  ([A-Za-z_][A-Za-z0-9_]*(?:<[^>]+>)?\\s+)              # Required return type\n  ([A-Za-z_][A-Za-z0-9_]*)\\s*                          # Function name\n  (?=\\()',
          beginCaptures: {
            1: {name: 'storage.modifier.ispc'},
            2: {name: 'storage.type.ispc'},
            3: {name: 'entity.name.function.ispc'}
          },
          end: '(?<=\\})|(?=;)',
          name: 'meta.function.declaration.ispc',
          patterns: [
            {
              begin: '\\(',
              beginCaptures: {
                0: {name: 'punctuation.section.parameters.begin.ispc'}
              },
              end: '\\)',
              endCaptures: {
                0: {name: 'punctuation.section.parameters.end.ispc'}
              },
              name: 'meta.function.parameters.ispc',
              patterns: [
                {
                  captures: {
                    1: {name: 'storage.modifier.ispc'},
                    2: {patterns: [{include: '#keywords'}]},
                    3: {name: 'keyword.operator.reference.ispc'}
                  },
                  match:
                    '(?x)\n  ((?:\\b(?:uniform|varying|unsigned|signed|const)\\b\\s*)*)\n  ([A-Za-z_][A-Za-z0-9_]*(?:<[^>]+>)?\\s+)\n  (&)?'
                },
                {include: '#comments'},
                {match: ',', name: 'punctuation.separator.parameter.ispc'}
              ]
            },
            {include: '#function-body'}
          ]
        }
      ]
    },
    identifiers: {
      patterns: [
        {
          match: '\\boperator\\s*([+\\-*/=%<>&|^!~\\[\\]\\(\\)]+|\\w+)\\s*\\(',
          name: 'entity.name.function.operator.ispc'
        },
        {match: '\\b[A-Z][A-Z0-9_]+\\b', name: 'constant.other.ispc'}
      ]
    },
    intrinsics: {
      patterns: [
        {
          match: '@llvm\\.[a-zA-Z_0-9\\.]*',
          name: 'support.function.intrinsic.ispc'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(assert|break|case|cdo|cfor|cif|cwhile|continue|default|do|else|for|foreach|foreach_active|foreach_tiled|foreach_unique|goto|if|in|return|switch|sync|task|while|launch|invoke_sycl)\\b',
          name: 'keyword.control.ispc'
        },
        {
          match: '\\b(delete|new|sizeof|alloca)\\b',
          name: 'keyword.operator.ispc'
        },
        {
          match:
            '\\b(bool|double|float|float16|int|uint|int8|uint8|int16|uint16|int32|uint32|int64|uint64|void|struct|enum|size_t|ptrdiff_t|intptr_t|uintptr_t)\\b',
          name: 'storage.type.ispc'
        },
        {
          match:
            '\\b(const|extern|inline|noinline|static|uniform|unmasked|varying|template|typedef|typename|export|signed|unsigned|soa|__vectorcall|__regcall|__attribute__|volatile)\\b',
          name: 'storage.modifier.ispc'
        },
        {
          match:
            '\\b(true|false|NULL|programIndex|programCount|threadIndex|threadIndex0|threadIndex1|threadIndex2|threadCount|taskIndex|taskIndex0|taskIndex1|taskIndex2|taskCount)\\b',
          name: 'constant.language.ispc'
        }
      ]
    },
    numbers: {
      patterns: [
        {
          match: '\\b0[xX][0-9a-fA-F]+([uUlL]*[kMG]?[uUlL]*|\\.\\.\\.)?\\b',
          name: 'constant.numeric.hexadecimal.ispc'
        },
        {
          match: '\\b0b[01]+([uUlL]*[kMG]?[uUlL]*|\\.\\.\\.)?\\b',
          name: 'constant.numeric.binary.ispc'
        },
        {
          match:
            '\\b0[xX][01](\\.[0-9a-fA-F]*)?[pP][-+]?[0-9]+([dDfF]|[fF]16)?\\b',
          name: 'constant.numeric.float.hexadecimal.ispc'
        },
        {
          match: '\\b([0-9]+\\.[0-9]*|\\.[0-9]+)([dD]|[fF]|[fF]16)?\\b',
          name: 'constant.numeric.float.decimal.ispc'
        },
        {
          match:
            '\\b([0-9]+|(([0-9]+\\.[0-9]*)|\\.[0-9]+))([eE][-+]?[0-9]+)([dD]|[fF]|[fF]16)?\\b',
          name: 'constant.numeric.float.scientific.ispc'
        },
        {
          match: '\\b[0-9]+([uUlL]*[kMG]?[uUlL]*|\\.\\.\\.)?\\b',
          name: 'constant.numeric.integer.decimal.ispc'
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '\\*=|\\+=|\\-=|/=|%=|&=|\\|=|\\^=|<<=|>>=|=',
          name: 'keyword.operator.assignment.ispc'
        },
        {match: '&&|\\|\\||!', name: 'keyword.operator.logical.ispc'},
        {
          match: '&(?!\\s*[A-Za-z_])|\\||\\^|~|<<|>>',
          name: 'keyword.operator.bitwise.ispc'
        },
        {match: '==|!=|<=|>=|<|>', name: 'keyword.operator.comparison.ispc'},
        {match: '\\->|\\.|::|\\?', name: 'keyword.operator.other.ispc'},
        {
          match: '\\+\\+|\\-\\-|[+\\-*/%]',
          name: 'keyword.operator.arithmetic.ispc'
        }
      ]
    },
    pragmas: {
      patterns: [
        {
          begin: '#\\s*pragma\\s+',
          end: '$',
          name: 'meta.preprocessor.pragma.ispc',
          patterns: [
            {
              match: '\\b(unroll|nounroll|ignore\\s+warning)\\b',
              name: 'keyword.control.pragma.ispc'
            }
          ]
        }
      ]
    },
    preprocessor: {
      patterns: [
        {
          begin: '^\\s*(#\\s*(if|ifdef|ifndef|elif)\\b)(?=.*\\n)',
          beginCaptures: {1: {name: 'keyword.control.preprocessor.ispc'}},
          end: '(?=(?://|/\\*))|$',
          name: 'meta.preprocessor.conditional.ispc',
          patterns: [
            {include: '#operators'},
            {include: '#comments'},
            {include: '#strings'},
            {include: '#numbers'},
            {include: '#identifiers'}
          ]
        },
        {
          begin: '^\\s*#\\s*(include)\\b',
          beginCaptures: {0: {name: 'keyword.control.import.ispc'}},
          end: '(?=(?://|/\\*))|$',
          name: 'meta.preprocessor.ispc',
          patterns: [
            {begin: '<', end: '>', name: 'string.quoted.other.include.ispc'},
            {include: '#comments'},
            {include: '#strings'},
            {include: '#numbers'},
            {include: '#identifiers'}
          ]
        },
        {
          begin: '^\\s*#\\s*(define|undef|else|endif|line|error|warning)\\b',
          beginCaptures: {0: {name: 'keyword.control.import.ispc'}},
          end: '(?=(?://|/\\*))|$',
          name: 'meta.preprocessor.ispc',
          patterns: [
            {include: '#comments'},
            {include: '#strings'},
            {include: '#numbers'},
            {include: '#identifiers'}
          ]
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ';', name: 'punctuation.terminator.ispc'},
        {match: '\\{', name: 'punctuation.section.block.begin.ispc'},
        {match: '\\}', name: 'punctuation.section.block.end.ispc'},
        {match: '\\(', name: 'punctuation.section.parens.begin.ispc'},
        {match: '\\)', name: 'punctuation.section.parens.end.ispc'},
        {match: '\\[', name: 'punctuation.section.brackets.begin.ispc'},
        {match: '\\]', name: 'punctuation.section.brackets.end.ispc'},
        {match: ':', name: 'punctuation.separator.colon.ispc'},
        {match: '\\.', name: 'punctuation.separator.dot.ispc'},
        {match: ',', name: 'punctuation.separator.comma.ispc'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: 'L?"',
          end: '"',
          name: 'string.quoted.double.ispc',
          patterns: [
            {
              match: '\\\\([\'"?\\\\abfnrtv]|[0-7]{1,3}|x[0-9a-fA-F]+)',
              name: 'constant.character.escape.ispc'
            }
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.ispc',
          patterns: [
            {
              match: '\\\\([\'"?\\\\abfnrtv]|[0-7]{1,3}|x[0-9a-fA-F]+)',
              name: 'constant.character.escape.ispc'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.ispc'
}

export default grammar
