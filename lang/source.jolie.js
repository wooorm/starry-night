// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ol', '.iol'],
  names: ['jolie'],
  patterns: [{include: '#code'}],
  repository: {
    block_comments: {begin: '/\\*', end: '\\*/', name: 'comment.block.jolie'},
    code: {
      patterns: [
        {include: '#block_comments'},
        {include: '#line_comments'},
        {include: '#constants_language'},
        {include: '#constants_numeric'},
        {include: '#strings'},
        {include: '#keywords_control'},
        {include: '#keywords_with_colon'},
        {include: '#keywords_other'},
        {include: '#keywords_types'},
        {include: '#keywords_modifiers'},
        {include: '#invocations'},
        {include: '#operators'},
        {include: '#definitions'}
      ]
    },
    constants_language: {
      match: '\\b(true|false)\\b',
      name: 'constant.language.jolie'
    },
    constants_numeric: {match: '\\b\\d+\\b', name: 'constant.numeric.jolie'},
    definitions: {
      captures: {
        1: {name: 'keyword.other.jolie'},
        2: {name: 'meta.class.identifier.jolie'}
      },
      match:
        '\\b(inputPort|outputPort|interface|type|define|service)\\s+(\\w+)\\b'
    },
    invocations: {
      captures: {
        1: {name: 'meta.method.jolie'},
        2: {name: 'keyword.operator.jolie'},
        3: {name: 'meta.class.jolie'}
      },
      match: '\\b(\\w+)\\s*(@)\\s*(\\w+)\\b'
    },
    keywords_control: {
      match:
        '\\b(if|else|while|for|foreach|provide|until|throw|forward|scope)\\b',
      name: 'keyword.control.jolie'
    },
    keywords_modifiers: {
      match: '\\b(csets|global)\\b',
      name: 'storage.modifiers.jolie'
    },
    keywords_other: {
      match:
        '\\b(constants|cH|instanceof|execution|comp|concurrent|nullProcess|single|sequential|main|init|cset|is_defined|embedded|extender|courier|forward|install|undef|include|synchronized|throws|throw)\\b',
      name: 'keyword.other.jolie'
    },
    keywords_types: {
      match: '\\b(void|bool|int|string|long|double|any|raw)\\b',
      name: 'storage.type.jolie'
    },
    keywords_with_colon: {
      match:
        '\\b(location|Location|protocol|Protocol|interfaces|Interfaces|aggregates|Aggregates|redirects|Redirects|Jolie|JavaScript|Java|OneWay|RequestResponse)\\b\\s*:',
      name: 'keyword.other.with_colon.jolie'
    },
    line_comments: {
      begin: '//',
      end: '\\n',
      name: 'comment.line.double-slash.jolie'
    },
    operators: {
      match:
        '\\b(<<|&&|\\|\\||\\+|\\-|/|\\*|=|==|\\+\\+|--|\\+=|-=|\\*=|/=|!|%|%=)\\b',
      name: 'keyword.operator.jolie'
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.jolie',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.jolie'}]
    }
  },
  scopeName: 'source.jolie'
}

export default grammar
