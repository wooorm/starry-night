/**
 * @typedef {import('@wooorm/starry-night').Grammar} Grammar
 */

import assert from 'node:assert/strict'
import test from 'node:test'
import {toHtml} from 'hast-util-to-html'
import sourceAssembly from '@wooorm/starry-night/source.assembly'
import sourceCss from '@wooorm/starry-night/source.css'
import textPhp from '@wooorm/starry-night/text.html.php'
import textMd from '@wooorm/starry-night/text.md'
import textXml from '@wooorm/starry-night/text.xml'
import textXmlSvg from '@wooorm/starry-night/text.xml.svg'
import {common, createStarryNight} from '@wooorm/starry-night'

test('@wooorm/starry-night', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('@wooorm/starry-night')).sort(), [
      'all',
      'common',
      'createStarryNight'
    ])
  })
})

test('createStarryNight', async function (t) {
  await t.test('should support `getOnigurumaUrlFs`', async function () {
    assert.rejects(async function () {
      await createStarryNight(common, {
        getOnigurumaUrlFs() {
          return new URL('file:///foo/baz/onig.wasm')
        }
      })
    }, /no such file or directory/)
  })
})

test('.flagToScope(flag)', async function (t) {
  const starryNight = await createStarryNight(common)
  const phpThenAssembly = await createStarryNight([textPhp, sourceAssembly])
  const assemblyThenPhp = await createStarryNight([sourceAssembly, textPhp])

  await t.test('should throw when not given a `flag`', async function () {
    assert.throws(function () {
      // @ts-expect-error: check that the runtime throws an error w/o flag.
      starryNight.flagToScope()
    }, /Expected `string` for `flag`, got `undefined`/)
  })

  await t.test('should support names', async function () {
    assert.equal(starryNight.flagToScope('pandoc'), 'text.md')
  })

  await t.test('should support extensions (w/o dot)', async function () {
    assert.equal(starryNight.flagToScope('workbook'), 'text.md')
  })

  await t.test('should support extensions (w/ dot)', async function () {
    assert.equal(starryNight.flagToScope('.workbook'), 'text.md')
  })

  await t.test('should return `undefined` w/o match', async function () {
    assert.equal(starryNight.flagToScope('whatever'), undefined)
  })

  await t.test(
    'should support the scope that GH uses for an extension w/ dot (1)',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('.inc'),
        sourceAssembly.scopeName
      )
    }
  )

  await t.test(
    'should support the scope that GH uses for an extension w/o dot (1)',
    async function () {
      assert.equal(phpThenAssembly.flagToScope('inc'), textPhp.scopeName)
    }
  )

  await t.test(
    'should support the scope that GH uses for an extension w/ dot (2)',
    async function () {
      assert.equal(sourceAssembly.scopeName, 'source.assembly')
    }
  )

  await t.test(
    'should support the scope that GH uses for an extension w/o dot (2)',
    async function () {
      assert.equal(assemblyThenPhp.flagToScope('inc'), textPhp.scopeName)
    }
  )

  await t.test(
    'should not support file paths with a known extension followed by an unknown one',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('path/to/example.inc.bak'),
        undefined
      )
    }
  )

  await t.test(
    'should support file paths with an unknown extension followed by a known one',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('path/to/example.bak.inc'),
        sourceAssembly.scopeName
      )
    }
  )

  await t.test(
    'should not support file paths with a known extension followed by a hash',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('path/to/example.inc#asd'),
        undefined
      )
    }
  )

  await t.test(
    'should not support file paths with a known extension followed by a search',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('path/to/example.inc?asd=1'),
        undefined
      )
    }
  )

  await t.test(
    'should support file paths with a known extension',
    async function () {
      assert.equal(
        phpThenAssembly.flagToScope('path/to/example.inc'),
        sourceAssembly.scopeName
      )
    }
  )

  await t.test(
    'should not support file paths with a known extension, without the needed dot',
    async function () {
      assert.equal(phpThenAssembly.flagToScope('path/to/exampleinc'), undefined)
    }
  )

  await t.test(
    'should not support file paths with a known extension, without the needed dot, as a filename',
    async function () {
      assert.equal(phpThenAssembly.flagToScope('path/to/inc'), undefined)
    }
  )

  await t.test(
    'should support language names with dots (`.`)',
    async function () {
      const {default: asn} = await import('@wooorm/starry-night/source.asn')
      const starryAsn = await createStarryNight([asn])

      assert.equal(starryAsn.flagToScope('asn.1'), 'source.asn')
    }
  )

  await t.test(
    'should support language names with number signs (`#`)',
    async function () {
      const {default: cs} = await import('@wooorm/starry-night/source.cs')
      const starryCs = await createStarryNight([cs])

      assert.equal(starryCs.flagToScope('c#'), 'source.cs')
    }
  )

  await t.test(
    'should support language names with plusses (`+`)',
    async function () {
      const {default: cpp} = await import('@wooorm/starry-night/source.c++')
      const starryCpp = await createStarryNight([cpp])

      assert.equal(starryCpp.flagToScope('c++'), 'source.c++')
    }
  )

  await t.test(
    'should support language names with asterisks (`*`)',
    async function () {
      const {default: fStar} = await import('@wooorm/starry-night/source.fstar')
      const starryFStar = await createStarryNight([fStar])

      assert.equal(starryFStar.flagToScope('f*'), 'source.fstar')
    }
  )

  await t.test(
    "should support language names with apostrophes (`'`)",
    async function () {
      const {default: capnp} = await import('@wooorm/starry-night/source.capnp')
      const starryCapnp = await createStarryNight([capnp])

      assert.equal(starryCapnp.flagToScope("cap'n-proto"), 'source.capnp')
    }
  )

  await t.test(
    'should support language names with parens (`(`, `)`)',
    async function () {
      const {default: dot} = await import('@wooorm/starry-night/source.dot')
      const starryDot = await createStarryNight([dot])

      assert.equal(starryDot.flagToScope('graphviz-(dot)'), 'source.dot')
    }
  )

  await t.test(
    'should support language names with slashes (`/`)',
    async function () {
      const {default: json} = await import('@wooorm/starry-night/source.json')
      // @ts-expect-error: TS is wrong, it doesn’t understand that `.json` is not an extension.
      const grammar = /** @type {Grammar} */ (json)
      const starryJson = await createStarryNight([grammar])

      assert.equal(starryJson.flagToScope('max/msp'), 'source.json')
    }
  )
})

test('.highlight(value, scope)', async function (t) {
  const starryNight = await createStarryNight(common)

  await t.test('should throw when not given a `value`', async function () {
    assert.throws(function () {
      // @ts-expect-error: check that the runtime throws an error w/o `value`.
      starryNight.highlight()
    }, /Expected `string` for `value`, got `undefined`/)
  })

  await t.test('should throw when not given a `scope`', async function () {
    assert.throws(function () {
      // @ts-expect-error: check that the runtime throws an error w/o `scope`.
      starryNight.highlight('alert(1)')
    }, /Expected `string` for `scope`, got `undefined`/)
  })

  await t.test(
    'should throw when given an unregistered `scope`',
    async function () {
      assert.throws(function () {
        starryNight.highlight('alert(1)', 'whatever')
      }, /Expected grammar `whatever` to be registered/)
    }
  )

  await t.test('should work on an empty string', async function () {
    assert.equal(toHtml(starryNight.highlight('', 'source.js')), '')
  })

  await t.test('should work on some whitespace (1, js)', async function () {
    assert.equal(
      toHtml(starryNight.highlight('\n \n\t\r\n \r', 'source.js')),
      '\n \n\t\r\n \r'
    )
  })

  await t.test('should work on some whitespace (2, js)', async function () {
    assert.equal(
      toHtml(starryNight.highlight('\n \n\t\r\n \r', 'text.html.basic')),
      '\n \n\t\r\n \r'
    )
  })

  await t.test('should generate', async function () {
    assert.equal(
      toHtml(starryNight.highlight('alert(1)', 'source.js')),
      '<span class="pl-en">alert</span>(<span class="pl-c1">1</span>)'
    )
  })

  await t.test('should generate parents', async function () {
    assert.equal(
      toHtml(starryNight.highlight('# asd *qwe* rty', 'text.md')),
      '<span class="pl-mh"># <span class="pl-en">asd </span></span><span class="pl-s"><span class="pl-mh"><span class="pl-en">*</span></span></span><span class="pl-mh"><span class="pl-en">qwe</span></span><span class="pl-s"><span class="pl-mh"><span class="pl-en">*</span></span></span><span class="pl-mh"><span class="pl-en"> rty</span></span>'
    )
  })

  await t.test('should generate grandparents', async function () {
    assert.equal(
      toHtml(starryNight.highlight('let a = `${b}`', 'source.js')),
      '<span class="pl-k">let</span> a <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">`</span><span class="pl-pse"><span class="pl-s1">${</span></span><span class="pl-s1">b</span><span class="pl-pse"><span class="pl-s1">}</span></span><span class="pl-pds">`</span></span>'
    )
  })

  await t.test('should generate multiple lines', async function () {
    assert.equal(
      toHtml(starryNight.highlight('1 +\n2', 'source.js')),
      '<span class="pl-c1">1</span> <span class="pl-k">+</span>\n<span class="pl-c1">2</span>'
    )
  })

  await t.test('should generate w/o style', async function () {
    assert.equal(
      toHtml(starryNight.highlight('<!doctype html>', 'text.html.basic')),
      '&#x3C;!doctype html>'
    )
  })

  await t.test('should highlight some kotlin', async function () {
    assert.equal(
      toHtml(
        starryNight.highlight(
          `package addressbook

class Country(val name : String)`,
          'source.kotlin'
        )
      ),
      '<span class="pl-k">package</span> <span class="pl-en">addressbook</span>\n\n<span class="pl-k">class</span> <span class="pl-en">Country</span>(<span class="pl-k">val</span> <span class="pl-smi">name</span> <span class="pl-k">:</span> <span class="pl-c1">String</span>)'
    )
  })

  await t.test('should be able to match on empty lines', async function () {
    // Real world example of this test case:
    // <https://github.com/microsoft/vscode-markdown-tm-grammar/blob/eed2308/markdown.tmLanguage.base.yaml#L125>
    const starryNightBlankLines = await createStarryNight([
      {
        extensions: [],
        names: [],
        patterns: [{begin: '^a$', end: '^[\\t ]*$', name: 'invalid.illegal'}],
        scopeName: 'x'
      }
    ])

    assert.equal(
      toHtml(starryNightBlankLines.highlight('a\n\nb', 'x')),
      '<span class="pl-ii">a</span>\n\nb'
    )
  })
})

test('.missingScopes()', async function (t) {
  const svg = await createStarryNight([textXmlSvg])
  const svgAndXml = await createStarryNight([textXmlSvg, textXml])

  await t.test('should list missing scopes', async function () {
    assert.deepEqual(svg.missingScopes(), ['text.xml'])
  })

  await t.test('should list no missing scopes', async function () {
    assert.deepEqual(svgAndXml.missingScopes(), [])
  })
})

test('.register(grammars)', async function (t) {
  const starryNight = await createStarryNight([textMd])

  await starryNight.register([sourceCss])

  await t.test('should support adding languages', async function () {
    assert.equal(
      toHtml(starryNight.highlight('em { color: red }', 'source.css')),
      '<span class="pl-ent">em</span> { <span class="pl-c1">color</span>: <span class="pl-c1">red</span> }'
    )
  })

  await t.test('should support adding deep languages', async function () {
    assert.equal(
      toHtml(
        starryNight.highlight('```css\nem { color: red }\n```', 'text.md')
      ),
      '<span class="pl-s">```</span><span class="pl-en">css</span>\n<span class="pl-ent">em</span> { <span class="pl-c1">color</span>: <span class="pl-c1">red</span> }\n<span class="pl-s">```</span>'
    )
  })
})

test('.scopes()', async function (t) {
  const starryNight = await createStarryNight(common)
  const list = starryNight.scopes()

  await t.test('should return an array', async function () {
    assert.ok(Array.isArray(list))
  })

  await t.test('should return an array of strings', async function () {
    assert.ok(
      list.every(function (d) {
        return typeof d === 'string'
      })
    )
  })

  await t.test('should include `js`', async function () {
    assert.ok(list.includes('source.js'))
  })
})
