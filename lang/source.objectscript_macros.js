// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.objectscript'],
  extensions: [],
  names: [],
  patterns: [
    {include: '#include'},
    {include: '#dim'},
    {include: '#define'},
    {include: '#def1arg'},
    {include: '#ifdef'},
    {include: '#comment-line'}
  ],
  repository: {
    'comment-line': {
      patterns: [
        {match: '^///.*$', name: 'comment.line.objectscript'},
        {match: '\\s+//.*$', name: 'comment.line.objectscript'},
        {match: '\\s+;.*$', name: 'comment.line.objectscript'},
        {match: '^\\s*#;.*$', name: 'comment.line.objectscript'},
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.objectscript'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.objectscript'}},
          name: 'comment.block.objectscript'
        }
      ]
    },
    continue: {
      patterns: [
        {
          match: '(\\s+\\#\\#(?i)(continue)\\s*)',
          name: 'keyword.control.objectscript'
        }
      ]
    },
    def1arg: {
      patterns: [
        {
          begin:
            '^\\s*(\\#\\s*(?:(?i)def1arg))\\s+((?<id>[a-zA-Z%][a-zA-Z0-9]*))(?:(\\()(\\s*\\g<id>\\s*)(\\)))',
          beginCaptures: {
            1: {name: 'keyword.control.objectscript'},
            2: {name: 'entity.name.objectscript'},
            4: {name: 'punctuation.definition.objectscript'},
            5: {name: 'variable.parameter.objectscript'},
            6: {name: 'punctuation.definition.objectscript'}
          },
          end: '(?<!\\#\\#continue)\\n',
          name: 'meta.preprocessor.objectscript',
          patterns: [
            {include: '#comment-line'},
            {include: '#continue'},
            {include: '#digits'},
            {include: '#macros'},
            {include: 'source.objectscript'}
          ]
        }
      ]
    },
    define: {
      patterns: [
        {
          begin:
            '^\\s*(\\#\\s*(?:(?i)define))\\s+((?<id>[a-zA-Z%][a-zA-Z0-9]*))(?:(\\()(\\s*\\g<id>\\s*((,)\\s*\\g<id>\\s*)*)(\\)))?',
          beginCaptures: {
            1: {name: 'keyword.control.objectscript'},
            2: {name: 'entity.name.objectscript'},
            4: {name: 'punctuation.definition.objectscript'},
            5: {name: 'variable.parameter.objectscript'},
            7: {name: 'punctuation.definition.objectscript'}
          },
          end: '(?<!\\#\\#continue)\\n',
          name: 'meta.preprocessor.objectscript',
          patterns: [
            {include: '#comment-line'},
            {include: '#continue'},
            {include: '#macros'},
            {include: 'source.objectscript'}
          ]
        }
      ]
    },
    dim: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.objectscript'},
            2: {name: 'variable.name'},
            4: {name: 'punctuation.definition.objectscript'},
            5: {name: 'variable.name'},
            7: {name: 'keyword.control.objectscript'},
            8: {name: 'entity.name.class.objectscript'}
          },
          match:
            '^\\s*(\\#\\s*(?:(?i)dim))\\s+((?<id>[a-zA-Z%][a-zA-Z0-9]*))(?:\\s*(,)\\s*((\\g<id>)*))*(?:\\s+((?i)As)(?:\\s(\\g<id>(?:\\.\\g<id>)*)))?',
          name: 'meta.preprocessor.objectscript'
        }
      ]
    },
    ifdef: {
      patterns: [
        {
          begin: '^\\s*(#\\s*(?i)(?:if|ifdef|ifndef|elif|else|undef|endif))\\b',
          beginCaptures: {1: {name: 'keyword.control.objectscript'}},
          contentName: 'meta.preprocessor.objectscript',
          end: '(?=(?:;|//|/\\*))|$',
          patterns: [{include: '#digits'}, {include: '#comment-line'}]
        }
      ]
    },
    include: {
      patterns: [
        {
          begin: '^\\s*(\\#\\s*(?:(?i)include))\\s+([a-zA-Z%][a-zA-Z0-9]*)',
          beginCaptures: {
            1: {name: 'keyword.other.objectscript'},
            2: {name: 'entity.name.objectscript'}
          },
          end: '(?=$)'
        }
      ]
    },
    macros: {
      patterns: [
        {match: '\\$\\$\\$[a-zA-Z]([a-zA-Z0-9])*', name: 'support.constant'}
      ]
    }
  },
  scopeName: 'source.objectscript_macros'
}

export default grammar
