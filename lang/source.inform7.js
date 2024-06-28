// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/erkyrath/language-inform7>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ni', '.i7x'],
  names: ['inform-7', 'i7', 'inform7'],
  patterns: [
    {include: '#string'},
    {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.inform7'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.inform7'}},
      name: 'comment.block.inform7',
      patterns: [{include: '#nestedcomment'}]
    },
    {
      captures: {
        1: {name: 'entity.type.section.inform7'},
        2: {name: 'entity.name.section.inform7'}
      },
      match: '(?i)^\\s*(volume|book|part|chapter|section)[ \t]+(.*)$',
      name: 'entity.name.inform7'
    },
    {
      begin: '\\(-',
      beginCaptures: {
        0: {name: 'punctuation.definition.inform6.begin.inform7'}
      },
      contentName: 'support.other.inform6.inform7',
      end: '-\\)',
      endCaptures: {0: {name: 'punctuation.definition.inform6.end.inform7'}},
      patterns: [
        {include: '#i6comment'},
        {include: '#i6string'},
        {include: '#i6dictword'}
      ]
    },
    {
      begin: '(?i)^\\s*(----[ \t]+(documentation)[ \t]+----)(.*)$',
      beginCaptures: {
        1: {name: 'entity.name.inform7'},
        2: {name: 'entity.type.section.inform7'},
        3: {name: 'comment.block.documentation.inform7'}
      },
      contentName: 'meta.documentation.inform7',
      end: '$ENDOFDOC',
      patterns: [{include: '#doccomment'}, {include: '#string'}]
    }
  ],
  repository: {
    doccomment: {
      patterns: [
        {match: '^[^\t].*$', name: 'comment.block.documentation.inform7'}
      ]
    },
    i6comment: {
      patterns: [{match: '!.*$', name: 'comment.line.bang.inform6.inform7'}]
    },
    i6dictword: {
      patterns: [
        {begin: "'", end: "'", name: 'string.quoted.single.inform6.inform7'}
      ]
    },
    i6string: {
      patterns: [
        {begin: '"', end: '"', name: 'string.quoted.double.inform6.inform7'}
      ]
    },
    nestedcomment: {
      patterns: [
        {begin: '\\[', end: '\\]', patterns: [{include: '#nestedcomment'}]}
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.inform7'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.inform7'}},
          name: 'string.quoted.double.inform7',
          patterns: [{include: '#substitution'}]
        }
      ]
    },
    substitution: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'keyword.control.begin.inform7'}},
          end: '\\]',
          endCaptures: {0: {name: 'keyword.control.end.inform7'}},
          name: 'keyword.control'
        }
      ]
    }
  },
  scopeName: 'source.inform7'
}

export default grammar
