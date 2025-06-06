// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mikomikotaishi/c.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c'],
  extensions: [
    '.asc',
    '.ash',
    '.asy',
    '.c++',
    '.cc',
    '.cp',
    '.cpp',
    '.cppm',
    '.cxx',
    '.edc',
    '.gml',
    '.h++',
    '.hh',
    '.hip',
    '.hpp',
    '.hxx',
    '.inl',
    '.ino',
    '.ipp',
    '.ixx',
    '.metal',
    '.re',
    '.tcc',
    '.tpp',
    '.txx'
  ],
  names: [
    'ags',
    'ags-script',
    'asymptote',
    'c++',
    'cpp',
    'edje-data-collection',
    'game-maker-language',
    'hip',
    'metal',
    'swig'
  ],
  patterns: [
    {include: '#special_block'},
    {include: '#strings'},
    {
      captures: {
        1: {name: 'keyword.control.c++'},
        2: {name: 'keyword.control.c++'}
      },
      match: '\\b(if)\\s+(constexpr)\\b'
    },
    {
      captures: {
        1: {name: 'punctuation.separator.scope.c++'},
        2: {name: 'storage.modifier.template.c++'}
      },
      match: '(::)\\s*(template)\\b'
    },
    {include: 'source.c'},
    {match: '\\b(friend|explicit|virtual)\\b', name: 'storage.modifier.$1.c++'},
    {match: '\\b(private|protected|public):', name: 'storage.modifier.$1.c++'},
    {
      match: '\\b(catch|operator|try|throw|using)\\b',
      name: 'keyword.control.c++'
    },
    {
      match: '\\bdelete\\b(\\s*\\[\\])?|\\bnew\\b(?!])',
      name: 'keyword.control.c++'
    },
    {
      match: '\\b(f|m)[A-Z]\\w*\\b',
      name: 'variable.other.readwrite.member.c++'
    },
    {match: '\\b(this)\\b', name: 'variable.language.c++'},
    {match: '\\b(template|concept)\\b\\s*', name: 'storage.type.template.c++'},
    {
      match:
        '\\b(const_cast|dynamic_cast|reinterpret_cast|static_assert|static_cast)\\b\\s*',
      name: 'keyword.operator.cast.c++'
    },
    {
      match:
        '\\b(and|and_eq|bitand|bitor|co_await|co_return|co_yield|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq)\\b',
      name: 'keyword.operator.c++'
    },
    {match: '\\b(class)\\b', name: 'storage.type.c++'},
    {
      match:
        '\\b(alignas|alignof|consteval|constinit|constexpr|decltype|final|mutable|noexcept|override|requires|thread_local|typename)\\b',
      name: 'storage.modifier.c++'
    },
    {match: '\\b(import|export|module)\\b', name: 'keyword.module.c++'},
    {
      begin:
        '(?x)\n    \t\t\t\t(?:  ^                                 # begin-of-line\n    \t\t\t\t  |  (?: (?<!else|new|=) )             #  or word + space before name\n    \t\t\t\t)\n    \t\t\t\t((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*) # actual name\n    \t\t\t\t \\s*(\\()                           # start bracket or end-of-line\n    \t\t\t',
      beginCaptures: {
        1: {name: 'entity.name.function.c++'},
        2: {name: 'punctuation.definition.parameters.begin.c'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.c'}},
      name: 'meta.function.destructor.c++',
      patterns: [{include: '$base'}]
    },
    {
      begin:
        '(?x)\n    \t\t\t\t(?:  ^                                 # begin-of-line\n    \t\t\t\t  |  (?: (?<!else|new|=) )             #  or word + space before name\n    \t\t\t\t)\n    \t\t\t\t((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*) # actual name\n    \t\t\t\t \\s*(\\()                           # terminating semi-colon\n    \t\t\t',
      beginCaptures: {
        1: {name: 'entity.name.function.c++'},
        2: {name: 'punctuation.definition.parameters.begin.c'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.c'}},
      name: 'meta.function.destructor.prototype.c++',
      patterns: [{include: '$base'}]
    }
  ],
  repository: {
    angle_brackets: {
      begin: '<',
      end: '>',
      name: 'meta.angle-brackets.c++',
      patterns: [{include: '#angle_brackets'}, {include: '$base'}]
    },
    block: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.c'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.block.end.c'}},
      name: 'meta.block.c++',
      patterns: [
        {
          captures: {
            1: {name: 'support.function.any-method.c'},
            2: {name: 'punctuation.definition.parameters.c'}
          },
          match:
            '(?x)\n    \t\t\t\t(\n    \t\t\t\t\t(?!while|for|do|if|else|switch|catch|return)(?: \\b[A-Za-z_][A-Za-z0-9_]*+\\b | :: )*+                  # actual name\n    \t\t\t\t)\n    \t\t\t\t \\s*(\\()',
          name: 'meta.function-call.c'
        },
        {include: '$base'}
      ]
    },
    constructor: {
      patterns: [
        {
          begin:
            '(?x)\n    \t\t\t\t(?:  ^\\s*)                             # begin-of-line\n    \t\t\t\t((?!while|for|do|if|else|switch|catch)[A-Za-z_][A-Za-z0-9_:]*) # actual name\n    \t\t\t\t \\s*(\\()                            # start bracket or end-of-line\n    \t\t\t',
          beginCaptures: {
            1: {name: 'entity.name.function.c++'},
            2: {name: 'punctuation.definition.parameters.begin.c'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.parameters.end.c'}},
          name: 'meta.function.constructor.c++',
          patterns: [{include: '$base'}]
        },
        {
          begin:
            '(?x)\n    \t\t\t\t(:)                            # begin-of-line\n    \t\t\t\t((?=\\s*[A-Za-z_][A-Za-z0-9_:]* # actual name\n    \t\t\t\t \\s*(\\()))                      # start bracket or end-of-line\n    \t\t\t',
          beginCaptures: {1: {name: 'punctuation.definition.parameters.c'}},
          end: '(?=\\{)',
          name: 'meta.function.constructor.initializer-list.c++',
          patterns: [{include: '$base'}]
        }
      ]
    },
    special_block: {
      patterns: [
        {
          begin: '\\b(namespace)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+',
          beginCaptures: {
            1: {name: 'storage.type.c++'},
            2: {name: 'entity.name.type.c++'}
          },
          captures: {1: {name: 'keyword.control.namespace.$2'}},
          end: '(?<=\\})|(?=(;|,|\\(|\\)|>|\\[|\\]|=))',
          name: 'meta.namespace-block${2:+.$2}.c++',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {0: {name: 'punctuation.definition.scope.c++'}},
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.definition.scope.c++'}},
              patterns: [
                {include: '#special_block'},
                {include: '#constructor'},
                {include: '$base'}
              ]
            },
            {include: '$base'}
          ]
        },
        {
          begin:
            '\\b(class|struct)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*:\\s*(public|protected|private)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)((\\s*,\\s*(public|protected|private)\\b\\s*[_A-Za-z][_A-Za-z0-9]*\\b)*))?',
          beginCaptures: {
            1: {name: 'storage.type.c++'},
            2: {name: 'entity.name.type.c++'},
            4: {name: 'storage.type.modifier.c++'},
            5: {name: 'entity.name.type.inherited.c++'},
            6: {
              patterns: [
                {
                  match: '\\b(public|protected|private)\\b',
                  name: 'storage.type.modifier.c++'
                },
                {
                  match: '[_A-Za-z][_A-Za-z0-9]*',
                  name: 'entity.name.type.inherited.c++'
                }
              ]
            }
          },
          end: '(?<=\\})|(?=(;|\\(|\\)|>|\\[|\\]|=))',
          name: 'meta.class-struct-block.c++',
          patterns: [
            {include: '#angle_brackets'},
            {
              begin: '\\{',
              beginCaptures: {0: {name: 'punctuation.section.block.begin.c++'}},
              end: '(\\})(\\s*\\n)?',
              endCaptures: {
                1: {name: 'punctuation.definition.invalid.c++'},
                2: {name: 'invalid.illegal.you-forgot-semicolon.c++'}
              },
              patterns: [
                {include: '#special_block'},
                {include: '#constructor'},
                {include: '$base'}
              ]
            },
            {include: '$base'}
          ]
        },
        {
          begin: '\\b(extern)(?=\\s*")',
          beginCaptures: {1: {name: 'storage.modifier.c++'}},
          end: '(?<=\\})|(?=\\w)',
          name: 'meta.extern-block.c++',
          patterns: [
            {
              begin: '\\{',
              beginCaptures: {0: {name: 'punctuation.section.block.begin.c'}},
              end: '\\}',
              endCaptures: {0: {name: 'punctuation.section.block.end.c'}},
              patterns: [{include: '#special_block'}, {include: '$base'}]
            },
            {include: '$base'}
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '(u|u8|U|L)?"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.c++'},
            1: {name: 'meta.encoding.c++'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.c++'}},
          name: 'string.quoted.double.c++',
          patterns: [
            {
              match: '\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8}',
              name: 'constant.character.escape.c++'
            },
            {
              match: '\\\\[\'"?\\\\abfnrtv]',
              name: 'constant.character.escape.c++'
            },
            {match: '\\\\[0-7]{1,3}', name: 'constant.character.escape.c++'},
            {match: '\\\\x[0-9A-Fa-f]+', name: 'constant.character.escape.c++'}
          ]
        },
        {
          begin: '(u|u8|U|L)?R"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.c++'},
            1: {name: 'meta.encoding.c++'},
            3: {name: 'invalid.illegal.delimiter-too-long.c++'}
          },
          end: '\\)\\2(\\3)"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.c++'},
            1: {name: 'invalid.illegal.delimiter-too-long.c++'}
          },
          name: 'string.quoted.double.raw.c++'
        }
      ]
    }
  },
  scopeName: 'source.c++'
}

export default grammar
