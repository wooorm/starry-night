// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-sed>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sed'],
  names: ['sed'],
  patterns: [
    {
      begin: '\\A#!',
      beginCaptures: {0: {name: 'punctuation.definition.comment.sed'}},
      end: '$',
      name: 'comment.line.number-sign.hashbang.sed'
    },
    {include: '#main'}
  ],
  repository: {
    addresses: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.numeric.integer.start-index.sed'},
            2: {name: 'keyword.operator.address.range.comma.sed'},
            3: {name: 'constant.numeric.integer.end-index.sed'},
            4: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          match: '([0-9]+)\\s*(,)\\s*([0-9]+)(?:\\s*(!))?',
          name: 'meta.address.numbered.range.sed'
        },
        {
          captures: {
            1: {name: 'constant.numeric.integer.start-index.sed'},
            2: {name: 'keyword.operator.address.range.tilde.gnu.sed'},
            3: {name: 'constant.numeric.integer.step-size.sed'},
            4: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          match: '([0-9]+)\\s*(~)\\s*([0-9]+)(?:\\s*(!))?',
          name: 'meta.address.numbered.range.step.gnu.sed'
        },
        {
          captures: {
            1: {name: 'constant.numeric.integer.line-index.sed'},
            2: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          match: '([0-9]+)(?:\\s*(!))?',
          name: 'meta.address.numbered.sed'
        },
        {
          captures: {0: {name: 'constant.language.anchor.last-line.sed'}},
          match: '\\$',
          name: 'meta.address.last-line.sed'
        },
        {
          begin: '/',
          beginCaptures: {0: {name: 'punctuation.delimiter.pattern.begin.sed'}},
          contentName: 'string.regexp.address.sed',
          end: '(/)([IM]*)(?:\\s*(!))?|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'meta.flags.sed', patterns: [{include: '#flags'}]},
            3: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          name: 'meta.address.pattern.sed',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\\\(.)',
          beginCaptures: {0: {name: 'punctuation.delimiter.address.begin.sed'}},
          contentName: 'string.regexp.address.sed',
          end: '(\\1)([IM]*)(?:\\s*(!))?|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.address.end.sed'},
            2: {
              name: 'meta.modifier.flags.sed',
              patterns: [{include: '#flags'}]
            },
            3: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          name: 'meta.address.pattern.custom-delimiter.sed',
          patterns: [{include: '#regexp'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.address.range.comma.sed'},
            2: {name: 'meta.address.range.nth-line.gnu.sed'},
            3: {name: 'keyword.operator.arithmetic.plus.gnu.sed'},
            4: {name: 'keyword.operator.arithmetic.tilde.gnu.sed'},
            5: {name: 'constant.numeric.integer.line-index.sed'},
            6: {name: 'keyword.operator.logical.not.negation.sed'}
          },
          match: '(,)(\\s*(?:(\\+)|(~)))?\\s*([0-9]*)(?:\\s*(!))?'
        }
      ]
    },
    braces: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.sed'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.sed'}},
      name: 'meta.group.sed',
      patterns: [{include: '#main'}]
    },
    commands: {
      patterns: [
        {match: '[Dd]', name: 'keyword.control.delete.command.sed'},
        {match: '[Pp]', name: 'keyword.control.print.command.sed'},
        {match: '[Hh]', name: 'keyword.control.replace-hold.command.sed'},
        {match: '[Gg]', name: 'keyword.control.replace-pattern.command.sed'},
        {match: 'x', name: 'keyword.control.exchange.command.sed'},
        {match: 'F', name: 'keyword.control.print.filename.gnu.sed'},
        {match: 'n', name: 'keyword.control.skip.command.sed'},
        {match: 'N', name: 'keyword.control.print.newline.sed'},
        {match: '=', name: 'keyword.control.print.line-number.sed'},
        {match: 'z', name: 'keyword.control.zap.gnu.sed'},
        {
          captures: {
            1: {name: 'keyword.control.print.unambiguously.sed'},
            2: {name: 'variable.parameter.line-length.gnu.sed'}
          },
          match: '(l)(?:\\s*([0-9]+))?'
        },
        {
          captures: {
            1: {name: 'keyword.control.quit.command.sed'},
            2: {name: 'keyword.control.quit.silently.command.gnu.sed'},
            3: {name: 'variable.parameter.exit-code.gnu.sed'}
          },
          match: '(?:(q)|(Q))(?:\\s*([0-9]+))?'
        },
        {
          captures: {
            1: {name: 'keyword.control.read.file.command.sed'},
            2: {name: 'keyword.control.read.file.line.command.gnu.sed'},
            3: {name: 'string.unquoted.filename.sed'}
          },
          match: '(?:(r)|(R))\\s*(\\S.*)$'
        },
        {
          captures: {
            1: {name: 'keyword.control.write.file.command.sed'},
            2: {name: 'keyword.control.write.file.command.gnu.sed'},
            3: {name: 'string.unquoted.filename.sed'}
          },
          match: '(?:(w)|(W))\\s*(\\S.*)$'
        },
        {
          captures: {
            1: {name: 'storage.type.function.label.sed'},
            2: {name: 'entity.name.function.label.sed'}
          },
          match: '(:)\\s*([^\\s;#}]+)',
          name: 'meta.label.sed'
        },
        {
          captures: {
            1: {name: 'keyword.control.branch.sed'},
            2: {name: 'keyword.control.branch.inverse.gnu.sed'},
            3: {name: 'entity.name.function.label.sed'}
          },
          match: '(?:([bt])|(T))(?:\\s*([^\\s;#}]+))?',
          name: 'meta.branch.sed'
        },
        {
          begin: '(e)\\s*',
          beginCaptures: {1: {name: 'keyword.control.execute.sed'}},
          contentName: 'string.unquoted.herestring.sed',
          end: '$',
          name: 'meta.execution.sed',
          patterns: [{include: '#escape'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.version.gnu.sed'},
            2: {name: 'constant.other.version-string.sed'}
          },
          match: '(v)(?:\\s*([^\\s;#}]+))?'
        }
      ]
    },
    comment: {
      patterns: [
        {
          begin: '\\A(#)n',
          beginCaptures: {
            0: {name: 'keyword.control.directive.no-autoprint.sed'},
            1: {name: 'punctuation.definition.directive.sed'}
          },
          contentName: 'comment.line.number-sign.sed',
          end: '$'
        },
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.sed'}},
          end: '$',
          name: 'comment.line.number-sign.sed'
        }
      ]
    },
    escape: {
      patterns: [
        {
          begin: '\\\\$\\s*',
          end: '^',
          name: 'constant.character.escape.newline.sed'
        },
        {match: '\\\\t', name: 'constant.character.tab.sed'},
        {match: '\\\\n', name: 'constant.character.newline.sed'},
        {match: '\\\\.', name: 'constant.character.escape.sed'}
      ]
    },
    flags: {
      patterns: [
        {match: 'g', name: 'keyword.operator.modifier.global.sed'},
        {match: 'p', name: 'keyword.operator.modifier.print.sed'},
        {match: '[0-9]+', name: 'keyword.operator.modifier.limit-match.sed'},
        {
          captures: {
            1: {name: 'keyword.operator.modifier.write.file.sed'},
            2: {name: 'string.unquoted.filename.sed'}
          },
          match: '(w)\\s*([^;#}]*)'
        },
        {match: 'e', name: 'keyword.operator.modifier.exec-shell.gnu.sed'},
        {match: 'I|i', name: 'keyword.operator.modifier.ignore-case.gnu.sed'},
        {match: 'M|m', name: 'keyword.operator.modifier.multi-line.gnu.sed'},
        {
          match: '[^;\\s#}gp0-9eIiMm]+',
          name: 'invalid.illegal.unknown.flag.sed'
        }
      ]
    },
    insertion: {
      patterns: [
        {
          begin: '[aic](\\\\)$\\s*',
          beginCaptures: {
            0: {name: 'keyword.control.insertion.command.sed'},
            1: {name: 'constant.character.escape.newline.sed'}
          },
          contentName: 'string.unquoted.herestring.sed',
          end: '$',
          name: 'meta.insertion.sed',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '[aic]',
          beginCaptures: {0: {name: 'keyword.control.insertion.command.sed'}},
          contentName: 'string.unquoted.herestring.sed',
          end: '$',
          name: 'meta.insertion.gnu.sed',
          patterns: [{include: '#escape'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#substitution'},
        {include: '#transliteration'},
        {include: '#insertion'},
        {include: '#addresses'},
        {include: '#semicolon'},
        {include: '#braces'},
        {include: '#commands'}
      ]
    },
    reference: {match: '\\\\[0-9]', name: 'variable.language.reference.sed'},
    regexp: {
      patterns: [
        {match: '\\.', name: 'constant.language.wildcard.dot.match.any.sed'},
        {match: '\\^', name: 'constant.language.anchor.line-start.sed'},
        {match: '\\$', name: 'constant.language.anchor.line-end.sed'},
        {match: '\\*', name: 'constant.language.quantifier.min-0.sed'},
        {match: '\\\\?\\+', name: 'constant.language.quantifier.min-1.sed'},
        {match: '\\\\?\\?', name: 'constant.language.quantifier.max-1.sed'},
        {
          match: '\\\\?\\|',
          name: 'constant.language.alternation.disjunction.sed'
        },
        {match: '\\\\?\\(', name: 'constant.language.group.begin.sed'},
        {match: '\\\\?\\)', name: 'constant.language.group.end.sed'},
        {include: '#reference'},
        {include: '#regexp.miscEscapes'},
        {include: '#regexp.quantiferRanges'},
        {include: '#regexp.bracketExpression'},
        {include: '#regexp.gnuCharacterEscapes'},
        {include: '#regexp.gnuEscapes'},
        {include: '#escape'}
      ]
    },
    'regexp.bracketExpression': {
      begin: '(\\[)(\\^)?\\]?',
      beginCaptures: {
        1: {name: 'punctuation.definition.character-class.begin.sed'},
        2: {name: 'keyword.operator.logical.not.sed'}
      },
      end: '\\]|(?=$)',
      endCaptures: {
        0: {name: 'punctuation.definition.character-class.end.sed'}
      },
      name: 'string.regexp.character-class.sed',
      patterns: [
        {
          match: '(?<!\\G)-(?!$|\\])',
          name: 'punctuation.separator.range.dash.sed'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.character-class.begin.sed'},
            2: {name: 'support.constant.posix-class.sed'},
            3: {name: 'invalid.illegal.unknown.character-class.sed'},
            4: {name: 'punctuation.definition.character-class.end.sed'}
          },
          match:
            '(\\[:)(?:(alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit)|(.*?))(\\:])',
          name: 'constant.language.named.character-class.sed'
        },
        {
          begin: '\\[\\.',
          beginCaptures: {
            0: {name: 'punctuation.definition.collating-symbol.begin.sed'}
          },
          end: '\\.\\]|(?=$)',
          endCaptures: {
            0: {name: 'punctuation.definition.collating-symbol.end.sed'}
          },
          name: 'constant.language.collating-symbol.sed',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '\\[=',
          beginCaptures: {
            0: {name: 'punctuation.definition.equivalence-class.begin.sed'}
          },
          end: '=\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.equivalence-class.end.sed'}
          },
          name: 'constant.language.equivalence-class.sed',
          patterns: [{include: '#escape'}]
        },
        {include: '#escape'}
      ]
    },
    'regexp.gnuCharacterEscapes': {
      patterns: [
        {match: '\\\\a', name: 'constant.character.escape.alert.gnu.sed'},
        {match: '\\\\f', name: 'constant.character.escape.form-feed.gnu.sed'},
        {
          match: '\\\\r',
          name: 'constant.character.escape.carriage-return.gnu.sed'
        },
        {match: '\\\\t', name: 'constant.character.escape.tab.gnu.sed'},
        {
          match: '\\\\v',
          name: 'constant.character.escape.vertical-tab.gnu.sed'
        },
        {match: '\\\\c.', name: 'constant.character.escape.control-x.gnu.sed'},
        {
          match: '\\\\d[0-9]{3}',
          name: 'constant.character.escape.decimal.codepoint.gnu.sed'
        },
        {
          match: '\\\\o[0-7]{3}',
          name: 'constant.character.escape.octal.codepoint.gnu.sed'
        },
        {
          match: '\\\\x[0-9A-Fa-f]{2}',
          name: 'constant.character.escape.hex.codepoint.gnu.sed'
        }
      ]
    },
    'regexp.gnuEscapes': {
      patterns: [
        {
          match: '\\\\[Ll]',
          name: 'keyword.operator.lowercase.conversion.gnu.sed'
        },
        {
          match: '\\\\[Uu]',
          name: 'keyword.operator.uppercase.conversion.gnu.sed'
        },
        {match: '\\\\E', name: 'keyword.operator.end.conversion.gnu.sed'},
        {match: '\\\\w', name: 'constant.language.word-character.gnu.sed'},
        {
          match: '\\\\W',
          name: 'constant.language.word-character.negated.gnu.sed'
        },
        {match: '\\\\b', name: 'constant.language.word-boundary.gnu.sed'},
        {
          match: '\\\\B',
          name: 'constant.language.word-boundary.negated.gnu.sed'
        },
        {
          match: '\\\\s',
          name: 'constant.language.whitespace-character.gnu.sed'
        },
        {
          match: '\\\\S',
          name: 'constant.language.whitespace-character.negated.gnu.sed'
        },
        {
          match: '\\\\<',
          name: 'constant.language.anchor.beginning-of-word.gnu.sed'
        },
        {match: '\\\\>', name: 'constant.language.anchor.end-of-word.gnu.sed'},
        {
          match: '\\\\`',
          name: 'constant.language.anchor.start-of-pattern.gnu.sed'
        },
        {
          match: "\\\\'",
          name: 'constant.language.anchor.end-of-pattern.gnu.sed'
        }
      ]
    },
    'regexp.miscEscapes': {
      patterns: [
        {match: '\\\\\\$', name: 'constant.character.escape.dollar-sign.sed'},
        {match: '\\\\\\*', name: 'constant.character.escape.asterisk.sed'},
        {match: '\\\\\\.', name: 'constant.character.escape.dot.period.sed'},
        {
          match: '\\\\\\[',
          name: 'constant.character.escape.square.bracket.sed'
        },
        {match: '\\\\{2}', name: 'constant.character.escape.backslash.sed'},
        {match: '\\\\\\^', name: 'constant.character.escape.caret.sed'}
      ]
    },
    'regexp.quantiferRanges': {
      patterns: [
        {
          captures: {
            1: {
              name: 'punctuation.definition.quantifier.bracket.curly.begin.sed'
            },
            2: {name: 'constant.numeric.integer.sed'},
            3: {name: 'punctuation.separator.range.comma.sed'},
            4: {name: 'constant.numeric.integer.sed'},
            5: {name: 'punctuation.definition.quantifier.bracket.curly.end.sed'}
          },
          match: '(\\\\{)([0-9]+)(?:(,)([0-9]+)?)?(\\\\})',
          name: 'meta.escaped.quantifier.specific.range.sed'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.quantifier.bracket.curly.begin.sed'
            },
            2: {name: 'constant.numeric.integer.sed'},
            3: {name: 'punctuation.separator.range.comma.sed'},
            4: {name: 'constant.numeric.integer.sed'},
            5: {name: 'punctuation.definition.quantifier.bracket.curly.end.sed'}
          },
          match: '({)([0-9]+)(?:(,)([0-9]+)?)?(})',
          name: 'meta.unescaped.quantifier.specific.range.sed'
        }
      ]
    },
    'replacement.innards': {
      patterns: [
        {match: '&', name: 'variable.language.input.sed'},
        {include: '#reference'},
        {include: '#escape'}
      ]
    },
    semicolon: {
      match: ';',
      name: 'punctuation.terminator.statement.semicolon.sed'
    },
    substitution: {
      patterns: [
        {
          begin: '(s)(#)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(#)([^;#}]*+)|(?=$|[;#}])',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'meta.options.sed', patterns: [{include: '#flags'}]}
          },
          name: 'meta.substitution.pound-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.regexp.substitution.search.sed',
              end: '#|(?=$)',
              endCaptures: {
                0: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.match-pattern.sed',
              patterns: [{include: '#regexp'}]
            },
            {
              begin: '(?<=#)',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)(?=#)|(?=$)',
              name: 'meta.replacement.sed',
              patterns: [{include: '#replacement.innards'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(s)(;)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(;)([^;#}]*+)|(?=$|[;#}])',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'meta.options.sed', patterns: [{include: '#flags'}]}
          },
          name: 'meta.substitution.semicolon-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.regexp.substitution.search.sed',
              end: ';|(?=$)',
              endCaptures: {
                0: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.match-pattern.sed',
              patterns: [{include: '#regexp'}]
            },
            {
              begin: '(?<=;)',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)(?=;)|(?=$)',
              name: 'meta.replacement.sed',
              patterns: [{include: '#replacement.innards'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(s)(})',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(})([^;#}]*+)|(?=$|[;#}])',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'meta.options.sed', patterns: [{include: '#flags'}]}
          },
          name: 'meta.substitution.brace-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.regexp.substitution.search.sed',
              end: '}|(?=$)',
              endCaptures: {
                0: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.match-pattern.sed',
              patterns: [{include: '#regexp'}]
            },
            {
              begin: '(?<=})',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)(?=})|(?=$)',
              name: 'meta.replacement.sed',
              patterns: [{include: '#replacement.innards'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: 's',
          beginCaptures: {0: {name: 'keyword.control.command.sed'}},
          end: '$|(?<=^)|(?=[;#}])',
          name: 'meta.substitution.sed',
          patterns: [
            {
              begin: '\\G(.)',
              beginCaptures: {
                1: {name: 'punctuation.delimiter.pattern.begin.sed'}
              },
              contentName: 'string.regexp.substitution.search.sed',
              end: '-?(?=\\1|$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.match-pattern.sed',
              patterns: [{include: '#regexp'}]
            },
            {
              begin: '([^;#}])',
              beginCaptures: {
                1: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              contentName: 'string.quoted.double.sed',
              end: '(\\1)([^;#}]*+)|(?=$)',
              endCaptures: {
                1: {name: 'punctuation.delimiter.pattern.end.sed'},
                2: {name: 'meta.options.sed', patterns: [{include: '#flags'}]}
              },
              name: 'meta.replacement.sed',
              patterns: [{include: '#replacement.innards'}]
            }
          ]
        }
      ]
    },
    transliteration: {
      patterns: [
        {
          match: 'y {2}[^ ]*(?: |$)|y\\t{2}[^\\t]*(?:\\t|$)',
          name: 'invalid.illegal.syntax.transliteration.sed'
        },
        {
          begin: '(y)( )',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.whitespace.begin.sed'}
          },
          end: '( )([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.whitespace.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.space-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '(-)?( )|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.whitespace.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(?<= )',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)-?(?= )|(?=$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(y)(\\t)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.whitespace.begin.sed'}
          },
          end: '(\\t)([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.whitespace.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.tab-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '(-)?(\\t)|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.whitespace.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(?<=\\t)',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)-?(?=\\t)|(?=$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(y)(;)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(;)([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.semicolon-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '(-)?(;)|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(?<=;)',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)-?(?=;)|(?=$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(y)(})',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(})([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.brace-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '(-)?(})|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(?<=})',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)-?(?=})|(?=$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(y)(#)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(#)([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.pound-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '(-)?(#)|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(?<=#)',
              contentName: 'string.quoted.double.sed',
              end: '(?!\\G)-?(?=#)|(?=$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '(y)(-)',
          beginCaptures: {
            1: {name: 'keyword.control.command.sed'},
            2: {name: 'punctuation.delimiter.pattern.begin.sed'}
          },
          end: '(-)([^#;}]*)|$',
          endCaptures: {
            1: {name: 'punctuation.delimiter.pattern.end.sed'},
            2: {name: 'invalid.illegal.extra-characters.sed'}
          },
          name: 'meta.transliteration.dash-delimiter.sed',
          patterns: [
            {
              begin: '\\G',
              contentName: 'string.quoted.double.sed',
              end: '-|(?=$)',
              endCaptures: {
                0: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              name: 'meta.source-characters.sed',
              patterns: [{include: '#escape'}]
            },
            {
              begin: '(?<=-)',
              contentName: 'string.quoted.double.sed',
              end: '(?=$|-)',
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#escape'}]
            },
            {include: '#escape'}
          ]
        },
        {
          begin: 'y',
          beginCaptures: {0: {name: 'keyword.control.command.sed'}},
          end: '$|(?=[\\s#;}])|(?<=^)',
          name: 'meta.transliteration.sed',
          patterns: [
            {
              begin: '\\G(.)',
              beginCaptures: {
                1: {name: 'punctuation.delimiter.pattern.begin.sed'}
              },
              contentName: 'string.quoted.double.sed',
              end: '-?(?=\\1|$)',
              endCaptures: {0: {name: 'string.quoted.double.sed'}},
              name: 'meta.source-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            },
            {
              begin: '(.)',
              beginCaptures: {
                1: {name: 'punctuation.delimiter.pattern.middle.sed'}
              },
              contentName: 'string.quoted.double.sed',
              end: '(-)?(\\1)([^#;}]*+)|(?=$)',
              endCaptures: {
                1: {name: 'string.quoted.double.sed'},
                2: {name: 'punctuation.delimiter.pattern.end.sed'},
                3: {name: 'invalid.illegal.extra-characters.sed'}
              },
              name: 'meta.replacement-characters.sed',
              patterns: [{include: '#transliteration.ranges'}]
            }
          ]
        }
      ]
    },
    'transliteration.ranges': {
      patterns: [
        {match: '\\G-'},
        {match: '-', name: 'keyword.operator.range.dash.sed'},
        {include: '#escape'}
      ]
    }
  },
  scopeName: 'source.sed'
}

export default grammar
