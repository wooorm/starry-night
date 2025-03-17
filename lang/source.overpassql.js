// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nickswalker/overpassql-tmlanguage>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.overpassql'],
  names: ['overpassql'],
  patterns: [{include: '#TOP'}],
  repository: {
    TOP: {
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#start-statement-context'}
      ]
    },
    'assign-variable': {
      captures: {
        1: {name: 'keyword.operator.assignment.overpassql'},
        2: {name: 'punctuation.definition.variable.overpassql'},
        3: {name: 'variable.other.overpassql'}
      },
      match: '(->)\\s*+(\\.)\\s*+([_a-zA-Z][_a-zA-Z0-9]*+)(?=\\s*+(?:;|$))',
      name: 'meta.overpassql.output-set'
    },
    bareword: {
      match: '[a-zA-Z][a-zA-Z0-9]*+',
      name: 'meta.overpassql.bareword'
    },
    'block-comment': {
      begin: '\\/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.overpassql'}
      },
      end: '\\*\\/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.overpassql'}},
      name: 'comment.block.overpassql'
    },
    'block-construct': {
      begin: 'if|else|foreach|for|complete|retro|compare',
      beginCaptures: {0: {name: 'keyword.control.overpassql'}},
      end: '(?<=[;)}])',
      name: 'meta.overpassql.statement.block',
      patterns: [
        {include: '#whitespace'},
        {include: '#comment'},
        {include: '#parens-evaluator'},
        {include: '#block-group'}
      ]
    },
    'block-group': {
      begin: '\\{',
      beginCaptures: {
        0: {
          name: 'punctuation.section.block.begin.overpassql punctuation.section.braces.begin'
        }
      },
      end: '\\}',
      endCaptures: {
        0: {
          name: 'punctuation.section.block.end.overpassql punctuation.section.end.begin'
        }
      },
      name: 'meta.block.overpassql',
      patterns: [
        {include: '#whitespace'},
        {include: '#comment'},
        {include: '#start-statement-context'}
      ]
    },
    'builtin-evaluator-function-name': {
      captures: {
        1: {name: 'punctuation.accessor.overpassql'},
        2: {name: 'support.function.overpassql'}
      },
      match:
        '(\\.)?+(id|type|is_tag|keys|version|timestamp|changeset|uid|user|count_tags|count_members|count_distinct_members|count_by_role|count_distinct_by_role|per_member|per_vertex|pos|mtype|ref|role|angle|is_closed|geom|length|lat|lon|lstr|poly|u|set|min|max|sum|count|gcat|number|is_number|suffix|abs|date|is_date|center|tracehull|lrs_in|lrs_isect|lrs_union|lrs_min|lrs_max)(?=\\()',
      name: 'meta.overpassql.evaluator.function-name'
    },
    comments: {
      patterns: [{include: '#block-comment'}, {include: '#line-comment'}]
    },
    evaluator: {
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#extended-overpass-turbo-queries'},
        {include: '#evaluator-operator'},
        {include: '#string-literal'},
        {include: '#number-literal'},
        {include: '#evaluator-variable'},
        {include: '#evaluator-tag-value'},
        {include: '#evaluator-field-access'},
        {include: '#builtin-evaluator-function-name'},
        {include: '#evaluator-function-name'},
        {include: '#evaluator-function-params'}
      ]
    },
    'evaluator-field-access': {
      captures: {
        1: {name: 'punctuation.accessor.overpassql'},
        2: {name: 'variable.other.member.overpassql'}
      },
      match: '(\\.)([a-zA-Z][a-zA-Z0-9]*+)(?!\\()',
      name: 'meta.overpassql.evaluator.field-access'
    },
    'evaluator-function-name': {
      captures: {
        1: {name: 'punctuation.accessor.overpassql'},
        2: {name: 'variable.function.overpassql'}
      },
      match: '(\\.)?+([a-zA-Z][a-zA-Z0-9]*+)(?=\\()',
      name: 'meta.overpassql.evaluator.function-name'
    },
    'evaluator-function-params': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.group.overpassql meta.parens.overpassql meta.overpassql.function.params',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#parameter-separator'},
        {include: '#evaluator'}
      ]
    },
    'evaluator-operator': {
      captures: {
        1: {name: 'keyword.other.overpassql'},
        2: {name: 'keyword.operator.logical.overpassql'},
        3: {name: 'keyword.operator.arithmetic.overpassql'},
        4: {name: 'keyword.operator.other.overpassql'}
      },
      match: '(::)|(!|\\|\\||&&|==|!=|<=|>=|<|>)|(\\+|-|\\*|/)|(\\?|:)'
    },
    'evaluator-tag-value': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.section.brackets.begin.overpassql'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.brackets.end.overpassql'}},
      name: 'meta.overpassql.evaluator.tag-value',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#string-literal'},
        {include: '#bareword'},
        {include: '#evaluator'}
      ]
    },
    'evaluator-variable': {
      match: '([a-zA-Z][a-zA-Z0-9]*+)(?=\\.)',
      name: 'variable.other.overpassql'
    },
    expression: {
      patterns: [
        {include: '#extended-overpass-turbo-queries'},
        {include: '#pair-expression'},
        {include: '#number-literal'},
        {include: '#string-literal'},
        {include: '#setting-special-fields'},
        {include: '#tag-expression'},
        {include: '#query-type'},
        {include: '#parens-expression'}
      ]
    },
    'extended-overpass-turbo-queries': {
      begin: '{{',
      beginCaptures: {0: {name: 'keyword.other.overpassql.turbo.begin'}},
      end: '}}',
      endCaptures: {0: {name: 'keyword.other.overpassql.turbo.end'}},
      name: 'meta.overpassql.turbo.query',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#number-literal'},
        {include: '#string-literal'},
        {include: '#overpass-turbo-query-name'},
        {include: '#overpass-turbo-query-separator'},
        {include: '#overpass-turbo-query-definition'},
        {include: '#overpass-turbo-custom-query-name'}
      ]
    },
    fallback: {
      begin: '(?=.)',
      end: '(?<=[;\\{|\\}])',
      name: 'meta.overpassql.unknown',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#number-literal'},
        {include: '#string-literal'},
        {include: '#query-type'},
        {include: '#assign-variable'},
        {include: '#input-set'}
      ]
    },
    'function-call': {
      begin: '(is_in|timeline)(\\()',
      beginCaptures: {
        1: {name: 'support.function.overpassql'},
        2: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.function-call.overpassql',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#expression'},
        {include: '#parameter-separator'}
      ]
    },
    'function-call-names': {
      match: 'is_in|timeline',
      name: 'support.function.overpassql'
    },
    'function-call-statement-function-name': {
      begin:
        '(?=(?:\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+)?+(?:is_in|timeline))',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.function-call',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'},
        {include: '#function-call'},
        {include: '#assign-variable'}
      ]
    },
    'function-word-statement-word-function-name': {
      begin:
        '(?=(?:\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+)?+(?:local|convert|make))',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.word-function',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'},
        {include: '#word-function-names'},
        {include: '#word-function-param'},
        {include: '#assign-variable'}
      ]
    },
    'generic-function-call': {
      begin: '(\\w++)(\\()',
      beginCaptures: {
        1: {name: 'variable.function.overpassql'},
        2: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.function-call.overpassql.generic',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#expression'},
        {include: '#parameter-separator'}
      ]
    },
    'generic-function-statement-generic-name': {
      begin:
        '(?=(?:\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+)?+\\w)',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.generic-function',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'},
        {include: '#generic-function-call'},
        {include: '#assign-variable'}
      ]
    },
    'input-set': {
      captures: {
        1: {name: 'punctuation.definition.variable.overpassql'},
        2: {name: 'variable.other.overpassql'}
      },
      match: '(\\.)\\s*+([_a-zA-Z][_a-zA-Z0-9]*+)'
    },
    'item-statement-dot-semicolon': {
      begin:
        '(?=\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+;)',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.item',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'}
      ]
    },
    'line-comment': {
      captures: {1: {name: 'punctuation.definition.comment.begin.overpassql'}},
      match: '(//).*+$',
      name: 'comment.double-slash.overpassql'
    },
    'number-literal': {
      captures: {
        1: {name: 'keyword.operator.arithmetic.overpassql'},
        2: {name: 'constant.numeric.overpassql'}
      },
      match: '(?<!\\w)(-)?+((?:[1-9][0-9]*+|0)(?:\\.[0-9]++)?+)(?!\\w)'
    },
    'operator-names': {
      match: '<<|>>|<|>',
      name: 'keyword.operator.other.overpassql'
    },
    'operator-statement-operator-symbol': {
      begin:
        '(?=(?:\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+)?+(?:<<|>>|<|>))',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.operator',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'},
        {include: '#operator-names'},
        {include: '#assign-variable'}
      ]
    },
    'out-keyword': {match: 'out\\b', name: 'keyword.other.overpassql'},
    'out-parameter': {
      patterns: [
        {include: '#out-parameter-keyword'},
        {include: '#positive-integer'},
        {include: '#parens-expression'}
      ]
    },
    'out-parameter-keyword': {
      captures: {0: {name: 'support.constant.overpassql.out'}},
      match: 'count|ids|skel|body|tags|meta|noids|geom|center|bb|asc|qt'
    },
    'out-statement-keyword': {
      begin:
        '(?=(?:\\.\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+[a-zA-Z][a-zA-Z0-9]*+\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+)?+out)',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.out',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#input-set'},
        {include: '#out-keyword'},
        {include: '#out-parameter'}
      ]
    },
    'overpass-turbo-custom-query-name': {
      match: '\\b[a-zA-Z][a-zA-Z0-9]*+(?=\\w*[:}=])',
      name: 'variable.other.overpassql.turbo'
    },
    'overpass-turbo-query-definition': {
      match: '=',
      name: 'keyword.operator.assignment.overpassql.turbo'
    },
    'overpass-turbo-query-name': {
      match:
        '\\b(bbox|center|date|geocodeId|geocodeArea|geocodeBbox|geocodeCoords|style|data)\\b',
      name: 'support.constant.overpassql.turbo'
    },
    'overpass-turbo-query-separator': {
      match: ':',
      name: 'punctuation.separator.delimiter.colon.overpassql.turbo'
    },
    'pair-expression': {
      begin: '([a-zA-Z][a-zA-Z0-9]*+)(\\()',
      beginCaptures: {
        1: {name: 'entity.other.overpassql'},
        2: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.overpassql.pair',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#parameter-separator'},
        {include: '#expression'},
        {include: '#skip-term'}
      ]
    },
    'parameter-separator': {
      match: ',',
      name: 'punctuation.separator.delimiter.comma.overpassql'
    },
    'parens-evaluator': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.overpassql.evaluator-group',
      patterns: [
        {include: '#whitespace'},
        {include: '#comment'},
        {include: '#evaluator'}
      ]
    },
    'parens-expression': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#expression'},
        {include: '#parameter-separator'}
      ]
    },
    'positive-integer': {
      captures: {0: {name: 'constant.numeric.overpassql'}},
      match: '(?<!\\w)([1-9][0-9]*+|0)(?!\\w)'
    },
    'q-string': {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.overpassql'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.overpassql'}},
      name: 'string.quoted.single.overpassql meta.string.overpassql',
      patterns: [{include: '#string-escape'}]
    },
    'qq-string': {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.overpassql'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.overpassql'}},
      name: 'string.quoted.double.overpassql meta.string.overpassql',
      patterns: [{include: '#string-escape'}]
    },
    'query-filter': {
      patterns: [
        {include: '#query-filter-haskv'},
        {include: '#query-filter-intersect'},
        {include: '#query-filter-paren'}
      ]
    },
    'query-filter-haskv': {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.brackets.begin.overpassql'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.brackets.end.overpassql'}
      },
      name: 'meta.overpassql.query.filter.kv',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#query-filter-haskv-operators'},
        {include: '#query-filter-haskv-insensitive'},
        {include: '#string-literal'},
        {include: '#bareword'}
      ]
    },
    'query-filter-haskv-insensitive': {
      captures: {
        1: {name: 'punctuation.separator.delimiter.comma.overpassql'},
        2: {name: 'support.constant.overpassql.i'}
      },
      match: '(,)\\s*+(i)\\s*+(?=\\])',
      name: 'keyword.operator.logical.overpassql'
    },
    'query-filter-haskv-operators': {
      match: '=|!=|~|!~|!',
      name: 'keyword.operator.logical.overpassql'
    },
    'query-filter-intersect': {
      captures: {
        1: {name: 'keyword.operator.arithmetic.overpassql.intersect'},
        2: {name: 'variable.other.overpassql'}
      },
      match: '(\\.)\\s*+([_a-zA-Z][_a-zA-Z0-9]*+)',
      name: 'meta.overpassql.query.filter.intersect'
    },
    'query-filter-keywords': {
      match:
        '\\b(n|w|r|bn|bw|br|id|around|poly|newer|changed|user|uid|area|pivot|if)\\b',
      name: 'keyword.other.overpassql meta.overpassql.query.filter.parens.keyword'
    },
    'query-filter-paren': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.group.overpassql meta.parens.overpassql meta.overpassql.query.filter.parens',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#query-filter-keywords'},
        {include: '#evaluator'},
        {include: '#query-filter-separator'},
        {include: '#parameter-separator'},
        {include: '#expression'}
      ]
    },
    'query-filter-separator': {
      match: ':',
      name: 'punctuation.separator.delimiter.colon.overpassql'
    },
    'query-statement-query-type': {
      begin: '(?=(?:node|way|relation|rel|derived|area|nwr)\\b)',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.query',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#query-type'},
        {include: '#query-filter'},
        {include: '#assign-variable'}
      ]
    },
    'query-type': {
      match: '\\b(node|way|relation|rel|derived|area|nwr)\\b',
      name: 'keyword.other.query.overpassql'
    },
    'set-difference-operator': {
      match: '-',
      name: 'keyword.operator.logical.overpassql'
    },
    'setting-bracket-colon': {
      begin:
        '(\\[)(?=\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+\\w++\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+:)',
      beginCaptures: {
        0: {name: 'punctuation.definition.brackets.begin.overpassql'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.brackets.end.overpassql'}
      },
      name: 'meta.overpassql.setting',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#setting-name'},
        {include: '#setting-param'},
        {include: '#setting-separator'},
        {include: '#parameter-separator'}
      ]
    },
    'setting-name': {
      match: '\\b(timeout|maxsize|out|bbox|date|diff|adiff)\\b',
      name: 'keyword.other.setting'
    },
    'setting-param': {
      patterns: [
        {include: '#setting-special-fields'},
        {include: '#parameter-separator'},
        {include: '#expression'}
      ]
    },
    'setting-separator': {
      match: ':',
      name: 'punctuation.separator.delimiter.colon.overpassql'
    },
    'setting-special-fields': {
      captures: {
        1: {name: 'punctuation.accessor.overpassql'},
        2: {name: 'support.constant.overpassql'},
        3: {name: 'punctuation.accessor.overpassql'},
        4: {name: 'support.constant.overpassql'},
        5: {name: 'punctuation.accessor.overpassql'},
        6: {name: 'support.constant.overpassql'}
      },
      match:
        '(::)(id|type|otype|lat|lon|version|timestamp|changeset|uid|user)\\b|(::)(count)(?:(:)(nodes|ways|relations|areas))?+\\b',
      name: 'meta.overpassql.setting.special-field'
    },
    'settings-statement-bracket-colon': {
      begin:
        '(?=\\[\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+\\w++\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+:)',
      end: ';',
      endCaptures: {0: {name: 'punctuation.terminator.statement.overpassql'}},
      name: 'meta.overpassql.statement.settings-declaration',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#setting-bracket-colon'}
      ]
    },
    'skip-term': {match: '[a-zA-Z][a-zA-Z0-9]*+', name: 'meta.overpassql.term'},
    'start-statement-context': {
      begin: '(?=.)',
      end: '(?<=;)',
      name: 'meta.context.overpassql.statement',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#extended-overpass-turbo-queries'},
        {include: '#settings-statement-bracket-colon'},
        {include: '#query-statement-query-type'},
        {include: '#out-statement-keyword'},
        {include: '#item-statement-dot-semicolon'},
        {include: '#operator-statement-operator-symbol'},
        {include: '#function-call-statement-function-name'},
        {include: '#function-word-statement-word-function-name'},
        {include: '#statement-grouping'},
        {include: '#block-construct'},
        {include: '#generic-function-statement-generic-name'},
        {include: '#block-group'},
        {include: '#fallback'}
      ]
    },
    'statement-grouping': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'punctuation.section.group.begin.overpassql punctuation.section.parens.begin.overpassql'
        }
      },
      end: '\\)',
      endCaptures: {
        0: {
          name: 'punctuation.section.group.end.overpassql punctuation.section.parens.end.overpassql'
        }
      },
      name: 'meta.overpassql.group',
      patterns: [
        {include: '#whitespace'},
        {include: '#comment'},
        {include: '#set-difference-operator'},
        {include: '#start-statement-context'}
      ]
    },
    'string-escape': {
      match: '\\\\[nt"\'\\\\]|\\\\u[0-9a-fA-F]{4}',
      name: 'constant.character.escape.overpassql'
    },
    'string-literal': {
      patterns: [{include: '#qq-string'}, {include: '#q-string'}]
    },
    'tag-correspondance': {
      match: '=',
      name: 'keyword.operator.assignment.overpassql'
    },
    'tag-expression': {
      begin: '(::)(?=\\s*+(?:/\\*(?:[^*]|\\*[^/])*+\\*/\\s*+)*+["\'a-zA-Z])',
      beginCaptures: {0: {name: 'punctuation.accessor.overpassql'}},
      end: '(?=[,)])',
      name: 'meta.overpassql.tag-access',
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#string-literal'},
        {include: '#bareword'}
      ]
    },
    'tag-keywords': {
      captures: {
        1: {name: 'keyword.other.overpassql.key'},
        2: {name: 'keyword.other.overpassql.id'}
      },
      match: '(::)(id)?+',
      name: 'meta.overpassql.tag-match.keyword'
    },
    'tag-match': {
      patterns: [
        {include: '#whitespace'},
        {include: '#comments'},
        {include: '#tag-operators'},
        {include: '#tag-correspondance'},
        {include: '#tag-keywords'},
        {include: '#evaluator'},
        {include: '#string-literal'},
        {include: '#bareword'}
      ]
    },
    'tag-operators': {match: '!', name: 'keyword.operator.overpassql'},
    whitespace: {match: '[ \\t]++', name: 'meta.overpassql.whitespace'},
    'word-function-names': {
      match: 'local|convert|make',
      name: 'support.function.overpassql'
    },
    'word-function-param': {
      patterns: [
        {include: '#query-type'},
        {include: '#tag-match'},
        {include: '#parameter-separator'}
      ]
    }
  },
  scopeName: 'source.overpassql'
}

export default grammar
