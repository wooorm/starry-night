// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.shell'],
  extensions: ['.gitconfig'],
  injections: {
    'L:meta.alias.gitconfig source.embedded.shell, L:meta.command.gitconfig - string.quoted':
      {patterns: [{include: '#escapedNewline'}]},
    'L:string.quoted.double.gitconfig source.embedded.shell - string.quoted.*.shell':
      {
        patterns: [
          {
            begin: '\\s*(?<![^\\s;\\\\|\\(&])(#)',
            beginCaptures: {1: {name: 'punctuation.definition.comment.shell'}},
            end: '(?=")',
            name: 'comment.line.number-sign.shell'
          }
        ]
      }
  },
  names: ['git-config', 'gitconfig', 'gitmodules'],
  patterns: [{include: '#main'}],
  repository: {
    alias: {
      begin: '(?:^|(?<=\\])\\G)\\s*([A-Za-z][-A-Za-z]*)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.parameter.assignment.gitconfig'},
        2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
      },
      end: '(?<!\\\\)$|(?=#|;)',
      name: 'meta.alias.gitconfig',
      patterns: [
        {
          begin: '\\G\\s*(?=\\\\$)',
          end: '(?=\\s*(?!\\\\$)(?=\\S))',
          patterns: [{include: '#escapedNewline'}]
        },
        {
          begin: '\\s*(?!\\\\$)(?=\\S)',
          end: '(?!\\G)',
          patterns: [{include: '#aliasInnards'}]
        }
      ]
    },
    aliasInnards: {
      patterns: [
        {
          begin: '\\G\\s*(?=(?:"\\s*)?!)',
          end: '(?<!\\\\)$',
          name: 'meta.shell.command.gitconfig',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.string.begin.gitconfig'},
                2: {name: 'keyword.operator.shell-script.gitconfig'},
                3: {
                  name: 'source.embedded.shell',
                  patterns: [{include: '#escapes'}, {include: 'source.shell'}]
                },
                4: {name: 'punctuation.definition.string.end.gitconfig'}
              },
              match: '\\G(")\\s*(!)((?:[^\\\\"]|\\\\.)*+)(")',
              name: 'string.quoted.double.gitconfig'
            },
            {
              begin: '\\G(")\\s*(!)',
              beginCaptures: {
                1: {name: 'punctuation.definition.string.begin.gitconfig'},
                2: {name: 'keyword.operator.shell-script.gitconfig'}
              },
              contentName: 'source.embedded.shell',
              end: '(")|((?:[^\\\\"]|\\\\.)*+)$',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.gitconfig'},
                2: {name: 'invalid.illegal.syntax.unclosed-string.gitconfig'}
              },
              name: 'string.quoted.double.gitconfig',
              patterns: [{include: '#escapes'}, {include: 'source.shell'}]
            },
            {match: '\\G!', name: 'keyword.operator.shell-script.gitconfig'},
            {include: '#cmdInnards'}
          ]
        },
        {
          begin: '\\G\\s*(!)',
          beginCaptures: {1: {name: 'keyword.operator.shell-script.gitconfig'}},
          end: '(?<!\\\\)(?=$)',
          name: 'meta.unquoted.shell.command.gitconfig',
          patterns: [{include: '#escapedNewline'}, {include: 'source.shell'}]
        },
        {
          begin: '\\G\\s*([^\\s"#;!]+)',
          beginCaptures: {0: {name: 'string.unquoted.source.gitconfig'}},
          contentName: 'string.unquoted.source.gitconfig',
          end: '(?<!\\\\)(?=$|#|;)',
          name: 'meta.git.subcommands.gitconfig',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    aliasSection: {
      begin:
        '(?xi)\n(?:^|\\G)\n\\s* (\\[)  #1\n\\s* (alias) #2\n(?:\n\t\\s+ (") ((?:[^\\\\"\\r\\n]|\\\\.)*+) (") #3-5\n\t|\n\t(\\.) ([-A-Za-z0-9]+) #6-7\n)?\n\\s* (\\]) #8',
      beginCaptures: {
        0: {name: 'meta.section.header.gitconfig'},
        1: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        2: {name: 'entity.section.name.gitconfig'},
        3: {name: 'punctuation.definition.subsection.begin.gitconfig'},
        4: {
          name: 'entity.subsection.name.gitconfig',
          patterns: [{include: '#sectionEscapes'}]
        },
        5: {name: 'punctuation.definition.subsection.end.gitconfig'},
        6: {patterns: [{include: '#dot'}]},
        7: {name: 'entity.subsection.name.deprecated-syntax.gitconfig'},
        8: {name: 'punctuation.definition.bracket.square.end.gitconfig'}
      },
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.aliases.section.gitconfig',
      patterns: [
        {include: '#alias'},
        {include: '#comments'},
        {include: '#variables'}
      ]
    },
    cmd: {
      begin: '(?:^|(?<=\\])\\G)\\s*(textconv|command|driver)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.parameter.assignment.gitconfig'},
        2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
      },
      end: '(?<!\\\\)$|(?=#|;)',
      name: 'meta.command.gitconfig',
      patterns: [
        {
          begin: '\\G\\s*(?=\\\\$)',
          end: '(?=\\s*(?!\\\\$)(?=\\S))',
          patterns: [{include: '#escapedNewline'}]
        },
        {
          begin: '\\s*(?!\\\\$)(?=\\S)',
          contentName: 'source.embedded.shell',
          end: '(?!\\G)',
          patterns: [{include: '#cmdInnards'}]
        }
      ]
    },
    cmdInnards: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.gitconfig'},
            2: {
              name: 'source.embedded.shell',
              patterns: [{include: '#escapes'}, {include: 'source.shell'}]
            },
            3: {name: 'punctuation.definition.string.end.gitconfig'}
          },
          match: '(")((?:[^\\\\"]|\\\\.)*+)(")',
          name: 'string.quoted.double.gitconfig'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.gitconfig'}
          },
          contentName: 'source.embedded.shell',
          end: '(")|((?:[^\\\\"]|\\\\.)*+)$',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.gitconfig'},
            2: {name: 'invalid.illegal.syntax.unclosed-string.gitconfig'}
          },
          name: 'string.quoted.double.gitconfig',
          patterns: [{include: '#escapes'}, {include: 'source.shell'}]
        },
        {include: '#escapedNewline'},
        {include: 'source.shell'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.gitconfig'}
          },
          end: '$',
          name: 'comment.line.number-sign.gitconfig'
        },
        {
          begin: ';',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.gitconfig'}
          },
          end: '$',
          name: 'comment.line.semicolon.gitconfig'
        }
      ]
    },
    diffSection: {
      begin:
        '(?xi)\n(?:^|\\G)\n\\s* (\\[)  #1\n\\s* (diff) #2\n(?:\n\t\\s+ (") ((?:[^\\\\"\\r\\n]|\\\\.)*+) (") #3-5\n\t|\n\t(\\.) ([-A-Za-z0-9]+) #6-7\n)\n\\s* (\\]) #8',
      beginCaptures: {
        0: {name: 'meta.section.header.gitconfig'},
        1: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        2: {name: 'entity.section.name.gitconfig'},
        3: {name: 'punctuation.definition.subsection.begin.gitconfig'},
        4: {
          name: 'entity.subsection.name.gitconfig',
          patterns: [{include: '#sectionEscapes'}]
        },
        5: {name: 'punctuation.definition.subsection.end.gitconfig'},
        6: {patterns: [{include: '#dot'}]},
        7: {name: 'entity.subsection.name.deprecated-syntax.gitconfig'},
        8: {name: 'punctuation.definition.bracket.square.end.gitconfig'}
      },
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.diff.section.gitconfig',
      patterns: [
        {include: '#cmd'},
        {include: '#comments'},
        {include: '#variables'}
      ]
    },
    dot: {
      match: '\\.',
      name: 'punctuation.delimiter.separator.meta.dot.period.gitconfig'
    },
    escapedNewline: {
      captures: {
        1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
      },
      match: '(\\\\)$\\s*',
      name: 'constant.character.escape.newline.gitconfig'
    },
    escapes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)\\\\',
          name: 'constant.character.escape.backslash.gitconfig'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)"',
          name: 'constant.character.escape.quote.gitconfig'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)n',
          name: 'constant.character.escape.newline.gitconfig'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)t',
          name: 'constant.character.escape.tab.gitconfig'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)b',
          name: 'constant.character.escape.backspace.gitconfig'
        },
        {include: '#escapedNewline'},
        {match: '\\\\.', name: 'invalid.illegal.syntax.escape.gitconfig'}
      ]
    },
    includeInnards: {
      patterns: [
        {match: '(?:^|\\G)~(?=/)', name: 'keyword.operator.tilde.gitconfig'},
        {
          match: '(?:^|\\G)\\.(?=/)',
          name: 'keyword.operator.config-path.gitconfig'
        },
        {
          match: '\\*\\*',
          name: 'keyword.operator.glob.wildcard.globstar.gitconfig'
        },
        {match: '[*?]', name: 'keyword.operator.glob.wildcard.gitconfig'},
        {match: '/', name: 'punctuation.directory.separator.meta.gitconfig'},
        {include: '#escapes'}
      ]
    },
    includePath: {
      begin: '(?:^|(?<=\\])\\G)\\s*(path)\\s*(=)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.parameter.assignment.gitconfig'},
        2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
      },
      end: '(?=\\s*(?:(?<!\\\\)$|#|;))',
      name: 'meta.included-file.gitconfig',
      patterns: [
        {
          begin: '\\G\\s*"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.gitconfig'}
          },
          contentName: 'string.other.link.pathspec.gitconfig',
          end: '"|(?<!\\\\)(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.gitconfig'}
          },
          name: 'string.quoted.double.pathspec.gitconfig',
          patterns: [{include: '#includeInnards'}]
        },
        {
          captures: {
            1: {
              name: 'string.other.link.pathspec.gitconfig',
              patterns: [{include: '#includeInnards'}]
            }
          },
          match: '([^"\\s;#][^;#]*?)(?<=\\S)(?=\\s*(?:$|;|#))'
        },
        {include: '#comments'},
        {include: '#variables'}
      ]
    },
    includeSection: {
      begin:
        '(?ix)\n(?:^|\\G) \\s*\n(\\[) #1\n\\s*\n(include(?:If)?) #2\n(?:\n\t\\s*\n\t(") #3\n\t(   #4\n\t\t(?: [^\\\\"]\n\t\t|   \\\\.\n\t\t)*+\n\t)\n\t(") #5\n)?+\n\\s* (\\]) #6',
      beginCaptures: {
        0: {name: 'meta.section.header.gitconfig'},
        1: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        2: {name: 'keyword.control.directive.${2:/downcase}.gitconfig'},
        3: {name: 'punctuation.definition.condition.begin.gitconfig'},
        4: {
          patterns: [
            {
              begin: '(gitdir)((/)i)?(:)',
              beginCaptures: {
                1: {name: 'entity.name.condition-type.gitconfig'},
                2: {name: 'storage.modifier.ignore-case.gitconfig'},
                3: {name: 'punctuation.separator.modifier.slash.gitconfig'},
                4: {name: 'punctuation.separator.key-value.gitconfig'}
              },
              contentName: 'string.other.link.gitconfig',
              end: '(?=\\s*(?:$|"))',
              name: 'meta.condition.match-directory.gitconfig',
              patterns: [
                {include: '#sectionEscapes'},
                {include: '#includeInnards'}
              ]
            },
            {
              begin: '(onbranch)(:)',
              beginCaptures: {
                1: {name: 'entity.name.condition-type.gitconfig'},
                2: {name: 'punctuation.separator.key-value.gitconfig'}
              },
              contentName: 'string.other.file.name.gitconfig',
              end: '(?=\\s*(?:$|"))',
              name: 'meta.condition.match-worktree.gitconfig',
              patterns: [
                {include: '#sectionEscapes'},
                {include: '#includeInnards'}
              ]
            },
            {
              begin: '(hasconfig)(:)([^":]+)(:)',
              beginCaptures: {
                1: {name: 'entity.name.condition-type.gitconfig'},
                2: {name: 'punctuation.separator.parameter.gitconfig'},
                3: {
                  name: 'variable.parameter.comparison.gitconfig',
                  patterns: [
                    {include: '#dot'},
                    {include: '#sectionEscapes'},
                    {include: '#includeInnards'}
                  ]
                },
                4: {name: 'punctuation.separator.key-value.gitconfig'}
              },
              contentName: 'string.unquoted.argument.gitconfig',
              end: '(?=\\s*(?:$|"))',
              name: 'meta.condition.match-config.gitconfig',
              patterns: [
                {include: '#sectionEscapes'},
                {include: '#includeInnards'}
              ]
            }
          ]
        },
        5: {name: 'punctuation.definition.condition.end.gitconfig'},
        6: {name: 'punctuation.definition.bracket.square.end.gitconfig'}
      },
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.include.section.gitconfig',
      patterns: [
        {include: '#includePath'},
        {include: '#comments'},
        {include: '#variables'}
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#includeSection'},
        {include: '#aliasSection'},
        {include: '#diffSection'},
        {include: '#urlSection'},
        {include: '#section'}
      ]
    },
    section: {
      begin:
        '(?x)\n(?:^|\\G) \\s*\n(?:\n\t(\\[)\\s*(\\]) #1, #2\n\t|\n\t(\\[) #3\n\t\\s*\n\t(?:\n\t\t([-.A-Za-z0-9]+?) #4\n\t\t(?:\n\t\t\t(\\.)           #5\n\t\t\t([-A-Za-z0-9]+) #6\n\t\t)?\n\t)\n\t(?:\n\t\t\\s*\n\t\t(") #7\n\t\t(   #8\n\t\t\t(?: [^\\\\"]\n\t\t\t|   \\\\.\n\t\t\t)*+\n\t\t)\n\t\t(") #9\n\t)?+\n\t\\s* (\\]) #10\n)',
      beginCaptures: {
        0: {name: 'meta.section.header.gitconfig'},
        1: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        10: {name: 'punctuation.definition.bracket.square.end.gitconfig'},
        2: {name: 'punctuation.definition.bracket.square.end.gitconfig'},
        3: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        4: {name: 'entity.section.name.gitconfig'},
        5: {patterns: [{include: '#dot'}]},
        6: {name: 'entity.subsection.name.deprecated-syntax.gitconfig'},
        7: {name: 'punctuation.definition.subsection.begin.gitconfig'},
        8: {
          name: 'entity.subsection.name.gitconfig',
          patterns: [{include: '#sectionEscapes'}]
        },
        9: {name: 'punctuation.definition.subsection.end.gitconfig'}
      },
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.section.gitconfig',
      patterns: [{include: '#comments'}, {include: '#variables'}]
    },
    sectionEscapes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.gitconfig'}
          },
          match: '(\\\\)[\\\\"]',
          name: 'constant.character.escape.backslash.gitconfig'
        },
        {
          captures: {
            0: {
              name: 'punctuation.definition.escape.backslash.ignored.gitconfig'
            }
          },
          match: '\\\\(?=[^\\\\"])',
          name: 'constant.character.escape.unknown.gitconfig'
        }
      ]
    },
    urlInnards: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'string.quoted.string.begin.gitconfig'}},
          end: '"|(?=\\s*$)',
          endCaptures: {0: {name: 'string.quoted.string.end.gitconfig'}},
          name: 'string.other.link.gitconfig',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {0: {patterns: [{include: '#escapes'}]}},
          match: '(?:[^\\s";#\\\\]|\\\\.)+',
          name: 'string.other.link.gitconfig'
        }
      ]
    },
    urlSection: {
      begin:
        '(?ix)\n(?:^|\\G) \\s*\n(\\[) #1\n\\s*\n(url|https?|core.(?:git)?proxy) #2\n(?:\n\t\\s*\n\t(") #3\n\t(   #4\n\t\t(?: [^\\\\"]\n\t\t|   \\\\.\n\t\t)*+\n\t)\n\t(") #5\n)?+\n\\s* (\\]) #6',
      beginCaptures: {
        0: {name: 'meta.section.header.gitconfig'},
        1: {name: 'punctuation.definition.bracket.square.begin.gitconfig'},
        2: {name: 'entity.section.name.gitconfig'},
        3: {name: 'punctuation.definition.subsection.begin.gitconfig'},
        4: {
          name: 'string.other.link.gitconfig',
          patterns: [{include: '#sectionEscapes'}]
        },
        5: {name: 'punctuation.definition.subsection.end.gitconfig'},
        6: {name: 'punctuation.definition.bracket.square.end.gitconfig'}
      },
      end: '(?!\\G)(?=^\\s*\\[)',
      name: 'meta.url.section.gitconfig',
      patterns: [{include: '#comments'}, {include: '#variables'}]
    },
    variableInnards: {
      patterns: [
        {
          match: '(?i)\\b(true|false|on|off|1|0|yes|no)\\b',
          name: 'constant.logical.boolean.$1.gitconfig'
        },
        {
          match: '[-+]?[0-9]+(?=$|[\\s#;])',
          name: 'constant.numeric.decimal.integer.int.gitconfig'
        },
        {
          match: '[-+]?(?:[0-9]+\\.[0-9]*|\\.[0-9]+)(?=$|\\s#;)',
          name: 'constant.numeric.decimal.float.gitconfig'
        },
        {
          captures: {
            0: {name: 'invalid.illegal.syntax.unclosed-string.gitconfig'},
            1: {name: 'punctuation.definition.string.begin.gitconfig'},
            2: {patterns: [{include: '#escapes'}]}
          },
          match: '(")((?:[^\\\\"]|\\\\.)*?)(?<!\\\\)(?=\\s*$)',
          name: 'string.quoted.double.argument.gitconfig'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.gitconfig'}
          },
          end: '"|(?<!\\\\)(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.gitconfig'}
          },
          name: 'string.quoted.double.argument.gitconfig',
          patterns: [{include: '#escapes'}]
        },
        {
          captures: {0: {patterns: [{include: '#escapes'}]}},
          match: '(?:[^\\\\\\s";#]|\\\\.)+',
          name: 'string.unquoted.argument.gitconfig'
        },
        {include: '#escapedNewline'}
      ]
    },
    variables: {
      patterns: [
        {
          begin: '(?i)\\b(signingkey)\\s*(=)',
          beginCaptures: {
            1: {name: 'variable.parameter.assignment.gitconfig'},
            2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
          },
          end: '(?=\\s*(?:$|#|;))',
          name: 'meta.variable-field.gitconfig',
          patterns: [
            {match: '\\w+', name: 'constant.other.signing-key.hex.gitconfig'},
            {include: '#variableInnards'}
          ]
        },
        {
          begin: '(?i)\\b(email|url)\\s*(=)',
          beginCaptures: {
            1: {name: 'variable.parameter.assignment.gitconfig'},
            2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
          },
          end: '(?=\\s*(?:$|#|;))',
          name: 'meta.variable-field.gitconfig',
          patterns: [{include: '#urlInnards'}]
        },
        {
          begin: '([0-9A-Za-z][-0-9A-Za-z]*)\\s*(=)',
          beginCaptures: {
            1: {name: 'variable.parameter.assignment.gitconfig'},
            2: {name: 'keyword.operator.assignment.key-value.gitconfig'}
          },
          end: '(?=\\s*(?:$|#|;))',
          name: 'meta.variable-field.gitconfig',
          patterns: [{include: '#variableInnards'}]
        }
      ]
    }
  },
  scopeName: 'source.gitconfig'
}

export default grammar
