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
  dependencies: ['source.c++', 'source.jflex'],
  extensions: ['.lex'],
  names: ['lex', 'flex'],
  patterns: [{include: '#main'}],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.begin.comment.lex'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.end.comment.lex'}},
          name: 'comment.block.lex'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.lex'}},
          end: '(?=$)',
          name: 'comment.line.double-slash.lex'
        }
      ]
    },
    definition: {
      begin: '^\\s*([A-Za-z_][A-Za-z0-9_-]*)',
      beginCaptures: {1: {name: 'entity.name.definition.lex'}},
      end: '$',
      name: 'meta.definition.lex',
      patterns: [
        {
          captures: {0: {patterns: [{include: 'source.lex.regexp'}]}},
          match: '(?<=\\s)\\S.*',
          name: 'meta.pattern.lex'
        }
      ]
    },
    definitions: {
      begin: '\\A(?!\\s*%%)',
      end: '^(?=\\s*(?:%%|(?:package|import)\\s+\\w))',
      name: 'meta.definitions.lex',
      patterns: [
        {include: '#comments'},
        {include: '#directives'},
        {include: '#passthrough'},
        {include: '#definition'}
      ]
    },
    directives: {
      begin: '^\\s*((%)\\w+)(?=\\s|$)',
      captures: {
        1: {name: 'keyword.control.directive.lex'},
        2: {name: 'punctuation.definition.directive.lex'}
      },
      end: '(?=$)',
      name: 'meta.directive.lex',
      patterns: [
        {include: '#comments'},
        {match: '\\S+', name: 'constant.language.other.lex'}
      ]
    },
    jflex: {
      begin: '^(?=\\s*(?:package|import)\\s+\\w)',
      end: '(?=A)B',
      name: 'meta.jflex.lex',
      patterns: [{include: 'source.jflex'}]
    },
    main: {
      patterns: [
        {include: '#jflex'},
        {include: '#comments'},
        {include: '#definitions'},
        {include: '#rules'},
        {include: 'source.c++'}
      ]
    },
    passthrough: {
      begin: '^%{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.lex'}},
      end: '^%}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.lex'}},
      name: 'meta.code-chunk.lex',
      patterns: [{include: 'source.c++'}]
    },
    'rule.action': {
      begin: '(?<!^)(?=\\S)',
      end: '(?=\\s*$|^)',
      name: 'meta.action.lex',
      patterns: [
        {include: '#comments'},
        {begin: '(?={)', end: '(?<=})', patterns: [{include: 'source.c++'}]},
        {
          captures: {1: {patterns: [{include: 'source.c++'}]}},
          match: '([^{\\s][^{]*?)\\s*$'
        }
      ]
    },
    'rule.pattern': {
      begin: '(?<=^|\\n)(?=\\S)',
      end: '(?=\\s|$)',
      name: 'meta.pattern.lex',
      patterns: [{include: 'source.lex.regexp'}]
    },
    rules: {
      begin: '^\\s*(%%)\\s*(?:$\\s*|(?=/\\*))',
      beginCaptures: {1: {name: 'keyword.control.section.begin.lex'}},
      end: '^\\s*(%%)\\s*(?:$\\s*|(?=/\\*))',
      endCaptures: {1: {name: 'keyword.control.section.end.lex'}},
      patterns: [
        {include: '#passthrough'},
        {include: '#rule.pattern'},
        {include: '#rule.action'}
      ]
    },
    'user-code': {
      begin: '(?<=^%%|\\s%%)',
      contentName: 'source.embedded.cpp',
      end: '(?=A)B',
      name: 'meta.user-code.lex',
      patterns: [{include: 'source.c++'}]
    }
  },
  scopeName: 'source.lex'
}

export default grammar
