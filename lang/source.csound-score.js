// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/language-csound>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.csound'],
  extensions: ['.sco'],
  names: ['csound-score', 'csound-sco'],
  patterns: [
    {include: 'source.csound#preprocessorDirectives'},
    {include: 'source.csound#commentsAndMacroUses'},
    {match: '[aBbCdefiqstvxy]', name: 'keyword.control.csound-score'},
    {match: 'w', name: 'invalid.illegal.csound-score'},
    {match: 'z', name: 'constant.numeric.language.csound-score'},
    {
      captures: {
        1: {name: 'keyword.control.csound-score'},
        2: {name: 'constant.numeric.integer.decimal.csound-score'}
      },
      match: '([nNpP][pP])(\\d+)',
      name: 'meta.p-symbol.csound-score'
    },
    {
      begin: '(m)|(n)',
      beginCaptures: {
        1: {name: 'keyword.mark.preprocessor.csound-score'},
        2: {name: 'keyword.repeat-mark.preprocessor.csound-score'}
      },
      end: '$',
      patterns: [
        {include: 'source.csound#comments'},
        {match: '[A-Z_a-z]\\w*', name: 'entity.name.label.csound-score'}
      ]
    },
    {
      begin: 'r\\b',
      beginCaptures: {
        0: {name: 'keyword.repeat-section.preprocessor.csound-score'}
      },
      end: '$',
      patterns: [
        {include: 'source.csound#comments'},
        {
          begin: '\\d+',
          beginCaptures: {
            0: {name: 'constant.numeric.integer.decimal.csound-score'}
          },
          end: '$',
          patterns: [
            {include: 'source.csound#comments'},
            {include: 'source.csound#macroNames'}
          ]
        }
      ]
    },
    {include: 'source.csound#numbers'},
    {match: '[!+\\-*/^%&|<>#~.]', name: 'keyword.operator.csound-score'},
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.csound-score'}
      },
      end: '"',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.csound-score'}
      },
      name: 'string.quoted.csound-score',
      patterns: [{include: 'source.csound#macroUses'}]
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.braced-loop.begin.csound-score'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.braced-loop.end.csound-score'}},
      name: 'meta.braced-loop.csound-score',
      patterns: [
        {
          begin: '\\G',
          end: '$',
          name: 'meta.braced-loop-details.csound-score',
          patterns: [
            {
              begin: '\\d+',
              beginCaptures: {
                0: {name: 'constant.numeric.integer.decimal.csound-score'}
              },
              end: '$',
              patterns: [
                {
                  begin: '[A-Z_a-z]\\w*\\b',
                  beginCaptures: {
                    0: {name: 'entity.name.function.preprocessor.csound-score'}
                  },
                  end: '$',
                  patterns: [
                    {include: '#comments'},
                    {match: '\\S+', name: 'invalid.illegal.csound-score'}
                  ]
                },
                {include: '#comments'},
                {match: '\\S+', name: 'invalid.illegal.csound-score'}
              ]
            },
            {include: '#comments'},
            {match: '\\S+', name: 'invalid.illegal.csound-score'}
          ]
        },
        {begin: '^', end: '(?=\\})', patterns: [{include: '$self'}]}
      ]
    }
  ],
  scopeName: 'source.csound-score'
}

export default grammar
