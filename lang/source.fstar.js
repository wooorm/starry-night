// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/FStarLang/atom-fstar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fst', '.fsti'],
  names: ['f*', 'fstar'],
  patterns: [
    {include: '#comments'},
    {include: '#modules'},
    {include: '#options'},
    {include: '#expr'}
  ],
  repository: {
    commentblock: {
      patterns: [
        {
          begin: '\\(\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.fstar'}
          },
          end: '\\*\\)',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.fstar'}},
          name: 'comment.block.fstar',
          patterns: [{include: '#commentblock'}]
        }
      ]
    },
    comments: {
      patterns: [
        {match: '//.*', name: 'comment.line.fstar'},
        {include: '#commentblock'}
      ]
    },
    expr: {
      patterns: [
        {include: '#comments'},
        {match: "'[a-zA-Z0-9_]+\\b", name: 'variable.other.generic-type.fstar'},
        {include: '#strings'},
        {
          match: '\\b(int|nat|pos|bool|unit|string|Type|Type0|eqtype)\\b',
          name: 'support.class.base.fstar'
        },
        {
          match:
            '(/\\\\|\\\\/|<:|<@|[(][|]|[|][)]|u#|`|~>|->|<--|<-|<==>|==>|[?][.]|[.]\\[|[.]\\(|[{][:]pattern|::|:=|;;|[!][{]|\\[[|]|[|]>|[|]\\]|[~+^&?$|#,.:;=\\[\\](){}-])',
          name: 'support.class.base.fstar'
        },
        {
          match:
            '\\b(Pure|PURE|Tot|STATE|ST|St|Stack|StackInline|HST|ALL|All|EXN|Exn|Ex|DIV|Div|GHOST|Ghost|GTot|Lemma)\\b',
          name: 'constant.language.monad.fstar'
        },
        {
          match: '\\b(_|[(]\\s*[)]|\\[\\s*\\])\\b',
          name: 'constant.language.fstar'
        },
        {
          match:
            '\\b(let|in|type|kind|val|rec|and|if|then|else|assume|admit|assert|assert_norm|squash|failwith|SMTPat|SMTPatOr|hasEq|fun|function|forall|exists|exception|by|new_effect|reify|try|synth|with|when)\\b',
          name: 'keyword.other.fstar'
        },
        {
          match:
            '\\b(abstract|attributes|noeq|unopteq|inline|inline_for_extraction|irreducible|logic|mutable|new|noextract|private|reifiable|reflectable|total|unfold|unfoldable)\\b',
          name: 'storage.modifier.fstar'
        },
        {
          match: '\\b([tT]rue|[fF]alse)\\b',
          name: 'constant.language.boolean.fstar'
        },
        {
          match: '\\b0[xX][0-9a-fA-F]+[uU]?[zyslL]?\\b',
          name: 'constant.numeric.hex.js'
        },
        {
          match: '\\b[0-9]+[uU]?[zyslL]?\\b',
          name: 'constant.numeric.decimal.js'
        },
        {
          captures: {
            0: {name: 'constant.numeric.decimal.fstar'},
            1: {name: 'meta.delimiter.decimal.period.fstar'},
            2: {name: 'meta.delimiter.decimal.period.fstar'},
            3: {name: 'meta.delimiter.decimal.period.fstar'},
            4: {name: 'meta.delimiter.decimal.period.fstar'},
            5: {name: 'meta.delimiter.decimal.period.fstar'},
            6: {name: 'meta.delimiter.decimal.period.fstar'}
          },
          match:
            '(?x)\n(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)[L]?[fF]?'
        },
        {
          begin: '([(])\\s*(requires|ensures|decreases)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.scope.begin.bracket.round.fstar'},
            2: {name: 'keyword.other.fstar'}
          },
          end: '([)])',
          endCaptures: {
            1: {name: 'punctuation.definition.scope.end.bracket.round.fstar'}
          },
          patterns: [{include: '#expr'}]
        },
        {
          begin: '([(])',
          beginCaptures: {
            1: {name: 'punctuation.definition.clause.begin.bracket.round.fstar'}
          },
          end: '([)])',
          endCaptures: {
            1: {name: 'punctuation.definition.clause.end.bracket.round.fstar'}
          },
          patterns: [{include: '#expr'}]
        },
        {
          begin: '([%]\\[)',
          beginCaptures: {1: {name: 'constant.language.termorder.begin.fstar'}},
          end: '(\\])',
          endCaptures: {1: {name: 'constant.language.termorder.end.fstar'}},
          patterns: [{include: '#expr'}]
        },
        {
          begin: '(\\[[@])',
          beginCaptures: {1: {name: 'storage.modifier.attributes.begin.fstar'}},
          end: '(\\])',
          endCaptures: {1: {name: 'storage.modifier.attributes.end.fstar'}},
          patterns: [{include: '#expr'}]
        },
        {
          begin: '\\b(match)\\b',
          beginCaptures: {1: {name: 'keyword.control.match.fstar'}},
          end: '\\b(with)\\b',
          endCaptures: {1: {name: 'keyword.control.with.fstar'}},
          patterns: [{include: '#expr'}]
        },
        {
          begin: '\\b(begin)\\b',
          beginCaptures: {1: {name: 'keyword.control.begin.fstar'}},
          end: '\\b(end)\\b',
          endCaptures: {1: {name: 'keyword.control.end.fstar'}},
          patterns: [{include: '#expr'}]
        },
        {
          captures: {1: {name: 'support.function.constructor.fstar'}},
          match:
            "\\b([\\p{Lu}\\p{Lt}][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*)\\b(?!\\s*[.])"
        },
        {
          captures: {1: {name: 'variable.other.module.fstar'}},
          match:
            "\\b((?:[\\p{Lu}\\p{Lt}][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*[.])+)"
        },
        {
          captures: {1: {name: 'entity.name.function.fstar'}},
          match: "\\b([\\p{Ll}_][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*)"
        }
      ]
    },
    modules: {
      patterns: [
        {
          begin:
            "\\b(module)\\s+([\\p{Lu}\\p{Lt}][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*)\\s*(=)",
          beginCaptures: {
            1: {name: 'keyword.control.module.fstar'},
            2: {name: 'variable.other.module-alias.fstar'},
            3: {name: 'keyword.operator.assignment.fstar'}
          },
          end: "\\b((?<name>[\\p{Lu}\\p{Lt}][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*)(?:[.]\\g<name>)*)\\b",
          endCaptures: {1: {name: 'variable.other.module.fstar'}}
        },
        {
          begin: '\\b(module|open|include)\\b',
          beginCaptures: {1: {name: 'keyword.control.module.fstar'}},
          end: "\\b((?<name>[\\p{Lu}\\p{Lt}][\\p{Lu}\\p{Lt}\\p{Ll}\\p{Lo}\\p{Lm}\\d'_]*)(?:[.]\\g<name>)*)\\b",
          endCaptures: {1: {name: 'variable.other.module.fstar'}}
        }
      ]
    },
    op_names: {
      patterns: [
        {
          match:
            '\\bop(?:_(?:Multiply|Star|Slash|Percent|Plus|Substraction|Equals|Less|Greater|Bang|Dollar|Amp|Dot|Hat|Colon|Pipe|Question))+\\b',
          name: 'entity.name.tag.fstar'
        }
      ]
    },
    options: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.setoption.fstar'},
            2: {name: 'punctuation.definition.options.begin.fstar'},
            3: {name: 'string.quoted.double.fstar'},
            4: {name: 'punctuation.definition.options.end.fstar'}
          },
          match: '(#(?:re)?set-options)\\s*(["])((?:[^"]|\\\\")*)(["])'
        }
      ]
    },
    string_escapes: {
      patterns: [
        {
          match: '\\\\u(?![A-Fa-f0-9]{4}|{[A-Fa-f0-9]+})[^\'"]*',
          name: 'invalid.illegal.unicode-escape.fstar'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.unicode-escape.begin.bracket.curly.fstar'
            },
            2: {
              patterns: [
                {
                  match: '[A-Fa-f\\d]{7,}|(?!10)[A-Fa-f\\d]{6}',
                  name: 'invalid.illegal.unicode-escape.fstar'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.unicode-escape.end.bracket.curly.fstar'
            }
          },
          match: '\\\\u(?:[A-Fa-f0-9]{4}|({)([A-Fa-f0-9]+)(}))',
          name: 'constant.character.escape.js'
        },
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.fstar'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.fstar'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.fstar'}},
          name: 'string.quoted.double.fstar',
          patterns: [{include: '#string_escapes'}]
        },
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.char.begin.fstar'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.char.end.fstar'}},
          name: 'string.quoted.single.fstar',
          patterns: [
            {include: '#string_escapes'},
            {match: '.{2,}', name: 'invalid.illegal.string.js'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.fstar'
}

export default grammar
