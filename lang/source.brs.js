// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/rokucommunity/vscode-brightscript-language>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.brs'],
  names: ['brighterscript', 'brightscript'],
  patterns: [{include: '#entire_language'}],
  repository: {
    alias_statement: {
      captures: {
        1: {name: 'keyword.declaration.alias.brs'},
        2: {name: 'entity.name.variable.brs'},
        3: {name: 'keyword.operator.assignment.brs'}
      },
      match: '(?i:(alias)\\s+([a-z0-9_]+)\\s*(=)\\s*)'
    },
    annotation: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.decorator.brs'},
            2: {name: 'entity.name.function.brs meta.function-call.brs'}
          },
          match: '^\\s*(@)\\s*([a-zA-Z0-9_]+)'
        },
        {
          begin: '(@)\\s*([a-zA-Z0-9_]+)\\s*(\\()',
          beginCaptures: {
            1: {name: 'punctuation.decorator.brs'},
            2: {name: 'entity.name.function.brs meta.function-call.brs'},
            3: {name: 'meta.brace.round.brs'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'meta.brace.round.brs'}},
          name: 'meta.decorator.brs',
          patterns: [{include: '#entire_language'}]
        }
      ]
    },
    apostrophe_comment: {
      captures: {1: {name: 'punctuation.definition.comment.brs'}},
      match: "('[^\\r\\n]*)$",
      name: 'comment.line.apostrophe.brs'
    },
    bsdoc: {
      patterns: [
        {include: '#bsdoc_param_and_type'},
        {include: '#bsdoc_return_and_type'},
        {include: '#bsdoc_generic'}
      ]
    },
    bsdoc_generic: {
      captures: {
        1: {name: 'comment.line.apostrophe.brs'},
        2: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        3: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        4: {name: 'comment.block.documentation.brs'}
      },
      match: "(?i:\\s*(rem|'+)\\s*(@)(\\w+)(.*$))"
    },
    bsdoc_param_and_type: {
      captures: {
        1: {name: 'comment.line.apostrophe.brs'},
        2: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        3: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        4: {name: 'punctuation.definition.bracket.curly.begin.bsdoc'},
        5: {
          name: ' comment.block.documentation.brs entity.name.type.instance.bsdoc'
        },
        6: {name: 'punctuation.definition.bracket.curly.end.bsdoc'},
        7: {name: 'variable.other.bsdoc'},
        8: {name: 'comment.block.documentation.brs'}
      },
      match:
        "(?i:\\s*(rem|'+)\\s*(@)(param|type)\\s+(?:(\\{)\\s*([^\\}]+)\\s*(\\}))?\\s*([a-z0-9_.]+)?(.*))"
    },
    bsdoc_return_and_type: {
      captures: {
        1: {name: 'comment.line.apostrophe.brs'},
        2: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        3: {
          name: 'punctuation.definition.block.tag.bsdoc storage.type.class.bsdoc'
        },
        4: {name: 'punctuation.definition.bracket.curly.begin.bsdoc'},
        5: {
          name: ' comment.block.documentation.brs entity.name.type.instance.bsdoc'
        },
        6: {name: 'punctuation.definition.bracket.curly.end.bsdoc'},
        7: {name: 'comment.block.documentation.brs'}
      },
      match:
        "(?i:\\s*(rem|'+)\\s*(@)(return|returns)\\s+(?:(\\{)\\s*([^\\}]+)\\s*(\\}))?\\s*([a-z0-9_.]+.*)?)"
    },
    class_declaration: {
      captures: {
        1: {name: 'keyword.other.class.brs'},
        2: {name: 'entity.name.type.class.brs'},
        3: {name: 'storage.modifier.brs'},
        4: {name: 'entity.name.type.class.brs'}
      },
      match:
        '(?i:(class)\\s+([a-z0-9_]+)(?:\\s+(extends)(?:\\s+([a-z0-9_]+))?)?)'
    },
    class_roku_builtin: {
      match:
        '(?i:(?<=")(roAppInfo|roAppManager|roAppMemoryMonitor|roAppMemoryMonitorEvent|roAppendFile|roArray|roAssetCollection|roAssetFetcher|roAssetFetcherEvent|roAssetFetcherProgressEvent|roAssetPool|roAssetPoolFiles|roAssetRealizer|roAssetRealizerEvent|roAssociativeArray|roAudioConfiguration|roAudioEvent|roAudioEventMx|roAudioGuide|roAudioMetadata|roAudioOutput|roAudioPlayer|roAudioPlayerEvent|roAudioPlayerMx|roAudioResource|roBitmap|roBlockCipher|roBoolean|roBrSub|roBrightPackage|roBtClient|roBtClientEvent|roBtClientManager|roBtClientManagerEvent|roBtManager|roByteArray|roCECStatus|roCECStatusEvent|roCanvasWidget|roCaptionRenderer|roCaptionRendererEvent|roCecInterface|roCecRxFrameEvent|roCecTxCompleteEvent|roChannelManager|roChannelStore|roChannelStoreEvent|roCharDisplay|roClockWidget|roCodeRegistrationScreen|roCodeRegistrationScreenEvent|roCompositor|roConfigurationElements|roControlDown|roControlPort|roControlUp|roCreateFile|roDataGramSocket|roDatagramEvent|roDatagramReceiver|roDatagramSender|roDatagramSocket|roDateTime|roDeviceCrypto|roDeviceCustomization|roDeviceInfo|roDeviceInfoEvent|roDiskErrorEvent|roDiskMonitor|roDouble|roDsa|roEVPCipher|roEVPDigest|roElectron|roElectronEvent|roFileSystem|roFileSystemEvent|roFloat|roFont|roFontMetrics|roFontRegistry|roFunction|roGPIOButton|roGPIOControlPort|roGlobal|roGpioButton|roGpioControlPort|roGridScreen|roGridScreenEvent|roHMAC|roHashGenerator|roHdmiHotPlugEvent|roHdmiInputChanged|roHdmiOutputChanged|roHdmiStatus|roHdmiStatusEvent|roHtmlWidget|roHtmlWidgetEvent|roHttpAgent|roHttpEvent|roHttpServer|roIRDownEvent|roIRRepeatEvent|roIRUpEvent|roIRReceiver|roIRRemote|roIRRemotePress|roIRTransmitCompleteEvent|roIRTransmitter|roImageBuffer|roImageCanvas|roImageCanvasEvent|roImageMetaData|roImageMetadata|roImagePlayer|roImageWidget|roInput|roInputEvent|roInt|roIntrinsicDouble|roInvalid|roJRE|roKeyStore|roKeyboard|roKeyboardPress|roKeyboardScreen|roKeyboardScreenEvent|roList|roListScreen|roListScreenEvent|roLocalization|roLongInteger|roMediaServer|roMediaStreamer|roMediaStreamerEvent|roMessageDialog|roMessageDialogEvent|roMessagePort|roMicrophone|roMicrophoneEvent|roMimeStream|roMimeStreamEvent|roNetworkAdvertisement|roNetworkAttached|roNetworkConfiguration|roNetworkDetached|roNetworkDiscovery|roNetworkHotplug|roNetworkStatistics|roNetworkTimeEvent|roNodeJs|roNodeJsEvent|roOneLineDialog|roOneLineDialogEvent|roOpenVpn|roParagraphScreen|roParagraphScreenEvent|roPassKey|roPath|roPinEntryDialog|roPinEntryDialogEvent|roPosterScreen|roPosterScreenEvent|roPowerEvent|roPowerManager|roProgramGuide|roPtp|roPtpEvent|roQuadravoxButton|roQuadravoxSNS5|roRSA|roRSSArticle|roRSSParser|roReadFile|roReadWriteFile|roRectangle|roRegex|roRegion|roRegistry|roRegistrySection|roRemoteInfo|roResourceManager|roRssArticle|roRssParser|roRtspStream|roRtspStreamEvent|roSGNode|roSGNodeEvent|roSGScreen|roSGScreenEvent|roScreen|roSearchHistory|roSearchScreen|roSearchScreenEvent|roSequenceMatchEvent|roSequenceMatcher|roSerialPort|roSlideShow|roSlideShowEvent|roSnmpAgent|roSnmpEvent|roSocketAddress|roSocketEvent|roSpringboardScreen|roSpringboardScreenEvent|roSprite|roSqliteDatabase|roSqliteEvent|roSqliteStatement|roStorageAttached|roStorageDetached|roStorageHotplug|roStorageInfo|roStreamByteEvent|roStreamConnectResultEvent|roStreamEndEvent|roStreamLineEvent|roStreamQueue|roStreamQueueEvent|roStreamSocket|roString|roSyncManager|roSyncManagerEvent|roSyncPool|roSyncPoolEvent|roSyncPoolFiles|roSyncPoolProgressEvent|roSyncSpec|roSystemLog|roSystemLogEvent|roSystemTime|roTCPConnectEvent|roTCPServer|roTCPStream|roTextField|roTextScreen|roTextScreenEvent|roTextToSpeech|roTextToSpeechEvent|roTextWidget|roTextWidgetEvent|roTextureManager|roTextureRequest|roTextureRequestEvent|roTimeSpan|roTimer|roTimerEvent|roTimespan|roTouchCalibrationEvent|roTouchEvent|roTouchScreen|roTuner|roTunerEvent|roUPnPActionResult|roUPnPController|roUPnPDevice|roUPnPSearchEvent|roUPnPService|roUPnPServiceEvent|roUniversalControlEvent|roUrlEvent|roUrlTransfer|roUsbFilesystem|roUsbHidEmulator|roUsbHidLedEmulatorEvent|roUsbPowerControl|roVideoEvent|roVideoInput|roVideoMode|roVideoPlayer|roVideoPlayerEvent|roVideoScreen|roVideoScreenEvent|roVirtualMemory|roWriteFile|roXMLElement|roXMLList)(?="))',
      name: 'support.class.brs'
    },
    comment: {
      patterns: [{include: '#rem_comment'}, {include: '#apostrophe_comment'}]
    },
    component_statement: {
      begin:
        '(?i)^[ \t]*(component)\\s+(?:([a-z0-9_]+)|(".*?"))(?:\\s+(extends)(?:\\s+(?:([a-z0-9_]+)|(".*?")))?)?\\s*',
      beginCaptures: {
        1: {name: 'storage.type.component.brs'},
        2: {name: 'entity.name.type.component.brs'},
        3: {name: 'string.quoted.double.brs'},
        4: {name: 'storage.modifier.extends.brs'},
        5: {name: 'entity.name.type.component.brs'},
        6: {name: 'string.quoted.double.brs'}
      },
      end: '(?i)(?<![_[:alnum:]])(?<!\\.)\\s*(end\\s*component)',
      endCaptures: {1: {name: 'storage.type.component.brs'}},
      name: 'meta.component.brs',
      patterns: [{include: '#entire_language'}]
    },
    end_class: {
      match: '(?i:\\s*(end\\s*class))',
      name: 'storage.type.class.brs'
    },
    end_function: {
      match: '(?i)[ \\t]*end\\s*(sub|function)',
      name: 'keyword.declaration.function.brs'
    },
    end_namespace: {
      captures: {1: {name: 'keyword.other.namespace.brs'}},
      match: "^(?i:\\s*(end\\s*namespace)\\s*(?=['\\n]))"
    },
    end_region_comment: {
      match: "^(i?\\s*'\\s*#endregion(\\s*.*)?$)",
      name: 'keyword.preprocessor.region.brs'
    },
    entire_language: {
      patterns: [
        {include: '#regex'},
        {include: '#bsdoc'},
        {include: '#if_with_paren'},
        {include: '#component_statement'},
        {include: '#apostrophe_comment'},
        {include: '#template_string'},
        {include: '#rem_comment'},
        {include: '#import_statement'},
        {include: '#alias_statement'},
        {include: '#namespace_declaration'},
        {include: '#enum_declaration'},
        {include: '#end_namespace'},
        {include: '#method'},
        {include: '#field'},
        {include: '#class_declaration'},
        {include: '#end_class'},
        {include: '#preprocessor_keywords'},
        {include: '#region_comment'},
        {include: '#end_region_comment'},
        {include: '#global_constants'},
        {include: '#keyword_logical_operator'},
        {include: '#function_call'},
        {include: '#numeric_literal'},
        {include: '#object_properties'},
        {include: '#vscode_rale_tracker_entry_comment'},
        {include: '#identifiers_with_type_designators'},
        {include: '#m_and_global'},
        {include: '#keyword_return'},
        {include: '#primitive_literal_expression'},
        {include: '#function_declaration'},
        {include: '#inline_function_declaration'},
        {include: '#end_function'},
        {include: '#interface_declaration'},
        {include: '#storage_types'},
        {include: '#loop_keywords'},
        {include: '#program_statements'},
        {include: '#try_catch'},
        {include: '#non_identifier_keywords'},
        {include: '#operators'},
        {include: '#variables_and_params'},
        {include: '#annotation'}
      ]
    },
    enum_declaration: {
      begin: '(?i)\\b(enum)[ \\t]+([a-zA-Z0-9_]+)\\b',
      beginCaptures: {
        1: {name: 'storage.type.enum.brs'},
        2: {name: 'entity.name.type.enum.brs'}
      },
      end: '(?i)[ \\t]*(end[ \\t]*enum)',
      endCaptures: {1: {name: 'storage.type.enum.brs'}},
      name: 'meta.enum.declaration.brs',
      patterns: [
        {include: '#comment'},
        {include: '#annotation'},
        {include: '#enum_field'}
      ]
    },
    enum_field: {
      begin: '(?i)\\s*\\b([a-z0-9_]+)(?:[ \\t]*(=))?',
      beginCaptures: {
        1: {name: 'variable.object.enummember.brs'},
        2: {name: 'keyword.operator.assignment.brs'}
      },
      end: '\r?\n',
      patterns: [
        {include: '#primitive_literal_expression'},
        {include: '#comment'},
        {include: '#annotation'}
      ]
    },
    field: {
      captures: {
        1: {name: 'storage.modifier.brs'},
        2: {name: 'variable.object.property.brs'}
      },
      match: '(?i:(public|protected|private)\\s+([a-z0-9_]+))'
    },
    function_call: {
      captures: {1: {name: 'entity.name.function.brs'}},
      match: '(?i:\\b([a-z_][a-z0-9_]*)[ \\t]*(?=\\())'
    },
    function_declaration: {
      captures: {
        1: {name: 'storage.modifier.brs'},
        2: {name: 'storage.modifier.brs'},
        3: {name: 'keyword.declaration.function.brs'},
        4: {name: 'entity.name.function.brs'}
      },
      match:
        '(?i:(?:(public|protected|private)\\s+)?(?:(override)\\s+)?((?:sub|function))(?:\\s+(?:\\(|([a-z_][a-z0-9_]*))))'
    },
    global_constants: {
      match: '(?i:\\b(line_num)\\b)',
      name: 'variable.language'
    },
    identifiers_with_type_designators: {
      match: '(?i:\\b([a-z_][a-z0-9_]*)[\\$%!#&])',
      name: 'entity.name.variable.local.brs'
    },
    if_with_paren: {
      begin: '(?i:(?<!\\.)(if)\\s*\\()',
      beginCaptures: {1: {name: 'keyword.control.brs'}},
      end: '\b(then)|\n',
      endCaptures: {1: {name: 'keyword.control.brs'}},
      patterns: [{include: '#entire_language'}]
    },
    import_statement: {
      captures: {
        1: {name: 'keyword.control.import.brs'},
        2: {name: 'string.quoted.double.brs'}
      },
      match: '(?i:(import)\\s*(".*"))'
    },
    inline_function_declaration: {
      captures: {
        1: {name: 'keyword.declaration.function.brs'},
        2: {name: 'keyword.declaration.function.brs'}
      },
      match: '(?i)[^a-z0-9_"](function|sub)\\s*\\('
    },
    interface_declaration: {
      begin: '(?i)\\b[\\s\\t]*(interface)[\\s\\t]+([a-zA-Z0-9_]+)\\b',
      beginCaptures: {
        1: {name: 'storage.type.interface.brs'},
        2: {name: 'entity.name.type.interface.brs'}
      },
      end: '(?i)[\\s\\t]*(end[\\s\\t]*interface)',
      endCaptures: {1: {name: 'storage.type.interface.brs'}},
      name: 'meta.interface.brs',
      patterns: [
        {include: '#comment'},
        {include: '#annotation'},
        {include: '#interface_function'},
        {include: '#interface_field'}
      ]
    },
    interface_field: {
      begin: '(?i)\\s*\\b([a-z0-9_]+)(?:[\\s\\t]*(as))?',
      beginCaptures: {
        1: {name: 'variable.object.property.brs'},
        2: {name: 'keyword.control.as.brs'}
      },
      end: '\r?\n',
      patterns: [{include: '#type_expression'}, {include: '#comment'}]
    },
    interface_function: {
      patterns: [
        {include: '#interface_function_with_return_type'},
        {include: '#interface_function_plain'}
      ]
    },
    interface_function_plain: {
      captures: {
        1: {name: 'storage.type.function.brs'},
        2: {name: 'entity.name.function.member.brs'},
        3: {name: 'punctuation.definition.parameters.begin.brs'},
        4: {name: 'punctuation.definition.parameters.end.brs'},
        5: {name: 'keyword.control.as.brs'}
      },
      match: '(?i:\\s*\\b(function|sub)[\\s\\t]+([a-z0-9_]+)(\\())(\\))[\\s\\t]'
    },
    interface_function_with_return_type: {
      begin:
        '(?i:\\s*\\b(function|sub)[\\s\\t]+([a-z0-9_]+)(\\()).*?(\\))[\\s\\t]+(as)',
      beginCaptures: {
        1: {name: 'storage.type.function.brs'},
        2: {name: 'entity.name.function.member.brs'},
        3: {name: 'punctuation.definition.parameters.begin.brs'},
        4: {name: 'punctuation.definition.parameters.end.brs'},
        5: {name: 'keyword.control.as.brs'}
      },
      end: '\r?\n',
      patterns: [{include: '#type_expression'}, {include: '#comment'}]
    },
    keyword_logical_operator: {
      match: '(?i:\\b(and|or|not)\\b)',
      name: 'keyword.operator.logical.word'
    },
    keyword_return: {
      captures: {1: {name: 'keyword.control.flow.return.brs'}},
      match: '(?i:\\b(return)\\b)'
    },
    loop_keywords: {
      match: '(?i:(?<!\\.)(continue\\s+(for|while)\\b))',
      name: 'keyword.control.loop.brs'
    },
    m_and_global: {
      captures: {
        1: {name: 'keyword.other.this.brs'},
        2: {name: 'keyword.other.this.brs'}
      },
      match: '(?i:(?<!\\.)\\b(m|super)\\b(?:\\s*\\.\\s*(top|global)\\b)?)'
    },
    method: {
      captures: {
        1: {name: 'storage.modifier.brs'},
        2: {name: 'storage.modifier.brs'},
        3: {name: 'keyword.declaration.function.brs'},
        4: {name: 'entity.name.function.brs'}
      },
      match:
        '(?i:(?:(public|protected|private)\\s+)?(?:(override)\\s+)?((?:sub|function))(?:\\s+(?:\\(|([a-z_][a-z0-9_]*))))'
    },
    namespace_declaration: {
      begin: '(?i:(namespace))\\s+',
      beginCaptures: {1: {name: 'keyword.other.namespace.brs'}},
      end: "[\\s'\\n]",
      patterns: [
        {match: '(?i:([a-z0-9_]+))', name: 'entity.name.type.namespace.brs'},
        {match: '\\.', name: 'punctuation.accessor.brs'}
      ]
    },
    non_identifier_keywords: {
      captures: {1: {name: 'keyword.control.brs'}},
      match:
        '(?i:[^\\.\\w\\"](then|stop|run|end|each|next|throw)(?!(\\s*:)|[\\d\\w_]))'
    },
    numeric_literal: {
      patterns: [
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
          name: 'constant.numeric.brs'
        }
      ]
    },
    object_properties: {
      captures: {1: {name: 'variable.other.object.property.brs'}},
      match: '(?i:(?<=\\.)([a-z0-9_][a-z0-9_\\$%!#&]*))'
    },
    operators: {
      match: '=|>=|<zz|>|<|<>|\\+|-|\\*|\\/|\\^|&|\\b(?i:(And|Not|Or|Mod))\\b',
      name: 'keyword.operator.brs'
    },
    preprocessor_keywords: {
      patterns: [
        {match: '(?i:(#[ \t]*const))', name: 'keyword.preprocessor.const.brs'},
        {match: '(?i:(#[ \t]*if))', name: 'keyword.preprocessor.if.brs'},
        {
          match: '(?i:(#[ \t]*else[ \t]*if))',
          name: 'keyword.preprocessor.elseif.brs'
        },
        {
          match: '(?i:(#[ \t]*end[ \t]*if))',
          name: 'keyword.preprocessor.endif.brs'
        },
        {match: '(?i:(#[ \t]*else))', name: 'keyword.preprocessor.else.brs'},
        {match: '(?i:(#[ \t]*error))', name: 'keyword.preprocessor.error.brs'}
      ]
    },
    primitive_literal_expression: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.brs',
          patterns: [
            {match: '""', name: 'constant.character.escape.brs'},
            {include: '#class_roku_builtin'}
          ]
        },
        {include: '#numeric_literal'},
        {
          patterns: [
            {
              match: '(?i)\\b(true)\\b',
              name: 'constant.language.boolean.true.brs'
            },
            {
              match: '(?i)\\b(false)\\b',
              name: 'constant.language.boolean.false.brs'
            }
          ]
        },
        {
          captures: {1: {name: 'constant.language.null.brs'}},
          match: '(?i:\\b(invalid)\\b)'
        }
      ]
    },
    program_statements: {
      match:
        '(?i:(?<!\\.)(if|else\\s*if|else|print|library|while|for\\s+each|for|end\\s*for|exit\\s+for|end\\s*while|exit\\s*while|end\\s*if|to|step|in|goto|rem|as)\\b)',
      name: 'keyword.control.brs'
    },
    regex: {
      patterns: [
        {
          begin:
            '(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([gmixsuXUAJ]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.brs'}},
          end: '(/)([gmixsuXUAJ]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.brs'},
            2: {name: 'keyword.other.brs'}
          },
          name: 'string.regexp.brs',
          patterns: [{include: '#regexp'}]
        },
        {
          begin:
            '((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([gmixsuXUAJ]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.brs'}},
          end: '(/)([gmixsuXUAJ]*)',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.brs'},
            2: {name: 'keyword.other.brs'}
          },
          name: 'string.regexp.brs',
          patterns: [{include: '#regexp'}]
        }
      ]
    },
    'regex-character-class': {
      patterns: [
        {
          match: '\\\\[wWsSdDtrnvf]|\\.',
          name: 'constant.other.character-class.regexp'
        },
        {
          match: '\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})',
          name: 'constant.character.numeric.regexp'
        },
        {match: '\\\\c[A-Z]', name: 'constant.character.control.regexp'},
        {match: '\\\\.', name: 'constant.character.escape.backslash.regexp'}
      ]
    },
    regexp: {
      patterns: [
        {match: '\\\\[bB]|\\^|\\$', name: 'keyword.control.anchor.regexp'},
        {
          captures: {
            0: {name: 'keyword.other.back-reference.regexp'},
            1: {name: 'variable.other.regexp'}
          },
          match: '\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>'
        },
        {
          match: '[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??',
          name: 'keyword.operator.quantifier.regexp'
        },
        {match: '\\|', name: 'keyword.operator.or.regexp'},
        {
          begin: '(\\()((\\?=)|(\\?!)|(\\?\\|)|(\\?<=)|(\\?<!))',
          beginCaptures: {
            1: {name: 'punctuation.definition.group.regexp'},
            2: {name: 'punctuation.definition.group.assertion.regexp'},
            3: {name: 'meta.assertion.look-ahead.regexp'},
            4: {name: 'meta.assertion.negative-look-ahead.regexp'},
            5: {name: 'meta.assertion.look-behind.regexp'},
            6: {name: 'meta.assertion.negative-look-behind.regexp'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.assertion.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '\\((?:(\\?[:>])|(?:\\?<([a-zA-Z_$][\\w$]*)>))?',
          beginCaptures: {
            0: {name: 'punctuation.definition.group.regexp'},
            1: {name: 'punctuation.definition.group.no-capture.regexp'},
            2: {name: 'variable.other.regexp'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.definition.group.regexp'}},
          name: 'meta.group.regexp',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '(\\[)(\\^)?',
          beginCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'},
            2: {name: 'keyword.operator.negation.regexp'}
          },
          end: '(\\])',
          endCaptures: {
            1: {name: 'punctuation.definition.character-class.regexp'}
          },
          name: 'constant.other.character-class.set.regexp',
          patterns: [
            {
              captures: {
                1: {name: 'constant.character.numeric.regexp'},
                2: {name: 'constant.character.control.regexp'},
                3: {name: 'constant.character.escape.backslash.regexp'},
                4: {name: 'constant.character.numeric.regexp'},
                5: {name: 'constant.character.control.regexp'},
                6: {name: 'constant.character.escape.backslash.regexp'}
              },
              match:
                '(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))',
              name: 'constant.other.character-class.range.regexp'
            },
            {include: '#regex-character-class'}
          ]
        },
        {include: '#regex-character-class'}
      ]
    },
    region_comment: {
      captures: {
        1: {name: 'keyword.preprocessor.region.brs'},
        2: {name: 'string.unquoted.preprocessor.message.brs'}
      },
      match: "(?i:^\\s*('\\s*#region)(?:(\\s+.*)?))$"
    },
    rem_comment: {
      captures: {1: {name: 'punctuation.definition.comment.brs'}},
      match: '^\\s*?(?i:rem\\s.*)$',
      name: 'comment.line.rem.brs'
    },
    storage_types: {
      captures: {1: {name: 'storage.type.brs'}},
      match:
        '(?i:\\b(boolean|integer|longinteger|float|double|string|object|function|sub|interface|dynamic|brsub|dim|const)\\b)'
    },
    template_string: {
      begin: '(`)',
      beginCaptures: {1: {name: 'string.template.brs'}},
      end: '(`)',
      endCaptures: {1: {name: 'string.template.brs'}},
      patterns: [
        {
          begin: '(\\$\\{)',
          beginCaptures: {
            1: {name: 'punctuation.definition.template-expression.begin.brs'}
          },
          end: '(\\})',
          endCaptures: {
            1: {name: 'punctuation.definition.template-expression.end'}
          },
          patterns: [{include: '#entire_language'}]
        },
        {match: '(.)', name: 'string.template.brs'}
      ]
    },
    try_catch: {
      match: '(?i:\\b(try|catch|(end[ \\t]*try))\\b)',
      name: 'keyword.control.trycatch.brs'
    },
    type_expression: {
      patterns: [
        {
          captures: {1: {name: 'storage.type.brs'}},
          match: '(?i)(boolean|integer|longinteger|float|double|string)'
        },
        {
          captures: {1: {name: 'support.type.brs entity.name.type.brs'}},
          match: '(?i)\\b([a-z0-9_]+)'
        }
      ]
    },
    variables_and_params: {
      captures: {
        1: {name: 'keyword.operator.new.brs'},
        2: {name: 'entity.name.variable.local.brs'}
      },
      match: '(?i:(?:\\b(new)\\s)?\\b(?<!\\.)([a-z_][a-z0-9_\\$%!#]*)\\b)'
    },
    vscode_rale_tracker_entry_comment: {
      match: "('\\s*vscode_rale_tracker_entry[^\\S\\r\\n]*)",
      name: 'keyword.preprocessor.brs'
    }
  },
  scopeName: 'source.brs'
}

export default grammar
