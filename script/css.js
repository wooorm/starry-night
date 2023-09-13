/**
 * @typedef {import('css').Charset} Charset
 * @typedef {import('css').Comment} Comment
 * @typedef {import('css').CustomMedia} CustomMedia
 * @typedef {import('css').Declaration} Declaration
 * @typedef {import('css').Document} Document
 * @typedef {import('css').FontFace} FontFace
 * @typedef {import('css').Host} Host
 * @typedef {import('css').Import} Import
 * @typedef {import('css').KeyFrame} KeyFrame
 * @typedef {import('css').KeyFrames} KeyFrames
 * @typedef {import('css').Media} Media
 * @typedef {import('css').Namespace} Namespace
 * @typedef {import('css').Page} Page
 * @typedef {import('css').Rule} Rule
 * @typedef {import('css').Stylesheet} Stylesheet
 * @typedef {import('css').Supports} Supports
 *
 */

/**
 * @typedef {Charset | Comment | CustomMedia | Declaration | Document | FontFace | Host | Import | KeyFrames | KeyFrame | Media | Namespace | Page | Rule | Stylesheet | Supports} Node
 * @typedef {'light' | 'light_colorblind' | 'light_high_contrast' | 'light_tritanopia'} Light
 * @typedef {'dark' | 'dark_colorblind' | 'dark_dimmed' | 'dark_high_contrast' | 'dark_tritanopia'} Dark
 *
 * @typedef Schema
 * @property {Light | null | undefined} light
 * @property {Dark | null | undefined} dark
 **/

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import css from 'css'
// @ts-expect-error: hush
import generateGithubMarkdownCss from 'generate-github-markdown-css'
import prettier from 'prettier'

const prettierConfig = await prettier.resolveConfig(
  fileURLToPath(import.meta.url)
)

// Note: `generate-github-markdown-css` crawls and caches all themes on start
// up:
// <https://github.com/sindresorhus/generate-github-markdown-css/blob/0e3d602511e7833a2893e702134f57b6955093d2/index.js#L275>
// So we don’t need to worry about multiple requests.

// See `./node_modules/.bin/github-markdown-css --list`
/** @type {Array<Dark>} */
const darks = [
  'dark',
  'dark_high_contrast',
  'dark_colorblind',
  'dark_tritanopia',
  'dark_dimmed'
]

/** @type {Array<Light>} */
const lights = [
  'light',
  'light_high_contrast',
  'light_colorblind',
  'light_tritanopia'
]

/** @type {Record<string, Schema>} */
const files = {
  'core.css': {light: undefined, dark: undefined},

  'both.css': {light: 'light', dark: 'dark'},
  'light.css': {light: 'light', dark: undefined},
  'dark.css': {light: undefined, dark: 'dark'},

  // Dimmed is only available for dark.
  'dimmed.css': {light: 'light', dark: 'dark_dimmed'},
  'dimmed-dark.css': {light: undefined, dark: 'dark_dimmed'},

  'high-contrast.css': {
    light: 'light_high_contrast',
    dark: 'dark_high_contrast'
  },
  'high-contrast-light.css': {
    light: 'light_high_contrast',
    dark: undefined
  },
  'high-contrast-dark.css': {
    light: undefined,
    dark: 'dark_high_contrast'
  },

  'colorblind.css': {light: 'light_colorblind', dark: 'dark_colorblind'},
  'colorblind-light.css': {light: 'light_colorblind', dark: undefined},
  'colorblind-dark.css': {light: undefined, dark: 'dark_colorblind'},

  'tritanopia.css': {light: 'light_tritanopia', dark: 'dark_tritanopia'},
  'tritanopia-light.css': {light: 'light_tritanopia', dark: undefined},
  'tritanopia-dark.css': {light: undefined, dark: 'dark_tritanopia'}
}

/** @type {Map<string, string>} */
const selectorsMap = new Map()
/** @type {Map<string, string>} */
const themeMap = new Map()

/** @type {Array<Promise<undefined>>} */
const generatePromises = []

for (const light of lights) {
  generatePromises.push(generate(light, darks[0]))
}

for (const dark of darks) {
  if (dark === darks[0]) continue // Duplicate work.
  generatePromises.push(generate(lights[0], dark))
}

await Promise.all(generatePromises)

const fileNames = Object.keys(files)
/** @type {Array<Promise<undefined | void>>} */
const writePromises = []

const base = new URL('../style/', import.meta.url)
await fs.mkdir(base, {recursive: true})

for (const fileName of fileNames) {
  const {light, dark} = files[fileName]
  const lightCss = light ? themeMap.get(light) : undefined
  const darkCss = dark ? themeMap.get(dark) : undefined
  /** @type {Array<string>} */
  const doc = []

  if (lightCss && darkCss) {
    doc.push(
      lightCss,
      '@media (prefers-color-scheme: dark) {\n' + darkCss + '\n}'
    )
  } else {
    doc.push(lightCss || darkCss || '')
  }

  for (const rule of selectorsMap.values()) {
    doc.push(rule)
  }

  writePromises.push(
    fs.writeFile(
      new URL(fileName, base),
      await prettier.format(
        '/* This is a theme distributed by `starry-night`.\n' +
          ' * It’s based on what GitHub uses on their site.\n' +
          ' * See <https://github.com/wooorm/starry-night> for more info. */' +
          doc.join('\n\n'),
        {...prettierConfig, parser: 'css'}
      )
    )
  )
}

await Promise.all(writePromises)

/**
 * @param {Light} light
 * @param {Dark} dark
 * @returns {Promise<undefined>}
 */
async function generate(light, dark) {
  /** @type {string} */
  const result = await generateGithubMarkdownCss({light, dark})
  const tree = css.parse(result)
  const scopePrefix = '.markdown-body '
  const prefix = '.pl-'

  assert(tree.stylesheet, 'expected `stylesheet` to be set')

  // Get themes.
  // Note: types don’t put media as children, force any node.
  const darkMedia = /** @type {Node | undefined} */ (tree.stylesheet.rules[0])
  const lightMedia = /** @type {Node | undefined} */ (tree.stylesheet.rules[1])
  themeMap.set(dark, generateMedia(darkMedia, 'dark'))
  themeMap.set(light, generateMedia(lightMedia, 'light'))

  // Get the rules.
  // These use variables (if light and dark are not the same) and hence are the
  // same for each theme.
  for (const rule of walkRules(tree)) {
    if (rule.selectors) {
      const selectors = rule.selectors
        .filter((d) => d.startsWith(scopePrefix))
        .map((d) => d.slice(scopePrefix.length))
        .filter((d) => d.startsWith(prefix))

      if (selectors.length > 0) {
        const selectorsString = selectors.join(',\n')
        rule.selectors = selectors
        /** @type {Stylesheet} */
        const sheet = {type: 'stylesheet', stylesheet: {rules: [rule]}}
        selectorsMap.set(selectorsString, css.stringify(sheet))
      }
    }
  }
}

/**
 * @param {Node | null | undefined} media
 * @param {'dark' | 'light'} mode
 * @returns {string}
 */
function generateMedia(media, mode) {
  assert(
    media &&
      media.type === 'media' &&
      'media' in media &&
      'rules' in media &&
      media.media === '(prefers-color-scheme: ' + mode + ')' &&
      media.rules,
    'expected `' + mode + '` head'
  )
  const rule = media.rules[0]
  assert(
    rule && 'declarations' in rule && rule.declarations,
    'expected `' + mode + '` rule'
  )

  return css.stringify({
    type: 'stylesheet',
    stylesheet: {
      rules: [
        {
          type: 'rule',
          selectors: [':root'],
          declarations: rule.declarations.filter(
            (d) =>
              'property' in d &&
              d.property &&
              d.property.startsWith('--color-prettylights-')
          )
        }
      ]
    }
  })
}

/**
 * @param {Node} tree
 * @returns {Generator<Rule>}
 */
function* walkRules(tree) {
  if (tree.type === 'stylesheet' && 'stylesheet' in tree && tree.stylesheet) {
    for (const rule of tree.stylesheet.rules) {
      if (rule.type === 'rule') {
        yield rule
      } else {
        yield* walkRules(rule)
      }
    }
  }
  // ignore @media, etc.
}
