// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.toc'],
  names: ['world-of-warcraft-addon-data'],
  patterns: [
    {
      begin: '^## ',
      end: '(:|\\Z)',
      name: 'keyword.tag.toc',
      patterns: [
        {match: '([Xx]-[^:]+)', name: 'entity.name.tag.custom.toc'},
        {
          match:
            '(Title-|Notes-|Description-)(enUS|enGB|frFR|deDE|esES|esMX|itIT|ptBR|ruRU|koKR|zhTW|zhCN)',
          name: 'entity.name.tag.localized.toc'
        },
        {
          match:
            '(Interface|Title|Notes|Description|RequiredDeps|Dependencies|\\bDep[^:]+|OptionalDeps|LoadOnDemand|LoadWith|LoadManagers|SavedVariablesPerCharacter|SavedVariables|DefaultState|Secure|Author|Version)',
          name: 'entity.name.tag.toc'
        },
        {match: '\\S[^:]+', name: 'invalid.tag.toc'}
      ]
    },
    {
      captures: {
        1: {name: 'constant.character.escape.toc'},
        2: {name: 'string.escape.coloring.toc'}
      },
      match: '(\\|c)([a-fA-F0-9]{8})'
    },
    {match: '(\\|r)', name: 'constant.character.escape.toc'},
    {match: '(?<!^## )#.*$', name: 'comment.toc'},
    {match: '^(?!#)[^ ].+\\.xml', name: 'meta.require.xml.toc'}
  ],
  scopeName: 'source.toc'
}

export default grammar
