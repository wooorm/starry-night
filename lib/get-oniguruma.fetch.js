/* eslint-env browser */

/**
 * Browser (and Node 18+) WASM loader.
 *
 * @typedef {import('./index.js').Options} Options
 * @param {Options} [options]
 */
export async function getOniguruma(options) {
  let url = new URL('https://esm.sh/vscode-oniguruma@1/release/onig.wasm')
  if (options && typeof options.getOnigurumaUrlFetch === 'function') {
    url = await options.getOnigurumaUrlFetch()
  }

  // @ts-expect-error: TS doesn’t understand Fetch in Node yet.
  return fetch(url)
}
