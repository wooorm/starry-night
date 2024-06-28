// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    class: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))class(?=$|\\s|;)',
      beginCaptures: {0: {name: 'storage.type.style-assignment.mermaid'}},
      end: '([\\w$&]+)?[ \\t]*(?=$|;)',
      endCaptures: {1: {name: 'entity.name.class.mermaid'}},
      name: 'meta.class.statement.mermaid',
      patterns: [
        {
          match: '([\\w$&]+)(?=$|\\s|;|,)',
          name: 'entity.name.tag.node.mermaid'
        },
        {include: '#comma'}
      ]
    },
    click: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))(click)(?=$|\\s|;)(?:\\s+([\\w$&]+))?',
      beginCaptures: {
        1: {name: 'storage.type.interactive-command.mermaid'},
        2: {name: 'entity.name.tag.node.mermaid'}
      },
      end: '[ \\t]*$|(?=;)',
      name: 'meta.click.statement.mermaid',
      patterns: [{include: '#click-href'}, {include: '#click-call'}]
    },
    'click-call': {
      begin: '\\G\\s+(?:(call)(?=$|\\s|;)[ \\t]*|(?=[^\\s\\(%;"\']))',
      beginCaptures: {
        1: {name: 'storage.modifier.callback-assignment.mermaid'}
      },
      end: '[ \\t]*$|(?=;)',
      name: 'meta.callback-assignment.mermaid',
      patterns: [
        {
          begin: '\\G[^\\s\\(%;"\']+',
          beginCaptures: {0: {name: 'entity.name.function.callback.mermaid'}},
          end: '(?!\\G)|(?=[ \\t]*(?:$|;))',
          name: 'meta.callback-reference.mermaid',
          patterns: [
            {
              begin: '\\G\\(',
              beginCaptures: {
                0: {name: 'punctuation.definition.parameters.begin.mermaid'}
              },
              end: '\\)',
              endCaptures: {
                0: {name: 'punctuation.definition.parameters.end.mermaid'}
              },
              name: 'meta.callback-arguments.mermaid',
              patterns: [
                {
                  match: '[^\\s,\\)%;]+',
                  name: 'variable.parameter.function.mermaid'
                },
                {include: '#comma'}
              ]
            }
          ]
        },
        {include: '#tooltip'}
      ]
    },
    'click-href': {
      begin: '\\G\\s+(?:(href)(?=$|\\s|;)[ \\t]*|(?=["\']))',
      beginCaptures: {1: {name: 'storage.modifier.link-assignment.mermaid'}},
      end: '[ \\t]*$|(?=;)',
      name: 'meta.link-assignment.mermaid',
      patterns: [
        {begin: '\\G(?="|\')', end: '(?!\\G)', patterns: [{include: '#url'}]},
        {include: '#tooltip'},
        {include: '#target-name'}
      ]
    },
    html: {
      patterns: [
        {include: 'source.mermaid#br'},
        {include: 'source.mermaid#entity'}
      ]
    },
    link: {
      patterns: [
        {
          begin:
            '([xo<]?(?:--+[-xo>]|==+[=xo>]|-?\\.+-[xo>]?))\\s*(\\|)[ \\t]*',
          beginCaptures: {
            1: {patterns: [{include: '#link'}]},
            2: {name: 'keyword.operator.link-label.begin.mermaid'}
          },
          contentName: 'string.quoted.other.link-label.mermaid',
          end: '\\s*(\\|)',
          endCaptures: {1: {name: 'keyword.operator.link-label.end.mermaid'}},
          name: 'meta.labelled-link.delimited.mermaid'
        },
        {match: '[xo<]?--+[-xo>]', name: 'keyword.operator.link.thin.mermaid'},
        {match: '[xo<]?==+[=xo>]', name: 'keyword.operator.link.thick.mermaid'},
        {
          match: '[xo<]?-?\\.+-[xo>]?',
          name: 'keyword.operator.link.dotted.mermaid'
        },
        {
          begin: '([xo<]?--)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.link.thin.begin.mermaid'}
          },
          contentName: 'string.unquoted.link-label.mermaid',
          end: '\\s*([xo<]?--+[-xo>])',
          endCaptures: {1: {name: 'keyword.operator.link.thin.end.mermaid'}},
          name: 'meta.labelled-link.mermaid'
        },
        {
          begin: '([xo<]?==)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.link.thick.begin.mermaid'}
          },
          contentName: 'string.unquoted.link-label.mermaid',
          end: '\\s*([xo<]?==+[=xo>])',
          endCaptures: {1: {name: 'keyword.operator.link.thick.end.mermaid'}},
          name: 'meta.link.thick.labelled.unpiped.mermaid'
        },
        {
          begin: '([xo<]?-\\.)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.link.dotted.begin.mermaid'}
          },
          contentName: 'string.unquoted.link-label.mermaid',
          end: '\\s*([xo<]?-?\\.+-[xo>]?)',
          endCaptures: {1: {name: 'keyword.operator.link.dotted.end.mermaid'}},
          name: 'meta.link.dotted.labelled.unpiped.mermaid'
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: '#style'},
        {include: '#class'},
        {include: '#click'},
        {include: '#link'},
        {include: '#subgraph'},
        {include: '#node'},
        {include: 'source.mermaid#terminator'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'}
      ]
    },
    node: {
      applyEndPatternLast: true,
      begin: '[\\w$&]+',
      beginCaptures: {0: {name: 'entity.name.tag.node.mermaid'}},
      end: '(?!\\G)|(?=\\s*(?:$|;))',
      name: 'meta.node.statement.mermaid',
      patterns: [
        {include: '#node-shapes'},
        {include: '#node-class-shorthand'},
        {include: '#node-combinator'},
        {include: '#link'}
      ]
    },
    'node-class-shorthand': {
      captures: {
        1: {name: 'keyword.operator.node-class.mermaid'},
        2: {name: 'constant.language.default-styling.mermaid'},
        3: {name: 'entity.name.class.mermaid'}
      },
      match: '(?<=\\S)(:::)(?:(?:(default)|([\\w$&]+))(?:\\b|(?<=[$&])))?'
    },
    'node-combinator': {
      captures: {1: {name: 'keyword.operator.logical.and.mermaid'}},
      match: '\\s+(&)(?:$|[ \\t]+)'
    },
    'node-innards': {
      patterns: [
        {
          begin: '\\G"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          end: '(")|([^"]+)$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.mermaid'},
            2: {patterns: [{include: '#unclosed-string'}]}
          },
          name: 'string.quoted.double.mermaid',
          patterns: [{include: '#html'}]
        },
        {
          begin: "\\G'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          end: "(')|([^']+)$",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.mermaid'},
            2: {patterns: [{include: '#unclosed-string'}]}
          },
          name: 'string.quoted.single.mermaid',
          patterns: [{include: '#html'}]
        },
        {include: '#html'}
      ]
    },
    'node-shape-circle': {
      begin: '\\G(\\({2})',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\){2}))|((?:(?<!\\))\\)(?!\\))|[^\\r\\n)])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.circle.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-cylinder': {
      begin: '\\G(\\[\\()',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\)\\]))|((?:[^\\r\\n)]|\\)(?!\\]))++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.cylinder.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-diamond': {
      begin: '\\G({)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((}))|([^\\r\\n}]+)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.diamond.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-double-circle': {
      begin: '\\G(\\({3})',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\){3}))|((?:[^\\r\\n)]|(?<!\\)\\))\\))++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.double-circle.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-ellipse': {
      begin: '\\G(\\(-)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((-\\)))|((?:[^-\\r\\n)]|-(?!\\)))++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.ellipse.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-hexagon': {
      begin: '\\G({{)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((}}))|((?:[^\\r\\n}]|}(?!}))++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.hexagon.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-polygon': {
      begin: '\\G(\\[[/\\\\])',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '(([\\\\/]\\]))|((?:[^\\r\\n\\]]|(?<![\\\\/])\\])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.polygon.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-rectangle-with-props': {
      begin: '\\G((\\[\\|))([A-Za-z]+)((:))([A-Za-z]+)((\\|))(?!\\])',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {name: 'entity.other.attribute-name.class.mermaid'},
        4: {name: 'punctuation.separator.key-value.colon.mermaid'},
        5: {name: 'sublimelinter.gutter-mark.mermaid'},
        6: {name: 'constant.other.attribute-value.mermaid'},
        7: {name: 'punctuation.separator.pipe.mermaid'},
        8: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\|\\]))|((?:[^\\r\\n\\]]|(?<!\\|)\\])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.rectangle-with-props.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-ribbon': {
      begin: '\\G(>)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\]))|([^\\r\\n\\]]+)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.ribbon.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-round': {
      begin: '\\G(\\()',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\)))|([^\\r\\n)]+)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.round.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-square': {
      begin: '\\G(\\[)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\]))|([^\\r\\n\\]]+)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.square.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-stadium': {
      begin: '\\G(\\(\\[)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\]\\)))|((?:[^\\r\\n)]|(?<!\\])\\))++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.stadium.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shape-subroutine': {
      begin: '\\G(\\[\\[)',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\]\\]))|((?:[^\\r\\n\\]]|(?<!\\])\\])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: '#unclosed-string'}]}
      },
      name: 'string.unquoted.node-text.subroutine.mermaid',
      patterns: [{include: '#node-innards'}]
    },
    'node-shapes': {
      patterns: [
        {include: '#node-shape-polygon'},
        {include: '#node-shape-stadium'},
        {include: '#node-shape-cylinder'},
        {include: '#node-shape-subroutine'},
        {include: '#node-shape-rectangle-with-props'},
        {include: '#node-shape-square'},
        {include: '#node-shape-double-circle'},
        {include: '#node-shape-circle'},
        {include: '#node-shape-ellipse'},
        {include: '#node-shape-round'},
        {include: '#node-shape-hexagon'},
        {include: '#node-shape-diamond'},
        {include: '#node-shape-ribbon'}
      ]
    },
    style: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))(style|classDef|linkStyle)(?=$|\\s|;)',
      beginCaptures: {0: {name: 'storage.type.style-definition.mermaid'}},
      end: '[ \\t]*$|(?=;)',
      name: 'meta.$1.statement.mermaid',
      patterns: [
        {
          captures: {1: {name: 'entity.name.tag.node.mermaid'}},
          match: '(?<=style)\\G\\s+([\\w$&]+)'
        },
        {
          captures: {
            1: {name: 'constant.language.default-styling.mermaid'},
            2: {name: 'entity.name.class.mermaid'}
          },
          match: '(?<=classDef)\\G\\s+(?:(default)|([\\w$&]+))(?:\\b|(?<=[$&]))'
        },
        {
          captures: {
            1: {name: 'constant.language.default-styling.mermaid'},
            2: {
              name: 'meta.link-indexes.mermaid',
              patterns: [
                {
                  match: '\\d+',
                  name: 'constant.numeric.integer.link-index.mermaid'
                },
                {include: '#comma'}
              ]
            },
            3: {name: 'keyword.operator.interpolation-type.mermaid'},
            4: {name: 'support.constant.interpolation-type.mermaid'}
          },
          match:
            '(?<=linkStyle)\\G\\s+(?:(default)|([,\\d]+))(?:\\s+(interpolate)\\s+([\\w$&]+))?(?=$|\\s|;)'
        },
        {include: 'source.mermaid#inline-css'}
      ]
    },
    subgraph: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))subgraph(?=$|\\s|;)',
      beginCaptures: {0: {name: 'keyword.control.subgraph.begin.mermaid'}},
      end: '(?:\\G|^|(?<=\\s|;|%%))end(?=$|\\s|;)',
      endCaptures: {0: {name: 'keyword.control.subgraph.end.mermaid'}},
      name: 'meta.subgraph.mermaid',
      patterns: [
        {
          begin: '\\G\\s+([\\w$&]+)[ \\t]*',
          beginCaptures: {1: {name: 'entity.name.subgraph.mermaid'}},
          end: '(?!\\G)|(?=[ \\t]*(?:$|;))',
          patterns: [
            {
              begin: '\\G(\\[)',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.mermaid'},
                1: {name: 'sublimelinter.gutter-mark.mermaid'}
              },
              end: '(\\])',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.mermaid'},
                1: {name: 'sublimelinter.gutter-mark.mermaid'}
              },
              name: 'string.unquoted.subgraph-title.mermaid'
            }
          ]
        },
        {include: 'source.mermaid#direction'},
        {include: '#main'}
      ]
    },
    'target-name': {
      captures: {1: {name: 'punctuation.definition.link-target.mermaid'}},
      match: '(?<=\\s|;|%%)(_)[-\\w]+(?=$|\\s|;|%%)',
      name: 'constant.language.link-target.mermaid'
    },
    tooltip: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mermaid'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
      name: 'string.quoted.double.callback-tooltip.mermaid'
    },
    'unclosed-string': {
      captures: {0: {patterns: [{include: '#html'}]}},
      match: '(?:^|\\G).+',
      name: 'invalid.illegal.unclosed-string.mermaid'
    },
    url: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          contentName: 'string.other.link.mermaid',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
          name: 'string.quoted.double.link-destination.mermaid'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          contentName: 'string.other.link.mermaid',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
          name: 'string.quoted.single.link-destination.mermaid'
        }
      ]
    }
  },
  scopeName: 'source.mermaid.flowchart'
}

export default grammar
