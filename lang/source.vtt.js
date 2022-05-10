// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.vtt'],
  names: ['webvtt'],
  patterns: [{include: '#file_body'}],
  repository: {
    _cue_timings_and_settings_list: {
      captures: {
        1: {patterns: [{include: '#cue_timings'}]},
        2: {patterns: [{include: '#cue_settings_list'}]}
      },
      match: '^(.+?\\s+-->\\s+.+?)(?:\\s+(.+))?$'
    },
    alignment_cue_setting: {
      captures: {
        1: {name: 'support.type.alignment-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              match: '(?:^|\\G)(?:start|center|end|left|right)(?=$)',
              name: 'support.constant.alignment-cue-setting.vtt'
            },
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(align)(:)([^\\s]+)',
      name: 'meta.alignment-cue-setting.vtt'
    },
    comment_block: {
      begin: '^(NOTE)(?:\\s(.*))?$',
      beginCaptures: {
        1: {name: 'entity.name.section.comment.vtt'},
        2: {name: 'comment.line.character.vtt'}
      },
      end: '^$',
      name: 'meta.comment-block.vtt',
      patterns: [{match: '.+', name: 'comment.line.character.vtt'}]
    },
    cue_block: {
      begin: '^.+$',
      beginCaptures: {
        0: {
          patterns: [
            {include: '#cue_identifier'},
            {include: '#_cue_timings_and_settings_list'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      end: '^$',
      name: 'meta.cue-block.vtt',
      patterns: [
        {include: '#_cue_timings_and_settings_list'},
        {include: '#cue_text'}
      ]
    },
    cue_bold_span: {name: 'meta.cue-bold-span.vtt'},
    cue_class_span: {name: 'meta.cue-class-span.vtt'},
    cue_components: {
      name: 'meta.cue-components.vtt',
      patterns: [
        {include: '#cue_class_span'},
        {include: '#cue_italics_span'},
        {include: '#cue_bold_span'},
        {include: '#cue_underline_span'},
        {include: '#cue_ruby_span'},
        {include: '#cue_voice_span'},
        {include: '#cue_language_span'},
        {include: '#cue_timestamp'},
        {include: '#cue_text_span'},
        {include: '#html_character_reference'}
      ]
    },
    cue_identifier: {
      captures: {0: {name: 'variable.other.cue-identifier.vtt'}},
      match: '(?:^|\\G)(?!.*-->).*$',
      name: 'meta.cue-identifier.vtt'
    },
    cue_italics_span: {name: 'meta.cue-italics-span.vtt'},
    cue_language_span: {name: 'meta.cue-language-span.vtt'},
    cue_ruby_span: {name: 'meta.cue-ruby-span.vtt'},
    cue_settings_list: {
      name: 'meta.cue-settings-list.vtt',
      patterns: [
        {include: '#vertical_text_cue_setting'},
        {include: '#line_cue_setting'},
        {include: '#position_cue_setting'},
        {include: '#size_cue_setting'},
        {include: '#alignment_cue_setting'},
        {include: '#region_cue_setting'}
      ]
    },
    cue_text: {
      name: 'meta.cue-text.vtt',
      patterns: [{include: '#cue_components'}, {include: 'text.html.basic'}]
    },
    cue_text_span: {name: 'meta.cue-text-span.vtt'},
    cue_timestamp: {name: 'meta.cue-timestamp.vtt'},
    cue_timings: {
      captures: {
        1: {
          patterns: [
            {include: '#timestamp'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        },
        2: {name: 'punctuation.separator.vtt'},
        3: {
          patterns: [
            {include: '#timestamp'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(?:^|\\G)(.+?)\\s+(-->)\\s+(.+?)(?=$)',
      name: 'meta.cue-timings.vtt'
    },
    cue_underline_span: {name: 'meta.cue-underline-span.vtt'},
    cue_voice_span: {name: 'meta.cue-voice-span.vtt'},
    file_body: {
      begin: '^(WEBVTT)(?:\\s+(.*))?$',
      beginCaptures: {
        1: {name: 'entity.name.section.webvtt.vtt'},
        2: {name: 'comment.line.character.vtt'}
      },
      name: 'meta.file-body.vtt',
      patterns: [
        {include: '#region_definition_block'},
        {include: '#style_block'},
        {include: '#comment_block'},
        {include: '#cue_block'}
      ]
    },
    html_character_reference: {name: 'meta.html-character-reference.vtt'},
    line_cue_setting: {
      captures: {
        1: {name: 'support.type.line-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              captures: {
                1: {
                  patterns: [
                    {
                      match: '(?:^|\\G)-?\\d+(?=$)',
                      name: 'constant.numeric.line-cue-setting.vtt'
                    },
                    {include: '#percentage'},
                    {match: '.+', name: 'invalid.illegal.vtt'}
                  ]
                },
                2: {name: 'punctuation.separator.comma.vtt'},
                3: {
                  patterns: [
                    {
                      match: '(?:^|\\G)(?:start|center|end)(?=$)',
                      name: 'support.constant.line-cue-setting.vtt'
                    },
                    {match: '.+', name: 'invalid.illegal.vtt'}
                  ]
                }
              },
              match: '(?:^|\\G)(.+?)(?:(,)(.+))?(?=$)'
            }
          ]
        }
      },
      match: '(line)(:)([^\\s]+)',
      name: 'meta.line-cue-setting.vtt'
    },
    percentage: {
      captures: {0: {name: 'constant.numeric.percentage.vtt'}},
      match: '(?:^|\\G)\\d+(?:\\.\\d+)?%(?=$)',
      name: 'meta.percentage.vtt'
    },
    position_cue_setting: {
      captures: {
        1: {name: 'support.type.position-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              captures: {
                1: {
                  patterns: [
                    {include: '#percentage'},
                    {match: '.+', name: 'invalid.illegal.vtt'}
                  ]
                },
                2: {name: 'punctuation.separator.comma.vtt'},
                3: {
                  patterns: [
                    {
                      match: '(?:^|\\G)(?:line-left|center|line-right)(?=$)',
                      name: 'support.constant.position-cue-setting.vtt'
                    },
                    {match: '.+', name: 'invalid.illegal.vtt'}
                  ]
                }
              },
              match: '(?:^|\\G)(.+?)(?:(,)(.+))?(?=$)'
            }
          ]
        }
      },
      match: '(position)(:)([^\\s]+)',
      name: 'meta.position-cue-setting.vtt'
    },
    region_anchor_setting: {
      captures: {
        1: {name: 'support.type.region-anchor-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#percentage'}]},
                2: {name: 'punctuation.separator.comma.vtt'},
                3: {patterns: [{include: '#percentage'}]}
              },
              match: '(.+)(,)(.+)'
            },
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(regionanchor)(:)([^\\s]+)',
      name: 'meta.region-anchor-setting.vtt'
    },
    region_cue_setting: {
      captures: {
        1: {name: 'support.type.region-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {match: '.*-->.*', name: 'invalid.illegal.vtt'},
            {match: '[^\\s]+', name: 'string.unquoted.region-cue-setting.vtt'}
          ]
        }
      },
      match: '(region)(:)([^\\s]+)',
      name: 'meta.region-cue-setting.vtt'
    },
    region_definition_block: {
      begin: '^(REGION)\\s*',
      beginCaptures: {1: {name: 'entity.name.section.region.vtt'}},
      end: '^$',
      name: 'meta.region-definition-block.vtt',
      patterns: [{include: '#region_settings_list'}]
    },
    region_identifier_setting: {
      captures: {
        1: {name: 'support.type.region-identifier-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {match: '.*-->.*', name: 'invalid.illegal.vtt'},
            {
              match: '[^\\s]+',
              name: 'string.unquoted.region-identifier-setting.vtt'
            }
          ]
        }
      },
      match: '(id)(:)([^\\s]+)',
      name: 'meta.region-identifier-setting.vtt'
    },
    region_lines_setting: {
      captures: {
        1: {name: 'support.type.region-lines-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {match: '\\d+', name: 'constant.numeric.region-lines-setting.vtt'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(lines)(:)([^\\s]+)',
      name: 'meta.region-lines-setting.vtt'
    },
    region_scroll_setting: {
      captures: {
        1: {name: 'support.type.region-scroll-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              match: '(?:^|\\G)up(?=$)',
              name: 'support.constant.region-scroll-setting.vtt'
            },
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(scroll)(:)([^\\s]+)',
      name: 'meta.region-scroll-setting.vtt'
    },
    region_settings_list: {
      name: 'meta.region-settings-list.vtt',
      patterns: [
        {include: '#region_identifier_setting'},
        {include: '#region_width_setting'},
        {include: '#region_lines_setting'},
        {include: '#region_anchor_setting'},
        {include: '#region_viewport_anchor_setting'},
        {include: '#region_scroll_setting'}
      ]
    },
    region_viewport_anchor_setting: {
      captures: {
        1: {name: 'support.type.region-viewport-anchor-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#percentage'}]},
                2: {name: 'punctuation.separator.comma.vtt'},
                3: {patterns: [{include: '#percentage'}]}
              },
              match: '(.*)(,)(.*)'
            },
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(viewportanchor)(:)([^\\s]+)',
      name: 'meta.region-viewport-anchor-setting.vtt'
    },
    region_width_setting: {
      captures: {
        1: {name: 'support.type.region-width-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {include: '#percentage'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(width)(:)([^\\s]+)',
      name: 'meta.region-width-setting.vtt'
    },
    size_cue_setting: {
      captures: {
        1: {name: 'support.type.size-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {include: '#percentage'},
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(size)(:)([^\\s]+)',
      name: 'meta.size-cue-setting.vtt'
    },
    style_block: {
      begin: '^(STYLE)\\s*',
      beginCaptures: {1: {name: 'entity.name.section.style.vtt'}},
      end: '^$',
      name: 'meta.style-block.vtt',
      patterns: [
        {match: '.*-->.*', name: 'invalid.illegal.vtt'},
        {include: 'source.css'}
      ]
    },
    timestamp: {
      captures: {
        1: {name: 'constant.numeric.time.hour.vtt'},
        2: {name: 'punctuation.separator.colon.vtt'},
        3: {name: 'constant.numeric.time.minute.vtt'},
        4: {name: 'punctuation.separator.colon.vtt'},
        5: {name: 'constant.numeric.time.second.vtt'}
      },
      match: '(?:^|\\G)(?:(\\d{2,})(:))?([0-5]\\d)(:)([0-5]\\d\\.\\d{3})(?=$)',
      name: 'meta.timestamp.vtt'
    },
    vertical_text_cue_setting: {
      captures: {
        1: {name: 'support.type.vertical-text-cue-setting.vtt'},
        2: {name: 'punctuation.definition.colon.vtt'},
        3: {
          patterns: [
            {
              match: '(?:^|\\G)(?:rl|lr)(?=$)',
              name: 'support.constant.vertical-text-cue-setting.vtt'
            },
            {match: '.+', name: 'invalid.illegal.vtt'}
          ]
        }
      },
      match: '(vertical)(:)([^\\s]+)',
      name: 'meta.vertical-text-cue-setting.vtt'
    }
  },
  scopeName: 'source.vtt'
}

export default grammar
