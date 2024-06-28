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
  extensions: ['.fut'],
  names: ['futhark'],
  patterns: [{include: '#main'}],
  repository: {
    attribute: {
      captures: {
        1: {name: 'punctuation.definition.attribute.begin.futhark'},
        2: {name: 'storage.modifier.attribute.futhark'},
        3: {name: 'punctuation.definition.attribute.end.futhark'}
      },
      match: '(#\\[)([^\\]]*)(\\])',
      name: 'meta.attribute.futhark'
    },
    booleans: {
      match: "(?<![#'])(true|false)\\b(?![#'])",
      name: 'constant.language.boolean.$1.futhark'
    },
    builtInTypes: {
      patterns: [
        {
          match: "(?<![#'])(bool)\\b(?![#'])",
          name: 'support.type.builtin.futhark'
        },
        {include: '#numericTypes'}
      ]
    },
    character: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.futhark'},
        2: {name: 'punctuation.definition.string.end.futhark'}
      },
      match: "(')[^']?(')",
      name: 'string.quoted.single.character.futhark'
    },
    comment: {begin: '--', end: '$', name: 'comment.line.double-dash.futhark'},
    constructor: {
      captures: {
        1: {name: 'punctuation.definition.constructor.number-sign.futhark'}
      },
      match: "(#)['\\w]+",
      name: 'entity.name.function.constructor.futhark'
    },
    functionDefinition: {
      captures: {
        1: {name: 'storage.type.var.$1.futhark'},
        2: {name: 'entity.name.function.futhark'}
      },
      match:
        "(?<![#'])\\b(def|let|entry)(?:\\s+([_A-Za-z]['\\w]*))?(?:\\b(?![#'])|(?<=')\\B(?!#))"
    },
    keywords: {
      match:
        "(?<![#'])\\b(assert|case|do|else|def|entry|for|if|import|include|in|let|local|loop|match|module|open|then|unsafe|val|while|with)\\b(?![#'])",
      name: 'keyword.control.$1.futhark'
    },
    main: {
      patterns: [
        {include: '#typeBinding'},
        {include: '#typeParameter'},
        {include: '#functionDefinition'},
        {include: '#comment'},
        {include: '#keywords'},
        {include: '#attribute'},
        {include: '#numericTypes'},
        {include: '#builtInTypes'},
        {include: '#booleans'},
        {include: '#number'},
        {include: '#character'},
        {include: '#var'},
        {include: '#constructor'},
        {include: '#operator'},
        {match: '#'},
        {match: "'"},
        {include: 'etc#bracket'},
        {include: 'etc'}
      ]
    },
    number: {
      match:
        '(?x) -?\n(?:\n\t(?:0[xX])\n\t[0-9a-fA-F]+\n\t(?: \\.[0-9a-fA-F]+)?\n\t(?: [Pp][+-]?[0-9]+)?\n\t\n\t|\n\t\n\t(?:0[bB])\n\t[0-1_]+\n\t\n\t|\n\n\t[0-9]+\n\t(?:\\.[0-9]+)?\n\t(?:[Ee][+-]?[0-9]+)?\n) (?:i8|i16|i32|i64|u8|u16|u32|u64|f32|f64)?',
      name: 'constant.numeric.futhark'
    },
    numericTypes: {
      match: "(?<![#'])\\b(f32|f64|i16|i32|i64|i8|u16|u32|u64|u8)\\b(?![#'])",
      name: 'support.type.numeric.futhark'
    },
    operator: {
      patterns: [
        {match: '[-+*/%!<>=&|@]+', name: 'keyword.operator.futhark'},
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.futhark'},
            2: {name: 'punctuation.definition.string.end.futhark'}
          },
          match: '(`)[^`]*(`)',
          name: 'string.interpolated.quoted.backticks.futhark'
        }
      ]
    },
    typeBinding: {
      begin:
        "(?<![#'])\\b(module\\s+)?(type[~^]?)(?:\\s+([_A-Za-z]['\\w]*))?(?:\\b(?![#'])|(?<=')\\B(?!#))",
      beginCaptures: {
        1: {name: 'storage.modifier.module.futhark'},
        2: {name: 'storage.type.decl.futhark'},
        3: {name: 'entity.name.type.futhark'}
      },
      end: '=|(?=\\s*(?!--)[^\\s=])',
      endCaptures: {0: {name: 'keyword.operator.futhark'}},
      name: 'meta.type.binding.futhark',
      patterns: [{include: '#comment'}, {include: '#typeParameter'}]
    },
    typeParameter: {
      captures: {1: {name: 'punctuation.definition.type.parameter.futhark'}},
      match: "('[~^]?)[_A-Za-z]\\w*\\b(?![#'])",
      name: 'entity.name.type.parameter.futhark'
    },
    var: {
      match: "(?<![#'])\\b[_A-Za-z]['\\w]*",
      name: 'variable.other.readwrite.futhark'
    }
  },
  scopeName: 'source.futhark'
}

export default grammar
