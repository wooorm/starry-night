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
  extensions: ['.sieve'],
  names: ['sieve'],
  patterns: [{include: '#main'}],
  repository: {
    action: {
      begin: '\\b(?!\\d)\\w+',
      beginCaptures: {0: {name: 'keyword.operator.action.sieve'}},
      end: '(?=\\s*(?:$|\\]|\\)|[};,]))',
      name: 'meta.action.sieve',
      patterns: [{include: '#arguments'}]
    },
    arguments: {
      patterns: [
        {include: '#taggedArgument'},
        {include: '#comparator'},
        {include: '#stringBlock'},
        {include: '#testList'},
        {include: '#stringList'},
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#comments'},
        {include: '#punctuation'}
      ]
    },
    block: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.brace.bracket.curly.begin.sieve'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.brace.bracket.curly.end.sieve'}
      },
      name: 'meta.block.sieve',
      patterns: [{include: '#main'}]
    },
    comments: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.sieve'}},
          end: '$',
          name: 'comment.line.number-sign.sieve'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.sieve'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.sieve'}},
          name: 'comment.block.bracketed.sieve'
        }
      ]
    },
    comparator: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.comparator.begin.sieve'},
            2: {name: 'punctuation.separator.delimiter.semicolon.sieve'},
            4: {name: 'punctuation.definition.comparator.end.sieve'}
          },
          match: '(?i)(")i(;)(octet|ascii-casemap)(")',
          name: 'storage.modifier.comparator.${3:/downcase}.sieve'
        },
        {
          captures: {
            1: {name: 'storage.modifier.comparator.non-standard.sieve'},
            2: {name: 'punctuation.definition.comparator.begin.sieve'},
            3: {name: 'punctuation.definition.comparator.end.sieve'}
          },
          match:
            '(?i)(?<=:comparator)\\s*((")(?!i;(?:octet|ascii-casemap)")[^"]+("))'
        }
      ]
    },
    conditional: {
      begin: '(?i)\\b(if|elsif|else)(?=[\\s{]|$)',
      beginCaptures: {1: {name: 'keyword.control.flow.${1:/downcase}.sieve'}},
      end: '(?<=\\})',
      name: 'meta.conditional.${1:/downcase}.sieve',
      patterns: [{include: '#test'}, {include: '#comment'}, {include: '#block'}]
    },
    encodedCharacter: {
      captures: {
        1: {name: 'punctuation.section.embedded.begin.sieve'},
        2: {name: 'entity.name.encoding.${2:/downcase}.sieve'},
        3: {name: 'punctuation.delimiter.separator.colon.sieve'},
        4: {
          patterns: [
            {match: '[0-9A-Fa-f]+', name: 'constant.numeric.integer.hex.sieve'}
          ]
        },
        5: {name: 'punctuation.section.embedded.end.sieve'}
      },
      match: '(?i)(\\$\\{)(hex|unicode)(:)([\\s0-9A-Fa-f]+)(})',
      name: 'meta.encoded-character.${2:/downcase}.sieve'
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#conditional'},
        {include: '#require'},
        {include: '#arguments'},
        {include: '#block'},
        {include: '#action'}
      ]
    },
    numbers: {
      captures: {
        1: {name: 'constant.language.quantifier.${1:/downcase}b.sieve'}
      },
      match: '(?i)\\d+(K|M|G)?',
      name: 'constant.numeric.integer.int.decimal.sieve'
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.separator.delimiter.sieve'},
        {match: ';', name: 'punctuation.terminator.statement.semicolon.sieve'}
      ]
    },
    require: {
      match: '\\b(?i:require)(?=\\s|$|\\[)',
      name: 'keyword.control.directive.include.require.sieve'
    },
    stringBlock: {
      begin: '(?i)\\b(text(:))\\s*(?:$|(#.*))',
      beginCaptures: {
        1: {name: 'storage.type.text.sieve'},
        2: {name: 'punctuation.definition.heredoc.begin.sieve'},
        3: {patterns: [{include: '#comments'}]}
      },
      contentName: 'string.unquoted.heredoc.multiline.sieve',
      end: '^\\.$',
      endCaptures: {0: {name: 'punctuation.definition.heredoc.end.sieve'}},
      name: 'meta.multi-line.sieve'
    },
    stringEscapes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.sieve'}
          },
          match: '(\\\\)\\\\',
          name: 'constant.character.escape.backslash.sieve'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.sieve'}
          },
          match: '(\\\\)"',
          name: 'constant.character.escape.quote.sieve'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.sieve'}
          },
          match: '(\\\\).',
          name: 'invalid.deprecated.unknown-escape.sieve'
        }
      ]
    },
    stringList: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.square.begin.sieve'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.bracket.square.end.sieve'}
      },
      name: 'meta.string-list.sieve',
      patterns: [{include: '#main'}]
    },
    strings: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sieve'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.sieve'}},
      name: 'string.quoted.double.sieve',
      patterns: [{include: '#encodedCharacter'}, {include: '#stringEscapes'}]
    },
    taggedArgument: {
      captures: {
        1: {name: 'punctuation.definition.colon.tagged-argument.sieve'}
      },
      match: '(:)(?!\\d)\\w+',
      name: 'keyword.operator.tagged-argument.sieve'
    },
    test: {
      begin:
        '(?:\\G|^|(?<=,|\\())\\s*(?i:(not)\\s+)?((?:[^\\s(){},:\\[\\]#/]|/[^*])++)',
      beginCaptures: {
        1: {name: 'entity.name.function.test.negation.sieve'},
        2: {name: 'entity.name.function.test.sieve'}
      },
      end: '(?=\\s*[{,\\)])',
      name: 'meta.tests.sieve',
      patterns: [{include: '#arguments'}]
    },
    testList: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.bracket.round.begin.sieve'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.bracket.round.end.sieve'}
      },
      name: 'meta.test-list.sieve',
      patterns: [{include: '#test'}, {include: '#main'}]
    }
  },
  scopeName: 'source.sieve'
}

export default grammar
