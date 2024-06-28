// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/B-Lang-org/language-bh>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['bluespec-bh', 'bh', 'bluespec-classic'],
  patterns: [
    {include: '#comment_like'},
    {include: '#numeric_literals'},
    {include: '#string_literal'},
    {include: '#char_literal'},
    {match: '(?<!@|#)-\\}', name: 'invalid'},
    {
      captures: {
        1: {name: 'punctuation.paren.bh'},
        2: {name: 'punctuation.paren.bh'}
      },
      match: '(\\()\\s*(\\))',
      name: 'constant.language.unit.bh'
    },
    {
      captures: {
        1: {name: 'punctuation.paren.bh'},
        2: {name: 'keyword.operator.hash.bh'},
        3: {name: 'keyword.operator.hash.bh'},
        4: {name: 'punctuation.paren.bh'}
      },
      match: '(\\()(#)\\s*(#)(\\))',
      name: 'constant.language.unit.unboxed.bh'
    },
    {
      captures: {
        1: {name: 'punctuation.paren.bh'},
        2: {name: 'punctuation.paren.bh'}
      },
      match: '(\\()\\s*,[\\s,]*(\\))',
      name: 'support.constant.tuple.bh'
    },
    {
      captures: {
        1: {name: 'punctuation.paren.bh'},
        2: {name: 'keyword.operator.hash.bh'},
        3: {name: 'keyword.operator.hash.bh'},
        4: {name: 'punctuation.paren.bh'}
      },
      match: '(\\()(#)\\s*,[\\s,]*(#)(\\))',
      name: 'support.constant.tuple.unboxed.bh'
    },
    {
      captures: {
        1: {name: 'punctuation.bracket.bh'},
        2: {name: 'punctuation.bracket.bh'}
      },
      match: '(\\[)\\s*(\\])',
      name: 'constant.language.empty-list.bh'
    },
    {
      begin: "(\\b(?<!')(package)|^(signature))(\\b(?!'))",
      beginCaptures: {
        2: {name: 'keyword.other.package.bh'},
        3: {name: 'keyword.other.signature.bh'}
      },
      end: "(?=\\b(?<!')where\\b(?!'))",
      name: 'meta.declaration.package.bh',
      patterns: [
        {include: '#comment_like'},
        {include: '#package_name'},
        {include: '#package_exports'},
        {match: '[a-z]+', name: 'invalid'}
      ]
    },
    {include: '#ffi'},
    {
      begin: "^(\\s*)(class)(\\s+(:?in?)coherent)?(\\b(?!'))",
      beginCaptures: {
        2: {name: 'keyword.other.class.bh'},
        3: {name: 'keyword.other.coherent.bh'}
      },
      end: "(?x) # Detect end of class declaration:\n         # 'where' keyword\n   (?=(?<!')\\bwhere\\b(?!'))  \n         # Decreasing indentation\n   |(?=\\}|;)      # Explicit indentation\n   |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n       \\1\\s+\\S    # - more indented, or\n     | \\s*        # - starts with whitespace, followed by:\n       (?: $      #   - the end of the line (i.e. empty line), or\n       |\\{-[^@]   #   - the start of a block comment, or\n       |--+       #   - the start of a single-line comment.\n          (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_\"']]).*$) # non-symbol\n                  # The double dash may not be followed by other operator characters\n                  # (then it would be an operator, not a comment)\n     )",
      name: 'meta.declaration.class.bh',
      patterns: [
        {include: '#comment_like'},
        {include: '#where'},
        {include: '#type_signature'}
      ]
    },
    {include: '#role_annotation'},
    {
      begin:
        '^(\\s*)(pattern)\\s+(.*?)\\s+(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])',
      beginCaptures: {
        2: {name: 'keyword.other.pattern.bh'},
        3: {patterns: [{include: '#comma'}, {include: '#data_constructor'}]},
        4: {name: 'keyword.operator.double-colon.bh'}
      },
      end: '(?x) # Detect end of pattern type definition by decreasing indentation:\n  (?=\\}|;)       # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
      name: 'meta.declaration.pattern.type.bh',
      patterns: [{include: '#type_signature'}]
    },
    {
      begin: "^\\s*(pattern)\\b(?!')",
      captures: {1: {name: 'keyword.other.pattern.bh'}},
      end: '(?x) # Detect end of pattern type definition by decreasing indentation:\n  (?=\\}|;)       # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
      name: 'meta.declaration.pattern.bh',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?x)\n  # Data declaration\n  ^(\\s*)(data|newtype|interface|struct)\\s+\n  # Keep consuming characters until:\n  (((?!\n  # the equals symbol or the start of a single-line comment, or\n    (?: \n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]) # non-symbol\n      (?:=|--+)\n      (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])  # non-symbol\n    )\n  # the "where" or "deriving" keywords, or\n  | (?:\\b(?<!\')(?:where|deriving)\\b(?!\'))\n  # the start of a block comment.\n  | {-\n  #\n  ).)*)',
      beginCaptures: {
        2: {name: 'keyword.other.$2.bh'},
        3: {name: 'keyword.other.$3.bh'},
        4: {patterns: [{include: '#type_signature'}]}
      },
      end: '(?x) # Detect end of data declaration: \n     # Decreasing indentation\n   (?=\\}|;)      # Explicit indentation\n   |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n       \\1\\s+\\S    # - more indented, or\n     | \\s*        # - starts with whitespace, followed by:\n       (?: $      #   - the end of the line (i.e. empty line), or\n       |\\{-[^@]   #   - the start of a block comment, or\n       |--+       #   - the start of a single-line comment.\n          (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                  # The double dash may not be followed by other operator characters\n                  # (then it would be an operator, not a comment)\n     )',
      name: 'meta.declaration.$2.algebraic.bh',
      patterns: [
        {include: '#comment_like'},
        {include: '#deriving'},
        {include: '#forall'},
        {include: '#adt_constructor'},
        {include: '#data_context'},
        {include: '#record_decl'},
        {include: '#type_signature'}
      ]
    },
    {
      begin:
        '(?x)\n  # Type declaration\n  ^(\\s*)(type)(?:\\s+(instance))?\\s+\n  # Keep consuming characters until:\n  (((?!\n  # the equals symbol, the start of a single-line comment, or a type signature\n    (?: \n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]) # non-symbol\n      (?:=|--+|::|∷)\n      (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])  # non-symbol\n    )\n  # the start of a block comment.\n  | {-\n  #\n  ).)*)',
      beginCaptures: {
        2: {name: 'keyword.other.type.bh'},
        3: {name: 'keyword.other.instance.bh'},
        4: {patterns: [{include: '#type_signature'}]}
      },
      end: '(?x) # Detect end of type definition by decreasing indentation:\n  (?=\\}|;)       # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
      name: 'meta.declaration.type.bh',
      patterns: [{include: '#type_signature'}]
    },
    {
      begin: "^(\\s*)(instance)(\\b(?!'))",
      beginCaptures: {2: {name: 'keyword.other.instance.bh'}},
      end: "(?x) # Detect end of instance declaration:\n  # 'where' keyword\n  (?=\\b(?<!')(where)\\b(?!'))\n  # Decreasing indentation\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_\"']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n",
      name: 'meta.declaration.instance.bh',
      patterns: [
        {include: '#comment_like'},
        {include: '#where'},
        {include: '#type_signature'}
      ]
    },
    {
      begin: "^(\\s*)(import)(\\b(?!'))",
      beginCaptures: {2: {name: 'keyword.other.import.bh'}},
      end: "(?x) # Detect end of import\n  # 'where' keyword\n  (?=\\b(?<!')(where)\\b(?!'))\n  # Decreasing indentation\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_\"']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n",
      name: 'meta.import.bh',
      patterns: [
        {include: '#comment_like'},
        {include: '#where'},
        {
          captures: {1: {name: 'keyword.other.$1.bh'}},
          match: '(qualified|as|hiding)'
        },
        {include: '#package_name'},
        {include: '#package_exports'}
      ]
    },
    {include: '#deriving'},
    {include: '#layout_herald'},
    {include: '#keyword'},
    {
      captures: {
        1: {name: 'keyword.other.fixity.$1.bh'},
        2: {
          patterns: [
            {include: '#comment_like'},
            {include: '#integer_literals'},
            {
              match: ':[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*',
              name: 'constant.other.operator.infix.bh'
            },
            {include: '#infix_op'}
          ]
        }
      },
      match: '^\\s*(infix[lr]?)\\s+(.*)',
      name: 'meta.fixity-declaration.bh'
    },
    {include: '#start_type_signature'},
    {include: '#overloaded_label'},
    {include: '#type_application'},
    {include: '#reserved_symbol'},
    {include: '#fun_decl'},
    {include: '#qualifier'},
    {
      match: ':[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*',
      name: 'constant.other.operator.infix.bh'
    },
    {include: '#data_constructor'},
    {include: '#prefix_op'},
    {include: '#infix_op'},
    {
      begin: '(\\()(#)\\s',
      beginCaptures: {
        1: {name: 'punctuation.paren.bh'},
        2: {name: 'keyword.operator.hash.bh'}
      },
      end: '(#)(\\))',
      endCaptures: {
        1: {name: 'keyword.operator.hash.bh'},
        2: {name: 'punctuation.paren.bh'}
      },
      patterns: [{include: '#comma'}, {include: '$self'}]
    },
    {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.paren.bh'}},
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.paren.bh'}},
      patterns: [{include: '#comma'}, {include: '$self'}]
    },
    {include: '#quasi_quote'},
    {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.bracket.bh'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.bracket.bh'}},
      patterns: [{include: '#comma'}, {include: '$self'}]
    },
    {include: '#record'}
  ],
  repository: {
    adt_constructor: {
      patterns: [
        {include: '#comment_like'},
        {
          begin:
            '(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]) # non-symbol\n  (?:(=)|(\\|))\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])  # non-symbol',
          beginCaptures: {
            1: {name: 'keyword.operator.eq.bh'},
            2: {name: 'keyword.operator.pipe.bh'}
          },
          end: "(?x)\n  (?: # Infix data constructor\n    # First argument\n    (?:\n    # Simple type\n      (?<!')\\b((?:[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'\\.])+)\n    # Type inside balanced parentheses\n    | ('? # Optional promotion tick\n        (?<paren>\n          \\(          # Opening parenthesis\n          (?:\n            [^\\(\\)]*  # Match non-parentheses\n          | \\g<paren> # or recurse into further depth\n          )*\n          \\)          # Closing parenthesis\n        )\n      )\n    # Type inside balanced brackets\n    | ('? # Optional promotion tick\n        (?<brac>\n          \\[          # Opening bracket\n          (?:\n            [^\\[\\]]*  # Match non-brackets\n          | \\g<brac>  # or recurse into further depth\n          )*\n          \\]          # Closing bracket\n        )\n      )\n    )\n    # Then either\n    \\s*\n      # - a symbolic infix constructor, or\n    (?:(?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]*)\n      # - an alphabetic infix constructor\n    | (`)([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)(`)\n    )\n  ) # Otherwise, prefix data constructor, either:\n  | # - an alphabetic data constructor e.g. \"Cons_123\"\n    (?:(?<!')\\b([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))\n  | # - a symbolic (prefix) data constructor\n    (\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]*)\\s*(\\))\n  | # Otherwise, try to fail early to avoid excessive backtracking (https://github.com/JustusAdam/language-bh/issues/161)\n      # Fail when detecting a lowercase identifier and then something not starting with a tick or colon\n      (?=\\b(?<!')(?!(?:forall|deriving)\\s)[\\p{Ll}_]\\S+\\s+[^`:])\n      # Fail when seeing another equal signs or pipe symbol\n     |(?=\n        (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]) # non-symbol\n        (?:=|\\|)\n        (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])  # non-symbol\n      )",
          endCaptures: {
            1: {patterns: [{include: '#type_signature'}]},
            10: {name: 'constant.other.bh'},
            11: {name: 'punctuation.paren.bh'},
            12: {name: 'constant.other.operator.prefix.bh'},
            13: {name: 'punctuation.paren.bh'},
            2: {patterns: [{include: '#type_signature'}]},
            4: {patterns: [{include: '#type_signature'}]},
            6: {name: 'constant.other.operator.infix.bh'},
            7: {name: 'punctuation.backtick.bh'},
            8: {name: 'constant.other.infix.bh'},
            9: {name: 'punctuation.backtick.bh'}
          },
          patterns: [
            {include: '#comment_like'},
            {include: '#deriving'},
            {include: '#record_decl'},
            {include: '#forall'},
            {include: '#data_context'},
            {include: '#type_signature'}
          ]
        }
      ]
    },
    block_comment: {
      applyEndPatternLast: true,
      begin: '\\{-',
      captures: {0: {name: 'punctuation.definition.comment.bh'}},
      end: '-\\}',
      name: 'comment.block.bh',
      patterns: [{include: '#block_comment'}]
    },
    char_literal: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.bh'},
        2: {name: 'constant.character.escape.bh'},
        3: {name: 'constant.character.escape.octal.bh'},
        4: {name: 'constant.character.escape.hexadecimal.bh'},
        5: {name: 'constant.character.escape.control.bh'},
        6: {name: 'punctuation.definition.string.end.bh'}
      },
      match:
        "(?x)\n  (?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])\n  (')\n  (?:\n    [\\ -\\[\\]-~]                         # Basic Char\n  | (\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE\n       |DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS\n       |US|SP|DEL|[abfnrtv\\\\\\\"'\\\\&]))   # Escapes\n  | (\\\\o[0-7]+)                         # Octal Escapes\n  | (\\\\x[0-9A-Fa-f]+)                   # Hexadecimal Escapes\n  | (\\\\\\^[A-Z@\\[\\]\\\\\\^_])                 # Control Chars\n  )\n  (')\n",
      name: 'string.quoted.single.bh'
    },
    comma: {match: ',', name: 'punctuation.separator.comma.bh'},
    comment_like: {
      patterns: [
        {include: '#cpp'},
        {include: '#pragma'},
        {include: '#comments'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '^(\\s*)(--\\s[\\|\\$])',
          beginCaptures: {
            2: {name: 'punctuation.whitespace.comment.leading.bh'}
          },
          end: '(?=^(?!\\1--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])))',
          name: 'comment.block.documentation.bh'
        },
        {
          begin: '(^[ \\t]+)?(--(@)\\s)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.bh'}
          },
          end: '\\n',
          name: 'comment.line.documentation.bh'
        },
        {
          applyEndPatternLast: true,
          begin: '\\{-\\s?[\\|\\$\\*\\^]',
          captures: {0: {name: 'punctuation.definition.comment.bh'}},
          end: '-\\}',
          name: 'comment.block.documentation.bh',
          patterns: [{include: '#block_comment'}]
        },
        {
          begin: '(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.bh'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '--',
              beginCaptures: {0: {name: 'punctuation.definition.comment.bh'}},
              end: '\\n',
              name: 'comment.line.double-dash.bh'
            }
          ]
        },
        {include: '#block_comment'}
      ]
    },
    cpp: {
      captures: {1: {name: 'punctuation.definition.preprocessor.c'}},
      match: '^(#).*$',
      name: 'meta.preprocessor.c'
    },
    data_constructor: {
      patterns: [
        {
          match:
            "\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?![\\.'\\w])",
          name: 'constant.other.bh'
        },
        {
          match: '(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*)\\s*(\\))',
          name: 'constant.other.operator.bh'
        }
      ]
    },
    data_context: {
      captures: {
        1: {
          patterns: [
            {include: '#comment_like'},
            {include: '#forall'},
            {
              begin: "(?='?\\()",
              end: '(?=\\))',
              patterns: [{include: '#type_signature'}]
            },
            {
              begin: "(?='?\\[)",
              end: '(?=\\])',
              patterns: [{include: '#type_signature'}]
            },
            {
              captures: {
                1: {
                  patterns: [
                    {include: '#comment_like'},
                    {include: '#forall'},
                    {include: '#record_decl_field'}
                  ]
                },
                2: {patterns: [{include: '#reserved_symbol'}]},
                3: {patterns: [{include: '#type_signature'}]}
              },
              match:
                '(?x)\n  (\\S*)\\s*\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\n  (::|∷|=)\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])'
            },
            {include: '#type_signature'}
          ]
        },
        2: {name: 'keyword.operator.big-arrow.bh'}
      },
      match:
        '(?x)\n  (.*)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\n  (=>|⇒)\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\n'
    },
    deriving: {
      patterns: [
        {
          begin: '^(\\s*)(deriving)\\s+(?:(via|stock|newtype|anyclass)\\s+)?',
          beginCaptures: {
            2: {name: 'keyword.other.deriving.bh'},
            3: {name: 'keyword.other.deriving.strategy.$3.bh'}
          },
          end: '(?x) # Detect end of deriving statement\n  # Decreasing indentation\n   (?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )',
          name: 'meta.deriving.bh',
          patterns: [
            {include: '#comment_like'},
            {
              match: "(?<!')\\b(instance)\\b(?!')",
              name: 'keyword.other.instance.bh'
            },
            {
              captures: {1: {name: 'keyword.other.deriving.strategy.$1.bh'}},
              match: "(?<!')\\b(via|stock|newtype|anyclass)\\b(?!')"
            },
            {include: '#type_signature'}
          ]
        },
        {
          begin: '(deriving)(?:\\s+(stock|newtype|anyclass))?\\s*(\\()',
          beginCaptures: {
            1: {name: 'keyword.other.deriving.bh'},
            2: {name: 'keyword.other.deriving.strategy.$2.bh'},
            3: {name: 'punctuation.paren.bh'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.paren.bh'}},
          name: 'meta.deriving.bh',
          patterns: [{include: '#type_signature'}]
        },
        {
          captures: {
            1: {name: 'keyword.other.deriving.bh'},
            2: {name: 'keyword.other.deriving.strategy.$2.bh'},
            3: {patterns: [{include: '#type_signature'}]},
            5: {name: 'keyword.other.deriving.strategy.via.bh'},
            6: {patterns: [{include: '#type_signature'}]}
          },
          match:
            "(?x)\n  (deriving)(?:\\s+(stock|newtype|anyclass))?\\s+\n    ([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\n    (\\s+(via)\\s+(.*)$)?\n",
          name: 'meta.deriving.bh'
        },
        {
          match: "(?<!')\\b(via)\\b(?!')",
          name: 'keyword.other.deriving.strategy.via.bh'
        }
      ]
    },
    double_colon: {
      captures: {1: {name: 'keyword.operator.double-colon.bh'}},
      match: '\\s*(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\\s*'
    },
    export_constructs: {
      patterns: [
        {include: '#comment_like'},
        {
          begin: "\\b(?<!')(pattern)\\b(?!')",
          beginCaptures: {1: {name: 'keyword.other.pattern.bh'}},
          end: "(?x)\n   # Data constructor\n   ([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\n   # Prefix form of symbolic constructor\n   | (\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\\s*(\\))",
          endCaptures: {
            1: {name: 'constant.other.bh'},
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'constant.other.operator.prefix.bh'},
            4: {name: 'punctuation.paren.bh'}
          },
          patterns: [{include: '#comment_like'}]
        },
        {
          begin: "\\b(?<!')(type)\\b(?!')",
          beginCaptures: {1: {name: 'keyword.other.type.bh'}},
          end: '(?=,|\\))',
          patterns: [
            {include: '#comment_like'},
            {include: '#reserved_symbol'},
            {include: '#type_constructor'},
            {include: '#type_operator'}
          ]
        },
        {include: '#record_wildcard'},
        {include: '#reserved_symbol'},
        {
          match: '(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*)\\s*(\\))',
          name: 'storage.type.operator.bh'
        },
        {
          match: "(?<!')\\b[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
          name: 'entity.name.function.bh'
        },
        {
          match: "(?<!')\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
          name: 'storage.type.bh'
        },
        {include: '#prefix_op'}
      ]
    },
    ffi: {
      begin: '^(\\s*)(foreign)\\s+(import|export)\\s+',
      beginCaptures: {
        2: {name: 'keyword.other.foreign.bh'},
        3: {name: 'keyword.other.$3.bh'}
      },
      end: '(?x) # Detect end of FFI block by decreasing indentation:\n  (?=\\}|;)       # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
      name: 'meta.$3.foreign.bh',
      patterns: [
        {include: '#comment_like'},
        {
          captures: {1: {name: 'keyword.other.calling-convention.$1.bh'}},
          match: "\\b(?<!')(ccall|cplusplus|dotnet|jvm|stdcall|prim|capi)\\s+"
        },
        {
          begin:
            "(?=\")|(?=\\b(?<!')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))",
          end: '(?=(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
          patterns: [
            {include: '#comment_like'},
            {
              captures: {
                1: {name: 'keyword.other.safety.$1.bh'},
                2: {
                  name: 'entity.name.foreign.bh',
                  patterns: [{include: '#string_literal'}]
                },
                3: {name: 'entity.name.function.bh'},
                4: {name: 'entity.name.function.infix.bh'}
              },
              match:
                "(?x)\n  \\b(?<!')(safe|unsafe|interruptible)\\b(?!')\n  \\s*\n  (\"(?:\\\\\"|[^\"])*\")?\n  \\s*\n  (?:\n    (?:\\b(?<!'')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))\n   |(?:\\(\\s*(?!--+\\))([\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\\s*\\))\n  )\n"
            },
            {
              captures: {
                1: {name: 'keyword.other.safety.$1.bh'},
                2: {
                  name: 'entity.name.foreign.bh',
                  patterns: [{include: '#string_literal'}]
                }
              },
              match:
                '(?x)\n  \\b(?<!\')(safe|unsafe|interruptible)\\b(?!\')\n  \\s*\n  ("(?:\\\\"|[^"])*")?\n  \\s*$\n'
            },
            {
              captures: {
                0: {
                  name: 'entity.name.foreign.bh',
                  patterns: [{include: '#string_literal'}]
                }
              },
              match: '(?x)\n  "(?:\\\\"|[^"])*"'
            },
            {
              captures: {
                1: {name: 'entity.name.function.bh'},
                2: {name: 'punctuation.paren.bh'},
                3: {name: 'entity.name.function.infix.bh'},
                4: {name: 'punctuation.paren.bh'}
              },
              match:
                "(?x)\n   (?:\\b(?<!'')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))\n  |(?:(\\()\\s*(?!--+\\))([\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\\s*(\\)))\n"
            }
          ]
        },
        {include: '#double_colon'},
        {include: '#type_signature'}
      ]
    },
    float_literals: {
      captures: {
        1: {name: 'constant.numeric.floating.decimal.bh'},
        2: {name: 'constant.numeric.floating.hexadecimal.bh'}
      },
      match:
        "(?x)\n  \\b(?<!')\n  (?:  # Decimal\n    ([0-9][_0-9]*\\.[0-9][_0-9]*(?:[eE][-+]?[0-9][_0-9]*)?\n    |[0-9][_0-9]*[eE][-+]?[0-9][_0-9]*\n    )\n  |    # Hexadecimal\n    (0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*\\.[0-9a-fA-F][_0-9a-fA-F]*(?:[pP][-+]?[0-9][_0-9]*)?\n    |0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*[pP][-+]?[0-9][_0-9]*\n    )\n  )\\b(?!')"
    },
    forall: {
      begin:
        "(?x)\n  # Alphabetic forall\n  (?:\n  \\b(?<!')\n  (forall)\n  \\b(?!')\n  )\n  |\n  # Symbolic forall\n  (?:\n  # Not preceded by a symbol except reserved symbols\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"'']])\n  (∀)\n  # Not followed by a symbol except reserved symbols\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"'']])\n  )",
      beginCaptures: {
        1: {name: 'keyword.other.forall.bh'},
        2: {name: 'keyword.other.forall.bh'}
      },
      end: '(\\.)|(->|→)',
      endCaptures: {
        1: {name: 'keyword.operator.period.bh'},
        2: {name: 'keyword.operator.arrow.bh'}
      },
      patterns: [
        {include: '#comment_like'},
        {include: '#type_variable'},
        {include: '#type_signature'}
      ]
    },
    fun_decl: {
      begin:
        "(?x)^(\\s*)\n  (primitive\\s+)?\n  (type\\s+)?\n  (?<fn>\n    (?:\n      [\\p{Ll}_\\p{Lu}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\#*\n    | \\(\\s*\n        (?!--+\\))\n        [\\p{S}\\p{P}&&[^(),:;\\[\\]`{}_\"']]\n        [\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]*\n      \\s*\\)\n    )\n    (?:\\s*,\\s*\\g<fn>)?\n  )\n  \\s*(?<![\\p{S}\\p{P}&&[^\\),;\\]`}_\"']])(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[`{_\"']])\n",
      beginCaptures: {
        2: {name: 'keyword.other.primitive.bh'},
        3: {name: 'keyword.other.type.bh'},
        4: {
          name: 'entity.name.function.bh',
          patterns: [{include: '#reserved_symbol'}, {include: '#prefix_op'}]
        },
        5: {name: 'keyword.operator.double-colon.bh'}
      },
      end: '(?x)\n  # End of type annotation:\n    # To the left of a reserved symbolic keyword such as = or <-\n  (?= \n      # non-symbolic character\n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\n      # symbolic keyword except (->)\n      ((<-|←)|(=)|(-<|↢)|(-<<|⤛))\n      # non-symbolic character\n      ([(),;\\[\\]`{}_"\']|[^\\p{S}\\p{P}])\n  )\n  # Decreasing indentation:\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
      name: 'meta.function.type-declaration.bh',
      patterns: [{include: '#type_signature'}]
    },
    gadt_constructor: {
      patterns: [
        {
          begin:
            "(?x)\n   ^(\\s*)\n      (?:\n        (\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\n      |(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]*)\\s*(\\))\n      )",
          beginCaptures: {
            2: {name: 'constant.other.bh'},
            3: {name: 'punctuation.paren.bh'},
            4: {name: 'constant.other.operator.prefix.bh'},
            5: {name: 'punctuation.paren.bh'}
          },
          end: "(?x)\n  # GADT constructor ends\n  (?=\\b(?<!'')deriving\\b(?!'))  \n        # Decreasing indentation\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_\"']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n",
          patterns: [
            {include: '#comment_like'},
            {include: '#deriving'},
            {include: '#double_colon'},
            {include: '#record_decl'},
            {include: '#type_signature'}
          ]
        },
        {
          begin:
            "(?x)\n  (\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}]*) # named constructor\n |(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]*)\\s*(\\))    # prefix operator",
          beginCaptures: {
            1: {name: 'constant.other.bh'},
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'constant.other.operator.prefix.bh'},
            4: {name: 'punctuation.paren.bh'}
          },
          end: '(?=;|\\}|$)',
          patterns: [
            {include: '#comment_like'},
            {include: '#deriving'},
            {include: '#double_colon'},
            {include: '#record_decl'},
            {include: '#type_signature'}
          ]
        }
      ]
    },
    infix_op: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'entity.name.namespace.bh'},
            3: {name: 'keyword.operator.infix.bh'}
          },
          match:
            "(?x)\n  ((?:(?<!'')('')?[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*\\.)*)\n    (\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+(?<!\\#))"
        },
        {
          captures: {
            1: {name: 'punctuation.backtick.bh'},
            2: {name: 'entity.name.namespace.bh'},
            3: {patterns: [{include: '#data_constructor'}]},
            4: {name: 'punctuation.backtick.bh'}
          },
          match:
            "(`)((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*\\.)*)([\\p{Ll}\\p{Lu}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*)(`)",
          name: 'keyword.operator.function.infix.bh'
        }
      ]
    },
    inline_phase: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.bracket.bh'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.bracket.bh'}},
      name: 'meta.inlining-phase.bh',
      patterns: [
        {match: '~', name: 'punctuation.tilde.bh'},
        {include: '#integer_literals'},
        {match: '\\w*', name: 'invalid'}
      ]
    },
    integer_literals: {
      captures: {
        1: {name: 'constant.numeric.integral.decimal.bh'},
        2: {name: 'constant.numeric.integral.hexadecimal.bh'},
        3: {name: 'constant.numeric.integral.octal.bh'},
        4: {name: 'constant.numeric.integral.binary.bh'}
      },
      match:
        "(?x)\n  \\b(?<!')\n  (?:\n    ([0-9][_0-9]*)                    # Decimal integer\n  | (0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*) # Hexadecimal integer\n  | (0[oO]_*[0-7][_0-7]*)             # Octal integer\n  | (0[bB]_*[01][_01]*)               # Binary integer\n  )\n  \\b(?!')"
    },
    keyword: {
      captures: {
        1: {name: 'keyword.other.$1.bh'},
        2: {name: 'keyword.control.$2.bh'}
      },
      match:
        "\\b(?<!')(?:(where|when|let|letseq|in)|(do|module|rules|action|if|then|else|case(?:s)?|of|verilog|synthesize))\\b(?!')"
    },
    layout_herald: {
      begin:
        "(?x)\n  (?:(?<!')\\b(?:(where|let|letseq|do|module|rules|action)|(of))|(\\\\\\s*case(?:s)?))\n  \\s*(\\{)(?!-)",
      beginCaptures: {
        1: {name: 'keyword.other.$1.bh'},
        2: {name: 'keyword.control.of.bh'},
        3: {name: 'keyword.control.lambda-case.bh'},
        4: {name: 'punctuation.brace.bh'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.brace.bh'}},
      patterns: [
        {include: '$self'},
        {match: ';', name: 'punctuation.semicolon.bh'}
      ]
    },
    numeric_literals: {
      patterns: [{include: '#float_literals'}, {include: '#integer_literals'}]
    },
    overloaded_label: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.prefix.hash.bh'},
            2: {patterns: [{include: '#string_literal'}]}
          },
          match:
            '(?x) \n  (?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^(,;\\[`{]]) # Disallow closing characters\n  (\\#)\n    (?:\n    # String\n    ("(?:\\\\"|[^"])*")\n    # Sequence of allowed label identifiers\n    |[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\'\\.]+\n    )',
          name: 'entity.name.label.bh'
        }
      ]
    },
    package_exports: {
      applyEndPatternLast: true,
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.paren.bh'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.paren.bh'}},
      name: 'meta.declaration.exports.bh',
      patterns: [
        {include: '#comment_like'},
        {
          captures: {1: {name: 'keyword.other.package.bh'}},
          match: "\\b(?<!')(package)\\b(?!')"
        },
        {include: '#comma'},
        {include: '#export_constructs'},
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.paren.bh'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.paren.bh'}},
          patterns: [
            {include: '#comment_like'},
            {include: '#record_wildcard'},
            {
              match:
                '(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*)\\s*(\\))',
              name: 'constant.other.operator.prefix.bh'
            },
            {include: '#export_constructs'},
            {include: '#comma'}
          ]
        }
      ]
    },
    package_name: {
      match:
        "(?<conid>[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(\\.\\g<conid>)?)",
      name: 'entity.name.namespace.bh'
    },
    pragma: {
      begin: '\\{-#',
      end: '#-\\}',
      name: 'meta.preprocessor.bh',
      patterns: [
        {include: '#comments'},
        {
          match:
            "(?xi) \\b(?<!')\n  (synthesize|verilog|noReady|alwaysEnabled|parameter|no_default_clock|no_default_reset|gate_input_clocks|clock_family|clock_prefix|gate_prefix|reset_prefix|alwaysReady|noReady|alwaysEnabled|scanInsert|bitBlast|CLK|RSTN|options|deprecate|properties)\\b(?!')",
          name: 'keyword.other.preprocessor.pragma.bh'
        },
        {
          match:
            "(?xi) \\b(?<!')\n  (prefixs?|arg_names|ready|enable|result|always_ready|always_enabled)\\b(?!')",
          name: 'keyword.other.preprocessor.pragma.bh'
        }
      ]
    },
    prefix_op: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.paren.bh'},
            2: {name: 'entity.name.function.infix.bh'},
            3: {name: 'punctuation.paren.bh'}
          },
          match:
            '(?x)\n  (\\()\\s*(?!(?:--+|\\.\\.)\\))(\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+(?<!\\#))\\s*(\\))'
        }
      ]
    },
    qualifier: {
      match: "\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.",
      name: 'entity.name.namespace.bh'
    },
    quasi_quote: {
      patterns: [
        {
          begin: '(?x)\n  (\\[)\n  (e|d|p)?\n  (\\|(?:\\|(?!\\]))?)',
          beginCaptures: {
            1: {name: 'keyword.operator.quasi-quotation.begin.bh'},
            2: {name: 'entity.name.quasi-quoter.bh'},
            3: {name: 'keyword.operator.quasi-quotation.begin.bh'}
          },
          end: '\\3\\]',
          endCaptures: {0: {name: 'keyword.operator.quasi-quotation.end.bh'}},
          name: 'meta.quasi-quotation.bh',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?x)\n  (\\[)\n  (t)\n  (\\|(?:\\|(?!\\]))?)',
          beginCaptures: {
            1: {name: 'keyword.operator.quasi-quotation.begin.bh'},
            2: {name: 'entity.name.quasi-quoter.bh'},
            3: {name: 'keyword.operator.quasi-quotation.begin.bh'}
          },
          end: '\\3\\]',
          endCaptures: {0: {name: 'keyword.operator.quasi-quotation.end.bh'}},
          name: 'meta.quasi-quotation.bh',
          patterns: [{include: '#type_signature'}]
        },
        {
          begin:
            "(?x)\n  (\\[)\n  (?:(\\$\\$)|(\\$))?\n  (?!'\\|')                                             # Don't parse ['|'...] as a quasi quotation\n  ((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*) # Optional qualifier\n  ((?:[^\\s\\p{S}\\p{P}]|['_])*)                          # Quasi-quoter\n  (\\|)",
          beginCaptures: {
            1: {name: 'keyword.operator.quasi-quotation.begin.bh'},
            2: {name: 'keyword.operator.prefix.double-dollar.bh'},
            3: {name: 'keyword.operator.prefix.dollar.bh'},
            4: {name: 'entity.name.namespace.bh'},
            5: {name: 'entity.name.quasi-quoter.bh'},
            6: {name: 'keyword.operator.quasi-quotation.begin.bh'}
          },
          end: '\\|\\]',
          endCaptures: {0: {name: 'keyword.operator.quasi-quotation.end.bh'}},
          name: 'meta.quasi-quotation.bh meta.embedded.block.$5'
        }
      ]
    },
    record: {
      begin: '({)(?!-)',
      beginCaptures: {1: {name: 'punctuation.brace.bh'}},
      end: '(?<!-)(})',
      endCaptures: {1: {name: 'punctuation.brace.bh'}},
      name: 'meta.record.bh',
      patterns: [{include: '#comment_like'}, {include: '#record_field'}]
    },
    record_decl: {
      begin: '({)(?!-)',
      beginCaptures: {1: {name: 'punctuation.brace.bh'}},
      end: '(?<!-)(})',
      endCaptures: {1: {name: 'punctuation.brace.bh'}},
      name: 'meta.record.definition.bh',
      patterns: [{include: '#comment_like'}, {include: '#record_decl_field'}]
    },
    record_decl_field: {
      begin:
        "(?x)\n  (?:([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\n    |(\\()\\s*([\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\\s*(\\))\n  )\n",
      beginCaptures: {
        1: {name: 'variable.other.member.definition.bh'},
        2: {name: 'punctuation.paren.bh'},
        3: {name: 'variable.other.member.definition.bh'},
        4: {name: 'punctuation.paren.bh'}
      },
      end: '(,)|(?=})',
      endCaptures: {1: {name: 'punctuation.comma.bh'}},
      patterns: [
        {include: '#comment_like'},
        {include: '#comma'},
        {include: '#double_colon'},
        {include: '#type_signature'},
        {include: '#record_decl_field'}
      ]
    },
    record_field: {
      patterns: [
        {
          begin:
            "(?x)\n  (?:([\\p{Ll}\\p{Lu}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\.']*)\n    |(\\()\\s*([\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\\s*(\\))\n  )\n",
          beginCaptures: {
            1: {
              name: 'variable.other.member.bh',
              patterns: [{include: '#qualifier'}]
            },
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'variable.other.member.bh'},
            4: {name: 'punctuation.paren.bh'}
          },
          end: '(,)|(?=})',
          endCaptures: {1: {name: 'punctuation.comma.bh'}},
          patterns: [
            {include: '#comment_like'},
            {include: '#comma'},
            {include: '$self'}
          ]
        },
        {include: '#record_wildcard'}
      ]
    },
    record_wildcard: {
      captures: {1: {name: 'variable.other.member.wildcard.bh'}},
      match:
        '(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])\n  (\\.\\.)\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])'
    },
    reserved_symbol: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.double-dot.bh'},
            10: {name: 'keyword.operator.arrow.tail.bh'},
            11: {name: 'keyword.operator.arrow.tail.double.bh'},
            2: {name: 'keyword.operator.colon.bh'},
            3: {name: 'keyword.operator.eq.bh'},
            4: {name: 'keyword.operator.lambda.bh'},
            5: {name: 'keyword.operator.pipe.bh'},
            6: {name: 'keyword.operator.arrow.left.bh'},
            7: {name: 'keyword.operator.arrow.bh'},
            8: {name: 'keyword.operator.arrow.left.tail.bh'},
            9: {name: 'keyword.operator.arrow.left.tail.double.bh'}
          },
          match:
            "(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"'']])\n  (?:\n     (\\.\\.)\n    |(:)\n    |(=)\n    |(\\\\)     # λ not reserved as it is a letter\n    |(\\|)\n    |(<-|←)\n    |(->|→)\n    |(-<|↢)\n    |(-<<|⤛)\n    |(>-|⤚)\n    |(>>-|⤜)\n  )\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"'']])"
        },
        {
          captures: {1: {name: 'keyword.operator.postfix.hash.bh'}},
          match:
            '(?x)\n  (?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^\\#,;\\[`{]]) # Require closing characters\n  (\\#+)\n  (?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^),;\\]`}]])   # Disallow opening character'
        },
        {
          captures: {1: {name: 'keyword.operator.infix.tight.at.bh'}},
          match:
            "(?x)\n  (?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'\\)\\}\\]]) # Require closing characters\n  (@)\n  (?=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'\\(\\[\\{]) # Require opening character"
        },
        {
          captures: {
            1: {name: 'keyword.operator.prefix.tilde.bh'},
            2: {name: 'keyword.operator.prefix.bang.bh'},
            3: {name: 'keyword.operator.prefix.minus.bh'},
            4: {name: 'keyword.operator.prefix.double-dollar.bh'},
            5: {name: 'keyword.operator.prefix.dollar.bh'},
            6: {name: 'keyword.operator.prefix.modifier.bh'}
          },
          match:
            "(?x)\n  (?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^(,;\\[`{]])  # Disallow closing characters\n  (?:(~)|(!)|(-)|(\\$\\$)|(\\$)|(%))\n  (?=[\\p{Ll}_'\\p{Lu}\\p{Lt}\\p{Nd}\\(\\{\\[]) # Require opening character (non operator symbol)"
        }
      ]
    },
    role_annotation: {
      patterns: [
        {
          begin: "^(\\s*)(type)\\s+(role)\\b(?!')",
          beginCaptures: {
            2: {name: 'keyword.other.type.bh'},
            3: {name: 'keyword.other.role.bh'}
          },
          end: '(?x) # Detect end of block by decreasing indentation:\n  (?=\\}|;)       # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\1\\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )',
          name: 'meta.role-annotation.bh',
          patterns: [
            {include: '#comment_like'},
            {include: '#type_constructor'},
            {
              captures: {1: {name: 'keyword.other.role.$1.bh'}},
              match: "\\b(?<!')(nominal|representational|phantom)\\b(?!')"
            }
          ]
        }
      ]
    },
    start_type_signature: {
      patterns: [
        {
          begin: '^(\\s*)(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[`{_"\']])\\s*',
          beginCaptures: {2: {name: 'keyword.operator.double-colon.bh'}},
          end: "(?x)\n  # End type annotation when seeing one of:\n  (?=\n    \\#?\\)                             # closing parenthesis\n    |\\]                               # closing bracket\n    |,                                # comma\n    |(?<!')\\b(in|then|else|of)\\b(?!') # keyword\n    |                                 # symbolic keyword except (->)\n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])\n      (?:\n         (\\\\|λ)\n        |(<-|←)\n        |(=)\n        |(-<|↢)\n        |(-<<|⤛)\n      )\n      ([(),;\\[\\]`{}_\"']|[^\\p{S}\\p{P}])\n    |(\\#|@)-\\}                             # End of annotation block (pragma)\n    # Decreasing indentation:\n    | (?=\\}|;)     # Explicit indentation\n    |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n        \\1\\s*\\S    # - equally indented, or\n      | \\s*        # - starts with whitespace, followed by:\n        (?: $      #   - the end of the line (i.e. empty line), or\n        |\\{-[^@]   #   - the start of a block comment, or\n        |--+       #   - the start of a single-line comment.\n           (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_\"']]).*$) # non-symbol\n                   # The double dash may not be followed by other operator characters\n                   # (then it would be an operator, not a comment)\n      )\n  )",
          name: 'meta.type-declaration.bh',
          patterns: [{include: '#type_signature'}]
        },
        {
          begin:
            '(?<![\\p{S}\\p{P}&&[^\\(,;\\[`{_"\']])(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[`{_"\']])',
          beginCaptures: {1: {name: 'keyword.operator.double-colon.bh'}},
          end: "(?x)\n  # End type annotation when seeing one of:\n  (?=\n    \\#?\\)                             # closing parenthesis\n    |\\]                               # closing bracket\n    |,                                # comma\n    |\\b(?<!')(in|then|else|of)\\b(?!') # keyword\n    |(\\#|@)-\\}                        # End of annotation block (Liquidbh or pragma)\n    |                                 # symbolic keyword except (->)\n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])\n      (?:\n         (\\\\|λ)\n        |(<-|←)\n        |(=)\n        |(-<|↢)\n        |(-<<|⤛)\n      )\n      ([(),;\\[\\]`{}_\"']|[^\\p{S}\\p{P}])\n    # Indentation \n    |(?=\\}|;)      # Explicit indentation\n    |$             # End of line\n  )",
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    string_literal: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.bh'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.bh'}},
      name: 'string.quoted.double.bh',
      patterns: [
        {
          match:
            '\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])',
          name: 'constant.character.escape.bh'
        },
        {
          match: '\\\\o[0-7]+|\\\\x[0-9A-Fa-f]+|\\\\[0-9]+',
          name: 'constant.character.escape.octal.bh'
        },
        {
          match: '\\\\\\^[A-Z@\\[\\]\\\\\\^_]',
          name: 'constant.character.escape.control.bh'
        },
        {
          begin: '\\\\\\s',
          beginCaptures: {0: {name: 'constant.character.escape.begin.bh'}},
          end: '\\\\',
          endCaptures: {0: {name: 'constant.character.escape.end.bh'}},
          patterns: [
            {
              match: '\\S+',
              name: 'invalid.illegal.character-not-allowed-here.bh'
            }
          ]
        }
      ]
    },
    type_application: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.prefix.at.bh'},
            2: {name: 'support.constant.unit.bh'}
          },
          match: '(?<=[\\s,;\\[\\]{}"])(@)(\\(\\s*\\))',
          name: 'meta.type-application.bh'
        },
        {
          begin: '(?<=[\\s,;\\[\\]{}"])(@)(\')?(\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.prefix.at.bh'},
            2: {name: 'keyword.operator.promotion.bh'},
            3: {name: 'punctuation.paren.bh'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.paren.bh'}},
          name: 'meta.type-application.bh',
          patterns: [{include: '#type_signature'}]
        },
        {
          begin: '(?<=[\\s,;\\[\\]{}"])(@)(\')?(\\[)',
          beginCaptures: {
            1: {name: 'keyword.operator.prefix.at.bh'},
            2: {name: 'keyword.operator.promotion.bh'},
            3: {name: 'punctuation.bracket.bh'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.bracket.bh'}},
          name: 'meta.type-application.bh',
          patterns: [{include: '#type_signature'}]
        },
        {
          begin: '(?<=[\\s,;\\[\\]{}"])(@)(?=\\")',
          beginCaptures: {1: {name: 'keyword.operator.prefix.at.bh'}},
          end: '(?<=\\")',
          name: 'meta.type-application.bh',
          patterns: [{include: '#string_literal'}]
        },
        {
          begin:
            '(?<=[\\s,;\\[\\]{}"])(@)(?=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\'])',
          beginCaptures: {1: {name: 'keyword.operator.prefix.at.bh'}},
          end: "(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])",
          name: 'meta.type-application.bh',
          patterns: [{include: '#type_signature'}]
        }
      ]
    },
    type_constructor: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'entity.name.namespace.bh'},
            3: {name: 'storage.type.bh'}
          },
          match:
            "(?x)\n  # Optional promotion tick\n    (')?\n  # Optional qualified name\n    ((?:\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)\n  # Type constructor proper\n    (\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)"
        },
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'entity.name.namespace.bh'},
            4: {name: 'storage.type.operator.bh'},
            5: {name: 'punctuation.paren.bh'}
          },
          match:
            "(?x)\n  # Optional promotion tick\n    (')?\n  # Opening parenthesis\n    (\\()\\s*\n  # Optional qualified name\n    ((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)\n  # Type operator proper\n    ([\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+)\n  # Closing parenthesis\n    \\s*(\\))"
        }
      ]
    },
    type_operator: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'entity.name.namespace.bh'},
            3: {name: 'storage.type.operator.infix.bh'}
          },
          match:
            "(?x)\n  # Optional promotion tick\n    (?:(?<!')('))?\n  # Optional qualified name\n    ((?:\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)\n  # Type operator proper\n    (?![#@]?-})(\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]+(?<!\\#))\n    #((?:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']&&[^#@]]|[@#](?!-}))+)"
        },
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.backtick.bh'},
            3: {name: 'entity.name.namespace.bh'},
            4: {name: 'storage.type.infix.bh'},
            5: {name: 'punctuation.backtick.bh'}
          },
          match:
            "(?x)\n  # Optional promotion tick\n    (')?\n  # Opening backtick\n    (\\`)\n  # Optional qualified name\n    ((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)\n  # Type constructor proper\n    ([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\n  # Closing backtick\n    (`)"
        }
      ]
    },
    type_signature: {
      patterns: [
        {include: '#comment_like'},
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'punctuation.paren.bh'}
          },
          match: "(')?(\\()\\s*(\\))",
          name: 'support.constant.unit.bh'
        },
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.paren.bh'},
            3: {name: 'punctuation.paren.bh'}
          },
          match: "(')?(\\()\\s*,[\\s,]*(\\))",
          name: 'support.constant.tuple.bh'
        },
        {
          captures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.bracket.bh'},
            3: {name: 'punctuation.bracket.bh'}
          },
          match: "(')?(\\[)\\s*(\\])",
          name: 'support.constant.empty-list.bh'
        },
        {include: '#integer_literals'},
        {
          match: '(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])',
          name: 'keyword.operator.double-colon.bh'
        },
        {include: '#forall'},
        {match: '=>|⇒', name: 'keyword.operator.big-arrow.bh'},
        {include: '#string_literal'},
        {match: "'[^']'", name: 'invalid'},
        {include: '#type_application'},
        {include: '#reserved_symbol'},
        {include: '#type_operator'},
        {include: '#type_constructor'},
        {
          begin: '(\\()',
          beginCaptures: {1: {name: 'punctuation.paren.bh'}},
          end: '(\\))',
          endCaptures: {2: {name: 'punctuation.paren.bh'}},
          patterns: [{include: '#comma'}, {include: '#type_signature'}]
        },
        {
          begin: "(')?(\\()",
          beginCaptures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.paren.bh'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.paren.bh'}},
          patterns: [{include: '#comma'}, {include: '#type_signature'}]
        },
        {
          begin: "(')?(\\[)",
          beginCaptures: {
            1: {name: 'keyword.operator.promotion.bh'},
            2: {name: 'punctuation.bracket.bh'}
          },
          end: '(\\])',
          endCaptures: {1: {name: 'punctuation.bracket.bh'}},
          patterns: [{include: '#comma'}, {include: '#type_signature'}]
        },
        {include: '#type_variable'}
      ]
    },
    type_variable: {
      match:
        "\\b(?<!')(?!(?:forall|deriving)\\b(?!'))[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
      name: 'variable.other.generic-type.bh'
    },
    where: {
      patterns: [
        {
          begin: "(?x)\n  (?<!')\\b(where)\n  \\s*(\\{)(?!-)",
          beginCaptures: {
            1: {name: 'keyword.other.where.bh'},
            2: {name: 'punctuation.brace.bh'}
          },
          end: '(\\})',
          endCaptures: {1: {name: 'punctuation.brace.bh'}},
          patterns: [
            {include: '$self'},
            {match: ';', name: 'punctuation.semicolon.bh'}
          ]
        },
        {match: "\\b(?<!')(where)\\b(?!')", name: 'keyword.other.where.bh'}
      ]
    }
  },
  scopeName: 'source.bh'
}

export default grammar
