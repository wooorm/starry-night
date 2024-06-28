// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-pcb>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.kicad_pcb', '.kicad_mod', '.kicad_wks'],
  names: ['kicad-layout', 'pcbnew'],
  patterns: [
    {
      begin: '(\\()\\s*(layers)(?=\\s|$|\\()',
      beginCaptures: {
        1: {name: 'punctuation.section.expression.begin.pcb.sexp'},
        2: {name: 'storage.type.class.layers.pcb.sexp'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.expression.end.pcb.sexp'}},
      name: 'meta.expression.layers.pcb.sexp',
      patterns: [
        {
          begin: '(\\()\\s*(\\d+)(?:\\s+|(?=$|\\())',
          beginCaptures: {
            1: {name: 'punctuation.section.expression.begin.pcb.sexp'},
            2: {name: 'constant.numeric.integer.decimal.pcb.sexp'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.expression.end.pcb.sexp'}
          },
          name: 'meta.expression.layer.pcb.sexp',
          patterns: [
            {
              captures: {1: {name: 'entity.name.function.pcb.sexp'}},
              match: '\\G\\s*(-?(?:(?![\\s\\(\\)])[\\0-\\x7F])+)'
            },
            {include: '#shared'}
          ]
        },
        {include: '#shared'}
      ]
    },
    {
      begin: '(\\()\\s*(comment)(?=\\s|$|\\()',
      beginCaptures: {
        1: {name: 'punctuation.section.expression.begin.pcb.sexp'},
        2: {name: 'entity.name.function.comment.pcb.sexp'}
      },
      contentName: 'comment.block.expression.pcb.sexp',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.expression.end.pcb.sexp'}},
      name: 'meta.expression.comment.pcb.sexp',
      patterns: [
        {begin: '"', end: '"|^|$', patterns: [{include: '#stringInnards'}]}
      ]
    },
    {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.section.expression.begin.pcb.sexp'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.expression.end.pcb.sexp'}},
      name: 'meta.expression.pcb.sexp',
      patterns: [
        {
          captures: {1: {name: 'storage.type.class.pcb.sexp'}},
          match:
            '\\G\\s*(kicad_pcb|kicad_sch|module|page_layout|fp_lib_table|sym_lib_table)(?=\\s|$|\\()'
        },
        {
          captures: {
            1: {name: 'entity.name.function.pcb.sexp'},
            2: {name: 'constant.character.quote.pcb.sexp'}
          },
          match: '\\G\\s*(string_quote)\\s+(")(?=\\))'
        },
        {
          captures: {1: {name: 'entity.name.function.pcb.sexp'}},
          match: '\\G\\s*(-?(?:(?![\\s\\(\\)])[\\0-\\x7F])+)'
        },
        {include: '#shared'}
      ]
    }
  ],
  repository: {
    shared: {patterns: [{include: '#values'}, {include: '$self'}]},
    stringInnards: {
      patterns: [
        {match: '\\\\\\S', name: 'constant.character.escape.pcb.sexp'},
        {
          match: '\\G(?:[^"\\\\]|\\\\.)+(?=$)',
          name: 'invalid.illegal.unclosed.string.pcb.sexp'
        }
      ]
    },
    values: {
      patterns: [
        {
          match: '[-+]?\\d*\\.\\d+',
          name: 'constant.numeric.float.decimal.pcb.sexp'
        },
        {
          match: '[-+]?\\d+(?=\\s|\\))',
          name: 'constant.numeric.integer.decimal.pcb.sexp'
        },
        {
          match: '0x[A-Fa-f0-9]+(?:_[A-Fa-f0-9]+)*',
          name: 'constant.numeric.integer.hex.pcb.sexp'
        },
        {
          match: '(?<=\\s|\\(|\\))(true|false|yes|no)(?=\\s|\\(|\\))',
          name: 'constant.language.boolean.$1.pcb.sexp'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.pcb.sexp'},
            2: {name: 'punctuation.definition.string.end.pcb.sexp'}
          },
          match: '(")(")',
          name: 'string.quoted.double.empty.pcb.sexp'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.pcb.sexp'}
          },
          end: '"|^|$',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.pcb.sexp'}
          },
          name: 'string.quoted.double.pcb.sexp',
          patterns: [{include: '#stringInnards'}]
        },
        {
          captures: {
            1: {
              name: 'punctuation.section.embedded.bracket.curly.begin.pcb.sexp'
            },
            2: {name: 'string.interpolated.embedded.pcb.sexp'},
            3: {name: 'punctuation.section.embedded.bracket.curly.end.pcb.sexp'}
          },
          match: '(\\${)([^\\s}\\(\\)]+)(})',
          name: 'meta.embedded.source.pcb.sexp'
        },
        {match: '[^\\s\\(\\)]+', name: 'variable.parameter.identifier.pcb.sexp'}
      ]
    }
  },
  scopeName: 'source.pcb.sexp'
}

export default grammar
