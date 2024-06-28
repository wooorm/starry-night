// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/leanprover/vscode-lean>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lean', '.hlean'],
  names: ['lean'],
  patterns: [
    {include: '#comments'},
    {
      begin:
        '\\b(?<!\\.)(inductive|coinductive|structure|theorem|abbreviation|lemma|definition|def|class)\\b\\s+((\\{)([^}]*)(\\}))?',
      beginCaptures: {
        1: {name: 'keyword.other.definitioncommand.lean'},
        2: {name: 'meta.binder.universe.lean'},
        3: {name: 'punctuation.definition.binder.universe.begin.lean'},
        4: {name: 'variable.other.constant.universe.lean'},
        5: {name: 'punctuation.definition.binder.universe.end.lean'}
      },
      end: '(?=\\bwith\\b|\\bextends\\b|:|\\||\\.|\\(|\\[|\\{|⦃)',
      name: 'meta.definitioncommand.lean',
      patterns: [
        {include: '#comments'},
        {include: '#definitionName'},
        {match: ','}
      ]
    },
    {
      begin: '\\b(?<!\\.)(example|instance)\\b\\s+',
      beginCaptures: {1: {name: 'keyword.other.definitioncommand.lean'}},
      end: '(?=:|\\||\\.|\\(|\\[|\\{|⦃)',
      name: 'meta.definitioncommand.lean',
      patterns: [
        {include: '#comments'},
        {include: '#definitionName'},
        {match: ','}
      ]
    },
    {
      begin: '\\b(?<!\\.)(axiom|axioms|constant)\\b\\s+(\\{[^}]*\\})?',
      beginCaptures: {1: {name: 'keyword.other.definitioncommand.lean'}},
      end: '($|(?=:|\\||\\.|\\(|\\[|\\{|⦃))',
      name: 'meta.definitioncommand.lean',
      patterns: [
        {include: '#comments'},
        {include: '#definitionName'},
        {match: ','}
      ]
    },
    {
      begin: '\\battribute\\b\\s*\\[',
      end: '\\]',
      name: 'storage.modifier.lean',
      patterns: [{include: '#expressions'}]
    },
    {
      begin: '@\\[',
      end: '\\]',
      name: 'storage.modifier.lean',
      patterns: [{include: '#expressions'}]
    },
    {
      match: '\\b(?<!\\.)(private|meta|mutual|protected|noncomputable)\\b',
      name: 'keyword.control.definition.modifier.lean'
    },
    {
      match:
        '#print\\s+(def|definition|inductive|instance|structure|axiom|axioms|class)\\b',
      name: 'keyword.other.command.lean'
    },
    {
      match: '#(print|eval|reduce|check|help|exit|find|where)\\b',
      name: 'keyword.other.command.lean'
    },
    {
      match:
        '\\b(?<!\\.)(import|export|prelude|theory|definition|def|abbreviation|instance|renaming|hiding|exposing|constant|lemma|theorem|example|open|axiom|inductive|coinductive|with|structure|universe|universes|alias|precedence|reserve|postfix|prefix|infix|infixl|infixr|notation|namespace|section|local|set_option|extends|include|omit|class|classes|instances|raw|run_cmd|restate_axiom)(?!\\.)\\b',
      name: 'keyword.other.lean'
    },
    {
      match:
        '\\b(?<!\\.)(variable|variables|parameter|parameters|constants)(?!\\.)\\b',
      name: 'keyword.other.lean'
    },
    {include: '#expressions'}
  ],
  repository: {
    binderName: {
      patterns: [
        {
          match:
            "(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟](?:(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟0-9'ⁿ-₉ₐ-ₜᵢ-ᵪ])*",
          name: 'variable.parameter.lean'
        },
        {begin: '«', contentName: 'variable.parameter.lean', end: '»'}
      ]
    },
    blockComment: {
      begin: '/-',
      end: '-/',
      name: 'comment.block.lean',
      patterns: [{include: 'source.lean.markdown'}, {include: '#blockComment'}]
    },
    comments: {
      patterns: [
        {include: '#dashComment'},
        {include: '#docComment'},
        {include: '#stringBlock'},
        {include: '#modDocComment'},
        {include: '#blockComment'}
      ]
    },
    dashComment: {
      begin: '(--)',
      beginCaptures: {0: {name: 'punctuation.definition.comment.lean'}},
      end: '$',
      name: 'comment.line.double-dash.lean',
      patterns: [{include: 'source.lean.markdown'}]
    },
    definitionName: {
      patterns: [
        {
          match:
            "(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟](?:(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟0-9'ⁿ-₉ₐ-ₜᵢ-ᵪ])*(\\.(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟](?:(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟0-9'ⁿ-₉ₐ-ₜᵢ-ᵪ])*)*",
          name: 'entity.name.function.lean'
        },
        {begin: '«', contentName: 'entity.name.function.lean', end: '»'}
      ]
    },
    docComment: {
      begin: '/--',
      end: '-/',
      name: 'comment.block.documentation.lean',
      patterns: [{include: 'source.lean.markdown'}, {include: '#blockComment'}]
    },
    expressions: {
      patterns: [
        {match: '\\b(Prop|Type|Sort)\\b', name: 'storage.type.lean'},
        {match: '\\b(sorry)\\b', name: 'invalid.illegal.lean'},
        {begin: '«', contentName: 'entity.name.lean', end: '»'},
        {match: '\\b(?<!\\.)(if|then|else)\\b', name: 'keyword.control.lean'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.lean'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.lean'}},
          name: 'string.quoted.double.lean',
          patterns: [
            {match: '\\\\[\\\\"nt\']', name: 'constant.character.escape.lean'},
            {
              match: '\\\\x[0-9A-Fa-f][0-9A-Fa-f]',
              name: 'constant.character.escape.lean'
            },
            {
              match: '\\\\u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]',
              name: 'constant.character.escape.lean'
            }
          ]
        },
        {match: "'[^\\\\']'", name: 'string.quoted.single.lean'},
        {
          captures: {1: {name: 'constant.character.escape.lean'}},
          match: "'(\\\\(x..|u....|.))'",
          name: 'string.quoted.single.lean'
        },
        {
          match:
            "`+(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟](?:(?![λΠΣ])[_a-zA-Zα-ωΑ-Ωϊ-ϻἀ-῾℀-⅏𝒜-𝖟0-9'ⁿ-₉ₐ-ₜᵢ-ᵪ])*",
          name: 'entity.name.lean'
        },
        {
          match: '\\b([0-9]+|0([xX][0-9a-fA-F]+))\\b',
          name: 'constant.numeric.lean'
        },
        {
          match:
            '\\b(?<!\\.)(calc|have|this|match|do|suffices|show|by|in|at|let|from|obtain|haveI)(?!\\.)\\b',
          name: 'keyword.other.lean'
        },
        {match: '\\b(?<!\\.)λ', name: 'keyword.other.lean'},
        {
          match: '\\b(?<!\\.)(begin|end|using)(?!\\.)\\b',
          name: 'keyword.other.lean'
        },
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.parens',
          patterns: [
            {
              begin: ':',
              beginCaptures: {0: {name: 'punctuation.separator.type.lean'}},
              contentName: 'meta.type.lean',
              end: '(?=\\))',
              patterns: [{include: '#expressions'}]
            },
            {include: '#expressions'}
          ]
        },
        {include: '#dashComment'},
        {include: '#blockComment'},
        {include: '#stringBlock'}
      ]
    },
    modDocComment: {
      begin: '/-!',
      end: '-/',
      name: 'comment.block.documentation.lean',
      patterns: [{include: 'source.lean.markdown'}, {include: '#blockComment'}]
    },
    stringBlock: {
      begin: '/-"',
      end: '"-/',
      name: 'comment.block.string.lean',
      patterns: [{include: 'source.lean.markdown'}, {include: '#blockComment'}]
    }
  },
  scopeName: 'source.lean'
}

export default grammar
