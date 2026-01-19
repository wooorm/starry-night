// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jaseci-labs/jac-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.jac'],
  names: ['jac'],
  patterns: [{include: '#elements'}],
  repository: {
    ability: {
      patterns: [
        {
          begin:
            '(?x)\\b(can|with|def|impl|sem)\\b(?=\\s*[[:alpha:]_]\\w*|\\s*({|;|\\(||\\n))',
          beginCaptures: {1: {name: 'storage.type.function.jac'}},
          end: '(?=\\)|{)|;',
          endCaptures: {1: {name: 'punctuation.section.function.begin.jac'}},
          name: 'meta.function.jac',
          patterns: [
            {include: '#comments'},
            {match: ',', name: 'punctuation.separator.jac'},
            {include: '#parameters'},
            {include: '#builtin-types'},
            {include: '#statement-keyword'},
            {include: '#string'},
            {include: '#archetype_refdef'},
            {include: '#arch-reference'},
            {include: '#arch-var-reference'},
            {
              match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
              name: 'entity.name.function.jac'
            }
          ]
        }
      ]
    },
    'annotated-parameter': {
      begin: '(?x)\n  \\b\n  ([[:alpha:]_]\\w*) \\s* (:)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.jac'},
        2: {name: 'punctuation.separator.annotation.jac'}
      },
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.jac'}},
      patterns: [
        {include: '#expression'},
        {match: '=(?!=)', name: 'keyword.operator.assignment.jac'}
      ]
    },
    'arch-declaration': {
      patterns: [
        {
          begin:
            '(?x)\\s*(enum|obj|class|node|edge|walker|test)\\s*(?=\\s*[[:alpha:]_]\\w*|\\s*({|;|\\n))',
          beginCaptures: {1: {name: 'storage.type.class.jac'}},
          end: '({|;)',
          endCaptures: {1: {name: 'punctuation.section.class.begin.jac'}},
          name: 'meta.class.jac',
          patterns: [{include: '#class-name'}, {include: '#class-inheritance'}]
        }
      ]
    },
    'arch-reference': {
      patterns: [
        {
          begin: '(impl|sem)\\s*(?=\\s*[[:alpha:]_]\\w*|\\s*( |:|\\n))',
          beginCaptures: {1: {name: 'storage.type.class.jac'}},
          end: '((?=:| )|;)',
          endCaptures: {1: {name: 'punctuation.section.class.begin.jac'}},
          name: 'meta.class.jac',
          patterns: [{include: '#class-name'}, {include: '#class-inheritance'}]
        }
      ]
    },
    'arch-var-reference': {
      patterns: [
        {
          captures: {1: {name: 'storage.type.class.jac'}},
          match: '(here|visitor|self|init|postinit|super|root)\\s*'
        }
      ]
    },
    archetype: {
      patterns: [
        {
          begin:
            '(?x)\\b(enum|obj|class|node|edge|walker|test)\\b(?=\\s+[[:alpha:]_]\\w*|\\s*({|;|\\n))',
          beginCaptures: {1: {name: 'storage.type.class.jac'}},
          end: '(?={)|;',
          endCaptures: {1: {name: 'punctuation.section.class.begin.jac'}},
          name: 'meta.class.jac',
          patterns: [{include: '#class-name'}, {include: '#class-inheritance'}]
        }
      ]
    },
    archetype_refdef: {
      patterns: [
        {
          begin: '(impl|sem)',
          beginCaptures: {1: {name: 'storage.type.class.jac'}},
          end: '(?=:|{|\\W)',
          endCaptures: {1: {name: 'punctuation.section.class.begin.jac'}},
          name: 'meta.class.jac',
          patterns: [
            {include: '#comments'},
            {
              match: '\\b([[:alpha:]_]\\w*)\\b',
              name: 'entity.name.type.class.jac'
            }
          ]
        }
      ]
    },
    'assignment-operator': {
      match:
        '(?x)\n     <<= | >>= | //= | \\*\\*=\n    | \\+= | -= | /= | @=\n    | \\*= | %= | ~= | \\^= | &= | \\|=\n    | =(?!=)\n',
      name: 'keyword.operator.assignment.jac'
    },
    'builtin-callables': {
      patterns: [
        {include: '#illegal-names'},
        {include: '#illegal-object-name'},
        {include: '#builtin-exceptions'},
        {include: '#builtin-functions'},
        {include: '#builtin-types'}
      ]
    },
    'builtin-exceptions': {
      match:
        '(?x) (?<!\\.) \\b(\n  (\n    Arithmetic | Assertion | Attribute | Buffer | BlockingIO\n    | BrokenPipe | ChildProcess\n    | (Connection (Aborted | Refused | Reset)?)\n    | EOF | Environment | FileExists | FileNotFound\n    | FloatingPoint | IO | Import | Indentation | Index | Interrupted\n    | IsADirectory | NotADirectory | Permission | ProcessLookup\n    | Timeout\n    | Key | Lookup | Memory | Name | NotImplemented | OS | Overflow\n    | Reference | Runtime | Recursion | Syntax | System\n    | Tab | Type | UnboundLocal | Unicode(Encode|Decode|Translate)?\n    | Value | Windows | ZeroDivision | ModuleNotFound\n  ) Error\n|\n  ((Pending)?Deprecation | Runtime | Syntax | User | Future | Import\n    | Unicode | Bytes | Resource\n  )? Warning\n|\n  SystemExit | Stop(Async)?Iteration\n  | KeyboardInterrupt\n  | GeneratorExit | (Base)?Exception\n)\\b\n',
      name: 'support.type.exception.jac'
    },
    'builtin-functions': {
      patterns: [
        {
          match:
            '(?x)\n  (?<!\\.) \\b(\n    __import__ | abs | aiter | all | anext | ascii | bin\n    | breakpoint | callable | chr | compile | copyright | credits\n    | delattr | dir | divmod | enumerate | eval | exec | exit\n    | filter | format | getattr | globals | hasattr | hash | help\n    | hex | id | input | isinstance | issubclass | iter | len\n    | license | locals | map | max | memoryview | min | next\n    | oct | open | ord | pow | print | quit | range | reload | repr\n    | reversed | round | setattr | sorted | sum | vars | zip\n  )\\b\n',
          name: 'support.function.builtin.jac'
        },
        {
          match:
            '(?x)\n  (?<!\\.) \\b(\n    file | reduce | intern | raw_input | unicode | cmp | basestring\n    | execfile | long | xrange\n  )\\b\n',
          name: 'variable.legacy.builtin.jac'
        }
      ]
    },
    'builtin-possible-callables': {
      patterns: [{include: '#builtin-callables'}, {include: '#magic-names'}]
    },
    'builtin-types': {
      match:
        '(?x)(?<!\\.) \\b(str|int|float|list|tuple|set|dict|bool|bytes|any|type)\\b\n',
      name: 'support.type.jac'
    },
    c_style_block_comment: {
      begin: '(#\\*)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.begin.jac'}},
      end: '(\\*#)',
      endCaptures: {1: {name: 'punctuation.definition.comment.end.jac'}},
      name: 'comment.block.jac',
      patterns: [{include: '#codetags'}]
    },
    'call-wrapper-inheritance': {
      begin: '(?x)\n  \\b(?=\n    ([[:alpha:]_]\\w*) \\s* (\\()\n  )\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.jac'}},
      name: 'meta.function-call.jac',
      patterns: [
        {include: '#inheritance-name'},
        {include: '#function-arguments'}
      ]
    },
    'class-inheritance': {
      begin: '(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.inheritance.begin.jac'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.inheritance.end.jac'}},
      name: 'meta.class.inheritance.jac',
      patterns: [
        {
          match: '(\\*\\*|\\*)',
          name: 'keyword.operator.unpacking.arguments.jac'
        },
        {match: ',', name: 'punctuation.separator.inheritance.jac'},
        {match: '=(?!=)', name: 'keyword.operator.assignment.jac'},
        {match: '\\bmetaclass\\b', name: 'support.type.metaclass.jac'},
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
          name: 'entity.other.inherited-class.jac variable.parameter.class.jac'
        },
        2: {name: 'keyword.operator.assignment.jac'}
      },
      match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\s*(=)(?!=)\n'
    },
    'class-name': {
      patterns: [
        {include: '#illegal-object-name'},
        {include: '#builtin-possible-callables'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'entity.name.type.class.jac'
        }
      ]
    },
    codetags: {
      captures: {1: {name: 'keyword.codetag.notation.jac'}},
      match: '(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)'
    },
    comments: {
      patterns: [
        {include: '#c_style_block_comment'},
        {include: '#py_style_comment'}
      ]
    },
    'comments-base': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jac'}},
      end: '($)',
      name: 'comment.line.number-sign.jac',
      patterns: [{include: '#codetags'}]
    },
    'comments-string-double-three': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jac'}},
      end: '($|(?="""))',
      name: 'comment.line.number-sign.jac',
      patterns: [{include: '#codetags'}]
    },
    'comments-string-single-three': {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jac'}},
      end: "($|(?='''))",
      name: 'comment.line.number-sign.jac',
      patterns: [{include: '#codetags'}]
    },
    'curly-braces': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.dict.begin.jac'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.dict.end.jac'}},
      patterns: [
        {match: ':', name: 'punctuation.separator.dict.jac'},
        {include: '#expression'}
      ]
    },
    decorator: {
      begin: '(?x)\n  ^\\s*\n  ((@)) \\s* (?=[[:alpha:]_]\\w*)\n',
      beginCaptures: {
        1: {name: 'entity.name.function.decorator.jac'},
        2: {name: 'punctuation.definition.decorator.jac'}
      },
      end: '(?x)\n  ( \\) )\n    # trailing whitespace and comments are legal\n    (?: (.*?) (?=\\s*(?:\\#|$)) )\n  | (?=\\n|\\#)\n',
      endCaptures: {
        1: {name: 'punctuation.definition.arguments.end.jac'},
        2: {name: 'invalid.illegal.decorator.jac'}
      },
      name: 'meta.function.decorator.jac',
      patterns: [{include: '#decorator-name'}, {include: '#function-arguments'}]
    },
    'decorator-name': {
      patterns: [
        {include: '#builtin-callables'},
        {include: '#illegal-object-name'},
        {
          captures: {2: {name: 'punctuation.separator.period.jac'}},
          match: '(?x)\n  ([[:alpha:]_]\\w*) | (\\.)\n',
          name: 'entity.name.function.decorator.jac'
        },
        {include: '#line-continuation'},
        {
          captures: {1: {name: 'invalid.illegal.decorator.jac'}},
          match: '(?x)\n  \\s* ([^([:alpha:]\\s_\\.#\\\\] .*?) (?=\\#|$)\n',
          name: 'invalid.illegal.decorator.jac'
        }
      ]
    },
    docstring: {
      patterns: [
        {
          begin: '(\\\'\\\'\\\'|\\"\\"\\")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.jac'}},
          end: '(\\1)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.jac'}},
          name: 'string.quoted.docstring.multi.jac',
          patterns: [
            {include: '#docstring-prompt'},
            {include: '#codetags'},
            {include: '#docstring-guts-unicode'}
          ]
        },
        {
          begin: '([rR])(\\\'\\\'\\\'|\\"\\"\\")',
          beginCaptures: {
            1: {name: 'storage.type.string.jac'},
            2: {name: 'punctuation.definition.string.begin.jac'}
          },
          end: '(\\2)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.jac'}},
          name: 'string.quoted.docstring.raw.multi.jac',
          patterns: [
            {include: '#string-consume-escape'},
            {include: '#docstring-prompt'},
            {include: '#codetags'}
          ]
        },
        {
          begin: '(\\\'|\\")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.jac'}},
          end: '(\\1)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.jac'},
            2: {name: 'invalid.illegal.newline.jac'}
          },
          name: 'string.quoted.docstring.single.jac',
          patterns: [
            {include: '#codetags'},
            {include: '#docstring-guts-unicode'}
          ]
        },
        {
          begin: '([rR])(\\\'|\\")',
          beginCaptures: {
            1: {name: 'storage.type.string.jac'},
            2: {name: 'punctuation.definition.string.begin.jac'}
          },
          end: '(\\2)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.jac'},
            2: {name: 'invalid.illegal.newline.jac'}
          },
          name: 'string.quoted.docstring.raw.single.jac',
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
      captures: {1: {name: 'keyword.control.flow.jac'}},
      match:
        "(?x)(?:(?:^|\\G) \\s* (?# '\\G' is necessary for ST)((?:>>>|\\.\\.\\.) \\s) (?=\\s*\\S))"
    },
    'docstring-statement': {
      begin: '^(?=\\s*[rR]?(\\\'\\\'\\\'|\\"\\"\\"))',
      end: '((?<=\\1)|^)(?!\\s*[rR]?(\\\'\\\'\\\'|\\"\\"\\"))',
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
            2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
            2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
      },
      patterns: [
        {include: '#double-three-regexp-expression'},
        {include: '#comments-string-double-three'}
      ]
    },
    elements: {
      patterns: [
        {include: '#import'},
        {include: '#global'},
        {include: '#sem'},
        {include: '#archetype'},
        {include: '#archetype_refdef'},
        {include: '#has'},
        {include: '#ability'},
        {include: '#general'}
      ]
    },
    ellipsis: {match: '\\.\\.\\.', name: 'constant.other.ellipsis.jac'},
    'escape-sequence': {
      match:
        '(?x)\n  \\\\ (\n        x[0-9A-Fa-f]{2}\n        | [0-7]{1,3}\n        | [\\\\"\'abfnrtv]\n     )\n',
      name: 'constant.character.escape.jac'
    },
    'escape-sequence-unicode': {
      patterns: [
        {
          match:
            '(?x)\n  \\\\ (\n        u[0-9A-Fa-f]{4}\n        | U[0-9A-Fa-f]{8}\n        | N\\{[\\w\\s]+?\\}\n     )\n',
          name: 'constant.character.escape.jac'
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
        {include: '#jsx'},
        {include: '#illegal-anno'},
        {include: '#literal'},
        {include: '#regexp'},
        {include: '#string'},
        {include: '#lambda'},
        {include: '#generator'},
        {include: '#illegal-operator'},
        {include: '#operator'},
        {include: '#curly-braces'},
        {include: '#item-access'},
        {include: '#list'},
        {include: '#odd-function-call'},
        {include: '#round-braces'},
        {include: '#function-call'},
        {include: '#builtin-functions'},
        {include: '#builtin-types'},
        {include: '#builtin-exceptions'},
        {include: '#magic-names'},
        {include: '#special-names'},
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
          name: 'string.interpolated.jac string.quoted.multi.jac storage.type.string.jac'
        },
        2: {name: 'invalid.illegal.prefix.jac'},
        3: {
          name: 'punctuation.definition.string.begin.jac string.interpolated.jac string.quoted.multi.jac'
        }
      },
      end: '(\\3)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.multi.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
          name: 'string.interpolated.jac string.quoted.single.jac storage.type.string.jac'
        },
        2: {name: 'invalid.illegal.prefix.jac'},
        3: {
          name: 'punctuation.definition.string.begin.jac string.interpolated.jac string.quoted.single.jac'
        }
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.single.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
            1: {name: 'constant.character.format.placeholder.other.jac'},
            2: {name: 'invalid.illegal.brace.jac'},
            3: {name: 'constant.character.format.placeholder.other.jac'}
          },
          match: '({)(\\s*?)(})'
        },
        {match: '({{|}})', name: 'constant.character.escape.jac'}
      ]
    },
    'fstring-formatting-singe-brace': {
      match: '(}(?!}))',
      name: 'invalid.illegal.brace.jac'
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
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      end: '(\\})|(?=\\n)',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      patterns: [
        {include: '#fstring-terminator-single'},
        {include: '#f-expression'}
      ]
    },
    'fstring-multi-brace': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      end: '(?x)\n  (\\})\n',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      patterns: [
        {include: '#fstring-terminator-multi'},
        {include: '#f-expression'}
      ]
    },
    'fstring-multi-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|\'\'\'|""")\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.jac string.quoted.multi.jac'
    },
    'fstring-normf-quoted-multi-line': {
      begin: '(\\b[bBuU])([fF])(\'\'\'|""")',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.jac'},
        2: {
          name: 'string.interpolated.jac string.quoted.multi.jac storage.type.string.jac'
        },
        3: {
          name: 'punctuation.definition.string.begin.jac string.quoted.multi.jac'
        }
      },
      end: '(\\3)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.multi.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
        1: {name: 'invalid.illegal.prefix.jac'},
        2: {
          name: 'string.interpolated.jac string.quoted.single.jac storage.type.string.jac'
        },
        3: {
          name: 'punctuation.definition.string.begin.jac string.quoted.single.jac'
        }
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.single.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
      name: 'string.interpolated.jac string.quoted.raw.multi.jac'
    },
    'fstring-raw-quoted-multi-line': {
      begin: '(\\b(?:[rR][fF]|[fF][rR]))(\'\'\'|""")',
      beginCaptures: {
        1: {
          name: 'string.interpolated.jac string.quoted.raw.multi.jac storage.type.string.jac'
        },
        2: {
          name: 'punctuation.definition.string.begin.jac string.quoted.raw.multi.jac'
        }
      },
      end: '(\\2)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.raw.multi.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
          name: 'string.interpolated.jac string.quoted.raw.single.jac storage.type.string.jac'
        },
        2: {
          name: 'punctuation.definition.string.begin.jac string.quoted.raw.single.jac'
        }
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.string.end.jac string.interpolated.jac string.quoted.raw.single.jac'
        },
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'meta.fstring.jac',
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
      name: 'string.interpolated.jac string.quoted.raw.single.jac'
    },
    'fstring-single-brace': {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      end: '(?x)\n  (\\})|(?=\\n)\n',
      endCaptures: {
        1: {name: 'constant.character.format.placeholder.other.jac'}
      },
      patterns: [
        {include: '#fstring-terminator-single'},
        {include: '#f-expression'}
      ]
    },
    'fstring-single-core': {
      match:
        '(?x)\n  (.+?)\n    (\n      (?# .* and .*? in multi-line match need special handling of\n        newlines otherwise SublimeText and Atom will match slightly\n        differently.\n\n        The guard for newlines has to be separate from the\n        lookahead because of special $ matching rule.)\n      ($\\n?)\n      |\n      (?=[\\\\\\}\\{]|([\'"])|((?<!\\\\)\\n))\n    )\n  (?# due to how multiline regexps are matched we need a special case\n    for matching a newline character)\n  | \\n\n',
      name: 'string.interpolated.jac string.quoted.single.jac'
    },
    'fstring-terminator-multi': {
      patterns: [
        {match: '(=(![rsa])?)(?=})', name: 'storage.type.format.jac'},
        {match: '(=?![rsa])(?=})', name: 'storage.type.format.jac'},
        {
          captures: {
            1: {name: 'storage.type.format.jac'},
            2: {name: 'storage.type.format.jac'}
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
        1: {name: 'storage.type.format.jac'},
        2: {name: 'storage.type.format.jac'}
      },
      end: '(?=})',
      patterns: [
        {include: '#fstring-illegal-multi-brace'},
        {include: '#fstring-multi-brace'},
        {match: '([bcdeEfFgGnosxX%])(?=})', name: 'storage.type.format.jac'},
        {match: '(\\.\\d+)', name: 'storage.type.format.jac'},
        {match: '(,)', name: 'storage.type.format.jac'},
        {match: '(\\d+)', name: 'storage.type.format.jac'},
        {match: '(\\#)', name: 'storage.type.format.jac'},
        {match: '([-+ ])', name: 'storage.type.format.jac'},
        {match: '([<>=^])', name: 'storage.type.format.jac'},
        {match: '(\\w)', name: 'storage.type.format.jac'}
      ]
    },
    'fstring-terminator-single': {
      patterns: [
        {match: '(=(![rsa])?)(?=})', name: 'storage.type.format.jac'},
        {match: '(=?![rsa])(?=})', name: 'storage.type.format.jac'},
        {
          captures: {
            1: {name: 'storage.type.format.jac'},
            2: {name: 'storage.type.format.jac'}
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
        1: {name: 'storage.type.format.jac'},
        2: {name: 'storage.type.format.jac'}
      },
      end: '(?=})|(?=\\n)',
      patterns: [
        {include: '#fstring-illegal-single-brace'},
        {include: '#fstring-single-brace'},
        {match: '([bcdeEfFgGnosxX%])(?=})', name: 'storage.type.format.jac'},
        {match: '(\\.\\d+)', name: 'storage.type.format.jac'},
        {match: '(,)', name: 'storage.type.format.jac'},
        {match: '(\\d+)', name: 'storage.type.format.jac'},
        {match: '(\\#)', name: 'storage.type.format.jac'},
        {match: '([-+ ])', name: 'storage.type.format.jac'},
        {match: '([<>=^])', name: 'storage.type.format.jac'},
        {match: '(\\w)', name: 'storage.type.format.jac'}
      ]
    },
    'function-arguments': {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.definition.arguments.begin.jac'}},
      contentName: 'meta.function-call.arguments.jac',
      end: '(?=\\))(?!\\)\\s*\\()',
      patterns: [
        {match: '(,)', name: 'punctuation.separator.arguments.jac'},
        {
          captures: {1: {name: 'keyword.operator.unpacking.arguments.jac'}},
          match: '(?x)\n  (?:(?<=[,(])|^) \\s* (\\*{1,2})\n'
        },
        {include: '#lambda-incomplete'},
        {include: '#illegal-names'},
        {
          captures: {
            1: {name: 'variable.parameter.function-call.jac'},
            2: {name: 'keyword.operator.assignment.jac'}
          },
          match: '\\b([[:alpha:]_]\\w*)\\s*(=)(?!=)'
        },
        {match: '=(?!=)', name: 'keyword.operator.assignment.jac'},
        {include: '#expression'},
        {
          captures: {
            1: {name: 'punctuation.definition.arguments.end.jac'},
            2: {name: 'punctuation.definition.arguments.begin.jac'}
          },
          match: '\\s*(\\))\\s*(\\()'
        }
      ]
    },
    'function-call': {
      begin: '(?x)\n  \\b(?=\n    ([[:alpha:]_]\\w*) \\s* (\\()\n  )\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.jac'}},
      name: 'meta.function-call.jac',
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
        1: {name: 'storage.type.function.async.jac'},
        2: {name: 'storage.type.function.jac'}
      },
      end: '(:|(?=[#\'"\\n]))',
      endCaptures: {1: {name: 'punctuation.section.function.begin.jac'}},
      name: 'meta.function.jac',
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
          name: 'entity.name.function.jac'
        }
      ]
    },
    'function-name': {
      patterns: [
        {include: '#builtin-possible-callables'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'meta.function-call.generic.jac'
        }
      ]
    },
    general: {
      patterns: [
        {include: '#comments'},
        {include: '#builtin-types'},
        {include: '#special-variables'},
        {include: '#statement-keyword'},
        {include: '#function-call'},
        {include: '#jsx'},
        {include: '#literal'},
        {include: '#operator'},
        {include: '#assignment-operator'},
        {include: '#docstring-statement'},
        {include: '#string'}
      ]
    },
    generator: {
      begin: '\\bfor\\b',
      beginCaptures: {0: {name: 'keyword.control.flow.jac'}},
      end: '\\bin\\b',
      endCaptures: {0: {name: 'keyword.control.flow.jac'}},
      patterns: [{include: '#expression'}]
    },
    global: {
      patterns: [
        {
          begin: '(?x)\\b(glob|let)\\b(?=\\s*[[:alpha:]_]\\w*|\\s*\\n)',
          beginCaptures: {1: {name: 'storage.type.variable.jac'}},
          end: ';',
          endCaptures: {1: {name: 'punctuation.section.class.begin.jac'}},
          name: 'meta.property.jac',
          patterns: [
            {include: '#comments'},
            {match: ',', name: 'punctuation.separator.jac'},
            {include: '#general'},
            {
              match: '\\b([[:alpha:]_]\\w*)\\s*(?=\\=)',
              name: 'entity.name.type.property.jac'
            }
          ]
        }
      ]
    },
    has: {
      patterns: [
        {
          begin: '(?x)\\b(has)\\b(?=\\s*[[:alpha:]_]\\w*|\\s*({|;|\\(||\\n))',
          beginCaptures: {1: {name: 'storage.type.function.jac'}},
          end: '(?=\\)|{)|;|by',
          endCaptures: {1: {name: 'punctuation.section.function.begin.jac'}},
          name: 'meta.property.jac',
          patterns: [
            {include: '#comments'},
            {match: ',', name: 'punctuation.separator.jac'},
            {include: '#general'},
            {
              captures: {
                1: {name: 'variable.parameter.language.jac'},
                2: {name: 'punctuation.separator.parameters.jac'}
              },
              match: '(?x)\n  ([[:alpha:]_]\\w*)\n    \\s* (?: (:) )\n'
            },
            {include: '#builtin-types'},
            {include: '#statement-keyword'},
            {
              match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
              name: 'entity.name.type.property.jac'
            }
          ]
        }
      ]
    },
    'illegal-anno': {match: '->', name: 'invalid.illegal.annotation.jac'},
    'illegal-names': {
      captures: {
        1: {name: 'keyword.control.flow.jac'},
        2: {name: 'keyword.control.import.jac'}
      },
      match:
        '(?x)\n  \\b(?:\n    (\n      and | assert | check | async | await | break | class | continue | def\n      | del | elif | else | except | finally | for | from | global\n      | if | in | is | (?<=\\.)lambda | lambda(?=\\s*[\\.=])\n      | nonlocal | not | or | pass | raise | return | try | while | with\n      | yield\n    ) | (\n      as | import\n    )\n  )\\b\n'
    },
    'illegal-object-name': {
      match: '\\b(True|False|None)\\b',
      name: 'keyword.illegal.name.jac'
    },
    'illegal-operator': {
      patterns: [
        {match: '&&|\\|\\||--|\\+\\+', name: 'invalid.illegal.operator.jac'},
        {match: '!\\b', name: 'invalid.illegal.operator.jac'}
      ]
    },
    import: {
      patterns: [
        {
          begin: '\\b(?<!\\.)(import|include)\\b',
          beginCaptures: {1: {name: 'keyword.control.import.jac'}},
          end: ';|}',
          patterns: [
            {include: '#comments'},
            {
              match: '\\b(?<!\\.)(as|from)\\b',
              name: 'keyword.control.import.jac'
            },
            {match: ',|:', name: 'punctuation.separator.jac'},
            {
              match: '\\b(?<!\\.)(py|jac)\\b',
              name: 'variable.language.special.self.jac'
            },
            {
              match: '\\b(?<!:)([[:alpha:]_]\\w*)\\b',
              name: 'entity.name.namespace.jac'
            }
          ]
        }
      ]
    },
    'inheritance-identifier': {
      captures: {1: {name: 'entity.other.inherited-class.jac'}},
      match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n'
    },
    'inheritance-name': {
      patterns: [
        {include: '#lambda-incomplete'},
        {include: '#builtin-possible-callables'},
        {include: '#inheritance-identifier'}
      ]
    },
    'item-access': {
      patterns: [
        {
          begin: '(?x)\n  \\b(?=\n    [[:alpha:]_]\\w* \\s* \\[\n  )\n',
          end: '(\\])',
          endCaptures: {1: {name: 'punctuation.definition.arguments.end.jac'}},
          name: 'meta.item-access.jac',
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
      beginCaptures: {1: {name: 'punctuation.definition.arguments.begin.jac'}},
      contentName: 'meta.item-access.arguments.jac',
      end: '(?=\\])',
      patterns: [
        {match: ':', name: 'punctuation.separator.slice.jac'},
        {include: '#expression'}
      ]
    },
    'item-name': {
      patterns: [
        {include: '#general'},
        {
          match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
          name: 'meta.indexed-name.jac'
        }
      ]
    },
    js_style_comment: {
      begin: '(\\/\\/)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jac'}},
      end: '(?=\\n)',
      name: 'comment.line.double-slash.jac',
      patterns: [{include: '#codetags'}]
    },
    jsx: {
      patterns: [
        {include: '#keyword-escape'},
        {include: '#jsx-tag-fragment'},
        {include: '#jsx-closing-tag-component'},
        {include: '#jsx-closing-tag-html'},
        {include: '#jsx-tag-component'},
        {include: '#jsx-tag-html'}
      ]
    },
    'jsx-attribute-boolean': {
      match: '([_$[:alpha:]][-_$[:alnum:]]*)(?=\\s|/?>)',
      name: 'entity.other.attribute-name.jsx.jac'
    },
    'jsx-attribute-with-value': {
      begin: '([_$[:alpha:]][-_$[:alnum:]]*)\\s*(=)',
      beginCaptures: {
        1: {name: 'entity.other.attribute-name.jsx.jac'},
        2: {name: 'keyword.operator.assignment.jsx.jac'}
      },
      end: '(?=[\\s/>])|(?<=["\'}])',
      patterns: [
        {include: '#jsx-string-double-quoted'},
        {include: '#jsx-string-single-quoted'},
        {include: '#jsx-evaluated-code'}
      ]
    },
    'jsx-children': {
      patterns: [
        {include: '#jsx-tag-fragment'},
        {include: '#jsx-closing-tag-component'},
        {include: '#jsx-closing-tag-html'},
        {include: '#jsx-tag-component'},
        {include: '#jsx-tag-html'},
        {include: '#jsx-evaluated-code'},
        {include: '#comments'},
        {include: '#jsx-text'}
      ]
    },
    'jsx-closing-tag-component': {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.jsx.jac'},
        2: {name: 'support.class.component.jsx.jac'},
        3: {name: 'punctuation.definition.tag.end.jsx.jac'}
      },
      match: '(</)([A-Z][a-zA-Z0-9_$]*)(>)',
      name: 'meta.jsx.component.close.jac'
    },
    'jsx-closing-tag-html': {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.jsx.jac'},
        2: {name: 'entity.name.tag.html.jsx.jac'},
        3: {name: 'punctuation.definition.tag.end.jsx.jac'}
      },
      match: '(</)([a-z][a-zA-Z0-9_-]*)(>)',
      name: 'meta.jsx.html.close.jac'
    },
    'jsx-evaluated-code': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.jsx.jac'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.jsx.jac'}},
      name: 'meta.embedded.expression.jsx.jac',
      patterns: [
        {include: '#jsx-nested-braces'},
        {include: '#jsx'},
        {include: '#general'}
      ]
    },
    'jsx-nested-braces': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.definition.block.jac'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.block.jac'}},
      patterns: [
        {include: '#jsx-nested-braces'},
        {include: '#jsx'},
        {include: '#general'}
      ]
    },
    'jsx-spread-attribute': {
      begin: '(\\{)(\\.\\.\\.)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.begin.jsx.jac'},
        2: {name: 'keyword.operator.spread.jsx.jac'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.embedded.end.jsx.jac'}},
      patterns: [{include: '#general'}]
    },
    'jsx-string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.jac'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.jac'}},
      name: 'string.quoted.double.jac'
    },
    'jsx-string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.jac'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.jac'}},
      name: 'string.quoted.single.jac'
    },
    'jsx-tag-attributes': {
      patterns: [
        {include: '#jsx-spread-attribute'},
        {include: '#jsx-attribute-with-value'},
        {include: '#jsx-attribute-boolean'}
      ]
    },
    'jsx-tag-component': {
      begin: '(<)([A-Z][a-zA-Z0-9_$]*)(?=\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.jsx.jac'},
        2: {name: 'support.class.component.jsx.jac'}
      },
      end: '(/?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.jsx.jac'}},
      name: 'meta.jsx.component.jac',
      patterns: [{include: '#jsx-tag-attributes'}]
    },
    'jsx-tag-fragment': {
      begin: '(<>)(?=\\s|$|<)',
      beginCaptures: {1: {name: 'punctuation.definition.tag.jsx.jac'}},
      end: '(</>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.jsx.jac'}},
      name: 'meta.jsx.fragment.jac',
      patterns: [{include: '#jsx-children'}]
    },
    'jsx-tag-html': {
      begin: '(<)([a-z][a-zA-Z0-9_-]*)(?=\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.jsx.jac'},
        2: {name: 'entity.name.tag.html.jsx.jac'}
      },
      end: '(/?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.jsx.jac'}},
      name: 'meta.jsx.html.jac',
      patterns: [{include: '#jsx-tag-attributes'}]
    },
    'jsx-tag-in-expression': {
      begin: '(?:^|(?<=>))',
      end: '(?=</)',
      patterns: [{include: '#jsx-children'}]
    },
    'jsx-text': {match: '[^<>{}\n]+', name: 'string.unquoted.jsx.jac'},
    'keyword-escape': {
      captures: {
        1: {name: 'punctuation.definition.keyword-escape.jac'},
        2: {name: 'variable.other.escaped.jac'}
      },
      match: '(<>)([a-zA-Z_][a-zA-Z0-9_]*)',
      name: 'meta.keyword-escape.jac'
    },
    lambda: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.flow.jac'}},
          match: '((?<=\\.)lambda|lambda(?=\\s*[\\.=]))'
        },
        {
          captures: {1: {name: 'storage.type.function.lambda.jac'}},
          match: '\\b(lambda)\\s*?(?=[,\\n]|$)'
        },
        {
          begin: '(?x)\n  \\b (lambda) \\b',
          beginCaptures: {1: {name: 'storage.type.function.lambda.jac'}},
          contentName: 'meta.function.lambda.parameters.jac',
          end: '(:)|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.section.function.lambda.begin.jac'}
          },
          name: 'meta.lambda-function.jac',
          patterns: [
            {match: '/', name: 'keyword.operator.positional.parameter.jac'},
            {
              match: '(\\*\\*|\\*)',
              name: 'keyword.operator.unpacking.parameter.jac'
            },
            {include: '#lambda-nested-incomplete'},
            {include: '#illegal-names'},
            {
              captures: {
                1: {name: 'variable.parameter.function.language.jac'},
                2: {name: 'punctuation.separator.parameters.jac'}
              },
              match: '([[:alpha:]_]\\w*)\\s*(?:(,)|(?=:|$))'
            },
            {include: '#comments'},
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
      name: 'storage.type.function.lambda.jac'
    },
    'lambda-nested-incomplete': {
      match: '\\blambda(?=\\s*[:,)])',
      name: 'storage.type.function.lambda.jac'
    },
    'lambda-parameter-with-default': {
      begin: '(?x)\n  \\b\n  ([[:alpha:]_]\\w*) \\s* (=)\n',
      beginCaptures: {
        1: {name: 'variable.parameter.function.language.jac'},
        2: {name: 'keyword.operator.jac'}
      },
      end: '(,)|(?=:|$)',
      endCaptures: {1: {name: 'punctuation.separator.parameters.jac'}},
      patterns: [{include: '#expression'}]
    },
    'line-continuation': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.continuation.line.jac'},
            2: {name: 'invalid.illegal.line.continuation.jac'}
          },
          match: '(\\\\)\\s*(\\S.*$\\n?)'
        },
        {
          begin: '(\\\\)\\s*$\\n?',
          beginCaptures: {
            1: {name: 'punctuation.separator.continuation.line.jac'}
          },
          end: "(?x)\n  (?=^\\s*$)\n  |\n  (?! (\\s* [rR]? (\\'\\'\\'|\\\"\\\"\\\"|\\'|\\\"))\n      |\n      (\\G $)  (?# '\\G' is necessary for ST)\n  )\n",
          patterns: [{include: '#regexp'}, {include: '#string'}]
        }
      ]
    },
    list: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.list.begin.jac'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.list.end.jac'}},
      patterns: [{include: '#expression'}]
    },
    literal: {
      patterns: [
        {match: '\\b(True|False|None)\\b', name: 'constant.language.jac'},
        {include: '#number'}
      ]
    },
    'loose-default': {
      begin: '(=)',
      beginCaptures: {1: {name: 'keyword.operator.jac'}},
      end: '(,)|(?=\\))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.jac'}},
      patterns: [{include: '#expression'}]
    },
    'magic-function-names': {
      captures: {1: {name: 'support.function.magic.jac'}},
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
      captures: {1: {name: 'support.variable.magic.jac'}},
      match:
        '(?x)\n  \\b(\n    __(?:\n      all | annotations | bases | builtins | class\n      | closure | code | debug | defaults | dict | doc | file | func\n      | globals | kwdefaults | match_args | members | metaclass | methods\n      | module | mro | mro_entries | name | qualname | post_init | self\n      | signature | slots | subclasses | version | weakref | wrapped\n      | classcell | spec | path | package | future | traceback\n    )__\n  )\\b\n'
    },
    'member-access': {
      begin: '(\\.)\\s*(?!\\.)',
      beginCaptures: {1: {name: 'punctuation.separator.period.jac'}},
      end: "(?x)\n  # stop when you've just read non-whitespace followed by non-word\n  # i.e. when finished reading an identifier or function call\n  (?<=\\S)(?=\\W) |\n  # stop when seeing the start of something that's not a word,\n  # i.e. when seeing a non-identifier\n  (^|(?<=\\s))(?=[^\\\\\\w\\s]) |\n  $\n",
      name: 'meta.member.access.jac',
      patterns: [
        {include: '#function-call'},
        {include: '#member-access-base'},
        {include: '#member-access-attribute'}
      ]
    },
    'member-access-attribute': {
      match: '(?x)\n  \\b ([[:alpha:]_]\\w*) \\b\n',
      name: 'meta.attribute.jac'
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
      beginCaptures: {1: {name: 'punctuation.separator.period.jac'}},
      end: '(?<=\\S)(?=\\W)|$',
      name: 'meta.member.access.jac',
      patterns: [
        {include: '#call-wrapper-inheritance'},
        {include: '#member-access-base'},
        {include: '#inheritance-identifier'}
      ]
    },
    number: {
      name: 'constant.numeric.jac',
      patterns: [
        {include: '#number-float'},
        {include: '#number-dec'},
        {include: '#number-hex'},
        {include: '#number-oct'},
        {include: '#number-bin'},
        {include: '#number-long'},
        {match: '\\b[0-9]+\\w+', name: 'invalid.illegal.name.jac'}
      ]
    },
    'number-bin': {
      captures: {1: {name: 'storage.type.number.jac'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[bB]) (_?[01])+\n  \\b\n',
      name: 'constant.numeric.bin.jac'
    },
    'number-dec': {
      captures: {
        1: {name: 'storage.type.imaginary.number.jac'},
        2: {name: 'invalid.illegal.dec.jac'}
      },
      match:
        '(?x)\n  (?<![\\w\\.])(?:\n      [1-9](?: _?[0-9] )*\n      |\n      0+\n      |\n      [0-9](?: _?[0-9] )* ([jJ])\n      |\n      0 ([0-9]+)(?![eE\\.])\n  )\\b\n',
      name: 'constant.numeric.dec.jac'
    },
    'number-float': {
      captures: {1: {name: 'storage.type.imaginary.number.jac'}},
      match:
        '(?x)\n  (?<! \\w)(?:\n    (?:\n      \\.[0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*\n      |\n      [0-9](?: _?[0-9] )* \\.\n    ) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?\n    |\n    [0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )\n  )([jJ])?\\b\n',
      name: 'constant.numeric.float.jac'
    },
    'number-hex': {
      captures: {1: {name: 'storage.type.number.jac'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[xX]) (_?[0-9a-fA-F])+\n  \\b\n',
      name: 'constant.numeric.hex.jac'
    },
    'number-long': {
      captures: {2: {name: 'storage.type.number.jac'}},
      match: '(?x)\n  (?<![\\w\\.])\n    ([1-9][0-9]* | 0) ([lL])\n  \\b\n',
      name: 'constant.numeric.bin.jac'
    },
    'number-oct': {
      captures: {1: {name: 'storage.type.number.jac'}},
      match: '(?x)\n  (?<![\\w\\.])\n    (0[oO]) (_?[0-7])+\n  \\b\n',
      name: 'constant.numeric.oct.jac'
    },
    'odd-function-call': {
      begin: '(?x)\n  (?<= \\] | \\) ) \\s*\n  (?=\\()\n',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.jac'}},
      patterns: [{include: '#function-arguments'}]
    },
    operator: {
      captures: {
        1: {name: 'keyword.operator.logical.python'},
        2: {name: 'keyword.control.flow.jac'},
        3: {name: 'keyword.operator.bitwise.jac'},
        4: {name: 'keyword.operator.arithmetic.jac'},
        5: {name: 'keyword.operator.comparison.jac'},
        6: {name: 'keyword.operator.assignment.jac'}
      },
      match:
        '(?x)\\b(?<!\\.)(?:(and | or | not | in | is) (?# 1)|( \\? | for | if | else | await | (?:yield(?:\\s+from)?)) (?# 2))(?!\\s*:)\\b| (<< | >> | & | \\| | \\^ | ~) (?# 3)| (\\*\\* | \\* | \\+ | - | % | // | / | @) (?# 4)| (!= | == | >= | <= | < | >) (?# 5)| (:=) (?# 6)'
    },
    'parameter-special': {
      captures: {
        1: {name: 'variable.parameter.function.language.jac'},
        2: {name: 'variable.parameter.function.language.special.self.jac'},
        3: {name: 'variable.parameter.function.language.special.cls.jac'},
        4: {name: 'punctuation.separator.parameters.jac'}
      },
      match: '(?x)\n  \\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))\n'
    },
    parameters: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.definition.parameters.begin.jac'}},
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.jac'}},
      name: 'meta.function.parameters.jac',
      patterns: [
        {match: '/', name: 'keyword.operator.positional.parameter.jac'},
        {
          match: '(\\*\\*|\\*)',
          name: 'keyword.operator.unpacking.parameter.jac'
        },
        {include: '#lambda-incomplete'},
        {include: '#illegal-names'},
        {include: '#illegal-object-name'},
        {include: '#parameter-special'},
        {
          captures: {
            1: {name: 'variable.parameter.function.language.jac'},
            2: {name: 'punctuation.separator.parameters.jac'}
          },
          match:
            '(?x)\n  ([[:alpha:]_]\\w*)\n    \\s* (?: (,) | (?=[)#\\n=]))\n'
        },
        {include: '#comments'},
        {include: '#loose-default'},
        {include: '#annotated-parameter'}
      ]
    },
    punctuation: {
      patterns: [
        {match: ':', name: 'punctuation.separator.colon.jac'},
        {match: ',', name: 'punctuation.separator.element.jac'}
      ]
    },
    py_style_comment: {
      begin: '(\\#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jac'}},
      end: '($)',
      name: 'comment.line.number-sign.jac',
      patterns: [{include: '#codetags'}]
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
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'storage.type.string.jac'},
        5: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(")|(?<!\\\\)(\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.regexp.quoted.single.jac',
      patterns: [{include: '#double-one-regexp-expression'}]
    },
    'regexp-double-three-line': {
      begin: '\\b(([uU]r)|([bB]r)|(r[bB]?))(""")',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'storage.type.string.jac'},
        5: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(""")',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.regexp.quoted.multi.jac',
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
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'storage.type.string.jac'},
        5: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: "(\\')|(?<!\\\\)(\\n)",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.regexp.quoted.single.jac',
      patterns: [{include: '#single-one-regexp-expression'}]
    },
    'regexp-single-three-line': {
      begin: "\\b(([uU]r)|([bB]r)|(r[bB]?))(\\'\\'\\')",
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'storage.type.string.jac'},
        5: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: "(\\'\\'\\')",
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.regexp.quoted.multi.jac',
      patterns: [{include: '#single-three-regexp-expression'}]
    },
    'return-annotation': {
      begin: '(->)',
      beginCaptures: {1: {name: 'punctuation.separator.annotation.result.jac'}},
      end: '(?=:)',
      patterns: [{include: '#expression'}]
    },
    'round-braces': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.parenthesis.begin.jac'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.parenthesis.end.jac'}},
      patterns: [{include: '#expression'}]
    },
    sem: {
      patterns: [
        {
          begin: '(?x)\\b(sem)\\b(?=\\s*[[:alpha:]_]\\w*|\\s*\\n)',
          beginCaptures: {1: {name: 'storage.type.semstring.jac'}},
          end: ';',
          endCaptures: {1: {name: 'punctuation.terminator.statement.jac'}},
          name: 'meta.semstring.jac',
          patterns: [
            {include: '#comments'},
            {match: '=', name: 'keyword.operator.assignment.jac'},
            {match: 'is', name: 'keyword.operator.assignment.jac'},
            {include: '#string'},
            {
              match: '\\b([[:alpha:]_]\\w*)\\b(?=\\s*=)',
              name: 'entity.name.function.semstring.jac'
            },
            {
              match: '\\b([[:alpha:]_]\\w*)\\b',
              name: 'entity.name.namespace.jac'
            }
          ]
        }
      ]
    },
    semicolon: {
      patterns: [{match: '\\;$', name: 'invalid.deprecated.semicolon.jac'}]
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
            2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
            2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
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
        2: {name: 'invalid.illegal.newline.jac'}
      },
      patterns: [
        {include: '#single-three-regexp-expression'},
        {include: '#comments-string-single-three'}
      ]
    },
    'special-names': {
      match:
        '(?x)\n  \\b\n    # we want to see "enough", meaning 2 or more upper-case\n    # letters in the beginning of the constant\n    #\n    # for more details refer to:\n    #   https://github.com/MagicStack/MagicPython/issues/42\n    (\n      _* [[:upper:]] [_\\d]* [[:upper:]]\n    )\n    [[:upper:]\\d]* (_\\w*)?\n  \\b\n',
      name: 'constant.other.caps.jac'
    },
    'special-variables': {
      captures: {
        1: {name: 'variable.language.special.self.jac'},
        2: {name: 'variable.language.special.cls.jac'}
      },
      match: '(?x)\\b(here|visitor|self|init|postinit|super|root)\\b'
    },
    statement: {
      patterns: [
        {include: '#import'},
        {include: '#arch-declaration'},
        {include: '#arch-reference'},
        {include: '#arch-var-reference'},
        {include: '#function-declaration'},
        {include: '#generator'},
        {include: '#statement-keyword'},
        {include: '#assignment-operator'},
        {include: '#decorator'},
        {include: '#docstring-statement'},
        {include: '#semicolon'}
      ]
    },
    'statement-keyword': {
      patterns: [
        {
          match: '\\b((async\\s+)?\\s*(can|impl|sem|def))\\b',
          name: 'storage.type.function.jac'
        },
        {
          match: '\\b(?<!\\.)as\\b(?=.*[:\\\\])',
          name: 'keyword.control.flow.jac'
        },
        {match: '\\b(?<!\\.)as\\b', name: 'keyword.control.import.jac'},
        {
          match:
            '(?x)\n  \\b(?<!\\.)(\n    async | await | continue | entry | exit | del | assert | check | break | finally | for\n    | from | elif | else | if | except | pass | raise\n    | return | report | try | while | with | to | by | spawn | ignore | visit | disengage | lambda\n  )\\b\n',
          name: 'keyword.control.flow.jac'
        },
        {
          match:
            '(?x)\n  \\b(?<!\\.)(\n    priv|protect|pub|static|override|let|abs|glob|global|nonlocal|cl\n  )\\b\n',
          name: 'storage.modifier.declaration.jac'
        },
        {
          match:
            '(?x)\n  \\b(?<!\\.)(\n    enum | obj | node | edge | walker | class | test\n  )\\b\n',
          name: 'storage.type.class.jac'
        },
        {match: '(?x)\\b(?<!\\.)( has )\\b', name: 'storage.type.has.jac'},
        {
          captures: {1: {name: 'keyword.control.flow.jac'}},
          match:
            '(?x)\n  ^\\s*(\n    case | match| switch | default\n  )(?=\\s*([-+\\w\\d(\\[{\'":#]|$))\\b\n'
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
        1: {name: 'storage.type.string.jac'},
        2: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\2)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.binary.multi.jac',
      patterns: [{include: '#string-entity'}]
    },
    'string-bin-quoted-single-line': {
      begin: '(\\b[bB])(([\'"]))',
      beginCaptures: {
        1: {name: 'storage.type.string.jac'},
        2: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.binary.single.jac',
      patterns: [{include: '#string-entity'}]
    },
    'string-brace-formatting': {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.format.placeholder.other.jac'},
            3: {name: 'storage.type.format.jac'},
            4: {name: 'storage.type.format.jac'}
          },
          match:
            '(?x)\n  (\n    {{ | }}\n    | (?:\n      {\n        \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]\'"]+\\])*\n        (![rsa])?\n        ( : \\w? [<>=^]? [-+ ]? \\#?\n          \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )?\n      })\n  )\n',
          name: 'meta.format.brace.jac'
        },
        {
          captures: {
            1: {name: 'constant.character.format.placeholder.other.jac'},
            3: {name: 'storage.type.format.jac'},
            4: {name: 'storage.type.format.jac'}
          },
          match:
            '(?x)\n  (\n    {\n      \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]\'"]+\\])*\n      (![rsa])?\n      (:)\n        [^\'"{}\\n]* (?:\n          \\{ [^\'"}\\n]*? \\} [^\'"{}\\n]*\n        )*\n    }\n  )\n',
          name: 'meta.format.brace.jac'
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
      captures: {1: {name: 'constant.character.format.placeholder.other.jac'}},
      match:
        '(?x)\n  (\n    % (\\([\\w\\s]*\\))?\n      [-+#0 ]*\n      (\\d+|\\*)? (\\.(\\d+|\\*))?\n      ([hlL])?\n      [diouxXeEfFgGcrsab%]\n  )\n',
      name: 'meta.format.percent.jac'
    },
    'string-line-continuation': {match: '\\\\$', name: 'constant.language.jac'},
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
        1: {name: 'invalid.illegal.prefix.jac'},
        2: {name: 'storage.type.string.jac'},
        3: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\3)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.multi.jac',
      patterns: [
        {include: '#string-multi-bad-brace1-formatting-unicode'},
        {include: '#string-multi-bad-brace2-formatting-unicode'},
        {include: '#string-unicode-guts'}
      ]
    },
    'string-quoted-single-line': {
      begin: '(?:\\b([rR])(?=[uU]))?([uU])?(([\'"]))',
      beginCaptures: {
        1: {name: 'invalid.illegal.prefix.jac'},
        2: {name: 'storage.type.string.jac'},
        3: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\3)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.single.jac',
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
        1: {name: 'storage.type.string.jac'},
        2: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\2)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.raw.binary.multi.jac',
      patterns: [{include: '#string-raw-bin-guts'}]
    },
    'string-raw-bin-quoted-single-line': {
      begin: '(\\b(?:R[bB]|[bB]R))(([\'"]))',
      beginCaptures: {
        1: {name: 'storage.type.string.jac'},
        2: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\2)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.raw.binary.single.jac',
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
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\4)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.raw.multi.jac',
      patterns: [
        {include: '#string-multi-bad-brace1-formatting-raw'},
        {include: '#string-multi-bad-brace2-formatting-raw'},
        {include: '#string-raw-guts'}
      ]
    },
    'string-raw-quoted-single-line': {
      begin: '\\b(([uU]R)|(R))(([\'"]))',
      beginCaptures: {
        2: {name: 'invalid.deprecated.prefix.jac'},
        3: {name: 'storage.type.string.jac'},
        4: {name: 'punctuation.definition.string.begin.jac'}
      },
      end: '(\\4)|((?<!\\\\)\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.jac'},
        2: {name: 'invalid.illegal.newline.jac'}
      },
      name: 'string.quoted.raw.single.jac',
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
    }
  },
  scopeName: 'source.jac'
}

export default grammar
