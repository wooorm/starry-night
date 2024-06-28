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
  dependencies: ['source.pcb.sexp'],
  extensions: [],
  names: ['kicad-legacy-layout'],
  patterns: [
    {
      begin: '\\A(?=<\\?xml\\s+version="[\\d.]+"\\s)',
      contentName: 'source.eagle.pcb.board',
      end: '(?=A)B',
      patterns: [{include: 'text.xml'}]
    },
    {include: '#main'}
  ],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.pcb.board'}},
      end: '$',
      name: 'comment.line.number-sign.pcb.board'
    },
    fields: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.var.pcb.board'},
            2: {patterns: [{include: 'source.pcb.sexp'}]}
          },
          match: '^\\s*(PcbPlotParams)\\s+(.+)$'
        },
        {
          captures: {
            1: {name: 'entity.name.var.pcb.board'},
            2: {
              name: 'punctuation.section.begin.brace.bracket.square.pcb.board'
            },
            3: {name: 'constant.numeric.integer.decimal.pcb.board'},
            4: {name: 'punctuation.section.end.brace.bracket.square.pcb.board'}
          },
          match: '^\\s*(Layer)(\\[)([0-9]+)(\\])(?=\\s)'
        },
        {
          captures: {
            1: {name: 'entity.name.var.pcb.board'},
            2: {name: 'string.unquoted.pcb.board'}
          },
          match: '^\\s*(Cd)\\s+(\\S.*)\\s*$'
        },
        {
          captures: {1: {name: 'entity.name.var.pcb.board'}},
          match: '^\\s*([^$\\s]\\S*)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.pcb.board'},
            2: {
              patterns: [
                {match: '\\\\.', name: 'constant.character.escape.pcb.board'}
              ]
            },
            3: {name: 'punctuation.definition.string.end.pcb.board'}
          },
          match: '(")((?:[^"\\\\]|\\\\.)*)("|(?=$))',
          name: 'string.quoted.double.pcb.board'
        },
        {
          match: '[-+]?\\d*\\.\\d+',
          name: 'constant.numeric.float.decimal.pcb.board'
        },
        {include: '#integer'},
        {
          captures: {1: {name: 'punctuation.definition.constant.pcb.board'}},
          match: '[-+]?(?:(/)?[A-F0-9]+|0x[A-Fa-f0-9]+)(?=\\s|$)',
          name: 'constant.numeric.integer.hex.pcb.board'
        },
        {
          match: '(?<=\\s|^)[A-Z]+(?=\\s|$)',
          name: 'constant.language.other.pcb.board'
        },
        {match: '[^$\\s]\\S*', name: 'variable.parameter.pcb.board'},
        {include: '$self'}
      ]
    },
    header: {
      captures: {
        1: {name: 'storage.type.class.pcb.board'},
        2: {name: 'entity.name.var.pcb.board'},
        3: {name: 'constant.numeric.decimal.pcb.board'},
        4: {name: 'entity.name.var.pcb.board'},
        5: {name: 'constant.numeric.date.timestamp.pcb.board'}
      },
      match:
        '^\\s*(PCBNEW-BOARD)\\s+(Version)\\s+([\\d.]+)\\s+(date)\\s+(\\S.*)\\s*$',
      name: 'meta.header.pcb.board'
    },
    integer: {
      match: '[-+]?\\d+(?=\\s|$)',
      name: 'constant.numeric.integer.decimal.pcb.board'
    },
    main: {
      patterns: [
        {include: '#header'},
        {include: '#comment'},
        {include: '#sections'}
      ]
    },
    sections: {
      patterns: [
        {
          begin: '^\\s*((\\$)MODULE)\\s+(\\S+)',
          beginCaptures: {
            1: {name: 'keyword.control.section.module.pcb.board'},
            2: {name: 'punctuation.section.begin.pcb.board'},
            3: {name: 'entity.name.type.class.pcb.board'}
          },
          end: '^\\s*((\\$)EndMODULE)\\s+(\\3)(?=\\s|$)',
          endCaptures: {
            1: {name: 'keyword.control.section.module.pcb.board'},
            2: {name: 'punctuation.section.end.pcb.board'},
            3: {name: 'entity.name.type.class.pcb.board'}
          },
          name: 'meta.section.module.pcb.board',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#fields'}]},
                2: {name: 'keyword.operator.position-type.pcb.board'}
              },
              match: '^\\s*(Po\\s+.+\\s+)([~F][~P])\\s*$'
            },
            {include: '#fields'}
          ]
        },
        {
          begin: '^\\s*((\\$)POLYSCORNERS)\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.section.pcb.board'},
            2: {name: 'punctuation.section.begin.pcb.board'}
          },
          end: '^\\s*((\\$)endPOLYSCORNERS)(?=\\s|$)',
          endCaptures: {
            1: {name: 'keyword.control.section.pcb.board'},
            2: {name: 'punctuation.section.end.pcb.board'}
          },
          name: 'meta.section.polyscorners.pcb.board',
          patterns: [{include: '#integer'}]
        },
        {
          begin: '^\\s*((\\$)([A-Z][A-Z0-9_]*+))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.section.pcb.board'},
            2: {name: 'punctuation.section.begin.pcb.board'}
          },
          end: '^\\s*((\\$)[Ee]nd\\3)(?=\\s|$)',
          endCaptures: {
            1: {name: 'keyword.control.section.pcb.board'},
            2: {name: 'punctuation.section.end.pcb.board'}
          },
          name: 'meta.section.${3:/downcase}.pcb.board',
          patterns: [{include: '#fields'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.eof.pcb.board'},
            2: {name: 'punctuation.section.end.pcb.board'}
          },
          match: '^\\s*((\\$)EndBOARD)(?=\\s|$)'
        }
      ]
    }
  },
  scopeName: 'source.pcb.board'
}

export default grammar
