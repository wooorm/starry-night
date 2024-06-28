// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.lex.regexp'],
  extensions: ['.ebnf'],
  names: ['ebnf'],
  patterns: [{include: '#main'}],
  repository: {
    brackets: {
      patterns: [
        {
          match: '\\[',
          name: 'punctuation.definition.square.bracket.begin.ebnf'
        },
        {match: '\\]', name: 'punctuation.definition.square.bracket.end.ebnf'},
        {match: '{', name: 'punctuation.definition.curly.bracket.begin.ebnf'},
        {match: '}', name: 'punctuation.definition.curly.bracket.end.ebnf'},
        {match: '\\(', name: 'punctuation.definition.round.bracket.begin.ebnf'},
        {match: '\\)', name: 'punctuation.definition.round.bracket.end.ebnf'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '\\(\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.ebnf'}
          },
          end: '\\*\\)',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.ebnf'}},
          name: 'comment.block.iso14977.ebnf'
        },
        {
          begin: '^[ \\t]*((/\\*))',
          beginCaptures: {
            1: {name: 'comment.block.w3c.ebnf'},
            2: {name: 'punctuation.definition.comment.begin.ebnf'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.ebnf'}},
          name: 'comment.block.w3c.ebnf'
        }
      ]
    },
    lhs: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.rule.identifier.ebnf'}},
          match:
            '(?x)\n(?:    \\s++\n|      ^|\\G\n| (?=  ^|\\G    )\n| (?<= ;|\\*\\) )\n)\n\n# Exclude leading whitespace\n\\s*\n\n([A-Za-z][A-Za-z0-9_-]*+)',
          name: 'meta.lhs.ebnf'
        },
        {
          begin:
            "(?x)\n(?:    \\s++\n|      ^|\\G\n| (?=  ^|\\G  )\n| (?<= \\*\\) )\n)\n\n# Exclude leading whitespace\n\\s*\n\n# Check for at least one “invalid” character\n(?=\n\t# Starts with a digit\n\t[0-9]\n\t|\n\t\n\t# Contains at least one non-“word” character\n\t[A-Za-z0-9_-]*  # Skip any legal characters\n\t(?: [^:;=()]    # Don't swallow symbols for comments, terminators, or assignments\n\t|   \\((?!\\*)  # Permit open brackets if they don't introduce a comment\n\t)\n)",
          contentName: 'entity.name.rule.identifier.non-standard.ebnf',
          end: '(?x)\n# Exclude trailing whitespace\n\\s*\n\n# Stop before an...\n(?= :*=      # Assignment operator separating `#lhs` from `#rhs`\n|   ;        # Unexpected terminator\n|   \\(\\*   # Embedded comment\n)',
          name: 'meta.lhs.non-standard.ebnf',
          patterns: [{include: '#comment'}]
        },
        {include: '#comment'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#semicolon'},
        {include: '#lhs'},
        {include: '#rhs'},
        {include: '#special'}
      ]
    },
    rhs: {
      begin: '(::=)|(:=)|(=)',
      beginCaptures: {
        1: {name: 'keyword.operator.assignment.non-standard.double-colon.ebnf'},
        2: {name: 'keyword.operator.assignment.non-standard.single-colon.ebnf'},
        3: {name: 'keyword.operator.assignment.ebnf'}
      },
      end: '(?=;|^\\s*(?:<?[A-Za-z][A-Za-z0-9_-]*>?\\s*)?:*=)',
      name: 'meta.rhs.ebnf',
      patterns: [{include: '#rhs-innards'}]
    },
    'rhs-innards': {
      patterns: [
        {match: ',', name: 'punctuation.delimiter.comma.ebnf'},
        {
          match: '\\|',
          name: 'keyword.operator.logical.or.alternation.pipe.ebnf'
        },
        {
          match: '-',
          name: 'keyword.operator.logical.minus.hyphen.exception.ebnf'
        },
        {
          match: '\\*',
          name: 'keyword.operator.logical.repetition.asterisk.star.ebnf'
        },
        {include: '#special'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ebnf'}
          },
          end: '"(?!")|(?=^\\s*+\\S+?\\s+::{0,2}=\\s|\\s+\\|)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ebnf'}},
          name: 'string.quoted.double.ebnf'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ebnf'}
          },
          end: "'(?!')|(?=^\\s*+\\S+?\\s+::{0,2}=\\s|\\s+\\|)",
          endCaptures: {0: {name: 'punctuation.definition.string.end.ebnf'}},
          name: 'string.quoted.single.ebnf'
        },
        {include: '#brackets'},
        {include: '#comment'},
        {
          match: '\\b(?<!-)[A-Za-z][A-Za-z0-9_-]*',
          name: 'variable.parameter.argument.identifier.reference.ebnf'
        },
        {
          match: '!',
          name: 'keyword.operator.logical.not.negation.non-standard.ebnf'
        },
        {include: 'source.lex.regexp#quantifier'}
      ]
    },
    semicolon: {match: ';', name: 'punctuation.terminator.statement.ebnf'},
    special: {
      captures: {
        1: {name: 'keyword.operator.pragma.begin.ebnf'},
        2: {name: 'support.constant.language.pragma.ebnf'},
        3: {name: 'keyword.operator.pragma.end.ebnf'}
      },
      match: '(?<=\\s|^)(\\?)(.+?)(?<=\\s)(\\?)(?=[,;]?(?:$|\\s))',
      name: 'meta.pragma.directive.special.iso14977.ebnf'
    }
  },
  scopeName: 'source.ebnf'
}

export default grammar
