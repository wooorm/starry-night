// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['cloud-firestore-security-rules'],
  patterns: [{include: '#main'}],
  repository: {
    accessControl: {
      match: '\\b(get|list|read|create|update|delete|write)\\b(?=[\\s,:;]|$)',
      name: 'storage.modifier.access-control.firestore'
    },
    arithmetic: {
      match: '[-+*/%]',
      name: 'keyword.operator.arithmetic.firestore'
    },
    basicTypes: {
      match: '\\b(request|math|user|duration|string|int|cloud)\\b',
      name: 'storage.type.$1.firestore'
    },
    booleans: {
      match: '\\b(true|false)\\b',
      name: 'constant.language.boolean.$1.firestore'
    },
    comment: {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.firestore'}},
      end: '$',
      name: 'comment.line.double-slash.firestore'
    },
    comparisons: {
      match: '!!|&&|\\|\\||[!=]==?|>=|<=|<<[<=]?|>>[>=]?|[=!><|&]',
      name: 'keyword.operator.comparison.firestore'
    },
    functionName: {
      captures: {0: {patterns: [{include: '#punctuation'}]}},
      match: '[.\\s\\(][a-zA-Z]+(?=\\()',
      name: 'entity.name.function.firestore'
    },
    functionParameter: {
      match: '\\b(?<![\'"])[a-zA-Z0-9_]+(?![\'"])\\b',
      name: 'variable.parameter.function.firestore'
    },
    functionParameterList: {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.parameters.begin.bracket.round.firestore'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.definition.parameters.end.bracket.round.firestore'
        }
      },
      name: 'meta.function.parameters.firestore',
      patterns: [{include: '#functionParameter'}, {include: '#main'}]
    },
    globalFunc: {
      match: '^\\s*(service|match|allow)(?=\\s)',
      name: 'support.function.global.$1.firestore'
    },
    keywords: {
      patterns: [
        {
          match: '\\b(if|in|return|is)\\b',
          name: 'keyword.control.$1.firestore'
        },
        {match: '\\b(null)\\b', name: 'constant.language.null.firestore'},
        {match: '\\b(function)\\b', name: 'storage.type.function.firestore'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#pathMatchLiteral'},
        {include: '#pathMatchVariable'},
        {include: '#basicTypes'},
        {include: '#number'},
        {include: '#strings'},
        {include: '#functionName'},
        {include: '#functionParameterList'},
        {include: '#globalFunc'},
        {include: '#accessControl'},
        {include: '#keywords'},
        {include: '#booleans'},
        {include: '#comparisons'},
        {include: '#arithmetic'},
        {include: '#typeMember'},
        {include: '#punctuation'}
      ]
    },
    number: {
      patterns: [
        {
          match:
            '(?x)\n-?[0-9]+\\.[0-9]* | # 1.2, -3.4, -3.\n-?      \\.[0-9]+   # .12, -.34, -.3',
          name: 'constant.numeric.decimal.float.firestore'
        },
        {match: '-?[0-9]+', name: 'constant.numeric.decimal.integer.firestore'}
      ]
    },
    pathMatchLiteral: {
      captures: {1: {name: 'punctuation.definition.string.slash.firestore'}},
      match: '(/)[-a-zA-Z0-9_]+(?=[\\s/])',
      name: 'string.unquoted.path.firestore'
    },
    pathMatchVariable: {
      captures: {
        1: {name: 'punctuation.definition.string.slash.firestore'},
        2: {name: 'punctuation.definition.section.begin.firestore'},
        3: {name: 'variable.parameter.path.match.firestore'},
        4: {name: 'keyword.operator.wildcard.firestore'},
        5: {name: 'punctuation.separator.key-value.firestore'},
        6: {name: 'punctuation.definition.section.end.firestore'}
      },
      match:
        '(?x)\n(/)         #1\n({)         #2\n([^}]+?)    #3\n((=)\\*+)?  #4-5\n(})         #6\n(?=[\\s/])',
      name: 'string.unquoted.path.interpolation.firestore'
    },
    punctuation: {
      patterns: [
        {
          match: ':',
          name: 'keyword.operator.assignment.colon.key-value.firestore'
        },
        {
          match: ';',
          name: 'punctuation.terminator.statement.semicolon.firestore'
        },
        {match: ',', name: 'punctuation.separator.delimiter.comma.firestore'},
        {
          match: '{',
          name: 'punctuation.definition.bracket.curly.begin.firestore'
        },
        {
          match: '}',
          name: 'punctuation.definition.bracket.curly.end.firestore'
        },
        {
          match: '\\[',
          name: 'punctuation.definition.bracket.square.begin.firestore'
        },
        {
          match: '\\]',
          name: 'punctuation.definition.bracket.square.end.firestore'
        },
        {
          match: '\\(',
          name: 'punctuation.definition.bracket.round.begin.firestore'
        },
        {
          match: '\\)',
          name: 'punctuation.definition.bracket.round.end.firestore'
        },
        {
          match: '\\.',
          name: 'punctuation.definition.full-stop.dot.period.firestore'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.firestore'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.firestore'}
          },
          name: 'string.quoted.double.firestore'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.firestore'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.firestore'}
          },
          name: 'string.quoted.single.firestore'
        }
      ]
    },
    typeMember: {
      captures: {0: {patterns: [{include: '#punctuation'}]}},
      match: '\\.[a-zA-Z0-9_]+',
      name: 'variable.parameter.type.member.firestore'
    }
  },
  scopeName: 'source.firestore'
}

export default grammar
