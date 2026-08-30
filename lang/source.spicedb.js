// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/authzed/spicedb-vscode>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zed'],
  names: ['spicedb-schema'],
  patterns: [
    {include: '#comment'},
    {include: '#use'},
    {include: '#import'},
    {include: '#partial'},
    {include: '#definition'},
    {include: '#caveat'},
    {include: '#relation'},
    {include: '#permission'}
  ],
  repository: {
    arrow: {
      captures: {
        1: {name: 'variable.other.member.spicedb'},
        2: {name: 'keyword.operator.arrow.spicedb'},
        3: {name: 'variable.other.member.spicedb'}
      },
      match: '\\s*([a-zA-Z_]\\w*)(->)([a-zA-Z_]\\w*)\\s*'
    },
    arrow_alternative: {
      captures: {
        1: {name: 'variable.other.member.spicedb'},
        2: {name: 'keyword.operator.arrow.spicedb'},
        3: {name: 'variable.other.member.spicedb'}
      },
      match: '\\s*([a-zA-Z_]\\w*)(\\.any)\\(([a-zA-Z_]\\w*)\\)\\s*'
    },
    arrow_intersection: {
      captures: {
        1: {name: 'variable.other.member.spicedb'},
        2: {name: 'keyword.operator.arrow.spicedb'},
        3: {name: 'variable.other.member.spicedb'}
      },
      match: '\\s*([a-zA-Z_]\\w*)(\\.all)\\(([a-zA-Z_]\\w*)\\)\\s*'
    },
    caveat: {
      begin:
        '(\\bcaveat\\b)\\s+(([a-z][\\w]{1,62}[a-z0-9]\\/)*[a-z][\\w]{1,62}[a-z0-9])\\s*\\(([^\\)]*)\\)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.function.definition'},
        2: {name: 'entity.name.function'},
        4: {
          patterns: [
            {include: '#caveatParameter'},
            {include: '#caveatTypeName'},
            {include: '#comma'}
          ]
        },
        5: {name: 'punctuation.definition.brace'}
      },
      end: '(?<=\\})$',
      endCaptures: {0: {name: 'punctuation.end.brace'}},
      name: 'meta.embedded.block.cel',
      patterns: [{include: 'source.cel'}]
    },
    caveatParameter: {
      captures: {
        1: {name: 'entity.name.variable'},
        2: {name: 'entity.name.class'}
      },
      match: '([a-zA-Z_]\\w*)\\s+([a-zA-Z_]\\w*)'
    },
    caveatTypeName: {
      captures: {1: {name: 'entity.name.class'}},
      match: '\\s*([a-zA-Z_]\\w*)\\s*'
    },
    comma: {match: '\\s*,\\s*', name: 'punctuation.definition.comma'},
    comment: {
      patterns: [{include: '#lineComment'}, {include: '#blockComment'}],
      repository: {
        blockComment: {
          begin: '\\/\\*',
          end: '\\*\\/',
          name: 'comment.block.spicedb'
        },
        lineComment: {
          patterns: [{include: '#doubleSlashLineComment'}],
          repository: {
            doubleSlashLineComment: {
              match: '\\/\\/.*',
              name: 'comment.line.double-slash.spicedb'
            }
          }
        }
      }
    },
    definition: {
      begin:
        '(\\bdefinition\\b)\\s+(([a-z][\\w]{1,62}[a-z0-9]\\/)*[a-z][\\w]{1,62}[a-z0-9])\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'entity.name.class'},
        4: {name: 'punctuation.definition.brace'}
      },
      end: '(?<=\\})',
      endCaptures: {0: {name: 'punctuation.end.brace'}},
      patterns: [
        {include: '#relation'},
        {include: '#permission'},
        {include: '#comment'}
      ]
    },
    directRelationType: {
      captures: {1: {name: 'entity.name.class'}},
      match: '([a-zA-Z_]\\w*)'
    },
    import: {
      captures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'entity.name.function'}
      },
      match: '\\s*(import)\\s*(["a-zA-Z_]\\w*)\\s*'
    },
    indirectRelationType: {
      captures: {
        1: {name: 'entity.name.class'},
        2: {name: 'punctuation.definition.hash'},
        3: {name: 'variable.other.member.spicedb'}
      },
      match: '([a-zA-Z_]\\w*)(#)([a-zA-Z_]\\w*)'
    },
    nil: {
      captures: {1: {name: 'constant.language.nil.spicedb'}},
      match: '\\b(nil)\\b'
    },
    partial: {
      captures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'entity.name.function'}
      },
      match: '\\s*(partial)\\s*(["a-zA-Z_]\\w*)\\s*'
    },
    permission: {
      begin: '(\\bpermission\\b)\\s+([a-zA-Z_]\\w*)\\s*(=)\\s*',
      beginCaptures: {
        1: {name: 'keyword.function.relation'},
        2: {name: 'entity.name.function'},
        3: {name: 'punctuation.definition.equal'}
      },
      end: '(?<=;|\\n)',
      patterns: [
        {include: '#comment'},
        {include: '#arrow_alternative'},
        {include: '#arrow_intersection'},
        {include: '#arrow'},
        {include: '#nil'},
        {include: '#relationRef'},
        {include: '#permissionOperator'}
      ]
    },
    permissionOperator: {
      captures: {1: {name: 'keyword.operator.logical'}},
      match: '\\s*(\\+|-|&)\\s*'
    },
    pipe: {match: '\\|', name: 'punctuation.definition.pipe'},
    relation: {
      begin: '(\\brelation\\b)\\s+([a-zA-Z_]\\w*)\\s*(:)',
      beginCaptures: {
        1: {name: 'keyword.variable.relation'},
        2: {name: 'entity.name.variable'},
        3: {name: 'punctuation.definition.colon'}
      },
      end: '(?<=;|\\n)',
      patterns: [
        {include: '#wildcardRelationType'},
        {include: '#indirectRelationType'},
        {include: '#directRelationType'},
        {include: '#pipe'},
        {include: '#with_expiration'},
        {include: '#with_caveat'},
        {include: '#comment'}
      ]
    },
    relationRef: {
      captures: {1: {name: 'variable.other.member.spicedb'}},
      match: '([a-zA-Z_]\\w*)\\b(?!->|\\.(?:any|all)\\()'
    },
    use: {
      captures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'keyword.class.definition'}
      },
      match: '\\s*(use)\\s*([a-zA-Z_]\\w*)\\s*'
    },
    wildcardRelationType: {
      captures: {
        1: {name: 'entity.name.class'},
        2: {name: 'punctuation.definition.colon'},
        3: {name: 'constant.language.wildcard.spicedb'}
      },
      match: '([a-zA-Z_]\\w*)(:)(\\*)'
    },
    with_caveat: {
      captures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'entity.name.function'}
      },
      match:
        '\\s*(with)\\s*(([a-z][\\w]{1,62}[a-z0-9]\\/)*[a-z][\\w]{1,62}[a-z0-9])\\s*'
    },
    with_expiration: {
      captures: {
        1: {name: 'keyword.class.definition'},
        2: {name: 'support.type.expiration.spicedb'}
      },
      match: '\\s*(with)\\s*(expiration)\\s*'
    }
  },
  scopeName: 'source.spicedb'
}

export default grammar
