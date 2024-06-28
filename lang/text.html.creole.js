// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Siddley/Creole>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.creole'],
  names: ['creole'],
  patterns: [
    {
      name: 'meta.block-level.creole',
      patterns: [
        {include: '#block_raw'},
        {include: '#heading'},
        {include: '#inline'}
      ]
    },
    {
      begin: '^ *([*])+(?=\\s)',
      captures: {1: {name: 'punctuation.definition.list_item.creole'}},
      end: '^(?=\\S)',
      name: 'markup.list.unnumbered.creole',
      patterns: [{include: '#list-paragraph'}, {include: '#inline'}]
    },
    {
      begin: '^[ ]*(#)(?=\\s)',
      captures: {1: {name: 'punctuation.definition.list_item.creole'}},
      end: '^(?=\\S)',
      name: 'markup.list.numbered.creole',
      patterns: [{include: '#list-paragraph'}, {include: '#inline'}]
    },
    {
      begin:
        '^(?=<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\\b)(?!.*?</\\1>)',
      end: '(?<=^</\\1>$\\n)',
      name: 'meta.disable-markdown',
      patterns: [{include: 'text.html.basic'}]
    },
    {
      begin:
        '^(?=<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\\b)',
      end: '$\\n?',
      name: 'meta.disable-markdown',
      patterns: [{include: 'text.html.basic'}]
    },
    {
      match: '^ *-{4,} *$\\n?',
      name: 'punctuation.definition.horizonlal-rule.creole'
    }
  ],
  repository: {
    ampersand: {
      match: '&(?!([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)',
      name: 'meta.other.valid-ampersand.markdown'
    },
    block_raw: {
      patterns: [
        {
          begin: '^(\\{\\{\\{)\\s*$\\n?',
          captures: {1: {name: 'punctuation.definition.raw.creole'}},
          end: '^(\\}\\}\\})\\s*$\\n?',
          name: 'markup.raw.block.creole'
        }
      ]
    },
    bold: {
      begin:
        "(?x)\n\t\t\t\t\t\t(?<!\\*|^)(\\*\\*)(?=\\S)\t\t\t\t\t\t# opening **\n\t\t\t\t\t\t(?=\t\t\t\t\t\t\t\t\t\t\t\t# zero-width positive lookahead\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t    <[^>]*+>\t\t\t\t\t\t# match any HTML tag\n\t\t\t\t\t\t\t  | ~[\\\\*{}\\[\\]#\\|/>]?+\t\t\t\t\t# or escape characters\n\t\t\t\t\t\t\t  | \\[\t\t\t\t\t\t\t\t\t\t# or literal [\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t        (?<square>\t\t\t\t# named group\n\t\t\t\t\t\t\t\t\t\t\t[^\\[\\]~]\t\t\t\t\t# don't match these\n\t\t\t\t\t\t\t\t          | ~.\t\t\t\t\t\t\t# or escaped characters\n\t\t\t\t\t\t\t\t          | \\[ \\g<square>*+ \\]\t# or nested group\n\t\t\t\t\t\t\t\t        )*+\n\t\t\t\t\t\t\t\t\t\\]\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t  | (?!(?<=\\S)\\1).\t\t\t\t\t\t# or everything else\n\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t(?<=\\S)\\1\t\t\t\t\t\t\t\t# closing **\n\t\t\t\t\t\t)\t\t\t\t\t\t\t\t\t\t\t\t# close positive lookahead\n\t\t\t\t\t",
      captures: {1: {name: 'punctuation.definition.bold.creole'}},
      end: '(?<=\\S)(\\1)',
      name: 'markup.bold.creole',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?=<[^>]*?>)',
          end: '(?<=>)',
          patterns: [{include: 'text.html.basic'}]
        },
        {include: '#inline'}
      ]
    },
    bracket: {
      match: '<(?![a-z/?\\$!])',
      name: 'meta.other.valid-bracket.creole'
    },
    escape: {
      match: '~[*#{}\\|\\[\\]\\\\/>]+',
      name: 'constant.character.escape.creole'
    },
    heading: {
      begin: '\\G(={1,6})(?!=)\\s*(?=\\S)',
      captures: {1: {name: 'punctuation.definition.heading.creole'}},
      contentName: 'entity.name.section.creole',
      end: '\\s*(=*) *$\\n?',
      name: 'markup.heading.creole',
      patterns: [{include: '#inline'}]
    },
    'image-inline': {
      captures: {
        1: {name: 'punctuation.definition.image.creole'},
        2: {name: 'markup.underline.link.creole'},
        4: {name: 'punctuation.definition.image.creole'},
        5: {name: 'string.other.image.title.creole'},
        6: {name: 'punctuation.definition.image.creole'}
      },
      match:
        '(?x:\n\t\t\t\t(\\{\\{)\t\t\t\t\t\t# opening double curly bracket\n\t\t\t\t(\\s*[^\\s\\|]+[^\\|]+?)\t\t# the url; anything except pipe (at least 1 not whitespace)\n\t\t\t\t((\\|)\t\t\t\t\t\t# pipe separator\n\t\t\t\t(\\s*[^\\|\\s]+[^\\|]+)\t\t\t# title text\n\t\t\t\t\t)?\t\t\t\t\t\t# pipe and title are optional\n\t\t\t\t(\\}\\})\t\t\t\t\t\t# close double curly bracket (end image)\n\t\t\t )',
      name: 'meta.image.inline.creole'
    },
    inline: {
      patterns: [
        {include: '#inline_raw'},
        {include: '#link-inline'},
        {include: '#link-inet'},
        {include: '#link-email'},
        {include: '#line-break'},
        {include: '#image-inline'},
        {include: '#italic'},
        {include: '#bold'},
        {include: '#escape'},
        {include: '#bracket'},
        {include: '#ampersand'}
      ]
    },
    inline_raw: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.raw.creole'},
            2: {name: 'punctuation.definition.raw.creole'}
          },
          match: '(\\{\\{\\{).*?(\\}\\}\\})',
          name: 'markup.raw.inline.creole'
        }
      ]
    },
    italic: {
      begin:
        "(?x)\n\t\t\t\t\t\t(\\/\\/)(?=\\S)\t\t\t\t\t\t\t\t\t# opening //\n\t\t\t\t\t\t(?=\t\t\t\t\t\t\t\t\t\t\t\t# zero-width positive lookahead\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t    <[^>]*+>\t\t\t\t\t\t# match any HTML tag\n\t\t\t\t\t\t\t  | ~[\\\\*{}\\[\\]#\\|/>]?+\t\t\t\t\t# or escape characters\n\t\t\t\t\t\t\t  | \\[\t\t\t\t\t\t\t\t\t\t# or literal [\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t        (?<square>\t\t\t\t# named group\n\t\t\t\t\t\t\t\t\t\t\t[^\\[\\]~]\t\t\t\t\t# don't match these\n\t\t\t\t\t\t\t\t          | ~.\t\t\t\t\t\t\t# or escaped characters\n\t\t\t\t\t\t\t\t          | \\[ \\g<square>*+ \\]\t# or nested group\n\t\t\t\t\t\t\t\t        )*+\n\t\t\t\t\t\t\t\t\t\\]\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t  | (?!(?<=\\S)\\1).\t\t\t\t\t\t# or everything else\n\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t(?<=\\S)\\1\t\t\t\t\t\t\t\t# closing //\n\t\t\t\t\t\t)\t\t\t\t\t\t\t\t\t\t\t\t# close positive lookahead\n\t\t\t\t\t",
      captures: {1: {name: 'punctuation.definition.italic.creole'}},
      end: '(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))',
      name: 'markup.italic.creole',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '(?=<[^>]*?>)',
          end: '(?<=>)',
          patterns: [{include: 'text.html.basic'}]
        },
        {include: '#inline'}
      ]
    },
    'line-break': {
      match: ' *(\\\\\\\\){1} *',
      name: 'punctuation.definition.line-break.creole'
    },
    'link-email': {
      captures: {
        1: {name: 'invalid.illegal.punctuation.link.creole'},
        2: {name: 'markup.underline.link.creole'},
        4: {name: 'invalid.illegal.punctuation.link.creole'}
      },
      match: '(<)((?:mailto:)?[-.\\w]+@[-a-z0-9]+(\\.[-a-z0-9]+)*\\.[a-z]+)(>)',
      name: 'meta.link.email.lt-gt.creole'
    },
    'link-inet': {
      captures: {
        1: {name: 'invalid.illegal.punctuation.link.creole'},
        2: {name: 'markup.underline.link.creole'},
        3: {name: 'invalid.illegal.punctuation.link.creole'}
      },
      match: '(<)?((?:https?|ftp)://[^\\s>]+)(>)?',
      name: 'meta.link.inet.creole'
    },
    'link-inline': {
      captures: {
        1: {name: 'punctuation.definition.link.creole'},
        2: {name: 'markup.underline.link.creole'},
        4: {name: 'punctuation.definition.link.creole'},
        5: {name: 'string.other.link.title.creole'},
        6: {name: 'punctuation.definition.link.creole'}
      },
      match:
        '(?x:\n\t\t\t\t(\\[\\[)\t\t\t\t\t\t# opening double square bracket\n\t\t\t\t(\\s*[^\\s\\|]+[^\\|]+?)\t\t# the url; anything except pipe (at least 1 not whitespace)\n\t\t\t\t((\\|)\t\t\t\t\t\t# pipe separator\n\t\t\t\t(\\s*[^\\|\\s]+[^\\|]+)\t\t\t# title text\n\t\t\t\t\t)?\t\t\t\t\t\t# pipe and title are optional\n\t\t\t\t(\\]\\])\t\t\t\t\t\t# close double square bracket (end link)\n\t\t\t )',
      name: 'meta.link.inline.creole'
    },
    'list-paragraph': {
      patterns: [
        {
          begin: '\\G\\s+(?=\\S)',
          end: '^\\s*$',
          name: 'meta.paragraph.list.creole',
          patterns: [{include: '#inline'}]
        }
      ]
    }
  },
  scopeName: 'text.html.creole'
}

export default grammar
