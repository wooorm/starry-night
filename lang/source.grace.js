// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.grace'],
  names: ['grace'],
  patterns: [
    {include: '#comment'},
    {include: '#comma'},
    {
      captures: {
        1: {name: 'keyword.import.grace'},
        2: {name: 'string.path.grace'},
        3: {name: 'keyword.as.grace'},
        4: {name: 'entity.identifier.grace'}
      },
      match: '(import)\\s*(".*")\\s*(as)\\s+([A-z][A-z\\d\']*)',
      name: 'meta.import.grace'
    },
    {
      begin: "(?:(?<![A-z\\d'])(type)|(=))\\s*\\{",
      beginCaptures: {
        1: {name: 'keyword.type.grace'},
        2: {name: 'keyword.operator.grace'}
      },
      end: '\\}',
      name: 'meta.type.literal.grace',
      patterns: [
        {include: '#comment'},
        {include: '#signature'},
        {include: '#bad_names'},
        {
          match: "[A-z][A-z\\d']*|[-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]*",
          name: 'entity.function.grace'
        }
      ]
    },
    {
      begin: "(?<![A-z\\d'])(type)(?![A-z\\d'])(?!\\s*\\{)",
      beginCaptures: {1: {name: 'keyword.type.grace'}},
      end: '(?==)',
      endCaptures: {1: {name: 'keyword.operator.grace'}},
      name: 'meta.type.grace',
      patterns: [
        {include: '#comment'},
        {
          begin: "([A-z][A-z\\d']*)(<)",
          beginCaptures: {
            1: {name: 'entity.type.grace'},
            2: {name: 'keyword.operator.grace'}
          },
          end: '(>)',
          endCaptures: {1: {name: 'keyword.type.generic.grace'}},
          name: 'meta.type.generic.grace',
          patterns: [
            {include: '#comment'},
            {include: '#bad_names'},
            {include: '#bad_operators'},
            {include: '#comma'},
            {match: "[A-z][A-z\\d']*", name: 'entity.type.generic.grace'}
          ]
        },
        {
          begin: "(?<![A-z\\d'])(is)(?![A-z\\d'])",
          beginCaptures: {1: {name: 'keyword.grace'}},
          end: '(?==)',
          patterns: [
            {include: '$self'},
            {match: "[A-z][A-z\\d']*", name: 'support.type.annotation.grace'}
          ]
        },
        {include: '#bad_names'},
        {match: "[A-z][A-z\\d']*", name: 'entity.type.grace'},
        {include: '$self'}
      ]
    },
    {
      begin: "(?<![A-z\\d'])(method)(?![A-z\\d'])",
      beginCaptures: {1: {name: 'keyword.grace'}},
      end: '(?=\\{)',
      name: 'meta.method.grace',
      patterns: [
        {include: '#comment'},
        {include: '#signature'},
        {
          match: "[A-z][A-z\\d']*|[-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]*",
          name: 'entity.function.grace'
        }
      ]
    },
    {
      begin: "\\b(class)(?![A-z\\d'])",
      beginCaptures: {1: {name: 'keyword.class.grace'}},
      end: '(?=\\{)',
      name: 'meta.class.grace',
      patterns: [
        {include: '#comment'},
        {include: '#signature'},
        {match: '\\.', name: 'keyword.operator.class.grace'},
        {
          captures: {
            1: {name: 'entity.class.grace'},
            2: {name: 'keyword.operator.grace'}
          },
          match: "(?<=class)\\s*([A-z][A-z\\d']*)\\s*(\\.)",
          name: 'meta.name.class.grace'
        },
        {
          match: "[A-z][A-z\\d']*|[-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]*",
          name: 'entity.class.grace'
        }
      ]
    },
    {
      begin: "(?<![A-z\\d'])(def)(?![A-z\\d'])",
      beginCaptures: {1: {name: 'keyword.definition.grace'}},
      end: "(?<![^\\w\\d'\\s])(?:(=)|(:=))(?![^\\w\\s])|$",
      endCaptures: {
        1: {name: 'keyword.operator.grace'},
        2: {name: 'invalid.illegal.grace'}
      },
      name: 'meta.definition.grace',
      patterns: [
        {include: '#comment'},
        {include: '#signature_args'},
        {
          begin: "(?<![A-z\\d'])(is)(?![A-z\\d'])",
          beginCaptures: {1: {name: 'keyword.grace'}},
          end: "(?=(?<![^\\w\\d'\\s])(?:(=)|(:=))(?![^\\w\\d'\\s]))|$",
          patterns: [
            {include: '$self'},
            {match: "[A-z][A-z\\d']*", name: 'support.type.annotation.grace'}
          ]
        },
        {include: '#bad_names'},
        {match: "\\b_\\b|[A-z][A-z\\d']*", name: 'entity.definition.grace'}
      ]
    },
    {
      begin: "(?<![A-z\\d'])(var)(?![A-z\\d'])",
      beginCaptures: {1: {name: 'keyword.variable.grace'}},
      end: "(?<![^\\w\\d'\\s])(?:(:=)|(=))(?![^\\w\\d'\\s])|$",
      endCaptures: {
        1: {name: 'keyword.operator.grace'},
        2: {name: 'invalid.illegal.grace'}
      },
      name: 'meta.variable.grace',
      patterns: [
        {include: '#comment'},
        {
          begin: "(?<![^\\w\\d'\\s\\(,])(:)(?![^\\w\\d'\\s\\),])",
          beginCaptures: {1: {name: 'keyword.operator.grace'}},
          end: '(?=$|,|\\)|(?<=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|^)(:|=|:=|->)(?=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|$))',
          patterns: [{include: '$self'}, {include: '#type'}]
        },
        {
          begin: "(?<![A-z\\d'])(is)(?![A-z\\d'])",
          beginCaptures: {1: {name: 'keyword.grace'}},
          end: "(?=(?<![^\\w\\d'\\s])(?:(=)|(:=))(?![^\\w\\d'\\s]))|$",
          patterns: [
            {include: '$self'},
            {match: "[A-z][A-z\\d']*", name: 'support.type.annotation.grace'}
          ]
        },
        {include: '#bad_names'},
        {include: '#bad_operators'},
        {match: "\\b_\\b|[A-z][A-z\\d']*", name: 'entity.variable.grace'}
      ]
    },
    {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.grace',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?<=\\{)(?=[^{}]*[^-|@#!%$?&=:\\.\\*~+\\</>\\\\}]->[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^])',
      end: '(->)',
      endCaptures: {1: {name: 'keyword.operator.grace'}},
      name: 'meta.parameters.block.grace',
      patterns: [
        {include: '#comment'},
        {include: '#signature_args'},
        {include: '#comma'},
        {include: '#number'},
        {include: '#string'},
        {include: '#bad_names'},
        {include: '#bad_operators'},
        {match: "[A-z][A-z\\d']*", name: 'entity.parameter.grace'}
      ]
    },
    {include: '#string'},
    {include: '#generic'},
    {
      match: "(?<![A-z\\d'])(return)(?![A-z\\d'])",
      name: 'keyword.control.grace'
    },
    {
      match:
        '(?<=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|^)(:|=|:=|\\.|->)(?=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|$)',
      name: 'keyword.operator.grace'
    },
    {
      match: '[-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]*',
      name: 'support.function.operator.grace'
    },
    {
      match:
        "(?<![A-z\\d'])(dialect|import|as|object|method|class|type|def|var|where|is|inherits)(?![A-z\\d'])",
      name: 'keyword.grace'
    },
    {include: '#number'},
    {
      match: "(?<![A-z\\d'])(super|self|outer)(?![A-z\\d'])",
      name: 'variable.language.self.grace'
    },
    {
      match: "(?<![A-z\\d'])true(?![A-z\\d'])",
      name: 'constant.language.boolean.true.grace'
    },
    {
      match: "(?<![A-z\\d'])false(?![A-z\\d'])",
      name: 'constant.language.boolean.false.grace'
    },
    {
      match: "(?<![A-z\\d'])[A-Z][A-z\\d']*(?![A-z\\d']|\\s*\\.\\s*[A-z])",
      name: 'support.type.grace'
    }
  ],
  repository: {
    bad_names: {
      match:
        "(?<![A-z\\d'])(dialect|import|as|object|method|class|type|def|var|where|is|inherits|self|super|outer)(?![A-z\\d'])",
      name: 'invalid.illegal.grace'
    },
    bad_operators: {
      match: '[-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]+',
      name: 'invalid.illegal.grace'
    },
    comma: {match: ',', name: 'keyword.grace'},
    comment: {match: '//.*$', name: 'comment.line.grace'},
    generic: {
      begin:
        "(?:([A-Z][A-z\\d']*)|[a-z][A-z\\d']*)(<)(?![-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^])",
      beginCaptures: {
        1: {name: 'support.type.grace'},
        2: {name: 'keyword.operator.grace'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'keyword.operator.grace'}},
      name: 'meta.type.generic.grace',
      patterns: [
        {include: '#comment'},
        {include: '#generic'},
        {include: '$self'},
        {include: '#type'}
      ]
    },
    number: {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.grace'
    },
    signature: {
      name: 'meta.signature.grace',
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?<=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|^)(->)(?=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|$)',
          beginCaptures: {1: {name: 'keyword.operator.grace'}},
          end: "(?=(?<![A-z\\d'])is(?![A-z\\d'])|\\{|\\}|(?<=[A-z\\d'\">)])(?<!->)\\s+$)",
          patterns: [{include: '$self'}, {include: '#type'}]
        },
        {
          captures: {
            1: {name: 'keyword.grace'},
            2: {name: 'invalid.illegal.grace'},
            3: {name: 'entity.function.grace'}
          },
          match:
            '(prefix)\\s*(?:(:(?:=?)(?=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]))|([-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]*))',
          name: 'meta.signature.prefix.grace'
        },
        {
          captures: {
            1: {name: 'entity.function.grace'},
            2: {name: 'keyword.operator.grace'}
          },
          match: "([A-z][A-z0-9']*)\\s*(:=)\\s*(?=\\()",
          name: 'meta.signature.assign.grace'
        },
        {
          captures: {
            1: {name: 'invalid.illegal.grace'},
            2: {name: 'entity.function.grace'}
          },
          match:
            '(?:(:(?:=?))|([-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]+))\\s*(?=\\()',
          name: 'meta.signature.binary.grace'
        },
        {
          begin: "(?<![A-z\\d'])(is)(?![A-z\\d'])",
          beginCaptures: {1: {name: 'keyword.grace'}},
          end: '(?=\\{|\\}|(?<=[A-z\\d\'">)])(?<!is)\\s+$)',
          patterns: [
            {include: '$self'},
            {match: "[A-z][A-z\\d']*", name: 'support.annotation.grace'}
          ]
        },
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.signature.parameters.grace',
          patterns: [{include: '#signature_args'}]
        },
        {
          begin: '(?<=\\w)(<)',
          beginCaptures: {1: {name: 'keyword.generic.grace'}},
          end: '(>)',
          endCaptures: {1: {name: 'keyword.generic.grace'}},
          patterns: [
            {include: '#comment'},
            {include: '#comma'},
            {match: "[A-z][A-z0-9']*", name: 'support.type.grace'}
          ]
        },
        {include: '#bad_names'},
        {include: '#bad_operators'},
        {
          match: "[A-z][A-z\\d']*(?=\\s*[,\\:\\)])",
          name: 'entity.function.grace'
        }
      ]
    },
    signature_args: {
      name: 'meta.signature.grace',
      patterns: [
        {include: '#comment'},
        {match: '\\*', name: 'keyword.variadic.grace'},
        {
          begin: "(?<![^\\w\\d'\\s\\(,])(:)(?![^\\w\\d'\\s\\),])",
          beginCaptures: {1: {name: 'keyword.operator.grace'}},
          end: '(?=,|\\)|(?<=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|^)(:|=|:=|->)(?=[^-|@#!%$?&=:\\.\\*~+\\</>\\\\\\^]|$))',
          patterns: [{include: '$self'}, {include: '#type'}]
        },
        {
          match: "[A-z][A-z\\d']*(?=\\s*[,\\:\\)])",
          name: 'entity.function.grace'
        },
        {include: '#comma'}
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.grace'}},
      end: '(")|(\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.grace'},
        2: {name: 'invalid.illegal.grace'}
      },
      name: 'string.quoted.double.grace',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.grace'
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'keyword.interpolation.begin.grace'}},
          end: '\\}',
          endCaptures: {0: {name: 'keyword.interpolation.end.grace'}},
          name: 'source.embedded.grace',
          patterns: [{include: '$self'}]
        }
      ]
    },
    type: {
      match: "[A-z][A-z\\d']*(?![A-z\\d']|\\s*\\.\\s*[A-z])",
      name: 'support.type.grace'
    }
  },
  scopeName: 'source.grace'
}

export default grammar
