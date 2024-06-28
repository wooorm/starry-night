// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.jison', 'source.js'],
  extensions: ['.jisonlex'],
  names: ['jison-lex'],
  patterns: [
    {
      begin: '%%',
      beginCaptures: {0: {name: 'meta.separator.section.jisonlex'}},
      end: '\\z',
      patterns: [
        {
          begin: '^%%',
          beginCaptures: {0: {name: 'meta.separator.section.jisonlex'}},
          end: '\\z',
          patterns: [
            {
              begin: '\\G',
              contentName: 'source.js.embedded.jison',
              end: '\\z',
              name: 'meta.section.user-code.jisonlex',
              patterns: [{include: '#user_code_section'}]
            }
          ]
        },
        {
          begin: '\\G',
          end: '(?=^%%)',
          name: 'meta.section.rules.jisonlex',
          patterns: [{include: '#rules_section'}]
        }
      ]
    },
    {
      begin: '^',
      end: '(?=%%)',
      name: 'meta.section.definitions.jisonlex',
      patterns: [{include: '#definitions_section'}]
    }
  ],
  repository: {
    definitions_section: {
      patterns: [
        {include: 'source.jison#comments'},
        {include: 'source.jison#include_declarations'},
        {
          begin: '\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b',
          beginCaptures: {0: {name: 'entity.name.other.definition.jisonlex'}},
          end: '$',
          name: 'meta.definition.jisonlex',
          patterns: [
            {include: 'source.jison#comments'},
            {
              begin: '(?=\\S)',
              end: '(?=\\s)',
              name: 'string.regexp.jisonlex',
              patterns: [{include: '#regexp'}]
            }
          ]
        },
        {
          begin: '%[sx]\\b',
          beginCaptures: {0: {name: 'keyword.other.start-condition.jisonlex'}},
          end: '$',
          name: 'meta.start-condition.jisonlex',
          patterns: [
            {include: 'source.jison#comments'},
            {
              match: '\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b',
              name: 'entity.name.function.jisonlex'
            },
            {match: '\\S', name: 'invalid.illegal.jisonlex'}
          ]
        },
        {include: 'source.jison#options_declarations'},
        {match: '%(?:array|pointer)', name: 'invalid.unimplemented.jisonlex'},
        {include: 'source.jison#user_code_blocks'}
      ]
    },
    name_uses: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.name-use.begin.jisonlex'},
            2: {name: 'punctuation.definition.name-use.end.jisonlex'}
          },
          match: '(\\{)[[:alpha:]_](?:[\\w-]*\\w)?(\\})',
          name: 'constant.other.name-use.jisonlex'
        }
      ]
    },
    regexp: {
      patterns: [
        {include: 'source.jison#comments'},
        {
          match: '\\.',
          name: 'keyword.other.character-class.any.regexp.jisonlex'
        },
        {
          match: '\\\\b',
          name: 'keyword.other.anchor.word-boundary.regexp.jisonlex'
        },
        {
          match: '\\\\B',
          name: 'keyword.other.anchor.non-word-boundary.regexp.jisonlex'
        },
        {
          match: '\\^',
          name: 'keyword.other.anchor.start-of-input.regexp.jisonlex'
        },
        {
          match: '\\$',
          name: 'keyword.other.anchor.end-of-input.regexp.jisonlex'
        },
        {
          match: '\\\\[1-9]\\d*',
          name: 'keyword.other.back-reference.regexp.jisonlex'
        },
        {
          match: '(?:[+*?]|\\{(?:\\d+(?:,(?:\\d+)?)?|,\\d+)\\})\\??',
          name: 'keyword.operator.quantifier.regexp.jisonlex'
        },
        {match: '\\|', name: 'keyword.operator.alternation.regexp.jisonlex'},
        {
          begin: '\\(\\?:',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp.jisonlex'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.group.end.regexp.jisonlex'}
          },
          name: 'meta.non-capturing.group.regexp.jisonlex',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\(\\?=',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp.jisonlex'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.group.end.regexp.jisonlex'}
          },
          name: 'meta.lookahead.assertion.regexp.jisonlex',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\(\\?!',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp.jisonlex'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.group.end.regexp.jisonlex'}
          },
          name: 'meta.negative.lookahead.assertion.regexp.jisonlex',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp.jisonlex'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.group.end.regexp.jisonlex'}
          },
          name: 'meta.group.regexp.jisonlex',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.character-class.begin.regexp.jisonlex'
            },
            2: {name: 'keyword.operator.negation.regexp.jisonlex'}
          },
          end: '\\]',
          endCaptures: {
            0: {
              name: 'punctuation.definition.character-class.end.regexp.jisonlex'
            }
          },
          name: 'constant.other.character-class.set.regexp.jisonlex',
          patterns: [
            {include: '#name_uses'},
            {include: '#regexp_character_class'}
          ]
        },
        {include: '#regexp_character_class'},
        {include: '#name_uses'},
        {include: 'source.jison#quoted_strings'},
        {match: '<<EOF>>', name: 'keyword.other.eof.regexp.jisonlex'},
        {
          match: '/!',
          name: 'keyword.operator.negative.lookahead.regexp.jisonlex'
        },
        {match: '/', name: 'keyword.operator.lookahead.regexp.jisonlex'}
      ]
    },
    regexp_character_class: {
      patterns: [
        {
          match: '\\\\w',
          name: 'constant.character.escape.character-class.word.regexp.jisonlex'
        },
        {
          match: '\\\\W',
          name: 'constant.character.escape.character-class.non-word.regexp.jisonlex'
        },
        {
          match: '\\\\s',
          name: 'constant.character.escape.character-class.space.regexp.jisonlex'
        },
        {
          match: '\\\\S',
          name: 'constant.character.escape.character-class.non-space.regexp.jisonlex'
        },
        {
          match: '\\\\d',
          name: 'constant.character.escape.character-class.digit.regexp.jisonlex'
        },
        {
          match: '\\\\D',
          name: 'constant.character.escape.character-class.non-digit.regexp.jisonlex'
        },
        {
          match: '\\\\c[A-Z]',
          name: 'constant.character.escape.character-class.control.regexp.jisonlex'
        },
        {include: 'source.js#string_escapes'}
      ]
    },
    rules_section: {
      patterns: [
        {include: 'source.jison#comments'},
        {
          begin: '(?:^|(?<=%\\}))<(?!<EOF>>)',
          beginCaptures: {
            0: {name: 'punctuation.definition.start-conditions.begin.jisonlex'}
          },
          end: '>',
          endCaptures: {
            0: {name: 'punctuation.definition.start-conditions.end.jisonlex'}
          },
          name: 'meta.start-conditions.jisonlex',
          patterns: [
            {match: '\\bINITIAL\\b', name: 'keyword.other.jisonlex'},
            {
              match: '\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b',
              name: 'entity.name.function.jisonlex'
            },
            {
              match: ',',
              name: 'punctuation.separator.start-condition.jisonlex'
            },
            {
              match: '(?<=<)\\*(?=>)',
              name: 'keyword.other.any-start-condition.jisonlex'
            },
            {match: '.', name: 'invalid.illegal.jisonlex'}
          ]
        },
        {
          begin: '(?=%\\{)',
          end: '(?<=%\\})',
          name: 'meta.rule.action.jisonlex',
          patterns: [{include: 'source.jison#user_code_blocks'}]
        },
        {
          begin: '(?:^|(?<=>|%\\}))(?=\\S)',
          end: '(?=\\s|%\\{)',
          name: 'string.regexp.jisonlex',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(?=\\S)',
          contentName: 'source.js.embedded.jison',
          end: '$',
          name: 'meta.rule.action.jisonlex',
          patterns: [
            {include: 'source.jison#include_declarations'},
            {include: 'source.js'}
          ]
        }
      ]
    },
    user_code_section: {
      patterns: [
        {include: 'source.jison#user_code_include_declarations'},
        {include: 'source.js'}
      ]
    }
  },
  scopeName: 'source.jisonlex'
}

export default grammar
