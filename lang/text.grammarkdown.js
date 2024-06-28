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
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    assertion: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.assertion.begin.grammarkdown'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.assertion.end.grammarkdown'}
      },
      name: 'meta.assertion.grammarkdown',
      patterns: [
        {include: '#assertion-empty'},
        {include: '#assertion-lookahead'},
        {include: '#assertion-no-symbol'},
        {include: '#assertion-lexical-goal'},
        {include: '#assertion-parameter'},
        {include: '#assertion-prose'}
      ]
    },
    'assertion-empty': {
      captures: {
        1: {name: 'keyword.operator.assertion.empty.grammarkdown'},
        2: {name: 'invalid.illegal.unexpected-junk.grammarkdown'}
      },
      match: '\\G\\s*(empty)(?:\\s+((?=\\S)[^\\]]*))?'
    },
    'assertion-lexical-goal': {
      begin: '\\G\\s*(lexical\\s+goal)(?=$|\\s)',
      captures: {
        1: {name: 'keyword.operator.assertion.lexical-goal.grammarkdown'}
      },
      end: '\\s*(?=$|\\])',
      patterns: [{include: '#ref'}]
    },
    'assertion-lookahead': {
      patterns: [
        {
          begin: '\\G\\s*(lookahead)\\s*(==|!=|≠)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.assertion.lookahead.grammarkdown'},
            2: {name: 'keyword.operator.comparison.equality.grammarkdown'}
          },
          end: '(?!\\G)',
          name: 'meta.lookahead-operation.grammarkdown',
          patterns: [{include: '#literal'}]
        },
        {
          begin: '\\G\\s*(lookahead)\\s*(<-|<!|∈|∉)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.assertion.lookahead.grammarkdown'},
            2: {name: 'keyword.operator.comparison.equality.grammarkdown'}
          },
          end: '(?!\\G)',
          name: 'meta.lookahead-operation.grammarkdown',
          patterns: [
            {
              begin: '\\G{',
              beginCaptures: {
                0: {name: 'punctuation.definition.set.begin.grammarkdown'}
              },
              end: '}',
              endCaptures: {
                0: {name: 'punctuation.definition.set.end.grammarkdown'}
              },
              name: 'meta.string-set.grammarkdown',
              patterns: [{include: '#literal'}, {include: '#comma'}]
            }
          ]
        }
      ]
    },
    'assertion-no-symbol': {
      begin: '\\G\\s*(no)(?=$|\\s)',
      captures: {
        1: {name: 'keyword.operator.assertion.no-symbol-here.grammarkdown'}
      },
      end: '((?<=\\s)here)?\\s*(?=$|\\])',
      patterns: [{include: '#ref'}]
    },
    'assertion-parameter': {
      captures: {
        1: {patterns: [{include: '#comma'}]},
        2: {name: 'keyword.operator.parameter-test.grammarkdown'},
        3: {patterns: [{include: '#ref'}]}
      },
      match: '(?:^|\\G|(,))\\s*([+~?])\\s*(\\w+)'
    },
    'assertion-prose': {
      begin: '\\G\\s*(>)[ \\t]*',
      beginCaptures: {1: {name: 'punctuation.section.quote.grammarkdown'}},
      end: '\\s*(?=\\])',
      name: 'markup.quote.prose.grammarkdown'
    },
    comma: {match: ',', name: 'punctuation.delimiter.comma.grammarkdown'},
    comments: {
      patterns: [
        {
          begin: '//',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.grammarkdown'}
          },
          end: '$',
          name: 'comment.line.double-slash.grammarkdown'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.grammarkdown'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.grammarkdown'}
          },
          name: 'comment.block.grammarkdown'
        }
      ]
    },
    exclusion: {
      begin: '(?:^|\\G|(?<=\\s))(but\\s+not)(?=$|\\s)',
      beginCaptures: {
        1: {name: 'keyword.operator.logical.negation.negate.not.grammarkdown'}
      },
      end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
      name: 'meta.exclusion.grammarkdown',
      patterns: [
        {
          match: '(?<=\\s)or(?=$|\\s)',
          name: 'keyword.operator.logical.or.grammarkdown'
        },
        {
          match: '(?<=\\s)one\\s+of(?=$|\\s)',
          name: 'keyword.operator.selection.one-of.grammarkdown'
        },
        {include: '#production-innards'}
      ]
    },
    'link-id': {
      captures: {
        1: {name: 'variable.language.production-reference.grammarkdown'},
        2: {patterns: [{include: '#parameters'}]},
        3: {name: 'constant.other.permalink.grammarkdown'},
        4: {name: 'punctuation.definition.permalink.grammarkdown'},
        5: {name: 'constant.other.reference.link.permalink.grammarkdown'}
      },
      match: '(?:^|\\G)\\s*(\\w+)\\s*(\\[[^\\]]*\\])\\s*((#)([-\\w]+))',
      name: 'meta.custom-permalink.grammarkdown'
    },
    literal: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.grammarkdown'},
            2: {name: 'punctuation.definition.string.end.grammarkdown'}
          },
          match: '(`)`(`)',
          name: 'string.quoted.single.verbatim.grammarkdown'
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.grammarkdown'}
          },
          end: '`',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.grammarkdown'}
          },
          name: 'string.quoted.verbatim.grammarkdown'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#meta'},
        {include: '#production'}
      ]
    },
    meta: {
      patterns: [
        {
          begin: '^\\s*((@)import)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.import.grammarkdown'},
            2: {name: 'punctuation.definition.keyword.grammarkdown'}
          },
          end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'meta.import.directive.grammarkdown',
          patterns: [{include: '#meta-string'}]
        },
        {
          begin: '^\\s*((@)line)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.line.grammarkdown'},
            2: {name: 'punctuation.definition.keyword.grammarkdown'}
          },
          end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'meta.source-line.directive.grammarkdown',
          patterns: [
            {
              captures: {
                1: {
                  name: 'constant.numeric.decimal.integer.line-number.grammarkdown'
                }
              },
              match: '\\G\\s*(\\d+)'
            },
            {include: '#meta-string'}
          ]
        },
        {
          begin: '^\\s*((@)define)(?=$|\\s)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.define.grammarkdown'},
            2: {name: 'punctuation.definition.keyword.grammarkdown'}
          },
          end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'meta.define.directive.grammarkdown',
          patterns: [
            {
              match: '\\G\\w+',
              name: 'variable.assignment.setting-name.grammarkdown'
            },
            {include: '#meta-value'}
          ]
        }
      ]
    },
    'meta-string': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.grammarkdown'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.grammarkdown'}
          },
          name: 'string.quoted.double.grammarkdown'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.grammarkdown'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.grammarkdown'}
          },
          name: 'string.quoted.single.grammarkdown'
        }
      ]
    },
    'meta-value': {
      patterns: [
        {
          match:
            '(?:^|\\G|(?<=\\s))default(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'constant.language.default.grammarkdown'
        },
        {
          match:
            '(?:^|\\G|(?<=\\s))(true|false)(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'constant.language.boolean.$1.grammarkdown'
        },
        {
          match: '(?:^|\\G|(?<=\\s))(?=\\S)(?:[^\\r\\n/]|/(?!/|\\*))++',
          name: 'string.unquoted.setting-value.grammarkdown'
        }
      ]
    },
    'one-of-list': {
      captures: {
        1: {name: 'keyword.operator.selection.one-of.grammarkdown'},
        2: {patterns: [{include: '#terminal'}]}
      },
      match:
        '\\G\\s*(one\\s+of)(?=$|\\s)[ \\t]*((?=\\S)(?:[^\\r\\n/]|/(?!/|\\*))++)?',
      name: 'meta.one-of-list.grammarkdown'
    },
    optional: {
      match: '(?<=\\S)\\s*\\?',
      name: 'keyword.operator.quantifier.optional.grammarkdown'
    },
    parameters: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.list.begin.grammarkdown'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.list.end.grammarkdown'}},
      name: 'meta.parameters.list.grammarkdown',
      patterns: [
        {match: '\\w+', name: 'variable.parameter.grammarkdown'},
        {match: '[\\?+~]', name: 'keyword.operator.other.grammarkdown'},
        {include: '#comma'}
      ]
    },
    production: {
      patterns: [
        {
          begin:
            '(?:^|\\G)(\\s*)(\\w+)(?:\\s*(\\[[^\\]]*\\]))?\\s*(:{1,3})[ \\t]*(?:(one\\s+of)(?=$|\\s)\\s*)?[ \\t]*$',
          beginCaptures: {
            2: {
              name: 'entity.name.production.grammarkdown',
              patterns: [{include: '#reserved'}]
            },
            3: {patterns: [{include: '#parameters'}]},
            4: {name: 'keyword.assignment.rule.grammarkdown'},
            5: {name: 'keyword.operator.selection.one-of.grammarkdown'}
          },
          end: '(?i)(?=\\s*</emu-grammar\\s*>)|^(?:(?=\\s*$)|(?!\\1[ \\t]+(?:[^\\s/]|/(?!/|\\*))))',
          name: 'meta.production.indented.grammarkdown',
          patterns: [
            {include: '#comments'},
            {include: '#one-of-list'},
            {include: '#production-innards'}
          ]
        },
        {
          begin:
            '(?:^|\\G)\\s*(\\w+)(?:\\s*(\\[[^\\]]*\\]))?\\s*(:{1,3})[ \\t]*(?:(one\\s+of(?=$|\\s))\\s*)?(?=[^\\s/]|/(?!/|\\*))',
          beginCaptures: {
            1: {
              name: 'entity.name.production.grammarkdown',
              patterns: [{include: '#reserved'}]
            },
            2: {patterns: [{include: '#parameters'}]},
            3: {name: 'keyword.assignment.rule.grammarkdown'},
            4: {name: 'keyword.operator.selection.one-of.grammarkdown'}
          },
          end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
          name: 'meta.production.single-line.grammarkdown',
          patterns: [
            {include: '#one-of-list'},
            {include: '#production-innards'}
          ]
        }
      ]
    },
    'production-innards': {
      patterns: [
        {include: '#prose'},
        {include: '#exclusion'},
        {include: '#unicode-range'},
        {include: '#terminal'},
        {include: '#optional'},
        {include: '#link-id'},
        {include: '#ref'}
      ]
    },
    prose: {
      begin: '(?:^|\\G)\\s*(>)[ \\t]*',
      beginCaptures: {1: {name: 'punctuation.section.quote.grammarkdown'}},
      end: '(?=\\s*(?i:$|/[/*]|</emu-grammar\\s*>))',
      name: 'markup.quote.prose.grammarkdown'
    },
    ref: {
      captures: {0: {patterns: [{include: '#reserved'}]}},
      match: '\\w+',
      name: 'variable.reference.grammarkdown'
    },
    reserved: {
      match: '(?:^|\\G)(but|empty|goal|here|lexical|lookahead|not?|of|one|or)$',
      name: 'invalid.illegal.reserved-keyword.grammarkdown'
    },
    terminal: {
      patterns: [
        {include: '#assertion'},
        {include: '#literal'},
        {include: '#unicode-char'},
        {include: '#unicode-codepoint'}
      ]
    },
    'unicode-char': {
      captures: {
        1: {name: 'punctuation.definition.character.begin.grammarkdown'},
        2: {name: 'punctuation.definition.character.end.grammarkdown'}
      },
      match: '(<)(?!/emu-grammar\\s*>)[^>]+(>)',
      name: 'constant.character.named.unicode-name.grammarkdown'
    },
    'unicode-codepoint': {
      match: 'U\\+[A-Fa-f0-9]+',
      name: 'constant.numeric.other.codepoint.grammarkdown'
    },
    'unicode-range': {
      captures: {
        1: {name: 'meta.start-character.grammarkdown'},
        2: {patterns: [{include: '#unicode-char'}]},
        3: {patterns: [{include: '#unicode-codepoint'}]},
        4: {name: 'keyword.operator.range.grammarkdown'},
        5: {name: 'meta.end-character.grammarkdown'},
        6: {patterns: [{include: '#unicode-char'}]},
        7: {patterns: [{include: '#unicode-codepoint'}]}
      },
      match:
        '(?x)\n((<[^>]+>) | (U\\+[A-Fa-f0-9]+))\n\\s+ (through) \\s+\n((<[^>]+>) | (U\\+[A-Fa-f0-9]+))',
      name: 'meta.character-range.grammarkdown'
    }
  },
  scopeName: 'text.grammarkdown'
}

export default grammar
