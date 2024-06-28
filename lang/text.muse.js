// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-emacs-lisp>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.muse'],
  names: ['muse', 'amusewiki', 'emacs-muse'],
  patterns: [
    {begin: '\\A\\s*$', end: '(?=^\\s*\\S)', name: 'meta.blank-lines.muse'},
    {
      begin: '^(?=#\\w+)',
      end: '^(?=\\s*$)',
      name: 'meta.prologue.muse',
      patterns: [{include: '#directives'}]
    },
    {
      begin: '^(?=[^\\s#]|\\s+\\S)',
      end: '(?=A)B',
      name: 'meta.document.muse',
      patterns: [{include: '#main'}]
    }
  ],
  repository: {
    alignCentre: {
      begin: '^(\\s{6,19})(?=\\S)',
      end: '^(?!\\1|\\s*$)',
      name: 'meta.paragraph.align.center.muse',
      patterns: [{include: '#anchor'}, {include: '#inline'}]
    },
    alignLeft: {
      begin: '^\\s?(?=\\S)',
      end: '(?=^>\\s|^\\s*$|^\\s{2,}\\S|^\\s(?:-|(?:\\d+|[a-z]+|[A-Z]+)\\.\\s))',
      name: 'meta.paragraph.align.left.muse',
      patterns: [{include: '#anchor'}, {include: '#inline'}]
    },
    alignRight: {
      begin: '^(\\s{20,})(?=\\S)',
      end: '^(?!\\1|\\s*$)',
      name: 'meta.paragraph.align.right.muse',
      patterns: [{include: '#anchor'}, {include: '#inline'}]
    },
    anchor: {
      captures: {
        1: {name: 'keyword.control.anchor.muse'},
        2: {name: 'punctuation.definition.anchor.muse'}
      },
      match: '(?:\\G|^)\\s*((#)[a-zA-Z][-a-zA-Z0-9]*)'
    },
    anchorLine: {
      captures: {
        1: {name: 'keyword.control.anchor.muse'},
        2: {name: 'punctuation.definition.anchor.muse'}
      },
      match: '^\\s*((#)[a-zA-Z][-a-zA-Z0-9]*)\\s*$'
    },
    comment: {
      begin: '^(;)\\s',
      beginCaptures: {1: {name: 'punctuation.definition.comment.begin.muse'}},
      end: '(?=$)',
      name: 'comment.line.semicolon.muse'
    },
    directives: {
      begin: '^((#)([a-zA-Z]+))',
      beginCaptures: {
        1: {name: 'variable.assignment.directive.muse'},
        2: {name: 'punctuation.definition.directive.muse'}
      },
      contentName: 'entity.other.$3.muse',
      end: '(?!\\G)(?=^(?:#|\\s*$))',
      name: 'meta.directive.$3.muse',
      patterns: [
        {
          captures: {1: {name: 'constant.other.date.muse'}},
          match:
            '\\G(?<=#pubdate|#date)\\s+(\\d{4}(?:-\\d{2}-\\d{2})?)(?=\\s|$)'
        },
        {include: '#link'}
      ]
    },
    divider: {
      captures: {1: {name: 'constant.character.horizontal.line.muse'}},
      match: '^\\s*(-{4,})\\s*$'
    },
    emphasis: {
      patterns: [
        {
          begin: '(?<=\\W|^)(\\*{3})(?=\\S)',
          beginCaptures: {
            1: {name: 'punctuation.definition.emphasis.begin.muse'}
          },
          end: '(?<=\\S)\\1(?!\\*+\\w)(?=\\W|$)|(?=^[ \\t]*$)',
          endCaptures: {0: {name: 'punctuation.definition.emphasis.end.muse'}},
          name: 'markup.bold.italic.strong.emphasis.muse',
          patterns: [{include: '#inlineInnards'}]
        },
        {
          begin: '(?<=\\W|^)(\\*{2})(?=\\S)',
          beginCaptures: {
            1: {name: 'punctuation.definition.emphasis.begin.muse'}
          },
          end: '(?<=\\S)\\1(?!\\*+\\w)(?=\\W|$)|(?=^[ \\t]*$)',
          endCaptures: {0: {name: 'punctuation.definition.emphasis.end.muse'}},
          name: 'markup.bold.strong.emphasis.muse',
          patterns: [{include: '#inlineInnards'}]
        },
        {
          begin: '(?<=\\W|^)\\*(?=\\S)',
          beginCaptures: {
            0: {name: 'punctuation.definition.emphasis.begin.muse'}
          },
          end: '(?<=\\S)\\*(?!\\*+\\w)(?=\\W|$)|(?=^[ \\t]*$)',
          endCaptures: {0: {name: 'punctuation.definition.emphasis.end.muse'}},
          name: 'markup.italic.emphasis.muse',
          patterns: [{include: '#inlineInnards'}]
        }
      ]
    },
    example: {
      begin: '{{{',
      beginCaptures: {0: {name: 'keyword.operator.example.begin.muse'}},
      contentName: 'markup.raw.code.muse',
      end: '}}}',
      endCaptures: {0: {name: 'keyword.operator.example.end.muse'}},
      name: 'meta.example.muse'
    },
    footnote: {
      patterns: [
        {
          begin: '^(\\[\\d\\]|\\{\\d\\})(\\s+)(?=\\S)',
          beginCaptures: {
            1: {patterns: [{include: '#footnoteReference'}]},
            2: {name: 'punctuation.whitespace.separator.muse'}
          },
          contentName: 'markup.list.footnote.muse',
          end: '^(?!\\s{3}\\2)(?:\\s*$|\\s*?(?=\\s\\S))',
          name: 'meta.footnote.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^(\\[\\d{2}\\]|\\{\\d{2}\\})(\\s+)(?=\\S)',
          beginCaptures: {
            1: {patterns: [{include: '#footnoteReference'}]},
            2: {name: 'punctuation.whitespace.separator.muse'}
          },
          contentName: 'markup.list.footnote.muse',
          end: '^(?!\\s{4}\\2)(?:\\s*$|\\s*?(?=\\s\\S))',
          name: 'meta.footnote.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^(\\[\\d{3}\\]|\\{\\d{3}\\})(\\s+)(?=\\S)',
          beginCaptures: {
            1: {patterns: [{include: '#footnoteReference'}]},
            2: {name: 'punctuation.whitespace.separator.muse'}
          },
          contentName: 'markup.list.footnote.muse',
          end: '^(?!\\s{5}\\2)(?:\\s*$|\\s*?(?=\\s\\S))',
          name: 'meta.footnote.muse',
          patterns: [{include: '#inline'}]
        }
      ]
    },
    footnoteReference: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.footnote.begin.muse'},
            3: {name: 'punctuation.definition.footnote.end.muse'}
          },
          match: '(\\[)(\\d+)(\\])',
          name: 'entity.footnote.$2.primary.muse'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.footnote.begin.muse'},
            3: {name: 'punctuation.definition.footnote.end.muse'}
          },
          match: '(\\{)(\\d+)(\\})',
          name: 'entity.footnote.$2.secondary.muse'
        }
      ]
    },
    heading: {
      captures: {
        1: {name: 'keyword.operator.heading.bullet.muse'},
        2: {name: 'punctuation.whitespace.separator.muse'},
        3: {name: 'markup.heading.muse'}
      },
      match: '^(\\*{1,5})( )(.*)'
    },
    inline: {
      patterns: [
        {include: '#tags'},
        {include: '#example'},
        {include: '#emphasis'},
        {include: '#literal'},
        {include: '#link'},
        {include: '#footnoteReference'},
        {include: '#nbsp'},
        {include: '#underline'}
      ]
    },
    inlineInnards: {
      patterns: [
        {match: '(?:(?=\\G|^)|(?<=[\\w*]))\\*+(?=\\w)'},
        {include: '#inline'}
      ]
    },
    link: {
      begin: '(\\[)(?=\\[.*?\\]\\])',
      beginCaptures: {1: {name: 'punctuation.definition.link.begin.muse'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.link.end.muse'}},
      name: 'meta.link.muse',
      patterns: [
        {
          begin: '\\G(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.link.target.begin.muse'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.link.target.end.muse'}
          },
          name: 'meta.link.target.muse',
          patterns: [
            {
              captures: {1: {name: 'constant.other.reference.link.muse'}},
              match: '\\G\\s*([^\\s\\]]+)'
            },
            {
              captures: {
                1: {name: 'constant.numeric.width.muse'},
                2: {name: 'storage.modifier.align.muse'},
                3: {name: 'storage.modifier.align.muse'}
              },
              match: '(?<=\\s)(?:([\\d.]+)([rlf])?|([rlf]))'
            }
          ]
        },
        {
          begin: '(?<=\\])(\\[)',
          beginCaptures: {
            1: {name: 'punctuation.definition.link.label.begin.muse'}
          },
          contentName: 'entity.name.link.label.muse',
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.link.label.end.muse'}
          },
          name: 'meta.link.label.muse',
          patterns: [{include: '#inline'}]
        }
      ]
    },
    list: {
      begin: '^(\\s+)(?=-|(?:\\d+|[a-z]+|[A-Z]+)\\.)',
      beginCaptures: {1: {name: 'punctuation.whitespace.leading.muse'}},
      end: '(?=^(?!\\1)(?!\\s*$))|(?=^\\S)',
      name: 'markup.list.muse',
      patterns: [
        {
          begin: '(?<=\\S)\\s*$\\s*',
          end: '(?=^\\s*$|^(?=\\S))',
          patterns: [{include: '#listInnards'}]
        },
        {include: '#listInnards'}
      ]
    },
    listInnards: {
      patterns: [
        {include: '#listMarker'},
        {include: '#term'},
        {include: '#inline'}
      ]
    },
    listMarker: {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.list.unnumbered.marker.muse'}},
          match: '(?:\\G|^\\s+)(-)\\s'
        },
        {
          captures: {1: {name: 'keyword.operator.list.numbered.marker.muse'}},
          match: '(?:\\G|^\\s+)((?:\\d+|[a-z]+|[A-Z]+)\\.)\\s'
        }
      ]
    },
    literal: {
      begin: '(?<=\\W|^)=(?=\\S)',
      beginCaptures: {0: {name: 'punctuation.definition.literal.begin.muse'}},
      end: '(?!\\G)(?<=\\S)=(?=\\W|$)|(?=^[ \\t]*$)',
      endCaptures: {0: {name: 'punctuation.definition.literal.end.muse'}},
      name: 'markup.raw.literal.muse'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#heading'},
        {include: '#pageBreak'},
        {include: '#divider'},
        {include: '#anchorLine'},
        {include: '#term'},
        {include: '#list'},
        {include: '#verse'},
        {include: '#table'},
        {include: '#quote'},
        {include: '#footnote'},
        {include: '#inline'},
        {include: '#alignCentre'},
        {include: '#alignRight'},
        {include: '#alignLeft'}
      ]
    },
    nbsp: {match: '~~', name: 'constant.character.non-breaking-space.muse'},
    pageBreak: {
      captures: {
        1: {name: 'punctuation.whitespace.separator.muse'},
        2: {name: 'meta.separator.page-break.muse'}
      },
      match: '^(\\s{5})((?:\\s+\\*){5})'
    },
    quote: {
      begin: '^(\\s{2,5})(?=\\S)',
      end: '^(?!\\1|\\s*$)',
      name: 'markup.quote.paragraph.muse',
      patterns: [{include: '#anchor'}, {include: '#inline'}]
    },
    table: {
      begin: '^(?=\\s+(?:\\|\\+.*?\\+\\||\\S.*?\\s\\|{1,3}\\s+\\S))',
      end: '(?=\\s*$)',
      name: 'markup.table.muse',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.caption.begin.muse'},
            2: {name: 'constant.other.caption.muse'},
            3: {name: 'keyword.operator.caption.end.muse'}
          },
          match: '^\\s+(\\|\\+)(.*)(\\+\\|)',
          name: 'markup.table.caption.muse'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  captures: {
                    1: {name: 'keyword.operator.table.separator.muse'}
                  },
                  match: '\\s(\\|\\|\\|)\\s'
                },
                {
                  captures: {0: {patterns: [{include: '#inline'}]}},
                  match: '(?:[^|\\s]|\\s(?!\\|))+',
                  name: 'constant.other.table.footer.muse'
                }
              ]
            }
          },
          match: '^\\s+(\\S.*?\\s\\|\\|\\|\\s.*)\\s*$',
          name: 'markup.table.footer.muse'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  captures: {
                    1: {name: 'keyword.operator.table.separator.muse'}
                  },
                  match: '\\s(\\|\\|)\\s'
                },
                {
                  captures: {0: {patterns: [{include: '#inline'}]}},
                  match: '(?:[^|\\s]|\\s(?!\\|))+',
                  name: 'markup.heading.table.muse'
                }
              ]
            }
          },
          match: '^\\s+(\\S.*?\\s\\|\\|\\s.*)\\s*$',
          name: 'markup.table.header.muse'
        },
        {
          captures: {
            0: {
              patterns: [
                {
                  captures: {
                    1: {name: 'keyword.operator.table.separator.muse'}
                  },
                  match: '\\s(\\|)\\s'
                },
                {
                  captures: {0: {patterns: [{include: '#inline'}]}},
                  match: '(?:[^|\\s]|\\s(?!\\|))+',
                  name: 'constant.other.table.cell.muse'
                }
              ]
            }
          },
          match: '^\\s+(\\S.*?\\s\\|\\s.*)\\s*$',
          name: 'markup.table.body.muse'
        }
      ]
    },
    tags: {
      patterns: [
        {
          captures: {
            0: {name: 'entity.name.tag.br.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          match: '(<)br(>)',
          name: 'meta.tag.br.muse'
        },
        {
          begin: '(<)(center|right)(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.$2.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'meta.paragraph.align.$2.muse',
          end: '(</)\\2(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.$2.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.$2.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<)(code|example|verbatim)(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.$2.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.raw.code.muse',
          end: '(</)\\2(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.$2.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.$2.muse'
        },
        {
          begin: '(<)comment(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.comments.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'comment.block.muse',
          end: '(</)comment(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.comments.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.comment-block.muse'
        },
        {
          begin: '(<)em(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.em.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.italic.emphasis.muse',
          end: '(</)em(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.em.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.em.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<)strong(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.strong.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.bold.strong.emphasis.muse',
          end: '(</)strong(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.strong.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.strong.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<)del(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.del.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.deleted.muse',
          end: '(</)del(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.del.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.del.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<)sup(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.sup.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.superscript.muse',
          end: '(</)sup(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.sup.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.sup.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<)sub(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.sub.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.subscript.muse',
          end: '(</)sub(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.sub.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.sub.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^\\s*((<)verse(>))',
          beginCaptures: {
            1: {name: 'entity.name.tag.verse.muse'},
            2: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.quote.verse.muse',
          end: '(</)verse(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.verse.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.verse.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^\\s*((<)biblio(>))',
          beginCaptures: {
            1: {name: 'entity.name.tag.biblio.muse'},
            2: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'meta.citation.muse',
          end: '(</)biblio(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.biblio.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.biblio.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^\\s*((<)play(>))',
          beginCaptures: {
            1: {name: 'entity.name.tag.play.muse'},
            2: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'meta.play.muse',
          end: '(</)play(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.play.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.play.muse',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^\\s*((<)quote(>))',
          beginCaptures: {
            1: {name: 'entity.name.tag.quote.muse'},
            2: {name: 'punctuation.definition.tag.begin.muse'},
            3: {name: 'punctuation.definition.tag.end.muse'}
          },
          contentName: 'markup.quote.block.muse',
          end: '(</)quote(>)',
          endCaptures: {
            0: {name: 'entity.name.tag.quote.muse'},
            1: {name: 'punctuation.definition.tag.begin.muse'},
            2: {name: 'punctuation.definition.tag.end.muse'}
          },
          name: 'meta.tag.quote.muse',
          patterns: [{include: '#inline'}]
        },
        {include: '#unprocessed'}
      ]
    },
    term: {
      captures: {
        1: {name: 'entity.name.term.muse'},
        2: {name: 'keyword.operator.key-value.separator.muse'}
      },
      match: '^\\s+(\\S.*?)\\s+(::)\\s+'
    },
    underline: {
      begin: '(?<=\\W|^)_(?=[^\\s_])',
      beginCaptures: {0: {name: 'punctuation.definition.emphasis.begin.muse'}},
      end: '(?<=[^\\s_])_(?=\\W|$)|(?=^[ \\t]*$)',
      endCaptures: {0: {name: 'punctuation.definition.emphasis.end.muse'}},
      name: 'constant.other.reference.link.muse',
      patterns: [{include: '#inline'}]
    },
    unprocessed: {
      patterns: [
        {include: '#unprocessedLatex'},
        {include: '#unprocessedHTML'},
        {include: '#unprocessedXML'},
        {include: '#unprocessedTexinfo'},
        {include: '#unprocessedDefault'}
      ]
    },
    unprocessedDefault: {
      begin:
        '^\\s*((<)literal(?:\\s+((style)\\s*(=)\\s*(("|\'|\\b)([^>\\s]+)(\\7))))?\\s*(>))',
      beginCaptures: {
        0: {name: 'meta.tag.literal.muse'},
        1: {name: 'entity.name.tag.literal.muse'},
        10: {name: 'punctuation.definition.tag.end.muse'},
        2: {name: 'punctuation.definition.tag.begin.muse'},
        3: {name: 'meta.attribute-with-value.style.muse'},
        4: {name: 'entity.other.attribute-name.style.muse'},
        5: {name: 'punctuation.separator.key-value.muse'},
        6: {name: 'string.quoted.muse'},
        7: {name: 'punctuation.definition.string.begin.muse'},
        9: {name: 'punctuation.definition.string.end.muse'}
      },
      contentName: 'markup.raw.code.muse',
      end: '(</)literal(>)',
      endCaptures: {
        0: {name: 'entity.name.tag.literal.muse'},
        1: {name: 'punctuation.definition.tag.begin.muse'},
        2: {name: 'punctuation.definition.tag.end.muse'}
      },
      name: 'meta.unprocessed.$8-output.muse'
    },
    unprocessedHTML: {
      begin:
        '(?x) ^\\s* (\n\t(<) literal \\s+\n\t(\n\t\t(style) \\s* (=) \\s*\n\t\t(\n\t\t\t("|\'|\\b)\n\t\t\t( blosxom-html\n\t\t\t| blosxom-xhtml\n\t\t\t| journal-html\n\t\t\t| html\n\t\t\t| xhtml\n\t\t\t) (\\7)\n\t\t)\n\t) \\s* (>)\n)',
      beginCaptures: {
        0: {name: 'meta.tag.literal.muse'},
        1: {name: 'entity.name.tag.literal.muse'},
        10: {name: 'punctuation.definition.tag.end.muse'},
        2: {name: 'punctuation.definition.tag.begin.muse'},
        3: {name: 'meta.attribute-with-value.style.muse'},
        4: {name: 'entity.other.attribute-name.style.muse'},
        5: {name: 'punctuation.separator.key-value.muse'},
        6: {name: 'string.quoted.muse'},
        7: {name: 'punctuation.definition.string.begin.muse'},
        9: {name: 'punctuation.definition.string.end.muse'}
      },
      contentName: 'text.embedded.html.basic',
      end: '(</)literal(>)',
      endCaptures: {
        0: {name: 'entity.name.tag.literal.muse'},
        1: {name: 'punctuation.definition.tag.begin.muse'},
        2: {name: 'punctuation.definition.tag.end.muse'}
      },
      name: 'meta.unprocessed.$8-output.muse',
      patterns: [{include: 'text.html.basic'}]
    },
    unprocessedLatex: {
      begin:
        '(?x) ^\\s* (\n\t(<) literal \\s+\n\t(\n\t\t(style) \\s* (=) \\s*\n\t\t(\n\t\t\t("|\'|\\b)\n\t\t\t( book-latex\n\t\t\t| book-pdf\n\t\t\t| chapbook-latex\n\t\t\t| chapbook-pdf\n\t\t\t| context-pdf\n\t\t\t| context-slides-pdf\n\t\t\t| context-slides\n\t\t\t| context\n\t\t\t| journal-book-latex\n\t\t\t| journal-book-pdf\n\t\t\t| journal-latex\n\t\t\t| journal-pdf\n\t\t\t| journal-xhtml\n\t\t\t| latexcjk\n\t\t\t| latex\n\t\t\t| lecture-notes-pdf\n\t\t\t| lecture-notes\n\t\t\t| pdfcjk\n\t\t\t| pdf\n\t\t\t| poem-latex\n\t\t\t| poem-pdf\n\t\t\t| slides-pdf\n\t\t\t| slides\n\t\t\t) (\\7)\n\t\t)\n\t) \\s* (>)\n)',
      beginCaptures: {
        0: {name: 'meta.tag.literal.muse'},
        1: {name: 'entity.name.tag.literal.muse'},
        10: {name: 'punctuation.definition.tag.end.muse'},
        2: {name: 'punctuation.definition.tag.begin.muse'},
        3: {name: 'meta.attribute-with-value.style.muse'},
        4: {name: 'entity.other.attribute-name.style.muse'},
        5: {name: 'punctuation.separator.key-value.muse'},
        6: {name: 'string.quoted.muse'},
        7: {name: 'punctuation.definition.string.begin.muse'},
        9: {name: 'punctuation.definition.string.end.muse'}
      },
      contentName: 'text.embedded.latex',
      end: '(</)literal(>)',
      endCaptures: {
        0: {name: 'entity.name.tag.literal.muse'},
        1: {name: 'punctuation.definition.tag.begin.muse'},
        2: {name: 'punctuation.definition.tag.end.muse'}
      },
      name: 'meta.unprocessed.$8-output.muse',
      patterns: [{include: 'text.tex.latex'}]
    },
    unprocessedTexinfo: {
      begin:
        '(?x) ^\\s* (\n\t(<) literal \\s+\n\t(\n\t\t(style) \\s* (=) \\s*\n\t\t(\n\t\t\t("|\'|\\b)\n\t\t\t( info-pdf\n\t\t\t| info\n\t\t\t| texi\n\t\t\t) (\\7)\n\t\t)\n\t) \\s* (>)\n)',
      beginCaptures: {
        0: {name: 'meta.tag.literal.muse'},
        1: {name: 'entity.name.tag.literal.muse'},
        10: {name: 'punctuation.definition.tag.end.muse'},
        2: {name: 'punctuation.definition.tag.begin.muse'},
        3: {name: 'meta.attribute-with-value.style.muse'},
        4: {name: 'entity.other.attribute-name.style.muse'},
        5: {name: 'punctuation.separator.key-value.muse'},
        6: {name: 'string.quoted.muse'},
        7: {name: 'punctuation.definition.string.begin.muse'},
        9: {name: 'punctuation.definition.string.end.muse'}
      },
      contentName: 'text.embedded.texinfo',
      end: '(</)literal(>)',
      endCaptures: {
        0: {name: 'entity.name.tag.literal.muse'},
        1: {name: 'punctuation.definition.tag.begin.muse'},
        2: {name: 'punctuation.definition.tag.end.muse'}
      },
      name: 'meta.unprocessed.$8-output.muse',
      patterns: [{include: 'text.texinfo'}]
    },
    unprocessedXML: {
      begin:
        '(?x) ^\\s* (\n\t(<) literal \\s+\n\t(\n\t\t(style) \\s* (=) \\s*\n\t\t(\n\t\t\t("|\'|\\b)\n\t\t\t( docbook\n\t\t\t| journal-rdf\n\t\t\t| journal-rss-entry\n\t\t\t| journal-rss\n\t\t\t| xml\n\t\t\t) (\\7)\n\t\t)\n\t) \\s* (>)\n)',
      beginCaptures: {
        0: {name: 'meta.tag.literal.muse'},
        1: {name: 'entity.name.tag.literal.muse'},
        10: {name: 'punctuation.definition.tag.end.muse'},
        2: {name: 'punctuation.definition.tag.begin.muse'},
        3: {name: 'meta.attribute-with-value.style.muse'},
        4: {name: 'entity.other.attribute-name.style.muse'},
        5: {name: 'punctuation.separator.key-value.muse'},
        6: {name: 'string.quoted.muse'},
        7: {name: 'punctuation.definition.string.begin.muse'},
        9: {name: 'punctuation.definition.string.end.muse'}
      },
      contentName: 'text.embedded.xml',
      end: '(</)literal(>)',
      endCaptures: {
        0: {name: 'entity.name.tag.literal.muse'},
        1: {name: 'punctuation.definition.tag.begin.muse'},
        2: {name: 'punctuation.definition.tag.end.muse'}
      },
      name: 'meta.unprocessed.$8-output.muse',
      patterns: [{include: 'text.xml'}]
    },
    verse: {
      begin: '^(\\s*)(>)(\\s)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.leading.muse'},
        2: {name: 'keyword.operator.verse-line.muse'},
        3: {name: 'punctuation.whitespace.separator.muse'}
      },
      end: '^(?!\\1\\2\\3)',
      name: 'markup.quote.verse.muse',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.whitespace.leading.muse'},
            2: {name: 'keyword.operator.verse-line.muse'},
            3: {name: 'punctuation.whitespace.separator.muse'}
          },
          match: '^(\\s*)(>)(\\s)'
        },
        {include: '#inline'}
      ]
    }
  },
  scopeName: 'text.muse'
}

export default grammar
