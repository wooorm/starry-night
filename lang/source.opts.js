// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: [],
  names: ['option-list', 'opts', 'ackrc'],
  patterns: [{include: '#main'}],
  repository: {
    escape: {
      patterns: [
        {include: 'etc#esc'},
        {
          captures: {
            1: {name: 'punctuation.definition.character.percentage.opts'}
          },
          match: '(%)[A-Fa-f0-9]{2}',
          name: 'constant.character.percent.url-encoded.opts'
        }
      ]
    },
    main: {
      patterns: [
        {include: 'etc#comment'},
        {include: '#option'},
        {include: '#escape'}
      ]
    },
    option: {
      patterns: [
        {
          begin: '((--?)[^-\\s=][^\\s=]*)',
          beginCaptures: {
            1: {name: 'entity.name.option.opts'},
            2: {name: 'punctuation.definition.option.name.dash.opts'}
          },
          end: '(?!\\G)(?=\\$|\\S)',
          name: 'meta.option.opts',
          patterns: [
            {
              captures: {
                1: {
                  name: 'string.regexp.opts',
                  patterns: [{include: 'source.regexp'}]
                }
              },
              match:
                '(?xi)\n(?<= # HACK: Fixed-width look-behinds enforced by Oniguruma\n\t\\w[-_]pattern \\G\n\t| reg[-_]exp   \\G\n\t| regexp       \\G\n\t| reg[-_]ex    \\G\n\t| regex        \\G\n) \\s+ (\\S+)'
            },
            {
              captures: {
                1: {patterns: [{include: 'etc#eql'}]},
                2: {patterns: [{include: '#value'}]}
              },
              match: '\\G(=)(\\S*)'
            },
            {
              captures: {1: {patterns: [{include: '#value'}]}},
              match: '\\G\\s+(?!#|-)(\\S+)'
            }
          ]
        }
      ]
    },
    value: {patterns: [{include: 'etc'}, {include: 'etc#bareword'}]}
  },
  scopeName: 'source.opts'
}

export default grammar
