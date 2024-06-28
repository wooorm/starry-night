// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/inkle/ink-tmlanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ink'],
  names: ['ink'],
  patterns: [
    {include: '#comment'},
    {include: '#tag'},
    {include: '#todo'},
    {include: '#import'},
    {include: '#declaration'},
    {include: '#knot'},
    {include: '#stitch'},
    {include: '#choice'},
    {include: '#divert'},
    {include: '#gather'},
    {include: '#logic'},
    {include: '#glue'},
    {include: '#interpolevaluablock'}
  ],
  repository: {
    alternativeClause: {
      patterns: [
        {
          begin: '^(?:[^\\S\\n\\r])*(-(?!>))',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=^)|(?=\\})|(?=\\-)',
          patterns: [
            {include: '#comment'},
            {include: '#interpolevaluablock'},
            {include: '#divert'},
            {include: '#logic'},
            {include: '#choice'},
            {include: '#comment'}
          ]
        }
      ]
    },
    alternativeItem: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\|)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=\\})|(?=\\|)',
          patterns: [
            {include: '#languageLiteral'},
            {include: '#numberLiteral'},
            {include: '#stringLiteral'},
            {include: '#comment'},
            {include: '#interpolevaluablock'},
            {include: '#divert'},
            {include: '#tag'}
          ]
        }
      ]
    },
    assignment: {
      patterns: [
        {
          begin:
            '([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)(?:[^\\S\\n\\r])*(=)',
          beginCaptures: {
            1: {name: 'entity.name.variable.other.ink'},
            2: {name: 'keyword.operator.assignment.ink'}
          },
          end: '(?=$)',
          patterns: [
            {include: '#comment'},
            {include: '#languageLiteral'},
            {include: '#numberLiteral'},
            {include: '#stringLiteral'},
            {include: '#divert'},
            {include: '#expressionIdentifier'},
            {include: '#expression'}
          ]
        }
      ]
    },
    caseClause: {
      patterns: [
        {
          begin:
            '^(?:[^\\S\\n\\r])*(-(?!>))(?:[^\\S\\n\\r])?(else|[^\\|\\{\\}\\:]+)(?:[^\\S\\n\\r])*(?<!\\\\)(\\:)',
          beginCaptures: {
            1: {name: 'keyword.control.ink'},
            2: {name: 'keyword.control.ink'},
            3: {name: 'keyword.control.ink'}
          },
          end: '(?=^)|(?=\\})|(?=\\-)',
          patterns: [
            {include: '#interpolevaluablock'},
            {include: '#divert'},
            {include: '#logic'},
            {include: '#glue'},
            {include: '#choiceInClause'},
            {include: '#tag'},
            {include: '#comment'}
          ]
        }
      ]
    },
    choice: {
      patterns: [
        {
          begin:
            '(?x)\n (?<=^|\\-)\n (?:[^\\S\\n\\r])*\n (?:\n   ((?:(?:[^\\S\\n\\r])*[\\*])+)\n   |\n   ((?:(?:[^\\S\\n\\r])*[\\+])+)\n )',
          beginCaptures: {
            1: {name: 'keyword.choice.ink'},
            2: {name: 'keyword.choice.sticky.ink'}
          },
          end: '(?=\\#|$)',
          patterns: [
            {include: '#comment'},
            {include: '#label'},
            {include: '#inlineConditionalSubstitution'},
            {include: '#textSuppression'},
            {include: '#divert'},
            {include: '#tag'},
            {include: '#glue'},
            {include: '#logic'}
          ]
        }
      ]
    },
    choiceInClause: {
      patterns: [
        {
          begin:
            '(?x)\n (?<=^|\\-|\\:)\n (?:[^\\S\\n\\r])*\n (?:\n   ((?:(?:[^\\S\\n\\r])*[\\*])+)\n   |\n   ((?:(?:[^\\S\\n\\r])*[\\+])+)\n )',
          beginCaptures: {
            2: {name: 'keyword.choice.ink'},
            3: {name: 'keyword.choice.sticky.ink'}
          },
          end: '(?=\\#|$)',
          patterns: [
            {include: '#comment'},
            {include: '#label'},
            {include: '#inlineConditionalSubstitution'},
            {include: '#textSuppression'},
            {include: '#divert'},
            {include: '#tag'},
            {include: '#glue'},
            {include: '#logic'}
          ]
        }
      ]
    },
    commas: {patterns: [{match: '\\,', name: 'punctuation.separator.ink'}]},
    comment: {
      patterns: [
        {
          begin: '(/\\*)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.ink'}},
          end: '(\\*/)',
          endCaptures: {1: {name: 'punctuation.definition.comment.ink'}},
          name: 'comment.block.ink'
        },
        {
          begin: '(\\/\\/)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.ink'}},
          end: '(?=$)',
          name: 'comment.line.ink'
        }
      ]
    },
    conditionalSubstitution: {
      patterns: [
        {
          begin:
            '((?:[^\\{\\}\\|]|\\|(?=\\|))+(?:[^\\S\\n\\r])*\\:)(?:[^\\S\\n\\r])*(?!$)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=\\})',
          patterns: [
            {include: '#comment'},
            {include: '#divert'},
            {include: '#glue'},
            {include: '#inlineElseClause'},
            {include: '#interpolevaluablock'}
          ]
        }
      ]
    },
    constAssignment: {
      patterns: [
        {
          begin:
            '([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)(?:[^\\S\\n\\r])*(=)',
          beginCaptures: {
            1: {
              name: 'variable.other.constant.ink entity.name.variable.other.constant.ink'
            },
            2: {name: 'keyword.operator.assignment.ink'}
          },
          end: '(?=$)',
          patterns: [
            {include: '#comment'},
            {include: '#languageLiteral'},
            {include: '#numberLiteral'},
            {include: '#stringLiteral'},
            {include: '#divert'},
            {include: '#expressionIdentifier'},
            {include: '#expression'}
          ]
        }
      ]
    },
    declaration: {
      patterns: [
        {
          begin: '(?:^)(?:[^\\S\\n\\r])*((VAR)|(LIST))(?:[^\\S\\n\\r])*',
          beginCaptures: {
            1: {name: 'storage.type.ink'},
            2: {name: 'storage.type.var.ink'},
            3: {name: 'storage.type.list.ink'}
          },
          end: '(?=$)',
          patterns: [{include: '#assignment'}, {include: '#comment'}]
        },
        {
          begin: '(?:^)(?:[^\\S\\n\\r])*(CONST)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'storage.type.const.ink'}},
          end: '(?=$)',
          patterns: [{include: '#constAssignment'}, {include: '#comment'}]
        },
        {
          begin: '(?:^)(?:[^\\S\\n\\r])*(EXTERNAL)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'storage.type.external.ink'}},
          end: '(?=$)',
          patterns: [
            {include: '#externalFunctionDeclaration'},
            {include: '#comment'}
          ]
        }
      ]
    },
    divert: {
      patterns: [
        {
          begin: '(?:[^\\S\\n\\r])*(->|<-)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'keyword.divert.ink keyword.other.ink'}},
          end: '(?=($|\\}|\\)|\\||\\-|\\#))',
          patterns: [
            {include: '#comment'},
            {include: '#function'},
            {include: '#divertIdentifier'},
            {include: '#tunnel'}
          ]
        }
      ]
    },
    divertIdentifier: {
      patterns: [
        {
          begin:
            '(?x) (?:[^\\S\\n\\r])* (?:\n  (END|DONE)\n  |\n  (?:\n    ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)\n    (?:\n      (\\.)\n      ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)\n      (?:\n        (\\.)\n        ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)\n      )?\n    )?\n  )\n)',
          beginCaptures: {
            1: {
              name: 'support.constant.ink constant.language.divert constant.language.ink'
            },
            2: {
              name: 'variable.other.knot.ink entity.name.variable.other.knot.ink'
            },
            3: {name: 'punctuation.accessor.ink'},
            4: {
              name: 'variable.other.stitch.ink entity.name.variable.other.stitch.ink'
            },
            5: {name: 'punctuation.accessor.ink'},
            6: {
              name: 'variable.other.label.ink entity.name.variable.other.label.ink'
            }
          },
          end: '(?=($|\\}|\\)|\\||\\#))',
          patterns: [{include: '#comment'}, {include: '#tunnel'}]
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#comment'},
        {include: '#parentheses'},
        {include: '#function'},
        {include: '#operator'},
        {include: '#languageLiteral'},
        {include: '#stringLiteral'},
        {include: '#expressionIdentifier'},
        {include: '#numberLiteral'},
        {include: '#commas'}
      ]
    },
    expressionIdentifier: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.variable.other.ink'}},
          match:
            '(?x)\n  (?:(?<=return) |\n     (?<=&&) | (?<=\\|\\|) |\n     (?<=\\=) |\n     (?<=/)  | (?<=%)    | (?<=\\*) | (?<=\\+) | (?<=\\-) |\n     (?<=\\?) | (?<=!\\?)  | (?<=\\^) | (?<=\\~) |\n     (?<=,)  | (?=\\)))\n  (?:[^\\S\\n\\r])*\n  ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*\n  (?:\\.[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)?)'
        },
        {
          captures: {1: {name: 'entity.name.variable.other.ink'}},
          match:
            '(?x)\n  (?:[^\\S\\n\\r])*\n  (?:(?<=not) | (?<=and) | (?<=or) | (?<=has) | (?<=hasnt) | (?<=mod))\n  [^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]\n  ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*\n  (?:\\.[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)?)'
        },
        {
          captures: {1: {name: 'entity.name.variable.other.ink'}},
          match:
            '(?x)\n  (?:[^\\S\\n\\r])*\n  ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*\n  (?:\\.[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)?)\n  (?:[^\\S\\n\\r])*\n  (?:(?=&&) | (?=\\|\\|) |\n     (?=\\=) | (?=!\\=)  | (?=\\>) | (?=\\<) |\n     (?=/)  | (?=%)    | (?=\\*) | (?=\\+) | (?=\\-) |\n     (?=\\?) | (?=!\\?)  | (?=\\^) |\n     (?=,)  | (?=\\)))'
        },
        {
          captures: {1: {name: 'entity.name.variable.other.ink'}},
          match:
            '(?x)\n  (?:[^\\S\\n\\r])*\n  ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*\n  (?:\\.[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)?)\n  [^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]\n  (?:(?=not) | (?=and) | (?=or) | (?=has) | (?=hasnt) | (?=mod))'
        }
      ]
    },
    externalFunctionDeclaration: {
      patterns: [
        {
          begin:
            '([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'entity.name.function.ink'}},
          end: '(?<=\\))',
          patterns: [{include: '#functionDeclarationParameters'}]
        }
      ]
    },
    firstAlternativeItem: {
      patterns: [
        {
          begin: '(?<=\\{)(?:[^\\S\\n\\r])*(&|!|~)',
          beginCaptures: {
            1: {name: 'keyword.control.ink keyword.alternative.type.ink'}
          },
          end: '(?=\\|)',
          patterns: [
            {include: '#languageLiteral'},
            {include: '#numberLiteral'},
            {include: '#stringLiteral'},
            {include: '#divert'},
            {include: '#tag'},
            {include: '#comment'},
            {include: '#conditionalSubstitution'},
            {include: '#interpolevaluablock'}
          ]
        }
      ]
    },
    function: {
      patterns: [
        {
          begin:
            '(?:[^\\S\\n\\r])*((LIST_COUNT|LIST_MIN|LIST_MAX|LIST_ALL|LIST_INVERT|LIST_RANDOM|CHOICE_COUNT|TURNS_SINCE|LIST_RANGE|TURNS|POW|FLOOR|CEILING|INT|FLOAT)|([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*))(?:[^\\S\\n\\r])*(\\()(?:[^\\S\\n\\r])*',
          beginCaptures: {
            2: {name: 'constant.language.ink'},
            3: {name: 'entity.name.function.ink'},
            4: {name: 'punctuation.section.parens.begin.ink'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.parens.end.ink'}},
          patterns: [
            {include: '#comment'},
            {match: ',', name: 'punctuation.separator.ink'},
            {include: '#divert'},
            {include: '#expression'}
          ]
        }
      ]
    },
    functionDeclaration: {
      patterns: [
        {
          begin:
            '(?x)(?:[^\\S\\n\\r])*(function)(?:[^\\S\\n\\r])*([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)(?:[^\\S\\n\\r])*',
          beginCaptures: {
            1: {name: 'storage.type.ink'},
            2: {name: 'entity.name.function.ink'}
          },
          end: '(?<=\\))|(?=$)|(?=\\=)',
          patterns: [
            {include: '#comment'},
            {include: '#functionDeclarationParameters'}
          ]
        }
      ]
    },
    functionDeclarationParameters: {
      patterns: [
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'punctuation.section.parens.begin.ink'}},
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.parens.end.ink'}},
          patterns: [
            {include: '#comment'},
            {match: 'ref', name: 'storage.modifier.ref.ink'},
            {match: '[a-zA-Z0-9_]+', name: 'variable.parameter.function.ink'},
            {match: ',', name: 'punctuation.separator.ink'},
            {include: '#divert'}
          ]
        }
      ]
    },
    gather: {
      patterns: [
        {
          begin: '(?<=^)(?:[^\\S\\n\\r])*((?:(?:[^\\S\\n\\r])*\\-(?!>))+)',
          beginCaptures: {1: {name: 'keyword.gather.ink'}},
          end: '(?=$)',
          patterns: [
            {include: '#comment'},
            {include: '#choice'},
            {include: '#label'},
            {include: '#divert'},
            {include: '#todo'},
            {include: '#glue'},
            {include: '#logic'},
            {include: '#tag'},
            {include: '#interpolevaluablock'}
          ]
        }
      ]
    },
    glue: {
      patterns: [{match: '<>', name: 'keyword.glue.ink keyword.other.ink'}]
    },
    import: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.import.ink'},
            2: {name: 'string.quoted.other.ink'}
          },
          match: '(?:^)(?:[^\\S\\n\\r])*(INCLUDE)(?:(?:[^\\S\\n\\r])*)(.*)$'
        }
      ]
    },
    inlineCondition: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.ink'}},
          match: '([^\\{\\}]*)',
          name: 'keyword.control.ink'
        }
      ]
    },
    inlineConditionalSubstitution: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\{)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?<!\\\\)(\\})',
          endCaptures: {1: {name: 'keyword.control.ink'}},
          patterns: [
            {include: '#conditionalSubstitution'},
            {include: '#substitution'},
            {include: '#firstAlternativeItem'},
            {include: '#alternativeItem'},
            {include: '#interpolevaluablock'},
            {include: '#inlineCondition'}
          ]
        }
      ]
    },
    inlineElseClause: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\|)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=\\})',
          patterns: [
            {include: '#comment'},
            {include: '#divert'},
            {include: '#interpolevaluablock'}
          ]
        }
      ]
    },
    interpolatedIdentifier: {
      patterns: [
        {
          match:
            '(?<=\\{)(?<!^)(?:[^\\S\\n\\r])*[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*(\\.[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)?(?:[^\\S\\n\\r])*(?!$)(?=\\})',
          name: 'entity.name.variable.other.ink'
        }
      ]
    },
    interpolevaluablock: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\{)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?<!\\\\)(\\})',
          endCaptures: {1: {name: 'keyword.control.ink'}},
          patterns: [
            {include: '#multilineAlternative'},
            {include: '#multilineBlock'},
            {include: '#conditionalSubstitution'},
            {include: '#divert'},
            {include: '#substitution'},
            {include: '#firstAlternativeItem'},
            {include: '#alternativeItem'},
            {include: '#interpolevaluablock'}
          ]
        }
      ]
    },
    knot: {
      patterns: [
        {
          begin: '^(?:[^\\S\\n\\r])*(={2,})',
          beginCaptures: {1: {name: 'storage.knot.ink storage.type.ink'}},
          end: '(={2,})|(?=$)',
          endCaptures: {1: {name: 'storage.knot.ink storage.type.ink'}},
          patterns: [
            {include: '#comment'},
            {include: '#functionDeclaration'},
            {include: '#knotStitchDeclaration'}
          ]
        }
      ]
    },
    knotStitchDeclaration: {
      patterns: [
        {
          begin:
            '(?:[^\\S\\n\\r])*([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'entity.name.function.ink'}},
          end: '(?<=\\))|(?=$|\\=|\\/\\/)',
          patterns: [
            {include: '#comment'},
            {include: '#functionDeclarationParameters'}
          ]
        }
      ]
    },
    label: {
      patterns: [
        {
          captures: {
            1: {
              name: 'punctuation.definition.string.label.begin.ink punctuation.definition.string.begin.ink'
            },
            2: {
              name: 'punctuation.definition.string.label.begin.ink punctuation.definition.string.begin.ink'
            }
          },
          match:
            '(\\()(?:[^\\S\\n\\r])*[a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*(?:[^\\S\\n\\r])*(\\))',
          name: 'string.label.ink entity.name.label.ink string.quoted.other.ink'
        }
      ]
    },
    languageLiteral: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.language.boolean.ink constant.language.ink'}
          },
          match: '(?:[^\\S\\n\\r])*(false|true)(?:[^\\S\\n\\r])*'
        }
      ]
    },
    logic: {
      patterns: [
        {
          begin: '(?:(?<=^)|(?<=\\-)|(?<=\\:))(?:[^\\S\\n\\r])*(~)',
          beginCaptures: {1: {name: 'keyword.logic.ink'}},
          end: '(?=$)',
          patterns: [
            {include: '#returnStatement'},
            {include: '#tempDeclaration'},
            {include: '#expression'}
          ]
        }
      ]
    },
    multilineAlternative: {
      patterns: [
        {
          begin: '(?<=\\{)(?:[^\\S\\n\\r])*$',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=\\})',
          patterns: [
            {include: '#comment'},
            {include: '#caseClause'},
            {include: '#alternativeClause'},
            {include: '#divert'},
            {include: '#logic'},
            {include: '#choice'},
            {include: '#glue'},
            {include: '#todo'},
            {include: '#interpolevaluablock'},
            {include: '#comment'}
          ]
        }
      ]
    },
    multilineBlock: {
      patterns: [
        {
          begin:
            '([^\\{\\}]+(?:[^\\S\\n\\r])*\\:)(?:[^\\S\\n\\r])*(?=$|\\/\\/)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=\\})',
          patterns: [
            {include: '#comment'},
            {include: '#caseClause'},
            {include: '#alternativeClause'},
            {include: '#divert'},
            {include: '#logic'},
            {include: '#choice'},
            {include: '#glue'},
            {include: '#todo'},
            {include: '#interpolevaluablock'},
            {include: '#comment'}
          ]
        }
      ]
    },
    numberLiteral: {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.ink'}},
          match: '(?:[^\\S\\n\\r])*([0-9]+(\\.[0-9]+)?)(?:[^\\S\\n\\r])*'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match: '(?x)\n  \\~     |\n  !(?!=) |\n  &&     |\n  \\|\\|',
          name: 'keyword.operator.logical.ink'
        },
        {match: '(?x)\n  =(?!=)', name: 'keyword.operator.assignment.ink'},
        {
          match: '(?x)\n  %=  |\n  &=  |\n  \\*= |\n  \\+= |\n  \\-= |\n  /=',
          name: 'keyword.operator.assignment.augmented.ink'
        },
        {
          match: '(?x)\n  <=   |\n  >=   |\n  <    |\n  >',
          name: 'keyword.operator.relational.ink'
        },
        {
          match: '(?x)\n  ==   |\n  !=',
          name: 'keyword.operator.comparison.ink'
        },
        {
          match:
            '(?x)\n  \\-\\- |\n  \\+\\+ |\n  /    |\n  %    |\n  \\*   |\n  \\+   |\n  (?<!$)(?:[^\\S\\n\\r])*-(?:[^\\S\\n\\r])*(?!=)',
          name: 'keyword.operator.arithmetic.ink'
        },
        {
          match: '(?x)\n  \\?  |\n  !\\? |\n  \\^',
          name: 'keyword.operator.membership.ink'
        },
        {
          match:
            '(?x)\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])not   (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])   |\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])and   (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])   |\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])or    (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])   |\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])has   (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])   |\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])hasnt (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])   |\n  (?<=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])mod   (?=[^a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}])',
          name: 'keyword.operator.word.ink'
        }
      ]
    },
    parentheses: {
      patterns: [
        {match: '\\(', name: 'punctuation.section.parens.begin.ink'},
        {match: '\\)', name: 'punctuation.section.parens.end.ink'}
      ]
    },
    returnStatement: {
      patterns: [
        {
          begin: '(?:[^\\S\\n\\r])*(return)(?=\\s)',
          beginCaptures: {1: {name: 'keyword.control.ink'}},
          end: '(?=$)',
          patterns: [
            {include: '#function'},
            {include: '#divert'},
            {include: '#languageLiteral'},
            {include: '#stringLiteral'},
            {include: '#expressionIdentifier'},
            {include: '#expression'},
            {include: '#numberLiteral'}
          ]
        }
      ]
    },
    stitch: {
      patterns: [
        {
          begin: '^(?:[^\\S\\n\\r])*(=)',
          beginCaptures: {1: {name: 'storage.knot.ink storage.type.ink'}},
          end: '(?=^)',
          patterns: [{include: '#comment'}, {include: '#knotStitchDeclaration'}]
        }
      ]
    },
    stringLiteral: {
      patterns: [
        {
          begin: '(?:[^\\S\\n\\r]*)(\\")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.ink'}},
          end: '(\\")(?:[^\\S\\n\\r]*)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.ink'}},
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.ink'},
            {match: '[^\\n\\r\\"]+', name: 'string.quoted.double.ink'}
          ]
        }
      ]
    },
    substitution: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.ink'}},
          match: '(?<=\\{)([^\\{\\}\\:\\|]+)(?=\\})'
        }
      ]
    },
    tag: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\#)',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.comment.ink comment.line.ink entity.tag.begin.ink'
            }
          },
          end: '(?=$|\\#)',
          name: 'string.quoted.other.ink entity.tag.ink',
          patterns: [{include: '#comment'}, {include: '#tag'}]
        }
      ]
    },
    tempDeclaration: {
      patterns: [
        {
          begin:
            '(?x)\n (?:(?<=^)|(?<=\\~))\n (?:[^\\S\\n\\r])*\n (temp)\n (?:[^\\S\\n\\r])*\n ([a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*[a-zA-Z_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}][a-zA-Z0-9_\\x{0100}-\\x{017F}\\x{0180}-\\x{024F}\\x{0600}-\\x{06FF}\\x{0530}-\\x{058F}\\x{0400}-\\x{04FF}\\x{0370}-\\x{03FF}\\x{0590}-\\x{05FF}]*)\n (?:[^\\S\\n\\r])*\n (=)',
          beginCaptures: {
            1: {name: 'storage.modifier.ink'},
            2: {name: 'entity.name.variable.other.ink'},
            3: {name: 'keyword.assignment.ink'}
          },
          end: '(?=$)',
          patterns: [
            {include: '#comment'},
            {include: '#function'},
            {include: '#divert'},
            {include: '#languageLiteral'},
            {include: '#stringLiteral'},
            {include: '#expressionIdentifier'},
            {include: '#expression'},
            {include: '#numberLiteral'}
          ]
        }
      ]
    },
    textSuppression: {
      patterns: [
        {
          begin: '(?<!\\\\)(\\[)',
          beginCaptures: {
            1: {name: 'keyword.choice.suppression.ink keyword.control.ink'}
          },
          end: '(?<!\\\\)(\\])',
          endCaptures: {
            1: {name: 'keyword.choice.suppression.ink keyword.control.ink'}
          },
          patterns: [{include: '#interpolevaluablock'}]
        }
      ]
    },
    todo: {
      patterns: [
        {
          begin: '(?<=^|\\-)(?:[^\\S\\n\\r])*(TODO)',
          beginCaptures: {1: {name: 'constant.other entity.todo.begin.ink'}},
          end: '(?=$)',
          name: 'comment.line.ink entity.todo.ink',
          patterns: [{include: '#comment'}]
        }
      ]
    },
    tunnel: {
      patterns: [
        {
          begin: '(?:[^\\S\\n\\r])*(->(?:->)?|<-)(?:[^\\S\\n\\r])*',
          beginCaptures: {1: {name: 'keyword.divert.ink keyword.other.ink'}},
          end: '(?=($|\\}|\\)|\\|))',
          patterns: [
            {include: '#comment'},
            {include: '#function'},
            {include: '#divertIdentifier'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.ink'
}

export default grammar
