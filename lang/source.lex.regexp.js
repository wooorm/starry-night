// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    alternation: {match: '\\|', name: 'keyword.operator.logical.or.lex'},
    anchors: {
      patterns: [
        {match: '\\^', name: 'keyword.control.anchor.line-start.lex'},
        {match: '\\$', name: 'keyword.control.anchor.line-end.lex'},
        {
          captures: {
            1: {name: 'punctuation.definition.angle.bracket.begin.lex'},
            2: {name: 'punctuation.definition.angle.bracket.end.lex'}
          },
          match: '(<<)EOF(>>)',
          name: 'keyword.control.anchor.eof.lex'
        }
      ]
    },
    class: {
      begin: '(\\[)(\\^)?(-)?',
      beginCaptures: {
        1: {name: 'punctuation.definition.character-class.set.begin.lex'},
        2: {name: 'keyword.operator.logical.not.lex'},
        3: {name: 'constant.single.character.character-class.lex'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.character-class.set.end.lex'}
      },
      name: 'meta.character-class.set.lex',
      patterns: [
        {include: '#escapes'},
        {include: '#expressions'},
        {match: '-(?!\\])', name: 'punctuation.separator.range.dash.lex'},
        {match: '.', name: 'constant.single.character.character-class.lex'}
      ]
    },
    escapes: {
      patterns: [
        {
          match: '\\\\[0-7]{3}',
          name: 'constant.character.escape.codepoint.octal.lex'
        },
        {
          match: '\\\\[xX][A-Fa-f0-9]{2}',
          name: 'constant.character.escape.codepoint.hexadecimal.hex.lex'
        },
        {match: '\\\\.', name: 'constant.character.escape.lex'}
      ]
    },
    expansion: {
      captures: {
        1: {name: 'punctuation.definition.expansion.bracket.curly.begin.lex'},
        2: {name: 'variable.parameter.reference.lex'},
        3: {name: 'punctuation.definition.expansion.bracket.curly.end.lex'}
      },
      match: '(\\{)([^{}\\s]+)(\\})',
      name: 'meta.expansion.lex'
    },
    expressions: {
      captures: {
        1: {name: 'punctuation.definition.character-class.set.begin.lex'},
        2: {name: 'support.constant.posix-class.lex'},
        3: {name: 'punctuation.definition.character-class.set.end.lex'}
      },
      match:
        '(?x)\n(\\[:)\n(alnum|alpha|blank|cntrl|digit|graph\n|lower|print|punct|space|upper|xdigit)\n(:\\])',
      name: 'constant.language.posix.$2-char.character-class.lex'
    },
    lookahead: {match: '/', name: 'keyword.operator.logical.and.lookahead.lex'},
    main: {
      patterns: [
        {include: '#wildcard'},
        {include: '#alternation'},
        {include: '#lookahead'},
        {include: '#anchors'},
        {include: '#start-condition'},
        {include: '#quantifier'},
        {include: '#string'},
        {include: '#expansion'},
        {include: '#quantifier-range'},
        {include: '#class'},
        {include: '#subpattern'},
        {include: '#escapes'}
      ]
    },
    quantifier: {match: '[*+?]', name: 'keyword.operator.quantifier.lex'},
    'quantifier-range': {
      captures: {
        1: {name: 'punctuation.definition.quantifier.bracket.curly.begin.lex'},
        2: {name: 'keyword.operator.quantifier.min.lex'},
        3: {name: 'punctuation.delimiter.comma.lex'},
        4: {name: 'keyword.operator.quantifier.max.lex'},
        5: {name: 'punctuation.delimiter.comma.lex'},
        6: {name: 'keyword.operator.quantifier.max.lex'},
        7: {name: 'punctuation.definition.quantifier.bracket.curly.end.lex'}
      },
      match: '({)(?:([0-9]+)(?:(,)([0-9]*))?|(,)([0-9]+))(})',
      name: 'keyword.operator.quantifier.specific.lex'
    },
    'start-condition': {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.angle.bracket.begin.lex'}
      },
      end: '>|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.angle.bracket.end.lex'}},
      name: 'meta.start-condition.lex',
      patterns: [
        {match: '\\*', name: 'keyword.operator.wildcard.condition.lex'},
        {match: ',', name: 'punctuation.delimiter.separator.comma.lex'},
        {match: '[^<>*,\\s]+', name: 'constant.language.condition.name.lex'}
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lex'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lex'}},
      name: 'string.quoted.double.lex',
      patterns: [{include: '#escapes'}]
    },
    subpattern: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.definition.group.begin.lex'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.group.end.lex'}},
      name: 'meta.group.regexp',
      patterns: [{include: '#main'}]
    },
    wildcard: {
      match: '\\.',
      name: 'constant.character.wildcard.dot.match.any.lex'
    }
  },
  scopeName: 'source.lex.regexp'
}

export default grammar
