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
  extensions: ['.afm'],
  names: [
    'adobe-font-metrics',
    'acfm',
    'adobe-composite-font-metrics',
    'adobe-multiple-font-metrics',
    'amfm'
  ],
  patterns: [{include: '#resources'}, {include: '#main'}],
  repository: {
    amfmSpecific: {
      begin: '^(Start(Descendent|Direction|Axis|Master))(?:\\s+(\\S.*))?',
      beginCaptures: {
        1: {name: 'keyword.control.start.${2:/downcase}.afm'},
        3: {patterns: [{include: '#hex'}, {include: '#integer'}]}
      },
      end: '^End\\2\\s*$',
      endCaptures: {0: {name: 'keyword.control.end.${2:/downcase}.afm'}},
      name: 'meta.${2:/downcase}.afm',
      patterns: [{include: '#main'}]
    },
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.list.bracket.square.begin.afm'}
      },
      end: '\\]|(?=$)',
      endCaptures: {
        0: {name: 'punctuation.definition.list.bracket.square.end.afm'}
      },
      patterns: [
        {include: '#array'},
        {include: '#numbers'},
        {include: '#psLiteral'}
      ]
    },
    bestGuessHighlights: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#boolean'}]}},
          match: '\\G\\s*(true|false)(?=\\s|$)'
        },
        {
          captures: {0: {patterns: [{include: '#numbers'}]}},
          match: '^(?:\\s+[-+]?[.\\d]+)+\\s*$'
        },
        {
          captures: {0: {patterns: [{include: '#array'}, {include: '#main'}]}},
          match: '^\\s*(\\[.*\\])\\s*$'
        },
        {
          captures: {0: {patterns: [{include: '#hex'}]}},
          match: '^\\s*<[A-Fa-f0-9]+>\\s*$'
        },
        {
          captures: {0: {patterns: [{include: '#psLiteral'}]}},
          match: '(?:(?:^|\\s+)/[^\\s\\[\\];]+)+\\s*$'
        },
        {
          captures: {0: {name: 'string.unquoted.afm'}},
          match: '^.+$',
          name: 'variable.assignment.afm'
        }
      ]
    },
    boolean: {
      match: '(?<!\\w)(true|false)(?!\\w)',
      name: 'constant.language.boolean.$1.afm'
    },
    bracketedString: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.round.begin.afm'}
      },
      end: '\\)|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.bracket.round.end.afm'}},
      name: 'string.quoted.double.bracketed.afm',
      patterns: [{include: '#bracketedString'}]
    },
    charMetricInnards: {
      patterns: [
        {include: '#delimiter'},
        {
          captures: {
            1: {name: 'variable.assignment.codepoint.afm'},
            2: {patterns: [{include: '#hex'}]}
          },
          match: '\\G(CH)\\s+(<[^>\\s]++>)\\s*(?=;|$)',
          name: 'meta.character.code.hexadecimal.afm'
        },
        {
          captures: {
            1: {name: 'variable.assignment.codepoint.afm'},
            2: {patterns: [{include: '#integer'}]}
          },
          match: '\\G(C)\\s+([-+]?\\d+)\\s*(?=;|$)',
          name: 'meta.character.code.decimal.afm'
        },
        {
          begin: '(?<=\\s|^|;)(W[01]?|VV)(?=\\s|;|$)',
          beginCaptures: {1: {name: 'variable.assignment.character-width.afm'}},
          end: '(?=;|$)',
          name: 'meta.metric.character.width.afm',
          patterns: [{include: '#numbers'}]
        },
        {
          captures: {
            1: {name: 'variable.assignment.${2:/downcase}-width.afm'},
            3: {patterns: [{include: '#integer'}]}
          },
          match:
            '(?<=\\s|^|;)(W[01]?(X|Y))(?:\\s+([-+]?[\\d.]+)\\s*)(?=\\s|$|;)',
          name: 'meta.metric.character.width.afm'
        },
        {
          captures: {
            1: {name: 'variable.assignment.character.name.afm'},
            2: {name: 'string.unquoted.parameter.identifier.afm'}
          },
          match: '(?<=\\s|^|;)(N)(?:\\s+([^;\\s]+))?\\s*(?=\\s|$|;)',
          name: 'meta.metric.character.name.afm'
        },
        {
          begin: '(?<=\\s|^|;)(B)(?=\\s|$|;)',
          beginCaptures: {1: {name: 'variable.assignment.metric.afm'}},
          end: '(?=$|;)',
          name: 'meta.metric.bounding-box.afm',
          patterns: [{include: '#numbers'}]
        },
        {
          begin: '(?<=\\s|^|;)(L)(?=\\s|$|;)',
          beginCaptures: {1: {name: 'variable.assignment.metric.afm'}},
          end: '(?=$|;)',
          name: 'meta.metric.next-ligature.afm',
          patterns: [{include: '#name'}]
        }
      ]
    },
    charMetrics: {
      begin: '^(StartCharMetrics)(?:\\s+(\\d+))?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.metrics.afm'},
        2: {name: 'constant.numeric.decimal.integer.afm'}
      },
      end: '^EndCharMetrics\\s*$',
      endCaptures: {0: {name: 'keyword.control.end.metrics.afm'}},
      name: 'meta.metrics-list.afm',
      patterns: [
        {include: '#comment'},
        {
          begin: '^\\s*(?=C\\s+-\\d)',
          end: '$',
          name: 'meta.unencoded.character.metrics.afm',
          patterns: [{include: '#charMetricInnards'}]
        },
        {
          begin: '^\\s*',
          end: '$',
          name: 'meta.character.metrics.afm',
          patterns: [{include: '#charMetricInnards'}]
        }
      ]
    },
    comment: {
      begin: '^Comment(?=\\s|$)',
      beginCaptures: {0: {name: 'keyword.operator.start-comment.afm'}},
      contentName: 'comment.line.afm',
      end: '$'
    },
    compositesData: {
      begin: '^(StartComposites)(?:\\s+([-+]?\\d+))?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.metrics.afm'},
        2: {patterns: [{include: '#integer'}]}
      },
      end: '^EndComposites',
      endCaptures: {0: {name: 'keyword.control.end.metrics.afm'}},
      name: 'meta.composites.afm',
      patterns: [
        {include: '#comment'},
        {
          begin: '^CC(?=\\s|$|;)',
          beginCaptures: {0: {name: 'keyword.operator.char-comp.afm'}},
          end: '$',
          name: 'meta.composition.afm',
          patterns: [
            {include: '#delimiter'},
            {
              captures: {
                1: {name: 'string.unquoted.parameter.identifier.afm'},
                2: {patterns: [{include: '#integer'}]}
              },
              match: '\\G\\s+([^;\\s]+)(?:\\s+([-+]?\\d+))?'
            },
            {
              captures: {
                1: {name: 'keyword.operator.char-comp.afm'},
                2: {name: 'string.unquoted.parameter.identifier.afm'}
              },
              match: '(?<=;|\\s)(PCC)\\s+([^;\\s]+)'
            },
            {include: '#numbers'}
          ]
        }
      ]
    },
    delimiter: {
      match: ';',
      name: 'punctuation.delimiter.metrics.semicolon.afm'
    },
    globalInfo: {
      patterns: [
        {
          begin: '^(Font|Full|Family)Name(?=\\s|$)',
          beginCaptures: {
            0: {name: 'keyword.operator.${1:/downcase}-name.afm'}
          },
          end: '^|$',
          name: 'meta.${1:/downcase}-name.afm',
          patterns: [{include: '#paramName'}]
        },
        {
          begin: '^MetricsSets(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.metrics-sets.afm'}},
          end: '^|$',
          name: 'meta.writing-directions.afm',
          patterns: [{include: '#paramInteger'}]
        },
        {
          begin: '^IsFixedPitch(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.is-fixed-pitch.afm'}},
          end: '^|$',
          name: 'meta.is-monospaced-font.afm',
          patterns: [{include: '#paramBoolean'}]
        },
        {
          begin: '^Notice(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.notice.afm'}},
          end: '^|$',
          name: 'meta.notice.afm',
          patterns: [{include: '#paramString'}]
        },
        {
          begin: '^Version(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.version.afm'}},
          end: '^|$',
          name: 'meta.revision.afm',
          patterns: [{include: '#paramString'}]
        },
        {
          begin: '^Weight(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.weight.afm'}},
          end: '^|$',
          name: 'meta.weight.afm',
          patterns: [{include: '#paramString'}]
        },
        {
          begin: '^ItalicAngle(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.italic-angle.afm'}},
          end: '^|$',
          name: 'meta.italic-angle.afm',
          patterns: [{include: '#paramNumber'}]
        },
        {
          begin: '^FontBBox(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.font-bbox.afm'}},
          end: '^|$',
          name: 'meta.bounding-box.afm',
          patterns: [{include: '#paramNumbers'}]
        },
        {
          begin: '^EncodingScheme(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.encoding-scheme.afm'}},
          end: '^|$',
          name: 'meta.encoding-scheme.afm',
          patterns: [{include: '#paramString'}]
        },
        {
          begin: '^Underline(Position|Thickness)(?=\\s|$)',
          beginCaptures: {
            0: {name: 'keyword.operator.underline-${1:/downcase}.afm'}
          },
          end: '^|$',
          name: 'meta.underline-property.${1:/downcase}.afm',
          patterns: [{include: '#paramNumber'}]
        },
        {
          begin: '^(Cap|X)Height(?=\\s|$)',
          beginCaptures: {
            0: {name: 'keyword.operator.${1:/downcase}-height.afm'}
          },
          end: '^|$',
          name: 'meta.metric.${1:/downcase}-height.afm',
          patterns: [{include: '#paramNumber'}]
        },
        {
          begin: '^(Descender|Ascender)(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.${1:/downcase}.afm'}},
          end: '^|$',
          name: 'meta.metric.${1:/downcase}.afm',
          patterns: [{include: '#paramNumber'}]
        },
        {
          begin: '^(CharacterSet|AxisType|AxisLabel)(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.metadata.afm'}},
          end: '^|$',
          name: 'meta.metric.${1:/downcase}.afm',
          patterns: [{include: '#paramString'}]
        },
        {
          begin: '^(Characters|EscChar|MappingScheme)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.operator.metadata.afm'}},
          end: '^|$',
          name: 'meta.metadata.${1:/downcase}.afm',
          patterns: [{include: '#paramNumber'}]
        },
        {
          begin: '^(IsBaseFont|IsFixedV|IsCIDFont)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.operator.metadata.afm'}},
          end: '^|$',
          name: 'meta.metadata.${1:/downcase}.afm',
          patterns: [{include: '#paramBoolean'}]
        },
        {
          begin: '^(CharWidth|VVector|Masters|Axes|Std[HV]W)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.operator.metadata.afm'}},
          end: '^|$',
          name: 'meta.metadata.${1:/downcase}.afm',
          patterns: [{include: '#paramNumbers'}]
        },
        {
          begin:
            '^(WeightVector|BlendDesign(Positions|Map)|BlendAxisTypes)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.operator.metadata.afm'}},
          end: '^|$',
          name: 'meta.metadata.${1:/downcase}.afm',
          patterns: [
            {include: '#array'},
            {include: '#numbers'},
            {include: '#psLiteral'}
          ]
        }
      ]
    },
    hex: {
      captures: {
        1: {name: 'punctuation.definition.hex.bracket.angle.begin.afm'},
        2: {name: 'invalid.illegal.syntax.bad-characters.afm'},
        3: {name: 'punctuation.definition.hex.bracket.angle.end.afm'}
      },
      match: '(<)(?:[A-Fa-f0-9]+|([^>\\s]+))(>)',
      name: 'constant.numeric.integer.hexadecimal.afm'
    },
    integer: {
      patterns: [
        {
          match: '(?<!\\w)[-+]?(?=0)\\d+',
          name: 'constant.numeric.integer.octal.afm'
        },
        {
          match: '(?<!\\w)[-+]?\\d+',
          name: 'constant.numeric.integer.decimal.afm'
        }
      ]
    },
    kerningData: {
      begin: '^(StartKernData)\\s*$',
      beginCaptures: {1: {name: 'keyword.control.start.metrics.afm'}},
      end: '^EndKernData\\s*$',
      endCaptures: {0: {name: 'keyword.control.end.metrics.afm'}},
      name: 'meta.kerning-data.afm',
      patterns: [
        {
          begin: '^(StartTrackKern)(?:\\s+([-+]?\\d+))?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.metrics.afm'},
            2: {patterns: [{include: '#integer'}]}
          },
          end: '^EndTrackKern\\s*$',
          endCaptures: {0: {name: 'keyword.control.end.metrics.afm'}},
          patterns: [{include: '#comment'}, {include: '#kerningTrack'}]
        },
        {
          begin: '^(StartKernPairs[0-1]?)(?:\\s+([-+]?\\d+))?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.metrics.afm'},
            2: {patterns: [{include: '#integer'}]}
          },
          end: '^EndKernPairs\\s*$',
          endCaptures: {0: {name: 'keyword.control.end.metrics.afm'}},
          patterns: [{include: '#comment'}, {include: '#kerningPairs'}]
        }
      ]
    },
    kerningPairs: {
      patterns: [
        {
          begin: '^KPH(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.kern-pair.afm'}},
          end: '^|$',
          name: 'meta.kerning-pair.by-codepoint.afm',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#hex'}]}},
              match: '\\G((?:\\s+<[^>\\s]*>)+)\\s+'
            },
            {include: '#numbers'}
          ]
        },
        {
          begin: '^KP[XY]?(?=\\s|$)',
          beginCaptures: {0: {name: 'keyword.operator.kern-pair.afm'}},
          end: '^|$',
          name: 'meta.kerning-pair.by-name.afm',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#name'}]}},
              match: '\\G((?:\\s+\\S+){1,2})'
            },
            {include: '#numbers'}
          ]
        }
      ]
    },
    kerningTrack: {
      begin: '^(TrackKern)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.operator.track-kern.afm'}},
      end: '^|$',
      patterns: [{include: '#numbers'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#real'},
        {include: '#integer'},
        {include: '#array'},
        {include: '#globalInfo'},
        {include: '#kerningData'},
        {include: '#charMetrics'},
        {include: '#compositesData'},
        {include: '#amfmSpecific'},
        {include: '#direction'},
        {include: '#primaryFonts'},
        {include: '#reserved'},
        {include: '#userDefined'}
      ]
    },
    name: {match: '[^;\\s]+', name: 'string.unquoted.parameter.identifier.afm'},
    numbers: {patterns: [{include: '#real'}, {include: '#integer'}]},
    paramBoolean: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#boolean'}]}},
          match: '\\G\\s+(true|false)\\s*$'
        },
        {include: '#paramInvalid'}
      ]
    },
    paramInteger: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#integer'}]}},
          match: '\\G\\s+([-+]?[0-9]+)\\s*$'
        },
        {include: '#paramInvalid'}
      ]
    },
    paramInvalid: {
      captures: {1: {name: 'invalid.illegal.syntax.type.afm'}},
      match: '\\G\\s+(\\S+.+)\\s*$'
    },
    paramName: {
      captures: {1: {name: 'entity.name.identifier.afm'}},
      match: '\\G\\s+(\\S+.*)\\s*$'
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
        {match: '(?![-+0-9.])\\S+', name: 'invalid.illegal.syntax.type.afm'}
      ]
    },
    paramString: {
      captures: {1: {name: 'string.unquoted.afm'}},
      match: '\\G\\s+(\\S.*)\\s*$',
      name: 'variable.assignment.afm'
    },
    paramVar: {
      captures: {1: {name: 'variable.assignment.afm'}},
      match: '\\G\\s+(\\S.*)\\s*$'
    },
    primaryFontLine: {
      patterns: [
        {
          match: '(?<=^|\\s|;)(?:PC|PL|PN)(?=\\s*;)',
          name: 'invalid.illegal.syntax.empty-field.afm'
        },
        {
          begin: '(?<=^|\\s|;)PC(?=\\s|$)',
          beginCaptures: {0: {name: 'variable.assignment.metadata.afm'}},
          end: '(?=;|$|[A-Z])',
          name: 'meta.primary-coordinates.afm',
          patterns: [{include: '#real'}, {include: '#integer'}]
        },
        {
          begin: '(?<=\\s|;)(P[LN])\\s+',
          beginCaptures: {1: {name: 'variable.assignment.metadata.afm'}},
          end: '(?=;|$)',
          patterns: [{include: '#bracketedString'}, {include: '#delimiter'}]
        },
        {include: '#delimiter'}
      ]
    },
    primaryFonts: {
      begin: '^(StartPrimaryFonts)(?:\\s+([-+]?\\d+))?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.start.font-list.afm'},
        2: {patterns: [{include: '#integer'}]}
      },
      end: '\\bEndPrimaryFonts(?=\\s|$)|(?!P)(?=\\w)',
      endCaptures: {0: {name: 'keyword.control.end.font-list.afm'}},
      name: 'meta.primary-fonts.afm',
      patterns: [
        {include: '#comment'},
        {include: '#delimiter'},
        {include: '#primaryFontLine'}
      ]
    },
    psLiteral: {
      captures: {1: {name: 'punctuation.definition.literal.slash.afm'}},
      match: '(/)[^\\s\\[\\];]+',
      name: 'support.language.constant.literal.afm'
    },
    real: {
      match: '(?<!\\w)[-+]?\\d*\\.\\d+',
      name: 'constant.numeric.float.afm'
    },
    reserved: {
      captures: {
        1: {name: 'variable.other.reserved.afm'},
        2: {patterns: [{include: '#bestGuessHighlights'}]}
      },
      match: '^([A-Z][A-Za-z0-9]+)(?=\\s)(.*)$'
    },
    resources: {
      patterns: [
        {
          begin: '^(StartFontMetrics)\\s+(\\d+(?:\\.\\d+)?)?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.file.afm'},
            2: {name: 'constant.numeric.float.decimal.version-number.afm'}
          },
          end: '^(EndFontMetrics)\\s*$',
          endCaptures: {1: {name: 'keyword.control.end.file.afm'}},
          name: 'meta.metrics.file-resource.afm',
          patterns: [{include: '#main'}]
        },
        {
          begin: '^(StartCompFontMetrics)\\s+(\\d+(?:\\.\\d+)?)?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.file.afm'},
            2: {name: 'constant.numeric.float.decimal.version-number.afm'}
          },
          end: '^(EndCompFontMetrics)\\s*$',
          endCaptures: {1: {name: 'keyword.control.end.file.afm'}},
          name: 'meta.composite.metrics.file-resource.afm',
          patterns: [{include: '#main'}]
        },
        {
          begin: '^(StartMasterFontMetrics)\\s+(\\d+(?:\\.\\d+)?)?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.control.start.file.afm'},
            2: {name: 'constant.numeric.float.decimal.version-number.afm'}
          },
          end: '^(EndMasterFontMetrics)\\s*$',
          endCaptures: {1: {name: 'keyword.control.end.file.afm'}},
          name: 'meta.master.metrics.file-resource.afm',
          patterns: [{include: '#main'}]
        }
      ]
    },
    userDefined: {
      captures: {
        1: {name: 'variable.other.custom.afm'},
        2: {patterns: [{include: '#bestGuessHighlights'}]}
      },
      match: '^([a-z][A-Za-z0-9]+)(?=\\s)(.*)$'
    }
  },
  scopeName: 'source.afm'
}

export default grammar
