// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom-haskell/language-haskell>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.chs', '.dhall', '.hs', '.hs-boot', '.hsc'],
  names: ['c2hs', 'c2hs-haskell', 'dhall', 'frege', 'haskell'],
  patterns: [{include: '#haskell_source'}],
  repository: {
    arrow: {
      patterns: [
        {
          match:
            '(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:->|→)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))',
          name: 'keyword.other.arrow.haskell'
        }
      ]
    },
    assignment_op: {
      patterns: [
        {
          captures: {0: {name: 'keyword.operator.assignment.haskell'}},
          match: '='
        }
      ]
    },
    attribute_name: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'entity.other.attribute-name.haskell'
        }
      ]
    },
    big_arrow: {
      patterns: [
        {
          match:
            '(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:=>|⇒)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))',
          name: 'keyword.other.big-arrow.haskell'
        }
      ]
    },
    block_comment: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\{-\\s*[|^]',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.haddock.haskell'}
          },
          end: '-\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.haddock.haskell'}
          },
          name: 'comment.block.haddock.haskell',
          patterns: [{include: '#block_comment'}]
        },
        {
          applyEndPatternLast: true,
          begin: '\\{-',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.block.start.haskell'}
          },
          end: '-\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.block.end.haskell'}
          },
          name: 'comment.block.haskell',
          patterns: [{include: '#block_comment'}]
        }
      ]
    },
    c_preprocessor: {
      patterns: [
        {
          begin: '^(?=#)',
          end: '(?<!\\\\)(?=$)',
          name: 'meta.preprocessor.c.haskell',
          patterns: [{match: '^#\\S+', name: 'keyword.control.c.haskell'}]
        }
      ]
    },
    characters: {
      patterns: [
        {
          match:
            '\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])',
          name: 'constant.character.escape.haskell'
        },
        {
          match: '(?:\\\\o[0-7]+)',
          name: 'constant.character.escape.octal.haskell'
        },
        {
          match: '(?:\\\\x[0-9A-Fa-f]+)',
          name: 'constant.character.escape.hexadecimal.haskell'
        },
        {
          match: '(?:\\\\\\^[A-Z@\\[\\]\\\\^_])',
          name: 'constant.character.escape.control.haskell'
        }
      ]
    },
    class_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(class)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.class.haskell'}},
          end: "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(where)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|^(?!\\1[ \\t]|[ \\t]*$)",
          endCaptures: {1: {name: 'keyword.other.haskell'}},
          name: 'meta.declaration.class.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    comma: {
      patterns: [{match: ',', name: 'punctuation.separator.comma.haskell'}]
    },
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=--+\\s+[|^])',
          end: '(?!\\G)',
          patterns: [
            {
              begin: '(--+)\\s+([|^])(.*)',
              beginCaptures: {
                1: {name: 'punctuation.definition.comment.haskell'},
                2: {name: 'punctuation.definition.comment.haddock.haskell'},
                3: {name: 'comment.line.double-dash.haddock.haskell'}
              },
              end: '^(?!--+)',
              patterns: [
                {
                  captures: {
                    1: {name: 'punctuation.definition.comment.haskell'},
                    2: {name: 'comment.line.double-dash.haddock.haskell'}
                  },
                  match: '^(--+)(.*)'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(^[ \\t]+)?(?=--+(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))',
          end: '(?!\\G)',
          patterns: [
            {
              begin: '--+',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.haskell'}
              },
              end: '$',
              name: 'comment.line.double-dash.haskell'
            }
          ]
        },
        {include: '#block_comment'}
      ]
    },
    common_toplevel: {
      patterns: [
        {include: '#class_decl'},
        {include: '#instance_decl'},
        {include: '#deriving_instance_decl'},
        {include: '#foreign_import'},
        {include: '#regular_import'},
        {include: '#data_decl'},
        {include: '#type_alias'},
        {include: '#c_preprocessor'}
      ]
    },
    ctor_type_declaration: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(?:(?:((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*))(?:\\s*((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))))",
          beginCaptures: {
            2: {patterns: [{include: '#type_ctor'}, {include: '#infix_op'}]},
            3: {name: 'keyword.other.double-colon.haskell'}
          },
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.ctor.type-declaration.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    data_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(data|newtype)\\s+((?:(?!(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:=|--+)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))))|(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))where(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|{-).|{-.*?-})*)",
          beginCaptures: {
            2: {name: 'keyword.other.data.haskell'},
            3: {
              name: 'meta.type-signature.haskell',
              patterns: [
                {include: '#family_and_instance'},
                {include: '#type_signature'}
              ]
            }
          },
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.declaration.type.data.haskell',
          patterns: [
            {include: '#comments'},
            {include: '#string'},
            {include: '#where'},
            {include: '#deriving'},
            {include: '#via'},
            {include: '#assignment_op'},
            {include: '#type_ctor_forall'},
            {include: '#type_ctor_alt'},
            {
              captures: {0: {name: 'punctuation.separator.pipe.haskell'}},
              match: '\\|'
            },
            {
              begin: '\\{',
              beginCaptures: {
                0: {name: 'keyword.operator.record.begin.haskell'}
              },
              end: '\\}',
              endCaptures: {0: {name: 'keyword.operator.record.end.haskell'}},
              name: 'meta.declaration.type.data.record.block.haskell',
              patterns: [
                {include: '#comments'},
                {include: '#comma'},
                {include: '#record_field_declaration'}
              ]
            },
            {include: '#ctor_type_declaration'}
          ]
        }
      ]
    },
    deriving: {
      patterns: [
        {include: '#deriving_list'},
        {include: '#deriving_simple'},
        {include: '#deriving_keyword'}
      ]
    },
    deriving_instance_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(?:(?:(deriving)(?:\\s+([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))?)\\s+|(deriving)\\s+(via)\\s+(.*)\\s+)?(instance)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {
            2: {name: 'keyword.other.haskell'},
            3: {patterns: [{include: '#deriving_strategies'}]},
            4: {name: 'keyword.other.haskell'},
            5: {name: 'keyword.other.haskell'},
            6: {
              name: 'meta.type-signature.haskell',
              patterns: [{include: '#type_signature'}]
            },
            7: {name: 'keyword.other.haskell'}
          },
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.declaration.instance.deriving.haskell',
          patterns: [{include: '#pragma'}, {include: '#type_signature'}]
        }
      ]
    },
    deriving_keyword: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.haskell'},
            2: {patterns: [{include: '#deriving_strategies'}]}
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:(deriving)(?:\\s+([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))?)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'meta.deriving.haskell'
        }
      ]
    },
    deriving_list: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:(deriving)(?:\\s+([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))?)\\s*\\(",
          beginCaptures: {
            1: {name: 'keyword.other.haskell'},
            2: {patterns: [{include: '#deriving_strategies'}]}
          },
          end: '\\)',
          name: 'meta.deriving.haskell',
          patterns: [
            {
              captures: {1: {name: 'entity.other.inherited-class.haskell'}},
              match:
                "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))"
            }
          ]
        }
      ]
    },
    deriving_simple: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.haskell'},
            2: {patterns: [{include: '#deriving_strategies'}]},
            3: {name: 'entity.other.inherited-class.haskell'}
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:(deriving)(?:\\s+([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))?)\\s*([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'meta.deriving.haskell'
        }
      ]
    },
    deriving_strategies: {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.haskell'}},
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(stock|newtype|anyclass)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'meta.deriving.strategy.haskell'
        }
      ]
    },
    double_colon_operator: {
      patterns: [
        {
          match:
            '(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))',
          name: 'keyword.other.double-colon.haskell'
        }
      ]
    },
    empty_list: {
      patterns: [
        {match: '\\[\\]', name: 'constant.language.empty-list.haskell'}
      ]
    },
    family_and_instance: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(family|instance)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.other.haskell'
        }
      ]
    },
    foreign_import: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(foreign)\\s+(import|export)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {
            2: {name: 'keyword.other.haskell'},
            3: {name: 'keyword.other.haskell'}
          },
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.foreign.haskell',
          patterns: [
            {
              captures: {0: {name: 'keyword.other.haskell'}},
              match: '(?:un)?safe'
            },
            {include: '#function_type_declaration'},
            {include: '#haskell_expr'},
            {include: '#comments'}
          ]
        }
      ]
    },
    function_name: {
      patterns: [
        {
          captures: {0: {patterns: [{include: '#module_name_prefix'}]}},
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'entity.name.function.haskell'
        }
      ]
    },
    function_type_declaration: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(?:(?:((?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*)\\s*((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))))",
          beginCaptures: {
            2: {
              patterns: [{include: '#function_name'}, {include: '#infix_op'}]
            },
            3: {name: 'keyword.other.double-colon.haskell'}
          },
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1[ \\t]|[ \\t]*$)|(?=(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:<-|=)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))))',
          name: 'meta.function.type-declaration.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    function_type_declaration_with_scoped_type: {
      patterns: [
        {include: '#scoped_type_override'},
        {include: '#function_type_declaration'},
        {include: '#multiline_type_declaration'}
      ]
    },
    haskell_expr: {
      patterns: [
        {include: '#infix_function'},
        {include: '#unit'},
        {include: '#empty_list'},
        {include: '#quasi_quotes'},
        {include: '#keywords'},
        {include: '#pragma'},
        {include: '#string'},
        {include: '#newline_escape'},
        {include: '#quoted_character'},
        {include: '#comments'},
        {include: '#infix_op'},
        {include: '#comma'},
        {include: '#lit_num'},
        {include: '#scoped_type'},
        {include: '#type_application'},
        {include: '#operator'},
        {include: '#identifier'},
        {include: '#type_ctor'}
      ]
    },
    haskell_source: {
      patterns: [
        {include: '#shebang'},
        {include: '#module_decl'},
        {include: '#haskell_toplevel'}
      ]
    },
    haskell_toplevel: {
      patterns: [
        {include: '#liquidhaskell_annotation'},
        {include: '#common_toplevel'},
        {include: '#function_type_declaration_with_scoped_type'},
        {include: '#haskell_expr'}
      ]
    },
    hsig_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(signature)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.haskell'}},
          end: "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(where)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|^(?!\\1[ \\t]|[ \\t]*$)",
          endCaptures: {1: {name: 'keyword.other.haskell'}},
          name: 'meta.declaration.module.haskell',
          patterns: [
            {include: '#comments'},
            {include: '#module_name'},
            {include: '#module_exports'},
            {include: '#invalid'}
          ]
        }
      ]
    },
    hsig_source: {
      patterns: [{include: '#hsig_decl'}, {include: '#hsig_toplevel'}]
    },
    hsig_toplevel: {
      patterns: [
        {include: '#common_toplevel'},
        {include: '#function_type_declaration'},
        {include: '#lazy_function_type_signature'},
        {include: '#comments'}
      ]
    },
    identifier: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {include: '#module_name_prefix'},
                {
                  match:
                    "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(abs|acos|acosh|all|and|any|appendFile|asTypeOf|asin|asinh|atan|atan2|atanh|break|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|errorWithoutStackTrace|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldMap|foldl|foldl1|foldr|foldr1|fromEnum|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|head|id|init|interact|ioError|isDenormalized|isIEEE|isInfinite|isNaN|isNegativeZero|iterate|last|lcm|length|lex|lines|log|logBase|lookup|map|mapM|mapM_|mappend|max|maxBound|maximum|maybe|mconcat|mempty|min|minBound|minimum|mod|negate|not|notElem|null|odd|or|otherwise|pi|pred|print|product|properFraction|pure|putChar|putStr|putStrLn|quot|quotRem|read|readFile|readIO|readList|readLn|readParen|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequenceA|sequence_|show|showChar|showList|showParen|showString|shows|showsPrec|significand|signum|sin|sinh|snd|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|toEnum|toInteger|toRational|traverse|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
                  name: 'support.function.prelude.$1.haskell'
                }
              ]
            }
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'identifier.haskell'
        }
      ]
    },
    infix_function: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.haskell'},
            2: {name: 'punctuation.definition.entity.haskell'}
          },
          match:
            "(`)(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(`)",
          name: 'keyword.operator.function.infix.haskell'
        }
      ]
    },
    infix_op: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {include: '#module_name_prefix'},
                {
                  match:
                    '^\\((\\!\\!|\\$\\!|\\$|\\&\\&|\\*|\\*\\*|\\*\\>|\\+|\\+\\+|\\-|\\.|\\/|\\/\\=|\\<\\$|\\<\\$\\>|\\<|\\<\\*|\\<\\*\\>|\\<\\=|\\=\\<\\<|\\=\\=|\\>|\\>\\=|\\>\\>|\\>\\>\\=|\\^|\\^\\^|\\|\\|)\\)$',
                  name: 'support.operator.prelude.haskell'
                }
              ]
            }
          },
          match:
            "(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))",
          name: 'entity.name.function.operator.haskell'
        }
      ]
    },
    instance_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(instance)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.haskell'}},
          contentName: 'meta.type-signature.haskell',
          end: "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(where)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|^(?!\\1[ \\t]|[ \\t]*$)",
          endCaptures: {1: {name: 'keyword.other.haskell'}},
          name: 'meta.declaration.instance.haskell',
          patterns: [{include: '#pragma'}, {include: '#type_signature'}]
        }
      ]
    },
    invalid: {
      patterns: [
        {
          match: '\\S+',
          name: 'invalid.illegal.character-not-allowed-here.haskell'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(deriving|where|data|type|newtype|pattern)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.other.$1.haskell'
        },
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(infix[lr]?)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.operator.$1.haskell'
        },
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(do|if|then|else|case|of|let|in|default|mdo|rec|proc)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.control.$1.haskell'
        }
      ]
    },
    lazy_function_type_signature: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(((?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*))\\s*$",
          beginCaptures: {
            2: {patterns: [{include: '#function_name'}, {include: '#infix_op'}]}
          },
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.function.type-declaration.haskell',
          patterns: [
            {include: '#double_colon_operator'},
            {include: '#type_signature'}
          ]
        }
      ]
    },
    liquidhaskell_annotation: {
      patterns: [
        {
          begin: '\\{-@(?!#)',
          contentName: 'block.liquidhaskell.annotation.haskell',
          end: '@-\\}',
          name: 'block.liquidhaskell.haskell',
          patterns: [{include: 'annotation.liquidhaskell.haskell'}]
        }
      ]
    },
    lit_num: {
      patterns: [
        {
          match:
            '0[xX][0-9a-fA-F_]*(?:\\.[0-9a-fA-F_]+(?:[pP][+-]?[0-9_]+)?|[pP][+-]?[0-9_]+)',
          name: 'constant.numeric.hexfloat.haskell'
        },
        {
          match: '0[xX][_0-9a-fA-F]+',
          name: 'constant.numeric.hexadecimal.haskell'
        },
        {match: '0[oO][_0-7]+', name: 'constant.numeric.octal.haskell'},
        {match: '0[bB][_01]+', name: 'constant.numeric.binary.haskell'},
        {
          match:
            '[0-9][0-9_]*(?:\\.[0-9_]+(?:[eE][+-]?[0-9_]+)?|[eE][+-]?[0-9_]+)',
          name: 'constant.numeric.float.haskell'
        },
        {match: '[0-9][_0-9]*', name: 'constant.numeric.decimal.haskell'}
      ]
    },
    module_decl: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(module)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.haskell'}},
          end: "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(where)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|^(?!\\1[ \\t]|[ \\t]*$)",
          endCaptures: {1: {name: 'keyword.other.haskell'}},
          name: 'meta.declaration.module.haskell',
          patterns: [
            {include: '#pragma'},
            {include: '#comments'},
            {include: '#module_name'},
            {include: '#module_exports'},
            {include: '#invalid'}
          ]
        }
      ]
    },
    module_exports: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\(',
          end: '\\)',
          name: 'meta.declaration.exports.haskell',
          patterns: [
            {include: '#comments'},
            {include: '#c_preprocessor'},
            {
              begin:
                "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(module)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
              beginCaptures: {1: {name: 'keyword.other.haskell'}},
              end: "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
              endCaptures: {1: {name: 'support.other.module.haskell'}},
              patterns: [{include: '#invalid'}]
            },
            {include: '#pattern_name'},
            {include: '#type_exportImport'},
            {include: '#function_name'},
            {include: '#type_name'},
            {include: '#comma'},
            {include: '#infix_op'},
            {
              begin: '\\(',
              end: '\\)',
              name: 'meta.other.constructor-list.haskell',
              patterns: [
                {include: '#comments'},
                {include: '#c_preprocessor'},
                {include: '#type_ctor'},
                {include: '#attribute_name'},
                {include: '#comma'},
                {match: '\\.\\.', name: 'keyword.operator.wildcard.haskell'},
                {include: '#infix_op'}
              ]
            }
          ]
        }
      ]
    },
    module_name: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'support.other.module.haskell'
        }
      ]
    },
    module_name_prefix: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.",
          name: 'support.other.module.haskell'
        }
      ]
    },
    multiline_type_declaration: {
      patterns: [
        {
          begin:
            '^([ \\t]*)((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))))',
          beginCaptures: {2: {name: 'keyword.other.double-colon.haskell'}},
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1|[ \\t]*$)|(?=(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:<-|=)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))))',
          name: 'meta.multiline.type-declaration.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    newline_escape: {
      patterns: [{match: '\\\\$', name: 'markup.other.escape.newline.haskell'}]
    },
    operator: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {include: '#module_name_prefix'},
                {
                  match:
                    '^(\\!\\!|\\$\\!|\\$|\\&\\&|\\*|\\*\\*|\\*\\>|\\+|\\+\\+|\\-|\\.|\\/|\\/\\=|\\<\\$|\\<\\$\\>|\\<|\\<\\*|\\<\\*\\>|\\<\\=|\\=\\<\\<|\\=\\=|\\>|\\>\\=|\\>\\>|\\>\\>\\=|\\^|\\^\\^|\\|\\|)$',
                  name: 'support.operator.prelude.haskell'
                }
              ]
            }
          },
          match:
            "(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+",
          name: 'keyword.operator.haskell'
        }
      ]
    },
    pattern_name: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#type_ctor'}, {include: '#infix_op'}]}
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(pattern)\\s+([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))",
          name: 'meta.declaration.export.qualified.pattern.haskell'
        }
      ]
    },
    pragma: {
      patterns: [
        {
          begin: '\\{-#',
          end: '#-\\}',
          name: 'meta.preprocessor.haskell',
          patterns: [
            {
              match:
                "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))((?i:NOTINLINE CONSTRUCTORLIKE|NOINLINE CONSTRUCTORLIKE|INLINE CONSTRUCTORLIKE|SPECIALISE NOTINLINE|SPECIALIZE NOTINLINE|SPECIALISE NOINLINE|SPECIALIZE NOINLINE|NOTINLINE CONLIKE|SPECIALISE INLINE|SPECIALIZE INLINE|NOINLINE CONLIKE|VECTORISE SCALAR|VECTORIZE SCALAR|OPTIONS_HADDOCK|INLINE CONLIKE|OPTIONS_DERIVE|OPTIONS_CATCH|OPTIONS_NHC98|OPTIONS_HUGS|OVERLAPPABLE|NOVECTORISE|NOVECTORIZE|OPTIONS_GHC|OPTIONS_JHC|OPTIONS_YHC|OVERLAPPING|DEPRECATED|INCOHERENT|INLINEABLE|SPECIALISE|SPECIALIZE|GENERATED|INLINABLE|NOTINLINE|VECTORISE|VECTORIZE|COMPLETE|CONTRACT|LANGUAGE|NOINLINE|NOUNPACK|OVERLAPS|INCLUDE|MINIMAL|OPTIONS|WARNING|CFILES|COLUMN|INLINE|SOURCE|UNPACK|CTYPE|RULES|CORE|LINE|ANN|SCC))(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
              name: 'keyword.other.preprocessor.$1.haskell'
            }
          ]
        }
      ]
    },
    quasi_quotes: {
      patterns: [
        {
          begin:
            "(\\[)((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))(\\|)",
          beginCaptures: {
            1: {name: 'punctuation.definition.quasiquotes.begin.haskell'},
            2: {
              name: 'entity.name.tag.haskell',
              patterns: [{include: '#module_name_prefix'}]
            }
          },
          contentName: 'quoted.quasiquotes.qq-$3.haskell',
          end: '(\\|)(\\])',
          endCaptures: {
            2: {name: 'punctuation.definition.quasiquotes.end.haskell'}
          }
        }
      ]
    },
    quoted_character: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.haskell'},
            2: {patterns: [{include: '#characters'}]},
            3: {name: 'punctuation.definition.string.end.haskell'}
          },
          match:
            "(')((?:[\\ -\\[\\]-~]|\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\"'\\&])|(?:\\\\o[0-7]+)|(?:\\\\x[0-9A-Fa-f]+)|(?:\\\\\\^[A-Z@\\[\\]\\\\^_])|(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))))(')",
          name: 'string.quoted.single.haskell'
        }
      ]
    },
    record_field_declaration: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:(?:((?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*)\\s*((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))))",
          beginCaptures: {
            1: {
              patterns: [{include: '#attribute_name'}, {include: '#infix_op'}]
            },
            2: {name: 'keyword.other.double-colon.haskell'}
          },
          contentName: 'meta.type-signature.haskell',
          end: "(?=(?:(?:((?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*)\\s*((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))))|})",
          name: 'meta.record-field.type-declaration.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    regular_import: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(import)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.haskell'}},
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.import.haskell',
          patterns: [
            {include: '#module_name'},
            {include: '#module_exports'},
            {
              captures: {1: {name: 'keyword.other.haskell'}},
              match:
                "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(qualified|as|hiding)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))"
            },
            {include: '#comments'}
          ]
        }
      ]
    },
    scoped_type: {
      patterns: [
        {
          captures: {1: {patterns: [{include: '#haskell_expr'}]}},
          match:
            '\\(((?<paren>(?:(?!\\(|\\)).|\\(\\g<paren>\\))*)(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))(?<paren2>(?:(?!\\(|\\)).|\\(\\g<paren2>\\))*))\\)'
        },
        {
          captures: {
            1: {name: 'keyword.other.double-colon.haskell'},
            2: {
              name: 'meta.type-signature.haskell',
              patterns: [{include: '#type_signature'}]
            }
          },
          match:
            '((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))))((?:(?!{-|(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:<-|=|--+)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))|$).|{-.*?-})*)'
        }
      ]
    },
    scoped_type_override: {
      patterns: [
        {
          captures: {
            2: {patterns: [{include: '#identifier'}]},
            3: {name: 'keyword.other.double-colon.haskell'},
            4: {
              name: 'meta.type-signature.haskell',
              patterns: [{include: '#type_signature'}]
            },
            5: {patterns: [{include: '#assignment_op'}, {include: '#operator'}]}
          },
          match:
            "^([ \\t]*)(?:(?:((?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))(?:(?:\\s*,\\s*)(?:(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\))))*)\\s*((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:::|∷)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))))((?:(?!{-|(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:--+)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))))).|{-.*?-})*)((?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))(?:<-|=)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"'])))))"
        }
      ]
    },
    shebang: {
      patterns: [
        {
          match: '^\\#\\!.*\\brunhaskell\\b.*$',
          name: 'comment.line.shebang.haskell'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.haskell'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.haskell'}},
          name: 'string.quoted.double.haskell',
          patterns: [
            {include: '#characters'},
            {
              begin: '\\\\\\s',
              beginCaptures: {
                0: {name: 'markup.other.escape.newline.begin.haskell'}
              },
              end: '\\\\',
              endCaptures: {
                0: {name: 'markup.other.escape.newline.end.haskell'}
              },
              patterns: [{include: '#invalid'}]
            }
          ]
        }
      ]
    },
    type_alias: {
      patterns: [
        {
          begin:
            "^([ \\t]*)(type)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {2: {name: 'keyword.other.type.haskell'}},
          contentName: 'meta.type-signature.haskell',
          end: '^(?!\\1[ \\t]|[ \\t]*$)',
          name: 'meta.declaration.type.type.haskell',
          patterns: [
            {include: '#comments'},
            {include: '#family_and_instance'},
            {include: '#where'},
            {include: '#assignment_op'},
            {include: '#type_signature'}
          ]
        }
      ]
    },
    type_application: {
      patterns: [
        {
          captures: {
            2: {patterns: [{include: '#operator'}]},
            3: {patterns: [{include: '#type_signature'}]}
          },
          match:
            '(<?\\s+)(@)(\\\'?\\((?<paren>(?:(?!\\(|\\)).|\\(\\g<paren>\\))*)\\)|\\\'?\\[(?<brack>(?:(?!\\[|\\]).|\\[\\g<brack>\\])*)\\]|"(?<quot>(?:(?!"|").|"\\g<quot>")*)"|\'(?:[\\ -\\[\\]-~]|\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])|(?:\\\\o[0-7]+)|(?:\\\\x[0-9A-Fa-f]+)|(?:\\\\\\^[A-Z@\\[\\]\\\\^_])|(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))\'|\\S+)',
          name: 'other.type-application.haskell'
        }
      ]
    },
    type_ctor: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {include: '#module_name_prefix'},
                {
                  match:
                    "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(EQ|GT|LT|Left|Right|True|False)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
                  name: 'support.tag.prelude.$1.haskell'
                }
              ]
            }
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'entity.name.tag.haskell'
        }
      ]
    },
    type_ctor_alt: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)\\s*",
          beginCaptures: {1: {patterns: [{include: '#type_ctor'}]}},
          contentName: 'meta.type-signature.haskell',
          end: "^(?!^[ \\t]|[ \\t]*$)|(?=\\{|\\}|\\||(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))deriving(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])))",
          patterns: [{include: '#comments'}, {include: '#type_signature'}]
        }
      ]
    },
    type_ctor_forall: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))forall(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          beginCaptures: {0: {patterns: [{include: '#type_signature'}]}},
          contentName: 'meta.type-signature.haskell',
          end: "^(?!^[ \\t]|[ \\t]*$)|(?=\\{|\\}|\\||(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))deriving(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])))",
          patterns: [
            {include: '#comments'},
            {
              captures: {0: {patterns: [{include: '#type_signature'}]}},
              match:
                '\\G.*?(?:(?<!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\'])))(?:=>|⇒)(?!(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_"\']))))'
            },
            {
              captures: {0: {patterns: [{include: '#type_signature'}]}},
              match: '\\G.*?\\.'
            },
            {include: '#big_arrow'},
            {include: '#type_variable'},
            {
              begin: '\\(',
              end: '\\)',
              patterns: [{include: '#type_signature'}]
            },
            {include: '#type_ctor_alt'}
          ]
        }
      ]
    },
    type_exportImport: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#keywords'}]},
            2: {patterns: [{include: '#type_name'}, {include: '#operator'}]}
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(type)\\s+([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))|(?:\\((?!--+\\)|\\.\\.\\))(?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+\\)))",
          name: 'meta.declaration.export.qualified.type.haskell'
        }
      ]
    },
    type_name: {
      patterns: [
        {
          captures: {
            0: {
              patterns: [
                {include: '#module_name_prefix'},
                {
                  match:
                    "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(Applicative|Bounded|Enum|Eq|Floating|Foldable|Fractional|Functor|Integral|Monad|Monoid|Num|Ord|Read|Real|RealFloat|RealFrac|Show|Traversable)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
                  name: 'entity.other.inherited-class.prelude.$1.haskell'
                },
                {
                  match:
                    "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(Either|FilePath|IO|IOError|Integer|Ordering|Rational|ReadS|ShowS|String|Bool|Char|Double|Float|Int|Just|Maybe|Nothing|Word)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
                  name: 'support.class.prelude.$1.haskell'
                }
              ]
            }
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'entity.name.type.haskell'
        }
      ]
    },
    type_signature: {
      patterns: [
        {include: '#pragma'},
        {include: '#comments'},
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))forall(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.other.forall.haskell'
        },
        {include: '#quoted_character'},
        {
          captures: {1: {patterns: [{include: '#unit'}]}},
          match: "'(\\(\\))",
          name: 'other.promoted.haskell'
        },
        {include: '#unit'},
        {
          captures: {1: {patterns: [{include: '#empty_list'}]}},
          match: "'(\\[\\])",
          name: 'other.promoted.haskell'
        },
        {include: '#empty_list'},
        {include: '#string'},
        {include: '#arrow'},
        {include: '#big_arrow'},
        {
          captures: {1: {patterns: [{include: '#operator'}]}},
          match:
            "'((?:(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?(?:[\\p{S}\\p{P}](?<![(),;\\[\\]`{}_\"']))+)",
          name: 'other.promoted.haskell'
        },
        {include: '#operator'},
        {include: '#type_variable'},
        {
          captures: {1: {patterns: [{include: '#type_name'}]}},
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}'])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))'([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'other.promoted.haskell'
        },
        {include: '#type_name'},
        {include: '#lit_num'}
      ]
    },
    type_variable: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'variable.other.generic-type.haskell'
        }
      ]
    },
    unit: {
      patterns: [{match: '\\(\\)', name: 'constant.language.unit.haskell'}]
    },
    via: {
      patterns: [
        {include: '#via_list'},
        {include: '#via_list_newline'},
        {include: '#via_indent'},
        {include: '#via_simple'},
        {include: '#via_keyword'}
      ]
    },
    via_indent: {
      patterns: [
        {
          begin: '^([ \\t]*)(via)\\s*',
          beginCaptures: {2: {name: 'keyword.other.haskell'}},
          end: '^(?!\\1|[ \\t]*$)',
          name: 'meta.via.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    via_keyword: {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.haskell'}},
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(via)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'meta.via.haskell'
        }
      ]
    },
    via_list: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(via)\\s*\\(",
          beginCaptures: {1: {name: 'keyword.other.haskell'}},
          end: '\\)',
          name: 'meta.via.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    via_list_newline: {
      patterns: [
        {
          begin:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(via)\\s*",
          beginCaptures: {1: {name: 'keyword.other.haskell'}},
          end: '$',
          name: 'meta.via.haskell',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    via_simple: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.haskell'},
            2: {patterns: [{include: '#type_signature'}]}
          },
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))(via)\\s*([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*)(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'meta.via.haskell'
        }
      ]
    },
    where: {
      patterns: [
        {
          match:
            "(?:(?=[\\p{Ll}_\\p{Lu}\\p{Lt}])(?<![\\p{Ll}_\\p{Lu}\\p{Lt}']))where(?:(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']))",
          name: 'keyword.other.haskell'
        }
      ]
    }
  },
  scopeName: 'source.haskell'
}

export default grammar
