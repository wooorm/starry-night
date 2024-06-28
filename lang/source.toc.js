// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nebularg/language-toc-wow>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['world-of-warcraft-addon-data'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.tag.toc'},
        2: {
          name: 'keyword.tag.toc',
          patterns: [
            {match: '[Xx]-[^:]+', name: 'entity.name.tag.custom.toc'},
            {
              match:
                '(?i)(Title-|Notes-|)(?-i)(enUS|enCN|enGB|enTW|frFR|deDE|esES|esMX|itIT|ptBR|ptPT|ruRU|koKR|zhTW|zhCN)',
              name: 'entity.name.tag.localized.toc'
            },
            {
              match:
                '(?i)(Interface|Title|Notes|RequiredDeps|\\bDep[^:]*|OptionalDeps|LoadOnDemand|LoadWith|LoadManagers|SavedVariablesPerCharacter|SavedVariables|DefaultState|Author|Version|AddonCompartmentFunc|AddonCompartmentFuncOnEnter|AddonCompartmentFuncOnLeave|IconAtlas|IconTexture)',
              name: 'entity.name.tag.toc'
            },
            {
              match:
                '(?i)(AllowLoad|OnlyBetaAndPTR|SavedVariablesMachine|Secure|GuardedAddOn)',
              name: 'entity.name.tag.restricted.toc'
            },
            {match: '\\S[^:]+', name: 'invalid.tag.toc'}
          ]
        },
        3: {name: 'punctuation.separator.key-value'},
        4: {
          name: 'string.value.toc',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.escape.toc'},
                2: {name: 'string.escape.coloring.toc'}
              },
              match: '(\\|c)([a-fA-F0-9]{8})'
            },
            {match: '(\\|r)', name: 'constant.character.escape.toc'},
            {match: '@.*?@', name: 'constant.other.packager.toc'}
          ]
        }
      },
      match: '^(##\\s*(\\S+))\\s*(:)\\s*(.*)$'
    },
    {match: '#.*$', name: 'comment.toc'},
    {match: '^(?!#)[^ ].+\\.xml', name: 'meta.require.xml.toc'},
    {match: '@.*?@', name: 'constant.other.packager.toc'}
  ],
  scopeName: 'source.toc'
}

export default grammar
