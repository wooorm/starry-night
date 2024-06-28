// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pde'],
  names: ['processing'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.other.package.processing'},
        2: {name: 'storage.modifier.package.processing'},
        3: {name: 'punctuation.terminator.processing'}
      },
      match: '^\\s*(package)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.package.processing'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.static.processing'},
        2: {name: 'storage.modifier.import.processing'},
        3: {name: 'punctuation.terminator.processing'}
      },
      match: '^\\s*(import static)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.import.static.processing'
    },
    {
      captures: {
        1: {name: 'keyword.other.import.processing'},
        2: {name: 'storage.modifier.import.processing'},
        3: {name: 'punctuation.terminator.processing'}
      },
      match: '^\\s*(import)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
      name: 'meta.import.processing'
    },
    {include: '#class-body'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'}
      ]
    },
    annotations: {
      patterns: [
        {
          begin: '(@[^ (]+)(\\()',
          beginCaptures: {
            1: {name: 'storage.type.annotation.processing'},
            2: {
              name: 'punctuation.definition.annotation-arguments.begin.processing'
            }
          },
          end: '(\\))',
          endCaptures: {
            1: {
              name: 'punctuation.definition.annotation-arguments.end.processing'
            }
          },
          name: 'meta.declaration.annotation.processing',
          patterns: [
            {
              captures: {
                1: {name: 'constant.other.key.processing'},
                2: {name: 'keyword.operator.assignment.processing'}
              },
              match: '(\\w*)\\s*(=)'
            },
            {include: '#code'},
            {match: ',', name: 'punctuation.seperator.property.processing'}
          ]
        },
        {match: '@\\w*', name: 'storage.type.annotation.processing'}
      ]
    },
    'anonymous-classes-and-new': {
      begin: '\\bnew\\b',
      beginCaptures: {0: {name: 'keyword.control.new.processing'}},
      end: '(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)',
      patterns: [
        {
          begin: '(\\w+)\\s*(?=\\[)',
          beginCaptures: {1: {name: 'storage.type.processing'}},
          end: '}|(?=\\s*(?:;|\\)))',
          patterns: [
            {begin: '\\[', end: '\\]', patterns: [{include: '#code'}]},
            {begin: '{', end: '(?=})', patterns: [{include: '#code'}]}
          ]
        },
        {
          begin: '(?=\\w.*\\()',
          end: '(?<=\\))',
          patterns: [
            {include: '#object-types'},
            {
              begin: '\\(',
              beginCaptures: {1: {name: 'storage.type.processing'}},
              end: '\\)',
              patterns: [{include: '#code'}]
            }
          ]
        },
        {
          begin: '{',
          end: '}',
          name: 'meta.inner-class.processing',
          patterns: [{include: '#class-body'}]
        }
      ]
    },
    assertions: {
      patterns: [
        {
          begin: '\\b(assert)\\s',
          beginCaptures: {1: {name: 'keyword.control.assert.processing'}},
          end: '$',
          name: 'meta.declaration.assertion.processing',
          patterns: [
            {
              match: ':',
              name: 'keyword.operator.assert.expression-seperator.processing'
            },
            {include: '#code'}
          ]
        }
      ]
    },
    class: {
      begin: '(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum)\\s+\\w+)',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.class.end.processing'}},
      name: 'meta.class.processing',
      patterns: [
        {include: '#storage-modifiers'},
        {include: '#comments'},
        {
          captures: {
            1: {name: 'storage.modifier.processing'},
            2: {name: 'entity.name.type.class.processing'}
          },
          match: '(class|(?:@)?interface|enum)\\s+(\\w+)',
          name: 'meta.class.identifier.processing'
        },
        {
          begin: 'extends',
          beginCaptures: {0: {name: 'storage.modifier.extends.processing'}},
          end: '(?={|implements)',
          name: 'meta.definition.class.inherited.classes.processing',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '(implements)\\s',
          beginCaptures: {1: {name: 'storage.modifier.implements.processing'}},
          end: '(?=\\s*extends|\\{)',
          name: 'meta.definition.class.implemented.interfaces.processing',
          patterns: [
            {include: '#object-types-inherited'},
            {include: '#comments'}
          ]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.class.body.processing',
          patterns: [{include: '#class-body'}]
        }
      ]
    },
    'class-body': {
      patterns: [
        {include: '#comments'},
        {include: '#class'},
        {include: '#enums'},
        {include: '#methods'},
        {include: '#annotations'},
        {include: '#storage-modifiers'},
        {include: '#code'}
      ]
    },
    code: {
      patterns: [
        {include: '#comments'},
        {include: '#class'},
        {begin: '{', end: '}', patterns: [{include: '#code'}]},
        {include: '#assertions'},
        {include: '#parens'},
        {include: '#constants-and-special-vars'},
        {include: '#anonymous-classes-and-new'},
        {include: '#keywords'},
        {include: '#storage-modifiers'},
        {include: '#strings'},
        {include: '#all-types'},
        {include: '#processing-methods'},
        {include: '#processing-classes'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.processing'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.processing'
        },
        {include: '#comments-javadoc'},
        {include: '#comments-inline'}
      ]
    },
    'comments-inline': {
      patterns: [
        {
          begin: '/\\*(?!\\*)',
          captures: {0: {name: 'punctuation.definition.comment.processing'}},
          end: '\\*/',
          name: 'comment.block.processing'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.processing'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.processing'}
              },
              end: '\\n',
              name: 'comment.line.double-slash.processing'
            }
          ]
        }
      ]
    },
    'comments-javadoc': {
      patterns: [
        {
          begin: '/\\*\\*',
          captures: {0: {name: 'punctuation.definition.comment.processing'}},
          end: '\\*/',
          name: 'comment.block.documentation.processing',
          patterns: [
            {
              captures: {
                0: {name: 'keyword.other.documentation.inlinetag.processing'},
                1: {name: 'keyword.other.documentation.tag.processing'},
                2: {name: 'keyword.other.documentation.value.processing'}
              },
              match: '\\{\\s*(@link)\\s*([a-zA-Z_][a-zA-Z0-9_]+)\\s*\\}'
            },
            {include: '#comments-javadoc-tags'}
          ]
        }
      ]
    },
    'comments-javadoc-tags': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.documentation.params.processing'},
            2: {name: 'keyword.other.documentation.value.processing'}
          },
          match: '(@param)\\s+([a-zA-Z_][a-zA-Z0-9_]+)\\b'
        },
        {
          match: '@[a-zA-Z]+\\b',
          name: 'keyword.other.documentation.tag.processing'
        }
      ]
    },
    'constants-and-special-vars': {
      patterns: [
        {include: '#processing-variables-and-constants'},
        {
          match: '\\b(true|false|null)\\b',
          name: 'constant.language.processing'
        },
        {match: '\\b(this|super)\\b', name: 'variable.language.processing'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.processing'
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.processing'}},
          match: '(\\.)?\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b',
          name: 'constant.other.processing'
        }
      ]
    },
    enums: {
      begin: '^(?=\\s*[A-Z0-9_]+\\s*({|\\(|,))',
      end: '(?=;|})',
      patterns: [
        {
          begin: '\\w+',
          beginCaptures: {0: {name: 'constant.other.enum.processing'}},
          end: '(?=,|;|})',
          name: 'meta.enum.processing',
          patterns: [
            {include: '#parens'},
            {begin: '{', end: '}', patterns: [{include: '#class-body'}]}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '((&|\\^|\\||<<|>>>?)=)',
          name: 'keyword.operator.assignment.bitwise.processing'
        },
        {match: '(<<|>>>?|~|\\^)', name: 'keyword.operator.bitwise.processing'},
        {
          match: '\\b(try|catch|finally|throw)\\b',
          name: 'keyword.control.catch-exception.processing'
        },
        {match: '\\?|:', name: 'keyword.control.ternary.processing'},
        {
          match:
            '\\b(return|break|case|continue|default|do|while|for|switch|if|else)\\b',
          name: 'keyword.control.processing'
        },
        {
          match: '\\b(instanceof)\\b',
          name: 'keyword.operator.instanceof.processing'
        },
        {
          match: '(===?|!=|<=|>=|<>|<|>)',
          name: 'keyword.operator.comparison.processing'
        },
        {
          match: '([+*/%-]=)',
          name: 'keyword.operator.assignment.arithmetic.processing'
        },
        {match: '(=)', name: 'keyword.operator.assignment.processing'},
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.processing'
        },
        {
          match: '(\\-|\\+|\\*|\\/|%)',
          name: 'keyword.operator.arithmetic.processing'
        },
        {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.processing'},
        {match: '(\\||&)', name: 'keyword.operator.bitwise.processing'},
        {
          match: '(?<=\\S)\\.(?=\\S)',
          name: 'keyword.operator.dereference.processing'
        },
        {match: ';', name: 'punctuation.terminator.processing'}
      ]
    },
    methods: {
      begin: '(?!new)(?=\\w.*\\s+)(?=[^=]+\\()(?=.+{)',
      end: '}|(?=;)',
      name: 'meta.method.processing',
      patterns: [
        {include: '#storage-modifiers'},
        {
          begin: '(\\w+)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.processing'}},
          end: '\\)',
          name: 'meta.method.identifier.processing',
          patterns: [{include: '#parameters'}]
        },
        {
          begin: '(?=\\w.*\\s+\\w+\\s*\\()',
          end: '(?=\\w+\\s*\\()',
          name: 'meta.method.return-type.processing',
          patterns: [{include: '#all-types'}]
        },
        {include: '#throws'},
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.processing',
          patterns: [{include: '#code'}]
        }
      ]
    },
    'object-types': {
      patterns: [
        {include: '#processing-classes'},
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,\\?<\\[\\]]',
          name: 'storage.type.generic.processing',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,\\[\\]<]',
              name: 'storage.type.generic.processing'
            }
          ]
        },
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)(?=\\[)',
          end: '(?=[^\\]\\s])',
          name: 'storage.type.object.array.processing',
          patterns: [{begin: '\\[', end: '\\]', patterns: [{include: '#code'}]}]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.processing'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*\\b',
          name: 'storage.type.processing'
        }
      ]
    },
    'object-types-inherited': {
      patterns: [
        {
          begin: '\\b((?:[a-z]\\w*\\.)*[A-Z]+\\w*)<',
          end: '>|[^\\w\\s,<]',
          name: 'entity.other.inherited-class.processing',
          patterns: [
            {include: '#object-types'},
            {
              begin: '<',
              end: '>|[^\\w\\s,<]',
              name: 'storage.type.generic.processing'
            }
          ]
        },
        {
          captures: {1: {name: 'keyword.operator.dereference.processing'}},
          match: '\\b(?:[a-z]\\w*(\\.))*[A-Z]+\\w*',
          name: 'entity.other.inherited-class.processing'
        }
      ]
    },
    parameters: {
      patterns: [
        {match: 'final', name: 'storage.modifier.processing'},
        {include: '#primitive-arrays'},
        {include: '#primitive-types'},
        {include: '#object-types'},
        {match: '\\w+', name: 'variable.parameter.processing'}
      ]
    },
    parens: {begin: '\\(', end: '\\)', patterns: [{include: '#code'}]},
    'primitive-arrays': {
      patterns: [
        {
          match:
            '\\b(?:void|boolean|byte|char|color|short|int|float|long|double)(?=(\\[\\s*\\])+)\\b',
          name: 'storage.type.primitive.array.processing'
        }
      ]
    },
    'primitive-types': {
      patterns: [
        {
          match:
            '\\b(?:void|boolean|byte|char|color|short|int|float|long|double)(?!\\s*\\()\\b',
          name: 'storage.type.primitive.processing'
        }
      ]
    },
    'processing-classes': {
      patterns: [
        {
          match:
            '\\b(P(Applet|Constants|Font|Graphics|Graphics2D|Graphics3D|GraphicsJava2D|Image|Line|Matrix|Matrix2D|Matrix3D|Polygon|Shape|ShapeSVG|SmoothTriangle|Style|Triangle|Vector)|StdXML(Builder|Parser|Reader)|XML(Element|EntityResolver|Exception|ParseException|ValidationException|Validator|Writer))\\b',
          name: 'support.type.object.processing'
        }
      ]
    },
    'processing-methods': {
      patterns: [
        {
          match:
            '\\b(?<!\\.)(abs|acos|alpha|ambient|ambientLight|append|applyMatrix|arc|arrayCopy|asin|atan|atan2|background|beginCamera|beginRaw|beginRecord|beginShape|bezier|bezierDetail|bezierPoint|bezierTangent|bezierVertex|binary|blend|blendColor|blue|boolean|box|brightness|byte|cache|camera|ceil|char|charAt|color|colorMode|concat|constrain|contract|copy|cos|createFont|createGraphics|createImage|createInput|createOutput|createReader|createWriter|cursor|curve|curveDetail|curvePoint|curveSegments|curveTangent|curveTightness|curveVertex|day|degrees|delay|directionalLight|dist|draw|duration|ellipse|ellipseMode|emissive|endCamera|endRaw|endRecord|endShape|equals|exit|exp|expand|fill|filter|float|floor|frameRate|frustum|get|green|hex|hint|hour|hue|image|imageMode|indexOf|int|join|keyPressed|keyReleased|keyTyped|length|lerp|lerpColor|lightFalloff|lights|lightSpecular|line|link|list|loadBytes|loadFont|loadImage|loadPixels|loadShape|loadSound|loadStrings|log|lookat|loop|mag|map|mask|match|matchAll|max|millis|min|minute|modelX|modelY|modelZ|month|mouseClicked|mouseDragged|mouseMoved|mousePressed|mouseReleased|nf|nfc|nfp|nfs|noCursor|noFill|noise|noiseDetail|noiseSeed|noLights|noLoop|norm|normal|noSmooth|noStroke|noTint|open|openStream|ortho|param|pause|perspective|play|point|pointLight|popMatrix|popStyle|pow|print|printCamera|println|printMatrix|printProjection|pushMatrix|pushStyle|quad|radians|random|randomSeed|rect|rectMode|red|redraw|requestImage|resetMatrix|reverse|rotate|rotateX|rotateY|rotateZ|round|saturation|save|saveBytes|saveFrame|saveStream|saveStrings|scale|screenX|screenY|screenZ|second|selectFolder|selectInput|selectOutput|set|setup|shape|shapeMode|shininess|shorten|sin|size|skewX|skewY|smooth|sort|specular|sphere|sphereDetail|splice|split|splitTokens|spotLight|sq|sqrt|status|stop|str|stroke|strokeCap|strokeJoin|strokeWeight|subset|substring|tan|text|textAlign|textAscent|textDescent|textFont|textLeading|textMode|textSize|texture|textureMode|textWidth|time|tint|toLowerCase|toUpperCase|translate|triangle|trim|unbinary|unhex|unHint|updatePixels|vertex|volume|year)(?=\\s*\\()',
          name: 'support.function.processing'
        }
      ]
    },
    'processing-variables-and-constants': {
      patterns: [
        {
          match:
            '\\b(focused|frameCount|frameRate|height|height|key|keyCode|keyPressed|mouseButton|mousePressed|mouseX|mouseY|online|pixels|pmouseX|pmouseY|screen|width)(?!\\s*\\()\\b',
          name: 'variable.other.processing'
        },
        {
          match:
            '\\b(ADD|ALIGN_CENTER|ALIGN_LEFT|ALIGN_RIGHT|ALPHA|ALPHA_MASK|ALT|AMBIENT|ARGB|ARROW|BACKSPACE|BEVEL|BLEND|BLEND|BLUE_MASK|BLUR|CENTER|CENTER_RADIUS|CHATTER|CODED|COMPLAINT|COMPONENT|COMPOSITE|CONCAVE_POLYGON|CONTROL|CONVEX_POLYGON|CORNER|CORNERS|CROSS|CUSTOM|DARKEST|DEGREES|DEG_TO_RAD|DELETE|DIFFERENCE|DIFFUSE|DISABLED|DISABLE_TEXT_SMOOTH|DOWN|ENTER|EPSILON|ESC|GIF|GREEN_MASK|GREY|HALF|HALF_PI|HALF_PI|HAND|HARD_LIGHT|HSB|IMAGE|INVERT|JAVA2D|JPEG|LEFT|LIGHTEST|LINES|LINE_LOOP|LINE_STRIP|MAX_FLOAT|MITER|MODEL|MOVE|MULTIPLY|NORMALIZED|NO_DEPTH_TEST|NTSC|ONE|OPAQUE|OPENGL|ORTHOGRAPHIC|OVERLAY|P2D|P3D|PAL|PERSPECTIVE|PI|PI|PIXEL_CENTER|POINTS|POLYGON|POSTERIZE|PROBLEM|PROJECT|QUADS|QUAD_STRIP|QUARTER_PI|RADIANS|RAD_TO_DEG|RED_MASK|REPLACE|RETURN|RGB|RIGHT|ROUND|SCREEN|SECAM|SHIFT|SOFT_LIGHT|SPECULAR|SQUARE|SUBTRACT|SVIDEO|TAB|TARGA|TEXT|TFF|THIRD_PI|THRESHOLD|TIFF|TRIANGLES|TRIANGLE_FAN|TRIANGLE_STRIP|TUNER|TWO|TWO_PI|TWO_PI|UP|WAIT|WHITESPACE)\\b',
          name: 'support.constant.processing'
        }
      ]
    },
    'storage-modifiers': {
      captures: {1: {name: 'storage.modifier.processing'}},
      match:
        '\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient)\\b'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.processing'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.processing'}
          },
          name: 'string.quoted.double.processing',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.processing'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.processing'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.processing'}
          },
          name: 'string.quoted.single.processing',
          patterns: [
            {
              match: '\\\\([0-7]{3}|u[A-Fa-f0-9]{4})',
              name: 'constant.character.escape.literal.processing'
            },
            {match: '\\\\.', name: 'constant.character.escape.processing'}
          ]
        }
      ]
    },
    throws: {
      begin: 'throws',
      beginCaptures: {0: {name: 'storage.modifier.processing'}},
      end: '(?={|;)',
      name: 'meta.throwables.processing',
      patterns: [{include: '#object-types'}]
    },
    values: {
      patterns: [
        {include: '#strings'},
        {include: '#object-types'},
        {include: '#constants-and-special-vars'}
      ]
    }
  },
  scopeName: 'source.processing'
}

export default grammar
