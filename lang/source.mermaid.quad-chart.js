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
    axes: {
      begin: '(?i)^\\s*([xy]-axis)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.operator.axis.mermaid'}},
      end: '(?=\\s*(?:$|%%))',
      name: 'meta.${1:/downcase}.statement.mermaid',
      patterns: [
        {
          captures: {1: {name: 'string.unquoted.axis-label.first.mermaid'}},
          match: '\\G\\s*(\\S.+?)(?=\\s+--+>\\s|\\s*(?:$|%%))'
        },
        {
          begin: '(?!\\G)[ \\t]+((--+>))(?:[ \\t]+|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.label-separator.mermaid'},
            2: {name: 'punctuation.definition.separator.mermaid'}
          },
          contentName: 'string.unquoted.axis-label.second.mermaid',
          end: '(?=\\s*(?:$|%%))'
        }
      ]
    },
    class: {
      begin: '(?i)^\\s*(classDef)(?:\\s+(\\w+))?(?=\\s|$)',
      beginCaptures: {
        1: {name: 'storage.type.style-definition.mermaid'},
        2: {name: 'entity.name.class.mermaid'}
      },
      end: '(?=\\s*(?:$|%%))',
      name: 'meta.class-definition.statement.mermaid',
      patterns: [{include: 'source.mermaid#inline-css'}]
    },
    coordinates: {
      begin: '(\\[)',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.begin.mermaid'},
        1: {name: 'brackethighlighter.square'}
      },
      end: '(\\])',
      endCaptures: {
        0: {name: 'punctuation.definition.array.end.mermaid'},
        1: {name: 'brackethighlighter.square'}
      },
      name: 'meta.array.coordinates.mermaid',
      patterns: [
        {
          match: '[-+]?\\d+(?:\\.\\d+)?',
          name: 'constant.numeric.decimal.ordinate.mermaid'
        },
        {include: 'source.mermaid#comma'}
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#title'},
        {include: '#axes'},
        {include: '#quads'},
        {include: '#class'},
        {include: '#points'}
      ]
    },
    points: {
      applyEndPatternLast: true,
      begin:
        '^\\s*((?!\\s)(?:[-\\s\\w,!?.\'"*/\\\\&#`+=$]|%(?!%))++(?<!\\s))(?:(:::)(\\w+))?(:)',
      beginCaptures: {
        1: {name: 'entity.name.tag.point.mermaid'},
        2: {name: 'keyword.operator.css-class.mermaid'},
        3: {name: 'constant.language.css-class.mermaid'},
        4: {name: 'keyword.operator.assignment.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.data-point.mermaid',
      patterns: [
        {
          begin: '\\G',
          end: '\\s*(?=\\[)|^\\s*([^\\s\\[])',
          endCaptures: {1: {name: 'invalid.illegal.syntax.mermaid'}}
        },
        {include: '#coordinates'},
        {
          begin: '(?<=\\])\\s*(?=[^%\\s])',
          end: '(?=\\s*(?:$|%%))',
          patterns: [{include: 'source.mermaid#inline-css'}]
        }
      ]
    },
    quads: {
      begin: '(?i)^\\s*(quadrant-([1-4]))(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.operator.quadrant.mermaid'}},
      contentName: 'string.unquoted.quadrant-label.mermaid',
      end: '(?=\\s*(?:$|%%))',
      name: 'meta.quadrant.$2.mermaid'
    }
  },
  scopeName: 'source.mermaid.quad-chart'
}

export default grammar
