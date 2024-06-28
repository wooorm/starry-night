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
    'composite-state': {
      begin: '^\\s*(state)(?:\\s+([^-:\\s{]+))?\\s*({)',
      beginCaptures: {
        1: {name: 'storage.type.state.mermaid'},
        2: {name: 'variable.state.name.mermaid'},
        3: {patterns: [{include: 'source.mermaid#brace'}]}
      },
      end: '}',
      endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      name: 'meta.state.composite.mermaid',
      patterns: [{include: '#main'}]
    },
    concurrency: {
      match: '--',
      name: 'keyword.control.flow.concurrency.mermaid'
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#direction'},
        {include: '#terminal'},
        {include: '#transition'},
        {include: '#composite-state'},
        {include: '#note'},
        {include: '#concurrency'},
        {include: '#state'}
      ]
    },
    marker: {
      captures: {
        1: {name: 'punctuation.definition.marker.begin.mermaid'},
        2: {name: 'sublimelinter.gutter-mark'},
        4: {name: 'punctuation.definition.marker.end.mermaid'},
        5: {name: 'sublimelinter.gutter-mark'}
      },
      match: '((<<))(choice|fork|join)((>>))',
      name: 'entity.name.tag.modifier.$2.mermaid'
    },
    note: {
      begin: '^\\s*(note)\\s+((?:left|right)\\s+of)\\s+([^-:\\s{]+)',
      beginCaptures: {
        1: {name: 'storage.type.note.mermaid'},
        2: {name: 'constant.language.note-position.mermaid'},
        3: {name: 'variable.state.name.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.note.mermaid',
      patterns: [
        {
          begin: '\\G[ \\t]*$',
          contentName: 'string.unquoted.note-text.mermaid',
          end: '^\\s*(end)\\s+(note)(?=$|\\s)',
          endCaptures: {
            1: {name: 'keyword.operator.end-note.mermaid'},
            2: {name: 'storage.type.note.mermaid'}
          }
        },
        {
          begin: '\\G\\s*(:)[ \\t]*',
          beginCaptures: {1: {patterns: [{include: 'source.mermaid#colon'}]}},
          contentName: 'string.unquoted.note-text.mermaid',
          end: '(?=\\s*$)'
        }
      ]
    },
    state: {
      patterns: [
        {
          begin: '^\\s*(state)(?=$|\\s)[ \\t]*',
          beginCaptures: {1: {name: 'storage.type.state.mermaid'}},
          end: '(?=\\s*$)',
          name: 'meta.state.statement.mermaid',
          patterns: [
            {
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.mermaid'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.mermaid'}
              },
              name: 'string.quoted.double.state-description.mermaid'
            },
            {
              match: '\\G(?:[^-:\\s{%]|%(?!%))++',
              name: 'variable.state.name.mermaid'
            },
            {
              begin: '(?<=")\\s*(as)(?=$|\\s)',
              beginCaptures: {1: {name: 'keyword.operator.alias.mermaid'}},
              end: '[^-:\\s{]+|(?=\\s*(?:$|%%))',
              endCaptures: {0: {name: 'variable.state.name.mermaid'}}
            },
            {include: '#marker'}
          ]
        },
        {
          begin: '([^-:\\s{]+)\\s*(:)[ \\t]*',
          beginCaptures: {
            1: {name: 'variable.state.name.mermaid'},
            2: {patterns: [{include: 'source.mermaid#colon'}]}
          },
          contentName: 'string.unquoted.state-description.mermaid',
          end: '(?=\\s*(?:$|%%))'
        },
        {match: '[^-:\\s{]+', name: 'variable.state.name.mermaid'}
      ]
    },
    terminal: {
      patterns: [
        {
          match: '\\[\\*\\](?=\\s*-->)',
          name: 'constant.language.state.initial.mermaid'
        },
        {
          captures: {1: {name: 'constant.language.state.final.mermaid'}},
          match: '(?<=-->)\\s*(\\[\\*\\])'
        }
      ]
    },
    transition: {match: '-->', name: 'keyword.operator.transition.mermaid'}
  },
  scopeName: 'source.mermaid.state-diagram'
}

export default grammar
