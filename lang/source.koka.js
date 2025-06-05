// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/koka-community/koka-textmate-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.kk'],
  names: ['koka'],
  patterns: [
    {include: '#line_comment'},
    {include: '#line_directive'},
    {include: '#block_comment'},
    {include: '#string'},
    {include: '#rawstring'},
    {include: '#rawstring1'},
    {include: '#rawstring2'},
    {include: '#character'},
    {include: '#characteresc'},
    {include: '#type_app'},
    {include: '#top_type'},
    {include: '#top_type_type'},
    {include: '#top_type_alias'},
    {include: '#top_type_struct_args'},
    {include: '#top_type_struct'},
    {include: '#top_type_quantifier'},
    {include: '#decl_function'},
    {include: '#decl_external_import'},
    {include: '#decl_external'},
    {include: '#decl_toplevel_val'},
    {include: '#decl_val'},
    {include: '#decl_var'},
    {include: '#decl_hover_expr'},
    {include: '#decl_hover_implicit'},
    {include: '#decl_param'},
    {include: '#module_id'},
    {include: '#import_id'},
    {include: '#import_id2'},
    {include: '#branch'},
    {include: '#dot'},
    {include: '#reservedid'},
    {include: '#reservedcontrol'},
    {include: '#reservedop'},
    {include: '#libraryid'},
    {include: '#externid'},
    {include: '#qconstructor'},
    {include: '#qoperator'},
    {include: '#qidentifier'},
    {include: '#identifier'},
    {include: '#constructor'},
    {include: '#special'},
    {include: '#minus'},
    {include: '#operator'},
    {include: '#wildcard'},
    {include: '#number'},
    {include: '#inv_character'},
    {include: '#whitespace'}
  ],
  repository: {
    block_comment: {
      begin: '/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment koka.comment.block'}
      },
      end: '\\*/',
      endCaptures: {
        0: {name: 'punctuation.definition.comment koka.comment.block'}
      },
      name: 'comment.block koka.comment.block',
      patterns: [
        {include: '#block_comment'},
        {
          begin: '^```+.*$',
          end: '^```+\\s*$',
          name: 'koka.comment.doc.pre.block'
        },
        {
          captures: {1: {name: 'koka.comment.doc.pre.type'}},
          match: '`(:[^\\`\\n]+)`'
        },
        {
          captures: {1: {name: 'koka.comment.doc.pre.module'}},
          match: '`(module [^\\`\\n]+)`'
        },
        {
          captures: {1: {name: 'koka.comment.doc.pre.source'}},
          match: '`+([^\\`\\n]*)`+'
        },
        {
          captures: {1: {name: 'koka.comment.doc.emph'}},
          match: '\\*([^\\*]*)\\*'
        },
        {
          captures: {1: {name: 'markup.italic koka.comment.doc.emph'}},
          match: '_([^_]*)_'
        }
      ]
    },
    branch: {
      match: '(finally|initially)\\s*(?=->|[\\{\\(])',
      name: 'keyword.other koka.id.library.$1'
    },
    character: {
      beginCaptures: {0: {name: 'punctuation.definition.character koka.char'}},
      endCaptures: {0: {name: 'punctuation.definition.character koka.char'}},
      match: "'[^\\'\\\\$]'",
      name: 'string.quoted.single koka.char'
    },
    characteresc: {
      captures: {
        1: {name: 'string.quoted.single koka.char'},
        2: {
          name: 'string.quoted.single constant.character.escape koka.char.escape'
        },
        3: {
          name: 'string.quoted.single constant.character.escape koka.char.escape'
        },
        4: {name: 'string.quoted.single koka.char'}
      },
      match:
        "(')(\\\\([abfnrtv0\\\\\"'\\?]|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|U[\\da-fA-F]{6}))(')"
    },
    constructor: {
      match: "[@A-Z][\\w\\-@]*[\\']*",
      name: 'entity.name.tag.css.constant.other.constructor koka.conid'
    },
    decl_external: {
      captures: {
        1: {name: 'keyword.declaration.function koka.keyword.extern'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'entity.name.function koka.id.decl.function'}
      },
      match:
        '((?:(?:inline|noinline)\\s+)?(?:(?:fip|fbip)\\s+)?extern)\\s+((?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\)|\\[\\]|\\"[^\\s\\"]+\\")?'
    },
    decl_external_import: {
      match: '(extern\\s+import)',
      name: 'keyword.declaration.import koka.keyword.extern'
    },
    decl_function: {
      captures: {
        1: {name: 'keyword.declaration.function koka.keyword.fun'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'entity.name.function koka.id.decl.function'}
      },
      match:
        '((?:(?:inline|noinline)\\s+)?(?:tail\\s+)?(?:(?:fip|fbip)(?:\\(\\d+\\))?\\s+)?(?:fun|fn|ctl|ret))\\s+((?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\)|\\[\\]|\\"[^\\s\\"]+\\")'
    },
    decl_hover_expr: {
      match: '^expr',
      name: 'keyword.declaration koka.keyword.expr'
    },
    decl_hover_implicit: {
      captures: {
        1: {name: 'entity.name.label source.typeparam koka.param.implicit'},
        2: {name: 'entity.name.label source.typeparam koka.param.implicit'}
      },
      match:
        "(\\?(?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\))(?=\\s*[=])"
    },
    decl_param: {
      match: "([a-z][\\w\\-]*[\\']*)\\s*(?=:)",
      name: 'entity.name koka.id.param'
    },
    decl_toplevel_val: {
      captures: {
        1: {name: 'keyword.declaration  koka.keyword.val'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'entity.name.function koka.id.decl.val'}
      },
      match:
        "(^(?:(?:inline|noinline)\\s+)?val)\\s+((?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\))?"
    },
    decl_val: {
      captures: {
        1: {name: 'keyword.declaration  koka.keyword.val'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'entity.name koka.id.decl.val'}
      },
      match:
        "((?:(?:inline|noinline)\\s+)?val)\\s+((?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\))?"
    },
    decl_var: {
      captures: {
        1: {name: 'keyword.declaration koka.keyword.var'},
        2: {name: 'entity.name koka.id.decl.var'}
      },
      match:
        "(var)\\s+([a-z][\\w\\-]*[\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\))"
    },
    dot: {match: '\\.', name: 'source.dot koka.special.dot'},
    externid: {
      match:
        '(?:c|cs|js|inline)\\s+(?:inline\\s+)?(?:(?:file|header-file|header-end-file)\\s+)?(?=[\\"\\{]|r#*")',
      name: 'keyword.control koka.id.extern.$1'
    },
    identifier: {match: "@?[a-z][\\w\\-@]*[\\']*", name: 'source koka.id'},
    import_id: {
      captures: {
        1: {name: 'keyword koka.keyword.import'},
        3: {name: 'entity.name.variable koka.moduleid'},
        6: {name: 'keyword koka.keyword.op'},
        8: {name: 'entity.name.variable koka.moduleid'}
      },
      match:
        '(import)(\\s+(([a-z][\\w\\-]*/)*[a-z][\\w\\-]*)(\\s+(=)(\\s+(([a-z][\\w\\-]*/)*[a-z][\\w\\-]*))?))'
    },
    import_id2: {
      captures: {
        1: {name: 'keyword koka.keyword.import'},
        3: {name: 'entity.name.variable koka.moduleid'}
      },
      match: '(import)(\\s+(([a-z][\\w\\-]*/)*[a-z][\\w\\-]*))'
    },
    inv_character: {
      match: "'([^'\\\\\\n]|\\\\(.|x..|u....|U......))'|'$|''?",
      name: 'invalid.string.quoted.single koka.char.invalid'
    },
    libraryid: {
      match: "(resume|resume-shallow|rcontext)(?![\\w\\-?'])",
      name: 'keyword.control koka.id.library.$1'
    },
    libraryop: {
      match: '(!)(?![$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>])',
      name: 'keyword.control koka.op.library'
    },
    line_comment: {
      begin: '//',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment  koka.comment.line'}
      },
      end: '$',
      name: 'comment.line.double-slash koka.comment.line',
      patterns: [
        {
          captures: {1: {name: 'koka.comment.doc.pre.type'}},
          match: '`(:[^\\`\\n]+)`'
        },
        {
          captures: {1: {name: 'koka.comment.doc.pre.module'}},
          match: '`(module [^\\`\\n]+)`'
        },
        {
          captures: {1: {name: 'koka.comment.doc.pre.source'}},
          match: '`+([^\\`\\n]*)`+'
        },
        {
          captures: {1: {name: 'koka.comment.doc.emph'}},
          match: '\\*([^\\*]*)\\*'
        },
        {
          captures: {1: {name: 'markup.italic koka.comment.doc.emph'}},
          match: '_([^_]*)_'
        }
      ]
    },
    line_directive: {
      match: '^\\s*#.*$',
      name: 'meta.preprocessor koka.preprocessor'
    },
    minus: {
      match: '-(?![$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>])',
      name: 'source.operator.minus koka.op.minus'
    },
    module_id: {
      captures: {
        1: {name: 'keyword.other koka.keyword.module'},
        3: {name: 'keyword.other koka.keyword.interface'},
        4: {name: 'entity.name.variable koka.moduleid'}
      },
      match: '(module)\\s*((interface)?)\\s*(([a-z][\\w\\-]*/)*[a-z][\\w\\-]*)'
    },
    number: {
      match:
        '-?(?:0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*(\\.[\\da-fA-F]+(?:_[\\da-fA-F]+)*)?([pP][\\-+]?\\d+)?|0[bB][01][01_]*|(?:0|[1-9]\\d*)(?:_\\d+)*(\\.\\d+(?:_\\d+)*([eE][\\-+]?\\d+)?)?)',
      name: 'constant.numeric koka.number'
    },
    operator: {
      match: '[$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+',
      name: 'source.operator koka.op'
    },
    param_identifier: {
      captures: {
        1: {name: 'koka.keyword.borrow'},
        2: {name: 'koka.keyword.implicit'},
        3: {name: 'source koka.id.param'}
      },
      match: "([^]\\s+)?(\\?[\\?]?\\s*)?([@a-z][\\w\\-@]*[\\']*)\\s*(?=[:,\\)])"
    },
    qconstructor: {
      captures: {
        1: {name: 'entity.name.variable koka.moduleid'},
        2: {name: 'entity.name.tag.css.constant.other.constructor koka.conid'}
      },
      match: "((?:[@a-z][\\w\\-@]*/#?)+)(@?[A-Z][\\w\\-@]*[\\']*)"
    },
    qidentifier: {
      captures: {
        1: {name: 'entity.name.variable koka.moduleid'},
        2: {name: 'source koka.id'}
      },
      match: "([\\?]?(?:[@a-z][\\w\\-@]*/#?)+)(@?[a-z][\\w\\-@]*[\\']*)"
    },
    qoperator: {
      captures: {
        1: {name: 'entity.name.variable koka.moduleid'},
        2: {name: 'source.operator koka.op'}
      },
      match: '([\\?]?(?:[@a-z][\\w\\-@]*/#?)+)(\\([^\\n\\r\\)]+\\))'
    },
    rawstring: {
      begin: 'r"',
      beginCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      name: 'string.quoted.double koka.string.raw',
      patterns: [
        {match: '[^"]+', name: 'string.quoted.double koka.string.raw'},
        {match: '.', name: 'invalid.string.quoted.double koka.string.raw'}
      ]
    },
    rawstring1: {
      begin: 'r#"',
      beginCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      end: '"#',
      endCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      name: 'string.quoted.double koka.string.raw',
      patterns: [
        {match: '[^"]+', name: 'string.quoted.double koka.string.raw'},
        {match: '"(?!#)', name: 'string.quoted.double koka.string.raw'},
        {match: '.', name: 'invalid.string.quoted.double koka.string.raw'}
      ]
    },
    rawstring2: {
      begin: 'r##"',
      beginCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      end: '"##',
      endCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      name: 'string.quoted.double koka.string.raw',
      patterns: [
        {match: '[^"]+', name: 'string.quoted.double koka.string.raw'},
        {match: '"(?!##)', name: 'string.quoted.double koka.string.raw'},
        {match: '.', name: 'invalid.string.quoted.double koka.string.raw'}
      ]
    },
    reservedcontrol: {
      match: "(if|then|else|elif|match|return)(?![\\w\\-'])",
      name: 'keyword.control koka.keyword.control.$1'
    },
    reservedid: {
      match:
        "(return(?=(?:\\(|\\s+\\(?)\\w[\\w\\-]*\\s*(?:\\)\\s*(?:[^;])))|infix|infixr|infixl|type|co|lazy(?:\\s+tail)?(?:\\s+(?:fip|fbip)(?:\\(\\d+\\))?)?|rec|struct|alias|forall|exists|some|extern|fun|fn|val|var|con|with(?:\\s+override)?|module|import|as|in|ctx|hole|pub|abstract|effect|named|(?:raw\\s+|final\\s+)ctl|break|continue|unsafe|mask(?:\\s+behind)?|handle|handler)(?![\\w\\-'])",
      name: 'keyword.other koka.keyword'
    },
    reservedop: {
      match:
        '(=|=>|\\->|<\\-|\\||\\.|:|:=)(?![$%&\\*\\+!/\\\\\\^~=\\.:\\-\\?\\|<>])',
      name: 'keyword koka.keyword.op'
    },
    special: {
      match: '[{}\\(\\)\\[\\];,]',
      name: 'punctuation.separator koka.special'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      end: '"|$',
      endCaptures: {0: {name: 'punctuation.definition.string koka.string'}},
      name: 'string.quoted.double koka.string',
      patterns: [
        {
          match: '([^"\\\\]|\\\\.)+$',
          name: 'invalid.string.quoted.double koka.string.invalid'
        },
        {match: '[^"\\\\]+', name: 'string.quoted.double.regular koka.string'},
        {
          match:
            '\\\\([abfnrtvz0\\\\"\'\\?]|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|U[\\da-fA-F]{6})',
          name: 'string.quoted.double constant.character.escape koka.string.escape'
        },
        {match: '.', name: 'invalid.string.quoted.double koka.string'}
      ]
    },
    top_type: {
      begin:
        '(:(?![$%&\\*\\+@!\\\\\\^~=\\.:\\-\\|<>]))|(where|iff|when)(?![\\w\\-])',
      beginCaptures: {
        1: {name: 'constant.numeric.type support.type koka.type'},
        2: {name: 'keyword koka.keyword.$2'}
      },
      end: '(?=[,\\)\\{\\}\\[\\]=;"`A-Z]|  |(infix|infixr|infixl|inline|noinline|fip|fbip|tail|value|reference|open|extend|rec|co|lazy|type|linear|effect|ambient|alias|extern|fn|fun|function|val|raw|final|ctl|var|con|if|then|else|elif|match|inject|mask|named|handle|handler|return|module|import|as|pub|abstract)(?![\\w\\-?\']))',
      endCaptures: {0: {name: 'invalid.keyword koka.invalid'}},
      patterns: [{include: '#type_content_top'}]
    },
    top_type_alias: {
      begin: '(alias)\\s+([a-z][\\w\\-]+)',
      beginCaptures: {
        1: {name: 'keyword.declaration koka.keyword'},
        2: {name: 'constant.numeric.type support.type koka.type.typecon'}
      },
      end: '(?=[,\\)\\{\\}\\[\\];"`A-Z]|(infix|infixr|infixl|inline|noinline|fip|fbip|tail|type|co|lazy|rec|linear|alias|effect|ambient|extern|fn|fun|function|val|var|con|if|then|else|elif|match|inject|mask|named|handle|handler|return|module|import|as|pub|abstract)(?![\\w\\-?\']))',
      endCaptures: {0: {name: 'invalid.keyword koka.keyword.invalid'}},
      patterns: [
        {match: '=', name: 'keyword.other koka.keyword.op'},
        {include: '#type_content_top'}
      ]
    },
    top_type_quantifier: {
      begin: '(exists|forall|some)(\\s*)(<)',
      beginCaptures: {
        1: {name: 'keyword koka.keyword'},
        3: {name: 'constant.numeric.type support.type koka.type.special'}
      },
      end: '(>)|(?=[\\)\\{\\}\\[\\]=;"`]|(infix|infixr|infixl|inline|noinline|fip|fbip|tail|type|co|lazy|rec|effect|ambient|alias|extern|fn|fun|function|val|var|if|then|else|elif|match|inject|mask|named|handle|handler|return|module|import|as|pub|abstract)(?![\\w\\-?\']))',
      endCaptures: {
        1: {name: 'constant.numeric.type support.type koka.type.special'},
        2: {name: 'invalid.keyword koka.keyword.invalid'}
      },
      patterns: [{include: '#type_content'}]
    },
    top_type_struct: {
      captures: {
        1: {name: 'keyword.declaration koka.keyword.struct'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'constant.numeric.type support.type koka.type.typecon'}
      },
      match:
        "((?:(?:value|ref)\\s*)?struct)\\s+((?:[@a-z][\\w\\-@]*/#?)*)(@?[a-z][\\w\\-@]*[\\']*)"
    },
    top_type_struct_args: {
      begin:
        '((?:(?:value|ref)\\s*)?struct)\\s+([a-z][\\w\\-]*|\\(,*\\))\\s*(<)',
      beginCaptures: {
        1: {name: 'keyword.declaration koka.keyword.struct'},
        2: {name: 'constant.numeric.type support.type koka.type.typecon'},
        3: {name: 'constant.numeric.type support.type koka.type.special'}
      },
      end: '(>)|(?=[\\)\\{\\}\\[\\]=;"`]|(infix|infixr|infixl|inline|noinline|fip|fbip|tail|type|co|lazy|rec|effect|ambient|alias|extern|fn|fun|function|val|var|if|then|else|elif|match|inject|mask|named|handle|handler|return|module|import|as|pub|abstract)(?![\\w\\-?\']))',
      endCaptures: {
        1: {name: 'constant.numeric.type support.type koka.type.special'},
        2: {name: 'invalid.keyword koka.keyword.invalid'}
      },
      patterns: [{include: '#type_content'}]
    },
    top_type_type: {
      begin:
        "((?:(?:value|reference|open|extend|rec|co|lazy(?:\\s+tail)?(?:\\s+(?:fip|fbip)(?:\\(\\d+\\))?)?)?\\s*type)|(?:named\\s+)?(?:scoped\\s+)?(?:linear\\s+)?(?:rec\\s+)?(?:effect|ambient))\\s+(?!fn|fun|val|raw|final|ctl|ret)((?:[@a-z][\\w\\-@]*/#?)*)(@?[a-z][\\w\\-@]*[\\']*)",
      beginCaptures: {
        1: {name: 'keyword.declaration.type koka.keyword'},
        2: {name: 'entity.name.variable koka.moduleid'},
        3: {name: 'constant.numeric.type support.type koka.type.typecon'}
      },
      end: '(?=[\\)\\{\\}\\[\\]=;"`A-Z]|  [\\r\\n]|(infix|infixr|infixl|inline|noinline|fip|fbip|tail|type|co|lazy|rec|effect|ambient|alias|extern|fn|fun|function|val|var|raw|final|ctl|con|if|then|else|elif|match|inject|mask|named|handle|handler|return|module|import|as|pub|abstract|value|reference|open|extend)(?![\\w\\-?\']))',
      endCaptures: {0: {name: 'punctuation.separator koka.special'}},
      patterns: [{include: '#type_content_top'}]
    },
    type_app: {
      begin: '<(?![%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|\\s\\d])',
      beginCaptures: {
        0: {name: 'constant.numeric.type support.type koka.type.special'}
      },
      end: '>|\\n|  ',
      endCaptures: {
        0: {name: 'constant.numeric.type support.type koka.type.special'}
      },
      name: 'constant.numeric.type support.type koka.type.special',
      patterns: [{include: '#type_content'}]
    },
    type_content: {
      patterns: [
        {include: '#type_implicit_parameter'},
        {include: '#type_parameter'},
        {include: '#type_content_top'}
      ]
    },
    type_content_top: {
      patterns: [
        {
          match: '(forall|exists|some|with|in|iff|when|is|if)(?![\\w\\-])',
          name: 'keyword.other koka.keyword.$1'
        },
        {
          match: '(\\->|::?|\\.)(?![$%&\\*\\+@!\\\\\\^~=\\.:\\-\\?\\|<>])',
          name: 'constant.numeric.type support.type koka.type.special'
        },
        {include: '#type_qidentifier'},
        {include: '#type_variable'},
        {include: '#type_identifier'},
        {include: '#type_kind'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          name: 'constant.numeric.type support.type koka.type.parens',
          patterns: [{include: '#type_content'}]
        },
        {
          begin: '<(?![%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|])',
          beginCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          end: '>|\\n|  ',
          endCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          name: 'constant.numeric.type support.type koka.type.special',
          patterns: [{include: '#type_content'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'constant.numeric.type support.type koka.type.special'}
          },
          name: 'constant.numeric.type support.type koka.type.special',
          patterns: [{include: '#type_content'}]
        },
        {include: '#line_comment'},
        {include: '#block_comment'},
        {
          match: '[;,]|:',
          name: 'constant.numeric.type support.type koka.type.special'
        }
      ]
    },
    type_identifier: {
      match: "[\\$]?[@a-z][\\w\\-@]*[\\']*",
      name: 'constant.numeric.type support.type koka.type.typecon'
    },
    type_implicit_parameter: {
      captures: {
        1: {
          name: 'entity.name.label source.typeparam koka.type.typeparam.implicit'
        },
        2: {
          name: 'entity.name.label source.typeparam koka.type.typeparam.implicit'
        }
      },
      match:
        "(\\?(?:[@a-z][\\w\\-@]*/#?)*)([@a-z][\\w\\-@]*[\\']*|\\([$%&\\*\\+@!/\\\\\\^~=\\.:\\-\\?\\|<>]+\\))\\s*(?=:(?!:))"
    },
    type_kind: {
      match: '[A-Z](?![\\w\\-])',
      name: 'constant.numeric.type support.type koka.type.kind'
    },
    type_parameter: {
      captures: {
        1: {name: 'keyword.other koka.keyword.borrow'},
        2: {name: 'entity.name.label source.typeparam koka.type.typeparam'}
      },
      match:
        "([\\^]\\s+)?((?:[\\?][\\?]?\\s*)?[@a-z][\\w\\-@]*[\\']*)\\s*(?=:(?!:))"
    },
    type_qidentifier: {
      match: "([@a-z][\\w\\-@]*[\\']*/#?)+",
      name: 'entity.name.variable koka.moduleid'
    },
    type_variable: {
      match: "([_]?[a-z][0-9]*|_[\\w\\-]*[\\']*|self)(?!\\w)",
      name: 'markup.italic constant.numeric.type support.type koka.type.typevar'
    },
    whitespace: {match: '[ \\t]+', name: 'source koka.white'},
    wildcard: {
      match: "@?_[\\w\\-@]*[\\']*",
      name: 'source.wildcard koka.id.wildcard'
    }
  },
  scopeName: 'source.koka'
}

export default grammar
