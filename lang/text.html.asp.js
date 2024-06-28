// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.asp', 'text.html.basic'],
  extensions: ['.asax', '.ascx', '.ashx', '.asmx', '.asp', '.aspx', '.axd'],
  names: ['asp', 'asp.net', 'aspx', 'aspx-vb', 'classic-asp'],
  patterns: [
    {
      begin: '<%--',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.asp'}},
      end: '--%>',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.asp'}},
      name: 'comment.block.asp.server'
    },
    {
      begin: '<%=?',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.asp'}},
      end: '%>',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.asp'}},
      name: 'source.asp.embedded.html',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.asp'}},
          match: "(').*?(?=%>)",
          name: 'comment.line.apostrophe.asp'
        },
        {include: 'source.asp'}
      ]
    },
    {include: 'text.html.basic'}
  ],
  scopeName: 'text.html.asp'
}

export default grammar
