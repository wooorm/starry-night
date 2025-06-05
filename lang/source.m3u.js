// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: ['.m3u', '.m3u8'],
  names: ['m3u', 'hls-playlist', 'm3u-playlist'],
  patterns: [{include: '#main'}],
  repository: {
    attr: {
      begin: '([^\\s="\',]+)\\s*(=)\\s*(?=[^\\s,])',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.m3u'},
        2: {name: 'keyword.operator.assignment.separator.key-value.m3u'}
      },
      end: '(?!\\G)',
      name: 'meta.attribute.m3u',
      patterns: [
        {
          begin: '\\G"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.m3u'}},
          end: '(")|([^"]+)$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.m3u'},
            2: {name: 'invalid.illegal.syntax.unclosed-string.m3u'}
          },
          name: 'string.quoted.double.m3u'
        },
        {
          begin: "\\G'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.m3u'}},
          end: "(')|([^']+)$",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.m3u'},
            2: {name: 'invalid.illegal.syntax.unclosed-string.m3u'}
          },
          name: 'string.quoted.single.m3u'
        },
        {
          captures: {0: {patterns: [{include: '#unquoted'}]}},
          match: '\\G[^\\s"\',][^\\s,]*'
        }
      ]
    },
    attrList: {patterns: [{include: 'etc#comma'}, {include: '#attr'}]},
    comment: {
      begin: '(?:\\A﻿?|^)(\\s+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.leading.m3u'}},
      end: '(?!\\G)',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.control.start.file.m3u'},
            3: {patterns: [{include: '#attrList'}]}
          },
          match: '\\G(#)(EXTM3U8?)(?=$|\\s)(\\s+[^\\r\\n]*)?$',
          name: 'comment.line.number-sign.directive.file-header.m3u'
        },
        {
          begin: '\\G(#)(EXTINF)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.extinf.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          end: '$',
          name: 'comment.line.number-sign.directive.extinf.m3u',
          patterns: [
            {
              begin: '\\G\\s*([-+]?\\d+(?:\\.\\d+)?)',
              beginCaptures: {1: {name: 'constant.numeric.track-length.m3u'}},
              end: '(?=,|\\s*$)',
              patterns: [{include: '#attr'}]
            },
            {
              begin: '\\s*(,)[ \\t]*',
              beginCaptures: {1: {name: 'punctuation.separator.title.m3u'}},
              contentName: 'markup.list.title.m3u',
              end: '(?=\\s*$)'
            }
          ]
        },
        {
          begin: '\\G(#)(EXTBYT)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.extbyt.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          end: '$',
          name: 'comment.line.number-sign.directive.extbyt.m3u',
          patterns: [{include: '#hex'}, {include: 'etc#num'}]
        },
        {
          begin: '\\G(#)(PLAYLIST|EXT(?:[A-Z]+))(?:(:)|(?=\\s*$))',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.${2:/downcase}.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          contentName: 'string.unquoted.directive.m3u',
          end: '(?=\\s*$)',
          name: 'comment.line.number-sign.directive.${2:/downcase}.m3u'
        },
        {
          begin:
            '(?x)\\G(\\#)\n(EXT-X-\n\t(?: CONTENT-STEERING\n\t|   DATERANGE\n\t|   DEFINE\n\t|   I-FRAME-STREAM-INF\n\t|   KEY\n\t|   MAP\n\t|   MEDIA\n\t|   PART-INF\n\t|   PART\n\t|   PRELOAD-HINT\n\t|   RENDITION-REPORT\n\t|   SERVER-CONTROL\n\t|   SESSION-DATA\n\t|   SESSION-KEY\n\t|   SKIP\n\t|   START\n\t|   STREAM-INF\n\t)\n)(:)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.${2:/downcase}.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          end: '$',
          name: 'comment.line.number-sign.directive.${2:/downcase}.hls.m3u',
          patterns: [{include: '#attrList'}]
        },
        {
          begin: '\\G(#)(EXT-X-BYTERANGE)(:)[ \\t]*',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.byterange.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          end: '$',
          name: 'comment.line.number-sign.directive.byterange.hls.m3u',
          patterns: [
            {
              captures: {
                1: {name: 'constant.numeric.integer.range-length.m3u'},
                2: {name: 'punctuation.separator.range.m3u'},
                3: {name: 'constant.numeric.integer.offset.m3u'}
              },
              match: '\\G(\\d+)(?:(@)(\\d+))?',
              name: 'meta.byte-range.m3u'
            }
          ]
        },
        {
          begin: '\\G(#)(EXT-X(?:-[A-Z0-9]+)++)(?:(:)|(?=\\s*$))',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.m3u'},
            2: {name: 'keyword.operator.field.${2:/downcase}.m3u'},
            3: {patterns: [{include: 'etc#kolon'}]}
          },
          end: '(?=\\s*$)',
          name: 'comment.line.number-sign.directive.${2:/downcase}.hls.m3u',
          patterns: [{include: '#unquoted'}]
        },
        {
          begin: '\\G#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.m3u'}},
          end: '$',
          name: 'comment.line.number-sign.m3u'
        }
      ]
    },
    hex: {
      match: '(?i)[-+]?0x[0-9A-F]+',
      name: 'constant.numeric.integer.int.hexadecimal.hex.m3u'
    },
    main: {patterns: [{include: '#comment'}, {include: '#mediaSpec'}]},
    mediaSpec: {
      begin: '(?:\\A﻿?|^)(\\s+)?(?=[^\\s#])',
      beginCaptures: {1: {name: 'punctuation.whitespace.leading.m3u'}},
      contentName: 'meta.media-source.m3u',
      end: '(?=\\s*$)',
      patterns: [{include: '#url'}, {include: '#path'}]
    },
    path: {
      captures: {0: {patterns: [{include: '#urlEncoded'}]}},
      match: '[^\\s:][^\\r\\n]*(?=\\s*$)',
      name: 'constant.other.reference.link.underline.file.path.m3u'
    },
    resolution: {
      captures: {
        1: {name: 'constant.numeric.integer.width.m3u'},
        2: {name: 'punctuation.separator.dimensions.m3u'},
        3: {name: 'constant.numeric.integer.height.m3u'}
      },
      match: '(?:^|\\G|(?<=\\s))(\\d+)(x)(\\d+)(?=$|\\s)',
      name: 'meta.screen-resolution.m3u'
    },
    unquoted: {
      patterns: [
        {include: '#resolution'},
        {include: '#hex'},
        {include: 'etc#boolish'},
        {include: 'etc#num'},
        {include: 'etc#bareword'}
      ]
    },
    url: {
      captures: {0: {patterns: [{include: '#urlEncoded'}]}},
      match:
        '(?xi)\\b\n((?=[A-Z])\\w+(?:[-+.]\\w+)*+) # URI scheme\n://                            # Separator\n[^#?\\s"]*                     # Pathname\n(?:\\?[^\\s"#]*)?              # Query variable(s)\n(?:\\#[^\\s"]*)?               # Fragment identifier',
      name: 'constant.other.reference.link.underline.${1:/downcase}.m3u'
    },
    urlEncoded: {
      captures: {1: {name: 'punctuation.definition.escape.m3u'}},
      match: '(%)[0-9A-F]{2}',
      name: 'constant.character.escape.url-encoded.m3u'
    }
  },
  scopeName: 'source.m3u'
}

export default grammar
