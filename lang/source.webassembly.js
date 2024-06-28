// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-webassembly>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.wast', '.wat'],
  names: ['webassembly', 'wast', 'wasm'],
  patterns: [
    {
      begin: '\\A(#!)',
      beginCaptures: {
        1: {name: 'punctuation.definition.comment.hashbang.webassembly'}
      },
      end: '$',
      name: 'comment.line.hashbang.webassembly'
    },
    {include: '#main'}
  ],
  repository: {
    'comment-block': {
      begin: '\\(;',
      beginCaptures: {
        0: {name: 'punctuation.section.comment.begin.webassembly'}
      },
      end: ';\\)',
      endCaptures: {0: {name: 'punctuation.section.comment.end.webassembly'}},
      name: 'comment.block.semicolon.webassembly',
      patterns: [{include: '#comment-block'}]
    },
    'comment-line': {
      begin: ';;',
      beginCaptures: {0: {name: 'punctuation.definition.comment.webassembly'}},
      end: '$',
      name: 'comment.line.semicolon.webassembly'
    },
    expression: {
      patterns: [
        {
          begin: '(\\()(\\w+)(?=[\\s()]|$|;;)',
          beginCaptures: {
            1: {name: 'punctuation.section.expression.begin.webassembly'},
            2: {patterns: [{include: '#main'}]}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.expression.end.webassembly'}
          },
          name: 'meta.expression.$2.webassembly',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.expression.begin.webassembly'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.expression.end.webassembly'}
          },
          name: 'meta.expression.webassembly',
          patterns: [{include: '#main'}]
        }
      ]
    },
    instructions: {
      patterns: [
        {
          match:
            '(?x) \\b\n( block\n| br(?:_if|_table|_on_(?:cast|data|func|i31|null))?\n| call(?:_indirect|_ref)?\n| catch_all\n| catch\n| delegate\n| else\n| end\n| if\n| loop\n| nop\n| rethrow\n| return(?:_call(?:_indirect|_ref)?)?\n| then\n| throw\n| try\n| unreachable\n| unwind\n) (?=[\\s()]|$|;;)',
          name: 'keyword.control.instruction.$1.webassembly'
        },
        {
          captures: {
            1: {
              patterns: [
                {
                  match: '\\.',
                  name: 'punctuation.separator.method.period.webassembly'
                }
              ]
            }
          },
          match:
            '(?x) \\b\n(\n\t(f32|f64) \\.\n\t( (?<=f32.) (demote_f64|reinterpret_i32)\n\t| (?<=f64.) (promote_f32|reinterpret_i64)\n\t| abs\n\t| add\n\t| atomic (?:\\.\\w+)++\n\t| ceil\n\t| const\n\t| convert_i(32|64)_[su]\n\t| copysign\n\t| div\n\t| eq\n\t| floor\n\t| [gl][et]\n\t| load\n\t| max\n\t| min\n\t| mul\n\t| nearest\n\t| neg?\n\t| ne\n\t| sqrt\n\t| store\n\t| sub\n\t| trunc\n\t)\n\t|\n\t\n\t(i32|i64) \\.\n\t( (?<=i32.) (reinterpret_f32|wrap_i64)\n\t| (?<=i64.) (extend_i32_[su]|extend32_s|load32_[su]|reinterpret_f64|store32)\n\t| add\n\t| and\n\t| atomic (?:\\.\\w+)++\n\t| clz\n\t| const\n\t| ctz\n\t| div_[su]\n\t| eqz?\n\t| eq\n\t| extend(8|16)_s\n\t| [gl][et]_[su]\n\t| load(8|16)_[su]\n\t| load\n\t| mul\n\t| ne\n\t| x?or\n\t| popcnt\n\t| rem_[su]\n\t| rot[lr]\n\t| shl\n\t| shr_[su]\n\t| store(8|16)?\n\t| sub\n\t| trunc_(sat_)?f(32|64)_[su]\n\t)\n\t|\n\t\n\tv128 \\.\n\t( andnot\n\t| and\n\t| any_true\n\t| atomic (?:\\.\\w+)++\n\t| bitselect\n\t| const\n\t| load((8|16)_lane|(32|64)_(lane|zero)|(8|16|32|64)_splat|(8x8|16x4|32x2)_[su])?\n\t| not\n\t| x?or\n\t| store((8|16|32|64)_lane)?\n\t)\n\t|\n\n\t(f32x4|f64x2) \\.\n\t( (?<=f32x4.) (convert_i32x4_[su]|demote_f64x2_zero)\n\t| (?<=f64x2.) (convert_low_i32x4_[su]|promote_low_f32x4)\n\t| abs\n\t| add\n\t| ceil\n\t| div\n\t| eq\n\t| (extract|replace)_lane\n\t| floor\n\t| [gl][et]\n\t| p?max\n\t| p?min\n\t| mul\n\t| nearest\n\t| neg?\n\t| splat\n\t| sqrt\n\t| sub\n\t| trunc\n\t)\n\t|\n\t\n\ti8x16 \\.\n\t( abs\n\t| (?:add|sub)_sat_[su]\n\t| add\n\t| all_true\n\t| avgr_u\n\t| bitmask\n\t| eq\n\t| extract_lane_[su]\n\t| [gl][et]_[su]\n\t| load_splat\n\t| max_[su]\n\t| min_[su]\n\t| narrow_i16x8_[su]\n\t| neg?\n\t| ne\n\t| popcnt\n\t| replace_lane\n\t| shl\n\t| shr_[su]\n\t| shuffle\n\t| splat\n\t| sub\n\t| swizzle\n\t)\n\t|\n\t\n\ti16x8 \\.\n\t( abs\n\t| (?:add|sub)_sat_[su]\n\t| add\n\t| all_true\n\t| avgr_u\n\t| bitmask\n\t| eq\n\t| ext(add_pairwise|(end|mul)_(high|low))_i8x16_[su]\n\t| extract_lane_[su]\n\t| [gl][et]_[su]\n\t| load8x8_[su]\n\t| load_splat\n\t| max_[su]\n\t| min_[su]\n\t| mul\n\t| narrow_i32x4_[su]\n\t| neg?\n\t| ne\n\t| q15mulr_sat_s\n\t| replace_lane\n\t| shl\n\t| shr_[su]\n\t| splat\n\t| sub\n\t)\n\t|\n\n\ti32x4 \\.\n\t( abs\n\t| add\n\t| all_true\n\t| bitmask\n\t| dot_i16x8_s\n\t| eq\n\t| ext(add_pairwise|(end|mul)_(high|low))_i16x8_[su]\n\t| extract_lane\n\t| [gl][et]_[su]\n\t| load16x4_[su]\n\t| load_splat\n\t| max_[su]\n\t| min_[su]\n\t| mul\n\t| neg?\n\t| ne\n\t| replace_lane\n\t| shl\n\t| shr_[su]\n\t| splat\n\t| sub\n\t| trunc_sat_f32x4_[su]\n\t| trunc_sat_f64x2_[su]_zero\n\t)\n\t|\n\n\ti64x2 \\.\n\t( abs\n\t| add\n\t| all_true\n\t| bitmask\n\t| eq\n\t| ext(end|mul)_(high|low)_i32x4_[su]\n\t| extract_lane\n\t| [gl][et]_s\n\t| load32x2_[su]\n\t| load_splat\n\t| mul\n\t| neg?\n\t| ne\n\t| replace_lane\n\t| shl\n\t| shr_[su]\n\t| splat\n\t| sub\n\t)\n) (?=[\\s()]|$|;;)',
          name: 'entity.name.function.instruction.$1.webassembly'
        },
        {
          captures: {
            1: {name: 'entity.name.function.instruction.$1.webassembly'},
            2: {name: 'punctuation.separator.method.period.webassembly'},
            3: {name: 'punctuation.separator.method.slash.webassembly'},
            4: {patterns: [{include: '#type'}]}
          },
          match: '\\b([if](?:32|64)(\\.)\\w+)(/)([if](?:32|64))'
        },
        {
          captures: {
            1: {
              patterns: [
                {
                  match: '\\.',
                  name: 'punctuation.separator.method.period.webassembly'
                }
              ]
            }
          },
          match:
            '(?x) \\b\n( (array|struct) (\\. (len|new(_default)?_with_rtt|get_[su]|[gs]et))?\n| (current|grow)_memory\n| data\\.drop\n| drop\n| elem\\.drop\n| field\n| i31 \\. (new|get_[su])\n| ([gs]et|tee)_(local|global)\n| global\\.[gs]et\n| local\\.([gs]et|tee)\n| memory\\.(atomic\\.(notify|wait32|wait64)|copy|fill|grow|init|size)\n| ref(\\.([ai]s_(data|func|i31|non_null)|cast|eq|func|is_null|null|test))?\n| rtt(\\.(canon|sub))?\n| select\n| table\\.(copy|fill|get|grow|init|set|size)\n) (?=[\\s()]|$|;;)',
          name: 'entity.name.function.instruction.$1.webassembly'
        },
        {
          match:
            '(?x) \\b\n( anyfunc\n| data\n| declare\n| element\n| elem\n| export\n| extern\n| func\n| global\n| import\n| item\n| local\n| memory\n| module\n| mut\n| offset\n| param\n| result\n| start\n| table\n| type\n) (?=[\\s()]|$|;;)',
          name: 'storage.type.$1.webassembly'
        },
        {
          captures: {
            1: {
              patterns: [
                {
                  match: '\\.',
                  name: 'punctuation.separator.method.period.webassembly'
                }
              ]
            }
          },
          match:
            '(?x) \\b\n( assert_exhaustion\n| assert_invalid\n| assert_malformed\n| assert_return (?:_(?:arithmetic|canonical)_nan)?\n| assert_trap\n| assert_unlinkable\n| binary\n| input\n| invoke\n| get\n| output\n| quote\n| ref\\.extern\n| ref\\.host\n| register\n| script\n) (?=[\\s()]|$|;;)',
          name: 'support.function.scripting.webassembly'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment-line'},
        {include: '#comment-block'},
        {include: '#expression'},
        {include: '#instructions'},
        {include: '#type'},
        {include: '#number'},
        {include: '#name'},
        {include: '#string'},
        {include: '#optional-immediate'}
      ]
    },
    name: {
      captures: {1: {name: 'punctuation.definition.variable.webassembly'}},
      match: "(\\$)[-A-Za-z0-9_.+*/\\\\^~=<>!?@#$%&|:'`]+",
      name: 'variable.other.name.webassembly'
    },
    number: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.payload.colon.webassembly'},
            2: {name: 'constant.numeric.int.hex.payload.webassembly'}
          },
          match: '(?<!\\w)[-+]?nan(:)(0x(?!_)(?:_?[A-Fa-f0-9])+)',
          name: 'constant.language.nan.with-payload.webassembly'
        },
        {
          match:
            '(?<!\\w)[-+]?(inf|nan)(?:(?<=nan):(arithmetic|canonical))?(?!\\w)',
          name: 'constant.language.$1.$2.webassembly'
        },
        {
          match:
            '(?x) (?<!\\w)\n[-+]? 0x      (?!_)(?:_? [A-Fa-f0-9])++\n(?: \\.       (?!_)(?:_? [A-Fa-f0-9])*+ )?\n(?: [pP][-+]? (?!_)(?:_? [0-9])++ )?',
          name: 'constant.numeric.float.hex.webassembly'
        },
        {
          match:
            '(?x) (?<!\\w)\n[-+]?         (?!_)(?:_? \\d)++\n(?: \\.       (?!_)(?:_? \\d)*+ )?\n(?: [eE][-+]? (?!_)(?:_? \\d)++ )?',
          name: 'constant.numeric.float.decimal.webassembly'
        },
        {
          match: '(?<!\\w)[-+]?0x(?!_)(?:_?[A-Fa-f0-9])++',
          name: 'constant.numeric.int.hex.webassembly'
        },
        {
          match: '(?<!\\w)[-+]?(?!_)(?:_?\\d)++',
          name: 'constant.numeric.int.decimal.webassembly'
        }
      ]
    },
    'optional-immediate': {
      captures: {
        1: {name: 'variable.parameter.$1.webassembly'},
        2: {name: 'keyword.operator.assignment.webassembly'}
      },
      match: '(?<!\\w)(align|offset)(=)(?=[-+]?(?:\\d|0x[\\dA-Fa-f]))'
    },
    string: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.webassembly'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.webassembly'}},
      name: 'string.quoted.double.webassembly',
      patterns: [
        {match: '\\\\n', name: 'constant.character.escape.newline.webassembly'},
        {match: '\\\\t', name: 'constant.character.escape.tab.webassembly'},
        {
          match: '\\\\{2}',
          name: 'constant.character.escape.backslash.webassembly'
        },
        {
          match: "\\\\'",
          name: 'constant.character.escape.quote.single.webassembly'
        },
        {
          match: '\\\\"',
          name: 'constant.character.escape.quote.double.webassembly'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.unicode-escape.begin.bracket.curly.webassembly'
            },
            2: {
              name: 'punctuation.definition.unicode-escape.end.bracket.curly.webassembly'
            }
          },
          match: '\\\\[0-9A-Fa-f]{2}|\\\\u({)[A-Fa-f0-9]+(})',
          name: 'constant.character.escape.hex.unicode.webassembly'
        }
      ]
    },
    type: {
      patterns: [
        {
          match: '\\b([if](?:32|64)|v128|i8|i16)(?=[\\s()]|$|;;)',
          name: 'storage.type.number.$1.webassembly'
        },
        {
          match: '\\b(f32x4|f64x2|i8x16|i16x8|i32x4|i64x2)(?=[\\s()]|$|;;)',
          name: 'storage.type.simd.$1.webassembly'
        },
        {
          match: '\\b((?:any|data|eq|extern|func|i31)ref)(?=[\\s()]|$|;;)',
          name: 'storage.type.reference.$1.webassembly'
        }
      ]
    }
  },
  scopeName: 'source.webassembly'
}

export default grammar
