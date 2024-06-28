// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/razetime/bqn-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bqn'],
  names: ['bqn'],
  patterns: [
    {include: '#bracket'},
    {include: '#number'},
    {include: '#name'},
    {include: '#operator'},
    {include: '#variable'},
    {include: '#string'},
    {include: '#comment'},
    {include: '#entity'},
    {include: '#subject'}
  ],
  repository: {
    bracket: {patterns: [{match: '(\\(|\\))', name: 'meta.bracket.bqn'}]},
    comment: {
      patterns: [
        {
          begin: '#',
          captures: {0: {name: 'punctuation.definition.comment.bqn'}},
          end: '$',
          name: 'comment.line.number-sign.bqn'
        }
      ]
    },
    entity: {
      patterns: [
        {
          match:
            '([˙˜˘¨´˝`⌜⁼]|(‿\\K|\\b|^)_[A-ZÀ-ÖØ-Þa-zß-öø-ÿ𝕣][_A-ZÀ-ÖØ-Þa-zß-öø-ÿ¯π∞0-9]*[^_](\\b|(?=‿)))',
          name: 'keyword.operator.modifier1.bqn'
        }
      ]
    },
    number: {
      patterns: [
        {
          match:
            '(?<![A-Z_a-z0-9π∞¯])¯?(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*)(i_*(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*))?',
          name: 'constant.numeric.bqn'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match:
            '([∘○⊸⟜⌾⊘◶⎊⎉⚇⍟]|((?:[𝕗𝔽𝕘𝔾𝕨𝕎𝕩𝕏𝕤𝕊𝕣‿])|\\b|^)_[A-ZÀ-ÖØ-Þa-zß-öø-ÿ𝕣][_A-ZÀ-ÖØ-Þa-zß-öø-ÿ¯π∞0-9]*_(\\b|(?=[𝕗𝔽𝕘𝔾𝕨𝕎𝕩𝕏𝕤𝕊𝕣‿])))',
          name: 'keyword.control.modifier2.bqn'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.bqn'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.bqn'}},
          name: 'string.quoted.double.bqn'
        },
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.bqn'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.bqn'}},
          name: 'string.quoted.double.bqn'
        }
      ]
    },
    subject: {
      patterns: [
        {
          match: '[𝕗𝕘𝕨𝕩𝕤]|•?[a-zß-öø-ÿ][A-ZÀ-ÖØ-Þa-zß-öø-ÿ_0-9π∞¯]*',
          name: 'support.class.bqn'
        }
      ]
    },
    variable: {
      patterns: [
        {
          match:
            '[𝔽𝔾𝕎𝕏𝕊+\\-×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!⍕⍎]|•?[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þa-zß-öø-ÿ_0-9π∞¯]*',
          name: 'variable.language.function.bqn'
        }
      ]
    }
  },
  scopeName: 'source.bqn'
}

export default grammar
