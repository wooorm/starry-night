/// <reference lib="dom" />
/* eslint-env browser */

/**
 * @typedef {import('./index.js').Options} Options
 */

/**
 * Browser (and Node 18+) WASM loader.
 *
 * @param {Options | undefined} [options]
 * @returns {Promise<Response>}
 */
export async function getOniguruma(options) {
  const url =
    options && options.getOnigurumaUrlFetch
      ? await options.getOnigurumaUrlFetch()
      : new URL('https://esm.sh/vscode-oniguruma@2/release/onig.wasm')

  return fetch(url)
}
