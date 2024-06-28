// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/sindresorhus/atom-editorconfig>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.editorconfig'],
  names: ['editorconfig', 'editor-config'],
  patterns: [{include: '#main'}],
  repository: {
    array: {
      begin: '(?:\\G|^)(?=\\s*[^#\\s,]+\\s*(?:,\\s*[^#\\s,]+)++\\s*$)',
      end: '(?=\\s*(?:$|#))',
      patterns: [
        {match: '[^#\\s,]+', name: 'string.unquoted.bareword.editorconfig'},
        {include: '#comma'}
      ]
    },
    bareword: {
      match: '[^=#;\\s]+',
      name: 'string.unquoted.bareword.editorconfig'
    },
    bestGuess: {
      patterns: [
        {include: '#value'},
        {include: '#bareword'},
        {include: '#comment'}
      ]
    },
    comma: {
      match: ',',
      name: 'punctuation.separator.delimiter.comma.editorconfig'
    },
    comment: {
      patterns: [
        {
          begin: '^(\\s*)(#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.editorconfig'},
            2: {name: 'punctuation.definition.comment.editorconfig'}
          },
          end: '$',
          name: 'comment.line.number-sign.editorconfig'
        },
        {
          begin: '^(\\s*)(;)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.editorconfig'},
            2: {name: 'punctuation.definition.comment.editorconfig'}
          },
          end: '$',
          name: 'comment.line.semicolon.editorconfig'
        }
      ]
    },
    escape: {match: '\\\\.', name: 'constant.character.escape.editorconfig'},
    keywords: {
      patterns: [
        {
          match: '(?i)(?:\\G|^|(?<=\\s|=))(true|false|on|off|yes|no)(?=$|\\s)',
          name: 'constant.language.boolean.${1:/downcase}.editorconfig'
        },
        {
          match:
            '(?i)(?:\\G|^|(?<=\\s|=))(CRLF|CR|LF|tab|space|unset)(?=$|\\s)',
          name: 'constant.language.${1:/downcase}.editorconfig'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#section'},
        {include: '#rule'}
      ]
    },
    number: {
      match: '\\d+',
      name: 'constant.numeric.decimal.integer.int.editorconfig'
    },
    pathBracketsCurly: {
      begin: '{',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.brace.bracket.curly.begin.editorconfig'
        }
      },
      end: '}|(?=$)',
      endCaptures: {
        0: {name: 'punctuation.definition.brace.bracket.curly.end.editorconfig'}
      },
      patterns: [
        {include: '#escape'},
        {include: '#comma'},
        {include: '#pathRange'},
        {include: '#pathSpec'}
      ]
    },
    pathBracketsSquare: {
      begin: '\\[',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.brace.bracket.square.begin.editorconfig'
        }
      },
      end: '\\]|(?=$)',
      endCaptures: {
        0: {
          name: 'punctuation.definition.brace.bracket.square.end.editorconfig'
        }
      },
      patterns: [{include: '#pathSpec'}]
    },
    pathRange: {
      captures: {
        1: {patterns: [{include: '#number'}]},
        2: {name: 'punctuation.definition.separator.range.editorconfig'},
        3: {patterns: [{include: '#number'}]}
      },
      match: '([0-9]+)(\\.{2})([0-9]+)',
      name: 'meta.range.editorconfig'
    },
    pathSpec: {
      patterns: [
        {include: '#escape'},
        {include: '#pathBracketsCurly'},
        {include: '#pathBracketsSquare'},
        {
          match: '\\*{2}',
          name: 'keyword.operator.glob.wildcard.globstar.editorconfig'
        },
        {match: '\\*', name: 'keyword.operator.glob.wildcard.editorconfig'},
        {match: '\\?', name: 'keyword.operator.glob.wildcard.editorconfig'}
      ]
    },
    rule: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.definition.indent_size.editorconfig'},
            2: {name: 'invalid.illegal.confusable.editorconfig'}
          },
          match: '^\\s*(indent_(width))(?=$|[=\\s])'
        },
        {
          captures: {
            1: {name: 'keyword.other.definition.tab_width.editorconfig'},
            2: {name: 'invalid.illegal.confusable.editorconfig'}
          },
          match: '^\\s*(tab_(size))(?=$|[=\\s])'
        },
        {
          begin:
            '(?ix)\n^ \\s*\n( end_of_line\n| indent_size\n| indent_style\n| insert_final_newline\n| max_line_length\n| root\n| tab_width\n| trim_trailing_whitespace\n) \\s* (=)',
          beginCaptures: {
            1: {name: 'keyword.other.definition.${1:/downcase}.editorconfig'},
            2: {name: 'punctuation.separator.key-value.editorconfig'}
          },
          end: '$',
          name: 'meta.rule.${1:/downcase}.editorconfig',
          patterns: [{include: '#value'}]
        },
        {
          begin: '^\\s*(charset)\\s*(=)',
          beginCaptures: {
            1: {name: 'keyword.other.definition.${1:/downcase}.editorconfig'},
            2: {name: 'punctuation.separator.key-value.editorconfig'}
          },
          end: '$',
          name: 'meta.rule.charset.editorconfig',
          patterns: [
            {
              match: '(?i)(?<=\\s|=)([-\\w]+)(?=$|\\s)',
              name: 'constant.language.charset.encoding.${1:/downcase}.editorconfig'
            },
            {include: '#value'}
          ]
        },
        {
          begin: '(?i)^\\s*(ij_[^#\\s=]+)\\s*(=)',
          beginCaptures: {
            1: {name: 'keyword.other.definition.vendor-specific.editorconfig'},
            2: {name: 'punctuation.separator.key-value.editorconfig'}
          },
          end: '(?=\\s*(?:$|#))',
          name: 'meta.rule.vendor-specific.intellij.editorconfig',
          patterns: [
            {include: '#array'},
            {include: '#value'},
            {include: '#bareword'}
          ]
        },
        {
          begin:
            '(?i)^\\s*((csharp|dotnet|java|vs|vscode|visual_studio)_[^\\s=]+)\\s*(=)',
          beginCaptures: {
            1: {name: 'keyword.other.definition.custom.editorconfig'},
            3: {name: 'punctuation.separator.key-value.editorconfig'}
          },
          end: '$',
          name: 'meta.rule.vendor-specific.microsoft.${2:/downcase}.editorconfig',
          patterns: [
            {
              begin: '[A-Z]:\\\\(?=[^\\s:])',
              end: '(?=\\s*(?:$|:|#|;))',
              name: 'string.unquoted.pathname.windows.editorconfig',
              patterns: [{match: '\\\\'}, {include: '#pathSpec'}]
            },
            {
              captures: {
                1: {patterns: [{include: '#keywords'}]},
                2: {name: 'punctuation.separator.warning.editorconfig'},
                3: {name: 'constant.language.severity-level.editorconfig'}
              },
              match:
                '\\G\\s*(?:(true|false)(:))?(error|warning|suggestion|silent|none|default)(?=$|[\\s;#])',
              name: 'meta.severity-level.editorconfig'
            },
            {include: '#bestGuess'}
          ]
        },
        {
          begin: '^\\s*(?![\\[#;])([^\\s=]+)\\s*(=)',
          beginCaptures: {
            1: {name: 'keyword.other.definition.custom.editorconfig'},
            2: {name: 'punctuation.separator.key-value.editorconfig'}
          },
          end: '$',
          name: 'meta.rule.custom.editorconfig',
          patterns: [{include: '#bestGuess'}]
        }
      ]
    },
    section: {
      begin: '^\\s*(?=\\[.*?\\])',
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.section.editorconfig',
      patterns: [
        {include: '#sectionHeader'},
        {include: '#comment'},
        {include: '#rule'}
      ]
    },
    sectionHeader: {
      begin: '\\G\\[',
      beginCaptures: {
        0: {name: 'punctuation.section.brace.bracket.square.begin.editorconfig'}
      },
      contentName: 'entity.name.section.group-title.editorconfig',
      end: '\\]|(?=$)',
      endCaptures: {
        0: {name: 'punctuation.section.brace.bracket.square.end.editorconfig'}
      },
      name: 'meta.section.header.editorconfig',
      patterns: [
        {
          match: '\\G!',
          name: 'keyword.control.logical.not.negation.editorconfig'
        },
        {include: '#pathSpec'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.editorconfig'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.editorconfig'}
          },
          name: 'string.quoted.double.editorconfig',
          patterns: [{include: '#escape'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.editorconfig'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.editorconfig'}
          },
          name: 'string.quoted.single.editorconfig',
          patterns: [{include: '#escape'}]
        }
      ]
    },
    value: {
      patterns: [
        {include: '#escape'},
        {include: '#comment'},
        {include: '#keywords'},
        {include: '#number'},
        {include: '#string'}
      ]
    }
  },
  scopeName: 'source.editorconfig'
}

export default grammar
