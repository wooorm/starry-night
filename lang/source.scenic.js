// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/UCSCFormalMethods/Scenic-tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.scenic'],
  names: ['scenic'],
  patterns: [{include: '#statement'}, {include: '#expression'}],
  repository: {
    'annotated-parameter': {
      begin: '(?x)\n  \\b\n  ([[:alpha:]_]\\w*) \\s* (:)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.scenic'},
        2: {name: 'punctuation.separator.annotation.scenic'}
      },
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.scenic'}},
      patterns: [
        {include: '#expression'},
        {match: '=(?!=)', name: 'keyword.operator.assignment.scenic'}
      ]
    },
    'assignment-operator': {
      match:
        '(?x)\n     <<= | >>= | //= | \\*\\*=\n    | \\+= | -= | /= | @=\n    | \\*= | %= | ~= | \\^= | &= | \\|=\n    | =(?!=)\n',
      name: 'keyword.operator.assignment.scenic'
    },
    backticks: {
      begin: '\\`',
      end: '(?:\\`|(?<!\\\\)(\\n))',
      name: 'invalid.deprecated.backtick.scenic',
      patterns: [{include: '#expression'}]
    },
    'builtin-callables': {
      patterns: [
        {include: '#illegal-names'},
        {include: '#illegal-object-name'},
        {include: '#builtin-exceptions'},
        {include: '#builtin-functions'},
        {include: '#builtin-types'},
        {include: '#builtin-types-scenic'}
      ]
    },
    'builtin-exceptions': {
      match:
        '(?x) (?<!\\.) \\b(\n  (\n    Arithmetic | Assertion | Attribute | Buffer | BlockingIO\n    | BrokenPipe | ChildProcess\n    | (Connection (Aborted | Refused | Reset)?)\n    | EOF | Environment | FileExists | FileNotFound\n    | FloatingPoint | IO | Import | Indentation | Index | Interrupted\n    | IsADirectory | NotADirectory | Permission | ProcessLookup\n    | Timeout\n    | Key | Lookup | Memory | Name | NotImplemented | OS | Overflow\n    | Reference | Runtime | Recursion | Syntax | System\n    | Tab | Type | UnboundLocal | Unicode(Encode|Decode|Translate)?\n    | Value | Windows | ZeroDivision | ModuleNotFound\n  ) Error\n|\n  ((Pending)?Deprecation | Runtime | Syntax | User | Future | Import\n    | Unicode | Bytes | Resource\n  )? Warning\n|\n  SystemExit | Stop(Async)?Iteration\n  | KeyboardInterrupt\n  | GeneratorExit | (Base)?Exception\n  | (Guard | Precondition | Invariant)Violation\n)\\b\n',
      name: 'support.type.exception.scenic'
    },
    'builtin-functions': {
      patterns: [
        {
          match:
            '(?x)\n  (?<!\\.) \\b(\n    __import__ | abs | aiter | all | any | anext | ascii | bin\n    | breakpoint | callable | chr | compile | copyright | credits\n    | delattr | dir | divmod | enumerate | eval | exec | exit\n    | filter | format | getattr | globals | hasattr | hash | help\n    | hex | id | input | isinstance | issubclass | iter | len\n    | license | locals | map | max | memoryview | min | next\n    | oct | open | ord | pow | print | quit | range | reload | repr\n    | reversed | round | setattr | sorted | sum | vars | zip\n  )\\b\n',
          name: 'support.function.builtin.scenic'
        },
        {
          match:
            '(?x)\n  (?<!\\.) \\b(\n    resample | localPath | verbosePrint | simulation\n    | sin | cos | hypot\n  )\\b\n',
          name: 'support.function.builtin.scenic'
        },
        {
          match:
            '(?x)\n  (?<!\\.) \\b(\n    file | reduce | intern | raw_input | unicode | cmp | basestring\n    | execfile | long | xrange\n  )\\b\n',
          name: 'variable.legacy.builtin.scenic'
        }
      ]
    },
    'builtin-names-scenic': {
      match: '(?x)\n  (?<!\\.) \\b(\n    globalParameters\n  )\\b\n',
      name: 'support.constant.scenic'
    },
    'builtin-possible-callables': {
      patterns: [{include: '#builtin-callables'}, {include: '#magic-names'}]
    },
    'builtin-types': {
      match:
        "(?x)\n  (?<!\\.) \\b(\n    bool | bytearray | bytes | classmethod | complex | dict\n    | float | frozenset | int | list | object | property\n    | set | slice | staticmethod | str | tuple | type\n\n    (?# Although 'super' is not a type, it's related to types,\n        and is special enough to be highlighted differently from\n        other built-ins)\n    | super\n  )\\b\n",
      name: 'support.type.scenic'
    },
    'builtin-types-scenic': {
      match:
        '(?x)\n  (?<!\\.) \\b(\n    Point | OrientedPoint | Object\n    | Vector | Orientation | VectorField | PolygonalVectorField\n    | Shape | MeshShape | BoxShape | CylinderShape | ConeShape | SpheroidShape\n    | Region | PointSetRegion | RectangularRegion | CircularRegion\n    | SectorRegion | PolygonalRegion | PolylineRegion | PathRegion\n    | MeshVolumeRegion | MeshSurfaceRegion | BoxRegion | SpheroidRegion\n    | Workspace\n    | Range | DiscreteRange | Options | Discrete | Uniform\n    | Normal | TruncatedNormal\n    | VerifaiParameter | VerifaiRange | VerifaiDiscreteRange | VerifaiOptions\n  )\\b\n',
      name: 'support.type.scenic'
    },
    'call-wrapper-inheritance': {
      begin: '(?x)\n  \\b(?=\n    ([[:alpha:]_]\\w*) \\s* (\\()\n  )\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.scenic'}},
      name: 'meta.function-call.scenic',
      patterns: [
        {include: '#inheritance-name'},
        {include: '#function-arguments'}
      ]
    },
    'class-declaration': {
      patterns: [
        {
          begin:
            '(?x)\n  \\s*(class)\\s+\n    (?=\n      [[:alpha:]_]\\w* \\s* (:|\\()\n    )\n',
          beginCaptures: {1: {name: 'storage.type.class.scenic'}},
          end: '(:)',
          endCaptures: {1: {name: 'punctuation.section.class.begin.scenic'}},
          name: 'meta.class.scenic',
          patterns: [{include: '#class-name'}, {include: '#class-inheritance'}]
        }
      ]
    },
    'class-inheritance': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.inheritance.begin.scenic'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.inheritance.end.scenic'}},
      name: 'meta.class.inheritance.scenic',
      patterns: [
        {
          match: '(\\*\\*|\\*)',
          name: 'keyword.operator.unpacking.arguments.scenic'
        },
        {match: ',', name: 'punctuation.separator.inheritance.scenic'},
        {match: '=(?!=)', name: 'keyword.operator.assignment.scenic'},
        {match: '\\bmetaclass\\b', name: 'support.type.metaclass.scenic'},
        {include: '#illegal-names'},
        {include: '#class-kwarg'},
        {include: '#call-wrapper-inheritance'},
        {include: '#expression-base'},
        {include: '#member-access-class'},
        {include: '#inheritance-identifier'}
      ]
    },
    'class-kwarg': {
      captures: {
        1: {
          name: 'entity.other.inherited-class.scenic variable.parameter.class.scenic'
        },
        2: {name: 'keyword.operator.assignment.scenic'}
      },
      match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\s*(=)(?!=)\n'
    },
    'class-name': {
      patterns: [
        {include: '#illegal-object-name'},
        {include: '#builtin-possible-callables'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'entity.name.type.class.scenic'
        }
      ]
    },
    codetags: {
      captures: {1: {name: 'keyword.codetag.notation.scenic'}},
      match: '(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)'
    },
    comments: {
      patterns: [
        {
          begin:
            '(?x)\n  (?:\n    \\# \\s* (type:)\n    \\s*+ (?# we want `\\s*+` which is possessive quantifier since\n             we do not actually want to backtrack when matching\n             whitespace here)\n    (?! $ | \\#)\n  )\n',
          beginCaptures: {
            0: {name: 'meta.typehint.comment.scenic'},
            1: {name: 'comment.typehint.directive.notation.scenic'}
          },
          contentName: 'meta.typehint.comment.scenic',
          end: '(?:$|(?=\\#))',
          name: 'comment.line.number-sign.scenic',
          patterns: [
            {
              match: '(?x)\n  \\G ignore\n  (?= \\s* (?: $ | \\#))\n',
              name: 'comment.typehint.ignore.notation.scenic'
            },
            {
              match:
                '(?x)\n  (?<!\\.)\\b(\n    bool | bytes | float | int | object | str\n    | List | Dict | Iterable | Sequence | Set\n    | FrozenSet | Callable | Union | Tuple\n    | Any | None\n  )\\b\n',
              name: 'comment.typehint.type.notation.scenic'
            },
            {
              match: '([\\[\\]\\(\\),\\.\\=\\*]|(->))',
              name: 'comment.typehint.punctuation.notation.scenic'
            },
            {
              match: '([[:alpha:]_]\\w*)',
              name: 'comment.typehint.variable.notation.scenic'
            }
          ]
        },
        {include: '#comments-base'}
      ]
    },
    'comments-base': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.scenic'}},
      end: '($)',
      name: 'comment.line.number-sign.scenic',
      patterns: [{include: '#codetags'}]
    },
    'comments-string-double-three': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.scenic'}},
      end: '($|(?="""))',
      name: 'comment.line.number-sign.scenic',
      patterns: [{include: '#codetags'}]
    },
    'comments-string-single-three': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.scenic'}},
      end: "($|(?='''))",
      name: 'comment.line.number-sign.scenic',
      patterns: [{include: '#codetags'}]
    },
    'curly-braces': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.dict.begin.scenic'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.dict.end.scenic'}},
      patterns: [
        {match: ':', name: 'punctuation.separator.dict.scenic'},
        {include: '#expression'}
      ]
    },
    decorator: {
      begin: '(?x)\n  ^\\s*\n  ((@)) \\s* (?=[[:alpha:]_]\\w*)\n',
      beginCaptures: {
        1: {name: 'entity.name.function.decorator.scenic'},
        2: {name: 'punctuation.definition.decorator.scenic'}
      },
      end: '(?x)\n  ( \\) )\n    # trailing whitespace and comments are legal\n    (?: (.*?) (?=\\s*(?:\\#|$)) )\n  | (?=\\n|\\#)\n',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.scenic'},
        2: {name: 'invalid.illegal.decorator.scenic'}
      },
      name: 'meta.function.decorator.scenic',
      patterns: [{include: '#decorator-name'}, {include: '#function-arguments'}]
    },
    'decorator-name': {
      patterns: [
        {include: '#builtin-callables'},
        {include: '#illegal-object-name'},
        {
          captures: {2: {name: 'punctuation.separator.period.scenic'}},
          match: '(?x)\n  ([[:alpha:]_]\\w*) | (\\.)\n',
          name: 'entity.name.function.decorator.scenic'
        },
        {include: '#line-continuation'},
        {
          captures: {1: {name: 'invalid.illegal.decorator.scenic'}},
          match: '(?x)\n  \\s* ([^([:alpha:]\\s_\\.#\\\\] .*?) (?=\\#|$)\n',
          name: 'invalid.illegal.decorator.scenic'
        }
      ]
    },
    docstring: {
      patterns: [
        {
          begin: '(\\\'\\\'\\\'|\\"\\"\\")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.scenic'}
          },
          end: '(\\1)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.scenic'}},
          name: 'string.quoted.docstring.multi.scenic',
          patterns: [
            {include: '#docstring-prompt'},
            {include: '#codetags'},
            {include: '#docstring-guts-unicode'}
          ]
        },
        {
          begin: '([rR])(\\\'\\\'\\\'|\\"\\"\\")',
          beginCaptures: {
            1: {name: 'storage.type.string.scenic'},
            2: {name: 'punctuation.definition.string.begin.scenic'}
          },
          end: '(\\2)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.scenic'}},
          name: 'string.quoted.docstring.raw.multi.scenic',
          patterns: [
            {include: '#string-consume-escape'},
            {include: '#docstring-prompt'},
            {include: '#codetags'}
          ]
        },
        {
          begin: '(\\\'|\\")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.scenic'}
          },
          end: '(\\1)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.scenic'},
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'string.quoted.docstring.single.scenic',
          patterns: [
            {include: '#codetags'},
            {include: '#docstring-guts-unicode'}
          ]
        },
        {
          begin: '([rR])(\\\'|\\")',
          beginCaptures: {
            1: {name: 'storage.type.string.scenic'},
            2: {name: 'punctuation.definition.string.begin.scenic'}
          },
          end: '(\\2)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.scenic'},
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'string.quoted.docstring.raw.single.scenic',
          patterns: [
            {include: '#string-consume-escape'},
            {include: '#codetags'}
          ]
        }
      ]
    },
    'docstring-guts-unicode': {
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#escape-sequence'},
        {include: '#string-line-continuation'}
      ]
    },
    'docstring-prompt': {
      captures: {1: {name: 'keyword.control.flow.scenic'}},
      match:
        "(?x)\n  (?:\n    (?:^|\\G) \\s* (?# '\\G' is necessary for ST)\n    ((?:>>>|\\.\\.\\.) \\s) (?=\\s*\\S)\n  )\n"
    },
    'docstring-statement': {
      begin: '^(?=\\s*[rR]?(\\\'\\\'\\\'|\\"\\"\\"|\\\'|\\"))',
      end: '((?<=\\1)|^)(?!\\s*[rR]?(\\\'\\\'\\\'|\\"\\"\\"|\\\'|\\"))',
      patterns: [{include: '#docstring'}]
    },
    'double-one-regexp-character-set': {
      patterns: [
        {match: '(?x)\n  \\[ \\^? \\] (?! .*?\\])\n'},
        {
          begin: '(\\[)(\\^)?(\\])?',
          beginCaptures: {
            1: {
              name: 'punctuation.character.set.begin.regexp constant.other.set.regexp'
            },
            2: {name: 'keyword.operator.negation.regexp'},
            3: {name: 'constant.character.set.regexp'}
          },
          end: '(\\]|(?="))|((?=(?<!\\\\)\\n))',
          endCaptures: {
            1: {
              name: 'punctuation.character.set.end.regexp constant.other.set.regexp'
            },
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'meta.character.set.regexp',
          patterns: [
            {include: '#regexp-charecter-set-escapes'},
            {match: '[^\\n]', name: 'constant.character.set.regexp'}
          ]
        }
      ]
    },
    'double-one-regexp-comments': {
      begin: '\\(\\?#',
      beginCaptures: {0: {name: 'punctuation.comment.begin.regexp'}},
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {name: 'punctuation.comment.end.regexp'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'comment.regexp',
      patterns: [{include: '#codetags'}]
    },
    'double-one-regexp-conditional': {
      begin: '(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)',
      beginCaptures: {
        0: {name: 'keyword.operator.conditional.regexp'},
        1: {name: 'punctuation.parenthesis.conditional.begin.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-expression': {
      patterns: [
        {include: '#regexp-base-expression'},
        {include: '#double-one-regexp-character-set'},
        {include: '#double-one-regexp-comments'},
        {include: '#regexp-flags'},
        {include: '#double-one-regexp-named-group'},
        {include: '#regexp-backreference'},
        {include: '#double-one-regexp-lookahead'},
        {include: '#double-one-regexp-lookahead-negative'},
        {include: '#double-one-regexp-lookbehind'},
        {include: '#double-one-regexp-lookbehind-negative'},
        {include: '#double-one-regexp-conditional'},
        {include: '#double-one-regexp-parentheses-non-capturing'},
        {include: '#double-one-regexp-parentheses'}
      ]
    },
    'double-one-regexp-lookahead': {
      begin: '(\\()\\?=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-lookahead-negative': {
      begin: '(\\()\\?!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-lookbehind': {
      begin: '(\\()\\?<=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-lookbehind-negative': {
      begin: '(\\()\\?<!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-named-group': {
      begin: '(?x)\n  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)\n',
      beginCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp'
        },
        2: {name: 'entity.name.tag.named.group.regexp'}
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.named.regexp',
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-parentheses': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp'
        }
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-one-regexp-parentheses-non-capturing': {
      begin: '\\(\\?:',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp'
        }
      },
      end: '(\\)|(?="))|((?=(?<!\\\\)\\n))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'double-three-regexp-character-set': {
      patterns: [
        {match: '(?x)\n  \\[ \\^? \\] (?! .*?\\])\n'},
        {
          begin: '(\\[)(\\^)?(\\])?',
          beginCaptures: {
            1: {
              name: 'punctuation.character.set.begin.regexp constant.other.set.regexp'
            },
            2: {name: 'keyword.operator.negation.regexp'},
            3: {name: 'constant.character.set.regexp'}
          },
          end: '(\\]|(?="""))',
          endCaptures: {
            1: {
              name: 'punctuation.character.set.end.regexp constant.other.set.regexp'
            },
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'meta.character.set.regexp',
          patterns: [
            {include: '#regexp-charecter-set-escapes'},
            {match: '[^\\n]', name: 'constant.character.set.regexp'}
          ]
        }
      ]
    },
    'double-three-regexp-comments': {
      begin: '\\(\\?#',
      beginCaptures: {0: {name: 'punctuation.comment.begin.regexp'}},
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {name: 'punctuation.comment.end.regexp'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'comment.regexp',
      patterns: [{include: '#codetags'}]
    },
    'double-three-regexp-conditional': {
      begin: '(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)',
      beginCaptures: {
        0: {name: 'keyword.operator.conditional.regexp'},
        1: {name: 'punctuation.parenthesis.conditional.begin.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-expression': {
      patterns: [
        {include: '#regexp-base-expression'},
        {include: '#double-three-regexp-character-set'},
        {include: '#double-three-regexp-comments'},
        {include: '#regexp-flags'},
        {include: '#double-three-regexp-named-group'},
        {include: '#regexp-backreference'},
        {include: '#double-three-regexp-lookahead'},
        {include: '#double-three-regexp-lookahead-negative'},
        {include: '#double-three-regexp-lookbehind'},
        {include: '#double-three-regexp-lookbehind-negative'},
        {include: '#double-three-regexp-conditional'},
        {include: '#double-three-regexp-parentheses-non-capturing'},
        {include: '#double-three-regexp-parentheses'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-lookahead': {
      begin: '(\\()\\?=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-lookahead-negative': {
      begin: '(\\()\\?!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-lookbehind': {
      begin: '(\\()\\?<=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-lookbehind-negative': {
      begin: '(\\()\\?<!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-named-group': {
      begin: '(?x)\n  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)\n',
      beginCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp'
        },
        2: {name: 'entity.name.tag.named.group.regexp'}
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.named.regexp',
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-parentheses': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp'
        }
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    'double-three-regexp-parentheses-non-capturing': {
      begin: '\\(\\?:',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp'
        }
      },
      end: '(\\)|(?="""))',
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    ellipsis: {match: '\\.\\.\\.', name: 'constant.other.ellipsis.scenic'},
    'escape-sequence': {
      match:
        '(?x)\n  \\\\ (\n        x[0-9A-Fa-f]{2}\n        | [0-7]{1,3}\n        | [\\\\"\'abfnrtv]\n     )\n',
      name: 'constant.character.escape.scenic'
    },
    'escape-sequence-unicode': {
      patterns: [
        {
          match:
            '(?x)\n  \\\\ (\n        u[0-9A-Fa-f]{4}\n        | U[0-9A-Fa-f]{8}\n        | N\\{[\\w\\s]+?\\}\n     )\n',
          name: 'constant.character.escape.scenic'
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#expression-base'},
        {include: '#member-access'},
        {match: '(?x) \\b ([[:alpha:]_]\\w*) \\b'}
      ]
    },
    'expression-bare': {
      patterns: [
        {include: '#backticks'},
        {include: '#illegal-anno'},
        {include: '#literal'},
        {include: '#regexp'},
        {include: '#string'},
        {include: '#lambda'},
        {include: '#inline-keywords'},
        {include: '#illegal-operator'},
        {include: '#operator'},
        {include: '#curly-braces'},
        {include: '#item-access'},
        {include: '#list'},
        {include: '#round-braces'},
        {include: '#function-call'},
        {include: '#instance-creation'},
        {include: '#builtin-functions'},
        {include: '#builtin-types'},
        {include: '#builtin-types-scenic'},
        {include: '#builtin-exceptions'},
        {include: '#magic-names'},
        {include: '#special-names'},
        {include: '#builtin-names-scenic'},
        {include: '#illegal-names'},
        {include: '#special-variables'},
        {include: '#ellipsis'},
        {include: '#punctuation'},
        {include: '#line-continuation'}
      ]
    },
    'expression-base': {
      patterns: [
        {include: '#comments'},
        {include: '#expression-bare'},
        {include: '#line-continuation'}
      ]
    },
    'f-expression': {
      patterns: [
        {include: '#expression-bare'},
        {include: '#member-access'},
        {match: '(?x) \\b ([[:alpha:]_]\\w*) \\b'}
      ]
    },
    'fregexp-base-expression': {
      patterns: [
        {include: '#fregexp-quantifier'},
        {include: '#fstring-formatting-braces'},
        {match: '\\{.*?\\}'},
        {include: '#regexp-base-common'}
      ]
    },
    'fregexp-quantifier': {
      match: '(?x)\n  \\{\\{(\n    \\d+ | \\d+,(\\d+)? | ,\\d+\n  )\\}\\}\n',
      name: 'keyword.operator.quantifier.regexp'
    },
    'fstring-fnorm-quoted-multi-line': {
      begin: '(\\b[fF])([bBuU])?(\'\'\'|""")',
      beginCaptures: {
        1: {
          name: 'string.interpolated.scenic string.quoted.multi.scenic storage.type.string.scenic'
        },
        2: {name: 'invalid.illegal.prefix.scenic'},
        3: {
          name: 'punctuation.definition.string.begin.scenic string.interpolated.scenic string.quoted.multi.scenic'
        }
      },
      end: '(\\3)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.multi.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-guts'},
        {include: '#fstring-illegal-multi-brace'},
        {include: '#fstring-multi-brace'},
        {include: '#fstring-multi-core'}
      ]
    },
    'fstring-fnorm-quoted-single-line': {
      begin: '(\\b[fF])([bBuU])?(([\'"]))',
      beginCaptures: {
        1: {
          name: 'string.interpolated.scenic string.quoted.single.scenic storage.type.string.scenic'
        },
        2: {name: 'invalid.illegal.prefix.scenic'},
        3: {
          name: 'punctuation.definition.string.begin.scenic string.interpolated.scenic string.quoted.single.scenic'
        }
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.single.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-guts'},
        {include: '#fstring-illegal-single-brace'},
        {include: '#fstring-single-brace'},
        {include: '#fstring-single-core'}
      ]
    },
    'fstring-formatting': {
      patterns: [
        {include: '#fstring-formatting-braces'},
        {include: '#fstring-formatting-singe-brace'}
      ]
    },
    'fstring-formatting-braces': {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.format.placeholder.other.scenic'},
            2: {name: 'invalid.illegal.brace.scenic'},
            3: {name: 'constant.character.format.placeholder.other.scenic'}
          },
          match: '({)(\\s*?)(})'
        },
        {match: '({{|}})', name: 'constant.character.escape.scenic'}
      ]
    },
    'fstring-formatting-singe-brace': {
      match: '(}(?!}))',
      name: 'invalid.illegal.brace.scenic'
    },
    'fstring-guts': {
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#escape-sequence'},
        {include: '#string-line-continuation'},
        {include: '#fstring-formatting'}
      ]
    },
    'fstring-illegal-multi-brace': {patterns: [{include: '#impossible'}]},
    'fstring-illegal-single-brace': {
      begin: '(\\{)(?=[^\\n}]*$\\n?)',
      beginCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      end: '(\\})|(?=\\n)',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      patterns: [
        {include: '#fstring-terminator-single'},
        {include: '#f-expression'}
      ]
    },
    'fstring-multi-brace': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      end: '(?x)\n  (\\})\n',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      patterns: [
        {include: '#fstring-terminator-multi'},
        {include: '#f-expression'}
      ]
    },
    'fstring-multi-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|\'\'\'|""")\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.scenic string.quoted.multi.scenic'
    },
    'fstring-normf-quoted-multi-line': {
      begin: '(\\b[bBuU])([fF])(\'\'\'|""")',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.scenic'},
        2: {
          name: 'string.interpolated.scenic string.quoted.multi.scenic storage.type.string.scenic'
        },
        3: {
          name: 'punctuation.definition.string.begin.scenic string.quoted.multi.scenic'
        }
      },
      end: '(\\3)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.multi.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-guts'},
        {include: '#fstring-illegal-multi-brace'},
        {include: '#fstring-multi-brace'},
        {include: '#fstring-multi-core'}
      ]
    },
    'fstring-normf-quoted-single-line': {
      begin: '(\\b[bBuU])([fF])(([\'"]))',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.scenic'},
        2: {
          name: 'string.interpolated.scenic string.quoted.single.scenic storage.type.string.scenic'
        },
        3: {
          name: 'punctuation.definition.string.begin.scenic string.quoted.single.scenic'
        }
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.single.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-guts'},
        {include: '#fstring-illegal-single-brace'},
        {include: '#fstring-single-brace'},
        {include: '#fstring-single-core'}
      ]
    },
    'fstring-raw-guts': {
      patterns: [
        {include: '#string-consume-escape'},
        {include: '#fstring-formatting'}
      ]
    },
    'fstring-raw-multi-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|\'\'\'|""")\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.scenic string.quoted.raw.multi.scenic'
    },
    'fstring-raw-quoted-multi-line': {
      begin: '(\\b(?:[rR][fF]|[fF][rR]))(\'\'\'|""")',
      beginCaptures: {
        1: {
          name: 'string.interpolated.scenic string.quoted.raw.multi.scenic storage.type.string.scenic'
        },
        2: {
          name: 'punctuation.definition.string.begin.scenic string.quoted.raw.multi.scenic'
        }
      },
      end: '(\\2)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.raw.multi.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-raw-guts'},
        {include: '#fstring-illegal-multi-brace'},
        {include: '#fstring-multi-brace'},
        {include: '#fstring-raw-multi-core'}
      ]
    },
    'fstring-raw-quoted-single-line': {
      begin: '(\\b(?:[rR][fF]|[fF][rR]))(([\'"]))',
      beginCaptures: {
        1: {
          name: 'string.interpolated.scenic string.quoted.raw.single.scenic storage.type.string.scenic'
        },
        2: {
          name: 'punctuation.definition.string.begin.scenic string.quoted.raw.single.scenic'
        }
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.scenic string.interpolated.scenic string.quoted.raw.single.scenic'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.fstring.scenic',
      patterns: [
        {include: '#fstring-raw-guts'},
        {include: '#fstring-illegal-single-brace'},
        {include: '#fstring-single-brace'},
        {include: '#fstring-raw-single-core'}
      ]
    },
    'fstring-raw-single-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|([\'"])|((?<!\\\\)\\n))\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.scenic string.quoted.raw.single.scenic'
    },
    'fstring-single-brace': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      end: '(?x)\n  (\\})|(?=\\n)\n',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      patterns: [
        {include: '#fstring-terminator-single'},
        {include: '#f-expression'}
      ]
    },
    'fstring-single-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|([\'"])|((?<!\\\\)\\n))\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.scenic string.quoted.single.scenic'
    },
    'fstring-terminator-multi': {
      patterns: [
        {match: '(=(![rsa])?)(?=})', name: 'storage.type.format.scenic'},
        {match: '(=?![rsa])(?=})', name: 'storage.type.format.scenic'},
        {
          captures: {
            1: {name: 'storage.type.format.scenic'},
            2: {name: 'storage.type.format.scenic'}
          },
          match:
            '(?x)\n  ( (?: =?) (?: ![rsa])? )\n    ( : \\w? [<>=^]? [-+ ]? \\#?\n      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})\n'
        },
        {include: '#fstring-terminator-multi-tail'}
      ]
    },
    'fstring-terminator-multi-tail': {
      begin: '((?:=?)(?:![rsa])?)(:)(?=.*?{)',
      beginCaptures: {
        1: {name: 'storage.type.format.scenic'},
        2: {name: 'storage.type.format.scenic'}
      },
      end: '(?=})',
      patterns: [
        {include: '#fstring-illegal-multi-brace'},
        {include: '#fstring-multi-brace'},
        {match: '([bcdeEfFgGnosxX%])(?=})', name: 'storage.type.format.scenic'},
        {match: '(\\.\\d+)', name: 'storage.type.format.scenic'},
        {match: '(,)', name: 'storage.type.format.scenic'},
        {match: '(\\d+)', name: 'storage.type.format.scenic'},
        {match: '(\\#)', name: 'storage.type.format.scenic'},
        {match: '([-+ ])', name: 'storage.type.format.scenic'},
        {match: '([<>=^])', name: 'storage.type.format.scenic'},
        {match: '(\\w)', name: 'storage.type.format.scenic'}
      ]
    },
    'fstring-terminator-single': {
      patterns: [
        {match: '(=(![rsa])?)(?=})', name: 'storage.type.format.scenic'},
        {match: '(=?![rsa])(?=})', name: 'storage.type.format.scenic'},
        {
          captures: {
            1: {name: 'storage.type.format.scenic'},
            2: {name: 'storage.type.format.scenic'}
          },
          match:
            '(?x)\n  ( (?: =?) (?: ![rsa])? )\n    ( : \\w? [<>=^]? [-+ ]? \\#?\n      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})\n'
        },
        {include: '#fstring-terminator-single-tail'}
      ]
    },
    'fstring-terminator-single-tail': {
      begin: '((?:=?)(?:![rsa])?)(:)(?=.*?{)',
      beginCaptures: {
        1: {name: 'storage.type.format.scenic'},
        2: {name: 'storage.type.format.scenic'}
      },
      end: '(?=})|(?=\\n)',
      patterns: [
        {include: '#fstring-illegal-single-brace'},
        {include: '#fstring-single-brace'},
        {match: '([bcdeEfFgGnosxX%])(?=})', name: 'storage.type.format.scenic'},
        {match: '(\\.\\d+)', name: 'storage.type.format.scenic'},
        {match: '(,)', name: 'storage.type.format.scenic'},
        {match: '(\\d+)', name: 'storage.type.format.scenic'},
        {match: '(\\#)', name: 'storage.type.format.scenic'},
        {match: '([-+ ])', name: 'storage.type.format.scenic'},
        {match: '([<>=^])', name: 'storage.type.format.scenic'},
        {match: '(\\w)', name: 'storage.type.format.scenic'}
      ]
    },
    'function-arguments': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.scenic'}
      },
      contentName: 'meta.function-call.arguments.scenic',
      end: '(?=\\))(?!\\)\\s*\\()',
      patterns: [
        {match: '(,)', name: 'punctuation.separator.arguments.scenic'},
        {
          captures: {1: {name: 'keyword.operator.unpacking.arguments.scenic'}},
          match: '(?x)\n  (?:(?<=[,(])|^) \\s* (\\*{1,2})\n'
        },
        {include: '#lambda-incomplete'},
        {include: '#illegal-names'},
        {
          captures: {
            1: {name: 'variable.parameter.function-call.scenic'},
            2: {name: 'keyword.operator.assignment.scenic'}
          },
          match: '\\b([[:alpha:]_]\\w*)\\s*(=)(?!=)'
        },
        {match: '=(?!=)', name: 'keyword.operator.assignment.scenic'},
        {include: '#expression'},
        {
          captures: {
            1: {name: 'punctuation.definition.arguments.end.scenic'},
            2: {name: 'punctuation.definition.arguments.begin.scenic'}
          },
          match: '\\s*(\\))\\s*(\\()'
        }
      ]
    },
    'function-call': {
      begin: '(?x)\n  \\b(?=\n    ([[:alpha:]_]\\w*) \\s* (\\()\n  )\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.scenic'}},
      name: 'meta.function-call.scenic',
      patterns: [
        {include: '#special-variables'},
        {include: '#function-name'},
        {include: '#function-arguments'}
      ]
    },
    'function-declaration': {
      begin:
        '(?x)\n  \\s*\n  (?:\\b(async) \\s+)? \\b(def)\\s+\n    (?=\n      [[:alpha:]_][[:word:]]* \\s* \\(\n    )\n',
      beginCaptures: {
        1: {name: 'storage.type.function.async.scenic'},
        2: {name: 'storage.type.function.scenic'}
      },
      end: '(:|(?=[#\'"\\n]))',
      endCaptures: {1: {name: 'punctuation.section.function.begin.scenic'}},
      name: 'meta.function.scenic',
      patterns: [
        {include: '#function-def-name'},
        {include: '#parameters'},
        {include: '#line-continuation'},
        {include: '#return-annotation'}
      ]
    },
    'function-def-name': {
      patterns: [
        {include: '#illegal-object-name'},
        {include: '#builtin-possible-callables'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'entity.name.function.scenic'
        }
      ]
    },
    'function-name': {
      patterns: [
        {include: '#builtin-possible-callables'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'variable.function.scenic meta.function-call.generic.scenic'
        }
      ]
    },
    'illegal-anno': {match: '->', name: 'invalid.illegal.annotation.scenic'},
    'illegal-names': {
      captures: {
        1: {name: 'keyword.control.flow.scenic'},
        2: {name: 'keyword.control.import.scenic'}
      },
      match:
        '(?x)\n  \\b(?:\n    (\n      and | as | assert | async | await | break | class | continue | def\n      | del | elif | else | except | finally | for | from | global\n      | if | in | is | (?<=\\.)lambda | lambda(?=\\s*[\\.=])\n      | nonlocal | not | or | pass | raise | return | try | while | with\n      | yield\n      | at | by | do | of | to | until\n    ) | (\n      import\n    )\n  )\\b\n'
    },
    'illegal-object-name': {
      match: '\\b(True|False|None)\\b',
      name: 'keyword.illegal.name.scenic'
    },
    'illegal-operator': {
      patterns: [
        {match: '&&|\\|\\||--|\\+\\+', name: 'invalid.illegal.operator.scenic'},
        {match: '[?$]', name: 'invalid.illegal.operator.scenic'},
        {match: '!\\b', name: 'invalid.illegal.operator.scenic'}
      ]
    },
    import: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.import.scenic'},
            2: {name: 'punctuation.separator.period.scenic'},
            3: {name: 'keyword.control.import.scenic'}
          },
          match: '(?x)\n  \\s* \\b(from) \\s*(\\.+)\\s* (import\\b)?\n'
        },
        {match: '\\b(?<!\\.)import\\b', name: 'keyword.control.import.scenic'}
      ]
    },
    impossible: {match: '$.^'},
    'inheritance-identifier': {
      captures: {1: {name: 'entity.other.inherited-class.scenic'}},
      match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n'
    },
    'inheritance-name': {
      patterns: [
        {include: '#lambda-incomplete'},
        {include: '#builtin-possible-callables'},
        {include: '#inheritance-identifier'}
      ]
    },
    'inline-keywords': {
      captures: {1: {name: 'keyword.control.flow.scenic'}},
      match:
        '(?x)\n  \\b(?<!\\.)(\n    initial\\ scenario | until | to | by | from\n  )\\b\n'
    },
    'instance-creation': {
      applyEndPatternLast: true,
      begin:
        '(?x)\n  (new) \\s+\n  (?: (Point | OrientedPoint | Object)\\b | ([[:alpha:]_]\\w*))\n  [^\\S\\n]*\n',
      beginCaptures: {
        1: {name: 'keyword.other.new.scenic'},
        2: {name: 'markup.italic markup.bold entity.name.instance.scenic'},
        3: {name: 'markup.bold entity.name.instance.scenic'}
      },
      end: '(?=[\\S\\n])',
      endCaptures: {1: {name: 'comment.line.number-sign.scenic'}},
      name: 'meta.instance.scenic',
      patterns: [{include: '#specifier'}, {include: '#line-continuation'}]
    },
    'item-access': {
      patterns: [
        {
          begin: '(?x)\n  \\b(?=\n    [[:alpha:]_]\\w* \\s* \\[\n  )\n',
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.arguments.end.scenic'}
          },
          name: 'meta.item-access.scenic',
          patterns: [
            {include: '#item-name'},
            {include: '#item-index'},
            {include: '#expression'}
          ]
        }
      ]
    },
    'item-index': {
      begin: '(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.scenic'}
      },
      contentName: 'meta.item-access.arguments.scenic',
      end: '(?=\\])',
      patterns: [
        {match: ':', name: 'punctuation.separator.slice.scenic'},
        {include: '#expression'}
      ]
    },
    'item-name': {
      patterns: [
        {include: '#special-variables'},
        {include: '#builtin-functions'},
        {include: '#special-names'},
        {match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n'}
      ]
    },
    lambda: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.flow.scenic'}},
          match: '((?<=\\.)lambda|lambda(?=\\s*[\\.=]))'
        },
        {
          captures: {1: {name: 'storage.type.function.lambda.scenic'}},
          match: '\\b(lambda)\\s*?(?=[,\\n]|$)'
        },
        {
          begin: '(?x)\n  \\b (lambda) \\b\n',
          beginCaptures: {1: {name: 'storage.type.function.lambda.scenic'}},
          contentName: 'meta.function.lambda.parameters.scenic',
          end: '(:)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.section.function.lambda.begin.scenic'}
          },
          name: 'meta.lambda-function.scenic',
          patterns: [
            {match: '/', name: 'keyword.operator.positional.parameter.scenic'},
            {
              match: '(\\*\\*|\\*)',
              name: 'keyword.operator.unpacking.parameter.scenic'
            },
            {include: '#lambda-nested-incomplete'},
            {include: '#illegal-names'},
            {
              captures: {
                1: {name: 'variable.parameter.function.language.scenic'},
                2: {name: 'punctuation.separator.parameters.scenic'}
              },
              match: '([[:alpha:]_]\\w*)\\s*(?:(,)|(?=:|$))'
            },
            {include: '#comments'},
            {include: '#backticks'},
            {include: '#illegal-anno'},
            {include: '#lambda-parameter-with-default'},
            {include: '#line-continuation'},
            {include: '#illegal-operator'}
          ]
        }
      ]
    },
    'lambda-incomplete': {
      match: '\\blambda(?=\\s*[,)])',
      name: 'storage.type.function.lambda.scenic'
    },
    'lambda-nested-incomplete': {
      match: '\\blambda(?=\\s*[:,)])',
      name: 'storage.type.function.lambda.scenic'
    },
    'lambda-parameter-with-default': {
      begin: '(?x)\n  \\b\n  ([[:alpha:]_]\\w*) \\s* (=)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.scenic'},
        2: {name: 'keyword.operator.scenic'}
      },
      end: '(,)|(?=:|$)',
      endCaptures: {1: {name: 'punctuation.separator.parameters.scenic'}},
      patterns: [{include: '#expression'}]
    },
    'line-continuation': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.continuation.line.scenic'},
            2: {name: 'invalid.illegal.line.continuation.scenic'}
          },
          match: '(\\\\)\\s*(\\S.*$\\n?)'
        },
        {
          begin: '(\\\\)\\s*$\\n?',
          beginCaptures: {
            1: {name: 'punctuation.separator.continuation.line.scenic'}
          },
          end: "(?x)\n  (?=^\\s*$)\n  |\n  (?! (\\s* [rR]? (\\'\\'\\'|\\\"\\\"\\\"|\\'|\\\"))\n      |\n      (\\G $)  (?# '\\G' is necessary for ST)\n  )\n",
          patterns: [{include: '#regexp'}, {include: '#string'}]
        }
      ]
    },
    list: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.list.begin.scenic'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.list.end.scenic'}},
      patterns: [{include: '#expression'}]
    },
    literal: {
      patterns: [
        {
          match: '\\b(True|False|None|NotImplemented|Ellipsis)\\b',
          name: 'constant.language.scenic'
        },
        {match: '\\b(everywhere|nowhere)\\b', name: 'constant.language.scenic'},
        {include: '#number'}
      ]
    },
    'loose-default': {
      begin: '(=)',
      beginCaptures: {1: {name: 'keyword.operator.scenic'}},
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.scenic'}},
      patterns: [{include: '#expression'}]
    },
    'magic-function-names': {
      captures: {1: {name: 'support.function.magic.scenic'}},
      match:
        '(?x)\n  \\b(\n    __(?:\n      abs | add | aenter | aexit | aiter | and | anext\n      | await | bool | call | ceil | class_getitem\n      | cmp | coerce | complex | contains | copy\n      | deepcopy | del | delattr | delete | delitem\n      | delslice | dir | div | divmod | enter | eq\n      | exit | float | floor | floordiv | format | ge\n      | get | getattr | getattribute | getinitargs\n      | getitem | getnewargs | getslice | getstate | gt\n      | hash | hex | iadd | iand | idiv | ifloordiv |\n      | ilshift | imod | imul | index | init\n      | instancecheck | int | invert | ior | ipow\n      | irshift | isub | iter | itruediv | ixor | le\n      | len | long | lshift | lt | missing | mod | mul\n      | ne | neg | new | next | nonzero | oct | or | pos\n      | pow | radd | rand | rdiv | rdivmod | reduce\n      | reduce_ex | repr | reversed | rfloordiv |\n      | rlshift | rmod | rmul | ror | round | rpow\n      | rrshift | rshift | rsub | rtruediv | rxor | set\n      | setattr | setitem | set_name | setslice\n      | setstate | sizeof | str | sub | subclasscheck\n      | truediv | trunc | unicode | xor | matmul\n      | rmatmul | imatmul | init_subclass | set_name\n      | fspath | bytes | prepare | length_hint\n    )__\n  )\\b\n'
    },
    'magic-names': {
      patterns: [
        {include: '#magic-function-names'},
        {include: '#magic-variable-names'}
      ]
    },
    'magic-variable-names': {
      captures: {1: {name: 'support.variable.magic.scenic'}},
      match:
        '(?x)\n  \\b(\n    __(?:\n      all | annotations | bases | builtins | class\n      | closure | code | debug | defaults | dict | doc | file | func\n      | globals | kwdefaults | match_args | members | metaclass | methods\n      | module | mro | mro_entries | name | qualname | post_init | self\n      | signature | slots | subclasses | version | weakref | wrapped\n      | classcell | spec | path | package | future | traceback\n    )__\n  )\\b\n'
    },
    'member-access': {
      begin: '(\\.)\\s*(?!\\.)',
      beginCaptures: {1: {name: 'punctuation.separator.period.scenic'}},
      end: "(?x)\n  # stop when you've just read non-whitespace followed by non-word\n  # i.e. when finished reading an identifier or function call\n  (?<=\\S)(?=\\W) |\n  # stop when seeing the start of something that's not a word,\n  # i.e. when seeing a non-identifier\n  (^|(?<=\\s))(?=[^\\\\\\w\\s]) |\n  $\n",
      patterns: [{include: '#function-call'}, {include: '#member-access-base'}]
    },
    'member-access-base': {
      patterns: [
        {include: '#magic-names'},
        {include: '#illegal-names'},
        {include: '#illegal-object-name'},
        {include: '#special-names'},
        {include: '#line-continuation'},
        {include: '#item-access'}
      ]
    },
    'member-access-class': {
      begin: '(\\.)\\s*(?!\\.)',
      beginCaptures: {1: {name: 'punctuation.separator.period.scenic'}},
      end: '(?<=\\S)(?=\\W)|$',
      patterns: [
        {include: '#call-wrapper-inheritance'},
        {include: '#member-access-base'},
        {include: '#inheritance-identifier'}
      ]
    },
    number: {
      name: 'constant.numeric.scenic',
      patterns: [
        {include: '#number-float'},
        {include: '#number-dec'},
        {include: '#number-hex'},
        {include: '#number-oct'},
        {include: '#number-bin'},
        {include: '#number-long'},
        {match: '\\b[0-9]+\\w+', name: 'invalid.illegal.name.scenic'}
      ]
    },
    'number-bin': {
      captures: {1: {name: 'storage.type.number.scenic'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[bB]) (_?[01])+\n  \\b\n',
      name: 'constant.numeric.bin.scenic'
    },
    'number-dec': {
      captures: {
        1: {name: 'storage.type.imaginary.number.scenic'},
        2: {name: 'invalid.illegal.dec.scenic'},
        3: {name: 'invalid.illegal.dec.scenic'}
      },
      match:
        '(?x)\n  (?<![\\w\\.])(?:\n      [1-9](?: _?[0-9] )*\n      |\n      0+\n      |\n      [0-9](?: _?[0-9] )* ([jJ])\n      |\n      0 ([0-9]+)(?![eE\\.])\n  )\\b\n',
      name: 'constant.numeric.dec.scenic'
    },
    'number-float': {
      captures: {1: {name: 'storage.type.imaginary.number.scenic'}},
      match:
        '(?x)\n  (?<! \\w)(?:\n    (?:\n      \\.[0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\.\n    ) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?\n    |\n    [0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )\n  )([jJ])?\\b\n',
      name: 'constant.numeric.float.scenic'
    },
    'number-hex': {
      captures: {1: {name: 'storage.type.number.scenic'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[xX]) (_?[0-9a-fA-F])+\n  \\b\n',
      name: 'constant.numeric.hex.scenic'
    },
    'number-long': {
      captures: {2: {name: 'storage.type.number.scenic'}},
      match: '(?x)\n  (?<![\\w\\.])\n    ([1-9][0-9]* | 0) ([lL])\n  \\b\n',
      name: 'constant.numeric.bin.scenic'
    },
    'number-oct': {
      captures: {1: {name: 'storage.type.number.scenic'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[oO]) (_?[0-7])+\n  \\b\n',
      name: 'constant.numeric.oct.scenic'
    },
    'old-instance-statement': {
      begin:
        "(?x)\n  # Case 1: at least one specifier.\n  ^\\s*\n  (?: (?: (ego) | [[:alpha:]_]\\w* ) \\s* (=) | (return))? \\s*\n  (?! True|False|None|NotImplemented|Ellipsis)\n  (?: (Point | OrientedPoint | Object)\\b | ([[:upper:]]\\w*))\n  (?=\n    \\s+ (?:\n      (?: with) \\s+ \\b[[:alpha:]_]\\w*\n      | (?:\n        at | offset\\ by | offset\\ along\n        | (?: (?: left | right | ahead)\\ of) | behind\n        | above | below\n        | beyond\n        | visible\\ from | visible\n        | not\\ visible\\ from | not\\ visible\n        | in | on\n        | contained\\ in\n        | following\n        | facing\\ (?: directly\\ )? (?: toward | away\\ from)\n        | facing | apparently\\ facing\n      )\n    )\n  )\\b\n\n# Case 2: assignment with no specifiers. Only match ego since otherwise\n#   we'd get annoying false positives while typing Python lines like\n#   'x = MyPythonClass()' before adding the parentheses.\n| ^\\s* (ego) \\s* (=) \\s*\n  (?: (Object)\\b | ([[:upper:]]\\w*))\n  (?= \\s* (?: \\#.*)? $ )\n\n# Case 3: name with no specifiers. We'll allow this since we only match\n#   capitalized names, which are rare as variable or side-effecting\n#   function names so we should get few false positives.\n| ^\\s* (?: (Object)\\b | ([[:upper:]]\\w*))\n  (?= \\s* (?: \\#.*)? $ )\n",
      beginCaptures: {
        1: {name: 'variable.language.special.ego.scenic'},
        10: {name: 'markup.italic markup.bold entity.name.instance.scenic'},
        11: {name: 'markup.bold entity.name.instance.scenic'},
        2: {name: 'keyword.operator.assignment.scenic'},
        3: {name: 'keyword.control.flow.scenic'},
        4: {name: 'markup.italic markup.bold entity.name.instance.scenic'},
        5: {name: 'markup.bold entity.name.instance.scenic'},
        6: {name: 'variable.language.special.ego.scenic'},
        7: {name: 'keyword.operator.assignment.scenic'},
        8: {name: 'markup.italic markup.bold entity.name.instance.scenic'},
        9: {name: 'markup.bold entity.name.instance.scenic'}
      },
      end: '\\n',
      name: 'meta.instance.scenic',
      patterns: [{include: '#specifier'}, {include: '#line-continuation'}]
    },
    'old-monitor-declaration': {
      begin:
        '(?x)\n  ^\\s*\n  (monitor)\\s+\n    (?=\n      [[:alpha:]_][[:word:]]* \\s* :\n    )\n',
      beginCaptures: {1: {name: 'storage.type.function.scenic'}},
      end: '(:)',
      endCaptures: {1: {name: 'punctuation.section.function.begin.scenic'}},
      name: 'meta.function.scenic',
      patterns: [{include: '#function-def-name'}]
    },
    operator: {
      captures: {
        1: {name: 'keyword.operator.logical.scenic'},
        2: {name: 'keyword.control.flow.scenic'},
        3: {name: 'keyword.operator.bitwise.scenic'},
        4: {name: 'keyword.operator.arithmetic.scenic'},
        5: {name: 'keyword.operator.comparison.scenic'},
        6: {name: 'keyword.operator.assignment.scenic'},
        7: {name: 'keyword.operator.scenic'}
      },
      match:
        '(?x)\n    \\b(?<!\\.)\n      (?:\n        (and | or | not | in | is)                         (?# 1)\n        |\n        (for | if | else | await | (?:yield(?:\\s+from)?))  (?# 2)\n      )\n    (?!\\s*:)\\b\n\n    | (<< | >> | & | \\| | \\^ | ~)                          (?# 3)\n\n    | (\\*\\* | \\* | \\+ | - | % | // | / | @)                (?# 4)\n\n    | (!= | == | >= | <= | < | >)                          (?# 5)\n\n    | (:=)                                                 (?# 6)\n\n    | (                                                    (?# 7)\n      deg\n      | (?:\n          (?:relative | apparent)\\ heading\\ of\n          | distance\\ (?:from | to | past)\n          | (?:angle | altitude)\\ (?:from | to) | can\\ see\n          | at | relative\\ to\n          | offset\\ by | offset\\ along\n          | visible | not\\ visible\n          | (?:front | back | left | right | top | bottom)\\ of\n          | (?:(?:front | back | top | bottom)\\ (?:left | right))\\ of\n          | (?:(?:top | bottom)\\ (?:front | back))\\ of\n          | (?:(?:top | bottom)\\ (?:front | back)\\ (?:left | right))\\ of\n        )\\b(?! \\s* (?: [)}\\]=:.;,#] | $))\n      )\n'
    },
    'override-statement': {
      begin:
        '(?x)\n  ^\\s*\n  (override) \\s+ (?: (ego) | [[:alpha:]_]\\w*)\n  \\s+\n',
      beginCaptures: {
        1: {name: 'keyword.control.flow.scenic'},
        2: {name: 'variable.language.special.ego.scenic'}
      },
      end: '\\n',
      name: 'meta.override.scenic',
      patterns: [{include: '#specifier'}, {include: '#line-continuation'}]
    },
    'param-statement': {
      begin: '^\\s*(param)\\s+',
      beginCaptures: {1: {name: 'keyword.control.flow.scenic'}},
      end: '(\\#.*)?\\n',
      endCaptures: {1: {name: 'comment.line.number-sign.scenic'}},
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter.global.scenic'},
            2: {name: 'keyword.operator.assignment.scenic'}
          },
          match:
            '(?x)\n  ([[:alpha:]_]\\w* | \'[^\\\\\'"%{\\n]+\' | "[^\\\\\'"%{\\n]+")\n  \\s* (=) \\s*\n',
          name: 'meta.param.scenic'
        },
        {include: '#expression'}
      ]
    },
    'parameter-special': {
      captures: {
        1: {name: 'variable.parameter.function.language.scenic'},
        2: {name: 'variable.parameter.function.language.special.self.scenic'},
        3: {name: 'variable.parameter.function.language.special.cls.scenic'},
        4: {name: 'punctuation.separator.parameters.scenic'}
      },
      match: '(?x)\n  \\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))\n'
    },
    parameters: {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.scenic'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.scenic'}},
      name: 'meta.function.parameters.scenic',
      patterns: [
        {match: '/', name: 'keyword.operator.positional.parameter.scenic'},
        {
          match: '(\\*\\*|\\*)',
          name: 'keyword.operator.unpacking.parameter.scenic'
        },
        {include: '#lambda-incomplete'},
        {include: '#illegal-names'},
        {include: '#illegal-object-name'},
        {include: '#parameter-special'},
        {
          captures: {
            1: {name: 'variable.parameter.function.language.scenic'},
            2: {name: 'punctuation.separator.parameters.scenic'}
          },
          match:
            '(?x)\n  ([[:alpha:]_]\\w*)\n    \\s* (?: (,) | (?=[)#\\n=]))\n'
        },
        {include: '#comments'},
        {include: '#loose-default'},
        {include: '#annotated-parameter'}
      ]
    },
    'property-attribute': {
      patterns: [
        {
          match: '\\b(additive|dynamic|final)\\b',
          name: 'storage.type.property.scenic'
        }
      ]
    },
    'property-declaration': {
      patterns: [
        {
          begin:
            '(?x)\n  ^\\s+\n  (?!else|except|finally) ([[:alpha:]_]\\w*)\n  \\s*\n  (?: (\\[) (?= [\\w\\s,]* \\] \\s* : \\s* [^\\s\\#])\n    | (?= : \\s* [^\\s\\#]))\n',
          beginCaptures: {
            1: {name: 'entity.name.property.scenic'},
            2: {name: 'punctuation.definition.arguments.begin.scenic'}
          },
          end: '(?x)\n  (\\])? \\s* (:)\n',
          endCaptures: {
            1: {name: 'punctuation.definition.arguments.end.scenic'},
            2: {name: 'punctuation.separator.colon.scenic'}
          },
          name: 'meta.property.scenic',
          patterns: [
            {include: '#property-attribute'},
            {match: ',', name: 'punctuation.separator.element.scenic'}
          ]
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ':', name: 'punctuation.separator.colon.scenic'},
        {match: ',', name: 'punctuation.separator.element.scenic'}
      ]
    },
    regexp: {
      patterns: [
        {include: '#regexp-single-three-line'},
        {include: '#regexp-double-three-line'},
        {include: '#regexp-single-one-line'},
        {include: '#regexp-double-one-line'}
      ]
    },
    'regexp-backreference': {
      captures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp'
        },
        2: {name: 'entity.name.tag.named.backreference.regexp'},
        3: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp'
        }
      },
      match: '(?x)\n  (\\()  (\\?P= \\w+(?:\\s+[[:alnum:]]+)?)  (\\))\n',
      name: 'meta.backreference.named.regexp'
    },
    'regexp-backreference-number': {
      captures: {1: {name: 'entity.name.tag.backreference.regexp'}},
      match: '(\\\\[1-9]\\d?)',
      name: 'meta.backreference.regexp'
    },
    'regexp-base-common': {
      patterns: [
        {match: '\\.', name: 'support.other.match.any.regexp'},
        {match: '\\^', name: 'support.other.match.begin.regexp'},
        {match: '\\$', name: 'support.other.match.end.regexp'},
        {match: '[+*?]\\??', name: 'keyword.operator.quantifier.regexp'},
        {match: '\\|', name: 'keyword.operator.disjunction.regexp'},
        {include: '#regexp-escape-sequence'}
      ]
    },
    'regexp-base-expression': {
      patterns: [
        {include: '#regexp-quantifier'},
        {include: '#regexp-base-common'}
      ]
    },
    'regexp-charecter-set-escapes': {
      patterns: [
        {match: '\\\\[abfnrtv\\\\]', name: 'constant.character.escape.regexp'},
        {include: '#regexp-escape-special'},
        {match: '\\\\([0-7]{1,3})', name: 'constant.character.escape.regexp'},
        {include: '#regexp-escape-character'},
        {include: '#regexp-escape-unicode'},
        {include: '#regexp-escape-catchall'}
      ]
    },
    'regexp-double-one-line': {
      begin: '\\b(([uU]r)|([bB]r)|(r[bB]?))(")',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'storage.type.string.scenic'},
        5: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(")|(?<!\\\\)(\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.regexp.quoted.single.scenic',
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'regexp-double-three-line': {
      begin: '\\b(([uU]r)|([bB]r)|(r[bB]?))(""")',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'storage.type.string.scenic'},
        5: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(""")',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.regexp.quoted.multi.scenic',
      patterns: [{include: '#double-three-regexp-expression'}]
    },
    'regexp-escape-catchall': {
      match: '\\\\(.|\\n)',
      name: 'constant.character.escape.regexp'
    },
    'regexp-escape-character': {
      match:
        '(?x)\n  \\\\ (\n        x[0-9A-Fa-f]{2}\n        | 0[0-7]{1,2}\n        | [0-7]{3}\n     )\n',
      name: 'constant.character.escape.regexp'
    },
    'regexp-escape-sequence': {
      patterns: [
        {include: '#regexp-escape-special'},
        {include: '#regexp-escape-character'},
        {include: '#regexp-escape-unicode'},
        {include: '#regexp-backreference-number'},
        {include: '#regexp-escape-catchall'}
      ]
    },
    'regexp-escape-special': {
      match: '\\\\([AbBdDsSwWZ])',
      name: 'support.other.escape.special.regexp'
    },
    'regexp-escape-unicode': {
      match:
        '(?x)\n  \\\\ (\n        u[0-9A-Fa-f]{4}\n        | U[0-9A-Fa-f]{8}\n     )\n',
      name: 'constant.character.unicode.regexp'
    },
    'regexp-flags': {
      match: '\\(\\?[aiLmsux]+\\)',
      name: 'storage.modifier.flag.regexp'
    },
    'regexp-quantifier': {
      match: '(?x)\n  \\{(\n    \\d+ | \\d+,(\\d+)? | ,\\d+\n  )\\}\n',
      name: 'keyword.operator.quantifier.regexp'
    },
    'regexp-single-one-line': {
      begin: "\\b(([uU]r)|([bB]r)|(r[bB]?))(\\')",
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'storage.type.string.scenic'},
        5: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: "(\\')|(?<!\\\\)(\\n)",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.regexp.quoted.single.scenic',
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'regexp-single-three-line': {
      begin: "\\b(([uU]r)|([bB]r)|(r[bB]?))(\\'\\'\\')",
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'storage.type.string.scenic'},
        5: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: "(\\'\\'\\')",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.regexp.quoted.multi.scenic',
      patterns: [{include: '#single-three-regexp-expression'}]
    },
    'require-statement': {
      patterns: [
        {
          begin: '(?x)\n  ^\\s* (require) \\s+ (?!monitor)\n',
          beginCaptures: {1: {name: 'keyword.control.flow.scenic'}},
          end: '(?x) (\\#.*)? \\n',
          endCaptures: {1: {name: 'comment.line.number-sign.scenic'}},
          name: 'meta.requirement.scenic',
          patterns: [{include: '#temporal-expression'}]
        }
      ]
    },
    'return-annotation': {
      begin: '(->)',
      beginCaptures: {
        1: {name: 'punctuation.separator.annotation.result.scenic'}
      },
      end: '(?=:)',
      patterns: [{include: '#expression'}]
    },
    'round-braces': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.begin.scenic'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.end.scenic'}},
      patterns: [{include: '#expression'}]
    },
    'scenario-declaration': {
      begin:
        '(?x)\n  ^\\s*\n  (scenario | behavior | monitor)\\s+\n    (?=\n      [[:alpha:]_][[:word:]]* \\s* \\(\n    )\n',
      beginCaptures: {1: {name: 'storage.type.function.scenic'}},
      end: '(:|(?=[#\'"\\n]))',
      endCaptures: {1: {name: 'punctuation.section.function.begin.scenic'}},
      name: 'meta.function.scenic',
      patterns: [
        {include: '#function-def-name'},
        {include: '#parameters'},
        {include: '#line-continuation'},
        {include: '#return-annotation'}
      ]
    },
    semicolon: {
      patterns: [{match: '\\;$', name: 'invalid.deprecated.semicolon.scenic'}]
    },
    'single-one-regexp-character-set': {
      patterns: [
        {match: '(?x)\n  \\[ \\^? \\] (?! .*?\\])\n'},
        {
          begin: '(\\[)(\\^)?(\\])?',
          beginCaptures: {
            1: {
              name: 'punctuation.character.set.begin.regexp constant.other.set.regexp'
            },
            2: {name: 'keyword.operator.negation.regexp'},
            3: {name: 'constant.character.set.regexp'}
          },
          end: "(\\]|(?=\\'))|((?=(?<!\\\\)\\n))",
          endCaptures: {
            1: {
              name: 'punctuation.character.set.end.regexp constant.other.set.regexp'
            },
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'meta.character.set.regexp',
          patterns: [
            {include: '#regexp-charecter-set-escapes'},
            {match: '[^\\n]', name: 'constant.character.set.regexp'}
          ]
        }
      ]
    },
    'single-one-regexp-comments': {
      begin: '\\(\\?#',
      beginCaptures: {0: {name: 'punctuation.comment.begin.regexp'}},
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {name: 'punctuation.comment.end.regexp'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'comment.regexp',
      patterns: [{include: '#codetags'}]
    },
    'single-one-regexp-conditional': {
      begin: '(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)',
      beginCaptures: {
        0: {name: 'keyword.operator.conditional.regexp'},
        1: {name: 'punctuation.parenthesis.conditional.begin.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-expression': {
      patterns: [
        {include: '#regexp-base-expression'},
        {include: '#single-one-regexp-character-set'},
        {include: '#single-one-regexp-comments'},
        {include: '#regexp-flags'},
        {include: '#single-one-regexp-named-group'},
        {include: '#regexp-backreference'},
        {include: '#single-one-regexp-lookahead'},
        {include: '#single-one-regexp-lookahead-negative'},
        {include: '#single-one-regexp-lookbehind'},
        {include: '#single-one-regexp-lookbehind-negative'},
        {include: '#single-one-regexp-conditional'},
        {include: '#single-one-regexp-parentheses-non-capturing'},
        {include: '#single-one-regexp-parentheses'}
      ]
    },
    'single-one-regexp-lookahead': {
      begin: '(\\()\\?=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-lookahead-negative': {
      begin: '(\\()\\?!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-lookbehind': {
      begin: '(\\()\\?<=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-lookbehind-negative': {
      begin: '(\\()\\?<!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-named-group': {
      begin: '(?x)\n  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)\n',
      beginCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp'
        },
        2: {name: 'entity.name.tag.named.group.regexp'}
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.named.regexp',
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-parentheses': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp'
        }
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-one-regexp-parentheses-non-capturing': {
      begin: '\\(\\?:',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp'
        }
      },
      end: "(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'single-three-regexp-character-set': {
      patterns: [
        {match: '(?x)\n  \\[ \\^? \\] (?! .*?\\])\n'},
        {
          begin: '(\\[)(\\^)?(\\])?',
          beginCaptures: {
            1: {
              name: 'punctuation.character.set.begin.regexp constant.other.set.regexp'
            },
            2: {name: 'keyword.operator.negation.regexp'},
            3: {name: 'constant.character.set.regexp'}
          },
          end: "(\\]|(?=\\'\\'\\'))",
          endCaptures: {
            1: {
              name: 'punctuation.character.set.end.regexp constant.other.set.regexp'
            },
            2: {name: 'invalid.illegal.newline.scenic'}
          },
          name: 'meta.character.set.regexp',
          patterns: [
            {include: '#regexp-charecter-set-escapes'},
            {match: '[^\\n]', name: 'constant.character.set.regexp'}
          ]
        }
      ]
    },
    'single-three-regexp-comments': {
      begin: '\\(\\?#',
      beginCaptures: {0: {name: 'punctuation.comment.begin.regexp'}},
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {name: 'punctuation.comment.end.regexp'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'comment.regexp',
      patterns: [{include: '#codetags'}]
    },
    'single-three-regexp-conditional': {
      begin: '(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)',
      beginCaptures: {
        0: {name: 'keyword.operator.conditional.regexp'},
        1: {name: 'punctuation.parenthesis.conditional.begin.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-expression': {
      patterns: [
        {include: '#regexp-base-expression'},
        {include: '#single-three-regexp-character-set'},
        {include: '#single-three-regexp-comments'},
        {include: '#regexp-flags'},
        {include: '#single-three-regexp-named-group'},
        {include: '#regexp-backreference'},
        {include: '#single-three-regexp-lookahead'},
        {include: '#single-three-regexp-lookahead-negative'},
        {include: '#single-three-regexp-lookbehind'},
        {include: '#single-three-regexp-lookbehind-negative'},
        {include: '#single-three-regexp-conditional'},
        {include: '#single-three-regexp-parentheses-non-capturing'},
        {include: '#single-three-regexp-parentheses'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-lookahead': {
      begin: '(\\()\\?=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-lookahead-negative': {
      begin: '(\\()\\?!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookahead.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookahead.begin.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-lookbehind': {
      begin: '(\\()\\?<=',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-lookbehind-negative': {
      begin: '(\\()\\?<!',
      beginCaptures: {
        0: {name: 'keyword.operator.lookbehind.negative.regexp'},
        1: {name: 'punctuation.parenthesis.lookbehind.begin.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-named-group': {
      begin: '(?x)\n  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)\n',
      beginCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp'
        },
        2: {name: 'entity.name.tag.named.group.regexp'}
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'meta.named.regexp',
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-parentheses': {
      begin: '\\(',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp'
        }
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'single-three-regexp-parentheses-non-capturing': {
      begin: '\\(\\?:',
      beginCaptures: {
        0: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp'
        }
      },
      end: "(\\)|(?=\\'\\'\\'))",
      endCaptures: {
        1: {
          name: 'support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp'
        },
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'special-names': {
      match:
        '(?x)\n  \\b\n    # we want to see "enough", meaning 2 or more upper-case\n    # letters in the beginning of the constant\n    #\n    # for more details refer to:\n    #   https://github.com/MagicStack/MagicPython/issues/42\n    (\n      _* [[:upper:]] [_\\d]* [[:upper:]]\n    )\n    [[:upper:]\\d]* (_\\w*)?\n  \\b\n',
      name: 'constant.other.caps.scenic'
    },
    'special-variables': {
      captures: {
        1: {name: 'variable.language.special.self.scenic'},
        2: {name: 'variable.language.special.cls.scenic'},
        3: {name: 'variable.language.special.ego.scenic'},
        4: {name: 'variable.language.special.workspace.scenic'}
      },
      match:
        '(?x)\n  \\b (?<!\\.) (?:\n    (self) | (cls) | (ego) | (workspace)\n  )\\b\n'
    },
    specifier: {
      begin:
        '(?x)\n  \\b(?<!\\.) (?:\n    (with) \\s+ \\b([[:alpha:]_]\\w*)\n    | (\n      at | offset\\ by | offset\\ along\n      | ((left | right | ahead)\\ of) | behind\n      | above | below\n      | beyond\n      | visible\\ from | visible\n      | not\\ visible\\ from | not\\ visible\n      | in | on\n      | contained\\ in\n      | following\n      | facing\\ (?:directly\\ )? (toward | away\\ from)\n      | facing | apparently\\ facing\n    )\n  )\\b\n',
      beginCaptures: {
        1: {name: 'keyword.other.specifier.scenic'},
        2: {name: 'entity.name.property.scenic'},
        3: {name: 'keyword.other.specifier.scenic'}
      },
      end: '(?x)\n  (,) \\s* (?: (\\#.*)? \\n)?\n  | (?=[)}\\]\\n])\n',
      endCaptures: {
        1: {name: 'punctuation.separator.specifier.scenic'},
        2: {name: 'comment.line.number-sign.scenic'}
      },
      name: 'meta.specifier.scenic',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.continuation.line.scenic'}
          },
          match: '(\\\\)\\s*\\n'
        },
        {include: '#expression'}
      ]
    },
    statement: {
      patterns: [
        {include: '#import'},
        {include: '#class-declaration'},
        {include: '#function-declaration'},
        {include: '#scenario-declaration'},
        {include: '#old-monitor-declaration'},
        {include: '#statement-keyword'},
        {include: '#override-statement'},
        {include: '#param-statement'},
        {include: '#require-statement'},
        {include: '#statement-keyword-scenic'},
        {include: '#assignment-operator'},
        {include: '#decorator'},
        {include: '#property-declaration'},
        {include: '#docstring-statement'},
        {include: '#semicolon'},
        {include: '#old-instance-statement'}
      ]
    },
    'statement-keyword': {
      patterns: [
        {
          match: '\\b((async\\s+)?\\s*def)\\b',
          name: 'storage.type.function.scenic'
        },
        {
          match:
            '(?x)\n  \\b(?<!\\.)(\n    as | async | continue | del | assert | break | finally | for\n    | from | elif | else | if | except | pass | raise\n    | return | try | while | with\n  )\\b\n',
          name: 'keyword.control.flow.scenic'
        },
        {
          match: '(?x)\n  \\b(?<!\\.)(\n    global | nonlocal\n  )\\b\n',
          name: 'storage.modifier.declaration.scenic'
        },
        {match: '\\b(?<!\\.)(class)\\b', name: 'storage.type.class.scenic'},
        {
          captures: {1: {name: 'keyword.control.flow.scenic'}},
          match:
            '(?x)\n  ^\\s*(\n    case | match\n  )(?=\\s*([-+\\w\\d(\\[{\'":#]|$))\\b\n'
        }
      ]
    },
    'statement-keyword-scenic': {
      patterns: [
        {
          match:
            '(?x)\n  ^\\s*(\n    model | simulator | param\n    | require\\ monitor | require\n    | terminate\\ when | terminate\\ after\n    | terminate\\ simulation\\ when\n    | mutate\n    | record\\ initial | record\\ final | record\n    | take | wait | terminate\\ simulation | terminate\n    | do\\ choose | do\\ shuffle | do\n    | abort | override\n    | interrupt\\ when\n  )\\b (?!\\s*[:.;,])\n',
          name: 'keyword.control.flow.scenic'
        },
        {
          match:
            '(?x)\n  \\b(?<!\\.)(seconds | steps)\\b (?= \\s*(\\#.*)? $)\n',
          name: 'keyword.control.flow.scenic'
        },
        {
          captures: {
            1: {name: 'keyword.control.flow.scenic'},
            2: {name: 'punctuation.section.function.begin.scenic'}
          },
          match:
            '(?x)\n  ^\\s*(setup | compose | precondition | invariant)(:)\n',
          name: 'keyword.control.flow.scenic'
        }
      ]
    },
    string: {
      patterns: [
        {include: '#string-quoted-multi-line'},
        {include: '#string-quoted-single-line'},
        {include: '#string-bin-quoted-multi-line'},
        {include: '#string-bin-quoted-single-line'},
        {include: '#string-raw-quoted-multi-line'},
        {include: '#string-raw-quoted-single-line'},
        {include: '#string-raw-bin-quoted-multi-line'},
        {include: '#string-raw-bin-quoted-single-line'},
        {include: '#fstring-fnorm-quoted-multi-line'},
        {include: '#fstring-fnorm-quoted-single-line'},
        {include: '#fstring-normf-quoted-multi-line'},
        {include: '#fstring-normf-quoted-single-line'},
        {include: '#fstring-raw-quoted-multi-line'},
        {include: '#fstring-raw-quoted-single-line'}
      ]
    },
    'string-bin-quoted-multi-line': {
      begin: '(\\b[bB])(\'\'\'|""")',
      beginCaptures: {
        1: {name: 'storage.type.string.scenic'},
        2: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\2)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.binary.multi.scenic',
      patterns: [{include: '#string-entity'}]
    },
    'string-bin-quoted-single-line': {
      begin: '(\\b[bB])(([\'"]))',
      beginCaptures: {
        1: {name: 'storage.type.string.scenic'},
        2: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.binary.single.scenic',
      patterns: [{include: '#string-entity'}]
    },
    'string-brace-formatting': {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.format.placeholder.other.scenic'},
            3: {name: 'storage.type.format.scenic'},
            4: {name: 'storage.type.format.scenic'}
          },
          match:
            '(?x)\n  (\n    {{ | }}\n    | (?:\n      {\n        \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]\'"]+\\])*\n        (![rsa])?\n        ( : \\w? [<>=^]? [-+ ]? \\#?\n          \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )?\n      })\n  )\n',
          name: 'meta.format.brace.scenic'
        },
        {
          captures: {
            1: {name: 'constant.character.format.placeholder.other.scenic'},
            3: {name: 'storage.type.format.scenic'},
            4: {name: 'storage.type.format.scenic'}
          },
          match:
            '(?x)\n  (\n    {\n      \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]\'"]+\\])*\n      (![rsa])?\n      (:)\n        [^\'"{}\\n]* (?:\n          \\{ [^\'"}\\n]*? \\} [^\'"{}\\n]*\n        )*\n    }\n  )\n',
          name: 'meta.format.brace.scenic'
        }
      ]
    },
    'string-consume-escape': {match: '\\\\[\'"\\n\\\\]'},
    'string-entity': {
      patterns: [
        {include: '#escape-sequence'},
        {include: '#string-line-continuation'},
        {include: '#string-formatting'}
      ]
    },
    'string-formatting': {
      captures: {
        1: {name: 'constant.character.format.placeholder.other.scenic'}
      },
      match:
        '(?x)\n  (\n    % (\\([\\w\\s]*\\))?\n      [-+#0 ]*\n      (\\d+|\\*)? (\\.(\\d+|\\*))?\n      ([hlL])?\n      [diouxXeEfFgGcrsab%]\n  )\n',
      name: 'meta.format.percent.scenic'
    },
    'string-line-continuation': {
      match: '\\\\$',
      name: 'constant.language.scenic'
    },
    'string-multi-bad-brace1-formatting-raw': {
      begin:
        '(?x)\n    (?= \\{%\n          ( .*? (?!\'\'\'|""") )\n        %\\}\n    )\n',
      end: '(?=\'\'\'|""")',
      patterns: [{include: '#string-consume-escape'}]
    },
    'string-multi-bad-brace1-formatting-unicode': {
      begin:
        '(?x)\n    (?= \\{%\n          ( .*? (?!\'\'\'|""") )\n        %\\}\n    )\n',
      end: '(?=\'\'\'|""")',
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#escape-sequence'},
        {include: '#string-line-continuation'}
      ]
    },
    'string-multi-bad-brace2-formatting-raw': {
      begin:
        '(?x)\n    (?!\\{\\{)\n    (?= \\{ (\n              \\w*? (?!\'\'\'|""") [^!:\\.\\[}\\w]\n           )\n        .*?(?!\'\'\'|""")\n        \\}\n    )\n',
      end: '(?=\'\'\'|""")',
      patterns: [
        {include: '#string-consume-escape'},
        {include: '#string-formatting'}
      ]
    },
    'string-multi-bad-brace2-formatting-unicode': {
      begin:
        '(?x)\n    (?!\\{\\{)\n    (?= \\{ (\n              \\w*? (?!\'\'\'|""") [^!:\\.\\[}\\w]\n           )\n        .*?(?!\'\'\'|""")\n        \\}\n    )\n',
      end: '(?=\'\'\'|""")',
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#string-entity'}
      ]
    },
    'string-quoted-multi-line': {
      begin: '(?:\\b([rR])(?=[uU]))?([uU])?(\'\'\'|""")',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.scenic'},
        2: {name: 'storage.type.string.scenic'},
        3: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\3)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.multi.scenic',
      patterns: [
        {include: '#string-multi-bad-brace1-formatting-unicode'},
        {include: '#string-multi-bad-brace2-formatting-unicode'},
        {include: '#string-unicode-guts'}
      ]
    },
    'string-quoted-single-line': {
      begin: '(?:\\b([rR])(?=[uU]))?([uU])?(([\'"]))',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.scenic'},
        2: {name: 'storage.type.string.scenic'},
        3: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.single.scenic',
      patterns: [
        {include: '#string-single-bad-brace1-formatting-unicode'},
        {include: '#string-single-bad-brace2-formatting-unicode'},
        {include: '#string-unicode-guts'}
      ]
    },
    'string-raw-bin-guts': {
      patterns: [
        {include: '#string-consume-escape'},
        {include: '#string-formatting'}
      ]
    },
    'string-raw-bin-quoted-multi-line': {
      begin: '(\\b(?:R[bB]|[bB]R))(\'\'\'|""")',
      beginCaptures: {
        1: {name: 'storage.type.string.scenic'},
        2: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\2)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.raw.binary.multi.scenic',
      patterns: [{include: '#string-raw-bin-guts'}]
    },
    'string-raw-bin-quoted-single-line': {
      begin: '(\\b(?:R[bB]|[bB]R))(([\'"]))',
      beginCaptures: {
        1: {name: 'storage.type.string.scenic'},
        2: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.raw.binary.single.scenic',
      patterns: [{include: '#string-raw-bin-guts'}]
    },
    'string-raw-guts': {
      patterns: [
        {include: '#string-consume-escape'},
        {include: '#string-formatting'},
        {include: '#string-brace-formatting'}
      ]
    },
    'string-raw-quoted-multi-line': {
      begin: '\\b(([uU]R)|(R))(\'\'\'|""")',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\4)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.raw.multi.scenic',
      patterns: [
        {include: '#string-multi-bad-brace1-formatting-raw'},
        {include: '#string-multi-bad-brace2-formatting-raw'},
        {include: '#string-raw-guts'}
      ]
    },
    'string-raw-quoted-single-line': {
      begin: '\\b(([uU]R)|(R))(([\'"]))',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.scenic'},
        3: {name: 'storage.type.string.scenic'},
        4: {name: 'punctuation.definition.string.begin.scenic'}
      },
      end: '(\\4)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.scenic'},
        2: {name: 'invalid.illegal.newline.scenic'}
      },
      name: 'string.quoted.raw.single.scenic',
      patterns: [
        {include: '#string-single-bad-brace1-formatting-raw'},
        {include: '#string-single-bad-brace2-formatting-raw'},
        {include: '#string-raw-guts'}
      ]
    },
    'string-single-bad-brace1-formatting-raw': {
      begin:
        '(?x)\n    (?= \\{%\n          ( .*? (?!([\'"])|((?<!\\\\)\\n)) )\n        %\\}\n    )\n',
      end: '(?=([\'"])|((?<!\\\\)\\n))',
      patterns: [{include: '#string-consume-escape'}]
    },
    'string-single-bad-brace1-formatting-unicode': {
      begin:
        '(?x)\n    (?= \\{%\n          ( .*? (?!([\'"])|((?<!\\\\)\\n)) )\n        %\\}\n    )\n',
      end: '(?=([\'"])|((?<!\\\\)\\n))',
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#escape-sequence'},
        {include: '#string-line-continuation'}
      ]
    },
    'string-single-bad-brace2-formatting-raw': {
      begin:
        '(?x)\n    (?!\\{\\{)\n    (?= \\{ (\n              \\w*? (?!([\'"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]\n           )\n        .*?(?!([\'"])|((?<!\\\\)\\n))\n        \\}\n    )\n',
      end: '(?=([\'"])|((?<!\\\\)\\n))',
      patterns: [
        {include: '#string-consume-escape'},
        {include: '#string-formatting'}
      ]
    },
    'string-single-bad-brace2-formatting-unicode': {
      begin:
        '(?x)\n    (?!\\{\\{)\n    (?= \\{ (\n              \\w*? (?!([\'"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]\n           )\n        .*?(?!([\'"])|((?<!\\\\)\\n))\n        \\}\n    )\n',
      end: '(?=([\'"])|((?<!\\\\)\\n))',
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#string-entity'}
      ]
    },
    'string-unicode-guts': {
      patterns: [
        {include: '#escape-sequence-unicode'},
        {include: '#string-entity'},
        {include: '#string-brace-formatting'}
      ]
    },
    'temporal-expression': {
      patterns: [
        {
          match: '(?x)\n  (always | eventually | next | until | implies)\\b\n',
          name: 'keyword.control.flow.scenic'
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.parenthesis.begin.scenic'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.parenthesis.end.scenic'}},
          patterns: [{include: '#temporal-expression'}]
        },
        {include: '#expression'}
      ]
    }
  },
  scopeName: 'source.scenic'
}

export default grammar
