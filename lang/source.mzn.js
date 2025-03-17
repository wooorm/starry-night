// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Dekker1/vscode-minizinc>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dzn', '.mzn'],
  names: ['minizinc', 'minizinc-data'],
  patterns: [{include: '#main'}],
  repository: {
    main: {
      patterns: [
        {include: '#multi_line_comment'},
        {match: '(%.*)', name: 'comment.mzn'},
        {
          begin: '(@)',
          beginCaptures: {1: {name: 'text.mzn'}},
          contentName: 'text.mzn',
          end: '(@)',
          endCaptures: {1: {name: 'text.mzn'}}
        },
        {include: '#numeric'},
        {include: '#string'},
        {match: '(\\b(?:true|false)\\b)', name: 'constant.language.mzn'},
        {
          match: '(\\bnot\\b|<->|->|<-|\\\\/|\\bxor\\b|/\\\\)',
          name: 'keyword.operator.mzn'
        },
        {match: '(<|>|<=|>=|==|=|!=)', name: 'keyword.operator.mzn'},
        {
          match: '(\\+|-|\\*|/|\\bdiv\\b|\\bmod\\b)',
          name: 'keyword.operator.mzn'
        },
        {
          match:
            '(\\b(?:in|subset|superset|union|diff|symdiff|intersect|\\.\\.)\\b)',
          name: 'keyword.operator.mzn'
        },
        {match: '(;)', name: 'punctuation.mzn'},
        {match: '(:)', name: 'punctuation.mzn'},
        {match: '(,)', name: 'punctuation.mzn'},
        {
          begin: '(\\{)',
          beginCaptures: {1: {name: 'punctuation.mzn'}},
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.mzn'}},
          patterns: [{include: '#main__2'}]
        },
        {
          begin: '(\\[)',
          beginCaptures: {1: {name: 'punctuation.mzn'}},
          end: '(\\])',
          endCaptures: {1: {name: 'punctuation.mzn'}},
          patterns: [{include: '#main__3'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'punctuation.mzn'}},
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.mzn'}},
          patterns: [{include: '#main__4'}]
        },
        {match: '(\\}|\\]|\\))', name: 'invalid.illegal.mzn'},
        {match: '(\\|)', name: 'invalid.illegal.mzn'},
        {
          match:
            '(\\b(?:annotation|constraint|function|include|op|output|minimize|maximize|predicate|satisfy|solve|test|type)\\b)',
          name: 'keyword.control.mzn'
        },
        {
          match:
            '(\\b(?:ann|array|bool|enum|float|int|list|of|par|set|string|tuple|var|record|any|opt)\\b)',
          name: 'storage.type.mzn'
        },
        {
          match:
            '(\\b(?:for|forall|exists|if|then|elseif|else|endif|where|let|in)\\b)',
          name: 'keyword.control.mzn'
        },
        {match: '(\\b(?:case|op)\\b)', name: 'invalid.illegal.mzn'},
        {
          match:
            '(\\b(?:abort|abs|acosh|array_intersect|array_union|array1d|array2d|array3d|array4d|array5d|array6d|asin|assert|atan|bool2int|card|ceil|concat|cos|cosh|dom|dom_array|dom_size|fix|exp|floor|index_set|index_set_1of2|index_set_2of2|index_set_1of3|index_set_2of3|index_set_3of3|int2float|is_fixed|join|lb|lb_array|length|ln|log|log2|log10|min|max|pow|product|round|set2array|show|show_int|show_float|sin|sinh|sqrt|sum|tan|tanh|trace|ub|ub_array)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:circuit|disjoint|maximum|maximum_arg|member|minimum|minimum_arg|network_flow|network_flow_cost|partition_set|range|roots|sliding_sum|subcircuit|sum_pred)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:alldifferent|all_different|all_disjoint|all_equal|alldifferent_except_0|nvalue|symmetric_all_different)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:lex2|lex_greater|lex_greatereq|lex_less|lex_lesseq|strict_lex2|value_precede|value_precede_chain)\\b)',
          name: 'support.function.mzn'
        },
        {
          match: '(\\b(?:arg_sort|decreasing|increasing|sort)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:int_set_channel|inverse|inverse_set|link_set_to_booleans)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:among|at_least|at_most|at_most1|count|count_eq|count_geq|count_gt|count_leq|count_lt|count_neq|distribute|exactly|global_cardinality|global_cardinality_closed|global_cardinality_low_up|global_cardinality_low_up_closed)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:bin_packing|bin_packing_capa|bin_packing_load|diffn|diffn_k|diffn_nonstrict|diffn_nonstrict_k|geost|geost_bb|geost_smallest_bb|knapsack)\\b)',
          name: 'support.function.mzn'
        },
        {
          match:
            '(\\b(?:alternative|cumulative|disjunctive|disjunctive_strict|span)\\b)',
          name: 'support.function.mzn'
        },
        {
          match: '(\\b(?:regular|regular_nfa|table)\\b)',
          name: 'support.function.mzn'
        },
        {
          begin: "(\\b[A-Za-z][A-Za-z0-9_]*|'[^\\x{0027}]*')(\\()",
          beginCaptures: {
            1: {name: 'entity.name.function.mzn'},
            2: {name: 'punctuation.mzn'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.mzn'}},
          patterns: [{include: '#main__5'}]
        },
        {
          match: "(\\b[A-Za-z][A-Za-z0-9_]*|'[^\\x{0027}]*')",
          name: 'variable.mzn'
        }
      ]
    },
    main__2: {
      patterns: [{match: '(\\|)', name: 'punctuation.mzn'}, {include: '#main'}]
    },
    main__3: {
      patterns: [{match: '(\\|)', name: 'punctuation.mzn'}, {include: '#main'}]
    },
    main__4: {patterns: [{include: '#main'}]},
    main__5: {patterns: [{include: '#main'}]},
    multi_line_comment: {
      patterns: [
        {
          begin: '(/\\*)',
          beginCaptures: {1: {name: 'comment.mzn'}},
          contentName: 'comment.mzn',
          end: '(\\*/)',
          endCaptures: {1: {name: 'comment.mzn'}}
        }
      ]
    },
    numeric: {
      patterns: [
        {match: '(\\b0o[0-7]+)', name: 'constant.numeric.mzn'},
        {match: '(\\b0x[0-9A-Fa-f]+)', name: 'constant.numeric.mzn'},
        {match: '(\\b0x[0-9A-Fa-f]+)', name: 'constant.numeric.mzn'},
        {
          match: '(\\b\\d+(?:(?:.\\d+)?[Ee][-\\x{002b}]?\\d+|.\\d+))',
          name: 'constant.numeric.mzn'
        },
        {match: '(\\b\\d+)', name: 'constant.numeric.mzn'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '(\\")',
          beginCaptures: {1: {name: 'string.mzn'}},
          end: '(\\")',
          endCaptures: {1: {name: 'string.mzn'}},
          patterns: [{include: '#string__1'}]
        }
      ]
    },
    string__1: {
      patterns: [
        {
          begin: '(\\\\\\()',
          beginCaptures: {1: {name: 'punctuation.mzn'}},
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.mzn'}},
          patterns: [{include: '#string__2'}]
        },
        {
          match: '(\\\\[\\x{0022}\\x{0027}\\x{005c}nrvt])',
          name: 'constant.character.escape.mzn'
        },
        {match: '([^\\"\\x{005c}]+)', name: 'string.mzn'}
      ]
    },
    string__2: {patterns: [{include: '#main'}]}
  },
  scopeName: 'source.mzn'
}

export default grammar
