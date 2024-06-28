// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: ['.gitignore'],
  names: ['ignore-list', 'ignore', 'gitignore', 'git-ignore'],
  patterns: [{include: '#main'}],
  repository: {
    bazaarPrefixes: {
      patterns: [
        {
          match: '^RE(:)(?=\\S)',
          name: 'storage.modifier.bazaar.re-prefix.gitignore'
        },
        {
          match: '^!!(?=\\S)',
          name: 'keyword.operator.logical.not.negation.elevated.bazaar.gitignore'
        }
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.gitignore'}},
      end: '$',
      name: 'comment.line.number-sign.gitignore'
    },
    cvsSyntax: {
      captures: {
        1: {name: 'variable.parameter.assignment.glob-syntax.cvs.gitignore'},
        2: {
          name: 'keyword.operator.assignment.separator.key-value.cvs.gitignore'
        },
        3: {name: 'support.constant.language.syntax-type.cvs.gitignore'}
      },
      match: '\\A(syntax)(:)\\s+(glob)$'
    },
    escape: {
      captures: {
        1: {name: 'punctuation.definition.escape.backslash.gitignore'}
      },
      match: '(\\\\).',
      name: 'constant.character.escape.backslash.gitignore'
    },
    magic: {
      patterns: [
        {
          begin: '^(:)(\\()(?=.*?\\))',
          beginCaptures: {
            1: {name: 'keyword.operator.signature.begin.gitignore'},
            2: {name: 'punctuation.section.signature.begin.gitignore'}
          },
          end: '(?<!\\\\)\\)|(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.section.signature.end.gitignore'}
          },
          name: 'meta.magic-signature.long.gitignore',
          patterns: [{include: '#escape'}, {include: '#magicInnards'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.signature.begin.gitignore'},
            2: {name: 'keyword.operator.mnemonic.gitignore'}
          },
          match: '^(:)([!^]+)',
          name: 'meta.magic-signature.short.gitignore'
        }
      ]
    },
    magicInnards: {
      patterns: [
        {include: 'etc#comma'},
        {
          begin: '(?:\\G|(?<=,|\\())(attr)(:)',
          beginCaptures: {
            1: {name: 'keyword.control.magic-signature.$1.gitignore'},
            2: {patterns: [{include: 'etc#colon'}]}
          },
          end: '(?=,|\\)|$)',
          name: 'meta.attribute-list.gitignore',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#magicMnemonic'}]},
                2: {
                  name: 'variable.parameter.attribute.gitignore',
                  patterns: [{include: '#escape'}]
                },
                3: {
                  name: 'punctuation.definition.assignment.equals-sign.gitignore'
                },
                4: {
                  name: 'constant.language.other.gitignore',
                  patterns: [{include: '#escape'}]
                }
              },
              match:
                '(-|!)?((?:[^\\\\\\s=\\(\\),]|\\\\.)++)(?:(=)((?:[^\\\\\\s=\\(\\),]|\\\\.)*+))?',
              name: 'meta.attribute.gitignore'
            }
          ]
        },
        {
          captures: {
            1: {patterns: [{include: '#magicMnemonic'}]},
            2: {name: 'keyword.control.magic-signature.$2.gitignore'}
          },
          match:
            '(?:\\G|(?<=,|\\())(-|!)?(attr|exclude|glob|icase|literal|top)(?=,|\\))',
          name: 'meta.$1-attribute.gitignore'
        },
        {
          captures: {
            1: {patterns: [{include: '#magicMnemonic'}]},
            2: {name: 'keyword.control.magic-signature.unknown.gitignore'}
          },
          match:
            '(?:\\G|(?<=,|\\())(-|!)?((?:[^\\\\=\\s,:\\)]|\\\\.)++)(?=,|\\))',
          name: 'meta.unknown-attribute.gitignore'
        }
      ]
    },
    magicMnemonic: {
      patterns: [
        {match: '-', name: 'keyword.operator.logical.not.negation.gitignore'},
        {match: '!', name: 'keyword.operator.unset.delete.gitignore'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#cvsSyntax'},
        {include: '#magic'},
        {include: '#pattern'},
        {include: '#escape'}
      ]
    },
    pattern: {
      begin: '(?=[^#\\s])',
      end: '$|(?=#)',
      name: 'meta.pattern.gitignore',
      patterns: [{include: '#bazaarPrefixes'}, {include: '#patternInnards'}]
    },
    patternInnards: {
      patterns: [
        {include: '#escape'},
        {include: '#range'},
        {
          match: '\\G!',
          name: 'keyword.operator.logical.not.negation.gitignore'
        },
        {
          match: '\\*\\*',
          name: 'keyword.operator.glob.wildcard.globstar.gitignore'
        },
        {match: '[*?]', name: 'keyword.operator.glob.wildcard.gitignore'},
        {match: '/', name: 'punctuation.directory.separator.meta.gitignore'},
        {
          match: '[^\\[\\]\\\\*?#/\\s]+',
          name: 'entity.other.file.name.gitignore'
        }
      ]
    },
    range: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.square.bracket.begin.gitignore'}
      },
      contentName: 'constant.character.class.gitignore',
      end: '\\]|(?=$)',
      endCaptures: {
        0: {name: 'punctuation.definition.square.bracket.end.gitignore'}
      },
      name: 'meta.character-range.gitignore',
      patterns: [
        {include: '#escape'},
        {
          match: '-',
          name: 'punctuation.delimiter.range.character-set.gitignore'
        }
      ]
    }
  },
  scopeName: 'source.gitignore'
}

export default grammar
