// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-regexp>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.regexp'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    anchor: {
      captures: {0: {patterns: [{include: 'source.regexp#anchor'}]}},
      match: '\\^|\\$'
    },
    bound: {
      patterns: [{match: '\\\\{,'}, {include: 'source.regexp#quantifier'}]
    },
    brackets: {
      patterns: [
        {
          captures: {
            1: {
              name: 'punctuation.definition.character-class.set.begin.regexp'
            },
            2: {name: 'punctuation.definition.character-class.set.end.regexp'}
          },
          match: '(\\[)(\\])',
          name: 'meta.character-class.set.empty.regexp'
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.character-class.set.begin.regexp'}
          },
          end: '(?!\\G)-?\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.character-class.set.end.regexp'}
          },
          name: 'meta.character-class.set.regexp',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: 'source.regexp#classInnards'}]}
              },
              match: '\\G(\\^)(?:-|\\])?'
            },
            {include: '#charRange'},
            {include: '#localeClasses'}
          ]
        }
      ]
    },
    charClass: {
      captures: {
        1: {name: 'punctuation.definition.character-class.set.begin.regexp'},
        2: {name: 'keyword.operator.logical.not.regexp'},
        3: {name: 'support.constant.posix-class.regexp'},
        4: {name: 'punctuation.definition.character-class.set.end.regexp'}
      },
      match: '(\\[:)(\\^?)(\\w+)(:\\])',
      name: 'constant.language.$2-char.character-class.regexp.posix'
    },
    charRange: {
      patterns: [
        {
          match: '(?<=[^-])-[^\\[\\]\\\\]',
          name: 'invalid.illegal.range.ambiguous-endpoint.regexp'
        },
        {
          captures: {1: {name: 'punctuation.separator.range.dash.regexp'}},
          name: '(?:[^\\]\\\\]|(?<=\\]))(-)(?:[^\\[\\]\\\\]|(?=[^\\\\[\\]\\\\]))'
        }
      ]
    },
    collatingElement: {
      captures: {
        1: {name: 'punctuation.definition.collating-element.set.begin.regexp'},
        2: {name: 'storage.type.var.regexp'},
        3: {name: 'punctuation.definition.collating-element.set.end.regexp'}
      },
      match: '(\\[\\.)(.*?)(\\.\\])',
      name: 'constant.language.collating-element.regexp.posix'
    },
    equivalenceClass: {
      captures: {
        1: {name: 'punctuation.definition.class.begin.regexp'},
        2: {name: 'storage.type.class.regexp'},
        3: {name: 'punctuation.definition.class.end.regexp'}
      },
      match: '(\\[=)(.*?)(=\\])',
      name: 'constant.language.posix.equivalence-class.regexp'
    },
    escape: {patterns: [{include: '#escapeMeta'}, {include: '#escapeOther'}]},
    escapeMeta: {
      match: '\\\\[.^\\[$\\(\\)|*+?{\\\\]',
      name: 'constant.character.escape.literal-metacharacter.regexp'
    },
    escapeOther: {
      match: '\\\\.',
      name: 'constant.character.escape.misc.regexp'
    },
    group: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.group.begin.regexp'},
            2: {name: 'punctuation.definition.group.end.regexp'}
          },
          match: '(\\()(\\))',
          name: 'meta.group.empty.regexp'
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.begin.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.end.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#main'}]
        }
      ]
    },
    localeClasses: {
      patterns: [{include: '#collatingElement'}, {include: '#equivalenceClass'}]
    },
    main: {
      patterns: [
        {include: 'source.regexp#alternation'},
        {include: 'source.regexp#wildcard'},
        {include: '#escape'},
        {include: '#brackets'},
        {include: '#bound'},
        {include: '#anchor'},
        {include: '#group'}
      ]
    }
  },
  scopeName: 'source.regexp.posix'
}

export default grammar
