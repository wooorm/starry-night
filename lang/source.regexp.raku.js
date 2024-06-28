/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.raku'],
  extensions: [],
  names: [],
  patterns: [{include: '#regexp'}],
  repository: {
    re_strings: {
      patterns: [
        {
          begin: "(?<!\\\\)\\'",
          end: "(?<=\\\\\\\\)\\'|(?<!\\\\)\\'",
          name: 'string.literal.raku'
        },
        {
          begin: '(?<!\\\\)‘',
          end: '(?<=\\\\\\\\)\\’|(?<!\\\\)’',
          name: 'string.literal.raku',
          patterns: [
            {include: 'source.raku#q_left_single_right_single_string_content'}
          ]
        },
        {
          begin: '(?<!\\\\)\\"',
          end: '(?<=\\\\\\\\)\\"|(?<!\\\\)\\"',
          name: 'string.literal.raku'
        }
      ]
    },
    regexp: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.raku'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {0: {name: 'punctuation.definition.comment.raku'}},
              end: '\\n',
              name: 'comment.line.number-sign.raku'
            }
          ]
        },
        {include: '#re_strings'},
        {
          match: '\\\\[dDhHnNsStTvVwW]',
          name: 'constant.character.escape.class.regexp.raku'
        },
        {match: ':\\w+', name: 'entity.name.section.adverb.raku'},
        {
          match: '\\^\\^|(?<!\\.)\\^(?!\\.)|\\$\\$|\\$(?!\\d|<)|<<|>>',
          name: 'entity.name.section.boundary.regexp.raku'
        },
        {
          match: '(?<!\\\\)\\$\\d',
          name: 'keyword.other.special-method.match.variable.numbered.perlt6e'
        },
        {
          captures: {
            1: {name: 'variable.other.identifier.sigil.regexp.perl6'},
            2: {name: 'support.class.match.name.delimiter.regexp.raku'},
            3: {name: 'variable.other.identifier.regexp.perl6'},
            4: {name: 'support.class.match.name.delimiter.regexp.raku'},
            5: {name: 'storage.modifier.match.assignment.regexp.raku'}
          },
          match: '(\\$)(\\<)(\\w+)(\\>)\\s*(=)',
          name: 'meta.match.variable.raku'
        },
        {
          begin: '(\\<(?:\\?|\\!)\\{)',
          beginCaptures: {1: {name: 'punctuation.section.embedded.begin.raku'}},
          end: '(\\}\\>)',
          endCaptures: {1: {name: 'punctuation.section.embedded.end.raku'}},
          name: 'meta.interpolation.raku',
          patterns: [{include: 'source.raku'}]
        },
        {
          match: '<\\(|\\)>',
          name: 'keyword.operator.capture.marker.regexp.raku'
        },
        {
          begin: '(?!\\\\)<',
          beginCaptures: {
            0: {name: 'punctuation.delimiter.property.regexp.raku'}
          },
          end: '>',
          endCaptures: {
            0: {name: 'punctuation.delimiter.property.regexp.raku'}
          },
          name: 'meta.property.regexp.raku',
          patterns: [
            {include: '#re_strings'},
            {
              begin: '(\\?|\\!)(before|after)\\s+',
              beginCaptures: {
                1: {name: 'keyword.operator.negativity.raku'},
                2: {name: 'entity.name.section.assertion.raku'}
              },
              end: '(?=>)',
              name: 'meta.assertion.lookaround.raku',
              patterns: [{include: '#regexp'}]
            },
            {
              captures: {
                1: {name: 'entity.name.function.capturename.raku'},
                2: {name: 'storage.modifier.capture.assignment.raku'}
              },
              match: '(\\w+)(=)',
              name: 'meta.capture.assignment.raku'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.property.regexp.raku'},
                2: {name: 'variable.other.identifier.property.regexp.raku'}
              },
              match: '(:)(\\w+)',
              name: 'meta.property.name.regexp.raku'
            },
            {match: '[+|&\\-^]', name: 'keyword.operator.property.regexp.raku'},
            {
              begin: '\\[',
              beginCaptures: {
                0: {name: 'keyword.operator.charclass.open.regexp.raku'}
              },
              contentName: 'constant.character.custom.property.regexp.raku',
              end: '\\]',
              endCaptures: {
                0: {name: 'keyword.operator.charclass.close.regexp.raku'}
              },
              patterns: [
                {include: 'source.raku#hex_escapes'},
                {
                  match: '(?<!\\\\)\\\\\\]',
                  name: 'constant.character.custom.property.regexp.raku'
                }
              ]
            },
            {
              match: '\\.\\w+\\b',
              name: 'comment.suppressed.capture.property.regexp.raku'
            },
            {
              match: '\\b\\w+\\b',
              name: 'variable.other.identifier.regexname.raku'
            },
            {
              begin: '(?<=\\w)\\(',
              end: '\\)',
              name: 'meta.rule.signature.raku',
              patterns: [{include: 'source.raku'}]
            }
          ]
        },
        {
          match: '(?<=\\.\\.)\\*',
          name: 'variable.other.identifier.whatever.regexp.raku'
        },
        {
          match: '\\+|\\*\\*|\\*|\\?|%|\\.\\.|\\.|(?<=\\.\\.|\\s|\\d)\\^',
          name: 'keyword.operator.quantifiers.regexp.raku'
        },
        {
          match: '(?<!\\\\)\\|{1,2}',
          name: 'support.function.alternation.regexp.raku'
        }
      ]
    }
  },
  scopeName: 'source.regexp.raku'
}

export default grammar
