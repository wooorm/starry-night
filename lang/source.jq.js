// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wader/language-jq>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['jq'],
  patterns: [{include: '#main'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.square.begin.jq'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.bracket.square.end.jq'}},
      name: 'meta.array.jq',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.begin.jq'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.round.end.jq'}
          },
          patterns: [{include: '#self_in_round_brackets'}]
        },
        {include: '#main'},
        {match: ',', name: 'punctuation.separator.jq'},
        {match: '\\S+', name: 'invalid.illegal.identifier.jq'}
      ]
    },
    comment: {begin: '#', end: '$', name: 'comment.line.number-sign.jq'},
    constant: {
      match: '(?<!\\.)\\b(true|false|null)(?!\\s*:)\\b',
      name: 'constant.language.jq'
    },
    field: {match: '\\.[a-zA-Z_]\\w*', name: 'entity.other.attribute-name.jq'},
    filter: {
      match: '([a-zA-Z_]\\w*::)*[a-zA-Z_]\\w*',
      name: 'support.function.jq'
    },
    format: {match: '@\\w+', name: 'constant.other.symbol.jq'},
    function: {
      begin: '(?<!\\.)\\bdef(?!\\s*:)\\b',
      beginCaptures: {0: {name: 'storage.type.function.jq'}},
      end: '([a-zA-Z_]\\w*::)*[a-zA-Z_]\\w*',
      endCaptures: {0: {name: 'entity.name.function.jq'}},
      name: 'meta.function.jq',
      patterns: [
        {include: '#comment'},
        {match: '\\S+', name: 'invalid.illegal.identifier.jq'}
      ]
    },
    keyword: {
      match:
        '(?x)\n(?<!\\.) \\b\n( and\n| as\n| break\n| catch\n| elif\n| else\n| empty\n| end\n| foreach\n| if\n| import\n| include\n| label\n| module\n| or\n| reduce\n| then\n| try\n) (?!\\s*:) \\b',
      name: 'keyword.control.jq'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#array'},
        {include: '#object'},
        {include: '#function'},
        {include: '#string'},
        {include: '#field'},
        {include: '#variable'},
        {include: '#format'},
        {include: '#constant'},
        {include: '#keyword'},
        {include: '#filter'},
        {include: '#number'},
        {include: '#operator'},
        {include: '#punctuation'}
      ]
    },
    number: {
      match: '([0-9.]{2,}|[0-9]+)([eE][+-]?[0-9]+)?',
      name: 'constant.numeric.jq'
    },
    object: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.curly.begin.jq'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.bracket.curly.end.jq'}},
      name: 'meta.object.jq',
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#variable'},
        {
          match: '([a-zA-Z_]\\w*::)*[a-zA-Z_]\\w*',
          name: 'entity.other.attribute-name.id.jq'
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.begin.jq'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.round.end.jq'}
          },
          patterns: [{include: '#self_in_round_brackets'}]
        },
        {
          begin: ':',
          beginCaptures: {0: {name: 'punctuation.separator.begin.jq'}},
          end: ',|(?=})',
          endCaptures: {0: {name: 'punctuation.separator.end.jq'}},
          patterns: [{include: '#self_in_round_brackets'}]
        },
        {match: ',', name: 'punctuation.separator.jq'},
        {match: '\\S+', name: 'invalid.illegal.identifier.jq'}
      ]
    },
    operator: {
      match:
        '(?x) ( \\.\\.? | \\?// | \\? | ==? | //=? | \\|=? | \\+=? | -=? | \\*=? | /=? | %=? | != | <=? | >=? )',
      name: 'keyword.operator.jq'
    },
    punctuation: {
      patterns: [
        {match: '\\(|\\)', name: 'punctuation.bracket.round.jq'},
        {match: '\\[|\\]', name: 'punctuation.bracket.square.jq'},
        {match: ',|;|:', name: 'punctuation.separator.jq'}
      ]
    },
    self_in_round_brackets: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.begin.jq'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.round.end.jq'}
          },
          patterns: [{include: '#main'}]
        },
        {include: '#main'}
      ]
    },
    string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.jq',
      patterns: [
        {
          match: '\\\\(["\\\\/bfnrt]|u[0-9a-fA-F]{4})',
          name: 'constant.character.escape.jq'
        },
        {include: '#string_interpolation'},
        {match: '\\\\.', name: 'invalid.illegal.unrecognized-string-escape.jq'}
      ]
    },
    string_interpolation: {
      begin: '\\\\\\(',
      beginCaptures: {0: {name: 'punctuation.section.embedded.jq.begin.jq'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.embedded.jq.end.jq'}},
      name: 'source.jq.embedded.source',
      patterns: [{include: '#self_in_round_brackets'}]
    },
    variable: {
      match: '\\$([a-zA-Z_]\\w*::)*[a-zA-Z_]\\w*',
      name: 'variable.other.jq'
    }
  },
  scopeName: 'source.jq'
}

export default grammar
