// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/dfinity/vscode-motoko>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.mo'],
  names: ['motoko'],
  patterns: [
    {include: '#shebang-line'},
    {include: '#comment'},
    {include: '#attribute'},
    {include: '#literal'},
    {include: '#operator'},
    {include: '#declaration'},
    {include: '#storage-type'},
    {include: '#keyword'},
    {include: '#type'},
    {include: '#boolean'}
  ],
  repository: {
    'access-level-modifier': {
      match: '\\b(open|public|internal|fileprivate|private)\\b(?:\\(set\\))?',
      name: 'keyword.other.access-level-modifier.swift'
    },
    'arithmetic-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\/)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.arithmetic.swift'
    },
    'array-type': {
      begin: '\\b(Array)(<)',
      beginCaptures: {
        1: {name: 'support.type.array.swift'},
        2: {name: 'punctuation.array.begin.swift'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.array.end.swift'}},
      name: 'meta.array.swift',
      patterns: [{include: '$self'}]
    },
    'assignment-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\/|%|<<|>>|&|\\^|\\||&&|\\|\\|)?=(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.assignment.swift'
    },
    attribute: {
      name: 'meta.attribute.swift',
      patterns: [
        {
          begin:
            '((@)(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B))(\\()',
          beginCaptures: {
            1: {name: 'storage.modifier.attribute.swift'},
            2: {name: 'punctuation.definition.attribute.swift'},
            3: {name: 'punctuation.definition.attribute-arguments.begin.swift'}
          },
          contentName: 'meta.attribute.arguments.swift',
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.attribute-arguments.end.swift'}
          },
          patterns: [{include: '$self'}]
        },
        {
          captures: {
            1: {name: 'storage.modifier.attribute.swift'},
            2: {name: 'punctuation.definition.attribute.swift'}
          },
          match:
            '((@)(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B))'
        }
      ]
    },
    'bitwise-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(&|\\||\\^|<<|>>)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.bitwise.swift'
    },
    'block-comment': {
      begin: '/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.swift'}
      },
      end: '\\*/',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.block.end.swift'}
      },
      name: 'comment.block.swift'
    },
    boolean: {
      match: '\\b(true|false)\\b',
      name: 'keyword.constant.boolean.swift'
    },
    'branch-statement-keyword': {
      name: 'keyword.control.branch.swift',
      patterns: [
        {include: '#if-statement-keyword'},
        {include: '#switch-statement-keyword'}
      ]
    },
    'catch-statement-keyword': {
      match: '\\b(catch|do)\\b',
      name: 'kewyord.control.catch.swift'
    },
    'code-block': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.code-block.begin.swift'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.code-block.end.swift'}},
      patterns: [{include: '$self'}]
    },
    'collection-type': {
      patterns: [
        {include: '#array-type'},
        {include: '#dictionary-type'},
        {match: '\\b(Array|Dictionary)\\b', name: 'support.type.swift'}
      ]
    },
    comment: {
      patterns: [
        {include: '#documentation-comment'},
        {include: '#block-comment'},
        {include: '#in-line-comment'}
      ]
    },
    'comparative-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])((=|!)==?|(<|>)=?|~=)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.comparative.swift'
    },
    'control-transfer-statement-keyword': {
      match: '\\b(continue|break|fallthrough|return)\\b',
      name: 'keyword.control.transfer.swift'
    },
    'custom-operator': {
      patterns: [
        {
          match: '(?<=[\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?![\\s)\\]},;:])',
          name: 'keyword.operator.custom.prefix.unary.swift'
        },
        {
          match:
            '(?<![\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?![\\s)\\]},;:\\.])',
          name: 'keyword.operator.custom.postfix.unary.swift'
        },
        {
          match: '(?<=[\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?=[\\s)\\]},;:])',
          name: 'keyword.operator.custom.binary.swift'
        }
      ]
    },
    declaration: {
      name: 'meta.declaration.swift',
      patterns: [
        {include: '#import-declaration'},
        {include: '#function-declaration'}
      ]
    },
    'declaration-modifier': {
      match:
        '\\b(class|object|type|shared|convenience|dynamic|final|lazy|(non)?mutating|optional|override|required|static|unowned((un)?safe)?|weak)\\b',
      name: 'keyword.other.declaration-modifier.swift'
    },
    'dictionary-type': {
      begin: '\\b(Dictionary)(<)',
      beginCaptures: {
        1: {name: 'support.type.dictionary.swift'},
        2: {name: 'punctuation.dictionary.begin.swift'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.dictionary.end.swift'}},
      name: 'meta.dictionary.swift',
      patterns: [{include: '$self'}]
    },
    'documentation-comment': {
      begin: '/\\*\\*',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.block.documentation.begin.swift'
        }
      },
      end: '\\*/',
      endCaptures: {
        0: {
          name: 'punctuation.definition.comment.block.documentation.end.swift'
        }
      },
      name: 'comment.block.documentation.swift'
    },
    'floating-point-literal': {
      name: 'constant.numeric.floating-point.swift',
      patterns: [
        {
          match:
            '\\b([0-9][0-9_]*)(\\.([0-9][0-9_]*))?([eE][+\\-]?([0-9][0-9_]*))?\\b'
        },
        {
          match:
            '\\b(0x[[:xdigit:]][[[:xdigit:]]_]*)(\\.(0x[[:xdigit:]][[[:xdigit:]]_]*))?([pP][+\\-]?(0x[[:xdigit:]][[[:xdigit:]]_]*))\\b'
        }
      ]
    },
    'function-body': {
      name: 'meta.function-body.swift',
      patterns: [{include: '#code-block'}]
    },
    'function-declaration': {
      begin:
        '\\b(func)\\s+(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+)\\s*(?=\\(|<)',
      beginCaptures: {
        1: {name: 'storage.type.function.swift'},
        2: {name: 'entity.type.function.swift'}
      },
      end: '(?<=\\})',
      name: 'meta.function-declaration.swift',
      patterns: [
        {include: '#generic-parameter-clause'},
        {include: '#parameter-clause'},
        {include: '#function-result'},
        {include: '#function-body'}
      ]
    },
    'function-result': {
      begin: '(?<![/=\\-+!*%<>&|\\^~.])(\\->)(?![/=\\-+!*%<>&|\\^~.])\\s*',
      beginCaptures: {1: {name: 'keyword.operator.function-result.swift'}},
      end: '\\s*(?=\\{)',
      name: 'meta.function-result.swift',
      patterns: [{include: '#type'}]
    },
    'generic-parameter-clause': {
      begin: '(<)',
      beginCaptures: {
        1: {name: 'punctuation.definition.generic-parameter-clause.begin.swift'}
      },
      end: '(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.generic-parameter-clause.end.swift'}
      },
      name: 'meta.generic-parameter-clause.swift',
      patterns: [{include: '$self'}]
    },
    identifier: {
      match:
        '(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B)',
      name: 'meta.identifier.swift'
    },
    'if-statement-keyword': {
      match: '\\b(if|else)\\b',
      name: 'keyword.control.if.swift'
    },
    'import-declaration': {
      captures: {
        1: {name: 'keyword.other.import.swift'},
        2: {name: 'storage.modifier.swift'},
        3: {name: 'support.type.module.import.swift'}
      },
      match:
        '\\b(import)\\s+(?:(class|var|func)\\s+)?((?:\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+)(?:\\.(?:\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+))*)',
      name: 'meta.import.swift'
    },
    'in-line-comment': {
      captures: {
        1: {name: 'punctuation.definition.comment.line.double-slash.swift'}
      },
      match: '(//).*',
      name: 'comment.line.double-slash.swift'
    },
    'increment-decrement-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])(\\+\\+|\\-\\-)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.increment-or-decrement.swift'
    },
    'integer-literal': {
      name: 'constant.numeric.integer.swift',
      patterns: [
        {
          match: '(\\B\\-|\\b)(0b[01][01_]*)\\b',
          name: 'constant.numeric.integer.binary.swift'
        },
        {
          match: '(\\B\\-|\\b)(0o[0-7][0-7_]*)\\b',
          name: 'constant.numeric.integer.octal.swift'
        },
        {
          match: '(\\B\\-|\\b)([0-9][0-9_]*)\\b',
          name: 'constant.numeric.integer.decimal.swift'
        },
        {
          match: '(\\B\\-|\\b)(0x[[:xdigit:]][[[:xdigit:]]_]*)\\b',
          name: 'constant.numeric.integer.hexadecimal.swift'
        }
      ]
    },
    'integer-type': {
      match: '\\bU?Int(8|16|32|64)?\\b',
      name: 'support.type.swift'
    },
    keyword: {
      patterns: [
        {include: '#branch-statement-keyword'},
        {include: '#control-transfer-statement-keyword'},
        {include: '#loop-statement-keyword'},
        {include: '#catch-statement-keyword'},
        {include: '#operator-declaration-modifier'},
        {include: '#declaration-modifier'},
        {include: '#access-level-modifier'},
        {
          match: '\\b(async|actor|and|class|func|import|let|module|not|or)\\b',
          name: 'keyword.declaration.swift'
        },
        {
          match:
            '\\b(assert|async|await|break|case|continue|default|debug|debug_show|else|if|in|for|return|switch|while|loop|try|throw|query)\\b',
          name: 'keyword.statement.swift'
        },
        {
          match:
            '\\b(associativity|didSet|get|infix|inout|left|mutating|none|nonmutating|operator|override|postfix|precedence|prefix|right|set|unowned((un)?safe)?|weak|willSet)\\b',
          name: 'keyword.other.swift'
        }
      ]
    },
    literal: {
      patterns: [
        {include: '#integer-literal'},
        {include: '#floating-point-literal'},
        {include: '#nil-literal'},
        {include: '#string-literal'},
        {include: '#special-literal'}
      ]
    },
    'logical-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])(!|&&|\\|\\|)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.logical.swift'
    },
    'loop-statement-keyword': {
      match: '\\b(while|repeat|for|in|loop)\\b',
      name: 'keyword.control.loop.swift'
    },
    'nil-literal': {match: '\\bnil\\b', name: 'constant.nil.swift'},
    operator: {
      patterns: [
        {include: '#comparative-operator'},
        {include: '#assignment-operator'},
        {include: '#logical-operator'},
        {include: '#remainder-operator'},
        {include: '#increment-decrement-operator'},
        {include: '#overflow-operator'},
        {include: '#range-operator'},
        {include: '#bitwise-operator'},
        {include: '#arithmetic-operator'},
        {include: '#ternary-operator'},
        {include: '#type-casting-operator'},
        {include: '#custom-operator'}
      ]
    },
    'operator-declaration-modifier': {
      match: '\\b(operator|prefix|infix|postfix)\\b',
      name: 'keyword.other.operator.swift'
    },
    'optional-type': {
      beginCaptures: {
        1: {name: 'support.type.optional.swift'},
        2: {name: 'punctuation.optional.begin.swift'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.optional.end.swift'}},
      match: '\\b(Optional)(<)',
      name: 'meta.optional.swift',
      patterns: [{include: '$self'}]
    },
    'overflow-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])\\&(\\+|\\-|\\*|\\/|%)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.overflow.swift'
    },
    'parameter-clause': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.function-arguments.begin.swift'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.function-arguments.end.swift'}
      },
      name: 'meta.parameter-clause.swift',
      patterns: [{include: '$self'}]
    },
    'primitive-type': {match: '\\b[A-Z].*?\\b', name: 'support.type.swift'},
    'protocol-composition-type': {
      beginCaptures: {
        1: {name: 'support.type.protocol.swift'},
        2: {name: 'punctuation.protocol.begin.swift'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.protocol.end.swift'}},
      match: '\\b(protocol)(<)',
      name: 'meta.protocol.swift',
      patterns: [{include: '$self'}]
    },
    'range-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])\\.\\.(?:\\.)?(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.range.swift'
    },
    'remainder-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])\\%(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.remainder.swift'
    },
    'shebang-line': {
      captures: {
        1: {name: 'punctuation.definition.comment.line.shebang.swift'}
      },
      match: '^(#!).*$',
      name: 'comment.line.shebang.swift'
    },
    'special-literal': {
      match: '\\b__(FILE|LINE|COLUMN|FUNCTION)__\\b',
      name: 'keyword.other.literal.swift'
    },
    'storage-type': {
      match: '\\b(var|func|let|class|enum)\\b',
      name: 'storage.type.swift'
    },
    'string-literal': {
      begin: '\\"',
      beginCaptures: {0: {name: 'string.quoted.double.swift'}},
      end: '\\"',
      endCaptures: {0: {name: 'string.quoted.double.swift'}},
      name: 'meta.literal.string.swift',
      patterns: [
        {
          match:
            '\\\\([0tnr\\"\\\'\\\\]|x[[:xdigit:]]{2}|u[[:xdigit:]]{4}|U[[:xdigit:]]{8})',
          name: 'constant.character.escape.swift'
        },
        {
          begin: '(\\\\\\()',
          beginCaptures: {
            1: {name: 'support.punctuation.expression.begin.swift'}
          },
          contentName: 'meta.expression.swift',
          end: '(\\))',
          endCaptures: {1: {name: 'support.punctuation.expression.end.swift'}},
          patterns: [{include: 'source.swift'}]
        },
        {match: '(\\"|\\\\)', name: 'invalid.illegal.swift'},
        {match: '(.)', name: 'string.quoted.double.swift'}
      ]
    },
    'switch-statement-keyword': {
      match: '\\b(switch|case|default|where)\\b',
      name: 'keyword.control.switch.swift'
    },
    'ternary-operator': {
      match: '(?<=[\\s(\\[{,;:])(\\?|:)(?=[\\s)\\]},;:])',
      name: 'keyword.operator.ternary.swift'
    },
    type: {
      patterns: [
        {include: '#primitive-type'},
        {include: '#integer-type'},
        {include: '#collection-type'},
        {include: '#optional-type'},
        {include: '#protocol-composition-type'}
      ]
    },
    'type-casting-operator': {
      match: '\\b(is\\b|as(\\?\\B|\\b))',
      name: 'keyword.operator.type-casting.swift'
    }
  },
  scopeName: 'source.mo'
}

export default grammar
