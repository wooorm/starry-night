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
  extensions: ['.vtt'],
  names: ['webvtt', 'vtt'],
  patterns: [
    {
      begin: '\\A﻿?(WEBVTT)(?=$|[ \\t])',
      beginCaptures: {1: {name: 'keyword.control.start-file.vtt'}},
      end: '(?=A)B',
      name: 'meta.file-body.vtt',
      patterns: [
        {
          begin: '\\G',
          contentName: 'comment.line.ignored.vtt',
          end: '^[ \\t]*$',
          name: 'meta.header.vtt',
          patterns: [{include: '#setting'}]
        },
        {include: '#main'}
      ]
    },
    {include: '#main'}
  ],
  repository: {
    badArrow: {
      match: '\\S*?-->\\S*',
      name: 'invalid.illegal.syntax.unexpected-separator.vtt'
    },
    charRef: {patterns: [{include: 'text.html.basic#character-reference'}]},
    class: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.entity.class.vtt'}},
          match:
            '(\\.)(black|blue|cyan|lime|magenta|red|white|yellow)(?=$|[\\s&<>.])',
          name: 'support.constant.colour.foreground.$2.vtt'
        },
        {
          captures: {1: {name: 'punctuation.definition.entity.class.vtt'}},
          match:
            '(\\.)bg_(black|blue|cyan|lime|magenta|red|white|yellow)(?=$|[\\s&<>.])',
          name: 'support.constant.colour.background.$2.vtt'
        },
        {
          captures: {1: {name: 'punctuation.definition.entity.class.vtt'}},
          match: '(\\.)[^\\s&<>.]+',
          name: 'entity.other.attribute-name.class.vtt'
        }
      ]
    },
    comment: {
      begin: '^NOTE(?=$|\\s)',
      beginCaptures: {0: {name: 'storage.type.start-comment.vtt'}},
      end: '^[ \\t]*$',
      name: 'comment.block.vtt'
    },
    cue: {
      begin:
        '(?x)\n(?=\n\t^\n\t(?:\\d{2,}:)?\\d{2}:\\d{2}\\.\\d{3}  # Start time\n\t[ \\t]+ --> [ \\t]+                  # Separator\n\t(?:\\d{2,}:)?\\d{2}:\\d{2}\\.\\d{3}  # End time\n\t(?:$|[ \\t])\n)\n|\n# Cue identifier\n^((?!.*?-->)[^\\r\\n]+)$',
      beginCaptures: {1: {name: 'entity.name.cue.vtt'}},
      end: '^[ \\t]*$',
      name: 'meta.cue.block.vtt',
      patterns: [{include: '#cueTimings'}, {include: '#cuePayload'}]
    },
    cueComponents: {
      patterns: [
        {include: '#cueSpan'},
        {include: '#cueTimestamp'},
        {include: '#cueDash'},
        {include: '#charRef'}
      ]
    },
    cueDash: {
      captures: {1: {name: 'punctuation.section.quote.vtt'}},
      match: '(?:^|\\G)([-–—―⸺⸻〜〰︱︲﹘﹣－])',
      name: 'markup.quote.quotation-dash.vtt'
    },
    cuePayload: {
      begin: '^(?=[ \\t]*\\S)',
      end: '(?=^[ \\t]*$)(?!\\G)',
      name: 'meta.cue.payload.vtt',
      patterns: [{include: '#cueComponents'}]
    },
    cueSettings: {
      begin: '(?<=[ \\t]|^)(?!$)',
      end: '$',
      name: 'meta.cue.settings-list.vtt',
      patterns: [{include: '#badArrow'}, {include: '#setting'}]
    },
    cueSpan: {
      patterns: [
        {
          begin: '(<)(c)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(c)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.class-span.vtt',
          patterns: [{include: '#cueSpanStart'}, {include: '#cueSpanBody'}]
        },
        {
          begin: '(<)(i)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(i)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.italics-span.vtt',
          patterns: [
            {include: '#cueSpanStart'},
            {
              begin: '(?<=>)',
              end: '(?=</[A-Za-z_:]|^[ \\t]*$)',
              name: 'markup.italic.vtt',
              patterns: [{include: '#cueComponents'}]
            }
          ]
        },
        {
          begin: '(<)(b)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(b)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.bold-span.vtt',
          patterns: [
            {include: '#cueSpanStart'},
            {
              begin: '(?<=>)',
              end: '(?=</[A-Za-z_:]|^[ \\t]*$)',
              name: 'markup.bold.vtt',
              patterns: [{include: '#cueComponents'}]
            }
          ]
        },
        {
          begin: '(<)(u)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(u)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.underline-span.vtt',
          patterns: [
            {include: '#cueSpanStart'},
            {
              begin: '(?<=>)',
              contentName: 'string.other.link.vtt',
              end: '(?=</[A-Za-z_:]|^[ \\t]*$)',
              name: 'markup.underline.vtt',
              patterns: [{include: '#cueComponents'}]
            }
          ]
        },
        {
          begin: '(<)(ruby)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(ruby)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.ruby-span.vtt',
          patterns: [{include: '#cueSpanStart'}, {include: '#cueSpanBody'}]
        },
        {
          begin: '(<)(rt)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(rt)\\s*(>))|(/>)|(?=\\s*</ruby\\s*>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.ruby-text-span.vtt',
          patterns: [{include: '#cueSpanStart'}, {include: '#cueSpanBody'}]
        },
        {
          begin: '(<)(v)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(v)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.voice-span.vtt',
          patterns: [
            {
              begin: '\\G(?!\\s*/>)((?:\\.[^\\s&<>.]+)*\\.?)?',
              beginCaptures: {1: {patterns: [{include: '#class'}]}},
              end: '>|(?=\\s*/>|^[ \\t]*$)',
              endCaptures: {0: {name: 'punctuation.definition.tag.end.vtt'}},
              name: 'meta.tag.opening.vtt',
              patterns: [
                {
                  begin: '(?:[ \\t]|^|\\G)(?=\\S)(?!>|&)',
                  contentName: 'entity.name.voice.vtt',
                  end: '(?=$|>|&|^[ \\t]*$)',
                  name: 'meta.annotation.vtt',
                  patterns: [{include: '#charRef'}]
                }
              ]
            },
            {include: '#cueSpanBody'}
          ]
        },
        {
          begin: '(<)(lang)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(lang)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.language-span.vtt',
          patterns: [
            {
              begin: '\\G(?!\\s*/>)((?:\\.[^\\s&<>.]+)*\\.?)?',
              beginCaptures: {1: {patterns: [{include: '#class'}]}},
              end: '>|(?=\\s*/>|^[ \\t]*$)',
              endCaptures: {0: {name: 'punctuation.definition.tag.end.vtt'}},
              name: 'meta.tag.opening.vtt',
              patterns: [
                {
                  begin: '(?:[ \\t]|^|\\G)(?=\\S)(?!>|&)',
                  contentName: 'constant.language.locale.bcp47.vtt',
                  end: '(?=$|>|&|^[ \\t]*$)',
                  name: 'meta.annotation.vtt',
                  patterns: [{include: '#charRef'}]
                }
              ]
            },
            {include: '#cueSpanBody'}
          ]
        },
        {
          begin: '(<)([A-Za-z_:][-\\w:]*)(?=$|\\s|/?>|\\.)',
          beginCaptures: {
            0: {name: 'meta.tag.opening.vtt'},
            1: {name: 'punctuation.definition.tag.begin.vtt'},
            2: {name: 'entity.name.tag.localname.vtt'}
          },
          end: '(?=^[ \\t]*$)|((</)(\\2)\\s*(>))|(/>)',
          endCaptures: {
            1: {name: 'meta.tag.closing.vtt'},
            2: {name: 'punctuation.definition.tag.begin.vtt'},
            3: {name: 'entity.name.tag.localname.vtt'},
            4: {name: 'punctuation.definition.tag.end.vtt'},
            5: {name: 'punctuation.definition.tag.end.self-closing.vtt'}
          },
          name: 'meta.span.$2-span.vtt',
          patterns: [
            {
              begin: '\\G(?!\\s*/>)((?:\\.[^\\s&<>.]+)*\\.?)?',
              beginCaptures: {1: {patterns: [{include: '#class'}]}},
              end: '>|(?=\\s*/>|^[ \\t]*$)',
              endCaptures: {0: {name: 'punctuation.definition.tag.end.vtt'}},
              name: 'meta.tag.opening.vtt',
              patterns: [
                {
                  begin: '(?:[ \\t]|^|\\G)(?=\\S)(?!>|&)',
                  contentName: 'string.unquoted.annotation.vtt',
                  end: '(?=$|>|&|^[ \\t]*$)',
                  name: 'meta.annotation.vtt',
                  patterns: [{include: '#charRef'}]
                }
              ]
            },
            {include: '#cueSpanBody'}
          ]
        }
      ]
    },
    cueSpanBody: {
      begin: '(?<=>)',
      end: '(?=</[A-Za-z_:]|^[ \\t]*$)',
      name: 'meta.content.vtt',
      patterns: [{include: '#cueComponents'}]
    },
    cueSpanStart: {
      begin: '\\G(?!\\s*/>)((?:\\.[^\\s&<>.]+)*\\.?)?',
      beginCaptures: {1: {patterns: [{include: '#class'}]}},
      contentName: 'invalid.illegal.unexpected-annotation.vtt',
      end: '>|(?=\\s*/>|^[ \\t]*$)',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.vtt'}},
      name: 'meta.tag.opening.vtt',
      patterns: [{include: '#charRef'}]
    },
    cueTimestamp: {
      captures: {
        1: {name: 'punctuation.definition.timestamp.begin.vtt'},
        2: {patterns: [{include: '#timestamp'}]},
        3: {name: 'punctuation.definition.timestamp.end.vtt'}
      },
      match: '(<)((?:\\d{2,}:)?\\d{2}:\\d{2}\\.\\d{3})(>)',
      name: 'constant.other.cue-timestamp.vtt'
    },
    cueTimings: {
      begin:
        '(?x) (?:^|\\G)\n((?:\\d{2,}:)?\\d{2}:\\d{2}\\.\\d{3}) # Start time\n[ \\t]+ (-->) [ \\t]+                 # Separator\n((?:\\d{2,}:)?\\d{2}:\\d{2}\\.\\d{3}) # End time\n(?=$|[ \\t])  [ \\t]*                 # Gap before “#cueSettings”',
      beginCaptures: {
        1: {name: 'meta.start-time.vtt', patterns: [{include: '#timestamp'}]},
        2: {name: 'keyword.operator.timespan.vtt'},
        3: {name: 'meta.end-time.vtt', patterns: [{include: '#timestamp'}]}
      },
      end: '$',
      name: 'meta.cue.timings.vtt',
      patterns: [{include: '#cueSettings'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#region'},
        {include: '#style'},
        {include: '#cue'}
      ]
    },
    region: {
      begin: '^(REGION)[ \\t]*$',
      beginCaptures: {1: {name: 'storage.type.region.vtt'}},
      end: '^[ \\t]*$',
      name: 'meta.region-definition.block.vtt',
      patterns: [
        {
          captures: {
            1: {name: 'variable.assignment.setting-name.vtt'},
            2: {name: 'keyword.operator.assignment.key-value.colon.vtt'},
            3: {patterns: [{include: '#badArrow'}]},
            4: {name: 'entity.name.region.vtt'}
          },
          match: '^(id)(:)(?:(.*?-->.*?)|(\\S+))',
          name: 'meta.setting.with-value.vtt'
        },
        {include: '#setting'}
      ]
    },
    setting: {
      begin: '([^\\s:]+?)(:)',
      beginCaptures: {
        1: {name: 'variable.assignment.setting-name.vtt'},
        2: {name: 'keyword.operator.assignment.key-value.colon.vtt'}
      },
      end: '(?!\\G)',
      name: 'meta.setting.generic.vtt',
      patterns: [
        {
          begin: '\\G(?=[ \\t]*\\S)',
          end: '(?!\\G)(?=\\s|$)',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.whitespace.inline.vtt'},
                2: {name: 'constant.language.scroll-setting.vtt'}
              },
              match: '(?<=scroll:)\\G([ \\t]*)(up)(?=$|\\s)'
            },
            {
              captures: {
                1: {name: 'punctuation.whitespace.inline.vtt'},
                2: {name: 'constant.language.vertical-setting.vtt'}
              },
              match: '(?<=vertical:)\\G([ \\t]*)(rl|lr)(?=$|\\s)'
            },
            {
              captures: {
                1: {name: 'punctuation.whitespace.inline.vtt'},
                2: {name: 'constant.language.line-setting.vtt'}
              },
              match: '(?<=line:)\\G([ \\t]*)(start|center|end)(?=$|\\s)'
            },
            {
              captures: {
                1: {name: 'punctuation.whitespace.inline.vtt'},
                2: {patterns: [{include: '#settingValue'}]},
                3: {name: 'constant.language.position-setting.vtt'}
              },
              match:
                '(?<=position:)\\G([ \\t]*)([0-9]+%,)(center|line-left|line-right)(?=$|\\s)'
            },
            {
              captures: {
                1: {name: 'punctuation.whitespace.inline.vtt'},
                2: {patterns: [{include: '#settingValue'}]},
                3: {name: 'constant.language.align-setting.vtt'}
              },
              match:
                '(?<=align:)\\G([ \\t]*)(center|end|left|right|start)(?=$|\\s)'
            },
            {include: '#settingValue'}
          ]
        }
      ]
    },
    settingValue: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.percentage.vtt'}},
          match: '[0-9]+(?:\\.[0-9]+)?(%)',
          name: 'constant.numeric.percentage.vtt'
        },
        {
          match: '[0-9]+\\b(?!%|\\.[0-9])',
          name: 'constant.numeric.integer.int.vtt'
        },
        {match: '\\bauto\\b(?=$|\\s|,)', name: 'constant.language.auto.vtt'},
        {match: ',', name: 'punctuation.separator.delimiter.comma.vtt'},
        {include: '#badArrow'},
        {match: '.+', name: 'constant.other.setting-value.vtt'}
      ]
    },
    style: {
      begin: '^(STYLE)[ \\t]*$',
      beginCaptures: {1: {name: 'storage.type.style.vtt'}},
      contentName: 'source.embedded.css',
      end: '^[ \\t]*$',
      name: 'meta.style.block.vtt',
      patterns: [{include: 'source.css'}]
    },
    timestamp: {
      captures: {
        1: {name: 'constant.numeric.timestamp.unit.hour.vtt'},
        2: {patterns: [{include: '#timestampColon'}]},
        3: {name: 'constant.numeric.timestamp.unit.minute.vtt'},
        4: {name: 'invalid.illegal.value.out-of-range.vtt'},
        5: {patterns: [{include: '#timestampColon'}]},
        6: {name: 'constant.numeric.timestamp.unit.second.vtt'},
        7: {name: 'invalid.illegal.value.out-of-range.vtt'},
        8: {patterns: [{include: '#timestampDecimal'}]},
        9: {name: 'constant.numeric.timestamp.unit.millisecond.vtt'}
      },
      match:
        '(?x)\n(?:(\\d{2,})(:))?            # Hours        (≥ 00)\n(?:([0-5]\\d)|(\\d{2}))(:)   # Minutes      (00-59)\n(?:([0-5]\\d)|(\\d{2}))(\\.) # Seconds      (00-59)\n(\\d{3})                     # Milliseconds (000-999)',
      name: 'meta.timestamp.vtt'
    },
    timestampColon: {
      captures: {0: {name: 'punctuation.separator.delimiter.vtt'}},
      match: ':',
      name: 'meta.separator.colon.vtt'
    },
    timestampDecimal: {
      captures: {0: {name: 'punctuation.separator.decimal.vtt'}},
      match: '\\.',
      name: 'meta.separator.decimal.fraction.radix-point.vtt'
    }
  },
  scopeName: 'text.vtt'
}

export default grammar
