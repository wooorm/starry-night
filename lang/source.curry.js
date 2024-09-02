// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fwcd/vscode-curry>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.curry'],
  names: ['curry'],
  patterns: [
    {
      begin: '^(module)\\b',
      beginCaptures: {1: {name: 'keyword.other.curry keyword.module.curry'}},
      end: '\\b(where)\\b|(^(?!\\s))',
      endCaptures: {1: {name: 'keyword.module.curry'}},
      name: 'meta.declaration.module.curry',
      patterns: [
        {include: '#module_name'},
        {include: '#module_exports'},
        {include: '#comments'},
        {match: '[a-z]+', name: 'invalid'}
      ]
    },
    {
      begin: '^(import)\\b',
      beginCaptures: {1: {name: 'keyword.other.curry keyword.import.curry'}},
      end: '(^(?!\\s))',
      name: 'meta.import.curry',
      patterns: [
        {
          match: '\\b(qualified|as|hiding)\\b',
          name: 'keyword.other.curry keyword.import.curry'
        },
        {include: '#module_name'},
        {include: '#module_exports'},
        {include: '#comments'}
      ]
    },
    {
      begin: '^\\s*(#)\\s*\\w+',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.preprocessor.c punctuation.pragma.preprocessor.curry'
        }
      },
      end: '$',
      name: 'meta.preprocessor.c pragma.preprocessor.curry'
    },
    {include: '#pragma'},
    {
      begin:
        '^(foreign)\\s+(import|export)((\\s+\\w+))(\\s+\\"(\\\\.|[^\\"])*\\")?\\s*',
      beginCaptures: {
        1: {name: 'keyword.declaration.foreign.curry'},
        2: {name: 'keyword.declaration.foreign.curry'},
        3: {name: 'keyword.declaration.foreign.curry'},
        5: {name: 'string.quoted.double.curry'}
      },
      end: '^(?!\\s)',
      name: 'meta.function.foreign-declaration.curry',
      patterns: [{include: '#foreign_function_signature'}]
    },
    {include: '#type_declarations'},
    {include: '#function_declarations'},
    {include: '#expression_stuff'}
  ],
  repository: {
    block_comment: {
      applyEndPatternLast: true,
      begin: '\\{-(?!#)',
      captures: {0: {name: 'punctuation.comment.curry'}},
      end: '(?<!#)-\\}',
      name: 'comment.block.curry',
      patterns: [{include: '#block_comment'}]
    },
    class_declaration: {
      begin: '^(\\s*)(class)\\b',
      beginCaptures: {2: {name: 'keyword.declaration.class.curry'}},
      end: '\\b(where)\\b|(^(?!\\1\\s))',
      endCaptures: {1: {name: 'keyword.declaration.class.curry'}},
      name: 'meta.declaration.class.curry',
      patterns: [{include: '#type'}]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.comment.curry'}},
          match: '(--).*$',
          name: 'comment.line.curry'
        },
        {include: '#block_comment'}
      ]
    },
    common_keywords: {
      match:
        '\\b(where|case|fcase|of|let|in|default|do|mdo|if|then|else|free)\\b',
      name: 'keyword.other.curry'
    },
    constructor_signature: {
      begin: "^(\\s+)([A-Z][\\w']*|\\(\\W+\\))\\s*((::)|∷)",
      beginCaptures: {
        2: {name: 'constant.other.curry entity.name.constructor.curry'},
        3: {name: 'keyword.other.double-colon.curry'}
      },
      end: '^(?!\\1\\s)',
      name: 'meta.declaration.function.curry',
      patterns: [{include: '#type'}]
    },
    ctor_names: {
      patterns: [
        {
          match: "(?<!')\\b[A-Z][\\w']*",
          name: 'constant.other.curry entity.name.constructor.curry'
        },
        {
          match: '\\(\\)',
          name: 'constant.other.curry entity.name.constructor.curry'
        }
      ]
    },
    data_declaration: {
      begin: "^(\\s*)(?:(external)\\s+)?(data|newtype)\\s+([A-Z][\\w']*)?",
      beginCaptures: {
        2: {name: 'keyword.declaration.external.curry'},
        3: {name: 'keyword.declaration.data.curry'},
        4: {name: 'constant.other.curry entity.name.type.curry'}
      },
      end: '^(?!\\1\\s)',
      name: 'meta.declaration.data.curry',
      patterns: [
        {match: 'where', name: 'keyword.declaration.data.curry'},
        {
          begin: '([=\\|])',
          beginCaptures: {1: {name: 'keyword.operator.curry'}},
          end: "(?<!')\\b([A-Z][\\w']*)",
          endCaptures: {
            1: {name: 'constant.other.curry entity.name.constructor.curry'}
          },
          patterns: [{include: '#comments'}]
        },
        {include: '#deriving'},
        {include: '#constructor_signature'},
        {include: '#record_declaration'},
        {include: '#comments'},
        {include: '#type'}
      ]
    },
    deriving: {
      match: '\\b(deriving)\\b',
      name: 'keyword.other.curry keyword.declaration.data.curry'
    },
    expression_stuff: {
      patterns: [
        {
          match: "([A-Z][\\w']*\\.)+",
          name: 'storage.module.curry entity.name.module.curry'
        },
        {
          match:
            '\\b(abs|acos|acosh|all|and|any|appendFile|asTypeOf|asin|asinh|atan|atan2|atanh|break|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromEnum|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|head|id|init|interact|ioError|isDenormalized|isIEEE|isInfinite|isNaN|isNegativeZero|iterate|last|lcm|length|lex|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|odd|or|otherwise|pi|pred|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|read|readFile|readIO|readList|readLn|readParen|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showList|showParen|showString|shows|showsPrec|significand|signum|sin|sinh|snd|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|toEnum|toInteger|toRational|truncate|uncurry|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\\b',
          name: 'support.function.prelude.curry'
        },
        {
          match: '\\b(error|undefined)\\b',
          name: 'support.function.prelude.error.curry'
        },
        {include: '#infix_op'},
        {
          match: '\\[|\\]',
          name: 'keyword.operator.curry punctuation.list.curry'
        },
        {match: ',', name: 'punctuation.separator.comma.curry'},
        {
          captures: {
            1: {name: 'punctuation.definition.entity.curry'},
            3: {name: 'punctuation.definition.entity.curry'}
          },
          match: "(`)([A-Z][\\w']*\\.)*[a-z][\\w']*(`)",
          name: 'keyword.operator.function.infix.curry'
        },
        {
          begin: '(\\{)(?!-)',
          beginCaptures: {
            1: {name: 'keyword.operator.curry punctuation.record.curry'}
          },
          end: '(?<!-)(\\})',
          endCaptures: {
            1: {name: 'keyword.operator.curry punctuation.record.curry'}
          },
          name: 'record.expression.curry',
          patterns: [
            {
              captures: {2: {name: 'keyword.operator.curry'}},
              match: "(?<!')\\b[a-z][\\w']+\\s+(=)"
            },
            {include: '#expression_stuff'}
          ]
        },
        {
          match: '\\(\\)',
          name: 'constant.other.curry entity.name.constructor.curry'
        },
        {
          match: '\\[\\]',
          name: 'constant.other.curry entity.name.constructor.curry'
        },
        {include: '#comments'},
        {
          match: '[@|!%$?~+:.\\-*=</>\\\\∘→⇒⇔←⇐≤≥≡⋮\\[\\]]+',
          name: 'keyword.operator.curry'
        },
        {include: '#common_keywords'},
        {include: '#literals'},
        {include: '#quasi_quote'},
        {include: '#ctor_names'}
      ]
    },
    external_function_definition: {
      begin: "^\\s*(?<!')\\b([a-z_][\\w']*|\\(\\W+\\))\\s+(external)\\b",
      beginCaptures: {
        1: {name: 'entity.name.function.curry'},
        2: {name: 'keyword.declaration.external.curry'}
      },
      end: '^(?!\\s)',
      name: 'meta.definition.function.curry'
    },
    field_signature: {
      captures: {
        1: {name: 'entity.name.function.curry'},
        2: {name: 'keyword.other.double-colon.curry'},
        3: {patterns: [{include: '#type'}]}
      },
      match: '\\b(\\w+)\\s*(::|∷)\\s*([^,}]+)',
      name: 'meta.declaration.field.signature.curry'
    },
    fixity_declaration: {
      captures: {
        1: {name: 'keyword.declaration.fixity.curry'},
        2: {name: 'constant.numeric.fixity.curry'}
      },
      match: '\\b(infix[lr]?)\\b\\s*(\\d+).+',
      name: 'meta.declaration.fixity.curry'
    },
    foreign_function_signature: {
      begin: "(\\s*)([a-z_][\\w']*|\\(\\W+\\))\\s*((::)|∷)",
      beginCaptures: {
        2: {name: 'entity.name.function.curry'},
        3: {name: 'keyword.other.double-colon.curry'}
      },
      end: '^(?!\\s)',
      name: 'meta.declaration.function.curry',
      patterns: [{include: '#type'}]
    },
    function_declarations: {
      patterns: [
        {include: '#fixity_declaration'},
        {include: '#function_signature'},
        {include: '#function_definition'},
        {include: '#infix_function_definition'},
        {include: '#external_function_definition'}
      ]
    },
    function_definition: {
      begin:
        "^\\s*(?<!')\\b([a-z_][\\w']*|\\(\\W+\\))\\s+(?![^\\w\\s='\"\\(\\[])(?=((([\\w\\.,'\"_]+|(?:\\w+\\@)?\\(.*\\)|\\[.*\\])\\s+)*[=\\|]))",
      beginCaptures: {1: {name: 'entity.name.function.curry'}},
      end: '(=)',
      endCaptures: {1: {name: 'keyword.operator.curry'}},
      name: 'meta.definition.function.curry',
      patterns: [{include: '#expression_stuff'}]
    },
    function_signature: {
      begin:
        "^(\\s*)(?!--|where|case|fcase|of|let|in|default|do|mdo|if|then|else|free)(?:(\\(\\W\\)|[\\w']+)|[\\(\\[])(?=[\\w',\\s\\[\\]\\(\\)]*((?:::)|∷))",
      beginCaptures: {2: {name: 'entity.name.function.curry'}},
      end: '^(?!\\1\\s)|(?=})',
      name: 'meta.declaration.function.curry',
      patterns: [
        {
          begin: '(?=.*((::)|∷))',
          end: '((::)|∷)',
          endCaptures: {1: {name: 'keyword.other.double-colon.curry'}},
          name: 'meta.declaration.function.names.curry',
          patterns: [
            {
              match: "((?<!')\\b[a-z_][\\w']*|\\(\\W+\\))",
              name: 'entity.name.function.curry'
            }
          ]
        },
        {include: '#type'}
      ]
    },
    infix_function_definition: {
      begin:
        "^\\s*(?=(([\\w'\\.'\"]+|(?:\\w+@)?\\(.*\\)|\\[.*\\])\\s+)+([^\"'_,\\(\\);\\[\\]`\\{\\}\\:\\w\\s]+|`[a-z][\\w']*`)((\\s*[\\w'\\.'\"]+|\\s*(?:\\w+@)?\\(.*\\)|\\s*\\[.*\\]))+\\s*=)",
      end: "( [^\"'_,\\(\\);\\[\\]`\\{\\}\\:\\w\\s]+|`[a-z][\\w']*`)",
      endCaptures: {1: {name: 'entity.name.function.curry'}},
      name: 'meta.definition.function.curry',
      patterns: [{include: '#expression_stuff'}]
    },
    infix_op: {
      match: '(\\([^"\'\\w \\)]+\\)|\\(,+\\))',
      name: 'keyword.operator.curry'
    },
    instance_declaration: {
      begin: '^(\\s*)(instance)\\b',
      beginCaptures: {2: {name: 'keyword.declaration.instance.curry'}},
      end: '\\b(where)\\b|(^(?!\\1\\s))',
      endCaptures: {1: {name: 'keyword.declaration.instance.curry'}},
      name: 'meta.declaration.instance.curry',
      patterns: [{include: '#type'}, {include: '#comments'}]
    },
    literals: {
      patterns: [
        {
          match:
            '\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b',
          name: 'constant.numeric.curry'
        },
        {
          match: '\\b([0-9]+|0([xX][0-9a-fA-F]+|[oO][0-7]+))\\b',
          name: 'constant.numeric.curry'
        },
        {
          begin: '"',
          end: '"|$',
          name: 'string.quoted.double.curry',
          patterns: [
            {
              match:
                '\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])',
              name: 'constant.character.escape.curry'
            },
            {
              match: '\\\\o[0-7]+|\\\\x[0-9A-Fa-f]+|\\\\[0-9]+',
              name: 'constant.character.escape.octal.curry'
            },
            {
              match: '\\^[A-Z@\\[\\]\\\\\\^_]',
              name: 'constant.character.escape.control.curry'
            }
          ]
        },
        {
          captures: {
            2: {name: 'constant.character.escape.curry'},
            3: {name: 'constant.character.escape.octal.curry'},
            4: {name: 'constant.character.escape.hexadecimal.curry'},
            5: {name: 'constant.character.escape.control.curry'}
          },
          match:
            "(?x)(')(?:  [\\ -&(-\\[\\]-~\"]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_]))(')",
          name: 'string.quoted.single.curry'
        }
      ]
    },
    module_exports: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'storage.module.curry'}},
      end: '(\\))',
      endCaptures: {1: {name: 'storage.module.curry'}},
      name: 'meta.declaration.exports.curry',
      patterns: [
        {
          begin: '\\\\\\s*$',
          end: '\\\\',
          name: 'constant.character.escape.multilinestring.curry'
        },
        {match: "(?<!')\\b[a-z][\\w']*", name: 'entity.name.function.curry'},
        {
          begin: "(?<!')\\b([A-Z][\\w']*)\\s*(\\()",
          beginCaptures: {
            1: {name: 'storage.type.curry entity.name.data.curry'},
            2: {name: 'keyword.operator.curry'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'keyword.operator.curry'}},
          name: 'meta.declaration.export.data.curry',
          patterns: [{include: '#expression_stuff'}]
        },
        {
          match: "(?<!')\\b[A-Z][\\w']*",
          name: 'storage.type.curry entity.name.data.curry'
        },
        {match: ',', name: 'punctuation.separator.comma.curry'},
        {include: '#infix_op'},
        {match: '\\(.*?\\)', name: 'meta.other.unknown.curry'},
        {include: '#module_exports'},
        {include: '#comments'}
      ]
    },
    module_name: {
      match: "([A-Z][\\w']*)(\\.[A-Z][\\w']*)*",
      name: 'entity.name.module.curry entity.name.namespace.curry'
    },
    pattern_function_definition: {
      begin:
        "^\\s*(?=\\(.*\\)|\\[.*\\]|([A-Z][\\w']*(\\s+([\\w\\s,']*|\\(.*\\)|\\[.*\\]|\\{.*\\}))*)\\s*=)",
      end: '(=)',
      endCaptures: {1: {name: 'keyword.operator.curry'}},
      name: 'meta.definition.function.curry',
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.curry'}},
          match: "(?<!')\\b([a-z_][\\w']*)\\b"
        },
        {include: '#expression_stuff'}
      ]
    },
    pragma: {
      begin: '(\\{-#)\\s+([A-Z_]+)\\b',
      beginCaptures: {
        1: {name: 'punctuation.pragma.curry'},
        2: {name: 'keyword.preprocessor.curry pragma.name.curry'}
      },
      end: '#-\\}',
      name: 'meta.preprocessor.curry pragma.curry',
      patterns: [
        {
          match: '\\b([A-Z][a-z]*)+\\b',
          name: 'keyword.other.preprocessor.curry pragma.support.language.curry'
        },
        {
          match: '(-+[a-z]+)+',
          name: 'keyword.other.preprocessor.curry pragma.support.flag.curry'
        }
      ]
    },
    quasi_quote: {
      begin: '(\\[)([a-z]\\w*)?(\\|)',
      beginCaptures: {
        1: {name: 'punctuation.quasi-quoter.curry keyword.operator.curry'},
        2: {name: 'entity.name.function.curry'},
        3: {name: 'punctuation.quasi-quoter.curry keyword.operator.curry'}
      },
      end: '(\\|\\])',
      endCaptures: {
        1: {name: 'punctuation.quasi-quoter.curry keyword.operator.curry'}
      },
      name: 'string.quoted.quasi.curry'
    },
    record_declaration: {
      begin: '(\\{)(?!-)',
      beginCaptures: {
        1: {name: 'keyword.operator.curry punctuation.record.curry'}
      },
      end: '(?<!-)(\\})',
      endCaptures: {
        1: {name: 'keyword.operator.curry punctuation.record.curry'}
      },
      name: 'meta.declaration.record.curry',
      patterns: [{include: '#field_signature'}, {include: '#comments'}]
    },
    type: {
      patterns: [
        {match: '->|→', name: 'keyword.operator.arrow.curry'},
        {match: '=>|⇒', name: 'keyword.operator.big-arrow.curry'},
        {
          match:
            '\\b(Int(eger)?|Maybe|Either|Bool|Float|Double|Char|String|Ordering|ShowS|ReadS|FilePath|IO(Error)?)\\b',
          name: 'entity.name.type.curry support.type.curry'
        },
        {match: "(?<!')\\b[a-z][\\w']*\\b", name: 'variable.generic.curry'},
        {match: "(?<!')\\b[A-Z][\\w']*\\b", name: 'entity.name.type.curry'},
        {match: '\\(\\)', name: 'punctuation.unit.curry'},
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'keyword.operator.curry'}},
          end: '(\\))',
          endCaptures: {1: {name: 'keyword.operator.curry'}},
          name: 'meta.type_signature.brace.curry',
          patterns: [{include: '#type'}]
        },
        {
          begin: '(\\[)',
          beginCaptures: {1: {name: 'keyword.operator.curry'}},
          end: '(\\])',
          endCaptures: {1: {name: 'keyword.operator.curry'}},
          name: 'meta.type_signature.list.curry',
          patterns: [{include: '#type'}]
        },
        {include: '#comments'}
      ]
    },
    type_declaration: {
      begin: "^(\\s*)(type)\\s+([A-Z][\\w']*)?",
      beginCaptures: {
        2: {name: 'keyword.declaration.data.curry'},
        3: {name: 'constant.other.curry entity.name.type.curry'}
      },
      end: '^(?!\\1\\s)',
      name: 'meta.declaration.type.curry',
      patterns: [
        {include: '#comments'},
        {match: '=', name: 'keyword.operator.curry'},
        {include: '#type'}
      ]
    },
    type_declarations: {
      patterns: [
        {include: '#data_declaration'},
        {include: '#type_declaration'},
        {include: '#class_declaration'},
        {include: '#instance_declaration'}
      ]
    }
  },
  scopeName: 'source.curry'
}

export default grammar
