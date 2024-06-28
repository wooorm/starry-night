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
  dependencies: ['source.json', 'source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    command: {
      begin:
        '(?i)(?:^|\\G|(?<=;))[ \\t]*(branch|checkout|cherry-pick|commit|merge|reset)(?=$|\\s)',
      beginCaptures: {
        1: {name: 'keyword.operator.git-action.${1:/downcase}.mermaid'}
      },
      end: '(?=\\s*(?:$|;))',
      name: 'meta.${1:/downcase}.statement.mermaid',
      patterns: [
        {
          captures: {1: {name: 'entity.name.object.mermaid'}},
          match: '\\G\\s*([^"\\s:;]+)(?=$|\\s|;)(?!\\s*:)'
        },
        {include: '#string'},
        {include: '#fields'}
      ]
    },
    fields: {
      patterns: [
        {include: '#order'},
        {include: '#tag'},
        {include: '#type'},
        {
          begin: '(?i)(?:^|\\G|(?<=\\s))\\s*((?=\\w)[-\\w]+)\\s*(:)[ \\t]*',
          beginCaptures: {
            1: {name: 'variable.assignment.field.user-defined.mermaid'},
            2: {patterns: [{include: 'source.mermaid#colon'}]}
          },
          end: '(?!\\G)',
          patterns: [{include: '#unquoted-string'}, {include: '#string'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#terminator'},
        {include: '#options'},
        {include: '#command'}
      ]
    },
    options: {
      begin: '(?i)(?:^|\\G|(?<=\\s))(options)[ \\t]*$',
      beginCaptures: {1: {name: 'keyword.control.options.begin.mermaid'}},
      contentName: 'source.embedded.json',
      end: '^\\s*(end)(?=$|\\s)',
      endCaptures: {1: {name: 'keyword.control.options.end.mermaid'}},
      name: 'meta.options.mermaid',
      patterns: [{include: 'source.json'}]
    },
    order: {
      begin: '(?i)(?:^|\\G|(?<=\\s))\\s*(order)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?!\\G)',
      name: 'meta.field.order.mermaid',
      patterns: [
        {
          match: '\\G[-+]?\\d+(?:\\.\\d+)?',
          name: 'constant.numeric.decimal.order.index.mermaid'
        }
      ]
    },
    string: {
      begin: '(?:^|\\G|(?<=\\s))"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mermaid'}},
      end: '(")|([^"\\r\\n]*)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.mermaid'},
        2: {name: 'invalid.illegal.unclosed-string.mermaid'}
      },
      name: 'string.quoted.double.mermaid',
      patterns: [{include: 'source.mermaid#entity'}]
    },
    tag: {
      begin: '(?i)(?:^|\\G|(?<=\\s))\\s*(tag)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?!\\G)',
      name: 'meta.field.tag.mermaid',
      patterns: [{include: '#string'}]
    },
    type: {
      begin: '(?i)(?:^|\\G|(?<=\\s))\\s*(type)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?!\\G)',
      name: 'meta.field.type.mermaid',
      patterns: [
        {
          match: '\\G(HIGHLIGHT|NORMAL|REVERSE)(?=$|\\s)',
          name: 'constant.language.merge-type.mermaid'
        },
        {
          match: '\\G[^\\s;]+',
          name: 'invalid.illegal.unrecognised-type.mermaid'
        }
      ]
    },
    'unquoted-string': {
      match: '(?:\\G)[^\\s":;]+(?!\\s*:)',
      name: 'string.unquoted.bareword.mermaid'
    }
  },
  scopeName: 'source.mermaid.gitgraph'
}

export default grammar
