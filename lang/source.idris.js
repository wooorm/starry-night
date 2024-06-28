// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/idris-hackers/idris-sublime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.idr', '.lidr'],
  names: ['idris'],
  patterns: [
    {
      captures: {
        1: {name: 'punctuation.definition.entity.idris'},
        2: {name: 'punctuation.definition.entity.idris'}
      },
      match: "(`)[\\w']*?(`)",
      name: 'keyword.operator.function.infix.idris'
    },
    {
      captures: {1: {name: 'keyword.other.idris'}},
      match: "^(module)\\s+([a-zA-Z0-9._']+)$",
      name: 'meta.declaration.module.idris'
    },
    {
      captures: {1: {name: 'keyword.other.idris'}},
      match: "^(import)\\s+([a-zA-Z0-9._']+)$",
      name: 'meta.import.idris'
    },
    {
      match: '\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b',
      name: 'constant.numeric.float.idris'
    },
    {
      match: '\\b([0-9]+|0([xX][0-9a-fA-F]+|[oO][0-7]+))\\b',
      name: 'constant.numeric.idris'
    },
    {
      match: '^\\b(public|abstract|private)\\b',
      name: 'storage.modifier.export.idris'
    },
    {match: '\\b(total|partial)\\b', name: 'storage.modifier.totality.idris'},
    {match: '^\\b(implicit)\\b', name: 'storage.modifier.idris'},
    {
      begin: '\\"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.idris'}},
      end: '\\"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.idris'}},
      name: 'string.quoted.double.idris',
      patterns: [{include: '#escape_characters'}]
    },
    {
      begin: "(?<!\\w)\\'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.idris'}},
      end: "\\'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.idris'}},
      name: 'string.quoted.single.idris',
      patterns: [
        {include: '#escape_characters'},
        {match: '\\n', name: 'invalid.illegal.idris'}
      ]
    },
    {
      begin: '\\b(class)\\b',
      beginCaptures: {1: {name: 'keyword.other.idris'}},
      end: '\\b(where)\\b|$',
      endCaptures: {1: {name: 'keyword.other.idris'}},
      name: 'meta.declaration.class.idris',
      patterns: [{include: '#prelude_class'}, {include: '#prelude_type'}]
    },
    {
      begin: '\\b(instance)\\b',
      beginCaptures: {1: {name: 'keyword.other.idris'}},
      end: '\\b(where)\\b|$',
      endCaptures: {1: {name: 'keyword.other.idris'}},
      name: 'meta.declaration.instance.idris',
      patterns: [
        {include: '#prelude_class'},
        {include: '#prelude_type'},
        {include: '#context_signature'},
        {include: '#type_signature'}
      ]
    },
    {
      begin: "\\b(data)\\s+([\\w']+)\\s*(:)?",
      beginCaptures: {
        1: {name: 'keyword.other.idris'},
        2: {name: 'entity.name.type.idris'},
        3: {name: 'keyword.operator.colon.idris'}
      },
      end: '\\b(where)\\b|(=)',
      endCaptures: {
        1: {name: 'keyword.other.idris'},
        2: {name: 'keyword.operator.idris'}
      },
      name: 'meta.declaration.data.idris',
      patterns: [{include: '#type_signature'}]
    },
    {include: '#function_signature'},
    {include: '#directive'},
    {include: '#comments'},
    {include: '#language_const'},
    {include: '#language_keyword'},
    {include: '#prelude'},
    {match: "\\b[A-Z][A-Za-z_'0-9]*", name: 'constant.other.idris'},
    {match: '[|&!%$?~+:\\-.=</>\\\\*]+', name: 'keyword.operator.idris'},
    {match: ',', name: 'punctuation.separator.comma.idris'}
  ],
  repository: {
    block_comment: {
      begin: '\\{-(?!#)',
      captures: {0: {name: 'punctuation.definition.comment.idris'}},
      end: '-\\}',
      name: 'comment.block.idris',
      patterns: [{include: '#block_comment'}]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.idris'}},
          match: '(--).*$\\n?',
          name: 'comment.line.double-dash.idris'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.idris'}},
          match: '(\\|\\|\\|).*$\\n?',
          name: 'comment.line.triple-bar.idris'
        },
        {include: '#block_comment'}
      ]
    },
    context_signature: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.inherited-class.idris'},
            2: {name: 'entity.other.attribute-name.idris'},
            4: {name: 'keyword.operator.double-arrow.idris'}
          },
          match: "([\\w._']+)((\\s+[\\w_']+)+)\\s*(=>)",
          name: 'meta.context-signature.idris'
        },
        {
          begin: '(\\()((?=.*\\)\\s*=>)|(?=[^)]*$))',
          beginCaptures: {1: {name: 'punctuation.context.begin.idris'}},
          end: '(\\))\\s*(=>)',
          endCaptures: {
            1: {name: 'punctuation.context.end.idris'},
            2: {name: 'keyword.operator.double-arrow.idris'}
          },
          name: 'meta.context-signature.idris',
          patterns: [
            {
              captures: {
                1: {name: 'entity.other.inherited-class.idris'},
                2: {name: 'entity.other.attribute-name.idris'}
              },
              match: "([\\w']+)\\s+([\\w']+)",
              name: 'meta.class-constraint.idris'
            }
          ]
        }
      ]
    },
    directive: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.directive.idris'},
            2: {name: 'keyword.other.language-extension.idris'}
          },
          match: '^%(language)\\s+(.*)$',
          name: 'meta.directive.language-extension.idris'
        },
        {
          captures: {
            1: {name: 'keyword.other.directive.idris'},
            2: {name: 'keyword.other.totality.idris'}
          },
          match: '^%(default)\\s+(total|partial)$',
          name: 'meta.directive.totality.idris'
        },
        {
          captures: {
            1: {name: 'keyword.other.directive.idris'},
            2: {name: 'keyword.other.idris'}
          },
          match: '^%(provide)\\s+.*\\s+(with)\\s+.*$',
          name: 'meta.directive.type-provider.idris'
        },
        {
          captures: {
            1: {name: 'keyword.other.directive.idris'},
            2: {name: 'storage.modifier.export.idris'}
          },
          match: '^%(access)\\s+(public|abstract|private)$',
          name: 'meta.directive.export.idris'
        },
        {
          captures: {1: {name: 'keyword.other.directive.idris'}},
          match: '^%([\\w]+)\\b',
          name: 'meta.directive.idris'
        }
      ]
    },
    escape_characters: {
      patterns: [
        {
          match:
            '\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&])',
          name: 'constant.character.escape.ascii.idris'
        },
        {
          match: '\\\\o[0-7]+|\\\\x[0-9A-Fa-f]+|\\\\[0-9]+',
          name: 'constant.character.escape.octal.idris'
        },
        {
          match: '\\^[A-Z@\\[\\]\\\\\\^_]',
          name: 'constant.character.escape.control.idris'
        }
      ]
    },
    function_signature: {
      begin: "(([\\w']+)|\\(([|!%$+\\-.,=</>:]+)\\))\\s*(:)(?!:)",
      beginCaptures: {
        2: {name: 'entity.name.function.idris'},
        3: {name: 'entity.name.function.idris'},
        4: {name: 'keyword.operator.colon.idris'}
      },
      end: '(;|(?<=[^\\s>])\\s*(?!->)\\s*$)',
      name: 'meta.function.type-signature.idris',
      patterns: [{include: '#type_signature'}]
    },
    language_const: {
      patterns: [
        {match: '\\(\\)', name: 'constant.language.unit.idris'},
        {match: '_\\|_', name: 'constant.language.bottom.idris'},
        {match: '\\b_\\b', name: 'constant.language.underscore.idris'}
      ]
    },
    language_keyword: {
      patterns: [
        {
          match: '\\b(infix[lr]?|let|where|of|with)\\b',
          name: 'keyword.other.idris'
        },
        {
          match: '\\b(do|if|then|else|case|in)\\b',
          name: 'keyword.control.idris'
        }
      ]
    },
    parameter_type: {
      patterns: [
        {include: '#prelude_type'},
        {
          begin: "\\(([\\w']+)\\s*:(?!:)",
          beginCaptures: {1: {name: 'entity.name.tag.idris'}},
          end: '\\)',
          name: 'meta.parameter.named.idris',
          patterns: [{include: '#prelude_type'}]
        },
        {
          begin: "\\{((auto|default .+)\\s+)?([\\w']+)\\s*:(?!:)",
          beginCaptures: {
            1: {name: 'storage.modifier.idris'},
            3: {name: 'entity.name.tag.idris'}
          },
          end: '\\}',
          name: 'meta.parameter.implicit.idris',
          patterns: [{include: '#prelude_type'}]
        }
      ]
    },
    prelude: {
      patterns: [
        {include: '#prelude_class'},
        {include: '#prelude_type'},
        {include: '#prelude_function'},
        {include: '#prelude_const'}
      ]
    },
    prelude_class: {
      match:
        '\\b(Eq|Ord|Num|MinBound|MaxBound|Integral|Applicative|Alternative|Cast|Foldable|Functor|Monad|Traversable|Uninhabited|Semigroup|VerifiedSemigroup|Monoid|VerifiedMonoid|Group|VerifiedGroup|AbelianGroup|VerifiedAbelianGroup|Ring|VerifiedRing|RingWithUnity|VerifiedRingWithUnity|JoinSemilattice|VerifiedJoinSemilattice|MeetSemilattice|VerifiedMeetSemilattice|BoundedJoinSemilattice|VerifiedBoundedJoinSemilattice|BoundedMeetSemilattice|VerifiedBoundedMeetSemilattice|Lattice|VerifiedLattice|BoundedLattice|VerifiedBoundedLattice)\\b',
      name: 'support.class.prelude.idris'
    },
    prelude_const: {
      patterns: [
        {
          match: '\\b(Just|Nothing|Left|Right|True|False|LT|EQ|GT)\\b',
          name: 'support.constant.prelude.idris'
        }
      ]
    },
    prelude_function: {
      match:
        '\\b(abs|acos|all|and|any|asin|atan|atan2|break|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|div|drop|dropWhile|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|exp|fail|filter|flip|floor|foldl|foldl1|foldr|foldr1|fromInteger|fst|gcd|getChar|getLine|head|id|init|iterate|last|lcm|length|lines|log|lookup|map|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|null|or|pi|pred|print|product|putChar|putStr|putStrLn|readFile|recip|repeat|replicate|return|reverse|scanl|scanl1|sequence|sequence_|show|sin|sinh|snd|span|splitAt|sqrt|succ|sum|tail|take|takeWhile|tan|tanh|uncurry|unlines|unwords|unzip|unzip3|words|writeFile|zip|zip3|zipWith|zipWith3)\\b',
      name: 'support.function.prelude.idris'
    },
    prelude_type: {
      match:
        '\\b(Type|Exists|World|IO|IntTy|FTy|Foreign|File|Mode|Dec|Bool|so|Ordering|Either|Fin|IsJust|List|Maybe|Nat|LTE|GTE|GT|LT|Stream|StrM|Vect|Not|Lazy|Inf|FalseElim)\\b',
      name: 'support.type.prelude.idris'
    },
    type_signature: {
      patterns: [
        {include: '#context_signature'},
        {include: '#parameter_type'},
        {include: '#language_const'},
        {match: '->', name: 'keyword.operator.arrow.idris'}
      ]
    }
  },
  scopeName: 'source.idris'
}

export default grammar
