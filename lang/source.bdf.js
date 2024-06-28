// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.xlfd'],
  extensions: ['.bdf'],
  names: ['glyph-bitmap-distribution-format'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '^COMMENT(?=\\s|$)',
      beginCaptures: {0: {name: 'keyword.operator.start-comment.bdf'}},
      contentName: 'comment.line.bdf',
      end: '$'
    },
    eof: {
      captures: {1: {name: 'keyword.control.end.file.bdf'}},
      match: '^(ENDFONT)\\s*$'
    },
    globalInfo: {
      begin: '^(STARTFONT)\\s+([-+]?\\d+(?:\\.\\d+)?)?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.file.bdf'},
        2: {name: 'constant.numeric.float.decimal.version-number.bdf'}
      },
      end: '^(?=CHARS\\b|ENDFONT\\b)',
      name: 'meta.global-info.bdf',
      patterns: [
        {include: '#comment'},
        {
          begin: '^CONTENTVERSION(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.content-version.bdf'}},
          end: '$',
          name: 'meta.content-version.bdf',
          patterns: [{include: '#paramInteger'}]
        },
        {
          begin: '^FONT(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.font-name.bdf'}},
          end: '$',
          name: 'meta.font-name.bdf',
          patterns: [
            {include: 'source.xlfd#name'},
            {
              captures: {1: {name: 'entity.name.identifier.bdf'}},
              match: '\\G\\s+(?![-+])(\\S+.*)(?=\\s*$)'
            }
          ]
        },
        {
          begin: '^SIZE(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.font-size.bdf'}},
          end: '$',
          name: 'meta.font-size.bdf',
          patterns: [{include: '#paramNumbers'}]
        },
        {
          begin: '^FONTBOUNDINGBOX(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.bounding-box.bdf'}},
          end: '$',
          name: 'meta.bounding-box.bdf',
          patterns: [{include: '#paramIntegers'}]
        },
        {
          begin: '^METRICSSET(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.metrics-set.bdf'}},
          end: '$',
          name: 'meta.metrics-set.bdf',
          patterns: [
            {match: '[3-9]+', name: 'invalid.illegal.unknown-type.bdf'},
            {include: '#paramInteger'}
          ]
        },
        {
          begin: '^(STARTPROPERTIES)(?:\\s+(\\d+))?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.properties.bdf'},
            2: {patterns: [{include: '#integer'}]}
          },
          end: '^(ENDPROPERTIES)\\s*$|^(?=CHARS\\b|ENDFONT\\b)',
          endCaptures: {1: {name: 'keyword.control.end.properties.bdf'}},
          name: 'meta.properties-list.bdf',
          patterns: [
            {
              captures: {
                1: {name: 'variable.assignment.property.name.bdf'},
                2: {
                  patterns: [{include: '#integer'}, {include: '#quotedString'}]
                }
              },
              match: '^(\\S+)(?:\\s+(\\S.*))?(?=\\s*$)',
              name: 'meta.property.bdf'
            }
          ]
        },
        {include: '#metrics'}
      ]
    },
    glyphs: {
      begin: '^(CHARS)(?:\\s+(\\d+))?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.glyphs.bdf'},
        2: {name: 'constant.numeric.decimal.integer.bdf'}
      },
      end: '^(?=ENDFONT\\b)',
      name: 'meta.glyphs-list.bdf',
      patterns: [
        {
          begin: '^(STARTCHAR)(?:\\s+(\\S.*))?(?=\\s*$)',
          beginCaptures: {
            1: {name: 'keyword.control.start.glyph.bdf'},
            2: {name: 'string.unquoted.glyph-name.bdf'}
          },
          end: '^(ENDCHAR)\\s*$',
          endCaptures: {1: {name: 'keyword.control.end.glyph.bdf'}},
          name: 'meta.glyph.bdf',
          patterns: [
            {
              begin: '^ENCODING(?=\\s|$)',
              beginCaptures: {0: {name: 'keyword.operator.glyph-encoding.bdf'}},
              end: '$',
              name: 'meta.glyph-encoding.bdf',
              patterns: [{include: '#paramNumbers'}]
            },
            {
              begin: '^BBX(?=\\s|$)',
              beginCaptures: {0: {name: 'keyword.operator.bounding-box.bdf'}},
              end: '$',
              name: 'meta.bounding-box.bdf',
              patterns: [{include: '#paramNumbers'}]
            },
            {
              begin: '^(BITMAP)\\s*$',
              beginCaptures: {1: {name: 'keyword.operator.bitmap.bdf'}},
              end: '^(?=ENDCHAR\\b|ENDFONT\\b)',
              name: 'meta.bitmap.bdf',
              patterns: [
                {
                  match: '^[0-9A-Fa-f]+(?=\\s*$)',
                  name: 'constant.numeric.hexadecimal.hex.byte.bdf'
                }
              ]
            },
            {include: '#metrics'}
          ]
        }
      ]
    },
    integer: {
      patterns: [
        {
          match: '(?<!\\w)[-+]?(?=0)\\d+',
          name: 'constant.numeric.integer.octal.bdf'
        },
        {
          match: '(?<!\\w)[-+]?\\d+',
          name: 'constant.numeric.integer.decimal.bdf'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#globalInfo'},
        {include: '#glyphs'},
        {include: '#eof'}
      ]
    },
    metrics: {
      begin: '^([SD]WIDTH1?|VVECTOR)(?=\\s|$)',
      beginCaptures: {0: {name: 'keyword.operator.font-metric.bdf'}},
      end: '$',
      name: 'meta.font-metric.${1:/downcase}.bdf',
      patterns: [{include: '#paramNumbers'}]
    },
    numbers: {patterns: [{include: '#real'}, {include: '#integer'}]},
    paramInteger: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#integer'}]}},
          match: '\\G\\s+([-+]?[0-9]+)\\s*$'
        },
        {include: '#paramInvalid'}
      ]
    },
    paramIntegers: {
      patterns: [
        {include: '#integer'},
        {match: '(?![-+0-9.])\\S+', name: 'invalid.illegal.syntax.type.bdf'}
      ]
    },
    paramInvalid: {
      captures: {1: {name: 'invalid.illegal.syntax.type.bdf'}},
      match: '\\G\\s+(\\S+.+)\\s*$'
    },
    paramNumber: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#real'}, {include: '#integer'}]}
          },
          match: '\\G\\s+([-+]?(?:\\d*\\.\\d+|\\d+))\\s*$'
        },
        {include: '#paramInvalid'}
      ]
    },
    paramNumbers: {
      patterns: [
        {include: '#real'},
        {include: '#integer'},
        {match: '(?![-+0-9.])\\S+', name: 'invalid.illegal.syntax.type.bdf'}
      ]
    },
    paramString: {
      captures: {1: {name: 'string.unquoted.bdf'}},
      match: '\\G\\s+(\\S.*)\\s*$',
      name: 'variable.assignment.bdf'
    },
    quotedString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.bdf'}},
      end: '"(?!")|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.bdf'}},
      name: 'string.quoted.double.bdf',
      patterns: [{match: '""', name: 'constant.character.escape.quote.bdf'}]
    },
    real: {
      match: '(?<!\\w)[-+]?\\d*\\.\\d+',
      name: 'constant.numeric.float.bdf'
    }
  },
  scopeName: 'source.bdf'
}

export default grammar
