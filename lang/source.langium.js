// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/eclipse-langium/language-langium>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.langium'],
  names: ['langium'],
  patterns: [
    {include: '#regex'},
    {include: '#comments'},
    {
      match:
        '\\b(left|right|assoc|current|entry|extends|fragment|grammar|hidden|import|infer|infers|infix|interface|returns|terminal|type|with|on)\\b',
      name: 'keyword.control.langium'
    },
    {match: '\\b(?i:true|false)\\b', name: 'constant.language.langium'},
    {
      match:
        '(\\{|\\}|\\:|\\]|\\[|\\(|\\)|(\\??|\\+?)\\=|->|\\=>|<|>|\\,|\\*|\\+|\\@|\\||\\&|\\?|\\!|\\;)',
      name: 'keyword.symbol.langium'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.langium',
      patterns: [{include: '#string-character-escape'}]
    },
    {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.langium',
      patterns: [{include: '#string-character-escape'}]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.langium'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.langium'}},
          name: 'comment.block.langium'
        },
        {
          begin: '(^\\s+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.cs'}
          },
          end: '(?=$)',
          name: 'comment.line.langium'
        }
      ]
    },
    regex: {
      patterns: [
        {
          begin:
            '(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([a-z]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.ts'}},
          end: '(/)([a-z]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.ts'},
            2: {name: 'keyword.other.ts'}
          },
          name: 'string.regexp.ts',
          patterns: [{include: '#regexp'}]
        },
        {
          begin:
            '((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([a-z]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.ts'}},
          end: '(/)([a-z]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.ts'},
            2: {name: 'keyword.other.ts'}
          },
          name: 'string.regexp.ts',
          patterns: [{include: '#regexp'}]
        }
      ]
    },
    'regex-character-class': {
      patterns: [
        {
          match: '\\\\[wWsSdDtrnvf]|\\.',
          name: 'constant.other.character-class.regexp'
        },
        {
          match: '\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})',
          name: 'constant.character.numeric.regexp'
        },
        {match: '\\\\c[A-Z]', name: 'constant.character.control.regexp'},
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    regexp: {
      patterns: [
        {match: '\\\\[bB]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
        {
          captures: {
            0: {name: 'keyword.other.back-reference.regexp'},
            1: {name: 'variable.other.regexp'}
          },
          match: '\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>'
        },
        {
          match: '[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
          name: 'keyword.operator.quantifier.regexp'
        },
        {match: '\\|', name: 'keyword.operator.or.regexp'},
        {
          begin: '(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.regexp'},
            2: {name: 'punctuation.definition.group.assertion.regexp'},
            3: {name: 'meta.assertion.look-ahead.regexp'},
            4: {name: 'meta.assertion.negative-look-ahead.regexp'},
            5: {name: 'meta.assertion.look-behind.regexp'},
            6: {name: 'meta.assertion.negative-look-behind.regexp'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.assertion.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.regexp'},
            1: {name: 'punctuation.definition.group.no-capture.regexp'},
            2: {name: 'variable.other.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'},
            2: {name: 'keyword.operator.negation.regexp'}
          },
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'}
          },
          name: 'constant.other.character-class.set.regexp',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.numeric.regexp'},
                2: {name: 'constant.character.control.regexp'},
                3: {name: 'constant.character.escape.backslash.regexp'},
                4: {name: 'constant.character.numeric.regexp'},
                5: {name: 'constant.character.control.regexp'},
                6: {name: 'constant.character.escape.backslash.regexp'}
              },
              match:
                '(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))',
              name: 'constant.other.character-class.range.regexp'
            },
            {include: '#regex-character-class'}
          ]
        },
        {include: '#regex-character-class'}
      ]
    },
    'string-character-escape': {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.langium'
    }
  },
  scopeName: 'source.langium'
}

export default grammar
