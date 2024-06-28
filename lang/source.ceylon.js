// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ceylon'],
  names: ['ceylon'],
  patterns: [
    {include: '#comments'},
    {match: '//.*$', name: 'comment.singleline.ceylon'},
    {match: '^#!/.*$', name: 'comment.shebang.ceylon'},
    {
      match:
        '\\b(assembly|module|package|import|alias|class|interface|object|given|value|assign|void|function|new|of|extends|satisfies|adapts|abstracts|in|out|return|break|continue|throw|assert|dynamic|if|else|switch|case|for|while|try|catch|finally|then|let|this|outer|super|is|exists|nonempty)\\b',
      name: 'keyword.control.ceylon'
    },
    {
      match:
        '\\b(doc|by|license|see|throws|tagged|shared|abstract|formal|default|actual|variable|late|native|deprecated|final|sealed|annotation|suppressWarnings|static)\\b',
      name: 'keyword.other.ceylon'
    },
    {
      match: '([A-Z][a-zA-Z0-9_]*|\\\\I[a-zA-Z0-9_]+)',
      name: 'entity.name.class.ceylon'
    },
    {
      match: '([a-z][a-zA-Z0-9_]*|\\\\i[a-zA-Z0-9_]+)',
      name: 'variable.other.ceylon'
    },
    {begin: '"""', end: '"""', name: 'string.verbatim.ceylon'},
    {
      begin: "'",
      end: "'",
      name: 'string.ceylon',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.ceylon'}]
    },
    {
      begin: '"',
      end: '"|(``)',
      name: 'string.template.head.ceylon',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.ceylon'}]
    },
    {begin: '``', end: '"|``', name: 'string.template.midOrtail.ceylon'},
    {
      match: '\\$(([01]+(_[01]+)+)|[01]+)',
      name: 'constant.numeric.binary.ceylon'
    },
    {
      match: '#(([0-9ABCDEF]+(_[0-9ABCDEF]+)+)|[0-9ABCDEF]+)',
      name: 'constant.numeric.hexa.ceylon'
    },
    {
      match:
        '-?(([0-9]+(_[0-9]+)+)|[0-9]+)\\.(([0-9]+(_[0-9]+)+)|[0-9]+)(([eE]-?(([0-9]+(_[0-9]+)+)|[0-9]+))|[kmgtpKMGTP])?',
      name: 'constant.numeric.floating.ceylon'
    },
    {
      match: '-?(([0-9]+(_[0-9]+)+)|[0-9]+)[kmgtpKMGTP]?',
      name: 'constant.numeric.decimal.ceylon'
    }
  ],
  repository: {
    comments: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.multiline.ceylon',
      patterns: [{include: '#comments'}]
    }
  },
  scopeName: 'source.ceylon'
}

export default grammar
