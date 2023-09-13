// See also: <https://github.com/primer/github-syntax-dark/blob/master/lib/github-dark.css>
/** @type {Record<string, string>} */
const scopeToClassGithub = {
  'brackethighlighter.angle': 'pl-ba',
  'brackethighlighter.curly': 'pl-ba',
  'brackethighlighter.quote': 'pl-ba',
  'brackethighlighter.round': 'pl-ba',
  'brackethighlighter.square': 'pl-ba',
  'brackethighlighter.tag': 'pl-ba',
  'brackethighlighter.unmatched': 'pl-bu',
  'carriage-return': 'pl-c2',
  comment: 'pl-c',
  constant: 'pl-c1',
  'constant.character.escape': 'pl-cce',
  'constant.other.reference.link': 'pl-corl',
  entity: 'pl-e',
  'entity.name': 'pl-en',
  'entity.name.constant': 'pl-c1',
  'entity.name.tag': 'pl-ent',
  'invalid.broken': 'pl-bu',
  'invalid.deprecated': 'pl-bu',
  'invalid.illegal': 'pl-ii',
  'invalid.unimplemented': 'pl-bu',
  keyword: 'pl-k',
  // Note: this is included as `symbole` by GH, which is not included in any
  // grammar.
  // Should likely be `symbol`.
  'keyword.operator.symbol': 'pl-kos',
  'keyword.other.mark': 'pl-kos',
  'markup.bold': 'pl-mb',
  'markup.changed': 'pl-mc',
  'markup.deleted': 'pl-md',
  'markup.heading': 'pl-mh',
  'markup.ignored': 'pl-mi2',
  'markup.inserted': 'pl-mi1',
  'markup.italic': 'pl-mi',
  'markup.list': 'pl-ml',
  'markup.quote': 'pl-ent',
  'markup.raw': 'pl-c1',
  'markup.untracked': 'pl-mi2',
  'message.error': 'pl-bu',
  'meta.diff.header': 'pl-c1',
  'meta.diff.header.from-file': 'pl-md',
  'meta.diff.header.to-file': 'pl-mi1',
  'meta.diff.range': 'pl-mdr',
  'meta.module-reference': 'pl-c1',
  'meta.output': 'pl-c1',
  'meta.property-name': 'pl-c1',
  'meta.separator': 'pl-ms',
  'punctuation.definition.changed': 'pl-mc',
  'punctuation.definition.comment': 'pl-c',
  'punctuation.definition.deleted': 'pl-md',
  'punctuation.definition.inserted': 'pl-mi1',
  'punctuation.definition.string': 'pl-pds',
  'punctuation.section.embedded': 'pl-pse',

  // Note: orignally this is listed as `source` on GH.
  // However, every `source*` scope matches that in `vscode-textmate`, making it
  // useless because everything inside strings again matches it, meaning strings
  // aren’t colored.
  // For now, I instead looked for `\.source'` in `lang/`, and listed them below:
  'source.coffee.embedded.source': 'pl-s1',
  'source.groovy.embedded.source': 'pl-s1',
  'source.jq.embedded.source': 'pl-s1',
  'source.js.embedded.source': 'pl-s1',
  'source.livescript.embedded.source': 'pl-s1',
  'support.mnemonic.operand.source': 'pl-s1',
  'source.nu.embedded.source': 'pl-s1',
  'source.prisma.embedded.source': 'pl-s1',
  'source.scala.embedded.source': 'pl-s1',
  'stylus.embedded.source': 'pl-s1',

  'source.regexp': 'pl-pds',
  'source.ruby.embedded': 'pl-sre',
  storage: 'pl-k',
  'storage.modifier.import': 'pl-smi',
  'storage.modifier.package': 'pl-smi',
  'storage.type': 'pl-k',
  'storage.type.java': 'pl-smi',
  string: 'pl-s',
  'string.comment': 'pl-c',
  'string.other.link': 'pl-corl',
  'string.regexp': 'pl-sr',
  'string.regexp.arbitrary-repitition': 'pl-sra',
  'string.regexp.character-class': 'pl-pds',
  'string.unquoted.import.ada': 'pl-kos',
  'sublimelinter.gutter-mark': 'pl-sg',
  'sublimelinter.mark.error': 'pl-bu',
  'sublimelinter.mark.warning': 'pl-smw',
  support: 'pl-c1',
  'support.constant': 'pl-c1',
  'support.variable': 'pl-c1',
  variable: 'pl-v',
  'variable.language': 'pl-c1',
  'variable.other': 'pl-smi',
  'variable.other.constant': 'pl-c1',
  'variable.parameter.function': 'pl-smi'
}

/**
 * List of classes.
 * Their index is important.
 */
export const classes = [...new Set(Object.values(scopeToClassGithub))].sort()

/**
 * There is a single grandchild selector:
 *
 * ```css
 * .pl-s .pl-pse .pl-s1 // string punctuation.section.embedded source
 * ```
 *
 * …which is needed to “revert” the color of code when embedded in strings.
 *
 * We currently encode grandparents in `fontStyle`, which is a tiny space.
 * But that’s fine for 1 value.
 * On the receiving end (`parse`), any `fontStyle` is treated as
 * `grandparents[0]`.
 */
export const grandparents = ['pl-s']

/**
 * There are several child selectors:
 *
 * ```css
 * .pl-s .pl-v // string variable
 * .pl-s .pl-s1 // string source
 * .pl-s .pl-pse .pl-s1 // string punctuation.section.embedded source
 * .pl-sr .pl-cce // string.regexp constant.character.escape
 * .pl-sr .pl-sre // string.regexp source.ruby.embedded
 * .pl-sr .pl-sra // string.regexp string.regexp.arbitrary-repitition
 * .pl-mh .pl-en // markup.heading entity.name
 * ```
 */
const parents = new Set([
  // 'pl-s', // Ignore, it’s also a grandparent.
  'pl-pse',
  'pl-sr',
  'pl-mh'
])

/**
 * The color we ignore.
 */
export const transparent = '#FFFFFF'

/**
 * Our ✨ magic ✨ theme so we can sort of recreate the nested markup that GH
 * uses.
 */
export const theme = {
  name: 'custom',
  settings: [
    // Make sure there’s always a fore/background.
    {settings: {background: transparent, foreground: transparent}},
    // Add scopes.
    ...Object.keys(scopeToClassGithub).map(function (scope) {
      const className = scopeToClassGithub[scope]
      /** @type {string} */
      let field
      /** @type {string} */
      let value

      if (grandparents.includes(className)) {
        field = 'fontStyle'
        value = 'italic'
      } else {
        field = parents.has(className) ? 'background' : 'foreground'
        value = '#' + String(classes.indexOf(className)).padStart(6, '0')
      }

      return {scope: [scope], settings: {[field]: value}}
    })
  ]
}
