// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.4dm'],
  names: ['4d'],
  patterns: [
    {include: '#comments'},
    {include: '#for_loop'},
    {include: '#keywords'},
    {include: '#parameters'},
    {include: '#affectation_variable'},
    {include: '#long_int_variable'},
    {include: '#real_variable'},
    {include: '#text_variable'},
    {include: '#boolean_variable'},
    {include: '#picture_variable'},
    {include: '#pointer_variable'},
    {include: '#object_variable'},
    {include: '#variant_variable'},
    {include: '#collection_variable'},
    {include: '#strings'},
    {include: '#interprocess_variable'},
    {include: '#local_variables'},
    {include: '#operators'},
    {include: '#boolean_values'},
    {include: '#constant_4d'},
    {include: '#this-function'},
    {include: '#numbers'},
    {include: '#block'},
    {include: '#table_reference'},
    {include: '#function-call-innards'},
    {match: '\\n', name: 'punctuation.terminator.statement.4d'},
    {include: '#param_separator'},
    {
      begin: '([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])',
      beginCaptures: {
        1: {name: 'variable.object.4d'},
        2: {name: 'punctuation.definition.begin.bracket.square.4d'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.end.bracket.square.4d'}},
      name: 'meta.bracket.square.access.4d',
      patterns: [{include: '#function-call-innards'}]
    },
    {include: '#member_access'},
    {include: '#method_access'},
    {
      match: '^\\n*[\\t ]*(?i)(Class constructor)',
      name: 'entity.name.class.4d'
    },
    {
      match: '^\\n*[\\t ]*(?i)(Function)(\\s[a-z_0-9]+[a-z_0-9 ]*)',
      name: 'variable.language.function.4d'
    },
    {
      match: '^\\n*[\\t ]*(?i)(Class extends)(\\s[a-z_0-9]+[a-z_0-9 ]*)',
      name: 'entity.name.class.4d'
    },
    {
      match: '^\\n*[\\t ]*(?i)(Super(\\:C1705)?)',
      name: 'variable.language.super.4d'
    }
  ],
  repository: {
    affectation_variable: {
      begin: '^((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)(:=)',
      beginCaptures: {
        1: {name: 'variable.name.4d'},
        2: {name: 'keyword.operator.assignment.4d'}
      },
      end: '(\\n)',
      endCaptures: {1: {name: 'punctuation.section.end.affectaction.4d'}},
      name: 'meta.block.affectation.4d',
      patterns: [
        {include: '#this-function'},
        {include: '#function-call-innards'},
        {include: '#member_access'},
        {include: '#method_access'},
        {include: '#local_variables'},
        {include: '#numbers'},
        {include: '#strings'},
        {include: '#interprocess_variable'},
        {
          match: '(?i)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'meta.probably_variable.4d'
        }
      ]
    },
    block: {
      patterns: [
        {
          begin: '(?i)\\b(for each)\\b',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.for_each.curly.4d'}
          },
          end: '(?i)\\b(end for each)\\b',
          endCaptures: {
            0: {name: 'punctuation.section.block.end.for_each.curly.4d'}
          },
          name: 'meta.block.4d'
        }
      ]
    },
    boolean_values: {
      match: '(?i)(NULL|true(\\:C214)?|false(\\:C215)?)',
      name: 'constant.language.4d'
    },
    boolean_variable: {
      begin: '^\\n*[\\t ]*(?i)(C_BOOLEAN(\\:C305)?)(\\()((?i)[\\$a-z_0-9 ]+)',
      beginCaptures: {
        1: {name: 'storage.type.boolean.4d'},
        2: {name: 'meta.c_boolean.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.boolean.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.boolean.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.boolean.4d'
        },
        {include: '#param_separator'}
      ]
    },
    collection_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_COLLECTION(\\:C1488)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.collection.4d'},
        2: {name: 'meta.c_collection.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.collection.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.collection.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.collection.4d'
        },
        {include: '#param_separator'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '\\s*+(\\/\\/)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.4d'}},
          end: '(?<=\\n)(?<!\\\\\\n)',
          name: 'comment.line.double-slash.4d'
        },
        {
          captures: {1: {name: 'meta.toc-list.banner.block.4d'}},
          match: '^/\\*\\* =(\\s*.*?)\\s*= \\*\\*/$\\n?',
          name: 'comment.block.4d'
        },
        {
          begin: '/\\*\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.4d'}},
          end: '\\*\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.4d'}},
          name: 'comment.block.4d'
        },
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.begin.4d'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.4d'}},
          name: 'comment.block.4d'
        },
        {
          captures: {1: {name: 'meta.toc-list.banner.line.4d'}},
          match: '^//=(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.4d'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.4d'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.4d'}},
              end: '(?=\\n)',
              name: 'comment.line.double-slash.4d'
            }
          ]
        }
      ]
    },
    constant_4d: {
      match: '(?i)([a-z_0-9 ]*)(\\:K[0-9]+)?(\\:[0-9]+)',
      name: 'constant.numeric.4d'
    },
    for_loop: {
      begin: '^(?i)(for)\\((\\$[a-z]+);([0-9]+);([0-9]+)\\)',
      beginCaptures: {
        1: {name: 'keyword.control.4d'},
        2: {name: 'variable.name.4d'},
        3: {name: 'constant.range.begin.4d'},
        4: {name: 'constant.range.end.4d'}
      },
      end: '(\\n)',
      endCaptures: {1: {name: 'punctuation.section.end.for.4d'}},
      name: 'meta.block.loop.for.4d'
    },
    'function-call-innards': {
      patterns: [
        {include: '#comments'},
        {include: '#storage_types'},
        {include: '#operators'},
        {
          begin:
            '(?x)\n(?!\\s*\\()\n(\n(?:[A-Za-z_ ][A-Za-z0-9_]*+)++(\\:C[0-9]+)?  # actual name\n|\n(?:(?<=operator)(?:[-*&<>=+#]+|\\(\\)))\n)\n\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.4d'},
            2: {name: 'entity.command.number.4d'},
            3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
          },
          patterns: [
            {include: '#this-function'},
            {include: '#function-call-innards'},
            {include: '#strings'},
            {include: '#numbers'},
            {include: '#parameters'},
            {include: '#local_variables'},
            {include: '#boolean_values'},
            {include: '#constant_4d'},
            {include: '#param_separator'},
            {include: '#operators'},
            {include: '#member_access'},
            {include: '#table_reference'}
          ]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.parens.begin.bracket.round.4d'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.parens.end.bracket.round.4d'}
          },
          patterns: [
            {include: '#function-call-innards'},
            {include: '#member_access'},
            {include: '#table_reference'},
            {include: '#this-function'}
          ]
        }
      ]
    },
    interprocess_variable: {
      match: '<>(?i)[a-z_0-9 ]+',
      name: 'variable.interprocess.name.4d'
    },
    keywords: {
      patterns: [
        {
          match:
            '^\\n*[\\t ]*(?i)(If|While|Else|End if|For each|End for each|End for|Begin SQL|End SQL|while|End while|Use|End use|Case of|End case|Repeat|Until|For)\\b',
          name: 'keyword.control.4d'
        }
      ]
    },
    local_variables: {
      match: '\\$[a-zA-Z_0-9 ]*',
      name: 'variable.local.name.4d'
    },
    long_int_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_LONGINT(\\:C283)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.longint.4d'},
        2: {name: 'meta.c_longint.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.longint.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.longint.4d'
        },
        {include: '#param_separator'}
      ]
    },
    member_access: {
      captures: {
        1: {name: 'variable.other.object.access.4d'},
        2: {name: 'entity.command.number.4d'},
        3: {name: 'punctuation.separator.dot-access.4d'},
        4: {name: 'punctuation.separator.pointer-access.4d'},
        5: {
          patterns: [
            {include: '#this-function'},
            {include: '#member_access'},
            {include: '#method_access'},
            {
              captures: {
                1: {name: 'variable.other.object.access.4d'},
                2: {name: 'punctuation.separator.dot-access.4d'},
                3: {name: 'punctuation.separator.pointer-access.4d'}
              },
              match:
                '((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))'
            }
          ]
        },
        6: {name: 'variable.other.member.4d'}
      },
      match:
        '((?:[a-zA-Z_\\s*]*(\\:C[0-9]+)?|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*(\\b[a-zA-Z_]\\w*\\b(?!\\())'
    },
    method_access: {
      begin:
        '((?:[a-zA-Z_\\s*]*(\\:C[0-9]+)?|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*([a-zA-Z_]\\w*)(\\()',
      beginCaptures: {
        1: {name: 'variable.other.object.access.4d'},
        2: {name: 'entity.command.number.4d'},
        3: {name: 'punctuation.separator.dot-access.4d'},
        4: {name: 'punctuation.separator.pointer-access.4d'},
        5: {
          patterns: [
            {include: '#member_access'},
            {include: '#method_access'},
            {include: '#this-function'},
            {
              captures: {
                1: {name: 'variable.other.object.access.4d'},
                2: {name: 'punctuation.separator.dot-access.4d'},
                3: {name: 'punctuation.separator.pointer-access.4d'}
              },
              match:
                '((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))'
            }
          ]
        },
        6: {name: 'entity.name.function.member.4d'},
        7: {
          name: 'punctuation.section.arguments.begin.bracket.round.function.member.4d'
        }
      },
      contentName: 'meta.function-call.member.4d',
      end: '(\\))',
      endCaptures: {
        1: {
          name: 'punctuation.section.arguments.end.bracket.round.function.member.4d'
        }
      },
      patterns: [
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#parameters'},
        {include: '#local_variables'},
        {include: '#boolean_values'},
        {include: '#constant_4d'},
        {include: '#param_separator'},
        {include: '#function-call-innards'},
        {include: '#table_reference'},
        {include: '#this-function'}
      ]
    },
    numbers: {
      begin: '(?<!\\w)(?=\\d|\\.\\d)',
      end: "(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))",
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.unit.hexadecimal.4d'},
            10: {name: 'keyword.operator.minus.exponent.hexadecimal.4d'},
            11: {
              name: 'constant.numeric.exponent.hexadecimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            12: {name: 'keyword.other.unit.suffix.floating-point.4d'},
            2: {
              name: 'constant.numeric.hexadecimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            4: {name: 'constant.numeric.hexadecimal.4d'},
            5: {
              name: 'constant.numeric.hexadecimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            6: {name: 'punctuation.separator.constant.numeric.4d'},
            8: {name: 'keyword.other.unit.exponent.hexadecimal.4d'},
            9: {name: 'keyword.operator.plus.exponent.hexadecimal.4d'}
          },
          match:
            "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?<!')([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?([lLfF](?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        },
        {
          captures: {
            10: {name: 'keyword.operator.minus.exponent.decimal.4d'},
            11: {
              name: 'constant.numeric.exponent.decimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            12: {name: 'keyword.other.unit.suffix.floating-point.4d'},
            2: {
              name: 'constant.numeric.decimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            4: {name: 'constant.numeric.decimal.point.4d'},
            5: {
              name: 'constant.numeric.decimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            6: {name: 'punctuation.separator.constant.numeric.4d'},
            8: {name: 'keyword.other.unit.exponent.decimal.4d'},
            9: {name: 'keyword.operator.plus.exponent.decimal.4d'}
          },
          match:
            "(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?<!')([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?([lLfF](?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        },
        {
          captures: {
            1: {name: 'keyword.other.unit.binary.4d'},
            2: {
              name: 'constant.numeric.binary.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            4: {name: 'keyword.other.unit.suffix.integer.4d'}
          },
          match:
            "(\\G0[bB])([01](?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        },
        {
          captures: {
            1: {name: 'keyword.other.unit.octal.4d'},
            2: {
              name: 'constant.numeric.octal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            4: {name: 'keyword.other.unit.suffix.integer.4d'}
          },
          match:
            "(\\G0)((?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))+)((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        },
        {
          captures: {
            1: {name: 'keyword.other.unit.hexadecimal.4d'},
            2: {
              name: 'constant.numeric.hexadecimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            5: {name: 'keyword.other.unit.exponent.hexadecimal.4d'},
            6: {name: 'keyword.operator.plus.exponent.hexadecimal.4d'},
            7: {name: 'keyword.operator.minus.exponent.hexadecimal.4d'},
            8: {
              name: 'constant.numeric.exponent.hexadecimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            9: {name: 'keyword.other.unit.suffix.integer.4d'}
          },
          match:
            "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?<!')([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        },
        {
          captures: {
            2: {
              name: 'constant.numeric.decimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            3: {name: 'punctuation.separator.constant.numeric.4d'},
            5: {name: 'keyword.other.unit.exponent.decimal.4d'},
            6: {name: 'keyword.operator.plus.exponent.decimal.4d'},
            7: {name: 'keyword.operator.minus.exponent.decimal.4d'},
            8: {
              name: 'constant.numeric.exponent.decimal.4d',
              patterns: [
                {
                  match: "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                  name: 'punctuation.separator.constant.numeric.4d'
                }
              ]
            },
            9: {name: 'keyword.other.unit.suffix.integer.4d'}
          },
          match:
            "(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?<!')([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?(?!(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-]))"
        }
      ]
    },
    object_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_OBJECT(\\:C1216)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.object.4d'},
        2: {name: 'meta.c_object.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.object.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.object.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.object.4d'
        },
        {include: '#param_separator'}
      ]
    },
    operators: {
      patterns: [
        {match: ':=', name: 'keyword.operator.assignment.4d'},
        {match: '#|<=|>=|<|>|=', name: 'keyword.operator.comparison.4d'},
        {match: '%|\\*|/|-|\\+', name: 'keyword.operator.4d'}
      ]
    },
    param_separator: {match: ';', name: 'punctuation.separator.delimiter.4d'},
    parameters: {match: '\\$[0-9]', name: 'variable.parameter.4d'},
    picture_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_PICTURE(\\:C286)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.picture.4d'},
        2: {name: 'meta.c_picture.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.picture.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.picture.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.picture.4d'
        },
        {include: '#param_separator'}
      ]
    },
    pointer_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_POINTER(\\:C301)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.pointer.4d'},
        2: {name: 'meta.c_pointer.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.pointer.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.pointer.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.pointer.4d'
        },
        {include: '#param_separator'}
      ]
    },
    real_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_REAL(\\:C285)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.real.4d'},
        2: {name: 'meta.c_real.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.real.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.real.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.real.4d'
        },
        {include: '#param_separator'}
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.4d',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.4d'}]
    },
    table_reference: {
      begin: '(?i)\\[((?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)(\\:[0-9]+)?',
      beginCaptures: {
        1: {name: 'support.table.name.4d'},
        2: {name: 'support.table.index.4d'}
      },
      end: '\\]'
    },
    text_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_TEXT(\\:C284)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.text.4d'},
        2: {name: 'meta.c_text.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.text.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.text.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.text.4d'
        },
        {include: '#param_separator'}
      ]
    },
    'this-function': {
      match: '(^\\n*[\\t ]*(?i)(This(\\:C1470)?))|((?i)(This(\\:C1470)?))',
      name: 'variable.language.this.4d'
    },
    variant_variable: {
      begin:
        '^\\n*[\\t ]*(?i)(C_VARIANT(\\:C1683)?)(\\()((?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*)',
      beginCaptures: {
        1: {name: 'storage.type.variant.4d'},
        2: {name: 'meta.c_variant.code.4d'},
        3: {name: 'punctuation.section.arguments.begin.bracket.round.4d'},
        4: {name: 'variable.name.variant.4d'}
      },
      end: '(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.arguments.end.bracket.round.4d'}
      },
      name: 'storage.type.variant.4d',
      patterns: [
        {
          match: '(?i)(?:\\$|<>|)(?:\\$|<>|)[a-z_0-9]+[a-z_0-9 ]*',
          name: 'variable.name.variant.4d'
        },
        {include: '#param_separator'}
      ]
    }
  },
  scopeName: 'source.4dm'
}

export default grammar
