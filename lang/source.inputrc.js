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
  dependencies: ['etc'],
  extensions: [],
  names: ['readline-config', 'inputrc', 'readline'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.ini.inputrc'}},
      end: '$',
      name: 'comment.line.number-sign.ini.inputrc'
    },
    conditional: {
      patterns: [
        {
          begin: '(?i)^\\s*((\\$)if)(?=\\s|$)(.*)',
          beginCaptures: {
            1: {name: 'keyword.control.flow.if.inputrc'},
            2: {name: 'punctuation.definition.directive.inputrc'},
            3: {patterns: [{include: '#conditions'}]}
          },
          end: '(?i)^\\s*((\\$)endif)(?=\\s|$)',
          endCaptures: {
            1: {name: 'keyword.control.flow.endif.inputrc'},
            2: {name: 'punctuation.definition.directive.inputrc'}
          },
          name: 'meta.conditional.inputrc',
          patterns: [{include: '#main'}]
        },
        {
          beginCaptures: {
            1: {name: 'keyword.control.flow.$3.inputrc'},
            2: {name: 'punctuation.definition.directive.inputrc'}
          },
          match: '(?i)^\\s*((\\$)(else|endif))(?=\\s|$)'
        }
      ]
    },
    conditions: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter.condition.mode.inputrc'},
            2: {name: 'keyword.operator.comparison.inputrc'},
            3: {name: 'constant.language.editing-mode.inputrc'}
          },
          match:
            '(?i)(?:^|\\G)\\s*(mode)\\s*(==|=|!=)\\s*(?:(emacs|vi)(?=\\s|$))?'
        },
        {
          captures: {
            1: {name: 'variable.parameter.condition.term.inputrc'},
            2: {name: 'keyword.operator.comparison.inputrc'},
            3: {name: 'constant.language.terminal-type.inputrc'}
          },
          match: '(?i)(?:^|\\G)\\s*(term)\\s*(==|=|!=)\\s*(\\S.*?)\\s*$'
        },
        {
          captures: {
            1: {name: 'variable.parameter.condition.version.inputrc'},
            2: {name: 'keyword.operator.comparison.inputrc'},
            3: {patterns: [{include: 'etc#num'}]}
          },
          match:
            '(?i)(?:^|\\G)\\s*(version)\\s*(==|=|!=|<=|>=|<|>)\\s*(?:([-+]?[.\\d]+))?'
        },
        {
          captures: {
            1: {name: 'variable.parameter.condition.named.inputrc'},
            2: {name: 'keyword.operator.comparison.inputrc'},
            3: {name: 'constant.logical.bool.boolean.${3:/downcase}.inputrc'},
            4: {name: 'string.unquoted.inputrc'}
          },
          match:
            '(?i)(?:^|\\G)\\s*([^\\s!=#]+)\\s*(==|=|!=)\\s*(?:(on|off)(?=\\s|$)|(\\S.*))?'
        },
        {
          captures: {
            1: {name: 'variable.parameter.condition.application.inputrc'}
          },
          match: '(?i)(?:^|\\G)\\s*([^\\s!=#]+)\\s*$'
        }
      ]
    },
    escapes: {
      patterns: [
        {match: '\\\\a', name: 'constant.character.escape.alert.inputrc'},
        {match: '\\\\b', name: 'constant.character.escape.backspace.inputrc'},
        {match: '\\\\d', name: 'constant.character.escape.delete.inputrc'},
        {match: '\\\\f', name: 'constant.character.escape.form-feed.inputrc'},
        {match: '\\\\n', name: 'constant.character.escape.newline.inputrc'},
        {
          match: '\\\\r',
          name: 'constant.character.escape.carriage-return.inputrc'
        },
        {
          match: '\\\\t',
          name: 'constant.character.escape.horizontal-tab.inputrc'
        },
        {
          match: '\\\\v',
          name: 'constant.character.escape.vertical-tab.inputrc'
        },
        {
          match: '\\\\C',
          name: 'constant.character.escape.control-prefix.inputrc'
        },
        {match: '\\\\M', name: 'constant.character.escape.meta-prefix.inputrc'},
        {match: '\\\\e', name: 'constant.character.escape.literal.inputrc'},
        {match: '\\{2}', name: 'constant.character.escape.backslash.inputrc'},
        {
          match: '\\\\"',
          name: 'constant.character.escape.quote.double.inputrc'
        },
        {
          match: "\\\\'",
          name: 'constant.character.escape.quote.single.inputrc'
        },
        {
          match: '\\\\[0-7]{1,3}',
          name: 'constant.character.escape.codepoint.octal.inputrc'
        },
        {
          match: '\\\\x[a-fA-F0-9]{1,2}',
          name: 'constant.character.escape.codepoint.hex.inputrc'
        }
      ]
    },
    include: {
      begin: '^\\s*((\\$)include)(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.control.directive.include.inputrc'},
        2: {name: 'punctuation.definition.directive.inputrc'}
      },
      contentName: 'string.unquoted.file.path.inputrc',
      end: '$',
      name: 'meta.include.inputrc',
      patterns: [{include: '#escapes'}]
    },
    keyBinding: {
      begin: '(?i)^\\s*(?!set(?:\\s|$)|\\$)(?=[^\\s#])',
      end: '$',
      name: 'meta.key-binding.inputrc',
      patterns: [
        {include: '#keyName'},
        {
          begin: ':[ \\t]*',
          beginCaptures: {0: {patterns: [{include: 'etc#kolon'}]}},
          end: '(?=$)',
          patterns: [
            {
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.inputrc'}
              },
              end: '"|(?=$)',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.inputrc'}
              },
              name: 'string.quoted.double.macro.inputrc',
              patterns: [{include: '#escapes'}]
            },
            {
              begin: "\\G'",
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.inputrc'}
              },
              end: "'|(?=$)",
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.inputrc'}
              },
              name: 'string.quoted.single.macro.inputrc',
              patterns: [{include: '#escapes'}]
            },
            {match: '\\G([-\\w]+)', name: 'entity.name.function.inputrc'},
            {
              begin: '(?<=[\'"\\s])\\s*(?=\\S)',
              end: '$',
              name: 'comment.line.ignored.inputrc'
            }
          ]
        }
      ]
    },
    keyName: {
      patterns: [
        {
          begin: '\\G(")',
          beginCaptures: {
            0: {name: 'string.quoted.double.inputrc'},
            1: {name: 'punctuation.definition.string.begin.inputrc'}
          },
          end: '(")|(?=$)',
          endCaptures: {
            0: {name: 'string.quoted.double.inputrc'},
            1: {name: 'punctuation.definition.string.end.inputrc'}
          },
          name: 'meta.key-name.quoted.inputrc',
          patterns: [{include: '#keyNameInnards'}]
        },
        {
          begin: "\\G(')",
          beginCaptures: {
            0: {name: 'string.quoted.single.inputrc'},
            1: {name: 'punctuation.definition.string.begin.inputrc'}
          },
          end: "(')|(?=$)",
          endCaptures: {
            0: {name: 'string.quoted.single.inputrc'},
            1: {name: 'punctuation.definition.string.end.inputrc'}
          },
          name: 'meta.key-name.quoted.inputrc',
          patterns: [{include: '#keyNameInnards'}]
        },
        {
          captures: {1: {patterns: [{include: '#keyNameInnards'}]}},
          match: '\\G((?:[^\\\\:\\s]|\\\\.)+)',
          name: 'meta.key-name.unquoted.inputrc'
        }
      ]
    },
    keyNameInnards: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.dash.hyphen.inputrc'},
            2: {name: 'constant.character.key-name.symbolic.inputrc'}
          },
          match:
            '(?i)(-)?\\b(CONTROL|DEL|ESCAPE|ESC|LFD|META|NEWLINE|RETURN|RET|RUBOUT|SPACE|SPC|TAB)\\b'
        },
        {include: '#escapes'},
        {
          captures: {
            1: {name: 'punctuation.separator.dash.hyphen.inputrc'},
            2: {name: 'constant.character.key-name.literal.inputrc'}
          },
          match: '(-)?(\\S)'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#include'},
        {include: '#conditional'},
        {include: '#variable'},
        {include: '#keyBinding'}
      ]
    },
    variable: {
      begin: '(?i)^\\s*(set)(?=\\s|$)[ \\t]*',
      beginCaptures: {1: {name: 'keyword.operator.set.inputrc'}},
      end: '$',
      patterns: [
        {
          begin: '(?i)\\G(bell-style)(?=\\s|$)',
          beginCaptures: {1: {name: 'variable.assignment.inputrc'}},
          end: '(?i)(visible|audible|none)(?=\\s|$)|(?=$|#|\\S)',
          endCaptures: {1: {name: 'constant.language.bell-style.inputrc'}}
        },
        {
          begin: '(?i)\\G(editing-mode)(?=\\s|$)',
          beginCaptures: {1: {name: 'variable.assignment.inputrc'}},
          end: '(?i)(emacs|vi)(?=\\s|$)|(?=$|#|\\S)',
          endCaptures: {1: {name: 'constant.language.editing-mode.inputrc'}}
        },
        {
          begin:
            '(?i)\\G(comment-begin|emacs-mode-string|vi-(?:cmd|ins)-mode-string)(?=\\s|$)\\s*',
          beginCaptures: {1: {name: 'variable.assignment.inputrc'}},
          contentName: 'string.unquoted.inputc',
          end: '(?=$)',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: '(?i)\\G([-a-z0-9]+)(?=\\s|$)',
          beginCaptures: {1: {name: 'variable.assignment.inputrc'}},
          end: '(?i)(?:(on|off)(?=\\s|$)|([^#\\s]+))|(?=$|#)',
          endCaptures: {
            1: {name: 'constant.logical.bool.boolean.${1:/downcase}.inputrc'},
            2: {patterns: [{include: 'etc#num'}, {include: 'etc#bareword'}]}
          }
        }
      ]
    }
  },
  scopeName: 'source.inputrc'
}

export default grammar
