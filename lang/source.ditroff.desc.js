// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-roff>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '(?=^\\s*(?:fonts|res|hor|vert|unitwidth|biggestfont)(?:\\s|$))',
      end: '(?=A)B',
      patterns: [
        {
          begin: '^(charset)\\s*$',
          beginCaptures: {1: {name: 'keyword.control.section.ditroff.desc'}},
          end: '(?=A)B',
          name: 'meta.charset.ditroff.desc',
          patterns: [
            {include: '#comment'},
            {match: '\\S+', name: 'entity.name.glyph.ditroff.desc'}
          ]
        },
        {include: '#main'}
      ]
    },
    {include: '#main'}
  ],
  repository: {
    charset: {
      begin: '^(charset)\\s*$',
      beginCaptures: {1: {name: 'keyword.control.section.ditroff.desc'}},
      end: '^(?=kernpairs|\\s*$)',
      name: 'meta.charset.ditroff.desc',
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.glyph.ditroff.desc'},
            2: {name: 'punctuation.definition.unnamed.glyph.ditroff.desc'},
            3: {
              patterns: [
                {
                  match: '-?\\d+',
                  name: 'constant.numeric.integer.ditroff.desc'
                },
                {match: ',', name: 'punctuation.delimiter.comma.ditroff.desc'}
              ]
            },
            4: {name: 'constant.numeric.integer.ditroff.desc'},
            5: {name: 'constant.numeric.integer.ditroff.desc'},
            6: {name: 'variable.other.ditroff.desc'}
          },
          match:
            '(?x) ^\n\\s* ((---)|\\S+)                # Name\n\\s+ ([-\\d]+(?:,[-\\d]+){0,5})  # Metrics\n\\s+ (\\d)                       # Glyph type\n\\s+ (0[Xx][0-9A-Fa-f]+|\\d+)    # Code\n(?:\\s+(?!--)(\\S+))?            # Entity name',
          name: 'meta.glyph.ditroff.desc'
        },
        {
          captures: {
            1: {name: 'entity.type.var.ditroff.desc'},
            2: {name: 'keyword.operator.ditroff.desc'}
          },
          match: '^\\s*(\\S+)\\s+(")(?=\\s|$)',
          name: 'meta.glyph.alias.ditroff.desc'
        },
        {
          begin: '(?<=\\s)--(?!-)',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.ditroff.desc'}
          },
          end: '(?=$)',
          name: 'comment.line.double-dash.ditroff.desc'
        },
        {include: '#comment'}
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.ditroff.desc'}},
      end: '$',
      name: 'comment.line.number-sign.ditroff.desc'
    },
    fields: {
      patterns: [
        {
          begin: '^\\s*(ligatures|sizes)(?=\\s)',
          beginCaptures: {1: {name: 'entity.type.var.ditroff.desc'}},
          end: '(?<=\\s)0(?=\\s*$)|(?=^(?!\\s*$)(?!\\s*[\\d#]))',
          endCaptures: {
            0: {name: 'punctuation.terminator.statement.ditroff.desc'}
          },
          name: 'meta.$1-list.ditroff.desc',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.separator.range.dash.ditroff.desc'}
              },
              match: '\\d+(-)\\d+',
              name: 'constant.numeric.range.ditroff.desc'
            },
            {include: '#comment'},
            {match: '\\d+', name: 'constant.numeric.integer.desc'},
            {match: '\\S{2,}', name: 'variable.parameter.ditroff.desc'}
          ]
        },
        {
          begin: '^\\s*(papersize)(?=\\s)',
          beginCaptures: {1: {name: 'entity.type.var.ditroff.desc'}},
          end: '(?=$|#)',
          name: 'meta.papersize.ditroff.desc',
          patterns: [{include: '#paperSizes'}]
        },
        {
          begin:
            '(?x)^\\s*\n(afmfonts|allpunct|anysize|biggestfont|broken|checksum|designsize|encoding|family\n|fonts|hor|image_generator|internalname|lc_ctype|name|orientation|paper(?:length|width)\n|pass_filenames|postpro|prepro|print|res|sizescale|slant|spacewidth|spare\\d|special\n|styles|tcommand|unicode|unitwidth|unscaled_charwidths|use_charnames_in_special|vert\n|X11|(?:lbp|pcl)[a-z]+)\n(?=\\s)',
          beginCaptures: {1: {name: 'entity.type.var.ditroff.desc'}},
          end: '(?=$|#)',
          patterns: [
            {
              match: '-?[\\d.]+(?=\\s|$)',
              name: 'constant.numeric.ditroff.desc'
            },
            {match: '\\S+', name: 'variable.parameter.ditroff.desc'}
          ]
        }
      ]
    },
    fontPath: {
      captures: {
        1: {name: 'variable.other.foundry.ditroff.desc'},
        2: {name: 'entity.name.var.ditroff.desc'},
        3: {name: 'keyword.operator.globstar.ditroff.desc'},
        4: {name: 'string.quoted.double.filename.ditroff.desc'}
      },
      match:
        '^(?:(\\w+)?\\t+)?(\\S+)\\t+(\\*)?(\\S+(?:\\.pf[ab]|[\\/]Resource[\\/]Font[\\/]\\S+))\\s*$'
    },
    foundry: {
      begin: '^(#)Foundry\\|Name\\|Searchpath\\s*$',
      beginCaptures: {
        0: {name: 'comment.line.number-sign.ditroff.desc'},
        1: {name: 'punctuation.definition.comment.ditroff.desc'}
      },
      end: '(?=A)B',
      name: 'meta.foundry-data.ditroff.desc',
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'entity.name.var.ditroff.desc'},
            2: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            3: {name: 'constant.boolean.is-base64.ditroff.desc'},
            4: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            5: {name: 'constant.language.flags.ditroff.desc'},
            6: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            7: {name: 'variable.parameter.ditroff.desc'},
            8: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            9: {name: 'variable.parameter.ditroff.desc'}
          },
          match:
            '^([^\\s|]+)(\\|)([YN])(\\|)([rins]+)?(\\|)(?:([.\\w]*)(\\|)([.\\w]*)(?=\\|))?'
        },
        {
          captures: {
            1: {name: 'storage.type.foundry.ditroff.desc'},
            2: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            3: {name: 'variable.other.foundry.ditroff.desc'},
            4: {name: 'punctuation.delimiter.pipe.ditroff.desc'},
            5: {name: 'string.interpolated.ditroff.desc'},
            6: {name: 'punctuation.definition.arguments.begin.ditroff.desc'},
            7: {name: 'punctuation.definition.arguments.end.ditroff.desc'},
            8: {
              name: 'string.quoted.double.filename.ditroff.desc',
              patterns: [
                {
                  match: ':',
                  name: 'punctuation.separator.key-value.colon.ditroff.desc'
                }
              ]
            }
          },
          match: '^(foundry)(\\|)(\\w*)(\\|)((\\()\\w+(\\)))?([^|#]+)'
        },
        {
          captures: {
            1: {name: 'string.quoted.double.filename.ditroff.desc'},
            2: {name: 'variable.parameter.ditroff.desc'},
            3: {name: 'punctuation.separator.fontname.ditroff.desc'},
            4: {name: 'string.quoted.double.filename.ditroff.desc'}
          },
          match: '(?<=\\|)(?:([^|!]+\\.pf[ab])|([^|!]+)(!)([^|!]+\\.pf[ab]))$',
          name: 'meta.foundry-font.ditroff.desc'
        },
        {
          captures: {
            1: {name: 'variable.other.ditroff.desc'},
            2: {name: 'keyword.operator.assignment.ditroff.desc'},
            3: {name: 'constant.other.ditroff.desc'}
          },
          match: '^([a-z])(=)(?=-)([^#]+)(?=$|#)',
          name: 'meta.afmtodit-flag.ditroff.desc'
        },
        {match: '\\|', name: 'punctuation.delimiter.pipe.ditroff.desc'}
      ]
    },
    kernpairs: {
      begin: '^(kernpairs)\\s*$',
      beginCaptures: {1: {name: 'keyword.control.section.ditroff.desc'}},
      end: '^(?=charset|\\s*$)',
      name: 'meta.kernpairs.ditroff.desc',
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.var.ditroff.desc'},
            2: {name: 'entity.name.var.ditroff.desc'},
            3: {name: 'constant.numeric.integer.ditroff.desc'}
          },
          match: '^\\s*(\\S+)\\s+(\\S+)\\s+(-?\\d+)',
          name: 'meta.kerning-pair.ditroff.desc'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#foundry'},
        {include: '#comment'},
        {include: '#charset'},
        {include: '#fields'},
        {include: '#kernpairs'},
        {include: '#fontPath'}
      ]
    },
    paperSizes: {
      patterns: [
        {
          match:
            '(?i)(?:[A-D][0-7]|DL|letter|legal|tabloid|ledger|statement|executive|com10|monarch)(?=$|[\\s#])',
          name: 'support.constant.papersize.ditroff.desc'
        },
        {
          captures: {
            1: {name: 'constant.numeric.ditroff.desc'},
            2: {name: 'keyword.other.unit.ditroff.desc'},
            3: {name: 'punctuation.delimiter.comma.ditroff.desc'},
            4: {name: 'constant.numeric.ditroff.desc'},
            5: {name: 'keyword.other.unit.ditroff.desc'}
          },
          match: '(?<=\\s)([\\d.]+)([icpP])(,)([\\d.]+)([icpP])(?=\\s|$)',
          name: 'meta.custom-papersize.ditroff.desc'
        }
      ]
    }
  },
  scopeName: 'source.ditroff.desc'
}

export default grammar
