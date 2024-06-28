// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/printfn/gemini-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gmi'],
  names: ['gemini', 'gemtext'],
  patterns: [
    {include: '#headings'},
    {include: '#links'},
    {include: '#quote'},
    {include: '#raw'},
    {include: '#unorderedLists'}
  ],
  repository: {
    headings: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.heading.1.gemini'}},
          match: '^(#)(?:[^#].*)?\n',
          name: 'markup.heading.1.gemini'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.2.gemini'}},
          match: '^(##)(?:[^#].*)?\n',
          name: 'markup.heading.2.gemini'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.3.gemini'}},
          match: '^(###)(?:[^#].*)?\n',
          name: 'markup.heading.3.gemini'
        }
      ]
    },
    links: {
      patterns: [
        {
          captures: {
            1: {name: 'markup.underline.link.markdown.gemini'},
            2: {name: 'string.other.link.title.markdown.gemini'}
          },
          match: '^=>[ \t]+([^ \t]+)(?:[ \t]+(.*))?'
        }
      ]
    },
    quote: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.quote.begin.markdown.gemini'}
          },
          match: '^(>).*$',
          name: 'markup.quote.markdown.gemini'
        }
      ]
    },
    raw: {
      patterns: [
        {begin: '^```.*\n', end: '^```.*\n', name: 'markup.raw.gemini'}
      ]
    },
    unorderedLists: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.list.begin.markdown.gemini'}
          },
          match: '^(\\*)[ \t]+.+\n',
          name: 'markup.list.unnumbered.gemini'
        }
      ]
    }
  },
  scopeName: 'source.gemini'
}

export default grammar
