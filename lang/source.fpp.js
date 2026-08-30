// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fprime-community/fpp-tools>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fpp', '.fppi'],
  names: ['fpp'],
  patterns: [
    {include: '#specInitPhase'},
    {include: '#keywords'},
    {include: '#modifiers'},
    {include: '#severity'},
    {include: '#types'},
    {include: '#type-builtin-literals'},
    {include: '#annotations'},
    {include: '#tripleString'},
    {include: '#strings'},
    {include: '#punctuation-comma'},
    {include: '#punctuation-semicolon'},
    {include: '#punctuation-accessor'},
    {include: '#string-character-escape'},
    {include: '#numeric-literal'}
  ],
  repository: {
    annotations: {
      patterns: [
        {match: '[@][<]?[^\n]*', name: 'comment.block.documentation.fpp'},
        {match: '[#][^\n]*', name: 'comment.line.fpp'}
      ]
    },
    cppTripleString: {
      begin: '"""',
      beginCaptures: {
        0: {
          name: 'string.quoted.triple.fpp punctuation.definition.string.begin.fpp'
        }
      },
      contentName: 'meta.embedded.block.cpp',
      end: '"""',
      endCaptures: {
        0: {
          name: 'string.quoted.triple.fpp punctuation.definition.string.end.fpp'
        }
      },
      patterns: [{include: 'source.c++'}]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(?<![$])(action|always|array|assert|at|base|block|bool|change|choice|command|component|connections|constant|container|cpu|default|do|drop|else|enter|entry|enum|event|exit|format|get|group|guard|health|hook|id|if|import|include|initial|input|instance|interface|internal|locate|machine|match|module|omit|on|opcode|orange|output|packet|packets|param|phase|port|priority|private|product|queue|record|recv|red|ref|reg|request|resp|save|send|serial|set|severity|signal|size|sizeof|stack|state|string|struct|telemetry|text|throttle|time|topology|type|unmatched|update|with|yellow)\\b',
          name: 'storage.type.class.fpp'
        }
      ]
    },
    'line-continuation': {
      match: '\\\\\\s*$',
      name: 'punctuation.separator.continuation.fpp'
    },
    modifiers: {
      patterns: [
        {
          match:
            '\\b(?<![$])(active|async|deployment|dictionary|sync|system|passive|queued|guarded)\\b',
          name: 'keyword.control.export.fpp'
        }
      ]
    },
    'numeric-literal': {
      patterns: [
        {
          captures: {1: {name: 'storage.type.numeric.bigint.ts'}},
          match: '\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.hex.ts'
        },
        {
          captures: {1: {name: 'storage.type.numeric.bigint.ts'}},
          match: '\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.binary.ts'
        },
        {
          captures: {1: {name: 'storage.type.numeric.bigint.ts'}},
          match: '\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)',
          name: 'constant.numeric.octal.ts'
        },
        {
          captures: {
            0: {name: 'constant.numeric.decimal.ts'},
            1: {name: 'meta.delimiter.decimal.period.ts'},
            10: {name: 'meta.delimiter.decimal.period.ts'},
            11: {name: 'storage.type.numeric.bigint.ts'},
            12: {name: 'meta.delimiter.decimal.period.ts'},
            13: {name: 'storage.type.numeric.bigint.ts'},
            14: {name: 'storage.type.numeric.bigint.ts'},
            2: {name: 'storage.type.numeric.bigint.ts'},
            3: {name: 'meta.delimiter.decimal.period.ts'},
            4: {name: 'storage.type.numeric.bigint.ts'},
            5: {name: 'meta.delimiter.decimal.period.ts'},
            6: {name: 'storage.type.numeric.bigint.ts'},
            7: {name: 'storage.type.numeric.bigint.ts'},
            8: {name: 'meta.delimiter.decimal.period.ts'},
            9: {name: 'storage.type.numeric.bigint.ts'}
          },
          match:
            '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b(?!\\.))                                 # 1\n)(?!\\$)'
        }
      ]
    },
    'punctuation-accessor': {
      captures: {
        1: {name: 'punctuation.accessor.ts'},
        2: {name: 'punctuation.accessor.optional.ts'}
      },
      match: '(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))'
    },
    'punctuation-comma': {match: ',', name: 'punctuation.separator.comma.ts'},
    'punctuation-semicolon': {
      match: ';',
      name: 'punctuation.terminator.statement.ts'
    },
    severity: {
      patterns: [
        {
          match: '\\b(?<![$])(activity|diagnostic|low|fatal|high|warning)\\b',
          name: 'keyword.control.trycatch.fpp'
        }
      ]
    },
    specInitPhase: {
      begin: '\\b(?<![$])(phase)\\b',
      beginCaptures: {1: {name: 'storage.type.class.fpp'}},
      end: '(?<=")|(?=\\})',
      name: 'meta.spec-init.fpp',
      patterns: [
        {include: '#cppTripleString'},
        {include: '#strings'},
        {include: '#line-continuation'},
        {include: '#annotations'},
        {include: '#numeric-literal'},
        {include: '#punctuation-accessor'}
      ]
    },
    'string-character-escape': {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)',
      name: 'constant.character.escape.ts'
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.fpp',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.fpp'}]
    },
    tripleString: {
      begin: '"""',
      end: '"""',
      name: 'string.quoted.triple.fpp',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.fpp'}]
    },
    'type-builtin-literals': {
      match: '\\b(?<![$])(true|false)\\b',
      name: 'support.type.builtin.ts'
    },
    types: {
      patterns: [
        {
          match: '\\b(U8|I8|U16|I16|U32|I32|U64|I64|F32|F64|string|bool)\\b',
          name: 'support.type.primitive.fpp'
        }
      ]
    }
  },
  scopeName: 'source.fpp'
}

export default grammar
