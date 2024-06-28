// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c++', 'source.java'],
  extensions: ['.bison', '.y', '.yacc'],
  names: ['bison', 'yacc'],
  patterns: [{include: '#main'}],
  repository: {
    action: {
      patterns: [
        {
          begin: '(%\\?)({)',
          beginCaptures: {
            1: {name: 'keyword.operator.predicate.action.yacc'},
            2: {name: 'punctuation.section.block.begin.bracket.curly.c'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.block.end.bracket.curly.c'}
          },
          name: 'meta.predicate.yacc',
          patterns: [{include: '#action-innards'}]
        },
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.bracket.curly.c'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.block.end.bracket.curly.c'}
          },
          name: 'meta.action.yacc',
          patterns: [{include: '#action-innards'}]
        }
      ]
    },
    'action-innards': {
      patterns: [
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.bracket.curly.c'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.section.block.end.bracket.curly.c'}
          },
          patterns: [{include: '#action-innards'}]
        },
        {include: '#action-vars'},
        {include: '#bison-defs'},
        {include: 'source.c++'}
      ]
    },
    'action-vars': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.symbol.yacc'}},
          match: '(\\$)(undefined|accept|end)(?![-.])\\b',
          name: 'constant.language.predefined-symbol.$2.yacc'
        },
        {
          match: '(?<![-.$])\\b(error)(?![-.])\\b',
          name: 'constant.language.predefined-symbol.error.yacc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.yacc'}},
          match: '(\\$@)([0-9]+)',
          name: 'variable.language.midrule-action-symbol.$2.nth.yacc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.yacc'}},
          match: '(@)\\$',
          name: 'variable.language.rule-location.lhs.yacc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.yacc'}},
          match: '(@)([0-9]+)',
          name: 'variable.language.positional.rule-location.rhs.$2.yacc.yacc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.yacc'}},
          match: '(\\$)\\$',
          name: 'variable.language.rule-value.lhs.yacc'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.yacc'}},
          match: '(\\$)([0-9]+)',
          name: 'variable.language.positional.rule-value.rhs.$2.yacc.yacc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.yacc'},
            2: {name: 'punctuation.definition.variable.yacc'},
            3: {name: 'punctuation.section.begin.brace.bracket.square.yacc'},
            4: {name: 'punctuation.section.end.bbrace.racket.square.yacc'}
          },
          match:
            '(@)[A-Za-z_.][-.\\w]*|(@)(\\[)\\s*[A-Za-z_.][-.\\w]*\\s*(\\])',
          name: 'variable.language.symbol-location.yacc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.yacc'},
            2: {name: 'punctuation.definition.variable.begin.yacc'},
            3: {name: 'punctuation.definition.variable.end.yacc'}
          },
          match:
            '(\\$)[A-Za-z_.][-.\\w]*|(\\$\\[)\\s*[A-Za-z_.][-.\\w]*\\s*(\\])',
          name: 'variable.language.symbol-value.yacc'
        }
      ]
    },
    'bison-defs': {
      patterns: [
        {
          match:
            '(?x) (?<![.-]) \\b\n(YYABORT|YYACCEPT|YYBACKUP|YYDEBUG|YYERROR_VERBOSE|YYERROR|YYFPRINTF|YYINITDEPTH\n|YYMAXDEPTH|YYPRINT|YYRECOVERING|YYSTACK_USE_ALLOCA|yyerrok|yyerror|yylex|yyparse\n|yypstate_delete|yypstate_new|yypull_parse|yypush_parse)\n\\b (?![.-])',
          name: 'support.function.$1.yacc'
        },
        {
          match:
            '(?<![.-])\\b(yychar|yyclearin|yydebug|yylloc|yylval|yynerrs)\\b(?![.-])',
          name: 'support.variable.$1.yacc'
        },
        {
          match: '(?<![.-])\\b(YYSTYPE|YYLTYPE)\\b(?![.-])',
          name: 'support.type.$1.yacc'
        }
      ]
    },
    comment: {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.yacc'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.yacc'}},
      name: 'comment.block.yacc'
    },
    constant: {match: '\\w+', name: 'constant.language.other.token.yacc'},
    'data-type': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.angle.bracket.begin.yacc'},
            2: {name: 'constant.language.default.yacc'},
            3: {name: 'punctuation.definition.angle.bracket.end.yacc'}
          },
          match: '(<)(\\*)(>)',
          name: 'storage.modifier.type.yacc'
        },
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.definition.angle.bracket.begin.yacc'}
          },
          end: '>',
          endCaptures: {
            0: {name: 'punctuation.definition.angle.bracket.end.yacc'}
          },
          name: 'storage.modifier.type.yacc'
        }
      ]
    },
    'declaration-innards': {
      patterns: [
        {include: '#constant'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#data-type'}
      ]
    },
    'declaration-section': {
      begin: '(?<=%})',
      end: '^(?=\\s*%%)',
      name: 'meta.declarations.yacc',
      patterns: [
        {include: '#declarations'},
        {include: '#comment'},
        {include: '#data-type'}
      ]
    },
    declarations: {
      patterns: [
        {
          begin: '^\\s*((%)union)\\b',
          beginCaptures: {
            1: {name: 'keyword.control.directive.union.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'}
          },
          end: '^(?=\\s*%)|(?<=})',
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '^\\s*((%)code)\\s+(imports)\\s*({)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.code.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'},
            3: {name: 'constant.language.other.qualifier.yacc'},
            4: {name: 'punctuation.definition.curly.bracket.begin.yacc'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.curly.bracket.end.yacc'}
          },
          name: 'meta.code-block.yacc',
          patterns: [{include: 'source.java'}]
        },
        {
          begin:
            '^\\s*((%)(code|lex-param|parse-param|param|printer))(?:\\s+(\\w+))?\\s*({)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.$3.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'},
            4: {name: 'constant.language.other.qualifier.yacc'},
            5: {name: 'punctuation.definition.curly.bracket.begin.yacc'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.curly.bracket.end.yacc'}
          },
          name: 'meta.$3-block.yacc',
          patterns: [{include: 'source.c++'}]
        },
        {
          captures: {
            1: {name: 'keyword.control.directive.defines.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'},
            3: {name: 'string.unquoted.filename.yacc'}
          },
          match: '^\\s*((%)defines)(?=\\s|$|/\\*|//)(?:\\s+(?!//|/\\*)(\\S+))?',
          name: 'meta.defines.yacc'
        },
        {
          begin: '^\\s*((%)define)(?:\\s+([A-Za-z_.][-.\\w]*))?\\s*({)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.define.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'},
            3: {name: 'entity.name.var.yacc'},
            4: {name: 'punctuation.definition.curly.bracket.begin.yacc'}
          },
          end: '}',
          endCaptures: {
            0: {name: 'punctuation.definition.curly.bracket.end.yacc'}
          },
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '^\\s*((%)define)(?:\\s+([A-Za-z_.][-.\\w]*))?',
          beginCaptures: {
            1: {name: 'keyword.control.directive.define.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'},
            3: {name: 'entity.name.var.yacc'}
          },
          end: '(?=\\s*$)|^(?!\\s{2,}(?=\\w))|^(?=\\s*%%)',
          patterns: [{include: '#declaration-innards'}]
        },
        {
          begin: '^\\s*((%)option)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.option.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'}
          },
          end: '$|(?=\\s*(?://|/\\*))|^(?=\\s*%%)',
          patterns: [
            {
              match: '[A-Za-z_.][-.\\w]*',
              name: 'constant.language.option-name.yacc'
            },
            {include: '#declaration-innards'}
          ]
        },
        {
          begin:
            '(?x)\n^\\s* ((%)\n(code|debug|destructor|dprec|empty|error-verbose|expect-rr|expect\n|file-prefix|glr-parser|initial-action|language|left|lex-param\n|locations|merge|name-prefix|no-lines|nonassoc|nterm|output|param\n|parse-param|precedence|prec|printer|pure-parser|required?|right|skeleton\n|start|token-table|token|type|verbose|yacc))\\b',
          beginCaptures: {
            1: {name: 'keyword.control.directive.$3.yacc'},
            2: {name: 'punctuation.definition.token.percentage-sign.yacc'}
          },
          end: '^(?!\\s{2,}(?=\\w))|^(?=\\s*%%)',
          patterns: [{include: '#declaration-innards'}]
        },
        {
          begin: '^\\s*(%{)',
          beginCaptures: {1: {name: 'punctuation.section.embedded.begin.yacc'}},
          end: '^\\s*(%})',
          endCaptures: {1: {name: 'punctuation.section.embedded.end.yacc'}},
          patterns: [{include: 'source.c++'}]
        }
      ]
    },
    epilogue: {
      begin: '(?<=%%)',
      end: '(?=A)B',
      name: 'meta.epilogue.yacc',
      patterns: [{include: 'source.c++'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#prologue'},
        {include: '#declaration-section'},
        {include: '#rules'},
        {include: '#epilogue'},
        {include: 'source.c++'}
      ]
    },
    prologue: {
      patterns: [
        {match: '^\\s*(%{)', name: 'punctuation.section.embedded.begin.yacc'},
        {match: '^\\s*(%})', name: 'punctuation.section.embedded.end.yacc'},
        {include: '#declarations'}
      ]
    },
    rule: {
      begin: '^\\s*([A-Za-z_.][-.\\w]*)\\s*(:)',
      beginCaptures: {
        1: {name: 'entity.name.rule.yacc'},
        2: {name: 'punctuation.separator.key-value.colon.yacc'}
      },
      end: '\\s*(;)\\s*',
      endCaptures: {
        1: {name: 'punctuation.terminator.statement.semicolon.yacc'}
      },
      name: 'meta.rule.yacc',
      patterns: [
        {match: '([A-Za-z_.][-.\\w]*)', name: 'entity.name.rule.yacc'},
        {match: '\\|', name: 'keyword.operator.logical.or.yacc'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#action'}
      ]
    },
    rules: {
      begin: '^\\s*(%%)',
      beginCaptures: {1: {name: 'keyword.control.section.begin.yacc'}},
      end: '^\\s*(%%)',
      endCaptures: {1: {name: 'keyword.control.section.end.yacc'}},
      name: 'meta.rules.yacc',
      patterns: [{include: '#comment'}, {include: '#rule'}]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.yacc'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.yacc'}},
          name: 'string.quoted.double.yacc'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.yacc'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.yacc'}},
          name: 'string.quoted.single.yacc'
        }
      ]
    }
  },
  scopeName: 'source.yacc'
}

export default grammar
