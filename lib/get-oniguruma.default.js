/// <reference lib="dom" />
/* eslint-env browser */

/**
 * @import {Options} from './types.js'
 */

/**
 * Browser (and Node 18+) WASM loader.
 *
 * @param {Readonly<Options> | undefined} [options]
 *   Configuration (optional).
 * @returns {Promise<Response>}
 *   Fetch response.
 */
export async function getOniguruma(options) {
  const url =
    options && options.getOnigurumaUrlFetch
      ? await options.getOnigurumaUrlFetch()
      : new URL('https://esm.sh/vscode-oniguruma@2/release/onig.wasm')

  return fetch(url)
}
