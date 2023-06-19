/**
 * @typedef {import('mdast').ListContent} ListContent
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Root} Root
 */

import {zone} from 'mdast-zone'
import {u} from 'unist-builder'
import {common as commonGrammars} from '../index.js'
import {info} from './info.js'

const common = new Set(commonGrammars.map((d) => d.scopeName))

/** @type {import('unified').Plugin<[], Root>} */
export default function support() {
  return function (tree) {
    /** @type {Array<ListContent>} */
    const items = Object.keys(info)
      .sort((a, b) => {
        const aCommon = common.has(a)
        const bCommon = common.has(b)
        return aCommon === bCommon ? a.localeCompare(b) : aCommon ? -1 : 1
      })
      .map((scope) => {
        const {homepage, license, dependencies} = info[scope]
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
            u('link', {url: homepage}, [u('text', 'upstream')])
          )
        }

        if (dependencies && dependencies.length > 0) {
          content.push(u('text', ' — needs: '))
          let index = -1
          while (++index < dependencies.length) {
            content.push(u('inlineCode', dependencies[index]))
            if (index !== dependencies.length - 1) {
              content.push(u('text', ', '))
            }
          }
        }

        return u('listItem', {checked: common.has(scope)}, [
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
