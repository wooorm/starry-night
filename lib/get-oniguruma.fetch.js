/* eslint-env browser */

/* Browser (and Node 18+) WASM loader. */
export async function getOniguruma() {
  // @ts-expect-error: TS doesn’t understand Fetch in Node yet.
  return fetch('https://esm.sh/vscode-oniguruma@1/release/onig.wasm')
}
