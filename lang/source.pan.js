// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pan'],
  names: ['pan'],
  patterns: [
    {include: '#comment'},
    {include: '#pipeline'},
    {include: '#list'},
    {include: '#compound-command'},
    {include: '#loop'},
    {include: '#function-definition'},
    {include: '#string'},
    {include: '#variable'},
    {include: '#heredoc'},
    {include: '#redirection'},
    {include: '#pathname'},
    {include: '#keyword'},
    {include: '#support'},
    {include: '#annotation'}
  ],
  repository: {
    annotation: {
      patterns: [
        {
          begin: '@(\\w*){',
          beginCaptures: {
            0: {name: 'keyword.operator.comment.annotation.token.pan'},
            1: {name: 'keyword.operator.comment.annotation.name.pan'}
          },
          captures: {0: {name: 'punctuation.definition.comment.pan'}},
          end: '(})',
          endCaptures: {1: {name: 'keyword.control.annotation-token.pan'}},
          name: 'comment.block.documentation.annotation.pan'
        }
      ]
    },
    'case-clause': {
      patterns: [
        {
          begin: '(?=\\S)',
          end: ';;',
          endCaptures: {0: {name: 'punctuation.terminator.case-clause.pan'}},
          name: 'meta.scope.case-clause.pan',
          patterns: [
            {
              begin: '(\\(|(?=\\S))',
              captures: {0: {name: 'punctuation.definition.case-pattern.pan'}},
              end: '\\)',
              name: 'meta.scope.case-pattern.pan',
              patterns: [
                {match: '\\|', name: 'punctuation.separator.pipe-sign.pan'},
                {include: '#string'},
                {include: '#variable'},
                {include: '#pathname'}
              ]
            },
            {
              begin: '(?<=\\))',
              end: '(?=;;)',
              name: 'meta.scope.case-clause-body.pan',
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    comment: {
      begin: '(^\\s+)?(?<!\\S)(?=#)(?!#\\{)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.pan'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#!',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.shebang.pan'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.shebang.pan'
        },
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.pan'}},
          end: '\\n',
          name: 'comment.line.number-sign.pan'
        }
      ]
    },
    'compound-command': {
      patterns: [
        {
          begin: '(\\[{1,2})',
          captures: {
            1: {name: 'punctuation.definition.logical-expression.pan'}
          },
          end: '(\\]{1,2})',
          name: 'meta.scope.logical-expression.pan',
          patterns: [{include: '#logical-expression'}, {include: '$self'}]
        },
        {
          begin: '(\\({2})',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.pan'}},
          end: '(\\){2})',
          endCaptures: {0: {name: 'punctuation.definition.string.end.pan'}},
          name: 'string.other.math.pan',
          patterns: [{include: '#math'}]
        },
        {
          begin: '(\\()',
          captures: {1: {name: 'punctuation.definition.subpan.pan'}},
          end: '(\\))',
          name: 'meta.scope.subpan.pan',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=\\s|^)(\\{)(?=\\s|$)',
          captures: {1: {name: 'punctuation.definition.group.pan'}},
          end: '(?<=^|;)\\s*(\\})',
          name: 'meta.scope.group.pan',
          patterns: [{include: '$self'}]
        }
      ]
    },
    'function-definition': {
      patterns: [
        {
          begin: '\\b(function)\\s+([^\\s\\\\]+)(?:\\s*(\\(\\)))?',
          beginCaptures: {
            1: {name: 'storage.type.function.pan'},
            2: {name: 'entity.name.function.pan'},
            3: {name: 'punctuation.definition.arguments.pan'}
          },
          end: ';|&|$',
          endCaptures: {0: {name: 'punctuation.definition.function.pan'}},
          name: 'meta.function.pan',
          patterns: [{include: '$self'}]
        }
      ]
    },
    heredoc: {
      patterns: [
        {
          begin: '(<<)("|\'|)\\\\?(\\w+)\\2',
          beginCaptures: {
            1: {name: 'keyword.operator.heredoc.pan'},
            3: {name: 'keyword.control.heredoc-token.pan'}
          },
          captures: {0: {name: 'punctuation.definition.string.pan'}},
          end: '^(\\3)\\b',
          endCaptures: {1: {name: 'keyword.control.heredoc-token.pan'}},
          name: 'string.unquoted.heredoc.pan'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match: '(?<!-)\\b(if|else|for|foreach|while|return)\\b(?!-)',
          name: 'keyword.control.pan'
        },
        {match: '\\b(include)\\b', name: 'keyword.control.import.include.pan'},
        {match: '\\b(final)\\b', name: 'storage.modifier.final.pan'},
        {match: '\\b(bind)\\b', name: 'storage.modifier.bind.pan'}
      ]
    },
    list: {
      patterns: [{match: ';|&&|&|\\|\\|', name: 'keyword.operator.list.pan'}]
    },
    'logical-expression': {
      patterns: [
        {
          match: '&&|\\|\\||==|!=|>|>=|<|<=',
          name: 'keyword.operator.logical.pan'
        },
        {match: '&|\\|^', name: 'keyword.operator.bitwise.pan'}
      ]
    },
    loop: {
      patterns: [
        {
          begin: '\\b(for)\\s+(?=\\({2})',
          captures: {1: {name: 'keyword.control.pan'}},
          end: '\\b(done)\\b',
          name: 'meta.scope.for-loop.pan',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\b(for)\\b\\s+(.+)\\s+\\b(in)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.pan'},
            2: {
              name: 'variable.other.loop.pan',
              patterns: [{include: '#string'}]
            },
            3: {name: 'keyword.control.pan'}
          },
          end: '(?<![-/])\\bdone\\b(?![-/])',
          endCaptures: {0: {name: 'keyword.control.pan'}},
          name: 'meta.scope.for-in-loop.pan',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\b(while|until)\\b',
          captures: {1: {name: 'keyword.control.pan'}},
          end: '\\b(done)\\b',
          name: 'meta.scope.while-loop.pan',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\b(select)\\s+((?:[^\\s\\\\]|\\\\.)+)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.pan'},
            2: {name: 'variable.other.loop.pan'}
          },
          end: '\\b(done)\\b',
          endCaptures: {1: {name: 'keyword.control.pan'}},
          name: 'meta.scope.select-block.pan',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<!-)\\b(case)\\b(?!-)',
          captures: {1: {name: 'keyword.control.pan'}},
          end: '\\b(esac)\\b',
          name: 'meta.scope.case-block.pan',
          patterns: [
            {
              begin: '\\b(?:in)\\b',
              beginCaptures: {1: {name: 'keyword.control.pan'}},
              end: '(?=\\b(?:esac)\\b)',
              name: 'meta.scope.case-body.pan',
              patterns: [
                {include: '#comment'},
                {include: '#case-clause'},
                {include: '$self'}
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '(?<!-)\\b(if)\\b(?!-|\\s*=)',
          captures: {1: {name: 'keyword.control.pan'}},
          end: '\\b(fi)\\b',
          name: 'meta.scope.if-block.pan',
          patterns: [{include: '$self'}]
        }
      ]
    },
    math: {
      patterns: [
        {include: '#variable'},
        {match: '[-+*/%]', name: 'keyword.operator.arithmetic.pan'},
        {match: '0[xX][[:xdigit:]]+', name: 'constant.numeric.hex.pan'},
        {match: '0\\d+', name: 'constant.numeric.octal.pan'},
        {match: '\\d{1,2}#[0-9a-zA-Z@_]+', name: 'constant.numeric.other.pan'},
        {match: '\\d+', name: 'constant.numeric.integer.pan'}
      ]
    },
    pathname: {
      patterns: [
        {match: '(?<=\\s|:|=|^)~', name: 'keyword.operator.tilde.pan'},
        {match: '\\*|\\?', name: 'keyword.operator.glob.pan'},
        {
          begin: '([?*+@!])(\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.extglob.pan'},
            2: {name: 'punctuation.definition.extglob.pan'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.extglob.pan'}},
          name: 'meta.structure.extglob.pan',
          patterns: [{include: '$self'}]
        }
      ]
    },
    pipeline: {
      patterns: [
        {match: '\\b(time)\\b', name: 'keyword.other.pan'},
        {match: '[|!]', name: 'keyword.operator.pipe.pan'}
      ]
    },
    redirection: {
      patterns: [
        {
          begin: '[><]\\(',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.pan'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.pan'}},
          name: 'string.interpolated.process-substitution.pan',
          patterns: [{include: '$self'}]
        },
        {
          match: '&>|\\d*>&\\d*|\\d*(>>|>|<)|\\d*<&|\\d*<>',
          name: 'keyword.operator.redirect.pan'
        }
      ]
    },
    string: {
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.pan'},
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.pan'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.pan'}},
          name: 'string.quoted.single.pan'
        },
        {
          begin: '\\$?"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.pan'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.pan'}},
          name: 'string.quoted.double.pan',
          patterns: [
            {
              match: '\\\\[\\$`"\\\\\\n]',
              name: 'constant.character.escape.pan'
            },
            {include: '#variable'},
            {include: '#interpolation'}
          ]
        },
        {
          begin: "\\$'",
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.pan'}},
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.pan'}},
          name: 'string.quoted.single.dollar.pan',
          patterns: [
            {
              match: "\\\\(a|b|e|f|n|r|t|v|\\\\|')",
              name: 'constant.character.escape.ansi-c.pan'
            },
            {
              match: '\\\\[0-9]{3}',
              name: 'constant.character.escape.octal.pan'
            },
            {
              match: '\\\\x[0-9a-fA-F]{2}',
              name: 'constant.character.escape.hex.pan'
            },
            {
              match: '\\\\c.',
              name: 'constant.character.escape.control-char.pan'
            }
          ]
        }
      ]
    },
    support: {
      patterns: [
        {
          match:
            '\\b(file_contents|file_exists|format|index|length|match|matches|replace|splice|split|substitute|substr|to_lowercase|to_uppercase)\\b',
          name: 'support.function.pan.string'
        },
        {
          match: '\\b(debug|error|traceback|deprecated)\\b',
          name: 'support.function.pan.debugging'
        },
        {
          match: '\\b(base64_decode|base64_encode|digest|escape|unescape)\\b',
          name: 'support.function.pan.codec'
        },
        {
          match:
            '\\b(append|create|first|dict|key|length|list|merge|next|prepend|splice)\\b',
          name: 'support.function.pan.resource'
        },
        {
          match:
            '\\b(is_boolean|is_defined|is_double|is_list|is_long|is_dict|is_null|is_number|is_property|is_resource|is_string)\\b',
          name: 'support.function.pan.type.checking'
        },
        {
          match:
            '\\b(to_boolean|to_double|to_long|to_string|ip4_to_long|long_to_ip4)\\b',
          name: 'support.function.pan.type.conversion'
        },
        {
          match:
            '\\b(clone|delete|exists|path_exists|if_exists|return|value)\\b',
          name: 'support.function.pan.misc'
        }
      ]
    },
    variable: {
      patterns: [
        {
          captures: {1: {name: 'storage.type.var.pan'}},
          match: '\\b(variable)\\s+(\\w+)\\b',
          name: 'variable.other.pan'
        },
        {
          captures: {2: {name: 'entity.name.type.pan'}},
          match: '\\b(type)\\s+(\\w+)\\b',
          name: 'storage.type.class.pan'
        }
      ]
    }
  },
  scopeName: 'source.pan'
}

export default grammar
