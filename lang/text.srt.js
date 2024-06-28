// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-subtitles>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: [],
  names: ['subrip-text'],
  patterns: [{include: '#main'}],
  repository: {
    action: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.srt'}},
          end: '\\]|(?=^[ \\t]*$)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.srt'}},
          name: 'string.quoted.other.sound.action.square-brackets.srt',
          patterns: [{include: '#formatting'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.srt'}},
          end: '\\)|(?=^[ \\t]*$)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.srt'}},
          name: 'string.quoted.other.sound.action.round-brackets.srt',
          patterns: [{include: '#formatting'}]
        }
      ]
    },
    align: {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.srt'},
        2: {name: 'entity.name.tag.srt'},
        3: {name: 'invalid.deprecated.syntax.tag.srt'},
        4: {name: 'punctuation.definition.tag.end.srt'}
      },
      match: '({)(\\\\a(?:n[1-9]|(10|11|(?!4|8)\\d)))(})',
      name: 'meta.tag.override.line-alignment.srt'
    },
    arrow: {
      captures: {0: {name: 'punctuation.definition.separator.srt'}},
      match: '-->',
      name: 'keyword.operator.timespan.srt'
    },
    bold: {
      begin: '(<)([Bb])(?=$|>|\\s)([^>]*)(>)',
      beginCaptures: {
        0: {name: 'meta.tag.inline.b.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.b.html.srt'},
        3: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        4: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      contentName: 'markup.bold.srt',
      end: '(</)([Bb])[ \\t]*(>)|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'meta.tag.inline.b.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.b.html'},
        3: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      patterns: [{include: '#text'}]
    },
    dash: {
      captures: {1: {name: 'punctuation.section.quote.srt'}},
      match: '(?:^|\\G)(-)',
      name: 'markup.quote.quotation-dash.srt'
    },
    escapes: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.srt'}},
          match: '(\\\\)h',
          name: 'constant.character.whitespace.escape.hard-space.srt'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.srt'}},
          match: '(\\\\)N',
          name: 'constant.character.whitespace.escape.forced-newline.srt'
        }
      ]
    },
    font: {
      begin: '(?i)(<)(font)(?=$|>|\\s)([^>]*)(>)',
      beginCaptures: {
        0: {name: 'meta.tag.inline.font.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.font.html.srt'},
        3: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        4: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      contentName: 'markup.other.font.srt',
      end: '(?i)(</)(font)[ \\t]*(>)|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'meta.tag.inline.font.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.font.html.srt'},
        3: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      patterns: [{include: '#text'}]
    },
    formatting: {
      patterns: [
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#strike'},
        {include: '#font'},
        {include: '#align'}
      ]
    },
    italic: {
      begin: '(<)([Ii])(?=$|>|\\s)([^>]*)(>)',
      beginCaptures: {
        0: {name: 'meta.tag.inline.i.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.i.html.srt'},
        3: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        4: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      contentName: 'markup.italic.srt',
      end: '(</)([Ii])[ \\t]*(>)|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'meta.tag.inline.i.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.i.html'},
        3: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      patterns: [{include: '#text'}]
    },
    linePosition: {
      captures: {
        1: {name: 'variable.parameter.position.srt'},
        3: {name: 'keyword.operator.assignment.key-value.colon.srt'},
        4: {name: 'constant.numeric.float.srt'},
        5: {name: 'constant.numeric.integer.srt'}
      },
      match: '\\b(([XY])[0-9]+)(:)(?:([-+]?[0-9]+\\.[0-9]+)|([-+]?[0-9]+))\\b',
      name: 'meta.line-position.${2:/downcase}-axis.srt'
    },
    lyrics: {
      begin: '(♪+)[ \\t]*',
      beginCaptures: {1: {name: 'punctuation.definition.lyrics.begin.srt'}},
      end: '[ \\t]*(♪+)|(?=^-|^[ \\t]*$|\\s*</)',
      endCaptures: {1: {name: 'punctuation.definition.lyrics.end.srt'}},
      name: 'markup.quote.lyrics.srt',
      patterns: [{include: '#formatting'}]
    },
    main: {patterns: [{include: '#subtitle'}]},
    speaker: {
      captures: {
        1: {patterns: [{include: '#dash'}]},
        2: {
          name: 'entity.name.speaker.srt',
          patterns: [{include: '#formatting'}, {include: '#action'}]
        },
        3: {name: 'punctuation.separator.speaker.colon.srt'}
      },
      match:
        '(?:^|\\G)(-[ \\t]*)?((?:[^-<>\\s:][^:]*(?=:[ \\t]*\\S)|[^-<>\\s:a-z][^:a-z]*)(:))(?=$|\\s)'
    },
    strike: {
      begin: '(<)([Ss])(?=$|>|\\s)([^>]*)(>)',
      beginCaptures: {
        0: {name: 'meta.tag.inline.s.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.s.html.srt'},
        3: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        4: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      contentName: 'markup.strike.srt',
      end: '(</)([Ss])[ \\t]*(>)|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'meta.tag.inline.s.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.s.html'},
        3: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      patterns: [{include: '#text'}]
    },
    subtitle: {
      begin: '^(?:﻿?)(\\d+)$',
      beginCaptures: {1: {name: 'entity.name.section.srt'}},
      end: '^[ \\t]*$',
      name: 'meta.subtitle.srt',
      patterns: [
        {
          begin: '\\G\\s*',
          end: '(?!\\G)$',
          patterns: [
            {
              begin:
                '(?x) ^\n([0-9]{2}:[0-9]{2}:[0-9]{2}[,.][0-9]{3}) \\x20(-->)\\x20 (\\1)\n((?:\\s*[XY][0-9]+:[-+]?[0-9]+(?:\\.[0-9]+)?)++)?\n[ \\t]* $ ',
              beginCaptures: {
                1: {
                  name: 'constant.numeric.time.timecode.start.srt',
                  patterns: [{include: '#timecode'}]
                },
                2: {patterns: [{include: '#arrow'}]},
                3: {
                  name: 'constant.numeric.time.timecode.end.srt',
                  patterns: [{include: '#timecode'}]
                },
                4: {patterns: [{include: '#linePosition'}]}
              },
              contentName: 'comment.block.ignored.hidden-subtitle.srt',
              end: '(?=^[ \\t]*$)',
              name: 'meta.timespan.empty.srt'
            },
            {
              captures: {
                1: {
                  name: 'constant.numeric.time.timecode.start.srt',
                  patterns: [{include: '#timecode'}]
                },
                2: {patterns: [{include: '#arrow'}]},
                3: {
                  name: 'constant.numeric.time.timecode.end.srt',
                  patterns: [{include: '#timecode'}]
                },
                4: {patterns: [{include: '#linePosition'}]}
              },
              match:
                '(?x) ^\n([0-9]{2}:[0-9]{2}:[0-9]{2}[,.][0-9]{3}) \\x20(-->)\\x20\n([0-9]{2}:[0-9]{2}:[0-9]{2}[,.][0-9]{3})\n((?:\\s*[XY][0-9]+:[-+]?[0-9]+(?:\\.[0-9]+)?)++)?\n[ \\t]* $ ',
              name: 'meta.timespan.srt'
            },
            {include: '#text'}
          ]
        },
        {include: '#text'}
      ]
    },
    text: {
      patterns: [
        {include: '#speaker'},
        {include: '#dash'},
        {include: '#action'},
        {include: '#lyrics'},
        {include: '#formatting'},
        {include: '#escapes'}
      ]
    },
    timecode: {
      patterns: [
        {match: '\\.', name: 'invalid.illegal.syntax.decimal-separator.srt'},
        {
          match: '(?<=:)([6-9][0-9])',
          name: 'invalid.illegal.value.out-of-range.vtt'
        }
      ]
    },
    underline: {
      begin: '(<)([Uu])(?=$|>|\\s)([^>]*)(>)',
      beginCaptures: {
        0: {name: 'meta.tag.inline.u.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.u.html.srt'},
        3: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        4: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      contentName: 'markup.underline.srt',
      end: '(</)([Uu])[ \\t]*(>)|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'meta.tag.inline.u.html.srt'},
        1: {name: 'punctuation.definition.tag.begin.html.srt'},
        2: {name: 'entity.name.tag.inline.u.html'},
        3: {name: 'punctuation.definition.tag.end.html.srt'}
      },
      patterns: [{include: '#text'}]
    }
  },
  scopeName: 'text.srt'
}

export default grammar
