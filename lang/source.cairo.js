// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/software-mansion-labs/cairo-tm-grammar>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cairo'],
  names: ['cairo'],
  patterns: [
    {
      begin: '(<)(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.brackets.angle.cairo'},
        2: {name: 'punctuation.brackets.square.cairo'}
      },
      end: '>',
      endCaptures: {0: {name: 'punctuation.brackets.angle.cairo'}},
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#gtypes'},
        {include: '#lvariables'},
        {include: '#punctuation'},
        {include: '#types'}
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.cairo'},
        2: {name: 'entity.name.module.cairo'}
      },
      match: '(mod)\\s+([a-z][A-Za-z0-9_]*)'
    },
    {
      begin: '\\b(use)\\s',
      beginCaptures: {1: {name: 'keyword.other.cairo'}},
      end: ';',
      endCaptures: {0: {name: 'punctuation.semi.cairo'}},
      name: 'meta.use.cairo',
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#namespaces'},
        {include: '#punctuation'},
        {include: '#types'},
        {include: '#lvariables'}
      ]
    },
    {include: '#block-comments'},
    {include: '#comments'},
    {include: '#attributes'},
    {include: '#lvariables'},
    {include: '#constants'},
    {include: '#gtypes'},
    {include: '#functions'},
    {include: '#types'},
    {include: '#keywords'},
    {include: '#macros'},
    {include: '#namespaces'},
    {include: '#punctuation'},
    {include: '#strings'},
    {include: '#variables'}
  ],
  repository: {
    attributes: {
      begin: '(#)(\\!?)(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.attribute.cairo'},
        3: {name: 'punctuation.brackets.attribute.cairo'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.brackets.attribute.cairo'}},
      name: 'meta.attribute.cairo',
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#punctuation'},
        {include: '#strings'},
        {include: '#gtypes'},
        {include: '#types'}
      ]
    },
    'block-comments': {
      patterns: [
        {match: '/\\*\\*/', name: 'comment.block.cairo'},
        {
          begin: '/\\*\\*',
          end: '\\*/',
          name: 'comment.block.documentation.cairo',
          patterns: [{include: '#block-comments'}]
        },
        {
          begin: '/\\*(?!\\*)',
          end: '\\*/',
          name: 'comment.block.cairo',
          patterns: [{include: '#block-comments'}]
        }
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.cairo'}},
          match: '(///).*$',
          name: 'comment.line.documentation.cairo'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.cairo'}},
          match: '(//).*$',
          name: 'comment.line.double-slash.cairo'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '\\b[A-Z]{2}[A-Z0-9_]*\\b', name: 'constant.other.caps.cairo'},
        {
          captures: {
            1: {name: 'storage.type.cairo'},
            2: {name: 'constant.other.caps.cairo'}
          },
          match: '\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.dot.decimal.cairo'},
            2: {name: 'keyword.operator.exponent.cairo'},
            3: {name: 'keyword.operator.exponent.sign.cairo'},
            4: {name: 'constant.numeric.decimal.exponent.mantissa.cairo'},
            5: {name: 'entity.name.type.numeric.cairo'}
          },
          match:
            '\\b\\d[\\d_]*(\\.?)[\\d_]*(?:(E|e)([+-]?)([\\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.decimal.cairo'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.cairo'}},
          match:
            '\\b0x[\\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.hex.cairo'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.cairo'}},
          match:
            '\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.oct.cairo'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.cairo'}},
          match:
            '\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.bin.cairo'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.bool.cairo'}
      ]
    },
    escapes: {
      captures: {
        1: {name: 'constant.character.escape.backslash.cairo'},
        2: {name: 'constant.character.escape.bit.cairo'},
        3: {name: 'constant.character.escape.unicode.cairo'},
        4: {name: 'constant.character.escape.unicode.punctuation.cairo'},
        5: {name: 'constant.character.escape.unicode.punctuation.cairo'}
      },
      match:
        '(\\\\)(?:(?:(x[0-7][\\da-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))',
      name: 'constant.character.escape.cairo'
    },
    functions: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.cairo'},
            2: {name: 'punctuation.brackets.round.cairo'}
          },
          match: '\\b(pub)(\\()'
        },
        {
          begin: '\\b(fn)\\s+([A-Za-z0-9_]+)((\\()|(<))',
          beginCaptures: {
            1: {name: 'keyword.other.fn.cairo'},
            2: {name: 'entity.name.function.cairo'},
            4: {name: 'punctuation.brackets.round.cairo'},
            5: {name: 'punctuation.brackets.angle.cairo'}
          },
          end: '\\{|;',
          endCaptures: {0: {name: 'punctuation.brackets.curly.cairo'}},
          name: 'meta.function.definition.cairo',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
            {include: '#keywords'},
            {include: '#lvariables'},
            {include: '#constants'},
            {include: '#gtypes'},
            {include: '#functions'},
            {include: '#macros'},
            {include: '#namespaces'},
            {include: '#punctuation'},
            {include: '#strings'},
            {include: '#types'},
            {include: '#variables'}
          ]
        },
        {
          begin: '([A-Za-z0-9_]+)(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.cairo'},
            2: {name: 'punctuation.brackets.round.cairo'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.cairo'}},
          name: 'meta.function.call.cairo',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
            {include: '#attributes'},
            {include: '#keywords'},
            {include: '#lvariables'},
            {include: '#constants'},
            {include: '#gtypes'},
            {include: '#functions'},
            {include: '#macros'},
            {include: '#namespaces'},
            {include: '#punctuation'},
            {include: '#strings'},
            {include: '#types'},
            {include: '#variables'}
          ]
        },
        {
          begin: '([A-Za-z0-9_]+)(?=::<.*>\\()',
          beginCaptures: {1: {name: 'entity.name.function.cairo'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.cairo'}},
          name: 'meta.function.call.cairo',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
            {include: '#attributes'},
            {include: '#keywords'},
            {include: '#lvariables'},
            {include: '#constants'},
            {include: '#gtypes'},
            {include: '#functions'},
            {include: '#lifetimes'},
            {include: '#macros'},
            {include: '#namespaces'},
            {include: '#punctuation'},
            {include: '#strings'},
            {include: '#types'},
            {include: '#variables'}
          ]
        }
      ]
    },
    gtypes: {
      patterns: [
        {match: '\\b(Some|None)\\b', name: 'entity.name.type.option.cairo'},
        {match: '\\b(Ok|Err)\\b', name: 'entity.name.type.result.cairo'}
      ]
    },
    interpolations: {
      captures: {
        1: {name: 'punctuation.definition.interpolation.cairo'},
        2: {name: 'punctuation.definition.interpolation.cairo'}
      },
      match: '({)[^"{}]*(})',
      name: 'meta.interpolation.cairo'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b',
          name: 'keyword.control.cairo'
        },
        {
          match: '\\b(extern|let|macro|mod)\\b',
          name: 'keyword.other.cairo storage.type.cairo'
        },
        {match: '\\b(const)\\b', name: 'storage.modifier.cairo'},
        {
          match: '\\b(type)\\b',
          name: 'keyword.declaration.type.cairo storage.type.cairo'
        },
        {
          match: '\\b(enum)\\b',
          name: 'keyword.declaration.enum.cairo storage.type.cairo'
        },
        {
          match: '\\b(trait)\\b',
          name: 'keyword.declaration.trait.cairo storage.type.cairo'
        },
        {
          match: '\\b(struct)\\b',
          name: 'keyword.declaration.struct.cairo storage.type.cairo'
        },
        {match: '\\b(ref|static)\\b', name: 'storage.modifier.cairo'},
        {
          match:
            '\\b(as|dyn|move|impl|implicits|in|nopanic|of|priv|pub|static_assert|typeof|unsafe|use|where|with)\\b',
          name: 'keyword.other.cairo'
        },
        {match: '\\bfn\\b', name: 'keyword.other.fn.cairo'},
        {match: '\\bcrate\\b', name: 'keyword.other.crate.cairo'},
        {match: '\\bmut\\b', name: 'storage.modifier.mut.cairo'},
        {
          match: '(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)',
          name: 'keyword.operator.logical.cairo'
        },
        {match: '&(?![&=])', name: 'keyword.operator.borrow.and.cairo'},
        {
          match: '(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)',
          name: 'keyword.operator.assignment.cairo'
        },
        {
          match: '(?<![<>])=(?!=|>)',
          name: 'keyword.operator.assignment.equal.cairo'
        },
        {
          match: '(=(=)?(?!>)|!=|<=|(?<!=)>=)',
          name: 'keyword.operator.comparison.cairo'
        },
        {
          match: '(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))',
          name: 'keyword.operator.math.cairo'
        },
        {
          captures: {
            1: {name: 'punctuation.brackets.round.cairo'},
            2: {name: 'punctuation.brackets.square.cairo'},
            3: {name: 'punctuation.brackets.curly.cairo'},
            4: {name: 'keyword.operator.comparison.cairo'},
            5: {name: 'punctuation.brackets.round.cairo'},
            6: {name: 'punctuation.brackets.square.cairo'},
            7: {name: 'punctuation.brackets.curly.cairo'}
          },
          match:
            '(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))'
        },
        {match: '::', name: 'keyword.operator.namespace.cairo'},
        {
          captures: {1: {name: 'keyword.operator.desnap.cairo'}},
          match: '(\\*)(?=\\w+)'
        },
        {match: '@', name: 'keyword.operator.snap.cairo'},
        {match: '\\.(?!\\.)', name: 'keyword.operator.access.dot.cairo'},
        {match: '\\.{2}(=|\\.)?', name: 'keyword.operator.range.cairo'},
        {match: ':(?!:)', name: 'keyword.operator.key-value.cairo'},
        {match: '->', name: 'keyword.operator.arrow.skinny.cairo'},
        {match: '=>', name: 'keyword.operator.arrow.fat.cairo'},
        {match: '\\$', name: 'keyword.operator.macro.dollar.cairo'},
        {match: '\\?', name: 'keyword.operator.question.cairo'}
      ]
    },
    lvariables: {
      patterns: [{match: '\\bsuper\\b', name: 'variable.language.super.cairo'}]
    },
    macros: {
      patterns: [
        {
          captures: {
            2: {name: 'entity.name.function.macro.cairo'},
            3: {name: 'entity.name.type.macro.cairo'}
          },
          match: '(([a-z_][A-Za-z0-9_]*!)|([A-Z_][A-Za-z0-9_]*!))',
          name: 'meta.macro.cairo'
        }
      ]
    },
    namespaces: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.namespace.cairo'},
            2: {name: 'keyword.operator.namespace.cairo'}
          },
          match: '(?<![A-Za-z0-9_])([A-Za-z0-9_]+)((?<!super)::)'
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.comma.cairo'},
        {match: '[{}]', name: 'punctuation.brackets.curly.cairo'},
        {match: '[()]', name: 'punctuation.brackets.round.cairo'},
        {match: ';', name: 'punctuation.semi.cairo'},
        {match: '[\\[\\]]', name: 'punctuation.brackets.square.cairo'},
        {match: '(?<!=)[<>]', name: 'punctuation.brackets.angle.cairo'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.bytearray.cairo'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.bytearray.cairo'}
          },
          name: 'string.quoted.double.cairo',
          patterns: [{include: '#escapes'}, {include: '#interpolations'}]
        },
        {
          begin: "(')",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.short.cairo'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.short.cairo'}},
          name: 'string.quoted.single.cairo',
          patterns: [{include: '#escapes'}, {include: '#interpolations'}]
        }
      ]
    },
    types: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.type.numeric.cairo'}},
          match:
            '(?<![A-Za-z])(felt252|i8|i16|i32|i64|i128|u8|u16|u32|u64|u128|u256|u512)\\b'
        },
        {
          begin: '\\b(_?[A-Z][A-Za-z0-9_]*)(<)',
          beginCaptures: {
            1: {name: 'entity.name.type.cairo'},
            2: {name: 'punctuation.brackets.angle.cairo'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.brackets.angle.cairo'}},
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
            {include: '#keywords'},
            {include: '#lvariables'},
            {include: '#punctuation'},
            {include: '#types'},
            {include: '#variables'}
          ]
        },
        {match: '\\b(bool|never)\\b', name: 'entity.name.type.primitive.cairo'},
        {
          captures: {
            1: {name: 'keyword.declaration.trait.cairo storage.type.cairo'},
            2: {name: 'entity.name.type.trait.cairo'}
          },
          match: '\\b(trait)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.struct.cairo storage.type.cairo'},
            2: {name: 'entity.name.type.struct.cairo'}
          },
          match: '\\b(struct)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.enum.cairo storage.type.cairo'},
            2: {name: 'entity.name.type.enum.cairo'}
          },
          match: '\\b(enum)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.type.cairo storage.type.cairo'},
            2: {name: 'entity.name.type.declaration.cairo'}
          },
          match: '\\b(type)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          match: '\\b_?[A-Z][A-Za-z0-9_]*\\b(?!!)',
          name: 'entity.name.type.cairo'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '\\b(?<!(?<!\\.)\\.)[a-z0-9_]+\\b',
          name: 'variable.other.cairo'
        }
      ]
    }
  },
  scopeName: 'source.cairo'
}

export default grammar
