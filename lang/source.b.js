// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/JJWRoeloffs/b-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mch'],
  names: ['b-(formal-method)'],
  patterns: [
    {include: '#comments'},
    {include: '#strings'},
    {include: '#numbers'},
    {include: '#keywords'},
    {include: '#operators'},
    {include: '#types'},
    {include: '#constants'},
    {include: '#preprocessor'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          end: '\\*/',
          name: 'comment.block.b',
          patterns: [
            {
              match: '\\b(TODO|FIXME|XXX)\\b',
              name: 'keyword.other.documentation.b'
            }
          ]
        },
        {
          begin: '//',
          end: '$',
          name: 'comment.line.double-slash.b',
          patterns: [
            {
              match: '\\b(TODO|FIXME|XXX)\\b',
              name: 'keyword.other.documentation.b'
            }
          ]
        }
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b(TRUE|FALSE|bfalse|btrue)\\b',
          name: 'constant.language.boolean.b'
        },
        {
          match:
            '\\b(PI|MAXINT|MININT|User_Pass|PatchProver|PatchProverH0|PatchProverB0|FLAT|ARI|DED|SUB|RES)\\b',
          name: 'constant.other.b'
        },
        {
          match:
            '\\b(binhyp|band|bnot|bguard|bsearch|bflat|bfresh|bguardi|bget|bgethyp|barith|bgetresult|bresult|bgoal|bmatch|bmodr|bnewv|bnum|btest|bpattern|bprintf|bwritef|bsubfrm|bvrb|blvar|bcall|bappend|bclose)\\b',
          name: 'support.function.builtin.b'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(MACHINE|MODEL|SEES|OPERATIONS|INCLUDES|DEFINITIONS|CONSTRAINTS|CONSTANTS|VARIABLES|CONCRETE_CONSTANTS|CONCRETE_VARIABLES|ABSTRACT_CONSTANTS|ABSTRACT_VARIABLES|HIDDEN_CONSTANTS|HIDDEN_VARIABLES|ASSERT|ASSERTIONS|EXTENDS|IMPLEMENTATION|REFINEMENT|IMPORTS|USES|INITIALISATION|INVARIANT|PROMOTES|PROPERTIES|REFINES|SETS|VALUES|VARIANT|VISIBLE_CONSTANTS|VISIBLE_VARIABLES|THEORY|XLS|THEOREMS|LOCAL_OPERATIONS)\\b',
          name: 'keyword.control.b'
        },
        {
          match: '\\b(CASE|IN|EITHER|OR|CHOICE|DO|OF)\\b',
          name: 'keyword.control.label.b'
        },
        {
          match: '\\b(IF|ELSE|SELECT|ELSIF|THEN|WHEN)\\b',
          name: 'keyword.control.conditional.b'
        },
        {match: '\\b(WHILE|FOR)\\b', name: 'keyword.control.repeat.b'},
        {
          match:
            '\\b(LET|VAR|BE|IN|BEGIN|END|POW|POW1|FIN|FIN1|PRE|SIGMA|STRING|UNION|INTER|IS|ANY|WHERE)\\b',
          name: 'keyword.operator.b'
        },
        {
          match:
            '\\b(arity|bin|bool|btree|card|const|conc|closure|closure1|dom|father|first|fnc|front|id|inter|iseq|iseq1|iterate|last|left|max|min|mirror|mod|perm|postfix|pred|prj1|prj2|ran|rev|rank|rec|rel|right|seq|seq1|size|sizet|skip|sons|struct|subtree|succ|tail|top|tree|union)\\b',
          name: 'support.function.b'
        }
      ]
    },
    numbers: {match: '\\b[0-9]+\\.?[0-9]*\\b', name: 'constant.numeric.b'},
    operators: {
      patterns: [
        {match: '\\b(or|not)\\b', name: 'keyword.operator.logical.b'},
        {match: ':=', name: 'keyword.operator.assignment.b'},
        {
          match:
            '(\\!|#|%|&|\\$|&|\\*\\*|\\*|\\+->|\\+->>|-->>|-->|->|/:|/<:|/<<:|/=|/\\\\\\|/\\|\\\\|/\\\\|\\\\/|::|:|;:|<\\+|<->|<--|<-|<:|<<:|<<\\||<=|<=>|<\\||==|=>|>\\+>>|>->|>->>|><|>=|>\\+>|\\|\\||\\|->|\\+|<|>|-|=|r~)',
          name: 'keyword.operator.b'
        }
      ]
    },
    preprocessor: {
      patterns: [
        {
          begin: '^\\s*#\\s*(if|ifdef|ifndef|elif|else|endif)\\b',
          end: '$',
          name: 'meta.preprocessor.b',
          patterns: [
            {include: '#comments'},
            {include: '#strings'},
            {include: '#numbers'}
          ]
        },
        {
          begin: '^\\s*#\\s*include\\b',
          end: '$',
          name: 'meta.preprocessor.include.b',
          patterns: [
            {match: '"[^"]*"', name: 'string.quoted.double.include.b'},
            {match: '<[^>]*>', name: 'string.quoted.angle.include.b'}
          ]
        },
        {
          begin: '^\\s*#\\s*(define|undef)\\b',
          end: '$',
          name: 'meta.preprocessor.define.b'
        },
        {
          begin: '^\\s*#\\s*(pragma|line|warning|warn|error)\\b',
          end: '$',
          name: 'meta.preprocessor.b'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.b',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.b'},
            {match: '\\\\[0-7]{1,3}', name: 'constant.character.escape.b'}
          ]
        }
      ]
    },
    types: {
      match: '\\b(INT|INTEGER|BOOL|NAT|NATURAL|NAT1|NATURAL1)\\b',
      name: 'storage.type.b'
    }
  },
  scopeName: 'source.b'
}

export default grammar
