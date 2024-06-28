// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/scalate/Scalate.tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.scala'],
  extensions: ['.scaml'],
  names: ['scaml'],
  patterns: [
    {
      begin: '^\\s*[&!]?==',
      contentName: 'string.quoted.double.scala',
      end: '$\\n?',
      patterns: [{include: '#interpolated_scala'}]
    },
    {
      begin: '^(\\s*):scala$',
      end: '^\\1$',
      name: 'source.scala.embedded.filter.scaml',
      patterns: [{include: 'source.scala'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.prolog.scaml'}},
      match: '^(!!!)($|\\s.*)',
      name: 'meta.prolog.scaml'
    },
    {
      begin: ':javascript',
      end: '^(\\s+)?%',
      name: 'source.js.embedded.scaml',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(\\s*):javascript$',
      end: '^\\1$',
      name: 'source.embedded.filter.js',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(\\s*):scala$',
      end: '^\\1$',
      name: 'source.scala.embedded.filter.scaml',
      patterns: [{include: 'source.scala'}]
    },
    {
      captures: {1: {name: 'punctuation.section.comment.scaml'}},
      match: '^ *(/)\\s*\\S.*$\\n?',
      name: 'comment.line.slash.scaml'
    },
    {
      begin: '^( *)(/)\\s*$',
      beginCaptures: {2: {name: 'punctuation.section.comment.scaml'}},
      end: '^(?!\\1  )',
      name: 'comment.block.scaml',
      patterns: [{include: 'source.scaml'}]
    },
    {
      begin: "^\\s*(?:((%)(('[^']+')|([\\w\\_\\-:]+)))|(?=\\.\\w|#\\w))",
      captures: {
        1: {name: 'meta.tag.scaml'},
        2: {name: 'punctuation.definition.tag.scaml'},
        3: {name: 'entity.name.tag.scaml'}
      },
      end: '$|(?!(\\>\\<|\\<?\\>?)(\\.|#|\\{|\\[|[&!]?=|~|/))',
      patterns: [
        {
          begin: '[&!]?==',
          contentName: 'string.quoted.double.scala',
          end: '$\\n?',
          patterns: [{include: '#interpolated_scala'}]
        },
        {
          captures: {1: {name: 'entity.other.attribute-name.class'}},
          match: '(\\.[\\w-]+)',
          name: 'meta.selector.css'
        },
        {
          captures: {1: {name: 'entity.other.attribute-name.id'}},
          match: '(#[\\w-]+)',
          name: 'meta.selector.css'
        },
        {
          begin: '\\{(?=.*\\}||.*\\|\\s*$)',
          end: '\\}|$|^(?!.*\\|\\s*$)',
          name: 'meta.section.attributes.scaml',
          patterns: [{include: 'source.scala'}, {include: '#continuation'}]
        },
        {
          begin: '\\[(?=.*\\]|.*\\|\\s*$)',
          end: '\\]|$|^(?!.*\\|\\s*$)',
          name: 'meta.section.object.scaml',
          patterns: [{include: 'source.scala'}, {include: '#continuation'}]
        },
        {include: '#interpolated_scala_line'},
        {include: '#scalaline'},
        {match: '/', name: 'punctuation.terminator.tag.scaml'}
      ]
    },
    {
      begin: '^(\\s*):scala$',
      end: '^\\1$',
      name: 'source.scala.embedded.filter.scaml',
      patterns: [{include: 'source.scala'}]
    },
    {
      begin: '^(\\s*):scala$',
      end: '^\\1([^\\s]*)$',
      name: 'source.scala.embedded.filter.scaml',
      patterns: [{include: 'source.scala'}]
    },
    {
      begin: '^(\\s*):(style|sass)$',
      end: '^\\1$',
      name: 'source.sass.embedded.filter.scaml',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*):(java)?script$',
      end: '^\\1([^\\s]*)$',
      name: 'source.js.embedded.filter.scaml',
      patterns: [{include: '#javascript_filter'}]
    },
    {
      begin: '^(\\s*):plain$',
      end: '^\\1([^\\s]*)$',
      name: 'text.plain.embedded.filter.scaml',
      patterns: []
    },
    {
      begin: '^(\\s*)(:scala)',
      beginCaptures: {2: {name: 'keyword.control.filter.scaml'}},
      end: '^(?!\\1  )',
      name: 'source.scala.embedded.filter.scaml',
      patterns: [{include: 'source.scala'}]
    },
    {
      begin: '^(\\s*)(:javascript)',
      beginCaptures: {2: {name: 'keyword.control.filter.scaml'}},
      end: '^(?!\\1  )',
      name: 'source.js.jquery.embedded.filter.scaml',
      patterns: []
    },
    {
      begin: '^(\\s*)(:sass)',
      beginCaptures: {2: {name: 'keyword.control.filter.scaml'}},
      end: '^(?!\\1  )',
      name: 'source.embedded.filter.sass',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*):(styles|sass)$',
      end: '^\\1$',
      name: 'source.sass.embedded.filter.scaml',
      patterns: [{include: 'source.sass'}]
    },
    {
      begin: '^(\\s*):(java)?script$',
      end: '^\\1$',
      name: 'source.js.embedded.filter.scaml',
      patterns: [{include: 'source.js'}]
    },
    {
      begin: '^(\\s*):plain$',
      end: '^\\1$',
      name: 'text.plain.embedded.filter.scaml',
      patterns: []
    },
    {captures: {1: {name: 'meta.escape.scaml'}}, match: '^\\s*(\\\\.)'},
    {
      begin: '^\\s*(?=[&!]?=|-|~)',
      end: '$',
      patterns: [{include: '#interpolated_scala_line'}, {include: '#scalaline'}]
    }
  ],
  repository: {
    continuation: {
      captures: {1: {name: 'punctuation.separator.continuation.scaml'}},
      match: '(\\|)\\s*\\n'
    },
    interpolated_scala: {
      patterns: [
        {
          captures: {
            0: {name: 'punctuation.section.embedded.scala'},
            1: {name: 'source.scala.embedded.source.empty'}
          },
          match: '#\\{(\\})',
          name: 'source.scala.embedded.source'
        },
        {
          begin: '#\\{',
          captures: {0: {name: 'punctuation.section.embedded.scala'}},
          end: '(\\})',
          name: 'source.scala.embedded.source',
          patterns: [
            {include: '#nest_curly_and_self'},
            {include: 'source.scala'}
          ]
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.scala'}},
          match: '(#@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.instance.scala'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.scala'}},
          match: '(#@@)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.class.scala'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.scala'}},
          match: '(#\\$)[a-zA-Z_]\\w*',
          name: 'variable.other.readwrite.global.scala'
        }
      ]
    },
    interpolated_scala_line: {
      begin: '!?==',
      end: '$',
      name: 'meta.line.scala.interpolated.scaml',
      patterns: [{include: '#interpolated_scala'}, {include: '#escaped_char'}]
    },
    javascript_filter: {
      patterns: [{include: '#interpolated_scala'}, {include: 'source.js'}]
    },
    nest_curly_and_self: {
      patterns: [
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.section.scope.scala'}},
          end: '\\}',
          patterns: [{include: '#nest_curly_and_self'}]
        },
        {include: 'source.scala'}
      ]
    },
    scalaline: {
      begin: '!=|&=|==|=|-|~',
      contentName: 'source.scala.embedded.scaml',
      end: '((do|\\{)( \\|[^|]+\\|)?)$|$|^(?!.*\\|\\s*$)',
      endCaptures: {
        1: {name: 'source.scala.embedded.html'},
        2: {name: 'keyword.control.scala.start-block'}
      },
      name: 'meta.line.scala.scaml',
      patterns: [
        {match: '#.*$', name: 'comment.line.number-sign.scala'},
        {include: 'source.scala'},
        {include: '#continuation'}
      ]
    }
  },
  scopeName: 'source.scaml'
}

export default grammar
