// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ccreutzig/sublime-MuPAD>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mu'],
  names: ['mupad'],
  patterns: [
    {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.mupad',
      patterns: []
    },
    {include: '#blockcomment'},
    {
      match:
        '\\b(axiom|end_axiom|category|end_category|begin|break|case|do|downto|elif|else|end_case|end_for|end_if|end_proc|end_repeat|end_while|for|from|if|%if|local|name|next|of|option|otherwise|proc|quit|repeat|save|step|then|to|until|while|domain|end|inherits|end_domain)\\b',
      name: 'keyword.control.mupad'
    },
    {
      match: '\\b(intersect|minus|union)\\b|->|-->|\\.',
      name: 'keyword.operator.mupad'
    },
    {
      match: '\\b(div|mod)\\b|\\+|-|\\*|/|\\^|\\|',
      name: 'keyword.operator.arithmetic.mupad'
    },
    {
      match: '\\b(and|in|not|or|xor)\\b|>|<|<>|=|<=>|<==|==>|\\|\\||&&',
      name: 'keyword.operator.logical.mupad'
    },
    {match: ':=', name: 'keyword.operator.assignment.mupad'},
    {match: '::', name: 'punctuation.accessor.mupad'},
    {match: ';', name: 'punctuation.terminator.mupad'},
    {match: ',', name: 'punctuation.separator.mupad'},
    {
      match:
        '\\b(E|FAIL|FALSE|I|NIL|TRUE|UNKNOWN|PI|EULER|CATALAN|infinity|undefined)\\b',
      name: 'constant.language.mupad'
    },
    {match: '(\\b[a-zA-Z_#]\\w*\\b|`.*?`)', name: 'entity.name.variable.mupad'},
    {
      captures: {
        1: {name: 'entity.name.function.mupad'},
        2: {name: 'variable.parameter.mupad'}
      },
      match:
        '(?:\\b([a-zA-Z_]w+(?:::\\w+)*|`.*?`)\\s*:=\\s*)\\bproc\\b\\s*\\((.*?)\\)',
      name: 'declaration.function.mupad.one'
    },
    {
      captures: {
        1: {name: 'entity.name.function.mupad'},
        2: {name: 'variable.parameter.mupad'}
      },
      match:
        '(?:\\b([a-zA-Z_]w+(?:::\\w+)*|`.*?`)\\s*:=\\s*)\\s*\\((.*?)\\)\\s*--?>',
      name: 'declaration.function.mupad.two'
    },
    {
      captures: {
        1: {name: 'entity.name.function.mupad'},
        2: {name: 'variable.parameter.mupad'}
      },
      match:
        '(?:\\b([a-zA-Z_]w+(?:::\\w+)*|`.*?`)\\s*:=\\s*)\\s*(\\w+)\\s*--?>',
      name: 'declaration.function.mupad.three'
    },
    {
      match: '\\b(([0-9]+\\.?[0-9]*)((e|E)(\\+|-)?[0-9]+)?[ij]?)\\b',
      name: 'constant.numeric.mupad'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.mupad',
      patterns: [{include: '#string_escaped_char'}]
    }
  ],
  repository: {
    blockcomment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.mupad',
      patterns: [{include: '#blockcomment'}]
    },
    string_escaped_char: {
      patterns: [
        {match: '\\\\(\\\\|[bntr"])', name: 'constant.character.escape.mupad'},
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.mupad'}
      ]
    }
  },
  scopeName: 'source.mupad'
}

export default grammar
