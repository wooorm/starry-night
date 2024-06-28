// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom-crystal/language-crystal>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.cr'],
  names: ['crystal'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.control.abstract.crystal'},
        2: {name: 'keyword.control.class.crystal'},
        3: {name: 'entity.name.type.class.crystal'},
        4: {name: 'punctuation.section.function.crystal'},
        5: {name: 'entity.name.type.generic.crystal'},
        6: {name: 'punctuation.section.function.crystal'},
        7: {name: 'punctuation.separator.inheritance.crystal'},
        8: {name: 'entity.other.inherited-class.crystal'}
      },
      match:
        '^\\s*(?:(abstract)\\s+)?(class|struct|def)\\s+([.\\w\\d_:]+)(?:(\\()([.\\w\\d_:]+)(\\)))?(?:\\s+(<)\\s+([.\\w\\d_:]+))?',
      name: 'meta.class.crystal'
    },
    {
      captures: {
        1: {name: 'keyword.control.struct.crystal'},
        2: {name: 'entity.name.type.struct.crystal'},
        3: {name: 'punctuation.separator.inheritance.crystal'},
        4: {name: 'entity.other.inherited-struct.crystal'}
      },
      match:
        '^\\s*(struct)\\s+(?:([.\\w\\d_:]+)(?:\\s+(<)\\s+([.\\w\\d_:]+))?)',
      name: 'meta.class.crystal'
    },
    {
      captures: {
        1: {name: 'keyword.control.module.crystal'},
        2: {name: 'entity.name.type.module.crystal'}
      },
      match: '^\\s*(module)\\s+([.\\w\\d_:]+)',
      name: 'meta.module.crystal'
    },
    {
      captures: {
        1: {name: 'keyword.control.enum.crystal'},
        2: {name: 'entity.name.type.enum.crystal'}
      },
      match: '^\\s*(enum)\\s+([.\\w\\d_:]+)',
      name: 'meta.enum.crystal'
    },
    {
      captures: {
        1: {name: 'keyword.control.lib.crystal'},
        2: {name: 'entity.name.type.lib.crystal'}
      },
      match: '^\\s*(lib)\\s+([.\\w\\d_]+)',
      name: 'meta.lib.crystal'
    },
    {
      captures: {
        1: {name: 'keyword.control.annotation.crystal'},
        2: {name: 'entity.name.type.annotation.crystal'}
      },
      match: '^\\s*(annotation)\\s+([.\\w\\d_]+)',
      name: 'meta.annotation.crystal'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.hashkey.crystal'}},
      match: '(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)',
      name: 'constant.other.symbol.hashkey.crystal'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.crystal'}},
      match: '(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!])?)(?=\\s*=>)',
      name: 'constant.other.symbol.hashkey.crystal'
    },
    {
      match:
        '(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|forall|for|if|ifdef|in|module|rescue|struct|then|unless|until|when|while|annotation)\\b(?![?!])',
      name: 'keyword.control.crystal'
    },
    {
      match: '(?<!\\.)\\bdo\\b\\S*',
      name: 'keyword.control.start-block.crystal'
    },
    {match: '(?<=\\{)(\\s+)', name: 'meta.syntax.crystal.start-block'},
    {
      match: '(?<!\\.)\\b(and|not|or)\\b',
      name: 'keyword.operator.logical.crystal'
    },
    {
      match:
        '(?<!\\.)\\b(alias|alias_method|break|next|redo|retry|return|super|type|undef|yield|out|pointerof|typeof)\\b(?![?!])|\\bdefined\\?|\\bblock_given\\?',
      name: 'keyword.control.pseudo-method.crystal'
    },
    {match: '\\bnil\\b(?![?!])', name: 'constant.language.nil.crystal'},
    {
      match: '\\b(true|false)\\b(?![?!])',
      name: 'constant.language.boolean.crystal'
    },
    {
      match: '\\b(__(FILE|LINE)__)\\b(?![?!])',
      name: 'variable.language.crystal'
    },
    {match: '\\bself\\b(?![?!])', name: 'variable.language.self.crystal'},
    {
      match:
        '((?<=\\s)|(?<=^))\\b(initialize|new|loop|include|extend|prepend|raise|fail|getter(?:[?])?|setter(?:[?])?|property(?:[?])?|catch|throw)\\b\\w?((?=\\s)|(?=$))',
      name: 'keyword.other.special-method.crystal'
    },
    {
      begin: '\\b(?<!\\.|::)(require)\\b',
      captures: {1: {name: 'keyword.other.special-method.crystal'}},
      end: '$|(?=#|\\})',
      name: 'meta.require.crystal',
      patterns: [{include: '$self'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.crystal'}},
      match: '(@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.instance.crystal'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.crystal'}},
      match: '(@@)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.class.crystal'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.crystal'}},
      match: '(\\$)[a-zA-Z_]\\w*',
      name: 'variable.other.readwrite.global.crystal'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.crystal'}},
      match:
        '(\\$)(!|@|&|`|\'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|"|-[0adFiIlpv])',
      name: 'variable.other.readwrite.global.pre-defined.crystal'
    },
    {
      begin: '\\b(ENV)\\[',
      beginCaptures: {1: {name: 'variable.other.constant.crystal'}},
      end: '\\]',
      name: 'meta.environment-variable.crystal',
      patterns: [{include: '$self'}]
    },
    {
      match: '\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))',
      name: 'support.class.crystal'
    },
    {
      match:
        '\\b(Nil|Int|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float32|Float64|Set|Slice|Float|Number|StaticArray|Symbol|BigFloat|BigInt|BigRational|BitArray|Bool|Char|Atomic|Complex|Time|String|Tuple|NamedTuple|Proc|Union|Pointer|Range)\\b\\w?',
      name: 'support.struct.crystal'
    },
    {
      match:
        '((?<=\\s)|(?<=^))\\b(abort|at_exit|autoload\\??|binding|callcc|caller|caller_locations|chomp|chop|eval|exec|exit|exit!|fork|format|gets|global_variables|gsub|iterator\\?|lambda|load|local_variables|open|p|print|printf|proc|putc|puts|rand|readline|readlines|select|set_trace_func|sleep|spawn|sprintf|srand|sub|syscall|system|test|trace_var|trap|untrace_var|warn)\\b\\w?((?=\\s)|(?=$))',
      name: 'support.function.kernel.crystal'
    },
    {match: '\\b[A-Z]\\w*\\b', name: 'variable.other.constant.crystal'},
    {
      begin: '\\b(?:(private|protected)\\s+)?(def|macro)\\s+(\\S+)\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.visibility.crystal'},
        2: {name: 'keyword.control.def.crystal'},
        3: {name: 'entity.name.function.crystal'},
        4: {name: 'punctuation.definition.parameters.crystal'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.crystal'}},
      name: 'meta.function.method.with-arguments.crystal',
      patterns: [
        {
          begin: '(?![\\s,)])',
          end: '(?=[,)])',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.variable.crystal'},
                2: {name: 'variable.parameter.function.crystal'}
              },
              match: '\\G([&*]?)([_a-zA-Z][_a-zA-Z0-9]*)'
            },
            {include: '$self'}
          ]
        }
      ]
    },
    {
      begin: '\\b(fun)\\s+(\\S+)(?:\\s+(=)\\s+(\\S+))?\\s*(\\()',
      beginCaptures: {
        1: {name: 'keyword.control.function.crystal'},
        2: {name: 'entity.name.function.crystal'},
        4: {name: 'entity.name.function.crystal'},
        5: {name: 'punctuation.definition.parameters.crystal'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.crystal'}},
      name: 'meta.function.method.with-arguments.crystal',
      patterns: [
        {
          begin: '(?![\\s,)])',
          end: '(?=[,)])',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.variable.crystal'},
                2: {name: 'variable.parameter.function.crystal'}
              },
              match: '\\G([&*]?)([_a-zA-Z][_a-zA-Z0-9]*)'
            },
            {include: '$self'}
          ]
        }
      ]
    },
    {
      begin: '\\b(?:(private|protected)\\s+)?(def|macro)\\s+(\\S+)',
      beginCaptures: {
        1: {name: 'keyword.control.visibility.crystal'},
        2: {name: 'keyword.control.def.crystal'},
        3: {name: 'entity.name.function.crystal'}
      },
      end: '$',
      name: 'meta.function.method.with-arguments.crystal',
      patterns: [
        {
          begin: '(?![\\s,])',
          end: '(?=,|$)',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.variable.crystal'}},
              match: '\\G([&*]?)[_a-zA-Z][_a-zA-Z0-9]*',
              name: 'variable.parameter.function.crystal'
            },
            {include: '$self'}
          ]
        }
      ]
    },
    {
      captures: {
        1: {name: 'keyword.control.visibility.crystal'},
        2: {name: 'keyword.control.def.crystal'},
        3: {name: 'entity.name.function.crystal'}
      },
      match: '\\b(?:(private|protected)\\s+)?(def|macro)\\s+(\\S+)',
      name: 'meta.function.method.without-arguments.crystal'
    },
    {match: '0x[A-Fa-f0-9]+', name: 'constant.numeric.hexadecimal.crystal'},
    {match: '0o[0-7]+', name: 'constant.numeric.octal.crystal'},
    {match: '0b[10]+', name: 'constant.numeric.binary.crystal'},
    {
      match:
        '((((?<=\\s)\\d*)|(^\\d*)|((?<=[\\s&\\|^eE<>%*!\\/=\\[\\](){};,+-])))(((((?<=\\d)((\\.){0,1}|(\\.{3})))|([+-]*))((\\d+\\_*)+)\\.?(((?<=[eE])[+-]?))?\\d*)|((?<=\\d)(_\\d+)+\\.?\\d*))(((?<=\\d)[eE]?\\d*)(?=[.eE\\s_iuf&\\|^<>%*!\\/=\\[\\](){};,+-])|($))|((?<=\\d)\\.{3}\\w*(?=\\))))',
      name: 'constant.numeric.crystal'
    },
    {
      match: '((?<=\\d_)|(?<=\\d))(u(8|16|32|64))(?!\\w)',
      name: 'entity.name.type.unsigned-int.crystal'
    },
    {
      match: '((?<=\\d_)|(?<=\\d))(i(8|16|32|64))(?!\\w)',
      name: 'entity.name.type.signed-int.crystal'
    },
    {
      match: '((?<=\\d_)|(?<=\\d))(f(32|64))(?!\\w)',
      name: 'entity.name.type.float.crystal'
    },
    {
      begin: ":'",
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: "\\\\['\\\\]", name: 'constant.character.escape.crystal'}
      ]
    },
    {
      begin: ':"',
      beginCaptures: {0: {name: 'punctuation.section.symbol.begin.crystal'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.section.symbol.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      match: '(?<!\\()/=',
      name: 'keyword.operator.assignment.augmented.crystal'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.char.begin.crystal'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.char.end.crystal'}},
      name: 'string.quoted.single.crystal',
      patterns: [
        {match: "\\\\'|\\\\\\\\", name: 'constant.character.escape.crystal'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.double.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin: '%x\\{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%x\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%x\\<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%x\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%x([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin:
        '(?<![\\w)])((/))(?![*+?])(?=(?:\\\\/|[^/])*/[eimnosux]*\\s*([\\]#).,?:}]|$|\\|\\||&&|<=>|=>|==|=~|!~|!=|;|if|else|elsif|then|do|end|unless|while|until|or|and))',
      captures: {
        1: {name: 'string.regexp.interpolated.crystal'},
        2: {name: 'punctuation.section.regexp.crystal'}
      },
      contentName: 'string.regexp.interpolated.crystal',
      end: '((/[eimnosux]*))(?=[^eimnosux])',
      patterns: [{include: '#regex_sub'}]
    },
    {
      begin: '%r\\{',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.crystal'}},
      end: '\\}[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.crystal'}},
      name: 'string.regexp.interpolated.crystal',
      patterns: [{include: '#regex_sub'}, {include: '#nest_curly_r'}]
    },
    {
      begin: '%r\\[',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.crystal'}},
      end: '\\][eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.crystal'}},
      name: 'string.regexp.interpolated.crystal',
      patterns: [{include: '#regex_sub'}, {include: '#nest_brackets_r'}]
    },
    {
      begin: '%r\\(',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.crystal'}},
      end: '\\)[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.crystal'}},
      name: 'string.regexp.interpolated.crystal',
      patterns: [{include: '#regex_sub'}, {include: '#nest_parens_r'}]
    },
    {
      begin: '%r\\<',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.crystal'}},
      end: '\\>[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.crystal'}},
      name: 'string.regexp.interpolated.crystal',
      patterns: [{include: '#regex_sub'}, {include: '#nest_ltgt_r'}]
    },
    {
      begin: '%r([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.regexp.begin.crystal'}},
      end: '\\1[eimnosux]*',
      endCaptures: {0: {name: 'punctuation.section.regexp.end.crystal'}},
      name: 'string.regexp.interpolated.crystal',
      patterns: [{include: '#regex_sub'}]
    },
    {
      begin: '%I\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%I\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%I\\<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%I\\{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%I([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin: '%i\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\]|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%i\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%i\\<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\>|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%i\\{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\}|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%i([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%W\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%W\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%W\\<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%W\\{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%W([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin: '%w\\[',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\]|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%w\\(',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%w\\<',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\>|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%w\\{',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\}|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%w([^\\w])',
      beginCaptures: {0: {name: 'punctuation.section.array.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.array.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%Q\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    {
      begin: '%Q\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    {
      begin: '%Q\\<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    {
      begin: '%Q\\{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    {
      begin: '%Q([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [{include: '#interpolated_crystal'}, {include: '#escaped_char'}]
    },
    {
      begin: '%\\{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%\\<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.interpolated.crystal',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%q\\(',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%q\\<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\>|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%q\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\]|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%q\\{',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [
        {match: '\\\\\\}|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%q([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.quoted.other.crystal',
      patterns: [{match: '\\\\.'}]
    },
    {
      begin: '%s\\(',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\)|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_parens'}
      ]
    },
    {
      begin: '%s\\<',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: '\\>',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\>|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_ltgt'}
      ]
    },
    {
      begin: '%s\\[',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\]|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_brackets'}
      ]
    },
    {
      begin: '%s\\{',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [
        {match: '\\\\\\}|\\\\\\\\', name: 'constant.character.escape.crystal'},
        {include: '#nest_curly'}
      ]
    },
    {
      begin: '%s([^\\w])',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.crystal'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.crystal'}},
      name: 'constant.other.symbol.crystal',
      patterns: [{match: '\\\\.'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.crystal'}},
      match:
        '(?<!:)(:)(?>[$a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?|===?|<=>|>[>=]?|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?|@@?[a-zA-Z_]\\w*)',
      name: 'constant.other.symbol.crystal'
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.crystal'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.crystal'}},
          end: '\\n',
          name: 'comment.line.number-sign.crystal',
          patterns: [{include: '#yard'}]
        }
      ]
    },
    {
      begin: '^__END__\\n',
      captures: {0: {name: 'string.unquoted.program-block.crystal'}},
      contentName: 'text.plain',
      end: '(?=not)impossible',
      patterns: [
        {
          begin: '(?=<?xml|<(?i:html\\b)|!DOCTYPE (?i:html\\b))',
          end: '(?=not)impossible',
          name: 'text.html.embedded.crystal',
          patterns: [{include: 'text.html.basic'}]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)HTML)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.html',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)HTML)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'text.html',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'text.html.basic'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)SQL)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.sql',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)SQL)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.sql',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.sql'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)CSS)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.css',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)CSS)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.css',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.css'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)CPP)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.cpp',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)CPP)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.cpp',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.c++'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)C)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.c',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)C)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.c',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.c'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.js',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.js',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.js'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)JQUERY)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.js.jquery',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)JQUERY)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.js.jquery',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.shell',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.shell',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.shell'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)LUA)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.lua',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)LUA)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.lua',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.lua'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?=(?><<-("?)((?:[_\\w]+_|)crystal)\\b\\1))',
      end: '(?!\\G)',
      name: 'meta.embedded.block.crystal',
      patterns: [
        {
          begin: '(?><<-("?)((?:[_\\w]+_|)crystal)\\b\\1)',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.crystal'}
          },
          contentName: 'source.crystal',
          end: '\\s*\\2$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
          name: 'string.unquoted.heredoc.crystal',
          patterns: [
            {include: '#heredoc'},
            {include: '#interpolated_crystal'},
            {include: 'source.crystal'},
            {include: '#escaped_char'}
          ]
        }
      ]
    },
    {
      begin: '(?>\\=\\s*<<(\\w+))',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '^\\1$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.unquoted.heredoc.crystal',
      patterns: [
        {include: '#heredoc'},
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'}
      ]
    },
    {
      begin: '(?><<-(\\w+))',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.crystal'}},
      end: '\\s*\\1$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.crystal'}},
      name: 'string.unquoted.heredoc.crystal',
      patterns: [
        {include: '#heredoc'},
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'}
      ]
    },
    {
      begin: '(?<=\\{|do|\\{\\s|do\\s)(\\|)',
      captures: {1: {name: 'punctuation.separator.variable.crystal'}},
      end: '(\\|)',
      patterns: [
        {match: '[_a-zA-Z][_a-zA-Z0-9]*', name: 'variable.other.block.crystal'},
        {match: ',', name: 'punctuation.separator.variable.crystal'}
      ]
    },
    {match: '=>', name: 'punctuation.separator.key-value'},
    {
      match: '<<=|%=|&{1,2}=|\\*=|\\*\\*=|\\+=|\\-=|\\^=|\\|{1,2}=|<<',
      name: 'keyword.operator.assignment.augmented.crystal'
    },
    {
      match: '<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?',
      name: 'keyword.operator.comparison.crystal'
    },
    {
      match: '(?<=[ \\t])!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\^',
      name: 'keyword.operator.logical.crystal'
    },
    {
      match: '(%|&|\\*\\*|\\*|\\+|\\-|/)',
      name: 'keyword.operator.arithmetic.crystal'
    },
    {match: '=', name: 'keyword.operator.assignment.crystal'},
    {match: '\\||~|>>', name: 'keyword.operator.other.crystal'},
    {match: '\\;', name: 'punctuation.separator.statement.crystal'},
    {match: ',', name: 'punctuation.separator.object.crystal'},
    {
      captures: {1: {name: 'punctuation.separator.namespace.crystal'}},
      match: '(::)\\s*(?=[A-Z])'
    },
    {
      captures: {1: {name: 'punctuation.separator.method.crystal'}},
      match: '(\\.|::)\\s*(?![A-Z])'
    },
    {match: ':', name: 'punctuation.separator.other.crystal'},
    {match: '\\{', name: 'punctuation.section.scope.begin.crystal'},
    {match: '\\}', name: 'punctuation.section.scope.end.crystal'},
    {match: '\\[', name: 'punctuation.section.array.begin.crystal'},
    {match: '\\]', name: 'punctuation.section.array.end.crystal'},
    {match: '\\(|\\)', name: 'punctuation.section.function.crystal'}
  ],
  repository: {
    escaped_char: {
      match: '\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)',
      name: 'constant.character.escape.crystal'
    },
    heredoc: {begin: '^<<-?\\w+', end: '$', patterns: [{include: '$self'}]},
    interpolated_crystal: {
      patterns: [
        {
          begin: '(#\\{)',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.crystal'},
            1: {name: 'source.crystal'}
          },
          contentName: 'source.crystal',
          end: '(\\})',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.crystal'},
            1: {name: 'source.crystal'}
          },
          name: 'meta.embedded.line.crystal',
          patterns: [{include: '#nest_curly_and_self'}, {include: '$self'}]
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.crystal'}},
          match: '(#@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.instance.crystal'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.crystal'}},
          match: '(#@@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.class.crystal'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.crystal'}},
          match: '(#\\$)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.global.crystal'
        }
      ]
    },
    nest_brackets: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\]',
      patterns: [{include: '#nest_brackets'}]
    },
    nest_brackets_i: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\]',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_brackets_i'}
      ]
    },
    nest_brackets_r: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\]',
      patterns: [{include: '#regex_sub'}, {include: '#nest_brackets_r'}]
    },
    nest_curly: {
      begin: '\\{',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\}',
      patterns: [{include: '#nest_curly'}]
    },
    nest_curly_and_self: {
      patterns: [
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.section.scope.crystal'}},
          end: '\\}',
          patterns: [{include: '#nest_curly_and_self'}]
        },
        {include: '$self'}
      ]
    },
    nest_curly_i: {
      begin: '\\{',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\}',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_curly_i'}
      ]
    },
    nest_curly_r: {
      begin: '\\{',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\}',
      patterns: [{include: '#regex_sub'}, {include: '#nest_curly_r'}]
    },
    nest_ltgt: {
      begin: '\\<',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\>',
      patterns: [{include: '#nest_ltgt'}]
    },
    nest_ltgt_i: {
      begin: '\\<',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\>',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_ltgt_i'}
      ]
    },
    nest_ltgt_r: {
      begin: '\\<',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\>',
      patterns: [{include: '#regex_sub'}, {include: '#nest_ltgt_r'}]
    },
    nest_parens: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\)',
      patterns: [{include: '#nest_parens'}]
    },
    nest_parens_i: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\)',
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {include: '#nest_parens_i'}
      ]
    },
    nest_parens_r: {
      begin: '\\(',
      captures: {0: {name: 'punctuation.section.scope.crystal'}},
      end: '\\)',
      patterns: [{include: '#regex_sub'}, {include: '#nest_parens_r'}]
    },
    regex_sub: {
      patterns: [
        {include: '#interpolated_crystal'},
        {include: '#escaped_char'},
        {
          captures: {
            1: {name: 'punctuation.definition.arbitrary-repetition.crystal'},
            3: {name: 'punctuation.definition.arbitrary-repetition.crystal'}
          },
          match: '(\\{)\\d+(,\\d+)?(\\})',
          name: 'string.regexp.arbitrary-repetition.crystal'
        },
        {
          begin: '\\[(?:\\^?\\])?',
          captures: {
            0: {name: 'punctuation.definition.character-class.crystal'}
          },
          end: '\\]',
          name: 'string.regexp.character-class.crystal',
          patterns: [{include: '#escaped_char'}]
        },
        {
          begin: '\\(\\?#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.crystal'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.crystal'}
          },
          name: 'comment.line.number-sign.crystal',
          patterns: [{include: '#escaped_char'}]
        },
        {
          begin: '\\(',
          captures: {0: {name: 'punctuation.definition.group.crystal'}},
          end: '\\)',
          name: 'string.regexp.group.crystal',
          patterns: [{include: '#regex_sub'}]
        },
        {
          begin:
            '(?<=^|\\s)(#)\\s(?=[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$)',
          beginCaptures: {1: {name: 'punctuation.definition.comment.crystal'}},
          end: '$\\n?',
          endCaptures: {0: {name: 'punctuation.definition.comment.crystal'}},
          name: 'comment.line.number-sign.crystal'
        }
      ]
    }
  },
  scopeName: 'source.crystal'
}

export default grammar
