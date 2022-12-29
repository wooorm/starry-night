import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'

/**
 * Node w/o fetch.
 *
 * @typedef {import('./index.js').Options} Options
 * @param {Options} [options]
 */
export async function getOniguruma(options) {
  const pkgUrl = await resolve('vscode-oniguruma', import.meta.url)
  let url = new URL('onig.wasm', pkgUrl)

  if (options && typeof options.getOnigurumaUrlFs === 'function') {
    url = await options.getOnigurumaUrlFs()
  }

  return fs.readFile(url)
}
