// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      match:
        '\\bNS(?:AnyType|CompositingOperationHighlight|DoubleType|FloatType|IntType|Positive(?:DoubleType|FloatType|IntType))\\b',
      name: 'invalid.deprecated.10.0.support.constant.cocoa.objc'
    },
    {
      match: '\\bNS(?:CompositeHighlight|SmallIconButtonBezelStyle)\\b',
      name: 'invalid.deprecated.10.0.support.variable.cocoa.objc'
    },
    {
      match: '\\bNS(?:CalendarDate|Form|GarbageCollector)\\b',
      name: 'invalid.deprecated.10.10.support.class.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:Alert(?:AlternateReturn|DefaultReturn|ErrorReturn|OtherReturn)|Ca(?:lendarCalendarUnit|ncelButton)|D(?:ayCalendarUnit|ragOperationAll(?:_Obsolete)?)|EraCalendarUnit|H(?:PUXOperatingSystem|ourCalendarUnit)|M(?:ACHOperatingSystem|inuteCalendarUnit|onthCalendarUnit)|O(?:KButton|SF1OperatingSystem)|PopoverAppearance(?:HUD|Minimal)|QuarterCalendarUnit|Run(?:AbortedResponse|ContinuesResponse|StoppedResponse)|S(?:cale(?:None|Proportionally|ToFit)|econdCalendarUnit|olarisOperatingSystem|unOSOperatingSystem)|TimeZoneCalendarUnit|UndefinedDateComponent|W(?:eek(?:CalendarUnit|Of(?:MonthCalendarUnit|YearCalendarUnit)|day(?:CalendarUnit|OrdinalCalendarUnit))|indows(?:95OperatingSystem|NTOperatingSystem)|rapCalendarComponents)|Year(?:CalendarUnit|ForWeekOfYearCalendarUnit))\\b',
      name: 'invalid.deprecated.10.10.support.constant.cocoa.objc'
    },
    {
      match: '\\bNSPopoverAppearance\\b',
      name: 'invalid.deprecated.10.10.support.type.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:A(?:ccessibilityMatte(?:ContentUIElementAttribute|HoleAttribute)|ppearanceNameLightContent)|BuddhistCalendar|ChineseCalendar|GregorianCalendar|HebrewCalendar|I(?:SO8601Calendar|ndianCalendar|slamicC(?:alendar|ivilCalendar))|JapaneseCalendar|PersianCalendar|RepublicOfChinaCalendar)\\b',
      name: 'invalid.deprecated.10.10.support.variable.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:Glyph(?:Attribute(?:BidiLevel|Elastic|Inscribe|Soft)|Inscribe(?:Above|B(?:ase|elow)|Over(?:Below|strike)))|StringDrawing(?:DisableScreenFontSubstitution|OneShot)|TextWritingDirection(?:Embedding|Override)|WorkspaceLaunch(?:AllowingClassicStartup|PreferringClassic))\\b',
      name: 'invalid.deprecated.10.11.support.constant.cocoa.objc'
    },
    {
      match: '\\bNSConfinementConcurrencyType\\b',
      name: 'invalid.deprecated.10.11.support.constant.objc'
    },
    {
      match: '\\bNS(?:GlyphInscription|WorkspaceFileOperationName)\\b',
      name: 'invalid.deprecated.10.11.support.type.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:AccessibilityException|CharacterShapeAttributeName|U(?:nderlineByWordMask|sesScreenFontsDocumentAttribute)|Workspace(?:Co(?:mpressOperation|pyOperation)|D(?:e(?:c(?:ompressOperation|ryptOperation)|stroyOperation)|idPerformFileOperationNotification|uplicateOperation)|EncryptOperation|LinkOperation|MoveOperation|RecycleOperation))\\b',
      name: 'invalid.deprecated.10.11.support.variable.cocoa.objc'
    },
    {
      match:
        '\\bPDFAnnotation(?:ButtonWidget|C(?:hoiceWidget|ircle)|FreeText|Ink|Lin(?:e|k)|Markup|Popup|S(?:quare|tamp)|Text(?:Widget)?)\\b',
      name: 'invalid.deprecated.10.12.support.class.objc'
    },
    {
      match: '\\bNSOpenGLPFAStereo\\b',
      name: 'invalid.deprecated.10.12.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNSPersistentStoreUbiquitousTransitionType(?:Account(?:Added|Removed)|ContentRemoved|InitialImportCompleted)\\b',
      name: 'invalid.deprecated.10.12.support.constant.objc'
    },
    {
      match: '\\bNSGradientType\\b',
      name: 'invalid.deprecated.10.12.support.type.cocoa.objc'
    },
    {
      match: '\\bNSPersistentStoreUbiquitousTransitionType\\b',
      name: 'invalid.deprecated.10.12.support.type.objc'
    },
    {
      match:
        '\\bNS(?:A(?:WTEventType|l(?:phaShiftKeyMask|ternateKeyMask)|nyEventMask|pp(?:KitDefined(?:Mask)?|lication(?:ActivatedEventType|De(?:activatedEventType|fined(?:Mask)?))))|BorderlessWindowMask|C(?:enterTextAlignment|ircularSlider|losableWindowMask|o(?:m(?:mandKeyMask|posite(?:C(?:lear|o(?:lor(?:Burn|Dodge)?|py))|D(?:arken|estination(?:Atop|In|O(?:ut|ver))|ifference)|Exclusion|H(?:ardLight|ue)|L(?:ighten|uminosity)|Multiply|Overlay|Plus(?:Darker|Lighter)|S(?:aturation|creen|o(?:ftLight|urce(?:Atop|In|O(?:ut|ver))))|XOR))|ntrolKeyMask)|riticalAlertStyle|ursor(?:PointingDevice|Update(?:Mask)?))|D(?:eviceIndependentModifierFlagsMask|ocModalWindowMask)|EraserPointingDevice|F(?:lagsChanged(?:Mask)?|u(?:llS(?:creenWindowMask|izeContentViewWindowMask)|nctionKeyMask))|H(?:UDWindowMask|elpKeyMask)|InformationalAlertStyle|JustifiedTextAlignment|Key(?:Down(?:Mask)?|Up(?:Mask)?)|L(?:eft(?:Mouse(?:D(?:own(?:Mask)?|ragged(?:Mask)?)|Up(?:Mask)?)|TextAlignment)|inearSlider)|M(?:ini(?:ControlSize|aturizableWindowMask)|ouse(?:E(?:ntered(?:Mask)?|ventSubtype|xited(?:Mask)?)|Moved(?:Mask)?))|N(?:aturalTextAlignment|onactivatingPanelMask|umericPadKeyMask)|OtherMouse(?:D(?:own(?:Mask)?|ragged(?:Mask)?)|Up(?:Mask)?)|P(?:e(?:n(?:LowerSideMask|PointingDevice|TipMask|UpperSideMask)|riodic(?:Mask)?)|owerOffEventType)|R(?:e(?:gularControlSize|sizableWindowMask)|ight(?:Mouse(?:D(?:own(?:Mask)?|ragged(?:Mask)?)|Up(?:Mask)?)|TextAlignment))|S(?:cr(?:eenChangedEventType|ollWheel(?:Mask)?)|hiftKeyMask|mallControlSize|ystemDefined(?:Mask)?)|T(?:abletP(?:oint(?:EventSubtype|Mask)?|roximity(?:EventSubtype|Mask)?)|exturedBackgroundWindowMask|hick(?:SquareBezelStyle|erSquareBezelStyle)|i(?:ckMark(?:Above|Below|Left|Right)|tledWindowMask)|ouchEventSubtype)|U(?:n(?:ifiedTitleAndToolbarWindowMask|knownPointingDevice)|tilityWindowMask)|W(?:arningAlertStyle|indow(?:ExposedEventType|FullScreenButton|MovedEventType)))\\b',
      name: 'invalid.deprecated.10.12.support.variable.cocoa.objc'
    },
    {
      match:
        '\\bNSPersistentStore(?:DidImportUbiquitousContentChangesNotification|Re(?:buildFromUbiquitousContentOption|moveUbiquitousMetadataOption)|Ubiquitous(?:Cont(?:ainerIdentifierKey|ent(?:NameKey|URLKey))|PeerTokenOption|TransitionTypeKey))\\b',
      name: 'invalid.deprecated.10.12.support.variable.objc'
    },
    {
      match:
        '\\bNS(?:Archiver|Connection|D(?:istantObject(?:Request)?|rawer)|M(?:achBootstrapServer|essagePortNameServer)|Port(?:Coder|NameServer)|SocketPortNameServer|Unarchiver)\\b',
      name: 'invalid.deprecated.10.13.support.class.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:BackingStore(?:Nonretained|Retained)|Drawer(?:Clos(?:edState|ingState)|Open(?:State|ingState))|FileHandlingPanel(?:CancelButton|OKButton)|NativeShortGlyphPacking)\\b',
      name: 'invalid.deprecated.10.13.support.constant.cocoa.objc'
    },
    {
      match: '\\bNSMultibyteGlyphPacking\\b',
      name: 'invalid.deprecated.10.13.support.type.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:Connection(?:Did(?:DieNotification|InitializeNotification)|ReplyMode)|D(?:ockWindowLevel|ra(?:gPboard|wer(?:Did(?:CloseNotification|OpenNotification)|Will(?:CloseNotification|OpenNotification))))|F(?:ailedAuthenticationException|indPboard|ontPboard)|GeneralPboard|RulerPboard)\\b',
      name: 'invalid.deprecated.10.13.support.variable.cocoa.objc'
    },
    {
      match:
        '\\b(?:NS(?:BinaryExternalRecordType|E(?:ntityNameInPathKey|xternalRecord(?:ExtensionOption|s(?:DirectoryOption|FileFormatOption)))|ModelPathKey|ObjectURIKey|Store(?:PathKey|UUIDInPathKey)|XMLExternalRecordType)|kPDFAnnotationKey_(?:A(?:ction|dditionalActions|ppearance(?:Dictionary|State))|Border(?:Style)?|Co(?:lor|ntents)|D(?:ate|e(?:faultAppearance|stination))|Flags|HighlightingMode|I(?:conName|n(?:klist|teriorColor))|Line(?:EndingStyles|Points)|Name|Open|P(?:a(?:ge|rent)|opup)|Quad(?:Points|ding)|Rect|Subtype|TextLabel|Widget(?:AppearanceDictionary|DefaultValue|Field(?:Flags|Type)|MaxLen|Options|TextLabelUI|Value)))\\b',
      name: 'invalid.deprecated.10.13.support.variable.objc'
    },
    {
      match:
        '\\b(?:DOM(?:A(?:bstractView|ttr)|Blob|C(?:DATASection|SS(?:CharsetRule|FontFaceRule|ImportRule|MediaRule|P(?:ageRule|rimitiveValue)|Rule(?:List)?|Style(?:Declaration|Rule|Sheet)|UnknownRule|Value(?:List)?)|haracterData|o(?:mment|unter))|Document(?:Fragment|Type)?|E(?:lement|ntity(?:Reference)?|vent)|File(?:List)?|HTML(?:A(?:nchorElement|ppletElement|reaElement)|B(?:RElement|ase(?:Element|FontElement)|odyElement|uttonElement)|Collection|D(?:ListElement|i(?:rectoryElement|vElement)|ocument)|E(?:lement|mbedElement)|F(?:ieldSetElement|o(?:ntElement|rmElement)|rame(?:Element|SetElement))|H(?:RElement|ead(?:Element|ingElement)|tmlElement)|I(?:FrameElement|mageElement|nputElement)|L(?:IElement|abelElement|egendElement|inkElement)|M(?:a(?:pElement|rqueeElement)|e(?:nuElement|taElement)|odElement)|O(?:ListElement|bjectElement|pt(?:GroupElement|ion(?:Element|sCollection)))|P(?:ara(?:graphElement|mElement)|reElement)|QuoteElement|S(?:criptElement|electElement|tyleElement)|T(?:able(?:C(?:aptionElement|ellElement|olElement)|Element|RowElement|SectionElement)|extAreaElement|itleElement)|UListElement)|Implementation|KeyboardEvent|M(?:ediaList|ouseEvent|utationEvent)|N(?:amedNodeMap|ode(?:Iterator|List)?)|O(?:bject|verflowEvent)|Pro(?:cessingInstruction|gressEvent)|R(?:GBColor|ange|ect)|StyleSheet(?:List)?|T(?:ext|reeWalker)|UIEvent|WheelEvent|XPath(?:Expression|Result))|NSOpenGL(?:Context|Layer|PixelFormat|View)|Web(?:Archive|BackForwardList|D(?:ataSource|ownload)|Frame(?:View)?|History(?:Item)?|Preferences|ScriptObject|Undefined|View))\\b',
      name: 'invalid.deprecated.10.14.support.class.cocoa.objc'
    },
    {
      match: '\\b(?:CAOpenGLLayer|IKImageBrowserView|QCCompositionLayer)\\b',
      name: 'invalid.deprecated.10.14.support.class.objc'
    },
    {
      match:
        '\\b(?:DOM_(?:A(?:DDITION|LLOW_KEYBOARD_INPUT|NY_(?:TYPE|UNORDERED_NODE_TYPE)|T(?:TRIBUTE_NODE|_TARGET))|B(?:AD_BOUNDARYPOINTS_ERR|O(?:OLEAN_TYPE|TH)|UBBLING_PHASE)|C(?:APTURING_PHASE|DATA_SECTION_NODE|HARSET_RULE|OMMENT_NODE|SS_(?:ATTR|C(?:M|OUNTER|USTOM)|D(?:EG|IMENSION)|E(?:MS|XS)|GRAD|HZ|I(?:DENT|N(?:HERIT)?)|KHZ|M(?:M|S)|NUMBER|P(?:C|ERCENTAGE|RIMITIVE_VALUE|T|X)|R(?:AD|ECT|GBCOLOR)|S(?:TRING)?|U(?:NKNOWN|RI)|V(?:ALUE_LIST|H|M(?:AX|IN)|W)))|DO(?:CUMENT_(?:FRAGMENT_NODE|NODE|POSITION_(?:CONTAIN(?:ED_BY|S)|DISCONNECTED|FOLLOWING|IMPLEMENTATION_SPECIFIC|PRECEDING)|TYPE_NODE)|M(?:STRING_SIZE_ERR|_DELTA_(?:LINE|P(?:AGE|IXEL))))|E(?:LEMENT_NODE|N(?:D_TO_(?:END|START)|TITY_(?:NODE|REFERENCE_NODE)))|F(?:I(?:LTER_(?:ACCEPT|REJECT|SKIP)|RST_ORDERED_NODE_TYPE)|ONT_FACE_RULE)|H(?:IERARCHY_REQUEST_ERR|ORIZONTAL)|I(?:MPORT_RULE|N(?:DEX_SIZE_ERR|USE_ATTRIBUTE_ERR|VALID_(?:ACCESS_ERR|CHARACTER_ERR|EXPRESSION_ERR|MODIFICATION_ERR|NODE_TYPE_ERR|STATE_ERR)))|KEY(?:FRAME(?:S_RULE|_RULE)|_LOCATION_(?:LEFT|NUMPAD|RIGHT|STANDARD))|M(?:EDIA_RULE|ODIFICATION)|N(?:AMESPACE_(?:ERR|RULE)|O(?:DE_(?:AFTER|BEFORE(?:_AND_AFTER)?|INSIDE)|NE|T(?:ATION_NODE|_(?:FOUND_ERR|SUPPORTED_ERR))|_(?:DATA_ALLOWED_ERR|MODIFICATION_ALLOWED_ERR))|UMBER_TYPE)|ORDERED_NODE_(?:ITERATOR_TYPE|SNAPSHOT_TYPE)|P(?:AGE_RULE|ROCESSING_INSTRUCTION_NODE)|REMOVAL|S(?:HOW_(?:A(?:LL|TTRIBUTE)|C(?:DATA_SECTION|OMMENT)|DOCUMENT(?:_(?:FRAGMENT|TYPE))?|E(?:LEMENT|NTITY(?:_REFERENCE)?)|NOTATION|PROCESSING_INSTRUCTION|TEXT)|T(?:ART_TO_(?:END|START)|RING_TYPE|YLE_RULE)|UPPORTS_RULE|YNTAX_ERR)|T(?:EXT_NODE|YPE_ERR)|UN(?:KNOWN_RULE|ORDERED_NODE_(?:ITERATOR_TYPE|SNAPSHOT_TYPE)|SPECIFIED_EVENT_TYPE_ERR)|VERTICAL|W(?:EBKIT_(?:KEYFRAME(?:S_RULE|_RULE)|REGION_RULE)|RONG_DOCUMENT_ERR))|NS(?:LandscapeOrientation|O(?:nlyScrollerArrows|penGL(?:ContextParameter(?:CurrentRendererID|GPU(?:FragmentProcessing|VertexProcessing)|HasDrawable|MPSwapsInFlight|R(?:asterizationEnable|eclaimResources)|S(?:tateValidation|urface(?:BackingSize|O(?:pacity|rder)|SurfaceVolatile)|wap(?:Interval|Rectangle(?:Enable)?)))|GO(?:ClearFormatCache|FormatCacheSize|RetainRenderers|UseBuildCache)|P(?:FA(?:A(?:cc(?:elerated(?:Compute)?|umSize)|l(?:l(?:Renderers|owOfflineRenderers)|phaSize)|ux(?:Buffers|DepthStencil))|BackingStore|C(?:losestPolicy|olor(?:Float|Size))|D(?:epthSize|oubleBuffer)|M(?:aximumPolicy|inimumPolicy|ultisample)|NoRecovery|OpenGLProfile|RendererID|S(?:ample(?:Alpha|Buffers|s)|creenMask|tencilSize|upersample)|TripleBuffer|VirtualScreenCount)|rofileVersion(?:3_2Core|4_1Core|Legacy))))|PortraitOrientation|Scroller(?:DecrementLine|IncrementLine))|Web(?:CacheModel(?:Document(?:Browser|Viewer)|PrimaryWebBrowser)|Drag(?:DestinationAction(?:Any|DHTML|Edit|Load|None)|SourceAction(?:Any|DHTML|Image|Link|None|Selection))|KitError(?:BlockedPlugInVersion|Cannot(?:FindPlugIn|LoadPlugIn|Show(?:MIMEType|URL))|FrameLoadInterruptedByPolicyChange|JavaUnavailable)|MenuItem(?:PDF(?:A(?:ctualSize|utoSize)|Continuous|FacingPages|NextPage|PreviousPage|SinglePage|Zoom(?:In|Out))|Tag(?:C(?:opy(?:ImageToClipboard|LinkToClipboard)?|ut)|Download(?:ImageToDisk|LinkToDisk)|Go(?:Back|Forward)|IgnoreSpelling|L(?:earnSpelling|ookUpInDictionary)|NoGuessesFound|O(?:pen(?:FrameInNewWindow|ImageInNewWindow|LinkInNewWindow|WithDefaultApplication)|ther)|Paste|Reload|S(?:earch(?:InSpotlight|Web)|pellingGuess|top)))|NavigationType(?:BackForward|Form(?:Resubmitted|Submitted)|LinkClicked|Other|Reload)|ViewInsertAction(?:Dropped|Pasted|Typed)))\\b',
      name: 'invalid.deprecated.10.14.support.constant.cocoa.objc'
    },
    {
      match:
        '\\b(?:DOM(?:E(?:ventExceptionCode|xceptionCode)|RangeExceptionCode|XPathExceptionCode)|NS(?:CellStateValue|OpenGL(?:ContextParameter|GlobalOption|PixelFormatAttribute)|Pr(?:intingOrientation|ogressIndicatorThickness)|Scroll(?:ArrowPosition|erArrow)|WindowBackingLocation)|Web(?:CacheModel|Drag(?:DestinationAction|SourceAction)|NavigationType|ViewInsertAction))\\b',
      name: 'invalid.deprecated.10.14.support.type.cocoa.objc'
    },
    {
      match: '\\bQLPreviewItemLoadingBlock\\b',
      name: 'invalid.deprecated.10.14.support.type.objc'
    },
    {
      match:
        '\\b(?:DOM(?:E(?:ventException|xception)|RangeException|XPathException)|NS(?:16Bit(?:BigEndianBitmapFormat|LittleEndianBitmapFormat)|32Bit(?:BigEndianBitmapFormat|LittleEndianBitmapFormat)|A(?:cceleratorButton|lpha(?:FirstBitmapFormat|NonpremultipliedBitmapFormat))|BMPFileType|C(?:MYK(?:ColorSpaceModel|ModeColorPanel)|ircularBezelStyle|o(?:lor(?:ListModeColorPanel|PboardType)|ntinuousCapacityLevelIndicatorStyle)|rayonModeColorPanel|ustomPaletteModeColorPanel)|D(?:e(?:faultTokenStyle|viceNColorSpaceModel)|isc(?:losureBezelStyle|reteCapacityLevelIndicatorStyle))|F(?:ile(?:namesPboardType|sPromisePboardType)|loatingPointSamplesBitmapFormat|ontPboardType)|G(?:IFFileType|ray(?:ColorSpaceModel|ModeColorPanel))|H(?:SBModeColorPanel|TMLPboardType|elpButtonBezelStyle)|In(?:dexedColorSpaceModel|kTextPboardType|lineBezelStyle)|JPEG(?:2000FileType|FileType)|KeyedUnarchiveFromDataTransformerName|LABColorSpaceModel|M(?:ixedState|omentary(?:ChangeButton|LightButton|PushInButton)|ulti(?:LevelAcceleratorButton|pleTextSelectionPboardType))|NoModeColorPanel|O(?:ffState|n(?:OffButton|State)|penGLCP(?:CurrentRendererID|GPU(?:FragmentProcessing|VertexProcessing)|HasDrawable|MPSwapsInFlight|R(?:asterizationEnable|eclaimResources)|S(?:tateValidation|urface(?:BackingSize|O(?:pacity|rder)|SurfaceVolatile)|wap(?:Interval|Rectangle(?:Enable)?))))|P(?:DFPboardType|NGFileType|a(?:steboardTypeFindPanelSearchOptions|tternColorSpaceModel)|lainTextTokenStyle|ostScriptPboardType|rogressIndicator(?:BarStyle|SpinningStyle)|ushOnPushOffButton)|R(?:GB(?:ColorSpaceModel|ModeColorPanel)|TF(?:DPboardType|PboardType)|a(?:dioButton|tingLevelIndicatorStyle)|e(?:cessedBezelStyle|gularSquareBezelStyle|levancyLevelIndicatorStyle)|ound(?:RectBezelStyle|ed(?:BezelStyle|DisclosureBezelStyle|TokenStyle))|ulerPboardType)|S(?:ha(?:dowlessSquareBezelStyle|ringServiceName(?:Post(?:ImageOnFlickr|On(?:Facebook|LinkedIn|SinaWeibo|T(?:encentWeibo|witter))|VideoOn(?:Tudou|Vimeo|Youku))|UseAs(?:FacebookProfileImage|LinkedInProfileImage|TwitterProfileImage)))|mallSquareBezelStyle|tringPboardType|witchButton)|T(?:IFF(?:FileType|PboardType)|abularTextPboardType|extured(?:RoundedBezelStyle|SquareBezelStyle)|oggleButton)|U(?:RLPboardType|n(?:archiveFromDataTransformerName|knownColorSpaceModel))|V(?:CardPboardType|iew(?:GlobalFrameDidChangeNotification|NoInstrinsicMetric))|WheelModeColorPanel)|Web(?:A(?:ction(?:ButtonKey|ElementKey|ModifierFlagsKey|NavigationTypeKey|OriginalURLKey)|rchivePboardType)|Element(?:DOMNodeKey|FrameKey|I(?:mage(?:AltStringKey|Key|RectKey|URLKey)|sSelectedKey)|Link(?:LabelKey|T(?:argetFrameKey|itleKey)|URLKey))|History(?:AllItemsRemovedNotification|Item(?:ChangedNotification|s(?:AddedNotification|Key|RemovedNotification))|LoadedNotification|SavedNotification)|KitError(?:Domain|MIMETypeKey|PlugIn(?:NameKey|PageURLStringKey))|P(?:lugIn(?:AttributesKey|BaseURLKey|Contain(?:erKey|ingElementKey)|ShouldLoadMainResourceKey)|referencesChangedNotification)|ViewProgress(?:EstimateChangedNotification|FinishedNotification|StartedNotification)))\\b',
      name: 'invalid.deprecated.10.14.support.variable.cocoa.objc'
    },
    {
      match:
        '\\b(?:IOSurfacePropertyAllocSizeKey|QCComposition(?:InputRSS(?:ArticleDurationKey|FeedURLKey)|ProtocolRSSVisualizer)|kCIImageTexture(?:Format|Target))\\b',
      name: 'invalid.deprecated.10.14.support.variable.objc'
    },
    {
      match:
        '\\bQC(?:Composition(?:P(?:arameterView|icker(?:Panel|View))|Repository)?|P(?:atchController|lugIn(?:ViewController)?)|Renderer|View)\\b',
      name: 'invalid.deprecated.10.15.support.class.objc'
    },
    {
      match: '\\bNSURLNetworkServiceTypeVoIP\\b',
      name: 'invalid.deprecated.10.15.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bQCPlugIn(?:BufferReleaseCallback|ExecutionMode|T(?:extureReleaseCallback|imeMode))\\b',
      name: 'invalid.deprecated.10.15.support.type.objc'
    },
    {
      match:
        '\\bQC(?:Composition(?:Attribute(?:BuiltInKey|C(?:ategoryKey|opyrightKey)|DescriptionKey|HasConsumersKey|IsTimeDependentKey|NameKey)|Category(?:Distortion|Stylize|Utility)|Input(?:Audio(?:PeakKey|SpectrumKey)|DestinationImageKey|ImageKey|Pr(?:eviewModeKey|imaryColorKey)|S(?:creenImageKey|econdaryColorKey|ourceImageKey)|Track(?:InfoKey|PositionKey|SignalKey)|XKey|YKey)|Output(?:ImageKey|WebPageURLKey)|P(?:icker(?:PanelDidSelectCompositionNotification|ViewDidSelectCompositionNotification)|rotocol(?:Graphic(?:Animation|Transition)|ImageFilter|MusicVisualizer|ScreenSaver))|RepositoryDidUpdateNotification)|P(?:lugIn(?:Attribute(?:C(?:ategoriesKey|opyrightKey)|DescriptionKey|ExamplesKey|NameKey)|ExecutionArgument(?:EventKey|MouseLocationKey)|PixelFormat(?:ARGB8|BGRA8|I(?:8|f)|RGBAf))|ort(?:Attribute(?:DefaultValueKey|M(?:aximumValueKey|enuItemsKey|inimumValueKey)|NameKey|TypeKey)|Type(?:Boolean|Color|I(?:mage|ndex)|Number|Str(?:ing|ucture))))|Renderer(?:EventKey|MouseLocationKey)|ViewDidSt(?:artRenderingNotification|opRenderingNotification))\\b',
      name: 'invalid.deprecated.10.15.support.variable.objc'
    },
    {
      match:
        '\\bNSPrint(?:FormName|JobFeatures|ManualFeed|Pa(?:gesPerSheet|perFeed))\\b',
      name: 'invalid.deprecated.10.2.support.variable.cocoa.objc'
    },
    {
      match: '\\bNSOpenGLGOResetLibrary\\b',
      name: 'invalid.deprecated.10.4.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:F(?:TPProperty(?:ActiveTransferModeKey|F(?:TPProxy|ileOffsetKey)|User(?:LoginKey|PasswordKey))|ontColorAttribute)|HTTPProperty(?:ErrorPageDataKey|HTTPProxy|RedirectionHeadersKey|S(?:erverHTTPVersionKey|tatus(?:CodeKey|ReasonKey)))|ViewFocusDidChangeNotification)\\b',
      name: 'invalid.deprecated.10.4.support.variable.cocoa.objc'
    },
    {
      match: '\\bNSMovie\\b',
      name: 'invalid.deprecated.10.5.support.class.cocoa.objc'
    },
    {
      match: '\\bNSOpenGLPFA(?:M(?:PSafe|ultiScreen)|Robust)\\b',
      name: 'invalid.deprecated.10.5.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:AMPMDesignation|CurrencySymbol|D(?:ate(?:FormatString|TimeOrdering)|ecimal(?:Digits|Separator))|EarlierTimeDesignations|HourNameDesignations|Int(?:HashCallBacks|Map(?:KeyCallBacks|ValueCallBacks)|ernationalCurrencyString)|LaterTimeDesignations|MonthNameArray|Ne(?:gativeCurrencyFormatString|xt(?:DayDesignations|NextDayDesignations))|P(?:ositiveCurrencyFormatString|riorDayDesignations)|Short(?:DateFormatString|MonthNameArray|TimeDateFormatString|WeekDayNameArray)|T(?:h(?:isDayDesignations|ousandsSeparator)|ime(?:DateFormatString|FormatString))|VoiceLanguage|WeekDayNameArray|YearMonthWeekDesignations)\\b',
      name: 'invalid.deprecated.10.5.support.variable.cocoa.objc'
    },
    {
      match: '\\bNS(?:CachedImageRep|Input(?:Manager|Server))\\b',
      name: 'invalid.deprecated.10.6.support.class.cocoa.objc'
    },
    {
      match: '\\bNSOpenGLPFAFullScreen\\b',
      name: 'invalid.deprecated.10.6.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:A(?:ccessibilitySortButtonRole|pplicationFileType)|CalibratedBlackColorSpace|D(?:eviceBlackColorSpace|irectoryFileType)|ErrorFailingURLStringKey|FilesystemFileType|P(?:ICTPboardType|lainFileType|rintSavePath)|ShellCommandFileType)\\b',
      name: 'invalid.deprecated.10.6.support.variable.cocoa.objc'
    },
    {
      match: '\\bNSOpenGLPixelBuffer\\b',
      name: 'invalid.deprecated.10.7.support.class.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:AutosaveOperation|OpenGLPFA(?:OffScreen|PixelBuffer|RemotePixelBuffer)|PathStyleNavigationBar)\\b',
      name: 'invalid.deprecated.10.7.support.constant.cocoa.objc'
    },
    {
      match:
        '\\b(?:NS(?:FileHandleNotificationMonitorModes|ImageNameDotMac)|kAB(?:AIM(?:HomeLabel|InstantProperty|MobileMeLabel|WorkLabel)|ICQ(?:HomeLabel|InstantProperty|WorkLabel)|Jabber(?:HomeLabel|InstantProperty|WorkLabel)|MSN(?:HomeLabel|InstantProperty|WorkLabel)|Yahoo(?:HomeLabel|InstantProperty|WorkLabel)))\\b',
      name: 'invalid.deprecated.10.7.support.variable.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:MacintoshInterfaceStyle|N(?:extStepInterfaceStyle|oInterfaceStyle)|PointerFunctionsZeroingWeakMemory|Windows95InterfaceStyle)\\b',
      name: 'invalid.deprecated.10.8.support.constant.cocoa.objc'
    },
    {
      match: '\\bNSInterfaceStyle\\b',
      name: 'invalid.deprecated.10.8.support.type.cocoa.objc'
    },
    {match: '\\bCalSpan\\b', name: 'invalid.deprecated.10.8.support.type.objc'},
    {
      match:
        '\\bNS(?:ApplicationLaunchRemoteNotificationKey|HashTableZeroingWeakMemory|InterfaceStyleDefault|MapTableZeroingWeakMemory|Nib(?:Owner|TopLevelObjects)|URLUbiquitousItemPercent(?:DownloadedKey|UploadedKey))\\b',
      name: 'invalid.deprecated.10.8.support.variable.cocoa.objc'
    },
    {
      match:
        '\\bCal(?:AlarmAction(?:Display|Email|Procedure|Sound)|Calendar(?:StoreErrorDomain|Type(?:Birthday|CalDAV|Exchange|IMAP|Local|Subscription)|sChanged(?:ExternallyNotification|Notification))|DefaultRecurrenceInterval|EventsChanged(?:ExternallyNotification|Notification)|SenderProcessIDKey|TasksChanged(?:ExternallyNotification|Notification)|UserUIDKey)\\b',
      name: 'invalid.deprecated.10.8.support.variable.objc'
    },
    {
      match:
        '\\bNS(?:NoUnderlineStyle|OpenGLPFA(?:Compliant|SingleRenderer|Window)|SingleUnderlineStyle|URLBookmarkCreationPreferFileIDResolution)\\b',
      name: 'invalid.deprecated.10.9.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:M(?:etadataUbiquitousItemIsDownloadedKey|omentary(?:Light|PushButton))|U(?:RLUbiquitousItemIsDownloadedKey|n(?:derlineStrikethroughMask|scaledWindowMask)))\\b',
      name: 'invalid.deprecated.10.9.support.variable.cocoa.objc'
    },
    {
      match: '\\bNSUserNotification(?:Action|Center)?\\b',
      name: 'invalid.deprecated.tba.support.class.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:AtomicWrite|DataReadingMapped|JSONReadingAllowFragments|MappedRead|U(?:ncachedRead|serNotificationActivationType(?:ActionButtonClicked|ContentsClicked|None))|VisualEffectMaterial(?:AppearanceBased|Dark|Light|MediumLight|UltraDark)|W(?:indowStyleMaskTexturedBackground|orkspaceLaunch(?:A(?:nd(?:Hide(?:Others)?|Print)|sync)|Default|InhibitingBackgroundOnly|NewInstance|With(?:ErrorPresentation|outA(?:ctivation|ddingToRecents)))))\\b',
      name: 'invalid.deprecated.tba.support.constant.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:UserNotificationActivationType|WorkspaceLaunchConfigurationKey)\\b',
      name: 'invalid.deprecated.tba.support.type.cocoa.objc'
    },
    {
      match:
        '\\bNS(?:AutoPagination|B(?:ackgroundStyle(?:Dark|Light)|evelLineJoinStyle|ox(?:OldStyle|Secondary)|uttLineCapStyle)|C(?:l(?:ipPagination|o(?:ckAndCalendarDatePickerStyle|sePathBezierPathElement))|ontrolTintDidChangeNotification|urveToBezierPathElement)|E(?:raDatePickerElementFlag|venOddWindingRule)|FitPagination|HourMinute(?:DatePickerElementFlag|SecondDatePickerElementFlag)|LineToBezierPathElement|M(?:iterLineJoinStyle|oveToBezierPathElement|ultipleValuesMarker)|No(?:SelectionMarker|nZeroWindingRule|tApplicableMarker)|R(?:angeDateMode|oundLine(?:CapStyle|JoinStyle))|S(?:ingleDateMode|quareLineCapStyle)|T(?:extField(?:AndStepperDatePickerStyle|DatePickerStyle)|humbnail1024x1024SizeKey|imeZoneDatePickerElementFlag|oolbar(?:CustomizeToolbarItemIdentifier|SeparatorItemIdentifier))|U(?:RLThumbnail(?:DictionaryKey|Key)|serNotificationDefaultSoundName)|WorkspaceLaunchConfiguration(?:A(?:ppleEvent|r(?:chitecture|guments))|Environment)|YearMonthDa(?:tePickerElementFlag|yDatePickerElementFlag))\\b',
      name: 'invalid.deprecated.tba.support.variable.cocoa.objc'
    },
    {
      match: '\\bIB(?:Action|Inspectable|Outlet|_DESIGNABLE)\\b',
      name: 'storage.type.cocoa.objc'
    },
    {match: '\\binstancetype\\b', name: 'storage.type.objc'},
    {
      match:
        '\\b(?:CI(?:QRCodeFeature|RectangleFeature)|NS(?:AsynchronousFetchRe(?:quest|sult)|BatchUpdateRe(?:quest|sult)|PersistentStore(?:AsynchronousResult|Result)))\\b',
      name: 'support.class.10.10.objc'
    },
    {
      match:
        '\\b(?:AU(?:AudioUnit(?:Bus(?:Array)?|Preset|V2Bridge)?|Parameter(?:Group|Node|Tree)?)|C(?:A(?:MetalLayer|SpringAnimation)|I(?:ColorKernel|TextFeature|WarpKernel))|M(?:DL(?:A(?:reaLight|sset)|C(?:amera|heckerboardTexture|olorSwatchTexture)|Light(?:Probe)?|M(?:aterial(?:Property)?|esh(?:Buffer(?:Data(?:Allocator)?|Map))?)|No(?:iseTexture|rmalMapTexture)|Object(?:Container)?|Ph(?:otometricLight|ysicallyPlausible(?:Light|ScatteringFunction))|S(?:catteringFunction|kyCubeTexture|tereoscopicCamera|ubmesh(?:Topology)?)|T(?:exture(?:Filter|Sampler)?|ransform)|URLTexture|V(?:ertex(?:Attribute(?:Data)?|BufferLayout|Descriptor)|oxelArray))|T(?:K(?:Mesh(?:Buffer(?:Allocator)?)?|Submesh|TextureLoader|View)|L(?:Ar(?:gument|rayType)|Comp(?:ileOptions|utePipeline(?:Descriptor|Reflection))|DepthStencilDescriptor|RenderP(?:ass(?:AttachmentDescriptor|ColorAttachmentDescriptor(?:Array)?|De(?:pthAttachmentDescriptor|scriptor)|StencilAttachmentDescriptor)|ipeline(?:ColorAttachmentDescriptor(?:Array)?|Descriptor|Reflection))|S(?:amplerDescriptor|t(?:encilDescriptor|ruct(?:Member|Type)))|TextureDescriptor|Vertex(?:Attribute(?:Descriptor(?:Array)?)?|BufferLayoutDescriptor(?:Array)?|Descriptor))))|NS(?:BatchDeleteRe(?:quest|sult)|ConstraintConflict))\\b',
      name: 'support.class.10.11.objc'
    },
    {
      match:
        '\\b(?:CIImageProcessorKernel|IOSurface|M(?:DLMaterialProperty(?:Connection|Graph|Node)|TL(?:Attribute(?:Descriptor(?:Array)?)?|BufferLayoutDescriptor(?:Array)?|FunctionConstant(?:Values)?|StageInputOutputDescriptor))|NS(?:FetchedResultsController|Persistent(?:Container|StoreDescription)|QueryGenerationToken))\\b',
      name: 'support.class.10.12.objc'
    },
    {
      match:
        '\\b(?:CI(?:AztecCodeDescriptor|B(?:arcodeDescriptor|lendKernel)|DataMatrixCodeDescriptor|PDF417CodeDescriptor|QRCodeDescriptor|Render(?:Destination|Info|Task))|M(?:DL(?:Animat(?:ed(?:Matrix4x4|QuaternionArray|Scalar(?:Array)?|V(?:alue|ector(?:2|3(?:Array)?|4)))|ionBindComponent)|BundleAssetResolver|M(?:atrix4x4Array|eshBufferZoneDefault)|Pa(?:ckedJointAnimation|thAssetResolver)|RelativeAssetResolver|Skeleton|Transform(?:MatrixOp|Rotate(?:Op|XOp|YOp|ZOp)|S(?:caleOp|tack)|TranslateOp))|TL(?:ArgumentDescriptor|CaptureManager|HeapDescriptor|P(?:ipelineBufferDescriptor(?:Array)?|ointerType)|T(?:extureReferenceType|ype)))|NS(?:CoreDataCoreSpotlightDelegate|FetchIndex(?:Description|ElementDescription)|PersistentHistory(?:Change(?:Request)?|Result|T(?:oken|ransaction)))|PDFAppearanceCharacteristics)\\b',
      name: 'support.class.10.13.objc'
    },
    {
      match:
        '\\bM(?:DL(?:AnimatedQuaternion|TransformOrientOp)|TL(?:IndirectCommandBufferDescriptor|Shared(?:Event(?:Handle|Listener)|TextureHandle)))\\b',
      name: 'support.class.10.14.objc'
    },
    {
      match:
        '\\b(?:CAEDRMetadata|MTL(?:C(?:aptureDescriptor|ounterSampleBufferDescriptor)|RasterizationRate(?:Layer(?:Array|Descriptor)|MapDescriptor|SampleArray))|NS(?:BatchInsertRe(?:quest|sult)|DerivedAttributeDescription|PersistentCloudKitContainer(?:Options)?))\\b',
      name: 'support.class.10.15.objc'
    },
    {
      match:
        '\\b(?:NS(?:AccessibilityElement|BackgroundActivityScheduler|ClickGestureRecognizer|Date(?:ComponentsFormatter|IntervalFormatter)|E(?:nergyFormatter|xtension(?:Context|Item))|FileAccessIntent|GestureRecognizer|ItemProvider|LengthFormatter|Ma(?:gnificationGestureRecognizer|ssFormatter)|P(?:a(?:nGestureRecognizer|thControlItem)|ress(?:GestureRecognizer|ureConfiguration))|RotationGestureRecognizer|S(?:plitView(?:Controller|Item)|t(?:atusBarButton|oryboard(?:Segue)?))|T(?:abViewController|itlebarAccessoryViewController)|U(?:RLQueryItem|serActivity)|VisualEffectView)|WK(?:BackForwardList(?:Item)?|FrameInfo|Navigation(?:Action|Response)?|Pr(?:eferences|ocessPool)|ScriptMessage|User(?:ContentController|Script)|W(?:ebView(?:Configuration)?|indowFeatures)))\\b',
      name: 'support.class.cocoa.10.10.objc'
    },
    {
      match:
        '\\b(?:NS(?:AlignmentFeedbackFilter|CollectionView(?:FlowLayout(?:InvalidationContext)?|GridLayout|Layout(?:Attributes|InvalidationContext)?|TransitionLayout|UpdateItem)|D(?:ataAsset|ictionaryControllerKeyValuePair)|HapticFeedbackManager|Layout(?:Anchor|Dimension|Guide|XAxisAnchor|YAxisAnchor)|PersonNameComponents(?:Formatter)?|StringDrawingContext|TableViewRowAction|URLSessionStreamTask)|WK(?:SecurityOrigin|WebsiteData(?:Record|Store)))\\b',
      name: 'support.class.cocoa.10.11.objc'
    },
    {
      match:
        '\\b(?:NS(?:C(?:andidateListTouchBarItem|olorPickerTouchBarItem|ustomTouchBarItem)|D(?:ateInterval|imension)|FilePromise(?:Provider|Receiver)|Gr(?:id(?:C(?:ell|olumn)|Row|View)|oupTouchBarItem)|ISO8601DateFormatter|Measurement(?:Formatter)?|PopoverTouchBarItem|S(?:crubber(?:ArrangedView|FlowLayout|I(?:mageItemView|temView)|Layout(?:Attributes)?|ProportionalLayout|Selection(?:Style|View)|TextItemView)?|haringServicePickerTouchBarItem|lider(?:Accessory(?:Behavior)?|TouchBarItem))|TouchBar(?:Item)?|U(?:RLSessionTask(?:Metrics|TransactionMetrics)|nit(?:A(?:cceleration|ngle|rea)|Con(?:centrationMass|verter(?:Linear)?)|D(?:ispersion|uration)|E(?:lectric(?:C(?:harge|urrent)|PotentialDifference|Resistance)|nergy)|F(?:requency|uelEfficiency)|Illuminance|Length|Mass|P(?:ower|ressure)|Speed|Temperature|Volume)?))|WKOpenPanelParameters)\\b',
      name: 'support.class.cocoa.10.12.objc'
    },
    {
      match:
        '\\b(?:NS(?:AccessibilityCustom(?:Action|Rotor(?:ItemResult|SearchParameters)?)|F(?:ileProviderService|ontAssetRequest)|UserInterfaceCompressionOptions|WindowTab(?:Group)?)|WK(?:ContentRuleList(?:Store)?|HTTPCookieStore|SnapshotConfiguration))\\b',
      name: 'support.class.cocoa.10.13.objc'
    },
    {
      match:
        '\\b(?:NS(?:BindingSelectionMarker|SecureUnarchiveFromDataTransformer|WorkspaceAuthorization)|UN(?:CalendarNotificationTrigger|MutableNotificationContent|Notification(?:A(?:ction|ttachment)|C(?:ategory|ontent)|Re(?:quest|sponse)|S(?:e(?:rviceExtension|ttings)|ound)|Trigger)?|PushNotificationTrigger|T(?:extInputNotification(?:Action|Response)|imeIntervalNotificationTrigger)|UserNotificationCenter))\\b',
      name: 'support.class.cocoa.10.14.objc'
    },
    {
      match:
        '\\b(?:NS(?:ButtonTouchBarItem|Col(?:lection(?:Layout(?:Anchor|BoundarySupplementaryItem|D(?:ecorationItem|imension)|EdgeSpacing|Group(?:CustomItem)?|Item|S(?:ection|ize|pacing|upplementaryItem))|View(?:CompositionalLayout(?:Configuration)?|DiffableDataSource))|orSampler)|DiffableDataSourceSnapshot|ListFormatter|MenuToolbarItem|OrderedCollection(?:Change|Difference)|PickerTouchBarItem|RelativeDateTimeFormatter|S(?:haringServicePickerToolbarItem|tepperTouchBarItem|witch)|TextCheckingController|U(?:RLSessionWebSocket(?:Message|Task)|nitInformationStorage)|WorkspaceOpenConfiguration)|WKWebpagePreferences)\\b',
      name: 'support.class.cocoa.10.15.objc'
    },
    {
      match:
        '\\bNS(?:ByteCountFormatter|PageController|SharingService(?:Picker)?|TextAlternatives|U(?:UID|ser(?:A(?:ppleScriptTask|utomatorTask)|ScriptTask|UnixTask))|XPC(?:Co(?:der|nnection)|Interface|Listener(?:Endpoint)?))\\b',
      name: 'support.class.cocoa.10.8.objc'
    },
    {
      match:
        '\\bNS(?:Appearance|MediaLibraryBrowserController|P(?:DF(?:Info|Panel)|rogress)|StackView|URL(?:Components|Session(?:Configuration|Task)?))\\b',
      name: 'support.class.cocoa.10.9.objc'
    },
    {
      match:
        '\\b(?:AB(?:AddressBook|Group|Mu(?:ltiValue|tableMultiValue)|Pe(?:oplePickerView|rson(?:View)?)|Record|SearchElement)|NS(?:A(?:TSTypesetter|ctionCell|ffineTransform|lert|nimation(?:Context)?|ppl(?:e(?:Event(?:Descriptor|Manager)|Script)|ication)|rray(?:Controller)?|ssertionHandler|ttributedString|utoreleasePool)|B(?:ezierPath|itmapImageRep|lockOperation|ox|rowser(?:Cell)?|u(?:ndle(?:ResourceRequest)?|tton(?:Cell)?))|C(?:IImageRep|a(?:che(?:dURLResponse)?|lendar)|ell|haracterSet|l(?:assDescription|ipView|o(?:neCommand|seCommand))|o(?:der|l(?:lectionView(?:Item)?|or(?:List|P(?:anel|icker)|Space|Well)?)|m(?:boBox(?:Cell)?|p(?:arisonPredicate|oundPredicate))|n(?:dition(?:Lock)?|stantString|trol(?:ler)?)|unt(?:Command|edSet))|reateCommand|u(?:rsor|stomImageRep))|D(?:at(?:a(?:Detector)?|e(?:Components|Formatter|Picker(?:Cell)?)?)|e(?:cimalNumber(?:Handler)?|leteCommand)|i(?:ctionary(?:Controller)?|rectoryEnumerator|stributed(?:Lock|NotificationCenter))|oc(?:kTile|ument(?:Controller)?)|ragging(?:I(?:mageComponent|tem)|Session))|E(?:PSImageRep|numerator|rror|vent|x(?:ception(?:Handler)?|istsCommand|pression))|F(?:ile(?:Coordinator|Handle|Manager|Security|Version|Wrapper)|o(?:nt(?:Collection|Descriptor|Manager|Panel)?|rm(?:Cell|atter)))|G(?:etCommand|lyph(?:Generator|Info)|ra(?:dient|phicsContext))|H(?:TTP(?:Cookie(?:Storage)?|URLResponse)|ashTable|elpManager|ost)|I(?:mage(?:Cell|Rep|View)?|n(?:dex(?:Path|S(?:et|pecifier))|putStream|vocation(?:Operation)?))|JSONSerialization|Keyed(?:Archiver|Unarchiver)|L(?:ayout(?:Constraint|Manager)|evelIndicator(?:Cell)?|inguisticTagger|o(?:c(?:ale|k)|gicalTest))|M(?:a(?:chPort|pTable|trix)|e(?:nu(?:Item(?:Cell)?)?|ssagePort|t(?:adata(?:Item|Query(?:AttributeValueTuple|ResultGroup)?)|hodSignature))|iddleSpecifier|oveCommand|utable(?:A(?:rray|ttributedString)|CharacterSet|D(?:ata|ictionary)|FontCollection|IndexSet|OrderedSet|ParagraphStyle|S(?:et|tring)|URLRequest))|N(?:ameSpecifier|etService(?:Browser)?|ib(?:Con(?:nector|trolConnector)|OutletConnector)?|otification(?:Center|Queue)?|u(?:ll|mber(?:Formatter)?))|O(?:bjectController|pe(?:nPanel|ration(?:Queue)?)|r(?:deredSet|thography)|ut(?:lineView|putStream))|P(?:DFImageRep|ICTImageRep|a(?:geLayout|nel|ragraphStyle|steboard(?:Item)?|thC(?:ell|o(?:mponentCell|ntrol)))|ersistentDocument|ipe|o(?:inter(?:Array|Functions)|p(?:UpButton(?:Cell)?|over)|rt(?:Message)?|sitionalSpecifier)|r(?:edicate(?:Editor(?:RowTemplate)?)?|int(?:Info|Operation|Panel|er)|o(?:cessInfo|gressIndicator|perty(?:ListSerialization|Specifier)|tocolChecker|xy))|urgeableData)|QuitCommand|R(?:an(?:domSpecifier|geSpecifier)|e(?:cursiveLock|gularExpression|lativeSpecifier|sponder)|u(?:le(?:Editor|r(?:Marker|View))|n(?:Loop|ningApplication)))|S(?:avePanel|c(?:anner|r(?:een|ipt(?:C(?:lassDescription|o(?:ercionHandler|mmand(?:Description)?))|ExecutionContext|ObjectSpecifier|SuiteRegistry|WhoseTest)|oll(?:View|er)))|e(?:archField(?:Cell)?|cureTextField(?:Cell)?|gmentedC(?:ell|ontrol)|t(?:Command)?)|hadow|impleCString|lider(?:Cell)?|o(?:cketPort|rtDescriptor|und)|p(?:e(?:cifierTest|ech(?:Recognizer|Synthesizer)|ll(?:Checker|Server))|litView)|t(?:atus(?:Bar|Item)|epper(?:Cell)?|r(?:eam|ing)))|T(?:a(?:b(?:View(?:Item)?|le(?:C(?:ellView|olumn)|Header(?:Cell|View)|RowView|View))|sk)|ext(?:Attachment(?:Cell)?|Block|C(?:heckingResult|ontainer)|Fi(?:eld(?:Cell)?|nder)|InputContext|List|Storage|Tab(?:le(?:Block)?)?|View)?|hread|ime(?:Zone|r)|o(?:kenField(?:Cell)?|olbar(?:Item(?:Group)?)?|uch)|r(?:ackingArea|ee(?:Controller|Node))|ypesetter)|U(?:RL(?:AuthenticationChallenge|C(?:ache|onnection|redential(?:Storage)?)|Download|Handle|Prot(?:ectionSpace|ocol)|Re(?:quest|sponse)|Session(?:D(?:ataTask|ownloadTask)|UploadTask))?|biquitousKeyValueStore|n(?:doManager|iqueIDSpecifier)|serDefaults(?:Controller)?)|V(?:alue(?:Transformer)?|iew(?:Animation|Controller)?)|W(?:hoseSpecifier|indow(?:Controller)?|orkspace)|XML(?:D(?:TD(?:Node)?|ocument)|Element|Node|Parser))|UNLocationNotificationTrigger|WebResource)\\b',
      name: 'support.class.cocoa.objc'
    },
    {
      match:
        '\\b(?:AM(?:A(?:ction|ppleScriptAction)|BundleAction|ShellScriptAction|Work(?:flow(?:Controller|View)?|space))|C(?:A(?:Animation(?:Group)?|BasicAnimation|Constraint(?:LayoutManager)?|DisplayLink|Emitter(?:Cell|Layer)|GradientLayer|KeyframeAnimation|Layer|MediaTimingFunction|PropertyAnimation|Re(?:moteLayer(?:Client|Server)|nderer|plicatorLayer)|S(?:crollLayer|hapeLayer)|T(?:extLayer|iledLayer|rans(?:action|formLayer|ition))|ValueFunction)|B(?:GroupIdentity|Identity(?:Authority|Picker)?|UserIdentity)|I(?:Co(?:lor|ntext)|Detector|F(?:aceFeature|eature|ilter(?:Generator|Shape)?)|Image(?:Accumulator)?|Kernel|PlugIn|Sampler|Vector)|X(?:A(?:ction|nswerCallAction)|Call(?:Action|Controller|Directory(?:ExtensionContext|Manager|Provider)|Observer|Update)?|EndCallAction|Handle|P(?:layDTMFCallAction|rovider(?:Configuration)?)|S(?:et(?:GroupCallAction|HeldCallAction|MutedCallAction)|tartCallAction)|Transaction)|al(?:A(?:larm|ttendee)|Calendar(?:Item|Store)?|Event|NthWeekDay|Recurrence(?:End|Rule)|Task))|DR(?:Burn|CDTextBlock|Device|Erase|F(?:SObject|ile|older)|MSF(?:Formatter)?|NotificationCenter|Track)|I(?:C(?:Camera(?:Device|F(?:ile|older)|Item)|Device(?:Browser)?|Scanner(?:BandData|Device|F(?:eature(?:Boolean|Enumeration|Range|Template)?|unctionalUnit(?:DocumentFeeder|Flatbed|NegativeTransparency|PositiveTransparency)?)))|K(?:CameraDeviceView|DeviceBrowserView|Filter(?:Browser(?:Panel|View)|UIView)|Image(?:BrowserCell|EditPanel|View)|PictureTaker|S(?:aveOptions|cannerDeviceView|lideshow))|OBluetooth(?:AccessibilityIgnored(?:ImageCell|TextFieldCell)|Device(?:Inquiry|Pair|SelectorController)?|H(?:andsFree(?:AudioGateway|Device)?|ostController)|L2CAPChannel|O(?:BEXSession|bject(?:PushUIController)?)|Pa(?:iringController|sskeyDisplay)|RFCOMMChannel|S(?:DP(?:DataElement|Service(?:Attribute|Record)|UUID)|erviceBrowserController)|UserNotification))|NS(?:At(?:omicStore(?:CacheNode)?|tributeDescription)|E(?:ntity(?:Description|M(?:apping|igrationPolicy))|xpressionDescription)|Fetch(?:Request(?:Expression)?|edPropertyDescription)|IncrementalStore(?:Node)?|M(?:a(?:nagedObject(?:Context|ID|Model)?|ppingModel)|erge(?:Conflict|Policy)|igrationManager)|Object|P(?:ersistentStore(?:Coordinator|Request)?|r(?:eferencePane|operty(?:Description|Mapping)))|RelationshipDescription|SaveChangesRequest)|O(?:BEX(?:FileTransferServices|Session)|SA(?:Language(?:Instance)?|Script(?:Controller|View)?))|PDF(?:A(?:ction(?:GoTo|Named|Re(?:moteGoTo|setForm)|URL)?|nnotation)|Border|D(?:estination|ocument)|Outline|Page|Selection|ThumbnailView|View)|Q(?:LPreview(?:Panel|View)|uartzFilter(?:Manager|View)?)|S(?:F(?:Authorization(?:PluginView|View)?|C(?:ertificate(?:Panel|TrustPanel|View)|hooseIdentity(?:Panel|TableCellView))|KeychainS(?:avePanel|ettingsPanel))|creenSaver(?:Defaults|View)))\\b',
      name: 'support.class.objc'
    },
    {
      match:
        '\\bNS(?:BatchUpdateRequestType|StatusOnlyResultType|UpdatedObject(?:IDsResultType|sCountResultType))\\b',
      name: 'support.constant.10.10.objc'
    },
    {
      match:
        '\\b(?:MTL(?:Argument(?:Access(?:Read(?:Only|Write)|WriteOnly)|Type(?:Buffer|Sampler|T(?:exture|hreadgroupMemory)))|Bl(?:end(?:Factor(?:Blend(?:Alpha|Color)|Destination(?:Alpha|Color)|One(?:Minus(?:Blend(?:Alpha|Color)|Destination(?:Alpha|Color)|Source(?:Alpha|Color)))?|Source(?:Alpha(?:Saturated)?|Color)|Zero)|Operation(?:Add|M(?:ax|in)|ReverseSubtract|Subtract))|itOption(?:DepthFromDepthStencil|None|StencilFromDepthStencil))|C(?:PUCacheMode(?:DefaultCache|WriteCombined)|o(?:lorWriteMask(?:Al(?:l|pha)|Blue|Green|None|Red)|m(?:mandBuffer(?:Error(?:Blacklisted|In(?:ternal|validResource)|No(?:ne|tPermitted)|OutOfMemory|PageFault|Timeout)|Status(?:Com(?:mitted|pleted)|E(?:nqueued|rror)|NotEnqueued|Scheduled))|pareFunction(?:Always|Equal|Greater(?:Equal)?|Less(?:Equal)?|N(?:ever|otEqual))))|ullMode(?:Back|Front|None))|D(?:ataType(?:Array|Bool(?:2|3|4)?|Char(?:2|3|4)?|Float(?:2(?:x(?:2|3|4))?|3(?:x(?:2|3|4))?|4(?:x(?:2|3|4))?)?|Half(?:2(?:x(?:2|3|4))?|3(?:x(?:2|3|4))?|4(?:x(?:2|3|4))?)?|Int(?:2|3|4)?|None|S(?:hort(?:2|3|4)?|truct)|U(?:Char(?:2|3|4)?|Int(?:2|3|4)?|Short(?:2|3|4)?))|epthClipModeCl(?:amp|ip))|F(?:eatureSet_(?:OSX_GPUFamily1_v1|macOS_GPUFamily1_v1)|unctionType(?:Fragment|Kernel|Vertex))|IndexTypeUInt(?:16|32)|L(?:anguageVersion1_1|ibraryError(?:Compile(?:Failure|Warning)|Internal|Unsupported)|oadAction(?:Clear|DontCare|Load))|P(?:i(?:pelineOption(?:ArgumentInfo|BufferTypeInfo|None)|xelFormat(?:A8Unorm|B(?:C(?:1_RGBA(?:_sRGB)?|2_RGBA(?:_sRGB)?|3_RGBA(?:_sRGB)?|4_R(?:Snorm|Unorm)|5_RG(?:Snorm|Unorm)|6H_RGB(?:Float|Ufloat)|7_RGBAUnorm(?:_sRGB)?)|GR(?:A8Unorm(?:_sRGB)?|G422))|Depth(?:24Unorm_Stencil8|32Float(?:_Stencil8)?)|GBGR422|Invalid|R(?:16(?:Float|S(?:int|norm)|U(?:int|norm))|32(?:Float|Sint|Uint)|8(?:S(?:int|norm)|U(?:int|norm))|G(?:1(?:1B10Float|6(?:Float|S(?:int|norm)|U(?:int|norm)))|32(?:Float|Sint|Uint)|8(?:S(?:int|norm)|U(?:int|norm))|B(?:10A2U(?:int|norm)|9E5Float|A(?:16(?:Float|S(?:int|norm)|U(?:int|norm))|32(?:Float|Sint|Uint)|8(?:S(?:int|norm)|U(?:int|norm(?:_sRGB)?))))))|Stencil8))|rimitiveT(?:opologyClass(?:Line|Point|Triangle|Unspecified)|ype(?:Line(?:Strip)?|Point|Triangle(?:Strip)?))|urgeableState(?:Empty|KeepCurrent|NonVolatile|Volatile))|Resource(?:CPUCacheMode(?:DefaultCache|WriteCombined)|OptionCPUCacheMode(?:Default|WriteCombined)|StorageMode(?:Managed|Private|Shared))|S(?:ampler(?:AddressMode(?:ClampTo(?:Edge|Zero)|Mirror(?:ClampToEdge|Repeat)|Repeat)|Mi(?:nMagFilter(?:Linear|Nearest)|pFilter(?:Linear|N(?:earest|otMipmapped))))|t(?:encilOperation(?:Decrement(?:Clamp|Wrap)|In(?:crement(?:Clamp|Wrap)|vert)|Keep|Replace|Zero)|or(?:ageMode(?:Managed|Private|Shared)|eAction(?:DontCare|MultisampleResolve|Store))))|T(?:exture(?:Type(?:1D(?:Array)?|2D(?:Array|Multisample)?|3D|Cube(?:Array)?)|Usage(?:PixelFormatView|RenderTarget|Shader(?:Read|Write)|Unknown))|riangleFillMode(?:Fill|Lines))|V(?:ertex(?:Format(?:Char(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|Float(?:2|3|4)?|Half(?:2|3|4)|In(?:t(?:1010102Normalized|2|3|4)?|valid)|Short(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|U(?:Char(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|Int(?:1010102Normalized|2|3|4)?|Short(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)))|StepFunction(?:Constant|Per(?:Instance|Vertex)))|isibilityResultMode(?:Boolean|Counting|Disabled))|WindingC(?:lockwise|ounterClockwise))|NSBatchDeleteRe(?:questType|sultType(?:Count|ObjectIDs|StatusOnly)))\\b',
      name: 'support.constant.10.11.objc'
    },
    {
      match:
        '\\b(?:MTL(?:AttributeFormat(?:Char(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|Float(?:2|3|4)?|Half(?:2|3|4)|In(?:t(?:1010102Normalized|2|3|4)?|valid)|Short(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|U(?:Char(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)|Int(?:1010102Normalized|2|3|4)?|Short(?:2(?:Normalized)?|3(?:Normalized)?|4(?:Normalized)?)))|BlendFactor(?:OneMinusSource1(?:Alpha|Color)|Source1(?:Alpha|Color))|FeatureSet_(?:OSX_(?:GPUFamily1_v2|ReadWriteTextureTier2)|macOS_(?:GPUFamily1_v2|ReadWriteTextureTier2))|L(?:anguageVersion1_2|ibraryErrorF(?:ileNotFound|unctionNotFound))|P(?:atchType(?:None|Quad|Triangle)|ixelFormat(?:Depth16Unorm|X(?:24_Stencil8|32_Stencil8)))|S(?:ampler(?:AddressModeClampToBorderColor|BorderColor(?:Opaque(?:Black|White)|TransparentBlack))|t(?:epFunction(?:Constant|Per(?:Instance|Patch(?:ControlPoint)?|Vertex)|ThreadPositionInGrid(?:X(?:Indexed)?|Y(?:Indexed)?))|oreAction(?:StoreAndMultisampleResolve|Unknown)))|Tessellation(?:ControlPointIndexType(?:None|UInt(?:16|32))|Factor(?:FormatHalf|StepFunction(?:Constant|Per(?:Instance|Patch(?:AndPerInstance)?)))|PartitionMode(?:Fractional(?:Even|Odd)|Integer|Pow2))|VertexStepFunctionPerPatch(?:ControlPoint)?)|NSFetchedResultsChange(?:Delete|Insert|Move|Update))\\b',
      name: 'support.constant.10.12.objc'
    },
    {
      match:
        '\\b(?:M(?:DLDataPrecision(?:Double|Float|Undefined)|TL(?:A(?:rgumentBuffersTier(?:1|2)|ttributeFormat(?:Char(?:Normalized)?|Half|Short(?:Normalized)?|U(?:Char(?:4Normalized_BGRA|Normalized)?|Short(?:Normalized)?)))|CommandBufferErrorDeviceRemoved|DataType(?:Pointer|Sampler|Texture)|FeatureSet_macOS_GPUFamily1_v3|LanguageVersion2_0|Mutability(?:Default|Immutable|Mutable)|PixelFormatBGR10A2Unorm|Re(?:adWriteTextureTier(?:1|2|None)|nderStage(?:Fragment|Vertex)|source(?:HazardTrackingMode(?:Default|Untracked)|Usage(?:Read|Sample|Write)))|StoreAction(?:CustomSampleDepthStore|Option(?:CustomSamplePositions|None))|VertexFormat(?:Char(?:Normalized)?|Half|Short(?:Normalized)?|U(?:Char(?:4Normalized_BGRA|Normalized)?|Short(?:Normalized)?))))|NS(?:FetchIndexElementType(?:Binary|RTree)|PersistentHistory(?:ChangeType(?:Delete|Insert|Update)|ResultType(?:C(?:hangesOnly|ount)|ObjectIDs|StatusOnly|Transactions(?:AndChanges|Only)))|U(?:RIAttributeType|UIDAttributeType)))\\b',
      name: 'support.constant.10.13.objc'
    },
    {
      match:
        '\\bMTL(?:BarrierScope(?:Buffers|RenderTargets|Textures)|D(?:ataType(?:IndirectCommandBuffer|RenderPipeline)|ispatchType(?:Concurrent|Serial))|FeatureSet_macOS_GPUFamily(?:1_v4|2_v1)|IndirectCommandTypeDraw(?:Indexed)?|LanguageVersion2_1|Multisample(?:DepthResolveFilter(?:M(?:ax|in)|Sample0)|StencilResolveFilter(?:DepthResolvedSample|Sample0))|TextureType(?:2DMultisampleArray|TextureBuffer))\\b',
      name: 'support.constant.10.14.objc'
    },
    {
      match:
        '\\b(?:MTL(?:C(?:apture(?:Destination(?:DeveloperTools|GPUTraceDocument)|Error(?:AlreadyCapturing|InvalidDescriptor|NotSupported))|ounterSampleBufferError(?:Internal|OutOfMemory))|DeviceLocation(?:BuiltIn|External|Slot|Unspecified)|GPUFamily(?:Apple(?:1|2|3|4|5)|Common(?:1|2|3)|Mac(?:1|2|Catalyst(?:1|2)))|H(?:azardTrackingMode(?:Default|Tracked|Untracked)|eapType(?:Automatic|Placement))|LanguageVersion2_2|ResourceHazardTrackingModeTracked|TextureSwizzle(?:Alpha|Blue|Green|One|Red|Zero))|NSBatchInsertRequest(?:ResultType(?:Count|ObjectIDs|StatusOnly)|Type))\\b',
      name: 'support.constant.10.15.objc'
    },
    {
      match:
        '\\b(?:NS(?:B(?:ackgroundActivityResult(?:Deferred|Finished)|itmapFormat(?:SixteenBit(?:BigEndian|LittleEndian)|ThirtyTwoBit(?:BigEndian|LittleEndian))|uttonType(?:Accelerator|MultiLevelAccelerator))|CompositingOperation(?:Color(?:Burn|Dodge)?|D(?:arken|ifference)|Exclusion|H(?:ardLight|ue)|L(?:ighten|uminosity)|Multiply|Overlay|S(?:aturation|creen|oftLight))|DateIntervalFormatter(?:FullStyle|LongStyle|MediumStyle|NoStyle|ShortStyle)|E(?:nergyFormatterUnit(?:Calorie|Joule|Kilo(?:calorie|joule))|vent(?:MaskPressure|Type(?:DirectTouch|Pressure)))|F(?:ileCoordinator(?:Reading(?:ForUploading|ImmediatelyAvailableMetadataOnly)|WritingContentIndependentMetadataOnly)|ormatting(?:Context(?:BeginningOfSentence|Dynamic|ListItem|MiddleOfSentence|Standalone|Unknown)|UnitStyle(?:Long|Medium|Short)))|ItemProvider(?:ItemUnavailableError|Un(?:expectedValueClassError|knownError))|LengthFormatterUnit(?:Centimeter|Foot|Inch|Kilometer|M(?:eter|il(?:e|limeter))|Yard)|MassFormatterUnit(?:Gram|Kilogram|Ounce|Pound|Stone)|Pro(?:cessInfoThermalState(?:Critical|Fair|Nominal|Serious)|pertyListWriteInvalidError)|QualityOfService(?:Background|Default|U(?:serIn(?:itiated|teractive)|tility))|SegmentS(?:tyleSeparated|witchTrackingMomentaryAccelerator)|TokenStyle(?:PlainSquared|Squared)|U(?:RL(?:Error(?:BackgroundSession(?:InUseByAnotherProcess|RequiresSharedContainer|WasDisconnected)|CancelledReason(?:BackgroundUpdatesDisabled|InsufficientSystemResources|UserForceQuitApplication))|Relationship(?:Contains|Other|Same))|ser(?:Activity(?:ConnectionUnavailableError|ErrorM(?:aximum|inimum)|Handoff(?:FailedError|UserInfoTooLargeError)|RemoteApplicationTimedOutError)|NotificationActivationTypeAdditionalActionClicked))|WindowStyleMaskFullSizeContentView)|WK(?:Error(?:JavaScriptExceptionOccurred|Unknown|Web(?:ContentProcessTerminated|ViewInvalidated))|Navigation(?:ActionPolicy(?:Allow|Cancel)|ResponsePolicy(?:Allow|Cancel)|Type(?:BackForward|Form(?:Resubmitted|Submitted)|LinkActivated|Other|Reload))|UserScriptInjectionTimeAtDocument(?:End|Start)))\\b',
      name: 'support.constant.cocoa.10.10.objc'
    },
    {
      match:
        '\\b(?:NS(?:Appl(?:eEventSend(?:AlwaysInteract|Can(?:Interact|SwitchLayer)|D(?:efaultOptions|ont(?:Annotate|Execute|Record))|N(?:everInteract|oReply)|QueueReply|WaitForReply)|icationPresentationDisableCursorLocationAssistance)|BundleErrorM(?:aximum|inimum)|Co(?:der(?:ErrorM(?:aximum|inimum)|ReadCorruptError|ValueNotFoundError)|llection(?:ElementCategory(?:DecorationView|I(?:nterItemGap|tem)|SupplementaryView)|View(?:ItemHighlight(?:AsDropTarget|For(?:Deselection|Selection)|None)|ScrollDirection(?:Horizontal|Vertical)))|n(?:ditionalExpressionType|trolCharacterAction(?:ContainerBreak|HorizontalTab|LineBreak|ParagraphBreak|Whitespace|ZeroAdvancement)))|DecodingFailurePolicy(?:RaiseException|SetErrorAndReturn)|FileManagerUnmount(?:AllPartitionsAndEjectDisk|BusyError|UnknownError|WithoutUI)|GlyphProperty(?:ControlCharacter|Elastic|N(?:onBaseCharacter|ull))|ItemProviderUnavailableCoercionError|Layout(?:AttributeFirstBaseline|FormatAlignAllFirstBaseline)|NumberFormatter(?:Currency(?:AccountingStyle|ISOCodeStyle|PluralStyle)|OrdinalStyle)|PersonNameComponentsFormatter(?:Phonetic|Style(?:Abbreviated|Default|Long|Medium|Short))|URL(?:ErrorAppTransportSecurityRequiresSecureConnection|SessionResponseBecomeStream)|VisualEffectMaterial(?:Menu|Popover|Sidebar)|W(?:indowCollectionBehaviorFullScreen(?:AllowsTiling|DisallowsTiling)|ritingDirection(?:Embedding|Override)))|WKErrorJavaScriptResultTypeIsUnsupported)\\b',
      name: 'support.constant.cocoa.10.11.objc'
    },
    {
      match:
        '\\b(?:NS(?:CloudSharing(?:ConflictError|ErrorM(?:aximum|inimum)|N(?:etworkFailureError|oPermissionError)|OtherError|QuotaExceededError|TooManyParticipantsError)|DateComponentsFormatterUnitsStyleBrief|EventMaskDirectTouch|I(?:SO8601DateFormatWith(?:ColonSeparatorInTime(?:Zone)?|Da(?:shSeparatorInDate|y)|Full(?:Date|Time)|InternetDateTime|Month|SpaceBetweenDateAndTime|Time(?:Zone)?|WeekOfYear|Year)|mage(?:Leading|Trailing))|MeasurementFormatterUnitOptions(?:NaturalScale|ProvidedUnit|TemperatureWithoutUnit)|URL(?:ErrorFileOutsideSafeArea|NetworkServiceTypeCallSignaling|SessionTaskMetricsResourceFetchType(?:LocalCache|NetworkLoad|ServerPush|Unknown)))|WK(?:AudiovisualMediaType(?:A(?:ll|udio)|None|Video)|UserInterfaceDirectionPolicy(?:Content|System)))\\b',
      name: 'support.constant.cocoa.10.12.objc'
    },
    {
      match:
        '\\b(?:NS(?:CoderInvalidValueError|Font(?:AssetDownloadError|ErrorM(?:aximum|inimum))|I(?:SO8601DateFormatWithFractionalSeconds|temProvider(?:FileOptionOpenInPlace|RepresentationVisibility(?:All|Group|OwnProcess)))|JSONWritingSortedKeys|URLSessionDelayedRequest(?:C(?:ancel|ontinueLoading)|UseNewRequest))|WKErrorContentRuleListStore(?:CompileFailed|LookUpFailed|RemoveFailed|VersionMismatch))\\b',
      name: 'support.constant.cocoa.10.13.objc'
    },
    {
      match:
        '\\b(?:NS(?:VisualEffectMaterial(?:ContentBackground|FullScreenUI|H(?:UDWindow|eaderView)|Sheet|ToolTip|Under(?:PageBackground|WindowBackground)|WindowBackground)|Workspace(?:AuthorizationInvalidError|ErrorM(?:aximum|inimum)))|UN(?:A(?:lertStyle(?:Alert|Banner|None)|uthorization(?:Option(?:Alert|Badge|C(?:arPlay|riticalAlert)|Provi(?:desAppNotificationSettings|sional)|Sound)|Status(?:Authorized|Denied|NotDetermined|Provisional)))|ErrorCode(?:Attachment(?:Corrupt|Invalid(?:FileSize|URL)|MoveIntoDataStoreFailed|NotInDataStore|UnrecognizedType)|Notification(?:InvalidNo(?:Content|Date)|sNotAllowed))|Notification(?:ActionOption(?:AuthenticationRequired|Destructive|Foreground)|CategoryOption(?:CustomDismissAction|HiddenPreviewsShow(?:Subtitle|Title))|PresentationOption(?:Alert|Badge|Sound)|Setting(?:Disabled|Enabled|NotSupported))|ShowPreviewsSetting(?:Always|Never|WhenAuthenticated)))\\b',
      name: 'support.constant.cocoa.10.14.objc'
    },
    {
      match:
        '\\b(?:NS(?:Co(?:llectionChange(?:Insert|Remove)|mpression(?:ErrorM(?:aximum|inimum)|FailedError))|D(?:ataCompressionAlgorithm(?:LZ(?:4|FSE|MA)|Zlib)|ecompressionFailedError|irectoryEnumeration(?:IncludesDirectoriesPostOrder|ProducesRelativePathURLs))|Event(?:MaskChangeMode|TypeChangeMode)|JSONWritingWithoutEscapingSlashes|OrderedCollectionDifferenceCalculation(?:InferMoves|Omit(?:InsertedObjects|RemovedObjects))|PickerTouchBarItem(?:ControlRepresentation(?:Automatic|Collapsed|Expanded)|SelectionMode(?:Momentary|Select(?:Any|One)))|RelativeDateTimeFormatter(?:StyleN(?:amed|umeric)|UnitsStyle(?:Abbreviated|Full|S(?:hort|pellOut)))|T(?:extScaling(?:Standard|iOS)|oolbarItemGroup(?:ControlRepresentation(?:Automatic|Collapsed|Expanded)|SelectionMode(?:Momentary|Select(?:Any|One))))|URL(?:ErrorNetworkUnavailableReason(?:C(?:ellular|onstrained)|Expensive)|SessionWebSocket(?:CloseCode(?:AbnormalClosure|GoingAway|In(?:ternalServerError|valid(?:FramePayloadData)?)|M(?:andatoryExtensionMissing|essageTooBig)|No(?:StatusReceived|rmalClosure)|P(?:olicyViolation|rotocolError)|TLSHandshakeFailure|UnsupportedData)|MessageType(?:Data|String))))|WKErrorAttributedStringContent(?:FailedToLoad|LoadTimedOut))\\b',
      name: 'support.constant.cocoa.10.15.objc'
    },
    {
      match:
        '\\bNS(?:A(?:pplicationScriptsDirectory|utosaveAsOperation)|DataWritingWithoutOverwriting|Event(?:MaskSmartMagnify|Type(?:QuickLook|SmartMagnify))|FeatureUnsupportedError|PointerFunctionsWeakMemory|RemoteNotificationType(?:Alert|Sound)|TrashDirectory|U(?:RLCredentialPersistenceSynchronizable|biquitousKeyValueStoreAccountChange)|XPCConnection(?:ErrorM(?:aximum|inimum)|In(?:terrupted|valid)|Privileged|ReplyInvalid))\\b',
      name: 'support.constant.cocoa.10.8.objc'
    },
    {
      match:
        '\\bNS(?:A(?:ctivity(?:AutomaticTerminationDisabled|Background|Idle(?:DisplaySleepDisabled|SystemSleepDisabled)|LatencyCritical|SuddenTerminationDisabled|UserInitiated(?:AllowingIdleSystemSleep)?)|nyKeyExpressionType)|Calendar(?:Match(?:First|Last|NextTime(?:PreservingSmallerUnits)?|PreviousTimePreservingSmallerUnits|Strictly)|SearchBackwards)|DataBase64(?:DecodingIgnoreUnknownCharacters|Encoding(?:64CharacterLineLength|76CharacterLineLength|EndLineWith(?:CarriageReturn|LineFeed)))|NetServiceListenForConnections|TableViewDraggingDestinationFeedbackStyleGap|U(?:RL(?:NetworkServiceType(?:AVStreaming|ResponsiveAV)|Session(?:AuthChallenge(?:CancelAuthenticationChallenge|PerformDefaultHandling|RejectProtectionSpace|UseCredential)|Response(?:Allow|BecomeDownload|Cancel)|TaskState(?:C(?:anceling|ompleted)|Running|Suspended)))|biquitousFile(?:ErrorM(?:aximum|inimum)|NotUploadedDueToQuotaError|U(?:biquityServerNotAvailable|navailableError))|serNotificationActivationTypeReplied)|ViewLayerContentsRedrawCrossfade)\\b',
      name: 'support.constant.cocoa.10.9.objc'
    },
    {name: 'support.constant.cocoa.objc'},
    {name: 'support.constant.objc'},
    {
      match:
        '\\bOBJC_ASSOCIATION_(?:ASSIGN|COPY(?:_NONATOMIC)?|RETAIN(?:_NONATOMIC)?)\\b',
      name: 'support.constant.run-time.objc'
    },
    {
      match: '\\bNSBatchUpdateRequestResultType\\b',
      name: 'support.type.10.10.objc'
    },
    {
      match:
        '\\b(?:MTL(?:Argument(?:Access|Type)|Bl(?:end(?:Factor|Operation)|itOption)|C(?:PUCacheMode|o(?:lorWriteMask|m(?:mandBuffer(?:Error|Status)|pareFunction))|ullMode)|D(?:ataType|epthClipMode)|F(?:eatureSet|unctionType)|IndexType|L(?:anguageVersion|ibraryError|oadAction)|P(?:i(?:pelineOption|xelFormat)|rimitiveT(?:opologyClass|ype)|urgeableState)|ResourceOptions|S(?:ampler(?:AddressMode|Mi(?:nMagFilter|pFilter))|t(?:encilOperation|or(?:ageMode|eAction)))|T(?:exture(?:Type|Usage)|riangleFillMode)|V(?:ertex(?:Format|StepFunction)|isibilityResultMode)|Winding)|NSBatchDeleteRequestResultType)\\b',
      name: 'support.type.10.11.objc'
    },
    {
      match:
        '\\b(?:MT(?:KTextureLoaderArrayCallback|L(?:AttributeFormat|PatchType|S(?:amplerBorderColor|tepFunction)|Tessellation(?:ControlPointIndexType|Factor(?:Format|StepFunction)|PartitionMode)))|NSFetchedResultsChangeType)\\b',
      name: 'support.type.10.12.objc'
    },
    {
      match:
        '\\b(?:M(?:DLDataPrecision|TL(?:ArgumentBuffersTier|DeviceNotification(?:Handler|Name)|Mutability|Re(?:adWriteTextureTier|nderStages|sourceUsage)|StoreActionOptions))|NS(?:FetchIndexElementType|PersistentHistory(?:ChangeType|ResultType))|PDFDisplayDirection)\\b',
      name: 'support.type.10.13.objc'
    },
    {
      match:
        '\\bMTL(?:BarrierScope|DispatchType|IndirectCommand(?:BufferExecutionRange|Type)|Multisample(?:DepthResolveFilter|StencilResolveFilter)|StageInRegionIndirectArguments)\\b',
      name: 'support.type.10.14.objc'
    },
    {
      match:
        '\\b(?:IC(?:CameraItem(?:MetadataOption|ThumbnailOption)|Delete(?:Error|Result)|SessionOptions)|MTL(?:C(?:apture(?:Destination|Error)|o(?:mmonCounter(?:Set)?|unter(?:Result(?:Sta(?:geUtilization|tistic)|Timestamp)|SampleBufferError)))|DeviceLocation|GPUFamily|H(?:azardTrackingMode|eapType)|TextureSwizzle(?:Channels)?|VertexAmplificationViewMapping)|NSBatchInsertRequestResultType)\\b',
      name: 'support.type.10.15.objc'
    },
    {
      match:
        '\\b(?:NS(?:Accessibility(?:Orientation|RulerMarkerType|SortDirection|Units)|BackgroundActivityResult|Date(?:ComponentsFormatter(?:UnitsStyle|ZeroFormattingBehavior)|IntervalFormatterStyle)|EnergyFormatterUnit|Formatting(?:Context|UnitStyle)|GestureRecognizerState|I(?:mageResizingMode|temProviderErrorCode)|LengthFormatterUnit|MassFormatterUnit|Pr(?:essureBehavior|ocessInfoThermalState)|QualityOfService|TabViewControllerTabStyle|URLRelationship|Vi(?:ewControllerTransitionOptions|sualEffect(?:BlendingMode|Material|State))|WindowTitleVisibility)|WK(?:ErrorCode|Navigation(?:ActionPolicy|ResponsePolicy|Type)|UserScriptInjectionTime))\\b',
      name: 'support.type.cocoa.10.10.objc'
    },
    {
      match:
        '\\bNS(?:AppleEventSendOptions|Co(?:llection(?:ElementCategory|UpdateAction|View(?:ItemHighlightState|ScrollDirection))|ntrolCharacterAction)|D(?:ataAssetName|ecodingFailurePolicy)|FileManagerUnmountOptions|GlyphProperty|HapticFeedbackP(?:attern|erformanceTime)|PersonNameComponentsFormatter(?:Options|Style)|S(?:p(?:litViewItem(?:Behavior|CollapseBehavior)|ringLoading(?:Highlight|Options))|tackViewDistribution)|T(?:able(?:RowActionEdge|ViewRowActionStyle)|extStorageEditActions)|WritingDirectionFormatType)\\b',
      name: 'support.type.cocoa.10.11.objc'
    },
    {
      match:
        '\\b(?:NS(?:CloudKitSharingServiceOptions|DisplayGamut|Grid(?:CellPlacement|RowAlignment)|ImageLayoutDirection|MeasurementFormatterUnitOptions|PasteboardContentsOptions|S(?:crubber(?:Alignment|Mode)|liderAccessoryWidth|tatusItemBehavior)|T(?:ab(?:Position|ViewBorderType)|ouch(?:BarItemPriority|Type(?:Mask)?))|URLSessionTaskMetricsResourceFetchType|Window(?:ListOptions|TabbingMode|UserTabbingPreference))|WK(?:AudiovisualMediaTypes|UserInterfaceDirectionPolicy))\\b',
      name: 'support.type.cocoa.10.12.objc'
    },
    {
      match:
        '\\bNS(?:Accessibility(?:AnnotationPosition|CustomRotor(?:SearchDirection|Type))|FontAssetRequestOptions|ItemProvider(?:FileOptions|RepresentationVisibility)|SegmentDistribution|URLSessionDelayedRequestDisposition)\\b',
      name: 'support.type.cocoa.10.13.objc'
    },
    {
      match:
        '\\b(?:NS(?:ColorSystemEffect|WorkspaceAuthorizationType)|UN(?:A(?:lertStyle|uthorization(?:Options|Status))|ErrorCode|Notification(?:ActionOptions|CategoryOptions|PresentationOptions|Setting)|ShowPreviewsSetting))\\b',
      name: 'support.type.cocoa.10.14.objc'
    },
    {
      match:
        '\\bNS(?:AttributedStringCompletionHandler|Collection(?:ChangeType|LayoutSectionOrthogonalScrollingBehavior)|D(?:ataCompressionAlgorithm|irectional(?:EdgeInsets|RectEdge))|OrderedCollectionDifferenceCalculationOptions|PickerTouchBarItem(?:ControlRepresentation|SelectionMode)|Re(?:ctAlignment|lativeDateTimeFormatter(?:Style|UnitsStyle))|T(?:extScalingType|oolbarItemGroup(?:ControlRepresentation|SelectionMode))|URL(?:ErrorNetworkUnavailableReason|SessionWebSocket(?:CloseCode|MessageType)))\\b',
      name: 'support.type.cocoa.10.15.objc'
    },
    {
      match:
        '\\bNS(?:PageControllerTransitionStyle|SharingContentScope|XPCConnectionOptions)\\b',
      name: 'support.type.cocoa.10.8.objc'
    },
    {
      match:
        '\\bNS(?:A(?:c(?:cessibilityPriorityLevel|tivityOptions)|pplicationOcclusionState)|DataBase64(?:DecodingOptions|EncodingOptions)|MediaLibrary|P(?:DFPanelOptions|aperOrientation)|StackView(?:Gravity|VisibilityPriority)|U(?:RLSession(?:AuthChallengeDisposition|ResponseDisposition|TaskState)|serInterfaceLayoutOrientation)|WindowOcclusionState|XMLParserExternalEntityResolvingPolicy)\\b',
      name: 'support.type.cocoa.10.9.objc'
    },
    {
      match:
        '\\b(?:AB(?:P(?:eoplePickerSelectionBehavior|ropertyType)|SearchCo(?:mparison|njunction))|DOM(?:ObjectInternal|TimeStamp)|NS(?:A(?:boutPanelOptionKey|c(?:cessibility(?:A(?:ctionName|nnotation(?:AttributeKey|Position)|ttributeName)|CustomRotor(?:SearchDirection|Type)|FontAttributeKey|LoadingToken|Notification(?:Name|UserInfoKey)|Orientation(?:Value)?|P(?:arameterizedAttributeName|riorityLevel)|R(?:ole|uler(?:MarkerType(?:Value)?|UnitValue))|S(?:ortDirection(?:Value)?|ubrole)|Units)|tivityOptions)|ffineTransformStruct|l(?:ertStyle|ignmentOptions)|nimat(?:ablePropertyKey|ion(?:BlockingMode|Curve|Effect|Progress))|pp(?:KitVersion|earanceName|l(?:eEvent(?:ManagerSuspensionID|SendOptions)|ication(?:Activation(?:Options|Policy)|DelegateReply|OcclusionState|Pr(?:esentationOptions|intReply)|TerminateReply)))|ttributedString(?:Document(?:AttributeKey|ReadingOptionKey|Type)|EnumerationOptions|Key)|utoresizingMaskOptions)|B(?:ack(?:ground(?:Activity(?:CompletionHandler|Result)|Style)|ingStoreType)|ez(?:elStyle|ierPathElement)|i(?:n(?:arySearchingOptions|ding(?:InfoKey|Name|Option))|tmap(?:Format|Image(?:FileType|RepPropertyKey)))|o(?:rderType|xType)|rowser(?:Column(?:ResizingType|sAutosaveName)|DropOperation)|uttonType|yteCountFormatter(?:CountStyle|Units))|C(?:al(?:culationError|endar(?:Identifier|Options|Unit))|ell(?:Attribute|HitResult|ImagePosition|StyleMask|Type)|haracterCollection|loudKitSharingServiceOptions|o(?:l(?:lection(?:ChangeType|ElementCategory|Layout(?:GroupCustomItemProvider|Section(?:OrthogonalScrollingBehavior|VisibleItemsInvalidationHandler))|UpdateAction|View(?:CompositionalLayoutSectionProvider|D(?:ecorationElementKind|iffableDataSource(?:ItemProvider|SupplementaryViewProvider)|ropOperation)|ItemHighlightState|S(?:croll(?:Direction|Position)|upplementaryElementKind)|TransitionLayoutAnimatedKey))|or(?:ListName|Name|Panel(?:Mode|Options)|RenderingIntent|S(?:pace(?:Model|Name)|ystemEffect)|Type))|mp(?:ar(?:ator|ison(?:Predicate(?:Modifier|Options)|Result))|o(?:sitingOperation|undPredicateType))|ntrol(?:CharacterAction|S(?:ize|tateValue)|Tint)|rrection(?:IndicatorType|Response)))|D(?:at(?:a(?:Base64(?:DecodingOptions|EncodingOptions)|CompressionAlgorithm|ReadingOptions|SearchOptions|WritingOptions)|e(?:ComponentsFormatter(?:UnitsStyle|ZeroFormattingBehavior)|Formatter(?:Behavior|Style)|IntervalFormatterStyle|Picker(?:ElementFlags|Mode|Style)))|e(?:c(?:imal|odingFailurePolicy)|finition(?:OptionKey|PresentationType)|viceDescriptionKey)|i(?:rect(?:ional(?:EdgeInsets|RectEdge)|oryEnumerationOptions)|s(?:playGamut|tributedNotification(?:CenterType|Options)))|ocumentChangeType|ra(?:g(?:Operation|ging(?:Context|Formation|I(?:mageComponentKey|temEnumerationOptions)))|werState))|E(?:dgeInsets|n(?:ergyFormatterUnit|umerationOptions)|rror(?:Domain|UserInfoKey)|vent(?:ButtonMask|GestureAxis|M(?:ask|odifierFlags)|Phase|S(?:ubtype|wipeTrackingOptions)|Type)|x(?:ceptionName|pressionType))|F(?:astEnumerationState|i(?:le(?:Attribute(?:Key|Type)|Coordinator(?:ReadingOptions|WritingOptions)|Manager(?:ItemReplacementOptions|UnmountOptions)|Pro(?:tectionType|viderServiceName)|Version(?:AddingOptions|ReplacingOptions)|Wrapper(?:ReadingOptions|WritingOptions))|ndPanel(?:Action|SubstringMatchType))|o(?:cusRing(?:Placement|Type)|nt(?:A(?:ction|ssetRequestOptions)|Collection(?:ActionTypeKey|MatchingOptionKey|Name|Options|UserInfoKey|Visibility)|Descriptor(?:AttributeName|FeatureKey|Sy(?:mbolicTraits|stemDesign)|TraitKey|VariationKey)|FamilyClass|PanelModeMask|RenderingMode|SymbolicTraits|TraitMask|Weight)|rmatting(?:Context|UnitStyle)))|G(?:estureRecognizerState|lyph(?:Inscription|Property)?|r(?:a(?:dient(?:DrawingOptions|Type)|phicsContext(?:AttributeKey|RepresentationFormatName))|id(?:CellPlacement|RowAlignment)))|H(?:TTPCookie(?:AcceptPolicy|PropertyKey|StringPolicy)|a(?:pticFeedbackP(?:attern|erformanceTime)|sh(?:Enumerator|Table(?:CallBacks|Options)))|elp(?:AnchorName|BookName|ManagerContextHelpKey))|I(?:SO8601DateFormatOptions|mage(?:Alignment|CacheMode|FrameStyle|HintKey|Interpolation|L(?:ayoutDirection|oadStatus)|Name|Re(?:pLoadStatus|sizingMode)|Scaling)|nsertionPosition|temProvider(?:CompletionHandler|ErrorCode|FileOptions|LoadHandler|RepresentationVisibility))|JSON(?:ReadingOptions|WritingOptions)|KeyValue(?:Change(?:Key)?|O(?:bservingOptions|perator)|SetMutationKind)|L(?:ayout(?:Attribute|ConstraintOrientation|FormatOptions|Priority|Relation)|e(?:ngthFormatterUnit|velIndicator(?:PlaceholderVisibility|Style))|in(?:e(?:BreakMode|CapStyle|JoinStyle|MovementDirection|SweepDirection)|guisticTag(?:Scheme|ger(?:Options|Unit))?)|ocale(?:Key|LanguageDirection))|M(?:a(?:chPortOptions|p(?:Enumerator|Table(?:KeyCallBacks|Options|ValueCallBacks))|ssFormatterUnit|t(?:ching(?:Flags|Options)|rixMode))|e(?:asurementFormatterUnitOptions|diaLibrary|nuProperties)|odal(?:Response|Session)|ultibyteGlyphPacking)|N(?:etService(?:Options|sError)|ibName|otification(?:Coalescing|Name|SuspensionBehavior)|umberFormatter(?:Behavior|PadPosition|RoundingMode|Style))|O(?:pe(?:nGL(?:ContextParameter|GlobalOption)|rati(?:ngSystemVersion|onQueuePriority))|rderedCollectionDifferenceCalculationOptions)|P(?:DFPanelOptions|a(?:geController(?:ObjectIdentifier|TransitionStyle)|perOrientation|steboard(?:ContentsOptions|Name|ReadingOption(?:Key|s)|Type(?:FindPanelSearchOptionKey|TextFinderOptionKey)?|WritingOptions)|thStyle)|ersonNameComponentsFormatter(?:Options|Style)|ickerTouchBarItem(?:ControlRepresentation|SelectionMode)|o(?:int(?:Array|Pointer|erFunctionsOptions|ingDeviceType)?|p(?:UpArrowPosition|over(?:Appearance|Behavior|CloseReasonValue))|stingStyle)|r(?:e(?:dicateOperatorType|ssureBehavior)|int(?:Info(?:AttributeKey|SettingKey)|JobDispositionValue|Panel(?:AccessorySummaryKey|JobStyleHint|Options)|RenderingQuality|er(?:PaperName|T(?:ableStatus|ypeName))|ing(?:Orientation|Pag(?:eOrder|inationMode)))|o(?:cessInfoThermalState|gress(?:FileOperationKind|Indicator(?:Style|Thickness)|Kind|PublishingHandler|U(?:npublishingHandler|serInfoKey))|pertyList(?:Format|MutabilityOptions|ReadOptions|WriteOptions))))|QualityOfService|R(?:ange(?:Pointer)?|e(?:ct(?:A(?:lignment|rray)|Edge|Pointer)?|gularExpressionOptions|lative(?:DateTimeFormatter(?:Style|UnitsStyle)|Position)|moteNotificationType|questUserAttentionType)|oundingMode|u(?:le(?:Editor(?:NestingMode|PredicatePartKey|RowType)|r(?:Orientation|ViewUnitName))|nLoopMode))|S(?:aveOp(?:erationType|tions)|cr(?:oll(?:ArrowPosition|Elasticity|ViewFindBarPosition|er(?:Arrow|KnobStyle|Part|Style))|ubber(?:Alignment|Mode))|e(?:arch(?:FieldRecentsAutosaveName|PathD(?:irectory|omainMask))|gment(?:Distribution|S(?:tyle|witchTracking))|lection(?:Affinity|Direction|Granularity)|rviceProviderName)|haring(?:ContentScope|ServiceName)|ize(?:Array|Pointer)?|liderType|o(?:cketNativeHandle|rtOptions|und(?:Name|PlaybackDeviceIdentifier))|p(?:e(?:ech(?:Boundary|CommandDelimiterKey|DictionaryKey|ErrorKey|Mode|P(?:honemeInfoKey|ropertyKey)|S(?:tatusKey|ynthesizer(?:InfoKey|VoiceName)))|llingState)|litView(?:AutosaveName|DividerStyle|Item(?:Behavior|CollapseBehavior))|ringLoading(?:Highlight|Options))|t(?:a(?:ckView(?:Distribution|Gravity)|tusItem(?:AutosaveName|Behavior))|oryboard(?:ControllerCreator|Name|S(?:ceneIdentifier|egueIdentifier))|r(?:eam(?:Event|NetworkServiceTypeValue|PropertyKey|S(?:OCKSProxy(?:Configuration|Version)|ocketSecurityLevel|tatus))|ing(?:CompareOptions|DrawingOptions|En(?:coding(?:ConversionOptions|DetectionOptionsKey)?|umerationOptions)|Transform)))|wapped(?:Double|Float))|T(?:IFFCompression|a(?:b(?:Position|State|View(?:BorderType|ControllerTabStyle|Type)|le(?:ColumnResizingOptions|RowActionEdge|View(?:A(?:nimationOptions|utosaveName)|ColumnAutoresizingStyle|Dr(?:aggingDestinationFeedbackStyle|opOperation)|GridLineStyle|Row(?:ActionStyle|SizeStyle)|SelectionHighlightStyle)))|skTerminationReason)|e(?:stComparisonOperation|xt(?:Alignment|Block(?:Dimension|Layer|V(?:alueType|erticalAlignment))|Checking(?:Key|OptionKey|Type(?:s)?)|EffectStyle|Fi(?:eldBezelStyle|nder(?:Action|MatchingType))|Input(?:SourceIdentifier|TraitType)|L(?:ayout(?:Orientation|SectionKey)|ist(?:MarkerFormat|Options))|Movement|S(?:calingType|torageEdit(?:Actions|edOptions))|Tab(?:OptionKey|Type|leLayoutAlgorithm)))|hreadPrivate|i(?:ckMarkPosition|me(?:Interval|ZoneNameStyle)|tlePosition)|o(?:kenStyle|ol(?:TipTag|bar(?:DisplayMode|I(?:dentifier|tem(?:Group(?:ControlRepresentation|SelectionMode)|Identifier|VisibilityPriority))|SizeMode))|uch(?:Bar(?:CustomizationIdentifier|ItemIdentifier)|Phase|Type(?:Mask)?))|racking(?:AreaOptions|RectTag)|ypesetter(?:Behavior|ControlCharacterAction))|U(?:RL(?:Bookmark(?:CreationOptions|FileCreationOptions|ResolutionOptions)|C(?:acheStoragePolicy|redentialPersistence)|ErrorNetworkUnavailableReason|File(?:ProtectionType|ResourceType)|HandleStatus|Re(?:lationship|quest(?:CachePolicy|NetworkServiceType)|sourceKey)|Session(?:AuthChallengeDisposition|DelayedRequestDisposition|MultipathServiceType|ResponseDisposition|Task(?:MetricsResourceFetchType|State)|WebSocket(?:CloseCode|MessageType))|ThumbnailDictionaryItem|Ubiquitous(?:ItemDownloadingStatus|SharedItem(?:Permissions|Role)))|n(?:caughtExceptionHandler|derlineStyle)|s(?:ableScrollerParts|er(?:A(?:ctivityPersistentIdentifier|ppleScriptTaskCompletionHandler|utomatorTaskCompletionHandler)|Interface(?:ItemIdentifier|Layout(?:Direction|Orientation))|NotificationActivationType|ScriptTaskCompletionHandler|UnixTaskCompletionHandler)))|V(?:alueTransformerName|i(?:ew(?:Animation(?:EffectName|Key)|ControllerTransitionOptions|FullScreenModeOptionKey|LayerContents(?:Placement|RedrawPolicy))|sualEffect(?:BlendingMode|Material|State))|o(?:ice(?:AttributeKey|GenderName)|lumeEnumerationOptions))|W(?:hoseSubelementIdentifier|ind(?:ingRule|ow(?:AnimationBehavior|B(?:ackingLocation|utton)|CollectionBehavior|Depth|FrameAutosaveName|L(?:evel|istOptions)|NumberListOptions|O(?:cclusionState|rderingMode)|PersistableFrameDescriptor|S(?:haringType|tyleMask)|T(?:abbing(?:Identifier|Mode)|itleVisibility)|UserTabbingPreference))|orkspace(?:AuthorizationType|DesktopImageOptionKey|IconCreationOptions|LaunchOptions)|ritingDirection(?:FormatType)?)|X(?:ML(?:D(?:TDNodeKind|ocumentContentKind)|Node(?:Kind|Options)|ParserE(?:rror|xternalEntityResolvingPolicy))|PCConnectionOptions)|Zone)|UN(?:A(?:lertStyle|uthorization(?:Options|Status))|ErrorCode|Notification(?:ActionOptions|CategoryOptions|PresentationOptions|S(?:etting|oundName))|ShowPreviewsSetting)|W(?:K(?:AudiovisualMediaTypes|ContentMode|ErrorCode|Navigation(?:ActionPolicy|ResponsePolicy|Type)|User(?:InterfaceDirectionPolicy|ScriptInjectionTime))|eb(?:CacheModel|Drag(?:DestinationAction|SourceAction)|NavigationType|PreferencesPrivate|ViewInsertAction))|unichar)\\b',
      name: 'support.type.cocoa.objc'
    },
    {
      match:
        '\\b(?:A(?:M(?:ErrorCode|LogLevel)|U(?:Audio(?:ChannelCount|FrameCount|ObjectID|Unit(?:BusType|Status))|EventSampleTime|Host(?:MusicalContextBlock|TransportState(?:Block|Flags))|I(?:mplementor(?:DisplayNameWithLengthCallback|StringFromValueCallback|Value(?:FromStringCallback|Observer|Provider))|n(?:putHandler|ternalRenderBlock))|MIDI(?:CIProfileChangedBlock|Event|OutputEventBlock)|Parameter(?:A(?:ddress|utomation(?:Event(?:Type)?|Observer))|Event|Observer(?:Token)?|RecordingObserver)|Re(?:cordedParameterEvent|nder(?:Block|Event(?:Header|Type)?|Observer|PullInputBlock))|Schedule(?:MIDIEventBlock|ParameterBlock)|Value)|uthorization(?:C(?:allbacks|ontextFlags)|EngineRef|Mechanism(?:Id|Ref)|Plugin(?:I(?:d|nterface)|Ref)|Result|SessionId|Value(?:Vector)?))|Bluetooth(?:A(?:FH(?:HostChannelClassification|Mode|Results)|MP(?:C(?:ommandRejectReason|reatePhysicalLinkResponseStatus)|Disco(?:nnectPhysicalLinkResponseStatus|verResponseControllerStatus)|Get(?:AssocResponseStatus|InfoResponseStatus)|ManagerCode)|irMode|llowRoleSwitch|uthenticationRequirements(?:Values)?)|C(?:l(?:assOfDevice|ockOffset)|o(?:mpanyIdentifers|nnectionHandle))|Device(?:Address|ClassM(?:ajor|inor)|Name)|E(?:n(?:cryptionEnable|hancedSynchronousConnectionInfo)|ventFilterCondition)|FeatureBits|HCI(?:A(?:CLDataByteCount|FHChannelAssessmentMode(?:s)?|cceptSynchronousConnectionRequestParams|ut(?:henti(?:cationEnable|onEnableModes)|omaticFlushTimeout(?:Info)?))|BufferSize|C(?:o(?:mmandOpCode(?:Command|Group)?|n(?:nection(?:AcceptTimeout|Mode(?:s)?)|tentFormat)|untryCode)|urrentInquiryAccessCodes(?:ForWrite)?)|D(?:ataID|eleteStoredLinkKeyFlag(?:s)?)|E(?:n(?:cryption(?:KeySize(?:Info)?|Mode(?:s)?)|hanced(?:AcceptSynchronousConnectionRequestParams|SetupSynchronousConnectionParams))|rroneousDataReporting|vent(?:AuthenticationCompleteResults|C(?:hangeConnectionLinkKeyCompleteResults|o(?:de|nnection(?:CompleteResults|PacketTypeResults|RequestResults)))|D(?:ataBufferOverflowResults|isconnectionCompleteResults)|Encryption(?:ChangeResults|KeyRefreshCompleteResults)|Fl(?:owSpecificationData|ushOccurredResults)|HardwareErrorResults|ID|L(?:E(?:Connection(?:CompleteResults|UpdateCompleteResults)|EnhancedConnectionCompleteResults|LongTermKeyRequestResults|MetaResults|ReadRemoteUsedFeaturesCompleteResults)|inkKeyNotificationResults)|M(?:a(?:s(?:k|terLinkKeyCompleteResults)|xSlotsChangeResults)|odeChangeResults)|PageScan(?:ModeChangeResults|RepetitionModeChangeResults)|QoS(?:SetupCompleteResults|ViolationResults)|R(?:e(?:ad(?:ClockOffsetResults|ExtendedFeaturesResults|Remote(?:ExtendedFeaturesResults|SupportedFeaturesResults|VersionInfoResults)|SupportedFeaturesResults)|moteNameRequestResults|turnLinkKeysResults)|oleChangeResults)|S(?:implePairingCompleteResults|niffSubratingResults|tatus|ynchronousConnectionC(?:hangedResults|ompleteResults))|VendorSpecificResults)|xtended(?:FeaturesInfo|InquiryRes(?:ponse(?:DataType(?:s)?)?|ult)))|F(?:ECRequired(?:Values)?|ailedContact(?:Count|Info)|lowControlState)|GeneralFlowControlStates|HoldModeActivity(?:States)?|In(?:put(?:Bandwidth|Cod(?:edDataSize|ingFormat)|DataPath|PCM(?:DataFormat|SamplePayloadMSBPosition)|TransportUnitSize)|quiry(?:AccessCode(?:Count)?|Length|Mode(?:s)?|Result(?:s)?|ScanType(?:s)?|WithRSSIResult(?:s)?))|L(?:E(?:BufferSize|SupportedFeatures|UsedFeatures)|ink(?:PolicySettings(?:Info|Values)?|Quality(?:Info)?|SupervisionTimeout)|oopbackMode)|M(?:axLatency|odeInterval)|Num(?:BroadcastRetransmissions|LinkKeys(?:Deleted|ToWrite))|O(?:perationID|utput(?:Bandwidth|Cod(?:edDataSize|ingFormat)|DataPath|PCM(?:DataFormat|SamplePayloadMSBPosition)|TransportUnitSize))|P(?:a(?:ge(?:Number|Scan(?:EnableState(?:s)?|Mode(?:s)?|PeriodMode(?:s)?|Type(?:s)?)|Timeout)|r(?:amByteCount|kModeBeaconInterval))|owerState)|Q(?:oSFlags|ualityOfServiceSetupParams)|R(?:SSI(?:Info|Value)|e(?:ad(?:ExtendedInquiryResponseResults|L(?:MPHandleResults|ocalOOBDataResults)|StoredLinkKeysFlag(?:s)?)|ceive(?:Bandwidth|Cod(?:ecFrameSize|ingFormat))|quest(?:CallbackInfo|ID)|sponseCount|transmissionEffort(?:Types)?)|ole(?:Info|s)?)|S(?:CO(?:DataByteCount|FlowControlStates)|canActivity|etupSynchronousConnectionParams|i(?:gnalID|mplePairing(?:Mode(?:s)?|OOBData))|niff(?:AttemptCount|Timeout)|t(?:atus|oredLinkKeysInfo)|upported(?:Commands|Features|IAC))|T(?:imeoutValues|rans(?:mit(?:Bandwidth|Cod(?:ecFrameSize|ingFormat)|PowerLevel(?:Info|Type)?|ReadPowerLevelTypes)|port(?:CommandID|ID)))|V(?:e(?:ndorCommandSelector|rsion(?:Info|s))|oiceSetting))|I(?:OCapabilit(?:ies|y(?:Response)?)|RK)|Key(?:Flag|Type|boardReturnType|pressNotification(?:Type(?:s)?)?)?|L(?:2CAP(?:ByteCount|C(?:hannelID|o(?:mmand(?:ByteCount|Code|ID|RejectReason)|n(?:figuration(?:Option|Re(?:sult|transmissionAndFlowControlFlags))|nection(?:Result|Status))))|FlushTimeout|GroupID|Information(?:ExtendedFeaturesMask|Result|Type)|LinkTimeout|MTU|PSM|Q(?:oSType|ualityOfServiceOptions)|RetransmissionAndFlowControlOptions|S(?:egmentationAndReassembly|upervisoryFuctionType))|AP|E(?:Ad(?:dressType|vertisingType)|ConnectionInterval|FeatureBits|S(?:can(?:DuplicateFilter|Filter|Type)?|ecurityManager(?:CommandCode|IOCapability|Key(?:DistributionFormat|pressNotificationType)|OOBData|PairingFailedReasonCode|User(?:InputCapability|OutputCapability))))|MP(?:Handle|Subversion|Version(?:s)?)|inkType(?:s)?)|Ma(?:nufacturerName|xSlots)|NumericValue|OOBDataPresence(?:Values)?|P(?:IN(?:Code|Type)|a(?:cketType|geScan(?:Mode|PeriodMode|RepetitionMode)|sskey))|R(?:FCOMM(?:ChannelID|LineStatus|MTU|ParityType)|e(?:a(?:dClockInfo|sonCode)|moteHostSupportedFeaturesNotification)|ole)|S(?:DP(?:DataElement(?:SizeDescriptor|TypeDescriptor)|ErrorCode|PDUID|Service(?:AttributeID|RecordHandle)|TransactionID|UUID(?:16|32))|e(?:rviceClassMajor|tEventMask)|implePairingDebugMode(?:s)?|ynchronousConnectionInfo)|Transport(?:Info(?:Ptr)?|Types)|User(?:ConfirmationRequest|PasskeyNotification))|C(?:A(?:A(?:nimation(?:CalculationMode|RotationMode)|utoresizingMask)|Co(?:nstraintAttribute|rnerMask)|E(?:dgeAntialiasingMask|mitterLayer(?:Emitter(?:Mode|Shape)|RenderMode))|GradientLayerType|LayerCo(?:ntents(?:F(?:ilter|ormat)|Gravity)|rnerCurve)|MediaTimingF(?:illMode|unction(?:Name|Private))|OpenGLLayerPrivate|RendererPriv|S(?:crollLayerScrollMode|hapeLayer(?:FillRule|Line(?:Cap|Join)))|T(?:extLayer(?:AlignmentMode|Private|TruncationMode)|ransition(?:Subtype|Type))|ValueFunctionName)|I(?:ContextOption|DataMatrixCodeECCVersion|F(?:ilterGeneratorStruct|ormat)|Image(?:AutoAdjustmentOption|Option|RepresentationOption)|KernelROICallback|QRCodeErrorCorrectionLevel|R(?:AWFilterOption|enderDestinationAlphaMode))|X(?:Call(?:Directory(?:EnabledStatus|PhoneNumber)|EndedReason)|ErrorCode(?:CallDirectoryManagerError|IncomingCallError|RequestTransactionError)?|HandleType|PlayDTMFCallActionType)|al(?:Priority|RecurrenceType))|DRFile(?:Fork|systemInclusionMask)|FTSFileType|I(?:C(?:D(?:evice(?:Capability|Location(?:Options|Type(?:Mask)?)|Status|T(?:ransport|ype(?:Mask)?))|ownloadOption)|EXIFOrientationType|LegacyReturnCode|Return(?:Co(?:de(?:Offset)?|nnectionErrorCode)|DownloadErrorCode|MetadataErrorCode|ObjectErrorCode|PTPDeviceErrorCode|ThumbnailErrorCode)|Scanner(?:BitDepth|ColorDataFormatType|DocumentType|F(?:eatureType|unctionalUnit(?:State|Type))|MeasurementUnit|PixelDataType|TransferMode)|UploadOption)|K(?:CameraDeviceView(?:DisplayMode|TransferMode)|DeviceBrowserViewDisplayMode|ImageBrowser(?:CellState|DropOperation)|ScannerDeviceView(?:DisplayMode|TransferMode))|MKLocationToOffsetMappingMode|O(?:Bluetooth(?:Device(?:Ref|Se(?:arch(?:Attributes|DeviceAttributes|Options(?:Bits)?|Types(?:Bits)?)|lectorControllerRef))|HandsFree(?:AudioGatewayFeatures|C(?:allHoldModes|odecID)|DeviceFeatures|PDUMessageStatus|SMSSupport)|L2CAPChannel(?:DataBlock|Event(?:Type)?|Incoming(?:DataListener|EventListener)|Ref)|O(?:BEXSessionOpenConnectionCallback|bject(?:ID|Ref))|PairingControllerRef|RFCOMMChannelRef|S(?:DP(?:DataElementRef|ServiceRecordRef|UUIDRef)|MSMode|erviceBrowserController(?:Options|Ref))|UserNotification(?:C(?:allback|hannelDirection)|Ref))|DataQueue(?:Appendix|Entry|Memory)|SurfacePropertyKey))|M(?:DL(?:A(?:nimatedValueInterpolation|xisAlignedBoundingBox)|CameraProjection|DataPrecision|GeometryType|IndexBitDepth|LightType|M(?:aterial(?:Face|MipMapFilterMode|PropertyType|Semantic|Texture(?:FilterMode|WrapMode))|eshBufferType)|ProbePlacement|T(?:extureChannelEncoding|ransformOpRotationOrder)|V(?:ertexFormat|oxelIndex(?:Extent)?))|IDIChannelNumber|T(?:K(?:ModelError|TextureLoader(?:C(?:allback|ubeLayout)|Error|O(?:ption|rigin)))|L(?:A(?:rgument(?:Access|BuffersTier|Type)|ttributeFormat|utoreleased(?:Argument|ComputePipelineReflection|RenderPipelineReflection))|B(?:arrierScope|l(?:end(?:Factor|Operation)|itOption))|C(?:PUCacheMode|apture(?:Destination|Error)|learColor|o(?:lorWriteMask|m(?:mandBuffer(?:Error|Handler|Status)|pareFunction)|ordinate2D|unterSampleBufferError)|ullMode)|D(?:ataType|e(?:pthClipMode|viceLocation)|ispatchT(?:hreadgroupsIndirectArguments|ype)|raw(?:IndexedPrimitivesIndirectArguments|P(?:atchIndirectArguments|rimitivesIndirectArguments)|ablePresentedHandler))|F(?:eatureSet|unctionType)|GPUFamily|H(?:azardTrackingMode|eapType)|Ind(?:exType|irectCommandType)|L(?:anguageVersion|ibraryError|oadAction)|Mu(?:ltisample(?:DepthResolveFilter|StencilResolveFilter)|tability)|New(?:ComputePipelineState(?:CompletionHandler|WithReflectionCompletionHandler)|LibraryCompletionHandler|RenderPipelineState(?:CompletionHandler|WithReflectionCompletionHandler))|Origin|P(?:atchType|i(?:pelineOption|xelFormat)|rimitiveT(?:opologyClass|ype)|urgeableState)|QuadTessellationFactorsHalf|Re(?:adWriteTextureTier|gion|nderStages|source(?:Options|Usage))|S(?:ample(?:Position|r(?:AddressMode|BorderColor|Mi(?:nMagFilter|pFilter)))|cissorRect|hared(?:Event(?:HandlePrivate|NotificationBlock)|TextureHandlePrivate)|ize(?:AndAlign)?|t(?:e(?:ncilOperation|pFunction)|or(?:ageMode|eAction(?:Options)?)))|T(?:e(?:ssellation(?:ControlPointIndexType|Factor(?:Format|StepFunction)|PartitionMode)|xture(?:Swizzle|Type|Usage))|riangle(?:FillMode|TessellationFactorsHalf))|V(?:ertex(?:Format|StepFunction)|i(?:ewport|sibilityResultMode))|Winding)))|NS(?:AttributeType|Batch(?:DeleteRequestResultType|InsertRequestResultType|UpdateRequestResultType)|DeleteRule|EntityMappingType|Fetch(?:IndexElementType|RequestResultType|edResultsChangeType)|M(?:anagedObjectContextConcurrencyType|ergePolicyType)|P(?:ersistent(?:CloudKitContainerSchemaInitializationOptions|History(?:ChangeType|ResultType)|Store(?:AsynchronousFetchResultCompletionBlock|RequestType|UbiquitousTransitionType))|referencePaneUnselectReply)|SnapshotEventType)|O(?:BEX(?:AbortCommand(?:Data|ResponseData)|Con(?:nect(?:Command(?:Data|ResponseData)|FlagValues)|stants)|DisconnectCommand(?:Data|ResponseData)|Error(?:Codes|Data)?|Flags|GetCommand(?:Data|ResponseData)|HeaderIdentifier(?:s)?|MaxPacketLength|NonceFlagValues|OpCode(?:CommandValues|ResponseValues|SessionValues)?|Put(?:Command(?:Data|ResponseData)|FlagValues)|RealmValues|Se(?:ssion(?:Event(?:Callback|Type(?:s)?)?|ParameterTags|Ref)|tPathCommand(?:Data|ResponseData))|TransportEvent(?:Type(?:s)?)?|Version(?:s)?)|SA(?:LanguageFeatures|S(?:criptState|torageOptions))|paque(?:IOBluetoothObjectRef|OBEXSessionRef|PrivOBEXSessionData))|P(?:DF(?:A(?:ctionNamedName|nnotation(?:HighlightingMode|Key|LineEndingStyle|Subtype|TextIconType|WidgetSubtype)|ppearanceCharacteristicsKey|reaOfInterest)|Border(?:Key|Style)|D(?:isplay(?:Box|Direction|Mode)|ocument(?:Attribute|Permissions|WriteOption))|InterpolationQuality|LineStyle|MarkupType|PrintScalingMode|TextAnnotationIconType|WidgetC(?:ellState|ontrolType))|r(?:ivOBEXSessionDataRef|otocolParameters))|QLPreviewViewStyle|S(?:DP(?:Attribute(?:DeviceIdentificationRecord|IdentifierCodes)|ServiceClasses)|F(?:AuthorizationViewState|ButtonType|ViewType))|TransmissionPower)\\b',
      name: 'support.type.objc'
    },
    {
      match:
        '\\b(?:BOOL|C(?:ategory|lass)|I(?:MP|var)|Method|NS(?:Integer|UInteger)|SEL|id|mach_header|objc_(?:AssociationPolicy|c(?:ategory|lass)|func_loadImage|hook_(?:get(?:Class|ImageName)|setAssociatedObject)|ivar|method(?:_(?:description|list))?|object(?:ptr_t)?|property(?:_(?:attribute_t|t))?|selector))\\b',
      name: 'support.type.run-time.objc'
    },
    {
      match:
        '\\b(?:CIDetector(?:AspectRatio|FocalLength|Type(?:QRCode|Rectangle))|kCII(?:mageAutoAdjust(?:Crop|Level)|nput(?:ColorNoiseReductionAmountKey|EnableVendorLensCorrectionKey|LuminanceNoiseReductionAmountKey|NoiseReduction(?:ContrastAmountKey|DetailAmountKey|SharpnessAmountKey))))\\b',
      name: 'support.variable.10.10.objc'
    },
    {
      match:
        '\\b(?:CIDetector(?:NumberOfAngles|ReturnSubFeatures|TypeText)|MT(?:K(?:ModelError(?:Domain|Key)|TextureLoader(?:Error(?:Domain|Key)|Option(?:AllocateMipmaps|SRGB|Texture(?:CPUCacheMode|Usage))))|L(?:CommandBufferErrorDomain|LibraryErrorDomain))|k(?:CI(?:Attribute(?:FilterAvailable_(?:Mac|iOS)|Type(?:Color|Image|Transform))|ContextHighQualityDownsample|Format(?:A(?:16|8|BGR8|f|h)|R(?:16|8|G(?:16|8|f|h)|f|h))|Input(?:VersionKey|WeightsKey))|UTType(?:3dObject|Alembic|Polygon|Stereolithography)))\\b',
      name: 'support.variable.10.11.objc'
    },
    {
      match:
        '\\b(?:CIDetectorMaxFeatureCount|IOSurfacePropertyKey(?:BytesPer(?:Element|Row)|CacheMode|Element(?:Height|Width)|Height|Offset|P(?:ixel(?:Format|SizeCastingAllowed)|lane(?:B(?:ase|ytesPer(?:Element|Row))|Element(?:Height|Width)|Height|Info|Offset|Size|Width))|Width)|MTKTextureLoader(?:CubeLayoutVertical|O(?:ption(?:CubeLayout|GenerateMipmaps|Origin|TextureStorageMode)|rigin(?:BottomLeft|FlippedVertically|TopLeft)))|NS(?:ManagedObjectContextQueryGenerationKey|PersistentStoreConnectionPoolMaxSizeKey)|k(?:C(?:AContentsFormat(?:Gray8Uint|RGBA(?:16Float|8Uint))|I(?:Context(?:AllowLowPower|CacheIntermediates|PriorityRequestLow)|FormatL(?:16|8|A(?:16|8|f|h)|f|h)|Input(?:BaselineExposureKey|DisableGamutMapKey)))|UTTypeUniversalSceneDescription))\\b',
      name: 'support.variable.10.12.objc'
    },
    {
      match:
        '\\b(?:MTLDevice(?:RemovalRequestedNotification|Was(?:AddedNotification|RemovedNotification))|NS(?:BinaryStore(?:InsecureDecodingCompatibilityOption|SecureDecodingClasses)|CoreDataCoreSpotlightExporter|PersistentHistoryTrackingKey)|PDF(?:A(?:nnotation(?:HighlightingMode(?:Invert|None|Outline|Push)|Key(?:A(?:ction|dditionalActions|ppearance(?:Dictionary|State))|Border(?:Style)?|Co(?:lor|ntents)|D(?:ate|e(?:faultAppearance|stination))|Flags|HighlightingMode|I(?:conName|n(?:klist|teriorColor))|Line(?:EndingStyles|Points)|Name|Open|P(?:a(?:ge|rent)|opup)|Quad(?:Points|ding)|Rect|Subtype|TextLabel|Widget(?:AppearanceDictionary|B(?:ackgroundColor|orderColor)|Caption|D(?:efaultValue|ownCaption)|Field(?:Flags|Type)|MaxLen|Options|Ro(?:lloverCaption|tation)|TextLabelUI|Value))|LineEndingStyle(?:C(?:ircle|losedArrow)|Diamond|None|OpenArrow|Square)|Subtype(?:Circle|FreeText|Highlight|Ink|Lin(?:e|k)|Popup|S(?:quare|t(?:amp|rikeOut))|Text|Underline|Widget)|TextIconType(?:Comment|Help|Insert|Key|N(?:ewParagraph|ote)|Paragraph)|WidgetSubtype(?:Button|Choice|Signature|Text))|ppearanceCharacteristicsKey(?:B(?:ackgroundColor|orderColor)|Caption|DownCaption|Ro(?:lloverCaption|tation)))|BorderKey(?:DashPattern|LineWidth|Style))|kCII(?:mage(?:A(?:pplyOrientationProperty|uxiliaryD(?:epth|isparity))|NearestSampling|Representation(?:AVDepthData|D(?:epthImage|isparityImage)))|nput(?:D(?:epthImageKey|isparityImageKey)|MoireAmountKey)))\\b',
      name: 'support.variable.10.13.objc'
    },
    {
      match:
        '\\b(?:IOSurfacePropertyKeyAllocSize|NSPersistent(?:HistoryTokenKey|Store(?:RemoteChangeNotification|URLKey))|kC(?:A(?:GradientLayerConic|RendererMetalCommandQueue)|II(?:mage(?:AuxiliaryPortraitEffectsMatte|Representation(?:AVPortraitEffectsMatte|PortraitEffectsMatteImage))|nput(?:AmountKey|EnableEDRModeKey|MatteImageKey))))\\b',
      name: 'support.variable.10.14.objc'
    },
    {
      match:
        '\\b(?:IC(?:Delete(?:Canceled|Error(?:Canceled|DeviceMissing|FileMissing|ReadOnly)|Failed|Successful)|E(?:numerationChronologicalOrder|rrorDomain)|ImageSource(?:ShouldCache|ThumbnailMaxPixelSize))|MTLC(?:aptureErrorDomain|o(?:mmonCounter(?:C(?:lipper(?:Invocations|PrimitivesOut)|omputeKernelInvocations)|Fragment(?:Cycles|Invocations|sPassed)|PostTessellationVertex(?:Cycles|Invocations)|RenderTargetWriteCycles|Set(?:Sta(?:geUtilization|tistic)|Timestamp)|T(?:essellation(?:Cycles|InputPatches)|imestamp|otalCycles)|Vertex(?:Cycles|Invocations))|unterErrorDomain))|NSPersistentStoreRemoteChangeNotificationPostOptionKey|kC(?:ACornerCurveC(?:ircular|ontinuous)|IImage(?:AuxiliarySemanticSegmentation(?:HairMatte|SkinMatte|TeethMatte)|Representation(?:AVSemanticSegmentationMattes|SemanticSegmentation(?:HairMatteImage|SkinMatteImage|TeethMatteImage)))))\\b',
      name: 'support.variable.10.15.objc'
    },
    {
      match:
        '\\b(?:CIDetector(?:ImageOrientation|MinFeatureSize|Tracking)|NSPersistentStoreForceDestroyOption|kCIImage(?:AutoAdjust(?:Enhance|Features|RedEye)|Properties))\\b',
      name: 'support.variable.10.8.objc'
    },
    {
      match:
        '\\b(?:CIDetector(?:EyeBlink|Smile)|NSPersistentStoreCoordinatorStoresWillChangeNotification)\\b',
      name: 'support.variable.10.9.objc'
    },
    {
      match:
        '\\b(?:NS(?:A(?:ccessibility(?:AlternateUIVisibleAttribute|SharedFocusElementsAttribute)|ppearanceNameVibrant(?:Dark|Light))|CalendarIdentifierIslamic(?:Tabular|UmmAlQura)|E(?:dgeInsetsZero|xtension(?:Item(?:Att(?:achmentsKey|ributed(?:ContentTextKey|TitleKey))|sAndErrorsKey)|JavaScriptPreprocessingResultsKey))|ItemProvider(?:ErrorDomain|PreferredImageSizeKey)|Metadata(?:QueryAccessibleUbiquitousExternalDocumentsScope|UbiquitousItem(?:ContainerDisplayNameKey|DownloadRequestedKey|IsExternalDocumentKey|URLInLocalContainerKey))|ProcessInfoThermalStateDidChangeNotification|StringEncodingDetection(?:AllowLossyKey|DisallowedEncodingsKey|FromWindowsKey|L(?:ikelyLanguageKey|ossySubstitutionKey)|SuggestedEncodingsKey|UseOnlySuggestedEncodingsKey)|T(?:extEffect(?:AttributeName|LetterpressStyle)|ypeIdentifier(?:AddressText|DateText|PhoneNumberText|TransitInformationText))|U(?:RL(?:AddedToDirectoryDateKey|DocumentIdentifierKey|ErrorBackgroundTaskCancelledReasonKey|GenerationIdentifierKey|QuarantinePropertiesKey|SessionTaskPriority(?:Default|High|Low)|UbiquitousItem(?:ContainerDisplayNameKey|DownloadRequestedKey))|serActivityDocumentURLKey)|WorkspaceAccessibilityDisplayOptionsDidChangeNotification)|WKErrorDomain)\\b',
      name: 'support.variable.cocoa.10.10.objc'
    },
    {
      match:
        '\\b(?:NS(?:AccessibilityListItem(?:IndexTextAttribute|LevelTextAttribute|PrefixTextAttribute)|CollectionElementKind(?:InterItemGapIndicator|Section(?:Footer|Header))|DefaultAttributesDocumentAttribute|F(?:ileManagerUnmountDissentingProcessIdentifierErrorKey|ontWeight(?:B(?:lack|old)|Heavy|Light|Medium|Regular|Semibold|Thin|UltraLight))|PersonNameComponent(?:Delimiter|FamilyName|GivenName|Key|MiddleName|Nickname|Prefix|Suffix)|S(?:plitView(?:ControllerAutomaticDimension|ItemUnspecifiedDimension)|tringTransform(?:FullwidthToHalfwidth|HiraganaToKatakana|LatinTo(?:Arabic|Cyrillic|Greek|H(?:angul|ebrew|iragana)|Katakana|Thai)|MandarinToLatin|Strip(?:CombiningMarks|Diacritics)|To(?:Latin|UnicodeName|XMLHex)))|ToolbarToggleSidebarItemIdentifier|URL(?:ApplicationIsScriptableKey|IsApplicationKey)|ViewNoIntrinsicMetric)|WKWebsiteDataType(?:Cookies|DiskCache|IndexedDBDatabases|LocalStorage|MemoryCache|OfflineWebApplicationCache|SessionStorage|WebSQLDatabases))\\b',
      name: 'support.variable.cocoa.10.11.objc'
    },
    {
      match:
        '\\bNS(?:Accessibility(?:MenuBarItemRole|RequiredAttribute|TextAlignmentAttribute)|GridViewSizeForContent|Image(?:HintUserInterfaceLayoutDirection|Name(?:Go(?:BackTemplate|ForwardTemplate)|TouchBar(?:A(?:dd(?:DetailTemplate|Template)|larmTemplate|udio(?:Input(?:MuteTemplate|Template)|Output(?:MuteTemplate|Volume(?:HighTemplate|LowTemplate|MediumTemplate|OffTemplate))))|BookmarksTemplate|Co(?:lorPicker(?:F(?:ill|ont)|Stroke)|m(?:munication(?:AudioTemplate|VideoTemplate)|poseTemplate))|D(?:eleteTemplate|ownloadTemplate)|E(?:nterFullScreenTemplate|xitFullScreenTemplate)|F(?:astForwardTemplate|older(?:CopyToTemplate|MoveToTemplate|Template))|G(?:etInfoTemplate|o(?:BackTemplate|DownTemplate|ForwardTemplate|UpTemplate))|HistoryTemplate|IconViewTemplate|ListViewTemplate|MailTemplate|New(?:FolderTemplate|MessageTemplate)|OpenInBrowserTemplate|P(?:auseTemplate|lay(?:PauseTemplate|Template|headTemplate))|QuickLookTemplate|R(?:e(?:cordSt(?:artTemplate|opTemplate)|freshTemplate|windTemplate)|otate(?:LeftTemplate|RightTemplate))|S(?:earchTemplate|hareTemplate|idebarTemplate|kip(?:Ahead(?:15SecondsTemplate|30SecondsTemplate|Template)|Back(?:15SecondsTemplate|30SecondsTemplate|Template)|To(?:EndTemplate|StartTemplate))|lideshowTemplate)|T(?:agIconTemplate|ext(?:Bo(?:ldTemplate|xTemplate)|CenterAlignTemplate|ItalicTemplate|JustifiedAlignTemplate|L(?:eftAlignTemplate|istTemplate)|RightAlignTemplate|StrikethroughTemplate|UnderlineTemplate))|User(?:AddTemplate|GroupTemplate|Template)|Volume(?:DownTemplate|UpTemplate))))|MetadataUbiquitous(?:ItemIsSharedKey|SharedItem(?:CurrentUser(?:PermissionsKey|RoleKey)|MostRecentEditorNameComponentsKey|OwnerNameComponentsKey|PermissionsRead(?:Only|Write)|Role(?:Owner|Participant)))|S(?:haringServiceNameCloudSharing|liderAccessoryWidth(?:Default|Wide)|pellCheckerDidChangeAutomatic(?:CapitalizationNotification|PeriodSubstitutionNotification|TextCompletionNotification)|treamNetworkServiceTypeCallSignaling)|T(?:extCheckingSelectedRangeKey|o(?:olbarCloudSharingItemIdentifier|uchBarItem(?:Identifier(?:C(?:andidateList|haracterPicker)|F(?:ixedSpace(?:Large|Small)|lexibleSpace)|OtherItemsProxy|Text(?:Alignment|ColorPicker|Format|List|Style))|Priority(?:High|Low|Normal))))|URL(?:CanonicalPathKey|Ubiquitous(?:ItemIsSharedKey|SharedItem(?:CurrentUser(?:PermissionsKey|RoleKey)|MostRecentEditorNameComponentsKey|OwnerNameComponentsKey|PermissionsRead(?:Only|Write)|Role(?:Owner|Participant)))|Volume(?:Is(?:EncryptedKey|RootFileSystemKey)|Supports(?:CompressionKey|ExclusiveRenamingKey|FileCloningKey|SwapRenamingKey))))\\b',
      name: 'support.variable.cocoa.10.12.objc'
    },
    {
      match:
        '\\b(?:NS(?:A(?:boutPanelOption(?:Application(?:Icon|Name|Version)|Credits|Version)|ccessibility(?:Annotation(?:Element|L(?:abel|ocation)|TextAttribute)|C(?:ollectionListSubrole|ustomTextAttribute)|LanguageTextAttribute|PageRole|SectionListSubrole|TabButtonSubrole))|ImageNameTouchBarRemoveTemplate|LocalizedFailureErrorKey|Pasteboard(?:Name(?:Drag|F(?:ind|ont)|General|Ruler)|Type(?:FileURL|URL))|RulerViewUnit(?:Centimeters|Inches|P(?:icas|oints))|Text(?:ListMarker(?:Box|C(?:heck|ircle)|D(?:ecimal|i(?:amond|sc))|Hyphen|Lowercase(?:Alpha|Hexadecimal|Latin|Roman)|Octal|Square|Uppercase(?:Alpha|Hexadecimal|Latin|Roman))|MovementUserInfoKey)|URLVolume(?:AvailableCapacityFor(?:ImportantUsageKey|OpportunisticUsageKey)|Supports(?:AccessPermissionsKey|ImmutableFilesKey)))|WKWebsiteDataType(?:FetchCache|ServiceWorkerRegistrations))\\b',
      name: 'support.variable.cocoa.10.13.objc'
    },
    {
      match:
        '\\b(?:NS(?:Appearance(?:DocumentAttribute|Name(?:AccessibilityHighContrast(?:Aqua|DarkAqua|Vibrant(?:Dark|Light))|DarkAqua))|MenuItemImportFromDeviceIdentifier|SecureUnarchiveFromDataTransformerName)|UN(?:AuthorizationOptionNone|ErrorDomain|Notification(?:A(?:ctionOptionNone|ttachmentOptionsT(?:humbnail(?:ClippingRectKey|HiddenKey|TimeKey)|ypeHintKey))|CategoryOptionNone|D(?:efaultActionIdentifier|ismissActionIdentifier)|PresentationOptionNone)))\\b',
      name: 'support.variable.cocoa.10.14.objc'
    },
    {
      match:
        '\\bNS(?:DirectionalEdgeInsetsZero|FontDescriptorSystemDesign(?:Default|Monospaced|Rounded|Serif)|HTTPCookieSameSite(?:Lax|Policy|Strict)|ReadAccessURLDocumentOption|SourceTextScalingDocument(?:Attribute|Option)|T(?:argetTextScalingDocumentOption|extScalingDocumentAttribute)|URLErrorNetworkUnavailableReasonKey)\\b',
      name: 'support.variable.cocoa.10.15.objc'
    },
    {
      match:
        '\\b(?:NS(?:A(?:ccessibilityExtrasMenuBarAttribute|pplicationLaunchUserNotificationKey)|HashTableWeakMemory|ImageNameShareTemplate|MapTableWeakMemory|S(?:crollView(?:DidEndLiveMagnifyNotification|WillStartLiveMagnifyNotification)|haringServiceName(?:AddTo(?:Aperture|IPhoto|SafariReadingList)|Compose(?:Email|Message)|SendViaAirDrop|UseAsDesktopPicture))|TextAlternatives(?:AttributeName|SelectedAlternativeStringNotification)|U(?:RL(?:IsExcludedFromBackupKey|PathKey)|biquityIdentityDidChangeNotification))|kABSocialProfileServiceSinaWeibo)\\b',
      name: 'support.variable.cocoa.10.8.objc'
    },
    {
      match:
        '\\b(?:NS(?:A(?:ccessibility(?:ContainsProtectedContentAttribute|DescriptionListSubrole|LayoutChangedNotification|PriorityKey|S(?:how(?:AlternateUIAction|DefaultUIAction)|witchSubrole)|ToggleSubrole|UIElementsKey)|pp(?:earanceNameAqua|licationDidChangeOcclusionStateNotification))|CalendarDayChangedNotification|KeyedArchiveRootObjectKey|M(?:etadata(?:Item(?:A(?:cquisitionM(?:akeKey|odelKey)|l(?:bumKey|titudeKey)|p(?:ertureKey|pl(?:eLoop(?:DescriptorsKey|s(?:KeyFilterTypeKey|LoopModeKey|RootKeyKey))|icationCategoriesKey))|ttributeChangeDateKey|u(?:di(?:encesKey|o(?:BitRateKey|ChannelCountKey|EncodingApplicationKey|SampleRateKey|TrackNumberKey))|thor(?:AddressesKey|EmailAddressesKey|sKey)))|BitsPerSampleKey|C(?:FBundleIdentifierKey|ameraOwnerKey|ityKey|o(?:decsKey|lorSpaceKey|m(?:mentKey|poserKey)|nt(?:actKeywordsKey|ent(?:CreationDateKey|ModificationDateKey|Type(?:Key|TreeKey))|ributorsKey)|pyrightKey|untryKey|verageKey)|reatorKey)|D(?:ateAddedKey|e(?:liveryTypeKey|scriptionKey)|irectorKey|ownloadedDateKey|u(?:eDateKey|rationSecondsKey))|E(?:XIF(?:GPSVersionKey|VersionKey)|ditorsKey|mailAddressesKey|ncodingApplicationsKey|x(?:ecutable(?:ArchitecturesKey|PlatformKey)|posure(?:ModeKey|ProgramKey|TimeS(?:econdsKey|tringKey))))|F(?:NumberKey|inderCommentKey|lashOnOffKey|o(?:calLength(?:35mmKey|Key)|ntsKey))|G(?:PS(?:AreaInformationKey|D(?:OPKey|ateStampKey|est(?:BearingKey|DistanceKey|L(?:atitudeKey|ongitudeKey))|ifferentalKey)|M(?:apDatumKey|easureModeKey)|ProcessingMethodKey|StatusKey|TrackKey)|enreKey)|H(?:asAlphaChannelKey|eadlineKey)|I(?:SOSpeedKey|dentifierKey|mageDirectionKey|n(?:formationKey|st(?:antMessageAddressesKey|ructionsKey))|s(?:ApplicationManagedKey|GeneralMIDISequenceKey|LikelyJunkKey))|K(?:ey(?:SignatureKey|wordsKey)|indKey)|L(?:a(?:nguagesKey|stUsedDateKey|titudeKey|yerNamesKey)|ensModelKey|ongitudeKey|yricistKey)|M(?:axApertureKey|e(?:diaTypesKey|teringModeKey)|usical(?:GenreKey|Instrument(?:CategoryKey|NameKey)))|N(?:amedLocationKey|umberOfPagesKey)|Or(?:ganizationsKey|i(?:entationKey|ginal(?:FormatKey|SourceKey)))|P(?:a(?:ge(?:HeightKey|WidthKey)|rticipantsKey)|erformersKey|honeNumbersKey|ixel(?:CountKey|HeightKey|WidthKey)|ro(?:ducerKey|fileNameKey|jectsKey)|ublishersKey)|R(?:e(?:c(?:ipient(?:AddressesKey|EmailAddressesKey|sKey)|ording(?:DateKey|YearKey))|dEyeOnOffKey|solution(?:HeightDPIKey|WidthDPIKey))|ightsKey)|S(?:ecurityMethodKey|peedKey|t(?:a(?:rRatingKey|teOrProvinceKey)|reamableKey)|ubjectKey)|T(?:e(?:mpoKey|xtContentKey)|hemeKey|i(?:me(?:SignatureKey|stampKey)|tleKey)|otalBitRateKey)|V(?:ersionKey|ideoBitRateKey)|Wh(?:ereFromsKey|iteBalanceKey))|Query(?:Indexed(?:LocalComputerScope|NetworkScope)|Update(?:AddedItemsKey|ChangedItemsKey|RemovedItemsKey))|UbiquitousItem(?:Downloading(?:ErrorKey|Status(?:Current|Downloaded|Key|NotDownloaded))|UploadingErrorKey))|odalResponse(?:Abort|Continue|Stop))|OutlineView(?:DisclosureButtonKey|ShowHideButtonKey)|Progress(?:EstimatedTimeRemainingKey|File(?:AnimationImage(?:Key|OriginalRectKey)|CompletedCountKey|IconKey|OperationKind(?:Copying|D(?:ecompressingAfterDownloading|ownloading)|Key|Receiving)|TotalCountKey|URLKey)|KindFile|ThroughputKey)|S(?:crollView(?:Did(?:EndLiveScrollNotification|LiveScrollNotification)|WillStartLiveScrollNotification)|pellCheckerDidChangeAutomatic(?:DashSubstitutionNotification|QuoteSubstitutionNotification)|tackView(?:SpacingUseDefault|VisibilityPriority(?:DetachOnlyIfNecessary|MustHold|NotVisible)))|URL(?:CredentialStorageRemoveSynchronizableCredentials|Session(?:DownloadTaskResumeData|TransferSizeUnknown)|TagNamesKey|UbiquitousItem(?:Downloading(?:ErrorKey|Status(?:Current|Downloaded|Key|NotDownloaded))|UploadingErrorKey))|WindowDidChangeOcclusionStateNotification)|kABSocialProfileService(?:TencentWeibo|Yelp))\\b',
      name: 'support.variable.cocoa.10.9.objc'
    },
    {
      match:
        '\\b(?:AB(?:AddressBookErrorDomain|MultiValueIdentifiersErrorKey|PeoplePicker(?:DisplayedPropertyDidChangeNotification|GroupSelectionDidChangeNotification|NameSelectionDidChangeNotification|ValueSelectionDidChangeNotification))|NS(?:A(?:bort(?:ModalException|PrintingException)|ccessibility(?:A(?:ctivationPointAttribute|llowedValuesAttribute|nnouncement(?:Key|RequestedNotification)|pplication(?:ActivatedNotification|DeactivatedNotification|HiddenNotification|Role|ShownNotification)|scendingSortDirectionValue|tt(?:achmentTextAttribute|ributedStringForRangeParameterizedAttribute)|utocorrectedTextAttribute)|B(?:ackgroundColorTextAttribute|oundsForRangeParameterizedAttribute|rowserRole|u(?:syIndicatorRole|ttonRole))|C(?:ancel(?:Action|ButtonAttribute)|e(?:ll(?:ForColumnAndRowParameterizedAttribute|Role)|nt(?:erTabStopMarkerTypeValue|imetersUnitValue))|h(?:eckBoxRole|ildrenAttribute)|l(?:earButtonAttribute|oseButton(?:Attribute|Subrole))|o(?:l(?:orWellRole|umn(?:CountAttribute|HeaderUIElementsAttribute|IndexRangeAttribute|Role|TitlesAttribute|sAttribute))|mboBoxRole|n(?:firmAction|tent(?:ListSubrole|sAttribute)))|r(?:eatedNotification|iticalValueAttribute))|D(?:e(?:c(?:imalTabStopMarkerTypeValue|rement(?:A(?:ction|rrowSubrole)|ButtonAttribute|PageSubrole))|f(?:aultButtonAttribute|initionListSubrole)|leteAction|sc(?:endingSortDirectionValue|riptionAttribute))|i(?:alogSubrole|sclos(?:ed(?:ByRowAttribute|RowsAttribute)|ingAttribute|ure(?:LevelAttribute|TriangleRole)))|ocumentAttribute|rawer(?:CreatedNotification|Role))|E(?:ditedAttribute|nabledAttribute|rrorCodeExceptionInfo|xpandedAttribute)|F(?:i(?:lenameAttribute|rstLineIndentMarkerTypeValue)|loatingWindowSubrole|o(?:cused(?:Attribute|UIElement(?:Attribute|ChangedNotification)|Window(?:Attribute|ChangedNotification))|nt(?:FamilyKey|NameKey|SizeKey|TextAttribute)|regroundColorTextAttribute)|rontmostAttribute|ullScreenButton(?:Attribute|Subrole))|Gr(?:idRole|o(?:upRole|wArea(?:Attribute|Role)))|H(?:andle(?:Role|sAttribute)|e(?:ad(?:IndentMarkerTypeValue|erAttribute)|lp(?:Attribute|Tag(?:CreatedNotification|Role)))|iddenAttribute|orizontal(?:OrientationValue|ScrollBarAttribute|Unit(?:DescriptionAttribute|sAttribute)))|I(?:dentifierAttribute|mageRole|n(?:c(?:hesUnitValue|rement(?:A(?:ction|rrowSubrole)|ButtonAttribute|PageSubrole|orRole))|dexAttribute|sertionPointLineNumberAttribute))|L(?:a(?:bel(?:UIElementsAttribute|ValueAttribute)|yout(?:AreaRole|ItemRole|PointForScreenPointParameterizedAttribute|SizeForScreenSizeParameterizedAttribute))|e(?:ftTabStopMarkerTypeValue|velIndicatorRole)|i(?:n(?:eForIndexParameterizedAttribute|k(?:Role|TextAttribute|edUIElementsAttribute))|stRole))|M(?:a(?:in(?:Attribute|Window(?:Attribute|ChangedNotification))|rke(?:dMisspelledTextAttribute|r(?:GroupUIElementAttribute|Type(?:Attribute|DescriptionAttribute)|UIElementsAttribute|ValuesAttribute))|tteRole|xValueAttribute)|enu(?:B(?:ar(?:Attribute|Role)|uttonRole)|ItemRole|Role)|i(?:n(?:ValueAttribute|imize(?:Button(?:Attribute|Subrole)|dAttribute))|sspelledTextAttribute)|o(?:dalAttribute|vedNotification))|N(?:extContentsAttribute|umberOfCharactersAttribute)|O(?:r(?:deredByRowAttribute|ientationAttribute)|utlineRo(?:le|wSubrole)|verflowButtonAttribute)|P(?:arentAttribute|ic(?:asUnitValue|kAction)|laceholderValueAttribute|o(?:intsUnitValue|p(?:UpButtonRole|overRole)|sitionAttribute)|r(?:e(?:ssAction|viousContentsAttribute)|o(?:gressIndicatorRole|xyAttribute)))|R(?:TFForRangeParameterizedAttribute|a(?:dio(?:ButtonRole|GroupRole)|iseAction|ngeFor(?:IndexParameterizedAttribute|LineParameterizedAttribute|PositionParameterizedAttribute)|tingIndicatorSubrole)|e(?:levanceIndicatorRole|sizedNotification)|ightTabStopMarkerTypeValue|o(?:le(?:Attribute|DescriptionAttribute)|w(?:Co(?:llapsedNotification|unt(?:Attribute|ChangedNotification))|ExpandedNotification|HeaderUIElementsAttribute|IndexRangeAttribute|Role|sAttribute))|uler(?:MarkerRole|Role))|S(?:cr(?:een(?:PointForLayoutPointParameterizedAttribute|SizeForLayoutSizeParameterizedAttribute)|oll(?:AreaRole|BarRole))|e(?:arch(?:ButtonAttribute|FieldSubrole|MenuAttribute)|cureTextFieldSubrole|lected(?:Attribute|C(?:ells(?:Attribute|ChangedNotification)|hildren(?:Attribute|ChangedNotification|MovedNotification)|olumns(?:Attribute|ChangedNotification))|Rows(?:Attribute|ChangedNotification)|Text(?:Attribute|ChangedNotification|Range(?:Attribute|sAttribute)))|rvesAsTitleForUIElementsAttribute)|h(?:a(?:dowTextAttribute|red(?:CharacterRangeAttribute|TextUIElementsAttribute))|eet(?:CreatedNotification|Role)|ow(?:MenuAction|nMenuAttribute))|izeAttribute|liderRole|ort(?:ButtonSubrole|DirectionAttribute)|plit(?:GroupRole|ter(?:Role|sAttribute))|t(?:a(?:ndardWindowSubrole|ticTextRole)|ri(?:kethrough(?:ColorTextAttribute|TextAttribute)|ngForRangeParameterizedAttribute)|yleRangeForIndexParameterizedAttribute)|u(?:broleAttribute|perscriptTextAttribute)|ystem(?:DialogSubrole|FloatingWindowSubrole|WideRole))|T(?:a(?:b(?:GroupRole|leRo(?:le|wSubrole)|sAttribute)|ilIndentMarkerTypeValue)|ext(?:A(?:reaRole|ttachmentSubrole)|FieldRole|LinkSubrole)|i(?:melineSubrole|tle(?:Attribute|ChangedNotification|UIElementAttribute))|o(?:olbar(?:Button(?:Attribute|Subrole)|Role)|pLevelUIElementAttribute))|U(?:IElementDestroyedNotification|RLAttribute|n(?:derline(?:ColorTextAttribute|TextAttribute)|it(?:DescriptionAttribute|s(?:Attribute|ChangedNotification))|known(?:MarkerTypeValue|OrientationValue|Role|S(?:ortDirectionValue|ubrole)|UnitValue)))|V(?:alue(?:Attribute|ChangedNotification|DescriptionAttribute|IndicatorRole)|ertical(?:OrientationValue|ScrollBarAttribute|Unit(?:DescriptionAttribute|sAttribute))|isible(?:C(?:ellsAttribute|h(?:aracterRangeAttribute|ildrenAttribute)|olumnsAttribute)|NameKey|RowsAttribute))|W(?:arningValueAttribute|indow(?:Attribute|CreatedNotification|DeminiaturizedNotification|M(?:iniaturizedNotification|ovedNotification)|R(?:esizedNotification|ole)|sAttribute))|ZoomButton(?:Attribute|Subrole))|l(?:ert(?:FirstButtonReturn|SecondButtonReturn|ThirdButtonReturn)|ignmentBinding|l(?:RomanInputSourcesLocaleIdentifier|ows(?:EditingMultipleValuesSelectionBindingOption|NullArgumentBindingOption))|ternate(?:ImageBinding|TitleBinding)|waysPresentsApplicationModalAlertsBindingOption)|n(?:imat(?:eBinding|ion(?:DelayBinding|ProgressMark(?:Notification)?|TriggerOrder(?:In|Out)))|tialiasThresholdChangedNotification)|pp(?:Kit(?:IgnoredException|V(?:ersionNumber(?:10_(?:0|1(?:0(?:_(?:2|3|4|5|Max))?|1(?:_(?:1|2|3))?|2(?:_(?:1|2))?|3(?:_(?:1|2|4))?|4(?:_(?:1|2|3|4|5))?)?|2(?:_3)?|3(?:_(?:2|3|5|7|9))?|4(?:_(?:1|3|4|7))?|5(?:_(?:2|3))?|6|7(?:_(?:2|3|4))?|8|9)|With(?:C(?:o(?:lumnResizingBrowser|ntinuousScrollingBrowser)|u(?:rsorSizeSupport|stomSheetPosition))|D(?:eferredWindowDisplaySupport|irectionalTabs|ockTilePlugInSupport)|PatternColorLeakFix))?|irtualMemoryException))|l(?:e(?:Event(?:ManagerWillProcessFirstEventNotification|TimeOut(?:Default|None))|ScriptError(?:AppName|BriefMessage|Message|Number|Range))|ication(?:Did(?:BecomeActiveNotification|ChangeScreenParametersNotification|Finish(?:LaunchingNotification|RestoringWindowsNotification)|HideNotification|ResignActiveNotification|U(?:nhideNotification|pdateNotification))|LaunchIsDefaultLaunchKey|Will(?:BecomeActiveNotification|FinishLaunchingNotification|HideNotification|ResignActiveNotification|TerminateNotification|U(?:nhideNotification|pdateNotification)))))?|rgument(?:Binding|Domain)|ssertionHandlerKey|tt(?:achmentAttributeName|ributedStringBinding)|uthorDocumentAttribute|verageKeyValueOperator)|B(?:a(?:ck(?:groundColor(?:AttributeName|DocumentAttribute)|ingPropertyOld(?:ColorSpaceKey|ScaleFactorKey))|d(?:BitmapParametersException|ComparisonException|RTF(?:ColorTableException|DirectiveException|FontTableException|StyleSheetException))|se(?:URLDocumentOption|lineOffsetAttributeName))|lack|ottomMarginDocumentAttribute|rowser(?:ColumnConfigurationDidChangeNotification|IllegalDelegateException)|undle(?:DidLoadNotification|ResourceRequestLo(?:adingPriorityUrgent|wDiskSpaceNotification)))|C(?:a(?:l(?:endarIdentifier(?:Buddhist|C(?:hinese|optic)|EthiopicAmete(?:Alem|Mihret)|Gregorian|Hebrew|I(?:SO8601|ndian|slamic(?:Civil)?)|Japanese|Persian|RepublicOfChina)|ibrated(?:RGBColorSpace|WhiteColorSpace))|tegoryDocumentAttribute)|haracter(?:ConversionException|EncodingDocument(?:Attribute|Option))|lassDescriptionNeededForClassNotification|o(?:coa(?:ErrorDomain|VersionDocumentAttribute)|lor(?:List(?:DidChangeNotification|IOException|NotEditableException)|PanelColorDidChangeNotification)|m(?:boBox(?:Selection(?:DidChangeNotification|IsChangingNotification)|Will(?:DismissNotification|PopUpNotification))|mentDocumentAttribute|panyDocumentAttribute)|n(?:ditionallySets(?:E(?:ditableBindingOption|nabledBindingOption)|HiddenBindingOption)|t(?:e(?:nt(?:Array(?:Binding|ForMultipleSelectionBinding)|Binding|DictionaryBinding|HeightBinding|Object(?:Binding|sBinding)|PlacementTagBindingOption|SetBinding|ValuesBinding|WidthBinding)|xtHelpModeDid(?:ActivateNotification|DeactivateNotification))|inuouslyUpdatesValueBindingOption|rol(?:StateValue(?:Mixed|O(?:ff|n))|TextDid(?:BeginEditingNotification|ChangeNotification|EndEditingNotification)))|vertedDocumentAttribute)|pyrightDocumentAttribute|untKeyValueOperator)|r(?:eat(?:esSortDescriptorBindingOption|ionTimeDocumentAttribute)|iticalValueBinding)|u(?:r(?:rentLocaleDidChangeNotification|sorAttributeName)|stomColorSpace))|D(?:a(?:rkGray|taBinding)|e(?:bugDescriptionErrorKey|cimalNumber(?:DivideByZeroException|ExactnessException|OverflowException|UnderflowException)|f(?:ault(?:AttributesDocumentOption|RunLoopMode|TabIntervalDocumentAttribute)|initionPresentationType(?:DictionaryApplication|Key|Overlay))|letesObjectsOnRemoveBindingsOption|stinationInvalidException|vice(?:BitsPerSample|C(?:MYKColorSpace|olorSpaceName)|Is(?:Printer|Screen)|R(?:GBColorSpace|esolution)|Size|WhiteColorSpace))|i(?:dBecomeSingleThreadedNotification|s(?:play(?:NameBindingOption|Pattern(?:BindingOption|TitleBinding|ValueBinding))|tinctUnionOf(?:ArraysKeyValueOperator|ObjectsKeyValueOperator|SetsKeyValueOperator)))|o(?:c(?:FormatTextDocumentType|ument(?:EditedBinding|TypeDocument(?:Attribute|Option)))|ubleClick(?:ArgumentBinding|TargetBinding))|ragging(?:Exception|ImageComponent(?:IconKey|LabelKey)))|E(?:dit(?:ableBinding|orDocumentAttribute)|nabledBinding|vent(?:DurationForever|TrackingRunLoopMode)|x(?:cluded(?:ElementsDocumentAttribute|KeysBinding)|pansionAttributeName|tension(?:Host(?:Did(?:BecomeActiveNotification|EnterBackgroundNotification)|Will(?:EnterForegroundNotification|ResignActiveNotification))|JavaScriptFinalizeArgumentKey)))|F(?:i(?:l(?:e(?:AppendOnly|Busy|C(?:ontentsPboardType|reationDate)|DeviceIdentifier|ExtensionHidden|GroupOwnerAccount(?:ID|Name)|H(?:FS(?:CreatorCode|TypeCode)|andle(?:ConnectionAcceptedNotification|DataAvailableNotification|Notification(?:DataItem|FileHandleItem)|OperationException|Read(?:CompletionNotification|ToEndOfFileCompletionNotification)))|Immutable|ModificationDate|OwnerAccount(?:ID|Name)|P(?:athErrorKey|osixPermissions|rotection(?:Complete(?:Un(?:lessOpen|tilFirstUserAuthentication))?|Key|None))|ReferenceCount|S(?:ize|ystem(?:F(?:ileNumber|ree(?:Nodes|Size))|N(?:odes|umber)|Size))|Type(?:BlockSpecial|CharacterSpecial|D(?:irectory|ocument(?:Attribute|Option))|Regular|S(?:ocket|ymbolicLink)|Unknown)?)|terPredicateBinding)|ndPanel(?:CaseInsensitiveSearch|S(?:earchOptionsPboardType|ubstringMatch)))|loatingWindowLevel|o(?:nt(?:AttributeName|B(?:inding|oldBinding)|C(?:ascadeListAttribute|haracterSetAttribute|ollection(?:A(?:ctionKey|llFonts)|Di(?:dChangeNotification|sallowAutoActivationOption)|Favorites|IncludeDisabledFontsOption|NameKey|OldNameKey|Re(?:centlyUsed|moveDuplicatesOption)|User|VisibilityKey|Was(?:Hidden|Renamed|Shown)))|F(?:a(?:ceAttribute|mily(?:Attribute|NameBinding))|eature(?:Se(?:lectorIdentifierKey|ttingsAttribute)|TypeIdentifierKey)|ixedAdvanceAttribute)|I(?:dentityMatrix|talicBinding)|MatrixAttribute|Name(?:Attribute|Binding)|S(?:etChangedNotification|ize(?:Attribute|Binding)|lantTrait|ymbolicTrait)|TraitsAttribute|UnavailableException|V(?:ariationA(?:ttribute|xis(?:DefaultValueKey|IdentifierKey|M(?:aximumValueKey|inimumValueKey)|NameKey))|isibleNameAttribute)|W(?:eightTrait|idthTrait))|regroundColorAttributeName|undationVersionNumber)|ullScreenMode(?:A(?:llScreens|pplicationPresentationOptions)|Setting|WindowLevel))|G(?:enericException|l(?:obalDomain|yphInfoAttributeName)|ra(?:mmar(?:Corrections|Range|UserDescription)|phicsContext(?:DestinationAttributeName|P(?:DFFormat|SFormat)|RepresentationFormatAttributeName)))|H(?:T(?:MLTextDocumentType|TPCookie(?:Comment(?:URL)?|D(?:iscard|omain)|Expires|Ma(?:nager(?:AcceptPolicyChangedNotification|CookiesChangedNotification)|ximumAge)|Name|OriginURL|P(?:ath|ort)|Secure|V(?:alue|ersion)))|a(?:ndlesContentAsCompoundValueBindingOption|shTable(?:CopyIn|ObjectPointerPersonality|StrongMemory))|e(?:aderTitleBinding|lpAnchorErrorKey)|iddenBinding|yphenationFactorDocumentAttribute)|I(?:llegalSelectorException|mage(?:Binding|C(?:acheException|o(?:lorSyncProfileData|mpression(?:Factor|Method))|urrentFrame(?:Duration)?)|DitherTransparency|EXIFData|F(?:allbackBackgroundColor|rameCount)|Gamma|Hint(?:CTM|Interpolation)|Interlaced|LoopCount|Name(?:A(?:ctionTemplate|d(?:dTemplate|vanced)|pplicationIcon)|B(?:luetoothTemplate|o(?:njour|okmarksTemplate))|C(?:aution|o(?:l(?:orPanel|umnViewTemplate)|mputer))|E(?:nterFullScreenTemplate|veryone|xitFullScreenTemplate)|F(?:lowViewTemplate|o(?:l(?:der(?:Burnable|Smart)?|lowLinkFreestandingTemplate)|ntPanel))|Go(?:LeftTemplate|RightTemplate)|HomeTemplate|I(?:ChatTheaterTemplate|conViewTemplate|n(?:fo|validDataFreestandingTemplate))|L(?:eftFacingTriangleTemplate|istViewTemplate|ock(?:LockedTemplate|UnlockedTemplate))|M(?:enu(?:MixedStateTemplate|OnStateTemplate)|obileMe|ultipleDocuments)|Network|P(?:athTemplate|referencesGeneral)|QuickLookTemplate|R(?:e(?:fresh(?:FreestandingTemplate|Template)|moveTemplate|vealFreestandingTemplate)|ightFacingTriangleTemplate)|S(?:lideshowTemplate|martBadgeTemplate|t(?:atus(?:Available|None|PartiallyAvailable|Unavailable)|opProgress(?:FreestandingTemplate|Template)))|Trash(?:Empty|Full)|User(?:Accounts|G(?:roup|uest))?)|Progressive|R(?:GBColorTable|epRegistryDidChangeNotification))|n(?:c(?:ludedKeysBinding|onsistentArchiveException)|itial(?:KeyBinding|ValueBinding)|sertsNullPlaceholderBindingOption|te(?:ger(?:HashCallBacks|Map(?:KeyCallBacks|ValueCallBacks))|rnalInconsistencyException)|v(?:alid(?:Ar(?:chiveOperationException|gumentException)|ReceivePortException|SendPortException|UnarchiveOperationException)|o(?:cationOperation(?:CancelledException|VoidResultException)|kesSeparatelyWithArrayObjectsBindingOption)))|s(?:IndeterminateBinding|N(?:ilTransformerName|otNilTransformerName)))|Ke(?:rnAttributeName|y(?:ValueChange(?:IndexesKey|KindKey|N(?:ewKey|otificationIsPriorKey)|OldKey)|wordsDocumentAttribute))|L(?:a(?:belBinding|youtPriority(?:D(?:efault(?:High|Low)|ragThatCan(?:ResizeWindow|notResizeWindow))|FittingSizeCompression|Required|WindowSizeStayPut))|eftMarginDocumentAttribute|i(?:g(?:atureAttributeName|htGray)|n(?:guisticTag(?:Ad(?:jective|verb)|C(?:l(?:assifier|ose(?:Parenthesis|Quote))|onjunction)|D(?:ash|eterminer)|I(?:diom|nterjection)|N(?:oun|umber)|O(?:pen(?:Parenthesis|Quote)|rganizationName|ther(?:Punctuation|W(?:hitespace|ord))?)|P(?:ar(?:agraphBreak|ticle)|ersonalName|laceName|r(?:eposition|onoun)|unctuation)|S(?:cheme(?:L(?:anguage|e(?:mma|xicalClass))|NameType(?:OrLexicalClass)?|Script|TokenType)|entenceTerminator)|Verb|W(?:hitespace|ord(?:Joiner)?))|kAttributeName))|o(?:adedClasses|cal(?:NotificationCenterType|e(?:AlternateQuotation(?:BeginDelimiterKey|EndDelimiterKey)|C(?:alendar|o(?:llat(?:ionIdentifier|orIdentifier)|untryCode)|urrency(?:Code|Symbol))|DecimalSeparator|ExemplarCharacterSet|GroupingSeparator|Identifier|LanguageCode|MeasurementSystem|Quotation(?:BeginDelimiterKey|EndDelimiterKey)|ScriptCode|UsesMetricSystem|VariantCode)|ized(?:DescriptionKey|FailureReasonErrorKey|KeyDictionaryBinding|Recovery(?:OptionsErrorKey|SuggestionErrorKey)))))|M(?:a(?:c(?:SimpleTextDocumentType|hErrorDomain)|inMenuWindowLevel|llocException|nage(?:dObjectContextBinding|rDocumentAttribute)|pTable(?:CopyIn|ObjectPointerPersonality|StrongMemory)|rkedClauseSegmentAttributeName|x(?:ValueBinding|WidthBinding|imum(?:KeyValueOperator|RecentsBinding)))|e(?:nu(?:Did(?:AddItemNotification|BeginTrackingNotification|ChangeItemNotification|EndTrackingNotification|RemoveItemNotification|SendActionNotification)|WillSendActionNotification)|tadata(?:Item(?:DisplayNameKey|FS(?:C(?:ontentChangeDateKey|reationDateKey)|NameKey|SizeKey)|IsUbiquitousKey|PathKey|URLKey)|Query(?:Did(?:FinishGatheringNotification|StartGatheringNotification|UpdateNotification)|GatheringProgressNotification|LocalComputerScope|NetworkScope|ResultContentRelevanceAttribute|U(?:biquitousD(?:ataScope|ocumentsScope)|serHomeScope))|UbiquitousItem(?:HasUnresolvedConflictsKey|Is(?:DownloadingKey|Upload(?:edKey|ingKey))|Percent(?:DownloadedKey|UploadedKey))))|i(?:n(?:ValueBinding|WidthBinding|imumKeyValueOperator)|xedStateImageBinding)|od(?:al(?:Panel(?:RunLoopMode|WindowLevel)|Response(?:Cancel|OK))|ificationTimeDocumentAttribute)|ultipleValuesPlaceholderBindingOption)|N(?:amedColorSpace|e(?:gateBooleanTransformerName|tServicesError(?:Code|Domain))|ibLoadingException|o(?:SelectionPlaceholderBindingOption|n(?:OwnedPointer(?:HashCallBacks|Map(?:KeyCallBacks|ValueCallBacks)|OrNullMapKeyCallBacks)|RetainedObject(?:HashCallBacks|Map(?:KeyCallBacks|ValueCallBacks)))|rmalWindowLevel|t(?:ApplicablePlaceholderBindingOption|Found|ification(?:DeliverImmediately|PostToAllSessions)))|ullPlaceholderBindingOption)|O(?:SStatusErrorDomain|b(?:ject(?:HashCallBacks|InaccessibleException|Map(?:KeyCallBacks|ValueCallBacks)|NotAvailableException)|liquenessAttributeName|served(?:KeyPathKey|ObjectKey))|ff(?:StateImageBinding|iceOpenXMLTextDocumentType)|ldStyleException|nStateImageBinding|p(?:e(?:nDocumentTextDocumentType|ration(?:NotSupportedForKeyException|QueueDefaultMaxConcurrentOperationCount))|tionsKey)|utlineView(?:ColumnDid(?:MoveNotification|ResizeNotification)|Item(?:Did(?:CollapseNotification|ExpandNotification)|Will(?:CollapseNotification|ExpandNotification))|Selection(?:DidChangeNotification|IsChangingNotification))|wned(?:ObjectIdentityHashCallBacks|Pointer(?:HashCallBacks|Map(?:KeyCallBacks|ValueCallBacks))))|P(?:OSIXErrorDomain|PD(?:Include(?:NotFoundException|Stack(?:OverflowException|UnderflowException))|ParseException)|a(?:perSizeDocumentAttribute|r(?:agraphStyleAttributeName|seErrorException)|steboard(?:CommunicationException|Type(?:Color|Font|HTML|MultipleTextSelection|P(?:DF|NG)|R(?:TF(?:D)?|uler)|S(?:ound|tring)|T(?:IFF|abularText|extFinderOptions))|URLReading(?:ContentsConformToTypesKey|FileURLsOnlyKey))|tternColorSpace)|lainTextDocumentType|o(?:interToStructHashCallBacks|p(?:Up(?:Button(?:CellWillPopUpNotification|WillPopUpNotification)|MenuWindowLevel)|over(?:CloseReason(?:DetachToWindow|Key|Standard)|Did(?:CloseNotification|ShowNotification)|Will(?:CloseNotification|ShowNotification)))|rt(?:DidBecomeInvalidNotification|ReceiveException|SendException|TimeoutException)|sitioningRectBinding)|r(?:e(?:dicate(?:Binding|FormatBindingOption)|f(?:erredScrollerStyleDidChangeNotification|ixSpacesDocumentAttribute))|int(?:AllP(?:ages|resetsJobStyleHint)|BottomMargin|C(?:ancelJob|opies)|DetailedErrorReporting|F(?:axNumber|irstPage)|H(?:eaderAndFooter|orizontal(?:Pagination|lyCentered))|Job(?:Disposition|Saving(?:FileNameExtensionHidden|URL))|L(?:astPage|eftMargin)|MustCollate|NoPresetsJobStyleHint|O(?:perationExistsException|rientation)|P(?:a(?:ckageException|ges(?:Across|Down)|nelAccessorySummaryItem(?:DescriptionKey|NameKey)|per(?:Name|Size))|hotoJobStyleHint|r(?:eviewJob|inter(?:Name)?))|R(?:eversePageOrder|ightMargin)|S(?:aveJob|calingFactor|electionOnly|poolJob)|T(?:ime|opMargin)|Vertical(?:Pagination|lyCentered)|ingCommunicationException)|ocessInfoPowerStateDidChangeNotification))|R(?:TF(?:DTextDocumentType|PropertyStackOverflowException|TextDocumentType)|a(?:isesForNotApplicableKeysBindingOption|ngeException)|e(?:adOnlyDocumentAttribute|c(?:entSearchesBinding|overyAttempterErrorKey)|gistrationDomain|presentedFilenameBinding)|ightMarginDocumentAttribute|owHeightBinding|u(?:leEditor(?:Predicate(?:C(?:omp(?:arisonModifier|oundType)|ustomSelector)|LeftExpression|Op(?:eratorType|tions)|RightExpression)|RowsDidChangeNotification)|nLoopCommonModes))|S(?:creen(?:ColorSpaceDidChangeNotification|SaverWindowLevel)|e(?:archField(?:ClearRecentsMenuItemTag|NoRecentsMenuItemTag|Recents(?:MenuItemTag|TitleMenuItemTag))|lect(?:ed(?:I(?:dentifierBinding|ndexBinding)|LabelBinding|Object(?:Binding|sBinding)|TagBinding|Value(?:Binding|sBinding))|ionIndex(?:PathsBinding|esBinding)|orNameBindingOption|sAllWhenSettingContentBindingOption))|hadowAttributeName|o(?:rtDescriptorsBinding|undPboardType)|p(?:e(?:ech(?:C(?:haracterModeProperty|ommand(?:DelimiterProperty|Prefix|Suffix)|urrentVoiceProperty)|Dictionary(?:Abbreviations|Entry(?:Phonemes|Spelling)|LocaleIdentifier|ModificationDate|Pronunciations)|Error(?:Count|NewestC(?:haracterOffset|ode)|OldestC(?:haracterOffset|ode)|sProperty)|InputModeProperty|Mode(?:Literal|Normal|Phoneme|Text)|NumberModeProperty|OutputToFileURLProperty|P(?:honeme(?:Info(?:Example|Hilite(?:End|Start)|Opcode|Symbol)|SymbolsProperty)|itch(?:BaseProperty|ModProperty))|R(?:ateProperty|e(?:centSyncProperty|setProperty))|S(?:tatus(?:NumberOfCharactersLeft|Output(?:Busy|Paused)|P(?:honemeCode|roperty))|ynthesizerInfo(?:Identifier|Property|Version))|VolumeProperty)|ll(?:CheckerDidChangeAutomatic(?:SpellingCorrectionNotification|TextReplacementNotification)|ingStateAttributeName))|litView(?:DidResizeSubviewsNotification|WillResizeSubviewsNotification))|quareStatusItemLength|t(?:a(?:ckTraceKey|tusWindowLevel)|r(?:eam(?:DataWrittenToMemoryStreamKey|FileCurrentOffsetKey|NetworkServiceType(?:Background|V(?:ideo|o(?:IP|ice)))?|S(?:OCKS(?:ErrorDomain|Proxy(?:ConfigurationKey|HostKey|P(?:asswordKey|ortKey)|UserKey|Version(?:4|5|Key)))|ocketS(?:SLErrorDomain|ecurityLevel(?:Key|N(?:egotiatedSSL|one)|SSLv(?:2|3)|TLSv1))))|i(?:kethrough(?:ColorAttributeName|StyleAttributeName)|ngEncodingErrorKey)|oke(?:ColorAttributeName|WidthAttributeName)))|u(?:b(?:jectDocumentAttribute|menuWindowLevel)|mKeyValueOperator|perscriptAttributeName)|ystem(?:C(?:lockDidChangeNotification|olorsDidChangeNotification)|TimeZoneDidChangeNotification))|T(?:IFFException|a(?:b(?:ColumnTerminatorsAttributeName|leView(?:ColumnDid(?:MoveNotification|ResizeNotification)|RowViewKey|Selection(?:DidChangeNotification|IsChangingNotification)))|rgetBinding|skDidTerminateNotification)|ext(?:C(?:hecking(?:AirlineKey|C(?:ityKey|ountryKey)|Document(?:AuthorKey|TitleKey|URLKey)|FlightKey|JobTitleKey|NameKey|Or(?:ganizationKey|thographyKey)|PhoneKey|QuotesKey|Re(?:ference(?:DateKey|TimeZoneKey)|gularExpressionsKey|placementsKey)|St(?:ateKey|reetKey)|ZIPKey)|olorBinding)|Did(?:BeginEditingNotification|ChangeNotification|EndEditingNotification)|EncodingNameDocument(?:Attribute|Option)|Finder(?:CaseInsensitiveKey|MatchingTypeKey)|InputContextKeyboardSelectionDidChangeNotification|L(?:ayoutSection(?:Orientation|Range|sAttribute)|ineTooLongException)|NoSelectionException|ReadException|S(?:izeMultiplierDocumentOption|torage(?:DidProcessEditingNotification|WillProcessEditingNotification))|View(?:DidChange(?:SelectionNotification|TypingAttributesNotification)|WillChangeNotifyingTextViewNotification)|WriteException)|hreadWillExitNotification|i(?:meoutDocumentOption|tle(?:Binding|DocumentAttribute))|o(?:ol(?:Tip(?:AttributeName|Binding)|bar(?:DidRemoveItemNotification|FlexibleSpaceItemIdentifier|ItemVisibilityPriority(?:High|Low|Standard|User)|PrintItemIdentifier|S(?:how(?:ColorsItemIdentifier|FontsItemIdentifier)|paceItemIdentifier)|WillAddItemNotification))|pMarginDocumentAttribute|rnOffMenuWindowLevel)|ransparentBinding|ypedStreamVersionException)|U(?:RL(?:A(?:ttributeModificationDateKey|uthenticationMethod(?:ClientCertificate|Default|HT(?:MLForm|TP(?:Basic|Digest))|N(?:TLM|egotiate)|ServerTrust))|C(?:ontent(?:AccessDateKey|ModificationDateKey)|re(?:ationDateKey|dentialStorageChangedNotification)|ustomIconKey)|E(?:ffectiveIconKey|rror(?:Domain|FailingURL(?:ErrorKey|PeerTrustErrorKey|StringErrorKey)|Key))|File(?:AllocatedSizeKey|Protection(?:Complete(?:Un(?:lessOpen|tilFirstUserAuthentication))?|Key|None)|Resource(?:IdentifierKey|Type(?:BlockSpecial|CharacterSpecial|Directory|Key|NamedPipe|Regular|S(?:ocket|ymbolicLink)|Unknown))|S(?:cheme|ecurityKey|izeKey))|HasHiddenExtensionKey|Is(?:AliasFileKey|DirectoryKey|ExecutableKey|HiddenKey|MountTriggerKey|PackageKey|Re(?:adableKey|gularFileKey)|Sy(?:mbolicLinkKey|stemImmutableKey)|U(?:biquitousItemKey|serImmutableKey)|VolumeKey|WritableKey)|KeysOfUnsetValuesKey|L(?:abel(?:ColorKey|NumberKey)|inkCountKey|ocalized(?:LabelKey|NameKey|TypeDescriptionKey))|NameKey|P(?:arentDirectoryURLKey|r(?:eferredIOBlockSizeKey|otectionSpace(?:FTP(?:Proxy)?|HTTP(?:Proxy|S(?:Proxy)?)?|SOCKSProxy)))|T(?:otalFile(?:AllocatedSizeKey|SizeKey)|ypeIdentifierKey)|UbiquitousItem(?:HasUnresolvedConflictsKey|Is(?:DownloadingKey|Upload(?:edKey|ingKey)))|Volume(?:AvailableCapacityKey|CreationDateKey|I(?:dentifierKey|s(?:AutomountedKey|BrowsableKey|EjectableKey|InternalKey|JournalingKey|LocalKey|Re(?:adOnlyKey|movableKey)))|Localized(?:FormatDescriptionKey|NameKey)|MaximumFileSizeKey|NameKey|ResourceCountKey|Supports(?:AdvisoryFileLockingKey|Case(?:PreservedNamesKey|SensitiveNamesKey)|ExtendedSecurityKey|HardLinksKey|JournalingKey|PersistentIDsKey|R(?:enamingKey|ootDirectoryDatesKey)|S(?:parseFilesKey|ymbolicLinksKey)|VolumeSizesKey|ZeroRunsKey)|TotalCapacityKey|U(?:RL(?:ForRemountingKey|Key)|UIDStringKey)))|biquitous(?:KeyValueStore(?:Change(?:ReasonKey|dKeysKey)|DidChangeExternallyNotification)|UserDefaults(?:CompletedInitialSyncNotification|DidChangeAccountsNotification|NoCloudAccountNotification))|n(?:caught(?:RuntimeErrorException|SystemExceptionException)|d(?:e(?:finedKeyException|rl(?:ine(?:ByWord|ColorAttributeName|Pattern(?:D(?:ash(?:Dot(?:Dot)?)?|ot)|Solid)|StyleAttributeName)|yingErrorKey))|o(?:CloseGroupingRunLoopOrdering|Manager(?:CheckpointNotification|Did(?:CloseUndoGroupNotification|OpenUndoGroupNotification|RedoChangeNotification|UndoChangeNotification)|GroupIsDiscardableKey|Will(?:CloseUndoGroupNotification|RedoChangeNotification|UndoChangeNotification))))|ionOf(?:ArraysKeyValueOperator|ObjectsKeyValueOperator|SetsKeyValueOperator))|ser(?:ActivityTypeBrowsingWeb|Defaults(?:DidChangeNotification|SizeLimitExceededNotification)))|V(?:a(?:l(?:idatesImmediatelyBindingOption|ue(?:Binding|PathBinding|Transformer(?:BindingOption|NameBindingOption)|URLBinding))|riableStatusItemLength)|erticalGlyphFormAttributeName|i(?:ew(?:Animation(?:E(?:ffectKey|ndFrameKey)|Fade(?:InEffect|OutEffect)|StartFrameKey|TargetKey)|BoundsDidChangeNotification|DidUpdateTrackingAreasNotification|FrameDidChangeNotification|ModeDocumentAttribute|SizeDocumentAttribute|ZoomDocumentAttribute)|sibleBinding)|oice(?:Age|DemoText|Gender(?:Female|Male|Neuter)?|I(?:dentifier|ndividuallySpokenCharacters)|LocaleIdentifier|Name|SupportedCharacters))|W(?:arningValueBinding|eb(?:ArchiveTextDocumentType|PreferencesDocumentOption|ResourceLoadDelegateDocumentOption)|hite|i(?:dthBinding|llBecomeMultiThreadedNotification|ndow(?:Did(?:Become(?:KeyNotification|MainNotification)|Change(?:BackingPropertiesNotification|Screen(?:Notification|ProfileNotification))|DeminiaturizeNotification|E(?:n(?:d(?:LiveResizeNotification|SheetNotification)|ter(?:FullScreenNotification|VersionBrowserNotification))|x(?:it(?:FullScreenNotification|VersionBrowserNotification)|poseNotification))|M(?:iniaturizeNotification|oveNotification)|Resi(?:gn(?:KeyNotification|MainNotification)|zeNotification)|UpdateNotification)|ServerCommunicationException|Will(?:BeginSheetNotification|CloseNotification|E(?:nter(?:FullScreenNotification|VersionBrowserNotification)|xit(?:FullScreenNotification|VersionBrowserNotification))|M(?:iniaturizeNotification|oveNotification)|StartLiveResizeNotification)))|or(?:d(?:MLTextDocumentType|Tables(?:ReadException|WriteException))|kspace(?:A(?:ctiveSpaceDidChangeNotification|pplicationKey)|D(?:esktopImage(?:AllowClippingKey|FillColorKey|ScalingKey)|id(?:ActivateApplicationNotification|ChangeFileLabelsNotification|DeactivateApplicationNotification|HideApplicationNotification|LaunchApplicationNotification|MountNotification|RenameVolumeNotification|TerminateApplicationNotification|Un(?:hideApplicationNotification|mountNotification)|WakeNotification))|S(?:creensDid(?:SleepNotification|WakeNotification)|essionDid(?:BecomeActiveNotification|ResignActiveNotification))|Volume(?:LocalizedNameKey|Old(?:LocalizedNameKey|URLKey)|URLKey)|Will(?:LaunchApplicationNotification|PowerOffNotification|SleepNotification|UnmountNotification)))|ritingDirectionAttributeName)|XMLParserErrorDomain|Zero(?:Point|Rect|Size))|WebViewDid(?:BeginEditingNotification|Change(?:Notification|SelectionNotification|TypingStyleNotification)|EndEditingNotification)|kAB(?:A(?:ddress(?:C(?:ityKey|ountry(?:CodeKey|Key))|HomeLabel|Property|St(?:ateKey|reetKey)|WorkLabel|ZIPKey)|lternateBirthdayComponentsProperty|nniversaryLabel|ssistantLabel)|B(?:irthday(?:ComponentsProperty|Property)|rotherLabel)|C(?:alendarURIsProperty|hildLabel|reationDateProperty)|D(?:atabaseChanged(?:ExternallyNotification|Notification)|e(?:letedRecords|partmentProperty))|Email(?:HomeLabel|MobileMeLabel|Property|WorkLabel)|F(?:atherLabel|irstNameP(?:honeticProperty|roperty)|riendLabel)|GroupNameProperty|Home(?:Label|Page(?:Label|Property))|Ins(?:ertedRecords|tantMessage(?:Property|Service(?:AIM|Facebook|G(?:aduGadu|oogleTalk)|ICQ|Jabber|Key|MSN|QQ|Skype|Yahoo)|UsernameKey))|JobTitleProperty|LastNameP(?:honeticProperty|roperty)|M(?:a(?:idenNameProperty|nagerLabel)|iddleNameP(?:honeticProperty|roperty)|o(?:bileMeLabel|dificationDateProperty|therLabel))|N(?:icknameProperty|oteProperty)|O(?:rganizationP(?:honeticProperty|roperty)|ther(?:Date(?:ComponentsProperty|sProperty)|Label))|P(?:ar(?:entLabel|tnerLabel)|ersonFlags|hone(?:Home(?:FAXLabel|Label)|M(?:ainLabel|obileLabel)|P(?:agerLabel|roperty)|Work(?:FAXLabel|Label)|iPhoneLabel))|RelatedNamesProperty|S(?:isterLabel|ocialProfile(?:Property|Service(?:F(?:acebook|lickr)|Key|LinkedIn|MySpace|Twitter)|U(?:RLKey|ser(?:IdentifierKey|nameKey)))|pouseLabel|uffixProperty)|TitleProperty|U(?:IDProperty|RLsProperty|pdatedRecords)|WorkLabel))\\b',
      name: 'support.variable.cocoa.objc'
    },
    {
      match:
        '\\b(?:C(?:I(?:Detector(?:Accuracy(?:High|Low)?|TypeFace)|FeatureType(?:Face|QRCode|Rectangle|Text))|X(?:CallDirectoryPhoneNumberMax|ErrorDomain(?:CallDirectoryManager|IncomingCall|RequestTransaction)?)|al(?:AttendeeStatus(?:Accepted|Declined|NeedsAction|Tentative)|DeletedRecordsKey|InsertedRecordsKey|UpdatedRecordsKey))|DR(?:A(?:bstractFile|ccessDate|llFilesystems|pplicationIdentifier|ttributeModificationDate|udio(?:FourChannelKey|PreEmphasisKey))|B(?:ackupDate|ibliographicFile|lock(?:Size(?:Key)?|TypeKey)|urn(?:AppendableKey|CompletionAction(?:Eject|Key|Mount)|DoubleLayerL0DataZoneBlocksKey|FailureAction(?:Eject|Key|None)|OverwriteDiscKey|RequestedSpeedKey|St(?:atusChangedNotification|rategy(?:BDDAO|CD(?:SAO|TAO)|DVDDAO|IsRequiredKey|Key))|TestingKey|UnderrunProtectionKey|VerifyDiscKey))|C(?:DText(?:ArrangerKey|C(?:haracterCodeKey|losedKey|o(?:mposerKey|pyrightAssertedFor(?:NamesKey|SpecialMessagesKey|TitlesKey)))|DiscIdentKey|Genre(?:CodeKey|Key)|Key|LanguageKey|MCNISRCKey|NSStringEncodingKey|PerformerKey|S(?:izeKey|ongwriterKey|pecialMessageKey)|T(?:OC(?:2Key|Key)|itleKey))|o(?:ntentModificationDate|pyrightFile)|reationDate)|D(?:VD(?:CopyrightInfoKey|TimestampKey)|ata(?:FormKey|Preparer)|e(?:faultDate|vice(?:AppearedNotification|BurnSpeed(?:BD1x|CD1x|DVD1x|HDDVD1x|Max|sKey)|C(?:an(?:TestWrite(?:CDKey|DVDKey)|UnderrunProtect(?:CDKey|DVDKey)|Write(?:BD(?:Key|R(?:EKey|Key))|CD(?:Key|R(?:Key|WKey|awKey)|SAOKey|T(?:AOKey|extKey))|DVD(?:DAOKey|Key|PlusR(?:DoubleLayerKey|Key|W(?:DoubleLayerKey|Key))|R(?:AMKey|DualLayerKey|Key|W(?:DualLayerKey|Key)))|HDDVD(?:Key|R(?:AMKey|DualLayerKey|Key|W(?:DualLayerKey|Key)))|I(?:SRCKey|ndexPointsKey)|Key))|urrentWriteSpeedKey)|DisappearedNotification|FirmwareRevisionKey|I(?:ORegistryEntryPathKey|s(?:BusyKey|TrayOpenKey))|LoadingMechanismCan(?:EjectKey|InjectKey|OpenKey)|M(?:aximumWriteSpeedKey|edia(?:B(?:SDNameKey|locks(?:FreeKey|OverwritableKey|UsedKey))|Class(?:BD|CD|DVD|HDDVD|Key|Unknown)|DoubleLayerL0DataZoneBlocksKey|FreeSpaceKey|I(?:nfoKey|s(?:AppendableKey|BlankKey|ErasableKey|OverwritableKey|ReservedKey))|OverwritableSpaceKey|S(?:essionCountKey|tate(?:InTransition|Key|MediaPresent|None))|T(?:rackCountKey|ype(?:BDR(?:E|OM)?|CDR(?:OM|W)?|DVD(?:PlusR(?:DoubleLayer|W(?:DoubleLayer)?)?|R(?:AM|DualLayer|OM|W(?:DualLayer)?)?)|HDDVDR(?:AM|DualLayer|OM|W(?:DualLayer)?)?|Key|Unknown))|UsedSpaceKey))|P(?:hysicalInterconnect(?:ATAPI|Fi(?:breChannel|reWire)|Key|Location(?:External|Internal|Key|Unknown)|SCSI|USB)|roductNameKey)|S(?:tatusChangedNotification|upportLevel(?:AppleS(?:hipping|upported)|Key|None|Unsupported|VendorSupported))|Track(?:InfoKey|RefsKey)|VendorNameKey|Write(?:BufferSizeKey|CapabilitiesKey))))|E(?:ffectiveDate|r(?:ase(?:StatusChangedNotification|Type(?:Complete|Key|Quick))|rorStatus(?:AdditionalSenseStringKey|Error(?:InfoStringKey|Key|StringKey)|Key|Sense(?:CodeStringKey|Key)))|xpirationDate)|FreeBlocksKey|HFSPlus(?:CatalogNodeID|TextEncodingHint)?|I(?:SO(?:9660(?:Level(?:One|Two)|VersionNumber)?|Level|MacExtensions|RockRidgeExtensions)|n(?:dexPointsKey|visible))|Joliet|LinkType(?:FinderAlias|HardLink|SymbolicLink)|M(?:a(?:c(?:ExtendedFinderFlags|Fi(?:le(?:Creator|Type)|nder(?:Flags|HideExtension))|IconLocation|ScrollPosition|Window(?:Bounds|View))|xBurnSpeedKey)|ediaCatalogNumberKey)|NextWritableAddressKey|P(?:osix(?:FileMode|GID|UID)|reGap(?:IsRequiredKey|LengthKey)|ublisher)|RecordingDate|S(?:CMSCopyright(?:Free|Protected(?:Copy|Original))|e(?:rialCopyManagementStateKey|ssion(?:FormatKey|NumberKey))|tatus(?:Current(?:S(?:essionKey|peedKey)|TrackKey)|EraseTypeKey|P(?:ercentCompleteKey|rogress(?:Current(?:KPS|XFactor)|InfoKey))|State(?:Done|Erasing|F(?:ailed|inishing)|Key|None|Preparing|Session(?:Close|Open)|Track(?:Close|Open|Write)|Verifying)|Total(?:SessionsKey|TracksKey))|u(?:bchannelDataForm(?:Key|None|Pack|Raw)|ppressMacSpecificFiles)|y(?:nchronousBehaviorKey|stemIdentifier))|Track(?:I(?:SRCKey|sEmptyKey)|LengthKey|ModeKey|NumberKey|Packet(?:SizeKey|Type(?:Fixed|Key|Variable))|StartAddressKey|Type(?:Closed|In(?:complete|visible)|Key|Reserved))|UDF(?:ApplicationIdentifierSuffix|ExtendedFilePermissions|InterchangeLevel|Max(?:InterchangeLevel|VolumeSequenceNumber)|PrimaryVolumeDescriptorNumber|RealTimeFile|V(?:ersion1(?:02|50)|olumeSe(?:quenceNumber|t(?:I(?:dentifier|mplementationUse)|Timestamp)))|WriteVersion)?|V(?:erificationType(?:Checksum|Key|None|ProduceAgain|ReceiveData)|olume(?:C(?:heckedDate|reationDate)|E(?:ffectiveDate|xpirationDate)|ModificationDate|Set)))|I(?:C(?:ButtonType(?:Copy|Mail|Print|Scan|Transfer|Web)|CameraDeviceCan(?:AcceptPTPCommands|Delete(?:AllFiles|OneFile)|ReceiveFile|SyncClock|TakePicture(?:UsingShutterReleaseOnCamera)?)|D(?:e(?:leteAfterSuccessfulDownload|vice(?:CanEjectOrDisconnect|LocationDescription(?:Bluetooth|FireWire|MassStorage|USB)))|ownload(?:SidecarFiles|sDirectoryURL))|LocalizedStatusNotificationKey|Overwrite|S(?:ave(?:AsFilename|d(?:AncillaryFiles|Filename))|cannerStatus(?:RequestsOverviewScan|Warm(?:UpDone|ingUp))|tatus(?:CodeKey|NotificationKey))|TransportType(?:Bluetooth|ExFAT|FireWire|MassStorage|TCPIP|USB))|K(?:FilterBrowser(?:DefaultInputImage|Exclude(?:Categories|Filters)|Filter(?:DoubleClickNotification|SelectedNotification)|Show(?:Categories|Preview)|WillPreviewFilterNotification)|ImageBrowser(?:BackgroundColorKey|C(?:GImage(?:RepresentationType|SourceRepresentationType)|ell(?:BackgroundLayer|ForegroundLayer|PlaceHolderLayer|SelectionLayer|s(?:HighlightedTitleAttributesKey|OutlineColorKey|SubtitleAttributesKey|TitleAttributesKey)))|Group(?:BackgroundColorKey|FooterLayer|HeaderLayer|RangeKey|StyleKey|TitleKey)|IconRef(?:PathRepresentationType|RepresentationType)|NS(?:BitmapImageRepresentationType|DataRepresentationType|ImageRepresentationType|URLRepresentationType)|P(?:DFPageRepresentationType|athRepresentationType)|Q(?:CComposition(?:PathRepresentationType|RepresentationType)|TMovie(?:PathRepresentationType|RepresentationType)|uickLookPathRepresentationType)|SelectionColorKey)|OverlayType(?:Background|Image)|PictureTaker(?:Allows(?:EditingKey|FileChoosingKey|VideoCaptureKey)|CropAreaSizeKey|I(?:mageTransformsKey|nformationalTextKey)|OutputImageMaxSizeKey|RemainOpenAfterValidateKey|Show(?:AddressBookPicture(?:Key)?|E(?:ffectsKey|mptyPicture(?:Key)?)|RecentPictureKey)|UpdateRecentPictureKey)|Slideshow(?:AudioFile|Mode(?:Images|Other|PDF)|PDFDisplay(?:Box|Mode|sAsBook)|S(?:creen|tart(?:Index|Paused))|WrapAround)|ToolMode(?:Annotate|Crop|Move|None|Rotate|Select(?:Ellipse|Lasso|Rect)?)|UI(?:FlavorAllowFallback|Size(?:Flavor|Mini|Regular|Small)|maxSize)|_(?:ApertureBundleIdentifier|MailBundleIdentifier|PhotosBundleIdentifier|iPhotoBundleIdentifier))|MKTextOrientationName|OBluetooth(?:H(?:andsFree(?:Call(?:Direction|Index|M(?:ode|ultiparty)|N(?:ame|umber)|Status|Type)|Indicator(?:BattChg|Call(?:Held|Setup)?|Roam|S(?:ervice|ignal)))|ostControllerPoweredO(?:ffNotification|nNotification))|L2CAPChannel(?:PublishedNotification|TerminatedNotification)|PDU(?:Encoding|OriginatingAddress(?:Type)?|ProtocolID|Servic(?:CenterAddress|eCenterAddressType)|T(?:imestamp|ype)|UserData)))|MDLVertexAttribute(?:Anisotropy|Bi(?:normal|tangent)|Color|EdgeCrease|Joint(?:Indices|Weights)|Normal|OcclusionValue|Position|S(?:hadingBasis(?:U|V)|ubdivisionStencil)|T(?:angent|extureCoordinate))|NS(?:A(?:ddedPersistentStoresKey|ffected(?:ObjectsErrorKey|StoresErrorKey))|BinaryStoreType|CoreDataVersionNumber|De(?:letedObjectsKey|tailedErrorsKey)|ErrorMergePolicy|FetchRequestExpressionType|I(?:gnorePersistentStoreVersioningOption|n(?:MemoryStoreType|ferMappingModelAutomaticallyOption|sertedObjectsKey|validated(?:AllObjectsKey|ObjectsKey)))|M(?:anagedObjectContext(?:DidSaveNotification|ObjectsDidChangeNotification|WillSaveNotification)|ergeByProperty(?:ObjectTrumpMergePolicy|StoreTrumpMergePolicy)|igrat(?:ePersistentStoresAutomaticallyOption|ion(?:DestinationObjectKey|Entity(?:MappingKey|PolicyKey)|ManagerKey|PropertyMappingKey|SourceObjectKey)))|OverwriteMergePolicy|P(?:ersistentStore(?:Coordinator(?:StoresDidChangeNotification|WillRemoveStoreNotification)|FileProtectionKey|OSCompatibility|SaveConflictsErrorKey|TimeoutOption)|ref(?:PaneHelpMenu(?:AnchorKey|InfoPListKey|TitleKey)|erenceP(?:ane(?:CancelUnselectNotification|DoUnselectNotification|SwitchToPaneNotification|UpdateHelpMenuNotification)|refPaneIsAvailableNotification)))|R(?:e(?:adOnlyPersistentStoreOption|freshedObjectsKey|movedPersistentStoresKey)|ollbackMergePolicy)|S(?:QLite(?:AnalyzeOption|ErrorDomain|ManualVacuumOption|PragmasOption|StoreType)|tore(?:ModelVersion(?:HashesKey|IdentifiersKey)|TypeKey|UUIDKey))|U(?:UIDChangedPersistentStoresKey|pdatedObjectsKey)|Validat(?:eXMLStoreOption|ion(?:KeyErrorKey|ObjectErrorKey|PredicateErrorKey|ValueErrorKey))|XMLStoreType)|OSAS(?:criptError(?:App(?:AddressKey|Name(?:Key)?)|BriefMessage(?:Key)?|ExpectedTypeKey|Message(?:Key)?|Number(?:Key)?|OffendingObjectKey|PartialResultKey|Range(?:Key)?)|torage(?:Application(?:BundleType|Type)|Script(?:BundleType|Type)|TextType))|PDF(?:Document(?:AuthorAttribute|Creat(?:ionDateAttribute|orAttribute)|Did(?:Begin(?:FindNotification|Page(?:FindNotification|WriteNotification)|WriteNotification)|End(?:FindNotification|Page(?:FindNotification|WriteNotification)|WriteNotification)|FindMatchNotification|UnlockNotification)|KeywordsAttribute|ModificationDateAttribute|OwnerPasswordOption|ProducerAttribute|SubjectAttribute|TitleAttribute|UserPasswordOption)|ThumbnailViewDocumentEditedNotification|View(?:Annotation(?:HitNotification|WillHitNotification)|C(?:hangedHistoryNotification|opyPermissionNotification)|D(?:isplay(?:BoxChangedNotification|ModeChangedNotification)|ocumentChangedNotification)|P(?:ageChangedNotification|rintPermissionNotification)|S(?:caleChangedNotification|electionChangedNotification)|VisiblePagesChangedNotification))|QCCompositionInputPaceKey|SF(?:AuthorizationPluginViewUser(?:NameKey|ShortNameKey)|CertificateViewDisclosureStateDidChange|DisplayViewException)|globalUpdateOK|k(?:C(?:A(?:A(?:lignment(?:Center|Justified|Left|Natural|Right)|nimation(?:Cubic(?:Paced)?|Discrete|Linear|Paced|RotateAuto(?:Reverse)?))|EmitterLayer(?:Additive|BackToFront|C(?:ircle|uboid)|Line|O(?:ldest(?:First|Last)|utline)|Point(?:s)?|Rectangle|S(?:phere|urface)|Unordered|Volume)|Fil(?:l(?:Mode(?:B(?:ackwards|oth)|Forwards|Removed)|Rule(?:EvenOdd|NonZero))|ter(?:Linear|Nearest|Trilinear))|Gra(?:dientLayer(?:Axial|Radial)|vity(?:Bottom(?:Left|Right)?|Center|Left|R(?:esize(?:Aspect(?:Fill)?)?|ight)|Top(?:Left|Right)?))|Line(?:Cap(?:Butt|Round|Square)|Join(?:Bevel|Miter|Round))|MediaTimingFunction(?:Default|Ease(?:In(?:EaseOut)?|Out)|Linear)|OnOrder(?:In|Out)|RendererColorSpace|Scroll(?:Both|Horizontally|None|Vertically)|Tr(?:ans(?:action(?:Animation(?:Duration|TimingFunction)|CompletionBlock|DisableActions)|ition(?:F(?:ade|rom(?:Bottom|Left|Right|Top))|MoveIn|Push|Reveal)?)|uncation(?:End|Middle|None|Start))|ValueFunction(?:Rotate(?:X|Y|Z)|Scale(?:X|Y|Z)?|Translate(?:X|Y|Z)?))|I(?:A(?:ctiveKeys|pplyOption(?:ColorSpace|Definition|Extent|UserInfo)|ttribute(?:Class|D(?:e(?:fault|scription)|isplayName)|Filter(?:Categories|DisplayName|Name)|Identity|M(?:ax|in)|Name|ReferenceDocumentation|SliderM(?:ax|in)|Type(?:Angle|Boolean|Count|Distance|Gradient|Integer|O(?:ffset|paqueColor)|Position(?:3)?|Rectangle|Scalar|Time)?))|C(?:ategory(?:B(?:lur|uiltIn)|Co(?:lor(?:Adjustment|Effect)|mpositeOperation)|DistortionEffect|FilterGenerator|G(?:e(?:nerator|ometryAdjustment)|radient)|H(?:alftoneEffect|ighDynamicRange)|Interlaced|NonSquarePixels|Reduction|S(?:harpen|t(?:illImage|ylize))|T(?:ileEffect|ransition)|Video)|ontext(?:Output(?:ColorSpace|Premultiplied)|UseSoftwareRenderer|Working(?:ColorSpace|Format)))|F(?:ilterGeneratorExportedKey(?:Name|TargetObject)?|ormat(?:ARGB8|BGRA8|RGBA(?:16|8|f|h)))|I(?:mage(?:ColorSpace|Provider(?:TileSize|UserInfo))|nput(?:A(?:llowDraftModeKey|ngleKey|spectRatioKey)|B(?:ackgroundImageKey|iasKey|oost(?:Key|ShadowAmountKey)|rightnessKey)|C(?:enterKey|o(?:lorKey|ntrastKey))|DecoderVersionKey|E(?:VKey|nable(?:ChromaticNoiseTrackingKey|SharpeningKey)|xtentKey)|GradientImageKey|I(?:gnoreImageOrientationKey|mage(?:Key|OrientationKey)|ntensityKey)|LinearSpaceFilter|MaskImageKey|N(?:eutral(?:Chromaticity(?:XKey|YKey)|LocationKey|T(?:emperatureKey|intKey))|oiseReductionAmountKey)|R(?:adiusKey|efractionKey)|S(?:aturationKey|cale(?:FactorKey|Key)|ha(?:dingImageKey|rpnessKey))|T(?:argetImageKey|imeKey|ransformKey)|WidthKey))|Output(?:ImageKey|NativeSizeKey)|S(?:ampler(?:AffineMatrix|ColorSpace|Filter(?:Linear|Mode|Nearest)|Wrap(?:Black|Clamp|Mode))|upportedDecoderVersionsKey)|UI(?:ParameterSet|Set(?:Advanced|Basic|Development|Intermediate))))|FTS(?:Listing(?:NameKey|SizeKey|TypeKey)|Progress(?:BytesT(?:otalKey|ransferredKey)|EstimatedTimeKey|P(?:ercentageKey|recentageKey)|T(?:imeElapsedKey|ransferRateKey)))|OBEXHeaderIDKey(?:A(?:ppParameters|uthorization(?:Challenge|Response))|B(?:ody|yteSequence)|Co(?:nnectionID|unt)|Description|EndOfBody|HTTP|Length|Name|ObjectClass|T(?:arget|ime(?:4Byte|ISO)|ype)|U(?:nknown(?:1ByteQuantity|4ByteQuantity|ByteSequence|UnicodeText)|serDefined)|Who)|PDFDestinationUnspecifiedValue|QuartzFilter(?:ApplicationDomain|ManagerDid(?:AddFilterNotification|ModifyFilterNotification|RemoveFilterNotification|SelectFilterNotification)|P(?:DFWorkflowDomain|rintingDomain))))\\b',
      name: 'support.variable.objc'
    }
  ],
  repository: {
    functions: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.0.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:HighlightRect|Run(?:AlertPanelRelativeToWindow|CriticalAlertPanelRelativeToWindow|InformationalAlertPanelRelativeToWindow))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.10.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:Begin(?:AlertSheet|CriticalAlertSheet|InformationalAlertSheet)|CopyBits|Get(?:AlertPanel|CriticalAlertPanel|InformationalAlertPanel)|R(?:eleaseAlertPanel|un(?:AlertPanel|CriticalAlertPanel|InformationalAlertPanel)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.11.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:AccessibilityRaiseBadArgumentException|DisableScreenUpdates|EnableScreenUpdates)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.13.support.function.cocoa.objc'}
          },
          match: '(\\s*)(\\bNSConvertGlyphsToPackedGlyphs\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.14.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:GetWindowServerMemory|OpenGL(?:Get(?:Option|Version)|SetOption)|ReadPixel)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.5.support.function.cocoa.objc'}
          },
          match: '(\\s*)(\\bNXReadNSObjectFromCoder\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.5.support.function.run-time.objc'}
          },
          match:
            '(\\s*)(\\b(?:class_(?:createInstanceFromZone|lookupMethod|respondsToMethod|setSuperclass)|object_copyFromZone)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.6.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:CountWindows(?:ForContext)?|WindowList(?:ForContext)?)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.6.support.function.objc'}
          },
          match:
            '(\\s*)(\\bIOBluetooth(?:GetObjectIDFromArguments|OBEXSessionCreateWithIncomingIOBluetoothRFCOMMChannel)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.8.support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:CopyObject|InterfaceStyleForKey|RealMemoryAvailable)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.11.objc'}
          },
          match:
            '(\\s*)(\\b(?:CGDirectDisplayCopyCurrentMetalDevice|MT(?:KM(?:etalVertex(?:DescriptorFromModelIO|FormatFromModelIO)|odelIOVertex(?:DescriptorFromMetal|FormatFromMetal))|LC(?:opyAllDevices|reateSystemDefaultDevice)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.12.objc'}
          },
          match:
            '(\\s*)(\\bMTKM(?:etalVertexDescriptorFromModelIOWithError|odelIOVertexDescriptorFromMetalWithError)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.13.objc'}
          },
          match:
            '(\\s*)(\\bMTL(?:CopyAllDevicesWithObserver|RemoveDeviceObserver|SamplePositionMake)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.14.objc'}
          },
          match: '(\\s*)(\\bMTLIndirectCommandBufferExecutionRangeMake\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.15.objc'}
          },
          match: '(\\s*)(\\bMTLTextureSwizzleChannelsMake\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cocoa.10.10.objc'}
          },
          match:
            '(\\s*)(\\bNS(?:Accessibility(?:FrameInView|PointInView)|EdgeInsetsEqual)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cocoa.10.15.objc'}
          },
          match: '(\\s*)(\\bNSDirectionalEdgeInsetsMake\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cocoa.objc'}
          },
          match:
            '(\\s*)(\\b(?:ABLocalizedPropertyOrLabel|CFBridgingRe(?:lease|tain)|NS(?:A(?:ccessibility(?:ActionDescription|PostNotification(?:WithUserInfo)?|RoleDescription(?:ForUIElement)?|SetMayContainProtectedContent|Unignored(?:Ancestor|Children(?:ForOnlyChild)?|Descendant))|ll(?:HashTableObjects|MapTable(?:Keys|Values)|ocate(?:Collectable|MemoryPages|Object))|pplication(?:Load|Main)|vailableWindowDepths)|B(?:e(?:ep|stDepth)|itsPer(?:PixelFromDepth|SampleFromDepth))|C(?:lassFromString|o(?:lorSpaceFromDepth|mpare(?:HashTables|MapTables)|n(?:tainsRect|vert(?:Host(?:DoubleToSwapped|FloatToSwapped)|Swapped(?:DoubleToHost|FloatToHost)))|py(?:HashTableWithZone|M(?:apTableWithZone|emoryPages))|unt(?:HashTable|MapTable))|reate(?:File(?:ContentsPboardType|namePboardType)|HashTable(?:WithZone)?|MapTable(?:WithZone)?|Zone))|D(?:e(?:allocate(?:MemoryPages|Object)|c(?:imal(?:Add|Co(?:mpa(?:ct|re)|py)|Divide|IsNotANumber|Multiply(?:ByPowerOf10)?|Normalize|Power|Round|S(?:tring|ubtract))|rementExtraRefCountWasZero)|faultMallocZone)|ivideRect|ottedFrameRect|raw(?:B(?:itmap|utton)|ColorTiledRects|DarkBezel|Gr(?:ayBezel|oove)|LightBezel|NinePartImage|T(?:hreePartImage|iledRects)|W(?:hiteBezel|indowBackground)))|E(?:dgeInsetsMake|n(?:d(?:HashTableEnumeration|MapTableEnumeration)|umerate(?:HashTable|MapTable))|qual(?:Points|R(?:anges|ects)|Sizes)|raseRect|ventMaskFromType|x(?:ceptionHandlerResume|traRefCount))|F(?:ileTypeForHFSTypeCode|r(?:ameRect(?:WithWidth(?:UsingOperation)?)?|ee(?:HashTable|MapTable))|ullUserName)|Get(?:FileType(?:s)?|SizeAndAlignment|UncaughtExceptionHandler)|H(?:FSType(?:CodeFromFileType|OfFile)|ash(?:Get|Insert(?:IfAbsent|KnownAbsent)?|Remove)|eight|o(?:meDirectory(?:ForUser)?|stByteOrder))|I(?:n(?:crementExtraRefCount|setRect|te(?:gralRect(?:WithOptions)?|rsect(?:ionR(?:ange|ect)|sRect)))|s(?:ControllerMarker|EmptyRect))|Lo(?:cationInRange|g(?:PageSize|v)?)|M(?:a(?:ke(?:Collectable|Point|R(?:ange|ect)|Size)|p(?:Get|Insert(?:IfAbsent|KnownAbsent)?|Member|Remove)|x(?:Range|X|Y))|i(?:d(?:X|Y)|n(?:X|Y))|ouseInRect)|N(?:ext(?:HashEnumeratorItem|MapEnumeratorPair)|umberOfColorComponents)|O(?:ffsetRect|penStepRootDirectory)|P(?:ageSize|erformService|lanarFromDepth|oint(?:From(?:CGPoint|String)|InRect|ToCGPoint)|rotocolFromString)|R(?:angeFromString|e(?:allocateCollectable|c(?:t(?:Clip(?:List)?|F(?:ill(?:List(?:UsingOperation|With(?:Colors(?:UsingOperation)?|Grays))?|UsingOperation)?|rom(?:CGRect|String))|ToCGRect)|ycleZone)|gisterServicesProvider|set(?:HashTable|MapTable))|ound(?:DownToMultipleOfPageSize|UpToMultipleOfPageSize))|S(?:e(?:archPathForDirectoriesInDomains|lectorFromString|t(?:FocusRingStyle|ShowsServicesMenuItem|UncaughtExceptionHandler|ZoneName))|ho(?:uldRetainWithZone|w(?:AnimationEffect|sServicesMenuItem))|ize(?:From(?:CGSize|String)|ToCGSize)|tringFrom(?:Class|HashTable|MapTable|P(?:oint|rotocol)|R(?:ange|ect)|S(?:elector|ize))|wap(?:Big(?:DoubleToHost|FloatToHost|IntToHost|Long(?:LongToHost|ToHost)|ShortToHost)|Double|Float|Host(?:DoubleTo(?:Big|Little)|FloatTo(?:Big|Little)|IntTo(?:Big|Little)|Long(?:LongTo(?:Big|Little)|To(?:Big|Little))|ShortTo(?:Big|Little))|Int|L(?:ittle(?:DoubleToHost|FloatToHost|IntToHost|Long(?:LongToHost|ToHost)|ShortToHost)|ong(?:Long)?)|Short))|T(?:emporaryDirectory|ouchTypeMaskFromType)|U(?:n(?:ionR(?:ange|ect)|registerServicesProvider)|pdateDynamicServices|serName)|Width|Zone(?:Calloc|Fr(?:ee|omPointer)|Malloc|Name|Realloc)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.objc'}
          },
          match:
            '(\\s*)(\\b(?:AuthorizationPluginCreate|IOBluetooth(?:DeviceRegisterForDisconnectNotification|FindNumberOfRegistryEntriesOfClassName|Get(?:DeviceSelectorController|PairingController|UniqueFileNameAndPath)|I(?:gnoreHIDDevice|sFileAppleDesignatedPIMData)|L2CAPChannelRegisterForChannelCloseNotification|N(?:SString(?:FromDeviceAddress(?:Colon)?|ToDeviceAddress)|umberOf(?:AvailableHIDDevices|KeyboardHIDDevices|PointingHIDDevices|TabletHIDDevices))|PackData(?:List)?|R(?:FCOMMChannelRegisterForChannelCloseNotification|e(?:gisterFor(?:DeviceConnectNotifications|Filtered(?:L2CAPChannelOpenNotifications|RFCOMMChannelOpenNotifications)|L2CAPChannelOpenNotifications|RFCOMMChannelOpenNotifications)|moveIgnoredHIDDevice))|U(?:npackData(?:List)?|serNotificationUnregister)|ValidateHardwareWithDescription)|MTL(?:C(?:learColorMake|oordinate2DMake)|OriginMake|RegionMake(?:1D|2D|3D)|SizeMake)|OBEX(?:Add(?:A(?:pplicationParameterHeader|uthorization(?:ChallengeHeader|ResponseHeader))|B(?:odyHeader|yteSequenceHeader)|Co(?:nnectionIDHeader|untHeader)|DescriptionHeader|HTTPHeader|LengthHeader|NameHeader|ObjectClassHeader|T(?:argetHeader|ime(?:4ByteHeader|ISOHeader)|ypeHeader)|UserDefinedHeader|WhoHeader)|GetHeaders|HeadersToBytes)|SS(?:CenteredRectInRect|Random(?:FloatBetween|IntBetween|PointForSizeWithinRect)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.run-time.10.10.objc'}
          },
          match: '(\\s*)(\\bobject_isClass\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.run-time.10.12.objc'}
          },
          match:
            '(\\s*)(\\b(?:object_setI(?:nstanceVariableWithStrongDefault|varWithStrongDefault)|protocol_copyPropertyList2)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.run-time.10.14.objc'}
          },
          match: '(\\s*)(\\bobjc_setHook_get(?:Class|ImageName)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.run-time.10.15.objc'}
          },
          match:
            '(\\s*)(\\bobjc_(?:addLoadImageFunc|setHook_setAssociatedObject)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.run-time.objc'}
          },
          match:
            '(\\s*)(\\b(?:class_(?:add(?:Ivar|Method(?:s)?|Pro(?:perty|tocol))|c(?:o(?:nformsToProtocol|py(?:IvarList|MethodList|Pro(?:pertyList|tocolList)))|reateInstance)|get(?:Class(?:Method|Variable)|I(?:mageName|nstance(?:Method|Size|Variable)|varLayout)|MethodImplementation(?:_stret)?|Name|Property|Superclass|Version|WeakIvarLayout)|isMetaClass|nextMethodList|poseAs|re(?:moveMethods|place(?:Method|Property)|spondsToSelector)|set(?:IvarLayout|Version|WeakIvarLayout))|i(?:mp_(?:getBlock|implementationWithBlock|removeBlock)|var_get(?:Name|Offset|TypeEncoding))|method_(?:copy(?:ArgumentType|ReturnType)|exchangeImplementations|get(?:Argument(?:Info|Type)|Description|Implementation|N(?:ame|umberOfArguments)|ReturnType|SizeOfArguments|TypeEncoding)|setImplementation)|obj(?:c_(?:a(?:ddClass|llocate(?:ClassPair|Protocol))|co(?:nstructInstance|py(?:Class(?:List|NamesForImage)|ImageNames|ProtocolList))|d(?:estructInstance|isposeClassPair|uplicateClass)|enumerationMutation|get(?:AssociatedObject|Class(?:List|es)?|FutureClass|MetaClass|OrigClass|Protocol|RequiredClass)|lo(?:adWeak|okUpClass)|re(?:gister(?:ClassPair|Protocol)|moveAssociatedObjects|tainedObject)|s(?:et(?:AssociatedObject|ClassHandler|EnumerationMutationHandler|ForwardHandler|Multithreaded)|toreWeak)|unretained(?:Object|Pointer))|ect_(?:copy|dispose|get(?:Class(?:Name)?|I(?:n(?:dexedIvars|stanceVariable)|var))|realloc(?:FromZone)?|set(?:Class|I(?:nstanceVariable|var))))|pro(?:perty_(?:copyAttribute(?:List|Value)|get(?:Attributes|Name))|tocol_(?:add(?:MethodDescription|Pro(?:perty|tocol))|co(?:nformsToProtocol|py(?:MethodDescriptionList|Pro(?:pertyList|tocolList)))|get(?:MethodDescription|Name|Property)|isEqual))|sel_(?:get(?:Name|Uid)|is(?:Equal|Mapped)|registerName))\\b)'
        }
      ]
    },
    protocols: {
      patterns: [
        {
          match: '\\bNSConnectionDelegate\\b',
          name: 'invalid.deprecated.10.13.support.other.protocol.cocoa.objc'
        },
        {
          match:
            '\\b(?:DOM(?:Event(?:Listener|Target)|NodeFilter|XPathNSResolver)|Web(?:Do(?:cument(?:Representation|Searching|Text|View)|wnloadDelegate)|EditingDelegate|FrameLoadDelegate|OpenPanelResultListener|P(?:lugInViewFactory|olicyDe(?:cisionListener|legate))|ResourceLoadDelegate|UIDelegate))\\b',
          name: 'invalid.deprecated.10.14.support.other.protocol.cocoa.objc'
        },
        {
          match:
            '\\bQC(?:CompositionRenderer|PlugIn(?:Context|InputImageSource|OutputImageProvider))\\b',
          name: 'invalid.deprecated.10.15.support.other.protocol.objc'
        },
        {
          match: '\\bNSURLHandleClient\\b',
          name: 'invalid.deprecated.10.4.support.other.protocol.cocoa.objc'
        },
        {
          match:
            '\\bM(?:DL(?:Component|MeshBuffer(?:Allocator|Zone)?|Named|ObjectContainerComponent|TransformComponent)|T(?:KViewDelegate|L(?:B(?:litCommandEncoder|uffer)|Com(?:mand(?:Buffer|Encoder|Queue)|pute(?:CommandEncoder|PipelineState))|D(?:e(?:pthStencilState|vice)|rawable)|Function|Library|ParallelRenderCommandEncoder|Re(?:nder(?:CommandEncoder|PipelineState)|source)|SamplerState|Texture)))\\b',
          name: 'support.other.protocol.10.11.objc'
        },
        {
          match: '\\bCIImageProcessor(?:Input|Output)\\b',
          name: 'support.other.protocol.10.12.objc'
        },
        {
          match:
            '\\bM(?:DL(?:AssetResolver|JointAnimation|TransformOp)|TL(?:ArgumentEncoder|CaptureScope|Fence|Heap))\\b',
          name: 'support.other.protocol.10.13.objc'
        },
        {
          match:
            '\\bMTL(?:Event|Indirect(?:CommandBuffer|RenderCommand)|SharedEvent)\\b',
          name: 'support.other.protocol.10.14.objc'
        },
        {
          match:
            '\\bMTL(?:Counter(?:S(?:ampleBuffer|et))?|RasterizationRateMap)\\b',
          name: 'support.other.protocol.10.15.objc'
        },
        {
          match: '\\bNSUserActivityDelegate\\b',
          name: 'support.other.protocol.cocoa.10.10.objc'
        },
        {
          match:
            '\\b(?:NS(?:Accessibility(?:CustomRotorItemSearchDelegate|ElementLoading)|ItemProvider(?:Reading|Writing))|WK(?:HTTPCookieStoreObserver|URLScheme(?:Handler|Task)))\\b',
          name: 'support.other.protocol.cocoa.10.13.objc'
        },
        {
          match: '\\bUNUserNotificationCenterDelegate\\b',
          name: 'support.other.protocol.cocoa.10.14.objc'
        },
        {
          match:
            '\\bNS(?:CollectionLayout(?:Container|Environment|VisibleItem)|URLSessionWebSocketDelegate)\\b',
          name: 'support.other.protocol.cocoa.10.15.objc'
        },
        {
          match:
            '\\b(?:ABImageClient|NS(?:A(?:ccessibility(?:Button|C(?:heckBox|ontainsTransientUI)|Element|Group|Image|L(?:ayout(?:Area|Item)|ist)|NavigableStaticText|Outline|ProgressIndicator|R(?:adioButton|ow)|S(?:lider|t(?:aticText|epper)|witch)|Table)?|l(?:ertDelegate|ignmentFeedbackToken)|nimat(?:ablePropertyContainer|ionDelegate)|pp(?:earanceCustomization|licationDelegate))|BrowserDelegate|C(?:a(?:cheDelegate|ndidateListTouchBarItemDelegate)|hangeSpelling|loudSharing(?:ServiceDelegate|Validation)|o(?:ding|l(?:lectionView(?:D(?:ataSource|elegate(?:FlowLayout)?)|Element|Prefetching|SectionHeaderView)|or(?:Changing|Picking(?:Custom|Default)))|mboBox(?:CellDataSource|D(?:ataSource|elegate))|ntrolTextEditingDelegate|pying))|D(?:atePickerCellDelegate|ecimalNumberBehaviors|iscardableContent|ockTilePlugIn|ra(?:gging(?:Destination|Info|Source)|werDelegate))|E(?:ditor(?:Registration)?|xtensionRequestHandling)|F(?:astEnumeration|ile(?:ManagerDelegate|Pr(?:esenter|omiseProviderDelegate))|ontChanging)|G(?:estureRecognizerDelegate|lyphStorage)|HapticFeedbackPerformer|I(?:gnoreMisspelledWords|mageDelegate|nputServ(?:erMouseTracker|iceProvider))|Keyed(?:ArchiverDelegate|UnarchiverDelegate)|L(?:ayoutManagerDelegate|ocking)|M(?:a(?:chPortDelegate|trixDelegate)|e(?:nu(?:Delegate|ItemValidation)|tadataQueryDelegate)|utableCopying)|NetService(?:BrowserDelegate|Delegate)|O(?:penSavePanelDelegate|utlineViewD(?:ataSource|elegate))|P(?:a(?:geControllerDelegate|steboard(?:ItemDataProvider|Reading|TypeOwner|Writing)|thC(?:ellDelegate|ontrolDelegate))|o(?:poverDelegate|rtDelegate)|r(?:intPanelAccessorizing|ogressReporting))|RuleEditorDelegate|S(?:crubber(?:D(?:ataSource|elegate)|FlowLayoutDelegate)|e(?:archFieldDelegate|cureCoding|guePerforming|rvicesMenuRequestor)|haringService(?:Delegate|Picker(?:Delegate|To(?:olbarItemDelegate|uchBarItemDelegate)))|oundDelegate|p(?:e(?:ech(?:RecognizerDelegate|SynthesizerDelegate)|llServerDelegate)|litViewDelegate|ringLoadingDestination)|t(?:a(?:ckViewDelegate|ndardKeyBindingResponding)|reamDelegate))|T(?:ab(?:ViewDelegate|leViewD(?:ataSource|elegate))|ext(?:AttachmentC(?:ell|ontainer)|CheckingClient|Delegate|Fi(?:eldDelegate|nder(?:BarContainer|Client))|Input(?:Client|Traits)?|LayoutOrientationProvider|StorageDelegate|ViewDelegate)|o(?:kenField(?:CellDelegate|Delegate)|olbar(?:Delegate|ItemValidation)|uchBar(?:Delegate|Provider)))|U(?:RL(?:AuthenticationChallengeSender|ConnectionD(?:ataDelegate|elegate|ownloadDelegate)|DownloadDelegate|ProtocolClient|Session(?:D(?:ataDelegate|elegate|ownloadDelegate)|StreamDelegate|TaskDelegate))|ser(?:ActivityRestoring|Interface(?:Compression|Item(?:Identification|Searching)|Validations)|NotificationCenterDelegate))|V(?:alidatedUserInterfaceItem|iew(?:ControllerPresentationAnimator|LayerContentScaleDelegate|ToolTipOwner))|Window(?:Delegate|Restoration)|X(?:MLParserDelegate|PC(?:ListenerDelegate|ProxyCreating)))|WK(?:NavigationDelegate|ScriptMessageHandler|UIDelegate))\\b',
          name: 'support.other.protocol.cocoa.objc'
        },
        {
          match:
            '\\b(?:A(?:MWorkflowControllerDelegate|UAudioUnitFactory)|C(?:A(?:A(?:ction|nimationDelegate)|Lay(?:erDelegate|outManager)|Me(?:diaTiming|talDrawable))|I(?:Filter(?:Constructor)?|PlugInRegistration)|X(?:Call(?:DirectoryExtensionContextDelegate|ObserverDelegate)|ProviderDelegate))|DR(?:FileDataProduction|TrackDataProduction)|I(?:C(?:CameraDeviceD(?:elegate|ownloadDelegate)|Device(?:BrowserDelegate|Delegate)|ScannerDeviceDelegate)|K(?:CameraDeviceViewDelegate|DeviceBrowserViewDelegate|FilterCustomUIProvider|ImageEditPanelDataSource|S(?:cannerDeviceViewDelegate|lideshowDataSource))|MK(?:TextInput|UnicodeTextInput)|OBluetooth(?:Device(?:AsyncCallbacks|InquiryDelegate|PairDelegate)|HandsFree(?:AudioGatewayDelegate|De(?:legate|viceDelegate))|L2CAPChannelDelegate|RFCOMMChannelDelegate))|MDLLightProbeIrradianceDataSource|NS(?:Fetch(?:RequestResult|edResults(?:ControllerDelegate|SectionInfo))|Object)|PDF(?:DocumentDelegate|ViewDelegate)|QLPreview(?:Item|PanelD(?:ataSource|elegate)|ingController))\\b',
          name: 'support.other.protocol.objc'
        }
      ]
    }
  },
  scopeName: 'source.objc.platform'
}

export default grammar
