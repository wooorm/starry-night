// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/michidk/typst-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.typ'],
  names: ['typst', 'typ'],
  patterns: [{include: '#markup'}],
  repository: {
    arrayOrDict: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.brace.round.typst'},
            2: {name: 'meta.brace.round.typst'}
          },
          match: '(\\()\\s*(\\))'
        },
        {
          captures: {
            1: {name: 'meta.brace.round.typst'},
            2: {name: 'punctuation.separator.colon.typst'},
            3: {name: 'meta.brace.round.typst'}
          },
          match: '(\\()\\s*(:)\\s*(\\))'
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'meta.brace.round.typst'}},
          end: '\\)|(?=[;\\}\\]])',
          endCaptures: {0: {name: 'meta.brace.round.typst'}},
          patterns: [{include: '#literalContent'}]
        }
      ]
    },
    blockComment: {
      begin: '\\/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.typst'}},
      end: '\\*\\/',
      name: 'comment.block.typst',
      patterns: [{include: '#blockComment'}]
    },
    blockRaw: {patterns: [{include: '#blockRawGeneral'}]},
    blockRawGeneral: {
      begin:
        '(`{3,})([\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*\\b)?',
      beginCaptures: {
        1: {name: 'punctuation.definition.raw.begin.typst'},
        2: {name: 'fenced_code.block.language.typst'}
      },
      end: '(\\1)',
      endCaptures: {1: {name: 'punctuation.definition.raw.end.typst'}},
      name: 'markup.raw.block.typst'
    },
    callArgs: {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.typst'}},
      end: '\\)|(?=[;\\}\\]])',
      endCaptures: {0: {name: 'meta.brace.round.typst'}},
      patterns: [{include: '#patternOrArgsBody'}]
    },
    code: {
      patterns: [
        {include: '#common'},
        {include: '#comments'},
        {match: ';', name: 'punctuation.terminator.statement.typst'},
        {include: '#expression'}
      ]
    },
    codeBlock: {
      begin: '\\{',
      beginCaptures: {0: {name: 'meta.brace.curly.typst'}},
      end: '\\}',
      endCaptures: {0: {name: 'meta.brace.curly.typst'}},
      patterns: [{include: '#code'}]
    },
    comments: {
      patterns: [{include: '#blockComment'}, {include: '#lineComment'}]
    },
    common: {
      patterns: [
        {include: '#strictComments'},
        {include: '#blockRaw'},
        {include: '#inlineRaw'}
      ]
    },
    constants: {
      patterns: [
        {
          match:
            '(?:\\d+\\.(?!\\d)|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)(?<!\\.)(mm|pt|cm|in|em)($|\\b)',
          name: 'constant.numeric.length.typst'
        },
        {
          match:
            '(?:\\d+\\.(?!\\d)|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)(?<!\\.)(rad|deg)($|\\b)',
          name: 'constant.numeric.angle.typst'
        },
        {
          match: '(?:\\d+\\.(?!\\d)|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%',
          name: 'constant.numeric.percentage.typst'
        },
        {
          match: '(?:\\d+\\.(?!\\d)|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)(?<!\\.)fr',
          name: 'constant.numeric.fr.typst'
        },
        {
          match:
            '(?<!\\)|\\]|\\})(^|(?<=\\s|#)|\\b)\\d+\\b(?!\\.(?:[^\\p{L}\\p{Nl}__]|$)|[eE])',
          name: 'constant.numeric.integer.typst'
        },
        {
          match: '(?<!\\)|\\]|\\})(^|(?<=\\s|#)|\\b)0x[0-9a-fA-F]+\\b',
          name: 'constant.numeric.hex.typst'
        },
        {
          match: '(?<!\\)|\\]|\\})(^|(?<=\\s|#)|\\b)0o[0-7]+\\b',
          name: 'constant.numeric.octal.typst'
        },
        {
          match: '(?<!\\)|\\]|\\})(^|(?<=\\s|#)|\\b)0b[01]+\\b',
          name: 'constant.numeric.binary.typst'
        },
        {
          match: '(?:\\d+\\.(?!\\d)|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)(?:)',
          name: 'constant.numeric.float.typst'
        },
        {include: '#stringLiteral'},
        {include: '#markupMath'}
      ]
    },
    contentBlock: {
      begin: '\\[',
      beginCaptures: {0: {name: 'meta.brace.square.typst'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.typst'}},
      patterns: [{include: '#contentBlock'}, {include: '#markup'}]
    },
    contextStatement: {
      begin: '\\bcontext\\b(?!-)',
      beginCaptures: {0: {name: 'keyword.control.other.typst'}},
      end: '(?<=[\\}\\]\\d])|(?=[;\\}\\]\\)#\\n]|$)',
      name: 'meta.expr.context.typst',
      patterns: [{include: '#expression'}]
    },
    elseClause: {
      match: '\\belse\\b(?!-)',
      name: 'keyword.control.conditional.typst'
    },
    expression: {
      patterns: [
        {include: '#comments'},
        {include: '#arrayOrDict'},
        {include: '#contentBlock'},
        {match: '\\b(else)\\b(?!-)', name: 'keyword.control.conditional.typst'},
        {
          match: '\\b(break|continue)\\b(?!-)',
          name: 'keyword.control.loop.typst'
        },
        {match: '\\b(in)\\b(?!-)', name: 'keyword.other.range.typst'},
        {match: '\\b(and|or|not)\\b(?!-)', name: 'keyword.other.logical.typst'},
        {match: '\\b(return)\\b(?!-)', name: 'keyword.control.flow.typst'},
        {include: '#markupLabel'},
        {include: '#blockRaw'},
        {include: '#inlineRaw'},
        {include: '#codeBlock'},
        {include: '#letStatement'},
        {include: '#showStatement'},
        {include: '#contextStatement'},
        {include: '#setStatement'},
        {include: '#forStatement'},
        {include: '#whileStatement'},
        {include: '#ifStatement'},
        {include: '#importStatement'},
        {include: '#includeStatement'},
        {include: '#strictFuncCallOrPropAccess'},
        {include: '#primitiveColors'},
        {include: '#primitiveFunctions'},
        {include: '#primitiveTypes'},
        {include: '#keywordConstants'},
        {include: '#identifier'},
        {include: '#constants'},
        {match: '(as)\\b(?!-)', name: 'keyword.control.typst'},
        {match: '(in)\\b(?!-)', name: 'keyword.operator.range.typst'},
        {match: '\\.\\.', name: 'keyword.operator.spread.typst'},
        {match: ':', name: 'punctuation.separator.colon.typst'},
        {match: '\\.', name: 'keyword.operator.accessor.typst'},
        {match: ',', name: 'punctuation.separator.comma.typst'},
        {match: '=>', name: 'storage.type.function.arrow.typst'},
        {match: '==|!=|<=|<|>=|>', name: 'keyword.operator.relational.typst'},
        {
          begin: '(\\+=|-=|\\*=|\\/=|=)',
          beginCaptures: {1: {name: 'keyword.operator.assignment.typst'}},
          end: '(?=[\\n;\\}\\]\\)])',
          patterns: [{include: '#expression'}]
        },
        {match: '\\+|\\\\|\\/|\\*|-', name: 'keyword.operator.arithmetic.typst'}
      ]
    },
    forClause: {
      begin: '(for\\b)\\s*',
      beginCaptures: {1: {name: 'keyword.control.loop.typst'}},
      end: '(?<!(?:\\bwhile)|(?:hile\\s{1})|(?:ile\\s{2})|(?:le\\s{3})|(?:[\\s\\S]{2}(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or))|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s)|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s{2}|(?:if|in|or)\\s{3}|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not))|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not)\\s|(?:and|not)\\s{2}|(?:[\\s\\S]{4}[=<>\\+\\-\\*\\/])|(?:[\\s\\S]{3}[=<>\\+\\-\\*\\/]\\s)|(?:[\\s\\S]{2}[=<>\\+\\-\\*\\/]\\s{2})|(?:[\\s\\S][=<>\\+\\-\\*\\/]\\s{3})|(?:[=<>\\+\\-\\*\\/]\\s{4}))(?=[\\[\\{])|(?=[;,\\}\\]\\)\\#\\n]|$)',
      patterns: [{include: '#expression'}]
    },
    forStatement: {
      begin: '(?=(?:(for\\b(?!-))\\s*))',
      end: '(?<=[\\}\\]])(?![\\{\\[])|(?=[;\\}\\]\\)\\n]|$)',
      name: 'meta.expr.for.typst',
      patterns: [
        {include: '#comments'},
        {include: '#forClause'},
        {include: '#codeBlock'},
        {include: '#contentBlock'}
      ]
    },
    identifier: {
      match:
        '(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*',
      name: 'variable.other.readwrite.typst'
    },
    ifClause: {
      begin: '\\bif\\b(?!-)',
      beginCaptures: {0: {name: 'keyword.control.conditional.typst'}},
      end: '(?<!(?:\\bwhile)|(?:hile\\s{1})|(?:ile\\s{2})|(?:le\\s{3})|(?:[\\s\\S]{2}(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or))|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s)|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s{2}|(?:if|in|or)\\s{3}|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not))|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not)\\s|(?:and|not)\\s{2}|(?:[\\s\\S]{4}[=<>\\+\\-\\*\\/])|(?:[\\s\\S]{3}[=<>\\+\\-\\*\\/]\\s)|(?:[\\s\\S]{2}[=<>\\+\\-\\*\\/]\\s{2})|(?:[\\s\\S][=<>\\+\\-\\*\\/]\\s{3})|(?:[=<>\\+\\-\\*\\/]\\s{4}))(?=[\\[\\{])|(?=[;,\\}\\]\\)\\#\\n]|$)',
      patterns: [{include: '#expression'}]
    },
    ifStatement: {
      begin: '(?=(?:(else\\s+)?(if\\b(?!-))))',
      end: '(?<=\\}|\\])(?!\\s*(else)\\b(?!-)|[\\[\\{])|(?<=else)(?!\\s*(?:if\\b(?!-)|[\\[\\{]))|(?=[;\\}\\]\\)\\n]|$)',
      name: 'meta.expr.if.typst',
      patterns: [
        {include: '#comments'},
        {include: '#ifClause'},
        {include: '#elseClause'},
        {include: '#codeBlock'},
        {include: '#contentBlock'}
      ]
    },
    importAsClause: {
      begin: '(\\bas\\b)\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.typst'}},
      end: '(?=[\\s;\\}\\]\\)\\:])',
      patterns: [{include: '#comments'}, {include: '#identifier'}]
    },
    importPathClause: {
      begin: '(\\bimport\\b(?!-))\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.typst'}},
      end: '(?=\\:|as)',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    importStatement: {
      begin: '(\\bimport\\b(?!-))\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.typst'}},
      end: '(?=[\\n;\\}\\]\\)])',
      name: 'meta.expr.import.typst',
      patterns: [
        {include: '#comments'},
        {include: '#importPathClause'},
        {match: '\\:', name: 'punctuation.separator.colon.typst'},
        {match: '\\*', name: 'keyword.operator.wildcard.typst'},
        {match: '\\,', name: 'punctuation.separator.comma.typst'},
        {include: '#importAsClause'},
        {include: '#expression'}
      ]
    },
    includeStatement: {
      begin: '(\\binclude\\b(?!-))\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.typst'}},
      end: '(?=[\\n;\\}\\]\\)])',
      name: 'meta.expr.include.typst',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    inlineRaw: {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.raw.inline.typst'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.raw.inline.typst'}},
      name: 'markup.raw.inline.typst string.other.raw.typst'
    },
    keywordConstants: {
      patterns: [
        {
          match: '(?<!\\)|\\]|\\})\\bnone\\b(?!-)',
          name: 'keyword.other.none.typst'
        },
        {
          match: '(?<!\\)|\\]|\\})\\bauto\\b(?!-)',
          name: 'keyword.other.auto.typst'
        },
        {
          match: '(?<!\\)|\\]|\\})\\b(false|true)\\b(?!-)',
          name: 'constant.language.boolean.typst'
        }
      ]
    },
    letBindingClause: {
      begin: '(let\\b(?!-))\\s*',
      beginCaptures: {1: {name: 'storage.type.typst'}},
      end: '(?=[=;\\]}\\n])',
      patterns: [
        {include: '#comments'},
        {
          begin:
            '(\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*)(\\()',
          beginCaptures: {
            1: {
              name: 'entity.name.function.typst',
              patterns: [{include: '#primitiveFunctions'}]
            },
            2: {name: 'meta.brace.round.typst'}
          },
          end: '\\)|(?=[;\\}\\]])',
          endCaptures: {0: {name: 'meta.brace.round.typst'}},
          patterns: [{include: '#patternOrArgsBody'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'meta.brace.round.typst'}},
          end: '\\)|(?=[;\\}\\]])',
          endCaptures: {0: {name: 'meta.brace.round.typst'}},
          patterns: [{include: '#patternOrArgsBody'}]
        },
        {include: '#identifier'}
      ]
    },
    letInitClause: {
      begin: '=\\s*',
      beginCaptures: {0: {name: 'keyword.operator.assignment.typst'}},
      end: '(?=[\\n;\\}\\]\\)])',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    letStatement: {
      begin: '(?=(?:(let\\b(?!-))))',
      end: '(?!\\=)(?=[\\s;\\}\\]\\)])',
      name: 'meta.expr.let.typst',
      patterns: [
        {include: '#comments'},
        {include: '#letBindingClause'},
        {include: '#letInitClause'}
      ]
    },
    lineComment: {
      begin: '\\/\\/',
      beginCaptures: {0: {name: 'punctuation.definition.comment.typst'}},
      end: '(?=$|\\n)',
      name: 'comment.line.double-slash.typst'
    },
    literalContent: {
      patterns: [{include: '#paramOrArgName'}, {include: '#expression'}]
    },
    markup: {
      patterns: [
        {include: '#common'},
        {include: '#markupEnterCode'},
        {include: '#markupEscape'},
        {match: '\\\\', name: 'punctuation.definition.linebreak.typst'},
        {match: '\\~', name: 'punctuation.definition.nonbreaking-space.typst'},
        {match: '-\\?', name: 'punctuation.definition.shy.typst'},
        {match: '---', name: 'punctuation.definition.em-dash.typst'},
        {match: '--', name: 'punctuation.definition.en-dash.typst'},
        {match: '\\.\\.\\.', name: 'punctuation.definition.ellipsis.typst'},
        {include: '#markupBold'},
        {include: '#markupItalic'},
        {include: '#markupLink'},
        {include: '#markupMath'},
        {include: '#markupHeading'},
        {
          match: '^\\s*-\\s+',
          name: 'punctuation.definition.list.unnumbered.typst'
        },
        {
          match: '^\\s*([0-9]+\\.|\\+)\\s+',
          name: 'punctuation.definition.list.numbered.typst'
        },
        {include: '#markupLabel'},
        {include: '#markupReference'},
        {include: '#markupBrace'}
      ]
    },
    markupBold: {
      begin:
        '(?:(^\\*|\\*$|((?<=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}])\\*)|(\\*(?=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}]))))',
      beginCaptures: {0: {name: 'punctuation.definition.bold.typst'}},
      end: '(?:(^\\*|\\*$|((?<=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}])\\*)|(\\*(?=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}]))))|\\n|(?=\\])',
      endCaptures: {0: {name: 'punctuation.definition.bold.typst'}},
      name: 'markup.bold.typst',
      patterns: [{include: '#markup'}]
    },
    markupBrace: {match: '[{}()\\[\\]]', name: 'markup.content.brace.typst'},
    markupEnterCode: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.hash.typst'}},
          match: '(#)\\s'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.hash.typst'},
            2: {name: 'punctuation.terminator.statement.typst'}
          },
          match: '(#)(;)'
        },
        {
          begin:
            '#(?=(?:break|continue|and|or|not|return|as|in|include|import|let|else|if|for|while|context|set|show)\\b(?!-))',
          beginCaptures: {0: {name: 'keyword.control.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin:
            '#(?=(?:any|str|int|float|bool|type|length|content|array|dictionary|arguments)\\b(?!-))',
          beginCaptures: {0: {name: 'entity.name.type.primitive.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?=(?:none)\\b(?!-))',
          beginCaptures: {0: {name: 'keyword.other.none.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?=(?:false|true)\\b(?!-))',
          beginCaptures: {0: {name: 'constant.language.boolean.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin:
            '#(?=[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*[\\(\\[])',
          beginCaptures: {0: {name: 'entity.name.function.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?=[\\p{L}\\p{Nl}__])',
          beginCaptures: {0: {name: 'variable.other.readwrite.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?=\\")',
          beginCaptures: {0: {name: 'string.hash.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?=\\d|\\.\\d)',
          beginCaptures: {0: {name: 'constant.numeric.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        },
        {
          begin: '#(?:)',
          beginCaptures: {0: {name: 'keyword.control.hash.typst'}},
          end: '(?<=;)|(?<=[\\}\\]\\)])(?![;\\(\\[\\$]|(?:\\.(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=[\\(\\[])))|(?<!#)(?=["\\_])|(?=\\.(?:[^0-9\\p{L}\\p{Nl}__]|$))|(?=[\\s,\\}\\]\\)\\#\\$\\*]|$)|(;)',
          endCaptures: {1: {name: 'punctuation.terminator.statement.typst'}},
          patterns: [{include: '#expression'}]
        }
      ]
    },
    markupEscape: {
      match: '\\\\(?:[^u]|u\\{?[0-9a-zA-Z]*\\}?)',
      name: 'constant.character.escape.content.typst'
    },
    markupHeading: {
      begin: '^\\s*(=+)(?:(?=[\\r\\n]|$)|[^\\S\\n]+)',
      beginCaptures: {1: {name: 'punctuation.definition.heading.typst'}},
      end: '\\n|(?=<)',
      name: 'markup.heading.typst',
      patterns: [{include: '#markup'}]
    },
    markupItalic: {
      begin:
        '(?:(^_|_$|((?<=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}])_)|(_(?=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}]))))',
      beginCaptures: {0: {name: 'punctuation.definition.italic.typst'}},
      end: '(?:(^_|_$|((?<=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}])_)|(_(?=[\\W\\p{Han}\\p{Hangul}\\p{Katakana}\\p{Hiragana}]))))|\\n|(?=\\])',
      endCaptures: {0: {name: 'punctuation.definition.italic.typst'}},
      name: 'markup.italic.typst',
      patterns: [{include: '#markup'}]
    },
    markupLabel: {
      match:
        '<[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-\\.:]*>',
      name: 'string.other.label.typst'
    },
    markupLink: {
      begin: '(?:https?):\\/\\/',
      end: "(?=[\\s\\]\\)]|(?=[!,.:;?'](?:[\\s\\]\\)]|$)))",
      name: 'markup.underline.link.typst',
      patterns: [
        {include: '#markupLinkParen'},
        {include: '#markupLinkBracket'},
        {
          match:
            "(^|\\G)(?:[0-9a-zA-Z#$%&*\\+\\-\\/\\=\\@\\_\\~]+|(?:[!,.:;?']+(?![\\s\\]\\)]|$)))"
        }
      ]
    },
    markupLinkBracket: {
      begin: '\\[',
      end: '\\]|(?=[\\s\\)])',
      patterns: [{include: '#markupLink'}]
    },
    markupLinkParen: {
      begin: '\\(',
      end: '\\)|(?=[\\s\\]])',
      patterns: [{include: '#markupLink'}]
    },
    markupMath: {
      begin: '\\$',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.math.typst'}
      },
      end: '\\$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.math.typst'}},
      name: 'markup.math.typst',
      patterns: [{include: '#math'}]
    },
    markupReference: {
      captures: {1: {name: 'punctuation.definition.reference.typst'}},
      match:
        '(@)[\\p{L}\\p{Nl}__](?:[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]|[\\.:](?!:\\s|$|([\\.:]*[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-\\.:])))*',
      name: 'string.other.reference.typst'
    },
    math: {
      patterns: [
        {include: '#markupEscape'},
        {include: '#stringLiteral'},
        {include: '#markupEnterCode'},
        {
          begin: '([_^\\/√∛∜])\\s*([\\[\\(\\{⌈⌊⌜⌞❲⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼])',
          beginCaptures: {
            1: {name: 'punctuation.math.operator.typst'},
            2: {name: 'constant.other.symbol.typst'}
          },
          end: '([\\]\\)\\}⌉⌋⌝⌟❳⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽])|(?=\\$)|$',
          endCaptures: {0: {name: 'constant.other.symbol.typst'}},
          patterns: [{include: '#mathParen'}, {include: '#math'}]
        },
        {match: "[_^'&\\/√∛∜]", name: 'punctuation.math.operator.typst'},
        {include: '#strictMathFuncCallOrPropAccess'},
        {include: '#mathPrimary'},
        {include: '#mathMoreBrace'}
      ]
    },
    mathBrace: {match: '[{}]', name: 'markup.content.brace.typst'},
    mathCallArgs: {
      begin: '\\(',
      beginCaptures: {0: {name: 'meta.brace.round.typst'}},
      end: '\\)|(?=\\$)',
      endCaptures: {0: {name: 'meta.brace.round.typst'}},
      patterns: [
        {include: '#comments'},
        {include: '#mathParen'},
        {match: ',', name: 'punctuation.separator.comma.typst'},
        {include: '#math'}
      ]
    },
    mathIdentifier: {
      match:
        '(?:(?<=_)|\\b)(?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])+',
      name: 'variable.other.readwrite.typst'
    },
    mathMoreBrace: {match: '[{}()\\[\\]]', name: 'markup.content.brace.typst'},
    mathParen: {
      begin: '[\\[\\(\\{⌈⌊⌜⌞❲⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼]',
      beginCaptures: {0: {name: 'markup.content.brace.typst'}},
      end: '([\\]\\)\\}⌉⌋⌝⌟❳⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽])|(?=\\$)|$',
      endCaptures: {0: {name: 'markup.content.brace.typst'}},
      patterns: [{include: '#mathParen'}, {include: '#math'}]
    },
    mathPrimary: {
      begin:
        '(?:(?<=_)|\\b)(?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])+',
      beginCaptures: {0: {name: 'variable.other.readwrite.typst'}},
      end: '(?!(?:\\(|\\.[\\p{L}\\p{Nl}_]))|(?=\\$)',
      patterns: [
        {include: '#strictMathFuncCallOrPropAccess'},
        {
          captures: {
            1: {name: 'keyword.operator.accessor.typst'},
            2: {name: 'variable.other.readwrite.typst'}
          },
          match:
            '(\\.)((?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])*)'
        },
        {include: '#mathCallArgs'},
        {include: '#mathIdentifier'}
      ]
    },
    paramOrArgName: {
      captures: {
        2: {name: 'variable.other.readwrite.typst'},
        3: {name: 'punctuation.separator.colon.typst'}
      },
      match:
        '(?!(show|import|include)\\s*\\:)((?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*)\\s*(\\:)'
    },
    patternOrArgsBody: {
      patterns: [
        {include: '#comments'},
        {include: '#paramOrArgName'},
        {include: '#expression'}
      ]
    },
    primitiveColors: {
      match:
        '\\b(red|blue|green|black|white|gray|silver|eastern|navy|aqua|teal|purple|fuchsia|maroon|orange|yellow|olive|lime|ltr|rtl|ttb|btt|start|left|center|right|end|top|horizon|bottom)\\b(?!-)',
      name: 'variable.other.constant.builtin.typst'
    },
    primitiveFunctions: {
      match: '\\b(?:luma|oklab|oklch|rgb|cmyk|range)\\b(?!-)',
      name: 'support.function.builtin.typst'
    },
    primitiveTypes: {
      match:
        '\\b(any|str|int|float|bool|type|length|content|array|dictionary|arguments)\\b(?!-)',
      name: 'entity.name.type.primitive.typst'
    },
    setClause: {
      begin: '(set\\b)\\s+',
      beginCaptures: {1: {name: 'keyword.control.other.typst'}},
      end: '(?=if)|(?=[\\n;\\{\\[\\}\\]\\)])',
      patterns: [
        {include: '#comments'},
        {include: '#strictFuncCallOrPropAccess'},
        {include: '#identifier'}
      ]
    },
    setIfClause: {
      begin: '(if\\b(?!-))\\s*',
      beginCaptures: {1: {name: 'keyword.control.conditional.typst'}},
      end: '(?<=\\S)(?<!and|or|not|in|!=|==|<=|>=|<|>|\\+|-|\\*|\\/|=|\\+=|-=|\\*=|\\/=)(?!\\s*(?:and|or|not|in|!=|==|<=|>=|<|>|\\+|-|\\*|\\/|=|\\+=|-=|\\*=|\\/=|\\.))|(?=[\\n;\\}\\]\\)])',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    setStatement: {
      begin:
        '(?=(?:(set\\b(?!-))\\s*(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*))',
      end: '(?<=\\))(?!\\s*if\\b)|(?=[\\s;\\{\\[\\}\\]\\)])',
      name: 'meta.expr.set.typst',
      patterns: [
        {include: '#comments'},
        {include: '#setClause'},
        {include: '#setIfClause'}
      ]
    },
    showAnyClause: {
      captures: {1: {name: 'keyword.control.other.typst'}},
      match: '(show\\b)\\s*(?=\\:)'
    },
    showSelectClause: {
      begin: '(show\\b)\\s*',
      beginCaptures: {1: {name: 'keyword.control.other.typst'}},
      end: '(?=[:;\\}\\]\\n])',
      patterns: [
        {include: '#comments'},
        {include: '#markupLabel'},
        {include: '#expression'}
      ]
    },
    showStatement: {
      begin: '(?=(?:(show\\b(?!-))))',
      end: '(?=[\\s;\\{\\[\\}\\]\\)])',
      name: 'meta.expr.show.typst',
      patterns: [
        {include: '#comments'},
        {include: '#showAnyClause'},
        {include: '#showSelectClause'},
        {include: '#showSubstClause'}
      ]
    },
    showSubstClause: {
      begin: '(\\:)\\s*',
      beginCaptures: {1: {name: 'punctuation.separator.colon.typst'}},
      end: '(?=[\\n;\\}\\]\\)])',
      patterns: [{include: '#comments'}, {include: '#expression'}]
    },
    strictComments: {
      patterns: [{include: '#blockComment'}, {include: '#strictLineComment'}]
    },
    strictFuncCallOrPropAccess: {
      begin:
        '(?=(?:(\\.)?(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=\\(|\\[)))',
      end: '(?:(?<=\\)|\\])(?![\\[\\(\\.]))|(?=[\\s;,\\}\\]\\)\\#]|$)',
      name: 'meta.expr.call.typst',
      patterns: [
        {match: '\\.', name: 'keyword.operator.accessor.typst'},
        {
          captures: {
            0: {
              patterns: [
                {include: '#primitiveFunctions'},
                {include: '#primitiveTypes'},
                {match: '.*', name: 'entity.name.function.typst'}
              ]
            }
          },
          match:
            '(?<!\\)|\\]|\\})\\b[\\p{L}\\p{Nl}__][\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}_\\-]*(?=\\(|\\[)'
        },
        {include: '#identifier'},
        {
          captures: {
            1: {name: 'meta.brace.round.typst'},
            2: {name: 'meta.brace.round.typst'}
          },
          match: '(\\()\\s*(\\))'
        },
        {include: '#callArgs'},
        {include: '#contentBlock'}
      ]
    },
    strictLineComment: {
      begin: '(?<!:)\\/\\/',
      beginCaptures: {0: {name: 'punctuation.definition.comment.typst'}},
      end: '(?=$|\\n)',
      name: 'comment.line.double-slash.typst'
    },
    strictMathFuncCallOrPropAccess: {
      begin:
        '(?=(?:(?:(\\.)((?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])*)|(?:(?<=_)|\\b)(?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])+)(?=\\()))',
      end: '(?:(?<=[\\)])(?![\\(\\.]|(?:(?<=_)|\\b)(?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])+(?=\\()))|(?=[\\$\\s;,\\}\\]\\)]|$)',
      name: 'meta.expr.call.typst',
      patterns: [
        {match: '\\.', name: 'keyword.operator.accessor.typst'},
        {
          captures: {
            0: {
              name: 'entity.name.function.typst',
              patterns: [
                {include: '#primitiveFunctions'},
                {include: '#primitiveTypes'},
                {match: '.*', name: 'entity.name.function.typst'}
              ]
            }
          },
          match:
            '(?:(?<=_)|\\b)(?:(?!_)[\\p{L}\\p{Nl}_])(?:(?!_)[\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])+(?=\\()',
          name: 'entity.name.function.typst'
        },
        {include: '#mathIdentifier'},
        {
          captures: {
            1: {name: 'meta.brace.round.typst'},
            2: {name: 'meta.brace.round.typst'}
          },
          match: '(\\()\\s*(\\))'
        },
        {include: '#mathCallArgs'}
      ]
    },
    stringLiteral: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.typst'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.typst'}},
      name: 'string.quoted.double.typst',
      patterns: [
        {
          captures: {1: {name: 'constant.character.escape.string.typst'}},
          match: '(\\\\(?:[^u]|u\\{?[0-9a-zA-Z]*\\}?))|[^\\\\"]+'
        }
      ]
    },
    whileClause: {
      begin: '(while\\b)\\s*',
      beginCaptures: {1: {name: 'keyword.control.loop.typst'}},
      end: '(?<!(?:\\bwhile)|(?:hile\\s{1})|(?:ile\\s{2})|(?:le\\s{3})|(?:[\\s\\S]{2}(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or))|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s)|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:if|in|or)\\s{2}|(?:if|in|or)\\s{3}|(?:[\\s\\S](?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not))|(?:\\s|[^\\p{L}\\p{Nl}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}])(?:and|not)\\s|(?:and|not)\\s{2}|(?:[\\s\\S]{4}[=<>\\+\\-\\*\\/])|(?:[\\s\\S]{3}[=<>\\+\\-\\*\\/]\\s)|(?:[\\s\\S]{2}[=<>\\+\\-\\*\\/]\\s{2})|(?:[\\s\\S][=<>\\+\\-\\*\\/]\\s{3})|(?:[=<>\\+\\-\\*\\/]\\s{4}))(?=[\\[\\{])|(?=[;,\\}\\]\\)\\#\\n]|$)',
      patterns: [{include: '#expression'}]
    },
    whileStatement: {
      begin: '(?=(?:(while\\b(?!-))))',
      end: '(?<=[\\}\\]])(?![\\{\\[])|(?=[;\\}\\]\\)\\n]|$)',
      name: 'meta.expr.while.typst',
      patterns: [
        {include: '#comments'},
        {include: '#whileClause'},
        {include: '#codeBlock'},
        {include: '#contentBlock'}
      ]
    }
  },
  scopeName: 'source.typst'
}

export default grammar
