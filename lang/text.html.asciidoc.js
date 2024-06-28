// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zuckschwerdt/asciidoc.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.asciidoc', '.adoc'],
  names: ['asciidoc'],
  patterns: [
    {include: '#heading_inline'},
    {include: '#heading-block'},
    {include: '#heading-blockattr'},
    {
      begin: '\\$\\$(?!\\$)',
      end: '\\$\\$(?!\\$)',
      name: 'comment.block.passthrough.macro.doubledollar.asciidoc'
    },
    {
      begin: '\\+\\+\\+(?!\\+)',
      end: '\\+\\+\\+(?!\\+)',
      name: 'comment.block.passthrough.macro.tripeplus.asciidoc'
    },
    {match: '(//).*$\\n?', name: 'comment.line.double-slash.asciidoc'},
    {
      begin:
        '(?x)^\n\t\t\t\t(?=\t([/+-.*_=]{4,})\\s*$\n\t\t\t\t|\t([ \\t]{1,})\n\t\t\t\t|\t[=]{1,6}\\s*+\n\t\t\t\t|\t[ ]{0,3}(?<marker>[-*_])([ ]{0,2}\\k<marker>){2,}[ \\t]*+$\n\t\t\t\t)',
      end: '(?x)^\n\t\t\t\t(?!\t\\1\n\t\t\t\t|\t([ \\t]{1,})\n\t\t\t\t|\t[=]{1,6}\\s*+\n\t\t\t\t|\t[ ]{0,3}(?<marker>[-*_])([ ]{0,2}\\k<marker>){2,}[ \\t]*+$\n\t\t\t\t)',
      name: 'meta.block-level.asciidoc',
      patterns: [
        {include: '#block_quote'},
        {include: '#block_raw'},
        {include: '#heading_inline'},
        {include: '#heading-block'},
        {include: '#separator'}
      ]
    },
    {
      begin: '^[ ]{0,3}([*+-])(?=\\s)',
      captures: {1: {name: 'punctuation.definition.list_item.asciidoc'}},
      end: '^(?=\\S)',
      name: 'markup.list.unnumbered.asciidoc',
      patterns: [{include: '#list-paragraph'}]
    },
    {
      begin: '^[ ]{0,3}[0-9]+(\\.)(?=\\s)',
      captures: {1: {name: 'punctuation.definition.list_item.asciidoc'}},
      end: '^(?=\\S)',
      name: 'markup.list.numbered.asciidoc',
      patterns: [{include: '#list-paragraph'}]
    },
    {
      begin: '^([/+-.*_=]){4,}\\s*$',
      end: '^\\1{4,}\\s*$',
      name: 'comment.block.asciidoc'
    },
    {
      begin: '^([/+.]){4,}\\s*$',
      end: '^[/+.]{4,}\\s*$',
      name: 'meta.disable-asciidoc'
    },
    {
      begin: '^(?=\\S)(?![=-]{3,}(?=$))(?!\\.\\S+)',
      end: '^(?:\\s*$|(?=[ ]{0,3}>.))|(?=[ \\t]*\\n)(?<=^===|^====|=====|^---|^----|-----)[ \\t]*\\n',
      name: 'meta.paragraph.asciidoc',
      patterns: [
        {include: '#inline'},
        {include: 'text.html.basic'},
        {
          captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
          match: '^(={3,})(?=[ \\t]*$)',
          name: 'markup.heading.0.asciidoc'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
          match: '^(-{3,})(?=[ \\t]*$)',
          name: 'markup.heading.1.asciidoc'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
          match: '^(~{3,})(?=[ \\t]*$)',
          name: 'markup.heading.2.asciidoc'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
          match: '^(\\^{3,})(?=[ \\t]*$)',
          name: 'markup.heading.3.asciidoc'
        },
        {
          captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
          match: '^(\\+{3,})(?=[ \\t]*$)',
          name: 'markup.heading.4.asciidoc'
        }
      ]
    }
  ],
  repository: {
    'attribute-entry': {
      match: '^:[-_. A-Za-z0-9]+:\\s*(.*)\\s*$',
      name: 'variable.other'
    },
    'attribute-reference': {
      match: '{[-_. A-Za-z0-9]+}',
      name: 'variable.other'
    },
    'attribute-reference-predefined': {
      match:
        '{(?i:amp|asciidoc-dir|asciidoc-file|asciidoc-version|author|authored|authorinitials|backend-docbook|backend-xhtml11|backend-html4|docbook-article|xhtml11-article|html4-article|docbook-book|xhtml11-book|html4-book|docbook-manpage|xhtml11-manpage|html4-manpage|backend|backslash|basebackend|brvbar|date|docdate|doctime|docname|docfile|docdir|doctitle|doctype-article|doctype-book|doctype-manpage|doctype|email|empty|encoding|filetype|firstname|gt|id|indir|infile|lastname|level|listindex|localdate|localtime|lt|manname|manpurpose|mantitle|manvolnum|middlename|nbsp|outdir|outfile|reftext|revision|sectnum|showcomments|title|two_colons|two_semicolons|user-dir|verbose)}',
      name: 'support.variable'
    },
    block_quote: {
      begin: '^([/+-.*_=]){4,}\\s*$',
      end: '^\\1{4,}\\s*$',
      name: 'comment.block.asciidoc'
    },
    block_raw: {
      match: '\\G([ ]{4}|\\t).*$\\n?',
      name: 'markup.raw.block.asciidoc'
    },
    bracket: {
      match: '<(?![a-z/?\\$!])',
      name: 'meta.other.valid-bracket.asciidoc'
    },
    'character-replacements': {
      match: '\\(C\\)|\\(R\\)|\\(TM\\)|--(?!-)|\\.\\.\\.(?!\\.)|->|<-|=>|<=',
      name: 'constant.character.asciidoc'
    },
    escape: {
      match: '\\\\[-`*_#+.!(){}\\[\\]\\\\>:]',
      name: 'constant.character.escape.asciidoc'
    },
    heading: {
      captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
      contentName: 'entity.name.section.asciidoc',
      match: '(?m)^(\\S+)$([=-~^+])+\\s*$',
      name: 'markup.heading.asciidoc'
    },
    'heading-block': {
      captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
      match: '^\\.(\\w.*)$',
      name: 'markup.heading.asciidoc'
    },
    'heading-blockattr': {
      captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
      match: '^\\[\\[?(\\w.*)\\]$',
      name: 'markup.heading.asciidoc'
    },
    heading_inline: {
      begin: '\\G(={1,6})(?!=)\\s*(?=\\S)',
      captures: {1: {name: 'punctuation.definition.heading.asciidoc'}},
      contentName: 'entity.name.section.asciidoc',
      end: '\\s*(=*)$\\n?',
      name: 'markup.heading.asciidoc',
      patterns: [{include: '#inline'}]
    },
    inline: {
      patterns: [
        {include: '#line-break'},
        {include: '#line-page-break'},
        {include: '#line-ruler'},
        {include: '#escape'},
        {include: '#passthrough-macro-trippleplus-inline'},
        {include: '#passthrough-macro-doubledollar-inline'},
        {include: '#character-replacements'},
        {include: '#text-xref'},
        {include: '#bracket'},
        {include: '#raw'},
        {include: '#text-quote-single'},
        {include: '#text-quote-double'},
        {include: '#text-quote-other'},
        {include: '#text-bold-unconstrained'},
        {include: '#text-italic-unconstrained'},
        {include: '#text-monospace-unconstrained'},
        {include: '#text-unquoted-unconstrained'},
        {include: '#text-footnote'},
        {include: '#text-indexterm'},
        {include: '#text-macro'},
        {include: '#text-image'},
        {include: '#text-anchor'},
        {include: '#text-link'},
        {include: '#text-mail-link'},
        {include: '#text-bold'},
        {include: '#text-italic'},
        {include: '#text-monospace'},
        {include: '#text-unquoted'},
        {include: '#text-footnote'},
        {include: '#attribute-entry'},
        {include: '#attribute-reference-predefined'},
        {include: '#attribute-reference'}
      ]
    },
    'line-break': {
      match: '(?<=\\S)\\s+\\+$',
      name: 'constant.character.escape.asciidoc'
    },
    'line-page-break': {
      match: '^<{3,}$',
      name: 'constant.character.escape.asciidoc'
    },
    'line-ruler': {
      match: "^'{3,}$",
      name: 'constant.character.escape.asciidoc'
    },
    'list-paragraph': {
      patterns: [
        {
          begin: '\\G\\s+(?=\\S)',
          end: '^\\s*$',
          name: 'meta.paragraph.list.asciidoc',
          patterns: [{include: '#inline'}]
        }
      ]
    },
    'passthrough-macro-doubledollar-inline': {
      match: '(?:\\[.*\\])?\\$\\$(?!\\$).+\\$\\$(?!\\$)',
      name: 'comment.block.passthrough.asciidoc'
    },
    'passthrough-macro-trippleplus-inline': {
      match: '(?:\\[.*\\])?\\+\\+\\+(?!\\+).+\\+\\+\\+(?!\\+)',
      name: 'comment.block.passthrough.asciidoc'
    },
    raw: {
      captures: {
        1: {name: 'punctuation.definition.raw.asciidoc'},
        3: {name: 'punctuation.definition.raw.asciidoc'}
      },
      match: '(`+)([^`]|(?!(?<!`)\\1(?!`))`)*+(\\1)',
      name: 'markup.raw.inline.asciidoc'
    },
    separator: {
      match: '\\G[ ]{0,3}([-*_])([ ]{0,2}\\1){2,}[ \\t]*$\\n?',
      name: 'meta.separator.asciidoc'
    },
    'text-anchor': {
      match: '(?:\\[\\[.*?\\]\\])|(?:\\banchor:[^\\[\\s]+(?:\\[.*?\\])?)',
      name: 'markup.underline.link.anchor.asciidoc'
    },
    'text-bold': {
      begin: '(?<!\\w)(\\*)(?=\\S)',
      captures: {1: {name: 'punctuation.definition.bold.asciidoc'}},
      end: '(?<=\\S)(\\1)(?!\\w)',
      name: 'markup.bold.asciidoc'
    },
    'text-bold-unconstrained': {
      begin: '(\\*\\*)(?=\\S)',
      captures: {1: {name: 'punctuation.definition.bold.asciidoc'}},
      end: '(?<=\\S)(\\1)',
      name: 'markup.bold.asciidoc'
    },
    'text-footnote': {
      match: '\\bfootnote(?:ref)?:\\[.*?\\]',
      name: 'string.quoted.single.asciidoc'
    },
    'text-image': {
      match: '\\b(?:image|link):[^\\[\\s]+(?:\\[.*?\\])?',
      name: 'markup.underline.link.image.asciidoc'
    },
    'text-indexterm': {
      match: '(?:\\bindexterm2?:\\[.*?\\])|(?:\\(\\(\\(?.*?\\)?\\)\\))',
      name: 'string.quoted.single.asciidoc'
    },
    'text-italic': {
      begin: "(?<!\\w)('|_)(?=\\S)",
      captures: {1: {name: 'punctuation.definition.italic.asciidoc'}},
      end: '(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))(?!\\w)',
      name: 'markup.italic.asciidoc'
    },
    'text-italic-unconstrained': {
      begin: '(__)(?=\\S)',
      captures: {1: {name: 'punctuation.definition.italic.asciidoc'}},
      end: '(?<=\\S)(\\1)',
      name: 'markup.italic.asciidoc'
    },
    'text-link': {
      match: '\\b(?:http|mailto):[^\\[\\s]+(?:\\[.*?\\])?',
      name: 'markup.underline.link.inet.asciidoc'
    },
    'text-macro': {
      match: '\\S+::[^\\[\\s]+(?:\\[.*?\\])?',
      name: 'string.quoted.single.asciidoc'
    },
    'text-mail-link': {
      match: '\\b[^@\\s]+@[^@\\s]+\\b',
      name: 'markup.underline.link.email.asciidoc'
    },
    'text-monospace': {
      match: '(?<!\\w)([\\+`]).*(\\1)(?!\\w)',
      name: 'string.interpolated.asciidoc'
    },
    'text-monospace-unconstrained': {
      match: '(\\+\\+).*(\\1)',
      name: 'string.interpolated.asciidoc'
    },
    'text-quote-double': {
      match: "(?<!\\w)(?:\\[.*\\])?``(?!`).*''(?!')(?!\\w)",
      name: 'string.quoted.double.asciidoc'
    },
    'text-quote-other': {
      match: '(?<!\\w)(?:\\[.*\\])?([~^]).*(\\1)(?!\\w)',
      name: 'string.quoted.single.asciidoc'
    },
    'text-quote-single': {
      match: "(?<!\\w)(?:\\[.*\\])?`(?!`).*'(?!')(?!\\w)",
      name: 'string.quoted.single.asciidoc'
    },
    'text-unquoted': {
      match: '(?<!\\w)(#).*(\\1)(?!\\w)',
      name: 'string.unquoted.asciidoc'
    },
    'text-unquoted-unconstrained': {
      match: '(##).*(\\1)',
      name: 'string.unquoted.asciidoc'
    },
    'text-xref': {
      match: '(?:<<.*?>>)|(?:\\bxref:[^\\[\\s]+(?:\\[.*?\\])?)',
      name: 'markup.underline.link.xref.asciidoc'
    }
  },
  scopeName: 'text.html.asciidoc'
}

export default grammar
