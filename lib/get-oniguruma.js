/**
 * @typedef {import('./index.js').Options} Options
 */

import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'

/**
 * Node w/o fetch.
 *
 * @param {Options | undefined} [options]
 */
export async function getOniguruma(options) {
  const url =
    options && options.getOnigurumaUrlFs
      ? await options.getOnigurumaUrlFs()
      : new URL('onig.wasm', await resolve('vscode-oniguruma', import.meta.url))

  return fs.readFile(url)
}
