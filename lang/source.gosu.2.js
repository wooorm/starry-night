// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jpcamara/Textmate-Gosu-Bundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gst', '.gsx', '.vark'],
  names: ['gosu'],
  patterns: [
    {match: '\\b(List|Map)\\b', name: 'support.class.gosu.2'},
    {match: '\\b(where|find|each)\\b', name: 'support.function.gosu.2'},
    {
      match:
        '\\b(abstract|assert|break|case|catch|class|continue|do|else|enum|extends|final|finally|for|if|implements|uses|typeis|interface|new|package|private|protected|public|return|static|super|switch|throw|try|void|while|enhancement|protocol|function|block|as|represents|delegate|readonly|property|get|set|using|var|print|construct|in|override|and|or|not|params|typeloader|classpath|index|typeof|@[a-zA-Z]+)\\b',
      name: 'keyword.control.gosu.2'
    },
    {
      match: '\\b(Boolean|String|Double|Long|Integer)\\b',
      name: 'storage.type.gosu.2'
    },
    {match: '\\b(null|true|false|this)\\b', name: 'constant.language.gosu.2'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.gosu.2'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gosu.2'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.gosu.2'}},
      name: 'string.quoted.double.gosu.2',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.gosu.2'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gosu.2'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.gosu.2'}},
      name: 'string.quoted.single.gosu.2',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.gosu.2'}]
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.gosu.2'}},
      end: '\\*/',
      name: 'comment.block.gosu.2'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.gosu.2'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.gosu.2'
    },
    {match: '\\b(instanceof)\\b', name: 'keyword.operator.gosu.2'},
    {match: '[-!%&*+=/?:]', name: 'keyword.operator.symbolic.gosu.2'},
    {
      captures: {1: {name: 'punctuation.definition.preprocessor.gosu.2'}},
      match: '^[ \\t]*(#)[a-zA-Z]+',
      name: 'meta.preprocessor.gosu.2'
    },
    {
      begin: '\\b(function)\\s+([a-zA-Z_]\\w*)\\s*(\\()',
      captures: {
        1: {name: 'storage.type.function.gosu.2'},
        2: {name: 'entity.name.function.gosu.2'},
        3: {name: 'punctuation.definition.parameters.begin.gosu.2'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.gosu.2'}},
      name: 'meta.function.gosu.2',
      patterns: [
        {match: '[^,)\\n]+', name: 'variable.parameter.function.gosu.2'}
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.class.gosu.2'},
        2: {name: 'entity.name.type.class.gosu.2'},
        3: {name: 'storage.modifier.extends.gosu.2'},
        4: {name: 'entity.other.inherited-class.gosu.2'}
      },
      match:
        '\\b(class)\\s+([a-zA-Z_](?:\\w|\\.)*)(?:\\s+(extends)\\s+([a-zA-Z_](?:\\w|\\.)*))?',
      name: 'meta.class.gosu.2'
    }
  ],
  scopeName: 'source.gosu.2'
}

export default grammar
