// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sci', '.sce'],
  names: ['scilab'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.scilab'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.scilab'}},
          end: '\\n',
          name: 'comment.line.double-slash.scilab'
        }
      ]
    },
    {
      match: '\\b(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?\\b',
      name: 'constant.numeric.scilab'
    },
    {
      match: '(%inf|%i|%pi|%eps|%e|%nan|%s|%t|%f)\\b',
      name: 'support.constant.scilab'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.scilab'}},
      end: '"(?!")',
      endCaptures: {0: {name: 'punctuation.definition.string.end.scilab'}},
      name: 'string.quoted.double.scilab',
      patterns: [{match: '\'\'|""', name: 'constant.character.escape.scilab'}]
    },
    {
      begin: "(?<![\\w\\]\\)])'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.scilab'}},
      end: "'(?!')",
      endCaptures: {0: {name: 'punctuation.definition.string.end.scilab'}},
      name: 'string.quoted.single.scilab',
      patterns: [{match: '\'\'|""', name: 'constant.character.escape.scilab'}]
    },
    {
      captures: {
        1: {name: 'keyword.control.scilab'},
        2: {name: 'entity.name.function.scilab'}
      },
      match: '\\b(function)\\s+(?:[^=]+=\\s*)?(\\w+)(?:\\s*\\(.*\\))?'
    },
    {
      match:
        '\\b(if|then|else|elseif|while|for|function|end|endfunction|return|select|case|break|global)\\b',
      name: 'keyword.control.scilab'
    },
    {match: '\\.\\.\\.\\s*$', name: 'punctuation.separator.continuation.scilab'}
  ],
  scopeName: 'source.scilab'
}

export default grammar
