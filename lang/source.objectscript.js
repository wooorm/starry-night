// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.objectscript_macros'],
  extensions: [],
  names: ['objectscript'],
  patterns: [
    {include: '#comments'},
    {include: '#embedded'},
    {include: '#constants'},
    {include: '#keywords'},
    {include: '#macros'},
    {include: '#elements'}
  ],
  repository: {
    commands: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.objectscript'}},
          match:
            '(?i)(?<=\\s)\\b(BREAK|B|SET|S|DO|D|KILL|K|GOTO|G|READ|R|WRITE|W|OPEN|O|USE|U|CLOSE|C|CONTINUE|FOR|F|HALT|H|HANG|JOB|J|MERGE|M|NEW|N|QUIT|Q|RETURN|RET|TSTART|TS|TCOMMIT|TC|TROLLBACK|TRO|THROW|VIEW|V|XECUTE|X|ZKILL|ZL|ZNSPACE|ZN|ZTRAP|ZWRITE|ZW|ZZDUMP|ZZWRITE)\\b(?=( (?![=+-]|\\&|\\|)|:|$))'
        },
        {
          captures: {1: {name: 'keyword.control.objectscript'}},
          match: '(?i)(?<=\\s)\\b(LOCK|L)\\b(?=( (?![=]|\\&|\\|)|:|$))'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '(/\\*)',
          beginCaptures: {1: {name: 'comment.multiline.objectscript'}},
          contentName: 'comment.multiline.objectscript',
          end: '(.*?\\*/)',
          endCaptures: {1: {name: 'comment.multiline.objectscript'}}
        },
        {begin: '^\\s*#;', end: '$', name: 'comment.line.macro.objectscript'},
        {begin: '//|;', end: '$', name: 'comment.endline.objectscript'},
        {begin: '##;', end: '$', name: 'comment.endline.macro.objectscript'}
      ]
    },
    constants: {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.objectscript'}
          },
          end: '(")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.objectscript'}
          },
          name: 'string.quoted.double.objectscript'
        },
        {match: '\\d+', name: 'constant.numeric.objectscript'}
      ]
    },
    'control-commands': {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.objectscript'}},
          match:
            '(?i)(?<=\\s)\\b(IF|I|WHILE|FOR|F|TRY|CATCH|ELSE|E|ELSEIF)\\b(?=( (?![=+-]|\\&|\\|)|:|$))'
        }
      ]
    },
    elements: {
      patterns: [
        {match: '^[a-zA-Z0-9]+', name: 'entity.name.function'},
        {
          captures: {
            1: {name: 'keyword.other'},
            2: {name: 'punctuation.objectscript'},
            3: {name: 'entity.name.class'},
            4: {name: 'punctuation.objectscript'}
          },
          match: '(?i)(##class)(\\()([^)]+)(\\))'
        },
        {match: '%[a-zA-Z0-9]+', name: 'entity.other.attribute-name'},
        {match: '[i|r]%[a-zA-Z0-9]+', name: 'entity.other.attribute-name'},
        {match: '[i|r]%"[^".]"', name: 'entity.other.attribute-name'},
        {
          captures: {
            1: {name: 'punctuation.objectscript'},
            2: {name: 'entity.other.attribute-name'}
          },
          match: '(\\.{1,2})(%?[a-zA-Z0-9]+)(?=\\()'
        },
        {
          captures: {
            1: {name: 'punctuation.objectscript'},
            2: {name: 'entity.other.attribute-name'}
          },
          match: '(\\.{1,2})(%?[a-zA-Z0-9]+)(?!\\()'
        },
        {
          captures: {
            1: {name: 'punctuation.objectscript'},
            2: {name: 'meta.parameter.type.variable'}
          },
          match: '(\\.{1,2}#)([a-zA-Z0-9]+)'
        },
        {match: '%?[a-zA-Z0-9]+', name: 'variable.name.objectscrip'},
        {match: '\\^%?[a-zA-Z0-9]+', name: 'variable.name.global.objectscrip'},
        {
          match: '\\$[a-zA-Z0-9]+',
          name: 'entity.name.function.system.objectscript'
        },
        {
          match: '\\${2}[a-zA-Z0-9]+',
          name: 'entity.name.function.local.objectscript'
        },
        {match: '\\${3}[a-zA-Z0-9]+', name: 'meta.preprocessor.objectscript'}
      ]
    },
    embedded: {patterns: [{include: '#embeddedSQL'}, {include: '#embeddedJS'}]},
    embeddedJS: {
      patterns: [
        {
          begin: '(&js)(\\()',
          beginCaptures: {
            1: {name: 'keyword.special.js.objectscript'},
            2: {name: 'punctuation.objectscript'}
          },
          contentName: 'text.js',
          end: '\\)',
          patterns: [{include: 'source.js'}]
        }
      ]
    },
    embeddedSQL: {
      patterns: [
        {
          begin: '(&sql)(\\()',
          beginCaptures: {
            1: {name: 'keyword.special.sql.objectscript'},
            2: {name: 'punctuation.objectscript'}
          },
          contentName: 'meta.embedded.block.sql',
          end: '\\)',
          patterns: [{include: 'source.sql'}]
        }
      ]
    },
    keywords: {
      patterns: [{include: '#commands'}, {include: '#control-commands'}]
    },
    macros: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.preprocessor.dim.objectscript'},
            2: {name: 'whitespace.objectscript'},
            3: {name: 'variable.name'},
            4: {name: 'whitespace.objectscript'},
            5: {name: 'keyword.as.objectscript'},
            6: {name: 'whitespace.objectscript'},
            7: {name: 'entity.name.class'}
          },
          match:
            '(?i)(#dim)(\\s)(%?[a-zA-Z0-9]+)(\\s)(?:(As)(\\s)(%?[a-zA-Z0-9.]+))?'
        },
        {include: 'source.objectscript_macros'}
      ]
    },
    statements: {patterns: [{include: '#variables'}]}
  },
  scopeName: 'source.objectscript'
}

export default grammar
