/**
 * @import {
     Charset,
     Comment,
     CustomMedia,
     Declaration,
     Document,
     FontFace,
     Host,
     Import,
     KeyFrame,
     KeyFrames,
     Media,
     Namespace,
     Page,
     Rule,
     Stylesheet,
     Supports
   } from 'css'
 */

/**
 * @typedef {Charset | Comment | CustomMedia | Declaration | Document | FontFace | Host | Import | KeyFrames | KeyFrame | Media | Namespace | Page | Rule | Stylesheet | Supports} Node
 *   CSS node.
 *
 * @typedef {'light' | 'light_colorblind' | 'light_high_contrast' | 'light_tritanopia'} Light
 *   Light theme name.
 * @typedef {'dark' | 'dark_colorblind' | 'dark_dimmed' | 'dark_high_contrast' | 'dark_tritanopia'} Dark
 *   Dark theme name.
 *
 * @typedef Schema
 *   Schema.
 * @property {Dark} [dark]
 *   Dark theme name (optional).
 * @property {Light} [light]
 *   Light theme name (optional).
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import css from 'css'
// @ts-expect-error: untyped.
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
/** @type {ReadonlyArray<Dark>} */
const darks = [
  'dark',
  'dark_high_contrast',
  'dark_colorblind',
  'dark_tritanopia',
  'dark_dimmed'
]

/** @type {ReadonlyArray<Light>} */
const lights = [
  'light',
  'light_high_contrast',
  'light_colorblind',
  'light_tritanopia'
]

/** @type {Record<string, Schema>} */
const files = {
  'core.css': {},

  'both.css': {dark: 'dark', light: 'light'},
  'light.css': {light: 'light'},
  'dark.css': {dark: 'dark'},

  // Dimmed is only available for dark.
  'dimmed.css': {dark: 'dark_dimmed', light: 'light'},
  'dimmed-dark.css': {dark: 'dark_dimmed'},

  'high-contrast.css': {
    light: 'light_high_contrast',
    dark: 'dark_high_contrast'
  },
  'high-contrast-light.css': {light: 'light_high_contrast'},
  'high-contrast-dark.css': {dark: 'dark_high_contrast'},

  'colorblind.css': {dark: 'dark_colorblind', light: 'light_colorblind'},
  'colorblind-light.css': {light: 'light_colorblind'},
  'colorblind-dark.css': {dark: 'dark_colorblind'},

  'tritanopia.css': {dark: 'dark_tritanopia', light: 'light_tritanopia'},
  'tritanopia-light.css': {light: 'light_tritanopia'},
  'tritanopia-dark.css': {dark: 'dark_tritanopia'}
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
  const {dark, light} = files[fileName]
  const lightCss = light ? themeMap.get(light) : undefined
  const darkCss = dark ? themeMap.get(dark) : undefined
  /** @type {Array<string>} */
  const document = []

  if (lightCss && darkCss) {
    document.push(
      lightCss,
      '@media (prefers-color-scheme: dark) {\n' + darkCss + '\n}'
    )
  } else {
    document.push(lightCss || darkCss || '')
  }

  for (const rule of selectorsMap.values()) {
    document.push(rule)
  }

  writePromises.push(
    fs.writeFile(
      new URL(fileName, base),
      await prettier.format(
        '/* This is a theme distributed by `starry-night`.\n' +
          ' * It’s based on what GitHub uses on their site.\n' +
          ' * See <https://github.com/wooorm/starry-night> for more info. */' +
          document.join('\n\n'),
        {...prettierConfig, parser: 'css'}
      )
    )
  )
}

await Promise.all(writePromises)

/**
 * @param {Light} light
 *   Light theme name.
 * @param {Dark} dark
 *   Dark theme name.
 * @returns {Promise<undefined>}
 *   Nothing.
 */
async function generate(light, dark) {
  /** @type {string} */
  const result = await generateGithubMarkdownCss({dark, light})
  const tree = css.parse(result)
  const scopePrefix = '.markdown-body '
  const prefix = '.pl-'

  assert.ok(tree.stylesheet, 'expected `stylesheet` to be set')

  // Get themes.
  // Note: types don’t put media as children, force any node.
  const darkMedia = tree.stylesheet.rules.find((d) => {
    return (
      d.type === 'media' &&
      'media' in d &&
      d.media === '(prefers-color-scheme: dark)'
    )
  })
  const lightMedia = tree.stylesheet.rules.find((d) => {
    return (
      d.type === 'media' &&
      'media' in d &&
      d.media === '(prefers-color-scheme: light)'
    )
  })
  themeMap.set(dark, generateMedia(darkMedia, 'dark'))
  themeMap.set(light, generateMedia(lightMedia, 'light'))

  // Get the rules.
  // These use variables (if light and dark are not the same) and hence are the
  // same for each theme.
  for (const rule of walkRules(tree)) {
    if (rule.selectors) {
      const selectors = rule.selectors
        .filter(function (d) {
          return d.startsWith(scopePrefix)
        })
        .map(function (d) {
          return d.slice(scopePrefix.length)
        })
        .filter(function (d) {
          return d.startsWith(prefix)
        })

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
 * @param {Node | undefined} media
 *   Media node.
 * @param {'dark' | 'light'} mode
 *   Mode.
 * @returns {string}
 *   CSS.
 */
function generateMedia(media, mode) {
  assert.ok(
    media &&
      media.type === 'media' &&
      'media' in media &&
      'rules' in media &&
      media.media === '(prefers-color-scheme: ' + mode + ')' &&
      media.rules,
    'expected `' + mode + '` head'
  )
  const rule = media.rules[0]
  assert.ok(
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
          declarations: rule.declarations.filter(function (d) {
            return (
              'property' in d &&
              d.property &&
              d.property.startsWith('--color-prettylights-')
            )
          })
        }
      ]
    }
  })
}

/**
 * @param {Node} tree
 *   Tree.
 * @returns {Generator<Rule>}
 *   Generator.
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
