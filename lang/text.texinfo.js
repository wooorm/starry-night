// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-texinfo>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.texinfo', '.texi', '.txi'],
  names: ['texinfo'],
  patterns: [
    {
      captures: {
        1: {name: 'support.function.general.tex'},
        2: {name: 'punctuation.definition.function.tex'},
        3: {name: 'support.constant.language.other.tex'}
      },
      match: '\\A\\s*((\\\\)input)\\s+([^@\\s\\x7F]+)'
    },
    {include: '#main'}
  ],
  repository: {
    alias: {
      captures: {
        1: {name: 'keyword.operator.command.alias.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'},
        3: {name: 'entity.name.function.alias.texinfo'},
        4: {name: 'punctuation.separator.separator.texinfo'},
        5: {name: 'entity.name.function.source.texinfo'}
      },
      match: '((@)alias)\\s+([^=\\s]+)\\s*(=)\\s*([^=\\s]+)',
      name: 'meta.command.alias.texinfo'
    },
    blockCommands: {
      begin:
        '(?x) ((@)\n(cartouche|copying|direntry|display|documentdescription|enumerate\n|float|flushleft|flushright|format|ftable|group|itemize|multitable\n|raggedright|smalldisplay|smallformat|smallindentedblock|table\n|titlepage|vtable))\n(?=\\s|$)(.*)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'},
        4: {patterns: [{include: '#param'}, {include: '#main'}]}
      },
      end: '((@)end\\s+\\3)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.$3.block.texinfo',
      patterns: [{include: '#main'}]
    },
    boldText: {
      patterns: [
        {
          begin: '((@)(b|strong))({)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'punctuation.section.scope.begin.texinfo'}
          },
          contentName: 'markup.bold.texinfo',
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.scope.end.texinfo'}},
          name: 'meta.command.$3.braced.texinfo',
          patterns: [{include: '#main'}]
        },
        {
          begin:
            '(?x) ^ ((@)\n(appendixsection|appendixsec|appendixsubsec|appendixsubsubsec|appendix\n|chapheading|chapter|heading|majorheading|section|subheading|subsection\n|subsubheading|subsubsection|top|unnumberedsec|unnumberedsubsec\n|unnumberedsubsubsec|unnumbered))\n(?=\\s|$)',
          beginCaptures: {
            0: {name: 'markup.bold.texinfo'},
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          contentName: 'markup.heading.string.unquoted.texinfo',
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [{include: '#main'}]
        }
      ]
    },
    booleanCommands: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.command.headings.texinfo'},
            2: {name: 'punctuation.defining.function.texinfo'},
            3: {name: 'constant.language.boolean.true.texinfo'},
            4: {name: 'constant.language.boolean.false.texinfo'},
            5: {name: 'constant.language.heading-type.$5.texinfo'}
          },
          match: '((@)headings)\\s+(?:(on)|(off)|(single|double))\\b',
          name: 'meta.command.headings.texinfo'
        },
        {
          captures: {
            1: {name: 'keyword.operator.command.headings.texinfo'},
            2: {name: 'punctuation.defining.function.texinfo'},
            3: {name: 'constant.language.boolean.true.texinfo'},
            4: {name: 'constant.language.boolean.false.texinfo'},
            5: {name: 'constant.language.odd.texinfo'}
          },
          match: '((@)setchapternewpage)\\s+(?:(on)|(off)|(odd))\\b',
          name: 'meta.command.setchapternewpage.texinfo'
        },
        {
          captures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'constant.language.boolean.$4.texinfo'}
          },
          match: '((@)(allowcodebreaks))\\s+(true|false)(?=\\s|$)',
          name: 'meta.command.$3.texinfo'
        },
        {
          captures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'constant.language.boolean.true.texinfo'},
            5: {name: 'constant.language.boolean.false.texinfo'}
          },
          match:
            '(?x) ((@)\n(codequotebacktick|codequoteundirected|deftypefnnewline\n|frenchspacing|validatemenus|xrefautomaticsectiontitle))\n\\s+ (?:(on)|(off)) \\b',
          name: 'meta.command.$3.texinfo'
        }
      ]
    },
    codeBlocks: {
      patterns: [
        {
          begin: '((@)(lisp|smalllisp))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          contentName: 'source.embedded.emacs.lisp',
          end: '((@)end\\s+\\3)\\b',
          endCaptures: {
            1: {name: 'keyword.operator.command.end-$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          name: 'meta.command.$3.block.texinfo',
          patterns: [{include: 'source.emacs.lisp'}, {include: '#main'}]
        },
        {
          begin: '((@)(example|smallexample|verbatim))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          contentName: 'markup.raw.texinfo',
          end: '((@)end\\s+\\3)\\b',
          endCaptures: {
            1: {name: 'keyword.operator.command.end-$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          name: 'meta.command.$3.block.texinfo',
          patterns: [{include: '#main'}]
        }
      ]
    },
    comma: {match: ',', name: 'punctuation.separator.delimiter.comma.texinfo'},
    command: {
      patterns: [
        {
          begin: '((@)(\\w+))({)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'punctuation.section.scope.begin.texinfo'}
          },
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.scope.end.texinfo'}},
          name: 'meta.command.braced.texinfo',
          patterns: [
            {include: '#param'},
            {include: '#comma'},
            {include: '#main'}
          ]
        },
        {
          captures: {1: {name: 'punctuation.definition.function.texinfo'}},
          match: '(@)(\\w+)',
          name: 'keyword.operator.command.$2.texinfo'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '((@)c(?:omment)?)(?=$|[^-A-Za-z0-9])',
          beginCaptures: {
            1: {name: 'keyword.operator.command.start-comment.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'comment.line.at-sign.texinfo'
        },
        {
          begin: '\\x7F',
          beginCaptures: {0: {name: 'punctuation.whitespace.delete.texinfo'}},
          end: '$',
          name: 'comment.line.tex-style.texinfo'
        }
      ]
    },
    conditionals: {
      patterns: [
        {
          begin:
            '((@)(ifclear|ifcommanddefined|ifcommandnotdefined|ifset))\\s+(\\S+)',
          beginCaptures: {
            1: {name: 'keyword.control.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'variable.parameter.texinfo'}
          },
          end: '((@)end\\s+\\3)\\b',
          endCaptures: {
            1: {name: 'keyword.control.command.end-$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          name: 'meta.command.$3.conditional.block.texinfo',
          patterns: [{include: '#main'}]
        },
        {
          begin:
            '(?x) ((@)\n(ifdocbook|ifhtml|ifinfo|ifnotdocbook|ifnothtml|ifnotinfo|ifnotplaintext\n|ifnottex|ifnotxml|ifplaintext|iftex|ifxml))\n(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            4: {name: 'variable.parameter.texinfo'}
          },
          end: '((@)end\\s+\\3)\\b',
          endCaptures: {
            1: {name: 'keyword.control.command.end-$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          name: 'meta.command.$3.conditional.block.texinfo',
          patterns: [{include: '#main'}]
        }
      ]
    },
    dashes: {
      patterns: [
        {match: '---', name: 'constant.character.dash.em-dash.texinfo'},
        {match: '--', name: 'constant.character.dash.en-dash.texinfo'}
      ]
    },
    definitions: {
      patterns: [
        {
          begin:
            '((@)(defcodeindex|defindex|defopt|defoptx|defvar|defvarx))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.begin.texinfo'},
                2: {name: 'punctuation.definition.end.texinfo'}
              },
              match: '\\G\\s*(?:({)[^}]*(})|\\S+)',
              name: 'entity.name.var.texinfo'
            },
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(defcvx|defcv|defopx|defop))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.other.inherited-class.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'},
                7: {name: 'entity.name.var.texinfo'},
                8: {name: 'punctuation.definition.begin.texinfo'},
                9: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deffnx|deffn|deftpx|deftp|defvrx|defvr))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.name.var.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(definfoenclose))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'entity.name.var.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'}
              },
              match: '\\G\\s*(({)[^}]*(})|[^\\s,]+)'
            },
            {match: '[^\\s,@]+', name: 'string.unquoted.texinfo'},
            {include: '#comma'}
          ]
        },
        {
          begin: '((@)(defivarx|defivar|defmethodx|defmethod))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'entity.other.inherited-class.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.name.var.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(defmacx|defmac|defunx|defun|defspecx|defspec))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.definition.begin.texinfo'},
                2: {name: 'punctuation.definition.end.texinfo'}
              },
              match: '\\G\\s*(?:({)[^}]*(})|\\S+)',
              name: 'entity.name.function.texinfo'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deftypecvx|deftypecv|deftypevrx|deftypevr))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.category.texinfo'},
                10: {name: 'entity.name.var.texinfo'},
                11: {name: 'punctuation.definition.begin.texinfo'},
                12: {name: 'punctuation.definition.end.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.other.inherited-class.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'},
                7: {name: 'storage.type.var.data-type.texinfo'},
                8: {name: 'punctuation.definition.begin.texinfo'},
                9: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deftypefnx|deftypefn))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.category.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'storage.type.var.data-type.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'},
                7: {name: 'entity.name.var.texinfo'},
                8: {name: 'punctuation.definition.begin.texinfo'},
                9: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deftypefunx|deftypefun))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.data-type.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.name.var.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin:
            '((@)(deftypemethodx|deftypemethod|deftypeivarx|deftypeivar))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'entity.other.inherited-class.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'storage.type.var.data-type.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'},
                7: {name: 'entity.name.var.texinfo'},
                8: {name: 'punctuation.definition.begin.texinfo'},
                9: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deftypeopx|deftypeop))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.category.texinfo'},
                10: {name: 'entity.name.var.texinfo'},
                11: {name: 'punctuation.definition.begin.texinfo'},
                12: {name: 'punctuation.definition.end.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.other.inherited-class.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'},
                7: {name: 'storage.type.var.data-type.texinfo'},
                8: {name: 'punctuation.definition.begin.texinfo'},
                9: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        },
        {
          begin: '((@)(deftypevarx|deftypevar))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.$3.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          end: '$',
          name: 'meta.command.$3.line.texinfo',
          patterns: [
            {
              captures: {
                1: {name: 'storage.type.var.data-type.texinfo'},
                2: {name: 'punctuation.definition.begin.texinfo'},
                3: {name: 'punctuation.definition.end.texinfo'},
                4: {name: 'entity.name.var.texinfo'},
                5: {name: 'punctuation.definition.begin.texinfo'},
                6: {name: 'punctuation.definition.end.texinfo'}
              },
              match:
                '(?x)\n\\G \\s* (({)[^}]*(})|\\S+)\n(?: \\s+ (({)[^}]*(})|\\S+))?'
            },
            {include: '#param'},
            {include: '#main'}
          ]
        }
      ]
    },
    ignored: {
      patterns: [
        {
          begin: '((@)ignore)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.ignore.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          contentName: 'comment.block.ignored.texinfo',
          end: '((@)end\\s+ignore)\\b',
          endCaptures: {
            1: {name: 'keyword.operator.command.end-ignore.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          name: 'meta.command.ignore.block.texinfo',
          patterns: [{include: '#main'}]
        },
        {
          begin: '^((@)bye)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.bye.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'}
          },
          contentName: 'comment.block.ignored.texinfo',
          end: '(?=A)B',
          name: 'meta.command.bye.block.texinfo',
          patterns: [{include: '#main'}]
        }
      ]
    },
    italicText: {
      begin: '((@)(i|emph|sc|slanted))({)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'},
        4: {name: 'punctuation.section.scope.begin.texinfo'}
      },
      contentName: 'markup.italic.texinfo',
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.scope.end.texinfo'}},
      name: 'meta.command.$3.braced.texinfo',
      patterns: [{include: '#main'}]
    },
    lineCommands: {
      begin:
        '(?x) ^ ((@)\n(author|centerchap|center|cindex|clear|defcodeindex|defcvx|defcv|deffnx\n|deffn|defindex|definfoenclose|defivarx|defivar|defmacx|defmac|defmethodx\n|defmethod|defoptx|defopt|defopx|defop|defspecx|defspec|deftpx|deftp\n|deftypecvx|deftypecv|deftypefnx|deftypefn|deftypefunx|deftypefun\n|deftypeivarx|deftypeivar|deftypemethodx|deftypemethod|deftypeopx\n|deftypeop|deftypevarx|deftypevar|deftypevrx|deftypevr|defunx|defun\n|defvarx|defvar|defvrx|defvr|dircategory|documentencoding|documentlanguage\n|enumerate|evenfooting|even|everyfooting|everyexampleindent|exdent|findex\n|firstparagraphindent|fonttextsize|footnotestyle|ftable|include|itemize\n|kbdinputstyle|kindex|macro|multitable|need|node|oddfooting|oddpagesizes\n|paragraphindent|part|pindex|printindex|setfilename|settitle|set\n|shorttitlepage|sortas|sp|strong|subtitle|sub|sup|syncodeindex|synindex\n|table|tindex|title|unmacro|urefbreakstyle|verbatiminclude|vindex|vskip|vtable))\n(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      contentName: 'markup.raw.texinfo',
      end: '$',
      name: 'meta.command.$3.line.texinfo',
      patterns: [
        {
          match: '\\G(?<=@macro)\\s*(\\S+)',
          name: 'entity.name.function.macro.texinfo'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  match: '[-+]?\\d+(?:\\.\\d+)',
                  name: 'constant.numeric.float.texinfo'
                },
                {match: '[-+]?\\d+', name: 'constant.numeric.int.texinfo'},
                {include: '#comma'}
              ]
            }
          },
          match: '\\G(?:\\s*[-+]?[0-9]+(?:\\.[0-9]+)?,?)+(?=\\s*$)'
        },
        {
          captures: {1: {name: 'punctuation.definition.function.texinfo'}},
          match: '(@)\\|',
          name: 'keyword.operator.command.separator.texinfo'
        },
        {include: '#param'},
        {include: '#comma'},
        {include: '#main'}
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#dashes'},
        {include: '#texLine'},
        {include: '#alias'},
        {include: '#menu'},
        {include: '#booleanCommands'},
        {include: '#symbolCommands'},
        {include: '#set'},
        {include: '#definitions'},
        {include: '#quotation'},
        {include: '#boldText'},
        {include: '#italicText'},
        {include: '#verbatim'},
        {include: '#codeBlocks'},
        {include: '#conditionals'},
        {include: '#blockCommands'},
        {include: '#lineCommands'},
        {include: '#ignored'},
        {include: '#rawTex'},
        {include: '#rawHTML'},
        {include: '#rawXML'},
        {include: '#command'}
      ]
    },
    manualName: {
      begin: '(?:^|\\G)\\s*\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.reference.manual.begin.texinfo'}
      },
      contentName: 'constant.other.reference.link.texinfo',
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.reference.manual.end.texinfo'}
      },
      name: 'meta.manual-name.texinfo',
      patterns: [{include: '#main'}]
    },
    menu: {
      begin: '((@)(detailmenu|direntry|menu))(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      end: '((@)end\\s+\\3)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.$3.block.texinfo',
      patterns: [
        {
          begin: '^\\*\\s',
          beginCaptures: {
            0: {name: 'punctuation.definition.list.menu.texinfo'}
          },
          end: '^(?=\\S)',
          name: 'markup.list.texinfo',
          patterns: [
            {
              begin: '\\G(\\s*\\(.*?\\))?',
              beginCaptures: {1: {patterns: [{include: '#manualName'}]}},
              contentName: 'entity.name.tag.entry-name.texinfo',
              end: '::?|(?=\\s*$)',
              endCaptures: {
                0: {name: 'punctuation.separator.key-value.menu.texinfo'}
              },
              patterns: [{include: '#main'}]
            },
            {
              begin: '(?<=[^:]:)\\s*(\\(.*?\\))?',
              beginCaptures: {1: {patterns: [{include: '#manualName'}]}},
              contentName: 'entity.name.node-name.texinfo',
              end: '(\\.)|(?=\\s*$)',
              endCaptures: {
                1: {name: 'punctuation.terminator.full-stop.period.texinfo'}
              },
              patterns: [{include: '#main'}]
            },
            {
              begin: '(?<=::|\\.)',
              end: '^(?=\\S)',
              name: 'string.unquoted.description.texinfo',
              patterns: [{include: '#main'}]
            }
          ]
        },
        {
          begin: '^(?=[^\\s*])(?!@end\\s)',
          end: '$|(?=\\s*@end\\s)',
          name: 'constant.other.menu-comment.texinfo',
          patterns: [{include: '#main'}]
        },
        {include: '#main'}
      ]
    },
    param: {
      captures: {
        1: {name: 'punctuation.definition.begin.texinfo'},
        2: {name: 'punctuation.definition.end.texinfo'}
      },
      match: '[^\\s{}@,]+|(?<=\\s)({)[^\\s{}@,]+(})',
      name: 'variable.parameter.texinfo'
    },
    quotation: {
      begin: '((@)(quotation|smallquotation))(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      contentName: 'markup.quote.texinfo',
      end: '((@)end\\s+\\3)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.$3.block.texinfo',
      patterns: [{include: '#main'}]
    },
    rawHTML: {
      begin: '((@)html)(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.html.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      contentName: 'source.embedded.html',
      end: '((@)end\\s+html)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-html.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.raw-html.block.texinfo',
      patterns: [{include: '#main'}, {include: 'text.html.basic'}]
    },
    rawTex: {
      begin: '((@)tex)(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.tex.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      contentName: 'source.embedded.tex',
      end: '((@)end\\s+tex)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-tex.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.raw-tex.block.texinfo',
      patterns: [{include: '#main'}, {include: 'text.tex.latex'}]
    },
    rawXML: {
      begin: '((@)(docbook|xml))(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      contentName: 'source.embedded.xml',
      end: '((@)end\\s+\\3)\\b',
      endCaptures: {
        1: {name: 'keyword.operator.command.end-$3.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      name: 'meta.command.raw-$3.block.texinfo',
      patterns: [{include: '#main'}, {include: 'text.xml'}]
    },
    set: {
      begin: '((@)set)(?=\\s|$)',
      beginCaptures: {
        1: {name: 'keyword.operator.command.set.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'}
      },
      end: '$',
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.var.texinfo', patterns: [{include: '#main'}]}
          },
          match: '\\G\\s*(\\S+)'
        },
        {include: '#param'},
        {include: '#main'}
      ]
    },
    symbolCommands: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.function.texinfo'}},
          match: '(@)[-!"\'&*./:=?@\\\\^`{}~]',
          name: 'keyword.operator.command.non-alphabetic.texinfo'
        },
        {
          captures: {1: {name: 'punctuation.definition.function.texinfo'}},
          match: '(@)(?:( |\\t)|$)',
          name: 'keyword.operator.command.whitespace.texinfo'
        },
        {
          begin: '((@),)({)',
          beginCaptures: {
            1: {name: 'keyword.operator.command.cedilla-accent.texinfo'},
            2: {name: 'punctuation.definition.function.texinfo'},
            3: {name: 'punctuation.section.scope.begin.texinfo'}
          },
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.scope.end.texinfo'}},
          name: 'meta.command.braced.texinfo',
          patterns: [
            {match: '[^\\s{}@,]+', name: 'constant.character.texinfo'},
            {include: '#comma'},
            {include: '#main'}
          ]
        }
      ]
    },
    verbatim: {
      begin: '((@)verb)({)([^}])',
      beginCaptures: {
        1: {name: 'keyword.operator.command.verb.texinfo'},
        2: {name: 'punctuation.definition.function.texinfo'},
        3: {name: 'punctuation.section.scope.begin.texinfo'},
        4: {name: 'punctuation.arbitrary.delimiter.begin.texinfo'}
      },
      contentName: 'string.quoted.other.verbatim.texinfo',
      end: '(\\4)(})',
      endCaptures: {
        0: {name: 'punctuation.section.scope.end.texinfo'},
        1: {name: 'punctuation.arbitrary.delimiter.end.texinfo'}
      },
      name: 'meta.command.braced.verb.texinfo'
    }
  },
  scopeName: 'text.texinfo'
}

export default grammar
