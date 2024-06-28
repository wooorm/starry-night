// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.styl'],
  names: ['stylus'],
  patterns: [
    {include: '#comments'},
    {
      begin:
        '^\\s*(@(?:import|charset|css|font-face|(?:-webkit-)?keyframes)(?:\\s+([\\w-]+))?)\\b',
      beginCaptures: {
        1: {name: 'keyword.control.at-rule.other.stylus'},
        2: {name: 'variable.other.animation-name.stylus'}
      },
      end: '$|;|(?=\\{)',
      patterns: [{include: '#string-quoted'}]
    },
    {
      begin: '^\\s*(@media)\\s*',
      beginCaptures: {1: {name: 'keyword.control.at-rule.media.stylus'}},
      end: '$|(?=\\{)',
      patterns: [{include: '#media-query'}]
    },
    {
      begin:
        '(?x)\n(?<=^|;|})\n\\s*\n(?=\n    [\\[\\]\'".\\w$-]+\n    \\s*\n    ([?:]?=)\n    (?![^\\[]*\\])\n)\n',
      end: '$|;',
      patterns: [{include: '#expression'}]
    },
    {include: '#iteration'},
    {include: '#conditionals'},
    {include: '#return'},
    {
      begin:
        '(?x)            # multi-line regex definition mode\n\n^(\\s*)          # starts at the beginning of line\n([\\w$-]+)       # identifier (name)\n(\\()            # start of argument list\n(?=\n    .*?\n    \\)\\s*\\{     # we see a curly brace afterwards\n)               # which means this is a function definition\n',
      beginCaptures: {
        2: {name: 'entity.name.function.stylus'},
        3: {name: 'punctuation.definition.parameters.start.stylus'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.stylus'}},
      name: 'meta.function-call.stylus',
      patterns: [{include: '#expression'}]
    },
    {
      begin:
        '(?x)                # multi-line regex definition mode\n(\n\n    (^|;)           # starts at the beginning of line or at a ;\n    \\s*\n    (\\+?\\s*         # for block mixins\n     [\\w$-]+)       # identifier (name)\n    (\\()            # start of argument list\n    (?=\n        .*?\n        \\)\\s*;?\\s*  # if there are only spaces and semicolons\n        $|;         # then this a\n    )\n)\n',
      beginCaptures: {
        3: {name: 'entity.other.attribute-name.mixin.stylus'},
        4: {name: 'punctuation.definition.parameters.start.stylus'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.stylus'}},
      name: 'meta.function-call.stylus',
      patterns: [{include: '#expression'}]
    },
    {
      begin:
        "(?x) # multi-line regex definition mode\n(^|(?<=\\*/|\\}))\\s*\n(?=\n    font(?!\n        \\s*:\\s\n        |\n        -\n        |\n        .*?\n        (?:\n            \\/|normal|bold|light(er?)|serif|sans|monospace|\n            \\b\\d+(?:\\b|px|r?em|%)|\n            var\\s*\\(|\n            ['\"][^\\]]*$\n        )\n    ) | # we need to distinguish between tag and property `cursor`\n    cursor(?!\n        \\s*[:;]\\s\n        |\n        -\n        |\n        .*?\n        (?:\n            (?:url\\s*\\()|\n            (?:-moz-|-webkit-|-ms-)?\n            (?:auto|default|none|context-menu|help|pointer|progress|\n            wait|cell|crosshair|text|vertical-text|alias|copy|\n            move|no-drop|not-allowed|e-resize|n-resize|ne-resize|\n            nw-resize|s-resize|se-resize|sw-resize|w-resize|\n            ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|\n            row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing\n            normal|bold|light(er?)|serif|sans|monospace)\n        )\n    ) | (\n        (\n        altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|\n        animateMotion|animateTransform|circle|clipPath|color-profile|\n        defs|desc|ellipse|feBlend|feColorMatrix|\n        feComponentTransfer|feComposite|feConvolveMatrix|\n        feDiffuseLighting|feDisplacementMap|feDistantLight|feFlood|\n        feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|\n        feMergeNode|feMorphology|feOffset|fePointLight|\n        feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|\n        font-face|font-face-format|font-face-name|font-face-src|\n        font-face-uri|foreignObject|g|glyph|glyphRef|hkern|image|line|\n        linearGradient|marker|mask|metadata|missing-glyph|mpath|path|\n        pattern|polygon|polyline|radialGradient|rect|set|stop|svg|\n        switch|symbol|text|textPath|tref|tspan|use|view|vkern|\n        a|abbr|acronym|address|applet|area|article|aside|audio|b|base|\n        basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|\n        canvas|caption|center|cite|code|col|colgroup|data|\n        datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|\n        em|embed|fieldset|figcaption|figure|footer|form|frame|\n        frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|\n        img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|\n        main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|\n        noframes|noscript|object|ol|optgroup|option|output|p|param|\n        plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|\n        select|shadow|small|source|spacer|span|strike|strong|style|\n        sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|\n        thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp)\n\n        \\s*([\\s,.#\\[]|:[^\\s]|(?=\\{|$))\n\n    ) | (\n        [:~>\\[*\\/]       # symbols but they are valid for selector\n\n    ) | (\n\n        \\+\\s*[\\w$-]+\\b\\s*      # are an identifier starting with $\n        (?!\\()              # and they can't have anything besides\n\n    ) | (                    # for animtions\n\n        \\d+(\\.\\d+)?%|(from|to)\\b\n\n    ) | (                   # Placeholder selectors\n\n        \\$[\\w$-]+\\b\\s*      # are an identifier starting with $\n        (?=$|\\{)            # and they can't have anything besides\n\n    ) | (                   # CSS class\n\n        \\.[a-zA-Z0-9_-]+\n\n    ) | (                   # CSS id\n\n        \\#[a-zA-Z0-9_-]+\n\n    ) | (                   # Reference to parent\n\n        ([\\w\\d_-]+)?        # matching any word right before &\n        (&)             # & itself, escaped because of plist\n        ([\\w\\d_-]+)?        # matching any word right after &\n    )\n)\n",
      end: '\n|$|(?=\\{\\s*\\}.*$)|(?=\\{.*?[:;])|(?=\\{)(?!.+\\}.*$)',
      name: 'meta.selector.stylus',
      patterns: [
        {include: '#comma'},
        {
          match: '\\d+(\\.\\d+)?%|from|to',
          name: 'entity.other.animation-keyframe.stylus'
        },
        {include: '#selector-components'},
        {match: '.', name: 'entity.other.attribute-name.stylus'}
      ]
    },
    {
      begin:
        "(?x)                # multi-line regex definition mode\n(?<=^|;|{)\\s*    # starts after begining of line, '{' or ';''\n(?=                 # lookahead for\n    (\n     [a-zA-Z0-9_-]  # then a letter\n     |              # or\n     (\\{(.*?)\\})    # interpolation\n     |              # or\n     (/\\*.*?\\*/)    # comment\n    )+\n\n    \\s*[:\\s]\\s*     # value is separted by colon or space\n\n    (?!(\\s*\\{))     # if there are only spaces afterwards\n\n    (?!\n        [^}]*?      # checking for an unclosed curly braces on this\n        \\{          # line because if one exists it means that\n        [^}]*       # this is a selector and not a property\n        ($|\\})\n    )\n)\n",
      end: '(?=\\}|;)|(?<!,)\\s*\\n',
      patterns: [
        {include: '#comments'},
        {include: '#interpolation'},
        {
          begin: '(?<!^|;|{)\\s*(?:(:)|\\s)',
          beginCaptures: {1: {name: 'punctuation.separator.key-value.stylus'}},
          end: '(;)|(?=\\})|(?=(?<!\\,)\\s*\\n)',
          endCaptures: {1: {name: 'punctuation.terminator.rule.stylus'}},
          patterns: [{include: '#comments'}, {include: '#expression'}]
        },
        {
          match: '-(moz|o|ms|webkit|khtml)-',
          name: 'support.type.vendor-prefix.stylus'
        },
        {
          match: '.',
          name: 'meta.property-name.stylus support.type.property-name.stylus'
        }
      ]
    },
    {
      begin: '@extends?\\s',
      beginCaptures: {0: {name: 'keyword.language.stylus'}},
      end: '(?=$|;)',
      patterns: [{include: '#selector-components'}]
    },
    {include: '#string-quoted'},
    {include: '#escape'},
    {include: '#language-constants'},
    {include: '#language-operators'},
    {include: '#language-keywords'},
    {include: '#property-reference'},
    {include: '#function-call'},
    {match: '\\{', name: 'punctuation.section.start.stylus'},
    {match: '\\}', name: 'punctuation.section.end.stylus'}
  ],
  repository: {
    'attribute-selector': {
      begin: '\\[(?=[^\\]]*\\])',
      beginCaptures: {0: {name: 'punctuation.definition.entity.start.stylus'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.entity.end.stylus'}},
      name: 'meta.attribute-selector.stylus',
      patterns: [
        {
          begin: '(?<=\\[)|(?<=\\{)',
          end: '(?=[|~=\\]\\s])',
          patterns: [
            {include: '#interpolation'},
            {
              captures: {0: {name: 'entity.other.attribute-name.stylus'}},
              match: '.'
            }
          ]
        },
        {include: '#interpolation'},
        {captures: {1: {name: 'keyword.operator.stylus'}}, match: '([|~]?=)'},
        {include: '#string-quoted'},
        {captures: {0: {name: 'string.unquoted.stylus'}}, match: '.'}
      ]
    },
    'color-values': {
      patterns: [
        {
          match:
            '\\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)\\b',
          name: 'constant.color.w3c-standard-color-name.stylus'
        },
        {
          begin: '(hsla?|rgba?)\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.language.function.misc.stylus'},
            2: {name: 'punctuation.definition.parameters.start.stylus'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.stylus'}
          },
          patterns: [
            {
              captures: {
                1: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.red.stylus'
                },
                2: {name: 'punctuation.delimiter.comma.stylus'},
                3: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.green.stylus'
                },
                4: {name: 'punctuation.delimiter.comma.stylus'},
                5: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.blue.stylus'
                }
              },
              match:
                '(?x) # multi-line regex definition mode\n\\b\n(?:0*((?:1?[0-9]{1,2})|(?:2(?:[0-4][0-9]|5[0-5])))\\s*(,)\\s*)\n(?:0*((?:1?[0-9]{1,2})|(?:2(?:[0-4][0-9]|5[0-5])))\\s*(,)\\s*)\n(?:0*((?:1?[0-9]{1,2})|(?:2(?:[0-4][0-9]|5[0-5])))\\b)\n'
            },
            {
              captures: {
                1: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.red.stylus'
                },
                2: {name: 'punctuation.delimiter.comma.stylus'},
                3: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.green.stylus'
                },
                4: {name: 'punctuation.delimiter.comma.stylus'},
                5: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.blue.stylus'
                }
              },
              match:
                '(?x) # multi-line regex definition mode\n\\b\n((?:[0-9]{1,2}|100)%)(,) # red\n\\s*\n((?:[0-9]{1,2}|100)%)(,) # green\n\\s*\n((?:[0-9]{1,2}|100)%)    # blue\n'
            },
            {
              captures: {
                1: {name: 'punctuation.delimiter.comma.stylus'},
                2: {
                  name: 'constant.other.color.rgb-value.stylus constant.other.color.rgb-value.alpha.stylus'
                }
              },
              match:
                '(?x) # multi-line regex definition mode\n(?:\\s*(,)\\s*((0?\\.[0-9]+)|[0-1]))?\n'
            },
            {include: '#numeric-values'}
          ]
        },
        {include: '#numeric-values'}
      ]
    },
    comma: {match: '\\s*,\\s*', name: 'punctuation.delimiter.comma.stylus'},
    comments: {
      patterns: [
        {include: '#single-line-comment'},
        {
          begin: '\\/\\*',
          captures: {0: {name: 'punctuation.definition.comment.stylus'}},
          end: '\\*\\/',
          name: 'comment.block.stylus'
        }
      ]
    },
    conditionals: {
      begin: '(^\\s*|\\s+)(if|unless|else)(?=[\\s({]|$)\\s*',
      beginCaptures: {2: {name: 'keyword.control.stylus'}},
      end: '(?=$|\\{)',
      patterns: [{include: '#expression'}]
    },
    escape: {match: '\\\\.', name: 'constant.character.escape.stylus'},
    expression: {
      patterns: [
        {include: '#single-line-comment'},
        {include: '#comma'},
        {include: '#iteration'},
        {include: '#conditionals'},
        {include: '#language-operators'},
        {include: '#language-keywords'},
        {include: '#hash-definition'},
        {include: '#color-values'},
        {include: '#url'},
        {include: '#function-call'},
        {include: '#string-quoted'},
        {include: '#escape'},
        {include: '#hash-access'},
        {include: '#language-constants'},
        {include: '#language-property-value-constants'},
        {include: '#property-reference'},
        {include: '#variable'}
      ]
    },
    'function-call': {
      begin: '([\\w$-]+)(\\()',
      beginCaptures: {
        1: {name: 'entity.function-name.stylus'},
        2: {name: 'punctuation.definition.parameters.start.stylus'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.stylus'}},
      name: 'meta.function-call.stylus',
      patterns: [{include: '#expression'}]
    },
    'hash-access': {
      begin: '(?=[\\w$-]+(?:\\.|\\[[^\\]=]*\\]))',
      end: '(?=[^\'\'""\\[\\]\\w.$-]|\\s|$)',
      name: 'meta.hash-access.stylus',
      patterns: [
        {match: '\\.', name: 'punctuation.delimiter.hash.stylus'},
        {match: '\\[', name: 'punctuation.definition.entity.start.stylus'},
        {match: '\\]', name: 'punctuation.definition.entity.end.stylus'},
        {include: '#string-quoted'},
        {include: '#variable'}
      ]
    },
    'hash-definition': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.start.stylus'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.stylus'}},
      name: 'meta.hash.stylus',
      patterns: [
        {include: '#single-line-comment'},
        {
          begin:
            '(?x)\n(?:\n    ([\\w$-]+)\n    |\n    (\'[^\']*\')\n    |\n    ("[^"]*")\n)\n\\s*\n(:)\n\\s*\n',
          beginCaptures: {
            1: {name: 'support.type.property-name.stylus'},
            2: {name: 'string.quoted.single.stylus'},
            3: {name: 'string.quoted.double.stylus'},
            4: {name: 'punctuation.separator.key-value.stylus'}
          },
          end: '(;)|(?=\\}|$)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.stylus'}},
          patterns: [{include: '#expression'}]
        }
      ]
    },
    interpolation: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.start.stylus'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.stylus'}},
      name: 'stylus.embedded.source',
      patterns: [{include: '#expression'}]
    },
    iteration: {
      begin: '(^\\s*|\\s+)(for)\\s+(?=.*?\\s+in\\s+)',
      beginCaptures: {2: {name: 'keyword.control.stylus'}},
      end: '$|\\{',
      patterns: [{include: '#expression'}]
    },
    'language-constants': {
      match: '\\b(true|false|null)\\b',
      name: 'constant.language.stylus'
    },
    'language-keywords': {
      patterns: [
        {match: '(\\b|\\s)(return|else)\\b', name: 'keyword.control.stylus'},
        {
          match: '(\\b|\\s)(!important|in|is defined|is a)\\b',
          name: 'keyword.other.stylus'
        },
        {match: '\\barguments\\b', name: 'variable.language.stylus'}
      ]
    },
    'language-operators': {
      match:
        '((?:\\?|:|!|~|\\+|-|(?:\\*)?\\*|\\/|%|(\\.)?\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!=)|\\b(?:in|is(?:nt)?|(?<!:)not)\\b)',
      name: 'keyword.operator.stylus'
    },
    'language-property-value-constants': {
      match:
        '\\b(absolute|all(-scroll)?|always|armenian|auto|avoid|baseline|below|bidi-override|block|bold(er)?|(border|content|padding)-box|both|bottom|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|collapse|crosshair|cursive|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ellipsis|fantasy|fixed|geometricPrecision|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|monospace|n-resize|ne-resize|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|optimize(Legibility|Quality|Speed)|outset|outside|overline|pointer|pre(-(wrap|line))?|progress|relative|repeat-x|repeat-y|repeat|right|ridge|row-resize|rtl|(sans-)?serif|s-resize|scroll|se-resize|separate|small-caps|solid|square|static|strict|sub|super|sw-resize|table(-(row|cell|footer-group|header-group))?|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|vertical(-(ideographic|text))?|visible(Painted|Fill|Stroke)?|w-resize|wait|whitespace|zero|smaller|larger|((xx?-)?(small(er)?|large(r)?))|painted|fill|stroke)\\b',
      name: 'constant.property-value.stylus'
    },
    'media-query': {
      patterns: [
        {
          begin: '\\s*(?![{;]|$)',
          end: '\\s*(?=[{;]|$)',
          name: 'meta.at-rule.media.stylus',
          patterns: [
            {
              begin:
                '(?i)\\s*(only|not)?\\s*(all|aural|braille|embossed|handheld|print|projection|screen|tty|tv)?(?![\\w\\d$-]+)',
              beginCaptures: {
                1: {name: 'keyword.operator.logic.media.stylus'},
                2: {name: 'support.constant.media.stylus'}
              },
              end: '\\s*(?:(,)|(?=[{;]|$))',
              patterns: [{include: '#media-query-list'}]
            },
            {include: '#variable'}
          ]
        }
      ]
    },
    'media-query-list': {
      begin: '\\s*(and)?\\s*(\\()\\s*',
      beginCaptures: {
        1: {name: 'keyword.operator.logic.media.stylus'},
        2: {name: 'punctuation.definition.parameters.start.stylus'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.stylus'}},
      patterns: [
        {include: '#media-query-properties'},
        {include: '#numeric-values'}
      ]
    },
    'media-query-properties': {
      patterns: [
        {
          captures: {0: {name: 'punctuation.separator.key-value.stylus'}},
          match: '\\s*:\\s*'
        },
        {
          captures: {0: {name: 'support.type.property-name.media.stylus'}},
          match:
            '(?x)\n(\n    ((min|max)-)?\n    (\n        ((device-)?(height|width|aspect-ratio))|\n        (color(-index)?)|monochrome|resolution\n    )\n)|grid|scan|orientation\n'
        },
        {
          captures: {1: {name: 'support.constant.property-value.stylus'}},
          match: '\\b(portrait|landscape|progressive|interlace)\\b'
        }
      ]
    },
    'numeric-values': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.constant.stylus'},
            2: {name: 'constant.other.color.rgb-value.red.stylus'},
            3: {name: 'constant.other.color.rgb-value.green.stylus'},
            4: {name: 'constant.other.color.rgb-value.blue.stylus'},
            5: {name: 'constant.other.color.rgb-value.alpha.stylus'},
            6: {name: 'constant.other.color.rgb-value.red.stylus'},
            7: {name: 'constant.other.color.rgb-value.green.stylus'},
            8: {name: 'constant.other.color.rgb-value.blue.stylus'},
            9: {name: 'constant.other.color.rgb-value.alpha.stylus'}
          },
          match:
            '(?x) # multi-line regex definition mode\n(\\#)(?:\n        ([0-9a-fA-F])\n        ([0-9a-fA-F])\n        ([0-9a-fA-F])\n        ([0-9a-fA-F])?\n|       ([0-9a-fA-F]{2})\n        ([0-9a-fA-F]{2})\n        ([0-9a-fA-F]{2})\n        ([0-9a-fA-F]{2})?\n)\\b\n',
          name: 'constant.other.color.rgb-value.stylus'
        },
        {
          captures: {1: {name: 'keyword.other.unit.stylus'}},
          match:
            '(?x)                    # multi-line regex definition mode\n(?:-|\\+)?               # negative / positive\n(?:\n    (?:\n        [0-9]+          # integer part\n        (?:\\.[0-9]+)?   # fraction\n    ) |\n    (?:\\.[0-9]+)        # fraction without leading zero\n)\n((?:                    # units\n    px|pt|ch|cm|mm|in|\n    r?em|ex|pc|vw|vh|vmin|vmax|deg|\n    g?rad|turn|dpi|dpcm|dppx|m?s|k?Hz\n)\\b|%)?\n',
          name: 'constant.numeric.stylus'
        }
      ]
    },
    'property-reference': {
      match: '@[a-z-]+',
      name: 'variable.other.property.stylus'
    },
    pseudo: {
      patterns: [
        {
          captures: {1: {name: 'puncutation.definition.entity.stylus'}},
          match:
            '(:)(active|checked|default|disabled|empty|enabled|first-child|first-of-type|first|fullscreen|focus|hover|indeterminate|in-range|invalid|last-child|last-of-type|left|link|only-child|only-of-type|optional|out-of-range|read-only|read-write|required|right|root|scope|target|valid|visited)\\b',
          name: 'entity.other.attribute-name.pseudo-class.stylus'
        },
        {
          captures: {1: {name: 'puncutation.definition.entity.stylus'}},
          match: '(:?:)(before|after)\\b',
          name: 'entity.other.attribute-name.pseudo-element.stylus'
        },
        {
          captures: {1: {name: 'puncutation.definition.entity.stylus'}},
          match: '(::)(first-letter|first-number|selection)\\b',
          name: 'entity.other.attribute-name.pseudo-element.stylus'
        },
        {
          captures: {
            1: {name: 'entity.other.attribute-name.pseudo-element.stylus'},
            2: {name: 'puncutation.definition.entity.stylus'},
            3: {name: 'puncutation.definition.parameters.start.stylus'},
            4: {name: 'constant.language.stylus'},
            5: {name: 'puncutation.definition.parameters.end.stylus'}
          },
          match: '((:)dir)\\s*(?:(\\()(ltr|rtl)?(\\)))?'
        },
        {
          captures: {
            1: {name: 'entity.other.attribute-name.pseudo-element.stylus'},
            2: {name: 'puncutation.definition.entity.stylus'},
            3: {name: 'puncutation.definition.parameters.start.stylus'},
            4: {name: 'constant.language.stylus'},
            5: {name: 'puncutation.definition.parameters.end.stylus'}
          },
          match: '((:)lang)\\s*(?:(\\()(\\w+(-\\w+)?)?(\\)))?'
        },
        {include: '#pseudo-nth'},
        {include: '#pseudo-not'}
      ]
    },
    'pseudo-not': {
      begin: '((:)not)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.pseudo-element.stylus'},
        2: {name: 'puncutation.definition.entity.stylus'},
        3: {name: 'puncutation.definition.parameters.start.stylus'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'puncutation.definition.parameters.end.stylus'}},
      patterns: [{include: '#selector-components'}]
    },
    'pseudo-nth': {
      begin:
        '((:)(?:nth-child|nth-last-child|nth-of-type|nth-last-of-type|nth-match|nth-last-match|nth-column|nth-last-column))\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.pseudo-class.stylus'},
        2: {name: 'puncutation.definition.entity.stylus'},
        3: {name: 'puncutation.definition.parameters.start.stylus'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'puncutation.definition.parameters.end.stylus'}},
      patterns: [
        {include: '#language-operators'},
        {include: '#interpolation'},
        {match: '\\b(odd|even)\\b', name: 'constant.language.stylus'},
        {
          captures: {1: {name: 'constant.numeric.stylus'}},
          match: '\\b(\\d+)?n\\b',
          name: 'variable.language.stylus'
        },
        {match: '\\d+', name: 'constant.numeric.stylus'}
      ]
    },
    return: {
      begin: '^\\s*(return)',
      beginCaptures: {1: {name: 'keyword.control.stylus'}},
      end: '(;)|(?=$)',
      endCaptures: {1: {name: 'punctuation.terminator.statement.stylus'}},
      patterns: [{include: '#expression'}]
    },
    'selector-components': {
      patterns: [
        {include: '#comments'},
        {include: '#interpolation'},
        {include: '#attribute-selector'},
        {include: '#pseudo'},
        {match: '\\$[\\w$-]+\\b', name: 'entity.other.placeholder.stylus'},
        {match: '[:~>]', name: 'keyword.operator.selector.stylus'},
        {
          match:
            '(?x) # multi-line regex definition mode\n\\b(\n    altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|\n    animateMotion|animateTransform|circle|clipPath|color-profile|\n    defs|desc|ellipse|feBlend|feColorMatrix|\n    feComponentTransfer|feComposite|feConvolveMatrix|\n    feDiffuseLighting|feDisplacementMap|feDistantLight|feFlood|\n    feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|\n    feMergeNode|feMorphology|feOffset|fePointLight|\n    feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|\n    font-face|font-face-format|font-face-name|font-face-src|\n    font-face-uri|foreignObject|g|glyph|glyphRef|hkern|image|line|\n    linearGradient|marker|mask|metadata|missing-glyph|mpath|path|\n    pattern|polygon|polyline|radialGradient|rect|set|stop|svg|\n    switch|symbol|text|textPath|tref|tspan|use|view|vkern|\n    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|\n    basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|\n    canvas|caption|center|cite|code|col|colgroup|content|data|\n    datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|\n    em|embed|fieldset|figcaption|figure|font|footer|form|frame|\n    frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|\n    img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|\n    main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|\n    noframes|noscript|object|ol|optgroup|option|output|p|param|\n    plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|\n    select|shadow|small|source|spacer|span|strike|strong|style|\n    sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|\n    thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp\n)\\b\n',
          name: 'entity.name.tag.stylus'
        },
        {
          match: '\\.[a-zA-Z0-9_-]+',
          name: 'entity.other.attribute-name.class.stylus'
        },
        {
          match: '#[a-zA-Z0-9_-]+',
          name: 'entity.other.attribute-name.id.stylus'
        },
        {
          captures: {
            1: {name: 'entity.other.attribute-name.stylus'},
            2: {name: 'variable.language.stylus'},
            3: {name: 'entity.other.attribute-name.stylus'}
          },
          match:
            '(?x)            # multi-line regex definition mode\n([\\w\\d_-]+)?    # matching any word right before &\n(&)         # & itself, escaped because of plist\n([\\w\\d_-]+)?    # matching any word right after &\n'
        }
      ]
    },
    'single-line-comment': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.stylus'}},
          match: '(\\/\\/).*$',
          name: 'comment.line.stylus'
        }
      ]
    },
    'string-quoted': {
      patterns: [
        {match: "'[^']*'", name: 'string.quoted.single.stylus'},
        {match: '"[^"]*"', name: 'string.quoted.double.stylus'}
      ]
    },
    url: {
      begin: '(url)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.function-name.stylus'},
        2: {name: 'punctuation.definition.parameters.start.stylus'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.stylus'}},
      name: 'meta.function-call.stylus',
      patterns: [
        {include: '#string-quoted'},
        {include: '#language-constants'},
        {include: '#language-property-value-constants'},
        {include: '#property-reference'},
        {include: '#variable'}
      ]
    },
    variable: {match: '([\\w$-]+\\b)', name: 'variable.other.stylus'}
  },
  scopeName: 'source.stylus'
}

export default grammar
