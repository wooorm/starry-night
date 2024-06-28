// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.agc'],
  names: ['apollo-guidance-computer'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.agc'}},
          end: '$',
          name: 'comment.line.number-sign.agc',
          patterns: [
            {
              match: 'TODO|FIXME|CHANGED|XXX|IDEA|HACK|NOTE|REVIEW|NB|BUG',
              name: 'disable-todo'
            }
          ]
        },
        {match: '^\\t[-+]\\d+(?=\\t)', name: 'comment.annotation.numeric.agc'}
      ]
    },
    identifier: {
      match: '^(?!\\$)(?:[^#\\s]{1,7}\\t|[^#\\s]{8})',
      name: 'entity.name.identifier.agc'
    },
    inclusion: {
      begin: '^\\$',
      beginCaptures: {0: {name: 'punctuation.definition.directive.agc'}},
      end: '(?=\\s)',
      name: 'meta.preprocessor.include.directive.agc'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#number'},
        {include: '#inclusion'},
        {include: '#identifier'},
        {include: '#opcode'}
      ]
    },
    number: {match: '[-+]\\d+(?:\\.\\d+)?D?', name: 'constant.numeric.agc'},
    opcode: {
      begin: '(?<=\\t)([^#\\s]+)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.function.opcode.agc'}},
      end: '$|(?=#)|[^#\\s]+',
      endCaptures: {0: {name: 'variable.parameter.operand.agc'}},
      name: 'meta.opcode.agc'
    }
  },
  scopeName: 'source.agc'
}

export default grammar
