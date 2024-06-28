// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.io'],
  names: ['io'],
  patterns: [
    {captures: {1: {name: 'meta.empty-parenthesis.io'}}, match: '\\((\\))'},
    {captures: {1: {name: 'meta.comma-parenthesis.io'}}, match: '\\,(\\))'},
    {
      match:
        '\\b(if|ifTrue|ifFalse|ifTrueIfFalse|for|loop|reverseForeach|foreach|map|continue|break|while|do|return)\\b',
      name: 'keyword.control.io'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.io'}},
      end: '\\*/',
      name: 'comment.block.io'
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.io'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.io'}},
          end: '\\n',
          name: 'comment.line.double-slash.io'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.io'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.io'}},
          end: '\\n',
          name: 'comment.line.number-sign.io'
        }
      ]
    },
    {
      match: '\\b(self|sender|target|proto|protos|parent)\\b',
      name: 'variable.language.io'
    },
    {
      match:
        '<=|>=|=|:=|\\*|\\||\\|\\||\\+|-|/|&|&&|>|<|\\?|@|@@|\\b(and|or)\\b',
      name: 'keyword.operator.io'
    },
    {match: '\\bGL[\\w_]+\\b', name: 'constant.other.io'},
    {match: '\\b([A-Z](\\w+)?)\\b', name: 'support.class.io'},
    {
      match:
        '\\b(clone|call|init|method|list|vector|block|(\\w+(?=\\s*\\()))\\b',
      name: 'support.function.io'
    },
    {match: '\\b(gl(u|ut)?[A-Z]\\w+)\\b', name: 'support.function.open-gl.io'},
    {
      begin: '"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.io'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.io'}},
      name: 'string.quoted.triple.io',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.io'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.io'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.io'}},
      name: 'string.quoted.double.io',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.io'}]
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.io'
    },
    {match: '(Lobby)\\b', name: 'variable.other.global.io'},
    {
      match: '\\b(TRUE|true|FALSE|false|NULL|null|Null|Nil|nil|YES|NO)\\b',
      name: 'constant.language.io'
    }
  ],
  scopeName: 'source.io'
}

export default grammar
