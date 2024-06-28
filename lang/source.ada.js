// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ada', '.ads'],
  extensionsWithDot: ['.adb'],
  names: ['ada', 'ada95', 'ada2005'],
  patterns: [
    {
      captures: {
        1: {name: 'storage.type.function.ada'},
        2: {name: 'entity.name.function.ada'}
      },
      match:
        '\\b(?i:(function|procedure))\\b\\s+(\\w+(\\.\\w+)?|"(?:\\+|-|=|\\*|/)")',
      name: 'meta.function.ada'
    },
    {
      captures: {
        1: {name: 'storage.type.package.ada'},
        2: {name: 'keyword.other.body.ada'},
        3: {name: 'entity.name.type.package.ada'}
      },
      match:
        '\\b(?i:(package)(?:\\b\\s+(body))?)\\b\\s+(\\w+(\\.\\w+)*|"(?:\\+|-|=|\\*|/)")',
      name: 'meta.function.ada'
    },
    {
      captures: {
        1: {name: 'storage.type.function.ada'},
        2: {name: 'entity.name.function.ada'}
      },
      match: '\\b(?i:(end))\\b\\s+(\\w+(\\.\\w+)*|"(\\+|-|=|\\*|/)")\\s?;',
      name: 'meta.function.end.ada'
    },
    {
      captures: {
        1: {name: 'keyword.control.import.limited.ada'},
        2: {name: 'keyword.control.import.private.ada'},
        3: {name: 'keyword.control.import.ada'},
        4: {name: 'entity.name.function.ada'}
      },
      match:
        '^\\s*(?:(limited)\\s+)?(?:(private)\\s+)?(with)\\s+(\\w+(\\.\\w+)*)\\s*;',
      name: 'meta.import.ada'
    },
    {match: '\\b(?i:(begin|end|package))\\b', name: 'keyword.control.ada'},
    {
      match:
        '\\b(?i:(\\=>|abort|abs|abstract|accept|access|aliased|all|and|array|at|body|case|constant|declare|delay|delta|digits|do|else|elsif|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|or|others|out|overriding|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor))\\b',
      name: 'keyword.other.ada'
    },
    {
      match:
        '\\b(?i:([0-9](_?[0-9])*((#[0-9a-f](_?[0-9a-f])*#((e(\\+|-)?[0-9](_?[0-9])*\\b)|\\B))|((\\.[0-9](_?[0-9])*)?(e(\\+|-)?[0-9](_?[0-9])*)?\\b))))',
      name: 'constant.numeric.ada'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ada'}},
      end: '"(?!")',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ada'}},
      name: 'string.quoted.double.ada',
      patterns: [
        {match: '""', name: 'constant.character.escape.ada'},
        {match: '\\n', name: 'invalid.illegal.lf-in-string.ada'}
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.string.begin.ada'},
        2: {name: 'punctuation.definition.string.end.ada'}
      },
      match: "(').(')",
      name: 'string.quoted.single.ada'
    },
    {
      begin: '(^[ \\t]+)?(?=--)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.ada'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '--',
          beginCaptures: {0: {name: 'punctuation.definition.comment.ada'}},
          end: '\\n',
          name: 'comment.line.double-dash.ada'
        }
      ]
    }
  ],
  scopeName: 'source.ada'
}

export default grammar
