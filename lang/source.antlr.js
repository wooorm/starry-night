// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.g4'],
  names: ['antlr'],
  patterns: [
    {include: '#strings'},
    {include: '#comments'},
    {
      begin: '\\boptions\\b',
      beginCaptures: {0: {name: 'keyword.other.options.antlr'}},
      end: '(?<=\\})',
      name: 'meta.options.antlr',
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.options.begin.antlr'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.options.end.antlr'}},
          name: 'meta.options-block.antlr',
          patterns: [
            {include: '#strings'},
            {include: '#comments'},
            {match: '\\b\\d+\\b', name: 'constant.numeric.antlr'},
            {
              match:
                '\\b(k|charVocabulary|filter|greedy|paraphrase|exportVocab|buildAST|defaultErrorHandler|language|namespace|namespaceStd|namespaceAntlr|genHashLines)\\b',
              name: 'variable.other.option.antlr'
            },
            {
              match: '\\b(true|false)\\b',
              name: 'constant.language.boolean.antlr'
            }
          ]
        }
      ]
    },
    {
      begin: '^(class)\\b\\s+(\\w+)',
      captures: {
        1: {name: 'storage.type.antlr'},
        2: {name: 'entity.name.type.class.antlr'}
      },
      end: ';',
      name: 'meta.definition.class.antlr',
      patterns: [
        {
          begin: '\\b(extends)\\b\\s+',
          captures: {1: {name: 'storage.modifier.antlr'}},
          end: '(?=;)',
          name: 'meta.definition.class.extends.antlr',
          patterns: [
            {
              match: '\\b(Parser|Lexer|TreeWalker)\\b',
              name: 'support.class.antlr'
            }
          ]
        }
      ]
    },
    {match: '^protected\\b', name: 'storage.modifier.antlr'},
    {
      match: '^[[:upper:]_][[:upper:][:digit:]_]*\\b',
      name: 'entity.name.type.token.antlr'
    },
    {
      captures: {
        1: {name: 'entity.name.function.rule.antlr'},
        2: {name: 'keyword.control.antlr'}
      },
      match: '^(\\w+)(?:\\s+(returns\\b))?',
      name: 'meta.rule.antlr'
    },
    {
      match: '\\b[[:upper:]_][[:upper:][:digit:]_]*\\b',
      name: 'constant.other.token.antlr'
    },
    {include: '#nested-curly'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.antlr'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.antlr'}},
          name: 'comment.block.antlr'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.antlr'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.antlr'}
              },
              end: '\\n',
              name: 'comment.line.double-slash.antlr'
            }
          ]
        }
      ]
    },
    'nested-curly': {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.group.begin.antlr'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.group.end.antlr'}},
      name: 'source.embedded.java-or-c.antlr',
      patterns: [
        {
          match:
            '\\b(break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while)\\b',
          name: 'keyword.control.java-or-c'
        },
        {
          match:
            '\\b(asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\b',
          name: 'storage.type.java-or-c'
        },
        {
          match:
            '\\b(const|extern|register|restrict|static|volatile|inline)\\b',
          name: 'storage.modifier.java-or-c'
        },
        {
          match: '\\b(NULL|true|false|TRUE|FALSE)\\b',
          name: 'constant.language.java-or-c'
        },
        {match: '\\b(sizeof)\\b', name: 'keyword.operator.sizeof.java-or-c'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
          name: 'constant.numeric.java-or-c'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java-or-c'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.java-or-c'}
          },
          name: 'string.quoted.double.java-or-c',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.antlr'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.java-or-c'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.java-or-c'}
          },
          name: 'string.quoted.single.java-or-c',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.antlr'}]
        },
        {match: '\\bEOF_CHAR\\b', name: 'support.constant.eof-char.antlr'},
        {include: '#comments'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.antlr'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.antlr'}},
          name: 'string.quoted.double.antlr',
          patterns: [
            {
              match: '\\\\(u[0-9A-Fa-f]{4}|.)',
              name: 'constant.character.escape.antlr'
            }
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.antlr'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.antlr'}},
          name: 'string.quoted.single.antlr',
          patterns: [
            {
              match: '\\\\(u[0-9A-Fa-f]{4}|.)',
              name: 'constant.character.escape.antlr'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.antlr'
}

export default grammar
