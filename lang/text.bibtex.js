// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/latex.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bib', '.bibtex'],
  names: ['bibtex'],
  patterns: [
    {
      begin: '@Comment',
      beginCaptures: {0: {name: 'punctuation.definition.comment.bibtex'}},
      end: '$\\n?',
      name: 'comment.line.at-sign.bibtex'
    },
    {
      begin: '((@)String)\\s*(\\{)\\s*([a-zA-Z]*)',
      beginCaptures: {
        1: {name: 'keyword.other.string-constant.bibtex'},
        2: {name: 'punctuation.definition.keyword.bibtex'},
        3: {name: 'punctuation.section.string-constant.begin.bibtex'},
        4: {name: 'variable.other.bibtex'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.section.string-constant.end.bibtex'}
      },
      name: 'meta.string-constant.braces.bibtex',
      patterns: [{include: '#string_content'}]
    },
    {
      begin: '((@)String)\\s*(\\()\\s*([a-zA-Z]*)',
      beginCaptures: {
        1: {name: 'keyword.other.string-constant.bibtex'},
        2: {name: 'punctuation.definition.keyword.bibtex'},
        3: {name: 'punctuation.section.string-constant.begin.bibtex'},
        4: {name: 'variable.other.bibtex'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.section.string-constant.end.bibtex'}
      },
      name: 'meta.string-constant.parenthesis.bibtex',
      patterns: [{include: '#string_content'}]
    },
    {
      begin: '((@)[a-zA-Z]+)\\s*(\\{)\\s*([^\\s,]*)',
      beginCaptures: {
        1: {name: 'keyword.other.entry-type.bibtex'},
        2: {name: 'punctuation.definition.keyword.bibtex'},
        3: {name: 'punctuation.section.entry.begin.bibtex'},
        4: {name: 'entity.name.type.entry-key.bibtex'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.entry.end.bibtex'}},
      name: 'meta.entry.braces.bibtex',
      patterns: [
        {
          begin:
            '([a-zA-Z0-9\\!\\$\\&\\*\\+\\-\\.\\/\\:\\;\\<\\>\\?\\[\\]\\^\\_\\`\\|]+)\\s*(\\=)',
          beginCaptures: {
            1: {name: 'string.unquoted.key.bibtex'},
            2: {name: 'punctuation.separator.key-value.bibtex'}
          },
          end: '(?=[,}])',
          name: 'meta.key-assignment.bibtex',
          patterns: [{include: '#string_content'}, {include: '#integer'}]
        }
      ]
    },
    {
      begin: '((@)[a-zA-Z]+)\\s*(\\()\\s*([^\\s,]*)',
      beginCaptures: {
        1: {name: 'keyword.other.entry-type.bibtex'},
        2: {name: 'punctuation.definition.keyword.bibtex'},
        3: {name: 'punctuation.section.entry.begin.bibtex'},
        4: {name: 'entity.name.type.entry-key.bibtex'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.entry.end.bibtex'}},
      name: 'meta.entry.parenthesis.bibtex',
      patterns: [
        {
          begin:
            '([a-zA-Z0-9\\!\\$\\&\\*\\+\\-\\.\\/\\:\\;\\<\\>\\?\\[\\]\\^\\_\\`\\|]+)\\s*(\\=)',
          beginCaptures: {
            1: {name: 'string.unquoted.key.bibtex'},
            2: {name: 'punctuation.separator.key-value.bibtex'}
          },
          end: '(?=[,)])',
          name: 'meta.key-assignment.bibtex',
          patterns: [{include: '#string_content'}, {include: '#integer'}]
        }
      ]
    },
    {begin: '[^@\\n]', end: '(?=@)', name: 'comment.block.bibtex'}
  ],
  repository: {
    integer: {match: '\\d+', name: 'constant.numeric.bibtex'},
    nested_braces: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.bibtex'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.group.end.bibtex'}},
      patterns: [{include: '#nested_braces'}]
    },
    string_content: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.bibtex'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.bibtex'}},
          name: 'string.quoted.double.bibtex',
          patterns: [{include: '#nested_braces'}]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.bibtex'}
          },
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.bibtex'}},
          name: 'string.quoted.other.braces.bibtex',
          patterns: [
            {match: '@', name: 'invalid.illegal.at-sign.bibtex'},
            {include: '#nested_braces'}
          ]
        }
      ]
    }
  },
  scopeName: 'text.bibtex'
}

export default grammar
