import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'

/** Node w/o fetch. */
export async function getOniguruma() {
  const pkgUrl = await resolve('vscode-oniguruma', import.meta.url)
  return fs.readFile(new URL('onig.wasm', pkgUrl))
}
