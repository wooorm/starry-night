/**
 * @typedef License
 * @property {string|undefined} sources
 * @property {string} text
 *
 * @typedef Dep
 * @property {string} name
 * @property {string} version
 * @property {'git_submodule'} type
 * @property {string|undefined} homepage
 * @property {string} license
 * @property {Array<License>} licenses
 * @property {Array<string>} notices
 */

import assert from 'node:assert'
import fs from 'node:fs/promises'
import process from 'node:process'
import {parse as parseYaml} from 'yaml'
import {all} from '../index.js'

const ghKey = process.env.GITHUB_TOKEN || process.env.GH_TOKEN

if (!ghKey) {
  console.log('`GH_TOKEN` missing in env, not generating')
} else if ('fetch' in globalThis) {
  list()
} else {
  console.log('`fetch` missing in global scope, not generating')
}

async function list() {
  const base = new URL(import.meta.url)
  const infoFolder = new URL('info/', base)

  const scopes = new Set(all.map((d) => d.scopeName))
  /** @type {Record<string, Array<string>>} */
  const grammars = parseYaml(
    await readOrFetch(
      new URL('grammars.yml', base),
      new URL(
        'https://raw.githubusercontent.com/github/linguist/master/grammars.yml'
      )
    )
  )
  await fs.mkdir(infoFolder, {recursive: true})
  /** @type {Map<string, string>} */
  const scopeToVendor = new Map()
  /** @type {Map<string, Array<string>>} */
  const vendorToScope = new Map()

  const prefix = 'vendor/grammars/'

  const rawVendors = Object.keys(grammars).filter((vendor) => {
    if (!vendor.startsWith(prefix)) {
      console.warn('ignoring funky vendor `%s`', vendor)
      return false
    }

    return true
  })

  for (const rawVendor of rawVendors) {
    const packagedScopes = grammars[rawVendor]

    for (const scopeName of packagedScopes) {
      if (!scopes.has(scopeName)) {
        continue
      }

      const vendor = rawVendor.slice(prefix.length).replace(/\/.*$/, '')
      let vendorToScopes = vendorToScope.get(vendor)
      if (vendorToScopes) {
        vendorToScopes.push(scopeName)
      } else {
        vendorToScopes = [scopeName]
        vendorToScope.set(vendor, vendorToScopes)
      }

      scopeToVendor.set(scopeName, vendor)
    }
  }

  /** @type {Array<string>} */
  const vendors = [...new Set(vendorToScope.keys())].sort()

  const rawInfo = await Promise.all(
    vendors.map((vendor) =>
      readOrFetch(
        new URL(vendor + '.yml', infoFolder),
        new URL(
          'https://raw.githubusercontent.com/github/linguist/master/vendor/licenses/git_submodule/' +
            vendor +
            '.dep.yml'
        )
      )
    )
  )

  let index = -1
  const thirdPartyStuff = [
    `THIRD-PARTY SOFTWARE NOTICES AND INFORMATION

This project incorporates material from the project(s) listed below
(collectively, “Third Party Code”).
The author(s) of starry-night are not the original author(s) of the Third Party
Code.
The original copyright notice and license under which the author(s) received
such Third Party Code are set out below.
This Third Party Code is licensed to you under their original license terms set
forth below.

The following files/folders contain third party software:`
  ]

  /** @type {Array<Promise<void>>} */
  const commentPromises = []

  /** @type {Record<string, {homepage: string|undefined, license: string|undefined}>} */
  const scopeToInfo = {}

  while (++index < vendors.length) {
    const vendor = vendors[index]
    const scopes = vendorToScope.get(vendor)
    assert(scopes)
    /** @type {Dep} */
    const info = parseYaml(rawInfo[index])
    const license =
      info.license === 'other' || info.license === 'permissive'
        ? undefined
        : info.license
    const homepage = info.homepage
      ? info.homepage.replace(/\.git$/, '')
      : undefined

    let scopeIndex = -1

    let comment =
      '// This is a TextMate grammar distributed by `starry-night`.\n// This grammar is'

    if (homepage) {
      comment += ' developed at\n// <' + homepage + '>\n// and'
    }

    comment += license ? ' licensed `' + license + '`' : ' licensed permissive'

    comment +=
      '.\n// See <https://github.com/wooorm/starry-night> for more info.\n'

    while (++scopeIndex < scopes.length) {
      const scope = scopes[scopeIndex]

      scopeToInfo[scope] = {license, homepage}

      commentPromises.push(
        (async () => {
          const url = new URL('../lang/' + scope + '.js', import.meta.url)
          const file = String(await fs.readFile(url))
          if (!file.startsWith(comment)) {
            await fs.writeFile(url, comment + file)
          }
        })()
      )
    }

    thirdPartyStuff.push(`${'='.repeat(105)}
Files in \`starry-night\`: ${scopes.map((d) => `lang/${d}.js`).join(', ')}
From source: <${homepage || ''}>
SPDX: ${license || 'permissive'}
${'-'.repeat(105)}
${info.licenses
  .map((d) => `License from source file: ${d.sources || '?'}\n\n${d.text}`)
  .join('\n\n')}`)
  }

  await fs.writeFile('notice', thirdPartyStuff.join('\n\n'))
  await fs.writeFile(
    new URL('info.js', import.meta.url),
    '/** @type {Record<string, {homepage?: string, license?: string}>} */\nexport const info = ' +
      JSON.stringify(scopeToInfo, null, 2) +
      '\n'
  )
}

/**
 * @param {URL} localUrl
 * @param {URL} remoteUrl
 * @returns {Promise<string>}
 */
async function readOrFetch(localUrl, remoteUrl) {
  try {
    return String(await fs.readFile(localUrl))
  } catch (error) {
    const exception = /** @type {NodeJS.ErrnoException} */ (error)
    if (exception.code !== 'ENOENT') {
      throw exception
    }
  }

  // @ts-expect-error: hush!
  const response = await fetch(remoteUrl, {
    headers: {Authorization: 'bearer ' + ghKey}
  })
  const responseText = await response.text()
  await fs.writeFile(localUrl, responseText)
  return responseText
}
