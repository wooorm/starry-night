// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['curl-config', 'curlrc'],
  patterns: [{include: '#main'}],
  repository: {
    auth: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.other.auth-info.curlrc'},
            2: {patterns: [{include: 'etc#kolon'}]},
            3: {name: 'constant.other.auth-info.curlrc'}
          },
          match: '([^\\s:;]+)(:)([^\\s=:;]*)'
        },
        {
          captures: {
            1: {patterns: [{include: 'etc#kolon'}]},
            2: {name: 'constant.other.auth-info.curlrc'}
          },
          match: '(:)([^\\s:;]*)'
        }
      ]
    },
    authProtocol: {
      captures: {
        1: {name: 'entity.other.protocol.curlrc'},
        2: {name: 'keyword.operator.protocol.separator.curlrc'}
      },
      match: '(?:\\G|^)([^\\\\:\\s/]*)(://|:)'
    },
    autoRefer: {
      captures: {
        1: {name: 'punctuation.separator.key-value.semicolon.curlrc'},
        2: {name: 'variable.assignment.parameter.name.curlrc'}
      },
      match: '(;)(auto)\\b'
    },
    comment: {
      begin: '^#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.curlrc'}},
      end: '$',
      name: 'comment.line.number-sign.curlrc'
    },
    header: {
      captures: {
        1: {name: 'entity.name.header.curlrc'},
        2: {patterns: [{include: 'etc#kolon'}]},
        3: {name: 'string.unquoted.header-value.curlrc'},
        4: {name: 'punctuation.terminator.statement.semicolon.curlrc'}
      },
      match: '(?:\\G|^)\\s*([-A-Za-z0-9]+)\\s*(?:(:)\\s*(.*)|(;))'
    },
    longOptions: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'}
          },
          match:
            '(?x)\n(?:\\G|^) \\s*\n(\n\t(--)?\n\t(?:anyauth|append|basic|cert-status|compressed-ssh|compressed|create-dirs|crlf|digest\n\t|disable-eprt|disable-epsv|disable|disallow-username-in-url|fail-early|fail|false-start\n\t|ftp-create-dirs|ftp-pasv|ftp-pret|ftp-skip-pasv-ip|ftp-ssl-ccc|ftp-ssl-control|get\n\t|globoff|haproxy-protocol|head|help|http1\\.[01]|http2(?:-prior-knowledge)?\n\t|ignore-content-length|include|insecure|ipv[46]|junk-session-cookies|list-only\n\t|location-trusted|location|manual|metalink|negotiate|netrc-optional|netrc|next\n\t|no-alpn|no-buffer|no-keepalive|no-npn|no-sessionid|ntlm-wb|ntlm|path-as-is|post30[1-3]\n\t|progress-bar|proxy-anyauth|proxy-basic|proxy-digest|proxy-insecure|proxy-negotiate\n\t|proxy-ntlm|proxy-ssl-allow-beast|proxy-tlsv1|proxytunnel|quote|raw|remote-header-name\n\t|remote-name-all|remote-name|remote-time|request-target|retry-connrefused|sasl-ir\n\t|show-error|silent|socks5-(?:basic|gssapi-nec|gssapi)|ssl-allow-beast|ssl-no-revoke\n\t|ssl-reqd|sslv[23]|ssl|stderr|styled-output|suppress-connect-headers\n\t|tcp-fastopen|tcp-nodelay|tftp-no-options|tlspassword|tlsv1\\.[0-3]\n\t|tlsv1|tr-encoding|trace-time|use-ascii|verbose|version|xattr)\n)\n(?=\\s|$)',
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n((--)?(?:doh-url|mail-auth|mail-from|mail-rcpt|noproxy|referer|url))\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|(?=$)))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: '#url'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {name: 'string.unquoted.curlrc', patterns: [{include: '#url'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n((--)?(?:header|proxy-header))\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|(?=$)))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: '#header'}, {include: 'etc#bareword'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: '#header'}, {include: 'etc#bareword'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n((--)?(?:cookie|form-string|form|telnet-option))\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|(?=$)))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: '#params'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: '#params'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?:\\G|^)(?!\\s*--\\w[-\\w]*\\s*[=:])\\s*((--)?(?:proto-default|proto-redir|proto))(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: '#protocols'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: '#protocols'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?:\\G|^)(?!\\s*--\\w[-\\w]*\\s*[=:])\\s*((--)?ftp-port)(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {
              name: 'constant.other.port-address.curlrc',
              patterns: [{include: 'etc#esc'}]
            },
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {name: 'constant.other.port-address.curlrc'}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?:\\G|^)(?!\\s*--\\w[-\\w]*\\s*[=:])\\s*((--)?hostpubmd5)(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {
              name: 'constant.other.md5.checksum.curlrc',
              patterns: [{include: 'etc#esc'}]
            },
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {name: 'constant.other.md5.checksum.curlrc'}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?:\\G|^)(?!\\s*--\\w[-\\w]*\\s*[=:])\\s*((--)?(?:local-port|range))(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {
              patterns: [
                {include: '#range'},
                {include: 'etc#esc'},
                {include: 'etc#bareword'}
              ]
            },
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: '#range'}, {include: 'etc#bareword'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:](?=\\s)) \\s*\n(\n\t(--)?\n\t(?:cert|connect-to|preproxy|proxy-cert|proxy-user|proxy1\\.0\n\t|proxy|resolve|socks4a?|socks5-hostname|socks5|user)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: '#auth'}, {include: 'etc#bareword'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: '#auth'}, {include: 'etc#bareword'}]}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:](?=\\s)) \\s*\n(\n\t(--)?\n\t(?:abstract-unix-socket|cacert|capath|cert-type|ciphers|config|cookie-jar|crlfile|data-ascii\n\t|data-binary|data-raw|data-urlencode|data|delegation|dns-interface|dns-ipv[46]-addr|dns-servers\n\t|dump-header|egd-file|engine|ftp-(?:account|alternative-to-user|ssl-ccc-mode|method)|interface\n\t|key-type|key|krb|libcurl|login-options|netrc-file|oauth2-bearer|output|pass|proxy-(?:cacert\n\t|capath|cert-type|crlfile|key-type|key|pass|service-name|tlsauthtype|tlspassword|tlsuser)\n\t|pinnedpubkey|proxy-ciphers|proxy-pinnedpubkey|pubkey|random-file|proxy-tls13-ciphers|request\n\t|service-name|socks5-gssapi-service|tls13-ciphers|tlsauthtype|tls-max|tlsuser|trace-ascii\n\t|trace|unix-socket|upload-file|user-agent|write-out)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:(=)?|(?:([-A-Za-z0-9%_]+)(=)?)?([@<]))?(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'keyword.operator.encoding-modifier.curlrc'},
            2: {name: 'entity.name.form-field.curlrc'},
            3: {patterns: [{include: 'etc#eql'}]},
            4: {name: 'keyword.operator.source-modifier.curlrc'},
            5: {name: 'string.quoted.double.curlrc'},
            6: {name: 'punctuation.definition.string.begin.curlrc'},
            7: {patterns: [{include: 'etc#esc'}]},
            8: {name: 'punctuation.definition.string.end.curlrc'},
            9: {name: 'string.unquoted.curlrc'}
          },
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^)\n(?!\\s*--\\w[-\\w]*\\s*[=:])\n\\s*\n(\n\t(--)?\n\t(?:connect-timeout|continue-at|expect100-timeout|happy-eyeballs-timeout-ms|keepalive-time\n\t|limit-rate|max-filesize|max-redirs|max-time|retry-delay|retry-max-time|retry|speed-limit\n\t|speed-time|tftp-blksize|time-cond)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            3: {patterns: [{include: '#separators'}]}
          },
          end: '$|(?:((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))|([^\\s]+))',
          endCaptures: {
            1: {name: 'string.quoted.double.curlrc'},
            2: {name: 'punctuation.definition.string.begin.curlrc'},
            3: {patterns: [{include: 'etc#num'}, {include: 'etc#bareword'}]},
            4: {name: 'punctuation.definition.string.end.curlrc'},
            5: {patterns: [{include: 'etc#num'}, {include: 'etc#bareword'}]}
          },
          name: 'meta.option.long.curlrc'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#shortOptions'},
        {include: '#longOptions'}
      ]
    },
    params: {
      patterns: [
        {include: '#autoRefer'},
        {
          match: '(?:\\G|^|(?<=\\G"|^"))=',
          name: 'keyword.operator.encoding-modifier.curlrc'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.key-value.semicolon.curlrc'},
            2: {name: 'variable.assignment.parameter.name.curlrc'}
          },
          match: '(?:\\G|^|(?<=\\G"|^"))(;)([^\\s=;"]+(?="?(?:\\s|$)))?'
        },
        {
          captures: {
            1: {name: 'entity.name.form-field.curlrc'},
            2: {patterns: [{include: 'etc#eql'}]},
            3: {name: 'keyword.operator.source-modifier.curlrc'}
          },
          match: '(?:\\G|^|(?<=\\G"|^"))(?:([-A-Za-z0-9%_]+)(=)?)?([@<])'
        },
        {
          captures: {
            1: {name: 'variable.assignment.parameter.name.curlrc'},
            2: {patterns: [{include: 'etc#eql'}]},
            3: {name: 'constant.other.parameter.value.curlrc'},
            4: {name: 'punctuation.separator.key-value.semicolon.curlrc'}
          },
          match: '([^\\s=;]+)(=)([^\\s=;]*)(;)?',
          name: 'meta.parameter.curlrc'
        },
        {
          captures: {
            1: {
              name: 'variable.assignment.parameter.name.curlrc',
              patterns: [{include: 'etc#esc'}]
            },
            2: {name: 'punctuation.separator.key-value.semicolon.curlrc'}
          },
          match:
            '(?<=@)("(?:[^\\\\"]|\\\\.)++"|(?:[^"\\s;\\\\]|\\\\.)++)(?:(;)|(?=$|\\s))'
        },
        {include: 'etc#esc'},
        {include: 'etc#bareword'}
      ]
    },
    protocols: {
      patterns: [
        {match: '[^\\s,+=-]+', name: 'constant.other.protocol-name.curlrc'},
        {match: '\\+', name: 'keyword.control.permit-protocol.curlrc'},
        {match: '-', name: 'keyword.control.deny-protocol.curlrc'},
        {match: '=', name: 'keyword.control.permit-protocol.only.curlrc'},
        {include: 'etc#comma'}
      ]
    },
    range: {
      patterns: [
        {
          captures: {
            1: {
              name: 'constant.numeric.integer.int.decimal.dec.range.start.curlrc'
            },
            2: {name: 'punctuation.separator.range.dash.curlrc'},
            3: {
              name: 'constant.numeric.integer.int.decimal.dec.range.end.curlrc'
            },
            4: {name: 'punctuation.separator.range.dash.curlrc'},
            5: {
              name: 'constant.numeric.integer.int.decimal.dec.range.end.curlrc'
            }
          },
          match: '([0-9]+)(-)([0-9]+)?|(-)([0-9]+)',
          name: 'meta.byte-range.curlrc'
        },
        {include: 'etc#comma'},
        {include: 'etc#int'}
      ]
    },
    separators: {patterns: [{include: 'etc#eql'}, {include: 'etc#kolon'}]},
    shortOptions: {
      patterns: [
        {
          begin:
            '^\\s*((-)[:#012346BGIJLMNOQRSVafghijklnpqsv]*[ACDEFHKPTUXYbcdemortuwxyz])',
          beginCaptures: {
            1: {name: 'entity.short.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.short.option.curlrc'}
          },
          end: '(?x)\n$\n|\n\n# Numbers\n(?<=[CYmyz])\\G\\s*\n([-+]?[0-9.]+)\n\n|\n\n# Byte range\n(?<=r)\\G\\s*\n([-0-9,]+)\n\n|\n\n# “key=value” pairs\n(?<=[Fbt])\\G\\s*\n(?:\n\t((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))\n\t|\n\t([^\\s]+)\n)\n\n|\n\n# “key:value” pairs\n(?<=[EUux])\\G\\s*\n([^\\\\:\\s/]*://)?\n(\n\t(?:[^\\\\:\\s]|\\\\.)+\n\t(?::(?:[^\\\\:\\s]|\\\\.)+)*\n\t:?\n)\n\n|\n\n# Headers\n(?<=H)\\G\\s*\n(?:\n\t((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))\n\t|\n\t([^\\s]+)\n)\n\n|\n\n# URLs\n(?<=e)\\G\\s*\n(?:\n\t((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))\n\t|\n\t([^\\s]+)\n)\n\n|\n\n# Anything else\n(?:\n\t((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))\n\t|\n\t([^\\s]+)\n)',
          endCaptures: {
            1: {patterns: [{include: 'etc#num'}]},
            10: {name: 'meta.http-headers.curlrc'},
            11: {name: 'punctuation.definition.string.begin.curlrc'},
            12: {patterns: [{include: '#header'}]},
            13: {name: 'punctuation.definition.string.end.curlrc'},
            14: {patterns: [{include: '#header'}]},
            15: {name: 'meta.url-string.curlrc'},
            16: {name: 'punctuation.definition.string.begin.curlrc'},
            17: {patterns: [{include: '#url'}]},
            18: {name: 'punctuation.definition.string.end.curlrc'},
            19: {patterns: [{include: '#url'}]},
            2: {patterns: [{include: '#range'}]},
            20: {name: 'string.quoted.double.curlrc'},
            21: {name: 'punctuation.definition.string.begin.curlrc'},
            22: {patterns: [{include: 'etc#esc'}]},
            23: {name: 'punctuation.definition.string.end.curlrc'},
            24: {name: 'string.unquoted.curlrc'},
            3: {name: 'meta.parameter-string.curlrc'},
            4: {name: 'punctuation.definition.string.begin.curlrc'},
            5: {patterns: [{include: '#params'}]},
            6: {name: 'punctuation.definition.string.end.curlrc'},
            7: {patterns: [{include: '#params'}]},
            8: {patterns: [{include: '#authProtocol'}]},
            9: {patterns: [{include: '#auth'}]}
          },
          name: 'meta.option.short.curlrc'
        },
        {
          captures: {
            1: {name: 'entity.short.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.short.option.curlrc'}
          },
          match: '^\\s*((-)[:#012346BGIJLMNOQRSVafghijklnpqsv]+)',
          name: 'meta.option.short.curlrc'
        }
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.curlrc'}},
      end: '"|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.curlrc'}},
      name: 'string.quoted.double.curlrc',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.curlrc'}
          },
          match: '(\\\\)[\\\\"tnrv]',
          name: 'constant.character.escape.backslash.curlrc'
        }
      ]
    },
    url: {
      patterns: [
        {include: '#autoRefer'},
        {include: 'etc#comma'},
        {
          captures: {
            1: {patterns: [{include: 'etc#url'}, {include: '#urlNoSchema'}]},
            2: {patterns: [{include: 'etc#url'}, {include: '#urlNoSchema'}]}
          },
          match:
            '(?<=\\G"|^")((?:[^"\\\\]|\\\\.)*)(?=$|"|;)|(?:\\G(?<!")|^)([^\\s,]+?)(?=$|\\s|;|,)'
        },
        {include: '#params'},
        {include: 'etc#bareword'}
      ]
    },
    urlNoSchema: {
      captures: {
        1: {name: 'constant.other.reference.link.underline.url.curlrc'}
      },
      match: '(?:\\G|^)\\s*([-a-zA-Z0-9]+(?:\\.|@)[-a-zA-Z0-9]+.*)\\s*'
    }
  },
  scopeName: 'source.curlrc'
}

export default grammar
