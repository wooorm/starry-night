// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/OpenRA/atom-miniyaml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  extensionsWithDot: ['.yaml', '.yml'],
  names: ['miniyaml'],
  patterns: [{include: '#comment'}, {include: '#node'}],
  repository: {
    'block-pair': {
      match: '^\\t*(\\S+?)(?=@|:)',
      name: 'entity.name.tag.yaml',
      patterns: [{include: '#node-identifier'}]
    },
    comment: {
      begin: '(?<=^|\\s)#(?!{)',
      beginCaptures: {0: {name: 'punctuation.definition.comment.yaml'}},
      end: '$',
      name: 'comment.line.number-sign.yaml'
    },
    constants: {
      match: '(?::\\s)(true|false|True|False|TRUE|FALSE|~)(?=\\s*$)',
      name: 'constant.language.yaml'
    },
    node: {
      patterns: [
        {include: '#node-removal'},
        {include: '#block-pair'},
        {include: '#node-identifier'},
        {include: '#scalar-content'}
      ]
    },
    'node-identifier': {match: '(?<=\\S)(@\\S+)(?=:\\s)', name: 'support.yaml'},
    'node-removal': {match: '^\\t+(-.+?)(?=@|:\\s)', name: 'entity.yaml'},
    numeric: {
      patterns: [
        {
          match: '(?::\\s)[-+]?[0-9]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.integer.yaml'
        },
        {
          match: '(?::\\s)0o[0-7]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.octal.yaml'
        },
        {
          match: '(?::\\s)0x[0-9a-fA-F]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.hexadecimal.yaml'
        },
        {
          match:
            '(?::\\s)[-+]?(.[0-9]+|[0-9]+(.[0-9]*)?)([eE][-+]?[0-9]+)?(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        },
        {
          match: '(?::\\s)[-+]?(.inf|.Inf|.INF)(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        },
        {
          match: '(?::\\s)(.nan|.NaN|.NAN)(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        }
      ]
    },
    'scalar-content': {
      patterns: [
        {include: '#comment'},
        {include: '#constants'},
        {include: '#numeric'},
        {include: '#strings'}
      ]
    },
    strings: {
      patterns: [
        {
          match: '[^\\s"\'\\n](?!\\s*#(?!{))([^#\\n]|((?<!\\s)#))*',
          name: 'string.unquoted.yaml'
        }
      ]
    }
  },
  scopeName: 'source.miniyaml'
}

export default grammar
