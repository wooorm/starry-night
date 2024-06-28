// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tikkanz/JSyntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ijs'],
  names: ['j'],
  patterns: [
    {include: '#direct_noun_defn'},
    {include: '#direct_defn'},
    {include: '#explicit_defn'},
    {include: '#modifier_explicit_defn'},
    {include: '#explicit_string_defn'},
    {include: '#noun_defn'},
    {include: '#bracket'},
    {include: '#number'},
    {include: '#operator'},
    {include: '#copula'},
    {include: '#string'},
    {include: '#note'},
    {include: '#comment'}
  ],
  repository: {
    bracket: {patterns: [{match: '(\\(|\\))', name: 'meta.bracket.j'}]},
    comment: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.begin.j'}},
          match: '\\b(NB\\.).*$',
          name: 'comment.line.j'
        }
      ]
    },
    copula: {
      patterns: [
        {match: '=:', name: 'copula.global.j'},
        {match: '=\\.', name: 'copula.local.j'}
      ]
    },
    direct_defn: {
      patterns: [
        {
          begin: '((\\{\\{)(\\)[mdvac])(.*$)|(\\{\\{)(?![.:\\)]))',
          beginCaptures: {0: {name: 'punctuation.definition.explicit.begin.j'}},
          end: '(\\}\\})(?![.:])',
          endCaptures: {0: {name: 'punctuation.definition.explicit.end.j'}},
          name: 'definition.explicit.block.j',
          patterns: [
            {include: '#direct_noun_defn'},
            {include: '#direct_defn'},
            {include: '#explicit_arg'},
            {include: '#explicit_operand'},
            {include: '#bracket'},
            {include: '#number'},
            {include: '#operator'},
            {include: '#copula'},
            {include: '#string'},
            {include: '#keyword'},
            {include: '#comment'}
          ]
        }
      ]
    },
    direct_noun_defn: {
      patterns: [
        {
          begin: '(\\{\\{)(\\)n)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.block.begin.j'}
          },
          end: '(^\\}\\})(?![.:])',
          endCaptures: {0: {name: 'punctuation.definition.explicit.end.j'}},
          name: 'string.noun.j'
        }
      ]
    },
    explicit_arg: {
      patterns: [{match: '\\b[xy](?![\\w.:])', name: 'variable.parameter.j'}]
    },
    explicit_defn: {
      patterns: [
        {
          begin: '\\b([34]|13|verb|monad|dyad)\\s+(:\\s*0|define)\\b',
          beginCaptures: {0: {name: 'punctuation.definition.explicit.begin.j'}},
          end: '^\\s*\\)\\s*\\n',
          endCaptures: {0: {name: 'punctuation.definition.explicit.end.j'}},
          name: 'definition.explicit.block.j',
          patterns: [
            {include: '#direct_noun_defn'},
            {include: '#direct_defn'},
            {include: '#explicit_arg'},
            {include: '#bracket'},
            {include: '#number'},
            {include: '#operator'},
            {include: '#copula'},
            {include: '#string'},
            {include: '#keyword'},
            {include: '#comment'}
          ]
        }
      ]
    },
    explicit_operand: {
      patterns: [{match: '\\b[nmuv](?![\\w.:])', name: 'variable.parameter.j'}]
    },
    explicit_string_defn: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.explicit.begin.j'},
            4: {name: 'string.quoted.single.j'}
          },
          match:
            "\\b(([1-4]|adverb|conjunction|verb|monad|dyad)\\s+(:|def))\\s*((')[^']*(?:''[^']*)*('))",
          name: 'definition.explicit.string.j'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match: '\\b(if|do|else|elseif|for|select|case|fcase)\\.(?![.:])',
          name: 'keyword.control.j'
        },
        {
          match: '\\b(assert|break|continue|return|while|whilst)\\.(?![.:])',
          name: 'keyword.control.j'
        },
        {
          match: '\\b(throw|try|catch|catchd|catcht)\\.(?![.:])',
          name: 'keyword.control.j'
        },
        {
          match:
            '\\b(for_[A-Za-z][A-Za-z_0-9]*|goto_[A-Za-z][A-Za-z_0-9]*|label_[A-Za-z][A-Za-z_0-9]*)\\.(?![.:])',
          name: 'keyword.control.j'
        },
        {match: '\\bend\\.(?![.:])', name: 'keyword.control.end.j'}
      ]
    },
    modifier_explicit_defn: {
      patterns: [
        {
          begin: '\\b([12]|adverb|conjunction)\\s+(:\\s*0|define)\\b',
          beginCaptures: {0: {name: 'punctuation.definition.explicit.begin.j'}},
          end: '^\\s*\\)\\s*\\n',
          endCaptures: {0: {name: 'punctuation.definition.explicit.end.j'}},
          name: 'definition.explicit.block.j',
          patterns: [
            {include: '#direct_noun_defn'},
            {include: '#direct_defn'},
            {include: '#explicit_arg'},
            {include: '#explicit_operand'},
            {include: '#bracket'},
            {include: '#number'},
            {include: '#operator'},
            {include: '#copula'},
            {include: '#string'},
            {include: '#keyword'},
            {include: '#comment'}
          ]
        }
      ]
    },
    note: {
      patterns: [
        {
          begin: '^\\s*\\bNote\\b',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.j'}},
          end: '^\\s*\\)\\s*\\n',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.j'}},
          name: 'comment.block.note.j'
        },
        {
          match: "\\bNote\\b(?!\\s*\\=[:.])\\s*[\\'\\d].*$",
          name: 'comment.line.note.j'
        }
      ]
    },
    noun_defn: {
      patterns: [
        {
          begin: '\\b(0|noun)\\s+(:\\s*0|define)\\b',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.block.begin.j'}
          },
          end: '^\\s*\\)\\s*\\n',
          endCaptures: {0: {name: 'punctuation.definition.explicit.end.j'}},
          name: 'string.noun.j'
        }
      ]
    },
    number: {
      patterns: [
        {
          match: '\\b(?<! \\.)(_\\.\\d+|_?\\d+\\.?\\d*)(?![.:\\w])',
          name: 'constant.numeric.j'
        },
        {
          match:
            '\\b(_?\\d+\\.?\\d*)(ar|ad|[ejprx])(_?\\d*\\.?\\w*)(?![.:\\w])',
          name: 'constant.numeric.j'
        },
        {
          match: '\\b(_?\\d+\\.?\\d*)(b)(_?\\w*\\.?\\w*)(?![.:\\w])',
          name: 'constant.numeric.j'
        }
      ]
    },
    operator: {
      patterns: [
        {match: '\\b(_\\.|a\\.|a:)(?![.:])', name: 'keyword.other.noun.j'},
        {
          match: '((\\b_?[1-9]:)|(\\b0:)|({::))(?![.:])',
          name: 'keyword.operator.verb.j'
        },
        {
          match: '\\b((p\\.\\.)|([AcCeEiIjLoprTuv]\\.)|([ipqsux]:))(?![.:])',
          name: 'keyword.operator.verb.j'
        },
        {
          match: '([<>\\+\\*\\-%$|,#{}^~"?]\\.)(?![.:])',
          name: 'keyword.operator.verb.j'
        },
        {
          match: '([<>\\+\\*\\-%$|,#{};~"_\\/\\\\\\[]:)(?![.:])',
          name: 'keyword.operator.verb.j'
        },
        {
          match: '([<>\\+\\*\\-%$|,#{!;^=?\\[\\]])(?![.:])',
          name: 'keyword.operator.verb.j'
        },
        {match: '\\b(([bfM]\\.))(?![.:])', name: 'keyword.operator.adverb.j'},
        {
          match: '(([\\/\\\\]\\.)|(\\/\\.\\.)|([~\\/\\\\}]))(?![.:])',
          name: 'keyword.operator.adverb.j'
        },
        {
          match: '\\b(([Ht]\\.)|([LS]:))(?![.:])',
          name: 'keyword.operator.conjunction.j'
        },
        {
          match: '((&\\.:)|([&@!;]\\.)|([&@!`^]:)|([&@`"]))(?![.:])',
          name: 'keyword.operator.conjunction.j'
        },
        {
          match: '(?<=\\s)([:][.:]|[.:])(?![.:])',
          name: 'keyword.operator.conjunction.j'
        }
      ]
    },
    string: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.j'},
            2: {name: 'punctuation.definition.string.end.j'}
          },
          match: "(')[^']*(?:''[^']*)*(')",
          name: 'string.quoted.single.j'
        }
      ]
    }
  },
  scopeName: 'source.j'
}

export default grammar
