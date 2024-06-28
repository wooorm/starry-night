// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nixinova/NovaGrammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sln'],
  names: ['microsoft-visual-studio-solution'],
  patterns: [{include: '#main'}],
  repository: {
    booleans: {
      patterns: [
        {match: 'TRUE|FALSE', name: 'constant.language.boolean.solution'}
      ]
    },
    functions: {
      patterns: [
        {
          begin: '(?:Project|GlobalSection|Global)',
          beginCaptures: {0: {name: 'keyword.block.start.solution'}},
          end: 'End(?:Project|GlobalSection|Global)',
          endCaptures: {0: {name: 'keyword.block.start.solution'}},
          name: 'meta.block.solution',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.parens.begin.solution'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.parens.end.solution'}},
          name: 'meta.parens.solution',
          patterns: [{include: '#strings'}, {include: '#variables'}]
        }
      ]
    },
    header: {
      patterns: [
        {
          begin: 'Microsoft Visual Studio Solution File',
          end: '$',
          name: 'entity.other.header.format.solution'
        },
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.header.solution'}},
          end: '$',
          name: 'entity.other.header.major-version.solution'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#header'},
        {include: '#functions'},
        {include: '#variables'},
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#booleans'},
        {include: '#punct'}
      ]
    },
    numbers: {
      patterns: [
        {match: '\\d+(?:\\.\\d+)*', name: 'string.unquoted.version.solution'}
      ]
    },
    punct: {
      patterns: [
        {match: ',', name: 'punctuation.separator.attributes.solution'},
        {match: '.', name: 'punctuation.accessor.solution'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.other.string.begin.solution'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.other.string.end.solution'}},
          name: 'string.quoted.double.solution'
        },
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.other.guid.begin.solution'}},
          end: '}',
          endCaptures: {0: {name: 'punctuation.other.guid.end.solution'}},
          name: 'string.quoted.other.guid.solution'
        }
      ]
    },
    variables: {
      patterns: [
        {
          captures: {
            0: {name: 'variable.other.solution'},
            1: {name: 'punctuation.separator.declaration.solution'}
          },
          match: '(?<![.|])([A-Za-z]+)\\s*(=)',
          name: 'meta.generic.variable.other.solution'
        },
        {
          captures: {
            0: {name: 'variable.language.property.solution'},
            1: {name: 'punctuation.separator.property.solution'}
          },
          match: '([A-Za-z]+)\\s*(\\|)',
          name: 'meta.generic.variable.property.solution'
        },
        {
          match: '(?<=[.|])\\s*[A-Za-z0-9 ]+',
          name: 'variable.other.member.solution'
        },
        {
          match: '(?:pre|post)Solution',
          name: 'variable.language.setting.solution'
        },
        {match: '[A-Za-z]+', name: 'variable.other.solution'}
      ]
    }
  },
  scopeName: 'source.solution'
}

export default grammar
