// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Lukasa/language-restructuredtext>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rst', '.rest', '.rest.txt', '.rst.txt'],
  injections: {
    'L:meta.numref.restructuredtext': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.placeholder.restructuredtext'}
          },
          match: '(%)s',
          name: 'constant.other.placeholder.figure-number.restructuredtext'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.placeholder.begin.restructuredtext'
            },
            3: {name: 'punctuation.definition.placeholder.end.restructuredtext'}
          },
          match: '({)(name|number)(})',
          name: 'constant.other.placeholder.figure-$2.restructuredtext'
        }
      ]
    }
  },
  names: ['restructuredtext', 'rst'],
  patterns: [{include: '#all'}],
  repository: {
    all: {
      patterns: [
        {include: '#escape'},
        {include: '#line-block'},
        {include: '#tables'},
        {include: '#headings'},
        {include: '#substitution-definition'},
        {include: '#citation-definition'},
        {include: '#footnote-definition'},
        {include: '#directives'},
        {include: '#raw-blocks'},
        {include: '#link-target'},
        {include: '#inlines'},
        {include: '#tag-name'},
        {include: '#doctest'},
        {include: '#domains'},
        {include: '#comments'}
      ]
    },
    citation: {
      captures: {
        1: {name: 'punctuation.definition.citation.begin.restructuredtext'},
        2: {name: 'constant.other.reference.link.restructuredtext'},
        3: {name: 'punctuation.definition.citation.end.restructuredtext'},
        4: {name: 'punctuation.definition.reference.restructuredtext'}
      },
      match:
        '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) (\\[)((?=[A-Za-z])(?:[-_.:+]?[A-Za-z0-9])++)(\\])(_) (?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      name: 'meta.citation.reference.restructuredtext'
    },
    'citation-definition': {
      begin:
        '(?:^(\\s*)|(?!^)\\G\\s*)(\\.\\.)\\s+(\\[)((?=[A-Za-z])(?:[-_.:+]?[A-Za-z0-9])++)(\\])(?:$|\\s+)',
      beginCaptures: {
        2: {name: 'punctuation.definition.directive.restructuredtext'},
        3: {name: 'punctuation.definition.citation.begin.restructuredtext'},
        4: {name: 'entity.name.citation.restructuredtext'},
        5: {name: 'punctuation.definition.citation.end.restructuredtext'}
      },
      contentName: 'string.unquoted.citation.restructuredtext',
      end: '^(?!\\s*$|\\1[ \\t]+\\S)',
      name: 'meta.citation.definition.restructuredtext',
      patterns: [{include: '#all'}]
    },
    comments: {
      patterns: [
        {
          begin: '^([ \\t]+)(\\.\\.)\\s+(?=\\S)(?!\\[[^\\]]+\\](?:$|\\s))',
          beginCaptures: {
            2: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '(?!\\G)^(?:(?=\\S)|(?!\\1[ \\t]+\\S|\\s*$))',
          name: 'comment.block.double-dot.indented.has-text.restructuredtext'
        },
        {
          begin: '^([ \\t]+)(\\.\\.)[ \\t]*$',
          beginCaptures: {
            2: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '(?!\\G)^(?:(?=\\S)|(?!\\1[ \\t]+\\S))',
          name: 'comment.block.double-dot.indented.no-text.restructuredtext',
          patterns: [
            {
              applyEndPatternLast: true,
              begin: '(?<!\\G)(?<=\\S)$',
              end: '^',
              patterns: [{match: '^[ \\t]*$'}]
            }
          ]
        },
        {
          begin: '^(\\.\\.)\\s+(?=\\S)(?!\\[[^\\]]+\\](?:$|\\s))',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '(?!\\G)^(?=\\S)',
          name: 'comment.block.double-dot.unindented.has-text.restructuredtext'
        },
        {
          begin: '^(\\.\\.)[ \\t]*$',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '(?!\\G)^(?=\\S|\\s*$)',
          name: 'comment.block.double-dot.unindented.no-text.restructuredtext',
          patterns: [
            {
              applyEndPatternLast: true,
              begin: '(?<!\\G)(?<=\\S)$',
              end: '^',
              patterns: [{match: '^[ \\t]*$'}]
            }
          ]
        }
      ]
    },
    'directive-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.tag-value.restructuredtext'}
          },
          match: '(:[^:]+:)\\s*(.*)',
          name: 'meta.directive-option.restructuredtext'
        }
      ]
    },
    directives: {
      patterns: [
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(image)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'constant.other.reference.link.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.image.restructuredtext',
          patterns: [{include: '#image-options'}]
        },
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(figure)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'constant.other.reference.link.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.figure.restructuredtext',
          patterns: [{include: '#image-options'}, {include: '#all'}]
        },
        {include: '#toctree'},
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(raw|code(?:-block)?)(::)\\s+(html)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(coffee-?script)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.coffee',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.coffee'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(js|javascript)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.js',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.js'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(typescript)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ts',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.ts'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(json)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.json',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.json'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(css)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.css',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.css'}]
        },
        {
          begin:
            '^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+((?:pseudo)?xml)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.xml',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.xml'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(ruby)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ruby',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(java)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.java',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.java'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(erlang)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.erlang',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.erlang'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(csharp|c#)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.cs',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.cs'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(php[3-5]?)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.php',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.html.php'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(shell|(ba|k)?sh)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.shell',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(py(thon)?|sage)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(ipython)(::)\\s+(py(thon)?)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(stata)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.stata',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.stata'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(sas)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.python'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(objective-?c|obj-?c)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.objc',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.objc'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(yaml)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.yaml',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.yaml'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?)(::)\\s+(cfg|dosini|ini)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ini',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [
            {
              captures: {1: {patterns: [{include: 'source.ini'}]}},
              match: '(?:^|\\G)[ \\t]*(\\S.*)'
            }
          ]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(manpage|man|[ntg]?roff)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'text.embedded.roff',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [
            {
              captures: {1: {patterns: [{include: 'text.roff'}]}},
              match: '(?:^|\\G)[ \\t]*(\\S.*)'
            }
          ]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+([dg]?pic|pikchr|pic2plot|dformat)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.pic',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.pic'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(ditroff|groff[-_]?out|grout)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.ditroff',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.ditroff'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+((?:xe)?(?:la)?tex)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'text.embedded.tex.latex',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.tex.latex'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(texinfo)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'text.embedded.texinfo',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'text.texinfo'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(postscript|ps|eps)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.postscript',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.postscript#main'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(posh|powershell|ps1|psm1|pwsh)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.powershell',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.powershell'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+((?:dos|win)?batch|bat)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.batchfile',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.batchfile'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(swift)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.swift',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.swift'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)\\s+(applescript)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'source.embedded.applescript',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: 'source.applescript'}]
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(code(?:-block)?|raw)(::)(?:\\s+([-\\w]+))?(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'markup.raw.inner.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)'
        },
        {
          begin:
            '(?i)^([ \\t]*)(\\.\\.)\\s+(parsed-literal)(::)(?:\\s+([-\\w]+))?(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'entity.name.directive.restructuredtext'}
          },
          contentName: 'markup.raw.inner.parsed.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          patterns: [{include: '#inlines'}]
        },
        {
          begin: '(?i)^([ \\t]*)(\\.\\.)\\s+(math)(::)(?=\\s*$)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'markup.math.block.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'source.embedded.latex',
          patterns: [{include: 'text.tex#math'}]
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'},
            4: {
              patterns: [
                {
                  match: '<|>',
                  name: 'punctuation.definition.bracket.angle.restructuredtext'
                },
                {
                  match: ',',
                  name: 'punctuation.delimiter.comma.restructuredtext'
                },
                {
                  match: '[^\\s<>,]+',
                  name: 'entity.name.directive.restructuredtext'
                }
              ]
            }
          },
          match: '(?i)^\\s*(\\.\\.)\\s+(option)(::)\\s*(.+)?$',
          name: 'meta.option.directive.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          match: '^\\s*(\\.\\.)\\s+([A-z][-A-z0-9_]+)(::)(?=\\s*$)',
          name: 'meta.other.directive.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.restructuredtext'},
            2: {name: 'support.directive.restructuredtext'},
            3: {name: 'punctuation.separator.key-value.restructuredtext'},
            4: {name: 'entity.name.directive.restructuredtext'}
          },
          match: '^\\s*(\\.\\.)\\s+([A-z][-A-z0-9_]+)(::)\\s+(.+?)(?=\\s*$)',
          name: 'meta.other.directive.restructuredtext'
        }
      ]
    },
    doctest: {
      patterns: [
        {
          begin: '^(?=(\\s+)>>>(?:\\s+\\S.*)?[ \\t]*$)',
          end: '^(?=\\s*$)|^(?=(?:(?!\\1)\\s+)?\\S)',
          name: 'meta.doctest.indented.restructuredtext',
          patterns: [
            {
              begin: '^(\\s+)(>>>)\\s+(\\S.*)?(?=[ \\t]*$)',
              beginCaptures: {
                2: {
                  name: 'punctuation.separator.prompt.primary.doctest.restructuredtext'
                },
                3: {
                  name: 'source.embedded.python',
                  patterns: [{include: 'source.python'}]
                }
              },
              end: '(?=^\\s*$)|^(?!\\1((?!(?:>>>|\\.{3})\\s+)\\s*\\S.*[ \\t]*)$)',
              endCaptures: {
                1: {name: 'markup.raw.output.doctest.restructuredtext'}
              },
              patterns: [
                {
                  captures: {
                    1: {name: 'markup.raw.output.doctest.restructuredtext'}
                  },
                  match: '^\\s+(?!(?:>>>|\\.{3})\\s+)(\\S.*)(?=[ \\t]*$)'
                }
              ]
            },
            {
              begin: '^(\\s+)(\\.{3})\\s+(\\S.*)?(?=[ \\t]*$)',
              beginCaptures: {
                2: {
                  name: 'punctuation.separator.prompt.secondary.doctest.restructuredtext'
                },
                3: {
                  name: 'source.embedded.python',
                  patterns: [{include: 'source.python'}]
                }
              },
              end: '(?=^\\s*$)|^(?!\\1((?!(?:>>>|\\.{3})\\s+)\\s*\\S.*[ \\t]*)$)',
              endCaptures: {
                1: {name: 'markup.raw.output.doctest.restructuredtext'}
              },
              patterns: [
                {
                  captures: {
                    1: {name: 'markup.raw.output.doctest.restructuredtext'}
                  },
                  match: '^\\s+(?!(?:>>>|\\.{3})\\s+)(\\S.*)(?=[ \\t]*$)'
                }
              ]
            },
            {
              match: '^(?!(?:>>>|\\.{3})\\s+)(\\s*\\S.*[ \\t]*)$',
              name: 'markup.raw.output.doctest.restructuredtext'
            }
          ]
        },
        {
          begin: '^(?=>>>(?:\\s+\\S.*)?[ \\t]*$)',
          end: '^(?=\\s*$)',
          name: 'meta.doctest.unindented.restructuredtext',
          patterns: [
            {
              captures: {
                1: {
                  name: 'punctuation.separator.prompt.primary.doctest.restructuredtext'
                },
                2: {
                  name: 'source.embedded.python',
                  patterns: [{include: 'source.python'}]
                }
              },
              match: '^(>>>)\\s+(\\S.*)?(?=[ \\t]*$)'
            },
            {
              captures: {
                1: {
                  name: 'punctuation.separator.prompt.secondary.doctest.restructuredtext'
                },
                2: {
                  name: 'source.embedded.python',
                  patterns: [{include: 'source.python'}]
                }
              },
              match: '^(\\.{3})\\s+(\\S.*)?(?=[ \\t]*$)'
            },
            {
              match: '^(?!(?:>>>|\\.{3})\\s+)(\\s*\\S.*[ \\t]*)$',
              name: 'markup.raw.output.doctest.restructuredtext'
            }
          ]
        }
      ]
    },
    'doctree-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.class-list.restructuredtext'}
          },
          match: '(?i)(:class:)\\s*(.*)',
          name: 'meta.doctree-option.class.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.name.restructuredtext'}
          },
          match: '(?i)(:name:)\\s*(.*)',
          name: 'meta.doctree-option.name.restructuredtext'
        }
      ]
    },
    domains: {
      patterns: [
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(py)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'source.embedded.python',
          end: '^(?!\\s*$|\\1[ \\t]{6,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: 'source.python'}]},
                2: {name: 'punctuation.parenthesis.begin.python'},
                3: {
                  patterns: [
                    {
                      match: '\\\\.',
                      name: 'constant.character.escape.restructuredtext'
                    },
                    {include: 'source.python'}
                  ]
                },
                4: {name: 'punctuation.parenthesis.end.python'}
              },
              match: '(?:\\G|^)([^(]*)(\\()([^\\\\)]*\\\\[^)]*)(\\))'
            },
            {include: 'source.python'}
          ]
        },
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(c)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'source.embedded.c',
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [{include: 'source.c'}]
        },
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(cpp)(::?)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {
                  name: 'source.embedded.cpp',
                  patterns: [{include: 'source.c++'}]
                },
                2: {name: 'constant.character.escape.newline.restructuredtext'}
              },
              match: '(.+)(\\\\?)$'
            }
          ]
        },
        {
          begin: '(?i)^(\\s*)(\\.\\.)\\s+(js)(:)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext',
          patterns: [
            {
              captures: {
                1: {
                  name: 'source.embedded.js',
                  patterns: [{include: 'source.js'}]
                },
                2: {name: 'constant.character.escape.newline.restructuredtext'}
              },
              match: '(.+)(\\\\?)$'
            }
          ]
        },
        {
          begin: '^(\\s*)(\\.\\.)\\s+([^:]+)(::?)([^:]+)(::)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'support.directive.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'support.directive.restructuredtext'},
            6: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          contentName: 'string.unquoted.domain.restructuredtext',
          end: '^(?!\\s*$|\\1[ \\t]{5,}\\S)',
          name: 'meta.sphinx-domain.restructuredtext'
        }
      ]
    },
    emphasis: {
      patterns: [
        {
          begin:
            '(?x)\n(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))\n\\*\\*\n(?=\\S)\n(?!\\*\\*(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          beginCaptures: {
            0: {name: 'punctuation.definition.bold.begin.restructuredtext'}
          },
          contentName: 'markup.bold.emphasis.strong.restructuredtext',
          end: '(?<=\\S)\\*\\*(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])|^(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.bold.end.restructuredtext'}
          },
          patterns: [{include: '#escape'}]
        },
        {
          begin:
            '(?x)\n(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))\n\\*\n(?=\\S)\n(?!\\*(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          beginCaptures: {
            0: {name: 'punctuation.definition.italic.begin.restructuredtext'}
          },
          contentName: 'markup.italic.emphasis.restructuredtext',
          end: '(?<=\\S)\\*(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])|^(?=\\s*$)',
          endCaptures: {
            0: {name: 'punctuation.definition.italic.end.restructuredtext'}
          },
          patterns: [{include: '#escape'}]
        }
      ]
    },
    escape: {
      match: '\\\\.',
      name: 'constant.character.escape.backslash.restructuredtext'
    },
    footnote: {
      captures: {
        1: {
          name: 'meta.footnote.reference.numbered.manual.restructuredtext',
          patterns: [{include: '#footnote-name'}]
        },
        2: {
          name: 'meta.footnote.reference.numbered.auto.restructuredtext',
          patterns: [{include: '#footnote-name'}]
        },
        3: {
          name: 'meta.footnote.reference.symbolic.auto.restructuredtext',
          patterns: [{include: '#footnote-name'}]
        }
      },
      match:
        '(?x)\n(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))\n(?:\n\t# Manually-numbered: “[0]_”\n\t(\\[[0-9]+\\]_)\n\t|\n\t# Auto-numbered: “[#]_” or “[#foo]_”\n\t(\\[\\#(?:(?=\\w)(?!_)(?:[-_.:+]?[A-Za-z0-9])++)?\\]_)\n\t|\n\t# Auto-symbol: “[*]_”\n\t(\\[\\*\\]_)\n)\n(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])'
    },
    'footnote-definition': {
      begin: '^(\\s*)(\\.\\.)\\s+(\\[[^\\]]+\\])(?:$|\\s+)',
      beginCaptures: {
        2: {name: 'punctuation.definition.link.restructuredtext'},
        3: {patterns: [{include: '#footnote-name'}]}
      },
      contentName: 'string.unquoted.footnote.restructuredtext',
      end: '^(?!\\s*$|\\1[ \\t]+\\S)',
      name: 'meta.footnote.definition.restructuredtext',
      patterns: [{include: '#all'}]
    },
    'footnote-name': {
      begin: '(?:\\G|^)\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.footnote.begin.restructuredtext'}
      },
      contentName: 'constant.other.reference.link.restructuredtext',
      end: '(\\])(_)?',
      endCaptures: {
        1: {name: 'punctuation.definition.footnote.end.restructuredtext'},
        2: {name: 'punctuation.definition.reference.restructuredtext'}
      },
      name: 'meta.footnote-name.restructuredtext'
    },
    headings: {
      captures: {1: {name: 'punctuation.definition.heading.restructuredtext'}},
      match: '^(([-=~`#"^+*:.\'_])\\2{2,})(?=\\s*$)',
      name: 'markup.heading.restructuredtext'
    },
    'image-options': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.tag-value.restructuredtext'}
          },
          match: '(?i)(:alt:)\\s*(.*)',
          name: 'meta.image-option.alt.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(?i)(:height:)\\s*(.*)',
          name: 'meta.image-option.height.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(?i)(:width:)\\s*(.*)',
          name: 'meta.image-option.width.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {patterns: [{include: '#length'}]}
          },
          match: '(?i)(:scale:)\\s*(.*)',
          name: 'meta.image-option.scale.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'keyword.language.image-alignment.restructuredtext'}
          },
          match:
            '(?i)(:align:)\\s*(?:(top|middle|bottom|left|center|right)\\b)?',
          name: 'meta.image-option.align.restructuredtext'
        },
        {
          captures: {
            1: {patterns: [{include: '#tag-name'}]},
            2: {name: 'string.other.target.restructuredtext'}
          },
          match: '(?i)(:target:)\\s*(.*)?',
          name: 'meta.image-option.target.restructuredtext'
        },
        {include: '#doctree-options'},
        {include: '#directive-options'}
      ]
    },
    inlines: {
      patterns: [
        {include: '#escape'},
        {include: '#quoted'},
        {include: '#emphasis'},
        {include: '#link-target-inline'},
        {include: '#interpreted-text'},
        {include: '#substitution-reference'},
        {include: '#literal'},
        {include: '#link-reference'},
        {include: '#footnote'},
        {include: '#citation'}
      ]
    },
    'interpreted-text': {
      patterns: [
        {include: '#interpreted-text-marked'},
        {include: '#interpreted-text-unmarked'}
      ]
    },
    'interpreted-text-marked': {
      begin:
        '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) ((:)\\w+(?:[-_.:+]\\w+)*+(:)) (?=`(?=\\S)(?!`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])))',
      beginCaptures: {
        1: {name: 'keyword.operator.role.restructuredtext'},
        2: {name: 'punctuation.definition.role.name.begin.restructuredtext'},
        3: {name: 'punctuation.definition.role.name.end.restructuredtext'}
      },
      end: '(?!\\G)',
      name: 'meta.interpreted-text.marked.leading-marker.restructuredtext',
      patterns: [
        {
          begin: '\\G`',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.interpreted-text.begin.restructuredtext'
            }
          },
          end: '(?=^\\s*$)|`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
          endCaptures: {
            0: {
              name: 'punctuation.definition.interpreted-text.end.restructuredtext'
            }
          },
          patterns: [{include: '#roles'}]
        }
      ]
    },
    'interpreted-text-unmarked': {
      captures: {
        1: {
          name: 'punctuation.definition.interpreted-text.begin.restructuredtext'
        },
        2: {
          name: 'string.interpolated.restructuredtext',
          patterns: [{include: '#escapes'}]
        },
        3: {
          name: 'punctuation.definition.interpreted-text.end.restructuredtext'
        }
      },
      match:
        '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) (`)((?!`|\\s)(?:[^`\\\\]|\\\\.)++)(`) (?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      name: 'meta.interpreted-text.unmarked.restructuredtext'
    },
    length: {
      captures: {
        1: {name: 'keyword.other.${1:/downcase}-unit.restructuredtext'},
        2: {name: 'keyword.other.percentile-unit.restructuredtext'}
      },
      match: '[\\d.]+\\s*(?i:(em|ex|px|in|cm|mm|pt|pc)|(%))?',
      name: 'constant.numeric.length.restructuredtext'
    },
    'line-block': {
      patterns: [
        {
          begin: '(?:\\G|^)(\\s+)(\\|)(?:(\\s+)(?=\\S)|(?=\\s*$))',
          beginCaptures: {
            2: {patterns: [{include: '#line-block-border'}]},
            3: {
              name: 'punctuation.whitespace.leading.line-indent.restructuredtext'
            }
          },
          contentName: 'markup.quote.preserved-whitespace.restructuredtext',
          end: '^(?=\\1\\|(?:\\s+(?=\\S)|(?=\\s*$))|\\s*$|(?:(?!\\1)\\s+)?\\S|\\1(?:[^|\\s]|\\|\\S))',
          name: 'meta.line-block.indented.restructuredtext'
        },
        {
          begin: '(?:\\G|^)(\\|)(?:(\\s+)(?=\\S)|(?=\\s*$))',
          beginCaptures: {
            1: {patterns: [{include: '#line-block-border'}]},
            2: {
              name: 'punctuation.whitespace.leading.line-indent.restructuredtext'
            }
          },
          contentName: 'markup.quote.preserved-whitespace.restructuredtext',
          end: '^(?=\\|(?:\\s+(?=\\S)|(?=\\s*$))|\\s*$|[^|\\s]|\\|\\S)',
          name: 'meta.line-block.unindented.restructuredtext'
        }
      ]
    },
    'line-block-border': {
      captures: {0: {name: 'sublimelinter.gutter-mark.restructuredtext'}},
      match: '\\|',
      name: 'punctuation.definition.quote.line-block.restructuredtext'
    },
    link: {
      patterns: [
        {
          captures: {
            1: {
              patterns: [
                {
                  begin: '(?:^|\\G)',
                  end: '$',
                  name: 'entity.name.reference.restructuredtext',
                  patterns: [{include: '#escape'}]
                }
              ]
            },
            2: {name: 'meta.link-destination.restructuredtext'},
            3: {
              name: 'punctuation.definition.angle.bracket.begin.restructuredtext'
            },
            4: {
              name: 'constant.other.reference.link.restructuredtext',
              patterns: [{include: '#escape'}]
            },
            5: {
              name: 'punctuation.definition.reference.named.restructuredtext'
            },
            6: {
              name: 'punctuation.definition.angle.bracket.end.restructuredtext'
            }
          },
          match:
            '\\G\\s*((?:[^`\\\\]|\\\\.)+\\s+)?((<)((?:[^`\\\\<>_]|_(?!>)|\\\\.)+)(_)?(>))\\s*(?=`|$)'
        },
        {
          captures: {
            1: {
              patterns: [
                {
                  begin: '(?:^|\\G)',
                  contentName: 'constant.other.reference.link.restructuredtext',
                  end: '$',
                  name: 'meta.link-destination.restructuredtext',
                  patterns: [{include: '#escape'}]
                }
              ]
            }
          },
          match: '\\G\\s*((?:[^`\\\\]|\\.)++)\\s*(?=`|$)'
        }
      ]
    },
    'link-reference': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#link-reference-quoted'}]},
            2: {patterns: [{include: '#link-reference-unquoted'}]}
          },
          match:
            '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) (?:(`(?:[^\\\\`]|\\\\.)*+`__?)|\\b((?=\\w)(?!_)(?:[-_.:+]?[A-Za-z0-9])++__?)) (?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])'
        },
        {
          begin:
            '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) (?=`(?:[^\\\\`]|\\\\.)++$)',
          end: '(?!\\G)',
          patterns: [{include: '#link-reference-quoted'}]
        }
      ]
    },
    'link-reference-quoted': {
      begin: '(?:\\G|^)`',
      beginCaptures: {
        0: {name: 'punctuation.definition.link.begin.restructuredtext'}
      },
      end: '(`)(?:(__)\\b|(_)\\b)?',
      endCaptures: {
        1: {name: 'punctuation.definition.link.end.restructuredtext'},
        2: {
          name: 'punctuation.definition.reference.anonymous.restructuredtext'
        },
        3: {name: 'punctuation.definition.reference.named.restructuredtext'}
      },
      name: 'meta.link-reference.quoted.restructuredtext',
      patterns: [
        {
          begin: '\\G(?=.*(?:\\G|(?<=\\s))<(?:[^\\\\<>`]|\\\\.)++>\\s*(?:$|`))',
          end: '(?=\\s*(?:$|`))',
          name: 'meta.embedded-target.restructuredtext',
          patterns: [{include: '#link'}]
        },
        {
          captures: {
            1: {
              name: 'constant.other.reference.link.restructuredtext',
              patterns: [{include: '#escape'}]
            }
          },
          match: '(?:\\G|^\\s*)((?!\\s)(?:[^\\\\`]|\\\\.)++)'
        }
      ]
    },
    'link-reference-unquoted': {
      begin:
        '(?:\\G|(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])))(?=\\w)(?!_)',
      contentName: 'constant.other.reference.link.restructuredtext',
      end: '(?:(__)|(_))(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])|(?=_\\W)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.reference.anonymous.restructuredtext'
        },
        2: {name: 'punctuation.definition.reference.named.restructuredtext'}
      },
      name: 'meta.link-reference.unquoted.restructuredtext',
      patterns: [{match: '[-_.:+][A-Za-z0-9]'}, {include: '#escape'}]
    },
    'link-target': {
      patterns: [
        {
          begin:
            '(?:^(\\s*)|(?!^)\\G\\s*)(?:(\\.\\.)\\s+(__)(:)|(__))(?:$|\\s+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'constant.language.anonymous-link.restructuredtext'},
            4: {name: 'punctuation.separator.key-value.restructuredtext'},
            5: {name: 'constant.language.anonymous-link.restructuredtext'}
          },
          end: '^(?:(?=\\s*$)|(?!\\1[ \\t]+\\S))',
          name: 'meta.definition.link-target.anonymous.restructuredtext',
          patterns: [{include: '#link-target-innards'}]
        },
        {
          begin:
            '(?x)\n(?: ^(\\s*) | (?!^)\\G\\s*)\n(\\.\\.) \\s+ (_)\n(\n\t# Phrase reference: “.. _`name`: …”\n\t(`) ((?:[^\\\\`]|\\\\.)*+) (`)\n\t|\n\t# Name reference:   “.. _name: …”\n\t(?!`)\n\t(\n\t\t(?: [^\\\\:]\n\t\t|   : (?!$|\\s)\n\t\t|   \\\\.\n\t\t)++\n\t)\n) (:) (?:$|\\s+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {name: 'punctuation.definition.link.restructuredtext'},
            4: {name: 'entity.name.link.restructuredtext'},
            5: {name: 'punctuation.definition.link.begin.restructuredtext'},
            6: {patterns: [{include: '#escape'}]},
            7: {name: 'punctuation.definition.link.end.restructuredtext'},
            8: {patterns: [{include: '#escape'}]},
            9: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?:(?=\\s*$)|(?!\\1[ \\t]+\\S))',
          name: 'meta.definition.link-target.named.restructuredtext',
          patterns: [{include: '#link-target-innards'}]
        }
      ]
    },
    'link-target-inline': {
      captures: {
        1: {name: 'punctuation.definition.link.restructuredtext'},
        2: {name: 'entity.name.link.restructuredtext'},
        3: {name: 'punctuation.definition.link.begin.restructuredtext'},
        4: {name: 'punctuation.definition.link.end.restructuredtext'}
      },
      match:
        '(?x) (?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])) (_)((`)(?:[^\\\\`]|\\\\.)*+)(`) (?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      name: 'meta.definition.link-target.inline.internal.restructuredtext'
    },
    'link-target-innards': {
      patterns: [
        {
          captures: {0: {patterns: [{include: '#link-reference'}]}},
          match:
            '\\G(?<=[ \\t])(?:`(?:[^\\\\`]|\\\\.)*+`|\\b(?=\\w)(?!_)(?:[-_.:+]?[A-Za-z0-9])++)_(?=\\s*$)'
        },
        {
          begin: '\\G(?<=[ \\t])(?=`(?:[^\\\\`]|\\\\.)*+$)',
          end: '(?!\\G)',
          patterns: [{include: '#link-reference-quoted'}]
        },
        {
          applyEndPatternLast: true,
          begin: '\\G(?=\\s*$)',
          end: '^(\\s*(?:`(?:[^\\\\`]|\\\\.)*+`|\\b(?=\\w)(?!_)(?:[-_.:+]?[A-Za-z0-9])++)__?\\b)?|(?<=`__|`_)(?=\\s*$)',
          endCaptures: {1: {patterns: [{include: '#link-reference'}]}},
          patterns: [
            {
              begin: '^\\s*(?=`(?:[^\\\\`]|\\\\.)*+$)',
              end: '(?!\\G)',
              patterns: [{include: '#link-reference-quoted'}]
            }
          ]
        },
        {
          captures: {
            1: {
              name: 'constant.other.reference.link.restructuredtext',
              patterns: [{include: '#escape'}]
            }
          },
          match: '(?:^\\s*|\\G|(?<=\\s))((?:[^\\\\\\s]|\\\\.)++)(?=$|\\s)'
        }
      ]
    },
    literal: {
      begin:
        '(?x)\n(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))\n``\n(?=\\S)\n(?!``(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      beginCaptures: {
        0: {name: 'punctuation.definition.literal.begin.restructuredtext'}
      },
      contentName: 'markup.raw.monospace.literal.restructuredtext',
      end: '(?<=\\S)``(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      endCaptures: {
        0: {name: 'punctuation.definition.literal.end.restructuredtext'}
      }
    },
    quoted: {
      match:
        '(?x)\n(?: \' (?:\\*{1,2}|`|_||) \'\n|   " (?:\\*{1,2}|`|_||) "\n|   < (?:\\*{1,2}|`|_||) >\n| \\( (?:\\*{1,2}|`|_||) \\)\n| \\[ (?:\\*{1,2}|`|_||) \\]\n| \\{ (?:\\*{1,2}|`|_||) \\}\n|   « (?:\\*{1,2}|`|_||) »\n|   ‹ (?:\\*{1,2}|`|_||) ›\n|   » (?:\\*{1,2}|`|_||) [«»]\n|   › (?:\\*{1,2}|`|_||) [‹›]\n|   ‘ (?:\\*{1,2}|`|_||) [’‚]\n|   ’ (?:\\*{1,2}|`|_||) ’\n|   ‚ (?:\\*{1,2}|`|_||) [‘’]\n|   “ (?:\\*{1,2}|`|_||) [”„]\n|   „ (?:\\*{1,2}|`|_||) [“”]\n|   ” (?:\\*{1,2}|`|_||) ”\n|  （ (?:\\*{1,2}|`|_||) ）\n|  ﹙ (?:\\*{1,2}|`|_||) ﹚\n|  ⁽ (?:\\*{1,2}|`|_||) ⁾\n|  ₍ (?:\\*{1,2}|`|_||) ₎\n|  ［ (?:\\*{1,2}|`|_||) ］\n|  ｛ (?:\\*{1,2}|`|_||) ｝\n|  ﹛ (?:\\*{1,2}|`|_||) ﹜\n|  ༼ (?:\\*{1,2}|`|_||) ༽\n|  ᚛ (?:\\*{1,2}|`|_||) ᚜\n|  ⁅ (?:\\*{1,2}|`|_||) ⁆\n|  ⧼ (?:\\*{1,2}|`|_||) ⧽\n|  ⦃ (?:\\*{1,2}|`|_||) ⦄\n|  ⦅ (?:\\*{1,2}|`|_||) ⦆\n|  ｟ (?:\\*{1,2}|`|_||) ｠\n|  ⦇ (?:\\*{1,2}|`|_||) ⦈\n|  ⦉ (?:\\*{1,2}|`|_||) ⦊\n|  ⦋ (?:\\*{1,2}|`|_||) ⦌\n#|  ⦍ (?:\\*{1,2}|`|_||) ⦐   # XXX: For some reason, Docutils allows this\n|  ⦏ (?:\\*{1,2}|`|_||) ⦎\n|  ⦑ (?:\\*{1,2}|`|_||) ⦒\n|  ⦓ (?:\\*{1,2}|`|_||) ⦔\n|  ⦕ (?:\\*{1,2}|`|_||) ⦖\n|  ⦗ (?:\\*{1,2}|`|_||) ⦘\n|  ⟅ (?:\\*{1,2}|`|_||) ⟆\n|  ⟦ (?:\\*{1,2}|`|_||) ⟧\n|  ⟨ (?:\\*{1,2}|`|_||) ⟩\n|  ⟪ (?:\\*{1,2}|`|_||) ⟫\n|  ❨ (?:\\*{1,2}|`|_||) ❩\n|  ❪ (?:\\*{1,2}|`|_||) ❫\n|  ❬ (?:\\*{1,2}|`|_||) ❭\n|  ❮ (?:\\*{1,2}|`|_||) ❯\n|  ❰ (?:\\*{1,2}|`|_||) ❱\n|  ❲ (?:\\*{1,2}|`|_||) ❳\n|  ❴ (?:\\*{1,2}|`|_||) ❵\n|  ⸂ (?:\\*{1,2}|`|_||) ⸃\n|  ⸃ (?:\\*{1,2}|`|_||) ⸂\n|  ⸄ (?:\\*{1,2}|`|_||) ⸅\n|  ⸅ (?:\\*{1,2}|`|_||) ⸄\n|  ⸉ (?:\\*{1,2}|`|_||) ⸊\n|  ⸊ (?:\\*{1,2}|`|_||) ⸉\n|  ⸌ (?:\\*{1,2}|`|_||) ⸍\n|  ⸍ (?:\\*{1,2}|`|_||) ⸌\n|  ⸜ (?:\\*{1,2}|`|_||) ⸝\n|  ⸝ (?:\\*{1,2}|`|_||) ⸜\n|  〈 (?:\\*{1,2}|`|_||) 〉\n|  〈 (?:\\*{1,2}|`|_||) 〉\n|  《 (?:\\*{1,2}|`|_||) 》\n|  「 (?:\\*{1,2}|`|_||) 」\n|  ｢ (?:\\*{1,2}|`|_||) ｣\n|  『 (?:\\*{1,2}|`|_||) 』\n|  【 (?:\\*{1,2}|`|_||) 】\n|  〔 (?:\\*{1,2}|`|_||) 〕\n|  ﹝ (?:\\*{1,2}|`|_||) ﹞\n|  〖 (?:\\*{1,2}|`|_||) 〗\n|  〘 (?:\\*{1,2}|`|_||) 〙\n|  〚 (?:\\*{1,2}|`|_||) 〛\n|  ⧘ (?:\\*{1,2}|`|_||) ⧙\n|  ⧚ (?:\\*{1,2}|`|_||) ⧛\n) '
    },
    'raw-blocks': {
      begin: '^(?!\\s*\\.\\.\\s\\w+)(\\s*)(.*)(::)$',
      beginCaptures: {
        2: {patterns: [{include: '#inlines'}]},
        3: {name: 'punctuation.section.raw.restructuredtext'}
      },
      contentName: 'meta.raw.block.restructuredtext',
      end: '^(?!\\s*$|\\1[ \\t]+\\S)',
      patterns: [{match: '.+', name: 'markup.raw.inner.restructuredtext'}]
    },
    'role-abbr': {
      patterns: [
        {
          begin: '(?i)(?<=:abbr:`)\\G',
          end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          patterns: [
            {include: '#escape'},
            {
              begin: '\\G\\s*',
              contentName: 'constant.other.abbreviation.restructuredtext',
              end: '(?=\\s*(?:\\(|`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])))',
              name: 'meta.abbreviation.restructuredtext',
              patterns: [{include: '#escape'}]
            },
            {
              begin: '\\(',
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.string.begin.restructuredtext'
                }
              },
              contentName: 'string.quoted.brackets.restructuredtext',
              end: '(\\))|((?:[^\\x29`]|\\.)*+)(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
              endCaptures: {
                1: {name: 'punctuation.definition.string.end.restructuredtext'},
                2: {
                  name: 'invalid.illegal.unclosed-parenthetical.restructuredtext'
                }
              },
              name: 'meta.explanation.restructuredtext',
              patterns: [{include: '#escape'}]
            }
          ]
        },
        {
          begin: '(?i)(?<=:abbreviation:`|:acronym:`|:a[bc]:`)\\G',
          contentName: 'constant.other.abbreviation.restructuredtext',
          end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          name: 'meta.abbreviation.restructuredtext',
          patterns: [{include: '#escape'}]
        }
      ]
    },
    'role-code': {
      begin: '(?i)(?<=:code:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.raw.code.monospace.literal.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-command': {
      begin: '(?i)(?<=:(command|program):`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.bold.${1:/downcase}.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-dfn': {
      begin: '(?i)(?<=:dfn:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.definition.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-emphasis': {
      begin: '(?i)(?<=:emphasis:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.emphasis.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-file': {
      begin: '(?i)(?<=:file:`)\\G',
      contentName: 'constant.other.reference.link.restructuredtext',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'meta.link-destination.filename.restructuredtext',
      patterns: [{include: '#escape'}, {include: '#role-variable'}]
    },
    'role-guilabel': {
      begin: '(?xi) (?: (?<=:guilabel:`) |   (?<=:menuselection:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'string.other.ui-label.restructuredtext',
      patterns: [
        {
          match: '&&',
          name: 'constant.character.escape.ampersand.restructuredtext'
        },
        {
          captures: {
            1: {name: 'keyword.operator.menu.accelerator.restructuredtext'},
            2: {name: 'string.other.link.restructuredtext'},
            3: {patterns: [{include: '#escape'}]}
          },
          match: '(&)([^\\\\`]|(\\\\`))',
          name: 'meta.accelerator.restructuredtext'
        },
        {
          match: '-->',
          name: 'keyword.operator.menu.separator.restructuredtext'
        },
        {include: '#escape'}
      ]
    },
    'role-html': {
      begin: '(?xi) (?: (?<=:html:`) |   (?<=:raw-html:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'text.embedded.html.basic',
      patterns: [{include: 'text.html.basic'}]
    },
    'role-kbd': {
      begin: '(?i)(?<=:kbd:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'meta.keystrokes.restructuredtext',
      patterns: [
        {match: '[-+^]', name: 'meta.separator.combinator.restructuredtext'},
        {
          captures: {
            1: {name: 'markup.inserted.keystroke.restructuredtext'},
            2: {patterns: [{include: '#escape'}]}
          },
          match:
            '(?xi) (?:\\G|(?<=[-+^\\s`])) ( caps   \\s+ lock | page   \\s+ down | page   \\s+ up | scroll \\s+ lock | num    \\s+ lock | sys    \\s+ rq | back   \\s+ space | ((?:[^-+^\\s\\\\`]|\\\\.)++) ) (?=$|[-+^\\s`])',
          name: 'entity.name.tag.keystroke.restructuredtext'
        }
      ]
    },
    'role-literal': {
      begin: '(?i)(?<=:literal:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.raw.monospace.literal.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-mailheader': {
      begin: '(?i)(?<=:mailheader:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.mail-header.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-makevar': {
      begin: '(?i)(?<=:makevar:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.bold.make-variable.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-manpage': {
      begin: '(?i)(?<=:manpage:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'meta.manpage.link.inline.restructuredtext',
      patterns: [
        {include: 'hidden.manref'},
        {
          captures: {
            1: {name: 'markup.bold.manpage-name.restructuredtext'},
            2: {
              name: 'punctuation.section.round.bracket.begin.restructuredtext'
            },
            3: {name: 'constant.language.manpage-section.restructuredtext'},
            4: {name: 'constant.language.manpage-group.restructuredtext'},
            5: {name: 'punctuation.section.round.bracket.end.restructuredtext'}
          },
          match:
            '([-.\\w]+)(\\()(\\d+(?!\\d)|(?:[lnop]|tcl)(?=[/\\)]))([\\w:/]*?(?:/(?!/)[-\\w:./]+)?)(\\))'
        }
      ]
    },
    'role-math': {
      begin: '(?i)(?<=:math:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.math.inline.restructuredtext',
      patterns: [{include: 'text.tex#math'}]
    },
    'role-mimetype': {
      begin: '(?i)(?<=:mimetype:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.mime-type.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-newsgroup': {
      begin: '(?i)(?<=:newsgroup:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.newsgroup.link.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-numref': {
      begin: '(?i)(?<=:numref:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'meta.numref.restructuredtext',
      patterns: [{include: '#link'}]
    },
    'role-numreg': {
      begin:
        '(?xi) (?: (?<= :(pep):`) |   (?<= :(rfc):`) |   (?<= :(pep)-reference:`) |   (?<= :(rfc)-reference:`) ) \\G',
      end: '(?=^\\s*$)|(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'meta.registry-link.${1:/downcase}${2:/downcase}${3:/downcase}${4:/downcase}-reference.restructuredtext',
      patterns: [
        {
          captures: {
            1: {
              name: 'entity.name.link-label.restructuredtext',
              patterns: [{include: '#escape'}]
            },
            2: {patterns: [{include: '#role-numreg-destination'}]}
          },
          match:
            '(?:\\G|^)(?:((?:[^`\\\\]|\\\\.)+?)\\s*)?(<(?:[^`\\\\]|\\\\.)*>)(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))'
        },
        {
          captures: {1: {patterns: [{include: '#escape'}]}},
          match:
            '(?:\\G|^)\\d+(?:[ \\s]*#((?:[^`\\\\]|\\\\.)*))?(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          name: 'constant.other.reference.link.restructuredtext'
        },
        {
          begin: '\\G\\d+\\s*#',
          end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          name: 'constant.other.reference.link.restructuredtext',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '\\G',
          contentName: 'entity.name.link-label.restructuredtext',
          end: '(?=^[ \\t]*$)|(<(?:[^`\\\\]|\\\\.)*>)?(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
          endCaptures: {1: {patterns: [{include: '#role-numreg-destination'}]}},
          patterns: [{include: '#escape'}]
        }
      ]
    },
    'role-numreg-destination': {
      begin: '(?:\\G|^)<',
      beginCaptures: {
        0: {name: 'punctuation.definition.angle.bracket.begin.restructuredtext'}
      },
      end: '>$|(?=^[ \\t]*$)',
      endCaptures: {
        0: {name: 'punctuation.definition.angle.bracket.end.restructuredtext'}
      },
      name: 'meta.link-destination.restructuredtext',
      patterns: [
        {
          begin: '\\G\\d+(?=>?$|#)',
          end: '(?=>$)',
          name: 'constant.other.reference.link.restructuredtext',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '\\G',
          end: '(?=>$|^[ \\t]*$)',
          name: 'invalid.illegal.invalid-proposal.restructuredtext'
        }
      ]
    },
    'role-other': {
      begin: '(?<=:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'string.interpolated.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-ref': {
      begin: '(?xi) (?: (?<=:ref:`) |   (?<=:doc:`) |   (?<=:download:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      patterns: [{include: '#link'}]
    },
    'role-regexp': {
      begin: '(?i)(?<=:regexp:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'string.regexp.restructuredtext',
      patterns: [{include: 'source.regexp'}, {include: 'source.regexp.python'}]
    },
    'role-samp': {
      begin: '(?i)(?<=:samp:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.raw.monospace.literal.samp.restructuredtext',
      patterns: [{include: '#escape'}, {include: '#role-variable'}]
    },
    'role-strong': {
      begin: '(?i)(?<=:strong:`)\\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.bold.emphasis.strong.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-subscript': {
      begin: '(?xi) (?: (?<=:sub:`) |   (?<=:subscript:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.subscript.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-superscript': {
      begin: '(?xi) (?: (?<=:sup:`) |   (?<=:superscript:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.superscript.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-term': {
      begin:
        '(?xi) (?: (?<=:term:`) |   (?<=:envvar:`) |   (?<=:keyword:`) |   (?<=:option:`) |   (?<=:token:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'variable.parameter.reference.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-titleref': {
      begin:
        '(?xi) (?: (?<= :t:`) |   (?<= :title:`) |   (?<= :title-reference:`) ) \\G',
      end: '(?=`(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))',
      name: 'markup.italic.title-reference.restructuredtext',
      patterns: [{include: '#escape'}]
    },
    'role-variable': {
      captures: {
        1: {name: 'punctuation.section.embedded.begin.restructuredtext'},
        2: {
          name: 'variable.parameter.placeholder.restructuredtext',
          patterns: [{include: '#escape'}]
        },
        3: {name: 'punctuation.section.embedded.end.restructuredtext'}
      },
      match: '({)((?:[^\\\\}]|\\\\.)*+)(})',
      name: 'meta.embedded.line.restructuredtext'
    },
    roles: {
      patterns: [
        {include: '#role-abbr'},
        {include: '#role-code'},
        {include: '#role-command'},
        {include: '#role-dfn'},
        {include: '#role-emphasis'},
        {include: '#role-file'},
        {include: '#role-guilabel'},
        {include: '#role-html'},
        {include: '#role-kbd'},
        {include: '#role-literal'},
        {include: '#role-mailheader'},
        {include: '#role-makevar'},
        {include: '#role-manpage'},
        {include: '#role-math'},
        {include: '#role-mimetype'},
        {include: '#role-newsgroup'},
        {include: '#role-numref'},
        {include: '#role-numreg'},
        {include: '#role-ref'},
        {include: '#role-regexp'},
        {include: '#role-samp'},
        {include: '#role-strong'},
        {include: '#role-subscript'},
        {include: '#role-superscript'},
        {include: '#role-term'},
        {include: '#role-titleref'},
        {include: '#role-other'}
      ]
    },
    'substitution-definition': {
      patterns: [
        {
          begin:
            '(?i)^(\\s*)(\\.\\.)\\s+(\\|)(?=[^|\\s])(.+?)((?<=\\S)\\|)\\s+(image)(::)\\s*(\\S+)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {
              name: 'punctuation.definition.substitution.start.restructuredtext'
            },
            4: {name: 'entity.name.substitution.restructuredtext'},
            5: {
              name: 'punctuation.definition.substitution.end.restructuredtext'
            },
            6: {name: 'support.directive.restructuredtext'},
            7: {name: 'punctuation.separator.key-value.restructuredtext'},
            8: {name: 'constant.other.reference.link.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.substitution-definition.image.restructuredtext',
          patterns: [{include: '#image-options'}]
        },
        {
          begin:
            '(?i)^(\\s*)(\\.\\.)\\s+(\\|)(?=[^|\\s])(.+?)((?<=\\S)\\|)\\s+(unicode)(::)[ \\t]*',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {
              name: 'punctuation.definition.substitution.start.restructuredtext'
            },
            4: {name: 'entity.name.substitution.restructuredtext'},
            5: {
              name: 'punctuation.definition.substitution.end.restructuredtext'
            },
            6: {name: 'support.directive.restructuredtext'},
            7: {name: 'punctuation.separator.key-value.restructuredtext'}
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.substitution-definition.unicode.restructuredtext',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#tag-name'}]}},
              match: '(?i)(:[lr]?trim:)(?=$|\\s)',
              name: 'meta.unicode-option.${1:/downcase}.restructuredtext'
            },
            {include: '#directive-options'},
            {include: '#unicode-innards'}
          ]
        },
        {
          begin:
            '^(\\s*)(\\.\\.)\\s+(\\|)(?=[^|\\s])(.+?)((?<=\\S)\\|)\\s+(\\S+.*(?=::))(::)(.*)',
          beginCaptures: {
            2: {name: 'punctuation.definition.directive.restructuredtext'},
            3: {
              name: 'punctuation.definition.substitution.start.restructuredtext'
            },
            4: {name: 'entity.name.substitution.restructuredtext'},
            5: {
              name: 'punctuation.definition.substitution.end.restructuredtext'
            },
            6: {name: 'support.directive.restructuredtext'},
            7: {name: 'punctuation.separator.key-value.restructuredtext'},
            8: {
              name: 'string.unquoted.substitution.data.restructuredtext',
              patterns: [{include: '#inlines'}]
            }
          },
          end: '^(?!\\s*$|\\1[ \\t]+\\S)',
          name: 'meta.substitution-definition.restructuredtext',
          patterns: [{include: '#directive-options'}]
        }
      ]
    },
    'substitution-reference': {
      patterns: [
        {include: '#substitution-reference-singleline'},
        {include: '#substitution-reference-multiline'}
      ]
    },
    'substitution-reference-multiline': {
      begin:
        '(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))(\\|)(?=[^|\\s])',
      beginCaptures: {
        1: {name: 'punctuation.definition.substitution.start.restructuredtext'}
      },
      contentName: 'entity.name.substitution.restructuredtext',
      end: '(?=^\\s*$)|(\\|)(?:(__)\\b|(_)\\b)?(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      endCaptures: {
        1: {name: 'punctuation.definition.substitution.end.restructuredtext'},
        2: {
          name: 'punctuation.definition.reference.anonymous.restructuredtext'
        },
        3: {name: 'punctuation.definition.reference.named.restructuredtext'}
      },
      name: 'meta.substitution-reference.restructuredtext'
    },
    'substitution-reference-singleline': {
      captures: {
        1: {name: 'punctuation.definition.substitution.start.restructuredtext'},
        2: {name: 'entity.name.substitution.restructuredtext'},
        3: {name: 'punctuation.definition.substitution.end.restructuredtext'},
        4: {
          name: 'punctuation.definition.reference.anonymous.restructuredtext'
        },
        5: {name: 'punctuation.definition.reference.named.restructuredtext'}
      },
      match:
        '(?x)\n(?:^|(?<=[-:/\'"<(\\[{\\s«»༺⟬⟮⸠⸡⸢⸤⸦⸨‚„‟‛])|(?<![\\x00-\\x9F])(?<=[\\p{Ps}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}]))\n(\\|)(?=[^|\\s])(.+?)(?<!\\s)(\\|)\n(?:(__)\\b|(_)\\b)?\n(?=$|[-.,:;!?\\\\/\'")\\]}>\\s«»༻⟭⟯⸡⸠⸣⸥⸧⸩‚„‟‛]|(?![\\x00-\\x9F])[\\p{Pe}\\p{Pi}\\p{Pf}\\p{Pd}\\p{Po}])',
      name: 'meta.substitution-reference.restructuredtext'
    },
    'table-grid': {
      begin: '(?:\\G|^)(?=\\s*\\+-+(?:\\+-+)*+\\+\\s*$)',
      end: '(?=^\\s*$)',
      name: 'meta.table.grid.restructuredtext',
      patterns: [
        {
          captures: {
            0: {
              name: 'punctuation.definition.table.grid-divider.horizontal.thin.restructuredtext',
              patterns: [
                {
                  match: '=+',
                  name: 'invalid.illegal.mixed-border-styles.restructuredtext'
                }
              ]
            }
          },
          match: '(?<!-|=)\\+-+(?:\\+[-=]+)*+\\+(?!-|=)',
          name: 'meta.separator.table.grid.restructuredtext'
        },
        {
          captures: {
            0: {
              name: 'punctuation.definition.table.grid-divider.horizontal.thick.restructuredtext',
              patterns: [
                {
                  match: '-+',
                  name: 'invalid.illegal.mixed-border-styles.restructuredtext'
                }
              ]
            }
          },
          match: '(?<!-|=)\\+=+(?:\\+[-=]+)*+\\+(?!-|=)',
          name: 'meta.separator.table.grid.restructuredtext'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  match: '\\|',
                  name: 'punctuation.definition.table.grid-divider.vertical.restructuredtext'
                }
              ]
            }
          },
          match: '(?<=\\s)\\|(?=\\s)|^\\s*\\||\\|[ \\t]*$',
          name: 'meta.separator.table.grid.restructuredtext'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  captures: {
                    0: {
                      patterns: [
                        {include: '#directives'},
                        {include: '#comments'}
                      ]
                    }
                  },
                  match: '^\\s*(?:\\.\\.(?=$|\\s).*?)(?=\\s*$)'
                },
                {include: '#inlines'},
                {include: '#table-simple'},
                {include: '#table-simple-continuation'},
                {
                  match: '\\\\$',
                  name: 'constant.character.escape.backslash.restructuredtext'
                }
              ]
            }
          },
          match:
            '(?x)\n(?<=  ^   \\|\n|     \\s \\|\n| [-=]\\+ \\|\n| [-=]\\+\n)\n\n(?: \\| [^|\\s]\n|   [^|\\s] \\|\n|   [^|+]\n|   \\+ (?!(?:-+|=+)\\+)\n)++\n\n(?= (?<=\\s) \\|\n|   (?<!\\s) \\| \\s* $\n|   (?<!-|=) \\+ (?:-+|=+) \\+\n)',
          name: 'meta.table-cell.restructuredtext'
        }
      ]
    },
    'table-simple': {
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?=^\\s+={2,}(?:\\s+={2,})++[ \\t]*$)',
          end: '(?!\\G)',
          name: 'meta.table.simple.indented.restructuredtext',
          patterns: [
            {
              begin: '\\G(\\s+)(={2,}(?:\\s+={2,})++)[ \\t]*$',
              beginCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                2: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              contentName: 'markup.other.table.restructuredtext',
              end: '(?=^\\1={2,}(?:\\s+={2,})*+[ \\t]*$)',
              name: 'meta.table-head.restructuredtext',
              patterns: [{include: '#table-simple-innards'}]
            },
            {
              begin: '^(\\s+)(={2,}(?:\\s+={2,})++)[ \\t]*$',
              beginCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                2: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              contentName: 'markup.other.table.restructuredtext',
              end: '^\\1(={2,}(?:\\s+={2,})++)[ \\t]*$|(?=^\\s*$|^\\S|^(?!\\1)\\s+\\S)',
              endCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                2: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              name: 'meta.table-body.restructuredtext',
              patterns: [{include: '#table-simple-body'}]
            }
          ]
        },
        {
          applyEndPatternLast: true,
          begin: '(?=^={2,}(?:\\s+={2,})++[ \\t]*$)',
          end: '(?!\\G)',
          name: 'meta.table.simple.unindented.restructuredtext',
          patterns: [
            {
              begin: '\\G(={2,}(?:\\s+={2,})++)[ \\t]*$',
              beginCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                1: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              contentName: 'markup.other.table.restructuredtext',
              end: '(?=^={2,}(?:\\s+={2,})*+[ \\t]*$)',
              name: 'meta.table-head.restructuredtext',
              patterns: [{include: '#table-simple-innards'}]
            },
            {
              begin: '^(={2,}(?:\\s+={2,})++)[ \\t]*$',
              beginCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                1: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              contentName: 'markup.other.table.restructuredtext',
              end: '^(={2,}(?:\\s+={2,})++)[ \\t]*$|(?=^\\s*$)',
              endCaptures: {
                0: {name: 'meta.separator.table.simple.restructuredtext'},
                1: {
                  name: 'punctuation.definition.table.simple-divider.restructuredtext'
                }
              },
              name: 'meta.table-body.restructuredtext',
              patterns: [{include: '#table-simple-body'}]
            }
          ]
        }
      ]
    },
    'table-simple-body': {
      patterns: [
        {begin: '\\G$', end: '^'},
        {begin: '$', end: '^\\s*$|(?=^\\s*\\S)'},
        {include: '#table-simple-innards'},
        {
          captures: {
            0: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          match: '(?:^|(?<=\\s))\\.\\.(?=$|\\s)(?!\\s+\\w+::)',
          name: 'comment.block.double-dot.truncated.restructuredtext'
        }
      ]
    },
    'table-simple-continuation': {
      captures: {
        1: {name: 'punctuation.definition.table.column-span.restructuredtext'}
      },
      match: '^\\s*(-{2,}(?:\\s+-{2,})*+)[ \\t]*$',
      name: 'meta.separator.table.simple.restructuredtext'
    },
    'table-simple-innards': {
      patterns: [
        {include: '#table-simple-continuation'},
        {
          captures: {
            0: {
              name: 'punctuation.definition.table.simple-divider.restructuredtext'
            }
          },
          match: '(?<=\\s)(?<!^)={2,}(?:\\s+={2,})*+(?=$|\\s)',
          name: 'meta.separator.table.simple.nested.restructuredtext'
        },
        {
          captures: {0: {patterns: [{include: '#line-block'}]}},
          match: '(?:^|(?<=\\s{2}))\\|(?=$|\\s)(?:\\s\\S+)*+'
        },
        {include: '#inlines'}
      ]
    },
    tables: {patterns: [{include: '#table-grid'}, {include: '#table-simple'}]},
    'tag-name': {
      captures: {
        1: {name: 'punctuation.definition.field.restructuredtext'},
        2: {name: 'punctuation.definition.field.restructuredtext'}
      },
      match: '(:)[A-Za-z][\\w\\s=.-]*(:)',
      name: 'entity.name.tag.restructuredtext'
    },
    toctree: {
      begin: '(?i)^(\\s*)(\\.\\.)\\s+(toctree)(::)(?=\\s*$)',
      beginCaptures: {
        2: {name: 'punctuation.definition.directive.restructuredtext'},
        3: {name: 'support.directive.restructuredtext'},
        4: {name: 'punctuation.separator.key-value.restructuredtext'}
      },
      end: '^(?!\\s*$|\\1[ \\t]+\\S)',
      name: 'meta.toctree.restructuredtext',
      patterns: [
        {
          begin: '(?<=::)\\G',
          end: '^(?=[ \\t]*$)',
          name: 'meta.field-list.restructuredtext',
          patterns: [
            {include: '#toctree-caption'},
            {include: '#toctree-depth'},
            {include: '#doctree-options'},
            {include: '#directive-options'}
          ]
        },
        {
          captures: {
            1: {name: 'markup.list.description.restructuredtext'},
            2: {patterns: [{include: '#toctree-target'}]}
          },
          match: '^\\s+(?!\\G)(\\S.*?)\\s+(<.*?>)[ \\s]*$',
          name: 'meta.entry.restructuredtext'
        },
        {
          captures: {1: {patterns: [{include: '#toctree-target'}]}},
          match: '^\\s+(?!\\G)(\\S.*?)[ \\s]*$',
          name: 'meta.entry.restructuredtext'
        }
      ]
    },
    'toctree-caption': {
      begin: '(?i)(:caption:)\\s+(?=\\S)',
      beginCaptures: {1: {patterns: [{include: '#tag-name'}]}},
      contentName: 'string.unquoted.caption.restructuredtext',
      end: '$',
      name: 'meta.toctree-option.caption.restructuredtext'
    },
    'toctree-depth': {
      begin: '(?i)(:((?:min|max)depth):)\\s+',
      beginCaptures: {1: {patterns: [{include: '#tag-name'}]}},
      end: '$',
      name: 'meta.toctree-option.$2.restructuredtext',
      patterns: [
        {
          match: '\\G-?\\d+(?=\\s*$)',
          name: 'constant.numeric.integer.restructuredtext'
        },
        {
          match: '\\G(\\S.+?)(?=\\s*$)',
          name: 'invalid.illegal.bad-integer.restructuredtext'
        }
      ]
    },
    'toctree-target': {
      patterns: [
        {
          captures: {
            1: {
              name: 'punctuation.definition.angle.bracket.begin.restructuredtext'
            },
            2: {patterns: [{include: '#toctree-target'}]},
            3: {
              name: 'punctuation.definition.angle.bracket.end.restructuredtext'
            }
          },
          match: '(?:^|\\G)(<)(.*)(>)$'
        },
        {
          captures: {
            1: {name: 'keyword.operator.suppress-reference.restructuredtext'},
            2: {name: 'keyword.operator.last-component-only.restructuredtext'},
            3: {name: 'string.other.link.destination.restructuredtext'},
            4: {
              patterns: [
                {
                  match: '\\*',
                  name: 'keyword.operator.glob.wildcard.restructuredtext'
                }
              ]
            }
          },
          match: '(?:^|\\G)(?:(!)|(~))?(?!<)((.+))(?<!<)$'
        }
      ]
    },
    'unicode-innards': {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.escape.backslash.restructuredtext'}
          },
          match: '(?i)(?:^|(?<=\\s))(?:0x|(\\\\)?[ux]|U\\+)[0-9A-F]+(?=$|\\s)',
          name: 'constant.numeric.integer.codepoint.hexadecimal.restructuredtext'
        },
        {
          match: '(?:^|(?<=\\s))[0-9]+(?=$|\\s)',
          name: 'constant.numeric.integer.codepoint.decimal.restructuredtext'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.constant.xml'},
            2: {name: 'entity.name.other.codepoint.hexadecimal.xml'},
            3: {name: 'punctuation.definition.entity.end.xml'}
          },
          match: '(?i)(?:^|(?<=\\s))(&)(#x[0-9A-F]+)(;)(?=$|\\s)',
          name: 'constant.character.entity.xml'
        },
        {
          begin: '\\s+(\\.\\.)[ \\t]+(?=\\S)',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.restructuredtext'}
          },
          end: '(?=\\s*$)',
          name: 'comment.line.double-dot.trailing.restructuredtext'
        },
        {
          match: '(?:^|(?<=\\s))(?!\\.\\.\\s+\\S)[^\\s]+',
          name: 'string.unquoted.substitution.data.restructuredtext'
        }
      ]
    }
  },
  scopeName: 'text.restructuredtext'
}

export default grammar
