// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/marko-js/marko-tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.ts'],
  extensions: ['.marko'],
  names: ['marko', 'markojs'],
  patterns: [
    {
      begin: '^\\s*(style)(\\b[^\\s]*\\.css)?\\s+({)',
      beginCaptures: {
        1: {name: 'support.type.builtin.marko'},
        2: {name: 'storage.modifier.marko.css'},
        3: {name: 'punctuation.section.scope.begin.marko.css'}
      },
      contentName: 'source.css',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.marko.css'}},
      name: 'meta.embedded.css',
      patterns: [{include: 'source.css'}]
    },
    {
      begin: '^\\s*(style)(\\b[^\\s]*\\.less)\\s+({)',
      beginCaptures: {
        1: {name: 'support.type.builtin.marko'},
        2: {name: 'storage.modifier.marko.css'},
        3: {name: 'punctuation.section.scope.begin.marko.css'}
      },
      contentName: 'source.less',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.marko.css'}},
      name: 'meta.embedded.less',
      patterns: [{include: 'source.css.less'}]
    },
    {
      begin: '^\\s*(style)(\\b[^\\s]*\\.scss)\\s+({)',
      beginCaptures: {
        1: {name: 'support.type.builtin.marko'},
        2: {name: 'storage.modifier.marko.css'},
        3: {name: 'punctuation.section.scope.begin.marko.css'}
      },
      contentName: 'source.scss',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.marko.css'}},
      name: 'meta.embedded.scss',
      patterns: [{include: 'source.css.scss'}]
    },
    {
      begin: '^\\s*(style)(\\b[^\\s]*\\.[tj]s)\\s+({)',
      beginCaptures: {
        1: {name: 'support.type.builtin.marko'},
        2: {name: 'storage.modifier.marko.css'},
        3: {name: 'punctuation.section.scope.begin.marko.css'}
      },
      contentName: 'source.ts',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.marko.css'}},
      name: 'meta.embedded.ts',
      patterns: [{include: 'source.ts'}]
    },
    {
      begin:
        '^\\s*(?:((?:static|server|client)\\b)|(?=(?:class|import|export)\\b))',
      beginCaptures: {1: {name: 'keyword.control.static.marko'}},
      contentName: 'source.ts',
      end: '(?=\\n|$)',
      name: 'meta.embedded.ts',
      patterns: [{include: 'source.ts'}]
    },
    {include: '#content-concise-mode'}
  ],
  repository: {
    'attr-value': {
      begin: '\\s*(:?=)\\s*',
      beginCaptures: {1: {patterns: [{include: 'source.ts'}]}},
      contentName: 'source.ts',
      end: '(?=[,;\\]]|/>|(?<=[^=>])>|(?<!^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|[=>]>|[^.]\\.|[^-]-|[^+]\\+|[a-zA-Z0-9%).<\\]}]\\s/|[^.$\\w]await|[^.$\\w]async|[^.$\\w]class|[^.$\\w]function|[^.$\\w]keyof|[^.$\\w]new|[^.$\\w]readonly|[^.$\\w]infer|[^.$\\w]typeof|[^.$\\w]void)\\s+(?![\\n{(+!~*%&^|?:]|[<>/=-]=|[=>]>|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|satisfies|as|extends)\\s+[^:=/,;>]))',
      name: 'meta.embedded.ts',
      patterns: [{include: '#javascript-expression'}]
    },
    attrs: {
      patterns: [
        {include: '#javascript-comments'},
        {
          applyEndPatternLast: true,
          begin:
            '(?:(key|on[a-zA-Z0-9_$-]+|[a-zA-Z0-9_$]+Change|no-update(?:-body)?(?:-if)?)|([a-zA-Z0-9_$][a-zA-Z0-9_$-]*)|(#[a-zA-Z0-9_$][a-zA-Z0-9_$-]*))(:[a-zA-Z0-9_$][a-zA-Z0-9_$-]*)?',
          beginCaptures: {
            1: {name: 'support.type.attribute-name.marko'},
            2: {name: 'entity.other.attribute-name.marko'},
            3: {name: 'support.function.attribute-name.marko'},
            4: {name: 'support.function.attribute-name.marko'}
          },
          end: '(?=.|$)',
          name: 'meta.marko-attribute',
          patterns: [
            {include: '#html-args-or-method'},
            {include: '#attr-value'}
          ]
        },
        {
          begin: '(\\.\\.\\.)',
          beginCaptures: {1: {name: 'keyword.operator.spread.marko'}},
          contentName: 'source.ts',
          end: '(?=[,;\\]]|/>|(?<=[^=>])>|(?<!^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|[=>]>|[^.]\\.|[^-]-|[^+]\\+|[a-zA-Z0-9%).<\\]}]\\s/|[^.$\\w]await|[^.$\\w]async|[^.$\\w]class|[^.$\\w]function|[^.$\\w]keyof|[^.$\\w]new|[^.$\\w]readonly|[^.$\\w]infer|[^.$\\w]typeof|[^.$\\w]void)\\s+(?![\\n{(+!~*%&^|?:]|[<>/=-]=|[=>]>|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|satisfies|as|extends)\\s+[^:=/,;>]))',
          name: 'meta.marko-spread-attribute',
          patterns: [{include: '#javascript-expression'}]
        },
        {
          begin: '\\s*(,(?!,))',
          captures: {1: {name: 'punctuation.separator.comma.marko'}},
          end: '(?=\\S)'
        },
        {include: '#invalid'}
      ]
    },
    cdata: {
      begin: '\\s*<!\\[CDATA\\[',
      beginCaptures: {0: {name: 'punctuation.definition.tag.begin.marko'}},
      contentName: 'string.other.inline-data.marko',
      end: ']]>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
      name: 'meta.tag.metadata.cdata.marko'
    },
    'concise-attr-group': {
      begin: '\\s*(\\[)',
      beginCaptures: {1: {name: 'punctuation.section.scope.begin.marko'}},
      end: ']',
      endCaptures: {0: {name: 'punctuation.section.scope.end.marko'}},
      patterns: [
        {include: '#concise-attr-group'},
        {begin: '\\s+', end: '(?=\\S)'},
        {include: '#attrs'},
        {include: '#invalid'}
      ]
    },
    'concise-comment-block': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-comment-block',
      patterns: [{include: '#content-embedded-comment'}]
    },
    'concise-comment-line': {
      applyEndPatternLast: true,
      begin: '\\s*(--+)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      end: '$',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-comment-line',
      patterns: [{include: '#content-embedded-comment'}]
    },
    'concise-html-block': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-html-block',
      patterns: [{include: '#content-html-mode'}]
    },
    'concise-html-line': {
      captures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'},
        2: {
          patterns: [
            {include: '#cdata'},
            {include: '#doctype'},
            {include: '#declaration'},
            {include: '#javascript-comments-after-whitespace'},
            {include: '#html-comment'},
            {include: '#tag-html'},
            {match: '\\\\.', name: 'text.marko'},
            {include: '#placeholder'},
            {match: '.+?', name: 'text.marko'}
          ]
        },
        3: {name: 'punctuation.section.embedded.scope.end.marko'}
      },
      match: '\\s*(--+)(?=\\s+\\S)(.*)($)',
      name: 'meta.section.marko-html-line'
    },
    'concise-open-tag-content': {
      patterns: [
        {include: '#invalid-close-tag'},
        {include: '#tag-before-attrs'},
        {include: '#concise-semi-eol'},
        {
          begin: '(?!^)[, \\t]',
          end: '(?=--)|(?=\\n)',
          patterns: [
            {include: '#concise-semi-eol'},
            {include: '#concise-attr-group'},
            {begin: '[ \\t]+', end: '(?=\\S|\\n)'},
            {include: '#attrs'},
            {include: '#invalid'}
          ]
        }
      ]
    },
    'concise-script-block': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-script-block',
      patterns: [{include: '#content-embedded-script'}]
    },
    'concise-script-line': {
      applyEndPatternLast: true,
      begin: '\\s*(--+)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      end: '$',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-script-line',
      patterns: [{include: '#content-embedded-script'}]
    },
    'concise-semi-eol': {
      begin: '\\s*(;)',
      beginCaptures: {1: {name: 'punctuation.terminator.marko'}},
      end: '$',
      patterns: [
        {include: '#javascript-comments'},
        {include: '#html-comment'},
        {include: '#invalid'}
      ]
    },
    'concise-style-block': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.css',
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-block',
      patterns: [{include: '#content-embedded-style'}]
    },
    'concise-style-block-less': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.less',
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-block',
      patterns: [{include: '#content-embedded-style-less'}]
    },
    'concise-style-block-scss': {
      begin: '\\s*(--+)\\s*$',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.scss',
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-block',
      patterns: [{include: '#content-embedded-style-scss'}]
    },
    'concise-style-line': {
      applyEndPatternLast: true,
      begin: '\\s*(--+)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.css',
      end: '$',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-line',
      patterns: [{include: '#content-embedded-style'}]
    },
    'concise-style-line-less': {
      applyEndPatternLast: true,
      begin: '\\s*(--+)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.less',
      end: '$',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-line',
      patterns: [{include: '#content-embedded-style-less'}]
    },
    'concise-style-line-scss': {
      applyEndPatternLast: true,
      begin: '\\s*(--+)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.scope.begin.marko'}
      },
      contentName: 'source.scss',
      end: '$',
      endCaptures: {0: {name: 'punctuation.section.embedded.scope.end.marko'}},
      name: 'meta.section.marko-style-line',
      patterns: [{include: '#content-embedded-style-scss'}]
    },
    'content-concise-mode': {
      name: 'meta.marko-concise-content',
      patterns: [
        {include: '#scriptlet'},
        {include: '#javascript-comments'},
        {include: '#cdata'},
        {include: '#doctype'},
        {include: '#declaration'},
        {include: '#html-comment'},
        {include: '#concise-html-block'},
        {include: '#concise-html-line'},
        {include: '#invalid-close-tag'},
        {include: '#tag-html'},
        {
          patterns: [
            {
              begin: '^(\\s*)(?=html-comment\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-comment-block'},
                {include: '#concise-comment-line'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^(\\s*)(?=(?:html-)?style\\b[^\\s]*\\.less\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-style-block-less'},
                {include: '#concise-style-line-less'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^(\\s*)(?=(?:html-)?style\\b[^\\s]*\\.scss\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-style-block-scss'},
                {include: '#concise-style-line-scss'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^(\\s*)(?=(?:html-)?style\\b[^\\s]*\\.[tj]s\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-script-block'},
                {include: '#concise-script-line'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^(\\s*)(?=(?:html-)?style\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-style-block'},
                {include: '#concise-style-line'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^(\\s*)(?=(?:html-)?script\\b)',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#concise-script-block'},
                {include: '#concise-script-line'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            },
            {
              begin: '^([ \\t]*)(?=[a-zA-Z0-9_$@.#])',
              patterns: [
                {include: '#concise-open-tag-content'},
                {include: '#content-concise-mode'}
              ],
              while: '(?=^(?:\\s*[})\\]`]|\\*/|\\s*$|\\1\\s+(\\S|$)))'
            }
          ]
        }
      ]
    },
    'content-embedded-comment': {
      patterns: [
        {include: '#placeholder'},
        {match: '.', name: 'comment.block.marko'}
      ]
    },
    'content-embedded-script': {
      name: 'meta.embedded.ts',
      patterns: [{include: '#placeholder'}, {include: 'source.ts'}]
    },
    'content-embedded-style': {
      name: 'meta.embedded.css',
      patterns: [{include: '#placeholder'}, {include: 'source.css'}]
    },
    'content-embedded-style-less': {
      name: 'meta.embedded.css.less',
      patterns: [{include: '#placeholder'}, {include: 'source.css.less'}]
    },
    'content-embedded-style-scss': {
      name: 'meta.embedded.css.scss',
      patterns: [{include: '#placeholder'}, {include: 'source.css.scss'}]
    },
    'content-html-mode': {
      patterns: [
        {include: '#scriptlet'},
        {include: '#cdata'},
        {include: '#doctype'},
        {include: '#declaration'},
        {include: '#javascript-comments-after-whitespace'},
        {include: '#html-comment'},
        {include: '#invalid-close-tag'},
        {include: '#tag-html'},
        {match: '\\\\.', name: 'text.marko'},
        {include: '#placeholder'},
        {match: '.+?', name: 'text.marko'}
      ]
    },
    declaration: {
      begin: '(<\\?)\\s*([a-zA-Z0-9_$-]*)',
      captures: {
        1: {name: 'punctuation.definition.tag.marko'},
        2: {name: 'entity.name.tag.marko'}
      },
      end: '(\\??>)',
      name: 'meta.tag.metadata.processing.xml.marko',
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name.marko'},
            2: {name: 'punctuation.separator.key-value.html'},
            3: {name: 'string.quoted.double.marko'},
            4: {name: 'string.quoted.single.marko'},
            5: {name: 'string.unquoted.marko'}
          },
          match:
            '((?:[^\\s=?>]+|\\?(?!>))+)(=)(?:("(?:[^"\\\\]+|\\\\.)*")|(\'(?:[^\'\\\\]+|\\\\.)*\')|((?:[^\\s?>]+|\\?(?!>))+))'
        }
      ]
    },
    doctype: {
      begin: '\\s*<!(?=(?i:DOCTYPE\\s))',
      beginCaptures: {0: {name: 'punctuation.definition.tag.begin.marko'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
      name: 'meta.tag.metadata.doctype.marko',
      patterns: [
        {match: '\\G(?i:DOCTYPE)', name: 'entity.name.tag.marko'},
        {begin: '"', end: '"', name: 'string.quoted.double.marko'},
        {match: '[^\\s>]+', name: 'entity.other.attribute-name.marko'}
      ]
    },
    'html-args-or-method': {
      patterns: [
        {include: '#tag-type-params'},
        {
          begin: '\\s*(?=\\()',
          contentName: 'source.ts',
          end: '(?<=\\))',
          name: 'meta.embedded.ts',
          patterns: [{include: 'source.ts#paren-expression'}]
        },
        {
          begin: '(?<=\\))\\s*(?={)',
          contentName: 'source.ts',
          end: '(?<=})',
          name: 'meta.embedded.ts',
          patterns: [{include: 'source.ts'}]
        }
      ]
    },
    'html-comment': {
      begin: '\\s*(<!(--)?)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.marko'}},
      end: '\\2>',
      endCaptures: {0: {name: 'punctuation.definition.comment.marko'}},
      name: 'comment.block.marko'
    },
    invalid: {
      match: '\\S',
      name: 'invalid.illegal.character-not-allowed-here.marko'
    },
    'invalid-close-tag': {
      begin: '\\s*</[^>]*',
      end: '>',
      name: 'invalid.illegal.character-not-allowed-here.marko'
    },
    'javascript-comments': {
      patterns: [
        {
          begin: '\\s*(?=/\\*)',
          contentName: 'source.ts',
          end: '(?<=\\*/)',
          patterns: [{include: 'source.ts'}]
        },
        {
          captures: {0: {patterns: [{include: 'source.ts'}]}},
          contentName: 'source.ts',
          match: '\\s*//.*$'
        }
      ]
    },
    'javascript-comments-after-whitespace': {
      patterns: [
        {
          begin: '(?:^|\\s+)(?=/\\*)',
          contentName: 'source.ts',
          end: '(?<=\\*/)',
          patterns: [{include: 'source.ts'}]
        },
        {
          captures: {0: {patterns: [{include: 'source.ts'}]}},
          contentName: 'source.ts',
          match: '(?:^|\\s+)//.*$'
        }
      ]
    },
    'javascript-expression': {
      patterns: [
        {include: '#javascript-comments'},
        {
          captures: {0: {patterns: [{include: 'source.ts'}]}},
          contentName: 'source.ts',
          match:
            '(?:\\s*\\b(?:as|await|extends|in|instanceof|satisfies|keyof|new|typeof|void))+\\s+(?![:=/,;>])[a-zA-Z0-9_$@#]*'
        },
        {
          applyEndPatternLast: true,
          captures: {
            0: {
              name: 'string.regexp.ts',
              patterns: [{include: 'source.ts#regexp'}, {include: 'source.ts'}]
            }
          },
          contentName: 'source.ts',
          match:
            '(?<![a-zA-Z0-9%).<\\]}])\\s*/(?:[^\\\\\\[/]+|\\\\.|\\[(?:[^\\\\\\]]+|\\\\.)*\\])*/[a-zA-Z]*'
        },
        {include: 'source.ts'}
      ]
    },
    'javascript-placeholder': {
      begin: '\\${',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.ts'}
      },
      contentName: 'source.ts',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.ts'}
      },
      patterns: [{include: 'source.ts'}]
    },
    'open-tag-content': {
      patterns: [
        {include: '#invalid-close-tag'},
        {include: '#tag-before-attrs'},
        {begin: '(?!/?>)', end: '(?=/?>)', patterns: [{include: '#attrs'}]}
      ]
    },
    placeholder: {
      begin: '\\$!?{',
      beginCaptures: {
        0: {name: 'punctuation.definition.template-expression.begin.ts'}
      },
      contentName: 'source.ts',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.template-expression.end.ts'}
      },
      patterns: [{include: 'source.ts'}]
    },
    scriptlet: {
      begin: '^\\s*(\\$)\\s+',
      beginCaptures: {1: {name: 'keyword.control.scriptlet.marko'}},
      contentName: 'source.ts',
      end: '$',
      name: 'meta.embedded.ts',
      patterns: [{include: 'source.ts'}]
    },
    'tag-before-attrs': {
      patterns: [
        {include: '#tag-name'},
        {include: '#tag-shorthand-class-or-id'},
        {
          begin: '/(?![/*])',
          beginCaptures: {
            0: {name: 'punctuation.separator.tag-variable.marko'}
          },
          contentName: 'source.ts',
          end: '(?=[,;(|/><]|:?=|\\s+[^:]|$)',
          name: 'meta.embedded.ts',
          patterns: [
            {
              match: '[a-zA-Z$_][0-9a-zA-Z$_]*',
              name: 'variable.other.constant.object.ts'
            },
            {
              begin: '{',
              captures: {
                0: {name: 'punctuation.definition.binding-pattern.object.ts'}
              },
              end: '}',
              patterns: [
                {include: 'source.ts#object-binding-element'},
                {include: '#javascript-expression'}
              ]
            },
            {
              begin: '\\[',
              captures: {
                0: {name: 'punctuation.definition.binding-pattern.array.ts'}
              },
              end: ']',
              patterns: [
                {include: 'source.ts#array-binding-element'},
                {include: '#javascript-expression'}
              ]
            },
            {
              begin: '\\s*(:)(?!=)',
              beginCaptures: {1: {name: 'keyword.operator.type.annotation.ts'}},
              end: '(?=[,;\\](]|/>|(?<=[^=>])>|(?<!^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|[=>]>|[^.]\\.|[^-]-|[^+]\\+|[a-zA-Z0-9%).<\\]}]\\s/|[^.$\\w]await|[^.$\\w]async|[^.$\\w]class|[^.$\\w]function|[^.$\\w]keyof|[^.$\\w]new|[^.$\\w]readonly|[^.$\\w]infer|[^.$\\w]typeof|[^.$\\w]void)\\s+(?![\\n{+!~*%&^|?:]|[<>/=-]=|[=>]>|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|satisfies|as|extends)\\s+[^:=/,;>]))',
              patterns: [
                {include: 'source.ts#type'},
                {include: '#javascript-expression'}
              ]
            },
            {include: '#javascript-expression'}
          ]
        },
        {
          begin: '\\s*\\|',
          beginCaptures: {0: {name: 'punctuation.section.scope.begin.marko'}},
          contentName: 'source.ts',
          end: '\\|',
          endCaptures: {0: {name: 'punctuation.section.scope.end.marko'}},
          patterns: [
            {include: 'source.ts#comment'},
            {include: 'source.ts#string'},
            {include: 'source.ts#decorator'},
            {include: 'source.ts#destructuring-parameter'},
            {include: 'source.ts#parameter-name'},
            {
              begin: '(:)',
              beginCaptures: {1: {name: 'keyword.operator.type.annotation.ts'}},
              end: '(?=[,|])|(?==[^>])',
              name: 'meta.type.annotation.ts',
              patterns: [{include: 'source.ts#type'}]
            },
            {include: 'source.ts#variable-initializer'},
            {match: ',', name: 'punctuation.separator.parameter.ts'},
            {include: 'source.ts'}
          ]
        },
        {include: '#html-args-or-method'},
        {include: '#attr-value'}
      ]
    },
    'tag-html': {
      patterns: [
        {
          begin:
            '\\s*(<)(?=(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr|const|debug|id|let|lifecycle|log|return)\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/?>',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [{include: '#open-tag-content'}]
        },
        {
          begin: '\\s*(<)(?=html-comment\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>|</html-comment>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              end: '\\s*(?:</>|</html-comment>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-comment'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=((?:html-)?style)\\b[^\\s]*\\.less\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              contentName: 'source.less',
              end: '\\s*(</)((?:html-)?style)?(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-style-less'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=((?:html-)?style)\\b[^\\s]*\\.scss\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              contentName: 'source.scss',
              end: '\\s*(</)((?:html-)?style)?(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-style-scss'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=((?:html-)?style)\\b[^\\s]*\\.[tj]s\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              contentName: 'source.ts',
              end: '\\s*(</)((?:html-)?style)?(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-script'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=((?:html-)?style)\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              contentName: 'source.css',
              end: '\\s*(</)((?:html-)?style)?(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-style'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=((?:html-)?script)\\b)',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              contentName: 'source.ts',
              end: '\\s*(</)((?:html-)?script)?(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {patterns: [{include: '#tag-name'}]},
                3: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-embedded-script'}]
            }
          ]
        },
        {
          begin: '\\s*(<)(?=[.#$]|([a-zA-Z0-9_$@-]+))',
          beginCaptures: {1: {name: 'punctuation.definition.tag.begin.marko'}},
          end: '/>|(?<=</>)|(?<=</\\2>)',
          endCaptures: {0: {name: 'punctuation.definition.tag.end.marko'}},
          patterns: [
            {include: '#open-tag-content'},
            {
              begin: '>',
              beginCaptures: {
                0: {name: 'punctuation.definition.tag.end.marko'}
              },
              end: '\\s*(</)([a-zA-Z0-9_$:@.#-]+)?([^>]*)(>)',
              endCaptures: {
                1: {name: 'punctuation.definition.tag.begin.marko'},
                2: {
                  patterns: [
                    {include: '#tag-name'},
                    {include: '#tag-shorthand-class-or-id'}
                  ]
                },
                3: {patterns: [{include: '#invalid'}]},
                4: {name: 'punctuation.definition.tag.end.marko'}
              },
              patterns: [{include: '#content-html-mode'}]
            }
          ]
        }
      ]
    },
    'tag-name': {
      patterns: [
        {
          applyEndPatternLast: true,
          begin:
            '\\G(style)\\b(\\.[a-zA-Z0-9$_-]+(?:\\.[a-zA-Z0-9$_-]+)*)|([a-zA-Z0-9_@](?:[a-zA-Z0-9_@-]+|:(?!=))*)',
          beginCaptures: {
            1: {name: 'support.type.builtin.marko'},
            2: {name: 'storage.type.marko.css'},
            3: {
              patterns: [
                {
                  match:
                    '(script|style|html-script|html-style|html-comment)(?=\\b)(?![-:@])',
                  name: 'support.type.builtin.marko'
                },
                {
                  match:
                    '(for|if|while|else-if|else|try|await|return)(?=\\b)(?![-:@])',
                  name: 'keyword.control.flow.marko'
                },
                {
                  match:
                    '(const|context|debug|define|id|let|log|lifecycle)(?=\\b)(?![-:@])',
                  name: 'support.function.marko'
                },
                {match: '@.+', name: 'entity.other.attribute-name.marko'},
                {match: '.+', name: 'entity.name.tag.marko'}
              ]
            }
          },
          end: '(?=.)',
          patterns: [{include: '#tag-type-args'}]
        },
        {
          begin: '(?=[a-zA-Z0-9$_]|-[^-])',
          end: '(?=[^a-zA-Z0-9$_-]|$)',
          patterns: [
            {include: '#javascript-placeholder'},
            {
              match: '(?:[a-zA-Z0-9_-]+|\\$(?!{))+',
              name: 'entity.name.tag.marko'
            }
          ]
        }
      ]
    },
    'tag-shorthand-class-or-id': {
      begin: '(?=[#.])',
      end: '$|(?=--|[^a-zA-Z0-9_$#.-])',
      patterns: [
        {include: '#javascript-placeholder'},
        {
          match: '(?:[#.a-zA-Z0-9_-]+|\\$(?!{))+',
          name: 'entity.other.attribute-name.marko'
        }
      ]
    },
    'tag-type-args': {
      applyEndPatternLast: true,
      begin: '(?=<)',
      contentName: 'source.ts',
      end: '(?<=>)',
      name: 'meta.embedded.ts',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?<=>)(?=[ \t]*<)',
          end: '(?=.)',
          patterns: [{include: '#tag-type-params'}]
        },
        {include: 'source.ts#type-arguments'}
      ]
    },
    'tag-type-params': {
      applyEndPatternLast: true,
      begin: '(?!^)[ \t]*(?=<)',
      contentName: 'source.ts',
      end: '(?<=>)',
      name: 'meta.embedded.ts',
      patterns: [{include: 'source.ts#type-parameters'}]
    }
  },
  scopeName: 'text.marko'
}

export default grammar
