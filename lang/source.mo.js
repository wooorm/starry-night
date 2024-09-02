// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/dfinity/vscode-motoko>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
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
      match: '\\b(public|system|private)\\b',
      name: 'keyword.other.access-level-modifier.motoko'
    },
    'arithmetic-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\/)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.arithmetic.motoko'
    },
    'array-type': {
      begin: '\\b(Array)(<)',
      beginCaptures: {
        1: {name: 'support.type.array.motoko'},
        2: {name: 'punctuation.array.begin.motoko'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.array.end.motoko'}},
      name: 'meta.array.motoko',
      patterns: [{include: '$self'}]
    },
    'assignment-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\/|%|<<>?|<?>>|&|\\^|\\||&&|\\|\\|)?=(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.assignment.motoko'
    },
    'async-await-keyword': {
      match: '\\b(async|await)\\b',
      name: 'keyword.async-await.motoko'
    },
    attribute: {
      name: 'meta.attribute.motoko',
      patterns: [
        {
          begin:
            '((@)(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B))(\\()',
          beginCaptures: {
            1: {name: 'storage.modifier.attribute.motoko'},
            2: {name: 'punctuation.definition.attribute.motoko'},
            3: {name: 'punctuation.definition.attribute-arguments.begin.motoko'}
          },
          contentName: 'meta.attribute.arguments.motoko',
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.attribute-arguments.end.motoko'}
          },
          patterns: [{include: '$self'}]
        },
        {
          captures: {
            1: {name: 'storage.modifier.attribute.motoko'},
            2: {name: 'punctuation.definition.attribute.motoko'}
          },
          match:
            '((@)(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B))'
        }
      ]
    },
    'bitwise-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(&|\\||\\^|<<>?|<?>>)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.bitwise.motoko'
    },
    'block-comment': {
      begin: '/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.motoko'}
      },
      end: '\\*/',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.block.end.motoko'}
      },
      name: 'comment.block.motoko'
    },
    boolean: {
      match: '\\b(true|false)\\b',
      name: 'keyword.constant.boolean.motoko'
    },
    'branch-statement-keyword': {
      name: 'keyword.control.branch.motoko',
      patterns: [
        {include: '#if-statement-keyword'},
        {include: '#switch-statement-keyword'}
      ]
    },
    'char-literal': {
      begin: "'",
      beginCaptures: {0: {name: 'string.quoted.double.motoko'}},
      end: "'",
      endCaptures: {0: {name: 'string.quoted.single.motoko'}},
      name: 'meta.literal.char.motoko',
      patterns: [
        {
          match:
            '\\\\([0tnr\\"\\\'\\\\]|x[[:xdigit:]]{2}|u[[:xdigit:]]{4}|U[[:xdigit:]]{8})',
          name: 'constant.character.escape.motoko'
        },
        {match: "(\\'|\\\\)", name: 'invalid.illegal.motoko'},
        {match: '(.)', name: 'string.quoted.single.motoko'}
      ]
    },
    'code-block': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.code-block.begin.motoko'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.code-block.end.motoko'}},
      patterns: [{include: '$self'}]
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
      name: 'keyword.operator.comparative.motoko'
    },
    'control-transfer-statement-keyword': {
      match: '\\b(continue|break|return)\\b',
      name: 'keyword.control.transfer.motoko'
    },
    'custom-operator': {
      patterns: [
        {
          match: '(?<=[\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?![\\s)\\]},;:])',
          name: 'keyword.operator.custom.prefix.unary.motoko'
        },
        {
          match:
            '(?<![\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?![\\s)\\]},;:\\.])',
          name: 'keyword.operator.custom.postfix.unary.motoko'
        },
        {
          match: '(?<=[\\s(\\[{,;:])([/=\\-+!*%<>&|\\^~.]++)(?=[\\s)\\]},;:])',
          name: 'keyword.operator.custom.binary.motoko'
        }
      ]
    },
    declaration: {
      name: 'meta.declaration.motoko',
      patterns: [{include: '#import-declaration'}]
    },
    'declaration-modifier': {
      match: '\\b(class|object|type|shared)\\b',
      name: 'keyword.other.declaration-modifier.motoko'
    },
    'dictionary-type': {
      begin: '\\b(Dictionary)(<)',
      beginCaptures: {
        1: {name: 'support.type.dictionary.motoko'},
        2: {name: 'punctuation.dictionary.begin.motoko'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.dictionary.end.motoko'}},
      name: 'meta.dictionary.motoko',
      patterns: [{include: '$self'}]
    },
    'documentation-comment': {
      begin: '/\\*\\*',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.comment.block.documentation.begin.motoko'
        }
      },
      end: '\\*/',
      endCaptures: {
        0: {
          name: 'punctuation.definition.comment.block.documentation.end.motoko'
        }
      },
      name: 'comment.block.documentation.motoko'
    },
    'floating-point-literal': {
      name: 'constant.numeric.floating-point.motoko',
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
      name: 'meta.function-body.motoko',
      patterns: [{include: '#code-block'}]
    },
    'function-declaration': {
      begin:
        '\\b(func)\\s+(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+)\\s*(?=\\(|<)',
      beginCaptures: {
        1: {name: 'storage.type.function.motoko'},
        2: {name: 'entity.type.function.motoko'}
      },
      end: '(?<=\\})',
      name: 'meta.function-declaration.motoko',
      patterns: [
        {include: '#generic-parameter-clause'},
        {include: '#parameter-clause'},
        {include: '#function-result'},
        {include: '#function-body'}
      ]
    },
    'function-result': {
      begin: '(?<![/=\\-+!*%<>&|\\^~.])(\\->)(?![/=\\-+!*%<>&|\\^~.])\\s*',
      beginCaptures: {1: {name: 'keyword.operator.function-result.motoko'}},
      end: '\\s*(?=\\{)',
      name: 'meta.function-result.motoko',
      patterns: [{include: '#type'}]
    },
    'generic-parameter-clause': {
      begin: '(<)',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.generic-parameter-clause.begin.motoko'
        }
      },
      end: '(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.generic-parameter-clause.end.motoko'}
      },
      name: 'meta.generic-parameter-clause.motoko',
      patterns: [{include: '$self'}]
    },
    identifier: {
      match:
        '(\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B)',
      name: 'meta.identifier.motoko'
    },
    'if-statement-keyword': {
      match: '\\b(if|else)\\b',
      name: 'keyword.control.if.motoko'
    },
    'import-declaration': {
      captures: {
        1: {name: 'keyword.other.import.motoko'},
        2: {name: 'storage.modifier.motoko'},
        3: {name: 'support.type.module.import.motoko'}
      },
      match:
        '\\b(import)\\s+(?:(class|var|func)\\s+)?((?:\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+)(?:\\.(?:\\B\\$[0-9]+|\\b[\\w^\\d][\\w\\d]*\\b|\\B`[\\w^\\d][\\w\\d]*`\\B|[/=\\-+!*%<>&|\\^~.]+))*)',
      name: 'meta.import.motoko'
    },
    'in-line-comment': {
      captures: {
        1: {name: 'punctuation.definition.comment.line.double-slash.motoko'}
      },
      match: '(//).*',
      name: 'comment.line.double-slash.motoko'
    },
    'increment-decrement-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])(\\+\\+|\\-\\-)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.increment-or-decrement.motoko'
    },
    'integer-literal': {
      name: 'constant.numeric.integer.motoko',
      patterns: [
        {
          match: '(\\B\\-|\\b)(0b[01][01_]*)\\b',
          name: 'constant.numeric.integer.binary.motoko'
        },
        {
          match: '(\\B\\-|\\b)(0o[0-7][0-7_]*)\\b',
          name: 'constant.numeric.integer.octal.motoko'
        },
        {
          match: '(\\B\\-|\\b)([0-9][0-9_]*)\\b',
          name: 'constant.numeric.integer.decimal.motoko'
        },
        {
          match: '(\\B\\-|\\b)(0x[[:xdigit:]][[[:xdigit:]]_]*)\\b',
          name: 'constant.numeric.integer.hexadecimal.motoko'
        }
      ]
    },
    keyword: {
      patterns: [
        {include: '#branch-statement-keyword'},
        {include: '#control-transfer-statement-keyword'},
        {include: '#loop-statement-keyword'},
        {include: '#catch-statement-keyword'},
        {include: '#async-await-keyword'},
        {include: '#operator-declaration-modifier'},
        {include: '#declaration-modifier'},
        {include: '#access-level-modifier'},
        {
          match: '\\b(actor|and|class|func|import|let|module|not|or)\\b',
          name: 'keyword.declaration.motoko'
        },
        {
          match:
            '\\b(assert|break|case|continue|debug|debug_show|else|if|ignore|in|for|label|null|return|switch|while|loop|try|throw|catch|finally|do|to_candid|from_candid|with)\\b',
          name: 'keyword.statement.motoko'
        },
        {
          match: '\\b(flexible|query|stable|composite)\\b',
          name: 'keyword.other.motoko'
        }
      ]
    },
    literal: {
      patterns: [
        {include: '#integer-literal'},
        {include: '#floating-point-literal'},
        {include: '#nil-literal'},
        {include: '#string-literal'},
        {include: '#char-literal'}
      ]
    },
    'logical-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])(!|&&|\\|\\|)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.logical.motoko'
    },
    'loop-statement-keyword': {
      match: '\\b(while|repeat|for|in|loop)\\b',
      name: 'keyword.control.loop.motoko'
    },
    'null-literal': {match: '\\bnull\\b', name: 'constant.null.motoko'},
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
    'optional-type': {
      beginCaptures: {
        1: {name: 'support.type.optional.motoko'},
        2: {name: 'punctuation.optional.begin.motoko'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.optional.end.motoko'}},
      match: '\\b(Optional)(<)',
      name: 'meta.optional.motoko',
      patterns: [{include: '$self'}]
    },
    'overflow-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])\\&(\\+|\\-|\\*|\\/|%)(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.overflow.motoko'
    },
    'parameter-clause': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.function-arguments.begin.motoko'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.function-arguments.end.motoko'}
      },
      name: 'meta.parameter-clause.motoko',
      patterns: [{include: '$self'}]
    },
    'primitive-type': {
      match:
        '\\b(Blob|Bool|Char|Float|(Int|Nat)(8|16|32|64)?|Principal|Text|Error)\\b',
      name: 'support.type.motoko'
    },
    'protocol-composition-type': {
      beginCaptures: {
        1: {name: 'support.type.protocol.motoko'},
        2: {name: 'punctuation.protocol.begin.motoko'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.protocol.end.motoko'}},
      match: '\\b(protocol)(<)',
      name: 'meta.protocol.motoko',
      patterns: [{include: '$self'}]
    },
    'range-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])\\.\\.(?:\\.)?(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.range.motoko'
    },
    'remainder-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])\\%(?![/=\\-+!*%<>&|\\^~.])',
      name: 'keyword.operator.remainder.motoko'
    },
    'resolved-type': {match: '\\b[A-Z].*?\\b', name: 'support.type.motoko'},
    'shebang-line': {
      captures: {
        1: {name: 'punctuation.definition.comment.line.shebang.motoko'}
      },
      match: '^(#!).*$',
      name: 'comment.line.shebang.motoko'
    },
    'storage-type': {
      match: '\\b(var|func|let|class|module|actor)\\b',
      name: 'storage.type.motoko'
    },
    'string-literal': {
      begin: '\\"',
      beginCaptures: {0: {name: 'string.quoted.double.motoko'}},
      end: '\\"',
      endCaptures: {0: {name: 'string.quoted.double.motoko'}},
      name: 'meta.literal.string.motoko',
      patterns: [
        {
          match:
            '\\\\([0tnr\\"\\\'\\\\]|x[[:xdigit:]]{2}|u[[:xdigit:]]{4}|U[[:xdigit:]]{8})',
          name: 'constant.character.escape.motoko'
        },
        {match: '(\\"|\\\\)', name: 'invalid.illegal.motoko'},
        {match: '(.)', name: 'string.quoted.double.motoko'}
      ]
    },
    'switch-statement-keyword': {
      match: '\\b(switch|case)\\b',
      name: 'keyword.control.switch.motoko'
    },
    type: {
      patterns: [
        {include: '#primitive-type'},
        {include: '#resolved-type'},
        {include: '#optional-type'},
        {include: '#protocol-composition-type'}
      ]
    }
  },
  scopeName: 'source.mo'
}

export default grammar
