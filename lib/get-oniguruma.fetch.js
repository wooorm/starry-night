/* eslint-env browser */

/**
 * @typedef {import('./index.js').Options} Options
 */

/**
 * Browser (and Node 18+) WASM loader.
 *
 * @param {Options | undefined} [options]
 */
export async function getOniguruma(options) {
  const url =
    options && options.getOnigurumaUrlFetch
      ? await options.getOnigurumaUrlFetch()
      : new URL('https://esm.sh/vscode-oniguruma@1/release/onig.wasm')

  // @ts-expect-error: TS doesn’t understand Fetch in Node yet.
  return fetch(url)
}
