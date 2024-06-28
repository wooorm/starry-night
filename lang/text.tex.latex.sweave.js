// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/sweave.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.r', 'text.tex.latex'],
  extensions: ['.rnw'],
  names: ['sweave'],
  patterns: [
    {
      begin: '^(<<)',
      beginCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.sweave'}
      },
      end: '(>>)(?==)',
      endCaptures: {1: {name: 'punctuation.definition.parameters.end.sweave'}},
      name: 'meta.block.parameters.sweave',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.name-of-parameter.sweave'},
            2: {name: 'punctuation.separator.key-value.sweave'},
            3: {name: 'constant.language.boolean.sweave'},
            4: {name: 'constant.language.results.sweave'},
            5: {name: 'string.unquoted.label.sweave'}
          },
          match: '(\\w+)(=)(?:(true|false)|(verbatim|tex|hide)|([\\w.]+))',
          name: 'meta.parameter.sweave'
        },
        {match: '[\\w.]+', name: 'string.unquoted.label.sweave'},
        {match: ',', name: 'punctuation.separator.parameters.sweave'}
      ]
    },
    {
      begin: '(?<=>>)(=)(.*)\\n',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.begin.sweave'},
        2: {name: 'comment.line.other.sweave'}
      },
      contentName: 'source.r.embedded.sweave',
      end: '^(@)(.*)$',
      endCaptures: {
        1: {name: 'punctuation.section.embedded.end.sweave'},
        2: {name: 'comment.line.other.sweave'}
      },
      name: 'meta.block.code.sweave',
      patterns: [
        {match: '^\\s+@.*\\n?', name: 'invalid.illegal.sweave'},
        {include: 'source.r'}
      ]
    },
    {match: '^\\s+<<.*\\n?', name: 'invalid.illegal.sweave'},
    {
      begin: '^\\\\begin(\\{)Scode(\\})',
      captures: {
        1: {name: 'punctuation.definition.arguments.begin.latex'},
        2: {name: 'punctuation.definition.arguments.end.latex'}
      },
      contentName: 'source.r.embedded.sweave',
      end: '^\\\\end(\\{)Scode(\\})',
      name: 'meta.block.source.r',
      patterns: [{include: 'source.r'}]
    },
    {
      begin: '\\\\Sexpr(\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.latex'}
      },
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.latex'}},
      name: 'source.r.embedded.sweave',
      patterns: [{include: 'source.r'}]
    },
    {include: 'text.tex.latex'}
  ],
  scopeName: 'text.tex.latex.sweave'
}

export default grammar
