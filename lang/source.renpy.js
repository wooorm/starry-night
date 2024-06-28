// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/williamd1k0/language-renpy>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.regexp.python'],
  extensions: [],
  names: ["ren'py", 'renpy'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.python.renpy'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.python.renpy'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.python.renpy'
        }
      ]
    },
    {
      match: '\\b(?i:(0x[[:xdigit:]]*)L)',
      name: 'constant.numeric.integer.long.hexadecimal.python.renpy'
    },
    {
      match: '\\b(?i:(0x[[:xdigit:]]*))',
      name: 'constant.numeric.integer.hexadecimal.python.renpy'
    },
    {
      match: '\\b(?i:(0[0-7]+)L)',
      name: 'constant.numeric.integer.long.octal.python.renpy'
    },
    {
      match: '\\b(0[0-7]+)',
      name: 'constant.numeric.integer.octal.python.renpy'
    },
    {
      match:
        '\\b(?i:(((\\d+(\\.(?=[^a-zA-Z_])\\d*)?|(?<=[^0-9a-zA-Z_])\\.\\d+)(e[\\-\\+]?\\d+)?))J)',
      name: 'constant.numeric.complex.python.renpy'
    },
    {
      match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^a-zA-Z_])',
      name: 'constant.numeric.float.python.renpy'
    },
    {
      match: '(?<=[^0-9a-zA-Z_])(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))',
      name: 'constant.numeric.float.python.renpy'
    },
    {
      match: '\\b(?i:(\\d+e[\\-\\+]?\\d+))',
      name: 'constant.numeric.float.python.renpy'
    },
    {
      match: '\\b(?i:([1-9]+[0-9]*|0)L)',
      name: 'constant.numeric.integer.long.decimal.python.renpy'
    },
    {
      match: '\\b([1-9]+[0-9]*|0)',
      name: 'constant.numeric.integer.decimal.python.renpy'
    },
    {
      captures: {1: {name: 'storage.modifier.global.python.renpy'}},
      match: '\\b(global)\\b'
    },
    {
      captures: {1: {name: 'storage.modifier.nonlocal.python.renpy'}},
      match: '\\b(nonlocal)\\b'
    },
    {
      captures: {
        1: {name: 'keyword.control.import.python.renpy'},
        2: {name: 'keyword.control.import.from.python.renpy'}
      },
      match: '\\b(?:(import)|(from))\\b'
    },
    {
      match: '\\b(if|elif|else)\\b',
      name: 'keyword.control.conditional.python.renpy'
    },
    {
      match: '\\b(except|finally|try|raise)\\b',
      name: 'keyword.control.exception.python.renpy'
    },
    {match: '\\b(for|while)\\b', name: 'keyword.control.repeat.python.renpy'},
    {
      captures: {1: {name: 'keyword.other.python.renpy'}},
      match: '\\b(assert|del|exec|print|match|case|async|await)\\b'
    },
    {match: '<>', name: 'invalid.deprecated.operator.python.renpy'},
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.python.renpy'
    },
    {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.python.renpy'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|/|//|%|@|<<|>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.python.renpy'
    },
    {match: '\\=|\\:\\=', name: 'keyword.operator.assignment.python.renpy'},
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.section.python.renpy.label.renpy'}
      },
      match: '^\\s*(label)\\s*([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.section.python.renpy.menu.renpy'}
      },
      match: '^\\s*(menu)\\s*([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.class.python.renpy.screen.renpy'}
      },
      match: '^\\s*(screen)\\s*([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.class.image.python.renpy'}
      },
      match: '^\\s*(image)\\s+([a-zA-Z_0-9 ]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.section.python.renpy.transform.renpy'}
      },
      match: '^\\s*(transform)\\s+([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'entity.name.tag.python.renpy.style.renpy'}
      },
      match: '^\\s*(style)\\s+([a-zA-Z_][a-zA-Z_0-9]*)'
    },
    {
      captures: {
        1: {name: 'keyword.python.renpy'},
        2: {name: 'meta.definition.variable.python.renpy.renpy'}
      },
      match: '^\\s*(define|default)\\s+([a-zA-Z_0-9\\.]*)'
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\:)',
      beginCaptures: {1: {name: 'storage.type.class.python.renpy'}},
      contentName: 'entity.name.type.class.python.renpy',
      end: '\\s*(:)',
      endCaptures: {1: {name: 'punctuation.section.class.begin.python.renpy'}},
      name: 'meta.class.old-style.python.renpy',
      patterns: [{include: '#entity_name_class'}]
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.class.python.renpy'}},
      end: '(\\))\\s*(?:(\\:)|(.*$\\n?))',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.end.python.renpy'},
        2: {name: 'punctuation.section.class.begin.python.renpy'},
        3: {name: 'invalid.illegal.missing-section-begin.python.renpy'}
      },
      name: 'meta.class.python.renpy',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.python.renpy',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_class'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.inheritance.begin.python.renpy'}
          },
          contentName: 'meta.class.inheritance.python.renpy',
          end: '(?=\\)|:)',
          patterns: [
            {
              begin: '(?<=\\(|,)\\s*',
              contentName: 'entity.other.inherited-class.python.renpy',
              end: '\\s*(?:(,)|(?=\\)))',
              endCaptures: {
                1: {name: 'punctuation.separator.inheritance.python.renpy'}
              },
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9])',
      beginCaptures: {1: {name: 'storage.type.class.python.renpy'}},
      end: '(\\()|(\\s*$\\n?|#.*$\\n?)',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.begin.python.renpy'},
        2: {name: 'invalid.illegal.missing-inheritance.python.renpy'}
      },
      name: 'meta.class.python.renpy',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.python.renpy',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin: '^\\s*(def)\\s+(?=[A-Za-z_][A-Za-z0-9_]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.function.python.renpy'}},
      end: '(\\))\\s*(?:(\\:)|(.*$\\n?))',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.python.renpy'},
        2: {name: 'punctuation.section.function.begin.python.renpy'},
        3: {name: 'invalid.illegal.missing-section-begin.python.renpy'}
      },
      name: 'meta.function.python.renpy',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.python.renpy',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.python.renpy'}
          },
          contentName: 'meta.function.parameters.python.renpy',
          end: '(?=\\)\\s*\\:)',
          patterns: [
            {include: '#keyword_arguments'},
            {
              captures: {
                1: {name: 'variable.parameter.function.python.renpy'},
                2: {name: 'punctuation.separator.parameters.python.renpy'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)]))'
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(def)\\s+(?=[A-Za-z_][A-Za-z0-9_]*)',
      beginCaptures: {1: {name: 'storage.type.function.python.renpy'}},
      end: '(\\()|\\s*($\\n?|#.*$\\n?)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.python.renpy'},
        2: {name: 'invalid.illegal.missing-parameters.python.renpy'}
      },
      name: 'meta.function.python.renpy',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.python.renpy',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin: '(lambda)(?=\\s+)',
      beginCaptures: {1: {name: 'storage.type.function.inline.python.renpy'}},
      end: '(\\:)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.python.renpy'},
        2: {name: 'punctuation.section.function.begin.python.renpy'},
        3: {name: 'invalid.illegal.missing-section-begin.python.renpy'}
      },
      name: 'meta.function.inline.python.renpy',
      patterns: [
        {
          begin: '\\s+',
          contentName: 'meta.function.inline.parameters.python.renpy',
          end: '(?=\\:)',
          patterns: [
            {include: '#keyword_arguments'},
            {
              captures: {
                1: {name: 'variable.parameter.function.python.renpy'},
                2: {name: 'punctuation.separator.parameters.python.renpy'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)\\:]))'
            }
          ]
        }
      ]
    },
    {
      captures: {1: {name: 'storage.type.function.python.renpy'}},
      match: '\\b(def|lambda)\\b'
    },
    {
      captures: {1: {name: 'storage.type.class.python.renpy'}},
      match: '\\b(class)\\b'
    },
    {match: '\\$', name: 'keyword.python.renpy'},
    {
      match:
        '\\b(\\$|add|always|and|animation|as|assert|at|attribute|auto|bar|behind|block|break|button|call|camera|choice|circles|class|clear|clockwise|contains|continue|counterclockwise|def|default|define|del|dismiss|drag|draggroup|elif|else|event|except|exec|expression|finally|fixed|for|frame|from|function|global|grid|group|has|hbox|hide|hotbar|hotspot|if|image|imagebutton|imagemap|import|in|index|init|input|is|jump|key|knot|label|lambda|layeredimage|menu|monologue|mousearea|music|nearrect|new|nointeract|not|null|nvl|offset|old|on|onlayer|or|parallel|pass|pause|play|print|python|queue|raise|repeat|return|rpy|scene|screen|show|showif|side|sound|stop|strings|style|sustain|tag|take|testcase|text|textbutton|time|timer|transclude|transform|translate|try|use|vbar|vbox|viewport|voice|vpgrid|while|window|with|yield|zorder)\\b',
      name: 'keyword.python.renpy'
    },
    {
      match:
        '\\b((?:action|activate_sound|activated|adjustment|allow|allow_underfull|alpha|alt|alternate|alternate_keysym|arguments|arrowkeys|at|auto|cache|caption|capture|caret_blink|changed|child_size|clicked|cols|copypaste|default|default_focus|drag_handle|drag_joined|drag_name|drag_offscreen|drag_raise|draggable|dragged|dragging|drop_allowable|droppable|dropped|edgescroll|exclude|focus|focus_mask|ground|height|hover|hovered|icon_tooltip|id|idle|image_style|insensitive|keysym|layer|length|mask|min_overlap|modal|mouse_drop|mousewheel|pagekeys|pixel_width|predict|prefer_top|prefix|properties|range|rect|released|repeat|roll_forward|rows|scope|scrollbars|selected|selected_hover|selected_idle|selected_insensitive|sensitive|slow|slow_done|spacing|style|style_group|style_prefix|style_suffix|substitute|suffix|text_style|text_tooltip|tooltip|transpose|unhovered|value|variant|width|xadjustment|xinitial|yadjustment|yinitial|zorder))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      match:
        '\\b((?:|activate_|hover_|idle_|insensitive_|selected_|selected_activate_|selected_hover_|selected_idle_|selected_insensitive_)(?:additive|adjust_spacing|align|alignaround|alpha|alt|anchor|angle|antialias|area|around|background|bar_invert|bar_resizing|bar_vertical|base_bar|black_color|blend|blur|bold|bottom_bar|bottom_gutter|bottom_margin|bottom_padding|box_layout|box_reverse|box_wrap|box_wrap_spacing|caret|child|clipping|color|corner1|corner2|crop|crop_relative|debug|delay|drop_shadow|drop_shadow_color|events|first_indent|first_spacing|fit|fit_first|focus_mask|font|foreground|gl_anisotropic|gl_blend_func|gl_color_mask|gl_depth|gl_drawable_resolution|gl_mipmap|gl_pixel_perfect|gl_texture_scaling|gl_texture_wrap|hinting|hyperlink_functions|italic|justify|kerning|key_events|keyboard_focus|language|layout|left_bar|left_gutter|left_margin|left_padding|line_leading|line_spacing|margin|matrixanchor|matrixcolor|matrixtransform|maximum|maxsize|mesh|mesh_pad|min_width|minimum|minwidth|mipmap|modal|mouse|nearest|newline_indent|offset|order_reverse|outline_scaling|outlines|padding|perspective|pos|radius|rest_indent|right_bar|right_gutter|right_margin|right_padding|rotate|rotate_pad|ruby_style|shader|size|size_group|slow_abortable|slow_cps|slow_cps_multiplier|sound|spacing|strikethrough|subpixel|text_align|text_y_fudge|thumb|thumb_offset|thumb_shadow|top_bar|top_gutter|top_margin|top_padding|transform_anchor|underline|unscrollable|vertical|xalign|xanchor|xanchoraround|xaround|xcenter|xfill|xfit|xmargin|xmaximum|xminimum|xoffset|xpadding|xpan|xpos|xsize|xspacing|xtile|xycenter|xysize|xzoom|yalign|yanchor|yanchoraround|yaround|ycenter|yfill|yfit|ymargin|ymaximum|yminimum|yoffset|ypadding|ypan|ypos|ysize|yspacing|ytile|yzoom|zoom|zpos|zzoom))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      match:
        '\\b((?:vscrollbar_|scrollbar_)(?:|activate_|hover_|idle_|insensitive_|selected_|selected_activate_|selected_hover_|selected_idle_|selected_insensitive_)(?:align|alt|anchor|area|bar_invert|bar_resizing|bar_vertical|base_bar|bottom_bar|bottom_gutter|clipping|debug|keyboard_focus|left_bar|left_gutter|maximum|minimum|mouse|offset|pos|right_bar|right_gutter|thumb|thumb_offset|thumb_shadow|top_bar|top_gutter|unscrollable|xalign|xanchor|xcenter|xfill|xmaximum|xminimum|xoffset|xpos|xsize|xysize|yalign|yanchor|ycenter|yfill|ymaximum|yminimum|yoffset|ypos|ysize))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      match:
        '\\b(side_(?:|activate_|hover_|idle_|insensitive_|selected_|selected_activate_|selected_hover_|selected_idle_|selected_insensitive_)(?:align|alt|anchor|area|clipping|debug|maximum|minimum|offset|pos|spacing|xalign|xanchor|xcenter|xfill|xmaximum|xminimum|xoffset|xpos|xsize|xysize|yalign|yanchor|ycenter|yfill|ymaximum|yminimum|yoffset|ypos|ysize))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      match:
        '\\b(text_(?:|activate_|hover_|idle_|insensitive_|selected_|selected_activate_|selected_hover_|selected_idle_|selected_insensitive_)(?:adjust_spacing|align|alt|anchor|antialias|area|black_color|bold|clipping|color|debug|drop_shadow|drop_shadow_color|first_indent|font|hinting|hyperlink_functions|italic|justify|kerning|language|layout|line_leading|line_spacing|maximum|min_width|minimum|minwidth|mipmap|newline_indent|offset|outline_scaling|outlines|pos|rest_indent|ruby_style|size|slow_abortable|slow_cps|slow_cps_multiplier|strikethrough|text_align|text_y_fudge|underline|vertical|xalign|xanchor|xcenter|xfill|xmaximum|xminimum|xoffset|xpos|xsize|xysize|yalign|yanchor|ycenter|yfill|ymaximum|yminimum|yoffset|ypos|ysize))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      match:
        '\\b(viewport_(?:|activate_|hover_|idle_|insensitive_|selected_|selected_activate_|selected_hover_|selected_idle_|selected_insensitive_)(?:align|alt|anchor|area|clipping|debug|maximum|minimum|offset|pos|xalign|xanchor|xcenter|xfill|xmaximum|xminimum|xoffset|xpos|xsize|xysize|yalign|yanchor|ycenter|yfill|ymaximum|yminimum|yoffset|ypos|ysize))\\b',
      name: 'entity.other.attribute-name.python.renpy'
    },
    {
      begin:
        '^\\s*(?=@\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.python.renpy'}
      },
      name: 'meta.function.decorator.python.renpy',
      patterns: [
        {
          begin:
            '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.decorator.python.renpy'}
          },
          contentName: 'entity.name.function.decorator.python.renpy',
          end: '(?=\\s*\\()',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.python.renpy'}
          },
          contentName: 'meta.function.decorator.arguments.python.renpy',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin:
        '^\\s*(?=@\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*)',
      contentName: 'entity.name.function.decorator.python.renpy',
      end: '(?=\\s|$\\n?|#)',
      name: 'meta.function.decorator.python.renpy',
      patterns: [
        {
          begin:
            '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*(\\.[A-Za-z_][A-Za-z0-9_]*)*)',
          beginCaptures: {
            1: {name: 'punctuation.definition.decorator.python.renpy'}
          },
          end: '(?=\\s|$\\n?|#)',
          patterns: [{include: '#dotted_name'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.python.renpy'}
      },
      contentName: 'meta.function-call.arguments.python.renpy',
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.python.renpy'}
      },
      name: 'meta.function-call.python.renpy',
      patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.python.renpy'}
      },
      name: 'meta.function-call.python.renpy',
      patterns: [
        {
          begin:
            '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          end: '(?=\\s*\\()',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.python.renpy'}
          },
          contentName: 'meta.function-call.arguments.python.renpy',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\[)',
      end: '(\\])',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.python.renpy'}
      },
      name: 'meta.item-access.python.renpy',
      patterns: [
        {
          begin:
            '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\[)',
          end: '(?=\\s*\\[)',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.python.renpy'}
          },
          contentName: 'meta.item-access.arguments.python.renpy',
          end: '(?=\\])',
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.python.renpy'}
      },
      contentName: 'meta.item-access.arguments.python.renpy',
      end: '(\\])',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.python.renpy'}
      },
      name: 'meta.item-access.python.renpy',
      patterns: [{include: '$self'}]
    },
    {include: '#line_continuation'},
    {include: '#language_variables'},
    {
      match: '\\b(None|True|False|Ellipsis|NotImplemented)\\b',
      name: 'constant.language.python.renpy'
    },
    {include: '#string_quoted_single'},
    {include: '#string_quoted_double'},
    {include: '#dotted_name'},
    {begin: '(\\()', end: '(\\))', patterns: [{include: '$self'}]},
    {
      captures: {
        1: {name: 'punctuation.definition.list.begin.python.renpy'},
        2: {name: 'meta.empty-list.python.renpy'},
        3: {name: 'punctuation.definition.list.end.python.renpy'}
      },
      match: '(\\[)(\\s*(\\]))\\b'
    },
    {
      begin: '(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.list.begin.python.renpy'}
      },
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.list.end.python.renpy'}},
      name: 'meta.structure.list.python.renpy',
      patterns: [
        {
          begin: '(?<=\\[|\\,)\\s*(?![\\],])',
          contentName: 'meta.structure.list.item.python.renpy',
          end: '\\s*(?:(,)|(?=\\]))',
          endCaptures: {1: {name: 'punctuation.separator.list.python.renpy'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.tuple.begin.python.renpy'},
        2: {name: 'meta.empty-tuple.python.renpy'},
        3: {name: 'punctuation.definition.tuple.end.python.renpy'}
      },
      match: '(\\()(\\s*(\\)))',
      name: 'meta.structure.tuple.python.renpy'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.dictionary.begin.python.renpy'},
        2: {name: 'meta.empty-dictionary.python.renpy'},
        3: {name: 'punctuation.definition.dictionary.end.python.renpy'}
      },
      match: '(\\{)(\\s*(\\}))',
      name: 'meta.structure.dictionary.python.renpy'
    },
    {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.dictionary.begin.python.renpy'}
      },
      end: '(\\})',
      endCaptures: {
        1: {name: 'punctuation.definition.dictionary.end.python.renpy'}
      },
      name: 'meta.structure.dictionary.python.renpy',
      patterns: [
        {
          begin: '(?<=\\{|\\,|^)\\s*(?![\\},])',
          contentName: 'meta.structure.dictionary.key.python.renpy',
          end: '\\s*(?:(?=\\})|(\\:))',
          endCaptures: {
            1: {name: 'punctuation.separator.valuepair.dictionary.python.renpy'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=\\:|^)\\s*',
          contentName: 'meta.structure.dictionary.value.python.renpy',
          end: '\\s*(?:(?=\\})|(,))',
          endCaptures: {
            1: {name: 'punctuation.separator.dictionary.python.renpy'}
          },
          patterns: [{include: '$self'}]
        }
      ]
    }
  ],
  repository: {
    builtin_exceptions: {
      match:
        '(?x)\\b(\n\t\t\t\t(\n\t\t\t\t\tArithmetic|Assertion|Attribute|BlockingIO|BrokenPipe|Buffer|ChildProcess|\n\t\t\t\t\tConnection(Aborted|Refused|Reset)?|EOF|Environment|FileExists|\n\t\t\t\t\tFileNotFound|FloatingPoint|Interrupted|IO|IsADirectoryError|\n\t\t\t\t\tImport|Indentation|Index|Key|Lookup|Memory|Name|NotADirectory|\n\t\t\t\t\tNotImplemented|OS|Overflow|Permission|ProcessLookup|Reference|\n\t\t\t\t\tRuntime|Standard|Syntax|System|Tab|Timeout|Type|UnboundLocal|\n\t\t\t\t\tUnicode(Encode|Decode|Translate)?|Value|VMS|Windows|ZeroDivision\n\t\t\t\t)Error|\n\t\t\t\t((Pending)?Deprecation|Runtime|Syntax|User|Future|Import|Unicode|Bytes)?Warning|\n\t\t\t\t(Base)?Exception|\n\t\t\t\tSystemExit|StopIteration|NotImplemented|KeyboardInterrupt|GeneratorExit\n\t\t\t)\\b',
      name: 'support.type.exception.python.renpy'
    },
    builtin_functions: {
      match:
        '(?x)\\b(\n\t\t\t\t__import__|all|abs|any|apply|ascii|bin|callable|chr|classmethod|cmp|coerce|\n\t\t\t\tcompile|delattr|dir|divmod|enumerate|eval|execfile|filter|format|getattr|\n\t\t\t\tglobals|hasattr|hash|help|hex|id|input|intern|isinstance|issubclass|iter|\n\t\t\t\tlen|locals|map|max|min|next|oct|open|ord|pow|print|property|range|\n\t\t\t\traw_input|reduce|reload|repr|reversed|round|setattr|sorted|staticmethod|\n\t\t\t\tsum|super|type|unichr|vars|zip\n\t\t\t)\\b',
      name: 'support.function.builtin.python.renpy'
    },
    builtin_types: {
      match:
        '(?x)\\b(\n\t\t\t\tbasestring|bool|buffer|bytearray|bytes|complex|dict|float|frozenset|int|\n\t\t\t\tlist|long|memoryview|object|range|set|slice|str|tuple|unicode|xrange\n\t\t\t)\\b',
      name: 'support.type.python.renpy'
    },
    constant_placeholder: {
      match: '\\{[^}]*\\}|\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]',
      name: 'constant.other.placeholder.tags.renpy'
    },
    docstrings: {
      patterns: [
        {
          begin: '^\\s*(?=[fuUb]?[rR]?""")',
          end: '(?<=""")',
          name: 'comment.block.python.renpy',
          patterns: [{include: '#string_quoted_double'}]
        },
        {
          begin: "^\\s*(?=[fuUb]?[rR]?''')",
          end: "(?<=''')",
          name: 'comment.block.python.renpy',
          patterns: [{include: '#string_quoted_single'}]
        }
      ]
    },
    dotted_name: {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*)',
      end: '(?![A-Za-z0-9_\\.])',
      patterns: [
        {
          begin: '(\\.)(?=[A-Za-z_][A-Za-z0-9_]*)',
          end: '(?![A-Za-z0-9_])',
          patterns: [
            {include: '#magic_function_names'},
            {include: '#magic_variable_names'},
            {include: '#illegal_names'},
            {include: '#generic_names'}
          ]
        },
        {
          begin: '(?<!\\.)(?=[A-Za-z_][A-Za-z0-9_]*)',
          end: '(?![A-Za-z0-9_])',
          patterns: [
            {include: '#builtin_functions'},
            {include: '#builtin_types'},
            {include: '#builtin_exceptions'},
            {include: '#illegal_names'},
            {include: '#magic_function_names'},
            {include: '#magic_variable_names'},
            {include: '#language_variables'},
            {include: '#generic_names'}
          ]
        }
      ]
    },
    entity_name_class: {
      patterns: [{include: '#illegal_names'}, {include: '#generic_names'}]
    },
    entity_name_function: {
      patterns: [
        {include: '#magic_function_names'},
        {include: '#illegal_names'},
        {include: '#generic_names'}
      ]
    },
    escaped_char: {
      captures: {
        1: {name: 'constant.character.escape.hex.python.renpy'},
        10: {name: 'constant.character.escape.linefeed.python.renpy'},
        11: {name: 'constant.character.escape.return.python.renpy'},
        12: {name: 'constant.character.escape.tab.python.renpy'},
        13: {name: 'constant.character.escape.vertical-tab.python.renpy'},
        2: {name: 'constant.character.escape.octal.python.renpy'},
        3: {name: 'constant.character.escape.newline.python.renpy'},
        4: {name: 'constant.character.escape.backlash.python.renpy'},
        5: {name: 'constant.character.escape.double-quote.python.renpy'},
        6: {name: 'constant.character.escape.single-quote.python.renpy'},
        7: {name: 'constant.character.escape.bell.python.renpy'},
        8: {name: 'constant.character.escape.backspace.python.renpy'},
        9: {name: 'constant.character.escape.formfeed.python.renpy'}
      },
      match:
        '(\\\\x[0-9A-F]{2})|(\\\\[0-7]{3})|(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    escaped_placeholder: {
      match: '\\{\\{|\\[\\[',
      name: 'constant.character.escape.placeholder.python.renpy'
    },
    escaped_unicode_char: {
      captures: {
        1: {name: 'constant.character.escape.unicode.16-bit-hex.python.renpy'},
        2: {name: 'constant.character.escape.unicode.32-bit-hex.python.renpy'},
        3: {name: 'constant.character.escape.unicode.name.python.renpy'}
      },
      match:
        '(\\\\U[0-9A-Fa-f]{8})|(\\\\u[0-9A-Fa-f]{4})|(\\\\N\\{[a-zA-Z ]+\\})'
    },
    function_name: {
      patterns: [
        {include: '#magic_function_names'},
        {include: '#magic_variable_names'},
        {include: '#builtin_exceptions'},
        {include: '#builtin_functions'},
        {include: '#builtin_types'},
        {include: '#generic_names'}
      ]
    },
    generic_names: {match: '[A-Za-z_][A-Za-z0-9_]*'},
    illegal_names: {
      match:
        '\\b(and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|global|if|import|in|is|lambda|nonlocal|not|or|print|raise|try|while|with|yield)\\b',
      name: 'invalid.illegal.name.python.renpy'
    },
    keyword_arguments: {
      begin: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(=)(?!=)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.python.renpy'},
        2: {name: 'keyword.operator.assignment.python.renpy'}
      },
      end: '\\s*(?:(,)|(?=$\\n?|[\\)\\:]))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.python.renpy'}},
      patterns: [{include: '$self'}]
    },
    language_variables: {
      match: '\\b(self|cls)\\b',
      name: 'variable.language.python.renpy'
    },
    line_continuation: {
      captures: {
        1: {name: 'punctuation.separator.continuation.line.python.renpy'},
        2: {name: 'invalid.illegal.unexpected-text.python.renpy'}
      },
      match: '(\\\\)(.*)$\\n?'
    },
    magic_function_names: {
      match:
        '(?x)\\b(__(?:abs|add|and|cmp|coerce|complex|contains|del|delattr|delete|delitem|delslice|div|divmod|enter|eq|exit|float|floordiv|ge|get|getattr|getattribute|getitem|getslice|gt|hash|hex|iadd|iand|idiv|ifloordiv|ilshift|imod|imul|init|int|invert|ior|ipow|irshift|isub|iter|itruediv|ixor|le|len|long|lshift|lt|mod|mul|ne|neg|new|nonzero|oct|or|pos|pow|radd|rand|rdiv|rdivmod|repr|rfloordiv|rlshift|rmod|rmul|ror|rpow|rrshift|rshift|rsub|rtruediv|rxor|set|setattr|setitem|setslice|str|sub|truediv|unicode|xor)__)\\b',
      name: 'support.function.magic.python.renpy'
    },
    magic_variable_names: {
      match:
        '\\b__(all|bases|class|debug|dict|doc|file|members|metaclass|methods|name|slots|weakref)__\\b',
      name: 'support.variable.magic.python.renpy'
    },
    regular_expressions: {patterns: [{include: 'source.regexp.python'}]},
    string_quoted_double: {
      patterns: [
        {
          begin: '([fuUb]r)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.unicode-raw-regex.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '([fuUb]R)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.unicode-raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(r)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.raw-regex.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '(R)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '([fuUb])(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.unicode.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'},
            3: {
              patterns: [
                {include: '#escaped_placeholder'},
                {include: '#constant_placeholder'},
                {include: '#escaped_unicode_char'},
                {include: '#escaped_char'},
                {include: '#regular_expressions'}
              ]
            },
            4: {name: 'punctuation.definition.string.end.python.renpy'}
          },
          match: '([fuUb]r)(")((?:[^"\\\\]|\\\\.)*)(")',
          name: 'string.quoted.double.single-line.unicode-raw-regex.python.renpy'
        },
        {
          begin: '([fuUb]R)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=")(")|")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'},
            3: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.double.single-line.unicode-raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'},
            3: {
              patterns: [
                {include: '#escaped_placeholder'},
                {include: '#constant_placeholder'},
                {include: '#escaped_char'},
                {include: '#regular_expressions'}
              ]
            },
            4: {name: 'punctuation.definition.string.end.python.renpy'}
          },
          match: '(r)(")((?:[^"\\\\]|\\\\.)*)(")',
          name: 'string.quoted.double.single-line.raw-regex.python.renpy'
        },
        {
          begin: '(R)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'},
            3: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.double.single-line.raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '([fuUb])(")',
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=")(")|")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'},
            3: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.double.single-line.unicode.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(""")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'}
          },
          name: 'string.quoted.double.block.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: '((?<=")(")|")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.double.python.renpy'},
            3: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.double.single-line.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    string_quoted_single: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.python.renpy'},
            2: {name: 'punctuation.definition.string.end.python.renpy'},
            3: {name: 'meta.empty-string.single.python.renpy'}
          },
          match: "(?<!')(')(('))(?!')",
          name: 'string.quoted.single.single-line.python.renpy'
        },
        {
          begin: "([fuUb]r)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.unicode-raw-regex.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "([fuUb]R)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.unicode-raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(r)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.raw-regex.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "(R)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "([fuUb])(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.unicode.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'},
            3: {
              patterns: [
                {include: '#escaped_placeholder'},
                {include: '#constant_placeholder'},
                {include: '#escaped_unicode_char'},
                {include: '#escaped_char'},
                {include: '#regular_expressions'}
              ]
            },
            4: {name: 'punctuation.definition.string.end.python.renpy'}
          },
          match: "([fuUb]r)(')((?:[^'\\\\]|\\\\.)*)(')",
          name: 'string.quoted.single.single-line.unicode-raw-regex.python.renpy'
        },
        {
          begin: "([fuUb]R)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "(')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.single.single-line.unicode-raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'},
            3: {
              patterns: [
                {include: '#escaped_placeholder'},
                {include: '#constant_placeholder'},
                {include: '#escaped_char'},
                {include: '#regular_expressions'}
              ]
            },
            4: {name: 'punctuation.definition.string.end.python.renpy'}
          },
          match: "(r)(')((?:[^'\\\\]|\\\\.)*)(')",
          name: 'string.quoted.single.single-line.raw-regex.python.renpy'
        },
        {
          begin: "(R)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.single.single-line.raw.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "([fuUb])(')",
          beginCaptures: {
            1: {name: 'storage.type.string.python.renpy'},
            2: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "(')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.single.single-line.unicode.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(''')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'meta.empty-string.single.python.renpy'}
          },
          name: 'string.quoted.single.block.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.python.renpy'}
          },
          end: "(')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.python.renpy'},
            2: {name: 'invalid.illegal.unclosed-string.python.renpy'}
          },
          name: 'string.quoted.single.single-line.python.renpy',
          patterns: [
            {include: '#escaped_placeholder'},
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {include: '#string_quoted_double'},
        {include: '#string_quoted_single'}
      ]
    }
  },
  scopeName: 'source.renpy'
}

export default grammar
