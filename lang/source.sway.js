// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/FuelLabs/sway-vscode-plugin>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sw'],
  names: ['sway'],
  patterns: [
    {
      begin: '(<)(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.brackets.angle.sway'},
        2: {name: 'punctuation.brackets.square.sway'}
      },
      end: '>',
      endCaptures: {0: {name: 'punctuation.brackets.angle.sway'}},
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#gtypes'},
        {include: '#lvariables'},
        {include: '#lifetimes'},
        {include: '#punctuation'},
        {include: '#types'}
      ]
    },
    {
      begin: '(#)(\\!?)(\\[)',
      beginCaptures: {
        1: {name: 'punctuation.definition.attribute.sway'},
        2: {name: 'keyword.operator.attribute.inner.sway'},
        3: {name: 'punctuation.brackets.attribute.sway'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.brackets.attribute.sway'}},
      name: 'meta.attribute.sway',
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#lifetimes'},
        {include: '#punctuation'},
        {include: '#strings'},
        {include: '#gtypes'},
        {include: '#types'}
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.sway'},
        2: {name: 'entity.name.dependency.sway'}
      },
      match: '(dep)\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][A-Za-z0-9_]*)'
    },
    {
      begin: '\\b(extern)\\s+(crate)',
      beginCaptures: {
        1: {name: 'storage.type.sway'},
        2: {name: 'keyword.other.crate.sway'}
      },
      end: ';',
      endCaptures: {0: {name: 'punctuation.semi.sway'}},
      name: 'meta.import.sway',
      patterns: [
        {include: '#block-comments'},
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#punctuation'}
      ]
    },
    {
      begin: '\\b(use)\\s',
      beginCaptures: {1: {name: 'keyword.other.sway'}},
      end: ';',
      endCaptures: {0: {name: 'punctuation.semi.sway'}},
      name: 'meta.use.sway',
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
    {include: '#lvariables'},
    {include: '#constants'},
    {include: '#gtypes'},
    {include: '#functions'},
    {include: '#types'},
    {include: '#keywords'},
    {include: '#lifetimes'},
    {include: '#macros'},
    {include: '#namespaces'},
    {include: '#punctuation'},
    {include: '#strings'},
    {include: '#variables'}
  ],
  repository: {
    'block-comments': {
      patterns: [
        {match: '/\\*\\*/', name: 'comment.block.sway'},
        {
          begin: '/\\*\\*',
          end: '\\*/',
          name: 'comment.block.documentation.sway',
          patterns: [{include: '#block-comments'}]
        },
        {
          begin: '/\\*(?!\\*)',
          end: '\\*/',
          name: 'comment.block.sway',
          patterns: [{include: '#block-comments'}]
        }
      ]
    },
    comments: {
      patterns: [
        {match: '^\\s*///.*', name: 'comment.line.documentation.sway'},
        {match: '\\s*//.*', name: 'comment.line.double-slash.sway'}
      ]
    },
    constants: {
      patterns: [
        {match: '\\b[A-Z]{2}[A-Z0-9_]*\\b', name: 'constant.other.caps.sway'},
        {
          captures: {
            1: {name: 'storage.type.sway'},
            2: {name: 'constant.other.caps.sway'}
          },
          match: '\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.dot.decimal.sway'},
            2: {name: 'keyword.operator.exponent.sway'},
            3: {name: 'keyword.operator.exponent.sign.sway'},
            4: {name: 'constant.numeric.decimal.exponent.mantissa.sway'},
            5: {name: 'entity.name.type.numeric.sway'}
          },
          match:
            '\\b\\d[\\d_]*(\\.?)[\\d_]*(?:(E)([+-])([\\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.decimal.sway'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.sway'}},
          match:
            '\\b0x[\\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.hex.sway'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.sway'}},
          match:
            '\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.oct.sway'
        },
        {
          captures: {1: {name: 'entity.name.type.numeric.sway'}},
          match:
            '\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b',
          name: 'constant.numeric.bin.sway'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.bool.sway'}
      ]
    },
    escapes: {
      captures: {
        1: {name: 'constant.character.escape.backslash.sway'},
        2: {name: 'constant.character.escape.bit.sway'},
        3: {name: 'constant.character.escape.unicode.sway'},
        4: {name: 'constant.character.escape.unicode.punctuation.sway'},
        5: {name: 'constant.character.escape.unicode.punctuation.sway'}
      },
      match:
        '(\\\\)(?:(?:(x[0-7][0-7a-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))',
      name: 'constant.character.escape.sway'
    },
    functions: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.sway'},
            2: {name: 'punctuation.brackets.round.sway'}
          },
          match: '\\b(pub)(\\()'
        },
        {
          begin: '\\b(asm)((\\())',
          beginCaptures: {
            1: {name: 'meta.attribute.asm.sway'},
            2: {name: 'punctuation.brackets.round.sway'}
          },
          end: '\\{|;',
          endCaptures: {0: {name: 'punctuation.brackets.curly.sway'}},
          name: 'meta.asm.definition.sway',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
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
        },
        {
          begin:
            '\\b(fn)\\s+((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)((\\()|(<))',
          beginCaptures: {
            1: {name: 'keyword.other.fn.sway'},
            2: {name: 'entity.name.function.sway'},
            4: {name: 'punctuation.brackets.round.sway'},
            5: {name: 'punctuation.brackets.angle.sway'}
          },
          end: '\\{|;',
          endCaptures: {0: {name: 'punctuation.brackets.curly.sway'}},
          name: 'meta.function.definition.sway',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
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
        },
        {
          begin: '((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.sway'},
            2: {name: 'punctuation.brackets.round.sway'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.sway'}},
          name: 'meta.function.call.sway',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
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
        },
        {
          begin: '((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(?=::<.*>\\()',
          beginCaptures: {1: {name: 'entity.name.function.sway'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.sway'}},
          name: 'meta.function.call.sway',
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
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
        {match: '\\b(Some|None)\\b', name: 'entity.name.type.option.sway'},
        {match: '\\b(Ok|Err)\\b', name: 'entity.name.type.result.sway'}
      ]
    },
    interpolations: {
      captures: {
        1: {name: 'punctuation.definition.interpolation.sway'},
        2: {name: 'punctuation.definition.interpolation.sway'}
      },
      match: '({)[^"{}]*(})',
      name: 'meta.interpolation.sway'
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b',
          name: 'keyword.control.sway'
        },
        {
          match: '\\b(extern|macro|dep)\\b',
          name: 'keyword.other.sway storage.type.sway'
        },
        {match: '\\b(const)\\b', name: 'storage.modifier.sway'},
        {match: '\\b(let)\\b', name: 'storage.modifier.sway'},
        {
          match: '\\b(type)\\b',
          name: 'keyword.declaration.type.sway storage.type.sway'
        },
        {
          match: '\\b(enum)\\b',
          name: 'keyword.declaration.enum.sway storage.type.sway'
        },
        {
          match: '\\b(trait)\\b',
          name: 'keyword.declaration.trait.sway storage.type.sway'
        },
        {
          match: '\\b(abi)\\b',
          name: 'keyword.declaration.abi.sway storage.type.sway'
        },
        {match: '\\b(struct)\\b', name: 'keyword.declaration.struct.sway'},
        {match: '\\b(abstract|static)\\b', name: 'storage.modifier.sway'},
        {
          match:
            '\\b(as|async|become|box|dyn|move|final|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\b',
          name: 'keyword.other.sway'
        },
        {match: '\\bfn\\b', name: 'keyword.other.fn.sway'},
        {match: '\\basm\\b', name: 'meta.attribute.asm.sway'},
        {match: '\\bcrate\\b', name: 'keyword.other.crate.sway'},
        {match: '\\bmut\\b', name: 'storage.modifier.mut.sway'},
        {
          match: '(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)',
          name: 'keyword.operator.logical.sway'
        },
        {match: '&(?![&=])', name: 'keyword.operator.borrow.and.sway'},
        {
          match: '(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)',
          name: 'keyword.operator.assignment.sway'
        },
        {
          match: '(?<![<>])=(?!=|>)',
          name: 'keyword.operator.assignment.equal.sway'
        },
        {
          match: '(=(=)?(?!>)|!=|<=|(?<!=)>=)',
          name: 'keyword.operator.comparison.sway'
        },
        {
          match: '(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))',
          name: 'keyword.operator.math.sway'
        },
        {
          captures: {
            1: {name: 'punctuation.brackets.round.sway'},
            2: {name: 'punctuation.brackets.square.sway'},
            3: {name: 'punctuation.brackets.curly.sway'},
            4: {name: 'keyword.operator.comparison.sway'},
            5: {name: 'punctuation.brackets.round.sway'},
            6: {name: 'punctuation.brackets.square.sway'},
            7: {name: 'punctuation.brackets.curly.sway'}
          },
          match:
            '(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))'
        },
        {match: '::', name: 'keyword.operator.namespace.sway'},
        {
          captures: {1: {name: 'keyword.operator.dereference.sway'}},
          match: '(\\*)(?=\\w+)'
        },
        {match: '@', name: 'keyword.operator.subpattern.sway'},
        {match: '\\.(?!\\.)', name: 'keyword.operator.access.dot.sway'},
        {match: '\\.{2}(=|\\.)?', name: 'keyword.operator.range.sway'},
        {match: ':(?!:)', name: 'keyword.operator.key-value.sway'},
        {match: '->', name: 'keyword.operator.arrow.skinny.sway'},
        {match: '=>', name: 'keyword.operator.arrow.fat.sway'},
        {match: '\\$', name: 'keyword.operator.macro.dollar.sway'},
        {match: '\\?', name: 'keyword.operator.question.sway'}
      ]
    },
    lifetimes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.lifetime.sway'},
            2: {name: 'entity.name.type.lifetime.sway'}
          },
          match: "(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
        },
        {
          captures: {
            1: {name: 'keyword.operator.borrow.sway'},
            2: {name: 'punctuation.definition.lifetime.sway'},
            3: {name: 'entity.name.type.lifetime.sway'}
          },
          match: "(\\&)(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
        }
      ]
    },
    lvariables: {
      patterns: [
        {match: '\\b[Ss]elf\\b', name: 'variable.language.self.sway'},
        {match: '\\bsuper\\b', name: 'variable.language.super.sway'}
      ]
    },
    macros: {
      patterns: [
        {
          captures: {
            2: {name: 'entity.name.function.macro.sway'},
            3: {name: 'entity.name.type.macro.sway'}
          },
          match: '(([a-z_][A-Za-z0-9_]*!)|([A-Z_][A-Za-z0-9_]*!))',
          name: 'meta.macro.sway'
        }
      ]
    },
    namespaces: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.namespace.sway'},
            2: {name: 'keyword.operator.namespace.sway'}
          },
          match: '(?<![A-Za-z0-9_])([a-z0-9_]+)((?<!super|self)::)'
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.comma.sway'},
        {match: '[{}]', name: 'punctuation.brackets.curly.sway'},
        {match: '[()]', name: 'punctuation.brackets.round.sway'},
        {match: ';', name: 'punctuation.semi.sway'},
        {match: '[\\[\\]]', name: 'punctuation.brackets.square.sway'},
        {match: '(?<!=)[<>]', name: 'punctuation.brackets.angle.sway'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '(b?)(")',
          beginCaptures: {
            1: {name: 'string.quoted.byte.raw.sway'},
            2: {name: 'punctuation.definition.string.sway'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.sway'}},
          name: 'string.quoted.double.sway',
          patterns: [{include: '#escapes'}, {include: '#interpolations'}]
        },
        {
          begin: '(b?r)(#*)(")',
          beginCaptures: {
            1: {name: 'string.quoted.byte.raw.sway'},
            2: {name: 'punctuation.definition.string.raw.sway'},
            3: {name: 'punctuation.definition.string.sway'}
          },
          end: '(")(\\2)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.sway'},
            2: {name: 'punctuation.definition.string.raw.sway'}
          },
          name: 'string.quoted.double.sway'
        },
        {
          begin: "(b)?(')",
          beginCaptures: {
            1: {name: 'string.quoted.byte.raw.sway'},
            2: {name: 'punctuation.definition.char.sway'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.char.sway'}},
          name: 'string.quoted.single.char.sway',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    types: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.type.numeric.sway'}},
          match:
            '(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b'
        },
        {
          begin: '\\b([A-Z][A-Za-z0-9]*)(<)',
          beginCaptures: {
            1: {name: 'entity.name.type.sway'},
            2: {name: 'punctuation.brackets.angle.sway'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.brackets.angle.sway'}},
          patterns: [
            {include: '#block-comments'},
            {include: '#comments'},
            {include: '#keywords'},
            {include: '#lvariables'},
            {include: '#lifetimes'},
            {include: '#punctuation'},
            {include: '#types'},
            {include: '#variables'}
          ]
        },
        {
          match: '\\b(bool|char|str)\\b',
          name: 'entity.name.type.primitive.sway'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.trait.sway storage.type.sway'},
            2: {name: 'entity.name.type.trait.sway'}
          },
          match: '\\b(trait)\\s+([A-Z][A-Za-z0-9]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.abi.sway storage.type.sway'},
            2: {name: 'entity.name.type.abi.sway'}
          },
          match: '\\b(abi)\\s+([A-Z][A-Za-z0-9]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.struct.sway'},
            2: {name: 'entity.name.type.struct.sway'}
          },
          match: '\\b(struct)\\s+([A-Z][A-Za-z0-9]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.enum.sway'},
            2: {name: 'entity.name.type.enum.sway'}
          },
          match: '\\b(enum)\\s+([A-Z][A-Za-z0-9_]*)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.declaration.type.sway storage.type.sway'},
            2: {name: 'entity.name.type.declaration.sway'}
          },
          match: '\\b(type)\\s+([A-Z][A-Za-z0-9_]*)\\b'
        },
        {match: '\\b[A-Z][A-Za-z0-9]*\\b(?!!)', name: 'entity.name.type.sway'},
        {
          begin: '\\b(library)\\s+([a-zA-Z_][a-zA-Z0-9_]*)',
          beginCaptures: {
            1: {name: 'source.sway meta.attribute.sway'},
            2: {name: 'entity.name.type.sway'}
          },
          end: '[\\{\\(;]',
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
        {
          captures: {1: {name: 'source.sway meta.attribute.sway'}},
          match: '(contract|script|predicate);'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match:
            '\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b',
          name: 'variable.other.sway'
        }
      ]
    }
  },
  scopeName: 'source.sway'
}

export default grammar
