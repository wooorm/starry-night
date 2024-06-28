// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/bitbased/sublime-spintools>
// and licensed `zlib`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.spin'],
  names: ['propeller-spin'],
  patterns: [
    {
      begin: '{',
      captures: {0: {name: 'punctuation.definition.comment.php'}},
      end: '}(?!.*})',
      name: 'comment.block.spin'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.spin'}},
      match: "(').*$\\n?",
      name: 'comment.line.single-quote.spin'
    },
    {
      match: '(?i:(%[0-9A-Fa-f]*)L)',
      name: 'constant.numeric.integer.long.hexadecimal.spin'
    },
    {
      match: '(?i:(\\$[0-9A-Fa-f_]*)|(%[01_]*))',
      name: 'constant.numeric.integer.hexadecimal.spin'
    },
    {
      match:
        '\\b(?i:(((\\d+(\\.(?=[^a-zA-Z])\\d*)?|(?<=[^0-9a-zA-Z])\\.\\d+)(e[\\-\\+]?\\d+)?))J)',
      name: 'constant.numeric.complex.spin'
    },
    {
      match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^a-zA-Z])',
      name: 'constant.numeric.float.spin'
    },
    {
      match: '(?<=[^0-9a-zA-Z])(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))',
      name: 'constant.numeric.float.spin'
    },
    {
      match: '\\b(?i:(\\d+e[\\-\\+]?\\d+))',
      name: 'constant.numeric.float.spin'
    },
    {
      match: '\\b(?i:([0-9]+[0-9_]*)L)',
      name: 'constant.numeric.integer.long.decimal.spin'
    },
    {
      match: '\\b([0-9]+[0-9_]*)',
      name: 'constant.numeric.integer.decimal.spin'
    },
    {
      captures: {1: {name: 'storage.modifier.global.spin'}},
      match: '\\b(global)\\b'
    },
    {
      captures: {
        1: {name: 'keyword.control.import.spin'},
        2: {name: 'keyword.control.import.from.spin'}
      },
      match: '\\b(?:(import)|(from))\\b'
    },
    {
      match: '\\b((?i:if)|(?i:repeat)|(?i:else)|(?i:elseif))\\b',
      name: 'keyword.control.flow.spin'
    },
    {match: '\\b(and|in|is|not|or)\\b', name: 'keyword.operator.logical.spin'},
    {
      captures: {1: {name: 'keyword.other.spin'}},
      match:
        '\\b(_CLKMODE|_clkmode|_clkMode|_Clkmode|_XINFREQ|_xinfreq|_xinFreq|_Xinfreq|ABORT|Abort|abort|QUIT|Quit|quit|NEXT|Next|next|WHILE|While|while|UNTIL|Until|until|FROM|From|from|TO|To|to|RETURN|Return|return|DIR[a-zA-Z](?=\\[)|Dir[a-zA-Z](?=\\[)|dir[a-zA-Z](?=\\[)|OUT[a-zA-Z](?=\\[)|Out[a-zA-Z](?=\\[)|out[a-zA-Z](?=\\[)|IN[a-zA-Z](?=\\[)|In[a-zA-Z](?=\\[)|in[a-zA-Z](?=\\[))\\b'
    },
    {match: '<>', name: 'invalid.deprecated.operator.spin'},
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.spin'
    },
    {
      match:
        '\\+\\=|-\\=|:\\=|:|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.spin'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|/|//|<<|>>|&|\\||\\^|~|\\!',
      name: 'keyword.operator.arithmetic.spin'
    },
    {match: '\\=', name: 'keyword.operator.assignment.spin'},
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\:)',
      beginCaptures: {1: {name: 'storage.type.class.spin'}},
      contentName: 'entity.name.type.class.spin',
      end: '\\s*(:)',
      endCaptures: {1: {name: 'punctuation.section.class.begin.spin'}},
      name: 'meta.class.old-style.spin',
      patterns: [{include: '#entity_name_class'}]
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.class.spin'}},
      end: '(\\))\\s*(?:(\\:)|(.*$\\n?))',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.end.spin'},
        2: {name: 'punctuation.section.class.begin.spin'},
        3: {name: 'invalid.illegal.missing-section-begin.spin'}
      },
      name: 'meta.class.spin',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.spin',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_class'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.inheritance.begin.spin'}
          },
          contentName: 'meta.class.inheritance.spin',
          end: '(?=\\)|:)',
          patterns: [
            {
              begin: '(?<=\\(|,)\\s*',
              contentName: 'entity.other.inherited-class.spin',
              end: '\\s*(?:(,)|(?=\\)))',
              endCaptures: {
                1: {name: 'punctuation.separator.inheritance.spin'}
              },
              patterns: [{include: '$self'}]
            }
          ]
        }
      ]
    },
    {
      begin: '^\\s*(class)\\s+(?=[a-zA-Z_][a-zA-Z_0-9])',
      beginCaptures: {1: {name: 'storage.type.class.spin'}},
      end: '(\\()|\\s*($\\n?|#.*$\\n?)',
      endCaptures: {
        1: {name: 'punctuation.definition.inheritance.begin.spin'},
        2: {name: 'invalid.illegal.missing-inheritance.spin'}
      },
      name: 'meta.class.spin',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.type.class.spin',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin: '^(PUB|Pub|pub|PRI|Pri|pri)\\s+(?=[A-Za-z_][A-Za-z0-9_]*\\s*\\()',
      beginCaptures: {1: {name: 'storage.type.function.spin'}},
      end: "(\\)|\\n)\\s*(?:(\\:|(?=\\||'))|(.*$\\n?))",
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.spin'},
        2: {name: 'punctuation.section.function.begin.spin'},
        3: {name: 'invalid.illegal.missing-section-begin.spin'}
      },
      name: 'meta.function.spin',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.spin',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.spin'}
          },
          contentName: 'meta.function.parameters.spin',
          end: '(?![a-zA-Z0-9_])',
          patterns: [
            {include: '#keyword_arguments'},
            {
              captures: {
                1: {name: 'variable.parameter.function.spin'},
                2: {name: 'punctuation.separator.parameters.spin'}
              },
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,\\s*)|(?=[\\n\\)]))'
            }
          ]
        }
      ]
    },
    {
      begin: '^(PUB|Pub|pub|PRI|Pri|pri)\\s+(?=[A-Za-z_][A-Za-z0-9_]*)',
      beginCaptures: {1: {name: 'storage.type.function.spin'}},
      end: '(?![A-Za-z0-9_,])',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.spin'},
        2: {name: 'invalid.illegal.missing-parameters.spin'}
      },
      name: 'meta.function.spin',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.spin',
          end: '(?![A-Za-z0-9_])',
          patterns: [{include: '#entity_name_function'}]
        }
      ]
    },
    {
      begin:
        '^\\s*(?=@\\s*[A-Za-z_][A-Za-z0-9_]*(?:[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.spin'}},
      name: 'meta.function.decorator.spin',
      patterns: [
        {
          begin:
            '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*(?:[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          beginCaptures: {1: {name: 'punctuation.definition.decorator.spin'}},
          contentName: 'entity.name.function.decorator.spin',
          end: '(?=\\s*\\()',
          patterns: [{include: '#dotted_name'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.spin'}
          },
          contentName: 'meta.function.decorator.arguments.spin',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin: '[(,]\\s*(?=@[A-Za-z_][A-Za-z0-9_]*(?:[a-zA-Z_][a-zA-Z_0-9]*)*)',
      contentName: 'entity.name.function.decorator.spin',
      end: '(?![@A-Za-z0-9_])',
      name: 'meta.function.decorator.spin',
      patterns: [
        {
          begin: '(?=(@)\\s*[A-Za-z_][A-Za-z0-9_]*([A-Za-z_][A-Za-z0-9_]*)*)',
          beginCaptures: {1: {name: 'punctuation.definition.decorator.spin'}},
          end: '(?![@A-Za-z0-9_])',
          patterns: [{include: '#dotted_name'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\()',
      beginCaptures: {1: {name: 'punctuation.definition.arguments.begin.spin'}},
      contentName: 'meta.function-call.arguments.spin',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.spin'}},
      name: 'meta.function-call.spin',
      patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.spin'}},
      name: 'meta.function-call.spin',
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
            1: {name: 'punctuation.definition.arguments.begin.spin'}
          },
          contentName: 'meta.function-call.arguments.spin',
          end: '(?=\\))',
          patterns: [{include: '#keyword_arguments'}, {include: '$self'}]
        }
      ]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\[)',
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.spin'}},
      name: 'meta.item-access.spin',
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
            1: {name: 'punctuation.definition.arguments.begin.spin'}
          },
          contentName: 'meta.item-access.arguments.spin',
          end: '(?=\\])',
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      begin: '(?<=\\)|\\])\\s*(\\[)',
      beginCaptures: {1: {name: 'punctuation.definition.arguments.begin.spin'}},
      contentName: 'meta.item-access.arguments.spin',
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.spin'}},
      name: 'meta.item-access.spin',
      patterns: [{include: '$self'}]
    },
    {
      captures: {1: {name: 'storage.type.function.spin'}},
      match: '\\b(def|lambda)\\b'
    },
    {
      captures: {1: {name: 'storage.type.class.spin'}},
      match: '^\\b(class|OBJ|Obj|obj|DAT|Dat|dat|CON|Con|con|VAR|Var|var)\\b'
    },
    {include: '#line_continuation'},
    {include: '#language_variables'},
    {
      match:
        '\\b(cnt|CNT|Cnt|CLKFREQ|ClkFreq|clkFreq|clkfreq|P8X32A|P8x32a|P8X32a|p8x32a|XTAL([0-9]+)|Xtal([0-9]+)|xtal([0-9]+)|PLL([0-9]+)X|PLL([0-9]+)x|Pll([0-9]+)x|pll([0-9]+)X|pll([0-9]+)x)\\b',
      name: 'constant.language.spin'
    },
    {include: '#string_quoted_double'},
    {include: '#dotted_name'},
    {begin: '(\\()', end: '(\\))', patterns: [{include: '$self'}]},
    {
      captures: {
        1: {name: 'punctuation.definition.list.begin.spin'},
        2: {name: 'meta.empty-list.spin'},
        3: {name: 'punctuation.definition.list.end.spin'}
      },
      match: '(\\[)(\\s*(\\]))\\b'
    },
    {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.definition.list.begin.spin'}},
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.list.end.spin'}},
      name: 'meta.structure.list.spin',
      patterns: [
        {
          begin: '(?<=\\[|\\,)\\s*(?![\\],])',
          contentName: 'meta.structure.list.item.spin',
          end: '\\s*(?:(,)|(?=\\]))',
          endCaptures: {1: {name: 'punctuation.separator.list.spin'}},
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.tuple.begin.spin'},
        2: {name: 'meta.empty-tuple.spin'},
        3: {name: 'punctuation.definition.tuple.end.spin'}
      },
      match: '(\\()(\\s*(\\)))',
      name: 'meta.structure.tuple.spin'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.dictionary.begin.spin'},
        2: {name: 'meta.empty-dictionary.spin'},
        3: {name: 'punctuation.definition.dictionary.end.spin'}
      },
      match: '(\\{)(\\s*(\\}))',
      name: 'meta.structure.dictionary.spin'
    },
    {
      begin: '(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.dictionary.begin.spin'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.dictionary.end.spin'}}
    }
  ],
  repository: {
    builtin_exceptions: {
      match:
        '(?x)\\b(\n                (\n                    Arithmetic|Assertion|Attribute|Buffer|EOF|Environment|FloatingPoint|IO|\n                    Import|Indentation|Index|Key|Lookup|Memory|Name|NotImplemented|OS|Overflow|\n                    Reference|Runtime|Standard|Syntax|System|Tab|Type|UnboundLocal|\n                    Unicode(Encode|Decode|Translate)?|\n                    Value|VMS|Windows|ZeroDivision\n                )Error|\n                ((Pending)?Deprecation|Runtime|Syntax|User|Future|Import|Unicode|Bytes)?Warning|\n                (Base)?Exception|\n                SystemExit|StopIteration|NotImplemented|KeyboardInterrupt|GeneratorExit\n\t\t\t)\\b',
      name: 'support.type.exception.spin'
    },
    builtin_functions: {
      match:
        '(?x)\\b(\n                STRING|String|string|WAITCNT|Waitcnt|WaitCnt|waitcnt|waitCnt|COGNEW|CogNew|Cognew|cogNew|cognew|COGSTOP|CogStop|Cogstop|cogStop|cogstop|ABS|Abs|abs|MAX|Max|max|MIN|Min|min|NEG|Neg|neg|STRSIZE|StrSize|StrSIZE|strSIZE|strSize|Strsize|strsize|LONGFILL|LongFILL|longFILL|LongFill|longFill|Longfill|longfill|BYTEMOVE|ByteMove|ByteMOVE|byteMOVE|byteMove|Bytemove|bytemove|BYTEFILL|ByteFILL|ByteFill|Bytefill|byteFILL|ByteFILL|byteFill|bytefill|LOOKUPZ|LookUpz|lookUpz|LookUpZ|lookUpZ|LookUPZ|Lookupz|lookupz|CONSTANT|Constant|constant\n\t\t\t)\\b(?=\\s*\\()',
      name: 'support.function.builtin.spin'
    },
    builtin_types: {
      match:
        '(?x)\\b(\n\t\t\t\tLONG|Long|long|BYTE|Byte|byte|WORD|Word|word|RES|Res|res\n\t\t\t)\\b',
      name: 'support.type.spin'
    },
    constant_placeholder: {
      match:
        '(?i:(\\([a-z_]+\\))?#?0?\\-?[ ]?\\+?([0-9]*|\\*)(\\.([0-9]*|\\*))?[hL]?[a-z])',
      name: 'constant.other.placeholder.spin'
    },
    docstrings: {
      patterns: [
        {
          begin: '^\\s*(?=[uU]?[rR]?\\{\\{)',
          end: '(?<=\\}\\})',
          name: 'comment.block.spin',
          patterns: [{include: '#string_quoted_double'}]
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
        1: {name: 'constant.character.escape.hex.spin'},
        10: {name: 'constant.character.escape.linefeed.spin'},
        11: {name: 'constant.character.escape.return.spin'},
        12: {name: 'constant.character.escape.tab.spin'},
        13: {name: 'constant.character.escape.vertical-tab.spin'},
        2: {name: 'constant.character.escape.octal.spin'},
        3: {name: 'constant.character.escape.newline.spin'},
        4: {name: 'constant.character.escape.backlash.spin'},
        5: {name: 'constant.character.escape.double-quote.spin'},
        6: {name: 'constant.character.escape.single-quote.spin'},
        7: {name: 'constant.character.escape.bell.spin'},
        8: {name: 'constant.character.escape.backspace.spin'},
        9: {name: 'constant.character.escape.formfeed.spin'}
      },
      match:
        '(\\\\x[0-9A-F]{2})|(\\\\[0-7]{3})|(\\\\\\n)|(\\\\\\\\)|(\\\\\\")|(\\\\\')|(\\\\a)|(\\\\b)|(\\\\f)|(\\\\n)|(\\\\r)|(\\\\t)|(\\\\v)'
    },
    escaped_unicode_char: {
      captures: {
        1: {name: 'constant.character.escape.unicode.16-bit-hex.spin'},
        2: {name: 'constant.character.escape.unicode.32-bit-hex.spin'},
        3: {name: 'constant.character.escape.unicode.name.spin'}
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
        '\\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|with|yield)\\b',
      name: 'invalid.illegal.name.spin'
    },
    keyword_arguments: {
      begin: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(=)(?!=)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.spin'},
        2: {name: 'keyword.operator.assignment.spin'}
      },
      end: '\\s*(?:(?=$\\n?|[\\)\\:]))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.spin'}},
      patterns: [{include: '$self'}]
    },
    language_variables: {
      match: '\\b(self|cls)\\b',
      name: 'variable.language.spin'
    },
    line_continuation: {
      captures: {
        1: {name: 'punctuation.separator.continuation.line.spin'},
        2: {name: 'invalid.illegal.unexpected-text.spin'}
      },
      match: '(\\\\)(.*)$\\n?'
    },
    magic_function_names: {
      match:
        '(?x)\\b(__(?:\n\t\t\t\t\t\tabs|add|AND|And|and|OR|NOT|Not|not|Or|or|call|cmp|coerce|complex|contains|del|delattr|\n\t\t\t\t\t\tdelete|delitem|delslice|div|divmod|enter|eq|exit|float|\n\t\t\t\t\t\tfloordiv|ge|get|getattr|getattribute|getitem|getslice|gt|\n\t\t\t\t\t\thash|hex|iadd|iand|idiv|ifloordiv|ilshift|imod|imul|init|\n\t\t\t\t\t\tint|invert|ior|ipow|irshift|isub|iter|itruediv|ixor|le|len|\n\t\t\t\t\t\tlong|lshift|lt|mod|mul|ne|neg|new|nonzero|oct|or|pos|pow|\n\t\t\t\t\t\tradd|rand|rdiv|rdivmod|repr|rfloordiv|rlshift|rmod|rmul|ror|\n\t\t\t\t\t\trpow|rrshift|rshift|rsub|rtruediv|rxor|set|setattr|setitem|\n\t\t\t\t\t\tsetslice|str|sub|truediv|unicode|xor\n\t\t\t\t\t)__)\\b',
      name: 'support.function.magic.spin'
    },
    magic_variable_names: {
      match:
        '\\b__(all|bases|class|debug|dict|doc|file|members|metaclass|methods|name|slots|weakref)__\\b',
      name: 'support.variable.magic.spin'
    },
    regular_expressions: {patterns: [{include: 'source.regexp.spin'}]},
    string_quoted_double: {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.spin'}
          },
          end: '((?<=")(")|")|(\\n)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.spin'},
            2: {name: 'meta.empty-string.double.spin'},
            3: {name: 'invalid.illegal.unclosed-string.spin'}
          },
          name: 'string.quoted.double.single-line.spin',
          patterns: [{include: '#escaped_char'}]
        }
      ]
    },
    strings: {patterns: [{include: '#string_quoted_double'}]}
  },
  scopeName: 'source.spin'
}

export default grammar
