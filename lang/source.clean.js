// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.icl', '.dcl'],
  names: ['clean'],
  patterns: [
    {include: '#marks'},
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#literals'},
    {include: '#operators'},
    {include: '#delimiters'}
  ],
  repository: {
    commentBlock: {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.clean'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.clean'}},
      name: 'comment.block.clean',
      patterns: [{include: '#comment'}]
    },
    commentDoc: {
      begin: '/\\*\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.documentation.begin.clean'}
      },
      end: '\\*/',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.documentation.begin.clean'}
      },
      name: 'comment.block.documentation',
      patterns: [{include: 'source.gfm'}]
    },
    commentLine: {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.clean'}},
      end: '$',
      name: 'comment.line.double-slash.clean'
    },
    comments: {
      patterns: [
        {include: '#commentDoc'},
        {include: '#commentBlock'},
        {include: '#commentLine'}
      ]
    },
    delimiters: {match: '[,;(){}]', name: 'punctuation.separator'},
    keywordGeneral: {
      match: '\\b(if|let|in|with|where|case|of|class|instance)\\b',
      name: 'keyword.control.clean'
    },
    keywordImport: {
      match:
        '\\b(implementation|definition|system|module|from|import|qualified|as)\\b',
      name: 'keyword.control.import.clean'
    },
    keywordReserved: {
      match:
        '\\b(special|code|inline|foreign|export|ccall|stdcall|generic|derive|infix(l|r)?|otherwise|dynamic)\\b',
      name: 'keyword.reserved.clean'
    },
    keywords: {
      patterns: [
        {include: '#keywordGeneral'},
        {include: '#keywordImport'},
        {include: '#keywordReserved'}
      ]
    },
    literalBool: {
      match: '\\b(True|False)\\b',
      name: 'constant.language.boolean.clean'
    },
    literalChar: {
      match: "'([^'\\\\]|\\\\(x[0-9a-fA-F]+|\\d+|.))'",
      name: 'constant.character.clean'
    },
    literalHex: {
      match: '\\b[+~-]?0x[0-9A-Fa-f]+\\b',
      name: 'constant.numeric.integer.hexadecimal.clean'
    },
    literalInt: {
      match: '\\b[+~-]?[0-9]+\\b',
      name: 'constant.numeric.integer.decimal.clean'
    },
    literalOct: {
      match: '\\b[+~-]?0[0-7]+\\b',
      name: 'constant.numeric.integer.octal.clean'
    },
    literalReal: {
      match: '\\b[+~-]?[0-9]+\\.[0-9]+(E[+-]?[0-9]+)?\\b',
      name: 'constant.numeric.float.clean'
    },
    literalString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.clean'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.clean'}},
      name: 'string.quoted.double.clean',
      patterns: [{include: '#escaped_character'}]
    },
    literals: {
      patterns: [
        {include: '#literalChar'},
        {include: '#literalInt'},
        {include: '#literalOct'},
        {include: '#literalHex'},
        {include: '#literalReal'},
        {include: '#literalBool'},
        {include: '#literalString'}
      ]
    },
    mark: {
      begin: '/// #+ ',
      beginCaptures: {0: {name: 'punctuation.definition.comment.clean'}},
      end: '$',
      name: 'markup.heading.clean'
    },
    marks: {patterns: [{include: '#mark'}]},
    operatorComposition: {
      match: '\\s+o\\s+',
      name: 'keyword.operator.composition.clean'
    },
    operatorGeneral: {
      match: '[-~@#$%^?!+*<>\\\\/|&=:.]+',
      name: 'keyword.operator.clean'
    },
    operators: {
      patterns: [
        {include: '#operatorGeneral'},
        {include: '#operatorComposition'}
      ]
    }
  },
  scopeName: 'source.clean'
}

export default grammar
