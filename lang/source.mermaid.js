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
  dependencies: [
    'source.mermaid.c4c-diagram',
    'source.mermaid.class-diagram',
    'source.mermaid.er-diagram',
    'source.mermaid.flowchart',
    'source.mermaid.gantt',
    'source.mermaid.gitgraph',
    'source.mermaid.mindmap',
    'source.mermaid.pie-chart',
    'source.mermaid.requirement-diagram',
    'source.mermaid.sequence-diagram',
    'source.mermaid.state-diagram',
    'source.mermaid.user-journey'
  ],
  extensions: ['.mmd', '.mermaid'],
  names: ['mermaid', 'mermaid-example'],
  patterns: [{include: '#main'}],
  repository: {
    a11y: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))acc(Title|Descr)(?:(?=\\s*[:{])|[ \\t]*$)',
      beginCaptures: {0: {name: 'variable.assignment.accessibility.mermaid'}},
      end: '(?!\\G)',
      name: 'meta.a11y-option.${1:/downcase}.mermaid',
      patterns: [
        {include: '#a11y-innards'},
        {
          applyEndPatternLast: true,
          begin: '\\G$',
          end: '(?!\\G)',
          patterns: [
            {begin: '\\G', end: '(?=\\S)'},
            {
              begin: '(?=:|{)',
              end: '(?!\\G)',
              patterns: [{include: '#a11y-innards'}]
            }
          ]
        }
      ]
    },
    'a11y-innards': {
      patterns: [
        {
          begin: '\\G\\s*(:)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.assignment.key-value.colon'}
          },
          contentName: 'string.unquoted.directive-value.single-line.mermaid',
          end: '[ \\t]*$'
        },
        {
          begin: '\\G\\s*({)[ \\t]*',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.string.curly.bracket.begin.mermaid'
            }
          },
          contentName:
            'string.quoted.other.curly.brackets.directive-value.multi-line.mermaid',
          end: '[ \\t]*(})',
          endCaptures: {
            1: {name: 'punctuation.definition.string.curly.bracket.end.mermaid'}
          }
        }
      ]
    },
    br: {
      captures: {0: {patterns: [{include: 'text.html.basic'}]}},
      match: '(?i)<br\\s*/?>',
      name: 'text.embedded.html.basic'
    },
    brace: {
      patterns: [
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '{',
          name: 'punctuation.definition.class.block.begin.mermaid'
        },
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '}',
          name: 'punctuation.definition.class.block.end.mermaid'
        }
      ]
    },
    'c4c-diagram': {
      begin:
        '^[ \\t]*(C4(Component|Container|Context|Deployment|Dynamic))(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.c4c-diagram.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.c4c-diagram.c4-${2:/downcase}.mermaid',
      patterns: [{include: 'source.mermaid.c4c-diagram'}]
    },
    'class-diagram': {
      begin: '^[ \\t]*(classDiagram(?:-v2)?)(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.class-diagram.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.class-diagram.mermaid',
      patterns: [{include: 'source.mermaid.class-diagram'}]
    },
    colon: {
      captures: {0: {name: 'punctuation.separator.message.key-value.mermaid'}},
      match: ':',
      name: 'keyword.operator.assignment.mermaid'
    },
    comma: {
      captures: {0: {name: 'sublimelinter.gutter-mark.mermaid'}},
      match: ',',
      name: 'punctuation.delimiter.comma.mermaid'
    },
    comment: {
      begin: '(?:\\G|^|(?<=\\s|;|%%))(%%)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.mermaid'}},
      end: '$',
      name: 'comment.line.percentage.mermaid'
    },
    direction: {
      captures: {
        1: {name: 'storage.type.direction.mermaid'},
        2: {name: 'constant.language.orientation.diagram.mermaid'}
      },
      match:
        '(?:\\G|^|(?<=\\s|;|%%))(direction)(?:\\s+(BT|LR|RL|TB|TD))?(?=$|\\s|;)',
      name: 'meta.direction.statement.mermaid'
    },
    directive: {
      begin: '%%(?={)',
      beginCaptures: {
        0: {name: 'punctuation.definition.directive.begin.mermaid'}
      },
      contentName: 'source.embedded.js',
      end: '%%$',
      endCaptures: {0: {name: 'punctuation.definition.directive.end.mermaid'}},
      name: 'meta.directive.mermaid',
      patterns: [{include: 'source.js'}]
    },
    entity: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.begin.mermaid'},
            2: {name: 'punctuation.definition.entity.end.mermaid'}
          },
          match: '(#)\\d+(;)',
          name: 'constant.character.entity.codepoint.mermaid'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.begin.mermaid'},
            2: {name: 'punctuation.definition.entity.end.mermaid'}
          },
          match: '(#)[a-zA-Z0-9]+(;)',
          name: 'constant.character.entity.named.mermaid'
        }
      ]
    },
    'er-diagram': {
      begin: '^[ \\t]*(erDiagram)(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.er-diagram.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.er-diagram.mermaid',
      patterns: [{include: 'source.mermaid.er-diagram'}]
    },
    flowchart: {
      begin: '^[ \\t]*(flowchart(?:-v2)?|graph)(?!-)\\b',
      beginCaptures: {1: {name: 'keyword.control.flowchart.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.flowchart.mermaid',
      patterns: [
        {
          captures: {
            1: {name: 'constant.language.orientation.flowchart.mermaid'}
          },
          match: '\\G\\s+(BT|LR|RL|TB|TD)(?=$|\\s)'
        },
        {include: 'source.mermaid.flowchart'}
      ]
    },
    gantt: {
      begin: '(?i)^[ \\t]*(gantt)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.control.gantt-chart.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.gantt-chart.mermaid',
      patterns: [{include: 'source.mermaid.gantt'}]
    },
    gitgraph: {
      begin: '(?i)^[ \\t]*(gitGraph)(?:\\s+(LR|BT))?(?:\\s*(:))?(?=$|\\s)',
      beginCaptures: {
        1: {name: 'keyword.control.gitgraph.begin.mermaid'},
        2: {name: 'constant.language.orientation.flowchart.mermaid'},
        3: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.gitgraph.mermaid',
      patterns: [{include: 'source.mermaid.gitgraph'}]
    },
    'inline-css': {
      patterns: [
        {
          captures: {
            0: {patterns: [{include: 'source.css#rule-list-innards'}]}
          },
          match: '(?=\\S)(?:[^,;\\r\\n%]|(?<!%)%(?!%))++',
          name: 'source.embedded.css'
        },
        {include: '#comma'}
      ]
    },
    main: {
      patterns: [
        {include: '#directive'},
        {include: '#comment'},
        {include: '#flowchart'},
        {include: '#sequence-diagram'},
        {include: '#class-diagram'},
        {include: '#state-diagram'},
        {include: '#er-diagram'},
        {include: '#user-journey'},
        {include: '#gantt'},
        {include: '#pie-chart'},
        {include: '#requirement-diagram'},
        {include: '#gitgraph'},
        {include: '#c4c-diagram'},
        {include: '#mindmap'}
      ]
    },
    mindmap: {
      begin: '(?i)^[ \\t]*(mindmap)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.control.mindmap.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.mindmap.mermaid',
      patterns: [{include: 'source.mermaid.mindmap'}]
    },
    'pie-chart': {
      begin: '(?i)^[ \\t]*(pie)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.control.pie-chart.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.pie-chart.mermaid',
      patterns: [{include: 'source.mermaid.pie-chart'}]
    },
    'requirement-diagram': {
      begin: '(?i)^[ \\t]*(requirementDiagram)(?=$|\\s)',
      beginCaptures: {
        1: {name: 'keyword.control.requirement-diagram.begin.mermaid'}
      },
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.requirement-diagram.mermaid',
      patterns: [{include: 'source.mermaid.requirement-diagram'}]
    },
    'sequence-diagram': {
      begin: '(?i)^[ \\t]*(sequenceDiagram)(?=$|\\s|;)',
      beginCaptures: {
        1: {name: 'keyword.control.sequence-diagram.begin.mermaid'}
      },
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.sequence-diagram.mermaid',
      patterns: [{include: 'source.mermaid.sequence-diagram'}]
    },
    'state-diagram': {
      begin: '(?i)^[ \\t]*(stateDiagram(?:-v2)?)(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.state-diagram.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.state-diagram.mermaid',
      patterns: [{include: 'source.mermaid.state-diagram'}]
    },
    terminator: {
      captures: {0: {name: 'sublimelinter.gutter-mark.mermaid'}},
      match: ';',
      name: 'punctuation.terminator.statement.mermaid'
    },
    'user-journey': {
      begin: '(?i)^[ \\t]*(journey)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.control.user-journey.begin.mermaid'}},
      end: '(?=A)B|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.user-journey.mermaid',
      patterns: [{include: 'source.mermaid.user-journey'}]
    }
  },
  scopeName: 'source.mermaid'
}

export default grammar
