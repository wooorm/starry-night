// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/boundaryml/textMate-baml>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.baml'],
  names: ['baml'],
  patterns: [
    {include: '#comments'},
    {include: '#client'},
    {include: '#retry-policy'},
    {include: '#generator'},
    {include: '#template-string'},
    {include: '#block-attribute'},
    {include: '#enum'},
    {include: '#type-alias'},
    {include: '#implements-for'},
    {include: '#interface'},
    {include: '#class'},
    {include: '#function'},
    {include: '#testset'},
    {include: '#test'},
    {include: '#let-statement'},
    {include: '#semicolon'}
  ],
  repository: {
    'accessor-dot': {match: '\\.', name: 'punctuation.accessor.baml'},
    'array-destructure-pattern': {
      begin: '(?:\\b((?:let|const))\\b\\s*)?(\\[)',
      beginCaptures: {
        1: {name: 'keyword.declaration.binding.baml'},
        2: {name: 'punctuation.definition.array.begin.baml'}
      },
      end: '(\\])(?:\\s*(:)\\s*((?:(?!\\s*(?:in\\b|if\\b|=>|=|[,}\\)])).)+))?',
      endCaptures: {
        1: {name: 'punctuation.definition.array.end.baml'},
        2: {name: 'punctuation.separator.colon.baml'},
        3: {patterns: [{include: '#comments'}, {include: '#type-expression'}]}
      },
      name: 'meta.pattern.destructure.array.baml',
      patterns: [
        {include: '#comments'},
        {include: '#array-destructure-rest-operator'},
        {include: '#pattern'},
        {include: '#comma'}
      ]
    },
    'array-destructure-rest-operator': {
      match: '\\.\\.',
      name: 'keyword.operator.rest.baml'
    },
    'array-expression': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.array.begin.baml'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.baml'}},
      name: 'meta.expression.array.baml',
      patterns: [
        {include: '#comments'},
        {include: '#expression'},
        {include: '#comma'}
      ]
    },
    'assignment-operator': {
      match: '=',
      name: 'keyword.operator.assignment.baml'
    },
    'associated-type': {
      begin:
        '(?:^\\s*|(?<=\\{)\\s*)(type)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {
        1: {name: 'keyword.declaration.associated-type.baml'},
        2: {name: 'entity.name.type.associated.baml'}
      },
      end: '(?<=;)|(?=\\r?\\n|\\})',
      name: 'meta.associated-type.baml',
      patterns: [
        {include: '#comments'},
        {include: '#associated-type-extends'},
        {include: '#assignment-operator'},
        {include: '#type-expression'},
        {include: '#semicolon'}
      ]
    },
    'associated-type-extends': {
      match: '\\bextends\\b',
      name: 'keyword.operator.extends.baml'
    },
    'associated-type-projection': {
      begin: '\\((?=[^)\\r\\n]*\\bas\\b)',
      beginCaptures: {0: {name: 'punctuation.definition.type.begin.baml'}},
      end: '(\\))\\s*(\\.)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      endCaptures: {
        1: {name: 'punctuation.definition.type.end.baml'},
        2: {name: 'punctuation.accessor.baml'},
        3: {name: 'entity.name.type.associated.baml'}
      },
      name: 'meta.type.associated-projection.baml',
      patterns: [
        {include: '#comments'},
        {include: '#type-as-operator'},
        {include: '#type-expression'}
      ]
    },
    attribute: {
      begin:
        '(@)(?!@)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*)\\b',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.annotation.baml storage.type.annotation.baml'
        },
        2: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#attribute-path-segment'}
          ]
        }
      },
      end: '(?<=\\))|(?=\\s*@|\\s*,|\\s*\\}|\\s+\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|\\r?\\n\\s*(?:\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|@@|\\}))',
      name: 'meta.attribute.baml',
      patterns: [{include: '#comments'}, {include: '#attribute-arguments'}]
    },
    'attribute-arguments': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.annotation-arguments.begin.bracket.round.baml'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.definition.annotation-arguments.end.bracket.round.baml'
        }
      },
      name: 'meta.attribute.arguments.baml',
      patterns: [
        {include: '#comments'},
        {include: '#attribute-expression-block'},
        {include: '#literal'},
        {include: '#attribute-unquoted-string'},
        {include: '#comma'}
      ]
    },
    'attribute-expression-block': {
      begin: '\\{\\{',
      beginCaptures: {0: {name: 'punctuation.section.expression.begin.baml'}},
      end: '\\}\\}',
      endCaptures: {0: {name: 'punctuation.section.expression.end.baml'}},
      name: 'meta.attribute.expression.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'attribute-path-segment': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'storage.type.annotation.baml'
    },
    'attribute-unquoted-string': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'string.unquoted.baml'
    },
    'await-expression': {
      match: '\\bawait\\b',
      name: 'keyword.operator.await.baml'
    },
    'backtick-else': {
      captures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.conditional.baml'},
        3: {name: 'punctuation.section.interpolation.end.baml'}
      },
      match: '(\\$\\{)\\s*(else)\\s*(\\})',
      name: 'meta.interpolation.control.else.baml'
    },
    'backtick-else-if': {
      begin: '(\\$\\{)\\s*(else)\\b\\s*(if)\\b',
      beginCaptures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.conditional.baml'},
        3: {name: 'keyword.control.conditional.baml'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.baml'}},
      name: 'meta.interpolation.control.else-if.baml',
      patterns: [
        {include: '#comments'},
        {include: '#backtick-else-if-condition'}
      ]
    },
    'backtick-else-if-condition': {
      begin: '\\G\\s*',
      end: '(?=\\})',
      name: 'meta.if.condition.baml',
      patterns: [{include: '#comments'}, {include: '#condition-expression'}]
    },
    'backtick-endfor': {
      captures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.loop.endfor.baml'},
        3: {name: 'punctuation.section.interpolation.end.baml'}
      },
      match: '(\\$\\{)\\s*(endfor)\\s*(\\})',
      name: 'meta.interpolation.control.endfor.baml'
    },
    'backtick-endif': {
      captures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.conditional.endif.baml'},
        3: {name: 'punctuation.section.interpolation.end.baml'}
      },
      match: '(\\$\\{)\\s*(endif)\\s*(\\})',
      name: 'meta.interpolation.control.endif.baml'
    },
    'backtick-expression-interpolation': {
      begin: '(\\$\\{)',
      beginCaptures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.baml'}},
      name: 'meta.interpolation.baml',
      patterns: [
        {include: '#comments'},
        {include: '#backtick-interpolation-let-statement'},
        {include: '#block-contents'},
        {include: '#expression'},
        {include: '#semicolon'}
      ]
    },
    'backtick-for-c-style-let-initializer': {
      begin: '(?=(?:let|const)\\b)',
      end: '(?=;)',
      name: 'meta.for.initializer.baml',
      patterns: [
        {include: '#comments'},
        {include: '#pattern'},
        {include: '#let-else-clause'},
        {include: '#expression'}
      ]
    },
    'backtick-for-open': {
      begin: '(\\$\\{)\\s*(for)\\b',
      beginCaptures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.loop.for.baml'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.baml'}},
      name: 'meta.interpolation.control.for.baml',
      patterns: [
        {include: '#comments'},
        {include: '#backtick-for-parenthesized-in-header'},
        {include: '#backtick-for-parenthesized-c-style-header'},
        {include: '#backtick-for-unparenthesized-header'}
      ]
    },
    'backtick-for-parenthesized-c-style-header': {
      begin: '\\G\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.for-header.begin.baml'}
      },
      end: '\\)(?=\\s*\\})',
      endCaptures: {0: {name: 'punctuation.definition.for-header.end.baml'}},
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#backtick-for-c-style-let-initializer'},
        {include: '#semicolon'},
        {include: '#expression'}
      ]
    },
    'backtick-for-parenthesized-in-header': {
      begin: '\\G\\s*(\\()(?=\\s*(?:let|const)\\b(?:(?![=;]).)*\\bin\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.for-header.begin.baml'}
      },
      end: '\\)(?=\\s*\\})',
      endCaptures: {0: {name: 'punctuation.definition.for-header.end.baml'}},
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-in-pattern'},
        {include: '#for-in-keyword'},
        {include: '#expression'}
      ]
    },
    'backtick-for-unparenthesized-header': {
      begin: '\\G\\s*(?=(?:let|const)\\b)',
      end: '(?=\\})',
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-in-pattern'},
        {include: '#for-in-keyword'},
        {include: '#condition-expression'}
      ]
    },
    'backtick-if-condition': {
      begin: '\\G\\s*',
      end: '(?=\\})',
      name: 'meta.if.condition.baml',
      patterns: [{include: '#comments'}, {include: '#condition-expression'}]
    },
    'backtick-if-open': {
      begin: '(\\$\\{)\\s*(if)\\b(?=(?:(?![\\{\\}]).)*\\})',
      beginCaptures: {
        1: {name: 'punctuation.section.interpolation.begin.baml'},
        2: {name: 'keyword.control.conditional.baml'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.baml'}},
      name: 'meta.interpolation.control.if.baml',
      patterns: [{include: '#comments'}, {include: '#backtick-if-condition'}]
    },
    'backtick-interpolation': {
      patterns: [
        {include: '#backtick-for-open'},
        {include: '#backtick-else-if'},
        {include: '#backtick-if-open'},
        {include: '#backtick-else'},
        {include: '#backtick-endfor'},
        {include: '#backtick-endif'},
        {include: '#backtick-expression-interpolation'}
      ]
    },
    'backtick-interpolation-let-pattern': {
      begin: '\\G\\s*',
      end: '(?=\\s*=)',
      name: 'meta.pattern.statement.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'backtick-interpolation-let-statement': {
      begin: '(?=(?:let|const)\\b)',
      end: '(?=;|\\})',
      name: 'meta.statement.let.baml',
      patterns: [
        {include: '#comments'},
        {include: '#backtick-interpolation-let-pattern'},
        {include: '#assignment-operator'},
        {include: '#expression'}
      ]
    },
    'backtick-string': {
      patterns: [
        {include: '#backtick-string-8'},
        {include: '#backtick-string-7'},
        {include: '#backtick-string-6'},
        {include: '#backtick-string-5'},
        {include: '#backtick-string-4'},
        {include: '#backtick-string-3'},
        {include: '#backtick-string-2'},
        {include: '#backtick-string-1'}
      ]
    },
    'backtick-string-1': {
      begin: '(?<!\\`)(\\`{1})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{1})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-2': {
      begin: '(?<!\\`)(\\`{2})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{2})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-3': {
      begin: '(?<!\\`)(\\`{3})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{3})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-4': {
      begin: '(?<!\\`)(\\`{4})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{4})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-5': {
      begin: '(?<!\\`)(\\`{5})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{5})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-6': {
      begin: '(?<!\\`)(\\`{6})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{6})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-7': {
      begin: '(?<!\\`)(\\`{7})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{7})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-8': {
      begin: '(?<!\\`)(\\`{8})(?!\\`)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '(?<!\\`)(\\`{8})(?!\\`)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.interpolated.baml',
      patterns: [
        {include: '#backtick-interpolation'},
        {include: '#backtick-string-escape'}
      ]
    },
    'backtick-string-escape': {
      patterns: [
        {include: '#string-escape-control'},
        {include: '#string-escape-quoted-delimiter'},
        {include: '#backtick-string-escape-delimiter'},
        {include: '#string-escape-unknown'}
      ]
    },
    'backtick-string-escape-delimiter': {
      match: '\\\\[`$]',
      name: 'constant.character.escape.delimiter.baml'
    },
    'bare-attribute': {
      captures: {
        1: {
          name: 'punctuation.definition.annotation.baml storage.type.annotation.baml'
        },
        2: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#attribute-path-segment'}
          ]
        }
      },
      match:
        '(@)(?!@)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*|skip)\\b(?=\\s*(?:@|,|\\}|$|//|/\\*))',
      name: 'meta.attribute.baml'
    },
    'bare-binding-pattern': {
      captures: {
        1: {name: 'keyword.declaration.binding.baml'},
        2: {name: 'variable.other.binding.baml'}
      },
      match:
        '\\b((?:let|const))\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      name: 'meta.pattern.binding.baml'
    },
    'bigint-literal': {
      match: '\\b[0-9]+n',
      name: 'constant.numeric.bigint.baml'
    },
    'block-attribute': {
      begin:
        '(@@)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*)\\b',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.annotation.baml storage.type.annotation.baml'
        },
        2: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#attribute-path-segment'}
          ]
        }
      },
      end: '(?<=\\))|(?=\\s*@@|\\s*@|\\s*,|\\s*\\}|\\s+\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|\\r?\\n\\s*(?:\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|@@|\\}))',
      name: 'meta.attribute.block.baml',
      patterns: [{include: '#comments'}, {include: '#attribute-arguments'}]
    },
    'block-comment': {begin: '/\\*', end: '\\*/', name: 'comment.block.baml'},
    'block-contents': {
      patterns: [
        {include: '#comments'},
        {include: '#testset'},
        {include: '#test'},
        {include: '#watch-statement'},
        {include: '#let-statement'},
        {include: '#return-statement'},
        {include: '#break-statement'},
        {include: '#continue-statement'},
        {include: '#defer-statement'},
        {include: '#if-else-clause'},
        {include: '#for-statement'},
        {include: '#while-statement'},
        {include: '#expression'},
        {include: '#semicolon'}
      ]
    },
    'boolean-literal': {
      match: '\\b(?:true|false)\\b',
      name: 'constant.language.boolean.baml'
    },
    'break-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(break)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.break.baml'}},
      end: '(?=[;}]|$)',
      name: 'meta.statement.break.baml',
      patterns: [{include: '#comments'}]
    },
    'byte-string-escape': {
      patterns: [
        {include: '#byte-string-escape-hex'},
        {include: '#byte-string-escape-control'},
        {include: '#string-escape-quoted-delimiter'},
        {include: '#byte-string-escape-invalid-hex'},
        {include: '#byte-string-escape-invalid'}
      ]
    },
    'byte-string-escape-control': {
      match: '\\\\[ntr0]',
      name: 'constant.character.escape.control.baml'
    },
    'byte-string-escape-hex': {
      match: '\\\\x[0-9A-Fa-f]{2}',
      name: 'constant.character.escape.hex.baml'
    },
    'byte-string-escape-invalid': {
      match: '\\\\.',
      name: 'invalid.illegal.escape.baml'
    },
    'byte-string-escape-invalid-hex': {
      match:
        '\\\\x(?:[0-9A-Fa-f]{0,1}(?=["\\\\]|$)|[0-9A-Fa-f]?[^0-9A-Fa-f"\\\\])',
      name: 'invalid.illegal.escape.hex.baml'
    },
    'byte-string-literal': {
      begin: '\\b(b)(")',
      beginCaptures: {
        1: {name: 'storage.type.string.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.binary.double.baml',
      patterns: [{include: '#byte-string-escape'}]
    },
    'call-arguments': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.arguments.begin.baml'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.baml'}},
      name: 'meta.function-call.arguments.baml',
      patterns: [
        {include: '#comments'},
        {include: '#expression'},
        {include: '#comma'}
      ]
    },
    'catch-binding': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'variable.parameter.catch.baml'
    },
    'catch-binding-list': {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.catch-binding.begin.baml'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.catch-binding.end.baml'}},
      name: 'meta.catch.binding-list.baml',
      patterns: [
        {include: '#comments'},
        {include: '#catch-binding'},
        {include: '#comma'}
      ]
    },
    'catch-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.block.catch.baml',
      patterns: [
        {include: '#comments'},
        {include: '#match-arm'},
        {include: '#comma'}
      ]
    },
    'catch-expression': {
      begin: '\\b(catch|catch_all)\\b',
      beginCaptures: {1: {name: 'keyword.control.exception.catch.baml'}},
      end: '(?<=\\})|(?=,|;|$)',
      name: 'meta.expression.catch.baml',
      patterns: [
        {include: '#comments'},
        {include: '#catch-binding-list'},
        {include: '#catch-block'}
      ]
    },
    class: {
      begin: '^\\s*(class)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.class.baml'}},
      end: '(?<=\\})|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.class.baml',
      patterns: [
        {include: '#comments'},
        {include: '#class-header'},
        {include: '#class-body'}
      ]
    },
    'class-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.class.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#block-attribute'},
        {include: '#bare-attribute'},
        {include: '#attribute'},
        {include: '#implements-block'},
        {include: '#function'},
        {include: '#field'},
        {include: '#semicolon'}
      ]
    },
    'class-destructure-body': {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.pattern.destructure.begin.baml'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.pattern.destructure.end.baml'}
      },
      name: 'meta.pattern.destructure.class.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#class-destructure-field'},
        {include: '#comma'}
      ]
    },
    'class-destructure-field': {
      begin:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b\\s*(:)?',
      beginCaptures: {
        1: {name: 'variable.other.property.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '(?=,|\\})',
      name: 'meta.pattern.destructure.class.field.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'class-destructure-pattern': {
      begin:
        '\\b(?:((?:let|const))\\s+)?(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*)\\b\\s*(?=(?:<[^{}=;\\r\\n]*>\\s*)?\\{)',
      beginCaptures: {
        1: {name: 'keyword.declaration.binding.baml'},
        2: {patterns: [{include: '#type-reference'}]}
      },
      end: '(?<=\\})',
      name: 'meta.pattern.destructure.class.baml',
      patterns: [
        {include: '#comments'},
        {include: '#type-expression'},
        {include: '#class-destructure-body'}
      ]
    },
    'class-header': {
      begin: '\\G\\s*',
      end: '(?=\\{)|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.class.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameters'},
        {include: '#class-name'}
      ]
    },
    'class-name': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'entity.name.type.class.baml'
    },
    client: {
      begin:
        '^\\s*(client)\\b(?:\\s*(<)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(>)\\s*|\\s+)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=\\s*\\{)',
      beginCaptures: {
        1: {name: 'keyword.declaration.client.baml'},
        2: {name: 'punctuation.definition.type-parameters.begin.baml'},
        3: {name: 'support.type.client.baml'},
        4: {name: 'punctuation.definition.type-parameters.end.baml'},
        5: {name: 'entity.name.client.baml'}
      },
      end: '(?<=\\})',
      name: 'meta.client.baml',
      patterns: [{include: '#comments'}, {include: '#config-block'}]
    },
    'code-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.block.code.baml',
      patterns: [{include: '#comments'}, {include: '#block-contents'}]
    },
    'colon-separator': {match: ':', name: 'punctuation.separator.colon.baml'},
    comma: {match: ',', name: 'punctuation.separator.comma.baml'},
    comments: {
      patterns: [{include: '#line-comment'}, {include: '#block-comment'}]
    },
    'condition-expression': {
      patterns: [
        {include: '#literal'},
        {include: '#array-expression'},
        {include: '#lambda-expression'},
        {include: '#parenthesized-expression'},
        {include: '#if-expression'},
        {include: '#match-expression'},
        {include: '#spawn-expression'},
        {include: '#map-expression'},
        {include: '#code-block'},
        {include: '#await-expression'},
        {include: '#throw-expression'},
        {include: '#catch-expression'},
        {include: '#condition-is-pattern-expression'},
        {include: '#optional-call-expression'},
        {include: '#optional-index-expression'},
        {include: '#optional-method-call-expression'},
        {include: '#optional-field-access-expression'},
        {include: '#upcast-expression'},
        {include: '#postfix-method-call-expression'},
        {include: '#field-access-expression'},
        {include: '#expression-operator'},
        {include: '#function-call-expression'},
        {include: '#dotted-expression'}
      ]
    },
    'condition-is-pattern-expression': {
      begin: '\\b(is)\\b',
      beginCaptures: {1: {name: 'keyword.operator.is.baml'}},
      end: '(?=\\s*(?:&&|\\|\\||=>|[,);\\]}{]|$))',
      name: 'meta.expression.is.baml',
      patterns: [{include: '#comments'}, {include: '#condition-pattern'}]
    },
    'condition-pattern': {
      patterns: [
        {include: '#comments'},
        {include: '#wildcard-binding-pattern'},
        {include: '#typed-binding-pattern'},
        {include: '#array-destructure-pattern'},
        {include: '#bare-binding-pattern'},
        {include: '#wildcard-pattern'},
        {include: '#type-expression'}
      ]
    },
    'config-array': {patterns: [{include: '#config-array-body'}]},
    'config-array-body': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.array.begin.baml'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.baml'}},
      name: 'meta.config.array.baml',
      patterns: [
        {include: '#comments'},
        {include: '#config-block'},
        {include: '#config-array'},
        {include: '#expression'},
        {include: '#comma'}
      ]
    },
    'config-block': {patterns: [{include: '#config-block-body'}]},
    'config-block-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.config.block.baml',
      patterns: [
        {include: '#comments'},
        {include: '#config-field'},
        {include: '#comma'}
      ]
    },
    'config-field': {
      begin:
        '(?:^\\s*|(?<=[\\{,])\\s*)(?:(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b|("(?:\\\\.|[^"\\\\])*"))\\s*(:)?',
      beginCaptures: {
        1: {name: 'variable.other.property.baml'},
        2: {patterns: [{include: '#string-literal'}]},
        3: {name: 'punctuation.separator.colon.baml'}
      },
      end: '(?=,|\\r?\\n|\\})',
      name: 'meta.field.config.baml',
      patterns: [
        {include: '#comments'},
        {include: '#config-block'},
        {include: '#config-array'},
        {include: '#expression'}
      ]
    },
    'constructor-body': {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.constructor.body.begin.baml'}
      },
      end: '\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.constructor.body.end.baml'}
      },
      name: 'meta.constructor.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#constructor-field'},
        {include: '#constructor-field-shorthand'},
        {include: '#comma'}
      ]
    },
    'constructor-expression': {
      begin:
        '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*\\b(?=\\s*(?:<[^{}=;\\r\\n]*>\\s*)?\\{)',
      beginCaptures: {
        0: {
          patterns: [{include: '#accessor-dot'}, {include: '#constructor-type'}]
        }
      },
      end: '(?<=\\})',
      name: 'meta.constructor.expression.baml',
      patterns: [
        {include: '#comments'},
        {include: '#constructor-type-arguments'},
        {include: '#constructor-body'}
      ]
    },
    'constructor-field': {
      begin:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(:)',
      beginCaptures: {
        1: {name: 'variable.other.property.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '(?=,|\\})',
      name: 'meta.constructor.field.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'constructor-field-shorthand': {
      begin:
        '(?:^|(?<=[{,])|(?<=\\*/))[ \\t]*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)[ \\t]+(?=#+"|"|b"|\\`|\\[|[0-9+-]|true\\b|false\\b|null\\b|env\\b)',
      beginCaptures: {1: {name: 'variable.other.property.baml'}},
      end: '(?=,|\\})',
      name: 'meta.constructor.field.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'constructor-type': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'entity.name.type.baml'
    },
    'constructor-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>(?=\\s*\\{)',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'continue-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(continue)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.continue.baml'}},
      end: '(?=[;}]|$)',
      name: 'meta.statement.continue.baml',
      patterns: [{include: '#comments'}]
    },
    'declaration-type-parameter': {
      begin:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {1: {name: 'entity.name.type.parameter.baml'}},
      end: '(?=,|>(?=\\s*(?:\\(|\\{|requires\\b|\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)))',
      name: 'meta.type-parameter.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameter-extends'},
        {include: '#declaration-type-parameter-intersection'},
        {include: '#type-expression'}
      ]
    },
    'declaration-type-parameter-extends': {
      match: '\\bextends\\b',
      name: 'keyword.operator.extends.baml'
    },
    'declaration-type-parameter-intersection': {
      match: '&',
      name: 'keyword.operator.type.baml'
    },
    'declaration-type-parameters': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-parameters.begin.baml'}
      },
      end: '>(?=\\s*(?:\\(|\\{|requires\\b|\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*))',
      endCaptures: {
        0: {name: 'punctuation.definition.type-parameters.end.baml'}
      },
      name: 'meta.type-parameters.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameter'},
        {include: '#comma'}
      ]
    },
    'defer-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(defer)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.defer.baml'}},
      end: '(?<=\\})',
      name: 'meta.statement.defer.baml',
      patterns: [{include: '#comments'}, {include: '#code-block'}]
    },
    'dotted-expression': {
      captures: {
        1: {
          patterns: [
            {include: '#namespace-root'},
            {include: '#environment-expression-root'},
            {include: '#self-expression-root'},
            {include: '#expression-identifier'}
          ]
        },
        2: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#expression-identifier'}
          ]
        }
      },
      match:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)((?:\\s*\\.\\s*(?!as\\b\\s*<)\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*)\\b',
      name: 'meta.dotted-expression.baml'
    },
    enum: {
      begin: '^\\s*(enum)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.enum.baml'}},
      end: '(?<=\\})|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.enum.baml',
      patterns: [
        {include: '#comments'},
        {include: '#enum-header'},
        {include: '#enum-body'}
      ]
    },
    'enum-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.enum.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#block-attribute'},
        {include: '#enum-variant'},
        {include: '#comma'}
      ]
    },
    'enum-header': {
      begin: '\\G\\s*',
      end: '(?=\\{)|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.enum.header.baml',
      patterns: [{include: '#comments'}, {include: '#enum-name'}]
    },
    'enum-name': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'entity.name.type.enum.baml'
    },
    'enum-variant': {
      begin:
        '(?:^\\s*|(?<=[\\{,])\\s*|\\s+)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {1: {name: 'variable.other.enummember.baml'}},
      end: '(?=,|\\s+@@|\\s*\\}|\\s+\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|\\r?\\n\\s*(?:\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b|@@|\\}))',
      name: 'meta.enum.variant.baml',
      patterns: [
        {include: '#comments'},
        {include: '#bare-attribute'},
        {include: '#attribute'}
      ]
    },
    'environment-expression-root': {
      match: '\\benv\\b',
      name: 'support.other.namespace.baml'
    },
    expression: {
      patterns: [
        {include: '#literal'},
        {include: '#array-expression'},
        {include: '#lambda-expression'},
        {include: '#parenthesized-expression'},
        {include: '#if-expression'},
        {include: '#match-expression'},
        {include: '#spawn-expression'},
        {include: '#constructor-expression'},
        {include: '#map-expression'},
        {include: '#code-block'},
        {include: '#await-expression'},
        {include: '#throw-expression'},
        {include: '#catch-expression'},
        {include: '#is-pattern-expression'},
        {include: '#optional-call-expression'},
        {include: '#optional-index-expression'},
        {include: '#optional-method-call-expression'},
        {include: '#optional-field-access-expression'},
        {include: '#upcast-expression'},
        {include: '#postfix-method-call-expression'},
        {include: '#field-access-expression'},
        {include: '#expression-operator'},
        {include: '#function-call-expression'},
        {include: '#dotted-expression'}
      ]
    },
    'expression-accessor-operator': {
      match: '\\?\\.|\\.|\\$',
      name: 'punctuation.accessor.baml'
    },
    'expression-arithmetic-operator': {
      match: '\\+\\+|--|\\+|-|\\*|/|%',
      name: 'keyword.operator.arithmetic.baml'
    },
    'expression-arrow-operator': {
      match: '=>|->',
      name: 'keyword.operator.arrow.baml'
    },
    'expression-bitwise-operator': {
      match: '&|\\^|~|\\|',
      name: 'keyword.operator.bitwise.baml'
    },
    'expression-comparison-operator': {
      match: '<=|>=|<|>',
      name: 'keyword.operator.comparison.baml'
    },
    'expression-compound-assignment-operator': {
      match: '<<=|>>=|\\+=|-=|\\*=|/=|%=|&=|\\|=|\\^=',
      name: 'keyword.operator.assignment.baml'
    },
    'expression-equality-operator': {
      match: '==|!=',
      name: 'keyword.operator.comparison.baml'
    },
    'expression-identifier': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'variable.other.readwrite.baml'
    },
    'expression-logical-operator': {
      match: '&&|\\|\\||!',
      name: 'keyword.operator.logical.baml'
    },
    'expression-nullish-operator': {
      match: '\\?\\?',
      name: 'keyword.operator.nullish.baml'
    },
    'expression-operator': {
      patterns: [
        {include: '#expression-arrow-operator'},
        {include: '#expression-compound-assignment-operator'},
        {include: '#expression-nullish-operator'},
        {include: '#expression-logical-operator'},
        {include: '#expression-equality-operator'},
        {include: '#expression-shift-operator'},
        {include: '#expression-comparison-operator'},
        {include: '#expression-bitwise-operator'},
        {include: '#expression-arithmetic-operator'},
        {include: '#assignment-operator'},
        {include: '#expression-spread-operator'},
        {include: '#expression-accessor-operator'}
      ]
    },
    'expression-shift-operator': {
      match: '<<|>>',
      name: 'keyword.operator.bitwise.shift.baml'
    },
    'expression-spread-operator': {
      match: '\\.\\.\\.',
      name: 'keyword.operator.spread.baml'
    },
    field: {
      begin:
        '(?:^\\s*|(?<=\\{)\\s*)(?!@)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(:)?',
      beginCaptures: {
        1: {name: 'variable.other.property.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '(?=\\})|$',
      name: 'meta.field.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'field-access-expression': {
      captures: {
        1: {name: 'punctuation.accessor.baml'},
        2: {name: 'variable.other.readwrite.baml'}
      },
      match:
        '([.$])\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      name: 'meta.field-access.baml'
    },
    'float-literal': {
      match: '\\b[0-9]+(?:\\.[0-9]+[eE][+-]?[0-9]+|\\.[0-9]+|[eE][+-]?[0-9]+)',
      name: 'constant.numeric.float.baml'
    },
    'for-c-style-let-initializer': {
      begin: '(?=(?:let|const)\\b)',
      end: '(?=;)',
      name: 'meta.for.initializer.baml',
      patterns: [
        {include: '#comments'},
        {include: '#pattern'},
        {include: '#let-else-clause'},
        {include: '#expression'}
      ]
    },
    'for-in-keyword': {match: '\\bin\\b', name: 'keyword.operator.in.baml'},
    'for-in-pattern': {
      begin: '(?=(?:let|const)\\b)',
      end: '(?=\\s+in\\b)',
      name: 'meta.pattern.for-in.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'for-parenthesized-c-style-header': {
      begin: '\\G\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.for-header.begin.baml'}
      },
      end: '\\)(?=\\s*\\{)',
      endCaptures: {0: {name: 'punctuation.definition.for-header.end.baml'}},
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-c-style-let-initializer'},
        {include: '#semicolon'},
        {include: '#expression'}
      ]
    },
    'for-parenthesized-in-header': {
      begin: '\\G\\s*(\\()(?=\\s*(?:let|const)\\b(?:(?![=;]).)*\\bin\\b)',
      beginCaptures: {
        1: {name: 'punctuation.definition.for-header.begin.baml'}
      },
      end: '\\)(?=\\s*\\{)',
      endCaptures: {0: {name: 'punctuation.definition.for-header.end.baml'}},
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-in-pattern'},
        {include: '#for-in-keyword'},
        {include: '#expression'}
      ]
    },
    'for-statement': {
      begin: '\\b(for)\\b',
      beginCaptures: {1: {name: 'keyword.control.loop.for.baml'}},
      end: '(?<=\\})(?=\\s*(?:;|$))|(?=;|$)',
      name: 'meta.statement.for.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-parenthesized-in-header'},
        {include: '#for-parenthesized-c-style-header'},
        {include: '#for-unparenthesized-header'},
        {include: '#code-block'}
      ]
    },
    'for-unparenthesized-header': {
      begin: '\\G\\s*(?=(?:let|const)\\b)',
      end: '(?=\\{)',
      name: 'meta.for.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#for-in-pattern'},
        {include: '#for-in-keyword'},
        {include: '#condition-expression'}
      ]
    },
    function: {
      begin:
        '^\\s*(function)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {
        1: {name: 'keyword.declaration.function.baml'},
        2: {name: 'entity.name.function.baml'}
      },
      end: '(?<=\\})',
      name: 'meta.function.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameters'},
        {include: '#function-parameters'},
        {include: '#function-return-type'},
        {include: '#function-block'}
      ]
    },
    'function-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.block.function.baml',
      patterns: [
        {include: '#llm-client-field'},
        {include: '#llm-prompt-field'},
        {include: '#block-contents'}
      ]
    },
    'function-call-expression': {
      begin:
        '\\b(?:(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(\\.)\\s*)?((?:\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\s*\\.\\s*)*)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=\\s*(?:<[^(){};]*>\\s*)?\\()',
      beginCaptures: {
        1: {
          patterns: [
            {include: '#namespace-root'},
            {include: '#environment-expression-root'},
            {include: '#self-expression-root'},
            {include: '#expression-identifier'}
          ]
        },
        2: {name: 'punctuation.accessor.baml'},
        3: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#expression-identifier'}
          ]
        },
        4: {name: 'entity.name.function.baml'}
      },
      end: '(?<=\\))',
      name: 'meta.function-call.baml',
      patterns: [
        {include: '#comments'},
        {include: '#function-call-type-arguments'},
        {include: '#call-arguments'}
      ]
    },
    'function-call-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>(?=\\s*\\()',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'function-parameters': {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.parameters.begin.baml'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.baml'}},
      name: 'meta.parameters.baml',
      patterns: [
        {include: '#comments'},
        {include: '#self-parameter'},
        {include: '#parameter'},
        {include: '#comma'}
      ]
    },
    'function-return-type': {
      begin: '(->)',
      beginCaptures: {1: {name: 'keyword.operator.arrow.baml'}},
      end: '(?=\\{)',
      name: 'meta.return-type.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    generator: {
      begin:
        '^\\s*(generator)\\b(?:\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*))?\\s*(?=\\{)',
      beginCaptures: {
        1: {name: 'keyword.declaration.generator.baml'},
        2: {name: 'entity.name.generator.baml'}
      },
      end: '(?<=\\})',
      name: 'meta.generator.baml',
      patterns: [{include: '#comments'}, {include: '#config-block'}]
    },
    'if-condition': {
      begin: '\\G(?!\\s*else\\b)\\s*',
      end: '(?=\\{)',
      name: 'meta.if.condition.baml',
      patterns: [{include: '#comments'}, {include: '#condition-expression'}]
    },
    'if-else-clause': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(else)\\b',
      beginCaptures: {1: {name: 'keyword.control.conditional.baml'}},
      end: '(?!\\s*else\\b)(?:(?<=\\})(?=\\s*(?:[,);]|$))|(?=,|\\)|;|$))',
      name: 'meta.else.baml',
      patterns: [
        {include: '#comments'},
        {include: '#if-expression'},
        {include: '#code-block'}
      ]
    },
    'if-expression': {
      begin: '\\b(if)\\b',
      beginCaptures: {1: {name: 'keyword.control.conditional.baml'}},
      end: '(?!\\s*else\\b)(?:(?<=\\})(?=\\s*(?:[,);]|$))|(?=,|\\)|;|$))',
      name: 'meta.expression.if.baml',
      patterns: [
        {include: '#comments'},
        {include: '#if-let-pattern'},
        {include: '#assignment-operator'},
        {include: '#if-condition'},
        {include: '#code-block'},
        {include: '#if-else-clause'}
      ]
    },
    'if-let-pattern': {
      begin: '\\G\\s*(?=(?:let|const)\\b)',
      end: '(?=\\s*=)',
      name: 'meta.pattern.if-let.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'implements-block': {
      begin: '^\\s*(implements|implement)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.implements.baml'}},
      end: '(?<=\\})',
      name: 'meta.implements.baml',
      patterns: [
        {include: '#comments'},
        {include: '#implements-target'},
        {include: '#implements-body'}
      ]
    },
    'implements-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.implements.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#function'},
        {include: '#associated-type'},
        {include: '#interface-field-link'},
        {include: '#field'},
        {include: '#semicolon'},
        {include: '#comma'}
      ]
    },
    'implements-for': {
      begin: '^\\s*(implements|implement)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.implements.baml'}},
      end: '(?<=\\})',
      name: 'meta.implements-for.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameters'},
        {include: '#implements-for-interface-target'},
        {include: '#implements-for-keyword'},
        {include: '#implements-for-target'},
        {include: '#implements-body'}
      ]
    },
    'implements-for-interface-target': {
      begin: '\\G\\s*',
      end: '(?=\\s+\\bfor\\b)',
      name: 'meta.implements.target.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'implements-for-keyword': {
      match: '\\bfor\\b',
      name: 'keyword.declaration.for.baml'
    },
    'implements-for-target': {
      begin: '\\G\\s*',
      end: '(?=\\{)',
      name: 'meta.implements.for-target.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'implements-target': {
      begin: '\\G\\s*',
      end: '(?=\\{)',
      name: 'meta.implements.target.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'integer-literal': {
      match: '\\b[0-9]+\\b',
      name: 'constant.numeric.integer.baml'
    },
    interface: {
      begin:
        '^\\s*(interface)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {
        1: {name: 'keyword.declaration.interface.baml'},
        2: {name: 'entity.name.type.interface.baml'}
      },
      end: '(?<=\\})',
      name: 'meta.interface.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameters'},
        {include: '#interface-requires-clause'},
        {include: '#interface-body'}
      ]
    },
    'interface-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.interface.body.baml',
      patterns: [
        {include: '#comments'},
        {include: '#interface-method-signature'},
        {include: '#function'},
        {include: '#associated-type'},
        {include: '#field'},
        {include: '#semicolon'},
        {include: '#comma'}
      ]
    },
    'interface-field-link': {
      begin:
        '(?:^\\s*|(?<=\\{)\\s*)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s+(as)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      beginCaptures: {
        1: {name: 'variable.other.property.interface.baml'},
        2: {name: 'keyword.operator.as.baml'},
        3: {name: 'variable.other.property.baml'}
      },
      end: '(?<=;)|(?=\\r?\\n|\\})',
      name: 'meta.interface-field-link.baml',
      patterns: [{include: '#comments'}, {include: '#semicolon'}]
    },
    'interface-method-return-type': {
      begin: '(->)',
      beginCaptures: {1: {name: 'keyword.operator.arrow.baml'}},
      end: '(?=;|\\r?\\n|\\})',
      name: 'meta.return-type.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'interface-method-signature': {
      begin:
        '^\\s*(function)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=[^{\\r\\n]*(?:\\r?\\n|;|\\}))',
      beginCaptures: {
        1: {name: 'keyword.declaration.function.baml'},
        2: {name: 'entity.name.function.baml'}
      },
      end: '(?<=;)|(?=\\r?\\n|\\})',
      name: 'meta.function.signature.baml',
      patterns: [
        {include: '#comments'},
        {include: '#declaration-type-parameters'},
        {include: '#function-parameters'},
        {include: '#interface-method-return-type'},
        {include: '#semicolon'}
      ]
    },
    'interface-requires-clause': {
      begin: '\\b(requires)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.requires.baml'}},
      end: '(?=\\{)',
      name: 'meta.interface.requires.baml',
      patterns: [
        {include: '#comments'},
        {include: '#type-expression'},
        {include: '#comma'}
      ]
    },
    'is-pattern-expression': {
      begin: '\\b(is)\\b',
      beginCaptures: {1: {name: 'keyword.operator.is.baml'}},
      end: '(?=\\s*(?:&&|\\|\\||=>|[,);\\]}]|$))',
      name: 'meta.expression.is.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'lambda-arrow': {match: '->|=>', name: 'keyword.operator.arrow.baml'},
    'lambda-expression': {
      begin: '(?=\\((?:[^()]|\\([^()]*\\))*\\)\\s*(?:->|=>))',
      end: '(?<=\\})',
      name: 'meta.expression.lambda.baml',
      patterns: [
        {include: '#comments'},
        {include: '#function-parameters'},
        {include: '#lambda-arrow'},
        {include: '#lambda-return-type'},
        {include: '#lambda-throws-clause'},
        {include: '#code-block'}
      ]
    },
    'lambda-return-type': {
      begin: '(?<=->|=>)\\s*(?!throws\\b)(?=[^\\s\\{])',
      end: '(?=\\s*(?:throws\\b|\\{))',
      name: 'meta.return-type.lambda.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'lambda-throws-clause': {
      begin: '\\b(throws)\\b',
      beginCaptures: {1: {name: 'keyword.operator.throws.baml'}},
      end: '(?=\\{)',
      name: 'meta.throws.lambda.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'let-else-clause': {
      begin: '\\b(else)\\b(?=\\s*\\{)',
      beginCaptures: {1: {name: 'keyword.control.conditional.else.baml'}},
      end: '(?<=\\})',
      name: 'meta.statement.let.else.baml',
      patterns: [{include: '#comments'}, {include: '#code-block'}]
    },
    'let-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(?=(?:let|const)\\b)',
      end: '(?=[;}]|$)',
      name: 'meta.statement.let.baml',
      patterns: [
        {include: '#comments'},
        {include: '#let-statement-pattern'},
        {include: '#assignment-operator'},
        {include: '#let-else-clause'},
        {include: '#expression'}
      ]
    },
    'let-statement-pattern': {
      begin: '\\G\\s*',
      end: '(?=\\s*=)',
      name: 'meta.pattern.statement.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'line-comment': {match: '//.*$', name: 'comment.line.double-slash.baml'},
    literal: {
      patterns: [{include: '#byte-string-literal'}, {include: '#type-literal'}]
    },
    'llm-client-field': {
      begin: '^\\s*(client)\\b\\s*(:)?(?!\\s*\\.)',
      beginCaptures: {
        1: {name: 'keyword.other.llm.client.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '$',
      name: 'meta.field.llm.client.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'llm-prompt-field': {
      begin: '^\\s*(prompt)\\b\\s*(:)?',
      beginCaptures: {
        1: {name: 'keyword.other.llm.prompt.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '$',
      name: 'meta.field.llm.prompt.baml',
      patterns: [
        {include: '#comments'},
        {include: '#template-string-body'},
        {include: '#backtick-string'},
        {include: '#expression'}
      ]
    },
    'map-entry': {
      begin:
        '\\s*(?=(?:"|#|\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*\\s*:))',
      end: '(?=,|\\})',
      name: 'meta.map.entry.baml',
      patterns: [
        {include: '#comments'},
        {include: '#map-entry-key'},
        {include: '#string-literal'},
        {include: '#raw-string'},
        {include: '#colon-separator'},
        {include: '#expression'}
      ]
    },
    'map-entry-key': {
      captures: {
        1: {name: 'variable.other.property.baml'},
        2: {
          patterns: [
            {include: '#accessor-dot'},
            {include: '#map-entry-key-segment'}
          ]
        }
      },
      match:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)((?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*)\\b(?=\\s*:)',
      name: 'meta.map-entry-key.baml'
    },
    'map-entry-key-segment': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'variable.other.property.baml'
    },
    'map-expression': {
      begin:
        '\\{(?=\\s*(?:\\}|["#]|\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*(?:\\s*\\.\\s*\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)*\\s*:))',
      beginCaptures: {0: {name: 'punctuation.definition.map.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.map.end.baml'}},
      name: 'meta.expression.map.baml',
      patterns: [
        {include: '#comments'},
        {include: '#map-entry'},
        {include: '#comma'}
      ]
    },
    'match-arm': {
      begin: '(?=\\S)(?![,}])',
      end: '(?=,|\\r?\\n|\\})',
      name: 'meta.match.arm.baml',
      patterns: [
        {include: '#comments'},
        {include: '#match-arm-pattern'},
        {include: '#match-arm-guard'},
        {include: '#match-arm-arrow'},
        {include: '#expression'}
      ]
    },
    'match-arm-arrow': {match: '=>', name: 'keyword.operator.arrow.baml'},
    'match-arm-guard': {
      begin: '\\b(if)\\b',
      beginCaptures: {1: {name: 'keyword.control.conditional.baml'}},
      end: '(?=\\s*=>)',
      name: 'meta.match.guard.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'match-arm-pattern': {
      begin: '\\G\\s*',
      end: '(?=\\s*(?:if\\b|=>))',
      name: 'meta.pattern.match.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'match-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.block.match.baml',
      patterns: [
        {include: '#comments'},
        {include: '#match-arm'},
        {include: '#comma'}
      ]
    },
    'match-expression': {
      begin: '\\b(match)\\b',
      beginCaptures: {1: {name: 'keyword.control.match.baml'}},
      end: '(?<=\\})|(?=,|;|$)',
      name: 'meta.expression.match.baml',
      patterns: [
        {include: '#comments'},
        {include: '#match-scrutinee-group'},
        {include: '#match-block'},
        {include: '#match-scrutinee'}
      ]
    },
    'match-scrutinee': {
      begin: '(?=[^\\s\\{])',
      end: '(?=\\{)',
      name: 'meta.match.scrutinee.baml',
      patterns: [
        {include: '#comments'},
        {include: '#literal'},
        {include: '#array-expression'},
        {include: '#spawn-expression'},
        {include: '#await-expression'},
        {include: '#throw-expression'},
        {include: '#catch-expression'},
        {include: '#expression-operator'},
        {include: '#function-call-expression'},
        {include: '#dotted-expression'}
      ]
    },
    'match-scrutinee-group': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.baml'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.group.end.baml'}},
      name: 'meta.match.scrutinee.group.baml',
      patterns: [
        {include: '#comments'},
        {include: '#expression'},
        {include: '#type-expression'}
      ]
    },
    'namespace-root': {
      match: '\\b(?:root|baml)\\b',
      name: 'support.other.namespace.baml'
    },
    'namespace-segment': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'entity.name.namespace.baml'
    },
    'null-literal': {match: '\\bnull\\b', name: 'constant.language.null.baml'},
    'numeric-literal': {
      patterns: [
        {include: '#bigint-literal'},
        {include: '#float-literal'},
        {include: '#integer-literal'}
      ]
    },
    'optional-call-expression': {
      begin: '(\\?\\.)\\s*(?=\\()',
      beginCaptures: {1: {name: 'punctuation.accessor.baml'}},
      end: '(?<=\\))',
      name: 'meta.function-call.optional.baml',
      patterns: [{include: '#comments'}, {include: '#call-arguments'}]
    },
    'optional-field-access-expression': {
      captures: {
        1: {name: 'punctuation.accessor.baml'},
        2: {name: 'variable.other.readwrite.baml'}
      },
      match:
        '(\\?\\.)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      name: 'meta.field-access.optional.baml'
    },
    'optional-index-arguments': {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.bracket.begin.baml'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.bracket.end.baml'}},
      name: 'meta.index.arguments.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'optional-index-expression': {
      begin: '(\\?\\.)\\s*(?=\\[)',
      beginCaptures: {1: {name: 'punctuation.accessor.baml'}},
      end: '(?<=\\])',
      name: 'meta.index.optional.baml',
      patterns: [{include: '#comments'}, {include: '#optional-index-arguments'}]
    },
    'optional-method-call-expression': {
      begin:
        '(\\?\\.)\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=\\s*(?:<[^(){};]*>\\s*)?\\()',
      beginCaptures: {
        1: {name: 'punctuation.accessor.baml'},
        2: {name: 'entity.name.function.baml'}
      },
      end: '(?<=\\))',
      name: 'meta.function-call.optional.member.baml',
      patterns: [
        {include: '#comments'},
        {include: '#optional-method-call-type-arguments'},
        {include: '#call-arguments'}
      ]
    },
    'optional-method-call-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>(?=\\s*\\()',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'optional-operator': {match: '\\?', name: 'keyword.operator.optional.baml'},
    parameter: {
      begin:
        '\\b(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(:)?',
      beginCaptures: {
        1: {name: 'variable.parameter.baml'},
        2: {name: 'punctuation.separator.colon.baml'}
      },
      end: '(?=,|\\))',
      name: 'meta.parameter.baml',
      patterns: [
        {include: '#comments'},
        {include: '#parameter-type-parens'},
        {include: '#parameter-type-arguments'},
        {include: '#parameter-default'},
        {include: '#type-expression'}
      ]
    },
    'parameter-default': {
      begin: '=',
      beginCaptures: {0: {name: 'keyword.operator.assignment.baml'}},
      end: '(?=,|\\))',
      name: 'meta.parameter.default.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'parameter-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'parameter-type-parens': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.type.begin.baml'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.type.end.baml'}},
      name: 'meta.group.type.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'parenthesized-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.baml'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.group.end.baml'}},
      name: 'meta.group.expression.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    pattern: {
      patterns: [
        {include: '#comments'},
        {include: '#wildcard-binding-pattern'},
        {include: '#typed-binding-pattern'},
        {include: '#class-destructure-pattern'},
        {include: '#array-destructure-pattern'},
        {include: '#bare-binding-pattern'},
        {include: '#wildcard-pattern'},
        {include: '#type-expression'}
      ]
    },
    'postfix-method-call-expression': {
      begin:
        '([.$])\\s*(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=\\s*(?:<[^(){};]*>\\s*)?\\()',
      beginCaptures: {
        1: {name: 'punctuation.accessor.baml'},
        2: {name: 'entity.name.function.baml'}
      },
      end: '(?<=\\))',
      name: 'meta.function-call.member.baml',
      patterns: [
        {include: '#comments'},
        {include: '#postfix-method-call-type-arguments'},
        {include: '#call-arguments'}
      ]
    },
    'postfix-method-call-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>(?=\\s*\\()',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'primitive-type': {
      match:
        '\\b(?:int|float|bigint|string|bool|image|audio|map|json|unknown|never|Self)\\b',
      name: 'support.type.primitive.baml'
    },
    'raw-string': {
      patterns: [
        {include: '#raw-string-8'},
        {include: '#raw-string-7'},
        {include: '#raw-string-6'},
        {include: '#raw-string-5'},
        {include: '#raw-string-4'},
        {include: '#raw-string-3'},
        {include: '#raw-string-2'},
        {include: '#raw-string-1'}
      ]
    },
    'raw-string-1': {
      begin: '(?<!#)(#{1})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{1})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-2': {
      begin: '(?<!#)(#{2})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{2})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-3': {
      begin: '(?<!#)(#{3})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{3})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-4': {
      begin: '(?<!#)(#{4})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{4})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-5': {
      begin: '(?<!#)(#{5})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{5})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-6': {
      begin: '(?<!#)(#{6})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{6})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-7': {
      begin: '(?<!#)(#{7})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{7})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'raw-string-8': {
      begin: '(?<!#)(#{8})"',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"(#{8})',
      endCaptures: {1: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.raw.baml'
    },
    'retry-policy': {
      begin:
        '^\\s*(retry_policy)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b(?=\\s*\\{)',
      beginCaptures: {
        1: {name: 'keyword.declaration.retry-policy.baml'},
        2: {name: 'entity.name.retry-policy.baml'}
      },
      end: '(?<=\\})',
      name: 'meta.retry-policy.baml',
      patterns: [{include: '#comments'}, {include: '#config-block'}]
    },
    'return-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(return)\\b',
      beginCaptures: {1: {name: 'keyword.control.flow.return.baml'}},
      end: '(?=[;}]|$)',
      name: 'meta.statement.return.baml',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    'self-expression-root': {
      match: '\\bself\\b',
      name: 'variable.language.self.baml'
    },
    'self-parameter': {
      begin: '\\b(self)\\b(?=\\s*(?:,|\\)))',
      beginCaptures: {1: {name: 'variable.language.self.baml'}},
      end: '(?=\\s*(?:,|\\)))',
      name: 'meta.parameter.baml',
      patterns: [{include: '#comments'}]
    },
    semicolon: {match: ';', name: 'punctuation.terminator.statement.baml'},
    'spawn-expression': {
      begin: '\\b(spawn)\\b',
      beginCaptures: {1: {name: 'keyword.operator.spawn.baml'}},
      end: '(?<=\\})|(?=,|;|$)',
      name: 'meta.expression.spawn.baml',
      patterns: [
        {include: '#comments'},
        {include: '#spawn-header'},
        {include: '#code-block'}
      ]
    },
    'spawn-header': {
      begin: '\\G\\s*',
      end: '(?=\\{)',
      name: 'meta.spawn.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#spawn-name'},
        {include: '#spawn-with-clause'}
      ]
    },
    'spawn-name': {
      begin: '\\G\\s*(?!with\\b)(?=[^\\{\\r\\n])',
      end: '(?=\\s+with\\b|\\s*\\{)',
      name: 'meta.spawn.name.baml',
      patterns: [{include: '#comments'}, {include: '#condition-expression'}]
    },
    'spawn-with-clause': {
      begin: '\\b(with)\\b',
      beginCaptures: {1: {name: 'keyword.operator.with.baml'}},
      end: '(?=\\{)',
      name: 'meta.spawn.options.baml',
      patterns: [
        {include: '#comments'},
        {include: '#condition-expression'},
        {include: '#comma'}
      ]
    },
    'string-escape': {
      patterns: [
        {include: '#string-escape-control'},
        {include: '#string-escape-quoted-delimiter'},
        {include: '#string-escape-unknown'}
      ]
    },
    'string-escape-control': {
      match: '\\\\[ntr0bvf]',
      name: 'constant.character.escape.control.baml'
    },
    'string-escape-quoted-delimiter': {
      match: '\\\\["\\\\]',
      name: 'constant.character.escape.delimiter.baml'
    },
    'string-escape-unknown': {
      match: '\\\\.',
      name: 'constant.character.escape.unknown.baml'
    },
    'string-literal': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.double.baml',
      patterns: [{include: '#string-escape'}]
    },
    'template-comment': {
      begin: '\\{#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.baml'}},
      end: '#\\}',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.baml'}},
      name: 'comment.block.template.baml'
    },
    'template-control': {
      begin: '\\{%',
      beginCaptures: {0: {name: 'punctuation.section.template.begin.baml'}},
      end: '%\\}',
      endCaptures: {0: {name: 'punctuation.section.template.end.baml'}},
      name: 'meta.template.control.baml',
      patterns: [
        {include: '#comments'},
        {include: '#template-keyword'},
        {include: '#expression'}
      ]
    },
    'template-interpolation': {
      begin: '\\{\\{',
      beginCaptures: {
        0: {name: 'punctuation.section.interpolation.begin.baml'}
      },
      end: '\\}\\}',
      endCaptures: {0: {name: 'punctuation.section.interpolation.end.baml'}},
      name: 'meta.template.interpolation.baml',
      patterns: [
        {include: '#comments'},
        {include: '#template-keyword'},
        {include: '#expression'}
      ]
    },
    'template-keyword': {
      match:
        '\\b(?:for|endfor|if|elif|else|endif|in|set|filter|endfilter|macro|endmacro|raw|endraw)\\b',
      name: 'keyword.control.template.baml'
    },
    'template-quoted-string-body': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.baml'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.baml'}},
      name: 'string.quoted.double.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'},
        {include: '#string-escape'}
      ]
    },
    'template-raw-string-body-1': {
      begin: '(?<!#)(#{1})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{1})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-2': {
      begin: '(?<!#)(#{2})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{2})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-3': {
      begin: '(?<!#)(#{3})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{3})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-4': {
      begin: '(?<!#)(#{4})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{4})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-5': {
      begin: '(?<!#)(#{5})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{5})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-6': {
      begin: '(?<!#)(#{6})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{6})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-7': {
      begin: '(?<!#)(#{7})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{7})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-raw-string-body-8': {
      begin: '(?<!#)(#{8})(")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.baml'},
        2: {name: 'punctuation.definition.string.begin.baml'}
      },
      end: '(")(#{8})',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.baml'},
        2: {name: 'punctuation.definition.string.end.baml'}
      },
      name: 'string.quoted.raw.template.baml',
      patterns: [
        {include: '#template-comment'},
        {include: '#template-control'},
        {include: '#template-interpolation'}
      ]
    },
    'template-string': {
      begin: '^\\s*(template_string)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.template-string.baml'}},
      end: '(?:(?<=#)|(?<="))(?=\\s*(?:\\r?\\n|$))|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.template-string.baml',
      patterns: [
        {include: '#comments'},
        {include: '#template-string-name'},
        {include: '#function-parameters'},
        {include: '#template-string-body'}
      ]
    },
    'template-string-body': {
      patterns: [
        {include: '#template-raw-string-body-8'},
        {include: '#template-raw-string-body-7'},
        {include: '#template-raw-string-body-6'},
        {include: '#template-raw-string-body-5'},
        {include: '#template-raw-string-body-4'},
        {include: '#template-raw-string-body-3'},
        {include: '#template-raw-string-body-2'},
        {include: '#template-raw-string-body-1'},
        {include: '#template-quoted-string-body'}
      ]
    },
    'template-string-name': {
      match: '\\b\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\b',
      name: 'entity.name.function.template-string.baml'
    },
    test: {
      begin:
        '^\\s*(test)\\b(?!(?:[^\\S\\r\\n]+\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*[^\\S\\r\\n]*\\{[^\\S\\r\\n]*(?:functions|type_builder)\\b))',
      beginCaptures: {1: {name: 'keyword.declaration.test.baml'}},
      end: '(?<=\\})',
      name: 'meta.test.baml',
      patterns: [
        {include: '#comments'},
        {include: '#test-header'},
        {include: '#code-block'}
      ]
    },
    'test-header': {
      begin: '\\G\\s*',
      end: '(?=\\{)',
      name: 'meta.test.header.baml',
      patterns: [
        {include: '#comments'},
        {include: '#test-with-keyword'},
        {include: '#condition-expression'}
      ]
    },
    'test-with-keyword': {
      match: '\\bwith\\b',
      name: 'keyword.operator.with.baml'
    },
    testset: {
      begin: '^\\s*(testset)\\b',
      beginCaptures: {1: {name: 'keyword.declaration.testset.baml'}},
      end: '(?<=\\})',
      name: 'meta.testset.baml',
      patterns: [
        {include: '#comments'},
        {include: '#test-header'},
        {include: '#testset-body'}
      ]
    },
    'testset-body': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.baml'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.end.baml'}},
      name: 'meta.testset.body.baml',
      patterns: [{include: '#comments'}, {include: '#block-contents'}]
    },
    'throw-expression': {
      match: '\\bthrow\\b',
      name: 'keyword.control.flow.throw.baml'
    },
    'type-alias': {
      begin:
        '^\\s*(type)\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(=)',
      beginCaptures: {
        1: {name: 'keyword.declaration.type-alias.baml'},
        2: {name: 'entity.name.type.alias.baml'},
        3: {name: 'keyword.operator.assignment.baml'}
      },
      end: '(?<=;)|(?=^\\s*(?:client|retry_policy|generator|template_string|class|enum|interface|implements|implement|function|testset|test|type)\\b)',
      name: 'meta.type-alias.baml',
      patterns: [
        {include: '#comments'},
        {include: '#type-expression'},
        {include: '#semicolon'}
      ]
    },
    'type-arrow-operator': {match: '->', name: 'keyword.operator.arrow.baml'},
    'type-as-operator': {match: '\\bas\\b', name: 'keyword.operator.as.baml'},
    'type-expression': {
      patterns: [
        {include: '#comments'},
        {include: '#primitive-type'},
        {include: '#type-literal'},
        {include: '#type-arrow-operator'},
        {include: '#type-throws-operator'},
        {include: '#associated-type-projection'},
        {include: '#type-reference'},
        {include: '#bare-attribute'},
        {include: '#attribute'},
        {include: '#type-as-operator'},
        {include: '#assignment-operator'},
        {include: '#optional-operator'},
        {include: '#union-operator'},
        {include: '#type-punctuation'},
        {include: '#colon-separator'}
      ]
    },
    'type-literal': {
      patterns: [
        {include: '#boolean-literal'},
        {include: '#null-literal'},
        {include: '#numeric-literal'},
        {include: '#string-literal'},
        {include: '#raw-string'},
        {include: '#backtick-string'}
      ]
    },
    'type-punctuation': {
      match: '[\\[\\]<>,()]',
      name: 'punctuation.definition.type.baml'
    },
    'type-reference': {
      captures: {
        1: {
          patterns: [
            {include: '#namespace-root'},
            {include: '#namespace-segment'}
          ]
        },
        2: {name: 'punctuation.accessor.baml'},
        3: {
          patterns: [
            {include: '#namespace-segment'},
            {include: '#accessor-dot'}
          ]
        },
        4: {name: 'entity.name.type.baml'}
      },
      match:
        '\\b(?:(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\s*(\\.)\\s*)?((?:\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*\\s*\\.\\s*)*)(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b',
      name: 'meta.type-reference.baml'
    },
    'type-throws-operator': {
      match: '\\bthrows\\b',
      name: 'keyword.operator.throws.baml'
    },
    'typed-binding-pattern': {
      captures: {
        1: {name: 'keyword.declaration.binding.baml'},
        2: {name: 'variable.other.binding.baml'},
        3: {name: 'punctuation.separator.colon.baml'}
      },
      match:
        '\\b((?:let|const))\\s+(\\$?[A-Za-z_][A-Za-z0-9_-]*(?:\\$[A-Za-z_][A-Za-z0-9_-]*)*)\\b\\s*(:)',
      name: 'meta.pattern.binding.baml'
    },
    'union-operator': {match: '\\|', name: 'keyword.operator.type.baml'},
    'upcast-expression': {
      begin: '(\\.)\\s*(as)\\b(?=\\s*<)',
      beginCaptures: {
        1: {name: 'punctuation.accessor.baml'},
        2: {name: 'keyword.operator.as.baml'}
      },
      end: '(?<=>)',
      name: 'meta.expression.upcast.baml',
      patterns: [{include: '#comments'}, {include: '#upcast-type-arguments'}]
    },
    'upcast-type-arguments': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.type-arguments.begin.baml'}
      },
      end: '>',
      endCaptures: {
        0: {name: 'punctuation.definition.type-arguments.end.baml'}
      },
      name: 'meta.type-arguments.baml',
      patterns: [{include: '#comments'}, {include: '#type-expression'}]
    },
    'watch-statement': {
      begin: '(?:^\\s*|\\G\\s*|(?<=[{;}])\\s*)(watch)\\b',
      beginCaptures: {1: {name: 'keyword.control.watch.baml'}},
      end: '(?=[;}]|$)',
      name: 'meta.statement.watch.baml',
      patterns: [
        {include: '#comments'},
        {include: '#watch-statement-pattern'},
        {include: '#assignment-operator'},
        {include: '#expression'}
      ]
    },
    'watch-statement-pattern': {
      begin: '\\G\\s*(?=(?:let|const)\\b)',
      end: '(?=\\s*=)',
      name: 'meta.pattern.watch.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'while-condition': {
      begin: '\\G\\s*',
      end: '(?=\\{)',
      name: 'meta.while.condition.baml',
      patterns: [{include: '#comments'}, {include: '#condition-expression'}]
    },
    'while-let-pattern': {
      begin: '\\G\\s*(?=(?:let|const)\\b)',
      end: '(?=\\s*=)',
      name: 'meta.pattern.while-let.baml',
      patterns: [{include: '#comments'}, {include: '#pattern'}]
    },
    'while-statement': {
      begin: '\\b(while)\\b',
      beginCaptures: {1: {name: 'keyword.control.loop.while.baml'}},
      end: '(?<=\\})(?=\\s*(?:;|$))|(?=;|$)',
      name: 'meta.statement.while.baml',
      patterns: [
        {include: '#comments'},
        {include: '#while-let-pattern'},
        {include: '#assignment-operator'},
        {include: '#while-condition'},
        {include: '#code-block'}
      ]
    },
    'wildcard-binding-pattern': {
      captures: {
        1: {name: 'keyword.declaration.binding.baml'},
        2: {name: 'variable.language.wildcard.baml'}
      },
      match: '\\b((?:let|const))\\s+(_)\\b',
      name: 'meta.pattern.wildcard.baml'
    },
    'wildcard-pattern': {
      match: '\\b_\\b',
      name: 'variable.language.wildcard.baml'
    }
  },
  scopeName: 'source.baml'
}

export default grammar
