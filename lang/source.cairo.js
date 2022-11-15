// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/xshitaka/atom-language-cairo>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.cairo'],
  names: ['cairo'],
  patterns: [{include: '#directives'}, {include: '#statements'}],
  repository: {
    'class-instance': {
      patterns: [
        {
          match: '[[:upper:]][_$[:alnum:]]+[[:lower:]]+[_$[:alnum:]]+',
          name: 'support.class.cairo'
        }
      ]
    },
    comment: {
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment'}},
          end: '$',
          name: 'comment.line.number-sign'
        }
      ]
    },
    declaration: {patterns: [{include: '#import'}]},
    directives: {
      patterns: [
        {
          captures: {1: {name: 'keyword.directive.cairo'}},
          match: '(?<!\\w)\\s*(%builtins|%lang)\\s+'
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#expression-without-identifiers'},
        {include: '#identifiers'},
        {include: '#expression-punctuations'}
      ]
    },
    'expression-operators': {
      patterns: [
        {match: '\\%\\{|\\%\\}', name: 'keyword.brackets.python-hints.cairo'},
        {
          match: '=|!|>|<|\\||&|\\?|\\^|~|\\*|\\+|\\-|\\/|\\%',
          name: 'keyword.operator'
        },
        {
          match: '(?<![\\w$])(cast)(?![\\w$])',
          name: 'keyword.operator.cast.cairo'
        }
      ]
    },
    'expression-punctuations': {patterns: [{include: '#punctuation-accessor'}]},
    'expression-without-identifiers': {
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#literal'},
        {include: '#function-expression'},
        {include: '#storages'},
        {include: '#keywords'},
        {include: '#parameters'},
        {include: '#expression-operators'},
        {include: '#function-call'},
        {include: '#support-objects'}
      ]
    },
    'function-call': {
      patterns: [
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]+)\\s*(?=\\()',
          beginCaptures: {1: {name: 'entity.name.function.cairo'}},
          end: '(?<=\\))',
          patterns: [
            {include: '#string'},
            {include: '#comment'},
            {include: '#literal'},
            {include: '#identifiers'},
            {include: '#expression-operators'}
          ]
        }
      ]
    },
    'function-expression': {
      patterns: [
        {
          begin: '\\s*(func)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*',
          beginCaptures: {
            1: {name: 'storage.type.function.cairo'},
            2: {name: 'entity.name.function.cairo'}
          },
          end: '(?<={)',
          name: 'meta.function.expression.cairo',
          patterns: [
            {include: '#comment'},
            {include: '#function-implicit'},
            {include: '#function-params'},
            {match: '->', name: 'keyword.function.return.cairo'}
          ]
        }
      ]
    },
    'function-implicit': {
      patterns: [
        {
          begin: '(?<=[a-zA-Z0-9])\\s*{',
          end: '}',
          patterns: [{include: '#parameters'}]
        }
      ]
    },
    'function-params': {
      patterns: [
        {begin: '\\(', end: '\\)', patterns: [{include: '#parameters'}]}
      ]
    },
    identifiers: {
      patterns: [
        {
          match:
            '(?<!\\w)([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
          name: 'variable.other.constant.cairo'
        }
      ]
    },
    import: {
      patterns: [
        {
          begin: '(?<!\\w)\\s*(from)\\s',
          beginCaptures: {1: {name: 'keyword.declaration.cairo'}},
          end: '\\s*(import)\\s',
          endCaptures: {1: {name: 'keyword.declaration.cairo'}},
          patterns: [
            {include: '#string'},
            {include: '#comment'},
            {include: '#punctuation-accessor'},
            {
              match: '[_$[:alpha:]][_$[:alnum:]]+',
              name: 'meta.import.from.location.cairo'
            }
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(else|if|in|return|assert|with_attr)\\b',
          name: 'keyword.controls.cairo'
        },
        {
          match: '\\b(from|import|func|namespace)\\b',
          name: 'keyword.declaration.cairo'
        },
        {
          match:
            '^\\s*@(constructor|storage_var|view|external|raw_output|raw_input|l1_handler|contract_interface|known_ap_change|event)\\s+',
          name: 'keyword.others.cairo'
        }
      ]
    },
    literal: {patterns: [{include: '#numeric-literal'}]},
    'numeric-literal': {
      patterns: [
        {
          match: '\\b(?:([0-9]+)|(0x[0-9a-fA-F]+))\\b',
          name: 'constant.numeric.decimal.cairo'
        }
      ]
    },
    parameters: {
      patterns: [
        {include: '#comment'},
        {include: '#punctuation-accessor'},
        {
          captures: {
            1: {name: 'punctuation.separator'},
            2: {name: 'support.type.cairo'}
          },
          match: '(:)\\s*([_$[:alpha:]][_$[:alnum:]]+)'
        }
      ]
    },
    'punctuation-accessor': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.dot-accessor.cairo'},
            2: {name: 'keyword.operator'}
          },
          match: '(\\.)|(\\*)'
        }
      ]
    },
    'punctuation-semicolon': {
      patterns: [{match: ';', name: 'punctuation.terminator.statement.cairo'}]
    },
    statements: {
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#declaration'},
        {include: '#expression'},
        {include: '#punctuation-semicolon'}
      ]
    },
    storages: {
      patterns: [
        {
          match: '\\b(let|const|local|struct|alloc_locals|tempvar)\\b',
          name: 'storage.type.cairo'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cairo'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cairo'}},
          name: 'string.quoted.double.cairo'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cairo'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cairo'}},
          name: 'string.quoted.single.cairo'
        }
      ]
    },
    'support-objects': {patterns: [{include: '#class-instance'}]}
  },
  scopeName: 'source.cairo'
}

export default grammar
