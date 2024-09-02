// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
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
      begin: '(?:^|(?<=[ \\t\\xA0"]))#',
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
            '(?x)\n(?:\\G|^|(?<=[ \\t])) \\s*\n(\n\t(--)?\n\t(?<optlist_no_parameter>\n\t\tanyauth\n\t|\tappend\n\t|\tbasic\n\t|\tca-native\n\t|\tcert-status\n\t|\tcompressed-ssh\n\t|\tcompressed\n\t|\tcreate-dirs\n\t|\tcrlf\n\t|\tdigest\n\t|\tdisable-eprt\n\t|\tdisable-epsv\n\t|\tdisable\n\t|\tdisallow-username-in-url\n\t|\tdoh-cert-status\n\t|\tdoh-insecure\n\t|\tdump-ca-embed\n\t|\tfail-early\n\t|\tfail-with-body\n\t|\tfail\n\t|\tfalse-start\n\t|\tform-escape\n\t|\tftp-create-dirs\n\t|\tftp-pasv\n\t|\tftp-pret\n\t|\tftp-skip-pasv-ip\n\t|\tftp-ssl-ccc\n\t|\tftp-ssl-control\n\t|\tget\n\t|\tgloboff\n\t|\thaproxy-protocol\n\t|\thead\n\t|\thttp0.9\n\t|\thttp1.0\n\t|\thttp1.1\n\t|\thttp2-prior-knowledge\n\t|\thttp2\n\t|\thttp3-only\n\t|\thttp3\n\t|\tignore-content-length\n\t|\tinclude\n\t|\tinsecure\n\t|\tipv4\n\t|\tipv6\n\t|\tjunk-session-cookies\n\t|\tlist-only\n\t|\tlocation-trusted\n\t|\tlocation\n\t|\tmail-rcpt-allowfails\n\t|\tmanual\n\t|\tmetalink\n\t|\tnegotiate\n\t|\tnetrc-optional\n\t|\tnetrc\n\t|\tnext\n\t|\tno-alpn\n\t|\tno-buffer\n\t|\tno-clobber\n\t|\tno-keepalive\n\t|\tno-npn\n\t|\tno-progress-meter\n\t|\tno-sessionid\n\t|\tmptcp\n\t|\tntlm-wb\n\t|\tntlm\n\t|\tparallel-immediate\n\t|\tparallel\n\t|\tpath-as-is\n\t|\tpost301\n\t|\tpost302\n\t|\tpost303\n\t|\tprogress-bar\n\t|\tproxy-anyauth\n\t|\tproxy-basic\n\t|\tproxy-ca-native\n\t|\tproxy-digest\n\t|\tproxy-http2\n\t|\tproxy-insecure\n\t|\tproxy-negotiate\n\t|\tproxy-ntlm\n\t|\tproxy-ssl-allow-beast\n\t|\tproxy-ssl-auto-client-cert\n\t|\tproxy-tlsv1\n\t|\tproxytunnel\n\t|\traw\n\t|\tremote-header-name\n\t|\tremote-name-all\n\t|\tremote-name\n\t|\tremote-time\n\t|\tremove-on-error\n\t|\tretry-all-errors\n\t|\tretry-connrefused\n\t|\tsasl-ir\n\t|\tshow-error\n\t|\tshow-headers\n\t|\tsilent\n\t|\tskip-existing\n\t|\tsocks5-basic\n\t|\tsocks5-gssapi-nec\n\t|\tsocks5-gssapi\n\t|\tssl-allow-beast\n\t|\tssl-auto-client-cert\n\t|\tssl-no-revoke\n\t|\tssl-reqd\n\t|\tssl-revoke-best-effort\n\t|\tsslv2\n\t|\tsslv3\n\t|\tssl\n\t|\tstyled-output\n\t|\tsuppress-connect-headers\n\t|\ttcp-fastopen\n\t|\ttcp-nodelay\n\t|\ttftp-no-options\n\t|\ttlsv1.0\n\t|\ttlsv1.1\n\t|\ttlsv1.2\n\t|\ttlsv1.3\n\t|\ttlsv1\n\t|\ttr-encoding\n\t|\ttrace-ids\n\t|\ttrace-time\n\t|\tuse-ascii\n\t|\tverbose\n\t|\tversion\n\t|\txattr\n\t)\n)\n(?=\\s|$)',
          name: 'meta.option.long.curlrc'
        },
        {
          begin:
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_urls>\n\t\tdns-ipv4-addr\n\t|\tdns-ipv6-addr\n\t|\tdns-servers\n\t|\tdoh-url\n\t|\thaproxy-clientip\n\t|\tipfs-gateway\n\t|\tmail-auth\n\t|\tmail-from\n\t|\tmail-rcpt\n\t|\tnoproxy\n\t|\treferer\n\t|\turl\n\t)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_headers>\n\t\theader\n\t|\tproxy-header\n\t)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_form_data>\n\t\tcookie\n\t|\tform-string\n\t|\tform\n\t|\ttelnet-option\n\t|\tvariable\n\t)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_protocols>\n\t\tproto-default\n\t|\tproto-redir\n\t|\tproto\n\t)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_port>\n\t\tftp-port\n\t)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_md5>\n\t\thostpubmd5\n\t)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:]) \\s*\n(\n\t(--)?\n\t(?<optlist_range>\n\t\tlocal-port\n\t|\trange\n\t)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:](?=\\s)) \\s*\n(\n\t(--)?\n\t(?<optlist_kv_colon>\n\t\taws-sigv4\n\t|\tcert\n\t|\tconnect-to\n\t|\tpreproxy\n\t|\tproxy-cert\n\t|\tproxy-user\n\t|\tproxy1.0\n\t|\tproxy\n\t|\tresolve\n\t|\tsocks4a\n\t|\tsocks4\n\t|\tsocks5-hostname\n\t|\tsocks5\n\t|\tuser\n\t)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:](?=\\s)) \\s*\n(\n\t(--)?\n\t(?<optlist_string>\n\t\tabstract-unix-socket\n\t|\talt-svc\n\t|\tcacert\n\t|\tcapath\n\t|\tcert-type\n\t|\tciphers\n\t|\tconfig\n\t|\tcookie-jar\n\t|\tcrlfile\n\t|\tcurves\n\t|\tdata-ascii\n\t|\tdata-binary\n\t|\tdata-raw\n\t|\tdata-urlencode\n\t|\tdata\n\t|\tdelegation\n\t|\tdns-interface\n\t|\tdump-header\n\t|\tech\n\t|\tegd-file\n\t|\tengine\n\t|\tetag-compare\n\t|\tetag-save\n\t|\tftp-account\n\t|\tftp-alternative-to-user\n\t|\tftp-method\n\t|\tftp-ssl-ccc-mode\n\t|\thappy-eyeballs-timeout-ms\n\t|\thelp\n\t|\thostpubsha256\n\t|\thsts\n\t|\tinterface\n\t|\tjson\n\t|\tkey-type\n\t|\tkey\n\t|\tkrb\n\t|\tlibcurl\n\t|\tlogin-options\n\t|\tnetrc-file\n\t|\toauth2-bearer\n\t|\toutput-dir\n\t|\toutput\n\t|\tpass\n\t|\tpinnedpubkey\n\t|\tproxy-cacert\n\t|\tproxy-capath\n\t|\tproxy-cert-type\n\t|\tproxy-ciphers\n\t|\tproxy-crlfile\n\t|\tproxy-key-type\n\t|\tproxy-key\n\t|\tproxy-pass\n\t|\tproxy-pinnedpubkey\n\t|\tproxy-service-name\n\t|\tproxy-tls13-ciphers\n\t|\tproxy-tlsauthtype\n\t|\tproxy-tlspassword\n\t|\tproxy-tlsuser\n\t|\tpubkey\n\t|\tquote\n\t|\trandom-file\n\t|\trequest-target\n\t|\trequest\n\t|\tsasl-authzid\n\t|\tservice-name\n\t|\tsocks5-gssapi-service\n\t|\tstderr\n\t|\ttls-max\n\t|\ttls13-ciphers\n\t|\ttlsauthtype\n\t|\ttlspassword\n\t|\ttlsuser\n\t|\ttrace-ascii\n\t|\ttrace-config\n\t|\ttrace\n\t|\tunix-socket\n\t|\tupload-file\n\t|\turl-query\n\t|\tuser-agent\n\t|\twrite-out\n\t)\n)\n(?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '(?x) (?:\\G|^|(?<=[ \\t]))\n(?!\\s*--\\w[-\\w]*\\s*[=:])\n\\s*\n(\n\t(--)?\n\t(?<optlist_numeric>\n\t\tconnect-timeout\n\t|\tcontinue-at\n\t|\tcreate-file-mode\n\t|\texpect100-timeout\n\t|\tip-tos\n\t|\tkeepalive-cnt\n\t|\tkeepalive-time\n\t|\tlimit-rate\n\t|\tmax-filesize\n\t|\tmax-redirs\n\t|\tmax-time\n\t|\tparallel-max\n\t|\trate\n\t|\tretry-delay\n\t|\tretry-max-time\n\t|\tretry\n\t|\tspeed-limit\n\t|\tspeed-time\n\t|\ttftp-blksize\n\t|\ttime-cond\n\t|\tvlan-priority\n\t)\n) (?:\\s*(=|:)|(?=\\s|$))',
          beginCaptures: {
            1: {name: 'entity.long.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.long.option.curlrc'},
            4: {patterns: [{include: '#separators'}]}
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
            '^\\s*((-)[:#012346BGIJLMNOQRSVafghijklnpqsv]*[ACDEFHKPQTUXYbcdehmortuwxyz])',
          beginCaptures: {
            1: {name: 'entity.short.option.name.curlrc'},
            2: {name: 'punctuation.definition.dash.short.option.curlrc'}
          },
          end: '(?x)\n$\n|\n\n# Numbers\n(?<=(?#optlist_numeric)[CYmyz])\n\\G (?:(?! )\\s)*\n([-+]?[0-9.]+)\n\n|\n\n# Byte range\n(?<=(?#optlist_range)r)\n\\G (?:(?! )\\s)*\n([-0-9,]+)\n\n|\n\n# “key=value” pairs\n(?<=(?#optlist_form_data)[Fbt])\n\\G (?:(?! )\\s)*\n(?:\n\t((")((?:[^"\\\\]|\\\\.)*)(?:(")|$))\n\t|\n\t([\\S ]+)\n)\n\n|\n\n# “key:value” pairs\n(?<=(?#optlist_kv_colon)[EUux])\n\\G (?:(?! )\\s)*\n((?:[^\\\\:\\s/]| )*://)?\n(\n\t(?:[^\\\\:\\s]|\\\\.| )+\n\t(?::(?:[^\\\\:\\s]|\\\\.| )+)*\n\t:?\n)\n\n|\n\n# Headers\n(?<=(?#optlist_headers)H)\n\\G (?:(?! )\\s)*\n(?:\n\t((")((?:[^"\\\\]|\\\\.| )*)(?:(")|$))\n\t|\n\t([\\S ]+)\n)\n\n|\n\n# URLs\n(?<=(?#optlist_urls)e)\n\\G (?:(?! )\\s)*\n(?:\n\t((")((?:[^"\\\\]|\\\\.| )*)(?:(")|$))\n\t|\n\t([\\S ]+)\n)\n\n|\n\n# Port address\n(?<=(?#optlist_port)P)\n\\G (?:(?! )\\s)*\n(?:\n\t((")((?:[^"\\\\]|\\\\.| )*)(?:(")|$))\n\t|\n\t([\\S ]+)\n)\n\n|\n\n# Anything else\n(?:\n\t((")((?:[^"\\\\]|\\\\.| )*)(?:(")|$))\n\t|\n\t([\\S ]+)\n)',
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
            22: {
              name: 'constant.other.port-address.curlrc',
              patterns: [{include: 'etc#esc'}]
            },
            23: {name: 'punctuation.definition.string.end.curlrc'},
            24: {name: 'constant.other.port-address.curlrc'},
            25: {name: 'string.quoted.double.curlrc'},
            26: {name: 'punctuation.definition.string.begin.curlrc'},
            27: {patterns: [{include: 'etc#esc'}]},
            28: {name: 'punctuation.definition.string.end.curlrc'},
            29: {name: 'string.unquoted.curlrc'},
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
          match:
            '^\\s*((-)(?#optlist_no_parameter)[#012346:BGIJLMNORSVZafgijklnpqsv]+)',
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
