// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/language-rtf>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rtf'],
  names: ['rich-text-format'],
  patterns: [
    {
      begin: '\\{\\\\\\*',
      beginCaptures: {
        0: {name: 'keyword.operator.begin-ignorable-destination-group.rtf'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'keyword.operator.end-ignorable-destination-group.rtf'}
      },
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'keyword.operator.begin-group.rtf'}},
      end: '}',
      endCaptures: {0: {name: 'keyword.operator.end-group.rtf'}},
      patterns: [{include: '$self'}]
    },
    {match: '\\\\[\\\\{}]', name: 'constant.character.escape.rtf'},
    {match: '\\\\\\|', name: 'keyword.operator.formula.rtf'},
    {match: '\\\\~', name: 'constant.character.escape.non-breaking-space.rtf'},
    {match: '\\\\-', name: 'constant.character.escape.optional-hyphen.rtf'},
    {match: '\\\\_', name: 'constant.character.escape.non-breaking-hyphen.rtf'},
    {match: '\\\\:', name: 'keyword.operator.index-subentry.rtf'},
    {match: '\\\\\\*', name: 'keyword.operator.ignorable-destination.rtf'},
    {match: '\\\\[\\n\\r]', name: 'support.function.par.rtf'},
    {
      captures: {1: {name: 'punctuation.definition.constant.rtf'}},
      match: "(\\\\')[0-9A-Fa-f]{2}",
      name: 'constant.character.entity.rtf'
    },
    {
      begin: '\\\\b\\b',
      beginCaptures: {0: {name: 'support.function.rtf'}},
      contentName: 'markup.bold.rtf',
      end: '(?=\\\\(?:b0(?:\\b|[^\\d])|plain\\b)|})',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\\\i\\b',
      beginCaptures: {0: {name: 'support.function.rtf'}},
      contentName: 'markup.italic.rtf',
      end: '(?=\\\\(?:i0(?:\\b|[^\\d])|plain\\b)|})',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\\\strike\\b',
      beginCaptures: {0: {name: 'support.function.rtf'}},
      contentName: 'markup.strike.rtf',
      end: '(?=\\\\(?:strike0(?:\\b|[^\\d])|plain\\b)|})',
      patterns: [{include: '$self'}]
    },
    {
      captures: {
        1: {name: 'support.function.rtf'},
        2: {name: 'keyword.operator.rtf'},
        3: {name: 'constant.numeric.rtf'}
      },
      match: '(\\\\[A-Za-z]+)(?:(-?)(\\d+))?'
    },
    {match: '\\\\[^A-Za-z]', name: 'invalid.unimplemented.rtf'}
  ],
  scopeName: 'text.rtf'
}

export default grammar
