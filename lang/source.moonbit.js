// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/moonbitlang/moonbit-tmLanguage>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mbt'],
  names: ['moonbit'],
  patterns: [
    {include: '#strings'},
    {include: '#comments'},
    {include: '#constants'},
    {include: '#keywords'},
    {include: '#functions'},
    {include: '#support'},
    {include: '#attribute'},
    {include: '#types'},
    {include: '#modules'},
    {include: '#variables'}
  ],
  repository: {
    attribute: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.directive'},
            2: {
              patterns: [
                {include: '#strings'},
                {match: '[a-zA-Z0-9_. ]+', name: 'entity.name.tag'},
                {match: '=', name: 'keyword.operator.attribute.moonbit'}
              ]
            }
          },
          match: '(#[a-z][A-Za-z0-9_. ]*)(.*)'
        }
      ]
    },
    comments: {
      patterns: [
        {match: '//[^/].*', name: 'comment.line'},
        {
          begin: '///',
          name: 'comment.block.documentation.moonbit',
          patterns: [
            {
              begin: '\\s*```',
              beginCaptures: {0: {name: 'markup.fenced_code.block.markdown'}},
              end: '\\s*```',
              endCaptures: {0: {name: 'markup.fenced_code.block.markdown'}},
              name: 'meta.embedded.line.moonbit',
              patterns: [{include: '$self'}]
            },
            {match: '.*', name: 'comment.block.documentation.moonbit'}
          ],
          while: '///'
        }
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b\\d(\\d|_)*(?!\\.)((U)?(L)?|N?)\\b',
          name: 'constant.numeric.moonbit'
        },
        {match: '(?<=\\.)\\d((?=\\.)|\\b)', name: 'constant.numeric.moonbit'},
        {match: '\\b\\d+(?=\\.\\.)', name: 'constant.numeric.moonbit'},
        {
          match: '\\b\\d[\\d_]*\\.[\\d_]*([Ee][+-]?\\d[\\d_]*\\b)?',
          name: 'constant.numeric.moonbit'
        },
        {
          match: '\\b0[Oo][0-7][0-7]*((U)?(L)?|N?)\\b',
          name: 'constant.numeric.moonbit'
        },
        {
          match:
            '\\b0[Xx][\\dAaBbCcDdEeFf][\\dAaBbCcDdEeFf_]*((U|L|UL|N)\\b|\\.[\\da-fA-F_]*([Pp][+-]?[\\da-fA-F_]+\\b)?)?',
          name: 'constant.numeric.moonbit'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.moonbit'}
      ]
    },
    escape: {
      patterns: [
        {
          match: '\\\\[0\\\\tnrb"\']',
          name: 'constant.character.escape.moonbit'
        },
        {
          match: '\\\\x[0-9a-fA-F]{2}',
          name: 'constant.character.escape.moonbit'
        },
        {
          match: '\\\\o[0-3][0-7]{2}',
          name: 'constant.character.escape.moonbit'
        },
        {
          match: '\\\\u[0-9a-fA-F]{4}',
          name: 'constant.character.escape.unicode.moonbit'
        },
        {
          match: '\\\\u{[0-9a-fA-F]*}',
          name: 'constant.character.escape.unicode.moonbit'
        }
      ]
    },
    functions: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.moonbit'},
            2: {name: 'entity.name.type.moonbit'},
            3: {name: 'entity.name.function.moonbit'}
          },
          match:
            '\\b(fn)\\b\\s*(?:([A-Z][A-Za-z0-9_]*)::)?([a-z0-9_][A-Za-z0-9_]*)?\\b'
        },
        {
          begin:
            '(?!\\bfn\\s+)(?:\\.|::)?([a-z0-9_][A-Za-z0-9_]*(\\!|\\?|\\!\\!)?)\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.moonbit'},
            2: {name: 'punctuation.brackets.round.moonbit'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.moonbit'}},
          name: 'meta.function.call.moonbit',
          patterns: [
            {include: '#comments'},
            {include: '#constants'},
            {include: '#keywords'},
            {include: '#functions'},
            {include: '#support'},
            {include: '#types'},
            {include: '#modules'},
            {include: '#strings'},
            {include: '#variables'}
          ]
        }
      ]
    },
    interpolation: {
      patterns: [
        {
          begin: '\\\\{',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.moonbit'}
          },
          contentName: 'source.moonbit',
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.embedded.end.moonbit'}},
          name: 'meta.embedded.line.moonbit',
          patterns: [{include: '$self'}]
        }
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(async)\\b', name: 'keyword.control.moonbit.async'},
        {
          match:
            '\\b(guard|if|while|break|continue|return|try|catch|except|raise|noraise|match|lexmatch|using|else|as|in|is|loop|for|async|defer)\\b',
          name: 'keyword.control.moonbit'
        },
        {
          match:
            '\\b(type!|lexmatch\\?|(type|typealias|let|const|enum|struct|import|trait|traitalias|derive|test|impl|with|fnalias|recur|suberror|letrec|and)\\b)',
          name: 'keyword.moonbit'
        },
        {
          match: '\\b(mut|pub|priv|readonly|extern)\\b',
          name: 'storage.modifier.moonbit'
        },
        {match: '->', name: 'storage.type.function.arrow.moonbit'},
        {match: '=>', name: 'storage.type.function.arrow.moonbit'},
        {match: '=', name: 'keyword.operator.assignment.moonbit'},
        {match: '\\|>', name: 'keyword.operator.other.moonbit'},
        {
          match: '(===|==|!=|>=|<=|(?<!-)(?<!\\|)>(?!>)|<(?!<))',
          name: 'keyword.operator.comparison.moonbit'
        },
        {
          match: '(\\bnot\\b|&&|\\|\\|)',
          name: 'keyword.operator.logical.moonbit'
        },
        {
          match: '(\\|(?!\\|)(?!>)|&(?!&)|\\^|<<|>>)',
          name: 'keyword.operator.bitwise.moonbit'
        },
        {match: '(\\+|-(?!>)|\\*|%|/)', name: 'keyword.operator.math.moonbit'}
      ]
    },
    modules: {
      patterns: [
        {
          match: '@[A-Za-z][A-Za-z0-9_/]*',
          name: 'entity.name.namespace.moonbit'
        }
      ]
    },
    strings: {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.other.moonbit'}},
          match: '(#\\|).*',
          name: 'string.line'
        },
        {
          captures: {
            1: {name: 'keyword.operator.other.moonbit'},
            2: {patterns: [{include: '#escape'}, {include: '#interpolation'}]}
          },
          match: '(\\$\\|)(.*)',
          name: 'string.line'
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.moonbit',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.moonbit',
          patterns: [{include: '#escape'}, {include: '#interpolation'}]
        }
      ]
    },
    support: {
      patterns: [
        {
          match: '\\b(Eq|Compare|Hash|Show|Default|ToJson|FromJson)\\b',
          name: 'support.class.moonbit'
        }
      ]
    },
    types: {
      patterns: [
        {
          match: '\\b(?<!@)[A-Z][A-Za-z0-9_]*((\\?)+|\\b)',
          name: 'entity.name.type.moonbit'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '\\b(?<!\\.|::)[a-z_][a-zA-Z0-9_]*\\b',
          name: 'variable.other.moonbit'
        }
      ]
    }
  },
  scopeName: 'source.moonbit'
}

export default grammar
