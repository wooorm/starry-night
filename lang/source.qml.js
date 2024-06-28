// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js'],
  extensions: ['.qml', '.qbs'],
  names: ['qml'],
  patterns: [
    {begin: '/\\*(?!/)', end: '\\*/', name: 'comment.block.documentation.qml'},
    {match: '//.*$', name: 'comment.line.double-slash.qml'},
    {
      begin: '\\b(import)\\s+',
      beginCaptures: {1: {name: 'keyword.other.import.qml'}},
      end: '$',
      name: 'meta.import.qml',
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.class.qml'},
            2: {name: 'constant.numeric.qml'},
            3: {name: 'keyword.other.import.qml'},
            4: {name: 'entity.name.class.qml'}
          },
          match:
            '([\\w\\d\\.]+)\\s+(\\d+\\.\\d+)(?:\\s+(as)\\s+([A-Z][\\w\\d]*))?',
          name: 'meta.import.namespace.qml'
        },
        {
          captures: {
            1: {name: 'string.quoted.double.qml'},
            2: {name: 'keyword.other.import.qml'},
            3: {name: 'entity.name.class.qml'}
          },
          match: '(\\"[^\\"]+\\")(?:\\s+(as)\\s+([A-Z][\\w\\d]*))?',
          name: 'meta.import.dirjs.qml'
        }
      ]
    },
    {match: '\\b[A-Z]\\w*\\b', name: 'support.class.qml'},
    {match: '(((^|\\{)\\s*)|\\b)on[A-Z]\\w*\\b', name: 'support.class.qml'},
    {
      captures: {
        1: {name: 'keyword.other.qml'},
        2: {name: 'storage.modifier.qml'}
      },
      match: '(?:^|\\{)\\s*(id)\\s*\\:\\s*([^;\\s]+)\\b',
      name: 'meta.id.qml'
    },
    {
      captures: {
        1: {name: 'keyword.other.qml'},
        2: {name: 'keyword.other.qml'},
        3: {name: 'keyword.other.qml'},
        4: {name: 'storage.type.qml'},
        5: {name: 'entity.other.attribute-name.qml'}
      },
      match:
        '^\\s*(?:(default|readonly)\\s+)?(property)\\s+(?:(alias)|([\\w\\<\\>]+))\\s+(\\w+)',
      name: 'meta.propertydef.qml'
    },
    {
      begin: '\\b(signal)\\s+(\\w+)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.qml'},
        2: {name: 'support.function.qml'}
      },
      end: ';|(?=/)|$',
      name: 'meta.signal.qml',
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.qml'},
            2: {name: 'variable.parameter.qml'}
          },
          match: '(\\w+)\\s+(\\w+)',
          name: 'meta.signal.parameters.qml'
        }
      ]
    },
    {
      captures: {
        1: {name: 'constant.language.qml'},
        2: {name: 'storage.type.qml'},
        3: {name: 'keyword.control.qml'}
      },
      match:
        '(?:\\b|\\s+)(?:(true|false|null|undefined)|(var|void)|(on|as|enum|connect|break|case|catch|continue|debugger|default|delete|do|else|finally|for|if|in|instanceof|new|return|switch|this|throw|try|typeof|while|with))\\b',
      name: 'meta.keyword.qml'
    },
    {
      captures: {
        1: {name: 'storage.type.qml'},
        2: {name: 'entity.name.function.untitled'}
      },
      match: '\\b(function)\\s+([\\w_]+)\\s*(?=\\()',
      name: 'meta.function.qml'
    },
    {match: '\\b[\\w_]+\\s*(?=\\()', name: 'support.function.qml'},
    {
      match: '(?:^|\\{|;)\\s*[a-z][\\w\\.]*\\s*(?=\\:)',
      name: 'entity.other.attribute-name.qml'
    },
    {match: '(?<=\\.)\\b\\w*', name: 'entity.other.attribute-name.qml'},
    {match: '\\b([a-z_]\\w*)\\b', name: 'variable.parameter'},
    {include: 'source.js'}
  ],
  scopeName: 'source.qml'
}

export default grammar
