// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dot', '.gv'],
  names: ['graphviz-(dot)'],
  patterns: [
    {
      captures: {
        1: {name: 'storage.type.dot'},
        2: {name: 'variable.other.dot'},
        4: {name: 'punctuation.section.dot'}
      },
      match: ' ?(digraph)[ \\t]+([A-Za-z0-9]+) ?(\\{)'
    },
    {match: '(<|-)(>|-)', name: 'keyword.operator.dot'},
    {
      match: '\\b(node|edge|graph|digraph|subgraph|strict)\\b',
      name: 'storage.type.dot'
    },
    {
      match:
        '\\b(bottomlabel|color|comment|distortion|fillcolor|fixedsize|fontcolor|fontname|fontsize|group|height|label|layer|orientation|peripheries|regular|shape|shapefile|sides|skew|style|toplabel|URL|width|z)\\b',
      name: 'support.constant.attribute.node.dot'
    },
    {
      match:
        '\\b(arrowhead|arrowsize|arrowtail|color|comment|constraint|decorate|dir|fontcolor|fontname|fontsize|headlabel|headport|headURL|label|labelangle|labeldistance|labelfloat|labelcolor|labelfontname|labelfontsize|layer|lhead|ltail|minlen|samehead|sametail|splines|style|taillabel|tailport|tailURL|weight)\\b',
      name: 'support.constant.attribute.edge.dot'
    },
    {
      match:
        '\\b(bgcolor|center|clusterrank|color|comment|compound|concentrate|fillcolor|fontname|fontpath|fontsize|label|labeljust|labelloc|layers|margin|mclimit|nodesep|nslimit|nslimit1|ordering|orientation|page|pagedir|quantum|rank|rankdir|ranksep|ratio|remincross|rotate|samplepoints|searchsize|size|style|URL)\\b',
      name: 'support.constant.attribute.graph.dot'
    },
    {
      match:
        '\\b(box|polygon|ellipse|circle|point|egg|triangle|plaintext|diamond|trapezium|parallelogram|house|pentagon|hexagon|septagon|octagon|doublecircle|doubleoctagon|tripleoctagon|invtriangle|invtrapezium|invhouse|Mdiamond|Msquare|Mcircle|rect|rectangle|none|note|tab|folder|box3d|component|max|min|same)\\b',
      name: 'variable.other.dot'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dot'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dot'}},
      name: 'string.quoted.double.dot',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.dot'}]
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.dot'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.dot'}},
          end: '\\n',
          name: 'comment.line.double-slash.dot'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.dot'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.dot'}},
          end: '\\n',
          name: 'comment.line.number-sign.dot'
        }
      ]
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.dot'}},
      end: '\\*/',
      name: 'comment.block.dot'
    }
  ],
  scopeName: 'source.dot'
}

export default grammar
