// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wcandillon/language-jsoniq>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  extensionsWithDot: ['.jq'],
  names: ['jsoniq'],
  patterns: [{include: '#main'}],
  repository: {
    AbbrevForwardStep: {
      captures: {1: {name: 'punctuation.definition.type.jsoniq'}},
      match:
        '(@)(?:\\*\\s|(?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-._a-zA-Z0-9]*)',
      name: 'support.type.jsoniq'
    },
    Annotation: {
      captures: {
        1: {name: 'punctuation.definition.annotation.jsoniq'},
        2: {name: 'entity.name.annotation.jsoniq'}
      },
      match:
        '(%+)((?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-._a-zA-Z0-9]*)',
      name: 'meta.declaration.annotation.jsoniq'
    },
    CDATA: {
      begin: '<!\\[CDATA\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.jsoniq'}},
      end: '\\]\\]>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.jsoniq'}},
      name: 'string.unquoted.cdata.jsoniq'
    },
    CharRef: {
      captures: {
        1: {name: 'punctuation.definition.entity.begin.jsoniq'},
        2: {name: 'entity.name.entity.other.jsoniq'},
        3: {name: 'punctuation.definition.entity.end.jsoniq'}
      },
      match: '(&#)([0-9]+|x[0-9A-Fa-f]+)(;)',
      name: 'constant.character.entity.jsoniq'
    },
    CloseTag: {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.jsoniq'},
        2: {name: 'entity.name.tag.localname.jsoniq'},
        3: {name: 'punctuation.definition.tag.end.jsoniq'}
      },
      match:
        '(<\\/)((?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-_a-zA-Z0-9]*)\\s*(>)',
      name: 'meta.tag.closetag.jsoniq'
    },
    Comments: {
      patterns: [
        {
          begin: '\\(:~',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.jsoniq'}
          },
          end: ':\\)',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.jsoniq'}},
          name: 'comment.block.doc.jsoniq',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.jsoniq'}},
              match: '(@)[a-zA-Z0-9_\\.\\-]+',
              name: 'constant.language.jsoniq'
            }
          ]
        },
        {
          begin: '<\\?',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.jsoniq'}
          },
          end: '\\?>',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.jsoniq'}},
          name: 'comment.block.jsoniq'
        },
        {
          begin: '\\(:',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.jsoniq'}
          },
          end: ':\\)',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.jsoniq'}},
          name: 'comment.block.jsoniq'
        }
      ]
    },
    EQName: {
      match:
        '(?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-_a-zA-Z0-9]*(?=\\s*\\()',
      name: 'support.function.eqname.jsoniq'
    },
    EmbeddedXQuery: {
      begin: '^(?=xquery\\s+version\\s+)',
      contentName: 'source.embedded.xq',
      end: '\\z',
      patterns: [{include: 'source.xq'}]
    },
    EnclosedExpr: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.jsoniq'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.jsoniq'}},
      name: 'meta.enclosed.expression.jsoniq',
      patterns: [{include: '#main'}]
    },
    Keywords: {
      patterns: [
        {
          match: '\\b(NaN|null)\\b',
          name: 'constant.language.${1:/downcase}.jsoniq'
        },
        {
          match: '\\b(true|false)\\b',
          name: 'constant.language.boolean.logical.$1.jsoniq'
        },
        {match: '\\b(function|let)\\b', name: 'storage.type.$1.jsoniq'},
        {
          match:
            '(?x) \\b\n( break\n| case\n| catch\n| continue\n| end\n| exit\n| for\n| from\n| if\n| import\n| in\n| loop\n| return\n| switch\n| then\n| try\n| when\n| where\n| while\n| with\n) \\b',
          name: 'keyword.control.flow.$1.jsoniq'
        },
        {
          match:
            '(?x) \\b\n( after\n| allowing\n| ancestor-or-self\n| ancestor\n| and\n| append\n| array\n| ascending\n| as\n| attribute\n| at\n| base-uri\n| before\n| boundary-space\n| by\n| castable\n| cast\n| child\n| collation\n| comment\n| constraint\n| construction\n| contains\n| context\n| copy-namespaces\n| copy\n| count\n| decimal-format\n| decimal-separator\n| declare\n| default\n| delete\n| descendant-or-self\n| descendant\n| descending\n| digit\n| div\n| document-node\n| document\n| element\n| else\n| empty-sequence\n| empty\n| encoding\n| eq\n| every\n| except\n| external\n| first\n| following-sibling\n| following\n| ft-option\n| ge\n| greatest\n| grouping-separator\n| group\n| gt\n| idiv\n| index\n| infinity\n| insert\n| instance\n| integrity\n| intersect\n| into\n| is\n| item\n| json-item\n| jsoniq\n| json\n| last\n| lax\n| least\n| le\n| lt\n| minus-sign\n| modify\n| module\n| mod\n| namespace-node\n| namespace\n| next\n| ne\n| nodes\n| node\n| not\n| object\n| of\n| only\n| option\n| ordered\n| ordering\n| order\n| or\n| paragraphs\n| parent\n| pattern-separator\n| per-mille\n| percent\n| preceding-sibling\n| preceding\n| previous\n| processing-instruction\n| rename\n| replace\n| returning\n| revalidation\n| satisfies\n| schema-attribute\n| schema-element\n| schema\n| score\n| select\n| self\n| sentences\n| sliding\n| some\n| stable\n| start\n| strict\n| text\n| times\n| to\n| treat\n| tumbling\n| typeswitch\n| type\n| union\n| unordered\n| updating\n| validate\n| value\n| variable\n| version\n| window\n| words\n| xquery\n| zero-digit\n) (?!:|-)\\b',
          name: 'keyword.operator.$1.jsoniq'
        }
      ]
    },
    Numbers: {
      patterns: [
        {
          match: '(?:\\.[0-9]+|\\b[0-9]+(?:\\.[0-9]*)?)[Ee][+#x002D]?[0-9]+\\b',
          name: 'constant.numeric.exponential.jsoniq'
        },
        {
          match: '(?:\\.[0-9]+|\\b[0-9]+\\.[0-9]*)\\b',
          name: 'constant.numeric.float.jsoniq'
        },
        {match: '\\b[0-9]+\\b', name: 'constant.numeric.integer.jsoniq'}
      ]
    },
    OpenTag: {
      begin:
        '(<)((?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-_a-zA-Z0-9]*)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.jsoniq'},
        2: {name: 'entity.name.tag.localname.jsoniq'}
      },
      end: '/?>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.jsoniq'}},
      name: 'meta.tag.opentag.jsoniq',
      patterns: [
        {
          match:
            '([-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?([-_a-zA-Z0-9][-_a-zA-Z0-9]*)',
          name: 'entity.other.attribute-name.jsoniq'
        },
        {match: '=', name: 'keyword.operator.assignment.jsoniq'},
        {
          begin: "'",
          end: "'(?!')",
          name: 'string.quoted.single.jsoniq',
          patterns: [
            {match: "''", name: 'constant.character.escape.quote.jsoniq'},
            {include: '#PredefinedEntityRef'},
            {include: '#CharRef'},
            {match: '({{|}})', name: 'constant.jsoniq'},
            {include: '#EnclosedExpr'}
          ]
        },
        {
          begin: '"',
          end: '"(?!")',
          name: 'string.quoted.double.jsoniq',
          patterns: [
            {match: '""', name: 'constant.character.escape.quote.jsoniq'},
            {include: '#PredefinedEntityRef'},
            {include: '#CharRef'},
            {match: '({{|}})', name: 'string.jsoniq'},
            {include: '#EnclosedExpr'}
          ]
        }
      ]
    },
    Pragma: {
      begin: '\\(#',
      beginCaptures: {0: {name: 'punctuation.definition.pragma.begin.jsoniq'}},
      contentName: 'constant.other.pragma.jsoniq',
      end: '#\\)',
      endCaptures: {0: {name: 'punctuation.definition.pragma.end.jsoniq'}},
      name: 'meta.pragma.jsoniq'
    },
    PredefinedEntityRef: {
      captures: {
        1: {name: 'punctuation.definition.entity.begin.jsoniq'},
        2: {name: 'entity.name.entity.other.jsoniq'},
        3: {name: 'punctuation.definition.entity.end.jsoniq'}
      },
      match: '(&)(lt|gt|amp|quot|apos)(;)',
      name: 'constant.language.entity.predefined.jsoniq'
    },
    String: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.jsoniq',
      patterns: [
        {
          match: '\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',
          name: 'constant.character.escape.jsoniq'
        },
        {
          match: '\\\\.',
          name: 'invalid.illegal.unrecognized-string-escape.jsoniq'
        }
      ]
    },
    Symbols: {
      patterns: [
        {match: ':=?', name: 'keyword.operator.assignment.definition.jsoniq'},
        {match: ',', name: 'punctuation.separator.delimiter.comma.jsoniq'},
        {match: '\\.', name: 'punctuation.separator.delimiter.dot.jsoniq'},
        {
          match: '\\[',
          name: 'punctuation.definition.bracket.square.begin.jsoniq'
        },
        {
          match: '\\]',
          name: 'punctuation.definition.bracket.square.end.jsoniq'
        },
        {
          match: '\\{',
          name: 'punctuation.definition.bracket.curly.begin.jsoniq'
        },
        {match: '\\}', name: 'punctuation.definition.bracket.curly.end.jsoniq'},
        {
          match: '\\(',
          name: 'punctuation.definition.bracket.round.begin.jsoniq'
        },
        {match: '\\)', name: 'punctuation.definition.bracket.round.end.jsoniq'}
      ]
    },
    Variable: {
      captures: {
        0: {name: 'variable.other.jsoniq'},
        1: {name: 'punctuation.definition.variable.jsoniq'}
      },
      match:
        '(\\$)(?:[-_a-zA-Z0-9][-._a-zA-Z0-9]*:)?[-_a-zA-Z0-9][-_a-zA-Z0-9]*',
      name: 'meta.definition.variable.name.jsoniq'
    },
    XMLComment: {
      begin: '<!--',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.jsoniq'}},
      end: '-->',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.jsoniq'}},
      name: 'comment.block.jsoniq'
    },
    main: {
      patterns: [
        {include: '#EmbeddedXQuery'},
        {include: '#Pragma'},
        {include: '#XMLComment'},
        {include: '#CDATA'},
        {include: '#PredefinedEntityRef'},
        {include: '#CharRef'},
        {include: '#Comments'},
        {include: '#String'},
        {include: '#Annotation'},
        {include: '#AbbrevForwardStep'},
        {include: '#Variable'},
        {include: '#Numbers'},
        {include: '#Keywords'},
        {include: '#EQName'},
        {include: '#Symbols'},
        {include: '#OpenTag'},
        {include: '#CloseTag'}
      ]
    }
  },
  scopeName: 'source.jsoniq'
}

export default grammar
