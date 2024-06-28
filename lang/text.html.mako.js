// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.mako', '.mao'],
  names: ['mako'],
  patterns: [
    {match: '(##(.*)$)', name: 'comment.line.mako'},
    {
      begin: '(<%\\s)',
      captures: {1: {name: 'keyword.control'}},
      end: '(%>)',
      name: 'source.mako.substitution',
      patterns: [{include: 'source.python'}]
    },
    {
      begin: '(<%!\\s)',
      captures: {1: {name: 'keyword.control'}},
      end: '(%>)',
      name: 'source.mako.substitution',
      patterns: [{include: 'source.python'}]
    },
    {
      begin: '(<%(text)>)',
      captures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(</%(\\2)>)',
      name: 'source.mako.text'
    },
    {
      begin: '(<%(doc)>)',
      captures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(</%(\\2)>)',
      name: 'comment.block.mako'
    },
    {
      begin: '(\\${)',
      captures: {1: {name: 'keyword.control'}, 2: {name: 'keyword.control'}},
      end: '(})',
      name: 'source.mako.expression',
      patterns: [{include: 'source.python'}]
    },
    {
      begin: '^\\s*(%)(\\s*((endfor)|(endif)|(endwhile)))?',
      beginCaptures: {
        1: {name: 'keyword.control'},
        2: {name: 'keyword.control'}
      },
      end: '$',
      name: 'source.doc.python.mako.controlline',
      patterns: [{include: 'source.python'}]
    },
    {
      begin: '^(#)',
      beginCaptures: {1: {name: 'keyword.control'}},
      end: '$',
      name: 'source.python.mako.line',
      patterns: []
    },
    {
      begin: '(<%(def)\\S?)',
      captures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(</%(\\2)>)',
      name: 'source.mako.def',
      patterns: [
        {
          begin: '(?<=<%def)',
          end: '(?=>)',
          patterns: [
            {
              begin: '(name)\\s*(=)\\s*(")(?=[A-Za-z_][A-Za-z0-9_]*)',
              beginCaptures: {
                1: {name: 'keyword.control'},
                2: {name: 'keyword.operator'},
                3: {name: 'punctuation.section.function.begin.python'}
              },
              contentName: 'entity.name.function.python',
              end: '(")',
              endCaptures: {
                1: {name: 'punctuation.section.function.begin.python'}
              },
              patterns: [{include: '#function_def'}, {include: '#entity_name'}]
            },
            {include: '#tag-stuff'}
          ]
        },
        {
          begin: '(>)',
          captures: {1: {name: 'keyword.control'}},
          end: '(?=</%def>)',
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      begin: '(<%(call))',
      captures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(</%(\\2)>)',
      name: 'source.mako.call',
      patterns: [
        {
          begin: '(expr)\\s*(=)\\s*(")',
          beginCaptures: {
            1: {name: 'keyword.control'},
            2: {name: 'keyword.operator'},
            3: {name: 'punctuation.section.function.begin.python'}
          },
          end: '(")',
          endCaptures: {1: {name: 'punctuation.section.function.begin.python'}},
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '(>)',
          captures: {1: {name: 'keyword.control'}},
          end: '(?=</%call>)',
          patterns: [{include: '$self'}]
        }
      ]
    },
    {
      begin: '(<%(inherit|namespace|include)) ',
      beginCaptures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(/>)',
      endCaptures: {1: {name: 'keyword.control'}},
      name: 'source.mako.inherit',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(<%(page))',
      beginCaptures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(\\/>)',
      endCaptures: {1: {name: 'keyword.control'}},
      name: 'source.mako.page',
      patterns: [
        {
          begin: '(args)\\s*(=)\\s*(")',
          beginCaptures: {
            1: {name: 'keyword.control'},
            2: {name: 'keyword.operator'},
            3: {name: 'punctuation.section.function.begin.python'}
          },
          end: '(")',
          endCaptures: {1: {name: 'punctuation.section.function.end.python'}},
          patterns: [
            {include: '#positional_args'},
            {include: '#keyword_arguments'}
          ]
        },
        {include: '#tag-stuff'}
      ]
    },
    {
      begin: '(<%([a-zA-Z0-9:_]+))',
      captures: {
        1: {name: 'keyword.control'},
        2: {name: 'storage.type.function.python'}
      },
      end: '(</%(\\2)>|\\/>)',
      name: 'source.mako.genericcall',
      patterns: [
        {
          begin: '(expr)\\s*(=)\\s*(")',
          beginCaptures: {
            1: {name: 'keyword.control'},
            2: {name: 'keyword.operator'},
            3: {name: 'punctuation.section.function.begin.python'}
          },
          end: '(")',
          endCaptures: {1: {name: 'punctuation.section.function.begin.python'}},
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '(>)',
          captures: {1: {name: 'keyword.control'}},
          end: '(?=</%[a-zA-Z0-9:_]+>)',
          patterns: [{include: '$self'}]
        },
        {include: '#tag-stuff'}
      ]
    },
    {include: 'text.html.basic'}
  ],
  repository: {
    builtin_exceptions: {
      match:
        '(?x)\\b((Arithmetic|Assertion|Attribute|EOF|Environment|FloatingPoint|IO|Import|Indentation|Index|Key|Lookup|Memory|Name|OS|Overflow|NotImplemented|Reference|Runtime|Standard|Syntax|System|Tab|Type|UnboundLocal|Unicode(Translate|Encode|Decode)?|Value|ZeroDivision)Error|(Deprecation|Future|Overflow|PendingDeprecation|Runtime|Syntax|User)?Warning|KeyboardInterrupt|NotImplemented|StopIteration|SystemExit|(Base)?Exception)\\b',
      name: 'support.type.exception.python'
    },
    builtin_functions: {
      match:
        '(?x)\\b(\n                __import__|all|abs|any|apply|callable|chr|cmp|coerce|compile|delattr|dir|\n                divmod|eval|execfile|filter|getattr|globals|hasattr|hash|hex|id|\n                input|intern|isinstance|issubclass|iter|len|locals|map|max|min|oct|\n                ord|pow|range|raw_input|reduce|reload|repr|round|setattr|sorted|\n                sum|unichr|vars|zip\n\t\t\t)\\b',
      name: 'support.function.builtin.python'
    },
    builtin_types: {
      match:
        '(?x)\\b(\n\t\t\t\tbasestring|bool|buffer|classmethod|complex|dict|enumerate|file|\n\t\t\t\tfloat|frozenset|int|list|long|object|open|property|reversed|set|\n\t\t\t\tslice|staticmethod|str|super|tuple|type|unicode|xrange\n\t\t\t)\\b',
      name: 'support.type.python'
    },
    constant_placeholder: {
      match:
        '(?i:%(\\([a-z_]+\\))?#?0?\\-?[ ]?\\+?([0-9]*|\\*)(\\.([0-9]*|\\*))?[hL]?[a-z%])',
      name: 'constant.other.placeholder.python'
    },
    dotted_entity_name: {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(\\.[A-Za-z_][A-Za-z0-9_]*)*)',
      end: '(?<=[A-Za-z0-9_])',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          end: '(?<=[A-Za-z0-9_])',
          patterns: [{include: '#entity_name'}]
        }
      ]
    },
    entities: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.html'},
            3: {name: 'punctuation.definition.entity.html'}
          },
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          name: 'constant.character.entity.html'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.html'}
      ]
    },
    entity_name: {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
      end: '(?<=[A-Za-z0-9_])',
      patterns: [
        {include: '#magic_function_names'},
        {include: '#magic_variable_names'},
        {include: '#illegal_names'},
        {include: '#builtin_exceptions'},
        {include: '#builtin_functions'},
        {include: '#builtin_types'},
        {include: '#generic_name'}
      ]
    },
    escaped_char: {
      match: '\\\\[.\\n]',
      name: 'constant.character.escape.python'
    },
    function_def: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.section.parameters.begin.python'}},
      contentName: 'meta.function.parameters.python',
      end: '(\\))\\s*(?=\\")',
      endCaptures: {1: {name: 'punctuation.section.parameters.end.python'}},
      patterns: [{include: '#keyword_arguments'}, {include: '#positional_args'}]
    },
    function_name: {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
      end: '(?<=[A-Za-z0-9_])',
      patterns: [
        {include: '#magic_function_names'},
        {include: '#magic_variable_names'},
        {include: '#builtin_exceptions'},
        {include: '#builtin_functions'},
        {include: '#builtin_types'},
        {include: '#generic_name'}
      ]
    },
    generic_name: {match: '[A-Za-z_][A-Za-z0-9_]*'},
    illegal_names: {
      match:
        '\\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield)\\b',
      name: 'invalid.illegal.name.python'
    },
    keyword_arguments: {
      begin: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.parameter.function.python'},
        2: {name: 'keyword.operator.assignment.python'}
      },
      end: '\\s*(?:(,)|(?=$\\n?|[\\)"]))',
      endCaptures: {1: {name: 'punctuation.separator.parameters.python'}},
      patterns: [{include: '$base'}]
    },
    line_continuation: {
      captures: {
        1: {name: 'punctuation.separator.continuation.line.python'},
        2: {name: 'invalid.illegal.unexpected-text.python'}
      },
      match: '(\\\\)(.*)$\\n?'
    },
    magic_function_names: {
      match:
        '(?x)\\b(__(?:\n\t\t\t\t\t\tabs|add|and|call|cmp|coerce|complex|contains|del|delattr|\n\t\t\t\t\t\tdelete|delitem|delslice|div|divmod|enter|eq|exit|float|\n\t\t\t\t\t\tfloordiv|ge|get|getattr|getattribute|getitem|getslice|gt|\n\t\t\t\t\t\thash|hex|iadd|iand|idiv|ifloordiv|ilshift|imod|imul|init|\n\t\t\t\t\t\tint|invert|ior|ipow|irshift|isub|iter|itruediv|ixor|le|len|\n\t\t\t\t\t\tlong|lshift|lt|mod|mul|ne|neg|new|nonzero|oct|or|pos|pow|\n\t\t\t\t\t\tradd|rand|rdiv|rdivmod|repr|rfloordiv|rlshift|rmod|rmul|ror|\n\t\t\t\t\t\trpow|rrshift|rshift|rsub|rtruediv|rxor|set|setattr|setitem|\n\t\t\t\t\t\tsetslice|str|sub|truediv|unicode|xor\n\t\t\t\t\t)__)\\b',
      name: 'entity.name.function.magic.python'
    },
    magic_variable_names: {
      match:
        '\\b__(all|bases|class|debug|dict|doc|file|members|metaclass|methods|name|slots|weakref)__\\b',
      name: 'support.variable.magic.python'
    },
    positional_args: {
      captures: {
        1: {name: 'variable.parameter.function.python'},
        2: {name: 'punctuation.separator.parameters.python'}
      },
      match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(,)|(?=[\\n\\)"]))'
    },
    source_mako_tagargs: {
      name: 'source.mako.tagargs',
      patterns: [
        {
          begin: '(name)\\s*(=)\\s*(")(?=[A-Za-z_][A-Za-z0-9_]*)',
          beginCaptures: {
            1: {name: 'keyword.control'},
            2: {name: 'keyword.operator'},
            3: {name: 'punctuation.section.function.begin.python'}
          },
          contentName: 'entity.name.function.python',
          end: '(")',
          endCaptures: {1: {name: 'punctuation.section.function.begin.python'}},
          patterns: [{include: '#function_def'}, {include: '#entity_name'}]
        },
        {include: '#tag-stuff'}
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.double.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.html'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
      name: 'string.quoted.single.html',
      patterns: [{include: '#embedded-code'}, {include: '#entities'}]
    },
    'tag-generic-attribute': {
      match: '\\b([a-zA-Z\\-_:]+)',
      name: 'entity.other.attribute-name.html'
    },
    'tag-id-attribute': {
      begin: '\\b(id)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.id.html'},
        2: {name: 'punctuation.separator.key-value.html'}
      },
      end: '(?<=\'|")',
      name: 'meta.attribute-with-value.id.html',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.double.html',
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.html'}
          },
          contentName: 'meta.toc-list.id.html',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.html'}},
          name: 'string.quoted.single.html',
          patterns: [{include: '#embedded-code'}, {include: '#entities'}]
        }
      ]
    },
    'tag-stuff': {
      patterns: [
        {include: '#tag-id-attribute'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    }
  },
  scopeName: 'text.html.mako'
}

export default grammar
