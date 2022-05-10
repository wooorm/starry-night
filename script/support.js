/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').ListContent} ListContent
 */

import {zone} from 'mdast-zone'
import {u} from 'unist-builder'
import {common} from './common.js'
import {info} from './info.js'

/** @type {import('unified').Plugin<Array<void>, Root>} */
export default function support() {
  return function (tree) {
    /** @type {Array<ListContent>} */
    const items = Object.keys(info)
      .sort((a, b) => {
        const aCommon = common.includes(a)
        const bCommon = common.includes(b)
        return aCommon === bCommon ? a.localeCompare(b) : aCommon ? -1 : 1
      })
      .map((scope) => {
        const {homepage, license} = info[scope]
        /** @type {Array<PhrasingContent>} */
        const content = [
          u('link', {url: 'lang/' + scope + '.js'}, [u('inlineCode', scope)])
        ]

        if (license) {
          content.push(u('text', ' (' + license + ')'))
        }

        if (homepage) {
          content.push(
            u('text', ' — '),
            u('link', {url: homepage}, [u('text', 'repo')])
          )
        }

        return u('listItem', {checked: common.includes(scope)}, [
          u('paragraph', content)
        ])
      })

    zone(tree, 'support', (start, _, end) => [
      start,
      u('list', {spread: false}, items),
      end
    ])
  }
}
