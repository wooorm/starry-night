// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/agda/agda-github-syntax-highlighting>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.agda'],
  names: ['agda'],
  patterns: [
    {begin: '--', end: '$', name: 'comment.line.double-dash.agda'},
    {begin: '{-[^#]', end: '-}', name: 'comment.block.agda'},
    {begin: '{-#', end: '#-}', name: 'support.other.agda'},
    {begin: '"', end: '"', name: 'string.quoted.double.agda'},
    {match: "'([^\\\\']|\\\\['\\\\\"[:alnum:]]+)'", name: 'constant.char.agda'},
    {
      match:
        '(?<=^|[[:space:]\\(\\){}])(-?\\d+|0x[0-9A-F]+|-?\\d+\\.\\d+((e|E)(\\+|-)?\\d+)?|-?\\d+(e|E)(\\+|-)?\\d+)(?=[[:space:]\\(\\){}])',
      name: 'constant.numeric.agda'
    },
    {
      captures: {
        1: {name: 'keyword.other.agda'},
        2: {name: 'entity.name.type.agda'}
      },
      match:
        '\\b(data|record|module|constructor|open *import|open|import)[[:space:]]+([^;\\(\\){}@"[:space:]]+)'
    },
    {
      match:
        '((?<=^|[.;\\(\\){}@"[:space:]])\\?(?=[.;\\(\\){}@"[:space:]])|{!.*!})',
      name: 'entity.name.tag.agda'
    },
    {
      match:
        '\\b(Set|Prop)[0123456789₀₁₂₃₄₅₆₇₈₉]*(?=$|[[:space:]\\(\\)\\{\\}])',
      name: 'constant.language.agda'
    },
    {
      match:
        '(?<=^|[[:space:]\\(\\)\\{\\}])(λ|→|->|∀|=|←|:)(?=[[:space:]\\(\\)\\{\\}])',
      name: 'keyword.other.agda'
    },
    {
      captures: {
        1: {name: 'keyword.other.agda'},
        4: {name: 'entity.name.agda'}
      },
      match:
        '^[[:space:]]*(((abstract|instance|macro|pattern|postulate|primitive|private|syntax|variable|where|let)[[:space:]]+)*)((([^;\\(\\){}@"[:space:]]+)[[:space:]]+)+)(?=:)'
    },
    {
      match:
        '(?<=^|[[:space:]\\(\\){}])(abstract|constructor|data|do|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|interleaved|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)(?=$|[[:space:]\\(\\){}])',
      name: 'keyword.other.agda'
    }
  ],
  scopeName: 'source.agda'
}

export default grammar
