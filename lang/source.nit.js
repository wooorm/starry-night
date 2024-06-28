// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `wtfpl`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nit'],
  names: ['nit'],
  patterns: [
    {include: '#strings'},
    {include: '#markup'},
    {include: '#comments'},
    {include: '#keyword'},
    {include: '#constant'},
    {include: '#storage'},
    {include: '#variable'},
    {include: '#entity'}
  ],
  repository: {
    character: {match: "('[^\\\\']'|'\\\\.')", name: 'string.character.nit'},
    'comment-single-line': {match: '#.*', name: 'comment.singleline.nit'},
    comments: {patterns: [{include: '#comment-single-line'}]},
    constant: {
      patterns: [
        {
          match: '-?(([0-9]*.[0-9])|([0-9]+))+e-?[0-9]+',
          name: 'constant.numeric.float_exp.nit'
        },
        {match: '-?[0-9]*\\.[0-9]+', name: 'constant.numeric.float.nit'},
        {
          match: '-?0(x|X)[0-9A-Fa-f_]+((u|i)(8|(16)|(32)))?',
          name: 'constant.numeric.hex.nit'
        },
        {
          match: '-?0(o|O)[0-7_]+((u|i)(8|(16)|(32)))?',
          name: 'constant.numeric.oct.nit'
        },
        {
          match: '-?0(b|B)[0-1_]+((u|i)(8|(16)|(32)))?',
          name: 'constant.numeric.bin.nit'
        },
        {
          match: '-?[0-9][0-9_]*((u|i)(8|(16)|(32)))?',
          name: 'constant.numeric.dec.nit'
        },
        {match: '\\b(true|false|null)\\b', name: 'constant.language.nit'}
      ]
    },
    entity: {
      patterns: [
        {match: '[A-Z][a-zA-Z0-9_]*', name: 'entity.name.type.nit'},
        {match: '_[a-z][a-zA-Z0-9_]*', name: 'entity.other.attribute-name.nit'}
      ]
    },
    'inlongstring-code': {
      begin: '{{{',
      end: '}}}',
      name: 'incode.nit',
      patterns: [{include: '$self'}]
    },
    'inshortstring-code': {
      begin: '{',
      end: '}',
      name: 'string.quoted.double.untitled',
      patterns: [{include: '$self'}]
    },
    keyword: {
      patterns: [
        {
          match: '\\b(label|if|then|loop|else|while|for|do|end|in|with)\\b',
          name: 'keyword.control.nit'
        },
        {
          match: '\\b(return|continue|break|abort)\\b',
          name: 'keyword.breaks.nit'
        },
        {
          match: '\\b(nullable|once|new|var)\\b',
          name: 'keyword.declaration.nit'
        },
        {match: '\\b(is)\\b', name: 'keyword.annot.nit'},
        {match: '\\b(isa|as|type|isset)\\b', name: 'keyword.types.nit'},
        {
          match: '\\b(assert|__debug__|super|implies)\\b',
          name: 'keyword.misc.nit'
        },
        {
          match:
            '(==|\\+=|-=|!=|=|!|@|<=>|<=|<<|<|>=|>>|>|\\(|\\)|\\[|\\]|,|::|:|\\.\\.\\.|\\.\\.|\\.|\\+|-|\\*\\*|\\*|/|%|)',
          name: 'keyword.operator.nit'
        },
        {match: '\\b(and|not|or)\\b', name: 'keyword.operator.boolean.nit'}
      ]
    },
    'long-tquote-alt-string': {
      begin: "'''",
      end: "'''",
      name: 'string.triple.alt.nit',
      patterns: [{include: '#inlongstring-code'}]
    },
    'long-tquote-string': {
      begin: '\\"\\"\\"',
      end: '\\"\\"\\"',
      name: 'string.triple.nit',
      patterns: [
        {include: '#inlongstring-code'},
        {match: '([^\\\\]|\\\\.)', name: 'string.char.nit'}
      ]
    },
    markup: {patterns: [{begin: '`{', end: '`}', name: 'markup.raw.nit'}]},
    'simple-string': {
      begin: '\\"',
      end: '\\"',
      name: 'string.quoted.double.untitled',
      patterns: [
        {include: '#inshortstring-code'},
        {match: '([^\\\\]|\\\\.)', name: 'string.char.nit'}
      ]
    },
    storage: {
      patterns: [
        {
          match:
            '\\b(fun|init|redef|class|interface|module|import|package|abstract|universal|enum)\\b',
          name: 'storage.type.nit'
        },
        {
          match: '\\b(private|protected|public|intrude|extern)\\b',
          name: 'storage.modifier.nit'
        }
      ]
    },
    strings: {
      patterns: [
        {include: '#long-tquote-alt-string'},
        {include: '#long-tquote-string'},
        {include: '#simple-string'},
        {include: '#character'}
      ]
    },
    variable: {
      patterns: [
        {match: '\\b(self)\\b', name: 'variable.language.nit'},
        {match: '[a-z][a-zA-Z0-9_]*', name: 'variable.other.nit'}
      ]
    }
  },
  scopeName: 'source.nit'
}

export default grammar
