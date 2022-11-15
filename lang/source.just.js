// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/skellock/vscode-just>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['just', 'justfile'],
  patterns: [
    {include: '#interpolate'},
    {include: '#comments'},
    {include: '#scripts'},
    {include: '#strings'},
    {include: '#assignments'},
    {include: '#recipeDefinition'},
    {include: '#keywords'}
  ],
  repository: {
    assignments: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.just'},
            2: {name: 'variable.name.just'}
          },
          match: '^(export[\\s]?)?([a-zA-Z_][a-zA-Z0-9_-]*)='
        }
      ]
    },
    comments: {patterns: [{match: '^#[^!].*', name: 'comment.line.just'}]},
    interpolate: {
      patterns: [
        {begin: '\\{\\{', end: '\\}\\}', name: 'string.interpolated.just'}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(arch|os|os_family|env_var|env_var_or_default)\\b',
          name: 'keyword.control.just'
        }
      ]
    },
    recipeDefinition: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.just'},
            2: {name: 'entity.name.function.just'},
            3: {
              patterns: [
                {
                  captures: {
                    0: {name: 'variable.name.just'},
                    1: {name: 'constant.other.just'},
                    2: {name: 'variable.parameter.just'}
                  },
                  match: '[\\s]*[a-zA-Z0-9-_]*(=?)(.*)',
                  name: 'constant.character.escape.just'
                }
              ]
            },
            4: {name: 'support.type.property-name.just'}
          },
          match:
            '^(@)?([a-zA-Z_][a-zA-Z0-9_-]*)([a-zA-Z0-9=\\s_-`\'"]*):([\\sa-zA-Z0-9_-]*).*$'
        }
      ]
    },
    scripts: {
      patterns: [
        {begin: '\\s#\\!', end: '$', name: 'support.type.property-name.just'}
      ]
    },
    strings: {
      patterns: [
        {begin: '`', end: '`', name: 'string.quoted.triple.just'},
        {begin: '"', end: '"', name: 'string.quoted.double.just'},
        {begin: "'", end: "'", name: 'string.quoted.single.just'}
      ]
    }
  },
  scopeName: 'source.just'
}

export default grammar
