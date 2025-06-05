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
                '(?i)(Title-|Notes-|Category-|)(?-i)(enUS|enCN|enGB|enTW|frFR|deDE|esES|esMX|itIT|ptBR|ptPT|ruRU|koKR|zhTW|zhCN)',
              name: 'entity.name.tag.localized.toc'
            },
            {
              match:
                '(?i)(Interface|Title|Notes|RequiredDeps|\\bDep[^:]*|OptionalDeps|LoadOnDemand|LoadWith|LoadManagers|AllowLoadGameType|SavedVariablesPerCharacter|SavedVariables|LoadSavedVariablesFirst|DefaultState|Author|Version|AddonCompartmentFunc(OnEnter|OnLeave)?|IconAtlas|IconTexture|Category|Group)',
              name: 'entity.name.tag.toc'
            },
            {
              match:
                '(?i)(AllowLoad|OnlyBetaAndPTR|SavedVariablesMachine|Secure|LoadFirst|UseSecureEnvironment)',
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
    {
      begin: '^(?!#)\\s*(?=[\\w\\[])',
      end: '\\n',
      name: 'entity.name.file.toc',
      patterns: [
        {include: '#inline-conditional-directive'},
        {include: '#inline-variable-directive'}
      ]
    },
    {match: '@.*?@', name: 'constant.other.packager.toc'}
  ],
  repository: {
    'inline-conditional-directive': {
      captures: {
        1: {
          name: 'keyword.tag.toc',
          patterns: [
            {match: '(?i)(AllowLoadGameType)', name: 'entity.name.tag.toc'},
            {match: '(?i)(AllowLoad)', name: 'entity.name.tag.restricted.toc'},
            {match: '.+', name: 'invalid.tag.toc'}
          ]
        },
        2: {name: 'punctuation.separator.key-value'},
        3: {name: 'string.escape.coloring.toc'}
      },
      match: '\\[(\\w+)(\\s+)([^\\]]*)\\]',
      name: 'keyword.tag.toc'
    },
    'inline-variable-directive': {
      captures: {
        1: {
          name: 'keyword.tag.toc',
          patterns: [
            {match: '(?i)(Family|Game)', name: 'entity.name.tag.variable.toc'},
            {match: '\\S[^:]+', name: 'invalid.tag.toc'}
          ]
        }
      },
      match: '\\[(\\w+)\\]',
      name: 'keyword.tag.toc'
    }
  },
  scopeName: 'source.toc'
}

export default grammar
