// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/vespa-engine/vespa>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sd'],
  names: ['vespa-schema-definition', 'vespa'],
  patterns: [
    {include: '#comment'},
    {include: '#string-double'},
    {include: '#string-single'},
    {include: '#tensor-type'},
    {include: '#indexing-block'},
    {include: '#indexing-inline'},
    {include: '#expression-block'},
    {include: '#expression-inline'},
    {include: '#feature-list-block'},
    {include: '#feature-list-inline'},
    {include: '#rank-properties-block'},
    {include: '#match-block'},
    {include: '#summary-block'},
    {include: '#enum-value-inline'},
    {include: '#container-type'},
    {include: '#primitive-type'},
    {include: '#numeric-literal'},
    {include: '#boolean-constants'},
    {include: '#declarations'},
    {include: '#file-path'},
    {include: '#schema-keywords'},
    {include: '#user-type'},
    {include: '#assignment-operator'},
    {include: '#schema-functions'},
    {include: '#schema-enum-members'},
    {include: '#variable-reference'},
    {include: '#punctuation'}
  ],
  repository: {
    'assignment-operator': {
      match: '[+\\-*/]?=',
      name: 'keyword.operator.assignment.vespa'
    },
    'boolean-constants': {
      match: '\\b(on(?!-)|off|true|false)\\b',
      name: 'support.type.vespa'
    },
    comment: {
      captures: {1: {name: 'punctuation.definition.comment.vespa'}},
      match: '(#).*$',
      name: 'comment.line.number-sign.vespa'
    },
    'container-type': {
      begin: '\\b(array|weightedset|map|reference|annotationreference)\\s*(<)',
      beginCaptures: {
        1: {name: 'storage.type.vespa'},
        2: {name: 'punctuation.definition.typeparameters.begin.vespa'}
      },
      end: '(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.typeparameters.end.vespa'}
      },
      patterns: [
        {include: '#container-type'},
        {include: '#primitive-type'},
        {include: '#tensor-type'},
        {match: ',', name: 'punctuation.separator.vespa'},
        {match: '\\b[a-zA-Z_]\\w*\\b', name: 'entity.name.type.vespa'}
      ]
    },
    declarations: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'entity.name.type.vespa'},
            3: {name: 'keyword.control.vespa'},
            4: {name: 'entity.other.inherited-class.vespa'}
          },
          match:
            '\\b(schema)\\s+([a-zA-Z_]\\w*)(?:\\s+(inherits)\\s+([a-zA-Z_]\\w*))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'entity.name.type.vespa'},
            3: {name: 'keyword.control.vespa'},
            4: {name: 'entity.other.inherited-class.vespa'}
          },
          match:
            '\\b(document)\\s+([a-zA-Z_]\\w*)(?:\\s+(inherits)\\s+([a-zA-Z_]\\w*))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            3: {name: 'keyword.control.vespa'}
          },
          match: '\\b(field)\\s+([a-zA-Z_]\\w*)\\s+(type)\\b'
        },
        {
          captures: {1: {name: 'keyword.declaration.vespa'}},
          match: '\\b(struct)\\s+([a-zA-Z_]\\w*)'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'entity.name.function.vespa'},
            3: {name: 'keyword.control.vespa'},
            4: {name: 'entity.other.inherited-class.vespa'}
          },
          match:
            '(?<![a-zA-Z0-9_-])(rank-profile)\\s+([a-zA-Z_][\\w-]*)(?:\\s+(inherits)\\s+([a-zA-Z_][\\w-]*))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'storage.modifier.vespa'},
            3: {name: 'entity.name.function.vespa'},
            4: {name: 'variable.parameter.vespa'}
          },
          match:
            '\\b(function)\\s+(?:(inline)\\s+)?([a-zA-Z_]\\w*)\\s*(\\([^)]*\\))'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            3: {name: 'keyword.control.vespa'},
            4: {name: 'entity.other.inherited-class.vespa'}
          },
          match:
            '\\b(annotation)\\s+([a-zA-Z_]\\w*)(?:\\s+(inherits)\\s+([a-zA-Z_]\\w*))?'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'entity.name.type.vespa'},
            3: {name: 'keyword.control.vespa'},
            4: {name: 'entity.other.inherited-class.vespa'}
          },
          match:
            '(?<![a-zA-Z0-9_-])(document-summary)\\s+([a-zA-Z_][\\w-]*)(?:\\s+(inherits)\\s+([a-zA-Z_][\\w-]*))?'
        },
        {
          captures: {1: {name: 'keyword.declaration.vespa'}},
          match: '\\b(fieldset)\\s+([a-zA-Z_]\\w*)'
        },
        {
          captures: {1: {name: 'keyword.declaration.vespa'}},
          match: '(?<![a-zA-Z0-9_-])(struct-field)\\s+([a-zA-Z_]\\w*)'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.vespa'},
            2: {name: 'keyword.declaration.vespa'}
          },
          match: '\\b(import)\\s+(field)\\b'
        },
        {
          captures: {1: {name: 'keyword.declaration.vespa'}},
          match: '\\b(constant)\\s+([a-zA-Z_]\\w*)'
        },
        {
          captures: {1: {name: 'keyword.declaration.vespa'}},
          match: '(?<![a-zA-Z0-9_-])(onnx-model)\\s+([a-zA-Z_][\\w-]*)'
        }
      ]
    },
    'enum-value-inline': {
      captures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.separator.vespa'},
        3: {name: 'variable.other.enummember.vespa'}
      },
      match:
        '(?<![a-zA-Z0-9_-])(match|rank|rank-type|sorting|bolding|stemming|summary-to|distance-metric|normalizing|function|locale|strength|order)(:\\s*)(token|word|exact|text|gram|prefix|substring|suffix|cased|uncased|literal|identity|tags|source|bolding|full|static|dynamic|tokens|matched-elements-only|angular|dotproduct|euclidean|prenormalized-angular|hamming|geodegrees|best|shortest|multiple|none|primary|secondary|tertiary|quaternary|identical|lowercase|raw|ascending|descending|always|on-demand|never|normal|contextual)(?![a-zA-Z0-9_-])'
    },
    'expression-block': {
      begin: '\\b(expression)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.expression.vespa',
      patterns: [{include: '#ranking-expression'}]
    },
    'expression-inline': {
      begin: '\\b(expression)\\s*(:)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.separator.vespa'}
      },
      end: '$',
      name: 'meta.inline.expression.vespa',
      patterns: [{include: '#ranking-expression'}]
    },
    'feature-list-block': {
      begin:
        '(?<![a-zA-Z0-9_-])(match-features|summary-features|rank-features)(?:\\s+(inherits)\\s+([a-zA-Z_][\\w-]*))?\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'keyword.control.vespa'},
        3: {name: 'entity.other.inherited-class.vespa'},
        4: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.feature-list.vespa',
      patterns: [{include: '#ranking-expression'}]
    },
    'feature-list-inline': {
      begin:
        '(?<![a-zA-Z0-9_-])(match-features|summary-features|rank-features)\\s*(:)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.separator.vespa'}
      },
      end: '$',
      name: 'meta.inline.feature-list.vespa',
      patterns: [{include: '#ranking-expression'}]
    },
    'file-path': {
      captures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'string.unquoted.path.vespa'}
      },
      match: '\\b(file)\\s*:\\s*(\\S+)'
    },
    'indexing-block': {
      begin: '\\b(indexing)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.indexing.vespa',
      patterns: [{include: '#indexing-language'}]
    },
    'indexing-inline': {
      begin: '\\b(indexing)\\s*(:)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.separator.vespa'}
      },
      end: '$',
      name: 'meta.inline.indexing.vespa',
      patterns: [{include: '#indexing-language'}]
    },
    'indexing-language': {
      patterns: [
        {include: '#comment'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#numeric-literal'},
        {
          match: '\\b(attribute|summary|index)\\b',
          name: 'support.type.indexing.vespa'
        },
        {
          match: '\\b(select_input|for_each|default|switch|case|else|if)\\b',
          name: 'keyword.control.indexing.vespa'
        },
        {
          match:
            '\\b(to_epoch_second|base64decode|base64encode|get_language|set_language|get_field|hexdecode|hexencode|lowercase|normalize|substring|to_double|to_string|hostname|to_array|to_float|tokenize|flatten|get_var|set_var|to_bool|to_byte|to_long|to_wset|to_int|to_pos|chunk|embed|input|ngram|split|echo|hash|join|trim|now)\\b',
          name: 'entity.name.function.indexing.vespa'
        },
        {match: '\\|', name: 'keyword.operator.pipe.indexing.vespa'},
        {include: '#punctuation'}
      ]
    },
    'match-block': {
      begin: '\\b(match)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.match.vespa',
      patterns: [
        {include: '#comment'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#numeric-literal'},
        {include: '#enum-value-inline'},
        {
          match:
            '\\b(token|word|exact|text|gram|prefix|substring|suffix|cased|uncased|literal|identity|tags|source|bolding|full|static|dynamic|tokens|matched-elements-only|angular|dotproduct|euclidean|prenormalized-angular|hamming|geodegrees|best|shortest|multiple|none|primary|secondary|tertiary|quaternary|identical|lowercase|raw|ascending|descending|always|on-demand|never|normal|contextual)\\b',
          name: 'variable.other.enummember.vespa'
        },
        {include: '#schema-keywords'},
        {include: '#punctuation'}
      ]
    },
    'numeric-literal': {
      patterns: [
        {match: '\\b(infinity)\\b', name: 'constant.numeric.vespa'},
        {
          match: '(?<![a-zA-Z_0-9])(-?\\d+\\.\\d*(?:[eE][+-]?\\d+)?[fFdD]?)\\b',
          name: 'constant.numeric.float.vespa'
        },
        {
          match: '(?<![a-zA-Z_0-9])(-?(?:0[xX][0-9a-fA-F]+|\\d+)[lL]?)\\b',
          name: 'constant.numeric.integer.vespa'
        }
      ]
    },
    'primitive-type': {
      match:
        '\\b(int|byte|bool|string|double|float|long|position|tag|predicate)\\b',
      name: 'support.type.vespa'
    },
    punctuation: {
      patterns: [
        {match: '\\{', name: 'punctuation.section.block.begin.vespa'},
        {match: '\\}', name: 'punctuation.section.block.end.vespa'},
        {match: ':', name: 'punctuation.separator.colon.vespa'},
        {match: ',', name: 'punctuation.separator.comma.vespa'},
        {match: '\\.', name: 'punctuation.separator.dot.vespa'}
      ]
    },
    'rank-properties-block': {
      begin: '(?<![a-zA-Z0-9_-])(rank\\-properties)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.rank-properties.vespa',
      patterns: [
        {include: '#comment'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#numeric-literal'},
        {include: '#primitive-type'},
        {include: '#ranking-expression'}
      ]
    },
    'ranking-expression': {
      patterns: [
        {include: '#comment'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#numeric-literal'},
        {include: '#tensor-type'},
        {include: '#primitive-type'},
        {include: '#variable-reference'},
        {
          match:
            '\\b(euclidean_distance|cosine_similarity|map_subspaces|l1_normalize|l2_normalize|unpack_bits|cell_cast|xw_plus_b|default|softmax|argmax|argmin|concat|expand|matmul|median|random|reduce|rename|switch|tensor|count|false|merge|range|case|diag|join|prod|true|avg|map(?!\\s*<)|max|min|sum|if|in)\\b',
          name: 'keyword.control.ranking.vespa'
        },
        {
          match:
            '\\b(filter_subspaces|cell_order|hamming|sigmoid|square|atan2|floor|isNan|ldexp|log10|round|acos|asin|atan|ceil|cosh|fabs|fmod|relu|sign|sinh|sqrt|tanh|abs|bit|cos|elu|erf|exp|log|pow|sin|tan|top|f)\\b',
          name: 'entity.name.function.ranking.vespa'
        },
        {
          match:
            '\\b(tensorFromWeightedSet|nativeAttributeMatch|customTokenInputIds|elementCompleteness|randomNormalStable|tokenAttentionMask|elementSimilarity|rankingExpression|tensorFromStructs|nativeDotProduct|nativeFieldMatch|tensorFromLabels|nativeProximity|attributeMatch|distanceToPath|fieldTermMatch|firstPhaseRank|globalSequence|queryTermCount|relevanceScore|textSimilarity|tokenInputIds|itemRawScore|randomNormal|termDistance|tokenTypeIds|elementwise|fieldLength|secondPhase|dotProduct|fieldMatch|firstPhase|matchCount|nativeRank|subqueries|attribute|closeness|freshness|onnxModel|constant|distance|lightgbm|rawScore|closest|foreach|matches|xgboost|random|match|query|bm25|file|onnx|term|age|now)\\s*(?=\\()',
          name: 'entity.name.function.rank-feature.vespa'
        },
        {
          match:
            '\\b(reciprocal_rank_fusion|normalize_linear|reciprocal_rank)\\s*(?=\\()',
          name: 'entity.name.function.rank-feature.vespa'
        },
        {
          match: '[+\\-*/%^.]|>=|<=|!=|==|~=|&&|\\|\\||[<>!]',
          name: 'keyword.operator.ranking.vespa'
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.parens.begin.vespa'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.parens.end.vespa'}},
          patterns: [{include: '#ranking-expression'}]
        },
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.block.begin.vespa'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.block.end.vespa'}},
          patterns: [{include: '#ranking-expression'}]
        },
        {match: '\\b[a-zA-Z_]\\w*\\b', name: 'support.variable.vespa'},
        {include: '#punctuation'}
      ]
    },
    'schema-enum-members': {
      patterns: [
        {
          match: '\\b(sequential|parallel)\\b',
          name: 'variable.other.enummember.vespa'
        }
      ]
    },
    'schema-functions': {
      patterns: [{match: '\\b(query)\\b', name: 'entity.name.function.vespa'}]
    },
    'schema-keywords': {
      patterns: [
        {
          match:
            '(?<![a-zA-Z0-9_-])(target\\-hits\\-max\\-adjustment\\-factor|neighbors\\-to\\-explore\\-at\\-insert|pre\\-post\\-filter\\-tipping\\-point|dense\\-posting\\-list\\-threshold|ignore\\-default\\-rank\\-features|filter\\-first\\-exploration|raw\\-as\\-base64\\-in\\-summary|multi\\-threaded\\-indexing|enable\\-only\\-bit\\-vector|filter\\-first\\-threshold|num\\-threads\\-per\\-search|approximate\\-threshold|create\\-if\\-nonexistent|matched\\-elements\\-only|num\\-search\\-partitions|post\\-filter\\-threshold|rank\\-score\\-drop\\-limit|total\\-keep\\-rank\\-count|max\\-filter\\-coverage|min\\-hits\\-per\\-thread|enable\\-bit\\-vectors|max\\-links\\-per\\-node|select\\-elements\\-by|total\\-rerank\\-count|exploration\\-slack|document\\-summary|evaluation\\-point|exact\\-terminator|filter\\-threshold|max\\-token\\-length|prefetch\\-tensors|summary\\-features|cutoff\\-strategy|distance\\-metric|interop\\-threads|intraop\\-threads|keep\\-rank\\-count|max\\-occurrences|on\\-second\\-phase|rank\\-properties|execution\\-mode|match\\-features|on\\-first\\-phase|remove\\-if\\-zero|stopword\\-limit|termwise\\-limit|total\\-max\\-hits|adjust\\-target|cutoff\\-factor|query\\-command|rank\\-features|global\\-phase|rank\\-profile|rerank\\-count|second\\-phase|struct\\-field|element\\-gap|enable\\-bm25|fast\\-access|fast\\-search|first\\-phase|lower\\-bound|match\\-phase|upper\\-bound|gpu\\-device|max\\-length|min\\-groups|on\\-summary|onnx\\-model|summary\\-to|fast\\-rank|gram\\-size|rank\\-type|use\\-model|max\\-hits|on\\-match)(?![a-zA-Z0-9_-])',
          name: 'keyword.control.vespa'
        },
        {
          match:
            '\\b(significance|normalizing|weightedset(?!\\s*<)|annotation|contextual|descending|dictionary|expression|properties|ascending|attribute|constants|diversity|constant|document(?!-)|fieldset|function|indexing|inherits|override|stemming|strength|bolding|mutable|sorting|summary(?!-)|weakand|fields|import|inline|inputs|locale|mutate|output|schema|search|source|strict|struct(?!-)|weight|alias|arity|field|index|input|macro|match(?!-)|order|paged|title|file|hnsw|rank(?!-)|type|uri|url|as|id)\\b',
          name: 'keyword.control.vespa'
        }
      ]
    },
    'string-double': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.vespa'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.vespa'}},
      name: 'string.quoted.double.vespa',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.vespa'}]
    },
    'string-single': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.vespa'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.vespa'}},
      name: 'string.quoted.single.vespa',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.vespa'}]
    },
    'summary-block': {
      begin:
        '\\b(summary)\\s+(?:([a-zA-Z_]\\w*)\\s+(?:(inherits)\\s+([a-zA-Z_]\\w*)\\s*)?)?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.declaration.vespa'},
        3: {name: 'keyword.control.vespa'},
        4: {name: 'entity.other.inherited-class.vespa'},
        5: {name: 'punctuation.section.block.begin.vespa'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.block.end.vespa'}},
      name: 'meta.block.summary.vespa',
      patterns: [
        {include: '#comment'},
        {include: '#string-double'},
        {include: '#string-single'},
        {include: '#numeric-literal'},
        {include: '#boolean-constants'},
        {include: '#feature-list-block'},
        {include: '#feature-list-inline'},
        {include: '#enum-value-inline'},
        {
          match:
            '\\b(token|word|exact|text|gram|prefix|substring|suffix|cased|uncased|literal|identity|tags|source|bolding|full|static|dynamic|tokens|matched-elements-only|angular|dotproduct|euclidean|prenormalized-angular|hamming|geodegrees|best|shortest|multiple|none|primary|secondary|tertiary|quaternary|identical|lowercase|raw|ascending|descending|always|on-demand|never|normal|contextual)\\b',
          name: 'variable.other.enummember.vespa'
        },
        {include: '#schema-keywords'},
        {include: '#punctuation'}
      ]
    },
    'tensor-type': {
      begin: '\\b(tensor)\\s*(<)',
      beginCaptures: {
        1: {name: 'keyword.control.vespa'},
        2: {name: 'punctuation.definition.typeparameters.begin.vespa'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.definition.typeparameters.end.vespa'}
      },
      patterns: [
        {
          match: '\\b(float|double|bfloat16|int8)\\b',
          name: 'storage.type.tensor.vespa'
        },
        {match: '>', name: 'punctuation.definition.typeparameters.vespa'},
        {match: '\\(', name: 'punctuation.definition.typeparameters.vespa'},
        {
          captures: {1: {name: 'constant.numeric.vespa'}},
          match: '\\[(\\d+)\\]'
        },
        {match: '\\{\\}', name: 'punctuation.definition.dimension.vespa'},
        {
          match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\b',
          name: 'support.variable.vespa'
        },
        {match: ',', name: 'punctuation.separator.vespa'}
      ]
    },
    'user-type': {
      captures: {1: {name: 'entity.name.type.vespa'}},
      match: '(?<=\\btype\\s)(\\s*[a-zA-Z_]\\w*)'
    },
    'variable-reference': {
      captures: {
        1: {name: 'punctuation.definition.variable.vespa'},
        2: {name: 'variable.language.vespa'}
      },
      match: '(\\$)([a-zA-Z_][a-zA-Z0-9_]*)',
      name: 'variable.language.vespa'
    }
  },
  scopeName: 'source.vespaSchema'
}

export default grammar
