// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/peta/turtle.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ttl'],
  names: ['turtle'],
  patterns: [{include: '#turtleDoc'}],
  repository: {
    ANON: {name: 'meta.spec.ANON.turtle'},
    BLANK_NODE_LABEL: {
      captures: {
        1: {name: 'keyword.other.BLANK_NODE_LABEL.turtle'},
        2: {name: 'variable.other.BLANK_NODE_LABEL.turtle'}
      },
      name: 'meta.spec.BLANK_NODE_LABEL.turtle'
    },
    BlankNode: {
      name: 'meta.spec.BlankNode.turtle',
      patterns: [{include: '#BLANK_NODE_LABEL'}, {include: '#ANON'}]
    },
    IRIREF: {
      captures: {
        1: {name: 'punctuation.definition.entity.begin.turtle'},
        2: {name: 'punctuation.definition.entity.end.turtle'}
      },
      match:
        '(?x) (\\<) (?:[^\\x00-\\x20\\<\\>\\\\\\"\\{\\}\\|\\^`] | (?:\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8}))* (\\>)',
      name: 'entity.name.type.IRIREF.turtle'
    },
    PNAME_LN: {
      captures: {
        PNAME_NS: {name: 'variable.other.PNAME_NS.turtle'},
        PN_LOCAL: {name: 'support.variable.PN_LOCAL.turtle'}
      },
      name: 'meta.spec.PNAME_LN.turtle'
    },
    PNAME_NS: {name: 'variable.other.PNAME_NS.turtle'},
    PN_LOCAL: {name: 'support.variable.PN_LOCAL.turtle'},
    PrefixedName: {
      name: 'meta.spec.PrefixedName.turtle',
      patterns: [{include: '#PNAME_LN'}, {include: '#PNAME_NS'}]
    },
    blankNodePropertyList: {
      begin: '\\b(\\[)\\b',
      captures: {
        1: {name: 'punctuation.terminator.blankNodePropertyList.turtle'}
      },
      end: '\\b(\\])(?=\\b|\\s|[.;,])',
      name: 'meta.spec.blankNodePropertyList.turtle',
      patterns: [
        {
          match: '((?<=\\s)[.;,](?=\\b))',
          name: 'punctuation.terminator.stmt.turtle'
        },
        {include: '#literal'},
        {include: '#blankNodePropertyList'},
        {include: '#iri'},
        {include: '#BlankNode'},
        {include: '#collection'},
        {match: '(?<=[ ])(a)(?=[ ])', name: 'keyword.other.typeOf.turtle'}
      ]
    },
    collection: {
      begin: '(\\b\\(\\b)',
      captures: {1: {name: 'punctuation.terminator.collection.turtle'}},
      end: '(\\b\\)\\b)',
      name: 'meta.spec.collection.turtle',
      patterns: [
        {include: '#literal'},
        {include: '#iri'},
        {include: '#BlankNode'},
        {include: '#collection'},
        {match: '(?<=[ ])(a)(?=[ ])', name: 'keyword.other.typeOf.turtle'},
        {include: '#blankNodePropertyList'}
      ]
    },
    directive: {
      begin: '(?i)(^(?=@prefix|@base|PREFIX|BASE))',
      end: '($)',
      name: 'meta.spec.directive.turtle',
      patterns: [
        {
          begin: '^(@prefix)(?=\\s)',
          beginCaptures: {1: {name: 'keyword.other.directive.prefix.turtle'}},
          end: '(\\.?)$',
          endCaptures: {1: {name: 'punctuation.terminator.directive.turtle'}},
          name: 'meta.spec.prefixID.turtle',
          patterns: [{include: '#IRIREF'}, {include: '#PNAME_NS'}]
        },
        {
          begin: '^(@base)',
          beginCaptures: {1: {name: 'keyword.other.directive.base.turtle'}},
          end: '(\\.?)$',
          endCaptures: {1: {name: 'punctuation.terminator.directive.turtle'}},
          name: 'meta.spec.base.turtle',
          patterns: [{include: '#IRIREF'}]
        },
        {
          begin: '^(?i)(PREFIX)(?=\\b)',
          beginCaptures: {
            1: {name: 'keyword.other.directive.sparqlPrefix.turtle'}
          },
          end: '$',
          name: 'meta.spec.sparqlPrefix.turtle',
          patterns: [{include: '#IRIREF'}, {include: '#PNAME_NS'}]
        },
        {
          begin: '^(?i)(BASE)(?=\\b)',
          beginCaptures: {
            1: {name: 'keyword.other.directive.sparqlBase.turtle'}
          },
          end: '$',
          name: 'meta.spec.sparqlBase.turtle',
          patterns: [{include: '#IRIREF'}]
        }
      ]
    },
    iri: {
      name: 'meta.spec.iri.turtle',
      patterns: [{include: '#IRIREF'}, {include: '#PrefixedName'}]
    },
    literal: {
      name: 'meta.spec.literal.turtle',
      patterns: [
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=\\s)[+-]?\t\t\t\t\t\t\n\t\t\t\t\t\t( (?: \\d+?\\.?\\d*[eE][+-]?\\d+) | \\d*\\.\\d+ | \\d+)\n\t\t\t\t\t\t(?=[ ]*[,.;]?)\n\t\t\t\t\t',
          name: 'constant.numeric.turtle'
        },
        {
          match: '(?<=\\s)(true|false)(?=[ ]*[,.;]?)',
          name: 'constant.language.boolean.turtle'
        },
        {
          name: 'meta.spec.RDFLiteral.turtle',
          patterns: [
            {include: '#literal_triple'},
            {include: '#literal_double'},
            {include: '#literal_single'}
          ]
        }
      ]
    },
    literal_double: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.turtle'},
        2: {name: 'punctuation.definition.string.end.turtle'},
        dt: {name: 'storage.type.datatype.turtle'},
        lang: {name: 'constant.language.language_tag.turtle'}
      },
      match:
        '(?x)\n\t\t\t\t(")[^"\\\\]*(?:\\\\.[^"\\\\]*)*(")\n\t\t\t\t(?<lang>@(?:[a-z]{2}(?:-[a-z0-9]{2})*)?)?\n\t\t\t\t(?<dt>\\^\\^\\w*:\\w*|\\<[^\\>]+\\>)?\n\t\t\t',
      name: 'string.quoted.double.turtle'
    },
    literal_single: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.turtle'},
        2: {name: 'punctuation.definition.string.end.turtle'},
        dt: {name: 'storage.type.datatype.turtle'},
        lang: {name: 'constant.language.language_tag.turtle'}
      },
      match:
        "(?x)\n\t\t\t\t(')[^'\\\\]*(?:\\.[^'\\\\]*)*(')\n\t\t\t\t(?<lang>@(?:[a-z]{2}(?:-[a-z0-9]{2})*)?)?\n\t\t\t\t(?<dt>\\^\\^\\w*:\\w*|\\<[^\\>]+\\>)?\n\t\t\t",
      name: 'string.quoted.single.turtle'
    },
    literal_triple: {
      begin: '([\'"]{3})',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.turtle'}},
      end: '(?x)\n\t\t\t\t(\\1)\n\t\t\t\t(?<lang>@(?:[a-z]{2}(?:-[a-z0-9]{2})*)?)?\n\t\t\t\t(?<dt>\\^\\^\\w*:\\w*|\\<[^\\>]+\\>)?\n\t\t\t\t(?=[ ]*[.;,]?)\n\t\t\t',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.turtle'},
        dt: {name: 'storage.type.datatype.turtle'},
        lang: {name: 'constant.language.language_tag.turtle'}
      },
      name: 'string.quoted.triple.turtle'
    },
    sparqlClausedKeywords: {
      begin:
        '(?x)(\n\t\t\t\t(?# Special case because FILTER can have clauses what makes the lexer dizzy)\n\t\t\t\tFILTER\n\t\t\t)\\s*(\\((?=\\s*))',
      beginCaptures: {
        1: {name: 'keyword.control.sparql.turtle'},
        2: {name: 'punctuation.terminator.sparqlKeyword.turtle'}
      },
      end: '\\s*(\\))',
      endCaptures: {1: {name: 'punctuation.terminator.sparqlKeyword.turtle'}},
      patterns: [
        {include: '#sparqlVars'},
        {include: '#sparqlFilterFns'},
        {include: '#sparqlLangConsts'}
      ]
    },
    sparqlFilterFns: {
      begin:
        '(?x)(\n\t\t\t\t(?# Special case because FILTER can have clauses what makes the lexer dizzy)\n\t\t\t\tFILTER|\n\t\t\t\t(?# Builtin callables )\n\t\t\t\tSTR|LANG|LANGMATCHES|DATATYPE|BOUND|IRI|URI|BNODE|RAND|ABS|CEIL|FLOOR|ROUND|CONCAT|STRLEN|UCASE|LCASE|ENCODE_FOR_URI|CONTAINS|STRSTARTS|STRENDS|STRBEFORE|STRAFTER|YEAR|MONTH|DAY|HOURS|MINUTES|SECONDS|TIMEZONE|TZ|NOW|UUID|STRUUID|MD5|SHA1|SHA256|SHA384|SHA512|COALESCE|IF|STRLANG|STRDT|sameTerm|isIRI|isURI|isBLANK|isLITERAL|isNUMERIC|COUNT|SUM|MIN|MAX|AVG|SAMPLE|GROUP_CONCAT|\n\t\t\t\tBOUND|COALESCE|NOT EXISTS|EXISTS|REGEX|SUBSTR|REPLACE\n\t\t\t)\\s*(\\((?=\\s*))',
      beginCaptures: {
        1: {name: 'support.function.sparql.turtle'},
        2: {name: 'punctuation.terminator.sparqlFunc.turtle'}
      },
      end: '\\s*(\\))',
      endCaptures: {1: {name: 'punctuation.terminator.sparqlFunc.turtle'}},
      patterns: [
        {include: '#sparqlVars'},
        {include: '#sparqlFilterFns'},
        {include: '#sparqlLangConsts'}
      ]
    },
    sparqlKeywords: {
      match:
        '(?x)(\n\t\t\t\t\t(?# SPARQL )\n\t\t\t\t\tSELECT|ASK|CONSTRUCT|DESCRIBE|FROM|NAMED|WHERE|GRAPH|AS|\n\t\t\t\t\tUNION|FILTER|HAVING|VALUES|\n\t\t\t\t\tOPTIONAL|SERVICE|\t\t\t \n\t\t\t\t\t(?# SPARUL )\n\t\t\t\t\tSILENT|DATA|\t\t\t\t\t\n\t\t\t\t\tADD|MOVE|COPY|\n\t\t\t\t\tINSERT|DELETE|\n\t\t\t\t\tLOAD|INTO|\n\t\t\t\t\tGRAPH|ALL|DEFAULT|\t\t\t\t\t\n\t\t\t\t\tCLEAR|CREATE|DROP|\n\t\t\t\t\tWITH|USING|\n\t\t\t\t\t(?# Solution sequence modifiers )\n\t\t\t\t\tDISTINCT|REDUCED|\n\t\t\t\t\tORDER|ASC|DESC|OFFSET|LIMITED|REDUCED|\n\t\t\t\t\tGROUP|BY|LIMIT\t\t\t\t\t\n\t\t\t\t)',
      name: 'keyword.control.sparql.turtle'
    },
    sparqlLangConsts: {
      match: '(true|false)',
      name: 'constant.language.sparql.turtle'
    },
    sparqlVars: {
      match: '(\\?\\w+|\\*)',
      name: 'constant.variable.sparql.turtle'
    },
    triples: {
      begin: '(?i)^(?!@|\\#|PREFIX|BASE)',
      beginCaptures: {1: {name: 'meta.spec.triples.turtle'}},
      end: '([.;,]?)$',
      endCaptures: {1: {name: 'punctuation.terminator.triple.turtle'}},
      name: 'meta.spec.triples.turtle',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.turtle'}},
          match: '(#.+$)',
          name: 'comment.line.number-sign.turtle'
        },
        {match: '[.;,](?=\\s|\\b)', name: 'punctuation.terminator.stmt.turtle'},
        {include: '#literal'},
        {include: '#sparqlVars'},
        {include: '#sparqlClausedKeywords'},
        {include: '#sparqlKeywords'},
        {include: '#sparqlFilterFns'},
        {include: '#sparqlLangConsts'},
        {include: '#blankNodePropertyList'},
        {include: '#iri'},
        {include: '#BlankNode'},
        {include: '#collection'},
        {match: '\\b(a)(?=[ ])', name: 'keyword.other.typeOf.turtle'}
      ]
    },
    turtleDoc: {
      begin: '^',
      end: '\\z',
      name: 'meta.spec.turtleDoc.turtle',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.turtle'}},
          match: '^(#).+$',
          name: 'comment.line.number-sign.turtle'
        },
        {include: '#directive'},
        {include: '#sparqlClausedKeywords'},
        {include: '#sparqlKeywords'},
        {include: '#sparqlFilterFns'},
        {include: '#sparqlLangConsts'},
        {include: '#sparqlVars'},
        {include: '#triples'}
      ]
    }
  },
  scopeName: 'source.turtle'
}

export default grammar
