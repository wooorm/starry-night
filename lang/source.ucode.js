// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/NoahBPeterson/ucode-lsp>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['ucode'],
  patterns: [
    {include: '#template_blocks'},
    {include: '#comments'},
    {include: '#regexp'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#property_access'},
    {include: '#keywords'},
    {include: '#operators'},
    {include: '#functions'},
    {include: '#objects'},
    {include: '#variables'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '//.*$', name: 'comment.line.double-slash.ucode'},
        {match: '/\\*/(?!/)', name: 'comment.block.empty.ucode'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.ucode'},
        {begin: '{#', end: '#}', name: 'comment.block.template.ucode'}
      ]
    },
    functions: {
      patterns: [
        {
          match:
            '\\b(print|printf|sprintf|length|substr|split|join|trim|ltrim|rtrim|chr|ord|uc|lc|type|keys|values|push|pop|shift|unshift|index|rindex|require|include|json|match|replace|system|time|sleep|localtime|gmtime|timelocal|timegm|min|max|uniq|b64enc|b64dec|hexenc|hexdec|hex|uchr|iptoarr|arrtoip|int|loadstring|loadfile|wildcard|regexp|assert|call|signal|clock|sourcepath|gc|die|exists|exit|filter|getenv|map|proto|render|reverse|slice|sort|splice|trace|warn)\\b(?=\\s*\\()',
          name: 'support.function.builtin.ucode'
        },
        {
          match: '\\b([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*(?=\\()',
          name: 'entity.name.function.ucode'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          captures: {1: {name: 'variable.other.ucode'}},
          match: '\\b(default)\\s+(?=as\\b)'
        },
        {
          captures: {1: {name: 'variable.other.ucode'}},
          match: '\\bas\\s+(default)\\b'
        },
        {
          match:
            '\\b(if|else|elif|endif|while|endwhile|for|endfor|break|continue|return|try|catch|switch|case|default|in)\\b',
          name: 'keyword.control.ucode'
        },
        {
          match: '\\b(let|const|function|endfunction)\\b',
          name: 'storage.type.ucode'
        },
        {
          match: '\\b(delete)\\b(?!\\s*\\()',
          name: 'keyword.operator.delete.ucode'
        },
        {match: '\\b(import|export)\\b', name: 'keyword.control.module.ucode'},
        {match: '\\b(true|false|null|this)\\b', name: 'constant.language.ucode'}
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b0[xX][0-9a-fA-F]+\\b', name: 'constant.numeric.hex.ucode'},
        {match: '\\b0[bB][01]+\\b', name: 'constant.numeric.binary.ucode'},
        {match: '\\b0[oO][0-7]+\\b', name: 'constant.numeric.octal.ucode'},
        {
          match: '\\b\\d+(\\.\\d+)?([eE][+-]?\\d+)?\\b',
          name: 'constant.numeric.decimal.ucode'
        }
      ]
    },
    objects: {
      patterns: [
        {
          begin: '\\{',
          end: '\\}',
          name: 'meta.object.literal.ucode',
          patterns: [
            {
              begin:
                '\\b(try|catch|if|else|while|for|return|break|continue|function|let|const|true|false|null|this|switch|case|default|import|export|in|delete|[a-zA-Z_$][a-zA-Z0-9_$]*)\\s*(?=:)',
              beginCaptures: {1: {name: 'variable.other.property.ucode'}},
              end: '(?=:)',
              name: 'meta.object.property.ucode'
            },
            {include: '$self'}
          ]
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '(\\+|\\-|\\*|/|%|\\*\\*|\\+\\+|--)',
          name: 'keyword.operator.arithmetic.ucode'
        },
        {
          match:
            '(=|\\+=|\\-=|\\*=|/=|%=|\\*\\*=|&=|\\^=|\\|=|<<=|>>=|&&=|\\|\\|=|\\?\\?=)',
          name: 'keyword.operator.assignment.ucode'
        },
        {
          match: '(===|!==|==|!=|<|<=|>|>=)',
          name: 'keyword.operator.comparison.ucode'
        },
        {match: '(&&|\\|\\||!)', name: 'keyword.operator.logical.ucode'},
        {match: '(&|\\||\\^|~|<<|>>)', name: 'keyword.operator.bitwise.ucode'},
        {match: '(\\?|:)', name: 'keyword.operator.ternary.ucode'},
        {match: '(\\?\\.)', name: 'keyword.operator.optional-chaining.ucode'},
        {match: '(\\?\\?)', name: 'keyword.operator.nullish-coalescing.ucode'},
        {match: '(=>)', name: 'keyword.operator.arrow.ucode'}
      ]
    },
    property_access: {
      patterns: [
        {
          match: '(?<=\\.)\\b([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*(?=\\()',
          name: 'entity.name.function.method.ucode'
        },
        {
          match:
            '(?<=\\.)\\b(try|catch|if|else|elif|endif|while|endwhile|for|endfor|break|continue|return|switch|case|default|in|let|const|function|endfunction|delete|import|export|true|false|null|this|[a-zA-Z_$][a-zA-Z0-9_$]*)\\b',
          name: 'variable.other.property.ucode'
        }
      ]
    },
    regexp: {
      patterns: [
        {
          begin: '(?<=[=(,:;!?\\[]|\\breturn|\\bcase|&&|\\|\\|)\\s*(/(?![/*]))',
          beginCaptures: {1: {name: 'string.regexp.ucode'}},
          contentName: 'string.regexp.ucode',
          end: '/[gis]*',
          endCaptures: {0: {name: 'string.regexp.ucode'}},
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.regexp.ucode'},
            {
              begin: '\\[\\^?\\]?',
              end: '\\]',
              name: 'constant.other.character-class.regexp.ucode',
              patterns: [
                {match: '\\\\.', name: 'constant.character.escape.regexp.ucode'}
              ]
            }
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"|((?<!\\\\)$)',
          name: 'string.quoted.double.ucode',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.ucode'}]
        },
        {
          begin: "'",
          end: "'|((?<!\\\\)$)",
          name: 'string.quoted.single.ucode',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.ucode'}]
        },
        {
          begin: '`',
          end: '`',
          name: 'string.template.ucode',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.ucode'},
            {
              begin: '\\$\\{',
              end: '\\}',
              name: 'keyword.control.interpolation.ucode',
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    template_blocks: {
      patterns: [
        {
          begin: '{{',
          end: '}}',
          name: 'meta.embedded.block.expression.ucode',
          patterns: [{include: '$self'}]
        },
        {
          begin: '{%',
          end: '%}',
          name: 'meta.embedded.block.statement.ucode',
          patterns: [{include: '$self'}]
        }
      ]
    },
    variables: {
      patterns: [
        {match: '\\b[a-zA-Z_$][a-zA-Z0-9_$]*\\b', name: 'variable.other.ucode'}
      ]
    }
  },
  scopeName: 'source.ucode'
}

export default grammar
