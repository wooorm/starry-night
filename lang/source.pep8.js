// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `wtfpl`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pep'],
  names: ['pep8'],
  patterns: [
    {include: '#strings'},
    {include: '#comment-single-line'},
    {include: '#variable'},
    {include: '#constant'},
    {include: '#storage'},
    {include: '#keyword'},
    {include: '#entity'}
  ],
  repository: {
    character: {match: "('[^\\\\']'|'\\\\.')", name: 'string.character.pep8'},
    'comment-single-line': {match: ';.*', name: 'comment.singleline.pep8'},
    comments: {patterns: [{include: '#comment-single-line'}]},
    constant: {
      patterns: [
        {match: '-?0(x|X)[0-9A-Fa-f]+', name: 'constant.numeric.hex.pep8'},
        {match: '-?([0-9]+)', name: 'constant.numeric.int.pep8'}
      ]
    },
    entity: {
      patterns: [
        {
          match: ', *(i|d|x|n|(sx?f?))',
          name: 'entity.other.attribute-name.pep8'
        },
        {match: '( |\\t)*', name: 'entity.whitespaces.pep8'}
      ]
    },
    keyword: {
      patterns: [
        {
          match:
            '([cC][aA][lL][lL])|([sS][tT][oO][pP])|([bB][rR]((([lL]|[gG])([tT]|[eE]))|([eE][qQ])|([nN][eE])|[vV]|[cC])?)|([rR][eE][tT]([0-7]|([tT][rR])))\\b',
          name: 'keyword.control.pep8'
        },
        {
          match:
            '(([aA][dD][dD])|([sS][uU][bB])|([nN][oO][tT])|([nN][eE][gG])|([aA][sS]([lL]|[rR]))|([rR][oO]([lL]|[rR]))|([oO][rR])|([cC][pP]))([aA]|[xX])\\b',
          name: 'keyword.operator.pep8'
        },
        {
          match:
            '([mM][oO][vV]([sS][pP]|[fF][lL][gG])[aA])|([nN][oO][pP][0-3]?)|((([aA][dD][dD])|([sS][uU][bB]))[sS][pP])|([dD][eE][cC]([iI]|[oO]))|((([lL][dD])|([sS][tT]))([bB][yY][tT][eE])?([aA]|[xX]))|([cC][hH][aA][rR]([iI]|[oO]))|([sS][tT][rR][oO])\\b',
          name: 'keyword.misc.pep8'
        }
      ]
    },
    'simple-string': {
      begin: '\\"',
      end: '\\"',
      name: 'string.quoted.double.pep8',
      patterns: [{match: '([^\\\\]|\\\\.)', name: 'string.char.pep8'}]
    },
    storage: {
      patterns: [
        {
          match:
            '[.](([bB][uU][rR][nN])|([eE][qQ][uU][aA][tT][eE])|([bB][lL][oO][cC][kK])|([eE][nN][dD])|([bB][yY][tT][eE])|([wW][oO][rR][dD])|([aA][dD][dD][rR][sS][sS])|([aA][sS][cC][iI][iI]))',
          name: 'storage.type.pep8'
        }
      ]
    },
    strings: {patterns: [{include: '#simple-string'}]},
    variable: {
      patterns: [
        {match: '[a-z][a-zA-Z0-9_]* *[:]?', name: 'variable.other.pep8'}
      ]
    }
  },
  scopeName: 'source.pep8'
}

export default grammar
