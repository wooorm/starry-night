// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mariozaizar/language-eml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.eml', '.mbox'],
  names: ['e-mail', 'email', 'eml', 'mail', 'mbox'],
  patterns: [
    {include: '#addresses'},
    {include: '#headers'},
    {include: '#boundary'},
    {include: '#encodedWord'},
    {include: '#encodingTypes'},
    {include: '#uuid'},
    {include: '#base64'},
    {include: '#html'},
    {include: '#quote'},
    {include: '#ipv4'},
    {include: '#ipv6'}
  ],
  repository: {
    addresses: {
      patterns: [
        {
          captures: {
            1: {name: 'string.quoted.double.author-name.eml'},
            2: {name: 'punctuation.definition.string.begin.eml'},
            3: {name: 'punctuation.definition.string.end.eml'},
            4: {name: 'constant.other.author-address.eml'},
            5: {name: 'punctuation.definition.tag.begin.eml'},
            6: {name: 'punctuation.definition.tag.end.eml'}
          },
          match:
            '(?ix)\n((") [-a-zA-Z0-9.\\x20+_]+ (")) \\s*\n((<) [-a-zA-Z0-9.]+@[-a-zA-Z0-9.]+ (>))',
          name: 'meta.email-address.eml'
        },
        {
          captures: {
            1: {name: 'string.quoted.double.author-name.eml'},
            2: {name: 'punctuation.definition.string.begin.eml'},
            3: {name: 'punctuation.definition.string.end.eml'},
            4: {name: 'constant.other.author-address.eml'},
            5: {name: 'punctuation.definition.tag.begin.eml'},
            6: {name: 'punctuation.definition.tag.end.eml'}
          },
          match:
            '(?ix)\n((") [-a-zA-Z0-9.\\ +_]+ (")) \\s*\n((&lt;) [-a-zA-Z0-9.]+@[-a-zA-Z0-9.]+ (&gt;))',
          name: 'meta.email-address.eml'
        },
        {
          captures: {
            1: {name: 'string.unquoted.author-name.eml'},
            2: {name: 'punctuation.definition.tag.begin.eml'},
            3: {name: 'constant.other.author-address.eml'},
            4: {name: 'punctuation.definition.tag.end.eml'}
          },
          match:
            '(?ix)\n([-a-zZ-Z0-9.+_]+) \\s*\n(<)([-a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)(>)',
          name: 'meta.email-address.eml'
        },
        {
          captures: {
            1: {name: 'string.unquoted.author-name.eml'},
            2: {name: 'punctuation.definition.tag.begin.eml'},
            3: {name: 'constant.other.author-address.eml'},
            4: {name: 'punctuation.definition.tag.end.eml'}
          },
          match:
            '(?ix)\n([-a-zZ-Z0-9.+_]+) \\s*\n(&lt;)([-a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)(&gt;)',
          name: 'meta.email-address.eml'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.tag.begin.eml'},
            2: {name: 'constant.other.author-address.eml'},
            3: {name: 'punctuation.definition.tag.end.eml'}
          },
          match: '(&lt;)([-a-zA-Z0-9.+_]+@[-a-zA-Z0-9.]+)(&gt;)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.tag.begin.eml'},
            2: {name: 'constant.other.author-address.eml'},
            3: {name: 'punctuation.definition.tag.end.eml'}
          },
          match: '(<?)([-a-zA-Z0-9.+_]+@[-a-zA-Z0-9.]+)(>?)'
        }
      ]
    },
    base64: {
      match:
        '(?x) ^\n(?:[A-Za-z0-9+/]{4})+\n(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$',
      name: 'text.eml.encoded'
    },
    boundary: {
      begin: '^(--(?!>).*)',
      beginCaptures: {0: {name: 'keyword.control.boundary.eml'}},
      end: '^(?=\\1)',
      name: 'meta.multi-part.chunk.eml',
      patterns: [
        {
          begin: '^(?i)(Content-Type:)\\s*(text/html(?=[\\s;+]).*)',
          beginCaptures: {
            1: {patterns: [{include: '#headers'}]},
            2: {patterns: [{include: '$self'}]}
          },
          contentName: 'meta.embedded.html',
          end: '^(?=--(?!>))',
          name: 'meta.embedded.html.eml',
          patterns: [
            {include: '#boundaryHeaders'},
            {include: 'text.html.basic'}
          ]
        },
        {
          begin: '^(?i)(Content-Type:)\\s*((?!text/html(?=[\\s;+]))\\S+.*)',
          beginCaptures: {
            1: {patterns: [{include: '#headers'}]},
            2: {patterns: [{include: '$self'}]}
          },
          contentName: 'markup.raw.html',
          end: '^(?=--(?!>))',
          name: 'meta.embedded.text.eml',
          patterns: [{include: '#boundaryHeaders'}]
        },
        {include: '$self'}
      ]
    },
    boundaryHeaders: {
      begin: '\\G',
      end: '^(?=\\s*)$',
      patterns: [{include: '$self'}]
    },
    encodedWord: {
      match: '(?i)=\\?utf-8\\?B\\?(.*)\\?=',
      name: 'keyword.control.encoded-word.eml'
    },
    encodingTypes: {
      match:
        '(?xi)\n( base64\n| multipart\\/.*:\n| image\\/.*;\n| text\\/.*\n| boundary=.*\n)',
      name: 'keyword.operator.special.eml'
    },
    headers: {
      captures: {
        1: {name: 'variable.header.name.eml'},
        2: {name: 'punctuation.separator.dictionary.key-value.colon.eml'}
      },
      match:
        '(?xi) ^\n( archived-at\n| cc\n| content-type\n| date\n| envelope-from\n| from\n| in-reply-to\n| mail-from\n| message-id\n| precedence\n| references\n| reply-to\n| return-path\n| sender\n| subject\n| to\n| x-cmae-virus\n| \\d*zendesk\\d*\n| [^:]*resent-[^:]*\n| x-[^:]*\n| [A-Z][a-zA-Z0-9-]*\n) (:)'
    },
    html: {
      begin: '(?xi)^<html(.*)>$',
      end: '(?xi)^</html>$',
      name: 'meta.single.html.eml',
      patterns: [{include: 'text.html.basic'}, {include: '$self'}]
    },
    ipv4: {
      match:
        '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
      name: 'variable.other.ipv4.eml'
    },
    ipv6: {
      match:
        '(?x)\n( ([0-9a-fA-F]{1,4}:){7}     [0-9a-fA-F]{1,4}\n| ([0-9a-fA-F]{1,4}:){1,4}  :[0-9a-fA-F]{1,4}\n| ([0-9a-fA-F]{1,4}:){1,6}  :[0-9a-fA-F]{1,4}\n| ([0-9a-fA-F]{1,4}:){1,7}  :\n| ([0-9a-fA-F]{1,4}:){1,5} (:[0-9a-fA-F]{1,4}){1,2}\n| ([0-9a-fA-F]{1,4}:){1,4} (:[0-9a-fA-F]{1,4}){1,3}\n| ([0-9a-fA-F]{1,4}:){1,3} (:[0-9a-fA-F]{1,4}){1,4}\n| ([0-9a-fA-F]{1,4}:){1,2} (:[0-9a-fA-F]{1,4}){1,5}\n| [0-9a-fA-F]{1,4}          :((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)\n| fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+\n| ::(ffff(:0{1,4})?:)? ((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])\n| ([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])\n)',
      name: 'variable.other.eml'
    },
    quote: {
      begin: '^[|>]',
      beginCaptures: {0: {name: 'punctuation.definition.comment.quote.eml'}},
      end: '$',
      name: 'markup.quote.line.eml'
    },
    uuid: {
      match:
        '(?x)\n( [0-9a-fA-F]{32}\n| [0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}\n)',
      name: 'constant.other.uuid.eml'
    }
  },
  scopeName: 'text.eml.basic'
}

export default grammar
