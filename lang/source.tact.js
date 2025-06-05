// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tact-lang/tact-sublime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['tact'],
  patterns: [
    {include: '#comment'},
    {include: '#annotation'},
    {include: '#literal'},
    {include: '#invalid'},
    {include: '#constant'},
    {include: '#type'},
    {include: '#expression'},
    {include: '#punctuation'},
    {include: '#keyword'},
    {include: '#function'},
    {include: '#variable'}
  ],
  repository: {
    annotation: {
      patterns: [
        {
          begin: '^\\s*(@name)\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.other.attribute-name.tact'},
            2: {name: 'punctuation.brackets.round.tact'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.tact'}},
          patterns: [{match: '(.*?)', name: 'entity.name.function.func.tact'}]
        },
        {
          begin: '(?<!\\.)(@interface)\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.other.attribute-name.tact'},
            2: {name: 'punctuation.brackets.round.tact'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.tact'}},
          patterns: [{include: '#string'}]
        },
        {
          begin: '(?<!\\.)(asm)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.other.asm.tact'},
            2: {name: 'punctuation.brackets.round.tact'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.tact'}},
          patterns: [
            {include: '#variable'},
            {match: '->', name: 'keyword.operator.mapsto.tact'},
            {match: '\\b(0[0-9]*)\\b', name: 'constant.numeric.decimal.tact'},
            {
              match: '\\b([1-9](?:_?[0-9])*)\\b',
              name: 'constant.numeric.decimal.tact'
            }
          ]
        },
        {
          match: '(?<!\\.)\\b(@name|@interface)\\b',
          name: 'entity.other.attribute-name.tact'
        },
        {match: '(?<!\\.)\\b(asm)\\b', name: 'keyword.other.asm.tact'}
      ]
    },
    'as-tlb': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.as.tact storage.modifier.tact'},
            2: {name: 'entity.name.type.tact'}
          },
          match:
            '(?<!\\.)\\b(as)\\s+(coins|varu?int(?:32|16)|remaining|bytes(?:32|64)|int257|u?int(?:25[0-6]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?))\\b'
        }
      ]
    },
    comment: {
      patterns: [
        {
          begin: '//',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.line.double-slash.tact'}
          },
          end: '$',
          name: 'comment.line.double-slash.tact',
          patterns: [{include: '#todo'}]
        },
        {
          begin: '\\s*/\\*',
          beginCaptures: {
            0: {
              name: 'comment.block.begin.tact punctuation.definition.comment.begin.tact'
            }
          },
          end: '\\*/',
          endCaptures: {
            0: {
              name: 'comment.block.end.tact punctuation.definition.comment.end.tact'
            }
          },
          name: 'comment.block.tact',
          patterns: [{include: '#todo'}]
        }
      ]
    },
    constant: {
      patterns: [
        {
          match: '(?<=self\\.)(storageReserve)\\b',
          name: 'constant.other.builtin.tact'
        },
        {
          match:
            '(?<!\\.)\\b(SendDefaultMode|SendRemainingValue|SendRemainingBalance|SendPayGasSeparately|SendPayFwdFeesSeparately|SendIgnoreErrors|SendBounceIfActionFail|SendDestroyIfZero|SendOnlyEstimateFee|ReserveExact|ReserveAllExcept|ReserveAtMost|ReserveAddOriginalBalance|ReserveInvertSign|ReserveBounceIfActionFail|TactExitCodeNullReferenceException|TactExitCodeInvalidSerializationPrefix|TactExitCodeInvalidIncomingMessage|TactExitCodeConstraintsError|TactExitCodeAccessDenied|TactExitCodeContractStopped|TactExitCodeInvalidArgument|TactExitCodeContractCodeNotFound|TactExitCodeInvalidStandardAddress|TactExitCodeNotBasechainAddress)\\b',
          name: 'constant.other.builtin.tact'
        },
        {match: '\\b([A-Z]{2}[A-Z0-9_]*)\\b', name: 'constant.other.caps.tact'},
        {
          captures: {
            1: {name: 'keyword.other.tact'},
            2: {name: 'constant.other.declaration.tact'}
          },
          match: '(?<!\\.)\\b(const)\\s+([a-zA-Z_][A-Za-z0-9_]*)\\b'
        },
        {match: '(?<!\\.)\\b(null)\\b', name: 'constant.language.null.tact'}
      ]
    },
    'escape-sequence': {
      captures: {
        1: {name: 'constant.character.escape.backslash.tact'},
        2: {name: 'constant.character.escape.double-quote.tact'},
        3: {name: 'constant.character.escape.special.tact'},
        4: {name: 'constant.character.escape.hex.tact'},
        5: {name: 'constant.character.escape.unicode.tact'},
        6: {name: 'constant.character.escape.unicodepoint.tact'}
      },
      match:
        '(?:\\\\)(?:(\\\\)|(")|([nrtvbf])|(x[a-fA-F0-9]{2})|(u[a-fA-F0-9]{4})|(u\\{[a-fA-F0-9]{1,6}\\}))',
      name: 'constant.character.escape.tact'
    },
    expression: {
      patterns: [
        {match: '(\\|\\||&&|!!?)(?!=)', name: 'keyword.operator.logical.tact'},
        {
          match: '(\\^|&|\\||~|<<|>>)(?!=)',
          name: 'keyword.operator.bitwise.tact'
        },
        {
          match: '(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|\\|\\|=|&&=|<<=|>>=)',
          name: 'keyword.operator.assignment.tact'
        },
        {
          match: '(?<![<>])=(?!=)',
          name: 'keyword.operator.assignment.equal.tact'
        },
        {match: '([!=]=|<=?|>=?)', name: 'keyword.operator.comparison.tact'},
        {
          match: '([+%*\\-])|(/(?!/))',
          name: 'keyword.operator.arithmetic.tact'
        },
        {match: '\\b(initOf)\\b', name: 'keyword.operator.new.tact'},
        {match: '\\b(codeOf)\\b', name: 'keyword.operator.new.tact'},
        {
          begin: '(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)',
          beginCaptures: {1: {name: 'keyword.operator.ternary.tact'}},
          end: '\\s*(:)',
          endCaptures: {1: {name: 'keyword.operator.ternary.tact'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    function: {
      captures: {
        1: {name: 'entity.name.function.tact'},
        2: {name: 'punctuation.brackets.round.tact'}
      },
      match: '\\b((?:[a-zA-Z_][a-zA-Z0-9_]*))\\s*(\\()'
    },
    invalid: {
      patterns: [
        {
          match: '\\b__(?:gen|tact)[a-zA-Z0-9_]*\\b',
          name: 'invalid.illegal.identifier.tact'
        }
      ]
    },
    keyword: {
      patterns: [
        {match: '(?<!\\.)\\b(import)\\b', name: 'keyword.control.import.tact'},
        {
          match: '(?<=\\.\\.)\\b(else|catch|until|in(?!\\s*\\())\\b',
          name: 'keyword.control.tact'
        },
        {
          match:
            '(?<!\\.)\\b(if|else|try|catch|repeat|do|until|while|foreach|in(?!\\s*\\()|return)\\b',
          name: 'keyword.control.tact'
        },
        {match: '(?<!\\.)\\b(let|const)\\b', name: 'keyword.other.tact'},
        {
          match: '(?<!\\.)\\b(as)\\b',
          name: 'keyword.other.as.tact storage.modifier.tact'
        },
        {
          match: '(?<!\\.)\\b(struct)\\b(?!\\s*:)',
          name: 'keyword.other.struct.tact'
        },
        {
          match: '(?<!\\.)\\b(message)\\b(?!\\s*(?::|\\(\\s*M|\\(\\s*\\)))',
          name: 'keyword.other.message.tact'
        },
        {
          match: '(?<!\\.)\\b(trait)\\b(?!\\s*:)',
          name: 'keyword.other.trait.tact'
        },
        {
          match: '(?<!\\.)\\b(contract)\\b(?!\\s*:)',
          name: 'keyword.other.contract.tact'
        },
        {
          match: '(?<!\\.)\\b(abstract|virtual|override)\\b',
          name: 'keyword.other.attribute.tact storage.modifier.tact'
        },
        {
          match: '(?<!\\.)\\b(extends|get|inline|mutates)\\b',
          name: 'keyword.other.attribute.tact'
        },
        {
          match: '(?<!\\.)\\b(fun|native)\\b',
          name: 'keyword.other.function.tact'
        },
        {
          match: '(?<!\\.)\\b(init|receive|bounced|external)(?=\\s*\\()',
          name: 'keyword.other.function.tact'
        },
        {
          match: '(?<!\\.)\\b(extend|public)\\b',
          name: 'keyword.other.reserved.tact'
        },
        {match: '(?<!\\.)\\b(primitive|with)\\b', name: 'keyword.other.tact'}
      ]
    },
    literal: {
      patterns: [
        {
          match: '\\b(0[xX][a-fA-F0-9](?:_?[a-fA-F0-9])*)\\b',
          name: 'constant.numeric.hex.tact'
        },
        {
          match: '\\b(0[oO][0-7](?:_?[0-7])*)\\b',
          name: 'constant.numeric.oct.tact'
        },
        {
          match: '\\b(0[bB][01](?:_?[01])*)\\b',
          name: 'constant.numeric.bin.tact'
        },
        {match: '\\b(0[0-9]*)\\b', name: 'constant.numeric.decimal.tact'},
        {
          match: '\\b([1-9](?:_?[0-9])*)\\b',
          name: 'constant.numeric.decimal.tact'
        },
        {
          match: '(?<!\\.)\\b(true|false)\\b',
          name: 'constant.language.bool.tact'
        },
        {include: '#string'},
        {match: '(?<!\\.)\\b(self)\\b', name: 'variable.language.this.tact'}
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.comma.tact'},
        {match: '[{}]', name: 'punctuation.brackets.curly.tact'},
        {match: '[()]', name: 'punctuation.brackets.round.tact'},
        {match: ';', name: 'punctuation.semi.tact'},
        {match: ':', name: 'punctuation.colon.tact'},
        {match: '\\.', name: 'punctuation.dot.tact'}
      ]
    },
    'simple-type': {
      captures: {
        1: {name: 'entity.name.type.tact'},
        2: {name: 'keyword.operator.optional.tact'}
      },
      match: '(?<!\\.)\\b([A-Z][a-zA-Z0-9_]*)(\\??)'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tact'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.tact'}},
      name: 'string.quoted.double.tact',
      patterns: [{include: '#escape-sequence'}]
    },
    todo: {
      match: '\\b(FIXME|TODO|CHANGED|XXX|IDEA|HACK|NOTE|REVIEW|NB|BUG)\\b',
      name: 'keyword.comment.todo.tact'
    },
    type: {
      patterns: [
        {include: '#simple-type'},
        {
          begin: '(?<!\\.)\\b(bounced)\\s*(<)',
          beginCaptures: {
            1: {name: 'entity.name.type.tact'},
            2: {name: 'punctuation.brackets.angle.tact'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.brackets.angle.tact'}},
          patterns: [{include: '#simple-type'}]
        },
        {
          begin: '(?<!\\.)\\b(map|set)\\s*(<)',
          beginCaptures: {
            1: {name: 'entity.name.type.tact'},
            2: {name: 'punctuation.brackets.angle.tact'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.brackets.angle.tact'}},
          patterns: [
            {include: '#simple-type'},
            {match: ',', name: 'punctuation.comma.tact'},
            {include: '#as-tlb'}
          ]
        },
        {include: '#as-tlb'}
      ]
    },
    variable: {
      patterns: [
        {match: '(?<!\\.)\\b(_)\\b', name: 'comment.unused-identifier.tact'},
        {match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b', name: 'variable.other.tact'}
      ]
    }
  },
  scopeName: 'source.tact'
}

export default grammar
