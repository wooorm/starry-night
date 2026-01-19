// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/vscode-tmdl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tmdl'],
  names: ['tmdl', 'tabular-model-definition-language'],
  patterns: [
    {include: '#top-level-expressions'},
    {include: '#any-level-expressions'},
    {include: '#child-level-expressions'},
    {include: '#expression-properties'},
    {include: '#formatstring-expression'},
    {include: '#descriptions'},
    {include: '#boolean-properties'},
    {include: '#all-properties'},
    {include: '#metadata-objects'}
  ],
  repository: {
    'all-properties': {
      captures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'variable.property.tmdl'},
        3: {name: 'keyword.operator.colon.tmdl'},
        4: {patterns: [{include: '#literals'}]}
      },
      match: '^(\\s*)(\\w+)(:)([\\s\\S]*)$'
    },
    'any-level-expressions': {
      begin: '^(?i:(\\s*)(Annotation|ExtendedProperty)\\s*)',
      beginCaptures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'entity.name.tag.any-level-type.tmdl'}
      },
      end: '^(?=\\S)|(?!\\G)',
      patterns: [{include: '#expression-object'}]
    },
    'base-expression': {
      match: '[\\s\\S]+',
      name: 'entity.name.function.expression.tmdl'
    },
    'blank-line': {
      begin: '^\\s*$',
      end: '^(?=\\S)|(?!\\G)',
      patterns: [{include: '#blank-line'}, {include: '#indented-expression'}]
    },
    'boolean-literal': {
      patterns: [
        {match: '\\b[tT]rue\\b', name: 'constant.language.boolean.true.tmdl'},
        {match: '\\b[fF]alse\\b', name: 'constant.language.boolean.false.tmdl'}
      ]
    },
    'boolean-properties': {
      captures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'variable.property.tmdl'}
      },
      match:
        '^(\\s*)(?i:(ForceUniqueNames|DiscourageImplicitMeasures|DiscourageReportMeasures|DiscourageCompositeModels|DisableSystemDefaultExpression|IsHidden|ShowAsVariationsOnly|IsPrivate|ExcludeFromModelRefresh|SystemManaged|ExcludeFromAutomaticAggregations|IsDataTypeInferred|IsHidden|IsUnique|IsKey|IsNullable|IsDefaultLabel|IsDefaultImage|IsAvailableInMDX|KeepUniqueRows|IsNameInferred|IsDefault|RetainDataTillForceCalculate|IsHidden|IsSimpleMeasure|IsHidden|IsActive|RelyOnReferentialIntegrity|IncludeAll|LegacyRedirects|ReturnErrorValuesAsNull))(?!\\s*:)\\s*$'
    },
    'char-character-escape': {
      match: '\\\\([\'"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|u[0-9a-fA-F]{4})',
      name: 'constant.character.escape.tmdl'
    },
    'char-literal': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.char.begin.tmdl'}},
      end: "(\\')|((?:[^\\\\\\n])$)",
      endCaptures: {
        1: {name: 'punctuation.definition.char.end.tmdl'},
        2: {name: 'invalid.illegal.newline.tmdl'}
      },
      name: 'string.quoted.single.tmdl',
      patterns: [{include: '#char-character-escape'}]
    },
    'child-level-expressions': {
      begin:
        '^(?i:(\\s+)(Measure|CalculationItem|TablePermission|Partition)\\s*)',
      beginCaptures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'entity.name.tag.child-level-type.tmdl'}
      },
      end: '^(?=\\S)|(?!\\G)',
      patterns: [{include: '#expression-object'}]
    },
    'delimited-expression': {
      begin: '\\s*`{3}\\s*$',
      beginCaptures: {
        0: {name: 'punctuation.definition.expression.begin.tmdl'}
      },
      end: '\\s*`{3}',
      endCaptures: {0: {name: 'punctuation.definition.expression.end.tmdl'}},
      patterns: [{include: '#base-expression'}]
    },
    descriptions: {
      captures: {
        1: {name: 'whitespace.comment.leading.tmdl'},
        2: {name: 'comment.leading.tripple-slash.tmdl'},
        3: {name: 'comment.line.tmdl'}
      },
      match: '^(\\s*)(/{3})(.*)$'
    },
    'expression-object': {
      begin: "(?:\\b(\\S+)\\b\\s*(=))?(?:(')([\\s\\S]+)(')\\s*(=))?",
      beginCaptures: {
        1: {name: 'keyword.control.unquoted.tmdl'},
        2: {name: 'keyword.operator.assignment.tmdl'},
        3: {name: 'punctuation.definition.char.begin.tmdl'},
        4: {name: 'keyword.control.quoted.single.tmdl'},
        5: {name: 'punctuation.definition.char.end.tmdl'},
        6: {name: 'keyword.operator.assignment.tmdl'}
      },
      end: '^(?=\\S)|(?!\\G)',
      patterns: [
        {include: '#delimited-expression'},
        {include: '#non-delimited-expression'},
        {include: '#base-expression'}
      ]
    },
    'expression-properties': {
      begin:
        '^(?i:(\\s+)(Expression|Content|Source\\b|LinguisticMetadata|ChangedProperty)\\s*(=))',
      beginCaptures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'variable.property.expression.tmdl'},
        3: {name: 'keyword.operator.assignment.tmdl'}
      },
      end: '^(?=\\S)|(?!\\G)',
      patterns: [
        {include: '#delimited-expression'},
        {include: '#non-delimited-expression'},
        {include: '#base-expression'}
      ]
    },
    'formatstring-expression': {
      begin: '^(?i:(\\s+)(FormatString)\\s*(:))',
      beginCaptures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'variable.property.expression.tmdl'},
        3: {name: 'keyword.operator.colon.tmdl'}
      },
      end: '^(?=\\S)|(?!\\G)',
      patterns: [
        {include: '#delimited-expression'},
        {include: '#non-delimited-expression'},
        {include: '#base-expression'}
      ]
    },
    'guid-literal': {
      match: '[{]?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?',
      name: 'entity.name.type.guid.tmdl'
    },
    'indented-expression': {
      begin: '^(\\s*)(?!\\s)',
      end: '^(?!\\1|\\s*$)',
      patterns: [{include: '#base-expression'}]
    },
    literals: {
      patterns: [
        {include: '#boolean-literal'},
        {include: '#guid-literal'},
        {include: '#null-literal'},
        {include: '#numeric-literal'},
        {include: '#string-literal'},
        {include: '#char-literal'},
        {include: '#type-builtin'},
        {include: '#type-name'}
      ]
    },
    'metadata-objects': {
      captures: {
        1: {name: 'whitespace.leading.tmdl'},
        2: {name: 'entity.name.tag.object-type.tmdl'},
        3: {name: 'punctuation.definition.char.begin.tmdl'},
        4: {name: 'keyword.control.quoted.single.tmdl'},
        5: {name: 'punctuation.definition.char.end.tmdl'},
        6: {name: 'keyword.control.unquoted.tmdl'}
      },
      match: "^(\\s*)\\b(\\w+)\\b\\s+(?:(')(.+)('))?(?:\\b\\s*(\\S+)\\b)?"
    },
    'non-delimited-expression': {
      begin: '\\s*$',
      end: '^(?=\\S)|(?!\\G)',
      patterns: [{include: '#blank-line'}, {include: '#indented-expression'}]
    },
    'null-literal': {
      match: '(?<!\\.)\\b[nN]ull\\b',
      name: 'constant.language.null.tmdl'
    },
    'numeric-literal': {
      captures: {
        0: {
          patterns: [
            {
              begin: '(?=.)',
              end: '$',
              patterns: [
                {
                  captures: {
                    10: {name: 'keyword.operator.arithmetic.tmdl'},
                    11: {
                      name: 'constant.numeric.decimal.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    12: {name: 'constant.numeric.other.suffix.tmdl'},
                    2: {
                      name: 'constant.numeric.decimal.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    3: {
                      name: 'constant.numeric.other.separator.thousands.tmdl'
                    },
                    4: {name: 'constant.numeric.other.separator.decimals.tmdl'},
                    5: {
                      name: 'constant.numeric.decimal.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    6: {
                      name: 'constant.numeric.other.separator.thousands.tmdl'
                    },
                    8: {name: 'constant.numeric.other.exponent.tmdl'},
                    9: {name: 'keyword.operator.arithmetic.tmdl'}
                  },
                  match:
                    '(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?([fFdDmM](?!\\w))?$'
                },
                {
                  captures: {
                    1: {name: 'constant.numeric.other.preffix.binary.tmdl'},
                    2: {
                      name: 'constant.numeric.binary.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    3: {
                      name: 'constant.numeric.other.separator.thousands.tmdl'
                    },
                    4: {name: 'constant.numeric.other.suffix.tmdl'}
                  },
                  match:
                    '(\\G0[bB])([01_](?:[01_]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  captures: {
                    1: {name: 'constant.numeric.other.preffix.hex.tmdl'},
                    2: {
                      name: 'constant.numeric.hex.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    3: {
                      name: 'constant.numeric.other.separator.thousands.tmdl'
                    },
                    4: {name: 'constant.numeric.other.suffix.tmdl'}
                  },
                  match:
                    '(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  captures: {
                    2: {
                      name: 'constant.numeric.decimal.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    3: {
                      name: 'constant.numeric.other.separator.thousands.tmdl'
                    },
                    5: {name: 'constant.numeric.other.exponent.tmdl'},
                    6: {name: 'keyword.operator.arithmetic.tmdl'},
                    7: {name: 'keyword.operator.arithmetic.tmdl'},
                    8: {
                      name: 'constant.numeric.decimal.tmdl',
                      patterns: [
                        {
                          match: '(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])',
                          name: 'constant.numeric.other.separator.thousands.tmdl'
                        }
                      ]
                    },
                    9: {name: 'constant.numeric.other.suffix.tmdl'}
                  },
                  match:
                    '(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$'
                },
                {
                  match: '(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])+',
                  name: 'invalid.illegal.constant.numeric.tmdl'
                }
              ]
            }
          ]
        }
      },
      match: '(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])*'
    },
    'string-character-escape': {
      match:
        '\\\\([\'"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4})',
      name: 'constant.character.escape.tmdl'
    },
    'string-literal': {
      begin: '(?<!@)"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.tmdl'}},
      end: '(")|((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.tmdl'},
        2: {name: 'invalid.illegal.newline.tmdl'}
      },
      name: 'string.quoted.double.tmdl',
      patterns: [{include: '#string-character-escape'}]
    },
    'top-level-expressions': {
      begin: '^(?i:(Expression|DataSource)\\s*)',
      beginCaptures: {1: {name: 'storage.type.tmdl'}},
      end: '^(?=\\S)|(?!\\G)',
      patterns: [{include: '#expression-object'}]
    },
    'type-builtin': {
      captures: {1: {name: 'keyword.type.tmdl'}},
      match:
        '\\b(?i:(bool|byte|char|decimal|double|float|int|long|object|sbyte|short|string|uint|ulong|ushort|void|dynamic))\\b'
    },
    'type-name': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.alias.tmdl'},
            2: {name: 'punctuation.separator.coloncolon.tmdl'}
          },
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)'
        },
        {
          captures: {
            1: {name: 'entity.name.type.tmdl'},
            2: {name: 'punctuation.accessor.tmdl'}
          },
          match: '(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.tmdl'},
            2: {name: 'entity.name.type.tmdl'}
          },
          match: '(\\.)\\s*(@?[_[:alpha:]][_[:alnum:]]*)'
        },
        {match: '@?[_[:alpha:]][_[:alnum:]]*', name: 'entity.name.type.tmdl'}
      ]
    }
  },
  scopeName: 'source.tmdl'
}

export default grammar
