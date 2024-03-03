// 1. Run this script
// 2. Open `media/preview.html` in Safari
// 3. Turn extensions off for a second. (CMD+,)
// 4. Change the URL bar (CMD+L) to `starry-night` (then click in window)
// 5. Resize to fit snugly
// 6. Take a screenshot
// 7. Switch theme in preferences, another screenshot.
// 8. Lay then over `cover.jpg` in media, export as `-dark` and `-light`.
import fs from 'node:fs/promises'
import {toHtml} from 'hast-util-to-html'
import {common, createStarryNight} from '../index.js'

const highlighter = await createStarryNight(common)

const document = `<!doctype html>
<html lang=en>
<title>Example</title>
<link rel="stylesheet" href="https://esm.sh/github-markdown-css/github-markdown.css">
<style>
body { max-width: 51.625rem; margin: calc(1em + 1ex) auto; padding: 0 calc(1em + 1ex); }
@media (prefers-color-scheme: dark) { body { background-color: #0d1117; } }
</style>
<body>
<div class="markdown-body">
<p>In a browser, include the module:</p>
${generate(
  `<script type="module">
  import {common, createStarryNight} from 'https://esm.sh/@wooorm/starry-night@3?bundle'
</script>`,
  'text.html.basic'
)}
<p>…add the CSS:</p>
${generate(
  `<link rel="stylesheet" href="https://esm.sh/@wooorm/starry-night@3/style/both">`,
  'text.html.basic'
)}
<p>…then to use <code>starry-night</code>:</p>
${generate(
  `const starryNight = await createStarryNight(common)

const scope = starryNight.flagToScope('markdown')
const tree = starryNight.highlight('# hi', scope)

console.log(tree)`,
  'source.js'
)}
</div>
</body>
</html>
`

fs.writeFile(new URL('../media/preview.html', import.meta.url), document)

/**
 * @param {string} value
 *   Value to highlight.
 * @param {string} scope
 *   Scope to highlight with.
 */
function generate(value, scope) {
  const className = scope.replace(/^source\./, '').replace(/\./g, '-')
  return `<div class="highlight highlight-${className}"><pre>${toHtml(
    highlighter.highlight(value, scope)
  )}
</pre></div>`
}
