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
  dependencies: ['source.mermaid', 'source.mermaid.flowchart'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    class: {match: '[^\\)\\s]+', name: 'constant.language.css-class.mermaid'},
    classes: {
      begin: '^([ \\t]*)(:::)[ \\t]*',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.indent.mermaid'},
        2: {name: 'keyword.operator.css-class.mermaid'}
      },
      end: '(?=\\s*$)',
      name: 'meta.node.class-list.mermaid',
      patterns: [{include: '#class'}]
    },
    icon: {
      begin: '(?i)^([ \\t]*)((::)icon)(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.indent.mermaid'},
        2: {name: 'keyword.operator.css-class.mermaid'},
        3: {name: 'punctuation.definition.keyword.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.icon.class-list.mermaid',
      patterns: [
        {
          begin: '\\G(\\()',
          beginCaptures: {
            0: {
              name: 'punctuation.section.function.bracket.round.begin.mermaid'
            },
            1: {name: 'sublimelinter.gutter-mark.mermaid'}
          },
          end: '(\\))',
          endCaptures: {
            0: {name: 'punctuation.section.function.bracket.round.end.mermaid'},
            1: {name: 'sublimelinter.gutter-mark.mermaid'}
          },
          name: 'meta.arguments.mermaid',
          patterns: [{include: '#class'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#node'}
      ]
    },
    node: {
      begin:
        '(?i)^([ \\t]+|^(?!\\s))(?!%|\\s|:::|::icon\\x28)([^-\\(\\[\\r\\n\\){}]+)[ \\t]*',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.indent.mermaid'},
        2: {
          name: 'entity.name.tag.node.mermaid',
          patterns: [{include: 'source.mermaid#br'}]
        }
      },
      end: '^(?!\\1\\s+)(?=\\s)|^(?=\\S)',
      name: 'meta.node.${2:/asciify/downcase}.mermaid',
      patterns: [
        {include: 'source.mermaid.flowchart#node-shape-square'},
        {include: 'source.mermaid.flowchart#node-shape-hexagon'},
        {include: 'source.mermaid.flowchart#node-shape-circle'},
        {include: 'source.mermaid.flowchart#node-shape-round'},
        {include: '#node-shape-bang'},
        {include: '#node-shape-cloud'},
        {include: '#classes'},
        {include: '#icon'},
        {include: '#main'}
      ]
    },
    'node-shape-bang': {
      begin: '\\G(\\){2})',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\({2}))|((?:(?<!\\))\\)(?!\\))|[^\\r\\n)])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: 'source.mermaid#br'}]}
      },
      name: 'string.unquoted.node-text.bang.mermaid',
      patterns: [{include: 'source.mermaid#br'}]
    },
    'node-shape-cloud': {
      begin: '\\G(\\))',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark.mermaid'}
      },
      end: '((\\())|((?:(?<!\\))\\)(?!\\))|[^\\r\\n)])++)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'sublimelinter.gutter-mark.mermaid'},
        3: {patterns: [{include: 'source.mermaid#br'}]}
      },
      name: 'string.unquoted.node-text.cloud.mermaid',
      patterns: [{include: 'source.mermaid#br'}]
    }
  },
  scopeName: 'source.mermaid.mindmap'
}

export default grammar
