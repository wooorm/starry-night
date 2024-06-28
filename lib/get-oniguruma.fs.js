/**
 * @import {Options} from './types.js'
 */

import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'

/**
 * Node w/o fetch.
 *
 * @param {Readonly<Options> | undefined} [options]
 *   Configuration (optional).
 * @returns {Promise<Uint8Array>}
 *   Uint8 array.
 */
export async function getOniguruma(options) {
  const url =
    options && options.getOnigurumaUrlFs
      ? await options.getOnigurumaUrlFs()
      : new URL('onig.wasm', resolve('vscode-oniguruma', import.meta.url))

  return fs.readFile(url)
}
