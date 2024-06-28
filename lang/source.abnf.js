// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.abnf'],
  names: ['abnf'],
  patterns: [{include: '#main'}],
  repository: {
    assignment: {
      patterns: [
        {match: '=/', name: 'keyword.operator.assignment.increment.abnf'},
        {
          match: ':+=',
          name: 'keyword.operator.assignment.colon.non-standard.abnf'
        },
        {match: '=', name: 'keyword.operator.assignment.abnf'}
      ]
    },
    comment: {
      begin: ';',
      beginCaptures: {0: {name: 'punctuation.definition.comment.abnf'}},
      end: '$',
      name: 'comment.line.semicolon.abnf'
    },
    'core-rules': {
      match:
        '(?x)\n\\b (?<!-)\n(ALPHA|BIT|CHAR|CRLF|CR|CTL|DIGIT|DQUOTE\n|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)\n\\b (?!-)',
      name: 'support.constant.reference.core-rule.abnf'
    },
    group: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.round.bracket.begin.abnf'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.round.bracket.end.abnf'}},
      name: 'meta.group.abnf',
      patterns: [{include: '#rhs'}]
    },
    main: {patterns: [{include: '#comment'}, {include: '#rule'}]},
    optional: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.square.bracket.begin.abnf'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.square.bracket.end.abnf'}
      },
      name: 'meta.optional.abnf',
      patterns: [{include: '#rhs'}]
    },
    prose: {
      begin: '<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.abnf'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.abnf'}},
      name: 'string.other.prose.abnf'
    },
    quantifier: {
      captures: {
        1: {name: 'constant.numeric.decimal.integer.int.abnf'},
        2: {name: 'keyword.operator.logical.repetition.asterisk.star.abnf'}
      },
      match: '([0-9]*)(\\*)',
      name: 'meta.quantifier.abnf'
    },
    reference: {
      match: '[A-Za-z][-A-Za-z0-9]*',
      name: 'variable.parameter.argument.identifier.reference.abnf'
    },
    rhs: {
      patterns: [
        {include: '#assignment'},
        {include: '#string'},
        {include: '#terminal'},
        {include: '#comment'},
        {include: '#quantifier'},
        {include: '#group'},
        {include: '#optional'},
        {include: '#core-rules'},
        {include: '#reference'},
        {include: '#prose'},
        {match: '/', name: 'keyword.operator.logical.or.alternation.pipe.abnf'}
      ]
    },
    rule: {
      begin: '(?:^|\\G)(\\s*)([A-Za-z][-A-Za-z0-9]*)',
      beginCaptures: {
        0: {name: 'meta.lhs.abnf'},
        1: {name: 'punctuation.whitespace.leading.abnf'},
        2: {name: 'entity.name.rule.identifier.abnf'}
      },
      contentName: 'meta.rhs.abnf',
      end: '^(?!\\1\\s+\\S)|^(?=\\S)',
      name: 'meta.ruleset.$2.abnf',
      patterns: [{include: '#rhs'}]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.abnf'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.abnf'}},
      name: 'string.quoted.double.abnf'
    },
    terminal: {
      patterns: [
        {
          begin: '(%)(d|D)',
          beginCaptures: {
            1: {name: 'punctuation.definition.terminal.percentage-sign.abnf'},
            2: {name: 'storage.type.modifier.radix.abnf'}
          },
          end: '(?=$|[;()\\[\\]{}\\s])',
          name: 'meta.terminal.numeric.decimal.abnf',
          patterns: [
            {
              match: '[0-9A-Fa-f]*[^-\\s0-9.;()\\[\\]{}][^-.;()\\[\\]{}]*',
              name: 'invalid.illegal.syntax.abnf'
            },
            {
              match: '[0-9]+',
              name: 'constant.numeric.integer.int.decimal.abnf'
            },
            {match: '-', name: 'punctuation.separator.range.dash.hyphen.abnf'},
            {match: '\\.', name: 'keyword.operator.concatenation.abnf'}
          ]
        },
        {
          begin: '(%)(x|X)',
          beginCaptures: {
            1: {name: 'punctuation.definition.terminal.percentage-sign.abnf'},
            2: {name: 'storage.type.modifier.radix.abnf'}
          },
          end: '(?=$|[;()\\[\\]{}\\s])',
          name: 'meta.terminal.numeric.hexadecimal.hex.abnf',
          patterns: [
            {
              match:
                '[0-9A-Fa-f]*[^-\\s0-9A-Fa-f.;()\\[\\]{}][^-.;()\\[\\]{}]*',
              name: 'invalid.illegal.syntax.abnf'
            },
            {
              match: '[0-9A-Fa-f]+',
              name: 'constant.numeric.integer.int.hexadecimal.hex.abnf'
            },
            {match: '-', name: 'punctuation.separator.range.dash.hyphen.abnf'},
            {match: '\\.', name: 'keyword.operator.concatenation.abnf'}
          ]
        },
        {
          begin: '(%)(b|B)',
          beginCaptures: {
            1: {name: 'punctuation.definition.terminal.percentage-sign.abnf'},
            2: {name: 'storage.type.modifier.radix.abnf'}
          },
          end: '(?=$|[;()\\[\\]{}\\s])',
          name: 'meta.terminal.numeric.binary.bin.abnf',
          patterns: [
            {
              match: '[0-1]*[^-\\s0-1.;()\\[\\]{}][^-.;()\\[\\]{}]*',
              name: 'invalid.illegal.syntax.abnf'
            },
            {
              match: '[0-1]+',
              name: 'constant.numeric.integer.int.binary.bin.abnf'
            },
            {match: '-', name: 'punctuation.separator.range.dash.hyphen.abnf'},
            {match: '\\.', name: 'keyword.operator.concatenation.abnf'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.abnf'
}

export default grammar
