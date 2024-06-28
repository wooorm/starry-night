// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-viml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.viml'],
  extensions: [],
  names: ['vim-help-file', 'help', 'vimhelp'],
  patterns: [
    {
      captures: {
        1: {patterns: [{include: '#tag'}]},
        2: {patterns: [{include: '#vimVersion'}]},
        3: {name: 'constant.numeric.date.last-changed.vim-help'}
      },
      match:
        '(?i)\\A(\\*[#-)!+-~]+\\*)[ \\t]+(For\\s+Vim\\s+version\\s*[\\d.]+)[ \\t]+Last\\s+changed?:\\s*(\\S.*?)\\s*$',
      name: 'meta.file-header.vim-help'
    },
    {include: '#main'}
  ],
  repository: {
    codeBlock: {
      begin: '(?:(?<=\\s)|^)(>)$',
      beginCaptures: {1: {name: 'keyword.control.example.begin.vim-help'}},
      contentName: 'markup.raw.code.verbatim.vim-help',
      end: '^(<)|(?=^\\S)',
      endCaptures: {1: {name: 'keyword.control.example.end.vim-help'}},
      name: 'meta.example.vim-help'
    },
    columnHeading: {
      captures: {1: {name: 'keyword.operator.column-marker.tilde.vim-help'}},
      match: '^\\s*\\S.*(~)$',
      name: 'markup.heading.column-title.vim-help'
    },
    command: {
      captures: {
        1: {name: 'punctuation.definition.link.begin.vim-help'},
        2: {patterns: [{include: 'source.viml'}]},
        3: {name: 'punctuation.definition.link.end.vim-help'}
      },
      match: '(`)([^` \\t]+)(`)',
      name: 'markup.raw.command.vim-help'
    },
    link: {
      captures: {
        1: {name: 'meta.separator.punctuation.link.begin.vim-help'},
        2: {name: 'constant.other.link.vim-help'},
        3: {name: 'meta.separator.punctuation.link.end.vim-help'}
      },
      match: '(\\|)([^"*|]+)(\\|)',
      name: 'meta.link.vim-help'
    },
    main: {
      patterns: [
        {include: '#tag'},
        {include: '#link'},
        {include: '#special'},
        {include: '#option'},
        {include: '#command'},
        {include: '#codeBlock'},
        {include: '#manualTitle'},
        {include: '#columnHeading'},
        {include: '#sectionDelimiter'},
        {include: '#vimVersion'},
        {include: '#url'},
        {include: '#other'}
      ]
    },
    manualTitle: {
      captures: {1: {name: 'constant.other.title-text.vim-help'}},
      match: '^[ \\t]+(VIM REFERENCE.*)\\s*$',
      name: 'markup.heading.manual-title.vim-help'
    },
    option: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.begin.option.vim-help'},
            2: {name: 'punctuation.definition.end.option.vim-help'}
          },
          match: "(')[a-z]{2,}(')",
          name: 'entity.name.tag.option.vim-help'
        }
      ]
    },
    other: {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.operator.assignment.key-value.colon.vim-help'}
          },
          match: '\\b(DEPRECATED|WARNING|(?:Deprecated|Warning)(?=:))(:|\\b)',
          name: 'markup.changed.${1:/downcase}.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.list-item.marker.vim-help'}
          },
          match: '\\t[* ]Error\\t+[a-z].*',
          name: 'invalid.illegal.error.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.list-item.marker.vim-help'}
          },
          match: '\\t[* ]Todo\\t+[a-z].*',
          name: 'markup.ignored.todo.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.list-item.marker.vim-help'}
          },
          match: '\\t[* ](Comment)\\t+([a-z].*)',
          name: 'comment.line.vim-help'
        },
        {
          match: '\\t[* ]Underlined\\t+[a-z].*',
          name: 'constant.other.reference.link.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.list-item.marker.vim-help'},
            2: {name: 'storage.type.${2:/downcase}.vim-help'},
            3: {name: 'meta.output.vim-help'},
            4: {name: '${2:/downcase}.vim-help'}
          },
          match:
            '(?x) \\t (\\*|\\x20)\n(Boolean|Character|Conditional|Constant|Debug|Define|Delimiter\n|Exception|Float|Function|Identifier|Include|Keyword|Label|Macro\n|Number|Operator|PreCondit|PreProc|Repeat|SpecialChar\n|SpecialComment|Special|Statement|StorageClass|String\n|Structure|Tag|Typedef|Type)\n(\\t+ (["Aa-z].*))',
          name: 'meta.${2:/downcase}-line.vim-help'
        }
      ]
    },
    sectionDelimiter: {
      match: '^===.*===$|^---.*--$',
      name: 'constant.other.section.delimiter.vim-help'
    },
    special: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.angle.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.angle.end.vim-help'}
          },
          match: '(<)N(>)',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.angle.begin.vim-help'}
          },
          match: '(<)N(?=\\.(?:$|\\s))',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.round.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.angle.end.vim-help'}
          },
          match: '(\\()N(>)',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.square.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.square.end.vim-help'}
          },
          match: '(\\[)N(\\])',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'entity.name.keyword.vim-help'},
            2: {name: 'entity.name.keyword.vim-help'}
          },
          match: '(N)  (N)'
        },
        {match: 'N(?=th|-1)', name: 'entity.name.keyword.vim-help'},
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.curly.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.curly.end.vim-help'}
          },
          match: '({)[-a-zA-Z0-9\'"*+/:%#=\\[\\]<>.,]+(})',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.square.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.square.end.vim-help'}
          },
          match: '(?<=\\s)(\\[)[-a-z^A-Z0-9_]{2,}(\\])',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.angle.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.angle.end.vim-help'}
          },
          match: '(<)[-a-zA-Z0-9_]+(>)',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.angle.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.angle.end.vim-help'}
          },
          match: '(<)[SCM]-.(>)',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.square.begin.vim-help'},
            2: {name: 'punctuation.definition.bracket.square.end.vim-help'}
          },
          match:
            '(\\[)(?:\\+\\+opt|[-+]?num|\\+?cmd|addr|arguments|arg|count|group|ident|line|offset|range)(\\])',
          name: 'entity.name.keyword.vim-help'
        },
        {
          captures: {
            1: {name: 'punctuation.delimiter.separator.dash.hyphen.vim-help'},
            2: {name: 'punctuation.definition.bracket.curly.begin.vim-help'},
            3: {name: 'punctuation.definition.bracket.curly.end.vim-help'}
          },
          match: '\\bCTRL(-)(?:.|Break|Del|Insert|PageDown|PageUp|({)char(}))',
          name: 'entity.name.keyword.vim-help'
        }
      ]
    },
    tag: {
      captures: {
        1: {name: 'punctuation.definition.begin.vim-help'},
        2: {name: 'punctuation.definition.end.vim-help'}
      },
      match: '(\\*)[#-)!+-~]+(\\*)(?=\\s|$)',
      name: 'storage.link.hypertext.vim-help'
    },
    url: {
      match:
        '(?x)\n(?:(?:(?:https?|ftp|gopher)://|(?:mailto|file|news):)[^\'\\x20\\t<>"]+\n|(?:www|web|w3)[a-z0-9_-]*\\.[a-z0-9._-]+\\.[^\'\\x20\\t<>"]+)\n[a-zA-Z0-9/]',
      name: 'constant.other.reference.link.vim-help'
    },
    vimVersion: {
      match: '\\bVim version [0-9][0-9.a-z]*',
      name: 'entity.other.vim-version.vim-help'
    }
  },
  scopeName: 'text.vim-help'
}

export default grammar
