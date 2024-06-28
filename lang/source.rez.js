// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/rez.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['rez'],
  patterns: [
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.rez'}},
      end: '\\*/',
      name: 'comment.block.rez'
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.rez'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.rez'}},
          end: '\\n',
          name: 'comment.line.double-slash.rez'
        }
      ]
    },
    {
      match: '\\b(?i:(change|data|delete|include|read|resource))\\b',
      name: 'keyword.control.rez'
    },
    {
      match:
        '\\b(?i:(align|array|binary|bit|bitstring|boolean|byte|case|char|cstring|decimal|enum|fill|hex|integer|key|literal|long|longint|nibble|octal|optional|point|pstring|rect|reversebytes|string|switch|unsigned|wide|word|wstring))\\b',
      name: 'storage.type.rez'
    },
    {
      match:
        '\\b(?i:(appheap|locked|nonpurgeable|purgeable|sysheap|unlocked))\\b',
      name: 'keyword.other.attributes.rez'
    },
    {
      captures: {1: {name: 'punctuation.definition.function.rez'}},
      match:
        '(\\$\\$)(?i:(ArrayIndex|Attributes|BitField|Byte|CountOf|Date|Day|Format|Hour|ID|Long|Minute|Month|Name|OptionalCount|PackedSize|Read|Resource|ResourceSize|Second|Shell|Time|Type|Version|Weekday|Word|Year))',
      name: 'support.function.built-in.rez'
    },
    {
      match:
        '\\b(((0(x|X|B))[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.rez'
    },
    {match: '\\$[0-9a-fA-F]+?\\b', name: 'constant.numeric.hex.rez'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.rez'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.rez'}},
      name: 'string.quoted.double.rez',
      patterns: [{include: '#escaped_char'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.rez'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.rez'}},
      name: 'string.quoted.single.rez',
      patterns: [{include: '#escaped_char'}]
    },
    {
      begin: '\\$"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.rez'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.rez'}},
      name: 'string.quoted.other.hex.rez',
      patterns: [{include: '#escaped_char'}]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.preprocessor.rez'},
        2: {name: 'keyword.control.import.rez'}
      },
      match:
        '^\\s*(#)\\s*(?i:(defined|else|elif|endif|if|ifdef|ifndef|include|line|printf|undef))\\b',
      name: 'meta.preprocessor.rez'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.preprocessor.rez'},
        2: {name: 'keyword.control.import.rez'},
        3: {name: 'entity.name.function.define.rez'}
      },
      match: '^\\s*(#)\\s*(?i:(define))\\s+([_A-Za-z][_A-Za-z0-9]+)',
      name: 'meta.preprocessor.define.rez'
    },
    {
      captures: {
        1: {name: 'keyword.control.rez'},
        2: {name: 'entity.name.function.rez'}
      },
      match:
        "\\b(?i:(type|resource))\\s+([_A-Za-z][_A-Za-z0-9]+|(0x|\\$)[A-Fa-f0-9]+|[0-9]+|'[^']{1,4}')",
      name: 'meta.type.rez'
    }
  ],
  repository: {
    escaped_char: {match: '\\\\.', name: 'constant.character.escape.rez'}
  },
  scopeName: 'source.rez'
}

export default grammar
