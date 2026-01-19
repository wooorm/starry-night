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
  dependencies: ['source.js', 'text.html.basic'],
  extensions: ['.vto'],
  injections: {
    'L:string - (string.quoted.*.html)': {patterns: [{include: 'source.vento'}]}
  },
  names: ['vento'],
  patterns: [
    {begin: '{{#', end: '#}}', name: 'comment.block.vento'},
    {include: '#js_code'},
    {include: '#template_tag'},
    {include: '#front_matter'},
    {include: 'text.html.basic', name: 'html.vento'}
  ],
  repository: {
    front_matter: {
      begin: '^---[a-zA-Z0-9_-]*\\s*\\n',
      contentName: 'source.yaml',
      end: '---\\s*\\n',
      name: 'meta.embedded.block.yaml',
      patterns: [{include: 'source.yaml'}]
    },
    js_code: {
      begin: '{{(-)?>',
      contentName: 'source.js',
      end: '(-)?}}',
      name: 'meta.embedded.block.javascript',
      patterns: [{include: 'source.js'}]
    },
    template_keyword: {
      match:
        '\\b(for|of|if|else\\s+if|else|include|set|layout|echo|function|async\\s+function|import|from|export|await|continue|break|slot|default)\\b',
      name: 'keyword.vento'
    },
    template_tag: {
      begin: '{{(-)?',
      contentName: 'source.js',
      end: '(-)?}}',
      name: 'punctuation.definition.tag.vento',
      patterns: [{include: '#template_keyword'}, {include: 'source.js'}]
    }
  },
  scopeName: 'source.vento'
}

export default grammar
