// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/caddyserver/vscode-caddyfile>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.caddyfile'],
  names: ['caddyfile', 'caddy'],
  patterns: [
    {include: '#comments'},
    {include: '#strings'},
    {include: '#domains'},
    {include: '#status_codes'},
    {include: '#path'},
    {include: '#global_options'},
    {include: '#matchers'},
    {include: '#directive'},
    {include: '#site_block_common'}
  ],
  repository: {
    block: {
      patterns: [
        {begin: '\\{', end: '\\}', patterns: [{include: '#block_content'}]}
      ]
    },
    block_content: {
      patterns: [
        {
          patterns: [
            {include: '#comments'},
            {include: '#strings'},
            {include: '#domains'},
            {include: '#status_codes'},
            {include: '#path'},
            {include: '#matchers'},
            {include: '#placeholders'},
            {include: '#directive'},
            {include: '#block'}
          ]
        }
      ]
    },
    comments: {
      patterns: [
        {match: '\\s#.*', name: 'comment.line.Caddyfile'},
        {match: '^#.*', name: 'comment.line.Caddyfile'}
      ]
    },
    content_types: {
      patterns: [
        {
          match:
            '(application|audio|example|font|image|message|model|multipart|text|video)/[a-zA-Z0-9*+\\-.]+;* *[a-zA-Z0-9=\\-]*',
          name: 'variable.other.property.caddyfile'
        }
      ]
    },
    directive: {
      patterns: [
        {match: '^\\s*[a-zA-Z_\\-+]+', name: 'entity.name.function.Caddyfile'},
        {include: '#content_types'},
        {include: '#heredoc'}
      ]
    },
    domains: {
      patterns: [
        {
          match: '(https?://)*[a-z0-9-\\*]*(?:\\.[a-zA-Z]{2,})+(:[0-9]+)*\\S*',
          name: 'keyword.control.caddyfile'
        },
        {match: 'localhost(:[0-9]+)*', name: 'keyword.control.caddyfile'},
        {
          match:
            '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
          name: 'keyword.control.caddyfile'
        },
        {
          match:
            '(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))',
          name: 'keyword.control.caddyfile'
        },
        {match: ':[0-9]+', name: 'keyword.control.caddyfile'}
      ]
    },
    global_options: {
      patterns: [
        {
          begin: '^(\\{)$',
          beginCaptures: {0: {name: 'punctuation.definition.dictionary.begin'}},
          end: '^(\\})$',
          endCaptures: {0: {name: 'punctuation.definition.dictionary.end'}},
          patterns: [
            {include: '#comments'},
            {
              match:
                '^\\s*(debug|https?_port|default_bind|order|storage|storage_clean_interval|renew_interval|ocsp_interval|admin|log|grace_period|shutdown_delay|auto_https|email|default_sni|local_certs|skip_install_trust|acme_ca|acme_ca_root|acme_eab|acme_dns|on_demand_tls|key_type|cert_issuer|ocsp_stapling|preferred_chains|servers|pki|events)',
              name: 'support.constant.Caddyfile'
            }
          ]
        }
      ]
    },
    heredoc: {
      patterns: [
        {
          begin:
            '(?i)(?=<<\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*$)',
          end: '(?!\\G)',
          name: 'string.unquoted.heredoc.caddyfile',
          patterns: [{include: '#heredoc_interior'}]
        }
      ]
    },
    heredoc_interior: {
      patterns: [
        {
          begin: '(<<)\\s*(CSS)(\\s*)$',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.begin'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          contentName: 'source.css',
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          },
          name: 'meta.embedded.css',
          patterns: [{include: 'source.css'}]
        },
        {
          begin: '(<<)\\s*(HTML)(\\s*)$',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.begin'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          contentName: 'text.html',
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          },
          name: 'meta.embedded.html',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '(<<)\\s*(JAVASCRIPT|JS)(\\s*)$',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.begin'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          contentName: 'source.js',
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          },
          name: 'meta.embedded.js',
          patterns: [{include: 'source.js'}]
        },
        {
          begin: '(<<)\\s*(JSON)(\\s*)$',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.begin'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          contentName: 'source.json',
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          },
          name: 'meta.embedded.json',
          patterns: [{include: 'source.json'}]
        },
        {
          begin: '(<<)\\s*(XML)(\\s*)$',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.begin'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          contentName: 'text.xml',
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          },
          name: 'meta.embedded.xml',
          patterns: [{include: 'text.xml'}]
        },
        {
          begin:
            '(?i)(<<)\\s*([a-z_\\x{7f}-\\x{10ffff}]+[a-z0-9_\\x{7f}-\\x{10ffff}]*)(\\s*)',
          beginCaptures: {
            0: {name: 'punctuation.section.embedded.begin.caddyfile'},
            1: {name: 'punctuation.definition.string.caddyfile'},
            2: {name: 'keyword.operator.heredoc.caddyfile'},
            4: {name: 'invalid.illegal.trailing-whitespace.caddyfile'}
          },
          end: '^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])',
          endCaptures: {
            0: {name: 'punctuation.section.embedded.end.caddyfile'},
            1: {name: 'keyword.operator.heredoc.caddyfile'}
          }
        }
      ]
    },
    matchers: {
      patterns: [{match: '@[^\\s]+(?=\\s)', name: 'support.function.Caddyfile'}]
    },
    path: {
      patterns: [
        {
          match: '(unix/)*/[a-zA-Z0-9_\\-./*]+',
          name: 'keyword.control.caddyfile'
        },
        {match: '\\*.[a-z]{1,5}', name: 'variable.other.property.caddyfile'},
        {match: '\\*/?', name: 'variable.other.property.caddyfile'},
        {match: '\\?/', name: 'variable.other.property.caddyfile'}
      ]
    },
    placeholders: {
      patterns: [
        {match: '\\{[\\[\\]\\w.\\$+-]+\\}', name: 'keyword.control.Caddyfile'}
      ]
    },
    site_block_common: {
      patterns: [{include: '#placeholders'}, {include: '#block'}]
    },
    status_codes: {
      patterns: [
        {match: '\\s[0-9]{3}(?!\\.)', name: 'constant.numeric.decimal'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.Caddyfile',
          patterns: [
            {match: '\\\\"', name: 'constant.character.escape.Caddyfile'}
          ]
        },
        {begin: '`', end: '`', name: 'string.quoted.single.Caddyfile'}
      ]
    }
  },
  scopeName: 'source.Caddyfile'
}

export default grammar
