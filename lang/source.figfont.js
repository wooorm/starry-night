// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.flf'],
  names: ['figlet-font', 'figfont'],
  patterns: [{include: '#main'}],
  repository: {
    codeTag: {
      captures: {
        1: {name: 'meta.codepoint.figfont'},
        2: {name: 'invalid.illegal.reserved-codepoint.figfont'},
        3: {name: 'constant.numeric.decimal.integer.int.figfont'},
        4: {name: 'constant.numeric.octal.integer.int.figfont'},
        5: {name: 'constant.numeric.hexadecimal.hex.integer.int.figfont'},
        6: {name: 'string.unquoted.description.figfont'}
      },
      match:
        '(?x) ^(?!.+[@#]$)\n( (-(?:0[Xx])?0*1)(?=\\s|$)        # Invalid -1\n| (\\+?(?:[1-9][0-9]*|0(?=\\s|$))) # Decimal\n| (\\+?0[0-7]+)                    # Octal\n| (\\+?0[Xx][0-9A-Fa-f]+)          # Hex\n)\n(?:\\s+(\\S.*))?\n(?=\\s*$)',
      name: 'meta.code-tag.figfont'
    },
    codeTagTable: {
      begin:
        '(?x) ^(?!.+[@#]$)\n( (-(?:[1-9][0-9]*|0(?=\\s|$))) # Decimal\n| (-0[0-7]+)                    # Octal\n| (-0[Xx][0-9A-Fa-f]+)          # Hex\n)\n(?:\\s+(\\S.*))?\n\\s*$\\n?',
      beginCaptures: {
        0: {name: 'meta.code-tag.figfont'},
        1: {name: 'meta.negative.codepoint.figfont'},
        2: {name: 'constant.numeric.decimal.integer.int.figfont'},
        3: {name: 'constant.numeric.octal.integer.int.figfont'},
        4: {name: 'constant.numeric.hexadecimal.hex.integer.int.figfont'},
        5: {name: 'string.unquoted.description.figfont'}
      },
      contentName: 'string.interpolated.code-tag.figfont',
      end: '(?<=@@|##)[ \\t]*$',
      name: 'meta.translation-table.figfont',
      patterns: [{include: '#endmarks'}]
    },
    endmarks: {
      match: '(?:@+|#+)[ \\t]*$',
      name: 'keyword.operator.endmark.character.figfont'
    },
    fontData: {
      match: '[^#@\\s]+|#+(?!#*[ \\t]*$)|@+(?!@*[ \\t]*$)',
      name: 'constant.character.sub-character.figfont'
    },
    integer: {
      match: '[-+]?[0-9]+',
      name: 'constant.numeric.decimal.integer.int.figfont'
    },
    main: {
      patterns: [
        {include: '#prologue'},
        {include: '#codeTag'},
        {include: '#codeTagTable'},
        {include: '#fontData'},
        {include: '#endmarks'}
      ]
    },
    prologue: {
      begin: '^([ft]lf2a)(\\S|\\x7F)(\\s+.+)?\\s*$',
      beginCaptures: {
        0: {name: 'meta.header-line.figfont'},
        1: {name: 'keyword.control.file.signature.figfont'},
        2: {name: 'variable.parameter.hardblank.figfont'},
        3: {patterns: [{include: '#integer'}]}
      },
      contentName: 'comment.block.freeform.figfont',
      end: '^\\s*(?=\\2(?!.*(?i:hard\\W?blank))|.{0,6}[#@]\\s*$)',
      name: 'meta.prologue.figfont'
    }
  },
  scopeName: 'source.figfont'
}

export default grammar
