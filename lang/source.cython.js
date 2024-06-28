// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.regexp.python'],
  extensions: ['.pyx', '.pxd', '.pxi'],
  names: ['cython', 'pyrex'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.cython'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.cython'}},
          end: '\\n',
          name: 'comment.line.number-sign.cython'
        }
      ]
    },
    {
      match: '\\b(?i:(0x[0-9A-Fa-f]*)L)',
      name: 'constant.numeric.integer.long.hexadecimal.cython'
    },
    {
      match: '\\b(?i:(0x[0-9A-Fa-f]*))',
      name: 'constant.numeric.integer.hexadecimal.cython'
    },
    {
      match: '\\b(?i:(0[0-7]+)L)',
      name: 'constant.numeric.integer.long.octal.cython'
    },
    {match: '\\b(0[0-7]+)', name: 'constant.numeric.integer.octal.cython'},
    {
      match:
        '\\b(?i:(((\\d+(\\.(?=[^a-zA-Z_])\\d*)?|(?<=[^0-9a-zA-Z_])\\.\\d+)(e[\\-\\+]?\\d+)?))J)',
      name: 'constant.numeric.complex.cython'
    },
    {
      match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^a-zA-Z_])',
      name: 'constant.numeric.float.cython'
    },
    {
      match: '(?<=[^0-9a-zA-Z_])(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))',
      name: 'constant.numeric.float.cython'
    },
    {
      match: '\\b(?i:(\\d+e[\\-\\+]?\\d+))',
      name: 'constant.numeric.float.cython'
    },
    {
      match: '\\b(?i:([1-9]+[0-9]*|0)L)',
      name: 'constant.numeric.integer.long.decimal.cython'
    },
    {
      match: '\\b([1-9]+[0-9]*|0)',
      name: 'constant.numeric.integer.decimal.cython'
    },
    {
      captures: {1: {name: 'storage.modifier.global.cython'}},
      match: '\\b(global)\\b'
    },
    {
      captures: {
        1: {name: 'keyword.control.import.cython'},
        2: {name: 'keyword.control.import.from.cython'}
      },
      match: '\\b(?:(import|include)|(from))\\b'
    },
    {
      match:
        '\\b(elif|else|except|finally|for|if|try|while|with|IF|ELIF|ELSE)\\b',
      name: 'keyword.control.flow.cython'
    },
    {
      match: '\\b(break|continue|pass|raise|return|yield)\\b',
      name: 'keyword.control.flow.cython'
    },
    {
      match: '\\b(and|in|is|not|or)\\b',
      name: 'keyword.operator.logical.cython'
    },
    {
      captures: {1: {name: 'keyword.other.cython'}},
      match: '\\b(as|assert|del|exec|print)\\b'
    },
    {
      match:
        '\\b(asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\b',
      name: 'storage.type.cython'
    },
    {
      match: '<\\=|>\\=|\\=\\=|<|>|<>',
      name: 'keyword.operator.comparison.cython'
    },
    {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.cython'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.cython'
    },
    {match: '\\=', name: 'keyword.operator.assignment.cython'},
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\:)',
      beginCaptures: {1: {name: 'storage.type.class.cython'}},
      contentName: 'entity.name.type.class.cython',
      end: '\\s*(:)',
      endCaptures: {1: {name: 'punctuation.section.class.begin.cython'}},
      name: 'meta.class.old-style.cython',
      patterns: [{include: '#entity_name_class'}]
    },
    {
      begin: '^\\s*(property)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\:)',
      beginCaptures: {1: {name: 'storage.type.property.cython'}},
      contentName: 'entity.name.type.property.cython',
      end: '\\s*(:)',
      endCaptures: {1: {name: 'punctuation.section.property.begin.cython'}},
      name: 'meta.property.cython'
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.class.cython'}},
      end: '(\\))\\s*(?:(\\:)|(.*$\\n?))',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.end.cython'},
        2: {name: 'punctuation.section.class.begin.cython'},
        3: {name: 'invalid.illegal.missing-section-begin.cython'}
      },
      name: 'meta.class.cython',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.cython',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_class'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.inheritance.begin.cython'}
          },
          contentName: 'meta.class.inheritance.cython',
          end: '(?=\\)|:)',
          patterns: [
            {
              begin: '(?<=\\(|,)\\s*',
              contentName: 'entity.other.inherited-class.cython',
              end: '\\s*(?:(,)|(?=\\)))',
              endCaptures: {
                1: {name: 'punctuation.separator.inheritance.cython'}
              },
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9])',
      beginCaptures: {1: {name: 'storage.type.class.cython'}},
      end: '(\\()|\\s*($\\n?|#.*$\\n?)',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.begin.cython'},
        2: {name: 'invalid.illegal.missing-inheritance.cython'}
      },
      name: 'meta.class.cython',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.cython',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin: '^\\s*(def)\\s+(?=[A-Za-z_][A-Za-z0-9_]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.function.cython'}},
      end: '(\\))\\s*(?:(\\:)|(.*$\\n?))',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.cython'},
        2: {name: 'punctuation.section.function.begin.cython'},
        3: {name: 'invalid.illegal.missing-section-begin.cython'}
      },
      name: 'meta.function.cython',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.cython',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.cython'}
          },
          contentName: 'meta.function.parameters.cython',
          end: '(?=\\)\\s*\\:)',
          patterns: [
            {include: '#keyword_arguments'},
            {
              captures: {
                1: {name: 'variable.parameter.function.cython'},
                2: {name: 'punctuation.separator.parameters.cython'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)]))'
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(def)\\s+(?=[A-Za-z_][A-Za-z0-9_]*)',
      beginCaptures: {1: {name: 'storage.type.function.cython'}},
      end: '(\\()|\\s*($\\n?|#.*$\\n?)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.cython'},
        2: {name: 'invalid.illegal.missing-parameters.cython'}
      },
      name: 'meta.function.cython',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.cython',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin: '(lambda)(?=\\s+)',
      beginCaptures: {1: {name: 'storage.type.function.inline.cython'}},
      end: '(\\:)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.cython'},
        2: {name: 'punctuation.section.function.begin.cython'},
        3: {name: 'invalid.illegal.missing-section-begin.cython'}
      },
      name: 'meta.function.inline.cython',
      patterns: [
        {
          begin: '\\s+',
          contentName: 'meta.function.inline.parameters.cython',
          end: '(?=\\:)',
          patterns: [
            {include: '#keyword_arguments'},
            {
              captures: {
                1: {name: 'variable.parameter.function.cython'},
                2: {name: 'punctuation.separator.parameters.cython'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)\\:]))'
            }
          ]
        }
      ]
    },
    {
      begin:
        '^\\s*(?=@\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cython'}},
      name: 'meta.function.decorator.cython',
      patterns: [
        {
          begin:
            '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          beginCaptures: {1: {name: 'punctuation.definition.decorator.cython'}},
          contentName: 'entity.name.function.decorator.cython',
          end: '(?=\\s*\\()',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.cython'}
          },
          contentName: 'meta.function.decorator.arguments.cython',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin:
        '^\\s*(?=@\\s*[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*)',
      contentName: 'entity.name.function.decorator.cython',
      end: '(?=\\s|$\\n?|#)',
      name: 'meta.function.decorator.cython',
      patterns: [
        {
          begin:
            '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*(\\.[A-Za-z_][A-Za-z0-9_]*)*)',
          beginCaptures: {1: {name: 'punctuation.definition.decorator.cython'}},
          end: '(?=\\s|$\\n?|#)',
          patterns: [{include: '#dotted_name'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.cython'}
      },
      contentName: 'meta.function-call.arguments.cython',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cython'}},
      name: 'meta.function-call.cython',
      patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cython'}},
      name: 'meta.function-call.cython',
      patterns: [
        {
          begin:
            '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          end: '(?=\\s*\\()',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.cython'}
          },
          contentName: 'meta.function-call.arguments.cython',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\[)',
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cython'}},
      name: 'meta.item-access.cython',
      patterns: [
        {
          begin:
            '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\[)',
          end: '(?=\\s*\\[)',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.cython'}
          },
          contentName: 'meta.item-access.arguments.cython',
          end: '(?=\\])',
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.cython'}
      },
      contentName: 'meta.item-access.arguments.cython',
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cython'}},
      name: 'meta.item-access.cython',
      patterns: [{include: '$self'}]
    },
    {
      captures: {1: {name: 'storage.type.function.cython'}},
      match: '\\b(def|lambda)\\b'
    },
    {
      captures: {1: {name: 'storage.type.class.cython'}},
      match: '\\b(class)\\b'
    },
    {include: '#line_continuation'},
    {include: '#language_variables'},
    {
      match: '\\b(None|True|False|Ellipsis|NotImplemented|NULL)\\b',
      name: 'constant.language.cython'
    },
    {include: '#string_quoted_single'},
    {include: '#string_quoted_double'},
    {include: '#dotted_name'},
    {begin: '(\\()', end: '(\\))', patterns: [{include: '$self'}]},
    {
      captures: {
        1: {name: 'punctuation.definition.list.begin.cython'},
        2: {name: 'meta.empty-list.cython'},
        3: {name: 'punctuation.definition.list.end.cython'}
      },
      match: '(\\[)(\\s*(\\]))\\b'
    },
    {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.definition.list.begin.cython'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.list.end.cython'}},
      name: 'meta.structure.list.cython',
      patterns: [
        {
          begin: '(?<=\\[|\\,)\\s*(?![\\],])',
          contentName: 'meta.structure.list.item.cython',
          end: '\\s*(?:(,)|(?=\\]))',
          endCaptures: {1: {name: 'punctuation.separator.list.cython'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.tuple.begin.cython'},
        2: {name: 'meta.empty-tuple.cython'},
        3: {name: 'punctuation.definition.tuple.end.cython'}
      },
      match: '(\\()(\\s*(\\)))',
      name: 'meta.structure.tuple.cython'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.dictionary.begin.cython'},
        2: {name: 'meta.empty-dictionary.cython'},
        3: {name: 'punctuation.definition.dictionary.end.cython'}
      },
      match: '(\\{)(\\s*(\\}))',
      name: 'meta.structure.dictionary.cython'
    },
    {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.dictionary.begin.cython'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.dictionary.end.cython'}},
      name: 'meta.structure.dictionary.cython',
      patterns: [
        {
          begin: '(?<=\\{|\\,|^)\\s*(?![\\},])',
          contentName: 'meta.structure.dictionary.key.cython',
          end: '\\s*(?:(?=\\})|(\\:))',
          endCaptures: {
            1: {name: 'punctuation.separator.valuepair.dictionary.cython'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '(?<=\\:|^)\\s*',
          contentName: 'meta.structure.dictionary.value.cython',
          end: '\\s*(?:(?=\\})|(,))',
          endCaptures: {1: {name: 'punctuation.separator.dictionary.cython'}},
          patterns: [{include: '$self'}]
        }
      ]
    }
  ],
  repository: {
    builtin_exceptions: {
      match:
        '(?x)\\b((Arithmetic|Assertion|Attribute|EOF|Environment|FloatingPoint|IO|Import|Indentation|Index|Key|Lookup|Memory|Name|OS|Overflow|NotImplemented|Reference|Runtime|Standard|Syntax|System|Tab|Type|UnboundLocal|Unicode(Translate|Encode|Decode)?|Value|ZeroDivision)Error|(Deprecation|Future|Overflow|PendingDeprecation|Runtime|Syntax|User)?Warning|KeyboardInterrupt|NotImplemented|StopIteration|SystemExit|(Base)?Exception)\\b',
      name: 'support.type.exception.cython'
    },
    builtin_functions: {
      match:
        '(?x)\\b(\n                __import__|all|abs|any|apply|callable|chr|cmp|coerce|compile|delattr|dir|\n                divmod|eval|execfile|filter|getattr|globals|hasattr|hash|hex|id|\n                input|intern|isinstance|issubclass|iter|len|locals|map|max|min|oct|\n                ord|pow|range|raw_input|reduce|reload|repr|round|setattr|sorted|\n                sum|unichr|vars|zip\n\t\t\t)\\b',
      name: 'support.function.builtin.cython'
    },
    builtin_types: {
      match:
        '(?x)\\b(\n\t\t\t\tbasestring|bool|buffer|classmethod|complex|dict|enumerate|file|\n\t\t\t\tfloat|frozenset|int|list|long|object|open|reversed|set|\n\t\t\t\tslice|staticmethod|str|super|tuple|type|unicode|xrange\n\t\t\t)\\b',
      name: 'support.type.cython'
    },
    constant_placeholder: {
      match:
        '(?i:%(\\([a-z_]+\\))?#?0?\\-?[ ]?\\+?([0-9]*|\\*)(\\.([0-9]*|\\*))?[hL]?[a-z%])',
      name: 'constant.other.placeholder.cython'
    },
    docstrings: {
      patterns: [
        {
          begin: '^\\s*(?=[uU]?[rR]?""")',
          end: '(?<=""")',
          name: 'comment.block.cython',
          patterns: [{include: '#string_quoted_double'}]
        },
        {
          begin: "^\\s*(?=[uU]?[rR]?''')",
          end: "(?<=''')",
          name: 'comment.block.cython',
          patterns: [{include: '#string_quoted_single'}]
        }
      ]
    },
    dotted_name: {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*)',
      end: '(?![A-Za-z0-9_\\.])',
      patterns: [
        {
          begin: '(\\.)(?=[A-Za-z_][A-Za-z0-9_]*)',
          end: '(?![A-Za-z0-9_])',
          patterns: [
            {include: '#magic_function_names'},
            {include: '#magic_variable_names'},
            {include: '#illegal_names'},
            {include: '#generic_names'}
          ]
        },
        {
          begin: '(?<!\\.)(?=[A-Za-z_][A-Za-z0-9_]*)',
          end: '(?![A-Za-z0-9_])',
          patterns: [
            {include: '#builtin_functions'},
            {include: '#builtin_types'},
            {include: '#builtin_exceptions'},
            {include: '#illegal_names'},
            {include: '#magic_function_names'},
            {include: '#magic_variable_names'},
            {include: '#language_variables'},
            {include: '#generic_names'}
          ]
        }
      ]
    },
    entity_name_class: {
      patterns: [{include: '#illegal_names'}, {include: '#generic_names'}]
    },
    entity_name_function: {
      patterns: [
        {include: '#magic_function_names'},
        {include: '#illegal_names'},
        {include: '#generic_names'}
      ]
    },
    escaped_char: {
      captures: {
        1: {name: 'constant.character.escape.hex.cython'},
        10: {name: 'constant.character.escape.linefeed.cython'},
        11: {name: 'constant.character.escape.return.cython'},
        12: {name: 'constant.character.escape.tab.cython'},
        13: {name: 'constant.character.escape.vertical-tab.cython'},
        2: {name: 'constant.character.escape.octal.cython'},
        3: {name: 'constant.character.escape.newline.cython'},
        4: {name: 'constant.character.escape.backlash.cython'},
        5: {name: 'constant.character.escape.double-quote.cython'},
        6: {name: 'constant.character.escape.single-quote.cython'},
        7: {name: 'constant.character.escape.bell.cython'},
        8: {name: 'constant.character.escape.backspace.cython'},
        9: {name: 'constant.character.escape.formfeed.cython'}
      },
      match:
        '(\\\\x[0-9A-F]{2})|(\\\\[0-7]{3})|(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    escaped_unicode_char: {
      captures: {
        1: {name: 'constant.character.escape.unicode.16-bit-hex.cython'},
        2: {name: 'constant.character.escape.unicode.32-bit-hex.cython'},
        3: {name: 'constant.character.escape.unicode.name.cython'}
      },
      match:
        '(\\\\U[0-9A-Fa-f]{8})|(\\\\u[0-9A-Fa-f]{4})|(\\\\N\\{[a-zA-Z ]+\\})'
    },
    function_name: {
      patterns: [
        {include: '#magic_function_names'},
        {include: '#magic_variable_names'},
        {include: '#builtin_exceptions'},
        {include: '#builtin_functions'},
        {include: '#builtin_types'},
        {include: '#generic_names'}
      ]
    },
    generic_names: {match: '[A-Za-z_][A-Za-z0-9_]*'},
    illegal_names: {
      match:
        '\\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield)\\b',
      name: 'invalid.illegal.name.cython'
    },
    keyword_arguments: {
      begin: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(=)(?!=)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.cython'},
        2: {name: 'keyword.operator.assignment.cython'}
      },
      end: '\\s*(?:(,)|(?=$\\n?|[\\)\\:]))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.cython'}},
      patterns: [{include: '$self'}]
    },
    language_variables: {
      match: '\\b(self|cls)\\b',
      name: 'variable.language.cython'
    },
    line_continuation: {
      captures: {
        1: {name: 'punctuation.separator.continuation.line.cython'},
        2: {name: 'invalid.illegal.unexpected-text.cython'}
      },
      match: '(\\\\)(.*)$\\n?'
    },
    magic_function_names: {
      match:
        '(?x)\\b(__(?:\n\t\t\t\t\t\tabs|add|and|call|cmp|coerce|complex|contains|del|delattr|\n\t\t\t\t\t\tdelete|delitem|delslice|div|divmod|enter|eq|exit|float|\n\t\t\t\t\t\tfloordiv|ge|get|getattr|getattribute|getitem|getslice|gt|\n\t\t\t\t\t\thash|hex|iadd|iand|idiv|ifloordiv|ilshift|imod|imul|init|\n\t\t\t\t\t\tint|invert|ior|ipow|irshift|isub|iter|itruediv|ixor|le|len|\n\t\t\t\t\t\tlong|lshift|lt|mod|mul|ne|neg|new|nonzero|oct|or|pos|pow|\n\t\t\t\t\t\tradd|rand|rdiv|rdivmod|repr|rfloordiv|rlshift|rmod|rmul|ror|\n\t\t\t\t\t\trpow|rrshift|rshift|rsub|rtruediv|rxor|set|setattr|setitem|\n\t\t\t\t\t\tsetslice|str|sub|truediv|unicode|xor\n\t\t\t\t\t)__)\\b',
      name: 'support.function.magic.cython'
    },
    magic_variable_names: {
      match:
        '\\b__(all|bases|class|debug|dict|doc|file|members|metaclass|methods|name|slots|weakref)__\\b',
      name: 'support.variable.magic.cython'
    },
    regular_expressions: {patterns: [{include: 'source.regexp.python'}]},
    string_quoted_double: {
      patterns: [
        {
          begin: '([uU]r)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.unicode-raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '([uU]R)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.unicode-raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(r)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '(R)(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '([uU])(""")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.unicode.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '([uU]r)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.unicode-raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '([uU]R)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.unicode-raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(r)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: '(R)(")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '([uU])(")',
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.unicode.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin:
            '(""")(?=\\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER))',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.sql.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: 'source.sql'}
          ]
        },
        {
          begin:
            '(")(?=\\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER))',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.sql.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: 'source.sql'}
          ]
        },
        {
          begin: '(""")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=""")(")""|""")',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'}
          },
          name: 'string.quoted.double.block.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.double.cython'},
            3: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.double.single-line.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    string_quoted_single: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.cython'},
            2: {name: 'punctuation.definition.string.end.cython'},
            3: {name: 'meta.empty-string.single.cython'}
          },
          match: "(?<!')(')(('))(?!')",
          name: 'string.quoted.single.single-line.cython'
        },
        {
          begin: "([uU]r)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.unicode-raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "([uU]R)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.unicode-raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(r)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "(R)(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "([uU])(''')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.unicode.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "([uU]r)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.unicode-raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "([uU]R)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.unicode-raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(r)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.raw-regex.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: '#regular_expressions'}
          ]
        },
        {
          begin: "(R)(')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.raw.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "([uU])(')",
          beginCaptures: {
            1: {name: 'storage.type.string.cython'},
            2: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.unicode.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_unicode_char'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin:
            "(''')(?=\\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER))",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: 'source.sql'}
          ]
        },
        {
          begin:
            "(')(?=\\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER))",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'},
            {include: 'source.sql'}
          ]
        },
        {
          begin: "(''')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "((?<=''')(')''|''')",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'meta.empty-string.single.cython'}
          },
          name: 'string.quoted.single.block.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        },
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.cython'}
          },
          end: "(')|(\\n)",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.cython'},
            2: {name: 'invalid.illegal.unclosed-string.cython'}
          },
          name: 'string.quoted.single.single-line.cython',
          patterns: [
            {include: '#constant_placeholder'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {include: '#string_quoted_double'},
        {include: '#string_quoted_single'}
      ]
    }
  },
  scopeName: 'source.cython'
}

export default grammar
