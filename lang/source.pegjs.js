// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.pegjs'],
  names: ['peg.js'],
  patterns: [
    {
      begin: '\\A\\s*(?=$|/[/*])',
      end: '(?=[^/\\s]|/[^/*])',
      patterns: [{include: '#comments'}]
    },
    {
      begin: '(?=\\S)',
      end: '(?=A)B',
      patterns: [
        {
          begin: '\\G(?={)',
          end: '(?<=})',
          name: 'meta.prologue.initialiser.pegjs',
          patterns: [{include: '#block'}]
        },
        {include: '#main'}
      ]
    }
  ],
  repository: {
    block: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.section.block.bracket.curly.begin.pegjs'}
      },
      contentName: 'source.embedded.js',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.block.bracket.curly.end.pegjs'}
      },
      name: 'meta.block.pegjs',
      patterns: [{include: 'source.js'}]
    },
    charSet: {
      begin: '(?=\\[)',
      end: '(?<=\\])(i)?',
      endCaptures: {1: {name: 'storage.modifier.ignore-case.pegjs'}},
      patterns: [{include: 'source.js.regexp'}]
    },
    comments: {
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.pegjs'}},
          end: '$',
          name: 'comment.line.double-slash.pegjs'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.pegjs'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.pegjs'}},
          name: 'comment.block.pegjs'
        }
      ]
    },
    exprInnards: {
      patterns: [
        {include: '#strings'},
        {include: '#label'},
        {include: '#ruleRef'},
        {include: '#charSet'},
        {include: '#comments'},
        {include: '#group'},
        {include: '#block'},
        {match: '/', name: 'keyword.operator.logical.or.pegjs'},
        {match: '\\.', name: 'constant.character.wildcard.dot.match.any.pegjs'},
        {match: '@', name: 'keyword.operator.pluck.pegjs'},
        {match: '[&!]', name: 'keyword.operator.logical.predicate.pegjs'},
        {match: '[?*+]', name: 'keyword.operator.quantifier.pegjs'}
      ]
    },
    group: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.pegjs'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.group.end.pegjs'}},
      name: 'meta.group.pegjs',
      patterns: [{include: '#exprInnards'}]
    },
    label: {
      captures: {
        1: {name: 'variable.label.pegjs'},
        2: {name: 'punctuation.definition.label.pegjs'}
      },
      match: '(?!\\d)([$\\w]+)\\s*(:)'
    },
    main: {patterns: [{include: '#comments'}, {include: '#rule'}]},
    rule: {
      begin: '(?!\\d)(?=[$\\w])',
      end: '(?!\\G)',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\G([$\\w]+)',
          beginCaptures: {1: {name: 'entity.name.rule.pegjs'}},
          end: '\\s*(;)|(?=^\\s*(?:[^@$\\w\\s\\\\]|[$\\w]+(?!\\s*:)))',
          endCaptures: {
            1: {name: 'punctuation.delimiter.separator.semicolon.pegjs'}
          },
          name: 'meta.rule.$1.definition.pegjs',
          patterns: [
            {
              begin: '(?="|\')',
              end: '(?!\\G)',
              name: 'meta.rule.human-readable-name.pegjs',
              patterns: [{include: '#strings'}]
            },
            {
              begin: '\\s*(=)\\s*',
              beginCaptures: {1: {name: 'keyword.operator.assignment.pegjs'}},
              end: '(?=;|^(?=\\s*(?![$\\w]+\\s*:|/[^*/])[^\\s/"\'{]))',
              name: 'meta.expression.pegjs',
              patterns: [{include: '#exprInnards'}]
            },
            {include: '#comments'}
          ]
        },
        {include: '#comments'}
      ]
    },
    ruleRef: {
      match: '(?!\\d)[$\\w]+',
      name: 'entity.name.rule.reference.pegjs'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.pegjs'}
          },
          end: '(?<![^\\\\]\\\\)(")(i)?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.pegjs'},
            2: {name: 'storage.modifier.ignore-case.pegjs'}
          },
          name: 'string.quoted.double.pegjs',
          patterns: [{include: 'source.js#string_escapes'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.pegjs'}
          },
          end: "(?<![^\\\\]\\\\)(')(i)?",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.pegjs'},
            2: {name: 'storage.modifier.ignore-case.pegjs'}
          },
          name: 'string.quoted.single.pegjs',
          patterns: [{include: 'source.js#string_escapes'}]
        }
      ]
    }
  },
  scopeName: 'source.pegjs'
}

export default grammar
