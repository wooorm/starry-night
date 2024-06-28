// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.cnf',
    '.dof',
    '.ini',
    '.lektorproject',
    '.outjob',
    '.pcbdoc',
    '.prefs',
    '.prjpcb',
    '.properties',
    '.schdoc',
    '.url'
  ],
  names: ['altium', 'altium-designer', 'dosini', 'ini'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.ini'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ini'}},
          end: '\\n',
          name: 'comment.line.number-sign.ini'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=;)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.ini'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: ';',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ini'}},
          end: '\\n',
          name: 'comment.line.semicolon.ini'
        }
      ]
    },
    {
      captures: {
        1: {name: 'keyword.other.definition.ini'},
        2: {name: 'punctuation.separator.key-value.ini'}
      },
      match: '\\b([a-zA-Z0-9_.-]+)\\b\\s*(=)'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.entity.ini'},
        3: {name: 'punctuation.definition.entity.ini'}
      },
      match: '^(\\[)(.*?)(\\])',
      name: 'entity.name.section.group-title.ini'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ini'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.ini'}},
      name: 'string.quoted.single.ini',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.ini'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ini'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ini'}},
      name: 'string.quoted.double.ini'
    }
  ],
  scopeName: 'source.ini'
}

export default grammar
