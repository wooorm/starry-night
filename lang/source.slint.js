// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/slint-ui/slint-tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.slint'],
  names: ['slint'],
  patterns: [
    {include: '#comment'},
    {include: '#import-list'},
    {include: '#export-list'},
    {include: '#struct'},
    {include: '#enum'},
    {include: '#global'},
    {include: '#component'},
    {match: '(?<!-)\\bexport\\b(?!-)', name: 'keyword.other.export.slint'},
    {include: '#element-contents'}
  ],
  repository: {
    animate: {
      patterns: [
        {
          begin: '(?<!-)\\b(animate)\\s*([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.other.animate.slint'},
            2: {name: 'variable.other.property.slint'},
            3: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [
            {
              captures: {1: {name: 'keyword.other.animate.setting.slint'}},
              match:
                '(?<!-)\\b(delay|duration|iteration-count|easing|direction)\\s*:'
            },
            {include: '#expression'},
            {match: ';'}
          ]
        }
      ]
    },
    'block-comment': {
      patterns: [
        {
          begin: '(/\\*)',
          beginCaptures: {1: {name: 'comment.block.slint'}},
          contentName: 'comment.block.slint',
          end: '(\\*/)',
          endCaptures: {1: {name: 'comment.block.slint'}},
          patterns: [{include: '#block-comment'}]
        }
      ]
    },
    boolean: {
      patterns: [
        {
          match: '(?<!-)\\b(true|false)\\b(?!-)',
          name: 'constant.language.boolean.slint'
        }
      ]
    },
    'callback-setup': {
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.slint'}},
          match: '(?<!-)([a-zA-Z_][a-zA-Z0-9_-]*)\\s*=>'
        },
        {
          begin: '(?<!-)([a-zA-Z_][a-zA-Z0-9_-]*)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.slint'}},
          end: '\\)\\s*=>',
          patterns: [{include: '#expression'}, {match: '\\s*,\\s*'}]
        }
      ]
    },
    'code-block': {
      patterns: [
        {
          begin: '\\s*(\\{)',
          beginCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          end: '(\\})\\s*',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [{include: '#code-block-contents'}]
        }
      ]
    },
    'code-block-contents': {
      patterns: [
        {include: '#comment'},
        {include: '#expression'},
        {
          match: '(?<!-)\\b(for|if|else|return)\\b(?!-)',
          name: 'keyword.control.code-block.slint'
        },
        {match: '(=|;)', name: 'punctuation.other.code-block.slint'},
        {include: '#function-call'},
        {include: '#code-block'}
      ]
    },
    color: {
      patterns: [
        {match: '#([a-fA-F0-9]){3,8}', name: 'constant.other.color.slint'},
        {
          captures: {
            2: {name: 'support.class.colors.slint'},
            3: {name: 'support.constant.colors.slint'}
          },
          match:
            '(?<!-)\\b((Colors)\\.)(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\\b(?!-)'
        }
      ]
    },
    comment: {
      patterns: [{include: '#block-comment'}, {include: '#line-comment'}]
    },
    component: {
      patterns: [
        {
          begin:
            '(?<!-)\\b(component)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)(\\s+(inherits)\\s+([a-zA-Z_][a-zA-Z0-9_-]*))?\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.other.component.slint'},
            2: {name: 'entity.name.type.component.slint'},
            4: {name: 'keyword.other.inherits.slint'},
            5: {name: 'entity.other.inherited-class.component.slint'},
            6: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [{include: '#element-contents'}]
        }
      ]
    },
    'conditional-element': {
      begin: '(?<!-)\\b(if)\\s+',
      beginCaptures: {1: {name: 'keyword.control.conditional-element.slint'}},
      end: ':',
      patterns: [{include: '#expression'}]
    },
    element: {
      begin:
        '(?<!-)(([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(:=)\\s*)?([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\{)',
      beginCaptures: {
        2: {name: 'entity.name.tag.element-id.slint'},
        3: {name: 'punctuation.assignment.element-id.slint'},
        4: {name: 'entity.name.type.element.slint'},
        5: {name: 'punctuation.brackets.curly.slint'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
      patterns: [{include: '#element-contents'}]
    },
    'element-contents': {
      patterns: [
        {include: '#comment'},
        {include: '#conditional-element'},
        {include: '#repeated-element'},
        {include: '#property-def'},
        {include: '#animate'},
        {include: '#element'},
        {include: '#function'},
        {include: '#property-set'},
        {include: '#code-block'},
        {include: '#states'},
        {include: '#callback-setup'},
        {include: '#expression'},
        {
          match:
            '(?<!-)\\b(animate|states|transitions|private|public|pure|in|out|in-out|changed)\\b(?!-)',
          name: 'keyword.other.extra.slint'
        }
      ]
    },
    enum: {
      patterns: [
        {
          begin: '(?<!-)\\b(enum)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.declaration.enum.slint'},
            2: {name: 'entity.name.type.enum.slint'},
            3: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [
            {
              captures: {1: {name: 'entity.name.type.enum.value.slint'}},
              match: '([a-zA-Z_][a-zA-Z0-9_-]*)\\s*,?\\s*'
            },
            {include: '#comment'}
          ]
        }
      ]
    },
    'export-list': {
      patterns: [
        {
          begin: '(?<!-)\\b(export)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.other.export.slint'},
            2: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [
            {match: '(?<!-)\\bas\\b(?!-)', name: 'keyword.other.as.slint'},
            {
              match: '[a-zA-Z_][a-zA-Z0-9_-]*',
              name: 'entity.name.type.export-list.slint'
            },
            {include: '#comment'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.from.slint'},
            2: {name: 'string.quoted.double.export-path.slint'}
          },
          match: '\\s*(from)\\s*("[^"]*")\\s*;'
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#value'},
        {
          captures: {1: {name: 'variable.language.special-element.slint'}},
          match: '(?<!-)\\b(root|parent|self)(?!-)'
        }
      ]
    },
    function: {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.other.pure.slint'},
            3: {name: 'keyword.other.function.slint'},
            4: {name: 'entity.name.function.slint'}
          },
          match:
            '(?<!-)\\b((pure)\\s+)?(function|callback)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)\\s*;\\s*'
        },
        {
          begin:
            '(?<!-)\\b((pure)\\s+)?(function|callback)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\()',
          beginCaptures: {
            2: {name: 'keyword.other.pure.slint'},
            3: {name: 'keyword.other.function.slint'},
            4: {name: 'entity.name.function.slint'},
            5: {name: 'punctuation.brackets.round.slint'}
          },
          end: '(\\))\\s*((->)\\s*([a-zA-Z_][a-zA-Z0-9_-]*))?(;|(=>))?',
          endCaptures: {
            1: {name: 'punctuation.brackets.round.slint'},
            3: {name: 'keyword.operator.arrow.skinny.slint'},
            4: {name: 'entity.name.type.return-type.slint'},
            6: {name: 'keyword.operator.arrow.fat.slint'}
          },
          patterns: [
            {
              captures: {
                2: {name: 'variable.parameter.function-argument.slint'},
                3: {name: 'entity.name.type.function-argument.slint'}
              },
              match:
                '\\s*(([a-zA-Z_][a-zA-Z0-9_-]*)\\s*:\\s*)?([a-zA-Z_][a-zA-Z0-9_-]*)\\s*,?\\s*'
            }
          ]
        }
      ]
    },
    'function-call': {
      patterns: [
        {
          begin: '(?<!-)([a-zA-Z_][a-zA-Z0-9_.-]*)\\s*\\(',
          beginCaptures: {1: {name: 'entity.name.function.slint'}},
          end: '\\)',
          patterns: [{include: '#expression'}, {match: '\\s,\\s'}]
        }
      ]
    },
    global: {
      patterns: [
        {
          begin: '(?<!-)\\b(global)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.other.global.slint'},
            2: {name: 'entity.name.type.global.slint'},
            3: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [{include: '#element-contents'}]
        }
      ]
    },
    'import-list': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.import.slint'},
            2: {name: 'string.quoted.double.import-file.slint'}
          },
          match: '(?<!-)\\b(import)\\s*("[^"]*")\\s*;'
        },
        {
          begin: '(?<!-)\\b(import)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.other.import.slint'},
            2: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})\\s*(from)\\s*("[^"]*")\\s*;',
          endCaptures: {
            1: {name: 'punctuation.brackets.curly.slint'},
            2: {name: 'keyword.other.from.slint'},
            3: {name: 'string.quoted.double.import-path.slint'}
          },
          patterns: [
            {match: '(?<!-)\\bas\\b(?!-)', name: 'keyword.other.as.slint'},
            {
              match: '(?<!-)[a-zA-Z_][a-zA-Z0-9_-]*(?!-)',
              name: 'entity.name.type.import-list.slint'
            },
            {include: '#comment'}
          ]
        }
      ]
    },
    'line-comment': {
      patterns: [{match: '//.*$', name: 'comment.line.double-slash.slint'}]
    },
    number: {
      patterns: [
        {
          match:
            '(\\+|-)?\\d+(\\.\\d*)?(%|px|phx|pt|in|mm|cm|ms|s|deg|rad|rem|turn)?',
          name: 'constant.numeric.slint'
        }
      ]
    },
    'property-def': {
      patterns: [
        {
          begin: '(?<!-)\\b((private|in|out|in-out)\\s+)?(property)\\b(?!-)',
          beginCaptures: {
            2: {name: 'keyword.other.visibility.slint'},
            3: {name: 'keyword.other.property.slint'}
          },
          end: '(;|:|(<=>))',
          endCaptures: {2: {name: 'punctuation.arrow.fat-double.slint'}},
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.brackets.angle.slint'},
                2: {name: 'entity.name.type.property.slint'},
                3: {name: 'punctuation.brackets.angle.slint'}
              },
              match: '(<)([a-zA-Z_][a-zA-Z0-9_-]*)(>)'
            },
            {
              captures: {1: {name: 'variable.other.property.slint'}},
              match: '(?<!-)\\b([a-zA-Z_][a-zA-Z0-9_-]*)\\b(?!-)'
            }
          ]
        }
      ]
    },
    'property-set': {
      begin: '(?<!-)([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(:)',
      beginCaptures: {1: {name: 'variable.other.property.slint'}},
      end: ';',
      patterns: [{include: '#expression'}]
    },
    'repeated-element': {
      begin:
        '(?<!-)\\b(for)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)(\\s*(\\[)\\s*([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\]))?\\s+(in)\\b(?!-)',
      beginCaptures: {
        1: {name: 'keyword.control.repeated-element.slint'},
        2: {name: 'variable.other.iterator.slint'},
        4: {name: 'punctuation.brackets.square.slint'},
        5: {name: 'variable.other.index.slint'},
        6: {name: 'punctuation.brackets.square.slint'},
        7: {name: 'keyword.control.in.slint'}
      },
      end: ':',
      patterns: [{include: '#expression'}]
    },
    states: {
      patterns: [
        {
          begin: '(?<!-)\\b(states)\\s*(\\[)',
          beginCaptures: {
            1: {name: 'keyword.other.states.slint'},
            2: {name: 'punctuation.brackets.square.slint'}
          },
          end: '(\\])',
          endCaptures: {1: {name: 'punctuation.brackets.square.slint'}},
          patterns: [
            {
              begin: '(?<!-)([a-zA-Z_][a-zA-Z0-9_-]*)\\s+(when)\\s+',
              beginCaptures: {
                1: {name: 'entity.name.tag.state.slint'},
                2: {name: 'keyword.other.when.slint'}
              },
              end: ':',
              endCaptures: {
                1: {name: 'punctuation.brackets.square.curly.slint'}
              },
              patterns: [{include: '#expression'}]
            },
            {
              begin: '(\\{)',
              beginCaptures: {
                1: {name: 'punctuation.brackets.square.curly.slint'}
              },
              end: '(\\})',
              endCaptures: {
                1: {name: 'punctuation.brackets.square.curly.slint'}
              },
              patterns: [
                {include: '#property-set'},
                {
                  begin: '(?<!-)\\b(in|out)\\s+(\\{)',
                  beginCaptures: {
                    1: {name: 'keyword.other.state-change.slint'},
                    2: {name: 'punctuation.brackets.square.curly.slint'}
                  },
                  end: '(\\})',
                  endCaptures: {
                    1: {name: 'punctuation.brackets.square.curly.slint'}
                  },
                  patterns: [{include: '#property-set'}, {include: '#animate'}]
                }
              ]
            }
          ]
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.slint',
          patterns: [
            {
              match: '\\\\(n|\\\\|u\\{\\d+\\})',
              name: 'constant.character.escape.untitled.slint'
            },
            {
              begin: '\\\\\\{',
              end: '\\}',
              name: 'constant.character.escape.untitled.slint',
              patterns: [{include: '#expression'}]
            }
          ]
        }
      ]
    },
    struct: {
      patterns: [
        {
          begin: '(?<!-)\\b(struct)\\s+([a-zA-Z_][a-zA-Z0-9_-]*)\\s*(\\{)',
          beginCaptures: {
            1: {name: 'keyword.declaration.struct.slint'},
            2: {name: 'entity.name.type.struct.slint'},
            3: {name: 'punctuation.brackets.curly.slint'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brackets.curly.slint'}},
          patterns: [
            {
              captures: {
                1: {name: 'variable.other.struct.field.slint'},
                2: {name: 'entity.name.type.struct.field.slint'}
              },
              match:
                '\\s*([a-zA-Z_][a-zA-Z0-9_-]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_-]*)(\\s*,)?\\s*'
            },
            {include: '#comment'}
          ]
        }
      ]
    },
    value: {
      patterns: [
        {include: '#string'},
        {include: '#color'},
        {include: '#number'},
        {include: '#boolean'},
        {
          begin: '(@(tr|linear-gradient|radial-gradient|image-url))\\s*(\\()',
          beginCaptures: {
            1: {name: 'support.function.macro.slint'},
            3: {name: 'punctuation.brackets.round.slint'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'support.function.macro.slint'},
            2: {name: 'punctuation.brackets.round.slint'}
          },
          patterns: [{include: '#expression'}]
        }
      ]
    }
  },
  scopeName: 'source.slint'
}

export default grammar
