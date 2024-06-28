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
  extensions: [],
  injections: {
    'L:meta.field.hostname.ssh-config': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
          match: '(%)[%h]',
          name: 'constant.other.placeholder.token.ssh-config'
        }
      ]
    },
    'L:meta.field.knownhostscommand.ssh-config': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
          match: '(%)[%CHIKLdfhiklnprtu]',
          name: 'constant.other.placeholder.token.ssh-config'
        }
      ]
    },
    'L:meta.field.localcommand.ssh-config': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
          match: '(%)[CDdFfHhIiKkLlnprsTtUu]',
          name: 'constant.other.placeholder.token.ssh-config'
        }
      ]
    },
    'L:meta.field.proxycommand.ssh-config': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
          match: '(%)[%hnpr]',
          name: 'constant.other.placeholder.token.ssh-config'
        }
      ]
    },
    'L:meta.scope.match.ssh-config meta.pattern-list, L:meta.field.certificatefile.ssh-config, L:meta.field.controlpath.ssh-config, L:meta.field.identityagent.ssh-config, L:meta.field.identityfile.ssh-config, L:meta.field.localforward.ssh-config, L:meta.field.remotecommand.ssh-config, L:meta.field.remoteforward.ssh-config, L:meta.field.userknownhostsfile.ssh-config':
      {
        patterns: [
          {
            captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
            match: '(%)[%CLdhiklnpru]',
            name: 'constant.other.placeholder.token.ssh-config'
          }
        ]
      }
  },
  names: ['ssh-config'],
  patterns: [{include: '#main'}],
  repository: {
    addr: {
      patterns: [
        {
          captures: {0: {patterns: [{include: '#wildcard'}]}},
          match: '(?:\\G|^)[*?\\d]+(?:\\.[*?\\d]+){3}',
          name: 'constant.other.ip-address.ipv4.ssh-config'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.ip-address.begin.ssh-config'},
            2: {name: 'constant.other.ip-address.ipv6.ssh-config'},
            3: {name: 'punctuation.definition.ip-address.end.ssh-config'}
          },
          match:
            '(?xi) (\\[)\n( (?:[0-9A-F]{1,4}:){7}[0-9A-F]{1,4}\n| (?:[0-9A-F]{1,4}:){1,7}:\n| (?:[0-9A-F]{1,4}:){1,6}:[0-9A-F]{1,4}\n| (?:[0-9A-F]{1,4}:){1,5}(?::[0-9A-F]{1,4}){1,2}\n| (?:[0-9A-F]{1,4}:){1,4}(?::[0-9A-F]{1,4}){1,3}\n| (?:[0-9A-F]{1,4}:){1,3}(?::[0-9A-F]{1,4}){1,4}\n| (?:[0-9A-F]{1,4}:){1,2}(?::[0-9A-F]{1,4}){1,5}\n| [0-9A-F]{1,4}:(?::[0-9A-F]{1,4}){1,6}\n| :(?:(?::[0-9A-F]{1,4}){1,7}|:)\n| FE80:(?::[0-9A-F]{0,4}){0,4}%[0-9A-Z]+\n| ::(?:FFFF(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\\.){3}(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\n| (?:[0-9A-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\\.){3}(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\n) (\\])'
        },
        {
          begin: '\\G|^',
          end: '$',
          name: 'string.unquoted.hostname.ssh-config',
          patterns: [{include: '#wildcard'}]
        }
      ]
    },
    any: {
      match: '\\Gany(?=\\s*(?:$|#))',
      name: 'constant.language.any.ssh-config'
    },
    boolean: {
      captures: {
        1: {name: 'constant.language.boolean.true.ssh-config'},
        2: {name: 'constant.language.boolean.false.ssh-config'}
      },
      match: '(?:\\G|^|(?<=\\s|=))(?i:(yes|on)|(no|off))(?=$|\\s|#)'
    },
    comma: {
      match: ',',
      name: 'punctuation.separator.delimiter.comma.ssh-config'
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.ssh-config'}},
      end: '$',
      name: 'comment.line.number-sign.ssh-config'
    },
    field: {
      patterns: [
        {
          begin:
            '(?xi) ^[ \\t]*\n( AFSTokenPassing\n| AllowAgentForwarding\n| BatchMode\n| CanonicalizeFallbackLocal\n| CheckHostIP\n| ClearAllForwardings\n| DisableForwarding\n| EnableSSHKeysign\n| ExitOnForwardFailure\n| ExposeAuthInfo\n| FallbackToRSH\n| ForkAfterAuthentication\n| ForwardX11\n| ForwardX11Trusted\n| GSSAPIAuthentication\n| GSSAPICleanupCredentials\n| GSSAPIDelegateCredentials\n| GSSAPIStrictAcceptorCheck\n| GSSAPITrustDNS\n| HashKnownHosts\n| HostbasedAuthentication\n| HostbasedUsesNameFromPacketOnly\n| IdentitiesOnly\n| IgnoreUserKnownHosts\n| KbdInteractiveAuthentication\n| KeepAlive\n| ChallengeResponseAuthentication\n| KerberosAuthentication\n| KerberosGetAFSToken\n| KerberosOrLocalPasswd\n| KerberosTicketCleanup\n| KerberosTGTPassing\n| NoHostAuthenticationForLocalhost\n| PasswordAuthentication\n| PermitEmptyPasswords\n| PermitLocalCommand\n| PermitTTY\n| PermitUserRC\n| PrintLastLog\n| PrintMotd\n| ProxyUseFdpass\n| PubkeyAuthentication\n| DSAAuthentication\n| RHostsAuthentication\n| RHostsRSAAuthentication\n| RSAAuthentication\n| SKeyAuthentication\n| StdinNull\n| StreamLocalBindUnlink\n| StrictModes\n| TCPKeepAlive\n| TISAuthentication\n| UseDNS\n| UseRSH\n| UseKeychain\n| UsePrivilegedPort\n| UseRoaming\n| VisualHostKey\n| X11Forwarding\n| X11UseLocalhost\n) (?:\\s*(=)|(?=$|\\s))[ \\t]* ',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#boolean'}]
        },
        {
          begin:
            '(?xi) ^[ \\t]*\n( CanonicalizeMaxDots\n| ClientAliveCountMax\n| CompressionLevel\n| ConnectionAttempts\n| MaxAuthTries\n| MaxSessions\n| NumberOfPasswordPrompts\n| Port\n| ServerAliveCountMax\n| X11DisplayOffset\n) (?:\\s*(=)|(?=$|\\s))[ \\t]* ',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#integer'}]
        },
        {
          begin:
            '(?xi) ^[ \\t]*\n( AllowGroups\n| AllowUsers\n| CASignatureAlgorithms\n| Ciphers?\n| DenyGroups\n| DenyUsers\n| FingerprintHash\n| HostKeyAlgorithms\n| HostbasedAcceptedAlgorithms\n| HostbasedAcceptedKeyTypes\n| HostbasedKeyTypes\n| KbdInteractiveDevices\n| KexAlgorithms\n| MACs\n| PreferredAuthentications\n| Protocol\n| PubkeyAcceptedAlgorithms\n| PubkeyAcceptedKeyTypes\n) (?:\\s*(=)|(?=$|\\s))[ \\t]* ',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#identifierList'}]
        },
        {
          begin: '(?i)^[ \\t]*(IgnoreUnknown)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#patternList'}]
        },
        {
          begin:
            '(?xi) ^[ \\t]*\n( AuthorizedKeysCommandUser\n| AuthorizedKeysFile\n| AuthorizedPrincipalsCommandUser\n| AuthorizedPrincipalsFile\n| Banner\n| BindAddress\n| BindInterface\n| CanonicalDomains\n| CertificateFile\n| ChrootDirectory\n| ControlPath\n| GlobalKnownHostsFile2?\n| HostCertificate\n| HostKeyAlias\n| Hostname\n| HostKey\n| IdentityFile2?\n| Include\n| ModuliFile\n| PKCS11Provider\n| PidFile\n| RDomain\n| RevokedHostKeys\n| RevokedKeys\n| SmartCardDevice\n| TrustedUserCAKeys\n| UserKnownHostsFile2?\n| User\n| XAuthLocation\n) (?:\\s*(=)|(?=$|\\s))[ \\t]* ',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#none'}, {include: '#stringList'}]
        },
        {
          begin:
            '(?xi) ^[ \\t]*\n( ClientAliveInterval\n| ConnectTimeout\n| ControlPersist\n| ForwardX11Timeout\n| LoginGraceTime\n| ServerAliveInterval\n) (?:\\s*(=)|(?=$|\\s))[ \\t]* ',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#boolean'}, {include: '#time'}]
        },
        {
          captures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'},
            3: {name: 'keyword.operator.field-name.ssh-config'},
            4: {name: 'keyword.operator.assignment.ssh-config'},
            5: {name: 'entity.name.subsystem.ssh-config'},
            6: {name: 'meta.arguments.ssh-config'},
            7: {name: 'constant.language.none.ssh-config'},
            8: {
              name: 'source.embedded.shell.ssh-config',
              patterns: [{include: 'source.shell'}]
            }
          },
          match:
            '(?x) ^[ \\t]*\n(?i:\n\t( AuthorizedKeysCommand\n\t| AuthorizedPrincipalsCommand\n\t| ForceCommand\n\t| KnownHostsCommand\n\t| LocalCommand\n\t| ProxyCommand\n\t| RemoteCommand\n\t) (?:\\s*(=))?\n\t|\n\t(Subsystem)\n\t(?:\\s*(=))?\n\t(?:\\s+([^\\s\\#]+))?\n) (?=$|\\s) [ \\t]*\n( (none)\n| ([^\\s\\#][^\\#]*)\n)? (?=\\s*(?:$|\\#)) ',
          name: 'meta.field.${1:/downcase}.ssh-config'
        },
        {
          begin: '(?i)^[ \\t]*((?:Accept|Send)Env)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {name: 'keyword.operator.logical.negate.not.ssh-config'},
                2: {
                  name: 'variable.environment.ssh-config',
                  patterns: [{include: '#wildcard'}]
                }
              },
              match: '(-)?(?!\\d)([*?\\w]+)'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(AddKeysToAgent)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\Gask(?=\\s|$|#)',
              name: 'constant.language.ask.ssh-config'
            },
            {include: '#boolean'},
            {include: '#time'},
            {
              captures: {
                1: {name: 'constant.language.ask.ssh-config'},
                2: {patterns: [{include: '#time'}]}
              },
              match:
                '\\G(confirm)(\\s+(?:\\d+(?:[SMHDWsmhdw]|\\b))++)?(?=\\s*(?:$|#))'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(AddressFamily)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(inet6?)(?=\\s|$|#)',
              name: 'constant.language.address-family.${1:/downcase}.ssh-config'
            },
            {include: '#any'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(Allow(?:StreamLocalForwarding|TcpForwarding))(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(all|local|remote)(?=\\s|$|#)',
              name: 'constant.language.$1.ssh-config'
            },
            {include: '#boolean'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(AuthenticationMethods)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#any'}, {include: '#identifierList'}]
        },
        {
          begin:
            '(?i)^[ \\t]*(CanonicalizeHostname)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(always)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            },
            {include: '#boolean'},
            {include: '#none'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(CanonicalizePermittedCNAMEs)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {
                  name: 'meta.source-domains.ssh-config',
                  patterns: [{include: '#patternListInline'}]
                },
                2: {name: 'punctuation.separator.ssh-config'},
                3: {
                  name: 'meta.target-domains.ssh-config',
                  patterns: [{include: '#patternListInline'}]
                }
              },
              match: '\\G([^#:]*)(:)([^\\r\\n#:]*)(?=[ \\t]*(?:$|#))'
            },
            {include: '#none'}
          ]
        },
        {
          begin: '(?i)^[ \\t]*(Compression)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(delayed)(?=\\s|$|#)',
              name: 'constant.language.boolean.true.ssh-config'
            },
            {include: '#boolean'}
          ]
        },
        {
          begin: '(?i)^[ \\t]*(ControlMaster)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {
              match: '\\G(ask|auto|autoask)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(EscapeChar)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#none'},
            {
              captures: {1: {name: 'punctuation.definition.escape.ssh-config'}},
              match: '\\G(\\^)[A-Za-z]',
              name: 'constant.character.escape.caret-notation.ssh-config'
            },
            {
              captures: {
                1: {name: 'constant.character.literal.ssh-config'},
                3: {name: 'invalid.illegal.unexpected-characters.ssh-config'}
              },
              match: '\\G([^\\s#])[ \\t]*([^\\s#]*)'
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(ForwardAgent|SecurityKeyProvider)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {include: '#variableName'},
            {include: '#stringList'}
          ]
        },
        {
          begin: '(?i)^[ \\t]*(GatewayPorts)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(clientspecified)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            },
            {include: '#boolean'}
          ]
        },
        {
          begin: '(?i)^[ \\t]*(IPQoS)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#none'},
            {include: '#integer'},
            {include: '#identifierList'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(IdentityAgent|HostKeyAgent)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#none'},
            {
              match: '\\G(SSH_AUTH_SOCK)(?=\\s*(?:$|#))',
              name: 'variable.environment.ssh-config'
            },
            {include: '#variableName'},
            {include: '#stringList'}
          ]
        },
        {
          begin: '(?i)^[ \\t]*(IgnoreRhosts)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {
              match: '\\Gshosts-only(?=\\s*(?:$|#))',
              name: 'constant.language.shosts-only.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(ListenAddress)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#port'},
            {
              captures: {0: {patterns: [{include: '#stringList'}]}},
              match: '\\G[^\\s#:]+(?=\\s*(?:$|#|\\s+rdomain\\s))'
            },
            {
              begin: '(?!\\G)[ \\t]+(rdomain)[ \\t]+(?=[^\\s#])',
              beginCaptures: {1: {name: 'storage.type.rdomain.ssh-config'}},
              end: '(?=\\s*(?:$|#))',
              patterns: [{include: '#stringList'}]
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(DynamicForward|LocalForward|RemoteForward)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#port'}, {include: '#stringList'}]
        },
        {
          begin: '(?i)^[ \\t]*(LogLevel)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match:
                '\\G(QUIET|FATAL|ERROR|INFO|VERBOSE|DEBUG[1-3]?)(?=\\s*(?:$|#))',
              name: 'constant.language.loglevel.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(LogVerbose)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {
                  name: 'string.unquoted.source-file.ssh-config',
                  patterns: [{include: '#wildcard'}]
                },
                2: {name: 'punctuation.separator.ssh-config'},
                3: {
                  name: 'entity.name.function.ssh-config',
                  patterns: [{include: '#wildcard'}]
                },
                4: {name: 'punctuation.separator.ssh-config'},
                5: {
                  name: 'constant.numeric.integer.decimal.line-number.ssh-config',
                  patterns: [{include: '#wildcard'}]
                }
              },
              match:
                '(?:\\G|(?<=,))([^\\s:#,]+)(:)([^\\s:#,]+)(?:(:)([*?\\d]+)|(?=\\s|#|$))',
              name: 'meta.log-spec.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(MaxStartups)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {
                  name: 'meta.start-limit.ssh-config',
                  patterns: [{include: '#integer'}]
                },
                2: {name: 'punctuation.separator.ssh-config'},
                3: {
                  name: 'meta.rate-limit.ssh-config',
                  patterns: [{include: '#integer'}]
                },
                4: {name: 'punctuation.separator.ssh-config'},
                5: {
                  name: 'meta.full-limit.ssh-config',
                  patterns: [{include: '#integer'}]
                }
              },
              match: '\\G(\\d*)(:)(\\d*)(:)(\\d*)'
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(PerSourceMaxStartups)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#none'}, {include: '#integer'}]
        },
        {
          begin:
            '(?i)^[ \\t]*(PerSourceNetBlockSize)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: '#integer'}]},
                2: {name: 'punctuation.separator.ssh-config'},
                3: {patterns: [{include: '#integer'}]}
              },
              match: '\\G(\\d+)(?:(:)(\\d*))?'
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(PermitListen|PermitOpen|PermitRemoteOpen)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#any'}, {include: '#none'}, {include: '#port'}]
        },
        {
          begin: '(?i)^[ \\t]*(PermitRootLogin)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match:
                '\\G(prohibit-password|forced-commands-only|without-password)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            },
            {include: '#boolean'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(PermitTunnel|Tunnel)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(ethernet|point-to-point)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            },
            {include: '#boolean'}
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(PermitUserEnvironment)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [{include: '#boolean'}, {include: '#patternList'}]
        },
        {
          begin: '(?i)^[ \\t]*(ProxyJump)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: 'ssh:[^\\s#,]+',
              name: 'constant.other.reference.link.underline.ssh.url.ssh-config'
            },
            {
              captures: {
                1: {name: 'meta.authority.ssh-config'},
                2: {name: 'string.unquoted.username.ssh-config'},
                3: {name: 'meta.separator.punctuation.ssh-config'},
                4: {patterns: [{include: '#port'}]}
              },
              match: '(([^\\s\\#@:,]+)(@))?([^\\s\\#@:,]+(?::\\d+)?)'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(PubkeyAuthOptions)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(none|touch-required|verify-required)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(RekeyLimit)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {name: 'meta.max-bytes.ssh-config'},
                2: {
                  name: 'constant.numeric.integer.decimal.filesize.ssh-config'
                },
                3: {name: 'keyword.other.unit.filesize.ssh-config'},
                4: {name: 'constant.language.default.ssh-config'},
                5: {patterns: [{include: '#none'}]},
                6: {name: 'meta.timeout.ssh-config'},
                7: {patterns: [{include: '#time'}]},
                8: {name: 'constant.language.default.ssh-config'},
                9: {name: 'constant.language.none.ssh-config'}
              },
              match:
                '\\G((\\d+([KMG]?))|(default)|(none))(?:\\s+(((?:\\d+(?:[SMHDWsmhdw]|\\b))++)|(default)|(none)))?(?=\\s*(?:$|#))'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(RequestTTY)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {
              match: '\\G(auto|force)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(SessionType)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(none|default|subsystem)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(SetEnv)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              begin: '((?!\\d)[*?\\w]+)(=)',
              beginCaptures: {
                1: {name: 'variable.environment.ssh-config'},
                2: {name: 'keyword.operator.assignment.ssh-config'}
              },
              end: '(?=\\s|$|#)',
              name: 'meta.assignment.ssh-config',
              patterns: [
                {match: '\\G[^#\\s"]+', name: 'string.unquoted.ssh-config'},
                {
                  begin: '\\G"',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.string.begin.ssh-config'}
                  },
                  end: '"|(?=$)',
                  endCaptures: {
                    0: {name: 'punctuation.definition.string.end.ssh-config'}
                  },
                  name: 'string.quoted.double.ssh-config',
                  patterns: [{include: '#wildcard'}]
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(StreamLocalBindMask)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G([0-7]+)(?=$|\\s|$)',
              name: 'constant.numeric.integer.octal.ssh-config'
            },
            {
              match: '\\G[^\\s0-7#]+',
              name: 'invalid.illegal.bad-character.ssh-config'
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(StrictHostKeyChecking)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {
              match: '\\G(ask|accept-new)(?=\\s*(?:$|#))',
              name: 'constant.language.$1.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(SyslogFacility)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              match: '\\G(DAEMON|USER|AUTH|LOCAL[0-7])(?=\\s*(?:$|#))',
              name: 'constant.language.syslogfacility.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(TunnelDevice)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              captures: {
                1: {name: 'meta.local-tunnel.ssh-config'},
                2: {patterns: [{include: '#integer'}]},
                3: {name: 'constant.language.any.ssh-config'},
                4: {name: 'punctuation.separator.ssh-config'},
                5: {name: 'meta.remote-tunnel.ssh-config'},
                6: {patterns: [{include: '#integer'}]},
                7: {name: 'constant.language.any.ssh-config'},
                8: {name: 'punctuation.separator.ssh-config'}
              },
              match: '\\G((\\d+)|(any))(:)((\\d+)|(any))(?=\\s*(?:$|#))'
            }
          ]
        },
        {
          begin:
            '(?i)^[ \\t]*(UpdateHostKeys|VerifyHostKeyDNS)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {include: '#boolean'},
            {
              match: '\\Gask(?=\\s*(?:$|#))',
              name: 'constant.language.ask.ssh-config'
            }
          ]
        },
        {
          begin: '(?i)^[ \\t]*(VersionAddendum)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.field-name.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          contentName: 'meta.arguments.ssh-config',
          end: '(?=[ \\t]*(?:$|#))',
          name: 'meta.field.${1:/downcase}.ssh-config',
          patterns: [
            {
              begin: '\\G(?!none\\s*(?:$|#))(?=[^\\s#])',
              end: '(?=\\s*(?:$|#))',
              name: 'string.unquoted.herestring.ssh-config'
            },
            {include: '#none'}
          ]
        }
      ]
    },
    identifierList: {
      captures: {
        1: {name: 'keyword.operator.combinator.ssh-config'},
        2: {
          patterns: [
            {
              captures: {0: {patterns: [{include: '#wildcard'}]}},
              match: '[^\\s,]+',
              name: 'constant.other.identifier.ssh-config'
            },
            {include: '#comma'}
          ]
        }
      },
      match: '(?:^|\\G|(?<=\\s))([-+^])?([^\\s,]+(?:,[^\\s,]+)*+)'
    },
    integer: {
      match: '-?[0-9]+',
      name: 'constant.numeric.integer.decimal.ssh-config'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#scope'},
        {include: '#field'}
      ]
    },
    none: {
      match: '\\G(none)(?=\\s*(?:$|#))',
      name: 'constant.language.none.ssh-config'
    },
    patternList: {
      begin: '\\G',
      end: '(?=[ \\t]*(?:$|#))',
      name: 'meta.pattern-list.ssh-config',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.logical.not.negation.ssh-config'},
            2: {patterns: [{include: '#wildcard'}]}
          },
          match: '(!)?([^,\\s#]+)',
          name: 'constant.other.pattern.ssh-config'
        },
        {include: '#comma'}
      ]
    },
    patternListInline: {
      begin: '(?:^|\\G)',
      end: '(?=[ \\t]*(?:$|#))',
      patterns: [{include: '#patternList'}]
    },
    port: {
      captures: {
        1: {patterns: [{include: '#addr'}]},
        2: {name: 'punctuation.separator.ssh-config'},
        3: {
          name: 'constant.numeric.integer.decimal.port-number.ssh-config',
          patterns: [{include: '#wildcard'}]
        }
      },
      match:
        '(?:\\G|^|(?<=[ \\t]))(?:(\\[[^\\]]+\\]|[^\\s:]*)(:))?([?*\\d]+)(?=\\s*(?:$|#)|\\s+(?:(?:[^\\s:#]+:)?\\d+|rdomain[ \\t]))'
    },
    scope: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.host.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          match:
            '(?i)(?:^|\\G)[ \\t]*(Host|Match)(?:\\s*(=))?(?=[ \\t]*(?:$|#))',
          name: 'meta.scope.${1:/downcase}.empty.ssh-config'
        },
        {
          begin: '(?i)(?:^|\\G)[ \\t]*(Host)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.host.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          end: '(?i)(?!\\G)(?=^[ \\t]*(?:Host|Match)(?:$|\\s|=))',
          name: 'meta.scope.host.ssh-config',
          patterns: [{include: '#patternList'}, {include: '#main'}]
        },
        {
          begin: '(?i)(?:^|\\G)[ \\t]*(Match)(?:\\s*(=)|(?=$|\\s))[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.control.match.ssh-config'},
            2: {name: 'keyword.operator.assignment.ssh-config'}
          },
          end: '(?i)(?!\\G)(?=^[ \\t]*(?:Host|Match)(?:$|\\s|=))',
          name: 'meta.scope.match.ssh-config',
          patterns: [
            {
              match: '\\GAll(?=\\s*(?:$|#))',
              name: 'constant.language.match-criteria.ssh-config'
            },
            {
              begin:
                '\\G(?:(Address|Group|Host|LocalAddress|LocalPort|RDomain|User)(?=$|\\s|#))?[ \\t]*',
              beginCaptures: {
                1: {name: 'constant.language.match-criteria.ssh-config'}
              },
              contentName: 'meta.arguments.ssh-config',
              end: '(?=\\s*(?:$|#))',
              name: 'meta.${1:/downcase}-match.ssh-config',
              patterns: [{include: '#patternList'}]
            },
            {include: '#main'}
          ]
        }
      ]
    },
    stringList: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ssh-config'}
          },
          end: '"|(?=$)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.ssh-config'}
          },
          name: 'string.quoted.double.ssh-config',
          patterns: [{include: '#wildcard'}]
        },
        {
          match: '[^"\\s#]+',
          name: 'string.unquoted.ssh-config',
          patterns: [{include: '#wildcard'}]
        }
      ]
    },
    time: {
      captures: {
        0: {
          patterns: [{match: '\\D', name: 'keyword.other.unit.time.ssh-config'}]
        }
      },
      match: '(?:\\d+(?:[SMHDWsmhdw]|\\b))++',
      name: 'constant.other.time.interval.ssh-config'
    },
    token: {
      captures: {1: {name: 'punctuation.definition.token.ssh-config'}},
      match: '(%)[%CDdFfHhIiKkLlnprsTtUu]',
      name: 'constant.other.placeholder.token.ssh-config'
    },
    variableName: {
      captures: {1: {name: 'punctuation.definition.variable.ssh-config'}},
      match: '\\G(\\$)(?!\\d)\\w+',
      name: 'variable.environment.ssh-config'
    },
    wildcard: {
      match: '[?*]',
      name: 'keyword.operator.wildcard.pattern.ssh-config'
    }
  },
  scopeName: 'source.ssh-config'
}

export default grammar
