// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ivan-demchenko/roc-vscode-unofficial>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.roc'],
  names: ['roc'],
  patterns: [
    {match: '(\\b_[a-zA-Z0-9_]*\\b)', name: 'keyword.unused.roc'},
    {
      match:
        '\\b(dbg|if|then|else|when|is|app|packages|imports?|provides|to|as|expect|exposes)\\s+',
      name: 'keyword.control.roc'
    },
    {include: '#comments'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#punctuation'},
    {include: '#module-member-access'},
    {include: '#language-components'},
    {include: '#infix_op'},
    {include: '#type-signature'}
  ],
  repository: {
    arrow: {match: '->', name: 'punctuation.separator.arrow.roc'},
    brackets: {match: '(\\}|\\{)', name: 'punctuation.bracket.roc'},
    comma: {match: '(,)', name: 'punctuation.separator.comma.roc'},
    comments: {
      patterns: [
        {
          begin: '#',
          captures: {1: {name: 'punctuation.definition.comment.roc'}},
          end: '$',
          name: 'comment.line.number-sign.roc'
        },
        {
          begin: '##',
          captures: {1: {name: 'punctuation.definition.comment.roc'}},
          end: '$',
          name: 'comment.block.documentation.roc'
        }
      ]
    },
    constructor: {
      match: '\\b[A-Z][a-zA-Z0-9_]*\\b',
      name: 'entity.name.type.roc'
    },
    infix_op: {
      match:
        '(</>|<\\?>|<\\||<=|\\|\\||&&|>=|\\|>|\\|=|\\|\\.|\\+\\+|::|/=|==|//|>>|<<|<|>|\\^|\\+|-|/|\\*)',
      name: 'keyword.operator.roc'
    },
    'language-components': {
      patterns: [
        {include: '#constructor'},
        {include: '#unit'},
        {include: '#top-level-value'},
        {include: '#record-accessor'}
      ]
    },
    'module-member-access': {
      begin: '([A-Z][a-zA-Z0-9_]*)(\\.)',
      beginCaptures: {
        1: {name: 'support.class.roc'},
        2: {name: 'keyword.other.period.roc'}
      },
      end: '\\s',
      name: 'meta.module.access.roc',
      patterns: [
        {include: '#module-member-access'},
        {include: '#constructor'},
        {match: "\\b[a-z][a-zA-Z0-9_']*\\b", name: 'support.function.roc'}
      ]
    },
    numbers: {
      patterns: [{include: '#numbers_float'}, {include: '#numbers_int'}]
    },
    numbers_float: {
      match:
        '\\b([0-9][0-9_]*\\.[0-9_]+(e-?[0-9_]+)?|[0-9][0-9_]*e-?[0-9][0-9_]*)\\b',
      name: 'constant.numeric.float.roc'
    },
    numbers_int: {match: '\\b([0-9][0-9_]*)\\b', name: 'constant.numeric.roc'},
    parens: {match: '(\\(|\\))', name: 'punctuation.parens.roc'},
    period: {match: '[.]', name: 'keyword.other.period.roc'},
    punctuation: {
      patterns: [
        {include: '#brackets'},
        {include: '#sq_brackets'},
        {include: '#parens'},
        {include: '#comma'},
        {include: '#arrow'}
      ]
    },
    'record-accessor': {
      captures: {
        1: {name: 'keyword.other.period.roc'},
        2: {name: 'entity.name.function.record-field.roc'}
      },
      match: '(\\.)([a-z][a-zA-Z0-9_]*)',
      name: 'meta.record.accessor'
    },
    sq_brackets: {match: '(\\]|\\[)', name: 'punctuation.bracket.roc'},
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.roc'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.roc'}},
          name: 'string.quoted.double.roc',
          patterns: [
            {
              begin: '\\\\u\\(',
              beginCaptures: {0: {name: 'constant.character.escape.roc'}},
              end: '\\)',
              endCaptures: {0: {name: 'constant.character.escape.roc'}},
              name: 'invalid.illegal',
              patterns: [{match: '[0-9a-fA-F]+', name: 'constant.numeric.roc'}]
            },
            {
              match: '\\\\[nrt\\\\\\"\\\\]',
              name: 'constant.character.escape.roc'
            },
            {
              begin: '\\$\\(',
              beginCaptures: {0: {name: 'constant.character.escape.roc'}},
              end: '\\)',
              endCaptures: {0: {name: 'constant.character.escape.roc'}},
              name: 'source.roc',
              patterns: [
                {
                  match: '\\b(dbg|expect|if|then|else|when|is|as)\\s+',
                  name: 'keyword.control.roc'
                },
                {include: '#comments'},
                {include: '#strings'},
                {include: '#numbers'},
                {include: '#punctuation'},
                {include: '#module-member-access'},
                {include: '#language-components'},
                {include: '#infix_op'},
                {include: '#type-signature'}
              ]
            }
          ]
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.roc'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.roc'}},
          name: 'string.quoted.single.roc',
          patterns: [
            {match: "\\\\[nrt\\\\'\\\\]", name: 'constant.character.escape.roc'}
          ]
        }
      ]
    },
    'top-level-value': {
      match: "^[a-z][a-zA-Z0-9_']*\\b",
      name: 'entity.name.function.top_level.roc'
    },
    'type-record': {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'punctuation.section.braces.begin'}},
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.braces.end'}},
      name: 'meta.function.type-record.roc',
      patterns: [
        {match: '\\s+', name: 'punctuation.spaces.roc'},
        {match: '->', name: 'keyword.operator.arrow.roc'},
        {
          captures: {
            1: {name: 'entity.name.record.field.roc'},
            2: {name: 'keyword.other.roc'}
          },
          match: '([a-z][a-zA-Z0-9_]*)\\s+(\\:)',
          name: 'meta.record.field.roc'
        },
        {match: '\\,', name: 'punctuation.separator.comma.roc'},
        {match: '\\b[a-z][a-zA-Z0-9_]*\\b', name: 'variable.type.roc'},
        {match: '\\b[A-Z][a-zA-Z0-9_]*\\b', name: 'storage.type.roc'},
        {include: '#comments'},
        {include: '#type-record'}
      ]
    },
    'type-signature': {
      begin: "^([a-z_][a-zA-Z0-9_']*)\\s+(\\:)",
      beginCaptures: {
        1: {name: 'entity.name.function.roc'},
        2: {name: 'keyword.other.colon.roc'}
      },
      end: '((^(?=[a-z]))|^$)',
      name: 'meta.function.type-declaration.roc',
      patterns: [
        {match: '\\s+', name: 'punctuation.spaces.roc'},
        {include: '#module-member-access'},
        {match: '\\b[a-z][a-zA-Z0-9_]*\\b', name: 'variable.type.roc'},
        {match: '\\b[A-Z][a-zA-Z0-9_]*\\b', name: 'storage.type.class.roc'},
        {include: '#arrow'},
        {include: '#unit'},
        {include: '#comma'},
        {include: '#parens'},
        {include: '#comments'},
        {include: '#type-record'}
      ]
    },
    unit: {match: '\\(\\)', name: 'constant.unit.roc'}
  },
  scopeName: 'source.roc'
}

export default grammar
