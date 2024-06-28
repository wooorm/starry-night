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
  dependencies: ['source.pcb.sexp', 'source.scheme'],
  extensions: ['.kicad_sch'],
  names: ['kicad-schematic', 'eeschema-schematic'],
  patterns: [
    {
      begin: '\\A(?=<\\?xml\\s+version="[\\d.]+"\\s)',
      contentName: 'source.eagle.pcb.board',
      end: '(?=A)B',
      patterns: [{include: 'text.xml'}]
    },
    {
      begin: '\\A\\s*(?=\\(kicad_sch(?:\\s|$|\\())',
      contentName: 'source.pcb.sexp',
      end: '(?=A)B',
      patterns: [{include: 'source.pcb.sexp'}]
    },
    {
      begin: '\\A\\s*(?=;|\\()',
      contentName: 'source.scheme',
      end: '(?=A)B',
      patterns: [{include: 'source.scheme'}]
    },
    {
      begin:
        '^\\s*(EESchema(?:\\s+Schematic|-(?:DOCLIB|LIBRARY))\\s+\\S+.*)\\s*$',
      beginCaptures: {1: {name: 'keyword.control.header.pcb.schematic'}},
      end: '(?<=\\$EndDescr)(?=\\s|$)',
      endCaptures: {
        1: {name: 'keyword.control.header.pcb.schematic'},
        2: {name: 'punctuation.definition.header.pcb.schematic'}
      },
      name: 'meta.header.pcb.schematic',
      patterns: [
        {
          captures: {
            1: {name: 'variable.assignment.libs.pcb.schematic'},
            2: {name: 'punctuation.separator.key-value.pcb.schematic'},
            3: {
              patterns: [
                {
                  match: ',',
                  name: 'punctuation.delimiter.list.comma.pcb.schematic'
                },
                {
                  match: '[^\\s,]+',
                  name: 'constant.other.lib-name.pcb.schematic'
                }
              ]
            }
          },
          match: '^\\s*(LIBS(:))\\s*(.+)'
        },
        {
          begin: '^\\s*(EELAYER)((?:\\s+[-+]?[\\d.]+)*)\\s*$',
          beginCaptures: {
            1: {name: 'entity.name.var.pcb.schematic'},
            2: {patterns: [{include: '#numbers'}]}
          },
          end: '^\\s*(EELAYER)\\s+(END)\\s*$',
          endCaptures: {
            1: {name: 'entity.name.var.pcb.schematic'},
            2: {name: 'keyword.control.pcb.schematic'}
          },
          name: 'meta.eelayer.pcb.schematic',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^\\s*((\\$)Descr)(?=\\s)',
          beginCaptures: {
            1: {name: 'keyword.control.section.pcb.schematic'},
            2: {name: 'punctuation.section.begin.pcb.schematic'}
          },
          end: '^\\s*((\\$)EndDescr)(?=\\s)',
          endCaptures: {
            1: {name: 'keyword.control.section.pcb.schematic'},
            2: {name: 'punctuation.section.end.pcb.schematic'}
          },
          name: 'meta.description.pcb.schematic',
          patterns: [
            {
              captures: {
                1: {name: 'constant.language.paper-size.pcb.schematic'}
              },
              match: '\\G\\s+([A-E][0-9]?)(?=\\s)'
            },
            {include: '$self'}
          ]
        },
        {include: '$self'}
      ]
    },
    {
      begin: '^\\s*((\\$)Bitmap)\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.section.pcb.schematic'},
        2: {name: 'punctuation.section.begin.pcb.schematic'}
      },
      end: '^\\s*((\\$)EndBitmap)(?=\\s|$)',
      endCaptures: {
        1: {name: 'keyword.control.section.pcb.schematic'},
        2: {name: 'punctuation.section.end.pcb.schematic'}
      },
      name: 'meta.bitmap.pcb.schematic',
      patterns: [
        {
          begin: '^\\s*(Data)\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.data.section.begin.pcb.schematic'}
          },
          contentName: 'string.unquoted.heredoc.bytestream.pcb.schematic',
          end: '^\\s*(EndData)\\s*$',
          endCaptures: {
            1: {name: 'keyword.control.data.section.end.pcb.schematic'}
          },
          patterns: [
            {
              match: '\\s+((\\$)EndBitmap)\\s*$',
              name: 'comment.ignored.pcb.schematic'
            },
            {
              match: '(?<=\\s|^)(?![A-Fa-f0-9]{2}(?:\\s|$))(\\S+)',
              name: 'invalid.illegal.syntax.pcb.schematic'
            }
          ]
        },
        {include: '$self'}
      ]
    },
    {
      begin: '^\\s*(DEF|DRAW)(?:\\s+(\\S+)\\s+(.+))?\\s*$',
      beginCaptures: {
        1: {name: 'storage.type.class.definition.pcb.schematic'},
        2: {name: 'entity.name.var.pcb.schematic'},
        3: {patterns: [{include: '#params'}]}
      },
      end: '^\\s*(END\\1)(?=\\s|$)',
      endCaptures: {1: {name: 'storage.type.class.definition.pcb.schematic'}},
      name: 'meta.component.${1:/downcase}.pcb.schematic',
      patterns: [{include: '#params'}]
    },
    {
      captures: {
        1: {name: 'storage.type.class.alias.pcb.schematic'},
        2: {
          patterns: [
            {include: '#quotedString'},
            {match: '\\S+', name: 'entity.name.var.pcb.schematic'}
          ]
        }
      },
      match: '^\\s*(ALIAS)\\s+(.+)\\s*$',
      name: 'meta.aliases.pcb.schematic'
    },
    {
      begin: '^\\s*((\\$)([A-Za-z]\\w+))\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.section.pcb.schematic'},
        2: {name: 'punctuation.section.begin.pcb.schematic'}
      },
      end: '^\\s*((\\$)[Ee]nd\\3)(?=\\s|$)',
      endCaptures: {
        1: {name: 'keyword.control.section.pcb.schematic'},
        2: {name: 'punctuation.section.end.pcb.schematic'}
      },
      name: 'meta.${3:/downcase}.pcb.schematic',
      patterns: [{include: '$self'}]
    },
    {
      captures: {
        1: {name: 'entity.name.var.pcb.schematic'},
        2: {name: 'entity.name.type.pcb.schematic'},
        3: {name: 'constant.language.other.pch.schematic'}
      },
      match: '^\\s*(Wire)\\s+(Wire|Bus|Line)\\s+(Line)\\s*$',
      name: 'meta.wire.pcb.schematic'
    },
    {
      begin: '^\\s*(Text)\\s+(\\w+)\\s+(.+)\\s+(?:(~)|(\\w+))\\s*$',
      beginCaptures: {
        1: {name: 'entity.name.var.pcb.schematic'},
        2: {name: 'entity.name.type.pcb.schematic'},
        3: {patterns: [{include: '$self'}]},
        4: {patterns: [{include: '#tilde'}]},
        5: {name: 'constant.language.other.pch.schematic'}
      },
      end: '^\\s*(\\S.*)$',
      endCaptures: {0: {name: 'string.unquoted.herestring.pcb.schematic'}},
      name: 'meta.text.pcb.schematic'
    },
    {
      begin: '^\\s*([A-Za-z]\\w*)(?=\\s)',
      beginCaptures: {1: {name: 'entity.name.var.pcb.schematic'}},
      end: '$',
      patterns: [{include: '#params'}]
    },
    {include: '#shared'}
  ],
  repository: {
    comments: {
      captures: {
        1: {name: 'comment.line.number-sign.pcb.schematic'},
        2: {name: 'punctuation.definition.comment.pcb.board'}
      },
      match: '^\\s*((#).*$)'
    },
    lowerCaseName: {
      match: '(?<=\\s)[A-Za-z_][-\\w]+(?=\\s|$)',
      name: 'variable.parameter.identifier.pcb.schematic'
    },
    numbers: {
      patterns: [
        {
          match: '(?<![-\\w])[-+]?\\d+(?=\\s|$)',
          name: 'constant.numeric.integer.decimal.pcb.schematic'
        },
        {
          match: '(?<![-\\w])[-+]?\\d*\\.\\d+',
          name: 'constant.numeric.float.decimal.pcb.schematic'
        }
      ]
    },
    params: {
      patterns: [
        {include: '#upperCaseName'},
        {include: '#lowerCaseName'},
        {include: '$self'}
      ]
    },
    quotedString: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.pcb.schematic'}
      },
      end: '"|^|$',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.pcb.schematic'}
      },
      name: 'string.quoted.double.pcb.schematic',
      patterns: [{include: 'source.pcb.sexp#stringInnards'}]
    },
    shared: {
      patterns: [
        {include: '#comments'},
        {include: '#tilde'},
        {include: '#quotedString'},
        {include: '#numbers'}
      ]
    },
    tilde: {match: '~', name: 'keyword.operator.pcb.schematic'},
    upperCaseName: {
      captures: {1: {name: 'punctuation.definition.constant.pcb.schematic'}},
      match: '(?<=\\s)([+#])?[A-Z0-9_]+(?:\\s|$)',
      name: 'constant.language.other.pcb.schematic'
    }
  },
  scopeName: 'source.pcb.schematic'
}

export default grammar
