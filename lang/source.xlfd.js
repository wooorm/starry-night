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
  extensions: [],
  names: [],
  patterns: [{include: '#name'}],
  repository: {
    fieldAddStyleName: {
      captures: {
        0: {
          patterns: [
            {
              match: '\\[',
              name: 'punctuation.definition.square.bracket.begin.xlfd'
            },
            {
              match: '\\]',
              name: 'punctuation.definition.square.bracket.end.xlfd'
            }
          ]
        }
      },
      match: '(?:^|\\G).+$',
      name: 'entity.add-style.name.xlfd'
    },
    fieldAverageWidth: {
      match: '[+~]?[0-9]+',
      name: 'constant.numeric.integer.int.average-width.xlfd'
    },
    fieldCharsetEncoding: {
      captures: {
        1: {name: 'entity.charset-encoding.name.xlfd'},
        2: {name: 'meta.subsetting-hint.xlfd'},
        3: {name: 'punctuation.definition.square.bracket.begin.xlfd'},
        4: {
          patterns: [
            {
              captures: {
                1: {name: 'constant.numeric.hex.integer.xlfd'},
                2: {name: 'constant.numeric.decimal.integer.xlfd'},
                3: {name: 'punctuation.separator.range.underscore.xlfd'},
                4: {name: 'constant.numeric.hex.integer.xlfd'},
                5: {name: 'constant.numeric.decimal.integer.xlfd'}
              },
              match:
                '(?:(0x[0-9A-Fa-f]+)|([0-9]+))(?:(_)(?:(0x[0-9A-Fa-f]+)|([0-9]+)))?',
              name: 'meta.subset-range.xlfd'
            }
          ]
        },
        5: {name: 'punctuation.definition.square.bracket.end.xlfd'}
      },
      match: '(?:^|\\G)([^\\[]+)((\\[)([^\\]]+)(\\]))?$'
    },
    fieldPixelSize: {
      patterns: [
        {
          match: '(?:^|\\G)[0-9]+$',
          name: 'constant.numeric.int.integer.pixel-size.xlfd'
        },
        {
          begin: '(?:^|\\G)(?=\\[)',
          end: '$',
          name: 'meta.pixel-size.matrix.xlfd',
          patterns: [{include: '#matrix'}]
        }
      ]
    },
    fieldPointSize: {
      patterns: [
        {
          match: '(?:^|\\G)[0-9]+$',
          name: 'constant.numeric.int.integer.point-size.xlfd'
        },
        {
          begin: '(?:^|\\G)(?=\\[)',
          end: '$',
          name: 'meta.point-size.matrix.xlfd',
          patterns: [{include: '#matrix'}]
        }
      ]
    },
    fieldResX: {
      match: '(?:^|\\G)[0-9]+$',
      name: 'constant.numeric.unsigned.int.integer.resolution-x.xlfd'
    },
    fieldResY: {
      match: '(?:^|\\G)[0-9]+$',
      name: 'constant.numeric.unsigned.int.integer.resolution-y.xlfd'
    },
    fieldSetWidth: {
      patterns: [
        {
          match: '(?:^|\\G)0$',
          name: 'constant.numeric.polymorphic.set-width.xlfd'
        },
        {match: '(?:^|\\G).+$', name: 'entity.set-width.name.xlfd'}
      ]
    },
    fieldSlant: {
      patterns: [
        {match: '(?:^|\\G)[Rr]$', name: 'constant.language.slant.regular.xlfd'},
        {match: '(?:^|\\G)[Ii]$', name: 'constant.language.slant.italic.xlfd'},
        {match: '(?:^|\\G)[Oo]$', name: 'constant.language.slant.oblique.xlfd'},
        {
          match: '(?:^|\\G)[Rr][Ii]$',
          name: 'constant.language.slant.reverse-italic.xlfd'
        },
        {
          match: '(?:^|\\G)[Rr][Oo]$',
          name: 'constant.language.slant.reverse-oblique.xlfd'
        },
        {
          match: '(?:^|\\G)[Oo][Tt]$',
          name: 'constant.language.slang.other-type.xlfd'
        },
        {
          match: '(?:^|\\G)[0-9]+$',
          name: 'constant.numeric.int.integer.slant.xlfd'
        },
        {match: '(?:^|\\G).+$', name: 'invalid.illegal.unknown-type.slant.xlfd'}
      ]
    },
    fieldSpacing: {
      patterns: [
        {
          match: '(?:^|\\G)[Pp]$',
          name: 'constant.language.field-spacing.proportional.variable-pitch.xlfd'
        },
        {
          match: '(?:^|\\G)[Mm]$',
          name: 'constant.language.field-spacing.monospaced.fixed-pitch.xlfd'
        },
        {
          match: '(?:^|\\G)[Cc]$',
          name: 'constant.language.field-spacing.monospaced.char-celled.xlfd'
        }
      ]
    },
    matrix: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.square.bracket.begin.xlfd'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.square.bracket.end.xlfd'}
      },
      patterns: [
        {
          match: '[+~]?[0-9]*\\.[0-9]+(?:[Ee][+~]?[0-9]+)?',
          name: 'constant.numeric.decimal.float.xlfd'
        },
        {
          match: '[+~]?[0-9]+(?:[Ee][+~]?[0-9]+)?',
          name: 'constant.numeric.decimal.integer.int.xlfd'
        }
      ]
    },
    name: {
      captures: {
        1: {name: 'meta.registry.xlfd'},
        10: {name: 'entity.family.name.xlfd'},
        11: {patterns: [{include: '#wildcards'}]},
        12: {name: 'punctuation.delimiter.dash.xlfd'},
        13: {name: 'entity.weight.name.xlfd'},
        14: {patterns: [{include: '#wildcards'}]},
        15: {name: 'punctuation.delimiter.dash.xlfd'},
        16: {patterns: [{include: '#fieldSlant'}]},
        17: {patterns: [{include: '#wildcards'}]},
        18: {name: 'punctuation.delimiter.dash.xlfd'},
        19: {patterns: [{include: '#fieldSetWidth'}]},
        2: {name: 'meta.extension.xlfd'},
        20: {patterns: [{include: '#wildcards'}]},
        21: {name: 'punctuation.delimiter.dash.xlfd'},
        22: {patterns: [{include: '#fieldAddStyleName'}]},
        23: {patterns: [{include: '#wildcards'}]},
        24: {name: 'punctuation.delimiter.dash.xlfd'},
        25: {patterns: [{include: '#fieldPixelSize'}]},
        26: {patterns: [{include: '#wildcards'}]},
        27: {name: 'punctuation.delimiter.dash.xlfd'},
        28: {patterns: [{include: '#fieldPointSize'}]},
        29: {patterns: [{include: '#wildcards'}]},
        3: {name: 'punctuation.definition.extension-prefix.xlfd'},
        30: {name: 'punctuation.delimiter.dash.xlfd'},
        31: {patterns: [{include: '#fieldResX'}]},
        32: {patterns: [{include: '#wildcards'}]},
        33: {name: 'punctuation.delimiter.dash.xlfd'},
        34: {patterns: [{include: '#fieldResY'}]},
        35: {patterns: [{include: '#wildcards'}]},
        36: {name: 'punctuation.delimiter.dash.xlfd'},
        37: {patterns: [{include: '#fieldSpacing'}]},
        38: {patterns: [{include: '#wildcards'}]},
        39: {name: 'punctuation.delimiter.dash.xlfd'},
        4: {name: 'constant.numeric.decimal.float.version.xlfd'},
        40: {patterns: [{include: '#fieldAverageWidth'}]},
        41: {patterns: [{include: '#wildcards'}]},
        42: {name: 'punctuation.delimiter.dash.xlfd'},
        43: {name: 'entity.charset-registry.name.xlfd'},
        44: {patterns: [{include: '#wildcards'}]},
        45: {name: 'punctuation.delimiter.dash.xlfd'},
        46: {patterns: [{include: '#fieldCharsetEncoding'}]},
        47: {patterns: [{include: '#wildcards'}]},
        5: {name: 'punctuation.delimiter.dash.xlfd'},
        6: {name: 'meta.fields.xlfd'},
        7: {name: 'entity.foundry.name.xlfd'},
        8: {patterns: [{include: '#wildcards'}]},
        9: {name: 'punctuation.delimiter.dash.xlfd'}
      },
      match:
        "(?x)\n# XFontNameRegistry\n(\n\t(\n\t\t(\\+)             # XFNExtPrefix\n\t\t([0-9]+\\.[0-9]+) # Version\n\t)?\n\t(-) # XFNDelim\n)\n\n# XFontNameSuffix\n# (Scoped as `meta.fields', as `suffix' is misleading)\n(\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # FOUNDRY\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # FAMILY_NAME\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # WEIGHT_NAME\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # SLANT\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # SETWIDTH_NAME\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # ADD_STYLE_NAME\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # PIXEL_SIZE\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # POINT_SIZE\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # RESOLUTION_X\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # RESOLUTION_Y\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # SPACING\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # AVERAGE_WIDTH\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*])) (-) # CHARSET_REGISTRY\n\t(?: ([!#-)+.->@-~\\x20]*) | ([?*]))     # CHARSET_ENCODING\n)",
      name: 'meta.font-name.xlfd'
    },
    wildcards: {
      patterns: [
        {match: '\\?', name: 'keyword.operator.logical.wildcard.xlfd'},
        {match: '\\*', name: 'keyword.operator.logical.wildcard.xlfd'}
      ]
    }
  },
  scopeName: 'source.xlfd'
}

export default grammar
