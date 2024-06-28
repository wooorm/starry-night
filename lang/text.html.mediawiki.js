// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mediawiki', '.wiki', '.wikitext'],
  names: ['wikitext', 'mediawiki', 'wiki'],
  patterns: [{include: '#block'}, {include: '#inline'}],
  repository: {
    block: {
      patterns: [
        {
          begin: '^\\s*(?i)(#redirect)',
          beginCaptures: {1: {name: 'keyword.control.redirect.mediawiki'}},
          end: '\\n',
          name: 'meta.redirect.mediawiki',
          patterns: [{include: '#link'}]
        },
        {
          begin: ' ?(<)(source)[ \\t]+(lang)(=)("[^"]+")(>)',
          beginCaptures: {
            0: {name: 'meta.tag.source.mediawiki'},
            1: {name: 'punctuation.definition.tag.mediawiki'},
            2: {name: 'storage.type.mediawiki'},
            3: {name: 'storage.type.mediawiki'},
            4: {name: 'punctuation.section.mediawiki'},
            5: {name: 'string.quoted.mediawiki'},
            6: {name: 'punctuation.definition.tag.mediawiki'}
          },
          end: ' ?(</)(source)(>)',
          endCaptures: {
            0: {name: 'meta.tag.source.mediawiki'},
            1: {name: 'punctuation.definition.tag.mediawiki'},
            2: {name: 'storage.type.mediawiki'},
            3: {name: 'punctuation.definition.tag.mediawiki'}
          }
        },
        {
          captures: {
            1: {name: 'punctuation.definition.heading.mediawiki'},
            2: {name: 'entity.name.section.mediawiki'},
            3: {
              patterns: [
                {
                  match: '=+$',
                  name: 'invalid.illegal.extra-equals-sign.mediawiki'
                },
                {include: '#inline'}
              ]
            },
            4: {name: 'punctuation.definition.heading.mediawiki'}
          },
          match: '^(={1,6})(?!=)((.+))(\\1)\\s*$\\n?',
          name: 'markup.heading.${1/=(?<b>=)?(?<c>=)?(?<d>=)?(?<e>=)?(?<f>=)?/${f:?6:${e:?5:${d:?4:${c:?3:${b:?2:1}}}}}/}.mediawiki'
        },
        {match: '^-{4,}[ \\t]*($\\n)?', name: 'meta.separator.mediawiki'},
        {
          begin: '^ (?=\\s*\\S)',
          end: '^(?=[^ ])',
          name: 'markup.raw.block.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^([#:;])',
          end: '^(?!\\1)',
          name: 'markup.list.numbered.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '^([*])',
          end: '^(?!\\1)',
          name: 'markup.list.unnumbered.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {include: '#table'},
        {include: '#comments'},
        {
          begin: '^(?![\\t ;*#:=]|----|$)',
          end: '^(?:\\s*$|(?=[;*#:=]|----))',
          name: 'meta.paragraph.mediawiki',
          patterns: [{include: '#inline'}]
        }
      ]
    },
    block_html: {
      patterns: [
        {
          begin: '(<math>)',
          captures: {
            0: {name: 'punctuation.section.embedded.tex.math'},
            1: {name: 'meta.tag.inline.math.mediawiki'},
            2: {name: 'source.tex.math'}
          },
          contentName: 'source.tex.math',
          end: '((<)/math>)',
          name: 'meta.embedded.tex.math',
          patterns: [{include: 'text.tex#math'}]
        },
        {
          begin: '<table[^>]*>',
          contentName: 'source.html',
          end: '</table>',
          name: 'meta.embedded.html.table',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '(<)(ref)(>)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.ref.mediawiki'},
            2: {name: 'entity.name.tag.ref.mediawiki'},
            3: {name: 'meta.tag.inline.ref.mediawiki'}
          },
          contentName: 'meta.reference.content.mediawiki',
          end: '(</)(ref)(>)',
          endCaptures: {
            1: {name: 'meta.tag.inline.ref.mediawiki'},
            2: {name: 'entity.name.tag.ref.mediawiki'},
            3: {name: 'meta.tag.inline.ref.mediawiki'}
          },
          name: 'meta.reference.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          captures: {
            1: {name: 'meta.tag.inline.ref.mediawiki'},
            2: {name: 'entity.name.tag.ref.mediawiki'},
            4: {name: 'entity.name.tag.name.mediawiki'},
            5: {name: 'meta.tag.inline.ref.mediawiki'},
            6: {name: 'string.quoted.ref.name.mediawiki'},
            7: {name: 'meta.tag.inline.ref.mediawiki'}
          },
          match: '(<)(ref) *((name) *(=) *([^>]*))(/>)',
          name: 'meta.reference.named.cite.mediawiki'
        },
        {
          begin: '(<)(ref) *((name) *(=) *([^>]*))(>)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.ref.mediawiki'},
            2: {name: 'entity.name.tag.ref.mediawiki'},
            4: {name: 'entity.name.tag.name.mediawiki'},
            5: {name: 'meta.tag.inline.ref.mediawiki'},
            6: {name: 'string.quoted.ref.name.mediawiki'},
            7: {name: 'meta.tag.inline.ref.mediawiki'}
          },
          contentName: 'meta.reference.content.labelled.mediawiki',
          end: '(</ref>)',
          endCaptures: {1: {name: 'meta.tag.inline.ref.mediawiki'}},
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<gallery>)',
          captures: {1: {name: 'meta.tag.inline.ref.mediawiki'}},
          contentName: 'meta.gallery.mediawiki',
          end: '(</gallery>)',
          patterns: [
            {
              begin:
                '(?x)\n\t\t\t\t\t\t\t\t^(?!\\s*\\n)\t          # not an empty line\n\t\t\t\t\t\t\t\t( [ ]*(((i|I)mage)(:))  # spaces, image, colon\n\t\t\t\t\t\t\t\t  ([^\\[\\]|]+)           # anything\n\t\t\t\t\t\t\t\t  (?<!\\s)[ ]*           # spaces\n\t\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t\t',
              beginCaptures: {
                3: {name: 'constant.other.namespace.image.mediawiki'},
                5: {name: 'punctuation.fix_this_later.colon.mediawiki'},
                6: {name: 'constant.other.wiki-link.image.mediawiki'}
              },
              end: '\\n',
              name: 'meta.item.gallery.mediawiki',
              patterns: [
                {
                  begin: '^(?!\\|)|(\\|)',
                  beginCaptures: {
                    1: {name: 'punctuation.fix_this_later.pipe.mediawiki'}
                  },
                  contentName: 'string.other.title.gallery.mediawiki',
                  end: '\\n|(?=\\|)',
                  patterns: [{include: '#inline'}]
                },
                {
                  match: '\\|',
                  name: 'punctuation.fix_this_later.pipe.mediawiki'
                }
              ]
            }
          ]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '<!--',
          end: '--\\s*>',
          name: 'comment.block.html.mediawiki',
          patterns: [
            {
              match: '--',
              name: 'invalid.illegal.bad-comments-or-CDATA.html.mediawiki'
            }
          ]
        }
      ]
    },
    entities: {
      patterns: [
        {
          match: '&([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);',
          name: 'constant.character.entity.html.mediawiki'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.html.mediawiki'}
      ]
    },
    inline: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.other.date-time.mediawiki'},
            2: {name: 'invalid.illegal.too-many-tildes.mediawiki'}
          },
          match: '(~~~~~)(~{0,2})(?!~)'
        },
        {match: '~~~~?', name: 'constant.other.signature.mediawiki'},
        {include: '#link'},
        {include: '#style'},
        {include: '#table'},
        {include: '#template'},
        {include: '#block_html'},
        {include: '#comments'}
      ]
    },
    link: {
      patterns: [
        {
          applyEndPatternLast: true,
          begin:
            '(?x:\n\t\t\t\t\t\t(\\[\\[)                         # opening brackets\n\t\t\t\t\t\t  ( [ ]*(((i|I)mage)(:))       # spaces, image, colon\n\t\t\t\t\t\t    ([^\\[\\]|]+)                # anything\n\t\t\t\t\t\t    (?<!\\s)[ ]*                # spaces\n\t\t\t\t\t\t  )\n\t\t\t\t\t)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.any.mediawiki'},
            4: {name: 'constant.other.namespace.image.mediawiki'},
            6: {name: 'punctuation.fix_this_later.colon.mediawiki'},
            7: {name: 'constant.other.wiki-link.image.mediawiki'}
          },
          end: '(?x:\n\t\t\t\t\t\t  ((\\|)[ ]*( [^\\[\\]|]+ )[ ]*)? # pipe, spaces, anything, spaces\n\t\t\t\t\t\t(\\]\\])                         # closing brackets\n\t\t\t\t\t)',
          endCaptures: {
            2: {name: 'punctuation.fix_this_later.pipe.mediawiki'},
            3: {name: 'string.other.title.link.wiki-link.mediawiki'}
          },
          name: 'meta.image.wiki.mediawiki',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.fix_this_later.pipe.mediawiki'},
                2: {name: 'keyword.control.image.formatting.mediawiki'},
                3: {name: 'keyword.control.image.alignment.mediawiki'},
                4: {name: 'constant.numeric.image.width.mediawiki'},
                5: {name: 'constant.other.unit.mediawiki'}
              },
              match:
                '(?x)\n\t\t\t\t\t\t\t\t(\\|)[ ]*\n\t\t\t\t\t\t\t\t( (thumb|thumbnail|frame)\n\t\t\t\t\t\t\t\t |(right|left|center|none)\n\t\t\t\t\t\t\t\t |([0-9]+)(px)\n\t\t\t\t\t\t\t\t)[ ]*\n\t\t\t\t\t\t\t'
            },
            {match: '\\|', name: 'punctuation.fix_this_later.pipe.mediawiki'},
            {include: '#style_in_link'}
          ]
        },
        {
          begin:
            '(?x:\n\t\t\t\t\t({{)                       # opening brackets\n\t\t\t\t\t\t([Rr]edirect|subst:.*)   # redirect?\n\t\t\t\t\t\t[ ]*                   # spaces\n\t\t\t\t\t\t(\\|)                   # pipe\n\t\t\t\t\t)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.redirect.mediawiki'},
            2: {name: 'keyword.operator.wiki-link.redirect.mediawiki'},
            3: {name: 'constant.other.pipe.mediawiki'}
          },
          end: '(?x:\n\t\t\t\t\t\t\t(([\\|}]+)(\\|)([\\|}]+))?   #  from | to \n\t\t\t\t\t\t\t([^}]*)                   # anything\n\t\t\t\t\t\t\t(}})                      # closing brackets\n\t\t\t\t\t)',
          endCaptures: {
            2: {name: 'meta.tag.inline.any.mediawiki'},
            3: {name: 'markup.underline.link.internal.mediawiki'},
            4: {name: 'constant.other.pipe.mediawiki'},
            6: {name: 'meta.tag.inline.redirect.mediawiki'}
          },
          name: 'meta.link.wiki.redirect.mediawiki',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin:
            '(?x:\n\t\t\t\t\t\t(\\[\\[)                       # opening brackets\n\t\t\t\t\t\t  (:)?                       # colon to suppress image or category?\n\t\t\t\t\t\t  ((\\s+):[^\\[\\]]*(?=\\]\\]))?  # a colon after spaces is invalid\n\t\t\t\t\t\t  [ ]*                       # spaces\n\t\t\t\t\t\t  ( (([^\\[\\]|]+)(:))?        # namespace\n\t\t\t\t\t\t    ([^\\[\\]|]+)(?<!\\s)[ ]*   # link name\n\t\t\t\t\t\t  )?\n\t\t\t\t\t)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.any.mediawiki'},
            2: {
              name: 'keyword.operator.wiki-link.suppress-image-or-category.mediawiki'
            },
            4: {name: 'invalid.illegal.whitespace.mediawiki'},
            7: {name: 'constant.other.namespace.mediawiki'},
            8: {name: 'punctuation.fix_this_later.colon.mediawiki'},
            9: {name: 'constant.other.wiki-link.mediawiki'}
          },
          end: '(?x:\n\t\t\t\t\t\t  (\\|[ ]*([^\\[\\]\\|]+)[ ]*)?     # pipe, spaces, anything, spaces\n\t\t\t\t\t\t(\\]\\])                         # closing brackets\n\t\t\t\t\t)',
          endCaptures: {
            2: {name: 'string.other.title.link.wiki-link.mediawiki'},
            3: {name: 'meta.tag.inline.any.mediawiki'}
          },
          name: 'meta.link.wiki.mediawiki',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '\\[(\\S+)\\s*(?=[^\\]]*\\])',
          beginCaptures: {
            1: {name: 'markup.underline.link.external.mediawiki'}
          },
          contentName: 'string.other.title.link.external.mediawiki',
          end: '\\]',
          name: 'meta.link.inline.external.mediawiki',
          patterns: [{include: '#style_in_link'}]
        },
        {
          match:
            '((https?|ftp|file)://|mailto:)[-:@a-zA-Z0-9_.~%+/?=&#]+(?<![.?:])',
          name: 'markup.underline.link.external.mediawiki'
        }
      ]
    },
    style: {
      patterns: [
        {
          begin: "'''",
          end: "'''",
          name: 'markup.bold.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          begin: "''",
          end: "''(?!'[^'])",
          name: 'markup.italic.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(b|strong)>)',
          captures: {1: {name: 'meta.tag.inline.bold.html.mediawiki'}},
          contentName: 'markup.bold.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(i|em)>)',
          captures: {1: {name: 'meta.tag.inline.italic.html.mediawiki'}},
          contentName: 'markup.italic.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(s|strike)>)',
          captures: {1: {name: 'meta.tag.inline.strikethrough.html.mediawiki'}},
          contentName: 'markup.other.strikethrough.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(u)>)',
          captures: {1: {name: 'meta.tag.inline.underline.html.mediawiki'}},
          contentName: 'markup.underline.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(tt|code)>)',
          captures: {1: {name: 'meta.tag.inline.raw.html.mediawiki'}},
          contentName: 'markup.raw.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '(<(big|small|sub|sup)>)',
          captures: {1: {name: 'meta.tag.inline.any.html.mediawiki'}},
          contentName: 'markup.other.inline-styles.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#inline'}]
        }
      ]
    },
    style_in_link: {
      patterns: [
        {
          begin: "'''",
          end: "'''",
          name: 'markup.bold.mediawiki',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: "''",
          end: "''",
          name: 'markup.italic.mediawiki',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(b|strong)>)',
          captures: {1: {name: 'meta.tag.inline.bold.html.mediawiki'}},
          contentName: 'markup.bold.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(i|em)>)',
          captures: {1: {name: 'meta.tag.inline.italic.html.mediawiki'}},
          contentName: 'markup.italic.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(s|strike)>)',
          captures: {1: {name: 'meta.tag.inline.strikethrough.html.mediawiki'}},
          contentName: 'markup.other.strikethrough.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(u)>)',
          captures: {1: {name: 'meta.tag.inline.underline.html.mediawiki'}},
          contentName: 'markup.underline.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(tt|code)>)',
          captures: {1: {name: 'meta.tag.inline.raw.html.mediawiki'}},
          contentName: 'markup.raw.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {
          begin: '(<(big|small|sub|sup)>)',
          captures: {1: {name: 'meta.tag.inline.any.html.mediawiki'}},
          contentName: 'markup.other.inline-styles.html.mediawiki',
          end: '(</\\2>)',
          patterns: [{include: '#style_in_link'}]
        },
        {include: '#comments'}
      ]
    },
    table: {
      patterns: [
        {
          begin: '^({\\|)',
          beginCaptures: {1: {name: 'meta.tag.inline.table.mediawiki'}},
          end: '(^\\|})',
          endCaptures: {1: {name: 'meta.tag.inline.table.mediawiki'}},
          name: 'markup.other.table.mediawiki',
          patterns: [
            {
              captures: {
                1: {name: 'meta.tag.inline.table.caption.mediawiki'},
                2: {name: 'variable.parameter.name.string.mediawiki'}
              },
              match: '^(\\|\\+)[\\t ]*(.*)$',
              name: 'meta.table.caption.mediawiki'
            },
            {
              begin: '^\\|-',
              beginCaptures: {1: {name: 'meta.tag.inline.table.mediawiki'}},
              end: '^(?=\\|-|^\\|})',
              name: 'markup.other.table.row.mediawiki',
              patterns: [{include: '#inline'}]
            },
            {
              captures: {
                1: {name: 'meta.tag.inline.table.cellwall.mediawiki'},
                2: {name: 'string.other.table.cellcontents.mediawiki'}
              },
              match: '(^\\||\\|\\|) *([^\\|]*) *',
              name: 'meta.table.cell.mediawiki'
            },
            {include: '#inline'}
          ]
        }
      ]
    },
    template: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter.template.numeric.mediawiki'}
          },
          match: '{{{[ ]*([0-9]+)[ ]*}}}',
          name: 'meta.template-parameter.mediawiki'
        },
        {
          captures: {1: {name: 'variable.parameter.template.named.mediawiki'}},
          match: '{{{[ ]*(.*?)[ ]*}}}',
          name: 'meta.template-parameter.mediawiki'
        },
        {
          begin: '({{)(?=[ ]*#)',
          beginCaptures: {
            1: {name: 'meta.tag.inline.template.mediawiki'},
            2: {name: 'meta.function-call.template.mediawiki'}
          },
          end: '(}})',
          endCaptures: {1: {name: 'meta.tag.inline.template.mediawiki'}},
          name: 'meta.template.parser-function.mediawiki',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '({{)([^{}\\|]+)?',
          beginCaptures: {
            1: {name: 'meta.tag.inline.template.mediawiki'},
            2: {name: 'meta.function-call.template.mediawiki'}
          },
          end: '(}})',
          endCaptures: {1: {name: 'meta.tag.inline.template.mediawiki'}},
          name: 'meta.template.mediawiki',
          patterns: [
            {include: '#comments'},
            {
              begin: '(\\|)\\s*(=)',
              beginCaptures: {
                1: {name: 'punctuation.fix_this_later.pipe.mediawiki'},
                2: {name: 'punctuation.fix_this_later.equals-sign.mediawiki'}
              },
              contentName: 'comment.block.template-hack.mediawiki',
              end: '(?=[|}])'
            },
            {
              begin: '(\\|)(([^{}\\|=]+)(=))?',
              beginCaptures: {
                1: {name: 'punctuation.fix_this_later.pipe.mediawiki'},
                2: {name: 'variable.parameter.template.mediawiki'},
                3: {name: 'punctuation.fix_this_later.equals-sign.mediawiki'}
              },
              contentName: 'meta.value.template.mediawiki',
              end: '(?=[|}])',
              patterns: [{include: '#inline'}]
            },
            {match: '\\|', name: 'punctuation.fix_this_later.pipe.mediawiki'}
          ]
        }
      ]
    }
  },
  scopeName: 'text.html.mediawiki'
}

export default grammar
