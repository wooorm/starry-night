// These are all manually mapped from highlight.js/lowlight/refractor:
// * <https://github.com/wooorm/lowlight/blob/0803fc3/script/build-registry.js#L10>
// * <https://github.com/wooorm/lowlight/blob/0803fc3/lib/common.js>,
// into scopes matching `linguist.yml`.
/** @type {Array<string>} */
export const common = [
  'source.c', // `c`
  'source.c++', // `arduino`, `cpp`
  'source.cs', // `csharp`
  'source.css', // `css`
  'source.css.less', // `less`
  'source.css.scss', // `scss`
  'source.diff', // `diff`
  'source.go', // `go`
  'source.ini', // `ini`
  'source.java', // `java`
  'source.js', // `javascript`
  'source.json', // `json`
  'source.kotlin', // `kotlin`
  'source.lua', // `lua`
  'source.makefile', // `makefile`
  'source.objc', // `objectivec`
  'source.perl', // `perl`
  'source.python', // `python`, `python-repl`
  'source.r', // `r`
  'source.ruby', // `ruby`
  'source.rust', // `rust`
  'source.shell', // `bash`, `shell`
  'source.sql', // `sql`
  'source.swift', // `swift`
  'source.ts', // `typescript`
  'source.vbnet', // `vbnet`
  'source.yaml', // `yaml`
  'text.html.basic', // `xml` (HTML)
  'text.html.php', // `php`, `php-template`
  'text.md', // `markdown`
  'text.xml', // `xml`
  'text.xml.svg', // `xml` (SVG)

  // The only scope included in several of the above.
  'source.graphql' // Used in `js`, `ruby`, and `html`

  // Not included but used in the included:
  // 'source.applescript' referenced in `source.shell`
  // 'source.coffee' referenced in `text.html.basic`
  // 'text.html.smarty' referenced in `text.html.basic`

  // Included in lowlight or refractor but without textmate equivalent:
  // `plaintext`
]
