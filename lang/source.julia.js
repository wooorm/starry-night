// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/JuliaEditorSupport/atom-language-julia>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.jl'],
  names: ['julia'],
  patterns: [
    {include: '#operator'},
    {include: '#array'},
    {include: '#string'},
    {include: '#parentheses'},
    {include: '#bracket'},
    {include: '#function_decl'},
    {include: '#function_call'},
    {include: '#for_block'},
    {include: '#keyword'},
    {include: '#number'},
    {include: '#comment'},
    {include: '#type_decl'},
    {include: '#symbol'},
    {include: '#punctuation'}
  ],
  repository: {
    array: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'meta.bracket.julia'}},
          end: "(\\])((?:\\.)?'*)",
          endCaptures: {
            1: {name: 'meta.bracket.julia'},
            2: {name: 'keyword.operator.transpose.julia'}
          },
          name: 'meta.array.julia',
          patterns: [
            {match: '\\bbegin\\b', name: 'constant.numeric.julia'},
            {match: '\\bend\\b', name: 'constant.numeric.julia'},
            {include: '#self_no_for_block'}
          ]
        }
      ]
    },
    bracket: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'meta.bracket.julia'}},
          end: "(\\})((?:\\.)?'*)",
          endCaptures: {
            1: {name: 'meta.bracket.julia'},
            2: {name: 'keyword.operator.transpose.julia'}
          },
          patterns: [{include: '#self_no_for_block'}]
        }
      ]
    },
    comment: {
      patterns: [
        {include: '#comment_block'},
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.julia'}},
          end: '\\n',
          name: 'comment.line.number-sign.julia',
          patterns: [{include: '#comment_tags'}]
        }
      ]
    },
    comment_block: {
      patterns: [
        {
          begin: '#=',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.julia'}
          },
          end: '=#',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.julia'}},
          name: 'comment.block.number-sign-equals.julia',
          patterns: [{include: '#comment_tags'}, {include: '#comment_block'}]
        }
      ]
    },
    comment_tags: {
      patterns: [
        {match: '\\bTODO\\b', name: 'keyword.other.comment-annotation.julia'},
        {match: '\\bFIXME\\b', name: 'keyword.other.comment-annotation.julia'},
        {
          match: '\\bCHANGED\\b',
          name: 'keyword.other.comment-annotation.julia'
        },
        {match: '\\bXXX\\b', name: 'keyword.other.comment-annotation.julia'}
      ]
    },
    for_block: {
      patterns: [
        {
          begin: '\\b(for)\\b',
          beginCaptures: {0: {name: 'keyword.control.julia'}},
          end: '(?<!,|\\s)(\\s*\\n)',
          patterns: [
            {match: '\\bouter\\b', name: 'keyword.other.julia'},
            {include: '$self'}
          ]
        }
      ]
    },
    function_call: {
      patterns: [
        {
          begin: '({{id}})({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
          beginCaptures: {
            1: {name: 'support.function.julia'},
            2: {name: 'support.type.julia'},
            3: {name: 'meta.bracket.julia'}
          },
          end: "\\)(('|(\\.'))*\\.?')?",
          endCaptures: {
            0: {name: 'meta.bracket.julia'},
            1: {name: 'keyword.operator.transposed-func.julia'}
          },
          patterns: [{include: '#self_no_for_block'}]
        }
      ]
    },
    function_decl: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.julia'},
            2: {name: 'support.type.julia'}
          },
          match:
            '({{id}})({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?(?=\\([^#]*\\)(::[^\\s]+)?(\\s*\\bwhere\\b\\s+.+?)?\\s*?=(?![=>]))'
        },
        {
          captures: {
            1: {name: 'keyword.other.julia'},
            2: {name: 'keyword.operator.dots.julia'},
            3: {name: 'entity.name.function.julia'},
            4: {name: 'support.type.julia'}
          },
          match:
            '\\b(function|macro)(?:\\s+(?:{{id}}(\\.))?({{id}})({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '\\b(?<![:_\\.])(?:function|mutable\\s+struct|struct|macro|quote|abstract\\s+type|primitive\\s+type|module|baremodule|where)\\b',
          name: 'keyword.other.julia'
        },
        {
          match:
            '\\b(?<![:_])(?:if|else|elseif|for|while|begin|let|do|try|catch|finally|return|break|continue)\\b',
          name: 'keyword.control.julia'
        },
        {match: '\\b(?<![:_])end\\b', name: 'keyword.control.end.julia'},
        {
          match: '\\b(?<![:_])(?:global|local|const)\\b',
          name: 'keyword.storage.modifier.julia'
        },
        {
          match: '\\b(?<![:_])(?:export)\\b',
          name: 'keyword.control.export.julia'
        },
        {match: '^(?:public)\\b', name: 'keyword.control.public.julia'},
        {
          match: '\\b(?<![:_])(?:import)\\b',
          name: 'keyword.control.import.julia'
        },
        {
          match: '\\b(?<![:_])(?:using)\\b',
          name: 'keyword.control.using.julia'
        },
        {
          match: '(?<=\\w\\s)\\b(as)\\b(?=\\s\\w)',
          name: 'keyword.control.as.julia'
        },
        {match: '(@(\\.|{{id}}))', name: 'support.function.macro.julia'}
      ]
    },
    number: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.julia'},
            2: {name: 'keyword.operator.conjugate-number.julia'}
          },
          match:
            "((?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))(?:(?:\\b0(?:x|X)[0-9a-fA-F](?:_?[0-9a-fA-F])*)|(?:\\b0o[0-7](?:_?[0-7])*)|(?:\\b0b[0-1](?:_?[0-1])*)|(?:(?:\\b[0-9](?:_?[0-9])*\\.?(?!\\.)(?:[_0-9]*))|(?:\\b\\.[0-9](?:_?[0-9])*))(?:[efE][+-]?[0-9](?:_?[0-9])*)?(?:im\\b|Inf(?:16|32|64)?\\b|NaN(?:16|32|64)?\\b|π\\b|pi\\b|ℯ\\b)?|\\b[0-9]+|\\bInf(?:16|32|64)?\\b|\\bNaN(?:16|32|64)?\\b|\\bπ\\b|\\bpi\\b|\\bℯ\\b))('*)"
        },
        {
          match:
            '\\bARGS\\b|\\bC_NULL\\b|\\bDEPOT_PATH\\b|\\bENDIAN_BOM\\b|\\bENV\\b|\\bLOAD_PATH\\b|\\bPROGRAM_FILE\\b|\\bstdin\\b|\\bstdout\\b|\\bstderr\\b|\\bVERSION\\b|\\bdevnull\\b',
          name: 'constant.global.julia'
        },
        {
          match: '\\btrue\\b|\\bfalse\\b|\\bnothing\\b|\\bmissing\\b',
          name: 'constant.language.julia'
        }
      ]
    },
    operator: {
      patterns: [
        {
          match:
            '\\.?(?:<-->|->|-->|<--|←|→|↔|↚|↛|↞|↠|↢|↣|↦|↤|↮|⇎|⇍|⇏|⇐|⇒|⇔|⇴|⇶|⇷|⇸|⇹|⇺|⇻|⇼|⇽|⇾|⇿|⟵|⟶|⟷|⟹|⟺|⟻|⟼|⟽|⟾|⟿|⤀|⤁|⤂|⤃|⤄|⤅|⤆|⤇|⤌|⤍|⤎|⤏|⤐|⤑|⤔|⤕|⤖|⤗|⤘|⤝|⤞|⤟|⤠|⥄|⥅|⥆|⥇|⥈|⥊|⥋|⥎|⥐|⥒|⥓|⥖|⥗|⥚|⥛|⥞|⥟|⥢|⥤|⥦|⥧|⥨|⥩|⥪|⥫|⥬|⥭|⥰|⧴|⬱|⬰|⬲|⬳|⬴|⬵|⬶|⬷|⬸|⬹|⬺|⬻|⬼|⬽|⬾|⬿|⭀|⭁|⭂|⭃|⥷|⭄|⥺|⭇|⭈|⭉|⭊|⭋|⭌|￩|￫|⇜|⇝|↜|↝|↩|↪|↫|↬|↼|↽|⇀|⇁|⇄|⇆|⇇|⇉|⇋|⇌|⇚|⇛|⇠|⇢|↷|↶|↺|↻|=>)',
          name: 'keyword.operator.arrow.julia'
        },
        {
          match:
            '(?::=|\\+=|-=|\\*=|//=|/=|\\.//=|\\./=|\\.\\*=|\\\\=|\\.\\\\=|\\^=|\\.\\^=|%=|\\.%=|÷=|\\.÷=|\\|=|&=|\\.&=|⊻=|\\.⊻=|\\$=|<<=|>>=|>>>=|=(?!=))',
          name: 'keyword.operator.update.julia'
        },
        {
          match: '(?:<<|>>>|>>|\\.>>>|\\.>>|\\.<<)',
          name: 'keyword.operator.shift.julia'
        },
        {
          captures: {
            1: {name: 'keyword.operator.relation.types.julia'},
            2: {name: 'support.type.julia'},
            3: {name: 'keyword.operator.transpose.julia'}
          },
          match:
            '(?:\\s*(::|>:|<:)\\s*((?:(?:Union)?\\([^)]*\\)|[[:alpha:]_$∇][[:word:]⁺-ₜ!′\\.]*(?:(?:{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})|(?:".+?(?<!\\\\)"))?)))(?:\\.\\.\\.)?((?:\\.)?\'*)'
        },
        {
          match:
            '(\\.?((?<!<)<=|(?<!>)>=|>|<|≥|≤|===|==|≡|!=|≠|!==|≢|∈|∉|∋|∌|⊆|⊈|⊂|⊄|⊊|∝|∊|∍|∥|∦|∷|∺|∻|∽|∾|≁|≃|≂|≄|≅|≆|≇|≈|≉|≊|≋|≌|≍|≎|≐|≑|≒|≓|≖|≗|≘|≙|≚|≛|≜|≝|≞|≟|≣|≦|≧|≨|≩|≪|≫|≬|≭|≮|≯|≰|≱|≲|≳|≴|≵|≶|≷|≸|≹|≺|≻|≼|≽|≾|≿|⊀|⊁|⊃|⊅|⊇|⊉|⊋|⊏|⊐|⊑|⊒|⊜|⊩|⊬|⊮|⊰|⊱|⊲|⊳|⊴|⊵|⊶|⊷|⋍|⋐|⋑|⋕|⋖|⋗|⋘|⋙|⋚|⋛|⋜|⋝|⋞|⋟|⋠|⋡|⋢|⋣|⋤|⋥|⋦|⋧|⋨|⋩|⋪|⋫|⋬|⋭|⋲|⋳|⋴|⋵|⋶|⋷|⋸|⋹|⋺|⋻|⋼|⋽|⋾|⋿|⟈|⟉|⟒|⦷|⧀|⧁|⧡|⧣|⧤|⧥|⩦|⩧|⩪|⩫|⩬|⩭|⩮|⩯|⩰|⩱|⩲|⩳|⩵|⩶|⩷|⩸|⩹|⩺|⩻|⩼|⩽|⩾|⩿|⪀|⪁|⪂|⪃|⪄|⪅|⪆|⪇|⪈|⪉|⪊|⪋|⪌|⪍|⪎|⪏|⪐|⪑|⪒|⪓|⪔|⪕|⪖|⪗|⪘|⪙|⪚|⪛|⪜|⪝|⪞|⪟|⪠|⪡|⪢|⪣|⪤|⪥|⪦|⪧|⪨|⪩|⪪|⪫|⪬|⪭|⪮|⪯|⪰|⪱|⪲|⪳|⪴|⪵|⪶|⪷|⪸|⪹|⪺|⪻|⪼|⪽|⪾|⪿|⫀|⫁|⫂|⫃|⫄|⫅|⫆|⫇|⫈|⫉|⫊|⫋|⫌|⫍|⫎|⫏|⫐|⫑|⫒|⫓|⫔|⫕|⫖|⫗|⫘|⫙|⫷|⫸|⫹|⫺|⊢|⊣|⟂|⫪|⫫|<:|>:))',
          name: 'keyword.operator.relation.julia'
        },
        {
          match: '(?<=\\s)(?:\\?)(?=\\s)',
          name: 'keyword.operator.ternary.julia'
        },
        {
          match: '(?<=\\s)(?:\\:)(?=\\s)',
          name: 'keyword.operator.ternary.julia'
        },
        {
          match:
            '(?:\\|\\||&&|(?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))!)',
          name: 'keyword.operator.boolean.julia'
        },
        {
          match: '(?<=[[:word:]⁺-ₜ!′∇\\)\\]\\}])(?::)',
          name: 'keyword.operator.range.julia'
        },
        {match: '(?:\\|>)', name: 'keyword.operator.applies.julia'},
        {
          match: '(?:\\||\\.\\||\\&|\\.\\&|~|¬|\\.~|⊻|\\.⊻)',
          name: 'keyword.operator.bitwise.julia'
        },
        {
          match:
            '\\.?(?:\\+\\+|\\-\\-|\\+|\\-|−|¦|\\||⊕|⊖|⊞|⊟|∪|∨|⊔|±|∓|∔|∸|≏|⊎|⊻|⊽|⋎|⋓|⟇|⧺|⧻|⨈|⨢|⨣|⨤|⨥|⨦|⨧|⨨|⨩|⨪|⨫|⨬|⨭|⨮|⨹|⨺|⩁|⩂|⩅|⩊|⩌|⩏|⩐|⩒|⩔|⩖|⩗|⩛|⩝|⩡|⩢|⩣|\\*|//?|⌿|÷|%|&|·|·|⋅|∘|×|\\\\|∩|∧|⊗|⊘|⊙|⊚|⊛|⊠|⊡|⊓|∗|∙|∤|⅋|≀|⊼|⋄|⋆|⋇|⋉|⋊|⋋|⋌|⋏|⋒|⟑|⦸|⦼|⦾|⦿|⧶|⧷|⨇|⨰|⨱|⨲|⨳|⨴|⨵|⨶|⨷|⨸|⨻|⨼|⨽|⩀|⩃|⩄|⩋|⩍|⩎|⩑|⩓|⩕|⩘|⩚|⩜|⩞|⩟|⩠|⫛|⊍|▷|⨝|⟕|⟖|⟗|⨟|\\^|↑|↓|⇵|⟰|⟱|⤈|⤉|⤊|⤋|⤒|⤓|⥉|⥌|⥍|⥏|⥑|⥔|⥕|⥘|⥙|⥜|⥝|⥠|⥡|⥣|⥥|⥮|⥯|￪|￬|√|∛|∜|⋆|±|∓)',
          name: 'keyword.operator.arithmetic.julia'
        },
        {match: '(?:∘)', name: 'keyword.operator.compose.julia'},
        {
          match: '(?:::|(?<=\\s)isa(?=\\s))',
          name: 'keyword.operator.isa.julia'
        },
        {
          match: '(?:(?<=\\s)in(?=\\s))',
          name: 'keyword.operator.relation.in.julia'
        },
        {
          match: '(?:\\.(?=(?:@|_|\\p{L}))|\\.\\.+|…|⁝|⋮|⋱|⋰|⋯)',
          name: 'keyword.operator.dots.julia'
        },
        {match: '(?:\\$)(?=.+)', name: 'keyword.operator.interpolation.julia'},
        {
          captures: {2: {name: 'keyword.operator.transposed-variable.julia'}},
          match: "({{id}})(('|(\\.'))*\\.?')"
        },
        {
          captures: {
            1: {name: 'bracket.end.julia'},
            2: {name: 'keyword.operator.transposed-matrix.julia'}
          },
          match: "(\\])((?:'|(?:\\.'))*\\.?')"
        },
        {
          captures: {
            1: {name: 'bracket.end.julia'},
            2: {name: 'keyword.operator.transposed-parens.julia'}
          },
          match: "(\\))((?:'|(?:\\.'))*\\.?')"
        }
      ]
    },
    parentheses: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'meta.bracket.julia'}},
          end: "(\\))((?:\\.)?'*)",
          endCaptures: {
            1: {name: 'meta.bracket.julia'},
            2: {name: 'keyword.operator.transpose.julia'}
          },
          patterns: [{include: '#self_no_for_block'}]
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.separator.comma.julia'},
        {match: ';', name: 'punctuation.separator.semicolon.julia'}
      ]
    },
    self_no_for_block: {
      patterns: [
        {include: '#operator'},
        {include: '#array'},
        {include: '#string'},
        {include: '#parentheses'},
        {include: '#bracket'},
        {include: '#function_decl'},
        {include: '#function_call'},
        {include: '#keyword'},
        {include: '#number'},
        {include: '#comment'},
        {include: '#type_decl'},
        {include: '#symbol'},
        {include: '#punctuation'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '(?:(@doc)\\s((?:doc)?""")|(doc"""))',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: '(""") ?(->)?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.julia'},
            2: {name: 'keyword.operator.arrow.julia'}
          },
          name: 'string.docstring.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(i?cxx)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          contentName: 'source.cpp',
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'embed.cxx.julia',
          patterns: [
            {include: 'source.c++'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(py)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          contentName: 'source.python',
          end: '([\\s\\w]*)(""")',
          endCaptures: {2: {name: 'punctuation.definition.string.end.julia'}},
          name: 'embed.python.julia',
          patterns: [
            {include: 'source.python'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(js)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          contentName: 'source.js',
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'embed.js.julia',
          patterns: [
            {include: 'source.js'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(R)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          contentName: 'source.r',
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'embed.R.julia',
          patterns: [
            {include: 'source.r'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(raw)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'string.quoted.other.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(raw)(")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'string.quoted.other.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(sql)(""")',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          contentName: 'meta.embedded.inline.sql',
          end: '"""',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'embed.sql.julia',
          patterns: [
            {include: 'source.sql'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: 'var"""',
          end: '"""',
          name: 'constant.other.symbol.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: 'var"',
          end: '"',
          name: 'constant.other.symbol.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '^\\s?(doc)?(""")\\s?$',
          beginCaptures: {
            1: {name: 'support.function.macro.julia'},
            2: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: '(""")',
          endCaptures: {1: {name: 'punctuation.definition.string.end.julia'}},
          name: 'string.docstring.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: "'(?!')",
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'string.quoted.single.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.multiline.begin.julia'}
          },
          end: '"""',
          endCaptures: {
            0: {name: 'punctuation.definition.string.multiline.end.julia'}
          },
          name: 'string.quoted.triple.double.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '"(?!"")',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.julia'}},
          name: 'string.quoted.double.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: 'r"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.regexp.begin.julia'}
          },
          end: '(""")([imsx]{0,4})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.regexp.end.julia'},
            2: {name: 'keyword.other.option-toggle.regexp.julia'}
          },
          name: 'string.regexp.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: 'r"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.regexp.begin.julia'}
          },
          end: '(")([imsx]{0,4})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.regexp.end.julia'},
            2: {name: 'keyword.other.option-toggle.regexp.julia'}
          },
          name: 'string.regexp.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(?<!")({{id}})"""',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'},
            1: {name: 'support.function.macro.julia'}
          },
          end: '(""")({{id}})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.julia'},
            2: {name: 'support.function.macro.julia'}
          },
          name: 'string.quoted.other.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(?<!")({{id}})"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'},
            1: {name: 'support.function.macro.julia'}
          },
          end: '(?<![^\\\\]\\\\)(")({{id}})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.julia'},
            2: {name: 'support.function.macro.julia'}
          },
          name: 'string.quoted.other.julia',
          patterns: [{include: '#string_escaped_char'}]
        },
        {
          begin: '(?<!`)({{id}})?```',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'},
            1: {name: 'support.function.macro.julia'}
          },
          end: '(```)({{id}})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.julia'},
            2: {name: 'support.function.macro.julia'}
          },
          name: 'string.interpolated.backtick.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        },
        {
          begin: '(?<!`)({{id}})?`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.julia'},
            1: {name: 'support.function.macro.julia'}
          },
          end: '(?<![^\\\\]\\\\)(`)({{id}})?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.julia'},
            2: {name: 'support.function.macro.julia'}
          },
          name: 'string.interpolated.backtick.julia',
          patterns: [
            {include: '#string_escaped_char'},
            {include: '#string_dollar_sign_interpolate'}
          ]
        }
      ]
    },
    string_dollar_sign_interpolate: {
      patterns: [
        {
          match:
            '\\$(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])*',
          name: 'variable.interpolation.julia'
        },
        {
          begin: '\\$(\\()',
          beginCaptures: {1: {name: 'meta.bracket.julia'}},
          end: '\\)',
          endCaptures: {0: {name: 'meta.bracket.julia'}},
          name: 'variable.interpolation.julia',
          patterns: [{include: '#self_no_for_block'}]
        }
      ]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)',
          name: 'constant.character.escape.julia'
        }
      ]
    },
    symbol: {
      patterns: [
        {
          match:
            '(?<![[:word:]⁺-ₜ!′∇\\)\\]\\}]):(?:{{id}})(?!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))(?!["`])',
          name: 'constant.other.symbol.julia'
        }
      ]
    },
    type_decl: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.julia'},
            2: {name: 'entity.other.inherited-class.julia'},
            3: {name: 'punctuation.separator.inheritance.julia'}
          },
          match:
            '(?>!:_)(?:struct|mutable\\s+struct|abstract\\s+type|primitive\\s+type)\\s+({{id}})(\\s*(<:)\\s*{{id}}(?:{.*})?)?',
          name: 'meta.type.julia'
        }
      ]
    }
  },
  scopeName: 'source.julia'
}

export default grammar
