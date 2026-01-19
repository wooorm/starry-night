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
    line: {
      begin: '^\\s*(?=[^\\s,])',
      end: '(?=\\s*$)',
      name: 'meta.record.mermaid',
      patterns: [
        {
          begin: '\\G[ \\t]*',
          end: '[ \\t]*((,))',
          endCaptures: {
            1: {name: 'punctuation.delimiter.comma.mermaid'},
            2: {name: 'sublimelinter.gutter-mark'}
          },
          name: 'meta.column.1.mermaid',
          patterns: [
            {
              applyEndPatternLast: true,
              begin: '\\G(?=")',
              end: '(?!\\G)',
              name: 'entity.name.tag.source.quoted.mermaid',
              patterns: [{include: '#string'}]
            },
            {
              begin: '\\G(?=[^,\\s])',
              end: '(?=\\s*(?:,|$))',
              name: 'entity.name.tag.source.unquoted.mermaid'
            }
          ]
        },
        {
          applyEndPatternLast: true,
          begin: '(?<=,)',
          end: '(?!\\G)',
          patterns: [
            {
              begin: '\\G[ \\t]*',
              end: '[ \\t]*((,))',
              endCaptures: {
                1: {name: 'punctuation.delimiter.comma.mermaid'},
                2: {name: 'sublimelinter.gutter-mark'}
              },
              name: 'meta.column.2.mermaid',
              patterns: [
                {
                  begin: '\\G(?=")',
                  end: '(?!\\G)',
                  name: 'entity.name.target.quoted.mermaid',
                  patterns: [{include: '#string'}]
                },
                {
                  begin: '\\G(?=[^,\\s])',
                  end: '(?=\\s*(?:,|$))',
                  name: 'entity.name.target.unquoted.mermaid'
                }
              ]
            },
            {
              begin: '(?<=,)[ \\t]*',
              end: '[ \\t]*(?=$|,)',
              name: 'meta.column.3.mermaid',
              patterns: [
                {
                  begin: '\\G(?=")',
                  end: '(?!\\G)',
                  name: 'constant.numeric.data.quoted.mermaid',
                  patterns: [{include: '#string'}]
                },
                {
                  begin: '\\G(?=[^,\\s])',
                  end: '(?=\\s*(?:,|$))',
                  name: 'constant.numeric.data.unquoted.mermaid'
                }
              ]
            }
          ]
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#line'}
      ]
    },
    string: {
      begin: '\\G(")',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.mermaid'},
        1: {name: 'brackethighlighter.quote'}
      },
      end: '(")(?!")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.mermaid'},
        1: {name: 'brackethighlighter.quote'}
      },
      patterns: [{match: '""', name: 'constant.character.escape.quote.mermaid'}]
    }
  },
  scopeName: 'source.mermaid.sankey'
}

export default grammar
