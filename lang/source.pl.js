// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/WerWolv/PatternLanguage-Grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hexpat'],
  names: ['imhex-pattern-language', 'imhex', 'imhexpatternlanguage', 'imhexpl'],
  patterns: [{include: '#toplevel-statements'}, {include: '#operators'}],
  repository: {
    attributes: {
      begin: '(\\[\\[)',
      beginCaptures: {1: {name: 'punctuation.bracket.square.open.pl'}},
      end: '(\\]\\])',
      endCaptures: {1: {name: 'punctuation.bracket.square.close.pl'}},
      name: 'meta.attribute.block.pl',
      patterns: [
        {
          captures: {1: {name: 'entity.name.attribute.pl'}},
          match: '\\b([a-zA-Z_][a-zA-Z0-9_:]*)\\b'
        },
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.attribute.arguments.pl',
          patterns: [
            {include: '#statements'},
            {match: ',', name: 'punctuation.separator.argument.pl'}
          ]
        },
        {match: ',', name: 'punctuation.separator.attribute.pl'}
      ]
    },
    'binary-integer': {
      match: '\\b(0(b|B)[01]+)\\b',
      name: 'constant.numeric.integer.binary.pl'
    },
    'character-literal': {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.pl',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pl'}]
    },
    comment: {begin: '\\/\\*', end: '\\*\\/', name: 'comment.block.pl'},
    'decimal-integer': {
      match: '\\b(0|[1-9][0-9]*)\\b',
      name: 'constant.numeric.integer.decimal.pl'
    },
    'else-statement': {
      captures: {1: {name: 'keyword.control.else.pl'}},
      match: '\\b(else)\\b',
      name: 'keyword.control.else.pl'
    },
    'enum-definition': {
      begin: '(enum)\\s+([a-zA-Z0-9_]+)\\s*((\\:)\\s*([a-zA-Z0-9_]+))\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.enum.pl'},
        2: {name: 'entity.name.type.enum.pl'},
        5: {name: 'entity.name.type.base.pl'},
        6: {name: 'punctuation.bracket.curly.open.pl'}
      },
      contentName: 'meta.enum.pl',
      end: '(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.bracket.curly.close.pl'}},
      patterns: [{include: '#enum-member'}]
    },
    'enum-member': {
      captures: {
        1: {name: 'variable.other.enum-member.pl'},
        3: {name: 'keyword.operator.assignment.pl'},
        4: {patterns: [{include: '#literal'}]},
        6: {patterns: [{include: '#literal'}]},
        7: {name: 'punctuation.separator.comma.pl'}
      },
      match:
        '([a-zA-Z_][a-zA-Z0-9_]*)\\s*((=)\\s*([a-zA-Z0-9_]+)(\\s*\\.\\.\\.\\s*([a-zA-Z0-9_]+))?)?(,)?'
    },
    'floating-point-number': {
      match: '\\b([+-]?([0-9]+\\.[0-9]*|[0-9]*\\.[0-9]+)([eE][+-]?[0-9]+)?)\\b',
      name: 'constant.numeric.float.pl'
    },
    'for-statement': {
      begin: '\\b(for)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.for.pl'},
        2: {name: 'punctuation.bracket.round.open.pl'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.bracket.round.close.pl'},
        2: {name: 'punctuation.bracket.curly.open.pl'}
      },
      name: 'meta.for.pl',
      patterns: [
        {include: '#type-usage'},
        {include: '#literal'},
        {include: '#identifier'},
        {include: '#operators'}
      ]
    },
    'function-definition': {
      begin: '\\b(fn)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.function.pl'},
        2: {name: 'entity.name.function.pl'},
        3: {name: 'punctuation.bracket.round.open.pl'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.bracket.round.close.pl'},
        2: {name: 'punctuation.bracket.curly.open.pl'}
      },
      name: 'meta.function.definition.pl',
      patterns: [{include: '#variable-definition'}, {include: '#statements'}]
    },
    'hexadecimal-integer': {
      match: '\\b(0(x|X)[0-9a-fA-F]+)\\b',
      name: 'constant.numeric.integer.hexadecimal.pl'
    },
    identifier: {
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'variable.other.identifier.pl'
    },
    'if-statement': {
      begin: '\\b(if)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.if.pl'},
        2: {name: 'punctuation.bracket.round.open.pl'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.bracket.round.close.pl'},
        2: {name: 'punctuation.bracket.curly.open.pl'}
      },
      name: 'meta.if.pl',
      patterns: [
        {include: '#literal'},
        {include: '#identifier'},
        {include: '#operators'}
      ]
    },
    'import-statement': {
      captures: {
        1: {name: 'keyword.control.import.pl'},
        2: {name: 'variable.other.import.pl'},
        4: {name: 'keyword.control.from.pl'},
        5: {name: 'variable.other.import.pl'},
        7: {name: 'keyword.control.as.pl'},
        8: {name: 'variable.other.import.pl'}
      },
      match:
        '\\s*(import)\\s*([a-zA-Z0-9_\\.]+|\\*)\\s*((from)\\s*([a-zA-Z0-9_\\.]+))?\\s*((as)?\\s*([a-zA-Z0-9_\\.]+))'
    },
    keywords: {
      patterns: [
        {
          match: '\\b(break|continue|return|catch|try|if|else|match)\\b',
          name: 'keyword.control.pl'
        }
      ]
    },
    'line-comment': {match: '\\/\\/.*', name: 'comment.line.double-slash.pl'},
    literal: {
      patterns: [
        {include: '#decimal-integer'},
        {include: '#hexadecimal-integer'},
        {include: '#binary-integer'},
        {include: '#octal-integer'},
        {include: '#floating-point-number'},
        {include: '#string-literal'},
        {include: '#character-literal'},
        {
          match: '\\b(true|false|null)\\b',
          name: 'constant.language.boolean.pl'
        },
        {match: '\\b(this|parent|\\$)\\b', name: 'constant.language.special.pl'}
      ]
    },
    'match-statement': {
      begin: '\\b(match)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.match.pl'},
        2: {name: 'punctuation.bracket.round.open.pl'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.bracket.round.close.pl'},
        2: {name: 'punctuation.bracket.curly.open.pl'}
      },
      name: 'meta.match.pl',
      patterns: [
        {include: '#type-usage'},
        {include: '#literal'},
        {include: '#identifier'},
        {include: '#operators'}
      ]
    },
    'namespace-definition': {
      begin:
        '\\b(namespace)\\s+((auto)\\s+)?(([a-zA-Z_][a-zA-Z0-9_:]*))+\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.namespace.pl'},
        3: {name: 'storage.type.builtin.pl'},
        5: {name: 'entity.name.namespace.pl'},
        6: {name: 'punctuation.bracket.curly.open.pl'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.bracket.curly.close.pl'}},
      name: 'meta.namespace.pl',
      patterns: [{include: '#toplevel-statements'}]
    },
    'octal-integer': {
      match: '\\b(0(o|O)[0-7]+)\\b',
      name: 'constant.numeric.integer.octal.pl'
    },
    operators: {
      patterns: [
        {match: '\\+', name: 'keyword.operator.arithmetic.addition.pl'},
        {match: '-', name: 'keyword.operator.arithmetic.subtraction.pl'},
        {match: '\\*', name: 'keyword.operator.arithmetic.multiplication.pl'},
        {match: '\\/', name: 'keyword.operator.arithmetic.division.pl'},
        {match: '%', name: 'keyword.operator.arithmetic.modulus.pl'},
        {
          match: '<=|>=|<|>|==|!=|&&|\\|\\||!',
          name: 'keyword.operator.comparison.pl'
        },
        {match: '&|\\||\\^', name: 'keyword.operator.bitwise.pl'},
        {match: '@', name: 'keyword.operator.special.pl'},
        {match: '\\.\\.\\.', name: 'keyword.operator.range.pl'},
        {match: '\\(|\\)', name: 'punctuation.bracket.round.pl'},
        {match: '\\[|\\]', name: 'punctuation.bracket.square.pl'},
        {match: '\\.', name: 'punctuation.separator.period.pl'},
        {match: ',', name: 'punctuation.separator.comma.pl'},
        {match: ';', name: 'punctuation.terminator.semicolon.pl'},
        {match: '\\?', name: 'keyword.operator.ternary.question.pl'},
        {match: ':', name: 'keyword.operator.ternary.colon.pl'},
        {
          match: 'sizeof|addressof|typenameof',
          name: 'keyword.operator.function.pl'
        },
        {
          match: '\\+=|-=|\\*=|/=|%=|&=|\\^=|\\|=',
          name: 'keyword.operator.assignment.pl'
        }
      ]
    },
    'padding-definition': {match: 'padding', name: 'keyword.other.padding.pl'},
    'preprocessor-directive': {
      captures: {
        1: {name: 'keyword.control.import.preprocessor.pl.'},
        2: {name: 'string.unquoted.directive.pl'}
      },
      match: '^\\s*(#[a-zA-Z0-9_]+)\\s*(.*)$'
    },
    scope: {
      begin: '\\s*(\\{)',
      beginCaptures: {1: {name: 'punctuation.bracket.curly.open.pl'}},
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.bracket.curly.close.pl'}},
      name: 'meta.scope.pl',
      patterns: [{include: '#statements'}]
    },
    statements: {
      patterns: [
        {include: '#attributes'},
        {include: '#variable-definition'},
        {include: '#padding-definition'},
        {include: '#comment'},
        {include: '#line-comment'},
        {include: '#literal'},
        {include: '#if-statement'},
        {include: '#else-statement'},
        {include: '#for-statement'},
        {include: '#while-statement'},
        {include: '#match-statement'},
        {include: '#try-catch-statement'},
        {include: '#operators'},
        {include: '#identifier'},
        {include: '#scope'},
        {match: '\\;', name: 'punctuation.terminator.semicolon.pl'}
      ]
    },
    'string-literal': {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.pl',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pl'}]
    },
    'struct-definition': {
      begin:
        '(struct|union|bitfield)\\s+([a-zA-Z0-9_]+)(\\s*<([^\\>]*)>)?\\s*((\\:)\\s*([a-zA-Z0-9_]+))?\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.struct.pl'},
        2: {name: 'entity.name.type.struct.pl'},
        4: {
          patterns: [
            {include: '#type-usage'},
            {include: '#variable-definition'}
          ]
        },
        7: {name: 'entity.name.type.base.pl'},
        8: {name: 'punctuation.bracket.curly.open.pl'}
      },
      contentName: 'meta.struct.pl',
      end: '(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.bracket.curly.close.pl'}},
      patterns: [{include: '#statements'}]
    },
    'toplevel-statements': {
      patterns: [
        {include: '#namespace-definition'},
        {include: '#import-statement'},
        {include: '#preprocessor-directive'},
        {include: '#using-declaration'},
        {include: '#struct-definition'},
        {include: '#enum-definition'},
        {include: '#function-definition'},
        {include: '#statements'}
      ]
    },
    'try-catch-statement': {
      captures: {
        2: {name: 'keyword.control.try.pl'},
        3: {name: 'keyword.control.catch.pl'}
      },
      match: '\\b((try)|(catch))\\b',
      name: 'keyword.control.try-catch.pl'
    },
    'type-usage': {
      captures: {
        1: {name: 'keyword.other.ref.pl'},
        2: {name: 'storage.type.builtin.pl'},
        5: {name: 'storage.type.builtin.pl'}
      },
      match:
        '\\b(const|ref|be|le\\s+)?((u|s)(8|16|24|32|48|64|96|128)|(float|double|str|auto|bool|char|char16|unsigned|signed)|([A-Za-z_][A-Za-z0-9_]*))\\b'
    },
    'using-declaration': {
      captures: {
        1: {name: 'keyword.control.using.pl'},
        2: {name: 'variable.other.using.pl'},
        5: {patterns: [{include: '#type-usage'}]}
      },
      match: '\\b(using)\\s+([a-zA-Z0-9_]+)\\s*((=)\\s*([a-zA-Z0-9_]+))?'
    },
    'variable-definition': {
      captures: {
        1: {patterns: [{include: '#type-usage'}]},
        2: {patterns: [{include: '#type-usage'}]},
        3: {name: 'variable.other.definition.pl'},
        5: {name: 'keyword.other.inout.pl'}
      },
      match:
        '\\s*(ref\\s+)?((?!else)\\b[a-zA-Z_][a-zA-Z0-9_]*)\\s+([a-zA-Z_][a-zA-Z0-9_]*)(\\s+(in|out))?'
    },
    'while-statement': {
      begin: '\\b(while)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.while.pl'},
        2: {name: 'punctuation.bracket.round.open.pl'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.bracket.round.close.pl'},
        2: {name: 'punctuation.bracket.curly.open.pl'}
      },
      name: 'meta.while.pl',
      patterns: [
        {include: '#type-usage'},
        {include: '#literal'},
        {include: '#identifier'},
        {include: '#operators'}
      ]
    }
  },
  scopeName: 'source.pl'
}

export default grammar
