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
  dependencies: ['etc', 'injections.etc'],
  extensions: ['.nanorc'],
  injections: {
    'meta.preprocessor.include.nanorc string.quoted.double, meta.option.backupdir.nanorc':
      {
        patterns: [
          {match: '(?<=")~(?=/)', name: 'keyword.operator.tilde.nanorc'},
          {include: 'etc#globSimple'}
        ]
      }
  },
  names: ['nanorc'],
  patterns: [{include: 'injections.etc#scopeHack'}, {include: '#main'}],
  repository: {
    colourParam: {
      patterns: [
        {
          match:
            '(?x)\n(?:(?<=,|\\s)|^|\\G)\n(\n\t# Basic colour swatches for 8-colour terminals\n\t(?:bright|light)?\n\t(?:black|blue|cyan|green|magenta|red|white|yellow)\n\t|\n\t# Synonym for “lightblack”\n\tgr[ae]y\n\t|\n\t# 256-colour values\n\t(?:beet|brick|brown|crimson|lagoon|latte|lime|mauve|mint|normal|ocher\n\t|orange|peach|pink|plum|purple|rosy|sage|sand|sea|sky|slate|tawny|teal)\n)\n(?=$|,|\\s)',
          name: 'constant.language.colour.named.$1.nanorc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.constant.colour.nanorc'}
          },
          match: '(?:(?<=,|\\s)|^|\\G)(#)[A-Fa-f0-9]{3}(?=$|,|\\s)',
          name: 'constant.language.colour.hex.nanorc'
        },
        {
          captures: {
            1: {name: 'constant.language.colour.placeholder.nanorc'},
            2: {name: 'invalid.illegal.colour.unsupported.nanorc'}
          },
          match: '(?:(?<=,|\\s)|^|\\G)([bf]gcolou?r)|([^\\s,]+)(?=$|,|\\s)'
        }
      ]
    },
    colourParams: {
      captures: {
        1: {patterns: [{include: 'etc#bracket'}]},
        10: {patterns: [{include: 'etc#comma'}]},
        11: {
          name: 'meta.background-colour.nanorc',
          patterns: [{include: '#colourParam'}]
        },
        2: {name: 'constant.language.style.bold.nanorc'},
        3: {patterns: [{include: 'etc#comma'}]},
        4: {patterns: [{include: 'etc#bracket'}]},
        5: {patterns: [{include: 'etc#bracket'}]},
        6: {name: 'constant.language.style.italic.nanorc'},
        7: {patterns: [{include: 'etc#comma'}]},
        8: {patterns: [{include: 'etc#bracket'}]},
        9: {
          name: 'meta.foreground-colour.nanorc',
          patterns: [{include: '#colourParam'}]
        }
      },
      match:
        '(?x) \\G\n(?:\n\t\\s+\n\t(?: (\\[)? (bold)   (,) (\\])?)?\n\t(?: (\\[)? (italic) (,) (\\])?)?\n\t(?<=,\\]|,)\n)?+ \\s*\n(?:\n\t(?=$|\\s)\n\t|\n\t(?= (?!bold|italic) [^\\s,]\n\t| , (?!bold|italic) [^\\s,]\n\t) ([^\\s,]*) (,)? ([^\\s,]*) (?!,)\n)'
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.nanorc'}},
      end: '$',
      name: 'comment.line.number-sign.nanorc'
    },
    key: {patterns: [{include: '#keyBind'}, {include: '#keyUnbind'}]},
    keyBind: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.key.bind.nanorc'},
            2: {patterns: [{include: '#keyName'}]},
            3: {name: 'string.quoted.double.nanorc'},
            4: {name: 'punctuation.definition.string.begin.nanorc'},
            5: {
              patterns: [
                {
                  begin: '({)',
                  beginCaptures: {
                    0: {name: 'punctuation.section.bracket.curly.begin.nanorc'},
                    1: {name: 'brackethighlighter.curly'}
                  },
                  contentName: 'entity.name.function.nanorc',
                  end: '(})',
                  endCaptures: {
                    0: {name: 'punctuation.section.bracket.curly.end.nanorc'},
                    1: {name: 'brackethighlighter.curly'}
                  },
                  name: 'meta.command-name.nanorc'
                },
                {include: '#keyName'}
              ]
            },
            6: {name: 'punctuation.definition.string.end.nanorc'},
            7: {name: 'constant.other.menu-name.nanorc'}
          },
          match:
            '^\\s*(bind)\\s+(\\S+)\\s+((")(.*)("))(?:\\s+([^\\s"]+))?(?=\\s*$|\\s+#)',
          name: 'meta.bind.nanorc'
        },
        {
          captures: {
            1: {name: 'keyword.operator.key.bind.nanorc'},
            2: {patterns: [{include: '#keyName'}]},
            3: {name: 'entity.name.function.nanorc'},
            4: {name: 'constant.other.menu-name.nanorc'}
          },
          match:
            '^\\s*(bind)\\s+(\\S+)\\s+([^"\\s]+)(?:\\s+([^\\s"]+))?(?=\\s*$|\\s+#)',
          name: 'meta.bind.nanorc'
        }
      ]
    },
    keyName: {
      begin: '(?:^|\\G)(Sh(-))?(M(-))?((\\^))?',
      beginCaptures: {
        0: {name: 'meta.key.modifiers.nanorc'},
        1: {name: 'entity.name.tag.key.modifier.shift.nanorc'},
        2: {name: 'punctuation.definition.modifier.dash.nanorc'},
        3: {name: 'entity.name.tag.key.modifier.meta.nanorc'},
        4: {name: 'punctuation.definition.modifier.dash.nanorc'},
        5: {name: 'entity.name.tag.key.modifier.ctrl.nanorc'},
        6: {name: 'punctuation.definition.modifier.caret.nanorc'}
      },
      end: '\\S+|(?=$|\\s)',
      endCaptures: {
        0: {
          patterns: [
            {match: '^Bsp$', name: 'entity.name.tag.key.backspace.nanorc'},
            {match: '^Del$', name: 'entity.name.tag.key.delete.nanorc'},
            {match: '^Down$', name: 'entity.name.tag.key.down.nanorc'},
            {match: '^End$', name: 'entity.name.tag.key.end.nanorc'},
            {match: '^Enter$', name: 'entity.name.tag.key.enter.nanorc'},
            {match: '^Home$', name: 'entity.name.tag.key.home.nanorc'},
            {match: '^Ins$', name: 'entity.name.tag.key.insert.nanorc'},
            {match: '^Left$', name: 'entity.name.tag.key.left.nanorc'},
            {match: '^PgDn$', name: 'entity.name.tag.key.page-down.nanorc'},
            {match: '^PgUp$', name: 'entity.name.tag.key.page-up.nanorc'},
            {match: '^Right$', name: 'entity.name.tag.key.right.nanorc'},
            {match: '^Space$', name: 'entity.name.tag.key.space.nanorc'},
            {match: '^Tab$', name: 'entity.name.tag.key.tab.nanorc'},
            {match: '^Up$', name: 'entity.name.tag.key.up.nanorc'},
            {
              captures: {
                1: {name: 'entity.name.tag.key.function.$2.nanorc'},
                3: {name: 'entity.name.tag.key.verbatim.nanorc'}
              },
              match: '^(?:(F(1[0-9]|2[0-4]|[1-9]))|(\\S))$'
            }
          ]
        }
      }
    },
    keyUnbind: {
      captures: {
        1: {name: 'keyword.operator.key.unbind.nanorc'},
        2: {patterns: [{include: '#keyName'}]},
        3: {name: 'constant.other.menu-name.nanorc'}
      },
      match: '^\\s*(unbind)\\s+(\\S+)(?:\\s+([^\\s"]+))?(?=\\s*$|\\s+#)'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#key'},
        {include: '#option'},
        {include: '#syntax'},
        {include: '#syntaxCommands'},
        {include: '#other'}
      ]
    },
    option: {
      begin: '^\\s*(set|unset)(?=\\s+([a-z][a-z_0-9]*))',
      beginCaptures: {1: {name: 'keyword.operator.$1.nanorc'}},
      end: '$',
      name: 'meta.option.$2.nanorc',
      patterns: [{include: '#optionInnards'}]
    },
    optionInnards: {
      patterns: [
        {
          begin: '\\G\\s*(fill|guidestripe|tabsize)(?=\\s|$)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          patterns: [
            {
              match: '[0-9]+',
              name: 'constant.numeric.integer.int.decimal.nanorc'
            }
          ]
        },
        {
          begin:
            '(?x) \\G \\s*\n(afterends|allow_insecure_backup|atblanks|autoindent|backup|boldtext|bookstyle|breaklonglines\n|casesensitive|colonparsing|constantshow|cutfromcursor|emptyline|historylog|indicator|jumpyscrolling\n|linenumbers|locking|magic|minibar|mouse|multibuffer|noconvert|nohelp|nonewlines|nowrap|positionlog\n|preserve|quickblank|rawsequences|rebinddelete|regexp|saveonexit|showcursor|smarthome|softwrap\n|stateflags|tabstospaces|trimblanks|unix|wordbounds|zap|zero)\n(?=\\s|$)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$'
        },
        {
          begin:
            '(?x) \\G \\s*\n((error|function|key|mini|number|prompt|scroller|selected|spotlight|status|stripe|title)color)\n(?=\\s|$)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          patterns: [{include: '#colourParams'}]
        },
        {
          begin: '\\G\\s*(speller)(?=\\s|$)[ \\t]*',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          patterns: [
            {
              captures: {
                0: {name: 'string.quoted.double.nanorc'},
                1: {name: 'punctuation.definition.string.begin.nanorc'},
                2: {
                  name: 'source.embedded.shell',
                  patterns: [{include: 'source.shell'}]
                },
                3: {name: 'punctuation.definition.string.end.nanorc'}
              },
              match: '\\G(")(.+)(?:(")(?=[^"]*$)|(?=$))'
            }
          ]
        },
        {
          begin:
            '(?x) \\G \\s*\n(backupdir|brackets|matchbrackets|operatingdir|punct|whitespace|wordchars)\n(?=\\s|$)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          patterns: [{include: '#string'}]
        },
        {
          begin: '\\G\\s*(quotestr)(?=\\s|$)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\G\\s*(\\S+)',
          beginCaptures: {1: {name: 'entity.option.name.nanorc'}},
          end: '$',
          name: 'meta.custom-option.nanorc',
          patterns: [
            {
              match: '\\b(true|false|on|off|yes|no)\\b',
              name: 'constant.logical.boolean.$1.nanorc'
            },
            {
              match: '[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?=\\s|$)',
              name: 'constant.numeric.decimal.nanorc'
            },
            {include: '#regexp'}
          ]
        }
      ]
    },
    other: {
      patterns: [
        {
          begin: '^\\s*(include)(?=\\s|$)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.directive.include.nanorc'}
          },
          contentName: 'meta.import.file-name.nanorc',
          end: '$',
          name: 'meta.preprocessor.include.nanorc',
          patterns: [{include: '#string'}]
        },
        {
          begin: '^\\s*(extendsyntax)\\s+(\\S+)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.directive.extendsyntax.nanorc'},
            2: {name: 'variable.parameter.syntax-name.nanorc'}
          },
          end: '$',
          name: 'meta.override.nanorc',
          patterns: [{include: '#syntaxCommands'}, {include: '#optionInnards'}]
        }
      ]
    },
    quotedString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nanorc'}},
      end: '"(?=[^"]*$)|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nanorc'}},
      name: 'string.quoted.double.nanorc'
    },
    regexp: {
      begin: '(")"?+',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.nanorc'}},
      end: '"(?=\\s|$)|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nanorc'}},
      name: 'string.regexp.embedded.nanorc',
      patterns: [{match: '(?:"(?!\\s|$))+'}, {include: 'source.regexp'}]
    },
    string: {
      patterns: [{include: '#quotedString'}, {include: '#unquotedString'}]
    },
    syntax: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.var.syntax.name.nanorc'},
            2: {name: 'support.constant.language.$2.nanorc'}
          },
          match: '^\\s*(syntax)\\s+(none|default)(?=\\s|$)',
          name: 'meta.syntax.nanorc'
        },
        {
          begin:
            '^\\s*(syntax)(?:\\s+((")[^"]+(")|\\S+)(?:\\s+(.*))?)?\\s*$\\s*',
          beginCaptures: {
            1: {name: 'storage.type.var.syntax.name.nanorc'},
            2: {name: 'entity.syntax.name.nanorc'},
            3: {name: 'punctuation.definition.name.begin.nanorc'},
            4: {name: 'punctuation.definition.name.end.nanorc'},
            5: {patterns: [{include: '#regexp'}]}
          },
          end: '^(?=\\s*syntax)',
          name: 'meta.syntax.nanorc',
          patterns: [{include: '#main'}]
        }
      ]
    },
    syntaxCommands: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?:^|\\G)\\s*(header|magic)(?=$|\\s)[ \\t]*',
          beginCaptures: {1: {name: 'keyword.operator.command.$1.nanorc'}},
          end: '(?!\\G)',
          name: 'meta.$1-pattern.nanorc',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(?:^|\\G)\\s*(comment)(?=$|\\s)[ \\t]*',
          beginCaptures: {1: {name: 'keyword.operator.command.$1.nanorc'}},
          end: '$',
          name: 'meta.comment-string.nanorc',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.string.begin.nanorc'},
                2: {name: 'punctuation.definition.string.end.nanorc'}
              },
              match: '\\G(")(")(?=\\s*$|\\s+#)',
              name: 'string.quoted.double.comments.disable.nanorc'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.string.begin.nanorc'},
                2: {name: 'constant.other.bracket.begin.nanorc'},
                3: {name: 'meta.separator.brackets.nanorc'},
                4: {name: 'constant.other.bracket.end.nanorc'},
                5: {name: 'punctuation.definition.string.end.nanorc'}
              },
              match: '\\G(")([^\\|]+)(\\|)([^\\|]+)(")(?=\\s*$|\\s+#)',
              name: 'string.quoted.double.comments.bracket-style.comment'
            },
            {
              captures: {
                1: {name: 'punctuation.definition.string.begin.nanorc'},
                2: {name: 'punctuation.definition.string.end.nanorc'}
              },
              match: '(").+(")(?=\\s*$|\\s+#)',
              name: 'string.quoted.double.comments.verbatim.nanorc'
            }
          ]
        },
        {
          begin: '(?:^|\\G)\\s*(tabgives)(?=$|\\s)',
          beginCaptures: {1: {name: 'keyword.operator.command.$1.nanorc'}},
          end: '$',
          name: 'meta.tabgives.nanorc',
          patterns: [{include: '#string'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.command.$1.nanorc'},
            2: {
              name: 'source.embedded.shell',
              patterns: [{include: 'source.shell'}]
            }
          },
          match: '(?:^|\\G)\\s*(formatter|linter)(?=$|\\s)(.*)$',
          name: 'meta.$1.nanorc'
        },
        {
          begin: '(?:^|\\G)\\s*(i?color)(?=\\s|$)',
          beginCaptures: {1: {name: 'storage.type.var.colour.name.nanorc'}},
          end: '$',
          name: 'meta.colour.nanorc',
          patterns: [
            {include: '#colourParams'},
            {
              captures: {
                1: {name: 'variable.parameter.attribute.nanorc'},
                2: {
                  name: 'punctuation.definition.assignment.equals-sign.nanorc'
                }
              },
              match: '(?<=\\s|\\G)(start|end)(=)(?=\\s|$)',
              name: 'meta.$1-pattern.nanorc'
            },
            {
              begin: '(?<=\\s|\\G)(start|end)(=)(?=")',
              captures: {
                1: {name: 'variable.parameter.attribute.nanorc'},
                2: {
                  name: 'punctuation.definition.assignment.equals-sign.nanorc'
                }
              },
              end: '(?<=")',
              name: 'meta.$1-pattern.nanorc',
              patterns: [{include: '#regexp'}]
            },
            {include: '#regexp'}
          ]
        }
      ]
    },
    unquotedString: {match: '\\S+', name: 'string.unquoted.bareword.nanorc'}
  },
  scopeName: 'source.nanorc'
}

export default grammar
