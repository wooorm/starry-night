import assert from 'node:assert/strict'
import test from 'node:test'
import {toHtml} from 'hast-util-to-html'
import sourceAssembly from './lang/source.assembly.js'
import sourceCss from './lang/source.css.js'
import textMd from './lang/text.md.js'
import textPhp from './lang/text.html.php.js'
import textXml from './lang/text.xml.js'
import textXmlSvg from './lang/text.xml.svg.js'
import {createStarryNight, common} from './index.js'

test('.flagToScope(flag)', async () => {
  const starryNight = await createStarryNight(common)

  assert.throws(
    () => {
      // @ts-expect-error runtime.
      starryNight.flagToScope()
    },
    /Expected `string` for `flag`, got `undefined`/,
    'should throw when not given a `flag`'
  )

  assert.equal(
    starryNight.flagToScope('pandoc'),
    'text.md',
    'should support names'
  )
  assert.equal(
    starryNight.flagToScope('workbook'),
    'text.md',
    'should support extensions (w/o dot)'
  )
  assert.equal(
    starryNight.flagToScope('.workbook'),
    'text.md',
    'should support extensions (w/ dot)'
  )
  assert.equal(starryNight.flagToScope('whatever'), undefined)

  const phpThenAssembly = await createStarryNight([textPhp, sourceAssembly])
  assert.equal(
    phpThenAssembly.flagToScope('.inc'),
    sourceAssembly.scopeName,
    'should support the scope that GH uses for an extension w/ dot (1)'
  )
  assert.equal(
    phpThenAssembly.flagToScope('inc'),
    textPhp.scopeName,
    'should support the scope that GH uses for an extension w/o dot (1)'
  )
  const assemblyThenPhp = await createStarryNight([sourceAssembly, textPhp])
  assert.equal(
    sourceAssembly.scopeName,
    'source.assembly',
    'should support the scope that GH uses for an extension w/ dot (2)'
  )
  assert.equal(
    assemblyThenPhp.flagToScope('inc'),
    textPhp.scopeName,
    'should support the scope that GH uses for an extension w/o dot (2)'
  )

  assert.equal(
    phpThenAssembly.flagToScope('path/to/example.inc.bak'),
    undefined,
    'should not support file paths with a known extension followed by an unknown one'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/example.bak.inc'),
    sourceAssembly.scopeName,
    'should support file paths with an unknown extension followed by a known one'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/example.inc#asd'),
    undefined,
    'should not support file paths with a known extension followed by a hash'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/example.inc?asd=1'),
    undefined,
    'should not support file paths with a known extension followed by a search'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/example.inc'),
    sourceAssembly.scopeName,
    'should support file paths with a known extension'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/exampleinc'),
    undefined,
    'should not support file paths with a known extension, without the needed dot'
  )
  assert.equal(
    phpThenAssembly.flagToScope('path/to/inc'),
    undefined,
    'should not support file paths with a known extension, without the needed dot, as a filename'
  )

  const {default: asn} = await import('./lang/source.asn.js')
  const starryAsn = await createStarryNight([asn])
  assert.equal(
    starryAsn.flagToScope('asn.1'),
    'source.asn',
    'should support language names with dots (`.`)'
  )

  const {default: cs} = await import('./lang/source.cs.js')
  const starryCs = await createStarryNight([cs])
  assert.equal(
    starryCs.flagToScope('c#'),
    'source.cs',
    'should support language names with number signs (`#`)'
  )

  const {default: cpp} = await import('./lang/source.c++.js')
  const starryCpp = await createStarryNight([cpp])
  assert.equal(
    starryCpp.flagToScope('c++'),
    'source.c++',
    'should support language names with plusses (`+`)'
  )

  const {default: fStar} = await import('./lang/source.fstar.js')
  const starryFStar = await createStarryNight([fStar])
  assert.equal(
    starryFStar.flagToScope('f*'),
    'source.fstar',
    'should support language names with asterisks (`*`)'
  )

  const {default: capnp} = await import('./lang/source.capnp.js')
  const starryCapnp = await createStarryNight([capnp])
  assert.equal(
    starryCapnp.flagToScope("cap'n-proto"),
    'source.capnp',
    "should support language names with apostrophes (`'`)"
  )

  const {default: dot} = await import('./lang/source.dot.js')
  const starryDot = await createStarryNight([dot])
  assert.equal(
    starryDot.flagToScope('graphviz-(dot)'),
    'source.dot',
    'should support language names with parens (`(`, `)`)'
  )

  const {default: json} = await import('./lang/source.json.js')
  const starryJson = await createStarryNight([json])
  assert.equal(
    starryJson.flagToScope('max/msp'),
    'source.json',
    'should support language names with slashes (`/`)'
  )
})

test('.createStarryNight with options', () => {
  assert.rejects(
    async () => {
      await createStarryNight(common, {
        getOnigurumaUrlFs: () => new URL('file:///foo/baz/onig.wasm')
      })
    },
    /no such file or directory/,
    'should support `getOnigurumaUrlFs`'
  )
})

test('.scopes()', async () => {
  const starryNight = await createStarryNight(common)
  const list = starryNight.scopes()

  assert.ok(Array.isArray(list), 'should return an array')
  assert.ok(
    list.every((d) => typeof d === 'string'),
    'should return an array of strings'
  )
  assert.ok(list.includes('source.js'), 'should include `js`')
})

test('.missingScopes()', async () => {
  const svg = await createStarryNight([textXmlSvg])
  const svgAndXml = await createStarryNight([textXmlSvg, textXml])
  assert.deepEqual(
    svg.missingScopes(),
    ['text.xml'],
    'should list missing scopes'
  )
  assert.deepEqual(
    svgAndXml.missingScopes(),
    [],
    'should list no missing scopes'
  )
})

test('.register(grammars)', async () => {
  const starryNight = await createStarryNight([textMd])

  await starryNight.register([sourceCss])

  assert.equal(
    toHtml(starryNight.highlight('em { color: red }', 'source.css')),
    '<span class="pl-ent">em</span> { <span class="pl-c1">color</span>: <span class="pl-c1">red</span> }',
    'should support adding languages'
  )

  assert.equal(
    toHtml(starryNight.highlight('```css\nem { color: red }\n```', 'text.md')),
    '<span class="pl-s">```</span><span class="pl-en">css</span>\n<span class="pl-ent">em</span> { <span class="pl-c1">color</span>: <span class="pl-c1">red</span> }\n<span class="pl-s">```</span>',
    'should support adding deep languages'
  )
})

test('.highlight(value, scope)', async () => {
  const starryNight = await createStarryNight(common)

  assert.throws(
    () => {
      // @ts-expect-error runtime.
      starryNight.highlight()
    },
    /Expected `string` for `value`, got `undefined`/,
    'should throw when not given a `value`'
  )

  assert.throws(
    () => {
      // @ts-expect-error runtime.
      starryNight.highlight('alert(1)')
    },
    /Expected `string` for `scope`, got `undefined`/,
    'should throw when not given a `scope`'
  )

  assert.throws(
    () => {
      starryNight.highlight('alert(1)', 'whatever')
    },
    /Expected grammar `whatever` to be registered/,
    'should throw when given an unregistered `scope`'
  )

  assert.equal(
    toHtml(starryNight.highlight('', 'source.js')),
    '',
    'should work on an empty string'
  )

  assert.equal(
    toHtml(starryNight.highlight('\n \n\t\r\n \r', 'source.js')),
    '\n \n\t\r\n \r',
    'should work on some whitespace (1, js)'
  )

  assert.equal(
    toHtml(starryNight.highlight('\n \n\t\r\n \r', 'text.html.basic')),
    '\n \n\t\r\n \r',
    'should work on some whitespace (2, js)'
  )

  assert.equal(
    toHtml(starryNight.highlight('alert(1)', 'source.js')),
    '<span class="pl-en">alert</span>(<span class="pl-c1">1</span>)',
    'should generate'
  )

  assert.equal(
    toHtml(starryNight.highlight('# asd *qwe* rty', 'text.md')),
    '<span class="pl-mh"># <span class="pl-en">asd </span></span><span class="pl-s"><span class="pl-mh"><span class="pl-en">*</span></span></span><span class="pl-mh"><span class="pl-en">qwe</span></span><span class="pl-s"><span class="pl-mh"><span class="pl-en">*</span></span></span><span class="pl-mh"><span class="pl-en"> rty</span></span>',
    'should generate parents'
  )

  assert.equal(
    toHtml(starryNight.highlight('let a = `${b}`', 'source.js')),
    '<span class="pl-k">let</span> a <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">`</span><span class="pl-pse"><span class="pl-s1">${</span></span><span class="pl-s1">b</span><span class="pl-pse"><span class="pl-s1">}</span></span><span class="pl-pds">`</span></span>',
    'should generate grandparents'
  )

  assert.equal(
    toHtml(starryNight.highlight('1 +\n2', 'source.js')),
    '<span class="pl-c1">1</span> <span class="pl-k">+</span>\n<span class="pl-c1">2</span>',
    'should generate multiple lines'
  )

  assert.equal(
    toHtml(starryNight.highlight('<!doctype html>', 'text.html.basic')),
    '&#x3C;!doctype html>',
    'should generate w/o style'
  )

  assert.equal(
    toHtml(
      starryNight.highlight(
        `package addressbook

class Country(val name : String)`,
        'source.kotlin'
      )
    ),
    '<span class="pl-k">package</span> <span class="pl-en">addressbook</span>\n\n<span class="pl-k">class</span> <span class="pl-en">Country</span>(<span class="pl-k">val</span> <span class="pl-smi">name</span> <span class="pl-k">:</span> <span class="pl-c1">String</span>)',
    'should highlight some kotlin'
  )

  // Real world example of this test case:
  // <https://github.com/microsoft/vscode-markdown-tm-grammar/blob/eed230887a39da1ecf5bfc914e00a1e1813c0fdb/markdown.tmLanguage.base.yaml#L125>
  const starryNightBlankLines = await createStarryNight([
    {
      names: [],
      extensions: [],
      scopeName: 'x',
      patterns: [{begin: '^a$', end: '^[\\t ]*$', name: 'invalid.illegal'}]
    }
  ])
  assert.equal(
    toHtml(starryNightBlankLines.highlight('a\n\nb', 'x')),
    '<span class="pl-ii">a</span>\n\nb',
    'should be able to match on empty lines'
  )
})
