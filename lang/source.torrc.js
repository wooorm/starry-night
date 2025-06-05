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
  dependencies: ['etc', 'source.hosts'],
  extensions: [],
  injections: {
    'L:source.torrc meta.entry.accountingstart.torrc': {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#unit'}]},
            2: {name: 'constant.numeric.day-of-month.torrc'},
            3: {name: 'constant.numeric.time.torrc'},
            4: {name: 'punctuation.separator.time.torrc'}
          },
          match:
            '(?i)(?<=AccountingStart)\\s+(day|week|month)(?:\\s+(\\d{1,2}))?\\s+((?:\\d{2}(:)\\d{2}))(?=\\s*(?:$|#))'
        }
      ]
    },
    'L:source.torrc meta.entry.controlsocket.torrc': {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.disable-option.torrc'}},
          match: '(?i)(?<=ControlSocket)\\s+(0)(?=\\s*(?:$|#))'
        }
      ]
    },
    'L:source.torrc meta.entry.schedulers.torrc': {
      patterns: [
        {
          captures: {
            1: {
              patterns: [
                {match: '\\w+', name: 'constant.language.scheduler-type.torrc'},
                {include: 'etc#comma'}
              ]
            }
          },
          match:
            '(?i)(?<=Schedulers)\\s+(?!\\s*,\\s*)((?:\\s*(?:,\\s*)?(?:KISTLite|KIST|Vanilla))++)(?=\\s*(?:$|#))'
        }
      ]
    },
    'L:source.torrc source.embedded.abnf meta.ruleset': {
      patterns: [
        {
          match: '(?<==)\\s+(Any character except.+)',
          name: 'string.comment.freeform-rule-specifier.abnf'
        }
      ]
    }
  },
  names: ['tor-config', 'torrc'],
  patterns: [
    {
      applyEndPatternLast: true,
      begin: '\\A(?=[ \\t]*$|This document)',
      end: '(?=\\S)',
      patterns: [
        {
          begin:
            '^(?=This document specifies the current format and semantics of the torrc)',
          end: '(?=A)B',
          name: 'meta.document.torrc-spec',
          patterns: [
            {
              begin: '(?i)^(\\s*)((1\\.)\\s+File\\s+Syntax)[ \\t]*$',
              beginCaptures: {
                1: {
                  name: 'punctuation.whitespace.leading.indentation.torrc-spec'
                },
                2: {name: 'markup.heading.1.numbered.torrc-spec'},
                3: {name: 'constant.numeric.section-number.torrc-spec'}
              },
              contentName: 'source.embedded.abnf',
              end: '(?=^(?:(?!\\s)|\\1)(?:\\d+\\.)+\\s+)',
              name: 'meta.section.file-syntax.torrc-spec',
              patterns: [{include: 'source.abnf'}]
            },
            {
              begin:
                '(?i)^(\\s*)(((?:\\d+\\.){2})\\s+Syntax\\s+examples)[ \\t]*$',
              beginCaptures: {
                1: {
                  name: 'punctuation.whitespace.leading.indentation.torrc-spec'
                },
                2: {name: 'markup.heading.2.numbered.torrc-spec'},
                3: {name: 'constant.numeric.section-number.torrc-spec'}
              },
              contentName: 'source.embedded.torrc',
              end: '(?=A)B',
              name: 'meta.section.syntax-examples.torrc-spec',
              patterns: [{include: 'source.torrc#main'}]
            },
            {
              begin:
                '(?i)^(\\s*)((\\d+\\.)\\s+(?!Syntax\\s+examples\\s*$)\\S.*)[ \\t]*$',
              beginCaptures: {
                1: {
                  name: 'punctuation.whitespace.leading.indentation.torrc-spec'
                },
                2: {name: 'markup.heading.1.numbered.torrc-spec'},
                3: {name: 'constant.numeric.section-number.torrc-spec'}
              },
              contentName: 'text.embedded.plain',
              end: '(?=^(?:(?!\\s)|\\1)(?:\\d+\\.)+\\s+)',
              name: 'meta.section.other.torrc-spec',
              patterns: []
            }
          ]
        }
      ]
    },
    {include: '#main'}
  ],
  repository: {
    address: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: 'source.hosts#modern'}]},
            2: {patterns: [{include: 'etc#colon'}]},
            3: {name: 'punctuation.definition.address.begin.torrc'},
            4: {patterns: [{include: 'etc#ipv4'}]},
            5: {patterns: [{include: 'etc#ipv6'}]},
            6: {patterns: [{include: '#port'}]},
            7: {name: 'punctuation.definition.address.end.torrc'}
          },
          match:
            '(?ix)\n(?:\n\t# “hostname:…”\n\t([^\\[\\]\\s:#,]+) (:)\n\t|\n\t# No first part, just match anything that quacks like an IP addy\n\t(?=\\[)\n)\n\n# DRY and TextMate-friendly hack to assert balanced but optional brackets\n(?:\n\t# If an opening bracket follows, require an accompanying closing bracket \n\t(?= \\[ [^\\[\\]\\s,\\#]*+ \\])\n\t|\n\t# Otherwise, avoid matching unbalanced brackets\n\t(?!\\[)\n)\n\n(\\[)?\n(?: (\\d{1,3}(?:\\.\\d{1,3})+)     # IPv4 address\n|   (:*[0-9A-F]+(?::+[0-9A-F]*)*+) # IPv6 address\n|   (\\d+)                         # Port?\n)\n(\\])?\n(?=\\s|,|$|\\#)',
          name: 'meta.address.torrc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.ipv6-address.begin.torrc'},
            2: {patterns: [{include: 'etc#ipv6'}]},
            3: {name: 'punctuation.definition.ipv6-address.end.torrc'},
            4: {name: 'meta.cidr-notation'},
            5: {name: 'keyword.operator.assignment.cidr'},
            6: {patterns: [{include: 'etc#intNoExp'}]}
          },
          match: '(\\[)([^\\[\\]]+)(\\])((/)(\\d+))'
        }
      ]
    },
    anyIP: {
      captures: {
        0: {
          patterns: [
            {
              match: '\\*(\\d)',
              name: 'keyword.operator.wildcard.match-ipv$1.torrc'
            },
            {match: '\\*', name: 'keyword.operator.wildcard.match-all.torrc'},
            {include: 'etc#colon'}
          ]
        }
      },
      match: '\\*[46]?(?::\\*)?'
    },
    cc: {
      captures: {
        1: {name: 'punctuation.definition.country-code.begin.torrc'},
        3: {name: 'constant.character.escape.wildcard.match-any.torrc'},
        4: {name: 'punctuation.definition.country-code.end.torrc'}
      },
      match: '(\\{)(?:([A-Za-z]{2})|(\\?\\?))(\\})',
      name: 'constant.language.country-code.${2:/downcase}.torrc'
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.torrc'}},
      end: '$',
      name: 'comment.line.number-sign.torrc'
    },
    commentEmbedded: {
      begin: '[ \\t]*(?=#)',
      contentName: 'comment.line.number-sign.embedded.torrc',
      end: '(?!\\G)^',
      patterns: [{match: '\\G#', name: 'punctuation.definition.comment.torrc'}]
    },
    entry: {
      begin: '^\\s*(?:(/)|(\\+))?((?:[^\\s#\\0\\\\]|\\\\(?!$))++)',
      beginCaptures: {
        1: {name: 'keyword.operator.flag.clear-value.torrc'},
        2: {name: 'keyword.operator.flag.append-value.torrc'},
        3: {name: 'variable.assignment.entry.torrc'}
      },
      end: '(?!\\G)',
      name: 'meta.entry.${3:/downcase/asciify}.torrc',
      patterns: [
        {
          begin:
            '(?ix)\n# Unitless\n(?<= AddressDisableIPv6\n| AllowNonRFC953Hostnames\n| AssumeReachableIPv6\n| AssumeReachable\n| AuthDirHasIPv6Connectivity\n| AuthDirListBadExits\n| AuthDirListMiddleOnly\n| AuthDirMaxServersPerAddr\n| AuthDirPinKeys\n| AuthDirRejectRequestsUnderLoad\n| AuthDirSharedRandomness\n| AuthDirTestEd25519LinkKeys\n| AuthDirTestReachability\n| AuthoritativeDirectory\n| AutomapHostsOnResolve\n| AvoidDiskWrites\n| BridgeAuthoritativeDir\n| BridgeRecordUsageByCountry\n| BridgeRelay\n| CacheDirectoryGroupReadable\n| CellStatistics\n| CircuitBuildTimeout\n| CircuitPadding\n| CircuitPriorityHalflife\n| CircuitStreamTimeout\n| CircuitsAvailableTimeout\n| ClientBootstrapConsensusAuthorityDownloadInitialDelay\n| ClientBootstrapConsensusAuthorityOnlyDownloadInitialDelay\n| ClientBootstrapConsensusFallbackDownloadInitialDelay\n| ClientBootstrapConsensusMaxInProgressTries\n| ClientDNSRejectInternalAddresses\n| ClientOnly\n| ClientPreferIPv6DirPort\n| ClientPreferIPv6ORPort\n| ClientRejectInternalAddresses\n| ClientUseIPv4\n| ClientUseIPv6\n| CompiledProofOfWorkHash\n| ConfluxEnabled\n| ConnDirectionStatistics\n| ConnLimit\n| ConnectionPadding\n| ConstrainedSockets\n| ControlPortFileGroupReadable\n| ControlSocketsGroupWritable\n| CookieAuthFileGroupReadable\n| CookieAuthentication\n| CountPrivateBandwidth\n| DataDirectoryGroupReadable\n| DirAllowPrivateAddresses\n| DirAuthorityFallbackRate\n| DirCache\n| DirReqStatistics\n| DisableAllSwap\n| DisableDebuggerAttachment\n| DisableNetwork\n| DisableOOSCheck\n| DoSCircuitCreationBurst\n| DoSCircuitCreationDefenseType\n| DoSCircuitCreationEnabled\n| DoSCircuitCreationMinConnections\n| DoSCircuitCreationRate\n| DoSConnectionConnectBurst\n| DoSConnectionConnectRate\n| DoSConnectionDefenseType\n| DoSConnectionEnabled\n| DoSConnectionMaxConcurrentCount\n| DoSRefuseSingleHopClientRendezvous\n| DoSStreamCreationBurst\n| DoSStreamCreationDefenseType\n| DoSStreamCreationEnabled\n| DoSStreamCreationRate\n| DormantCanceledByStartup\n| DormantOnFirstStartup\n| DormantTimeoutDisabledByIdleStreams\n| DormantTimeoutEnabled\n| DownloadExtraInfo\n| EnforceDistinctSubnets\n| EntryStatistics\n| ExitPolicyRejectLocalInterfaces\n| ExitPolicyRejectPrivate\n| ExitPortStatistics\n| ExitRelay\n| ExtORPortCookieAuthFileGroupReadable\n| ExtendAllowPrivateAddresses\n| ExtendByEd25519ID\n| ExtraInfoStatistics\n| FascistFirewall\n| FetchDirInfoEarly\n| FetchDirInfoExtraEarly\n| FetchHidServDescriptors\n| FetchServerDescriptors\n| FetchUselessDescriptors\n| GeoIPExcludeUnknown\n| HardwareAccel\n| HiddenServiceAllowUnknownPorts\n| HiddenServiceDirGroupReadable\n| HiddenServiceEnableIntroDoSBurstPerSec\n| HiddenServiceEnableIntroDoSDefense\n| HiddenServiceEnableIntroDoSRatePerSec\n| HiddenServiceMaxStreamsCloseCircuit\n| HiddenServiceMaxStreams\n| HiddenServiceNonAnonymousMode\n| HiddenServiceNumIntroductionPoints\n| HiddenServiceOnionBalanceInstance\n| HiddenServicePoWDefensesEnabled\n| HiddenServicePoWQueueBurst\n| HiddenServicePoWQueueRate\n| HiddenServiceSingleHopMode\n| HiddenServiceStatistics\n| HiddenServiceVersion\n| IPv6Exit\n| KISTSockBufSizeFactor\n| KeepBindCapabilities\n| KeepalivePeriod\n| KeyDirectoryGroupReadable\n| LearnCircuitBuildTimeout\n| LogMessageDomains\n| LogTimeGranularity\n| MainloopStats\n| MaxCircuitDirtiness\n| MaxClientCircuitsPending\n| MinMeasuredBWsForAuthToIgnoreAdvertised\n| NewCircuitPeriod\n| NoExec\n| NumCPUs\n| NumDirectoryGuards\n| NumEntryGuards\n| NumPrimaryGuards\n| OfflineMasterKey\n| OverloadStatistics\n| PaddingStatistics\n| PathBiasScaleThreshold\n| PathBiasScaleUseThreshold\n| PathsNeededToBuildCircuits\n| ProtocolWarnings\n| PublishHidServDescriptors\n| PublishServerDescriptor\n| ReducedCircuitPadding\n| ReducedConnectionPadding\n| ReducedExitPolicy\n| ReevaluateExitPolicy\n| RefuseUnknownExits\n| RunAsDaemon\n| SafeLogging\n| SafeSocks\n| Sandbox\n| ServerDNSAllowBrokenConfig\n| ServerDNSAllowNonRFC953Hostnames\n| ServerDNSDetectHijacking\n| ServerDNSRandomizeCase\n| ServerDNSSearchDomains\n| ShutdownWaitLength\n| SocksTimeout\n| StrictNodes\n| TestSocks\n| TestingBridgeBootstrapDownloadInitialDelay\n| TestingBridgeDownloadInitialDelay\n| TestingClientConsensusDownloadInitialDelay\n| TestingClientDownloadInitialDelay\n| TestingDirAuthVoteExitIsStrict\n| TestingDirAuthVoteGuardIsStrict\n| TestingDirAuthVoteHSDirIsStrict\n| TestingEnableCellStatsEvent\n| TestingEnableConnBwEvent\n| TestingServerConsensusDownloadInitialDelay\n| TestingServerDownloadInitialDelay\n| TestingTorNetwork\n| TrackHostExitsExpire\n| TruncateLogFile\n| UnixSocksGroupWritable\n| UpdateBridgesFromAuthority\n| UseBridges\n| UseDefaultFallbackDirs\n| UseEntryGuards\n| UseGuardFraction\n| UseMicrodescriptors\n| V3AuthNIntervalsValid\n| V3AuthUseLegacyKey\n| V3AuthoritativeDirectory\n| VanguardsLiteEnabled\n| VersioningAuthoritativeDirectory\n| __OwningControllerProcess\n\n# Units in use\n| AccountingMax\n| AuthDirFastGuarantee\n| AuthDirGuardBWGuarantee\n| AuthDirVoteGuardGuaranteeTimeKnown\n| AuthDirVoteStableGuaranteeMTBF\n| AuthDirVoteStableGuaranteeMinUptime\n| BandwidthBurst\n| BandwidthRate\n| ConstrainedSockSize\n| DoSCircuitCreationDefenseTimePeriod\n| DoSConnectionConnectDefenseTimePeriod\n| DormantClientTimeout\n| GuardLifetime\n| HeartbeatPeriod\n| KISTSchedRunInterval\n| MaxAdvertisedBandwidth\n| MaxConsensusAgeForDiffs\n| MaxMemInQueues\n| MaxOnionQueueDelay\n| MaxUnparseableDescSizeToLog\n| MinUptimeHidServDirectoryV2\n| PerConnBWBurst\n| PerConnBWRate\n| RelayBandwidthBurst\n| RelayBandwidthRate\n| RephistTrackTime\n| SSLKeyLifetime\n| SigningKeyLifetime\n| TestingAuthDirTimeToLearnReachability\n| TestingAuthKeyLifetime\n| TestingClientMaxIntervalWithoutRequest\n| TestingDirConnectionMaxStall\n| TestingLinkCertLifetime\n| TestingMinExitFlagThreshold\n| TestingMinFastFlagThreshold\n| TestingMinTimeToReportBandwidth\n| TestingSigningKeySlop\n| TestingV3AuthInitialDistDelay\n| TestingV3AuthInitialVoteDelay\n| TestingV3AuthInitialVotingInterval\n| TestingV3AuthVotingStartOffset\n| TokenBucketRefillInterval\n| V3AuthDistDelay\n| V3AuthVoteDelay\n| V3AuthVotingInterval\n\n# Ports lists\n| FirewallPorts\n| LongLivedPorts\n| RejectPlaintextPorts\n| WarnPlaintextPorts\n) \\G ',
          end: '(?!\\G)',
          name: 'meta.numeric-setting.torrc',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryNumeric'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryNumeric'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryNumeric'}
              ]
            }
          ]
        },
        {
          begin: '(?i)(?<=[/+\\s]Log|^Log)\\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryLogging'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryLogging'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryLogging'}
              ]
            }
          ]
        },
        {
          begin:
            '(?ix)\n(?<= AccelDir\n| CacheDirectory\n| ClientOnionAuthDir\n| ControlPortWriteToFile\n| ControlSocket\n| CookieAuthFile\n| DataDirectory\n| DirPortFrontPage\n| ExtORPortCookieAuthFile\n| GeoIPFile\n| GeoIPv6File\n| GuardfractionFile\n| HiddenServiceDir\n| KeyDirectory\n| PidFile\n| ServerDNSResolvConfFile\n| V3BandwidthsFile\n) \\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryFile'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryFile'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryFile'}
              ]
            }
          ]
        },
        {
          begin:
            '(?ix)\n(?<= AuthDirVoteGuard\n| EntryNodes\n| ExcludeExitNodes\n| ExcludeNodes\n| ExitNodes\n| HSLayer2Nodes\n| HSLayer3Nodes\n| HTTPProxy\n| HTTPSProxy\n| HiddenServicePort\n| MapAddress\n| MiddleNodes\n| NodeFamily\n| OutboundBindAddressExit\n| OutboundBindAddressOR\n| OutboundBindAddressPT\n| OutboundBindAddress\n| Socks4Proxy | SOCKS4Proxy    # FIXME; Remove different casing once issue with\n| Socks5Proxy | SOCKS5Proxy    # scoped modifiers in lookbehinds is worked out.\n| TestingDirAuthVoteExit\n| TestingDirAuthVoteGuard\n| TestingDirAuthVoteHSDir\n| VirtualAddrNetworkIPv6\n) \\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryNode'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryNode'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryNode'}
              ]
            }
          ]
        },
        {
          begin:
            '(?i)(?<=DirPolicy|ExitPolicy|MetricsPortPolicy|SocksPolicy|SOCKSPolicy)\\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryPolicies'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryPolicies'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryPolicies'}
              ]
            }
          ]
        },
        {
          begin: '(?i)(?<=ConsensusParams|ServerTransportOptions)\\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryParams'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryParams'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryParams'}
              ]
            }
          ]
        },
        {
          begin:
            '(?ix)\n(?<= MinimalAcceptedServerVersion\n| RecommendedClientVersions\n| RecommendedServerVersions\n| RecommendedVersions\n) \\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryVersions'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryVersions'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryVersions'}
              ]
            }
          ]
        },
        {
          begin: '\\G',
          end: '(?!\\G)',
          patterns: [
            {
              begin:
                '\\G(?=(?:\\s+(?:[^"#\\s]+|"(?:[^\\\\"]|\\\\.)*+"))++\\s*#)',
              contentName: 'meta.value.torrc',
              end: '(?=\\s*#)',
              patterns: [{include: '#entryGeneric'}]
            },
            {
              begin: '\\G(?:\\s*(\\\\$\\r?\\n?)|[ \\t]+|(?=$|#))',
              beginCaptures: {1: {patterns: [{include: '#esc'}]}},
              contentName: 'meta.value.torrc',
              end: '(\\G\\s+((?=\\S)(?!#)[^\\\\\\n#\\0]+))(?=\\s*(?:$|#))|(?=\\s*$)',
              endCaptures: {
                1: {name: 'meta.value.torrc'},
                2: {patterns: [{include: '#entryGeneric'}]}
              },
              patterns: [
                {include: '#commentEmbedded'},
                {include: '#esc'},
                {include: '#entryGeneric'}
              ]
            }
          ]
        }
      ]
    },
    entryFile: {
      begin: '(?=[^#\\s])',
      end: '(?=\\s*(?:$|#))',
      name: 'string.other.link.filename.torrc'
    },
    entryGeneric: {
      patterns: [
        {include: '#typed'},
        {include: '#address'},
        {include: 'etc#ip'},
        {include: '#num'},
        {include: '#str'},
        {include: '#portSuffix'},
        {include: 'etc#comma'},
        {include: '#anyIP'},
        {include: '#unq'}
      ]
    },
    entryLogging: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.domain-list.torrc'},
            2: {name: 'punctuation.section.begin.domains.torrc'},
            3: {
              patterns: [
                {match: '[A-Za-z]+', name: 'entity.name.domain.torrc'},
                {
                  match: '\\*',
                  name: 'keyword.operator.wildcard.match-all.torrc'
                },
                {
                  match: '~',
                  name: 'keyword.operator.logical.negation.negate.torrc'
                },
                {include: 'etc#comma'}
              ]
            },
            4: {name: 'punctuation.section.end.domains.torrc'},
            5: {
              name: 'meta.severity-levels.torrc',
              patterns: [
                {
                  match: '(?i)debug|err|info|notice|warn',
                  name: 'constant.language.severity-level.torrc'
                },
                {match: '-', name: 'punctuation.separator.dash.torrc'}
              ]
            }
          },
          match:
            '(?ix)\n((\\[)((?:~?(?:[a-z]+|\\*)(?:,|(?=\\])))*+)(\\]))?\n((?!-)(?:(?:debug|err|info|notice|warn)-?){1,2}(?<!-))\n(?=$|\\s)',
          name: 'meta.log-selector.torrc'
        },
        {
          match: '(?i)(?<=\\s|^|\\G)\\b(stderr|stdout|syslog)\\b(?=$|\\s|#)',
          name: 'keyword.operator.log-destination.$1.torrc'
        },
        {
          begin: '(?i)(?<=\\s|^|\\G)(file)(?=\\s|$|#)[ \\t]*',
          beginCaptures: {
            1: {name: 'keyword.operator.log-destination.filename.torrc'}
          },
          contentName: 'string.other.link.filename.torrc',
          end: '(?=\\s*(?:$|#))',
          name: 'meta.log-file.torrc'
        }
      ]
    },
    entryNode: {
      patterns: [
        {include: '#cc'},
        {include: '#port'},
        {
          captures: {
            1: {name: 'storage.type.domain.unix.torrc'},
            2: {patterns: [{include: 'etc#kolon'}]},
            3: {name: 'string.other.link.filename.torrc'}
          },
          match: '(?i)(?<=\\s|^|\\G|,)(unix)(:)((?:[^\\r\\n#\\s\\\\]|\\\\.)++)'
        },
        {
          match: '(?<=\\s|^|\\G|,)\\*(?=\\s|,|$|#)',
          name: 'keyword.operator.wildcard.match-all.torrc'
        },
        {include: '#address'},
        {include: 'etc#comma'},
        {include: 'etc#ipv6'},
        {include: 'source.hosts#modern'}
      ]
    },
    entryNumeric: {
      patterns: [
        {
          match: '(?i)(?<=\\s|^|\\G)\\b(auto|bridge|relay|v3)\\b(?=$|\\s|#)',
          name: 'constant.language.other.$1.torrc'
        },
        {include: 'etc#comma'},
        {include: '#typed'},
        {include: '#unit'},
        {include: '#num'},
        {
          match: '(?:[^#\\s\\d,]|(?<!\\d),(?!\\d))++',
          name: 'invalid.illegal.syntax.non-numeric.torrc'
        }
      ]
    },
    entryParams: {
      patterns: [
        {
          begin: '(?<=\\s|^|\\G|,)([^\\s#=]+)(=)',
          beginCaptures: {
            1: {name: 'entity.name.parameter.torrc'},
            2: {patterns: [{include: 'etc#eql'}]}
          },
          contentName: 'meta.parameter-value.torrc',
          end: '(?=$|\\s|,|#)',
          name: 'meta.parameter.torrc',
          patterns: [
            {include: '#typed'},
            {match: '\\G[^\\s,#]+', name: 'string.unquoted.torrc'}
          ]
        },
        {
          match: '(?<=\\s|^|\\G|,)[^\\s#=,]+(?=$|\\s|,|#)',
          name: 'constant.language.parameter.niladic.torrc'
        },
        {include: 'etc#comma'}
      ]
    },
    entryPolicies: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.policy-action.torrc'}},
          match: '(?i)(?<=\\s|^|\\G|,)((accept|reject)6?)(?=$|\\s|#|,)',
          name: 'meta.policy.${2:/downcase}.torrc'
        },
        {include: 'etc#comma'},
        {include: '#address'},
        {include: 'etc#ip'},
        {include: 'etc#colon'},
        {include: 'etc#globSimple'}
      ]
    },
    entryVersions: {patterns: [{include: '#version'}, {include: 'etc#comma'}]},
    esc: {
      captures: {
        1: {name: 'punctuation.definition.escape.backslash.torrc'},
        2: {name: 'sublimelinter.gutter-mark.torrc'}
      },
      match: '((\\\\))$\\r?\\n?',
      name: 'constant.character.escape.newline.torrc'
    },
    include: {
      begin: '(?i)^\\s*((%)include)(?=$|\\s|#)[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.control.directive.include.torrc'},
        2: {name: 'punctuation.definition.directive.torrc'}
      },
      end: '(?=\\s*$)',
      name: 'meta.preprocessor.include.torrc',
      patterns: [
        {
          begin: '\\G"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.torrc'}
          },
          contentName: 'constant.other.reference.link.include.torrc',
          end: '"|(?=$)',
          endCaptures: {0: {name: 'punctuation.definition.string.end.torrc'}},
          name: 'string.quoted.double.include.filename.torrc',
          patterns: [{include: '#strEsc'}, {include: 'etc#globSimple'}]
        },
        {
          begin: '\\G(?=[^"\\s#\\\\])',
          end: '(?=\\s*(?:$|#))',
          name: 'string.unquoted.include.filename.torrc',
          patterns: [
            {
              captures: {0: {patterns: [{include: 'etc#globSimple'}]}},
              match: '(?:[^"\\r\\n#\\\\]|\\\\.)++',
              name: 'constant.other.reference.link.include.torrc'
            },
            {include: '#esc'}
          ]
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#include'},
        {include: '#entry'}
      ]
    },
    num: {
      patterns: [
        {
          match: '(?i)(?:(?<=\\s|^|\\G|,)[-+]|\\b)0x[A-F0-9]+\\b',
          name: 'constant.numeric.integer.int.hexadecimal.hex.torrc'
        },
        {
          match: '(?:(?<=\\s|^|\\G|,)[-+]|\\b)\\d*\\.\\d+\\b',
          name: 'constant.numeric.float.real.decimal.dec.torrc'
        },
        {
          match: '(?:(?<=\\s|^|\\G|,)[-+]|\\b)\\d+(?!\\.)\\b',
          name: 'constant.numeric.integer.int.decimal.dec.torrc'
        }
      ]
    },
    port: {patterns: [{include: '#portLone'}, {include: '#portSuffix'}]},
    portLone: {
      match: '(?<=\\s|^|\\G|,)\\d+(?=\\s|$|,|#)',
      name: 'constant.numeric.integer.port-number.torrc'
    },
    portSuffix: {
      captures: {
        1: {patterns: [{include: 'etc#colon'}]},
        2: {name: 'constant.numeric.integer.port-number.torrc'}
      },
      match: '(?:(?<=\\d:)|(?<=\\d)(:))(\\d+)(?=\\s|$|,|#)'
    },
    str: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.torrc'}},
      end: '(")|((?:[^\\\\"]|\\\\.)*)$',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.torrc'},
        2: {name: 'invalid.illegal.syntax.unclosed-string.torrc'}
      },
      name: 'string.quoted.double.torrc',
      patterns: [{include: '#strEsc'}]
    },
    strEsc: {
      patterns: [
        {
          match: '(\\\\)[nrt\\\\\'"]',
          name: 'constant.character.escape.simple.torrc'
        },
        {
          match: '(\\\\)x[A-Fa-f0-9]{2}',
          name: 'constant.character.escape.codepoint.hexadecimal.torrc'
        },
        {
          match: '(\\\\)([0-7]{1,3})',
          name: 'constant.character.escape.codepoint.octal.torrc'
        }
      ]
    },
    typed: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#num'}]},
            2: {patterns: [{include: '#unit'}]}
          },
          match:
            '(?i)(?:^|\\G|(?<=\\s))([-+]?(?:0[xX][A-F0-9]+|\\d+(?:\\.\\d+)?))\\s+((?:second|minute|hour|day|week)s?)(?=$|\\s|#)',
          name: 'meta.duration.torrc'
        },
        {
          captures: {
            1: {patterns: [{include: '#num'}]},
            2: {patterns: [{include: '#unit'}]}
          },
          match:
            '(?i)(?:^|\\G|(?<=\\s))([-+]?(?:0[xX][A-F0-9]+|\\d+(?:\\.\\d+)?))\\s+([KMGT]?(?:Bytes|Bits))(?=$|\\s|#)',
          name: 'meta.data-size.torrc'
        }
      ]
    },
    unit: {
      captures: {
        1: {name: 'constant.language.unit.data.${2:/downcase}.torrc'},
        3: {name: 'constant.language.unit.temporal.${4:/downcase}.torrc'}
      },
      match:
        '(?i)(?<=\\s|^|\\G)\\b(?:(([KMGT]?(?:Bit|Byte|B))s?)|((msec|second|minute|hour|day|week|month)s?))\\b(?=$|\\s|#)'
    },
    unq: {
      begin: '[^\\s\\0#]',
      end: '(?=\\s*(?:\\\\?$|#))',
      name: 'string.unquoted.torrc'
    },
    version: {
      captures: {
        1: {patterns: [{include: 'etc#dot'}]},
        2: {patterns: [{include: 'etc#dash'}]}
      },
      match:
        '(?i)(?<=\\s|^|\\G|,)(\\d+(?:\\.\\d+)*)(?:(-)(?!-)[-A-Z]+)?(?=$|,|\\s|#)',
      name: 'constant.other.version-string.torrc'
    }
  },
  scopeName: 'source.torrc'
}

export default grammar
