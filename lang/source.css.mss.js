// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mss'],
  names: ['cartocss', 'carto'],
  patterns: [
    {
      captures: {
        1: {name: 'entity.other.attachment.mss'},
        2: {name: 'support.type.property-name.mss'}
      },
      match:
        '\\b([a-zA-Z0-9_]+/)?(image-filters|image-filters-inflate|direct-image-filters|comp-op|opacity|background-color|background-image|background-image-comp-op|background-image-opacity|srs|buffer-size|maximum-extent|base|font-directory|polygon-fill|polygon-opacity|polygon-gamma|polygon-gamma-method|polygon-clip|polygon-simplify|polygon-simplify-algorithm|polygon-smooth|polygon-geometry-transform|polygon-comp-op|line-color|line-width|line-opacity|line-join|line-cap|line-gamma|line-gamma-method|line-dasharray|line-dash-offset|line-miterlimit|line-clip|line-simplify|line-simplify-algorithm|line-smooth|line-offset|line-rasterizer|line-geometry-transform|line-comp-op|marker-file|marker-opacity|marker-fill-opacity|marker-line-color|marker-line-width|marker-line-opacity|marker-placement|marker-multi-policy|marker-type|marker-width|marker-height|marker-fill|marker-allow-overlap|marker-avoid-edges|marker-ignore-placement|marker-spacing|marker-max-error|marker-transform|marker-clip|marker-simplify|marker-simplify-algorithm|marker-smooth|marker-geometry-transform|marker-offset|marker-comp-op|marker-direction|shield-name|shield-file|shield-face-name|shield-unlock-image|shield-size|shield-fill|shield-placement|shield-avoid-edges|shield-allow-overlap|shield-margin|shield-repeat-distance|shield-min-distance|shield-spacing|shield-min-padding|shield-label-position-tolerance|shield-wrap-width|shield-wrap-before|shield-wrap-character|shield-halo-fill|shield-halo-radius|shield-halo-rasterizer|shield-halo-transform|shield-halo-comp-op|shield-halo-opacity|shield-character-spacing|shield-line-spacing|shield-text-dx|shield-text-dy|shield-dx|shield-dy|shield-opacity|shield-text-opacity|shield-horizontal-alignment|shield-vertical-alignment|shield-placement-type|shield-placements|shield-text-transform|shield-justify-alignment|shield-transform|shield-clip|shield-simplify|shield-simplify-algorithm|shield-smooth|shield-comp-op|line-pattern-file|line-pattern-clip|line-pattern-opacity|line-pattern-simplify|line-pattern-simplify-algorithm|line-pattern-smooth|line-pattern-offset|line-pattern-geometry-transform|line-pattern-comp-op|polygon-pattern-file|polygon-pattern-alignment|polygon-pattern-gamma|polygon-pattern-opacity|polygon-pattern-clip|polygon-pattern-simplify|polygon-pattern-simplify-algorithm|polygon-pattern-smooth|polygon-pattern-geometry-transform|polygon-pattern-comp-op|raster-opacity|raster-filter-factor|raster-scaling|raster-mesh-size|raster-comp-op|raster-colorizer-default-mode|raster-colorizer-default-color|raster-colorizer-epsilon|raster-colorizer-stops|point-file|point-allow-overlap|point-ignore-placement|point-opacity|point-placement|point-transform|point-comp-op|text-name|text-face-name|text-size|text-ratio|text-wrap-width|text-wrap-before|text-wrap-character|text-repeat-wrap-character|text-spacing|text-character-spacing|text-line-spacing|text-label-position-tolerance|text-max-char-angle-delta|text-fill|text-opacity|text-halo-opacity|text-halo-fill|text-halo-radius|text-halo-rasterizer|text-halo-transform|text-dx|text-dy|text-vertical-alignment|text-avoid-edges|text-margin|text-repeat-distance|text-min-distance|text-min-padding|text-min-path-length|text-allow-overlap|text-orientation|text-rotate-displacement|text-upright|text-placement|text-placement-type|text-placements|text-transform|text-horizontal-alignment|text-align|text-clip|text-simplify|text-simplify-algorithm|text-smooth|text-comp-op|text-halo-comp-op|text-font-feature-settings|text-largest-bbox-only|building-fill|building-fill-opacity|building-height|debug-mode|dot-fill|dot-opacity|dot-width|dot-height|dot-comp-op)(?=\\s*:)'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.css'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.css'}},
      name: 'string.quoted.double.css',
      patterns: [
        {match: '\\\\(\\d{1,6}|.)', name: 'constant.character.escaped.css'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.css'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.css'}},
      name: 'string.quoted.single.css',
      patterns: [{match: '\\\\.', name: 'constant.character.escaped.css'}]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.entity.mss'},
        2: {name: 'entity.other.attachment.mss'}
      },
      match: '(::)([a-zA-Z0-9_/-]+)',
      name: 'entity.other.attachment.mss'
    },
    {
      captures: {1: {name: 'entity.other.attribute-name.class.css'}},
      match: '(\\.[_a-zA-Z][a-zA-Z0-9_-]*)'
    },
    {
      begin: 'url\\(',
      contentName: 'variable.parameter.url',
      end: '\\)',
      name: 'support.function.any-method.builtin.mss'
    },
    {
      match: '(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b(?!.*?\\{)',
      name: 'constant.other.rgb-value.mss'
    },
    {
      captures: {0: {name: 'entity.other.attribute-name.id'}},
      match: '#[a-zA-Z0-9_\\-]+',
      name: 'meta.selector.mss'
    },
    {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.css'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.css'}},
      name: 'comment.block.css'
    },
    {match: '[+-]?\\d*\\.?\\d+', name: 'constant.numeric.mss'},
    {
      match:
        '(\\b(?i:arial|century|comic|courier|futura|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace)\\b)',
      name: 'support.constant.font-name.css'
    },
    {
      match:
        '\\b(saturate|desaturate|lighten|darken|grayscale|fadeout|fadein)\\b',
      name: 'support.function.any-method.builtin.mss'
    },
    {
      match: '\\b(rgb|rgba|hsl|hsla|url)\\b',
      name: 'support.function.any-method.builtin.mss'
    },
    {
      captures: {1: {name: 'support.function.mss'}},
      match: '(\\.[a-zA-Z0-9_-]+)\\s*(;|\\()'
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.mss'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.mss'}},
          end: '\\n',
          name: 'comment.line.double-slash.mss'
        }
      ]
    },
    {match: '@[a-zA-Z0-9_-][\\w-]*', name: 'variable.other.mss'},
    {match: '\\bMap\\b', name: 'keyword.control.mss.elements'},
    {
      captures: {
        1: {name: 'punctuation.definition.entity.mss'},
        10: {name: 'string.quoted.attribute-value.mss'},
        11: {name: 'punctuation.definition.string.begin.mss'},
        12: {name: 'punctuation.definition.string.end.mss'},
        13: {name: 'punctuation.definition.string.begin.mss'},
        14: {name: 'punctuation.definition.string.end.mss'},
        15: {name: 'punctuation.definition.entity.mss'},
        2: {name: 'meta.tag.zoomfilter.mss'},
        3: {name: 'variable.other.mss'},
        4: {name: 'punctuation.definition.string.begin.mss'},
        5: {name: 'punctuation.definition.string.end.mss'},
        6: {name: 'punctuation.definition.string.begin.mss'},
        7: {name: 'punctuation.definition.string.end.mss'},
        8: {name: 'keyword.operator.mss'},
        9: {name: 'constant.numeric.mss'}
      },
      match:
        '(\\[)\\s*(?:(zoom)|((")(?:[^"]|\\.)*(")|(\')(?:[^\']|\\.)*(\')|[a-zA-Z0-9_][a-zA-Z0-9_-]*))\\s*(!?=|>=?|<=?|=~)\\s*(?:(-?[0-9]+\\.?[0-9]*)|((")(?:[^"]|\\.)*(")|(\')(?:[^\']|\\.)*(\')|[a-zA-Z0-9_][a-zA-Z0-9_-]*))\\s*(\\])',
      name: 'meta.attribute-selector.mss'
    },
    {
      captures: {
        1: {name: 'punctuation.section.property-list.begin.css'},
        2: {name: 'punctuation.section.property-list.end.css'}
      },
      match: '(\\{)(\\})',
      name: 'meta.brace.curly.mss'
    },
    {match: '\\{|\\}', name: 'meta.brace.curly.mss'},
    {match: '\\(|\\)', name: 'meta.brace.round.mss'},
    {match: '\\[|\\]', name: 'meta.brace.square.mss'},
    {
      match:
        '\\b(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|transparent)\\b',
      name: 'constant.color.w3c-standard-color-name.mss'
    },
    {
      match:
        '\\b(visvalingam-whyatt|radial-distance|zhao-saalfeld|grain-extract|miter-revert|vertex-first|linear-dodge|grain-merge|color-dodge|linear-burn|vertex-last|right-only|hard-light|soft-light|difference|saturation|invert-rgb|capitalize|color-burn|threshold|left-only|lowercase|auto-down|exclusion|uppercase|discrete|spline36|blackman|contrast|multiply|centroid|dst-atop|src-over|gaussian|interior|src-atop|spline16|bilinear|dst-over|mitchell|hamming|overlay|hermite|dst-out|lighten|bicubic|hanning|reverse|largest|ellipse|quadric|src-out|lanczos|linear|kaiser|bessel|square|vertex|middle|adjust|bottom|simple|catrom|invert|darken|screen|divide|center|global|dst-in|src-in|clear|exact|arrow|dummy|minus|color|value|point|right|power|miter|false|local|round|bevel|whole|full|near|true|down|plus|left|auto|each|none|fast|list|sinc|butt|line|src|hue|xor|dst|top|up)\\b',
      name: 'support.concat.property-value.mss'
    }
  ],
  scopeName: 'source.css.mss'
}

export default grammar
