// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ventojs/vscode-vento>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js'],
  extensions: ['.vto'],
  injections: {
    'L:source.css -comment -string': {
      patterns: [
        {include: '#comment'},
        {include: '#js_code'},
        {include: '#template_tag'}
      ]
    },
    'L:source.vento (meta.tag.metadata | meta.tag.structure | meta.tag.inline | meta.tag.object | meta.tag.other | meta.tag.custom | string) -meta.embedded -comment':
      {patterns: [{include: 'source.vento'}, {include: '#attributes'}]}
  },
  names: ['vento'],
  patterns: [
    {include: '#comment'},
    {include: '#js_code'},
    {include: '#template_tag'},
    {include: '#front_matter'},
    {include: 'text.html.basic#core-minus-invalid'},
    {
      begin: '(</?)((?:(?!{{)[^\\s<>])*+)(?<!/)(?={{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.html'},
        2: {name: 'entity.name.tag.html'}
      },
      end: '(?: ?/)?>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.html'}},
      name: 'meta.tag.other.vento.html.derivative',
      patterns: [
        {include: '#comment'},
        {include: '#js_code'},
        {include: '#template_tag'},
        {include: 'text.html.basic#attribute'}
      ]
    },
    {include: 'text.html.basic#tags-invalid'}
  ],
  repository: {
    attributes: {
      begin:
        '(?:(?!{{)[^\\x{0020}"\'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}])*+(?={{)',
      beginCaptures: {0: {name: 'entity.other.attribute-name.html'}},
      end: '(?=\\s*+[^=\\s])',
      name: 'meta.attribute.vento.$0.html',
      patterns: [
        {include: '#comment'},
        {include: '#js_code'},
        {include: '#template_tag'},
        {include: 'text.html.basic#attribute-interior'}
      ]
    },
    comment: {begin: '{{#', end: '#}}', name: 'comment.block.vento'},
    front_matter: {
      begin: '^---[a-zA-Z0-9_-]*\\s*\\n',
      contentName: 'source.yaml',
      end: '---\\s*\\n',
      name: 'meta.embedded.block.yaml',
      patterns: [{include: 'source.yaml'}]
    },
    js_code: {
      begin: '{{(-)?>',
      contentName: 'meta.embedded.block.javascript source.js',
      end: '(-)?}}',
      name: 'meta.embedded.block.vento source.vento',
      patterns: [{include: 'source.js'}]
    },
    template_keyword: {
      match:
        '/(if|for|set|layout|echo|function|slot|default)\\b|\\b(for|of|if|else\\s+if|else|include|set|layout|echo|function|async\\s+function|import|from|export|await|continue|break|slot|default)\\b',
      name: 'keyword.vento'
    },
    template_tag: {
      begin: '{{(-)?',
      captures: {0: {name: 'punctuation.definition.tag.vento'}},
      contentName: 'meta.embedded.block.javascript source.js',
      end: '(-)?}}',
      name: 'meta.embedded.block.vento source.vento',
      patterns: [{include: '#template_keyword'}, {include: 'source.js'}]
    }
  },
  scopeName: 'source.vento'
}

export default grammar
