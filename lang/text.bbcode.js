// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ModiLogist/VSC-BBCode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bbcode'],
  names: ['bbcode'],
  patterns: [{include: '#body'}],
  repository: {
    body: {
      patterns: [
        {include: '#syn'},
        {include: '#url'},
        {include: '#bullet'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#strikethrough'},
        {include: '#underline'}
      ]
    },
    bold: {
      begin: '(?<=\\[b\\])',
      end: '(?=\\[/b\\])',
      name: 'markup.bold.bbcode',
      patterns: [{include: '#syn'}]
    },
    bullet: {match: '\\[\\*\\]', name: 'variable.other.static.bbcode'},
    italic: {
      begin: '(?<=\\[i\\])',
      end: '(?=\\[/i\\])',
      name: 'markup.italic.bbcode',
      patterns: [{include: '#syn'}]
    },
    strikethrough: {
      begin: '(?<=\\[s\\])',
      end: '(?=\\[/s\\])',
      name: 'markup.strikethrough.bbcode',
      patterns: [{include: '#syn'}]
    },
    syn: {
      match:
        '\\[/?b\\]|\\[/?i\\]|\\[/?s\\]|\\[/?u\\]|/?url=?|\\[\\/?color(=#......)?\\]|\\[/?spoiler\\]|\\[/?list=?1?\\]|\\[/?quote\\]|\\[/?code\\]|\\[/?img\\]|\\[/?size=?.?\\]',
      name: 'entity.name.type.bbcode'
    },
    underline: {
      begin: '(?<=\\[u\\])',
      end: '(?=\\[/u\\])',
      name: 'markup.underline.bbcode',
      patterns: [{include: '#syn'}]
    },
    url: {patterns: [{include: '#url-title'}, {include: '#url-link'}]},
    'url-link': {
      match: '(?<=\\[url=)[^\\]]+',
      name: 'string.quoted.double.bbcode'
    },
    'url-title': {end: '(?=\\[/url)?', name: 'entity.name.function.bbcode'}
  },
  scopeName: 'text.bbcode'
}

export default grammar
