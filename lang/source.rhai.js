// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/rhaiscript/vscode-rhai>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rhai'],
  names: ['rhai'],
  patterns: [{include: '#core'}],
  repository: {
    brackets: {
      patterns: [
        {include: '#round-brackets'},
        {include: '#square-brackets'},
        {include: '#curly-brackets'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*\\*(?![/|\\*])',
          captures: {
            0: {name: 'punctuation.definition.comment.block.documentation.rhai'}
          },
          end: '\\*/',
          name: 'comment.block.documentation.rhai',
          patterns: [{include: '#comments'}]
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.block.rhai'}},
          end: '\\*/',
          name: 'comment.block.rhai',
          patterns: [{include: '#comments'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.comment.documentation.rhai'}
          },
          match: '(///)[^/].*$\\n?',
          name: 'comment.line.documentation.rhai'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.comment.double-slash.rhai'}
          },
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.rhai'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.rhai'}},
          match: '^(#!).*$\\n?',
          name: 'comment.line.shebang.rhai'
        }
      ]
    },
    core: {patterns: [{include: '#expression'}]},
    'curly-brackets': {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'meta.brace.curly.rhai'}},
          end: '\\}',
          endCaptures: {0: {name: 'meta.brace.curly.rhai'}},
          name: 'meta.group.braces.curly',
          patterns: [{include: '$self'}]
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#literal-closure-labels'},
        {include: '#literal-labels'},
        {include: '#literal-keywords'},
        {include: '#support'},
        {include: '#literal-function'},
        {include: '#literal-closure'},
        {include: '#literal-constant'},
        {include: '#literal-template-string'},
        {include: '#literal-language-variable'},
        {include: '#literal-module'},
        {include: '#literal-method-call'},
        {include: '#literal-function-call'},
        {include: '#comments'},
        {include: '#brackets'},
        {include: '#literal-operators'},
        {include: '#literal-namespace'},
        {include: '#literal-variable'},
        {include: '#literal-punctuation'}
      ]
    },
    'function-declaration-parameters': {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.parameters.begin.rhai'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.parameters.end.rhai'}
          },
          patterns: [
            {match: '[_a-zA-Z]\\w*', name: 'variable.parameter.function.rhai'},
            {
              match: '\\,',
              name: 'punctuation.separator.parameter.function.rhai'
            },
            {include: '#parameters-list'}
          ]
        }
      ]
    },
    'literal-closure': {
      patterns: [
        {
          begin: '(\\|)(?=\\s*[_a-zA-Z\\|])',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.begin.rhai'}
          },
          end: '(\\|)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.end.rhai'}
          },
          name: 'meta.function.closure.rhai',
          patterns: [{include: '#parameters-list'}]
        },
        {
          begin: '(\\b[_a-zA-Z]\\w*)\\s*(=)\\s*(\\|)(?=\\s*[_a-zA-Z\\|])',
          beginCaptures: {
            1: {name: 'entity.name.function.closure.rhai'},
            2: {name: 'keyword.operator.assignment.rhai'},
            3: {name: 'punctuation.definition.parameters.closure.begin.rhai'}
          },
          end: '(\\|)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.end.rhai'}
          },
          name: 'meta.function.closure.rhai',
          patterns: [{include: '#parameters-list'}]
        },
        {
          begin: '(=>)\\s*(\\|)(?=\\s*[_a-zA-Z\\|])',
          beginCaptures: {
            1: {name: 'punctuation.separator.switch.case.rhai'},
            2: {name: 'punctuation.definition.parameters.closure.begin.rhai'}
          },
          end: '(\\|)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.end.rhai'}
          },
          name: 'meta.function.closure.rhai',
          patterns: [{include: '#parameters-list'}]
        }
      ]
    },
    'literal-closure-labels': {
      patterns: [
        {
          begin: '(\\b[_a-zA-Z]\\w*)\\s*(\\:)\\s*(\\|)(?=\\s*[_a-zA-Z\\|])',
          beginCaptures: {
            1: {
              name: 'string.unquoted.label.rhai entity.name.function.method.rhai'
            },
            2: {name: 'punctuation.separator.key-value.rhai'},
            3: {name: 'punctuation.definition.parameters.closure.begin.rhai'}
          },
          end: '(\\|)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.end.rhai'}
          },
          name: 'meta.function.closure.rhai',
          patterns: [{include: '#parameters-list'}]
        },
        {
          begin:
            '((\\")((?:[^"]|\\\\")*)(\\"))\\s*(:)\\s*(\\|)(?=\\s*[_a-zA-Z\\|])',
          beginCaptures: {
            1: {name: 'string.quoted.double.rhai'},
            2: {name: 'punctuation.definition.string.begin.rhai'},
            3: {name: 'entity.name.function.method.rhai'},
            4: {name: 'punctuation.definition.string.end.rhai'},
            5: {name: 'punctuation.separator.key-value.rhai'},
            6: {name: 'punctuation.definition.parameters.closure.begin.rhai'}
          },
          end: '(\\|)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.closure.end.rhai'}
          },
          name: 'meta.function.closure.rhai',
          patterns: [{include: '#parameters-list'}]
        }
      ]
    },
    'literal-constant': {
      patterns: [
        {include: '#literal-number'},
        {include: '#literal-string'},
        {include: '#literal-language-constant'}
      ]
    },
    'literal-function': {
      patterns: [
        {
          begin:
            '(?x)\n  (?:\\b(private)\\s+)?\n  \\s*(fn)\n  \\s*([_a-zA-Z]\\w*)\\s*',
          beginCaptures: {
            1: {name: 'storage.modifier.rhai'},
            2: {name: 'storage.type.function.rhai'},
            3: {name: 'entity.name.function.rhai'}
          },
          end: '(?<=\\))',
          name: 'meta.function.rhai',
          patterns: [{include: '#parameters-list'}]
        },
        {match: '\\b(fn)\\b', name: 'keyword.other.function.rhai'},
        {match: '\\b(private)\\b', name: 'keyword.other.modifier.rhai'}
      ]
    },
    'literal-function-call': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.rhai'},
            2: {name: 'punctuation.function-call.capture.rhai'},
            3: {name: 'meta.group.braces.round.function.arguments.rhai'}
          },
          match: '(?x)\n  ([_a-zA-Z]\\w*)(!)?\\s*\n  (\\(\\s*\\))',
          name: 'meta.function-call.without-arguments.rhai'
        },
        {
          captures: {
            1: {name: 'entity.name.function.rhai'},
            2: {name: 'punctuation.function-call.capture.rhai'}
          },
          match: '(?x)\n  ([_a-zA-Z]\\w*)(!)?\\s*\n  (?=\\()',
          name: 'meta.function-call.with-arguments.rhai'
        }
      ]
    },
    'literal-keyword-storage': {
      patterns: [{match: '\\b(const|let)\\b', name: 'storage.type.rhai'}]
    },
    'literal-keywords': {
      patterns: [
        {include: '#literal-keyword-storage'},
        {match: '\\b(return)\\b', name: 'keyword.control.flow.rhai'},
        {
          match: '\\b(if|else|switch)\\b',
          name: 'keyword.control.conditional.rhai'
        },
        {
          match: '\\b(throw|try|catch)\\b',
          name: 'keyword.control.trycatch.rhai'
        },
        {
          match: '\\b(for|in|loop|do|while|until|break|continue)\\b',
          name: 'keyword.control.loop.rhai'
        }
      ]
    },
    'literal-labels': {
      patterns: [
        {
          begin:
            '(?x)\n  (?<!\\?)(?<!\\?\\s)\n    (?=((")((?:[^\\:"]|\\\\")*)("))\\s*:)',
          end: ':',
          endCaptures: {0: {name: 'punctuation.separator.key-value.rhai'}},
          patterns: [{include: '#literal-string'}]
        },
        {
          captures: {
            1: {name: 'string.unquoted.label.rhai'},
            2: {name: 'punctuation.separator.key-value.rhai'}
          },
          match: '(?<!\\.|\\?|\\?\\s)([_a-zA-Z]\\w*)\\s*(:)(?!\\:)',
          name: 'constant.other.object.key.rhai'
        }
      ]
    },
    'literal-language-constant': {
      patterns: [
        {match: '\\btrue\\b', name: 'constant.language.boolean.true.rhai'},
        {match: '\\bfalse\\b', name: 'constant.language.boolean.false.rhai'}
      ]
    },
    'literal-language-namespace': {
      patterns: [
        {
          captures: {
            1: {name: 'meta.path.rhai'},
            2: {
              name: 'constant.language.namespace.global.rhai entity.name.namespace.rhai'
            },
            3: {name: 'punctuation.separator.namespace.rhai'}
          },
          match: '(?<!\\:\\:)\\s*((global)\\s*(\\:\\:))(?!<)'
        }
      ]
    },
    'literal-language-variable': {
      patterns: [{match: '\\bthis\\b', name: 'variable.language.this.rhai'}]
    },
    'literal-method-call': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.rhai'},
            2: {name: 'meta.group.braces.round.function.arguments.rhai'}
          },
          match:
            '(?x)\n  (?:(?<=\\.)|(?<=\\?\\.))\n  \\s*([_a-zA-Z]\\w*)\\s*\n  (\\(\\s*\\))',
          name: 'meta.function-call.method.without-arguments.rhai'
        },
        {
          captures: {1: {name: 'entity.name.function.rhai'}},
          match:
            '(?x)\n  (?:(?<=\\.)|(?<=\\?\\.))\n  \\s*([_a-zA-Z]\\w*)\\s*\n  (?=\\()',
          name: 'meta.function-call.method.with-arguments.rhai'
        }
      ]
    },
    'literal-module': {
      patterns: [
        {match: '\\b(import|export|as)\\b', name: 'keyword.other.module.rhai'}
      ]
    },
    'literal-namespace': {
      patterns: [
        {include: '#literal-language-namespace'},
        {
          captures: {
            1: {name: 'entity.name.namespace.rhai'},
            2: {name: 'punctuation.separator.namespace.rhai'}
          },
          match: '([_a-zA-Z]\\w*)\\s*(\\:\\:)(?!<)',
          name: 'meta.path.rhai'
        },
        {
          captures: {
            1: {name: 'meta.path.rhai'},
            2: {name: 'variable.other.constant.rhai'}
          },
          match: '(?<=\\:\\:)(\\s*([_a-zA-Z]\\w*))\\s*(?!\\:\\:)'
        }
      ]
    },
    'literal-number': {
      patterns: [
        {
          match:
            '(?xi)\n  (?:\n    \\b0b[0-1][_0-1]*|                         # binary\n    \\b0o[0-7][_0-7]*|                         # octal\n    \\b0x[\\da-f][_\\da-f]*|                     # hex\n    (\\B[+\\-])?\\b\\d[_\\d]*\\.\\d[_\\d]*(e[+\\-]?\\d[_\\d]*)?| # e.g. 999.999, 999.99e+123\n    (\\B[+\\-])?\\b\\d[_\\d]*\\.(?!\\.)\\B|           # e.g. 999.\n    (\\B[+\\-])?\\b\\d[_\\d]*(e[+\\-]?\\d[_\\d]*)?    # e.g. 999, 999e+123\n  )',
          name: 'constant.numeric.rhai'
        }
      ]
    },
    'literal-operators': {
      patterns: [
        {
          match:
            '(?x)\n  !(?!=)| # logical-not     right-to-left   right\n  &&    | # logical-and     left-to-right   both\n  \\|\\|    # logical-or      left-to-right   both',
          name: 'keyword.operator.logical.rhai'
        },
        {
          match:
            '(?x)\n  \\bin\\b   | # in             left-to-right   both\n  \\B!in\\b    # not-in         left-to-right   both',
          name: 'keyword.operator.containment.rhai'
        },
        {
          match: '(?x)\n  \\?\\?    # null-coalesce   left-to-right   both',
          name: 'keyword.operator.coalesce.rhai'
        },
        {
          match: '(?x)\n  =(?![=>]) # assignment    right-to-left   both',
          name: 'keyword.operator.assignment.rhai'
        },
        {
          match:
            '(?x)\n  %=   | # assignment       right-to-left   both\n  &=   | # assignment       right-to-left   both\n  \\*\\*=| # assignment       right-to-left   both\n  (?<!\\*)\\*= | # assignment right-to-left   both\n  \\+=  | # assignment       right-to-left   both\n  -=   | # assignment       right-to-left   both\n  /=   | # assignment       right-to-left   both\n  \\^=  | # assignment       right-to-left   both\n  \\|=  | # assignment       right-to-left   both\n  <<=  | # assignment       right-to-left   both\n  >>=    # assignment       right-to-left   both',
          name: 'keyword.operator.assignment.augmented.rhai'
        },
        {
          match:
            '(?x)\n  <<   | # bitwise-shift    left-to-right   both\n  >>   | # bitwise-shift    left-to-right   both\n  &    | # bitwise-and      left-to-right   both\n  \\^   | # bitwise-xor      left-to-right   both\n  \\|     # bitwise-or       left-to-right   both',
          name: 'keyword.operator.bitwise.rhai'
        },
        {
          match:
            '(?x)\n  <=     | # relational     left-to-right   both\n  >=     | # relational     left-to-right   both\n  <(?!-) | # relational     left-to-right   both\n  (?<!-)>  # relational     left-to-right   both',
          name: 'keyword.operator.relational.rhai'
        },
        {
          match:
            '(?x)\n  ==(?!=) | # equality       left-to-right   both\n  !=(?!=)   # equality       left-to-right   both',
          name: 'keyword.operator.comparison.rhai'
        },
        {
          match:
            '(?x)\n  /         | # division        left-to-right   both\n  %         | # modulus         left-to-right   both\n  \\*\\*      | # power           left-to-right   both\n  \\*(?!\\))  | # multiplication  left-to-right   both\n  \\+(?!\\+)  | # addition        left-to-right   both\n  -(?![>-])   # subtraction     left-to-right   both',
          name: 'keyword.operator.arithmetic.rhai'
        },
        {
          match: '\\.\\.(?![\\.=])',
          name: 'keyword.operator.range.exclusive.rhai'
        },
        {match: '\\.\\.=', name: 'keyword.operator.range.inclusive.rhai'},
        {
          match: '\\.(?!\\.)|\\?\\.',
          name: 'keyword.operator.accessor.rhai punctuation.accessor.rhai'
        },
        {match: '=>', name: 'punctuation.separator.switch.case.rhai'},
        {
          match:
            '(\\(\\*|\\*\\)|\\+\\+|--|\\.\\.\\.+|~|#(?!{)|@|\\?|\\$(?!{)|->|<-|===|!==|\\:=|\\:\\:<)',
          name: 'invalid.illegal.operator.rhai'
        }
      ]
    },
    'literal-punctuation': {
      patterns: [
        {match: '\\;', name: 'punctuation.terminator.statement.rhai'},
        {match: '\\,', name: 'meta.delimiter.comma.rhai'}
      ]
    },
    'literal-string': {
      patterns: [
        {
          match:
            "('([^'\\\\]|\\\\([tnr'\\\\]|x[[:xdigit:]]{2}|u[[:xdigit:]]{4}|U[[:xdigit:]]{8}))')",
          name: 'string.quoted.single.rhai',
          patterns: [
            {
              match:
                "\\\\([tnr'\\\\]|x[[:xdigit:]]{2}|u[[:xdigit:]]{4}|U[[:xdigit:]]{8})",
              name: 'constant.character.escape.rhai'
            }
          ]
        },
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.rhai'}
          },
          end: '(")',
          endCaptures: {1: {name: 'punctuation.definition.string.end.rhai'}},
          name: 'string.quoted.double.rhai',
          patterns: [
            {include: '#string-content'},
            {match: '(?<!\\\\)\\n', name: 'invalid.illegal.newline.rhai'},
            {
              match: '\\\\\\n',
              name: 'constant.character.escape.newline.rhai punctuation.separator.continuation'
            }
          ]
        }
      ]
    },
    'literal-template-string': {
      patterns: [
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.rhai'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.rhai'}},
          name: 'string.interpolated.rhai',
          patterns: [
            {include: '#string-content'},
            {
              begin: '\\${',
              beginCaptures: {
                0: {name: 'punctuation.section.interpolation.begin.rhai'}
              },
              end: '}',
              endCaptures: {
                0: {name: 'punctuation.section.interpolation.end.rhai'}
              },
              name: 'meta.interpolation.rhai',
              patterns: [{include: '#expression'}]
            }
          ]
        }
      ]
    },
    'literal-variable': {
      patterns: [
        {match: '[A-Z][_\\dA-Z]*\\b', name: 'variable.other.constant.rhai'},
        {
          captures: {1: {name: 'variable.other.object.rhai'}},
          match: '(?<!\\.)\\s*([_a-zA-Z]\\w*)\\s*(?=(\\.|\\?\\.))'
        },
        {
          captures: {
            1: {name: 'variable.other.property.rhai entity.name.property.rhai'}
          },
          match: '(?:(?<=\\.)|(?<=\\?\\.))\\s*([_a-zA-Z]\\w*)'
        },
        {match: '[_a-zA-Z]\\w*', name: 'variable.other.readwrite.rhai'}
      ]
    },
    'parameters-list': {
      patterns: [
        {match: '[_a-zA-Z]\\w*', name: 'variable.parameter.function.rhai'},
        {match: '\\,', name: 'punctuation.separator.parameter.function.rhai'},
        {include: '#comments'}
      ]
    },
    'round-brackets': {
      patterns: [
        {
          begin: '\\((?!\\*)',
          beginCaptures: {0: {name: 'meta.brace.round.rhai'}},
          end: '(?<!\\*)\\)',
          endCaptures: {0: {name: 'meta.brace.round.rhai'}},
          name: 'meta.group.braces.round',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    'square-brackets': {
      patterns: [
        {
          begin: '\\[|\\?\\[',
          beginCaptures: {0: {name: 'meta.brace.square.rhai'}},
          end: '\\]',
          endCaptures: {0: {name: 'meta.brace.square.rhai'}},
          name: 'meta.group.braces.square',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    'string-content': {
      patterns: [
        {
          match:
            '\\\\(x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|U[\\da-fA-F]{8}|t|r|n|\\\\)',
          name: 'constant.character.escape.rhai'
        },
        {match: '\\\\[^xuUtrn\\\\\\n]', name: 'invalid.illegal.escape.rhai'}
      ]
    },
    support: {
      patterns: [
        {
          match:
            '\\b(print|debug|Fn|call|curry|eval|type_of|is_def_var|is_def_fn|is_shared)\\b',
          name: 'support.function.rhai'
        },
        {
          match:
            '\\b(var|static|shared|goto|exit|match|case|public|protected|new|use|with|module|package|super|thread|spawn|go|await|async|sync|yield|default|void|null|nil)\\b',
          name: 'invalid.illegal.keyword.rhai'
        }
      ]
    }
  },
  scopeName: 'source.rhai'
}

export default grammar
