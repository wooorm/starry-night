// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bmx', '.decls'],
  names: [
    'b3d',
    'blitz3d',
    'blitzbasic',
    'blitzmax',
    'blitzplus',
    'bmax',
    'bplus'
  ],
  patterns: [
    {match: ';', name: 'punctuation.terminator.line.blitzmax'},
    {include: '#bmax_comment_quote'},
    {include: '#bmax_comment_block'},
    {include: '#bmax_global_variable'},
    {include: '#bmax_local_variable'},
    {include: '#bmax_constant'},
    {include: '#bmax_pointerops'},
    {include: '#bmax_preprocessor'},
    {include: '#bmax_attributes'},
    {
      begin: '(?i)(?:(?:^|;)\\s*)(try)\\b',
      beginCaptures: {1: {name: 'keyword.control.try.blitzmax'}},
      end: '(?i)\\b(end\\s?try)\\b',
      endCaptures: {1: {name: 'keyword.control.try.blitzmax'}},
      name: 'meta.try.blitzmax',
      patterns: [
        {match: '(?i)^\\s*(catch)', name: 'keyword.control.try.catch.blitzmax'},
        {include: '$self'}
      ]
    },
    {
      begin: '(?i)(?:(?:^|;)\\s*)(extern)(?:\\s+((")[^"]*("))|\\b)',
      beginCaptures: {
        1: {name: 'keyword.other.extern.blitzmax'},
        2: {name: 'string.quoted.double.blitzmax'},
        3: {name: 'punctuation.definition.string.begin.blitzmax'},
        4: {name: 'punctuation.definition.string.end.blitzmax'}
      },
      end: '(?i)(?:(?:^|;)\\s*)\\b(end\\s?extern)\\b',
      endCaptures: {1: {name: 'keyword.other.extern.blitzmax'}},
      name: 'meta.extern.blitzmax',
      patterns: [
        {include: '#bmax_comment_quote'},
        {include: '#bmax_comment_block'},
        {include: '#bmax_pointerops'},
        {include: '#bmax_constants'},
        {include: '#bmax_null'},
        {include: '#bmax_typename'},
        {include: '#bmax_types'},
        {include: '#bmax_array'},
        {include: '#bmax_string_quoted'},
        {include: '#bmax_global_variable'},
        {include: '#bmax_constant'},
        {include: '#bmax_preprocessor'},
        {
          captures: {
            1: {name: 'storage.type.function.extern.blitzmax'},
            2: {name: 'entity.name.function.extern.blitzmax'}
          },
          match: '(?i)(?:(?:^|;)\\s*)(function)\\s+([a-zA-Z_]\\w*)\\b',
          name: 'meta.function.extern.blitzmax'
        },
        {
          begin:
            '(?i)(?:(?:^|;)\\s*)(type)\\s+([a-zA-Z_]\\w*)(?:\\s+(extends)\\s+([a-zA-Z_]\\w*))?',
          beginCaptures: {
            1: {name: 'storage.type.class.extern.blitzmax'},
            2: {name: 'entity.name.type.extern.blitzmax'},
            3: {name: 'storage.modifier.extends.extern.blitzmax'},
            4: {name: 'entity.other.inherited-class.extern.blitzmax'}
          },
          end: '(?i)\\b(end\\s?type)\\b',
          endCaptures: {1: {name: 'storage.type.class.extern.blitzmax'}},
          name: 'meta.type.extern.blitzmax',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.method.method.extern.blitzmax'},
                2: {name: 'entity.name.function.method.extern.blitzmax'}
              },
              match: '(?i)(?:(?:^|;)\\s*)(method)\\s+([a-zA-Z_]\\w*)\\b',
              name: 'meta.method.blitzmax'
            },
            {include: '#bmax_comment_quote'},
            {include: '#bmax_comment_block'},
            {include: '#bmax_pointerops'},
            {include: '#bmax_string_quoted'},
            {include: '#bmax_constants'},
            {include: '#bmax_null'},
            {include: '#bmax_typename'},
            {include: '#bmax_types'},
            {include: '#bmax_array'},
            {include: '#bmax_type_field'},
            {include: '#bmax_preprocessor'}
          ]
        }
      ]
    },
    {include: '#bmax_function'},
    {
      captures: {
        1: {name: 'keyword.other.import.blitzmax'},
        2: {name: 'string.unquoted.module.blitzmax'}
      },
      match: '(?i)\\b(import)\\s+((?:[a-zA-Z_]\\w*\\.?)+)',
      name: 'meta.import.module.blitzmax'
    },
    {
      begin: '(?i)\\b(import)\\s+(("))',
      beginCaptures: {
        1: {name: 'keyword.other.import.blitzmax'},
        2: {name: 'punctuation.definition.string.begin.blitzmax'},
        3: {name: 'string.quoted.double.blitzmax'}
      },
      contentName: 'string.quoted.double.blitzmax',
      end: '(")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.blitzmax'},
        1: {name: 'string.quoted.double.blitzmax'}
      },
      name: 'meta.import.file.blitzmax',
      patterns: [{include: '#bmax_string_content'}]
    },
    {
      captures: {
        1: {name: 'keyword.other.framework.blitzmax'},
        2: {name: 'string.unquoted.module.blitzmax'}
      },
      match: '(?i)\\b(framework)\\s+((?:[a-zA-Z_]\\w*\\.?)+)',
      name: 'meta.framework.blitzmax'
    },
    {
      captures: {
        1: {name: 'keyword.other.module.blitzmax'},
        2: {name: 'string.unquoted.module.blitzmax'}
      },
      match: '(?i)\\b(module)\\s+(([a-zA-Z_]\\w*\\.?)+)',
      name: 'meta.module.blitzmax'
    },
    {
      begin: '(?i)\\b(include)\\s+(("))',
      beginCaptures: {
        1: {name: 'keyword.other.include.blitzmax'},
        2: {name: 'punctuation.definition.string.begin.blitzmax'},
        3: {name: 'string.quoted.double.blitzmax'}
      },
      contentName: 'string.quoted.double.blitzmax',
      end: '(")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.blitzmax'},
        1: {name: 'string.quoted.double.blitzmax'}
      },
      name: 'meta.include.blitzmax',
      patterns: [{include: '#bmax_string_content'}]
    },
    {
      begin: '(?i)\\b(incbin)\\s+(("))',
      beginCaptures: {
        1: {name: 'keyword.other.incbin.blitzmax'},
        2: {name: 'punctuation.definition.string.begin.blitzmax'},
        3: {name: 'string.quoted.double.blitzmax'}
      },
      contentName: 'string.quoted.double.blitzmax',
      end: '(")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.blitzmax'},
        1: {name: 'string.quoted.double.blitzmax'}
      },
      name: 'meta.incbin.blitzmax',
      patterns: [{include: '#bmax_string_content'}]
    },
    {
      begin: '(?i)\\b(moduleinfo)\\s+(("))',
      beginCaptures: {
        1: {name: 'keyword.other.moduleinfo.blitzmax'},
        2: {name: 'punctuation.definition.string.begin.blitzmax'},
        3: {name: 'string.quoted.double.blitzmax'}
      },
      contentName: 'string.quoted.double.blitzmax',
      end: '(")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.blitzmax'},
        1: {name: 'string.quoted.double.blitzmax'}
      },
      name: 'meta.moduleinfo.blitzmax',
      patterns: [{include: '#bmax_string_content'}]
    },
    {
      begin:
        '(?i)(?:(?:^|;)\\s*)(type)\\s+([a-zA-Z_]\\w*)(?:\\s+(extends)\\s+([a-zA-Z_]\\w*))?(?:\\s+(final|abstract))?',
      beginCaptures: {
        1: {name: 'storage.type.class.blitzmax'},
        2: {name: 'entity.name.type.blitzmax'},
        3: {name: 'storage.modifier.extends.blitzmax'},
        4: {name: 'entity.other.inherited-class.blitzmax'},
        5: {name: 'storage.modifier.class.blitzmax'}
      },
      end: '(?i)\\b(end\\s?type)\\b',
      endCaptures: {1: {name: 'storage.type.class.blitzmax'}},
      name: 'meta.type.blitzmax',
      patterns: [
        {
          begin: '(?i)(?:(?:^|;)\\s*)(method)\\s+([a-zA-Z_]\\w*)',
          beginCaptures: {
            1: {name: 'storage.type.method.blitzmax'},
            2: {name: 'entity.name.function.method.blitzmax'}
          },
          end: '(?i)(?:\\)\\s+(abstract)\\s*)$|\\b(end\\s?method)\\b',
          endCaptures: {
            1: {name: 'storage.modifier.abstract.blitzmax'},
            2: {name: 'storage.type.method.blitzmax'}
          },
          name: 'meta.method.blitzmax',
          patterns: [
            {include: '$self'},
            {
              match: '(?i)\\bfinal\\b',
              name: 'storage.modifier.method.final.blitzmax'
            }
          ]
        },
        {include: '#bmax_comment_quote'},
        {include: '#bmax_comment_block'},
        {include: '#bmax_constants'},
        {include: '#bmax_string_quoted'},
        {include: '#bmax_attributes'},
        {include: '#bmax_pointerops'},
        {include: '#bmax_null'},
        {include: '#bmax_types'},
        {include: '#bmax_typename'},
        {include: '#bmax_global_variable'},
        {include: '#bmax_constant'},
        {include: '#bmax_function'},
        {include: '#bmax_type_field'},
        {include: '#bmax_constructor'},
        {include: '#bmax_preprocessor'}
      ]
    },
    {
      match: '(?i)\\b((end\\s?|else\\s?)?(if)|else|then)\\b',
      name: 'keyword.control.if.blitzmax'
    },
    {include: '#bmax_control_keywords'},
    {
      begin: '(?i)(?:(?:^|;)\\s*)(while)\\b',
      beginCaptures: {1: {name: 'keyword.control.while.blitzmax'}},
      end: '(?i)(?:(?:^|;)\\s*)(end\\s?while|wend)\\b',
      endCaptures: {1: {name: 'keyword.control.while.end.blitzmax'}},
      name: 'meta.control.while.blitzmax',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)(?:(?:^|;)\\s*)(for)\\b',
      beginCaptures: {1: {name: 'keyword.control.for.blitzmax'}},
      end: '(?i)(?:(?:^|;)\\s*)(next)\\b',
      endCaptures: {1: {name: 'keyword.control.for.end.blitzmax'}},
      name: 'meta.control.for.blitzmax',
      patterns: [
        {
          match: '(?i)\\beachin\\b',
          name: 'keyword.control.for.eachin.blitzmax'
        },
        {match: '(?i)\\bto\\b', name: 'keyword.control.for.to.blitzmax'},
        {match: '(?i)\\buntil\\b', name: 'keyword.control.for.until.blitzmax'},
        {match: '(?i)\\bstep\\b', name: 'keyword.control.for.step.blitzmax'},
        {include: '$self'}
      ]
    },
    {
      begin: '(?i)(?:(?:^|;)\\s*)(repeat)\\b',
      beginCaptures: {1: {name: 'keyword.control.repeat.blitzmax'}},
      end: '(?i)(?:(?:^|;)\\s*)(until|forever)\\b',
      endCaptures: {1: {name: 'keyword.control.repeat.end.blitzmax'}},
      name: 'meta.control.repeat.blitzmax',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)(?:(?:^|;)\\s*)(select)\\b',
      beginCaptures: {1: {name: 'keyword.control.select.blitzmax'}},
      end: '(?i)(?:(?:^|;)\\s*)(end\\s?select)\\b',
      endCaptures: {1: {name: 'keyword.control.select.end.blitzmax'}},
      name: 'meta.control.select.blitzmax',
      patterns: [
        {
          captures: {1: {name: 'keyword.control.select.case.blitzmax'}},
          match: '(?i)(?:(?:^|;)\\s*)(case)\\b',
          name: 'meta.control.select.case.blitzmax'
        },
        {
          captures: {1: {name: 'keyword.control.select.default.blitzmax'}},
          match: '(?i)(?:(?:^|;)\\s*)(default)\\b',
          name: 'meta.control.select.default.blitzmax'
        },
        {include: '$self'}
      ]
    },
    {
      match: '(?i)\\b(mod|shr|shl|sar|and|or|not)\\b',
      name: 'keyword.operator.blitzmax'
    },
    {match: ':?[\\^+\\-=&|><]', name: 'keyword.operator.blitzmax'},
    {match: '(?i)\\b(private|public)\\b', name: 'keyword.other.scope.blitzmax'},
    {
      match: '(?i)\\b(strict|superstrict)\\b',
      name: 'keyword.other.strictness.blitzmax'
    },
    {include: '#bmax_null'},
    {include: '#bmax_types'},
    {include: '#bmax_constants'},
    {include: '#bmax_string_quoted'},
    {match: '(?i)\\b(self)\\b', name: 'variable.language.self.blitzmax'},
    {match: '(?i)\\b(super)\\b', name: 'variable.language.super.blitzmax'},
    {include: '#bmax_constructor'},
    {include: '#bmax_array'},
    {include: '#bmax_typename'}
  ],
  repository: {
    bmax_array: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'keyword.operator.array.blitzmax'}},
      end: '(\\])',
      endCaptures: {1: {name: 'keyword.operator.array.blitzmax'}},
      name: 'meta.array.blitzmax',
      patterns: [{include: '$self'}]
    },
    bmax_attributes: {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'storage.modifier.attributes.braces.blitzmax'}},
      end: '(\\})',
      endCaptures: {1: {name: 'storage.modifier.attributes.braces.blitzmax'}},
      name: 'meta.attributes.blitzmax',
      patterns: [
        {
          begin: '\\b([a-zA-Z_]\\w*)\\s*(=)\\s*',
          beginCaptures: {1: {name: 'entity.other.attribute-name.blitzmax'}},
          end: '(?=\\s|\\}|[a-zA-Z_])',
          name: 'meta.attribute.blitzmax',
          patterns: [
            {include: '#bmax_string_quoted'},
            {include: '#bmax_numbers'}
          ]
        },
        {
          captures: {1: {name: 'entity.other.attribute-name.blitzmax'}},
          match: '\\b([a-zA-Z_]\\w*)(?:\\s*((?!=)|(?=\\})))',
          name: 'meta.attribute.blitzmax'
        }
      ]
    },
    bmax_boolean: {
      match: '(?i)\\b(true|false)\\b',
      name: 'constant.language.boolean.blitzmax'
    },
    bmax_comment_block: {
      begin: '(?i)(?<=\\s|^|;)(?<!end|end\\s)rem\\b',
      end: '(?i)(?<=\\s|^|;)end\\s?rem\\b',
      name: 'comment.block.rem.blitzmax',
      patterns: [{include: '#bmax_url_content'}]
    },
    bmax_comment_quote: {
      begin: "'",
      end: '$',
      name: 'comment.line.apostrophe.blitzmax',
      patterns: [{include: '#bmax_url_content'}]
    },
    bmax_constant: {
      captures: {1: {name: 'keyword.other.constant.blitzmax'}},
      match: '(?i)\\b(const)\\b',
      name: 'meta.constant.blitzmax'
    },
    bmax_constants: {
      patterns: [
        {include: '#bmax_pi'},
        {include: '#bmax_boolean'},
        {include: '#bmax_numbers'}
      ]
    },
    bmax_constructor: {
      captures: {
        1: {name: 'keyword.other.new.blitzmax'},
        2: {name: 'storage.type.class.blitzmax'}
      },
      match: '(?i)\\b(new)\\s+([a-zA-Z_]\\w*)\\b',
      name: 'meta.call.constructor.blitzmax'
    },
    bmax_control_keywords: {
      match: '(?i)\\b(throw|return|exit|continue)\\b',
      name: 'keyword.control.blitzmax'
    },
    bmax_function: {
      begin: '(?i)(?:(?:^|;)\\s*)(function)\\s+([a-zA-Z_]\\w*)\\b',
      beginCaptures: {
        1: {name: 'storage.type.function.blitzmax'},
        2: {name: 'entity.name.function.blitzmax'}
      },
      end: '(?i)\\b(end\\s?function)\\b',
      endCaptures: {1: {name: 'storage.type.function.blitzmax'}},
      name: 'meta.function.blitzmax',
      patterns: [{include: '$self'}]
    },
    bmax_global_variable: {
      captures: {1: {name: 'storage.modifier.global.blitzmax'}},
      match: '(?i)\\b(global)\\b',
      name: 'meta.variable.blitzmax'
    },
    bmax_local_variable: {
      captures: {1: {name: 'keyword.other.variable.local.blitzmax'}},
      match: '(?i)\\b(local)\\b',
      name: 'meta.variable.blitzmax'
    },
    bmax_null: {
      match: '(?i)\\bnull\\b',
      name: 'constant.language.null.blitzmax'
    },
    bmax_numbers: {
      patterns: [
        {
          match: '(\\$[0-9a-fA-F]{1,16})',
          name: 'constant.numeric.integer.hexadecimal.blitzmax'
        },
        {
          match: '(\\%[01]{1,128})',
          name: 'constant.numeric.integer.binary.blitzmax'
        },
        {
          match:
            '(?x) (?<! % | \\$ ) (\n\t\t\t\t\t\t\t\\b ([0-9]+ \\. [0-9]+) |\n\t\t\t\t\t\t\t(\\. [0-9]+)\n\t\t\t\t\t\t)',
          name: 'constant.numeric.float.blitzmax'
        },
        {match: '(?x)\\b(([0-9]+))', name: 'constant.numeric.integer.blitzmax'}
      ]
    },
    bmax_pi: {match: '(?i)\\bpi\\b', name: 'constant.language.blitzmax'},
    bmax_pointerops: {
      captures: {
        1: {name: 'storage.modifier.blitzmax'},
        2: {name: 'keyword.operator.blitzmax'}
      },
      match: '(?i)\\b(?:(ptr|var)|(varptr))\\b',
      name: 'meta.pointerops.blitzmax'
    },
    bmax_preprocessor: {
      match: '(?i)^\\s*\\?(not\\s+)?\\w*',
      name: 'keyword.control.preprocessor.blitzmax'
    },
    bmax_string_content: {
      patterns: [
        {match: '\\~[^"]', name: 'constant.character.escape.blitzmax'},
        {include: '#bmax_url_content'}
      ]
    },
    bmax_string_quoted: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.blitzmax'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.blitzmax'}},
      name: 'string.quoted.double.blitzmax',
      patterns: [{include: '#bmax_string_content'}]
    },
    bmax_type_field: {
      captures: {1: {name: 'keyword.other.variable.field.blitzmax'}},
      match: '(?i)\\b(field)\\b',
      name: 'meta.variable.field.blitzmax'
    },
    bmax_typename: {
      captures: {
        1: {name: 'storage.type.blitzmax'},
        2: {name: 'storage.type.blitzmax'}
      },
      match: '(?xi)(?: \\: \\s* ([a-zA-Z_]\\w*) | ([!#%]|@{1,2}|\\$[zw]?) )',
      name: 'meta.typename.blitzmax'
    },
    bmax_types: {
      match: '(?i)\\b(object|string|byte|short|int|long|float|double)\\b',
      name: 'storage.type.blitzmax'
    },
    bmax_url_content: {
      match: '[a-zA-Z_]\\w*://[^ "\'()\\[\\]]*(?=$|\\b)',
      name: 'meta.url.blitzmax'
    }
  },
  scopeName: 'source.blitzmax'
}

export default grammar
