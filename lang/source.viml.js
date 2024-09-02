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
  extensions: ['.vim', '.vimrc', '.vmb'],
  names: ['vim-script', 'vim', 'viml', 'nvim', 'vimscript'],
  patterns: [
    {
      begin: '\\A(?=" Vimball Archiver)',
      end: '(?=A)B',
      name: 'meta.file-archive.vimball',
      patterns: [
        {
          begin: '^(.*?\\S.*?\\.txt)(\\t)(\\[{3}1)(?=$)',
          beginCaptures: {
            0: {name: 'markup.heading.1.vimball'},
            1: {name: 'entity.name.file.path.vimball'},
            2: {name: 'punctuation.whitespace.tab.separator.vimball'},
            3: {name: 'punctuation.definition.header.vimball'}
          },
          contentName: 'text.embedded.vim-help',
          end: '(?!\\G)(?=^.*?\\S.*?\\t\\[{3}1$)',
          name: 'meta.file-record.help-file.vimball',
          patterns: [
            {
              begin: '\\G',
              end: '^(\\d+$)?',
              endCaptures: {
                0: {name: 'comment.ignored.line-count.viml'},
                1: {name: 'sublimelinter.gutter-mark'}
              }
            },
            {include: 'text.vim-help'}
          ]
        },
        {
          begin: '^(.*?\\S.*?[ \\t]*?)(\\t)(\\[{3}1)(?=$)',
          beginCaptures: {
            0: {name: 'markup.heading.1.vimball'},
            1: {name: 'entity.name.file.path.vimball'},
            2: {name: 'punctuation.whitespace.tab.separator.vimball'},
            3: {name: 'punctuation.definition.header.vimball'}
          },
          end: '(?!\\G)(?=^.*?\\S.*?\\t\\[{3}1$)',
          name: 'meta.file-record.vimball.viml',
          patterns: [
            {
              begin: '\\G',
              end: '^(\\d+$)?',
              endCaptures: {
                0: {name: 'comment.ignored.line-count.viml'},
                1: {name: 'sublimelinter.gutter-mark'}
              }
            },
            {include: '#main'}
          ]
        },
        {include: '#main'}
      ]
    },
    {include: '#main'}
  ],
  repository: {
    assignment: {
      patterns: [
        {match: '[-+.]=', name: 'keyword.operator.assignment.compound.viml'},
        {match: '=', name: 'keyword.operator.assignment.viml'}
      ]
    },
    auCmd: {
      captures: {
        1: {name: 'storage.type.autocmd.viml'},
        2: {name: 'storage.modifier.force.viml'},
        3: {name: 'meta.events-list.viml', patterns: [{include: '#main'}]},
        4: {name: 'string.unquoted.autocmd-suffix-list.viml'},
        5: {name: 'storage.modifier.$6.viml'}
      },
      match:
        '\\b(autocmd|au)(!)?\\b\\s+(?!\\*)(\\S+)\\s+(\\S+)(?:\\s+(\\+\\+(nested|once)))?',
      name: 'meta.autocmd.viml'
    },
    auGroup: {
      patterns: [
        {
          begin: '\\b(augroup|aug)(!)?\\b\\s*([\\w#]+)',
          beginCaptures: {
            1: {name: 'storage.type.function.viml'},
            2: {name: 'storage.modifier.force.viml'},
            3: {name: 'entity.name.function.viml'}
          },
          end: '\\b(\\1)\\s+(END)\\b',
          endCaptures: {
            1: {name: 'storage.type.augroup.viml'},
            2: {name: 'keyword.control.end'}
          },
          name: 'meta.augroup.viml',
          patterns: [{include: '#main'}]
        }
      ]
    },
    commentInnards: {patterns: [{include: '#modelines'}, {include: '#todo'}]},
    comments: {
      patterns: [
        {
          begin: '^\\s*(")(?=(\\s*[A-Z]\\w+)+:)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.viml'}},
          contentName: 'support.constant.field.viml',
          end: '((:))(.*)$',
          endCaptures: {
            1: {name: 'support.constant.field.viml'},
            2: {name: 'punctuation.separator.key-value.colon.viml'},
            3: {patterns: [{include: '#commentInnards'}]}
          },
          name: 'comment.line.quotes.viml'
        },
        {
          begin: '^\\s*(")',
          beginCaptures: {1: {name: 'punctuation.definition.comment.viml'}},
          end: '$',
          name: 'comment.line.quotes.viml',
          patterns: [{include: '#commentInnards'}]
        },
        {
          begin: '(?<!^)\\s*(")(?=[^\\n"]*$)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.viml'}},
          end: '$',
          name: 'comment.inline.quotes.viml',
          patterns: [{include: '#commentInnards'}]
        }
      ]
    },
    escape: {
      patterns: [
        {include: '#escapedCodePoint'},
        {include: '#escapedKey'},
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)b',
          name: 'constant.character.escape.backspace.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)e',
          name: 'constant.character.escape.escape.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)f',
          name: 'constant.character.escape.form-feed.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)n',
          name: 'constant.character.escape.newline.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)r',
          name: 'constant.character.escape.return.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)t',
          name: 'constant.character.escape.tab.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)\\1',
          name: 'constant.character.escape.backslash.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\)"',
          name: 'constant.character.escape.quote.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.viml'}},
          match: '(\\\\).',
          name: 'constant.character.escape.other.viml'
        }
      ]
    },
    escapedCodePoint: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.viml'}},
          match: '(\\\\)[xX][0-9A-Fa-f]{1,2}',
          name: 'constant.character.escape.codepoint.hex.short.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.viml'}},
          match: '(\\\\)(?:u[0-9A-Fa-f]{1,4}|U[0-9A-Fa-f]{1,8})',
          name: 'constant.character.escape.codepoint.hex.long.viml'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.viml'}},
          match: '(\\\\)([0-7]{1,3})',
          name: 'constant.character.escape.codepoint.octal.viml'
        }
      ]
    },
    escapedKey: {
      captures: {
        1: {name: 'punctuation.definition.escape.key.begin.viml'},
        2: {name: 'punctuation.definition.escape.key.end.viml'}
      },
      match: '(\\\\<\\*?)(?:[^">\\\\]|\\\\.)+(>)',
      name: 'constant.character.escape.keymapping.viml'
    },
    expr: {
      patterns: [
        {
          match:
            '[&|=]{2}[?#]?|[!><]=[#?]?|[=!]~(?!\\/)[#?]?|[><][#?*]|\\b(?:isnot|is)\\b|\\\\|[-+%*]',
          name: 'keyword.operator.logical.viml'
        },
        {match: '\\s[><]\\s', name: 'keyword.operator.logical.viml'},
        {match: '(?<=\\S)!', name: 'storage.modifier.force.viml'},
        {match: '!(?=\\S)', name: 'keyword.operator.logical.not.viml'},
        {match: '{', name: 'punctuation.expression.bracket.curly.begin.viml'},
        {match: '}', name: 'punctuation.expression.bracket.curly.end.viml'},
        {
          match: '\\[',
          name: 'punctuation.expression.bracket.square.begin.viml'
        },
        {match: '\\]', name: 'punctuation.expression.bracket.square.end.viml'},
        {match: '\\(', name: 'punctuation.expression.bracket.round.begin.viml'},
        {match: '\\)', name: 'punctuation.expression.bracket.round.end.viml'},
        {match: '\\|', name: 'punctuation.separator.statement.viml'},
        {match: ',', name: 'punctuation.separator.comma.viml'},
        {match: ':', name: 'punctuation.separator.colon.viml'},
        {match: '\\.{3}', name: 'keyword.operator.rest.viml'},
        {match: '\\.', name: 'punctuation.delimiter.property.dot.viml'},
        {match: '&(?=\\w+)', name: 'punctuation.definition.option.viml'}
      ]
    },
    extraVimFunc: {
      match:
        '(?x)\\b\n\t((?:echo(?:hl?)?)|exe(?:c(?:ute)?)?|smapc(?:lear)?|mapmode|(?:[xs]un)map\n\t|Plugin|autocmd|[cinvo]?(?:un|nore)?menu|(?:range)?go(?:to)?|(?:count)?(?:pop?|tag?|tn(?:ext)?|tp(?:revious)?|tr(?:ewind)?)\n\t|(?:range)?(?:s(?:ubstitute)?|ret(?:ab)?|g(?:lobal)?)|unm(?:ap)?|map_l|mapc(?:lear)?|N?buffer|N?bnext|N?bNext|N?bprevious|N?bmod\n\t|ab(?:breviate)?|norea(?:bbrev)?|[ic](?:un|nore)?ab|split_f|rangefold|[ic](?:un|nore)?ab|[ic]abbrev|edit_f|next_f|[vcoxli]u\n\t|(?:range)?(?:w(?:rite)?|up(?:date)?)|sar|lunmap|lear|ap|nun|sunm)\n\\b',
      name: 'support.function.viml'
    },
    extraVimOptions: {
      match:
        '(?x)\\b (no)?\n\t(altwerase|bf|escapetime|extended|filec|iclower|keytime|leftright|li|lock|noprint|octal|recdir|searchincr\n\t|shellmeta|ttywerase|windowname|wl|wraplen)\n\\b',
      name: 'support.variable.option.viml'
    },
    filetype: {
      captures: {
        1: {name: 'support.function.command.viml'},
        2: {name: 'support.variable.option.viml'},
        3: {name: 'storage.modifier.fallback.viml'},
        4: {name: 'keyword.operator.assignment.viml'},
        5: {name: 'variable.parameter.function.filetype.viml'}
      },
      match:
        '\\b(?:(setf|setfiletype)(?:\\s+(FALLBACK))?\\s+|(ft|filetype)\\s*(=))([.\\w]+)'
    },
    funcDef: {
      patterns: [
        {
          match: '\\b(fu(nc?|nction)?|end(f|fu|func?|function)?)\\b',
          name: 'storage.function.viml'
        },
        {
          captures: {
            1: {name: 'storage.modifier.scope.viml'},
            2: {name: 'punctuation.definition.scope.key-value.viml'}
          },
          match: '(?:([sSgGbBwWtTlL]?(:))?[\\w#]+)(?=\\()',
          name: 'entity.name.function.viml'
        },
        {
          match: '(?<=\\)|\\s)(abort|dict|closure|range)(?=\\s|$)',
          name: 'storage.modifier.$1.function.viml'
        }
      ]
    },
    hashbang: {
      begin: '\\A#!',
      beginCaptures: {0: {name: 'punctuation.definition.comment.shebang.viml'}},
      end: '$',
      name: 'comment.line.shebang.viml'
    },
    highlightLink: {
      captures: {
        1: {name: 'punctuation.separator.key-value.colon.viml'},
        2: {name: 'support.function.highlight.viml'},
        3: {name: 'storage.modifier.force.viml'},
        4: {name: 'support.function.highlight-default.viml'},
        5: {name: 'support.function.highlight-link.viml'},
        6: {name: 'variable.parameter.group-name.viml'},
        7: {name: 'support.constant.highlighting.viml'},
        8: {name: 'variable.parameter.group-name.viml'}
      },
      match:
        '(?x)^\\s* (:)? \\s*              (?# 1: punctuation.separator.key-value.colon.viml) (hi|highlight)         (?# 2: support.function.highlight.viml) (!)?                   (?# 3: storage.modifier.force.viml) (?:\\s+(def|default))? (?# 4: support.function.highlight-default.viml) (?:\\s+(link))         (?# 5: support.function.highlight-link.viml) (?:\\s+([-\\w]+))      (?# 6: variable.parameter.group-name.viml) (?:\\s+(?:(NONE)|([-\\w]+)))?'
    },
    keymapping: {
      patterns: [
        {
          begin:
            '(?x) \\b\n( [cito]?no(?:remap)?\n| [cilnovx]m(?:ap)?\n| [lnvx]n(?:oremap)?\n| no(?:remap)?!\n| snor(?:emap)?\n| map!?\n| smap\n| tmap?\n) (?:(?<=!)|\\b)\n\n# Special <modifier> keywords not considered part of {lhs}\n(?i: \\s* (\n\t(<)\n\t( buffer\n\t| expr\n\t| (?:local)?leader\n\t| nowait\n\t| plug\n\t| script\n\t| sid\n\t| silent\n\t| unique\n\t) (>)\n))?\n\n# Bound key(s)\n(?:\\s+ (\\S+))?\n[ \\t]*',
          beginCaptures: {
            1: {name: 'storage.type.keymapping.viml'},
            2: {name: 'storage.modifier.${4:/downcase}.viml'},
            3: {name: 'punctuation.definition.modifier.begin.viml'},
            5: {name: 'punctuation.definition.modifier.end.viml'},
            6: {
              name: 'entity.name.tag.keymapping.lhs.viml',
              patterns: [{include: '#supportType'}]
            }
          },
          contentName: 'string.unquoted.keymapping.rhs.viml',
          end: '^(?!\\G|\\s*\\\\)',
          name: 'meta.keymapping.viml',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.escape.newline.viml'},
                2: {name: 'punctuation.definition.escape.viml'}
              },
              match: '(?!\\G)^\\s*((\\\\))'
            },
            {include: '#supportType'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.keymapping.viml'},
            2: {
              name: 'entity.name.tag.keymapping.lhs.viml',
              patterns: [{include: '#supportType'}]
            }
          },
          match:
            '(?x) \\b\n( s?unm(?:ap)?\n| [cilovx]u(?:nmap)?\n| nun(?:map)?\n| tunmap?\n| unmap!\n) (?:(?<=!)|\\b)\n(?:\\s+(\\S+))?',
          name: 'meta.keymapping.viml'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '\\b(if|while|for|return|try|catch|finally|finish|end(if|for|while|try)?|else(if)?|do|in|:)\\b',
          name: 'keyword.control.$1.viml'
        },
        {match: '\\b(unlet)\\b', name: 'keyword.operator.$1.viml'},
        {match: '\\blet\\b', name: 'storage.type.let.viml'},
        {
          match: '(?<=^|\\n)UseVimball(?=\\s*$)',
          name: 'support.constant.vimball.use.viml'
        }
      ]
    },
    keywordLists: {
      patterns: [
        {include: '#vimTodo'},
        {include: '#vimAugroupKey'},
        {include: '#vimAutoEvent'},
        {include: '#vimBehaveModel'},
        {include: '#vimCommand'},
        {include: '#vimFTCmd'},
        {include: '#vimFTOption'},
        {include: '#vimFgBgAttrib'},
        {include: '#vimFuncKey'},
        {include: '#vimFuncName'},
        {include: '#vimGroup'},
        {include: '#vimGroupSpecial'},
        {include: '#vimHLGroup'},
        {include: '#vimHiAttrib'},
        {include: '#vimHiClear'},
        {include: '#vimHiCtermColor'},
        {include: '#vimMapModKey'},
        {include: '#vimOption'},
        {include: '#vimPattern'},
        {include: '#vimStdPlugin'},
        {include: '#vimSynCase'},
        {include: '#vimSynType'},
        {include: '#vimSyncC'},
        {include: '#vimSyncLinecont'},
        {include: '#vimSyncMatch'},
        {include: '#vimSyncNone'},
        {include: '#vimSyncRegion'},
        {include: '#vimUserAttrbCmplt'},
        {include: '#vimUserAttrbKey'},
        {include: '#vimUserCommand'},
        {include: '#vimErrSetting'},
        {include: '#vimFuncEcho'}
      ]
    },
    main: {
      patterns: [
        {include: '#vimTodo'},
        {include: '#comments'},
        {include: '#modelines'},
        {include: '#pathname'},
        {include: '#escape'},
        {include: '#strings'},
        {include: '#hashbang'},
        {include: '#numbers'},
        {include: '#syntax'},
        {include: '#highlightLink'},
        {include: '#funcDef'},
        {include: '#auCmd'},
        {include: '#auGroup'},
        {include: '#parameter'},
        {include: '#assignment'},
        {include: '#expr'},
        {include: '#keymapping'},
        {include: '#keyword'},
        {include: '#register'},
        {include: '#filetype'},
        {include: '#variable'},
        {include: '#supportType'},
        {include: '#supportVariable'},
        {include: '#extraVimOptions'},
        {include: '#extraVimFunc'},
        {include: '#keywordLists'}
      ]
    },
    modelines: {
      patterns: [
        {
          begin:
            '(?:(?:\\s|^)vi(?:m[<=>]?\\d+|m)?|[\\t\\x20]ex):\\s*(?=set?\\s)',
          end: ':|$',
          name: 'string.other.modeline.viml',
          patterns: [{include: '#main'}]
        },
        {
          begin: '(?:(?:\\s|^)vi(?:m[<=>]?\\d+|m)?|[\\t\\x20]ex):',
          end: '$',
          name: 'string.other.modeline.viml',
          patterns: [{include: '#main'}]
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '0[xX][0-9A-Fa-f]+', name: 'constant.numeric.hex.short.viml'},
        {match: '0[zZ][0-9A-Fa-f]+', name: 'constant.numeric.hex.long.viml'},
        {
          match: '(?<!\\w)-?\\d+\\.\\d+[eE][-+]?\\d+',
          name: 'constant.numeric.float.exponential.viml'
        },
        {match: '(?<!\\w)-?\\d+\\.\\d+', name: 'constant.numeric.float.viml'},
        {match: '(?<!\\w)-?\\d+', name: 'constant.numeric.integer.viml'}
      ]
    },
    parameter: {
      captures: {
        1: {name: 'punctuation.definition.parameter.viml'},
        2: {name: 'entity.name.parameter.viml'},
        3: {name: 'punctuation.assignment.parameter.viml'}
      },
      match: '(-)(\\w+)(=)',
      name: 'meta.parameter.viml'
    },
    pathname: {begin: '~/', end: '(?=\\s)', name: 'constant.pathname.viml'},
    regex: {
      begin: '(?<=\\s|=)(\\S)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.viml'}},
      end: '$|(\\1)(\\S*)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.viml'},
        2: {patterns: [{include: '#regexOffset'}]}
      },
      name: 'string.regexp.viml',
      patterns: [{include: '#regexInnards'}]
    },
    regexInnards: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.character-class.begin.viml'}
          },
          end: '\\]|$',
          endCaptures: {
            0: {name: 'punctuation.definition.character-class.end.viml'}
          },
          patterns: [{include: '#regexInnards'}]
        },
        {
          captures: {1: {name: 'punctuation.definition.backslash.escape.viml'}},
          match: '(\\\\).',
          name: 'constant.character.escape.viml'
        }
      ]
    },
    regexOffset: {
      captures: {
        1: {name: 'constant.language.pattern-offset.viml'},
        2: {name: 'punctuation.assignment.parameter.viml'},
        3: {name: 'constant.numeric.integer.viml'},
        4: {name: 'constant.language.pattern-position.viml'},
        5: {name: 'keyword.operator.arithmetic.viml'},
        6: {name: 'constant.numeric.integer.viml'},
        7: {name: 'punctuation.separator.comma.viml'}
      },
      match: '(ms|me|hs|he|rs|re|lc)(=)(?:(\\d+)|([se])(?:([-+])(\\d+))?)(,)?',
      name: 'meta.pattern-offset.viml'
    },
    register: {
      captures: {1: {name: 'punctuation.definition.register.viml'}},
      match: '(@)([-"A-Za-z\\d:.%#=*+~_/])',
      name: 'variable.other.register.viml'
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.viml'},
            2: {name: 'punctuation.definition.string.end.viml'}
          },
          match: '(")(")',
          name: 'string.quoted.double.empty.viml'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.viml'},
            2: {name: 'punctuation.definition.string.end.viml'}
          },
          match: "(')(')",
          name: 'string.quoted.single.empty.viml'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.viml'},
            2: {patterns: [{include: '#escape'}]},
            3: {name: 'punctuation.definition.string.end.viml'}
          },
          match: '(")((?:[^\\\\"]|\\\\.)*)(")',
          name: 'string.quoted.double.viml'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.viml'},
            2: {
              patterns: [
                {match: "''", name: 'constant.character.escape.quotes.viml'}
              ]
            },
            3: {name: 'punctuation.definition.string.end.viml'}
          },
          match: "(')((?:[^']|'')*)(')",
          name: 'string.quoted.single.viml'
        },
        {
          captures: {
            1: {name: 'punctuation.section.regexp.begin.viml'},
            2: {name: 'punctuation.section.regexp.end.viml'}
          },
          match: '(/)(?:\\\\\\\\|\\\\/|[^\\n/])*(/)',
          name: 'string.regexp.interpolated.viml'
        }
      ]
    },
    supportType: {
      captures: {
        1: {name: 'punctuation.definition.bracket.angle.begin.viml'},
        2: {name: 'punctuation.definition.bracket.angle.end.viml'}
      },
      match: '(<).*?(>)',
      name: 'entity.tag.name.viml'
    },
    supportVariable: {
      match:
        '\\b(?:am(?:enu)?|(?:hl|inc)?search|[Bb]uf(?:[Nn]ew[Ff]ile|[Rr]ead)?|[Ff]ile[Tt]ype)\\b',
      name: 'support.variable.viml'
    },
    syntax: {
      begin: '^\\s*(:)?(?:(VimFold\\w)\\s+)?\\s*(syntax|syn?)(?=\\s|$)',
      beginCaptures: {
        1: {name: 'punctuation.separator.key-value.colon.viml'},
        2: {name: 'support.function.fold-command.viml'},
        3: {name: 'storage.type.syntax-item.viml'}
      },
      end: '$',
      name: 'meta.syntax-item.viml',
      patterns: [
        {
          captures: {
            1: {name: 'support.function.syntax-case.viml'},
            2: {name: 'support.constant.$2-case.viml'}
          },
          match: '\\G\\s+(case)(?:\\s+(match|ignore))?(?=\\s|$)'
        },
        {
          captures: {
            1: {name: 'support.function.syntax-spellcheck.viml'},
            2: {name: 'support.constant.$2-checking.viml'}
          },
          match: '\\G\\s+(spell)(?:\\s+(toplevel|notoplevel|default))?(?=\\s|$)'
        },
        {
          begin: '\\G\\s+(keyword)(?:\\s+([-\\w]+))?',
          beginCaptures: {
            1: {name: 'support.function.syntax-keywords.viml'},
            2: {name: 'variable.parameter.group-name.viml'}
          },
          contentName: 'keyword.other.syntax-definition.viml',
          end: '(?=$)',
          patterns: [
            {include: '#syntaxOptions'},
            {include: '#assignment'},
            {include: '#expr'}
          ]
        },
        {
          begin: '\\G\\s+(match)(?:\\s+([-\\w]+))?\\s*',
          beginCaptures: {
            1: {name: 'support.function.syntax-match.viml'},
            2: {name: 'variable.parameter.group-name.viml'}
          },
          end: '(?=$)',
          patterns: [{include: '#syntaxRegex'}]
        },
        {
          begin: '\\G\\s+(region)(?:\\s+([-\\w]+))?',
          beginCaptures: {
            1: {name: 'support.function.syntax-region.viml'},
            2: {name: 'variable.parameter.group-name.viml'}
          },
          end: '(?=$)',
          patterns: [{include: '#syntaxOptions'}, {include: '#main'}]
        },
        {
          begin: '\\G\\s+(cluster)(?:\\s+([-\\w]+))?(?=\\s|$)',
          beginCaptures: {
            1: {name: 'support.function.syntax-cluster.viml'},
            2: {name: 'variable.parameter.group-name.viml'}
          },
          end: '(?=$)',
          patterns: [{include: '#syntaxOptions'}, {include: '#main'}]
        },
        {
          captures: {
            1: {name: 'support.function.syntax-conceal.viml'},
            2: {name: 'support.constant.boolean.$2.viml'}
          },
          match: '\\G\\s+(conceal)(?:\\s+(on|off)(?=\\s|$))?'
        },
        {
          captures: {
            1: {name: 'support.function.syntax-include.viml'},
            2: {name: 'variable.parameter.group-name.viml'},
            3: {name: 'punctuation.definition.group-reference.viml'},
            4: {
              name: 'string.unquoted.filename.viml',
              patterns: [{include: '#supportType'}]
            }
          },
          match: '\\G\\s+(include)(?:\\s+((@)?[-\\w]+))?(?:\\s+(\\S+))?'
        },
        {
          begin: '\\G\\s+(sync)(?=\\s|$)',
          beginCaptures: {1: {name: 'support.function.syntax-sync.viml'}},
          end: '$',
          patterns: [
            {
              captures: {1: {name: 'support.constant.sync-$1.viml'}},
              match: '\\G\\s+(fromstart)(?=\\s|$)'
            },
            {
              captures: {
                1: {name: 'support.constant.sync-$1.viml'},
                2: {name: 'variable.parameter.group-name.viml'}
              },
              match: '\\G\\s+(ccomment|clear)(?:\\s+(?![-\\w]+\\s*=)([-\\w]+))?'
            },
            {
              captures: {
                1: {name: 'support.constant.sync-mode.viml'},
                2: {name: 'punctuation.assignment.parameter.viml'},
                3: {name: 'constant.numeric.integer.viml'}
              },
              match: '\\G\\s+(minlines|lines)\\s*(=)(\\d*)'
            },
            {
              captures: {
                1: {name: 'support.constant.sync-mode.viml'},
                2: {name: 'variable.parameter.group-name.viml'},
                3: {name: 'support.constant.sync-mode-location.viml'}
              },
              match:
                '(?x)\\G\\s+(match|region)(?:\\s+(?![-\\w]+\\s*=)([-\\w]+))?'
            },
            {
              begin:
                '(?<=\\s)(groupt?here|linecont)(?:\\s+(?![-\\w]+\\s*=)([-\\w]+))?(?=\\s|$)',
              beginCaptures: {
                1: {name: 'support.constant.sync-match.viml'},
                2: {name: 'variable.parameter.group-name.viml'}
              },
              end: '(?=$)',
              patterns: [{include: '#syntaxRegex'}]
            },
            {include: '#syntaxOptions'}
          ]
        },
        {include: '#main'}
      ]
    },
    syntaxOptions: {
      patterns: [
        {
          begin: '(?<=\\s)(start|skip|end)(?:\\s*(=))',
          beginCaptures: {
            1: {name: 'support.constant.$1-pattern.viml'},
            2: {name: 'punctuation.assignment.parameter.viml'}
          },
          end: '(?=$|\\s)',
          name: 'meta.syntax-item.pattern-argument.viml',
          patterns: [{include: '#regex'}]
        },
        {
          captures: {
            1: {name: 'support.constant.syntax-$1.viml'},
            2: {name: 'punctuation.assignment.parameter.viml'},
            3: {
              name: 'string.unquoted.syntax-option.viml',
              patterns: [
                {include: '#numbers'},
                {match: ',', name: 'punctuation.separator.comma.viml'},
                {
                  match: '@',
                  name: 'punctuation.definition.group-reference.viml'
                }
              ]
            }
          },
          match:
            '(?x)(?<=\\s)\n((?:matchgroup|contains|containedin|nextgroup|add|remove|minlines|linebreaks|maxlines)(?=\\s*=)\n|(?:cchar|conceal|concealends|contained|display|excludenl|extend|fold|keepend|oneline|skipempty|skipnl|skipwhite|transparent))\n(?:(?=$|\\s)|\\s*(=)(\\S*)?)',
          name: 'meta.syntax-item.argument.viml'
        }
      ]
    },
    syntaxRegex: {
      patterns: [
        {include: '#syntaxOptions'},
        {
          begin: '(?<=\\s)(\\S)',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.viml'}
          },
          end: '(?:(\\1)(\\S*)(.*))?$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.viml'},
            2: {patterns: [{include: '#regexOffset'}]},
            3: {patterns: [{include: '#syntaxOptions'}, {include: '#main'}]}
          },
          name: 'string.regexp.viml',
          patterns: [{include: '#regexInnards'}]
        }
      ]
    },
    variable: {
      patterns: [
        {match: '\\b(self)\\b', name: 'variable.language.self.viml'},
        {
          captures: {1: {name: 'punctuation.definition.variable.viml'}},
          match: '(\\$)\\w+',
          name: 'support.variable.environment.viml'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.reference.viml'},
            2: {name: 'storage.modifier.scope.viml'},
            3: {name: 'punctuation.definition.scope.key-value.viml'}
          },
          match: '(&?)(?:([sSgGbBwWlLaAvV](:))|[@$]|&(?!&))\\w*',
          name: 'variable.other.viml'
        }
      ]
    },
    vimAugroupKey: {
      match: '(?x) \\b\n( aug\n| augroup\n) \\b',
      name: 'support.function.vimAugroupKey.viml'
    },
    vimAutoEvent: {
      match:
        '(?xi) \\b\n( BufAdd\n| BufCreate\n| BufDelete\n| BufEnter\n| BufFilePost\n| BufFilePre\n| BufHidden\n| BufLeave\n| BufNewFile\n| BufNew\n| BufReadCmd\n| BufReadPost\n| BufReadPre\n| BufRead\n| BufUnload\n| BufWinEnter\n| BufWinLeave\n| BufWipeout\n| BufWriteCmd\n| BufWritePost\n| BufWritePre\n| BufWrite\n| CmdUndefined\n| CmdlineChanged\n| CmdlineEnter\n| CmdlineLeave\n| CmdwinEnter\n| CmdwinLeave\n| ColorSchemePre\n| ColorScheme\n| CompleteChanged\n| CompleteDonePre\n| CompleteDone\n| CursorHoldI\n| CursorHold\n| CursorMovedI\n| CursorMoved\n| DiffUpdated\n| DirChangedPre\n| DirChanged\n| EncodingChanged\n| ExitPre\n| FileAppendCmd\n| FileAppendPost\n| FileAppendPre\n| FileChangedRO\n| FileChangedShellPost\n| FileChangedShell\n| FileEncoding\n| FileExplorer\n| FileReadCmd\n| FileReadPost\n| FileReadPre\n| FileType\n| FileWriteCmd\n| FileWritePost\n| FileWritePre\n| FilterReadPost\n| FilterReadPre\n| FilterWritePost\n| FilterWritePre\n| FocusGained\n| FocusLost\n| FuncUndefined\n| GUIEnter\n| GUIFailed\n| InsertChange\n| InsertCharPre\n| InsertEnter\n| InsertLeavePre\n| InsertLeave\n| MenuPopup\n| ModeChanged\n| OptionSet\n| QuickFixCmdPost\n| QuickFixCmdPre\n| QuitPre\n| RemoteReply\n| SafeStateAgain\n| SafeState\n| SessionLoadPost\n| ShellCmdPost\n| ShellFilterPost\n| SigUSR1\n| SourceCmd\n| SourcePost\n| SourcePre\n| SpellFileMissing\n| StdinReadPost\n| StdinReadPre\n| SwapExists\n| Syntax\n| TabClosed\n| TabEnter\n| TabLeave\n| TabNew\n| TermChanged\n| TermResponse\n| TerminalOpen\n| TerminalWinOpen\n| TextChangedI\n| TextChangedP\n| TextChangedT\n| TextChanged\n| TextYankPost\n| User\n| VimEnter\n| VimLeavePre\n| VimLeave\n| VimResized\n| VimResume\n| VimSuspend\n| WinClosed\n| WinEnter\n| WinLeave\n| WinNew\n| WinResized\n| WinScrolled\n) \\b',
      name: 'support.function.auto-event.viml'
    },
    vimBehaveModel: {
      match: '(?x) \\b\n( mswin\n| xterm\n) \\b',
      name: 'support.function.vimBehaveModel.viml'
    },
    vimCommand: {
      match:
        '(?x) \\b\n( abc\n| abclear\n| abo\n| aboveleft\n| abstract\n| ab\n| addd\n| all?\n| ar\n| args\n| arga\n| argadd\n| argd\n| argdelete\n| argded\n| argdedupe\n| argdo\n| arge\n| argedit\n| argg\n| argglobal\n| argl\n| arglocal\n| argu\n| argument\n| as\n| ascii\n| au\n| a\n| bN\n| bNext\n| b\n| buffer\n| ba\n| ball\n| badd?\n| balt\n| bd\n| bdelete\n| bel\n| belowright\n| bf\n| bfirst\n| bl\n| blast\n| bm\n| bmodified\n| bn\n| bnext\n| bo\n| botright\n| bp\n| bprevious\n| br\n| brewind\n| break?\n| breaka\n| breakadd\n| breakd\n| breakdel\n| breakl\n| breaklist\n| bro\n| browse\n| bufdo\n| buffers\n| bun\n| bunload\n| bw\n| bwipeout\n| cN\n| cNext\n| cNf\n| cNfile\n| c\n| change\n| cabc\n| cabclear\n| cabo\n| cabove\n| cad\n| caddbuffer\n| cadde\n| caddexpr\n| caddf\n| caddfile\n| caf\n| cafter\n| call?\n| cat\n| catch\n| ca\n| cb\n| cbuffer\n| cbe\n| cbefore\n| cbel\n| cbelow\n| cbo\n| cbottom\n| ccl\n| cclose\n| cc\n| cdo\n| cd\n| ce\n| center\n| cex\n| cexpr\n| cf\n| cfile\n| cfdo\n| cfir\n| cfirst\n| cg\n| cgetfile\n| cgetb\n| cgetbuffer\n| cgete\n| cgetexpr\n| changes\n| chd\n| chdir\n| che\n| checkpath\n| checkt\n| checktime\n| chi\n| chistory\n| cl\n| clist\n| cla\n| clast\n| class\n| cle\n| clearjumps\n| clo\n| close\n| cmapc\n| cmapclear\n| cn\n| cnext\n| cnew\n| cnewer\n| cnf\n| cnfile\n| cnor\n| co\n| copy\n| col\n| colder\n| colo\n| colorscheme\n| comc\n| comclear\n| comp\n| compiler\n| com\n| con\n| continue\n| conf\n| confirm\n| const?\n| copen?\n| cp\n| cprevious\n| cpf\n| cpfile\n| cq\n| cquit\n| cr\n| crewind\n| cscope\n| cstag\n| cs\n| cuna\n| cunabbrev\n| cun\n| cw\n| cwindow\n| d\n| delete\n| debugg\n| debuggreedy\n| debug\n| defc\n| defcompile\n| defer\n| def\n| delc\n| delcommand\n| delel\n| delep\n| deletel\n| deletep\n| deletl\n| deletp\n| delf\n| delfunction\n| dell\n| delm\n| delmarks\n| delp\n| dep\n| di\n| display\n| dif\n| diffupdate\n| diffg\n| diffget\n| diffo\n| diffoff\n| diffp\n| diffpatch\n| diffput?\n| diffs\n| diffsplit\n| difft\n| diffthis\n| dig\n| digraphs\n| dir\n| disa\n| disassemble\n| dj\n| djump\n| dli\n| dlist\n| dl\n| doaut\n| doau\n| do\n| dp\n| dr\n| drop\n| ds\n| dsearch\n| dsp\n| dsplit\n| e\n| edit\n| earlier\n| ea\n| echoc\n| echoconsole\n| echoe\n| echoerr\n| echom\n| echomsg\n| echon\n| echow\n| echowindow\n| ec\n| el\n| else\n| elseif?\n| em\n| emenu\n| en\n| endif\n| endclass\n| enddef\n| endenum\n| endf\n| endfunction\n| endfor?\n| endinterface\n| endt\n| endtry\n| endw\n| endwhile\n| enew?\n| enum\n| eval\n| exit?\n| export\n| exp\n| exu\n| exusage\n| ex\n| f\n| file\n| files\n| filetype\n| filet\n| filt\n| filter\n| find?\n| fina\n| finally\n| fini\n| finish\n| fir\n| first\n| fix\n| fixdel\n| fo\n| fold\n| foldc\n| foldclose\n| foldd\n| folddoopen\n| folddoc\n| folddoclosed\n| foldo\n| foldopen\n| for\n| fu\n| function\n| go\n| goto\n| gr\n| grep\n| grepa\n| grepadd\n| gui\n| gvim\n| h\n| help\n| ha\n| hardcopy\n| helpc\n| helpclose\n| helpf\n| helpfind\n| helpg\n| helpgrep\n| helpt\n| helptags\n| hide?\n| his\n| history\n| hi\n| hor\n| horizontal\n| iabc\n| iabclear\n| ia\n| if\n| ij\n| ijump\n| il\n| ilist\n| imapc\n| imapclear\n| import\n| imp\n| inor\n| interface\n| intro\n| in\n| is\n| isearch\n| isp\n| isplit\n| iuna\n| iunabbrev\n| i\n| j\n| join\n| ju\n| jumps\n| kee\n| keepmarks\n| keepalt\n| keepa\n| keepj\n| keepjumps\n| keepp\n| keeppatterns\n| k\n| lN\n| lNext\n| lNf\n| lNfile\n| l\n| list\n| la\n| last\n| lab\n| labove\n| lad\n| laddexpr\n| laddb\n| laddbuffer\n| laddf\n| laddfile\n| laf\n| lafter\n| lan\n| language\n| later\n| lat\n| lb\n| lbuffer\n| lbe\n| lbefore\n| lbel\n| lbelow\n| lbo\n| lbottom\n| lcd?\n| lch\n| lchdir\n| lcl\n| lclose\n| lcscope\n| lcs\n| ldo?\n| le\n| left\n| lefta\n| leftabove\n| leg\n| legacy\n| lex\n| lexpr\n| lf\n| lfile\n| lfdo\n| lfir\n| lfirst\n| lg\n| lgetfile\n| lgetb\n| lgetbuffer\n| lgete\n| lgetexpr\n| lgr\n| lgrep\n| lgrepa\n| lgrepadd\n| lh\n| lhelpgrep\n| lhi\n| lhistory\n| lla\n| llast\n| lli\n| llist\n| ll\n| lmake?\n| lmapc\n| lmapclear\n| lma\n| lne\n| lnext\n| lnew\n| lnewer\n| lnf\n| lnfile\n| lo\n| loadview\n| loadk\n| loadkeymap\n| loadkeymap\n| loadk\n| loc\n| lockmarks\n| lockv\n| lockvar\n| lol\n| lolder\n| lop\n| lopen\n| lp\n| lprevious\n| lpf\n| lpfile\n| lr\n| lrewind\n| ls\n| lt\n| ltag\n| luado\n| luafile\n| lua\n| lv\n| lvimgrep\n| lvimgrepa\n| lvimgrepadd\n| lw\n| lwindow\n| m\n| move\n| ma\n| mark\n| make?\n| marks\n| mat\n| match\n| menut\n| menutranslate\n| mes\n| messages\n| mk\n| mkexrc\n| mks\n| mksession\n| mksp\n| mkspell\n| mkv\n| mkvimrc\n| mkview?\n| mode?\n| mz\n| mzscheme\n| mzf\n| mzfile\n| n\n| next\n| nb\n| nbkey\n| nbc\n| nbclose\n| nbs\n| nbstart\n| new\n| nmapc\n| nmapclear\n| noautocmd\n| noa\n| noh\n| nohlsearch\n| nore\n| nor\n| nos\n| noswapfile\n| nu\n| number\n| o\n| open\n| ol\n| oldfiles\n| omapc\n| omapclear\n| on\n| only\n| opt\n| options\n| ownsyntax\n| p\n| print\n| pa\n| packadd\n| packl\n| packloadall\n| pc\n| pclose\n| pe\n| perl\n| ped\n| pedit\n| perldo?\n| pop?\n| popup?\n| pp\n| ppop\n| pre\n| preserve\n| prev\n| previous\n| prof\n| profile\n| profd\n| profdel\n| promptf\n| promptfind\n| promptr\n| promptrepl\n| pro\n| ps\n| psearch\n| ptN\n| ptNext\n| ptag?\n| ptf\n| ptfirst\n| ptj\n| ptjump\n| ptl\n| ptlast\n| ptn\n| ptnext\n| ptp\n| ptprevious\n| ptr\n| ptrewind\n| pts\n| ptselect\n| put?\n| public\n| pwd?\n| py3do\n| py3f\n| py3file\n| py3\n| py\n| python\n| pydo\n| pyf\n| pyfile\n| python3\n| pythonx\n| pyxdo\n| pyxfile\n| pyx\n| q\n| quit\n| qa\n| qall\n| quita\n| quitall\n| r\n| read\n| rec\n| recover\n| redo?\n| redir?\n| redr\n| redraw\n| redraws\n| redrawstatus\n| redrawt\n| redrawtabline\n| reg\n| registers\n| res\n| resize\n| ret\n| retab\n| retu\n| return\n| rew\n| rewind\n| ri\n| right\n| rightb\n| rightbelow\n| ru\n| runtime\n| ruby?\n| rubydo?\n| rubyf\n| rubyfile\n| rundo\n| rv\n| rviminfo\n| sIc\n| sIe\n| sIg\n| sIl\n| sIn\n| sIp\n| sIr\n| sI\n| sN\n| sNext\n| sa\n| sargument\n| sall?\n| san\n| sandbox\n| sav\n| saveas\n| sbN\n| sbNext\n| sb\n| sbuffer\n| sba\n| sball\n| sbf\n| sbfirst\n| sbl\n| sblast\n| sbm\n| sbmodified\n| sbn\n| sbnext\n| sbp\n| sbprevious\n| sbr\n| sbrewind\n| scI\n| sce\n| scg\n| sci\n| scl\n| scp\n| scr\n| scriptnames\n| scripte\n| scriptencoding\n| scriptv\n| scriptversion\n| scscope\n| scs\n| sc\n| set?\n| setf\n| setfiletype\n| setg\n| setglobal\n| setl\n| setlocal\n| sf\n| sfind\n| sfir\n| sfirst\n| sgI\n| sgc\n| sge\n| sgi\n| sgl\n| sgn\n| sgp\n| sgr\n| sg\n| sh\n| shell\n| sic\n| sie\n| sign\n| sig\n| sil\n| silent\n| sim\n| simalt\n| sin\n| sip\n| sir\n| si\n| sl\n| sleep\n| sla\n| slast\n| sm\n| smagic\n| sm\n| smap\n| smenu\n| sme\n| smile\n| sn\n| snext\n| sno\n| snomagic\n| snoremenu\n| snoreme\n| so\n| source\n| sort?\n| sp\n| split\n| spe\n| spellgood\n| spelld\n| spelldump\n| spelli\n| spellinfo\n| spellr\n| spellrare\n| spellr\n| spellrepall\n| spellr\n| spellrrare\n| spellu\n| spellundo\n| spellw\n| spellwrong\n| spr\n| sprevious\n| srI\n| src\n| sre\n| srewind\n| srg\n| sri\n| srl\n| srn\n| srp\n| sr\n| st\n| stop\n| stag?\n| star\n| startinsert\n| startg\n| startgreplace\n| startr\n| startreplace\n| static\n| stj\n| stjump\n| stopi\n| stopinsert\n| sts\n| stselect\n| substitutepattern\n| substituterepeat\n| sun\n| sunhide\n| sunmenu\n| sunme\n| sus\n| suspend\n| sv\n| sview\n| sw\n| swapname\n| syncbind\n| sync\n| syntime\n| syn\n| sy\n| tN\n| tNext\n| tag?\n| tabN\n| tabNext\n| tabc\n| tabclose\n| tabdo?\n| tabe\n| tabedit\n| tabf\n| tabfind\n| tabfir\n| tabfirst\n| tabl\n| tablast\n| tabm\n| tabmove\n| tabn\n| tabnext\n| tabnew\n| tabo\n| tabonly\n| tabp\n| tabprevious\n| tabr\n| tabrewind\n| tabs\n| tab\n| tags\n| tcd?\n| tch\n| tchdir\n| tcldo?\n| tclf\n| tclfile\n| tcl\n| te\n| tearoff\n| ter\n| terminal\n| tf\n| tfirst\n| th\n| throw\n| tj\n| tjump\n| tl\n| tlast\n| tlmenu\n| tlm\n| tlnoremenu\n| tln\n| tlunmenu\n| tlu\n| tm\n| tmenu\n| tmap?\n| tmapc\n| tmapclear\n| tn\n| tnext\n| tno\n| tnoremap\n| to\n| topleft\n| tp\n| tprevious\n| tr\n| trewind\n| try\n| ts\n| tselect\n| tu\n| tunmenu\n| tunmap?\n| type\n| t\n| u\n| undo\n| una\n| unabbreviate\n| undoj\n| undojoin\n| undol\n| undolist\n| unh\n| unhide\n| unlo\n| unlockvar\n| unl\n| uns\n| unsilent\n| up\n| update\n| ve\n| version\n| verb\n| verbose\n| vert\n| vertical\n| vi\n| visual\n| view?\n| vim9\n| vim9cmd\n| vim9s\n| vim9script\n| vim\n| vimgrep\n| vimgrepa\n| vimgrepadd\n| viu\n| viusage\n| vnew?\n| vs\n| vsplit\n| v\n| wN\n| wNext\n| w\n| write\n| wa\n| wall\n| wh\n| while\n| win\n| winsize\n| winc\n| wincmd\n| windo\n| winp\n| winpos\n| wi\n| wn\n| wnext\n| wp\n| wprevious\n| wqa\n| wqall\n| wq\n| wundo\n| wv\n| wviminfo\n| x\n| xit\n| xa\n| xall\n| xmapc\n| xmapclear\n| xmenu\n| xme\n| xnoremenu\n| xnoreme\n| xprop\n| xr\n| xrestore\n| xunmenu\n| xunme\n| xwininfo\n| y\n| yank\n| z[^.=]\n) \\b',
      name: 'support.function.command.viml'
    },
    vimErrSetting: {
      match:
        '(?x) \\b\n( autoprint\n| beautify\n| bioskey\n| biosk\n| conskey\n| consk\n| flash\n| graphic\n| hardtabs\n| ht\n| mesg\n| noautoprint\n| nobeautify\n| nobioskey\n| nobiosk\n| noconskey\n| noconsk\n| noflash\n| nographic\n| nohardtabs\n| nomesg\n| nonovice\n| noopen\n| nooptimize\n| noop\n| noredraw\n| noslowopen\n| noslow\n| nosourceany\n| novice\n| now1200\n| now300\n| now9600\n| open\n| optimize\n| op\n| redraw\n| slowopen\n| slow\n| sourceany\n| w1200\n| w300\n| w9600\n) \\b',
      name: 'invalid.deprecated.legacy-setting.viml'
    },
    vimFTCmd: {
      match: '(?x) \\b\n( filet\n| filetype\n) \\b',
      name: 'support.function.vimFTCmd.viml'
    },
    vimFTOption: {
      match: '(?x) \\b\n( detect\n| indent\n| off\n| on\n| plugin\n) \\b',
      name: 'support.function.vimFTOption.viml'
    },
    vimFgBgAttrib: {
      match: '(?x) \\b\n( background\n| bg\n| fg\n| foreground\n| none\n) \\b',
      name: 'support.constant.attribute.viml'
    },
    vimFuncEcho: {
      match: '(?x) \\b\n( echo\n| ech\n| ec\n) \\b',
      name: 'support.function.vimFuncEcho.viml'
    },
    vimFuncKey: {
      match: '(?x) \\b\n( def\n| fu\n| function\n) \\b',
      name: 'support.function.vimFuncKey.viml'
    },
    vimFuncName: {
      match:
        '(?x) \\b\n( abs\n| acos\n| add\n| and\n| appendbufline\n| append\n| argc\n| argidx\n| arglistid\n| argv\n| asin\n| assert_beeps\n| assert_equalfile\n| assert_equal\n| assert_exception\n| assert_fails\n| assert_false\n| assert_inrange\n| assert_match\n| assert_nobeep\n| assert_notequal\n| assert_notmatch\n| assert_report\n| assert_true\n| atan2\n| atan\n| autocmd_add\n| autocmd_delete\n| autocmd_get\n| balloon_gettext\n| balloon_show\n| balloon_split\n| blob2list\n| browsedir\n| browse\n| bufadd\n| bufexists\n| buflisted\n| bufloaded\n| bufload\n| bufname\n| bufnr\n| bufwinid\n| bufwinnr\n| byte2line\n| byteidxcomp\n| byteidx\n| call\n| ceil\n| ch_canread\n| ch_close_in\n| ch_close\n| ch_evalexpr\n| ch_evalraw\n| ch_getbufnr\n| ch_getjob\n| ch_info\n| ch_logfile\n| ch_log\n| ch_open\n| ch_readblob\n| ch_readraw\n| ch_read\n| ch_sendexpr\n| ch_sendraw\n| ch_setoptions\n| ch_status\n| changenr\n| char2nr\n| charclass\n| charcol\n| charidx\n| chdir\n| cindent\n| clearmatches\n| col\n| complete_add\n| complete_check\n| complete_info\n| complete\n| confirm\n| copy\n| cosh\n| cos\n| count\n| cscope_connection\n| cursor\n| debugbreak\n| deepcopy\n| deletebufline\n| delete\n| did_filetype\n| diff_filler\n| diff_hlID\n| digraph_getlist\n| digraph_get\n| digraph_setlist\n| digraph_set\n| echoraw\n| empty\n| environ\n| escape\n| eval\n| eventhandler\n| executable\n| execute\n| exepath\n| exists_compiled\n| exists\n| expandcmd\n| expand\n| expr10\n| exp\n| extendnew\n| extend\n| feedkeys\n| filereadable\n| filewritable\n| filter\n| finddir\n| findfile\n| flattennew\n| flatten\n| float2nr\n| floor\n| fmod\n| fnameescape\n| fnamemodify\n| foldclosedend\n| foldclosed\n| foldlevel\n| foldtextresult\n| foldtext\n| foreground\n| fullcommand\n| funcref\n| function\n| garbagecollect\n| getbufinfo\n| getbufline\n| getbufoneline\n| getbufvar\n| getcellwidths\n| getchangelist\n| getcharmod\n| getcharpos\n| getcharsearch\n| getcharstr\n| getchar\n| getcmdcompltype\n| getcmdline\n| getcmdpos\n| getcmdscreenpos\n| getcmdtype\n| getcmdwintype\n| getcompletion\n| getcurpos\n| getcursorcharpos\n| getcwd\n| getenv\n| getfontname\n| getfperm\n| getfsize\n| getftime\n| getftype\n| getimstatus\n| getjumplist\n| getline\n| getloclist\n| getmarklist\n| getmatches\n| getmousepos\n| getmouseshape\n| getpid\n| getpos\n| getqflist\n| getreginfo\n| getregtype\n| getreg\n| getscriptinfo\n| gettabinfo\n| gettabvar\n| gettabwinvar\n| gettagstack\n| gettext\n| getwininfo\n| getwinposx\n| getwinposy\n| getwinpos\n| getwinvar\n| get\n| glob2regpat\n| globpath\n| glob\n| has_key\n| haslocaldir\n| hasmapto\n| has\n| histadd\n| histdel\n| histget\n| histnr\n| hlID\n| hlexists\n| hlget\n| hlset\n| hostname\n| iconv\n| indent\n| indexof\n| index\n| inputdialog\n| inputlist\n| inputrestore\n| inputsave\n| inputsecret\n| input\n| insert\n| interrupt\n| invert\n| isabsolutepath\n| isdirectory\n| isinf\n| islocked\n| isnan\n| items\n| job_getchannel\n| job_info\n| job_setoptions\n| job_start\n| job_status\n| job_stop\n| join\n| js_decode\n| js_encode\n| json_decode\n| json_encode\n| keys\n| keytrans\n| len\n| libcallnr\n| libcall\n| line2byte\n| line\n| lispindent\n| list2blob\n| list2str\n| listener_add\n| listener_flush\n| listener_remove\n| localtime\n| log10\n| log\n| luaeval\n| maparg\n| mapcheck\n| maplist\n| mapnew\n| mapset\n| map\n| matchaddpos\n| matchadd\n| matcharg\n| matchdelete\n| matchend\n| matchfuzzypos\n| matchfuzzy\n| matchlist\n| matchstrpos\n| matchstr\n| match\n| max\n| menu_info\n| min\n| mkdir\n| mode\n| mzeval\n| nextnonblank\n| nr2char\n| or\n| pathshorten\n| perleval\n| popup_atcursor\n| popup_beval\n| popup_clear\n| popup_close\n| popup_create\n| popup_dialog\n| popup_filter_menu\n| popup_filter_yesno\n| popup_findecho\n| popup_findinfo\n| popup_findpreview\n| popup_getoptions\n| popup_getpos\n| popup_hide\n| popup_list\n| popup_locate\n| popup_menu\n| popup_move\n| popup_notification\n| popup_setoptions\n| popup_settext\n| popup_show\n| pow\n| prevnonblank\n| printf\n| prompt_getprompt\n| prompt_setcallback\n| prompt_setinterrupt\n| prompt_setprompt\n| prop_add_list\n| prop_add\n| prop_clear\n| prop_find\n| prop_list\n| prop_remove\n| prop_type_add\n| prop_type_change\n| prop_type_delete\n| prop_type_get\n| prop_type_list\n| pum_getpos\n| pumvisible\n| py3eval\n| pyeval\n| pyxeval\n| rand\n| range\n| readblob\n| readdirex\n| readdir\n| readfile\n| reduce\n| reg_executing\n| reg_recording\n| reltimefloat\n| reltimestr\n| reltime\n| remote_expr\n| remote_foreground\n| remote_peek\n| remote_read\n| remote_send\n| remote_startserver\n| remove\n| rename\n| repeat\n| resolve\n| reverse\n| round\n| rubyeval\n| screenattr\n| screenchars\n| screenchar\n| screencol\n| screenpos\n| screenrow\n| screenstring\n| searchcount\n| searchdecl\n| searchpairpos\n| searchpair\n| searchpos\n| search\n| server2client\n| serverlist\n| setbufline\n| setbufvar\n| setcellwidths\n| setcharpos\n| setcharsearch\n| setcmdline\n| setcmdpos\n| setcursorcharpos\n| setenv\n| setfperm\n| setline\n| setloclist\n| setmatches\n| setpos\n| setqflist\n| setreg\n| settabvar\n| settabwinvar\n| settagstack\n| setwinvar\n| sha256\n| shellescape\n| shiftwidth\n| sign_define\n| sign_getdefined\n| sign_getplaced\n| sign_jump\n| sign_placelist\n| sign_place\n| sign_undefine\n| sign_unplacelist\n| sign_unplace\n| simplify\n| sinh\n| sin\n| slice\n| sort\n| sound_clear\n| sound_playevent\n| sound_playfile\n| sound_stop\n| soundfold\n| spellbadword\n| spellsuggest\n| split\n| sqrt\n| srand\n| state\n| str2float\n| str2list\n| str2nr\n| strcharlen\n| strcharpart\n| strchars\n| strdisplaywidth\n| strftime\n| strgetchar\n| stridx\n| string\n| strlen\n| strpart\n| strptime\n| strridx\n| strtrans\n| strutf16len\n| strwidth\n| submatch\n| substitute\n| swapfilelist\n| swapinfo\n| swapname\n| synIDattr\n| synIDtrans\n| synID\n| synconcealed\n| synstack\n| systemlist\n| system\n| tabpagebuflist\n| tabpagenr\n| tabpagewinnr\n| tagfiles\n| taglist\n| tanh\n| tan\n| tempname\n| term_dumpdiff\n| term_dumpload\n| term_dumpwrite\n| term_getaltscreen\n| term_getansicolors\n| term_getattr\n| term_getcursor\n| term_getjob\n| term_getline\n| term_getscrolled\n| term_getsize\n| term_getstatus\n| term_gettitle\n| term_gettty\n| term_list\n| term_scrape\n| term_sendkeys\n| term_setansicolors\n| term_setapi\n| term_setkill\n| term_setrestore\n| term_setsize\n| term_start\n| term_wait\n| terminalprops\n| test_alloc_fail\n| test_autochdir\n| test_feedinput\n| test_garbagecollect_now\n| test_garbagecollect_soon\n| test_getvalue\n| test_gui_event\n| test_ignore_error\n| test_mswin_event\n| test_null_blob\n| test_null_channel\n| test_null_dict\n| test_null_function\n| test_null_job\n| test_null_list\n| test_null_partial\n| test_null_string\n| test_option_not_set\n| test_override\n| test_refcount\n| test_setmouse\n| test_settime\n| test_srand_seed\n| test_unknown\n| test_void\n| timer_info\n| timer_pause\n| timer_start\n| timer_stopall\n| timer_stop\n| tolower\n| toupper\n| trim\n| trunc\n| tr\n| typename\n| type\n| undofile\n| undotree\n| uniq\n| utf16idx\n| values\n| virtcol2col\n| virtcol\n| visualmode\n| wildmenumode\n| win_execute\n| win_findbuf\n| win_getid\n| win_gettype\n| win_gotoid\n| win_id2tabwin\n| win_id2win\n| win_move_separator\n| win_move_statusline\n| win_screenpos\n| win_splitmove\n| winbufnr\n| wincol\n| windowsversion\n| winheight\n| winlayout\n| winline\n| winnr\n| winrestcmd\n| winrestview\n| winsaveview\n| winwidth\n| wordcount\n| writefile\n| xor\n) \\b',
      name: 'support.function.viml'
    },
    vimGroup: {
      match:
        '(?xi) \\b\n( Boolean\n| Character\n| Comment\n| Conditional\n| Constant\n| Debug\n| Define\n| Delimiter\n| Error\n| Exception\n| Float\n| Function\n| Identifier\n| Ignore\n| Include\n| Keyword\n| Label\n| Macro\n| Number\n| Operator\n| PreCondit\n| PreProc\n| Repeat\n| SpecialChar\n| SpecialComment\n| Special\n| Statement\n| StorageClass\n| String\n| Structure\n| Tag\n| Todo\n| Typedef\n| Type\n| Underlined\n) \\b',
      name: 'support.type.group.viml'
    },
    vimGroupSpecial: {
      match: '(?x) \\b\n( ALLBUT\n| ALL\n| CONTAINED\n| TOP\n) \\b',
      name: 'support.function.vimGroupSpecial.viml'
    },
    vimHLGroup: {
      match:
        '(?xi) \\b\n( ColorColumn\n| CurSearch\n| CursorColumn\n| CursorIM\n| CursorLineFold\n| CursorLineNr\n| CursorLineSign\n| CursorLine\n| Cursor\n| DiffAdd\n| DiffChange\n| DiffDelete\n| DiffText\n| Directory\n| EndOfBuffer\n| ErrorMsg\n| FoldColumn\n| Folded\n| IncSearch\n| LineNrAbove\n| LineNrBelow\n| LineNr\n| MatchParen\n| Menu\n| MessageWindow\n| ModeMsg\n| MoreMsg\n| NonText\n| Normal\n| PmenuExtraSel\n| PmenuExtra\n| PmenuKindSel\n| PmenuKind\n| PmenuSbar\n| PmenuSel\n| PmenuThumb\n| Pmenu\n| Question\n| QuickFixLine\n| Scrollbar\n| Search\n| SignColumn\n| SpecialKey\n| SpellBad\n| SpellCap\n| SpellLocal\n| SpellRare\n| StatusLineNC\n| StatusLineTermNC\n| StatusLineTerm\n| StatusLine\n| TabLineFill\n| TabLineSel\n| TabLine\n| Terminal\n| Title\n| Tooltip\n| VertSplit\n| VisualNOS\n| Visual\n| WarningMsg\n| WildMenu\n) \\b',
      name: 'support.type.highlight-group.viml'
    },
    vimHiAttrib: {
      match:
        '(?x) \\b\n( bold\n| inverse\n| italic\n| nocombine\n| none\n| reverse\n| standout\n| strikethrough\n| undercurl\n| underline\n) \\b',
      name: 'support.function.vimHiAttrib.viml'
    },
    vimHiClear: {
      match: '(?x) \\b\n( clear\n) \\b',
      name: 'support.function.vimHiClear.viml'
    },
    vimHiCtermColor: {
      match:
        '(?x) \\b\n( black\n| blue\n| brown\n| cyan\n| darkblue\n| darkcyan\n| darkgray\n| darkgreen\n| darkgrey\n| darkmagenta\n| darkred\n| darkyellow\n| gray\n| green\n| grey40\n| grey50\n| grey90\n| grey\n| lightblue\n| lightcyan\n| lightgray\n| lightgreen\n| lightgrey\n| lightmagenta\n| lightred\n| lightyellow\n| magenta\n| red\n| seagreen\n| white\n| yellow\n) \\b',
      name: 'support.constant.colour.color.$1.viml'
    },
    vimMapModKey: {
      match:
        '(?x) \\b\n( buffer\n| expr\n| leader\n| localleader\n| nowait\n| plug\n| script\n| sid\n| silent\n| unique\n) \\b',
      name: 'support.function.vimMapModKey.viml'
    },
    vimOption: {
      match:
        '(?x) \\b\n( acd\n| ai\n| akm\n| aleph\n| allowrevins\n| altkeymap\n| al\n| ambiwidth\n| ambw\n| antialias\n| anti\n| arabicshape\n| arabic\n| arab\n| ari\n| arshape\n| ar\n| asd\n| autochdir\n| autoindent\n| autoread\n| autoshelldir\n| autowriteall\n| autowrite\n| awa\n| aw\n| background\n| backspace\n| backupcopy\n| backupdir\n| backupext\n| backupskip\n| backup\n| balloondelay\n| balloonevalterm\n| ballooneval\n| balloonexpr\n| bdir\n| bdlay\n| belloff\n| bevalterm\n| beval\n| bexpr\n| bex\n| bg\n| bh\n| binary\n| bin\n| bkc\n| bk\n| bl\n| bomb\n| bo\n| breakat\n| breakindentopt\n| breakindent\n| briopt\n| bri\n| brk\n| browsedir\n| bsdir\n| bsk\n| bs\n| bt\n| bufhidden\n| buflisted\n| buftype\n| casemap\n| cb\n| ccv\n| cc\n| cdhome\n| cdh\n| cdpath\n| cd\n| cedit\n| cfu\n| cf\n| charconvert\n| ch\n| cindent\n| cinkeys\n| cink\n| cinoptions\n| cino\n| cinscopedecls\n| cinsd\n| cinwords\n| cinw\n| cin\n| ci\n| clipboard\n| cmdheight\n| cmdwinheight\n| cmp\n| cms\n| cm\n| cocu\n| cole\n| colorcolumn\n| columns\n| commentstring\n| comments\n| compatible\n| completefunc\n| completeopt\n| completepopup\n| completeslash\n| complete\n| com\n| confirm\n| copyindent\n| cot\n| co\n| cpoptions\n| cpo\n| cpp\n| cpt\n| cp\n| crb\n| cryptmethod\n| cscopepathcomp\n| cscopeprg\n| cscopequickfix\n| cscoperelative\n| cscopetagorder\n| cscopetag\n| cscopeverbose\n| csl\n| cspc\n| csprg\n| csqf\n| csre\n| csto\n| cst\n| csverb\n| cuc\n| culopt\n| cul\n| cursorbind\n| cursorcolumn\n| cursorlineopt\n| cursorline\n| cursor\n| cwh\n| debug\n| deco\n| define\n| def\n| delcombine\n| dex\n| dg\n| dictionary\n| dict\n| diffexpr\n| diffopt\n| diff\n| digraph\n| dip\n| directory\n| dir\n| display\n| dy\n| eadirection\n| ead\n| ea\n| eb\n| edcompatible\n| ed\n| efm\n| ef\n| ei\n| ek\n| emoji\n| emo\n| encoding\n| enc\n| endoffile\n| endofline\n| eof\n| eol\n| ep\n| equalalways\n| equalprg\n| errorbells\n| errorfile\n| errorformat\n| esckeys\n| et\n| eventignore\n| expandtab\n| exrc\n| ex\n| fcl\n| fcs\n| fdc\n| fde\n| fdi\n| fdls\n| fdl\n| fdm\n| fdn\n| fdo\n| fdt\n| fencs\n| fenc\n| fen\n| fex\n| ffs\n| ff\n| fic\n| fileencodings\n| fileencoding\n| fileformats\n| fileformat\n| fileignorecase\n| filetype\n| fillchars\n| fixendofline\n| fixeol\n| fkmap\n| fk\n| flp\n| fml\n| fmr\n| foldclose\n| foldcolumn\n| foldenable\n| foldexpr\n| foldignore\n| foldlevelstart\n| foldlevel\n| foldmarker\n| foldmethod\n| foldminlines\n| foldnestmax\n| foldopen\n| foldtext\n| formatexpr\n| formatlistpat\n| formatoptions\n| formatprg\n| fo\n| fp\n| fsync\n| fs\n| ft\n| gcr\n| gdefault\n| gd\n| gfm\n| gfn\n| gfs\n| gfw\n| ghr\n| gli\n| go\n| gp\n| grepformat\n| grepprg\n| gtl\n| gtt\n| guicursor\n| guifontset\n| guifontwide\n| guifont\n| guiheadroom\n| guiligatures\n| guioptions\n| guipty\n| guitablabel\n| guitabtooltip\n| helpfile\n| helpheight\n| helplang\n| hf\n| hh\n| hidden\n| hid\n| highlight\n| history\n| hi\n| hkmapp\n| hkmap\n| hkp\n| hk\n| hlg\n| hlsearch\n| hls\n| hl\n| iconstring\n| icon\n| ic\n| ignorecase\n| imactivatefunc\n| imactivatekey\n| imaf\n| imak\n| imcmdline\n| imc\n| imdisable\n| imd\n| iminsert\n| imi\n| imsearch\n| imsf\n| imstatusfunc\n| imstyle\n| imst\n| ims\n| im\n| includeexpr\n| include\n| incsearch\n| inc\n| indentexpr\n| indentkeys\n| inde\n| indk\n| inex\n| infercase\n| inf\n| insertmode\n| invacd\n| invai\n| invakm\n| invallowrevins\n| invaltkeymap\n| invantialias\n| invanti\n| invarabicshape\n| invarabic\n| invarab\n| invari\n| invarshape\n| invar\n| invasd\n| invautochdir\n| invautoindent\n| invautoread\n| invautoshelldir\n| invautowriteall\n| invautowrite\n| invawa\n| invaw\n| invbackup\n| invballoonevalterm\n| invballooneval\n| invbevalterm\n| invbeval\n| invbinary\n| invbin\n| invbk\n| invbl\n| invbomb\n| invbreakindent\n| invbri\n| invbuflisted\n| invcdhome\n| invcdh\n| invcf\n| invcindent\n| invcin\n| invci\n| invcompatible\n| invconfirm\n| invcopyindent\n| invcp\n| invcrb\n| invcscoperelative\n| invcscopetag\n| invcscopeverbose\n| invcsre\n| invcst\n| invcsverb\n| invcuc\n| invcul\n| invcursorbind\n| invcursorcolumn\n| invcursorline\n| invdeco\n| invdelcombine\n| invdg\n| invdiff\n| invdigraph\n| invea\n| inveb\n| invedcompatible\n| inved\n| invek\n| invemoji\n| invemo\n| invendoffile\n| invendofline\n| inveof\n| inveol\n| invequalalways\n| inverrorbells\n| invesckeys\n| invet\n| invexpandtab\n| invexrc\n| invex\n| invfen\n| invfic\n| invfileignorecase\n| invfixendofline\n| invfixeol\n| invfkmap\n| invfk\n| invfoldenable\n| invfsync\n| invfs\n| invgdefault\n| invgd\n| invguipty\n| invhidden\n| invhid\n| invhkmapp\n| invhkmap\n| invhkp\n| invhk\n| invhlsearch\n| invhls\n| invicon\n| invic\n| invignorecase\n| invimcmdline\n| invimc\n| invimdisable\n| invimd\n| invim\n| invincsearch\n| invinfercase\n| invinf\n| invinsertmode\n| invis\n| invjoinspaces\n| invjs\n| invlangnoremap\n| invlangremap\n| invlazyredraw\n| invlbr\n| invlinebreak\n| invlisp\n| invlist\n| invlnr\n| invloadplugins\n| invlpl\n| invlrm\n| invlz\n| invmacatsui\n| invmagic\n| invma\n| invmh\n| invmle\n| invml\n| invmodelineexpr\n| invmodeline\n| invmodifiable\n| invmodified\n| invmod\n| invmore\n| invmousefocus\n| invmousef\n| invmousehide\n| invmousemev\n| invmousemoveevent\n| invnumber\n| invnu\n| invodev\n| invopendevice\n| invpaste\n| invpi\n| invpreserveindent\n| invpreviewwindow\n| invprompt\n| invpvw\n| invreadonly\n| invrelativenumber\n| invremap\n| invrestorescreen\n| invrevins\n| invrightleft\n| invri\n| invrl\n| invrnu\n| invro\n| invrs\n| invruler\n| invru\n| invsb\n| invscb\n| invscf\n| invscrollbind\n| invscrollfocus\n| invscs\n| invsc\n| invsecure\n| invsft\n| invshellslash\n| invshelltemp\n| invshiftround\n| invshortname\n| invshowcmd\n| invshowfulltag\n| invshowmatch\n| invshowmode\n| invsi\n| invsmartcase\n| invsmartindent\n| invsmarttab\n| invsmd\n| invsmoothscroll\n| invsms\n| invsm\n| invsn\n| invsol\n| invspell\n| invsplitbelow\n| invsplitright\n| invspr\n| invsr\n| invssl\n| invstartofline\n| invsta\n| invstmp\n| invswapfile\n| invswf\n| invtagbsearch\n| invtagrelative\n| invtagstack\n| invta\n| invtbidi\n| invtbi\n| invtbs\n| invtermbidi\n| invtermguicolors\n| invterse\n| invtextauto\n| invtextmode\n| invtf\n| invtgc\n| invtgst\n| invtildeop\n| invtimeout\n| invtitle\n| invtop\n| invto\n| invtr\n| invttimeout\n| invttybuiltin\n| invttyfast\n| invtx\n| invudf\n| invundofile\n| invvb\n| invvisualbell\n| invwarn\n| invwa\n| invwb\n| invweirdinvert\n| invwfh\n| invwfw\n| invwic\n| invwildignorecase\n| invwildmenu\n| invwinfixheight\n| invwinfixwidth\n| invwiv\n| invwmnu\n| invwrapscan\n| invwrap\n| invwriteany\n| invwritebackup\n| invwrite\n| invws\n| invxtermcodes\n| isfname\n| isf\n| isident\n| isi\n| iskeyword\n| isk\n| isprint\n| isp\n| is\n| joinspaces\n| js\n| keymap\n| keymodel\n| keyprotocol\n| keywordprg\n| key\n| kmp\n| km\n| kpc\n| kp\n| langmap\n| langmenu\n| langnoremap\n| langremap\n| laststatus\n| lazyredraw\n| lbr\n| lcs\n| level\n| linebreak\n| linespace\n| lines\n| lispoptions\n| lispwords\n| lisp\n| listchars\n| list\n| lmap\n| lm\n| lnr\n| loadplugins\n| lop\n| lpl\n| lrm\n| lsp\n| ls\n| luadll\n| lw\n| lz\n| macatsui\n| magic\n| makeef\n| makeencoding\n| makeprg\n| matchpairs\n| matchtime\n| mat\n| maxcombine\n| maxfuncdepth\n| maxmapdepth\n| maxmempattern\n| maxmemtot\n| maxmem\n| ma\n| mco\n| mef\n| menc\n| menuitems\n| mfd\n| mh\n| mis\n| mkspellmem\n| mle\n| mls\n| ml\n| mmd\n| mmp\n| mmt\n| mm\n| modelineexpr\n| modelines\n| modeline\n| modifiable\n| modified\n| mod\n| more\n| mousefocus\n| mousef\n| mousehide\n| mousemev\n| mousemodel\n| mousemoveevent\n| mousem\n| mouseshape\n| mouses\n| mousetime\n| mouset\n| mouse\n| mps\n| mp\n| msm\n| mzquantum\n| mzq\n| mzschemedll\n| mzschemegcdll\n| nf\n| noacd\n| noai\n| noakm\n| noallowrevins\n| noaltkeymap\n| noantialias\n| noanti\n| noarabicshape\n| noarabic\n| noarab\n| noari\n| noarshape\n| noar\n| noasd\n| noautochdir\n| noautoindent\n| noautoread\n| noautoshelldir\n| noautowriteall\n| noautowrite\n| noawa\n| noaw\n| nobackup\n| noballoonevalterm\n| noballooneval\n| nobevalterm\n| nobeval\n| nobinary\n| nobin\n| nobk\n| nobl\n| nobomb\n| nobreakindent\n| nobri\n| nobuflisted\n| nocdhome\n| nocdh\n| nocf\n| nocindent\n| nocin\n| noci\n| nocompatible\n| noconfirm\n| nocopyindent\n| nocp\n| nocrb\n| nocscoperelative\n| nocscopetag\n| nocscopeverbose\n| nocsre\n| nocst\n| nocsverb\n| nocuc\n| nocul\n| nocursorbind\n| nocursorcolumn\n| nocursorline\n| nodeco\n| nodelcombine\n| nodg\n| nodiff\n| nodigraph\n| noea\n| noeb\n| noedcompatible\n| noed\n| noek\n| noemoji\n| noemo\n| noendoffile\n| noendofline\n| noeof\n| noeol\n| noequalalways\n| noerrorbells\n| noesckeys\n| noet\n| noexpandtab\n| noexrc\n| noex\n| nofen\n| nofic\n| nofileignorecase\n| nofixendofline\n| nofixeol\n| nofkmap\n| nofk\n| nofoldenable\n| nofsync\n| nofs\n| nogdefault\n| nogd\n| noguipty\n| nohidden\n| nohid\n| nohkmapp\n| nohkmap\n| nohkp\n| nohk\n| nohlsearch\n| nohls\n| noicon\n| noic\n| noignorecase\n| noimcmdline\n| noimc\n| noimdisable\n| noimd\n| noim\n| noincsearch\n| noinfercase\n| noinf\n| noinsertmode\n| nois\n| nojoinspaces\n| nojs\n| nolangnoremap\n| nolangremap\n| nolazyredraw\n| nolbr\n| nolinebreak\n| nolisp\n| nolist\n| nolnr\n| noloadplugins\n| nolpl\n| nolrm\n| nolz\n| nomacatsui\n| nomagic\n| noma\n| nomh\n| nomle\n| noml\n| nomodelineexpr\n| nomodeline\n| nomodifiable\n| nomodified\n| nomod\n| nomore\n| nomousefocus\n| nomousef\n| nomousehide\n| nomousemev\n| nomousemoveevent\n| nonumber\n| nonu\n| noodev\n| noopendevice\n| nopaste\n| nopi\n| nopreserveindent\n| nopreviewwindow\n| noprompt\n| nopvw\n| noreadonly\n| norelativenumber\n| noremap\n| norestorescreen\n| norevins\n| norightleft\n| nori\n| norl\n| nornu\n| noro\n| nors\n| noruler\n| noru\n| nosb\n| noscb\n| noscf\n| noscrollbind\n| noscrollfocus\n| noscs\n| nosc\n| nosecure\n| nosft\n| noshellslash\n| noshelltemp\n| noshiftround\n| noshortname\n| noshowcmd\n| noshowfulltag\n| noshowmatch\n| noshowmode\n| nosi\n| nosmartcase\n| nosmartindent\n| nosmarttab\n| nosmd\n| nosmoothscroll\n| nosms\n| nosm\n| nosn\n| nosol\n| nospell\n| nosplitbelow\n| nosplitright\n| nospr\n| nosr\n| nossl\n| nostartofline\n| nosta\n| nostmp\n| noswapfile\n| noswf\n| notagbsearch\n| notagrelative\n| notagstack\n| nota\n| notbidi\n| notbi\n| notbs\n| notermbidi\n| notermguicolors\n| noterse\n| notextauto\n| notextmode\n| notf\n| notgc\n| notgst\n| notildeop\n| notimeout\n| notitle\n| notop\n| noto\n| notr\n| nottimeout\n| nottybuiltin\n| nottyfast\n| notx\n| noudf\n| noundofile\n| novb\n| novisualbell\n| nowarn\n| nowa\n| nowb\n| noweirdinvert\n| nowfh\n| nowfw\n| nowic\n| nowildignorecase\n| nowildmenu\n| nowinfixheight\n| nowinfixwidth\n| nowiv\n| nowmnu\n| nowrapscan\n| nowrap\n| nowriteany\n| nowritebackup\n| nowrite\n| nows\n| noxtermcodes\n| nrformats\n| numberwidth\n| number\n| nuw\n| nu\n| odev\n| oft\n| ofu\n| omnifunc\n| opendevice\n| operatorfunc\n| opfunc\n| osfiletype\n| packpath\n| paragraphs\n| para\n| pastetoggle\n| paste\n| patchexpr\n| patchmode\n| path\n| pa\n| pdev\n| penc\n| perldll\n| pexpr\n| pex\n| pfn\n| pheader\n| ph\n| pi\n| pmbcs\n| pmbfn\n| pm\n| popt\n| pp\n| preserveindent\n| previewheight\n| previewpopup\n| previewwindow\n| printdevice\n| printencoding\n| printexpr\n| printfont\n| printheader\n| printmbcharset\n| printmbfont\n| printoptions\n| prompt\n| pt\n| pumheight\n| pumwidth\n| pvh\n| pvp\n| pvw\n| pw\n| pythondll\n| pythonhome\n| pythonthreedll\n| pythonthreehome\n| pyxversion\n| pyx\n| qe\n| qftf\n| quickfixtextfunc\n| quoteescape\n| rdt\n| readonly\n| redrawtime\n| regexpengine\n| relativenumber\n| remap\n| renderoptions\n| report\n| restorescreen\n| revins\n| re\n| rightleftcmd\n| rightleft\n| ri\n| rlc\n| rl\n| rnu\n| rop\n| ro\n| rs\n| rtp\n| rubydll\n| ruf\n| rulerformat\n| ruler\n| runtimepath\n| ru\n| sbo\n| sbr\n| sb\n| scb\n| scf\n| scl\n| scrollbind\n| scrollfocus\n| scrolljump\n| scrolloff\n| scrollopt\n| scroll\n| scr\n| scs\n| sc\n| sections\n| sect\n| secure\n| selection\n| selectmode\n| sel\n| sessionoptions\n| sft\n| shcf\n| shellcmdflag\n| shellpipe\n| shellquote\n| shellredir\n| shellslash\n| shelltemp\n| shelltype\n| shellxescape\n| shellxquote\n| shell\n| shiftround\n| shiftwidth\n| shm\n| shortmess\n| shortname\n| showbreak\n| showcmdloc\n| showcmd\n| showfulltag\n| showmatch\n| showmode\n| showtabline\n| shq\n| sh\n| sidescrolloff\n| sidescroll\n| signcolumn\n| siso\n| si\n| sj\n| slm\n| sloc\n| smartcase\n| smartindent\n| smarttab\n| smc\n| smd\n| smoothscroll\n| sms\n| sm\n| sn\n| softtabstop\n| sol\n| so\n| spc\n| spellcapcheck\n| spellfile\n| spelllang\n| spelloptions\n| spellsuggest\n| spell\n| spf\n| spk\n| splitbelow\n| splitkeep\n| splitright\n| spl\n| spo\n| spr\n| sps\n| sp\n| srr\n| sr\n| ssl\n| ssop\n| ss\n| stal\n| startofline\n| statusline\n| sta\n| stl\n| stmp\n| sts\n| st\n| sua\n| suffixesadd\n| suffixes\n| su\n| swapfile\n| swapsync\n| swb\n| swf\n| switchbuf\n| sws\n| sw\n| sxe\n| sxq\n| synmaxcol\n| syntax\n| syn\n| t_8b\n| t_8f\n| t_8u\n| t_AB\n| t_AF\n| t_AL\n| t_AU\n| t_BD\n| t_BE\n| t_CS\n| t_CV\n| t_Ce\n| t_Co\n| t_Cs\n| t_DL\n| t_Ds\n| t_EC\n| t_EI\n| t_F1\n| t_F2\n| t_F3\n| t_F4\n| t_F5\n| t_F6\n| t_F7\n| t_F8\n| t_F9\n| t_GP\n| t_IE\n| t_IS\n| t_K1\n| t_K3\n| t_K4\n| t_K5\n| t_K6\n| t_K7\n| t_K8\n| t_K9\n| t_KA\n| t_KB\n| t_KC\n| t_KD\n| t_KE\n| t_KF\n| t_KG\n| t_KH\n| t_KI\n| t_KJ\n| t_KK\n| t_KL\n| t_PE\n| t_PS\n| t_RB\n| t_RC\n| t_RF\n| t_RI\n| t_RK\n| t_RS\n| t_RT\n| t_RV\n| t_Ri\n| t_SC\n| t_SH\n| t_SI\n| t_SR\n| t_ST\n| t_Sb\n| t_Sf\n| t_Si\n| t_TE\n| t_TI\n| t_Te\n| t_Ts\n| t_Us\n| t_VS\n| t_WP\n| t_WS\n| t_XM\n| t_ZH\n| t_ZR\n| t_al\n| t_bc\n| t_cd\n| t_ce\n| t_cl\n| t_cm\n| t_cs\n| t_da\n| t_db\n| t_dl\n| t_ds\n| t_fd\n| t_fe\n| t_fs\n| t_k1\n| t_k2\n| t_k3\n| t_k4\n| t_k5\n| t_k6\n| t_k7\n| t_k8\n| t_k9\n| t_kB\n| t_kD\n| t_kI\n| t_kN\n| t_kP\n| t_kb\n| t_kd\n| t_ke\n| t_kh\n| t_kl\n| t_kr\n| t_ks\n| t_ku\n| t_le\n| t_mb\n| t_md\n| t_me\n| t_mr\n| t_ms\n| t_nd\n| t_op\n| t_se\n| t_so\n| t_sr\n| t_te\n| t_ti\n| t_ts\n| t_u7\n| t_ue\n| t_us\n| t_ut\n| t_vb\n| t_ve\n| t_vi\n| t_vs\n| t_xn\n| t_xs\n| tabline\n| tabpagemax\n| tabstop\n| tagbsearch\n| tagcase\n| tagfunc\n| taglength\n| tagrelative\n| tagstack\n| tags\n| tag\n| tal\n| ta\n| tbidi\n| tbis\n| tbi\n| tbs\n| tb\n| tcldll\n| tc\n| tenc\n| termbidi\n| termencoding\n| termguicolors\n| termwinkey\n| termwinscroll\n| termwinsize\n| termwintype\n| term\n| terse\n| textauto\n| textmode\n| textwidth\n| tfu\n| tf\n| tgc\n| tgst\n| thesaurusfunc\n| thesaurus\n| tildeop\n| timeoutlen\n| timeout\n| titlelen\n| titleold\n| titlestring\n| title\n| tl\n| tm\n| toolbariconsize\n| toolbar\n| top\n| to\n| tpm\n| tr\n| tsl\n| tsrfu\n| tsr\n| ts\n| ttimeoutlen\n| ttimeout\n| ttm\n| ttybuiltin\n| ttyfast\n| ttymouse\n| ttym\n| ttyscroll\n| ttytype\n| tty\n| twk\n| twsl\n| tws\n| twt\n| tw\n| tx\n| uc\n| udf\n| udir\n| ul\n| undodir\n| undofile\n| undolevels\n| undoreload\n| updatecount\n| updatetime\n| ur\n| ut\n| varsofttabstop\n| vartabstop\n| vbs\n| vb\n| vdir\n| verbosefile\n| verbose\n| ve\n| vfile\n| viewdir\n| viewoptions\n| vif\n| viminfofile\n| viminfo\n| virtualedit\n| visualbell\n| vi\n| vop\n| vsts\n| vts\n| wak\n| warn\n| wa\n| wb\n| wcm\n| wcr\n| wc\n| wd\n| weirdinvert\n| wfh\n| wfw\n| whichwrap\n| wh\n| wic\n| wig\n| wildcharm\n| wildchar\n| wildignorecase\n| wildignore\n| wildmenu\n| wildmode\n| wildoptions\n| wim\n| winaltkeys\n| wincolor\n| window\n| winfixheight\n| winfixwidth\n| winheight\n| winminheight\n| winminwidth\n| winptydll\n| winwidth\n| wiv\n| wiw\n| wi\n| wmh\n| wmnu\n| wmw\n| wm\n| wop\n| wrapmargin\n| wrapscan\n| wrap\n| writeany\n| writebackup\n| writedelay\n| write\n| ws\n| ww\n| xtermcodes\n) \\b',
      name: 'support.variable.option.viml'
    },
    vimPattern: {
      match: '(?x) \\b\n( end\n| skip\n| start\n) \\b',
      name: 'support.function.vimPattern.viml'
    },
    vimStdPlugin: {
      match:
        '(?x) \\b\n( Arguments\n| Asm\n| Break\n| Cfilter\n| Clear\n| Continue\n| DiffOrig\n| Evaluate\n| Finish\n| Gdb\n| Lfilter\n| Man\n| N\n| Next\n| Over\n| P\n| Print\n| Program\n| Run\n| Source\n| Step\n| Stop\n| S\n| TOhtml\n| TermdebugCommand\n| Termdebug\n| Until\n| Winbar\n| XMLent\n| XMLns\n) \\b',
      name: 'support.class.stdplugin.viml'
    },
    vimSynCase: {
      match: '(?x) \\b\n( ignore\n| match\n) \\b',
      name: 'support.function.vimSynCase.viml'
    },
    vimSynType: {
      match:
        '(?x) \\b\n( case\n| clear\n| cluster\n| enable\n| include\n| iskeyword\n| keyword\n| list\n| manual\n| match\n| off\n| on\n| region\n| reset\n| sync\n) \\b',
      name: 'support.function.vimSynType.viml'
    },
    vimSyncC: {
      match: '(?x) \\b\n( ccomment\n| clear\n| fromstart\n) \\b',
      name: 'support.function.vimSyncC.viml'
    },
    vimSyncLinecont: {
      match: '(?x) \\b\n( linecont\n) \\b',
      name: 'support.function.vimSyncLinecont.viml'
    },
    vimSyncMatch: {
      match: '(?x) \\b\n( match\n) \\b',
      name: 'support.function.vimSyncMatch.viml'
    },
    vimSyncNone: {
      match: '(?x) \\b\n( NONE\n) \\b',
      name: 'support.function.vimSyncNone.viml'
    },
    vimSyncRegion: {
      match: '(?x) \\b\n( region\n) \\b',
      name: 'support.function.vimSyncRegion.viml'
    },
    vimTodo: {
      match: '(?x) \\b\n( COMBAK\n| FIXME\n| TODO\n| XXX\n) \\b',
      name: 'support.constant.${1:/downcase}.viml'
    },
    vimUserAttrbCmplt: {
      match:
        '(?x) \\b\n( augroup\n| behave\n| buffer\n| color\n| command\n| compiler\n| cscope\n| customlist\n| custom\n| dir\n| environment\n| event\n| expression\n| file_in_path\n| filetype\n| file\n| function\n| help\n| highlight\n| history\n| locale\n| mapping\n| menu\n| option\n| packadd\n| shellcmd\n| sign\n| syntax\n| syntime\n| tag_listfiles\n| tag\n| user\n| var\n) \\b',
      name: 'support.function.vimUserAttrbCmplt.viml'
    },
    vimUserAttrbKey: {
      match:
        '(?x) \\b\n( bang?\n| bar\n| com\n| complete\n| cou\n| count\n| n\n| nargs\n| ra\n| range\n| re\n| register\n) \\b',
      name: 'support.function.vimUserAttrbKey.viml'
    },
    vimUserCommand: {
      match: '(?x) \\b\n( com\n| command\n) \\b',
      name: 'support.function.vimUserCommand.viml'
    }
  },
  scopeName: 'source.viml'
}

export default grammar
