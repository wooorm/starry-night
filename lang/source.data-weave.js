// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mulesoft-labs/data-weave-tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dwl'],
  names: ['dataweave'],
  patterns: [
    {include: '#comments'},
    {include: '#directives'},
    {match: '(---)', name: 'keyword.operator.body-marker.dw'},
    {include: '#expressions'},
    {match: '([^\\s]+)', name: 'invalid'}
  ],
  repository: {
    'annotation-directive': {
      begin: '(\\s*(annotation)\\s+([a-zA-Z][a-zA-Z0-9]*))',
      beginCaptures: {
        2: {name: 'storage.type.annotation.dw'},
        3: {name: 'entity.name.function.dw'}
      },
      end: '(?=\\n)',
      endCaptures: {0: {name: 'keyword.operator.assignment.dw'}},
      name: 'meta.directive.annot.dw',
      patterns: [
        {begin: '\\(', end: '\\)', patterns: [{include: '#parameters'}]}
      ]
    },
    'annotation-usage': {
      begin: '(\\s*(\\@)([a-zA-Z][a-zA-Z0-9]*))',
      beginCaptures: {
        2: {name: 'storage.type.annotation.dw'},
        3: {name: 'entity.name.function.dw'}
      },
      end: '(?=\\n)',
      endCaptures: {0: {name: 'keyword.operator.assignment.dw'}},
      name: 'meta.annot.usage.dw',
      patterns: [
        {begin: '\\(', end: '\\)', patterns: [{include: '#parameters'}]}
      ]
    },
    'array-literal': {
      begin: '(?<!\\w|}|])(\\[)',
      beginCaptures: {0: {name: 'meta.brace.square.dw'}},
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.dw'}},
      name: 'meta.array.literal.dw',
      patterns: [{include: '#expressions'}, {include: '#punctuation-comma'}]
    },
    'attr-literal': {
      begin: '\\@\\(',
      beginCaptures: {0: {name: 'keyword.operator.attributes.dw'}},
      end: '\\)',
      endCaptures: {0: {name: 'keyword.operator.attributes.dw'}},
      name: 'meta.attributes.dw',
      patterns: [{include: '#object-member'}]
    },
    'case-clause': {
      begin: '(?<!\\.|\\$)\\b(case|else(?=\\s*->))\\b(?!\\$|\\.)',
      beginCaptures: {1: {name: 'keyword.control.switch.dw'}},
      end: '\\-\\>',
      endCaptures: {0: {name: 'keyword.control.switch.dw'}},
      name: 'case-clause.expr.dw',
      patterns: [
        {
          begin: '(?<!\\.|\\$)\\b(is)\\s+',
          beginCaptures: {1: {name: 'keyword.control.is.dw'}},
          end: '(?=\\-\\>)',
          patterns: [{include: '#types'}]
        },
        {
          begin: '(?<!\\.|\\$)\\b(matches)\\b',
          beginCaptures: {1: {name: 'keyword.control.matches.dw'}},
          end: '(?=\\-\\>)',
          patterns: [{include: '#expressions'}]
        },
        {
          begin: '(?<!\\.|\\$)\\b([A-Za-z][a-zA-Z0-9_]*)\\s*:\\s+',
          beginCaptures: {1: {name: 'entity.name.variable.dw'}},
          end: '(?=\\-\\>)',
          patterns: [{include: '#expressions'}]
        },
        {
          begin: '(?<!\\.|\\$)\\b([A-Za-z][a-zA-Z0-9_]*)\\s*(if|matches)\\s+',
          beginCaptures: {
            1: {name: 'entity.name.variable.dw'},
            2: {name: 'keyword.control.if.dw'}
          },
          end: '(?=\\-\\>)',
          patterns: [{include: '#expressions'}]
        },
        {include: '#expressions'}
      ]
    },
    cast: {
      begin: '(?<!\\.|\\$)\\b(as|is)\\s+',
      beginCaptures: {1: {name: 'keyword.control.as.dw'}},
      end: '(?=$|^|[;,:})\\]\\s])',
      patterns: [{include: '#types'}]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.dw'}},
          end: '\\*/',
          name: 'comment.block.dw'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.dw'},
            2: {name: 'punctuation.definition.comment.dw'}
          },
          match: '\\s*((//).*$\\n?)'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.dw'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.dw'
        },
        {
          begin: '\\|',
          beginCaptures: {0: {name: 'constant.numeric.dw'}},
          end: '\\|',
          endCaptures: {0: {name: 'constant.numeric.dw'}},
          patterns: [
            {match: '([0-9]+)', name: 'constant.numeric.dw'},
            {
              match: '([+:\\-WYMDTHSPZ\\.])',
              name: 'constant.character.escape.dw'
            },
            {match: '([^\\|])', name: 'invalid'}
          ]
        }
      ]
    },
    directives: {
      patterns: [
        {include: '#dw-directive'},
        {include: '#import-directive'},
        {include: '#type-directive'},
        {include: '#fun-directive'},
        {include: '#var-directive'},
        {include: '#ns-directive'},
        {include: '#input-directive'},
        {include: '#output-directive'},
        {include: '#annotation-usage'},
        {include: '#annotation-directive'}
      ]
    },
    'do-statement': {
      begin: '(?<!\\.|\\$)\\b(do)\\s*(\\{)',
      beginCaptures: {
        1: {name: 'keyword.control.do.dw'},
        2: {name: 'punctuation.definitions.begin.dw'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definitions.end.dw'}},
      name: 'do-statement.expr.dw',
      patterns: [
        {include: '#comments'},
        {include: '#directives'},
        {match: '(---)', name: 'keyword.operator.body-marker.dw'},
        {include: '#expressions'},
        {match: '([^\\s]+)', name: 'invalid'}
      ]
    },
    'dw-directive': {
      begin: '(?<!\\.|\\$)(%dw)\\s+([0-9]\\.[0-9])(?!\\$|\\.)',
      beginCaptures: {1: {name: 'comment.dw'}, 2: {name: 'comment.dw'}},
      end: '(?=\\n)',
      name: 'meta.directive.version.dw'
    },
    expressions: {
      name: 'expression',
      patterns: [
        {match: '\\b(not)\\s+', name: 'keyword.other.dw'},
        {include: '#undefined-fun-character'},
        {include: '#paren-expression'},
        {include: '#strings'},
        {include: '#constants'},
        {include: '#comments'},
        {include: '#match-statement'},
        {include: '#using-statement'},
        {include: '#do-statement'},
        {include: '#if-statement'},
        {include: '#regex'},
        {include: '#type_parameters'},
        {include: '#keywords'},
        {include: '#object-literal'},
        {include: '#array-literal'},
        {include: '#cast'},
        {include: '#object-member'},
        {include: '#variable-reference'},
        {include: '#selectors'},
        {include: '#directives'},
        {include: '#infix'}
      ]
    },
    'fun-directive': {
      begin: '(\\s*(fun)\\s+([a-zA-Z][a-zA-Z0-9_]*|--|\\+\\+))',
      beginCaptures: {
        2: {name: 'storage.type.dw'},
        3: {name: 'entity.name.function.dw'}
      },
      end: '(=)',
      endCaptures: {0: {name: 'keyword.operator.assignment.dw'}},
      name: 'meta.directive.fun.dw',
      patterns: [
        {begin: '<', end: '>', patterns: [{include: '#generics'}]},
        {begin: '\\(', end: '\\)', patterns: [{include: '#parameters'}]},
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?==)',
          patterns: [{include: '#types'}]
        }
      ]
    },
    generics: {
      patterns: [
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?=,|>)',
          patterns: [{include: '#types'}]
        },
        {match: '<:', name: 'keyword.operator.extends.dw'},
        {include: '#keywords'},
        {match: '\\w+', name: 'entity.name.type.parameter.dw'}
      ]
    },
    'if-statement': {
      begin: '(?<!\\.|\\$)\\b(if\\s*)\\(',
      beginCaptures: {1: {name: 'keyword.control.if.dw'}},
      end: '\\)',
      name: 'meta.if.dw',
      patterns: [{include: '#expressions'}]
    },
    'import-directive': {
      begin: '(\\s*(import)\\s+)',
      beginCaptures: {2: {name: 'keyword.control.import'}},
      end: '(?=(fun|input|output|type|var|ns|import|%dw|private|annotation|\\@|---)\\s|$)',
      name: 'meta.directive.import.dw',
      patterns: [
        {include: '#comments'},
        {match: '(,)'},
        {match: '(\\*)', name: 'entity.name.type.dw'},
        {
          captures: {1: {name: 'keyword.control.from'}},
          match: '\\s+(from)\\s+'
        },
        {
          match: '(?:[a-zA-Z][a-zA-Z0-9]*(?:::[a-zA-Z][a-zA-Z0-9]*)+)\n',
          name: 'entity.name.type.dw'
        },
        {match: '(?:[a-zA-Z][a-zA-Z0-9]*)\n', name: 'entity.name.function.dw'},
        {
          captures: {
            1: {name: 'keyword.control.as'},
            2: {name: 'entity.name.function.dw'}
          },
          match: '\\s+(as)\\s+([a-zA-Z][a-zA-Z0-9]*)'
        }
      ]
    },
    infix: {
      match:
        '(?<!^|,|\\[|\\(|=|\\+|>|<|\\-|\\*|:|\\{|case|is|else|not|as|and|or)(?<=[a-zA-Z0-9_$\\}\\])"\'`|/])\\s*(?!(var|match|case|else|fun|input|output|is|as|default|ns|import|null|false|true|using|do|not|and|or)\\s)(\\+\\+|\\-\\-|[a-zA-Z][a-zA-Z_0-9]*)(\\s+|\\s*(?=["\'/|{]))',
      name: 'support.function.dw'
    },
    'input-directive': {
      begin: '(?<!\\.|\\$)\\b(input)\\s+([[:alpha:]][[:alnum:]]*)\\s*',
      beginCaptures: {
        1: {name: 'storage.type.dw'},
        2: {name: 'entity.name.variable.dw'}
      },
      end: '(?=\\n)',
      name: 'meta.directive.ns.dw',
      patterns: [
        {
          begin: '(\\:\\s*)',
          beginCaptures: {1: {name: 'keyword.other.dw'}},
          end: '(\\s|\\n)',
          patterns: [{include: '#types'}]
        },
        {match: '([^{\\n\\s])', name: 'string.mime.dw'}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(throw|for|yield|enum|private|async)\\b',
          name: 'keyword.reserved.dw'
        },
        {match: '\\b(not)\\b', name: 'invalid'},
        {
          match: '\\b(if|else|while|for|do|using|unless|default)\\b',
          name: 'keyword.control.dw'
        },
        {
          match: '(~=|==|!=|!=|<=|>=|<|>)',
          name: 'keyword.operator.comparison.dw'
        },
        {match: '(=)', name: 'keyword.operator.assignment.dw'},
        {match: '(:)', name: 'keyword.operator.declaration.dw'},
        {match: '(\\-|\\+|\\*|\\/)', name: 'keyword.operator.arithmetic.dw'},
        {match: '\\b(and|or)\\b', name: 'keyword.other.dw'}
      ]
    },
    'match-block': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.dw'}},
      end: '(?=\\})',
      name: 'match-block.expr.dw',
      patterns: [{include: '#case-clause'}, {include: '#expressions'}]
    },
    'match-statement': {
      begin: '(?<!\\.|\\$)\\b(match)\\s*(?=\\{)',
      beginCaptures: {1: {name: 'keyword.control.switch.dw'}},
      end: '\\}',
      endCaptures: {1: {name: 'punctuation.definition.block.dw'}},
      name: 'match-statement.expr.dw',
      patterns: [{include: '#match-block'}]
    },
    'ns-directive': {
      begin:
        '(?<!\\.|\\$)\\b(ns)\\s+([A-Za-z][a-zA-Z0-9_]*)\\s+([^\\n]*)(?!\\$|\\.)',
      beginCaptures: {
        1: {name: 'storage.type.dw'},
        2: {name: 'entity.name.namespace.dw'},
        3: {name: 'meta.definition.ns.dw string.url.dw'}
      },
      end: '(?=\\n)',
      name: 'meta.directive.ns.dw'
    },
    'object-key': {
      patterns: [
        {
          captures: {0: {name: 'variable.language.dw'}},
          match: '\\b([[:alpha:]][_[:alnum:]]+#)',
          name: 'variable.object.member.dw meta.object-literal.namespace.dw'
        },
        {
          begin: '(?=[\\\'\\"\\`])',
          end: '(?=@\\(|:)',
          name: 'variable.object.member.dw meta.object-literal.key.dw',
          patterns: [{include: '#strings'}]
        },
        {
          captures: {1: {name: 'meta.object-literal.key.dw'}},
          end: '(?=,|\\}|\\))',
          match: '(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:|@\\()',
          name: 'variable.object.member.dw'
        }
      ]
    },
    'object-literal': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.dw'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.dw'}},
      name: 'meta.objectliteral.dw',
      patterns: [{include: '#object-member'}]
    },
    'object-member': {
      name: 'meta.object.member.first.dw',
      patterns: [
        {include: '#comments'},
        {include: '#paren-expression'},
        {include: '#object-key'},
        {include: '#attr-literal'},
        {include: '#object-member-body'},
        {include: '#punctuation-comma'}
      ]
    },
    'object-member-body': {
      begin: ':',
      beginCaptures: {
        0: {
          name: 'meta.object-literal.key.dw punctuation.separator.key-value.dw'
        }
      },
      end: '(?=,|\\}|\\))',
      name: 'variable.object.member.dw',
      patterns: [{include: '#expressions'}]
    },
    'object-member-type': {
      patterns: [
        {include: '#comments'},
        {match: '_', name: 'variable.language.dw'},
        {match: '([a-zA-Z0-9]+#)', name: 'variable.language.dw'},
        {
          match: '\\(\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*\\)',
          name: 'entity.name.type.dw'
        },
        {match: '([a-zA-Z][a-zA-Z0-9]*)', name: 'variable.object.member.dw'},
        {include: '#strings'},
        {match: '\\?', name: 'keyword.operator.optional.dw'},
        {match: '\\*', name: 'keyword.operator.optional.dw'},
        {
          begin: '(\\@\\()',
          beginCaptures: {1: {name: 'keyword.operator.attributes.dw'}},
          end: '(\\))',
          endCaptures: {1: {name: 'keyword.operator.attributes.dw'}},
          patterns: [
            {include: '#punctuation-comma'},
            {include: '#object-member-type'}
          ]
        },
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?=,|}|\\)|\\|}|\\-}|\\|\\-})',
          patterns: [{include: '#types'}]
        },
        {match: '([^\\s])', name: 'invalid'}
      ]
    },
    'output-directive': {
      begin: '(?<!\\.|\\$)\\b(output)\\s+([^\\n{\\s]*)(?!\\$|\\.)',
      beginCaptures: {
        1: {name: 'storage.type.dw'},
        2: {name: 'string.other.dw'}
      },
      end: '(?=\\n)',
      name: 'meta.directive.ns.dw'
    },
    parameters: {
      patterns: [
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?=,|\\)|=)',
          patterns: [{include: '#types'}]
        },
        {
          begin: '(=)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?=,|\\))',
          patterns: [{include: '#expressions'}]
        },
        {match: '\\w+', name: 'variable.parameter.dw'}
      ]
    },
    'paren-expression': {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.expression.begin.dw'}},
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.expression.end.dw'}},
      patterns: [{include: '#expressions'}]
    },
    'punctuation-comma': {match: ',', name: 'punctuation.separator.comma.dw'},
    'qstring-backtick': {
      begin: '`',
      beginCaptures: {
        0: {
          name: 'string.quoted.double.dw punctuation.definition.string.begin.dw'
        }
      },
      end: '`',
      endCaptures: {
        0: {
          name: 'string.quoted.double.dw punctuation.definition.string.end.dw'
        }
      },
      patterns: [
        {include: '#template-substitution-element'},
        {include: '#template-dollar'},
        {include: '#string-character-escape'},
        {match: '([^`])', name: 'string.template.dw'}
      ]
    },
    'qstring-double': {
      begin: '"',
      beginCaptures: {
        0: {
          name: 'string.quoted.double.dw punctuation.definition.string.begin.dw'
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: 'string.quoted.double.dw punctuation.definition.string.end.dw'
        }
      },
      patterns: [
        {include: '#template-substitution-element'},
        {include: '#template-dollar'},
        {include: '#string-character-escape'},
        {match: '([^"])', name: 'string.quoted.double.dw'}
      ]
    },
    'qstring-single': {
      begin: "'",
      beginCaptures: {
        0: {
          name: 'string.quoted.single.dw punctuation.definition.string.begin.dw'
        }
      },
      end: "(\\')|((?:[^\\\\\\n])$)",
      endCaptures: {
        1: {
          name: 'string.quoted.single.dw punctuation.definition.string.end.dw'
        },
        2: {name: 'invalid.illegal.newline.dw'}
      },
      patterns: [
        {include: '#template-substitution-element'},
        {include: '#template-dollar'},
        {include: '#string-character-escape'},
        {match: "([^'])", name: 'string.quoted.single.dw'}
      ]
    },
    regex: {
      patterns: [
        {
          begin:
            '(?<=[=(:,\\[?+!]|replace|match|scan|matches|contains|---|case|->|and|or|\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+\\/(?![\\/*])(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.dw'}},
          end: '(/)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.dw'}},
          name: 'string.regexp.dw',
          patterns: [{include: '#regexp'}]
        },
        {
          begin:
            '(?<![_$[:alnum:])])\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+\\/(?![\\/*])(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.dw'}},
          end: '(/)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.dw'}},
          name: 'string.regexp.dw',
          patterns: [{include: '#regexp'}]
        }
      ]
    },
    'regex-character-class': {
      patterns: [
        {
          match: '\\\\[wWsSdDtrnvf]|\\.',
          name: 'constant.other.character-class.regexp'
        },
        {
          match:
            '\\\\([0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]])',
          name: 'constant.character.numeric.regexp'
        },
        {match: '\\\\c[A-Z]', name: 'constant.character.control.regexp'},
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    regexp: {
      patterns: [
        {match: '\\\\[bB]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
        {match: '\\\\[1-9]\\d*', name: 'keyword.other.back-reference.regexp'},
        {
          match: '[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
          name: 'keyword.operator.quantifier.regexp'
        },
        {match: '\\|', name: 'keyword.operator.or.regexp'},
        {
          begin: '(\\()((\\?=)|(\\?!))',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.regexp'},
            2: {name: 'punctuation.definition.group.assertion.regexp'},
            3: {name: 'meta.assertion.look-ahead.regexp'},
            4: {name: 'meta.assertion.negative-look-ahead.regexp'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.assertion.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\((\\?:)?',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.regexp'},
            1: {name: 'punctuation.definition.group.capture.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'},
            2: {name: 'keyword.operator.negation.regexp'}
          },
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'}
          },
          name: 'constant.other.character-class.set.regexp',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.numeric.regexp'},
                2: {name: 'constant.character.control.regexp'},
                3: {name: 'constant.character.escape.backslash.regexp'},
                4: {name: 'constant.character.numeric.regexp'},
                5: {name: 'constant.character.control.regexp'},
                6: {name: 'constant.character.escape.backslash.regexp'}
              },
              match:
                '(?:.|(\\\\(?:[0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[[:xdigit:]][[:xdigit:]]|u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]))|(\\\\c[A-Z])|(\\\\.))',
              name: 'constant.other.character-class.range.regexp'
            },
            {include: '#regex-character-class'}
          ]
        },
        {include: '#regex-character-class'}
      ]
    },
    selectors: {
      begin:
        '(?<![\\[\\(:+*/\\-])(\\s*\\.\\.\\*|\\s*\\.\\.|\\s*\\.\\*|\\s*\\.\\@|\\s*\\.#|\\s*\\.&|\\s*\\.|(?=\\[)|\\:\\:)',
      end: '(?=\\s|,|\\}|\\)|\\n|\\]|\\(|-|$)',
      name: 'meta.selector.data-weave',
      patterns: [
        {
          captures: {0: {name: 'variable.language.dw'}},
          match: '\\b([[:alpha:]][_[:alnum:]]+#)',
          name: 'variable.object.member.dw'
        },
        {
          match: '((?:[A-Za-z])([a-zA-Z0-9_]*)[?!]?|(\\$)+)',
          name: 'variable.object.member.dw'
        },
        {include: '#strings'},
        {
          begin: '(\\[(@|\\^)?)',
          end: '(\\])',
          patterns: [
            {include: '#expressions'},
            {match: '([\\)])', name: 'invalid'}
          ]
        },
        {include: '#selectors'}
      ]
    },
    'string-character-escape': {
      match: '\\\\(u[[:xdigit:]]{4}|$|.)',
      name: 'constant.character.escape.dw'
    },
    strings: {
      patterns: [
        {include: '#qstring-single'},
        {include: '#qstring-double'},
        {include: '#qstring-backtick'},
        {include: '#template'}
      ]
    },
    template: {
      begin: '([$[:alpha:]][_$[:alnum:]]*)\\s*(`)',
      beginCaptures: {
        1: {name: 'support.function.dw'},
        2: {
          name: 'string.template.dw punctuation.definition.string.template.begin.dw'
        }
      },
      end: '`',
      endCaptures: {
        0: {
          name: 'string.template.dw punctuation.definition.string.template.end.dw'
        }
      },
      patterns: [
        {include: '#template-substitution-element'},
        {include: '#template-dollar'},
        {include: '#string-character-escape'},
        {match: '([^`])', name: 'string.template.dw'}
      ]
    },
    'template-dollar': {
      patterns: [
        {match: '(\\$(\\$)+)', name: 'variable.parameter.dw'},
        {match: '(\\$)(?![a-zA-Z(])', name: 'variable.parameter.dw'},
        {
          captures: {
            1: {name: 'keyword.other.dw'},
            2: {name: 'variable.other.dw'}
          },
          match: '(\\$)([a-zA-Z][a-zA-Z0-9_]*)',
          name: 'variable.parameter.dw'
        }
      ]
    },
    'template-substitution-element': {
      begin: '\\$\\(',
      beginCaptures: {0: {name: 'keyword.other.dw'}},
      end: '\\)',
      endCaptures: {0: {name: 'keyword.other.dw'}},
      name: 'meta.template.expression.dw',
      patterns: [{include: '#expressions'}]
    },
    'type-directive': {
      begin: '(\\s*(type)\\s+([a-zA-Z][a-zA-Z0-9]*))',
      beginCaptures: {
        2: {name: 'storage.type.dw'},
        3: {name: 'entity.name.type.dw'}
      },
      end: '(?=(fun|input|output|type|var|ns|import|%dw|private|---)\\s|(\\@[a-zA-Z][a-zA-Z0-9]*))',
      name: 'meta.directive.type.dw',
      patterns: [
        {begin: '<', end: '>', patterns: [{include: '#generics'}]},
        {match: '\\=', name: 'keyword.other.dw'},
        {include: '#types'}
      ]
    },
    type_parameters: {
      begin: '<',
      end: '>',
      patterns: [
        {include: '#types'},
        {include: '#punctuation-comma'},
        {include: '#comments'}
      ]
    },
    types: {
      patterns: [
        {include: '#comments'},
        {match: '\\b(true|false|null)\\b', name: 'constant.language.dw'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.dw'
        },
        {include: '#strings'},
        {
          begin: '<',
          end: '>',
          patterns: [
            {include: '#types'},
            {include: '#punctuation-comma'},
            {include: '#comments'}
          ]
        },
        {
          begin: '\\{\\-\\|',
          end: '\\|\\-\\}',
          patterns: [
            {include: '#punctuation-comma'},
            {include: '#object-member-type'}
          ]
        },
        {
          begin: '\\{\\|',
          end: '\\|\\}',
          patterns: [
            {include: '#punctuation-comma'},
            {include: '#object-member-type'}
          ]
        },
        {
          begin: '\\{\\-',
          end: '\\-\\}',
          patterns: [
            {include: '#punctuation-comma'},
            {include: '#object-member-type'}
          ]
        },
        {
          begin: '\\{',
          end: '\\}',
          patterns: [
            {include: '#punctuation-comma'},
            {include: '#object-member-type'}
          ]
        },
        {
          begin: '(\\()',
          beginCaptures: {0: {name: 'keyword.operator.grouping.dw'}},
          end: '(\\)\\s*->|\\))',
          endCaptures: {0: {name: 'keyword.operator.grouping.dw'}},
          patterns: [{include: '#types'}, {include: '#parameters'}]
        },
        {
          match:
            '(String|Boolean|Number|Range|Namespace|Uri|DateTime|LocalDateTime|Date|LocalTime|TimeZone|Time|Period|Binary|Null|Regex|Nothing|Any|Object|Key)',
          name: 'support.class.dw'
        },
        {
          begin: '(Array|Type)\\s*<',
          beginCaptures: {1: {name: 'support.type.dw'}},
          end: '>',
          patterns: [{match: ',', name: 'invalid'}, {include: '#types'}]
        },
        {match: '(&|\\|)', name: 'keyword.operator.declaration.dw'},
        {match: '<:', name: 'keyword.operator.declaration.dw'},
        {match: '\\b([A-Z][a-zA-Z0-9_]*)', name: 'support.class.dw'},
        {include: '#undefined-fun-character'},
        {match: '\\b(var|fun|ns)\\b'},
        {
          match:
            '\\b(input|output|var|ns|import|try|catch|throw|do|for|yield|enum|private|async)\\b',
          name: 'invalid'
        },
        {
          match: '\\b(if|else|while|for|do|using|unless|default|match)\\b',
          name: 'invalid'
        },
        {match: '(~=|==|!=|===|!==|<=|>=|<|>|\\$+)', name: 'invalid'}
      ]
    },
    'undefined-fun-character': {
      match: '\\?\\?\\?',
      name: 'constant.language.undefined.dw'
    },
    'using-statement': {
      begin: '(?<!\\.|\\$)\\b(using)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.using.dw'},
        2: {name: 'punctuation.definitions.begin.dw'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definitions.end.dw'}},
      name: 'using-statement.expr.dw',
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.variable.dw'},
            2: {name: 'keyword.operator.dw'}
          },
          match: '((?:\\+\\+|\\-\\-|[A-Za-z])(?:[a-zA-Z0-9_]*))(\\s*=)'
        },
        {include: '#expressions'}
      ]
    },
    'var-directive': {
      begin: '(\\s*(var)\\s+([a-zA-Z][a-zA-Z0-9]*))',
      beginCaptures: {
        2: {name: 'storage.type.dw'},
        3: {name: 'entity.name.variable.dw'}
      },
      end: '(=)',
      endCaptures: {0: {name: 'keyword.operator.assignment.dw'}},
      name: 'meta.directive.var.dw',
      patterns: [
        {begin: '<', end: '>', patterns: [{include: '#generics'}]},
        {
          begin: '(:)',
          beginCaptures: {1: {name: 'keyword.operator.declaration.dw'}},
          end: '(?==|$)',
          patterns: [{include: '#comments'}, {include: '#types'}]
        }
      ]
    },
    'variable-reference': {
      patterns: [
        {
          match:
            '\\b(?!(fun|input|output|type|var|ns|import|%dw|private|---)\\b)((\\+\\+|\\-\\-|[A-Za-z])[a-zA-Z0-9_]*)',
          name: 'variable.other.dw'
        },
        {
          match: '\\b(fun|input|output|type|var|ns|import|private)\\b',
          name: 'invalid'
        },
        {match: '(\\$+)', name: 'variable.parameter.dw'}
      ]
    }
  },
  scopeName: 'source.data-weave'
}

export default grammar
