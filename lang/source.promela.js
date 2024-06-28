// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/corbanmailloux/sublime-promela-spin>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pml'],
  names: ['promela'],
  patterns: [
    {begin: '\\/\\*', end: '\\*\\/', name: 'comment.block'},
    {
      match: '\\b(assert|else|fi|if|unless|xr|xs|do|od|break|skip|atomic)\\b',
      name: 'keyword.control'
    },
    {match: '\\b(run)\\b', name: 'keyword.operator'},
    {
      captures: {
        2: {name: 'keyword.operator'},
        3: {name: 'entity.name.function'}
      },
      match: '^(#)\\s*(define)\\s*([a-zA-Z_]+[0-9a-zA-Z_]*)'
    },
    {match: '\\b[a-zA-Z_]+[0-9a-zA-Z_]*(\\s)*:', name: 'variable.other'},
    {
      match: '\\b(printf|len|empty|nempty|full|nfull|enabled|eval|pc_value)\\b',
      name: 'entity.name.function'
    },
    {
      begin: '\\b([a-zA-Z_]+[0-9a-zA-Z_]*)\\(',
      beginCaptures: {1: {name: 'entity.name.function'}},
      end: '\\)',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(ltl)(\\s)+([a-zA-Z_]+[0-9a-zA-Z_]*)(\\s)*{',
      beginCaptures: {
        1: {name: 'storage.type'},
        3: {name: 'entity.name.function'}
      },
      end: '}',
      patterns: [{include: '$self'}]
    },
    {match: '"([^\\\\"]|\\\\.)*"', name: 'string.quoted.double'},
    {match: '\\b([0-9])+\\b', name: 'constant.numeric'},
    {match: '\\b(true|false|TRUE|FALSE)\\b', name: 'constant.language'},
    {
      match:
        '\\b(bit|bool|byte|pid|chan|int|mtype|proctype|short|unsigned|Dproctype)\\b',
      name: 'storage.type'
    },
    {
      match: '\\b(hidden|init|inline|active|local|show)\\b',
      name: 'storage.modifier'
    },
    {match: '\\b(typedef|c_state)\\b', name: 'storage.modifier'},
    {match: '\\/\\/.*$', name: 'comment.double-slash'}
  ],
  scopeName: 'source.promela'
}

export default grammar
